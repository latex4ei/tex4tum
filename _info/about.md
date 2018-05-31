---
layout: page
title: About TeX4TUM
icon: question
---
<p class="lead">
TeX4TUM is an Interactive Knowledge Platform for Engineers covering the following topics:

* {% icon fa-calculator %} math
* {% icon fa-flask %} physics
* {% icon fa-microchip %} electrical engineering
* {% icon fa-code %} information theory
* {% icon fa-cogs %} mechanical engineering
</p>

## Our Philosophy
We want to provide students an easy, fast and reliable source of information that focuses on the reader. In contrast to all the forums, blogs, and wikis out there, we focus on the most important aspects first and only optionally offer you the details if you need them. Our articles are short, consistent and well structured making them ideal for efficiently looking up your study topics.
Making the content interactive, such that you can manipulate diagrams and equations, provides intuitive understanding without the need of long explanations.
Experience it for yourself. Hit `tab` and type a term that you want to look up.



## Article Processing
Intuitive design does not stop when it comes to writing an article. Our goal is that authors do not need to bother about learning any markup or programming language.
As an author you simply write the article following some format guidelines. Afterwards, our smart scripts will process the article (`.md` file) and figure out which content is visible by default and which content will appear on demand. For example, symbol explanations only appear when you click on the corresponding equation.



## Under the Hood
TeX4TUM uses many different frameworks to achieve its goals.

* Content Management: [Jekyll](https://jekyllrb.com/)
* Version Control: [GitHub](https://github.com/latex4ei/tex4tum)
* Markup Language: [Markdown](http://markdown.de/)
* Math: [KaTeX](https://khan.github.io/KaTeX/)
* Responsive Design: [Bootstrap 4.0](http://getbootstrap.com/)
* Fuzzy Search: [Fuse.js](http://fusejs.io/)
* Interactive Images: SVG images


TODO draw image of the process github .md --> jekyll --> scripts --> pandoc --> .html + head.html = webpage




## Quality
To improve the quality of this platform your feedback is important. Please report errors, bugs or improvements to our [{% icon fa-bug %} issue tracker](https://github.com/latex4ei/tex4tum/issues) or send an email to [{% icon fa-envelope %} {{ site.email }}](mailto:{{ site.email }})

The content of this page is based on the cheatsheets from [{% icon fa-globe %} latex4ei.de](http://latex4ei.de)

{% for entry in site.data.social %}
  {{ entry.about_text }}: {% include icon-social.html data=entry %}
{% endfor %}
