all:
	bundle exec jekyll build

run:
	bundle exec jekyll serve

test: all
	bundle exec htmlproofer ./_site --only-4xx --check-favicon --check-html
	bundle exec rspec

install:
	bundle install

clean:
	bundle exec jekyll clean

rebuild: clean all

update:
	bundle update

deploy:
	cp -rf _site/* docs/
	@echo "Finished Deployment"
	@echo "Now add a commit with the changes in docs folder"
	@echo "Don't forget to tag this commit"
