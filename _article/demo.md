---
title: Interactive Cheat Sheets Demo
---

This is a showcase to demonstrate how learning materials could be made interactive, fast accessible, and neat.


## Features

### Control the Focus
Read only the content you really need. Use the options in the top right corner to change the visibility of the following content:<br>
<div class="definition">Definition: The square root is the math function $\sqrt{\cdot}$.<br></div>
<div class="example">Example: $\sqrt{ x^4 } = x^2$<br></div>
<div class="legend">Legend: where x is an arbitrary value</div>

Furthermore, abbreviations do not need explanations anymore. If you do not know it just move the mouse over it: SVG

### Interactive Math
Directly calculate an equation while reading. Click on the values of R and C in the text to change them!

A RC low-pass filter with Resistance R = <span id="R_val" onclick="askValue(this.id)">10k</span>Ω and Capacitance C = <span id="C_val" onclick="askValue(this.id)">100n</span>F has a Cut-Off Frequency $f_c = \frac{1}{2\pi R C} =$ <tspan id="F_val">159 Hz</tspan><br>

Even more complex equations such as
$\int \sqrt{x^2} \diff x = \frac{1}{3} x^3$
are rendered beautifully with [KaTex](https://khan.github.io/KaTeX/)).



### Interactive Diagrams
Play with diagrams for better understanding. Click and drag the black ray with the mouse or change any value in the diagram.

<object class="fig" style="width: 18em" id="obj_fraction" data="res/img/content-images/fraction.svg" type="image/svg+xml"></object>


### Fast Fuzzy Search
Find an answer blazingly fast. The fuzzy search in the top bar displays results immediately without slow sever communication. Just hit `tab` to focus the search, then type e.g. "did" to search for "Diode".



## Demo Pages
 * [Full Low-Pass Filter](low-pass.html) (Interactive Math)
 * [Maxwell Equations](maxwell.html) (Math Showcase)
 * [Number Converter](numbers.html) (Fast interactions)
 * [Op-Amps](op-amp.html) (SVG diagrams)
 * [Optics](optic.html) (Interactive Graph)


## ToDo
* Full responsive design
* remember options with cookies
* consistent JS framework for interactive content
* Improved search: Sorting results, reaction to no results
* More content



<script type="text/javascript">
function RC_calcFrequency() {
 var C1 = getValue( document.getElementById("C_val").textContent );
 var R1 = getValue( document.getElementById("R_val").textContent );
 var F1 = document.getElementById("F_val");
 var freq = 1/(2 * Math.PI * C1 * R1);
 F1.textContent=freq.toPrecision(3)+" Hz";
 tau.textContent=(R1 * C1 * 1000).toPrecision(3)+" ms";
}

function syncValues(id, value){
    RC_calcFrequency();
}
</script>
