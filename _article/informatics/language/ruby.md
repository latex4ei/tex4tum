---
title: Ruby
---
Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language developed the mid-1990s by Yukihiro Matsumoto in Japan.

```ruby
# hello beer: drink 0.5 liter in 4 rounds

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



## Data Types

```ruby
a = 'This is a single-quoted string'
a = "\nThis is a double-quoted string\n"
```





## Classes


### Class Variables
```ruby
class Employee
	@@num_employees = 0        # Shared between class and subclasses
	@this_instance_id  = 1313  # Specific to this class

    def initialize
        @@num_employees += 1
        puts "Number of employees created = #{@@num_employees}"
    end
end
```


## References

* [Ruby Documentation](http://ruby-doc.org/core-2.6.1/Class.html)


