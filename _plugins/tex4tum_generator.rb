module Jekyll
  require "yaml"

  class Tex4TumGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      puts "Add TeX Definitions..."
      puts "Add Abbreviations..."
      puts "Parsing TODOs..."

      todos = Array.new

      site.collections.each do |label, collection|
        collection.docs.each do |document|
          todos = get_todos(document, todos)

          document.content = add_abbreviations(document.content)
          document.content = add_latex_definitions(document.content)

          # puts document.data  # gotcha!
        end
      end

      site.data['todos'] = todos
    end

    private

    ABBREVIATION_REGEXP = %r{(\*\[([^\]]+)\]:\s*([^\n]+\n))}
    TODO_REGEXP = %r{TODO\s(.*?)\n}

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

    def get_todos(document, todos)
      document.content.scan(TODO_REGEXP) do |match|
        todo = match[0].gsub(/<\/?[^>]*>/, "") # Stripping html
        todos.push({"todo" => todo, "file" => document.data['slug'] + document.data['ext'], "link" => document.url + ".html", "name" => document.data['title']})
      end
      return todos
    end

  end
end
