/* loads KaTeX and checks for math elements.

1. arithmatex from python-markdown
2. pandoc math
3. all

*/


KATEX_JS='https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.15.0/katex.min.js'
KATEX_CSS='https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.15.0/katex.min.css'


function loadKaTeX(renderCall=renderArithmatex) {
    var script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = KATEX_JS;
    script.onload = renderCall;

    var link  = document.createElement('link');
    link.id   = 'katex-css';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = KATEX_CSS;

    document.head.appendChild(script);
    document.head.appendChild(link);
}


AM_INLINE='span.arithmatex'
AM_DISPLAY='div.arithmatex'

PD_INLINE='math inline'
PD_DISPLAY='math display'

var macros = {
  "\\(": "",
  "\\)": "",
  "\\vec": "{\\boldsymbol #1}",
  "\\ma": "\\boldsymbol{#1}",
  "\\cx": "\\boldsymbol{#1}",
  "\\cxc": "\\boldsymbol{#1}^{*}",
  "\\diff": "\\mathrm{d}\\,",
  "\\mat": "\\begin{bmatrix} #1 \\end{bmatrix}",
  "\\vect": "\\begin{pmatrix} #1 \\end{pmatrix}",
  "\\abs": "\\left\\vert{#1}\\right\\vert",
  "\\norm": "\\left\\lVert{#1}\\right\\rVert",
  "\\ra": "\\rightarrow",
  "\\Sp": "\\mathrm{Sp}\\,",
  "\\rank": "\\mathrm{rank}\\,",
  "\\e": "\\mathrm{e}",
  "\\i": "\\boldsymbol{\\mathrm{i}}",
  "\\SI": "{#1\\;\\mathrm{#2}}",
  "\\squared": "{^{2}}",
  "\\cubed": "{^{3}}",
  "\\per": "/",
  "\\tera": "T",
  "\\giga": "G",
  "\\mega": "M",
  "\\kilo": "k",
  "\\milli": "m",
  "\\micro": "μ",
  "\\nano": "n",
  "\\kilogram": "\\text{kg}\\,",
  "\\meter": "\\text{m}\\,",
  "\\second": "\\text{s}\\,",
  "\\ampere": "\\text{A}\\,",
  "\\kelvin": "\\text{K}\\,",
  "\\mol": "\\text{mol}\\,",
  "\\candela": "\\text{cd}\\,",
  "\\newton": "\\text{N}\\,",
  "\\hertz": "\\text{Hz}\\,",
  "\\pascal": "\\text{Pa}\\,",
  "\\volt": "\\text{V}\\,",
  "\\watt": "\\text{W}\\,",
  "\\joule": "\\text{J}\\,",
  "\\henry": "\\text{H}\\,",
  "\\farad": "\\text{F}\\,",
  "\\coulomb": "\\text{C}\\,",
  "\\ohm": "\\Omega\\,",
  "\\weber": "\\text{Wb}\\,",
  "\\tesla": "\\text{T}\\,",
  "\\degree": "\\text{deg}\\,"
};



function renderPandocMath(){
  mathin = document.getElementsByClassName('math inline')
  Array.prototype.forEach.call(mathin, (el) => {
    try {
      katex.render(el.innerHTML, el, { displayMode: false, macros: macros })
    } catch (err) { el.innerHTML = `ERROR: ${err}` }
  })

  mathdis = document.getElementsByClassName('math display')
  Array.prototype.forEach.call(mathdis, (el) => {
    try {
      katex.render(el.innerHTML, el, { displayMode: true, macros: macros })
    } catch (err) { el.innerHTML = `ERROR: ${err}` }
  })
}


function renderArithmatex() {
    var maths = document.querySelectorAll('.arithmatex'), tex;

    for (var i = 0; i < maths.length; i++) {
      tex = maths[i].textContent || maths[i].innerText;
      if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
        katex.render(tex.slice(2, -2), maths[i], {'displayMode': false, macros: macros, throwOnError: false});
      } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
        katex.render(tex.slice(2, -2), maths[i], {'displayMode': true, macros: macros, throwOnError: false});
      }
    }
};


loadKaTeX();
