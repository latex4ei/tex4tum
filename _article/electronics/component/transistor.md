---
title: Transistor
tags: [bipolar, bjt, mosfet]
---

Is a current amplifier.


## Bipolar Transistor (BJT)
{% include figure.html filename="bjt.png" description="PNP: E->B--C; NPN: C--B->E" %}

### Cut-Off Voltage
The voltage, where ...
$V_{\mathrm{BE}} < 0.7V$

### Linear Region

$$V_{\mathrm{BE}} \approx 0.7V$$


## MOS-FET


### Drain current

**nMos**
p-dotiertes Substrat, n-dotierte Drain/Source, schlechter pull up


$$I_d = \begin{cases}
0, &\text{ für }  U_{gs} - U_{th} \le 0    \text{(Sperrber.)}\\
\beta [(u_{gs} - U_{th}) \cdot u_{ds} - \frac{1}{2} u_{ds}^2], &\text{ für }  0 \le U_{gs} - U_{th} \ge u_{ds} \  \text{(linearer Ber.)}\\
\frac{1}{2} \beta \cdot (u_{gs} - U_{th})^2, &\text{ für }  0 \le U_{gs} - U_{th} \le u_{ds} \  \text{(Sättigungsber.)}
\end{cases}$$


**pMos** 
n-dotiertes Substrat, p-dotierte Drain/Source, schlechter pull down


$$I_d = \begin{cases}
0, &\text{ für }  U_{gs} - U_{th} \ge 0    \text{(Sperrber.)}\\
- \beta [(u_{gs} - U_{th}) \cdot u_{ds} - \frac{1}{2} u_{ds}^2] , &\text{ für }  0 \ge U_{gs} - U_{th} \le u_{ds} \  \text{(linearer Ber.)}\\
- \frac{1}{2} \beta \cdot (u_{gs} - U_{th})^2, &\text{ für }  0 \ge U_{gs} - U_{th} \ge u_{ds} \  \text{(Sättigungsber.)}
\end{cases}$$


