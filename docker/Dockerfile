FROM ruby:2.7

ENV JEKYLL_VAR_DIR=/var/jekyll
ENV JEKYLL_DATA_DIR=/srv/jekyll
ENV JEKYLL_ENV=development

RUN apt-get update && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y --no-install-recommends \
    nodejs pandoc cmake locales && \
    rm -rf /var/lib/apt/lists/*

RUN echo "gem: --no-ri --no-rdoc" >~/.gemrc && \
    unset GEM_HOME && unset GEM_BIN && yes | gem update --system && \
    unset GEM_HOME && unset GEM_BIN && yes | gem install --force bundler && \
    gem install jekyll rspec html-proofer pygments.rb jekyll-pandoc rubocop && \
    npm install -g standard

RUN TEMP_DEB="$(mktemp)" && wget -O "$TEMP_DEB" "https://github.com/jgm/pandoc/releases/download/2.10.1/pandoc-2.10.1-1-amd64.deb" && dpkg -i "$TEMP_DEB" && rm -f "$TEMP_DEB"

RUN mkdir -p $JEKYLL_VAR_DIR $JEKYLL_DATA_DIR && \
    rm -rf /root/.gem /home/jekyll/.gem $BUNDLE_HOME/cache $GEM_HOME/cache

ENV LANG C.UTF-8

WORKDIR /srv/jekyll
VOLUME /srv/jekyll
EXPOSE 35729
EXPOSE 4000

CMD [ "bundle", "install" ]
