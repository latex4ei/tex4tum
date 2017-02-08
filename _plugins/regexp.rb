module Jekyll
  class RegexpFilter < Generator
    safe true
    priority :highest

    def generate(site)
      puts "Replacing Abbreviations"
      puts "Replacing Latex"

      site.pages.each do |page|
        page.content = add_abbreviations(page.content)
        page.content = replace_latex(page.content)
      end

      site.collections.each do |label, collection|
        collection.docs.each do |document|
          document.content = add_abbreviations(document.content)
          document.content = replace_latex(document.content)
        end
      end
    end

    def replace_latex(content)
      # Put Regexp here

      content
    end

    def add_abbreviations(content)
      abbreviations = File.read('./res/parser_util/abbreviations.md')
      content += abbreviations
    end
  end
end
