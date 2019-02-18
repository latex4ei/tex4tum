---
title: Message Queue Telemetry Transport (MQTT)
---
MQTT is a publish-subscribe-based "lightweight" messaging protocol for use on top of the TCP/IP protocol.


The publish-subscribe messaging pattern requires a message broker. The broker is responsible for distributing messages to interested clients based on the topic of a message.

## Features
* Simple to implement (especially at the sensor side)
* QoS Support
* Lightweight and bandwidth efficient
* Session awareness



## Methods

* `Connect`: Waits for a connection to be established with the server.
* `Disconnect`: Waits for the MQTT client to finish any work it must do, and for the TCP/IP session to disconnect.
* `Subscribe`: Waits for completion of the Subscribe or UnSubscribe method.
* `UnSubscribe`: Requests the server unsubscribe the client from one or more topics.
* `Publish`: Returns immediately to the application thread after passing the request to the MQTT client.
* Last-Will-Message: sent to clients if hard-disconnect detected
* Keepalive: if no interaction has happened with the broker for a certain amount of time, the client 
”pings” the broker (PINGREQ), which “pings it back” (PINGREP).


## Publish/Subscribe
Sensor publish to topic e.g. `deib/antlab/room5/temperature` to MQTT broker.

Clients subscribe on topic. Wildcards (+) allowed for subscription on single topic level.


## Protocol

CONNECT message fields:

* clientID
* cleanSession


PUBLISH message fields

| Field      | Example            |
|------------|--------------------|
| packageID  | `2`                |
| topicName  | `"matteo/temp"`    |
| QoS        | `1`                |
| retainFlag | `false`            |
| Payload    | `"temperature:30"` |
| dupFlag    | `false`            |


* QoS 
	- 0: at most once: transmitt without ACK
	- 1: at least once: re-transmit until ACK
	- 2: exactly once: broker ckecks for duplicate


## References
ISO/IEC 20922

* http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/mqtt-v3.1.1.html
* http://mqtt.org/
