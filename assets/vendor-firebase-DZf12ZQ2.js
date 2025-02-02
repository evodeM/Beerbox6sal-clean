var e={TERM_PROGRAM:"vscode",NODE:"/usr/local/Cellar/node/23.2.0_1/bin/node",INIT_CWD:"/Users/EvodeMicomyiza_1/finalbox/dorm-sales-app",SHELL:"/bin/zsh",TERM:"xterm-256color",TMPDIR:"/var/folders/1m/6dy8m9n96gjdtrrkc9k67g640000gp/T/",npm_config_global_prefix:"/usr/local",TERM_PROGRAM_VERSION:"1.94.0",MallocNanoZone:"0",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",ZDOTDIR:"/Users/EvodeMicomyiza_1",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/EvodeMicomyiza_1/finalbox/dorm-sales-app",USER:"Evode_Micomyiza",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.2yfinZoUAJ/Listeners",__CF_USER_TEXT_ENCODING:"0x1F6:0x0:0x9",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",PAGER:"cat",PATH:"/Users/EvodeMicomyiza_1/finalbox/dorm-sales-app/node_modules/.bin:/Users/EvodeMicomyiza_1/finalbox/node_modules/.bin:/Users/EvodeMicomyiza_1/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/EvodeMicomyiza_1/finalbox/dorm-sales-app/node_modules/.bin:/Users/EvodeMicomyiza_1/finalbox/node_modules/.bin:/Users/EvodeMicomyiza_1/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.9/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/TeX/texbin:/Applications/VMware Fusion.app/Contents/Public:/Library/Frameworks/Python.framework/Versions/3.9/bin",_:"/Users/EvodeMicomyiza_1/finalbox/dorm-sales-app/node_modules/.bin/vite",npm_package_json:"/Users/EvodeMicomyiza_1/finalbox/dorm-sales-app/package.json",__CFBundleIdentifier:"com.exafunction.windsurf",USER_ZDOTDIR:"/Users/EvodeMicomyiza_1",npm_config_init_module:"/Users/EvodeMicomyiza_1/.npm-init.js",npm_config_userconfig:"/Users/EvodeMicomyiza_1/.npmrc",PWD:"/Users/EvodeMicomyiza_1/finalbox/dorm-sales-app",npm_command:"run-script",EDITOR:"vi",npm_lifecycle_event:"build",LANG:"en_US.UTF-8",npm_package_name:"dorm-sales-app",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",npm_config_npm_version:"10.9.0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",XPC_SERVICE_NAME:"0",npm_package_version:"1.1.0",VSCODE_INJECTION:"1",HOME:"/Users/EvodeMicomyiza_1",SHLVL:"3",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Windsurf.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",LOGNAME:"Evode_Micomyiza",npm_config_cache:"/Users/EvodeMicomyiza_1/.npm",npm_lifecycle_script:"vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/1m/6dy8m9n96gjdtrrkc9k67g640000gp/T/vscode-git-6ba4d4ea92.sock",npm_config_user_agent:"npm/10.9.0 node/v23.2.0 darwin x64 workspaces/false",GIT_ASKPASS:"/Applications/Windsurf.app/Contents/Resources/app/extensions/git/dist/askpass.sh",VSCODE_GIT_ASKPASS_NODE:"/Applications/Windsurf.app/Contents/Frameworks/Windsurf Helper (Plugin).app/Contents/MacOS/Windsurf Helper (Plugin)",COLORTERM:"truecolor",npm_config_prefix:"/usr/local",npm_node_execpath:"/usr/local/Cellar/node/23.2.0_1/bin/node",NODE_ENV:"production"};
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
 */const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],o=s<e.length?n[e.charAt(s)]:0;++s;const a=s<e.length?n[e.charAt(s)]:64;++s;const c=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==a||null==c)throw new r;const u=t<<2|o>>4;if(i.push(u),64!==a){const e=o<<4&240|a>>2;if(i.push(e),64!==c){const e=a<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(e){return function(e){const r=t(e);return n.encodeByteArray(r,!0)}(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2022 Google LLC
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
const s=()=>
/**
 * @license
 * Copyright 2022 Google LLC
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,o=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(r){return}const t=e&&function(e){try{return n.decodeString(e,!0)}catch(r){}return null}(e[1]);return t&&JSON.parse(t)},a=()=>{try{return s()||(()=>{if("undefined"==typeof process)return;const t=e.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||o()}catch(t){return}},c=e=>{const t=(e=>{var t,n;return null===(n=null===(t=a())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},u=()=>{var e;return null===(e=a())||void 0===e?void 0:e.config};
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
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
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
function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function d(){return!function(){var e;const t=null===(e=a())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function f(){try{return"object"==typeof indexedDB}catch(e){return!1}}class m extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,m.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p.prototype.create)}}class p{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(g,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new m(r,o,n)}}const g=/\{\$([^}]+)}/g;function y(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(v(n)&&v(s)){if(!y(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function w(e){return e&&e._delegate?e._delegate:e}class b{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const I="[DEFAULT]";
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
 */class _{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new l;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:I})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=I){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=I){return this.instances.has(e)}getOptions(e=I){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===I?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=I){return this.component?this.component.multipleInstances?e:I:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var T,S;(S=T||(T={}))[S.DEBUG=0]="DEBUG",S[S.VERBOSE=1]="VERBOSE",S[S.INFO=2]="INFO",S[S.WARN=3]="WARN",S[S.ERROR=4]="ERROR",S[S.SILENT=5]="SILENT";const x={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},C=T.INFO,D={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},A=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!D[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class N{constructor(e){this.name=e,this._logLevel=C,this._logHandler=A,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?x[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}let k,R;const O=new WeakMap,M=new WeakMap,L=new WeakMap,P=new WeakMap,V=new WeakMap;let F={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return M.get(e);if("objectStoreNames"===t)return e.objectStoreNames||L.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return q(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function U(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(R||(R=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(j(this),t),q(O.get(this))}:function(...t){return q(e.apply(j(this),t))}:function(t,...n){const r=e.call(j(this),t,...n);return L.set(r,t.sort?t.sort():[t]),q(r)}}function B(e){return"function"==typeof e?U(e):(e instanceof IDBTransaction&&function(e){if(M.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));M.set(e,t)}(e),t=e,(k||(k=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,F):e);var t}function q(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(q(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&O.set(t,e)})).catch((()=>{})),V.set(t,e),t}(e);if(P.has(e))return P.get(e);const t=B(e);return t!==e&&(P.set(e,t),V.set(t,e)),t}const j=e=>V.get(e);const z=["get","getKey","getAll","getAllKeys","count"],G=["put","add","delete","clear"],K=new Map;function $(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(K.get(t))return K.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=G.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!z.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return K.set(t,s),s}F=(e=>({...e,get:(t,n,r)=>$(t,n)||e.get(t,n,r),has:(t,n)=>!!$(t,n)||e.has(t,n)}))(F);
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
class Q{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const H="@firebase/app",W="0.10.13",J=new N("@firebase/app"),X="@firebase/app-compat",Y="@firebase/analytics-compat",Z="@firebase/analytics",ee="@firebase/app-check-compat",te="@firebase/app-check",ne="@firebase/auth",re="@firebase/auth-compat",ie="@firebase/database",se="@firebase/data-connect",oe="@firebase/database-compat",ae="@firebase/functions",ce="@firebase/functions-compat",ue="@firebase/installations",le="@firebase/installations-compat",he="@firebase/messaging",de="@firebase/messaging-compat",fe="@firebase/performance",me="@firebase/performance-compat",pe="@firebase/remote-config",ge="@firebase/remote-config-compat",ye="@firebase/storage",ve="@firebase/storage-compat",we="@firebase/firestore",be="@firebase/vertexai-preview",Ie="@firebase/firestore-compat",_e="firebase",Ee="[DEFAULT]",Te={[H]:"fire-core",[X]:"fire-core-compat",[Z]:"fire-analytics",[Y]:"fire-analytics-compat",[te]:"fire-app-check",[ee]:"fire-app-check-compat",[ne]:"fire-auth",[re]:"fire-auth-compat",[ie]:"fire-rtdb",[se]:"fire-data-connect",[oe]:"fire-rtdb-compat",[ae]:"fire-fn",[ce]:"fire-fn-compat",[ue]:"fire-iid",[le]:"fire-iid-compat",[he]:"fire-fcm",[de]:"fire-fcm-compat",[fe]:"fire-perf",[me]:"fire-perf-compat",[pe]:"fire-rc",[ge]:"fire-rc-compat",[ye]:"fire-gcs",[ve]:"fire-gcs-compat",[we]:"fire-fst",[Ie]:"fire-fst-compat",[be]:"fire-vertex","fire-js":"fire-js",[_e]:"fire-js-all"},Se=new Map,xe=new Map,Ce=new Map;function De(e,t){try{e.container.addComponent(t)}catch(n){J.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ae(e){const t=e.name;if(Ce.has(t))return J.debug(`There were multiple attempts to register component ${t}.`),!1;Ce.set(t,e);for(const n of Se.values())De(n,e);for(const n of xe.values())De(n,e);return!0}
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
const Ne=new p("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class ke{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new b("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ne.create("app-deleted",{appName:this._name})}}
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
 */function Re(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Ee,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Ne.create("bad-app-name",{appName:String(i)});if(n||(n=u()),!n)throw Ne.create("no-options");const s=Se.get(i);if(s){if(y(n,s.options)&&y(r,s.config))return s;throw Ne.create("duplicate-app",{appName:i})}const o=new E(i);for(const c of Ce.values())o.addComponent(c);const a=new ke(n,r,o);return Se.set(i,a),a}function Oe(e,t,n){var r;let i=null!==(r=Te[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void J.warn(e.join(" "))}Ae(new b(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Me="firebase-heartbeat-store";let Le=null;function Pe(){return Le||(Le=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=q(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(q(o.result),e.oldVersion,e.newVersion,q(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Me)}catch(n){}}}).catch((e=>{throw Ne.create("idb-open",{originalErrorMessage:e.message})}))),Le}async function Ve(e,t){try{const n=(await Pe()).transaction(Me,"readwrite"),r=n.objectStore(Me);await r.put(t,Fe(e)),await n.done}catch(n){if(n instanceof m)J.warn(n.message);else{const e=Ne.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});J.warn(e.message)}}}function Fe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Ue{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Be();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(n){J.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Be(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return J.warn(t),""}}}function Be(){return(new Date).toISOString().substring(0,10)}class qe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!f()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Pe()).transaction(Me),n=await t.objectStore(Me).get(Fe(e));return await t.done,n}catch(t){if(t instanceof m)J.warn(t.message);else{const e=Ne.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});J.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return i(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var ze;ze="",Ae(new b("platform-logger",(e=>new Q(e)),"PRIVATE")),Ae(new b("heartbeat",(e=>new Ue(e)),"PRIVATE")),Oe(H,W,ze),Oe(H,W,"esm2017"),Oe("fire-js","");
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
Oe("firebase","10.14.1","app");var Ge,Ke,$e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),c=s(1),u=s(16777216);function l(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(c)}function f(e,t){return e.add(d(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function p(e,t){this.g=e,this.h=t}function g(e,t){if(l(t))throw Error("division by zero");if(l(e))return new p(a,a);if(h(e))return t=g(d(e),t),new p(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new p(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!l(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new p(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(t);h(u)||0<u.l(e);)u=(s=o(n-=r)).j(t);l(s)&&(s=c),i=i.add(s),e=f(e,u)}return new p(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(l(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(l(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:l(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(l(this)||l(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),p=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,m(n,2*i+2*s),n[2*i+2*s+1]+=c*g,m(n,2*i+2*s+1),n[2*i+2*s+1]+=f*p,m(n,2*i+2*s+1),n[2*i+2*s+2]+=c*p,m(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Ke=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var c=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},Ge=r}).apply(void 0!==$e?$e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Qe,He,We,Je,Xe,Ye,Ze,et,tt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof tt&&tt];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function l(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function m(e){return/^[\s\xa0]*$/.test(e)}function p(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==p().indexOf("Gecko")||-1!=p().toLowerCase().indexOf("webkit")&&-1==p().indexOf("Edge")||-1!=p().indexOf("Trident")||-1!=p().indexOf("MSIE")||-1!=p().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function _(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function E(e){i.setTimeout((()=>{throw e}),0)}function T(){var e=A;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var S=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new x),(e=>e.reset()));class x{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,D=!1,A=new class{constructor(){this.h=this.g=null}add(e,t){const n=S.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},N=()=>{const e=i.Promise.resolve(void 0);C=()=>{e.then(k)}};var k=()=>{for(var e;e=T();){try{e.h.call(e.g)}catch(n){E(n)}var t=S;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}D=!1};function R(){this.s=this.s,this.C=this.C}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function L(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:P[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}h(L,O);var P={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),F=0;function U(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function B(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function q(e){this.src=e,this.g={},this.h=0}function j(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(B(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function z(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}q.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=z(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new U(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var G="closure_lm_"+(1e6*Math.random()|0),K={};function $(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)$(e,t[s],n,r,i);return null}return n=Z(n),e&&e[V]?e.K(t,n,!!o(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=X(e);if(c||(e[G]=c=new q(e)),n=c.add(t,n,r,a,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=J;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)M||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(W(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function Q(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Q(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[V]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=z(s=e.g[t],n,r,i))&&(B(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=z(t,n,r,i)),(n=-1<e?t[e]:null)&&H(n))}function H(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[V])j(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(W(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(j(n,e),0==n.h&&(n.src=null,t[G]=null)):B(e)}}}function W(e){return e in K?K[e]:K[e]="on"+e}function J(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&H(e),e=n.call(r,t)}return e}function X(e){return(e=e[G])instanceof q?e:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[Y]||(e[Y]=function(t){return e.handleEvent(t)}),e[Y])}function ee(){R.call(this),this.i=new q(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;I(t=new O(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ne(o,r,!0,t)&&i}if(i=ne(o=t.g=e,r,!0,t)&&i,i=ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(o=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&j(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,R),ee.prototype[V]=!0,ee.prototype.removeEventListener=function(e,t,n,r){Q(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)B(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends R{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){R.call(this),this.h=e,this.g={}}h(oe,R);var ae=[];function ce(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&H(e)}),e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),ce(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,le=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function me(){}de.prototype.h=null;var pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){O.call(this,"d")}function ye(){O.call(this,"c")}h(ge,O),h(ye,O);var ve={},we=null;function be(){return we=we||new ee}function Ie(e){O.call(this,ve.La,e)}function _e(e){const t=be();te(t,new Ie(t))}function Ee(e,t){O.call(this,ve.STAT_EVENT,e),this.stat=t}function Te(e){const t=be();te(t,new Ee(t,e))}function Se(e,t){O.call(this,ve.Ma,e),this.size=t}function xe(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ce(){this.g=!0}function De(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ue(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",h(Ie,O),ve.STAT_EVENT="statevent",h(Ee,O),ve.Ma="timingevent",h(Se,O),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Ae,Ne={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ke={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Re(){}function Oe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Me}function Me(){this.i=null,this.g="",this.h=!1}h(Re,de),Re.prototype.g=function(){return new XMLHttpRequest},Re.prototype.i=function(){return{}},Ae=new Re;var Le={},Pe={};function Ve(e,t,n){e.L=1,e.v=vt(ft(t)),e.m=n,e.P=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),qe(e),e.A=ft(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),kt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Me,e.g=wn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=$(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),_e(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ue(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Be(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Pe:(n=Number(t.substring(n,r)),isNaN(n)?Le:(r+=1)+n>t.length?Pe:(t=t.slice(r,r+n),e.C=r+n,t))}function qe(e){e.S=Date.now()+e.I,je(e,e.I)}function je(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=xe(u(e.ba,e),t)}function ze(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function Ge(e){0==e.j.G||e.J||mn(e.j,e)}function Ke(e){ze(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ce(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function $e(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||ot(n.h,e)))if(!e.K&&ot(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fn(n),nn(n)}ln(n),Te(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=xe(u(n.Za,n),6e3));if(1>=st(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else gn(n,11)}else if((e.K||n.g==e)&&fn(n),!m(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(at(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,yt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=vn(r,r.J?r.ia:null,r.W),o.K){ct(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(ze(a),qe(a)),r.g=o}else un(r);0<n.i.length&&sn(n)}else"stop"!=u[0]&&"close"!=u[0]||gn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gn(n,7):tn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}_e()}catch(l){}}Oe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Xt(e)?t.j():this.Y(e)},Oe.prototype.Y=function(e){try{if(e==this.g)e:{const d=Xt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Yt(this.g)))){this.J||4!=d||7==t||_e(),ze(this);var n=this.g.Z();this.X=n;t:if(Ue(this)){var r=Yt(this.g);e="";var s=r.length,o=4==Xt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ke(this),Ge(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(c)){var l=c;break t}}l=null}if(!(n=l)){this.o=!1,this.s=3,Te(12),Ke(this),Ge(this);break e}De(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$e(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=Be(this,a),e==Pe){4==d&&(this.s=4,Te(14),n=!1),De(this.i,this.l,null,"[Incomplete Response]");break}if(e==Le){this.s=4,Te(15),De(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}De(this.i,this.l,e,null),$e(this,e)}if(Ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Te(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),hn(h),h.M=!0,Te(11))}}else De(this.i,this.l,a,"[Invalid Chunked Response]"),Ke(this),Ge(this)}else De(this.i,this.l,a,null),$e(this,a);4==d&&Ke(this),this.o&&!this.J&&(4==d?mn(this.j,this):(this.o=!1,qe(this)))}else(function(e){const t={};e=(e.g&&2<=Xt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(m(e[r]))continue;var n=_(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),Ke(this),Ge(this)}}}catch(d){}},Oe.prototype.cancel=function(){this.J=!0,Ke(this)},Oe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(_e(),Te(17)),Ke(this),this.s=2,Ge(this)):je(this,this.S-e)};var nt=class{constructor(e,t){this.g=e,this.map=t}};function rt(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function it(e){return!!e.h||!!e.g&&e.g.size>=e.j}function st(e){return e.h?1:e.g?e.g.size:0}function ot(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function at(e,t){e.g?e.g.add(t):e.h=t}function ct(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ut(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function lt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}rt.prototype.cancel=function(){if(this.i=ut(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var ht=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof dt){this.h=e.h,mt(this,e.j),this.o=e.o,this.g=e.g,pt(this,e.s),this.l=e.l;var t=e.i,n=new Ct;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),gt(this,n),this.m=e.m}else e&&(t=String(e).match(ht))?(this.h=!1,mt(this,t[1]||"",!0),this.o=wt(t[2]||""),this.g=wt(t[3]||"",!0),pt(this,t[4]),this.l=wt(t[5]||"",!0),gt(this,t[6]||"",!0),this.m=wt(t[7]||"")):(this.h=!1,this.i=new Ct(null,this.h))}function ft(e){return new dt(e)}function mt(e,t,n){e.j=n?wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function pt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function gt(e,t,n){t instanceof Ct?(e.i=t,function(e,t){t&&!e.j&&(Dt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(At(this,t),kt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=bt(t,St)),e.i=new Ct(t,e.h))}function yt(e,t,n){e.i.set(t,n)}function vt(e){return yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function bt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,It),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function It(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}dt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(bt(t,_t,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(bt(t,_t,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(bt(n,"/"==n.charAt(0)?Tt:Et,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",bt(n,xt)),e.join("")};var _t=/[#\/\?@]/g,Et=/[#\?:]/g,Tt=/[#\?]/g,St=/[#\?@]/g,xt=/#/g;function Ct(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Dt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function At(e,t){Dt(e),t=Rt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Nt(e,t){return Dt(e),t=Rt(e,t),e.g.has(t)}function kt(e,t,n){At(e,t),0<n.length&&(e.i=null,e.g.set(Rt(e,t),d(n)),e.h+=n.length)}function Rt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ot(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Mt(){this.g=new he}function Lt(e,t,n){const r=n||"";try{lt(e,(function(e,n){let i=e;o(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Pt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Vt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Ft(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Ut(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Bt(e)}function Bt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function qt(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function jt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):yt(e,t,n))}function zt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=Ct.prototype).add=function(e,t){Dt(this),this.i=null,e=Rt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Dt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){Dt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){Dt(this);let t=[];if("string"==typeof e)Nt(this,e)&&(t=t.concat(this.g.get(Rt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Dt(this),this.i=null,Nt(this,e=Rt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},h(Pt,de),Pt.prototype.g=function(){return new Vt(this.l,this.j)},Pt.prototype.i=function(e){return function(){return e}}({}),h(Vt,ee),(e=Vt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Bt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ut(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Bt(this)),this.g&&(this.readyState=3,Bt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ft(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ut(this):Bt(this),3==this.readyState&&Ft(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Ut(this))},e.Qa=function(e){this.g&&(this.response=e,Ut(this))},e.ga=function(){this.g&&Ut(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Vt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(zt,ee);var Gt=/^https?$/i,Kt=["POST","PUT"];function $t(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Qt(e),Wt(e)}function Qt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Ht(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Xt(e)||2!=e.Z()))if(e.u&&4==Xt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==Xt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var o=String(e.D).match(ht)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Gt.test(o?o.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<Xt(e)?e.g.statusText:""}catch(c){a=""}e.l=a+" ["+e.Z()+"]",Qt(e)}}finally{Wt(e)}}}function Wt(e,t){if(e.g){Jt(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Jt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function Xt(e){return e.g?e.g.readyState:0}function Yt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function en(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zt("baseRetryDelayMs",5e3,e),this.cb=Zt("retryDelaySeedMs",1e4,e),this.Wa=Zt("forwardChannelMaxRetries",2,e),this.wa=Zt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new rt(e&&e.concurrentRequestLimit),this.Da=new Mt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tn(e){if(rn(e),3==e.G){var t=e.U++,n=ft(e.I);if(yt(n,"SID",e.K),yt(n,"RID",t),yt(n,"TYPE","terminate"),an(e,n),(t=new Oe(e,e.j,t)).L=2,t.v=vt(ft(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=wn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),qe(t)}yn(e)}function nn(e){e.g&&(hn(e),e.g.cancel(),e.g=null)}function rn(e){nn(e),e.u&&(i.clearTimeout(e.u),e.u=null),fn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function sn(e){if(!it(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||N(),D||(C(),D=!0),A.add(t,e),e.B=0}}function on(e,t){var n;n=t?t.l:e.U++;const r=ft(e.I);yt(r,"SID",e.K),yt(r,"RID",n),yt(r,"AID",e.T),an(e,r),e.m&&e.o&&jt(r,e.m,e.o),n=new Oe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=cn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),at(e.h,n),Ve(n,r,t)}function an(e,t){e.H&&v(e.H,(function(e,n){yt(t,n,e)})),e.l&&lt({},(function(e,n){yt(t,n,e)}))}function cn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Lt(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function un(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||N(),D||(C(),D=!0),A.add(t,e),e.v=0}}function ln(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=xe(u(e.Fa,e),pn(e,e.v)),e.v++,!0)}function hn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function dn(e){e.g=new Oe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=ft(e.qa);yt(t,"RID","rpc"),yt(t,"SID",e.K),yt(t,"AID",e.T),yt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&yt(t,"TO",e.ja),yt(t,"TYPE","xmlhttp"),an(e,t),e.m&&e.o&&jt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=vt(ft(t)),n.m=null,n.P=!0,Fe(n,e)}function fn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function mn(e,t){var n=null;if(e.g==t){fn(e),hn(e),e.g=null;var r=2}else{if(!ot(e.h,t))return;n=t.D,ct(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=be(),new Se(r,n)),sn(e)}else un(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(st(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=xe(u(e.Ga,e,t),pn(e,e.B)),e.B++,0)))}(e,t)||2==r&&ln(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:gn(e,5);break;case 4:gn(e,10);break;case 3:gn(e,6);break;default:gn(e,2)}}function pn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function gn(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new dt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||mt(r,"https"),vt(r),t?function(e,t){const n=new Ce;if(i.Image){const r=new Image;r.onload=l(Ot,n,"TestLoadImage: loaded",!0,t,r),r.onerror=l(Ot,n,"TestLoadImage: error",!1,t,r),r.onabort=l(Ot,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=l(Ot,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout((()=>{n.abort(),Ot(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?Ot(0,0,!0,t):Ot(0,0,!1,t)})).catch((()=>{clearTimeout(r),Ot(0,0,!1,t)}))}(r.toString(),n)}else Te(2);e.G=0,e.l&&e.l.sa(t),yn(e),rn(e)}function yn(e){if(e.G=0,e.ka=[],e.l){const t=ut(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function vn(e,t,n){var r=n instanceof dt?ft(n):new dt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),pt(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new dt(null);r&&mt(o,r),t&&(o.g=t),s&&pt(o,s),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&yt(r,n,t),yt(r,"VER",e.la),an(e,r),r}function wn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new zt(new Pt({eb:n})):new zt(e.pa)).Ha(e.J),t}function bn(){}function In(){}function _n(e,t){ee.call(this),this.g=new en(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!m(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!m(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Sn(this)}function En(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Tn(){ye.call(this),this.status=1}function Sn(e){this.g=e}(e=zt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ae.g(),this.v=this.o?fe(this.o):fe(Ae),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void $t(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Kt,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){$t(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Wt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wt(this,!0)),zt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ht(this):this.bb())},e.bb=function(){Ht(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),le(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=en.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Te(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=vn(this,null,this.W),sn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Oe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),I(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cn(this,i,t),yt(n=ft(this.I),"RID",e),yt(n,"CVER",22),this.D&&yt(n,"X-HTTP-Session-Id",this.D),an(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(qt(s)))+"&"+t:this.m&&jt(n,this.m,s)),at(this.h,i),this.Ua&&yt(n,"TYPE","init"),this.P?(yt(n,"$req",t),yt(n,"SID","null"),i.T=!0,Ve(i,n,null)):Ve(i,n,t),this.G=2}}else 3==this.G&&(e?on(this,e):0==this.i.length||it(this.h)||on(this))},e.Fa=function(){if(this.u=null,dn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=xe(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),nn(this),dn(this))},e.Za=function(){null!=this.C&&(this.C=null,nn(this),ln(this),Te(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=bn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},In.prototype.g=function(e,t){return new _n(e,t)},h(_n,ee),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){tn(this.g)},_n.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new nt(t.Ya++,e)),3==t.G&&sn(t)},_n.prototype.N=function(){this.g.l=null,delete this.j,tn(this.g),delete this.g,_n.aa.N.call(this)},h(En,ge),h(Tn,ye),h(Sn,bn),Sn.prototype.ua=function(){te(this.g,"a")},Sn.prototype.ta=function(e){te(this.g,new En(e))},Sn.prototype.sa=function(e){te(this.g,new Tn)},Sn.prototype.ra=function(){te(this.g,"b")},In.prototype.createWebChannel=In.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,et=function(){return new In},Ze=function(){return be()},Ye=ve,Xe={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ne.NO_ERROR=0,Ne.TIMEOUT=8,Ne.HTTP_ERROR=6,Je=Ne,ke.COMPLETE="complete",We=ke,me.EventType=pe,pe.OPEN="a",pe.CLOSE="b",pe.ERROR="c",pe.MESSAGE="d",ee.prototype.listen=ee.prototype.K,He=me,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,Qe=zt}).apply(void 0!==tt?tt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const nt="@firebase/firestore";
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");
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
let it="10.14.0";
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
 */const st=new N("@firebase/firestore");function ot(){return st.logLevel}function at(e,...t){if(st.logLevel<=T.DEBUG){const n=t.map(lt);st.debug(`Firestore (${it}): ${e}`,...n)}}function ct(e,...t){if(st.logLevel<=T.ERROR){const n=t.map(lt);st.error(`Firestore (${it}): ${e}`,...n)}}function ut(e,...t){if(st.logLevel<=T.WARN){const n=t.map(lt);st.warn(`Firestore (${it}): ${e}`,...n)}}function lt(e){if("string"==typeof e)return e;try{
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
return t=e,JSON.stringify(t)}catch(n){return e}var t}
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
 */function ht(e="Unexpected state"){const t=`FIRESTORE (${it}) INTERNAL ASSERTION FAILED: `+e;throw ct(t),new Error(t)}function dt(e,t){e||ht()}function ft(e,t){return e}
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
 */const mt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pt extends m{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class gt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class yt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(rt.UNAUTHENTICATED)))}shutdown(){}}class wt{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class bt{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){dt(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{at("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(at("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(at("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(dt("string"==typeof t.accessToken),new yt(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return dt(null===e||"string"==typeof e),new rt(e)}}class It{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _t{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new It(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(rt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Et{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tt{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){dt(void 0===this.o);const n=e=>{null!=e.error&&at("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,at("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{at("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):at("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(dt("string"==typeof e.token),this.R=e.token,new Et(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function St(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class xt{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=St(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function Ct(e,t){return e<t?-1:e>t?1:0}function Dt(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function At(e){return e+"\0"}
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
 */class Nt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pt(mt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pt(mt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new pt(mt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pt(mt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Nt.fromMillis(Date.now())}static fromDate(e){return Nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Nt(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ct(this.nanoseconds,e.nanoseconds):Ct(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class kt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new kt(e)}static min(){return new kt(new Nt(0,0))}static max(){return new kt(new Nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Rt{constructor(e,t,n){void 0===t?t=0:t>e.length&&ht(),void 0===n?n=e.length-t:n>e.length-t&&ht(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Rt.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rt?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ot extends Rt{construct(e,t,n){return new Ot(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new pt(mt.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ot(t)}static emptyPath(){return new Ot([])}}const Mt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends Rt{construct(e,t,n){return new Lt(e,t,n)}static isValidIdentifier(e){return Mt.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Lt(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new pt(mt.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new pt(mt.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new pt(mt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new pt(mt.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(t)}static emptyPath(){return new Lt([])}}
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
 */class Pt{constructor(e){this.path=e}static fromPath(e){return new Pt(Ot.fromString(e))}static fromName(e){return new Pt(Ot.fromString(e).popFirst(5))}static empty(){return new Pt(Ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ot.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Pt(new Ot(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Vt{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Ft(e){return e.fields.find((e=>2===e.kind))}function Ut(e){return e.fields.filter((e=>2!==e.kind))}Vt.UNKNOWN_ID=-1;class Bt{constructor(e,t){this.fieldPath=e,this.kind=t}}class qt{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new qt(0,zt.min())}}function jt(e){return new zt(e.readTime,e.key,-1)}class zt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new zt(kt.min(),Pt.empty(),-1)}static max(){return new zt(kt.max(),Pt.empty(),-1)}}function Gt(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Pt.comparator(e.documentKey,t.documentKey),0!==n?n:Ct(e.largestBatchId,t.largestBatchId)
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
 */)}const Kt="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $t{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function Qt(e){if(e.code!==mt.FAILED_PRECONDITION||e.message!==Kt)throw e;at("LocalStore","Unexpectedly lost primary lease")}
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
 */class Ht{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ht(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ht(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ht?t:Ht.resolve(t)}catch(t){return Ht.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ht.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ht.reject(t)}static resolve(e){return new Ht(((t,n)=>{t(e)}))}static reject(e){return new Ht(((t,n)=>{n(e)}))}static waitFor(e){return new Ht(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ht.resolve(!1);for(const n of e)t=t.next((e=>e?Ht.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ht(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ht(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */class Wt{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new gt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Zt(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=sn(t.target.error);this.V.reject(new Zt(e,n))}}static open(e,t,n,r){try{return new Wt(t,e.transaction(r,n))}catch(i){throw new Zt(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(at("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new tn(t)}}class Jt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===Jt.S(h())&&ct("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return at("SimpleDb","Removing database:",e),nn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!f())return!1;if(Jt.v())return!0;const e=h(),t=Jt.S(e),n=0<t&&t<10,r=Xt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.C)}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(at("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Zt(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new pt(mt.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new pt(mt.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Zt(e,r))},r.onupgradeneeded=e=>{at("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.O(t,r.transaction,e.oldVersion,this.version).next((()=>{at("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.M(e);const t=Wt.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),Ht.reject(e)))).toPromise();return s.catch((()=>{})),await t.m,s}catch(o){const e=o,t="FirebaseError"!==e.name&&s<3;if(at("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Xt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Yt{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return nn(this.B.delete())}}class Zt extends pt{constructor(e,t){super(mt.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function en(e){return"IndexedDbTransactionError"===e.name}class tn{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(at("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(at("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),nn(n)}add(e){return at("SimpleDb","ADD",this.store.name,e,e),nn(this.store.add(e))}get(e){return nn(this.store.get(e)).next((t=>(void 0===t&&(t=null),at("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return at("SimpleDb","DELETE",this.store.name,e),nn(this.store.delete(e))}count(){return at("SimpleDb","COUNT",this.store.name),nn(this.store.count())}U(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new Ht(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}}G(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ht(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}j(e,t){at("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.W(r,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Y(e){const t=this.cursor({});return new Ht(((n,r)=>{t.onerror=e=>{const t=sn(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}W(e,t){const n=[];return new Ht(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Yt(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ht){const e=o.catch((e=>(s.done(),Ht.reject(e))));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}})).next((()=>Ht.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function nn(e){return new Ht(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=sn(e.target.error);n(t)}}))}let rn=!1;function sn(e){const t=Jt.S(h());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new pt("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rn||(rn=!0,setTimeout((()=>{throw e}),0)),e}}return e}class on{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}X(e){at("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{at("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){en(e)?at("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await Qt(e)}await this.X(6e4)}))}}class an{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.te(t,e)))}te(e,t){const n=new Set;let r=t,i=!0;return Ht.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return at("IndexBackfiller",`Processing collection: ${t}`),this.ne(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.re(r,n))).next((n=>(at("IndexBackfiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}re(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=jt(t);Gt(r,n)>0&&(n=r)})),new zt(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class cn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function un(e){return null==e}function ln(e){return 0===e&&1/e==-1/0}
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
function hn(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=fn(t)),t=dn(e.get(n),t);return fn(t)}function dn(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function fn(e){return e+""}function mn(e){const t=e.length;if(dt(t>=2),2===t)return dt(""===e.charAt(0)&&""===e.charAt(1)),Ot.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&ht(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:ht()}s=t+2}return new Ot(r)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */cn.oe=-1;const pn=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
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
 */function gn(e,t){return[e,hn(t)]}function yn(e,t,n){return[e,hn(t),n]}const vn={},wn=["prefixPath","collectionGroup","readTime","documentId"],bn=["prefixPath","collectionGroup","documentId"],In=["collectionGroup","readTime","prefixPath","documentId"],_n=["canonicalId","targetId"],En=["targetId","path"],Tn=["path","targetId"],Sn=["collectionId","parent"],xn=["indexId","uid"],Cn=["uid","sequenceNumber"],Dn=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],An=["indexId","uid","orderedDocumentKey"],Nn=["userId","collectionPath","documentId"],kn=["userId","collectionPath","largestBatchId"],Rn=["userId","collectionGroup","largestBatchId"],On=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Mn=[...On,"documentOverlays"],Ln=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Pn=Ln,Vn=[...Pn,"indexConfiguration","indexState","indexEntries"],Fn=Vn,Un=[...Vn,"globals"];
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
 */class Bn extends $t{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function qn(e,t){const n=ft(e);return Jt.F(n._e,t)}
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
 */function jn(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function zn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gn(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Kn{constructor(e,t){this.comparator=e,this.root=t||Qn.EMPTY}insert(e,t){return new Kn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qn.BLACK,null,null))}remove(e){return new Kn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $n(this.root,e,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $n(this.root,e,this.comparator,!0)}}class $n{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qn{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Qn.RED,this.left=null!=r?r:Qn.EMPTY,this.right=null!=i?i:Qn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Qn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Qn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ht();if(this.right.isRed())throw ht();const e=this.left.check();if(e!==this.right.check())throw ht();return e+(this.isRed()?0:1)}}Qn.EMPTY=null,Qn.RED=!0,Qn.BLACK=!1,Qn.EMPTY=new class{constructor(){this.size=0}get key(){throw ht()}get value(){throw ht()}get color(){throw ht()}get left(){throw ht()}get right(){throw ht()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Qn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Hn{constructor(e){this.comparator=e,this.data=new Kn(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wn(this.data.getIterator())}getIteratorFrom(e){return new Wn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Hn))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Hn(this.comparator);return t.data=e,t}}class Wn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Jn(e){return e.hasNext()?e.getNext():void 0}
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
 */class Xn{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new Xn([])}unionWith(e){let t=new Hn(Lt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Dt(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Yn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class Zn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Yn("Invalid base64 string: "+t):t}}(e);return new Zn(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Zn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ct(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zn.EMPTY_BYTE_STRING=new Zn("");const er=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(e){if(dt(!!e),"string"==typeof e){let t=0;const n=er.exec(e);if(dt(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nr(e.seconds),nanos:nr(e.nanos)}}function nr(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rr(e){return"string"==typeof e?Zn.fromBase64String(e):Zn.fromUint8Array(e)}
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
 */function ir(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function sr(e){const t=e.mapValue.fields.__previous_value__;return ir(t)?sr(t):t}function or(e){const t=tr(e.mapValue.fields.__local_write_time__.timestampValue);return new Nt(t.seconds,t.nanos)}
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
 */class ar{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class cr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new cr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof cr&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},lr={nullValue:"NULL_VALUE"};function hr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ir(e)?4:Cr(e)?9007199254740991:Sr(e)?10:11:ht()}function dr(e,t){if(e===t)return!0;const n=hr(e);if(n!==hr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return or(e).isEqual(or(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=tr(e.timestampValue),r=tr(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,rr(e.bytesValue).isEqual(rr(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return nr(e.geoPointValue.latitude)===nr(t.geoPointValue.latitude)&&nr(e.geoPointValue.longitude)===nr(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nr(e.integerValue)===nr(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=nr(e.doubleValue),r=nr(t.doubleValue);return n===r?ln(n)===ln(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Dt(e.arrayValue.values||[],t.arrayValue.values||[],dr);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(jn(n)!==jn(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!dr(n[i],r[i])))return!1;return!0}(e,t);default:return ht()}var r}function fr(e,t){return void 0!==(e.values||[]).find((e=>dr(e,t)))}function mr(e,t){if(e===t)return 0;const n=hr(e),r=hr(t);if(n!==r)return Ct(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ct(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=nr(e.integerValue||e.doubleValue),r=nr(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return pr(e.timestampValue,t.timestampValue);case 4:return pr(or(e),or(t));case 5:return Ct(e.stringValue,t.stringValue);case 6:return function(e,t){const n=rr(e),r=rr(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Ct(n[i],r[i]);if(0!==e)return e}return Ct(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ct(nr(e.latitude),nr(t.latitude));return 0!==n?n:Ct(nr(e.longitude),nr(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return gr(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=Ct((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:gr(c,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ur.mapValue&&t===ur.mapValue)return 0;if(e===ur.mapValue)return 1;if(t===ur.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Ct(r[o],s[o]);if(0!==e)return e;const t=mr(n[r[o]],i[s[o]]);if(0!==t)return t}return Ct(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ht()}}function pr(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ct(e,t);const n=tr(e),r=tr(t),i=Ct(n.seconds,r.seconds);return 0!==i?i:Ct(n.nanos,r.nanos)}function gr(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=mr(n[i],r[i]);if(e)return e}return Ct(n.length,r.length)}function yr(e){return vr(e)}function vr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=tr(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rr(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Pt.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=vr(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${vr(e.fields[i])}`;return n+"}"}(e.mapValue):ht()}function wr(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function br(e){return!!e&&"integerValue"in e}function Ir(e){return!!e&&"arrayValue"in e}function _r(e){return!!e&&"nullValue"in e}function Er(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tr(e){return!!e&&"mapValue"in e}function Sr(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function xr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return zn(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=xr(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Cr(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}const Dr={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Ar(e){return"nullValue"in e?lr:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?wr(cr.empty(),Pt.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?Sr(e)?Dr:{mapValue:{}}:ht()}function Nr(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?wr(cr.empty(),Pt.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?Dr:"mapValue"in e?Sr(e)?{mapValue:{}}:ur:ht()}function kr(e,t){const n=mr(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Rr(e,t){const n=mr(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
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
 */class Or{constructor(e){this.value=e}static empty(){return new Or({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Tr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xr(t)}setAll(e){let t=Lt.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=xr(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Tr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Tr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){zn(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Or(xr(this.value))}}function Mr(e){const t=[];return zn(e.fields,((e,n)=>{const r=new Lt([e]);if(Tr(n)){const e=Mr(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Xn(t)
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
 */}class Lr{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Lr(e,0,kt.min(),kt.min(),kt.min(),Or.empty(),0)}static newFoundDocument(e,t,n,r){return new Lr(e,1,t,kt.min(),n,r,0)}static newNoDocument(e,t){return new Lr(e,2,t,kt.min(),kt.min(),Or.empty(),0)}static newUnknownDocument(e,t){return new Lr(e,3,t,kt.min(),kt.min(),Or.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(kt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Or.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Or.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=kt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Lr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Pr{constructor(e,t){this.position=e,this.inclusive=t}}function Vr(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Pt.comparator(Pt.fromName(o.referenceValue),n.key):mr(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Fr(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!dr(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ur{constructor(e,t="asc"){this.field=e,this.dir=t}}function Br(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class qr{}class jr extends qr{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Yr(e,t,n):"array-contains"===t?new ni(e,n):"in"===t?new ri(e,n):"not-in"===t?new ii(e,n):"array-contains-any"===t?new si(e,n):new jr(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Zr(e,n):new ei(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(mr(t,this.value)):null!==t&&hr(this.value)===hr(t)&&this.matchesComparison(mr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ht()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zr extends qr{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new zr(e,t)}matches(e){return Gr(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gr(e){return"and"===e.op}function Kr(e){return"or"===e.op}function $r(e){return Qr(e)&&Gr(e)}function Qr(e){for(const t of e.filters)if(t instanceof zr)return!1;return!0}function Hr(e){if(e instanceof jr)return e.field.canonicalString()+e.op.toString()+yr(e.value);if($r(e))return e.filters.map((e=>Hr(e))).join(",");{const t=e.filters.map((e=>Hr(e))).join(",");return`${e.op}(${t})`}}function Wr(e,t){return e instanceof jr?(n=e,(r=t)instanceof jr&&n.op===r.op&&n.field.isEqual(r.field)&&dr(n.value,r.value)):e instanceof zr?function(e,t){return t instanceof zr&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Wr(n,t.filters[r])),!0)}(e,t):void ht();var n,r}function Jr(e,t){const n=e.filters.concat(t);return zr.create(n,e.op)}function Xr(e){return e instanceof jr?`${(t=e).field.canonicalString()} ${t.op} ${yr(t.value)}`:e instanceof zr?function(e){return e.op.toString()+" {"+e.getFilters().map(Xr).join(" ,")+"}"}(e):"Filter";var t}class Yr extends jr{constructor(e,t,n){super(e,t,n),this.key=Pt.fromName(n.referenceValue)}matches(e){const t=Pt.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zr extends jr{constructor(e,t){super(e,"in",t),this.keys=ti("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ei extends jr{constructor(e,t){super(e,"not-in",t),this.keys=ti("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ti(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Pt.fromName(e.referenceValue)))}class ni extends jr{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ir(t)&&fr(t.arrayValue,this.value)}}class ri extends jr{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&fr(this.value.arrayValue,t)}}class ii extends jr{constructor(e,t){super(e,"not-in",t)}matches(e){if(fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!fr(this.value.arrayValue,t)}}class si extends jr{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ir(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>fr(this.value.arrayValue,e)))}}
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
 */class oi{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function ai(e,t=null,n=[],r=[],i=null,s=null,o=null){return new oi(e,t,n,r,i,s,o)}function ci(e){const t=ft(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Hr(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),un(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>yr(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>yr(e))).join(",")),t.ue=e}return t.ue}function ui(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Br(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Wr(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fr(e.startAt,t.startAt)&&Fr(e.endAt,t.endAt)}function li(e){return Pt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function hi(e,t){return e.filters.filter((e=>e instanceof jr&&e.field.isEqual(t)))}function di(e,t,n){let r=lr,i=!0;for(const s of hi(e,t)){let e=lr,t=!0;switch(s.op){case"<":case"<=":e=Ar(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=lr}kr({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];kr({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function fi(e,t,n){let r=ur,i=!0;for(const s of hi(e,t)){let e=ur,t=!0;switch(s.op){case">=":case">":e=Nr(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=ur}Rr({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Rr({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
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
 */class mi{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pi(e){return new mi(e)}function gi(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function yi(e){return null!==e.collectionGroup}function vi(e){const t=ft(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Hn(Lt.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new Ur(r,n))})),e.has(Lt.keyField().canonicalString())||t.ce.push(new Ur(Lt.keyField(),n))}return t.ce}function wi(e){const t=ft(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return ai(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Ur(e.field,t)}));const n=e.endAt?new Pr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Pr(e.startAt.position,e.startAt.inclusive):null;return ai(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,vi(e))),t.le}function bi(e,t){const n=e.filters.concat([t]);return new mi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ii(e,t,n){return new mi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function _i(e,t){return ui(wi(e),wi(t))&&e.limitType===t.limitType}function Ei(e){return`${ci(wi(e))}|lt:${e.limitType}`}function Ti(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Xr(e))).join(", ")}]`),un(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>yr(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>yr(e))).join(",")),`Target(${t})`}(wi(e))}; limitType=${e.limitType})`}function Si(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Pt.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of vi(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Vr(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,vi(n),r)||n.endAt&&!function(e,t,n){const r=Vr(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,vi(n),r)));var n,r}function xi(e){return(t,n)=>{let r=!1;for(const i of vi(e)){const e=Ci(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ci(e,t,n){const r=e.field.isKeyField()?Pt.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?mr(r,i):ht()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ht()}}
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
 */class Di{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zn(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Gn(this.inner)}size(){return this.innerSize}}
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
 */const Ai=new Kn(Pt.comparator);function Ni(){return Ai}const ki=new Kn(Pt.comparator);function Ri(...e){let t=ki;for(const n of e)t=t.insert(n.key,n);return t}function Oi(e){let t=ki;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Mi(){return Pi()}function Li(){return Pi()}function Pi(){return new Di((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Vi=new Kn(Pt.comparator),Fi=new Hn(Pt.comparator);function Ui(...e){let t=Fi;for(const n of e)t=t.add(n);return t}const Bi=new Hn(Ct);
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
function qi(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ln(t)?"-0":t}}function ji(e){return{integerValue:""+e}}function zi(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ln(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?ji(t):qi(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Gi{constructor(){this._=void 0}}function Ki(e,t,n){return e instanceof Hi?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ir(t)&&(t=sr(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Wi?Ji(e,t):e instanceof Xi?Yi(e,t):function(e,t){const n=Qi(e,t),r=es(n)+es(e.Pe);return br(n)&&br(e.Pe)?ji(r):qi(e.serializer,r)}(e,t)}function $i(e,t,n){return e instanceof Wi?Ji(e,t):e instanceof Xi?Yi(e,t):n}function Qi(e,t){return e instanceof Zi?br(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Hi extends Gi{}class Wi extends Gi{constructor(e){super(),this.elements=e}}function Ji(e,t){const n=ts(t);for(const r of e.elements)n.some((e=>dr(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Xi extends Gi{constructor(e){super(),this.elements=e}}function Yi(e,t){let n=ts(t);for(const r of e.elements)n=n.filter((e=>!dr(e,r)));return{arrayValue:{values:n}}}class Zi extends Gi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function es(e){return nr(e.integerValue||e.doubleValue)}function ts(e){return Ir(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class ns{constructor(e,t){this.field=e,this.transform=t}}class rs{constructor(e,t){this.version=e,this.transformResults=t}}class is{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new is}static exists(e){return new is(void 0,e)}static updateTime(e){return new is(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ss(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class os{}function as(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ys(e.key,is.none()):new ds(e.key,e.data,is.none());{const n=e.data,r=Or.empty();let i=new Hn(Lt.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new fs(e.key,r,new Xn(i.toArray()),is.none())}}function cs(e,t,n){var r;e instanceof ds?function(e,t,n){const r=e.value.clone(),i=ps(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof fs?function(e,t,n){if(!ss(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ps(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ms(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function us(e,t,n,r){return e instanceof ds?function(e,t,n,r){if(!ss(e.precondition,t))return n;const i=e.value.clone(),s=gs(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof fs?function(e,t,n,r){if(!ss(e.precondition,t))return n;const i=gs(e.fieldTransforms,r,t),s=t.data;return s.setAll(ms(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,ss(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function ls(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Qi(r.transform,e||null);null!=i&&(null===n&&(n=Or.empty()),n.set(r.field,i))}return n||null}function hs(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Dt(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Wi&&r instanceof Wi||n instanceof Xi&&r instanceof Xi?Dt(n.elements,r.elements,dr):n instanceof Zi&&r instanceof Zi?dr(n.Pe,r.Pe):n instanceof Hi&&r instanceof Hi);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class ds extends os{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class fs extends os{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ms(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ps(e,t,n){const r=new Map;dt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,$i(o,a,n[i]))}return r}function gs(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ki(e,s,t))}return r}class ys extends os{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vs extends os{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class ws{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&cs(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=us(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=us(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Li();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=as(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(kt.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ui())}isEqual(e){return this.batchId===e.batchId&&Dt(this.mutations,e.mutations,((e,t)=>hs(e,t)))&&Dt(this.baseMutations,e.baseMutations,((e,t)=>hs(e,t)))}}class bs{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){dt(e.mutations.length===n.length);let r=function(){return Vi}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new bs(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Is{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class _s{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var Es,Ts;function Ss(e){if(void 0===e)return ct("GRPC error has no .code"),mt.UNKNOWN;switch(e){case Es.OK:return mt.OK;case Es.CANCELLED:return mt.CANCELLED;case Es.UNKNOWN:return mt.UNKNOWN;case Es.DEADLINE_EXCEEDED:return mt.DEADLINE_EXCEEDED;case Es.RESOURCE_EXHAUSTED:return mt.RESOURCE_EXHAUSTED;case Es.INTERNAL:return mt.INTERNAL;case Es.UNAVAILABLE:return mt.UNAVAILABLE;case Es.UNAUTHENTICATED:return mt.UNAUTHENTICATED;case Es.INVALID_ARGUMENT:return mt.INVALID_ARGUMENT;case Es.NOT_FOUND:return mt.NOT_FOUND;case Es.ALREADY_EXISTS:return mt.ALREADY_EXISTS;case Es.PERMISSION_DENIED:return mt.PERMISSION_DENIED;case Es.FAILED_PRECONDITION:return mt.FAILED_PRECONDITION;case Es.ABORTED:return mt.ABORTED;case Es.OUT_OF_RANGE:return mt.OUT_OF_RANGE;case Es.UNIMPLEMENTED:return mt.UNIMPLEMENTED;case Es.DATA_LOSS:return mt.DATA_LOSS;default:return ht()}}(Ts=Es||(Es={}))[Ts.OK=0]="OK",Ts[Ts.CANCELLED=1]="CANCELLED",Ts[Ts.UNKNOWN=2]="UNKNOWN",Ts[Ts.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ts[Ts.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ts[Ts.NOT_FOUND=5]="NOT_FOUND",Ts[Ts.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ts[Ts.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ts[Ts.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ts[Ts.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ts[Ts.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ts[Ts.ABORTED=10]="ABORTED",Ts[Ts.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ts[Ts.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ts[Ts.INTERNAL=13]="INTERNAL",Ts[Ts.UNAVAILABLE=14]="UNAVAILABLE",Ts[Ts.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
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
const xs=new Ge([4294967295,4294967295],0);function Cs(e){const t=(new TextEncoder).encode(e),n=new Ke;return n.update(t),new Uint8Array(n.digest())}function Ds(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ge([n,r],0),new Ge([i,s],0)]}class As{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ns(`Invalid padding: ${t}`);if(n<0)throw new Ns(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Ns(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Ns(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ge.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Ge.fromNumber(n)));return 1===r.compare(xs)&&(r=new Ge([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Cs(e),[n,r]=Ds(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new As(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=Cs(e),[n,r]=Ds(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class ks{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Rs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ks(kt.min(),r,new Kn(Ct),Ni(),Ui())}}class Rs{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Rs(n,t,Ui(),Ui(),Ui())}}
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
 */class Os{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class Ms{constructor(e,t){this.targetId=e,this.me=t}}class Ls{constructor(e,t,n=Zn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ps{constructor(){this.fe=0,this.ge=Us(),this.pe=Zn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ui(),t=Ui(),n=Ui();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ht()}})),new Rs(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Us()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,dt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Vs{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ni(),this.qe=Fs(),this.Qe=new Kn(Ct)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:ht()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(li(i))if(0===n){const e=new Pt(i.path);this.Ue(t,e,Lr.newNoDocument(e,kt.min()))}else dt(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=rr(n).toUint8Array()}catch(a){if(a instanceof Yn)return ut("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new As(s,r,i)}catch(a){return ut(a instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&li(i.target)){const t=new Pt(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,Lr.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=Ui();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new ks(e,t,this.Qe,this.ke,n);return this.ke=Ni(),this.qe=Fs(),this.Qe=new Kn(Ct),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ps,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Hn(Ct),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||at("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ps),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Fs(){return new Kn(Pt.comparator)}function Us(){return new Kn(Pt.comparator)}const Bs=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qs=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),js=(()=>({and:"AND",or:"OR"}))();class zs{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gs(e,t){return e.useProto3Json||un(t)?t:{value:t}}function Ks(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $s(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Qs(e,t){return Ks(e,t.toTimestamp())}function Hs(e){return dt(!!e),kt.fromTimestamp(function(e){const t=tr(e);return new Nt(t.seconds,t.nanos)}(e))}function Ws(e,t){return Js(e,t).canonicalString()}function Js(e,t){const n=(r=e,new Ot(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Xs(e){const t=Ot.fromString(e);return dt(wo(t)),t}function Ys(e,t){return Ws(e.databaseId,t.path)}function Zs(e,t){const n=Xs(t);if(n.get(1)!==e.databaseId.projectId)throw new pt(mt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new pt(mt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Pt(ro(n))}function eo(e,t){return Ws(e.databaseId,t)}function to(e){const t=Xs(e);return 4===t.length?Ot.emptyPath():ro(t)}function no(e){return new Ot(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ro(e){return dt(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function io(e,t,n){return{name:Ys(e,t),fields:n.value.mapValue.fields}}function so(e,t){let n;if(t instanceof ds)n={update:io(e,t.key,t.value)};else if(t instanceof ys)n={delete:Ys(e,t.key)};else if(t instanceof fs)n={update:io(e,t.key,t.data),updateMask:vo(t.fieldMask)};else{if(!(t instanceof vs))return ht();n={verify:Ys(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Hi)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Wi)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xi)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zi)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw ht()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Qs(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:ht())),n;var r,i}function oo(e,t){const n=t.currentDocument?void 0!==(i=t.currentDocument).updateTime?is.updateTime(Hs(i.updateTime)):void 0!==i.exists?is.exists(i.exists):is.none():is.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)dt("REQUEST_TIME"===t.setToServerValue),n=new Hi;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Wi(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Xi(e)}else"increment"in t?n=new Zi(e,t.increment):ht();const r=Lt.fromServerFormat(t.fieldPath);return new ns(r,n)}(e,t))):[];var i;if(t.update){t.update.name;const i=Zs(e,t.update.name),s=new Or({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Xn(t.map((e=>Lt.fromServerFormat(e))))}(t.updateMask);return new fs(i,s,e,n,r)}return new ds(i,s,n,r)}if(t.delete){const r=Zs(e,t.delete);return new ys(r,n)}if(t.verify){const r=Zs(e,t.verify);return new vs(r,n)}return ht()}function ao(e,t){return{documents:[eo(e,t.path)]}}function co(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=eo(e,i);const s=function(e){if(0!==e.length)return yo(zr.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:po((t=e).field),direction:ho(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Gs(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i};var c}function uo(e){let t=to(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){dt(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=lo(e);return t instanceof zr&&$r(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Ur(go((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,un(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Pr(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Pr(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new mi(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,u)}function lo(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=go(e.unaryFilter.field);return jr.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=go(e.unaryFilter.field);return jr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=go(e.unaryFilter.field);return jr.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=go(e.unaryFilter.field);return jr.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ht()}}(e):void 0!==e.fieldFilter?(t=e,jr.create(go(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ht()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return zr.create(e.compositeFilter.filters.map((e=>lo(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ht()}}(e.compositeFilter.op))}(e):ht();var t}function ho(e){return Bs[e]}function fo(e){return qs[e]}function mo(e){return js[e]}function po(e){return{fieldPath:e.canonicalString()}}function go(e){return Lt.fromServerFormat(e.fieldPath)}function yo(e){return e instanceof jr?function(e){if("=="===e.op){if(Er(e.value))return{unaryFilter:{field:po(e.field),op:"IS_NAN"}};if(_r(e.value))return{unaryFilter:{field:po(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Er(e.value))return{unaryFilter:{field:po(e.field),op:"IS_NOT_NAN"}};if(_r(e.value))return{unaryFilter:{field:po(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(e.field),op:fo(e.op),value:e.value}}}(e):e instanceof zr?function(e){const t=e.getFilters().map((e=>yo(e)));return 1===t.length?t[0]:{compositeFilter:{op:mo(e.op),filters:t}}}(e):ht()}function vo(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function wo(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class bo{constructor(e,t,n,r,i=kt.min(),s=kt.min(),o=Zn.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new bo(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bo(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class Io{constructor(e){this.ct=e}}function _o(e,t){let n;if(t.document)n=function(e,t,n){const r=Zs(e,t.name),i=Hs(t.updateTime),s=t.createTime?Hs(t.createTime):kt.min(),o=new Or({mapValue:{fields:t.fields}}),a=Lr.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}(e.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Pt.fromSegments(t.noDocument.path),r=xo(t.noDocument.readTime);n=Lr.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return ht();{const e=Pt.fromSegments(t.unknownDocument.path),r=xo(t.unknownDocument.version);n=Lr.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Nt(e[0],e[1]);return kt.fromTimestamp(t)}(t.readTime)),n}function Eo(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:To(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document={name:Ys(i=e.ct,(s=t).key),fields:s.data.value.mapValue.fields,updateTime:Ks(i,s.version.toTimestamp()),createTime:Ks(i,s.createTime.toTimestamp())};else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:So(t.version)};else{if(!t.isUnknownDocument())return ht();r.unknownDocument={path:n.path.toArray(),version:So(t.version)}}var i,s;return r}function To(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function So(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function xo(e){const t=new Nt(e.seconds,e.nanoseconds);return kt.fromTimestamp(t)}function Co(e,t){const n=(t.baseMutations||[]).map((t=>oo(e.ct,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>oo(e.ct,t))),i=Nt.fromMillis(t.localWriteTimeMs);return new ws(t.batchId,i,n,r)}function Do(e){const t=xo(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?xo(e.lastLimboFreeSnapshotVersion):kt.min();let r;return r=void 0!==e.query.documents?function(e){return dt(1===e.documents.length),wi(pi(to(e.documents[0])))}(e.query):function(e){return wi(uo(e))}(e.query),new bo(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Zn.fromBase64String(e.resumeToken))}function Ao(e,t){const n=So(t.snapshotVersion),r=So(t.lastLimboFreeSnapshotVersion);let i;i=li(t.target)?ao(e.ct,t.target):co(e.ct,t.target)._t;const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:ci(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function No(e){const t=uo({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ii(t,t.limit,"L"):t}function ko(e,t){return new Is(t.largestBatchId,oo(e.ct,t.overlayMutation))}function Ro(e,t){const n=t.path.lastSegment();return[e,hn(t.path.popLast()),n]}function Oo(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:So(r.readTime),documentKey:hn(r.documentKey.path),largestBatchId:r.largestBatchId}}
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
 */class Mo{getBundleMetadata(e,t){return Lo(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:xo(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Lo(e).put({bundleId:(n=t).id,createTime:So(Hs(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Po(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:No(t.bundledQuery),readTime:xo(t.readTime)};var t}))}saveNamedQuery(e,t){return Po(e).put({name:(n=t).name,readTime:So(Hs(n.readTime)),bundledQuery:n.bundledQuery});var n}}function Lo(e){return qn(e,"bundles")}function Po(e){return qn(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Vo{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Vo(e,n)}getOverlay(e,t){return Fo(e).get(Ro(this.userId,t)).next((e=>e?ko(this.serializer,e):null))}getOverlays(e,t){const n=Mi();return Ht.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Is(t,i);r.push(this.ht(e,s))})),Ht.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(hn(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Fo(e).j("collectionPathOverlayIndex",r))})),Ht.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Mi(),i=hn(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Fo(e).U("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=ko(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=Mi();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Fo(e).J({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=ko(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}ht(e,t){return Fo(e).put(function(e,t,n){const[r,i,s]=Ro(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:so(e.ct,n.mutation)}}(this.serializer,this.userId,t))}}function Fo(e){return qn(e,"documentOverlays")}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Uo{Pt(e){return qn(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next((e=>{const t=null==e?void 0:e.value;return t?Zn.fromUint8Array(t):Zn.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Bo{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(nr(e.integerValue));else if("doubleValue"in e){const n=nr(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ln(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=tr(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(rr(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Cr(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Sr(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):ht()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const r of Object.keys(n))this.Vt(r,t),this.Tt(n[r],t)}wt(e,t){var n,r;const i=e.fields||{};this.dt(t,53);const s="value",o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(t,15),t.At(nr(o)),this.Vt(s,t),this.Tt(i[s],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const r of n)this.Tt(r,t)}yt(e,t){this.dt(t,37),Pt.fromName(e).path.forEach((e=>{this.dt(t,60),this.Dt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}function qo(e){if(0===e)return 8;let t=0;return!(e>>4)&&(t+=4,e<<=4),!(e>>6)&&(t+=2,e<<=2),!(e>>7)&&(t+=1),t}function jo(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=qo(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Bo.vt=new Bo;class zo{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{const e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Bt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ot(e);else if(e<2048)this.Ot(960|e>>>6),this.Ot(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ot(480|e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e);else{const e=t.codePointAt(0);this.Ot(240|e>>>18),this.Ot(128|63&e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e)}}this.Nt()}kt(e){const t=this.qt(e),n=jo(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Kt(e){const t=this.qt(e),n=jo(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ft(e){const t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;0===t?(this.Gt(0),this.Gt(255)):255===t?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Go{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Ko{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class $o{constructor(){this.jt=new zo,this.Ht=new Go(this.jt),this.Jt=new Ko(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return 0===e?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Qo{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Zt(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Qo(this.indexId,this.documentKey,this.arrayValue,n)}}function Ho(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Wo(e.arrayValue,t.arrayValue),0!==n?n:(n=Wo(e.directionalValue,t.directionalValue),0!==n?n:Pt.comparator(e.documentKey,t.documentKey)))}function Wo(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Jo{constructor(e){this.Xt=new Hn(((e,t)=>Lt.comparator(e.field,t.field))),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const e=t;e.isInequality()?this.Xt=this.Xt.add(e):this.tn.push(e)}}get nn(){return this.Xt.size>1}rn(e){if(dt(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Ft(e);if(void 0!==t&&!this.sn(t))return!1;const n=Ut(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.sn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const e=this.Xt.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[i];if(!this.on(e,t)||!this._n(this.en[s++],t))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.en.length||!this._n(this.en[s++],e))return!1}return!0}an(){if(this.nn)return null;let e=new Hn(Lt.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Bt(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Bt(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Bt(n.field,"asc"===n.dir?0:1)));return new Vt(Vt.UNKNOWN_ID,this.collectionId,t,qt.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Xo(e){var t,n;if(dt(e instanceof jr||e instanceof zr),e instanceof jr){if(e instanceof ri){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>jr.create(e.field,"==",t))))||[];return zr.create(r,"or")}return e}const r=e.filters.map((e=>Xo(e)));return zr.create(r,e.op)}function Yo(e){if(0===e.getFilters().length)return[];const t=na(Xo(e));return dt(ta(t)),Zo(t)||ea(t)?[t]:t.getFilters()}function Zo(e){return e instanceof jr}function ea(e){return e instanceof zr&&$r(e)}function ta(e){return Zo(e)||ea(e)||function(e){if(e instanceof zr&&Kr(e)){for(const t of e.getFilters())if(!Zo(t)&&!ea(t))return!1;return!0}return!1}(e)}function na(e){if(dt(e instanceof jr||e instanceof zr),e instanceof jr)return e;if(1===e.filters.length)return na(e.filters[0]);const t=e.filters.map((e=>na(e)));let n=zr.create(t,e.op);return n=sa(n),ta(n)?n:(dt(n instanceof zr),dt(Gr(n)),dt(n.filters.length>1),n.filters.reduce(((e,t)=>ra(e,t))))}function ra(e,t){let n;return dt(e instanceof jr||e instanceof zr),dt(t instanceof jr||t instanceof zr),n=e instanceof jr?t instanceof jr?(r=e,i=t,zr.create([r,i],"and")):ia(e,t):t instanceof jr?ia(t,e):function(e,t){if(dt(e.filters.length>0&&t.filters.length>0),Gr(e)&&Gr(t))return Jr(e,t.getFilters());const n=Kr(e)?e:t,r=Kr(e)?t:e,i=n.filters.map((e=>ra(e,r)));return zr.create(i,"or")}(e,t),sa(n);var r,i}function ia(e,t){if(Gr(t))return Jr(t,e.getFilters());{const n=t.filters.map((t=>ra(e,t)));return zr.create(n,"or")}}function sa(e){if(dt(e instanceof jr||e instanceof zr),e instanceof jr)return e;const t=e.getFilters();if(1===t.length)return sa(t[0]);if(Qr(e))return e;const n=t.map((e=>sa(e))),r=[];return n.forEach((t=>{t instanceof jr?r.push(t):t instanceof zr&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:zr.create(r,e.op)
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
 */}class oa{constructor(){this.un=new aa}addToCollectionParentIndex(e,t){return this.un.add(t),Ht.resolve()}getCollectionParents(e,t){return Ht.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Ht.resolve()}deleteFieldIndex(e,t){return Ht.resolve()}deleteAllFieldIndexes(e){return Ht.resolve()}createTargetIndexes(e,t){return Ht.resolve()}getDocumentsMatchingTarget(e,t){return Ht.resolve(null)}getIndexType(e,t){return Ht.resolve(0)}getFieldIndexes(e,t){return Ht.resolve([])}getNextCollectionGroupToUpdate(e){return Ht.resolve(null)}getMinOffset(e,t){return Ht.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return Ht.resolve(zt.min())}updateCollectionGroup(e,t,n){return Ht.resolve()}updateIndexEntries(e,t){return Ht.resolve()}}class aa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Hn(Ot.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Hn(Ot.comparator)).toArray()}}
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
 */const ca=new Uint8Array(0);class ua{constructor(e,t){this.databaseId=t,this.cn=new aa,this.ln=new Di((e=>ci(e)),((e,t)=>ui(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.cn.add(t)}));const i={collectionId:n,parent:hn(r)};return la(e).put(i)}return Ht.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[At(t),""],!1,!0);return la(e).U(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(mn(r.parent))}return n}))}addFieldIndex(e,t){const n=da(e),r={indexId:(i=t).indexId,collectionGroup:i.collectionGroup,fields:i.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))};var i;delete r.indexId;const s=n.add(r);if(t.indexState){const n=fa(e);return s.next((e=>{n.put(Oo(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=da(e),r=fa(e),i=ha(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=da(e),n=ha(e),r=fa(e);return t.j().next((()=>n.j())).next((()=>r.j()))}createTargetIndexes(e,t){return Ht.forEach(this.hn(t),(t=>this.getIndexType(e,t).next((n=>{if(0===n||1===n){const n=new Jo(t).an();if(null!=n)return this.addFieldIndex(e,n)}}))))}getDocumentsMatchingTarget(e,t){const n=ha(e);let r=!0;const i=new Map;return Ht.forEach(this.hn(t),(t=>this.Pn(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Ui();const r=[];return Ht.forEach(i,((i,s)=>{var o;at("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${ci(t)}`);const a=function(e,t){const n=Ft(t);if(void 0===n)return null;for(const r of hi(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Ut(t))for(const t of hi(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Ut(t)){const t=0===i.kind?di(e,i.fieldPath,e.startAt):fi(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Pr(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Ut(t)){const t=0===i.kind?fi(e,i.fieldPath,e.endAt):di(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Pr(n,r)}(s,i),h=this.In(i,s,u),d=this.In(i,s,l),f=this.Tn(i,s,c),m=this.En(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Ht.forEach(m,(i=>n.G(i,t.limit).next((t=>{t.forEach((t=>{const n=Pt.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ht.resolve(null)}))}hn(e){let t=this.ln.get(e);return t||(t=0===e.filters.length?[e]:Yo(zr.create(e.filters,"and")).map((t=>ai(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.ln.set(e,t),t)}En(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):ca,h=this.An(e,a,n[l%c],r),d=this.Rn(e,a,i[l%c],s),f=o.map((t=>this.An(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}An(e,t,n,r){const i=new Qo(e,Pt.empty(),t,n);return r?i:i.Zt()}Rn(e,t,n,r){const i=new Qo(e,Pt.empty(),t,n);return r?i.Zt():i}Pn(e,t){const n=new Jo(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.rn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.hn(t);return Ht.forEach(r,(t=>this.Pn(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Hn(Lt.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>null!==t.limit&&r.length>1&&2===n?1:n))}Vn(e,t){const n=new $o;for(const r of Ut(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Yt(r.kind);Bo.vt.It(e,i)}return n.zt()}dn(e){const t=new $o;return Bo.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new $o;return Bo.vt.It(wr(this.databaseId,t),n.Yt(function(e){const t=Ut(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(null===n)return[];let r=[];r.push(new $o);let i=0;for(const s of Ut(e)){const e=n[i++];for(const n of r)if(this.fn(t,s.fieldPath)&&Ir(e))r=this.gn(r,s,e);else{const t=n.Yt(s.kind);Bo.vt.It(e,t)}}return this.pn(r)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new $o;n.seed(e.zt()),Bo.vt.It(s,n.Yt(t.kind)),i.push(n)}return i}fn(e,t){return!!e.filters.find((e=>e instanceof jr&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=da(e),r=fa(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next((e=>{const t=[];return Ht.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new qt(t.sequenceNumber,new zt(xo(t.readTime),new Pt(mn(t.documentKey)),t.largestBatchId)):qt.empty(),r=e.fields.map((([e,t])=>new Bt(Lt.fromServerFormat(e),t)));return new Vt(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Ct(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=da(e),i=fa(e);return this.yn(e).next((e=>r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ht.forEach(t,(t=>i.put(Oo(t.indexId,this.uid,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ht.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ht.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ht.forEach(i,(n=>this.wn(e,t,n).next((t=>{const i=this.Sn(r,n);return t.isEqual(i)?Ht.resolve():this.bn(e,r,n,t,i)})))))))}))}Dn(e,t,n,r){return ha(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,r){return ha(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const r=ha(e);let i=new Hn(Ho);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},((e,r)=>{i=i.add(new Qo(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}Sn(e,t){let n=new Hn(Ho);const r=this.Vn(t,e);if(null==r)return n;const i=Ft(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Ir(s))for(const i of s.arrayValue.values||[])n=n.add(new Qo(t.indexId,e.key,this.dn(i),r))}else n=n.add(new Qo(t.indexId,e.key,ca,r));return n}bn(e,t,n,r,i){at("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Jn(s),c=Jn(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Jn(o)):t?(i(a),a=Jn(s)):(a=Jn(s),c=Jn(o))}}(r,i,Ho,(r=>{s.push(this.Dn(e,t,n,r))}),(r=>{s.push(this.vn(e,t,n,r))})),Ht.waitFor(s)}yn(e){let t=1;return fa(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Ho(e,t))).filter(((e,t,n)=>!t||0!==Ho(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Ho(s,e),i=Ho(s,t);if(0===n)r[0]=e.Zt();else if(n>0&&i<0)r.push(s),r.push(s.Zt());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.Cn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,ca,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,ca,[]];i.push(IDBKeyRange.bound(e,t))}return i}Cn(e,t){return Ho(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ma)}getMinOffset(e,t){return Ht.mapArray(this.hn(t),(t=>this.Pn(e,t).next((e=>e||ht())))).next(ma)}}function la(e){return qn(e,"collectionParents")}function ha(e){return qn(e,"indexEntries")}function da(e){return qn(e,"indexConfiguration")}function fa(e){return qn(e,"indexState")}function ma(e){dt(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Gt(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new zt(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */const pa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ga{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ga(e,ga.DEFAULT_COLLECTION_PERCENTILE,ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function ya(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{dt(1===a)})));const u=[];for(const l of n.mutations){const e=yn(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ht.waitFor(s).next((()=>u))}function va(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw ht();t=e.noDocument}return JSON.stringify(t).length}
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
 */ga.DEFAULT_COLLECTION_PERCENTILE=10,ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ga.DEFAULT=new ga(41943040,ga.DEFAULT_COLLECTION_PERCENTILE,ga.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ga.DISABLED=new ga(-1,0,0);class wa{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Fn={}}static lt(e,t,n,r){dt(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new wa(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ia(e).J({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=_a(e),s=Ia(e);return s.add({}).next((o=>{dt("number"==typeof o);const a=new ws(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>so(e.ct,t))),i=n.mutations.map((t=>so(e.ct,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new Hn(((e,t)=>Ct(e.canonicalString(),t.canonicalString())));for(const e of r){const t=yn(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,vn))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Fn[o]=a.keys()})),Ht.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Ia(e).get(t).next((e=>e?(dt(e.userId===this.userId),Co(this.serializer,e)):null))}Mn(e,t){return this.Fn[t]?Ht.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Fn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Ia(e).J({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(dt(t.batchId>=n),i=Co(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Ia(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ia(e).U("userMutationsIndex",t).next((e=>e.map((e=>Co(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=gn(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return _a(e).J({range:r},((n,r,s)=>{const[o,a,c]=n,u=mn(a);if(o===this.userId&&t.path.isEqual(u))return Ia(e).get(c).next((e=>{if(!e)throw ht();dt(e.userId===this.userId),i.push(Co(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Hn(Ct);const r=[];return t.forEach((t=>{const i=gn(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=_a(e).J({range:s},((e,r,i)=>{const[s,o,a]=e,c=mn(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Ht.waitFor(r).next((()=>this.xn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=gn(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Hn(Ct);return _a(e).J({range:s},((e,t,i)=>{const[s,a,c]=e,u=mn(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.xn(e,o)))}xn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Ia(e).get(t).next((e=>{if(null===e)throw ht();dt(e.userId===this.userId),n.push(Co(this.serializer,e))})))})),Ht.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return ya(e._e,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.On(t.batchId)})),Ht.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ht.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return _a(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=mn(e[1]);r.push(t)}else n.done()})).next((()=>{dt(0===r.length)}))}))}containsKey(e,t){return ba(e,this.userId,t)}Nn(e){return Ea(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function ba(e,t,n){const r=gn(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return _a(e).J({range:s,H:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Ia(e){return qn(e,"mutations")}function _a(e){return qn(e,"documentMutations")}function Ea(e){return qn(e,"mutationQueues")}
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
 */class Ta{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ta(0)}static kn(){return new Ta(-1)}}
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
 */class Sa{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next((t=>{const n=new Ta(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.qn(e).next((e=>kt.fromTimestamp(new Nt(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.qn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.qn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Qn(e,r))))}addTargetData(e,t){return this.Kn(e,t).next((()=>this.qn(e).next((n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>xa(e).delete(t.targetId))).next((()=>this.qn(e))).next((t=>(dt(t.targetCount>0),t.targetCount-=1,this.Qn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return xa(e).J(((s,o)=>{const a=Do(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ht.waitFor(i))).next((()=>r))}forEachTarget(e,t){return xa(e).J(((e,n)=>{const r=Do(n);t(r)}))}qn(e){return Ca(e).get("targetGlobalKey").next((e=>(dt(null!==e),e)))}Qn(e,t){return Ca(e).put("targetGlobalKey",t)}Kn(e,t){return xa(e).put(Ao(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ci(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return xa(e).J({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Do(n);ui(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Da(e);return t.forEach((t=>{const s=hn(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ht.waitFor(r)}removeMatchingKeys(e,t,n){const r=Da(e);return Ht.forEach(t,(t=>{const i=hn(t.path);return Ht.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Da(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Da(e);let i=Ui();return r.J({range:n,H:!0},((e,t,n)=>{const r=mn(e[1]),s=new Pt(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=hn(t.path),r=IDBKeyRange.bound([n],[At(n)],!1,!0);let i=0;return Da(e).J({index:"documentTargetsIndex",H:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}ot(e,t){return xa(e).get(t).next((e=>e?Do(e):null))}}function xa(e){return qn(e,"targets")}function Ca(e){return qn(e,"targetGlobal")}function Da(e){return qn(e,"targetDocuments")}
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
 */function Aa([e,t],[n,r]){const i=Ct(e,n);return 0===i?Ct(t,r):i}class Na{constructor(e){this.Un=e,this.buffer=new Hn(Aa),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Aa(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ka{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return null!==this.jn}Hn(e){at("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){en(e)?at("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Qt(e)}await this.Hn(3e5)}))}}class Ra{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ht.resolve(cn.oe);const n=new Na(t);return this.Jn.forEachTarget(e,(e=>n.zn(e.sequenceNumber))).next((()=>this.Jn.Zn(e,(e=>n.zn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(at("LruGarbageCollector","Garbage collection skipped; disabled"),Ht.resolve(pa)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(at("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pa):this.Xn(e,t)))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(at("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),ot()<=T.DEBUG&&at("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),Ht.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
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
class Oa{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Ra(e,t)}(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}er(e){let t=0;return this.Zn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,((e,n)=>t(n)))}addReference(e,t,n){return Ma(e,n)}removeReference(e,t,n){return Ma(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ma(e,t)}nr(e,t){return function(e,t){let n=!1;return Ea(e).Y((r=>ba(e,r,t).next((e=>(e&&(n=!0),Ht.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.tr(e,((s,o)=>{if(o<=t){const t=this.nr(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,kt.min()),Da(e).delete([0,hn(s.path)]))))}));r.push(t)}})).next((()=>Ht.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ma(e,t)}tr(e,t){const n=Da(e);let r,i=cn.oe;return n.J({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==cn.oe&&t(new Pt(mn(r)),i),i=o,r=s):i=cn.oe})).next((()=>{i!==cn.oe&&t(new Pt(mn(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ma(e,t){return Da(e).put((n=t,r=e.currentSequenceNumber,{targetId:0,path:hn(n.path),sequenceNumber:r}));var n,r}
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
 */class La{constructor(){this.changes=new Di((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Lr.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ht.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class Pa{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ba(e).put(n)}removeEntry(e,t,n){return Ba(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],To(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.rr(e,n))))}getEntry(e,t){let n=Lr.newInvalidDocument(t);return Ba(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(qa(t))},((e,r)=>{n=this.ir(t,r)})).next((()=>n))}sr(e,t){let n={size:0,document:Lr.newInvalidDocument(t)};return Ba(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(qa(t))},((e,r)=>{n={document:this.ir(t,r),size:va(r)}})).next((()=>n))}getEntries(e,t){let n=Ni();return this._r(e,t,((e,t)=>{const r=this.ir(e,t);n=n.insert(e,r)})).next((()=>n))}ar(e,t){let n=Ni(),r=new Kn(Pt.comparator);return this._r(e,t,((e,t)=>{const i=this.ir(e,t);n=n.insert(e,i),r=r.insert(e,va(t))})).next((()=>({documents:n,ur:r})))}_r(e,t,n){if(t.isEmpty())return Ht.resolve();let r=new Hn(za);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(qa(r.first()),qa(r.last())),s=r.getIterator();let o=s.getNext();return Ba(e).J({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=Pt.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&za(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.$(qa(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),To(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ba(e).U(IDBKeyRange.bound(o,a,!0)).next((e=>{null==i||i.incrementDocumentReadCount(e.length);let n=Ni();for(const i of e){const e=this.ir(Pt.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(Si(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=Ni();const s=ja(t,n),o=ja(t,zt.max());return Ba(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.ir(Pt.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Fa(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Ua(e).get("remoteDocumentGlobalKey").next((e=>(dt(!!e),e)))}rr(e,t){return Ua(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const e=_o(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(kt.min()))return e}return Lr.newInvalidDocument(e)}}function Va(e){return new Pa(e)}class Fa extends La{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Di((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Hn(((e,t)=>Ct(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Eo(this.cr.serializer,s);r=r.add(i.path.popLast());const c=va(a);n+=c-o.size,t.push(this.cr.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Eo(this.cr.serializer,s.convertToNoDocument(kt.min()));t.push(this.cr.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.cr.updateMetadata(e,n)),Ht.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next((e=>(this.lr.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.cr.ar(e,t).next((({documents:e,ur:t})=>(t.forEach(((t,n)=>{this.lr.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Ua(e){return qn(e,"remoteDocumentGlobal")}function Ba(e){return qn(e,"remoteDocumentsV14")}function qa(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ja(e,t){const n=t.documentKey.path.toArray();return[e,To(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function za(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Ct(n[s],r[s]),i)return i;return i=Ct(n.length,r.length),i||(i=Ct(n[n.length-2],r[r.length-2]),i||Ct(n[n.length-1],r[r.length-1])
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
/**
 * @license
 * Copyright 2022 Google LLC
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
 */)}class Ga{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Ka{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&us(n.mutation,e,Xn.empty(),Nt.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ui()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ui()){const r=Mi();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ri();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Mi();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ui())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ni();const s=Pi(),o=Pi();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof fs)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),us(o.mutation,t,o.mutation.getFieldMask(),Nt.now())):s.set(t.key,Xn.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ga(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Pi();let r=new Kn(((e,t)=>e-t)),i=Ui();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Xn.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Ui()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Li();c.forEach((e=>{if(!i.has(e)){const r=as(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ht.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Pt.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):yi(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ht.resolve(Mi());let o=-1,a=i;return s.next((t=>Ht.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ht.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ui()))).next((e=>({batchId:o,changes:Oi(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Pt(t)).next((e=>{let t=Ri();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Ri();return this.indexManager.getCollectionParents(e,i).next((o=>Ht.forEach(o,(o=>{const a=(c=t,u=o.child(i),new mi(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Lr.newInvalidDocument(r)))}));let n=Ri();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&us(s.mutation,r,Xn.empty(),Nt.now()),Si(t,r)&&(n=n.insert(e,r))})),n}))}}
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
 */class $a{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Ht.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:Hs(n.createTime)}),Ht.resolve();var n}getNamedQuery(e,t){return Ht.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:No(n.bundledQuery),readTime:Hs(n.readTime)}),Ht.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Qa{constructor(){this.overlays=new Kn(Pt.comparator),this.Ir=new Map}getOverlay(e,t){return Ht.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Mi();return Ht.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Ht.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),Ht.resolve()}getOverlaysForCollection(e,t,n){const r=Mi(),i=t.length+1,s=new Pt(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ht.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Kn(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Mi(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Mi(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Ht.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Is(t,n));let i=this.Ir.get(t);void 0===i&&(i=Ui(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ha{constructor(){this.sessionToken=Zn.EMPTY_BYTE_STRING}getSessionToken(e){return Ht.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ht.resolve()}}
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
 */class Wa{constructor(){this.Tr=new Hn(Ja.Er),this.dr=new Hn(Ja.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ja(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new Ja(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new Pt(new Ot([])),n=new Ja(t,e),r=new Ja(t,e+1),i=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),i.push(e.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Pt(new Ot([])),n=new Ja(t,e),r=new Ja(t,e+1);let i=Ui();return this.dr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Ja(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ja{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Pt.comparator(e.key,t.key)||Ct(e.wr,t.wr)}static Ar(e,t){return Ct(e.wr,t.wr)||Pt.comparator(e.key,t.key)}}
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
 */class Xa{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Hn(Ja.Er)}checkEmpty(e){return Ht.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ws(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.br=this.br.add(new Ja(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ht.resolve(s)}lookupMutationBatch(e,t){return Ht.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return Ht.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ht.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Ht.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ja(t,0),r=new Ja(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);i.push(t)})),Ht.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Hn(Ct);return t.forEach((e=>{const t=new Ja(e,0),r=new Ja(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),Ht.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Pt.isDocumentKey(i)||(i=i.child(""));const s=new Ja(new Pt(i),0);let o=new Hn(Ct);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.wr)),!0)}),s),Ht.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){dt(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Ht.forEach(t.mutations,(r=>{const i=new Ja(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new Ja(t,0),r=this.br.firstAfterOrEqual(n);return Ht.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ht.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Ya{constructor(e){this.Mr=e,this.docs=new Kn(Pt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ht.resolve(n?n.document.mutableCopy():Lr.newInvalidDocument(t))}getEntries(e,t){let n=Ni();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Lr.newInvalidDocument(e))})),Ht.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ni();const s=t.path,o=new Pt(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Gt(jt(o),n)<=0||(r.has(o.key)||Si(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ht.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ht()}Or(e,t){return Ht.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Za(this)}getSize(e){return Ht.resolve(this.size)}}class Za extends La{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),Ht.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
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
 */class ec{constructor(e){this.persistence=e,this.Nr=new Di((e=>ci(e)),ui),this.lastRemoteSnapshotVersion=kt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wa,this.targetCount=0,this.kr=Ta.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),Ht.resolve()}getLastRemoteSnapshotVersion(e){return Ht.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ht.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Ht.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Ht.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ta(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Ht.resolve()}updateTargetData(e,t){return this.Kn(t),Ht.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Ht.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ht.waitFor(i).next((()=>r))}getTargetCount(e){return Ht.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Ht.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Ht.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ht.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Ht.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Ht.resolve(n)}containsKey(e,t){return Ht.resolve(this.Br.containsKey(t))}}
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
 */class tc{constructor(e,t){this.qr={},this.overlays={},this.Qr=new cn(0),this.Kr=!1,this.Kr=!0,this.$r=new Ha,this.referenceDelegate=e(this),this.Ur=new ec(this),this.indexManager=new oa,this.remoteDocumentCache=new Ya((e=>this.referenceDelegate.Wr(e))),this.serializer=new Io(t),this.Gr=new $a(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qa,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Xa(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){at("MemoryPersistence","Starting transaction:",e);const r=new nc(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return Ht.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class nc extends $t{constructor(e){super(),this.currentSequenceNumber=e}}class rc{constructor(e){this.persistence=e,this.Jr=new Wa,this.Yr=null}static Zr(e){return new rc(e)}get Xr(){if(this.Yr)return this.Yr;throw ht()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Ht.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Ht.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Ht.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ht.forEach(this.Xr,(n=>{const r=Pt.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,kt.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return Ht.or([()=>Ht.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
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
 */class ic{constructor(e){this.serializer=e}O(e,t,n,r){const i=new Wt("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore("owner"),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pn,{unique:!0}),e.createObjectStore("documentMutations")}(e),sc(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ht.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),sc(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:kt.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").U().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pn,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Ht.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.ni(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i))))),n<7&&r>=7&&(s=s.next((()=>this.ii(i)))),n<8&&r>=8&&(s=s.next((()=>this.si(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.oi(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Nn});t.createIndex("collectionPathOverlayIndex",kn,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Rn,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:wn});t.createIndex("documentKeyIndex",bn),t.createIndex("collectionGroupIndex",In)}(e))).next((()=>this._i(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.ai(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:xn}).createIndex("sequenceNumberIndex",Cn,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Dn}).createIndex("documentKeyIndex",An,{unique:!1})}(e)))),n<16&&r>=16&&(s=s.next((()=>{t.objectStore("indexState").clear()})).next((()=>{t.objectStore("indexEntries").clear()}))),n<17&&r>=17&&(s=s.next((()=>{!function(e){e.createObjectStore("globals",{keyPath:"name"})}(e)}))),s}ri(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=va(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next((t=>Ht.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",r).next((n=>Ht.forEach(n,(n=>{dt(n.userId===t.userId);const r=Co(this.serializer,n);return ya(e,t.userId,r).next((()=>{}))}))))}))))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.J(((n,i)=>{const s=new Ot(n),o=[0,hn(s)];r.push(t.get(o).next((n=>{return n?Ht.resolve():(r=s,t.put({targetId:0,path:hn(r),sequenceNumber:e.highestListenSequenceNumber}));var r})))})).next((()=>Ht.waitFor(r)))}))}si(e,t){e.createObjectStore("collectionParents",{keyPath:Sn});const n=t.store("collectionParents"),r=new aa,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:hn(r)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new Ot(e);return i(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],r)=>{const s=mn(t);return i(s.popLast())}))))}oi(e){const t=e.store("targets");return t.J(((e,n)=>{const r=Do(n),i=Ao(this.serializer,r);return t.put(i)}))}_i(e,t){const n=t.store("remoteDocuments"),r=[];return n.J(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(a=n,a.document?new Pt(Ot.fromString(a.document.name).popFirst(5)):a.noDocument?Pt.fromSegments(a.noDocument.path):a.unknownDocument?Pt.fromSegments(a.unknownDocument.path):ht()).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};var a;r.push(i.put(o))})).next((()=>Ht.waitFor(r)))}ai(e,t){const n=t.store("mutations"),r=Va(this.serializer),i=new tc(rc.Zr,this.serializer.ct);return n.U().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Ui();Co(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Ht.forEach(n,((e,n)=>{const s=new rt(n),o=Vo.lt(this.serializer,s),a=i.getIndexManager(s),c=wa.lt(s,this.serializer,a,i.referenceDelegate);return new Ka(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Bn(t,cn.oe),e).next()}))}))}}function sc(e){e.createObjectStore("targetDocuments",{keyPath:En}).createIndex("documentTargetsIndex",Tn,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",_n,{unique:!0}),e.createObjectStore("targetGlobal")}const oc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ac{constructor(e,t,n,r,i,s,o,a,c,u,l=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=s,this.document=o,this.ci=c,this.li=u,this.hi=l,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=e=>Promise.resolve(),!ac.D())throw new pt(mt.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Oa(this,r),this.Ai=t+"main",this.serializer=new Io(a),this.Ri=new Jt(this.Ai,this.hi,new ic(this.serializer)),this.$r=new Uo,this.Ur=new Sa(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Va(this.serializer),this.Gr=new Mo,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,!1===u&&ct("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new pt(mt.FAILED_PRECONDITION,oc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Ur.getHighestSequenceNumber(e)))})).then((e=>{this.Qr=new cn(e,this.ci)})).then((()=>{this.Kr=!0})).catch((e=>(this.Ri&&this.Ri.close(),Promise.reject(e))))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget((async()=>{this.started&&await this.mi()})))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>uc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.wi(e).next((e=>{e||(this.isPrimary=!1,this.ui.enqueueRetryable((()=>this.di(!1))))}))})).next((()=>this.Si(e))).next((t=>this.isPrimary&&!t?this.bi(e).next((()=>!1)):!!t&&this.Di(e).next((()=>!0)))))).catch((e=>{if(en(e))return at("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return at("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.ui.enqueueRetryable((()=>this.di(e))),this.isPrimary=e}))}wi(e){return cc(e).get("owner").next((e=>Ht.resolve(this.vi(e))))}Ci(e){return uc(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=qn(e,"clientMetadata");return t.U().next((e=>{const n=this.xi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ht.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.mi().then((()=>this.Fi())).then((()=>this.pi()))))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?Ht.resolve(!0):cc(e).get("owner").next((t=>{if(null!==t&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new pt(mt.FAILED_PRECONDITION,oc);return!1}}return!(!this.networkEnabled||!this.inForeground)||uc(e).U().next((e=>void 0===this.xi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&at("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Bn(e,cn.oe);return this.bi(t).next((()=>this.Ci(t)))})),this.Ri.close(),this.qi()}xi(e,t){return e.filter((e=>this.Mi(e.updateTimeMs,t)&&!this.Ni(e.clientId)))}Qi(){return this.runTransaction("getActiveClients","readonly",(e=>uc(e).U().next((e=>this.xi(e,18e5).map((e=>e.clientId))))))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return wa.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ua(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Vo.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){at("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=17===(s=this.hi)?Un:16===s?Fn:15===s?Vn:14===s?Pn:13===s?Ln:12===s?Mn:11===s?On:void ht();var s;let o;return this.Ri.runTransaction(e,r,i,(r=>(o=new Bn(r,this.Qr?this.Qr.next():cn.oe),"readwrite-primary"===t?this.wi(o).next((e=>!!e||this.Si(o))).next((t=>{if(!t)throw ct(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable((()=>this.di(!1))),new pt(mt.FAILED_PRECONDITION,Kt);return n(o)})).next((e=>this.Di(o).next((()=>e)))):this.Ki(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Ki(e){return cc(e).get("owner").next((e=>{if(null!==e&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)&&!this.vi(e)&&!(this.li||this.allowTabSynchronization&&e.allowTabSynchronization))throw new pt(mt.FAILED_PRECONDITION,oc)}))}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return cc(e).put("owner",t)}static D(){return Jt.D()}bi(e){const t=cc(e);return t.get("owner").next((e=>this.vi(e)?(at("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ht.resolve()))}Mi(e,t){const n=Date.now();return!(e<n-t||e>n&&(ct(`Detected an update time that is in the future: ${e} > ${n}`),1))}fi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ii=()=>{this.ui.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.mi())))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground="visible"===this.document.visibilityState)}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Pi=()=>{this.Li();const e=/(?:Version|Mobile)\/1[456]/;d()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=null!==(null===(t=this.Vi)||void 0===t?void 0:t.getItem(this.Oi(e)));return at("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ct("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ct("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch(e){}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function cc(e){return qn(e,"owner")}function uc(e){return qn(e,"clientMetadata")}
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
class lc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=Ui(),r=Ui();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new lc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class hc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class dc{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=d()?8:Xt(h())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Zi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new hc;return this.Xi(e,t,n).next((r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>i.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(ot()<=T.DEBUG&&at("QueryEngine","SDK will not create cache indexes for query:",Ti(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Ht.resolve()):(ot()<=T.DEBUG&&at("QueryEngine","Query:",Ti(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(ot()<=T.DEBUG&&at("QueryEngine","The SDK decides to create cache indexes for query:",Ti(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wi(t))):Ht.resolve())}Yi(e,t){if(gi(t))return Ht.resolve(null);let n=wi(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Ii(t,null,"F"),n=wi(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ui(...r);return this.Ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,Ii(t,null,"F")):this.rs(e,s,t,n)}))))})))))}Zi(e,t,n,r){return gi(t)||r.isEqual(kt.min())?Ht.resolve(null):this.Ji.getDocuments(e,n).next((i=>{const s=this.ts(t,i);return this.ns(t,s,n,r)?Ht.resolve(null):(ot()<=T.DEBUG&&at("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ti(t)),this.rs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=kt.fromTimestamp(1e9===r?new Nt(n+1,0):new Nt(n,r));return new zt(i,Pt.empty(),t)}(r,-1)).next((e=>e)))}))}ts(e,t){let n=new Hn(xi(e));return t.forEach(((t,r)=>{Si(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return ot()<=T.DEBUG&&at("QueryEngine","Using full collection scan to execute query:",Ti(t)),this.Ji.getDocumentsMatchingQuery(e,t,zt.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class fc{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new Kn(Ct),this._s=new Di((e=>ci(e)),ui),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ka(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function mc(e,t,n,r){return new fc(e,t,n,r)}async function pc(e,t){const n=ft(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Ui();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({hs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function gc(e){const t=ft(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function yc(e,t){const n=ft(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);var l,h,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(Zn.EMPTY_BYTE_STRING,kt.min()).withLastLimboFreeSnapshotVersion(kt.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ur.updateTargetData(e,u))}));let a=Ni(),c=Ui();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=Ui(),i=Ui();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ni();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(kt.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):at("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Ps:r,Is:i}}))}(e,s,t.documentUpdates).next((e=>{a=e.Ps,c=e.Is}))),!r.isEqual(kt.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ht.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.os=i,e)))}function vc(e,t){const n=ft(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function wc(e,t,n){const r=ft(e),i=r.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!en(o))throw o;at("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function bc(e,t,n){const r=ft(e);let i=kt.min(),s=Ui();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=ft(e),i=r._s.get(n);return void 0!==i?Ht.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,wi(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:kt.min(),n?s:Ui()))).next((e=>(function(e,t,n){let r=e.us.get(t)||kt.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ts:s})))))}class Ic{constructor(){this.activeTargetIds=Bi}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _c{constructor(){this.so=new Ic,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ic,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Ec{_o(e){}shutdown(){}}
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
 */class Tc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){at("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){at("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Sc=null;function xc(){return null===Sc?Sc=268435456+Math.round(2147483648*Math.random()):Sc++,"0x"+Sc.toString(16)
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
 */}const Cc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Dc{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
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
 */const Ac="WebChannelConnection";class Nc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const s=xc(),o=this.xo(e,t.toUriEncodedString());at("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,r,i),this.No(e,o,a,n).then((t=>(at("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ut("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+it,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=Cc[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=xc();return new Promise(((s,o)=>{const a=new Qe;a.setWithCredentials(!0),a.listenOnce(We.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Je.NO_ERROR:const t=a.getResponseJson();at(Ac,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Je.TIMEOUT:at(Ac,`RPC '${e}' ${i} timed out`),o(new pt(mt.DEADLINE_EXCEEDED,"Request time out"));break;case Je.HTTP_ERROR:const n=a.getStatus();if(at(Ac,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(mt).indexOf(t)>=0?t:mt.UNKNOWN}(t.status);o(new pt(e,t.message))}else o(new pt(mt.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new pt(mt.UNAVAILABLE,"Connection failed."));break;default:ht()}}finally{at(Ac,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);at(Ac,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Bo(e,t,n){const r=xc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=et(),o=Ze(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");at(Ac,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Dc({Io:t=>{d?at(Ac,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(at(Ac,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),at(Ac,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},To:()=>l.close()}),m=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return m(l,He.EventType.OPEN,(()=>{d||(at(Ac,`RPC '${e}' stream ${r} transport opened.`),f.yo())})),m(l,He.EventType.CLOSE,(()=>{d||(d=!0,at(Ac,`RPC '${e}' stream ${r} transport closed`),f.So())})),m(l,He.EventType.ERROR,(t=>{d||(d=!0,ut(Ac,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new pt(mt.UNAVAILABLE,"The operation could not be completed")))})),m(l,He.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];dt(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){at(Ac,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Es[e];if(void 0!==t)return Ss(t)}(t),i=o.message;void 0===n&&(n=mt.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.So(new pt(n,i)),l.close()}else at(Ac,`RPC '${e}' stream ${r} received:`,i),f.bo(i)}})),m(o,Ye.STAT_EVENT,(t=>{t.stat===Xe.PROXY?at(Ac,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Xe.NOPROXY&&at(Ac,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}
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
 */function kc(){return"undefined"!=typeof document?document:null}
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
 */function Rc(e){return new zs(e,!0)}
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
 */class Oc{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&at("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
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
 */class Mc{constructor(e,t,n,r,i,s,o,a){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Oc(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===mt.RESOURCE_EXHAUSTED?(ct(t.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===mt.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new pt(mt.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return at("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(at("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Lc extends Mc{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:ht(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(dt(void 0===t||"string"==typeof t),Zn.fromBase64String(t||"")):(dt(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Zn.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?mt.UNKNOWN:Ss(e.code);return new pt(t,e.message||"")}(a);n=new Ls(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Zs(e,r.document.name),s=Hs(r.document.updateTime),o=r.document.createTime?Hs(r.document.createTime):kt.min(),a=new Or({mapValue:{fields:r.document.fields}}),c=Lr.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Os(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Zs(e,r.document),s=r.readTime?Hs(r.readTime):kt.min(),o=Lr.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Os([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Zs(e,r.document),s=r.removedTargetIds||[];n=new Os([],s,i,null)}else{if(!("filter"in t))return ht();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new _s(r,i),o=e.targetId;n=new Ms(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return kt.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?kt.min():t.readTime?Hs(t.readTime):kt.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=no(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=li(r)?{documents:ao(e,r)}:{query:co(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=$s(e,t.resumeToken);const r=Gs(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(kt.min())>0){n.readTime=Ks(e,t.snapshotVersion.toTimestamp());const r=Gs(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ht()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=no(this.serializer),t.removeTarget=e,this.a_(t)}}class Pc extends Mc{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return dt(!!e.streamToken),this.lastStreamToken=e.streamToken,dt(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){dt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(dt(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Hs(e.updateTime):Hs(t);return n.isEqual(kt.min())&&(n=Hs(t)),new rs(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Hs(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=no(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>so(this.serializer,e)))};this.a_(t)}}
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
 */class Vc extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new pt(mt.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Mo(e,Js(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===mt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new pt(mt.UNKNOWN,e.toString())}))}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Lo(e,Js(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===mt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new pt(mt.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Fc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ct(t),this.D_=!1):at("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
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
 */class Uc{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((e=>{n.enqueueAndForget((async()=>{Hc(this)&&(at("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ft(e);t.L_.add(4),await qc(t),t.q_.set("Unknown"),t.L_.delete(4),await Bc(t)}(this))}))})),this.q_=new Fc(n,r)}}async function Bc(e){if(Hc(e))for(const t of e.B_)await t(!0)}async function qc(e){for(const t of e.B_)await t(!1)}function jc(e,t){const n=ft(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),Qc(n)?$c(n):du(n).r_()&&Gc(n,t))}function zc(e,t){const n=ft(e),r=du(n);n.N_.delete(t),r.r_()&&Kc(n,t),0===n.N_.size&&(r.r_()?r.o_():Hc(n)&&n.q_.set("Unknown"))}function Gc(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(kt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}du(e).A_(t)}function Kc(e,t){e.Q_.xe(t),du(e).R_(t)}function $c(e){e.Q_=new Vs({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),du(e).start(),e.q_.v_()}function Qc(e){return Hc(e)&&!du(e).n_()&&e.N_.size>0}function Hc(e){return 0===ft(e).L_.size}function Wc(e){e.Q_=void 0}async function Jc(e){e.q_.set("Online")}async function Xc(e){e.N_.forEach(((t,n)=>{Gc(e,t)}))}async function Yc(e,t){Wc(e),Qc(e)?(e.q_.M_(t),$c(e)):e.q_.set("Unknown")}async function Zc(e,t,n){if(e.q_.set("Online"),t instanceof Ls&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){at("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await eu(e,r)}else if(t instanceof Os?e.Q_.Ke(t):t instanceof Ms?e.Q_.He(t):e.Q_.We(t),!n.isEqual(kt.min()))try{const t=await gc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(Zn.EMPTY_BYTE_STRING,r.snapshotVersion)),Kc(e,t);const i=new bo(r.target,t,n,r.sequenceNumber);Gc(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){at("RemoteStore","Failed to raise snapshot:",i),await eu(e,i)}}async function eu(e,t,n){if(!en(t))throw t;e.L_.add(1),await qc(e),e.q_.set("Offline"),n||(n=()=>gc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{at("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await Bc(e)}))}function tu(e,t){return t().catch((n=>eu(e,n,t)))}async function nu(e){const t=ft(e),n=fu(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;ru(t);)try{const e=await vc(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,iu(t,e)}catch(i){await eu(t,i)}su(t)&&ou(t)}function ru(e){return Hc(e)&&e.O_.length<10}function iu(e,t){e.O_.push(t);const n=fu(e);n.r_()&&n.V_&&n.m_(t.mutations)}function su(e){return Hc(e)&&!fu(e).n_()&&e.O_.length>0}function ou(e){fu(e).start()}async function au(e){fu(e).p_()}async function cu(e){const t=fu(e);for(const n of e.O_)t.m_(n.mutations)}async function uu(e,t,n){const r=e.O_.shift(),i=bs.from(r,t,n);await tu(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await nu(e)}async function lu(e,t){t&&fu(e).V_&&await async function(e,t){if(function(e){switch(e){default:return ht();case mt.CANCELLED:case mt.UNKNOWN:case mt.DEADLINE_EXCEEDED:case mt.RESOURCE_EXHAUSTED:case mt.INTERNAL:case mt.UNAVAILABLE:case mt.UNAUTHENTICATED:return!1;case mt.INVALID_ARGUMENT:case mt.NOT_FOUND:case mt.ALREADY_EXISTS:case mt.PERMISSION_DENIED:case mt.FAILED_PRECONDITION:case mt.ABORTED:case mt.OUT_OF_RANGE:case mt.UNIMPLEMENTED:case mt.DATA_LOSS:return!0}}(n=t.code)&&n!==mt.ABORTED){const n=e.O_.shift();fu(e).s_(),await tu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await nu(e)}var n}(e,t),su(e)&&ou(e)}async function hu(e,t){const n=ft(e);n.asyncQueue.verifyOperationInProgress(),at("RemoteStore","RemoteStore received new credentials");const r=Hc(n);n.L_.add(3),await qc(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await Bc(n)}function du(e){return e.K_||(e.K_=function(e,t,n){const r=ft(e);return r.w_(),new Lc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:Jc.bind(null,e),Ro:Xc.bind(null,e),mo:Yc.bind(null,e),d_:Zc.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),Qc(e)?$c(e):e.q_.set("Unknown")):(await e.K_.stop(),Wc(e))}))),e.K_}function fu(e){return e.U_||(e.U_=function(e,t,n){const r=ft(e);return r.w_(),new Pc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:au.bind(null,e),mo:lu.bind(null,e),f_:cu.bind(null,e),g_:uu.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await nu(e)):(await e.U_.stop(),e.O_.length>0&&(at("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
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
 */}class mu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new mu(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new pt(mt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pu(e,t){if(ct("AsyncQueue",`${t}: ${e}`),en(e))return new pt(mt.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class gu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Pt.comparator(t.key,n.key):(e,t)=>Pt.comparator(e.key,t.key),this.keyedMap=Ri(),this.sortedSet=new Kn(this.comparator)}static emptySet(e){return new gu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new gu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class yu{constructor(){this.W_=new Kn(Pt.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ht():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class vu{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new vu(e,t,gu.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class wu{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class bu{constructor(){this.queries=Iu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=ft(e),r=n.queries;n.queries=Iu(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new pt(mt.ABORTED,"Firestore shutting down"))}}function Iu(){return new Di((e=>Ei(e)),_i)}async function _u(e,t){const n=ft(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new wu,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const e=pu(o,`Initialization of query '${Ti(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&xu(n)}async function Eu(e,t){const n=ft(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Tu(e,t){const n=ft(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&xu(n)}function Su(e,t,n){const r=ft(e),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(t)}function xu(e){e.Y_.forEach((e=>{e.next()}))}var Cu,Du;(Du=Cu||(Cu={})).ea="default",Du.Cache="cache";class Au{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new vu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=vu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Cu.Cache}}
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
 */class Nu{constructor(e){this.key=e}}class ku{constructor(e){this.key=e}}class Ru{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ui(),this.mutatedKeys=Ui(),this.Aa=xi(e),this.Ra=new gu(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new yu,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Si(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ga(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Aa(l,a)>0||c&&this.Aa(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:o,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ht()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const o=t&&!r?this.ya():[],a=0===this.da.size&&this.current&&!r?1:0,c=a!==this.Ea;return this.Ea=a,0!==s.length||c?{snapshot:new vu(this.query,e.Ra,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new yu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ui(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new ku(e))})),this.da.forEach((n=>{e.has(n)||t.push(new Nu(n))})),t}ba(e){this.Ta=e.Ts,this.da=Ui();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return vu.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Ou{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Mu{constructor(e){this.key=e,this.va=!1}}class Lu{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Di((e=>Ei(e)),_i),this.Ma=new Map,this.xa=new Set,this.Oa=new Kn(Pt.comparator),this.Na=new Map,this.La=new Wa,this.Ba={},this.ka=new Map,this.qa=Ta.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Pu(e,t,n=!0){const r=nl(e);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Fu(r,t,n,!0),i}async function Vu(e,t){const n=nl(e);await Fu(n,t,!0,!1)}async function Fu(e,t,n,r){const i=await function(e,t){const n=ft(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((i=>i?(r=i,Ht.resolve(r)):n.Ur.allocateTargetId(e).next((i=>(r=new bo(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}(e.localStore,wi(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await bc(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return Ju(e,t.targetId,a.wa),a.snapshot}(e,t,n,r);const s=await bc(e.localStore,t,!0),o=new Ru(t,s.Ts),a=o.ma(s.documents),c=Rs.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Ju(e,n,u.wa);const l=new Ou(t,n,o);return e.Fa.set(t,l),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&jc(e.remoteStore,i),a}async function Uu(e,t,n){const r=ft(e),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter((e=>!_i(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&zc(r.remoteStore,i.targetId),Hu(r,i.targetId)})).catch(Qt)):(Hu(r,i.targetId),await wc(r.localStore,i.targetId,!0))}async function Bu(e,t){const n=ft(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zc(n.remoteStore,r.targetId))}async function qu(e,t){const n=ft(e);try{const e=await yc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(dt(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?dt(r.va):e.removedDocuments.size>0&&(dt(r.va),r.va=!1))})),await Zu(n,e,t)}catch(r){await Qt(r)}}function ju(e,t,n){const r=ft(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ft(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)})),r&&xu(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zu(e,t,n){const r=ft(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),s=i&&i.key;if(s){let e=new Kn(Pt.comparator);e=e.insert(s,Lr.newNoDocument(s,kt.min()));const n=Ui().add(s),i=new ks(kt.min(),new Map,new Kn(Ct),e,n);await qu(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(t),Yu(r)}else await wc(r.localStore,t,!1).then((()=>Hu(r,t,n))).catch(Qt)}async function Gu(e,t){const n=ft(e),r=t.batch.batchId;try{const e=await function(e,t){const n=ft(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ht.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);dt(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ui();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Qu(n,r,null),$u(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zu(n,e)}catch(i){await Qt(i)}}async function Ku(e,t,n){const r=ft(e);try{const e=await function(e,t){const n=ft(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(dt(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Qu(r,t,n),$u(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Zu(r,e)}catch(i){await Qt(i)}}function $u(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function Qu(e,t,n){const r=ft(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Hu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||Wu(e,t)}))}function Wu(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(zc(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),Yu(e))}function Ju(e,t,n){for(const r of n)r instanceof Nu?(e.La.addReference(r.key,t),Xu(e,r)):r instanceof ku?(at("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||Wu(e,r.key)):ht()}function Xu(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(at("SyncEngine","New document in limbo: "+n),e.xa.add(r),Yu(e))}function Yu(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new Pt(Ot.fromString(t)),r=e.qa.next();e.Na.set(r,new Mu(n)),e.Oa=e.Oa.insert(n,r),jc(e.remoteStore,new bo(wi(pi(n.path)),r,"TargetPurposeLimboResolution",cn.oe))}}async function Zu(e,t,n){const r=ft(e),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,a)=>{o.push(r.Ka(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=lc.Wi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ca.d_(i),await async function(e,t){const n=ft(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ht.forEach(t,(t=>Ht.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ht.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!en(r))throw r;at("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,s))}async function el(e,t){const n=ft(e);if(!n.currentUser.isEqual(t)){at("SyncEngine","User change. New user:",t.toKey());const e=await pc(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach((e=>{e.forEach((e=>{e.reject(new pt(mt.CANCELLED,i))}))})),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Zu(n,e.hs)}var r,i}function tl(e,t){const n=ft(e),r=n.Na.get(t);if(r&&r.va)return Ui().add(r.key);{let e=Ui();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function nl(e){const t=ft(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zu.bind(null,t),t.Ca.d_=Tu.bind(null,t.eventManager),t.Ca.$a=Su.bind(null,t.eventManager),t}function rl(e){const t=ft(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Gu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ku.bind(null,t),t}class il{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return mc(this.persistence,new dc,e.initialUser,this.serializer)}Ga(e){return new tc(rc.Zr,this.serializer)}Wa(e){return new _c}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}il.provider={build:()=>new il};class sl extends il{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await rl(this.Ja.syncEngine),await nu(this.Ja.remoteStore),await this.persistence.yi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}za(e){return mc(this.persistence,new dc,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new ka(n,e.asyncQueue,t)}Ha(e,t){const n=new an(t,this.persistence);return new on(e.asyncQueue,n)}Ga(e){const t=function(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ga.withCacheSize(this.cacheSizeBytes):ga.DEFAULT;return new ac(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,"undefined"!=typeof window?window:null,kc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new _c}}class ol{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ju(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=el.bind(null,this.syncEngine),await async function(e,t){const n=ft(e);t?(n.L_.delete(2),await Bc(n)):t||(n.L_.add(2),await qc(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bu}createDatastore(e){const t=Rc(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Nc(r));var r;return function(e,t,n,r){return new Vc(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>ju(this.syncEngine,e,0),s=Tc.D()?new Tc:new Ec,new Uc(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Lu(e,t,n,r,i,s);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=ft(e);at("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await qc(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}ol.provider={build:()=>new ol};
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
class al{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ct("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
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
 */class cl{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=rt.UNAUTHENTICATED,this.clientId=xt.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{at("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(at("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=pu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ul(e,t){e.asyncQueue.verifyOperationInProgress(),at("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await pc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function ll(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){at("FirestoreClient","Using user provided OfflineComponentProvider");try{await ul(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===mt.FAILED_PRECONDITION||n.code===mt.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;ut("Error using user provided cache. Falling back to memory cache: "+i),await ul(e,new il)}}else at("FirestoreClient","Using default OfflineComponentProvider"),await ul(e,new il);var n;return e._offlineComponents}(e);at("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>hu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>hu(t.remoteStore,n))),e._onlineComponents=t}async function hl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(at("FirestoreClient","Using user provided OnlineComponentProvider"),await ll(e,e._uninitializedComponentsProvider._online)):(at("FirestoreClient","Using default OnlineComponentProvider"),await ll(e,new ol))),e._onlineComponents}async function dl(e){const t=await hl(e),n=t.eventManager;return n.onListen=Pu.bind(null,t.syncEngine),n.onUnlisten=Uu.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Vu.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Bu.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
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
function fl(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const ml=new Map;
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
 */function pl(e,t,n){if(!n)throw new pt(mt.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gl(e){if(!Pt.isDocumentKey(e))throw new pt(mt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yl(e){if(Pt.isDocumentKey(e))throw new pt(mt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function vl(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":ht()}function wl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new pt(mt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(e);throw new pt(mt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class bl{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new pt(mt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new pt(mt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new pt(mt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fl(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new pt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new pt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new pt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Il{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pt(mt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new pt(mt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new vt;switch(e.type){case"firstParty":return new _t(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new pt(mt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ml.get(e);t&&(at("ComponentProvider","Removing Datastore"),ml.delete(e),t.terminate())}(this),Promise.resolve()}}function _l(e,t,n,r={}){var s;const o=(e=wl(e,Il))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&ut("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=rt.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new pt(mt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new rt(o)}e._authCredentials=new wt(new yt(t,n))}}
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
 */class El{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new El(this.firestore,e,this._query)}}class Tl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tl(this.firestore,e,this._key)}}class Sl extends El{constructor(e,t,n){super(e,t,pi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tl(this.firestore,null,new Pt(e))}withConverter(e){return new Sl(this.firestore,e,this._path)}}function xl(e,t,...n){if(e=w(e),pl("collection","path",t),e instanceof Il){const r=Ot.fromString(t,...n);return yl(r),new Sl(e,null,r)}{if(!(e instanceof Tl||e instanceof Sl))throw new pt(mt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ot.fromString(t,...n));return yl(r),new Sl(e.firestore,null,r)}}function Cl(e,t,...n){if(e=w(e),1===arguments.length&&(t=xt.newId()),pl("doc","path",t),e instanceof Il){const r=Ot.fromString(t,...n);return gl(r),new Tl(e,null,new Pt(r))}{if(!(e instanceof Tl||e instanceof Sl))throw new pt(mt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ot.fromString(t,...n));return gl(r),new Tl(e.firestore,e instanceof Sl?e.converter:null,new Pt(r))}}
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
 */class Dl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Oc(this,"async_queue_retry"),this.Vu=()=>{const e=kc();e&&at("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=kc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=kc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new gt;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!en(e))throw e;at("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;throw ct("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=mu.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&ht()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Al(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}
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
 */const Nl=-1;class kl extends Il{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Dl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dl(e),this._firestoreClient=void 0,await e}}}function Rl(e,t){const n="string"==typeof e?e:"(default)",r=function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}("object"==typeof e?e:function(e=Ee){const t=Se.get(e);if(!t&&e===Ee&&u())return Re();if(!t)throw Ne.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=c("firestore");e&&_l(r,...e)}return r}function Ol(e){if(e._terminated)throw new pt(mt.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||Ml(e),e._firestoreClient}function Ml(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new ar(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,fl(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new cl(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}function Ll(e,t){ut("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings();return function(e,t,n){if((e=wl(e,kl))._firestoreClient||e._terminated)throw new pt(mt.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new pt(mt.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:n},Ml(e)}
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
 */(e,ol.provider,{build:e=>new sl(e,n.cacheSizeBytes,null==t?void 0:t.forceOwnership)}),Promise.resolve()}class Pl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pl(Zn.fromBase64String(e))}catch(t){throw new pt(mt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pl(Zn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Vl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new pt(mt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class Fl{constructor(e){this._methodName=e}}
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
 */class Ul{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pt(mt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pt(mt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ct(this._lat,e._lat)||Ct(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Bl{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
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
 */const ql=/^__.*__$/;class jl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new fs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ds(e,this.data,t,this.fieldTransforms)}}class zl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new fs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ht()}}class Kl{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Kl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return oh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(Gl(this.Cu)&&ql.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class $l{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Rc(e)}Qu(e,t,n,r=!1){return new Kl({Cu:e,methodName:t,qu:n,path:Lt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ql(e){const t=e._freezeSettings(),n=Rc(e._databaseId);return new $l(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Hl(e,t,n,r,i,s={}){const o=e.Qu(s.merge||s.mergeFields?2:0,t,n,i);nh("Data must be an object, but it was:",o,r);const a=eh(r,o);let c,u;if(s.merge)c=new Xn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=rh(t,r,n);if(!o.contains(i))throw new pt(mt.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ah(e,i)||e.push(i)}c=new Xn(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new jl(new Or(a),c,u)}class Wl extends Fl{_toFieldTransform(e){if(2!==e.Cu)throw 1===e.Cu?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wl}}class Jl extends Fl{_toFieldTransform(e){return new ns(e.path,new Hi)}isEqual(e){return e instanceof Jl}}function Xl(e,t,n,r){const i=e.Qu(1,t,n);nh("Data must be an object, but it was:",i,r);const s=[],o=Or.empty();zn(r,((e,r)=>{const a=sh(t,e,n);r=w(r);const c=i.Nu(a);if(r instanceof Wl)s.push(a);else{const e=Zl(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Xn(s);return new zl(o,a,i.fieldTransforms)}function Yl(e,t,n,r,i,s){const o=e.Qu(1,t,n),a=[rh(t,r,n)],c=[i];if(s.length%2!=0)throw new pt(mt.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(rh(t,s[d])),c.push(s[d+1]);const u=[],l=Or.empty();for(let d=a.length-1;d>=0;--d)if(!ah(u,a[d])){const e=a[d];let t=c[d];t=w(t);const n=o.Nu(e);if(t instanceof Wl)u.push(e);else{const r=Zl(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new Xn(u);return new zl(l,h,o.fieldTransforms)}function Zl(e,t){if(th(e=w(e)))return nh("Unsupported field value:",t,e),eh(e,t);if(e instanceof Fl)return function(e,t){if(!Gl(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Zl(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=w(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return zi(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Nt.fromDate(e);return{timestampValue:Ks(t.serializer,n)}}if(e instanceof Nt){const n=new Nt(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ks(t.serializer,n)}}if(e instanceof Ul)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Pl)return{bytesValue:$s(t.serializer,e._byteString)};if(e instanceof Tl){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ws(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Bl)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return qi(n.serializer,e)}))}}}}};var n;throw t.Bu(`Unsupported field value: ${vl(e)}`)}(e,t)}function eh(e,t){const n={};return Gn(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zn(e,((e,r)=>{const i=Zl(r,t.Mu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function th(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Nt||e instanceof Ul||e instanceof Pl||e instanceof Tl||e instanceof Fl||e instanceof Bl)}function nh(e,t,n){if(!th(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=vl(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function rh(e,t,n){if((t=w(t))instanceof Vl)return t._internalPath;if("string"==typeof t)return sh(e,t);throw oh("Field path arguments must be of type string or ",e,!1,void 0,n)}const ih=new RegExp("[~\\*/\\[\\]]");function sh(e,t,n){if(t.search(ih)>=0)throw oh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vl(...t.split("."))._internalPath}catch(r){throw oh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function oh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new pt(mt.INVALID_ARGUMENT,a+e+c)}function ah(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class ch{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new uh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class uh extends ch{data(){return super.data()}}function lh(e,t){return"string"==typeof t?sh(e,t):t instanceof Vl?t._internalPath:t._delegate._internalPath}
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
 */function hh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new pt(mt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dh{}class fh extends dh{}function mh(e,t,...n){let r=[];t instanceof dh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof yh)).length,n=e.filter((e=>e instanceof ph)).length;if(t>1||t>0&&n>0)throw new pt(mt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class ph extends fh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ph(e,t,n)}_apply(e){const t=this._parse(e);return Th(e._query,t),new El(e.firestore,e.converter,bi(e._query,t))}_parse(e){const t=Ql(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new pt(mt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Eh(o,s);const t=[];for(const n of o)t.push(_h(r,e,n));a={arrayValue:{values:t}}}else a=_h(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Eh(o,s),a=function(e,t,n,r=!1){return Zl(n,e.Qu(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return jr.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function gh(e,t,n){const r=t,i=lh("where",e);return ph._create(i,r,n)}class yh extends dh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yh(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:zr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Th(n,i),n=bi(n,i)}(e._query,t),new El(e.firestore,e.converter,bi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class vh extends fh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new vh(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new pt(mt.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new pt(mt.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ur(t,n)}(e._query,this._field,this._direction);return new El(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new mi(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function wh(e,t="asc"){const n=t,r=lh("orderBy",e);return vh._create(r,n)}class bh extends fh{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new bh(e,t,n)}_apply(e){return new El(e.firestore,e.converter,Ii(e._query,this._limit,this._limitType))}}function Ih(e){return function(e,t){if(t<=0)throw new pt(mt.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),bh._create("limit",e,"F")}function _h(e,t,n){if("string"==typeof(n=w(n))){if(""===n)throw new pt(mt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yi(t)&&-1!==n.indexOf("/"))throw new pt(mt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ot.fromString(n));if(!Pt.isDocumentKey(r))throw new pt(mt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wr(e,new Pt(r))}if(n instanceof Tl)return wr(e,n._key);throw new pt(mt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vl(n)}.`)}function Eh(e,t){if(!Array.isArray(e)||0===e.length)throw new pt(mt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Th(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new pt(mt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new pt(mt.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Sh{convertValue(e,t="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nr(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ht()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return zn(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>nr(e.doubleValue)));return new Bl(i)}convertGeoPoint(e){return new Ul(nr(e.latitude),nr(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=sr(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const t=tr(e);return new Nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ot.fromString(e);dt(wo(n));const r=new cr(n.get(1),n.get(3)),i=new Pt(n.popFirst(5));return r.isEqual(t)||ct(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function xh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r
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
 */}class Ch{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dh extends ch{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ah(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(lh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ah extends Dh{data(e={}){return super.data(e)}}class Nh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ch(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ah(this._firestore,this._userDataWriter,n.key,n,new Ch(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pt(mt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Ah(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Ch(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Ah(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Ch(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:kh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function kh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ht()}}
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
 */function Rh(e){e=wl(e,Tl);const t=wl(e.firestore,kl);return function(e,t,n={}){const r=new gt;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new al({next:a=>{s.Za(),t.enqueueAndForget((()=>Eu(e,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new pt(mt.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new pt(mt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new Au(pi(n.path),s,{includeMetadataChanges:!0,_a:!0});return _u(e,o)}(await dl(e),e.asyncQueue,t,n,r))),r.promise}(Ol(t),e._key).then((n=>Bh(t,e,n)))}class Oh extends Sh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tl(this.firestore,null,t)}}function Mh(e){e=wl(e,El);const t=wl(e.firestore,kl),n=Ol(t),r=new Oh(t);return hh(e._query),function(e,t,n={}){const r=new gt;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new al({next:n=>{s.Za(),t.enqueueAndForget((()=>Eu(e,o))),n.fromCache&&"server"===r.source?i.reject(new pt(mt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Au(n,s,{includeMetadataChanges:!0,_a:!0});return _u(e,o)}(await dl(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new Nh(t,r,e,n)))}function Lh(e,t,n){e=wl(e,Tl);const r=wl(e.firestore,kl),i=xh(e.converter,t,n);return Uh(r,[Hl(Ql(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,is.none())])}function Ph(e,t,n,...r){e=wl(e,Tl);const i=wl(e.firestore,kl),s=Ql(i);let o;return o="string"==typeof(t=w(t))||t instanceof Vl?Yl(s,"updateDoc",e._key,t,n,r):Xl(s,"updateDoc",e._key,t),Uh(i,[o.toMutation(e._key,is.exists(!0))])}function Vh(e,t){const n=wl(e.firestore,kl),r=Cl(e),i=xh(e.converter,t);return Uh(n,[Hl(Ql(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,is.exists(!1))]).then((()=>r))}function Fh(e,...t){var n,r,i;e=w(e);let s={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof t[o]||Al(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Al(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof Tl)u=wl(e.firestore,kl),l=pi(e._key.path),c={next:n=>{t[o]&&t[o](Bh(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=wl(e,El);u=wl(n.firestore,kl),l=n._query;const r=new Oh(u);c={next:e=>{t[o]&&t[o](new Nh(u,r,n,e))},error:t[o+1],complete:t[o+2]},hh(e._query)}return function(e,t,n,r){const i=new al(r),s=new Au(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>_u(await dl(e),s))),()=>{i.Za(),e.asyncQueue.enqueueAndForget((async()=>Eu(await dl(e),s)))}}(Ol(u),l,a,c)}function Uh(e,t){return function(e,t){const n=new gt;return e.asyncQueue.enqueueAndForget((async()=>async function(t,n,r){const i=rl(t);try{const e=await function(e,t){const n=ft(e),r=Nt.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ui());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ni(),c=Ui();return n.cs.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ls(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new fs(e.key,t,Mr(t.value.mapValue),is.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Oi(s)})))}(i.localStore,n);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new Kn(Ct)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(i,e.batchId,r),await Zu(i,e.changes),await nu(i.remoteStore)}catch(e){const n=pu(e,"Failed to persist write");r.reject(n)}}(await function(e){return hl(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Ol(e),t)}function Bh(e,t,n){const r=n.docs.get(t._key),i=new Oh(e);return new Dh(e,i,t._key,r,new Ch(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */class qh{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ql(e)}set(e,t,n){this._verifyNotCommitted();const r=jh(e,this._firestore),i=xh(r.converter,t,n),s=Hl(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,is.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=jh(e,this._firestore);let s;return s="string"==typeof(t=w(t))||t instanceof Vl?Yl(this._dataReader,"WriteBatch.update",i._key,t,n,r):Xl(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,is.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=jh(e,this._firestore);return this._mutations=this._mutations.concat(new ys(t._key,is.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new pt(mt.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function jh(e,t){if((e=w(e)).firestore!==t)throw new pt(mt.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function zh(){return new Jl("serverTimestamp")}
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
 */function Gh(e){return Ol(e=wl(e,kl)),new qh(e,(t=>Uh(e,t)))}!function(e,t=!0){it="10.14.1",Ae(new b("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new kl(new bt(e.getProvider("auth-internal")),new Tt(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new pt(mt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Oe(nt,"4.7.3",e),Oe(nt,"4.7.3","esm2017")}();export{Nl as S,Nt as T,Mh as a,wh as b,xl as c,Cl as d,Ll as e,Rh as f,Rl as g,Vh as h,Re as i,Lh as j,Gh as k,Ih as l,Fh as o,mh as q,zh as s,Ph as u,gh as w};
