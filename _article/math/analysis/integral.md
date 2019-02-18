---
title: Integral
---

An integral is a function $F$ of which a given function $f$ is the derivative. The integral describes displacement, area, volume, and other concepts that arise by calculating the infinite sum of rectangles of infinitesimal width. The symbol $\diff x$ was taken to represent an infinitesimally "small piece" of the independent variable $x$.


**Indefinite integral:**

$$F(x)=\int f(x)\diff x$$
with the function $f$ of a real variable $x$.


**Definite integral:**

$$\int_{a}^{b}\,f(x)\diff x = \left[F(x)\right]_{a}^{b}=F(b)-F(a)$$
with the interval $[a, b]$ of the real line.

Example:
Given $f(x) = x^2$, then $\int_1^2 x^2 \diff x = \left[ \frac{1}{3}x^3 \right]_1^2 = \frac{8}{3} - \frac{1}{3} = \frac{7}{3} = 2 \frac{1}{3}$



## Common Integrals

|$F(x) - C$ | $f(x)$ | $f'(x)$ |
|-----------|--------|---------|
|$\frac{1}{q+1}x^{q+1}$        | $x^q$       | $qx^{q-1}$               |
|$\frac{2\sqrt{ax^3}}{3}$      | $\sqrt{ax}$ | $\frac{a}{2\sqrt{ax}}$   |
|$x\ln(ax) -x$                 | $\ln(ax)$   | $\textstyle \frac{1}{x}$ |
|$\frac{1}{a^2} e^{ax}(ax- 1)$ | $x \cdot e^{ax}$ | $e^{ax}(ax+1)$      |
|$\frac{a^x}{\ln(a)}$          | $a^x$       | $a^x \ln(a)$             |
|$-\cos(x)$                    | $\sin(x)$   | $\cos(x)$                |
|$\sin(x)$                     | $\cos(x)$   | $-\sin(x)$               |
|$-\ln \abs{\cos(x)}$          | $\tan(x)$   | $\frac{1}{\cos^2(x)}$    |
|$\ln \abs{\sin(x)}$           | $\cot(x)$   | $\frac{-1}{\sin^2(x)}$   |
|$x\arcsin (x)+\sqrt{1-x^2}$   | $\arcsin(x)$| $\frac{1}{\sqrt{1-x^2}}$ |
|$x\arccos (x)-\sqrt{1-x^2}$   | $\arccos(x)$| $-\frac{1}{\sqrt{1-x^2}}$|
|$x\arctan (x)-\frac{1}{2} \ln \abs{1+ x^2}$ | $\arctan(x)$ | $\frac{1}{1+x^2}$ |
|$x\arctan (x)+\frac{1}{2} \ln \abs{1+ x^2}$ | $\arccot(x)$ | $-\frac{1}{1+x^2}$ | 
| $\cosh(x)$ | $\sinh(x)$ | $\cosh (x)$ |
| $\sinh(x)$ | $\cosh(x)$ | $\sinh (x)$ | 





## Trigonometry
$\int x \cos(x) \diff x = \cos(x) + x \sin(x)$<br>
$\int x \sin(x) \diff x = \sin(x) - x \cos(x)$<br>
$\int \sin^2(x) \diff x = \frac12 \bigl(x - \sin(x)\cos(x) \bigr)$<br>
$\int \cos^2(x) \diff x = \frac12 \bigl(x + \sin(x)\cos(x) \bigr)$<br>
$\int \cos(x)\sin(x) = -\frac12 \cos^2(x)$





## Line Integrals
Given a curve $\vec \gamma:[a,b] \rightarrow \R^n, t \mapsto \vec \gamma(t)$.

{% tabbox %}
### Scalar field
$$\int\limits_\gamma f \diff s := \int\limits^b_a f\bigl(\vec{\gamma(t)}\bigr) \cdot \norm{\vec{ {\dot{\gamma}} }(t)} \diff t$$
with the scalar field $f(\vec x)$ along a curve $\vec \gamma(t)$ and the elementary arc length $\diff s$.

### Vector field
$$\int \vec v \bdot \diff \vec s := \int\limits^b_a \vec v \bigl(\vec \gamma(t)\bigr)^\top \boldsymbol \cdot \vec{ {\dot{\gamma}} }(t) \ \diff t$$
with the vector field $\vec v(\vec x)$, the curve $\vec \gamma$, and $\vec x, \vec v, \vec \gamma \in \R^n$.

{% endtabbox %}



## Surface Integrals
Given a surface $\vec \phi: B \subseteq \R^2 \rightarrow \R^3, (u,w) \mapsto \vec \phi(u,w)$.

{% tabbox %}
### Scalar field
$$\iint_{\vec \phi} f \diff O := \iint_B f\bigl(\vec \phi(u,w)\bigr) \cdot \norm{ \vec \phi_u \times \vec \phi_w } \diff u \diff w $$
with the scalar field $f:D\subseteq \R^3 \rightarrow \R, \vec x \mapsto f(\vec x)$, the surface $\vec \phi$.

### Vector field
$$\iint_{\vec \phi} \vec v \bdot \diff \vec O := \iint_B \vec v\Bigl(\vec \phi(u,w)\Bigr)^\top \bdot \Bigl( \vec \phi_u \times \vec \phi_w \Bigr) \diff u \diff w$$
with the vector field $\vec v:D\subseteq \R^3 \rightarrow \R^3, \vec x \mapsto \vec v(\vec x)$, the curve $\vec \gamma$, and $\vec x, \vec v, \vec \gamma \in \R^n$.

{% endtabbox %}








## Integral Rules
###  Integral Gauß 
$$\iiint\limits_V \div\; \vec v \diff V = \iint\limits_{\partial V}\!\!\!\!\!\!\!\!\!\bigcirc \ \vec v \bdot \diff A$$

### Integral Stokes 
$$\iint\limits_{A} \rot\; \vec v \diff A = \oint\limits_{\partial A} \vec v \diff \vec s$$





