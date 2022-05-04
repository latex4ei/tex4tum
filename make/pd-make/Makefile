# Makefile for Pandoc
# will be executed within /tmp

# global settings
SRC_EXT := .md
TMP_DIR := ./tmp


## Pandoc settings
PD_DIR:=../make/t4t/pd

PD_CONFIG=--defaults=../make/pandoc-mkdocs-config.yml
PD_FLAGS:=${PD_CONFIG}

PD_SRC_DIR := ./pre
PD_BUILD_DIR := ./build


PD_SRCS := $(shell find $(PD_SRC_DIR) -type f -name '*.md' -exec basename {} \;)
PD_OUTS := $(addprefix $(PD_BUILD_DIR)/, $(PD_SRCS))



# Manual Targets
# ---------------------------------------------------


all: ${PD_OUTS} finish


# Helper Targets (do not call these)
# ---------------------------------------------------

inti:
	@echo "SRCS: ${PD_SRCS}"
	@echo "OUTS: ${PD_OUTS}"



finish:
	cd $(PD_BUILD_DIR) && sed -i 's/\\</</g' *.md
	cd $(PD_BUILD_DIR) && sed -i 's/markdown=""/markdown/g' *.md
	rsync -a ./res/ "$(PD_BUILD_DIR)/res"

# 	rsync -a "$(TMP_DIR)/res" "${BUILD_DIR}/res"



# Target Converters
# ---------------------------------------------------

$(PD_BUILD_DIR)/%.md:$(PD_SRC_DIR)/%.md
	pandoc ${PD_FLAGS} -s $< -o $@

