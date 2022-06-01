---
title: Gnu Debugger (GDB)
---

GDB is a tool for debugging programs. It consists of a server and a client. The GDB server runs, controls, and monitors the debugged program. The client can send commands such as setting breakpoints or performing single instruction steps.

## Usage

1. compile your binary with the gcc debug option `-g`
1. start gdb with your binary `gdb BINARY`
1. set a breakpoint `b main.c:12`
1. run the program `run`
1. on break: inspect variables with `p myvar`


## Commands

| Usage                | Description                             |
|----------------------|-----------------------------------------|
| `b` *file:line*      | set breakpoint in file at line          |
| `run [`*arglist*`]`  | start your program [with arglist]       |
| `p` *expr*           | display the value of an expression      |
| `i` *command*        | display `info` for command, e.g. `i b`  |



| Program Flow | Short | Description                                |
|--------------|-------|--------------------------------------------|
| `continue`   | `c`   | continiues program execution               |
| `next`       | `n`   | execute one line of code (step over)       |
| `step`       | `s`   | execute a single instruction (step into)   |
| `finish`     |       | executes the current subprogram (step out) |



| Stack     | Description            |
|-----------|------------------------|
| `bt`      | print backtrace        |
| `frame`   | display current frame  |
| `up`      | move one frame up      |
| `down`    | move one frame down    |



## References

* [GDB QUICK REFERENCE](http://users.ece.utexas.edu/~adnan/gdb-refcard.pdf)
