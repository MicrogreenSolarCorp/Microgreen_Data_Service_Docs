---
sidebar_position: 5
description: API Gateway used to route API calls to the backend
---

# API Gateway
- Handles API routing
- All API calls are authenticated with Cognito User Pools
- We have 2 APIs:
**readEPDataApi**
    - API to get data from the DynamoDB table ESP32_Device_Table
    - Only read access
**deviceOwnershipApi**
    - API for the frontend to retrieve/update the list of devices (macAddresses) that the user has access to.  
    - Read, update, and create access

## API Docs
### readEPDataApi
- [Documentation](https://restless-trinity-903234.postman.co/documentation/31491622-ff3c8d6c-f624-4c3f-bec3-6cc25758274a/publish?workspaceId=21d824c3-b932-48b5-a04b-b52b48378e1c)
- GET `/readEPData/getMostRecent/{macAddress}`
    - Description: Get the most recent data entry for a specific macAddress. (Used for realtime data)
    - Request Parameters:
        - macAddress: String
- GET `/readEPData/getHistorical/{macAddress}`
    - Description: Get all data for a specific macAddress. (Used for historical data)
    - Request Parameters:
        - macAddress: String
### deviceOwnershipApi
- [Documentation](https://documenter.getpostman.com/view/31491622/2s9Ykn9hDn)
- GET `/device/getDevices/{userEmail}`
    - Description: Gets the list of devices that the user is allowed to see. If the userEmail ends with @microgreen.ca, it returns all the devices in the database.
    - URL Parameters:
        - userEmail: String
- PUT /device/addDevice
    - Description: Adds the device to the list of macAddresses associated with the user. If the user does not exist, it will create an entry with the userEmail and the macAddress. If the macAddress already exists in the user's list, it will return a 409 conflict error.
    - Request Body:
    ```json
    {
        "userEmail": "String",
        "macAddress": "String"
    }
    ```

## Cost
  - $3.50 per million REST API calls
