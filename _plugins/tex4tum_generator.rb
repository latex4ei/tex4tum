# encoding=utf-8

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

          document.content = markDefinition(document.content)    # this has to be called first
          document.content = replaceClasses(document.content)
          document.content = add_abbreviations(document.content)
          document.content = add_latex_definitions(document.content)

          # puts document.data  # gotcha!
        end
      end

      site.data['todos'] = todos
    end

    private

    ABBREVIATION_REGEXP = %r{(\*\[([^\]]+)\]:\s*([^\n]+\n))}
    TODO_REGEXP = %r{(?:\s|^)((?:TODO:?|\\todo|@todo)\s(.*?))\n}
    INNER_SECTION_REGEXP = %r{^\s*(##+\s(.*?)\n((?:.|\n)*?)\n\s*\n(?=\s*##|\Z))}
    DEFINITION_REGEXP = %r{\A([A-Z](?:.|\n)*?)\n\s*\n}

    TEX_SINGLE_REGEXP = %r{(?:\s|^)\$(?=[^\s$])(.*?)(?<=[^\s$\\])\$(?:\s|$)}
    TEX_DUAL_REGEXP = %r{(?:^|\n)\s*\$\$(?=[^\s$])(.*?)(?<=[^\s$\\])\$\$\s*(?:\n|$)}

    LEGEND_REGEXP = %r{(?:^|\n)\s*(\$\$(?=[^\s$])(?:.*?)(?<=[^\s$\\])\$\$\s*\n\s*((?:with|where|Legend:)\s+((?:.|\n)*?)\n\s*\n))}

    UNICODE_TEX_HASH = {
      '<' => %q{\lt}, '>' => %q{\gt}, 
      "∈" => %q{\in},
      "α" => %q{\alpha}, "Α" => %q{\Alpha}, "β" => %q{\beta},
      "γ" => %q{\gamma}, "Γ" => %q{\alpha}, "δ" => %q{\dlpha}, "Δ" => %q{\Delta},
      "ε" => %q{\epsilon}, "ζ" => %q{\zeta}, "η" => %q{\eta},
      "θ" => %q{\theta}, "Θ" => %q{\Theta},
      "κ" => %q{\kappa}, "λ" => %q{\lambda}, "Λ" => %q{\Lambda},
      "μ" => %q{\mu}, "ν" => %q{\nu}, "ξ" => %q{\xi}, "Ξ" => %q{\Xi},
      "π" => %q{\pi}, "Π" => %q{\Pi},
      "ρ" => %q{\rho}, "σ" => %q{\sigma}, "Σ" => %q{\Sigma}, "τ" => %q{\tau},
      "ω" => %q{\omega}, "Ω" => %q{\Omega} }


    def add_latex_definitions(content)
      latex_definitions = File.read('./res/parser_util/tex_definitions.md')
      content = latex_definitions + content


      # replace unicode
      content.scan(TEX_SINGLE_REGEXP) do |match|
        newtext = match[0]
        UNICODE_TEX_HASH.each { |k, v| newtext = newtext.gsub(k, v) }
        content = content.gsub(match[0], newtext)
      end


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
        todo = match[1].gsub(/<\/?[^>]*>/, "") # Stripping html
        todos.push({"todo" => todo, "file" => document.data['slug'] + document.data['ext'], "link" => document.url + ".html", "name" => document.data['title']})
        document.content = document.content.sub(match[0], "")  # remove from final article
      end
      return todos
    end

    def markDefinition(content)
      #puts "START" + content
      content = content.sub(DEFINITION_REGEXP, %q{{% definition %}\1{% enddefinition %}}+"\n\n")
      return content
    end

    def replaceClasses(content)
      section_array = Array.new

      content.scan(INNER_SECTION_REGEXP) do |match|
        section_title = match[1]   #$1
        if section_title.include? "Example"
          content = content.sub(match[0], %q{{% example %}} + "\n" + match[0] + "\n" + %q{{% endexample %}})
        end
      end

      content.scan(LEGEND_REGEXP) do |match|
        equation_par = match[0]   #$1
        equation_par = equation_par.sub(match[1], %q{{% legend %}} + "\n" + match[1] + "\n" + %q{{% endlegend %}})
        content = content.sub(match[0], equation_par)
      end

      return content
    end
  end
end
