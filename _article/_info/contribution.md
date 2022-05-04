---
title: Contribution
icon: edit
---

This article describes how you can contribute or edit articles.

If you want to contribute or edit an article do the following:

1. fork [the repository on github](https://github.com/latex4ei/tex4tum) and clone it locally.
2. edit the corresponding `.md` file in the folder '`_article`' or create a new one.
3. once finished, push the changes to GitHub and create a pull request.

## What content is suitable for Tex4TUM?
Before you start writing, think twice. 

1. A TeX4TUM article should mostly consist of diagrams, tables, and equations. Text paragraphs should only be used as a last method to explain details and these details should be hidden by default. 
1. The content should be timeless. Anything that out-dates or updates more frequent than 5 years is *not* suitable.
1. The article should be an overview of knowledge that many engineers frequently need but often forget. The article should not focus on teaching or explaining something to the reader. These contribution guidelines are a good counter example of what should not be a normal TeX4TUM article.
1. The content should stick to or inherit a pattern. For example, protocols always illustrate the header format and then explain the fields. 


## Our Format Syntax
The good news first: If you write text, it will be displayed as text. If you want to apply some text formatting you can use [Markdown](/markdown.html).
Equations can be typset in TeX surrounded by `$` without spaces. 

### File structure
Our file structure requires a YAML header (surrounded by `---`) that states a title and some keywords (tags) that can be used to find the article.

{% example File example %}
```
 ---
 title: Inter-Integrated Circuit I²C
 tags: [i2c, bus, SDA, SCK]
 ---

 The first paragraph is the definition (hidden by default).

 After the first blank line comes the introduction.

 {{ "" }}## First Heading
 text
```
{% endexample %}

The first paragraph will become the definition, which you should always provide. If you really want to omit a definition, indent the first paragraph by two spaces.


### Markdown for Basic Text
We use [Pandoc](https://pandoc.org/MANUAL.html) as Markdown interpreter with the extension `footnotes` and `backtick_code_blocks`.
Thus, the following formatting is possible

-------------------   -------------------
`## Heading`          **Heading**
`**bold**`            **bold**
`**italic**`          *italic*
`[Link-Text](url)`    [Link-Text](url)
-------------------   -------------------


### Own Parsers
We also use our own backend scripts to parse certain content categories, for example, to detect the definition paragraph of an article.
Furthermore, we format examples, explanations, and legends. To format a paragraph as example you just need to write `Example: ` before a paragraph. The paragraph is recognized by blank lines, so make sure that you have a blank line before the the `Example: ` marker.

Example: This is an example Text and here is the code that produces it.</br>
```
Example: This is an example Text and here is the code that produces it.
```

Besides that you can also mark content using the Liquid Tags described below.


### Equations with TeX
We use [KaTeX](https://khan.github.io/KaTeX/) as TeX interpreter, such that you can typeset math equations simply using `$`.
For example to display $\sqrt{x^2 + \alpha}$ as inline you write `$\sqrt{x^2 + \alpha}$`. Please note that there must *not* be a space between the `$` and your tex code!
For display style equations, leave a blank line and surround your tex code by double `$$`s. You may optionally explain used symbols by a line starting with `with` or `where` that directly follows the equation.

The equation (you can click on it)

$$\oint_{\partial A} \vec E \cdot \diff \vec s$$
with electric field $\vec E$, surface $A$ and direction $\vec s$

is written as
```
${{ "" }}$\oint_{\partial A} \vec E \cdot \diff \vec s$$
with electric field $\vec E$, surface $A$ and direction $\vec s$
```

Note: To define new LaTeX commands add them to `res/parser_util/tex_definition.md`



## Jekyll and Liquid Tags
Our site is generated using [Jekyll](https://jekyllrb.com/) that manages every step of the conversion to the final HTML files. Thus, Jekyll collects and converts the Markdown files by piping them through Pandoc. However, **before** the conversion, Jekyll allows to substitute dynamic content using Liquid Tags `{{ "{% include mycontent.md " }}%}` and Liquid variables `{{ "{{ date " }}}}`. These tags allow sophisticated generation of content using backend Ruby scripts.

We created some custom templates, liquid tags and plugins to simplify the development process. The following sections describe how to use these during contribution. Also check our [Demo Pages](demo.html) for some features.


### Images
To include Images use the following commands

**Figures**
```bash
{% include figure.html filename="complex.svg" description="Description goes here" width="50%" %}
```
Output: Image in figure environment with image description
{% include figure.html filename="complex.svg" description="Description goes here" width="50%" %}

**Inline Image**
```bash
{% inlineimage capacitor_symbol.svg %}
```
Output: Inline Image {% inlineimage capacitor_symbol.svg %}

**SVG Objects**
```bash
{% include svg-object.html width="18em" id="RC_obj" filename="rc.svg" description="Circuit of low-pass filter" %}
```
Output: SVG Object
{% include svg-object.html width="18em" id="RC_obj" filename="rc.svg" description="Circuit of low-pass filter" %}


@todo: should we use mermaid?


### Diagramms
We use [mermaid](https://knsv.github.io/mermaid) for drawing diagramms. For this we created a liquid tag
```bash
{% mermaid %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{% endmermaid %}

```
Check some [demos](https://knsv.github.io/mermaid/#demos9) and the online editor of mermaid: [Live Editor](knsv.github.io/mermaid/live_editor)

Output:
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```



### Code Listings
Verbatime code can be placed inside backticks, e.g. \`code\` is displayed as
`code`.
If you want to highlight code put it in a block of three backticks. Directly after the backticks you can specify the language.

````
```c
int main() {
	printf("Hello World");
}
```
````

This procudes 

```c 
int main() {
	if (a < 3){
		printf("Hello World");
	}
}
```



### Acronyms
Acronyms, such as AES, are parsed and linked automatically. If you want to add a new abbreviation just add it to `res/parser_util/abbreviations.md`. The structure should look like this
```bash
*[AES]: Advanced Encryption Standard

```


### Content Categories
We currently support four special categories of content, which visibility is influenced via interactions or the options (see [Demo Page](demo.html))
```bash
{% definition %}text{% enddefinition %}
{% example %}text{% endexample %}
{% explanation %}text{% endexplanation %}
{% legend %}text{% endlegend %}

```

### Emphbox
```bash
{% emphbox %}Content in box{% endemphbox %}

```
Output:
{% emphbox %}Content in box{% endemphbox %}



## Interactivity: HTML/SVG + JavaScript
To create interactive content you can directly embedd HTML tags and JavaScript code. An easy to use framework is under development.
```HTML
Resistance R = <span id="R_val" onclick="askValue(this.id)">10k</span>Ω

<script type="text/javascript">
 var R1 = getValue( document.getElementById("R_val").textContent );
</script>
```


Please ensure that you only have one `<script>` section *at the end* of the article! Otherwise our generator scripts might destroy your code.





## Preview your article
When you are done editing, you can preview your article.
Follow the instruction of the [README](https://github.com/latex4ei/tex4tum/blob/master/README.md#contribution) to install all dependencies

Run the local server and browse to http://localhost:4000/ with
```bash
make run
```



## List of TODOs
All lines starting with TODO will be added to the following TODO list.

{% include todo_table.html %}
