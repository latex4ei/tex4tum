---
title: Algorithm
---

An algorithm is an unambiguous specification of how to solve a class of problems.

### Example Algorithm

Task: Find the largest number in a list of numbers.
```
Algorithm LargestNumber
  Input: A list of numbers L.
  Output: The largest number in the list L.
  if L.size = 0 return null
  largest ← L[0]
  for each item in L, do
    if item > largest, then
      largest ← item
  return largest
```

{{ FOLDER_TOC }}
