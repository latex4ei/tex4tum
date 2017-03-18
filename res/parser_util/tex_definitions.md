

\newcommand{\DeclareMathOperator}[1]{\mathop{#1}}

<!-- Basics -->
\renewcommand{\quad}{&emsp;} <!--    -->
\newcommand{\Ra}{\Rightarrow}
\newcommand{\ol}[1]{\overline{#1}}


\newcommand{\ma}[1]{\boldsymbol #1}
\newcommand{\ir}{\rm}
\newcommand{\i}{\text{i}}



<!-- \newcommand{\diff}{\mathop{}\!\mathrm{\vphantom( d}} -->
\newcommand{\diff}{\,\text{d}}


\newcommand{\d}{\mathop{}\!\mathrm{\vphantom( d}}
\newcommand{\bdot}{\boldsymbol \cdot}

\newcommand{\cx}[1]{\boldsymbol{#1}}
\newcommand{\cxc}[1]{\boldsymbol{#1}^{*}}


\newcommand{\abs}[1]{\left\vert{#1}\right\vert}
\newcommand{\norm}[1]{\left\lVert{#1}\right\rVert}
\newcommand{\rang}{\text{rang}}
\newcommand{\Sp}{\,\text{Sp}}
\newcommand{\ker}{\,\text{ker}}

\newcommand{\mat}[1]{\begin{bmatrix} #1 \end{bmatrix}}	

\DeclareMathOperator{\N}{\mathbb N}						% Natürliche Zahlen
\DeclareMathOperator{\R}{\mathbb R}						% Reele Zahlen
\DeclareMathOperator{\C}{\mathbb C}						% Komplexe Zahlen
\DeclareMathOperator{\K}{\mathbb K}						% Reele oder komplexe Zahlen



\newcommand{\P}{\mathop{P}}

\newcommand{\Y}{\textit{Y}}
\newcommand{\T}{\textit{T}}
\newcommand{\X}{\textit{X}}


<!-- SI Units -->
<!--=============================================================== -->
\newcommand{\siexp}{\,}
\newcommand{\SI}[2]{#1\,#2}
\newcommand{\si}[1]{#1}
\newcommand{\per}{/}
\newcommand{\squared}{^{2}}
\newcommand{\cubed}{^{3}}
\newcommand{\tothe}[1]{^{#1}}

\newcommand{\kilogram}{\text{kg}\siexp}
\newcommand{\meter}{\text{m}\siexp}
\newcommand{\second}{\text{s}\siexp}
\newcommand{\ampere}{\text{A}\siexp}
\newcommand{\kelvin}{\text{K}\siexp}
\newcommand{\mole}{\text{mol}\siexp}
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

\DeclareMathOperator{\dirac}{\ensuremath{\delta}}			% Dirac Distribution
\DeclareMathOperator{\heavi}{\ensuremath{\theta}}			% Heaviside Step Function
\DeclareMathOperator{\sinc}{sinc}							% Sinus Cardinalis
\DeclareMathOperator{\rect}{rect}							% Rectangular
\DeclareMathOperator{\tri}{tri}								% Triangular
\DeclareMathOperator{\erf}{erf}								% Error Function
\DeclareMathOperator{\erfc}{erfc}							% Error Function



<!-- KaTeX Tweaks -->

\newcommand{\underset}[2]{\tiny\begin{matrix}\\ \normalsize #2 \\[1em] \scriptsize #1 \end{matrix}}

\renewcommand{\ma}[1]{\mathbf{#1}}
\renewcommand{\rm}{}
\renewcommand{\P}{\mathrm{P}}
\renewcommand{\boldsymbol}[1]{\mathbf{#1}}
\renewcommand{\operatorname}[1]{\mathop{#1}}



