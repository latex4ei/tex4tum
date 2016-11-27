<script type="text/javascript">
var RC_obj;
var RC_graph;

function RC_loadSVG(){
    switch(document.getElementById("Filter_Select").selectedIndex){
        case 0: replaceSVG("RC_obj", "./img/rc.svg"); break;
        case 1: replaceSVG("RC_obj", "./img/rl.svg"); break;
    }  
}

function RC_calcFrequency() {
 RC_obj  = document.getElementById("RC_obj").contentDocument;
 var X1 = getValue( RC_obj.getElementById("X1_val").textContent );
 var R1 = getValue( RC_obj.getElementById("R1_val").textContent );
 var F1 = document.getElementById("F1_val");
 var tau = document.getElementById("RC_tau_val");
 var freq = 1/(2 * Math.PI * X1 * R1);
 F1.textContent=freq.toPrecision(3)+" Hz";
 tau.textContent=(R1 * X1 * 1000).toPrecision(3)+" ms";
}


function RC_calcAmplitude(){
    var amp = getValue(RC_obj.getElementById("U1_val").textContent);
    document.getElementById("A1_val").textContent = (amp*Math.SQRT1_2).toPrecision(3)+" V";
}

function RC_updateGraph(){
 var X1 = getValue( RC_obj.getElementById("X1_val").textContent );
 var R1 = getValue( RC_obj.getElementById("R1_val").textContent );
 var tau = X1 * R1 * 1000;
    RC_graph.getElementById("1tau").textContent = (tau).toPrecision(2);
    RC_graph.getElementById("2tau").textContent = (2*tau).toPrecision(2);
    RC_graph.getElementById("3tau").textContent = (3*tau).toPrecision(2);
    RC_graph.getElementById("4tau").textContent = (4*tau).toPrecision(2);
 var amp = getValue(RC_obj.getElementById("U1_val").textContent);
    RC_graph.getElementById("Vmax").textContent = amp;
    RC_graph.getElementById("Vtau").textContent = (amp * (1 - 1/Math.E)).toPrecision(3);
}

function syncValues(id, value){
    RC_calcFrequency();
    RC_calcAmplitude();
    RC_updateGraph();
}
</script>


# Low Pass Filter
Click on the values to change them! E.g. change "10k" to "20k". All equations and figures in the step response will adjust immediately!

<select id="Filter_Select" onchange="RC_loadSVG()">
<option value="RC">RC</option>
<option value="LR">LR</option>
</select>

<figure>
<object class="fig" style="width: 18em" id="RC_obj" data="./img/rc.svg" type="image/svg+xml"></object>
<figcaption>Circuit of low-pass filter</figcaption>
</figure>
<script>
RC_el = document.getElementById("RC_obj");
RC_el.addEventListener("load",function(){
    RC_obj = RC_el.contentDocument;  // get inner DOM
}, false);
</script>

Cut-Off Frequency: $f_c = \frac{1}{2\pi R C} =$ <tspan id="F1_val">159 Hz</tspan><br>
Time-Constant <tspan title="Time Constant">$\tau$</tspan> $= RC = \frac{1}{2\pi f_C} =$ <tspan id="RC_tau_val">6.28ms</tspan><br>
Amplitude at <tspan title="Cut-Off Frequency">$f_c$</tspan> is $U(f_c)=\frac{U(0)}{\sqrt{2}} =$ <tspan id="A1_val">3.54 V</tspan><br>
Dynamic: $I_C = C \cdot \dot U_C$ 

## Filter Response: 
<select id="Response_Select" onchange="RC_updateGraph()">
  <option value="SR">Step Response</option>
  <option value="FR">Frequency Response</option>
</select>

<figure>
<object class="fig" style="width: 26em" id="RC_graph" data="img/rc_graph3.svg" type="image/svg+xml"></object>
</figure>

<script>
RC_graph_el = document.getElementById("RC_graph");
RC_graph_el.addEventListener("load",function(){
    RC_graph = RC_graph_el.contentDocument;  // get inner DOM
}, false);
</script>

$V_{\mathrm{out}} = V_{\mathrm{max}} \left( 1 - \exp( - t/\tau) \right)$<br>
$V_{\mathrm{out}}$ will reach $V_{\mathrm{max}}$ after 3 to $4 \tau$.  




