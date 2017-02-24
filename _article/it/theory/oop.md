---
title: Object Oriented Programming (OOP)
---

OOP is attractive to handle complexity and achieve modularity and maintainability of large programs.


Class: A specification of an object
Object: The instance of a class

Classes/Objects consist of attributes and methods.

## Concepts
There are four main concepts in OOP:

* Encapsulation: Grouping of related attributes and methods
* Inheritance: Derive classes (hierarchy)
* Polymorphism: overwrite derived methods; dynamic dispatching
* Abstraction: Force overwriting


### Encapsulation
Related data and subprograms are grouped together

### Inheritance
Class can be derived from base classes and inherit their methods and attributes

### Polymorphism
Methods of derived types are overwritten. Class wide calls are dynamically dispatched during runtime.

### Abstraction
Specification of abstract interface that must be implemented by objects.


## Likov Substitution Principle
Methods of a base type must be applicable and behave the same for derived types of that base type. 

The LSP is important to avoid problems with polymorphism.

<div class="example">
For example, if a type wombat is derived from a type animal, then every behavior that applies class-wide to an animal must also apply in the same way to a wombat.

A typical example of a violation of the principle is a square type derived from a rectangle type. A possible precondition of a rectangle type would be that width and height must be positive, however, for a square type the precondition is strengthened because width and height must be the same.
</div>

