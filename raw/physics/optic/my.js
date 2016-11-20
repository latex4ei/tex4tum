
	// xmlns:xlink="http://www.w3.org/1999/xlink"
	// <script xlink:href="my.js"/>


var dragX, dragY;
var pt;


window.onload = function(){
	var svg = document.getElementsByTagName("svg")[0];
	pt = svg.createSVGPoint();
	syncValues("none", 0);
}


function syncValues(id, value){
	switch(id){
		case "alpha": alpha = -value;
	}
	calcFraction();
	RC_calcFrequency();
}



	function getValue(str){
		var prescale = 1;
		var value = str.slice(0,-1);
		switch( str.slice(-1) ){
			case 'G': prescale = 1e9; break;
			case 'M': prescale = 1e6; break;
			case 'k': prescale = 1e3; break;
			case 'm': prescale = 1e-3; break;
			case 'u': prescale = 1e-6; break;
			case 'n': prescale = 1e-9; break;
			case 'p': prescale = 1e-12; break;
			default: value = str;
		}
		return ( Number(value) * prescale );
	}


	function askValue(clicked_id){
		var el = document.getElementById(clicked_id); 
		var newval = prompt("Please enter new Value", el.textContent);
		if( isNaN( getValue(newval) ) ){
			el.textContent = "NaN";
		} else {
			el.textContent = newval;
		}
		parent.syncValues(clicked_id, newval);
	}



function RC_calcFrequency() {
	var Cstr = document.getElementById("C1_val").textContent;
	var Rstr = document.getElementById("R1_val").textContent;
	var F = document.getElementById("F1_val");
	var freq = 1/(2 * Math.PI * getValue(Cstr) * getValue(Rstr));
	F.textContent=freq.toPrecision(3)+" Hz";
}



function rotateToMouse(id_rot, id_anch){
	var anchor = document.getElementById(id_anch);
	var rotor = document.getElementById(id_rot);

	// coordinates within svg
	pt.x = anchor.x.animVal.value;
  	pt.y = anchor.y.animVal.value;
  	
  	// transform to screen corrdinates
  	var matrix = anchor.getScreenCTM();
	pt = pt.matrixTransform(matrix);
	var angle = getMouseAngleTo(pt.x, pt.y);
	alpha = angle;

	// rotate
	calcFraction();
}


function dragLine(){	
	rotateToMouse("ray", "anchor");
}



function rotateToAnchor(id_rot, id_anch, angle){
	var anchor = document.getElementById(id_anch);
	var rotor = document.getElementById(id_rot);

	rotor.setAttribute('transform', "rotate("+angle+" "+anchor.x.animVal.value+" "+anchor.y.animVal.value+")");
}



function touchDrag(id){
	alert("Touch-Coordinate:"+event.changedTouches[0].clientX);
}


function rotateLine(id) {
	document.addEventListener('mousemove',dragLine,false);
	document.addEventListener('touchmove',dragLine,false);


	document.addEventListener('mouseup',function(){
				document.removeEventListener('mousemove',dragLine,false);
				calcFraction();
			},false);
	document.addEventListener('touchend',function(){
				document.removeEventListener('touchmove',dragLine,false);
				calcFraction();
			},false);

}


function getMouseAngleTo(x, y){
	//get the vector representing the mouse's position relative to the point...
	var vx = event.pageX - x;
	var vy = event.pageY - y;

	//use atan2 to get the angle; Atan2 returns radians
	var angleRadians=Math.atan2(vx, -vy);	// -vy because on screen y is inverted
	return (angleRadians * (360 / (2 * Math.PI)));
}


var alpha = -30;

function calcFraction(){
	var n1 = getValue( document.getElementById("n1_val").textContent );
	var n2 = getValue( document.getElementById("n2_val").textContent );

	// in or outside of density?
	var frac_angle = 0;
	if( Math.abs(alpha) > 90 ){ 
		frac_angle = -Math.asin(Math.sin(alpha*Math.PI/180) * n2 / n1)*180/Math.PI;
	} else {
		frac_angle = Math.asin(Math.sin(alpha*Math.PI/180) * n1 / n2)*180/Math.PI+180;
	}
	
	// total reflection?
	if (isNaN(frac_angle) ){ frac_angle = -alpha}


	rotateToAnchor("ray", "anchor", alpha);
	rotateToAnchor("frac", "anchor", -alpha);
	rotateToAnchor("pass", "anchor", frac_angle);
}


