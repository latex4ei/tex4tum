---
title: Channel Coding
---

Codes are used for efficient and reliable data transmission. In particular

1. Data Compression: Encoding that tries to remove redundancy from the data to reduce size, e.g. compression with ZIP.
2. Error correction: Encoding that tries to add redundancy to the data to correct errors that occur when it is sent over a noisy channel.
3. Cryptographic Coding: Encoding that tries to hide/protect the original message. E.g. Encryption with AES.



## Error Correction Codes (ECC)
ECCs should have a small overhead, contain many valid code words and can correct or at least detect many errors. There are basically two types:

1. Linear block codes: input is divided into blocks
2. Convolutional codes: codewords are weighted sums of the various input symbols
