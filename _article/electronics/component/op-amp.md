---
title: Op Amp
---

{% definition %}
An operational amplifier (short op-amp) is a DC-coupled high-gain electronic voltage amplifier with a differential input and a single-ended output.
{% enddefinition %}
All amplifier circuits have the feedback to the negative input! <br>
An Op-Amp does not draw current from the input!


## Voltage Follower/Buffer
{% include figure.html filename="opamp_follower.svg" description="Voltage Follower" %}
$$V_{\mathrm{out}} = V_{\mathrm{in}}$$
Provides current at the output without loading the input.


## Non-Inverting Amplifier
{% include figure.html width="20em" filename="opamp_noninv.svg" description="Non-Inverting Amplifier" %}

$V_{\mathrm{out}} = \left(1 + \frac{R_2}{R_1} \right) V_{\mathrm{in}}$


## Inverting Amplifier
{% include figure.html filename="opamp_inv.svg" description="Inverting Amplifier" %}
$$V_{\mathrm{out}} = -\frac{R_2}{R_1} V_{\mathrm{in}}$$


## Differential Amplifier
{% include figure.html filename="opamp_diff.svg" description="Differential Amplifier" %}

$V_{\mathrm{out}} = \frac{R_2}{R_1}\left(- V_1 + V_2 \frac{R_4}{R_4 + R_3}\right) + \frac{R_4}{R_4 + R_3} V_2$


## Schmitt-Trigger
{% include figure.html filename="opamp_schmitt.svg" description="Schmitt Trigger" %}
Offset: $V_{\mathrm{ref}} \frac{R_2}{R_1 + R_2}$<br>
$V^{+} = (V_{in} - V_{out}) \frac{R_4}{R_3 + R_4}$<br>
Bias: $\Delta V$
