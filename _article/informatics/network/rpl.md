---
title: RPL
---

The Routing Protocol for Low-Power and Lossy Networks (RPL, pronounced “ripple”), is an IPv6 Routing Protocol that provides point-to-point, multipoint-to-point and point-to-multipoint traffic.


## DODAG
RPL organizes the network topology as a Destination Oriented Directed Acyclic Graph (DODAG)^[1]^. The DODAG is a hierarchical structure based on the ranks of each node. The rank is a measure for a certain routing metric (e.g. link quality) to a selected root node.


### Control Messages
There are four types of control messages in RPL:
* DODAG Information Solicitation (DIS)
* DODAG Information Object (DIO)
* Destination Advertisement Object (DAO)
* Destination Advertisement Object Acknowledgement (DAO-ACK)


## Mechanisms

### DODAG Formation
The root node periodically broadcasts DIO messages. All receiving nodes calculate their rank based on the received DIO messages. When the rank is known, a node sends a DAO message to its determined parent. A node that has selected a parant will also broadcast DIO messages including its own rank.


{% include svg-object.html id="dodag" filename="rpl-ani.svg" %}


### DODAG Join
An isolated node that wants to join an existing DODAG broadcasts DIS messages. When a DODAG node receives a DIS message it will reply with a unicast DIO message.



### DODAG Repair
There are two types of repair procedures in case a link or node fails.


### Local repair 
When a link or neighboring node failure is detected and the node has no other router in the ‘up’ direction, 


### Global repair
Can be triggered only from the root and has a cost of additional control traffic in the network.




## References

[1]: [RFC 6550: RPL](https://tools.ietf.org/html/rfc6550)

[^rpl]: [RFC 6550: RPL](https://tools.ietf.org/html/rfc6550)
