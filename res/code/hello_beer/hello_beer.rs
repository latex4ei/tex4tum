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
