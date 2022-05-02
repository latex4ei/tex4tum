---
title: Internet Protocol
tags: address IPv4 IPv6
---

The Internet Protocol (IP) is the basic communication protocol in the Internet layer.
IP has the task of delivering packets from the source host to the destination host solely based on the IP addresses in the packet headers.


## IP-Address

| Version | Length       | Addresses | Example                                 |
|---------|--------------|-----------|-----------------------------------------|
| IPv4    | 32 b = 4 B   | 4.3e9     | 192.168.1.1                             |
| IPv6    | 128 b = 16 B | 3.4e38    | 2001:0db8:85a3:0042:0000:8a2e:0370:7334 |



### Address Notation

<div class="tabbox" markdown>

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

</div>


### Subnets
Subnets share a certain number of identical most-significant bits in their IP addresses (net prefix). The number $n$ of these bits is either noted as `/n` behind an IP address or as a subnet mask.

* Prefix: `x.x.x.x/24`: 24 bits for the network, 8 bits for the host
* Subnetmask: `255.255.255.0`: 24 bits for the network, 8 bits for the host




### Special Address Ranges
Certain adress ranges are reserved for special use cases.

<div class="tabbox" markdown>

#### IPv6
* `2000::/4` (global)
* `2002::/16` (global 6to4 tunnel)
* `fd00::/7`: Unique Local Addresses (ULA) for LANs
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

</div>









## Header Format

<div class="tabbox" markdown>

### IPv6 
The IPv6 header has a fixed size of 40 bytes.

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


#### Explanation of the Header Fields

Version – 4 bit         
:   Internet Protocol version number = 6 (`0b1010`).

Traffic Class – 8 bit     
:   Set different priorities of IPv6 packets.
    The default value must be zero for all 8 bits.

Flow Label – 20 bit        
:  May be used by a  source to label sequences of packets for which 
   it requests special handling by the IPv6 routers, such as non-default quality of service or "real-time" service. Hosts or routers
   that do not support the functions of the Flow Label field are
   required to set the field to zero when originating a packet, pass the
   field on unchanged when forwarding a packet, and ignore the field
   when receiving a packet.

Payload Length – 16-bit unsigned integer
:   Length of the IPv6 payload, i.e., the rest of the packet
    following this IPv6 header, in octets.

Next Header – 8 bit  
:    Identifies the type of header immediately following 
    the IPv6 header. Uses the same values as the IPv4 Protocol field.

Hop Limit – 8 bit unsigned integer       
:    Decremented by 1 by
     each node that forwards the packet.  When
     forwarding, the packet is discarded if Hop
     Limit was zero when received or is decremented
     to zero.  A node that is the destination of a
     packet should not discard a packet with Hop
     Limit equal to zero; it should process the
     packet normally.

Source Address – 128 bit
:    Address of the originator of the packet.

Destination Address – 128 bit
:    Address of the intended recipient of the packet.




### IPv4 
The IPv4 header has a size of 20 bytes if options are not used.


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

## Explanation of the Header Fields

Version – 4 bit
:  The version of the internet header. (4 = `0b0100`) 

IHL – 4 bit
:  The Internet Header Length (IHL) is the length of the internet header in 32 bit words, and thus points to the beginning of the data. The minimum value for a correct header is 5.

Type of Service – 8 bit
:  Indication of the abstract parameters of the quality of service desired.

Total Length – 16 bit
:  The length of the datagram, measured in octets,
    including internet header and data.  This field allows the length of
    a datagram to be up to 65,535 octets.  Such long datagrams are
    impractical for most hosts and networks.  All hosts must be prepared
    to accept datagrams of up to 576 octets (whether they arrive whole
    or in fragments).

Identification – 16 bit
:  Value assigned by the sender to aid in assembling
    the fragments of a datagram.

Flags – 3 bit
:  Various Control Flags.

  * Bit 0: reserved, must be zero
  * Bit 1: (DF) 0 = May Fragment,  1 = Don't Fragment.
  * Bit 2: (MF) 0 = Last Fragment, 1 = More Fragments.

Fragment Offset – 13 bit
:  Offset indicating where in the datagram this fragment belongs.
    The fragment offset is measured in units of 8 octets (64 bits).  The
    first fragment has offset zero.

Time to Live (TTL) – 8 bit
:   This field indicates the maximum time the datagram is allowed to
    remain in the internet system. Every module that processes a datagram must decrease the TTL by at least one. If this field contains the value
    zero, then the datagram must be destroyed.

Protocol – 8 bit
:   This field indicates the next level protocol used in the data
    portion of the internet datagram. Protocol numbers were defined in [RFC 1700](https://tools.ietf.org/html/rfc1700) but are now maintained by [IANA](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml). Most important numbers are 1 (ICMP), 6 (TCP), and 17 (UDP).

Header Checksum –  16 bits
:    A checksum on the header only.  Since some header fields change
    (e.g., time to live), this is recomputed and verified at each point
    that the internet header is processed.
    The checksum field is the 16 bit one's complement of the one's
      complement sum of all 16 bit words in the header.  For purposes of
      computing the checksum, the value of the checksum field is zero.


Source Address – 32 bit
:    Address of the originator of the packet.

Destination Address – 32 bit
:    Address of the intended recipient of the packet.

Options – variable
:    The options field is not often used.





</div>





## IP protocol numbers
The protocol number is used in the *Protocol* field of the IPv4 header and the *Next Header* field of the IPv6 header.


| Hex | Dec |  Abbr | Protocol         | RFC    |
|-----|-----|-------|------------------|--------|
| 0x01|   1 |  ICMP | Internet Control Message Protocol |  [RFC 792](https://tools.ietf.org/html/rfc792) |
| 0x02|   2 |  IGMP | Internet Group Management Protocol |  [RFC 1112](https://tools.ietf.org/html/rfc1112) |
| 0x06|   6 |  TCP | Transmission Control Protocol |  [RFC 793](https://tools.ietf.org/html/rfc793) |
| 0x11|  17 |  UDP | User Datagram Protocol |  [RFC 768](https://tools.ietf.org/html/rfc768) |
| 0x33|  51 |  AH |    Authentication Header |  [RFC 4302](https://tools.ietf.org/html/rfc4302) |


A full list of all numbers can be found on [IANA](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) or on [Wikipedia](https://en.wikipedia.org/wiki/List_of_IP_protocol_numbers).













## References

* [IETF: RFC 791 - Internet Protocol](https://tools.ietf.org/html/rfc791)
* [IETF: RFC 2460 - Internet Protocol, Version 6 (IPv6)](https://tools.ietf.org/html/rfc2460)
* [Wikipedia: “List of IP protocol numbers”](https://en.wikipedia.org/wiki/List_of_IP_protocol_numbers)

