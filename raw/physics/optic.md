# Optics

<svg onload="svgloaded()" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="100mm" width="100mm" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 354.33073 354.3307" xmlns:dc="http://purl.org/dc/elements/1.1/">
<defs>
<marker id="Arrow1Sstart" refY="0.0" refX="0.0" style="overflow:visible" orient="auto">
<path style="stroke:#000;stroke-width:1pt;fill-rule:evenodd" transform="scale(.2) translate(6)" d="m0 0l5-5-17.5 5 17.5 5-5-5z"/>
</marker>
<marker id="a" refY="0.0" refX="0.0" style="overflow:visible" orient="auto">
<path style="stroke-linejoin:round;stroke:#000;stroke-width:.625;fill-rule:evenodd" transform="scale(.6) rotate(180) translate(0)" d="m8.7186 4.0337l-10.926-4.0177 10.926-4.0177c-1.7455 2.3721-1.7355 5.6174 0 8.0354z"/>
</marker>
<marker id="Arrow2Mend" refY="0.0" refX="0.0" style="overflow:visible" orient="auto">
<path style="stroke-linejoin:round;fill-rule:evenodd;stroke:#025;stroke-width:.625;fill:#025" transform="scale(.6) rotate(180) translate(0)" d="m8.7186 4.0337l-10.926-4.0177 10.926-4.0177c-1.7455 2.3721-1.7355 5.6174 0 8.0354z"/>
</marker>
</defs>
<rect style="fill:#82d4ff" height="131.85" width="298.74" y="222.48" x="-.0000026296"/>
<rect id="anchor" y="220.66" width="1.7967" x="141.72" height="1.7551"/>
<path id="ray" d="m141.96 218v-75.36-75.355" style="stroke:#000;stroke-width:8.7057;marker-mid:url(#Arrow1Sstart);fill:none" onmousedown="rotateLine(this.id)" ontouchstart="rotateLine(this.id)"/>
<path id="pass" style="stroke:#052;stroke-width:4.2762;marker-end:url(#a);fill:none" onmousedown="rotateLine(this.id)" d="m141.73 217.73v-145.46"/>
<text id="n1_val" style="font-size:24px" space="preserve" onclick="askValue(this.id)" y="209.86768" x="245.82343">1.2</text>
<text id="n2_val" style="font-size:24px" space="preserve" onclick="askValue(this.id)" y="251.89607" x="244.11113">1.5</text>
<text id="alpha" style="font-size:24px" space="preserve" onclick="askValue(this.id)" y="85.252937" x="3.4076719">30</text>
<path id="frac" d="m141.93 218.15v-127.92" style="stroke-dasharray:4.0102, 8.0204;stroke:#025;stroke-width:4.0102;marker-end:url(#Arrow2Mend);fill:none" onmousedown="rotateLine(this.id)"/>
</svg>


## Reflection

Material: $n_1 < n_2$

 --------------- --------------
 **Reflexion:**  $\alpha_1 = \alpha_2$
 **Fraction:**   $\frac{\sin(\alpha)}{\sin(\beta)}=\frac{n_2}{n_1}=\frac{c_1}{c_2}=\frac{\lambda_1}{\lambda_2}$
 ------------------------------




<script type="text/javascript">

var dragX, dragY;
var pt;


function svgloaded(){
    var svg = document.getElementsByTagName("svg")[0];
    pt = svg.createSVGPoint();
    syncValues("none", 0);
}


function syncValues(id, value){
    switch(id){
        case "alpha": alpha = -value;
    }
    calcFraction();
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
    var angleRadians=Math.atan2(vx, -vy);   // -vy because on screen y is inverted
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

</script>