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

      prelabelhtml='<input name="checkboxgroup" type="radio" id="checkboxid"><label for="checkboxid">'
      postlabelhtml='</label>\n'

      pretabhtml='<div class="tab-content">'
      posttabhtml='</div>\n'

      # do it in a loop
      it = 0
      group_id = rand(1000).to_s  # random group, @fixme get unique id!
      tablabels = ""
      text.scan(/((?<!#)\#{#{level}}\s+(.*))\n/) do |match|
        newprelabelhtml = prelabelhtml.gsub('checkboxid', "checkboxid-#{it}")
        newprelabelhtml = newprelabelhtml.gsub('checkboxgroup', "checkboxgroup-#{group_id}")
        if(it == 0)
          newprelabelhtml = newprelabelhtml.sub('><label', ' checked ><label')
        end  
        tablabels += newprelabelhtml + match[1] + postlabelhtml + '\n'

        tabhtml = (it > 0 ? posttabhtml : "") + pretabhtml
        text = text.gsub(match[0], tabhtml)
        it = it + 1
      end

      # First class element is required for JS
      "<div class='tabbox'>#{tablabels}#{text}</div></div>"
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