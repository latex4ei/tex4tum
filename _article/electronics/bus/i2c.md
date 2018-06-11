---
title: Inter-Integrated Circuit I²C
tags: [I2C, SDA, SCK]
---

I2C is serial bus used to attach lower-speed peripheral ICs to processors and microcontrollers in short-distance.


## Specification

I2C uses only two bidirectional open collector or open drain lines, *SDA* and *SCK*, which are pulled up with resistors. Typical voltages used are +5 V or +3.3 V.


Transmission Speeds

| Mode | Speed |
| --- | --- |
| Standard Mode | 100 kbit/s |
| Fast Mode | 400 kbit/s |
| Fast Mode Plus | 1.0 Mbit/s |


## Protocol

### Tests
{% include figure.html filename="byte-transfer.svg" description="Byte Transfer" %}

A Link to [SPI](spi.html) and short [SPI] and [USART](usart.html)

See [Specification]

[USART](usart.html)
