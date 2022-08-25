---
title: Trapdoor Function
---

A trapdoor function is a function that is easy to perform one way, but has a secret that is required to perform the inverse calculation efficiently.
A hash function is a one-way function and *not* a trapdoor function because it is not reversible.


## Analogy
The analogy to a "trapdoor" is something like this: It's easy to fall through a trapdoor, but it's very hard to climb back out and get to where you started unless you have a ladder.


## Formal Definition
If $f$ is a trapdoor function, then $y=f(x)$ is easy to compute, but $x = f^{-1}(y)$ is hard to compute without some special knowledge $k$. Given $k$, it is easy to compute $y=f^{-1}(x,k)$.



## Difference to Hash Functions
A hash function is not a trapdoor function because it is not reversible. Instead, it's called a one-way function. A one-way function is similar to a trapdoor function in that it's easy to compute both and it's very hard to reverse both, but there is no special key that allows you to reverse the one-way function.



## References
* https://crypto.stackexchange.com/questions/10087/what-is-the-meaning-of-trapdoor-in-cryptography
