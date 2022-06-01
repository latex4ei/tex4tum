---
title: Maxwell Equations
---

The Maxwell Equations are 4 fundamental equations that describe the relation between the quantities of electromagnetism.


| Name | Integral Version | Differential Version |
|---|---|---|
| Gauss's law: | $$\oiint_{\partial \Omega} \vec E \cdot \diff A = \frac{1}{\epsilon_0} \iiint_{\Omega} \rho \diff V$$  | $$\div \vec D = \varrho$$ |
| Faraday's law of induction | $$\oint_{\partial A} \vec E \cdot \diff \vec s = - \iint_{A} \frac{\partial \vec B}{\partial t} \cdot \diff \vec A$$ |  $$\rot \vec E + \frac{\partial \vec B}{\partial t} = 0$$ |
| Gauss's law for magnetism | $$\oiint_{\partial \Omega} \vec B \cdot \diff A = 0$$ | $$\div \vec B = 0$$ |
| Ampère's law | $$\oint_{\partial A} \vec H \cdot \diff \vec s = \iint_{A} \vec j \cdot \diff \vec A + \iint_{A} \frac{\partial \vec D}{\partial t} \cdot \diff \vec A$$ | $$\rot \vec H = \vec j + \frac{\partial \vec D}{\partial t}$$ |


## Gauss's law
Explanation:
The differential form states that if there exists electric charge somewhere, then the divergence of $D$ at that point is nonzero, otherwise it is equal to zero.
The integral form states that the amount of charge inside a volume $V$ of enclosed charge is equal to the total amount of Electric Flux $D$ exiting the surface $S$.
