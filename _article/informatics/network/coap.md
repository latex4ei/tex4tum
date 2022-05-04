---
title: Constrained Application Protocol (COAP)
---
The Constrained Application Protocol (CoAP) is a specialized web transfer protocol for use with constrained nodes and constrained networks in the Internet of Things. 
The protocol is designed for machine-to-machine (M2M) applications such as smart energy and building automation.


Based on Representational State Transfer (REST).





## Header Format:

     0                   1                   2                   3
     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |Ver| T |  TKL  |      Code     |          Message ID           |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |   Token (if any, TKL bytes) ...
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |   Options (if any) ...
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |1 1 1 1 1 1 1 1|    Payload (if any) ...
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+


* Ver: Version Number (currently 0b01)
* T: Type (0: Confirmable, 1: Non-confirmable, 2: Acknowledgement, 3: Reset)
* Code: Upper 3 MSBs: Class, 5 LSBs: Class details
* Message ID: used to prevent duplicates, same for the ACK
* Token: used to correlate request and response
* Payload Marker: 


### Options

     0 1 2 3 4 5 6 7
    +-+-+-+-+-+-+-+-+
    | delta |length |   1 byte
    +---------------+
    \ delta ext.    \   0-2 byte
    +---------------+
    \ length ext.   \   0-2 byte
    +---------------+
    \    value      \   0 or more bytes
    +---------------+



## Features
* Embedded web transfer protocol (`coap://`)
* UDP binding with reliability and multicast support
* GET, POST, PUT, DELETE methods
* URI support
* 4 byte header
* Subset of MIME types and HTTP response codes


REST request: `CON GET /light`


* Problem: REST paradigm is often “PULL” type
	Solution: COAP observation
Fragmentation at application layer to avoid fragmentation at IPv6 layer.


## References
[RFC 7252](https://tools.ietf.org/html/rfc7252)

[CoAP Specs](http://coap.technology/spec.html)

