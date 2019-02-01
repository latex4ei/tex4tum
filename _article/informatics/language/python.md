---
title: Python
---

Python is a widely used high-level interpreter language that focuses on readability and expressiveness.


## Example: Hello World
{% highlight python linenos %}
def myfunction( myValue ):
	if(myValue == 10):
		print "Hallo World"
{% endhighlight %}


## Data Types

| Type | Syntax |
|-------------------|-------------|
| List  | `[1, 1, "hi"]` |
| Tuple   | `(1, 2, 3)`  |
| Dictionary   | `{'a': 1, 'b': "hi"}`  |


## Operators
* relations: `>`,  `<`,  `<=`,  `>=`,  `!=`, `==` 
* boolean: `not`, `and`, `or`



## Classes

| Special Attribute | Description |
|-------------------|-------------|
| `__init__(self)`  | constructor, can have more arguments |
| `__str__(self)`   | returns string representation  |
| `__eq__(self,other)`   | compares equality  |
| `__dict__`   | attribute dictionary  |






### Setter and Getter

Use `@property`


{% highlight python linenos %}
class Car:
	__init__(self, ownval):
		self._myvar = ownval

	@property
	def myvar(self):
		return self._myvar
{% endhighlight %}





