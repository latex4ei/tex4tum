---
layout: page
title: About
icon: question
---

**Interactive Knowledge Platform Base for Engineers**

## TeX4TUM is an online library of small articles of the topics:

* math
* physics
* electrical engineering
* information theory

Check out the demo: [emareg.de/tex4tum](http://emareg.de/tex4tum)

## Links
To improve the quality of this page your feedback is important. Please report errors, bugs or improvements to our [issue tracker](https://github.com/latex4ei/tex4tum/issues) or send an email to [{% icon fa-envelope %} {{ site.email }}](mailto:{{ site.email }})

The content of this page is based on the cheatsheets from [{% icon fa-globe %} latex4ei.de](http://latex4ei.de)

{% for entry in site.data.social %}
  {{ entry.about_text }}: {% include icon-social.html data=entry %}
{% endfor %}
