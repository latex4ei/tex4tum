---
title: Number Converter
---
This is a converter for showing numbers in different number systems.

Type in number: <input id="number-input" oninput="calculateNumber(this)" placeholder="Number" value="0xFF"> <br>
C/Ada Notation: `0x..` / `16#..` (hex), `0b..` / `2#..` (bin)

| Result | |
|----|:----|
| Decimal | <span id="dec_result">255</span> |
| Hexadecimal | <span id="hex_result">0xFF</span> |
| Octal | <span id="oct_result">0377</span> |
| Binary | <span id="bin_result">0b11111111</span> |


## Memory Inspection

Number stored as unsigned 32bit Integer at address 0x1000:


| Endian | `0x1000` | `0x1001` | `0x1002` | `0x1003` |
|--------|---------:|---------:|---------:|---------:|
| Little (bin) | <span id="le_b1_b">11111111</span> |  <span id="le_b2_b">00000000</span> | <span id="le_b3_b">00000000</span> | <span id="le_b4_b">00000000</span> |
| Little (hex) | <span id="le_b1_h">FF</span> |  <span id="le_b2_h">00</span> | <span id="le_b3_h">00</span> | <span id="le_b4_h">00</span> |
| Big (bin) | <span id="be_b1_b">00000000</span> | <span id="be_b2_b">00000000</span> | <span id="be_b3_b">00000000</span> | <span id="be_b4_b">11111111</span> |
| Big (hex) | <span id="be_b1_h">00</span> | <span id="be_b2_h">00</span> | <span id="be_b3_h">00</span> | <span id="be_b4_h">FF</span> |


<!-- TODO Float umwandlung mit precision fehler -->



## Data Types
`int`, `short`, and `word` depend on the architecture.

| Type | Limit Min |  | Limit Max  |
|----|----:|----|:---|
| U8, Char | 0 | .. | $255 = 2^8 - 1$ |
| U16 | 0 | .. | $65535 = 2^{16} -1$ |
| U32 | 0 | .. | $4\,294\,967\,295$ |
| U64 | 0 | .. | $18\;446\;744\;073\;709\;551\;615$ |
| U$x$ | 0 | .. | $2^x - 1$ |
| I8 | -128 | .. | 127 |
| I16 | −32768	| .. | 32767 |
| I32 | -2 147 483 648 | .. | 2.147.483.647 |
| I$x$ | $-2^{(x-1)}$ | .. | $2^{(x-1)} - 1$ |

Useful approximations:
$2^{10} \approx 1k$
$2^{20} \approx 1M$
$2^{30} \approx 1G$


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

		var integer = num;
		var bytes = [0, 0, 0, 0];
		var bbs = ['11111111', '00000000', '00000000', '00000000'];
		var bhs = ['FF', '00', '00', '00'];
	    for ( var index = 0; index < bytes.length; index ++ ) {
	        var byte = integer & 0xff;
	        bytes[index] = byte;
	        bbs[index] = byte.toString(2);
	        while (bbs[index].length < 8) bbs[index] = '0' + bbs[index];
	        bhs[index] = byte.toString(16).toUpperCase();
	        if (bhs[index].length < 2) bhs[index] = '0' + bhs[index];
	        integer = (integer - byte) / 256 ;
	    }


	    // little endian (binary)
	    document.getElementById('le_b1_b').textContent = bbs[0];
	    document.getElementById('le_b2_b').textContent = bbs[1];
	    document.getElementById('le_b3_b').textContent = bbs[2];
	    document.getElementById('le_b4_b').textContent = bbs[3];

	    // big endian (binary)
	    document.getElementById('be_b1_b').textContent = bbs[3];
	    document.getElementById('be_b2_b').textContent = bbs[2];
	    document.getElementById('be_b3_b').textContent = bbs[1];
	    document.getElementById('be_b4_b').textContent = bbs[0];

	    // little endian (hex)
	    document.getElementById('le_b1_h').textContent = bhs[0];
	    document.getElementById('le_b2_h').textContent = bhs[1];
	    document.getElementById('le_b3_h').textContent = bhs[2];
	    document.getElementById('le_b4_h').textContent = bhs[3];

	    // big endian (hex)
	    document.getElementById('be_b1_h').textContent = bhs[3];
	    document.getElementById('be_b2_h').textContent = bhs[2];
	    document.getElementById('be_b3_h').textContent = bhs[1];
	    document.getElementById('be_b4_h').textContent = bhs[0];


	}

</script>
