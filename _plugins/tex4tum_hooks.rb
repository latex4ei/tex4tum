module Jekyll
  require 'json'

  class IndexGenerator

    def generate(site)
      puts "Generating Search Index..."

      index_array = Array.new

      # puts site.pages

      for page in site.pages do
        #puts page.name
      end


      site.collections.each do |label, collection|
        # puts collection
        # puts label  # output: "posts, article"

        collection.docs.each do |document|

          section_array = get_sectionlist(document.content)

          # puts document.dest  # data["slug"]
          # puts document.data # output: {"draft"=>false, "categories"=>[], "layout"=>"page", "permalink"=>"/:name", "title"=>"Reflection", "slug"=>"reflection", "ext"=>".md", "tags"=>[], "excerpt"=><Excerpt: /reflection#excerpt>, "date"=>2017-03-29 11:41:21 +0200}
          # puts document.path 

          entry = {url: document.data["slug"], title: document.data["title"], tags: document.data["tags"], sections: section_array}
          index_array.push(entry)

          # puts entry  # gotcha!
          json_title = document.data["title"].to_json
          json_tags = document.data["tags"].to_json
        end
      end

      json_string = "search_index = " + index_array.to_json

      
      js_text = File.read(site.dest + JS_PATH)
      js_text = js_text.gsub(/var search_index = [^\n]+/, 'var ' + json_string)
      File.write(site.dest + JS_PATH, js_text)

      File.write(site.dest + '/assets/js/search_index.json', json_string)
    end

    private

    JS_PATH = '/assets/js/perfect-autocompl.js'

    SECTION_REGEXP = %r{(?:^|\n)\s*## (.*?)\s*(?:\n|$)}
    TAGS_REGEXP = %r{(?:\n|^)\s*tags:\s*(\[.*?\])\s*(?:$|\n)}

    def get_sectionlist(content)
      section_array = Array.new

      content.scan(SECTION_REGEXP) do |match|
        section = match[0]   #$1
        section_array.push(section)
        # puts section
      end
      return section_array
    end

  end



  # the TocGenerator creates two kinds of TOCs
  # 1. folder TOCs for articles with the same name as their parent folder
  #    folder TOCs need the {{ FOLDER_TOC }} tag in the .md file to be displayed
  # 2. local TOCs within each file
  #    local TOCs are generated completely automatic and only if necessary (large file)
  class TocGenerator

    MAIN_INDEX_TITLE='Tex4TUM'
    TOC_TOKEN_RE=/\{\{\s*FOLDER_TOC\s*\}\}/
    MIN_LINES_FOR_LOCAL_TOC=200   # required lines of the .md file to get a TOC
    MIN_HEADINGS_FOR_LOCAL_TOC=4  # required number of headings to get a TOC

    def generate(site)
      puts "Generating Table of Contents (TOC)..."

      folderHash = get_folderlist(site)
      # puts "Dirs: "+folderHash.to_s
      
      # create tocs
      site.collections.each do |label, collection|
        collection.docs.each do |document|

          # find main index file
          if document.data["title"] == MAIN_INDEX_TITLE
            toc = createFolderTOC(folderHash, 3)
            document.content = document.content.sub(TOC_TOKEN_RE, toc)
          end

          # find folder articles (articles with the same name as their folder)
          relpath = document.relative_path.sub(document.collection.relative_directory, "")[1..-1]
          if relpath[/(?:^|\/)([^\/]*)\/\1/] # find paths of the form ...foo/foo.md
            folders = File.dirname(relpath).split('/')
            if folders[1]
              toc = createFolderTOC(folderHash[folders[0]][folders[1]], 2)
            elsif folders[0]
              toc = createFolderTOC(folderHash[folders[0]], 2)
            end
            document.content = document.content.sub(TOC_TOKEN_RE, toc)
          end

          # create local TOCs (if necessary)
          document.content = createLocalTOC(document.content)
        end
      end
    end  


    def get_folderlist(site)
      folderHash = Hash.new

      # find folders
      site.collections.each do |label, collection|
        collection.docs.each do |document|
          if document.path.include?(".md")
            basepath = document.path[/.*?_article/]
            filename = File.basename(document.path)
            filebasename = filename.sub('.md', '')
            relpath = File.dirname(document.relative_path.sub(document.collection.relative_directory, "")[1..-1])

            folders = relpath.split('/')
            folders = folders[0..-1]
            # puts "folders: " + folders.to_s
            #puts "filename: " + filename

            # add folder
            if folders[0]
              if not folderHash.has_key?(folders[0]) and folders[0] != "."
                folderHash[folders[0]] = {}
                folderHash.delete(folders[0]+'.md')
              end
            end
            if folders[1]
              if not folderHash[folders[0]].has_key?(folders[1])
                folderHash[folders[0]][folders[1]] = {}
                folderHash[folders[0]].delete(folders[1]+'.md')
              end
            end
            if folders[2]
              if not folderHash[folders[0]][folders[1]].has_key?(folders[2])
                folderHash[folders[0]][folders[1]][folders[2]] = {}
                folderHash[folders[0]][folders[1]].delete(folders[2]+'.md')
              end
            end

            # add filename
            if filename.include?(".md")
              if folders[2] 
                if filebasename != folders[2]
                  folderHash[folders[0]][folders[1]][folders[2]][filename] = document.data["title"]
                end
              elsif folders[1]
                if filebasename != folders[1]
                  # puts "filebasename: "+filebasename+"  folders[1]:"+folders[1]
                  folderHash[folders[0]][folders[1]][filename] = document.data["title"]
                end
              elsif folders[0] and folders[0] != "." 
                if filebasename != folders[0]
                  # puts "filebasename: "+filebasename+"  folders[0]:"+folders[0]
                  folderHash[folders[0]][filename] = document.data["title"]
                end
              elsif folders[0] == nil 
                folderHash[filename] = document.data["title"]
              end 
            end
          end
        end 
      end

      return folderHash
    end

    def createFolderTOC(ahash, level)
      toc_string=""
      ahash.each do |key, val|
        if( key.include?('.md') )
          pagename=key.sub('.md', '.html')
          toc_string+="* [#{val}](#{pagename})\n"
        else
          title = key.capitalize
          toc_string+="* [**#{title}**](#{key}.html)\n"  
          val.each do |key, val|
            if( key.include?('.md') )
              pagename=key.sub('.md', '.html')
              toc_string+="    - [#{val}](#{pagename})\n"
            else
              title = key.capitalize
              toc_string+="    - [**#{title}**](#{key}.html)" 
              if(level >= 3)
                toc_string+=": "
                val.each do |key, val|
                  if( key.include?('.md') )
                    pagename=key.sub('.md', '.html')
                    toc_string+="[#{val}](#{pagename}) • "
                  else
                    toc_string+="[#{key.capitalize}**](#{key}.html) • "
                  end
                end
                toc_string = toc_string[0..-3]
              end
              toc_string += "\n"
            end
          end
        end      
      end
      return toc_string
    end



    def createLocalTOC(text)
      # check if wee need a TOC
      if( text.lines.count < MIN_LINES_FOR_LOCAL_TOC)
        return text
      end

      toc_string="## Table of Contents\n"
      num_of_secs = 0
      text.scan(%r{(?:^|\n)\s*(#+) +(.*?)\s*(?:\n|$)}) do |matches|
        num_of_secs += 1

        slug = matches[1].downcase.strip.gsub(' ', '-')

        if matches[0].length == 2
          toc_string+="* [#{matches[1]}](\##{slug})\n"
        elsif matches[0].length == 3
          toc_string+="    - [#{matches[1]}](\##{slug})\n"
        end
      end

      # double check if wee need a TOC
      if (num_of_secs > MIN_HEADINGS_FOR_LOCAL_TOC )
        text = text.sub(%r{(?:^|\n)(\s*#+\s+.*?)\s*(?:\n|$)}) {|match| "\n\n"+toc_string+"\n\n"+match }
      end

      return text
    end



  end



  Hooks.register :site, :post_write do |site|
    IndexGenerator.new.generate(site)   
  end

  Hooks.register :site, :pre_render do |site|
    TocGenerator.new.generate(site) 
  end

end
