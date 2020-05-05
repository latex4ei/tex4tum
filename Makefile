build:
	JEKYLL_ENV=production bundle exec jekyll build

run:
	JEKYLL_ENV=production bundle exec jekyll serve

draft:
	bundle exec jekyll serve --unpublished

test: build
	bundle exec htmlproofer ./_site --only-4xx --check-favicon --check-html --disable-external
	bundle exec rspec

format:
	rubocop -a

check_format:
	rubocop

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

