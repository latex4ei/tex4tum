---
title: Secure Hash Algorithm 2
---
The Secure Hash Algorithm 3 (SHA-3) is a set of 6 cryptographic hash functions as a subset of the Keccak algorithm. 


Used operations: `And`, `Xor`, `Rot`, `Not`.


| Instances | Output bits | Security bits | Block size bits |
|-----|----|----|----|
| SHA3-224  | 224 | 112  | 1152 |
| SHA3-256  | 256 | 128  | 1088 |
| SHA3-384  | 384 | 192  | 832 |
| SHA3-512  | 512 | 256  | 576 |


## Working Principle
In contrast to SHA-2, SHA-3 is based on sponge construction in which data is "absorbed" into the sponge, then the result is "squeezed" out.  In the absorbing phase, message blocks are XORed into a subset of the state, which is then transformed as a whole using a permutation function f.


