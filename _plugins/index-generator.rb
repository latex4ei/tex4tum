module Jekyll
  require 'json'

  class IndexGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      puts "Generating Search Index..."

      index_array = Array.new

      site.collections.each do |label, collection|
        collection.docs.each do |document|


          section_array = get_sectionlist(document.content)

          entry = {title: document.data["title"], tags: document.data["tags"], sections: section_array}
          index_array.push(entry)

          # puts entry  # gotcha!
          json_title = document.data["title"].to_json
          json_tags = document.data["tags"].to_json
        end
      end

      json_string = "search_index = " + index_array.to_json
      File.write(site.dest + '/assets/js/search_index.json', json_string)
    end


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
end
