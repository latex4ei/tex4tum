# global settings
T4T_LIB := ~/Dropbox/Projekte/t4tlib


# local settings
SRC_EXT := .md
SRC_DIR := pre

# space separated list
SRC_SUBDIRS := g

BUILD_DIR := ./post
TMP_DIR := ./tmp



# Setup Environment
export T4T_CWD := ${CURDIR}
export T4T_DIR := make/t4t
export T4T_TMP := ${CURDIR}/tmp

export T4T_PLANTUMLJAR:=$(shell locate plantuml.jar)
export MATPLOTLIBRC:=${T4T_DIR}/rc
export TEXINPUTS:=.:${T4T_DIR}/tex:res:$(TEXINPUTS)



# Collect Files (DO NOT EDIT)
# ------------------------------------------

# find sources: Markdown, Rmarkdown, 
SRCS := $(wildcard $(SRC_DIR)/*$(SRC_EXT))
SRCS += $(foreach subdir,$(SRC_SUBDIRS),$(wildcard $(SRC_DIR)/$(subdir)/*$(SRC_EXT)))


# determine objects to build based on sources
HTMLS += $(patsubst $(SRC_DIR)/%$(SRC_EXT), $(BUILD_DIR)/%.html, $(SRCS))
GFMS += $(patsubst $(SRC_DIR)/%$(SRC_EXT), $(BUILD_DIR)/%.md, $(SRCS))
PDFS += $(patsubst $(SRC_DIR)/%$(SRC_EXT), $(BUILD_DIR)/%.pdf, $(SRCS))
TEXS += $(patsubst $(SRC_DIR)/%$(SRC_EXT), $(BUILD_DIR)/%.tex, $(SRCS))
ASTS += $(patsubst $(SRC_DIR)/%$(SRC_EXT), $(BUILD_DIR)/%.json, $(SRCS))


PD_DIR := ${T4T_DIR}/pd


# the input format (markdown_in_html_blocks)
FROM_MD=--from markdown+raw_tex+gfm_auto_identifiers+citations+markdown_in_html_blocks
FROM_GFM=--from gfm-raw_html
FROM_RST=--from rst+smart+auto_identifiers

TO_MD=--to markdown-simple_tables-raw_attribute-fenced_divs
# TO_MD=--to commonmark-smart

MD_APPEND=${T4T_DIR}/tex/t4t-katex.tex


## Pandoc CLI Options
PD_PATH=--data-dir=${PD_DIR} --resource-path=.:src:res:res/img/dynamic-images:res/img/static-images
PD_CONFIG=--defaults=${PD_DIR}/pandoc-config.yml
PD_PLOT_CONFIG=-M plot-configuration=${PD_DIR}/plot-config.yml

PD_FLAGS:=${PD_PATH} ${PD_CONFIG}
PD_FLAGS:=${PD_FLAGS}
# -M date="$(shell date "+%F")"



# output flags
HTML_FLAGS=--katex

GFM_FLAGS=--webtex='https://latex.codecogs.com/svg.image?'

# latex template (t4tDefault.tex, t4tIEEE.tex)
TEX_TEMPLATE=--template=IEEEtran.latex
TEX_PREAMBLE=-H ${PD_DIR}/templates/preamble.tex
TEX_FLAGS=--listings ${TEX_TEMPLATE} ${TEX_PREAMBLE}  --shift-heading-level-by=-1


# helper variables
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))



# Manual Targets
# ------------------------------------------

# default
html: init $(HTMLS) finish

gfm: init $(GFMS) finish

md: init $(GFMS) finish	

pdf: init $(PDFS) finish

tex: init $(TEXS) finish

all: init $(HTMLS) $(GFMS) $(PDFS) finish


index:
	python3 "${T4T_DIR}/py/md-indexer.py"


# output AST and TEX for debugging
debug: $(ASTS) $(TEXS)



medium:
	API='https://api.medium.com/v1'



# Helper Targets
# ------------------------------------------


# install dependencies
setup:
	sudo apt install pandoc
	pip3 install bokeh pandoc-fignos pandoc-eqnos pandoc-tablenos pandoc-secnos --user
	# install R packages
	R -e "install.packages('svglite',dependencies=TRUE)"
	@mkdir -p ${SRC_DIR} ${TMP_DIR} res make
	ln -s ${T4T_LIB} ${T4T_DIR}


# run before making
init:
	@mkdir -p $(BUILD_DIR)
	@mkdir -p res
	@mkdir -p $(foreach subdir, $(SRC_SUBDIRS), $(BUILD_DIR)/$(subdir))
	@mkdir -p ${TMP_DIR}/res
	@mkdir -p ${TMP_DIR}/res/dia
	@mkdir -p ${TMP_DIR}/res/img
	ln -sfr res ${SRC_DIR}/
	@echo "SRCS: ${SRCS}"
	@echo "OUTS: ${HTMLS}"



sync-res:
	rsync -a ./res/ "${BUILD_DIR}/res"
	rsync -a ./tmp/res/ "${BUILD_DIR}/res"
	rsync -a --ignore-missing-args ${T4T_DIR}/css "${BUILD_DIR}/res/"
	rsync -a --ignore-missing-args ${T4T_DIR}/js "${BUILD_DIR}/res/"


# run after making
finish: sync-res


clean:
ifeq ($(BUILD_DIR),.)
	@echo "ERR: Makefile: 'BUILD_DIR := . ', will not perform clean."
else
	rm -fr $(ROOT_DIR)/$(BUILD_DIR)/*
endif
ifeq ($(TMP_DIR),.)
	@echo "ERR: Makefile: 'TMP_DIR := . ', will not perform clean."
else
	rm -fr $(ROOT_DIR)/$(TMP_DIR)/*
endif


# Markdown Converter
# ======================

# create GFM
$(BUILD_DIR)/%.md:$(SRC_DIR)/%$(SRC_EXT)
# 	pandoc ${FROM_MD} ${PD_FLAGS} ${GFM_FLAGS} --to gfm $< -o $@
# create Markdown
	pandoc ${FROM_GFM} ${PD_FLAGS} ${TO_MD} -s $< -o $@

# create HTML
$(BUILD_DIR)/%.html:$(SRC_DIR)/%$(SRC_EXT)
	pandoc ${FROM_MD} ${PD_FLAGS} -s ${HTML_FLAGS} ${MD_APPEND} --defaults=$< $< -o $@

# create PDF
$(BUILD_DIR)/%.pdf:$(SRC_DIR)/%$(SRC_EXT)
	pandoc ${FROM_MD} ${PD_FLAGS} ${TEX_FLAGS} --defaults=$< $< -o $@
# 	biber 

# create Tex
$(BUILD_DIR)/%.tex:$(SRC_DIR)/%$(SRC_EXT)
	pandoc ${FROM_MD} ${PD_FLAGS} ${TEX_FLAGS} --defaults=$< $< -o $@

# create AST
$(BUILD_DIR)/%.json:$(SRC_DIR)/%$(SRC_EXT)
	pandoc ${FROM_MD} ${PD_FLAGS} --verbose --to native $< -o $@



# RST Converter
# ======================

# create HTML
$(BUILD_DIR)/%.html:$(SRC_DIR)/%.rst
	pandoc ${FROM_RST} ${PD_FLAGS} -s ${HTML_FLAGS} $< -o $@


# PHONY defines: will be called even if newest files exists
# ======================
.PHONY: clean
