Op Amp
======
<div class="definition">
An operational amplifier (short op-amp) is a DC-coupled high-gain electronic voltage amplifier with a differential input and a single-ended output.
</div>
All amplifier circuits have the feedback to the negative input! <br>
An Op-Amp does not draw current from the input!


## Voltage Follower/Buffer
<figure>
<object class="fig" style="width: 19em" id="OPAMP_Follower" data="img/follower.svg" type="image/svg+xml"></object>
</figure>
$$V_{\mathrm{out}} = V_{\mathrm{in}}$$
Provides current at the output without loading the input.



## Non-Inverting Amplifier
<figure>
<object class="fig" style="width: 22em" id="OPAMP_nonInv" data="img/non-inv.svg" type="image/svg+xml"></object>
</figure>

$V_{\mathrm{out}} = \left(1 + \frac{R_2}{R_1} \right) V_{\mathrm{in}}$

## Inverting Amplifier
<figure>
<object class="fig" style="width: 20em" id="OPAMP_Inv" data="img/inv.svg" type="image/svg+xml"></object>
</figure>
$$V_{\mathrm{out}} = -\frac{R_2}{R_1} V_{\mathrm{in}}$$



## Differential Amplifier
<figure>
<object class="fig" style="width: 20em" id="OPAMP_Diff" data="img/diff.svg" type="image/svg+xml"></object>
</figure>
$V_{\mathrm{out}} = \frac{R_2}{R_1}\left(- V_1 + V_2 \frac{R_4}{R_4 + R_3}\right) + \frac{R_4}{R_4 + R_3} V_2$ 


## Schmitt-Trigger
<figure>
<object class="fig" style="width: 20em" id="OPAMP_Schmitt" data="img/schmitt.svg" type="image/svg+xml"></object>
</figure>
Offset: $V_{\mathrm{ref}} \frac{R_2}{R_1 + R_2}$<br>
$V^{+} = (V_{in} - V_{out}) \frac{R_4}{R_3 + R_4}$<br>
Bias: $\Delta V$

