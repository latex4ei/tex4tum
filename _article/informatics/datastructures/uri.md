---
title: Uniform Resource Identifier (URI)
tags: URI URL URN
---
A Uniform Resource Identifier (URI) is a string of characters used to identify a resource. Web-URLs, for example, are a common type of URIs.


## Syntax

```
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```
* scheme: `http`, `ftp`, `file`, `coap`, etc.
* query: a sequence of key-value pairs. E.g. `key1=value1&key2=value2`



**Example**
```
         user    host    port
         ┌┴─┐ ┌───┴───┐  ┌┴┐ 
 https://john@github.com:123/repo/master/?color=true&mode=raw#L123
 └─┬─┘ └───────┬───────────┘└───┬───────┘└──────────┬───────┘└─┬─┘  
 scheme     authority          path               query      fragment
```



## URI Parser
<input id="uri-input" type="text" oninput="parseURI(this)" placeholder="scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]" value="">

<div id="uri-divout">
<ul>
<li>scheme: <code id="uri-scheme"></code></li>
<li>authority: <code id="uri-authority"></code></br>
 (user: <code id="uri-user"> </code>, password: <code id="uri-password"> </code>, host: <code id="uri-host"> </code>, port: <code id="uri-port"> </code>)
</li>
<li>path: <code id="uri-path"></code></li>
<li>query: <code id="uri-query"></code></li>
<li>fragment: <code id="uri-fragment"></code></li>
</ul>
</div>



## Escape Characters
<div class="row align-items-center">
<div class="col-5">
<input id="uri-decoded" type="text" oninput="encChar(this)" placeholder="why encode?">
</div>
<div class="col-2"><span> ⇦ enc/dec ⇨ </span></div>
<div class="col-5">
<input id="uri-encoded" type="text" oninput="decChar(this)" placeholder="Why%20encode%3F">
</div>
</div>

The characters allowed in a URI are either *reserved*, *unreserved* or *percent-encoded* (e.g. `%3F` for a `?`).

* reserved characters: `: / ? # [ ] @ !  $  &  '  (  ) *  +  ,  ;  =`
* unreserved characters: `a-z`, `A-Z`, `0-9`, `- _ . ~`
* percent-encodings:


| Char   | Escape  | Char   | Escape   | Char   | Escape   |
|-------:|:--------|-------:|:---------|-------:|:---------|
| space  | `%20`   | `,`    | `%2C`    | `^`    | `%5E`    |
| `!`    | `%21`   | `/`    | `%2F`    | `_`    | `%5F`    |
| `"`    | `%22`   | `:`    | `%3A`    | `{`    | `%7B`    |
| `#`    | `%23`   | `;`    | `%3B`    | `|`    | `%7C`    |
| `$`    | `%24`   | `<`    | `%3C`    | `}`    | `%7D`    |
| `%`    | `%25`   | `=`    | `%3D`    | `~`    | `%7E`    |
| `&`    | `%26`   | `>`    | `%3E`    |        |          |
| `'`    | `%27`   | `?`    | `%3F`    | `ä`    | `%C3%A4` |
| `(`    | `%28`   | `@`    | `%40`    | `ö`    | `%C3%B6` |
| `)`    | `%29`   | `[`    | `%5B`    | `ü`    | `%C3%BC` |
| `*`    | `%2A`   | `\`    | `%5C`    | `÷`    | `%C3%B7` |
| `+`    | `%2B`   | `]`    | `%5D`    | `ø`    | `%C3%B8` |





## Relationship to URN and URL
URN and URL are types of URIs.
A Uniform Resource Name (URN) can be compared to a person's name, while a Uniform Resource Locator (URL) can be compared to their street address. In other words, a URN identifies an item and a URL provides a method for finding it.

Example URNs:

* `urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66`
* `urn:isbn:0451450523`



## References

* [IETF, Internet Standard RFC 3986: Uniform Resource Identifier (URI): Generic Syntax](https://tools.ietf.org/html/rfc3986)
* [IETF, RFC 1738: Uniform Resource Locators (URL): Generic Syntax](https://tools.ietf.org/html/rfc1738)
* [IETF, RFC 3987: Internationalized Resource Identifiers (IRIs)](https://tools.ietf.org/html/rfc3987)




<script type="text/javascript">
function parseURI( text ){
	var parser = document.createElement('a');
	parser.href = text.value;
	var authority = ""
	if(parser.username != ""){ 
		authority = parser.username;
		if(parser.password != ""){ authority += ":" + parser.password}
		authority += "@";
	}
	authority += parser.host;
	document.getElementById('uri-scheme').textContent = parser.protocol;
	document.getElementById('uri-authority').textContent = authority;
	document.getElementById('uri-user').textContent = parser.username;
	document.getElementById('uri-password').textContent = parser.password;
	document.getElementById('uri-host').textContent = parser.hostname;
	document.getElementById('uri-port').textContent = parser.port;
	document.getElementById('uri-path').textContent = parser.pathname;
	document.getElementById('uri-query').textContent = parser.search;
	document.getElementById('uri-fragment').textContent = parser.hash;
}

function encChar( text ){
	document.getElementById('uri-encoded').value = encodeURIComponent(text.value);
}
function decChar( text ){
	document.getElementById('uri-decoded').value = decodeURIComponent(text.value);
}
</script>
