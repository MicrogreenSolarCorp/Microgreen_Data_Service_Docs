---
sidebar_position: 3
description: The NoSQL database for the project
---

# DynamoDB
DynamoDB is a NoSQL database. We have 2 tables, 
- ESP32_Device_Table: used to store the data sent from the ESP32
- Device_Ownership_Table used to store device ownership data.

## NoSQL vs SQL
DynamoDB (NoSQL) was chosen over RDS (an AWS SQL database) because it's easier to scale and is more flexible to future changes in data.

## ESP32_Device_Table
### Primary Key
The Primary Key consists of a partition key and a sort key. 
- Partition key: ESP32 MAC Address - a unique identifier for each ESP32, burned into each chip at the factory and cannot be changed
- Sort key: Timestamp - the time that AWS recieves the IoT message from the ESP. The ESP does not have the capability to get the date and time, so it will be up to the server to add the timestamp to the message.
### Attributes
- espID (String)
- receivedAt (Number)
- alarms (Array of Strings)
- balancing (Number)
- cellBalancingStatus (Array of Numbers)
- cellVoltage (Array of Numbers)
- chargingDischargingStatus (Number)
- chargingMOSStatus (Number)
- current (Number)
- dischargingMOSStatus (Number)
- highestCellVoltage (Number)
- lowestCellVoltage (Number)
- remainingCapacity (Number)
- stateOfCharge (Number)
- temperatures (Array of Numbers)
- totalCapacity (Number)
- voltage (Number)
- TTL (Number)

### Sample Entry
| espID       | receivedAt    | alarms                                                                                                    | balancingStatus | cellBalancingStatus                                                                                              | cellVoltage                                                                                                                         | chargingDischargingStatus | chargingMOSStatus | current | dischargingMOSStatus | highestCellVoltage | lowestCellVoltage | remainingCapacity | stateOfCharge | temperatures                            | totalCapacity | voltage     | TTL         |
|-------------|---------------|-----------------------------------------------------------------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|---------------------------|------------------|---------|----------------------|--------------------|-------------------|-------------------|---------------|----------------------------------------|---------------|-------------|-------------|
| A07AF9AB6224| 1699650650386 | [`{"S":"00000000"},{"S":"00000000"},{"S":"00000000"},{"S":"00000000"},{"S":"00000000"},{"S":"00000000"},{"S":"00000000"},{"S":"00000000"}`] | 0               | [`{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"}`] | [`{"N":"3267"},{"N":"3262"},{"N":"3262"},{"N":"3262"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"},{"N":"0"}`] | 2                         | 0                | 0       | 0                    | 3267               | 3262              | 124               | 50            | [`{"N":"26"},{"N":"28"},{"N":"26"},{"N":"25"}`] | 0             | 13          | 1702650650  |

### Cost
#### Storage
    - 1 GB total storage with an an average item size of 500 bytes = 2,000,000 items
    - a 1GB usage will cost $0.25 per month

#### Read/Write Capacity Units
    - Auto scaling RCU/WCU min set to 1, max set to 5, with 70% target utilization
    - $2.52 per month

## Device_Ownership_Table
### Primary Key
Primary Key is the userEmail (string)
### Attributes
macAddresses (Array of Strings)
### Sample Entry

| userEmail | macAddresses |
|-----------|--------------|
| example@gmail.com | `[{"S": "A07AF9AB6224}, {"S": "A07AF9AB6230}]` |

### Cost
#### Storage
    - Bascially free
#### Read/Write Capacity Units
    - Auto scaling RCU/WCU min set to 1, max set to 5, with 70% target utilization
    - $2.52 per month

## Total Cost for DynamoDB
- $0.25 + $2.52 + $2.52 = $5.29 per month

## External Resources
- [SQL vs NoSQL](https://youtu.be/t0GlGbtMTio?si=3a21OF5_oLpPnj_I)

