
# Complexity Theory

Decision problem: A problem with a yes or no answer.



## Complexity Classes

Deterministic: DTIME, DSPACE
Non-deterministic: NTIME, NSPACE


### P
P is a complexity class that represents the set of all decision problems that can be solved in polynomial time. That is, given an instance of the problem, the answer yes or no can be decided in polynomial time.


### NP
NP is a complexity class that represents the set of all decision problems for which the instances where the answer is "yes" have proofs that can be verified in polynomial time.


### NP-Complete
NP-Complete is a complexity class which represents the set of all problems X in NP for which it is possible to reduce any other NP problem Y to X in polynomial time.


Example: Given a graph $G$, is there set $S$ of size $|S| ≥ k$ such that no two nodes in $S$ are connected by an edge?



### NP-hard
A problem H is NP-hard when every problem L in NP can be reduced in polynomial time to H, that is given a solution for L we can verify it is a solution for H in polynomial time.
The halting problem is an NP-hard problem.




## Reduction
Reduce problem Y to problem X (Problem X is at least as hard as problem Y):
If you had a black box that can solve instances of
problem X, can you solve any instance of Y using
polynomial number of steps, plus a polynomial number of
calls to the black box that solves X ?

If Y can be reduced to X and Y cannot be solved in polynomial time, then X
cannot be solved in polynomial time.

Any possible computable problem A is reducible to the Halting Problem: just pass as input the algorithm that solves the problem A but with a while(true) tacked at the end after either the true or false case. 