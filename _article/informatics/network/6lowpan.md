---
title: 6LoWPAN
---

The 6LoWPAN (IPv6 over Low-power Wireless Personal Area Networks) is an adaptation Layer that enables the use of IPv6 over low-power IEEE 802.15.4 radio links.


The 6LoWPAN network is connected to the IPv6 network using an edge router.

<!-- Fragmetns:
1280 byte IPv6 MTU → 127 byte 802.15.4 frames

Support for 64-bit/16-bit 802.15.4 addressing
 -->

## Header Compression


1 Byte Dispatch byte + variable 


* Dispatch Byte:
	- 2 bit: 
		- 00: not a 6LoWPAN frame
		- 01: IPv6 addressing header
		- 10: Mesh header
	- 6 bit: fixed 0b000010



## RFC 4944: HC1 and HC2 compression

Possible to achieve 7 byte header for IPv6 + UDP.



#### HC1 compression byte:
```                            
  0   1   2   3   4   5   6   7    
+---+---+---+---+---+---+---+---+ 
| IP-SA | IP-DA |TF |  NH   |HC2| 
+---+---+---+---+---+---+---+---+ 
```

Explanation:
IP-SA
:   IPv6 source address (bits 0 and 1):
	- 00: Prefix in-line, Interface identifier
	- 01: Prefix compressed (link-local prefix assumed).
	- 10: Interface identifier carried in-line
	- 11: Interface identifier elided

* IPv6 destination address (bits 2 and 3):
	- 00: Prefix carried in-line
	- 01: Prefix compressed (link-local prefix assumed).
	- 10: Interface identifier carried in-line
	- 11: Interface identifier elided
* Traffic Class and Flow Label (bit 4):
	- 0: not compressed; full 8 bits for TC and 20 bits for FL
	- 1: Traffic Class and Flow Label are zero
* Next Header (bits 5 and 6):
	- 00: not compressed; full 8 bits are sent
	- 01: UDP
	- 10: ICMP
	- 11: TCP
* HC2 encoding(bit 7):
	- 0: no more header compression bits
	- 1: HC1 compression byte follows immediately


#### HC2 compression byte for UDP:
``` 
  0   1   2   3   4   5   6   7  
+---+---+---+---+---+---+---+---+
|SP |DP |LC | - | - | - | - | - |
+---+---+---+---+---+---+---+---+
``` 

##### Explanation of HC2 Byte
* UDP source port (bit 0):
	- 0: Not compressed, carried "in-line"
	- 1: Compressed to 4 bits.
* UDP destination port (bit 1):
	- 0: Not compressed, carried "in-line"
	- 1: Compressed to 4 bits.
*  Length (bit 2):
	- 0: Not compressed, carried "in-line"
	- 1: length computed from IPv6 header length
*  Reserved (bit 3 through 7)




## RFC 6282: IPHC and NHC compression

6LoWPAN frame: Dispatch (1 byte), IPHC (2-3 byte), payload

6LoWPAN structure:

    +-------------+-------------+-------------+-----------------+--------
    | LOWPAN_IPHC | In-line     | LOWPAN_NHC  | In-line Next    | Payload
    |   Encoding  |   IP Fields |   Encoding  |   Header Fields |
    +-------------+-------------+-------------+-----------------+--------


IPHC bytes:

      0                                       1
      0   1   2   3   4   5   6   7   8   9   0   1   2   3   4   5
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
    | 0 | 1 | 1 |  TF   |NH | HLIM  |CID|SAC|  SAM  | M |DAC|  DAM  |
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+


### Explanation of NHC dispatch byte:
* Traffic Class and Flow Label (TF), 2 bit
	- 00: Carried Inline (ECN+DSCP+Flow) 
	- 01: ECN+Flow
	- 10: ECN+DSCP
	- 11: Traffic Class and Flow Label are elided.
* Next Header compression (NH)
	- 0: Carried Inline
	- 1: next header is compressed using LOWPAN_NHC
* Hop Limit (HLIM)
	- 00: Carried Inline, 
	- 01: 1, 
	- 10: 64
	- 11: 255
* Context Identifier Extension (CID)
	- 0: No 1-byte CID identifier
	- 1: 1-byte identifier follows
* SAC/DAC (Source/Destination Address Compression)
	- 0: Stateless
	- 1: Context-based
* SAM/DAM (Source/Destination Address Mode)
	- 00: 16 bytes inline 
	- 01: 8 bytes inline 
	- 10: 2 bytes inline
	- 11: elided
* Multicast Destination (M)
	- 0: Destination  is not multicast 
	- 1: Destination  is multicast



### Routing
6LoWPAN supports two routing methods on different layers.

* Route-over: on layer 3 with IP addresses (RPL protocol)
* Mesh-under: on layer 2 with MAC addresses






## References
* https://tools.ietf.org/html/rfc4944
* http://www.mdpi.com/2224-2708/2/2/235/htm

