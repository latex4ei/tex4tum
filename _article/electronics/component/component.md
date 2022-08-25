---
tite: Electrical Component
---


## Types of Components

| Type | Symbol | Function | Linearized |
|--------|--------|--------|--------|
| Resistivity | ![resistivity](symb/symbol_resistivity.svg){#resistivity} | $f_R(u,i)$  | $u = U_0 + R \cdot i$|
| Capacity | ![capacity](symb/symbol_capacity.svg){#capacity} | $f_C(u,q)$ | $q = Q_0 + C \cdot u$|
| Inductivity | ![inductivity](symb/symbol_inductivity.svg){#inductivity} | $f_L(i,\Phi)$ | $\Phi = \Phi_0 + L \cdot i$|
| Memristivity | ![memristivity](symb/symbol_memristivity.svg){#memristivity} | $f_M(q,\Phi)$ | $\Phi = \Phi_0 + M \cdot q$ |



## Two Terminals

| Component  |  Function  |  Chart  |
| -------------| -------- |--------|
| Open Circuit </br> ![opencircuit](symb/symbol_opencircuit.svg){#opencircuit} | $u \in \R$ </br> $i = 0$    | ![opencircuit](chart/char_opencircuit.svg){#opencircuit}  |
| Short Circuit </br> ![shortcircuit](symb/symbol_shortcircuit.svg){#shortcircuit} | $u = 0$ </br>  $i \in \R$   | ![shortcircuit](chart/char_shortcircuit.svg){#shortcircuit}  |
| Voltage Source </br> ![voltage_source](symb/symbol_voltage_source.svg){#voltage_source} | $u = U_0$ </br> $i \in \R$ | ![source_voltage](chart/char_source_voltage.svg){#source_voltage} |
| Current Source </br> ![current_source](symb/symbol_current_source.svg){#current_source} | $u \in \R$ </br> $i = I_0$  | ![source_current](chart/char_source_current.svg){#source_current}  |
| Nullator  </br> ![nullator](symb/symbol_nullator.svg){#nullator}  | $u = 0$ <br> $i = 0$                            |  ![nullator](chart/char_nullator.svg){#nullator} |
| Norrator  </br> ![norrator](symb/symbol_norrator.svg){#norrator}  | $u \in \R$ <br> $i \in \R$ |  ![norrator](chart/char_norrator.svg){#norrator} |
| Resistor </br> ![resistor](symb/symbol_resistor.svg){#resistor} | $u = R \cdot i$ </br> $i = \frac{1}{R} \cdot u$ | ![resistor](chart/char_resistor.svg){#resistor} |
| Capacitor </br> ![capacitor](symb/symbol_capacitor.svg){#capacitor} | $I = C \cdot\dot U$ <br> $C = \frac{\diff Q}{\diff U}$ |   |
| Inductor </br> ![inductor](symb/symbol_inductor.svg){#inductor} | $U = L \cdot\dot I$ <br> $L = \frac{\diff \Phi}{\diff U}$ |   |
| ideal Diode </br> ![diode](symb/symbol_diode.svg){#diode} | $\begin{array}{ll} u = 0 \text{ if } i > 0 \\ i = 0 \text{ if } u < 0\end{array}$ | ![diode_ideal](chart/char_diode_ideal.svg){#diode_ideal} |
| reale Diode </br> ![diode_real](symb/symbol_diode_real.svg){#diode_real} | $\begin{array}{ll} u_D = u_T \cdot \ln \left(\frac{i_D}{I_S} + 1 \right) \\ i_D = I_S \cdot \left( \exp \left(\frac{u_D}{U_T}\right) -1 \right) \end{array}$ |  |
| LED </br> ![led](symb/symbol_led.svg){#led}| $i = I_S \cdot \left( \exp \left(\frac{u_D}{U_T}\right) -1 \right) - i_L$ |   |



## Three Terminal
* [Transistor](/transistor)

## More Terminal
* [Op-Amp](/op-amp)




