---
title: Semaphore
---

controls access to a common resource shared by multiple processes in a  concurrent system.

The semaphore is a counter that represents the amount of available resources. A semaphore can also be negative which means that more resources are requested than available and processes are actively waiting for the resource.

## Operations
A semaphore S has to operations:

| Name | Symbol | Action |
|---|---|---|
| wait, request | P | decrement S |
| signal, release | V | increment S |

The P operation sleeps until a resource protected by the semaphore becomes available. The V operation makes a resource available again after the process has finished using it.



