// hello beer: drink 0.5 liter in 4 rounds
#include <time.h>
#include <stdio.h>

const float LITER_PER_SIP = 37.0 / 1000.0;

float sips2liter( num_sips ){
    return (float)( num_sips ) * LITER_PER_SIP;
}

int main(int argc, char *argv[]){

    const int ROUNDS = 4;
    float beer_l = 0.5;
    int sips_per_round[ROUNDS] = {3, 7, 4, 2};

    printf("I drink %.2f l in %d rounds:", beer_l, rounds)
    for (int idx = 0; idx < ROUNDS; idx++){
        int sips = sips_per_round[idx];
        printf("I drink %d sips.", sips);
        sleep( sips );
        beer_l -= sips2liter( sips );

        if(beer_l <= 0.0){
            beer_l = 0.0;
            printf("My beer is empty!");
            break;
        } else {
            printf("I have %.3f l beer left.", beer_l);
        }
    }

}
