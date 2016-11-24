/*
 * Library for LaTeX4Ei 
*/

window.onload = function() {
	parent.syncValues("all", 0);
}


// renders math with KaTeX
function renderMath() {
	var math = document.getElementsByClassName("LaTeX");  // LaTeX, math

	Array.prototype.forEach.call(math, function(el) {
		inner = el.innerHTML;
		if (inner[1] == "$"){
			tex = el.innerHTML.split("$")[2].replace(/&amp;/g, '&');
			displaystyle=true;
		} else {
			tex = el.innerHTML.split("$")[1].replace(/&amp;/g, '&');
			displaystyle=false;
		}
		try {
		    katex.render(tex, el, { displayMode: displaystyle });
		} catch(err) {
			el.innerHTML = "ERROR: "+err;
			//el.innerHTML = inner;
		}
	});
};


// Options
function showClass(className, isVisible){
	el = document.getElementsByClassName(className);
  	for (i = 0; i < el.length; i++) {
  		if(isVisible){
  			el[i].style.display = 'initial';
  		} else {
  			el[i].style.display = 'none';
  		}
  	}
}

function changeOption(element){
	var className = element.id.split("_")[1];
	var showDef = element.checked;
	if (showDef) { showClass(className, true); } else { showClass(className, false); }
}





// load file from server
function loadDocumentIntoElement(url, element) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() { // callback function
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      element.innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function w3IncludeHTML() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("w3-include-html");
          a.innerHTML = xhttp.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          w3IncludeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}




// gets the value of a String with prefix
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



// SVG
// ========================================
function loadSVGDocObj(obj_id, svg_id){
	el = document.getElementById(obj_id);
	el.addEventListener("load",function(){
		svg_obj = document.getElementById(svg_id);
		svg_obj = el.contentDocument; // get inner DOM
	}, false);
}

function replaceSVG(svg_id, svg_path){
	var newobj = document.createElement('object');
	var oldobj = document.getElementById(svg_id);
	newobj.id=svg_id; newobj.data=svg_path; newobj.type="image/svg+xml";
	oldobj.parentNode.insertBefore(newobj, oldobj);
	oldobj.parentNode.removeChild(oldobj);
	// document.getElementById(svg_id).data = svg_path;
}



function plotSVG(svg_obj, func, xmin, xmax, ymax){
	var segments = svg_obj.getElementById("y2_line").pathSegList;
	var dx = (xmax-xmin)/segments.numberOfItems;
	var scale = 200/ymax;
	segments.getItem(0).y += -func(xmin)*scale;
	var last_y = -func(xmin)*scale;
	for (var i=1,len=segments.numberOfItems;i<len;++i){
	  var segment = segments.getItem(i);
	  	//segment.x = 70;
	  	segment.y = -scale*func(xmin+i*dx) - last_y;
	  	last_y += segment.y;
	}
}






// create a function that can be called to show the tooltip
function SVG_registerTooltip(svg_obj){
	svg_obj.addEventListener("mousedown", SVG_showTooltip, false);
}

var plot_obj = {svg_obj, func, xmin, xmax,}

function SVG_showTooltip(event){
	var mousex = event.pageX; mousey = event.pageY;
	var plotwidth = 0;

	var origin = {x: svg_obj. svg_obj.getElementById("origin").x, y: svg_obj.getElementById("origin").y};
	var yvalue = xmin;
}


