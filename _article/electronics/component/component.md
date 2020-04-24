---
tite: Electrical Component
---


## Types of Components

| Type | Symbol | Function | Linearized |
|--------|--------|--------|--------|
| Resistivity | {% inlineimage symbol_resistivity.svg %} | $f_R(u,i)$  | $u = U_0 + R \cdot i$|
| Capacity | {% inlineimage symbol_capacity.svg %} | $f_C(u,q)$ | $q = Q_0 + C \cdot u$|
| Inductivity | {% inlineimage symbol_inductivity.svg %} | $f_L(i,\Phi)$ | $\Phi = \Phi_0 + L \cdot i$|
| Memristivity | {% inlineimage symbol_memristivity.svg %} | $f_M(q,\Phi)$ | $\Phi = \Phi_0 + M \cdot q$ |



## Two Terminals

| Component  |  Function  |  Chart  |
| -------------| -------- |--------|
| Open Circuit </br> {% inlineimage  symbol_opencircuit.svg %}  | $u \in \R$ </br> $i = 0$    | {% inlineimage char_opencircuit.svg %}  |
| Short Circuit </br> {% inlineimage symbol_shortcircuit.svg %} | $u = 0$ </br>  $i \in \R$   | {% inlineimage char_shortcircuit.svg %}  |
| Voltage Source </br> {% inlineimage symbol_voltage_source.svg %} | $u = U_0$ </br> $i \in \R$ | {% inlineimage char_source_voltage.svg %} |
| Current Source </br> {% inlineimage symbol_current_source.svg %} | $u \in \R$ </br> $i = I_0$  | {% inlineimage char_source_current.svg %}  |
| Nullator  </br> {% inlineimage symbol_nullator.svg %}  | $u = 0$ <br> $i = 0$                            |  {% inlineimage char_nullator.svg %} |
| Norrator  </br> {% inlineimage symbol_norrator.svg %}  | $u \in \R$ <br> $i \in \R$ |  {% inlineimage char_norrator.svg %} |
| Resistor </br> {% inlineimage symbol_resistor.svg %} | $u = R \cdot i$ </br> $i = \frac{1}{R} \cdot u$ | {% inlineimage char_resistor.svg %} |
| Capacitor </br> {% inlineimage symbol_capacitor.svg %} | $I = C \cdot\dot U$ <br> $C = \frac{\diff Q}{\diff U}$ |   |
| Inductor </br> {% inlineimage symbol_inductor.svg %} | $U = L \cdot\dot I$ <br> $L = \frac{\diff \Phi}{\diff U}$ |   |
| ideal Diode </br> {% inlineimage symbol_diode.svg %} | $\begin{array}{ll} u = 0 \text{ if } i > 0 \\ i = 0 \text{ if } u < 0\end{array}$ | {% inlineimage char_diode_ideal.svg %} |
| reale Diode </br> {% inlineimage symbol_diode_real.svg %} | $\begin{array}{ll} u_D = u_T \cdot \ln \left(\frac{i_D}{I_S} + 1 \right) \\ i_D = I_S \cdot \left( \exp \left(\frac{u_D}{U_T}\right) -1 \right) \end{array}$ |  |
| LED </br> {% inlineimage symbol_led.svg %}| $i = I_S \cdot \left( \exp \left(\frac{u_D}{U_T}\right) -1 \right) - i_L$ |   |



## Three Terminal
* [Transistor](transistor.html)

## More Terminal
* [Op-Amp](op-amp.html)







{{ FOLDER_TOC }}

