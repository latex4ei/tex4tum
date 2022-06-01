---
title: DoxyGen
---
Doxygen is a documentation language.

Doxygen commands start with "\". Alternatively, "@" can be used instead.



## File header

| Command | Description |
|----|----|
| @brief DESC | short class description DESC |
| @note TEXT | a special note |
| @todo DESC | description DESC of what is still to do  |
| @bug DESC | description DESC of a bug  |

Dont use `@file, @date`, doxygen will read it from the file meta data.
If you use a version control system, `@author, @version` are also redundant.


## Function annotations

| Command | Description |
|----|----|
| @brief DESC | short function description DESC |
| @param PAR DESC | description DESC of parameter PAR |
| @return DESC | description DESC of the return value |
| @todo DESC | description DESC of what is still to do  |

Dont use `@name` its 100% redundant.
Shorts: @p = @param


```
/*! Short Description on the first line

    Detailed description...

*/
float integral(float x, float dt);

```


## Member Annotation
´´´
//!< Brief description after the member
´´´
