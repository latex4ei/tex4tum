---
title: Digital Filter
tags: [FIR, IIR]
---

The order of a filter is the amount of previous values taken into account to calculate the current value.


## FIR Filter
A FIR filter has a finite impulse response and its output only depends previous inputs.

$y[n] = \sum\limits_{i = 0}^P \alpha_i y[n - i]$


## IIR Filter
The output of an IIR filter depends on previous input values **and** previous output values

For example, an analog RC low pass filter is an IIR filter because its impulse response is of the form $e^{-t}$ and therfore not zero for and infinite time.


$\sum\limits_{j = 0}^Q \beta_j y[n - j] = \sum\limits_{i = 0}^P \alpha_i y[n - i]$


$\sum\limits_{j = 0}^Q \beta_j y[n - j] = \sum\limits_{i = 0}^P \alpha_i y[n - i]$
