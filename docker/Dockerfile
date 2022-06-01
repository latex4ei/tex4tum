FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    wget rsync make python3-pip && \
    rm -rf /var/lib/apt/lists/*

ENV PANDOC_VERSION="2.18"
RUN TEMP_DEB="$(mktemp)" && \
    wget -O "$TEMP_DEB" "https://github.com/jgm/pandoc/releases/download/$PANDOC_VERSION/pandoc-$PANDOC_VERSION-1-amd64.deb" && \
    dpkg -i "$TEMP_DEB" && \
    rm -f "$TEMP_DEB"

COPY requirements.txt .
RUN pip3 install -r requirements.txt

WORKDIR /home

CMD [ "bash" ]
