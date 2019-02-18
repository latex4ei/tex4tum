---
title: Curve
tag: line, kurve
---

A curve is a generalization of a line, in that its curvature need not be zero.


$$\vec \gamma:[a,b] \rightarrow \R^n, t \mapsto \vect{ \gamma_1(t) \\ \vdots \\ \gamma_n(t)}$$


{% include figure.html width="15em" src="curve.svg" %}



## Properties

* $\mathcal C^0$-Kurve: Positionsstetigkeit (geschlossene Kurve)
* $\mathcal C^1$-Kurve: Tangentialstetigkeit (stetig diffbar)
* $\mathcal C^2$-Kurve: Krümmungsstetigkeit (2 mal stetig diffbar)
* regulär, falls $\forall t \in [a,b]:\dot \gamma(t) \ne \vec 0$ (Keine Knicke)
* Singulär, falls $\dot \gamma(t)=\vec 0$ (Knick)


## Special points
* Doppel-punk, falls $\exists t_1,t_2:t_1 \ne t_2 \ \land \ \gamma(t_1)=\gamma(t_2)$
* Horizontaler Tangentenpunkt, falls $\dot \gamma_1(t) \ne 0 \ \land \ \dot \gamma_2(t)=0$
* Vertikaler Tangentenpunkt, falls $\dot \gamma_1(t) = 0 \ \land \ \dot \gamma_2(t) \ne 0$


## Bogenlänge
Die Bogenlänge einer Kurve $L(\gamma)$ ist 
$$L(\gamma) = \int_{a}^{b} \norm{\dot \gamma(t)} \diff t$$ 


If $n = 2$ (2D): $L(\gamma) = \int_a^b \sqrt{\dot x^2 + \dot y^2}\diff t$


