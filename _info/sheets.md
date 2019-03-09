---
title: Cheat Sheets
icon: file-alt
tags: [latex4ei, github, pdf, formelsammlung]
---

# LaTeX4Ei

Our Cheat Sheets are densly packed PDFs with important equations and diagrams for studying or exams where cheat sheets are allowed.

Die hier verfügbaren Dateien sind immer die aktuelle Version.

{% capture includeSheets %}
{% include sheet_table.html data=site.data.sheets %}
{% endcapture %}
{{ includeSheets | replace: '    ', ''}}

## Externe Formelsammlungen

Weitere, gute Formelsammlungen zu EI an der TUM findet ihr auch auf <a href="http://www.ei-studium.de">www.ei-studium.de</a> oder <a href="https://makeappdev.github.io/TUM-Projekte">MaKeAppDev</a>. Ansonsten haben wir hier noch verstreute Formelsammlungen direkt verlinkt. Aber Achtung: Manche Formelsammlungen sind sehr alt und werden nicht mehr verbessert.

{% capture includeSheets %}
{% include sheet_table.html data=site.data.extern_sheets %}
{% endcapture %}
{{ includeSheets | replace: '    ', ''}}

## Veraltete Formelsammlungen

Achtung: Diese Formelsammlungen werden nicht mehr verwendet und nicht mehr verbessert!

{% capture includeSheets %}
{% include sheet_table.html data=site.data.old_sheets %}
{% endcapture %}
{{ includeSheets | replace: '    ', ''}}
