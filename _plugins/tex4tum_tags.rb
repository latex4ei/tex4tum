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
end

Liquid::Template.register_tag('inlineimage', Jekyll::InlineImage)
