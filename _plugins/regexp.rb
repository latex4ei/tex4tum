module Jekyll
  class RegexpFilter < Generator
    safe true
    priority :highest

    def generate(site)
      puts "Add TeX Definitions..."
      puts "Add Abbreviations..."

      site.collections.each do |label, collection|
        collection.docs.each do |document|
          document.content = add_abbreviations(document.content)
          document.content = add_latex_definitions(document.content)
          create_search_index(document.content)

          puts document.data["tags"]  # gotcha!
        end
      end
    end

    ABBREVIATION_REGEXP = %r{(\*\[([^\]]+)\]:\s*([^\n]+\n))}
    SECTION_REGEXP = %r{(?:^|\n)\s*## (.*?)\s*(?:\n|$)}
    TAGS_REGEXP = %r{(?:\n|^)\s*tags:\s*(\[.*?\])\s*(?:$|\n)}


    def add_latex_definitions(content)
      latex_definitions = File.read('./res/parser_util/tex_definitions.md')
      content = latex_definitions + content

      return content
    end

    def add_abbreviations(content)
      abbreviations = File.read('./res/parser_util/abbreviations.md')
      content += abbreviations

      content = parse_abbreviation(content)

      return content
    end

    def parse_abbreviation(content)
      content.scan(ABBREVIATION_REGEXP) do |match|
          line = match[0]   #$1
          #puts line
          key = match[1]
          value = match[2]

          content = content.gsub(line, '')
          content = content.gsub(/(?<=\W|^)#{key}(?=\W|$)/, '<abbr title="' + value + '" >' + key + '</abbr>')
      end

      return content
    end



    def create_search_index(content) 
      # content.scan(SECTION_REGEXP) { |match|
      #     section = match[0]   #$1

      #     entry = %q{ {title: "} }
      #     # todo: add to tags
      # }

      content.scan(TAGS_REGEXP) do |match|
        puts "hit"
        json = match[0].gsub(', ', '", "')
        json = json.sub('[', '["')
        json = json.sub(']', '"]')
        puts json
      end
    end


    private :add_latex_definitions, :add_abbreviations, :parse_abbreviation
  end
end
