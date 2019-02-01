---
title: Hash Function
---

A hash function $H$ maps input of variable size to an output of fixed size.

$$H(\cdot): \eset{0,1}^* \rightarrow \eset{0,1}^k$$
with hash function $H$, an input bit stream $\eset{0,1}^*$ and output digest $\eset{0,1}^k$ of $k$ bit.


## Properties

* **Deterministic:** the same input produces the same output
* **Uniformity:** random input is mapped evenly over the output range
* **Continuity:** similar inputs produce similar outputs. (search index)


## Cryptographic Hash Functions
* **Non-invertible:** it should be practically impossible to reconstruct the input $x$ from its hash value $h(x)$ alone without spending great amounts of computing time (one way function)


## Attributes
* perfect iff it maps each valid input to a different hash value (no collisions)

* minimal iff the output range consists of $n$ consecutive integers for $n$ possible keys (no empty slots)



## Algorithms
* CRC: CRC-16
* Checksums: sum, Fletcher
* Non-cryptographic: Pearson
* cryptographic: MDx, SHA-x, Whirlpool


| Crypto Hash | Output bits | Security bits | Block size bits |
|-----|----|----|----|
| MD5       | 128 | < 64 | 512 |
| SHA-1     | 160 | < 63 | 512 |
| SHA-256   | 256 | 128  | 512 |
| SHA3-256  | 256 | 128  | 1088 |





Cryptographic hashes often divide the input in fixed length blocks $m_i$ and iteratively compute $h_i = f(h_{i-1}, m_i)$



## Attacks

* Preimage Attack: find any input that has a specific hash value.
* Collision Attack: find any two inputs producing the same hash value
* Length extension attack: find a new hash that corresponds to the original input with some arbitrary appended data.

