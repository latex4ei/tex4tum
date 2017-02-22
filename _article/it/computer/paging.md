---
title: Paging
---

Paging is used to map the virtual address space to physical address space.


| Address | Segmented in | Offset |
| virtual $v = (s, wv)$ | $s$ pages | $wv$ bytes |
| physical $p = (k, wp)$ | $k$ frames | $wp$ bytes |

with $wv = n \cdot wp, n \in \N$ (default $n=1$)


## Page Table
One entry per page. Entry:

| Frame number | physical frame |
| P-Bit | is page present in frame |
| R-Bit | is page referenced |
| M-Bit | is page modified (dirty) |
| X-Bit | is page data executable | 



