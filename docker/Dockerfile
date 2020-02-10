FROM ruby:2.7

ENV JEKYLL_VAR_DIR=/var/jekyll
ENV JEKYLL_DATA_DIR=/srv/jekyll
ENV JEKYLL_ENV=development

ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL=en_US.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && \
    apt install -y nodejs pandoc cmake

RUN echo "gem: --no-ri --no-rdoc" > ~/.gemrc
RUN unset GEM_HOME && unset GEM_BIN && yes | gem update --system

RUN unset GEM_HOME && unset GEM_BIN && yes | gem install --force bundler
RUN gem install jekyll rspec html-proofer pygments.rb jekyll-pandoc

RUN mkdir -p $JEKYLL_VAR_DIR $JEKYLL_DATA_DIR && \
    rm -rf /root/.gem /home/jekyll/.gem $BUNDLE_HOME/cache $GEM_HOME/cache

WORKDIR /srv/jekyll
VOLUME  /srv/jekyll
EXPOSE 35729
EXPOSE 4000

CMD [ "bundle", "install" ]
