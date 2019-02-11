---
title: Convolution
tags: Faltung
---

Corresponds to multiplication in the frequncy domain.

{% emphbox %}

$$x(t) * h(t) = \int\limits_{-\infty}^{\infty} x(\tau) \cdot h(t-\tau) \diff \tau$$
with signals $x(t)$, $h(t)$.

{% endemphbox %}


**Discrete:**
$$(f*g)[n] = \sum\limits_{k = -\infty}^{\infty} {f[k] g[n-k]}$$



## Properties
* Kommutativität: $f(t)*g(t) = g(t)*f(t)$

* Assoziativität: $f(t)*(g(t)*h(t)) = (f(t)*g(t))*h(t)$

* Distributivität: $f(t)*(g(t) + h(t)) = f(t)*g(t) + f(t)*h(t)$

* Faltung mit Dirac: $x(t)*\delta(t-b) = x(t-b)$ (Gleiches Signal verschoben)

* Kausalität: $h(t - \tau) = 0$ für $\tau > t$ </br>
$h[n - l] = 0$ für $l > n$

