---
title: C
---

C is an imperative, procedural computer programming language with static type system.

C is specified by the following standards:

| year | name | standard |
|----|----|---|
| 1989 | ANSI C (C89) | ANSI X3.159-1989 |
| 1999 | C99 | ISO/IEC 9899:1999 |
| 2011 | C11 | ISO/IEC 9899:2011 |


## Example: Hello World
```c
int main() {
	if (a < 3){
		printf("Hello World");
	}
}
```

TODO list all keywords


## Operations
* bitwise logic: `~`, `&`, `|`, `^`
* bitwise shifts: `<<`, `>>`
* boolean logic: `!`, `&&`, `||`
* equality testing: `==`, `!=`
* comparison: `<`, `<=`, `>`, `>=`



TODO diagram explaining the GNU tool chain: linker


## Best practices

**Namespaces**: use a capital prefix before each function name to indicate their belonging to a certain source file.
Example: in `led.c` use `LED_switchOn();` instead of `switchOn()`
Reason: C does not support native namespaces and including header files could lead to name clashes.

**Typedefs**: declare enums and structs


**Constants**: for constants prefer `const` over preprocessor `#define`


**Top-level static**: If a function or global variable isn't exported in the header, declare it as static in the source file to give it internal linkage.

**Const-Correctness**: use `const` everywhere you can


**Booleans**: Use `bool` from `stdbool.h` whenever you have a boolean value

**Pure Expressions**: avoid function calls in expressions, such as `if`

**Unsigned**: Avoid unsigned types because the integer conversion rules are complicated

**Sizeof**: use `sizeof` on the variable; not the type

**Assert**: Use assert everywhere your program would fail otherwise

**Naming**: Never begin names with `_` or end them with `_t`: they're reserved by future C standards
