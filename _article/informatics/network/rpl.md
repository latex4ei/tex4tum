---
title: RPL
---

The Routing Protocol for Low-Power and Lossy Networks (RPL, pronounced “ripple”), is a Distance Vector IPv6 Routing Protocol that provides point-to-point, multipoint-to-point and point-to-multipoint traffic.


## Routing Requirements for LLN
In Low-Power and Lossy Networks (LLN) we have additional routing requirements compared to the stable Internet of servers.

* Unicast/Multicast/Broadcast: There might be messages that need to be send to several nodes instead of one server.
* Adaptive routing: support for dynamic recreation of paths based on changing availability
* Constraint-based routing: efficient use of limited resources (power, bandwidth)
* Data Collection: for Sensor networks, the protocol needs to support efficient multipoint-to-point routing.
* Scalability: LLNs are composed of a very large number of nodes (up to 1000)
* Automatic Configuration: The protocol needs to autoconfigure without user interaction
* Security: Physical control signals should always be authenticated and encrypted.


## DODAG
RPL organizes the network topology as a Destination Oriented Directed Acyclic Graph (DODAG)^[1]^. The DODAG is a hierarchical structure based on the ranks of each node. The rank is a measure for a certain routing metric (e.g. link quality) with respect to a selected DODAG root node. The rank of each node is determined by an *objective function* and a set of
metrics/constraints.


### Control Messages
There are four types of control messages in RPL:

* DODAG Information Solicitation (DIS): Used to request a DIO from a RPL node, i.e neighbor discovery
* DODAG Information Object (DIO): Used for path creation and upward routing
* Destination Advertisement Object (DAO): Used for path creation and upward routing
* Destination Advertisement Object Acknowledgement (DAO-ACK)


<div class="tabbox" markdown>

### DIS

```diagram
 0                   1                   2
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     Flags     |   Reserved    |   Option(s)...
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

### DIO

```diagram
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| RPLInstanceID |Version Number |             Rank              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|G|0| MOP | Prf |     DTSN      |     Flags     |   Reserved    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                            DODAGID                            +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|   Option(s)...
+-+-+-+-+-+-+-+-+
```


### DAO
```diagram
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| RPLInstanceID |K|D|   Flags   |   Reserved    | DAOSequence   |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                            DODAGID*                           +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|   Option(s)...
+-+-+-+-+-+-+-+-+
```


### DAO-ACK

```diagram
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| RPLInstanceID |D|  Reserved   |  DAOSequence  |    Status     |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                            DODAGID*                           +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|   Option(s)...
+-+-+-+-+-+-+-+-+
```


</div>




## Mechanisms
There are three types of nodes in a RPL network:
1. The root node
2. Routing nodes
3. Leaf nodes


### DODAG Formation
The following interactive diagram visualizes the creation of the DODAG:

![](rpl-v3.svg){#dodag}

1. The root starts to periodically broadcast the information about the graph using the DIO message.
2. All receiving nodes (=neighbor set) decide whether to join the DODAG.
3. In case a node wants to join, it calculates its own rank based on the received DIO messages and an objective function.
	- When the rank is known, a node sends a DAO message to its determined parent.
3. If the node is configured as a router, it will also start broadcasting DIO messages, with the updated information about the graph.
4. A node that has selected a parant will also broadcast DIO messages including its own rank.

Estimating and broadcasting ranks ensures that loops are detected and avoided.

#### Further Rules:
* The parent set $P_x$ of any node $x$ must be a subset of its neighbor set.
* The preferred parent $p_x$ of $x$ must be a member of its parent set $p_x \in P_x$.
* The Ranks of the parent nodes of a given node must be smaller than that of the Rank of the node.


### DODAG Join
An isolated node that wants to join an existing DODAG broadcasts DIS messages. When a DODAG node receives a DIS message it will reply with a unicast DIO message.



### DODAG Repair
There are two types of repair procedures in case a link or node fails.


* **Local repair**
When a link or neighboring node failure is detected and the node has no other router in the ‘up’ direction,

In this case the graph may start to diverge from its optimal structure.

* **Global repair**
Can be triggered only from the DODAG root node and causes additional control traffic in the network. In this case each
node will re-execute the objective function for determingin its rank and selecting a parent.





## References

[1]: [RFC 6550: RPL](https://tools.ietf.org/html/rfc6550)</br>
[2]: [Tsvetko Tsvetkov: “RPL: IPv6 Routing Protocol for Low Power and Lossy Networks”, TUM-IN-NET, 2011](https://www.net.in.tum.de/fileadmin/TUM/NET/NET-2011-07-1/NET-2011-07-1_09.pdf)


[^rpl]: [RFC 6550: RPL](https://tools.ietf.org/html/rfc6550)
