FROM ruby:2.7

ENV JEKYLL_VAR_DIR=/var/jekyll
ENV JEKYLL_DATA_DIR=/srv/jekyll
ENV JEKYLL_ENV=development

RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs pandoc cmake locales

RUN echo "gem: --no-ri --no-rdoc" >~/.gemrc
RUN unset GEM_HOME && unset GEM_BIN && yes | gem update --system

RUN unset GEM_HOME && unset GEM_BIN && yes | gem install --force bundler
RUN gem install jekyll rspec html-proofer pygments.rb jekyll-pandoc

RUN mkdir -p $JEKYLL_VAR_DIR $JEKYLL_DATA_DIR && rm -rf /root/.gem /home/jekyll/.gem $BUNDLE_HOME/cache $GEM_HOME/cache

RUN echo 'C.UTF-8 UTF-8' >>/etc/locale.gen && locale-gen && update-locale LANG=C.UTF-8

ENV LC_ALL C.UTF-8
ENV LANGUAGE C.UTF-8

WORKDIR /srv/jekyll
VOLUME /srv/jekyll
EXPOSE 35729
EXPOSE 4000

CMD [ "bundle", "install" ]
