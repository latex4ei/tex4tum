---
title: Arduino
---
Arduino is a prototyping platform consisting of hardware and software. The hardware is a microcontroller board with a AVR Atmega chip and labeled pin headers for its GPIOs. The software consists of an IDE for the Arduino programming language and a set of useful libraries.
The Arduino language is a slightly modified dialect of C++.


## Software
Arduino code just needs to provide two routines:

* `setup()`

* `loop()`



## Tips

* Store Strings in Flash: Wrapping the string in `F( ... )` tells the system that this is a “flash” string rather than a “normal” one
