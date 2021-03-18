---
title: zkSNARK
---

Zero-knowledge succinct non-interactive arguments of knowledge (zkSNARK) is a method to verify the correctness of a computation without knowing the data of the computation.

zkSNARK can be used to verify the solution of NP-complete statements in constant time.


## Scenario
There is a **prover** which wants to convince a **verifier** that cetain mathematical statement is true.
The proof must be sound, complete, and must not reveal any information to the verifier (zero-knowledge).
	
	Details: A protocol is used to exchange information about the solution and can be proven zero knowledge if for every possible Verifier, you can demonstrate the existence of an algorithm called a ‘Simulator’, that can demonstrate parts of the real solution (without effort) or simulate (fake) parts of the solution (with effort or simply by luck) without knowing the real solution. The verifier can then not distinguish between real and fake solutions and thus does not learn something about the real solution but gets confident about the correctness if the effort or luck required is high enough.




zkSNARKs as currently implemented, have 4 main ingredients:
1. Encode your problem as a polynomial $t(x)h(x) = w(x)v(x)$
1. chooses a secret single evaluation point $s$ to reduce the problem to $t(s)h(s) = w(s)v(s)$
1. Homomorphic encryption: the prover computes $E(t(s)), E(h(s)), E(w(s)), E(v(s))$ without knowing $s$
1. Zero Knowledge: multiplying with a number so that the verifier can still check their correct structure without knowing the actual encoded values


## Process
The prover knows some secret numbers $x$ and $y$ and computes their product, but sends only the encrypted versions $a = E(x), b = E(y)$ and $c = E(xy)$ to the verifier. The verifier now checks that
$(ab)%n ≡ c%n$ and the only thing the verifier learns is the encrypted version of the product and that the product was correctly computed, but she neither knows the two factors nor the actual product.




## Abbreviation
* **zero-knowledge:** the verifier learns nothing apart from the validity of the statement
* **Succinct:** messages are tiny compared to the length of the  computation
* **Non-interactive:** anyone can verify the computation
* **ARguments:** no real proof, only protected against computationally limited provers.
* **of Knowledge:** not possible for the prover to construct a proof


## From interactive to non-interactive
You can convert an interactive protocol into a non-interactive one by simply using a strong hash function to pick the challenge. The hash will convert any publicly choosen, changing input into a pseudo-random output.



