---
title: TCP
tags: port
---

The Transmission Control Protocol (TCP) is one of the main protocols of the Internet protocol suite.

## Header Format

```diagram
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Sequence Number                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Acknowledgment Number                      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  Data |           |U|A|P|R|S|F|                               |
| Offset| Reserved  |R|C|S|S|Y|I|            Window             |
|       |           |G|K|H|T|N|N|                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|           Checksum            |         Urgent Pointer        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                             data                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

### Explanation of Header Fields
Source Port
: 16 bit source port number. 

Destination Port 
: 16 bit destination port number.

Sequence Number 
: The 32 bit sequence number of the first data octet in this segment

Acknowledgment Number
:   32 bits. 
    If the ACK control bit is set this field contains the value of the
    next sequence number the sender of the segment is expecting to
    receive.  Once a connection is established this is always sent.

Data Offset
:   4 bits.
    The number of 32 bit words in the TCP Header.  This indicates where
    the data begins.  The TCP header (even one including options) is an
    integral number of 32 bits long.

Reserved
:    6 bits. Reserved for future use. Must be zero.

Control Bits
:  6 bits (from left to right):

	* URG:  Urgent Pointer field significant
	* ACK:  Acknowledgment field significant
	* PSH:  Push Function
	* RST:  Reset the connection
	* SYN:  Synchronize sequence numbers
	* FIN:  No more data from sender

Window
:   16 bits.
    The number of data octets beginning with the one indicated in the
    acknowledgment field which the sender of this segment is willing to
    accept.

Checksum
:  16 bits. 
   The checksum field is the 16 bit one's complement of the one's
   complement sum of all 16 bit words in the header and text.

Options
:  variable.
    Options may occupy space at the end of the TCP header and are a
    multiple of 8 bits in length.  All options are included in the
    checksum.  An option may begin on any octet boundary.

Padding
:  variable.
    The TCP header padding is used to ensure that the TCP header ends
    and data begins on a 32 bit boundary.  The padding is composed of
    zeros.




## Ports
16 bit number represents the port.

* Ports 0–1023 are “well-known ports”.
* Ports 1024–49151 are “registered ports”.


| Port | Service                    |
|------|----------------------------|
| 20   | FTP Data                   |
| 21   | FTP Control                |
| 23   | Telnet                     |
| 25   | SMTP (outgoing mail)       |
| 53   | DNS                        |
| 80   | HTTP                       |
| 123  | Network Time Protocol      |
| 220  | IMAP (incoming mail)       | 
| 443  | HTTPS                      |
| 546  | DHCPv6 Client                |
| 547  | DHCPv6 Server                |
| 989  | FTP Data over TLS/SSL      |
| 990  | FTP Control over TLS/SSL   |



## References
* [IETF: RFC 793, Transmission Control Protocol](https://tools.ietf.org/html/rfc793)
* [IETF: RFC 1700, Assigned Numbers](https://tools.ietf.org/html/rfc1700)
* [Internet Assigned Numbers Authority (IANA)](https://www.iana.org)

* [Wikipedia: List of Ports](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
