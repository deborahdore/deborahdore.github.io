---
layout: page
permalink: /projects/
title: projects
description: Code, models and demos behind my research, teaching and side projects.
nav: true
nav_order: 3
---

<!-- _pages/projects.md
     Content lives in _data/projects.yml. Each section below picks the projects whose
     `category` matches its name and draws them with one of four layouts:
     featured (image left, square), grid (image on top, 16:9), wide (one horizontal card), list. -->

<div class="projects">

<p>My research is on argument mining in political debates, and the projects build on each other:</p>

<ol class="pipeline">
  <li><span class="step">Data</span><a class="name" href="#elecdeb">ElecDeb60to20</a><span class="what">US presidential debates annotated with arguments and fallacies</span></li>
  <li><span class="step">Structure</span><a class="name" href="#graph-relations">Graph relations</a><span class="what">Predicting support and attack from the argument graph</span></li>
  <li><span class="step">Language</span><a class="name" href="#roosebert">RooseBERT</a><span class="what">A language model pre-trained on political debates</span></li>
  <li><span class="step">Fallacies</span><a class="name" href="#fallacyrag">FallacyRAG</a><span class="what">Retrieval guided by argument relations</span></li>
  <li><span class="step">Tools</span><a class="name" href="#disputool">DISPUTool</a><span class="what">Putting the analysis in front of readers, with <a href="#debatelens">DebateLens</a></span></li>
</ol>

{% assign sections = "Selected research:featured:1|More research:grid:2|Personal projects:grid:2|Teaching:wide:1|Machine learning and data:grid:3|Earlier work:list:1" | split: "|" %}
{% assign intros = "|Supporting code and data for the papers above.|Apps I build in my spare time, both for iOS.||Projects from my MSc in Deep Learning and Applied AI at Sapienza.|Smaller projects from my BSc in Turin and the start of my MSc." | split: "|" %}

{% for section in sections %}
{% assign parts = section | split: ":" %}
{% assign name = parts[0] %}
{% assign layout = parts[1] %}
{% assign cols = parts[2] %}
{% assign projects = site.data.projects | where: "category", name %}

<h2 class="category">{{ name }}</h2>
{% if intros[forloop.index0] != "" and intros[forloop.index0] %}<p class="section-intro">{{ intros[forloop.index0] }}</p>{% endif %}

{% if layout == "list" %}

<ul class="earlier">
{% for project in projects %}
<li>
<span class="year">{{ project.year }}</span>
<span><span class="title">{{ project.title }}</span>{% if project.note %} <span class="year">· {{ project.note }}</span>{% endif %}<span class="desc">{{ project.description }}</span></span>
<span class="links">{% for link in project.links %}<a href="{{ link.url | relative_url }}" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>{% endfor %}</span>
</li>
{% endfor %}
</ul>

{% else %}

<div class="row row-cols-1{% if cols == '2' %} row-cols-md-2{% elsif cols == '3' %} row-cols-md-3{% endif %}">
{% for project in projects %}
{% capture title %}{% if project.page %}<a href="{{ project.page | relative_url }}">{{ project.title }}</a>{% else %}{{ project.title }}{% endif %}{% endcapture %}
{% capture body %}
<div class="card-body d-flex flex-column flex-grow-1">
<h3 class="card-title">{{ title }}</h3>
<p class="project-meta">{% if project.year %}<span class="year">{{ project.year }}</span>{% endif %}{% if project.year and project.note %} · {% endif %}{{ project.note }}</p>
{% if project.badges %}<div class="project-badges">{% for b in project.badges %}<a href="{{ b.url }}" target="_blank" rel="noopener noreferrer"><img src="{{ b.img }}" alt="{{ b.alt }}" loading="lazy"></a>{% endfor %}</div>{% endif %}
<p class="card-text">{{ project.description }}</p>
<p class="project-tags">{{ project.tags | join: " · " }}</p>
<div class="project-links mt-auto pt-3">
{% for link in project.links %}<a href="{{ link.url | relative_url }}" target="_blank" rel="noopener noreferrer" class="btncv z-depth-0{% if forloop.first %} primary{% endif %}">{{ link.label }}</a>{% endfor %}
{% if project.page %}<a class="read-more" href="{{ project.page | relative_url }}">Read more →</a>{% endif %}
</div>
</div>
{% endcapture %}

{% if layout == "featured" or layout == "wide" %}
<div class="col-12 mb-4" {% if project.id %}id="{{ project.id }}"{% endif %}>
<div class="card card-horizontal {{ layout }}">
<div class="row no-gutters">
<div class="thumb-col {% if layout == 'featured' %}col-md-4{% else %}col-md-5{% endif %}">
{% if project.page %}<a href="{{ project.page | relative_url }}">{% endif %}<img src="{{ '/assets/img/' | append: project.img | relative_url }}" alt="{{ project.title }}" loading="lazy">{% if project.page %}</a>{% endif %}
</div>
<div class="{% if layout == 'featured' %}col-md-8{% else %}col-md-7{% endif %}">{{ body }}</div>
</div>
</div>
</div>
{% else %}
<div class="col mb-4" {% if project.id %}id="{{ project.id }}"{% endif %}>
<div class="card h-100">
{% if project.img %}<div class="card-thumb"><img src="{{ '/assets/img/' | append: project.img | relative_url }}" alt="{{ project.title }}" loading="lazy"></div>{% endif %}
{{ body }}
</div>
</div>
{% endif %}
{% endfor %}
</div>

{% endif %}
{% endfor %}

<p class="mt-4">More on <a href="https://github.com/deborahdore">GitHub</a>.</p>

</div>
