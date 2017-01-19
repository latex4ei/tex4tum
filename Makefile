all:
	bundle exec jekyll build

run:
	bundle exec jekyll serve

test: all
	bundle exec htmlproofer ./_site --only-4xx --check-favicon --check-html

install:
	bundle install

clean:
	rm -rf ./_site/*

rebuild: clean all
