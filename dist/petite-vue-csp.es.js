var pt=Object.defineProperty,dt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var xt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable;var X=(e,t,n)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))xt.call(t,n)&&X(e,n,t[n]);if(ke)for(var n of ke(t))vt.call(t,n)&&X(e,n,t[n]);return e},te=(e,t)=>dt(e,mt(t));var T=(e,t,n)=>(X(e,typeof t!="symbol"?t+"":t,n),n);function yt(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function we(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=B(r)?Et(r):we(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(B(e))return e;if(O(e))return e}}const gt=/;(?![^(]*\))/g,bt=/:(.+)/;function Et(e){const t={};return e.split(gt).forEach(n=>{if(n){const r=n.split(bt);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ae(e){let t="";if(B(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const r=Ae(e[n]);r&&(t+=r+" ")}else if(O(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function kt(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=W(e[r],t[r]);return n}function W(e,t){if(e===t)return!0;let n=Se(e),r=Se(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=b(e),r=b(t),n||r)return n&&r?kt(e,t):!1;if(n=O(e),r=O(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const o in e){const c=e.hasOwnProperty(o),u=t.hasOwnProperty(o);if(c&&!u||!c&&u||!W(e[o],t[o]))return!1}}return String(e)===String(t)}function ne(e,t){return e.findIndex(n=>W(n,t))}const wt=Object.assign,At=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},St=Object.prototype.hasOwnProperty,re=(e,t)=>St.call(e,t),b=Array.isArray,ie=e=>_e(e)==="[object Map]",Se=e=>e instanceof Date,B=e=>typeof e=="string",se=e=>typeof e=="symbol",O=e=>e!==null&&typeof e=="object",_t=Object.prototype.toString,_e=e=>_t.call(e),Tt=e=>_e(e).slice(8,-1),oe=e=>B(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Te=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ot=/-(\w)/g,Ct=Te(e=>e.replace(Ot,(t,n)=>n?n.toUpperCase():"")),It=/\B([A-Z])/g,Oe=Te(e=>e.replace(It,"-$1").toLowerCase()),$t=(e,t)=>!Object.is(e,t),Ce=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Pt;function Ie(e,t=Pt){t&&t.active&&t.effects.push(e)}const $e=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Pe=e=>(e.w&C)>0,Me=e=>(e.n&C)>0,Mt=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=C},Rt=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Pe(i)&&!Me(i)?i.delete(e):t[n++]=i,i.w&=~C,i.n&=~C}t.length=n}},ce=new WeakMap;let V=0,C=1;const ue=30;let S;const H=Symbol(""),Re=Symbol("");class jt{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ie(this,r)}run(){if(!this.active)return this.fn();let t=S,n=j;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=S,S=this,j=!0,C=1<<++V,V<=ue?Mt(this):je(this),this.fn()}finally{V<=ue&&Rt(this),C=1<<--V,S=this.parent,j=n,this.parent=void 0}}stop(){this.active&&(je(this),this.onStop&&this.onStop(),this.active=!1)}}function je(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Nt(e,t){e.effect&&(e=e.effect.fn);const n=new jt(e);t&&(wt(n,t),t.scope&&Ie(n,t.scope)),(!t||!t.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function Lt(e){e.effect.stop()}let j=!0;const Ne=[];function Wt(){Ne.push(j),j=!1}function Bt(){const e=Ne.pop();j=e===void 0?!0:e}function G(e,t,n){if(j&&S){let r=ce.get(e);r||ce.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=$e()),Vt(i)}}function Vt(e,t){let n=!1;V<=ue?Me(e)||(e.n|=C,n=!Pe(e)):n=!e.has(S),n&&(e.add(S),S.deps.push(e))}function ae(e,t,n,r,i,s){const o=ce.get(e);if(!o)return;let c=[];if(t==="clear")c=[...o.values()];else if(n==="length"&&b(e))o.forEach((u,f)=>{(f==="length"||f>=r)&&c.push(u)});else switch(n!==void 0&&c.push(o.get(n)),t){case"add":b(e)?oe(n)&&c.push(o.get("length")):(c.push(o.get(H)),ie(e)&&c.push(o.get(Re)));break;case"delete":b(e)||(c.push(o.get(H)),ie(e)&&c.push(o.get(Re)));break;case"set":ie(e)&&c.push(o.get(H));break}if(c.length===1)c[0]&&Le(c[0]);else{const u=[];for(const f of c)f&&u.push(...f);Le($e(u))}}function Le(e,t){for(const n of b(e)?e:[...e])(n!==S||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Dt=yt("__proto__,__v_isRef,__isVue"),We=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(se)),Kt=Ve(),Ut=Ve(!0),Be=qt();function qt(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=N(this);for(let s=0,o=this.length;s<o;s++)G(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(N)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wt();const r=N(this)[t].apply(this,n);return Bt(),r}}),e}function Ve(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?Xt:Ke:t?Qt:De).get(r))return r;const o=b(r);if(!e&&o&&re(Be,i))return Reflect.get(Be,i,s);const c=Reflect.get(r,i,s);return(se(i)?We.has(i):Dt(i))||(e||G(r,"get",i),t)?c:K(c)?!o||!oe(i)?c.value:c:O(c)?e?nn(c):D(c):c}}const Ft=zt();function zt(e=!1){return function(n,r,i,s){let o=n[r];if(fe(o)&&K(o)&&!K(i))return!1;if(!e&&!fe(i)&&(rn(i)||(i=N(i),o=N(o)),!b(n)&&K(o)&&!K(i)))return o.value=i,!0;const c=b(n)&&oe(r)?Number(r)<n.length:re(n,r),u=Reflect.set(n,r,i,s);return n===N(s)&&(c?$t(i,o)&&ae(n,"set",r,i):ae(n,"add",r,i)),u}}function Ht(e,t){const n=re(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ae(e,"delete",t,void 0),r}function Gt(e,t){const n=Reflect.has(e,t);return(!se(t)||!We.has(t))&&G(e,"has",t),n}function Jt(e){return G(e,"iterate",b(e)?"length":H),Reflect.ownKeys(e)}const Yt={get:Kt,set:Ft,deleteProperty:Ht,has:Gt,ownKeys:Jt},Zt={get:Ut,set(e,t){return!0},deleteProperty(e,t){return!0}},De=new WeakMap,Qt=new WeakMap,Ke=new WeakMap,Xt=new WeakMap;function en(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tn(e){return e.__v_skip||!Object.isExtensible(e)?0:en(Tt(e))}function D(e){return fe(e)?e:Ue(e,!1,Yt,null,De)}function nn(e){return Ue(e,!0,Zt,null,Ke)}function Ue(e,t,n,r,i){if(!O(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=tn(e);if(o===0)return e;const c=new Proxy(e,o===2?r:n);return i.set(e,c),c}function fe(e){return!!(e&&e.__v_isReadonly)}function rn(e){return!!(e&&e.__v_isShallow)}function N(e){const t=e&&e.__v_raw;return t?N(t):e}function K(e){return!!(e&&e.__v_isRef===!0)}Promise.resolve();let le=!1;const J=[],sn=Promise.resolve(),U=e=>sn.then(e),qe=e=>{J.includes(e)||J.push(e),le||(le=!0,U(on))},on=()=>{for(const e of J)e();J.length=0,le=!1},cn=/^(spellcheck|draggable|form|list|type)$/,he=({el:e,get:t,effect:n,arg:r,modifiers:i})=>{let s;r==="class"&&(e._class=e.className),n(()=>{let o=t();if(r)(i==null?void 0:i.camel)&&(r=Ct(r)),pe(e,r,o,s);else{for(const c in o)pe(e,c,o[c],s&&s[c]);for(const c in s)(!o||!(c in o))&&pe(e,c,null)}s=o})},pe=(e,t,n,r)=>{if(t==="class")e.setAttribute("class",Ae(e._class?[e._class,n]:n)||"");else if(t==="style"){n=we(n);const{style:i}=e;if(!n)e.removeAttribute("style");else if(B(n))n!==r&&(i.cssText=n);else{for(const s in n)de(i,s,n[s]);if(r&&!B(r))for(const s in r)n[s]==null&&de(i,s,"")}}else!(e instanceof SVGElement)&&t in e&&!cn.test(t)?(e[t]=n,t==="value"&&(e._value=n)):t==="true-value"?e._trueValue=n:t==="false-value"?e._falseValue=n:n!=null?e.setAttribute(t,n):e.removeAttribute(t)},Fe=/\s*!important$/,de=(e,t,n)=>{b(n)?n.forEach(r=>de(e,t,r)):t.startsWith("--")?e.setProperty(t,n):Fe.test(n)?e.setProperty(Oe(t),n.replace(Fe,""),"important"):e[t]=n},I=(e,t)=>{const n=e.getAttribute(t);return n!=null&&e.removeAttribute(t),n},$=(e,t,n,r)=>{e.addEventListener(t,n,r)},un=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,an=["ctrl","shift","alt","meta"],fn={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>an.some(n=>e[`${n}Key`]&&!t[n])},ze=({el:e,get:t,exp:n,arg:r,ctx:i,modifiers:s})=>{if(!!r){var o=c=>{un.test(n)?t(`${n}`)(c):(i.scope.$event=c,t(`${n}`),delete i.scope.$event)};if(r==="vue:mounted"){U(o);return}else if(r==="vue:unmounted")return()=>o();if(s){r==="click"&&(s.right&&(r="contextmenu"),s.middle&&(r="mouseup"));const c=o;o=u=>{if(!("key"in u&&!(Oe(u.key)in s))){for(const f in s){const l=fn[f];if(l&&l(u,s))return}return c(u)}}}$(e,r,o,s)}},ln=({el:e,get:t,effect:n})=>{const r=e.style.display;n(()=>{e.style.display=t()?r:"none"})},He=({el:e,get:t,effect:n})=>{n(()=>{e.textContent=Ge(t())})},Ge=e=>e==null?"":O(e)?JSON.stringify(e,null,2):String(e),hn=({el:e,get:t,effect:n})=>{n(()=>{e.innerHTML=t()})},pn=({el:e,exp:t,get:n,effect:r,modifiers:i})=>{const s=e.type,o=f=>{n(`${t} = '${f}'`)},{trim:c,number:u=s==="number"}=i||{};if(e.tagName==="SELECT"){const f=e;$(e,"change",()=>{const l=Array.prototype.filter.call(f.options,h=>h.selected).map(h=>u?Ce(P(h)):P(h));o(f.multiple?l:l[0])}),r(()=>{const l=n(),h=f.multiple;for(let p=0,E=f.options.length;p<E;p++){const d=f.options[p],k=P(d);if(h)b(l)?d.selected=ne(l,k)>-1:d.selected=l.has(k);else if(W(P(d),l)){f.selectedIndex!==p&&(f.selectedIndex=p);return}}!h&&f.selectedIndex!==-1&&(f.selectedIndex=-1)})}else if(s==="checkbox"){$(e,"change",()=>{const l=n(),h=e.checked;if(b(l)){const p=P(e),E=ne(l,p),d=E!==-1;if(h&&!d)o(l.concat(p));else if(!h&&d){const k=[...l];k.splice(E,1),o(k)}}else o(Je(e,h))});let f;r(()=>{const l=n();b(l)?e.checked=ne(l,P(e))>-1:l!==f&&(e.checked=W(l,Je(e,!0))),f=l})}else if(s==="radio"){$(e,"change",()=>{o(P(e))});let f;r(()=>{const l=n();l!==f&&(e.checked=W(l,P(e)))})}else{const f=l=>c?l.trim():u?Ce(l):l;$(e,"compositionstart",dn),$(e,"compositionend",mn),$(e,(i==null?void 0:i.lazy)?"change":"input",()=>{e.composing||o(f(e.value))}),c&&$(e,"change",()=>{e.value=e.value.trim()}),r(()=>{if(e.composing)return;const l=e.value,h=n();document.activeElement===e&&f(l)===h||l!==h&&(e.value=h)})}},P=e=>"_value"in e?e._value:e.value,Je=(e,t)=>{const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t},dn=e=>{e.target.composing=!0},mn=e=>{const t=e.target;t.composing&&(t.composing=!1,xn(t,"input"))},xn=(e,t)=>{const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)};var q=function(...e){throw console.error(e),"ERROR"};({}).constructor.prototype.valueOf;function vn(e){return e+""}var Ye={true:!0,false:!1,null:null,undefined:void 0},Y={};"+ - * / % === !== == != < > <= >= && || ! =".split(" ").forEach(function(e){Y[e]=!0});var yn={n:`
`,f:"\f",r:"\r",t:"	",v:"\v","'":"'",'"':'"'},me=function(){};me.prototype={constructor:me,lex:function(e){for(this.text=e,this.index=0,this.tokens=[];this.index<this.text.length;){var t=this.text.charAt(this.index);if(t==='"'||t==="'")this.readString(t);else if(this.isNumber(t)||t==="."&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(t,"(){}[].,;:?"))this.tokens.push({index:this.index,text:t}),this.index++;else if(this.isWhitespace(t))this.index++;else{var n=t+this.peek(),r=n+this.peek(2),i=Y[t],s=Y[n],o=Y[r];if(i||s||o){var c=o?r:s?n:t;this.tokens.push({index:this.index,text:c,operator:!0}),this.index+=c.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(e,t){return t.indexOf(e)!==-1},peek:function(e){var t=e||1;return this.index+t<this.text.length?this.text.charAt(this.index+t):!1},isNumber:function(e){return"0"<=e&&e<="9"&&typeof e=="string"},isWhitespace:function(e){return e===" "||e==="\r"||e==="	"||e===`
`||e==="\v"||e==="\xA0"},isIdentifierStart:function(e){return this.isValidIdentifierStart(e)},isValidIdentifierStart:function(e){return"a"<=e&&e<="z"||"A"<=e&&e<="Z"||e==="_"||e==="$"},isIdentifierContinue:function(e){return this.isValidIdentifierContinue(e)},isValidIdentifierContinue:function(e,t){return this.isValidIdentifierStart(e,t)||this.isNumber(e)},codePointAt:function(e){return e.length===1?e.charCodeAt(0):(e.charCodeAt(0)<<10)+e.charCodeAt(1)-56613888},peekMultichar:function(){var e=this.text.charAt(this.index),t=this.peek();if(!t)return e;var n=e.charCodeAt(0),r=t.charCodeAt(0);return n>=55296&&n<=56319&&r>=56320&&r<=57343?e+t:e},isExpOperator:function(e){return e==="-"||e==="+"||this.isNumber(e)},throwError:function(e,t,n){n=n||this.index;var r=typeof t!="undefined"?"s "+t+"-"+this.index+" ["+this.text.substring(t,n)+"]":" "+n;throw q("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",e,r,this.text)},readNumber:function(){for(var e="",t=this.index;this.index<this.text.length;){var n=this.text.charAt(this.index).toLowerCase();if(n==="."||this.isNumber(n))e+=n;else{var r=this.peek();if(n==="e"&&this.isExpOperator(r))e+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&e.charAt(e.length-1)==="e")e+=n;else if(this.isExpOperator(n)&&(!r||!this.isNumber(r))&&e.charAt(e.length-1)==="e")this.throwError("Invalid exponent");else break}this.index++}this.tokens.push({index:t,text:e,constant:!0,value:Number(e)})},readIdent:function(){var e=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var t=this.peekMultichar();if(!this.isIdentifierContinue(t))break;this.index+=t.length}this.tokens.push({index:e,text:this.text.slice(e,this.index),identifier:!0})},readString:function(e){var t=this.index;this.index++;for(var n="",r=e,i=!1;this.index<this.text.length;){var s=this.text.charAt(this.index);if(r+=s,i){if(s==="u"){var o=this.text.substring(this.index+1,this.index+5);o.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+o+"]"),this.index+=4,n+=String.fromCharCode(parseInt(o,16))}else{var c=yn[s];n=n+(c||s)}i=!1}else if(s==="\\")i=!0;else if(s===e){this.index++,this.tokens.push({index:t,text:r,constant:!0,value:n});return}else n+=s;this.index++}this.throwError("Unterminated quote",t)}};var a=function(t,n){this.lexer=t,this.options=n};a.Program="Program",a.ExpressionStatement="ExpressionStatement",a.AssignmentExpression="AssignmentExpression",a.ConditionalExpression="ConditionalExpression",a.LogicalExpression="LogicalExpression",a.BinaryExpression="BinaryExpression",a.UnaryExpression="UnaryExpression",a.CallExpression="CallExpression",a.MemberExpression="MemberExpression",a.Identifier="Identifier",a.Literal="Literal",a.ArrayExpression="ArrayExpression",a.Property="Property",a.ObjectExpression="ObjectExpression",a.ThisExpression="ThisExpression",a.LocalsExpression="LocalsExpression",a.NGValueParameter="NGValueParameter",a.prototype={ast:function(e){this.text=e,this.tokens=this.lexer.lex(e);var t=this.program();return this.tokens.length!==0&&this.throwError("is an unexpected token",this.tokens[0]),t},program:function(){for(var e=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&e.push(this.expressionStatement()),!this.expect(";"))return{type:a.Program,body:e}},expressionStatement:function(){return{type:a.ExpressionStatement,expression:this.expression()}},expression:function(){return this.assignment()},assignment:function(){var e=this.ternary();if(this.expect("=")){if(!Qe(e))throw q("lval","Trying to assign a value to a non l-value");e={type:a.AssignmentExpression,left:e,right:this.assignment(),operator:"="}}return e},ternary:function(){var e=this.logicalOR(),t,n;return this.expect("?")&&(t=this.expression(),this.consume(":"))?(n=this.expression(),{type:a.ConditionalExpression,test:e,alternate:t,consequent:n}):e},logicalOR:function(){for(var e=this.logicalAND();this.expect("||");)e={type:a.LogicalExpression,operator:"||",left:e,right:this.logicalAND()};return e},logicalAND:function(){for(var e=this.equality();this.expect("&&");)e={type:a.LogicalExpression,operator:"&&",left:e,right:this.equality()};return e},equality:function(){for(var e=this.relational(),t;t=this.expect("==","!=","===","!==");)e={type:a.BinaryExpression,operator:t.text,left:e,right:this.relational()};return e},relational:function(){for(var e=this.additive(),t;t=this.expect("<",">","<=",">=");)e={type:a.BinaryExpression,operator:t.text,left:e,right:this.additive()};return e},additive:function(){for(var e=this.multiplicative(),t;t=this.expect("+","-");)e={type:a.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()};return e},multiplicative:function(){for(var e=this.unary(),t;t=this.expect("*","/","%");)e={type:a.BinaryExpression,operator:t.text,left:e,right:this.unary()};return e},unary:function(){var e;return(e=this.expect("+","-","!"))?{type:a.UnaryExpression,operator:e.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var e;this.expect("(")?(e=this.expression(),this.consume(")")):this.expect("[")?e=this.arrayDeclaration():this.expect("{")?e=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?e=Object.assign({},this.selfReferential[this.consume().text]):Ye.hasOwnProperty(this.peek().text)?e={type:a.Literal,value:Ye[this.consume().text]}:this.peek().identifier?e=this.identifier():this.peek().constant?e=this.constant():this.throwError("not a primary expression",this.peek());for(var t;t=this.expect("(","[",".");)t.text==="("?(e={type:a.CallExpression,callee:e,arguments:this.parseArguments()},this.consume(")")):t.text==="["?(e={type:a.MemberExpression,object:e,property:this.expression(),computed:!0},this.consume("]")):t.text==="."?e={type:a.MemberExpression,object:e,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return e},parseArguments:function(){var e=[];if(this.peekToken().text!==")")do e.push(this.expression());while(this.expect(","));return e},identifier:function(){var e=this.consume();return e.identifier||this.throwError("is not a valid identifier",e),{type:a.Identifier,name:e.text}},constant:function(){return{type:a.Literal,value:this.consume().value}},arrayDeclaration:function(){var e=[];if(this.peekToken().text!=="]")do{if(this.peek("]"))break;e.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:a.ArrayExpression,elements:e}},object:function(){var e=[],t;if(this.peekToken().text!=="}")do{if(this.peek("}"))break;t={type:a.Property,kind:"init"},this.peek().constant?(t.key=this.constant(),t.computed=!1,this.consume(":"),t.value=this.expression()):this.peek().identifier?(t.key=this.identifier(),t.computed=!1,this.peek(":")?(this.consume(":"),t.value=this.expression()):t.value=t.key):this.peek("[")?(this.consume("["),t.key=this.expression(),this.consume("]"),t.computed=!0,this.consume(":"),t.value=this.expression()):this.throwError("invalid key",this.peek()),e.push(t)}while(this.expect(","));return this.consume("}"),{type:a.ObjectExpression,properties:e}},throwError:function(e,t){throw q("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",t.text,e,t.index+1,this.text,this.text.substring(t.index))},consume:function(e){if(this.tokens.length===0)throw q("ueoe","Unexpected end of expression: {0}",this.text);var t=this.expect(e);return t||this.throwError("is unexpected, expecting ["+e+"]",this.peek()),t},peekToken:function(){if(this.tokens.length===0)throw q("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(e,t,n,r){return this.peekAhead(0,e,t,n,r)},peekAhead:function(e,t,n,r,i){if(this.tokens.length>e){var s=this.tokens[e],o=s.text;if(o===t||o===n||o===r||o===i||!t&&!n&&!r&&!i)return s}return!1},expect:function(e,t,n,r){var i=this.peek(e,t,n,r);return i?(this.tokens.shift(),i):!1},selfReferential:{this:{type:a.ThisExpression},$locals:{type:a.LocalsExpression}}};function gn(e,t){return typeof e=="undefined"?t:typeof t=="undefined"?e:e+t}var Ze=1,bn=2;function En(e,t){switch(e.type){case a.MemberExpression:if(e.computed)return!1;break;case a.UnaryExpression:return Ze;case a.BinaryExpression:return e.operator!=="+"?Ze:!1;case a.CallExpression:return!1}return t===void 0?bn:t}function v(e,t){var n,r,i=e.isPure=En(e,t);switch(e.type){case a.Program:n=!0,e.body.forEach(function(s){v(s.expression,i),n=n&&s.expression.constant}),e.constant=n;break;case a.Literal:e.constant=!0,e.toWatch=[];break;case a.UnaryExpression:v(e.argument,i),e.constant=e.argument.constant,e.toWatch=e.argument.toWatch;break;case a.BinaryExpression:v(e.left,i),v(e.right,i),e.constant=e.left.constant&&e.right.constant,e.toWatch=e.left.toWatch.concat(e.right.toWatch);break;case a.LogicalExpression:v(e.left,i),v(e.right,i),e.constant=e.left.constant&&e.right.constant,e.toWatch=e.constant?[]:[e];break;case a.ConditionalExpression:v(e.test,i),v(e.alternate,i),v(e.consequent,i),e.constant=e.test.constant&&e.alternate.constant&&e.consequent.constant,e.toWatch=e.constant?[]:[e];break;case a.Identifier:e.constant=!1,e.toWatch=[e];break;case a.MemberExpression:v(e.object,i),e.computed&&v(e.property,i),e.constant=e.object.constant&&(!e.computed||e.property.constant),e.toWatch=e.constant?[]:[e];break;case a.CallExpression:n=!1,r=[],e.arguments.forEach(function(s){v(s,i),n=n&&s.constant,r.push.apply(r,s.toWatch)}),e.constant=n,e.toWatch=[e];break;case a.AssignmentExpression:v(e.left,i),v(e.right,i),e.constant=e.left.constant&&e.right.constant,e.toWatch=[e];break;case a.ArrayExpression:n=!0,r=[],e.elements.forEach(function(s){v(s,i),n=n&&s.constant,r.push.apply(r,s.toWatch)}),e.constant=n,e.toWatch=r;break;case a.ObjectExpression:n=!0,r=[],e.properties.forEach(function(s){v(s.value,i),n=n&&s.value.constant,r.push.apply(r,s.value.toWatch),s.computed&&(v(s.key,!1),n=n&&s.key.constant,r.push.apply(r,s.key.toWatch))}),e.constant=n,e.toWatch=r;break;case a.ThisExpression:e.constant=!1,e.toWatch=[];break;case a.LocalsExpression:e.constant=!1,e.toWatch=[];break}}function kn(e){if(e.length===1){var t=e[0].expression,n=t.toWatch;return n.length!==1||n[0]!==t?n:void 0}}function Qe(e){return e.type===a.Identifier||e.type===a.MemberExpression}function wn(e){if(e.body.length===1&&Qe(e.body[0].expression))return{type:a.AssignmentExpression,left:e.body[0].expression,right:{type:a.NGValueParameter},operator:"="}}function An(e){return e.body.length===0||e.body.length===1&&(e.body[0].expression.type===a.Literal||e.body[0].expression.type===a.ArrayExpression||e.body[0].expression.type===a.ObjectExpression)}function Sn(e){return e.constant}function Xe(){}Xe.prototype={compile:function(e){var t=this;v(e);var n,r;(n=wn(e))&&(r=this.recurse(n));var i=kn(e.body),s;i&&(s=[],i.forEach(function(u,f){var l=t.recurse(u);l.isPure=u.isPure,u.input=l,s.push(l),u.watchId=f}));var o=[];e.body.forEach(function(u){o.push(t.recurse(u.expression))});var c=e.body.length===0?noop:e.body.length===1?o[0]:function(u,f){var l;return o.forEach(function(h){l=h(u,f)}),l};return r&&(c.assign=function(u,f,l){return r(u,l,f)}),s&&(c.inputs=s),c},recurse:function(e,t,n){var r,i,s=this,o;if(e.input)return this.inputs(e.input,e.watchId);switch(e.type){case a.Literal:return this.value(e.value,t);case a.UnaryExpression:return i=this.recurse(e.argument),this["unary"+e.operator](i,t);case a.BinaryExpression:return r=this.recurse(e.left),i=this.recurse(e.right),this["binary"+e.operator](r,i,t);case a.LogicalExpression:return r=this.recurse(e.left),i=this.recurse(e.right),this["binary"+e.operator](r,i,t);case a.ConditionalExpression:return this["ternary?:"](this.recurse(e.test),this.recurse(e.alternate),this.recurse(e.consequent),t);case a.Identifier:return s.identifier(e.name,t,n);case a.MemberExpression:return r=this.recurse(e.object,!1,!!n),e.computed||(i=e.property.name),e.computed&&(i=this.recurse(e.property)),e.computed?this.computedMember(r,i,t,n):this.nonComputedMember(r,i,t,n);case a.CallExpression:return o=[],e.arguments.forEach(function(c){o.push(s.recurse(c))}),i=this.recurse(e.callee,!0),function(c,u,f,l){var h=i(c,u,f,l),p;if(h.value!=null){for(var E=[],d=0;d<o.length;++d)E.push(o[d](c,u,f,l));p=h.value.apply(h.context,E)}return t?{value:p}:p};case a.AssignmentExpression:return r=this.recurse(e.left,!0,1),i=this.recurse(e.right),function(c,u,f,l){var h=r(c,u,f,l),p=i(c,u,f,l);return h.context[h.name]=p,t?{value:p}:p};case a.ArrayExpression:return o=[],e.elements.forEach(function(c){o.push(s.recurse(c))}),function(c,u,f,l){for(var h=[],p=0;p<o.length;++p)h.push(o[p](c,u,f,l));return t?{value:h}:h};case a.ObjectExpression:return o=[],e.properties.forEach(function(c){c.computed?o.push({key:s.recurse(c.key),computed:!0,value:s.recurse(c.value)}):o.push({key:c.key.type===a.Identifier?c.key.name:""+c.key.value,computed:!1,value:s.recurse(c.value)})}),function(c,u,f,l){for(var h={},p=0;p<o.length;++p)o[p].computed?h[o[p].key(c,u,f,l)]=o[p].value(c,u,f,l):h[o[p].key]=o[p].value(c,u,f,l);return t?{value:h}:h};case a.ThisExpression:return function(c){return t?{value:c}:c};case a.LocalsExpression:return function(c,u){return t?{value:u}:u};case a.NGValueParameter:return function(c,u,f){return t?{value:f}:f}}},"unary+":function(e,t){return function(n,r,i,s){var o=e(n,r,i,s);return typeof o!="undefined"?o=+o:o=0,t?{value:o}:o}},"unary-":function(e,t){return function(n,r,i,s){var o=e(n,r,i,s);return typeof o!="undefined"?o=-o:o=-0,t?{value:o}:o}},"unary!":function(e,t){return function(n,r,i,s){var o=!e(n,r,i,s);return t?{value:o}:o}},"binary+":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o),u=t(r,i,s,o),f=gn(c,u);return n?{value:f}:f}},"binary-":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o),u=t(r,i,s,o),f=(typeof c!="undefined"?c:0)-(typeof u!="undefined"?u:0);return n?{value:f}:f}},"binary*":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)*t(r,i,s,o);return n?{value:c}:c}},"binary/":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)/t(r,i,s,o);return n?{value:c}:c}},"binary%":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)%t(r,i,s,o);return n?{value:c}:c}},"binary===":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)===t(r,i,s,o);return n?{value:c}:c}},"binary!==":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)!==t(r,i,s,o);return n?{value:c}:c}},"binary==":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)==t(r,i,s,o);return n?{value:c}:c}},"binary!=":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)!=t(r,i,s,o);return n?{value:c}:c}},"binary<":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)<t(r,i,s,o);return n?{value:c}:c}},"binary>":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)>t(r,i,s,o);return n?{value:c}:c}},"binary<=":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)<=t(r,i,s,o);return n?{value:c}:c}},"binary>=":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)>=t(r,i,s,o);return n?{value:c}:c}},"binary&&":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)&&t(r,i,s,o);return n?{value:c}:c}},"binary||":function(e,t,n){return function(r,i,s,o){var c=e(r,i,s,o)||t(r,i,s,o);return n?{value:c}:c}},"ternary?:":function(e,t,n,r){return function(i,s,o,c){var u=e(i,s,o,c)?t(i,s,o,c):n(i,s,o,c);return r?{value:u}:u}},value:function(e,t){return function(){return t?{context:void 0,name:void 0,value:e}:e}},identifier:function(e,t,n){return function(r,i,s,o){var c=i&&e in i?i:r;n&&n!==1&&c&&c[e]==null&&(c[e]={});var u=c?c[e]:void 0;return t?{context:c,name:e,value:u}:u}},computedMember:function(e,t,n,r){return function(i,s,o,c){var u=e(i,s,o,c),f,l;return u!=null&&(f=t(i,s,o,c),f=vn(f),r&&r!==1&&u&&!u[f]&&(u[f]={}),l=u[f]),n?{context:u,name:f,value:l}:l}},nonComputedMember:function(e,t,n,r){return function(i,s,o,c){var u=e(i,s,o,c);r&&r!==1&&u&&u[t]==null&&(u[t]={});var f=u!=null?u[t]:void 0;return n?{context:u,name:t,value:f}:f}},inputs:function(e,t){return function(n,r,i,s){return s?s[t]:e(n,r,i)}}};function xe(e,t){this.ast=new a(e,t),this.astCompiler=new Xe}xe.prototype={constructor:xe,parse:function(e){var t=this.getAst(e),n=this.astCompiler.compile(t.ast);return n.literal=An(t.ast),n.constant=Sn(t.ast),n.oneTime=t.oneTime,n},getAst:function(e){var t=!1;return e=e.trim(),e.charAt(0)===":"&&e.charAt(1)===":"&&(t=!0,e=e.substring(2)),{ast:this.ast.ast(e),oneTime:t}}};function _n(){var e={};return function(n,r){var i,s;if(n=n.trim(),s=n,i=e[s],!i){var o=new me,c=new xe(o);i=c.parse(n)}return i}}const Tn=new _n,F=(e,t,n)=>et(e,t),et=(e,t,n)=>{try{return Tn(t)(e)}catch(r){console.error(r)}},On=({el:e,ctx:t,exp:n,effect:r})=>{U(()=>r(()=>et(t.scope,n)))},Cn={bind:he,on:ze,show:ln,text:He,html:hn,model:pn,effect:On},In=(e,t,n)=>{const r=e.parentElement,i=new Comment("v-if");r.insertBefore(i,e);const s=[{exp:t,el:e}];let o,c;for(;(o=e.nextElementSibling)&&(c=null,I(o,"v-else")===""||(c=I(o,"v-else-if")));)r.removeChild(o),s.push({exp:c,el:o});const u=e.nextSibling;r.removeChild(e);let f,l=-1;const h=()=>{f&&(r.insertBefore(i,f.el),f.remove(),f=void 0)};return n.effect(()=>{for(let p=0;p<s.length;p++){const{exp:E,el:d}=s[p];if(!E||F(n.scope,E)){p!==l&&(h(),f=new ge(d,n),f.insert(r,i),r.removeChild(i),l=p);return}}l=-1,h()}),u},$n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,tt=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Pn=/^\(|\)$/g,Mn=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,Rn=(e,t,n)=>{const r=t.match($n);if(!r)return;const i=e.nextSibling,s=e.parentElement,o=new Text("");s.insertBefore(o,e),s.removeChild(e);const c=r[2].trim();let u=r[1].trim().replace(Pn,"").trim(),f,l=!1,h,p,E="key",d=e.getAttribute(E)||e.getAttribute(E=":key")||e.getAttribute(E="v-bind:key");d&&(e.removeAttribute(E),E==="key"&&(d=JSON.stringify(d)));let k;(k=u.match(tt))&&(u=u.replace(tt,"").trim(),h=k[1].trim(),k[2]&&(p=k[2].trim())),(k=u.match(Mn))&&(f=k[1].split(",").map(y=>y.trim()),l=u[0]==="[");let be=!1,M,z,Z;const ht=y=>{const w=new Map,m=[];if(b(y))for(let x=0;x<y.length;x++)m.push(Q(w,y[x],x));else if(typeof y=="number")for(let x=0;x<y;x++)m.push(Q(w,x+1,x));else if(O(y)){let x=0;for(const g in y)m.push(Q(w,y[g],x++,g))}return[m,w]},Q=(y,w,m,x)=>{const g={};f?f.forEach((R,_)=>g[R]=w[l?_:R]):g[u]=w,x?(h&&(g[h]=x),p&&(g[p]=m)):h&&(g[h]=m);const L=ct(n,g),A=d?F(L.scope,d):m;return y.set(A,m),L.key=A,L},Ee=(y,w)=>{const m=new ge(e,y);return m.key=y.key,m.insert(s,w),m};return n.effect(()=>{const y=F(n.scope,c),w=Z;if([z,Z]=ht(y),!be)M=z.map(m=>Ee(m,o)),be=!0;else{for(let A=0;A<M.length;A++)Z.has(M[A].key)||M[A].remove();const m=[];let x=z.length,g,L;for(;x--;){const A=z[x],R=w.get(A.key);let _;R==null?_=Ee(A,g?g.el:o):(_=M[R],Object.assign(_.ctx.scope,A.scope),R!==x&&(M[R+1]!==g||L===g)&&(L=_,_.insert(s,g?g.el:o))),m.unshift(g=_)}M=m}}),i},nt=({el:e,ctx:{scope:{$refs:t}},get:n,effect:r})=>{let i;return r(()=>{const s=n();t[s]=e,i&&s!==i&&delete t[i],i=s}),()=>{i&&delete t[i]}},jn=/^(?:v-|:|@)/,Nn=/\.([\w-]+)/g;let ve=!1;const rt=(e,t)=>{const n=e.nodeType;if(n===1){const r=e;if(r.hasAttribute("v-pre"))return;I(r,"v-cloak");let i;if(i=I(r,"v-if"))return In(r,i,t);if(i=I(r,"v-for"))return Rn(r,i,t);if((i=I(r,"v-scope"))||i===""){const c=i?F(t.scope,i):{};t=ct(t,c),c.$template&&Ln(r,c.$template)}const s=I(r,"v-once")!=null;s&&(ve=!0),(i=I(r,"ref"))&&ye(r,nt,`"${i}"`,t),it(r,t);const o=[];for(const{name:c,value:u}of[...r.attributes])jn.test(c)&&c!=="v-cloak"&&(c==="v-model"?o.unshift([c,u]):c[0]==="@"||/^v-on\b/.test(c)?o.push([c,u]):st(r,c,u,t));for(const[c,u]of o)st(r,c,u,t);s&&(ve=!1)}else if(n===3){const r=e.data;if(r.includes(t.delimiters[0])){let i=[],s=0,o;for(;o=t.delimitersRE.exec(r);){const c=r.slice(s,o.index);c&&i.push(JSON.stringify(c)),i.push(`$s(${o[1]})`),s=o.index+o[0].length}s<r.length&&i.push(JSON.stringify(r.slice(s))),ye(e,He,i.join("+"),t)}}else n===11&&it(e,t)},it=(e,t)=>{let n=e.firstChild;for(;n;)n=rt(n,t)||n.nextSibling},st=(e,t,n,r)=>{let i,s,o;if(t=t.replace(Nn,(c,u)=>((o||(o={}))[u]=!0,"")),t[0]===":")i=he,s=t.slice(1);else if(t[0]==="@")i=ze,s=t.slice(1);else{const c=t.indexOf(":"),u=c>0?t.slice(2,c):t.slice(2);i=Cn[u]||r.dirs[u],s=c>0?t.slice(c+1):void 0}i&&(i===he&&s==="ref"&&(i=nt),ye(e,i,n,r,s,o),e.removeAttribute(t))},ye=(e,t,n,r,i,s)=>{const o=t({el:e,get:(c=n)=>F(r.scope,c),effect:r.effect,ctx:r,exp:n,arg:i,modifiers:s});o&&r.cleanups.push(o)},Ln=(e,t)=>{if(t[0]==="#"){const n=document.querySelector(t);e.appendChild(n.content.cloneNode(!0));return}e.innerHTML=t},ot=e=>{const t=te(ee({delimiters:["{{","}}"],delimitersRE:/\{\{([^]+?)\}\}/g},e),{scope:e?e.scope:D({}),dirs:e?e.dirs:{},effects:[],blocks:[],cleanups:[],effect:n=>{if(ve)return qe(n),n;const r=Nt(n,{scheduler:()=>qe(r)});return t.effects.push(r),r}});return t},ct=(e,t={})=>{const n=e.scope,r=Object.create(n);Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)),r.$refs=Object.create(n.$refs);const i=D(new Proxy(r,{set(s,o,c,u){return u===i&&!s.hasOwnProperty(o)?Reflect.set(n,o,c):Reflect.set(s,o,c,u)}}));return ut(i),te(ee({},e),{scope:i})},ut=e=>{for(const t of Object.keys(e))typeof e[t]=="function"&&(e[t]=e[t].bind(e))};class ge{constructor(t,n,r=!1){T(this,"template");T(this,"ctx");T(this,"key");T(this,"parentCtx");T(this,"isFragment");T(this,"start");T(this,"end");this.isFragment=t instanceof HTMLTemplateElement,r?this.template=t:this.isFragment?this.template=t.content.cloneNode(!0):this.template=t.cloneNode(!0),r?this.ctx=n:(this.parentCtx=n,n.blocks.push(this),this.ctx=ot(n)),rt(this.template,this.ctx)}get el(){return this.start||this.template}insert(t,n=null){if(this.isFragment)if(this.start){let r=this.start,i;for(;r&&(i=r.nextSibling,t.insertBefore(r,n),r!==this.end);)r=i}else this.start=new Text(""),this.end=new Text(""),t.insertBefore(this.end,n),t.insertBefore(this.start,this.end),t.insertBefore(this.template,this.end);else t.insertBefore(this.template,n)}remove(){if(this.parentCtx&&At(this.parentCtx.blocks,this),this.start){const t=this.start.parentNode;let n=this.start,r;for(;n&&(r=n.nextSibling,t.removeChild(n),n!==this.end);)n=r}else this.template.parentNode.removeChild(this.template);this.teardown()}teardown(){this.ctx.blocks.forEach(t=>{t.teardown()}),this.ctx.effects.forEach(Lt),this.ctx.cleanups.forEach(t=>t())}}const at=e=>e.replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),ft=e=>{const t=ot();if(e&&(t.scope=D(e),ut(t.scope),e.$delimiters)){const[r,i]=t.delimiters=e.$delimiters;t.delimitersRE=new RegExp(at(r)+"([^]+?)"+at(i),"g")}t.scope.$s=Ge,t.scope.$nextTick=U,t.scope.$refs=Object.create(null);let n;return{directive(r,i){return i?(t.dirs[r]=i,this):t.dirs[r]},mount(r){if(typeof r=="string"&&(r=document.querySelector(r),!r))return;r=r||document.documentElement;let i;return r.hasAttribute("v-scope")?i=[r]:i=[...r.querySelectorAll("[v-scope]")].filter(s=>!s.matches("[v-scope] [v-scope]")),i.length||(i=[r]),n=i.map(s=>new ge(s,t,!0)),this},unmount(){n.forEach(r=>r.teardown())}}},lt=document.currentScript;lt&&lt.hasAttribute("init")&&ft().mount();export{ft as createApp,U as nextTick,D as reactive};
