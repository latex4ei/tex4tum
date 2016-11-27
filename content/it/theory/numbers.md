# Number Converter



Type in number: <input id="number-input" oninput="calculateNumber(this)" placeholder="Number" value="0xFF"> <br>
C/Ada Notation: `0x..` / `16#..` (hex), `0b..` / `2#..` (bin)

| Result | |
|----|----|
| Decimal | <span id="dec_result">255</span> |
| Hexadecimal | <span id="hex_result">0xFF</span> |
| Octal | <span id="oct_result">0377</span> |
| Binary | <span id="bin_result">0b11111111</span> |

32bit Integer Little Endian:
<div id="int_32_l"></div>

32bit Integer Big Endian:
<div id="int_32_b"></div>


## Data Types
`int`, `short`, and `word` depend on the architecture.


| Type | Limit Min |  | Limit Max  |
|----|----:|----|:---|
| U8, Char | 0 | .. | $255 = 2^8 - 1$ |
| U16 | 0 | .. | $65353 = 2^{16} -1$ |
| U32 | 0 | .. | $4\,294\,967\,295$ |
| U64 | 0 | .. | $18\;446\;744\;073\;709\;551\;615$ |
| U$x$ | 0 | .. | $2^x - 1$ |
| I8 | -128 | .. | 127 |
| I16 | −32768	| .. | 32767 |
| I32 | -2 147 483 648 | .. | 2.147.483.647 |
| I$x$ | $-2^{(x-1)}$ | .. | $2^{(x-1)} - 1$ |


## 2-Complement







<script type="text/javascript">
	function calculateNumber(e){

		var dec_rx = new RegExp(/^(?:(\d+)|^10#(\d+)#?)(?:\s*(<<|>>)\s*(\d+))?$/i);
		var hex_rx = new RegExp(/^0x([0-9A-F]+)$|^(?:16)?#([0-9A-F]+)#?$/i);
		var oct_rx = new RegExp(/^0([0-7]+)$|^8#([0-7]+)#?$/i);
		var bin_rx = new RegExp(/^0b([01]+)$|^2#([01]+)#?$/i);

		var num = NaN;
		var exp = 0;
		var rx_match;

		var dec_el = document.getElementById("dec_result");
		var hex_el = document.getElementById("hex_result");
		var oct_el = document.getElementById("oct_result");
		var bin_el = document.getElementById("bin_result");

		if ( dec_rx.test(e.value.trim()) ){
			rx_match = dec_rx.exec( e.value.trim() );
			if(rx_match[1]){num = parseInt( rx_match[1] ); }
			else if(rx_match[2]){ num = parseInt( rx_match[2] ); }
			if(rx_match[4]){
				if(rx_match[3] == "<<"){ exp = parseInt( rx_match[4] ); }
				else if(rx_match[3] == ">>"){ exp = -parseInt( rx_match[4] ); }
				num = Math.floor( num * Math.pow(2, exp ) );
			}		
		}
		if ( hex_rx.test(e.value.trim()) ){
			rx_match = hex_rx.exec( e.value.trim() );
			if(rx_match[1]){ num = parseInt( rx_match[1], 16 ); }
			else if(rx_match[2]){ num = parseInt( rx_match[2], 16 ); }
		}
		if ( oct_rx.test(e.value.trim()) ){
			rx_match = oct_rx.exec( e.value.trim() );
			if(rx_match[1]){ num = parseInt( rx_match[1], 8 ); }
			else if(rx_match[2]){ num = parseInt( rx_match[2], 8 ); }
		}
		if ( bin_rx.test(e.value.trim()) ){
			rx_match = bin_rx.exec( e.value.trim() );
			if(rx_match[1]){ num = parseInt( rx_match[1], 2 ); }
			else if(rx_match[2]){ num = parseInt( rx_match[2], 2 ); }
		}
		dec_el.textContent = num.toString(10);
		hex_el.textContent = '0x' + num.toString(16).toUpperCase();
		oct_el.textContent = '0' + num.toString(8);
		bin_el.textContent = '0b' + num.toString(2);

	}

</script>
