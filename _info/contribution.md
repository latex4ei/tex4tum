---
title: Contribution
layout: page
---

This article describes how you can contribute or edit articles.

If you want to contribute or edit an article do the following:

1. fork [the repository on github](https://github.com/latex4ei/tex4tum) and clone it locally.
2. edit the corresponding `.md` file in the folder '`_article`' or create a new one.
3. once finished, push the changes to GitHub and create a pull request.


## Our Format Syntax
The good news first: If you write text, it will be displayed as text. If you want to apply some formatting you can use [Markdown](/markdown.html). 
In particular, we use [Pandoc](https://pandoc.org/MANUAL.html) as Markdown interpreter with the extension `footnotes` and `backtick_code_blocks`.



### File structure
Our file structure requires a YAML header (surrounded by `---`) that states a title and some keywords (tags) that can be used to find the article.

```
 ---
 title: Inter-Integrated Circuit I²C
 tags: i2c, bus, SDA, SCK
 ---

 The first paragraph is the definition (hidden by default). 

 After the first blank line comes the introduction.

 {{ "" }}## First Heading
 text
```

The first paragraph will become the definition, which you should always provide. If you really want to omit a definition, indent the first paragraph by two spaces.



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
{% raw %}{% include figure.html filename="complex.svg" description="Description goes here" width="50%" %}
{% endraw %}
```
Output: Image in figure environment with image description
{% include figure.html filename="complex.svg" description="Description goes here" width="50%" %}

**Inline Image**
```bash
{% raw %}{% inlineimage capacitor_symbol.svg %}
{% endraw %}
```
Output: Inline Image {% inlineimage capacitor_symbol.svg %}

**SVG Objects**
```bash
{% raw %}{% include svg-object.html width="18em" id="RC_obj" filename="rc.svg" description="Circuit of low-pass filter" %}
{% endraw %}
```
Output: SVG Object
{% include svg-object.html width="18em" id="RC_obj" filename="rc.svg" description="Circuit of low-pass filter" %}


### Diagramms
We use [mermaid](https://knsv.github.io/mermaid) for drawing diagramms. For this we created a liquid tag
```bash
{% raw %}{% mermaid %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{% endmermaid %}
{% endraw %}
```
Check some [demos](https://knsv.github.io/mermaid/#demos9) and the online editor of mermaid: [Live Editor](knsv.github.io/mermaid/live_editor)

Output:
{% mermaid %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{% endmermaid %}


### Code Listings
Verbatime code can be placed inside backticks, e.g. \`code\` is displayed as
`code`.
If you want to highlight code put it in a block of three backticks. Directly after the backticks you can specify the language.
{% highlight c linenos %}
```c
int main() {
	printf("Hello World");
}
```
{% endhighlight %}

As an alternative we also support advanced syntax highlighting using the following liquid tag
```  
{% raw %}{% highlight c linenos %}
int main() {
	if (a < 3){
		printf("Hello World");
	}
}
{% endhighlight %}
{% endraw %}
```



### Acronyms
Acronyms, such as AES, are parsed and linked automatically. If you want to add a new abbreviation just add it to `res/parser_util/abbreviations.md`. The structure should look like this
```bash
{% raw %}*[AES]: Advanced Encryption Standard
{% endraw %}
```


### Content Categories
We currently support three special categories of content, which visibility is influenced via interactions or the options (see [Demo Page](demo.html))
```bash
{% raw %}{% definition %}text{% enddefinition %}
{% example %}text{% endexample %}
{% legend %}text{% endlegend %}
{% endraw %}
```

### Emphbox
```bash
{% raw %}{% emphbox %}Content in box{% endemphbox %}
{% endraw %}
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

