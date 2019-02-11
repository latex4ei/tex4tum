module Jekyll

  class SvgImage < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @filename = text
    end

    def render(context)
      site = context.registers[:site]
      site.static_files.each do |file|
        if( @filename.include?(file.name))
          return "<img class='img-fluid w-100' src='#{file.relative_path}'>"
        end
      end

    end
  end



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
      "<div#{@id_field} class='definition collapse'><div class='card border-primary mb-1'><div class='card-body'><h5 class='card-title text-primary'>Definition</h5><p class='card-text'>#{super}</p></div></div></div>"
    end
  end

  class Example < Liquid::Block
    @@example_idx = 0
    def initialize(tag_name, params, tokens)
      super
      if(params != "")
        title = "#{params}"
      else
        title = "Example"
      end
      @heading = title
    end

    def render(context)
      @@example_idx += 1
      """<h5 class='clp_title text-success' data-toggle='collapse' href='#example#{@@example_idx}'><i class='fa fa-chart-bar'></i> #{@heading}</h5>
  <div id='example#{@@example_idx}' class='example collapse'><div class='card border-success mb-1'><div class='card-body'><p class='card-text'>#{super}<p>
  </div></div></div>"""
    end
  end


  class Explanation < Liquid::Block
    @@expl_id = 0
    def initialize(tag_name, params, tokens)
      super
      if(params != "")
        title = "#{params}"
      else
        title = "Explanation"
      end
      @heading = title
    end

    def render(context)
      @@expl_id += 1
      # First class element is required for JS
      #"<div class='explanation card border-warning mb-1'><div class='card-body'><h5 class='card-title text-warning'>Explanation</h5><p class='card-text'>#{super}<p></div></div>"
      """<h5 class='clp_title text-warning' data-toggle='collapse' href='#expl#{@@expl_id}'><i class='fa fa-comment-dots'></i> #{@heading}</h5>
  <div id='expl#{@@expl_id}' class='explanation collapse'><div class='card border-warning mb-1'><div class='card-body'>
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
      #"<div#{@id_field} class='legend collapse'><div class='card border-info w-75 mx-auto'><div class='card-body'><h5 class='card-title text-info'>Legend</h5><p class='card-text small'>#{super}</p></div></div></div>"
      "<div#{@id_field} class='legend collapse'><div class='card border-info w-75 mx-auto'><div class='p-1 small'>#{super}</div></div></div>"
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
      @@theid = 0
    end

    def render(context)
      text = super   # only text between liquid tags
      level = text[/#+/].length
      #puts 'Length: '+level.to_s

      prelabelhtml=%q{<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#checkboxid" role="tab">}
      postlabelhtml=%q{</a></li>}

      pretabhtml='<div class="tab-pane" id="checkboxid" role="tabpanel">'
      posttabhtml="</div>\n"

      # do it in a loop
      startid = @@theid
      tablabels = ""
      text.scan(/((?<!#)\#{#{level}}\s+(.*))\n/) do |match|     # /((?<!#)\#{#{level}}\s+(.*))\n/
        #puts 'match: '+match[1]
        newprelabelhtml = prelabelhtml.gsub('checkboxid', "checkboxid-#{@@theid}")
        if(@@theid == startid)
          newprelabelhtml = newprelabelhtml.sub('"nav-link"', '"nav-link active"')
        end
        tablabels += newprelabelhtml + match[1] + postlabelhtml + "\n"
        #puts 'tablabels: '+tablabels

        newpretabhtml = pretabhtml.gsub("checkboxid", "checkboxid-#{@@theid}")
        if(@@theid == startid)
          newpretabhtml = newpretabhtml.sub('"tab-pane"', '"tab-pane active"')
        end
        tabhtml = (@@theid > startid ? posttabhtml : "") + newpretabhtml
        text = text.gsub(match[0], tabhtml)
        @@theid += 1
      end

      # tabbox is CSS3 only tab solution
      #final = "<div class=\"tabbox\">\n<ul class=\"nav nav-tabs ml-0\" role=\"tablist\">"+tablabels+"</ul>\</div>\n<div class=\"tab-content\">"+text+'</div>'
      final = "<div class=\"card tabbox\"><div class=\"card-header\">\n<ul class=\"nav nav-tabs card-header-tabs ml-0\" role=\"tablist\">"+tablabels+"</ul>\</div>\n<div class=\"card-body\"><div class=\"tab-content\">"+text+'</div></div></div></div></br>'

      #puts 'final: '+final
      return final
    end
  end

end

Liquid::Template.register_tag('inlineimage', Jekyll::InlineImage)
Liquid::Template.register_tag('cellimg', Jekyll::SvgImage)
Liquid::Template.register_tag('mermaid', Jekyll::Mermaid)
Liquid::Template.register_tag('definition', Jekyll::Definition)
Liquid::Template.register_tag('example', Jekyll::Example)
Liquid::Template.register_tag('explanation', Jekyll::Explanation)
Liquid::Template.register_tag('legend', Jekyll::Legend)
Liquid::Template.register_tag('emphbox', Jekyll::EmphBox)
Liquid::Template.register_tag('tabbox', Jekyll::TabBox)
