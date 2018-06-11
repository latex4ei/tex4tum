module Jekyll
  class InlineImage < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @filename = text
    end

    def render(context)
      site = context.registers[:site]
      site.static_files.each do |file|
        # puts 'search: "'+file.name+'", need: "'+@filename+'"'
        if( @filename.include?(file.name))
          # puts 'File: '+file.name+', path: '+file.relative_path
          return "<img class='img-fluid' src='#{file.relative_path}'>"
        end
      end

    end
  end

  class Mermaid < Liquid::Block

    def render(context)
      "<div class=\"mermaid\">#{super}</div>"
    end
  end

  class Definition < Liquid::Block

    def initialize(tag_name, params, tokens)
      super
      if(params != "")
      	field = " id='#{params}'"
      else
      	field = ""
      end
      @id_field = field
      #puts "Id-field: "+@id_field
    end

    def render(context)
      #puts context
      # First class element is required for JS
      "<div#{@id_field} class='collapse'><div class='card border-primary mb-1'><div class='card-body'><h5 class='card-title text-primary'>Definition</h5><p class='card-text'>#{super}</p></div></div></div>"
    end
  end

  class Example < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
      @example_idx = 0
    end

    def render(context)
      @example_idx += 1
      """<h5 class='clp_title text-success' data-toggle='collapse' href='#example#{@example_idx}'><i class='fa fa-chart-bar'></i> Example</h5>
  <div id='example#{@example_idx}' class='example collapse'><div class='card border-success mb-1'><div class='card-body'><p class='card-text'>#{super}<p>
  </div></div></div>"""
    end
  end


  class Explanation < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
      @expl_id = 0
    end

    def render(context)
      @expl_id += 1
      # First class element is required for JS
      #"<div class='explanation card border-warning mb-1'><div class='card-body'><h5 class='card-title text-warning'>Explanation</h5><p class='card-text'>#{super}<p></div></div>"
      """<h5 class='clp_title text-warning' data-toggle='collapse' href='#expl#{@expl_id}'><i class='fa fa-comment-dots'></i> Explanation</h5>
  <div id='expl#{@expl_id}' class='explanation collapse'><div class='card border-warning mb-1'><div class='card-body'>
  <p class='card-text'>#{super}<p>
  </div></div></div>"""
  #<h5 class='card-title text-warning' data-toggle='collapse' href='#expl#{@expl_id}>Explanation</h5>
    end
  end



  class Legend < Liquid::Block

    def initialize(tag_name, params, tokens)
      super
      if(params != "")
      	field = " id='#{params}'"
      else
      	field = ""
      end
      @id_field = field
      #puts "Id-field: "+@id_field
    end

    def render(context)
      # First class element is required for JS
      "<div#{@id_field} class='collapse'><div class='legend card border-info mb-1'><div class='card-body'><h5 class='card-title text-info'>Legend</h5><p class='card-text'>#{super}</p></div></div></div>"
    end
  end

  class EmphBox < Liquid::Block

    def render(context)
      "<div class='card border-danger'><div class='card-body'><p class='card-text text-center'>#{super}<p></div></div>"
    end
  end

  class TabBox < Liquid::Block

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      text = super
      level = text[/#+/].length
      #puts 'Length: '+level.to_s

      prelabelhtml=%q{<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#checkboxid" role="tab">}
      postlabelhtml=%q{</a></li>}

      pretabhtml='<div class="tab-pane" id="checkboxid" role="tabpanel">'
      posttabhtml="</div>\n"

      # do it in a loop
      it = 0
      group_id = rand(1000).to_s  # random group, @fixme get unique id!
      tablabels = ""
      text.scan(/((?<!#)\#{#{level}}\s+(.*))\n/) do |match|     # /((?<!#)\#{#{level}}\s+(.*))\n/
        #puts 'match: '+match[1]
        newprelabelhtml = prelabelhtml.gsub('checkboxid', "checkboxid-#{it}")
        if(it == 0)
          newprelabelhtml = newprelabelhtml.sub('"nav-link"', '"nav-link active"')
        end
        tablabels += newprelabelhtml + match[1] + postlabelhtml + "\n"
        #puts 'tablabels: '+tablabels

        newpretabhtml = pretabhtml.gsub("checkboxid", "checkboxid-#{it}")
        if(it == 0)
          newpretabhtml = newpretabhtml.sub('"tab-pane"', '"tab-pane active"')
        end
        tabhtml = (it > 0 ? posttabhtml : "") + newpretabhtml
        text = text.gsub(match[0], tabhtml)
        it = it + 1
      end

      # First class element is required for JS
      final = "<div class=\"tabbox\">\n<ul class=\"nav nav-tabs ml-0\" role=\"tablist\">"+tablabels+"</ul>\</div>\n<div class=\"tab-content\">"+text+'</div>'
      #puts 'final: '+final
      return final
    end
  end

end

Liquid::Template.register_tag('inlineimage', Jekyll::InlineImage)
Liquid::Template.register_tag('mermaid', Jekyll::Mermaid)
Liquid::Template.register_tag('definition', Jekyll::Definition)
Liquid::Template.register_tag('example', Jekyll::Example)
Liquid::Template.register_tag('explanation', Jekyll::Explanation)
Liquid::Template.register_tag('legend', Jekyll::Legend)
Liquid::Template.register_tag('emphbox', Jekyll::EmphBox)
Liquid::Template.register_tag('tabbox', Jekyll::TabBox)
