# global settings
SRC_EXT := .md
SRC_DIR := _article
BUILD_DIR := ./docs
TMP_DIR := ./tmp




# Manual Targets
# ---------------------------------------------------

# setup build environment once
setup:
	sudo apt install pandoc
	python -m pip install -r requirements.txt


build: init preprocess
	mkdocs build

run: init preprocess
	mkdocs serve

draft: init init-draft preprocess
	mkdocs serve



test: build
	bundle exec htmlproofer $(BUILD_DIR) --only-4xx --check-favicon --check-html --disable-external

check:
	standard --fix
	rubocop -aSE

format:
	standard --fix || true
	rubocop -aSE || true

install:
	sudo apt update
	sudo apt install -y curl ruby-full build-essential pandoc
	curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
	sudo apt install -y nodejs
	sudo gem install jekyll bundler
	sudo gem uninstall nokogiri
	sudo apt install libxslt-dev libxml2-dev zlib1g-dev -y
	bundle install

clean:
	bundle exec jekyll clean

rebuild: clean build

update:
	bundle update




# Helper Targets (do not call these)
# ---------------------------------------------------

# run before making (flat file copy)
init:
	@mkdir -p ${TMP_DIR}
	@mkdir -p ${TMP_DIR}/pre
	@mkdir -p ${TMP_DIR}/build
	ln -sfr res ${TMP_DIR}/
	find $(SRC_DIR)/ -type f -print0 | xargs -0 cp -ut $(TMP_DIR)/pre || true
	@echo "SRCS: ${SRCS}"


# copy from /res to tmp/build/res
sync-res:
	@mkdir -p ${TMP_DIR}/build/res
	rsync -a res/code $(TMP_DIR)/build/res	


init-draft:
	find $(SRC_DIR)/ -type f -print0 | xargs -0 cp -ut $(TMP_DIR)/pre || true


# Initial md to md conversion. Sync pandoc Makefile and execute
preprocess: sync-res
	rsync -a make/pd-make/Makefile $(TMP_DIR)/
	cd $(TMP_DIR) && make



finish:
	@mkdir -p "${BUILD_DIR}/res"
# 	rsync -a "$(TMP_DIR)/res" "${BUILD_DIR}/res"

