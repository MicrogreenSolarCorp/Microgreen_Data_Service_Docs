"use strict";(self.webpackChunkmicrogreen_data_service_docs=self.webpackChunkmicrogreen_data_service_docs||[]).push([[589],{1759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(5893),s=t(1151);const o={sidebar_position:2,description:"Communication between the ESP32 and the backend"},r="IoT Core",a={id:"backend/iotCore",title:"IoT Core",description:"Communication between the ESP32 and the backend",source:"@site/docs/backend/iotCore.md",sourceDirName:"backend",slug:"/backend/iotCore",permalink:"/Microgreen_Data_Service_Docs/backend/iotCore",draft:!1,unlisted:!1,editUrl:"https://github.com/MicrogreenSolarCorp/Microgreen_Data_Service_Docs/docs/backend/iotCore.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Communication between the ESP32 and the backend"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/Microgreen_Data_Service_Docs/backend/overview"},next:{title:"DynamoDB",permalink:"/Microgreen_Data_Service_Docs/backend/dynamoDB"}},c={},l=[{value:"Topics",id:"topics",level:2},{value:"Sample Message",id:"sample-message",level:2},{value:"Cost",id:"cost",level:2},{value:"IoT Rule (Within IoT Core)",id:"iot-rule-within-iot-core",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"iot-core",children:"IoT Core"}),"\n",(0,i.jsx)(n.p,{children:"IoT Core is used to connect the ESP32 to the cloud. It is used to send data from the ESP32 to the cloud."}),"\n",(0,i.jsx)(n.h2,{id:"topics",children:"Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Publish topic: ESP32_EnergyPak/pub"}),"\n",(0,i.jsx)(n.li,{children:"Subscribe topic: ESP32_EnergyPak/sub"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sample-message",children:"Sample Message"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "espID": "A07AF9AB6224",\n  "current": 0,\n  "voltage": 13,\n  "stateOfCharge": 50,\n  "totalCapacity": 0,\n  "remainingCapacity": 124,\n  "cellVoltage": [\n    3267,\n    3262,\n    3262,\n    3262,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0\n  ],\n  "highestCellVoltage": 3267,\n  "lowestCellVoltage": 3262,\n  "temperatures": [\n    26,\n    28,\n    26,\n    25\n  ],\n  "chargingDischargingStatus": 2,\n  "chargingMOSStatus": 0,\n  "dischargingMOSStatus": 0,\n  "balancingStatus": 0,\n  "cellBalancingStatus": [\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0,\n    0\n  ],\n  "alarms": [\n    "00000000",\n    "00000000",\n    "00000000",\n    "00000000",\n    "00000000",\n    "00000000",\n    "00000000",\n    "00000000"\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"cost",children:"Cost"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AWS IoT charges per 5kb message. I.e. a 200 byte message = 1 5kb charge and 1 6kb message = 2 5kb charges."}),"\n",(0,i.jsx)(n.li,{children:"1 device"}),"\n",(0,i.jsx)(n.li,{children:"1 message per minute = 43200 messages per month"}),"\n",(0,i.jsx)(n.li,{children:"1 message = 531 bytes => rounds up to 1kb"}),"\n",(0,i.jsx)(n.li,{children:"Total: 0.04 USD per month per device"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"iot-rule-within-iot-core",children:"IoT Rule (Within IoT Core)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IoT Rule to send data to DynamoDB when a message is recieved from the ESP32"}),"\n",(0,i.jsx)(n.li,{children:"IoT Rule used over Lambda because it is lower scale than Lambda. Even if we use Lambda, we would still need to use IoT Rules to get the data from the ESP32 to Lambda."}),"\n",(0,i.jsx)(n.li,{children:"The rule will get the data from the ESP32, add the current time, and send it to DynamoDB"}),"\n",(0,i.jsxs)(n.li,{children:["SQL Query:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"/ 1000 because AWS TTL is in seconds, not milliseconds. 30 days = 30 * 24 * 60 * 60 = 2592000 seconds"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT *, (timestamp() / 1000) AS receivedAt, (timestamp() / 1000) + (30*24*60*60) AS TTL FROM 'ESP32_EnergyPak/pub'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cost:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"$0.01 for the rule, $0.01 for the action = $0.02 per month fixed"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);