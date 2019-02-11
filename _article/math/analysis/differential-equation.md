---
title: Differential Equation
---

A differential equation is a mathematical equation that relates some function with its derivatives. In applications, the functions usually represent physical quantities, the derivatives represent their rates of change, and the equation defines a relationship between the two.


## Differential Equation of n-th Order 

$$a_n y^{(n)} + ... + a_1 y' + a_0 y = b_m x^{(m)} + ... + b_1 x' + b_0 x$$
with the unknown function $y$ and its $n$ derivates $y',y'',...$, the known function $x$ and the coefficients $a_i, b_j$



### DGL-Systeme
Jede DGL lässt sich reduzieren auf ein DGL-System 1. Ordnung:

1. Substituiere $x_i := y^{(i-1)}$ und drücke $\dot x_i$ durch $x_1,...,x_n$ aus.</br>
	$\Ra$ \boxed{ \dot{\vec x}(t) = \ma A \vec x(t) + \vec s(t) }  mit $\vec x_{\ir ges} = \vec x_{\ir hom} + \vec x_{\ir part}$</br>
	Hom. Lösung: 1. Bestimme EW $\lambda_i$ und Basis aus EV $\vec b_i$ von $\ma A$

2. $\vec x_{\ir hom} = \vec c \cdot e^{(x-x_0)\ma A} = \sum\limits_{i = 0}^n c_i \cdot e^{\lambda_i x} \cdot \vec b_i$

3. Bestimmung der Konstanten durch einsetzen der Anfangsbedingungen!	




## Lösen von homogenen DGLs 2. Ordnung
Gegeben: Homogene Differnetialgleichungen der Form $\vec{\dot x} =  \ma A \vec x$  mit Anfangswerten $x_{0,1}$ und $x_{0,2}$

Depending on the Eigenvalues $\lambda_1, \lambda_2 \in \R$

### 1. If Eigenvalues are real and inequal: $\Large \lambda_1 \ne \lambda_2$


$$\bigl| \lambda_1 \bigr| < \bigl|\lambda_2 \bigr|   \Ra \vec q_2 \text{,,schneller''} $$

$$\vec x(t) = x_{0,1} \cdot \exp(\lambda_1 t) \cdot \vec q_1 + x_{0,2} \cdot \exp(\lambda_2 t) \cdot \vec q_2$$


<style>.img-fluid{height: 4.5em;}</style>

| Matrix $\Lambda$ | Eigenwerte | $\vec x = 0$ | Name | Portrait |
|------------|--------|--------|--------|-----------------|
|$\mat{\lambda_1 & 0 \\ 0 & \lambda_2}$ | $\lambda_1 < 0 < \lambda_2$     | instable | Sattelpunkt | {% inlineimage PP_Sadle.svg %}        |
|                                       | $\lambda_2 < 0, \lambda_1 < 0$  | stable   | Knoten 2    | {% inlineimage PP_stableNode.svg %}   |
|                                       | $0 < \lambda_1, 0 < \lambda_2$  | instable | Knoten 2    | {% inlineimage PP_unstableNode.svg %} |
| $\mat{0  & 0 \\ 0 & \lambda_2}$       | $\lambda_1 = 0,\ \lambda_2 < 0$ | stabil   | Kamm        | {% inlineimage PP_stableLine.svg %}   |
|                                       | $\lambda_1 = 0,\ \lambda_2 > 0$ | instable | Kamm        | {% inlineimage PP_unstableLine.svg %} |



### 2. If Eigenvalues are real and equal: $\Large \lambda_1 = \lambda_2$


$$\ma Q' = \mat{ \vec q'_1 & \vec q'_2} = \mat{ -a_{12} & -a_{12} \\ \frac{a_{11} - a_{22}}{2} & \frac{a_{11} - a_{22}}{2} -1 } = \mat{ \vect{\text{Eigen-} \\ \text{vektor}} & \vect{\text{Haupt-} \\ \text{vektor}}}$$


