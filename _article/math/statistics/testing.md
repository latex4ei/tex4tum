---
title: Hypothesis Testing
---

A statistical hypothesis test is a method of statistical inference. Commonly, two statistical data sets are compared, or a data set obtained by sampling is compared against a synthetic data set from an idealized model. A hypothesis is proposed for the statistical relationship between the two data sets, and this is compared as an alternative to an idealized null hypothesis that proposes no relationship between two data sets.


## Parameters and Terms
* Null hypothesis $H_0$: will be assumed to be true
* Alternative hypothesis $H_1$
* The significance level $\alpha$: the probability threshold below which the null hypothesis will be rejected. Common values are 5% and 1%.


| Decision ╲ Reality | $H_1$ false ($H_0$ true) | $H_1$ true ($H_0$ false) |
|----|----|----|
|$H_1$ rejected   | **T**rue **N**egative | **F**alse **N**egative (Type 2)|
|($H_0$ accepted) | $\P = 1-\alpha$  | $\P = \beta$|
|$H_1$ accepted   | **F**alse **P**ositive (Type 1) | **T**rue **P**ositive|
|($H_0$ rejected) | $\P = \alpha$ | $\P = 1-\beta$ |

$p$ is the probability that a given result would occur if the null hypothesis is true.


TODO explain alpha, beta, and P

## Power of a test (1 − β)

TODO precision, recall, sensitivity








## Mean Tests
Tests whether the means of independent sample sets are significantly different.


* **Student’s t-test:** Useful for two sample sets.
* **Analysis of Variance Test (ANOVA):** Useful for two *or more* sample sets.



