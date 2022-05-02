---
title: Quadcopter
---

A quadcopter is a type of helicopter with four rotors. 


## Motors
Low-cost commercial quadcopters generally use electric DC motors such as

* **Brushed Motors:** simple and cheap and thus a popular choice for micro quadcopters. 
However, the friction of the brush results in lower efficiency and life span.
* **Brushless Motors:** require 3-phase electronic speed controllers (ESC). The output of the ESC controls the speed of the motor.


<!-- The configuration of the motors can be X, +, or H. -->



## Flight Control
Two rotors are spinning clockwise (CW) and two counterclockwise (CCW) to balance the angular momentum. 
Each rotor produces both lift and torque about its center of rotation, as well as drag opposite to the vehicle's direction of flight.
Flight control is provided by independent variation of the speed and hence lift and torque of each rotor.


![Top view of a conceptual quadcopter model.](quadrocopter.svg){#SVG_obj width="30em"}


<div class="row" markdown>
  <div class="col" markdown>
  <label>Thrust</label><br>
  <input type="range" id="s_thrust" min="0" max="5" value="1" list="tickmarks" oninput="update(this)"><br><br>
  </div>
  <div class="col" markdown>
  <label>Pitch</label><br>
  <input type="range" id="s_pitch" min="-3" max="3" value="0" step="1" list="tickmarks" oninput="update(this)">
  </div>
</div>
<div class="row" markdown>
  <div class="col" markdown>
  <label>Yaw</label><br>
  <input type="range" id="s_yaw" min="-3" max="3" value="0" list="tickmarks" oninput="update(this)"><br><br>
  </div>
  <div class="col" markdown>
  <label>Roll</label><br>
  <input type="range" id="s_roll" min="-3" max="3" value="0" step="1" list="tickmarks" oninput="update(this)">
  </div>
</div>



## References
* [Wikipedia: Quadcopter](https://en.wikipedia.org/wiki/Quadcopter)
* [Nathan M. Zimmerman: Flight Control and Hardware Design of MultiRotor Systems](https://epublications.marquette.edu/cgi/viewcontent.cgi?article=1370&context=theses_open)


<script>
var SVG_obj;
var Stick_values = [2, 0, 0, 0];


function update(slider){
  switch(slider.id) {
    case 's_thrust': Stick_values[0] = parseInt(slider.value); break;
    case 's_yaw': Stick_values[1] = parseInt(slider.value); break;
    case 's_pitch': Stick_values[2] = parseInt(slider.value); break;
    case 's_roll': Stick_values[3] = parseInt(slider.value); break;
  }
  var speeds = [2, 2, 2, 2]
  speeds[0] = (Stick_values[0] - Stick_values[1]/3.0 + Stick_values[2]/3.0 - Stick_values[3]/3.0); //rt
  speeds[1] = (Stick_values[0] + Stick_values[1]/3.0 + Stick_values[2]/3.0 + Stick_values[3]/3.0);
  speeds[2] = (Stick_values[0] - Stick_values[1]/3.0 - Stick_values[2]/3.0 + Stick_values[3]/3.0);
  speeds[3] = (Stick_values[0] + Stick_values[1]/3.0 - Stick_values[2]/3.0 - Stick_values[3]/3.0);


  for (var i = 1; i <= 4; i++) {
    var speed = 4/speeds[i-1]
    if (speed == Infinity){ speed = 0 }
    SVG_obj.getElementById('qc-rotor-'+i.toString()).style.animationDuration = speed+"s";
  }
}




document.getElementById("SVG_obj").addEventListener("load",function(){
    SVG_obj = document.getElementById("SVG_obj").contentDocument; // get inner DOM
}, false);
</script>
