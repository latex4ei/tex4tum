/* loads KaTeX and checks for math elements. 

1. arithmatex from python-markdown
2. pandoc math
3. all

*/


KATEX_JS='https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.js'
KATEX_CSS='https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css'


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
    "\\SI": "{#1\\,\\mathrm{#2}}",
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