import{j as e,B as h,O as je,i as ye,g as ve,r as d,q as Q,c as F,o as he,a as L,u as te,C as G,I as oe,d as we,T as n,G as X,P as D,b as Se,e as I,f as z,h as me,s as ce,k as Pe,l as q,m as ke,n as Y,p as Re,t as T,v as Ce,w as j,x as Ie,y as De,z as Be,A as Ee,D as Fe,E as Ae,F as le,H as We,R as Te,J as E,N as Le,K as Ne}from"./vendor-DAzvlyhM.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&m(p)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();const Me=()=>e.jsx(h,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh",bgcolor:"#1a1a1a"},children:e.jsx(h,{component:"main",sx:{flexGrow:1},children:e.jsx(je,{})})}),ze={apiKey:"AIzaSyBfzh_QQFaKhGXLuVJXbSVkBuOZOvXLBRg",authDomain:"fridge6sal-5b0f6.firebaseapp.com",projectId:"fridge6sal-5b0f6",storageBucket:"fridge6sal-5b0f6.appspot.com",messagingSenderId:"1091624932154",appId:"1:1091624932154:web:b5e0e3d9c5c9b5e5d8e5c5"},Oe=ye(ze),b=ve(Oe),Ve=(t,c=[],o={})=>{const[m,a]=d.useState([]),[i,p]=d.useState(!0),u=d.useRef(new Map),{realtime:x=!1}=o;return d.useEffect(()=>{const S=Q(F(b,t),...c),k=`${t}-${c.join("-")}`;u.current.has(k)&&(a(u.current.get(k)),p(!1));const R=async()=>{try{const y=await L(S),r=[];y.forEach(s=>{r.push({id:s.id,...s.data()})}),a(r),u.current.set(k,r),p(!1)}catch(y){console.error("Error fetching data:",y),p(!1)}};if(x){const y=he(S,r=>{const s=[];r.forEach(f=>{s.push({id:f.id,...f.data()})}),a(s),u.current.set(k,s),p(!1)});return()=>y()}else R()},[t,c.join("-"),x]),{data:m,loading:i}},$e=()=>{const t=te(),{data:c,loading:o}=Ve("rooms",[],{realtime:!1}),m=d.useMemo(()=>Math.max(...c.map(u=>u.balance||0)),[c]),a=d.useMemo(()=>c.reduce((u,x)=>(u[x.id]=x,u),{}),[c]),i=u=>{t(`/room/${u}`)},p=({roomId:u})=>{const x=a[u]||{occupantName:"",balance:0},S=x.balance===m&&x.balance>0;return e.jsxs(D,{elevation:3,sx:{p:3,height:"100%",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:"12px",transition:"all 0.2s ease-in-out",position:"relative","&:hover":{transform:"translateY(-4px)",boxShadow:"0 8px 16px rgba(0,0,0,0.1)"}},onClick:()=>i(u),children:[S&&e.jsx(Se,{sx:{position:"absolute",top:-10,right:-10,color:"#ffd700",fontSize:"2rem",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))",transform:"rotate(12deg)"}}),e.jsx(n,{variant:"h4",component:"div",sx:{color:"#2c3e50",fontWeight:"bold",mb:1},children:u}),e.jsx(n,{variant:"body1",sx:{color:"#666",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",px:2},children:x.occupantName||"Tomt værelse"})]})};return e.jsxs(G,{maxWidth:!1,sx:{py:3,px:{xs:2,sm:3},minHeight:"100vh",bgcolor:"#f5f6fa",position:"relative",overflow:"hidden"},children:[e.jsx(oe,{onClick:()=>t("/admin"),sx:{position:"absolute",top:16,right:16,color:"#2c3e50",opacity:.7,"&:hover":{opacity:1}},children:e.jsx(we,{})}),e.jsx(n,{variant:"h3",component:"h1",align:"center",sx:{color:"#2c3e50",mb:1,fontWeight:"bold"},children:"DormDrinks 6.sal"}),e.jsx(n,{variant:"subtitle1",component:"div",align:"center",sx:{color:"#666",mb:4},children:"Beer, Soda & Beyond"}),e.jsx(X,{container:!0,spacing:2,sx:{width:"auto",mx:-1,mt:0},children:Array.from({length:28},(u,x)=>x+601).map(u=>e.jsx(X,{item:!0,xs:6,sm:4,md:3,sx:{height:"100%"},children:e.jsx(p,{roomId:u.toString()})},u))})]})},ee=async t=>{try{console.log("Fetching room:",t);const c=I(b,"rooms",t),o=await z(c),m=o.exists()?{id:o.id,...o.data()}:null;return console.log("Room data:",m),m}catch(c){throw console.error("Error fetching room:",c),c}},He=async(t,c)=>{try{console.log("Updating room:",t,"with data:",c);const o=I(b,"rooms",t);await me(o,c),console.log("Room updated successfully")}catch(o){throw console.error("Error updating room:",o),o}},Ke=async()=>{try{console.log("Fetching products...");const t=F(b,"products"),o=(await L(t)).docs.map(m=>({id:m.id,...m.data()}));return console.log("Products fetched:",o),o}catch(t){throw console.error("Error fetching products:",t),t}},_e=async t=>{var c;try{console.log("Adding purchase:",t);const o=F(b,"purchases"),m={...t,timestamp:ce()};console.log("Creating purchase record..."),await Pe(o,m),console.log("Updating room balance...");const a=I(b,"rooms",t.roomId),p=((c=(await z(a)).data())==null?void 0:c.balance)||0;await me(a,{balance:p+t.amount,lastPurchase:{productName:t.productName,amount:t.amount,timestamp:ce()}}),console.log("Purchase completed successfully")}catch(o){throw console.error("Error adding purchase:",o),o}},pe=async()=>{try{console.log("Initializing default data...");const t=F(b,"products");if((await L(t)).empty){console.log("Products collection is empty, initializing...");const a=[{id:"beer",name:"Øl",price:7},{id:"soda",name:"Sodavand",price:5},{id:"snacks",name:"Snacks",price:10},{id:"water",name:"Vand",price:3}];for(const i of a)await q(I(t,i.id),{name:i.name,price:i.price});console.log("Default products initialized")}for(let a=601;a<=628;a++){const i=I(b,"rooms",a.toString());(await z(i)).exists()||await q(i,{occupantName:"",balance:0,lastPurchase:null})}const o=I(b,"adminConfig","general");(await z(o)).exists()||await q(o,{mobilePayPhoneNumber:"",adminPassword:"admin123"})}catch(t){throw console.error("Error initializing default data:",t),t}},J=[{id:"beer",name:"Øl",price:7},{id:"soda",name:"Sodavand",price:5},{id:"snacks",name:"Snacks",price:10},{id:"water",name:"Vand",price:3}],Ue=()=>{var R,y;const{roomId:t}=ke(),c=te(),[o,m]=d.useState({occupantName:"",balance:0}),[a,i]=d.useState(J),[p,u]=d.useState(!0);d.useEffect(()=>{(async()=>{try{console.log("Loading data for room:",t),await pe();const[s,f]=await Promise.all([ee(t),Ke()]);console.log("Room data loaded:",s),console.log("Products loaded:",f),m(s||{occupantName:"",balance:0}),i(f.length>0?f:J)}catch(s){console.error("Error loading data:",s),i(J)}finally{u(!1)}})()},[t]);const x=async r=>{try{console.log("Updating occupant name to:",r),await He(t,{occupantName:r}),m(s=>({...s,occupantName:r})),console.log("Occupant name updated successfully")}catch(s){console.error("Error updating occupant name:",s)}},S=async r=>{try{console.log("Starting purchase for product:",r);const s=a.find(B=>B.id===r);if(!s){console.error("Product not found:",r);return}console.log("Product found:",s),console.log("Current room state:",o);const f=(o.balance||0)+s.price,w=new Date;console.log("New balance will be:",f),m(B=>({...B,balance:f,lastPurchase:{productName:s.name,amount:s.price,timestamp:w}})),console.log("Making purchase in Firebase..."),await _e({roomId:t,productId:r,productName:s.name,amount:s.price}),console.log("Purchase completed successfully")}catch(s){console.error("Error making purchase:",s);const f=await ee(t);m(f||{occupantName:"",balance:0})}},k=r=>r?(r instanceof Date?r:r.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit"}):"";return e.jsxs(h,{sx:{bgcolor:"#f5f6fa",minHeight:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs(G,{maxWidth:"sm",sx:{py:4,flex:1},children:[e.jsxs(h,{sx:{display:"flex",flexDirection:"column",alignItems:"center",mb:6},children:[e.jsxs(n,{variant:"h3",component:"h1",sx:{color:"#2c3e50",fontWeight:"bold",mb:2},children:["Værelse ",t]}),e.jsx(h,{sx:{position:"relative",width:"100%",maxWidth:300},children:e.jsx(Y,{variant:"outlined",placeholder:"Klik for at tilføje beboer",value:o.occupantName,onChange:r=>x(r.target.value),sx:{width:"100%","& .MuiOutlinedInput-root":{fontSize:"1.2rem",textAlign:"center","& fieldset":{borderColor:"rgba(0,0,0,0.2)"},"&:hover fieldset":{borderColor:"#e74c3c"},"&.Mui-focused fieldset":{borderColor:"#e74c3c"},"& input":{textAlign:"center",color:"#2c3e50","&::placeholder":{color:"#666",opacity:.7}}}},InputProps:{endAdornment:e.jsx(Re,{sx:{color:"#666",opacity:.7,mr:1,transition:"all 0.2s",".MuiOutlinedInput-root:hover &":{color:"#e74c3c",opacity:1}}})}})})]}),e.jsxs(D,{elevation:3,sx:{p:4,mb:4,textAlign:"center",bgcolor:o.balance>0?"#fff3e0":"white",borderRadius:3},children:[e.jsx(n,{variant:"h6",sx:{color:"#666",mb:1},children:"SALDO"}),e.jsxs(n,{variant:"h2",sx:{color:o.balance>0?"#e74c3c":"#2c3e50",fontWeight:"bold"},children:[(R=o.balance)==null?void 0:R.toFixed(2)," kr"]})]}),o.lastPurchase&&e.jsxs(D,{elevation:3,sx:{bgcolor:"white",p:3,mb:4,borderRadius:3},children:[e.jsx(n,{variant:"overline",sx:{color:"#666",display:"block",mb:1,fontSize:"0.85rem"},children:"SENESTE KØB"}),e.jsxs(h,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(n,{variant:"h6",sx:{color:"#2c3e50",fontWeight:"bold"},children:o.lastPurchase.productName}),e.jsxs(h,{sx:{textAlign:"right"},children:[e.jsxs(n,{sx:{color:"#e74c3c",fontSize:"1.1rem",fontWeight:"bold"},children:[(y=o.lastPurchase.amount)==null?void 0:y.toFixed(2)," kr"]}),e.jsx(n,{sx:{color:"#666",fontSize:"0.9rem"},children:k(o.lastPurchase.timestamp)})]})]})]}),e.jsx(X,{container:!0,spacing:2,children:a.map(r=>e.jsx(X,{item:!0,xs:6,children:e.jsxs(T,{fullWidth:!0,variant:"contained",onClick:()=>S(r.id),sx:{bgcolor:"#e74c3c",py:2,borderRadius:2,fontSize:"1.1rem",fontWeight:"bold",boxShadow:"0 2px 8px rgba(231,76,60,0.3)",display:"flex",flexDirection:"column","&:hover":{bgcolor:"#c0392b",transform:"translateY(-2px)",boxShadow:"0 4px 12px rgba(231,76,60,0.4)"}},children:[e.jsx(h,{children:r.name}),e.jsxs(n,{variant:"body2",sx:{opacity:.9,fontSize:"0.9rem",fontWeight:"normal"},children:[r.price," kr"]})]})},r.id))})]}),e.jsx(h,{sx:{p:2,borderTop:"1px solid rgba(0,0,0,0.1)",bgcolor:"white"},children:e.jsx(G,{maxWidth:"sm",children:e.jsx(T,{fullWidth:!0,variant:"text",onClick:()=>c("/"),startIcon:e.jsx(Ce,{}),sx:{color:"#666",py:1.5,fontSize:"1rem","&:hover":{bgcolor:"rgba(0,0,0,0.05)",color:"#2c3e50"}},children:"Tilbage til oversigt"})})})]})},Z=j(G)({minHeight:"100vh",backgroundColor:"#ffffff",color:"#333333",display:"flex",flexDirection:"column",padding:"16px",gap:"24px"}),Qe=j(h)({display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #e0e0e0"}),Ge=j(Y)({"& .MuiInputBase-input":{color:"#333333",backgroundColor:"#f0f0f0",borderRadius:"4px",padding:"8px 12px"},"& .MuiInput-underline:before":{borderBottom:"none"},"& .MuiInput-underline:after":{borderBottom:"none"}}),Xe=j(T)({backgroundColor:"#5BB9FD",color:"white",padding:"16px",borderRadius:"8px",fontSize:"16px",textTransform:"none",marginTop:"40px",marginBottom:"40px","&:hover":{backgroundColor:"#4999d6"}}),de=j(D)({backgroundColor:"#f5f5f5",padding:"16px",borderRadius:"8px",marginBottom:"16px",boxShadow:"none",border:"1px solid #e0e0e0"}),ue=j(n)({fontSize:"18px",fontWeight:500,marginBottom:"12px",color:"#333333"}),Ye=()=>{var y;const[t,c]=d.useState({occupantName:"",balance:0,lastPurchase:null,recentPurchases:[]}),[o,m]=d.useState(localStorage.getItem("selectedRoom")),[a,i]=d.useState(!0),[p,u]=d.useState(null),x=r=>r?(r instanceof Date?r:r.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit"}):"";d.useEffect(()=>{(async()=>{if(o)try{i(!0),console.log("Loading data for room:",o);const s=await ee(o);console.log("Room data loaded:",s);const f=F(b,"rooms",o,"purchases"),w=Q(f,Ie("timestamp","desc"),De(5)),B=await L(w),O=[];B.forEach($=>{const N=$.data();O.push({id:$.id,...N,timestamp:N.timestamp})});const V={...s,recentPurchases:O};console.log("Updated room data:",V),c(V)}catch(s){console.error("Error loading data:",s),u(s)}finally{i(!1)}})()},[o]);const S=r=>{const s=r.target.value;m(s),localStorage.setItem("selectedRoom",s)},k=async()=>{const r=I(b,"adminConfig","general"),s=await z(r);if(s.exists()){const{mobilePayPhoneNumber:f}=s.data(),w=(t==null?void 0:t.balance)||0;window.location.href=`mobilepay://send?phone=${f}&amount=${w}&comment=Værelse ${o}`}},R=Array.from({length:28},(r,s)=>String(601+s));return o?a?e.jsx(Z,{children:e.jsx(n,{variant:"body1",sx:{textAlign:"center",mt:4},children:"Indlæser..."})}):e.jsxs(Z,{children:[e.jsxs(Qe,{children:[e.jsxs(n,{variant:"h6",sx:{color:"#333333"},children:["Værelse ",o]}),e.jsx(Ge,{variant:"standard",placeholder:"Beboernavn",value:(t==null?void 0:t.occupantName)||"",disabled:!0})]}),e.jsxs(h,{sx:{textAlign:"center",my:4},children:[e.jsx(n,{variant:"body1",sx:{mb:1,color:"#666666"},children:"Samlet saldo:"}),e.jsxs(n,{variant:"h4",sx:{color:"#333333"},children:[((y=t==null?void 0:t.balance)==null?void 0:y.toFixed(2))||"0.00"," kr"]})]}),e.jsx(Xe,{fullWidth:!0,variant:"contained",onClick:k,disabled:!(t!=null&&t.balance),children:"Betal med MobilePay"}),e.jsxs(de,{children:[e.jsx(ue,{children:"Seneste 5 køb"}),p&&e.jsxs(n,{variant:"body2",color:"error",children:["Fejl ved hentning af køb: ",p.message]}),t.lastPurchase&&e.jsxs(h,{sx:{mb:2,pb:2,borderBottom:"1px solid #e0e0e0"},children:[e.jsxs(n,{variant:"body2",sx:{display:"flex",justifyContent:"space-between",color:"#333333"},children:[e.jsxs("span",{children:["Seneste køb: ",t.lastPurchase.productName]}),e.jsxs("span",{children:["Pris: ",t.lastPurchase.amount," kr"]})]}),t.lastPurchase.timestamp&&e.jsx(n,{variant:"caption",sx:{display:"block",mt:.5,color:"#666666"},children:x(t.lastPurchase.timestamp)})]}),t.recentPurchases&&t.recentPurchases.length>0&&t.recentPurchases.map(r=>e.jsxs(h,{sx:{mb:2,pb:2,borderBottom:"1px solid #e0e0e0","&:last-child":{borderBottom:"none"}},children:[e.jsxs(n,{variant:"body2",sx:{display:"flex",justifyContent:"space-between",color:"#333333"},children:[e.jsxs("span",{children:["Produkt: ",r.productName]}),e.jsxs("span",{children:["Pris: ",r.amount," kr"]})]}),r.timestamp&&e.jsx(n,{variant:"caption",sx:{display:"block",mt:.5,color:"#666666"},children:x(r.timestamp)})]},r.id)),!t.lastPurchase&&(!t.recentPurchases||t.recentPurchases.length===0)&&e.jsx(n,{variant:"body2",sx:{color:"#666666"},children:"Ingen seneste køb"})]}),e.jsxs(de,{children:[e.jsx(ue,{children:"Påmindelser"}),e.jsx(n,{variant:"body2",sx:{color:"#333333"},children:"Husk køkkenmøde - Torsdag d. 15. juni"})]})]}):e.jsx(Z,{children:e.jsxs(h,{sx:{textAlign:"center",mt:4},children:[e.jsx(n,{variant:"h5",gutterBottom:!0,children:"Velkommen"}),e.jsx(n,{gutterBottom:!0,sx:{mb:3,color:"#666666"},children:"Vælg dit værelse for at fortsætte"}),e.jsxs(Y,{select:!0,fullWidth:!0,label:"Værelse",onChange:S,SelectProps:{native:!0},sx:{backgroundColor:"#f0f0f0",borderRadius:"8px","& .MuiInputBase-input":{color:"#333333"},"& .MuiInputLabel-root":{color:"#666666"}},children:[e.jsx("option",{value:"",children:"Vælg værelse"}),R.map(r=>e.jsx("option",{value:r,children:r},r))]})]})})},U=j(h)(({theme:t})=>({minHeight:"100vh",width:"100%",maxWidth:"100%",margin:0,padding:0,backgroundColor:"#f5f6fa",overflowX:"hidden",position:"relative"})),qe=j(h)(({theme:t})=>({position:"relative",padding:"24px 16px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#fff",borderRadius:"0 0 24px 24px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.05)",marginBottom:24,width:"100%","&::after":{content:'""',position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:"40%",height:"4px",background:"linear-gradient(90deg, #5A78FF 0%, #83A4FF 100%)",borderRadius:"2px",opacity:.7}})),Je=j(h)(({theme:t})=>({padding:"0 16px",width:"100%",maxWidth:"100%",margin:"0 auto"})),Ze=j(D)(({theme:t})=>({padding:"20px",borderRadius:"12px",backgroundColor:"#f8f9fa",marginTop:"16px",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",transition:"transform 0.2s ease-in-out","&:active":{transform:"scale(0.98)"}})),et=j(D)(({theme:t})=>({padding:"16px",marginTop:"16px",marginBottom:"16px",borderRadius:"12px",backgroundColor:"#F8F9FF",border:"1px solid rgba(90, 120, 255, 0.1)"})),tt=j(D)(({theme:t})=>({padding:"12px",marginBottom:"8px",borderRadius:"8px",backgroundColor:"#ffffff",display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"})),ot=j(oe)(({theme:t})=>({position:"absolute",right:"16px",top:"16px",backgroundColor:"rgba(255,255,255,0.9)","&:hover":{backgroundColor:"rgba(255,255,255,1)"}})),rt=j(D)(({theme:t})=>({position:"fixed",bottom:0,left:0,right:0,padding:"16px",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#1976d2",color:"white",zIndex:1e3,borderRadius:"16px 16px 0 0"})),nt=()=>{var ne;const[t,c]=d.useState({occupantName:"",balance:0,lastPurchase:null,recentPurchases:[]}),[o,m]=d.useState(localStorage.getItem("selectedRoom")),[a,i]=d.useState(!0),[p,u]=d.useState(null),[x,S]=d.useState(!1),[k,R]=d.useState({open:!1,message:"",severity:"info"}),[y,r]=d.useState(!1),[s,f]=d.useState(null),[w,B]=d.useState(!1);d.useState([]);const O=Array.from({length:28},(l,g)=>String(601+g)),V=l=>{const g=l.target.value;m(g),localStorage.setItem("selectedRoom",g)},$=l=>l?(l instanceof Date?l:l.toDate()).toLocaleString("da-DK",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"}):"";d.useEffect(()=>{let l=null;return(async()=>{if(o)try{i(!0),console.log("Loading data for room:",o),await pe();const v=I(b,"rooms",o);l=he(v,async P=>{if(P.exists()){const H={id:P.id,...P.data()},C=F(b,"purchases"),A=Q(C,le("roomId","==",o));try{const W=await L(A),M=[];W.forEach(K=>{const _=K.data();M.push({id:K.id,..._,timestamp:_.timestamp})});const be=M.sort((K,_)=>{var ae,ie;return((ae=_.timestamp)==null?void 0:ae.seconds)-((ie=K.timestamp)==null?void 0:ie.seconds)}).slice(0,3),se={...H,recentPurchases:be};console.log("Updated room data:",se),c(se)}catch(W){console.error("Error fetching purchases:",W)}}},P=>{console.error("Room listener error:",P),u(P)})}catch(v){console.error("Error setting up listener:",v),u(v)}finally{i(!1)}})(),()=>{l&&l()}},[o]);const N=async()=>{S(!0);try{const l=F(b,"purchases"),g=Q(l,le("roomId","==",o)),v=await L(g),P=[];v.forEach(C=>{const A=C.data();P.push({id:C.id,...A,timestamp:A.timestamp})});const H=P.sort((C,A)=>{var W,M;return((W=A.timestamp)==null?void 0:W.seconds)-((M=C.timestamp)==null?void 0:M.seconds)}).slice(0,3);c(C=>({...C,recentPurchases:H})),R({open:!0,message:"Data refreshed successfully",severity:"success"})}catch(l){console.error("Error refreshing data:",l),R({open:!0,message:"Error refreshing data",severity:"error"})}finally{S(!1)}},xe=async l=>{const g=l.touches[0].clientY,v=P=>{P.touches[0].clientY-g>100&&window.scrollY===0&&(N(),document.removeEventListener("touchmove",v))};document.addEventListener("touchmove",v),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",v)},{once:!0})},re=()=>{const l="https://qr.mobilepay.dk/p/02OeCN5J8MKzg-nbza0GUmlJ-24UKFkusa_TwL1txQBhbP2FDD2yRBUHtOX8WyxkZ-Qjxba4kzlIgqkDrA==";window.location.href=l};d.useEffect(()=>{const l=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;B(l)},[]),d.useEffect(()=>{if(window.matchMedia("(display-mode: standalone)").matches){r(!1);return}if(w)setTimeout(()=>{localStorage.getItem("iosInstallPrompted")||r(!0)},2e3);else{const g=v=>{v.preventDefault(),f(v),r(!0)};return window.addEventListener("beforeinstallprompt",g),()=>window.removeEventListener("beforeinstallprompt",g)}},[w]);const fe=async()=>{w?(localStorage.setItem("iosInstallPrompted","true"),r(!1)):s&&(s.prompt(),await s.userChoice,f(null),r(!1))},ge=()=>{w&&localStorage.setItem("iosInstallPrompted","true"),r(!1)};return o?a?e.jsx(U,{children:e.jsx(h,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:e.jsx(Be,{})})}):p?e.jsx(U,{children:e.jsxs(h,{sx:{textAlign:"center",mt:4},children:[e.jsx(n,{color:"error",children:"Error loading data. Please try again."}),e.jsx(T,{onClick:()=>window.location.reload(),sx:{mt:2},children:"Reload"})]})}):e.jsxs(U,{onTouchStart:xe,children:[e.jsxs(qe,{children:[e.jsxs(h,{sx:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",zIndex:1,width:"100%"},children:[e.jsx(n,{variant:"subtitle1",sx:{color:"#5A78FF",fontWeight:500,letterSpacing:"0.2px",mb:.5,background:"linear-gradient(90deg, #5A78FF 0%, #83A4FF 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:t.occupantName||"Ingen beboer"}),e.jsx(n,{variant:"h4",sx:{fontWeight:800,color:"#2c3e50",letterSpacing:"-0.5px"},children:o})]}),e.jsx(ot,{onClick:N,disabled:x,sx:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",color:"#5A78FF","&:hover":{backgroundColor:"rgba(90, 120, 255, 0.08)"}},children:e.jsx(Ee,{sx:{animation:x?"spin 1s linear infinite":"none",transition:"transform 0.2s ease"}})})]}),e.jsxs(Je,{children:[e.jsxs(Ze,{elevation:3,onClick:re,children:[e.jsx(n,{variant:"h6",sx:{mb:1,color:"#333"},children:"Køb i alt"}),e.jsxs(n,{variant:"h4",sx:{mb:2,color:t.balance>0?"#e74c3c":"#2ecc71"},children:[(ne=t.balance)==null?void 0:ne.toFixed(2)," kr"]}),e.jsx(T,{variant:"contained",fullWidth:!0,onClick:re,sx:{backgroundColor:"#5A78FF","&:hover":{backgroundColor:"#4A61D1"},py:1.5,borderRadius:2,textTransform:"none",fontSize:"1.1rem"},children:"Betal med MobilePay"})]}),e.jsx(et,{elevation:0,children:e.jsxs(h,{sx:{display:"flex",alignItems:"flex-start",gap:2},children:[e.jsx(Fe,{sx:{color:"#5A78FF",mt:.5}}),e.jsxs(h,{children:[e.jsx(n,{variant:"subtitle1",sx:{fontWeight:500,mb:.5,color:"#2c3e50"},children:"Beskeder"}),e.jsx(n,{variant:"body2",sx:{color:"#666"},children:"Ingen nye beskeder"})]})]})}),e.jsxs(h,{sx:{mt:2,mb:2},children:[e.jsx(n,{variant:"subtitle1",sx:{mb:1,color:"#666",fontWeight:500},children:"Seneste køb"}),t.recentPurchases.map(l=>e.jsxs(tt,{sx:{py:1,px:2,mb:.5,backgroundColor:"#f8f9ff",borderRadius:1},children:[e.jsxs(h,{sx:{display:"flex",alignItems:"baseline",gap:1},children:[e.jsx(n,{variant:"body2",sx:{fontWeight:500},children:l.productName}),e.jsx(n,{variant:"caption",color:"text.secondary",children:$(l.timestamp)})]}),e.jsxs(n,{variant:"body2",color:"primary",sx:{fontWeight:500},children:[l.amount.toFixed(2)," kr"]})]},l.id)),t.recentPurchases.length===0&&e.jsx(n,{variant:"caption",color:"text.secondary",sx:{display:"block",textAlign:"center"},children:"Ingen køb endnu"})]})]}),y&&e.jsxs(rt,{elevation:3,children:[e.jsxs(h,{sx:{display:"flex",alignItems:"flex-start",gap:2,flex:1},children:[e.jsx(Ae,{sx:{mt:.5}}),w?e.jsxs(h,{children:[e.jsx(n,{variant:"subtitle1",sx:{fontWeight:"bold",mb:1},children:"Føj til hjemmeskærm"}),e.jsxs(n,{variant:"body2",sx:{display:"flex",alignItems:"center",mb:.5},children:["1. Tryk på 'Del' ikonet ",e.jsx("span",{style:{fontSize:"1.4em",marginLeft:"8px",color:"#4CAF50"},children:"⎙"})]}),e.jsxs(n,{variant:"body2",sx:{display:"flex",alignItems:"center"},children:["2. Scroll ned og vælg ",e.jsx("span",{style:{fontWeight:"bold",marginLeft:"4px",color:"#4CAF50"},children:"'Føj til hjemmeskærm'"})]})]}):e.jsx(n,{children:"Føj til hjemmeskærm for hurtig adgang"})]}),e.jsxs(h,{children:[e.jsx(oe,{color:"inherit",onClick:ge,sx:{mr:1},children:"✕"}),!w&&e.jsx(T,{variant:"contained",color:"inherit",onClick:fe,sx:{color:"#1976d2",backgroundColor:"white","&:hover":{backgroundColor:"#f5f5f5"}},children:"Installer"})]})]})]}):e.jsx(U,{children:e.jsxs(h,{sx:{textAlign:"center",mt:4},children:[e.jsx(n,{variant:"h4",gutterBottom:!0,children:"Velkommen"}),e.jsx(n,{variant:"h6",gutterBottom:!0,sx:{mb:2,color:"#666666"},children:"til din personlige oversigt"}),e.jsx(n,{sx:{mb:4,color:"#666666"},children:"Vælg dit værelse for at komme i gang. Dette er en engangskonfiguration."}),e.jsxs(Y,{select:!0,fullWidth:!0,label:"Vælg dit værelse",onChange:V,SelectProps:{native:!0},sx:{backgroundColor:"#f0f0f0",borderRadius:"8px","& .MuiInputBase-input":{color:"#333333",fontSize:"1.1rem",padding:"16px"},"& .MuiInputLabel-root":{color:"#666666",fontSize:"1.1rem"}},children:[e.jsx("option",{value:"",children:"Vælg værelse"}),O.map(l=>e.jsx("option",{value:l,children:l},l))]}),e.jsx(n,{variant:"caption",sx:{display:"block",mt:2,color:"#666666"},children:"Bemærk: Dette valg gemmes til fremtidige besøg"})]})})},st=()=>{const t=te(),[c,o]=d.useState(!0);return d.useEffect(()=>{(()=>{const a=navigator.userAgent||navigator.vendor||window.opera,i=/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(a),p=window.innerWidth<=768,u="ontouchstart"in window||navigator.maxTouchPoints>0;console.log("Device Detection:",{userAgent:a,isMobileUserAgent:i,isMobileWidth:p,isTouchDevice:u,windowWidth:window.innerWidth,touchPoints:navigator.maxTouchPoints});const x=i||p&&u;console.log("Final device decision:",x?"Mobile":"Desktop"),x?(console.log("Redirecting to mobile view..."),t("/enhanced-mobile",{replace:!0})):(console.log("Redirecting to desktop view..."),t("/",{replace:!0})),o(!1)})()},[t]),c?e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",gap:"1rem",padding:"1rem",textAlign:"center"},children:[e.jsx("div",{children:"Indlæser..."}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#666"},children:"Omdirigerer til den rigtige visning..."})]}):null};function at(){return e.jsx(We,{children:e.jsxs(Te,{children:[e.jsx(E,{path:"/detect",element:e.jsx(st,{})}),e.jsx(E,{path:"/PWAVIEW",element:e.jsx(Ye,{})}),e.jsx(E,{path:"/enhanced-mobile",element:e.jsx(nt,{})}),e.jsxs(E,{path:"/",element:e.jsx(Me,{}),children:[e.jsx(E,{index:!0,element:e.jsx($e,{})}),e.jsx(E,{path:"room/:roomId",element:e.jsx(Ue,{})})]}),e.jsx(E,{path:"*",element:e.jsx(Le,{to:"/detect",replace:!0})})]})})}Ne(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(at,{})}));
