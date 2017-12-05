---
title: Bash
---
The “Bourne-again shell” (Bash) is a command language and interpreter on Unix systems.


{% highlight bash %}
function usage () {
	echo "Usage: $0 [OPTIONS] FILENAME"
	exit 1
} 

echo "Hello World!"

read -p "Do you want to continue? (y|n)" -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # do dangerous stuff
fi

# read file line by line
while read f; do
	echo "Line is $f" 
done < $path 
}
{% endhighlight %}



## Comparators (Test)

* Integer: `-eq`, `-ne`, `-lt`, `-gt`, `-le`, `-ge`
* Strings: `==`, `!=`, `\<`, `\>`
* Files: `-f`, `-d`, `-r`, `-w`, `-x` 



