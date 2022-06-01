---
title: Probability Distributions
---


{{ FOLDER_TOC }}



<!-- ## Classification
* Domain: Discrete vs Continuous
* Support: finite vs infinite
* Sampled
* **Support:** Subset of the domain of a function that is *not* mapped to zero. Can be finite or infinite.
 -->




## Urn Model
The urn model can be used to explain most probability distributions. Imagine an urn (box with an opening but you cannot see inside) that is filled with balls of different colors. You put your hand inside the box and blindly grab one ball and draw it outside. This is considered one trial. The different distributions can be modeled by using the following paramters:

* The number of balls $N$
* The number of different colors $K$
* The number of drawn balls $n$
* The number of drawn balls in a particular color $k$.
* Wheter balls are put back into the urn after each trial.






## Distributions

### Uniform
Discrete or Continous.



### Bernoulli
One trial with two possible outcomes $k \in \{0, 1\}$, such as a coin toss.


**Urn Model:** 1 urn with $N$ balls ($p$ red and $N-p$ black). Probability to draw the red ball ($k=1$) with one trial.

| Parameters  |                         |
|-------------|-------------------------|
| Notation    | $\text{B}(1, p)$        |
| Support     | $k \in \{0, 1\}$        |
| Mean        | $p$                     |
| Variance    | $p(1-p)=pq$             |
| PDF         | $f(k, p)=\begin{cases} p & \text{if } k=1,\\ q=1-p & \text{if } k=0. \end{cases}$ |



### Binomial
Repeated Bernoulli trials, such as repeated coin tosses.

**Urn Model:** 1 urn with $N$ balls ($p$ red and $N-p$ black). Probability to draw $k$ red balls with $n$ trials while putting the ball back after each trial.


| Parameters  |                           |
|-------------|---------------------------|
| Notation    | $\text{B}(n, p)$          |
| Support     | $k \in \{0, 1, ..., n \}$ |
| Mean        | $n \cdot p$               |
| Variance    | $np(1-p)$                 |
| PDF         | $f(k, n, p) = \binom{n}{k} p^k (1-p)^{n-k}$ |



### Hypergeometric
Models repeated Bernoulli trials with changing success probabilities.

Models 1 urn with $N$ balls where balls are *not* put back after each trial.


### Poisson Distribution
Number of events in a time period given an event rate $\lambda$.

Corresponds to a Binomial distribution for infinite trials in infinitesimal small time slices, such as number of emails per hour.


### Geometric Distribution
Amount of failures $k$ before first success in a Binomial Distribution.

**Urn Model:** 1 urn with $N$ balls ($p$ red and $N-p$ black). Probability to draw $k$ black balls, before the first red ball is drawn.


### Negative Binomial
Amount of failures $k$ before $r$ successes in a Binomial Distribution.


### Exponential
Time until an event that occurs at rate $\lambda$.

Corresponds to a Geometric for infinite trials of infinitesimal small time slices, such as seconds till the next email arrives.




### Beta Distribution

| Parameters  |                                  |
|-------------|----------------------------------|
| Notation    | $\text{Beta}(\alpha, \beta)$     |
| Support     | $x \in [0, 1]$                   |
| Mean        | $\frac{\alpha}{\alpha + \beta}$  |




## References
* [Common Probability Distributions: The Data Scientist’s Crib Sheet](https://blog.cloudera.com/blog/2015/12/common-probability-distributions-the-data-scientists-crib-sheet/)
