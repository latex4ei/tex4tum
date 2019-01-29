---
title: Kalman Filter
---

The Kalman Filter is a linear quadratic estimator used to estimate the state of a system by combining sensor measurements and a (physical) process model of the system. It works optimal if measurements and process variations have white gaussian noise.

## Working Principle
The Kalman Filter averages a prediction of a system's state with a new measurement using a weighted average. The purpose of the weights is that estimated values with smaller uncertainty are "trusted" more. The result of the weighted average is a new state estimate that lies between the predicted and measured state, and has a smaller estimated uncertainty than either alone.


## Requirements
* system's process model
* control inputs to that process
* multiple sequential measurements (e.g. from sensors)

Facts:

* the certainty of the measurements is expressed in the gains
* if values of $\ma Q$ are larger than values of $\ma R$, the filter trusts more the process, less the measurements


## Calculations

### State Space

$$\begin{array}{l} \vec{x}_{n} = \ma G_n \vec{x}_{n-1} + \ma B \vec{u}_n + \vec{v}_n \\ 
\vec{y}_{n} = \ma H_{n} \vec{x}_{n-1} + \vec{w}_{n}\end{array}$$
with the $k$ states $\vec x$, transition matrix $\ma G$, gaussian process noise $\vec v_n$, input $\vec u$,
$l$ measurements $\vec y$, measurement model $\ma H$, gaussian measurement noise $\vec w_n$,
time point $n$


### 1. Step: Prediction
1.1 calculate the next state based on the old state and the dynamic model (e.g. physical laws)

$$\hat {\vec x}_{n|n-1} = \ma G_n \hat{\vec x}_{n-1|n-1}$$

1.2 calculate a new process covariance (how certain is the model?)

$$\ma C_{\vec x_{n|n-1}} = \ma G_n \ma C_{\vec x_{n-1|n-1}} \ma G_n^\top + \ma C_{\vec v}$$

### 2. Step: Update
2.1 calculate intermediate values: 

* Innovation: $\Delta \vec y_n = \vec y_n - \hat{\vec y}_{n|n-1} =\vec y_n - \ma H_{n} \hat{\vec x}_{n|n-1}$ </br>
which are the real measurements minus predicted measurements

* Innovation Covariance: $\ma S = \ma H_{n} \ma C_{\vec x_{n|n-1}} \ma H_{n}^\top + \ma C_{\vec w_{n}}$

* Optimal Kalman-gain: $\ma K_n = \ma C_{\vec x_{n|n-1}} \ma H_{n}^\top {\ma S}^{-1}$</br>
which is the prediction for $\vec x_n$ based on $\Delta y_n$
with $K_{ij} \in [0.0; 1.0]$ where 0.0 means the filter fully trusts the prediction and 1.0 means the filter fully trusts the measurement.

2.2 calculate the new state from $l$ measurements:

$$\hat{\vec x}_{n|n} = \hat{\vec x}_{n|n-1} + \ma K_n \Delta \vec y_n$$

2.3 update process covariance:

$$\ma C_{\vec x_{n|n}} = \ma C_{\vec x_{n|n-1}} + \ma K_n \ma H_{n} \ma C_{\vec x_{n|n-1}}$$


## Extended Kalman Filter
The Extended Kalman Filter (EKF) uses non-linear dynamic models. For covariance the Jacobi-Matrix of the model is used.


## Sensor Fusion
If $i$ sensors measure the same state $x_j$, this can be expressed in the measurement matrix $\ma H$. The column $j$ will have $i$ rows with entries.


## Example
{% example %}
Kalman Filter for Gyroscope and Accelerometer:

state $\vec x$ are the orientation angles roll and pitch and the bias angle
{% endexample %}





## References

* [KALMAN FILTER IN ONE DIMENSION](https://www.kalmanfilter.net/kalman1d.html)

