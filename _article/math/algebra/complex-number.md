---
title: Complex Numbers
tags: [Imaginary Unit]
---

Complex numbers extend the concept of the one-dimensional number line to the two-dimensional complex plane by using the horizontal axis for the real part and the vertical axis for the imaginary part.

$$\cx z := a + b\i = r \cdot \exp(\i \varphi)$$ 
with Imaginary Unit $\i = \sqrt{-1}$.


![Complex Plane](complex.svg){ width="10em"}


**Polarkoordinaten:** $\cx z = r \cdot (\cos(\varphi)+\mathbf{i}\sin(\varphi))=r\cdot e^{\varphi \mathbf{i}}$

$$r=|\cx z|=\sqrt{a^2+b^2}\varphi=\arg(\cx z)=\begin{cases}+\arccos \left( \frac{a}{r}\right),  & b \ge 0 \\  -\arccos \left( \frac{a}{r}\right), & b<0 \end{cases}$$
with $\varphi \in [0, 2 \pi]$



## Rules
$\i^{2n} = -1^n$ &emsp;&emsp; $\i^{2n+1} = -\i^n$ &emsp;&emsp; $\i^{-1} = -\i$

Conjugate: $\cxc z = a - b\i$ &emsp;&emsp;&emsp; $\exp(\overline{i\varphi}) = \exp({-i\varphi})$
$\cx z \ol{\cx z} = \abs{\cx z}^2 = a^2+b^2$

Inverse: $\displaystyle \cx z^{-1} = \frac{\cxc z}{\cxc z} \cx z=\frac{a - b\i}{a^2+b^2}$


**Multiplikation:** $\cx z_1\cdot \cx z_2=r_1r_2 ( \cos ( \varphi_1 + \varphi_2) + \mathbf{i} \sin (\varphi_1 + \varphi_2))$

**Division:** $\frac{\cx z_1}{\cx z_2}=\frac{r_1}{r_2} ( \cos ( \varphi_1 - \varphi_2) + \mathbf{i} \sin (\varphi_1 - \varphi_2))$

**n-te Potenz:** $\cx z^n=r^n\cdot e^{n\varphi \mathbf{i}}= r^n (\cos (n \varphi) + \mathbf{i} \sin (n \varphi))$

**Logarithmus:** $\ln(\cx z)=\ln(r) + \mathbf{i}(\varphi + 2k\pi)$  (Nicht eindeutig!)

