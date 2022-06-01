# global settings
ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

SRC_DIR := _article
BUILD_DIR := $(ROOT_DIR)/docs
TMP_DIR := $(ROOT_DIR)/tmp

# Manual Targets
# ---------------------------------------------------

# setup build environment once
setup:
	sudo apt install -y pandoc
	pip3 install -r requirements.txt
	git submodule update --init

build: .init .preprocess
	mkdocs build

run: .init .preprocess
	mkdocs serve

draft: .init .init-draft .preprocess
	mkdocs serve

clean:
	rm -rf tmp

# run before making (flat file copy)
.init:
	@mkdir -p ${TMP_DIR}
	@mkdir -p ${TMP_DIR}/pre
	@mkdir -p ${TMP_DIR}/build
	ln -sfr res ${TMP_DIR}/
	find $(SRC_DIR)/ -type f -print0 | xargs -0 cp -ut $(TMP_DIR)/pre || true
	@echo "SRCS: ${SRCS}"

.sync-res:
	@mkdir -p ${TMP_DIR}/build/res
	rsync -a res/code $(TMP_DIR)/build/res

.init-draft:
	find _drafts/ -type f -print0 | xargs -0 cp -ut $(TMP_DIR)/pre || true

# Initial md to md conversion. Sync pandoc Makefile and execute
.preprocess: .sync-res
	rsync -a make/pd-make/Makefile $(TMP_DIR)/
	cd $(TMP_DIR) && make
