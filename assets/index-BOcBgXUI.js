import{a as e,j as t,B as n,r as a,g as i,u as r,i as o,C as s,T as c,I as l,G as d,P as u,b as p,c as h,s as m,d as f,A as g,e as x,f as b,h as v,k as y,l as j,m as w,F as k,S,D as I,n as C,o as P,p as D,q as T,t as M,v as A,w as O,x as N,y as E,L as F,z as B,E as K,H as _,J as W,K as L,M as R}from"./vendor-mui-D_MNpo10.js";import{O as V,u as z,a as H,H as $,R as q,b as U,N as G}from"./vendor-react-D_l8lT6M.js";import{i as Y,g as J,e as X,q as Q,c as Z,o as ee,a as te,d as ne,b as ae,u as ie,s as re,f as oe,h as se,j as ce,l as le,r as de,_ as ue,C as pe,k as he,E as me,F as fe,m as ge,n as xe,p as be,v as ve,t as ye,w as je,x as we,y as ke,T as Se,z as Ie}from"./vendor-firebase-GgYScZIV.js";var Ce;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var Pe=e;Ce=Pe.createRoot,Pe.hydrateRoot;const De=()=>t.jsx(n,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh",bgcolor:"#1a1a1a"},children:t.jsx(n,{component:"main",sx:{flexGrow:1},children:t.jsx(V,{})})}),Te=J(Y({apiKey:"AIzaSyBfzh_QQFaKhGXLuVJXbSVkBuOZOvXLBRg",authDomain:"fridge6sal-5b0f6.firebaseapp.com",projectId:"fridge6sal-5b0f6",storageBucket:"fridge6sal-5b0f6.appspot.com",messagingSenderId:"1091624932154",appId:"1:1091624932154:web:b5e0e3d9c5c9b5e5d8e5c5"}));X(Te).catch((e=>{"failed-precondition"===e.code||e.code}));const Me=(e,t=[],n={})=>{const[i,r]=a.useState([]),[o,s]=a.useState(!0),c=a.useRef(new Map),{realtime:l=!1}=n;return a.useEffect((()=>{const n=Q(Z(Te,e),...t),a=`${e}-${t.join("-")}`;c.current.has(a)&&(r(c.current.get(a)),s(!1));if(l){const e=ee(n,(e=>{const t=[];e.forEach((e=>{t.push({id:e.id,...e.data()})})),r(t),c.current.set(a,t),s(!1)}));return()=>e()}(async()=>{try{const e=await te(n),t=[];e.forEach((e=>{t.push({id:e.id,...e.data()})})),r(t),c.current.set(a,t),s(!1)}catch(e){s(!1)}})()}),[e,t.join("-"),l]),{data:i,loading:o}};var Ae={},Oe={};const Ne=i(r);var Ee;function Fe(){return Ee||(Ee=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Ne}(Oe)),Oe}var Be=o;Object.defineProperty(Ae,"__esModule",{value:!0});var Ke=Ae.default=void 0,_e=Be(Fe()),We=t;Ke=Ae.default=(0,_e.default)((0,We.jsx)("path",{d:"M9.68 13.69 12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6"}),"WorkspacePremium");var Le={},Re=o;Object.defineProperty(Le,"__esModule",{value:!0});var Ve=Le.default=void 0,ze=Re(Fe()),He=t;Ve=Le.default=(0,ze.default)((0,He.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings");const $e=()=>{const e=z(),{data:i,loading:r}=Me("rooms",[],{realtime:!1}),o=a.useMemo((()=>Math.max(...i.map((e=>e.balance||0)))),[i]),p=a.useMemo((()=>i.reduce(((e,t)=>(e[t.id]=t,e)),{})),[i]),h=({roomId:n})=>{const a=p[n]||{occupantName:"",balance:0},i=a.balance===o&&a.balance>0;return t.jsxs(u,{elevation:3,sx:{p:2,height:"100%",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:"8px",transition:"all 0.2s ease-in-out",position:"relative","&:hover":{transform:"translateY(-4px)",boxShadow:"0 8px 16px rgba(0,0,0,0.1)"}},onClick:()=>(t=>{e(`/room/${t}`)})(n),children:[i&&t.jsx(Ke,{sx:{position:"absolute",top:-10,right:-10,color:"#ffd700",fontSize:"2rem",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))",transform:"rotate(12deg)"}}),t.jsx(c,{variant:"h5",component:"div",sx:{color:"#2c3e50",fontWeight:"bold",mb:.5},children:n}),t.jsx(c,{variant:"body1",sx:{color:"#666",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",px:2},children:a.occupantName||"Tomt værelse"})]})};return t.jsxs(s,{maxWidth:"lg",sx:{py:2,px:1},children:[t.jsxs(n,{sx:{mb:2,textAlign:"center"},children:[t.jsx(c,{variant:"h3",component:"h1",sx:{color:"#fff",mb:.5},children:"DormDrinks 6.sal"}),t.jsx(c,{variant:"h5",component:"h2",sx:{color:"#fff",mb:2},children:"Beer, Soda & Beyond"})]}),t.jsx(n,{sx:{position:"relative",mb:2},children:t.jsx(l,{onClick:()=>{e("/admin")},sx:{position:"absolute",right:0,top:"-45px",color:"#fff"},children:t.jsx(Ve,{})})}),t.jsx(d,{container:!0,spacing:1.5,children:Array.from({length:28},((e,t)=>t+601)).map((e=>t.jsx(d,{item:!0,xs:6,sm:4,md:3,children:t.jsx(h,{roomId:e.toString()})},e)))})]})};var qe={},Ue=o;Object.defineProperty(qe,"__esModule",{value:!0});var Ge=qe.default=void 0,Ye=Ue(Fe()),Je=t;Ge=qe.default=(0,Ye.default)((0,Je.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var Xe={},Qe=o;Object.defineProperty(Xe,"__esModule",{value:!0});var Ze=Xe.default=void 0,et=Qe(Fe()),tt=t;Ze=Xe.default=(0,et.default)((0,tt.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");const nt=async e=>{try{const t=ne(Te,"rooms",e),n=await ae(t);return n.exists()?{id:n.id,...n.data()}:null}catch(t){throw t}},at=async()=>{try{const e=Z(Te,"products"),t=await te(e);return t.docs.map((e=>({id:e.id,...e.data()})))}catch(e){throw e}},it=async()=>{try{const e=Z(Te,"products");if((await te(e)).empty){const t=[{id:"beer",name:"Øl",price:7},{id:"soda",name:"Sodavand",price:5},{id:"snacks",name:"Snacks",price:10},{id:"water",name:"Vand",price:3}];for(const n of t)await se(ne(e,n.id),{name:n.name,price:n.price})}for(let n=601;n<=628;n++){const e=ne(Te,"rooms",n.toString());(await ae(e)).exists()||await se(e,{occupantName:"",balance:0,lastPurchase:null})}const t=ne(Te,"adminConfig","general");(await ae(t)).exists()||await se(t,{mobilePayPhoneNumber:"",adminPassword:"admin123"})}catch(e){throw e}},rt=[{id:"beer",name:"Øl",price:7},{id:"soda",name:"Sodavand",price:5},{id:"snacks",name:"Snacks",price:10},{id:"water",name:"Vand",price:3}],ot=()=>{var e,i;const{roomId:r}=H(),o=z(),[l,m]=a.useState({occupantName:"",balance:0}),[f,g]=a.useState(rt),[x,b]=a.useState(!0);a.useEffect((()=>{(async()=>{try{await it();const[e,t]=await Promise.all([nt(r),at()]);m(e||{occupantName:"",balance:0}),g(t.length>0?t:rt)}catch(e){g(rt)}finally{b(!1)}})()}),[r]);const v=async e=>{try{await(async(e,t)=>{try{const n=ne(Te,"rooms",e);await ie(n,t)}catch(n){throw n}})(r,{occupantName:e}),m((t=>({...t,occupantName:e})))}catch(t){}},y=async e=>{try{const t=f.find((t=>t.id===e));if(!t)return;const n=(l.balance||0)+t.price,a=new Date;m((e=>({...e,balance:n,lastPurchase:{productName:t.name,amount:t.price,timestamp:a}}))),await(async e=>{var t;try{const n=Z(Te,"purchases"),a={...e,timestamp:re()};await oe(n,a);const i=ne(Te,"rooms",e.roomId),r=(null==(t=(await ae(i)).data())?void 0:t.balance)||0;await ie(i,{balance:r+e.amount,lastPurchase:{productName:e.productName,amount:e.amount,timestamp:re()}})}catch(n){throw n}})({roomId:r,productId:e,productName:t.name,amount:t.price})}catch(t){const e=await nt(r);m(e||{occupantName:"",balance:0})}};return t.jsxs(n,{sx:{bgcolor:"#f5f6fa",minHeight:"100vh",display:"flex",flexDirection:"column"},children:[t.jsxs(s,{maxWidth:"sm",sx:{py:4,flex:1},children:[t.jsxs(n,{sx:{display:"flex",flexDirection:"column",alignItems:"center",mb:6},children:[t.jsxs(c,{variant:"h3",component:"h1",sx:{color:"#2c3e50",fontWeight:"bold",mb:2},children:["Værelse ",r]}),t.jsx(n,{sx:{position:"relative",width:"100%",maxWidth:300},children:t.jsx(p,{variant:"outlined",placeholder:"Klik for at tilføje beboer",value:l.occupantName,onChange:e=>v(e.target.value),sx:{width:"100%","& .MuiOutlinedInput-root":{fontSize:"1.2rem",textAlign:"center","& fieldset":{borderColor:"rgba(0,0,0,0.2)"},"&:hover fieldset":{borderColor:"#e74c3c"},"&.Mui-focused fieldset":{borderColor:"#e74c3c"},"& input":{textAlign:"center",color:"#2c3e50","&::placeholder":{color:"#666",opacity:.7}}}},InputProps:{endAdornment:t.jsx(Ze,{sx:{color:"#666",opacity:.7,mr:1,transition:"all 0.2s",".MuiOutlinedInput-root:hover &":{color:"#e74c3c",opacity:1}}})}})})]}),t.jsxs(u,{elevation:3,sx:{p:4,mb:4,textAlign:"center",bgcolor:l.balance>0?"#fff3e0":"white",borderRadius:3},children:[t.jsx(c,{variant:"h6",sx:{color:"#666",mb:1},children:"SALDO"}),t.jsxs(c,{variant:"h2",sx:{color:l.balance>0?"#e74c3c":"#2c3e50",fontWeight:"bold"},children:[null==(e=l.balance)?void 0:e.toFixed(2)," kr"]})]}),l.lastPurchase&&t.jsxs(u,{elevation:3,sx:{bgcolor:"white",p:3,mb:4,borderRadius:3},children:[t.jsx(c,{variant:"overline",sx:{color:"#666",display:"block",mb:1,fontSize:"0.85rem"},children:"SENESTE KØB"}),t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx(c,{variant:"h6",sx:{color:"#2c3e50",fontWeight:"bold"},children:l.lastPurchase.productName}),t.jsxs(n,{sx:{textAlign:"right"},children:[t.jsxs(c,{sx:{color:"#e74c3c",fontSize:"1.1rem",fontWeight:"bold"},children:[null==(i=l.lastPurchase.amount)?void 0:i.toFixed(2)," kr"]}),t.jsx(c,{sx:{color:"#666",fontSize:"0.9rem"},children:(e=>{if(!e)return"";return(e instanceof Date?e:e.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit"})})(l.lastPurchase.timestamp)})]})]})]}),t.jsx(d,{container:!0,spacing:2,children:f.map((e=>t.jsx(d,{item:!0,xs:6,children:t.jsxs(h,{fullWidth:!0,variant:"contained",onClick:()=>y(e.id),sx:{bgcolor:"#e74c3c",py:2,borderRadius:2,fontSize:"1.1rem",fontWeight:"bold",boxShadow:"0 2px 8px rgba(231,76,60,0.3)",display:"flex",flexDirection:"column","&:hover":{bgcolor:"#c0392b",transform:"translateY(-2px)",boxShadow:"0 4px 12px rgba(231,76,60,0.4)"}},children:[t.jsx(n,{children:e.name}),t.jsxs(c,{variant:"body2",sx:{opacity:.9,fontSize:"0.9rem",fontWeight:"normal"},children:[e.price," kr"]})]})},e.id)))})]}),t.jsx(n,{sx:{p:2,borderTop:"1px solid rgba(0,0,0,0.1)",bgcolor:"white"},children:t.jsx(s,{maxWidth:"sm",children:t.jsx(h,{fullWidth:!0,variant:"text",onClick:()=>o("/"),startIcon:t.jsx(Ge,{}),sx:{color:"#666",py:1.5,fontSize:"1rem","&:hover":{bgcolor:"rgba(0,0,0,0.05)",color:"#2c3e50"}},children:"Tilbage til oversigt"})})})]})},st=m(s)({minHeight:"100vh",backgroundColor:"#ffffff",color:"#333333",display:"flex",flexDirection:"column",padding:"16px",gap:"24px"}),ct=m(n)({display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #e0e0e0"}),lt=m(p)({"& .MuiInputBase-input":{color:"#333333",backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"8px 12px"},"& .MuiInput-underline:before":{borderBottom:"none"},"& .MuiInput-underline:after":{borderBottom:"none"}}),dt=m(h)({backgroundColor:"#5BB9FD",color:"white",padding:"16px",borderRadius:"8px",fontSize:"16px",textTransform:"none",marginTop:"40px",marginBottom:"40px","&:hover":{backgroundColor:"#4999d6"}}),ut=m(u)({backgroundColor:"#f5f5f5",padding:"16px",borderRadius:"8px",marginBottom:"16px",boxShadow:"none",border:"1px solid #e0e0e0"}),pt=m(c)({fontSize:"18px",fontWeight:500,marginBottom:"12px",color:"#333333"}),ht=()=>{var e;const[i,r]=a.useState({occupantName:"",balance:0,lastPurchase:null,recentPurchases:[]}),[o,s]=a.useState(localStorage.getItem("selectedRoom")),[l,d]=a.useState(!0),[u,h]=a.useState(null),m=e=>{if(!e)return"";return(e instanceof Date?e:e.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit"})};a.useEffect((()=>{(async()=>{if(o)try{d(!0);const e=await nt(o),t=Z(Te,"rooms",o,"purchases"),n=Q(t,ce("timestamp","desc"),le(5)),a=await te(n),i=[];a.forEach((e=>{const t=e.data();i.push({id:e.id,...t,timestamp:t.timestamp})}));const s={...e,recentPurchases:i};r(s)}catch(e){h(e)}finally{d(!1)}})()}),[o]);const f=e=>{const t=e.target.value;s(t),localStorage.setItem("selectedRoom",t)},g=Array.from({length:28},((e,t)=>String(601+t)));return o?l?t.jsx(st,{children:t.jsx(c,{variant:"body1",sx:{textAlign:"center",mt:4},children:"Indlæser..."})}):t.jsxs(st,{children:[t.jsxs(ct,{children:[t.jsxs(c,{variant:"h6",sx:{color:"#333333"},children:["Værelse ",o]}),t.jsx(lt,{variant:"standard",placeholder:"Beboernavn",value:(null==i?void 0:i.occupantName)||"",disabled:!0})]}),t.jsxs(n,{sx:{textAlign:"center",my:4},children:[t.jsx(c,{variant:"body1",sx:{mb:1,color:"#666666"},children:"Samlet saldo:"}),t.jsxs(c,{variant:"h4",sx:{color:"#333333"},children:[(null==(e=null==i?void 0:i.balance)?void 0:e.toFixed(2))||"0.00"," kr"]})]}),t.jsx(dt,{fullWidth:!0,variant:"contained",onClick:async()=>{const e=ne(Te,"adminConfig","general"),t=await ae(e);if(t.exists()){const{mobilePayPhoneNumber:e}=t.data(),n=(null==i?void 0:i.balance)||0;window.location.href=`mobilepay://send?phone=${e}&amount=${n}&comment=Værelse ${o}`}},disabled:!(null==i?void 0:i.balance),children:"Betal med MobilePay"}),t.jsxs(ut,{children:[t.jsx(pt,{children:"Seneste 5 køb"}),u&&t.jsxs(c,{variant:"body2",color:"error",children:["Fejl ved hentning af køb: ",u.message]}),i.lastPurchase&&t.jsxs(n,{sx:{mb:2,pb:2,borderBottom:"1px solid #e0e0e0"},children:[t.jsxs(c,{variant:"body2",sx:{display:"flex",justifyContent:"space-between",color:"#333333"},children:[t.jsxs("span",{children:["Seneste køb: ",i.lastPurchase.productName]}),t.jsxs("span",{children:["Pris: ",i.lastPurchase.amount," kr"]})]}),i.lastPurchase.timestamp&&t.jsx(c,{variant:"caption",sx:{display:"block",mt:.5,color:"#666666"},children:m(i.lastPurchase.timestamp)})]}),i.recentPurchases&&i.recentPurchases.length>0&&i.recentPurchases.map((e=>t.jsxs(n,{sx:{mb:2,pb:2,borderBottom:"1px solid #e0e0e0","&:last-child":{borderBottom:"none"}},children:[t.jsxs(c,{variant:"body2",sx:{display:"flex",justifyContent:"space-between",color:"#333333"},children:[t.jsxs("span",{children:["Produkt: ",e.productName]}),t.jsxs("span",{children:["Pris: ",e.amount," kr"]})]}),e.timestamp&&t.jsx(c,{variant:"caption",sx:{display:"block",mt:.5,color:"#666666"},children:m(e.timestamp)})]},e.id))),!i.lastPurchase&&(!i.recentPurchases||0===i.recentPurchases.length)&&t.jsx(c,{variant:"body2",sx:{color:"#666666"},children:"Ingen seneste køb"})]}),t.jsxs(ut,{children:[t.jsx(pt,{children:"Påmindelser"}),t.jsx(c,{variant:"body2",sx:{color:"#333333"},children:"Husk køkkenmøde - Torsdag d. 15. juni"})]})]}):t.jsx(st,{children:t.jsxs(n,{sx:{textAlign:"center",mt:4},children:[t.jsx(c,{variant:"h5",gutterBottom:!0,children:"Velkommen"}),t.jsx(c,{gutterBottom:!0,sx:{mb:3,color:"#666666"},children:"Vælg dit værelse for at fortsætte"}),t.jsxs(p,{select:!0,fullWidth:!0,label:"Værelse",onChange:f,SelectProps:{native:!0},sx:{backgroundColor:"#f0f0f0",borderRadius:"8px","& .MuiInputBase-input":{color:"#333333"},"& .MuiInputLabel-root":{color:"#666666"}},children:[t.jsx("option",{value:"",children:"Vælg værelse"}),g.map((e=>t.jsx("option",{value:e,children:e},e)))]})]})})};var mt={},ft=o;Object.defineProperty(mt,"__esModule",{value:!0});var gt=mt.default=void 0,xt=ft(Fe()),bt=t;gt=mt.default=(0,xt.default)((0,bt.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"}),"Refresh");var vt={},yt=o;Object.defineProperty(vt,"__esModule",{value:!0});var jt=vt.default=void 0,wt=yt(Fe()),kt=t;jt=vt.default=(0,wt.default)((0,kt.jsx)("path",{d:"M18 1.01 8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z"}),"AddToHomeScreen");var St={},It=o;Object.defineProperty(St,"__esModule",{value:!0});var Ct=St.default=void 0,Pt=It(Fe()),Dt=t;Ct=St.default=(0,Pt.default)((0,Dt.jsx)("path",{d:"M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34"}),"Campaign");var Tt={},Mt=o;Object.defineProperty(Tt,"__esModule",{value:!0});var At=Tt.default=void 0,Ot=Mt(Fe()),Nt=t;At=Tt.default=(0,Ot.default)((0,Nt.jsx)("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z"}),"Payment");const Et="@firebase/installations",Ft="0.6.9",Bt=1e4,Kt=`w:${Ft}`,_t="FIS_v2",Wt=36e5,Lt=new me("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Rt(e){return e instanceof fe&&e.code.includes("request-failed")}
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
 */function Vt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function zt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Ht(e,t){const n=(await t.json()).error;return Lt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function $t({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function qt(e,{refreshToken:t}){const n=$t(e);return n.append("Authorization",function(e){return`${_t} ${e}`}
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
 */(t)),n}async function Ut(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function Gt(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const Yt=/^[cdef][\w-]{21}$/;function Jt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
 */(e);return Yt.test(t)?t:""}catch(e){return""}}function Xt(e){return`${e.appName}!${e.appId}`}
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
 */const Qt=new Map;function Zt(e,t){const n=Xt(e);en(n,t),function(e,t){const n=function(){!tn&&"BroadcastChannel"in self&&(tn=new BroadcastChannel("[Firebase] FID Change"),tn.onmessage=e=>{en(e.data.key,e.data.fid)});return tn}();n&&n.postMessage({key:e,fid:t});0===Qt.size&&tn&&(tn.close(),tn=null)}(n,t)}function en(e,t){const n=Qt.get(e);if(n)for(const a of n)a(t)}let tn=null;
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
const nn="firebase-installations-store";let an=null;function rn(){return an||(an=ge("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(nn)}})),an}async function on(e,t){const n=Xt(e),a=(await rn()).transaction(nn,"readwrite"),i=a.objectStore(nn),r=await i.get(n);return await i.put(t,n),await a.done,r&&r.fid===t.fid||Zt(e,t.fid),t}async function sn(e){const t=Xt(e),n=(await rn()).transaction(nn,"readwrite");await n.objectStore(nn).delete(t),await n.done}async function cn(e,t){const n=Xt(e),a=(await rn()).transaction(nn,"readwrite"),i=a.objectStore(nn),r=await i.get(n),o=t(r);return void 0===o?await i.delete(n):await i.put(o,n),await a.done,!o||r&&r.fid===o.fid||Zt(e,o.fid),o}
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
 */async function ln(e){let t;const n=await cn(e.appConfig,(n=>{const a=function(e){const t=e||{fid:Jt(),registrationStatus:0};return pn(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Lt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=Vt(e),i=$t(e),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:_t,appId:e.appId,sdkVersion:Kt},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ut((()=>fetch(a,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:zt(e.authToken)}}throw await Ht("Create Installation",c)}(e,t);return on(e.appConfig,n)}catch(n){throw Rt(n)&&409===n.customData.serverCode?await sn(e.appConfig):await on(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:dn(e)}:{installationEntry:t}}(e,a);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function dn(e){let t=await un(e.appConfig);for(;1===t.registrationStatus;)await Gt(100),t=await un(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ln(e);return n||t}return t}function un(e){return cn(e,(e=>{if(!e)throw Lt.create("installation-not-found");return pn(e)}))}function pn(e){return 1===(t=e).registrationStatus&&t.registrationTime+Bt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function hn({appConfig:e,heartbeatServiceProvider:t},n){const a=function(e,{fid:t}){return`${Vt(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=qt(e,n),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:Kt,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ut((()=>fetch(a,s)));if(c.ok){return zt(await c.json())}throw await Ht("Generate Auth Token",c)}async function mn(e,t=!1){let n;const a=await cn(e.appConfig,(a=>{if(!gn(a))throw Lt.create("not-registered");const i=a.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Wt}(e)}(i))return a;if(1===i.requestStatus)return n=async function(e,t){let n=await fn(e.appConfig);for(;1===n.authToken.requestStatus;)await Gt(100),n=await fn(e.appConfig);const a=n.authToken;return 0===a.requestStatus?mn(e,t):a}(e,t),a;{if(!navigator.onLine)throw Lt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(a);return n=async function(e,t){try{const n=await hn(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await on(e.appConfig,a),n}catch(n){if(!Rt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await on(e.appConfig,n)}else await sn(e.appConfig);throw n}}(e,t),t}}));return n?await n:a.authToken}function fn(e){return cn(e,(e=>{if(!gn(e))throw Lt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Bt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function gn(e){return void 0!==e&&2===e.registrationStatus}
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
async function xn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await ln(e);t&&await t}
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
 */(n);return(await mn(n,t)).token}function bn(e){return Lt.create("missing-app-config-values",{valueName:e})}
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
 */const vn="installations",yn=e=>{const t=e.getProvider("app").getImmediate(),n=he(t,vn).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:a}=await ln(t);return a?a.catch(console.error):mn(t).catch(console.error),n.fid}(n),getToken:e=>xn(n,e)}};ue(new pe(vn,(e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw bn("App Configuration");if(!e.name)throw bn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw bn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:he(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),ue(new pe("installations-internal",yn,"PRIVATE")),de(Et,Ft),de(Et,Ft,"esm2017");
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
const jn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",wn="google.c.a.c_id";var kn,Sn,In;
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
function Cn(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Pn(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),a=new Uint8Array(n.length);for(let i=0;i<n.length;++i)a[i]=n.charCodeAt(i);return a}
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
 */(Sn=kn||(kn={}))[Sn.DATA_MESSAGE=1]="DATA_MESSAGE",Sn[Sn.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(In||(In={}));const Dn="fcm_token_details_db",Tn="fcm_token_object_Store";
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
const Mn="firebase-messaging-store";let An=null;function On(){return An||(An=ge("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Mn)}})),An}async function Nn(e){const t=Fn(e),n=await On(),a=await n.transaction(Mn).objectStore(Mn).get(t);if(a)return a;{const t=await async function(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map((e=>e.name)).includes(Dn))return null;let t=null;return(await ge(Dn,5,{upgrade:async(n,a,i,r)=>{var o;if(a<2)return;if(!n.objectStoreNames.contains(Tn))return;const s=r.objectStore(Tn),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===a){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:Cn(e.vapidKey)}}}else if(3===a){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Cn(e.auth),p256dh:Cn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Cn(e.vapidKey)}}}else if(4===a){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Cn(e.auth),p256dh:Cn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Cn(e.vapidKey)}}}}})).close(),await we(Dn),await we("fcm_vapid_details_db"),await we("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await En(e,t),t}}async function En(e,t){const n=Fn(e),a=(await On()).transaction(Mn,"readwrite");return await a.objectStore(Mn).put(t,n),await a.done,t}function Fn({appConfig:e}){return e.appId}
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
 */const Bn=new me("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});function Kn({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function _n({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Wn({p256dh:e,auth:t,endpoint:n,vapidKey:a}){const i={web:{endpoint:n,auth:t,p256dh:e}};return a!==jn&&(i.web.applicationPubKey=a),i}
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
 */async function Ln(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Pn(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Cn(t.getKey("auth")),p256dh:Cn(t.getKey("p256dh"))},a=await Nn(e.firebaseDependencies);if(a){if(function(e,t){const n=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,i=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&a&&i&&r}
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
 */(a.subscriptionOptions,n))return Date.now()>=a.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await _n(e),a=Wn(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(a)};let r;try{const n=await fetch(`${Kn(e.appConfig)}/${t.token}`,i);r=await n.json()}catch(o){throw Bn.create("token-update-failed",{errorInfo:null==o?void 0:o.toString()})}if(r.error){const e=r.error.message;throw Bn.create("token-update-failed",{errorInfo:e})}if(!r.token)throw Bn.create("token-update-no-token");return r.token}(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await En(e.firebaseDependencies,a),n}catch(n){throw n}}(e,{token:a.token,createTime:Date.now(),subscriptionOptions:n}):a.token;try{await async function(e,t){const n={method:"DELETE",headers:await _n(e)};try{const a=await fetch(`${Kn(e.appConfig)}/${t}`,n),i=await a.json();if(i.error){const e=i.error.message;throw Bn.create("token-unsubscribe-failed",{errorInfo:e})}}catch(a){throw Bn.create("token-unsubscribe-failed",{errorInfo:null==a?void 0:a.toString()})}}(e.firebaseDependencies,a.token)}catch(i){}return Rn(e.firebaseDependencies,n)}return Rn(e.firebaseDependencies,n)}async function Rn(e,t){const n=
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
 */await async function(e,t){const n=await _n(e),a=Wn(t),i={method:"POST",headers:n,body:JSON.stringify(a)};let r;try{const t=await fetch(Kn(e.appConfig),i);r=await t.json()}catch(o){throw Bn.create("token-subscribe-failed",{errorInfo:null==o?void 0:o.toString()})}if(r.error){const e=r.error.message;throw Bn.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw Bn.create("token-subscribe-no-token");return r.token}(e,t),a={token:n,createTime:Date.now(),subscriptionOptions:t};return await En(e,a),a.token}function Vn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const a=t.notification.body;a&&(e.notification.body=a);const i=t.notification.image;i&&(e.notification.image=i);const r=t.notification.icon;r&&(e.notification.icon=r)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,a,i,r,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(i=null===(a=t.fcmOptions)||void 0===a?void 0:a.link)&&void 0!==i?i:null===(r=t.notification)||void 0===r?void 0:r.click_action;s&&(e.fcmOptions.link=s);const c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
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
 */(t,e),t}function zn(e){return Bn.create("missing-app-config-values",{valueName:e})}
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
 */class Hn{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=
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
function(e){if(!e||!e.options)throw zn("App Configuration Object");if(!e.name)throw zn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const a of t)if(!n[a])throw zn(a);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:a,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
async function $n(e,t){if(t||e.swRegistration||await async function(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch((()=>{}))}catch(t){throw Bn.create("failed-service-worker-registration",{browserErrorMessage:null==t?void 0:t.message})}}(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Bn.create("invalid-sw-registration");e.swRegistration=t}}
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
async function qn(e,t){if(!navigator)throw Bn.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Bn.create("permission-blocked");return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=jn)}(e,null==t?void 0:t.vapidKey),await $n(e,null==t?void 0:t.serviceWorkerRegistration),Ln(e)}
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
 */async function Un(e,t,n){const a=function(e){switch(e){case In.NOTIFICATION_CLICKED:return"notification_open";case In.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:n[wn],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function Gn(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===In.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(Vn(n)):e.onMessageHandler.next(Vn(n)));const a=n.data;var i;"object"==typeof(i=a)&&i&&wn in i&&"1"===a["google.c.a.e"]&&await Un(e,n.messageType,a)}const Yn="@firebase/messaging",Jn="0.12.12",Xn=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>qn(t,e)}};
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
function Qn(e=be()){
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
return async function(){try{await ve()}catch(e){return!1}return"undefined"!=typeof window&&ye()&&je()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}().then((e=>{if(!e)throw Bn.create("unsupported-browser")}),(e=>{throw Bn.create("indexed-db-unsupported")})),he(xe(e),"messaging").getImmediate()}ue(new pe("messaging",(e=>{const t=new Hn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>Gn(t,e))),t}),"PUBLIC")),ue(new pe("messaging-internal",Xn,"PRIVATE")),de(Yn,Jn),de(Yn,Jn,"esm2017");const Zn=m(n)((({theme:e})=>({minHeight:"100vh",width:"100%",maxWidth:"100%",margin:0,padding:0,backgroundColor:"#f5f6fa",overflowX:"hidden",position:"relative",paddingTop:"env(safe-area-inset-top)",paddingBottom:"env(safe-area-inset-bottom)"}))),ea=m(n)((({theme:e})=>({position:"relative",padding:"60px 16px 32px 16px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:"0 0 24px 24px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.05)",marginBottom:32,width:"100%",paddingTop:"calc(env(safe-area-inset-top) + 60px)","&::after":{content:'""',position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:"40%",height:"4px",background:"linear-gradient(90deg, #5A78FF 0%, #83A4FF 100%)",borderRadius:"2px",opacity:.7}}))),ta=m(n)((({theme:e})=>({padding:"0 16px",width:"100%",maxWidth:"100%",margin:"0 auto"}))),na=m(u)((({theme:e})=>({padding:"20px",borderRadius:"12px",backgroundColor:"#f8f9fa",marginTop:"16px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",transition:"transform 0.2s ease-in-out","&:active":{transform:"scale(0.98)"}}))),aa=m(u)((({theme:e})=>({padding:"16px",marginTop:"16px",marginBottom:"16px",borderRadius:"12px",backgroundColor:"#F8F9FF",border:"1px solid rgba(90, 120, 255, 0.1)"}))),ia=m(u)((({theme:e})=>({padding:"12px",marginBottom:"8px",borderRadius:"8px",backgroundColor:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}))),ra=m(l)((({theme:e})=>({position:"absolute",right:"16px",top:"16px",backgroundColor:"rgba(255,255,255,0.9)","&:hover":{backgroundColor:"rgba(255,255,255,1)"}}))),oa=m(u)((({theme:e})=>({position:"fixed",bottom:"env(safe-area-inset-bottom)",left:0,right:0,padding:"16px",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#1976d2",color:"white",zIndex:1e3,borderRadius:"16px 16px 0 0"}))),sa=()=>{var e;const[i,r]=a.useState({occupantName:"",balance:0,lastPurchase:null,recentPurchases:[]}),[o,s]=a.useState(localStorage.getItem("selectedRoom")),[d,u]=a.useState(!0),[m,g]=a.useState(null),[x,b]=a.useState(!1),[v,y]=a.useState({open:!1,message:"",severity:"info"}),[j,w]=a.useState(!1),[k,S]=a.useState(null),[I,C]=a.useState(!1);a.useState([]);const P=Array.from({length:28},((e,t)=>String(601+t))),D=e=>{const t=e.target.value;s(t),localStorage.setItem("selectedRoom",t)},T=e=>{if(!e)return"";return(e instanceof Date?e:e.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"})};a.useEffect((()=>{let e=null;return(async()=>{if(o)try{u(!0),await it();const t=ne(Te,"rooms",o);e=ee(t,(async e=>{if(e.exists()){const n={id:e.id,...e.data()},a=Z(Te,"purchases"),i=Q(a,ke("roomId","==",o));try{const e=await te(i),t=[];e.forEach((e=>{const n=e.data();t.push({id:e.id,...n,timestamp:n.timestamp})}));const a=t.sort(((e,t)=>{var n,a;return(null==(n=t.timestamp)?void 0:n.seconds)-(null==(a=e.timestamp)?void 0:a.seconds)})).slice(0,3),o={...n,recentPurchases:a};r(o)}catch(t){}}}),(e=>{g(e)}))}catch(t){g(t)}finally{u(!1)}})(),()=>{e&&e()}}),[o]);const M=async()=>{b(!0);try{const e=Z(Te,"purchases"),t=Q(e,ke("roomId","==",o)),n=await te(t),a=[];n.forEach((e=>{const t=e.data();a.push({id:e.id,...t,timestamp:t.timestamp})}));const i=a.sort(((e,t)=>{var n,a;return(null==(n=t.timestamp)?void 0:n.seconds)-(null==(a=e.timestamp)?void 0:a.seconds)})).slice(0,3);r((e=>({...e,recentPurchases:i}))),y({open:!0,message:"Data refreshed successfully",severity:"success"})}catch(e){y({open:!0,message:"Error refreshing data",severity:"error"})}finally{b(!1)}},A=async()=>{try{const e=ne(Te,"adminConfig","general"),t=await ae(e);if(t.exists()){const{mobilePayPhoneNumber:e}=t.data(),n=`mobilepay://send?phone=${e}&amount=${Math.round(i.balance)}&comment=Dorm Room ${o} Balance`;window.location.href=n}else y({open:!0,message:"MobilePay configuration not found",severity:"error"})}catch(e){y({open:!0,message:"Failed to initiate MobilePay",severity:"error"})}},O=()=>{A()};a.useEffect((()=>{const e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;C(e)}),[]),a.useEffect((()=>{if(window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone)w(!1);else{if(!I){const e=e=>{e.preventDefault(),S(e),w(!0)};return window.addEventListener("beforeinstallprompt",e),()=>window.removeEventListener("beforeinstallprompt",e)}setTimeout((()=>{localStorage.getItem("iosInstallPrompted")||w(!0)}),2e3)}}),[I]);const N=async()=>{if("Notification"in window&&"serviceWorker"in navigator)try{if("granted"===await Notification.requestPermission()){const t=Qn();try{const e=await async function(e,t){return qn(e=xe(e),t)}(t,{vapidKey:void 0});if(e&&o){const t=ne(Te,"fcmTokens",o);await setDoc(t,{token:e,roomId:o,lastUpdated:re()},{merge:!0}),y({open:!0,message:"Notifikationer aktiveret",severity:"success"})}}catch(e){y({open:!0,message:"Kunne ikke aktivere notifikationer",severity:"error"})}}}catch(e){y({open:!0,message:"Kunne ikke få tilladelse til notifikationer",severity:"error"})}};if(a.useEffect((()=>{o&&N()}),[o]),!o)return t.jsx(Zn,{children:t.jsxs(n,{sx:{textAlign:"center",mt:4},children:[t.jsx(c,{variant:"h4",gutterBottom:!0,children:"Velkommen"}),t.jsx(c,{variant:"h6",gutterBottom:!0,sx:{mb:2,color:"#666666"},children:"til din personlige oversigt"}),t.jsx(c,{sx:{mb:4,color:"#666666"},children:"Vælg dit værelse for at komme i gang. Dette er en engangskonfiguration."}),t.jsxs(p,{select:!0,fullWidth:!0,label:"Vælg dit værelse",onChange:D,SelectProps:{native:!0},sx:{backgroundColor:"#f0f0f0",borderRadius:"8px","& .MuiInputBase-input":{color:"#333333",fontSize:"1.1rem",padding:"16px"},"& .MuiInputLabel-root":{color:"#666666",fontSize:"1.1rem"}},children:[t.jsx("option",{value:"",children:"Vælg værelse"}),P.map((e=>t.jsx("option",{value:e,children:e},e)))]}),t.jsx(c,{variant:"caption",sx:{display:"block",mt:2,color:"#666666"},children:"Bemærk: Dette valg gemmes til fremtidige besøg"})]})});if(d)return t.jsx(Zn,{children:t.jsx(n,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:t.jsx(f,{})})});if(m)return t.jsx(Zn,{children:t.jsxs(n,{sx:{textAlign:"center",mt:4},children:[t.jsx(c,{color:"error",children:"Error loading data. Please try again."}),t.jsx(h,{onClick:()=>window.location.reload(),sx:{mt:2},children:"Reload"})]})});const E=t.jsx(h,{variant:"contained",color:"primary",fullWidth:!0,onClick:A,sx:{marginTop:2,backgroundColor:"#4CAF50","&:hover":{backgroundColor:"#45a049"}},startIcon:t.jsx(At,{}),children:"Betal med MobilePay"});return t.jsxs(Zn,{onTouchStart:async e=>{const t=e.touches[0].clientY,n=e=>{e.touches[0].clientY-t>100&&0===window.scrollY&&(M(),document.removeEventListener("touchmove",n))};document.addEventListener("touchmove",n),document.addEventListener("touchend",(()=>{document.removeEventListener("touchmove",n)}),{once:!0})},children:[t.jsxs(ea,{children:[t.jsxs(n,{sx:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",zIndex:1,width:"100%",mt:"env(safe-area-inset-top)"},children:[t.jsx(c,{variant:"subtitle1",sx:{color:"#5A78FF",fontWeight:500,letterSpacing:"0.2px",mb:.5,background:"linear-gradient(90deg, #5A78FF 0%, #83A4FF 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:i.occupantName||"Ingen beboer"}),t.jsx(c,{variant:"h4",sx:{fontWeight:800,color:"#2c3e50",letterSpacing:"-0.5px"},children:o})]}),t.jsx(ra,{onClick:M,disabled:x,sx:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",color:"#5A78FF","&:hover":{backgroundColor:"rgba(90, 120, 255, 0.08)"}},children:t.jsx(gt,{sx:{animation:x?"spin 1s linear infinite":"none",transition:"transform 0.2s ease"}})})]}),t.jsxs(ta,{children:[t.jsxs(na,{elevation:3,onClick:O,children:[t.jsx(c,{variant:"h6",sx:{mb:1,color:"#333"},children:"Køb i alt"}),t.jsxs(c,{variant:"h4",sx:{mb:2,color:i.balance>0?"#e74c3c":"#2ecc71"},children:[null==(e=i.balance)?void 0:e.toFixed(2)," kr"]}),t.jsx(h,{variant:"contained",fullWidth:!0,onClick:O,sx:{backgroundColor:"#5A78FF","&:hover":{backgroundColor:"#4A61D1"},py:1.5,borderRadius:2,textTransform:"none",fontSize:"1.1rem"},children:"Betal med MobilePay"}),E]}),t.jsx(aa,{elevation:0,children:t.jsxs(n,{sx:{display:"flex",alignItems:"flex-start",gap:2},children:[t.jsx(Ct,{sx:{color:"#5A78FF",mt:.5}}),t.jsxs(n,{children:[t.jsx(c,{variant:"subtitle1",sx:{fontWeight:500,mb:.5,color:"#2c3e50"},children:"Beskeder"}),t.jsx(c,{variant:"body2",sx:{color:"#666"},children:"Ingen nye beskeder"})]})]})}),t.jsxs(n,{sx:{mt:2,mb:2},children:[t.jsx(c,{variant:"subtitle1",sx:{mb:1,color:"#666",fontWeight:500},children:"Seneste køb"}),i.recentPurchases.map((e=>t.jsxs(ia,{sx:{py:1,px:2,mb:.5,backgroundColor:"#f8f9ff",borderRadius:1},children:[t.jsxs(n,{sx:{display:"flex",alignItems:"baseline",gap:1},children:[t.jsx(c,{variant:"body2",sx:{fontWeight:500},children:e.productName}),t.jsx(c,{variant:"caption",color:"text.secondary",children:T(e.timestamp)})]}),t.jsxs(c,{variant:"body2",color:"primary",sx:{fontWeight:500},children:[e.amount.toFixed(2)," kr"]})]},e.id))),0===i.recentPurchases.length&&t.jsx(c,{variant:"caption",color:"text.secondary",sx:{display:"block",textAlign:"center"},children:"Ingen køb endnu"})]})]}),j&&t.jsxs(oa,{elevation:3,children:[t.jsxs(n,{sx:{display:"flex",alignItems:"flex-start",gap:2,flex:1},children:[t.jsx(jt,{sx:{mt:.5}}),I?t.jsxs(n,{children:[t.jsx(c,{variant:"subtitle1",sx:{fontWeight:"bold",mb:1},children:"Føj til hjemmeskærm"}),t.jsxs(c,{variant:"body2",sx:{display:"flex",alignItems:"center",mb:.5},children:["1. Tryk på 'Del' ikonet ",t.jsx("span",{style:{fontSize:"1.4em",marginLeft:"8px",color:"#4CAF50"},children:"⎙"})]}),t.jsxs(c,{variant:"body2",sx:{display:"flex",alignItems:"center"},children:["2. Scroll ned og vælg ",t.jsx("span",{style:{fontWeight:"bold",marginLeft:"4px",color:"#4CAF50"},children:"'Føj til hjemmeskærm'"})]})]}):t.jsx(c,{children:"Føj til hjemmeskærm for hurtig adgang"})]}),t.jsxs(n,{children:[t.jsx(l,{color:"inherit",onClick:()=>{I&&localStorage.setItem("iosInstallPrompted","true"),w(!1)},sx:{mr:1},children:"✕"}),!I&&t.jsx(h,{variant:"contained",color:"inherit",onClick:async()=>{I?(localStorage.setItem("iosInstallPrompted","true"),w(!1)):k&&(k.prompt(),await k.userChoice,S(null),w(!1))},sx:{color:"#1976d2",backgroundColor:"white","&:hover":{backgroundColor:"#f5f5f5"}},children:"Installer"})]})]})]})},ca=()=>{const[e,i]=a.useState([]),[r,o]=a.useState(!0),[s,l]=a.useState(""),[d,m]=a.useState(""),[k,S]=a.useState({});a.useEffect((()=>{I()}),[]);const I=async()=>{try{const e=Z(Te,"products"),t=(await te(e)).docs.map((e=>({id:e.id,...e.data()})));i(t),S(t.reduce(((e,t)=>({...e,[t.id]:{name:t.name,price:t.price}})),{}))}catch(e){l("Fejl ved indlæsning af produkter")}finally{o(!1)}},C=(e,t,n)=>{S((a=>({...a,[e]:{...a[e],[t]:"price"===t?Number(n):n}})))};return r?t.jsx(n,{sx:{display:"flex",justifyContent:"center",p:3},children:t.jsx(f,{})}):t.jsxs(u,{sx:{p:3},children:[t.jsx(c,{variant:"h6",gutterBottom:!0,children:"Produkt Administration"}),s&&t.jsx(g,{severity:"error",sx:{mb:2},children:s}),d&&t.jsx(g,{severity:"success",sx:{mb:2},children:d}),t.jsx(x,{children:t.jsxs(b,{children:[t.jsx(v,{children:t.jsxs(y,{children:[t.jsx(j,{children:"Produkt"}),t.jsx(j,{children:"Pris (DKK)"})]})}),t.jsx(w,{children:e.map((e=>{var n,a;return t.jsxs(y,{children:[t.jsx(j,{children:t.jsx(p,{fullWidth:!0,value:(null==(n=k[e.id])?void 0:n.name)||"",onChange:t=>C(e.id,"name",t.target.value)})}),t.jsx(j,{children:t.jsx(p,{type:"number",value:(null==(a=k[e.id])?void 0:a.price)||0,onChange:t=>C(e.id,"price",t.target.value),InputProps:{inputProps:{min:0,step:1}}})})]},e.id)}))})]})}),t.jsx(n,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:t.jsx(h,{variant:"contained",color:"primary",onClick:async()=>{o(!0),l("");try{await Promise.all(e.map((async e=>{const t=k[e.id];!t||t.name===e.name&&t.price===e.price||await ie(ne(Te,"products",e.id),{name:t.name,price:t.price})}))),m("Produkter opdateret"),I()}catch(t){l("Fejl ved opdatering af produkter")}finally{o(!1)}},disabled:r,children:"Gem Ændringer"})})]})},la=()=>{const[e,i]=a.useState(""),[r,o]=a.useState(!1),[s,l]=a.useState(!1),[d,m]=a.useState(""),[x,b]=a.useState("");return t.jsxs(u,{sx:{p:3},children:[t.jsx(c,{variant:"h6",gutterBottom:!0,children:"Send Beskeder"}),d&&t.jsx(g,{severity:"error",sx:{mb:2},children:d}),x&&t.jsx(g,{severity:"success",sx:{mb:2},children:x}),t.jsx(n,{sx:{mb:3},children:t.jsx(k,{control:t.jsx(S,{checked:r,onChange:e=>o(e.target.checked),name:"endOfMonth"}),label:"Månedlig betalingspåmindelse"})}),t.jsx(p,{fullWidth:!0,multiline:!0,rows:4,label:"Besked",value:e,onChange:e=>i(e.target.value),disabled:r,sx:{mb:3}}),t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx(c,{variant:"body2",color:"text.secondary",children:r?"Der vil blive sendt en påmindelse til alle beboere med deres aktuelle saldo.":"Skriv en besked der skal sendes til alle beboere."}),t.jsx(h,{variant:"contained",color:"primary",onClick:async()=>{if(e.trim()||r){l(!0),m(""),b("");try{const t=(await te(Z(Te,"rooms"))).docs.map((e=>({id:e.id,...e.data()}))),n=Z(Te,"fcmTokens"),a=(await te(n)).docs.reduce(((e,t)=>{const n=t.data();return n.roomId&&n.token&&(e[n.roomId]||(e[n.roomId]=[]),e[n.roomId].push(n.token)),e}),{});await Promise.all(t.map((async t=>{const n={roomId:t.id,message:r?`Hej ${t.occupantName||"beboer"}! Din saldo er ${t.balance} kr. Venligst betal inden månedens udgang.`:e,timestamp:new Date,read:!1,type:r?"payment":"announcement"};if(await oe(Z(Te,"notifications"),n),a[t.id]&&a[t.id].length>0)try{if(!(await fetch("https://us-central1-dorm-sales-app.cloudfunctions.net/sendPushNotification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tokens:a[t.id],title:r?"Betalingspåmindelse":"Ny Besked",body:n.message,data:{type:n.type,roomId:t.id}})})).ok)throw new Error("Failed to send push notification")}catch(i){}}))),b("Beskeder sendt til alle beboere"),i("")}catch(t){m("Fejl ved afsendelse af beskeder: "+t.message)}finally{l(!1)}}else m("Beskeden kan ikke være tom")},disabled:s||!e.trim()&&!r,children:s?t.jsx(f,{size:24}):"Send Besked"})]}),t.jsx(I,{sx:{my:3}}),t.jsx(c,{variant:"body2",color:"text.secondary",children:"Push beskeder vil blive sendt til alle beboere der har installeret app'en og accepteret notifikationer. Andre beboere kan se beskederne når de åbner app'en."})]})};var da={},ua=o;Object.defineProperty(da,"__esModule",{value:!0});var pa=da.default=void 0,ha=ua(Fe()),ma=t;pa=da.default=(0,ha.default)((0,ma.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");var fa={},ga=o;Object.defineProperty(fa,"__esModule",{value:!0});var xa=fa.default=void 0,ba=ga(Fe()),va=t;xa=fa.default=(0,ba.default)((0,va.jsx)("path",{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"}),"RestartAlt");const ya=()=>{const[e,i]=a.useState(!1),[r,o]=a.useState(""),[s,l]=a.useState(""),[d,p]=a.useState(null),[m,k]=a.useState(!1),[S,I]=a.useState(!1),A=async()=>{i(!0),o(""),l("");try{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1),n=new Date(e.getFullYear(),e.getMonth()+1,0,23,59,59),a=Z(Te,"purchases"),i=Q(a,ke("timestamp",">=",Se.fromDate(t)),ke("timestamp","<=",Se.fromDate(n))),r=(await te(i)).docs.map((e=>({id:e.id,...e.data()}))),o={totalSales:0,productSales:{},roomSales:{}};r.forEach((e=>{o.totalSales+=e.amount,o.productSales[e.productName]||(o.productSales[e.productName]={quantity:0,total:0}),o.productSales[e.productName].quantity+=1,o.productSales[e.productName].total+=e.amount,o.roomSales[e.roomId]||(o.roomSales[e.roomId]={quantity:0,total:0}),o.roomSales[e.roomId].quantity+=1,o.roomSales[e.roomId].total+=e.amount})),p(o),l("Rapport genereret")}catch(e){o("Fejl ved generering af rapport")}finally{i(!1)}},O=async()=>{I(!0),o(""),l("");try{const e=Ie(Te),t=Z(Te,"rooms"),n=await te(t);n.docs.forEach((t=>{const n=ne(Te,"rooms",t.id);e.update(n,{balance:0,lastReset:Se.now()})}));const a=ne(Z(Te,"resets"));e.set(a,{timestamp:Se.now(),type:"monthly",roomCount:n.size}),await e.commit(),l("Alle saldi er nulstillet"),k(!1),d&&A()}catch(e){o("Fejl ved nulstilling af saldi: "+e.message)}finally{I(!1)}},N=()=>t.jsxs(C,{open:m,onClose:()=>!S&&k(!1),children:[t.jsx(P,{children:"Bekræft Nulstilling"}),t.jsx(D,{children:t.jsx(T,{children:"Er du sikker på at du vil nulstille alle saldi? Denne handling kan ikke fortrydes. Det anbefales at generere en rapport først."})}),t.jsxs(M,{children:[t.jsx(h,{onClick:()=>k(!1),disabled:S,children:"Annuller"}),t.jsx(h,{onClick:O,color:"error",disabled:S,startIcon:S?t.jsx(f,{size:20}):t.jsx(xa,{}),children:S?"Nulstiller...":"Nulstil Alle Saldi"})]})]});return t.jsxs(u,{sx:{p:3},children:[t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3},children:[t.jsx(c,{variant:"h6",children:"Månedlig Rapport"}),t.jsxs(n,{children:[t.jsx(h,{variant:"outlined",color:"error",startIcon:t.jsx(xa,{}),onClick:()=>k(!0),disabled:e||S,sx:{mr:2},children:"Nulstil Saldi"}),t.jsx(h,{variant:"contained",onClick:A,disabled:e||S,children:"Generer Rapport"})]})]}),r&&t.jsx(g,{severity:"error",sx:{mb:2},children:r}),s&&t.jsx(g,{severity:"success",sx:{mb:2},children:s}),e&&t.jsx(n,{sx:{display:"flex",justifyContent:"center",p:3},children:t.jsx(f,{})}),d&&t.jsxs(n,{children:[t.jsx(x,{sx:{mb:3},children:t.jsxs(b,{children:[t.jsx(v,{children:t.jsxs(y,{children:[t.jsx(j,{children:"Produkt"}),t.jsx(j,{align:"right",children:"Antal"}),t.jsx(j,{align:"right",children:"Total (DKK)"})]})}),t.jsxs(w,{children:[Object.entries(d.productSales).map((([e,n])=>t.jsxs(y,{children:[t.jsx(j,{children:e}),t.jsx(j,{align:"right",children:n.quantity}),t.jsx(j,{align:"right",children:n.total})]},e))),t.jsxs(y,{children:[t.jsx(j,{sx:{fontWeight:"bold"},children:"Total"}),t.jsx(j,{align:"right",sx:{fontWeight:"bold"},children:Object.values(d.productSales).reduce(((e,t)=>e+t.quantity),0)}),t.jsx(j,{align:"right",sx:{fontWeight:"bold"},children:d.totalSales})]})]})]})}),t.jsx(h,{variant:"contained",color:"primary",startIcon:t.jsx(pa,{}),onClick:()=>{if(!d)return;const e=[];e.push("Rapport for "+(new Date).toLocaleDateString("da-DK",{month:"long",year:"numeric"})),e.push(""),e.push("Produkt Salg"),e.push("Produkt,Antal,Total (DKK)"),Object.entries(d.productSales).forEach((([t,n])=>{e.push(`${t},${n.quantity},${n.total}`)})),e.push(""),e.push("Værelse Salg"),e.push("Værelse,Antal Køb,Total (DKK)"),Object.entries(d.roomSales).forEach((([t,n])=>{e.push(`${t},${n.quantity},${n.total}`)})),e.push(""),e.push(`Total Salg,${d.totalSales} DKK`);const t=e.join("\n"),n=new Blob([t],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download=`salgsrapport_${(new Date).toISOString().slice(0,7)}.csv`,a.click()},fullWidth:!0,children:"Download CSV"})]}),t.jsx(N,{})]})};var ja={},wa=o;Object.defineProperty(ja,"__esModule",{value:!0});var ka=ja.default=void 0,Sa=wa(Fe()),Ia=t;ka=ja.default=(0,Sa.default)((0,Ia.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2z"}),"ShoppingBag");var Ca={},Pa=o;Object.defineProperty(Ca,"__esModule",{value:!0});var Da=Ca.default=void 0,Ta=Pa(Fe()),Ma=t;Da=Ca.default=(0,Ta.default)((0,Ma.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.88 15.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22"}),"Paid");const Aa=()=>{const[e,i]=a.useState([]),[r,o]=a.useState(!0),[s,p]=a.useState(""),[h,m]=a.useState(!1),[x,b]=a.useState({total:0,count:0}),v=async()=>{try{const e=new Date;e.setHours(0,0,0,0);const t=Z(Te,"purchases"),n=Q(t,ke("timestamp",">=",Se.fromDate(e))),a=await te(n);let i=0,r=0;a.forEach((e=>{const t=e.data();i+=t.amount,r++})),b({total:i,count:r})}catch(e){}},y=a.useCallback((async(e=!1)=>{try{e||o(!0),p(""),await Promise.all([(async()=>{const e=Z(Te,"purchases"),t=Q(e,ce("timestamp","desc"),le(5)),n=await te(t),a=await Promise.all(n.docs.map((async e=>{var t;const n=e.data(),a=ne(Te,"rooms",n.roomId),i=(await ae(a)).data()||{};return{id:e.id,...n,occupantName:i.occupantName||"Ukendt beboer",timestamp:(null==(t=n.timestamp)?void 0:t.toDate())||new Date}})));i(a)})(),v()]),p("")}catch(t){p("Kunne ikke indlæse seneste køb")}finally{o(!1),m(!1)}}),[]);a.useEffect((()=>{y()}),[y]);return r?t.jsx(n,{sx:{display:"flex",justifyContent:"center",p:3},children:t.jsx(f,{})}):s?t.jsx(u,{sx:{p:3},children:t.jsx(g,{severity:"error",children:s})}):t.jsxs(u,{sx:{p:3},children:[t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3},children:[t.jsx(c,{variant:"h6",children:"Seneste Aktivitet"}),t.jsx(A,{title:"Opdater liste",children:t.jsx(l,{onClick:async()=>{m(!0),await y(!0)},disabled:h,sx:{animation:h?"spin 1s linear infinite":"none","@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}},children:t.jsx(gt,{})})})]}),t.jsx(O,{sx:{mb:3,bgcolor:"#f8fafc"},children:t.jsx(N,{children:t.jsxs(d,{container:!0,spacing:2,alignItems:"center",children:[t.jsx(d,{item:!0,children:t.jsx(E,{sx:{bgcolor:"#4CAF50",width:56,height:56},children:t.jsx(Da,{sx:{fontSize:32}})})}),t.jsxs(d,{item:!0,xs:!0,children:[t.jsx(c,{variant:"h6",gutterBottom:!0,children:"Dagens Salg"}),t.jsx(c,{variant:"body2",color:"text.secondary",children:(new Date).toLocaleDateString("da-DK",{weekday:"long",day:"numeric",month:"long"})})]}),t.jsxs(d,{item:!0,children:[t.jsxs(c,{variant:"h4",component:"div",sx:{color:"#2E7D32"},children:[x.total," kr"]}),t.jsxs(c,{variant:"body2",color:"text.secondary",align:"right",children:[x.count," køb i dag"]})]})]})})}),t.jsx(c,{variant:"subtitle1",gutterBottom:!0,sx:{mb:2},children:"Seneste 5 Køb"}),0===e.length?t.jsx(c,{color:"text.secondary",sx:{p:2,textAlign:"center"},children:"Ingen køb at vise"}):t.jsx(F,{children:e.map(((e,n)=>t.jsxs(B.Fragment,{children:[n>0&&t.jsx(I,{variant:"inset",component:"li"}),t.jsxs(K,{alignItems:"flex-start",children:[t.jsx(_,{children:t.jsx(E,{sx:{bgcolor:"#5A78FF"},children:t.jsx(ka,{})})}),t.jsx(W,{primary:t.jsxs(c,{component:"span",variant:"subtitle1",color:"text.primary",children:["Værelse ",e.roomId," - ",e.occupantName]}),secondary:t.jsxs(B.Fragment,{children:[t.jsxs(c,{component:"span",variant:"body2",color:"text.primary",children:[e.productName," - ",e.amount," kr"]})," — ",new Date(e.timestamp).toLocaleString("da-DK",{weekday:"long",hour:"2-digit",minute:"2-digit",day:"numeric",month:"long"})]})})]})]},e.id)))})]})},Oa=()=>{const[e,i]=a.useState(""),[r,o]=a.useState(!0),[s,l]=a.useState(!1),[d,m]=a.useState(""),[x,b]=a.useState("");a.useEffect((()=>{(async()=>{try{const e=ne(Te,"settings","admin"),t=await ae(e);t.exists()&&i(t.data().mobilepayLink||"")}catch(e){m("Kunne ikke indlæse indstillinger")}finally{o(!1)}})()}),[]);return r?t.jsx(n,{sx:{display:"flex",justifyContent:"center",p:3},children:t.jsx(f,{})}):t.jsxs(u,{sx:{p:3},children:[t.jsx(c,{variant:"h6",gutterBottom:!0,children:"Admin Indstillinger"}),d&&t.jsx(g,{severity:"error",sx:{mb:2},children:d}),x&&t.jsx(g,{severity:"success",sx:{mb:2},children:x}),t.jsxs(n,{sx:{mt:3},children:[t.jsx(c,{variant:"subtitle1",gutterBottom:!0,children:"MobilePay Link"}),t.jsx(c,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"Dette link bruges når beboere skal betale via MobilePay. Formatet skal være et gyldigt MobilePay-link."}),t.jsx(p,{fullWidth:!0,label:"MobilePay Link",value:e,onChange:e=>i(e.target.value),placeholder:"f.eks. https://mobilepay.dk/box/...",sx:{mb:3}}),t.jsx(n,{sx:{display:"flex",justifyContent:"flex-end"},children:t.jsx(h,{variant:"contained",color:"primary",onClick:async()=>{if(e.trim()){l(!0),m(""),b("");try{const t=ne(Te,"settings","admin");await ie(t,{mobilepayLink:e.trim(),lastUpdated:new Date}),b("Indstillinger gemt")}catch(t){m("Kunne ikke gemme indstillinger")}finally{l(!1)}}else m("MobilePay link kan ikke være tomt")},disabled:s,children:s?t.jsx(f,{size:24}):"Gem Ændringer"})})]})]})},Na=()=>{const[e,i]=a.useState(!1),[r,o]=a.useState(""),[s,l]=a.useState(""),[d,m]=a.useState(0),f=z(),x=()=>{"admin123"===r?(i(!0),l("")):l("Forkert adgangskode")};return e?t.jsxs(n,{sx:{minHeight:"100vh",bgcolor:"#f5f6fa",p:3},children:[t.jsxs(u,{sx:{mb:3,p:2},children:[t.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[t.jsx(c,{variant:"h5",component:"h1",children:"Admin Panel"}),t.jsx(h,{variant:"outlined",color:"primary",onClick:()=>{i(!1),o(""),f("/")},children:"Log ud"})]}),t.jsxs(L,{value:d,onChange:(e,t)=>{m(t)},sx:{borderBottom:1,borderColor:"divider","& .MuiTabs-flexContainer":{flexWrap:"wrap"}},children:[t.jsx(R,{label:"Produkter"}),t.jsx(R,{label:"Beskeder"}),t.jsx(R,{label:"Rapporter"}),t.jsx(R,{label:"Seneste Køb"}),t.jsx(R,{label:"Indstillinger"})]})]}),t.jsxs(n,{sx:{mt:3},children:[0===d&&t.jsx(ca,{}),1===d&&t.jsx(la,{}),2===d&&t.jsx(ya,{}),3===d&&t.jsx(Aa,{}),4===d&&t.jsx(Oa,{})]})]}):t.jsx(n,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",bgcolor:"#f5f6fa",p:2},children:t.jsxs(u,{elevation:3,sx:{p:4,width:"100%",maxWidth:400,display:"flex",flexDirection:"column",gap:2},children:[t.jsx(c,{variant:"h5",component:"h1",gutterBottom:!0,align:"center",children:"Admin Login"}),s&&t.jsx(g,{severity:"error",children:s}),t.jsx(p,{fullWidth:!0,type:"password",label:"Adgangskode",value:r,onChange:e=>o(e.target.value),onKeyPress:e=>"Enter"===e.key&&x()}),t.jsx(h,{variant:"contained",color:"primary",fullWidth:!0,onClick:x,sx:{mt:2},children:"Log ind"})]})})},Ea=()=>{const e=z(),[n,i]=a.useState(!0);return a.useEffect((()=>{(()=>{const t=navigator.userAgent||navigator.vendor||window.opera,n=/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(t),a=window.innerWidth<=768,r="ontouchstart"in window||navigator.maxTouchPoints>0;e(n||a&&r?"/enhanced-mobile":"/",{replace:!0}),i(!1)})()}),[e]),n?t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",gap:"1rem",padding:"1rem",textAlign:"center"},children:[t.jsx("div",{children:"Indlæser..."}),t.jsx("div",{style:{fontSize:"0.875rem",color:"#666"},children:"Omdirigerer til den rigtige visning..."})]}):null};function Fa(){return t.jsx($,{children:t.jsxs(q,{children:[t.jsx(U,{path:"/detect",element:t.jsx(Ea,{})}),t.jsx(U,{path:"/PWAVIEW",element:t.jsx(ht,{})}),t.jsx(U,{path:"/enhanced-mobile",element:t.jsx(sa,{})}),t.jsx(U,{path:"/admin",element:t.jsx(Na,{})}),t.jsxs(U,{path:"/",element:t.jsx(De,{}),children:[t.jsx(U,{index:!0,element:t.jsx($e,{})}),t.jsx(U,{path:"room/:roomId",element:t.jsx(ot,{})})]}),t.jsx(U,{path:"*",element:t.jsx(G,{to:"/detect",replace:!0})})]})})}Ce(document.getElementById("root")).render(t.jsx(a.StrictMode,{children:t.jsx(Fa,{})}));
