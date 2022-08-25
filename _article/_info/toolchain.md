---
title: ToolChain Working
---

Description of the internal workings of the toolchain.

## Overview

1. **Setup Environment:** (Run Docker/Manual)
	- Install dependencies
	- Configure system
2. **Prepare Assets:** (Run Python)
	- Download Images with external URLs
	- Generate Plots with Matplotlib
3. **Prepare Global Website:** (Jekyll-Ruby Prerender Hook)
	- Index all Articles (for Search and TOC)
	- Generate TOCs as Markdown/HTML
4. **Preprocess Individual Sources:** (Jekyll-Ruby Generator)
	- Replace Unicode Symbols
	- Parse `TODO` notes
	- Add Liquid Tags for Classes
5. **Render Individual Sources:** (Jekyll-Pandoc)
	- Include Liquid Tags
	- Render Markdown to HTML
6. **Postprocess HTML:** (Jekyll-Ruby Post-Write Hook)
	- Integrate Searchindex
	- Insert Cross-References
