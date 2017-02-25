---
title: Paging
---

Paging is used to map the virtual address space to the physical address space.


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


## Page Fault
Event that occurs when a program tries to reference a page not currently present in RAM.


### Page Replacement Algorithm

* First-In-First-Out (FIFO):
* Second-chance: FIFO variant, where a page is only replaced if the R-Bit is not set.
* Clock: FIFO variant, circular list of pages
* Least recently used (LRU)
    Cons: expensive to implement
* Least frequently used (LFU)



## Working Set Concept
The working set of a process is the set of pages expected to be used by that process during some time interval. It can be used to determine pages for replacement that do not belong to the working set.


