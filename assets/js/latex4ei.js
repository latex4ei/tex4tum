/*
 * Library for LaTeX4Ei
 */

window.onload = function () {
  parent.syncValues('all', 0)
}

// renders math with KaTeX
function renderMath () {
  // Old rendering for Pandoc "latexmathml" option
  // var math = document.getElementsByClassName("LaTeX");  // LaTeX, math
  // Array.prototype.forEach.call(math, function (el) {
  //     inner = el.innerHTML;
  //     if (inner[1] == "$") {
  //         tex = el.innerHTML.split("$")[2].replace(/&amp;/g, '&');
  //         displaystyle = true;
  //         font_size='\\large '
  //     } else {
  //         tex = el.innerHTML.split("$")[1].replace(/&amp;/g, '&');
  //         displaystyle = false;
  //         font_size=''
  //     }
  //     try {
  //         katex.render(font_size+tex, el, {displayMode: displaystyle});
  //     } catch (err) {
  //         el.innerHTML = "ERROR: " + err;
  //     }
  // });

  // render elements from Pandoc "katex" option, class names are "math inline" and "math display"
  // var mathels = [];
  // mathels = Array.prototype.concat.apply(mathels, document.getElementsByClassName("math inline"));
  // mathels = Array.prototype.concat.apply(mathels, document.getElementsByClassName("math display"));

  mathin = document.getElementsByClassName('math inline')
  Array.prototype.forEach.call(mathin, (el) => {
    try {
      katex.render(el.innerHTML.replace(/&amp;/g, '&'), el, { displayMode: false })
    } catch (err) { el.innerHTML = `ERROR: ${err}` }
  })

  mathdis = document.getElementsByClassName('math display')
  Array.prototype.forEach.call(mathdis, (el) => {
    try {
      katex.render(el.innerHTML.replace(/&amp;/g, '&'), el, { displayMode: true })
    } catch (err) { el.innerHTML = `ERROR: ${err}` }
  })
}

// load file from server
// @TODO Unused
function loadDocumentIntoElement (url, element) {
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () { // callback function
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      element.innerHTML = xhttp.responseText
    }
  }
  xhttp.open('GET', url, true)
  xhttp.send()
}

// @TODO Unused
function w3IncludeHTML () {
  let z; let i; let a; let file; var
    xhttp
  z = document.getElementsByTagName('*')
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute('w3-include-html')) {
      a = z[i].cloneNode(false)
      file = z[i].getAttribute('w3-include-html')
      var xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute('w3-include-html')
          a.innerHTML = xhttp.responseText
          z[i].parentNode.replaceChild(a, z[i])
          w3IncludeHTML()
        }
      }
      xhttp.open('GET', file, true)
      xhttp.send()
      return
    }
  }
}

// @TODO Unused
function addLoadEvent (func) {
  const oldonload = window.onload
  if (typeof window.onload !== 'function') {
    window.onload = func
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload()
      }
      func()
    }
  }
}

// gets the value of a String with prefix
function getValue (str) {
  let prescale = 1
  let value = str.slice(0, -1)
  switch (str.slice(-1)) {
    case 'G':
      prescale = 1e9
      break
    case 'M':
      prescale = 1e6
      break
    case 'k':
      prescale = 1e3
      break
    case 'm':
      prescale = 1e-3
      break
    case 'u':
      prescale = 1e-6
      break
    case 'n':
      prescale = 1e-9
      break
    case 'p':
      prescale = 1e-12
      break
    default:
      value = str
  }
  return (Number(value) * prescale)
}

function askValue (clicked_id) {
  const el = document.getElementById(clicked_id)
  const newval = prompt('Please enter new Value', el.textContent)
  if (isNaN(getValue(newval))) {
    el.textContent = 'NaN'
  } else {
    el.textContent = newval
  }
  parent.syncValues(clicked_id, newval)
}

// SVG
// ========================================
// @TODO Unused
function loadSVGDocObj (obj_id, svg_id) {
  el = document.getElementById(obj_id)
  el.addEventListener('load', () => {
    svg_obj = document.getElementById(svg_id)
    svg_obj = el.contentDocument // get inner DOM
  }, false)
}

function replaceSVG (svg_id, svg_path) {
  const newobj = document.createElement('object')
  const oldobj = document.getElementById(svg_id)
  newobj.id = svg_id
  newobj.data = `res/img/content-images/${svg_path}`
  newobj.type = 'image/svg+xml'
  oldobj.parentNode.insertBefore(newobj, oldobj)
  oldobj.parentNode.removeChild(oldobj)
  // document.getElementById(svg_id).data = svg_path;
}

// @TODO Unused
function plotSVG (svg_obj, func, xmin, xmax, ymax) {
  const segments = svg_obj.getElementById('y2_line').pathSegList
  const dx = (xmax - xmin) / segments.numberOfItems
  const scale = 200 / ymax
  segments.getItem(0).y += -func(xmin) * scale
  let last_y = -func(xmin) * scale
  for (let i = 1, len = segments.numberOfItems; i < len; ++i) {
    const segment = segments.getItem(i)
    // segment.x = 70;
    segment.y = -scale * func(xmin + i * dx) - last_y
    last_y += segment.y
  }
}

// create a function that can be called to show the tooltip
// @TODO Unused
function SVG_registerTooltip (svg_obj) {
  svg_obj.addEventListener('mousedown', SVG_showTooltip, false)
}

// @TODO Unused
const plot_obj = {
  svg_obj, func, xmin, xmax
}

// @TODO Unused
function SVG_showTooltip (event) {
  const mousex = event.pageX
  mousey = event.pageY
  const plotwidth = 0

  const origin = { x: svg_obj.svg_obj.getElementById('origin').x, y: svg_obj.getElementById('origin').y }
  const yvalue = xmin
}
