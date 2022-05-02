---
title: Petri Net
---

A petri net $N = (P,T,E)$ is a graph to model distributed systems. It consists of *places* $P$ and *transitions* $T$, which are connected by directed edges $E$.

The places are marked with tokens. Tokens are transported by the edges. A transition consumes and produces tokens. The state of the net is defined by the numbers of tokens at each place.

The initial marking M0 defines the number of tokens at each place.

## Types
* Boolean petri net: Each place can only hold one token.
* Weighted petri net: Edges can transport more than one token.
* Colored Petri net: Tokens are “colored” to represent different kinds of resources.


## Execution Rules
The rules for a boolean, non-weighted petri net:

* An enabled transition is allowed to fire but is not obliqued to fire.
* A transition is enabled (may fire) iff there is a token on each connected input place and no token on each connected output place.
* When a transition fires, it consumes a token from each connected input place and produces a token on each connected output place. The consumed and produced tokens do not need to sum up.

In a weighted Petri Net, the transition consumes and produces tokens according to the weights of the edges.
![Petri Net Transition](petri-example.svg){}


## Properties

* Deadlock (local): State, in which there is no sequence to enable a certain transition.
* Deadlock (global): State, in which there is no further transition possible.
* Liveness: For all states there is a sequence to make any transition fire. No transition can reach a deadlock.
* Fairness: All transitions will fire infinitively often in any infinite firing sequence.
* Reachability:
* Boundness: The maximum number of tokens a place can hold.
* Starvation: A transition t is enabled but there is an infinite sequence such that t will never fire.

If a petri net is live with initial marking M0, then it is deadlock-free


## Context
Petri nets are more general than state machines because they can model concurrency. A state machine is a special petri net where each transition is only connected to one input and one output place (no concurrency).

![Petri Net Classes](petrinet-classes.svg){}
