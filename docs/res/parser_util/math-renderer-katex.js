
(\\newcommand\{)(\\[^}]*?)\}\{(.*)\}


<!-- Basics -->
\renewcommand{\quad}{&emsp;} <!--    -->
"\Ra": "\Rightarrow"
\newcommand{\ol}[1]{\overline{#1}}


\newcommand{\ma}[1]{\boldsymbol #1}
"\ir": "\rm"
"\i": "\text{i}"



<!-- "\diff": "\mathop{}\!\mathrm{\vphantom( d}" -->
"\diff": "\,\text{d}"


"\d": "\mathop{}\!\mathrm{\vphantom( d}"
"\bdot": "\boldsymbol \cdot"

\newcommand{\cx}[1]{\boldsymbol{#1}}
\newcommand{\cxc}[1]{\boldsymbol{#1}^{*}}


\newcommand{\abs}[1]{\left\vert{#1}\right\vert}
\newcommand{\norm}[1]{\left\lVert{#1}\right\rVert}
"\rang": "\text{rang}"
"\Sp": "\,\text{Sp}"
"\ker": "\,\text{ker}"

\newcommand{\mat}[1]{\begin{bmatrix} #1 \end{bmatrix}}

\DeclareMathOperator{\N}{\mathbb N}
\DeclareMathOperator{\R}{\mathbb R}
\DeclareMathOperator{\C}{\mathbb C}
\DeclareMathOperator{\K}{\mathbb K}



\newcommand{Ω}{\Omega}


"\P": "\operatorname{P}"

"\X": "\text{X}"
"\Y": "\text{Y}"


<!-- SI Units -->
"\siexp": "\,"
\newcommand{\SI}[2]{#1\,#2}
\newcommand{\si}[1]{#1}
"\per": "/"
"\squared": "^{2}"
"\cubed": "^{3}"
\newcommand{\tothe}[1]{^{#1}}

"\kilogram": "\text{kg}\siexp"
"\meter": "\text{m}\siexp"
"\second": "\text{s}\siexp"
"\ampere": "\text{A}\siexp"
"\kelvin": "\text{K}\siexp"
"\newton": "\text{N}\siexp"

"\hertz": "\text{Hz}\siexp"
"\pascal": "\text{Pa}\siexp"
"\volt": "\text{V}\siexp"
"\watt": "\text{W}\siexp"
"\joule": "\text{J}\siexp"
"\henry": "\text{H}\siexp"
"\farad": "\text{F}\siexp"
"\coulomb": "\text{C}\siexp"
"\ohm": "\Omega\siexp"
"\weber": "\text{Wb}\siexp"
"\tesla": "\text{T}\siexp"


"\grad": "\text{grad}"
"\div": "\text{div}"
"\rot": "\text{rot}"

"\oiint": "\iint"

"\ftsymbol": "\ \circ\:\!\!\!\!\!-\!\!\!\!\!\bullet\ "

"\FT": "\ftsymbol"
"\LT": "\ftsymbol"
"\DFT": "\ftsymbol"
"\DTFT": "\ftsymbol"
"\ZT": "\ftsymbol"


\DeclareMathOperator{\dirac}{\ensuremath{\delta}}
\DeclareMathOperator{\heavi}{\ensuremath{\theta}}
\DeclareMathOperator{\sinc}{sinc}
\DeclareMathOperator{\rect}{rect}
\DeclareMathOperator{\tri}{tri}
\DeclareMathOperator{\erf}{erf}
\DeclareMathOperator{\erfc}{erfc}



<!-- KaTeX Tweaks -->
\renewcommand{\ma}[1]{\mathbf{#1}}
\renewcommand{\P}{\mathrm{P}}
\renewcommand{\boldsymbol}[1]{\mathbf{#1}}
\renewcommand[1]{\operatorname}{\mathop{#1}}
