---
title: Internet Protocol
tags: address, IPv4, IPv6
---
The Internet Protocol (IP) is the basic communication protocol in the Internet layer.
IP has the task of delivering packets from the source host to the destination host solely based on the IP addresses in the packet headers.


## IP-Address

| Version | Length       | Addresses | Example          |
|---------|--------------|-----------|------------------|
| IPv4    | 32 b = 4 B   | 4.3e9     | 192.168.1.1      |
| IPv6    | 128 b = 16 B | 3.4e38    | 2001:0db8:85a3:0042:0000:8a2e:0370:7334 |



### Address Notation

{% tabbox %}

#### IPv6 
16 byte written as 8 groups of 4 hexadecimal characters.

* leading zeros within a group may be omitted
* consecutive groups of only zeros may be replace by `::`. This replacement is only allowed once within an address.


Example: 
Initial address: `2001:0db8:0000:0000:0000:ff00:0042:8329`</br>
Removing leading zeroes: `2001:db8:0:0:0:ff00:42:8329`</br>
Omitting consecutive groups of zeroes: `2001:db8::ff00:42:8329`


#### IPv4 

4 byte written as 4 groups of integers between 0 and 255.

`192.168.0.0`

{% endtabbox %}


### Subnets
Subnets share a certain number of identical most-significant bits in their IP addresses (net prefix). The number $n$ of these bits is either noted as `/n` behind an IP address or as a subnet mask.

* Prefix: `x.x.x.x/24`: 24 bits for the network, 8 bits for the host
* Subnetmask: `255.255.255.0`: 24 bits for the network, 8 bits for the host




### Special Address Ranges

{% tabbox %}

#### IPv6
* `2000::/4` (global)
* `2002::/16` (global 6to4 tunnel)
* `fd00::/7`: Unique Local Addresses - ULA  for LAN
* `fe80::/10`: Link Local Addresses. Created by interfaces for status communication


#### IPv4 

* `0.0.0.0/8` (broadcast)
* `10.0.0.0/8` (private network)
* `100.64.0.0/10`
* `127.0.0.0/8` (local net)
* `172.16.0.0/12` (private network)
* `192.168.0.0/16` (private network)
* `224.0.0.0` – `255.255.255.254` (future use)
* `255.255.255.255` (limited broadcast)

{% endtabbox %}









## Header Format

{% tabbox %}

### IPv6 
IPv6 header has a fixed size of 40 bytes.

```diagram
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version| Traffic Class |           Flow Label                  |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Payload Length        |  Next Header  |   Hop Limit   |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                         Source Address                        +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                      Destination Address                      +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```


## Explanation of the Header Fields

Version             
:   4-bit Internet Protocol version number = 6 (`0b1010`).


Traffic Class       
:   8-bit Traffic Class field.


Flow Label          
:   20-bit flow label.


Payload Length      
:   16-bit unsigned integer. 
    Length of the IPv6 payload, i.e., the rest of the packet
    following this IPv6 header, in octets.



Next Header         
:    8-bit selector. Identifies the type of header immediately following 
     the IPv6 header.  Uses the same values as the IPv4 Protocol field.


Hop Limit          
:    8-bit unsigned integer.  Decremented by 1 by
     each node that forwards the packet.  When
     forwarding, the packet is discarded if Hop
     Limit was zero when received or is decremented
     to zero.  A node that is the destination of a
     packet should not discard a packet with Hop
     Limit equal to zero; it should process the
     packet normally.


Source Address
:    128-bit address of the originator of the packet.


Destination Address
:    128-bit address of the intended recipient of the packet.


### IPv4 

```diagram
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version|  IHL  |Type of Service|          Total Length         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Identification        |Flags|      Fragment Offset    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Time to Live |    Protocol   |         Header Checksum       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       Source Address                          |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Destination Address                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```


{% endtabbox %}
























## References

* [IETF: RFC 791 - Internet Protocol](https://tools.ietf.org/html/rfc791)
* [IETF: RFC 2460 - Internet Protocol, Version 6 (IPv6)](https://tools.ietf.org/html/rfc2460)


