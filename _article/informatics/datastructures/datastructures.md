---
title: Datastructures
tags: 
---

## Primitive Data Structures

| Type    | Description | Example |
|---------|------------------|---------|
| Boolean | A binary logic values (true/false)  | true |
| Integer | A number without a fractional component | 42 |
| Float   | A rational number | 13.452 |
| Character | A single character | 'a' |
| String  | A sequence of characters | "Hello" |

Some languages include also complex numbers, sets, tuples.


## Container (Advanced abstract data types)
A container is an abstrac data type which instances are collections of other objects. There are two types of containers:

* Single value containers: Each element is stored independently in the container and it is accessed directly or with an iterator.
* Associative containers: The container is composed of (key,value) pairs, such that each key appears at most once in the container. The key is used to find the value (element), if it is stored in the container.


### Array
An array is a collection of equal sized elements. The elements are stored in sequence, thus given the size of one element it is possible to jump directly to a specific element.

### Record = Tuple = Struct
A record is a collection of fields, possibly of different data types, typically in fixed number and sequence.

### Union
A union is a structure that may have any of several representations or formats within the same position in memory

### Set
A set is an unordered collection with no duplicate elements.

### List = Vector
A list is a chain of elements. Each element has a pointer to the next element, thus it does not matter where elements are stored. Elements can be inserted and removed dynamically at each position in the list.

### Stack
A stack is a LIFO storage. Elements are added (push) and the latest added element is removed first (pop).

### Queue
A stack is a FIFO storage. Elements are added (push) and the oldest added element is removed first (po)

### Hash Tables
A hash table can grow dynamically put performs better than a list. Elements are stored as key-value pair. 

### Associative array = Map = Dictionary
An associative array is an abstract data type composed of (key, value) pairs, such that each possible key appears at most once in the collection.

### Tree
A tree is a hierarchical data structure. It consists of nodes and each node can have one or more child nodes (recursion).

### Graph
A graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from mathematics.








