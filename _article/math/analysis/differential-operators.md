---
title: Differential Operators
tags: [gradient, rotation, divergence, laplace]
---

A differential operator is an operator.

---------------------------     ----------------------------------------------
**Gradient** $\grad f$          **Rotation** $\rot \vec f$
**Divergenz** $\div \vec f$     **Laplace** $\Delta\, f = \Sp \ma H_f(\vec x)$
---------------------------     ----------------------------------------------




## Gradient
$\mathrm{grad}\; f: \R \rightarrow \R^3$

$$\grad f = \vec\nabla f = \vect{\frac{\partial f}{\partial x_1} \\ \vdots \\ \frac{\partial f}{\partial x_n} }$$

Explanation: Der Gradient zeigt an, wie groß und in welcher Richtung die größte Steigung in einem Punkt ist.


## Rotation

$$\rot \vec{f} = \vec\nabla \times \vec f = \vect{\frac{\partial}{\partial x_1} \\ \dot : \\ \frac{\partial}{\partial x_n} } \times \vect{ f_1 \\ \dot : \\ f_n }$$

Explanation: Die Rotation zeigt an, wie stark und um welche Achse sich ein Schaufelrad in einem Punkt drehen würde.


## Divergenz

$$\div f = \vec\nabla \cdot \vec f = \vect{\frac{\partial}{\partial x_1} \\ \vdots \\ \frac{\partial}{\partial x_n} } \cdot \vect{ f_1 \\ \vdots \\ f_n}$$

Explanation: Die Divergenz gibt an, wie stark (Strömungs-) Vektoren in einem Punkt auseinander gehen.
Example: Consider air as it is heated or cooled. The velocity of the air at each point defines a vector field. While air is heated in a region, it expands in all directions, and thus the velocity field points outward from that region. The divergence of the velocity field in that region would thus have a positive value. While the air is cooled and thus contracting, the divergence of the velocity has a negative value.



## Laplace

$$\underset{\nabla \cdot (\nabla f)}{\nabla^2} f = \vect{\frac{\partial}{\partial x_1} \\ \vdots \\ \frac{\partial}{\partial x_n} } \cdot \vect{\frac{\partial f}{\partial x_1} \\ \vdots \\ \frac{\partial f}{\partial x_n} }$$

Explanation: Der Laplace-Operator zeigt an, wie stark die Krümmung des Skalarfeldes in einem Punkt ist.



## References
* [Khan Academy: Divergence](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/divergence-and-curl-articles/a/divergence)
