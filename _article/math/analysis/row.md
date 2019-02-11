---
title: Row
tag: sum, mean
---

## Arithmetic Sum
$$\sum \limits_{k=1}^{n} k = \frac{n (n+1)}{2}$$
with $k,n ∈ ℕ$

## Geometric Sum
$$\sum \limits_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1-q}$$
with $k,n ∈ ℕ$ and $q ∈ ℤ$


## Exponential row
$$\sum\limits_{n = 0}^{\infty} \frac{\cx z^n}{n!} = e^{\cx z}$$
with $n ∈ ℕ$ and $\cx z ∈ ℂ$


## Taylorpolynom 
$T_{m,f,x_0}(x)$ is a row for $m \rightarrow \infty$.

$$_{m,f,x_0}(x)= \sum_{i=0}^{m} \underbrace{\frac{f^{(i)}(x_0)}{i!}}_{a_i} (x-x_0)^i }$$
with $x \in \R$, function $f$, and order $m \in \N$.

Konvergenzradius $R=\underset{i\rightarrow \infty}{\lim} \abs{\frac{a_i}{a_{i+1}}}$


## Tylorrow
$$f(\cx z) = \sum\limits_{k = 0}^{\infty} \frac{\cx f^{(k)}\left(\cx z_0\right)}{k!} (\cx z - \cx z_0)^k$$


| $f(\cx z)$    | Tylorrow               | Conditions |
|---------------|------------------------|------------|
|$e^\cx{z}$ | $\sum_{n=0}^\infty \frac{\cx{z}^n}{n!}$ | $\forall \cx{z} \in \C$ |
| $\ln(\cx{z})$ | $\sum_{n=1}^\infty \frac{(-1)^{n+1}}{n}(\cx{z}-1)^n$ | $0<\cx{z}\le2$ |
|$\frac{1}{1-\cx{z}}$ | $\sum^\infty_{n=0} \cx{z}^n$ | $\abs{\cx{z}} < 1$ 
| $\sin \cx{z}$ | $\sum^{\infty}_{n=0} \frac{(-1)^n}{(2n+1)!} \cx{z}^{2n+1}$ | $\forall  \cx{z} \in \C$ |
| $\cos \cx{z}$ | $\sum^{\infty}_{n=0} \frac{(-1)^n}{(2n)!} \cx{z}^{2n}$ | $\forall  \cx{z} \in \C$ |
| $\sinh \cx{z}$ | $\sum^{\infty}_{n=0} \frac{\cx{z}^{2n+1}}{(2n+1)!}$ | $\forall  \cx{z} \in \C$ |
| $\cosh \cx{z}$ | $\sum^{\infty}_{n=0} \frac{\cx{z}^{2n}}{(2n)!}$ | $\forall  \cx{z} \in \C$ |


