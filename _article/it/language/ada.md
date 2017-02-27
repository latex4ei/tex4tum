---
title: Ada
---

{% definition %}
Ada is a programming language intended for real-time safety-critical systems.
{% enddefinition %}


{% highlight ada %}
with Ada.Text_IO;

procedure main is
	message : String := "Hello World"
begin
	-- Print message
	Ada.Text_IO.Put_Line( message );
end main;
{% endhighlight %}
