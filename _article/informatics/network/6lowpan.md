---
title: 6LoWPAN
---

The 6LoWPAN (IPv6 over Low-power Wireless Personal Area Networks) is an adaptation Layer that enables the use of IPv6 over low-power IEEE 802.15.4 radio links.
In most cases, the 6LoWPAN network is connected to the IPv6 network using an edge router.

<!-- Fragmetns:
1280 byte IPv6 MTU → 127 byte 802.15.4 frames

Support for 64-bit/16-bit 802.15.4 addressing
 -->
 

## Header Format
The 6LoWPAN protocol uses the first byte of the IEEE 802.15.4 encapsulation header stack as a special *Dispatch Byte*. This Dispatch Byte indicates that the following bytes are a LoWPAN header instead of an IPv6 header.



| Bin         | Header | Description                |
|-------------|--------|----------------------------|
| `00 xxxxxx` | NLAP   | Not a LoWPAN frame.        |
| `01 000001` | IPv6   | Uncompressed IPv6          |
| `01 000010` | HC1    | HC1 compressed IPv6        |
| `01 1xxxxx` | IPHC   | IPHC compressed IPv6       |
| `10 xxxxxx` | MESH   | Mesh header                |
| `11 000xxx` | FRAG1  | Fragmentation Header       |





## Compression Schemes


<div class="tabbox" markdown>

