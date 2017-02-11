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

    SINGLE_DOLLAR_REGEXP = %r{(?:\s|^)\$(?=[^\s$])(.*?)(?<=[^\s$\\])\$(?:\s|$)}
    DUAL_DOLLARD_REGEXP_LINESAVE = %r{(?:^|\n)\s*\$\$(?=[^\s$])(.*?)(?<=[^\s$\\])\$\$\s*(?:\n|$)}

    def replace_latex(content)
      latex_definitions = File.read('./res/parser_util/tex_definitions.md')
      content += "$$#{latex_definitions}$$"

      content = replace_latex_with_regexp(content, SINGLE_DOLLAR_REGEXP)
      content = replace_latex_with_regexp(content, DUAL_DOLLARD_REGEXP_LINESAVE)

      return content
    end

    def replace_latex_with_regexp(content, regexp)
      content = content.gsub(regexp) do |full_match|
        # The expression returned from this block will be used as the replacement string
        %Q|<span class="LaTeX">#{full_match.strip}</span>|
      end

      return content
    end

    def add_abbreviations(content)
      abbreviations = File.read('./res/parser_util/abbreviations.md')
      content += abbreviations

      return content
    end

    private :replace_latex, :replace_latex_with_regexp, :add_abbreviations
  end
end
