---
title: Merkle Tree
---
A merkle tree is a hash tree.


Every non-leaf node is labelled with the hash of the labels or values (in case of leaves) of its child nodes.

Demonstrating that a leaf node is a part of the given hash tree requires  log n operations



## Validating Leafs
When the root hash is available, the hash tree can be received from any non-trusted source. Then, the received hash tree is checked against the trusted root hash.


