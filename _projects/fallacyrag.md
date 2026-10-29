---
layout: page
title: FallacyRAG
description: Retrieving relations, detecting fallacies. A RAG approach to political debate analysis.
---

<p class="project-actions">
<a class="btncv primary" href="https://arxiv.org/abs/2608.27471" target="_blank" rel="noopener noreferrer">Paper</a>
<a class="btncv" href="https://github.com/deborahdore/FallacyRAG" target="_blank" rel="noopener noreferrer">Code</a>
<span class="project-status">Under review at EACL 2027 · with Greta Damo, Elena Cabrio and Serena Villata</span>
</p>

## The question

Spotting a fallacy takes more than the sentence itself: it needs knowledge of the topic under debate and of how the argument relates to the ones around it. Earlier work showed that argument structure helps, but only as fixed classifier features. **Can the support and attack relations between arguments instead steer what a model retrieves, so that external knowledge actually helps fallacy detection?**

## How it works

{% include figure.liquid path="assets/img/projects/fallacyrag-pipeline.webp" class="img-fluid rounded" zoomable=true alt="FallacyRAG pipeline" %}

Each sentence becomes a retrieval query: either the bare sentence, or the sentence enriched with the argument components that support or attack it. The query goes to a 15 GB knowledge base of political documents through one of four retrievers (three dense models or BM25), optionally restricted to documents that predate the debate and reranked by a cross-encoder. The retrieved passages, the sentence and its speech turn form the model input, and an encoder or an LLM makes the prediction.

## What we found

Across 42 retrieval configurations and 14 models on ElecDeb60to20, argumentatively guided retrieval gives the best results for both tasks:

| Task | Best without retrieval | Best with guided retrieval |
| :-- | --: | --: |
| Fallacy detection (macro-F1) | 0.772 | **0.864** |
| Fallacy classification (macro-F1) | 0.653 | **0.725** |
{: .table .table-sm .project-table}

Both best scores come from ModernBERT. Retrieval improves every encoder tested except NeoBERT, while decoder-only LLMs get worse once retrieved context is added. External knowledge helps when retrieval follows argument structure, but so far only encoder models benefit from it.

## Paper

<div class="publications">
{% bibliography --query @*[key=dore2026fallacyrag]* --group_by none %}
</div>

<p class="mt-4"><a href="{{ '/projects/' | relative_url }}">← All projects</a></p>
