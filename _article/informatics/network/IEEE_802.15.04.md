---
title: IEEE 802.15.4
---
IEEE 802.15.4 is the standard for “Wireless Medium AccessControl (MAC) and Physical Layer (PHY) Specifications for Low-Rate Wireless Personal Area Networks (LR-WPANs)”



## Maximum Values
* Raw data rate: 250 kbps
* Transmission Power: 1 mW
* PHY payload: 127 bytes
	Reason: to ensure low packet and bit error rates in a lossy RF environment
* Address: 16 bit or 64 bit



## Physical Layer 1 (PHY)

### Features
* Link quality indicator (LQI) for received packets
* Channel frequency selection


|    |  868 MHz | 2.4 GHz |
|----|----------|---------|
| Modulation | BPSK | O-QPSK  |
| Bit Rate | 20 kbps | 250 kbps |
| Symbols | 1 bit/smyb | 4 bit/symb | 
| Chips/Symbol | 15 | 32 |


### PHY Header (6 byte)
* Preamble: 4 byte all zero
* Start-of-frame delimiter: 1 byte (0b11100101)
* Length: 1 byte (bits 0-6, bit 7 reserved)



### Channels
* 3 channels available in 868MHz bands
* 30 channels available in the 915MHz bands
* 16 channels available in the 2.4GHz bands





## Medium Access Layer 2 (MAC)
* 4 types of MAC frames: Data, Beacon, Ack, Command
* typically 25 bytes MAC header


### Beacon Enabled
* PAN Coordinator sends beacons. The beacon interval defines one superframe. Each superframe is divided into 16 time slots. 


Slots:
* Contention Access Period: random, collisions possible
* Contention Free Period: slots are asigned to individual devices



* Access Management:
	- Scheduled access (“I Tell You when to Talk”) with beacons
	- Random access (“You Decide when to Talk but prepare for Collisions”)

* CSMA/CA
	1. Carrier Sense: prior to transmitting, a node first listens to the shared medium to determine whether another node is transmitting or not. 
	1. Collision Avoidance: if another node was heard, we wait for a period of time (usually random) for the node to stop transmitting before listening again for a free communications channel.




## Link layer security
* AES-128




## References


