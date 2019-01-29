---
title: Probability Theory
---


## Terms

| Name | Definition |
|------|------------|
| Sample Space $Ω$ | nonempty set of outputs of experiment |
| Sigma Algebra $\mathbb F \subseteq 2^Ω$ | set of subsets of outputs (events) |
|Probability $\P: \mathbb F \mapsto [0,1]$ | |
|Random Variable $\X: Ω \mapsto \mathbb X$ | mapped subsets of $Ω$ |
|Observations: $x_1, \ldots, x_N$ | single values of $\X$ |
|Observation Space $\mathbb X$ | possible observations of $\X$ |
|Unknown parameter $θ ∈ Θ$ | parameter of propability function |
|Estimator $\T: \mathbb X \mapsto Θ$ | $\T(\X) = \hat{θ}$, finds $\hat{θ}$ from $\X$ |


## Conditional Probabilty
The probability for an event $A$ given that the event $B$ already occured is
$$\P_B(A) = \P(A|B) = \frac{\P(A \cap B)}{\P(B)}$$
with events $A,B$.

Multiplication: $\P(A \cap B) = \P(A|B)\P(B) = \P(B|A)\P(A)$

Bayes' law: 
$$\P(B_k | A) = \frac{\P(A | B_k)\P(B_k)}{\sum\limits_{i \in I} \P(A|B_i) \P(B_i)}$$

Total probabilty: $\P(A) = \sum\limits_{i \in I} \P(A|B_i)\P(B_i)$



## Random Variables
$\X : \Omega \mapsto \Omega'$ is a random variable if for all events $A' \in \F'$ there exists an event  $A \in \F$ such that $\left\{\omega \in \Omega|\X(\omega) \in A'\right\} \in \F$.



## Distribution
**PDF:** $f_{\X}(x) = \frac{\diff F_{\X}(x)}{\diff x}$

**CDF:** $F_{\X}(x) = \int\limits_{-\infty}^{x}{f_{\X}(\xi)\diff\xi}$
