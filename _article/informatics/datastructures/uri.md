---
title: Uniform Resource Identifier
tags: URI, URL
---
A Uniform Resource Identifier (URI) is a string of characters used to identify a resource.



## Syntax

```
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```

* scheme: http, ftp, file, data, etc.
* query: a sequency of key-value pairs. E.g. `key1=value1&key2=value2`

The characters `: / ? # [ ] @` are reserved for use as delimiters of the generic URI and must be percent-encoded (e.g. `%3F` for a `?`).



Example: `http://me@github.com/repo?edit=true&foo=bar#L123`



## Relationship to URN and URL
URN and URL are types of URIs.
A Uniform Resource Name (URN) can be compared to a person's name, while a Uniform Resource Locator (URL) can be compared to their street address. In other words, a URN identifies an item and a URL provides a method for finding it.


