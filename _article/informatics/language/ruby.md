---
title: Ruby
---
Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language developed the mid-1990s by Yukihiro Matsumoto in Japan.


## Hello Beer
```ruby
class Parent
  @@num_instances = []    # Shared between class and subclasses
  @this_instance_id  = [] # Specific to this class


```


```ruby
a = 'This is a single-quoted string'
a = "\nThis is a double-quoted string\n"

class Person
  attr_reader :name, :age
  def initialize(name, age)
    @name, @age = name, age
  end
  def <=>(person) # the comparison operator for sorting
    @age <=> person.age
  end
  def to_s
    "#{@name} (#{@age})"
  end
end

group = [
  Person.new("Bob", 33),
  Person.new("Chris", 16),
  Person.new("Ash", 23)
]

puts group.sort.reverse
```



## Class Variables
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


