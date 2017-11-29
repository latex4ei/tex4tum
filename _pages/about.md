---
layout: page
title: About
icon: question
---
<p>
**TeX4TUM is an Interactive Knowledge Platform for Engineers covering the following topics:**
</p>

<div class="lead">
<p>
* {% icon fa-calculator %} math
* {% icon fa-flask %} physics
* {% icon fa-microchip %} electrical engineering
* {% icon fa-code %} information theory
* {% icon fa-cogs %} mechanical engineering
</p>
</div>

<style>
.feature-item{
	text-align: center;
    margin-bottom: 2em;
}
.feature-item h2{
	margin-top: 0.2em;
}
</style>


Check out the demo-page: [emareg.de/tex4tum](http://emareg.de/tex4tum)



## Features for Readers

<div class="row">
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_1">
 <i class="fa fa-eye fa-4x"></i>
 <h3>Focused</h3>
 Short is default, details on demand. <a class="small">(click)</a>
 <div id="col_item_1" class="collapse">
 <div class="card card-block small">If you click on items they will expand to additional information</div>
 </div>
</div>
</div>
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_2">
 <i class="fa fa-sliders fa-4x"></i>
 <h2>Interactive</h2>
 Manipulate diagrams, learn from the response
 <div id="col_item_2" class="collapse">
 <div class="card card-block small">
 Most diagrams should be interactive so that you can see how the output changes if you change the input.</div>
 </div>
</div>
</div>
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_3">
 <i class="fa  fa-child fa-4x"></i>
 <h2>Intuitive</h2>
 Consistent notation, structure, and style.
 <div id="col_item_3" class="collapse">
 <div class="card card-block small">Consistency will aid your understanding and eliminate confusion.</div>
 </div>
</div>
</div>
</div>


<div class="row">
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_4">
 <i class="fa fa-clock-o fa-4x"></i>
 <h2>Instant</h2>
 Search fuzzy, find answers immediately <a class="small">(<code>tab</code>)</a>
 <div id="col_item_4" class="collapse">
 <div class="card card-block small">Hit <code>tab</code> and you will already see results while you type.</div>
 </div>
</div>
</div>
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_5">
 <i class="fa fa-users fa-4x"></i>
 <h2>Community driven</h2>
 Free. Open Source. For everyone
 <!--From students, for students.-->
 <div id="col_item_5" class="collapse">
 <div class="card card-block small">Powered by GitHub. Everyone can contribute to articles and diagrams.</div>
 </div>
</div>
</div>
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_6">
<i class="fa fa-wikipedia-w fa-4x"></i>
 <h2>References</h2>
 Links to Wikipedia and other useful sources
 <div id="col_item_6" class="collapse">
 <div class="card card-block small">References help you to find the origin of the information.</div>
 </div>
</div>
</div>
</div>



## Features for Authors

<div class="row">
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_1">
 <i class="fa fa-eye fa-4x"></i>
 <h3>Content focused</h3>
 Almost no markup required! Automatic detection and generation of markup.
 <div id="col_item_1" class="collapse">
 <div class="card card-block small">Smart ruby scripts will </div>
 </div>
</div>
</div>
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_2">
 <i class="fa fa-sliders fa-4x"></i>
 <h2>Markdown</h2>
 Easy and intuitive formatting with markdown
 <div id="col_item_2" class="collapse">
 <div class="card card-block small">
 Pandoc is used to convert markdown files (.md) to HTML</div>
 </div>
</div>
</div>
<div class="col">
<div class="feature-item" data-toggle="collapse" href="#col_item_2">
 <i class="fa fa-sliders fa-4x"></i>
 <h2>LaTeX Math</h2>
 LaTeX typesetting is directly possible within $-characters
 <div id="col_item_2" class="collapse">
 <div class="card card-block small">
 KaTeX is used to parse LaTeX equations to HTML</div>
 </div>
</div>
</div>
</div>



## Under the Hood

* Content Management: [Jekyll](https://jekyllrb.com/)
* Version Control: [GitHub](https://github.com/latex4ei/tex4tum)
* Markup Language: [Markdown](http://markdown.de/)
* Math: [KaTeX](https://khan.github.io/KaTeX/) 
* Responsive Design: [Bootstrap 4.0](http://getbootstrap.com/) 
* Fuzzy Search: [Fuse.js](http://fusejs.io/) 
* Interactive Images: SVG images



TODO: draw image of the process github .md --> jekyll --> scripts --> pandoc --> .html + head.html = webpage




## Links
To improve the quality of this page your feedback is important. Please report errors, bugs or improvements to our [issue tracker](https://github.com/latex4ei/tex4tum/issues) or send an email to [{% icon fa-envelope %} {{ site.email }}](mailto:{{ site.email }})

The content of this page is based on the cheatsheets from [{% icon fa-globe %} latex4ei.de](http://latex4ei.de)

{% for entry in site.data.social %}
  {{ entry.about_text }}: {% include icon-social.html data=entry %}
{% endfor %}
