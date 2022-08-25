// hello beer: drink 0.5 liter in 4 rounds

const LITER_PER_SIP = 37e-3;

function sips2liter( num_sips ) {
    return num_sips * LITER_PER_SIP;
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


var beer_l = 0.5;
var sips_per_round = [3, 7, 4, 2];


for (var sips in sips_per_round) {
    console.log("I drink {} sips.".format(sips));
    sleep(sips * 1000);
    beer_l = Math.max(beer_l - sips2liter( sips ), 0);
    if (beer_l == 0){
        console.log("My beer is empty!");
        break;
    } else {
        console.log("I have {:.3f} l beer left.".format(beer_l));
    }
}
