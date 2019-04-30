---
title: Rust
---
Rust is a modern compiler language that focueses on performance, reliability, and productivity.


```rust
// hello beer: drink 0.5 l in 4 rounds

use std::{thread, time};

const LITER_PER_SIP: f32 = 37e-3;

fn sips2liter( num_sips: i32 ) -> f32 {
    return (num_sips as f32) * LITER_PER_SIP;
}

fn main(){

	let mut beer_l = 0.5;
	let rounds = 4;
	let sips_per_round = vec![3, 7, 4, 2];

	println!("I drink {} l in {} rounds:", beer_l, rounds);
	for sips in sips_per_round {
		println!("I drink {} sips.\n", sips);
		//thread::sleep( time::Duration::from_secs(sips) );
		beer_l = beer_l - sips2liter( sips as i32 );
		if beer_l <= 0.0 {
			println!("My beer is empty!");
			break
		} else {
			println!("I have {} l beer left.", beer_l);
		}
	}
}
```

Run your own program at the <a href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&code=%2F%2F%20hello%20beer%3A%20drink%200.5%20l%20in%204%20rounds%0A%0Ause%20std%3A%3A%7Bthread%2C%20time%7D%3B%0A%0Aconst%20LITER_PER_SIP%3A%20f32%20%3D%2037e-3%3B%0A%0Afn%20sips2liter(%20num_sips%3A%20i32%20)%20-%3E%20f32%20%7B%0A%20%20%20%20return%20(num_sips%20as%20f32)%20*%20LITER_PER_SIP%3B%0A%7D%0A%0Afn%20main()%7B%0A%0A%09let%20mut%20beer_l%20%3D%200.5%3B%0A%09let%20rounds%20%3D%204%3B%0A%09let%20sips_per_round%20%3D%20vec!%5B3%2C%207%2C%204%2C%202%5D%3B%0A%0A%09println!(%22I%20drink%20%7B%7D%20l%20in%20%7B%7D%20rounds%3A%22%2C%20beer_l%2C%20rounds)%3B%0A%09for%20sips%20in%20sips_per_round%20%7B%0A%09%09println!(%22I%20drink%20%7B%7D%20sips.%5Cn%22%2C%20sips)%3B%0A%09%09%2F%2Fthread%3A%3Asleep(%20time%3A%3ADuration%3A%3Afrom_secs(sips)%20)%3B%0A%09%09beer_l%20%3D%20beer_l%20-%20sips2liter(%20sips%20as%20i32%20)%3B%0A%09%09if%20beer_l%20%3C%3D%200.0%20%7B%0A%09%09%09println!(%22My%20beer%20is%20empty!%22)%3B%0A%09%09%09break%0A%09%09%7D%20else%20%7B%0A%09%09%09println!(%22I%20have%20%7B%7D%20l%20beer%20left.%22%2C%20beer_l)%3B%0A%09%09%7D%0A%09%7D%0A%7D">Rust Playground!</a>


## Types

* Integer: `ì8`, `i16`, `ì32`, `u8`, `u16`, `u32`
* Float: `f32`, `f64`
* String: `char`, `str`
* Container: `array`, `tuple`, `slice`
* Misc: `bool`, `isize`, `usize`


## Differences to common languages

### `match` instead of `switch`

```rust
 match number {        
    1 => println!("One!"),                // Match a single value
    3 | 5 | 7 | 9 => println!("Odd"),     // Match several values
    13...19 => println!("A teen"),        // Match an inclusive range
    _ => println!("Ain't special"),       // Handle the rest of cases
}
```


## Features
* object oriented 
* platform independent 
* safe concurrency 



## References

* [Rust Documentation](https://doc.rust-lang.org/)


