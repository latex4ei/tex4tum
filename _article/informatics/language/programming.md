---
title: Programming
---

## Properties of Programming Languages

* functional: specify functions which results purely depend on the arguments (no side-effects)
* imperative: specify precise instructions that the processor should execute 
* declarative: specify what shoud be done not how it is done


## Programming Best Practice

* code should express the intend (what is done) not the implementation (how is it done)

* programs should be statically type safe

* Prefer compile-time checking to run-time checking

* Prefer immutable data to mutable data

* Avoid global variables
 Global variables are just hidden arguments to all the functions that use them. They make it really hard to understand what a function does, and how it is controlled.
You should always try to design your functions to be completely controllable by their arguments.

