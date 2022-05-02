---
title: Demo of Interactive Features
---

# Demo of Interactive Features

This page is a showcase of the features that TeX4TUM provides and demonstrates how learning materials could be made interactive, fast accessible, and neat.

<!-- TODO This will be written into the todo-list -->

Click on the heading to unfold the definition box.


## Interactive Features

### Content Categories
Read only the content you really need. Use the options in the top right corner to change the visibility of the following content:<br>

??? abstract 
    
    The square root is the math function $\sqrt{\cdot}$.

??? example 

    Example $\sqrt{ x^4 } = x^2$

??? info "Explanation"

    This is an explanation.



Note: this is an attempt with syntax from tex4tum

 
Example: does this work?



### Interactive Equations

For a low-pass filter, the Cut-Off Frequency is 

$$f_c = \frac{1}{2\pi R C}$$

with the resistance $R$ and capacity $C$

Click on the equation to expand the legend.
For resistance $R$ = <span id="R_val" onclick="askValue(this.id)">10k</span>Ω and capacity $C$ = <span id="C_val" onclick="askValue(this.id)">100n</span>F the Cut-Off Frequency is $f_c$ = <tspan id="F_val">159 Hz</tspan>.
Click on the values of R and C in the text to change them!

<!-- Even more complex equations such as $\int \sqrt{x^2} \diff x = \frac{1}{3} x^3$ are rendered beautifully with [KaTex](https://khan.github.io/KaTeX/)). -->


### Interactive Diagrams
Play with diagrams for better understanding. Click and drag the black ray with the mouse or change any value in the diagram.


<!-- --8<-- "res/img/dynamic-images/fraction.svg" -->

<!-- <figure>
<object data="/res/img/dynamic-images/fraction.svg" type="image/svg+xml"></object>
</figure> -->


A new paragraph



![Interactive diagram of refraction.](fraction.svg)




#### Creating Diagrams from Code

```{#plot-normaldist .run .matplotlib caption='Normal Distribution'}
import numpy as np
import scipy.stats as st
import matplotlib.pyplot as plt

# figure setup
fig, ax = plt.subplots(figsize=(10, 5))
plt.xlabel('values')
plt.ylabel('probability')

# params
xmin = -4;  xmax = 4
mu1 = 0.0; sig1 = 1.0

# values
lx = np.arange(xmin, xmax, 0.01)
ly = st.norm.pdf(lx,mu1,sig1)
xfill = np.arange(-sig1, sig1, 0.01)
yfill = st.norm.pdf(xfill,mu1,sig1)

# plot
ax.plot(lx, ly, label="μ = 0, σ = 1", gid="whereisthis")  # outline
ax.fill_between(xfill, yfill, 0, alpha=0.2)

plt.legend()
```

 


```{.tikz}
\begin{tikzpicture}
  \begin{axis}[
    xlabel=$x$,
    ylabel={$f(x) = x^2 - x +4$}
  ]
  \addplot {x^2 - x +4};
  \end{axis}
\end{tikzpicture}
```





### Fast Fuzzy Search
Find an answer blazingly fast. The fuzzy search in the top bar displays results immediately without slow sever communication. Just hit `tab` to focus the search, then type e.g. "did" to search for "Diode".



## Basic Fomartting

### Tables
Tables are easily generated.

| Feature | Works |
|------|---|
| Tables | yes |
| MOSI | Master Out, Slave In |
| MISO | Master In, Slave Out |


### Abreviations
Furthermore, abbreviations such as USB, BIOS, SVG, or JPEG do not need explanations anymore. If you do not know it just move the mouse over it.





### Tab Boxes with MkDocs Syntax
You can use boxes with tabs for content that exists in similiar variations.

=== "Tab 1"

    This should by displayed in tab 1

=== "Tab 2"

    tabs are simply created by the headers


=== "Tab 3"

    and this is tab 3. Markdown *elements* and tex $\sqrt{3}$ are supported.




### Tab Boxes with JavaScript
You can use boxes with tabs for content that exists in similiar variations.

<div class="tabbbox" markdown>

#### Tab 1
This should by displayed in tab 1

#### Tab 2
tabs are simply created by the headers

#### Tab 3
and this is tab 3. Markdown *elements* and tex $\sqrt{3}$ are supported.

</div>

Also content after the tabbox is displayed normally.



## ToDo
* Full responsive design
* remember options with cookies
* consistent JS framework for interactive content
* Improved search: Sorting results, reaction to no results
* More content







## Feature Tests

### Content Categories

**Using Liquid Tags:**

{% definition %}The square root is the math function $\sqrt{\cdot}$.{% enddefinition %}
{% example %} Example $\sqrt{ x^4 } = x^2$ {% endexample %}
{% explanation %} $x^4 = x^{2+2} = x^2 \cdot x^2$  {% endexplanation %}
{% legend %} where $x$ is an arbitrary number {% endlegend %}



**Using Own Parser:**

Definition: The square root is the math function


Example: $\sqrt{ x^4 } = x^2$


Explanation: The answer is $x^2$ because $x^4 = x^{2+2} = x^2 \cdot x^2$


Legend: where $x$ is an arbitrary number




**Using Headings**


### Explanation of This
This is an explanation to demonstrate the auto detection of an explanation 


even over several lines


### Example Subsection
This is an example to demonstrate the auto detection of an example
even over several lines










<script type="text/javascript">
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

function getValue (str) {
  let prescale = 1
  let value = str.slice(0, -1)
  switch (str.slice(-1)) {
    case 'G': prescale = 1e9; break;
    case 'M': prescale = 1e6; break;
    case 'k': prescale = 1e3; break;
    case 'm': prescale = 1e-3; break;
    case 'u': prescale = 1e-6; break;
    case 'n': prescale = 1e-9; break;
    case 'p': prescale = 1e-12; break;
    default: value = str
  }
  return (Number(value) * prescale)
}

function RC_calcFrequency() {
 var C1 = getValue( document.getElementById("C_val").textContent );
 var R1 = getValue( document.getElementById("R_val").textContent );
 var F1 = document.getElementById("F_val");
 var freq = 1/(2 * Math.PI * C1 * R1);
 F1.textContent=freq.toPrecision(3)+" Hz";
 // tau.textContent=(R1 * C1 * 1000).toPrecision(3)+" ms";
}

function syncValues(id, value){
    RC_calcFrequency();
}
</script>


--8<-- "res/parser_util/abbreviations.md"
