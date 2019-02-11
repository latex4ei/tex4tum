---
title: Python
---

Python is a widely used high-level interpreter language that focuses on readability and expressiveness.


## Example: Hello Beer

```python
# hello beer: drink 0.5 liter in 4 rounds
import time

LITER_PER_SIP = 37e-3

def sips2liter( sips ):
	return float( sips ) * LITER_PER_SIP

beer_l = 0.5
sips_per_round = [3, 7, 4, 2]

for sips in sips_per_round:
	print("I drink {} sips.".format(sips)) 
	time.sleep( sips )
	beer_l -= sips2liter( sips )
	if beer_l < 0:
		beer_l = 0
		print("My beer is empty!")
		break
	else:
		print("I have {:.2f} l beer left.".format(beer_l))
```


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





