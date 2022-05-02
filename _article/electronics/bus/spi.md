---
title: Serial Peripheral Interface (SPI)
tags: [bus, SPI, MOSI, MISO]
---

SPI is serial bus.


## Specification


| Signals |                      |
|---------|----------------------|
| SCLK    | Serial Clock         |
| MOSI    | Master Out, Slave In |
| MISO    | Master In, Slave Out |
| <font style="text-decoration: overline;">SS</font> | ¬Slave Select |


![Connection](SPI_single_slave.svg){}



## Protocol

```diagram
For CPOL=0, CPHA=0 (capture on rising edge):
           ___ ___ ___ ___ ___ ___ ___ ___       
MOSI ··XXXX___X___X___X___X___X___X___X___XXXXXX··
            |   |   |   |   |   |   |   | 
           ___ ___ ___ ___ ___ ___ ___ ___      
MISO ··XXXX___X___X___X___X___X___X___X___XXXXXX··
            |   |   |   |   |   |   |   | 
            |_  |_  |_  |_  |_  |_  |_  |_   
SCLK ··_____/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_____··
            0   1   2   3   4   5   6   7    
       ___                                   ___
SS1  ··   \_________________________________/   ··
```

The master must also configure the clock polarity: rising or falling edge


### Configuration
* CPOL determines the polarity of the clock.
	- CPOL=0: clock idles at 0, leading edge is a rising edge, trailing edge is a falling edge.
	- CPOL=1: clock idles at 1, leading edge is a falling edge, trailing edge is a rising edge.
* CPHA determines the phase of the clock and the timing of the data bits.
	- CPHA=0: The first bit must be on the MOSI line before the leading clock edge.
	- CPHA=1: The sender changes the data on the leading edge, while the receiver captures the data on the trailing edge.






