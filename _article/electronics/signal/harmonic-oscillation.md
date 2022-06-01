---
title: Harmonic Oscillation
tags: [sin, cos, sine, wave]
---
Harmonic Oscillation is a special type of periodic motion where the restoring force $F$ on the moving object is directly proportional to the object's displacement magnitude $x$ and acts towards the object's equilibrium position.
If $F$ is the only force acting on the system, the system is called a **simple harmonic oscillator**, and it undergoes simple harmonic motion: sinusoidal oscillations about the equilibrium point, with a constant amplitude and a constant frequency (which does not depend on the amplitude).
If a frictional force (damping) proportional to the velocity is also present, the harmonic oscillator is described as a **damped oscillator**.


$$F=ma=m{\ddot {x}}=-kx$$

Solving this differential equation, we find that the motion is described by the function

$$x(t)= A \cdot \cos(2\pi f_0 t - \varphi).$$
with the amplitude $A$, the frequency $f_0$ and the phase shift $\varphi$.



```{.python .bokeh include="res/code/bokeh/sine-wave.py"}
```
