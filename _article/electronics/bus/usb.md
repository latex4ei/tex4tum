---
title: Universal Serial Bus (USB)
tags: USB Type-C
---

The USB is serial bus commonly used in computers.

## Overview

| Standard        | Speed       | Current |
|-----------------|-------------|---------|
| USB 1.0 (1996)  |  12 Mbit/s  | 100 mA  |
| USB 2.0 (2000)  | 480 Mbit/s  | 500 mA  |
| USB 3.0 (2008)  | 5.0 Gbit/s  | 900 mA  |
| USB 3.1 (2013)  |  10 Gbit/s  |         |
| USB 3.2 (2017)  |  20 Gbit/s  |         |



Maximum devices: 127.
Cable length: $< \SI{5}{m}$


{% include figure.html width="20em" filename="usb-connectors.svg" description="USB Connectors" %}




## USB 2.0

| Pin | Signal | Color | Meaning |
|-----|------|----|----|
| 1   | VBUS | Red   | Vdd |
| 2   | D-   | White | Inverted Signal |
| 3   | D+   | Green | Signal |
| 4   | GND  | Black | Ground |

| Spec | |
|---|---|
| Speed | 480 Mbit/s |
| Voltage | 5.0 ± 0.25 V |
| Current | 100mA, 500mA, 5A |
| Length | < 5 m |

The practical speed is 280 Mbit/s due to bus access constraints.


### Pinout
<table style="text-align: center;">
<caption>Standardstecker A / B
</caption>
<tbody><tr>
 <th>Pin</th>
 <th>Color</th>
 <th>Signal</th>
 <th>Description</th>
</tr>
<tr>
 <td style="text-align: center;">Shell</td>
 <td style="background: lightgray; color: black;">n.a.</td>
 <td>Shield</td>
 <td>Schirmgeflecht</td>
</tr>
<tr>
 <td style="text-align: center;">1</td>
 <td style="background: red; color: white;">Red</td>
 <td>VBUS</td>
 <td>+5&nbsp;V</td>
</tr>
<tr>
 <td style="text-align: center;">2</td>
 <td style="background: white; color: black;">White</td>
 <td>D−</td>
 <td rowspan="2" style="text-align: left;">Data USB&nbsp;2.0, differential Pair −/+</td>
</tr>
<tr>
<td style="text-align: center;">3</td>
<td style="background: green; color: white;">Green</td>
<td>D+</td>
</tr>
<tr>
<td style="text-align: center;">4</td>
<td style="background: black; color: white;">Black</td>
<td>GND</td>
<td>Ground</td>
</tr></tbody>
</table>




## USB 3.0


<!-- Wikipedia Table -->
<table>
<tbody style="text-align: center;"><tr>
<th rowspan="2">Pin</th>
<th rowspan="2">Color</th>
<th colspan="2">Signal name</th>
<th rowspan="2">Description</th>
</tr>
<tr>
<th>A connector</th>
<th>B connector</th>
</tr>
<tr>
<td>Shell</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td colspan="2">Shield</td>
<td style="text-align: left;">Metal housing</td>
</tr>
<tr>
<td>1</td>
<td style="background: red; color: white;">Red</td>
<td colspan="2">VBUS</td>
<td style="text-align: left;">Power</td>
</tr>
<tr>
<td>2</td>
<td style="background: grey;">White</td>
<td colspan="2">D−</td>
<td rowspan="2" style="text-align: left;">USB&nbsp;2.0 differential pair</td>
</tr>
<tr>
<td>3</td>
<td style="background: green; color: white;">Green</td>
<td colspan="2">D+</td>
</tr>
<tr>
<td>4</td>
<td style="background: black; color: white;">Black</td>
<td colspan="2">GND</td>
<td style="text-align: left;">Ground for power return</td>
</tr>
<tr>
<td>5</td>
<td style="background: blue; color: white;">Blue</td>
<td>StdA_SSRX−</td>
<td>StdB_SSTX−</td>
<td rowspan="2" style="text-align: left;">SuperSpeed transmitter differential pair</td>
</tr>
<tr>
<td>6</td>
<td style="background: yellow;">Yellow</td>
<td>StdA_SSRX+</td>
<td>StdB_SSTX+</td>
</tr>
<tr>
<td>7</td>
<td data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td colspan="2">GND_DRAIN</td>
<td style="text-align: left;">Ground for signal return</td>
</tr>
<tr>
<td>8</td>
<td style="background: purple; color: white;">Purple</td>
<td>StdA_SSTX−</td>
<td>StdB_SSRX−</td>
<td rowspan="2" style="text-align: left;">SuperSpeed receiver differential pair</td>
</tr>
<tr>
<td>9</td>
<td style="background: orange;">Orange</td>
<td>StdA_SSTX+</td>
<td>StdB_SSRX+</td>
</tr>
<tr>
<th style="background:none;" colspan="5">The USB&nbsp;3.0 <i>Powered-B</i> connector has two additional pins for power and ground supplied to the device.</th>
</tr>
<tr>
<td>10</td>
<td colspan="2" rowspan="2" data-sort-value="" style="background: #ececec; color: #2C2C2C; vertical-align: middle; font-size: smaller; text-align: center;" class="table-na">N/A</td>
<td>DPWR</td>
<td style="text-align: left;">Power provided to device (Powered-B&nbsp;only)</td>
</tr>
<tr>
<td>11</td>
<td>DGND</td>
<td style="text-align: left;">Ground for DPWR return (Powered-B&nbsp;only)</td>
</tr>
</tbody>
</table>



## References

* USB-C

