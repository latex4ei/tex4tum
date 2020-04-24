---
title: Ruby
---
Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language developed in the mid-1990s by Yukihiro Matsumoto in Japan.



```ruby
#: hello beer: drink 0.5 liter in 4 rounds

LITER_PER_SIP = 37e-3

def sips2liter( num_sips )
    num_sips * LITER_PER_SIP
end

beer_l = 0.5
rounds = 4
sips_per_round = [3, 7, 4, 2]

puts "I drink #{beer_l} l in #{rounds} rounds:"
sips_per_round.each do |sips|
    puts "I drink #{sips} sips."
    sleep sips 
    beer_l -= sips2liter( sips )
    if beer_l <= 0.0
        puts "My beer is empty!"
        break
    else
        puts "I have #{beer_l} l beer left."
    end
end
```


## Important Basics
* *Everything*, including a literal, is an object.
* All blocks are terminated by the keyword `end`.
* *Everything* (except `false` and `nil`) evaluates to true in a boolean context.
* Methods implicitly return the result of the last statement.


## Data Types
The basic data types are `Number`, `String`, `Symbol`, `Hash`, `Array`, `Boolean`. Strings are mutable; Symbols are not.

### Strings
```ruby
ss = 'This is a single-quoted string'
ss = %q{This is a single-quoted string}

ds = "\nThis is a double-quoted string\n"
ds = %Q{\nThis is a double-quoted string\n}
ds = %{\nThis is a double-quoted string\n}
```

Strings support variable interpolation:
```
var = 3.14159
"pi is #{var}"   # will print "pi is 3.14159"
```

### Collections
There are two collection types: `Array` and `Hash`

```ruby
array = [1, 'hi', 3.14, 1, 2, [4, 5]] 
array.each {|item| puts item }   # iterate and print

hash = { :water => 'wet', :fire => 'hot' }
```



## Classes


### Class Variables
There are four types of variables:

1. `$globalvar`: global variables, which can be accessed on the whole file
1. `@@classvar`: class variables, which have the same value across all class instances (i.e. static variables).
1. `@instancevar`: instance variables, which have different values for each object instance.
1. `localvar`: local variables, which are only valid within one function.


```ruby
$company = 'AwesomeComp'     # global variable
class Employee
	@@num_employees = 0      # Shared between class and subclasses
	@name = 'Alice'          # Specific to this instance

    def initialize
        @@num_employees += 1
        puts "Number of employees created = #{@@num_employees}"
    end
end
```



## Exceptions

```ruby
begin
  # do something
rescue Exception, RuntimeError
  # handle exception (multible can match)
else
  # do this if no exception was raised
ensure
  # do this whether or not an exception was raised
end
```




## References

* [Ruby Documentation](http://ruby-doc.org/core-2.6.1/Class.html)


