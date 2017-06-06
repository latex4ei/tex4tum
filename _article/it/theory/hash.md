---
title: Hash Function
---

A hash function maps input of variable size to an output of fixed size.


## Properties
Deterministic: the same input produces the same output
Uniformity: random input is mapped evenly over the output range

Continuity: similar inputs produce similar outputs. (search index)

Non-invertible: it should be practically impossible to reconstruct the input $x$ from its hash value $h(x)$ alone without spending great amounts of computing time (one way function)


## Attributes
* perfect iff it maps each valid input to a different hash value (no collisions)

* minimal iff the output range consists of $n$ consecutive integers for $n$ possible keys (no empty slots)



## Algorithms
* CRC: CRC-16
* Checksums: sum, Fletcher
* Non-cryptographic: Pearson
* cryptographic: MDx, SHA-x, Whirlpool


Cryptographic hashes often divide the input in fixed length blocks $m_i$ and iteratively compute $h_i = f(h_{i-1}, m_i)$



## Attacks

* Preimage Attack: find any input that has a specific hash value.
* Collision Attack: find any two inputs producing the same hash value


