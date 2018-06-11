---
title: Mechanical Motion
tags: [Rotation, Translation]
---

Motion is a change in position of an object over time.


## Newton's Laws of Motion

1. If the vector sum of all forces acting on an object is zero, then the velocity of the object is constant.
   $$\sum \vec F = 0 \; \Leftrightarrow \; \frac{\diff \vec{v} }{ \diff t } = 0$$
1. If an object is accelerating, then there is a force on it.
   $$\vec F = m \cdot \vec a$$
1. If one object $A$ exerts a force $F_A$ on a second object $B$, then $B$ simultaneously exerts a force $F_B = - F_A$ on $A$, and the two forces are equal in magnitude and opposite in direction.


## Classical Mechanics

| **Motion** |  Translation | { Rotation} (Radius $r$) |
|---|---|---|
|Strecke/Winkel |  $\vec x$ |  $\vec \varphi =  \frac{\vec x}{r}$|
|Geschwindigkeit |  $\vec v = \dot{\vec x}$ |  $\vec \omega = \dot{\vec \varphi} = \frac{\vec v}{r}$ |
|Beschleunigung |  $\vec a = \dot{\vec v} = \ddot{\vec x}$ |  $\vec \alpha = \dot{\vec \omega} = \ddot{\vec \varphi} = \frac{\vec a}{r}$ |
|Masse/Trägh. |  $m$ |  $\Theta = \int_V \vec r^2_\perp \diff m$ |
|Impuls/Drall |  $\vec p =m \vec v$ |  $\vec L = \ma \Theta \vec \omega = \vec r \times \vec p$ |
|Kraft/Moment |  $\vec F = \dot{\vec p} = m \vec a$ |   $\vec M = \dot{\vec L} = \ma \Theta \vec \alpha = \vec r \times \vec F$ |
|Energie |  $E_{\ir kin}=\frac12mv^2$ |  $E_{\ir rot}=\frac12 \Theta \omega ^2$|
|Leistung |  $P = \vec F \bdot \vec v$ |  $P = \vec M \bdot \vec \omega$|

