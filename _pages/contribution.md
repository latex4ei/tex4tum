---
layout: page
title: Contribution
---
## Setup
Follow the instruction of the [README](https://github.com/latex4ei/tex4tum/blob/master/README.md#contribution) to install all dependencies

Run the local server and browse to http://localhost:4000/ with
```bash
make run
```

## Custom Templates, Liquid Tags and Plugins
We created some templates, liquid tags and plugins to simplify the development process. The following sections describe how to use these during contribution. Also check our [Demo Pages](demo.html) for some features

### Images
To include Images use the following commands

**Figures**
```bash
{% raw %}
{% include figure.html filename="complex.svg" description="Description goes here" width="50%" %}
{% endraw %}
```
Output: Image in figure environment with image description
{% include figure.html filename="complex.svg" description="Description goes here" width="50%" %}

**Inline Image**
```bash
{% raw %}
{% inlineimage capacitor_symbol.svg %}
{% endraw %}
```
Output: Inline Image {% inlineimage capacitor_symbol.svg %}

**SVG Objects**
```bash
{% raw %}
{% include svg-object.html width="18em" id="RC_obj" filename="rc.svg" description="Circuit of low-pass filter" %}
{% endraw %}
```
Output: SVG Object
{% include svg-object.html width="18em" id="RC_obj" filename="rc.svg" description="Circuit of low-pass filter" %}

### Diagramms
We use [mermaid](https://knsv.github.io/mermaid) for drawing diagramms. For this we created a liquid tag
```bash
{% raw %}
{% mermaid %}
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

### Abbreviations
Abbreviations are parsed and linked automatically. If you want to add a new abbreviation just add it to `res/parser_util/abbreviations.md`. The structure should look like this
```bash
{% raw %}
*[AES]: Advanced Encryption Standard
{% endraw %}
```

### LaTeX
To define new LaTeX commands add them to `res/parser_util/tex_definition.md`

### TODOs
All lines starting with TODO will be added to [TODOLIST](todo.html).

### Interactive Environments
The following blocks can be enabled and disabled via the options (see [Demo Page](demo.html))
```bash
{% raw %}
{% definition %}text{% enddefinition %}
{% example %}text{% endexample %}
{% legend %}text{% endlegend %}
{% endraw %}
```

### Emphbox
```bash
{% raw %}
{% emphbox %}Conten in box{% endemphbox %}
{% endraw %}
```
Output:
{% emphbox %}Conten in box{% endemphbox %}
