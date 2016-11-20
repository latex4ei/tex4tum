# Matrix
<div class="definition">
A Matrix is a table of math objects. <span class="example">For example a matrix $\ma A \in \mathbb K^{2\times 3}$ could be $\ma A = \mat{ a & b & c \\ d & e & f}$.</span>
</div>

$\ma A=(a_{ij}) \in \mathbb K^{m\times n}$ has $m$ rows (index $i$) and $n$ columns (index $j$)

| Dimension | 
|-----------|
| $\dim \mathbb K = n = \rang\ma A + \dim\ker\ma A$ |
| $\rang\ma A = \rang\ma A^{\top}$ |


## Calculations
| $(\ma A + \ma B)^\top = \ma A^\top + \ma B^\top$ | $(\ma A \cdot \ma B)^\top = \ma B^\top \cdot \ma A^\top$ |
| ${(\ma A^\top)}^{-1} = {(\ma A^{-1})}^\top$ | $(\ma A \cdot \ma B)^{-1} = \ma B^{-1}\ma A^{-1}$ |


## Quadratic Matrices

| Properties | |
|------------|----|
| regular  | $\Leftrightarrow \det (\ma A) \ne 0 \Leftrightarrow \rang\ma A = n$ |
| singular | $\Leftrightarrow \det (\ma A) = 0 \Leftrightarrow \rang\ma A \ne n$ |
| orthogonal | $\Leftrightarrow \ma A^\top=\ma A^{-1} \Ra \det(\ma A) = \pm 1$ |
| symmetric | $\ma A=\ma A^\top$ \qquad schiefsymmetrisch: $\ma A=-\ma A^\top$ |



## Eigenvalues and Eigenvectors
Eigenvalues: $\det(\ma A - \lambda \ma 1) = 0$ <br>
Eigenvectors: $\ker(\ma A - \lambda_i \ma 1) = \vec v_i$

$\ma A \vec v = \lambda \vec v$ \quad $\det \ma A = \prod \lambda_i$ \quad\ $\Sp \ma A = \sum a_{ii} = \sum \lambda_i$


## Special 2×2 Matrices
$\det(\ma A) = ad-bc$ &emsp; $\Sp(\ma A) = a+d$ <br>
$\mat{a & b \\ c & d}^{-1} = \frac{1}{\det \ma A} \mat{d & -b\\ -c& a}$

$\lambda_{1/2} = \frac{\Sp \ma A}{2} \pm \sqrt{ \left( \frac{\Sp \ma A}{2} \right)^2 - \det \ma A }$




