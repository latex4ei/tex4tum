# tex4tum

[![Join the chat at https://gitter.im/LaTeX4Ei/tex4tum](https://badges.gitter.im/LaTeX4Ei/tex4tum.svg)](https://gitter.im/LaTeX4Ei/tex4tum?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/latex4ei/tex4tum.svg?branch=master)](https://travis-ci.org/latex4ei/tex4tum)

**Interactive Knowledge Platform**

TeX4TUM is an online library of small articles of the topics:
* math
* physics
* electrical engineering
* information theory

Check out the demo: [emareg.de/tex4tum](http://emareg.de/tex4tum)

The articles are based on the cheat sheets from [www.latex4ei.de](http://www.latex4ei.de)

## Features
* Interactive Content: Display only the categories you need
* Interactive Graphs: Play with graphs for better understanding
* Interactive Math: Directly calculate an equation while reading
* Fuzzy JS Search: Find articles really fast
* Abbreviations: Hover your mouse over an abbreviation to see the full name


## Future Plans
* Full responsive design
* TOC and centered search on start page
* consistent JS framework for interactive content
* Improved search: Sorting results, reaction to no results
* More content

## Internal Working
* Markdown files are converted to HTML5 with pandoc
* Graphs are plotted with SVG + JS
* Math is rendered with KaTeX

## Building
to parse all markdown files, simply run
```bash
python3 compileWebsite.py
```

**Dependecies:**

- python3
- pandoc
- rubygems
- sass

to install the dependencies just run
```bash
sudo apt-get install python3 pandoc rubygems
sudo gem install sass
```
