---
layout: page
permalink: /projects/
title: projects
description: Code behind my research, teaching and side projects, all open source on GitHub.
nav: true
nav_order: 3
_styles: >
  .projects h2.category {
    color: var(--global-text-color-light);
  }
  .projects .project-note,
  .projects .project-tags {
    color: var(--global-text-color-light);
    font-size: 0.85rem;
  }
  .projects .project-note {
    margin-bottom: 0.5rem;
  }
  .projects .project-tags {
    margin-bottom: 0;
  }
---

<!-- _pages/projects.md -->

<div class="projects">
{% assign categories = "Research|Teaching|Personal projects|Machine learning and data|Software engineering" | split: "|" %}
{% for category in categories %}
<h2 class="category">{{ category }}</h2>
<div class="row row-cols-1 row-cols-md-2">
{% assign projects = site.data.projects | where: "category", category %}
{% for project in projects %}
<div class="col">
<div class="card h-100 hoverable">
<div class="card-body d-flex flex-column">
<h3 class="card-title">{{ project.title }}</h3>
{% if project.note %}<p class="project-note">{{ project.note }}</p>{% endif %}
<p class="card-text">{{ project.description }}</p>
<p class="project-tags">{{ project.tags | join: " · " }}</p>
<div class="container-links mt-auto pt-3">
{% for link in project.links %}
<div class="container-link-button">
<a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="btncv z-depth-0">{{ link.label }}</a>
</div>
{% endfor %}
</div>
</div>
</div>
</div>
{% endfor %}
</div>
{% endfor %}
</div>

More on [GitHub](https://github.com/deborahdore).
