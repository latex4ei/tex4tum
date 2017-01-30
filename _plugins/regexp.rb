module Jekyll
  class RegexpFilter < Generator
    safe true
    priority :highest

    def generate(site)
      puts "\nReplacing Abbrevations"

      site.pages.each do |page|
        page.content = replace(page.content)
      end

      site.collections.each do |label, collection|
        collection.docs.each do |document|
          document.content = replace(document.content)
        end
      end
    end

    def replace(content)
      # Put Regexp here

      content
    end
  end
end
