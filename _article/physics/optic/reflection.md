---
title: Reflection and Refraction
---
Reflection and Refraction are two wave phenomena that cause a change in direction of a wavefront at an interface between two different media.
In general, a light wave is partially refracted and partially reflected when it passes from one medium to another at any angle other than 0° from the normal.


<!--* **Reflection** causes the wavefront to return into the medium from which it originated. The angle at which the wave is incident on the surface equals the angle at which it is reflected. -->
<!--* **Refraction** changes the direction of the wave propagating into another medium. During refraction, the phase velocity of the wave is changed but its frequency remains constant.-->




**Reflection**: The angle at which the wave is incident on the surface equals the angle at which it is reflected. 	
$$\alpha_1 = - \alpha_2$$
with the angle of incidence $\alpha_1$ and the angle of reflection $\alpha_2$.

**Refraction**: The direction of the propagating wave changes according to the refractive indices.

$$\frac{\sin(\alpha)}{\sin(\beta)}=\frac{n_2}{n_1}=\frac{c_1}{c_2}=\frac{\lambda_1}{\lambda_2}$$
with the angle of incidence $\alpha$, the angle of refraction $\beta$, the refractive indices $n_1$ and $n_2$.


![](fraction.svg){#fraction}


Reflection angle $\alpha_2 = - \alpha_1 =$ <tspan id="Refl_val">-30</tspan> ${}^\circ$<br>
Refraction angle $\beta = \arcsin\left( \frac{n_1}{n_2} \sin(\alpha_1) \right) =$ <tspan id="Refr_val">-30</tspan> ${}^\circ$


The refractive index $n$ of a material

$$n = \sqrt{\mu_r \epsilon_r}$$
with $\epsilon_r$ is the material's relative permittivity, and $\mu_r$ is its relative permeability.



<!--
 --------------- --------------
 **Reflexion:**  $\alpha_1 = \alpha_2$
 **Fraction:**   $\frac{\sin(\alpha)}{\sin(\beta)}=\frac{n_2}{n_1}=\frac{c_1}{c_2}=\frac{\lambda_1}{\lambda_2}$
 ------------------------------
-->



### Total Internal Reflection
The total reflection will happen at the critical angle

$$\alpha_C = \arcsin\left( \frac{n_2}{n_1} \right)$$
where $\alpha_C$ is the critical angle, $n_1$ and $n_2$ are the refractive index.


{% explanation %}

- If $\alpha \le \alpha_C$, the ray will split; some of the ray will reflect
- If $\alpha \gt \alpha_C$, the entire ray reflects from the boundary.

{% endexplanation %}



### Polarization Angle
Light that is reflected at Brewster's angle

$$\alpha_G = \arctan\left( \frac{n_2}{n_1} \right)$$




<script type="text/javascript">
var R_obj

R_el = document.getElementById("fraction");
R_el.addEventListener("load",function(){
    R_obj = R_el.contentDocument;  // get inner DOM
}, false);

function RC_calcReflection() {
 R_obj  = document.getElementById("fraction").contentDocument;

 // from SVG
 var angle = getValue( R_obj.getElementById("alpha").textContent );
 var n1_val = getValue( R_obj.getElementById("n1_val").textContent );
 var n2_val = getValue( R_obj.getElementById("n2_val").textContent );

 // here
 var refl_text = document.getElementById("Refl_val");
 var refr_text = document.getElementById("Refr_val");

 // calc
 Degree = 1.0/360.0 * 2.0 * Math.PI;
 var alpha2 = (-angle)
 
 var beta


	if( Math.abs(angle) > 90 ){ 
	    beta = 180 - (Math.asin( n2_val/n1_val * Math.sin(angle * Degree) ) / Degree);
	    console.log(beta)
	} else {
	    beta = (Math.asin( n1_val/n2_val * Math.sin(angle * Degree) )) / Degree;
	}
	// total reflection?
    if (isNaN(beta) ){ beta = 180 - angle; }
 

 // write
refl_text.textContent=alpha2+"";
refr_text.textContent=Math.round(beta)

}




function syncValues(id, value){
    RC_calcReflection()
}
</script>
