import{a as e,j as t,B as n,r as a,g as i,u as r,i as s,C as o,T as c,b as l,G as d,P as u,c as p,s as h,d as m,I as f,L as x,e as g,D as b,f as v,h as y,k as j,l as w,A as k,m as S,n as I,o as C,p as P,q as D,t as T,F as M,S as A,v as O,w as E,x as N,y as B,z as K,E as F,H as _,J as W,K as L,M as R,N as z}from"./vendor-mui-Cx7rkKNB.js";import{O as V,u as H,a as $,H as q,R as U,b as G,N as Y}from"./vendor-react-m9IEnpkk.js";import{i as J,g as Q,e as X,q as Z,c as ee,o as te,a as ne,d as ae,b as ie,u as re,s as se,f as oe,h as ce,j as le,l as de,r as ue,_ as pe,C as he,k as me,E as fe,F as xe,m as ge,n as be,p as ve,v as ye,t as je,w as we,x as ke,y as Se,z as Ie,T as Ce}from"./vendor-firebase-BOQkN4be.js";var Pe;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var De=e;Pe=De.createRoot,De.hydrateRoot;const Te=()=>t.jsx(n,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh",bgcolor:"#1a1a1a"},children:t.jsx(n,{component:"main",sx:{flexGrow:1},children:t.jsx(V,{})})}),Me=Q(J({apiKey:"AIzaSyBfzh_QQFaKhGXLuVJXbSVkBuOZOvXLBRg",authDomain:"fridge6sal-5b0f6.firebaseapp.com",projectId:"fridge6sal-5b0f6",storageBucket:"fridge6sal-5b0f6.appspot.com",messagingSenderId:"1091624932154",appId:"1:1091624932154:web:b5e0e3d9c5c9b5e5d8e5c5"}));X(Me).catch((e=>{"failed-precondition"===e.code||e.code}));const Ae=(e,t=[],n={})=>{const[i,r]=a.useState([]),[s,o]=a.useState(!0),c=a.useRef(new Map),{realtime:l=!1}=n;return a.useEffect((()=>{const n=Z(ee(Me,e),...t),a=`${e}-${t.join("-")}`;c.current.has(a)&&(r(c.current.get(a)),o(!1));if(l){const e=te(n,(e=>{const t=[];e.forEach((e=>{t.push({id:e.id,...e.data()})})),r(t),c.current.set(a,t),o(!1)}));return()=>e()}(async()=>{try{const e=await ne(n),t=[];e.forEach((e=>{t.push({id:e.id,...e.data()})})),r(t),c.current.set(a,t),o(!1)}catch(e){o(!1)}})()}),[e,t.join("-"),l]),{data:i,loading:s}};var Oe={},Ee={};const Ne=i(r);var Be;function Ke(){return Be||(Be=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Ne}(Ee)),Ee}var Fe=s;Object.defineProperty(Oe,"__esModule",{value:!0});var _e=Oe.default=void 0,We=Fe(Ke()),Le=t;_e=Oe.default=(0,We.default)((0,Le.jsx)("path",{d:"M9.68 13.69 12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6"}),"WorkspacePremium");var Re={},ze=s;Object.defineProperty(Re,"__esModule",{value:!0});var Ve=Re.default=void 0,He=ze(Ke()),$e=t;Ve=Re.default=(0,He.default)((0,$e.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings");const qe=()=>{const e=H(),{data:i,loading:r}=Ae("rooms",[],{realtime:!1}),s=a.useMemo((()=>Math.max(...i.map((e=>e.balance||0)))),[i]),p=a.useMemo((()=>i.reduce(((e,t)=>(e[t.id]=t,e)),{})),[i]),h=({roomId:n})=>{const a=p[n]||{occupantName:"",balance:0},i=a.balance===s&&a.balance>0;return t.jsxs(u,{elevation:3,sx:{p:3,height:"100%",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:"12px",transition:"all 0.2s ease-in-out",position:"relative","&:hover":{transform:"translateY(-4px)",boxShadow:"0 8px 16px rgba(0,0,0,0.1)"}},onClick:()=>(t=>{e(`/room/${t}`)})(n),children:[i&&t.jsx(_e,{sx:{position:"absolute",top:-10,right:-10,color:"#ffd700",fontSize:"2rem",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))",transform:"rotate(12deg)"}}),t.jsx(c,{variant:"h4",component:"div",sx:{color:"#2c3e50",fontWeight:"bold",mb:1},children:n}),t.jsx(c,{variant:"body1",sx:{color:"#666",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",px:2},children:a.occupantName||"Tomt værelse"})]})};return t.jsxs(o,{maxWidth:!1,sx:{py:3,px:{xs:2,sm:3},minHeight:"100vh",bgcolor:"#f5f6fa",position:"relative",overflow:"hidden"},children:[t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:4},children:[t.jsx(c,{variant:"h3",component:"h1",align:"center",sx:{color:"#2c3e50",mb:1,fontWeight:"bold"},children:"DormDrinks 6.sal"}),t.jsx(l,{variant:"contained",color:"primary",startIcon:t.jsx(Ve,{}),onClick:()=>{e("/admin")},children:"Admin"})]}),t.jsx(c,{variant:"subtitle1",component:"div",align:"center",sx:{color:"#666",mb:4},children:"Beer, Soda & Beyond"}),t.jsx(d,{container:!0,spacing:2,sx:{width:"auto",mx:-1,mt:0},children:Array.from({length:28},((e,t)=>t+601)).map((e=>t.jsx(d,{item:!0,xs:6,sm:4,md:3,sx:{height:"100%"},children:t.jsx(h,{roomId:e.toString()})},e)))})]})};var Ue={},Ge=s;Object.defineProperty(Ue,"__esModule",{value:!0});var Ye=Ue.default=void 0,Je=Ge(Ke()),Qe=t;Ye=Ue.default=(0,Je.default)((0,Qe.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var Xe={},Ze=s;Object.defineProperty(Xe,"__esModule",{value:!0});var et=Xe.default=void 0,tt=Ze(Ke()),nt=t;et=Xe.default=(0,tt.default)((0,nt.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");const at=async e=>{try{const t=ae(Me,"rooms",e),n=await ie(t);return n.exists()?{id:n.id,...n.data()}:null}catch(t){throw t}},it=async()=>{try{const e=ee(Me,"products"),t=await ne(e);return t.docs.map((e=>({id:e.id,...e.data()})))}catch(e){throw e}},rt=async()=>{try{const e=ee(Me,"products");if((await ne(e)).empty){const t=[{id:"beer",name:"Øl",price:7},{id:"soda",name:"Sodavand",price:5},{id:"snacks",name:"Snacks",price:10},{id:"water",name:"Vand",price:3}];for(const n of t)await ce(ae(e,n.id),{name:n.name,price:n.price})}for(let n=601;n<=628;n++){const e=ae(Me,"rooms",n.toString());(await ie(e)).exists()||await ce(e,{occupantName:"",balance:0,lastPurchase:null})}const t=ae(Me,"adminConfig","general");(await ie(t)).exists()||await ce(t,{mobilePayPhoneNumber:"",adminPassword:"admin123"})}catch(e){throw e}},st=[{id:"beer",name:"Øl",price:7},{id:"soda",name:"Sodavand",price:5},{id:"snacks",name:"Snacks",price:10},{id:"water",name:"Vand",price:3}],ot=()=>{var e,i;const{roomId:r}=$(),s=H(),[h,m]=a.useState({occupantName:"",balance:0}),[f,x]=a.useState(st),[g,b]=a.useState(!0);a.useEffect((()=>{(async()=>{try{await rt();const[e,t]=await Promise.all([at(r),it()]);m(e||{occupantName:"",balance:0}),x(t.length>0?t:st)}catch(e){x(st)}finally{b(!1)}})()}),[r]);const v=async e=>{try{await(async(e,t)=>{try{const n=ae(Me,"rooms",e);await re(n,t)}catch(n){throw n}})(r,{occupantName:e}),m((t=>({...t,occupantName:e})))}catch(t){}},y=async e=>{try{const t=f.find((t=>t.id===e));if(!t)return;const n=(h.balance||0)+t.price,a=new Date;m((e=>({...e,balance:n,lastPurchase:{productName:t.name,amount:t.price,timestamp:a}}))),await(async e=>{var t;try{const n=ee(Me,"purchases"),a={...e,timestamp:se()};await oe(n,a);const i=ae(Me,"rooms",e.roomId),r=(null==(t=(await ie(i)).data())?void 0:t.balance)||0;await re(i,{balance:r+e.amount,lastPurchase:{productName:e.productName,amount:e.amount,timestamp:se()}})}catch(n){throw n}})({roomId:r,productId:e,productName:t.name,amount:t.price})}catch(t){const e=await at(r);m(e||{occupantName:"",balance:0})}};return t.jsxs(n,{sx:{bgcolor:"#f5f6fa",minHeight:"100vh",display:"flex",flexDirection:"column"},children:[t.jsxs(o,{maxWidth:"sm",sx:{py:4,flex:1},children:[t.jsxs(n,{sx:{display:"flex",flexDirection:"column",alignItems:"center",mb:6},children:[t.jsxs(c,{variant:"h3",component:"h1",sx:{color:"#2c3e50",fontWeight:"bold",mb:2},children:["Værelse ",r]}),t.jsx(n,{sx:{position:"relative",width:"100%",maxWidth:300},children:t.jsx(p,{variant:"outlined",placeholder:"Klik for at tilføje beboer",value:h.occupantName,onChange:e=>v(e.target.value),sx:{width:"100%","& .MuiOutlinedInput-root":{fontSize:"1.2rem",textAlign:"center","& fieldset":{borderColor:"rgba(0,0,0,0.2)"},"&:hover fieldset":{borderColor:"#e74c3c"},"&.Mui-focused fieldset":{borderColor:"#e74c3c"},"& input":{textAlign:"center",color:"#2c3e50","&::placeholder":{color:"#666",opacity:.7}}}},InputProps:{endAdornment:t.jsx(et,{sx:{color:"#666",opacity:.7,mr:1,transition:"all 0.2s",".MuiOutlinedInput-root:hover &":{color:"#e74c3c",opacity:1}}})}})})]}),t.jsxs(u,{elevation:3,sx:{p:4,mb:4,textAlign:"center",bgcolor:h.balance>0?"#fff3e0":"white",borderRadius:3},children:[t.jsx(c,{variant:"h6",sx:{color:"#666",mb:1},children:"SALDO"}),t.jsxs(c,{variant:"h2",sx:{color:h.balance>0?"#e74c3c":"#2c3e50",fontWeight:"bold"},children:[null==(e=h.balance)?void 0:e.toFixed(2)," kr"]})]}),h.lastPurchase&&t.jsxs(u,{elevation:3,sx:{bgcolor:"white",p:3,mb:4,borderRadius:3},children:[t.jsx(c,{variant:"overline",sx:{color:"#666",display:"block",mb:1,fontSize:"0.85rem"},children:"SENESTE KØB"}),t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx(c,{variant:"h6",sx:{color:"#2c3e50",fontWeight:"bold"},children:h.lastPurchase.productName}),t.jsxs(n,{sx:{textAlign:"right"},children:[t.jsxs(c,{sx:{color:"#e74c3c",fontSize:"1.1rem",fontWeight:"bold"},children:[null==(i=h.lastPurchase.amount)?void 0:i.toFixed(2)," kr"]}),t.jsx(c,{sx:{color:"#666",fontSize:"0.9rem"},children:(e=>{if(!e)return"";return(e instanceof Date?e:e.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit"})})(h.lastPurchase.timestamp)})]})]})]}),t.jsx(d,{container:!0,spacing:2,children:f.map((e=>t.jsx(d,{item:!0,xs:6,children:t.jsxs(l,{fullWidth:!0,variant:"contained",onClick:()=>y(e.id),sx:{bgcolor:"#e74c3c",py:2,borderRadius:2,fontSize:"1.1rem",fontWeight:"bold",boxShadow:"0 2px 8px rgba(231,76,60,0.3)",display:"flex",flexDirection:"column","&:hover":{bgcolor:"#c0392b",transform:"translateY(-2px)",boxShadow:"0 4px 12px rgba(231,76,60,0.4)"}},children:[t.jsx(n,{children:e.name}),t.jsxs(c,{variant:"body2",sx:{opacity:.9,fontSize:"0.9rem",fontWeight:"normal"},children:[e.price," kr"]})]})},e.id)))})]}),t.jsx(n,{sx:{p:2,borderTop:"1px solid rgba(0,0,0,0.1)",bgcolor:"white"},children:t.jsx(o,{maxWidth:"sm",children:t.jsx(l,{fullWidth:!0,variant:"text",onClick:()=>s("/"),startIcon:t.jsx(Ye,{}),sx:{color:"#666",py:1.5,fontSize:"1rem","&:hover":{bgcolor:"rgba(0,0,0,0.05)",color:"#2c3e50"}},children:"Tilbage til oversigt"})})})]})},ct=h(o)({minHeight:"100vh",backgroundColor:"#ffffff",color:"#333333",display:"flex",flexDirection:"column",padding:"16px",gap:"24px"}),lt=h(n)({display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #e0e0e0"}),dt=h(p)({"& .MuiInputBase-input":{color:"#333333",backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"8px 12px"},"& .MuiInput-underline:before":{borderBottom:"none"},"& .MuiInput-underline:after":{borderBottom:"none"}}),ut=h(l)({backgroundColor:"#5BB9FD",color:"white",padding:"16px",borderRadius:"8px",fontSize:"16px",textTransform:"none",marginTop:"40px",marginBottom:"40px","&:hover":{backgroundColor:"#4999d6"}}),pt=h(u)({backgroundColor:"#f5f5f5",padding:"16px",borderRadius:"8px",marginBottom:"16px",boxShadow:"none",border:"1px solid #e0e0e0"}),ht=h(c)({fontSize:"18px",fontWeight:500,marginBottom:"12px",color:"#333333"}),mt=()=>{var e;const[i,r]=a.useState({occupantName:"",balance:0,lastPurchase:null,recentPurchases:[]}),[s,o]=a.useState(localStorage.getItem("selectedRoom")),[l,d]=a.useState(!0),[u,h]=a.useState(null),m=e=>{if(!e)return"";return(e instanceof Date?e:e.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit"})};a.useEffect((()=>{(async()=>{if(s)try{d(!0);const e=await at(s),t=ee(Me,"rooms",s,"purchases"),n=Z(t,le("timestamp","desc"),de(5)),a=await ne(n),i=[];a.forEach((e=>{const t=e.data();i.push({id:e.id,...t,timestamp:t.timestamp})}));const o={...e,recentPurchases:i};r(o)}catch(e){h(e)}finally{d(!1)}})()}),[s]);const f=e=>{const t=e.target.value;o(t),localStorage.setItem("selectedRoom",t)},x=Array.from({length:28},((e,t)=>String(601+t)));return s?l?t.jsx(ct,{children:t.jsx(c,{variant:"body1",sx:{textAlign:"center",mt:4},children:"Indlæser..."})}):t.jsxs(ct,{children:[t.jsxs(lt,{children:[t.jsxs(c,{variant:"h6",sx:{color:"#333333"},children:["Værelse ",s]}),t.jsx(dt,{variant:"standard",placeholder:"Beboernavn",value:(null==i?void 0:i.occupantName)||"",disabled:!0})]}),t.jsxs(n,{sx:{textAlign:"center",my:4},children:[t.jsx(c,{variant:"body1",sx:{mb:1,color:"#666666"},children:"Samlet saldo:"}),t.jsxs(c,{variant:"h4",sx:{color:"#333333"},children:[(null==(e=null==i?void 0:i.balance)?void 0:e.toFixed(2))||"0.00"," kr"]})]}),t.jsx(ut,{fullWidth:!0,variant:"contained",onClick:async()=>{const e=ae(Me,"adminConfig","general"),t=await ie(e);if(t.exists()){const{mobilePayPhoneNumber:e}=t.data(),n=(null==i?void 0:i.balance)||0;window.location.href=`mobilepay://send?phone=${e}&amount=${n}&comment=Værelse ${s}`}},disabled:!(null==i?void 0:i.balance),children:"Betal med MobilePay"}),t.jsxs(pt,{children:[t.jsx(ht,{children:"Seneste 5 køb"}),u&&t.jsxs(c,{variant:"body2",color:"error",children:["Fejl ved hentning af køb: ",u.message]}),i.lastPurchase&&t.jsxs(n,{sx:{mb:2,pb:2,borderBottom:"1px solid #e0e0e0"},children:[t.jsxs(c,{variant:"body2",sx:{display:"flex",justifyContent:"space-between",color:"#333333"},children:[t.jsxs("span",{children:["Seneste køb: ",i.lastPurchase.productName]}),t.jsxs("span",{children:["Pris: ",i.lastPurchase.amount," kr"]})]}),i.lastPurchase.timestamp&&t.jsx(c,{variant:"caption",sx:{display:"block",mt:.5,color:"#666666"},children:m(i.lastPurchase.timestamp)})]}),i.recentPurchases&&i.recentPurchases.length>0&&i.recentPurchases.map((e=>t.jsxs(n,{sx:{mb:2,pb:2,borderBottom:"1px solid #e0e0e0","&:last-child":{borderBottom:"none"}},children:[t.jsxs(c,{variant:"body2",sx:{display:"flex",justifyContent:"space-between",color:"#333333"},children:[t.jsxs("span",{children:["Produkt: ",e.productName]}),t.jsxs("span",{children:["Pris: ",e.amount," kr"]})]}),e.timestamp&&t.jsx(c,{variant:"caption",sx:{display:"block",mt:.5,color:"#666666"},children:m(e.timestamp)})]},e.id))),!i.lastPurchase&&(!i.recentPurchases||0===i.recentPurchases.length)&&t.jsx(c,{variant:"body2",sx:{color:"#666666"},children:"Ingen seneste køb"})]}),t.jsxs(pt,{children:[t.jsx(ht,{children:"Påmindelser"}),t.jsx(c,{variant:"body2",sx:{color:"#333333"},children:"Husk køkkenmøde - Torsdag d. 15. juni"})]})]}):t.jsx(ct,{children:t.jsxs(n,{sx:{textAlign:"center",mt:4},children:[t.jsx(c,{variant:"h5",gutterBottom:!0,children:"Velkommen"}),t.jsx(c,{gutterBottom:!0,sx:{mb:3,color:"#666666"},children:"Vælg dit værelse for at fortsætte"}),t.jsxs(p,{select:!0,fullWidth:!0,label:"Værelse",onChange:f,SelectProps:{native:!0},sx:{backgroundColor:"#f0f0f0",borderRadius:"8px","& .MuiInputBase-input":{color:"#333333"},"& .MuiInputLabel-root":{color:"#666666"}},children:[t.jsx("option",{value:"",children:"Vælg værelse"}),x.map((e=>t.jsx("option",{value:e,children:e},e)))]})]})})},ft="@firebase/installations",xt="0.6.9",gt=1e4,bt=`w:${xt}`,vt="FIS_v2",yt=36e5,jt=new fe("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function wt(e){return e instanceof xe&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function St(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function It(e,t){const n=(await t.json()).error;return jt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ct({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Pt(e,{refreshToken:t}){const n=Ct(e);return n.append("Authorization",function(e){return`${vt} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Dt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mt=/^[cdef][\w-]{21}$/;function At(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Mt.test(t)?t:""}catch(e){return""}}function Ot(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Map;function Nt(e,t){const n=Ot(e);Bt(n,t),function(e,t){const n=function(){!Kt&&"BroadcastChannel"in self&&(Kt=new BroadcastChannel("[Firebase] FID Change"),Kt.onmessage=e=>{Bt(e.data.key,e.data.fid)});return Kt}();n&&n.postMessage({key:e,fid:t});0===Et.size&&Kt&&(Kt.close(),Kt=null)}(n,t)}function Bt(e,t){const n=Et.get(e);if(n)for(const a of n)a(t)}let Kt=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ft="firebase-installations-store";let _t=null;function Wt(){return _t||(_t=ge("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Ft)}})),_t}async function Lt(e,t){const n=Ot(e),a=(await Wt()).transaction(Ft,"readwrite"),i=a.objectStore(Ft),r=await i.get(n);return await i.put(t,n),await a.done,r&&r.fid===t.fid||Nt(e,t.fid),t}async function Rt(e){const t=Ot(e),n=(await Wt()).transaction(Ft,"readwrite");await n.objectStore(Ft).delete(t),await n.done}async function zt(e,t){const n=Ot(e),a=(await Wt()).transaction(Ft,"readwrite"),i=a.objectStore(Ft),r=await i.get(n),s=t(r);return void 0===s?await i.delete(n):await i.put(s,n),await a.done,!s||r&&r.fid===s.fid||Nt(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e){let t;const n=await zt(e.appConfig,(n=>{const a=function(e){const t=e||{fid:At(),registrationStatus:0};return qt(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(jt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=kt(e),i=Ct(e),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:vt,appId:e.appId,sdkVersion:bt},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await Dt((()=>fetch(a,o)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:St(e.authToken)}}throw await It("Create Installation",c)}(e,t);return Lt(e.appConfig,n)}catch(n){throw wt(n)&&409===n.customData.serverCode?await Rt(e.appConfig):await Lt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ht(e)}:{installationEntry:t}}(e,a);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Ht(e){let t=await $t(e.appConfig);for(;1===t.registrationStatus;)await Tt(100),t=await $t(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Vt(e);return n||t}return t}function $t(e){return zt(e,(e=>{if(!e)throw jt.create("installation-not-found");return qt(e)}))}function qt(e){return 1===(t=e).registrationStatus&&t.registrationTime+gt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Ut({appConfig:e,heartbeatServiceProvider:t},n){const a=function(e,{fid:t}){return`${kt(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=Pt(e,n),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:bt,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await Dt((()=>fetch(a,o)));if(c.ok){return St(await c.json())}throw await It("Generate Auth Token",c)}async function Gt(e,t=!1){let n;const a=await zt(e.appConfig,(a=>{if(!Jt(a))throw jt.create("not-registered");const i=a.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yt}(e)}(i))return a;if(1===i.requestStatus)return n=async function(e,t){let n=await Yt(e.appConfig);for(;1===n.authToken.requestStatus;)await Tt(100),n=await Yt(e.appConfig);const a=n.authToken;return 0===a.requestStatus?Gt(e,t):a}(e,t),a;{if(!navigator.onLine)throw jt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(a);return n=async function(e,t){try{const n=await Ut(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await Lt(e.appConfig,a),n}catch(n){if(!wt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Lt(e.appConfig,n)}else await Rt(e.appConfig);throw n}}(e,t),t}}));return n?await n:a.authToken}function Yt(e){return zt(e,(e=>{if(!Jt(e))throw jt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+gt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Jt(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Vt(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await Gt(n,t)).token}function Xt(e){return jt.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="installations",en=e=>{const t=e.getProvider("app").getImmediate(),n=me(t,Zt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:a}=await Vt(t);return a?a.catch(console.error):Gt(t).catch(console.error),n.fid}(n),getToken:e=>Qt(n,e)}};pe(new he(Zt,(e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Xt("App Configuration");if(!e.name)throw Xt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:me(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),pe(new he("installations-internal",en,"PRIVATE")),ue(ft,xt),ue(ft,xt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",nn="google.c.a.c_id";var an,rn,sn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function cn(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),a=new Uint8Array(n.length);for(let i=0;i<n.length;++i)a[i]=n.charCodeAt(i);return a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(rn=an||(an={}))[rn.DATA_MESSAGE=1]="DATA_MESSAGE",rn[rn.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(sn||(sn={}));const ln="fcm_token_details_db",dn="fcm_token_object_Store";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="firebase-messaging-store";let pn=null;function hn(){return pn||(pn=ge("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(un)}})),pn}async function mn(e){const t=xn(e),n=await hn(),a=await n.transaction(un).objectStore(un).get(t);if(a)return a;{const t=await async function(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map((e=>e.name)).includes(ln))return null;let t=null;return(await ge(ln,5,{upgrade:async(n,a,i,r)=>{var s;if(a<2)return;if(!n.objectStoreNames.contains(dn))return;const o=r.objectStore(dn),c=await o.index("fcmSenderId").get(e);if(await o.clear(),c)if(2===a){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(s=e.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:on(e.vapidKey)}}}else if(3===a){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:on(e.auth),p256dh:on(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:on(e.vapidKey)}}}else if(4===a){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:on(e.auth),p256dh:on(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:on(e.vapidKey)}}}}})).close(),await ke(ln),await ke("fcm_vapid_details_db"),await ke("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await fn(e,t),t}}async function fn(e,t){const n=xn(e),a=(await hn()).transaction(un,"readwrite");return await a.objectStore(un).put(t,n),await a.done,t}function xn({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new fe("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});function bn({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function vn({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function yn({p256dh:e,auth:t,endpoint:n,vapidKey:a}){const i={web:{endpoint:n,auth:t,p256dh:e}};return a!==tn&&(i.web.applicationPubKey=a),i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:cn(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:on(t.getKey("auth")),p256dh:on(t.getKey("p256dh"))},a=await mn(e.firebaseDependencies);if(a){if(function(e,t){const n=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,i=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&a&&i&&r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(a.subscriptionOptions,n))return Date.now()>=a.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await vn(e),a=yn(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(a)};let r;try{const n=await fetch(`${bn(e.appConfig)}/${t.token}`,i);r=await n.json()}catch(s){throw gn.create("token-update-failed",{errorInfo:null==s?void 0:s.toString()})}if(r.error){const e=r.error.message;throw gn.create("token-update-failed",{errorInfo:e})}if(!r.token)throw gn.create("token-update-no-token");return r.token}(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await fn(e.firebaseDependencies,a),n}catch(n){throw n}}(e,{token:a.token,createTime:Date.now(),subscriptionOptions:n}):a.token;try{await async function(e,t){const n={method:"DELETE",headers:await vn(e)};try{const a=await fetch(`${bn(e.appConfig)}/${t}`,n),i=await a.json();if(i.error){const e=i.error.message;throw gn.create("token-unsubscribe-failed",{errorInfo:e})}}catch(a){throw gn.create("token-unsubscribe-failed",{errorInfo:null==a?void 0:a.toString()})}}(e.firebaseDependencies,a.token)}catch(i){}return wn(e.firebaseDependencies,n)}return wn(e.firebaseDependencies,n)}async function wn(e,t){const n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await vn(e),a=yn(t),i={method:"POST",headers:n,body:JSON.stringify(a)};let r;try{const t=await fetch(bn(e.appConfig),i);r=await t.json()}catch(s){throw gn.create("token-subscribe-failed",{errorInfo:null==s?void 0:s.toString()})}if(r.error){const e=r.error.message;throw gn.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw gn.create("token-subscribe-no-token");return r.token}(e,t),a={token:n,createTime:Date.now(),subscriptionOptions:t};return await fn(e,a),a.token}function kn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const a=t.notification.body;a&&(e.notification.body=a);const i=t.notification.image;i&&(e.notification.image=i);const r=t.notification.icon;r&&(e.notification.icon=r)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,a,i,r,s;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const o=null!==(i=null===(a=t.fcmOptions)||void 0===a?void 0:a.link)&&void 0!==i?i:null===(r=t.notification)||void 0===r?void 0:r.click_action;o&&(e.fcmOptions.link=o);const c=null===(s=t.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),t}function Sn(e){return gn.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw Sn("App Configuration Object");if(!e.name)throw Sn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const a of t)if(!n[a])throw Sn(a);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:a,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Cn(e,t){if(t||e.swRegistration||await async function(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch((()=>{}))}catch(t){throw gn.create("failed-service-worker-registration",{browserErrorMessage:null==t?void 0:t.message})}}(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw gn.create("invalid-sw-registration");e.swRegistration=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pn(e,t){if(!navigator)throw gn.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw gn.create("permission-blocked");return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=tn)}(e,null==t?void 0:t.vapidKey),await Cn(e,null==t?void 0:t.serviceWorkerRegistration),jn(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(e,t,n){const a=function(e){switch(e){case sn.NOTIFICATION_CLICKED:return"notification_open";case sn.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:n[nn],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function Tn(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===sn.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(kn(n)):e.onMessageHandler.next(kn(n)));const a=n.data;var i;"object"==typeof(i=a)&&i&&nn in i&&"1"===a["google.c.a.e"]&&await Dn(e,n.messageType,a)}const Mn="@firebase/messaging",An="0.12.12",On=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>Pn(t,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e=ve()){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(){try{await ye()}catch(e){return!1}return"undefined"!=typeof window&&je()&&we()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */().then((e=>{if(!e)throw gn.create("unsupported-browser")}),(e=>{throw gn.create("indexed-db-unsupported")})),me(be(e),"messaging").getImmediate()}function Nn(e,t){return function(e,t){if(!navigator)throw gn.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=be(e),t)}pe(new he("messaging",(e=>{const t=new In(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>Tn(t,e))),t}),"PUBLIC")),pe(new he("messaging-internal",On,"PRIVATE")),ue(Mn,An),ue(Mn,An,"esm2017");var Bn={},Kn=s;Object.defineProperty(Bn,"__esModule",{value:!0});var Fn=Bn.default=void 0,_n=Kn(Ke()),Wn=t;Fn=Bn.default=(0,_n.default)((0,Wn.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"}),"Refresh");var Ln={},Rn=s;Object.defineProperty(Ln,"__esModule",{value:!0});var zn=Ln.default=void 0,Vn=Rn(Ke()),Hn=t;zn=Ln.default=(0,Vn.default)((0,Hn.jsx)("path",{d:"M18 1.01 8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z"}),"AddToHomeScreen");var $n={},qn=s;Object.defineProperty($n,"__esModule",{value:!0});var Un=$n.default=void 0,Gn=qn(Ke()),Yn=t;Un=$n.default=(0,Gn.default)((0,Yn.jsx)("path",{d:"M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34"}),"Campaign");var Jn={},Qn=s;Object.defineProperty(Jn,"__esModule",{value:!0});var Xn=Jn.default=void 0,Zn=Qn(Ke()),ea=t;Xn=Jn.default=(0,Zn.default)((0,ea.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle");const ta=h(n)((({theme:e})=>({minHeight:"100vh",width:"100%",maxWidth:"100%",margin:0,padding:0,backgroundColor:"#f5f6fa",overflowX:"hidden",position:"relative"}))),na=h(n)((({theme:e})=>({position:"relative",padding:"48px 16px 24px 16px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:"0 0 24px 24px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.05)",marginBottom:24,width:"100%",paddingTop:"calc(env(safe-area-inset-top) + 48px)","&::after":{content:'""',position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:"40%",height:"4px",background:"linear-gradient(90deg, #5A78FF 0%, #83A4FF 100%)",borderRadius:"2px",opacity:.7}}))),aa=h(n)((({theme:e})=>({padding:"0 16px",width:"100%",maxWidth:"100%",margin:"0 auto"}))),ia=h(u)((({theme:e})=>({padding:"20px",borderRadius:"12px",backgroundColor:"#f8f9fa",marginTop:"16px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",transition:"transform 0.2s ease-in-out","&:active":{transform:"scale(0.98)"}}))),ra=h(m)((({theme:e})=>({marginBottom:e.spacing(2),padding:e.spacing(2),backgroundColor:"#fff",borderRadius:e.spacing(2),boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"transform 0.2s ease-in-out","&:hover":{transform:"translateY(-2px)"}}))),sa=h(u)((({theme:e})=>({padding:"12px",marginBottom:"8px",borderRadius:"8px",backgroundColor:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}))),oa=h(f)((({theme:e})=>({position:"absolute",right:"16px",top:"16px",backgroundColor:"rgba(255,255,255,0.9)","&:hover":{backgroundColor:"rgba(255,255,255,1)"}}))),ca=h(u)((({theme:e})=>({position:"fixed",bottom:0,left:0,right:0,padding:"16px",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#1976d2",color:"white",zIndex:1e3,borderRadius:"16px 16px 0 0"}))),la=()=>{var e;const[i,r]=a.useState(null),[s,o]=a.useState(localStorage.getItem("selectedRoom")),[d,u]=a.useState(!0),[h,m]=a.useState(null),[w,k]=a.useState(!1),[S,I]=a.useState({open:!1,message:"",severity:"info"}),[C,P]=a.useState(!1),[D,T]=a.useState(null),[M,A]=a.useState(!1),[O,E]=a.useState([]),[N,B]=a.useState(0),[K,F]=a.useState(!1);a.useState(Notification.permission);const _=Array.from({length:28},((e,t)=>String(601+t))),W=e=>{const t=e.target.value;o(t),localStorage.setItem("selectedRoom",t)},L=e=>{if(!e)return"";return(e instanceof Date?e:e.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})};a.useEffect((()=>{let e=null;return(async()=>{if(s)try{u(!0),await rt();const t=ae(Me,"rooms",s);e=te(t,(async e=>{if(e.exists()){const n={id:e.id,...e.data()},a=ee(Me,"purchases"),i=Z(a,Se("roomId","==",s));try{const e=await ne(i),t=[];e.forEach((e=>{const n=e.data();t.push({id:e.id,...n,timestamp:n.timestamp})}));const a=t.sort(((e,t)=>{var n,a;return(null==(n=t.timestamp)?void 0:n.seconds)-(null==(a=e.timestamp)?void 0:a.seconds)})).slice(0,3),s={...n,recentPurchases:a};r(s)}catch(t){}}}),(e=>{m(e)}))}catch(t){m(t)}finally{u(!1)}})(),()=>{e&&e()}}),[s]);const R=async()=>{k(!0);try{const e=ee(Me,"purchases"),t=Z(e,Se("roomId","==",s)),n=await ne(t),a=[];n.forEach((e=>{const t=e.data();a.push({id:e.id,...t,timestamp:t.timestamp})}));const i=a.sort(((e,t)=>{var n,a;return(null==(n=t.timestamp)?void 0:n.seconds)-(null==(a=e.timestamp)?void 0:a.seconds)})).slice(0,3);r((e=>({...e,recentPurchases:i}))),I({open:!0,message:"Data refreshed successfully",severity:"success"})}catch(e){I({open:!0,message:"Error refreshing data",severity:"error"})}finally{k(!1)}},z=()=>{window.location.href="https://qr.mobilepay.dk/p/02OeCN5J8MKzg-nbza0GUmlJ-24UKFkusa_TwL1txQBhbP2FDD2yRBUHtOX8WyxkZ-Qjxba4kzlIgqkDrA=="};a.useEffect((()=>{const e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;A(e)}),[]),a.useEffect((()=>{if(window.matchMedia("(display-mode: standalone)").matches)P(!1);else{if(!M){const e=e=>{e.preventDefault(),T(e),P(!0)};return window.addEventListener("beforeinstallprompt",e),()=>window.removeEventListener("beforeinstallprompt",e)}setTimeout((()=>{localStorage.getItem("iosInstallPrompted")||P(!0)}),2e3)}}),[M]);const V=async e=>{if(!e)return;const t=ee(Me,"notifications"),n=Z(t,Se("roomId","==",e),le("timestamp","desc"),de(10)),a=te(n,(e=>{const t=e.docs.map((e=>({id:e.id,...e.data()})));E(t);const n=t.filter((e=>!e.read)).length;B(n),"setAppBadge"in navigator&&(n>0?navigator.setAppBadge(n).catch((()=>{})):navigator.clearAppBadge().catch((()=>{})))}));if(!M)try{const t=En(),n=await async function(e,t){return Pn(e=be(e),t)}(t,{vapidKey:"BK5JiQu6vhdhV8bzrHp6W5Kn2h-fkrYvudQKLeOHWWhui4WzYFG-Oq-UJmc4gDNuosGR3b9ntehs88GavTx9Udc"});if(n){const a=ae(ee(Me,"fcmTokens"));await setDoc(a,{token:n,roomId:e,timestamp:new Date}),Nn(t,(e=>{new Notification(e.notification.title,{body:e.notification.body,icon:"/icon-192x192.png"})}))}}catch(i){}return a};return a.useEffect((()=>{if(null==i?void 0:i.id){const e=V(i.id);return()=>{e&&e()}}}),[null==i?void 0:i.id]),s?!i||d?t.jsx(ta,{children:t.jsx(na,{children:t.jsxs(n,{sx:{width:"100%",p:2},children:[t.jsxs(n,{sx:{mb:3,textAlign:"center"},children:[t.jsx(c,{variant:"h4",sx:{mb:1,color:"#333"},children:"Køb i alt"}),t.jsx(c,{variant:"h4",sx:{mb:2,color:"#2ecc71"},children:"0 kr"})]}),t.jsx(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:t.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[t.jsx(Un,{sx:{color:"#5A78FF",mr:1}}),t.jsx(c,{variant:"h6",children:"Beskeder"})]})}),t.jsxs(n,{sx:{mt:2,mb:2},children:[t.jsx(c,{variant:"subtitle1",sx:{mb:1,color:"#666",fontWeight:500},children:"Seneste køb"}),t.jsx(c,{variant:"caption",color:"text.secondary",sx:{display:"block",textAlign:"center"},children:"Ingen køb endnu"})]})]})})}):h?t.jsx(ta,{children:t.jsxs(n,{sx:{textAlign:"center",mt:4},children:[t.jsx(c,{color:"error",children:"Error loading data. Please try again."}),t.jsx(l,{onClick:()=>window.location.reload(),sx:{mt:2},children:"Reload"})]})}):t.jsxs(ta,{onTouchStart:async e=>{const t=e.touches[0].clientY,n=e=>{e.touches[0].clientY-t>100&&0===window.scrollY&&(R(),document.removeEventListener("touchmove",n))};document.addEventListener("touchmove",n),document.addEventListener("touchend",(()=>{document.removeEventListener("touchmove",n)}),{once:!0})},children:[t.jsxs(na,{children:[t.jsxs(n,{sx:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",zIndex:1,width:"100%",mt:"env(safe-area-inset-top)"},children:[t.jsx(c,{variant:"subtitle1",sx:{color:"#5A78FF",fontWeight:500,letterSpacing:"0.2px",mb:.5,background:"linear-gradient(90deg, #5A78FF 0%, #83A4FF 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:i.occupantName||"Ingen beboer"}),t.jsx(c,{variant:"h4",sx:{fontWeight:800,color:"#2c3e50",letterSpacing:"-0.5px"},children:s})]}),t.jsx(oa,{onClick:R,disabled:w,sx:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",color:"#5A78FF","&:hover":{backgroundColor:"rgba(90, 120, 255, 0.08)"}},children:t.jsx(Fn,{sx:{animation:w?"spin 1s linear infinite":"none",transition:"transform 0.2s ease"}})})]}),t.jsxs(aa,{children:[t.jsxs(ia,{elevation:3,onClick:z,children:[t.jsx(c,{variant:"h6",sx:{mb:1,color:"#333"},children:"Køb i alt"}),t.jsxs(c,{variant:"h4",sx:{mb:2,color:i.balance>0?"#e74c3c":"#2ecc71"},children:[null==(e=i.balance)?void 0:e.toFixed(2)," kr"]}),t.jsx(l,{variant:"contained",fullWidth:!0,onClick:z,sx:{backgroundColor:"#5A78FF","&:hover":{backgroundColor:"#4A61D1"},py:1.5,borderRadius:2,textTransform:"none",fontSize:"1.1rem"},children:"Betal med MobilePay"})]}),t.jsxs(ra,{elevation:0,children:[t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[t.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[t.jsx(Un,{sx:{color:"#5A78FF",mr:1}}),t.jsxs(c,{variant:"h6",children:["Beskeder ",N>0&&`(${N})`]})]}),N>0&&t.jsx(l,{size:"small",startIcon:t.jsx(Xn,{}),onClick:async()=>{if(!O.length)return;const e=Ie(Me);O.filter((e=>!e.read)).forEach((t=>{const n=ae(Me,"notifications",t.id);e.update(n,{read:!0})}));try{await e.commit(),"clearAppBadge"in navigator&&navigator.clearAppBadge().catch((()=>{}))}catch(t){}},children:"Marker som læst"})]}),O.length>0?t.jsx(x,{sx:{p:0},children:O.map(((e,a)=>t.jsxs(g.Fragment,{children:[a>0&&t.jsx(b,{sx:{my:1}}),t.jsx(v,{sx:{px:0,py:1},children:t.jsx(y,{primary:t.jsx(c,{variant:"body1",sx:{fontWeight:e.read?400:500,color:e.read?"text.secondary":"text.primary"},children:e.message}),secondary:t.jsxs(n,{sx:{mt:.5,display:"flex",alignItems:"center",gap:1},children:[t.jsx(c,{variant:"caption",color:"text.secondary",children:new Date(e.timestamp.toDate()).toLocaleString("da-DK")}),"payment"===e.type&&t.jsx(j,{size:"small",label:"Betaling",color:"primary",variant:"outlined",sx:{height:20}})]})})})]},e.id)))}):t.jsx(c,{variant:"body2",color:"text.secondary",children:"Ingen beskeder at vise"})]}),t.jsxs(n,{sx:{mt:2,mb:2},children:[t.jsx(c,{variant:"subtitle1",sx:{mb:1,color:"#666",fontWeight:500},children:"Seneste køb"}),i.recentPurchases.map((e=>t.jsxs(sa,{sx:{py:1,px:2,mb:.5,backgroundColor:"#f8f9ff",borderRadius:1},children:[t.jsxs(n,{sx:{display:"flex",alignItems:"baseline",gap:1},children:[t.jsx(c,{variant:"body2",sx:{fontWeight:500},children:e.productName}),t.jsx(c,{variant:"caption",color:"text.secondary",children:L(e.timestamp)})]}),t.jsxs(c,{variant:"body2",color:"primary",sx:{fontWeight:500},children:[e.amount.toFixed(2)," kr"]})]},e.id))),0===i.recentPurchases.length&&t.jsx(c,{variant:"caption",color:"text.secondary",sx:{display:"block",textAlign:"center"},children:"Ingen køb endnu"})]})]}),C&&t.jsxs(ca,{elevation:3,children:[t.jsxs(n,{sx:{display:"flex",alignItems:"flex-start",gap:2,flex:1},children:[t.jsx(zn,{sx:{mt:.5}}),M?t.jsxs(n,{children:[t.jsx(c,{variant:"subtitle1",sx:{fontWeight:"bold",mb:1},children:"Føj til hjemmeskærm"}),t.jsxs(c,{variant:"body2",sx:{display:"flex",alignItems:"center",mb:.5},children:["1. Tryk på 'Del' ikonet ",t.jsx("span",{style:{fontSize:"1.4em",marginLeft:"8px",color:"#4CAF50"},children:"⎙"})]}),t.jsxs(c,{variant:"body2",sx:{display:"flex",alignItems:"center"},children:["2. Scroll ned og vælg ",t.jsx("span",{style:{fontWeight:"bold",marginLeft:"4px",color:"#4CAF50"},children:"'Føj til hjemmeskærm'"})]})]}):t.jsx(c,{children:"Føj til hjemmeskærm for hurtig adgang"})]}),t.jsxs(n,{children:[t.jsx(f,{color:"inherit",onClick:()=>{M&&localStorage.setItem("iosInstallPrompted","true"),P(!1)},sx:{mr:1},children:"✕"}),!M&&t.jsx(l,{variant:"contained",color:"inherit",onClick:async()=>{M?(localStorage.setItem("iosInstallPrompted","true"),P(!1)):D&&(D.prompt(),await D.userChoice,T(null),P(!1))},sx:{color:"#1976d2",backgroundColor:"white","&:hover":{backgroundColor:"#f5f5f5"}},children:"Installer"})]})]}),t.jsxs(Dialog,{open:K,onClose:()=>F(!1),children:[t.jsx(DialogTitle,{children:"Tillad Beskeder"}),t.jsx(DialogContent,{children:t.jsx(DialogContentText,{children:"Vil du modtage beskeder om nye meddelelser og betalingspåmindelser? Du kan altid ændre dette senere i din browsers indstillinger."})}),t.jsxs(DialogActions,{children:[t.jsx(l,{onClick:()=>F(!1),children:"Ikke nu"}),t.jsx(l,{onClick:()=>F(!1),variant:"contained",children:"Tillad Beskeder"})]})]})]}):t.jsx(ta,{children:t.jsxs(n,{sx:{textAlign:"center",mt:4},children:[t.jsx(c,{variant:"h4",gutterBottom:!0,children:"Velkommen"}),t.jsx(c,{variant:"h6",gutterBottom:!0,sx:{mb:2,color:"#666666"},children:"til din personlige oversigt"}),t.jsx(c,{sx:{mb:4,color:"#666666"},children:"Vælg dit værelse for at komme i gang. Dette er en engangskonfiguration."}),t.jsxs(p,{select:!0,fullWidth:!0,label:"Vælg dit værelse",onChange:W,SelectProps:{native:!0},sx:{backgroundColor:"#f0f0f0",borderRadius:"8px","& .MuiInputBase-input":{color:"#333333",fontSize:"1.1rem",padding:"16px"},"& .MuiInputLabel-root":{color:"#666666",fontSize:"1.1rem"}},children:[t.jsx("option",{value:"",children:"Vælg værelse"}),_.map((e=>t.jsx("option",{value:e,children:e},e)))]}),t.jsx(c,{variant:"caption",sx:{display:"block",mt:2,color:"#666666"},children:"Bemærk: Dette valg gemmes til fremtidige besøg"})]})})},da=()=>{const[e,i]=a.useState([]),[r,s]=a.useState(!0),[o,d]=a.useState(""),[h,m]=a.useState(""),[f,x]=a.useState({});a.useEffect((()=>{g()}),[]);const g=async()=>{try{const e=ee(Me,"products"),t=(await ne(e)).docs.map((e=>({id:e.id,...e.data()})));i(t),x(t.reduce(((e,t)=>({...e,[t.id]:{name:t.name,price:t.price}})),{}))}catch(e){d("Fejl ved indlæsning af produkter")}finally{s(!1)}},b=(e,t,n)=>{x((a=>({...a,[e]:{...a[e],[t]:"price"===t?Number(n):n}})))};return r?t.jsx(n,{sx:{display:"flex",justifyContent:"center",p:3},children:t.jsx(w,{})}):t.jsxs(u,{sx:{p:3},children:[t.jsx(c,{variant:"h6",gutterBottom:!0,children:"Produkt Administration"}),o&&t.jsx(k,{severity:"error",sx:{mb:2},children:o}),h&&t.jsx(k,{severity:"success",sx:{mb:2},children:h}),t.jsx(S,{children:t.jsxs(I,{children:[t.jsx(C,{children:t.jsxs(P,{children:[t.jsx(D,{children:"Produkt"}),t.jsx(D,{children:"Pris (DKK)"})]})}),t.jsx(T,{children:e.map((e=>{var n,a;return t.jsxs(P,{children:[t.jsx(D,{children:t.jsx(p,{fullWidth:!0,value:(null==(n=f[e.id])?void 0:n.name)||"",onChange:t=>b(e.id,"name",t.target.value)})}),t.jsx(D,{children:t.jsx(p,{type:"number",value:(null==(a=f[e.id])?void 0:a.price)||0,onChange:t=>b(e.id,"price",t.target.value),InputProps:{inputProps:{min:0,step:1}}})})]},e.id)}))})]})}),t.jsx(n,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:t.jsx(l,{variant:"contained",color:"primary",onClick:async()=>{s(!0),d("");try{await Promise.all(e.map((async e=>{const t=f[e.id];!t||t.name===e.name&&t.price===e.price||await re(ae(Me,"products",e.id),{name:t.name,price:t.price})}))),m("Produkter opdateret"),g()}catch(t){d("Fejl ved opdatering af produkter")}finally{s(!1)}},disabled:r,children:"Gem Ændringer"})})]})},ua=()=>{const[e,i]=a.useState(""),[r,s]=a.useState(!1),[o,d]=a.useState(!1),[h,m]=a.useState(""),[f,x]=a.useState("");return t.jsxs(u,{sx:{p:3},children:[t.jsx(c,{variant:"h6",gutterBottom:!0,children:"Send Beskeder"}),h&&t.jsx(k,{severity:"error",sx:{mb:2},children:h}),f&&t.jsx(k,{severity:"success",sx:{mb:2},children:f}),t.jsx(n,{sx:{mb:3},children:t.jsx(M,{control:t.jsx(A,{checked:r,onChange:e=>s(e.target.checked),name:"endOfMonth"}),label:"Månedlig betalingspåmindelse"})}),t.jsx(p,{fullWidth:!0,multiline:!0,rows:4,label:"Besked",value:e,onChange:e=>i(e.target.value),disabled:r,sx:{mb:3}}),t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx(c,{variant:"body2",color:"text.secondary",children:r?"Der vil blive sendt en påmindelse til alle beboere med deres aktuelle saldo.":"Skriv en besked der skal sendes til alle beboere."}),t.jsx(l,{variant:"contained",color:"primary",onClick:async()=>{if(e.trim()||r){d(!0),m(""),x("");try{const t=(await ne(ee(Me,"rooms"))).docs.map((e=>({id:e.id,...e.data()}))),n=ee(Me,"fcmTokens"),a=(await ne(n)).docs.reduce(((e,t)=>{const n=t.data();return n.roomId&&n.token&&(e[n.roomId]||(e[n.roomId]=[]),e[n.roomId].push(n.token)),e}),{});await Promise.all(t.map((async t=>{const n={roomId:t.id,message:r?`Hej ${t.occupantName||"beboer"}! Din saldo er ${t.balance} kr. Venligst betal inden månedens udgang.`:e,timestamp:new Date,read:!1,type:r?"payment":"announcement"};if(await oe(ee(Me,"notifications"),n),a[t.id]&&a[t.id].length>0)try{if(!(await fetch("https://us-central1-dorm-sales-app.cloudfunctions.net/sendPushNotification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tokens:a[t.id],title:r?"Betalingspåmindelse":"Ny Besked",body:n.message,data:{type:n.type,roomId:t.id}})})).ok)throw new Error("Failed to send push notification")}catch(i){}}))),x("Beskeder sendt til alle beboere"),i("")}catch(t){m("Fejl ved afsendelse af beskeder: "+t.message)}finally{d(!1)}}else m("Beskeden kan ikke være tom")},disabled:o||!e.trim()&&!r,children:o?t.jsx(w,{size:24}):"Send Besked"})]}),t.jsx(b,{sx:{my:3}}),t.jsx(c,{variant:"body2",color:"text.secondary",children:"Push beskeder vil blive sendt til alle beboere der har installeret app'en og accepteret notifikationer. Andre beboere kan se beskederne når de åbner app'en."})]})};var pa={},ha=s;Object.defineProperty(pa,"__esModule",{value:!0});var ma=pa.default=void 0,fa=ha(Ke()),xa=t;ma=pa.default=(0,fa.default)((0,xa.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");var ga={},ba=s;Object.defineProperty(ga,"__esModule",{value:!0});var va=ga.default=void 0,ya=ba(Ke()),ja=t;va=ga.default=(0,ya.default)((0,ja.jsx)("path",{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"}),"RestartAlt");const wa=()=>{const[e,i]=a.useState(!1),[r,s]=a.useState(""),[o,d]=a.useState(""),[p,h]=a.useState(null),[m,f]=a.useState(!1),[x,g]=a.useState(!1),b=async()=>{i(!0),s(""),d("");try{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1),n=new Date(e.getFullYear(),e.getMonth()+1,0,23,59,59),a=ee(Me,"purchases"),i=Z(a,Se("timestamp",">=",Ce.fromDate(t)),Se("timestamp","<=",Ce.fromDate(n))),r=(await ne(i)).docs.map((e=>({id:e.id,...e.data()}))),s={totalSales:0,productSales:{},roomSales:{}};r.forEach((e=>{s.totalSales+=e.amount,s.productSales[e.productName]||(s.productSales[e.productName]={quantity:0,total:0}),s.productSales[e.productName].quantity+=1,s.productSales[e.productName].total+=e.amount,s.roomSales[e.roomId]||(s.roomSales[e.roomId]={quantity:0,total:0}),s.roomSales[e.roomId].quantity+=1,s.roomSales[e.roomId].total+=e.amount})),h(s),d("Rapport genereret")}catch(e){s("Fejl ved generering af rapport")}finally{i(!1)}},v=async()=>{g(!0),s(""),d("");try{const e=Ie(Me),t=ee(Me,"rooms"),n=await ne(t);n.docs.forEach((t=>{const n=ae(Me,"rooms",t.id);e.update(n,{balance:0,lastReset:Ce.now()})}));const a=ae(ee(Me,"resets"));e.set(a,{timestamp:Ce.now(),type:"monthly",roomCount:n.size}),await e.commit(),d("Alle saldi er nulstillet"),f(!1),p&&b()}catch(e){s("Fejl ved nulstilling af saldi: "+e.message)}finally{g(!1)}},y=()=>t.jsxs(O,{open:m,onClose:()=>!x&&f(!1),children:[t.jsx(E,{children:"Bekræft Nulstilling"}),t.jsx(N,{children:t.jsx(B,{children:"Er du sikker på at du vil nulstille alle saldi? Denne handling kan ikke fortrydes. Det anbefales at generere en rapport først."})}),t.jsxs(K,{children:[t.jsx(l,{onClick:()=>f(!1),disabled:x,children:"Annuller"}),t.jsx(l,{onClick:v,color:"error",disabled:x,startIcon:x?t.jsx(w,{size:20}):t.jsx(va,{}),children:x?"Nulstiller...":"Nulstil Alle Saldi"})]})]});return t.jsxs(u,{sx:{p:3},children:[t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3},children:[t.jsx(c,{variant:"h6",children:"Månedlig Rapport"}),t.jsxs(n,{children:[t.jsx(l,{variant:"outlined",color:"error",startIcon:t.jsx(va,{}),onClick:()=>f(!0),disabled:e||x,sx:{mr:2},children:"Nulstil Saldi"}),t.jsx(l,{variant:"contained",onClick:b,disabled:e||x,children:"Generer Rapport"})]})]}),r&&t.jsx(k,{severity:"error",sx:{mb:2},children:r}),o&&t.jsx(k,{severity:"success",sx:{mb:2},children:o}),e&&t.jsx(n,{sx:{display:"flex",justifyContent:"center",p:3},children:t.jsx(w,{})}),p&&t.jsxs(n,{children:[t.jsx(S,{sx:{mb:3},children:t.jsxs(I,{children:[t.jsx(C,{children:t.jsxs(P,{children:[t.jsx(D,{children:"Produkt"}),t.jsx(D,{align:"right",children:"Antal"}),t.jsx(D,{align:"right",children:"Total (DKK)"})]})}),t.jsxs(T,{children:[Object.entries(p.productSales).map((([e,n])=>t.jsxs(P,{children:[t.jsx(D,{children:e}),t.jsx(D,{align:"right",children:n.quantity}),t.jsx(D,{align:"right",children:n.total})]},e))),t.jsxs(P,{children:[t.jsx(D,{sx:{fontWeight:"bold"},children:"Total"}),t.jsx(D,{align:"right",sx:{fontWeight:"bold"},children:Object.values(p.productSales).reduce(((e,t)=>e+t.quantity),0)}),t.jsx(D,{align:"right",sx:{fontWeight:"bold"},children:p.totalSales})]})]})]})}),t.jsx(l,{variant:"contained",color:"primary",startIcon:t.jsx(ma,{}),onClick:()=>{if(!p)return;const e=[];e.push("Rapport for "+(new Date).toLocaleDateString("da-DK",{month:"long",year:"numeric"})),e.push(""),e.push("Produkt Salg"),e.push("Produkt,Antal,Total (DKK)"),Object.entries(p.productSales).forEach((([t,n])=>{e.push(`${t},${n.quantity},${n.total}`)})),e.push(""),e.push("Værelse Salg"),e.push("Værelse,Antal Køb,Total (DKK)"),Object.entries(p.roomSales).forEach((([t,n])=>{e.push(`${t},${n.quantity},${n.total}`)})),e.push(""),e.push(`Total Salg,${p.totalSales} DKK`);const t=e.join("\n"),n=new Blob([t],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download=`salgsrapport_${(new Date).toISOString().slice(0,7)}.csv`,a.click()},fullWidth:!0,children:"Download CSV"})]}),t.jsx(y,{})]})};var ka={},Sa=s;Object.defineProperty(ka,"__esModule",{value:!0});var Ia=ka.default=void 0,Ca=Sa(Ke()),Pa=t;Ia=ka.default=(0,Ca.default)((0,Pa.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2z"}),"ShoppingBag");var Da={},Ta=s;Object.defineProperty(Da,"__esModule",{value:!0});var Ma=Da.default=void 0,Aa=Ta(Ke()),Oa=t;Ma=Da.default=(0,Aa.default)((0,Oa.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.88 15.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22"}),"Paid");const Ea=()=>{const[e,i]=a.useState([]),[r,s]=a.useState(!0),[o,l]=a.useState(""),[p,h]=a.useState(!1),[j,S]=a.useState({total:0,count:0}),I=async()=>{try{const e=new Date;e.setHours(0,0,0,0);const t=ee(Me,"purchases"),n=Z(t,Se("timestamp",">=",Ce.fromDate(e))),a=await ne(n);let i=0,r=0;a.forEach((e=>{const t=e.data();i+=t.amount,r++})),S({total:i,count:r})}catch(e){}},C=a.useCallback((async(e=!1)=>{try{e||s(!0),l(""),await Promise.all([(async()=>{const e=ee(Me,"purchases"),t=Z(e,le("timestamp","desc"),de(5)),n=await ne(t),a=await Promise.all(n.docs.map((async e=>{var t;const n=e.data(),a=ae(Me,"rooms",n.roomId),i=(await ie(a)).data()||{};return{id:e.id,...n,occupantName:i.occupantName||"Ukendt beboer",timestamp:(null==(t=n.timestamp)?void 0:t.toDate())||new Date}})));i(a)})(),I()]),l("")}catch(t){l("Kunne ikke indlæse seneste køb")}finally{s(!1),h(!1)}}),[]);a.useEffect((()=>{C()}),[C]);return r?t.jsx(n,{sx:{display:"flex",justifyContent:"center",p:3},children:t.jsx(w,{})}):o?t.jsx(u,{sx:{p:3},children:t.jsx(k,{severity:"error",children:o})}):t.jsxs(u,{sx:{p:3},children:[t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3},children:[t.jsx(c,{variant:"h6",children:"Seneste Aktivitet"}),t.jsx(F,{title:"Opdater liste",children:t.jsx(f,{onClick:async()=>{h(!0),await C(!0)},disabled:p,sx:{animation:p?"spin 1s linear infinite":"none","@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}},children:t.jsx(Fn,{})})})]}),t.jsx(m,{sx:{mb:3,bgcolor:"#f8fafc"},children:t.jsx(_,{children:t.jsxs(d,{container:!0,spacing:2,alignItems:"center",children:[t.jsx(d,{item:!0,children:t.jsx(W,{sx:{bgcolor:"#4CAF50",width:56,height:56},children:t.jsx(Ma,{sx:{fontSize:32}})})}),t.jsxs(d,{item:!0,xs:!0,children:[t.jsx(c,{variant:"h6",gutterBottom:!0,children:"Dagens Salg"}),t.jsx(c,{variant:"body2",color:"text.secondary",children:(new Date).toLocaleDateString("da-DK",{weekday:"long",day:"numeric",month:"long"})})]}),t.jsxs(d,{item:!0,children:[t.jsxs(c,{variant:"h4",component:"div",sx:{color:"#2E7D32"},children:[j.total," kr"]}),t.jsxs(c,{variant:"body2",color:"text.secondary",align:"right",children:[j.count," køb i dag"]})]})]})})}),t.jsx(c,{variant:"subtitle1",gutterBottom:!0,sx:{mb:2},children:"Seneste 5 Køb"}),0===e.length?t.jsx(c,{color:"text.secondary",sx:{p:2,textAlign:"center"},children:"Ingen køb at vise"}):t.jsx(x,{children:e.map(((e,n)=>t.jsxs(g.Fragment,{children:[n>0&&t.jsx(b,{variant:"inset",component:"li"}),t.jsxs(v,{alignItems:"flex-start",children:[t.jsx(L,{children:t.jsx(W,{sx:{bgcolor:"#5A78FF"},children:t.jsx(Ia,{})})}),t.jsx(y,{primary:t.jsxs(c,{component:"span",variant:"subtitle1",color:"text.primary",children:["Værelse ",e.roomId," - ",e.occupantName]}),secondary:t.jsxs(g.Fragment,{children:[t.jsxs(c,{component:"span",variant:"body2",color:"text.primary",children:[e.productName," - ",e.amount," kr"]})," — ",new Date(e.timestamp).toLocaleString("da-DK",{weekday:"long",hour:"2-digit",minute:"2-digit",day:"numeric",month:"long"})]})})]})]},e.id)))})]})},Na=()=>{const[e,i]=a.useState(""),[r,s]=a.useState(!0),[o,d]=a.useState(!1),[h,m]=a.useState(""),[f,x]=a.useState("");a.useEffect((()=>{(async()=>{try{const e=ae(Me,"settings","admin"),t=await ie(e);t.exists()&&i(t.data().mobilepayLink||"")}catch(e){m("Kunne ikke indlæse indstillinger")}finally{s(!1)}})()}),[]);return r?t.jsx(n,{sx:{display:"flex",justifyContent:"center",p:3},children:t.jsx(w,{})}):t.jsxs(u,{sx:{p:3},children:[t.jsx(c,{variant:"h6",gutterBottom:!0,children:"Admin Indstillinger"}),h&&t.jsx(k,{severity:"error",sx:{mb:2},children:h}),f&&t.jsx(k,{severity:"success",sx:{mb:2},children:f}),t.jsxs(n,{sx:{mt:3},children:[t.jsx(c,{variant:"subtitle1",gutterBottom:!0,children:"MobilePay Link"}),t.jsx(c,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"Dette link bruges når beboere skal betale via MobilePay. Formatet skal være et gyldigt MobilePay-link."}),t.jsx(p,{fullWidth:!0,label:"MobilePay Link",value:e,onChange:e=>i(e.target.value),placeholder:"f.eks. https://mobilepay.dk/box/...",sx:{mb:3}}),t.jsx(n,{sx:{display:"flex",justifyContent:"flex-end"},children:t.jsx(l,{variant:"contained",color:"primary",onClick:async()=>{if(e.trim()){d(!0),m(""),x("");try{const t=ae(Me,"settings","admin");await re(t,{mobilepayLink:e.trim(),lastUpdated:new Date}),x("Indstillinger gemt")}catch(t){m("Kunne ikke gemme indstillinger")}finally{d(!1)}}else m("MobilePay link kan ikke være tomt")},disabled:o,children:o?t.jsx(w,{size:24}):"Gem Ændringer"})})]})]})},Ba=()=>{const[e,i]=a.useState(!1),[r,s]=a.useState(""),[o,d]=a.useState(""),[h,m]=a.useState(0),f=H(),x=()=>{"admin123"===r?(i(!0),d("")):d("Forkert adgangskode")};return e?t.jsxs(n,{sx:{minHeight:"100vh",bgcolor:"#f5f6fa",p:3},children:[t.jsxs(u,{sx:{mb:3,p:2},children:[t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[t.jsx(c,{variant:"h5",component:"h1",children:"Admin Panel"}),t.jsx(l,{variant:"outlined",color:"primary",onClick:()=>{i(!1),s(""),f("/")},children:"Log ud"})]}),t.jsxs(R,{value:h,onChange:(e,t)=>{m(t)},sx:{borderBottom:1,borderColor:"divider","& .MuiTabs-flexContainer":{flexWrap:"wrap"}},children:[t.jsx(z,{label:"Produkter"}),t.jsx(z,{label:"Beskeder"}),t.jsx(z,{label:"Rapporter"}),t.jsx(z,{label:"Seneste Køb"}),t.jsx(z,{label:"Indstillinger"})]})]}),t.jsxs(n,{sx:{mt:3},children:[0===h&&t.jsx(da,{}),1===h&&t.jsx(ua,{}),2===h&&t.jsx(wa,{}),3===h&&t.jsx(Ea,{}),4===h&&t.jsx(Na,{})]})]}):t.jsx(n,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",bgcolor:"#f5f6fa",p:2},children:t.jsxs(u,{elevation:3,sx:{p:4,width:"100%",maxWidth:400,display:"flex",flexDirection:"column",gap:2},children:[t.jsx(c,{variant:"h5",component:"h1",gutterBottom:!0,align:"center",children:"Admin Login"}),o&&t.jsx(k,{severity:"error",children:o}),t.jsx(p,{fullWidth:!0,type:"password",label:"Adgangskode",value:r,onChange:e=>s(e.target.value),onKeyPress:e=>"Enter"===e.key&&x()}),t.jsx(l,{variant:"contained",color:"primary",fullWidth:!0,onClick:x,sx:{mt:2},children:"Log ind"})]})})},Ka=()=>{const e=H(),[n,i]=a.useState(!0);return a.useEffect((()=>{(()=>{const t=navigator.userAgent||navigator.vendor||window.opera,n=/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(t),a=window.innerWidth<=768,r="ontouchstart"in window||navigator.maxTouchPoints>0;e(n||a&&r?"/enhanced-mobile":"/",{replace:!0}),i(!1)})()}),[e]),n?t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",gap:"1rem",padding:"1rem",textAlign:"center"},children:[t.jsx("div",{children:"Indlæser..."}),t.jsx("div",{style:{fontSize:"0.875rem",color:"#666"},children:"Omdirigerer til den rigtige visning..."})]}):null};function Fa(){return t.jsx(q,{children:t.jsxs(U,{children:[t.jsx(G,{path:"/detect",element:t.jsx(Ka,{})}),t.jsx(G,{path:"/PWAVIEW",element:t.jsx(mt,{})}),t.jsx(G,{path:"/enhanced-mobile",element:t.jsx(la,{})}),t.jsx(G,{path:"/admin",element:t.jsx(Ba,{})}),t.jsxs(G,{path:"/",element:t.jsx(Te,{}),children:[t.jsx(G,{index:!0,element:t.jsx(qe,{})}),t.jsx(G,{path:"room/:roomId",element:t.jsx(ot,{})})]}),t.jsx(G,{path:"*",element:t.jsx(Y,{to:"/detect",replace:!0})})]})})}Pe(document.getElementById("root")).render(t.jsx(a.StrictMode,{children:t.jsx(Fa,{})}));
