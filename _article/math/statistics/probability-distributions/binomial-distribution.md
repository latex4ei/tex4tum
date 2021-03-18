---
title: Binomial Distribution
---

The Binomial Distribution is the discrete probability distribution of the number of successes in a sequence of repeated Bernoulli trials, such as repeated coin tosses.

<div class="float-right">

| Parameters  |                           |
|-------------|---------------------------|
| Notation    | $\text{B}(n, p)$          |
| Support     | $k \in \{0, 1, ..., n \}$ |
| Mean        | $n \cdot p$               |
| Variance    | $np(1-p)$                 |
| PMF         | $f(k, n, p) = \binom{n}{k} p^k (1-p)^{n-k}$ |

</div>



## Probability Mass Function

$$f(k, n, p) = \P( X = k ) = \binom{n}{k} p^k (1-p)^{n-k}$$
with the number of trials $n$, the number of successes $k$, and the success probability $p$.


### Explanation of the Terms
The term $p^k$ gives us the probability to get exactly $k$ successes in a row of $k$ trials. Since we have $n$ trials and not $k$, the term $(1-p)^{n-k}$ gives us the probability to get only misses (or failures) for the remaining $n-k$ trials. Since the successes can appear anywhere among the $n$ trials, we multiply by the term $\binom{n}{k}$, which corresponds to the number of possible permutations of $k$ successes within the $n$ trials.



### Example Coin Tosses
Imagine we toss a fair coin 10 times. The outcome of each toss is either head or tail. The binomial distribution gives us the probability to get a certain amount of heads (or tails).

For example, we can ask: What is the probability to get 7 heads? Answer:

$$P(k=7, n=10, p=0.5) = \binom{10}{7} 0.5^7 (1-0.5)^{10-7} = 0.117$$




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



## Cumulative Distribution Function
The cumulative distribution function states the probability to get *at least* $k$ successes.

$$F(k;n,p)=\Pr(X\leq k)=\sum_{i=0}^{\lfloor k\rfloor }{n \choose i}p^{i}(1-p)^{n-i}$$
where $\lfloor k\rfloor$ is the greatest integer less than or equal to k.




## Urn Model
We have 1 urn with $N$ balls ($pN$ red and $(1-p)N$ black). The binomial distribution describes the probability to draw $k$ red balls from the urn with $n$ trials while putting the balls back into the urn after each trial.


### Example Urn
Imagine an urn with 20 balls, 8 are red and 12 are black. We draw 15 times from the urn. What is the probability to get 9 black balls? Answer:

$$P(k=6, n=15, p=0.4) = P(k=9, n=15, p=0.6) = \binom{15}{6} 0.4^6 \cdot 0.6^9 = 0.206$$

Note that in the urn model, $n$ is not the number of balls in the urn but the number of draws.



## Properties

* **Sum of Binomials:** The sum of two binomial distributions is again a binomial distribution. If $X ~ B(n, p)$ and $Y ~ B(m, p)$ are independent binomial variables with the same probability $p$, then $X + Y ~ B(n+m, p)$

* **Normal Approximation:** If $n$ is large enough, $B(n, p)$ can be approximated as normal distribution $\mathcal{N}(np,\; np(1-p))$. As a rule of thumb, $n$ is large enough if 
$n \gt 9\left(\frac{1-p}{p}\right)\ \text{and}\ n \gt 9\left(\frac{p}{1-p}\right)$

* The binomial distribution is the generalization of the Bernoulli trial, which can be expressed as a binomial distribution with $n = 1$.




## Implementations

{% tabbox %}

#### Python

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


#### Matlab

```matlab
N = 10; 
p = 0.5;

x = 0:N;
y = binopdf(x,N,p);

figure
bar(x,y,1)
xlabel('Observation')
ylabel('Probability')
```

#### R

```
N <- 20
p <- 0.5

x <- 0:N
y <- dbinom(x, size=N, prob=0.2) 

plot(x, y)
```


{% endtabbox %}



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
