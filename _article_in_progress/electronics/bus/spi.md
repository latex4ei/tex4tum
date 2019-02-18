---
title: Serial Peripheral Interface
tags: [bus, SPI, MOSI, MISO]
---

SPI is serial bus.


## Specification

| Signals | |
|------|---|
| SCLK | Serial Clock |
| MOSI | Master Out, Slave In |
| MISO | Master In, Slave Out |
| <font style="text-decoration: overline;">SS</font> | ¬Slave Select |



## Protocol

```diagram
       __    ___ ___ ___ ___ ___ ___ ___ ___        __
MOSI ··  \__/___X___X___X___X___X___X___X___\______/  ··

       __    ___ ___ ___ ___ ___ ___ ___ ___        __
MISO ··  \__/___X___X___X___X___X___X___X___\______/  ··

      ______   _   _   _   _   _   _   _   _   _   ___
SCLK ··     \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/   ··
             0   1   2   3   4   5   6   7    
       ___                                         ___
SS1  ··   \_______________________________________/   ··

       _______________________________________________
SS2  ··                                               ··

```






## Connection
{% include figure.html filename="SPI_single_slave.svg" description="Connection" %}



