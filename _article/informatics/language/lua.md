---
title: Lua
---
Lua is a lightweight, high-level programming language from 1993 designed primarily for embedded use in applications.Lua is cross-platform, since the interpreter of compiled bytecode is written in ANSI C and Lua has a relatively simple C API to embed it into applications.


```lua
function factorial(n)
  local x = 1
  for i = 2, n do
    x = x * i
  end
  return x
end

```



### Collections: Table
Tables are the most important data structures and, by design, the only collection type.

```lua
table = {1, 'hi', 3.14, 1, 2, [4, 5]] 
```

To iterate over a table:
```lua
for key, val in pairs(table) do
  print(key, ": ", val)
end
```



