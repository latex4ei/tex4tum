---
title: Negative Binomial Distribution
---


## Probability Mass Function

$$f(k, r, p) = \P( X = k ) = \binom{k+r-1}{k} p^k (1-p)^{r}$$
with the number of failures $r$, the number of successes $k$, and the success probability $p$.



{% include svg-object.html id="SVG_obj" filename="dist_negative_binomial.svg" description='Negative Binomial Distribution NB(k, r, p) over k for r = <span id="nbd_r">10</span> and p = <span id="nbd_p">0.3</span>' %}

<div class="row">
  <div class="col">
  <label>Input for r</label><br>
  <input type="range" id="r_range" min="0" max="20" value="10" step="1" list="tickmarks" oninput="nb_update(this)">
  </div>
  <div class="col">
  <label>Input for p</label><br>
  <input type="range" id="p_range" min="0" max="10" value="3" list="tickmarks" oninput="nb_update(this)"><br><br>
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
var SVG_BScales;
var Dist_nb = [10, 0.33];

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

function nb_update(slider){
  if (slider.id == 'p_range'){
    Dist_nb[1] = slider.value / 10.0;
  } else {
    Dist_nb[0] = slider.value / 1.0;
  }
  var r = Dist_nb[0];
  var p = Dist_nb[1];  
  document.getElementById('nbd_p').innerText = p
  document.getElementById('nbd_r').innerText = r
  SVG_obj.getElementById('legend_1').querySelector("text").innerHTML='r = '+r+', p = '+p

  line = SVG_obj.getElementById("markers_1")
  markers = line.children[0].children
  combs = SVG_obj.getElementById("LineCollection_1").children;

  for (var i = 0; i < markers.length; i++) {
    y = SVG_BScales[1] + (nbinompmf(i, r, p) * SVG_BScales[3])
    if(isNaN(y)) { y = SVG_BScales[1]; }
    markers[i].setAttribute('y', y)
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
function nbinompmf(k, r, p){ return ( binom(k+r-1, k) * Math.pow(p, k) * Math.pow(1.0 - p, r) ); }


document.getElementById("SVG_obj").addEventListener("load",function(){
    SVG_obj = document.getElementById("SVG_obj").contentDocument; // get inner DOM
    SVG_BScales = get_scale(SVG_obj);
}, false);
</script>
