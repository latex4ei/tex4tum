---
title: Uniform Resource Identifier (URI)
tags: URI, URL
---
A Uniform Resource Identifier (URI) is a string of characters used to identify a resource.



## Syntax

```
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```
* scheme: `http`, `ftp`, `file`, `coap`, etc.
* query: a sequency of key-value pairs. E.g. `key1=value1&key2=value2`



**Example**
```
         user    host    port
         ┌┴─┐ ┌───┴───┐  ┌┴┐ 
 https://john@github.com:123/repo/master/?color=true&mode=raw#L123
 └─┬─┘ └───────┬───────────┘└───┬───────┘└──────────┬───────┘└─┬─┘  
 scheme     authority          path               query      fragment
```


## Escape Characters
The characters `: / ? # [ ] @` are reserved for use as delimiters of the generic URI and must be percent-encoded (e.g. `%3F` for a `?`).


| Char        | Escape |
|-------------|--------|
| space       | `%20`  |
| `!`         | `%21`  |
| `#`         | `%23`  |
| `$`         | `%24`  |
| `%`         | `%25`  |
| `&`         | `%26`  |
| `/`         | `%2F`  |
| `:`	      | `%3A`  |
| `?`         | `%3F`  |
| `@`         | `%40`  |
| `[`         | `%5B`  |
| `\`         | `%5C`  |
| `]`         | `%5D`  |
| `ü`         | `%C3%BC`  |


TODO Javascript to escape strings



## Relationship to URN and URL
URN and URL are types of URIs.
A Uniform Resource Name (URN) can be compared to a person's name, while a Uniform Resource Locator (URL) can be compared to their street address. In other words, a URN identifies an item and a URL provides a method for finding it.


