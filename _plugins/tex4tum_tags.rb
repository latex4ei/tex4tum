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

    def render(context)
      # First class element is required for JS
      "<div class='definition card card-warning'><div class='card-block'><b>Definition:</b> #{super}</div></div>"
    end
  end

  class Example < Liquid::Block

    def render(context)
      # First class element is required for JS
      "<div class='example card card-success'><div class='card-block'>#{super}</div></div>"
    end
  end

  class Legend < Liquid::Block

    def render(context)
      # First class element is required for JS
      "<div class='legend card card-info'><div class='card-block'><b>Legend:</b> #{super}</div></div>"
    end
  end

  class EmphBox < Liquid::Block

    def render(context)
      "<div class='card card-outline-danger text-center'><div class='card-block'>#{super}</div></div>"
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

      prelabelhtml='<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#checkboxid" role="tab">'
      postlabelhtml='</a></li>\n'

      pretabhtml='<div class="tab-pane" id="checkboxid" role="tabpanel">'
      posttabhtml='</div>\n'

      # do it in a loop
      it = 0
      group_id = rand(1000).to_s  # random group, @fixme get unique id!
      tablabels = ""
      text.scan(/((?<!#)\#{#{level}}\s+(.*))\n/) do |match|
        newprelabelhtml = prelabelhtml.gsub('checkboxid', "checkboxid-#{it}")
        if(it == 0)
          newprelabelhtml = newprelabelhtml.sub('"nav-link"', '"nav-link active"')
        end
        tablabels += newprelabelhtml + match[1] + postlabelhtml + '\n'

        newpretabhtml = pretabhtml.gsub('checkboxid', "checkboxid-#{it}")
        if(it == 0)
          newpretabhtml = newpretabhtml.sub('"tab-pane"', '"tab-pane active"')
        end
        tabhtml = (it > 0 ? posttabhtml : "") + newpretabhtml
        text = text.gsub(match[0], tabhtml)
        it = it + 1
      end

      # First class element is required for JS
      "<div class='tabbox'>\n<ul class='nav nav-tabs' role='tablist'>#{tablabels}</ul>\</div>\n<div class='panel-body tab-content'>#{text}</div>\n</div>"
    end
  end

end

Liquid::Template.register_tag('inlineimage', Jekyll::InlineImage)
Liquid::Template.register_tag('mermaid', Jekyll::Mermaid)
Liquid::Template.register_tag('definition', Jekyll::Definition)
Liquid::Template.register_tag('example', Jekyll::Example)
Liquid::Template.register_tag('legend', Jekyll::Legend)
Liquid::Template.register_tag('emphbox', Jekyll::EmphBox)
Liquid::Template.register_tag('tabbox', Jekyll::TabBox)
