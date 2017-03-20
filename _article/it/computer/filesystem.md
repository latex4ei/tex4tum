---
title: Filesystem
---

A file system manages the abstraction of grouped data blocks that belong to a single file.

Common file systems

| Name | OS | Features |
|---|---|---|
| FAT | all | simple |
| NTFS | Windows | Journaling |
| Ext 2/3/4 | Linux | Journaling |


## File Allocation Table (FAT)
The FAT is table that stores information about each Block. The information can be:
* the block is defect
* the block is free
* pointer to the next block of a file
* last block of a file


## Index Nodes (I-Nodes)
Each file has an I-Node that stores:
* Counter of references (links) to that file

{% include figure.html filename="filesystem-inode.svg" description="I-Nodes" %}


## Journaling
Journaling helps to avoid corruption of the file system.
Before actually performing changes to the file system, the action is written to a Journal and then executed. If the operating system crashes during the execution of the action, the action can be repeated from the Journal (after reboot).


## Fragmentation
Fragmentation means unusable memory because of inexact alignment of used memory blocks.

### Internal Fragmentation
Unused bytes within a memory block. Files reserve complete blocks of memory. Therefore, the last block is most likely only partly used.

### External Fragmentation
Unused blocks between Files. Happens if files are resized and become smaller or if a sequence of free blocks is slightly larger than the size of a new file.
