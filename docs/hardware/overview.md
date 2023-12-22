---
sidebar_position: 1
description: Overview of the hardware portion of the porject
---

# Overview
The hardware module is used to connect the ESP32 to the cloud. It connects via a RS485/232 depending on the BMS version. To connect to the user's internet, the module forms a bluetooth connection with the user's phone, which the user can use to send the wifi ssid and password to the module. The module then uses that information to connect to the internet and AWS. Once connected, the module queries the BMS for data ever 1 minute and sends it to the cloud.
