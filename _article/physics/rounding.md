---
title: Rounding
---

No measurement of a physical quantity is infinite accurate and it is important to determine how much a measured value most likely deviates from the unknown, true, value of the quantity.


## Exact and Approximate Numbers
Only numbers, which are obtained by a measurement process subject to errors need to be rounded. Numbers obtained by a counting process or given by definition are exact.


## Resolution, Accuracy, Precision
* **Accuracy**: Closeness of a measurement to the true value.
* **Resolution**: Amount of steps in which a measurement can be expressed.
* **Precision**: Closeness of repetitive measurments to each other.
* **Sensitivity**: Smallest change that can be detected.

Sensitivity is an absolute quantity; resolution is a relative quantity.



## Significant Figures and Decimal Places

--------------------    --------------------------------    ----------
Significant figures     all digits except leading zeros     **12.30**
Decimal places          all digits after decimal point      12.**30**
--------------------    --------------------------------    ----------


Example: 0.01230 has 4 significant figures and 5 decimal places, 1.23e-3 has 3 significant figures a.


| Number    | Sign. Fig. | Dec. Pl. |
|-----------|------------|----------|
| 0.01230   |          4 |        5 |
| 1.23e-3   |          3 |        2 |
| 24 hours  |          2 |        0 |



## Calculate with rounded numbers

Exact numbers have an infinite number of significant figures. The accuracy of the result is limited only be the approximate numbers involved.


Multiplication/Division: round to the lowest amount of significant figures
Addition/Subtraction: round to the lowest amount of decimal places
Square root: round to the significant figures of the input
Logarithm: round the result



Rules:
* Round each value exactly once.
	Only use the digit right to the digit to be rounded to estimate the rounded result.
	If you apply rounding rules to the same value twice, you do something wrong.



* Only round the result!
	In a series of calculations, carry extra digits through to the final result, THEN round. Do not round intermediate values when used for calculations!

* round at once. Only use the digit right to the digit to be rounded to estimate the rounded result.
* if you continue calculation, calculate with the value *before* the rounding or with at least two significant figures more but use the rounded value when estimating the significant figures of your new result.




If an equations contains multiplication and addition:
1. Calculate the equation without any rounding, this is your correct result
2. Calculate the equation with rounding after each operation, this is your wrong but correctly rounded result.
	You can also just calculate the number of significant digits for each operation by appling the rounding rules after each operation without calculating the resulting value.
3. Round the result from 1. to the significant figures obtained from 2.



## Scientific Notation of Numbers
$167 = 1.67 \times 10^2 = 1.67\mathrm{E}2$


Rules:
1. Determine the maginitude in $1000 = 10^3$
2. Round the number to significant figures

Example: For the number 0.012345, which shall be rounded to 4 significant figures. 1. $0.012345 = 12.345 \cdot 10^{-3}$ 2. $12.345 \cdot 10^{-3} \approx 12.35 \cdot 10^{-3}$


## Numerical Calculation (Floats)

Floating point numbers are subject to two types of errors:
* Round off Error
* Truncation Error

Here rounding is an unwanted/necessary side effect


Rules of Thumb:
* Multiplication and division are “safe” operations
* Addition and subtraction are dangerous






## References
* [National Instruments, Sensor Terminology, 2013](http://www.ni.com/white-paper/14860/en/)
