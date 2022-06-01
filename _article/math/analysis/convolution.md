---
title: Convolution
tags: [Faltung]
---

Corresponds to multiplication in the frequncy domain.


$$x(t) * h(t) = \int\limits_{-\infty}^{\infty} x(\tau) \cdot h(t-\tau) \diff \tau$$
with signals $x(t)$, $h(t)$.




**Discrete:**
$$(f*g)[n] = \sum\limits_{k = -\infty}^{\infty} {f[k] g[n-k]}$$


![Comparison of convolution, cross-correlation, and auto-correlation. [From Wikimedia](https://de.wikipedia.org/wiki/Datei:Comparison_convolution_correlation_de.svg)](convolution.svg){ width="25em"}

<!-- TODO adjust svg like this: https://www.thinkcalculator.com/algebra/convolution-calculator.php -->


![Convolution of $f(t) * g(t)$ showing $f(\tau)$ and $g(t - \tau)$](convolution_rect_spiky){ width="25em"}







## Properties
* Kommutativität: $f(t)*g(t) = g(t)*f(t)$

* Assoziativität: $f(t)*(g(t)*h(t)) = (f(t)*g(t))*h(t)$

* Distributivität: $f(t)*(g(t) + h(t)) = f(t)*g(t) + f(t)*h(t)$

* Faltung mit Dirac: $x(t)*\delta(t-b) = x(t-b)$ (Gleiches Signal verschoben)

* Kausalität: $h(t - \tau) = 0$ für $\tau > t$ </br>
$h[n - l] = 0$ für $l > n$



## Refrences
