---
title: Exponential and Logarithm
---
Exponentiation $b^n$ corresponds to $n$ repeated multiplication of the base $b$:

$$b^{n} = \underbrace{b \times \dots \times b}_{n\,{\textrm {times}}}$$
with $b \in \R$ and $n \in \N$.


### Rules
For $n, m \in \Z$

------------    ----------------------------------------------------
Sum             $\displaystyle b^{m+n} = b^{m} \cdot b^{n}$
                $\left( b^{m} \right)^{n} = b^{m \cdot n}$
Product         $(b \cdot c)^{n} = b^{n} \cdot c^{n}$
------------    ----------------------------------------------------



## Exponential Function


$$\exp(x) \equiv e^x := \lim\limits_{n \rightarrow \infty} \left( 1 + \frac{x}{n} \right)^n = \sum\limits_{n = 0}^{\infty} \frac{x^n}{n!}$$
with the exponential function $\exp: \R \ra \R$, the argument $x \in \R$, the Euler number $\mathrm{e} = 2,718281828..$

**For complex numbers:**
$$\e^{\cx z} = \e^{a + b\i} = \e^a \cdot ( \cos b + \i \sin b )$$
with $\cx z \in \C$, $a, b \in \R$ and the imaginary unit $\i$.



## Logarithm
The logarithm is the inverse function to exponentiation.

$$\log_{b}(x) = y \qquad  \text{exactly if} \qquad b^{y} = x$$
with $b, x, y \in \R$


### Calculation Rules
For $b, x, y \in \R$

------------    ----------------------------------------------------
Product         $\displaystyle \log_{b}(x \cdot y) = \log_{b} x + \log_{b} y$
Quotient        $\displaystyle \log_{b} \frac{x}{y} = \log_{b} x - \log_{b} y$
Power           $\displaystyle \log_{b} \left( x^{p} \right) = p \cdot \log_{b}x$
Root        	$\displaystyle \log_{b} \sqrt[p]{x} =  \frac{\log_b x}{p}$
Change base     $\displaystyle \log_{b} x = \frac{\log_{k} x}{ \log_{k} b }$
------------    ----------------------------------------------------




Other notations: $\log_2 \equiv \lb$, $\log_{\e} \equiv \ln$, , $\log_{10} \equiv \lg$



### Taylor Series
$$\ln(z)={\frac {(z-1)^{1}}{1}}-{\frac {(z-1)^{2}}{2}}+{\frac {(z-1)^{3}}{3}}-{\frac {(z-1)^{4}}{4}}+\cdots$$
