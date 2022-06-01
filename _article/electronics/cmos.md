---
title: CMOS
tags: [mosfet, inverter, nand, nor, not]
---

Complementary Metal (Poly-Si) Oxide (SiO2) Semiconductor (CMOS).


<style>.img-fluid{ height: 15em; }</style>

| **NOT**      | **NAND**    | **NOR**     |
|--------------|-------------|-------------|
|![cmos_not](circuits/cmos_not.svg){#cmos_not}  | ![cmos_nand](circuits/cmos_nand.svg){#cmos_nand}  | ![cmos_nor](circuits/cmos_nor.svg){#cmos_nor}  |




## Parameters

----------------------------      -------------
channel width                     $W_{\ir n/p}$
channel length                    $L_{\ir n/p}$
gate oxide thickness              $t_{\ir ox}$
electron mobility                 $\mu_{\ir n} \approx \SI{250e-4}{\meter\squared\per\volt\second}$
		                          $\mu_{\ir p} \approx \SI{200e-4}{\meter\squared\per\volt\second}$
rel. permittivity of gate oxide   $\epsilon_{\ir ox} \approx 3,9$
dielectric constant               $\epsilon_0 = \SI{8.8541878e-12}{\ampere\second\per\volt\meter}$
specific oxide capacity           $C'_{\ir ox} = \frac{\varepsilon_{\ir ox} \varepsilon_0}{t_{\ir ox}}$
oxide capacity                    $C_{\ir ox} = C'_{\ir ox} \cdot WL$
gain (also $\beta$)               $K_{\ir n} = \mu_{\ir n} C'_{\ir ox} \frac{W_{\ir n}}{L_{\ir n}}$
			                      $K_{\ir p} = (-1) \mu_{\ir p} C'_{\ir ox} \frac{W_{\ir p}}{L_{\ir p}}$
propagation delay                 $t_{\ir pHL} \propto \frac{C_L t_{\ir ox} L_{\ir p}}{W_{\ir p} \mu_{\ir p} \varepsilon_{\ir ox} (V_{\ir DD} - |V_{\ir th}|)}$
----------------------------      -------------



## Inverter Power

![Power Consumption of a CMOS Inverter](inverter_switching_current.svg){ width="25em"}


### Dynamic Power Consumption

$$P_{\ir dyn} = P_{\ir cap} + P_{\ir short}$$


### Capacitive Power

$$P_{\ir cap} = \alpha_{01} f C_L V_{\ir DD}^2$$


### Short Circuit Power

$$P_{\ir short} = \alpha_{01} f \beta_n \tau (V_{\ir DD} - 2V_{\ir th})^3$$
