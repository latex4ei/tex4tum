---
title: ZigBee
---


## Stack

* IEEE 802.15.4 defines PHY and MAC layer
	- PHY header uses 6 bytes
	- 4 types of MAC frames: Data, Beacon, Ack, Command
* ZigBee build on top: NWK and a framework for the APP layer
	- Application Support Layer (APS)



## Devices
* PAN coordinator: 
	- Exactly one (required) for each ZigBee network.
	- Initiates network formation.
* Full Function Device (FFD)
	- Participates in multihop routing of messages
	- Can act as PAN coordinator
* Reduced Function Device (RFD)
	- Cannot route frames, can only only communicate with FFDs


## Topologies
* Mesh
* Star
* Cluster Tree


## Security
* AES 128-bit encryption, uses link and network keys
* Trust Center: stores the keys for the network
	- network key is used for broadcast messages and shared by all devices
	- ZigBee Coordinator is usually designated the Trust Center



## Joining
* RFD joins: Coordinator or a router assign a unique 16 bit address
* FFD joins: Coordinator assigns a unique 16 bit address


## Rounting
Two general approaches:
* Source (“path”) routing
	- Source specifies entire route: places complete path to destination in message header: A – D – F – G
* Destination (“hop-by-hop”) routing
	- Source specifies only destination address in the header

## Ad-hoc On-demand Distance Vector (AODV) routing
1. Source node A sends route request (RREQ) with target node E
1. RREQ	messages are flooded by receiving nodes
1. When an intermediate node re-broadcasts a Route Request, it sets up a reverse path pointing towards the source
1. When RREQ reches target node, target node sends a route reply (RREP) back on the reverse path.

Furthermore:
An intermediate node (not the destination) may also send a Route Reply (RREP) provided that it knows a more recent path than the one previously known to sender S. To determine whether the path known to an intermediate node is more recent, destination sequence numbers are used.








