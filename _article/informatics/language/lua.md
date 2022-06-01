---
title: Lua
---

Lua is a lightweight, high-level programming language from 1993 designed primarily for embedded use in applications. Lua is cross-platform, since the interpreter of compiled bytecode is written in ANSI C and Lua has a relatively simple C API to embed it into applications.

Important: In Lua, the indices of strings and tables start at `1` and *not* at `0`! Furthermore, `table` is the only collection type, there are no lists or arrays.


```lua
function factorial(n)
  local x = 1
  for i = 2, n do
    x = x * i
  end
  return x
end
```



## Data Types in Lua

### Primitive Types

* strings `s = 'hello'`
* integer `d = 42`


### Collections: Table
Tables are the most important data structures and, by design, the only collection type. It can contain any type.

```lua
my_table = {1, 'hi', 3.14, 1, 2, {4, 5} }
```

* length of the table: `len = #my_table`  (is 6)
* access element: `hi = my_table[2]`
* subset of the table: `hipi = {table.unpack(my_table, 2, 3)}`


Warning: The `#` symbol returns the value of the last item if that is an integer! If the last item is not an integer, it returns the number of items.


To iterate over a table:
```lua
for key, val in pairs(my_table) do
  print(key, ": ", val)
end
```


## Code Examples

### Working with Strings in Lua

```lua
text = "My name is %s and I am %s years old."
text:format('Alice', 42)
text = "Hi! "..text   -- .. is concatenation
print(text)
```

*Useful Helpers*

```lua
local function starts_with(text, start)
  if type(text) ~= "string" then return end
  if (type(start) == "table") then
    for key, val in pairs(start) do
      if starts_with(text, val) then return true end
    end
  elseif (type(start) == "string") then
    return text:sub(1, #start) == start
  end
end
```


### Working with Files

```lua
function file_exists(name)
   local f=io.open(name,"r")
   if f~=nil then io.close(f) return true else return false end
end
```

```lua
local function write_file(fname, text)
  local f = io.open(fname, 'w')
  f:write(text)
  f:close()
end
```


### Executing Programs
```lua
os.execute('pdf2svg tikz.pdf ' .. outfile)
```



## Object Oriented Programming

```lua
local Vector = {}
Vector.__index = Vector

function Vector:new(x, y, z)    -- The constructor
  -- Since the function definition uses a colon,
  -- its first argument is "self" which refers
  -- to "Vector"
  return setmetatable({x = x, y = y, z = z}, self)
end

function Vector:magnitude()     -- Another method
  -- Reference the implicit object using self
  return math.sqrt(self.x^2 + self.y^2 + self.z^2)
end
```
