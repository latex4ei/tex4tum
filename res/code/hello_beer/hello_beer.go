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
