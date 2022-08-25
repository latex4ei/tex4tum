#!/usr/bin/env bash
# hello beer: drink 0.5 liter in 4 rounds

LITER_PER_SIP=$(bc <<< "scale=3; 37/1000")
ROUNDS=4

function sips2liter(){
    echo $(bc <<< "scale=3; $1 * ${LITER_PER_SIP}")
}

beer_l=0.5
sips_per_round=(3 7 4 2)

echo "I drink ${beer_l} l in ${ROUNDS} rounds:"
for sips in ${sips_per_round[@]}
do
    echo "I drink ${sips} sips."
    sleep ${sips}s
    consumed_l=$(sips2liter ${sips})
    beer_l=$(bc <<< "scale=3; ${beer_l} - ${consumed_l}" )
    if [[ $(bc <<< "${beer_l} <= 0.0") -eq 1 ]]; then
        echo "My beer is empty!"
        break
    else
        echo "I have ${beer_l} l beer left."
    fi
done


# exit with error code
exit 0
