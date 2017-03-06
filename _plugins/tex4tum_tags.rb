module Jekyll
  class InlineImage < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @filename = text
    end

    def render(context)
      "<img class='img-fluid' src='res/img/content-images/#{@filename}'>"
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
end

Liquid::Template.register_tag('inlineimage', Jekyll::InlineImage)
Liquid::Template.register_tag('mermaid', Jekyll::Mermaid)
Liquid::Template.register_tag('definition', Jekyll::Definition)
Liquid::Template.register_tag('example', Jekyll::Example)
Liquid::Template.register_tag('legend', Jekyll::Legend)
Liquid::Template.register_tag('emphbox', Jekyll::EmphBox)
