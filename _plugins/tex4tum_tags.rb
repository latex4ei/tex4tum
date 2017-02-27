module Jekyll
  class InlineImage < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @filename = text
    end

    def render(context)
      "<img src='res/img/content-images/#{@filename}'>"
    end
  end

  class Mermaid < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      "<div class=\"mermaid\">#{super}</div>"
    end
  end
end

Liquid::Template.register_tag('inlineimage', Jekyll::InlineImage)
Liquid::Template.register_tag('mermaid', Jekyll::Mermaid)
