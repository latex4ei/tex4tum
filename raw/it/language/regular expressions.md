
Regular Expressions
===================
A regular expression is a character sequence that specifies a pattern of a string. It can be used to find and replace strings.


| String  |  |
| --------| -------- |
| `\^`      |  Start of string, or start of line in multi-line pattern |
| `\A`  | Start of string |
| `\$` | End of string, or end of line in multi-line pattern |
| `\Z` | End of string |
| `\\b` | Word boundary |
| `\B` | Not word boundary |
| `\<` | Start of word |
| `\>` | End of word |


| Character  | Class |
| --------| -------- |
| `\c` | Control character |
| `\s` | White space, same as `[ \t\n\r\f\v]` |
| `\S` | Not white space |
| `\d` | Digit, same as `[0-9]` |
| `\D` | Not digit |
| `\w` | Word, same as `[a-zA-Z_]` |
| `\W` | Not word |
| `\x` | Hexade­cimal digit |
| `\O` | Octal digit |


| Character  | Class |
| --------| -------- |
| `.` | any character |
| `\n` | Newline |
| `\t` | tab |




| Quantifiers  |  |
| -------------| -------- |
| ? | 0 or 1 |
| * | 0 or more |
| + | 1 or more |
| {3} | Exactly 3 |
| {3,} | 3 or more |
| {3,5} | 3, 4 or 5 |


| Groups  |  |
| -------------| -------- |
| (...) | Active Group |
| (?:…)| Passive (non-c­apt­uring) group |
| (?=...)| look-ahead (passive) |
| (?!...)| negative look-ahead (passive) |
| (?<=...)| look-behind (passive) |
| (?!=...)| negative look-behind (passive) |
| (?>...)| once (active) |






Examples
---------

Find a date: `\d{4}-\d{2}-\d{2}`


## Applet

<script type="text/javascript">
	
function applyRegex(e){
	if (!e.value){
		res_el.textContent = " ";
		return;
	}

	var rx = new RegExp(e.value.trim(), 'gi');


	var search_string = document.getElementById("search-space").value;
	var res_el = document.getElementById("regex-result");

	var matches = search_string.match(rx);

	var result_string = "";
	if (matches){
		for (var i = 0; i < matches.length; i++) {
			result_string += matches[i];
			if (i != matches.length - 1){ result_string += ", "; }
		}		
	}
	res_el.textContent = result_string;
}


</script>

<textarea id="search-space" cols="35" rows="4" placeholder="Paste your text here.">This is a text (a short one) to demonstrate a RegEx for inner paranthesis.</textarea> 


Your RegEx: <input id="regex-input" oninput="applyRegex(this)" placeholder="RegEx, e.g. \d\s." value="\([^)]*\)">






Found Matches: <span id="regex-result"></span>




