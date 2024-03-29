# [Tex4Tum](https://latex4ei.github.io/tex4tum/)

[![Join the chat at https://gitter.im/LaTeX4Ei/tex4tum](https://badges.gitter.im/LaTeX4Ei/tex4tum.svg)](https://gitter.im/LaTeX4Ei/tex4tum?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Actions Status](https://github.com/latex4ei/tex4tum/workflows/CI/badge.svg)](https://github.com/latex4ei/tex4tum)
[![Actions Status](https://github.com/latex4ei/tex4tum/workflows/CodeQL/badge.svg)](https://github.com/latex4ei/tex4tum)
[![GitHub (pre-)release](https://img.shields.io/github/release/latex4ei/tex4tum/all.svg)](https://github.com/latex4ei/tex4tum/releases)

## Interactive Knowledge Platform

TeX4TUM is an online library of small articles of the topics:

* Math
* Physics
* Electrical Engineering
* Information Theory

Check out the demo: <https://www.tex4tum.de>

The articles are based on the cheat sheets from [www.latex4ei.de](http://www.latex4ei.de)

## Features

* Interactive Content: Display only the categories you need
* Interactive Graphs: Play with graphs for better understanding
* Interactive Math: Directly calculate an equation while reading
* Lunar JS Search: Find articles really fast
* Abbreviations: Hover your mouse over an abbreviation to see the full name

## Internal Working

Markdown (MD) files are converted in three steps

1. Preprocess MD to MD with [Pandoc](https://pandoc.org/)
2. Cleanup MD with SED
3. Converting MD to HTML using [Matieral mkDocs](https://squidfunk.github.io/mkdocs-material/)

## Contribution

If you want to contribute articles, clone the repo and test the build process locally.

### Setup

Setup and install dependencies locally

```bash
make setup
```

or use our [Dockerfile](docker/) container

```shell
docker-compose up       # Now you can access the website at localhost:8000
```

### Build and Test

```bash
# Build
make

# Serve with hot reload at localhost:8000
make run

# Serve with hot reload at localhost:8000 including _draft articles
# No acronyms replacement to improve build time
make draft
```

### pre-commit git hooks

We use [pre-commit](https://pre-commit.com/) to manage our git pre-commit hooks.
`pre-commit` is automatically installed from `requirements.txt`.
To set it up, call

```sh
git config --unset-all core.hooksPath  # may fail if you don't have any hooks set, but that's ok
pre-commit install --overwrite
```

#### Usage

With `pre-commit`, you don't use your linters/formatters directly anymore, but through `pre-commit`:

```sh
pre-commit run --file path/to/file1.cpp tools/second_file.py  # run on specific file(s)
pre-commit run --all-files  # run on all files tracked by git
pre-commit run --from-ref origin/master --to-ref HEAD  # run on all files changed on current branch, compared to master
pre-commit run <hook_id> --file <path_to_file>  # run specific hook on specific file
```

### Folder Overview

* `_article`: the content source files in Markdown (input)
* `overrides`: Additional files for [Matieral mkDocs](https://squidfunk.github.io/mkdocs-material/)
* `_plugins`: Our Ruby scripts for processing Markdown source files
* `_sass`: Bootstrap SASS and custom CSS3 files
* `docs`: The rendered website in HTML (output)
* `res`: static files such as images and code
* `tmp`: temporary build files

## Future Plans

* Auto generated TOC for folders
* Generate internal links to terms used in the text
* Solve math equations (Math JS)
* Topic Concepts
* Summary/Concept boxes (e.g. for buses: speed, wires, range)
* consistent JS framework for interactive content
* Improved search: Sorting results, reaction to no results (forward to wolfram alpha)
* More content
