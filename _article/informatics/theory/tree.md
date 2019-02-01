---
title: Tree
---

A tree is a widely used abstract data type (ADT). It simulates a hierarchical tree structure, with a root element and subtrees. 


## Terminology
| Term | Description |
|------|-------------|
| Root | The top node in a tree |
| Child | A node connected "below" another node | 
| Parent | The node "above" another node |
| Siblings | Nodes with the same parent |
| Descendant | A node somewhere "below" the current node |
| Ancestor | A node somewhere "above" the current node |
| Leaf | A node with no children |
| Branch | |
| Degree |The number of sub trees of a node |
| Edge | The connection between one node and another |
| Path | Sequence of nodes connecting a node with a descendant |
| Level | 1 + the number of connections between the node and the root |


## Implementation

### Binary Tree
An unidirecitonal binary tree can be implemented using 2 pointers for each node:

* leftChild
* rightChild


A generic tree can be implemented by using 4 pointers for each node:

* parent
* firstChild
* next
* prev



