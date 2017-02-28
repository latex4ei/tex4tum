---
title: Memory Management
---

The most important concept of memory management is memory hierarchy.
The reason is that access latency and costs per byte are inverse proportional.



## Memory allocation strategies

FirstFit: Use the first sequence of free blocks that fits the requested size. Allways start at address 0.
NextFit: As FirstFit but start the search from the last allocated block.
BestFit: Search the whole address space, take the smallest block that fits. 
WorstFit: Search the whole address space, take the largest block that fits.




## Buddy algorithm




## Segmentation Fault (SegFault)
A SegFault is an event that occurs when a process tries to access a memory address it is not allowed to.
This could happen by atempting to write to read-only memory or if the address is outside of the address space of the process (segment).
The most common cause is the attempt to dereference a NULL-pointer which is outside of the address space of any process.





