---
title: Trigonometry
tags: [Sinus, Cosinus, Tangens, Arctan]
---


## Unit Circle
{% include svg-object.html id="UC" filename="unit_circle.svg" %}

## Sin, Cos, Tan

$$\sin^2(\alpha) + \cos^2(\alpha) = 1$$
with angle $\alpha$

Explanation: In the unit circle, the sinus and cosinus at a given angle form a orthogonal triangle. The length of the hypotenuse corresponds to the radius, which equals 1 (unit circle). Thus, we can apply the law of Pythagoras $a^2 + b^2 = c^2$ with $a = \sin(\alpha)$, $b = \cos(\alpha)$, and $c = 1$. 

{% tabbox %}
#### Sinus
$$\sin(\alpha) = \frac{b}{r}$$
with angle $\alpha$, radius $r$

Symmetry: $\sin(\alpha) = - \sin(α)$

#### Cosinus

$$\cos(\alpha) = \frac{a}{r}$$
with angle $\alpha$, radius $r$

Symmetry: $\cos(\alpha) = \cos(-\alpha)$

#### Tangens
$$\tan(\alpha) = \frac{\cos(\alpha)}{\sin(\alpha)} = \frac{b}{a}$$
with angle $\alpha$

{% endtabbox %}


| Properties |    Equation  |
|---|-----------------------|
| Symmetry | $\sin(-x)=-\sin(x)$  $\cos (-x) = \cos (x)$ |
| Complex | $e^{\i x}=\cos(x)+\i\sin(x)$  $e^{-\i x}=\sin(x)-\i\cos(x)$ |


| $x$ <br> $\scriptstyle{ \alpha }$ | $0$ <br> $\scriptstyle{0^\circ}$ | $\pi / 6$ <br> $\scriptstyle{30^\circ}$ | $\pi / 4$ <br> $\scriptstyle{45^\circ}$ | $\pi / 3$ <br> $\scriptstyle{60^\circ}$ | $\frac{1}{2}\pi$ <br> $\scriptstyle{90^\circ}$ | $\pi$ <br> $\scriptstyle{180^\circ}$ | $1\frac{1}{2}\pi$ <br> $\scriptstyle{270^\circ}$ | $2 \pi$ <br> $\scriptstyle{360^\circ}$ |
|---|---|---|---|---|---|---|---|---|
|$\sin$ | $0$ | $\frac{1}{2}$ | $\frac{1}{\sqrt{2}}$ | $\frac{\sqrt 3}{2}$ | $1$ | $0$ | $-1$ | $0$ |
|$\cos$ | $1$ | $\frac{\sqrt 3}{2}$ | $\frac{1}{\sqrt 2}$ | $\frac{1}{2}$ | $0$ | $-1$ | $0$ | $1$ |
|$\tan$ | $0$ | $\frac{\sqrt{3}}{3}$ |  $1$ |   $\sqrt{3}$ | $\pm \infty$ | $0$ | $\mp \infty$ | $0$|


| Addition |  Integrals |
|---------|------------|
|$\cos (x - \frac{\pi}{2}) = \sin x$ | $\int x \cos(x) \diff x = \cos(x) + x \sin(x)$|
|$\sin (x + \frac{\pi}{2}) = \cos x$ | $\int x \sin(x) \diff x = \sin(x) - x \cos(x)$|
|$\sin 2x = 2 \sin x \cos x $  | $\int \sin^2(x) \diff x = \frac12 \bigl(x - \sin(x)\cos(x) \bigr)$|
|$\cos 2x = 2\cos^2 x - 1$  | $\int \cos^2(x) \diff x = \frac12 \bigl(x + \sin(x)\cos(x) \bigr)$|
|$\sin(x) = \tan(x)\cos(x)$ | $\int \cos(x)\sin(x) = -\frac12 \cos^2(x)$ |



## Hyperboles sinh, cosh, tanh

{% tabbox %}
#### sinh
$$\sinh(x) = \frac{1}{2}(e^x -e^{-x}) = - \i \, \sin(\i x)$$ 


#### cosh
$$\cosh(x)  = \frac{1}{2}(e^x +e^{-x})= \cos(\i x)$$


#### tanh
empty

{% endtabbox %}


$\cosh (x) + \sinh (x) = e^{x}$</br>
$\cosh^2 (x) - \sinh^2 (x) = 1$



## Cardinal Sinus
$$\mathrm{si}(x) = \frac{\sin(x)}{x}$$

normalized: 
$$\sinc(x) = \frac{\sin(\pi x)}{\pi x}$$




