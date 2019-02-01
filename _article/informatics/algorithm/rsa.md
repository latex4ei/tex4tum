---
title: RSA
---

RSA is a public-key cryptosystems and is used for secure data transmission.

The RSA algorithm involves four steps: key generation, key distribution, encryption, and decryption.


## Principle

$${\displaystyle (m^{e})^{d}\equiv m{\pmod {n}}}$$



### Key generation

1. Choose two distinct prime numbers $p$ and $q$ with $n = pq$.
1. choose random private key $d$ with $1 < d < n-1$
1. find public key $e$ with $de \equiv 1 (mod (p-1)(q-1))$




## Attack Model
* key-only attack: the attacker is only given the public verification key

* known message attack: the attacker is given valid signatures for a variety of messages known by the attacker but not chosen by the attacker


* adaptive chosen message attack: the attacker first learns signatures on arbitrary messages of the attacker's choice





## homomorphic multiplication
RSA is multiplicatively homomorphic. That means you can exchange the order of operations without affecting the result. The product of the encryption of two messages is equal to the encryption of the product of the messages. 

$$E(x)E(y) \equiv x^ey^e \equiv (xy)^e \equiv E(xy) (\pmod n)$$

Thus, you can perform calculations on encrypted data, without knowing the data, which is used in zero-knowledge proofs.


