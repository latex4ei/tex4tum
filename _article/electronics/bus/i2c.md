---
title: Inter-Integrated Circuit I²C
tags: [bus, I2C, SDA, SCK]
---

I2C is serial bus used to attach lower-speed peripheral ICs to processors and microcontrollers in short-distance.


## Specification

I2C uses only two bidirectional open collector or open drain lines, *SDA* and *SCK*, which are pulled up with resistors. Typical voltages used are +5 V or +3.3 V.


Transmission Speeds

| Mode           | Speed      |
|----------------|------------|
| Standard Mode  | 100 kbit/s |
| Fast Mode      | 400 kbit/s |
| Fast Mode Plus | 1.0 Mbit/s |


## Protocol
There is one master and several slaves (max 127). The MSB is transmitted first.

```diagram
      __    ___ ___ ___ ___ ___ ___ ___ ___        __
SDA ··  \__/___X___X___X___X___X___X___X___\______/  ··
      ____   _   _   _   _   _   _   _   _   _   ____
SCL ··    \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/    ··
        S    0   1   2   3   4   5   6   7  ACK   P  

Full request: Address, Command, Data:
      __    __   __ ___     __   __     __   __        _ 
SDA ··  \__/__···__X___\___/__···__\___/__···__\______/ 
      ____   _ _ _   _   _   _ _ _   _   _ _ _   _   ___
SCL ··    \_/ 0-6 \_/7\_/8\_/ 0-7 \_/8\_/ 0-7 \_/8\_/   
        S     Addr  RW  ACK   Cmd   ACK   Data  ACK   P 
```

### Timing
* Start (S): master pulls SDA low while SCL stays high.
* Data Bits (0-7): Sampling starts when SCL rises. For a bit to be valid, SDA must not change between a rising and falling edge of SCL.
* ACK: Each byte of data is followed by a 9th ACK bit. This bit is controlled by the slave! The master releases SDA (pulled high). The byte is acknowledged iff the slaves pulls SDA bit low. 0 = ACK, 1 = NAK. 
* Stop (P): signaled when SCL rises, followed by SDA rising.


### Write to Device
1. Master sends Start bit.
1. Master sends Address+R/W: 7 bit slave address and one R/W bit (0=write). Slave ACKs.
1. Master sends a command byte followed by any number of data bytes. Slave ACKs every byte.


### Read from Device
1. Master sends Start bit.
1. Master sends Address+R/W: 7 bit slave address and one R/W bit (0=write). Slave ACKs.
1. Master sends the register address it wants to read from the Slave. Slave ACKs every byte.
1. Master resends Start bit.
1. Master sends 7 bit Address and R/W bit set to 1=read. Slave ACKs.
1. Master continues SCL but releases SDA. Slave sends requested data. Master ACKs every byte.
1. When the Master received the last expected byte, it sends a NAK instead of ACK followed by the Stop (P).



## References

* [Texas Instruments: Understanding the I2C Bus](http://www.ti.com/lit/an/slva704/slva704.pdf)

