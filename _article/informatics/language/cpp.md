---
title: C++
tags: cpp
---

C++ is a general-purpose programming language with imperative, object-oriented and generic programming features.
There are several ISO-Standards (ISO/IEC 14882) of the lanaguage referred as C++98, C++03, C++11, C++14, C++17, C++20.


## Guidlines

* https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md

* https://github.com/microsoft/gsl



## Differences to C
C++ is mostly compatible to C. However C constructs are often unsafe and should not be used in C++.
If you are used to C-programming, here is a list of the most important best practices compared to C.

**Allocation**: use `new TYPE()` and `delete` instead of `malloc` and `free` 

**Typecast**: use `static_cast<TYPE>(x)` instead of C-Style `(TYPE)x`

**Smart-Pointers**: use `std::unique_ptr` most of the time instead of raw pointers

**Null-Pointer**: use `nullptr` instead of C-Style `NULL`

**Iterators**: use `auto` when declaring iterators

**Arrays**: use `std::array` for static-length arrays and `std::vector` for dynamic. Do not use C-Style `[ ]` arrays.

**Strings**: use `std::string` or `std::wstring` instead of C-Style `char*`




```c++
for (const auto i : container){
  // do something
}
```


## C++ Standard Library
The C++ standard consists of two parts: the core language and the standard library. Programmers can expect the standard library on every major implementation of C++.


see http://en.cppreference.com/w/cpp/header

headers begining with "c" are the cpp variant of the standard library of the C language. 
See http://en.cppreference.com/w/c/header for a comparison. The C++ Standard Library also defines headers with identical names to the C library for compatibility. 


## Popular 3rd Party Libraries
* Qt
* Boost
* Standard Template Library (STL)






