module Jekyll
  class RegexpFilter < Generator
    safe true
    priority :highest

    def generate(site)
      puts "Replacing Abbreviations"
      puts "Replacing Latex"

      site.collections.each do |label, collection|
        collection.docs.each do |document|
          document.content = add_abbreviations(document.content)
          document.content = replace_latex(document.content)
        end
      end
    end

    def replace_latex(content)
      latex_definitions = File.read('./res/parser_util/tex_definitions.md')
      # content += latex_definitions

      return content
    end

    def add_abbreviations(content)
      abbreviations = File.read('./res/parser_util/abbreviations.md')
      content += abbreviations

      return content
    end

    private :replace_latex, :add_abbreviations
  end
end
