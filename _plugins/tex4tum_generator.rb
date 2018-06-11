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

      site.documents.each do |document|
        todos = get_todos(document, todos)

        # exclude JS
        relevant_content, sep, rest = document.content.partition(/<script .*?<\/script>/m)

        # puts document.path
        relevant_content = markDefinition(relevant_content)    # this has to be called first
        relevant_content = replaceClasses(relevant_content)
        relevant_content = add_abbreviations(relevant_content)
        relevant_content = add_latex_definitions(relevant_content)

        document.content = relevant_content+sep+rest

        # puts document.data  # gotcha!
      end

      # site.pages contains only main.scss
      # site.posts is empty

      # site.pages.each do |page|
      #   page.content = replaceClasses(page.content)
      #   #puts page.content
      # end

      site.data['todos'] = todos
    end

    private

    ABBREVIATION_REGEXP = %r{(\*\[([^\]]+)\]:\s*([^\n]+)\n)}
    TODO_REGEXP = %r{(?:\s|^)((?:TODO:?|\\todo|@todo)\s(.*?))\n}
    INNER_SECTION_REGEXP = %r{^\s*(##+\s(.*?)\n((?:.|\n)*?)\n\s*\n(?=\s*##|\Z))}
    DEFINITION_REGEXP = %r{\A([A-Z](?:.|\n)*?)\n\s*\n}

    TEX_SINGLE_REGEXP = %r{(?:\s|^)\$(?=[^\s$])(.*?)(?<=[^\s$\\])\$(?:\s|$)}
    TEX_DUAL_REGEXP = %r{(?:^|\n)\s*\$\$(?=[^\s$])(.*?)(?<=[^\s$\\])\$\$\s*(?:\n|$)}

    LEGEND_REGEXP = %r{(?:^|\n)\s*((\$\$(?=[^\s$])(?:.*?)(?<=[^\s$\\])\$\$)\s*\n\s*((?:with|where|Legend:)\s+((?:.|\n)*?)\n\s*\n))}

    RE_NL = %r{(?:^|\n)\s*}   # Newline
    RE_BL = %r{(?:^|\n)\s*\n\s*}   # Blankline
    RE_ANY = %r{((?:.|\n)*?)}       # Anything
    RE_SE = %{\n\s*\n(?=\s*##|\Z))}  # Section End


    #EXPLANATION_REGEXP = RE_NL+%r{((?:Explanation|Details):\s+(?:.|\n)*?)}+RE_BL
    EXPLANATION_REGEXP = %r{(?:^|\n)\s*\n\s*(?:Explanation|Details):\s+((?:.|\n)*?)(?:^|\n)\s*\n\s*}
    #RE_EXPLANATION_SECTION = %r{^\s*(##+\s(?:Explanation|Details).*)\n\s*((?:.|\n)*?)\n\s*\n(?=\s*##+|\Z))}
    RE_EXAMPLE = %r{(?:^|\n)\s*\n\s*(?:Example|For Example):\s+((?:.|\n)*?)(?:^|\n)\s*\n\s*}


    UNICODE_TEX_HASH = {
      '<' => %q{\lt}, '>' => %q{\gt}, 
      "∈" => %q{\in},
      "α" => %q{\alpha}, "Α" => %q{\Alpha}, "β" => %q{\beta},
      "γ" => %q{\gamma}, "Γ" => %q{\alpha}, "δ" => %q{\dlpha}, "Δ" => %q{\Delta},
      "ε" => %q{\varepsilon}, "ζ" => %q{\zeta}, "η" => %q{\eta},
      "θ" => %q{\theta}, "Θ" => %q{\Theta},
      "κ" => %q{\kappa}, "λ" => %q{\lambda}, "Λ" => %q{\Lambda},
      "μ" => %q{\mu}, "ν" => %q{\nu}, "ξ" => %q{\xi}, "Ξ" => %q{\Xi},
      "π" => %q{\pi}, "Π" => %q{\Pi},
      "ρ" => %q{\rho}, "σ" => %q{\sigma}, "Σ" => %q{\Sigma}, "τ" => %q{\tau},
      "ω" => %q{\omega}, "Ω" => %q{\Omega} }


    def add_latex_definitions(content)
      latex_definitions = File.read('./res/parser_util/tex_definitions.md', :encoding => 'utf-8')
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
      abbreviations = File.read('./res/parser_util/abbreviations.md', :encoding => 'utf-8')
      #content += abbreviations

      content = parse_abbreviation(content, abbreviations)

      return content
    end

    def parse_abbreviation(content, abbreviations)
      abbreviations.scan(ABBREVIATION_REGEXP) do |match|
          line = match[0]   #$1
          #puts line
          key = match[1]
          value = match[2]

          #content = content.gsub(line, '')
          content = content.gsub(/(?<=\s|^)#{key}(?=\W|$)/, "<abbr title=\"" + value + "\" >" + key + "</abbr>")
      end
      #puts content

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

      # idea: find a definition and show it when the heading before it is clicked

      #puts "START" + content
      # title definition:
      # definition = content[DEFINITION_REGEXP, 1]
      # if definition
      #   puts definition
      #   content = content.sub(definition, %q{{% definition title_def%}}+definition+%q{{% enddefinition %}}+"\n\n")
      # end
      content = content.sub(DEFINITION_REGEXP, %q{{% definition title_def%}\1{% enddefinition %}}+"\n\n")
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

      # legends
      eq_num = 0
      content.scan(LEGEND_REGEXP) do |match|
        equation_par = match[0]   #$1
        equation_par = equation_par.sub(match[1], "<div data-toggle='collapse' href='\#eq_#{eq_num}'>"+ "\n" + match[1] + "\n" + "</div>")
        equation_par = equation_par.sub(match[2], '{% '+"legend eq_#{eq_num}"+'%}' + "\n" + match[2] + "\n" + %q{{% endlegend %}})
        content = content.sub(match[0], equation_par)
        eq_num += 1
      end

      # explanation
      content = content.sub(EXPLANATION_REGEXP, "\n\n"+%q{{% explanation %}\1{% endexplanation %}}+"\n\n")
      #content = content.sub(RE_EXPLANATION_SECTION, "\n\n"+%q{{% explanation %}\1{% endexplanation %}}+"\n\n")

      # example
      content = content.sub(RE_EXAMPLE, "\n\n"+%q{{% example %}\1{% endexample %}}+"\n\n")

    

      return content
    end
  end
end
