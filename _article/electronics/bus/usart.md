---
title: Universal Asynchronous Receiver Transmitter (UART)
tags: [bus, UART, RX, TX, RTS, CTS]
---

UART is serial bus.


## Specification

| Signals |                         |
|---------|-------------------------|
| RX      | Receiving Line (In)     |
| TX      | Transmitting Line (Out) |
| (RTS)   | Request to Send         |
| (CTS)   | Clear to Send           |

Note: TX signal of the sender is connected to the RX signal at the receiver!


### Baudrate
Baudrate is the same as frequency or bitrate in bit/s!


**Common Baudrates:**

*  9'600 bit/s
* 38'400 bit/s
* 57'600 bit/s
* 115'200 bit/s


Example:
If a baudrate of 9600 bits/s is used with one stop bit and no parity (10 bit per byte) then the datarate would be 960 byte/s.



## Protocol
UART uses serial transmission of 8 bits framed by start and stop bits.

```diagram
       ___     ___ ___ ___ ___ ___ ___ ___ ___ ________
RX ---    \___/___X___X___X___X___X___X___X___X___/    ---
            S  b0  b1  b2  b3  b4  b5  b6  b7  pr   P

S: start bit,  b0-7: data,  pr: parity bit,  P: stop bit
```

Explanation: 
All operations of the UART hardware are controlled by an internal clock signal which runs at a multiple of the data rate, typically 8 or 16 times the bit rate. The receiver tests the state of the incoming signal on each clock pulse, looking for the beginning of the start bit. If the apparent start bit lasts at least one-half of the bit time, it is valid and signals the start of a new character. If not, it is considered a spurious pulse and is ignored.


**Variants:**
Stop bits: 1, 1.5, 2</br>
Parity: odd, even, none


### Receiver Errors

* **Overrun error:** the receiver cannot process the character that just came in before the next one arrives.
* **Underrun error** the next character starts delayed which might be intepreted as the end of the transmission.
* **Framing error:** receiver does not see a "stop" bit at the expected "stop" bit time.
* **Parity error:** the calculated parity of the received data bits disagrees with the received parity bit.
* **Break condition:** receiver continuously reads 0 for longer than the full character time



