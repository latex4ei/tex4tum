---
title: Fault Tolerance
tags: byzantine
---


A Byzantine fault is any fault that presents different symptoms to different observers.
Byzantine faults imply no restrictions, which means that a failed node can stop sending data or generate arbitrary data.
As a result, a node can also pretend to send correct data, while in fact it is sending incorrect data.



## Byzantine fault tolerance (BFT)
Byzantine fault tolerance (BFT) is the characteristic of a system and states that the system can handle a certain amount of faulty or "evil" nodes without corruption of the systems consensus.


Byzantine failures are considered the most general and most difficult class of failures among the failure modes.



## Solutions


traditional BFT algorithms use multiple rounds of explicit votes to achieve consensus. Ripple and Stellar developed consensus protocols that extend traditional BFT for open participation.



## Application
* bitcoin is a peer-to-peer digital currency system with BFT
* SAFEbus can achieve Byzantine fault tolerance
* UpRight
