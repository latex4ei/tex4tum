all:
	bundle exec jekyll build

run:
	bundle exec jekyll serve

test: all
	bundle exec htmlproofer ./_site --only-4xx --check-favicon --check-html
	bundle exec rspec

install:
	curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
	sudo apt install -y nodejs
	sudo apt install ruby ruby-dev pandoc -y
	sudo gem install jekyll bundler
	sudo gem uninstall nokogiri
	sudo apt install libxslt-dev libxml2-dev zlib1g-dev -y
	sudo bundle install

clean:
	bundle exec jekyll clean

rebuild: clean all

update:
	sudo bundle update

deploy:
	cp -rf _site/* docs/
	@echo "Finished Deployment"
	@echo "Now add a commit with the changes in docs folder"
	@echo "Don't forget to tag this commit"
