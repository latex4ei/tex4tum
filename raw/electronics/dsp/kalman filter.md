# Kalman Filter


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
$\vec{x}_{n} = \ma G_n \vec{x}_{n-1} + \ma B \vec{u}_n + \vec{v}_n$ <br>
$\vec{y}_{n} = \ma H_{n} \vec{x}_{n-1} + \vec{w}_{n}$

<div class="legend">
$k$ states $\vec x$, transition matrix $\ma G$, gaussian process noise $\vec v_n$, input $\vec u$, 
$l$ measurements $\vec y$, measurement model $\ma H$, gaussian measurement noise $\vec w_n$,
time point $n$
</div>


### 1. Step: Prediction
calculate the next state based on the old state and the dynamic model (e.g. physical laws)

$\hat {\vec x}_{n|n-1} = \ma G_n \hat{\vec x}_{n-1|n-1}$

calculate a new process covariance (how certain is the model?)
$\ma C_{\vec x_{n|n-1}} = \ma G_n \ma C_{\vec x_{n-1|n-1}} \ma G_n^\top + \ma C_{\vec v}$



### 2. Step: Update
calculate Innovation (real measurements minus predicted measurements)
$\Delta \vec y_n = \vec y_n - \hat{\vec y}_{n|n-1} =\vec y_n - \ma H_{n} \hat{\vec x}_{n|n-1}$

Innovation Covariance: $\ma S = \ma H_{n} \ma C_{\vec x_{n|n-1}} \ma H_{n}^\top + \ma C_{\vec w_{n}}$

With optimal **Kalman-gain** (prediction for $\vec x_n$ based on $\Delta y_n$): 

$\ma K_n = \ma C_{\vec x_{n|n-1}} \ma H_{n}^\top {\ma S}^{-1}$

with $K_{ij} \in [0.0; 1.0]$ where 0.0 means the filter fully trusts the prediction and 1.0 means the filter fully trusts the measurement.


calculate the new state from $l$ measurements
$\hat{\vec x}_{n|n} = \hat{\vec x}_{n|n-1} + \ma K_n \Delta \vec y_n$

$\ma C_{\vec x_{n|n}} = \ma C_{\vec x_{n|n-1}} + \ma K_n \ma H_{n} \ma C_{\vec x_{n|n-1}}$



## Extended Kalman Filter
The Extended Kalman Filter (EKF) uses non-linear dynamic models. For covariance the Jacobi-Matrix of the model is used.



## Sensor Fusion
If $i$ sensors measure the same state $x_j$, this can be expressed in the measurement matrix $\ma H$. The column $j$ will have $i$ rows with entries. 


## Example	
<div class="example">
Kalman Filter for Gyroscope and Accelerometer:

state $\vec x$ are the orientation angles roll and pitch and the bias angle





<div>


