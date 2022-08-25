# hello beer: drink 0.5 liter in 4 rounds
import time

LITER_PER_SIP = 37e-3


def sips2liter(num_sips):
    return float(num_sips) * LITER_PER_SIP


beer_l = 0.5
rounds = 4
sips_per_round = [3, 7, 4, 2]

print("I drink {} l in {} rounds:".format(beer_l, rounds))
for sips in sips_per_round:
    print("I drink {} sips.".format(sips))
    time.sleep(sips)
    beer_l = max(beer_l - sips2liter(sips), 0)
    if beer_l == 0.0:
        print("My beer is empty!")
        break
    else:
        print("I have {:.3f} l beer left.".format(beer_l))
