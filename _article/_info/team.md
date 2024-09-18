---
title: Team
---

# Our Team

LaTeX4EI is a student project, founded in 2011, from and for students of electrical and computer engineering at the Technical University of Munich. We started writing summaries and cheat sheets in different lectures using LaTeX and provide them for everyone. Our goal is to present all the information in a short, readable and clear fashion.

## Active Members

{% capture includeTeam %}
{% include team.html data=site.data.team active=true %}
{% endcapture %}
{{ includeTeam | replace: '    ', ''}}

## Idle Members

{% capture includeTeam %}
{% include team.html data=site.data.team active=false %}
{% endcapture %}
{{ includeTeam | replace: '    ', ''}}
