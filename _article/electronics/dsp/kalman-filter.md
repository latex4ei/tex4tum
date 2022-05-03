---
title: Kalman Filter
---

The Kalman Filter is a linear quadratic estimator used to estimate the state of a system by combining sensor measurements and a (physical) process model of the system. It works optimal if measurements and process variations have white gaussian noise.

## Working Principle
The Kalman Filter averages a prediction of a system's state with a new measurement using a weighted average. The purpose of the weights is that estimated values with smaller uncertainty are "trusted" more. The result of the weighted average is a new state estimate that lies between the predicted and measured state, and has a smaller estimated uncertainty than either alone.

The Kalman filter works in two steps: *predict* and *update*.


## Defining the Model
* system's process model
* control inputs to that process
* multiple sequential measurements (e.g. from sensors)


### State Space
The dynamic model for the physical process is

<!-- $$\begin{array}{ll} \vec{x}_{n} & = \ma G_n \vec{x}_{n-1} + \ma B \vec{u}_n + \vec{w}_{n-1} \\[0.5em] \vec{y}_{n} & = \ma H_{n} \vec{x}_{n} + \vec{v}_{n} \end{array}$$ -->

$$\begin{array}{ll} \vec{x}_{n+1} & = \ma G_n \vec{x}_{n} + \ma B \vec{u}_n + \vec{w}_n \\ \vec{y}_{n} & = \ma H_{n} \vec{x}_{n} + \vec{v}_{n} \end{array}$$
with the $k$ states $\vec x$, transition matrix $\ma G$, gaussian process noise $\vec w_n$, input $\vec u$,
$l$ measurements $\vec y$, measurement model $\ma H$, gaussian measurement noise $\vec v_n$,
time point $n$.

The measurement matrix $\ma H$ defines how the observations correspond to the state. If the state variables can be directly observed then $\ma H = \ma 1$.

If there are no known inputs to the process, then $\ma B \vec{u}_n = 0$ and this term can be removed.

### Noise

The overall uncertainty of the estimation is expressed with the covariance matrix $\ma P_n$. This matrix is influenced by the process noise $\vec w_n$ and the measurement noise $\vec v_n$.
During prediction, the process noise increases the uncertainty, whereas combining it with the measurement during the update phase decreases the uncertainty.

$$\begin{array}{ll} 
\vec{w}_n &  \sim \mathcal{N}(\ma 0, \ma Q_n) \\
\vec{v}_n &  \sim \mathcal{N}(\ma 0, \ma R_n)
\end{array}$$

If values of $\ma Q$ are larger than values of $\ma R$, the filter trusts more the process, less the measurements.



## Calculations

### 1. Step: Prediction 
1.1 calculate the new (a priori) state estimate based on the old state and the dynamic model (e.g. physical laws)

$$\hat {\vec x}_{n|n-1} = \ma G_n \hat{\vec x}_{n-1|n-1}$$

1.2 calculate a new process covariance (how certain is the model?)

$$\ma P_{\vec x_{n|n-1}} = \ma G_n \ma P_{\vec x_{n-1|n-1}} \ma G_n^\top + \ma Q_n$$

### 2. Step: Update 
2.1 calculate intermediate values (optional): 

* Innovation: $\Delta \vec y_n = \vec y_n - \hat{\vec y}_{n|n-1} =\vec y_n - \ma H_{n} \hat{\vec x}_{n|n-1}$ </br>
which are the real measurements minus predicted measurements

* Innovation Covariance: $\ma S = \ma H_{n} \ma P_{\vec x_{n|n-1}} \ma H_{n}^\top + \ma R_n$

2.2 calculate optimal Kalman-gain:

$$\ma K_n = \frac{\ma P_{\vec x_{n|n-1}} \ma H_{n}^\top}{\ma H_{n} \ma P_{\vec x_{n|n-1}} \ma H_{n}^\top + \ma R_n} = \ma P_{\vec x_{n|n-1}} \ma H_{n}^\top {\ma S}^{-1}$$


2.3 calculate the updated (a posteriori) state estimate using $l$ measurements:

$$\hat{\vec x}_{n|n} = \hat{\vec x}_{n|n-1} + \ma K_n \Delta \vec y_n$$
which is the estimation of $\vec x_n$ based on $\Delta y_n$ with $K_{ij} \in [0.0; 1.0]$ where 0.0 means the filter fully trusts the prediction and 1.0 means the filter fully trusts the measurement.

2.4 update process covariance:

$$\ma P_{\vec x_{n|n}} = \ma P_{\vec x_{n|n-1}} + \ma K_n \ma H_{n} \ma P_{\vec x_{n|n-1}}$$


## Extended Kalman Filter
The Extended Kalman Filter (EKF) uses non-linear dynamic models.

$$\begin{array}{ll} \vec{x}_{n} & = g(\vec{x}_{n-1}, \vec{u}_n) + \vec{w}_n \\[0.5em] 
\vec{y}_{n} & = h(\vec{x}_{n-1}) + \vec{v}_{n} \end{array}$$
where $g()$ and $h()$ are non-linear functions. For covariance the Jacobi-Matrix of the model is used:

$$\ma G = \frac{\partial g}{\partial x} \Big\vert_{\hat{\vec x}_{n-1}, \vec u_n} \qquad \ma H = \frac{\partial h}{\partial x} \Big\vert_{\hat{\vec x}_{n}}$$


## Sensor Fusion
If $i$ sensors measure the same state $x_j$, this can be expressed in the measurement matrix $\ma H$. The column $j$ will have $i$ rows with entries.


## Example
{% example %}
Kalman Filter for Gyroscope and Accelerometer:

state $\vec x$ are the orientation angles roll and pitch and the bias angle
{% endexample %}





## References

* [Kalman Filter in one Dimension](https://www.kalmanfilter.net/kalman1d.html)

* [Madium: Understanding Kalman Filters with Python, 2018](https://medium.com/@jaems33/understanding-kalman-filters-with-python-2310e87b8f48)

* [Python Example](https://scipy-cookbook.readthedocs.io/items/KalmanFiltering.html)

* [YouTube: Understanding Kalman Filters 3/5](https://www.youtube.com/watch?v=ul3u2yLPwU0)
