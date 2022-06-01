---
title: Domain Name System (DNS)
references:
- type: standard
  id: rfc1035
  author: Network Working Group
  title: 'DOMAIN NAMES - IMPLEMENTATION AND SPECIFICATION'
  year: 1987
---
The Domain Name System (DNS) is a hierarchical decentralized naming system for computers connected to the Internet [^RFCDNS]. It allows to access servers by name instead of an IP address which is hard to remember.


## Public DNS
Google DNS: `8.8.8.8` or `2001:4860:4860::8888`

## Resource Record Format
All RRs have the same top level format shown below:

`<NAME> <TTL> <CLASS> <TYPE> <RDLENGTH> <RDATA>`

with

* NAME: the name of the node
* TTL: a 32 bit signed integer that specifies the time interval that the resource record may be cached
* CLASS: two octets containing one of the RR CLASS codes.
* TYPE: two octets containing one of the RR TYPE codes.
* RDLENGTH: an unsigned 16 bit integer that specifies the length in octets of the RDATA field.
* RDATA: a variable length string of octets that describes the resource.


## Resource Record Types
| DNS Type | Return Type  | Application |
|----------|--------------|-------------|
| `A`        | IPv4 address | map domain to 1 static IP |
| `AAAA`     | IPv6 address | map domain to 1 static IP |
| `ALIAS`     | Domain name | map domain to domain |
| `CNAME`    | Canonical name | map 1 domain to 1 domain |
| `DNAME`    | Delegation name | map domain + subdomains to domain |
| `NS`       | Name server | delegate to other DNS |
| `SSHFP`    | Public key | provide authentication |
| `MX`       | URL | Mail exchange server |
| `URL`       | URL | redirect (HTTP 301) domain to URL |


### DNAME
The DNAME record provides redirection for a subtree of the domain name tree in the DNS [^RFCDNAME].
Note that a `DNAME` entry that maps `mydomain.com` to `public.com` will also map `sub.mydomain.com` to `sub.public.com`.


### ALIAS
The `ALIAS` type is not part of the DNS standard and should only be used to map an Apex domain to another domain because `CNAME` cannot be used for this task.


## Rules for setting up a DNS entry
* use an `A` and `AAAA` record if your destination is a server with one static and fixed IP address (this is the most common case)
* use a `CNAME` record if you want to alias a name to another name, and you don’t need other records (such as `MX` records for emails) for the same name
* use an `ALIAS` record if you are trying to alias the root domain or if you need other records for the same name



## Propagation Time
Changes propagate within the network in about 24 hours.
TTL of records: 5 minutes to 24 hours.

## DNS Softwre
Linux:  `dig DOMAIN`, `host DOMAIN`, `nslookup DOMAIN`



## References
[^RFCDNS]: [RFC 1035](https://tools.ietf.org/html/rfc1035), *Domain Names - Implementation and Specification* , 1987

[^RFCDNAME]: [RFC 6672](https://tools.ietf.org/html/rfc6672), *DNAME Redirection in the DNS*, 2012
