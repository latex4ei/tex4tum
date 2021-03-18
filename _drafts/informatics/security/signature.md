---
title: Signature
---
A digital signature is a mathematical scheme for demonstrating the authenticity of digital messages or documents. A valid digital signature gives a recipient reason to believe that the message was created by a known sender (authentication), that the sender cannot deny having sent the message (non-repudiation), and that the message was not altered in transit (integrity).



## Working Principles and Implementations

* Prime Factorization: RSA
* Elliptic Curves: Secp256k1
* Hash based Signatures: SPHINCS
* Multivariate:  
* Code-based:  (one-time, large keys)



### Factorization based Signature
Given a modulus $N = pq$, where p and q a prime.
Further a public key $e$ and a private key $d$.

To sign a message, m, the signer computes a signature, σ, such that $σ ≡ m^d (mod N)$. 

To verify a message, the receiver checks that $σ^e ≡ m (mod N)$.



## Usage
Alice wants to send a document to Bob. Bob wants proof (signature) that the document is from Alice. Bob knows the public key of Alice.

### Signing
1. Alice calculates hash of the document
1. Alice encrypts hash with her private key => signature
1. Alice adds the signature to the document


### Validating
1. Bob decrypts the signature of document with the public key of Alice
1. Bob calculates the hash of the document
1. Bob checks if the hash matches the decrypted signature










