---
title: Floating Point Number
---

Floats represents a

$$ (-1)^s \cdot 1.m \cdot 2^{e-127} $$

| Precision | Width | Exp. | Bias | Mant. |
|---|---|---|---|
| Half | 16 bit | 5 bit | 15 | 10 bit |
| Single | 32 bit | 8 bit | 127 | 23 bit |
| Double | 64 bit | 11bit | 1023 | 52 bit |

Example -7 = 1.11 * 2^2




## Special Numbers
Floats can also represent signed zeros ($\pm 0$), infinity $\pm \infty$, and Not-A-Number (NaN).

| Num | Sign | Exp. | Mant. |
|---|---|---|---|
| Normal | [0,1] | [-127,126] | $[0,2^{23}]$
| $\pm 0$ | [0,1] | -128 | 0 |
| $\pm \infty$ | [0,1] | 127 | 0 |
| Subnormal | [0,1] | -128 | != 0 |
| QNaN | [0,1] | 127 | !=0 & MSB=1 |
| SNaN | [0,1] | 127 | !=0 & MSB=0 |


## Exceptions
5 exceptions are supported:

* Invalid operation: the result of the operation is a NaN
* Division by zero
* Overflow: the result of the operation is ±∞ or ±MAX depending on the rounding mode
* Underflow: the result of the operation is a denormalized number
* Inexact result: caused by rounding


## Subnormal Numbers
If the result of a calculation is smaller than the smallest normal number there are two option:

* hard underflow: directly assign zero
* gradual underflow: subnormal number

To prevent unwanted behavior by jumping directly to zero, subnormal numbers fill the gap between zero and the smallest normal number.


## Not-A-Number (NaN)


## References

* IEEE: [IEEE-754-2019 Standard](https://standards.ieee.org/content/ieee-standards/en/standard/754-2019.html), 2019
* David Goldberg: [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html), 1991
