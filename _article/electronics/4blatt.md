---
title: 4Blatt
---

	

Vorwort: Ein Ingenieur nutzt formale Modelle um Aussagen über Vorgänge der Realität zu treffen. Damit löst er Probleme oder entwickelt neue Systeme. Die Physik erklärt mathematische Zusammenhänge zwischen Größen der Realität.




|		$\pi \approx 3,14159$ | $e \approx 2,71828$ | $\sqrt{2} \approx 1,414$ | $\sqrt{3} \approx 1,732$ |
|



\tabcolsep4pt

|	$10^\pm$ 	| $21$ | $18$ | $15$ 	|  $12$ | $9$ |  $6$ | $3$ |  $2$ | $1$ 
|----|----|
|$+$			| $\underset{\ir zetta}{\si{\zetta}}$ | $\underset{\ir exa}{\si{\exa}}$ | $\underset{\ir peta}{\si{\peta}}$	| $\underset{\ir tera}{\si{\tera}}$ | $\underset{\ir giga}{\si{\giga}}$ | $\underset{\ir mega}{\si{\mega}}$ | $\underset{\ir kilo}{\si{\kilo}}$ | $\underset{\ir hecto}{\si{\hecto}}$ | $\underset{\ir deca}{\si{\deca}}$ |
|$-$ 		| $\underset{\ir zepto}{\si{\zepto}}$ | $\underset{\ir atto}{\si{\atto}}$ | $\underset{\ir femto}{\si{\femto}}$ | $\underset{\ir pico}{\si{\pico}}$ | $\underset{\ir nano}{\si{\nano}}$ | $\underset{\ir micro}{\si{\micro}}$ | $\underset{\ir milli}{\si{\milli}}$  | $\underset{\ir centi}{\si{\centi}}$| $\underset{\ir deci}{\si{\deci}}$ |
|

**Dezibel:** $L_{\ir dB} = 10 \lg \frac{P}{P_0} = 10 \lg \frac{A^2}{A_0^2} \si{\decibel} = 20 \lg \frac{A}{A_0} \si{\decibel}$
|	\tabcolsep3mm
$\si{dB} = 10 \lg \frac{x}{x_0}$  | -20 | -10 | 0 | 1 | 3 | 6 | 10 | 20|
|Leistung $P$ | $\frac{1}{100}$ | $\frac{1}{10}$ | 1 | 1.26 | 2 | 4 | 10 | 100|
|Amplitude $A$ | $\frac{1}{10}$ | $0.316$ | 1 | 1.22 | 1.4 | 2 | 3.16 | 10|
|	




### Mengenregeln (Boolsche Regeln $\emptyset \ra 0, Ω \ra 1$)

|		|----|----|
|Kommutativ 		| $A \capdot B = B \capdot A$ | $A \cupplus B = B \cupplus A$|
|Assoziativ 		| \multicolumn{2}{l}{ $(A \capdot B) \capdot C = A \capdot (B \capdot C)$} |
|| \multicolumn{2}{l}{$(A \cupplus B) \cupplus C = A \cupplus (B \cupplus C)$} |
|Distributiv 	| \multicolumn{2}{l}{$A \capdot (B \cupplus C) = (A \capdot B) \cupplus (A \capdot C)$}|
|| \multicolumn{2}{l}{ $A \cupplus (B \capdot C) = (A \cupplus B) \capdot (A \cupplus C)$}|
|Indempotenz		| $A \capdot A = A$ | $A \cupplus A = A$|
|Absorbtion		| $A \capdot (A \cupplus B) = A$ | $A \cupplus (A \capdot B) = A$|
|Neutralität		| $A \capdot \Omega = A$ | $A \cupplus \emptyset = A$|
|Dominant		| $A \capdot \emptyset = \emptyset$ | $A \cupplus \Omega = \Omega$|
|Komplement		| $A \capdot \overline{A} = \emptyset$ | $A \cupplus \overline{A} = \Omega$|
|| $\overline{\overline{A}} = A$ | $\ol{\Omega} = \emptyset$|
|De Morgan		| $\overline{A \capdot B} = \overline{A} \cupplus \overline{B}$ | $\overline{A \cupplus B} = \overline{A} \capdot \overline{B}$|
| 





$(a\pm b)^2 = a^2 \pm 2ab + b^2$   $a^2 - b^2 = (a-b)(a+b)$

$(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3$

$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$




### Mittelwerte \quad ($\sum$ von $i$ bis $N$)

|	**Arithmetisches** | $\ge$ **Geometrisches** | $\ge$ **Harmonisches**
|----|----|
|$\ol x_{\ir{ar}} = \frac{1}{N} \sum x_i$ | $\ol x_{\ir{geo}} = \sqrt[N]{ \prod x_i }$ | $\ol x_{\ir{hm}} =$\raisebox{0.5em}{ $\frac{N}{\sum \frac{1}{x_i}}$}|
|
Median: Zahl in der Mitte einer geordneten(ordinalen) Liste.




## Wichtige Formeln
\setlength{\tabcolsep}{0pt}

|	Dreiecksungleichung: |$\big|\! \abs{x}- \abs{y}\!\big| \le \abs{x \pm y} \le \abs{x} + \abs{y}$|
|Cauchy-Schwarz-Ungleichung: | $\left| \vec x^\top \bdot \vec y \right| \le \| \vec x\| \cdot \| \vec y\|$ |
|Bernoulli-Ungleichung: | $(1+x)^n \ge 1+nx$
|----|----|
|$\underset{\text{Aritmetrische Summenformel}}{\sum \limits_{k=1}^{n} k = \frac{n (n+1)}{2}}$ |  $\underset{\text{Geometrische Summenformel}}{\sum \limits_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1-q}}$ |
|

$\underset{\text{Harmonische Reihe}}{\sum\limits_{n=1}^\infty \frac{1}{n} \ra \infty} \qquad\qquad   \underset{\text{Geometrische Reihe}}{\sum\limits_{n=0}^\infty q^n \stackrel{|q|<1}= \frac{1}{1-q}}  \qquad\qquad \underset{\text{Exponentialreihe}}{\sum\limits_{n = 0}^{\infty} \frac{\cx z^n}{n!} = e^{\cx z}}$

$\underset{\text{(Reihe für }m \ra \infty)}{\text{Taylorpolynom: }}$ $T(x)= \sum\limits_{i=0}^{m}  \frac{f^{(i)}(x_0)}{i!} (x-x_0)^i$ 




## Komplexe Zahlen $a + b\i = \cx z \in \C = \R^2$
\parbox{2cm}{ \<figure><img src="./img/trigo.pdf" /></figure> } \quad
\parbox{6cm}{ 
$\cx z = \underset{\text{Karthesisch}}{a + b\i} = \underset{\text{Polarkoord.}}{r \cdot e^{\i \varphi}}$ \quad\ \boxed{ \underset{\text{Imaginäre Einheit}}{\i = \sqrt{-1}}}

$\i^{2n} = -1^n$ \quad\ $\i^{2n+1} = -\i^n$ \quad\ $\i^{-1} = -\i$ 

Konjugiert: $\ol{\cx z} = a - b\i$ \qquad $e^{\overline{iφ}} = e^{-iφ}$ \\ $\cx z \ol{\cx z} = \abs{\cx z}^2 = a^2+b^2$

Inverse $\cx z^{-1} = \frac{\ol{\cx z}}{\ol{\cx z} \cx z}=\frac{a - b\i}{a^2+b^2}$ }









\section[Abbildungen]{Abbildungen $\vec f:\mathbb D^n \rightarrow \mathbb W^m,\ \vec x \mapsto \vec f(\vec x)$ }


|	**Bild** $f(D) := \iset{f(x)}{x\in D}$ | **Kern** $\ker f := \iset{\vec x}{\vec f(\vec x) = \vec 0}$   |
|**Komposition** $f \circ g := f\bigl( g(x) \bigr)$ | **Fixpunkt** $a := f(a)$ |
| 
|			**Injektiv** | $f(x_1)=f(x_2) \Rightarrow x_1=x_2$ | \multirow{2}{2.0cm}{\Big \} beides: **Bijektiv** }|
|**Surjektiv** | $\forall y\in \mathbb W \exists x\in \mathbb D:f(x)=y$ | |
|



### Extrema, Monotonie und Krümmung von $f$
$f'(x_0)\overset{!}{=}0 \quad \begin{cases}f''(x_0)<0 \ \rightarrow \ \text{Maximum (lokal)} \\ f''(x_0)>0 \ \rightarrow \ \text{Minimum (lokal)}\end{cases} $

