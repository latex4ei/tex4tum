---
title: Controller Area Network (CAN)
tags: bus, automotive, vehicle
---

Controller Area Network (CAN bus) is a robust vehicle bus standard designed to allow microcontrollers and devices to communicate with each other in applications without a host computer.

All nodes are connected to each other through two wires, which are a twisted pair with a 120 Ω (nominal) characteristic impedance.


| Property | Value |
|----------|-------| 
| Wires    | 2     |
| Speed    | 125 kb/s .. 1 Mbps |


## Message Format

* ID: encodes priority
* DLC: encodes lenght: 1 to 8 bytes
* Data: the payload



## High Speed CAN (ISO 11898-2)
High speed CAN signaling drives the CAN high wire towards 5 V and the CAN low wire towards 0 V when transmitting a dominant (0), and does not drive either wire when transmitting a recessive (1).



