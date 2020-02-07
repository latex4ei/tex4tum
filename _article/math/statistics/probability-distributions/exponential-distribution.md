---
title: Exponential Distribution
---

Time until an event that occurs at rate $\lambda$.

Corresponds to a Geometric Distribution for infinite trials of infinitesimal small time slices, such as seconds till the next email arrives.




## Probability Density Function

<!-- $$f(x;\lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0, \\\\ 0 & x < 0. \end{cases}$$ -->

$$f(x;\lambda) = \lambda e^{-\lambda x} \qquad x \gt 0$$
with the rate parameter $\lambda$.


{% include svg-object.html id="SVG_exp" filename="dist_exponential.svg" description='Exponential Distribution Exp(λ) with λ = <span id="par_lam">1.0</span>' %}

<div class="row">
  <div class="col">
  <label>Input for λ</label><br>
  <input type="range" id="lamda_range" min="1" max="10" value="10" list="tickmarks" oninput="exp_update(this)"><br><br>
  </div>
</div>


```python
import numpy as np
import matplotlib.pyplot as plt
import scipy.stats as st

n = 6
lam1 = 1; lam2 = 0.4
scale1 = 1/lam1; scale2 = 1/lam2
lx = np.arange(0,n,0.1)

plt.plot(lx, st.expon.pdf(lx, 0, scale1), label="λ = {}".format(lam1) )
plt.plot(lx, st.expon.pdf(lx, 0, scale2), label="λ = {}".format(lam2) )
plt.show()
```


## References
* [Common Probability Distributions: The Data Scientist’s Crib Sheet](https://blog.cloudera.com/blog/2015/12/common-probability-distributions-the-data-scientists-crib-sheet/)
* [Wikipedia: Exponential Distribution](https://en.wikipedia.org/wiki/Exponential_distribution)


<script>
var SVG_exp;
var SVG_Scales;
var Dist_values = [30, 0.33];

function get_scale(SVG_exp, xtick0=1, ytick0=1, xtickscale=NaN, ytickscale=NaN){
  var x0 = parseFloat( SVG_exp.getElementById("xtick_"+xtick0).querySelector("use").getAttribute('x') )
  var y0 = parseFloat( SVG_exp.getElementById("ytick_"+ytick0).querySelector("use").getAttribute('y') )
  var x1 = parseFloat( SVG_exp.getElementById("xtick_"+(xtick0+1)).querySelector("use").getAttribute('x') )
  var y1 = parseFloat( SVG_exp.getElementById("ytick_"+(ytick0+1)).querySelector("use").getAttribute('y') )
  var xtickscale = parseFloat( SVG_exp.getElementById("xtick_"+(xtick0+1)).querySelector("text").textContent )
  var ytickscale = parseFloat( SVG_exp.getElementById("ytick_"+(ytick0+1)).querySelector("text").textContent )
  var xscale = (x1 - x0) / xtickscale
  var yscale = (y1 - y0) / ytickscale
  return [x0, y0, xscale, yscale]
}

function SVG_path_segs(path){ return path.getAttribute('d').split(/\s*[LlVvHh]\s*/); }

function exp_update(slider){
  lambda = slider.value/10;
  path = SVG_exp.getElementById("line2d_34").children[0]
  segs = SVG_path_segs(path)
  for (var i = 0; i < segs.length; i++) {
    x = i / 10;  // / SVG_Scales[2];   * 50 / 500
    y = SVG_Scales[1] + lambda * Math.exp(-lambda * x) * SVG_Scales[3];
    segs[i] = segs[i].replace(/(?<=\d )(\d+(?:\.\d+))/, y)
  }
  path.setAttribute('d', segs.join(" L "))
  SVG_exp.getElementById('legend_1').querySelector("text").innerHTML="λ = "+lambda
}

document.getElementById("SVG_exp").addEventListener("load",function(){
    SVG_exp = document.getElementById("SVG_exp").contentDocument; // get inner DOM
    SVG_Scales = get_scale(SVG_exp);
}, false);
</script>
