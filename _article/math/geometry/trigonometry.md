---
title: Trigonometry
tags: [Sinus, Cosinus, Tangens, Arctan]
---

{% include svg-object.html id="UC" filename="unit_circle.svg" %}

## Basic Relations

$$\sin(\alpha) = \frac{y}{r}$$
with angle $\alpha$, radius $r$

$$\cos(\alpha) = \frac{x}{r}$$
with angle $\alpha$, radius $r$

$$\tan(\alpha) = \frac{y}{x}$$
with angle $\alpha$, radius $r$


## Properties

| Properties |    Equation      a Test        |
|---|-----------------------|
| Symmetry | $\sin(-x)=-\sin(x)$  $\cos (-x) = \cos (x)$ |
| Complex | $e^{\i x}=\cos(x)+\i\sin(x)$  $e^{-\i x}=\sin(x)-\i\cos(x)$ |




| $x$ <br> $\scriptstyle{ \varphi }$ | $0$ <br> $\scriptstyle{0^\circ}$ | $\pi / 6$ <br> $\scriptstyle{30^\circ}$ | $\pi / 4$ <br> $\scriptstyle{45^\circ}$ | $\pi / 3$ <br> $\scriptstyle{60^\circ}$ | $\frac{1}{2}\pi$ <br> $\scriptstyle{90^\circ}$ | $\pi$ <br> $\scriptstyle{180^\circ}$ | $1\frac{1}{2}\pi$ <br> $\scriptstyle{270^\circ}$ | $2 \pi$ <br> $\scriptstyle{360^\circ}$ |
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
