---
title: Go
---
Go is a compiled, statically typed programming language developed by Google.


```go
// hello beer: drink 0.5 liter in 4 rounds
package main

import (
	"fmt"
	"time"
)

const LITER_PER_SIP = 37e-3

func sips2liter( num_sips int ) float64 {
    return float64( num_sips ) * LITER_PER_SIP
}

func main(){

	beer_l := 0.5
	rounds := 4
	sips_per_round := [] int {3, 7, 4, 2}

	fmt.Printf("I drink %g l in %d rounds:\n", beer_l, rounds)
	for _, sips := range sips_per_round {
		fmt.Printf("I drink %d sips.\n", sips)
		time.Sleep( time.Duration(sips) * time.Second)
		beer_l = beer_l - sips2liter( sips )
		if (beer_l <= 0.0){
			fmt.Println("My beer is empty!")
			break
		} else {
			fmt.Printf("I have %g l beer left.\n", beer_l)
		}
	}
}
```

Run your own program at the [Go Playground](https://play.golang.org/)!



## Important Basics
* every code file starts with the `package` statement
* program entry is function `main` in package "main".
* types can be implicit `x := "hello"` or explicit `var x string = "hello"`
* Go distinguishes between small and capital words
* files must end with a blank line
* Go supports complex numbers: `var z complex = 5 + 3i`
* concurrent tasks are created with `go test()`
* omits some common features such as inheritance, generics, assertions, pointer arithmetic, and implicit type conversions.


## Data Types
In Go you can define distinct new types such as `type ipv4addr uint32`

* Integers: `int`,`uint`, `int8`, `int16`, `int32`, `int64`, `uint8`, `uint16`, `uint32`, `uint64`
* Floats: `float32`, `float64`, `complex64`, `complex128`
* Others: `byte, bool, string`


### Collections
* Arrays: `var a [10]int`, Length via `len(a)`
* Slices: `p := []int{2, 3, 5, 7, 11, 13}`
* Maps: `map[string]int{"Alice": 2, "Bob": 13}`



## Control Flow
```go
if answer != 42 {
    return "Wrong answer"
}

switch score {
	case 0, 1, 3:
		fmt.Println("Terrible")
	case 4, 5:
		fmt.Println("Awesome")
	default:
		fmt.Println("Unknown")
}
```

## Example: Hello World

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World")
}
```


## References

* [Go-lang](https://golang.org/)
