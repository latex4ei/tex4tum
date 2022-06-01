---
title: UDP
---
The User Datagram Protocol is an OSI layer 4 transport protocol.



## Header Structure
The header has a fixed size of 8 bytes. The maximum size of the payload is $2^{16} - 1$

```
0      7 8     15 16    23 24      31
+--------+--------+--------+--------+
|     Source      |   Destination   |
|      Port       |      Port       |
+--------+--------+--------+--------+
|                 |                 |
|     Length      |    Checksum     |
+--------+--------+--------+--------+
|
|          data octets ...
+---------------- ...
```

In contrast to TCP, UDP does not provide sequence numbers to detect the order of the packets.


## References
* [RFC 768](https://tools.ietf.org/html/rfc768)
