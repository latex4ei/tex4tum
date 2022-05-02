build:
	JEKYLL_ENV=production bundle exec jekyll build

run:
	JEKYLL_ENV=production bundle exec jekyll serve

draft:
	bundle exec jekyll serve --unpublished


mkdocs:
	find _article/ -type f -print0 | xargs -0 cp -ut tmp/pre || true
	cd tmp && make md 
	cd tmp/build && sed -i 's/\\</</g' *.md
	cd tmp/build && sed -i 's/markdown=""/markdown/g' *.md
	mkdocs serve


test: build
	bundle exec htmlproofer ./_site --only-4xx --check-favicon --check-html --disable-external
	bundle exec rspec

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
