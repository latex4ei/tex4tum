---
title: Ada
---

Ada is a programming language intended for real-time safety-critical systems.


{% highlight ada %}
with Ada.Text_IO;

procedure main is
	message : String := "Hello World"
begin
	-- Print message
	Ada.Text_IO.Put_Line( message );
end main;
{% endhighlight %}


## Data Types
{% highlight ada %}
-- type declarations
type Counter_Type is range 1 .. 10;                  -- constrained
subtype Counter_Type is Counter_Type range 1 .. 3;   -- further constrained
type Vector_Type is array (1 .. 3) of Integer;       -- 3 elements

-- instanciations
MyCounter : Counter_Type := 1;
Velocity : Vector_Type := (1, 2, 3);
{% endhighlight %}

* Discrete Scalars: `Integer`, `Natural`, `Positive`
* Real Scalars: `Float`
* Pointer: `Accesss`
* Composite: `Array`, `Record`, `Task`


