---
title: Operational Amplifier
tags: [opamp, non-inverting, schmitt trigger]
---

{% definition %}
An operational amplifier (short op-amp) is a DC-coupled high-gain electronic voltage amplifier with a differential input and a single-ended output.
{% enddefinition %}
All amplifier circuits have the feedback to the negative input! <br>
An Op-Amp does not draw current from the input!


## Voltage Follower/Buffer
{% include figure.html filename="opamp_follower.svg" width="15em" description="Voltage Follower" %}
$$V_{\mathrm{out}} = V_{\mathrm{in}}$$
Provides current at the output without loading the input.


## Non-Inverting Amplifier
![Non-Inverting Amplifier](opamp_noninv.svg){ width="20em"}

$$V_{\mathrm{out}} = \left(1 + \frac{R_2}{R_1} \right) V_{\mathrm{in}}$$
with resistances $R_1, R_2 \in \R$ and the voltages $V_{\mathrm{in}}, V_{\mathrm{out}} \in \R$.


## Inverting Amplifier
{% include figure.html filename="opamp_inv.svg" width="18em" description="Inverting Amplifier" %}

$$V_{\mathrm{out}} = -\frac{R_2}{R_1} V_{\mathrm{in}}$$
with resistances $R_1, R_2 \in \R$ and the voltages $V_{\mathrm{in}}, V_{\mathrm{out}} \in \R$.


## Differential Amplifier
{% include figure.html filename="opamp_diff.svg" width="18em" description="Differential Amplifier" %}

$$V_{\mathrm{out}} = \frac{R_2}{R_1}\left(- V_1 + V_2 \frac{R_4}{R_4 + R_3}\right) + \frac{R_4}{R_4 + R_3} V_2$$
with resistances $R_1, R_2, R_3, R_4 \in \R$ and the voltages $V_{\mathrm{in}}, V_{\mathrm{out}} \in \R$.


## Schmitt-Trigger
{% include figure.html filename="opamp_schmitt.svg" width="18em" description="Schmitt Trigger" %}

Offset: $V_{\mathrm{ref}} \frac{R_2}{R_1 + R_2}$<br>
$V^{+} = (V_{in} - V_{out}) \frac{R_4}{R_3 + R_4}$<br>
Bias: $\Delta V$
