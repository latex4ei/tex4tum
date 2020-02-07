---
title: Message Queue Telemetry Transport (MQTT)
---
MQTT is a publish-subscribe-based "lightweight" messaging protocol for use on top of the TCP/IP protocol. It specified in the standard ISO/IEC PRF 20922.


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
Clients subscribe on topic. 

### Topic Notation

Wildcards (+) are allowed for subscription on single topic level.


## Protocol

### Fixed Header (2 bytes):
```diagram
 0                   1           
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|  CPT  | Flags |RemainingLength|
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```
* CPT: Control Packet Type
* Flags: used to indicate Quality of Service in `PUBLISH` message.
* RemainingLength: number of bytes remaining within the current packet, including data in the variable header and the payload. RemainingLength does not include the bytes used to encode RemainingLength.

### Variable Length Header
Many messages include a 2 byte Packet Identifier in the variable length header.




There are 14 Control packet types (CPTs):

| Name           | Value | Direction | Pack. ID | Payload |
|----------------|-------|-----------|----------|---------|
|   Reserved     | `0x0` | none      | no       | None    |
|  `CONNECT`     | `0x1` | C → S     | no       | Req.    |
|  `CONNACK`     | `0x2` | S → C     | yes      | None    |
|  `PUBLISH`     | `0x3` | both      | yes      | Opt.    |
|  `PUBACK`      | `0x4` | both      | yes      | None    |
|  `PUBREC`      | `0x5` | both      | yes      | None    |
|  `PUBREL`      | `0x6` | both      | yes      | None    |
|  `PUBCOMP`     | `0x7` | both      | yes      | None    |
|  `SUBSCRIBE`   | `0x8` | C → S     | yes      | Req.    |
|  `SUBACK`      | `0x9` | S → C     | yes      | Req.    |
|  `UNSUBSCRIBE` | `0xA` | C → S     | yes      | Req.    |
|  `UNSUBACK`    | `0xB` | S → C     | yes      | None    |
|  `PINGREQ`     | `0xC` | C → S     | no       | None    |
|  `PINGRESP`    | `0xD` | S → C     | no       | None    |
|  `DISCONNECT`  | `0xE` | both      | no       | None    |
|  `AUTH`        | `0xF` | both      | no       | None    |



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





### Quality of Service (QoS)
Each connection to the broker can specify a QoS with the followin levels:

- 0: at most once: transmitt without ACK
- 1: at least once: re-transmit until ACK
- 2: exactly once: broker ckecks for duplicate


## References

1. ISO/IEC 20922
2. [MQTT Specification 5.0, 2019](http://docs.oasis-open.org/mqtt/mqtt/v5.0/cs02/mqtt-v5.0-cs02.html)
3. http://mqtt.org/
