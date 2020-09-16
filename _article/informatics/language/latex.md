---
title: TeX and LaTeX
---
TeX is a document typesetting system which was designed by Donald Knuth and later improved to LaTeX by Leslie Lamport.
It allows the writer to define the general structure of a document (such as layout and sections), to stylise text (such as bold and italics), and to add citations and cross-references.

There exist several variants that are all based on the original TeX:

* **LaTeX**: adds commands for easier typesetting of typical documents such as books, articles, and letters.
* **XeLaTeX**: adds extended support for fonts and allows the use of system fonts.
* **LuaLaTeX**: adds support for the scripting language Lua. 



## The Basics
LaTeX code is divided into two parts: *preamble* and *document*. In the preamble you can add packages and specify the page layout. The *document* part starts with `\begin{document}` and ends with `\end{document}`. It defines the visible part of your document where you put your content. Everything after `\end{document}` will be ignored.


### Example of a minimal .tex file
```latex
% Preamble
\documentclass{article}
\title{My first article}

% Document
\begin{document}
  \maketitle

  This is the first paragraph.
\end{document}
```


### Special Characters
Some characters are not part of normal text but have a reserved special meaning for the LaTeX compiler.

* `\` introduces a command 
* `{`, `}` embraces arguments, creates logical parts
* `[`, `]` embraces optional command parameters
* `%` comments: code after % will be ignored.
* `$` starts the inline math mode.
* `_`, `^` indizes and exponents in mathmode. e.g. a
* `&` separates columns in tables
* `#` parameter for own command declarations

If you want to use thes characters in your text you need to put a backslash in front of them. E.g. type `\%` in the `.tex` file to produce `%` in the PDF. An exception is the backslash itself, which is typed as `\textbackslash`.




## Basic Document Formatting


### Headigs
LaTeX supports several levels for headings:

1. `\part{title}`   (only for books)
1. `\chapter{title}`  (only for books or reports)
1. `\section{title}` 
1. `\subsection{title}`
1. `\subsubsection{title}`
1. `\paragraph{title}`
1. `\subparagraph{title}`


### Font Styles

| Text Style   | Argument Syntax   |  Switch Syntax        |
|--------------|-------------------|-----------------------|
| *italic*     | `\textit{italic}` | `\itshape italic`     |
| **bold**     | `\textbf{italic}` | `\bfseries italic`    |
| [Link](https://tex4tum.de)  | `\href{Link}{https://tex4tum.de}`    |


## Environments
Environments span several lines and are enclosed within `\begin{ENV} ... \end{ENV}`, where `ENV` is the name of the environment.


### Lists
There are three kinds of lists: 1. bullet points, 2. enumeration, and 3. descriptions.

```latex
\paragraph{Bullet Points (itemize)}
\begin{itemize}
    \item first item
    \item second item with further points:
    \begin{itemize}
        \item first subitem
        \item second subitem
    \end{itemize}
\end{itemize}
```


### Tables
To include tables properly in your document, you should add to your preamble:

```latex
\RequirePackage{booktabs}     % better spacing and horizontal lines
\RequirePackage{multirow}     % for columns spanning multiple rows
```

```latex
\begin{table}
  \centering
  \begin{tabular}{ll} \toprule   % add more l's for more columns (or r/c)
    \thead{Title Column 1} & \thead{Title Column 2} \\ \midrule
    Cell 1                 & Cell 2                 \\
    Cell 3                 & Cell 4                 \\
    \bottomrule
  \end{tabular}
  \caption{This is the full caption of the table. It should explain which numbers are shown.}
  \label{tab:example}
\end{table}
```


```
\begin{table*}\centering
  \renewcommand{\arraystretch}{1.5}   % change vertical row spacing
  \renewcommand{\tabcolsep}{0.8em}    % change horizontal column spacing
  \begin{tabular}{@{}lrrcrr@{}}\toprule%
    \multirow{2}{*}{\thead{Slices}}&              % column heading
    \multicolumn{2}{c}{\thead{error (\%)}} &&     % column heading
    \multicolumn{2}{c}{\thead{error (slices)}} \\ % column heading
               \cmidrule{2-3} \cmidrule{5-6}
              &  avg. &   max. &&  avg. &  max. \\ \midrule
    \hfill $< 50$    & $7.4$ & $73.5$ && $78$  & $625$ \\
    $50 ... 100$ & $3.1$ & $27.2$ && $116$ & $725$ \\
    \hfill $> 100$   & $1.8$ &  $9.0$ && $178$ & $825$ \\ \bottomrule
  \end{tabular}
\caption{Professional looking table with random data.}
\end{table*}
```



#### Some Notes on Tables
* Ommit vertical lines! This is how professional books and journals typeset tables.
* To add extra vertical spacing: `\renewcommand\arraystretch{1.5}`
* To change horizontal spacing: `\renewcommand{\tabcolsep}{3pt}`




### Figures
To include figures properly in your document, you should add to your preamble:

```latex
\RequirePackage{graphicx}        % required to load images
\graphicspath{ {img/} {gfx/} }   % set default image subfolders
```

Afterwards, you can create figures using
```latex
\begin{figure}
  \centering
  \includegraphics[width=\textwidth]{example-image-golden}  % replace "example-image-golden" with filename
  \caption{This is the full caption of the figure. It should explain what is shown and should be longer than one line.}
  \label{fig:example} % used for referencing.
\end{figure}
```






## References

* [Wikipedia: TeX](https://en.wikipedia.org/wiki/TeX)
* [Wikipedia: LaTeX](https://en.wikipedia.org/wiki/LaTeX)
* [Wikipedia: LaTeX Math Expressions](https://en.wikipedia.org/wiki/Help:Displaying_a_formula)
* [StackExchange: Overview of Table Packages](https://tex.stackexchange.com/questions/12672/which-tabular-packages-do-which-tasks-and-which-packages-conflict)
* [texblog: Professional and clean tables with LaTeX](https://texblog.org/2017/02/06/proper-tables-with-latex/)


