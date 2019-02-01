---
title: Multivariate Cryptography
---
Multivariate cryptography is the generic term for asymmetric cryptographic primitives based on multivariate polynomials over a finite field $\mathbb F$.

## Properties
* Simple vector and matrix multiplications
* Large private and public key, very small signature


## The Multivariate Quadratic (MQ) System
Given $m$ quadratic polynomials

  $$p_1(x_1,..., x_n), ..., p_m(x_1,..., x_n)$$
  with polynomial $p$ of $n$ variables $x$

in $n$ variables $x = x_1,..., x_n$ over a finite field $\mathbb F_q$, find a vector $\vec x$ such that 

  $$p_1(x_0) = ... = p_m(x_0) = 0$$

Solving MQ polynomial systems is worst case NP-hard and in general doubly
exponential over any finite field.



## Construction
The private key consists of two affine transformations, $S$ and $T$, and an easy to invert quadratic map $P':F^{m}\rightarrow F^{n}$.



The triple $(S^{-1},{P'}^{-1},T^{-1})$ is the private key, also known as the trapdoor. The public key is the composition $P=S\circ P'\circ T$ which is by assumption hard to invert without the knowledge of ...


## Implementations
Crypto-Systems based on multivariate cryptography:

* SFLASHv3
* QUARTZ




## References
* [Seminar Slides on Multivariate Crypto](http://www.mathematik.uni-kl.de/~ederc/download/mpkc.pdf)
* [SFLASHv3](https://eprint.iacr.org/2003/211.pdf)
* [QUARTZ](http://www.goubin.fr/papers/rsa2001b.pdf)
* [MI-T-HFE](https://eprint.iacr.org/2015/890.pdf)

