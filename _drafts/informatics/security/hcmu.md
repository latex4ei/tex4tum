---
title: Human Computable, Machine Unbreakable
---

A hash function that can be computed by a human completely mentally.



## Requirements
* Input of $n$ letters is $z ∈ {a,b,c,...}^n$
* Remember a map function $f$ that maps letters to digits $f(z) = d ∈ {0,1,2,...,9}$
* Remember a random permutation g of the 10 digits: e.g. `0298736514`



## Algorithms
1. calculate $d_i = f(z_i)$ for every letter $z_i ∈ z$
2. calculate first $h_1 = g( (d_1+d_n) mod 10 )$ for $i = 1$
3. calculate $h_i = g( (h_{i-1} + d_i) mod 10 )$ for $i > 1$


## Example
* Mapping: $f(a) = 8, f(b) = 3, f(c) = 7$
* permutation: $g=0298736514$ (take the next digit)
* z="abc"
* calc map D=837
* $h_1 = g( (8+7) mod 10 ) = g(5) = 1
* h=103


## References
* Manuel Blum, Towards Human Computable Passwords
