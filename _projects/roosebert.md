---
layout: page
title: RooseBERT
description: A new deal for political language modelling.
---

<p class="project-actions">
<a class="btncv primary" href="https://arxiv.org/abs/2508.03250" target="_blank" rel="noopener noreferrer">Paper</a>
<a class="btncv" href="https://huggingface.co/collections/ddore14/roosebert" target="_blank" rel="noopener noreferrer">Models</a>
<a class="btncv" href="https://github.com/deborahdore/RooseBERT" target="_blank" rel="noopener noreferrer">Code</a>
<span class="project-status">WI-IAT 2026 · with Elena Cabrio and Serena Villata</span>
</p>

## The question

Political debates rely on hidden communication strategies and implicit arguments, and their vocabulary is specialised. General-purpose language models struggle with that. **Does pre-training on political discourse produce a model that analyses debates better than general-purpose ones?**

## What we built

RooseBERT is pre-trained on 11 GB of English political debates and speeches: parliamentary proceedings from the UK, Ireland, Scotland, Canada, Australia, New Zealand, Ghana and South Africa, EU and UN speeches, and US presidential debates from 1960 to 2024. We trained it in two ways, each cased and uncased:

| Model | Strategy |
| :-- | :-- |
| [`RooseBERT-cont-cased`](https://huggingface.co/MARIANNE-INRIA/RooseBERT-cont-cased) | Continued pre-training from BERT, original vocabulary |
| [`RooseBERT-cont-uncased`](https://huggingface.co/MARIANNE-INRIA/RooseBERT-cont-uncased) | Continued pre-training from BERT, original vocabulary |
| [`RooseBERT-scr-cased`](https://huggingface.co/MARIANNE-INRIA/RooseBERT-scr-cased) | From scratch, with a political-domain WordPiece vocabulary |
| [`RooseBERT-scr-uncased`](https://huggingface.co/MARIANNE-INRIA/RooseBERT-scr-uncased) | From scratch, with a political-domain WordPiece vocabulary |
{: .table .table-sm .project-table}

Training from scratch gives a vocabulary where political terms are single tokens instead of being split into word pieces.

## What we found

We fine-tuned RooseBERT on stance detection, sentiment analysis, argument component detection and classification, argument relation prediction and classification, policy classification and named entity recognition. We compared it with BERT, ModernBERT, ConfliBERT and PoliBERTweet. RooseBERT improves significantly over the general-purpose models on most of these tasks, which shows that domain-specific pre-training pays off for political debate analysis.

## Use it

```python
from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained("MARIANNE-INRIA/RooseBERT-scr-cased")
model = AutoModel.from_pretrained("MARIANNE-INRIA/RooseBERT-scr-cased")
```

## Paper

<div class="publications">
{% bibliography --query @*[key=dore2025roosebert]* --group_by none %}
</div>

<p class="mt-4"><a href="{{ '/projects/' | relative_url }}">← All projects</a></p>
