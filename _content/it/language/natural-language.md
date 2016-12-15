---
title: Natural Language
---

The natural language is a context sensitive language and therefore difficult to parse (in contrast to context free programming languages).


## Natural Language Processing
Is done in several steps.

1. Tokenize: Separate individual words
2. Tagging: Detect word type (Noun, Verb, etc.)
3. Chunking: Group words into phrases
4. Extraction: Analyze meaning


### Part of Speech (POS) Tagging
| Tag | Description | Example |
|-----|-------------|---------|
| DT  | Article     | *the, a* |
| NN  | Noun        | *dog, car* |
| VB  | Verb        | *fly* |
| JJ  | Adjective   | *little* |
| IN  | Preposition | *at, on, if* |
| MD  | Modal       | *shall, will* |
| EX  | Existential | *there* |


### Chunking
For each type of phrase (e.g. noun phrase) the words are tagged with 3 IOB Tags: `I`-inside, `O`-outside, `B`-begin. `B` if a phrase begins, following words get `I` if the word belongs to the phrase, or `O` for all other words.


| Chunk | Description | Example |
|-------|-------------|---------|
| NP  | Noun Phrase  | *the little dog* |
| VP  | Verb Phrase  | *will fly* |
| P  | Preposition Phrase | *to* |
