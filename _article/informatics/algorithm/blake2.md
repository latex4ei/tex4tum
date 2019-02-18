---
title: Blake 2
---
BLAKE2 is a cryptographic hash function based on Dan Bernstein's ChaCha stream cipher.


| Variant  | Block  | State  | Rounds |   Output |
|----------|-------:|-------:|-------:|---------:|
| BLAKE2b  |  512 b | 1024 b |   12   | variable |
| BLAKE2s  |  256 b |  512 b |   10   | variable |




<!-- <div class="row">
<div class="col-md-auto pr-0">
BLAKE-2b (\" <input id="number-input" style="width: 5em;" oninput="calcHash(this)" placeholder="Input" value=""> \") =	
</div>
<div class="col pl-0">
<p><code id="hash_out">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</code></p>	
</div>
</div>
 -->
TODO: adjust JS library for blake2b


## Working Principle




## Blake-2b

Initialization Vector:
```
IV0 = 0x6A09E667F3BCC908   //Frac(Sqrt(2))
IV1 = 0xBB67AE8584CAA73B   //Frac(Sqrt(3))
IV2 = 0x3C6EF372FE94F82B   //Frac(Sqrt(5))
IV3 = 0xA54FF53A5F1D36F1   //Frac(Sqrt(7))
IV4 = 0x510E527FADE682D1   //Frac(Sqrt(11))
IV5 = 0x9B05688C2B3E6C1F   //Frac(Sqrt(13))
IV6 = 0x1F83D9ABFB41BD6B   //Frac(Sqrt(17))
IV7 = 0x5BE0CD19137E2179   //Frac(Sqrt(19))
```



## Test Vectors
```
BLAKE2b-512("")
 = 786A02F742015903C6C6FD852552D272912F4740E15847618A86E217F71F5419
   D25E1031AFEE585313896444934EB04B903A685B1448B755D56F701AFE9BE2CE
```


## References
* [Wikipedia: BLAKE](https://en.wikipedia.org/wiki/BLAKE_(hash_function))


<script type="text/javascript" src="http://cdn.jsdelivr.net/gh/dcposch/blakejs/blake2b.js"></script>
<script type="text/javascript">
function calcHash( text ){
	document.getElementById('hash_out').textContent = blake.blake2bHex( text.value );
}
</script>

