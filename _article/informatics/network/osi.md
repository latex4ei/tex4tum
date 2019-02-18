---
title: Open Systems Interconnection model (OSI)
---

The Open Systems Interconnection model (OSI model) is a conceptual model that characterizes the communication functions of computing systems.


| Layer | Name       | Data Unit |
|-----|--------------|-----------|
| 7   | Application  | Data      |	
| 6   | Presentation | Data      |	
| 5   | Session	     | Data      | 
| 4   | Transport    | Segment   | 
| 3   | Network	     | Packet    |	
| 2   | Data link    | Frame     |
| 1   | Physical     | Bit       |


## Application Layer
High-level APIs, including resource sharing, remote file access

## Presentation 
Translation of data between a networking service and an application; including character encoding, data compression and encryption/decryption


## Session 
Managing communication sessions, i.e. continuous exchange of information in the form of multiple back-and-forth transmissions between two nodes.


## Transport Layer
Reliable transmission of data segments between points on a network, including segmentation, acknowledgement and multiplexing

## Network Layer
Structuring and managing a multi-node network, including addressing, routing and traffic control

## Link Layer
Reliable transmission of data frames between two nodes connected by a physical layer

## Physical Layer
Transmission and reception of raw bit streams over a physical medium

