var Lf=Object.defineProperty;var Pf=(o,t,e)=>t in o?Lf(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var Ot=(o,t,e)=>(Pf(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="151",as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rf=0,Sc=1,Df=2,Nu=1,zf=2,br=3,Ti=0,Be=1,En=2,yi=0,ks=1,wc=2,Tc=3,Ec=4,If=5,Us=100,Uf=101,Of=102,Ac=103,Cc=104,Nf=200,Ff=201,Bf=202,kf=203,Fu=204,Bu=205,Vf=206,Gf=207,Hf=208,Wf=209,jf=210,qf=0,ku=1,Xf=2,hl=3,Yf=4,Zf=5,$f=6,Jf=7,Hl=0,Kf=1,Qf=2,ei=0,tp=1,ep=2,np=3,ip=4,sp=5,Vu=300,$s=301,Js=302,ul=303,dl=304,Ya=306,fl=1e3,An=1001,pl=1002,Ne=1003,Lc=1004,ho=1005,un=1006,rp=1007,Pr=1008,Ji=1009,ap=1010,op=1011,Gu=1012,lp=1013,Hi=1014,Wi=1015,Rr=1016,cp=1017,hp=1018,Vs=1020,up=1021,Cn=1023,dp=1024,fp=1025,Xi=1026,Ks=1027,pp=1028,mp=1029,gp=1030,_p=1031,xp=1033,uo=33776,fo=33777,po=33778,mo=33779,Pc=35840,Rc=35841,Dc=35842,zc=35843,vp=36196,Ic=37492,Uc=37496,Oc=37808,Nc=37809,Fc=37810,Bc=37811,kc=37812,Vc=37813,Gc=37814,Hc=37815,Wc=37816,jc=37817,qc=37818,Xc=37819,Yc=37820,Zc=37821,go=36492,yp=36283,$c=36284,Jc=36285,Kc=36286,Ki=3e3,Kt=3001,bp=3200,Mp=3201,Hu=0,Sp=1,Dn="srgb",Dr="srgb-linear",Wu="display-p3",_o=7680,wp=519,Qc=35044,th="300 es",ml=1035;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];const xo=Math.PI/180,gl=180/Math.PI;function or(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[o&255]+Ee[o>>8&255]+Ee[o>>16&255]+Ee[o>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Me(o,t,e){return Math.max(t,Math.min(e,o))}function Tp(o,t){return(o%t+t)%t}function vo(o,t,e){return(1-e)*o+e*t}function eh(o){return(o&o-1)===0&&o!==0}function Ep(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function $r(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function je(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],m=i[0],g=i[3],p=i[6],y=i[1],v=i[4],x=i[7],b=i[2],w=i[5],T=i[8];return s[0]=r*m+a*y+c*b,s[3]=r*g+a*v+c*w,s[6]=r*p+a*x+c*T,s[1]=l*m+h*y+u*b,s[4]=l*g+h*v+u*w,s[7]=l*p+h*x+u*T,s[2]=d*m+f*y+_*b,s[5]=d*g+f*v+_*w,s[8]=d*p+f*x+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*s*h+n*a*c+i*s*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*s,f=l*s-r*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(a*n-i*r)*m,t[3]=d*m,t[4]=(h*e-i*c)*m,t[5]=(i*s-a*e)*m,t[6]=f*m,t[7]=(n*c-l*e)*m,t[8]=(r*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yo.makeScale(t,e)),this}rotate(t){return this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new Ht;function ju(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ba(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Gs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ap=new Ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Cp=new Ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Lp(o){return o.convertSRGBToLinear().applyMatrix3(Cp)}function Pp(o){return o.applyMatrix3(Ap).convertLinearToSRGB()}const Rp={[Dr]:o=>o,[Dn]:o=>o.convertSRGBToLinear(),[Wu]:Lp},Dp={[Dr]:o=>o,[Dn]:o=>o.convertLinearToSRGB(),[Wu]:Pp},qe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Dr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=Rp[t],i=Dp[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}};let ls;class qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Ba("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ba("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Gs(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gs(e[n]/255)*255):e[n]=Gs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Xu{constructor(t=null){this.isSource=!0,this.uuid=or(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Mo(i[r].image)):s.push(Mo(i[r]))}else s=Mo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Mo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qu.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zp=0;class en extends is{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=An,i=An,s=un,r=Pr,a=Cn,c=Ji,l=en.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=or(),this.name="",this.source=new Xu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fl:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fl:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Vu;en.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],m=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(f+1)/2,b=(p+1)/2,w=(h+d)/4,T=(u+m)/4,A=(_+g)/4;return v>x&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=T/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=A/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=T/s,i=A/s),this.set(n,i,s,e),this}let y=Math.sqrt((g-_)*(g-_)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(u-m)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends is{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yu extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ip extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],_=s[r+2],m=s[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=m;return}if(u!==m||c!==d||l!==f||h!==_){let g=1-a;const p=c*d+l*f+h*_+u*m,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,p*y);g=Math.sin(g*w)/b,a=Math.sin(a*w)/b}const x=a*y;if(c=c*g+d*x,l=l*g+f*x,h=h*g+_*x,u=u*g+m*x,g===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],_=s[r+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-s*c,this._y=i*h+r*c+s*a-n*l,this._z=s*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=c*e+r*i-a*n,h=c*n+a*e-s*i,u=c*i+s*n-r*e,d=-s*e-r*n-a*i;return this.x=l*c+d*-s+h*-a-u*-r,this.y=h*c+d*-r+u*-s-l*-a,this.z=u*c+d*-a+l*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new P,nh=new ii;class ss{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox),cs.applyMatrix4(t.matrixWorld),this.union(cs);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)Vn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Vn)}else i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Jr.subVectors(this.max,ur),hs.subVectors(t.a,ur),us.subVectors(t.b,ur),ds.subVectors(t.c,ur),ci.subVectors(us,hs),hi.subVectors(ds,us),Di.subVectors(hs,ds);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Di.z,Di.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!wo(e,hs,us,ds,Jr)||(e=[1,0,0,0,1,0,0,0,1],!wo(e,hs,us,ds,Jr))?!1:(Kr.crossVectors(ci,hi),e=[Kr.x,Kr.y,Kr.z],wo(e,hs,us,ds,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new P,new P,new P,new P,new P,new P,new P,new P],Vn=new P,cs=new ss,hs=new P,us=new P,ds=new P,ci=new P,hi=new P,Di=new P,ur=new P,Jr=new P,Kr=new P,zi=new P;function wo(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){zi.fromArray(o,s);const a=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Up=new ss,dr=new P,To=new P;class lr{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Up.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(To)),this.expandByPoint(dr.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new P,Eo=new P,Qr=new P,ui=new P,Ao=new P,ta=new P,Co=new P;class Za{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Eo.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Eo);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Qr),a=ui.dot(this.direction),c=-ui.dot(Qr),l=ui.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*c-a,d=r*a-c,_=s*h,u>=0)if(d>=-_)if(d<=_){const m=1/h;u*=m,d*=m,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Eo).addScaledVector(Qr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,s){Ao.subVectors(e,t),ta.subVectors(n,t),Co.crossVectors(Ao,ta);let r=this.direction.dot(Co),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ui.subVectors(this.origin,t);const c=a*this.direction.dot(ta.crossVectors(ui,ta));if(c<0)return null;const l=a*this.direction.dot(Ao.cross(ui));if(l<0||c+l>r)return null;const h=-a*ui.dot(Co);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,a,c,l,h,u,d,f,_,m,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/fs.setFromMatrixColumn(t,0).length(),s=1/fs.setFromMatrixColumn(t,1).length(),r=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=r*h,f=r*u,_=a*h,m=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-m*l,e[9]=-a*c,e[2]=m-d*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,m=l*u;e[0]=d+m*a,e[4]=_*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=m+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,m=l*u;e[0]=d-m*a,e[4]=-r*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=m-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=a*h,m=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+m,e[1]=c*u,e[5]=m*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,_=a*c,m=a*l;e[0]=c*h,e[4]=m-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-m*u}else if(t.order==="XZY"){const d=r*c,f=r*l,_=a*c,m=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+m,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Np)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),di.crossVectors(n,Xe),di.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),di.crossVectors(n,Xe)),di.normalize(),ea.crossVectors(Xe,di),i[0]=di.x,i[4]=ea.x,i[8]=Xe.x,i[1]=di.y,i[5]=ea.y,i[9]=Xe.y,i[2]=di.z,i[6]=ea.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],m=n[6],g=n[10],p=n[14],y=n[3],v=n[7],x=n[11],b=n[15],w=i[0],T=i[4],A=i[8],M=i[12],S=i[1],U=i[5],N=i[9],D=i[13],z=i[2],O=i[6],G=i[10],W=i[14],B=i[3],K=i[7],X=i[11],pt=i[15];return s[0]=r*w+a*S+c*z+l*B,s[4]=r*T+a*U+c*O+l*K,s[8]=r*A+a*N+c*G+l*X,s[12]=r*M+a*D+c*W+l*pt,s[1]=h*w+u*S+d*z+f*B,s[5]=h*T+u*U+d*O+f*K,s[9]=h*A+u*N+d*G+f*X,s[13]=h*M+u*D+d*W+f*pt,s[2]=_*w+m*S+g*z+p*B,s[6]=_*T+m*U+g*O+p*K,s[10]=_*A+m*N+g*G+p*X,s[14]=_*M+m*D+g*W+p*pt,s[3]=y*w+v*S+x*z+b*B,s[7]=y*T+v*U+x*O+b*K,s[11]=y*A+v*N+x*G+b*X,s[15]=y*M+v*D+x*W+b*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],m=t[7],g=t[11],p=t[15];return _*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+m*(+e*c*f-e*l*d+s*r*d-i*r*f+i*l*h-s*c*h)+g*(+e*l*u-e*a*f-s*r*u+n*r*f+s*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],m=t[13],g=t[14],p=t[15],y=u*g*l-m*d*l+m*c*f-a*g*f-u*c*p+a*d*p,v=_*d*l-h*g*l-_*c*f+r*g*f+h*c*p-r*d*p,x=h*m*l-_*u*l+_*a*f-r*m*f-h*a*p+r*u*p,b=_*u*c-h*m*c-_*a*d+r*m*d+h*a*g-r*u*g,w=e*y+n*v+i*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=y*T,t[1]=(m*d*s-u*g*s-m*i*f+n*g*f+u*i*p-n*d*p)*T,t[2]=(a*g*s-m*c*s+m*i*l-n*g*l-a*i*p+n*c*p)*T,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*T,t[4]=v*T,t[5]=(h*g*s-_*d*s+_*i*f-e*g*f-h*i*p+e*d*p)*T,t[6]=(_*c*s-r*g*s-_*i*l+e*g*l+r*i*p-e*c*p)*T,t[7]=(r*d*s-h*c*s+h*i*l-e*d*l-r*i*f+e*c*f)*T,t[8]=x*T,t[9]=(_*u*s-h*m*s-_*n*f+e*m*f+h*n*p-e*u*p)*T,t[10]=(r*m*s-_*a*s+_*n*l-e*m*l-r*n*p+e*a*p)*T,t[11]=(h*a*s-r*u*s-h*n*l+e*u*l+r*n*f-e*a*f)*T,t[12]=b*T,t[13]=(h*m*i-_*u*i+_*n*d-e*m*d-h*n*g+e*u*g)*T,t[14]=(_*a*i-r*m*i-_*n*c+e*m*c+r*n*g-e*a*g)*T,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,c=t.z,l=s*r,h=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,h=r+r,u=a+a,d=s*l,f=s*h,_=s*u,m=r*h,g=r*u,p=a*u,y=c*l,v=c*h,x=c*u,b=n.x,w=n.y,T=n.z;return i[0]=(1-(m+p))*b,i[1]=(f+x)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(_+v)*T,i[9]=(g-y)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=fs.set(i[0],i[1],i[2]).length();const r=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const l=1/s,h=1/r,u=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r){const a=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,r){const a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(r-s),u=(e+t)*c,d=(n+i)*l,f=(r+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new P,vn=new se,Op=new P(0,0,0),Np=new P(1,1,1),di=new P,ea=new P,Xe=new P,ih=new se,sh=new ii;class $a{constructor(t=0,e=0,n=0,i=$a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$a.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fp=0;const rh=new P,ps=new ii,Hn=new se,na=new P,fr=new P,Bp=new P,kp=new ii,ah=new P(1,0,0),oh=new P(0,1,0),lh=new P(0,0,1),Vp={type:"added"},ch={type:"removed"};class oe extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oe.DEFAULT_UP.clone();const t=new P,e=new $a,n=new ii,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(fr,na,this.up):Hn.lookAt(na,fr,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Hn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ch)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ch)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}oe.DEFAULT_UP=new P(0,1,0);oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new P,Wn=new P,Lo=new P,jn=new P,ms=new P,gs=new P,hh=new P,Po=new P,Ro=new P,Do=new P;let ia=!1;class Sn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),Wn.subVectors(n,e),Lo.subVectors(t,e);const r=yn.dot(yn),a=yn.dot(Wn),c=yn.dot(Lo),l=Wn.dot(Wn),h=Wn.dot(Lo),u=r*l-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,_=(r*h-a*c)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(t,e,n,i,s,r,a,c){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),this.getInterpolation(t,e,n,i,s,r,a,c)}static getInterpolation(t,e,n,i,s,r,a,c){return this.getBarycoord(t,e,n,i,jn),c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(r,jn.y),c.addScaledVector(a,jn.z),c}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Wn.subVectors(t,e),yn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ia=!0),Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;ms.subVectors(i,n),gs.subVectors(s,n),Po.subVectors(t,n);const c=ms.dot(Po),l=gs.dot(Po);if(c<=0&&l<=0)return e.copy(n);Ro.subVectors(t,i);const h=ms.dot(Ro),u=gs.dot(Ro);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(ms,r);Do.subVectors(t,s);const f=ms.dot(Do),_=gs.dot(Do);if(_>=0&&f<=_)return e.copy(s);const m=f*l-c*_;if(m<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(gs,a);const g=h*_-f*u;if(g<=0&&u-h>=0&&f-_>=0)return hh.subVectors(s,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(hh,a);const p=1/(g+m+d);return r=m*p,a=d*p,e.copy(n).addScaledVector(ms,r).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Gp=0;class si extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=or(),this.name="",this.type="Material",this.blending=ks,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fu,this.blendDst=Bu,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},sa={h:0,s:0,l:0};function zo(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qe.workingColorSpace){if(t=Tp(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=zo(r,s,t+1/3),this.g=zo(r,s,t),this.b=zo(r,s,t-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(t,e=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,qe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,qe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return qe.fromWorkingColorSpace(Ae.copy(this),t),Me(Ae.r*255,0,255)<<16^Me(Ae.g*255,0,255)<<8^Me(Ae.b*255,0,255)<<0}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,s=Ae.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Dn){qe.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(bn),bn.h+=t,bn.s+=e,bn.l+=n,this.setHSL(bn.h,bn.s,bn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(sa);const n=vo(bn.h,sa.h,e),i=vo(bn.s,sa.s,e),s=vo(bn.l,sa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Vt;Vt.NAMES=Zu;class Ke extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new P,ra=new lt;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$r(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$r(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$r(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $u extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ju extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hp=0;const an=new se,Io=new oe,_s=new P,Ye=new ss,pr=new ss,ye=new P;class ue extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Ju:$u)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Ye.min,pr.min),Ye.expandByPoint(ye),ye.addVectors(Ye.max,pr.max),Ye.expandByPoint(ye)):(Ye.expandByPoint(pr.min),Ye.expandByPoint(pr.max))}Ye.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ye.fromBufferAttribute(a,l),c&&(_s.fromBufferAttribute(t,l),ye.add(_s)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new P,h[S]=new P;const u=new P,d=new P,f=new P,_=new lt,m=new lt,g=new lt,p=new P,y=new P;function v(S,U,N){u.fromArray(i,S*3),d.fromArray(i,U*3),f.fromArray(i,N*3),_.fromArray(r,S*2),m.fromArray(r,U*2),g.fromArray(r,N*2),d.sub(u),f.sub(u),m.sub(_),g.sub(_);const D=1/(m.x*g.y-g.x*m.y);!isFinite(D)||(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),y.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(D),l[S].add(p),l[U].add(p),l[N].add(p),h[S].add(y),h[U].add(y),h[N].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,U=x.length;S<U;++S){const N=x[S],D=N.start,z=N.count;for(let O=D,G=D+z;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new P,w=new P,T=new P,A=new P;function M(S){T.fromArray(s,S*3),A.copy(T);const U=l[S];b.copy(U),b.sub(T.multiplyScalar(T.dot(U))).normalize(),w.crossVectors(A,U);const D=w.dot(h[S])<0?-1:1;c[S*4]=b.x,c[S*4+1]=b.y,c[S*4+2]=b.z,c[S*4+3]=D}for(let S=0,U=x.length;S<U;++S){const N=x[S],D=N.start,z=N.count;for(let O=D,G=D+z;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,r=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),m=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let m=0,g=c.length;m<g;m++){a.isInterleavedBufferAttribute?f=c[m]*a.data.stride+a.offset:f=c[m]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new se,Rn=new Za,aa=new lr,dh=new P,xs=new P,vs=new P,ys=new P,Uo=new P,oa=new P,la=new lt,ca=new lt,ha=new lt,fh=new P,ph=new P,mh=new P,ua=new P,da=new P;class Xt extends oe{constructor(t=new ue,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){oa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Uo.fromBufferAttribute(u,t),r?oa.addScaledVector(Uo,h):oa.addScaledVector(Uo.sub(e),h))}e.add(oa)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),Rn.copy(t.ray).recast(t.near),aa.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(aa,dh)===null||Rn.origin.distanceToSquared(dh)>(t.far-t.near)**2))||(uh.copy(s).invert(),Rn.copy(t.ray).applyMatrix4(uh),n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,m=d.length;_<m;_++){const g=d[_],p=i[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,b=v;x<b;x+=3){const w=a.getX(x),T=a.getX(x+1),A=a.getX(x+2);r=fa(this,p,t,Rn,l,h,u,w,T,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let g=_,p=m;g<p;g+=3){const y=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);r=fa(this,i,t,Rn,l,h,u,y,v,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(i))for(let _=0,m=d.length;_<m;_++){const g=d[_],p=i[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,b=v;x<b;x+=3){const w=x,T=x+1,A=x+2;r=fa(this,p,t,Rn,l,h,u,w,T,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),m=Math.min(c.count,f.start+f.count);for(let g=_,p=m;g<p;g+=3){const y=g,v=g+1,x=g+2;r=fa(this,i,t,Rn,l,h,u,y,v,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Wp(o,t,e,n,i,s,r,a){let c;if(t.side===Be?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,t.side===Ti,a),c===null)return null;da.copy(a),da.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(da);return l<e.near||l>e.far?null:{distance:l,point:da.clone(),object:o}}function fa(o,t,e,n,i,s,r,a,c,l){o.getVertexPosition(a,xs),o.getVertexPosition(c,vs),o.getVertexPosition(l,ys);const h=Wp(o,t,e,n,xs,vs,ys,ua);if(h){i&&(la.fromBufferAttribute(i,a),ca.fromBufferAttribute(i,c),ha.fromBufferAttribute(i,l),h.uv=Sn.getInterpolation(ua,xs,vs,ys,la,ca,ha,new lt)),s&&(la.fromBufferAttribute(s,a),ca.fromBufferAttribute(s,c),ha.fromBufferAttribute(s,l),h.uv2=Sn.getInterpolation(ua,xs,vs,ys,la,ca,ha,new lt)),r&&(fh.fromBufferAttribute(r,a),ph.fromBufferAttribute(r,c),mh.fromBufferAttribute(r,l),h.normal=Sn.getInterpolation(ua,xs,vs,ys,fh,ph,mh,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new P,materialIndex:0};Sn.getNormal(xs,vs,ys,u.normal),h.face=u}return h}class Wr extends ue{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,r,s,0),_("z","y","x",1,-1,n,e,-t,r,s,1),_("x","z","y",1,1,t,n,e,i,r,2),_("x","z","y",1,-1,t,n,-e,i,r,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function _(m,g,p,y,v,x,b,w,T,A,M){const S=x/T,U=b/A,N=x/2,D=b/2,z=w/2,O=T+1,G=A+1;let W=0,B=0;const K=new P;for(let X=0;X<G;X++){const pt=X*U-D;for(let nt=0;nt<O;nt++){const q=nt*S-N;K[m]=q*y,K[g]=pt*v,K[p]=z,l.push(K.x,K.y,K.z),K[m]=0,K[g]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(nt/T),u.push(1-X/A),W+=1}}for(let X=0;X<A;X++)for(let pt=0;pt<T;pt++){const nt=d+pt+O*X,q=d+pt+O*(X+1),$=d+(pt+1)+O*(X+1),ct=d+(pt+1)+O*X;c.push(nt,q,ct),c.push(q,$,ct),B+=6}a.addGroup(f,B,M),f+=B,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(o){const t={};for(let e=0;e<o.length;e++){const n=Qs(o[e]);for(const i in n)t[i]=n[i]}return t}function jp(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Ku(o){return o.getRenderTarget()===null&&o.outputEncoding===Kt?Dn:Dr}const Qu={clone:Qs,merge:Ue};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class td extends oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends td{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,Ms=1;class Yp extends oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wn(bs,Ms,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new wn(bs,Ms,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new wn(bs,Ms,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const a=new wn(bs,Ms,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new wn(bs,Ms,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new wn(bs,Ms,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=ei,t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ed extends en{constructor(t,e,n,i,s,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:$s,super(t,e,n,i,s,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zp extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ed(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wr(5,5,5),s=new ts({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:yi});s.uniforms.tEquirect.value=e;const r=new Xt(i,s),a=e.minFilter;return e.minFilter===Pr&&(e.minFilter=un),new Yp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Oo=new P,$p=new P,Jp=new Ht;class Bi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Oo.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jp.getNormalMatrix(t),i=this.coplanarPoint(Oo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new lr,pa=new P;class jl{constructor(t=new Bi,e=new Bi,n=new Bi,i=new Bi,s=new Bi,r=new Bi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],f=n[9],_=n[10],m=n[11],g=n[12],p=n[13],y=n[14],v=n[15];return e[0].setComponents(a-i,u-c,m-d,v-g).normalize(),e[1].setComponents(a+i,u+c,m+d,v+g).normalize(),e[2].setComponents(a+s,u+l,m+f,v+p).normalize(),e[3].setComponents(a-s,u-l,m-f,v-p).normalize(),e[4].setComponents(a-r,u-h,m-_,v-y).normalize(),e[5].setComponents(a+r,u+h,m+_,v+y).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(pa.x=i.normal.x>0?t.max.x:t.min.x,pa.y=i.normal.y>0?t.max.y:t.min.y,pa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Kp(o,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,f=h.updateRange;o.bindBuffer(u,l),f.count===-1?o.bufferSubData(u,0,d):(e?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(o.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:r,remove:a,update:c}}class Oe extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],_=[],m=[],g=[];for(let p=0;p<h;p++){const y=p*d-r;for(let v=0;v<l;v++){const x=v*u-s;_.push(x,-y,0),m.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const v=y+l*p,x=y+l*(p+1),b=y+1+l*(p+1),w=y+1+l*p;f.push(v,x,w),f.push(x,b,w)}this.setIndex(f),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(m,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm="vec3 transformed = vec3( position );",am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,e0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,E0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nt={alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,begin_vertex:rm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:bm,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:wm,encodings_fragment:Tm,encodings_pars_fragment:Em,envmap_fragment:Am,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Lm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Gm,envmap_vertex:Rm,fog_vertex:Dm,fog_pars_vertex:zm,fog_fragment:Im,fog_pars_fragment:Um,gradientmap_pars_fragment:Om,lightmap_fragment:Nm,lightmap_pars_fragment:Fm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:Vm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Wm,lights_phong_fragment:jm,lights_phong_pars_fragment:qm,lights_physical_fragment:Xm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Zm,lights_fragment_maps:$m,lights_fragment_end:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:eg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:bg,output_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:wg,project_vertex:Tg,dithering_fragment:Eg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Dg,shadowmask_pars_fragment:zg,skinbase_vertex:Ig,skinning_pars_vertex:Ug,skinning_vertex:Og,skinnormal_vertex:Ng,specularmap_fragment:Fg,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Hg,uv_pars_fragment:Wg,uv_pars_vertex:jg,uv_vertex:qg,worldpos_vertex:Xg,background_vert:Yg,background_frag:Zg,backgroundCube_vert:$g,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:Qg,depth_vert:t0,depth_frag:e0,distanceRGBA_vert:n0,distanceRGBA_frag:i0,equirect_vert:s0,equirect_frag:r0,linedashed_vert:a0,linedashed_frag:o0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:d0,meshmatcap_frag:f0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:_0,meshphysical_vert:x0,meshphysical_frag:v0,meshtoon_vert:y0,meshtoon_frag:b0,points_vert:M0,points_frag:S0,shadow_vert:w0,shadow_frag:T0,sprite_vert:E0,sprite_frag:A0},ut={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}}},Tn={basic:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ue([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ue([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ue([ut.points,ut.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ue([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ue([ut.common,ut.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ue([ut.sprite,ut.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ue([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ue([ut.lights,ut.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Tn.physical={uniforms:Ue([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const ma={r:0,b:0,g:0};function C0(o,t,e,n,i,s,r){const a=new Vt(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function _(g,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v));const x=o.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?m(a,c):v&&v.isColor&&(m(v,1),y=!0),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ya)?(h===void 0&&(h=new Xt(new Wr(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Qs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=v.encoding!==Kt,(u!==v||d!==v.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=o.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xt(new Oe(2,2),new ts({name:"BackgroundMaterial",uniforms:Qs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.encoding!==Kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=o.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,p){g.getRGB(ma,Ku(o)),n.buffers.color.setClear(ma.r,ma.g,ma.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,m(a,c)},render:_}}function L0(o,t,e,n){const i=o.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},c=g(null);let l=c,h=!1;function u(z,O,G,W,B){let K=!1;if(r){const X=m(W,G,O);l!==X&&(l=X,f(l.object)),K=p(z,W,G,B),K&&y(z,W,G,B)}else{const X=O.wireframe===!0;(l.geometry!==W.id||l.program!==G.id||l.wireframe!==X)&&(l.geometry=W.id,l.program=G.id,l.wireframe=X,K=!0)}B!==null&&e.update(B,34963),(K||h)&&(h=!1,A(z,O,G,W),B!==null&&o.bindBuffer(34963,e.get(B).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(z){return n.isWebGL2?o.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return n.isWebGL2?o.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function m(z,O,G){const W=G.wireframe===!0;let B=a[z.id];B===void 0&&(B={},a[z.id]=B);let K=B[O.id];K===void 0&&(K={},B[O.id]=K);let X=K[W];return X===void 0&&(X=g(d()),K[W]=X),X}function g(z){const O=[],G=[],W=[];for(let B=0;B<i;B++)O[B]=0,G[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:W,object:z,attributes:{},index:null}}function p(z,O,G,W){const B=l.attributes,K=O.attributes;let X=0;const pt=G.getAttributes();for(const nt in pt)if(pt[nt].location>=0){const $=B[nt];let ct=K[nt];if(ct===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(ct=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(ct=z.instanceColor)),$===void 0||$.attribute!==ct||ct&&$.data!==ct.data)return!0;X++}return l.attributesNum!==X||l.index!==W}function y(z,O,G,W){const B={},K=O.attributes;let X=0;const pt=G.getAttributes();for(const nt in pt)if(pt[nt].location>=0){let $=K[nt];$===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&($=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&($=z.instanceColor));const ct={};ct.attribute=$,$&&$.data&&(ct.data=$.data),B[nt]=ct,X++}l.attributes=B,l.attributesNum=X,l.index=W}function v(){const z=l.newAttributes;for(let O=0,G=z.length;O<G;O++)z[O]=0}function x(z){b(z,0)}function b(z,O){const G=l.newAttributes,W=l.enabledAttributes,B=l.attributeDivisors;G[z]=1,W[z]===0&&(o.enableVertexAttribArray(z),W[z]=1),B[z]!==O&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,O),B[z]=O)}function w(){const z=l.newAttributes,O=l.enabledAttributes;for(let G=0,W=O.length;G<W;G++)O[G]!==z[G]&&(o.disableVertexAttribArray(G),O[G]=0)}function T(z,O,G,W,B,K){n.isWebGL2===!0&&(G===5124||G===5125)?o.vertexAttribIPointer(z,O,G,B,K):o.vertexAttribPointer(z,O,G,W,B,K)}function A(z,O,G,W){if(n.isWebGL2===!1&&(z.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const B=W.attributes,K=G.getAttributes(),X=O.defaultAttributeValues;for(const pt in K){const nt=K[pt];if(nt.location>=0){let q=B[pt];if(q===void 0&&(pt==="instanceMatrix"&&z.instanceMatrix&&(q=z.instanceMatrix),pt==="instanceColor"&&z.instanceColor&&(q=z.instanceColor)),q!==void 0){const $=q.normalized,ct=q.itemSize,mt=e.get(q);if(mt===void 0)continue;const V=mt.buffer,Pt=mt.type,Lt=mt.bytesPerElement;if(q.isInterleavedBufferAttribute){const ot=q.data,bt=ot.stride,it=q.offset;if(ot.isInstancedInterleavedBuffer){for(let J=0;J<nt.locationSize;J++)b(nt.location+J,ot.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let J=0;J<nt.locationSize;J++)x(nt.location+J);o.bindBuffer(34962,V);for(let J=0;J<nt.locationSize;J++)T(nt.location+J,ct/nt.locationSize,Pt,$,bt*Lt,(it+ct/nt.locationSize*J)*Lt)}else{if(q.isInstancedBufferAttribute){for(let ot=0;ot<nt.locationSize;ot++)b(nt.location+ot,q.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ot=0;ot<nt.locationSize;ot++)x(nt.location+ot);o.bindBuffer(34962,V);for(let ot=0;ot<nt.locationSize;ot++)T(nt.location+ot,ct/nt.locationSize,Pt,$,ct*Lt,ct/nt.locationSize*ot*Lt)}}else if(X!==void 0){const $=X[pt];if($!==void 0)switch($.length){case 2:o.vertexAttrib2fv(nt.location,$);break;case 3:o.vertexAttrib3fv(nt.location,$);break;case 4:o.vertexAttrib4fv(nt.location,$);break;default:o.vertexAttrib1fv(nt.location,$)}}}}w()}function M(){N();for(const z in a){const O=a[z];for(const G in O){const W=O[G];for(const B in W)_(W[B].object),delete W[B];delete O[G]}delete a[z]}}function S(z){if(a[z.id]===void 0)return;const O=a[z.id];for(const G in O){const W=O[G];for(const B in W)_(W[B].object),delete W[B];delete O[G]}delete a[z.id]}function U(z){for(const O in a){const G=a[O];if(G[z.id]===void 0)continue;const W=G[z.id];for(const B in W)_(W[B].object),delete W[B];delete G[z.id]}}function N(){D(),h=!0,l!==c&&(l=c,f(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:N,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function P0(o,t,e,n){const i=n.isWebGL2;let s;function r(l){s=l}function a(l,h){o.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,f;if(i)d=o,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,h,u),e.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=c}function R0(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),_=o.getParameter(34076),m=o.getParameter(34921),g=o.getParameter(36347),p=o.getParameter(36348),y=o.getParameter(36349),v=d>0,x=r||t.has("OES_texture_float"),b=v&&x,w=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:w}}function D0(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Bi,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,p=o.get(u);if(!i||_===null||_.length===0||s&&!g)s?h(null):l();else{const y=s?0:n,v=y*4;let x=p.clippingState||null;c.value=x,x=h(_,d,v,f);for(let b=0;b!==v;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=c.value,_!==!0||g===null){const p=f+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,x=f;v!==m;++v,x+=4)r.copy(u[v]).applyMatrix4(y,a),r.normal.toArray(g,x),g[x+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}function z0(o){let t=new WeakMap;function e(r,a){return a===ul?r.mapping=$s:a===dl&&(r.mapping=Js),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===ul||a===dl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Zp(c.height/2);return l.fromEquirectangularTexture(o,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ja extends td{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,gh=[.125,.215,.35,.446,.526,.582],Gi=20,No=new Ja,_h=new Vt;let Fo=null;const ki=(1+Math.sqrt(5))/2,Ss=1/ki,xh=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ki,Ss),new P(0,ki,-Ss),new P(Ss,0,ki),new P(-Ss,0,ki),new P(ki,Ss,0),new P(-ki,Ss,0)];class vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo),t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Rr,format:Cn,encoding:Ki,depthBuffer:!1},i=yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(s)),this._blurMaterial=U0(s,t,e)}return i}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,i){const a=new wn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_h),h.toneMapping=ei,h.autoClear=!1;const f=new Ke({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new Xt(new Wr,f);let m=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,m=!0):(f.color.copy(_h),m=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;ga(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$s||t.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ga(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=xh[(i-1)%xh.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),m=s/_,g=isFinite(s)?1+Math.floor(h*m):Gi;g>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gi}`);const p=[];let y=0;for(let T=0;T<Gi;++T){const A=T/m,M=Math.exp(-A*A/2);p.push(M),T===0?y+=M:T<g&&(y+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const x=this._sizeLods[i],b=3*x*(i>v-Os?i-v+Os:0),w=4*(this._cubeSize-x);ga(e,b,w,3*x,2*x),c.setRenderTarget(e),c.render(u,No)}}function I0(o){const t=[],e=[],n=[];let i=o;const s=o-Os+1+gh.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>o-Os?c=gh[r-o+Os-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,m=3,g=2,p=1,y=new Float32Array(m*_*f),v=new Float32Array(g*_*f),x=new Float32Array(p*_*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,A=w>2?0:-1,M=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];y.set(M,m*_*w),v.set(d,g*_*w);const S=[w,w,w,w,w,w];x.set(S,p*_*w)}const b=new ue;b.setAttribute("position",new Pe(y,m)),b.setAttribute("uv",new Pe(v,g)),b.setAttribute("faceIndex",new Pe(x,p)),t.push(b),i>Os&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yh(o,t,e){const n=new Qi(o,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function U0(o,t,e){const n=new Float32Array(Gi),i=new P(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function bh(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Mh(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O0(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ul||c===dl,h=c===$s||c===Js;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new vh(o)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new vh(o));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function N0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function F0(o,t,e,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],34962);const f=u.morphAttributes;for(const _ in f){const m=f[_];for(let g=0,p=m.length;g<p;g++)t.update(m[g],34962)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let m=0;if(f!==null){const y=f.array;m=f.version;for(let v=0,x=y.length;v<x;v+=3){const b=y[v+0],w=y[v+1],T=y[v+2];d.push(b,w,w,T,T,b)}}else{const y=_.array;m=_.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const b=v+0,w=v+1,T=v+2;d.push(b,w,w,T,T,b)}}const g=new(ju(d)?Ju:$u)(d,1);g.version=m;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function B0(o,t,e,n){const i=n.isWebGL2;let s;function r(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){o.drawElements(s,f,a,d*c),e.update(f,s,1)}function u(d,f,_){if(_===0)return;let m,g;if(i)m=o,g="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,f,a,d*c,_),e.update(f,s,_)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u}function k0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function V0(o,t){return o[0]-t[0]}function G0(o,t){return Math.abs(t[1])-Math.abs(o[1])}function H0(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new re,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==m){let O=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var f=O;g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),b===!0&&(M=3);let S=h.attributes.position.count*M,U=1;S>t.maxTextureSize&&(U=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const N=new Float32Array(S*U*4*m),D=new Yu(N,S,U,m);D.type=Wi,D.needsUpdate=!0;const z=M*4;for(let G=0;G<m;G++){const W=w[G],B=T[G],K=A[G],X=S*U*4*G;for(let pt=0;pt<W.count;pt++){const nt=pt*z;v===!0&&(r.fromBufferAttribute(W,pt),N[X+nt+0]=r.x,N[X+nt+1]=r.y,N[X+nt+2]=r.z,N[X+nt+3]=0),x===!0&&(r.fromBufferAttribute(B,pt),N[X+nt+4]=r.x,N[X+nt+5]=r.y,N[X+nt+6]=r.z,N[X+nt+7]=0),b===!0&&(r.fromBufferAttribute(K,pt),N[X+nt+8]=r.x,N[X+nt+9]=r.y,N[X+nt+10]=r.z,N[X+nt+11]=K.itemSize===4?r.w:1)}}g={count:m,texture:D,size:new lt(S,U)},s.set(h,g),h.addEventListener("dispose",O)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(o,"morphTargetBaseInfluence",y),u.getUniforms().setValue(o,"morphTargetInfluences",d),u.getUniforms().setValue(o,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const _=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==_){m=[];for(let x=0;x<_;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<_;x++){const b=m[x];b[0]=x,b[1]=d[x]}m.sort(G0);for(let x=0;x<8;x++)x<_&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(V0);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const b=a[x],w=b[0],T=b[1];w!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+x)!==g[w]&&h.setAttribute("morphTarget"+x,g[w]),p&&h.getAttribute("morphNormal"+x)!==p[w]&&h.setAttribute("morphNormal"+x,p[w]),i[x]=T,y+=T):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(o,"morphTargetBaseInfluence",v),u.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function W0(o,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}const id=new en,sd=new Yu,rd=new Ip,ad=new ed,Sh=[],wh=[],Th=new Float32Array(16),Eh=new Float32Array(9),Ah=new Float32Array(4);function cr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=Sh[i];if(s===void 0&&(s=new Float32Array(i),Sh[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function _e(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function xe(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ka(o,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function j0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function q0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;o.uniform2fv(this.addr,t),xe(e,t)}}function X0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;o.uniform3fv(this.addr,t),xe(e,t)}}function Y0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;o.uniform4fv(this.addr,t),xe(e,t)}}function Z0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Ah.set(n),o.uniformMatrix2fv(this.addr,!1,Ah),xe(e,n)}}function $0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Eh.set(n),o.uniformMatrix3fv(this.addr,!1,Eh),xe(e,n)}}function J0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Th.set(n),o.uniformMatrix4fv(this.addr,!1,Th),xe(e,n)}}function K0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Q0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;o.uniform2iv(this.addr,t),xe(e,t)}}function t_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;o.uniform3iv(this.addr,t),xe(e,t)}}function e_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;o.uniform4iv(this.addr,t),xe(e,t)}}function n_(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function i_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;o.uniform2uiv(this.addr,t),xe(e,t)}}function s_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;o.uniform3uiv(this.addr,t),xe(e,t)}}function r_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;o.uniform4uiv(this.addr,t),xe(e,t)}}function a_(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||id,i)}function o_(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rd,i)}function l_(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ad,i)}function c_(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sd,i)}function h_(o){switch(o){case 5126:return j0;case 35664:return q0;case 35665:return X0;case 35666:return Y0;case 35674:return Z0;case 35675:return $0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return Q0;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(o,t){o.uniform1fv(this.addr,t)}function d_(o,t){const e=cr(t,this.size,2);o.uniform2fv(this.addr,e)}function f_(o,t){const e=cr(t,this.size,3);o.uniform3fv(this.addr,e)}function p_(o,t){const e=cr(t,this.size,4);o.uniform4fv(this.addr,e)}function m_(o,t){const e=cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function g_(o,t){const e=cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function __(o,t){const e=cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function x_(o,t){o.uniform1iv(this.addr,t)}function v_(o,t){o.uniform2iv(this.addr,t)}function y_(o,t){o.uniform3iv(this.addr,t)}function b_(o,t){o.uniform4iv(this.addr,t)}function M_(o,t){o.uniform1uiv(this.addr,t)}function S_(o,t){o.uniform2uiv(this.addr,t)}function w_(o,t){o.uniform3uiv(this.addr,t)}function T_(o,t){o.uniform4uiv(this.addr,t)}function E_(o,t,e){const n=this.cache,i=t.length,s=Ka(e,i);_e(n,s)||(o.uniform1iv(this.addr,s),xe(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||id,s[r])}function A_(o,t,e){const n=this.cache,i=t.length,s=Ka(e,i);_e(n,s)||(o.uniform1iv(this.addr,s),xe(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||rd,s[r])}function C_(o,t,e){const n=this.cache,i=t.length,s=Ka(e,i);_e(n,s)||(o.uniform1iv(this.addr,s),xe(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||ad,s[r])}function L_(o,t,e){const n=this.cache,i=t.length,s=Ka(e,i);_e(n,s)||(o.uniform1iv(this.addr,s),xe(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||sd,s[r])}function P_(o){switch(o){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return b_;case 5125:return M_;case 36294:return S_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return L_}}class R_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=h_(e.type)}}class D_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=P_(e.type)}}class z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Ch(o,t){o.seq.push(t),o.map[t.id]=t}function I_(o,t,e){const n=o.name,i=n.length;for(Bo.lastIndex=0;;){const s=Bo.exec(n),r=Bo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Ch(e,l===void 0?new R_(a,o,t):new D_(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new z_(a),Ch(e,u)),e=u}}}class Ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);I_(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Lh(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let U_=0;function O_(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function N_(o){switch(o){case Ki:return["Linear","( value )"];case Kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Ph(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+O_(o.getShaderSource(t),r)}else return i}function F_(o,t){const e=N_(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function B_(o,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="OptimizedCineon";break;case ip:e="ACESFilmic";break;case sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function k_(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function V_(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G_(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function Mr(o){return o!==""}function Rh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(o){return o.replace(H_,W_)}function W_(o,t){const e=Nt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return _l(e)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(o){return o.replace(j_,q_)}function q_(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ih(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X_(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Nu?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===zf?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===br&&(t="SHADOWMAP_TYPE_VSM"),t}function Y_(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case $s:case Js:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z_(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Js:t="ENVMAP_MODE_REFRACTION";break}return t}function $_(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hl:t="ENVMAP_BLENDING_MULTIPLY";break;case Kf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function J_(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function K_(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=X_(e),l=Y_(e),h=Z_(e),u=$_(e),d=J_(e),f=e.isWebGL2?"":k_(e),_=V_(s),m=i.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[_].filter(Mr).join(`
`),g.length>0&&(g+=`
`),p=[f,_].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(g=[Ih(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[f,Ih(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Nt.tonemapping_pars_fragment:"",e.toneMapping!==ei?B_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.encodings_pars_fragment,F_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),r=_l(r),r=Rh(r,e),r=Dh(r,e),a=_l(a),a=Rh(a,e),a=Dh(a,e),r=zh(r),a=zh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+g+r,x=y+p+a,b=Lh(i,35633,v),w=Lh(i,35632,x);if(i.attachShader(m,b),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),o.debug.checkShaderErrors){const M=i.getProgramInfoLog(m).trim(),S=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(w).trim();let N=!0,D=!0;if(i.getProgramParameter(m,35714)===!1)if(N=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,m,b,w);else{const z=Ph(i,b,"vertex"),O=Ph(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+M+`
`+z+`
`+O)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||U==="")&&(D=!1);D&&(this.diagnostics={runnable:N,programLog:M,vertexShader:{log:S,prefix:g},fragmentShader:{log:U,prefix:p}})}i.deleteShader(b),i.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new Ia(i,m)),T};let A;return this.getAttributes=function(){return A===void 0&&(A=G_(i,m)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}let Q_=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ex(t),e.set(t,n)),n}}class ex{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}}function nx(o,t,e,n,i,s,r){const a=new Wl,c=new tx,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return M===1?"uv2":"uv"}function g(M,S,U,N,D){const z=N.fog,O=D.geometry,G=M.isMeshStandardMaterial?N.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),B=!!W&&W.mapping===Ya?W.image.height:null,K=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pt=X!==void 0?X.length:0;let nt=0;O.morphAttributes.position!==void 0&&(nt=1),O.morphAttributes.normal!==void 0&&(nt=2),O.morphAttributes.color!==void 0&&(nt=3);let q,$,ct,mt;if(K){const xt=Tn[K];q=xt.vertexShader,$=xt.fragmentShader}else q=M.vertexShader,$=M.fragmentShader,c.update(M),ct=c.getVertexShaderID(M),mt=c.getFragmentShaderID(M);const V=o.getRenderTarget(),Pt=D.isInstancedMesh===!0,Lt=!!M.map,ot=!!M.matcap,bt=!!W,it=!!M.aoMap,J=!!M.lightMap,et=!!M.bumpMap,vt=!!M.normalMap,ht=!!M.displacementMap,At=!!M.emissiveMap,Ct=!!M.metalnessMap,wt=!!M.roughnessMap,It=M.clearcoat>0,jt=M.iridescence>0,L=M.sheen>0,E=M.transmission>0,j=It&&!!M.clearcoatMap,st=It&&!!M.clearcoatNormalMap,rt=It&&!!M.clearcoatRoughnessMap,dt=jt&&!!M.iridescenceMap,R=jt&&!!M.iridescenceThicknessMap,tt=L&&!!M.sheenColorMap,H=L&&!!M.sheenRoughnessMap,ft=!!M.specularMap,yt=!!M.specularColorMap,St=!!M.specularIntensityMap,_t=E&&!!M.transmissionMap,Mt=E&&!!M.thicknessMap,Dt=!!M.gradientMap,Ft=!!M.alphaMap,le=M.alphaTest>0,I=!!M.extensions,Z=!!O.attributes.uv2;return{isWebGL2:h,shaderID:K,shaderName:M.type,vertexShader:q,fragmentShader:$,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?o.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Ki,map:Lt,matcap:ot,envMap:bt,envMapMode:bt&&W.mapping,envMapCubeUVHeight:B,aoMap:it,lightMap:J,bumpMap:et,normalMap:vt,displacementMap:d&&ht,emissiveMap:At,normalMapObjectSpace:vt&&M.normalMapType===Sp,normalMapTangentSpace:vt&&M.normalMapType===Hu,decodeVideoTexture:Lt&&M.map.isVideoTexture===!0&&M.map.encoding===Kt,metalnessMap:Ct,roughnessMap:wt,clearcoat:It,clearcoatMap:j,clearcoatNormalMap:st,clearcoatRoughnessMap:rt,iridescence:jt,iridescenceMap:dt,iridescenceThicknessMap:R,sheen:L,sheenColorMap:tt,sheenRoughnessMap:H,specularMap:ft,specularColorMap:yt,specularIntensityMap:St,transmission:E,transmissionMap:_t,thicknessMap:Mt,gradientMap:Dt,opaque:M.transparent===!1&&M.blending===ks,alphaMap:Ft,alphaTest:le,combine:M.combine,mapUv:Lt&&m(M.map.channel),aoMapUv:it&&m(M.aoMap.channel),lightMapUv:J&&m(M.lightMap.channel),bumpMapUv:et&&m(M.bumpMap.channel),normalMapUv:vt&&m(M.normalMap.channel),displacementMapUv:ht&&m(M.displacementMap.channel),emissiveMapUv:At&&m(M.emissiveMap.channel),metalnessMapUv:Ct&&m(M.metalnessMap.channel),roughnessMapUv:wt&&m(M.roughnessMap.channel),clearcoatMapUv:j&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:R&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:H&&m(M.sheenRoughnessMap.channel),specularMapUv:ft&&m(M.specularMap.channel),specularColorMapUv:yt&&m(M.specularColorMap.channel),specularIntensityMapUv:St&&m(M.specularIntensityMap.channel),transmissionMapUv:_t&&m(M.transmissionMap.channel),thicknessMapUv:Mt&&m(M.thicknessMap.channel),alphaMapUv:Ft&&m(M.alphaMap.channel),vertexTangents:vt&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs2:Z,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Lt||Ft),fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:M.toneMapped?o.toneMapping:ei,useLegacyLights:o.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:I&&M.extensions.derivatives===!0,extensionFragDepth:I&&M.extensions.fragDepth===!0,extensionDrawBuffers:I&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)S.push(U),S.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(o.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUvs2&&a.enable(13),S.vertexTangents&&a.enable(14),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.decodeVideoTexture&&a.enable(17),S.opaque&&a.enable(18),S.pointsUvs&&a.enable(19),M.push(a.mask)}function x(M){const S=_[M.type];let U;if(S){const N=Tn[S];U=Qu.clone(N.uniforms)}else U=M.uniforms;return U}function b(M,S){let U;for(let N=0,D=l.length;N<D;N++){const z=l[N];if(z.cacheKey===S){U=z,++U.usedTimes;break}}return U===void 0&&(U=new K_(o,S,M,s),l.push(U)),U}function w(M){if(--M.usedTimes===0){const S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:A}}function ix(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function sx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Uh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Oh(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,f,_,m,g){let p=o[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},o[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=m,p.group=g),t++,p}function a(u,d,f,_,m,g){const p=r(u,d,f,_,m,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,_,m,g){const p=r(u,d,f,_,m,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||sx),n.length>1&&n.sort(d||Uh),i.length>1&&i.sort(d||Uh)}function h(){for(let u=t,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function rx(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new Oh,o.set(n,[r])):i>=s.length?(r=new Oh,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function ax(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Vt};break;case"SpotLight":e={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return o[t.id]=e,e}}}function ox(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let lx=0;function cx(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function hx(o,t){const e=new ax,n=ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,r=new se,a=new se;function c(h,u){let d=0,f=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,g=0,p=0,y=0,v=0,x=0,b=0,w=0,T=0,A=0;h.sort(cx);const M=u===!0?Math.PI:1;for(let U=0,N=h.length;U<N;U++){const D=h[U],z=D.color,O=D.intensity,G=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=z.r*O*M,f+=z.g*O*M,_+=z.b*O*M;else if(D.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],O);else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const K=D.shadow,X=n.get(D);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=D.shadow.matrix,x++}i.directional[m]=B,m++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(z).multiplyScalar(O*M),B.distance=G,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[p]=B;const K=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,K.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[p]=K.matrix,D.castShadow){const X=n.get(D);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.spotShadow[p]=X,i.spotShadowMap[p]=W,w++}p++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(z).multiplyScalar(O),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=B,y++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*M),B.distance=D.distance,B.decay=D.decay,D.castShadow){const K=D.shadow,X=n.get(D);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=B,g++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(O*M),B.groundColor.copy(D.groundColor).multiplyScalar(O*M),i.hemi[v]=B,v++}}y>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;const S=i.hash;(S.directionalLength!==m||S.pointLength!==g||S.spotLength!==p||S.rectAreaLength!==y||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==b||S.numSpotShadows!==w||S.numSpotMaps!==T)&&(i.directional.length=m,i.spot.length=p,i.rectArea.length=y,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,S.directionalLength=m,S.pointLength=g,S.spotLength=p,S.rectAreaLength=y,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=b,S.numSpotShadows=w,S.numSpotMaps=T,i.version=lx++)}function l(h,u){let d=0,f=0,_=0,m=0,g=0;const p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const x=h[y];if(x.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(x.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function Nh(o,t){const e=new hx(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function ux(o,t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let c;return a===void 0?(c=new Nh(o,t),e.set(s,[c])):r>=a.length?(c=new Nh(o,t),a.push(c)):c=a[r],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class dx extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fx extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gx(o,t,e){let n=new jl;const i=new lt,s=new lt,r=new re,a=new dx({depthPacking:Mp}),c=new fx,l={},h=e.maxTextureSize,u={[Ti]:Be,[Be]:Ti,[En]:En},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:px,fragmentShader:mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ue;_.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu,this.render=function(x,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;const T=o.getRenderTarget(),A=o.getActiveCubeFace(),M=o.getActiveMipmapLevel(),S=o.state;S.setBlending(yi),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let U=0,N=x.length;U<N;U++){const D=x[U],z=D.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const O=z.getFrameExtents();if(i.multiply(O),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,z.mapSize.y=s.y)),z.map===null){const W=this.type!==br?{minFilter:Ne,magFilter:Ne}:{};z.map=new Qi(i.x,i.y,W),z.map.texture.name=D.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const G=z.getViewportCount();for(let W=0;W<G;W++){const B=z.getViewport(W);r.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),S.viewport(r),z.updateMatrices(D,W),n=z.getFrustum(),v(b,w,z.camera,D,this.type)}z.isPointLightShadow!==!0&&this.type===br&&p(z,w),z.needsUpdate=!1}g.needsUpdate=!1,o.setRenderTarget(T,A,M)};function p(x,b){const w=t.update(m);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Qi(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,o.setRenderTarget(x.mapPass),o.clear(),o.renderBufferDirect(b,null,w,d,m,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,o.setRenderTarget(x.map),o.clear(),o.renderBufferDirect(b,null,w,f,m,null)}function y(x,b,w,T){let A=null;const M=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(M!==void 0)A=M;else if(A=w.isPointLight===!0?c:a,o.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const S=A.uuid,U=b.uuid;let N=l[S];N===void 0&&(N={},l[S]=N);let D=N[U];D===void 0&&(D=A.clone(),N[U]=D),A=D}if(A.visible=b.visible,A.wireframe=b.wireframe,T===br?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,w.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const S=o.properties.get(A);S.light=w}return A}function v(x,b,w,T,A){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===br)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const U=t.update(x),N=x.material;if(Array.isArray(N)){const D=U.groups;for(let z=0,O=D.length;z<O;z++){const G=D[z],W=N[G.materialIndex];if(W&&W.visible){const B=y(x,W,T,A);o.renderBufferDirect(w,null,U,B,x,G)}}}else if(N.visible){const D=y(x,N,T,A);o.renderBufferDirect(w,null,U,D,x,null)}}const S=x.children;for(let U=0,N=S.length;U<N;U++)v(S[U],b,w,T,A)}}function _x(o,t,e){const n=e.isWebGL2;function i(){let I=!1;const Z=new re;let at=null;const xt=new re(0,0,0,0);return{setMask:function(Tt){at!==Tt&&!I&&(o.colorMask(Tt,Tt,Tt,Tt),at=Tt)},setLocked:function(Tt){I=Tt},setClear:function(Tt,Jt,Qt,Te,li){li===!0&&(Tt*=Te,Jt*=Te,Qt*=Te),Z.set(Tt,Jt,Qt,Te),xt.equals(Z)===!1&&(o.clearColor(Tt,Jt,Qt,Te),xt.copy(Z))},reset:function(){I=!1,at=null,xt.set(-1,0,0,0)}}}function s(){let I=!1,Z=null,at=null,xt=null;return{setTest:function(Tt){Tt?V(2929):Pt(2929)},setMask:function(Tt){Z!==Tt&&!I&&(o.depthMask(Tt),Z=Tt)},setFunc:function(Tt){if(at!==Tt){switch(Tt){case qf:o.depthFunc(512);break;case ku:o.depthFunc(519);break;case Xf:o.depthFunc(513);break;case hl:o.depthFunc(515);break;case Yf:o.depthFunc(514);break;case Zf:o.depthFunc(518);break;case $f:o.depthFunc(516);break;case Jf:o.depthFunc(517);break;default:o.depthFunc(515)}at=Tt}},setLocked:function(Tt){I=Tt},setClear:function(Tt){xt!==Tt&&(o.clearDepth(Tt),xt=Tt)},reset:function(){I=!1,Z=null,at=null,xt=null}}}function r(){let I=!1,Z=null,at=null,xt=null,Tt=null,Jt=null,Qt=null,Te=null,li=null;return{setTest:function(ce){I||(ce?V(2960):Pt(2960))},setMask:function(ce){Z!==ce&&!I&&(o.stencilMask(ce),Z=ce)},setFunc:function(ce,rn,Pn){(at!==ce||xt!==rn||Tt!==Pn)&&(o.stencilFunc(ce,rn,Pn),at=ce,xt=rn,Tt=Pn)},setOp:function(ce,rn,Pn){(Jt!==ce||Qt!==rn||Te!==Pn)&&(o.stencilOp(ce,rn,Pn),Jt=ce,Qt=rn,Te=Pn)},setLocked:function(ce){I=ce},setClear:function(ce){li!==ce&&(o.clearStencil(ce),li=ce)},reset:function(){I=!1,Z=null,at=null,xt=null,Tt=null,Jt=null,Qt=null,Te=null,li=null}}}const a=new i,c=new s,l=new r,h=new WeakMap,u=new WeakMap;let d={},f={},_=new WeakMap,m=[],g=null,p=!1,y=null,v=null,x=null,b=null,w=null,T=null,A=null,M=!1,S=null,U=null,N=null,D=null,z=null;const O=o.getParameter(35661);let G=!1,W=0;const B=o.getParameter(7938);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=W>=2);let K=null,X={};const pt=o.getParameter(3088),nt=o.getParameter(2978),q=new re().fromArray(pt),$=new re().fromArray(nt);function ct(I,Z,at){const xt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(I,Tt),o.texParameteri(I,10241,9728),o.texParameteri(I,10240,9728);for(let Jt=0;Jt<at;Jt++)o.texImage2D(Z+Jt,0,6408,1,1,0,6408,5121,xt);return Tt}const mt={};mt[3553]=ct(3553,3553,1),mt[34067]=ct(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),V(2929),c.setFunc(hl),ht(!1),At(Sc),V(2884),et(yi);function V(I){d[I]!==!0&&(o.enable(I),d[I]=!0)}function Pt(I){d[I]!==!1&&(o.disable(I),d[I]=!1)}function Lt(I,Z){return f[I]!==Z?(o.bindFramebuffer(I,Z),f[I]=Z,n&&(I===36009&&(f[36160]=Z),I===36160&&(f[36009]=Z)),!0):!1}function ot(I,Z){let at=m,xt=!1;if(I)if(at=_.get(Z),at===void 0&&(at=[],_.set(Z,at)),I.isWebGLMultipleRenderTargets){const Tt=I.texture;if(at.length!==Tt.length||at[0]!==36064){for(let Jt=0,Qt=Tt.length;Jt<Qt;Jt++)at[Jt]=36064+Jt;at.length=Tt.length,xt=!0}}else at[0]!==36064&&(at[0]=36064,xt=!0);else at[0]!==1029&&(at[0]=1029,xt=!0);xt&&(e.isWebGL2?o.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function bt(I){return g!==I?(o.useProgram(I),g=I,!0):!1}const it={[Us]:32774,[Uf]:32778,[Of]:32779};if(n)it[Ac]=32775,it[Cc]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(it[Ac]=I.MIN_EXT,it[Cc]=I.MAX_EXT)}const J={[Nf]:0,[Ff]:1,[Bf]:768,[Fu]:770,[jf]:776,[Hf]:774,[Vf]:772,[kf]:769,[Bu]:771,[Wf]:775,[Gf]:773};function et(I,Z,at,xt,Tt,Jt,Qt,Te){if(I===yi){p===!0&&(Pt(3042),p=!1);return}if(p===!1&&(V(3042),p=!0),I!==If){if(I!==y||Te!==M){if((v!==Us||w!==Us)&&(o.blendEquation(32774),v=Us,w=Us),Te)switch(I){case ks:o.blendFuncSeparate(1,771,1,771);break;case wc:o.blendFunc(1,1);break;case Tc:o.blendFuncSeparate(0,769,0,1);break;case Ec:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ks:o.blendFuncSeparate(770,771,1,771);break;case wc:o.blendFunc(770,1);break;case Tc:o.blendFuncSeparate(0,769,0,1);break;case Ec:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,b=null,T=null,A=null,y=I,M=Te}return}Tt=Tt||Z,Jt=Jt||at,Qt=Qt||xt,(Z!==v||Tt!==w)&&(o.blendEquationSeparate(it[Z],it[Tt]),v=Z,w=Tt),(at!==x||xt!==b||Jt!==T||Qt!==A)&&(o.blendFuncSeparate(J[at],J[xt],J[Jt],J[Qt]),x=at,b=xt,T=Jt,A=Qt),y=I,M=!1}function vt(I,Z){I.side===En?Pt(2884):V(2884);let at=I.side===Be;Z&&(at=!at),ht(at),I.blending===ks&&I.transparent===!1?et(yi):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const xt=I.stencilWrite;l.setTest(xt),xt&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),wt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?V(32926):Pt(32926)}function ht(I){S!==I&&(I?o.frontFace(2304):o.frontFace(2305),S=I)}function At(I){I!==Rf?(V(2884),I!==U&&(I===Sc?o.cullFace(1029):I===Df?o.cullFace(1028):o.cullFace(1032))):Pt(2884),U=I}function Ct(I){I!==N&&(G&&o.lineWidth(I),N=I)}function wt(I,Z,at){I?(V(32823),(D!==Z||z!==at)&&(o.polygonOffset(Z,at),D=Z,z=at)):Pt(32823)}function It(I){I?V(3089):Pt(3089)}function jt(I){I===void 0&&(I=33984+O-1),K!==I&&(o.activeTexture(I),K=I)}function L(I,Z,at){at===void 0&&(K===null?at=33984+O-1:at=K);let xt=X[at];xt===void 0&&(xt={type:void 0,texture:void 0},X[at]=xt),(xt.type!==I||xt.texture!==Z)&&(K!==at&&(o.activeTexture(at),K=at),o.bindTexture(I,Z||mt[I]),xt.type=I,xt.texture=Z)}function E(){const I=X[K];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{o.compressedTexImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{o.compressedTexImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{o.texSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{o.texSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{o.texStorage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{o.texStorage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{o.texImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{o.texImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(I){q.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),q.copy(I))}function Mt(I){$.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Dt(I,Z){let at=u.get(Z);at===void 0&&(at=new WeakMap,u.set(Z,at));let xt=at.get(I);xt===void 0&&(xt=o.getUniformBlockIndex(Z,I.name),at.set(I,xt))}function Ft(I,Z){const xt=u.get(Z).get(I);h.get(Z)!==xt&&(o.uniformBlockBinding(Z,xt,I.__bindingPointIndex),h.set(Z,xt))}function le(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},K=null,X={},f={},_=new WeakMap,m=[],g=null,p=!1,y=null,v=null,x=null,b=null,w=null,T=null,A=null,M=!1,S=null,U=null,N=null,D=null,z=null,q.set(0,0,o.canvas.width,o.canvas.height),$.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:V,disable:Pt,bindFramebuffer:Lt,drawBuffers:ot,useProgram:bt,setBlending:et,setMaterial:vt,setFlipSided:ht,setCullFace:At,setLineWidth:Ct,setPolygonOffset:wt,setScissorTest:It,activeTexture:jt,bindTexture:L,unbindTexture:E,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:yt,texImage3D:St,updateUBOMapping:Dt,uniformBlockBinding:Ft,texStorage2D:H,texStorage3D:ft,texSubImage2D:rt,texSubImage3D:dt,compressedTexSubImage2D:R,compressedTexSubImage3D:tt,scissor:_t,viewport:Mt,reset:le}}function xx(o,t,e,n,i,s,r){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,E){return p?new OffscreenCanvas(L,E):Ba("canvas")}function v(L,E,j,st){let rt=1;if((L.width>st||L.height>st)&&(rt=st/Math.max(L.width,L.height)),rt<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const dt=E?Ep:Math.floor,R=dt(rt*L.width),tt=dt(rt*L.height);m===void 0&&(m=y(R,tt));const H=j?y(R,tt):m;return H.width=R,H.height=tt,H.getContext("2d").drawImage(L,0,0,R,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+R+"x"+tt+")."),H}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return eh(L.width)&&eh(L.height)}function b(L){return a?!1:L.wrapS!==An||L.wrapT!==An||L.minFilter!==Ne&&L.minFilter!==un}function w(L,E){return L.generateMipmaps&&E&&L.minFilter!==Ne&&L.minFilter!==un}function T(L){o.generateMipmap(L)}function A(L,E,j,st,rt=!1){if(a===!1)return E;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let dt=E;return E===6403&&(j===5126&&(dt=33326),j===5131&&(dt=33325),j===5121&&(dt=33321)),E===33319&&(j===5126&&(dt=33328),j===5131&&(dt=33327),j===5121&&(dt=33323)),E===6408&&(j===5126&&(dt=34836),j===5131&&(dt=34842),j===5121&&(dt=st===Kt&&rt===!1?35907:32856),j===32819&&(dt=32854),j===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function M(L,E,j){return w(L,j)===!0||L.isFramebufferTexture&&L.minFilter!==Ne&&L.minFilter!==un?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function S(L){return L===Ne||L===Lc||L===ho?9728:9729}function U(L){const E=L.target;E.removeEventListener("dispose",U),D(E),E.isVideoTexture&&_.delete(E)}function N(L){const E=L.target;E.removeEventListener("dispose",N),O(E)}function D(L){const E=n.get(L);if(E.__webglInit===void 0)return;const j=L.source,st=g.get(j);if(st){const rt=st[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&z(L),Object.keys(st).length===0&&g.delete(j)}n.remove(L)}function z(L){const E=n.get(L);o.deleteTexture(E.__webglTexture);const j=L.source,st=g.get(j);delete st[E.__cacheKey],r.memory.textures--}function O(L){const E=L.texture,j=n.get(L),st=n.get(E);if(st.__webglTexture!==void 0&&(o.deleteTexture(st.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)o.deleteFramebuffer(j.__webglFramebuffer[rt]),j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer[rt]);else{if(o.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&o.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let rt=0;rt<j.__webglColorRenderbuffer.length;rt++)j.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(j.__webglColorRenderbuffer[rt]);j.__webglDepthRenderbuffer&&o.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let rt=0,dt=E.length;rt<dt;rt++){const R=n.get(E[rt]);R.__webglTexture&&(o.deleteTexture(R.__webglTexture),r.memory.textures--),n.remove(E[rt])}n.remove(E),n.remove(L)}let G=0;function W(){G=0}function B(){const L=G;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),G+=1,L}function K(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join()}function X(L,E){const j=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(j,L,E);return}}e.bindTexture(3553,j.__webglTexture,33984+E)}function pt(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Pt(j,L,E);return}e.bindTexture(35866,j.__webglTexture,33984+E)}function nt(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Pt(j,L,E);return}e.bindTexture(32879,j.__webglTexture,33984+E)}function q(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Lt(j,L,E);return}e.bindTexture(34067,j.__webglTexture,33984+E)}const $={[fl]:10497,[An]:33071,[pl]:33648},ct={[Ne]:9728,[Lc]:9984,[ho]:9986,[un]:9729,[rp]:9985,[Pr]:9987};function mt(L,E,j){if(j?(o.texParameteri(L,10242,$[E.wrapS]),o.texParameteri(L,10243,$[E.wrapT]),(L===32879||L===35866)&&o.texParameteri(L,32882,$[E.wrapR]),o.texParameteri(L,10240,ct[E.magFilter]),o.texParameteri(L,10241,ct[E.minFilter])):(o.texParameteri(L,10242,33071),o.texParameteri(L,10243,33071),(L===32879||L===35866)&&o.texParameteri(L,32882,33071),(E.wrapS!==An||E.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,10240,S(E.magFilter)),o.texParameteri(L,10241,S(E.minFilter)),E.minFilter!==Ne&&E.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ne||E.minFilter!==ho&&E.minFilter!==Pr||E.type===Wi&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Rr&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(o.texParameterf(L,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function V(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",U));const st=E.source;let rt=g.get(st);rt===void 0&&(rt={},g.set(st,rt));const dt=K(E);if(dt!==L.__cacheKey){rt[dt]===void 0&&(rt[dt]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,j=!0),rt[dt].usedTimes++;const R=rt[L.__cacheKey];R!==void 0&&(rt[L.__cacheKey].usedTimes--,R.usedTimes===0&&z(E)),L.__cacheKey=dt,L.__webglTexture=rt[dt].texture}return j}function Pt(L,E,j){let st=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=35866),E.isData3DTexture&&(st=32879);const rt=V(L,E),dt=E.source;e.bindTexture(st,L.__webglTexture,33984+j);const R=n.get(dt);if(dt.version!==R.__version||rt===!0){e.activeTexture(33984+j),o.pixelStorei(37440,E.flipY),o.pixelStorei(37441,E.premultiplyAlpha),o.pixelStorei(3317,E.unpackAlignment),o.pixelStorei(37443,0);const tt=b(E)&&x(E.image)===!1;let H=v(E.image,tt,!1,h);H=jt(E,H);const ft=x(H)||a,yt=s.convert(E.format,E.encoding);let St=s.convert(E.type),_t=A(E.internalFormat,yt,St,E.encoding,E.isVideoTexture);mt(st,E,ft);let Mt;const Dt=E.mipmaps,Ft=a&&E.isVideoTexture!==!0,le=R.__version===void 0||rt===!0,I=M(E,H,ft);if(E.isDepthTexture)_t=6402,a?E.type===Wi?_t=36012:E.type===Hi?_t=33190:E.type===Vs?_t=35056:_t=33189:E.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Xi&&_t===6402&&E.type!==Gu&&E.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Hi,St=s.convert(E.type)),E.format===Ks&&_t===6402&&(_t=34041,E.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Vs,St=s.convert(E.type))),le&&(Ft?e.texStorage2D(3553,1,_t,H.width,H.height):e.texImage2D(3553,0,_t,H.width,H.height,0,yt,St,null));else if(E.isDataTexture)if(Dt.length>0&&ft){Ft&&le&&e.texStorage2D(3553,I,_t,Dt[0].width,Dt[0].height);for(let Z=0,at=Dt.length;Z<at;Z++)Mt=Dt[Z],Ft?e.texSubImage2D(3553,Z,0,0,Mt.width,Mt.height,yt,St,Mt.data):e.texImage2D(3553,Z,_t,Mt.width,Mt.height,0,yt,St,Mt.data);E.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(3553,I,_t,H.width,H.height),e.texSubImage2D(3553,0,0,0,H.width,H.height,yt,St,H.data)):e.texImage2D(3553,0,_t,H.width,H.height,0,yt,St,H.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ft&&le&&e.texStorage3D(35866,I,_t,Dt[0].width,Dt[0].height,H.depth);for(let Z=0,at=Dt.length;Z<at;Z++)Mt=Dt[Z],E.format!==Cn?yt!==null?Ft?e.compressedTexSubImage3D(35866,Z,0,0,0,Mt.width,Mt.height,H.depth,yt,Mt.data,0,0):e.compressedTexImage3D(35866,Z,_t,Mt.width,Mt.height,H.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage3D(35866,Z,0,0,0,Mt.width,Mt.height,H.depth,yt,St,Mt.data):e.texImage3D(35866,Z,_t,Mt.width,Mt.height,H.depth,0,yt,St,Mt.data)}else{Ft&&le&&e.texStorage2D(3553,I,_t,Dt[0].width,Dt[0].height);for(let Z=0,at=Dt.length;Z<at;Z++)Mt=Dt[Z],E.format!==Cn?yt!==null?Ft?e.compressedTexSubImage2D(3553,Z,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(3553,Z,_t,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage2D(3553,Z,0,0,Mt.width,Mt.height,yt,St,Mt.data):e.texImage2D(3553,Z,_t,Mt.width,Mt.height,0,yt,St,Mt.data)}else if(E.isDataArrayTexture)Ft?(le&&e.texStorage3D(35866,I,_t,H.width,H.height,H.depth),e.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,yt,St,H.data)):e.texImage3D(35866,0,_t,H.width,H.height,H.depth,0,yt,St,H.data);else if(E.isData3DTexture)Ft?(le&&e.texStorage3D(32879,I,_t,H.width,H.height,H.depth),e.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,yt,St,H.data)):e.texImage3D(32879,0,_t,H.width,H.height,H.depth,0,yt,St,H.data);else if(E.isFramebufferTexture){if(le)if(Ft)e.texStorage2D(3553,I,_t,H.width,H.height);else{let Z=H.width,at=H.height;for(let xt=0;xt<I;xt++)e.texImage2D(3553,xt,_t,Z,at,0,yt,St,null),Z>>=1,at>>=1}}else if(Dt.length>0&&ft){Ft&&le&&e.texStorage2D(3553,I,_t,Dt[0].width,Dt[0].height);for(let Z=0,at=Dt.length;Z<at;Z++)Mt=Dt[Z],Ft?e.texSubImage2D(3553,Z,0,0,yt,St,Mt):e.texImage2D(3553,Z,_t,yt,St,Mt);E.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(3553,I,_t,H.width,H.height),e.texSubImage2D(3553,0,0,0,yt,St,H)):e.texImage2D(3553,0,_t,yt,St,H);w(E,ft)&&T(st),R.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Lt(L,E,j){if(E.image.length!==6)return;const st=V(L,E),rt=E.source;e.bindTexture(34067,L.__webglTexture,33984+j);const dt=n.get(rt);if(rt.version!==dt.__version||st===!0){e.activeTexture(33984+j),o.pixelStorei(37440,E.flipY),o.pixelStorei(37441,E.premultiplyAlpha),o.pixelStorei(3317,E.unpackAlignment),o.pixelStorei(37443,0);const R=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,H=[];for(let Z=0;Z<6;Z++)!R&&!tt?H[Z]=v(E.image[Z],!1,!0,l):H[Z]=tt?E.image[Z].image:E.image[Z],H[Z]=jt(E,H[Z]);const ft=H[0],yt=x(ft)||a,St=s.convert(E.format,E.encoding),_t=s.convert(E.type),Mt=A(E.internalFormat,St,_t,E.encoding),Dt=a&&E.isVideoTexture!==!0,Ft=dt.__version===void 0||st===!0;let le=M(E,ft,yt);mt(34067,E,yt);let I;if(R){Dt&&Ft&&e.texStorage2D(34067,le,Mt,ft.width,ft.height);for(let Z=0;Z<6;Z++){I=H[Z].mipmaps;for(let at=0;at<I.length;at++){const xt=I[at];E.format!==Cn?St!==null?Dt?e.compressedTexSubImage2D(34069+Z,at,0,0,xt.width,xt.height,St,xt.data):e.compressedTexImage2D(34069+Z,at,Mt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(34069+Z,at,0,0,xt.width,xt.height,St,_t,xt.data):e.texImage2D(34069+Z,at,Mt,xt.width,xt.height,0,St,_t,xt.data)}}}else{I=E.mipmaps,Dt&&Ft&&(I.length>0&&le++,e.texStorage2D(34067,le,Mt,H[0].width,H[0].height));for(let Z=0;Z<6;Z++)if(tt){Dt?e.texSubImage2D(34069+Z,0,0,0,H[Z].width,H[Z].height,St,_t,H[Z].data):e.texImage2D(34069+Z,0,Mt,H[Z].width,H[Z].height,0,St,_t,H[Z].data);for(let at=0;at<I.length;at++){const Tt=I[at].image[Z].image;Dt?e.texSubImage2D(34069+Z,at+1,0,0,Tt.width,Tt.height,St,_t,Tt.data):e.texImage2D(34069+Z,at+1,Mt,Tt.width,Tt.height,0,St,_t,Tt.data)}}else{Dt?e.texSubImage2D(34069+Z,0,0,0,St,_t,H[Z]):e.texImage2D(34069+Z,0,Mt,St,_t,H[Z]);for(let at=0;at<I.length;at++){const xt=I[at];Dt?e.texSubImage2D(34069+Z,at+1,0,0,St,_t,xt.image[Z]):e.texImage2D(34069+Z,at+1,Mt,St,_t,xt.image[Z])}}}w(E,yt)&&T(34067),dt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ot(L,E,j,st,rt){const dt=s.convert(j.format,j.encoding),R=s.convert(j.type),tt=A(j.internalFormat,dt,R,j.encoding);n.get(E).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,tt,E.width,E.height,E.depth,0,dt,R,null):e.texImage2D(rt,0,tt,E.width,E.height,0,dt,R,null)),e.bindFramebuffer(36160,L),wt(E)?d.framebufferTexture2DMultisampleEXT(36160,st,rt,n.get(j).__webglTexture,0,Ct(E)):(rt===3553||rt>=34069&&rt<=34074)&&o.framebufferTexture2D(36160,st,rt,n.get(j).__webglTexture,0),e.bindFramebuffer(36160,null)}function bt(L,E,j){if(o.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let st=33189;if(j||wt(E)){const rt=E.depthTexture;rt&&rt.isDepthTexture&&(rt.type===Wi?st=36012:rt.type===Hi&&(st=33190));const dt=Ct(E);wt(E)?d.renderbufferStorageMultisampleEXT(36161,dt,st,E.width,E.height):o.renderbufferStorageMultisample(36161,dt,st,E.width,E.height)}else o.renderbufferStorage(36161,st,E.width,E.height);o.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){const st=Ct(E);j&&wt(E)===!1?o.renderbufferStorageMultisample(36161,st,35056,E.width,E.height):wt(E)?d.renderbufferStorageMultisampleEXT(36161,st,35056,E.width,E.height):o.renderbufferStorage(36161,34041,E.width,E.height),o.framebufferRenderbuffer(36160,33306,36161,L)}else{const st=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let rt=0;rt<st.length;rt++){const dt=st[rt],R=s.convert(dt.format,dt.encoding),tt=s.convert(dt.type),H=A(dt.internalFormat,R,tt,dt.encoding),ft=Ct(E);j&&wt(E)===!1?o.renderbufferStorageMultisample(36161,ft,H,E.width,E.height):wt(E)?d.renderbufferStorageMultisampleEXT(36161,ft,H,E.width,E.height):o.renderbufferStorage(36161,H,E.width,E.height)}}o.bindRenderbuffer(36161,null)}function it(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const st=n.get(E.depthTexture).__webglTexture,rt=Ct(E);if(E.depthTexture.format===Xi)wt(E)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,st,0,rt):o.framebufferTexture2D(36160,36096,3553,st,0);else if(E.depthTexture.format===Ks)wt(E)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,st,0,rt):o.framebufferTexture2D(36160,33306,3553,st,0);else throw new Error("Unknown depthTexture format")}function J(L){const E=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");it(E.__webglFramebuffer,L)}else if(j){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(36160,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]=o.createRenderbuffer(),bt(E.__webglDepthbuffer[st],L,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),bt(E.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function et(L,E,j){const st=n.get(L);E!==void 0&&ot(st.__webglFramebuffer,L,L.texture,36064,3553),j!==void 0&&J(L)}function vt(L){const E=L.texture,j=n.get(L),st=n.get(E);L.addEventListener("dispose",N),L.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture()),st.__version=E.version,r.memory.textures++);const rt=L.isWebGLCubeRenderTarget===!0,dt=L.isWebGLMultipleRenderTargets===!0,R=x(L)||a;if(rt){j.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)j.__webglFramebuffer[tt]=o.createFramebuffer()}else{if(j.__webglFramebuffer=o.createFramebuffer(),dt)if(i.drawBuffers){const tt=L.texture;for(let H=0,ft=tt.length;H<ft;H++){const yt=n.get(tt[H]);yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&wt(L)===!1){const tt=dt?E:[E];j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let H=0;H<tt.length;H++){const ft=tt[H];j.__webglColorRenderbuffer[H]=o.createRenderbuffer(),o.bindRenderbuffer(36161,j.__webglColorRenderbuffer[H]);const yt=s.convert(ft.format,ft.encoding),St=s.convert(ft.type),_t=A(ft.internalFormat,yt,St,ft.encoding,L.isXRRenderTarget===!0),Mt=Ct(L);o.renderbufferStorageMultisample(36161,Mt,_t,L.width,L.height),o.framebufferRenderbuffer(36160,36064+H,36161,j.__webglColorRenderbuffer[H])}o.bindRenderbuffer(36161,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(j.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,st.__webglTexture),mt(34067,E,R);for(let tt=0;tt<6;tt++)ot(j.__webglFramebuffer[tt],L,E,36064,34069+tt);w(E,R)&&T(34067),e.unbindTexture()}else if(dt){const tt=L.texture;for(let H=0,ft=tt.length;H<ft;H++){const yt=tt[H],St=n.get(yt);e.bindTexture(3553,St.__webglTexture),mt(3553,yt,R),ot(j.__webglFramebuffer,L,yt,36064+H,3553),w(yt,R)&&T(3553)}e.unbindTexture()}else{let tt=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?tt=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(tt,st.__webglTexture),mt(tt,E,R),ot(j.__webglFramebuffer,L,E,36064,tt),w(E,R)&&T(tt),e.unbindTexture()}L.depthBuffer&&J(L)}function ht(L){const E=x(L)||a,j=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let st=0,rt=j.length;st<rt;st++){const dt=j[st];if(w(dt,E)){const R=L.isWebGLCubeRenderTarget?34067:3553,tt=n.get(dt).__webglTexture;e.bindTexture(R,tt),T(R),e.unbindTexture()}}}function At(L){if(a&&L.samples>0&&wt(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],j=L.width,st=L.height;let rt=16384;const dt=[],R=L.stencilBuffer?33306:36096,tt=n.get(L),H=L.isWebGLMultipleRenderTargets===!0;if(H)for(let ft=0;ft<E.length;ft++)e.bindFramebuffer(36160,tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ft,36161,null),e.bindFramebuffer(36160,tt.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ft,3553,null,0);e.bindFramebuffer(36008,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,tt.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){dt.push(36064+ft),L.depthBuffer&&dt.push(R);const yt=tt.__ignoreDepthValues!==void 0?tt.__ignoreDepthValues:!1;if(yt===!1&&(L.depthBuffer&&(rt|=256),L.stencilBuffer&&(rt|=1024)),H&&o.framebufferRenderbuffer(36008,36064,36161,tt.__webglColorRenderbuffer[ft]),yt===!0&&(o.invalidateFramebuffer(36008,[R]),o.invalidateFramebuffer(36009,[R])),H){const St=n.get(E[ft]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,St,0)}o.blitFramebuffer(0,0,j,st,0,0,j,st,rt,9728),f&&o.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),H)for(let ft=0;ft<E.length;ft++){e.bindFramebuffer(36160,tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ft,36161,tt.__webglColorRenderbuffer[ft]);const yt=n.get(E[ft]).__webglTexture;e.bindFramebuffer(36160,tt.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ft,3553,yt,0)}e.bindFramebuffer(36009,tt.__webglMultisampledFramebuffer)}}function Ct(L){return Math.min(u,L.samples)}function wt(L){const E=n.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(L){const E=r.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function jt(L,E){const j=L.encoding,st=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ml||j!==Ki&&(j===Kt?a===!1?t.has("EXT_sRGB")===!0&&st===Cn?(L.format=ml,L.minFilter=un,L.generateMipmaps=!1):E=qu.sRGBToLinear(E):(st!==Cn||rt!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),E}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=pt,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=et,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=wt}function vx(o,t,e){const n=e.isWebGL2;function i(s,r=null){let a;if(s===Ji)return 5121;if(s===cp)return 32819;if(s===hp)return 32820;if(s===ap)return 5120;if(s===op)return 5122;if(s===Gu)return 5123;if(s===lp)return 5124;if(s===Hi)return 5125;if(s===Wi)return 5126;if(s===Rr)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===up)return 6406;if(s===Cn)return 6408;if(s===dp)return 6409;if(s===fp)return 6410;if(s===Xi)return 6402;if(s===Ks)return 34041;if(s===ml)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===pp)return 6403;if(s===mp)return 36244;if(s===gp)return 33319;if(s===_p)return 33320;if(s===xp)return 36249;if(s===uo||s===fo||s===po||s===mo)if(r===Kt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===po)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pc||s===Rc||s===Dc||s===zc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Pc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vp)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ic||s===Uc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ic)return r===Kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Uc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Oc||s===Nc||s===Fc||s===Bc||s===kc||s===Vc||s===Gc||s===Hc||s===Wc||s===jc||s===qc||s===Xc||s===Yc||s===Zc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Oc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zc)return r===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===go)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===go)return r===Kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yp||s===$c||s===Jc||s===Kc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===go)return a.COMPRESSED_RED_RGTC1_EXT;if(s===$c)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vs?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class yx extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ji extends oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bx={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const m of t.hand.values()){const g=e.getJointPose(m,n),p=this._getHandJoint(l,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Mx extends en{constructor(t,e,n,i,s,r,a,c,l,h){if(h=h!==void 0?h:Xi,h!==Xi&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=Hi),n===void 0&&h===Ks&&(n=Vs),super(null,i,s,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1}}class Sx extends is{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const m=e.getContextAttributes();let g=null,p=null;const y=[],v=[],x=new Set,b=new Map,w=new wn;w.layers.enable(1),w.viewport=new re;const T=new wn;T.layers.enable(2),T.viewport=new re;const A=[w,T],M=new yx;M.layers.enable(1),M.layers.enable(2);let S=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=y[q];return $===void 0&&($=new ko,y[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=y[q];return $===void 0&&($=new ko,y[q]=$),$.getGripSpace()},this.getHand=function(q){let $=y[q];return $===void 0&&($=new ko,y[q]=$),$.getHandSpace()};function N(q){const $=v.indexOf(q.inputSource);if($===-1)return;const ct=y[$];ct!==void 0&&ct.dispatchEvent({type:q.type,data:q.inputSource})}function D(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",z);for(let q=0;q<y.length;q++){const $=v[q];$!==null&&(v[q]=null,y[q].disconnect($))}S=null,U=null,t.setRenderTarget(g),f=null,d=null,u=null,i=null,p=null,nt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",D),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),p=new Qi(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Ji,encoding:t.outputEncoding,stencilBuffer:m.stencil})}else{let $=null,ct=null,mt=null;m.depth&&(mt=m.stencil?35056:33190,$=m.stencil?Ks:Xi,ct=m.stencil?Vs:Hi);const V={colorFormat:32856,depthFormat:mt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(V),i.updateRenderState({layers:[d]}),p=new Qi(d.textureWidth,d.textureHeight,{format:Cn,type:Ji,depthTexture:new Mx(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,encoding:t.outputEncoding,samples:m.antialias?4:0});const Pt=t.properties.get(p);Pt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(q){for(let $=0;$<q.removed.length;$++){const ct=q.removed[$],mt=v.indexOf(ct);mt>=0&&(v[mt]=null,y[mt].disconnect(ct))}for(let $=0;$<q.added.length;$++){const ct=q.added[$];let mt=v.indexOf(ct);if(mt===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=v.length){v.push(ct),mt=Pt;break}else if(v[Pt]===null){v[Pt]=ct,mt=Pt;break}if(mt===-1)break}const V=y[mt];V&&V.connect(ct)}}const O=new P,G=new P;function W(q,$,ct){O.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(ct.matrixWorld);const mt=O.distanceTo(G),V=$.projectionMatrix.elements,Pt=ct.projectionMatrix.elements,Lt=V[14]/(V[10]-1),ot=V[14]/(V[10]+1),bt=(V[9]+1)/V[5],it=(V[9]-1)/V[5],J=(V[8]-1)/V[0],et=(Pt[8]+1)/Pt[0],vt=Lt*J,ht=Lt*et,At=mt/(-J+et),Ct=At*-J;$.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const wt=Lt+At,It=ot+At,jt=vt-Ct,L=ht+(mt-Ct),E=bt*ot/It*wt,j=it*ot/It*wt;q.projectionMatrix.makePerspective(jt,L,E,j,wt,It),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function B(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;M.near=T.near=w.near=q.near,M.far=T.far=w.far=q.far,(S!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,U=M.far);const $=q.parent,ct=M.cameras;B(M,$);for(let mt=0;mt<ct.length;mt++)B(ct[mt],$);ct.length===2?W(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),K(q,M,$)};function K(q,$,ct){ct===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(ct.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);const mt=q.children;for(let V=0,Pt=mt.length;V<Pt;V++)mt[V].updateMatrixWorld(!0);q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=gl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.getPlanes=function(){return x};let X=null;function pt(q,$){if(h=$.getViewerPose(l||r),_=$,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let mt=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let V=0;V<ct.length;V++){const Pt=ct[V];let Lt=null;if(f!==null)Lt=f.getViewport(Pt);else{const bt=u.getViewSubImage(d,Pt);Lt=bt.viewport,V===0&&(t.setRenderTargetTextures(p,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(p))}let ot=A[V];ot===void 0&&(ot=new wn,ot.layers.enable(V),ot.viewport=new re,A[V]=ot),ot.matrix.fromArray(Pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),V===0&&(M.matrix.copy(ot.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(ot)}}for(let ct=0;ct<y.length;ct++){const mt=v[ct],V=y[ct];mt!==null&&V!==void 0&&V.update(mt,$,l||r)}if(X&&X(q,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ct=null;for(const mt of x)$.detectedPlanes.has(mt)||(ct===null&&(ct=[]),ct.push(mt));if(ct!==null)for(const mt of ct)x.delete(mt),b.delete(mt),n.dispatchEvent({type:"planeremoved",data:mt});for(const mt of $.detectedPlanes)if(!x.has(mt))x.add(mt),b.set(mt,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:mt});else{const V=b.get(mt);mt.lastChangedTime>V&&(b.set(mt,mt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:mt}))}}_=null}const nt=new nd;nt.setAnimationLoop(pt),this.setAnimationLoop=function(q){X=q},this.dispose=function(){}}}function wx(o,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ku(o)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=o.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tx(o,t,e,n){let i={},s={},r=[];const a=e.isWebGL2?o.getParameter(35375):0;function c(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function l(y,v){let x=i[y.id];x===void 0&&(_(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));const b=v.program;n.updateUBOMapping(y,b);const w=t.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const v=u();y.__bindingPointIndex=v;const x=o.createBuffer(),b=y.__size,w=y.usage;return o.bindBuffer(35345,x),o.bufferData(35345,b,w),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,x),x}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],x=y.uniforms,b=y.__cache;o.bindBuffer(35345,v);for(let w=0,T=x.length;w<T;w++){const A=x[w];if(f(A,w,b)===!0){const M=A.__offset,S=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let N=0;N<S.length;N++){const D=S[N],z=m(D);typeof D=="number"?(A.__data[0]=D,o.bufferSubData(35345,M+U,A.__data)):D.isMatrix3?(A.__data[0]=D.elements[0],A.__data[1]=D.elements[1],A.__data[2]=D.elements[2],A.__data[3]=D.elements[0],A.__data[4]=D.elements[3],A.__data[5]=D.elements[4],A.__data[6]=D.elements[5],A.__data[7]=D.elements[0],A.__data[8]=D.elements[6],A.__data[9]=D.elements[7],A.__data[10]=D.elements[8],A.__data[11]=D.elements[0]):(D.toArray(A.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,M,A.__data)}}o.bindBuffer(35345,null)}function f(y,v,x){const b=y.value;if(x[v]===void 0){if(typeof b=="number")x[v]=b;else{const w=Array.isArray(b)?b:[b],T=[];for(let A=0;A<w.length;A++)T.push(w[A].clone());x[v]=T}return!0}else if(typeof b=="number"){if(x[v]!==b)return x[v]=b,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],T=Array.isArray(b)?b:[b];for(let A=0;A<w.length;A++){const M=w[A];if(M.equals(T[A])===!1)return M.copy(T[A]),!0}}return!1}function _(y){const v=y.uniforms;let x=0;const b=16;let w=0;for(let T=0,A=v.length;T<A;T++){const M=v[T],S={boundary:0,storage:0},U=Array.isArray(M.value)?M.value:[M.value];for(let N=0,D=U.length;N<D;N++){const z=U[N],O=m(z);S.boundary+=O.boundary,S.storage+=O.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,T>0){w=x%b;const N=b-w;w!==0&&N-S.boundary<0&&(x+=b-w,M.__offset=x)}x+=S.storage}return w=x%b,w>0&&(x+=b-w),y.__size=x,y.__cache={},this}function m(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){const v=y.target;v.removeEventListener("dispose",g);const x=r.indexOf(v.__bindingPointIndex);r.splice(x,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const y in i)o.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:c,update:l,dispose:p}}function Ex(){const o=Ba("canvas");return o.style.display="block",o}class Xl{constructor(t={}){const{canvas:e=Ex(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;let f=null,_=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ki,this.useLegacyLights=!0,this.toneMapping=ei,this.toneMappingExposure=1;const p=this;let y=!1,v=0,x=0,b=null,w=-1,T=null;const A=new re,M=new re;let S=null,U=e.width,N=e.height,D=1,z=null,O=null;const G=new re(0,0,U,N),W=new re(0,0,U,N);let B=!1;const K=new jl;let X=!1,pt=!1,nt=null;const q=new se,$=new P,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mt(){return b===null?D:1}let V=n;function Pt(C,k){for(let Y=0;Y<C.length;Y++){const F=C[Y],Q=e.getContext(F,k);if(Q!==null)return Q}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gl}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),V=Pt(k,C),V===null)throw Pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Lt,ot,bt,it,J,et,vt,ht,At,Ct,wt,It,jt,L,E,j,st,rt,dt,R,tt,H,ft,yt;function St(){Lt=new N0(V),ot=new R0(V,Lt,t),Lt.init(ot),H=new vx(V,Lt,ot),bt=new _x(V,Lt,ot),it=new k0,J=new ix,et=new xx(V,Lt,bt,J,ot,H,it),vt=new z0(p),ht=new O0(p),At=new Kp(V,ot),ft=new L0(V,Lt,At,ot),Ct=new F0(V,At,it,ft),wt=new W0(V,Ct,At,it),dt=new H0(V,ot,et),j=new D0(J),It=new nx(p,vt,ht,Lt,ot,ft,j),jt=new wx(p,J),L=new rx,E=new ux(Lt,ot),rt=new C0(p,vt,ht,bt,wt,d,c),st=new gx(p,wt,ot),yt=new Tx(V,it,ot,bt),R=new P0(V,Lt,it,ot),tt=new B0(V,Lt,it,ot),it.programs=It.programs,p.capabilities=ot,p.extensions=Lt,p.properties=J,p.renderLists=L,p.shadowMap=st,p.state=bt,p.info=it}St();const _t=new Sx(p,V);this.xr=_t,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(C){C!==void 0&&(D=C,this.setSize(U,N,!1))},this.getSize=function(C){return C.set(U,N)},this.setSize=function(C,k,Y=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,N=k,e.width=Math.floor(C*D),e.height=Math.floor(k*D),Y===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(U*D,N*D).floor()},this.setDrawingBufferSize=function(C,k,Y){U=C,N=k,D=Y,e.width=Math.floor(C*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,k,Y,F){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,k,Y,F),bt.viewport(A.copy(G).multiplyScalar(D).floor())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,k,Y,F){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,k,Y,F),bt.scissor(M.copy(W).multiplyScalar(D).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(C){bt.setScissorTest(B=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(C=!0,k=!0,Y=!0){let F=0;C&&(F|=16384),k&&(F|=256),Y&&(F|=1024),V.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),L.dispose(),E.dispose(),J.dispose(),vt.dispose(),ht.dispose(),wt.dispose(),ft.dispose(),yt.dispose(),It.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Tt),_t.removeEventListener("sessionend",Jt),nt&&(nt.dispose(),nt=null),Qt.stop()};function Mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=it.autoReset,k=st.enabled,Y=st.autoUpdate,F=st.needsUpdate,Q=st.type;St(),it.autoReset=C,st.enabled=k,st.autoUpdate=Y,st.needsUpdate=F,st.type=Q}function Ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const k=C.target;k.removeEventListener("dispose",le),I(k)}function I(C){Z(C),J.remove(C)}function Z(C){const k=J.get(C).programs;k!==void 0&&(k.forEach(function(Y){It.releaseProgram(Y)}),C.isShaderMaterial&&It.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,F,Q,Et){k===null&&(k=ct);const Rt=Q.isMesh&&Q.matrixWorld.determinant()<0,zt=Tf(C,k,Y,F,Q);bt.setMaterial(F,Rt);let Ut=Y.index,Bt=1;F.wireframe===!0&&(Ut=Ct.getWireframeAttribute(Y),Bt=2);const kt=Y.drawRange,Gt=Y.attributes.position;let Yt=kt.start*Bt,ze=(kt.start+kt.count)*Bt;Et!==null&&(Yt=Math.max(Yt,Et.start*Bt),ze=Math.min(ze,(Et.start+Et.count)*Bt)),Ut!==null?(Yt=Math.max(Yt,0),ze=Math.min(ze,Ut.count)):Gt!=null&&(Yt=Math.max(Yt,0),ze=Math.min(ze,Gt.count));const xn=ze-Yt;if(xn<0||xn===1/0)return;ft.setup(Q,F,zt,Y,Ut);let Li,de=R;if(Ut!==null&&(Li=At.get(Ut),de=tt,de.setIndex(Li)),Q.isMesh)F.wireframe===!0?(bt.setLineWidth(F.wireframeLinewidth*mt()),de.setMode(1)):de.setMode(4);else if(Q.isLine){let qt=F.linewidth;qt===void 0&&(qt=1),bt.setLineWidth(qt*mt()),Q.isLineSegments?de.setMode(1):Q.isLineLoop?de.setMode(2):de.setMode(3)}else Q.isPoints?de.setMode(0):Q.isSprite&&de.setMode(4);if(Q.isInstancedMesh)de.renderInstances(Yt,xn,Q.count);else if(Y.isInstancedBufferGeometry){const qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ao=Math.min(Y.instanceCount,qt);de.renderInstances(Yt,xn,ao)}else de.render(Yt,xn)},this.compile=function(C,k){function Y(F,Q,Et){F.transparent===!0&&F.side===En&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,Zr(F,Q,Et),F.side=Ti,F.needsUpdate=!0,Zr(F,Q,Et),F.side=En):Zr(F,Q,Et)}_=E.get(C),_.init(),g.push(_),C.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights(p.useLegacyLights),C.traverse(function(F){const Q=F.material;if(Q)if(Array.isArray(Q))for(let Et=0;Et<Q.length;Et++){const Rt=Q[Et];Y(Rt,C,F)}else Y(Q,C,F)}),g.pop(),_=null};let at=null;function xt(C){at&&at(C)}function Tt(){Qt.stop()}function Jt(){Qt.start()}const Qt=new nd;Qt.setAnimationLoop(xt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(C){at=C,_t.setAnimationLoop(C),C===null?Qt.stop():Qt.start()},_t.addEventListener("sessionstart",Tt),_t.addEventListener("sessionend",Jt),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(k),k=_t.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,k,b),_=E.get(C,g.length),_.init(),g.push(_),q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(q),pt=this.localClippingEnabled,X=j.init(this.clippingPlanes,pt),f=L.get(C,m.length),f.init(),m.push(f),Te(C,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(z,O),X===!0&&j.beginShadows();const Y=_.state.shadowsArray;if(st.render(Y,C,k),X===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(f,C),_.setupLights(p.useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let Q=0,Et=F.length;Q<Et;Q++){const Rt=F[Q];li(f,C,Rt,Rt.viewport)}}else li(f,C,k);b!==null&&(et.updateMultisampleRenderTarget(b),et.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(p,C,k),ft.resetDefaultState(),w=-1,T=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Te(C,k,Y,F){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){F&&$.setFromMatrixPosition(C.matrixWorld).applyMatrix4(q);const Rt=wt.update(C),zt=C.material;zt.visible&&f.push(C,Rt,zt,Y,$.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==it.render.frame&&(C.skeleton.update(),C.skeleton.frame=it.render.frame),!C.frustumCulled||K.intersectsObject(C))){F&&$.setFromMatrixPosition(C.matrixWorld).applyMatrix4(q);const Rt=wt.update(C),zt=C.material;if(Array.isArray(zt)){const Ut=Rt.groups;for(let Bt=0,kt=Ut.length;Bt<kt;Bt++){const Gt=Ut[Bt],Yt=zt[Gt.materialIndex];Yt&&Yt.visible&&f.push(C,Rt,Yt,Y,$.z,Gt)}}else zt.visible&&f.push(C,Rt,zt,Y,$.z,null)}}const Et=C.children;for(let Rt=0,zt=Et.length;Rt<zt;Rt++)Te(Et[Rt],k,Y,F)}function li(C,k,Y,F){const Q=C.opaque,Et=C.transmissive,Rt=C.transparent;_.setupLightsView(Y),X===!0&&j.setGlobalState(p.clippingPlanes,Y),Et.length>0&&ce(Q,Et,k,Y),F&&bt.viewport(A.copy(F)),Q.length>0&&rn(Q,k,Y),Et.length>0&&rn(Et,k,Y),Rt.length>0&&rn(Rt,k,Y),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ce(C,k,Y,F){if(nt===null){const zt=ot.isWebGL2;nt=new Qi(1024,1024,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")?Rr:Ji,minFilter:Pr,samples:zt&&a===!0?4:0})}const Q=p.getRenderTarget();p.setRenderTarget(nt),p.clear();const Et=p.toneMapping;p.toneMapping=ei,rn(C,Y,F),et.updateMultisampleRenderTarget(nt),et.updateRenderTargetMipmap(nt);let Rt=!1;for(let zt=0,Ut=k.length;zt<Ut;zt++){const Bt=k[zt],kt=Bt.object,Gt=Bt.geometry,Yt=Bt.material,ze=Bt.group;if(Yt.side===En&&kt.layers.test(F.layers)){const xn=Yt.side;Yt.side=Be,Yt.needsUpdate=!0,Pn(kt,Y,F,Gt,Yt,ze),Yt.side=xn,Yt.needsUpdate=!0,Rt=!0}}Rt===!0&&(et.updateMultisampleRenderTarget(nt),et.updateRenderTargetMipmap(nt)),p.setRenderTarget(Q),p.toneMapping=Et}function rn(C,k,Y){const F=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,Et=C.length;Q<Et;Q++){const Rt=C[Q],zt=Rt.object,Ut=Rt.geometry,Bt=F===null?Rt.material:F,kt=Rt.group;zt.layers.test(Y.layers)&&Pn(zt,k,Y,Ut,Bt,kt)}}function Pn(C,k,Y,F,Q,Et){C.onBeforeRender(p,k,Y,F,Q,Et),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(p,k,Y,F,C,Et),Q.transparent===!0&&Q.side===En&&Q.forceSinglePass===!1?(Q.side=Be,Q.needsUpdate=!0,p.renderBufferDirect(Y,k,F,Q,C,Et),Q.side=Ti,Q.needsUpdate=!0,p.renderBufferDirect(Y,k,F,Q,C,Et),Q.side=En):p.renderBufferDirect(Y,k,F,Q,C,Et),C.onAfterRender(p,k,Y,F,Q,Et)}function Zr(C,k,Y){k.isScene!==!0&&(k=ct);const F=J.get(C),Q=_.state.lights,Et=_.state.shadowsArray,Rt=Q.state.version,zt=It.getParameters(C,Q.state,Et,k,Y),Ut=It.getProgramCacheKey(zt);let Bt=F.programs;F.environment=C.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(C.isMeshStandardMaterial?ht:vt).get(C.envMap||F.environment),Bt===void 0&&(C.addEventListener("dispose",le),Bt=new Map,F.programs=Bt);let kt=Bt.get(Ut);if(kt!==void 0){if(F.currentProgram===kt&&F.lightsStateVersion===Rt)return yc(C,zt),kt}else zt.uniforms=It.getUniforms(C),C.onBuild(Y,zt,p),C.onBeforeCompile(zt,p),kt=It.acquireProgram(zt,Ut),Bt.set(Ut,kt),F.uniforms=zt.uniforms;const Gt=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=j.uniform),yc(C,zt),F.needsLights=Af(C),F.lightsStateVersion=Rt,F.needsLights&&(Gt.ambientLightColor.value=Q.state.ambient,Gt.lightProbe.value=Q.state.probe,Gt.directionalLights.value=Q.state.directional,Gt.directionalLightShadows.value=Q.state.directionalShadow,Gt.spotLights.value=Q.state.spot,Gt.spotLightShadows.value=Q.state.spotShadow,Gt.rectAreaLights.value=Q.state.rectArea,Gt.ltc_1.value=Q.state.rectAreaLTC1,Gt.ltc_2.value=Q.state.rectAreaLTC2,Gt.pointLights.value=Q.state.point,Gt.pointLightShadows.value=Q.state.pointShadow,Gt.hemisphereLights.value=Q.state.hemi,Gt.directionalShadowMap.value=Q.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Gt.spotShadowMap.value=Q.state.spotShadowMap,Gt.spotLightMatrix.value=Q.state.spotLightMatrix,Gt.spotLightMap.value=Q.state.spotLightMap,Gt.pointShadowMap.value=Q.state.pointShadowMap,Gt.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Yt=kt.getUniforms(),ze=Ia.seqWithValue(Yt.seq,Gt);return F.currentProgram=kt,F.uniformsList=ze,kt}function yc(C,k){const Y=J.get(C);Y.outputEncoding=k.outputEncoding,Y.instancing=k.instancing,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Tf(C,k,Y,F,Q){k.isScene!==!0&&(k=ct),et.resetTextureUnits();const Et=k.fog,Rt=F.isMeshStandardMaterial?k.environment:null,zt=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Ki,Ut=(F.isMeshStandardMaterial?ht:vt).get(F.envMap||Rt),Bt=F.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!F.normalMap&&!!Y.attributes.tangent,Gt=!!Y.morphAttributes.position,Yt=!!Y.morphAttributes.normal,ze=!!Y.morphAttributes.color,xn=F.toneMapped?p.toneMapping:ei,Li=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,de=Li!==void 0?Li.length:0,qt=J.get(F),ao=_.state.lights;if(X===!0&&(pt===!0||C!==T)){const We=C===T&&F.id===w;j.setState(F,C,We)}let ve=!1;F.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ao.state.version||qt.outputEncoding!==zt||Q.isInstancedMesh&&qt.instancing===!1||!Q.isInstancedMesh&&qt.instancing===!0||Q.isSkinnedMesh&&qt.skinning===!1||!Q.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==Ut||F.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==j.numPlanes||qt.numIntersection!==j.numIntersection)||qt.vertexAlphas!==Bt||qt.vertexTangents!==kt||qt.morphTargets!==Gt||qt.morphNormals!==Yt||qt.morphColors!==ze||qt.toneMapping!==xn||ot.isWebGL2===!0&&qt.morphTargetsCount!==de)&&(ve=!0):(ve=!0,qt.__version=F.version);let Pi=qt.currentProgram;ve===!0&&(Pi=Zr(F,k,Q));let bc=!1,hr=!1,oo=!1;const Ie=Pi.getUniforms(),Ri=qt.uniforms;if(bt.useProgram(Pi.program)&&(bc=!0,hr=!0,oo=!0),F.id!==w&&(w=F.id,hr=!0),bc||T!==C){if(Ie.setValue(V,"projectionMatrix",C.projectionMatrix),ot.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),T!==C&&(T=C,hr=!0,oo=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const We=Ie.map.cameraPosition;We!==void 0&&We.setValue(V,$.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Q.isSkinnedMesh)&&Ie.setValue(V,"viewMatrix",C.matrixWorldInverse)}if(Q.isSkinnedMesh){Ie.setOptional(V,Q,"bindMatrix"),Ie.setOptional(V,Q,"bindMatrixInverse");const We=Q.skeleton;We&&(ot.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Ie.setValue(V,"boneTexture",We.boneTexture,et),Ie.setValue(V,"boneTextureSize",We.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lo=Y.morphAttributes;if((lo.position!==void 0||lo.normal!==void 0||lo.color!==void 0&&ot.isWebGL2===!0)&&dt.update(Q,Y,Pi),(hr||qt.receiveShadow!==Q.receiveShadow)&&(qt.receiveShadow=Q.receiveShadow,Ie.setValue(V,"receiveShadow",Q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ri.envMap.value=Ut,Ri.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),hr&&(Ie.setValue(V,"toneMappingExposure",p.toneMappingExposure),qt.needsLights&&Ef(Ri,oo),Et&&F.fog===!0&&jt.refreshFogUniforms(Ri,Et),jt.refreshMaterialUniforms(Ri,F,D,N,nt),Ia.upload(V,qt.uniformsList,Ri,et)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ia.upload(V,qt.uniformsList,Ri,et),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ie.setValue(V,"center",Q.center),Ie.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(V,"normalMatrix",Q.normalMatrix),Ie.setValue(V,"modelMatrix",Q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const We=F.uniformsGroups;for(let co=0,Cf=We.length;co<Cf;co++)if(ot.isWebGL2){const Mc=We[co];yt.update(Mc,Pi),yt.bind(Mc,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Ef(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Af(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,k,Y){J.get(C.texture).__webglTexture=k,J.get(C.depthTexture).__webglTexture=Y;const F=J.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Y===void 0,F.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const Y=J.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Y=0){b=C,v=k,x=Y;let F=!0,Q=null,Et=!1,Rt=!1;if(C){const Ut=J.get(C);Ut.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(36160,null),F=!1):Ut.__webglFramebuffer===void 0?et.setupRenderTarget(C):Ut.__hasExternalTextures&&et.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);const Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Rt=!0);const kt=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Q=kt[k],Et=!0):ot.isWebGL2&&C.samples>0&&et.useMultisampledRTT(C)===!1?Q=J.get(C).__webglMultisampledFramebuffer:Q=kt,A.copy(C.viewport),M.copy(C.scissor),S=C.scissorTest}else A.copy(G).multiplyScalar(D).floor(),M.copy(W).multiplyScalar(D).floor(),S=B;if(bt.bindFramebuffer(36160,Q)&&ot.drawBuffers&&F&&bt.drawBuffers(C,Q),bt.viewport(A),bt.scissor(M),bt.setScissorTest(S),Et){const Ut=J.get(C.texture);V.framebufferTexture2D(36160,36064,34069+k,Ut.__webglTexture,Y)}else if(Rt){const Ut=J.get(C.texture),Bt=k||0;V.framebufferTextureLayer(36160,36064,Ut.__webglTexture,Y||0,Bt)}w=-1},this.readRenderTargetPixels=function(C,k,Y,F,Q,Et,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){bt.bindFramebuffer(36160,zt);try{const Ut=C.texture,Bt=Ut.format,kt=Ut.type;if(Bt!==Cn&&H.convert(Bt)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=kt===Rr&&(Lt.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Lt.has("EXT_color_buffer_float"));if(kt!==Ji&&H.convert(kt)!==V.getParameter(35738)&&!(kt===Wi&&(ot.isWebGL2||Lt.has("OES_texture_float")||Lt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-F&&Y>=0&&Y<=C.height-Q&&V.readPixels(k,Y,F,Q,H.convert(Bt),H.convert(kt),Et)}finally{const Ut=b!==null?J.get(b).__webglFramebuffer:null;bt.bindFramebuffer(36160,Ut)}}},this.copyFramebufferToTexture=function(C,k,Y=0){const F=Math.pow(2,-Y),Q=Math.floor(k.image.width*F),Et=Math.floor(k.image.height*F);et.setTexture2D(k,0),V.copyTexSubImage2D(3553,Y,0,0,C.x,C.y,Q,Et),bt.unbindTexture()},this.copyTextureToTexture=function(C,k,Y,F=0){const Q=k.image.width,Et=k.image.height,Rt=H.convert(Y.format),zt=H.convert(Y.type);et.setTexture2D(Y,0),V.pixelStorei(37440,Y.flipY),V.pixelStorei(37441,Y.premultiplyAlpha),V.pixelStorei(3317,Y.unpackAlignment),k.isDataTexture?V.texSubImage2D(3553,F,C.x,C.y,Q,Et,Rt,zt,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(3553,F,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Rt,k.mipmaps[0].data):V.texSubImage2D(3553,F,C.x,C.y,Rt,zt,k.image),F===0&&Y.generateMipmaps&&V.generateMipmap(3553),bt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,Y,F,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=C.max.x-C.min.x+1,Rt=C.max.y-C.min.y+1,zt=C.max.z-C.min.z+1,Ut=H.convert(F.format),Bt=H.convert(F.type);let kt;if(F.isData3DTexture)et.setTexture3D(F,0),kt=32879;else if(F.isDataArrayTexture)et.setTexture2DArray(F,0),kt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,F.flipY),V.pixelStorei(37441,F.premultiplyAlpha),V.pixelStorei(3317,F.unpackAlignment);const Gt=V.getParameter(3314),Yt=V.getParameter(32878),ze=V.getParameter(3316),xn=V.getParameter(3315),Li=V.getParameter(32877),de=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;V.pixelStorei(3314,de.width),V.pixelStorei(32878,de.height),V.pixelStorei(3316,C.min.x),V.pixelStorei(3315,C.min.y),V.pixelStorei(32877,C.min.z),Y.isDataTexture||Y.isData3DTexture?V.texSubImage3D(kt,Q,k.x,k.y,k.z,Et,Rt,zt,Ut,Bt,de.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(kt,Q,k.x,k.y,k.z,Et,Rt,zt,Ut,de.data)):V.texSubImage3D(kt,Q,k.x,k.y,k.z,Et,Rt,zt,Ut,Bt,de),V.pixelStorei(3314,Gt),V.pixelStorei(32878,Yt),V.pixelStorei(3316,ze),V.pixelStorei(3315,xn),V.pixelStorei(32877,Li),Q===0&&F.generateMipmaps&&V.generateMipmap(kt),bt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?et.setTextureCube(C,0):C.isData3DTexture?et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?et.setTexture2DArray(C,0):et.setTexture2D(C,0),bt.unbindTexture()},this.resetState=function(){v=0,x=0,b=null,bt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class Ax extends Xl{}Ax.prototype.isWebGL1Renderer=!0;class xl extends oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Hs extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fh=new P,Bh=new P,kh=new se,Vo=new Za,_a=new lr;class Cx extends oe{constructor(t=new ue,e=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Fh.fromBufferAttribute(e,i-1),Bh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fh.distanceTo(Bh);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=s,t.ray.intersectsSphere(_a)===!1)return;kh.copy(i).invert(),Vo.copy(t.ray).applyMatrix4(kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,_=n.index,g=n.attributes.position;if(_!==null){const p=Math.max(0,r.start),y=Math.min(_.count,r.start+r.count);for(let v=p,x=y-1;v<x;v+=f){const b=_.getX(v),w=_.getX(v+1);if(l.fromBufferAttribute(g,b),h.fromBufferAttribute(g,w),Vo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let v=p,x=y-1;v<x;v+=f){if(l.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Vo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Vh=new P,Gh=new P;class zr extends Cx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Vh.fromBufferAttribute(e,i),Gh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vh.distanceTo(Gh);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class In extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hh=new se,vl=new Za,xa=new lr,va=new P;class bi extends oe{constructor(t=new ue,e=new In){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=s,t.ray.intersectsSphere(xa)===!1)return;Hh.copy(i).invert(),vl.copy(t.ray).applyMatrix4(Hh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let _=d,m=f;_<m;_++){const g=l.getX(_);va.fromBufferAttribute(u,g),Wh(va,g,c,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let _=d,m=f;_<m;_++)va.fromBufferAttribute(u,_),Wh(va,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wh(o,t,e,n,i,s,r){const a=vl.distanceSqToPoint(o);if(a<e){const c=new P;vl.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:r})}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),c=e||(r.isVector2?new lt:new P);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],r=[],a=new P,c=new se;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new P)}s[0]=new P,r[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Me(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,_))}r[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Me(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),r[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yl extends Bn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new lt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lx extends Yl{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Zl(){let o=0,t=0,e=0,n=0;function i(s,r,a,c){o=s,t=a,e=-3*s+3*r-2*a-c,n=2*s-2*r+a+c}return{initCatmullRom:function(s,r,a,c,l){i(r,a,l*(a-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,a,c,l,h,u){let d=(r-s)/l-(a-s)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,i(r,a,d,f)},calc:function(s){const r=s*s,a=r*s;return o+t*s+e*r+n*a}}}const ya=new P,Go=new Zl,Ho=new Zl,Wo=new Zl;class Px extends Bn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(ya.subVectors(i[0],i[1]).add(i[0]),l=ya);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ya.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ya),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),_<1e-4&&(_=m),g<1e-4&&(g=m),Go.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,m,g),Ho.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,m,g),Wo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,m,g)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ho.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Wo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Go.calc(c),Ho.calc(c),Wo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jh(o,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,a=o*o,c=o*a;return(2*e-2*n+s+r)*c+(-3*e+3*n-2*s-r)*a+s*o+e}function Rx(o,t){const e=1-o;return e*e*t}function Dx(o,t){return 2*(1-o)*o*t}function zx(o,t){return o*o*t}function Tr(o,t,e,n){return Rx(o,t)+Dx(o,e)+zx(o,n)}function Ix(o,t){const e=1-o;return e*e*e*t}function Ux(o,t){const e=1-o;return 3*e*e*o*t}function Ox(o,t){return 3*(1-o)*o*o*t}function Nx(o,t){return o*o*o*t}function Er(o,t,e,n,i){return Ix(o,t)+Ux(o,e)+Ox(o,n)+Nx(o,i)}class od extends Bn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Er(t,i.x,s.x,r.x,a.x),Er(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fx extends Bn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Er(t,i.x,s.x,r.x,a.x),Er(t,i.y,s.y,r.y,a.y),Er(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $l extends Bn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bx extends Bn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends Bn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Tr(t,i.x,s.x,r.x),Tr(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kx extends Bn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Tr(t,i.x,s.x,r.x),Tr(t,i.y,s.y,r.y),Tr(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cd extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(jh(a,c.x,l.x,h.x,u.x),jh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var hd=Object.freeze({__proto__:null,ArcCurve:Lx,CatmullRomCurve3:Px,CubicBezierCurve:od,CubicBezierCurve3:Fx,EllipseCurve:Yl,LineCurve:$l,LineCurve3:Bx,QuadraticBezierCurve:ld,QuadraticBezierCurve3:kx,SplineCurve:cd});class Vx extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new $l(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new hd[i.type]().fromJSON(i))}return this}}class yl extends Vx{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new $l(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new ld(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const a=new od(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,r,a,c),this}absellipse(t,e,n,i,s,r,a,c){const l=new Yl(t,e,n,i,s,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jl extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],r=[];a(i),l(n),h(),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(s.slice(),3)),this.setAttribute("uv",new ee(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new P,x=new P,b=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],x),f(e[w+2],b),c(v,x,b,y)}function c(y,v,x,b){const w=b+1,T=[];for(let A=0;A<=w;A++){T[A]=[];const M=y.clone().lerp(x,A/w),S=v.clone().lerp(x,A/w),U=w-A;for(let N=0;N<=U;N++)N===0&&A===w?T[A][N]=M:T[A][N]=M.clone().lerp(S,N/U)}for(let A=0;A<w;A++)for(let M=0;M<2*(w-A)-1;M++){const S=Math.floor(M/2);M%2===0?(d(T[A][S+1]),d(T[A+1][S]),d(T[A][S])):(d(T[A][S+1]),d(T[A+1][S+1]),d(T[A+1][S]))}}function l(y){const v=new P;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(y),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function h(){const y=new P;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const x=g(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;r.push(x,1-b)}_(),u()}function u(){for(let y=0;y<r.length;y+=6){const v=r[y+0],x=r[y+2],b=r[y+4],w=Math.max(v,x,b),T=Math.min(v,x,b);w>.9&&T<.1&&(v<.2&&(r[y+0]+=1),x<.2&&(r[y+2]+=1),b<.2&&(r[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,v){const x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function _(){const y=new P,v=new P,x=new P,b=new P,w=new lt,T=new lt,A=new lt;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),w.set(r[S+0],r[S+1]),T.set(r[S+2],r[S+3]),A.set(r[S+4],r[S+5]),b.copy(y).add(v).add(x).divideScalar(3);const U=g(b);m(w,S+0,y,U),m(T,S+2,v,U),m(A,S+4,x,U)}}function m(y,v,x,b){b<0&&y.x===1&&(r[v]=y.x-1),x.x===0&&x.z===0&&(r[v]=b/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.vertices,t.indices,t.radius,t.details)}}class Ua extends yl{constructor(t){super(t),this.uuid=or(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new yl().fromJSON(i))}return this}}const Gx={triangulate:function(o,t,e=2){const n=t&&t.length,i=n?t[0]*e:o.length;let s=ud(o,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,c,l,h,u,d,f;if(n&&(s=Xx(o,t,s,e)),o.length>80*e){a=l=o[0],c=h=o[1];for(let _=e;_<i;_+=e)u=o[_],d=o[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ir(s,r,e,a,c,f,0),r}};function ud(o,t,e,n,i){let s,r;if(i===sv(o,t,e,n)>0)for(s=t;s<e;s+=n)r=qh(s,o[s],o[s+1],r);else for(s=e-n;s>=t;s-=n)r=qh(s,o[s],o[s+1],r);return r&&Qa(r,r.next)&&(Or(r),r=r.next),r}function es(o,t){if(!o)return o;t||(t=o);let e=o,n;do if(n=!1,!e.steiner&&(Qa(e,e.next)||ne(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(o,t,e,n,i,s,r){if(!o)return;!r&&s&&Kx(o,n,i,s);let a=o,c,l;for(;o.prev!==o.next;){if(c=o.prev,l=o.next,s?Wx(o,n,i,s):Hx(o)){t.push(c.i/e|0),t.push(o.i/e|0),t.push(l.i/e|0),Or(o),o=l.next,a=l.next;continue}if(o=l,o===a){r?r===1?(o=jx(es(o),t,e),Ir(o,t,e,n,i,s,2)):r===2&&qx(o,t,e,n,i,s):Ir(es(o),t,e,n,i,s,1);break}}}function Hx(o){const t=o.prev,e=o,n=o.next;if(ne(t,e,n)>=0)return!1;const i=t.x,s=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<r?i:r:s<r?s:r,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>r?i:r:s>r?s:r,f=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&Ns(i,a,s,c,r,l,_.x,_.y)&&ne(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Wx(o,t,e,n){const i=o.prev,s=o,r=o.next;if(ne(i,s,r)>=0)return!1;const a=i.x,c=s.x,l=r.x,h=i.y,u=s.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,m=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=bl(f,_,t,e,n),y=bl(m,g,t,e,n);let v=o.prevZ,x=o.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=m&&v.y>=_&&v.y<=g&&v!==i&&v!==r&&Ns(a,h,c,u,l,d,v.x,v.y)&&ne(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=m&&x.y>=_&&x.y<=g&&x!==i&&x!==r&&Ns(a,h,c,u,l,d,x.x,x.y)&&ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=m&&v.y>=_&&v.y<=g&&v!==i&&v!==r&&Ns(a,h,c,u,l,d,v.x,v.y)&&ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=m&&x.y>=_&&x.y<=g&&x!==i&&x!==r&&Ns(a,h,c,u,l,d,x.x,x.y)&&ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jx(o,t,e){let n=o;do{const i=n.prev,s=n.next.next;!Qa(i,s)&&dd(i,n,n.next,s)&&Ur(i,s)&&Ur(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Or(n),Or(n.next),n=o=s),n=n.next}while(n!==o);return es(n)}function qx(o,t,e,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&ev(r,a)){let c=fd(r,a);r=es(r,r.next),c=es(c,c.next),Ir(r,t,e,n,i,s,0),Ir(c,t,e,n,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function Xx(o,t,e,n){const i=[];let s,r,a,c,l;for(s=0,r=t.length;s<r;s++)a=t[s]*n,c=s<r-1?t[s+1]*n:o.length,l=ud(o,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(tv(l));for(i.sort(Yx),s=0;s<i.length;s++)e=Zx(i[s],e);return e}function Yx(o,t){return o.x-t.x}function Zx(o,t){const e=$x(o,t);if(!e)return t;const n=fd(e,o);return es(n,n.next),es(e,e.next)}function $x(o,t){let e=t,n=-1/0,i;const s=o.x,r=o.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&Ns(r<l?s:n,r,c,l,r<l?n:s,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(s-e.x),Ur(e,o)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Jx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Jx(o,t){return ne(o.prev,o,t.prev)<0&&ne(t.next,o,o.next)<0}function Kx(o,t,e,n){let i=o;do i.z===0&&(i.z=bl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,Qx(i)}function Qx(o){let t,e,n,i,s,r,a,c,l=1;do{for(e=o,o=null,s=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(r>1);return o}function bl(o,t,e,n,i){return o=(o-e)*i|0,t=(t-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function tv(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function Ns(o,t,e,n,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(i-r)*(n-a)}function ev(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!nv(o,t)&&(Ur(o,t)&&Ur(t,o)&&iv(o,t)&&(ne(o.prev,o,t.prev)||ne(o,t.prev,t))||Qa(o,t)&&ne(o.prev,o,o.next)>0&&ne(t.prev,t,t.next)>0)}function ne(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function Qa(o,t){return o.x===t.x&&o.y===t.y}function dd(o,t,e,n){const i=Ma(ne(o,t,e)),s=Ma(ne(o,t,n)),r=Ma(ne(e,n,o)),a=Ma(ne(e,n,t));return!!(i!==s&&r!==a||i===0&&ba(o,e,t)||s===0&&ba(o,n,t)||r===0&&ba(e,o,n)||a===0&&ba(e,t,n))}function ba(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function Ma(o){return o>0?1:o<0?-1:0}function nv(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&dd(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function Ur(o,t){return ne(o.prev,o,o.next)<0?ne(o,t,o.next)>=0&&ne(o,o.prev,t)>=0:ne(o,t,o.prev)<0||ne(o,o.next,t)<0}function iv(o,t){let e=o,n=!1;const i=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==o);return n}function fd(o,t){const e=new Ml(o.i,o.x,o.y),n=new Ml(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function qh(o,t,e,n){const i=new Ml(o,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Or(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Ml(o,t,e){this.i=o,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sv(o,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class Ws{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ws.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Xh(t),Yh(n,t);let r=t.length;e.forEach(Xh);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Yh(n,e[c]);const a=Gx.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Xh(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Yh(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}class Kl extends ue{constructor(t=new Ua([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new ee(i,3)),this.setAttribute("uv",new ee(s,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:rv;let v,x=!1,b,w,T,A;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,b=p.computeFrenetFrames(h,!1),w=new P,T=new P,A=new P),d||(g=0,f=0,_=0,m=0);const M=a.extractPoints(l);let S=M.shape;const U=M.holes;if(!Ws.isClockWise(S)){S=S.reverse();for(let it=0,J=U.length;it<J;it++){const et=U[it];Ws.isClockWise(et)&&(U[it]=et.reverse())}}const D=Ws.triangulateShape(S,U),z=S;for(let it=0,J=U.length;it<J;it++){const et=U[it];S=S.concat(et)}function O(it,J,et){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(J,et)}const G=S.length,W=D.length;function B(it,J,et){let vt,ht,At;const Ct=it.x-J.x,wt=it.y-J.y,It=et.x-it.x,jt=et.y-it.y,L=Ct*Ct+wt*wt,E=Ct*jt-wt*It;if(Math.abs(E)>Number.EPSILON){const j=Math.sqrt(L),st=Math.sqrt(It*It+jt*jt),rt=J.x-wt/j,dt=J.y+Ct/j,R=et.x-jt/st,tt=et.y+It/st,H=((R-rt)*jt-(tt-dt)*It)/(Ct*jt-wt*It);vt=rt+Ct*H-it.x,ht=dt+wt*H-it.y;const ft=vt*vt+ht*ht;if(ft<=2)return new lt(vt,ht);At=Math.sqrt(ft/2)}else{let j=!1;Ct>Number.EPSILON?It>Number.EPSILON&&(j=!0):Ct<-Number.EPSILON?It<-Number.EPSILON&&(j=!0):Math.sign(wt)===Math.sign(jt)&&(j=!0),j?(vt=-wt,ht=Ct,At=Math.sqrt(L)):(vt=Ct,ht=wt,At=Math.sqrt(L/2))}return new lt(vt/At,ht/At)}const K=[];for(let it=0,J=z.length,et=J-1,vt=it+1;it<J;it++,et++,vt++)et===J&&(et=0),vt===J&&(vt=0),K[it]=B(z[it],z[et],z[vt]);const X=[];let pt,nt=K.concat();for(let it=0,J=U.length;it<J;it++){const et=U[it];pt=[];for(let vt=0,ht=et.length,At=ht-1,Ct=vt+1;vt<ht;vt++,At++,Ct++)At===ht&&(At=0),Ct===ht&&(Ct=0),pt[vt]=B(et[vt],et[At],et[Ct]);X.push(pt),nt=nt.concat(pt)}for(let it=0;it<g;it++){const J=it/g,et=f*Math.cos(J*Math.PI/2),vt=_*Math.sin(J*Math.PI/2)+m;for(let ht=0,At=z.length;ht<At;ht++){const Ct=O(z[ht],K[ht],vt);V(Ct.x,Ct.y,-et)}for(let ht=0,At=U.length;ht<At;ht++){const Ct=U[ht];pt=X[ht];for(let wt=0,It=Ct.length;wt<It;wt++){const jt=O(Ct[wt],pt[wt],vt);V(jt.x,jt.y,-et)}}}const q=_+m;for(let it=0;it<G;it++){const J=d?O(S[it],nt[it],q):S[it];x?(T.copy(b.normals[0]).multiplyScalar(J.x),w.copy(b.binormals[0]).multiplyScalar(J.y),A.copy(v[0]).add(T).add(w),V(A.x,A.y,A.z)):V(J.x,J.y,0)}for(let it=1;it<=h;it++)for(let J=0;J<G;J++){const et=d?O(S[J],nt[J],q):S[J];x?(T.copy(b.normals[it]).multiplyScalar(et.x),w.copy(b.binormals[it]).multiplyScalar(et.y),A.copy(v[it]).add(T).add(w),V(A.x,A.y,A.z)):V(et.x,et.y,u/h*it)}for(let it=g-1;it>=0;it--){const J=it/g,et=f*Math.cos(J*Math.PI/2),vt=_*Math.sin(J*Math.PI/2)+m;for(let ht=0,At=z.length;ht<At;ht++){const Ct=O(z[ht],K[ht],vt);V(Ct.x,Ct.y,u+et)}for(let ht=0,At=U.length;ht<At;ht++){const Ct=U[ht];pt=X[ht];for(let wt=0,It=Ct.length;wt<It;wt++){const jt=O(Ct[wt],pt[wt],vt);x?V(jt.x,jt.y+v[h-1].y,v[h-1].x+et):V(jt.x,jt.y,u+et)}}}$(),ct();function $(){const it=i.length/3;if(d){let J=0,et=G*J;for(let vt=0;vt<W;vt++){const ht=D[vt];Pt(ht[2]+et,ht[1]+et,ht[0]+et)}J=h+g*2,et=G*J;for(let vt=0;vt<W;vt++){const ht=D[vt];Pt(ht[0]+et,ht[1]+et,ht[2]+et)}}else{for(let J=0;J<W;J++){const et=D[J];Pt(et[2],et[1],et[0])}for(let J=0;J<W;J++){const et=D[J];Pt(et[0]+G*h,et[1]+G*h,et[2]+G*h)}}n.addGroup(it,i.length/3-it,0)}function ct(){const it=i.length/3;let J=0;mt(z,J),J+=z.length;for(let et=0,vt=U.length;et<vt;et++){const ht=U[et];mt(ht,J),J+=ht.length}n.addGroup(it,i.length/3-it,1)}function mt(it,J){let et=it.length;for(;--et>=0;){const vt=et;let ht=et-1;ht<0&&(ht=it.length-1);for(let At=0,Ct=h+g*2;At<Ct;At++){const wt=G*At,It=G*(At+1),jt=J+vt+wt,L=J+ht+wt,E=J+ht+It,j=J+vt+It;Lt(jt,L,E,j)}}}function V(it,J,et){c.push(it),c.push(J),c.push(et)}function Pt(it,J,et){ot(it),ot(J),ot(et);const vt=i.length/3,ht=y.generateTopUV(n,i,vt-3,vt-2,vt-1);bt(ht[0]),bt(ht[1]),bt(ht[2])}function Lt(it,J,et,vt){ot(it),ot(J),ot(vt),ot(J),ot(et),ot(vt);const ht=i.length/3,At=y.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);bt(At[0]),bt(At[1]),bt(At[3]),bt(At[1]),bt(At[2]),bt(At[3])}function ot(it){i.push(c[it*3+0]),i.push(c[it*3+1]),i.push(c[it*3+2])}function bt(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return av(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new hd[i.type]().fromJSON(i)),new Kl(n,t.options)}}const rv={generateTopUV:function(o,t,e,n,i){const s=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new lt(s,r),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(o,t,e,n,i,s){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],_=t[i*3+2],m=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new lt(r,1-c),new lt(l,1-u),new lt(d,1-_),new lt(m,1-p)]:[new lt(a,1-c),new lt(h,1-u),new lt(f,1-_),new lt(g,1-p)]}};function av(o,t,e){if(e.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ql extends Jl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ql(t.radius,t.detail)}}class to extends si{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pd extends Hs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Zh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class ov{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const lv=new ov;class tc{constructor(t){this.manager=t!==void 0?t:lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const qn={};class cv extends Error{constructor(t,e){super(t),this.response=e}}class md extends tc{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Zh.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:i});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=qn[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,_=f!==0;let m=0;const g=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{m+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:m,total:f});for(let w=0,T=h.length;w<T;w++){const A=h[w];A.onProgress&&A.onProgress(b)}p.enqueue(x),y()}})}}});return new Response(g)}else throw new cv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Zh.add(t,l);const h=qn[t];delete qn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=qn[t];if(h===void 0)throw this.manager.itemError(t),l;delete qn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class gd extends oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const jo=new se,$h=new P,Jh=new P;class hv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$h.setFromMatrixPosition(t.matrixWorld),e.position.copy($h),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uv extends hv{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $n extends gd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.shadow=new uv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dv extends gd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fv{constructor(t,e,n=0,i=1/0){this.ray=new Za(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Sl(t,this,n,e),n.sort(Kh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Sl(t[i],this,n,e);return n.sort(Kh),n}}function Kh(o,t){return o.distance-t.distance}function Sl(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)Sl(i[s],t,e,!0)}}class Qh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const tu=new P,Sa=new P;class pv{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){tu.subVectors(t,this.start),Sa.subVectors(this.end,this.start);const n=Sa.dot(Sa);let s=Sa.dot(tu)/n;return e&&(s=Me(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ti extends zr{constructor(t=10,e=10,n=4473924,i=8947848){n=new Vt(n),i=new Vt(i);const s=e/2,r=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,_=-a;d<=e;d++,_+=r){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const m=d===s?n:i;m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3}const h=new ue;h.setAttribute("position",new ee(c,3)),h.setAttribute("color",new ee(l,3));const u=new Hs({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class mv{constructor(){this.type="ShapePath",this.color=new Vt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new yl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,r){return this.currentPath.bezierCurveTo(t,e,n,i,s,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const y=[];for(let v=0,x=p.length;v<x;v++){const b=p[v],w=new Ua;w.curves=b.curves,y.push(w)}return y}function n(p,y){const v=y.length;let x=!1;for(let b=v-1,w=0;w<v;b=w++){let T=y[b],A=y[w],M=A.x-T.x,S=A.y-T.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(T=y[w],M=-M,A=y[b],S=-S),p.y<T.y||p.y>A.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const U=S*(p.x-T.x)-M*(p.y-T.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(p.y!==T.y)continue;if(A.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=A.x)return!0}}return x}const i=Ws.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,a,c;const l=[];if(s.length===1)return a=s[0],c=new Ua,c.curves=a.curves,l.push(c),l;let h=!i(s[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,m;d[_]=void 0,f[_]=[];for(let p=0,y=s.length;p<y;p++)a=s[p],m=a.getPoints(),r=i(m),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new Ua,p:m},d[_].s.curves=a.curves,h&&_++,f[_]=[]):f[_].push({h:a,p:m[0]});if(!d[0])return e(s);if(d.length>1){let p=!1,y=0;for(let v=0,x=d.length;v<x;v++)u[v]=[];for(let v=0,x=d.length;v<x;v++){const b=f[v];for(let w=0;w<b.length;w++){const T=b[w];let A=!0;for(let M=0;M<d.length;M++)n(T.p,d[M].p)&&(v!==M&&y++,A?(A=!1,u[M].push(T)):p=!0);A&&u[v].push(T)}}y>0&&p===!1&&(f=u)}let g;for(let p=0,y=d.length;p<y;p++){c=d[p].s,l.push(c),g=f[p];for(let v=0,x=g.length;v<x;v++)c.holes.push(g[v].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function _d(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[o&255]+Ce[o>>8&255]+Ce[o>>16&255]+Ce[o>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Kn(o,t,e){return Math.max(t,Math.min(e,o))}function wa(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ze(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class jr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],_=s[r+2],m=s[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=m;return}if(u!==m||c!==d||l!==f||h!==_){let g=1-a;const p=c*d+l*f+h*_+u*m,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,p*y);g=Math.sin(g*w)/b,a=Math.sin(a*w)/b}const x=a*y;if(c=c*g+d*x,l=l*g+f*x,h=h*g+_*x,u=u*g+m*x,g===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],_=s[r+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-s*c,this._y=i*h+r*c+s*a-n*l,this._z=s*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class gt{constructor(t=0,e=0,n=0){gt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=c*e+r*i-a*n,h=c*n+a*e-s*i,u=c*i+s*n-r*e,d=-s*e-r*n-a*i;return this.x=l*c+d*-s+h*-a-u*-r,this.y=h*c+d*-r+u*-s-l*-a,this.z=u*c+d*-a+l*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new gt,eu=new jr;class js{constructor(t=0,e=0){js.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qr{constructor(t=new gt(1/0,1/0,1/0),e=new gt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox),ws.applyMatrix4(t.matrixWorld),this.union(ws);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)Yn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Yn)}else i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Ta.subVectors(this.max,mr),Ts.subVectors(t.a,mr),Es.subVectors(t.b,mr),As.subVectors(t.c,mr),fi.subVectors(Es,Ts),pi.subVectors(As,Es),Ui.subVectors(Ts,As);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ui.z,Ui.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ui.z,0,-Ui.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ui.y,Ui.x,0];return!Xo(e,Ts,Es,As,Ta)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,Ts,Es,As,Ta))?!1:(Ea.crossVectors(fi,pi),e=[Ea.x,Ea.y,Ea.z],Xo(e,Ts,Es,As,Ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new gt,new gt,new gt,new gt,new gt,new gt,new gt,new gt],Yn=new gt,ws=new qr,Ts=new gt,Es=new gt,As=new gt,fi=new gt,pi=new gt,Ui=new gt,mr=new gt,Ta=new gt,Ea=new gt,Oi=new gt;function Xo(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Oi.fromArray(o,s);const a=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}class xd{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const nu=35044,pe=new gt,Aa=new js;class qs{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wa(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wa(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wa(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wa(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nu&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class gv extends qs{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _v extends qs{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ec extends qs{constructor(t,e,n){super(new Float32Array(t),e,n)}}const xv=new qr,gr=new gt,Yo=new gt;class vv{constructor(t=new gt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(Yo)),this.expandByPoint(gr.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}class On{constructor(){On.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,a,c,l,h,u,d,f,_,m,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new On().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Cs.setFromMatrixColumn(t,0).length(),s=1/Cs.setFromMatrixColumn(t,1).length(),r=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=r*h,f=r*u,_=a*h,m=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-m*l,e[9]=-a*c,e[2]=m-d*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,m=l*u;e[0]=d+m*a,e[4]=_*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=m+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,m=l*u;e[0]=d-m*a,e[4]=-r*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=m-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=a*h,m=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+m,e[1]=c*u,e[5]=m*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,_=a*c,m=a*l;e[0]=c*h,e[4]=m-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-m*u}else if(t.order==="XZY"){const d=r*c,f=r*l,_=a*c,m=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+m,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yv,t,bv)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),mi.crossVectors(n,$e),mi.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),mi.crossVectors(n,$e)),mi.normalize(),Ca.crossVectors($e,mi),i[0]=mi.x,i[4]=Ca.x,i[8]=$e.x,i[1]=mi.y,i[5]=Ca.y,i[9]=$e.y,i[2]=mi.z,i[6]=Ca.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],m=n[6],g=n[10],p=n[14],y=n[3],v=n[7],x=n[11],b=n[15],w=i[0],T=i[4],A=i[8],M=i[12],S=i[1],U=i[5],N=i[9],D=i[13],z=i[2],O=i[6],G=i[10],W=i[14],B=i[3],K=i[7],X=i[11],pt=i[15];return s[0]=r*w+a*S+c*z+l*B,s[4]=r*T+a*U+c*O+l*K,s[8]=r*A+a*N+c*G+l*X,s[12]=r*M+a*D+c*W+l*pt,s[1]=h*w+u*S+d*z+f*B,s[5]=h*T+u*U+d*O+f*K,s[9]=h*A+u*N+d*G+f*X,s[13]=h*M+u*D+d*W+f*pt,s[2]=_*w+m*S+g*z+p*B,s[6]=_*T+m*U+g*O+p*K,s[10]=_*A+m*N+g*G+p*X,s[14]=_*M+m*D+g*W+p*pt,s[3]=y*w+v*S+x*z+b*B,s[7]=y*T+v*U+x*O+b*K,s[11]=y*A+v*N+x*G+b*X,s[15]=y*M+v*D+x*W+b*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],m=t[7],g=t[11],p=t[15];return _*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+m*(+e*c*f-e*l*d+s*r*d-i*r*f+i*l*h-s*c*h)+g*(+e*l*u-e*a*f-s*r*u+n*r*f+s*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],m=t[13],g=t[14],p=t[15],y=u*g*l-m*d*l+m*c*f-a*g*f-u*c*p+a*d*p,v=_*d*l-h*g*l-_*c*f+r*g*f+h*c*p-r*d*p,x=h*m*l-_*u*l+_*a*f-r*m*f-h*a*p+r*u*p,b=_*u*c-h*m*c-_*a*d+r*m*d+h*a*g-r*u*g,w=e*y+n*v+i*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=y*T,t[1]=(m*d*s-u*g*s-m*i*f+n*g*f+u*i*p-n*d*p)*T,t[2]=(a*g*s-m*c*s+m*i*l-n*g*l-a*i*p+n*c*p)*T,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*T,t[4]=v*T,t[5]=(h*g*s-_*d*s+_*i*f-e*g*f-h*i*p+e*d*p)*T,t[6]=(_*c*s-r*g*s-_*i*l+e*g*l+r*i*p-e*c*p)*T,t[7]=(r*d*s-h*c*s+h*i*l-e*d*l-r*i*f+e*c*f)*T,t[8]=x*T,t[9]=(_*u*s-h*m*s-_*n*f+e*m*f+h*n*p-e*u*p)*T,t[10]=(r*m*s-_*a*s+_*n*l-e*m*l-r*n*p+e*a*p)*T,t[11]=(h*a*s-r*u*s-h*n*l+e*u*l+r*n*f-e*a*f)*T,t[12]=b*T,t[13]=(h*m*i-_*u*i+_*n*d-e*m*d-h*n*g+e*u*g)*T,t[14]=(_*a*i-r*m*i-_*n*c+e*m*c+r*n*g-e*a*g)*T,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,c=t.z,l=s*r,h=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,h=r+r,u=a+a,d=s*l,f=s*h,_=s*u,m=r*h,g=r*u,p=a*u,y=c*l,v=c*h,x=c*u,b=n.x,w=n.y,T=n.z;return i[0]=(1-(m+p))*b,i[1]=(f+x)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(_+v)*T,i[9]=(g-y)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Cs.set(i[0],i[1],i[2]).length();const r=Cs.set(i[4],i[5],i[6]).length(),a=Cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);const l=1/s,h=1/r,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r){const a=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,r){const a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(r-s),u=(e+t)*c,d=(n+i)*l,f=(r+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Cs=new gt,Mn=new On,yv=new gt(0,0,0),bv=new gt(1,1,1),mi=new gt,Ca=new gt,$e=new gt,iu=new On,su=new jr;class eo{constructor(t=0,e=0,n=0,i=eo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Kn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eo.DEFAULT_ORDER="XYZ";class Mv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}class Xr{constructor(){Xr.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],m=i[0],g=i[3],p=i[6],y=i[1],v=i[4],x=i[7],b=i[2],w=i[5],T=i[8];return s[0]=r*m+a*y+c*b,s[3]=r*g+a*v+c*w,s[6]=r*p+a*x+c*T,s[1]=l*m+h*y+u*b,s[4]=l*g+h*v+u*w,s[7]=l*p+h*x+u*T,s[2]=d*m+f*y+_*b,s[5]=d*g+f*v+_*w,s[8]=d*p+f*x+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*s*h+n*a*c+i*s*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*s,f=l*s-r*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(a*n-i*r)*m,t[3]=d*m,t[4]=(h*e-i*c)*m,t[5]=(i*s-a*e)*m,t[6]=f*m,t[7]=(n*c-l*e)*m,t[8]=(r*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zo.makeScale(t,e)),this}rotate(t){return this.premultiply(Zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zo.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new Xr;let Sv=0;const ru=new gt,Ls=new jr,Zn=new On,La=new gt,_r=new gt,wv=new gt,Tv=new jr,au=new gt(1,0,0),ou=new gt(0,1,0),lu=new gt(0,0,1),Ev={type:"added"},cu={type:"removed"};class Mi extends xd{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=_d(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mi.DEFAULT_UP.clone();const t=new gt,e=new eo,n=new jr,i=new gt(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new On},normalMatrix:{value:new Xr}}),this.matrix=new On,this.matrixWorld=new On,this.matrixAutoUpdate=Mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?La.copy(t):La.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(_r,La,this.up):Zn.lookAt(La,_r,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),Ls.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ev)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(cu)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,wv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Tv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Mi.DEFAULT_UP=new gt(0,1,0);Mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function Av(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}let Cv=0;const on=new On,$o=new Mi,Ps=new gt,Je=new qr,xr=new qr,be=new gt;class no extends xd{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=_d(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Av(t)?_v:gv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xr().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ec(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new gt(-1/0,-1/0,-1/0),new gt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vv);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new gt,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(Je.min,xr.min),Je.expandByPoint(be),be.addVectors(Je.max,xr.max),Je.expandByPoint(be)):(Je.expandByPoint(xr.min),Je.expandByPoint(xr.max))}Je.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(be));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(t,l),be.add(Ps)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qs(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new gt,h[S]=new gt;const u=new gt,d=new gt,f=new gt,_=new js,m=new js,g=new js,p=new gt,y=new gt;function v(S,U,N){u.fromArray(i,S*3),d.fromArray(i,U*3),f.fromArray(i,N*3),_.fromArray(r,S*2),m.fromArray(r,U*2),g.fromArray(r,N*2),d.sub(u),f.sub(u),m.sub(_),g.sub(_);const D=1/(m.x*g.y-g.x*m.y);!isFinite(D)||(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),y.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(D),l[S].add(p),l[U].add(p),l[N].add(p),h[S].add(y),h[U].add(y),h[N].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,U=x.length;S<U;++S){const N=x[S],D=N.start,z=N.count;for(let O=D,G=D+z;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new gt,w=new gt,T=new gt,A=new gt;function M(S){T.fromArray(s,S*3),A.copy(T);const U=l[S];b.copy(U),b.sub(T.multiplyScalar(T.dot(U))).normalize(),w.crossVectors(A,U);const D=w.dot(h[S])<0?-1:1;c[S*4]=b.x,c[S*4+1]=b.y,c[S*4+2]=b.z,c[S*4+3]=D}for(let S=0,U=x.length;S<U;++S){const N=x[S],D=N.start,z=N.count;for(let O=D,G=D+z;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qs(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new gt,s=new gt,r=new gt,a=new gt,c=new gt,l=new gt,h=new gt,u=new gt;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),m=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let m=0,g=c.length;m<g;m++){a.isInterleavedBufferAttribute?f=c[m]*a.data.stride+a.offset:f=c[m]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new qs(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new no,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jo extends no{constructor(t,e,n,i=1,s=1,r=1,a=1,c=1,l=1){super(),this.type="planeGeometry2",a=Math.floor(a),c=Math.floor(c),l=Math.floor(l);const h=[],u=[];let d=0;console.log("hola"),f(t,e,n,1,-1,r,s,-i,l,c),this.setIndex(h),this.setAttribute("position",new ec(u,3));function f(_,m,g,p,y,v,x,b,w,T,A){const M=v/w,S=x/T,U=v/2,N=x/2,D=b/2,z=w+1,O=T+1,G=new gt;for(let W=0;W<O;W++){const B=W*S-N;for(let K=0;K<z;K++){const X=K*M-U;G[_]=X*p,G[m]=B*y,G[g]=D,u.push(G.x,G.y,G.z)}}for(let W=0;W<T;W++)for(let B=0;B<w;B++){const K=d+B+z*W,X=d+B+z*(W+1),pt=d+(B+1)+z*(W+1),nt=d+(B+1)+z*W;h.push(K,X,nt),h.push(X,pt,nt)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class nc extends no{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry2",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[];let u=0,d=0;this.planes=[],f("z","y","x",1,-1,n,e,-t,r,s,1),f("x","z","y",1,-1,t,n,-e,i,r,3),f("x","y","z",1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ec(l,3));function f(_,m,g,p,y,v,x,b,w,T,A){const M=v/w,S=x/T,U=v/2,N=x/2,D=b/2,z=w+1,O=T+1;let G=0,W=0;const B=new gt;for(let K=0;K<O;K++){const X=K*S-N;for(let pt=0;pt<z;pt++){const nt=pt*M-U;B[_]=nt*p,B[m]=X*y,B[g]=D,l.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[g]=b>0?1:-1,h.push(B.x,B.y,B.z),G+=1}}for(let K=0;K<T;K++)for(let X=0;X<w;X++){const pt=u+X+z*K,nt=u+X+z*(K+1),q=u+(X+1)+z*(K+1),$=u+(X+1)+z*K;c.push(pt,nt,$),c.push(nt,q,$),W+=6}a.addGroup(d,W,A),d+=W,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function vd(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},tr={duration:.5,overwrite:!1,delay:0},ic,Re,me,pn=1e8,$t=1/pn,wl=Math.PI*2,Lv=wl/4,Pv=0,yd=Math.sqrt,Rv=Math.cos,Dv=Math.sin,Se=function(t){return typeof t=="string"},ae=function(t){return typeof t=="function"},ri=function(t){return typeof t=="number"},sc=function(t){return typeof t>"u"},Fn=function(t){return typeof t=="object"},ke=function(t){return t!==!1},rc=function(){return typeof window<"u"},Pa=function(t){return ae(t)||Se(t)},bd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},De=Array.isArray,Tl=/(?:-?\.?\d|\.)+/gi,Md=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ko=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sd=/[+-]=-?[.\d]+/,wd=/[^,'"\[\]\s]+/gi,zv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,te,hn,El,ac,sn={},ka={},Td,Ed=function(t){return(ka=ns(t,sn))&&He},oc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Va=function(t,e){return!e&&console.warn(t)},Ad=function(t,e){return t&&(sn[t]=e)&&ka&&(ka[t]=e)||sn},Nr=function(){return 0},Iv={suppressEvents:!0,isStart:!0,kill:!1},Oa={suppressEvents:!0,kill:!1},Uv={suppressEvents:!0},lc={},Si=[],Al={},Cd,Qe={},Qo={},hu=30,Na=[],cc="",hc=function(t){var e=t[0],n,i;if(Fn(e)||ae(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Na.length;i--&&!Na[i].targetTest(e););n=Na[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Kd(t[i],n)))||t.splice(i,1);return t},Yi=function(t){return t._gsap||hc(mn(t))[0]._gsap},Ld=function(t,e,n){return(n=t[e])&&ae(n)?t[e]():sc(n)&&t.getAttribute&&t.getAttribute(e)||n},Ve=function(t,e){return(t=t.split(",")).forEach(e)||t},he=function(t){return Math.round(t*1e5)/1e5||0},we=function(t){return Math.round(t*1e7)/1e7||0},Xs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ov=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ga=function(){var t=Si.length,e=Si.slice(0),n,i;for(Al={},Si.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pd=function(t,e,n,i){Si.length&&!Re&&Ga(),t.render(e,n,i||Re&&e<0&&(t._initted||t._startAt)),Si.length&&!Re&&Ga()},Rd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(wd).length<2?e:Se(t)?t.trim():t},Dd=function(t){return t},_n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Nv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ns=function(t,e){for(var n in e)t[n]=e[n];return t},uu=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Fn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},Ha=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ar=function(t){var e=t.parent||te,n=t.keyframes?Nv(De(t.keyframes)):_n;if(ke(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Fv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},zd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t[i],a;if(s)for(a=e[s];r&&r[s]>a;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=r,e.parent=e._dp=t,e},io=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,r=e._next;s?s._next=r:t[n]===e&&(t[n]=r),r?r._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ei=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Zi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Bv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Cl=function(t,e,n,i){return t._startAt&&(Re?t._startAt.revert(Oa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},kv=function o(t){return!t||t._ts&&o(t.parent)},du=function(t){return t._repeat?er(t._tTime,t=t.duration()+t._rDelay)*t:0},er=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Wa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},so=function(t){return t._end=we(t._start+(t._tDur/Math.abs(t._ts||t._rts||$t)||0))},ro=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=we(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),so(t),n._dirty||Zi(n,t)),t},Id=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Wa(t.rawTime(),e),(!e._dur||Yr(0,e.totalDuration(),n)-e._tTime>$t)&&e.render(n,!0)),Zi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-$t}},zn=function(t,e,n,i){return e.parent&&Ei(e),e._start=we((ri(n)?n:n||t!==te?cn(t,n,e):t._time)+e._delay),e._end=we(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),zd(t,e,"_first","_last",t._sort?"_start":0),Ll(e)||(t._recent=e),i||Id(t,e),t._ts<0&&ro(t,t._tTime),t},Ud=function(t,e){return(sn.ScrollTrigger||oc("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},Od=function(t,e,n,i,s){if(dc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Re&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Cd!==tn.frame)return Si.push(t),t._lazy=[s,i],1},Vv=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Ll=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gv=function(t,e,n,i){var s=t.ratio,r=e<0||!e&&(!t._start&&Vv(t)&&!(!t._initted&&Ll(t))||(t._ts<0||t._dp._ts<0)&&!Ll(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=Yr(0,t._tDur,e),h=er(c,a),t._yoyo&&h&1&&(r=1-r),h!==er(t._tTime,a)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||Re||i||t._zTime===$t||!e&&t._zTime){if(!t._initted&&Od(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?$t:0),n||(n=e&&!u),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=c,l=t._pt;l;)l.r(r,l.d),l=l._next;e<0&&Cl(t,e,n,!0),t._onUpdate&&!n&&gn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&Ei(t,1),!n&&!Re&&(gn(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Hv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},nr=function(t,e,n,i){var s=t._repeat,r=we(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:we(r*(s+1)+t._rDelay*s):r,a>0&&!i&&ro(t,t._tTime=t._tDur*a),t.parent&&so(t),n||Zi(t.parent,t),t},fu=function(t){return t instanceof Fe?Zi(t):nr(t,t._dur)},Wv={_start:0,endTime:Nr,totalDuration:Nr},cn=function o(t,e,n){var i=t.labels,s=t._recent||Wv,r=t.duration()>=pn?s.endTime(!1):t._dur,a,c,l;return Se(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=r),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(De(n)?n[0]:n).totalDuration()),a>1?o(t,e.substr(0,a-1),n)+c:r+c)):e==null?r:+e},Cr=function(t,e,n){var i=ri(e[1]),s=(i?2:1)+(t<2?0:1),r=e[s],a,c;if(i&&(r.duration=e[1]),r.parent=n,t){for(a=r,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=ke(c.vars.inherit)&&c.parent;r.immediateRender=ke(a.immediateRender),t<2?r.runBackwards=1:r.startAt=e[s-1]}return new ge(e[0],r,e[s+1])},Ci=function(t,e){return t||t===0?e(t):e},Yr=function(t,e,n){return n<t?t:n>e?e:n},Le=function(t,e){return!Se(t)||!(e=zv.exec(t))?"":e[1]},jv=function(t,e,n){return Ci(n,function(i){return Yr(t,e,i)})},Pl=[].slice,Nd=function(t,e){return t&&Fn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Fn(t[0]))&&!t.nodeType&&t!==hn},qv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||Nd(i,1)?(s=n).push.apply(s,mn(i)):n.push(i)})||n},mn=function(t,e,n){return me&&!e&&me.selector?me.selector(t):Se(t)&&!n&&(El||!ir())?Pl.call((e||ac).querySelectorAll(t),0):De(t)?qv(t,n):Nd(t)?Pl.call(t,0):t?[t]:[]},Rl=function(t){return t=mn(t)[0]||Va("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return mn(e,n.querySelectorAll?n:n===t?Va("Invalid scope")||ac.createElement("div"):t)}},Fd=function(t){return t.sort(function(){return .5-Math.random()})},Bd=function(t){if(ae(t))return t;var e=Fn(t)?t:{each:t},n=$i(e.ease),i=e.from||0,s=parseFloat(e.base)||0,r={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return Se(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,_){var m=(_||e).length,g=r[m],p,y,v,x,b,w,T,A,M;if(!g){if(M=e.grid==="auto"?0:(e.grid||[1,pn])[1],!M){for(T=-pn;T<(T=_[M++].getBoundingClientRect().left)&&M<m;);M--}for(g=r[m]=[],p=c?Math.min(M,m)*h-.5:i%M,y=M===pn?0:c?m*u/M-.5:i/M|0,T=0,A=pn,w=0;w<m;w++)v=w%M-p,x=y-(w/M|0),g[w]=b=l?Math.abs(l==="y"?x:v):yd(v*v+x*x),b>T&&(T=b),b<A&&(A=b);i==="random"&&Fd(g),g.max=T-A,g.min=A,g.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(M>m?m-1:l?l==="y"?m/M:M:Math.max(M,m/M))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Le(e.amount||e.each)||0,n=n&&m<0?Zd(n):n}return m=(g[d]-g.min)/g.max||0,we(g.b+(n?n(m):m)*g.v)+g.u}},Dl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=we(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ri(n)?0:Le(n))}},kd=function(t,e){var n=De(t),i,s;return!n&&Fn(t)&&(i=n=t.radius||pn,t.values?(t=mn(t.values),(s=!ri(t[0]))&&(i*=i)):t=Dl(t.increment)),Ci(e,n?ae(t)?function(r){return s=t(r),Math.abs(s-r)<=i?s:r}:function(r){for(var a=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=pn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:r,s||h===r||ri(r)?h:h+Le(r)}:Dl(t))},Vd=function(t,e,n,i){return Ci(De(t)?!e:n===!0?!!(n=0):!i,function(){return De(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Xv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,r){return r(s)},i)}},Yv=function(t,e){return function(n){return t(parseFloat(n))+(e||Le(n))}},Zv=function(t,e,n){return Hd(t,e,0,1,n)},Gd=function(t,e,n){return Ci(n,function(i){return t[~~e(i)]})},$v=function o(t,e,n){var i=e-t;return De(t)?Gd(t,o(0,t.length),e):Ci(n,function(s){return(i+(s-t)%i)%i+t})},Jv=function o(t,e,n){var i=e-t,s=i*2;return De(t)?Gd(t,o(0,t.length-1),e):Ci(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>i?s-r:r)})},Fr=function(t){for(var e=0,n="",i,s,r,a;~(i=t.indexOf("random(",e));)r=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,r-i-7).match(a?wd:Tl),n+=t.substr(e,i-e)+Vd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=r+1;return n+t.substr(e,t.length-e)},Hd=function(t,e,n,i,s){var r=e-t,a=i-n;return Ci(s,function(c){return n+((c-t)/r*a||0)})},Kv=function o(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var r=Se(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),r)t={p:t},e={p:e};else if(De(t)&&!De(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(o(t[l-1],t[l]));u--,s=function(_){_*=u;var m=Math.min(d,~~_);return h[m](_-m)},n=e}else i||(t=ns(De(t)?[]:{},t));if(!h){for(c in e)uc.call(a,t,c,"get",e[c]);s=function(_){return mc(_,a)||(r?t.p:t)}}}return Ci(n,s)},pu=function(t,e,n){var i=t.labels,s=pn,r,a,c;for(r in i)a=i[r]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=r,s=a);return c},gn=function(t,e,n){var i=t.vars,s=i[e],r=me,a=t._ctx,c,l,h;if(!!s)return c=i[e+"Params"],l=i.callbackScope||t,n&&Si.length&&Ga(),a&&(me=a),h=c?s.apply(l,c):s.call(l),me=r,h},Sr=function(t){return Ei(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Re),t.progress()<1&&gn(t,"onInterrupt"),t},Bs,Wd=[],jd=function(t){if(!rc()){Wd.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=ae(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Nr,render:mc,add:uc,kill:py,modifier:fy,rawVars:0},r={targetTest:0,get:0,getSetter:pc,aliases:{},register:0};if(ir(),t!==i){if(Qe[e])return;_n(i,_n(Ha(t,s),r)),ns(i.prototype,ns(s,Ha(t,r))),Qe[i.prop=e]=i,t.targetTest&&(Na.push(i),lc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ad(e,i),t.register&&t.register(He,i,Ge)},Zt=255,wr={aqua:[0,Zt,Zt],lime:[0,Zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Zt],navy:[0,0,128],white:[Zt,Zt,Zt],olive:[128,128,0],yellow:[Zt,Zt,0],orange:[Zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Zt,0,0],pink:[Zt,192,203],cyan:[0,Zt,Zt],transparent:[Zt,Zt,Zt,0]},tl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Zt+.5|0},qd=function(t,e,n){var i=t?ri(t)?[t>>16,t>>8&Zt,t&Zt]:0:wr.black,s,r,a,c,l,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wr[t])i=wr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),a=t.charAt(3),t="#"+s+s+r+r+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Zt,i&Zt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Zt,t&Zt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Tl),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,r=h<=.5?h*(l+1):h+l-h*l,s=h*2-r,i.length>3&&(i[3]*=1),i[0]=tl(c+1/3,s,r),i[1]=tl(c,s,r),i[2]=tl(c-1/3,s,r);else if(~t.indexOf("="))return i=t.match(Md),n&&i.length<4&&(i[3]=1),i}else i=t.match(Tl)||wr.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Zt,r=i[1]/Zt,a=i[2]/Zt,u=Math.max(s,r,a),d=Math.min(s,r,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===s?(r-a)/f+(r<a?6:0):u===r?(a-s)/f+2:(s-r)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Xd=function(t){var e=[],n=[],i=-1;return t.split(wi).forEach(function(s){var r=s.match(Fs)||[];e.push.apply(e,r),n.push(i+=r.length+1)}),e.c=n,e},mu=function(t,e,n){var i="",s=(t+i).match(wi),r=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!s)return t;if(s=s.map(function(d){return(d=qd(d,e,1))&&r+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Xd(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(wi,"1").split(Fs),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||r+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(wi),u=l.length-1;a<u;a++)i+=l[a]+s[a];return i+l[u]},wi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),Qv=/hsl[a]?\(/,Yd=function(t){var e=t.join(" "),n;if(wi.lastIndex=0,wi.test(e))return n=Qv.test(e),t[1]=mu(t[1],n),t[0]=mu(t[0],n,Xd(t[1])),!0},Br,tn=function(){var o=Date.now,t=500,e=33,n=o(),i=n,s=1e3/240,r=s,a=[],c,l,h,u,d,f,_=function m(g){var p=o()-i,y=g===!0,v,x,b,w;if(p>t&&(n+=p-e),i+=p,b=i-n,v=b-r,(v>0||y)&&(w=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,r+=v+(v>=s?4:s-v),x=1),y||(c=l(m)),x)for(f=0;f<a.length;f++)a[f](b,d,w,g)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Td&&(!El&&rc()&&(hn=El=window,ac=hn.document||{},sn.gsap=He,(hn.gsapVersions||(hn.gsapVersions=[])).push(He.version),Ed(ka||hn.GreenSockGlobals||!hn.gsap&&hn||{}),h=hn.requestAnimationFrame,Wd.forEach(jd)),c&&u.sleep(),l=h||function(g){return setTimeout(g,r-u.time*1e3+1|0)},Br=1,_(2))},sleep:function(){(h?hn.cancelAnimationFrame:clearTimeout)(c),Br=0,l=Nr},lagSmoothing:function(g,p){t=g||1/0,e=Math.min(p||33,t)},fps:function(g){s=1e3/(g||240),r=u.time*1e3+s},add:function(g,p,y){var v=p?function(x,b,w,T){g(x,b,w,T),u.remove(v)}:g;return u.remove(g),a[y?"unshift":"push"](v),ir(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),ir=function(){return!Br&&tn.wake()},Wt={},ty=/^[\d.\-M][\d.\-,\s]/,ey=/["']/g,ny=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,r=n.length,a,c,l;s<r;s++)c=n[s],a=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(ey,"").trim():+l,i=c.substr(a+1).trim();return e},iy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},sy=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ny(e[1])]:iy(t).split(",").map(Rd)):Wt._CE&&ty.test(t)?Wt._CE("",t):n},Zd=function(t){return function(e){return 1-t(1-e)}},$d=function o(t,e){for(var n=t._first,i;n;)n instanceof Fe?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},$i=function(t,e){return t&&(ae(t)?t:Wt[t]||sy(t))||e},rs=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},r;return Ve(t,function(a){Wt[a]=sn[a]=s,Wt[r=a.toLowerCase()]=n;for(var c in s)Wt[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Wt[a+"."+c]=s[c]}),s},Jd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},el=function o(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),r=s/wl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Dv((h-r)*s)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Jd(a);return s=wl/s,c.config=function(l,h){return o(t,l,h)},c},nl=function o(t,e){e===void 0&&(e=1.70158);var n=function(r){return r?--r*r*((e+1)*r+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Jd(n);return i.config=function(s){return o(t,s)},i};Ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;rs(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;rs("Elastic",el("in"),el("out"),el());(function(o,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?o*a*a:a<n?o*Math.pow(a-1.5/t,2)+.75:a<i?o*(a-=2.25/t)*a+.9375:o*Math.pow(a-2.625/t,2)+.984375};rs("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);rs("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});rs("Circ",function(o){return-(yd(1-o*o)-1)});rs("Sine",function(o){return o===1?1:-Rv(o*Lv)+1});rs("Back",nl("in"),nl("out"),nl());Wt.SteppedEase=Wt.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,r=1-$t;return function(a){return((i*Yr(0,r,a)|0)+s)*n}}};tr.ease=Wt["quad.out"];Ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return cc+=o+","+o+"Params,"});var Kd=function(t,e){this.id=Pv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ld,this.set=e?e.getSetter:pc},sr=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,nr(this,+e.duration,1,1),this.data=e.data,me&&(this._ctx=me,me.data.push(this)),Br||tn.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,nr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ir(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ro(this,n),!s._dp||s.parent||Id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+du(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+du(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?er(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-$t?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$t?0:this._rts,this.totalTime(Yr(-Math.abs(this._delay),this._tDur,i),!0),so(this),Bv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ir(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ke(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Uv);var i=Re;return Re=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Re=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),ke(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ke(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$t:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$t,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$t)},t.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},t.then=function(n){var i=this;return new Promise(function(s){var r=ae(n)?n:Dd,a=function(){var l=i.then;i.then=null,ae(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=l),s(r),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Sr(this)},o}();_n(sr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$t,_prom:0,_ps:!1,_rts:1});var Fe=function(o){vd(t,o);function t(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ke(n.sortChildren),te&&zn(n.parent||te,Jn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ud(Jn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,r){return Cr(0,arguments,this),this},e.from=function(i,s,r){return Cr(1,arguments,this),this},e.fromTo=function(i,s,r,a){return Cr(2,arguments,this),this},e.set=function(i,s,r){return s.duration=0,s.parent=this,Ar(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ge(i,s,cn(this,r),1),this},e.call=function(i,s,r){return zn(this,ge.delayedCall(0,i,s),r)},e.staggerTo=function(i,s,r,a,c,l,h){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=l,r.onCompleteParams=h,r.parent=this,new ge(i,r,cn(this,c)),this},e.staggerFrom=function(i,s,r,a,c,l,h){return r.runBackwards=1,Ar(r).immediateRender=ke(r.immediateRender),this.staggerTo(i,s,r,a,c,l,h)},e.staggerFromTo=function(i,s,r,a,c,l,h,u){return a.startAt=r,Ar(a).immediateRender=ke(a.immediateRender),this.staggerTo(i,s,a,c,l,h,u)},e.render=function(i,s,r){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:we(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,m,g,p,y,v,x,b,w,T;if(this!==te&&h>c&&i>=0&&(h=c),h!==this._tTime||r||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,v=this._ts,p=!v,u&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,r);if(d=we(h%g),h===c?(m=this._repeat,d=l):(m=~~(h/g),m&&m===h/g&&(d=l,m--),d>l&&(d=l)),b=er(this._tTime,g),!a&&this._tTime&&b!==m&&this._tTime-b*g-this._dur<=0&&(b=m),w&&m&1&&(d=l-d,T=1),m!==b&&!this._lock){var A=w&&b&1,M=A===(w&&m&1);if(m<b&&(A=!A),a=A?0:l,this._lock=1,this.render(a||(T?0:we(m*g)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&gn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,a=A?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;$d(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Hv(this,we(a),we(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!m&&(gn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,r),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-$t);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,r||Re&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=S?-$t:$t);break}}f=_}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-$t)._zTime=d>=a?1:-1,this._ts))return this._start=x,so(this),this.render(i,s,r);this._onUpdate&&!s&&gn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Ei(this,1),!s&&!(i<0&&!a)&&(h||a||!c)&&(gn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var r=this;if(ri(s)||(s=cn(this,s,i)),!(i instanceof sr)){if(De(i))return i.forEach(function(a){return r.add(a,s)}),this;if(Se(i))return this.addLabel(i,s);if(ae(i))i=ge.delayedCall(0,i);else return this}return this!==i?zn(this,i,s):this},e.getChildren=function(i,s,r,a){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-pn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof ge?s&&c.push(l):(r&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},e.remove=function(i){return Se(i)?this.removeLabel(i):ae(i)?this.killTweensOf(i):(io(this,i),i===this._recent&&(this._recent=this._last),Zi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=we(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,r){var a=ge.delayedCall(0,s||Nr,r);return a.data="isPause",this._hasPause=1,zn(this,a,cn(this,i))},e.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&Ei(s),s=s._next},e.killTweensOf=function(i,s,r){for(var a=this.getTweensOf(i,r),c=a.length;c--;)_i!==a[c]&&a[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var r=[],a=mn(i),c=this._first,l=ri(s),h;c;)c instanceof ge?Ov(c._targets,a)&&(l?(!_i||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(h=c.getTweensOf(a,s)).length&&r.push.apply(r,h),c=c._next;return r},e.tweenTo=function(i,s){s=s||{};var r=this,a=cn(r,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,_=ge.to(r,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale())||$t,onStart:function(){if(r.pause(),!f){var g=s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale());_._dur!==g&&nr(_,g,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,r){return this.tweenTo(s,_n({startAt:{time:cn(this,i)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),pu(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),pu(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$t)},e.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var a=this._first,c=this.labels,l;a;)a._start>=r&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=r&&(c[l]+=i);return Zi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zi(this)},e.totalDuration=function(i){var s=0,r=this,a=r._last,c=pn,l,h,u;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(u=r.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&r._sort&&a._ts&&!r._lock?(r._lock=1,zn(r,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(s-=h,(!u&&!r._dp||u&&u.smoothChildTiming)&&(r._start+=h/r._ts,r._time-=h,r._tTime-=h),r.shiftChildren(-h,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;nr(r,r===te&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(i){if(te._ts&&(Pd(te,Wa(i,te)),Cd=tn.frame),tn.frame>=hu){hu+=nn.autoSleep||120;var s=te._first;if((!s||!s._ts)&&nn.autoSleep&&tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||tn.sleep()}}},t}(sr);_n(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var ry=function(t,e,n,i,s,r,a){var c=new Ge(this._pt,t,e,0,1,rf,null,s),l=0,h=0,u,d,f,_,m,g,p,y;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Fr(i)),r&&(y=[n,i],r(y,t,e),n=y[0],i=y[1]),d=n.match(Ko)||[];u=Ko.exec(i);)_=u[0],m=i.substring(l,u.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(g=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:m||h===1?m:",",s:g,c:_.charAt(1)==="="?Xs(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},l=Ko.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Sd.test(i)||p)&&(c.e=0),this._pt=c,c},uc=function(t,e,n,i,s,r,a,c,l,h){ae(i)&&(i=i(s||0,t,r));var u=t[e],d=n!=="get"?n:ae(u)?l?t[e.indexOf("set")||!ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=ae(u)?l?hy:nf:fc,_;if(Se(i)&&(~i.indexOf("random(")&&(i=Fr(i)),i.charAt(1)==="="&&(_=Xs(d,i)+(Le(d)||0),(_||_===0)&&(i=_))),!h||d!==i||zl)return!isNaN(d*i)&&i!==""?(_=new Ge(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?dy:sf,0,f),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&oc(e,i),ry.call(this,t,e,d,i,f,c||nn.stringFilter,l))},ay=function(t,e,n,i,s){if(ae(t)&&(t=Lr(t,s,e,n,i)),!Fn(t)||t.style&&t.nodeType||De(t)||bd(t))return Se(t)?Lr(t,s,e,n,i):t;var r={},a;for(a in t)r[a]=Lr(t[a],s,e,n,i);return r},Qd=function(t,e,n,i,s,r){var a,c,l,h;if(Qe[t]&&(a=new Qe[t]).init(s,a.rawVars?e[t]:ay(e[t],i,s,r,n),n,i,r)!==!1&&(n._pt=c=new Ge(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Bs))for(l=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)l[a._props[h]]=c;return a},_i,zl,dc=function o(t,e,n){var i=t.vars,s=i.ease,r=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,d=i.runBackwards,f=i.yoyoEase,_=i.keyframes,m=i.autoRevert,g=t._dur,p=t._startAt,y=t._targets,v=t.parent,x=v&&v.data==="nested"?v.vars.targets:y,b=t._overwrite==="auto"&&!ic,w=t.timeline,T,A,M,S,U,N,D,z,O,G,W,B,K;if(w&&(!_||!s)&&(s="none"),t._ease=$i(s,tr.ease),t._yEase=f?Zd($i(f===!0?s:f,tr.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!w&&!!i.runBackwards,!w||_&&!i.stagger){if(z=y[0]?Yi(y[0]).harness:0,B=z&&i[z.prop],T=Ha(i,lc),p&&(p._zTime<0&&p.progress(1),e<0&&d&&a&&!m?p.render(-1,!0):p.revert(d&&g?Oa:Iv),p._lazy=0),r){if(Ei(t._startAt=ge.set(y,_n({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&ke(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:h,callbackScope:u,stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re||!a&&!m)&&t._startAt.revert(Oa),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&g&&!p){if(e&&(a=!1),M=_n({overwrite:!1,data:"isFromStart",lazy:a&&!p&&ke(c),immediateRender:a,stagger:0,parent:v},T),B&&(M[z.prop]=B),Ei(t._startAt=ge.set(y,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re?t._startAt.revert(Oa):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,$t,$t);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&ke(c)||c&&!g,A=0;A<y.length;A++){if(U=y[A],D=U._gsap||hc(y)[A]._gsap,t._ptLookup[A]=G={},Al[D.id]&&Si.length&&Ga(),W=x===y?A:x.indexOf(U),z&&(O=new z).init(U,B||T,t,W,x)!==!1&&(t._pt=S=new Ge(t._pt,U,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(X){G[X]=S}),O.priority&&(N=1)),!z||B)for(M in T)Qe[M]&&(O=Qd(M,T,t,W,U,x))?O.priority&&(N=1):G[M]=S=uc.call(t,U,M,"get",T[M],W,x,0,i.stringFilter);t._op&&t._op[A]&&t.kill(U,t._op[A]),b&&t._pt&&(_i=t,te.killTweensOf(U,G,t.globalTime(e)),K=!t.parent,_i=0),t._pt&&c&&(Al[D.id]=1)}N&&af(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!K,_&&e<=0&&w.render(pn,!0,!0)},oy=function(t,e,n,i,s,r,a){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(l=u[d][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return zl=1,t.vars[e]="+=0",dc(t,a),zl=0,1;c.push(l)}for(d=c.length;d--;)h=c[d],l=h._pt||h,l.s=(i||i===0)&&!s?i:l.s+(i||0)+r*l.c,l.c=n-l.s,h.e&&(h.e=he(n)+Le(h.e)),h.b&&(h.b=l.s+Le(h.b))},ly=function(t,e){var n=t[0]?Yi(t[0]).harness:0,i=n&&n.aliases,s,r,a,c;if(!i)return e;s=ns({},e);for(r in i)if(r in s)for(c=i[r].split(","),a=c.length;a--;)s[c[a]]=s[r];return s},cy=function(t,e,n,i){var s=e.ease||i||"power1.inOut",r,a;if(De(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:s})});else for(r in e)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(t),v:e[r],e:s})},Lr=function(t,e,n,i,s){return ae(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?Fr(t):t},tf=cc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ef={};Ve(tf+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return ef[o]=1});var ge=function(o){vd(t,o);function t(n,i,s,r){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=o.call(this,r?i:Ar(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,m=c.defaults,g=c.scrollTrigger,p=c.yoyoEase,y=i.parent||te,v=(De(n)||bd(n)?ri(n[0]):"length"in i)?[n]:mn(n),x,b,w,T,A,M,S,U;if(a._targets=v.length?hc(v):Va("GSAP target "+n+" not found. https://greensock.com",!nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Pa(l)||Pa(h)){if(i=a.vars,x=a.timeline=new Fe({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=Jn(a),x._start=0,d||Pa(l)||Pa(h)){if(T=v.length,S=d&&Bd(d),Fn(d))for(A in d)~tf.indexOf(A)&&(U||(U={}),U[A]=d[A]);for(b=0;b<T;b++)w=Ha(i,ef),w.stagger=0,p&&(w.yoyoEase=p),U&&ns(w,U),M=v[b],w.duration=+Lr(l,Jn(a),b,M,v),w.delay=(+Lr(h,Jn(a),b,M,v)||0)-a._delay,!d&&T===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),x.to(M,w,S?S(b,M,v):0),x._ease=Wt.none;x.duration()?l=h=0:a.timeline=0}else if(_){Ar(_n(x.vars.defaults,{ease:"none"})),x._ease=$i(_.ease||i.ease||"none");var N=0,D,z,O;if(De(_))_.forEach(function(G){return x.to(v,G,">")}),x.duration();else{w={};for(A in _)A==="ease"||A==="easeEach"||cy(A,_[A],w,_.easeEach);for(A in w)for(D=w[A].sort(function(G,W){return G.t-W.t}),N=0,b=0;b<D.length;b++)z=D[b],O={ease:z.e,duration:(z.t-(b?D[b-1].t:0))/100*l},O[A]=z.v,x.to(v,O,N),N+=O.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!ic&&(_i=Jn(a),te.killTweensOf(v),_i=0),zn(y,Jn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===we(y._time)&&ke(u)&&kv(Jn(a))&&y.data!=="nested")&&(a._tTime=-$t,a.render(Math.max(0,-h)||0)),g&&Ud(Jn(a),g),a}var e=t.prototype;return e.render=function(i,s,r){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-$t&&!h?c:i<$t?0:i,d,f,_,m,g,p,y,v,x;if(!l)Gv(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,v=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(m*100+i,s,r);if(d=we(u%m),u===c?(_=this._repeat,d=l):(_=~~(u/m),_&&_===u/m&&(d=l,_--),d>l&&(d=l)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=l-d),g=er(this._tTime,m),d===a&&!r&&this._initted)return this._tTime=u,this;_!==g&&(v&&this._yEase&&$d(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=r=1,this.render(we(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Od(this,h?i:d,r,s,u))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(d/l),this._from&&(this.ratio=y=1-y),d&&!a&&!s&&!_&&(gn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(i<0?i:!d&&p?-$t:v._dur*v._ease(d/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Cl(this,i,s,r),gn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&gn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Cl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ei(this,1),!s&&!(h&&!a)&&(u||a||p)&&(gn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,r,a){Br||tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||dc(this,c),l=this._ease(c/this._dur),oy(this,i,s,r,a,l,c)?this.resetTo(i,s,r,a):(ro(this,0),this.parent||zd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Sr(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,_i&&_i.vars.overwrite!==!0)._first||Sr(this),this.parent&&r!==this.timeline.totalDuration()&&nr(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,c=i?mn(i):a,l=this._ptLookup,h=this._pt,u,d,f,_,m,g,p;if((!s||s==="all")&&Fv(a,c))return s==="all"&&(this._pt=0),Sr(this);for(u=this._op=this._op||[],s!=="all"&&(Se(s)&&(m={},Ve(s,function(y){return m[y]=1}),s=m),s=ly(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(m in _)g=d&&d[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&io(this,g,"_pt"),delete d[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&h&&Sr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Cr(1,arguments)},t.delayedCall=function(i,s,r,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},t.fromTo=function(i,s,r){return Cr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,r){return te.killTweensOf(i,s,r)},t}(sr);_n(ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ve("staggerTo,staggerFrom,staggerFromTo",function(o){ge[o]=function(){var t=new Fe,e=Pl.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var fc=function(t,e,n){return t[e]=n},nf=function(t,e,n){return t[e](n)},hy=function(t,e,n,i){return t[e](i.fp,n)},uy=function(t,e,n){return t.setAttribute(e,n)},pc=function(t,e){return ae(t[e])?nf:sc(t[e])&&t.setAttribute?uy:fc},sf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},dy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},rf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},mc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},fy=function(t,e,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(t,e,n),s=r},py=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?io(this,e,"_pt"):e.dep||(n=1),e=i;return!n},my=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},af=function(t){for(var e=t._pt,n,i,s,r;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:r)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:r=e,e=n}t._pt=s},Ge=function(){function o(e,n,i,s,r,a,c,l,h){this.t=n,this.s=s,this.c=r,this.p=i,this.r=a||sf,this.d=c||this,this.set=l||fc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=my,this.m=n,this.mt=s,this.tween=i},o}();Ve(cc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return lc[o]=1});sn.TweenMax=sn.TweenLite=ge;sn.TimelineLite=sn.TimelineMax=Fe;te=new Fe({sortChildren:!1,defaults:tr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=Yd;var rr=[],Fa={},gy=[],gu=0,il=function(t){return(Fa[t]||gy).map(function(e){return e()})},Il=function(){var t=Date.now(),e=[];t-gu>2&&(il("matchMediaInit"),rr.forEach(function(n){var i=n.queries,s=n.conditions,r,a,c,l;for(a in i)r=hn.matchMedia(i[a]).matches,r&&(c=1),r!==s[a]&&(s[a]=r,l=1);l&&(n.revert(),c&&e.push(n))}),il("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),gu=t,il("matchMedia"))},of=function(){function o(e,n){this.selector=n&&Rl(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,s){ae(n)&&(s=i,i=n,n=ae);var r=this,a=function(){var l=me,h=r.selector,u;return l&&l!==r&&l.data.push(r),s&&(r.selector=Rl(s)),me=r,u=i.apply(r,arguments),ae(u)&&r._r.push(u),me=l,r.selector=h,r.isReverted=!1,u};return r.last=a,n===ae?a(r):n?r[n]=a:a},t.ignore=function(n){var i=me;me=null,n(this),me=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return r.splice(r.indexOf(l),1)}))}),r.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof sr)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var a=rr.indexOf(this);~a&&rr.splice(a,1)}},t.revert=function(n){this.kill(n||{})},o}(),_y=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,s){Fn(n)||(n={matches:n});var r=new of(0,s||this.scope),a=r.conditions={},c,l,h;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(l in n)l==="all"?h=1:(c=hn.matchMedia(n[l]),c&&(rr.indexOf(r)<0&&rr.push(r),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(Il):c.addEventListener("change",Il)));return h&&i(r),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ja={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return jd(i)})},timeline:function(t){return new Fe(t)},getTweensOf:function(t,e){return te.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=mn(t)[0]);var s=Yi(t||{}).get,r=n?Dd:Rd;return n==="native"&&(n=""),t&&(e?r((Qe[e]&&Qe[e].get||s)(t,e,n,i)):function(a,c,l){return r((Qe[a]&&Qe[a].get||s)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=mn(t),t.length>1){var i=t.map(function(h){return He.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var r=Qe[e],a=Yi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=r?function(h){var u=new r;Bs._pt=0,u.init(t,n?h+n:h,Bs,0,[t]),u.render(1,u),Bs._pt&&mc(1,Bs)}:a.set(t,c);return r?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=He.to(t,ns((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),r=function(c,l,h){return s.resetTo(e,c,l,h)};return r.tween=s,r},isTweening:function(t){return te.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=$i(t.ease,tr.ease)),uu(tr,t||{})},config:function(t){return uu(nn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,r=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qe[a]&&!sn[a]&&Va(e+" effect requires "+a+" plugin.")}),Qo[e]=function(a,c,l){return n(mn(a),_n(c||{},s),l)},r&&(Fe.prototype[e]=function(a,c,l){return this.add(Qo[e](a,Fn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Wt[t]=$i(e)},parseEase:function(t,e){return arguments.length?$i(t,e):Wt},getById:function(t){return te.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Fe(t),i,s;for(n.smoothChildTiming=ke(t.smoothChildTiming),te.remove(n),n._dp=0,n._time=n._tTime=te._time,i=te._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ge&&i.vars.onComplete===i._targets[0]))&&zn(n,i,i._start-i._delay),i=s;return zn(te,n,0),n},context:function(t,e){return t?new of(t,e):me},matchMedia:function(t){return new _y(t)},matchMediaRefresh:function(){return rr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Il()},addEventListener:function(t,e){var n=Fa[t]||(Fa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Fa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:$v,wrapYoyo:Jv,distribute:Bd,random:Vd,snap:kd,normalize:Zv,getUnit:Le,clamp:jv,splitColor:qd,toArray:mn,selector:Rl,mapRange:Hd,pipe:Xv,unitize:Yv,interpolate:Kv,shuffle:Fd},install:Ed,effects:Qo,ticker:tn,updateRoot:Fe.updateRoot,plugins:Qe,globalTimeline:te,core:{PropTween:Ge,globals:Ad,Tween:ge,Timeline:Fe,Animation:sr,getCache:Yi,_removeLinkedListItem:io,reverting:function(){return Re},context:function(t){return t&&me&&(me.data.push(t),t._ctx=me),me},suppressOverwrites:function(t){return ic=t}}};Ve("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ja[o]=ge[o]});tn.add(Fe.updateRoot);Bs=ja.to({},{duration:0});var xy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},vy=function(t,e){var n=t._targets,i,s,r;for(i in e)for(s=n.length;s--;)r=t._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=xy(r,i)),r&&r.modifier&&r.modifier(e[i],t,n[s],i))},sl=function(t,e){return{name:t,rawVars:1,init:function(i,s,r){r._onInit=function(a){var c,l;if(Se(s)&&(c={},Ve(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}vy(a,s)}}}},He=ja.registerPlugin({name:"attr",init:function(t,e,n,i,s){var r,a,c;this.tween=n;for(r in e)c=t.getAttribute(r)||"",a=this.add(t,"setAttribute",(c||0)+"",e[r],i,s,0,0,r),a.op=r,a.b=c,this._props.push(r)},render:function(t,e){for(var n=e._pt;n;)Re?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},sl("roundProps",Dl),sl("modifiers"),sl("snap",kd))||ja;ge.version=Fe.version=He.version="3.11.5";Td=1;rc()&&ir();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _u,xi,Ys,gc,qi,xu,_c,yy=function(){return typeof window<"u"},ai={},Vi=180/Math.PI,Zs=Math.PI/180,Rs=Math.atan2,vu=1e8,xc=/([A-Z])/g,by=/(left|right|width|margin|padding|x)/i,My=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ul=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Sy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ty=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},lf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ey=function(t,e,n){return t.style[e]=n},Ay=function(t,e,n){return t.style.setProperty(e,n)},Cy=function(t,e,n){return t._gsap[e]=n},Ly=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Py=function(t,e,n,i,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},Ry=function(t,e,n,i,s){var r=t._gsap;r[e]=n,r.renderTransform(s,r)},ie="transform",Ln=ie+"Origin",Dy=function o(t,e){var n=this,i=this.target,s=i.style;if(t in ai){if(this.tfm=this.tfm||{},t!=="transform")t=Un[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return n.tfm[r]=Qn(i,r)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Qn(i,t);else return Un.transform.split(",").forEach(function(r){return o.call(n,r,e)});if(this.props.indexOf(ie)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=ie}(s||e)&&this.props.push(t,e,s[t])},hf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,r;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(xc,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=_c(),(!s||!s.isStart)&&!n[ie]&&(hf(n),i.uncache=1)}},uf=function(t,e){var n={target:t,props:[],revert:zy,save:Dy};return t._gsap||He.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},df,Ol=function(t,e){var n=xi.createElementNS?xi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xi.createElement(t);return n.style?n:xi.createElement(t)},Nn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(xc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,ar(e)||e,1)||""},yu="O,Moz,ms,Ms,Webkit".split(","),ar=function(t,e,n){var i=e||qi,s=i.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(yu[r]+t in s););return r<0?null:(r===3?"ms":r>=0?yu[r]:"")+t},Nl=function(){yy()&&window.document&&(_u=window,xi=_u.document,Ys=xi.documentElement,qi=Ol("div")||{style:{}},Ol("div"),ie=ar(ie),Ln=ie+"Origin",qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",df=!!ar("perspective"),_c=He.core.reverting,gc=1)},rl=function o(t){var e=Ol("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Ys.appendChild(e),e.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ys.removeChild(e),this.style.cssText=s,r},bu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ff=function(t){var e;try{e=t.getBBox()}catch{e=rl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===rl||(e=rl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+bu(t,["x","cx","x1"])||0,y:+bu(t,["y","cy","y1"])||0,width:0,height:0}:e},pf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ff(t))},kr=function(t,e){if(e){var n=t.style;e in ai&&e!==Ln&&(e=ie),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(xc,"-$1").toLowerCase())):n.removeAttribute(e)}},vi=function(t,e,n,i,s,r){var a=new Ge(t._pt,e,n,0,1,r?cf:lf);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Mu={deg:1,rad:1,turn:1},Iy={grid:1,flex:1},Ai=function o(t,e,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=qi.style,c=by.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,m,g,p;return i===r||!s||Mu[i]||Mu[r]?s:(r!=="px"&&!d&&(s=o(t,e,n,"px")),p=t.getCTM&&pf(t),(f||r==="%")&&(ai[e]||~e.indexOf("adius"))?(_=p?t.getBBox()[c?"width":"height"]:t[h],he(f?s/_*u:s/100*_)):(a[c?"width":"height"]=u+(d?r:i),m=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===xi||!m.appendChild)&&(m=xi.body),g=m._gsap,g&&f&&g.width&&c&&g.time===tn.time&&!g.uncache?he(s/g.width*u):((f||r==="%")&&!Iy[Nn(m,"display")]&&(a.position=Nn(t,"position")),m===t&&(a.position="static"),m.appendChild(qi),_=qi[h],m.removeChild(qi),a.position="absolute",c&&f&&(g=Yi(m),g.time=tn.time,g.width=m[h]),he(d?_*s/u:_&&s?u/_*s:0))))},Qn=function(t,e,n,i){var s;return gc||Nl(),e in Un&&e!=="transform"&&(e=Un[e],~e.indexOf(",")&&(e=e.split(",")[0])),ai[e]&&e!=="transform"?(s=Gr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Xa(Nn(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=qa[e]&&qa[e](t,e,n)||Nn(t,e)||Ld(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ai(t,e,s,n)+n:s},Uy=function(t,e,n,i){if(!n||n==="none"){var s=ar(e,t,1),r=s&&Nn(t,s,1);r&&r!==n?(e=s,n=r):e==="borderColor"&&(n=Nn(t,"borderTopColor"))}var a=new Ge(this._pt,t.style,e,0,1,rf),c=0,l=0,h,u,d,f,_,m,g,p,y,v,x,b;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Nn(t,e)||i,t.style[e]=n),h=[n,i],Yd(h),n=h[0],i=h[1],d=n.match(Fs)||[],b=i.match(Fs)||[],b.length){for(;u=Fs.exec(i);)g=u[0],y=i.substring(c,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(m=d[l++]||"")&&(f=parseFloat(m)||0,x=m.substr((f+"").length),g.charAt(1)==="="&&(g=Xs(f,g)+x),p=parseFloat(g),v=g.substr((p+"").length),c=Fs.lastIndex-v.length,v||(v=v||nn.units[e]||x,c===i.length&&(i+=v,a.e+=v)),x!==v&&(f=Ai(t,e,m,v)||0),a._pt={_next:a._pt,p:y||l===1?y:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?cf:lf;return Sd.test(i)&&(a.e=0),this._pt=a,a},Su={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Oy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Su[n]||n,e[1]=Su[i]||i,e.join(" ")},Ny=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,r=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],ai[a]&&(c=1,a=a==="transformOrigin"?Ln:ie),kr(n,a);c&&(kr(n,ie),r&&(r.svg&&n.removeAttribute("transform"),Gr(n,1),r.uncache=1,hf(i)))}},qa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var r=t._pt=new Ge(t._pt,e,n,0,0,Ny);return r.u=i,r.pr=-10,r.tween=s,t._props.push(n),1}}},Vr=[1,0,0,1,0,0],mf={},gf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wu=function(t){var e=Nn(t,ie);return gf(e)?Vr:e.substr(7).match(Md).map(he)},vc=function(t,e){var n=t._gsap||Yi(t),i=t.style,s=wu(t),r,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Vr:s):(s===Vr&&!t.offsetParent&&t!==Ys&&!n.svg&&(c=i.display,i.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(l=1,a=t.nextElementSibling,Ys.appendChild(t)),s=wu(t),c?i.display=c:kr(t,"display"),l&&(a?r.insertBefore(t,a):r?r.appendChild(t):Ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fl=function(t,e,n,i,s,r){var a=t._gsap,c=s||vc(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],m=c[2],g=c[3],p=c[4],y=c[5],v=e.split(" "),x=parseFloat(v[0])||0,b=parseFloat(v[1])||0,w,T,A,M;n?c!==Vr&&(T=f*g-_*m)&&(A=x*(g/T)+b*(-m/T)+(m*y-g*p)/T,M=x*(-_/T)+b*(f/T)-(f*y-_*p)/T,x=A,b=M):(w=ff(t),x=w.x+(~v[0].indexOf("%")?x/100*w.width:x),b=w.y+(~(v[1]||v[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(p=x-l,y=b-h,a.xOffset=u+(p*f+y*m)-p,a.yOffset=d+(p*_+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ln]="0px 0px",r&&(vi(r,a,"xOrigin",l,x),vi(r,a,"yOrigin",h,b),vi(r,a,"xOffset",u,a.xOffset),vi(r,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},Gr=function(t,e){var n=t._gsap||new Kd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,r="px",a="deg",c=getComputedStyle(t),l=Nn(t,Ln)||"0",h,u,d,f,_,m,g,p,y,v,x,b,w,T,A,M,S,U,N,D,z,O,G,W,B,K,X,pt,nt,q,$,ct;return h=u=d=m=g=p=y=v=x=0,f=_=1,n.svg=!!(t.getCTM&&pf(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ie]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ie]!=="none"?c[ie]:"")),i.scale=i.rotate=i.translate="none"),T=vc(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),l=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Fl(t,W||l,!!W||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,w=n.yOrigin||0,T!==Vr&&(U=T[0],N=T[1],D=T[2],z=T[3],h=O=T[4],u=G=T[5],T.length===6?(f=Math.sqrt(U*U+N*N),_=Math.sqrt(z*z+D*D),m=U||N?Rs(N,U)*Vi:0,y=D||z?Rs(D,z)*Vi+m:0,y&&(_*=Math.abs(Math.cos(y*Zs))),n.svg&&(h-=b-(b*U+w*D),u-=w-(b*N+w*z))):(ct=T[6],q=T[7],X=T[8],pt=T[9],nt=T[10],$=T[11],h=T[12],u=T[13],d=T[14],A=Rs(ct,nt),g=A*Vi,A&&(M=Math.cos(-A),S=Math.sin(-A),W=O*M+X*S,B=G*M+pt*S,K=ct*M+nt*S,X=O*-S+X*M,pt=G*-S+pt*M,nt=ct*-S+nt*M,$=q*-S+$*M,O=W,G=B,ct=K),A=Rs(-D,nt),p=A*Vi,A&&(M=Math.cos(-A),S=Math.sin(-A),W=U*M-X*S,B=N*M-pt*S,K=D*M-nt*S,$=z*S+$*M,U=W,N=B,D=K),A=Rs(N,U),m=A*Vi,A&&(M=Math.cos(A),S=Math.sin(A),W=U*M+N*S,B=O*M+G*S,N=N*M-U*S,G=G*M-O*S,U=W,O=B),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),f=he(Math.sqrt(U*U+N*N+D*D)),_=he(Math.sqrt(G*G+ct*ct)),A=Rs(O,G),y=Math.abs(A)>2e-4?A*Vi:0,x=$?1/($<0?-$:$):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!gf(Nn(t,ie)),W&&t.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=d+r,n.scaleX=he(f),n.scaleY=he(_),n.rotation=he(m)+a,n.rotationX=he(g)+a,n.rotationY=he(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+r,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Ln]=Xa(l)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?By:df?_f:Fy,n.uncache=0,n},Xa=function(t){return(t=t.split(" "))[0]+" "+t[1]},al=function(t,e,n){var i=Le(e);return he(parseFloat(e)+parseFloat(Ai(t,"x",n+"px",i)))+i},Fy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_f(t,e)},Ni="0deg",vr="0px",Fi=") ",_f=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,x="",b=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==Ni||h!==Ni)){var w=parseFloat(h)*Zs,T=Math.sin(w),A=Math.cos(w),M;w=parseFloat(u)*Zs,M=Math.cos(w),r=al(y,r,T*M*-v),a=al(y,a,-Math.sin(w)*-v),c=al(y,c,A*M*-v+v)}g!==vr&&(x+="perspective("+g+Fi),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||r!==vr||a!==vr||c!==vr)&&(x+=c!==vr||b?"translate3d("+r+", "+a+", "+c+") ":"translate("+r+", "+a+Fi),l!==Ni&&(x+="rotate("+l+Fi),h!==Ni&&(x+="rotateY("+h+Fi),u!==Ni&&(x+="rotateX("+u+Fi),(d!==Ni||f!==Ni)&&(x+="skew("+d+", "+f+Fi),(_!==1||m!==1)&&(x+="scale("+_+", "+m+Fi),y.style[ie]=x||"translate(0, 0)"},By=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(r),x=parseFloat(a),b,w,T,A,M;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Zs,l*=Zs,b=Math.cos(c)*u,w=Math.sin(c)*u,T=Math.sin(c-l)*-d,A=Math.cos(c-l)*d,l&&(h*=Zs,M=Math.tan(l-h),M=Math.sqrt(1+M*M),T*=M,A*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,w*=M)),b=he(b),w=he(w),T=he(T),A=he(A)):(b=u,A=d,w=T=0),(v&&!~(r+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Ai(f,"x",r,"px"),x=Ai(f,"y",a,"px")),(_||m||g||p)&&(v=he(v+_-(_*b+m*T)+g),x=he(x+m-(_*w+m*A)+p)),(i||s)&&(M=f.getBBox(),v=he(v+i/100*M.width),x=he(x+s/100*M.height)),M="matrix("+b+","+w+","+T+","+A+","+v+","+x+")",f.setAttribute("transform",M),y&&(f.style[ie]=M)},ky=function(t,e,n,i,s){var r=360,a=Se(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Vi:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),u==="cw"&&l<0?l=(l+r*vu)%r-~~(l/r)*r:u==="ccw"&&l>0&&(l=(l-r*vu)%r-~~(l/r)*r)),t._pt=d=new Ge(t._pt,e,n,i,l,Sy),d.e=h,d.u="deg",t._props.push(n),d},Tu=function(t,e){for(var n in e)t[n]=e[n];return t},Vy=function(t,e,n){var i=Tu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,c,l,h,u,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[ie]=e,a=Gr(n,1),kr(n,ie),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ie],r[ie]=e,a=Gr(n,1),r[ie]=l);for(c in ai)l=i[c],h=a[c],l!==h&&s.indexOf(c)<0&&(f=Le(l),_=Le(h),u=f!==_?Ai(n,c,l,_):parseFloat(l),d=parseFloat(h),t._pt=new Ge(t._pt,a,c,u,d-u,Ul),t._pt.u=_||0,t._props.push(c));Tu(a,i)};Ve("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",s="Left",r=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?o+a:"border"+a+o});qa[t>1?"border"+o:o]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=r.map(function(_){return Qn(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},r.forEach(function(_,m){return f[_]=d[m]=d[m]||d[(m-1)/2|0]}),a.init(c,f,u)}});var xf={name:"css",register:Nl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var r=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,f,_,m,g,p,y,v,x,b,w,T,A;gc||Nl(),this.styles=this.styles||uf(t),A=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(h=e[m],!(Qe[m]&&Qd(m,e,n,i,t,s)))){if(f=typeof h,_=qa[m],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Fr(h)),_)_(this,t,m,h,n)&&(T=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(m)+"").trim(),h+="",wi.lastIndex=0,wi.test(l)||(g=Le(l),p=Le(h)),p?g!==p&&(l=Ai(t,m,l,p)+p):g&&(h+=g),this.add(a,"setProperty",l,h,i,s,0,0,m),r.push(m),A.push(m,0,a[m]);else if(f!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,i,t,s):c[m],Se(l)&&~l.indexOf("random(")&&(l=Fr(l)),Le(l+"")||(l+=nn.units[m]||Le(Qn(t,m))||""),(l+"").charAt(1)==="="&&(l=Qn(t,m))):l=Qn(t,m),d=parseFloat(l),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),m in Un&&(m==="autoAlpha"&&(d===1&&Qn(t,"visibility")==="hidden"&&u&&(d=0),A.push("visibility",0,a.visibility),vi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),m!=="scale"&&m!=="transform"&&(m=Un[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in ai,v){if(this.styles.save(m),x||(b=t._gsap,b.renderTransform&&!e.parseTransform||Gr(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new Ge(this._pt,a,ie,0,1,b.renderTransform,b,0,-1),x.dep=1),m==="scale")this._pt=new Ge(this._pt,b,"scaleY",b.scaleY,(y?Xs(b.scaleY,y+u):u)-b.scaleY||0,Ul),this._pt.u=0,r.push("scaleY",m),m+="X";else if(m==="transformOrigin"){A.push(Ln,0,a[Ln]),h=Oy(h),b.svg?Fl(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&vi(this,b,"zOrigin",b.zOrigin,p),vi(this,a,m,Xa(l),Xa(h)));continue}else if(m==="svgOrigin"){Fl(t,h,1,w,0,this);continue}else if(m in mf){ky(this,b,m,d,y?Xs(d,y+h):h);continue}else if(m==="smoothOrigin"){vi(this,b,"smooth",b.smooth,h);continue}else if(m==="force3D"){b[m]=h;continue}else if(m==="transform"){Vy(this,h,t);continue}}else m in a||(m=ar(m)||m);if(v||(u||u===0)&&(d||d===0)&&!My.test(h)&&m in a)g=(l+"").substr((d+"").length),u||(u=0),p=Le(h)||(m in nn.units?nn.units[m]:g),g!==p&&(d=Ai(t,m,l,p)),this._pt=new Ge(this._pt,v?b:a,m,d,(y?Xs(d,y+u):u)-d,!v&&(p==="px"||m==="zIndex")&&e.autoRound!==!1?Ty:Ul),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=wy);else if(m in a)Uy.call(this,t,m,l,y?y+h:h);else if(m in t)this.add(t,m,l||t[m],y?y+h:h,i,s);else if(m!=="parseTransform"){oc(m,h);continue}v||(m in a?A.push(m,0,a[m]):A.push(m,1,l||t[m])),r.push(m)}}T&&af(this)},render:function(t,e){if(e.tween._time||!_c())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Qn,aliases:Un,getSetter:function(t,e,n){var i=Un[e];return i&&i.indexOf(",")<0&&(e=i),e in ai&&e!==Ln&&(t._gsap.x||Qn(t,"x"))?n&&xu===n?e==="scale"?Ly:Cy:(xu=n||{})&&(e==="scale"?Py:Ry):t.style&&!sc(t.style[e])?Ey:~e.indexOf("-")?Ay:pc(t,e)},core:{_removeProperty:kr,_getMatrix:vc}};He.utils.checkPrefix=ar;He.core.getStyleSaver=uf;(function(o,t,e,n){var i=Ve(o+","+t+","+e,function(s){ai[s]=1});Ve(t,function(s){nn.units[s]="deg",mf[s]=1}),Un[i[13]]=o+","+t,Ve(n,function(s){var r=s.split(":");Un[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){nn.units[o]="px"});He.registerPlugin(xf);var Bl=He.registerPlugin(xf)||He;Bl.core.Tween;class vf extends tc{constructor(t){super(t)}load(t,e,n,i){const s=this,r=new md(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const c=s.parse(JSON.parse(a));e&&e(c)},n,i)}parse(t){return new Gy(t)}}class Gy{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Hy(t,e,this.data);for(let s=0,r=i.length;s<r;s++)n.push(...i[s].toShapes());return n}}function Hy(o,t,e){const n=Array.from(o),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,r=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=s;else{const u=Wy(h,i,a,c,e);a+=u.offsetX,r.push(u.path)}}return r}function Wy(o,t,e,n,i){const s=i.glyphs[o]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+o+'" does not exists in font family '+i.familyName+".");return}const r=new mv;let a,c,l,h,u,d,f,_;if(s.o){const m=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,p=m.length;g<p;)switch(m[g++]){case"m":a=m[g++]*t+e,c=m[g++]*t+n,r.moveTo(a,c);break;case"l":a=m[g++]*t+e,c=m[g++]*t+n,r.lineTo(a,c);break;case"q":l=m[g++]*t+e,h=m[g++]*t+n,u=m[g++]*t+e,d=m[g++]*t+n,r.quadraticCurveTo(u,d,l,h);break;case"b":l=m[g++]*t+e,h=m[g++]*t+n,u=m[g++]*t+e,d=m[g++]*t+n,f=m[g++]*t+e,_=m[g++]*t+n,r.bezierCurveTo(u,d,f,_,l,h);break}}return{offsetX:s.ha*t,path:r}}class dn extends Kl{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}oe.prototype.rotateAroundWorldAxis=function(o,t,e){var n=new ii;const i=new P;i.copy(o).sub(t).normalize(),n.setFromAxisAngle(i,e),this.applyQuaternion(n),this.position.sub(o),this.position.applyQuaternion(n),this.position.add(o)};oe.prototype.rotateAroundWorldAxis2=function(o,t,e){const n=new P;n.copy(o).sub(t).normalize(),this.position.sub(o),this.rotateOnWorldAxis(n,e),this.position.add(o)};const Ds=(o,t,e)=>o*(1-e)+t*e;let Ra,yr;const ni=6;new P(50,50,50);let jy=new P(ni*1,-ni,-ni),qy=new P(20,20,20),Eu=new P(-ni,-ni,-ni),Au=new P(-ni,-ni,-ni),gi;class Xy{constructor(t){this.planes=[],this.editor=t,this.createPlanes(),this.dir=1,this.strings=t.strings,this.sizeText=.6}updateGridPlanes(){let t=this.editor.sizeProj,e=new Oe(2*t,2*t);this.planes[0].geometry.dispose(),this.planes[0].geometry=e,this.planes[0].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[0].children[0].children[0].applyMatrix4(this.planes[0].children[0].matrixWorld),this.planes[0].children[1].position.set(-t*.9,t*.8,0),this.planes[0].children[1].scale.set(t/4,t/4,t/4),this.planes[1].geometry.dispose(),this.planes[1].geometry=e,this.planes[1].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[1].children[0].children[0].applyMatrix4(this.planes[1].children[0].matrixWorld),this.planes[1].children[1].position.set(-t*.8,-t*.9,0),this.planes[1].children[1].scale.set(t/4,t/4,t/4),this.planes[2].geometry.dispose(),this.planes[2].geometry=e,this.planes[2].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[2].children[0].children[0].applyMatrix4(this.planes[2].children[0].matrixWorld),this.planes[2].children[1].position.set(-t*.9,t*.8,0),this.planes[2].children[1].scale.set(t/4,t/4,t/4)}createPlanes(){let t=this.editor.sizeProj,e=new Oe(2*t,2*t),n=new Ke({visible:!0,transparent:!0,opacity:.1,color:16711680});const i=new Xt(e,n);i.rotateY(Math.PI/2),i.translateZ(-2*t),i.userData.rot=new P(0,-1,0),i.userData.dir=new P(-1,0,0),this.planes.push(i),n=new Ke({visible:!0,transparent:!0,opacity:.1,color:65280});const s=new Xt(e,n);s.translateY(-2*t),s.rotateX(-Math.PI/2),s.userData.rot=new P(1,0,0),s.userData.dir=new P(0,-1,0),this.planes.push(s),n=new Ke({visible:!0,transparent:!0,opacity:.1,color:255});const r=new Xt(e,n);r.translateZ(-2*t),r.userData.rot=!1,r.userData.dir=new P(0,0,-1),this.planes.push(r),new vf().load("../assets/fonts/gentilis_regular.typeface.json",d=>{this.font=d;let f=new dn(this.strings.getKey("planeprojec/plan"),{font:d,size:this.sizeText,height:0});const _=[new to({color:"black",transparent:!0,opacity:.25})];let m=new Xt(f,_);m.translateY(-t*.95),m.translateX(-t*.85),m.rotateZ(Math.PI/2),s.add(m),s.indexText=s.children.length-1,f=new dn(this.strings.getKey("planeprojec/elevation"),{font:d,size:this.sizeText,height:0}),m=new Xt(f,_),m.translateX(-t*.95),m.translateY(t*.85),i.add(m),i.indexText=i.children.length-1,f=new dn(this.strings.getKey("planeprojec/profile"),{font:d,size:this.sizeText,height:0}),m=new Xt(f,_),m.translateX(-t*.95),m.translateY(t*.85),r.add(m),r.indexText=r.children.length-1});let c=new ji,l=new ti(2*t,2*t,8947848,10066329);l.layers.enableAll(),c.add(l),c.rotateX(Math.PI/2),i.add(c);let h=c.clone();r.add(h);let u=c.clone();s.add(u),this.planeY=s,this.planeZ=r,s.userData.angleTot=0,r.userData.angleTot=0}vistas(t,e,n,i,s=1){this.editor=t;let r=Math.PI/2/60,a=Bl.timeline({repeat:-1,repeatDelay:1e-4,onRepeat:()=>{this.planeY.userData.angleTot+Math.PI/2/60>Math.PI/2&&(r=Math.PI/2-this.planeY.userData.angleTot),this.planeY.rotateAroundWorldAxis(this.points[0],this.points[1],s*r),this.planeZ.rotateAroundWorldAxis(this.points[2],this.points[3],s*r),this.planeY.userData.angleTot+=r,this.planeY.userData.angleTot>=Math.PI/2&&(a.pause(0),this.planeY.userData.angleTot=0,this.planeZ.userData.angleTot=0)}}),c={t:0},l;Bl.to(c,{duration:1,t:1,onStart:()=>{l=this.editor.controls.orbit.target.clone()},onUpdate:()=>{this.editor.camera.position.x=Ds(Ra.x,yr.x,c.t),this.editor.camera.position.y=Ds(Ra.y,yr.y,c.t),this.editor.camera.position.z=Ds(Ra.z,yr.z,c.t),this.editor.camera.lookAt(Ds(l.x,gi.x,c.t),Ds(l.y,gi.y,c.t),Ds(l.z,gi.z,c.t))},onComplete:()=>{this.editor.camera.updateProjectionMatrix(),this.editor.controls.orbit.target.set(gi.x,gi.y,gi.z),this.editor.controls.orbit.update(),c.t=0}})}desplegar(t){Ra=t.camera.position.clone(),this.dir==1?(yr=jy.clone(),gi=Eu.clone(),Eu.clone()):(yr=qy.clone(),gi=Au.clone(),Au.clone()),this.points=[];const e=6;this.points.push(new P(-e,-e,-e)),this.points.push(new P(-e,-e,e)),this.points.push(new P(-e,e,-e)),this.points.push(new P(-e,-e,-e)),this.vistas(t,this.planes[1],this.planes[2],this.points,this.dir),this.dir*=-1}updateText(t){this.planes[1].children[this.planes[1].indexText].geometry=new dn(t.strings.getKey("planeprojec/plan"),{font:this.font,size:this.sizeText,height:0}),this.planes[0].children[this.planes[0].indexText].geometry=new dn(t.strings.getKey("planeprojec/elevation"),{font:this.font,size:this.sizeText,height:0}),this.planes[2].children[this.planes[2].indexText].geometry=new dn(t.strings.getKey("planeprojec/profile"),{font:this.font,size:this.sizeText,height:0})}}oe.prototype.rotateAroundWorldAxis=function(o,t,e){var n=new ii;const i=new P;i.copy(o).sub(t).normalize(),n.setFromAxisAngle(i,e),this.applyQuaternion(n),this.position.sub(o),this.position.applyQuaternion(n),this.position.add(o)};oe.prototype.rotateAroundWorldAxis2=function(o,t,e){const n=new P;n.copy(o).sub(t).normalize(),this.position.sub(o),this.rotateOnWorldAxis(n,e),this.position.add(o)};class Yy{constructor(t){this.planes=[],this.editor=t,this.createPlanes(),this.dir=1,this.strings=t.strings,this.size=.5}updateGridPlanes(){let t=this.editor.sizeProj,e=new Oe(2*t,2*t);this.planes[0].geometry.dispose(),this.planes[0].geometry=e,this.planes[0].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[0].children[0].children[0].applyMatrix4(this.planes[0].children[0].matrixWorld),this.planes[0].position.set(t,0,0),this.planes[0].children[0].children[0].position.set(0,-t,-t),e=new Oe(2*t,2*t),this.planes[1].geometry.dispose(),this.planes[1].geometry=e,this.planes[1].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[1].children[0].children[0].applyMatrix4(this.planes[1].children[0].matrixWorld),this.planes[1].position.set(0,t,0),this.planes[1].children[0].children[0].position.set(-t,0,-t),e=new Oe(2*t,2*t),this.planes[2].geometry.dispose(),this.planes[2].geometry=e,this.planes[2].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[2].children[0].children[0].applyMatrix4(this.planes[2].children[0].matrixWorld),this.planes[2].position.set(0,0,t),this.planes[2].children[0].children[0].position.set(-t,-t,0)}createPlanes1(){let t=this.editor.sizeProj;console.log(t);const e=1.01;let n=new Oe(2*t+2,2*t+2),i=new Ke({visible:!0,transparent:!0,opacity:.1,color:16711680});const s=new Xt(n,i);s.rotateY(Math.PI/2),s.translateZ(-t-e),s.userData.rot=new P(0,-1,0),s.userData.dir=new P(-1,0,0),this.planes.push(s),i=new Ke({visible:!0,transparent:!0,opacity:.1,color:65280});const r=new Xt(n,i);r.translateY(-t-e),r.rotateX(-Math.PI/2),r.userData.rot=new P(1,0,0),r.userData.dir=new P(0,-1,0),this.planes.push(r),i=new Ke({visible:!0,transparent:!0,opacity:.1,color:255});const a=new Xt(n,i);a.translateZ(-t-e),a.userData.rot=!1,a.userData.dir=new P(0,0,-1),this.planes.push(a),new vf().load("../assets/fonts/gentilis_regular.typeface.json",_=>{this.font=_;let m=new dn(this.strings.getKey("planeprojec/plan"),{font:_,size:this.sizeText,height:0});const g=[new to({color:"black",transparent:!0,opacity:.5})];let p=new Xt(m,g),y=-t-1,v=t+1,x=.15*Math.sqrt(y*y+v*v+.1*.1);p.position.set(y+.75*x,-v+.5*x,.1),p.scale.set(x,x,x),p.rotateZ(Math.PI/2),r.add(p),r.indexText=r.children.length-1,m=new dn(this.strings.getKey("planeprojec/elevation"),{font:_,size:this.sizeText,height:0}),p=new Xt(m,g),y=-t-1,v=t+1,x=.15*Math.sqrt(y*y+v*v+.1*.1),p.position.set(y+.25*x,v-.75*x,.1),p.scale.set(x,x,x),s.add(p),s.indexText=s.children.length-1,m=new dn(this.strings.getKey("planeprojec/profile"),{font:_,size:this.sizeText,height:0}),p=new Xt(m,g),y=-t-1,v=t+1,x=.15*Math.sqrt(y*y+v*v+.1*.1),p.position.set(y+.25*x,v-.75*x,.1),p.scale.set(x,x,x),a.add(p),a.indexText=a.children.length-1});let l=new ji,h=new ti(2*t,2*t,7829367,10066329);l.add(h);let u=new ti(t+4,2,2228224);u.layers.enableAll(),u.material.color.setHex(7829367),u.material.depthFunc=ku,u.material.vertexColors=!1,l.rotateX(Math.PI/2),s.add(l);let d=l.clone();a.add(d);let f=l.clone();r.add(f),this.planeY=r,this.planeZ=a,r.userData.angleTot=0,a.userData.angleTot=0}planeIsometric(){}createPlanes1(){let t=this.editor.sizeProj,e=new Jo("z","y","x",t,t,t,t,t,t),n=new Ke({color:65280,wireframe:!0});const i=new Xt(e,n);this.planes.push(i),e=new Jo("x","z","y",4,4,4,4,4,4),n=new Ke({color:65280,wireframe:!0});const s=new Xt(e,n);this.planes.push(s),e=new Jo("x","y","z",4,4,4,4,4,4),n=new Ke({color:65280,wireframe:!0});const r=new Xt(e,n);this.planes.push(r)}createPlanes(){let t=this.editor.sizeProj,e=new Oe(2*t,2*t,2*t,2*t),n=new Ke({visible:!1,side:En});const i=new Xt(e,n);let s=8;i.translateX(s),i.translateY(s),i.translateZ(s),i.translateZ(-t),this.planes.push(i),e=new Oe(2*t,2*t,2*t,2*t);const r=new Xt(e,n);r.translateX(s),r.translateY(s),r.translateZ(s),r.translateY(-t),r.rotateX(Math.PI/2),this.planes.push(r),e=new Oe(2*t,2*t,2*t,2*t);const a=new Xt(e,n);a.translateX(s),a.translateY(s),a.translateZ(s),a.translateX(-t),a.rotateY(-Math.PI/2),this.planes.push(a),e=new Oe(2*t,2*t,2*t,2*t),n=new Ke({color:11184810,wireframe:!0,side:En});const c=new Xt(e,n);s=7,c.translateX(s),c.translateY(s),c.translateZ(s),c.translateZ(-t),this.planes.push(c),e=new Oe(2*t,2*t,2*t,2*t);const l=new Xt(e,n);l.translateX(s),l.translateY(s),l.translateZ(s),l.translateY(-t),l.rotateX(Math.PI/2),this.planes.push(l),e=new Oe(2*t,2*t,2*t,2*t);const h=new Xt(e,n);h.translateX(s),h.translateY(s),h.translateZ(s),h.translateX(-t),h.rotateY(-Math.PI/2),this.planes.push(h)}updateText(t){console.log(t),this.planes[1].children[this.planes[1].indexText].geometry=new dn(t.strings.getKey("planeprojec/plan"),{font:this.font,size:this.sizeText,height:0}),this.planes[0].children[this.planes[0].indexText].geometry=new dn(t.strings.getKey("planeprojec/elevation"),{font:this.font,size:this.sizeText,height:0}),this.planes[2].children[this.planes[2].indexText].geometry=new dn(t.strings.getKey("planeprojec/profile"),{font:this.font,size:this.sizeText,height:0})}}const Cu={type:"change"},ol={type:"start"},Lu={type:"end"};class yf extends is{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",It),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",It),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cu),n.update(),s=i.NONE},this.update=function(){const R=new P,tt=new ii().setFromUnitVectors(t.up,new P(0,1,0)),H=tt.clone().invert(),ft=new P,yt=new ii,St=2*Math.PI;return function(){const Mt=n.object.position;R.copy(Mt).sub(n.target),R.applyQuaternion(tt),a.setFromVector3(R),n.autoRotate&&s===i.NONE&&M(T()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Dt=n.minAzimuthAngle,Ft=n.maxAzimuthAngle;return isFinite(Dt)&&isFinite(Ft)&&(Dt<-Math.PI?Dt+=St:Dt>Math.PI&&(Dt-=St),Ft<-Math.PI?Ft+=St:Ft>Math.PI&&(Ft-=St),Dt<=Ft?a.theta=Math.max(Dt,Math.min(Ft,a.theta)):a.theta=a.theta>(Dt+Ft)/2?Math.max(Dt,a.theta):Math.min(Ft,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),R.setFromSpherical(a),R.applyQuaternion(H),Mt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||ft.distanceToSquared(n.object.position)>r||8*(1-yt.dot(n.object.quaternion))>r?(n.dispatchEvent(Cu),ft.copy(n.object.position),yt.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",E),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",ht),n.domElement.removeEventListener("wheel",wt),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",ht),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",It),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new Qh,c=new Qh;let l=1;const h=new P;let u=!1;const d=new lt,f=new lt,_=new lt,m=new lt,g=new lt,p=new lt,y=new lt,v=new lt,x=new lt,b=[],w={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function M(R){c.theta-=R}function S(R){c.phi-=R}const U=function(){const R=new P;return function(H,ft){R.setFromMatrixColumn(ft,0),R.multiplyScalar(-H),h.add(R)}}(),N=function(){const R=new P;return function(H,ft){n.screenSpacePanning===!0?R.setFromMatrixColumn(ft,1):(R.setFromMatrixColumn(ft,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(H),h.add(R)}}(),D=function(){const R=new P;return function(H,ft){const yt=n.domElement;if(n.object.isPerspectiveCamera){const St=n.object.position;R.copy(St).sub(n.target);let _t=R.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),U(2*H*_t/yt.clientHeight,n.object.matrix),N(2*ft*_t/yt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(H*(n.object.right-n.object.left)/n.object.zoom/yt.clientWidth,n.object.matrix),N(ft*(n.object.top-n.object.bottom)/n.object.zoom/yt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(R){n.object.isPerspectiveCamera?l/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(R){n.object.isPerspectiveCamera?l*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(R){d.set(R.clientX,R.clientY)}function W(R){y.set(R.clientX,R.clientY)}function B(R){m.set(R.clientX,R.clientY)}function K(R){f.set(R.clientX,R.clientY),_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const tt=n.domElement;M(2*Math.PI*_.x/tt.clientHeight),S(2*Math.PI*_.y/tt.clientHeight),d.copy(f),n.update()}function X(R){v.set(R.clientX,R.clientY),x.subVectors(v,y),x.y>0?z(A()):x.y<0&&O(A()),y.copy(v),n.update()}function pt(R){g.set(R.clientX,R.clientY),p.subVectors(g,m).multiplyScalar(n.panSpeed),D(p.x,p.y),m.copy(g),n.update()}function nt(R){R.deltaY<0?O(A()):R.deltaY>0&&z(A()),n.update()}function q(R){let tt=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),tt=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),tt=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),tt=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),tt=!0;break}tt&&(R.preventDefault(),n.update())}function $(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),tt=.5*(b[0].pageY+b[1].pageY);d.set(R,tt)}}function ct(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),tt=.5*(b[0].pageY+b[1].pageY);m.set(R,tt)}}function mt(){const R=b[0].pageX-b[1].pageX,tt=b[0].pageY-b[1].pageY,H=Math.sqrt(R*R+tt*tt);y.set(0,H)}function V(){n.enableZoom&&mt(),n.enablePan&&ct()}function Pt(){n.enableZoom&&mt(),n.enableRotate&&$()}function Lt(R){if(b.length==1)f.set(R.pageX,R.pageY);else{const H=dt(R),ft=.5*(R.pageX+H.x),yt=.5*(R.pageY+H.y);f.set(ft,yt)}_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const tt=n.domElement;M(2*Math.PI*_.x/tt.clientHeight),S(2*Math.PI*_.y/tt.clientHeight),d.copy(f)}function ot(R){if(b.length===1)g.set(R.pageX,R.pageY);else{const tt=dt(R),H=.5*(R.pageX+tt.x),ft=.5*(R.pageY+tt.y);g.set(H,ft)}p.subVectors(g,m).multiplyScalar(n.panSpeed),D(p.x,p.y),m.copy(g)}function bt(R){const tt=dt(R),H=R.pageX-tt.x,ft=R.pageY-tt.y,yt=Math.sqrt(H*H+ft*ft);v.set(0,yt),x.set(0,Math.pow(v.y/y.y,n.zoomSpeed)),z(x.y),y.copy(v)}function it(R){n.enableZoom&&bt(R),n.enablePan&&ot(R)}function J(R){n.enableZoom&&bt(R),n.enableRotate&&Lt(R)}function et(R){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",vt),n.domElement.addEventListener("pointerup",ht)),j(R),R.pointerType==="touch"?jt(R):At(R))}function vt(R){n.enabled!==!1&&(R.pointerType==="touch"?L(R):Ct(R))}function ht(R){st(R),b.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",ht)),n.dispatchEvent(Lu),s=i.NONE}function At(R){let tt;switch(R.button){case 0:tt=n.mouseButtons.LEFT;break;case 1:tt=n.mouseButtons.MIDDLE;break;case 2:tt=n.mouseButtons.RIGHT;break;default:tt=-1}switch(tt){case as.DOLLY:if(n.enableZoom===!1)return;W(R),s=i.DOLLY;break;case as.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;B(R),s=i.PAN}else{if(n.enableRotate===!1)return;G(R),s=i.ROTATE}break;case as.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;G(R),s=i.ROTATE}else{if(n.enablePan===!1)return;B(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ol)}function Ct(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(R);break;case i.DOLLY:if(n.enableZoom===!1)return;X(R);break;case i.PAN:if(n.enablePan===!1)return;pt(R);break}}function wt(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(ol),nt(R),n.dispatchEvent(Lu))}function It(R){n.enabled===!1||n.enablePan===!1||q(R)}function jt(R){switch(rt(R),b.length){case 1:switch(n.touches.ONE){case os.ROTATE:if(n.enableRotate===!1)return;$(),s=i.TOUCH_ROTATE;break;case os.PAN:if(n.enablePan===!1)return;ct(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case os.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(),s=i.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ol)}function L(R){switch(rt(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ot(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;J(R),n.update();break;default:s=i.NONE}}function E(R){n.enabled!==!1&&R.preventDefault()}function j(R){b.push(R)}function st(R){delete w[R.pointerId];for(let tt=0;tt<b.length;tt++)if(b[tt].pointerId==R.pointerId){b.splice(tt,1);return}}function rt(R){let tt=w[R.pointerId];tt===void 0&&(tt=new lt,w[R.pointerId]=tt),tt.set(R.pageX,R.pageY)}function dt(R){const tt=R.pointerId===b[0].pointerId?b[1]:b[0];return w[tt.pointerId]}n.domElement.addEventListener("contextmenu",E),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",ht),n.domElement.addEventListener("wheel",wt,{passive:!1}),this.update()}}const u1=new ss,d1=new P;ut.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new lt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Tn.line={uniforms:Qu.merge([ut.common,ut.fog,ut.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};const f1=new P,p1=new P,m1=new re,g1=new re,_1=new re,x1=new P,v1=new se,y1=new pv,b1=new P,M1=new ss,S1=new lr,w1=new re;class zs extends zr{constructor(t=[0,0,0,0,0,0],e=0,n=0,i=1){let s=new ue().setAttribute("position",new Pe(new Float32Array([t[0],t[1],t[2],t[3],t[4],t[5]]),3));super(s,new pd({color:e,dashSize:.15,gapSize:n})),this.computeLineDistances();let r=new In({color:e,size:i}),a=new ue;a.setAttribute("position",new Pe(new Float32Array([t[0],t[1],t[2]]),3)),this.point1=new bi(a,r),r=new In({color:e,size:i}),a=new ue,a.setAttribute("position",new Pe(new Float32Array([t[3],t[4],t[5]]),3)),this.point2=new bi(a,r)}updatePosition(t,e=0,n=!1,i){const s=this.geometry.attributes.position.array;if(!n&&s[e+0]==Math.round(t.x)&&s[e+1]==Math.round(t.y)&&s[e+2]==Math.round(t.z))return;const r=e!=0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,a=e!=0?this.point1:this.point2,c=e==0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,l=e==0?this.point1:this.point2;s[e+0]=c[0]=Math.round(t.x),s[e+1]=c[1]=Math.round(t.y),s[e+2]=c[2]=Math.round(t.z),l.visible=!0,l.geometry.computeBoundingSphere(),l.geometry.attributes.position.needsUpdate=!0,n&&(e=e==0?3:0,s[e+0]=r[0]=c[0],s[e+1]=r[1]=c[1],s[e+2]=r[2]=c[2],this.visible=!0,a.visible=!0,a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0),this.computeLineDistances(),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0}updateColor(t,e,n){this.material.color.r=this.point1.material.color.r=this.point2.material.color.r=t,this.material.color.g=this.point1.material.color.g=this.point2.material.color.g=e,this.material.color.b=this.point1.material.color.b=this.point2.material.color.b=n}}const Zy=/^[og]\s*(.+)?/,$y=/^mtllib /,Jy=/^usemtl /,Ky=/^usemap /,Pu=/\s+/,Ru=new P,ll=new P,Du=new P,zu=new P,ln=new P,Da=new Vt;function Qy(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;Ru.fromArray(i,t),ll.fromArray(i,e),Du.fromArray(i,n),ln.subVectors(Du,ll),zu.subVectors(Ru,ll),ln.cross(zu),ln.normalize(),s.push(ln.x,ln.y,ln.z),s.push(ln.x,ln.y,ln.z),s.push(ln.x,ln.y,ln.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,r,a,c,l){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),a!==void 0&&a!==""){const _=this.normals.length;u=this.parseNormalIndex(a,_),d=this.parseNormalIndex(c,_),f=this.parseNormalIndex(l,_),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(i!==void 0&&i!==""){const _=this.uvs.length;u=this.parseUVIndex(i,_),d=this.parseUVIndex(s,_),f=this.parseUVIndex(r,_),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,r=t.length;s<r;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,r=e.length;s<r;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return o.startObject("",!1),o}class Iu extends tc{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,r=new md(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){try{e(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new Qy;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const u=l.split(Pu);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Da.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),e.colors.push(Da.r,Da.g,Da.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const d=l.slice(1).trim().split(Pu),f=[];for(let m=0,g=d.length;m<g;m++){const p=d[m];if(p.length>0){const y=p.split("/");f.push(y)}}const _=f[0];for(let m=1,g=f.length-1;m<g;m++){const p=f[m],y=f[m+1];e.addFace(_[0],p[0],y[0],_[1],p[1],y[1],_[2],p[2],y[2])}}else if(h==="l"){const u=l.substring(1).trim().split(" ");let d=[];const f=[];if(l.indexOf("/")===-1)d=u;else for(let _=0,m=u.length;_<m;_++){const g=u[_].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&f.push(g[1])}e.addLineGeometry(d,f)}else if(h==="p"){const d=l.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((i=Zy.exec(l))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);e.startObject(u)}else if(Jy.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if($y.test(l))e.materialLibraries.push(l.substring(7).trim());else if(Ky.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=l.split(" "),i.length>1){const d=i[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const s=new ji;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=e.objects.length;a<c;a++){const l=e.objects[a],h=l.geometry,u=l.materials,d=h.type==="Line",f=h.type==="Points";let _=!1;if(h.vertices.length===0)continue;const m=new ue;m.setAttribute("position",new ee(h.vertices,3)),h.normals.length>0&&m.setAttribute("normal",new ee(h.normals,3)),h.colors.length>0&&(_=!0,m.setAttribute("color",new ee(h.colors,3))),h.hasUVIndices===!0&&m.setAttribute("uv",new ee(h.uvs,2));const g=[];for(let y=0,v=u.length;y<v;y++){const x=u[y],b=x.name+"_"+x.smooth+"_"+_;let w=e.materials[b];if(this.materials!==null){if(w=this.materials.create(x.name),d&&w&&!(w instanceof Hs)){const T=new Hs;si.prototype.copy.call(T,w),T.color.copy(w.color),w=T}else if(f&&w&&!(w instanceof In)){const T=new In({size:10,sizeAttenuation:!1});si.prototype.copy.call(T,w),T.color.copy(w.color),T.map=w.map,w=T}}w===void 0&&(d?w=new Hs:f?w=new In({size:1,sizeAttenuation:!1}):w=new to,w.name=x.name,w.flatShading=!x.smooth,w.vertexColors=_,e.materials[b]=w),g.push(w)}let p;if(g.length>1){for(let y=0,v=u.length;y<v;y++){const x=u[y];m.addGroup(x.groupStart,x.groupCount,y)}d?p=new zr(m,g):f?p=new bi(m,g):p=new Xt(m,g)}else d?p=new zr(m,g[0]):f?p=new bi(m,g[0]):p=new Xt(m,g[0]);p.name=l.name,s.add(p)}else if(e.vertices.length>0){const a=new In({size:1,sizeAttenuation:!1}),c=new ue;c.setAttribute("position",new ee(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new ee(e.colors,3)),a.vertexColors=!0);const l=new bi(c,a);s.add(l)}return s}}class oi{constructor(t){this.dom=t}add(){for(let t=0;t<arguments.length;t++){const e=arguments[t];e instanceof oi?this.dom.appendChild(e.dom):console.error("UIElement:",e,"is not an instance of UIElement.")}return this}remove(){for(let t=0;t<arguments.length;t++){const e=arguments[t];e instanceof oi?this.dom.removeChild(e.dom):console.error("UIElement:",e,"is not an instance of UIElement.")}return this}clear(){for(;this.dom.children.length;)this.dom.removeChild(this.dom.lastChild)}setId(t){return this.dom.id=t,this}getId(){return this.dom.id}setClass(t){return this.dom.className=t,this}addClass(t){return this.dom.classList.add(t),this}removeClass(t){return this.dom.classList.remove(t),this}setStyle(t,e){for(let n=0;n<e.length;n++)this.dom.style[t]=e[n];return this}setDisabled(t){return this.dom.disabled=t,this}setTextContent(t){return this.dom.textContent=t,this}setInnerHTML(t){this.dom.innerHTML=t}getIndexOfChild(t){return Array.prototype.indexOf.call(this.dom.children,t.dom)}}const t1=["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","verticalAlign","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"];t1.forEach(function(o){const t="set"+o.substring(0,1).toUpperCase()+o.substring(1,o.length);oi.prototype[t]=function(){return this.setStyle(o,arguments),this}});const e1=["KeyUp","KeyDown","MouseOver","MouseOut","Click","DblClick","Change","Input"];e1.forEach(function(o){const t="on"+o;oi.prototype[t]=function(e){return this.dom.addEventListener(o.toLowerCase(),e.bind(this),!1),this}});class Hr extends oi{constructor(){super(document.createElement("div"))}}class fn extends Hr{constructor(){super(),this.dom.className="Panel"}}class bf extends oi{constructor(t){super(document.createElement("button")),this.dom.className="Button",this.dom.textContent=t}}const Uu=({id:o})=>{const t=new fn;return t.setId(o),document.body.appendChild(t.dom),{add:e=>{t.dom.appendChild(e.dom)}}};function cl({id:o}){let t=new fn;return t.setId(o),t}function Is({id:o,cl:t=[],container:e,imgSrc:n,dataTitle:i,selected:s=!0,onClick:r,args:a={}}){const c=document.createElement("img");c.src=`${n}`;const l=new bf;return l.setId(o),l.dom.setAttribute("data-title",i),t.forEach(h=>l.dom.classList.add(h)),l.dom.appendChild(c),l.onClick(()=>{if(r(a),!!s){for(let h=0;h<e.dom.children.length;h++)e.dom.children[h].classList.remove("selected");l.dom.classList.add("selected")}}),e.add(l),l}const Ou=()=>{const o=new fn;o.setId("TeideLogo"),document.body.appendChild(o.dom);const t=document.createElement("img");t.src="../assets/icons/Teide200x200.png";const e=new bf;return e.dom.setAttribute("data-title","Editorial Teide"),e.dom.appendChild(t),o.add(e),{container:o}};class Mf extends oi{constructor(t,e){super(document.createElement("a")),this.dom.href=e,this.dom.innerHTML=t}}class Sf extends oi{constructor(t,e){super(document.createElement("a")),this.dom.href=e,this.dom.classList.add("logoTeiDSpace");const n=document.createElement("img");n.src=t,this.dom.appendChild(n);let i=new Hr;i.dom.innerHTML="TeiDSpace",i.dom.classList.add("logoText"),this.add(i)}}const n1=o=>{const t=new fn;t.setId("menubar"),document.body.appendChild(t.dom);const e=new fn;e.setClass("menu logo");const n=new Sf("../assets/icons/logo_TEIDSPACE.png","../TeiDSpace/index.html");e.add(n),t.add(e);for(let i=1;i<o.menu.length;i++){const s=o.menu[i];if(s.permission>o.levelPermission)continue;const r=new fn;r.setClass("menu");const a=new fn;for(let l=0;l<s.classes.length;l++)a.setClass(s.classes[l]);a.setTextContent(o.strings.getKey(s.title)),r.add(a);const c=new fn;c.setClass("options"),r.add(c);for(let l=0;l<s.subMenu.length;l++){const h=s.subMenu[l];if(h.permission>o.levelPermission)continue;const u=new Hr;for(let f=0;f<h.classes.length;f++)u.setClass(h.classes[f]);const d=new Mf(o.strings.getKey(h.title),h.link);u.add(d),c.add(u)}t.add(r)}},i1=o=>{const t=new fn;t.setId("menubar"),document.body.appendChild(t.dom);const e=new Hr;e.setClass("menu logo");const n=new Sf("../assets/icons/logo_TEIDSPACE.png","../TeiDSpace/index.html");e.add(n),t.add(e);for(let i=0;i<o.menu.length;i++){const s=o.menu[i];if(s.level>o.levelPermission)continue;const r=new fn;r.setClass("menu");const a=new fn;a.setClass("title"),a.setTextContent(o.strings.getKey(s.title)),r.add(a);const c=new fn;c.setClass("options"),r.add(c);for(let l=0;l<s.options.length;l++){const h=s.options[l];if(h.level>o.levelPermission)continue;const u=new Hr;u.setClass("option");const d=new Mf(o.strings.getKey(h.textContent),h.link);u.add(d),c.add(u)}t.add(r)}},kl=o=>{const t="TeiDSpace",e={language:"es",permission:100};if(window.localStorage[t]===void 0)window.localStorage[t]=JSON.stringify(e);else{const n=JSON.parse(window.localStorage[t]);for(const i in n)e[i]=n[i]}return{getKey:function(n){return e[n]},setKey:function(){for(let n=0,i=arguments.length;n<i;n+=2)e[arguments[n]]=arguments[n+1];window.localStorage[t]=JSON.stringify(e)},clear:function(){delete window.localStorage[t]}}},Vl=o=>{const t={en:{"menubar/views":"Views","menubar/isometric":"Perspective","menubar/pieces":"Pieces","menubar/generator":"Generator","menubar/help":"Help","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"About us...","menubar/tangrambuilding":"Tangram Building","menubar/tangram":"Tangram","menubar/tangramTriangle":"Tangram Triangle","menubar/soma":"Soma Cube","menubar/somaproject":"Soma Project","menubar/somadevelopment":"Soma Development","menubar/somabuilding":"Soma Building","menubar/somaexercises":"Soma exercices","menubar/objects":"Object","menubar/create":"Create Object","menubar/examples":"Examples","menubar/exercices":"Exercices","menubar/correction":"Correction","menubar/soma6viewsexamples":"Examples 6 views","menubar/soma6viewsexercises":"Exercises 6 views","toolbar/translate":"Translate","toolbar/rotate":"Rotate","toolbar/scale":"Scale","modelbar/cube":"Cube","modelbar/cube1":"Cube 1","modelbar/cube2":"Cube 2","modelbar/cube3":"Cube 3","modelbar/icosahedron":"Icosahedron","select/vertices":"Vertices","select/edges":"Edges","select/objects":"Objects","CSG/selected":"Selecteds: ","CSG/addition":"Addition A \u222A B","CSG/subtraction":"Subtraction A - B","CSG/reversesubtraction":"Reverse Subtraction B - A","CSG/difference":"Difference A \u2295 B","CSG/intersection":"Intersection","file/save":"save","file/load":"load","planeprojec/plan":"Plan","planeprojec/elevation":"Elevation","planeprojec/profile":"Profile","line/visible":"Visible Line","line/hidden":"Hidden Line","line/delete":"Delete Line","line/change":"Change","line/create":"Create","line/red":"Red line","line/black":"Black line","views/open":"Open Views","views/close":"Close Views",solutions:"Solution",opacity:"Opacity","object/base":"Object base","object/auxiliar":"Auxiliar Object","clipboard/copy":"Copy","clipboard/paste":"Paste","soma/cube":"Soma cube","soma/piece":"Piece","number/exercise":"Exercise","number/example":"Example","configBar/size":"Size","configBar/edges":"Edges","configBar/color":"Color","configBar/shadow":"Shadow","configBar/visible":"Visible","configBar/development":"Development"},es:{"menubar/views":"Vistas","menubar/isometric":"Perspectiva","menubar/pieces":"Piezas","menubar/generator":"Generador","menubar/help":"Ayuda","menubar/helptutorials":"Tutoriales","menubar/helpaboutus":"Acerca de...","menubar/tangrambuilding":"Construcci\xF3n Tangram","menubar/tangram":"Tangram","menubar/tangramTriangle":"Tri\xE1ngulo Tangram","menubar/soma":"Cubo Soma","menubar/somaproject":"Proyecto Soma","menubar/somadevelopment":"Desarrollo Soma ","menubar/somabuilding":"Construcci\xF3n Soma","menubar/somaexercises":"Soma ejercicios","menubar/soma6viewsexamples":"Ejemplos 6 vistas","menubar/soma6viewsexercises":"Ejercicios 6 vistas","menubar/objects":"Objeto","menubar/create":"Crear Objetos","menubar/examples":"Ejemplos","menubar/exercices":"Ejercicios","menubar/correction":"Correcci\xF3n","toolbar/translate":"Trasladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cubo","modelbar/cube1":"Cubo 1","modelbar/cube2":"Cubo 2","modelbar/cube3":"Cubo 3","modelbar/icosahedron":"Icosaedro","select/vertices":"V\xE9rtices","select/edges":"Aristas","select/objects":"Objetos","CSG/selected":"Seleccionados: ","CSG/addition":"Adici\xF3n A \u222A B","CSG/subtraction":"Sustracci\xF3n A - B","CSG/reversesubtraction":"Sustracci\xF3n inversa B - A","CSG/difference":"Diferencia A \u2295 B","CSG/intersection":"Intersecci\xF3n","file/save":"Guardar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Alzado","planeprojec/profile":"Perfil","line/visible":"L\xEDnea Visible","line/hidden":"L\xEDnea Oculta","line/delete":"Borrar L\xEDnea","line/change":"Cambiar","line/create":"Crear","line/red":"L\xEDnea roja","line/black":"L\xEDnea negra","views/open":"Abir Vistas","views/close":"Cerrar Vistas",solutions:"Soluci\xF3n",opacity:"Opacidad","object/base":"Objeto base","object/auxiliar":"Objeto auxiliar","clipboard/copy":"Copiar","clipboard/paste":"Pegar","soma/cube":"Cubo Soma","soma/piece":"Pieza","number/exercise":"Ejercicio","number/example":"Ejemplo","configBar/size":"Tama\xF1o","configBar/edges":"Aristas","configBar/color":"Color","configBar/shadow":"Sombra","configBar/visible":"Visible","configBar/development":"Desarrollo"},ca:{"menubar/views":"Vistes","menubar/isometric":"Perspectiva","menubar/pieces":"Peces","menubar/generator":"Generador","menubar/help":"Ajuda","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"Sobre...","menubar/tangrambuilding":"Construcci\xF3 Tangram","menubar/tangram":"Tangram","menubar/tangramTriangle":"Triangle Tangram","menubar/soma":"Cub Soma","menubar/somaproject":"Projecte Soma","menubar/somadevelopment":"Desenvolupament Soma ","menubar/somabuilding":"Construcci\xF3 Soma","menubar/somaexercises":"Soma exercicis","menubar/objects":"Objecte","menubar/create":"Crear Objectes","menubar/examples":"Exemples","menubar/exercices":"Exercicis","menubar/correction":"Correcci\xF3","menubar/soma6viewsexamples":"Exemples 6 vistes","menubar/soma6viewsexercises":"Exercicis 6 vistes","toolbar/translate":"Traslladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cub","modelbar/cube1":"Cub 1","modelbar/cube2":"Cub 2","modelbar/cube3":"Cub 3","modelbar/icosahedron":"Icosaedre","select/vertices":"V\xE8rtexs","select/edges":"Arestes","select/objects":"Objectes","CSG/selected":"Seleccionats: ","CSG/addition":"Adici\xF3 A \u222A B","CSG/subtraction":"Sustracci\xF3 A - B","CSG/reversesubtraction":"Sustracci\xF3 inversa B - A","CSG/difference":"Difer\xE8ncia A \u2295 B","CSG/intersection":"Intersecci\xF3","file/save":"Desar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Al\xE7at","planeprojec/profile":"Perfil","line/visible":"L\xEDnia Visible","line/hidden":"L\xEDnia Oculta","line/delete":"Esborrar L\xEDnia","line/change":"Canviar","line/create":"Crear","line/red":"L\xEDnia vermella","line/black":"L\xEDnia negra","views/open":"Obir Vistes","views/close":"Tancar Vistes",solutions:"Soluci\xF3",opacity:"Opacitat","object/base":"Objecte base","object/auxiliar":"Objecte auxiliar","clipboard/copy":"Copia","clipboard/paste":"Enganxa","soma/cube":"Cub Soma","soma/piece":"Pe\xE7a","number/exercise":"Exercici","number/example":"Exemple","configBar/size":"Tamany","configBar/edges":"Arestes","configBar/color":"Color","configBar/shadow":"Ombra","configBar/visible":"Visible","configBar/development":"Desenvolupament"}};return{getKey:function(e){return t[o.getKey("language")][e]||"???"}}},s1=()=>{const n=1.7999999999999998;return{sizeProj:4,configVistas:[{axis:"x",dir:1,color:"red",name:"alzado",rotate:!1,far:30,dim:{left:-1.2*4,right:1.2*4,top:1.2*4,bottom:-1.2*4},pos:{x:-4,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",rotate:!1,far:30,dim:{left:-1.2*4,right:1.2*4,top:1.2*4,bottom:-1.2*4},pos:{x:0,y:0,z:-4},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",rotate:!1,far:30,dim:{left:-1.2*4,right:1.2*4,top:1.2*4,bottom:-1.2*4},pos:{x:0,y:-4,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",rotate:!1,far:30,dim:{left:-n*4,right:n*4,top:n*4,bottom:-n*4},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]}};class r1{constructor(t,e=window){Ot(this,"intersect",(t,e,n)=>(this.mouse.x=t.offsetX/t.target.clientWidth*2-1,this.mouse.y=-(t.offsetY/t.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,e),this.raycaster.intersectObjects(n,!1)));Ot(this,"initListeners",()=>{window.addEventListener("keydown",t=>{switch(t.key.toUpperCase()){case"J":this.toJSON();break;case"R":this.JSONtoVar();break;case"S":saveObjects();break;case"L":let e=document.createElement("input");e.type="file",e.onchange=n=>{const i=e.files[0].name;this.read("./exercises/",i)},e.click();break;case"M":this.read();break}})});Ot(this,"initConfigVistas",()=>{const t=this.sizeProj*1,e=1.2,n=e*1.5;this.configVistas=[{axis:"x",dir:1,color:"red",name:"alzado",dim:{left:-e*t,right:e*t,top:e*t,bottom:-e*t},pos:{x:-t,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",dim:{left:-e*t,right:e*t,top:e*t,bottom:-e*t},pos:{x:0,y:0,z:-t},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",dim:{left:-e*t,right:e*t,top:e*t,bottom:-e*t},pos:{x:0,y:-t,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",dim:{left:-n*t,right:n*t,top:n*t,bottom:-n*t},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]});Ot(this,"initScene",()=>{this.scene=new xl;const t=13421772;this.scene.background=new Vt(t)});Ot(this,"initRenderer",()=>{this.allCanvas=[],this.allRenderer=[];for(let t=0;t<this.configVistas.length;t++){const e=new Xl({antialias:!0,alpha:!0});e.setPixelRatio(window.devicePixelRatio);let n;this.configVistas[t].name===null?(document.body.appendChild(e.domElement),n=e.domElement):(n=document.getElementById(this.configVistas[t].name),n.appendChild(e.domElement)),this.allCanvas.push(n),n.addEventListener("dblclick",i=>{const s=this.intersect(i,this.allCameras[t],this.linesSegments,!1);s.length>0&&(this.LineDashed=s[s.length-1].object.material.gapSize,this.Line.setLineReset(),this.Line.setLineSelected(s[s.length-1].object,t,this.LineDashed),this.Line.points=[this.Line.segment.point1,this.Line.segment.point2],this.LineDashed==0?(this.visibleLine.classList.add("selected"),this.hiddenLine.classList.remove("selected")):(this.visibleLine.classList.remove("selected"),this.hiddenLine.classList.add("selected")))}),e.setSize(n.clientWidth,n.clientHeight),this.allRenderer.push(e),window.addEventListener("resize",()=>{for(let i=0;i<this.allRenderer.length;i++)this.allRenderer[i].setSize(this.allCanvas[i].clientWidth,this.allCanvas[i].clientHeight)})}});Ot(this,"initCamera",()=>{this.allCameras=[];for(let t=0;t<this.configVistas.length;t++){const e=this.allCanvas[t].clientWidth/(this.allCanvas[t].clientHeight-16),n=e>=1?e:1,i=e>=1?1:1/e,s=new Ja(n*this.configVistas[t].dim.left,n*this.configVistas[t].dim.right,i*this.configVistas[t].dim.top,i*this.configVistas[t].dim.bottom,.1,this.configVistas[t].far);s.position.set(this.configVistas[t].pos.x,this.configVistas[t].pos.y,this.configVistas[t].pos.z),s.lookAt(new P(this.configVistas[t].look.x,this.configVistas[t].look.y,this.configVistas[t].look.z)),s.up.set(this.configVistas[t].up.x,this.configVistas[t].up.y,this.configVistas[t].up.z),s.aspect=e,this.allCameras.push(s)}window.addEventListener("resize",this.updateCamera)});Ot(this,"updateCamera",()=>{for(let t=0;t<this.allCameras.length;t++){const e=this.allCanvas[t].clientWidth/(this.allCanvas[t].clientHeight-16),n=e>=1?e:1,i=e>=1?1:1/e,s=this.allCameras[t];s.left=n*this.configVistas[t].dim.left,s.right=n*this.configVistas[t].dim.right,s.top=i*this.configVistas[t].dim.top,s.bottom=i*this.configVistas[t].dim.bottom,s.position.set(this.configVistas[t].pos.x,this.configVistas[t].pos.y,this.configVistas[t].pos.z),s.aspect=e,s.updateProjectionMatrix(),this.controls.orbits[t].update()}});Ot(this,"initLights",()=>{let t=new dv(12303291);this.scene.add(t);let e=new $n(16777215,.6);e.position.set(15,10,6),e.castShadow=!0,e.shadow.mapSize=new lt(1024*2,1024*2),e.shadow.camera.top=34,e.shadow.camera.bottom=-34,e.shadow.camera.left=-34,e.shadow.camera.right=34,e.shadow.camera.near=-20,e.shadow.camera.far=80,e.shadow.bias=-.002,e.shadow.radius=3,e.shadow.blurSamples=25,this.scene.add(e)});Ot(this,"initControls",()=>{for(let t=0;t<this.configVistas.length;t++){const e=new yf(this.allCameras[t],this.allCanvas[t]);e.enablePan=!1,e.enableRotate=this.configVistas[t].rotate,e.target.set(this.configVistas[t].look.x,this.configVistas[t].look.y,this.configVistas[t].look.z),e.update(),this.controls.orbits.push(e)}});Ot(this,"initConfig",()=>{const t=new URLSearchParams(window.location.search),e=t.get("lang");this.levelPermission=t.get("perm"),this.config=kl(),e!==null&&this.config.setKey("language",e),this.levelPermission!==null?this.config.setKey("permission",this.levelPermission):this.levelPermission=this.config.getKey("permission"),this.strings=Vl(this.config)});this.BLACK={r:0,g:0,b:0},this.YELLOW={r:255,g:255,b:0},this.RED={r:255,g:0,b:0},this.BLUE={r:0,g:0,b:255},this.configVistas=t.configVistas,this.sizeProj=t.sizeProj,this.raycaster=new fv,this.raycaster.params.Points.threshold=.25,this.raycaster.params.Line.threshold=.25,this.controls={orbits:[]},this.mouse=new lt,this.initScene(),this.initRenderer(),this.initCamera(),this.initLights(),this.initControls(),this.initConfig()}}class a1 extends zr{constructor(t=[0,0,0,0,0,0],e=0,n=0,i=1){let s=new ue().setAttribute("position",new Pe(new Float32Array([t[0],t[1],t[2],t[3],t[4],t[5]]),3));super(s,new pd({color:e,dashSize:.15,gapSize:n})),this.computeLineDistances();let r=new In({color:e,size:i}),a=new ue;a.setAttribute("position",new Pe(new Float32Array([t[0],t[1],t[2]]),3)),this.point1=new bi(a,r),r=new In({color:e,size:i}),a=new ue,a.setAttribute("position",new Pe(new Float32Array([t[3],t[4],t[5]]),3)),this.point2=new bi(a,r),this.points=[this.point1,this.point2]}updatePosition(t,e=0,n=!1,i){e*=3;const s=this.geometry.attributes.position.array;if(!n&&s[e+0]==Math.round(t.x)&&s[e+1]==Math.round(t.y)&&s[e+2]==Math.round(t.z))return;const r=e!=0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,a=e!=0?this.point1:this.point2,c=e==0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,l=e==0?this.point1:this.point2;s[e+0]=c[0]=Math.round(t.x),s[e+1]=c[1]=Math.round(t.y),s[e+2]=c[2]=Math.round(t.z),l.visible=!0,l.geometry.computeBoundingSphere(),l.geometry.attributes.position.needsUpdate=!0,n&&(e=e==0?3:0,s[e+0]=r[0]=c[0],s[e+1]=r[1]=c[1],s[e+2]=r[2]=c[2],this.visible=!0,a.visible=!0,a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0),this.computeLineDistances(),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0}updateColor({r:t,g:e,b:n}){this.material.color.r=this.points[0].material.color.r=this.points[1].material.color.r=t,this.material.color.g=this.points[0].material.color.g=this.points[1].material.color.g=e,this.material.color.b=this.points[0].material.color.b=this.points[1].material.color.b=n}}const o1=o=>({selectedSegment:!1,segment:null,selectedPoint:!1,points:null,npoint:0,handler:{down:[],move:[],up:[]},setLineSelected:function(t,e,n=0){this.selectedPoint=!1,this.selectedSegment=!0,this.segment=t,this.originalColorSegment={r:t.material.color.r,g:t.material.color.g,b:t.material.color.b},this.segment.material.gapSize=n,this.segment.updateColor(o.BLUE),this.segment.points[0].material.size=8,this.segment.points[1].material.size=8},setLineReset:function(){this.selectedPoint=!1,this.selectedSegment=!1,this.segment.updateColor(this.segment.userData.color),this.segment.points[0].material.size=1,this.segment.points[1].material.size=1},setPointsColor:function({color1:t,color2:e}){let n=this.npoint;n==null&&(n=0),this.setPointColor({color:t,n}),n=(n+1)%2,this.setPointColor({color:e,n})},setPointColor:function({color:t,n:e}){this.points[e].material.color.r=t.r,this.points[e].material.color.g=t.g,this.points[e].material.color.b=t.b},setSegmentColor:function({color:t}){this.segment.material.color.r=t.r,this.segment.material.color.g=t.g,this.segment.material.color.b=t.b},createHandler:function(){for(let t=0;t<o.allCanvas.length;t++){const e=o.allCanvas[t];this.handler.down.push(this.pointerdown.bind(null,this,t)),e.addEventListener("pointerdown",this.handler.down[t]),this.handler.move.push(this.pointermove.bind(null,this,t)),e.addEventListener("pointermove",this.handler.move[t]),this.handler.up.push(this.pointerup.bind(null,this)),e.addEventListener("pointerup",this.handler.up[t])}},pointerClamp(t,e,n){e==n[0][0]&&(t.y=Math.max(-o.sizeProj,Math.min(o.sizeProj,t.y)),t.z=Math.max(-o.sizeProj,Math.min(o.sizeProj,t.z))),e==n[1][0]&&(t.x=Math.max(-o.sizeProj,Math.min(o.sizeProj,t.x)),t.y=Math.max(-o.sizeProj,Math.min(o.sizeProj,t.y))),e==n[2][0]&&(t.x=Math.max(-o.sizeProj,Math.min(o.sizeProj,t.x)),t.z=Math.max(-o.sizeProj,Math.min(o.sizeProj,t.z)))},pointerdown:function(t,e,n){if(t.selectedSegment&&!t.selectedPoint){const i=o.intersect(n,o.allCameras[e],t.points);i.length>0?t.npoint=i[0].object.uuid==t.points[0].uuid?0:1:t.setLineReset(),t.selectedPoint=i.length>0}if(!t.selectedPoint){const i=o.intersect(n,o.allCameras[e],o.canvasPlanes[e]);if(i.length>0){const s=i[0].point.round();t.pointerClamp(s,i[0].object,o.canvasPlanes);const r=new a1([s.x,s.y,s.z,s.x,s.y,s.z],16777215,o.LineDashed);r.userData.indexPlane=e,r.userData.color=o.BLACK,o.scene.add(r,r.point1,r.point2),o.linesSegments.push(r),t.points=[r.point1,r.point2],t.npoint=0,t.setLineSelected(r,e,o.LineDashed)}t.selectedPoint=i.length>0}t.selectedPoint&&t.setPointsColor({color1:o.RED,color2:o.BLUE})},pointermove:function(t,e,n){if(!!t.selectedSegment)if(t.selectedPoint){const i=o.intersect(n,o.allCameras[e],o.canvasPlanes[e]);if(i.length>0){const s=i[0].point.round();t.pointerClamp(s,i[0].object,o.canvasPlanes),t.segment.updatePosition(i[0].point,t.npoint,!1,e,o.sizeProj)}}else{const i=o.intersect(n,o.allCameras[e],t.points);if(i.length>0){const s=i[0].object.uuid==t.points[0].uuid?0:1;t.setPointColor({color:o.RED,n:s})}else t.setPointsColor({color1:o.BLUE,color2:o.BLUE})}},pointerup:function(t){if(t.segment==null)return;t.selectedPoint=!1,t.setPointColor({color:o.BLUE,n:t.npoint});const e=t.segment.geometry.attributes.position.array;if(!(Math.abs(e[0]-e[3+0])+Math.abs(e[1]-e[3+1])+Math.abs(e[2]-e[3+2])>0)){for(let n=0;n<o.linesSegments.length;n++)if(t.segment.uuid==o.linesSegments[n].uuid){t.setLineReset(),o.scene.remove(t.segment.point1),o.scene.remove(t.segment.point2),o.scene.remove(t.segment),o.linesSegments.splice(n,1);return}}}}),l1=[{title:"menubar/tangram",level:0,options:[{textContent:"menubar/tangrambuilding",link:"../tangramTriangle/index.html",level:0},{textContent:"menubar/tangram",link:"../tangram/index.html",level:0},{textContent:"menubar/tangramTriangle",link:"../tangramTriangle/index.html",level:0}]},{title:"menubar/soma",level:0,options:[{textContent:"menubar/somabuilding",link:"../somaConstruccion/index.html",level:0},{textContent:"menubar/somaproject",link:"../soma/index.html",level:0},{textContent:"menubar/soma6viewsexamples",link:"../soma6VistasEjemplos/index.html",level:0},{textContent:"menubar/soma6viewsexercises",link:"../soma6VistasEjercicios/index.html",level:0}]},{title:"menubar/views",level:0,options:[{textContent:"menubar/examples",link:"../vistasEjemplos/index.html",level:0},{textContent:"menubar/exercices",link:"../vistasEjercicios/index.html",level:0},{textContent:"menubar/somaexercises",link:"../vistasEjerciciosSoma/index.html",level:0},{textContent:"menubar/correction",link:"../vistasCorreccion/index.html",level:100}]},{title:"menubar/isometric",level:0,options:[{textContent:"menubar/examples",link:"../isometricoEjemplos/index.html",level:0},{textContent:"menubar/exercices",link:"../isometricoEjercicios/index.html",level:0},{textContent:"menubar/correction",link:"../isometricoCorreccion/index.html",level:100}]},{title:"menubar/pieces",level:100,options:[{textContent:"menubar/generator",link:"../create/index.html",level:100}]},{level:0,title:"menubar/help",options:[{textContent:"menubar/helptutorials",link:"",level:0},{textContent:"menubar/helpaboutus",link:"",level:0}]}];class c1 extends r1{constructor(e=window){super(s1(),e);Ot(this,"newMenu",()=>{this.Teidebar=Ou();const e=Uu({id:"leftbar"}),n=cl({id:"linebar"});e.add(n),this.visibleLine=Is({id:"visibleLine",cl:["selected","invert"],container:n,imgSrc:"../assets/icons/tools/line27.png",dataTitle:this.strings.getKey("line/visible"),onClick:r=>{this.LineDashed=0,this.Line.selectedSegment&&(this.Line.segment.material.gapSize=0)}}).dom,this.hiddenLine=Is({id:"hiddenLine",cl:["invert"],container:n,imgSrc:"../assets/icons/tools/lineD1.png",dataTitle:this.strings.getKey("line/hidden"),onClick:r=>{this.LineDashed=.25,this.Line.selectedSegment&&(this.Line.segment.material.gapSize=.25)}}).dom,this.deleteLine=Is({id:"deleteLine",cl:[],container:n,imgSrc:"../assets/icons/tools/eraser1.png",dataTitle:this.strings.getKey("line/delete"),selected:!1,onClick:r=>{for(let a=0;a<this.linesSegments.length;a++)if(this.Line.segment.uuid==this.linesSegments[a].uuid){this.Line.setLineReset(),this.scene.remove(this.Line.segment.point1),this.scene.remove(this.Line.segment.point2),this.scene.remove(this.Line.segment),this.linesSegments.splice(a,1);return}}}).dom;const i=cl({id:"colorBar"});e.add(i),this.redLine=Is({id:"redLine",cl:[],container:i,imgSrc:"../assets/icons/misc/red.png",dataTitle:this.strings.getKey("line/red"),selected:!1,onClick:r=>{this.Line.selectedSegment&&(this.Line.segment.userData.color=this.RED,this.Line.setSegmentColor({color:this.RED}))}}).dom,this.blackLine=Is({id:"colorBlackBar",cl:[],container:i,imgSrc:"../assets/icons/misc/black.png",dataTitle:this.strings.getKey("line/black"),selected:!1,onClick:r=>{this.Line.selectedSegment&&(this.Line.segment.userData.color=this.BLACK,this.Line.setSegmentColor({color:this.BLACK}))}}).dom;const s=cl({id:"clipboardPegarBar"});e.add(s),this.clipboard=Is({id:"clipboardPegarBar",cl:[],container:s,imgSrc:"../assets/icons/misc/copy2.png",dataTitle:this.strings.getKey("clipboard/copy"),selected:!1,onClick:r=>{navigator.clipboard.readText().then(a=>{this.readPortapapeles(a)}).catch(a=>{console.error("Error al leer del portapapeles:",a)})}}).dom});Ot(this,"readPortapapeles",e=>{const n=JSON.parse(e);for(const i in n.segments){const s=[];for(const r in n.segments[i])s.push(n.segments[i][r]);n.views[i]?this.copyLine11(s,n.gapSize[i]):this.copyLine21(s,n.gapSize[i])}});Ot(this,"read",(e,n)=>{let i=new XMLHttpRequest;i.open("GET",e+n+".txt",!0),i.onreadystatechange=()=>{if(i.readyState===4&&i.status===200){this.reset();const s=JSON.parse(i.responseText);for(const r in s.segments){const a=[];for(const c in s.segments[r])a.push(s.segments[r][c]);s.views!=null?this.copyLine3(a,s.gapSize[r],s.views[r]):this.copyLine3(a,s.gapSize[r])}}},i.send(null)});Ot(this,"read1",(e,n)=>{let i=new XMLHttpRequest;i.open("GET",e+n+".txt",!0),i.onreadystatechange=()=>{if(i.readyState===4&&i.status===200){this.reset();const s=JSON.parse(i.responseText);for(const r in s.segments){const a=[];for(const c in s.segments[r])a.push(s.segments[r][c]);this.copyLine3(a,s.gapSize[r],s.views[r])}}},i.send(null)});Ot(this,"saveObjects",()=>{const e=this.toJSON();console.log(e);let n=new File([e],"Ejercicio1.txt",{type:"text/plain;charset=utf8"});saveAs(n)});Ot(this,"loadObjects",(e,n)=>{console.log(e+n),new Iu().load(e+n,s=>{for(const r in s.segments){const a=[];console.log(typeof s.segments[r]);for(const c in s.segments[r])a.push(s.segments[r][c]);this.copyLine(a)}},s=>{console.log(s.loaded/s.total*100+"% loaded")},s=>{console.log(s,"An error happened")})});Ot(this,"createLine",{createHandler:()=>{this.createLine.handler={down:[],move:[],up:[]};for(let e=0;e<this.allCanvas.length-0;e++)this.createLine.handler.down.push(this.createLine.pointerdown.bind(null,e)),this.createLine.handler.move.push(this.createLine.pointermove.bind(null,e)),this.createLine.handler.up.push(this.createLine.pointerup.bind())},pointerdown:(e,n)=>{this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects([this.planesP.planes[(3-e)%3]],!1);i.length>0&&(this.tempLine.userData.indexPlane=e,this.tempLine.material.gapSize=this.LineDashed,console.log(i[0].point,e),this.tempLine.updatePosition(i[0].point,0,!0,e,this.sizeProj),this.tempLine.point1.material.size=4,this.tempLine.point2.material.size=4)},pointermove:(e,n)=>{if(this.tempLine.userData.indexPlane==-1)return;this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects([this.planesP.planes[(3-e)%3]],!1);if(i.length>0){const s=i[0].point;this.tempLine.geometry.attributes.position,this.tempLine.updatePosition(s,0,!1,e,this.sizeProj)}},pointerup:()=>{this.tempLine.userData.indexPlane=-1;const e=this.tempLine.geometry.attributes.position.array;Math.abs(e[0]-e[3+0])+Math.abs(e[1]-e[3+1])+Math.abs(e[2]-e[3+2])>0&&(this.copyLine(this.tempLine),this.tempLine.visible=!1,this.tempLine.point1.visible=!1,this.tempLine.point2.visible=!1)},create:()=>{this.createLine.handler==null&&this.createLine.createHandler();for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.addEventListener("pointerdown",this.createLine.handler.down[e]),n.addEventListener("pointermove",this.createLine.handler.move[e]),n.addEventListener("pointerup",this.createLine.handler.up[e])}},remove:()=>{}});Ot(this,"selectLine",{downLineSelected:!1,downLine:void 0,overLineSelected:!1,overLine:void 0,createHandler1:()=>{this.selectLine.handler={down:[],move:[],up:[]};for(let e=0;e<this.allCanvas.length-1;e++)this.selectLine.handler.down.push(this.selectLine.pointerdown.bind(null,e)),this.selectLine.handler.move.push(this.selectLine.pointermove.bind(null,e)),this.selectLine.handler.up.push(this.selectLine.pointerup.bind())},pointerdown:(e,n)=>{this.selectLine1.downLineSelected&&(this.selectLine1.downLineSelected=!1,this.selectLine1.downLine.updateColor(0,0,0),this.selectLine1.downLine.point1.material.size=1,this.selectLine1.downLine.point2.material.size=1),this.selectLine.overLineSelected=!1,this.selectLine.overLine.updateColor(0,0,0),this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.linesSegments,!1);if(this.selectLine.downLineSelected=!1,i.length>0){if(this.selectLine.downLineSelected&&this.selectLine.downLine==i[0].object)return;this.selectLine.downLineSelected&&this.selectLine.downLine!=i[0].object&&this.selectLine.downLine.updateColor(0,0,0),this.selectLine.downLineSelected=!0,this.selectLine.downLine=i[0].object,this.selectLine.downLine.updateColor(255,255,0),this.movePoint.points=[this.selectLine.downLine.point1,this.selectLine.downLine.point2],this.selectLine.remove(),this.movePoint.create(),this.selectLine.downLine.point1.material.size=8,this.selectLine.downLine.point2.material.size=8,this.selectLine.downLine.material.gapSize==0?(this.oculta.dom.classList.remove("selected"),this.visible.dom.classList.add("selected")):(this.visible.dom.classList.remove("selected"),this.oculta.dom.classList.add("selected"))}},pointermove:(e,n)=>{console.log("si")},pointerup:()=>{this.tempLine.userData.indexPlane=-1},create1:()=>{this.selectLine.handler==null&&this.selectLine.createHandler();for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.addEventListener("pointerdown",this.selectLine.handler.down[e]),n.addEventListener("pointermove",this.selectLine.handler.move[e]),n.addEventListener("pointerup",this.selectLine.handler.up[e])}},remove:()=>{for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.removeEventListener("pointerdown",this.selectLine.handler.down[e]),n.removeEventListener("pointermove",this.selectLine.handler.move[e]),n.removeEventListener("pointerup",this.selectLine.handler.up[e])}}});Ot(this,"movePoint",{downPointSelected:!1,downPoint:void 0,overPointSelected:!1,overPoint:void 0,points:void 0,npoint:void 0,createHandler:()=>{this.movePoint.handler={down:[],move:[],up:[]};for(let e=0;e<this.allCanvas.length-1;e++)this.movePoint.handler.down.push(this.movePoint.pointerdown.bind(null,e)),this.movePoint.handler.move.push(this.movePoint.pointermove.bind(null,e)),this.movePoint.handler.up.push(this.movePoint.pointerup.bind())},pointerdown:(e,n)=>{},pointermove:(e,n)=>{if(this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]),this.movePoint.downPointSelected){const i=this.raycaster.intersectObjects([this.planesP.planes[(3-e)%3]],!1);if(i.length>0){const s=i[0].point;this.selectLine.downLine.updatePosition(s,this.movePoint.npoint,!1,e,this.sizeProj)}}else{const i=this.raycaster.intersectObjects(this.movePoint.points,!1);i.length>0?(this.movePoint.overPointSelected=!0,this.movePoint.overPoint=i[0].object,this.movePoint.overPoint.material.size=12,this.movePoint.overPoint.material.color.r=255,this.movePoint.overPoint.material.color.g=0,this.movePoint.overPoint.material.color.b=0):this.movePoint.overPointSelected&&(this.movePoint.overPointSelected=!1,this.movePoint.overPoint.material.size=8,this.movePoint.overPoint.material.color.r=255,this.movePoint.overPoint.material.color.g=255,this.movePoint.overPoint.material.color.b=0)}},pointerup:()=>{this.movePoint.downPointSelected=!1},create:()=>{this.movePoint.handler==null&&this.movePoint.createHandler();for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.addEventListener("pointerdown",this.movePoint.handler.down[e]),n.addEventListener("pointermove",this.movePoint.handler.move[e]),n.addEventListener("pointerup",this.movePoint.handler.up[e])}},remove:()=>{for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];try{n.removeEventListener("pointerdown",this.movePoint.handler.down[e]),n.removeEventListener("pointermove",this.movePoint.handler.move[e]),n.removeEventListener("pointerup",this.movePoint.handler.up[e])}catch{}}}});Ot(this,"createLine1",{createHandler:()=>{this.createLine1.handler={down:[],move:[],up:[]};let e=0;this.createLine1.handler.down.push(this.createLine1.pointerdown.bind(null,e)),this.createLine1.handler.move.push(this.createLine1.pointermove.bind(null,e)),this.createLine1.handler.up.push(this.createLine1.pointerup.bind())},pointerdown:(e,n)=>{this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.cameraIsometric);const i=this.raycaster.intersectObjects(this.planesIsometric.planes,!1);i.length>0&&(this.tempLine1.userData.indexPlane=3,this.tempLine1.material.gapSize=this.LineDashed,this.tempLine1.updatePosition(i[0].point,0,!0))},pointermove:(e,n)=>{if(this.tempLine1.userData.indexPlane==-1)return;this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.cameraIsometric);const i=this.raycaster.intersectObjects(this.planesIsometric.planes,!1);if(console.log("en3"),i.length>0){console.log("en4");const s=i[0].point;this.tempLine1.updatePosition(s,0,!1,i[0].object)}},pointerup:()=>{this.tempLine1.userData.indexPlane=-1;const e=this.tempLine1.geometry.attributes.position.array;Math.abs(e[0]-e[3+0])+Math.abs(e[1]-e[3+1])+Math.abs(e[2]-e[3+2])>0&&(this.copyLine2(this.tempLine1),this.tempLine1.visible=!1,this.tempLine1.point1.visible=!1,this.tempLine1.point2.visible=!1)},create:()=>{this.createLine1.handler==null&&this.createLine1.createHandler();let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.addEventListener("pointerdown",this.createLine1.handler.down[e]),n.addEventListener("pointermove",this.createLine1.handler.move[e]),n.addEventListener("pointerup",this.createLine1.handler.up[e])},remove:()=>{let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.removeEventListener("pointerdown",this.createLine1.handler.down[e]),n.removeEventListener("pointermove",this.createLine1.handler.move[e]),n.removeEventListener("pointerup",this.createLine1.handler.up[e])}});Ot(this,"selectLine1",{downLineSelected:!1,downLine:void 0,overLineSelected:!1,overLine:void 0,createHandler:()=>{this.selectLine1.handler={down:[],move:[],up:[]};let e=3;this.selectLine1.handler.down.push(this.selectLine1.pointerdown.bind(null,e)),this.selectLine1.handler.move.push(this.selectLine1.pointermove.bind(null,e)),this.selectLine1.handler.up.push(this.selectLine1.pointerup.bind())},pointerdown:(e,n)=>{var s;e=3,console.log("i=3"),this.selectLine.downLineSelected&&(this.selectLine.downLineSelected=!1,this.selectLine1.corregido||this.selectLine.downLine.updateColor(0,0,0),this.selectLine.downLine.point1.material.size=1,this.selectLine.downLine.point2.material.size=1),this.selectLine1.overLineSelected=!1,(s=this.selectLine1.overLine)==null||s.updateColor(0,0,0),this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.linesSegments1,!1);if(this.selectLine1.downLineSelected=!1,i.length>0){if(this.selectLine1.downLineSelected&&this.selectLine1.downLine==i[0].object)return;this.selectLine1.downLineSelected&&this.selectLine1.downLine!=i[0].object&&this.selectLine1.downLine.updateColor(0,0,0),this.selectLine1.downLineSelected=!0,this.selectLine1.downLine=i[0].object,this.selectLine1.corregido||this.selectLine1.downLine.updateColor(255,255,0),this.movePoint1.points=[this.selectLine1.downLine.point1,this.selectLine1.downLine.point2],this.selectLine1.downLine.point1.material.size=8,this.selectLine1.downLine.point2.material.size=8,this.selectLine1.remove(),this.movePoint1.create(),this.selectLine1.downLine.material.gapSize==0?(this.oculta.dom.classList.remove("selected"),this.visible.dom.classList.add("selected")):(this.visible.dom.classList.remove("selected"),this.oculta.dom.classList.add("selected"))}},pointermove:(e,n)=>{console.log("si"),e=3,this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.linesSegments1,!1);if(console.log(i.length),i.length>0){if(this.selectLine1.downLineSelected&&this.selectLine1.downLine==i[0].object||this.selectLine1.overLineSelected&&this.selectLine1.overLine==i[0].object)return;this.selectLine1.overLineSelected&&(this.selectLine1.corregido||this.selectLine1.overLine.updateColor(0,0,0),this.selectLine1.overLine.point1.material.size=1,this.selectLine1.overLine.point2.material.size=1),this.selectLine1.overLineSelected=!0,this.selectLine1.overLine=i[0].object,this.selectLine1.corregido||this.selectLine1.overLine.updateColor(255,0,255),this.selectLine1.overLine.point1.material.size=8,this.selectLine1.overLine.point2.material.size=8}else this.selectLine1.overLineSelected&&(this.selectLine1.corregido||this.selectLine1.overLine.updateColor(0,0,0),this.selectLine1.overLine.point1.material.size=1,this.selectLine1.overLine.point2.material.size=1),this.selectLine1.overLineSelected=!1},pointerup:()=>{this.tempLine1.userData.indexPlane=-1},create:()=>{this.selectLine1.handler==null&&this.selectLine1.createHandler();let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.addEventListener("pointerdown",this.selectLine1.handler.down[e]),n.addEventListener("pointermove",this.selectLine1.handler.move[e]),n.addEventListener("pointerup",this.selectLine1.handler.up[e])},remove:()=>{let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.removeEventListener("pointerdown",this.selectLine1.handler.down[e]),n.removeEventListener("pointermove",this.selectLine1.handler.move[e]),n.removeEventListener("pointerup",this.selectLine1.handler.up[e])}});Ot(this,"movePoint1",{downPointSelected:!1,downPoint:void 0,overPointSelected:!1,overPoint:void 0,points:void 0,npoint:void 0,createHandler:()=>{this.movePoint1.handler={down:[],move:[],up:[]};for(let e=0;e<this.allCanvas.length-1;e++)this.movePoint1.handler.down.push(this.movePoint1.pointerdown.bind(null,e)),this.movePoint1.handler.move.push(this.movePoint1.pointermove.bind(null,e)),this.movePoint1.handler.up.push(this.movePoint1.pointerup.bind())},pointerdown:(e,n)=>{e=3,this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.movePoint1.points,!1);console.log("dd"),i.length>0?(console.log("dd1"),this.movePoint1.downPointSelected=!0,this.movePoint1.npoint=i[0].object.uuid==this.movePoint1.points[0].uuid?0:3):(this.movePoint1.downPointSelected=!1,this.selectLine1.downLineSelected=!1,this.selectLine1.corregido||this.selectLine1.downLine.updateColor(0,0,0),this.selectLine1.downLine.point1.material.size=1,this.selectLine1.downLine.point2.material.size=1,this.movePoint1.remove(),this.selectLine1.create())},pointermove:(e,n)=>{if(e=3,this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]),console.log(e),this.movePoint1.downPointSelected){const i=this.raycaster.intersectObjects(this.planesIsometric.planes,!1);if(i.length>0){const s=i[0].point;this.selectLine1.downLine.updatePosition(s,this.movePoint1.npoint,!1)}}else{const i=this.raycaster.intersectObjects(this.movePoint1.points,!1);i.length>0?(this.movePoint1.overPointSelected=!0,this.movePoint1.overPoint=i[0].object,this.movePoint1.overPoint.material.size=12,this.movePoint1.overPoint.material.color.r=255,this.movePoint1.overPoint.material.color.g=0,this.movePoint1.overPoint.material.color.b=0):this.movePoint1.overPointSelected&&(this.movePoint1.overPointSelected=!1,this.movePoint1.overPoint.material.size=8,this.movePoint1.overPoint.material.color.r=255,this.movePoint1.overPoint.material.color.g=255,this.movePoint1.overPoint.material.color.b=0)}},pointerup:()=>{this.movePoint1.downPointSelected!=!1&&(this.movePoint1.downPointSelected=!1)},create:()=>{this.movePoint1.handler==null&&this.movePoint1.createHandler();let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.addEventListener("pointerdown",this.movePoint1.handler.down[e]),n.addEventListener("pointermove",this.movePoint1.handler.move[e]),n.addEventListener("pointerup",this.movePoint1.handler.up[e])},remove:()=>{for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[this.allCanvas.length-1];try{n.removeEventListener("pointerdown",this.movePoint1.handler.down[e]),n.removeEventListener("pointermove",this.movePoint1.handler.move[e]),n.removeEventListener("pointerup",this.movePoint1.handler.up[e])}catch{}}}});Ot(this,"initConfigVistas",()=>{const e=this.sizeProj*1,n=1.2,i=n*1.5;this.configVistas=[{axis:"x",dir:1,color:"red",name:"alzado",dim:{left:-n*e,right:n*e,top:n*e,bottom:-n*e},pos:{x:-e,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",dim:{left:-n*e,right:n*e,top:n*e,bottom:-n*e},pos:{x:0,y:0,z:-e},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",dim:{left:-n*e,right:n*e,top:n*e,bottom:-n*e},pos:{x:0,y:-e,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",dim:{left:-i*e,right:i*e,top:i*e,bottom:-i*e},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]});Ot(this,"initConfigVistas1",()=>{const e=this.sizeProj;this.configVistas=[{axis:"x",dir:1,color:"red",name:"alzado",dim:{left:-.6*e,right:.6*e,top:.6*e,bottom:-.6*e},pos:{x:-e+2,y:.7,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:.7,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",dim:{left:-.6*e,right:.6*e,top:.6*e,bottom:-.6*e},pos:{x:0,y:.7,z:-e+2},up:{x:0,y:1,z:0},look:{x:0,y:.7,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",dim:{left:-.6*e,right:.6*e,top:.6*e,bottom:-.6*e},pos:{x:0,y:-e+2,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",dim:{left:-.75*e,right:.75*e,top:.75*e,bottom:-.75*e},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]});Ot(this,"loadObject",(e,n,i={x:0,y:0,z:0})=>{new Iu().load(e+n,r=>{for(let a=0;a<this.objects.length;a++)this.scene.remove(this.objects[a]);this.scene.add(r),this.objects=[],this.objects.push(r)},r=>{console.log(r.loaded/r.total*100+"% loaded")},r=>{console.log(r,"An error happened")})});Ot(this,"addObject1",()=>{const e=new Ql(2),n=new to({color:255}),i=new Xt(e,n);this.objects.push(i),this.scene.add(i)});Ot(this,"initScene",()=>{this.scene=new xl;const e=11184810;this.scene.background=new Vt(e),this.sceneIsometric=new xl,this.sceneIsometric.background=new Vt(e)});Ot(this,"initRenderer",()=>{this.allCanvas=[],this.allRenderer=[];for(let e=0;e<this.configVistas.length;e++){const n=new Xl({antialias:!0,alpha:!0});n.setPixelRatio(window.devicePixelRatio);const i=document.getElementById(this.configVistas[e].name);i.appendChild(n.domElement),this.allCanvas.push(i),n.setSize(i.clientWidth,i.clientHeight),this.allRenderer.push(n),window.addEventListener("resize",()=>{for(let s=0;s<this.allRenderer.length;s++)this.allRenderer[s].setSize(this.allCanvas[s].clientWidth,this.allCanvas[s].clientHeight)})}});Ot(this,"updateCamera",()=>{for(let e=0;e<this.allCameras.length;e++){const n=this.allCanvas[e].clientWidth/(this.allCanvas[e].clientHeight-16),i=n>=1?n:1,s=n>=1?1:1/n,r=this.allCameras[e];r.left=i*this.configVistas[e].dim.left,r.right=i*this.configVistas[e].dim.right,r.top=s*this.configVistas[e].dim.top,r.bottom=s*this.configVistas[e].dim.bottom,r.position.set(this.configVistas[e].pos.x,this.configVistas[e].pos.y,this.configVistas[e].pos.z),r.aspect=n,r.updateProjectionMatrix(),this.controls.orbits[e].update()}});Ot(this,"initCamera",()=>{this.allCameras=[];for(let e=0;e<this.configVistas.length;e++){const n=this.allCanvas[e].clientWidth/(this.allCanvas[e].clientHeight-16),i=n>=1?n:1,s=n>=1?1:1/n,r=new Ja(i*this.configVistas[e].dim.left,i*this.configVistas[e].dim.right,s*this.configVistas[e].dim.top,s*this.configVistas[e].dim.bottom,.1,3e3);r.position.set(this.configVistas[e].pos.x,this.configVistas[e].pos.y,this.configVistas[e].pos.z),r.lookAt(new P(this.configVistas[e].look.x,this.configVistas[e].look.y,this.configVistas[e].look.z)),r.up.set(this.configVistas[e].up.x,this.configVistas[e].up.y,this.configVistas[e].up.z),r.aspect=n,this.allCameras.push(r)}this.cameraIsometric=this.allCameras[this.allCameras.length-1],window.addEventListener("resize",()=>{for(let e=0;e<this.allCameras.length;e++){const n=this.allCanvas[e].clientWidth/this.allCanvas[e].clientHeight,i=n>=1?n:1,s=n>=1?1:1/n,r=this.allCameras[e];r.left=i*this.configVistas[e].dim.left,r.right=i*this.configVistas[e].dim.right,r.top=s*this.configVistas[e].dim.top,r.bottom=s*this.configVistas[e].dim.bottom,r.aspect=n,r.updateProjectionMatrix(),this.controls.orbits[e].update()}})});Ot(this,"initLights2",()=>{let e=new $n(16777215,1.5);e.position.set(1,.75,.5).normalize(),this.scene.add(e),e=new $n(16777215,1.5),e.position.set(-1,-.75,-.5).normalize(),this.scene.add(e),e=new $n(16711680,.2),e.position.set(1,0,0),this.scene.add(e),e=new $n(16711680,.2),e.position.set(-1,0,0),this.scene.add(e),e=new $n(65280,.2),e.position.set(0,1,0),this.scene.add(e),e=new $n(65280,.2),e.position.set(0,-1,0),this.scene.add(e),e=new $n(255,.2),e.position.set(0,0,1),this.scene.add(e),e=new $n(255,.2),e.position.set(0,0,-1),this.scene.add(e)});Ot(this,"initControls",()=>{this.controls={orbits:[]};for(let e=0;e<this.configVistas.length;e++){const n=new yf(this.allCameras[e],this.allCanvas[e]);n.enablePan=!1,n.enableRotate=!1,n.target.set(this.configVistas[e].look.x,this.configVistas[e].look.y,this.configVistas[e].look.z),n.update(),this.controls.orbits.push(n)}});Ot(this,"initConfig",()=>{const e=new URLSearchParams(window.location.search),n=e.get("lang");this.levelPermission=e.get("perm"),this.config=kl(),n!==null&&this.config.setKey("language",n),this.levelPermission!==null?this.config.setKey("permission",this.levelPermission):this.levelPermission=this.config.getKey("permission"),this.strings=Vl(this.config)});Ot(this,"initConfig1",()=>{this.config=kl(),this.config.setKey(),this.strings=Vl(this.config)});Ot(this,"initMenu",async()=>{this.menu=await fetch("../common/menu.json").then(e=>e.json()).then(e=>e.menu),this.menuBar=n1(this)});Ot(this,"initMenu1",()=>{this.levelPermission=100,this.menu=l1,this.menuBar=i1(this)});Ot(this,"initBar",()=>{this.bar=Uu(),this.LineBar=Linebar(this),this.colorBar=Colorbar(this),this.portapapelesPegarbar=PortapapelesPegarbar(this),this.bar.add(this.LineBar),this.bar.add(this.colorBar),this.bar.add(this.portapapelesPegarbar),this.Teidebar=Ou()});Ot(this,"initPlanesPorj",()=>{this.planesP=new Xy(this),this.scene.add(this.planesP.planes[0],this.planesP.planes[1],this.planesP.planes[2]),this.planesIsometric=new Yy(this),this.scene.add(this.planesIsometric.planes[0],this.planesIsometric.planes[1],this.planesIsometric.planes[2],this.planesIsometric.planes[3],this.planesIsometric.planes[4],this.planesIsometric.planes[5]),this.canvasPlanes[3]=[this.planesIsometric.planes[0],this.planesIsometric.planes[1],this.planesIsometric.planes[2]]});this.objects=[],this.cubes=[],this.lines=[],this.points=[],this.linesSegments=[],this.pointsLinesSegments=[],this.linesSegments1=[],this.pointsLinesSegments1=[],this.history={copyObject:[],object:[],index:0},this.canvasPlanes={0:[],1:[],2:[],3:[]},this.width,this.height,this.LineDashed=0,this.sizeProj=4,this.initConfig(),this.initMenu(),this.newMenu(),this.initPlanesPorj(),this.intDrawLine(),window.addEventListener("keydown",n=>{switch(n.key.toUpperCase()){case"J":this.toJSON();break;case"R":this.JSONtoVar();break;case"S":this.saveObjects();break;case"L":let i=document.createElement("input");i.type="file",i.onchange=s=>{const r=i.files[0].name;this.read("./exercises/",r)},i.click();break;case"M":this.read();break}})}toJSON(){this.exportJSON={segments:[],gapSize:[],views:[]};for(let n=0;n<this.linesSegments.length;n++)this.exportJSON.segments.push(this.linesSegments[n].geometry.attributes.position.array),this.exportJSON.gapSize.push(this.linesSegments[n].material.gapSize),this.exportJSON.views.push(this.linesSegments[n].views);for(let n=0;n<this.linesSegments1.length;n++)this.exportJSON.segments.push(this.linesSegments1[n].geometry.attributes.position.array),this.exportJSON.gapSize.push(this.linesSegments1[n].material.gapSize),this.exportJSON.views.push(this.linesSegments1[n].views);const e=JSON.stringify(this.exportJSON);return JSON.parse(e),e}JSONtoVar(){const e=JSON.parse(window.localStorage.proj);for(const n in e.segments){const i=[];for(const s in e.segments[n])i.push(e.segments[n][s]);this.copyLine(i)}}reset(){for(let e=0;e<this.linesSegments.length;e++)this.scene.remove(this.linesSegments[e]);for(let e=0;e<this.pointsLinesSegments.length;e++)this.scene.remove(this.pointsLinesSegments[e]);this.linesSegments=[],this.pointsLinesSegments=[];for(let e=0;e<this.linesSegments1.length;e++)this.sceneIsometric.remove(this.linesSegments1[e]);for(let e=0;e<this.pointsLinesSegments1.length;e++)this.sceneIsometric.remove(this.pointsLinesSegments1[e]);this.linesSegments1=[],this.pointsLinesSegments1=[]}copyLine3(e,n,i=null){const s=new zs(e,0);s.material.gapSize=n,s.views=i,i==null||i?(this.linesSegments.push(s),this.pointsLinesSegments.push(s.point1,s.point2),this.scene.add(s,s.point1,s.point2)):(this.linesSegments1.push(s),this.pointsLinesSegments1.push(s.point1,s.point2),this.sceneIsometric.add(s,s.point1,s.point2))}copyLine4(e,n){const i=new zs(e,0);i.material.gapSize=n,this.linesSegments.push(i),this.pointsLinesSegments.push(i.point1,i.point2),this.sceneIsometric.add(i,i.point1,i.point2)}copyLine(e){const n=new zs(e.geometry.attributes.position.array,0);n.material.gapSize=this.tempLine.material.gapSize,n.views=!0,this.linesSegments.push(n),this.pointsLinesSegments.push(n.point1,n.point2),this.scene.add(n,n.point1,n.point2)}copyLine11(e,n){const i=new zs(e,0);i.material.gapSize=n,i.views=!0,this.linesSegments.push(i),this.pointsLinesSegments.push(i.point1,i.point2),this.scene.add(i,i.point1,i.point2)}copyLine2(e){const n=new zs(e.geometry.attributes.position.array,0);n.material.gapSize=this.tempLine1.material.gapSize,n.views=!1,this.linesSegments1.push(n),this.pointsLinesSegments1.push(n.point1,n.point2),this.sceneIsometric.add(n,n.point1,n.point2)}copyLine21(e,n){const i=new zs(e,0);i.views=!1,i.material.gapSize=n,this.linesSegments1.push(i),this.pointsLinesSegments1.push(i.point1,i.point2),this.sceneIsometric.add(i,i.point1,i.point2)}intDrawLine(){this.Line=o1(this),this.Line.createHandler()}intDrawPoint(){const e=[0,0,0],n=new In({color:0,name:"P0",size:3}),i=new ue;i.setAttribute("position",new ee(e,3)),this.point=new bi(i,n),this.scene.add(this.point);for(let s=0;s<this.allCanvas.length-1;s++)this.allCanvas[s].addEventListener("pointerdown",r=>{console.log(r),this.mouse.x=r.offsetX/r.target.clientWidth*2-1,this.mouse.y=-(r.offsetY/r.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[s]);const a=this.raycaster.intersectObjects([this.planesP.planes[(3-s)%3]],!1);if(a.length>0){const c=a[0].point,l=this.point.geometry.attributes.position;l.array[0]=c.x,l.array[1]=c.y,l.array[2]=c.z,l.needsUpdate=!0}})}}let za=new c1;function wf(){requestAnimationFrame(wf);for(let o=0;o<za.allRenderer.length-0;o++)za.allRenderer[o].render(za.scene,za.allCameras[o])}wf();
