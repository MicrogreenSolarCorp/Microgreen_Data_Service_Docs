---
sidebar_position: 2
description: Communication between the ESP32 and the backend
---

# IoT Core

IoT Core is used to connect the ESP32 to the cloud. It is used to send data from the ESP32 to the cloud.

## Topics
- Publish topic: ESP32_EnergyPak/pub
- Subscribe topic: ESP32_EnergyPak/sub
## Sample Message
```json
{
  "espID": "A07AF9AB6224",
  "current": 0,
  "voltage": 13,
  "stateOfCharge": 50,
  "totalCapacity": 0,
  "remainingCapacity": 124,
  "cellVoltage": [
    3267,
    3262,
    3262,
    3262,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "highestCellVoltage": 3267,
  "lowestCellVoltage": 3262,
  "temperatures": [
    26,
    28,
    26,
    25
  ],
  "chargingDischargingStatus": 2,
  "chargingMOSStatus": 0,
  "dischargingMOSStatus": 0,
  "balancingStatus": 0,
  "cellBalancingStatus": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  "alarms": [
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000"
  ]
}
```

## Cost
- AWS IoT charges per 5kb message. I.e. a 200 byte message = 1 5kb charge and 1 6kb message = 2 5kb charges.
- 1 device
- 1 message per minute = 43200 messages per month
- 1 message = 531 bytes => rounds up to 1kb
- Total: 0.04 USD per month per device

## IoT Rule (Within IoT Core)
- IoT Rule to send data to DynamoDB when a message is recieved from the ESP32
- IoT Rule used over Lambda because it is lower scale than Lambda. Even if we use Lambda, we would still need to use IoT Rules to get the data from the ESP32 to Lambda.
- The rule will get the data from the ESP32, add the current time, and send it to DynamoDB
- SQL Query:
    - / 1000 because AWS TTL is in seconds, not milliseconds. 30 days = 30 * 24 * 60 * 60 = 2592000 seconds
```SQL
SELECT *, (timestamp() / 1000) AS receivedAt, (timestamp() / 1000) + (30*24*60*60) AS TTL FROM 'ESP32_EnergyPak/pub'
```
- Cost:
    - $0.01 for the rule, $0.01 for the action = $0.02 per month fixed