$$\vec x(t) = \left[ \ma 1 + (\ma A - \lambda \ma 1) \cdot t \right] \cdot \exp(\lambda t) \cdot \vect{x_{0,1} \\ x_{0,2}}$$


| Matrix $\Lambda$ | Eigenwerte | $\vec x = 0$ | Name | Portrait|
|------------|--------|--------|--------|-----------------|
| $\mat{\lambda  & 0  \\  0  & \lambda}$ | $\lambda < 0$ | stabil   | Knoten 1   |  {% inlineimage PP_stableStarNode.svg %}    |
|                                        | $\lambda > 0$ | instable | Knoten 1   |  {% inlineimage PP_unstableStarNode.svg %}  |
| $\mat{\lambda  & 1  \\  0  & \lambda}$ | $\lambda < 0$ | stabil   | Knoten 3   |  {% inlineimage PP_stableWhirlNode.svg %}   |
|                                        | $\lambda > 0$ | instable | Knoten 3   |  {% inlineimage PP_unstableWhirlNode.svg %} |
| $\mat{0  & 0  \\  0  & 0 }$            | $\lambda = 0$ | stabil   | Ruheebene  |  {% inlineimage PP_stableZero.svg %}        |
| $\mat{0  & 1  \\  0  & 0 }$            | $\lambda = 0$ | instable | Ruhegerade |  {% inlineimage PP_unstableZero.svg %} }    |



### 3. If Eigenvalues are complex and equal: $\Large \cx \lambda_1 = \cx \lambda^*_2$
$$\cx \lambda_1 = \cx \lambda^*_2 = \alpha + \beta j \in \C$$ 

$$\ma Q' = \mat{\Re{\vec q_1} & \Im{\vec q_1}} = \mat{ \vec q_r & \vec q_j}$$

$$\begin{array}{rl} \vec x(t) & = x_{0,1} \cdot e^{\alpha t} \cdot \left[ \cos (\beta t) \vec q_r - \sin(\beta t) \cdot \vec q_j \right] + \\ & +\, x_{0,2} \cdot e^{\alpha t} \cdot \left[ \sin (\beta t) \vec q_r + \cos(\beta t) \cdot \vec q_j \right] \end{array}$$


| Matrix $\Lambda$ | Eigenwerte | $\vec x = 0$ | Name | Portrait|
|------------|--------|--------|--------|-----------------|
|$\mat{\alpha  & -\beta  \\  \beta  & \alpha}$ | $\alpha < 0,\ \beta \ne 0$ | stabil   | Strudel |  {% inlineimage PP_stableFocus.svg %} |
|                                              | $\alpha > 0,\ \beta \ne 0$ | instable | Strudel |  {% inlineimage PP_unstableFocus.svg %} |
|$\mat{0  & -\beta  \\  \beta  & 0}$           | $\alpha = 0,\ \beta \ne 0$ | stabil   | Wirbel  |  {% inlineimage PP_Whirl.svg %}  |

 

Zeitverlauf immer von $\vec q_j$ nach $\vec q_r$ bzw. von $\vec q_r$ nach $-\vec q_j$

## Lösung für inhomogene DGL 
Inhomogene DGL ($\vec v \ne 0$) mit singulärer Matrix $\ma A$ (nicht entkoppelbar):

| Matrix $\Lambda$ | Eigenwerte | $\vec x = 0$ | Name | Portrait|
|------------------|--------|--------|--------|--------|
| $\mat{0  & 0  \\  0  & \lambda_2}$ | $\lambda_1 = 0, \lambda_2 < 0$ | instable | Kamm   |  {% inlineimage PP_unstableLine2.svg %}  |
| $\mat{0  & 1  \\  0  & 0 }$        | $\lambda = 0$                  | instable | Knoten |  {% inlineimage PP_unstableZero2.svg %}  |



