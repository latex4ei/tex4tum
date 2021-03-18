---
title: Certificate
tags: authentication
---

A public key certificate is an electronic document used to prove the ownership of a public key.
The certificate includes information about the identity of its owner (called the subject) and the public key (digital signature)  of an entity that has verified the certificate's contents (called the issuer).

A certificate's subject is typically a person, organization or server hostname.
The issuer is typically a trusted certificate authority (CA).
The matching private key is kept secret by the subject of the certificate.


The certificate Transport Layer Security (TLS) . TLS has an older name "Secure Sockets Layer (SSL)", thus certificates often refer to "TLS/SSL".

The format for public key certificates is defined by the standard X.509 as defined in RFC 5280


## TLS/SSL server certificate
A server is required to present a certificate as part of the initial connection setup.

	1. The subject of the certificate matches the hostname to which the client is trying to connect.
	1. The certificate is signed by a trusted certificate authority.

## TLS/SSL client certificate
Used to authenticate the client connecting to a TLS service.

## Root certificate
A self-signed certificate used to sign other certificates. It identifies a root certificate authority (CA).

	* A CA issues digital certificates. 
		- It first verifies the true identity of the subject, e.g. that a hostname belongs to the correct organization, and then assigns a public key to the hostname which is made public available.
	* A CA publishes digital certificates
	* A CA is trusted by the subject (owner) and each party that wants to verify the identity of the subject

Some major software (e.g. webbrowser) contains a list of certificate authorities that are trusted by default. 




