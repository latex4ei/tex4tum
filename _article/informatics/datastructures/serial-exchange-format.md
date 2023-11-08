---
title: Serial Data Exchange Formats
tags: [json, xml, toml, yaml, ion]
---



## Common Formats
* JavaScript Object Notation (JSON): 
* [YAML](http://yaml.org/): Quotes are optional, supports types, tags, and references.
* [TOML](https://toml.io/en/): Many types (date, tables) but not typed. Uses section headings with `[section.subsec]` syntax.
* [ION](https://amzn.github.io/ion-docs/docs/spec.html): 
* [UBJSON](https://ubjson.org/): Semi-binary encoding of JSON. Uses `typ-len-data` triple for everything.


## Example Files

<div class="tabbox" markdown>

#### JSON

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "children": [ "Alice", "Thomas", "Trevor" ],
  "spouse": null
}
```

#### YAML
```yaml
--- # YAML has comments with #
name: John Smith
age: 33
dob: 2001-01-23
alive: yes   # yes/no/true/false are bools

bill-to:  &id001
    street: |
            123 Tornado Alley
            Suite 16
    city:   East Centerville
    state:  KS

ship-to:  *id001
...
```

#### TOML
```toml
# TOML has comments with #
[owner]
name = "John Smith"
dob = 1979-05-27T07:32:00-08:00
children = ["Alice", "Bob"]

[addr]
street = """123 Tornado Alley
Suite 16"""
city = "New York",
```


#### ION

```java
// ION has comments with double forward slash 
{
  key: "value",   // key here is a symbol, it can also be a string as in JSON
  nums: 1_000_000, // equivalent to 1000000, use of underscores with numbers is more readable
  'A float value': -31415e-4,  // key is a value that contains spaces 
  "An int value": null.int,
  annotated: age::45,     // age here is the annotation to number 45
  lists : 'hw grades'::[80, 85, 90], // any symbol can be used as an annotation 
  many_annot: I::have::many::annotations::true, // annotations are not nested, but rather, a list of annotations
  sexp: (this (is a [valid] "Ion") last::value 42) // Ion S-expressions, 
  blob_value: {{OiBTIKUgTyAASb8=}},
  clob_value: {{"a b"}}
}
```



</div>



## Data Types

<div class="tabbox" markdown>

#### JSON
Only 4 data types

* String: e.g. given as `'single'` or `"double"` 
* Integer: e.g. `1234`


#### YAML

##### Strings
* `string`: Unicode text literals. Without quotes or `'` or `"`

##### Collections
* `list`: Ordered sequence of values:  `[42, 'hi', 3.33]`
* `map`: Unordered collection of key/value pairs

##### Numbers
* `int`: either decimal (`42`), octal (`0o14`), or hex (`0xC`)
* `float`: 64-bit IEEE binary-encoded floating point numbers

##### Other
* `timestamp`: date (`2002-12-14`) or iso8601 (`2001-12-14t21:59:43.10-05:00`)



#### TOML

* Keys, which use only `A-Za-z0-9_-`

##### Collections
* `arrays`: sequence of mixed types: `[42, 'hi', 3.33]`
* `tables`: set of key/value pairs: `tab1.key1` or `[tab1]
`

##### Strings (4 kinds)
* Basic, with escapes in double quote: `"You can \"quote\" me."`
* Literal, without escaping in single quotes: `'literal'`
* Multi-line basic, using three double `"""`
* Multi-line literal, using three single `'''`

##### Numbers
* `int`: either decimal (`42`), octal (`0o14`), or hex (`0xC`)
* `float`: either decimal (`3.14`), exponent (`1e3`), or literal (`+inf`, `-inf`, `nan`)

##### Others
* `timestamp`: 
  * date (`2002-12-14`) 
  * local time (`07:32:00`, `07:32:00.999`)
  * iso8601 (`2001-12-14t21:59:43.10-05:00`)

#### ION

##### Strings
* `symbol`: Unicode symbolic atoms (aka identifiers)
* `string`: Unicode text literals

##### Collections
* `list`: Ordered heterogeneous collection of Ion values
* `struct`: Unordered collection of key/value pairs

##### Numbers
* `int`: Signed integers of arbitrary size
* `float`: 64-bit IEEE binary-encoded floating point numbers
* `decimal`: Decimal-encoded real numbers of arbitrary precision

##### Others
* `timestamp`: Date/time/time zone moments of arbitrary precision

* `blob`: Binary data of user-defined encoding
* `clob`: Text data of user-defined encoding
* `sexp`: Ordered collections of values with application-defined semantics


#### UBJSON
Uses a single construct with two optional segments (length and data) for all types:
1. **type**: 1-byte ASCII char used to indicate the type of the data.
2. **length** (OPTIONAL): A positive integer (int8, uint8, int16, int32, int64) specifying the length of the following data payload.
3. **data** (OPTIONAL): A run of bytes representing the actual binary data for this type of value.

</div>

## Primitive Data Structures

| Type    | Description | Example |
|---------|------------------|---------|
| Boolean | A binary logic values (true/false)  | true |
| Integer | A number without a fractional component | 42 |
| Float   | A rational number | 13.452 |
| Character | A single character | 'a' |
| String  | A sequence of characters | "Hello" |

Some languages include also complex numbers, sets, tuples.

