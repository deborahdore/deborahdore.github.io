---
layout: page
title: DISPUTool
description: Fallacy detection and repairing in argumentative political debates.
---

<p class="project-actions">
<a class="btncv primary" href="https://3ia-demos.inria.fr/disputool/" target="_blank" rel="noopener noreferrer">Try the demo</a>
<a class="btncv" href="https://doi.org/10.18653/v1/2025.acl-demo.45" target="_blank" rel="noopener noreferrer">Paper</a>
<a class="btncv" href="{{ '/assets/poster/poster_disputool.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Poster</a>
<span class="project-status">ACL 2025, System Demonstrations · with Pierpaolo Goffredo, Elena Cabrio and Serena Villata</span>
</p>

## The question

Telling a reader that an argument is fallacious is only half the job. **Can a tool show what the argument would look like once the fallacy is removed, so that readers learn to recognise the pattern themselves?**

## What it does

DISPUTool is a public web tool, built at Inria and 3IA Côte d'Azur, for exploring the argumentation in US presidential debates from 1960 to 2020 (the ElecDeb60to20 corpus). It mines argument components and the relations between them. Version 3.0 adds a module that:

- detects fallacious arguments and classifies them by fallacy type;
- **repairs** them, rewriting each argument so that it makes the same point without the fallacy.

We evaluated the module with automatic metrics and human assessment. The aim is to support critical thinking in front of misleading arguments, in political debates and beyond.

<div class="row justify-content-center mt-3">
<div class="col-sm-6 col-md-5">
{% include figure.liquid path="assets/img/publication_preview/disputool.webp" class="img-fluid rounded" alt="DISPUTool 3.0: fallacy detection and repairing" %}
</div>
</div>

## Papers

<div class="publications">
{% bibliography --query @*[key=GoffredoDCV25 || key=goffredo2025fallacyfix]* --group_by none %}
</div>

<p class="mt-4"><a href="{{ '/projects/' | relative_url }}">← All projects</a></p>
