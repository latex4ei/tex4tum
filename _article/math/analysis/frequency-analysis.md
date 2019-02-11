---
title: Frequency Analysis
---

| | Continious | Discrete |
|---|---|---|
| **Real** | Fourier | Fourier |
| **Complex** | Laplace | Z-Transform |


| Properties |  |  |
|-------------|---------------:|-------------------|
| Linearity | $\alpha f(t) + \beta g(t)$ | $\ftsymbol\ \alpha F(s) + \beta G(s)$ |
| Shift Time | $x(t - \tau)$ | $\ftsymbol\ e^{-s \tau} X(x)$|
| Shift Frequency | $e^{\tau t}$ | $\ftsymbol\ X(s - \tau)$|
|Stauchung | $f(ct)$ | $\ftsymbol\ \frac{1}{\abs{c}} F\bigl(\frac{s}{c}\bigr)$|
|Ableitung | $f^{(n)}(t)$ | $\ftsymbol\ s^n F(s)$|
|Integral | $\int_{-\infty}^t \tau \diff \tau$ | $\ftsymbol\ \frac{1}{s} X(s)$|
|Faltung | $(f * g)(t)$ | $\ftsymbol\ F(s) \cdot G(s)$|

{% legend %}
timefunctions $f,g$, frequency functions $X,F,G$, complex number $\cx s$, time $t$, time shift $\tau$, constant $c$
{% endlegend %}



## Example Spectrums
<style>
table{table-layout: fixed;} 
td{width: 15em; padding-top: 1em!important;}
</style>

| Time $f(t)$                     | Frequency $X(f)$                |
|---------------------------------|---------------------------------|
| {% cellimg time_constant.svg %} | {% cellimg freq_constant.svg %} |
| {% cellimg time_impulse.svg %}  | {% cellimg freq_impulse.svg %}  |
| {% cellimg time_comb.svg %}     | {% cellimg freq_comb.svg %}     |
| {% cellimg time_impulse_shift.svg %} | {% cellimg freq_impulse_shift.svg %} |
| {% cellimg time_step.svg %}     | {% cellimg freq_step.svg %}     |
| {% cellimg time_sinus.svg %}    | {% cellimg freq_sinus.svg %}    |
| {% cellimg time_cosinus.svg %}  | {% cellimg freq_cosinus.svg %}  |
| {% cellimg time_rect.svg %}     | {% cellimg freq_rect.svg %}     |
| {% cellimg time_tri.svg %}      | {% cellimg freq_tri.svg %}      |




## Fourierreihe
Approximation einer *periodischen* Funktion $f(t)$ durch Überlagerung gewichteter Sinus und Cosinus einer Grundfrequenz $\omega_0 = \frac{1}{T}$ und deren Oberschwingungen $2\omega_0, 3\omega_0, ...$

{% emphbox %}
$F(x) = \sum\limits_{k=-\infty}^\infty c_k e^{\i k \omega_0 x} \qquad c_k = \frac{1}{T} \int\limits_{-\frac{T}{2}}^{\frac{T}{2}} f(x) e^{\i k \omega_0 x} \diff x$
{% endemphbox %}


## Fouriertransformation (FT)
{% emphbox %}
$\displaystyle \underset{\text{Zeitbereich}}{ f(t)} \FT \underset{\text{Frequenzspektrum}}{ F(\omega)} := \int\limits_{-\infty}^\infty f(t) \exp(-\i \omega t) \diff t$
{% endemphbox %}
Anmerkung: Es gibt unterschiedliche Normungen ($1, \frac{1}{\sqrt{2\pi}}$)


## Laplaceransformation (LT) $\cx s = α + ω\i$
LT ist Verallgemeinerung der FT mit Dämpfungsfaktor $α$
{% emphbox %}
$\displaystyle \underset{\text{Zeitbereich}}{ f(t)} \LT \underset{\text{Frequenzspektrum}}{ F(\cx s) = \mathcal L\left(f(t)\right)} := \int\limits_{0}^\infty f(t) \exp(- \cx s t) \diff t$
{% endemphbox %}


## Z-Transform (ZT)



