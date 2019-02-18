---
title: Secure Hash Algorithm 3 (SHA-3)
---
The Secure Hash Algorithm 3 (SHA-3) is a set of 6 cryptographic hash functions as a subset of the Keccak algorithm. 



Used operations: `And`, `Xor`, `Rot`, `Not`.


| Variant   | Block  | State  | Rounds | Output |
|-----------|-------:|-------:|-------:|-------:|
| SHA3-224  | 1152 b | 1600 b |     24 |  224 b |
| SHA3-256  | 1088 b | 1600 b |     24 |  256 b |
| SHA3-384  |  832 b | 1600 b |     24 |  384 b |
| SHA3-512  |  576 b | 1600 b |     24 |  512 b |


<div class="row">
<div class="col-md-auto pr-0">
SHA3-256 (\" <input id="number-input" style="width: 5em;" oninput="calcSHA3(this)" placeholder="Input" value=""> \") =	
</div>
<div class="col pl-0">
<p><code id="SHA3_out">a7ffc6f8bf1ed76651c14756a061d662f580ff4de43b49fa82d80a4b80f8434a</code></p>	
</div>
</div>


## Working Principle
In contrast to SHA-2, SHA-3 is based on sponge construction in which data is "absorbed" into the sponge, then the result is "squeezed" out.  In the absorbing phase, message blocks are XORed into a subset of the state, which is then transformed as a whole using a permutation function $f$.



## References
* [Wikipedia: SHA-3](https://en.wikipedia.org/wiki/SHA-3)

* [Keccak Specification Summary](https://keccak.team/keccak_specs_summary.html)


<script type="text/javascript" src="http://cdn.jsdelivr.net/gh/emn178/js-sha3/build/sha3.min.js"></script>
<script type="text/javascript">
function calcSHA3( text ){
	document.getElementById('SHA3_out').textContent = sha3_256( text.value );
}
</script>

