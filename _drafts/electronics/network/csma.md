---
title: Carrier-Sense Multiple Access (CSMA)
---
CSMA is a media access control (MAC) protocol in which a node verifies the absence of other traffic before transmitting on a shared transmission medium (carrier sensing). Variations on basic CSMA include addition of collision-detection and collision-avoidance.


## CSMA with collision detection (CSMA/CD)
Terminating transmission as soon as a collision is detected, thus shortening the time required before a retry can be attempted.

## CSMA with collision avoidance (CSMA/CA)

	1. Carrier Sense: prior to transmitting, a node first listens to the shared medium to determine whether another node is transmitting or not.
	1. Collision Avoidance: if another node was heard, we wait for a period of time (usually random) for the other node to stop transmitting before listening again for a free communication channel.
		- Request to Send/Clear to Send (RTS/CTS) may optionally be used at this point to mediate access to the shared medium.
