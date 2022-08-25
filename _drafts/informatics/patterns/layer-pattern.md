---
title: Layer Pattern
---

the layer pattern is an architectural software pattern.


```
   |              Upper            |
   +--+----hrl-----------hql----+--+
      |     ^             ^     |
      |     |             |     |
      v     |             |     v
   +-hqu----+-------------+----hru-+
   |  v     |    Layer    |     v  |
   | pqd   pru           pqu   prl |
   |  |     ^             ^     |  |
   +--+----hrl-----------hql----+--+
      |     ^             ^     |
      |     |             |     |
      v     |             |     v
   +-hqu----+-------------+----hru-+
   |              Lower            |

Legend:
  h handle, p process
  r rePly,pq query (request)
  u upper, l lower

        Figure 1: Layer Model
```
