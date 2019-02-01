---
title: Internet Protocol
---
The Internet Protocol (IP) is the basic communication protocol in the Internet layer.
IP has the task of delivering packets from the source host to the destination host solely based on the IP addresses in the packet headers.


## IP-Address

| Version | Bit | Addresses | Example |
|---------|-----|-----------|---------|
| IPv4    | 32  | 4.3e9     | 192.168.1.1 |
| IPv6    | 128 | 3.4e38    | 2001:0db8:85a3:0042:0000:8a2e:0370:7334 |


## IPv4 

### Special Ranges

* `0.0.0.0/8` (broadcast)
* `10.0.0.0/8` (private network)
* `100.64.0.0/10`
* `127.0.0.0/8` (local net)
* `172.16.0.0/12` (private network)
* `192.168.0.0/16` (private network)
* `224.0.0.0` – `255.255.255.254` (future use)
* `255.255.255.255` (limited broadcast)


## IPv6

### Address Notation
16 byte: 8 groups of 16 bit written as 4 hexadecimal characters.

* leading zeros within a group may be omitted
* consecutive groups of only zeros may be replace by '::'. This replacement is only allowed once within an address.


Example: 
Initial address: 2001:0db8:0000:0000:0000:ff00:0042:8329</br>
Removing leading zeroes: 2001:db8:0:0:0:ff00:42:8329</br>
Omitting consecutive groups of zeroes: 2001:db8::ff00:42:8329


### Special Ranges
* `2000::/4` (global)
* `2002::/16` (global 6to4 tunnel)
* `fd00::/7`: Unique Local Addresses - ULA  for LAN
* `fe80::/10`: Link Local Addresses. Created by interfaces for status communication


### Header
IPv6 header has a fixed size of 40 bytes.

 





## Subnetmask
x.x.x.x/24 tells you how many bits are fixed to identify the network.


TODO diagram showing IP, bits and marks network bits




## References
RFC 791, https://tools.ietf.org/html/rfc791


