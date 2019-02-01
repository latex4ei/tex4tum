---
title: Secure Hash Algorithm 2
---
The Secure Hash Algorithm 2 (SHA-2) is a set of 6 cryptographic hash functions with 224, 256, 384 or 512 bits.


Applications: TLS/SSL, PGP, SSH, S/MIME, and IPsec.


## Working Principle
A message is processed by blocks of 512 = 16 × 32 bits, each block requiring 64 rounds. For SHA-256 each round calculates 8 intermediate 32bit hash values.


1. Padding: ensure that the message length is a multiple of 512 bits
1. Block decomposition: Parse the message into $N$ 512-bit blocks $M_i$
1. Hash computation: Process one block at a time an iteratively compute

	$$H_i = H_{i-1} + C(M_i)$$
	where $C$ is the compression function

	Six logical functions are used in SHA-256.



