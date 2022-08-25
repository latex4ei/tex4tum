---
title: Bash
---
The “Bourne-again shell” (Bash) is a command language and interpreter on Unix systems.

```bash
#!/usr/bin/env bash
# hello beer: drink 0.5 liter in 4 rounds

LITER_PER_SIP=$(bc <<< "scale=3; 37/1000")
ROUNDS=4

function sips2liter(){
    echo $(bc <<< "scale=3; $1 * ${LITER_PER_SIP}")
}

beer_l=0.5
sips_per_round=(3 7 4 2)

echo "I drink ${beer_l} l in ${ROUNDS} rounds:"
for sips in ${sips_per_round[@]}
do
    echo "I drink ${sips} sips."
    sleep ${sips}s
    consumed_l=$(sips2liter ${sips})
    beer_l=$(bc <<< "scale=3; ${beer_l} - ${consumed_l}" )
    if [[ $(bc <<< "${beer_l} <= 0.0") -eq 1 ]]; then
        echo "My beer is empty!"
        break
    else
        echo "I have ${beer_l} l beer left."
    fi
done
exit 0
```





## Data Structures

**Arrays**</br>
Create (space separated): `arr=(one two 42)`</br>
Access: `${arr[0]}`  one


**Numbers**</br>
Bash only supports Integers! Float expressions need to be parsed by an external binary such as `bc`.




## String Manipulations

* Slicing `new=${old:12:5}` where 12 is the offset (zero-based) and 5 is the length
* 

```bash
mystr="what_is_this"
tmp=${mystr#*_}   # remove prefix ending in "_"
final=${tmp%_*}   # remove suffix starting with "_"
echo ${final}     # output "is"
```


## Control Flow

**Comparators (Test)**

```bash
if [[ ${var} -eq 1 ]]; then
	# do stuff
fi
```

* Integer: `-eq`, `-ne`, `-lt`, `-gt`, `-le`, `-ge`
* Strings: `==`, `!=`, `\<`, `\>`
* Files: `-f`, `-d`, `-r`, `-w`, `-x`


## Input / Output

```bash
read -p "Do you want to continue? (y|n)" -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # do dangerous stuff
fi

# read file line by line
while read f; do
	echo "Line is $f"
done < $path
}
```
