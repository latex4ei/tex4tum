---
title: Ada
---

Ada is a programming language intended for real-time safety-critical systems.


```ada
with Ada.Text_IO;

procedure main is
	message : String := "Hello World"
begin
	-- Print message
	Ada.Text_IO.Put_Line( message );
end main;
```


## Data Types

```ada
-- type declarations
type Counter_Type is range 1 .. 10;                  -- constrained
subtype Counter_Type is Counter_Type range 1 .. 3;   -- further constrained
type Vector_Type is array (1 .. 3) of Integer;       -- 3 elements

-- instanciations
MyCounter : Counter_Type := 1;
Velocity : Vector_Type := (1, 2, 3);
```

* Discrete Scalars: `Integer`, `Natural`, `Positive`
* Real Scalars: `Float`
* Pointer: `Access`
* Composite: `Array`, `Record`, `Task`


```ada
type Day_type   is range    1 ..   31;
type Month_type is range    1 ..   12;
type Year_type  is range 1800 .. 2100;

type Date is record
   Day   : Day_type;
   Month : Month_type;
   Year  : Year_type;
end record;
```

## References

* ISO/IEC 8652: Information technology—Programming languages—Ada

* [Ada 2012 Reference Manual](http://www.ada-auth.org/standards/12rm/html/RM-TOC.html)

* [Adacore: GNAT Reference Manual 20.0](http://docs.adacore.com/live/wave/gnat_rm/html/gnat_rm/gnat_rm.html)

