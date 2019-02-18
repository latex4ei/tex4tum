---
title: Security
tags: authentication, encryption, integrity
---


## Security Properties

* **Confidentiality:** data should not be revealed to unintended recipients.
* **Authentication:** data must originate from the correct source
* **Inegrity:** Data should not be changed during transmission.
* **Freshness:** Old data should not be used as new (replay attacks)
* **Availability:** data/services should be available despite DoS attacks
* **Robustness:** ensure continuous operation despite abnormalities
* **Resiliency:** maintain security despite compromised nodes




## Types of Attacks




### Denial-of-Service (DOS)
A DOS attack sends more requests to a node than it can process (flooding). Due to the unability of the node to process all requests it has to drop requests. If all requests are treated equal, normal request might be dropped.


### Replay Attack
A replay attack targets the authentication of a system. A node listens to an encrypted communication. Even it can not understand the message, it can simply send the same message (replay) to the target node in the hope that it will trigger a certain event.


### Sybil Attack
A single attacker pretends to have several identities which subvert the election in a voting network and inject faulty information.





## Crypto Primitives

* One-way hash: SHA-256, MD5, RIPEMD-160
* Symmetric encryption: AES
* Asymmetric encryption: RSA
* Digital Signature Algorithm: FIPS, ECDSA


{{ FOLDER_TOC }}

