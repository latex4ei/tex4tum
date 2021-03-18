---
title: RSA
---

RSA is a public-key cryptosystems and is used for secure data transmission.

The RSA algorithm involves four steps: key generation, key distribution, encryption, and decryption.

Key sizes: 1024 b, 2048 b, 4096 b

## Principle

$${\displaystyle (m^{e})^{d}\equiv m{\pmod {n}}}$$
with the message $m$, private key $d$, public key $e$.



### Key generation

1. Choose two distinct prime numbers $p$ and $q$ with $n = pq$.
1. choose random private key $d$ with $1 < d < n-1$
1. find public key $e$ with $de \equiv 1 (\mod (p-1)(q-1))$



### Example
Here is an example of RSA encryption and decryption. The parameters used here are artificially small.

**Generate Keypair** $(d, e)$

1. Choose two distinct prime numbers, such as</br>
	$p=61$ and $q=53$
1. Compute $n = pq$ giving</br>
	$n=61\times 53=3233$
1. Compute the Carmichael's totient function of the product as $λ(n) = lcm(p -1, q - 1)$ giving</br>
    $\lambda (3233)=\operatorname{lcm} (60,52)=780$
1. Choose any number $1 < e < 780$ that is coprime to $780$. Choosing a prime number for $e$ leaves us only to check that $e$ is not a divisor of 780.</br>
	Let $e=17$
1. Compute d, the modular multiplicative inverse of $e \mod λ(n)$ yielding,
    $d=413$</br>
    $d\times e=1{\mod {\lambda }}(n)$</br>
    $413\times 17=1{\mod {7}}80$

The public key is $(n = 3233, e = 17)$. Encryption function is $c(m)=m^{17}{\mod {3}}233$.

The private key is $(n = 3233, d = 413)$. Decryption function is $m(c)=c^{413}{\mod {3}}233$.

**Encrypt message $m = 65$:**</br>
$c=65^{17}{\mod {3}}233=2790$

**Decrypt cipher $c = 2790$:**</br> 
$m=2790^{413}{\mod {3}}233=65$



## Attack Model
* key-only attack: the attacker is only given the public verification key

* known message attack: the attacker is given valid signatures for a variety of messages known by the attacker but not chosen by the attacker


* adaptive chosen message attack: the attacker first learns signatures on arbitrary messages of the attacker's choice





## homomorphic multiplication
RSA is multiplicatively homomorphic. That means you can exchange the order of operations without affecting the result. The product of the encryption of two messages is equal to the encryption of the product of the messages. 

$$E(x)E(y) \equiv x^ey^e \equiv (xy)^e \equiv E(xy) (\pmod n)$$

Thus, you can perform calculations on encrypted data, without knowing the data, which is used in zero-knowledge proofs.


## References
* [Wikipedia: RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem))


