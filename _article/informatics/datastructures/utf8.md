---
title: UTF-8
---

UTF-8 is a variable-length encoding for text strings and uses 8-bit code units.



## Encoding Converter

TODO jvascript that displays different encodings


## Facts and Figures
* backward compatibility with ASCII:
	- single bytes with values in the range of 0 to 127 map directly to ASCII
* Prefix code: The first byte indicates the number of bytes in the sequence. 
* can encode any Unicode character




## Format

<table>
<tr>
<th>Number<br />
of bytes</th>
<th>Bits for<br />
code point</th>
<th>First<br />
code point</th>
<th>Last<br />
code point</th>
<th>Byte 1</th>
<th>Byte 2</th>
<th>Byte 3</th>
<th>Byte 4</th>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">7</td>
<td style="text-align: right;">U+0000</td>
<td style="text-align: right;">U+007F</td>
<td><code>0xxxxxxx</code></td>
<td style="background: darkgray;"></td>
<td style="background: darkgray;"></td>
<td style="background: darkgray;"></td>
</tr>
<tr>
<td style="text-align: center;">2</td>
<td style="text-align: center;">11</td>
<td style="text-align: right;">U+0080</td>
<td style="text-align: right;">U+07FF</td>
<td><code>110xxxxx</code></td>
<td><code>10xxxxxx</code></td>
<td style="background: darkgray;"></td>
<td style="background: darkgray;"></td>
</tr>
<tr>
<td style="text-align: center;">3</td>
<td style="text-align: center;">16</td>
<td style="text-align: right;">U+0800</td>
<td style="text-align: right;">U+FFFF</td>
<td><code>1110xxxx</code></td>
<td><code>10xxxxxx</code></td>
<td><code>10xxxxxx</code></td>
<td style="background: darkgray;"></td>
</tr>
<tr>
<td style="text-align: center;">4</td>
<td style="text-align: center;">21</td>
<td style="text-align: right;">U+10000</td>
<td style="text-align: right;">U+10FFFF</td>
<td><code>11110xxx</code></td>
<td><code>10xxxxxx</code></td>
<td><code>10xxxxxx</code></td>
<td><code>10xxxxxx</code></td>
</tr>
</table>