=== "IPHC/NHC"

    IPHC/NHC compression was defined in [RFC 6282](https://tools.ietf.org/html/rfc6282) in 2011 and updates the older HC1/HC2 compression.

 
    Structure of a typical 6LoWPAN frame with IPv6+UDP:
    ```diagram
    +--------+---  -  -  ---+----------+---  -  -  ---+--------
    |  IPHC  | Inline IPv6  | UDP NHC  | Inline UDP   | Payload
    |(2 byte)|  (variable)  | (1 Byte) |  (variable)  |
    +--------+---  -  -  ---+----------+---  -  -  ---+--------
    ```


    #### IPHC Format (2 Bytes)
    The frame starts with 2 IPHC bytes, where the first byte *is* the LoWPAN dispatch byte. Therefore the first byte starts with `011` to indicate IPHC compression. The remaining bits specify the IPv6 compression.

    ```diagram
      0                                       1
      0   1   2   3   4   5   6   7   8   9   0   1   2   3   4   5
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
    | 0 | 1 | 1 |  TF   |NH | HLIM  |CID|SAC|  SAM  | M |DAC|  DAM  |
    +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
    ```

    ??? info "Explanation of IPHC dispatch byte:"

        TF – 2 bit
        : Traffic Class and Flow Label (TF), 2 bit

          - 00: Carried Inline (ECN+DSCP+Flow) 
          - 01: ECN+Flow
          - 10: ECN+DSCP
          - 11: Traffic Class and Flow Label are elided.

        NH – 1 bit
        : Next Header compression (NH)

          - 0: Carried Inline
          - 1: next header is compressed using LOWPAN_NHC


        HLIM – 2 bit
        : Hop Limit (HLIM)

          - 00: Carried Inline. 
          - 01: 1 and elided. 
          - 10: 64 and elided.
          - 11: 255 and elided.


        CID – 1 bit
        : Context Identifier Extension (CID)

          - 0: No 1-byte CID identifier
          - 1: 1-byte identifier follows


        SAC/DAC – 1 bit each
        : Source/Destination Address Compression

          - 0: Stateless
          - 1: Context-based


        SAM/DAM – 2 bit each
        : Source/Destination Address Mode</br>
         If SAC/DAC=0:

          - 00: 128 b / 16 B. The full address is carried in-line. 
          - 01: 64 bits. The first 64-bits of the address are are the first 64 bits
              of the link-local prefix padded with zeros. The remaining 64 bits are carried in-line.
          - 10: 16 bits. The first 112 bits of the address are the first 64 bits of 
              the link-local prefix padded with zeros.  The following 64 bits are 0000:00ff:fe00:XXXX, where XXXX are the 16 bits carried in-line.
          - 11: 0 bits.  The address is fully elided.

         If SAC/DAC=1:

        - 00:  The UNSPECIFIED address, ::
        - 01:  64 bits. The address is derived using context information
                    and the 64 bits carried in-line.
        - 10:  16 bits.  The address is derived using context information
                    and the 16 bits carried in-line.
        - 11:  0 bits.  The address is fully elided and is derived using
                    context information and the encapsulating header.

        M – 1 bit
        : Multicast Destination (M)

          - 0: Destination  is not multicast 
          - 1: Destination  is multicast



=== "Context Identifier Extension (CIE)""

    In case CID = 1 in the IPHC bytes, an additional CIE byte directly follows the two IPHC bytes. This CIE byte is used to identify previously exchanged IPv6 contexts by a 4 bit Source Context Identifier (SCI) and a 4 bit Destination Context Identifier (DCI) instead of 128 bit for each address. 

    ```diagram
      0   1   2   3   4   5   6   7
    +---+---+---+---+---+---+---+---+
    |      SCI      |      DCI      |
    +---+---+---+---+---+---+---+---+
    ```


    #### NHC Format
    Compression formats for different next headers are identified by a
       variable-length bit-pattern (within one Byte) immediately following the IPHC compressed header.


    #### UDP LOWPAN_NHC Format
    Bits 0 through 4 represent the NHC ID and '11110' indicates the specific
    UDP header compression ID.

    ```diagram
      0   1   2   3   4   5   6   7
    +---+---+---+---+---+---+---+---+
    | 1 | 1 | 1 | 1 | 0 | C |   P   |
    +---+---+---+---+---+---+---+---+
    ```

    ??? note "Explanation of UDP LOWPAN_NHC Byte"

        C
        : Checksum:

          - 0: All 16 bits of Checksum are carried in-line.
          - 1: All 16 bits of Checksum are elided with higher-layer 
               end-to-end integrity checks.

        P
        : Ports:

          - 00: 16 bits. Source Port and Destination Port are carried in-line.
          - 01:  All 16 bits for Source Port are carried in-line.  First 8
                 bits of Destination Port is 0xf0 and elided.  The remaining 8
                 bits of Destination Port are carried in-line.
          - 10:  First 8 bits of Source Port are 0xf0 and elided.  The
                 remaining 8 bits of Source Port are carried in-line.  All 16
                 bits for Destination Port are carried in-line.
          - 11:  First 12 bits of both Source Port and Destination Port are
                 0xf0b and elided.  The remaining 4 bits for each are carried
                 in-line.





### HC1/HC2
The HC1/HC2 compression was defined in [RFC 4944](https://tools.ietf.org/html/rfc4944) in 2007 and is not recommended anymore. It uses two bytes – HC1 for IPv6 and HC2 for UDP – to specify how headers are compressed.


With this compression it is possible to achieve a very small 7 byte frame for IPv6 + UDP if all compression mechanisms are used:

1. Dispatch Byte (1 Byte)
2. HC1 Byte (1 Byte)
3. HC2 Byte (1 Byte)
4. HopLimit (1 Byte)
5. UDP Header (3 Byte)


#### HC1 Compression Byte
The HC1 byte is used to compress the IPv6 header.

```                            
  0   1   2   3   4   5   6   7    
+---+---+---+---+---+---+---+---+ 
| IP-SA | IP-DA |TF |  NH   |HC2| 
+---+---+---+---+---+---+---+---+ 
```

??? info "Explanation of HC1 Byte"

IP-SA – 2 bit
:   IPv6 source address (bits 0 and 1):

  - 00: Prefix in-line, Interface identifier
  - 01: Prefix compressed (link-local prefix assumed).
  - 10: Interface identifier carried in-line
  - 11: Interface identifier elided


IP-DA – 2 bit
:   IPv6 destination address (bits 2 and 3):

  - 00: Prefix carried in-line
  - 01: Prefix compressed (link-local prefix assumed).
  - 10: Interface identifier carried in-line
  - 11: Interface identifier elided


TF – 1 bit
:   Traffic Class and Flow Label (bit 4):

  - 0: not compressed; full 8 bits for TC and 20 bits for FL
  - 1: Traffic Class and Flow Label are zero


NH – 2 bit
:   Next Header (bits 5 and 6):

  - 00: not compressed; full 8 bits are sent
  - 01: UDP
  - 10: ICMP
  - 11: TCP


HC2 – 1 bit 
:	HC2 encoding(bit 7):

  - 0: no more header compression bits
  - 1: HC1 compression byte follows immediately


#### HC2 compression byte
The HC2 byte is used to compress the UDP header.
``` 
  0   1   2   3   4   5   6   7  
+---+---+---+---+---+---+---+---+
|SP |DP |LC | - | - | - | - | - |
+---+---+---+---+---+---+---+---+
``` 

##### Explanation of HC2 Byte

SP – 1 bit
:  UDP source port (bit 0):
  - 0: Not compressed, carried "in-line"
  - 1: Compressed to 4 bits.

DP – 1 bit
:  UDP destination port (bit 1):
  - 0: Not compressed, carried "in-line"
  - 1: Compressed to 4 bits.

LC – 1 bit
:   Length (bit 2):
  - 0: Not compressed, carried "in-line"
  - 1: length computed from IPv6 header length

Rest – bit 3 to 7
:  Reserved for future use.






</div>






### Routing
6LoWPAN supports two routing methods on different layers.

* Route-over: on layer 3 with IP addresses (RPL protocol)
* Mesh-under: on layer 2 with MAC addresses






## References
* [IETF RFC 4994: Transmission of IPv6 Packets over IEEE 802.15.4 Networks](https://tools.ietf.org/html/rfc4944)
* [IETF RFC 6282: Compression Format for IPv6 Datagrams over IEEE 802.15.4-Based Networks
](https://tools.ietf.org/html/rfc6282)
* [IETF RFC 8025: IPv6 over Low-Power Wireless Personal Area Network (6LoWPAN) Paging Dispatch](https://tools.ietf.org/html/rfc8025)

* [IETF Slides](https://www.ietf.org/proceedings/74/slides/6lowpan-2.pdf)
