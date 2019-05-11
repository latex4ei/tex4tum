---
title: Binomial Distribution
---

Repeated Bernoulli trials, such as repeated coin tosses.


**Urn Model:** 1 urn with $N$ balls ($pN$ red and $(1-p)N$ black). Probability to draw $k$ red balls with $n$ trials while putting the ball back after each trial.

| Parameters  |                           |
|-------------|---------------------------|
| Notation    | $\text{B}(n, p)$          |
| Support     | $k \in \{0, 1, ..., n \}$ |
| Mean        | $n \cdot p$               |
| Variance    | $np(1-p)$                 |
| PMF         | $f(k, n, p) = \binom{n}{k} p^k (1-p)^{n-k}$ |


## Probability Mass Function

$$f(k, n, p) = \P( X = k ) = \binom{n}{k} p^k (1-p)^{n-k}$$
with the number of trials $n$, the number of successes $k$, and the success probability $p$.



{% include svg-object.html id="SVG_obj" filename="binomial.svg" description='Binomial Distribution B(k, n, p) over k for n = <span id="bd_n">30</span> and p = <span id="bd_p">0.3</span>' %}

<div class="row">
  <div class="col">
  <label>Input for p</label><br>
  <input type="range" id="p_range" min="0" max="10" value="3" list="tickmarks" oninput="update(this)"><br><br>
  </div>
  <div class="col">
  <label>Input for n</label><br>
  <input type="range" id="n_range" min="0" max="40" value="30" step="1" list="tickmarks" oninput="update(this)">
  </div>
</div>


```python
import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as st

n = 30; p1 = 1/6.0; p2 = 0.5;

lx = np.arange(0,n+1)
plt.plot(lx, st.binom.pmf(lx, n, p1), label='n= 30, p= 1/6 ' )
plt.plot(lx, st.binom.pmf(lx, n, p2), label='n= 30, p= 1/2 ' )
plt.show()
```


## References
* [Common Probability Distributions: The Data Scientist’s Crib Sheet](https://blog.cloudera.com/blog/2015/12/common-probability-distributions-the-data-scientists-crib-sheet/)
* [Wikipedia: Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution)


<script>
var SVG_obj;
var SVG_Scales;
var Dist_values = [30, 0.33];

function get_scale(SVG_obj, xtick0=1, ytick0=1, xtickscale=NaN, ytickscale=NaN){
  var x0 = parseFloat( SVG_obj.getElementById("xtick_"+xtick0).querySelector("use").getAttribute('x') )
  var y0 = parseFloat( SVG_obj.getElementById("ytick_"+ytick0).querySelector("use").getAttribute('y') )
  var x1 = parseFloat( SVG_obj.getElementById("xtick_"+(xtick0+1)).querySelector("use").getAttribute('x') )
  var y1 = parseFloat( SVG_obj.getElementById("ytick_"+(ytick0+1)).querySelector("use").getAttribute('y') )
  var xtickscale = parseFloat( SVG_obj.getElementById("xtick_"+(xtick0+1)).querySelector("text").textContent )
  var ytickscale = parseFloat( SVG_obj.getElementById("ytick_"+(ytick0+1)).querySelector("text").textContent )
  var xscale = (x1 - x0) / xtickscale
  var yscale = (y1 - y0) / ytickscale
  return [x0, y0, xscale, yscale]
}

function update(slider){
  if (slider.id == 'p_range'){
    Dist_values[1] = slider.value / 10.0;
  } else {
    Dist_values[0] = slider.value;
  }
  var n = Dist_values[0];
  var p = Dist_values[1];  
  document.getElementById('bd_p').innerText = p
  document.getElementById('bd_n').innerText = n
  SVG_obj.getElementById('legend_1').querySelector("text").innerHTML='n= '+n+', p= '+p

  line = SVG_obj.getElementById("markers_1")
  markers = line.children[0].children
  combs = SVG_obj.getElementById("LineCollection_1").children;

  for (var i = 0; i < markers.length; i++) {
    y = SVG_Scales[1] + (binompmf(i, n, p) * SVG_Scales[3])
    if(isNaN(y)) { y = SVG_Scales[1]; }
    markers[i].setAttribute('y', y)
    // console.log("seg:", combs[i].getPathData().getItem(0));  // not implemented yet
    var d = combs[i].getAttribute('d')
    combs[i].setAttribute('d', d.replace(/[LlvVhH].+/, "V "+y));
  }
}


function binom(n, k) {
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
}
function binompmf(k, n, p){ return ( binom(n, k) * Math.pow(p, k) * Math.pow(1.0 - p, n - k) ); }


document.getElementById("SVG_obj").addEventListener("load",function(){
    SVG_obj = document.getElementById("SVG_obj").contentDocument; // get inner DOM
    SVG_Scales = get_scale(SVG_obj);
}, false);
</script>
