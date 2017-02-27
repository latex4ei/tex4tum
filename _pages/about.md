---
layout: page
title: About
---

**Interactive Knowledge Platform Base for Engineers**

TeX4TUM is an online library of small articles of the topics:
* math
* physics
* electrical engineering
* information theory

Check out the demo: [emareg.de/tex4tum](http://emareg.de/tex4tum)

## Links
The content of this page is based on the cheatsheets from [www.latex4ei.de](http://www.latex4ei.de)

To improve the quality of this page your feedback is important. Please report errors, bugs or improvements to our [issue tracker](https://github.com/latex4ei/tex4tum/issues) or send an email to [{{ site.email }}](mailto:{{ site.email }})

{% for entry in site.data.social %}
  {{ entry.about_text }}: {% include icon-social.html data=entry %}
{% endfor %}
