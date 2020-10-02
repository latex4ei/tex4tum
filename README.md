# [Tex4Tum](https://latex4ei.github.io/tex4tum/)

[![Join the chat at https://gitter.im/LaTeX4Ei/tex4tum](https://badges.gitter.im/LaTeX4Ei/tex4tum.svg)](https://gitter.im/LaTeX4Ei/tex4tum?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/latex4ei/tex4tum.svg?branch=master)](https://travis-ci.org/latex4ei/tex4tum)
[![Actions Status](https://github.com/latex4ei/tex4tum/workflows/CI/badge.svg)](https://github.com/latex4ei/tex4tum)
[![Actions Status](https://github.com/latex4ei/tex4tum/workflows/CodeQL/badge.svg)](https://github.com/latex4ei/tex4tum)
[![GitHub (pre-)release](https://img.shields.io/github/release/latex4ei/tex4tum/all.svg)](https://github.com/latex4ei/tex4tum/releases)

## Interactive Knowledge Platform

TeX4TUM is an online library of small articles of the topics:

* Math
* Physics
* Electrical Engineering
* Information Theory

Check out the demo: <http://www.tex4tum.de/index.html>

The articles are based on the cheat sheets from [www.latex4ei.de](http://www.latex4ei.de)

## Features

* Interactive Content: Display only the categories you need
* Interactive Graphs: Play with graphs for better understanding
* Interactive Math: Directly calculate an equation while reading
* Fuzzy JS Search: Find articles really fast
* Abbreviations: Hover your mouse over an abbreviation to see the full name

## Future Plans

* Auto generated TOC for folders
* Generate internal links to terms used in the text
* Solve math equations (Math JS)
* Topic Concepts
* Summary/Concept boxes (e.g. for buses: speed, wires, range)
* consistent JS framework for interactive content
* Improved search: Sorting results, reaction to no results (forward to wolfram alpha)
* More content

## Internal Working

* Markdown files are converted to HTML5 with jekyll and pandoc
* Graphs are plotted with SVG + JS
* Math is rendered with KaTeX
* Bootstrap for full responsive design

## Contribution

### Setup

Setup and install dependencies locally

```bash
make install
```

or use our [Dockerfile](docker/) container

```shell
docker-compose up       # Now you can access the website at localhost:4000
```

#### Error nokogiri

If the installation of nokogiri fails, run:

```bash
gem uninstall nokogiri
sudo apt install libxslt-dev libxml2-dev zlib1g-dev -y
```

and try again

#### Error UTF-8

make sure you have set your environment to utf-8:

```bash
export LC_ALL=en_US.U-8
```

#### Error with Pandoc

In case you are using Pandoc 2.0 or newer, you will need to do some changes to the `_config.yml` under extensions.

* Remove `- normalize`. With pandoc 2.0 this is not necessary anymore.
* Change `latexmathml` to `mathml`.

### Build and Test

```bash
# Build
make

# Serve with hot reload at localhost:4000
make run

# Serve with hot reload at localhost:4000 including _draft articles
# No acronyms replacement to improve build time
make draft

# Run formatters
make format

# Run checks and formatters
make check

# Run all tests
make test
```

### Folder Overview

* `_article`: the content source files in Markdown (input)
* `_layout`: Three HTML layouts for normal pages and start page
* `_plugins`: Our Ruby scripts for processing Markdown source files
* `_sass`: Bootstrap SASS and custom CSS3 files
* `docs`: The rendered website in HTML (output)
* `res`: static files such as images and code

### Customizing Bootstrap

Copy variables from `_variables.scss` to the `_custom.scss` file to override default values without modifying source files.

For `_variables.scss` see https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
