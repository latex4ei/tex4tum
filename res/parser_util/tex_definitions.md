\newcommand{\DeclareMathOperator}[1]{\mathop{#1}}

<!-- Basics -->
\renewcommand{\quad}{&emsp;} <!--    -->
\newcommand{\ra}{\rightarrow}
\newcommand{\Ra}{\Rightarrow}
\newcommand{\ol}[1]{\overline{#1}}
\newcommand{\ul}[1]{\underline{#1}}

\newcommand{\ir}{\rm}

\newcommand{\i}{\text{i}}
\newcommand{\e}{\mathrm{e}}

\renewcommand{\vec}[1]{\boldsymbol #1}
\newcommand{\ma}[1]{\boldsymbol{#1}}
\newcommand{\cx}[1]{\boldsymbol{#1}}
\newcommand{\cxc}[1]{\boldsymbol{#1}^{*}}

\newcommand{\mat}[1]{\begin{bmatrix} #1 \end{bmatrix}}
\newcommand{\vect}[1]{\begin{pmatrix} #1 \end{pmatrix}}

<!-- \newcommand{\diff}{\mathop{}\!\mathrm{\vphantom( d}} -->
\newcommand{\diff}{\,\text{d}}

\newcommand{\d}{\mathop{}\!\mathrm{\vphantom( d}}
\newcommand{\bdot}{\pmb{\cdot}}

\newcommand{\abs}[1]{\left\vert{#1}\right\vert}
\newcommand{\norm}[1]{\left\lVert{#1}\right\rVert}
\newcommand{\rang}{\text{rang}}
\newcommand{\arccot}{\text{arccot}}
\newcommand{\Sp}{\,\text{Sp}}
\newcommand{\ker}{\,\text{ker}}

\DeclareMathOperator{\N}{\mathbb N}
\DeclareMathOperator{\R}{\mathbb R}
\DeclareMathOperator{\C}{\mathbb C}
\DeclareMathOperator{\K}{\mathbb K}
\DeclareMathOperator{\O}{\mathcal O}

\newcommand{\P}{\mathop{P}}
\newcommand{\Y}{\textit{Y}}
\newcommand{\T}{\textit{T}}
\newcommand{\X}{\textit{X}}

<!-- SI Units -->
<!--=============================================================== -->
\newcommand{\siexp}{\,}
\newcommand{\SI}[2]{#1\,\mathrm{#2}}
\newcommand{\si}[1]{#1}
\newcommand{\per}{/}
\newcommand{\squared}{^{2}}
\newcommand{\cubed}{^{3}}
\newcommand{\tothe}[1]{^{#1}}

\newcommand{\tera}{T}
\newcommand{\giga}{G}
\newcommand{\mega}{M}
\newcommand{\kilo}{k}
\newcommand{\milli}{m}
\newcommand{\micro}{\micro}
\newcommand{\nano}{\nano}

\newcommand{\kilogram}{\text{kg}\siexp}
\newcommand{\meter}{\text{m}\siexp}
\newcommand{\second}{\text{s}\siexp}
\newcommand{\ampere}{\text{A}\siexp}
\newcommand{\kelvin}{\text{K}\siexp}
\newcommand{\mole}{\text{mol}\siexp}
\newcommand{\mol}{\text{mol}\siexp}
\newcommand{\candela}{\text{cd}\siexp}
\newcommand{\newton}{\text{N}\siexp}

\newcommand{\hertz}{\text{Hz}\siexp}
\newcommand{\pascal}{\text{Pa}\siexp}
\newcommand{\volt}{\text{V}\siexp}
\newcommand{\watt}{\text{W}\siexp}
\newcommand{\joule}{\text{J}\siexp}
\newcommand{\henry}{\text{H}\siexp}
\newcommand{\farad}{\text{F}\siexp}
\newcommand{\coulomb}{\text{C}\siexp}
\newcommand{\ohm}{\Omega\siexp}
\newcommand{\weber}{\text{Wb}\siexp}
\newcommand{\tesla}{\text{T}\siexp}
\newcommand{\degree}{\text{deg}\siexp}

\newcommand{\grad}{\text{grad}}
\newcommand{\div}{\text{div}}
\newcommand{\rot}{\text{rot}}

\newcommand{\ftsymbol}{\ \circ\:\!\!\!\!-\!\!\!\bullet\ }

\newcommand{\FT}{\ftsymbol}
\newcommand{\LT}{\ftsymbol}
\newcommand{\DFT}{\ftsymbol}
\newcommand{\DTFT}{\ftsymbol}
\newcommand{\ZT}{\ftsymbol}

\newcommand\oiint{\mathop{\circ\!\!\!\iint}}

\DeclareMathOperator{\dirac}{\ensuremath{\delta}}
\DeclareMathOperator{\heavi}{\ensuremath{\theta}}
\DeclareMathOperator{\sinc}{sinc}
\DeclareMathOperator{\rect}{rect}
\DeclareMathOperator{\tri}{tri}
\DeclareMathOperator{\erf}{erf}
\DeclareMathOperator{\erfc}{erfc}

<!-- KaTeX Tweaks -->
\newcommand{\underset}[2]{\tiny\begin{matrix}\\ \normalsize #2 \\[1em] \scriptsize #1 \end{matrix}}
\renewcommand{\operatorname}[1]{\mathop{#1}}
