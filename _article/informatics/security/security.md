---
title: Security
tags: authentication encryption integrity
---


## Security Goals
* **Confidentiality:** data should not be revealed to unintended recipients.
* **Authentication:** data must originate from the correct source
* **Integrity:** Data should not be changed during transmission.
* **Freshness:** Old data should not be used as new (replay attacks)
* **Availability:** data/services should be available despite DoS attacks
* **Resiliency:** maintain security despite compromised nodes



## Security Threats
- **Reverse Engineering:** Debugger observes execution
- **Side-Channel Attacks:** Analyze timing/energy
- **Steal User Data:**  
	- Key Logging: Read keyboard input in background
	- Overlay: User interacts with the wrong window
	- Screen Scraping: screenshot of screen
	- Pishing: trick user to reveal data
- **Code Injection:** execution of malicious code
	- Virus/Worm: self-replicating malicious code
	- Ransomware: encrypt memory and make it unusable
	- Rootkit: gain admin rights (root)
	- Logic/Time Bombs: silent code that executes on condition
	- SQL Injection: inject SQL statements into executed strings
- **Denial-of-Service (DoS):** 
	- flooding: send more requests to a node than it can process
	- fork bomb: exhaust system resources through recursion
- **Man-in-the-Middle:** eavesdropping and spoofing of messages
- **Replay-Attack:** A replay attack targets the authentication of a system. A node listens to an encrypted communication. Even it can not understand the message, it can simply send the same message (replay) to the target node in the hope that it will trigger a certain event.
- **Sybil Attack:** A single attacker pretends to have several identities which subvert the election in a voting network.



## Security Mechanisms
Goal: Avoid, Detect, Mitigate **Intrusion/Attacks**

* **Updates:**
	- firmware (change logic)
	- configuration (change parameters)

* **Isolation / Secure Execution Environment:**
	- TPM
	- Secure Bootloader
	- Kernel vs. User Mode

* **Randomization:**
	- randomized memory layout
	- random tokens / URLs
	- random IP addresses

* **Account Locking:** “Always count.”
	- count number of failed authentications
	- limit number of connections (DDOS prevention)
	- overflowable message buffers 

* **Certification:**
	- verify source (e.g. domains)
	- verify tokens (owning information)
	- code attestation: hash of executable memory
	- verify hardware: e.g. PUF
	- verify data integrity: checksums / hashes

* **Encryption:**
	- encrypted communication
	- encrypted RAM (memguard)

* **Monitoring:**
	- Watchdog Timers
	- Anomalie Detection
	- Logging







## Crypto Primitives

* One-way hash: SHA-256, MD5, RIPEMD-160
* Symmetric encryption: AES
* Asymmetric encryption: RSA
* Digital Signature Algorithm: FIPS, ECDSA


{{ FOLDER_TOC }}

