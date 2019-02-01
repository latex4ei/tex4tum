---
title: Advanced Encryption Standard
---
The Advanced Encryption Standard (AES), (original name Rijndael) is a specification for the encryption of electronic data established by the U.S. National Institute of Standards and Technology (NIST) in 2001.

AES operates on block sizes of $32 \times 32$ bits.

| Key-length | Number of Rounds |
|------------|------------------|
| 128 bit    | 10 |
| 192 bit    | 12 |
| 256 bit    | 14 |


## Algorithm

1. Key Expansion: Create individual 128bit round keys from the cipher key
1. AddRoundKey: each byte of the block is combined with a block of the round key using bitwise xor.
1. Rounds:
	1. SubBytes:  substitutes every byte of the state with an S-box entry
	1. ShiftRows: cyclically left shift every row
	1. MixColumns:  takes the four bytes of each column as input and outputs four new bytes, where each input byte affects all four output bytes. Each column is transformed by multiplication with a fixed $4 \times 4$ Matrix.
	1. AddRoundKey: XOR of the 128bit round key and the 128bit block.
1. FInal Round (no MixColumns)
	1. SubBytes
	1. ShiftRows
	1. AddRoundKey


