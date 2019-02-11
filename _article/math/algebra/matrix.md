---
title: Matrix
---

A Matrix is a table of math objects.


$\ma A=(a_{ij}) \in \mathbb K^{m\times n}$ has $m$ rows (index $i$) and $n$ columns (index $j$)

Example:
A matrix $\ma A \in \mathbb K^{2\times 3}$ could be $\ma A = \mat{ a & b & c \\ d & e & f}$.


| Dimension |
|-----------|
| $\dim \mathbb K = n = \rang\ma A + \dim\ker\ma A$ |
| $\rang\ma A = \rang\ma A^{\top}$ |


## Calculations
For two general matrices $\ma A$ and $\ma B$:

* $(\ma A + \ma B)^\top = \ma A^\top + \ma B^\top$
* $(\ma A \cdot \ma B)^\top = \ma B^\top \cdot \ma A^\top$
* ${(\ma A^\top)}^{-1} = {(\ma A^{-1})}^\top$ 
* $(\ma A \cdot \ma B)^{-1} = \ma B^{-1}\ma A^{-1}$







### Norms 

$\ma A \in \K^{m \times n}, i\in[1,m], j\in[1,n]$

| Norm   |     |      |
|--------|-----|------|
| Gesamtnorm  | $\norm{\ma{A}}_G$ | $\sqrt{mn}\cdot\underset{i,j}{\max}\abs{a_{ij}}$ |
| Zeilennorm (max Zeilensumme) | $\norm{\ma{A}}_\infty$ | $= \underset{i}{\max}\sum\limits_{j=1}^n\abs{a_{ij}}$ |
| Spaltennorm (max Spaltensumme) | $\norm{\ma{A}}_1$ | $= \underset{j}{\max}\sum\limits_{i=1}^m\abs{a_{ij}}$ |
| $\underset{\text{euklidische Norm}}{\text{Frobeniusnorm}}$ | $\norm{\ma{A}}_E$ | $= \sqrt{\sum\limits_{i=1}\sum\limits_{j=1}\abs{a_{ij}}^2}$ |
| Spektralnorm, Hilbertnorm | $\norm{\ma{A}}_\lambda$ | $= \sqrt{\lambda_\text{max}(\ma{A}^\top\cdot\ma{A})}$ |


$\left(\norm{\ma{A}}_M = \frac{\norm{\ma{A}}_G}{\sqrt{mn}}\right)$






### Eigenvalues and Eigenvectors
Eigenvalues: $\det(\ma A - \lambda \ma 1) = 0$ <br>
Eigenvectors: $\ker(\ma A - \lambda_i \ma 1) = \vec v_i$

TODO explanation

$$\ma A \vec v = \lambda \vec v$ \qquad $\det \ma A = \prod \lambda_i$ \qquad\ $\Sp \ma A = \sum a_{ii} = \sum \lambda_i$$
with the Eigenvalue $\lambda$ and the Eigenvector $\vec v$.



## Quadratic Matrices

| Properties | |
|------------|----|
| regular  | $\Leftrightarrow \det (\ma A) \ne 0 \Leftrightarrow \rang\ma A = n$ |
| singular | $\Leftrightarrow \det (\ma A) = 0 \Leftrightarrow \rang\ma A \ne n$ |
| orthogonal | $\Leftrightarrow \ma A^\top=\ma A^{-1} \Ra \det(\ma A) = \pm 1$ |
| symmetric | $\ma A=\ma A^\top$ \qquad schiefsymmetrisch: $\ma A=-\ma A^\top$ |


### Determinant
The determinant of a square matrix $\ma A$ is denoted $\det(\ma A)$, $\det \ma A$, or $|A|$. Geometrically, it can be viewed as the volume scaling factor of the linear transformation described by the matrix. 

If $\ma A$ has $\ge 2$ lin. dependent rows/columns $\Rightarrow |A|=0$. 

$$\det\begin{pmatrix}A&0\\C&D\end{pmatrix}=\det\begin{pmatrix}A&B\\0&D\end{pmatrix}=\det(A)\cdot\det(D)$$

$|A|=\sum\limits_{i=1}^n (-1)^{i+j} \cdot a_{ij} \cdot |A_{ij}|$ 



### Inverse Matrix
An $n \times n$ square matrix $\ma A$ is called invertible (nonsingular) if there exists an $n \times n$ square matrix $\ma B$ such that

$$\ma A \cdot \ma B = \ma B \cdot \ma A = \ma 1_n$$ 

Explanation: Eine Matrix heißt singulär, wenn ihre Spaltenvektoren linear abhängig voneinander sind. Daraus folgt, dass der Bildraum mindestens eine Dimension weniger hat als der Abbildungsraum, da die Spaltenvektoren den $\R^n$ nicht mehr erzeugen können und keine Basis mehr zum $\R^n$ darstellen.
Hat man nun einen Bildpunkt im $\R^{n-1}$ gegeben, so lässt sich nicht mehr sagen, von wo aus dem $\R^n$ dieser Punkt auf den Bildraum $\R^{n-1}$ abgebildet worden ist, da er ja durch unendlich verschiedene Linearkombination der Spaltenvektoren erreicht werden kann.
Die Abbildung lässt sich deshalb nicht mehr umkehren, die Matrix ist nicht invertierbar, die Determinante ist null.








### Rotation Matrix of $\R^3$
for rotations in a right-handed coordinate system $XYZ$.

$$\begin{matrix} 
\begin{bmatrix}
1 &   0         & 0           \\
0 & \cos \alpha & -\sin \alpha \\
0 & \sin \alpha &  \cos \alpha
\end{bmatrix} &
\begin{bmatrix}
\cos \alpha  & 0 & \sin \alpha \\
   0         & 1 &  0          \\
-\sin \alpha & 0 & \cos \alpha
\end{bmatrix} &
\begin{bmatrix}
\cos \alpha &-\sin \alpha & 0\\
\sin \alpha & \cos \alpha & 0\\
    0       &     0       & 1
\end{bmatrix} \\
\ma R_x(\alpha) &
\ma R_y(\alpha) &
\ma R_{z}(\alpha)
\end{matrix}
$$

Explanation: Bei einer Rotationsmatrix stehen die Spaltenvektoren senkrecht aufeinander (orthogonal). Deshalb ist der Bildraum nicht verzerrt da nur die Richtung der Einheitsvektoren verändert wird, allerdings nicht ihre Stellung zueinander. Somit entspricht eine orthogonale Abbildungsmatrix einer Drehung des Koordinatensystems in eine andere Richtung (bezüglich $n$
Freiheitsgraden).





## Special 2×2 Matrices
For a $2 \times 2$ matrix $\ma A = \mat{a & b \\ c & d}$ the following rules hold:

Determinant: $\det(\ma A) = ad - bc$

Trace (ger. „Spur“): $\Sp(\ma A) = a+d$

Inverse: $\displaystyle\mat{a & b \\ c & d}^{-1} = \frac{1}{\det \ma A} \mat{d & -b \\ -c & a}$


**Eigenvalues:**

$$\lambda_{1/2} = \frac{\Sp \ma A}{2} \pm \sqrt{ \left( \frac{\Sp \ma A}{2} \right)^2 - \det \ma A }$$
with $\ma A = \mat{a & b \\ c & d}$, and $\Sp(\ma A) = a+d$.

