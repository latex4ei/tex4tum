---
title: Servo Motor
tags: motor pwm
---
A Servo Motor is a cheap rotary actuator used for radio control and small-scale robotics.


## Colored Wires
A servo motor is normally connected using just 3 wires.

| Color  | Purpose     |
|--------|-------------|   
| Yellow | PWM Signal  |
| Red    | VDD         |
| Black  | GND         |


## Control

{% include svg-object.html id="servo" filename="servo.svg" %}

The angle of the servo is determined by the width of the PWM signal that is applied to the control wire.
Most servos expect to see a pulse every 20 ms. The angle is calculated as the fraction of the pulse width

  $$pw = \SI{1.0}{ms} + \SI{1.0}{ms} \cdot \left( \frac{\alpha}{\alpha_{\text{max}}}\right)$$
  with the pulsewidth $pw$, the current angle $\alpha$ .

For most RC servos the exact refresh rate is irrelevant as long as it is in a range of 40 Hz to 200 Hz.

### Example
A pulsewidth of $pw = \SI{1.5}{ms}$ will turn a servo with a maximum angle $\alpha_{\max} = \SI{180}{\degree}$ to $\alpha = 90$° (neutral position).



## References
* Jameco Electronics, [How do Servo Motors Work](https://www.jameco.com/jameco/workshop/howitworks/how-servo-motors-work.html)



