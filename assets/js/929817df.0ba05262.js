"use strict";(self.webpackChunkmicrogreen_data_service_docs=self.webpackChunkmicrogreen_data_service_docs||[]).push([[19],{9840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=r(5893),n=r(1151);const i={sidebar_position:1,description:"Overview of the hardware portion of the porject"},a="Overview",s={id:"hardware/overview",title:"Overview",description:"Overview of the hardware portion of the porject",source:"@site/docs/hardware/overview.md",sourceDirName:"hardware",slug:"/hardware/overview",permalink:"/Microgreen_Data_Service_Docs/hardware/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/MicrogreenSolarCorp/Microgreen_Data_Service_Docs/docs/hardware/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Overview of the hardware portion of the porject"},sidebar:"sidebar",previous:{title:"Hardware",permalink:"/Microgreen_Data_Service_Docs/category/hardware"},next:{title:"Hardware Design",permalink:"/Microgreen_Data_Service_Docs/hardware/hardware-design"}},c={},d=[];function h(e){const t={h1:"h1",p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"The hardware module is used to connect the ESP32 to the cloud. It connects via a RS485/232 depending on the BMS version. To connect to the user's internet, the module forms a bluetooth connection with the user's phone, which the user can use to send the wifi ssid and password to the module. The module then uses that information to connect to the internet and AWS. Once connected, the module queries the BMS for data ever 1 minute and sends it to the cloud."})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var o=r(7294);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);