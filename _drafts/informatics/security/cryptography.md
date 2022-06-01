---
title: Cryptography
---
Cryptography is a technique for secure communication in the presence of third parties.


## Encryption
Encryption converts a plaintext $m$ (input) to a ciphertext $c$ (output)



## Cryptanalysis
Cryptanalysis is the study of methods for obtaining the meaning of encrypted information.





## Cryptographic primitives
Cryptographic primitives provide fundamental cryptographic properties, which are used to develop more complex tools called cryptosystems.


* hash: confirm the integrity of data
* signatures: confirm the author of a message
* symmetric encryption: encryption and decryption of data with the same key
* asymmetric encryption: en/decryption with private key, de/encryption with public key
* commitment scheme: commit to a chosen value while keeping it hidden to others
* Oblivious transfer: e.g. authenticated dictionary
* pseudo-random generator: generate non-predictable random numbers



## Cryptographic properties

Confusion: each bit of the ciphertext should depend on several parts of the key to make the relationship between the ciphertext and the key as complex as possible. Confusion look-up tables are very non-linear and good at destroying patterns.

Diffusion: spreads every part of the input to every part of the output. A change of a single bit of the plaintext should statistically change half of the bits in the ciphertext.

Confusion and Diffusion are often achieved by series of substitutions (S-Box) and permutations (P-Box).


# Cryptographic Problems
Cryptographic primitives are based on mathematical problems where most of the instances must be hard to solve and are easy to solve if some additional information (e.g. the key) is known.

* Factorization
* Discrete Logarithm
* Lattices
