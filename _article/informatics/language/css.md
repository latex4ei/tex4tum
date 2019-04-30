---
title: Cascading Style Sheets (CSS)
---

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.


Syntax: `SELECTOR { PROPERTY: VALUE; }`

### Example CSS
```css
html { font-family: sans-serif; }

body { 
	margin: 0; 
	padding: 1rem 0.5rem 0 0.5rem;  /* t, r, b, l */
}

.container{ 
	margin: auto; 
	max-width: 960px; 
}
```


## Box Model
All HTML elements can be considered as boxes with:

* **Content:** The content of the box, where text and images appear
* **Padding:** Empty area around the content.
* **Border:** A border that goes around the padding and content
* **Margin:** Empty area outside the border.


```diagram
+------------------------+
|        Margin          |
|   #================#   |
|   §    Padding     §   |
|   §  +----------+  §   |
|   §  | Content  |  §   |
|   §  +----------+  §   |
|   #====Border======#   |
+------------------------+
```

<!-- 
┌───────────────────────┐
│       Margin  ↕       │
│ ┏━━━━━━━━━━━━━━━━━━┓  │
│ ┃     Padding ↕    ┃  │ 
│ ┃   ┌──────────┐   ┃  │  
│ ┃   │ Content ↕│   ┃  │  
│ ┃   └──────────┘   ┃  │  
│ ┗━━━━━Border━━━━━━━┛  │ 
└───────────────────────┘
 -->

## Selectors
In CSS, selectors match elements to which a style applies.


| Pattern         | Matches                         | CSS</br>Version |
|-----------------|---------------------------------|---------|
| `*`             | any element                     | 2       |
| `E`             | element of type E, e.g. E=`div`  | 1       |
| `.c`            | all elements with `class="c"`     | 1       |
| `#myid`         | the element with `id="myid"`      | 1       |
| `E.c`           | E element whose class is "c" | 1       |
| `E#myid`        | E element with id"myid"      | 1       |
| `E F`           | F element somewhere within an E element |	1     |
| `E > F`         | F element if direct child of an E element |	2 |
| `E + F`         | F element immediately preceded by an E element | 2 |
| `E ~ F`         | F element preceded by an E element | 3 |
| `E[foo]`        | E element with a `foo` attribute | 	2 |
| `E[foo="bar"]`  | E element with attribute `foo="bar"` |	2 |
| `E:link`        | non visited hyperlink E             | 1 |
| `E:active`      | focused element E 	                | 1 |
| `E::first-line` | the first formatted line of E       | 1 |
| `E::first-letter` | the first formatted letter of E   | 1 |
| `E:first-child` | an E element, first child of its parent	| 2 |
| `E::before`     | generated content before an E element's content	| 2 |
| `E::after`      | generated content after an E element's content	| 2 |


## Properties
Order for `margin` and `padding`: top, right bottom, left


| Property     | Example Values                       |
|--------------|--------------------------------------|
| `margin`     | `1em 2em 0em 2em`                    |
| `border`     | `2px solid red`                      |
| `padding`    | `1em 2em`                            |
| `color`      | `red`                                |
| `font`       | `italic bold 12px Georgia`           |
| `text-align` | `center`, `left`, `right`, `justify` |
| `position`   | `static`, `relative`, `fixed`, `absolute`, `sticky` |
| `display`    | `none`, `inline`, `block`, `inline-block` |






## Units

* Colors: `red`, `#ff0000`, `rgb(255,0,0)`
* Absolute Lengths: `pt`, `px`, `pc`, `ex`, `in`, `mm`, `cm`
* Relative Lengths: `ex`,  `em`, `rem`, `ch`, `vw`, `vh`, `%`



| Absolute Length    |         |        |
|--------------------|---------|--------|
| Points (`pt`)      | 6pt     | 12pt   |
| Pixel (`px`)       | 8px     | 16px   |
| Pica (`pc`)        | 0.5pc   | 1.0pc  |
| Inch (`in`)        | 1/16 in | 1/8 in |
| Milli Meter (`mm`) |         |        |

The Dots per Inch (DPI) refers to the `pt` per `in`. The default is DPI=96.


### Relative Lengths


| Relative Lengths  |  |
|-----|----|
| quad-width      | `em`  |
| x-height        | `ex`  |
| Viewport width  | `vw`  |
| Viewport height | `vh`  |





## References
* [CSS Units](https://www.w3.org/Style/Examples/007/units.en.html)

