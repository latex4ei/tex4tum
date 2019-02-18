---
title: Secure Hash Algorithm 2 (SHA-2)
---
The Secure Hash Algorithm 2 (SHA2) is a set of 6 cryptographic hash functions with 224, 256, 384 or 512 bits.

| Variant  | Block  | State | Rounds |  Output |
|----------|-------:|------:|-------:|--------:|
| SHA2-224 |  512 b | 256 b |   64   |  224 b  |
| SHA2-245 |  512 b | 256 b |   64   |  256 b  |
| SHA2-384 | 1024 b | 512 b |   80   |  384 b  |
| SHA2-512 | 1024 b | 512 b |   80   |  512 b  |

Applications: TLS/SSL, PGP, SSH, S/MIME, and IPsec.


<div class="row">
<div class="col-md-auto pr-0">
SHA2-256 (\" <input id="number-input" style="width: 5em;" oninput="calcSHA(this)" placeholder="Input" value=""> \") =	
</div>
<div class="col pl-0">
<p><code id="SHA2_out">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</code></p>	
</div>
</div>



## Working Principle
A message is processed by blocks of 512 = 16 × 32 bits, each block requiring 64 rounds. For SHA-256 each round calculates 8 intermediate 32bit hash values.


{% include figure.html width="25em" filename="hash_sha2.svg" description="One round of the SHA2 compression"%}



1. Padding: ensure that the message length is a multiple of 512 bits

1. Block decomposition: Parse the message into $N$ 512-bit blocks $M_i$

1. Hash computation: Process one block at a time an iteratively compute

	1. Create 64 chunks $w_i$ of 32 bit and copy the block into it
	2. Initialize the internal state $[a, b, c, d, e, f, g, h]$
	2. For every chunk $w_i$:
	  * $\text{CH}( e, f, g ) = (e \land f) \oplus (\neg e \land g)$
      * $\text{Ma}( a, b, c) = (a \land b) \oplus (a \land c) \oplus ( b \land c)$
      * $\Sigma_{0}(a) = (a \ggg 2) \oplus (a \ggg 13) \oplus (a \ggg  22)$
      * $\Sigma_{1}(e) = (e \ggg 6) \oplus (e \ggg 11) \oplus (e \ggg  25)$


<!-- 	$$H_i = H_{i-1} + C(M_i)$$
	where $C$ is the compression function
	Six logical functions are used in SHA-256.
 -->

## SHA2-256

Initial hash values:
```
h[0..7] := 0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 
           0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19

```


## Test Vectors
```
x  = 0x   // empty, "", length 0
SHA2-224( x ) = 0x d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f
SHA2-256( x ) = 0x e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
SHA2-384( x ) = 0x
38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b
SHA2-512( x ) = 0x
cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e

```


## References
* [Wikipedia: SHA-2](https://en.wikipedia.org/wiki/SHA-2)


<script type="text/javascript" src="http://cdn.jsdelivr.net/gh/emn178/js-sha256/build/sha256.min.js"></script>
<script type="text/javascript">
function calcSHA( text ){
	document.getElementById('SHA2_out').textContent = sha256( text.value );
}
</script>

