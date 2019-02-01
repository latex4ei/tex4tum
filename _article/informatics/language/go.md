---
title: Go
---
Go is a compiled, statically typed programming language developed by Google.


## Features
* object oriented 
* platform independent 
* easy concurrency 


## Overview
* every code file starts with the `package` statement
* program entry is function `main` in package "main".
* types can be implicit `x := "hello"` or explicit `var x string = "hello"`
* Go distinguishes between small and capital words
* files must end with a blank line
* Go supports complex numbers: `var z complex = 5 + 3i`
* concurrent tasks are created with `go test()`



## Example: Hello World
{% highlight go %}
package main

import "fmt"

func main() {
    fmt.Println("Hello, World")
}
{% endhighlight %}



