# [Tex4Tum](https://latex4ei.github.io/tex4tum/)

[![Join the chat at https://gitter.im/LaTeX4Ei/tex4tum](https://badges.gitter.im/LaTeX4Ei/tex4tum.svg)](https://gitter.im/LaTeX4Ei/tex4tum?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/latex4ei/tex4tum.svg?branch=master)](https://travis-ci.org/latex4ei/tex4tum) [![GitHub (pre-)release](https://img.shields.io/github/release/latex4ei/tex4tum/all.svg)](https://github.com/latex4ei/tex4tum/releases)

## Interactive Knowledge Platform

TeX4TUM is an online library of small articles of the topics:
* Math
* Physics
* Electrical Engineering
* Information Theory

Check out the demo: [emareg.de/tex4tum](http://emareg.de/tex4tum)

The articles are based on the cheat sheets from [www.latex4ei.de](http://www.latex4ei.de)

## Features
* Interactive Content: Display only the categories you need
* Interactive Graphs: Play with graphs for better understanding
* Interactive Math: Directly calculate an equation while reading
* Fuzzy JS Search: Find articles really fast
* Abbreviations: Hover your mouse over an abbreviation to see the full name

## Future Plans
* TOC and centered search on start page
* consistent JS framework for interactive content
* Improved search: Sorting results, reaction to no results
* More content

## Internal Working
* Markdown files are converted to HTML5 with jekyll and pandoc
* Graphs are plotted with SVG + JS
* Math is rendered with KaTeX
* Bootstrap for full responsive design

## Contribution
### Setup
Installation with rubygems
```bash
sudo apt-get install ruby ruby-dev pandoc
sudo gem install jekyll bundler
```
Install all required depencencies in the `Gemfile` with
```bash
make install
```

#### Error nokogiri
If the installation of nokogiri fails, run:
```
gem uninstall nokogiri
sudo apt-get install libxslt-dev libxml2-dev zlib1g-dev
```
and try again

#### Error UTF-8
make sure you have set your environment to utf-8:
```
export LC_ALL=en_US.U-8
```

### Building
To parse all markdown files run
```bash
make
```
Call the following command to watch for changes and regenerate build folder automatically.
```bash
make run
```
Now browse to http://localhost:4000/

### Testing
Run Unittests with
```bash
make test
```

### Deployment
To release a new version on github pages run
```bash
make deploy
```

### Customizing Bootstrap
Copy variables from `_variables.scss` to the `_custom.scss` file to override default values without modifying source files.

For `_variables.scss` see https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
