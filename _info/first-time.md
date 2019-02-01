---
title: LaTeX4EI becomes TeX4TUM!
---
<span class="lead">Interactive Knowledge Platform for Students</span>

We are happy to announce that we expand our scope. If you just looking for cheat sheets, do not worry, you find all of them under <a href="./sheets.html">“Sheets”</a> in the navigation bar.




## What is new?
* Interactive web-articles for direct access of often used [equations](/trigonometry), [diagrams](/op-amp), definitions, explanations and more!
* Powerfull, Matlab-styled, <a href="./calculator.html">Calculator</a> in your browser.
* English as main language. 
* Fast fuzzy searching: hit `tab` and type


## What is old and has changed?
* Our development is now open-source and entirely managed on [GitHub](https://github.com/latex4ei).
* Contributing to cheat sheets or articles is now easier than ever. Want to edit this file? Click on [edit]() in the top right corner.
* Bug reports for cheat sheets are now handled entirely on github, so please file an Issue there if you find mistakes in a sheet.



## What is old and stays the same?
* Our [Cheat Sheets](/sheets) of course! We have not forgotten why our website became so popular, so the cheat sheets will stay the same and will always be here for you. Promissed.



<!-- 
### Interactive Math
Directly calculate an equation while reading. Click on the values of R and C in the text to change them!

A RC low-pass filter with Resistance R = <span id="R_val" onclick="askValue(this.id)">10k</span>Ω and Capacitance C = <span id="C_val" onclick="askValue(this.id)">100n</span>F has a Cut-Off Frequency $f_c = \frac{1}{2\pi R C} =$ <tspan id="F_val">159 Hz</tspan><br>



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
 -->