# frozen_string_literal: true

module Jekyll
  require 'json'

  $index_array = [] # global index variable
  # File.write(path, output, :mode => "wb")

  class IndexGenerator
    def generate(site)
      # clear previous elements
      $index_array.clear

      site.collections['article'].docs.each do |doc|
        section_array = get_sectionlist(doc.content)
        entry = { url: doc.data['slug'], title: doc.data['title'], tags: doc.data['tags'], sections: section_array }
        $index_array.push(entry)

        # site.pages
        # puts doc.dest  # data["slug"]
        # puts doc.data # output: {"draft"=>false, "categories"=>[], "layout"=>"page", "permalink"=>"/:name", "title"=>"Reflection", "slug"=>"reflection", "ext"=>".md", "tags"=>[], "excerpt"=><Excerpt: /reflection#excerpt>, "date"=>2017-03-29 11:41:21 +0200}
        # puts doc.path
        # puts doc.collection.label
        # puts entry
        # puts entry  # gotcha!
        # json_title = doc.data["title"].to_json
        # json_tags = doc.data["tags"].to_json
      end
    end

    SECTION_REGEXP = /(?:^|\n)\s*## (.*?)\s*(?:\n|$)/.freeze
    TAGS_REGEXP = /(?:\n|^)\s*tags:\s*(\[.*?\])\s*(?:$|\n)/.freeze

    def get_sectionlist(content)
      section_array = []

      content.scan(SECTION_REGEXP) do |match|
        section = match[0] # $1
        section_array.push(section)
      end
      section_array
    end
  end

  # write global index array to JS file
  class SearchIndex
    def generate(site)
      json_string = 'search_index = ' + $index_array.to_json

      js_text = File.read(site.dest + JS_PATH)
      js_text = js_text.gsub(/const search_index = [^\n]+/, 'var ' + json_string)
      File.write(site.dest + JS_PATH, js_text)
      File.write(site.dest + '/assets/js/search_index.json', json_string)
    end

    JS_PATH = '/assets/js/t4t_search.js'
  end

  # the TocGenerator creates two kinds of TOCs
  # 1. folder TOCs for articles with the same name as their parent folder
  #    folder TOCs need the {{ FOLDER_TOC }} tag in the .md file to be displayed
  # 2. local TOCs within each file
  #    local TOCs are generated completely automatic and only if necessary (large file)
  class TocGenerator
    MAIN_INDEX_TITLE = 'Tex4TUM'
    TOC_TOKEN_RE = /\{\{\s*FOLDER_TOC\s*\}\}/.freeze
    MIN_LINES_FOR_LOCAL_TOC = 250   # required lines of the .md file to get a TOC
    MIN_HEADINGS_FOR_LOCAL_TOC = 4  # required number of headings to get a TOC

    def generate(site)
      puts ' - Generating Folder List...'
      folderHash = get_folderlist(site)

      puts ' - Generating Table of Contents (TOC)...'
      # create tocs
      site.collections['article'].docs.each do |doc|
        # find main index file
        if doc.data['title'] == MAIN_INDEX_TITLE
          toc = createFolderTOC(folderHash, 3)
          doc.content = doc.content.sub(TOC_TOKEN_RE) { toc }
        end

        # find folder articles (articles with the same name as their folder)
        relpath = doc.relative_path.sub(doc.collection.relative_directory, '')[1..-1]
        if relpath[%r{(?:^|/)([^/]*)/\1}] # find paths of the form ...foo/foo.md
          folders = File.dirname(relpath).split('/')
          if folders[2]
            toc = createFolderTOC(folderHash[folders[0]][folders[1]][folders[2]], 2)
          elsif folders[1]
            toc = createFolderTOC(folderHash[folders[0]][folders[1]], 2)
          elsif folders[0]
            toc = createFolderTOC(folderHash[folders[0]], 2)
          end
          doc.content = doc.content.sub(TOC_TOKEN_RE) { toc }
        end

        # create local TOCs (if necessary)
        doc.content = createLocalTOC(doc.content)
      end
    end

    def get_folderlist(site)
      folderHash = {}

      # find folders
      site.collections.each do |_label, collection|
        collection.docs.each do |document|
          next unless document.path.include?('.md')

          basepath = document.path[/.*?_article/]
          filename = File.basename(document.path)
          filebasename = filename.sub('.md', '')
          relpath = File.dirname(document.relative_path.sub(document.collection.relative_directory, '')[1..-1])

          folders = relpath.split('/')
          folders = folders[0..-1]

          # add folder
          if folders[0]
            if !folderHash.key?(folders[0]) && (folders[0] != '.')
              folderHash[folders[0]] = {}
              folderHash.delete(folders[0] + '.md')
            end
          end
          if folders[1]
            unless folderHash[folders[0]].key?(folders[1])
              folderHash[folders[0]][folders[1]] = {}
              folderHash[folders[0]].delete(folders[1] + '.md')
            end
          end
          if folders[2]
            unless folderHash[folders[0]][folders[1]].key?(folders[2])
              folderHash[folders[0]][folders[1]][folders[2]] = {}
              folderHash[folders[0]][folders[1]].delete(folders[2] + '.md')
            end
          end

          # add filename
          if filename.include?('.md')
            if folders[2]
              if filebasename != folders[2]
                folderHash[folders[0]][folders[1]][folders[2]][filename] = document.data['title']
              end
            elsif folders[1]
              folderHash[folders[0]][folders[1]][filename] = document.data['title'] if filebasename != folders[1]
            elsif folders[0] && (folders[0] != '.')
              folderHash[folders[0]][filename] = document.data['title'] if filebasename != folders[0]
            elsif folders[0].nil?
              folderHash[filename] = document.data['title']
            end
          end
        end
      end

      folderHash
    end

    def createFolderTOC(ahash, level)
      toc_string = "## {% icon fa-list-ul %} Subfolders and Articles\n"
      ahash.each do |key, val|
        if key.include?('.md')
          pagename = key.sub('.md', '.html')
          toc_string += "* [#{val}](#{pagename})\n"
        else
          title = key.capitalize
          toc_string += "* [**#{title}**](#{key}.html)\n"
          val.each do |key, val|
            if key.include?('.md')
              pagename = key.sub('.md', '.html')
              toc_string += "    - [#{val}](#{pagename})\n"
            else
              title = key.capitalize
              toc_string += "    - [**#{title}**](#{key}.html)"
              if level >= 3
                toc_string += ': '
                val.each do |key, val|
                  if key.include?('.md')
                    val = val.sub(/^.+?\s\(([A-Z0-9-]+)\)$/, '\1')
                    pagename = key.sub('.md', '.html')
                    toc_string += "[#{val}](#{pagename}) • "
                  else
                    toc_string += "[**#{key.capitalize}**](#{key}.html) • "
                  end
                end
                toc_string = toc_string[0..-3]
              end
              toc_string += "\n"
            end
          end
        end
      end
      toc_string
    end

    def createLocalTOC(text)
      # check if wee need a TOC
      return text if text.lines.count < MIN_LINES_FOR_LOCAL_TOC

      toc_string = "## {% icon fa-list-ul %} Table of Contents\n"
      num_of_secs = 0
      text.scan(/(?:^|\n)\s*(#+) +(.*?)\s*(?:\n|$)/) do |matches|
        num_of_secs += 1

        slug = matches[1].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

        if matches[0].length == 2
          toc_string += "* [#{matches[1]}](\##{slug})\n"
        elsif (matches[0].length == 3) && false # true if TOC depth should be 2
          toc_string += "    - [#{matches[1]}](\##{slug})\n"
        end
      end

      # double check if wee need a TOC
      if text.include?('{{LOCAL_TOC}}')
        text = text.sub(/\{\{LOCAL_TOC\}\}/) { |match| "\n\n" + toc_string + "\n\n" }
      elsif num_of_secs > MIN_HEADINGS_FOR_LOCAL_TOC
        text = text.sub(/(?:^|\n)(\n#+ +.*?)\s*(?:\n|$)/) { |match| "\n\n" + toc_string + "\n\n" + match }
      end

      text
    end
  end

  class AcronymParser
    def generate(site)
      acros = []
      ACRONYMS.scan(ABBREVIATION_REGEXP) do |match|
        acros.push([match[1], match[2]])
      end

      site.collections['article'].docs.each do |doc|
        head, main, foot = doc.output.partition(%r{\n\s*<main .*?</main>\s*\n}m)

        # puts "\n\n\n\nmain:\n===================\n", main
        # DEBUG
        # if doc.data['title'].eql?('Kalman Filter')
        #   puts main
        # end

        main.scan(%r{<(?:p|div|li|td|code)>[^<]+?<|>[^<]+?</(?:p|div|li|td|code)>}) do |innerHTML|
          newHTML = innerHTML
          newHTML = insert_reference(newHTML, doc.data['title'])
          newHTML = replace_acronyms(newHTML, acros)

          main = main.sub(innerHTML) { newHTML }
        end

        doc.output = head + main + foot
      end
    end

    def replace_acronyms(text, acros)
      acros.each do |match|
        key = match[0]
        value = match[1]

        text = text.gsub(/(?<=\s|^)#{key}(?=[\s,.]|$)/) { '<abbr title="' + value + '" >' + key + '</abbr>' }
      end
      text
    end


    # insert cross references into arcticles, based on the titles of other articles
    def insert_reference(text, curr_title)
      # puts curr_title
      $index_array.each do |entry|
        next unless (entry[:title] != curr_title) && (entry[:title].length >= 3)

        # title = entry[:title].sub(/ *([^\n]+)$/, '')
        title, acro = entry[:title].scan(/^([^(]+)(?:$| *\(([^)]+)\)$)/)[0]
        unless acro.nil?
          text = text.sub(/(?<=\W|^)#{Regexp.quote(acro)}(?=\W|$)/) { '<a href="' + entry[:url] + "\" title=\"#{title}\">#{acro}</a>" }
        end
        text = text.sub(/(?<=[\s(>]|^)(#{Regexp.quote(title)})(?=[\s,.)<]|$)/i) { "<a href=\"/#{entry[:url]}\" >" + Regexp.last_match(1) + '</a>' }
      end
      text
    end

    ACRONYMS = File.read('./res/parser_util/abbreviations.md', encoding: 'utf-8')
    ABBREVIATION_REGEXP = /(\*\[([^\]]+)\]:\s*([^\n]+)\n)/.freeze
  end

  # ============================================================
  Hooks.register :site, :pre_render do |site| # post_write
    puts 'Hook (pre_render): Indexing all articles...'
    IndexGenerator.new.generate(site)
  end

  # ============================================================
  Hooks.register :site, :pre_render do |site|
    if ENV['JEKYLL_ENV'] == 'production'
      puts 'Hook (pre_render): Generating TOC...'
      TocGenerator.new.generate(site)
    end
  end

  # ============================================================
  Hooks.register :site, :post_write do |site|
    puts 'Hook (post_write): Generating Search Index...'
    SearchIndex.new.generate(site)
  end

  # ============================================================
  Jekyll::Hooks.register(:site, :post_render) do |site|
    if ENV['JEKYLL_ENV'] == 'production'
      puts 'Hook (post_render): cross-references and acronyms'
      AcronymParser.new.generate(site)
    end
  end
end
