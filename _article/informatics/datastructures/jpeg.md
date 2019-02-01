---
title: JPEG
---

The Joint Photographic Experts Group developed the JPEG standard ISO/IEC 10918-1 which is used to encode images.



## Encoding Process

1. colors are converted from RGB to $Y'C_BC_R$, where Y is the brigness and $C_B$ and $C_R$ are the  chrominance components of red and blue.

	Explanation: The color space conversion allows greater compression without a significant effect on perceptual image quality


1. the resolution of the chroma data is reduced, usually by a factor of 2 or 3.

	Explanation: Due to the densities of color- and brightness-sensitive receptors in the human eye, humans can see considerably more fine detail in the brightness of an image (the Y' component) than in the hue and color saturation of an image (the Cb and Cr components).


1. The image is split into blocks of 8×8 pixels, and for each block, each of the Y, $C_B$, and $C_R$ data undergoes the discrete cosine transform (DCT).

	Explanation:

	If the data for a channel does not represent an integer number of blocks then the encoder repeats the edge pixels to complete the blocks with dummy data.

1. The amplitudes of the frequency components are quantized.

	Explanation: the magnitudes of the high-frequency components are stored with a lower accuracy than the low-frequency components. The quality setting of the encoder (for example 95 on a scale of 0–100 in the Independent JPEG Group's library) affects to what extent the resolution of each frequency component is reduced.

1. The resulting data for all 8×8 blocks is further compressed with a lossless algorithm, a variant of Huffman encoding.



## Decoding Process
Decoding to display the image consists of doing all the encoding steps in reverse.