$f''(x_0)=0 \text{ und } f'''(x_0) \ne 0 \rightarrow x_0$ Wendepunkt 

$f'(x) \stackrel{_\ge}{_{(>)}}\!\! / \!\! \stackrel{_\le}{_{(<)}} 0 \ \rightarrow$ \ $f$ (streng) Monoton steigend/fallend. $x\in[a,b]$

## Asymptoten und Grenzwerte von $f$
Horizontal: $c_\pm =\lim\limits_{x\ra \pm \infty} f(x)$ \qquad Vertikal: $\exists\,\text{Nullst. } a \text{ des Nenners }$\\ 	Polynomasymptote $P(x)$: $f(x):=\frac{A(x)}{Q(x)}=P(x)+ \Big(\frac{B(x)}{Q(x)}\ra 0\Big)$

**Regel von L'Hospital**: $\lim\limits_{x \rightarrow a} \frac{f(x)}{g(x)} \rightarrow \left[ \frac{0}{0} \right]\!/\!\left[ \frac{\infty}{\infty} \right] = \lim\limits_{x \rightarrow a} \frac{f'(x)}{g'(x)}$

### Wichtige Grenzwerte
|			$\lim\limits_{x \ra \infty} \frac{1}{x^n} = 0$ | $\lim\limits_{n \ra \infty} \sqrt[n]{n} = 1$ | $\lim\limits_{n \ra \infty} \frac{n^n}{n!} = \infty$|
|$\lim\limits_{x \ra \infty} x \cdot e^{-x} = 0$ | $\lim\limits_{x \ra 0} \frac{\sin(x)}{x} = 1$ | $\lim\limits_{x \ra 0} \frac{x}{\sin(x)} = 1$|
|

### Wichtige Sätze für *stetige* Fkt. $f: [a,b] \rightarrow \mathbb R, f \mapsto f(x)$ 
**Zwischenwertsatz:** $\forall y \in [f(a),f(b)]\ \exists x\in [a,b]:f(x)=y$

**Mittelwertsatz:** Falls $f$ diffbar, dann $\exists x_0:f'(x_0)=\frac{f(b)-f(a)}{b-a}$

**Satz von Rolle:** Falls $f(a)=f(b)$, dann $\exists x_0: f' (x_0) = 0$

## Polynome $P(x)\in\mathbb R[x]_n = \sum\limits_{i=0^n a_ix^i$ vom Grad $n$}
\vspace{-0.5em}
\parbox{3cm}{ \<figure><img src="./img/polynome.pdf" /></figure>}
\parbox{3.5cm}{ **Gerade** durch Punkt $P(x_0,y_0)$:\\[0.2em] $y = m(x - x_0) + y_0$ 



**Quadratisch:** $y = ax^2+bx+c$

Mitternachtsformel für Nullstellen:

\boxed{ x_{1/2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a} }

$x_1 + x_2 = - \frac{b}{a} \qquad x_1 x_2 = \frac{c}{a}$
}




## Exponentialfunkt. und Logarithmus\ \ $e = 2,718281828$
$\exp(x) \equiv e^x := \lim\limits_{n \rightarrow \infty} \left( 1 + \frac{x}{n} \right)^n = \sum\limits_{n = 0}^{\infty} \frac{x^n}{n!}$

|		$a^x = e^{x \ln a}$ | $\log_a x = \frac{\ln x}{\ln a}$ | $\ln x \le x -1$|
|$\ln(x^{a}) = a \ln(x)$ | $\ln(\frac{x}{a}) = \ln x - \ln a$ | $\log(1) = 0$|
|




## Gammafunktion $Γ(\cx z)$
Interpolation der Fakultät um 1 verschoben:

Für $n∈\N: Γ(n) = (n-1)!$ und $Γ(x+1)=x \cdot Γ(x)$

Für $\cx z ∈ \C: Γ(\cx z) = \int_0^{∞} t^{\cx z -1} e^{-t} \diff t$ \qquad $Γ(\frac12) = \sqrt{π}$



# Trigonometrie


\subsection[Sinus, Cosinus]{Sinus, Cosinus $\sin^2 x + \cos^2 x = 1$}
$\sin (-x) = -\sin (x)$  \qquad $\cos (-x) = \cos (x)$ 

$e^{\i x}=\cos(x)+\i\sin(x)$, $e^{-\i x}=\sin(x)-\i\cos(x)$

|		$x$ | $0$ | $\pi / 6$ | $\pi / 4$ | $\pi / 3$ | $\frac{1}{2}\pi$ | $\pi$ | $1\frac{1}{2}\pi$ | $2 \pi$ |
|$\scriptstyle{ \varphi }$ | $\scriptstyle{0^\circ}$ | $\scriptstyle{30^\circ}$ | $\scriptstyle{45^\circ}$ | $\scriptstyle{60^\circ}$ | $\scriptstyle{90^\circ}$ | $\scriptstyle{180^\circ}$ | $\scriptstyle{270^\circ}$ | $\scriptstyle{360^\circ}$ 
|----|----|
|$\sin$ | $0$ | $\frac{1}{2}$ | $\frac{1}{\sqrt{2}}$ | $\frac{\sqrt 3}{2}$ | $1$ | $0$ | $-1$ | $0$ |
|$\cos$ | $1$ | $\frac{\sqrt 3}{2}$ | $\frac{1}{\sqrt 2}$ | $\frac{1}{2}$ | $0$ | $-1$ | $0$ | $1$ |
|$\tan$ | $0$ | $\frac{\sqrt{3}}{3}$ |	$1$	|	$\sqrt{3}$ | $\pm \infty$ | $0$ | $\mp \infty$ | $0$|
|
|		Additionstheoreme |  Stammfunktionen|
|$\cos (x - \frac{\pi}{2}) = \sin x$ | $\int x \cos(x) \diff x = \cos(x) + x \sin(x)$|
|$\sin (x + \frac{\pi}{2}) = \cos x$ | $\int x \sin(x) \diff x = \sin(x) - x \cos(x)$|
|$\sin 2x = 2 \sin x \cos x $  | $\int \sin^2(x) \diff x = \frac12 \bigl(x - \sin(x)\cos(x) \bigr)$|
|$\cos 2x = 2\cos^2 x - 1$  | $\int \cos^2(x) \diff x = \frac12 \bigl(x + \sin(x)\cos(x) \bigr)$|
|$\sin(x) = \tan(x)\cos(x)$ | $\int \cos(x)\sin(x) = -\frac12 \cos^2(x)$ |
|





## Sinus/Cosinus Hyperbolicus $\sinh, \cosh$ 
|	$\sinh x = \frac{1}{2}(e^x -e^{-x})= - \i \, \sin(\i x)$ | $\cosh x + \sinh x = e^{x}$|
|$\cosh x  = \frac{1}{2}(e^x +e^{-x})= \cos(\i x)$ | $\cosh^2 x  \bs - \sinh^2 x = 1$|
|
**Kardinalsinus** $\mathrm{si}(x) = \frac{\sin(x)}{x}$ \qquad genormt: $\sinc(x) = \frac{\sin(\pi x)}{\pi x}$





## Kurven $\vec \gamma: [a,b] \ra \R^n, t \mapsto \vec \gamma(t)$
**Bogenlänge:** \\ $L(\vec \gamma) = \int\limits_{a}^{b} \norm{\dot {\vec \gamma}(t)} \mathrm dt$ \\[1em] **Krümmung:**\\ $\kappa(t)= \norm{\frac{\mathrm d^2 \vec \gamma}{\mathrm d s^2}} = \frac{\norm{\dot T(t)}}{s'(t)}$ \\ $s: [a,b] \ra [0,L(\vec \gamma)], t \mapsto s(t)$ \\ (nach Bogenlänge parametr.) 


$\mathcal C^n$-Kurve: $n$-mal stetig diffbar, $\mathcal C^0$-Kurve: geschlossene Kurve

regulär, falls $\forall t \in [a,b]:\dot \gamma(t) \ne \vec 0$ (Keine Knicke), sonst singulär




## Skalarfelder $φ:\mathbb D \subseteq \R^n \rightarrow \R$
Richtungsableitung: $\partial_v f(\vec x) =  \nabla f(\vec x)^\top \bdot \vec v$ mit $ \norm{\vec v}=1 $




# Lineare Algebra




\subsection[Vektorräume]{Vektorräume $(V,+,\bdot)$ über Körper $(\K,+,\cdot),\ \vec v \in \K^n$} 	**Linear Unabhängig:** Vektoren heißen linear unabhängig, wenn aus: 

$\alpha_1 \vec v_1 + \alpha_2 \vec v_2 + \ldots + \alpha_n \vec v_n = \vec 0$ folgt, dass alle $\alpha_i = 0$

**Basis** $\ma B=\eset{\vec b_1, \vec b_2, ...}$: $n$ Vektoren, linear unabhängig, erzeugen $V$

**Betrag (Norm):** $\norm{\vec a} = \sqrt{\sprod{\vec a}{\vec a}} = \sqrt{a_1^2+a_2^2+\ldots +a_n^2}$

**Skalarprodukt:** $\sprod{\vec v}{\vec w} = \vec v^\top\!\! \bdot \vec w = \sum v_i w_i = \norm{\vec a}\norm{\vec b} \cos(\measuredangle \vec a,\vec b)$

$\sprod{\vec v}{\vec w}_{\ma A} = \vec v^\top \ma A \vec w$ \qquad (quadr., symm., pos. definite Matrix $\ma A$)

**Kreuzprodukt(falls $\K^n = \R^3$):** $\vec v \times \vec w = \vect{v_2w_3-v_3w_2 \\ v_3w_1-v_1w_3 \\ v_1w_2-v_2w_1}$

$\vec a\times\vec b \perp \vec a,\vec b$ \qquad $\vec a\times\vec b=0\ \Leftrightarrow\ \vec a;\vec b$\ linear abhängig.

$||\vec a\times\vec b||=||\vec a||\bdot||\vec b||\bdot \sin\left(\measuredangle (\vec a;\vec b)\right)\mathrel{\widehat{=}}$\ Fläche des Parallelogramms

Graßmann-Identität: $\vec a\times(\vec b \times \vec c)\equiv\vec b\bdot(\vec a \bdot \vec c)-\vec c\bdot(\vec a \bdot \vec b)$

**Spatprodukt:** $[\vec a,\vec b,\vec c]:=\langle \vec a\times\vec b,\vec c\rangle=\det (\vec a, \vec b,\vec c)\mathrel{\widehat{=}}$\;Spatvolumen

$[\vec a,\vec b,\vec c]>0\ \Rightarrow$ Rechtssystem \quad $[\vec a,\vec b,\vec c]=0\ \Rightarrow$ Vekt. lin. abhängig








\subsection[Matrizen]{Matrizen $\ma A \in\mathbb{K}^{m \times n}$}
$\ma A=(a_{ij}) \in \mathbb K^{m\times n}$ hat $m$ Zeilen (Index $i$) und $n$ Spalten (Index $j$)
|	$(\ma A + \ma B)^\top = \ma A^\top + \ma B^\top$ | $(\ma A \cdot \ma B)^\top = \ma B^\top \cdot \ma A^\top$|
|${(\ma A^\top)}^{-1} = {(\ma A^{-1})}^\top$ | $(\ma A \cdot \ma B)^{-1} = \ma B^{-1}\ma A^{-1}$
\end{tabular*}
$\dim \mathbb K = n = \rang\ma A + \dim\ker\ma A$ \qquad $\rang\ma A = \rang\ma A^\top$


### Quadratische Matrizen $A \in \mathbb{K^{n \times n}$}
regulär/invertierbar/nicht-singulär $\Leftrightarrow \det (\ma A) \ne 0 \Leftrightarrow \rang\ma A = n$

singulär/nicht-invertierbar $\Leftrightarrow \det (\ma A) = 0 \Leftrightarrow \rang\ma A \ne n$

orthogonal $\Leftrightarrow \ma A^\top=\ma A^{-1} \Ra \det(\ma A) = \pm 1$

symmetrisch: $\ma A=\ma A^\top$ \qquad schiefsymmetrisch: $\ma A=-\ma A^\top$


\subsubsection[Determinante]{Determinante von $\ma A\in \mathbb K^{n\times n}$: $\det(\ma A)=|\ma A|$}
$\det\mat{ \ma A & \ma 0 \\ \ma C& \ma D }= \det\mat{ \ma A & \ma B \\ \ma 0 & \ma D } = \det(\ma A)\det(\ma D)$ 

|	$\det(\ma A) = \det(\ma A^T)$ | $\det(\ma A^{-1}) = \det(\ma A)^{-1}$
\end{tabular*}
$\det(\ma A\ma B) = \det(\ma A)\det(\ma B) = \det(\ma B)\det(\ma A) = \det(\ma B\ma A)$

Hat $\ma A$ 2 linear abhäng. Zeilen/Spalten $\Rightarrow |\ma A|=0$ 

### Eigenwerte (EW) $\lambda$ und Eigenvektoren (EV) $\underline v$
\begin{emphbox}
 $\ma A \vec v = \lambda \vec v$ \quad\ $\det \ma A = \prod \lambda_i$ \quad\ $\Sp \ma A = \sum a_{ii} = \sum \lambda_i$
\end{emphbox}
Eigenwerte: $\det(\ma A - \lambda \ma 1) = 0$ Eigenvektoren: $\ker(\ma A - \lambda_i \ma 1) = \vec v_i$

EW von Dreieck/Diagonal Matrizen sind die Elem. der Hauptdiagonale.


### Spezialfall $2 \times 2$ Matrix $A$
\parbox{3cm}{ $\det(\ma A) = ad-bc$ \\ $\Sp(\ma A) = a+d$ } $\mat{a & b\\ c & d}^{-1} = \frac{1}{\det \ma A} \mat{d & -b\\ -c& a}$

$\lambda_{1/2} = \frac{\Sp \ma A}{2} \pm \sqrt{ \left( \frac{\mathrm{sp} \ma A}{2} \right)^2 - \det \ma A }$

### Differentiation
$\frac{\partial \vec x^\top \vec y}{\partial \vec x} = \frac{\partial \vec y^\top \vec x}{\partial \vec x} = \vec y$\qquad
$\frac{\partial \vec x^\top \ma A \vec x}{\partial \vec x} = (\ma A + \ma A^\top)\vec x$ 

$\frac{\partial \vec x^\top \ma A \vec y}{\partial \ma A} = \vec x \vec y^\top$ \qquad $\frac{\partial \det( \ma B \ma A \ma C )}{\partial \ma A} = \det(\ma B \ma A \ma C) \left( \ma A^{-1} \right)^\top$




\subsubsection[Vektornormen]{Vektornormen: ($\vec x \in \K^n, \sum$ von $i=1$ bis $n$)}

|		Summen | $\norm{\vec x}_1 = \sum |x_i|$ | Euklidische | $\norm{\vec x}_2 = \sqrt{\sum |x_i|^2}$|
|Maximum | $\norm{\vec x}_\infty = \max |x_i|$ | Alg. p-Norm | $\norm{\vec x}_p = \left( \sum |x_i|^p \right)^{1\!/\!p}$|
|


\subsubsection[Matrixnormen]{Matrixnormen ($\ma A \in \K^{m \times n}, i\in[1,m], j\in[1,n]$)}

|	Gesamtnorm $\left(\norm{\ma{A}}_M = \frac{\norm{\ma{A}}_G}{\sqrt{mn}}\right)$ | $\norm{\ma{A}}_G$ | $\sqrt{mn}\cdot\underset{i,j}{\max}\abs{a_{ij}}$|
|Zeilennorm (max Zeilensumme) | $\norm{\ma{A}}_\infty$ | $\underset{i}{\max}\sum\limits_{j=1}^n\abs{a_{ij}}$ |
|Spaltennorm (max Spaltensumme) | $\norm{\ma{A}}_1$ | $\underset{j}{\max}\sum\limits_{i=1}^m\abs{a_{ij}}$ |
|$\underset{\text{euklidische Norm}}{\text{Frobeniusnorm}}$ $(||\ma{I}||_E = \sqrt{n})$ | $\norm{\ma{A}}_E$ | $\sqrt{\sum\limits_{i=1}\sum\limits_{j=1}\abs{a_{ij}}^2}$|
|Spektralnorm, Hilbertnorm | $\norm{\ma{A}}_\lambda$ | $\sqrt{\lambda_\text{max}(\ma{A}^\top\cdot\ma{A})}$|
|







## Koordinatensysteme \quad $- \pi < \varphi \le \pi,$ \quad $0 \le \theta \le \pi$
\parbox{2.5cm}{ \<figure><img src="./img/kosy.pdf" /></figure> } \quad
\parbox{5cm}{
Vektor $\vec r$ zur Basis $B$:

${}_B \vec r = r_x \vec e^B_x +  r_y \vec e^B_y + r_z \vec e^B_z$

|			$\vec e^B_i$ | Basisvektor von $B$ in $i$-Richtung|
|$r_i$ | Koordinate in $i$-Richtung|
|$r_i \vec e^B_i$ | $i$-Komponente bezüglich $B$|
|$I$ | Basis des Inertialsystems $I$
\end{tabular}
}




### Ableitungsregeln ($\forall \lambda, \mu \in \mathbb R$)
|		Linearität: | $(\lambda f + \mu g)' (x) = \lambda f'(x) + \mu g'(x_0)$  |
|Produkt: | $(f \cdot g)'(x) = f'(x) g(x) + f(x) g'(x)$|
|Quotient: | $\left(\frac{f}{g}\right)' (x) = \frac{g(x)f'(x) -f(x) g'(x)}{g(x)^2}$ \quad $\left(\frac{\text{NAZ}-\text{ZAN}}{\text{N}^2}\right)$|
|Kettenregel | $\left( f\bigl(g(x)\bigr) \right)' = f'\bigl(g(x)\bigr) g'(x)$|
|	



## Integrale $\int e^x\;\mathrm dx = e^x = (e^x)'$
$\int_a^b f(x) \mathrm dx = F(b) - F(a)$
|	Partielle Integration: | $\int uw'=uw-\int u'w$|
|Substitution: | $\int f(g(x)) g'(x)\diff x=\int f(t)\diff t$
\end{tabular*}

|		$F(x) - C$ | $f(x)$ | $f'(x)$ 
|----|----|
|$\frac{1}{q+1}x^{q+1}$ | $x^q$ | $qx^{q-1}$ |
|\raisebox{-0.2em}{$\frac{2\sqrt{ax^3}}{3}$} | $\sqrt{ax}$ | \raisebox{0.2em}{$\frac{a}{2\sqrt{ax}}$}|
|$x\ln(ax) -x$ | $\ln(ax)$ | $\textstyle \frac{1}{x}$|
|$\frac{1}{a^2} e^{ax}(ax- 1)$ | $x \cdot e^{ax}$ | $e^{ax}(ax+1)$ |
|$\frac{a^x}{\ln(a)}$ | $a^x$ | $a^x \ln(a)$ |
|$-\cos(x)$ | $\sin(x)$ | $\cos(x)$|
|$\cosh(x)$ | $\sinh(x)$ | $\cosh(x)$|
|$-\ln |\cos(x)|$ | $\tan(x)$ | $\frac{1}{\cos^2(x)}$ |
|

|	\multicolumn{2}{c}{$\int e^{at} \sin(bt) \diff t = e^{at} \frac{a \sin(bt) + b \cos(bt)}{a^2 + b^2}$}|
|$\int \frac{\diff t}{\sqrt{at+b}} = \frac{2 \sqrt{at+b}}{a}$ | $\int t^2 e^{at} \diff t = \frac{(ax-1)^2+1}{a^3} e^{at}$|
|$\int t e^{at} \diff t = \frac{at-1}{a^2} e^{at}$ | $\int x e^{ax^2} \diff x = \frac{1}{2a} e^{ax^2}$|
|

### Volumen und Oberfläche von Rotationskörpern um $x$-Achse
$V = \pi \int_a^b f(x)^2 \mathrm dx$ \qquad \quad $O = 2 \pi \int_a^b f(x) \sqrt{1 + f'(x)^2} \mathrm dx$



## Partialbruchzerlegung
Gegeben: rationale Funktion $f(x) = \frac{g(x)}{h(x)}$ mit Polynomen $g(x),h(x)$

Gesucht: $f(x) = P(x) + \frac{Z(x)}{N(x)} = P(x) + \sum\limits_{i=1}^n \frac{A_i}{(x-x_i)^{r_i}}$

$N(x)$ hat $n$ verschiedene Nullstellen, die jeweils $r_i$-fach vorkommen und $m$ verschiedene komplexe NS, die jeweils $s$-fach vorkommen.

1. Ansatz: \\$N^*(x) = \sum\limits_{i = 1}^n \sum\limits_{k = 1}^{r_i} \frac{A_{ik}}{(x-x_i)^k} + \sum\limits_{i = 1}^m \sum\limits_{k = 1}^{s_i} \frac{B_{ik} x + C_{ik}}{(x-\cx z_i)^k(x-\ol{\cx z}_i)^k}$

2. Koeffizientenvergleich: löse $Z(x) = N^*(x) \cdot N(x)$ nach $A_{ik}$






## Differentialoperatoren \qquad $\div(\rot \vec f) \equiv 0$
\begin{emphbox}
|			**Gradient** $\grad f$ | \qquad **Rotation** $\rot \vec f$|
|$\nabla f = \vect{\partial_1 f |
|**Divergenz** $\div \vec f$ | \qquad **Laplace** $\Delta\, f = \Sp \ma H_f(\vec x)$|
|${\displaystyle \nabla^\top \bdot \vec f = \sum\limits_{i=0}^n \frac{\partial f_i}{\partial x_i}}$ | \qquad ${\displaystyle\underset{\nabla^\top \cdot (\nabla f)}{\nabla^2 f} = \sum\limits_{i=0}^n \frac{\partial f}{\partial x_i x_i} }$|
|
\end{emphbox}

|	**Integralsatz Gauß** | **Integralsatz Stokes** |
|$\displaystyle \iiint\limits_V \div \vec v \diff V = \oiint\limits_{\partial V} \vec v \bdot \diff A$ | $\displaystyle \iint\limits_{A} \rot \vec v \diff A = \oint\limits_{\partial A} \vec v \diff \vec s$|
|


# Frequenzanalyse


## Fourierreihe
Approximation einer *periodischen* Funktion $f(t)$ durch Überlagerung gewichteter Sinus und Cosinus einer Grundfrequenz $\omega_0 = \frac{1}{T}$ und deren Oberschwingungen $2\omega_0, 3\omega_0, ...$
\begin{emphbox}
$F(x) = \sum\limits_{k=-\infty}^\infty c_k e^{\i k \omega_0 x} \qquad c_k = \frac{1}{T} \int\limits_{-\frac{T}{2}}^{\frac{T}{2}} f(x) e^{\i k \omega_0 x} \diff x$
\end{emphbox}




## Fouriertransformation (FT)
\begin{emphbox}
$\displaystyle \underset{\text{Zeitbereich}}{ f(t)} \FT \underset{\text{Frequenzspektrum}}{ F(\omega)} := \int\limits_{-\infty}^\infty f(t) \exp(-\i \omega t) \diff t$
\end{emphbox} 
Anmerkung: Es gibt unterschiedliche Normungen ($1, \frac{1}{\sqrt{2\pi}}$)

## Laplaceransformation (LT) $\cx s = α + ω\i$
LT ist Verallgemeinerung der FT mit Dämpfungsfaktor $α$
\begin{emphbox}
$\displaystyle \underset{\text{Zeitbereich}}{ f(t)} \LT \underset{\text{Frequenzspektrum}}{ F(\cx s) = \mathcal L\left(f(t)\right)} := \int\limits_{0}^\infty f(t) \exp(- \cx s t) \diff t$
\end{emphbox} 




## Eigenschaften der FT ($s = \i \omega$) / LT ($s = \alpha + \i \omega$)
|	Linearität: | $\alpha f(t) + \beta g(t) \ftsymbol \alpha F(s) + \beta G(s)$|
|Zeitverschiebung: | $x(t - \tau) \ftsymbol e^{-s \tau} X(x)$|
|Frequenzverschiebung | $e^{\tau t} \ftsymbol X(s - \tau)$|
|Stauchung | $f(ct) \ftsymbol \frac{1}{\abs{c}} F\bigl(\frac{s}{c}\bigr)$|
|Ableitung | $f^{(n)}(t) \ftsymbol s^n F(s)$|
|Integral | $\int_{-\infty}^t \tau \diff \tau \ftsymbol \frac{1}{s} X(s)$|
|Faltung: | $(f * g)(t) \ftsymbol F(s) \cdot G(s)$|
| | 
\end{tabular*}

$f(t)$ gerade: $F(\omega)$ reel, gerade

$f(t)$ ungerade: $F(\omega)$ imaginär, ungerade




# Stochastik

## Kombinatorik
Mögliche Variationen/Kombinationen um $k$ Elemente von maximal $n$ Elementen zu wählen bzw. $k$ Elemente auf $n$ Felder zu verteilen:

|		|  Mit Reihenfolge |  Reihenfolge egal
|----|----|
|| Mit Wiederholung |  $n^k$ | \Large $\binom{n+k-1}{k}$|
| Ohne Wiederholung | \Large $\frac{n!}{(n-k)!}$ | \Large $\binom nk$|
|
Permutation von $n$ mit jeweils $k$ gleichen Elementen: $\frac{n!}{k_1 ! \cdot k_2 ! \cdot ...}$

Binomialkoeffizient $\binom nk = \binom n{n-k} = \frac{n!}{k! \cdot (n-k)!}$

$\binom n0 = 1$ \quad $\binom n1 = n$ \quad $\binom 42 = 6$ \quad $\binom 52 = 10$ \quad $\binom 62 = 15$




## Der Wahrscheinlichkeitsraum $(\Omega,\mathbb F,\P)$

|		**Ergebnismenge** | $\Omega = \eset{\omega_1,\omega_2, ...}$ | Ergebnis $\omega_j \in \Omega$|
|**Ereignisalgebra** | $\mathbb F = \eset{A_1,A_2,...}$ | Ereignis $A_i \subseteq \Omega$|
|**Wahrscheinlichkeitsmaß** | $\P:\mathbb F \ra [0,1]$ | $\P(A) = \frac{|A|}{|\Omega|}$|
|
Es gilt: $\P(A \cup B) = \P(A) + \P(B) - \P(A \cap B)$\\ 

**Bedingte Wahrscheinlichkeit** für $A$ falls $B$ bereits eingetreten ist:

$\P_B(A) = \P(A|B) = \frac{\P(A \cap B)}{\P(B)}$

Multiplikationssatz: $\P(A \cap B) = \P(A|B)\P(B) = \P(B|A)\P(A)$

**Erwartungswert:** $\E[X] = \mu = \sum x_i P(x_i) = \int_{\R} x \cdot f_{\X} (x) \diff x$ 

**Varianz:** $\Var [X] = \E \big[(\X - \E[\X])^2\big] = \E[\X^2] - \E[\X]^2$

Standard Abweichung $\sigma = \sqrt{\Var[\X]}$

**Covarianz:** $\Cov [\X,\Y] = \E[(\X- \E[\X])(\Y - \E[\Y])] = \Cov [\Y, \X]$

**Binominialverteilung** $\mathcal B(n,p)$ (diskret, $n$ Versuche, $k$ Treffer): 

$\P(X=k)= \binom nk p^k (1-p)^{n-k}$ \quad $\mu = np$ \quad $\sigma^2 = np(1-p)$
**Normalverteilung** $\mathcal N(μ,σ^2)$: $f_{\X}(x)= \frac{1}{\sqrt{2 \pi \sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2 \sigma^2}\right)$





## Hypothesen / Klassifizierung
Nullhypothese $H_0$ wird (zur Sicherheit) zu erst als wahr angenommen.

Alternativhypothese $H_1$ soll überprüft/gezeigt werden.

|		${}_{\text{Decision}}$\!{ $\diagdown$}\!${}^{\text{Reality}}$ | $H_1$ false {\small ($H_0$ true)} | $H_1$ true {\small ($H_0$ false)}
|----|----|
|$H_1$ rejected | **T**rue **N**egative | **F**alse **N**egative (Type 2)|
|\small ($H_0$ accepted) | $\P = 1-α$  | $\P = β$|
|$H_1$ accepted | **F**alse **P**ositive (Type 1) | **T**rue **P**ositive|
|\small($H_0$ rejected) | $\P = α$ | $\P = 1-β$
|
$\underset{\text{(Hit Rate)}}{\text{Sensitivity: }}\frac{\text{TP}}{\text{TP}+\text{FN}}=1-β$   Specificity: $\frac{\text{TN}}{\text{FP}+\text{TN}}=1-α$

Precision: $\frac{\text{TP}}{\text{TP}+\text{FP}}$  Accuracy: $\frac{\text{TP} + \text{TN}}{\text{P}+\text{N}} = \frac{2-α-β}{2}$







# Geometrie

|		\parbox{2.6cm}{\<figure><img src="./img/math/strahlensatz.pdf" /></figure> } |
\parbox{4cm}{
**Strahlensatz:**|
||\Large $\frac{a}{a+b} = \frac{c}{c+d} = \frac{e}{f}$}|
|



Innenwinkelsumme im $n$-Eck: $(n-2) \cdot 180^\circ$



**Allg. Dreieck** $\triangle ABC$ mit Seiten $a,b,c$ und Winkel $\alpha,\beta,\gamma$:

|		\multirow{3}{1.6cm}{ \<figure><img src="./img/math/dreieck.pdf" /></figure> } | Kosinussatz: | $ c^2 = a^2 + b^2 - 2ab \cos(\gamma)$|
|| Sinussatz: | $\frac{a}{\sin \alpha} = \frac{b}{\sin \beta} = \frac{c}{\sin \gamma}$ |
|| Projektionssatz: | $c = a \cos \beta + b \cos \alpha$ |
|

Höhe $h_c = a \sin \beta = b \sin \alpha$  \qquad Fläche $A = \frac{1}{2} h_c c = \frac{1}{2} h_a a$

Schwerpunkt: $x_S = \frac{1}{3}(x_A + x_B + x_C)$ \quad $y_S = \frac{1}{3}(y_A + y_B + y_C)$



**Rechtwinkliges Dreieck** $\triangle ABC$ mit $\gamma = 90^\circ$ bei $C$

|		\multirow{3}{2cm}{ \<figure><img src="./img/math/rechtwinklig.pdf" /></figure> } | Pythagoras: | \hspace{-2.5mm}  $a^2 + b^2 = c^2$|
|| Höhensatz: | \hspace{-2.5mm} { $h^2 = pq$}|
|| Kathetensatz: | \hspace{-2.5mm}  $a^2 = pc$|
|| \multicolumn{2}{l}{ $a = c \sin \alpha = c \cos \beta = b \tan \alpha$}|
|



\parbox{4cm}{
**Pyramide** mit beliebiger Grundfläche $G$

|		\multirow{2}{0.8cm}{\<figure><img src="./img/math/pyramide.pdf" /></figure> } | $V = \frac{1}{3} G \cdot h$|
|| SP: liegt auf $h$ mit $y_S = h/4$|
| } \qquad
\parbox{3cm}{
**Zylinder/Prisma**

$V = G \cdot h$

$M = U \cdot h$

}



\parbox{1.0cm}{ \<figure><img src="./img/math/kreis.pdf" /></figure> } \qquad
\parbox{4cm}{
|	**Kreis:** | $A = \pi r^2$ | $U =2\pi r$ |
| }



# Numerische Verfahren

\subsection[Lineares Gleichungssystem]{Lineares Gleichungssystem $\ma A \vec x = \vec b$}
$\ma A = \ma L \ma R$ mit $\ma L$/$\ma R$ untere/obere Dreiecksmatrix

$\ma A = \ma Q \ma R$ mit $\ma Q^-1 = \ma Q^\top$

$\ma A = \ma U \ma D \ma V$
	



\begin{cookbox}{LR-Zerlegung mit Gaußverfahren $\ma A = \ma L \ma R$; $\ma P^{-1} = \ma P^\top$}
\item Sortiere Zeilen von $\ma A$ mit $\ma P$ so dass $a_{11} > ... > a_{n1}$
\item Zerlegen von $\ma P \ma A \vec x = \vec b$ zu $\ma L (\ma R \vec x) = \ma L \vec y = \ma P^\top \vec b$ mit

$\underset{\text{(Beispiel für } 2 \times 2)}{\text{Zerlegungsmatrix:}}$ $\ma A = \mat{a & b \\ c & d} \ra \mat{a & b \\ \frac{c}{a} & d - \frac{c}{a} b} = \ma A^*$ 

mit den Eliminationsfaktoren $l_{ik} = \frac{a_{ik}}{a_{kk}} \overset{z.B.}{=} \frac{c}{a}$
\item Für jede Spalte der unteren Dreiecksmatrix wiederholen.

Für eine $n \times n$ Matrix braucht man $n-1$ Durchläufe
\item $\ma R = \text{triu}(\ma A^*)$ \quad (obere $\triangle$-Matr. von $\ma A^*$, inkl. Diagonalelem.)
\item $\ma L = \text{tril}(\ma A^*,-1)+\ma 1$ \quad (untere $\triangle$-Matr. mit $1$en auf Diag.)
\item **Vorwärtseinsetzen:** $\ma L \vec y = \vec b$ bzw. $\ma L \vec y = \ma P^\top \vec b$ \quad (Löse nach $\vec y$)
\item **Rückwärtseinsetzen:** $\ma R \vec x = \vec y$ \quad (Löse nach $\vec x$)
\end{cookbox}




\begin{cookbox}{QR-Zerlegung mit Householder-Transformation für $\ma A \in \mathbb R^{m\times n }$}
\item Setze $\vec a = \vec s_1$ (erste Spalte) und $\vec v = \vec a + \sgn ( a_1) \norm{\vec a} \vec e_1$
\item Berechne *Householder*-Trafomatrix $\ma H_{\vec v_1} = \ma 1_m - \frac{2}{\vec v^\top \vec v} \vec v \vec v^\top$
\item Erhalte $\ma A^* = \ma H_{\vec v_1} \ma A$ (ersten Spalte bis auf $a_{11}$ nur Nullen)
\item Wiederhole für $\ma A^*$ ohne 1. Zeile und Spalte (Untermatr. $\ma A^*_{11}$)

Erweitere $\ma H^*_{\vec v_2}$ oben mit $\ma 1_m$ zu $\ma H_{\vec v_2}$ ($h_{11} = 1$)
\item Nach $p = \min \eset{m - 1, n}$ Schritten: $\ma H_{\vec v_p} \ma A^* = \ma R$ weil
\item $\ma Q^\top = \ma H_{\vec v_p} \cdots \ma H_{\vec v_1}$ und  $\ma Q^\top \ma A = \ma R$
\end{cookbox}




## Orthogonalisierungsverfahren nach Gram-Schmidt
Berechnet zu $n$ Vektoren $\vec v_i$ ein Orthogonalsystem $\vec b_i$\quad ($i \in [1;n])$
\begin{equation*}
\vec b_1 = \vec v_1 \qquad\qquad \vec b_i = \vec v_i - \sum\limits_{k=1}^{i-1} \frac{\vec b_k^\top \bdot \vec v_i}{\vec b_k^\top \bdot \vec b_k} \vec b_k
\end{equation*}
Erhalte Ortho**normal**system durch $\vec b_i' = \vec b_i/\norm{\vec b_i}$

QR-Zerlegung: $\ma A = \ma Q \ma R$ mit $\ma Q = \big[\vec b_1', ... , \vec b_n'\big]$ \quad $\ma R = \ma Q^\top \ma A$









\part{Stochastik / Statistik}


### Mengenregeln (Boolsche Regeln $\emptyset \ra 0, Ω \ra 1$)

|		|----|----|
|Kommutativ 		| $A \capdot B = B \capdot A$ | $A \cupplus B = B \cupplus A$|
|Assoziativ 		| \multicolumn{2}{l}{ $(A \capdot B) \capdot C = A \capdot (B \capdot C)$} |
|| \multicolumn{2}{l}{$(A \cupplus B) \cupplus C = A \cupplus (B \cupplus C)$} |
|Distributiv 	| \multicolumn{2}{l}{$A \capdot (B \cupplus C) = (A \capdot B) \cupplus (A \capdot C)$}|
|| \multicolumn{2}{l}{ $A \cupplus (B \capdot C) = (A \cupplus B) \capdot (A \cupplus C)$}|
|Indempotenz		| $A \capdot A = A$ | $A \cupplus A = A$|
|Absorbtion		| $A \capdot (A \cupplus B) = A$ | $A \cupplus (A \capdot B) = A$|
|Neutralität		| $A \capdot \Omega = A$ | $A \cupplus \emptyset = A$|
|Dominant		| $A \capdot \emptyset = \emptyset$ | $A \cupplus \Omega = \Omega$|
|Komplement		| $A \capdot \overline{A} = \emptyset$ | $A \cupplus \overline{A} = \Omega$|
|| $\overline{\overline{A}} = A$ | $\ol{\Omega} = \emptyset$|
|De Morgan		| $\overline{A \capdot B} = \overline{A} \cupplus \overline{B}$ | $\overline{A \cupplus B} = \overline{A} \capdot \overline{B}$|
| 



## Der Wahrscheinlichkeitsraum $(\Omega,\mathbb F,\P)$

|		**Ergebnismenge** | $\Omega = \eset{\omega_1,\omega_2, ...}$ | Ergebnis $\omega_j \in \Omega$|
|**Ereignisalgebra** | $\mathbb F = \eset{A_1,A_2,...}$ | Ereignis $A_i \subseteq \Omega$|
|**Wahrscheinlichkeitsmaß** | $\P:\mathbb F \ra [0,1]$ | $\P(A) = \frac{|A|}{|\Omega|}$|
|




## Bedingte Wahrscheinlichkeit
Bedingte Wahrscheinlichkeit für $A$ falls $B$ bereits eingetreten ist:

$\P_B(A) = \P(A|B) = \frac{\P(A \cap B)}{\P(B)}$

### Totale Wahrscheinlichkeit und Satz von Bayes
Es muss gelten: $\bigcup\limits_{i \in I} B_i = \Omega$ für $B_i \cap B_j = \emptyset$, $\forall i \neq j$ 

|		Totale Wahrscheinlichkeit: | $\P(A) = \sum\limits_{i \in I} \P(A|B_i)\P(B_i)$|
|Satz von Bayes: | $\P(B_k | A) = \frac{\P(A | B_k)\P(B_k)}{\sum\limits_{i \in I} \P(A|B_i) \P(B_i)}$|
|

### Multiplikationssatz
$\P(A \cap B) = \P(A|B)\P(B) = \P(B|A)\P(A)$




## Zufallsvariable
$\X : \Omega \mapsto \Omega'$ ist Zufallsvariable, wenn für jedes Ereignis $A' \in \F'$  

im Bildraum ein Ereignis $A$ im Urbildraum $\F$ existiert, 

sodass $\left\{\omega \in \Omega|\X(\omega) \in A'\right\} \in \F$




## Deviations

|			Bezeichnung  | Abk. | Zusammenhang
|----|----|
|Wahrscheinlichkeitsdichte | pdf | $f_{\X}(x) = \frac{\diff F_{\X}(x)}{\diff x}$|
|Kumulative Verteilungsfkt. | cdf | $F_{\X}(x) = \int\limits_{-\infty}^{x}{f_{\X}(\xi)\diff\xi}$ |
|







\subsection[Relations]{Relations between $f_{\X}(x), f_{\X,\Y}(x,y), f_{\X|\Y}(x|y)$}
\begin{emphbox}
$\underset{\text{Joint PDF}}{f_{\X,\Y}(x,y)} = f_{\X|\Y}(x,y) f_{\Y}(y) = f_{\Y|\X}(y,x) f_{\X}(x)$

$\underbrace{\int\limits_{-\infty}^{\infty} f_{\X,\Y}(x,ξ) \diff ξ}_{\text{Marginalization}} = \underbrace{\int\limits_{-\infty}^{\infty} f_{\X|\Y}(x,ξ)f_{\Y}(ξ) \diff ξ}_{\text{Total Probability}} = f_{\X}(x)$
\end{emphbox}









## Erwartungswert (1. Moment)
gibt den mittleren Wert einer Zufallsvariablen an

\begin{emphbox}
$μ_{\X} = \E [\X] = \underset{\text{diskrete} \X:\Omega \ra \Omega'}{\sum\limits_{x \in \Omega'} x \cdot \P_{\X}(x)} \quad \stackrel{\wedge}{=}\quad \underset{\text{stetige} \X: \Omega \ra \R}{\int \limits_{\R} x \cdot f_{\X} (x) \diff x}$
\end{emphbox}
$\E[\alpha \X + \beta \Y] = \alpha \E [\X] + \beta \E[\Y]$   $\X \le \Y \Ra \E[\X] \le \E[\Y]$



$\E[\X\Y] = \E[\X] \E[\Y]$, falls $\X$ und $\Y$ stochastisch unabhängig

Umkehrung nicht möglichich: Unkorrelliertheit $\not \Ra$ Stoch. Unabhängig! 

### Für Funktionen von Zufallsvariablen $g(x)$
$\E[g(\X)] = \sum \limits_{x \in \Omega'} g(x) \P_{\X} (x)\quad \stackrel{\wedge}{=}\quad \int \limits_{\R} g(x) f_X (x) \diff x$






## Varianz (2. zentrales Moment)
ist ein Maß für die Stärke der Abweichung vom Erwartungswert
\begin{emphbox}
$σ_{\X}^2 = \Var [X] = \E \big[(\X - \E[\X])^2\big] = \E[\X^2] - \E[\X]^2$ 
\end{emphbox}
$\Var [ \alpha \X + \beta] = \alpha^2 \Var [\X]$   $\Var [\X] = \Cov [\X,\X]$

$\Var \left[\sum \limits_{i=1}^n \X_i \right] = \sum \limits_{i=1}^{n} \Var [\X_i] + \sum\limits_{j \not= i} \Cov[\X_i, \X_j]$

**Standard Abweichung:** $\sigma = \sqrt{\Var[\X]}$	



## Kovarianz
Maß für den linearen Zusammenhang zweier Variablen
\begin{emphbox}
$\Cov [\X,\Y] = \E[(\X- \E[\X])(\Y - \E[\Y])^\top] = $

$ = \E [\X\Y^\top] - \E[\X] \E[\Y]^\top = \Cov[\Y, \X]$
\end{emphbox}
$\Cov [\alpha \X + \beta, \gamma \Y + \delta] = \alpha \gamma \Cov [\X, \Y]$ 

$\Cov [ \X + \textit U, \Y + \textit V] = \Cov [\X, \Y] + \Cov [\X, \textit V] + \Cov [\textit U, \Y] + \Cov [\textit U, \textit V]$ 

### Korrelation = standardisierte Kovarianz
$\rho(\X,\Y) = \frac{\Cov[\X,\Y]}{\sqrt{\Var[\X] \cdot \Var[\Y]}} = \frac{C_{x,y}}{σ_x \cdot σ_y}$ \qquad $\rho(\X,\Y) ∈ [-1;1]$

\subsubsection[Kovarianzmatrix]{Kovarianzmatrix für $\vec z = (\vec x, \vec y)^\top$}
$\Cov[\vec z] = \ma C_{\vec z} = \mat{C_{\X} & C_{\X\!\Y} \\ C_{\X\!\Y} & C_{\Y}} = \mat{\Cov[\X,\X] & \Cov[\X,\Y] \\ \Cov[\Y,\X] & \Cov[\Y,\Y]}$

Immer symmetrisch: $C_{xy} = C_{yx}$! Für Matrizen: $\ma C_{\vec x \vec y} = \ma C_{\vec y \vec x}^\top$



## Schiefe (3. zentrales Moment)
Maß für die Asymmetrie einer Wahrscheinlichkeitsverteilung.

$v(\X) = \E\left[ \left( \frac{\X - \E[\X]}{\sqrt{\Var[\X]}} \right)^3 \right]$ \qquad \parbox{4cm}{$v(\X) < 0$: links schief/flacher \\ $v(\X) > 0$: rechts schief/flacher}









## Hypothesen / Klassifizierung
Nullhypothese $H_0$ wird (zur Sicherheit) zu erst als wahr angenommen.

Alternativhypothese $H_1$ soll überprüft/gezeigt werden.

|		${}_{\text{Decision}}$\!{ $\diagdown$}\!${}^{\text{Reality}}$ | $H_1$ false {\small ($H_0$ true)} | $H_1$ true {\small ($H_0$ false)}
|----|----|
|$H_1$ rejected | **T**rue **N**egative | **F**alse **N**egative (Type 2)|
|\small ($H_0$ accepted) | $\P = 1-α$  | $\P = β$|
|$H_1$ accepted | **F**alse **P**ositive (Type 1) | **T**rue **P**ositive|
|\small($H_0$ rejected) | $\P = α$ | $\P = 1-β$
|
$\underset{\text{(Hit Rate)}}{\text{Sensitivity: }}\frac{\text{TP}}{\text{TP}+\text{FN}}=1-β$   Specificity: $\frac{\text{TN}}{\text{FP}+\text{TN}}=1-α$

Precision: $\frac{\text{TP}}{\text{TP}+\text{FP}}$  Accuracy: $\frac{\text{TP} + \text{TN}}{\text{P}+\text{N}} = \frac{2-α-β}{2}$





\part{Systemtheorie}

ToDo: Sprungantwort, Impulsantwort



**Beschreibung:** Um eine Beziehung zwischen Eingangs- und Ausgangsgrößen von Systemen herzusetellen, können entweder der zeitliche Verlauf der inneren Zustandsgrößen durch DGL oder die Amplitudenverstärkung und Phasenverschiebung im Frequenzbereich durch die Übertragungsfunktion beschrieben werden.

**Eigenschaften:** diskret/kontinuierlich, linear/nicht linear, deterministisch/stochastisch, zeitinvariant, 



## Dynamisches System $\vec y = \vec T(\vec x)$
Verhalten ist durch $n$ innere, stetige, energiespeichernde Zustandsgrößen $\vec x$ bestimmt, welche sich nicht sprunghaft ändern.

Grad der DGL entspricht Anzahl der Energiespeicherelemente.



mit $r$ Erregungen, $n$ Zustandsgrößen und $k$ Ausgängen.

## Zustandsraumdarstellung (für nicht LTI-Syteme)
\begin{emphbox}
|			Allgemeine Zustandsgleichung: | $\bs{ \dot {\vec x}}(t) = \ma A \vec x(t) + \ma B \vec u(t)$|
|Allgemeine Ausgangsgleichung: | $\vec y(t) = \ma C \vec x(t) + \ma D \vec u(t)$
\end{tabular}
\end{emphbox}

\setlength{\tabcolsep}{0em}
|		Zustandsvariable | $\vec x(t) \in \mathbb R^n$ | Systemmatrix | $\ma A\in \mathbb R^{n \times n}$ |
|Erregungsvektor | $\vec u \in \mathbb R^r$ | Einkopplungsmatrix | $\ma B \in \mathbb R^{n \times r}$ |
|Ausgangsvariable | $\vec y(t) \in \mathbb R^k$ | Auskopplungsmatrix | $\ma C \in \mathbb R^{k \times n}$ |
|| | Durchgangsmatrix | $\ma D \in \mathbb R^{k \times r}$ |
| 





## Differentialgleichungen (DGL) $n$-ter Ordnung
Gleichung mit Funktion $y$ und deren $n$-ten Ableitungen $y',y'',...$

$\displaystyle a_n y^{(n)} + ... + a_1 y' + a_0 y = b_m x^{(m)} + ... + b_1 x' + b_0 x$

Gesucht ist eine Funktion $y$ und keine Zahl! In der Praxis werden DGLs numerisch für diskrete Werte gelöst.

### DGL-Systeme
Jede DGL lässt sich reduzieren auf ein DGL-System 1. Ordnung:

1. Substituiere $x_i := y^{(i-1)}$ und drücke $\dot x_i$ durch $x_1,...,x_n$ aus.

$\Ra$ \boxed{ \dot{\vec x}(t) = \ma A \vec x(t) + \vec s(t) } \quad mit $\vec x_{\ir ges} = \vec x_{\ir hom} + \vec x_{\ir part}$

Hom. Lösung: 1. Bestimme EW $\lambda_i$ und Basis aus EV $\vec b_i$ von $\ma A$

2. $\vec x_{\ir hom} = \vec c \cdot e^{(x-x_0)\ma A} = \sum\limits_{i = 0}^n c_i \cdot e^{\lambda_i x} \cdot \vec b_i$

3. Bestimmung der Konstanten durch einsetzen der Anfangsbedingungen!\	



### Anfangswertproblem (AWP)
Anfangswertproblem AWP = DGL + Anfangsbedingung:

$a y''(t) + b y'(t) + c y(t) = s(t)$ \quad $y(0) = d, y'(0) = e$ 

### Randwertproblem (RWP)

### Wichtige DGL Arten
|	Transportgl.: | $\dot y + \vec v \nabla y = 0$ | Poissongl.: | $\Delta y = -f$|
|Wärmeleitung: |$\dot y = \Delta y$ | Wellengl.: | $\ddot y = \Delta y$|
|




## Die Übertragungsfunktion (ÜF)
Laplacetransformierte der System-DGL
\begin{emphbox} 
$\displaystyle \cx G(\cx s) = \frac{\cx Y(\cx s)}{\cx U(\cx s)} = \frac{\beta_r s^r + \ldots + \beta_1 s + \beta_0}{\alpha_n s^n + \ldots + \alpha_1 s + \alpha _0}$ 
\end{emphbox}

Linearfaktorenform: $G(s) = \frac{\beta_m}{\alpha_n} \frac{\prod (s-z_j)}{\prod (s-p_i)}$

Zeitkonstantenform: $G(s) = \frac{\beta_0}{\alpha_0} \frac{\prod (1+T_v s)}{\prod (1+T s)}$

Partialbruchform: $G(s) = A_0 \sum \frac{A_j}{s-p_j} = A_0 + G^+(s)$

Frequenzgang $\cx G(\j ω)$ entspricht ÜF $\cx G(\cx s)$ mit $\cx s = 0 + \j ω$

Amplitudengang: $|\cx G(\j ω)| = \sqrt{\Re{\cx G(\j ω)}^2 + \Im{\cx G(\j ω)}^2}$

Phasengang: $φ(\j ω) = \arctan\left( \frac{\Im{\cx G(\j ω)}}{\Re{\cx G(\j ω)}} \right)$




## Ortskurve/Freqenzgangfunk. $G(\j \omega)$
Plot der Übertragungsfunktion $\cx G(\cx s)$ in der komplexen Ebene in Abhängigkeit von $\cx s = \jω$.
Stellt Amplitudenverstärkung $A$ und Phasenverschiebung $\varphi$ der Systemantwort auf sinusförmigen Anregungen dar.

\begin{emphbox} 
$G(\j \omega) = A(\omega) e^{\j \varphi (\omega)} = \Re {G(\j \omega)} + \j \Im{G(\j \omega)}$ 
\end{emphbox}
\parbox{3cm}{ \<figure><img src="./img/OK_G.pdf" /></figure> } \quad
\parbox{4cm}{
*Einschwingzeit:* $T_{\ir Ein} \approx \frac{3}{\omega_{\ir D1}}$



Stabilitätskriterien mit Totzeit:

geschl. RK ist E/A **stabil** falls:

Phasenrad $\Phi_{\ir R} > 0$

Amplitudenrand $A_{\ir R} > 1$



$\Psi_{\ir R} \approx 30^\circ \Leftrightarrow $ gutes Störverhalten

$\Psi_{\ir R} \approx 60^\circ \Leftrightarrow $ gutes Folgeverhalten
}

|	**Kenngrößen:** | Bodediagramm:|
|Amplituden-Durchtrittsfrequenz $\omega_{D1}$: | $A(\omega_{D1}) = 1$|
|Phasen-Durchtrittsfrequenz $\omega_{D2}$ | $\varphi (\omega_{D2}) = - \pi = -180^\circ$|
|Phasenrand/Phasenreserve $\Psi_R$: | $\Psi_R = \varphi (\omega_{D1}) + \pi$|
|Amplitudenrand/-reserve $A_R$ $(= K_{\ir krit})$ | $\frac{1}{A_R} = A (\omega_{D2})$
\end{tabular}




## Stabilität
Ein System ist E/A stabil, falls für alle Pole $p_i$ der ÜF $\cx G(\cx s)$ gilt: $\Re{p_i} < 0$

Beispiele: Pol/Nullstellendiagramme (PN) und Impulsantworten $h$:

\setlength{\tabcolsep}{1mm}
|	\<figure><img src="./img/blocks/PN_1.pdf" /></figure> | \<figure><img src="./img/blocks/PN_2.pdf" /></figure> | \<figure><img src="./img/blocks/PN_3.pdf" /></figure> | \<figure><img src="./img/blocks/PN_4.pdf" /></figure> | \<figure><img src="./img/blocks/PN_5.pdf" /></figure> | \<figure><img src="./img/blocks/PN_6.pdf" /></figure> |
|\<figure><img src="./img/blocks/PN_1h.pdf" /></figure> | \<figure><img src="./img/blocks/PN_2h.pdf" /></figure> | \<figure><img src="./img/blocks/PN_3h.pdf" /></figure> | \<figure><img src="./img/blocks/PN_4h.pdf" /></figure> | \<figure><img src="./img/blocks/PN_5h.pdf" /></figure> | \<figure><img src="./img/blocks/PN_6h.pdf" /></figure> |
|stabil | stabil | stabil$^*$ | stabil$^*$ | instabil | instabil|
|

$^*$: An der Stabilitätsgrenze (Asymptotisch stabil)




## Systembausteine
|	
System | Zeitbereich | Frequenzbereich $G(s)$ |
|
P-System 		| $y(t) = K_{\ir P} u(t)$ 								| $K_{\ir P}$ |
|I-System 		| 	$\dot y(t) = K_{\ir I} u(t)$ 						| $\frac{K_{\ir I}}{s}$ |
|D-System 		| 	$y(t) = K_{\ir D} \dot u(t)$ 						| $K_{\ir D} s$ |
|Totzeitsystem 	| 	$y(t) = K u(t-T_t)$									| $K e^{-s T_t}$ |
|PT$_1$-Systeme 	| 	$T \dot y(t) + y(t) = K_{\ir P} u(t)$ 				| $\frac{K_{\ir P}}{1 +sT}$|
|PT$_2$-Systeme 	| 	$\ddot y(t) + 2D\omega_0 \dot y(t) + \omega_0^2 y$ 	| $K_{\ir P} \frac{\omega_0^2}{s^2 + 2D\omega_0 s+ \omega_0^2}$ |
||	$= K_{\ir P} \omega_0^2 u(t)$|
|
\end{tabular*}		












## Faltung von Signalen
Entspricht der Multiplikation im Frequenzbereich.

\begin{emphbox} 
$\displaystyle x(t) * h(t) = h(t) * x(t) = \int\limits_{-\infty}^{\infty} x(\tau) \cdot h(t-\tau) \diff \tau$
\end{emphbox}




## Regelungstechnik
\<figure><img src="./img/Regelkreis.pdf" /></figure>

|		Aufgabengröße | $y_A$ | Die zu beinflussende Größe|
|Führungsgröße | $w$ | Sollverlauf, Vorgabe|
|Regelgröße | $y$ | Die vom Sensor erfasste Größe|
|Regelfehler | $e = w-y$ | Differenz zwischen „Soll“ und „Ist“|
|Stellgröße | $u_{\ir S}$ | Vom Regler gesteuerte Größe|
|Störgrößen | $z_i$ | Nicht beeinflussbare Störungen|
|	



## Wichtige Fouriertransformationen
|		 Zeitfunktion |  Spektrum|
|\<figure><img src="./img/FT/dirac_t.pdf" /></figure> | \<figure><img src="./img/FT/dirac_f.pdf" /></figure>|
|\<figure><img src="./img/FT/1_t.pdf" /></figure> | \<figure><img src="./img/FT/1_f.pdf" /></figure>|
|\<figure><img src="./img/FT/sigma_t.pdf" /></figure> | \<figure><img src="./img/FT/sigma_f.pdf" /></figure>|
|\<figure><img src="./img/FT/verschiebung_t.pdf" /></figure> | \<figure><img src="./img/FT/verschiebung_f.pdf" /></figure>|
|\<figure><img src="./img/FT/rect_t.pdf" /></figure> |  \<figure><img src="./img/FT/rect_f.pdf" /></figure>|
|\<figure><img src="./img/FT/tri_t.pdf" /></figure> | \<figure><img src="./img/FT/tri_f.pdf" /></figure>|
|\<figure><img src="./img/FT/sin_t.pdf" /></figure> | \<figure><img src="./img/FT/sin_f.pdf" /></figure>|
|\<figure><img src="./img/FT/cos_t.pdf" /></figure> | \<figure><img src="./img/FT/cos_f.pdf" /></figure>|
|\<figure><img src="./img/FT/dirac_folge_t.pdf" /></figure> | \<figure><img src="./img/FT/dirac_folge_f.pdf" /></figure>
\end{tabular*}





\part{Elektrotechnik}


## Netzwerke
Seriell, Parallel

## Bauteile


## Leitungstheorie

## Leistung


\part{Physik}



\begin{symbolbox}
|		Lichtgeschwindigkeit | $\mathrm{c}_0 \equiv \frac{1}{\sqrt{\varepsilon_0 \mu_0}} := \SI{299 792 458}{\meter\per\second}$|
|Elementarladung | $\mathrm{e}  \approx \SI{1.602 177e-19}{\coulomb}$|
|<span style="font-variant: small-caps">Planck</span>-Konst. | $h \approx \SI{6,626 069 57e-34}{\joule\second}$|
|| $\hbar \equiv \frac{h}{2 \pi} \approx \SI{1.05457e-34}{\joule\second}$ |
|Elektr. Feldkonst. | $\varepsilon_0 = \SI{8.854 188e-12}{\farad\per\meter}$|
|Magn. Feldkonst. | $\mu_0 := 4\pi \times \SI{e-7}{\henry\per\meter}$|
|<span style="font-variant: small-caps">Avogadro</span>-Konst. | $N_{\ir A} \approx \SI{6.022 141e23}{\per\mole}$|
||Atomare Masse | $\mathrm{u} \approx \SI{1.660 539e-27}{\kilogram}$|
|Elektronenmasse | $m_e \approx \SI{9,109 383e-31}{\kilogram}$|
|Protonenmasse | $m_p \approx \SI{1,674 927e-27}{\kilogram}$|
|Neutronenmasse | $m_n \approx \SI{1,672 622e-27}{\kilogram}$|
||Gravitationskonst. | $\mathrm{G} \approx \SI{6,673 84e-11}{\kilogram\per\second\squared}$|
|<span style="font-variant: small-caps">Boltzmann</span>-Konst. | $k_{\ir B} \approx \SI{1.380 655e-23}{\joule\per\kelvin}$|
|
\end{symbolbox}



|		**Größe** | **Definition** | **Einheit** | **SI-Notation** |
|||Frequenz | $f = \frac{c}{\lambda}$ | Hertz | $\si{\hertz} = \si{ \per \second}$|
|Kraft | $ \vec F := m \cdot \vec a $ | Newton | $\si{\newton} = \si{\kilogram \meter \per \second \squared}$|
|Druck | $p := \frac{\vec F_\perp}{A}$ | Pascal | $\si{\pascal} = \si{\newton \per \meter \squared} = \si{\kilogram \per \meter \second \squared}$|
|${}^{\textstyle \text{Arbeit,}}_{\textstyle \text{Energie}}$ | $W := \int \vec F \diff \vec s$ | Joule | $\si{\joule} = \si{\newton\meter} = \si{\kilogram\meter \squared \per \second \squared}$ |
|Leistung | $P := \frac{\mathrm dW}{\mathrm dt}$ | Watt | $\si{\watt} = \si{\joule \per \second} = \si{\kilogram\meter \squared \per \second \cubed}$|
||Spannung | $U := \frac{W}{Q}$ | Volt | $\si{\volt} = \si{\watt \per \ampere} = \si{\kilogram\meter  \squared \per \ampere\second \cubed}$|
|Ladung | $Q:= \int I \diff t$ | Coulomb | $\si{\coulomb} = \si{\ampere\second}$|
|Resistivität | $R := \frac{\diff U}{\diff I}$ | Ohm | $\si{\ohm} = \si{\volt \per \ampere} = \si{\kilogram\meter  \squared \per \ampere  \squared\second \cubed}$|
|Kapazität | $C:= \frac{\diff Q}{\diff U}$ | Farad | $\si{\farad} = \si{\coulomb \per \volt} = \si{\ampere  \squared  \second \tothe{4}\per \kilogram\meter \squared}$|
|Induktivität | $L := \frac{\diff \Phi}{\diff I}$ | Henry | $\si{\henry} = \si{\volt\second \per\ampere} = \si{\kilogram\meter  \squared \per \ampere  \squared \second  \squared}$|
|${}^{\text{Magnetischer}}_{\textstyle \text{Fluss}}$ | $\Phi_{\ir M} := \int \vec B \diff \vec A$ | Weber | $\si{\weber} = \si{\volt\second} = \si{\kilogram\meter \squared \per \ampere\second \squared}$|
|${}^{\text{Magnetische}}_{\textstyle \text{Flussdichte}}$ | $\vec B := \mu_0 \vec H$ | Tesla | $\si{\tesla} = \si{\weber \per \meter  \squared} = \si{\kilogram \per \ampere\second \squared}$|
|
|	$\SI{1}{in} = \SI{2.54}{\centi\meter}$ | $\SI{1}{ft} = \SI{30.5}{\centi\meter}$ | $\si{\joule} \cdot e = \si{\electronvolt}$ |
|$\SI{1}{bar} = \SI{e5}{\pascal}$ | $\SI{1}{\angstrom} = \SI{e-10}{\meter}$ | $\SI{1}{\liter} = \SI{e-3}{\meter^3}$|
|



|		** Mechanik** |  Translation | { Rotation} (Radius $r$) |
|Strecke/Winkel |  $\vec x$ |  $\vec \varphi =  \frac{\vec x}{r}$|
|Geschwindigkeit |  $\vec v = \dot{\vec x}$ |  $\vec \omega = \dot{\vec \varphi} = \frac{\vec v}{r}$ |
|Beschleunigung |  $\vec a = \dot{\vec v} = \ddot{\vec x}$ |  $\vec \alpha = \dot{\vec \omega} = \ddot{\vec \varphi} = \frac{\vec a}{r}$ |
|Masse/Trägh. |  $m$ |  $\Theta = \int_V \vec r^2_\perp \diff m$ |
|Impuls/Drall |  $\vec p =m \vec v$ |  $\vec L = \ma \Theta \vec \omega = \vec r \times \vec p$ |
|Kraft/Moment |  $\vec F = \dot{\vec p} = m \vec a$ |   $\vec M = \dot{\vec L} = \ma \Theta \vec \alpha = \vec r \times \vec F$ |
|Energie |  $E_{\ir kin}=\frac12mv^2$ |  $E_{\ir rot}=\frac12 \Theta \omega ^2$|
|Leistung |  $P = \vec F \bdot \vec v$ |  $P = \vec M \bdot \vec \omega$|
|







\subsection[Wellen]{Wellen $\Psi(x,t)=A\cdot \cos(\omega t-\vec k^\top \vec x)$ (rechts laufend)}
\everymath{\displaystyle}
|	$\frac{1}{c^2}\frac{\partial^2\Psi}{\partial t^2} - \sum\limits_{i=1}^n \frac{\partial^2\Psi}{\partial x_i^2} = 0 $ |
$\begin{array}{l} c = \lambda f |
|
\everymath{\textstyle}	



## Optik \quad $n_1 < n_2$ \qquad $n^2 = \varepsilon_r \mu_r$
\setlength{\tabcolsep}{2pt}
|		\parbox{2.3cm}{ \<figure><img src="./img/brechung.pdf" /></figure> } |
\parbox{5cm}{ 
|			**Reflexion:** | \Large $\underset{\text{\small Einfallwinkel}}{\Huge \alpha_1} = \underset{\text{\small Ausfallwinkel}}{\huge -\alpha_2}$|
|**Brechung:** | \Large $\frac{\sin(\alpha)}{\sin(\beta)}=\frac{n_2}{n_1}=\frac{c_1}{c_2}=\frac{\lambda_1}{\lambda_2}$|
|

|			Brewster-Winkel: | $\tan(\alpha_B) = \frac{n_2}{n_1}$|
|Grenzwinkel: | $\sin(\alpha_G) = \frac{n_2}{n_1}$|
|
}

\end{tabular*}
\setlength{\tabcolsep}{4pt}
Phasensprung um $\pi$ bei (Total-)Reflexion am optisch dichteren Medium!


\end{document}
