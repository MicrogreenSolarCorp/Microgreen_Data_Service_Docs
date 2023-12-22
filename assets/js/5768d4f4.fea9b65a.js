"use strict";(self.webpackChunkmicrogreen_data_service_docs=self.webpackChunkmicrogreen_data_service_docs||[]).push([[227],{8135:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=s(5893),i=s(1151);const a={sidebar_position:4,description:"Minimizing duplicate code between the 2 BMS versions"},o="Code Sharing",r={id:"hardware/code-sharing",title:"Code Sharing",description:"Minimizing duplicate code between the 2 BMS versions",source:"@site/docs/hardware/code-sharing.md",sourceDirName:"hardware",slug:"/hardware/code-sharing",permalink:"/Microgreen_Data_Service_Docs/hardware/code-sharing",draft:!1,unlisted:!1,editUrl:"https://github.com/MicrogreenSolarCorp/Microgreen_Data_Service_Docs/docs/hardware/code-sharing.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Minimizing duplicate code between the 2 BMS versions"},sidebar:"sidebar",previous:{title:"Bluetooth Wifi Setup",permalink:"/Microgreen_Data_Service_Docs/hardware/bluetooth-wifi-setup"}},c={},d=[{value:"Object Oriented Programming",id:"object-oriented-programming",level:2},{value:"Auto BMS Detection",id:"auto-bms-detection",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"code-sharing",children:"Code Sharing"}),"\n",(0,t.jsx)(n.p,{children:"Due to having 2 BMS versions, there are a few things that are slightly different between the 2 versions."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Communication Protocol"}),": Mewyeah uses RS232 (36000 baud rate) while Daly uses RS232 (9600 baud rate)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Retrieval Commands"}),": Each BMS version has different commands to retrieve data from the BMS, as well as different data formats which require separate methods of parsing"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In order to reduce the amount of duplicate code, an object oriented approach is employed, as well as an auto-BMS-detection method."}),"\n",(0,t.jsx)(n.h2,{id:"object-oriented-programming",children:"Object Oriented Programming"}),"\n",(0,t.jsxs)(n.p,{children:["There is base class called ",(0,t.jsx)(n.code,{children:"BMS"})," which contains all the common code between the 2 versions. We then created 2 subclasses, ",(0,t.jsx)(n.code,{children:"MewyeahBMS"})," and ",(0,t.jsx)(n.code,{children:"DalyBMS"})," which contain the code that is specific to each version. The subclasses inherit from the base class, so they have access to all the common code. The ",(0,t.jsx)(n.code,{children:"BMS"})," class is defined as a pure virtual function, as it does not contain any code that can be run. This means that the ",(0,t.jsx)(n.code,{children:"BMS"})," class cannot be instantiated, and can only be used as a base class for other classes."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UML Diagram",src:s(2840).Z+"",width:"1062",height:"740"})}),"\n",(0,t.jsx)(n.h2,{id:"auto-bms-detection",children:"Auto BMS Detection"}),"\n",(0,t.jsx)(n.p,{children:"Initially, the BMS version is instantiated as a Daly BMS."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"BMS *bms; // Pointer to base class\nbms = new Daly(); // Initially assume it's Daly\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then the testConnection() method is called. This method sends a query and waits for a response. If the response is valid, then it returns true. If the response is invalid, then it returns false."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"isDaly = bms->testConnection();\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the response is invalid, then the BMS version is changed to Mewyeah and the testConnection() method is called again."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"if (!isDaly) {\n    delete bms; // Delete the Daly instance\n    bms = new Mewyeah(); // Now try Mewyeah\n    isMewyeah = bms->testConnection();\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"These methods allow the codebase to be compatible with Mewyeah and Daly versions simultaneously. There is no need to change any code or modify any flags."})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2840:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/umlDiagram-ce3955a1438aae0fbec8c2906c0d57ab.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(7294);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);