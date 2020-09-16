---
title: Central Processing Unit (CPU)
tags: CPU, ALU
---


## Stages

1. **Instruction Fetch (IF):** increase PC
2. **Instruction Decode (ID):** read OP and register
3. **Execution (EX):** ALU executes command
4. **Memory Stage (M):** read/write to memory
5. **Write Back (WB):** load from memory to register?


### Hazards
Hazards are problems due to pipelining.

* **Structural Hazard:** same resource is needed multiple times in the same cycle.
* **Data Hazard:** data dependencies (read-after write, write-after-write, write-after-read).
* **Control Hazard:** next executed instruction is not the next specified instruction due to jump, branch, exception.



