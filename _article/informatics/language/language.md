---
title: Language
---

| Name | Symbol | Example |
|---|---|---|
| Alphabet | Σ | a,b |
| Word | W :=  | abba, ba, bbb... |
| Language | L := | ba babb aab |

**Production Rules**: S → aS


## Chomsky-Hierarchy
The chomsky hierarchy classifies languages.

* Chomsky 0: At least one non-terminal on the left
	α → β

* Chomsky 1 (= context sensitive):
	More or equal symbols on the right than on the left.
	Thus, a word cannot become shorter by applying a production step
	αAβ → αγβ

* Chomsky 2 (context free): Exactly one non-terminal on the left, nothing else
	Thus, a production rule does not depend on previous symbols
	A → γ

* Chomsky 3 (regular): only one symbol on the left and the right.
	A → a | A → B


## Backus–Naur Form (BNF)
The Backus–Naur Form is a common notation technique for context-free grammars.




