# Frequency Analysis

| | Continious | Discrete |
|---|---|---|
| **Real** | Fourier | Fourier |
| **Complex** | Laplace | Z-Transform |


| Properties |  | |
|---|---:|---|
| Linearity | $\alpha f(t) + \beta g(t)$ | $\ftsymbol\ \alpha F(s) + \beta G(s)$ |
| Shift Time | $x(t - \tau)$ | $\ftsymbol\ e^{-s \tau} X(x)$|
| Shift Frequency | $e^{\tau t}$ | $\ftsymbol\ X(s - \tau)$|
|Stauchung | $f(ct)$ | $\ftsymbol\ \frac{1}{\abs{c}} F\bigl(\frac{s}{c}\bigr)$|
|Ableitung | $f^{(n)}(t)$ | $\ftsymbol\ s^n F(s)$|
|Integral | $\int_{-\infty}^t \tau \diff \tau$ | $\ftsymbol\ \frac{1}{s} X(s)$|
|Faltung | $(f * g)(t)$ | $\ftsymbol\ F(s) \cdot G(s)$|

<div class="legend">
timefunctions $f,g$, frequency functions $X,F,G$, complex number $\cx s$, time $t$, time shift $\tau$, constant $c$
</div>



## Fourierreihe
Approximation einer *periodischen* Funktion $f(t)$ durch Überlagerung gewichteter Sinus und Cosinus einer Grundfrequenz $\omega_0 = \frac{1}{T}$ und deren Oberschwingungen $2\omega_0, 3\omega_0, ...$

<div class="emphbox">
$F(x) = \sum\limits_{k=-\infty}^\infty c_k e^{\i k \omega_0 x} \qquad c_k = \frac{1}{T} \int\limits_{-\frac{T}{2}}^{\frac{T}{2}} f(x) e^{\i k \omega_0 x} \diff x$
</div>


## Fouriertransformation (FT)
<div class="emphbox">
$\displaystyle \underset{\text{Zeitbereich}}{ f(t)} \FT \underset{\text{Frequenzspektrum}}{ F(\omega)} := \int\limits_{-\infty}^\infty f(t) \exp(-\i \omega t) \diff t$
</div>
Anmerkung: Es gibt unterschiedliche Normungen ($1, \frac{1}{\sqrt{2\pi}}$)


## Laplaceransformation (LT) $\cx s = α + ω\i$
LT ist Verallgemeinerung der FT mit Dämpfungsfaktor $α$
<div class="emphbox">
$\displaystyle \underset{\text{Zeitbereich}}{ f(t)} \LT \underset{\text{Frequenzspektrum}}{ F(\cx s) = \mathcal L\left(f(t)\right)} := \int\limits_{0}^\infty f(t) \exp(- \cx s t) \diff t$
</div>


## Z-Transform (ZT)




