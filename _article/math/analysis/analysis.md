---
title: Analysis
---


## Functions

$$\vec f:\mathbb D^n \rightarrow \mathbb W^m,\ \vec x \mapsto \vec f(\vec x)$$
with function $f$


| Name         | Definition                                  |
|--------------|---------------------------------------------|
| Function     | $f:\mathbb D \rightarrow \mathbb W$         | 
| Scalarfield  | $\phi:\mathbb D^n \rightarrow \mathbb W$     |
| Curve        | $\vec r: \mathbb D \rightarrow \mathbb W^m$ | 
| Vectorfield  | $\vec F:\mathbb D^n \rightarrow \mathbb W^n$ |



| Property       |                                                      |
|----------------|------------------------------------------------------|
| **Bild**       |  $f(D) := \{ f(x) \;\vert\; x\in D \}$                       |
| **Kern**       | $\ker f := \{ \vec x \;\vert\; \vec f(\vec x) = \vec 0 \}$   |
|**Komposition** | $f \circ g := f\bigl( g() \bigr)$                   | 
| **Fixpunkt**   | $a := f(a)$                                          |


| Class         |        |
|---------------|--------|
| **Injektiv**  | $f(x_1)=f(x_2) \Rightarrow x_1=x_2$ | 
| **Surjektiv** | $\forall y\in \mathbb W \exists x\in \mathbb D:f(x)=y$  |
| **Bijektiv**  | if injective and surjective |




## Funktionen $f:\mathbb D \rightarrow \mathbb W,\ x \mapsto f(x)$
Eine Funktion $f$ ist eine Abbildung, die jedem Element $x$ einer Definitionsmenge $D$ genau ein Element $y$ einer Wertemenge $W$ zuordnet.


### Symmetry
**Achsensym.**($g$): $f(-x)=f(x)$  
**Punktsym.**($u$): $f(-x)=-f(x)$

| $g_1 \pm g_2 = g_3$ |  $u_1 \pm u_2 = u_3$ |  gerade/ungerade Fkt. $g/u$|
|--------|--------|
|$g_1 \cdot g_2=g_3$ |  $u_1 \cdot u_2 = g_3$ |  $u_1 \cdot g_1=u_3$


### Extrema, Monotonie und Krümmung von $f$

$$f'(x_0)\overset{!}{=}0  \begin{cases}f''(x_0)<0 \ \rightarrow \ \text{Maximum (lokal)} \\ f''(x_0)>0 \ \rightarrow \ \text{Minimum (lokal)}\end{cases}$$


$f''(x_0)=0 \text{ und } f'''(x_0) \ne 0 \rightarrow x_0$ Wendepunkt 

$f'(x) \stackrel{_\ge}{_{(>)}}\!\! / \!\! \stackrel{_\le}{_{(<)}} 0 \ \rightarrow$ \ $f$ (streng) Monoton steigend/fallend. $x\in[a,b]$

$f''(x) \stackrel{_\ge}{_{(>)}}\!\! / \!\! \stackrel{_\le}{_{(<)}} 0 \ \rightarrow$ \ $f$ (strikt) konvex/konkav. $x\in[a,b]$




## Asymptoten und Grenzwerte von $f$
Horizontal: $c_\pm =\lim\limits_{x\ra \pm \infty} f(x)$  Vertikal: $\exists\,\text{Nullst. } a \text{ des Nenners }$\\ 	Polynomasymptote $P(x)$: $f(x):=\frac{A(x)}{Q(x)}=P(x)+ \Big(\frac{B(x)}{Q(x)}\ra 0\Big)$

**Regel von L'Hospital**: $\lim\limits_{x \rightarrow a} \frac{f(x)}{g(x)} \rightarrow \left[ \frac{0}{0} \right]\!/\!\left[ \frac{\infty}{\infty} \right] = \lim\limits_{x \rightarrow a} \frac{f'(x)}{g'(x)}$

| Wichtige Grenzwerte |                |
|---------------------|----------------|
| $\lim\limits_{x \ra \infty} \frac{1}{x^n} = 0$ | $\lim\limits_{n \ra \infty} \sqrt[n]{n} = 1$ | $\lim\limits_{n \ra \infty} \frac{n^n}{n!} = \infty$|
|$\lim\limits_{x \ra \infty} x \cdot e^{-x} = 0$ | $\lim\limits_{x \ra 0} \frac{\sin(x)}{x} = 1$ | $\lim\limits_{x \ra 0} \frac{x}{\sin(x)} = 1$ |


### Wichtige Sätze für *stetige* Fkt. $f: [a,b] \rightarrow \mathbb R, f \mapsto f(x)$ 
**Zwischenwertsatz:** $\forall y \in [f(a),f(b)]\ \exists x\in [a,b]:f(x)=y$

**Mittelwertsatz:** Falls $f$ diffbar, dann $\exists x_0:f'(x_0)=\frac{f(b)-f(a)}{b-a}$

**Satz von Rolle:** Falls $f(a)=f(b)$, dann $\exists x_0: f' (x_0) = 0$










{{ FOLDER_TOC }}
