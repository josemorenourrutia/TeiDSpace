var Lf=Object.defineProperty;var Pf=(a,t,e)=>t in a?Lf(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var Ot=(a,t,e)=>(Pf(a,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="151",os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rf=0,Mc=1,Df=2,Nu=1,zf=2,vr=3,Ei=0,Be=1,Tn=2,yi=0,Fs=1,Sc=2,wc=3,Ec=4,If=5,zs=100,Uf=101,Of=102,Tc=103,Ac=104,Nf=200,Ff=201,Bf=202,kf=203,Fu=204,Bu=205,Vf=206,Gf=207,Hf=208,Wf=209,jf=210,qf=0,ku=1,Xf=2,cl=3,Yf=4,Zf=5,$f=6,Jf=7,Gl=0,Kf=1,Qf=2,ei=0,tp=1,ep=2,np=3,ip=4,sp=5,Vu=300,Ys=301,Zs=302,hl=303,ul=304,Zo=306,dl=1e3,An=1001,fl=1002,Ne=1003,Cc=1004,ua=1005,un=1006,rp=1007,Cr=1008,Ji=1009,op=1010,ap=1011,Gu=1012,lp=1013,Hi=1014,Wi=1015,Lr=1016,cp=1017,hp=1018,Bs=1020,up=1021,Cn=1023,dp=1024,fp=1025,Xi=1026,$s=1027,pp=1028,mp=1029,gp=1030,_p=1031,xp=1033,da=33776,fa=33777,pa=33778,ma=33779,Lc=35840,Pc=35841,Rc=35842,Dc=35843,vp=36196,zc=37492,Ic=37496,Uc=37808,Oc=37809,Nc=37810,Fc=37811,Bc=37812,kc=37813,Vc=37814,Gc=37815,Hc=37816,Wc=37817,jc=37818,qc=37819,Xc=37820,Yc=37821,ga=36492,yp=36283,Zc=36284,$c=36285,Jc=36286,Ki=3e3,Kt=3001,bp=3200,Mp=3201,Hu=0,Sp=1,Dn="srgb",Pr="srgb-linear",Wu="display-p3",_a=7680,wp=519,Kc=35044,Qc="300 es",pl=1035;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];const xa=Math.PI/180,ml=180/Math.PI;function rr(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[a&255]+Te[a>>8&255]+Te[a>>16&255]+Te[a>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Me(a,t,e){return Math.max(t,Math.min(e,a))}function Ep(a,t){return(a%t+t)%t}function va(a,t,e){return(1-e)*a+e*t}function th(a){return(a&a-1)===0&&a!==0}function Tp(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Yr(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function je(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],m=i[0],g=i[3],p=i[6],y=i[1],v=i[4],x=i[7],b=i[2],w=i[5],E=i[8];return s[0]=r*m+o*y+c*b,s[3]=r*g+o*v+c*w,s[6]=r*p+o*x+c*E,s[1]=l*m+h*y+u*b,s[4]=l*g+h*v+u*w,s[7]=l*p+h*x+u*E,s[2]=d*m+f*y+_*b,s[5]=d*g+f*v+_*w,s[8]=d*p+f*x+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*r-o*l,d=o*c-h*s,f=l*s-r*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(o*n-i*r)*m,t[3]=d*m,t[4]=(h*e-i*c)*m,t[5]=(i*s-o*e)*m,t[6]=f*m,t[7]=(n*c-l*e)*m,t[8]=(r*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-i*l,i*c,-i*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Ht;function ju(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function ko(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ks(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ba(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Ap=new Ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Cp=new Ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Lp(a){return a.convertSRGBToLinear().applyMatrix3(Cp)}function Pp(a){return a.applyMatrix3(Ap).convertLinearToSRGB()}const Rp={[Pr]:a=>a,[Dn]:a=>a.convertSRGBToLinear(),[Wu]:Lp},Dp={[Pr]:a=>a,[Dn]:a=>a.convertLinearToSRGB(),[Wu]:Pp},qe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Pr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=Rp[t],i=Dp[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}};let ls;class qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=ko("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ko("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ks(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ks(e[n]/255)*255):e[n]=ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Xu{constructor(t=null){this.isSource=!0,this.uuid=rr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ma(i[r].image)):s.push(Ma(i[r]))}else s=Ma(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ma(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?qu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zp=0;class en extends is{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=An,i=An,s=un,r=Cr,o=Cn,c=Ji,l=en.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=rr(),this.name="",this.source=new Xu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Vu;en.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],m=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(f+1)/2,b=(p+1)/2,w=(h+d)/4,E=(u+m)/4,A=(_+g)/4;return v>x&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=E/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=A/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=E/s,i=A/s),this.set(n,i,s,e),this}let y=Math.sqrt((g-_)*(g-_)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(u-m)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends is{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yu extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ip extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],_=s[r+2],m=s[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=m;return}if(u!==m||c!==d||l!==f||h!==_){let g=1-o;const p=c*d+l*f+h*_+u*m,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,p*y);g=Math.sin(g*w)/b,o=Math.sin(o*w)/b}const x=o*y;if(c=c*g+d*x,l=l*g+f*x,h=h*g+_*x,u=u*g+m*x,g===1-o){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],_=s[r+3];return t[e]=o*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-o*f,t[e+2]=l*_+h*f+o*d-c*u,t[e+3]=h*_-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,c=t.w,l=c*e+r*i-o*n,h=c*n+o*e-s*i,u=c*i+s*n-r*e,d=-s*e-r*n-o*i;return this.x=l*c+d*-s+h*-o-u*-r,this.y=h*c+d*-r+u*-s-l*-o,this.z=u*c+d*-o+l*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new P,eh=new ii;class ss{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox),cs.applyMatrix4(t.matrixWorld),this.union(cs);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,o=s.count;r<o;r++)Vn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Vn)}else i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Zr.subVectors(this.max,cr),hs.subVectors(t.a,cr),us.subVectors(t.b,cr),ds.subVectors(t.c,cr),ci.subVectors(us,hs),hi.subVectors(ds,us),Di.subVectors(hs,ds);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Di.z,Di.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Di.z,0,-Di.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Di.y,Di.x,0];return!wa(e,hs,us,ds,Zr)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,hs,us,ds,Zr))?!1:($r.crossVectors(ci,hi),e=[$r.x,$r.y,$r.z],wa(e,hs,us,ds,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new P,new P,new P,new P,new P,new P,new P,new P],Vn=new P,cs=new ss,hs=new P,us=new P,ds=new P,ci=new P,hi=new P,Di=new P,cr=new P,Zr=new P,$r=new P,zi=new P;function wa(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){zi.fromArray(a,s);const o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Up=new ss,hr=new P,Ea=new P;class or{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Up.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Ea)),this.expandByPoint(hr.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new P,Ta=new P,Jr=new P,ui=new P,Aa=new P,Kr=new P,Ca=new P;class $o{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ta.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Ta);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Jr),o=ui.dot(this.direction),c=-ui.dot(Jr),l=ui.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*c-o,d=r*o-c,_=s*h,u>=0)if(d>=-_)if(d<=_){const m=1/h;u*=m,d*=m,f=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ta).addScaledVector(Jr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,s){Aa.subVectors(e,t),Kr.subVectors(n,t),Ca.crossVectors(Aa,Kr);let r=this.direction.dot(Ca),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ui.subVectors(this.origin,t);const c=o*this.direction.dot(Kr.crossVectors(ui,Kr));if(c<0)return null;const l=o*this.direction.dot(Aa.cross(ui));if(l<0||c+l>r)return null;const h=-o*ui.dot(Ca);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,c,l,h,u,d,f,_,m,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/fs.setFromMatrixColumn(t,0).length(),s=1/fs.setFromMatrixColumn(t,1).length(),r=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=r*h,f=r*u,_=o*h,m=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-m*l,e[9]=-o*c,e[2]=m-d*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,m=l*u;e[0]=d+m*o,e[4]=_*o-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=f*o-_,e[6]=m+d*o,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,m=l*u;e[0]=d-m*o,e[4]=-r*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=r*h,e[9]=m-d*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=o*h,m=o*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+m,e[1]=c*u,e[5]=m*l+d,e[9]=f*l-_,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,_=o*c,m=o*l;e[0]=c*h,e[4]=m-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-m*u}else if(t.order==="XZY"){const d=r*c,f=r*l,_=o*c,m=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+m,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Np)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),di.crossVectors(n,Xe),di.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),di.crossVectors(n,Xe)),di.normalize(),Qr.crossVectors(Xe,di),i[0]=di.x,i[4]=Qr.x,i[8]=Xe.x,i[1]=di.y,i[5]=Qr.y,i[9]=Xe.y,i[2]=di.z,i[6]=Qr.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],m=n[6],g=n[10],p=n[14],y=n[3],v=n[7],x=n[11],b=n[15],w=i[0],E=i[4],A=i[8],M=i[12],S=i[1],U=i[5],N=i[9],D=i[13],z=i[2],O=i[6],G=i[10],W=i[14],B=i[3],K=i[7],X=i[11],pt=i[15];return s[0]=r*w+o*S+c*z+l*B,s[4]=r*E+o*U+c*O+l*K,s[8]=r*A+o*N+c*G+l*X,s[12]=r*M+o*D+c*W+l*pt,s[1]=h*w+u*S+d*z+f*B,s[5]=h*E+u*U+d*O+f*K,s[9]=h*A+u*N+d*G+f*X,s[13]=h*M+u*D+d*W+f*pt,s[2]=_*w+m*S+g*z+p*B,s[6]=_*E+m*U+g*O+p*K,s[10]=_*A+m*N+g*G+p*X,s[14]=_*M+m*D+g*W+p*pt,s[3]=y*w+v*S+x*z+b*B,s[7]=y*E+v*U+x*O+b*K,s[11]=y*A+v*N+x*G+b*X,s[15]=y*M+v*D+x*W+b*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],m=t[7],g=t[11],p=t[15];return _*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*f-n*c*f)+m*(+e*c*f-e*l*d+s*r*d-i*r*f+i*l*h-s*c*h)+g*(+e*l*u-e*o*f-s*r*u+n*r*f+s*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*d+i*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],m=t[13],g=t[14],p=t[15],y=u*g*l-m*d*l+m*c*f-o*g*f-u*c*p+o*d*p,v=_*d*l-h*g*l-_*c*f+r*g*f+h*c*p-r*d*p,x=h*m*l-_*u*l+_*o*f-r*m*f-h*o*p+r*u*p,b=_*u*c-h*m*c-_*o*d+r*m*d+h*o*g-r*u*g,w=e*y+n*v+i*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=y*E,t[1]=(m*d*s-u*g*s-m*i*f+n*g*f+u*i*p-n*d*p)*E,t[2]=(o*g*s-m*c*s+m*i*l-n*g*l-o*i*p+n*c*p)*E,t[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*E,t[4]=v*E,t[5]=(h*g*s-_*d*s+_*i*f-e*g*f-h*i*p+e*d*p)*E,t[6]=(_*c*s-r*g*s-_*i*l+e*g*l+r*i*p-e*c*p)*E,t[7]=(r*d*s-h*c*s+h*i*l-e*d*l-r*i*f+e*c*f)*E,t[8]=x*E,t[9]=(_*u*s-h*m*s-_*n*f+e*m*f+h*n*p-e*u*p)*E,t[10]=(r*m*s-_*o*s+_*n*l-e*m*l-r*n*p+e*o*p)*E,t[11]=(h*o*s-r*u*s-h*n*l+e*u*l+r*n*f-e*o*f)*E,t[12]=b*E,t[13]=(h*m*i-_*u*i+_*n*d-e*m*d-h*n*g+e*u*g)*E,t[14]=(_*o*i-r*m*i-_*n*c+e*m*c+r*n*g-e*o*g)*E,t[15]=(r*u*i-h*o*i+h*n*c-e*u*c-r*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,c=t.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,c=e._w,l=s+s,h=r+r,u=o+o,d=s*l,f=s*h,_=s*u,m=r*h,g=r*u,p=o*u,y=c*l,v=c*h,x=c*u,b=n.x,w=n.y,E=n.z;return i[0]=(1-(m+p))*b,i[1]=(f+x)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(_+v)*E,i[9]=(g-y)*E,i[10]=(1-(d+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=fs.set(i[0],i[1],i[2]).length();const r=fs.set(i[4],i[5],i[6]).length(),o=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const l=1/s,h=1/r,u=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,c=1/(e-t),l=1/(n-i),h=1/(r-s),u=(e+t)*c,d=(n+i)*l,f=(r+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new P,vn=new se,Op=new P(0,0,0),Np=new P(1,1,1),di=new P,Qr=new P,Xe=new P,nh=new se,ih=new ii;class Jo{constructor(t=0,e=0,n=0,i=Jo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jo.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fp=0;const sh=new P,ps=new ii,Hn=new se,to=new P,ur=new P,Bp=new P,kp=new ii,rh=new P(1,0,0),oh=new P(0,1,0),ah=new P(0,0,1),Vp={type:"added"},lh={type:"removed"};class ae extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new P,e=new Jo,n=new ii,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(rh,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rh,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ur,to,this.up):Hn.lookAt(to,ur,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Hn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(lh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ae.DEFAULT_UP=new P(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new P,Wn=new P,La=new P,jn=new P,ms=new P,gs=new P,ch=new P,Pa=new P,Ra=new P,Da=new P;let eo=!1;class Sn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),Wn.subVectors(n,e),La.subVectors(t,e);const r=yn.dot(yn),o=yn.dot(Wn),c=yn.dot(La),l=Wn.dot(Wn),h=Wn.dot(La),u=r*l-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(l*c-o*h)*d,_=(r*h-o*c)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(t,e,n,i,s,r,o,c){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),this.getInterpolation(t,e,n,i,s,r,o,c)}static getInterpolation(t,e,n,i,s,r,o,c){return this.getBarycoord(t,e,n,i,jn),c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(r,jn.y),c.addScaledVector(o,jn.z),c}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Wn.subVectors(t,e),yn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),eo=!0),Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;ms.subVectors(i,n),gs.subVectors(s,n),Pa.subVectors(t,n);const c=ms.dot(Pa),l=gs.dot(Pa);if(c<=0&&l<=0)return e.copy(n);Ra.subVectors(t,i);const h=ms.dot(Ra),u=gs.dot(Ra);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(ms,r);Da.subVectors(t,s);const f=ms.dot(Da),_=gs.dot(Da);if(_>=0&&f<=_)return e.copy(s);const m=f*l-c*_;if(m<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(gs,o);const g=h*_-f*u;if(g<=0&&u-h>=0&&f-_>=0)return ch.subVectors(s,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(ch,o);const p=1/(g+m+d);return r=m*p,o=d*p,e.copy(n).addScaledVector(ms,r).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Gp=0;class si extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Fs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fu,this.blendDst=Bu,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},no={h:0,s:0,l:0};function za(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qe.workingColorSpace){if(t=Ep(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=za(r,s,t+1/3),this.g=za(r,s,t),this.b=za(r,s,t-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(t,e=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,qe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,qe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){const n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return qe.fromWorkingColorSpace(Ae.copy(this),t),Me(Ae.r*255,0,255)<<16^Me(Ae.g*255,0,255)<<8^Me(Ae.b*255,0,255)<<0}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,s=Ae.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Dn){qe.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(bn),bn.h+=t,bn.s+=e,bn.l+=n,this.setHSL(bn.h,bn.s,bn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(no);const n=va(bn.h,no.h,e),i=va(bn.s,no.s,e),s=va(bn.l,no.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Vt;Vt.NAMES=Zu;class Ke extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new P,io=new lt;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $u extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ju extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hp=0;const on=new se,Ia=new ae,_s=new P,Ye=new ss,dr=new ss,ye=new P;class ue extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Ju:$u)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ye.min,dr.min),Ye.expandByPoint(ye),ye.addVectors(Ye.max,dr.max),Ye.expandByPoint(ye)):(Ye.expandByPoint(dr.min),Ye.expandByPoint(dr.max))}Ye.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ye.fromBufferAttribute(o,l),c&&(_s.fromBufferAttribute(t,l),ye.add(_s)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<o;S++)l[S]=new P,h[S]=new P;const u=new P,d=new P,f=new P,_=new lt,m=new lt,g=new lt,p=new P,y=new P;function v(S,U,N){u.fromArray(i,S*3),d.fromArray(i,U*3),f.fromArray(i,N*3),_.fromArray(r,S*2),m.fromArray(r,U*2),g.fromArray(r,N*2),d.sub(u),f.sub(u),m.sub(_),g.sub(_);const D=1/(m.x*g.y-g.x*m.y);!isFinite(D)||(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),y.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(D),l[S].add(p),l[U].add(p),l[N].add(p),h[S].add(y),h[U].add(y),h[N].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,U=x.length;S<U;++S){const N=x[S],D=N.start,z=N.count;for(let O=D,G=D+z;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new P,w=new P,E=new P,A=new P;function M(S){E.fromArray(s,S*3),A.copy(E);const U=l[S];b.copy(U),b.sub(E.multiplyScalar(E.dot(U))).normalize(),w.crossVectors(A,U);const D=w.dot(h[S])<0?-1:1;c[S*4]=b.x,c[S*4+1]=b.y,c[S*4+2]=b.z,c[S*4+3]=D}for(let S=0,U=x.length;S<U;++S){const N=x[S],D=N.start,z=N.count;for(let O=D,G=D+z;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,r=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),m=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let m=0,g=c.length;m<g;m++){o.isInterleavedBufferAttribute?f=c[m]*o.data.stride+o.offset:f=c[m]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new se,Rn=new $o,so=new or,uh=new P,xs=new P,vs=new P,ys=new P,Ua=new P,ro=new P,oo=new lt,ao=new lt,lo=new lt,dh=new P,fh=new P,ph=new P,co=new P,ho=new P;class Xt extends ae{constructor(t=new ue,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ro.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Ua.fromBufferAttribute(u,t),r?ro.addScaledVector(Ua,h):ro.addScaledVector(Ua.sub(e),h))}e.add(ro)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),Rn.copy(t.ray).recast(t.near),so.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(so,uh)===null||Rn.origin.distanceToSquared(uh)>(t.far-t.near)**2))||(hh.copy(s).invert(),Rn.copy(t.ray).applyMatrix4(hh),n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,m=d.length;_<m;_++){const g=d[_],p=i[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,b=v;x<b;x+=3){const w=o.getX(x),E=o.getX(x+1),A=o.getX(x+2);r=uo(this,p,t,Rn,l,h,u,w,E,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let g=_,p=m;g<p;g+=3){const y=o.getX(g),v=o.getX(g+1),x=o.getX(g+2);r=uo(this,i,t,Rn,l,h,u,y,v,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(i))for(let _=0,m=d.length;_<m;_++){const g=d[_],p=i[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,b=v;x<b;x+=3){const w=x,E=x+1,A=x+2;r=uo(this,p,t,Rn,l,h,u,w,E,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),m=Math.min(c.count,f.start+f.count);for(let g=_,p=m;g<p;g+=3){const y=g,v=g+1,x=g+2;r=uo(this,i,t,Rn,l,h,u,y,v,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Wp(a,t,e,n,i,s,r,o){let c;if(t.side===Be?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,t.side===Ei,o),c===null)return null;ho.copy(o),ho.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(ho);return l<e.near||l>e.far?null:{distance:l,point:ho.clone(),object:a}}function uo(a,t,e,n,i,s,r,o,c,l){a.getVertexPosition(o,xs),a.getVertexPosition(c,vs),a.getVertexPosition(l,ys);const h=Wp(a,t,e,n,xs,vs,ys,co);if(h){i&&(oo.fromBufferAttribute(i,o),ao.fromBufferAttribute(i,c),lo.fromBufferAttribute(i,l),h.uv=Sn.getInterpolation(co,xs,vs,ys,oo,ao,lo,new lt)),s&&(oo.fromBufferAttribute(s,o),ao.fromBufferAttribute(s,c),lo.fromBufferAttribute(s,l),h.uv2=Sn.getInterpolation(co,xs,vs,ys,oo,ao,lo,new lt)),r&&(dh.fromBufferAttribute(r,o),fh.fromBufferAttribute(r,c),ph.fromBufferAttribute(r,l),h.normal=Sn.getInterpolation(co,xs,vs,ys,dh,fh,ph,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};Sn.getNormal(xs,vs,ys,u.normal),h.face=u}return h}class Gr extends ue{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,r,s,0),_("z","y","x",1,-1,n,e,-t,r,s,1),_("x","z","y",1,1,t,n,e,i,r,2),_("x","z","y",1,-1,t,n,-e,i,r,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function _(m,g,p,y,v,x,b,w,E,A,M){const S=x/E,U=b/A,N=x/2,D=b/2,z=w/2,O=E+1,G=A+1;let W=0,B=0;const K=new P;for(let X=0;X<G;X++){const pt=X*U-D;for(let nt=0;nt<O;nt++){const q=nt*S-N;K[m]=q*y,K[g]=pt*v,K[p]=z,l.push(K.x,K.y,K.z),K[m]=0,K[g]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(nt/E),u.push(1-X/A),W+=1}}for(let X=0;X<A;X++)for(let pt=0;pt<E;pt++){const nt=d+pt+O*X,q=d+pt+O*(X+1),$=d+(pt+1)+O*(X+1),ct=d+(pt+1)+O*X;c.push(nt,q,ct),c.push(q,$,ct),B+=6}o.addGroup(f,B,M),f+=B,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(a){const t={};for(let e=0;e<a.length;e++){const n=Js(a[e]);for(const i in n)t[i]=n[i]}return t}function jp(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Ku(a){return a.getRenderTarget()===null&&a.outputEncoding===Kt?Dn:Pr}const Qu={clone:Js,merge:Ue};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class td extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends td{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,Ms=1;class Yp extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wn(bs,Ms,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new wn(bs,Ms,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new wn(bs,Ms,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new wn(bs,Ms,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new wn(bs,Ms,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new wn(bs,Ms,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=ei,t.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ed extends en{constructor(t,e,n,i,s,r,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zp extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ed(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gr(5,5,5),s=new ts({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:yi});s.uniforms.tEquirect.value=e;const r=new Xt(i,s),o=e.minFilter;return e.minFilter===Cr&&(e.minFilter=un),new Yp(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Oa=new P,$p=new P,Jp=new Ht;class Bi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Oa.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jp.getNormalMatrix(t),i=this.coplanarPoint(Oa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new or,fo=new P;class Wl{constructor(t=new Bi,e=new Bi,n=new Bi,i=new Bi,s=new Bi,r=new Bi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],f=n[9],_=n[10],m=n[11],g=n[12],p=n[13],y=n[14],v=n[15];return e[0].setComponents(o-i,u-c,m-d,v-g).normalize(),e[1].setComponents(o+i,u+c,m+d,v+g).normalize(),e[2].setComponents(o+s,u+l,m+f,v+p).normalize(),e[3].setComponents(o-s,u-l,m-f,v-p).normalize(),e[4].setComponents(o-r,u-h,m-_,v-y).normalize(),e[5].setComponents(o+r,u+h,m+_,v+y).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fo.x=i.normal.x>0?t.max.x:t.min.x,fo.y=i.normal.y>0?t.max.y:t.min.y,fo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nd(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Kp(a,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=a.createBuffer();a.bindBuffer(h,f),a.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,f=h.updateRange;a.bindBuffer(u,l),f.count===-1?a.bufferSubData(u,0,d):(e?a.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(a.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:r,remove:o,update:c}}class Oe extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],_=[],m=[],g=[];for(let p=0;p<h;p++){const y=p*d-r;for(let v=0;v<l;v++){const x=v*u-s;_.push(x,-y,0),m.push(0,0,1),g.push(v/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const v=y+l*p,x=y+l*(p+1),b=y+1+l*(p+1),w=y+1+l*p;f.push(v,x,w),f.push(x,b,w)}this.setIndex(f),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(m,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qp=`#ifdef USE_ALPHAMAP
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
#endif`,rm="vec3 transformed = vec3( position );",om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearToLinear( in vec4 value ) {
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
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
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
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
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
}`,o0=`uniform float scale;
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
}`,a0=`uniform vec3 diffuse;
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
}`,E0=`uniform vec3 color;
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
}`,T0=`uniform float rotation;
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
}`,Nt={alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,begin_vertex:rm,beginnormal_vertex:om,bsdfs:am,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:bm,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:wm,encodings_fragment:Em,encodings_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Lm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Gm,envmap_vertex:Rm,fog_vertex:Dm,fog_pars_vertex:zm,fog_fragment:Im,fog_pars_fragment:Um,gradientmap_pars_fragment:Om,lightmap_fragment:Nm,lightmap_pars_fragment:Fm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:Vm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Wm,lights_phong_fragment:jm,lights_phong_pars_fragment:qm,lights_physical_fragment:Xm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Zm,lights_fragment_maps:$m,lights_fragment_end:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:eg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:og,metalnessmap_pars_fragment:ag,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:bg,output_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:wg,project_vertex:Eg,dithering_fragment:Tg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Dg,shadowmask_pars_fragment:zg,skinbase_vertex:Ig,skinning_pars_vertex:Ug,skinning_vertex:Og,skinnormal_vertex:Ng,specularmap_fragment:Fg,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Hg,uv_pars_fragment:Wg,uv_pars_vertex:jg,uv_vertex:qg,worldpos_vertex:Xg,background_vert:Yg,background_frag:Zg,backgroundCube_vert:$g,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:Qg,depth_vert:t0,depth_frag:e0,distanceRGBA_vert:n0,distanceRGBA_frag:i0,equirect_vert:s0,equirect_frag:r0,linedashed_vert:o0,linedashed_frag:a0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:d0,meshmatcap_frag:f0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:_0,meshphysical_vert:x0,meshphysical_frag:v0,meshtoon_vert:y0,meshtoon_frag:b0,points_vert:M0,points_frag:S0,shadow_vert:w0,shadow_frag:E0,sprite_vert:T0,sprite_frag:A0},ut={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}}},En={basic:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ue([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ue([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ue([ut.points,ut.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ue([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ue([ut.common,ut.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ue([ut.sprite,ut.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ue([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ue([ut.lights,ut.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};En.physical={uniforms:Ue([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const po={r:0,b:0,g:0};function C0(a,t,e,n,i,s,r){const o=new Vt(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function _(g,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v));const x=a.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?m(o,c):v&&v.isColor&&(m(v,1),y=!0),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zo)?(h===void 0&&(h=new Xt(new Gr(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Js(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=v.encoding!==Kt,(u!==v||d!==v.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=a.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xt(new Oe(2,2),new ts({name:"BackgroundMaterial",uniforms:Js(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=v.encoding!==Kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=a.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,p){g.getRGB(po,Ku(a)),n.buffers.color.setClear(po.r,po.g,po.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,m(o,c)},render:_}}function L0(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},c=g(null);let l=c,h=!1;function u(z,O,G,W,B){let K=!1;if(r){const X=m(W,G,O);l!==X&&(l=X,f(l.object)),K=p(z,W,G,B),K&&y(z,W,G,B)}else{const X=O.wireframe===!0;(l.geometry!==W.id||l.program!==G.id||l.wireframe!==X)&&(l.geometry=W.id,l.program=G.id,l.wireframe=X,K=!0)}B!==null&&e.update(B,34963),(K||h)&&(h=!1,A(z,O,G,W),B!==null&&a.bindBuffer(34963,e.get(B).buffer))}function d(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function f(z){return n.isWebGL2?a.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return n.isWebGL2?a.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function m(z,O,G){const W=G.wireframe===!0;let B=o[z.id];B===void 0&&(B={},o[z.id]=B);let K=B[O.id];K===void 0&&(K={},B[O.id]=K);let X=K[W];return X===void 0&&(X=g(d()),K[W]=X),X}function g(z){const O=[],G=[],W=[];for(let B=0;B<i;B++)O[B]=0,G[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:W,object:z,attributes:{},index:null}}function p(z,O,G,W){const B=l.attributes,K=O.attributes;let X=0;const pt=G.getAttributes();for(const nt in pt)if(pt[nt].location>=0){const $=B[nt];let ct=K[nt];if(ct===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(ct=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(ct=z.instanceColor)),$===void 0||$.attribute!==ct||ct&&$.data!==ct.data)return!0;X++}return l.attributesNum!==X||l.index!==W}function y(z,O,G,W){const B={},K=O.attributes;let X=0;const pt=G.getAttributes();for(const nt in pt)if(pt[nt].location>=0){let $=K[nt];$===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&($=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&($=z.instanceColor));const ct={};ct.attribute=$,$&&$.data&&(ct.data=$.data),B[nt]=ct,X++}l.attributes=B,l.attributesNum=X,l.index=W}function v(){const z=l.newAttributes;for(let O=0,G=z.length;O<G;O++)z[O]=0}function x(z){b(z,0)}function b(z,O){const G=l.newAttributes,W=l.enabledAttributes,B=l.attributeDivisors;G[z]=1,W[z]===0&&(a.enableVertexAttribArray(z),W[z]=1),B[z]!==O&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,O),B[z]=O)}function w(){const z=l.newAttributes,O=l.enabledAttributes;for(let G=0,W=O.length;G<W;G++)O[G]!==z[G]&&(a.disableVertexAttribArray(G),O[G]=0)}function E(z,O,G,W,B,K){n.isWebGL2===!0&&(G===5124||G===5125)?a.vertexAttribIPointer(z,O,G,B,K):a.vertexAttribPointer(z,O,G,W,B,K)}function A(z,O,G,W){if(n.isWebGL2===!1&&(z.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const B=W.attributes,K=G.getAttributes(),X=O.defaultAttributeValues;for(const pt in K){const nt=K[pt];if(nt.location>=0){let q=B[pt];if(q===void 0&&(pt==="instanceMatrix"&&z.instanceMatrix&&(q=z.instanceMatrix),pt==="instanceColor"&&z.instanceColor&&(q=z.instanceColor)),q!==void 0){const $=q.normalized,ct=q.itemSize,mt=e.get(q);if(mt===void 0)continue;const V=mt.buffer,Pt=mt.type,Lt=mt.bytesPerElement;if(q.isInterleavedBufferAttribute){const at=q.data,bt=at.stride,it=q.offset;if(at.isInstancedInterleavedBuffer){for(let J=0;J<nt.locationSize;J++)b(nt.location+J,at.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let J=0;J<nt.locationSize;J++)x(nt.location+J);a.bindBuffer(34962,V);for(let J=0;J<nt.locationSize;J++)E(nt.location+J,ct/nt.locationSize,Pt,$,bt*Lt,(it+ct/nt.locationSize*J)*Lt)}else{if(q.isInstancedBufferAttribute){for(let at=0;at<nt.locationSize;at++)b(nt.location+at,q.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let at=0;at<nt.locationSize;at++)x(nt.location+at);a.bindBuffer(34962,V);for(let at=0;at<nt.locationSize;at++)E(nt.location+at,ct/nt.locationSize,Pt,$,ct*Lt,ct/nt.locationSize*at*Lt)}}else if(X!==void 0){const $=X[pt];if($!==void 0)switch($.length){case 2:a.vertexAttrib2fv(nt.location,$);break;case 3:a.vertexAttrib3fv(nt.location,$);break;case 4:a.vertexAttrib4fv(nt.location,$);break;default:a.vertexAttrib1fv(nt.location,$)}}}}w()}function M(){N();for(const z in o){const O=o[z];for(const G in O){const W=O[G];for(const B in W)_(W[B].object),delete W[B];delete O[G]}delete o[z]}}function S(z){if(o[z.id]===void 0)return;const O=o[z.id];for(const G in O){const W=O[G];for(const B in W)_(W[B].object),delete W[B];delete O[G]}delete o[z.id]}function U(z){for(const O in o){const G=o[O];if(G[z.id]===void 0)continue;const W=G[z.id];for(const B in W)_(W[B].object),delete W[B];delete G[z.id]}}function N(){D(),h=!0,l!==c&&(l=c,f(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:N,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:x,disableUnusedAttributes:w}}function P0(a,t,e,n){const i=n.isWebGL2;let s;function r(l){s=l}function o(l,h){a.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,f;if(i)d=a,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,h,u),e.update(h,s,u)}this.setMode=r,this.render=o,this.renderInstances=c}function R0(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=a.getParameter(34930),d=a.getParameter(35660),f=a.getParameter(3379),_=a.getParameter(34076),m=a.getParameter(34921),g=a.getParameter(36347),p=a.getParameter(36348),y=a.getParameter(36349),v=d>0,x=r||t.has("OES_texture_float"),b=v&&x,w=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:w}}function D0(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Bi,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,p=a.get(u);if(!i||_===null||_.length===0||s&&!g)s?h(null):l();else{const y=s?0:n,v=y*4;let x=p.clippingState||null;c.value=x,x=h(_,d,v,f);for(let b=0;b!==v;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=c.value,_!==!0||g===null){const p=f+m*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,x=f;v!==m;++v,x+=4)r.copy(u[v]).applyMatrix4(y,o),r.normal.toArray(g,x),g[x+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}function z0(a){let t=new WeakMap;function e(r,o){return o===hl?r.mapping=Ys:o===ul&&(r.mapping=Zs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===hl||o===ul)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Zp(c.height/2);return l.fromEquirectangularTexture(a,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ko extends td{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Is=4,mh=[.125,.215,.35,.446,.526,.582],Gi=20,Na=new Ko,gh=new Vt;let Fa=null;const ki=(1+Math.sqrt(5))/2,Ss=1/ki,_h=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ki,Ss),new P(0,ki,-Ss),new P(Ss,0,ki),new P(-Ss,0,ki),new P(ki,Ss,0),new P(-ki,Ss,0)];class xh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa),t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Lr,format:Cn,encoding:Ki,depthBuffer:!1},i=vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(s)),this._blurMaterial=U0(s,t,e)}return i}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,i){const o=new wn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gh),h.toneMapping=ei,h.autoClear=!1;const f=new Ke({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new Xt(new Gr,f);let m=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,m=!0):(f.color.copy(gh),m=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;mo(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ys||t.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;mo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=_h[(i-1)%_h.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),m=s/_,g=isFinite(s)?1+Math.floor(h*m):Gi;g>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gi}`);const p=[];let y=0;for(let E=0;E<Gi;++E){const A=E/m,M=Math.exp(-A*A/2);p.push(M),E===0?y+=M:E<g&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const x=this._sizeLods[i],b=3*x*(i>v-Is?i-v+Is:0),w=4*(this._cubeSize-x);mo(e,b,w,3*x,2*x),c.setRenderTarget(e),c.render(u,Na)}}function I0(a){const t=[],e=[],n=[];let i=a;const s=a-Is+1+mh.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let c=1/o;r>a-Is?c=mh[r-a+Is-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,m=3,g=2,p=1,y=new Float32Array(m*_*f),v=new Float32Array(g*_*f),x=new Float32Array(p*_*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,A=w>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(M,m*_*w),v.set(d,g*_*w);const S=[w,w,w,w,w,w];x.set(S,p*_*w)}const b=new ue;b.setAttribute("position",new Pe(y,m)),b.setAttribute("uv",new Pe(v,g)),b.setAttribute("faceIndex",new Pe(x,p)),t.push(b),i>Is&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vh(a,t,e){const n=new Qi(a,t,e);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function U0(a,t,e){const n=new Float32Array(Gi),i=new P(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yh(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function bh(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function O0(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===hl||c===ul,h=c===Ys||c===Zs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new xh(a)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new xh(a));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function N0(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function F0(a,t,e,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],34962);const f=u.morphAttributes;for(const _ in f){const m=f[_];for(let g=0,p=m.length;g<p;g++)t.update(m[g],34962)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let m=0;if(f!==null){const y=f.array;m=f.version;for(let v=0,x=y.length;v<x;v+=3){const b=y[v+0],w=y[v+1],E=y[v+2];d.push(b,w,w,E,E,b)}}else{const y=_.array;m=_.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const b=v+0,w=v+1,E=v+2;d.push(b,w,w,E,E,b)}}const g=new(ju(d)?Ju:$u)(d,1);g.version=m;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function B0(a,t,e,n){const i=n.isWebGL2;let s;function r(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,f){a.drawElements(s,f,o,d*c),e.update(f,s,1)}function u(d,f,_){if(_===0)return;let m,g;if(i)m=a,g="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,f,o,d*c,_),e.update(f,s,_)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u}function k0(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function V0(a,t){return a[0]-t[0]}function G0(a,t){return Math.abs(t[1])-Math.abs(a[1])}function H0(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new re,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==m){let O=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var f=O;g!==void 0&&g.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),b===!0&&(M=3);let S=h.attributes.position.count*M,U=1;S>t.maxTextureSize&&(U=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const N=new Float32Array(S*U*4*m),D=new Yu(N,S,U,m);D.type=Wi,D.needsUpdate=!0;const z=M*4;for(let G=0;G<m;G++){const W=w[G],B=E[G],K=A[G],X=S*U*4*G;for(let pt=0;pt<W.count;pt++){const nt=pt*z;v===!0&&(r.fromBufferAttribute(W,pt),N[X+nt+0]=r.x,N[X+nt+1]=r.y,N[X+nt+2]=r.z,N[X+nt+3]=0),x===!0&&(r.fromBufferAttribute(B,pt),N[X+nt+4]=r.x,N[X+nt+5]=r.y,N[X+nt+6]=r.z,N[X+nt+7]=0),b===!0&&(r.fromBufferAttribute(K,pt),N[X+nt+8]=r.x,N[X+nt+9]=r.y,N[X+nt+10]=r.z,N[X+nt+11]=K.itemSize===4?r.w:1)}}g={count:m,texture:D,size:new lt(S,U)},s.set(h,g),h.addEventListener("dispose",O)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(a,"morphTargetBaseInfluence",y),u.getUniforms().setValue(a,"morphTargetInfluences",d),u.getUniforms().setValue(a,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}else{const _=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==_){m=[];for(let x=0;x<_;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<_;x++){const b=m[x];b[0]=x,b[1]=d[x]}m.sort(G0);for(let x=0;x<8;x++)x<_&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(V0);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const b=o[x],w=b[0],E=b[1];w!==Number.MAX_SAFE_INTEGER&&E?(g&&h.getAttribute("morphTarget"+x)!==g[w]&&h.setAttribute("morphTarget"+x,g[w]),p&&h.getAttribute("morphNormal"+x)!==p[w]&&h.setAttribute("morphNormal"+x,p[w]),i[x]=E,y+=E):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(a,"morphTargetBaseInfluence",v),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function W0(a,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function r(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}const id=new en,sd=new Yu,rd=new Ip,od=new ed,Mh=[],Sh=[],wh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function ar(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=Mh[i];if(s===void 0&&(s=new Float32Array(i),Mh[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function _e(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function xe(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Qo(a,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function j0(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function q0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;a.uniform2fv(this.addr,t),xe(e,t)}}function X0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;a.uniform3fv(this.addr,t),xe(e,t)}}function Y0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;a.uniform4fv(this.addr,t),xe(e,t)}}function Z0(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Th.set(n),a.uniformMatrix2fv(this.addr,!1,Th),xe(e,n)}}function $0(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Eh.set(n),a.uniformMatrix3fv(this.addr,!1,Eh),xe(e,n)}}function J0(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;wh.set(n),a.uniformMatrix4fv(this.addr,!1,wh),xe(e,n)}}function K0(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Q0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;a.uniform2iv(this.addr,t),xe(e,t)}}function t_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;a.uniform3iv(this.addr,t),xe(e,t)}}function e_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;a.uniform4iv(this.addr,t),xe(e,t)}}function n_(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function i_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;a.uniform2uiv(this.addr,t),xe(e,t)}}function s_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;a.uniform3uiv(this.addr,t),xe(e,t)}}function r_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;a.uniform4uiv(this.addr,t),xe(e,t)}}function o_(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||id,i)}function a_(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rd,i)}function l_(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||od,i)}function c_(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sd,i)}function h_(a){switch(a){case 5126:return j0;case 35664:return q0;case 35665:return X0;case 35666:return Y0;case 35674:return Z0;case 35675:return $0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return Q0;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(a,t){a.uniform1fv(this.addr,t)}function d_(a,t){const e=ar(t,this.size,2);a.uniform2fv(this.addr,e)}function f_(a,t){const e=ar(t,this.size,3);a.uniform3fv(this.addr,e)}function p_(a,t){const e=ar(t,this.size,4);a.uniform4fv(this.addr,e)}function m_(a,t){const e=ar(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function g_(a,t){const e=ar(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function __(a,t){const e=ar(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function x_(a,t){a.uniform1iv(this.addr,t)}function v_(a,t){a.uniform2iv(this.addr,t)}function y_(a,t){a.uniform3iv(this.addr,t)}function b_(a,t){a.uniform4iv(this.addr,t)}function M_(a,t){a.uniform1uiv(this.addr,t)}function S_(a,t){a.uniform2uiv(this.addr,t)}function w_(a,t){a.uniform3uiv(this.addr,t)}function E_(a,t){a.uniform4uiv(this.addr,t)}function T_(a,t,e){const n=this.cache,i=t.length,s=Qo(e,i);_e(n,s)||(a.uniform1iv(this.addr,s),xe(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||id,s[r])}function A_(a,t,e){const n=this.cache,i=t.length,s=Qo(e,i);_e(n,s)||(a.uniform1iv(this.addr,s),xe(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||rd,s[r])}function C_(a,t,e){const n=this.cache,i=t.length,s=Qo(e,i);_e(n,s)||(a.uniform1iv(this.addr,s),xe(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||od,s[r])}function L_(a,t,e){const n=this.cache,i=t.length,s=Qo(e,i);_e(n,s)||(a.uniform1iv(this.addr,s),xe(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||sd,s[r])}function P_(a){switch(a){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return b_;case 5125:return M_;case 36294:return S_;case 36295:return w_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return L_}}class R_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=h_(e.type)}}class D_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=P_(e.type)}}class z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Ah(a,t){a.seq.push(t),a.map[t.id]=t}function I_(a,t,e){const n=a.name,i=n.length;for(Ba.lastIndex=0;;){const s=Ba.exec(n),r=Ba.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Ah(e,l===void 0?new R_(o,a,t):new D_(o,a,t));break}else{let u=e.map[o];u===void 0&&(u=new z_(o),Ah(e,u)),e=u}}}class Uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);I_(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Ch(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let U_=0;function O_(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function N_(a){switch(a){case Ki:return["Linear","( value )"];case Kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Lh(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+O_(a.getShaderSource(t),r)}else return i}function F_(a,t){const e=N_(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function B_(a,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="OptimizedCineon";break;case ip:e="ACESFilmic";break;case sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function k_(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yr).join(`
`)}function V_(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G_(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function yr(a){return a!==""}function Ph(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(a){return a.replace(H_,W_)}function W_(a,t){const e=Nt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return gl(e)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(a){return a.replace(j_,q_)}function q_(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zh(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X_(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Nu?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===zf?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===vr&&(t="SHADOWMAP_TYPE_VSM"),t}function Y_(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ys:case Zs:t="ENVMAP_TYPE_CUBE";break;case Zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z_(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function $_(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case Kf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function J_(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function K_(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=X_(e),l=Y_(e),h=Z_(e),u=$_(e),d=J_(e),f=e.isWebGL2?"":k_(e),_=V_(s),m=i.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[_].filter(yr).join(`
`),g.length>0&&(g+=`
`),p=[f,_].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(g=[zh(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[f,zh(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Nt.tonemapping_pars_fragment:"",e.toneMapping!==ei?B_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.encodings_pars_fragment,F_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),r=gl(r),r=Ph(r,e),r=Rh(r,e),o=gl(o),o=Ph(o,e),o=Rh(o,e),r=Dh(r),o=Dh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+g+r,x=y+p+o,b=Ch(i,35633,v),w=Ch(i,35632,x);if(i.attachShader(m,b),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),a.debug.checkShaderErrors){const M=i.getProgramInfoLog(m).trim(),S=i.getShaderInfoLog(b).trim(),U=i.getShaderInfoLog(w).trim();let N=!0,D=!0;if(i.getProgramParameter(m,35714)===!1)if(N=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,b,w);else{const z=Lh(i,b,"vertex"),O=Lh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+M+`
`+z+`
`+O)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||U==="")&&(D=!1);D&&(this.diagnostics={runnable:N,programLog:M,vertexShader:{log:S,prefix:g},fragmentShader:{log:U,prefix:p}})}i.deleteShader(b),i.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new Uo(i,m)),E};let A;return this.getAttributes=function(){return A===void 0&&(A=G_(i,m)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}let Q_=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ex(t),e.set(t,n)),n}}class ex{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}}function nx(a,t,e,n,i,s,r){const o=new Hl,c=new tx,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return M===1?"uv2":"uv"}function g(M,S,U,N,D){const z=N.fog,O=D.geometry,G=M.isMeshStandardMaterial?N.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),B=!!W&&W.mapping===Zo?W.image.height:null,K=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pt=X!==void 0?X.length:0;let nt=0;O.morphAttributes.position!==void 0&&(nt=1),O.morphAttributes.normal!==void 0&&(nt=2),O.morphAttributes.color!==void 0&&(nt=3);let q,$,ct,mt;if(K){const xt=En[K];q=xt.vertexShader,$=xt.fragmentShader}else q=M.vertexShader,$=M.fragmentShader,c.update(M),ct=c.getVertexShaderID(M),mt=c.getFragmentShaderID(M);const V=a.getRenderTarget(),Pt=D.isInstancedMesh===!0,Lt=!!M.map,at=!!M.matcap,bt=!!W,it=!!M.aoMap,J=!!M.lightMap,et=!!M.bumpMap,vt=!!M.normalMap,ht=!!M.displacementMap,At=!!M.emissiveMap,Ct=!!M.metalnessMap,wt=!!M.roughnessMap,It=M.clearcoat>0,jt=M.iridescence>0,L=M.sheen>0,T=M.transmission>0,j=It&&!!M.clearcoatMap,st=It&&!!M.clearcoatNormalMap,rt=It&&!!M.clearcoatRoughnessMap,dt=jt&&!!M.iridescenceMap,R=jt&&!!M.iridescenceThicknessMap,tt=L&&!!M.sheenColorMap,H=L&&!!M.sheenRoughnessMap,ft=!!M.specularMap,yt=!!M.specularColorMap,St=!!M.specularIntensityMap,_t=T&&!!M.transmissionMap,Mt=T&&!!M.thicknessMap,Dt=!!M.gradientMap,Ft=!!M.alphaMap,le=M.alphaTest>0,I=!!M.extensions,Z=!!O.attributes.uv2;return{isWebGL2:h,shaderID:K,shaderName:M.type,vertexShader:q,fragmentShader:$,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?a.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Ki,map:Lt,matcap:at,envMap:bt,envMapMode:bt&&W.mapping,envMapCubeUVHeight:B,aoMap:it,lightMap:J,bumpMap:et,normalMap:vt,displacementMap:d&&ht,emissiveMap:At,normalMapObjectSpace:vt&&M.normalMapType===Sp,normalMapTangentSpace:vt&&M.normalMapType===Hu,decodeVideoTexture:Lt&&M.map.isVideoTexture===!0&&M.map.encoding===Kt,metalnessMap:Ct,roughnessMap:wt,clearcoat:It,clearcoatMap:j,clearcoatNormalMap:st,clearcoatRoughnessMap:rt,iridescence:jt,iridescenceMap:dt,iridescenceThicknessMap:R,sheen:L,sheenColorMap:tt,sheenRoughnessMap:H,specularMap:ft,specularColorMap:yt,specularIntensityMap:St,transmission:T,transmissionMap:_t,thicknessMap:Mt,gradientMap:Dt,opaque:M.transparent===!1&&M.blending===Fs,alphaMap:Ft,alphaTest:le,combine:M.combine,mapUv:Lt&&m(M.map.channel),aoMapUv:it&&m(M.aoMap.channel),lightMapUv:J&&m(M.lightMap.channel),bumpMapUv:et&&m(M.bumpMap.channel),normalMapUv:vt&&m(M.normalMap.channel),displacementMapUv:ht&&m(M.displacementMap.channel),emissiveMapUv:At&&m(M.emissiveMap.channel),metalnessMapUv:Ct&&m(M.metalnessMap.channel),roughnessMapUv:wt&&m(M.roughnessMap.channel),clearcoatMapUv:j&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:R&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:H&&m(M.sheenRoughnessMap.channel),specularMapUv:ft&&m(M.specularMap.channel),specularColorMapUv:yt&&m(M.specularColorMap.channel),specularIntensityMapUv:St&&m(M.specularIntensityMap.channel),transmissionMapUv:_t&&m(M.transmissionMap.channel),thicknessMapUv:Mt&&m(M.thicknessMap.channel),alphaMapUv:Ft&&m(M.alphaMap.channel),vertexTangents:vt&&!!O.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs2:Z,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Lt||Ft),fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&U.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:ei,useLegacyLights:a.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tn,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:I&&M.extensions.derivatives===!0,extensionFragDepth:I&&M.extensions.fragDepth===!0,extensionDrawBuffers:I&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)S.push(U),S.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(a.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUvs2&&o.enable(13),S.vertexTangents&&o.enable(14),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.decodeVideoTexture&&o.enable(17),S.opaque&&o.enable(18),S.pointsUvs&&o.enable(19),M.push(o.mask)}function x(M){const S=_[M.type];let U;if(S){const N=En[S];U=Qu.clone(N.uniforms)}else U=M.uniforms;return U}function b(M,S){let U;for(let N=0,D=l.length;N<D;N++){const z=l[N];if(z.cacheKey===S){U=z,++U.usedTimes;break}}return U===void 0&&(U=new K_(a,S,M,s),l.push(U)),U}function w(M){if(--M.usedTimes===0){const S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:A}}function ix(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function sx(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Ih(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Uh(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,f,_,m,g){let p=a[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},a[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=m,p.group=g),t++,p}function o(u,d,f,_,m,g){const p=r(u,d,f,_,m,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,_,m,g){const p=r(u,d,f,_,m,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||sx),n.length>1&&n.sort(d||Ih),i.length>1&&i.sort(d||Ih)}function h(){for(let u=t,d=a.length;u<d;u++){const f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function rx(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new Uh,a.set(n,[r])):i>=s.length?(r=new Uh,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function ox(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Vt};break;case"SpotLight":e={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return a[t.id]=e,e}}}function ax(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let lx=0;function cx(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function hx(a,t){const e=new ox,n=ax(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,r=new se,o=new se;function c(h,u){let d=0,f=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,g=0,p=0,y=0,v=0,x=0,b=0,w=0,E=0,A=0;h.sort(cx);const M=u===!0?Math.PI:1;for(let U=0,N=h.length;U<N;U++){const D=h[U],z=D.color,O=D.intensity,G=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=z.r*O*M,f+=z.g*O*M,_+=z.b*O*M;else if(D.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],O);else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const K=D.shadow,X=n.get(D);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.directionalShadow[m]=X,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=D.shadow.matrix,x++}i.directional[m]=B,m++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(z).multiplyScalar(O*M),B.distance=G,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[p]=B;const K=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,K.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[p]=K.matrix,D.castShadow){const X=n.get(D);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.spotShadow[p]=X,i.spotShadowMap[p]=W,w++}p++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(z).multiplyScalar(O),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=B,y++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*M),B.distance=D.distance,B.decay=D.decay,D.castShadow){const K=D.shadow,X=n.get(D);X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=B,g++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(O*M),B.groundColor.copy(D.groundColor).multiplyScalar(O*M),i.hemi[v]=B,v++}}y>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;const S=i.hash;(S.directionalLength!==m||S.pointLength!==g||S.spotLength!==p||S.rectAreaLength!==y||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==b||S.numSpotShadows!==w||S.numSpotMaps!==E)&&(i.directional.length=m,i.spot.length=p,i.rectArea.length=y,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,S.directionalLength=m,S.pointLength=g,S.spotLength=p,S.rectAreaLength=y,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=b,S.numSpotShadows=w,S.numSpotMaps=E,i.version=lx++)}function l(h,u){let d=0,f=0,_=0,m=0,g=0;const p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const x=h[y];if(x.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(x.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:i}}function Oh(a,t){const e=new hx(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function ux(a,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let c;return o===void 0?(c=new Oh(a,t),e.set(s,[c])):r>=o.length?(c=new Oh(a,t),o.push(c)):c=o[r],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class dx extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fx extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const px=`void main() {
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
}`;function gx(a,t,e){let n=new Wl;const i=new lt,s=new lt,r=new re,o=new dx({depthPacking:Mp}),c=new fx,l={},h=e.maxTextureSize,u={[Ei]:Be,[Be]:Ei,[Tn]:Tn},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:px,fragmentShader:mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ue;_.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu,this.render=function(x,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;const E=a.getRenderTarget(),A=a.getActiveCubeFace(),M=a.getActiveMipmapLevel(),S=a.state;S.setBlending(yi),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let U=0,N=x.length;U<N;U++){const D=x[U],z=D.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const O=z.getFrameExtents();if(i.multiply(O),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,z.mapSize.y=s.y)),z.map===null){const W=this.type!==vr?{minFilter:Ne,magFilter:Ne}:{};z.map=new Qi(i.x,i.y,W),z.map.texture.name=D.name+".shadowMap",z.camera.updateProjectionMatrix()}a.setRenderTarget(z.map),a.clear();const G=z.getViewportCount();for(let W=0;W<G;W++){const B=z.getViewport(W);r.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),S.viewport(r),z.updateMatrices(D,W),n=z.getFrustum(),v(b,w,z.camera,D,this.type)}z.isPointLightShadow!==!0&&this.type===vr&&p(z,w),z.needsUpdate=!1}g.needsUpdate=!1,a.setRenderTarget(E,A,M)};function p(x,b){const w=t.update(m);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Qi(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(b,null,w,d,m,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(b,null,w,f,m,null)}function y(x,b,w,E){let A=null;const M=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(M!==void 0)A=M;else if(A=w.isPointLight===!0?c:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const S=A.uuid,U=b.uuid;let N=l[S];N===void 0&&(N={},l[S]=N);let D=N[U];D===void 0&&(D=A.clone(),N[U]=D),A=D}if(A.visible=b.visible,A.wireframe=b.wireframe,E===vr?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:u[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,w.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const S=a.properties.get(A);S.light=w}return A}function v(x,b,w,E,A){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===vr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const U=t.update(x),N=x.material;if(Array.isArray(N)){const D=U.groups;for(let z=0,O=D.length;z<O;z++){const G=D[z],W=N[G.materialIndex];if(W&&W.visible){const B=y(x,W,E,A);a.renderBufferDirect(w,null,U,B,x,G)}}}else if(N.visible){const D=y(x,N,E,A);a.renderBufferDirect(w,null,U,D,x,null)}}const S=x.children;for(let U=0,N=S.length;U<N;U++)v(S[U],b,w,E,A)}}function _x(a,t,e){const n=e.isWebGL2;function i(){let I=!1;const Z=new re;let ot=null;const xt=new re(0,0,0,0);return{setMask:function(Et){ot!==Et&&!I&&(a.colorMask(Et,Et,Et,Et),ot=Et)},setLocked:function(Et){I=Et},setClear:function(Et,Jt,Qt,Ee,li){li===!0&&(Et*=Ee,Jt*=Ee,Qt*=Ee),Z.set(Et,Jt,Qt,Ee),xt.equals(Z)===!1&&(a.clearColor(Et,Jt,Qt,Ee),xt.copy(Z))},reset:function(){I=!1,ot=null,xt.set(-1,0,0,0)}}}function s(){let I=!1,Z=null,ot=null,xt=null;return{setTest:function(Et){Et?V(2929):Pt(2929)},setMask:function(Et){Z!==Et&&!I&&(a.depthMask(Et),Z=Et)},setFunc:function(Et){if(ot!==Et){switch(Et){case qf:a.depthFunc(512);break;case ku:a.depthFunc(519);break;case Xf:a.depthFunc(513);break;case cl:a.depthFunc(515);break;case Yf:a.depthFunc(514);break;case Zf:a.depthFunc(518);break;case $f:a.depthFunc(516);break;case Jf:a.depthFunc(517);break;default:a.depthFunc(515)}ot=Et}},setLocked:function(Et){I=Et},setClear:function(Et){xt!==Et&&(a.clearDepth(Et),xt=Et)},reset:function(){I=!1,Z=null,ot=null,xt=null}}}function r(){let I=!1,Z=null,ot=null,xt=null,Et=null,Jt=null,Qt=null,Ee=null,li=null;return{setTest:function(ce){I||(ce?V(2960):Pt(2960))},setMask:function(ce){Z!==ce&&!I&&(a.stencilMask(ce),Z=ce)},setFunc:function(ce,rn,Pn){(ot!==ce||xt!==rn||Et!==Pn)&&(a.stencilFunc(ce,rn,Pn),ot=ce,xt=rn,Et=Pn)},setOp:function(ce,rn,Pn){(Jt!==ce||Qt!==rn||Ee!==Pn)&&(a.stencilOp(ce,rn,Pn),Jt=ce,Qt=rn,Ee=Pn)},setLocked:function(ce){I=ce},setClear:function(ce){li!==ce&&(a.clearStencil(ce),li=ce)},reset:function(){I=!1,Z=null,ot=null,xt=null,Et=null,Jt=null,Qt=null,Ee=null,li=null}}}const o=new i,c=new s,l=new r,h=new WeakMap,u=new WeakMap;let d={},f={},_=new WeakMap,m=[],g=null,p=!1,y=null,v=null,x=null,b=null,w=null,E=null,A=null,M=!1,S=null,U=null,N=null,D=null,z=null;const O=a.getParameter(35661);let G=!1,W=0;const B=a.getParameter(7938);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=W>=2);let K=null,X={};const pt=a.getParameter(3088),nt=a.getParameter(2978),q=new re().fromArray(pt),$=new re().fromArray(nt);function ct(I,Z,ot){const xt=new Uint8Array(4),Et=a.createTexture();a.bindTexture(I,Et),a.texParameteri(I,10241,9728),a.texParameteri(I,10240,9728);for(let Jt=0;Jt<ot;Jt++)a.texImage2D(Z+Jt,0,6408,1,1,0,6408,5121,xt);return Et}const mt={};mt[3553]=ct(3553,3553,1),mt[34067]=ct(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),V(2929),c.setFunc(cl),ht(!1),At(Mc),V(2884),et(yi);function V(I){d[I]!==!0&&(a.enable(I),d[I]=!0)}function Pt(I){d[I]!==!1&&(a.disable(I),d[I]=!1)}function Lt(I,Z){return f[I]!==Z?(a.bindFramebuffer(I,Z),f[I]=Z,n&&(I===36009&&(f[36160]=Z),I===36160&&(f[36009]=Z)),!0):!1}function at(I,Z){let ot=m,xt=!1;if(I)if(ot=_.get(Z),ot===void 0&&(ot=[],_.set(Z,ot)),I.isWebGLMultipleRenderTargets){const Et=I.texture;if(ot.length!==Et.length||ot[0]!==36064){for(let Jt=0,Qt=Et.length;Jt<Qt;Jt++)ot[Jt]=36064+Jt;ot.length=Et.length,xt=!0}}else ot[0]!==36064&&(ot[0]=36064,xt=!0);else ot[0]!==1029&&(ot[0]=1029,xt=!0);xt&&(e.isWebGL2?a.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function bt(I){return g!==I?(a.useProgram(I),g=I,!0):!1}const it={[zs]:32774,[Uf]:32778,[Of]:32779};if(n)it[Tc]=32775,it[Ac]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(it[Tc]=I.MIN_EXT,it[Ac]=I.MAX_EXT)}const J={[Nf]:0,[Ff]:1,[Bf]:768,[Fu]:770,[jf]:776,[Hf]:774,[Vf]:772,[kf]:769,[Bu]:771,[Wf]:775,[Gf]:773};function et(I,Z,ot,xt,Et,Jt,Qt,Ee){if(I===yi){p===!0&&(Pt(3042),p=!1);return}if(p===!1&&(V(3042),p=!0),I!==If){if(I!==y||Ee!==M){if((v!==zs||w!==zs)&&(a.blendEquation(32774),v=zs,w=zs),Ee)switch(I){case Fs:a.blendFuncSeparate(1,771,1,771);break;case Sc:a.blendFunc(1,1);break;case wc:a.blendFuncSeparate(0,769,0,1);break;case Ec:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fs:a.blendFuncSeparate(770,771,1,771);break;case Sc:a.blendFunc(770,1);break;case wc:a.blendFuncSeparate(0,769,0,1);break;case Ec:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,b=null,E=null,A=null,y=I,M=Ee}return}Et=Et||Z,Jt=Jt||ot,Qt=Qt||xt,(Z!==v||Et!==w)&&(a.blendEquationSeparate(it[Z],it[Et]),v=Z,w=Et),(ot!==x||xt!==b||Jt!==E||Qt!==A)&&(a.blendFuncSeparate(J[ot],J[xt],J[Jt],J[Qt]),x=ot,b=xt,E=Jt,A=Qt),y=I,M=!1}function vt(I,Z){I.side===Tn?Pt(2884):V(2884);let ot=I.side===Be;Z&&(ot=!ot),ht(ot),I.blending===Fs&&I.transparent===!1?et(yi):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const xt=I.stencilWrite;l.setTest(xt),xt&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),wt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?V(32926):Pt(32926)}function ht(I){S!==I&&(I?a.frontFace(2304):a.frontFace(2305),S=I)}function At(I){I!==Rf?(V(2884),I!==U&&(I===Mc?a.cullFace(1029):I===Df?a.cullFace(1028):a.cullFace(1032))):Pt(2884),U=I}function Ct(I){I!==N&&(G&&a.lineWidth(I),N=I)}function wt(I,Z,ot){I?(V(32823),(D!==Z||z!==ot)&&(a.polygonOffset(Z,ot),D=Z,z=ot)):Pt(32823)}function It(I){I?V(3089):Pt(3089)}function jt(I){I===void 0&&(I=33984+O-1),K!==I&&(a.activeTexture(I),K=I)}function L(I,Z,ot){ot===void 0&&(K===null?ot=33984+O-1:ot=K);let xt=X[ot];xt===void 0&&(xt={type:void 0,texture:void 0},X[ot]=xt),(xt.type!==I||xt.texture!==Z)&&(K!==ot&&(a.activeTexture(ot),K=ot),a.bindTexture(I,Z||mt[I]),xt.type=I,xt.texture=Z)}function T(){const I=X[K];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(I){q.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),q.copy(I))}function Mt(I){$.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Dt(I,Z){let ot=u.get(Z);ot===void 0&&(ot=new WeakMap,u.set(Z,ot));let xt=ot.get(I);xt===void 0&&(xt=a.getUniformBlockIndex(Z,I.name),ot.set(I,xt))}function Ft(I,Z){const xt=u.get(Z).get(I);h.get(Z)!==xt&&(a.uniformBlockBinding(Z,xt,I.__bindingPointIndex),h.set(Z,xt))}function le(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},K=null,X={},f={},_=new WeakMap,m=[],g=null,p=!1,y=null,v=null,x=null,b=null,w=null,E=null,A=null,M=!1,S=null,U=null,N=null,D=null,z=null,q.set(0,0,a.canvas.width,a.canvas.height),$.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:V,disable:Pt,bindFramebuffer:Lt,drawBuffers:at,useProgram:bt,setBlending:et,setMaterial:vt,setFlipSided:ht,setCullFace:At,setLineWidth:Ct,setPolygonOffset:wt,setScissorTest:It,activeTexture:jt,bindTexture:L,unbindTexture:T,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:yt,texImage3D:St,updateUBOMapping:Dt,uniformBlockBinding:Ft,texStorage2D:H,texStorage3D:ft,texSubImage2D:rt,texSubImage3D:dt,compressedTexSubImage2D:R,compressedTexSubImage3D:tt,scissor:_t,viewport:Mt,reset:le}}function xx(a,t,e,n,i,s,r){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,T){return p?new OffscreenCanvas(L,T):ko("canvas")}function v(L,T,j,st){let rt=1;if((L.width>st||L.height>st)&&(rt=st/Math.max(L.width,L.height)),rt<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const dt=T?Tp:Math.floor,R=dt(rt*L.width),tt=dt(rt*L.height);m===void 0&&(m=y(R,tt));const H=j?y(R,tt):m;return H.width=R,H.height=tt,H.getContext("2d").drawImage(L,0,0,R,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+R+"x"+tt+")."),H}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return th(L.width)&&th(L.height)}function b(L){return o?!1:L.wrapS!==An||L.wrapT!==An||L.minFilter!==Ne&&L.minFilter!==un}function w(L,T){return L.generateMipmaps&&T&&L.minFilter!==Ne&&L.minFilter!==un}function E(L){a.generateMipmap(L)}function A(L,T,j,st,rt=!1){if(o===!1)return T;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let dt=T;return T===6403&&(j===5126&&(dt=33326),j===5131&&(dt=33325),j===5121&&(dt=33321)),T===33319&&(j===5126&&(dt=33328),j===5131&&(dt=33327),j===5121&&(dt=33323)),T===6408&&(j===5126&&(dt=34836),j===5131&&(dt=34842),j===5121&&(dt=st===Kt&&rt===!1?35907:32856),j===32819&&(dt=32854),j===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function M(L,T,j){return w(L,j)===!0||L.isFramebufferTexture&&L.minFilter!==Ne&&L.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function S(L){return L===Ne||L===Cc||L===ua?9728:9729}function U(L){const T=L.target;T.removeEventListener("dispose",U),D(T),T.isVideoTexture&&_.delete(T)}function N(L){const T=L.target;T.removeEventListener("dispose",N),O(T)}function D(L){const T=n.get(L);if(T.__webglInit===void 0)return;const j=L.source,st=g.get(j);if(st){const rt=st[T.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&z(L),Object.keys(st).length===0&&g.delete(j)}n.remove(L)}function z(L){const T=n.get(L);a.deleteTexture(T.__webglTexture);const j=L.source,st=g.get(j);delete st[T.__cacheKey],r.memory.textures--}function O(L){const T=L.texture,j=n.get(L),st=n.get(T);if(st.__webglTexture!==void 0&&(a.deleteTexture(st.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)a.deleteFramebuffer(j.__webglFramebuffer[rt]),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer[rt]);else{if(a.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&a.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let rt=0;rt<j.__webglColorRenderbuffer.length;rt++)j.__webglColorRenderbuffer[rt]&&a.deleteRenderbuffer(j.__webglColorRenderbuffer[rt]);j.__webglDepthRenderbuffer&&a.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let rt=0,dt=T.length;rt<dt;rt++){const R=n.get(T[rt]);R.__webglTexture&&(a.deleteTexture(R.__webglTexture),r.memory.textures--),n.remove(T[rt])}n.remove(T),n.remove(L)}let G=0;function W(){G=0}function B(){const L=G;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),G+=1,L}function K(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.encoding),T.join()}function X(L,T){const j=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(j,L,T);return}}e.bindTexture(3553,j.__webglTexture,33984+T)}function pt(L,T){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Pt(j,L,T);return}e.bindTexture(35866,j.__webglTexture,33984+T)}function nt(L,T){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Pt(j,L,T);return}e.bindTexture(32879,j.__webglTexture,33984+T)}function q(L,T){const j=n.get(L);if(L.version>0&&j.__version!==L.version){Lt(j,L,T);return}e.bindTexture(34067,j.__webglTexture,33984+T)}const $={[dl]:10497,[An]:33071,[fl]:33648},ct={[Ne]:9728,[Cc]:9984,[ua]:9986,[un]:9729,[rp]:9985,[Cr]:9987};function mt(L,T,j){if(j?(a.texParameteri(L,10242,$[T.wrapS]),a.texParameteri(L,10243,$[T.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,$[T.wrapR]),a.texParameteri(L,10240,ct[T.magFilter]),a.texParameteri(L,10241,ct[T.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(T.wrapS!==An||T.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,S(T.magFilter)),a.texParameteri(L,10241,S(T.minFilter)),T.minFilter!==Ne&&T.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ne||T.minFilter!==ua&&T.minFilter!==Cr||T.type===Wi&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===Lr&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(L,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function V(L,T){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",U));const st=T.source;let rt=g.get(st);rt===void 0&&(rt={},g.set(st,rt));const dt=K(T);if(dt!==L.__cacheKey){rt[dt]===void 0&&(rt[dt]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,j=!0),rt[dt].usedTimes++;const R=rt[L.__cacheKey];R!==void 0&&(rt[L.__cacheKey].usedTimes--,R.usedTimes===0&&z(T)),L.__cacheKey=dt,L.__webglTexture=rt[dt].texture}return j}function Pt(L,T,j){let st=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(st=35866),T.isData3DTexture&&(st=32879);const rt=V(L,T),dt=T.source;e.bindTexture(st,L.__webglTexture,33984+j);const R=n.get(dt);if(dt.version!==R.__version||rt===!0){e.activeTexture(33984+j),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const tt=b(T)&&x(T.image)===!1;let H=v(T.image,tt,!1,h);H=jt(T,H);const ft=x(H)||o,yt=s.convert(T.format,T.encoding);let St=s.convert(T.type),_t=A(T.internalFormat,yt,St,T.encoding,T.isVideoTexture);mt(st,T,ft);let Mt;const Dt=T.mipmaps,Ft=o&&T.isVideoTexture!==!0,le=R.__version===void 0||rt===!0,I=M(T,H,ft);if(T.isDepthTexture)_t=6402,o?T.type===Wi?_t=36012:T.type===Hi?_t=33190:T.type===Bs?_t=35056:_t=33189:T.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Xi&&_t===6402&&T.type!==Gu&&T.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Hi,St=s.convert(T.type)),T.format===$s&&_t===6402&&(_t=34041,T.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Bs,St=s.convert(T.type))),le&&(Ft?e.texStorage2D(3553,1,_t,H.width,H.height):e.texImage2D(3553,0,_t,H.width,H.height,0,yt,St,null));else if(T.isDataTexture)if(Dt.length>0&&ft){Ft&&le&&e.texStorage2D(3553,I,_t,Dt[0].width,Dt[0].height);for(let Z=0,ot=Dt.length;Z<ot;Z++)Mt=Dt[Z],Ft?e.texSubImage2D(3553,Z,0,0,Mt.width,Mt.height,yt,St,Mt.data):e.texImage2D(3553,Z,_t,Mt.width,Mt.height,0,yt,St,Mt.data);T.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(3553,I,_t,H.width,H.height),e.texSubImage2D(3553,0,0,0,H.width,H.height,yt,St,H.data)):e.texImage2D(3553,0,_t,H.width,H.height,0,yt,St,H.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ft&&le&&e.texStorage3D(35866,I,_t,Dt[0].width,Dt[0].height,H.depth);for(let Z=0,ot=Dt.length;Z<ot;Z++)Mt=Dt[Z],T.format!==Cn?yt!==null?Ft?e.compressedTexSubImage3D(35866,Z,0,0,0,Mt.width,Mt.height,H.depth,yt,Mt.data,0,0):e.compressedTexImage3D(35866,Z,_t,Mt.width,Mt.height,H.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage3D(35866,Z,0,0,0,Mt.width,Mt.height,H.depth,yt,St,Mt.data):e.texImage3D(35866,Z,_t,Mt.width,Mt.height,H.depth,0,yt,St,Mt.data)}else{Ft&&le&&e.texStorage2D(3553,I,_t,Dt[0].width,Dt[0].height);for(let Z=0,ot=Dt.length;Z<ot;Z++)Mt=Dt[Z],T.format!==Cn?yt!==null?Ft?e.compressedTexSubImage2D(3553,Z,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(3553,Z,_t,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage2D(3553,Z,0,0,Mt.width,Mt.height,yt,St,Mt.data):e.texImage2D(3553,Z,_t,Mt.width,Mt.height,0,yt,St,Mt.data)}else if(T.isDataArrayTexture)Ft?(le&&e.texStorage3D(35866,I,_t,H.width,H.height,H.depth),e.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,yt,St,H.data)):e.texImage3D(35866,0,_t,H.width,H.height,H.depth,0,yt,St,H.data);else if(T.isData3DTexture)Ft?(le&&e.texStorage3D(32879,I,_t,H.width,H.height,H.depth),e.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,yt,St,H.data)):e.texImage3D(32879,0,_t,H.width,H.height,H.depth,0,yt,St,H.data);else if(T.isFramebufferTexture){if(le)if(Ft)e.texStorage2D(3553,I,_t,H.width,H.height);else{let Z=H.width,ot=H.height;for(let xt=0;xt<I;xt++)e.texImage2D(3553,xt,_t,Z,ot,0,yt,St,null),Z>>=1,ot>>=1}}else if(Dt.length>0&&ft){Ft&&le&&e.texStorage2D(3553,I,_t,Dt[0].width,Dt[0].height);for(let Z=0,ot=Dt.length;Z<ot;Z++)Mt=Dt[Z],Ft?e.texSubImage2D(3553,Z,0,0,yt,St,Mt):e.texImage2D(3553,Z,_t,yt,St,Mt);T.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(3553,I,_t,H.width,H.height),e.texSubImage2D(3553,0,0,0,yt,St,H)):e.texImage2D(3553,0,_t,yt,St,H);w(T,ft)&&E(st),R.__version=dt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Lt(L,T,j){if(T.image.length!==6)return;const st=V(L,T),rt=T.source;e.bindTexture(34067,L.__webglTexture,33984+j);const dt=n.get(rt);if(rt.version!==dt.__version||st===!0){e.activeTexture(33984+j),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const R=T.isCompressedTexture||T.image[0].isCompressedTexture,tt=T.image[0]&&T.image[0].isDataTexture,H=[];for(let Z=0;Z<6;Z++)!R&&!tt?H[Z]=v(T.image[Z],!1,!0,l):H[Z]=tt?T.image[Z].image:T.image[Z],H[Z]=jt(T,H[Z]);const ft=H[0],yt=x(ft)||o,St=s.convert(T.format,T.encoding),_t=s.convert(T.type),Mt=A(T.internalFormat,St,_t,T.encoding),Dt=o&&T.isVideoTexture!==!0,Ft=dt.__version===void 0||st===!0;let le=M(T,ft,yt);mt(34067,T,yt);let I;if(R){Dt&&Ft&&e.texStorage2D(34067,le,Mt,ft.width,ft.height);for(let Z=0;Z<6;Z++){I=H[Z].mipmaps;for(let ot=0;ot<I.length;ot++){const xt=I[ot];T.format!==Cn?St!==null?Dt?e.compressedTexSubImage2D(34069+Z,ot,0,0,xt.width,xt.height,St,xt.data):e.compressedTexImage2D(34069+Z,ot,Mt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(34069+Z,ot,0,0,xt.width,xt.height,St,_t,xt.data):e.texImage2D(34069+Z,ot,Mt,xt.width,xt.height,0,St,_t,xt.data)}}}else{I=T.mipmaps,Dt&&Ft&&(I.length>0&&le++,e.texStorage2D(34067,le,Mt,H[0].width,H[0].height));for(let Z=0;Z<6;Z++)if(tt){Dt?e.texSubImage2D(34069+Z,0,0,0,H[Z].width,H[Z].height,St,_t,H[Z].data):e.texImage2D(34069+Z,0,Mt,H[Z].width,H[Z].height,0,St,_t,H[Z].data);for(let ot=0;ot<I.length;ot++){const Et=I[ot].image[Z].image;Dt?e.texSubImage2D(34069+Z,ot+1,0,0,Et.width,Et.height,St,_t,Et.data):e.texImage2D(34069+Z,ot+1,Mt,Et.width,Et.height,0,St,_t,Et.data)}}else{Dt?e.texSubImage2D(34069+Z,0,0,0,St,_t,H[Z]):e.texImage2D(34069+Z,0,Mt,St,_t,H[Z]);for(let ot=0;ot<I.length;ot++){const xt=I[ot];Dt?e.texSubImage2D(34069+Z,ot+1,0,0,St,_t,xt.image[Z]):e.texImage2D(34069+Z,ot+1,Mt,St,_t,xt.image[Z])}}}w(T,yt)&&E(34067),dt.__version=rt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function at(L,T,j,st,rt){const dt=s.convert(j.format,j.encoding),R=s.convert(j.type),tt=A(j.internalFormat,dt,R,j.encoding);n.get(T).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,tt,T.width,T.height,T.depth,0,dt,R,null):e.texImage2D(rt,0,tt,T.width,T.height,0,dt,R,null)),e.bindFramebuffer(36160,L),wt(T)?d.framebufferTexture2DMultisampleEXT(36160,st,rt,n.get(j).__webglTexture,0,Ct(T)):(rt===3553||rt>=34069&&rt<=34074)&&a.framebufferTexture2D(36160,st,rt,n.get(j).__webglTexture,0),e.bindFramebuffer(36160,null)}function bt(L,T,j){if(a.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let st=33189;if(j||wt(T)){const rt=T.depthTexture;rt&&rt.isDepthTexture&&(rt.type===Wi?st=36012:rt.type===Hi&&(st=33190));const dt=Ct(T);wt(T)?d.renderbufferStorageMultisampleEXT(36161,dt,st,T.width,T.height):a.renderbufferStorageMultisample(36161,dt,st,T.width,T.height)}else a.renderbufferStorage(36161,st,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const st=Ct(T);j&&wt(T)===!1?a.renderbufferStorageMultisample(36161,st,35056,T.width,T.height):wt(T)?d.renderbufferStorageMultisampleEXT(36161,st,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const st=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let rt=0;rt<st.length;rt++){const dt=st[rt],R=s.convert(dt.format,dt.encoding),tt=s.convert(dt.type),H=A(dt.internalFormat,R,tt,dt.encoding),ft=Ct(T);j&&wt(T)===!1?a.renderbufferStorageMultisample(36161,ft,H,T.width,T.height):wt(T)?d.renderbufferStorageMultisampleEXT(36161,ft,H,T.width,T.height):a.renderbufferStorage(36161,H,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function it(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const st=n.get(T.depthTexture).__webglTexture,rt=Ct(T);if(T.depthTexture.format===Xi)wt(T)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,st,0,rt):a.framebufferTexture2D(36160,36096,3553,st,0);else if(T.depthTexture.format===$s)wt(T)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,st,0,rt):a.framebufferTexture2D(36160,33306,3553,st,0);else throw new Error("Unknown depthTexture format")}function J(L){const T=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");it(T.__webglFramebuffer,L)}else if(j){T.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(36160,T.__webglFramebuffer[st]),T.__webglDepthbuffer[st]=a.createRenderbuffer(),bt(T.__webglDepthbuffer[st],L,!1)}else e.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),bt(T.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function et(L,T,j){const st=n.get(L);T!==void 0&&at(st.__webglFramebuffer,L,L.texture,36064,3553),j!==void 0&&J(L)}function vt(L){const T=L.texture,j=n.get(L),st=n.get(T);L.addEventListener("dispose",N),L.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=a.createTexture()),st.__version=T.version,r.memory.textures++);const rt=L.isWebGLCubeRenderTarget===!0,dt=L.isWebGLMultipleRenderTargets===!0,R=x(L)||o;if(rt){j.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)j.__webglFramebuffer[tt]=a.createFramebuffer()}else{if(j.__webglFramebuffer=a.createFramebuffer(),dt)if(i.drawBuffers){const tt=L.texture;for(let H=0,ft=tt.length;H<ft;H++){const yt=n.get(tt[H]);yt.__webglTexture===void 0&&(yt.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&wt(L)===!1){const tt=dt?T:[T];j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let H=0;H<tt.length;H++){const ft=tt[H];j.__webglColorRenderbuffer[H]=a.createRenderbuffer(),a.bindRenderbuffer(36161,j.__webglColorRenderbuffer[H]);const yt=s.convert(ft.format,ft.encoding),St=s.convert(ft.type),_t=A(ft.internalFormat,yt,St,ft.encoding,L.isXRRenderTarget===!0),Mt=Ct(L);a.renderbufferStorageMultisample(36161,Mt,_t,L.width,L.height),a.framebufferRenderbuffer(36160,36064+H,36161,j.__webglColorRenderbuffer[H])}a.bindRenderbuffer(36161,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),bt(j.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,st.__webglTexture),mt(34067,T,R);for(let tt=0;tt<6;tt++)at(j.__webglFramebuffer[tt],L,T,36064,34069+tt);w(T,R)&&E(34067),e.unbindTexture()}else if(dt){const tt=L.texture;for(let H=0,ft=tt.length;H<ft;H++){const yt=tt[H],St=n.get(yt);e.bindTexture(3553,St.__webglTexture),mt(3553,yt,R),at(j.__webglFramebuffer,L,yt,36064+H,3553),w(yt,R)&&E(3553)}e.unbindTexture()}else{let tt=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?tt=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(tt,st.__webglTexture),mt(tt,T,R),at(j.__webglFramebuffer,L,T,36064,tt),w(T,R)&&E(tt),e.unbindTexture()}L.depthBuffer&&J(L)}function ht(L){const T=x(L)||o,j=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let st=0,rt=j.length;st<rt;st++){const dt=j[st];if(w(dt,T)){const R=L.isWebGLCubeRenderTarget?34067:3553,tt=n.get(dt).__webglTexture;e.bindTexture(R,tt),E(R),e.unbindTexture()}}}function At(L){if(o&&L.samples>0&&wt(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],j=L.width,st=L.height;let rt=16384;const dt=[],R=L.stencilBuffer?33306:36096,tt=n.get(L),H=L.isWebGLMultipleRenderTargets===!0;if(H)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(36160,tt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ft,36161,null),e.bindFramebuffer(36160,tt.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ft,3553,null,0);e.bindFramebuffer(36008,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,tt.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){dt.push(36064+ft),L.depthBuffer&&dt.push(R);const yt=tt.__ignoreDepthValues!==void 0?tt.__ignoreDepthValues:!1;if(yt===!1&&(L.depthBuffer&&(rt|=256),L.stencilBuffer&&(rt|=1024)),H&&a.framebufferRenderbuffer(36008,36064,36161,tt.__webglColorRenderbuffer[ft]),yt===!0&&(a.invalidateFramebuffer(36008,[R]),a.invalidateFramebuffer(36009,[R])),H){const St=n.get(T[ft]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,St,0)}a.blitFramebuffer(0,0,j,st,0,0,j,st,rt,9728),f&&a.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),H)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(36160,tt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ft,36161,tt.__webglColorRenderbuffer[ft]);const yt=n.get(T[ft]).__webglTexture;e.bindFramebuffer(36160,tt.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ft,3553,yt,0)}e.bindFramebuffer(36009,tt.__webglMultisampledFramebuffer)}}function Ct(L){return Math.min(u,L.samples)}function wt(L){const T=n.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(L){const T=r.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function jt(L,T){const j=L.encoding,st=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===pl||j!==Ki&&(j===Kt?o===!1?t.has("EXT_sRGB")===!0&&st===Cn?(L.format=pl,L.minFilter=un,L.generateMipmaps=!1):T=qu.sRGBToLinear(T):(st!==Cn||rt!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),T}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=pt,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=et,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=at,this.useMultisampledRTT=wt}function vx(a,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===Ji)return 5121;if(s===cp)return 32819;if(s===hp)return 32820;if(s===op)return 5120;if(s===ap)return 5122;if(s===Gu)return 5123;if(s===lp)return 5124;if(s===Hi)return 5125;if(s===Wi)return 5126;if(s===Lr)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===up)return 6406;if(s===Cn)return 6408;if(s===dp)return 6409;if(s===fp)return 6410;if(s===Xi)return 6402;if(s===$s)return 34041;if(s===pl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===pp)return 6403;if(s===mp)return 36244;if(s===gp)return 33319;if(s===_p)return 33320;if(s===xp)return 36249;if(s===da||s===fa||s===pa||s===ma)if(r===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===da)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===da)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lc||s===Pc||s===Rc||s===Dc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Lc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vp)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zc||s===Ic)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===zc)return r===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ic)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Uc||s===Oc||s===Nc||s===Fc||s===Bc||s===kc||s===Vc||s===Gc||s===Hc||s===Wc||s===jc||s===qc||s===Xc||s===Yc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Uc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Oc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ga)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ga)return r===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yp||s===Zc||s===$c||s===Jc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ga)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$c)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bs?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class yx extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ji extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bx={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const m of t.hand.values()){const g=e.getJointPose(m,n),p=this._getHandJoint(l,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Mx extends en{constructor(t,e,n,i,s,r,o,c,l,h){if(h=h!==void 0?h:Xi,h!==Xi&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=Hi),n===void 0&&h===$s&&(n=Bs),super(null,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1}}class Sx extends is{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const m=e.getContextAttributes();let g=null,p=null;const y=[],v=[],x=new Set,b=new Map,w=new wn;w.layers.enable(1),w.viewport=new re;const E=new wn;E.layers.enable(2),E.viewport=new re;const A=[w,E],M=new yx;M.layers.enable(1),M.layers.enable(2);let S=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=y[q];return $===void 0&&($=new ka,y[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=y[q];return $===void 0&&($=new ka,y[q]=$),$.getGripSpace()},this.getHand=function(q){let $=y[q];return $===void 0&&($=new ka,y[q]=$),$.getHandSpace()};function N(q){const $=v.indexOf(q.inputSource);if($===-1)return;const ct=y[$];ct!==void 0&&ct.dispatchEvent({type:q.type,data:q.inputSource})}function D(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",z);for(let q=0;q<y.length;q++){const $=v[q];$!==null&&(v[q]=null,y[q].disconnect($))}S=null,U=null,t.setRenderTarget(g),f=null,d=null,u=null,i=null,p=null,nt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",D),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),p=new Qi(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Ji,encoding:t.outputEncoding,stencilBuffer:m.stencil})}else{let $=null,ct=null,mt=null;m.depth&&(mt=m.stencil?35056:33190,$=m.stencil?$s:Xi,ct=m.stencil?Bs:Hi);const V={colorFormat:32856,depthFormat:mt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(V),i.updateRenderState({layers:[d]}),p=new Qi(d.textureWidth,d.textureHeight,{format:Cn,type:Ji,depthTexture:new Mx(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,encoding:t.outputEncoding,samples:m.antialias?4:0});const Pt=t.properties.get(p);Pt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(q){for(let $=0;$<q.removed.length;$++){const ct=q.removed[$],mt=v.indexOf(ct);mt>=0&&(v[mt]=null,y[mt].disconnect(ct))}for(let $=0;$<q.added.length;$++){const ct=q.added[$];let mt=v.indexOf(ct);if(mt===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=v.length){v.push(ct),mt=Pt;break}else if(v[Pt]===null){v[Pt]=ct,mt=Pt;break}if(mt===-1)break}const V=y[mt];V&&V.connect(ct)}}const O=new P,G=new P;function W(q,$,ct){O.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(ct.matrixWorld);const mt=O.distanceTo(G),V=$.projectionMatrix.elements,Pt=ct.projectionMatrix.elements,Lt=V[14]/(V[10]-1),at=V[14]/(V[10]+1),bt=(V[9]+1)/V[5],it=(V[9]-1)/V[5],J=(V[8]-1)/V[0],et=(Pt[8]+1)/Pt[0],vt=Lt*J,ht=Lt*et,At=mt/(-J+et),Ct=At*-J;$.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const wt=Lt+At,It=at+At,jt=vt-Ct,L=ht+(mt-Ct),T=bt*at/It*wt,j=it*at/It*wt;q.projectionMatrix.makePerspective(jt,L,T,j,wt,It),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function B(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;M.near=E.near=w.near=q.near,M.far=E.far=w.far=q.far,(S!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,U=M.far);const $=q.parent,ct=M.cameras;B(M,$);for(let mt=0;mt<ct.length;mt++)B(ct[mt],$);ct.length===2?W(M,w,E):M.projectionMatrix.copy(w.projectionMatrix),K(q,M,$)};function K(q,$,ct){ct===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(ct.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);const mt=q.children;for(let V=0,Pt=mt.length;V<Pt;V++)mt[V].updateMatrixWorld(!0);q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ml*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.getPlanes=function(){return x};let X=null;function pt(q,$){if(h=$.getViewerPose(l||r),_=$,h!==null){const ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let mt=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let V=0;V<ct.length;V++){const Pt=ct[V];let Lt=null;if(f!==null)Lt=f.getViewport(Pt);else{const bt=u.getViewSubImage(d,Pt);Lt=bt.viewport,V===0&&(t.setRenderTargetTextures(p,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(p))}let at=A[V];at===void 0&&(at=new wn,at.layers.enable(V),at.viewport=new re,A[V]=at),at.matrix.fromArray(Pt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Pt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),V===0&&(M.matrix.copy(at.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(at)}}for(let ct=0;ct<y.length;ct++){const mt=v[ct],V=y[ct];mt!==null&&V!==void 0&&V.update(mt,$,l||r)}if(X&&X(q,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ct=null;for(const mt of x)$.detectedPlanes.has(mt)||(ct===null&&(ct=[]),ct.push(mt));if(ct!==null)for(const mt of ct)x.delete(mt),b.delete(mt),n.dispatchEvent({type:"planeremoved",data:mt});for(const mt of $.detectedPlanes)if(!x.has(mt))x.add(mt),b.set(mt,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:mt});else{const V=b.get(mt);mt.lastChangedTime>V&&(b.set(mt,mt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:mt}))}}_=null}const nt=new nd;nt.setAnimationLoop(pt),this.setAnimationLoop=function(q){X=q},this.dispose=function(){}}}function wx(a,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ku(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,y,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=a.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ex(a,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?a.getParameter(35375):0;function c(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function l(y,v){let x=i[y.id];x===void 0&&(_(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));const b=v.program;n.updateUBOMapping(y,b);const w=t.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const v=u();y.__bindingPointIndex=v;const x=a.createBuffer(),b=y.__size,w=y.usage;return a.bindBuffer(35345,x),a.bufferData(35345,b,w),a.bindBuffer(35345,null),a.bindBufferBase(35345,v,x),x}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],x=y.uniforms,b=y.__cache;a.bindBuffer(35345,v);for(let w=0,E=x.length;w<E;w++){const A=x[w];if(f(A,w,b)===!0){const M=A.__offset,S=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let N=0;N<S.length;N++){const D=S[N],z=m(D);typeof D=="number"?(A.__data[0]=D,a.bufferSubData(35345,M+U,A.__data)):D.isMatrix3?(A.__data[0]=D.elements[0],A.__data[1]=D.elements[1],A.__data[2]=D.elements[2],A.__data[3]=D.elements[0],A.__data[4]=D.elements[3],A.__data[5]=D.elements[4],A.__data[6]=D.elements[5],A.__data[7]=D.elements[0],A.__data[8]=D.elements[6],A.__data[9]=D.elements[7],A.__data[10]=D.elements[8],A.__data[11]=D.elements[0]):(D.toArray(A.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,M,A.__data)}}a.bindBuffer(35345,null)}function f(y,v,x){const b=y.value;if(x[v]===void 0){if(typeof b=="number")x[v]=b;else{const w=Array.isArray(b)?b:[b],E=[];for(let A=0;A<w.length;A++)E.push(w[A].clone());x[v]=E}return!0}else if(typeof b=="number"){if(x[v]!==b)return x[v]=b,!0}else{const w=Array.isArray(x[v])?x[v]:[x[v]],E=Array.isArray(b)?b:[b];for(let A=0;A<w.length;A++){const M=w[A];if(M.equals(E[A])===!1)return M.copy(E[A]),!0}}return!1}function _(y){const v=y.uniforms;let x=0;const b=16;let w=0;for(let E=0,A=v.length;E<A;E++){const M=v[E],S={boundary:0,storage:0},U=Array.isArray(M.value)?M.value:[M.value];for(let N=0,D=U.length;N<D;N++){const z=U[N],O=m(z);S.boundary+=O.boundary,S.storage+=O.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,E>0){w=x%b;const N=b-w;w!==0&&N-S.boundary<0&&(x+=b-w,M.__offset=x)}x+=S.storage}return w=x%b,w>0&&(x+=b-w),y.__size=x,y.__cache={},this}function m(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){const v=y.target;v.removeEventListener("dispose",g);const x=r.indexOf(v.__bindingPointIndex);r.splice(x,1),a.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const y in i)a.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:c,update:l,dispose:p}}function Tx(){const a=ko("canvas");return a.style.display="block",a}class ql{constructor(t={}){const{canvas:e=Tx(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;let f=null,_=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ki,this.useLegacyLights=!0,this.toneMapping=ei,this.toneMappingExposure=1;const p=this;let y=!1,v=0,x=0,b=null,w=-1,E=null;const A=new re,M=new re;let S=null,U=e.width,N=e.height,D=1,z=null,O=null;const G=new re(0,0,U,N),W=new re(0,0,U,N);let B=!1;const K=new Wl;let X=!1,pt=!1,nt=null;const q=new se,$=new P,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mt(){return b===null?D:1}let V=n;function Pt(C,k){for(let Y=0;Y<C.length;Y++){const F=C[Y],Q=e.getContext(F,k);if(Q!==null)return Q}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),V=Pt(k,C),V===null)throw Pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Lt,at,bt,it,J,et,vt,ht,At,Ct,wt,It,jt,L,T,j,st,rt,dt,R,tt,H,ft,yt;function St(){Lt=new N0(V),at=new R0(V,Lt,t),Lt.init(at),H=new vx(V,Lt,at),bt=new _x(V,Lt,at),it=new k0,J=new ix,et=new xx(V,Lt,bt,J,at,H,it),vt=new z0(p),ht=new O0(p),At=new Kp(V,at),ft=new L0(V,Lt,At,at),Ct=new F0(V,At,it,ft),wt=new W0(V,Ct,At,it),dt=new H0(V,at,et),j=new D0(J),It=new nx(p,vt,ht,Lt,at,ft,j),jt=new wx(p,J),L=new rx,T=new ux(Lt,at),rt=new C0(p,vt,ht,bt,wt,d,c),st=new gx(p,wt,at),yt=new Ex(V,it,at,bt),R=new P0(V,Lt,it,at),tt=new B0(V,Lt,it,at),it.programs=It.programs,p.capabilities=at,p.extensions=Lt,p.properties=J,p.renderLists=L,p.shadowMap=st,p.state=bt,p.info=it}St();const _t=new Sx(p,V);this.xr=_t,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(C){C!==void 0&&(D=C,this.setSize(U,N,!1))},this.getSize=function(C){return C.set(U,N)},this.setSize=function(C,k,Y=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,N=k,e.width=Math.floor(C*D),e.height=Math.floor(k*D),Y===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(U*D,N*D).floor()},this.setDrawingBufferSize=function(C,k,Y){U=C,N=k,D=Y,e.width=Math.floor(C*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,k,Y,F){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,k,Y,F),bt.viewport(A.copy(G).multiplyScalar(D).floor())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,k,Y,F){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,k,Y,F),bt.scissor(M.copy(W).multiplyScalar(D).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(C){bt.setScissorTest(B=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(C=!0,k=!0,Y=!0){let F=0;C&&(F|=16384),k&&(F|=256),Y&&(F|=1024),V.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),L.dispose(),T.dispose(),J.dispose(),vt.dispose(),ht.dispose(),wt.dispose(),ft.dispose(),yt.dispose(),It.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Et),_t.removeEventListener("sessionend",Jt),nt&&(nt.dispose(),nt=null),Qt.stop()};function Mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=it.autoReset,k=st.enabled,Y=st.autoUpdate,F=st.needsUpdate,Q=st.type;St(),it.autoReset=C,st.enabled=k,st.autoUpdate=Y,st.needsUpdate=F,st.type=Q}function Ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const k=C.target;k.removeEventListener("dispose",le),I(k)}function I(C){Z(C),J.remove(C)}function Z(C){const k=J.get(C).programs;k!==void 0&&(k.forEach(function(Y){It.releaseProgram(Y)}),C.isShaderMaterial&&It.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,F,Q,Tt){k===null&&(k=ct);const Rt=Q.isMesh&&Q.matrixWorld.determinant()<0,zt=Ef(C,k,Y,F,Q);bt.setMaterial(F,Rt);let Ut=Y.index,Bt=1;F.wireframe===!0&&(Ut=Ct.getWireframeAttribute(Y),Bt=2);const kt=Y.drawRange,Gt=Y.attributes.position;let Yt=kt.start*Bt,ze=(kt.start+kt.count)*Bt;Tt!==null&&(Yt=Math.max(Yt,Tt.start*Bt),ze=Math.min(ze,(Tt.start+Tt.count)*Bt)),Ut!==null?(Yt=Math.max(Yt,0),ze=Math.min(ze,Ut.count)):Gt!=null&&(Yt=Math.max(Yt,0),ze=Math.min(ze,Gt.count));const xn=ze-Yt;if(xn<0||xn===1/0)return;ft.setup(Q,F,zt,Y,Ut);let Li,de=R;if(Ut!==null&&(Li=At.get(Ut),de=tt,de.setIndex(Li)),Q.isMesh)F.wireframe===!0?(bt.setLineWidth(F.wireframeLinewidth*mt()),de.setMode(1)):de.setMode(4);else if(Q.isLine){let qt=F.linewidth;qt===void 0&&(qt=1),bt.setLineWidth(qt*mt()),Q.isLineSegments?de.setMode(1):Q.isLineLoop?de.setMode(2):de.setMode(3)}else Q.isPoints?de.setMode(0):Q.isSprite&&de.setMode(4);if(Q.isInstancedMesh)de.renderInstances(Yt,xn,Q.count);else if(Y.isInstancedBufferGeometry){const qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,aa=Math.min(Y.instanceCount,qt);de.renderInstances(Yt,xn,aa)}else de.render(Yt,xn)},this.compile=function(C,k){function Y(F,Q,Tt){F.transparent===!0&&F.side===Tn&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,Xr(F,Q,Tt),F.side=Ei,F.needsUpdate=!0,Xr(F,Q,Tt),F.side=Tn):Xr(F,Q,Tt)}_=T.get(C),_.init(),g.push(_),C.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights(p.useLegacyLights),C.traverse(function(F){const Q=F.material;if(Q)if(Array.isArray(Q))for(let Tt=0;Tt<Q.length;Tt++){const Rt=Q[Tt];Y(Rt,C,F)}else Y(Q,C,F)}),g.pop(),_=null};let ot=null;function xt(C){ot&&ot(C)}function Et(){Qt.stop()}function Jt(){Qt.start()}const Qt=new nd;Qt.setAnimationLoop(xt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(C){ot=C,_t.setAnimationLoop(C),C===null?Qt.stop():Qt.start()},_t.addEventListener("sessionstart",Et),_t.addEventListener("sessionend",Jt),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(k),k=_t.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,k,b),_=T.get(C,g.length),_.init(),g.push(_),q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(q),pt=this.localClippingEnabled,X=j.init(this.clippingPlanes,pt),f=L.get(C,m.length),f.init(),m.push(f),Ee(C,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(z,O),X===!0&&j.beginShadows();const Y=_.state.shadowsArray;if(st.render(Y,C,k),X===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(f,C),_.setupLights(p.useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let Q=0,Tt=F.length;Q<Tt;Q++){const Rt=F[Q];li(f,C,Rt,Rt.viewport)}}else li(f,C,k);b!==null&&(et.updateMultisampleRenderTarget(b),et.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(p,C,k),ft.resetDefaultState(),w=-1,E=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ee(C,k,Y,F){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){F&&$.setFromMatrixPosition(C.matrixWorld).applyMatrix4(q);const Rt=wt.update(C),zt=C.material;zt.visible&&f.push(C,Rt,zt,Y,$.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==it.render.frame&&(C.skeleton.update(),C.skeleton.frame=it.render.frame),!C.frustumCulled||K.intersectsObject(C))){F&&$.setFromMatrixPosition(C.matrixWorld).applyMatrix4(q);const Rt=wt.update(C),zt=C.material;if(Array.isArray(zt)){const Ut=Rt.groups;for(let Bt=0,kt=Ut.length;Bt<kt;Bt++){const Gt=Ut[Bt],Yt=zt[Gt.materialIndex];Yt&&Yt.visible&&f.push(C,Rt,Yt,Y,$.z,Gt)}}else zt.visible&&f.push(C,Rt,zt,Y,$.z,null)}}const Tt=C.children;for(let Rt=0,zt=Tt.length;Rt<zt;Rt++)Ee(Tt[Rt],k,Y,F)}function li(C,k,Y,F){const Q=C.opaque,Tt=C.transmissive,Rt=C.transparent;_.setupLightsView(Y),X===!0&&j.setGlobalState(p.clippingPlanes,Y),Tt.length>0&&ce(Q,Tt,k,Y),F&&bt.viewport(A.copy(F)),Q.length>0&&rn(Q,k,Y),Tt.length>0&&rn(Tt,k,Y),Rt.length>0&&rn(Rt,k,Y),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ce(C,k,Y,F){if(nt===null){const zt=at.isWebGL2;nt=new Qi(1024,1024,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")?Lr:Ji,minFilter:Cr,samples:zt&&o===!0?4:0})}const Q=p.getRenderTarget();p.setRenderTarget(nt),p.clear();const Tt=p.toneMapping;p.toneMapping=ei,rn(C,Y,F),et.updateMultisampleRenderTarget(nt),et.updateRenderTargetMipmap(nt);let Rt=!1;for(let zt=0,Ut=k.length;zt<Ut;zt++){const Bt=k[zt],kt=Bt.object,Gt=Bt.geometry,Yt=Bt.material,ze=Bt.group;if(Yt.side===Tn&&kt.layers.test(F.layers)){const xn=Yt.side;Yt.side=Be,Yt.needsUpdate=!0,Pn(kt,Y,F,Gt,Yt,ze),Yt.side=xn,Yt.needsUpdate=!0,Rt=!0}}Rt===!0&&(et.updateMultisampleRenderTarget(nt),et.updateRenderTargetMipmap(nt)),p.setRenderTarget(Q),p.toneMapping=Tt}function rn(C,k,Y){const F=k.isScene===!0?k.overrideMaterial:null;for(let Q=0,Tt=C.length;Q<Tt;Q++){const Rt=C[Q],zt=Rt.object,Ut=Rt.geometry,Bt=F===null?Rt.material:F,kt=Rt.group;zt.layers.test(Y.layers)&&Pn(zt,k,Y,Ut,Bt,kt)}}function Pn(C,k,Y,F,Q,Tt){C.onBeforeRender(p,k,Y,F,Q,Tt),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(p,k,Y,F,C,Tt),Q.transparent===!0&&Q.side===Tn&&Q.forceSinglePass===!1?(Q.side=Be,Q.needsUpdate=!0,p.renderBufferDirect(Y,k,F,Q,C,Tt),Q.side=Ei,Q.needsUpdate=!0,p.renderBufferDirect(Y,k,F,Q,C,Tt),Q.side=Tn):p.renderBufferDirect(Y,k,F,Q,C,Tt),C.onAfterRender(p,k,Y,F,Q,Tt)}function Xr(C,k,Y){k.isScene!==!0&&(k=ct);const F=J.get(C),Q=_.state.lights,Tt=_.state.shadowsArray,Rt=Q.state.version,zt=It.getParameters(C,Q.state,Tt,k,Y),Ut=It.getProgramCacheKey(zt);let Bt=F.programs;F.environment=C.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(C.isMeshStandardMaterial?ht:vt).get(C.envMap||F.environment),Bt===void 0&&(C.addEventListener("dispose",le),Bt=new Map,F.programs=Bt);let kt=Bt.get(Ut);if(kt!==void 0){if(F.currentProgram===kt&&F.lightsStateVersion===Rt)return vc(C,zt),kt}else zt.uniforms=It.getUniforms(C),C.onBuild(Y,zt,p),C.onBeforeCompile(zt,p),kt=It.acquireProgram(zt,Ut),Bt.set(Ut,kt),F.uniforms=zt.uniforms;const Gt=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=j.uniform),vc(C,zt),F.needsLights=Af(C),F.lightsStateVersion=Rt,F.needsLights&&(Gt.ambientLightColor.value=Q.state.ambient,Gt.lightProbe.value=Q.state.probe,Gt.directionalLights.value=Q.state.directional,Gt.directionalLightShadows.value=Q.state.directionalShadow,Gt.spotLights.value=Q.state.spot,Gt.spotLightShadows.value=Q.state.spotShadow,Gt.rectAreaLights.value=Q.state.rectArea,Gt.ltc_1.value=Q.state.rectAreaLTC1,Gt.ltc_2.value=Q.state.rectAreaLTC2,Gt.pointLights.value=Q.state.point,Gt.pointLightShadows.value=Q.state.pointShadow,Gt.hemisphereLights.value=Q.state.hemi,Gt.directionalShadowMap.value=Q.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Gt.spotShadowMap.value=Q.state.spotShadowMap,Gt.spotLightMatrix.value=Q.state.spotLightMatrix,Gt.spotLightMap.value=Q.state.spotLightMap,Gt.pointShadowMap.value=Q.state.pointShadowMap,Gt.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Yt=kt.getUniforms(),ze=Uo.seqWithValue(Yt.seq,Gt);return F.currentProgram=kt,F.uniformsList=ze,kt}function vc(C,k){const Y=J.get(C);Y.outputEncoding=k.outputEncoding,Y.instancing=k.instancing,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Ef(C,k,Y,F,Q){k.isScene!==!0&&(k=ct),et.resetTextureUnits();const Tt=k.fog,Rt=F.isMeshStandardMaterial?k.environment:null,zt=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Ki,Ut=(F.isMeshStandardMaterial?ht:vt).get(F.envMap||Rt),Bt=F.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!F.normalMap&&!!Y.attributes.tangent,Gt=!!Y.morphAttributes.position,Yt=!!Y.morphAttributes.normal,ze=!!Y.morphAttributes.color,xn=F.toneMapped?p.toneMapping:ei,Li=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,de=Li!==void 0?Li.length:0,qt=J.get(F),aa=_.state.lights;if(X===!0&&(pt===!0||C!==E)){const We=C===E&&F.id===w;j.setState(F,C,We)}let ve=!1;F.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==aa.state.version||qt.outputEncoding!==zt||Q.isInstancedMesh&&qt.instancing===!1||!Q.isInstancedMesh&&qt.instancing===!0||Q.isSkinnedMesh&&qt.skinning===!1||!Q.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==Ut||F.fog===!0&&qt.fog!==Tt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==j.numPlanes||qt.numIntersection!==j.numIntersection)||qt.vertexAlphas!==Bt||qt.vertexTangents!==kt||qt.morphTargets!==Gt||qt.morphNormals!==Yt||qt.morphColors!==ze||qt.toneMapping!==xn||at.isWebGL2===!0&&qt.morphTargetsCount!==de)&&(ve=!0):(ve=!0,qt.__version=F.version);let Pi=qt.currentProgram;ve===!0&&(Pi=Xr(F,k,Q));let yc=!1,lr=!1,la=!1;const Ie=Pi.getUniforms(),Ri=qt.uniforms;if(bt.useProgram(Pi.program)&&(yc=!0,lr=!0,la=!0),F.id!==w&&(w=F.id,lr=!0),yc||E!==C){if(Ie.setValue(V,"projectionMatrix",C.projectionMatrix),at.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),E!==C&&(E=C,lr=!0,la=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const We=Ie.map.cameraPosition;We!==void 0&&We.setValue(V,$.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Q.isSkinnedMesh)&&Ie.setValue(V,"viewMatrix",C.matrixWorldInverse)}if(Q.isSkinnedMesh){Ie.setOptional(V,Q,"bindMatrix"),Ie.setOptional(V,Q,"bindMatrixInverse");const We=Q.skeleton;We&&(at.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Ie.setValue(V,"boneTexture",We.boneTexture,et),Ie.setValue(V,"boneTextureSize",We.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ca=Y.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&at.isWebGL2===!0)&&dt.update(Q,Y,Pi),(lr||qt.receiveShadow!==Q.receiveShadow)&&(qt.receiveShadow=Q.receiveShadow,Ie.setValue(V,"receiveShadow",Q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ri.envMap.value=Ut,Ri.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),lr&&(Ie.setValue(V,"toneMappingExposure",p.toneMappingExposure),qt.needsLights&&Tf(Ri,la),Tt&&F.fog===!0&&jt.refreshFogUniforms(Ri,Tt),jt.refreshMaterialUniforms(Ri,F,D,N,nt),Uo.upload(V,qt.uniformsList,Ri,et)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Uo.upload(V,qt.uniformsList,Ri,et),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ie.setValue(V,"center",Q.center),Ie.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(V,"normalMatrix",Q.normalMatrix),Ie.setValue(V,"modelMatrix",Q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const We=F.uniformsGroups;for(let ha=0,Cf=We.length;ha<Cf;ha++)if(at.isWebGL2){const bc=We[ha];yt.update(bc,Pi),yt.bind(bc,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Tf(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Af(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,k,Y){J.get(C.texture).__webglTexture=k,J.get(C.depthTexture).__webglTexture=Y;const F=J.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Y===void 0,F.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const Y=J.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Y=0){b=C,v=k,x=Y;let F=!0,Q=null,Tt=!1,Rt=!1;if(C){const Ut=J.get(C);Ut.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(36160,null),F=!1):Ut.__webglFramebuffer===void 0?et.setupRenderTarget(C):Ut.__hasExternalTextures&&et.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);const Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Rt=!0);const kt=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Q=kt[k],Tt=!0):at.isWebGL2&&C.samples>0&&et.useMultisampledRTT(C)===!1?Q=J.get(C).__webglMultisampledFramebuffer:Q=kt,A.copy(C.viewport),M.copy(C.scissor),S=C.scissorTest}else A.copy(G).multiplyScalar(D).floor(),M.copy(W).multiplyScalar(D).floor(),S=B;if(bt.bindFramebuffer(36160,Q)&&at.drawBuffers&&F&&bt.drawBuffers(C,Q),bt.viewport(A),bt.scissor(M),bt.setScissorTest(S),Tt){const Ut=J.get(C.texture);V.framebufferTexture2D(36160,36064,34069+k,Ut.__webglTexture,Y)}else if(Rt){const Ut=J.get(C.texture),Bt=k||0;V.framebufferTextureLayer(36160,36064,Ut.__webglTexture,Y||0,Bt)}w=-1},this.readRenderTargetPixels=function(C,k,Y,F,Q,Tt,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){bt.bindFramebuffer(36160,zt);try{const Ut=C.texture,Bt=Ut.format,kt=Ut.type;if(Bt!==Cn&&H.convert(Bt)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=kt===Lr&&(Lt.has("EXT_color_buffer_half_float")||at.isWebGL2&&Lt.has("EXT_color_buffer_float"));if(kt!==Ji&&H.convert(kt)!==V.getParameter(35738)&&!(kt===Wi&&(at.isWebGL2||Lt.has("OES_texture_float")||Lt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-F&&Y>=0&&Y<=C.height-Q&&V.readPixels(k,Y,F,Q,H.convert(Bt),H.convert(kt),Tt)}finally{const Ut=b!==null?J.get(b).__webglFramebuffer:null;bt.bindFramebuffer(36160,Ut)}}},this.copyFramebufferToTexture=function(C,k,Y=0){const F=Math.pow(2,-Y),Q=Math.floor(k.image.width*F),Tt=Math.floor(k.image.height*F);et.setTexture2D(k,0),V.copyTexSubImage2D(3553,Y,0,0,C.x,C.y,Q,Tt),bt.unbindTexture()},this.copyTextureToTexture=function(C,k,Y,F=0){const Q=k.image.width,Tt=k.image.height,Rt=H.convert(Y.format),zt=H.convert(Y.type);et.setTexture2D(Y,0),V.pixelStorei(37440,Y.flipY),V.pixelStorei(37441,Y.premultiplyAlpha),V.pixelStorei(3317,Y.unpackAlignment),k.isDataTexture?V.texSubImage2D(3553,F,C.x,C.y,Q,Tt,Rt,zt,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(3553,F,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Rt,k.mipmaps[0].data):V.texSubImage2D(3553,F,C.x,C.y,Rt,zt,k.image),F===0&&Y.generateMipmaps&&V.generateMipmap(3553),bt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,Y,F,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=C.max.x-C.min.x+1,Rt=C.max.y-C.min.y+1,zt=C.max.z-C.min.z+1,Ut=H.convert(F.format),Bt=H.convert(F.type);let kt;if(F.isData3DTexture)et.setTexture3D(F,0),kt=32879;else if(F.isDataArrayTexture)et.setTexture2DArray(F,0),kt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,F.flipY),V.pixelStorei(37441,F.premultiplyAlpha),V.pixelStorei(3317,F.unpackAlignment);const Gt=V.getParameter(3314),Yt=V.getParameter(32878),ze=V.getParameter(3316),xn=V.getParameter(3315),Li=V.getParameter(32877),de=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;V.pixelStorei(3314,de.width),V.pixelStorei(32878,de.height),V.pixelStorei(3316,C.min.x),V.pixelStorei(3315,C.min.y),V.pixelStorei(32877,C.min.z),Y.isDataTexture||Y.isData3DTexture?V.texSubImage3D(kt,Q,k.x,k.y,k.z,Tt,Rt,zt,Ut,Bt,de.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(kt,Q,k.x,k.y,k.z,Tt,Rt,zt,Ut,de.data)):V.texSubImage3D(kt,Q,k.x,k.y,k.z,Tt,Rt,zt,Ut,Bt,de),V.pixelStorei(3314,Gt),V.pixelStorei(32878,Yt),V.pixelStorei(3316,ze),V.pixelStorei(3315,xn),V.pixelStorei(32877,Li),Q===0&&F.generateMipmaps&&V.generateMipmap(kt),bt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?et.setTextureCube(C,0):C.isData3DTexture?et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?et.setTexture2DArray(C,0):et.setTexture2D(C,0),bt.unbindTexture()},this.resetState=function(){v=0,x=0,b=null,bt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class Ax extends ql{}Ax.prototype.isWebGL1Renderer=!0;class _l extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Vs extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nh=new P,Fh=new P,Bh=new se,Va=new $o,go=new or;class Cx extends ae{constructor(t=new ue,e=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Nh.fromBufferAttribute(e,i-1),Fh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Nh.distanceTo(Fh);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=s,t.ray.intersectsSphere(go)===!1)return;Bh.copy(i).invert(),Va.copy(t.ray).applyMatrix4(Bh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,_=n.index,g=n.attributes.position;if(_!==null){const p=Math.max(0,r.start),y=Math.min(_.count,r.start+r.count);for(let v=p,x=y-1;v<x;v+=f){const b=_.getX(v),w=_.getX(v+1);if(l.fromBufferAttribute(g,b),h.fromBufferAttribute(g,w),Va.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let v=p,x=y-1;v<x;v+=f){if(l.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),Va.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const kh=new P,Vh=new P;class Rr extends Cx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)kh.fromBufferAttribute(e,i),Vh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kh.distanceTo(Vh);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class In extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gh=new se,xl=new $o,_o=new or,xo=new P;class bi extends ae{constructor(t=new ue,e=new In){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(i),_o.radius+=s,t.ray.intersectsSphere(_o)===!1)return;Gh.copy(i).invert(),xl.copy(t.ray).applyMatrix4(Gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let _=d,m=f;_<m;_++){const g=l.getX(_);xo.fromBufferAttribute(u,g),Hh(xo,g,c,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let _=d,m=f;_<m;_++)xo.fromBufferAttribute(u,_),Hh(xo,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hh(a,t,e,n,i,s,r){const o=xl.distanceSqToPoint(a);if(o<e){const c=new P;xl.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:r})}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),c=e||(r.isVector2?new lt:new P);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],r=[],o=new P,c=new se;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new P)}s[0]=new P,r[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Me(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,_))}r[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Me(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),r[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xl extends Bn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new lt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lx extends Xl{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Yl(){let a=0,t=0,e=0,n=0;function i(s,r,o,c){a=s,t=o,e=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){i(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,u){let d=(r-s)/l-(o-s)/(l+h)+(o-r)/h,f=(o-r)/h-(c-r)/(h+u)+(c-o)/u;d*=h,f*=h,i(r,o,d,f)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+n*o}}}const vo=new P,Ga=new Yl,Ha=new Yl,Wa=new Yl;class Px extends Bn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(vo.subVectors(i[0],i[1]).add(i[0]),l=vo);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(vo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),_<1e-4&&(_=m),g<1e-4&&(g=m),Ga.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,m,g),Ha.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,m,g),Wa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,m,g)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ha.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Wa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ga.calc(c),Ha.calc(c),Wa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wh(a,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,o=a*a,c=a*o;return(2*e-2*n+s+r)*c+(-3*e+3*n-2*s-r)*o+s*a+e}function Rx(a,t){const e=1-a;return e*e*t}function Dx(a,t){return 2*(1-a)*a*t}function zx(a,t){return a*a*t}function Sr(a,t,e,n){return Rx(a,t)+Dx(a,e)+zx(a,n)}function Ix(a,t){const e=1-a;return e*e*e*t}function Ux(a,t){const e=1-a;return 3*e*e*a*t}function Ox(a,t){return 3*(1-a)*a*a*t}function Nx(a,t){return a*a*a*t}function wr(a,t,e,n,i){return Ix(a,t)+Ux(a,e)+Ox(a,n)+Nx(a,i)}class ad extends Bn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(wr(t,i.x,s.x,r.x,o.x),wr(t,i.y,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fx extends Bn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(wr(t,i.x,s.x,r.x,o.x),wr(t,i.y,s.y,r.y,o.y),wr(t,i.z,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zl extends Bn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bx extends Bn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends Bn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Sr(t,i.x,s.x,r.x),Sr(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kx extends Bn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Sr(t,i.x,s.x,r.x),Sr(t,i.y,s.y,r.y),Sr(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cd extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Wh(o,c.x,l.x,h.x,u.x),Wh(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var hd=Object.freeze({__proto__:null,ArcCurve:Lx,CatmullRomCurve3:Px,CubicBezierCurve:ad,CubicBezierCurve3:Fx,EllipseCurve:Xl,LineCurve:Zl,LineCurve3:Bx,QuadraticBezierCurve:ld,QuadraticBezierCurve3:kx,SplineCurve:cd});class Vx extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Zl(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new hd[i.type]().fromJSON(i))}return this}}class vl extends Vx{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zl(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new ld(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const o=new ad(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,r,o,c),this}absellipse(t,e,n,i,s,r,o,c){const l=new Xl(t,e,n,i,s,r,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $l extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(s.slice(),3)),this.setAttribute("uv",new ee(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new P,x=new P,b=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],x),f(e[w+2],b),c(v,x,b,y)}function c(y,v,x,b){const w=b+1,E=[];for(let A=0;A<=w;A++){E[A]=[];const M=y.clone().lerp(x,A/w),S=v.clone().lerp(x,A/w),U=w-A;for(let N=0;N<=U;N++)N===0&&A===w?E[A][N]=M:E[A][N]=M.clone().lerp(S,N/U)}for(let A=0;A<w;A++)for(let M=0;M<2*(w-A)-1;M++){const S=Math.floor(M/2);M%2===0?(d(E[A][S+1]),d(E[A+1][S]),d(E[A][S])):(d(E[A][S+1]),d(E[A+1][S+1]),d(E[A+1][S]))}}function l(y){const v=new P;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(y),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function h(){const y=new P;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const x=g(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;r.push(x,1-b)}_(),u()}function u(){for(let y=0;y<r.length;y+=6){const v=r[y+0],x=r[y+2],b=r[y+4],w=Math.max(v,x,b),E=Math.min(v,x,b);w>.9&&E<.1&&(v<.2&&(r[y+0]+=1),x<.2&&(r[y+2]+=1),b<.2&&(r[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,v){const x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function _(){const y=new P,v=new P,x=new P,b=new P,w=new lt,E=new lt,A=new lt;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),w.set(r[S+0],r[S+1]),E.set(r[S+2],r[S+3]),A.set(r[S+4],r[S+5]),b.copy(y).add(v).add(x).divideScalar(3);const U=g(b);m(w,S+0,y,U),m(E,S+2,v,U),m(A,S+4,x,U)}}function m(y,v,x,b){b<0&&y.x===1&&(r[v]=y.x-1),x.x===0&&x.z===0&&(r[v]=b/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $l(t.vertices,t.indices,t.radius,t.details)}}class Oo extends vl{constructor(t){super(t),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new vl().fromJSON(i))}return this}}const Gx={triangulate:function(a,t,e=2){const n=t&&t.length,i=n?t[0]*e:a.length;let s=ud(a,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let o,c,l,h,u,d,f;if(n&&(s=Xx(a,t,s,e)),a.length>80*e){o=l=a[0],c=h=a[1];for(let _=e;_<i;_+=e)u=a[_],d=a[_+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Dr(s,r,e,o,c,f,0),r}};function ud(a,t,e,n,i){let s,r;if(i===sv(a,t,e,n)>0)for(s=t;s<e;s+=n)r=jh(s,a[s],a[s+1],r);else for(s=e-n;s>=t;s-=n)r=jh(s,a[s],a[s+1],r);return r&&ta(r,r.next)&&(Ir(r),r=r.next),r}function es(a,t){if(!a)return a;t||(t=a);let e=a,n;do if(n=!1,!e.steiner&&(ta(e,e.next)||ne(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Dr(a,t,e,n,i,s,r){if(!a)return;!r&&s&&Kx(a,n,i,s);let o=a,c,l;for(;a.prev!==a.next;){if(c=a.prev,l=a.next,s?Wx(a,n,i,s):Hx(a)){t.push(c.i/e|0),t.push(a.i/e|0),t.push(l.i/e|0),Ir(a),a=l.next,o=l.next;continue}if(a=l,a===o){r?r===1?(a=jx(es(a),t,e),Dr(a,t,e,n,i,s,2)):r===2&&qx(a,t,e,n,i,s):Dr(es(a),t,e,n,i,s,1);break}}}function Hx(a){const t=a.prev,e=a,n=a.next;if(ne(t,e,n)>=0)return!1;const i=t.x,s=e.x,r=n.x,o=t.y,c=e.y,l=n.y,h=i<s?i<r?i:r:s<r?s:r,u=o<c?o<l?o:l:c<l?c:l,d=i>s?i>r?i:r:s>r?s:r,f=o>c?o>l?o:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&Us(i,o,s,c,r,l,_.x,_.y)&&ne(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Wx(a,t,e,n){const i=a.prev,s=a,r=a.next;if(ne(i,s,r)>=0)return!1;const o=i.x,c=s.x,l=r.x,h=i.y,u=s.y,d=r.y,f=o<c?o<l?o:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,m=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=yl(f,_,t,e,n),y=yl(m,g,t,e,n);let v=a.prevZ,x=a.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=m&&v.y>=_&&v.y<=g&&v!==i&&v!==r&&Us(o,h,c,u,l,d,v.x,v.y)&&ne(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=m&&x.y>=_&&x.y<=g&&x!==i&&x!==r&&Us(o,h,c,u,l,d,x.x,x.y)&&ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=m&&v.y>=_&&v.y<=g&&v!==i&&v!==r&&Us(o,h,c,u,l,d,v.x,v.y)&&ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=m&&x.y>=_&&x.y<=g&&x!==i&&x!==r&&Us(o,h,c,u,l,d,x.x,x.y)&&ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jx(a,t,e){let n=a;do{const i=n.prev,s=n.next.next;!ta(i,s)&&dd(i,n,n.next,s)&&zr(i,s)&&zr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ir(n),Ir(n.next),n=a=s),n=n.next}while(n!==a);return es(n)}function qx(a,t,e,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&ev(r,o)){let c=fd(r,o);r=es(r,r.next),c=es(c,c.next),Dr(r,t,e,n,i,s,0),Dr(c,t,e,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function Xx(a,t,e,n){const i=[];let s,r,o,c,l;for(s=0,r=t.length;s<r;s++)o=t[s]*n,c=s<r-1?t[s+1]*n:a.length,l=ud(a,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(tv(l));for(i.sort(Yx),s=0;s<i.length;s++)e=Zx(i[s],e);return e}function Yx(a,t){return a.x-t.x}function Zx(a,t){const e=$x(a,t);if(!e)return t;const n=fd(e,a);return es(n,n.next),es(e,e.next)}function $x(a,t){let e=t,n=-1/0,i;const s=a.x,r=a.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&Us(r<l?s:n,r,c,l,r<l?n:s,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(s-e.x),zr(e,a)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Jx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Jx(a,t){return ne(a.prev,a,t.prev)<0&&ne(t.next,a,a.next)<0}function Kx(a,t,e,n){let i=a;do i.z===0&&(i.z=yl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Qx(i)}function Qx(a){let t,e,n,i,s,r,o,c,l=1;do{for(e=a,a=null,s=null,r=0;e;){for(r++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(r>1);return a}function yl(a,t,e,n,i){return a=(a-e)*i|0,t=(t-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function tv(a){let t=a,e=a;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==a);return e}function Us(a,t,e,n,i,s,r,o){return(i-r)*(t-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(s-o)>=(i-r)*(n-o)}function ev(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!nv(a,t)&&(zr(a,t)&&zr(t,a)&&iv(a,t)&&(ne(a.prev,a,t.prev)||ne(a,t.prev,t))||ta(a,t)&&ne(a.prev,a,a.next)>0&&ne(t.prev,t,t.next)>0)}function ne(a,t,e){return(t.y-a.y)*(e.x-t.x)-(t.x-a.x)*(e.y-t.y)}function ta(a,t){return a.x===t.x&&a.y===t.y}function dd(a,t,e,n){const i=bo(ne(a,t,e)),s=bo(ne(a,t,n)),r=bo(ne(e,n,a)),o=bo(ne(e,n,t));return!!(i!==s&&r!==o||i===0&&yo(a,e,t)||s===0&&yo(a,n,t)||r===0&&yo(e,a,n)||o===0&&yo(e,t,n))}function yo(a,t,e){return t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)}function bo(a){return a>0?1:a<0?-1:0}function nv(a,t){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==t.i&&e.next.i!==t.i&&dd(e,e.next,a,t))return!0;e=e.next}while(e!==a);return!1}function zr(a,t){return ne(a.prev,a,a.next)<0?ne(a,t,a.next)>=0&&ne(a,a.prev,t)>=0:ne(a,t,a.prev)<0||ne(a,a.next,t)<0}function iv(a,t){let e=a,n=!1;const i=(a.x+t.x)/2,s=(a.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==a);return n}function fd(a,t){const e=new bl(a.i,a.x,a.y),n=new bl(t.i,t.x,t.y),i=a.next,s=t.prev;return a.next=t,t.prev=a,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function jh(a,t,e,n){const i=new bl(a,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ir(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function bl(a,t,e){this.i=a,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sv(a,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class Gs{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Gs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];qh(t),Xh(n,t);let r=t.length;e.forEach(qh);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Xh(n,e[c]);const o=Gx.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function qh(a){const t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function Xh(a,t){for(let e=0;e<t.length;e++)a.push(t[e].x),a.push(t[e].y)}class Jl extends ue{constructor(t=new Oo([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];r(l)}this.setAttribute("position",new ee(i,3)),this.setAttribute("uv",new ee(s,2)),this.computeVertexNormals();function r(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:rv;let v,x=!1,b,w,E,A;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,b=p.computeFrenetFrames(h,!1),w=new P,E=new P,A=new P),d||(g=0,f=0,_=0,m=0);const M=o.extractPoints(l);let S=M.shape;const U=M.holes;if(!Gs.isClockWise(S)){S=S.reverse();for(let it=0,J=U.length;it<J;it++){const et=U[it];Gs.isClockWise(et)&&(U[it]=et.reverse())}}const D=Gs.triangulateShape(S,U),z=S;for(let it=0,J=U.length;it<J;it++){const et=U[it];S=S.concat(et)}function O(it,J,et){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(J,et)}const G=S.length,W=D.length;function B(it,J,et){let vt,ht,At;const Ct=it.x-J.x,wt=it.y-J.y,It=et.x-it.x,jt=et.y-it.y,L=Ct*Ct+wt*wt,T=Ct*jt-wt*It;if(Math.abs(T)>Number.EPSILON){const j=Math.sqrt(L),st=Math.sqrt(It*It+jt*jt),rt=J.x-wt/j,dt=J.y+Ct/j,R=et.x-jt/st,tt=et.y+It/st,H=((R-rt)*jt-(tt-dt)*It)/(Ct*jt-wt*It);vt=rt+Ct*H-it.x,ht=dt+wt*H-it.y;const ft=vt*vt+ht*ht;if(ft<=2)return new lt(vt,ht);At=Math.sqrt(ft/2)}else{let j=!1;Ct>Number.EPSILON?It>Number.EPSILON&&(j=!0):Ct<-Number.EPSILON?It<-Number.EPSILON&&(j=!0):Math.sign(wt)===Math.sign(jt)&&(j=!0),j?(vt=-wt,ht=Ct,At=Math.sqrt(L)):(vt=Ct,ht=wt,At=Math.sqrt(L/2))}return new lt(vt/At,ht/At)}const K=[];for(let it=0,J=z.length,et=J-1,vt=it+1;it<J;it++,et++,vt++)et===J&&(et=0),vt===J&&(vt=0),K[it]=B(z[it],z[et],z[vt]);const X=[];let pt,nt=K.concat();for(let it=0,J=U.length;it<J;it++){const et=U[it];pt=[];for(let vt=0,ht=et.length,At=ht-1,Ct=vt+1;vt<ht;vt++,At++,Ct++)At===ht&&(At=0),Ct===ht&&(Ct=0),pt[vt]=B(et[vt],et[At],et[Ct]);X.push(pt),nt=nt.concat(pt)}for(let it=0;it<g;it++){const J=it/g,et=f*Math.cos(J*Math.PI/2),vt=_*Math.sin(J*Math.PI/2)+m;for(let ht=0,At=z.length;ht<At;ht++){const Ct=O(z[ht],K[ht],vt);V(Ct.x,Ct.y,-et)}for(let ht=0,At=U.length;ht<At;ht++){const Ct=U[ht];pt=X[ht];for(let wt=0,It=Ct.length;wt<It;wt++){const jt=O(Ct[wt],pt[wt],vt);V(jt.x,jt.y,-et)}}}const q=_+m;for(let it=0;it<G;it++){const J=d?O(S[it],nt[it],q):S[it];x?(E.copy(b.normals[0]).multiplyScalar(J.x),w.copy(b.binormals[0]).multiplyScalar(J.y),A.copy(v[0]).add(E).add(w),V(A.x,A.y,A.z)):V(J.x,J.y,0)}for(let it=1;it<=h;it++)for(let J=0;J<G;J++){const et=d?O(S[J],nt[J],q):S[J];x?(E.copy(b.normals[it]).multiplyScalar(et.x),w.copy(b.binormals[it]).multiplyScalar(et.y),A.copy(v[it]).add(E).add(w),V(A.x,A.y,A.z)):V(et.x,et.y,u/h*it)}for(let it=g-1;it>=0;it--){const J=it/g,et=f*Math.cos(J*Math.PI/2),vt=_*Math.sin(J*Math.PI/2)+m;for(let ht=0,At=z.length;ht<At;ht++){const Ct=O(z[ht],K[ht],vt);V(Ct.x,Ct.y,u+et)}for(let ht=0,At=U.length;ht<At;ht++){const Ct=U[ht];pt=X[ht];for(let wt=0,It=Ct.length;wt<It;wt++){const jt=O(Ct[wt],pt[wt],vt);x?V(jt.x,jt.y+v[h-1].y,v[h-1].x+et):V(jt.x,jt.y,u+et)}}}$(),ct();function $(){const it=i.length/3;if(d){let J=0,et=G*J;for(let vt=0;vt<W;vt++){const ht=D[vt];Pt(ht[2]+et,ht[1]+et,ht[0]+et)}J=h+g*2,et=G*J;for(let vt=0;vt<W;vt++){const ht=D[vt];Pt(ht[0]+et,ht[1]+et,ht[2]+et)}}else{for(let J=0;J<W;J++){const et=D[J];Pt(et[2],et[1],et[0])}for(let J=0;J<W;J++){const et=D[J];Pt(et[0]+G*h,et[1]+G*h,et[2]+G*h)}}n.addGroup(it,i.length/3-it,0)}function ct(){const it=i.length/3;let J=0;mt(z,J),J+=z.length;for(let et=0,vt=U.length;et<vt;et++){const ht=U[et];mt(ht,J),J+=ht.length}n.addGroup(it,i.length/3-it,1)}function mt(it,J){let et=it.length;for(;--et>=0;){const vt=et;let ht=et-1;ht<0&&(ht=it.length-1);for(let At=0,Ct=h+g*2;At<Ct;At++){const wt=G*At,It=G*(At+1),jt=J+vt+wt,L=J+ht+wt,T=J+ht+It,j=J+vt+It;Lt(jt,L,T,j)}}}function V(it,J,et){c.push(it),c.push(J),c.push(et)}function Pt(it,J,et){at(it),at(J),at(et);const vt=i.length/3,ht=y.generateTopUV(n,i,vt-3,vt-2,vt-1);bt(ht[0]),bt(ht[1]),bt(ht[2])}function Lt(it,J,et,vt){at(it),at(J),at(vt),at(J),at(et),at(vt);const ht=i.length/3,At=y.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);bt(At[0]),bt(At[1]),bt(At[3]),bt(At[1]),bt(At[2]),bt(At[3])}function at(it){i.push(c[it*3+0]),i.push(c[it*3+1]),i.push(c[it*3+2])}function bt(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ov(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new hd[i.type]().fromJSON(i)),new Jl(n,t.options)}}const rv={generateTopUV:function(a,t,e,n,i){const s=t[e*3],r=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new lt(s,r),new lt(o,c),new lt(l,h)]},generateSideWallUV:function(a,t,e,n,i,s){const r=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],_=t[i*3+2],m=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new lt(r,1-c),new lt(l,1-u),new lt(d,1-_),new lt(m,1-p)]:[new lt(o,1-c),new lt(h,1-u),new lt(f,1-_),new lt(g,1-p)]}};function ov(a,t,e){if(e.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];e.shapes.push(s.uuid)}else e.shapes.push(a.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kl extends $l{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kl(t.radius,t.detail)}}class ea extends si{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pd extends Vs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Yh={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class av{constructor(t,e,n){const i=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const lv=new av;class Ql{constructor(t){this.manager=t!==void 0?t:lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const qn={};class cv extends Error{constructor(t,e){super(t),this.response=e}}class md extends Ql{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Yh.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(qn[t]!==void 0){qn[t].push({onLoad:e,onProgress:n,onError:i});return}qn[t]=[],qn[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=qn[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,_=f!==0;let m=0;const g=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{m+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:m,total:f});for(let w=0,E=h.length;w<E;w++){const A=h[w];A.onProgress&&A.onProgress(b)}p.enqueue(x),y()}})}}});return new Response(g)}else throw new cv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Yh.add(t,l);const h=qn[t];delete qn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=qn[t];if(h===void 0)throw this.manager.itemError(t),l;delete qn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class gd extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ja=new se,Zh=new P,$h=new P;class hv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class uv extends hv{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $n extends gd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new uv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dv extends gd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fv{constructor(t,e,n=0,i=1/0){this.ray=new $o(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ml(t,this,n,e),n.sort(Jh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ml(t[i],this,n,e);return n.sort(Jh),n}}function Jh(a,t){return a.distance-t.distance}function Ml(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)Ml(i[s],t,e,!0)}}class Kh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qh=new P,Mo=new P;class pv{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Qh.subVectors(t,this.start),Mo.subVectors(this.end,this.start);const n=Mo.dot(Mo);let s=Mo.dot(Qh)/n;return e&&(s=Me(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ti extends Rr{constructor(t=10,e=10,n=4473924,i=8947848){n=new Vt(n),i=new Vt(i);const s=e/2,r=t/e,o=t/2,c=[],l=[];for(let d=0,f=0,_=-o;d<=e;d++,_+=r){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const m=d===s?n:i;m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3}const h=new ue;h.setAttribute("position",new ee(c,3)),h.setAttribute("color",new ee(l,3));const u=new Vs({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class mv{constructor(){this.type="ShapePath",this.color=new Vt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new vl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,r){return this.currentPath.bezierCurveTo(t,e,n,i,s,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const y=[];for(let v=0,x=p.length;v<x;v++){const b=p[v],w=new Oo;w.curves=b.curves,y.push(w)}return y}function n(p,y){const v=y.length;let x=!1;for(let b=v-1,w=0;w<v;b=w++){let E=y[b],A=y[w],M=A.x-E.x,S=A.y-E.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(E=y[w],M=-M,A=y[b],S=-S),p.y<E.y||p.y>A.y)continue;if(p.y===E.y){if(p.x===E.x)return!0}else{const U=S*(p.x-E.x)-M*(p.y-E.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(p.y!==E.y)continue;if(A.x<=p.x&&p.x<=E.x||E.x<=p.x&&p.x<=A.x)return!0}}return x}const i=Gs.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,o,c;const l=[];if(s.length===1)return o=s[0],c=new Oo,c.curves=o.curves,l.push(c),l;let h=!i(s[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,m;d[_]=void 0,f[_]=[];for(let p=0,y=s.length;p<y;p++)o=s[p],m=o.getPoints(),r=i(m),r=t?!r:r,r?(!h&&d[_]&&_++,d[_]={s:new Oo,p:m},d[_].s.curves=o.curves,h&&_++,f[_]=[]):f[_].push({h:o,p:m[0]});if(!d[0])return e(s);if(d.length>1){let p=!1,y=0;for(let v=0,x=d.length;v<x;v++)u[v]=[];for(let v=0,x=d.length;v<x;v++){const b=f[v];for(let w=0;w<b.length;w++){const E=b[w];let A=!0;for(let M=0;M<d.length;M++)n(E.p,d[M].p)&&(v!==M&&y++,A?(A=!1,u[M].push(E)):p=!0);A&&u[v].push(E)}}y>0&&p===!1&&(f=u)}let g;for(let p=0,y=d.length;p<y;p++){c=d[p].s,l.push(c),g=f[p];for(let v=0,x=g.length;v<x;v++)c.holes.push(g[v].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);function Jn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _d(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ks={duration:.5,overwrite:!1,delay:0},tc,Re,me,pn=1e8,$t=1/pn,Sl=Math.PI*2,gv=Sl/4,_v=0,xd=Math.sqrt,xv=Math.cos,vv=Math.sin,Se=function(t){return typeof t=="string"},oe=function(t){return typeof t=="function"},ri=function(t){return typeof t=="number"},ec=function(t){return typeof t>"u"},Fn=function(t){return typeof t=="object"},ke=function(t){return t!==!1},nc=function(){return typeof window<"u"},So=function(t){return oe(t)||Se(t)},vd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},De=Array.isArray,wl=/(?:-?\.?\d|\.)+/gi,yd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bd=/[+-]=-?[.\d]+/,Md=/[^,'"\[\]\s]+/gi,yv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,te,hn,El,ic,sn={},Vo={},Sd,wd=function(t){return(Vo=ns(t,sn))&&He},sc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Go=function(t,e){return!e&&console.warn(t)},Ed=function(t,e){return t&&(sn[t]=e)&&Vo&&(Vo[t]=e)||sn},Ur=function(){return 0},bv={suppressEvents:!0,isStart:!0,kill:!1},No={suppressEvents:!0,kill:!1},Mv={suppressEvents:!0},rc={},Mi=[],Tl={},Td,Qe={},Xa={},tu=30,Fo=[],oc="",ac=function(t){var e=t[0],n,i;if(Fn(e)||oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Fo.length;i--&&!Fo[i].targetTest(e););n=Fo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new $d(t[i],n)))||t.splice(i,1);return t},Yi=function(t){return t._gsap||ac(mn(t))[0]._gsap},Ad=function(t,e,n){return(n=t[e])&&oe(n)?t[e]():ec(n)&&t.getAttribute&&t.getAttribute(e)||n},Ve=function(t,e){return(t=t.split(",")).forEach(e)||t},he=function(t){return Math.round(t*1e5)/1e5||0},we=function(t){return Math.round(t*1e7)/1e7||0},Hs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Sv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ho=function(){var t=Mi.length,e=Mi.slice(0),n,i;for(Tl={},Mi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Cd=function(t,e,n,i){Mi.length&&!Re&&Ho(),t.render(e,n,i||Re&&e<0&&(t._initted||t._startAt)),Mi.length&&!Re&&Ho()},Ld=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Md).length<2?e:Se(t)?t.trim():t},Pd=function(t){return t},_n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ns=function(t,e){for(var n in e)t[n]=e[n];return t},eu=function a(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Fn(e[n])?a(t[n]||(t[n]={}),e[n]):e[n]);return t},Wo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Er=function(t){var e=t.parent||te,n=t.keyframes?wv(De(t.keyframes)):_n;if(ke(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ev=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Rd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t[i],o;if(s)for(o=e[s];r&&r[s]>o;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=r,e.parent=e._dp=t,e},na=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,r=e._next;s?s._next=r:t[n]===e&&(t[n]=r),r?r._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ti=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Zi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Tv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Al=function(t,e,n,i){return t._startAt&&(Re?t._startAt.revert(No):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Av=function a(t){return!t||t._ts&&a(t.parent)},nu=function(t){return t._repeat?Qs(t._tTime,t=t.duration()+t._rDelay)*t:0},Qs=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},jo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ia=function(t){return t._end=we(t._start+(t._tDur/Math.abs(t._ts||t._rts||$t)||0))},sa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=we(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ia(t),n._dirty||Zi(n,t)),t},Dd=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=jo(t.rawTime(),e),(!e._dur||Hr(0,e.totalDuration(),n)-e._tTime>$t)&&e.render(n,!0)),Zi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-$t}},zn=function(t,e,n,i){return e.parent&&Ti(e),e._start=we((ri(n)?n:n||t!==te?cn(t,n,e):t._time)+e._delay),e._end=we(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Rd(t,e,"_first","_last",t._sort?"_start":0),Cl(e)||(t._recent=e),i||Dd(t,e),t._ts<0&&sa(t,t._tTime),t},zd=function(t,e){return(sn.ScrollTrigger||sc("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},Id=function(t,e,n,i,s){if(cc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Re&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Td!==tn.frame)return Mi.push(t),t._lazy=[s,i],1},Cv=function a(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||a(e))},Cl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Lv=function(t,e,n,i){var s=t.ratio,r=e<0||!e&&(!t._start&&Cv(t)&&!(!t._initted&&Cl(t))||(t._ts<0||t._dp._ts<0)&&!Cl(t))?0:1,o=t._rDelay,c=0,l,h,u;if(o&&t._repeat&&(c=Hr(0,t._tDur,e),h=Qs(c,o),t._yoyo&&h&1&&(r=1-r),h!==Qs(t._tTime,o)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||Re||i||t._zTime===$t||!e&&t._zTime){if(!t._initted&&Id(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?$t:0),n||(n=e&&!u),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=c,l=t._pt;l;)l.r(r,l.d),l=l._next;e<0&&Al(t,e,n,!0),t._onUpdate&&!n&&gn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&Ti(t,1),!n&&!Re&&(gn(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Pv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},tr=function(t,e,n,i){var s=t._repeat,r=we(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:we(r*(s+1)+t._rDelay*s):r,o>0&&!i&&sa(t,t._tTime=t._tDur*o),t.parent&&ia(t),n||Zi(t.parent,t),t},iu=function(t){return t instanceof Fe?Zi(t):tr(t,t._dur)},Rv={_start:0,endTime:Ur,totalDuration:Ur},cn=function a(t,e,n){var i=t.labels,s=t._recent||Rv,r=t.duration()>=pn?s.endTime(!1):t._dur,o,c,l;return Se(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=r),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(De(n)?n[0]:n).totalDuration()),o>1?a(t,e.substr(0,o-1),n)+c:r+c)):e==null?r:+e},Tr=function(t,e,n){var i=ri(e[1]),s=(i?2:1)+(t<2?0:1),r=e[s],o,c;if(i&&(r.duration=e[1]),r.parent=n,t){for(o=r,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=ke(c.vars.inherit)&&c.parent;r.immediateRender=ke(o.immediateRender),t<2?r.runBackwards=1:r.startAt=e[s-1]}return new ge(e[0],r,e[s+1])},Ci=function(t,e){return t||t===0?e(t):e},Hr=function(t,e,n){return n<t?t:n>e?e:n},Le=function(t,e){return!Se(t)||!(e=yv.exec(t))?"":e[1]},Dv=function(t,e,n){return Ci(n,function(i){return Hr(t,e,i)})},Ll=[].slice,Ud=function(t,e){return t&&Fn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Fn(t[0]))&&!t.nodeType&&t!==hn},zv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||Ud(i,1)?(s=n).push.apply(s,mn(i)):n.push(i)})||n},mn=function(t,e,n){return me&&!e&&me.selector?me.selector(t):Se(t)&&!n&&(El||!er())?Ll.call((e||ic).querySelectorAll(t),0):De(t)?zv(t,n):Ud(t)?Ll.call(t,0):t?[t]:[]},Pl=function(t){return t=mn(t)[0]||Go("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return mn(e,n.querySelectorAll?n:n===t?Go("Invalid scope")||ic.createElement("div"):t)}},Od=function(t){return t.sort(function(){return .5-Math.random()})},Nd=function(t){if(oe(t))return t;var e=Fn(t)?t:{each:t},n=$i(e.ease),i=e.from||0,s=parseFloat(e.base)||0,r={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,u=i;return Se(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],u=i[1]),function(d,f,_){var m=(_||e).length,g=r[m],p,y,v,x,b,w,E,A,M;if(!g){if(M=e.grid==="auto"?0:(e.grid||[1,pn])[1],!M){for(E=-pn;E<(E=_[M++].getBoundingClientRect().left)&&M<m;);M--}for(g=r[m]=[],p=c?Math.min(M,m)*h-.5:i%M,y=M===pn?0:c?m*u/M-.5:i/M|0,E=0,A=pn,w=0;w<m;w++)v=w%M-p,x=y-(w/M|0),g[w]=b=l?Math.abs(l==="y"?x:v):xd(v*v+x*x),b>E&&(E=b),b<A&&(A=b);i==="random"&&Od(g),g.max=E-A,g.min=A,g.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(M>m?m-1:l?l==="y"?m/M:M:Math.max(M,m/M))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Le(e.amount||e.each)||0,n=n&&m<0?Xd(n):n}return m=(g[d]-g.min)/g.max||0,we(g.b+(n?n(m):m)*g.v)+g.u}},Rl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=we(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ri(n)?0:Le(n))}},Fd=function(t,e){var n=De(t),i,s;return!n&&Fn(t)&&(i=n=t.radius||pn,t.values?(t=mn(t.values),(s=!ri(t[0]))&&(i*=i)):t=Rl(t.increment)),Ci(e,n?oe(t)?function(r){return s=t(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=pn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-o,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-o),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:r,s||h===r||ri(r)?h:h+Le(r)}:Rl(t))},Bd=function(t,e,n,i){return Ci(De(t)?!e:n===!0?!!(n=0):!i,function(){return De(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Iv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,r){return r(s)},i)}},Uv=function(t,e){return function(n){return t(parseFloat(n))+(e||Le(n))}},Ov=function(t,e,n){return Vd(t,e,0,1,n)},kd=function(t,e,n){return Ci(n,function(i){return t[~~e(i)]})},Nv=function a(t,e,n){var i=e-t;return De(t)?kd(t,a(0,t.length),e):Ci(n,function(s){return(i+(s-t)%i)%i+t})},Fv=function a(t,e,n){var i=e-t,s=i*2;return De(t)?kd(t,a(0,t.length-1),e):Ci(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>i?s-r:r)})},Or=function(t){for(var e=0,n="",i,s,r,o;~(i=t.indexOf("random(",e));)r=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,r-i-7).match(o?Md:wl),n+=t.substr(e,i-e)+Bd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=r+1;return n+t.substr(e,t.length-e)},Vd=function(t,e,n,i,s){var r=e-t,o=i-n;return Ci(s,function(c){return n+((c-t)/r*o||0)})},Bv=function a(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var r=Se(t),o={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),r)t={p:t},e={p:e};else if(De(t)&&!De(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(a(t[l-1],t[l]));u--,s=function(_){_*=u;var m=Math.min(d,~~_);return h[m](_-m)},n=e}else i||(t=ns(De(t)?[]:{},t));if(!h){for(c in e)lc.call(o,t,c,"get",e[c]);s=function(_){return dc(_,o)||(r?t.p:t)}}}return Ci(n,s)},su=function(t,e,n){var i=t.labels,s=pn,r,o,c;for(r in i)o=i[r]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=r,s=o);return c},gn=function(t,e,n){var i=t.vars,s=i[e],r=me,o=t._ctx,c,l,h;if(!!s)return c=i[e+"Params"],l=i.callbackScope||t,n&&Mi.length&&Ho(),o&&(me=o),h=c?s.apply(l,c):s.call(l),me=r,h},br=function(t){return Ti(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Re),t.progress()<1&&gn(t,"onInterrupt"),t},Ns,Gd=[],Hd=function(t){if(!nc()){Gd.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ur,render:dc,add:lc,kill:ey,modifier:ty,rawVars:0},r={targetTest:0,get:0,getSetter:uc,aliases:{},register:0};if(er(),t!==i){if(Qe[e])return;_n(i,_n(Wo(t,s),r)),ns(i.prototype,ns(s,Wo(t,r))),Qe[i.prop=e]=i,t.targetTest&&(Fo.push(i),rc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ed(e,i),t.register&&t.register(He,i,Ge)},Zt=255,Mr={aqua:[0,Zt,Zt],lime:[0,Zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Zt],navy:[0,0,128],white:[Zt,Zt,Zt],olive:[128,128,0],yellow:[Zt,Zt,0],orange:[Zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Zt,0,0],pink:[Zt,192,203],cyan:[0,Zt,Zt],transparent:[Zt,Zt,Zt,0]},Ya=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Zt+.5|0},Wd=function(t,e,n){var i=t?ri(t)?[t>>16,t>>8&Zt,t&Zt]:0:Mr.black,s,r,o,c,l,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Mr[t])i=Mr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),o=t.charAt(3),t="#"+s+s+r+r+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Zt,i&Zt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Zt,t&Zt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(wl),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,r=h<=.5?h*(l+1):h+l-h*l,s=h*2-r,i.length>3&&(i[3]*=1),i[0]=Ya(c+1/3,s,r),i[1]=Ya(c,s,r),i[2]=Ya(c-1/3,s,r);else if(~t.indexOf("="))return i=t.match(yd),n&&i.length<4&&(i[3]=1),i}else i=t.match(wl)||Mr.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Zt,r=i[1]/Zt,o=i[2]/Zt,u=Math.max(s,r,o),d=Math.min(s,r,o),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===s?(r-o)/f+(r<o?6:0):u===r?(o-s)/f+2:(s-r)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},jd=function(t){var e=[],n=[],i=-1;return t.split(Si).forEach(function(s){var r=s.match(Os)||[];e.push.apply(e,r),n.push(i+=r.length+1)}),e.c=n,e},ru=function(t,e,n){var i="",s=(t+i).match(Si),r=e?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Wd(d,e,1))&&r+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=jd(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Si,"1").split(Os),u=l.length-1;o<u;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||r+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(Si),u=l.length-1;o<u;o++)i+=l[o]+s[o];return i+l[u]},Si=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Mr)a+="|"+t+"\\b";return new RegExp(a+")","gi")}(),kv=/hsl[a]?\(/,qd=function(t){var e=t.join(" "),n;if(Si.lastIndex=0,Si.test(e))return n=kv.test(e),t[1]=ru(t[1],n),t[0]=ru(t[0],n,jd(t[1])),!0},Nr,tn=function(){var a=Date.now,t=500,e=33,n=a(),i=n,s=1e3/240,r=s,o=[],c,l,h,u,d,f,_=function m(g){var p=a()-i,y=g===!0,v,x,b,w;if(p>t&&(n+=p-e),i+=p,b=i-n,v=b-r,(v>0||y)&&(w=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,r+=v+(v>=s?4:s-v),x=1),y||(c=l(m)),x)for(f=0;f<o.length;f++)o[f](b,d,w,g)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Sd&&(!El&&nc()&&(hn=El=window,ic=hn.document||{},sn.gsap=He,(hn.gsapVersions||(hn.gsapVersions=[])).push(He.version),wd(Vo||hn.GreenSockGlobals||!hn.gsap&&hn||{}),h=hn.requestAnimationFrame,Gd.forEach(Hd)),c&&u.sleep(),l=h||function(g){return setTimeout(g,r-u.time*1e3+1|0)},Nr=1,_(2))},sleep:function(){(h?hn.cancelAnimationFrame:clearTimeout)(c),Nr=0,l=Ur},lagSmoothing:function(g,p){t=g||1/0,e=Math.min(p||33,t)},fps:function(g){s=1e3/(g||240),r=u.time*1e3+s},add:function(g,p,y){var v=p?function(x,b,w,E){g(x,b,w,E),u.remove(v)}:g;return u.remove(g),o[y?"unshift":"push"](v),er(),v},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),er=function(){return!Nr&&tn.wake()},Wt={},Vv=/^[\d.\-M][\d.\-,\s]/,Gv=/["']/g,Hv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,r=n.length,o,c,l;s<r;s++)c=n[s],o=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(Gv,"").trim():+l,i=c.substr(o+1).trim();return e},Wv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},jv=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Hv(e[1])]:Wv(t).split(",").map(Ld)):Wt._CE&&Vv.test(t)?Wt._CE("",t):n},Xd=function(t){return function(e){return 1-t(1-e)}},Yd=function a(t,e){for(var n=t._first,i;n;)n instanceof Fe?a(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?a(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},$i=function(t,e){return t&&(oe(t)?t:Wt[t]||jv(t))||e},rs=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},r;return Ve(t,function(o){Wt[o]=sn[o]=s,Wt[r=o.toLowerCase()]=n;for(var c in s)Wt[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Wt[o+"."+c]=s[c]}),s},Zd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Za=function a(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),r=s/Sl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*vv((h-r)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:Zd(o);return s=Sl/s,c.config=function(l,h){return a(t,l,h)},c},$a=function a(t,e){e===void 0&&(e=1.70158);var n=function(r){return r?--r*r*((e+1)*r+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Zd(n);return i.config=function(s){return a(t,s)},i};Ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var e=t<5?t+1:t;rs(a+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;rs("Elastic",Za("in"),Za("out"),Za());(function(a,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?a*o*o:o<n?a*Math.pow(o-1.5/t,2)+.75:o<i?a*(o-=2.25/t)*o+.9375:a*Math.pow(o-2.625/t,2)+.984375};rs("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);rs("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});rs("Circ",function(a){return-(xd(1-a*a)-1)});rs("Sine",function(a){return a===1?1:-xv(a*gv)+1});rs("Back",$a("in"),$a("out"),$a());Wt.SteppedEase=Wt.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,r=1-$t;return function(o){return((i*Hr(0,r,o)|0)+s)*n}}};Ks.ease=Wt["quad.out"];Ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return oc+=a+","+a+"Params,"});var $d=function(t,e){this.id=_v++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ad,this.set=e?e.getSetter:uc},nr=function(){function a(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,tr(this,+e.duration,1,1),this.data=e.data,me&&(this._ctx=me,me.data.push(this)),Nr||tn.wake()}var t=a.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,tr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(er(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(sa(this,n),!s._dp||s.parent||Dd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Qs(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-$t?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?jo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$t?0:this._rts,this.totalTime(Hr(-Math.abs(this._delay),this._tDur,i),!0),ia(this),Tv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(er(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ke(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Mv);var i=Re;return Re=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Re=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,iu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,iu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),ke(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ke(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$t:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$t,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$t)},t.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},t.then=function(n){var i=this;return new Promise(function(s){var r=oe(n)?n:Pd,o=function(){var l=i.then;i.then=null,oe(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=l),s(r),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){br(this)},a}();_n(nr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$t,_prom:0,_ps:!1,_rts:1});var Fe=function(a){_d(t,a);function t(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ke(n.sortChildren),te&&zn(n.parent||te,Jn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zd(Jn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,r){return Tr(0,arguments,this),this},e.from=function(i,s,r){return Tr(1,arguments,this),this},e.fromTo=function(i,s,r,o){return Tr(2,arguments,this),this},e.set=function(i,s,r){return s.duration=0,s.parent=this,Er(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ge(i,s,cn(this,r),1),this},e.call=function(i,s,r){return zn(this,ge.delayedCall(0,i,s),r)},e.staggerTo=function(i,s,r,o,c,l,h){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=l,r.onCompleteParams=h,r.parent=this,new ge(i,r,cn(this,c)),this},e.staggerFrom=function(i,s,r,o,c,l,h){return r.runBackwards=1,Er(r).immediateRender=ke(r.immediateRender),this.staggerTo(i,s,r,o,c,l,h)},e.staggerFromTo=function(i,s,r,o,c,l,h,u){return o.startAt=r,Er(o).immediateRender=ke(o.immediateRender),this.staggerTo(i,s,o,c,l,h,u)},e.render=function(i,s,r){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:we(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,m,g,p,y,v,x,b,w,E;if(this!==te&&h>c&&i>=0&&(h=c),h!==this._tTime||r||u){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),d=h,x=this._start,v=this._ts,p=!v,u&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,r);if(d=we(h%g),h===c?(m=this._repeat,d=l):(m=~~(h/g),m&&m===h/g&&(d=l,m--),d>l&&(d=l)),b=Qs(this._tTime,g),!o&&this._tTime&&b!==m&&this._tTime-b*g-this._dur<=0&&(b=m),w&&m&1&&(d=l-d,E=1),m!==b&&!this._lock){var A=w&&b&1,M=A===(w&&m&1);if(m<b&&(A=!A),o=A?0:l,this._lock=1,this.render(o||(E?0:we(m*g)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&gn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,o=A?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Yd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Pv(this,we(o),we(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!m&&(gn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,r),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-$t);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,r||Re&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=S?-$t:$t);break}}f=_}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-$t)._zTime=d>=o?1:-1,this._ts))return this._start=x,ia(this),this.render(i,s,r);this._onUpdate&&!s&&gn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Ti(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(gn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var r=this;if(ri(s)||(s=cn(this,s,i)),!(i instanceof nr)){if(De(i))return i.forEach(function(o){return r.add(o,s)}),this;if(Se(i))return this.addLabel(i,s);if(oe(i))i=ge.delayedCall(0,i);else return this}return this!==i?zn(this,i,s):this},e.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-pn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof ge?s&&c.push(l):(r&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},e.remove=function(i){return Se(i)?this.removeLabel(i):oe(i)?this.killTweensOf(i):(na(this,i),i===this._recent&&(this._recent=this._last),Zi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=we(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,r){var o=ge.delayedCall(0,s||Ur,r);return o.data="isPause",this._hasPause=1,zn(this,o,cn(this,i))},e.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&Ti(s),s=s._next},e.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),c=o.length;c--;)_i!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var r=[],o=mn(i),c=this._first,l=ri(s),h;c;)c instanceof ge?Sv(c._targets,o)&&(l?(!_i||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(h=c.getTweensOf(o,s)).length&&r.push.apply(r,h),c=c._next;return r},e.tweenTo=function(i,s){s=s||{};var r=this,o=cn(r,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,_=ge.to(r,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale())||$t,onStart:function(){if(r.pause(),!f){var g=s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale());_._dur!==g&&tr(_,g,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,r){return this.tweenTo(s,_n({startAt:{time:cn(this,i)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),su(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),su(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$t)},e.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,c=this.labels,l;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=r&&(c[l]+=i);return Zi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return a.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zi(this)},e.totalDuration=function(i){var s=0,r=this,o=r._last,c=pn,l,h,u;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(u=r.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&r._sort&&o._ts&&!r._lock?(r._lock=1,zn(r,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!r._dp||u&&u.smoothChildTiming)&&(r._start+=h/r._ts,r._time-=h,r._tTime-=h),r.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;tr(r,r===te&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(i){if(te._ts&&(Cd(te,jo(i,te)),Td=tn.frame),tn.frame>=tu){tu+=nn.autoSleep||120;var s=te._first;if((!s||!s._ts)&&nn.autoSleep&&tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||tn.sleep()}}},t}(nr);_n(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var qv=function(t,e,n,i,s,r,o){var c=new Ge(this._pt,t,e,0,1,nf,null,s),l=0,h=0,u,d,f,_,m,g,p,y;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Or(i)),r&&(y=[n,i],r(y,t,e),n=y[0],i=y[1]),d=n.match(qa)||[];u=qa.exec(i);)_=u[0],m=i.substring(l,u.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(g=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:m||h===1?m:",",s:g,c:_.charAt(1)==="="?Hs(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},l=qa.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(bd.test(i)||p)&&(c.e=0),this._pt=c,c},lc=function(t,e,n,i,s,r,o,c,l,h){oe(i)&&(i=i(s||0,t,r));var u=t[e],d=n!=="get"?n:oe(u)?l?t[e.indexOf("set")||!oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=oe(u)?l?Jv:tf:hc,_;if(Se(i)&&(~i.indexOf("random(")&&(i=Or(i)),i.charAt(1)==="="&&(_=Hs(d,i)+(Le(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Dl)return!isNaN(d*i)&&i!==""?(_=new Ge(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Qv:ef,0,f),l&&(_.fp=l),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&sc(e,i),qv.call(this,t,e,d,i,f,c||nn.stringFilter,l))},Xv=function(t,e,n,i,s){if(oe(t)&&(t=Ar(t,s,e,n,i)),!Fn(t)||t.style&&t.nodeType||De(t)||vd(t))return Se(t)?Ar(t,s,e,n,i):t;var r={},o;for(o in t)r[o]=Ar(t[o],s,e,n,i);return r},Jd=function(t,e,n,i,s,r){var o,c,l,h;if(Qe[t]&&(o=new Qe[t]).init(s,o.rawVars?e[t]:Xv(e[t],i,s,r,n),n,i,r)!==!1&&(n._pt=c=new Ge(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ns))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},_i,Dl,cc=function a(t,e,n){var i=t.vars,s=i.ease,r=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,d=i.runBackwards,f=i.yoyoEase,_=i.keyframes,m=i.autoRevert,g=t._dur,p=t._startAt,y=t._targets,v=t.parent,x=v&&v.data==="nested"?v.vars.targets:y,b=t._overwrite==="auto"&&!tc,w=t.timeline,E,A,M,S,U,N,D,z,O,G,W,B,K;if(w&&(!_||!s)&&(s="none"),t._ease=$i(s,Ks.ease),t._yEase=f?Xd($i(f===!0?s:f,Ks.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!w&&!!i.runBackwards,!w||_&&!i.stagger){if(z=y[0]?Yi(y[0]).harness:0,B=z&&i[z.prop],E=Wo(i,rc),p&&(p._zTime<0&&p.progress(1),e<0&&d&&o&&!m?p.render(-1,!0):p.revert(d&&g?No:bv),p._lazy=0),r){if(Ti(t._startAt=ge.set(y,_n({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&ke(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:h,callbackScope:u,stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re||!o&&!m)&&t._startAt.revert(No),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&g&&!p){if(e&&(o=!1),M=_n({overwrite:!1,data:"isFromStart",lazy:o&&!p&&ke(c),immediateRender:o,stagger:0,parent:v},E),B&&(M[z.prop]=B),Ti(t._startAt=ge.set(y,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Re?t._startAt.revert(No):t._startAt.render(-1,!0)),t._zTime=e,!o)a(t._startAt,$t,$t);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&ke(c)||c&&!g,A=0;A<y.length;A++){if(U=y[A],D=U._gsap||ac(y)[A]._gsap,t._ptLookup[A]=G={},Tl[D.id]&&Mi.length&&Ho(),W=x===y?A:x.indexOf(U),z&&(O=new z).init(U,B||E,t,W,x)!==!1&&(t._pt=S=new Ge(t._pt,U,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(X){G[X]=S}),O.priority&&(N=1)),!z||B)for(M in E)Qe[M]&&(O=Jd(M,E,t,W,U,x))?O.priority&&(N=1):G[M]=S=lc.call(t,U,M,"get",E[M],W,x,0,i.stringFilter);t._op&&t._op[A]&&t.kill(U,t._op[A]),b&&t._pt&&(_i=t,te.killTweensOf(U,G,t.globalTime(e)),K=!t.parent,_i=0),t._pt&&c&&(Tl[D.id]=1)}N&&sf(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!K,_&&e<=0&&w.render(pn,!0,!0)},Yv=function(t,e,n,i,s,r,o){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(l=u[d][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return Dl=1,t.vars[e]="+=0",cc(t,o),Dl=0,1;c.push(l)}for(d=c.length;d--;)h=c[d],l=h._pt||h,l.s=(i||i===0)&&!s?i:l.s+(i||0)+r*l.c,l.c=n-l.s,h.e&&(h.e=he(n)+Le(h.e)),h.b&&(h.b=l.s+Le(h.b))},Zv=function(t,e){var n=t[0]?Yi(t[0]).harness:0,i=n&&n.aliases,s,r,o,c;if(!i)return e;s=ns({},e);for(r in i)if(r in s)for(c=i[r].split(","),o=c.length;o--;)s[c[o]]=s[r];return s},$v=function(t,e,n,i){var s=e.ease||i||"power1.inOut",r,o;if(De(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(r in e)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(t),v:e[r],e:s})},Ar=function(t,e,n,i,s){return oe(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?Or(t):t},Kd=oc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qd={};Ve(Kd+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Qd[a]=1});var ge=function(a){_d(t,a);function t(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:Er(i))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,m=c.defaults,g=c.scrollTrigger,p=c.yoyoEase,y=i.parent||te,v=(De(n)||vd(n)?ri(n[0]):"length"in i)?[n]:mn(n),x,b,w,E,A,M,S,U;if(o._targets=v.length?ac(v):Go("GSAP target "+n+" not found. https://greensock.com",!nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||So(l)||So(h)){if(i=o.vars,x=o.timeline=new Fe({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=Jn(o),x._start=0,d||So(l)||So(h)){if(E=v.length,S=d&&Nd(d),Fn(d))for(A in d)~Kd.indexOf(A)&&(U||(U={}),U[A]=d[A]);for(b=0;b<E;b++)w=Wo(i,Qd),w.stagger=0,p&&(w.yoyoEase=p),U&&ns(w,U),M=v[b],w.duration=+Ar(l,Jn(o),b,M,v),w.delay=(+Ar(h,Jn(o),b,M,v)||0)-o._delay,!d&&E===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),x.to(M,w,S?S(b,M,v):0),x._ease=Wt.none;x.duration()?l=h=0:o.timeline=0}else if(_){Er(_n(x.vars.defaults,{ease:"none"})),x._ease=$i(_.ease||i.ease||"none");var N=0,D,z,O;if(De(_))_.forEach(function(G){return x.to(v,G,">")}),x.duration();else{w={};for(A in _)A==="ease"||A==="easeEach"||$v(A,_[A],w,_.easeEach);for(A in w)for(D=w[A].sort(function(G,W){return G.t-W.t}),N=0,b=0;b<D.length;b++)z=D[b],O={ease:z.e,duration:(z.t-(b?D[b-1].t:0))/100*l},O[A]=z.v,x.to(v,O,N),N+=O.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||o.duration(l=x.duration())}else o.timeline=0;return f===!0&&!tc&&(_i=Jn(o),te.killTweensOf(v),_i=0),zn(y,Jn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!l&&!_&&o._start===we(y._time)&&ke(u)&&Av(Jn(o))&&y.data!=="nested")&&(o._tTime=-$t,o.render(Math.max(0,-h)||0)),g&&zd(Jn(o),g),o}var e=t.prototype;return e.render=function(i,s,r){var o=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-$t&&!h?c:i<$t?0:i,d,f,_,m,g,p,y,v,x;if(!l)Lv(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,v=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(m*100+i,s,r);if(d=we(u%m),u===c?(_=this._repeat,d=l):(_=~~(u/m),_&&_===u/m&&(d=l,_--),d>l&&(d=l)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=l-d),g=Qs(this._tTime,m),d===o&&!r&&this._initted)return this._tTime=u,this;_!==g&&(v&&this._yEase&&Yd(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=r=1,this.render(we(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Id(this,h?i:d,r,s,u))return this._tTime=0,this;if(o!==this._time)return this;if(l!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(d/l),this._from&&(this.ratio=y=1-y),d&&!o&&!s&&!_&&(gn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(i<0?i:!d&&p?-$t:v._dur*v._ease(d/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Al(this,i,s,r),gn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&gn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Al(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ti(this,1),!s&&!(h&&!o)&&(u||o||p)&&(gn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,r,o){Nr||tn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||cc(this,c),l=this._ease(c/this._dur),Yv(this,i,s,r,o,l,c)?this.resetTo(i,s,r,o):(sa(this,0),this.parent||Rd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?br(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,_i&&_i.vars.overwrite!==!0)._first||br(this),this.parent&&r!==this.timeline.totalDuration()&&tr(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,c=i?mn(i):o,l=this._ptLookup,h=this._pt,u,d,f,_,m,g,p;if((!s||s==="all")&&Ev(o,c))return s==="all"&&(this._pt=0),br(this);for(u=this._op=this._op||[],s!=="all"&&(Se(s)&&(m={},Ve(s,function(y){return m[y]=1}),s=m),s=Zv(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){d=l[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(m in _)g=d&&d[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&na(this,g,"_pt"),delete d[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&h&&br(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Tr(1,arguments)},t.delayedCall=function(i,s,r,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},t.fromTo=function(i,s,r){return Tr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,r){return te.killTweensOf(i,s,r)},t}(nr);_n(ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ve("staggerTo,staggerFrom,staggerFromTo",function(a){ge[a]=function(){var t=new Fe,e=Ll.call(arguments,0);return e.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,e)}});var hc=function(t,e,n){return t[e]=n},tf=function(t,e,n){return t[e](n)},Jv=function(t,e,n,i){return t[e](i.fp,n)},Kv=function(t,e,n){return t.setAttribute(e,n)},uc=function(t,e){return oe(t[e])?tf:ec(t[e])&&t.setAttribute?Kv:hc},ef=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Qv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},nf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},dc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ty=function(t,e,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(t,e,n),s=r},ey=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?na(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ny=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},sf=function(t){for(var e=t._pt,n,i,s,r;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:r)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:r=e,e=n}t._pt=s},Ge=function(){function a(e,n,i,s,r,o,c,l,h){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||ef,this.d=c||this,this.set=l||hc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=a.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ny,this.m=n,this.mt=s,this.tween=i},a}();Ve(oc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return rc[a]=1});sn.TweenMax=sn.TweenLite=ge;sn.TimelineLite=sn.TimelineMax=Fe;te=new Fe({sortChildren:!1,defaults:Ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=qd;var ir=[],Bo={},iy=[],ou=0,Ja=function(t){return(Bo[t]||iy).map(function(e){return e()})},zl=function(){var t=Date.now(),e=[];t-ou>2&&(Ja("matchMediaInit"),ir.forEach(function(n){var i=n.queries,s=n.conditions,r,o,c,l;for(o in i)r=hn.matchMedia(i[o]).matches,r&&(c=1),r!==s[o]&&(s[o]=r,l=1);l&&(n.revert(),c&&e.push(n))}),Ja("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),ou=t,Ja("matchMedia"))},rf=function(){function a(e,n){this.selector=n&&Pl(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=a.prototype;return t.add=function(n,i,s){oe(n)&&(s=i,i=n,n=oe);var r=this,o=function(){var l=me,h=r.selector,u;return l&&l!==r&&l.data.push(r),s&&(r.selector=Pl(s)),me=r,u=i.apply(r,arguments),oe(u)&&r._r.push(u),me=l,r.selector=h,r.isReverted=!1,u};return r.last=o,n===oe?o(r):n?r[n]=o:o},t.ignore=function(n){var i=me;me=null,n(this),me=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return r.splice(r.indexOf(l),1)}))}),r.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof nr)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var o=ir.indexOf(this);~o&&ir.splice(o,1)}},t.revert=function(n){this.kill(n||{})},a}(),sy=function(){function a(e){this.contexts=[],this.scope=e}var t=a.prototype;return t.add=function(n,i,s){Fn(n)||(n={matches:n});var r=new rf(0,s||this.scope),o=r.conditions={},c,l,h;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(l in n)l==="all"?h=1:(c=hn.matchMedia(n[l]),c&&(ir.indexOf(r)<0&&ir.push(r),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(zl):c.addEventListener("change",zl)));return h&&i(r),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),qo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Hd(i)})},timeline:function(t){return new Fe(t)},getTweensOf:function(t,e){return te.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=mn(t)[0]);var s=Yi(t||{}).get,r=n?Pd:Ld;return n==="native"&&(n=""),t&&(e?r((Qe[e]&&Qe[e].get||s)(t,e,n,i)):function(o,c,l){return r((Qe[o]&&Qe[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=mn(t),t.length>1){var i=t.map(function(h){return He.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var r=Qe[e],o=Yi(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=r?function(h){var u=new r;Ns._pt=0,u.init(t,n?h+n:h,Ns,0,[t]),u.render(1,u),Ns._pt&&dc(1,Ns)}:o.set(t,c);return r?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=He.to(t,ns((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),r=function(c,l,h){return s.resetTo(e,c,l,h)};return r.tween=s,r},isTweening:function(t){return te.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=$i(t.ease,Ks.ease)),eu(Ks,t||{})},config:function(t){return eu(nn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,r=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qe[o]&&!sn[o]&&Go(e+" effect requires "+o+" plugin.")}),Xa[e]=function(o,c,l){return n(mn(o),_n(c||{},s),l)},r&&(Fe.prototype[e]=function(o,c,l){return this.add(Xa[e](o,Fn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Wt[t]=$i(e)},parseEase:function(t,e){return arguments.length?$i(t,e):Wt},getById:function(t){return te.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Fe(t),i,s;for(n.smoothChildTiming=ke(t.smoothChildTiming),te.remove(n),n._dp=0,n._time=n._tTime=te._time,i=te._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ge&&i.vars.onComplete===i._targets[0]))&&zn(n,i,i._start-i._delay),i=s;return zn(te,n,0),n},context:function(t,e){return t?new rf(t,e):me},matchMedia:function(t){return new sy(t)},matchMediaRefresh:function(){return ir.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||zl()},addEventListener:function(t,e){var n=Bo[t]||(Bo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Bo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Nv,wrapYoyo:Fv,distribute:Nd,random:Bd,snap:Fd,normalize:Ov,getUnit:Le,clamp:Dv,splitColor:Wd,toArray:mn,selector:Pl,mapRange:Vd,pipe:Iv,unitize:Uv,interpolate:Bv,shuffle:Od},install:wd,effects:Xa,ticker:tn,updateRoot:Fe.updateRoot,plugins:Qe,globalTimeline:te,core:{PropTween:Ge,globals:Ed,Tween:ge,Timeline:Fe,Animation:nr,getCache:Yi,_removeLinkedListItem:na,reverting:function(){return Re},context:function(t){return t&&me&&(me.data.push(t),t._ctx=me),me},suppressOverwrites:function(t){return tc=t}}};Ve("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return qo[a]=ge[a]});tn.add(Fe.updateRoot);Ns=qo.to({},{duration:0});var ry=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},oy=function(t,e){var n=t._targets,i,s,r;for(i in e)for(s=n.length;s--;)r=t._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=ry(r,i)),r&&r.modifier&&r.modifier(e[i],t,n[s],i))},Ka=function(t,e){return{name:t,rawVars:1,init:function(i,s,r){r._onInit=function(o){var c,l;if(Se(s)&&(c={},Ve(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}oy(o,s)}}}},He=qo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var r,o,c;this.tween=n;for(r in e)c=t.getAttribute(r)||"",o=this.add(t,"setAttribute",(c||0)+"",e[r],i,s,0,0,r),o.op=r,o.b=c,this._props.push(r)},render:function(t,e){for(var n=e._pt;n;)Re?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ka("roundProps",Rl),Ka("modifiers"),Ka("snap",Fd))||qo;ge.version=Fe.version=He.version="3.11.5";Sd=1;nc()&&er();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var au,xi,Ws,fc,qi,lu,pc,ay=function(){return typeof window<"u"},oi={},Vi=180/Math.PI,js=Math.PI/180,ws=Math.atan2,cu=1e8,mc=/([A-Z])/g,ly=/(left|right|width|margin|padding|x)/i,cy=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Il=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},uy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},dy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},of=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},af=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},fy=function(t,e,n){return t.style[e]=n},py=function(t,e,n){return t.style.setProperty(e,n)},my=function(t,e,n){return t._gsap[e]=n},gy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},_y=function(t,e,n,i,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},xy=function(t,e,n,i,s){var r=t._gsap;r[e]=n,r.renderTransform(s,r)},ie="transform",Ln=ie+"Origin",vy=function a(t,e){var n=this,i=this.target,s=i.style;if(t in oi){if(this.tfm=this.tfm||{},t!=="transform")t=Un[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return n.tfm[r]=Kn(i,r)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Kn(i,t);else return Un.transform.split(",").forEach(function(r){return a.call(n,r,e)});if(this.props.indexOf(ie)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=ie}(s||e)&&this.props.push(t,e,s[t])},lf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},yy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,r;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(mc,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=pc(),(!s||!s.isStart)&&!n[ie]&&(lf(n),i.uncache=1)}},cf=function(t,e){var n={target:t,props:[],revert:yy,save:vy};return t._gsap||He.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},hf,Ul=function(t,e){var n=xi.createElementNS?xi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xi.createElement(t);return n.style?n:xi.createElement(t)},On=function a(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(mc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&a(t,sr(e)||e,1)||""},hu="O,Moz,ms,Ms,Webkit".split(","),sr=function(t,e,n){var i=e||qi,s=i.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(hu[r]+t in s););return r<0?null:(r===3?"ms":r>=0?hu[r]:"")+t},Ol=function(){ay()&&window.document&&(au=window,xi=au.document,Ws=xi.documentElement,qi=Ul("div")||{style:{}},Ul("div"),ie=sr(ie),Ln=ie+"Origin",qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hf=!!sr("perspective"),pc=He.core.reverting,fc=1)},Qa=function a(t){var e=Ul("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Ws.appendChild(e),e.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ws.removeChild(e),this.style.cssText=s,r},uu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},uf=function(t){var e;try{e=t.getBBox()}catch{e=Qa.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Qa||(e=Qa.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+uu(t,["x","cx","x1"])||0,y:+uu(t,["y","cy","y1"])||0,width:0,height:0}:e},df=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&uf(t))},Fr=function(t,e){if(e){var n=t.style;e in oi&&e!==Ln&&(e=ie),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(mc,"-$1").toLowerCase())):n.removeAttribute(e)}},vi=function(t,e,n,i,s,r){var o=new Ge(t._pt,e,n,0,1,r?af:of);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},du={deg:1,rad:1,turn:1},by={grid:1,flex:1},Ai=function a(t,e,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=qi.style,c=ly.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,m,g,p;return i===r||!s||du[i]||du[r]?s:(r!=="px"&&!d&&(s=a(t,e,n,"px")),p=t.getCTM&&df(t),(f||r==="%")&&(oi[e]||~e.indexOf("adius"))?(_=p?t.getBBox()[c?"width":"height"]:t[h],he(f?s/_*u:s/100*_)):(o[c?"width":"height"]=u+(d?r:i),m=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===xi||!m.appendChild)&&(m=xi.body),g=m._gsap,g&&f&&g.width&&c&&g.time===tn.time&&!g.uncache?he(s/g.width*u):((f||r==="%")&&!by[On(m,"display")]&&(o.position=On(t,"position")),m===t&&(o.position="static"),m.appendChild(qi),_=qi[h],m.removeChild(qi),o.position="absolute",c&&f&&(g=Yi(m),g.time=tn.time,g.width=m[h]),he(d?_*s/u:_&&s?u/_*s:0))))},Kn=function(t,e,n,i){var s;return fc||Ol(),e in Un&&e!=="transform"&&(e=Un[e],~e.indexOf(",")&&(e=e.split(",")[0])),oi[e]&&e!=="transform"?(s=kr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Yo(On(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xo[e]&&Xo[e](t,e,n)||On(t,e)||Ad(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ai(t,e,s,n)+n:s},My=function(t,e,n,i){if(!n||n==="none"){var s=sr(e,t,1),r=s&&On(t,s,1);r&&r!==n?(e=s,n=r):e==="borderColor"&&(n=On(t,"borderTopColor"))}var o=new Ge(this._pt,t.style,e,0,1,nf),c=0,l=0,h,u,d,f,_,m,g,p,y,v,x,b;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=On(t,e)||i,t.style[e]=n),h=[n,i],qd(h),n=h[0],i=h[1],d=n.match(Os)||[],b=i.match(Os)||[],b.length){for(;u=Os.exec(i);)g=u[0],y=i.substring(c,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(m=d[l++]||"")&&(f=parseFloat(m)||0,x=m.substr((f+"").length),g.charAt(1)==="="&&(g=Hs(f,g)+x),p=parseFloat(g),v=g.substr((p+"").length),c=Os.lastIndex-v.length,v||(v=v||nn.units[e]||x,c===i.length&&(i+=v,o.e+=v)),x!==v&&(f=Ai(t,e,m,v)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?af:of;return bd.test(i)&&(o.e=0),this._pt=o,o},fu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=fu[n]||n,e[1]=fu[i]||i,e.join(" ")},wy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,r=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],oi[o]&&(c=1,o=o==="transformOrigin"?Ln:ie),Fr(n,o);c&&(Fr(n,ie),r&&(r.svg&&n.removeAttribute("transform"),kr(n,1),r.uncache=1,lf(i)))}},Xo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var r=t._pt=new Ge(t._pt,e,n,0,0,wy);return r.u=i,r.pr=-10,r.tween=s,t._props.push(n),1}}},Br=[1,0,0,1,0,0],ff={},pf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pu=function(t){var e=On(t,ie);return pf(e)?Br:e.substr(7).match(yd).map(he)},gc=function(t,e){var n=t._gsap||Yi(t),i=t.style,s=pu(t),r,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Br:s):(s===Br&&!t.offsetParent&&t!==Ws&&!n.svg&&(c=i.display,i.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(l=1,o=t.nextElementSibling,Ws.appendChild(t)),s=pu(t),c?i.display=c:Fr(t,"display"),l&&(o?r.insertBefore(t,o):r?r.appendChild(t):Ws.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nl=function(t,e,n,i,s,r){var o=t._gsap,c=s||gc(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=c[0],_=c[1],m=c[2],g=c[3],p=c[4],y=c[5],v=e.split(" "),x=parseFloat(v[0])||0,b=parseFloat(v[1])||0,w,E,A,M;n?c!==Br&&(E=f*g-_*m)&&(A=x*(g/E)+b*(-m/E)+(m*y-g*p)/E,M=x*(-_/E)+b*(f/E)-(f*y-_*p)/E,x=A,b=M):(w=uf(t),x=w.x+(~v[0].indexOf("%")?x/100*w.width:x),b=w.y+(~(v[1]||v[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(p=x-l,y=b-h,o.xOffset=u+(p*f+y*m)-p,o.yOffset=d+(p*_+y*g)-y):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ln]="0px 0px",r&&(vi(r,o,"xOrigin",l,x),vi(r,o,"yOrigin",h,b),vi(r,o,"xOffset",u,o.xOffset),vi(r,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},kr=function(t,e){var n=t._gsap||new $d(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,r="px",o="deg",c=getComputedStyle(t),l=On(t,Ln)||"0",h,u,d,f,_,m,g,p,y,v,x,b,w,E,A,M,S,U,N,D,z,O,G,W,B,K,X,pt,nt,q,$,ct;return h=u=d=m=g=p=y=v=x=0,f=_=1,n.svg=!!(t.getCTM&&df(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ie]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ie]!=="none"?c[ie]:"")),i.scale=i.rotate=i.translate="none"),E=gc(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),l=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Nl(t,W||l,!!W||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,w=n.yOrigin||0,E!==Br&&(U=E[0],N=E[1],D=E[2],z=E[3],h=O=E[4],u=G=E[5],E.length===6?(f=Math.sqrt(U*U+N*N),_=Math.sqrt(z*z+D*D),m=U||N?ws(N,U)*Vi:0,y=D||z?ws(D,z)*Vi+m:0,y&&(_*=Math.abs(Math.cos(y*js))),n.svg&&(h-=b-(b*U+w*D),u-=w-(b*N+w*z))):(ct=E[6],q=E[7],X=E[8],pt=E[9],nt=E[10],$=E[11],h=E[12],u=E[13],d=E[14],A=ws(ct,nt),g=A*Vi,A&&(M=Math.cos(-A),S=Math.sin(-A),W=O*M+X*S,B=G*M+pt*S,K=ct*M+nt*S,X=O*-S+X*M,pt=G*-S+pt*M,nt=ct*-S+nt*M,$=q*-S+$*M,O=W,G=B,ct=K),A=ws(-D,nt),p=A*Vi,A&&(M=Math.cos(-A),S=Math.sin(-A),W=U*M-X*S,B=N*M-pt*S,K=D*M-nt*S,$=z*S+$*M,U=W,N=B,D=K),A=ws(N,U),m=A*Vi,A&&(M=Math.cos(A),S=Math.sin(A),W=U*M+N*S,B=O*M+G*S,N=N*M-U*S,G=G*M-O*S,U=W,O=B),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),f=he(Math.sqrt(U*U+N*N+D*D)),_=he(Math.sqrt(G*G+ct*ct)),A=ws(O,G),y=Math.abs(A)>2e-4?A*Vi:0,x=$?1/($<0?-$:$):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!pf(On(t,ie)),W&&t.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=d+r,n.scaleX=he(f),n.scaleY=he(_),n.rotation=he(m)+o,n.rotationX=he(g)+o,n.rotationY=he(p)+o,n.skewX=y+o,n.skewY=v+o,n.transformPerspective=x+r,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Ln]=Yo(l)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?Ty:hf?mf:Ey,n.uncache=0,n},Yo=function(t){return(t=t.split(" "))[0]+" "+t[1]},tl=function(t,e,n){var i=Le(e);return he(parseFloat(e)+parseFloat(Ai(t,"x",n+"px",i)))+i},Ey=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mf(t,e)},Ui="0deg",fr="0px",Oi=") ",mf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,x="",b=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==Ui||h!==Ui)){var w=parseFloat(h)*js,E=Math.sin(w),A=Math.cos(w),M;w=parseFloat(u)*js,M=Math.cos(w),r=tl(y,r,E*M*-v),o=tl(y,o,-Math.sin(w)*-v),c=tl(y,c,A*M*-v+v)}g!==fr&&(x+="perspective("+g+Oi),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||r!==fr||o!==fr||c!==fr)&&(x+=c!==fr||b?"translate3d("+r+", "+o+", "+c+") ":"translate("+r+", "+o+Oi),l!==Ui&&(x+="rotate("+l+Oi),h!==Ui&&(x+="rotateY("+h+Oi),u!==Ui&&(x+="rotateX("+u+Oi),(d!==Ui||f!==Ui)&&(x+="skew("+d+", "+f+Oi),(_!==1||m!==1)&&(x+="scale("+_+", "+m+Oi),y.style[ie]=x||"translate(0, 0)"},Ty=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(r),x=parseFloat(o),b,w,E,A,M;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=js,l*=js,b=Math.cos(c)*u,w=Math.sin(c)*u,E=Math.sin(c-l)*-d,A=Math.cos(c-l)*d,l&&(h*=js,M=Math.tan(l-h),M=Math.sqrt(1+M*M),E*=M,A*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,w*=M)),b=he(b),w=he(w),E=he(E),A=he(A)):(b=u,A=d,w=E=0),(v&&!~(r+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(v=Ai(f,"x",r,"px"),x=Ai(f,"y",o,"px")),(_||m||g||p)&&(v=he(v+_-(_*b+m*E)+g),x=he(x+m-(_*w+m*A)+p)),(i||s)&&(M=f.getBBox(),v=he(v+i/100*M.width),x=he(x+s/100*M.height)),M="matrix("+b+","+w+","+E+","+A+","+v+","+x+")",f.setAttribute("transform",M),y&&(f.style[ie]=M)},Ay=function(t,e,n,i,s){var r=360,o=Se(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Vi:1),l=c-i,h=i+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),u==="cw"&&l<0?l=(l+r*cu)%r-~~(l/r)*r:u==="ccw"&&l>0&&(l=(l-r*cu)%r-~~(l/r)*r)),t._pt=d=new Ge(t._pt,e,n,i,l,hy),d.e=h,d.u="deg",t._props.push(n),d},mu=function(t,e){for(var n in e)t[n]=e[n];return t},Cy=function(t,e,n){var i=mu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,c,l,h,u,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[ie]=e,o=kr(n,1),Fr(n,ie),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ie],r[ie]=e,o=kr(n,1),r[ie]=l);for(c in oi)l=i[c],h=o[c],l!==h&&s.indexOf(c)<0&&(f=Le(l),_=Le(h),u=f!==_?Ai(n,c,l,_):parseFloat(l),d=parseFloat(h),t._pt=new Ge(t._pt,o,c,u,d-u,Il),t._pt.u=_||0,t._props.push(c));mu(o,i)};Ve("padding,margin,Width,Radius",function(a,t){var e="Top",n="Right",i="Bottom",s="Left",r=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?a+o:"border"+o+a});Xo[t>1?"border"+a:a]=function(o,c,l,h,u){var d,f;if(arguments.length<4)return d=r.map(function(_){return Kn(o,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},r.forEach(function(_,m){return f[_]=d[m]=d[m]||d[(m-1)/2|0]}),o.init(c,f,u)}});var gf={name:"css",register:Ol,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var r=this._props,o=t.style,c=n.vars.startAt,l,h,u,d,f,_,m,g,p,y,v,x,b,w,E,A;fc||Ol(),this.styles=this.styles||cf(t),A=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(h=e[m],!(Qe[m]&&Jd(m,e,n,i,t,s)))){if(f=typeof h,_=Xo[m],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Or(h)),_)_(this,t,m,h,n)&&(E=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(m)+"").trim(),h+="",Si.lastIndex=0,Si.test(l)||(g=Le(l),p=Le(h)),p?g!==p&&(l=Ai(t,m,l,p)+p):g&&(h+=g),this.add(o,"setProperty",l,h,i,s,0,0,m),r.push(m),A.push(m,0,o[m]);else if(f!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,i,t,s):c[m],Se(l)&&~l.indexOf("random(")&&(l=Or(l)),Le(l+"")||(l+=nn.units[m]||Le(Kn(t,m))||""),(l+"").charAt(1)==="="&&(l=Kn(t,m))):l=Kn(t,m),d=parseFloat(l),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),m in Un&&(m==="autoAlpha"&&(d===1&&Kn(t,"visibility")==="hidden"&&u&&(d=0),A.push("visibility",0,o.visibility),vi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),m!=="scale"&&m!=="transform"&&(m=Un[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in oi,v){if(this.styles.save(m),x||(b=t._gsap,b.renderTransform&&!e.parseTransform||kr(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new Ge(this._pt,o,ie,0,1,b.renderTransform,b,0,-1),x.dep=1),m==="scale")this._pt=new Ge(this._pt,b,"scaleY",b.scaleY,(y?Hs(b.scaleY,y+u):u)-b.scaleY||0,Il),this._pt.u=0,r.push("scaleY",m),m+="X";else if(m==="transformOrigin"){A.push(Ln,0,o[Ln]),h=Sy(h),b.svg?Nl(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&vi(this,b,"zOrigin",b.zOrigin,p),vi(this,o,m,Yo(l),Yo(h)));continue}else if(m==="svgOrigin"){Nl(t,h,1,w,0,this);continue}else if(m in ff){Ay(this,b,m,d,y?Hs(d,y+h):h);continue}else if(m==="smoothOrigin"){vi(this,b,"smooth",b.smooth,h);continue}else if(m==="force3D"){b[m]=h;continue}else if(m==="transform"){Cy(this,h,t);continue}}else m in o||(m=sr(m)||m);if(v||(u||u===0)&&(d||d===0)&&!cy.test(h)&&m in o)g=(l+"").substr((d+"").length),u||(u=0),p=Le(h)||(m in nn.units?nn.units[m]:g),g!==p&&(d=Ai(t,m,l,p)),this._pt=new Ge(this._pt,v?b:o,m,d,(y?Hs(d,y+u):u)-d,!v&&(p==="px"||m==="zIndex")&&e.autoRound!==!1?dy:Il),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=uy);else if(m in o)My.call(this,t,m,l,y?y+h:h);else if(m in t)this.add(t,m,l||t[m],y?y+h:h,i,s);else if(m!=="parseTransform"){sc(m,h);continue}v||(m in o?A.push(m,0,o[m]):A.push(m,1,l||t[m])),r.push(m)}}E&&sf(this)},render:function(t,e){if(e.tween._time||!pc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Kn,aliases:Un,getSetter:function(t,e,n){var i=Un[e];return i&&i.indexOf(",")<0&&(e=i),e in oi&&e!==Ln&&(t._gsap.x||Kn(t,"x"))?n&&lu===n?e==="scale"?gy:my:(lu=n||{})&&(e==="scale"?_y:xy):t.style&&!ec(t.style[e])?fy:~e.indexOf("-")?py:uc(t,e)},core:{_removeProperty:Fr,_getMatrix:gc}};He.utils.checkPrefix=sr;He.core.getStyleSaver=cf;(function(a,t,e,n){var i=Ve(a+","+t+","+e,function(s){oi[s]=1});Ve(t,function(s){nn.units[s]="deg",ff[s]=1}),Un[i[13]]=a+","+t,Ve(n,function(s){var r=s.split(":");Un[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){nn.units[a]="px"});He.registerPlugin(gf);var Fl=He.registerPlugin(gf)||He;Fl.core.Tween;class _f extends Ql{constructor(t){super(t)}load(t,e,n,i){const s=this,r=new md(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){const c=s.parse(JSON.parse(o));e&&e(c)},n,i)}parse(t){return new Ly(t)}}class Ly{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Py(t,e,this.data);for(let s=0,r=i.length;s<r;s++)n.push(...i[s].toShapes());return n}}function Py(a,t,e){const n=Array.from(a),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,r=[];let o=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)o=0,c-=s;else{const u=Ry(h,i,o,c,e);o+=u.offsetX,r.push(u.path)}}return r}function Ry(a,t,e,n,i){const s=i.glyphs[a]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const r=new mv;let o,c,l,h,u,d,f,_;if(s.o){const m=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let g=0,p=m.length;g<p;)switch(m[g++]){case"m":o=m[g++]*t+e,c=m[g++]*t+n,r.moveTo(o,c);break;case"l":o=m[g++]*t+e,c=m[g++]*t+n,r.lineTo(o,c);break;case"q":l=m[g++]*t+e,h=m[g++]*t+n,u=m[g++]*t+e,d=m[g++]*t+n,r.quadraticCurveTo(u,d,l,h);break;case"b":l=m[g++]*t+e,h=m[g++]*t+n,u=m[g++]*t+e,d=m[g++]*t+n,f=m[g++]*t+e,_=m[g++]*t+n,r.bezierCurveTo(u,d,f,_,l,h);break}}return{offsetX:s.ha*t,path:r}}class dn extends Jl{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}ae.prototype.rotateAroundWorldAxis=function(a,t,e){var n=new ii;const i=new P;i.copy(a).sub(t).normalize(),n.setFromAxisAngle(i,e),this.applyQuaternion(n),this.position.sub(a),this.position.applyQuaternion(n),this.position.add(a)};ae.prototype.rotateAroundWorldAxis2=function(a,t,e){const n=new P;n.copy(a).sub(t).normalize(),this.position.sub(a),this.rotateOnWorldAxis(n,e),this.position.add(a)};const Es=(a,t,e)=>a*(1-e)+t*e;let wo,pr;const ni=6;new P(50,50,50);let Dy=new P(ni*1,-ni,-ni),zy=new P(20,20,20),gu=new P(-ni,-ni,-ni),_u=new P(-ni,-ni,-ni),fi;class Iy{constructor(t){this.planes=[],this.editor=t,this.createPlanes(),this.dir=1,this.strings=t.strings,this.sizeText=.6}updateGridPlanes(){let t=this.editor.sizeProj,e=new Oe(2*t,2*t);this.planes[0].geometry.dispose(),this.planes[0].geometry=e,this.planes[0].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[0].children[0].children[0].applyMatrix4(this.planes[0].children[0].matrixWorld),this.planes[0].children[1].position.set(-t*.9,t*.8,0),this.planes[0].children[1].scale.set(t/4,t/4,t/4),this.planes[1].geometry.dispose(),this.planes[1].geometry=e,this.planes[1].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[1].children[0].children[0].applyMatrix4(this.planes[1].children[0].matrixWorld),this.planes[1].children[1].position.set(-t*.8,-t*.9,0),this.planes[1].children[1].scale.set(t/4,t/4,t/4),this.planes[2].geometry.dispose(),this.planes[2].geometry=e,this.planes[2].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[2].children[0].children[0].applyMatrix4(this.planes[2].children[0].matrixWorld),this.planes[2].children[1].position.set(-t*.9,t*.8,0),this.planes[2].children[1].scale.set(t/4,t/4,t/4)}createPlanes(){let t=this.editor.sizeProj,e=new Oe(2*t,2*t),n=new Ke({visible:!0,transparent:!0,opacity:.1,color:16711680});const i=new Xt(e,n);i.rotateY(Math.PI/2),i.translateZ(-2*t),i.userData.rot=new P(0,-1,0),i.userData.dir=new P(-1,0,0),this.planes.push(i),n=new Ke({visible:!0,transparent:!0,opacity:.1,color:65280});const s=new Xt(e,n);s.translateY(-2*t),s.rotateX(-Math.PI/2),s.userData.rot=new P(1,0,0),s.userData.dir=new P(0,-1,0),this.planes.push(s),n=new Ke({visible:!0,transparent:!0,opacity:.1,color:255});const r=new Xt(e,n);r.translateZ(-2*t),r.userData.rot=!1,r.userData.dir=new P(0,0,-1),this.planes.push(r),new _f().load("../assets/fonts/gentilis_regular.typeface.json",d=>{this.font=d;let f=new dn(this.strings.getKey("planeprojec/plan"),{font:d,size:this.sizeText,height:0});const _=[new ea({color:"black",transparent:!0,opacity:.25})];let m=new Xt(f,_);m.translateY(-t*.95),m.translateX(-t*.85),m.rotateZ(Math.PI/2),s.add(m),s.indexText=s.children.length-1,f=new dn(this.strings.getKey("planeprojec/elevation"),{font:d,size:this.sizeText,height:0}),m=new Xt(f,_),m.translateX(-t*.95),m.translateY(t*.85),i.add(m),i.indexText=i.children.length-1,f=new dn(this.strings.getKey("planeprojec/profile"),{font:d,size:this.sizeText,height:0}),m=new Xt(f,_),m.translateX(-t*.95),m.translateY(t*.85),r.add(m),r.indexText=r.children.length-1});let c=new ji,l=new ti(2*t,2*t,8947848,10066329);l.layers.enableAll(),c.add(l),c.rotateX(Math.PI/2),i.add(c);let h=c.clone();r.add(h);let u=c.clone();s.add(u),this.planeY=s,this.planeZ=r,s.userData.angleTot=0,r.userData.angleTot=0}vistas(t,e,n,i,s=1){this.editor=t;let r=Math.PI/2/60,o=Fl.timeline({repeat:-1,repeatDelay:1e-4,onRepeat:()=>{this.planeY.userData.angleTot+Math.PI/2/60>Math.PI/2&&(r=Math.PI/2-this.planeY.userData.angleTot),this.planeY.rotateAroundWorldAxis(this.points[0],this.points[1],s*r),this.planeZ.rotateAroundWorldAxis(this.points[2],this.points[3],s*r),this.planeY.userData.angleTot+=r,this.planeY.userData.angleTot>=Math.PI/2&&(o.pause(0),this.planeY.userData.angleTot=0,this.planeZ.userData.angleTot=0)}}),c={t:0},l;Fl.to(c,{duration:1,t:1,onStart:()=>{l=this.editor.controls.orbit.target.clone()},onUpdate:()=>{this.editor.camera.position.x=Es(wo.x,pr.x,c.t),this.editor.camera.position.y=Es(wo.y,pr.y,c.t),this.editor.camera.position.z=Es(wo.z,pr.z,c.t),this.editor.camera.lookAt(Es(l.x,fi.x,c.t),Es(l.y,fi.y,c.t),Es(l.z,fi.z,c.t))},onComplete:()=>{this.editor.camera.updateProjectionMatrix(),this.editor.controls.orbit.target.set(fi.x,fi.y,fi.z),this.editor.controls.orbit.update(),c.t=0}})}desplegar(t){wo=t.camera.position.clone(),this.dir==1?(pr=Dy.clone(),fi=gu.clone(),gu.clone()):(pr=zy.clone(),fi=_u.clone(),_u.clone()),this.points=[];const e=6;this.points.push(new P(-e,-e,-e)),this.points.push(new P(-e,-e,e)),this.points.push(new P(-e,e,-e)),this.points.push(new P(-e,-e,-e)),this.vistas(t,this.planes[1],this.planes[2],this.points,this.dir),this.dir*=-1}updateText(t){this.planes[1].children[this.planes[1].indexText].geometry=new dn(t.strings.getKey("planeprojec/plan"),{font:this.font,size:this.sizeText,height:0}),this.planes[0].children[this.planes[0].indexText].geometry=new dn(t.strings.getKey("planeprojec/elevation"),{font:this.font,size:this.sizeText,height:0}),this.planes[2].children[this.planes[2].indexText].geometry=new dn(t.strings.getKey("planeprojec/profile"),{font:this.font,size:this.sizeText,height:0})}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function xf(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[a&255]+Ce[a>>8&255]+Ce[a>>16&255]+Ce[a>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Qn(a,t,e){return Math.max(t,Math.min(e,a))}function Eo(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ze(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Wr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],_=s[r+2],m=s[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=m;return}if(u!==m||c!==d||l!==f||h!==_){let g=1-o;const p=c*d+l*f+h*_+u*m,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,p*y);g=Math.sin(g*w)/b,o=Math.sin(o*w)/b}const x=o*y;if(c=c*g+d*x,l=l*g+f*x,h=h*g+_*x,u=u*g+m*x,g===1-o){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],_=s[r+3];return t[e]=o*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-o*f,t[e+2]=l*_+h*f+o*d-c*u,t[e+3]=h*_-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class gt{constructor(t=0,e=0,n=0){gt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,c=t.w,l=c*e+r*i-o*n,h=c*n+o*e-s*i,u=c*i+s*n-r*e,d=-s*e-r*n-o*i;return this.x=l*c+d*-s+h*-o-u*-r,this.y=h*c+d*-r+u*-s-l*-o,this.z=u*c+d*-o+l*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new gt,xu=new Wr;class qs{constructor(t=0,e=0){qs.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jr{constructor(t=new gt(1/0,1/0,1/0),e=new gt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox),Ts.applyMatrix4(t.matrixWorld),this.union(Ts);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,o=s.count;r<o;r++)Yn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Yn)}else i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),To.subVectors(this.max,mr),As.subVectors(t.a,mr),Cs.subVectors(t.b,mr),Ls.subVectors(t.c,mr),pi.subVectors(Cs,As),mi.subVectors(Ls,Cs),Ni.subVectors(As,Ls);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!nl(e,As,Cs,Ls,To)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,As,Cs,Ls,To))?!1:(Ao.crossVectors(pi,mi),e=[Ao.x,Ao.y,Ao.z],nl(e,As,Cs,Ls,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new gt,new gt,new gt,new gt,new gt,new gt,new gt,new gt],Yn=new gt,Ts=new jr,As=new gt,Cs=new gt,Ls=new gt,pi=new gt,mi=new gt,Ni=new gt,mr=new gt,To=new gt,Ao=new gt,Fi=new gt;function nl(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Fi.fromArray(a,s);const o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}class vf{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const vu=35044,pe=new gt,Co=new qs;class Xs{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Eo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Eo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Eo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Eo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vu&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uy extends Xs{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oy extends Xs{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _c extends Xs{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ny=new jr,gr=new gt,il=new gt;class Fy{constructor(t=new gt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ny.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(il)),this.expandByPoint(gr.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}class Nn{constructor(){Nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,c,l,h,u,d,f,_,m,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nn().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ps.setFromMatrixColumn(t,0).length(),s=1/Ps.setFromMatrixColumn(t,1).length(),r=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=r*h,f=r*u,_=o*h,m=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-m*l,e[9]=-o*c,e[2]=m-d*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,_=l*h,m=l*u;e[0]=d+m*o,e[4]=_*o-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=f*o-_,e[6]=m+d*o,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,_=l*h,m=l*u;e[0]=d-m*o,e[4]=-r*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=r*h,e[9]=m-d*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,_=o*h,m=o*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+m,e[1]=c*u,e[5]=m*l+d,e[9]=f*l-_,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,_=o*c,m=o*l;e[0]=c*h,e[4]=m-d*u,e[8]=_*u+f,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-m*u}else if(t.order==="XZY"){const d=r*c,f=r*l,_=o*c,m=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+m,e[5]=r*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(By,t,ky)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),gi.crossVectors(n,$e),gi.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),gi.crossVectors(n,$e)),gi.normalize(),Lo.crossVectors($e,gi),i[0]=gi.x,i[4]=Lo.x,i[8]=$e.x,i[1]=gi.y,i[5]=Lo.y,i[9]=$e.y,i[2]=gi.z,i[6]=Lo.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],m=n[6],g=n[10],p=n[14],y=n[3],v=n[7],x=n[11],b=n[15],w=i[0],E=i[4],A=i[8],M=i[12],S=i[1],U=i[5],N=i[9],D=i[13],z=i[2],O=i[6],G=i[10],W=i[14],B=i[3],K=i[7],X=i[11],pt=i[15];return s[0]=r*w+o*S+c*z+l*B,s[4]=r*E+o*U+c*O+l*K,s[8]=r*A+o*N+c*G+l*X,s[12]=r*M+o*D+c*W+l*pt,s[1]=h*w+u*S+d*z+f*B,s[5]=h*E+u*U+d*O+f*K,s[9]=h*A+u*N+d*G+f*X,s[13]=h*M+u*D+d*W+f*pt,s[2]=_*w+m*S+g*z+p*B,s[6]=_*E+m*U+g*O+p*K,s[10]=_*A+m*N+g*G+p*X,s[14]=_*M+m*D+g*W+p*pt,s[3]=y*w+v*S+x*z+b*B,s[7]=y*E+v*U+x*O+b*K,s[11]=y*A+v*N+x*G+b*X,s[15]=y*M+v*D+x*W+b*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],m=t[7],g=t[11],p=t[15];return _*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*f-n*c*f)+m*(+e*c*f-e*l*d+s*r*d-i*r*f+i*l*h-s*c*h)+g*(+e*l*u-e*o*f-s*r*u+n*r*f+s*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*d+i*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],m=t[13],g=t[14],p=t[15],y=u*g*l-m*d*l+m*c*f-o*g*f-u*c*p+o*d*p,v=_*d*l-h*g*l-_*c*f+r*g*f+h*c*p-r*d*p,x=h*m*l-_*u*l+_*o*f-r*m*f-h*o*p+r*u*p,b=_*u*c-h*m*c-_*o*d+r*m*d+h*o*g-r*u*g,w=e*y+n*v+i*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=y*E,t[1]=(m*d*s-u*g*s-m*i*f+n*g*f+u*i*p-n*d*p)*E,t[2]=(o*g*s-m*c*s+m*i*l-n*g*l-o*i*p+n*c*p)*E,t[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*E,t[4]=v*E,t[5]=(h*g*s-_*d*s+_*i*f-e*g*f-h*i*p+e*d*p)*E,t[6]=(_*c*s-r*g*s-_*i*l+e*g*l+r*i*p-e*c*p)*E,t[7]=(r*d*s-h*c*s+h*i*l-e*d*l-r*i*f+e*c*f)*E,t[8]=x*E,t[9]=(_*u*s-h*m*s-_*n*f+e*m*f+h*n*p-e*u*p)*E,t[10]=(r*m*s-_*o*s+_*n*l-e*m*l-r*n*p+e*o*p)*E,t[11]=(h*o*s-r*u*s-h*n*l+e*u*l+r*n*f-e*o*f)*E,t[12]=b*E,t[13]=(h*m*i-_*u*i+_*n*d-e*m*d-h*n*g+e*u*g)*E,t[14]=(_*o*i-r*m*i-_*n*c+e*m*c+r*n*g-e*o*g)*E,t[15]=(r*u*i-h*o*i+h*n*c-e*u*c-r*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,c=t.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,c=e._w,l=s+s,h=r+r,u=o+o,d=s*l,f=s*h,_=s*u,m=r*h,g=r*u,p=o*u,y=c*l,v=c*h,x=c*u,b=n.x,w=n.y,E=n.z;return i[0]=(1-(m+p))*b,i[1]=(f+x)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(_+v)*E,i[9]=(g-y)*E,i[10]=(1-(d+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ps.set(i[0],i[1],i[2]).length();const r=Ps.set(i[4],i[5],i[6]).length(),o=Ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);const l=1/s,h=1/r,u=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,c=1/(e-t),l=1/(n-i),h=1/(r-s),u=(e+t)*c,d=(n+i)*l,f=(r+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ps=new gt,Mn=new Nn,By=new gt(0,0,0),ky=new gt(1,1,1),gi=new gt,Lo=new gt,$e=new gt,yu=new Nn,bu=new Wr;class ra{constructor(t=0,e=0,n=0,i=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Qn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bu.setFromEuler(this),this.setFromQuaternion(bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class Vy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}class qr{constructor(){qr.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],m=i[0],g=i[3],p=i[6],y=i[1],v=i[4],x=i[7],b=i[2],w=i[5],E=i[8];return s[0]=r*m+o*y+c*b,s[3]=r*g+o*v+c*w,s[6]=r*p+o*x+c*E,s[1]=l*m+h*y+u*b,s[4]=l*g+h*v+u*w,s[7]=l*p+h*x+u*E,s[2]=d*m+f*y+_*b,s[5]=d*g+f*v+_*w,s[8]=d*p+f*x+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*r-o*l,d=o*c-h*s,f=l*s-r*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(o*n-i*r)*m,t[3]=d*m,t[4]=(h*e-i*c)*m,t[5]=(i*s-o*e)*m,t[6]=f*m,t[7]=(n*c-l*e)*m,t[8]=(r*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-i*l,i*c,-i*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new qr;let Gy=0;const Mu=new gt,Rs=new Wr,Zn=new Nn,Po=new gt,_r=new gt,Hy=new gt,Wy=new Wr,Su=new gt(1,0,0),wu=new gt(0,1,0),Eu=new gt(0,0,1),jy={type:"added"},Tu={type:"removed"};class wi extends vf{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=xf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wi.DEFAULT_UP.clone();const t=new gt,e=new ra,n=new Wr,i=new gt(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nn},normalMatrix:{value:new qr}}),this.matrix=new Nn,this.matrixWorld=new Nn,this.matrixAutoUpdate=wi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(wu,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(wu,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(_r,Po,this.up):Zn.lookAt(Po,_r,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),Rs.setFromRotationMatrix(Zn),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Tu)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Hy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Wy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),_=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}wi.DEFAULT_UP=new gt(0,1,0);wi.DEFAULT_MATRIX_AUTO_UPDATE=!0;wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;function qy(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}let Xy=0;const an=new Nn,rl=new wi,Ds=new gt,Je=new jr,xr=new jr,be=new gt;class oa extends vf{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=xf(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qy(t)?Oy:Uy)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qr().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _c(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new gt(-1/0,-1/0,-1/0),new gt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fy);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new gt,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Je.min,xr.min),Je.expandByPoint(be),be.addVectors(Je.max,xr.max),Je.expandByPoint(be)):(Je.expandByPoint(xr.min),Je.expandByPoint(xr.max))}Je.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(be));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)be.fromBufferAttribute(o,l),c&&(Ds.fromBufferAttribute(t,l),be.add(Ds)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xs(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<o;S++)l[S]=new gt,h[S]=new gt;const u=new gt,d=new gt,f=new gt,_=new qs,m=new qs,g=new qs,p=new gt,y=new gt;function v(S,U,N){u.fromArray(i,S*3),d.fromArray(i,U*3),f.fromArray(i,N*3),_.fromArray(r,S*2),m.fromArray(r,U*2),g.fromArray(r,N*2),d.sub(u),f.sub(u),m.sub(_),g.sub(_);const D=1/(m.x*g.y-g.x*m.y);!isFinite(D)||(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(D),y.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(D),l[S].add(p),l[U].add(p),l[N].add(p),h[S].add(y),h[U].add(y),h[N].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,U=x.length;S<U;++S){const N=x[S],D=N.start,z=N.count;for(let O=D,G=D+z;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new gt,w=new gt,E=new gt,A=new gt;function M(S){E.fromArray(s,S*3),A.copy(E);const U=l[S];b.copy(U),b.sub(E.multiplyScalar(E.dot(U))).normalize(),w.crossVectors(A,U);const D=w.dot(h[S])<0?-1:1;c[S*4]=b.x,c[S*4+1]=b.y,c[S*4+2]=b.z,c[S*4+3]=D}for(let S=0,U=x.length;S<U;++S){const N=x[S],D=N.start,z=N.count;for(let O=D,G=D+z;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xs(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new gt,s=new gt,r=new gt,o=new gt,c=new gt,l=new gt,h=new gt,u=new gt;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),m=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let m=0,g=c.length;m<g;m++){o.isInterleavedBufferAttribute?f=c[m]*o.data.stride+o.offset:f=c[m]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new Xs(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oa,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ol extends oa{constructor(t,e,n,i=1,s=1,r=1,o=1,c=1,l=1){super(),this.type="planeGeometry2",o=Math.floor(o),c=Math.floor(c),l=Math.floor(l);const h=[],u=[];let d=0;console.log("hola"),f(t,e,n,1,-1,r,s,-i,l,c),this.setIndex(h),this.setAttribute("position",new _c(u,3));function f(_,m,g,p,y,v,x,b,w,E,A){const M=v/w,S=x/E,U=v/2,N=x/2,D=b/2,z=w+1,O=E+1,G=new gt;for(let W=0;W<O;W++){const B=W*S-N;for(let K=0;K<z;K++){const X=K*M-U;G[_]=X*p,G[m]=B*y,G[g]=D,u.push(G.x,G.y,G.z)}}for(let W=0;W<E;W++)for(let B=0;B<w;B++){const K=d+B+z*W,X=d+B+z*(W+1),pt=d+(B+1)+z*(W+1),nt=d+(B+1)+z*W;h.push(K,X,nt),h.push(X,pt,nt)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class xc extends oa{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry2",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[];let u=0,d=0;this.planes=[],f("z","y","x",1,-1,n,e,-t,r,s,1),f("x","z","y",1,-1,t,n,-e,i,r,3),f("x","y","z",1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new _c(l,3));function f(_,m,g,p,y,v,x,b,w,E,A){const M=v/w,S=x/E,U=v/2,N=x/2,D=b/2,z=w+1,O=E+1;let G=0,W=0;const B=new gt;for(let K=0;K<O;K++){const X=K*S-N;for(let pt=0;pt<z;pt++){const nt=pt*M-U;B[_]=nt*p,B[m]=X*y,B[g]=D,l.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[g]=b>0?1:-1,h.push(B.x,B.y,B.z),G+=1}}for(let K=0;K<E;K++)for(let X=0;X<w;X++){const pt=u+X+z*K,nt=u+X+z*(K+1),q=u+(X+1)+z*(K+1),$=u+(X+1)+z*K;c.push(pt,nt,$),c.push(nt,q,$),W+=6}o.addGroup(d,W,A),d+=W,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}ae.prototype.rotateAroundWorldAxis=function(a,t,e){var n=new ii;const i=new P;i.copy(a).sub(t).normalize(),n.setFromAxisAngle(i,e),this.applyQuaternion(n),this.position.sub(a),this.position.applyQuaternion(n),this.position.add(a)};ae.prototype.rotateAroundWorldAxis2=function(a,t,e){const n=new P;n.copy(a).sub(t).normalize(),this.position.sub(a),this.rotateOnWorldAxis(n,e),this.position.add(a)};class Yy{constructor(t){this.planes=[],this.editor=t,this.createPlanes(),this.dir=1,this.strings=t.strings,this.size=.5}updateGridPlanes(){let t=this.editor.sizeProj,e=new Oe(2*t,2*t);this.planes[0].geometry.dispose(),this.planes[0].geometry=e,this.planes[0].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[0].children[0].children[0].applyMatrix4(this.planes[0].children[0].matrixWorld),this.planes[0].position.set(t,0,0),this.planes[0].children[0].children[0].position.set(0,-t,-t),e=new Oe(2*t,2*t),this.planes[1].geometry.dispose(),this.planes[1].geometry=e,this.planes[1].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[1].children[0].children[0].applyMatrix4(this.planes[1].children[0].matrixWorld),this.planes[1].position.set(0,t,0),this.planes[1].children[0].children[0].position.set(-t,0,-t),e=new Oe(2*t,2*t),this.planes[2].geometry.dispose(),this.planes[2].geometry=e,this.planes[2].children[0].children[0]=new ti(2*t,2*t,8947848,10066329),this.planes[2].children[0].children[0].applyMatrix4(this.planes[2].children[0].matrixWorld),this.planes[2].position.set(0,0,t),this.planes[2].children[0].children[0].position.set(-t,-t,0)}createPlanes1(){let t=this.editor.sizeProj;console.log(t);const e=1.01;let n=new Oe(2*t+2,2*t+2),i=new Ke({visible:!0,transparent:!0,opacity:.1,color:16711680});const s=new Xt(n,i);s.rotateY(Math.PI/2),s.translateZ(-t-e),s.userData.rot=new P(0,-1,0),s.userData.dir=new P(-1,0,0),this.planes.push(s),i=new Ke({visible:!0,transparent:!0,opacity:.1,color:65280});const r=new Xt(n,i);r.translateY(-t-e),r.rotateX(-Math.PI/2),r.userData.rot=new P(1,0,0),r.userData.dir=new P(0,-1,0),this.planes.push(r),i=new Ke({visible:!0,transparent:!0,opacity:.1,color:255});const o=new Xt(n,i);o.translateZ(-t-e),o.userData.rot=!1,o.userData.dir=new P(0,0,-1),this.planes.push(o),new _f().load("../assets/fonts/gentilis_regular.typeface.json",_=>{this.font=_;let m=new dn(this.strings.getKey("planeprojec/plan"),{font:_,size:this.sizeText,height:0});const g=[new ea({color:"black",transparent:!0,opacity:.5})];let p=new Xt(m,g),y=-t-1,v=t+1,x=.15*Math.sqrt(y*y+v*v+.1*.1);p.position.set(y+.75*x,-v+.5*x,.1),p.scale.set(x,x,x),p.rotateZ(Math.PI/2),r.add(p),r.indexText=r.children.length-1,m=new dn(this.strings.getKey("planeprojec/elevation"),{font:_,size:this.sizeText,height:0}),p=new Xt(m,g),y=-t-1,v=t+1,x=.15*Math.sqrt(y*y+v*v+.1*.1),p.position.set(y+.25*x,v-.75*x,.1),p.scale.set(x,x,x),s.add(p),s.indexText=s.children.length-1,m=new dn(this.strings.getKey("planeprojec/profile"),{font:_,size:this.sizeText,height:0}),p=new Xt(m,g),y=-t-1,v=t+1,x=.15*Math.sqrt(y*y+v*v+.1*.1),p.position.set(y+.25*x,v-.75*x,.1),p.scale.set(x,x,x),o.add(p),o.indexText=o.children.length-1});let l=new ji,h=new ti(2*t,2*t,7829367,10066329);l.add(h);let u=new ti(t+4,2,2228224);u.layers.enableAll(),u.material.color.setHex(7829367),u.material.depthFunc=ku,u.material.vertexColors=!1,l.rotateX(Math.PI/2),s.add(l);let d=l.clone();o.add(d);let f=l.clone();r.add(f),this.planeY=r,this.planeZ=o,r.userData.angleTot=0,o.userData.angleTot=0}planeIsometric(){}createPlanes1(){let t=this.editor.sizeProj,e=new ol("z","y","x",t,t,t,t,t,t),n=new Ke({color:65280,wireframe:!0});const i=new Xt(e,n);this.planes.push(i),e=new ol("x","z","y",4,4,4,4,4,4),n=new Ke({color:65280,wireframe:!0});const s=new Xt(e,n);this.planes.push(s),e=new ol("x","y","z",4,4,4,4,4,4),n=new Ke({color:65280,wireframe:!0});const r=new Xt(e,n);this.planes.push(r)}createPlanes(){let t=this.editor.sizeProj,e=new Oe(2*t,2*t,2*t,2*t),n=new Ke({visible:!1,side:Tn});const i=new Xt(e,n);let s=8;i.translateX(s),i.translateY(s),i.translateZ(s),i.translateZ(-t),this.planes.push(i),e=new Oe(2*t,2*t,2*t,2*t);const r=new Xt(e,n);r.translateX(s),r.translateY(s),r.translateZ(s),r.translateY(-t),r.rotateX(Math.PI/2),this.planes.push(r),e=new Oe(2*t,2*t,2*t,2*t);const o=new Xt(e,n);o.translateX(s),o.translateY(s),o.translateZ(s),o.translateX(-t),o.rotateY(-Math.PI/2),this.planes.push(o),e=new Oe(2*t,2*t,2*t,2*t),n=new Ke({color:11184810,wireframe:!0,side:Tn});const c=new Xt(e,n);s=7,c.translateX(s),c.translateY(s),c.translateZ(s),c.translateZ(-t),this.planes.push(c),e=new Oe(2*t,2*t,2*t,2*t);const l=new Xt(e,n);l.translateX(s),l.translateY(s),l.translateZ(s),l.translateY(-t),l.rotateX(Math.PI/2),this.planes.push(l),e=new Oe(2*t,2*t,2*t,2*t);const h=new Xt(e,n);h.translateX(s),h.translateY(s),h.translateZ(s),h.translateX(-t),h.rotateY(-Math.PI/2),this.planes.push(h)}updateText(t){console.log(t),this.planes[1].children[this.planes[1].indexText].geometry=new dn(t.strings.getKey("planeprojec/plan"),{font:this.font,size:this.sizeText,height:0}),this.planes[0].children[this.planes[0].indexText].geometry=new dn(t.strings.getKey("planeprojec/elevation"),{font:this.font,size:this.sizeText,height:0}),this.planes[2].children[this.planes[2].indexText].geometry=new dn(t.strings.getKey("planeprojec/profile"),{font:this.font,size:this.sizeText,height:0})}}const Au={type:"change"},al={type:"start"},Cu={type:"end"};class yf extends is{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",It),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",It),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Au),n.update(),s=i.NONE},this.update=function(){const R=new P,tt=new ii().setFromUnitVectors(t.up,new P(0,1,0)),H=tt.clone().invert(),ft=new P,yt=new ii,St=2*Math.PI;return function(){const Mt=n.object.position;R.copy(Mt).sub(n.target),R.applyQuaternion(tt),o.setFromVector3(R),n.autoRotate&&s===i.NONE&&M(E()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Dt=n.minAzimuthAngle,Ft=n.maxAzimuthAngle;return isFinite(Dt)&&isFinite(Ft)&&(Dt<-Math.PI?Dt+=St:Dt>Math.PI&&(Dt-=St),Ft<-Math.PI?Ft+=St:Ft>Math.PI&&(Ft-=St),Dt<=Ft?o.theta=Math.max(Dt,Math.min(Ft,o.theta)):o.theta=o.theta>(Dt+Ft)/2?Math.max(Dt,o.theta):Math.min(Ft,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),R.setFromSpherical(o),R.applyQuaternion(H),Mt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||ft.distanceToSquared(n.object.position)>r||8*(1-yt.dot(n.object.quaternion))>r?(n.dispatchEvent(Au),ft.copy(n.object.position),yt.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",T),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",ht),n.domElement.removeEventListener("wheel",wt),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",ht),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",It),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Kh,c=new Kh;let l=1;const h=new P;let u=!1;const d=new lt,f=new lt,_=new lt,m=new lt,g=new lt,p=new lt,y=new lt,v=new lt,x=new lt,b=[],w={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function M(R){c.theta-=R}function S(R){c.phi-=R}const U=function(){const R=new P;return function(H,ft){R.setFromMatrixColumn(ft,0),R.multiplyScalar(-H),h.add(R)}}(),N=function(){const R=new P;return function(H,ft){n.screenSpacePanning===!0?R.setFromMatrixColumn(ft,1):(R.setFromMatrixColumn(ft,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(H),h.add(R)}}(),D=function(){const R=new P;return function(H,ft){const yt=n.domElement;if(n.object.isPerspectiveCamera){const St=n.object.position;R.copy(St).sub(n.target);let _t=R.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),U(2*H*_t/yt.clientHeight,n.object.matrix),N(2*ft*_t/yt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(H*(n.object.right-n.object.left)/n.object.zoom/yt.clientWidth,n.object.matrix),N(ft*(n.object.top-n.object.bottom)/n.object.zoom/yt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(R){n.object.isPerspectiveCamera?l/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(R){n.object.isPerspectiveCamera?l*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(R){d.set(R.clientX,R.clientY)}function W(R){y.set(R.clientX,R.clientY)}function B(R){m.set(R.clientX,R.clientY)}function K(R){f.set(R.clientX,R.clientY),_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const tt=n.domElement;M(2*Math.PI*_.x/tt.clientHeight),S(2*Math.PI*_.y/tt.clientHeight),d.copy(f),n.update()}function X(R){v.set(R.clientX,R.clientY),x.subVectors(v,y),x.y>0?z(A()):x.y<0&&O(A()),y.copy(v),n.update()}function pt(R){g.set(R.clientX,R.clientY),p.subVectors(g,m).multiplyScalar(n.panSpeed),D(p.x,p.y),m.copy(g),n.update()}function nt(R){R.deltaY<0?O(A()):R.deltaY>0&&z(A()),n.update()}function q(R){let tt=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),tt=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),tt=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),tt=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),tt=!0;break}tt&&(R.preventDefault(),n.update())}function $(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),tt=.5*(b[0].pageY+b[1].pageY);d.set(R,tt)}}function ct(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),tt=.5*(b[0].pageY+b[1].pageY);m.set(R,tt)}}function mt(){const R=b[0].pageX-b[1].pageX,tt=b[0].pageY-b[1].pageY,H=Math.sqrt(R*R+tt*tt);y.set(0,H)}function V(){n.enableZoom&&mt(),n.enablePan&&ct()}function Pt(){n.enableZoom&&mt(),n.enableRotate&&$()}function Lt(R){if(b.length==1)f.set(R.pageX,R.pageY);else{const H=dt(R),ft=.5*(R.pageX+H.x),yt=.5*(R.pageY+H.y);f.set(ft,yt)}_.subVectors(f,d).multiplyScalar(n.rotateSpeed);const tt=n.domElement;M(2*Math.PI*_.x/tt.clientHeight),S(2*Math.PI*_.y/tt.clientHeight),d.copy(f)}function at(R){if(b.length===1)g.set(R.pageX,R.pageY);else{const tt=dt(R),H=.5*(R.pageX+tt.x),ft=.5*(R.pageY+tt.y);g.set(H,ft)}p.subVectors(g,m).multiplyScalar(n.panSpeed),D(p.x,p.y),m.copy(g)}function bt(R){const tt=dt(R),H=R.pageX-tt.x,ft=R.pageY-tt.y,yt=Math.sqrt(H*H+ft*ft);v.set(0,yt),x.set(0,Math.pow(v.y/y.y,n.zoomSpeed)),z(x.y),y.copy(v)}function it(R){n.enableZoom&&bt(R),n.enablePan&&at(R)}function J(R){n.enableZoom&&bt(R),n.enableRotate&&Lt(R)}function et(R){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",vt),n.domElement.addEventListener("pointerup",ht)),j(R),R.pointerType==="touch"?jt(R):At(R))}function vt(R){n.enabled!==!1&&(R.pointerType==="touch"?L(R):Ct(R))}function ht(R){st(R),b.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",ht)),n.dispatchEvent(Cu),s=i.NONE}function At(R){let tt;switch(R.button){case 0:tt=n.mouseButtons.LEFT;break;case 1:tt=n.mouseButtons.MIDDLE;break;case 2:tt=n.mouseButtons.RIGHT;break;default:tt=-1}switch(tt){case os.DOLLY:if(n.enableZoom===!1)return;W(R),s=i.DOLLY;break;case os.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;B(R),s=i.PAN}else{if(n.enableRotate===!1)return;G(R),s=i.ROTATE}break;case os.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;G(R),s=i.ROTATE}else{if(n.enablePan===!1)return;B(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(al)}function Ct(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(R);break;case i.DOLLY:if(n.enableZoom===!1)return;X(R);break;case i.PAN:if(n.enablePan===!1)return;pt(R);break}}function wt(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(al),nt(R),n.dispatchEvent(Cu))}function It(R){n.enabled===!1||n.enablePan===!1||q(R)}function jt(R){switch(rt(R),b.length){case 1:switch(n.touches.ONE){case as.ROTATE:if(n.enableRotate===!1)return;$(),s=i.TOUCH_ROTATE;break;case as.PAN:if(n.enablePan===!1)return;ct(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case as.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(),s=i.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(al)}function L(R){switch(rt(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;at(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;J(R),n.update();break;default:s=i.NONE}}function T(R){n.enabled!==!1&&R.preventDefault()}function j(R){b.push(R)}function st(R){delete w[R.pointerId];for(let tt=0;tt<b.length;tt++)if(b[tt].pointerId==R.pointerId){b.splice(tt,1);return}}function rt(R){let tt=w[R.pointerId];tt===void 0&&(tt=new lt,w[R.pointerId]=tt),tt.set(R.pageX,R.pageY)}function dt(R){const tt=R.pointerId===b[0].pointerId?b[1]:b[0];return w[tt.pointerId]}n.domElement.addEventListener("contextmenu",T),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",ht),n.domElement.addEventListener("wheel",wt,{passive:!1}),this.update()}}const Bl=a=>{const t="TeiDSpace",e={language:"es",permission:100};if(window.localStorage[t]===void 0)window.localStorage[t]=JSON.stringify(e);else{const n=JSON.parse(window.localStorage[t]);for(const i in n)e[i]=n[i]}return{getKey:function(n){return e[n]},setKey:function(){for(let n=0,i=arguments.length;n<i;n+=2)e[arguments[n]]=arguments[n+1];window.localStorage[t]=JSON.stringify(e)},clear:function(){delete window.localStorage[t]}}},kl=a=>{const t={en:{"menubar/views":"Views","menubar/isometric":"Perspective","menubar/pieces":"Pieces","menubar/generator":"Generator","menubar/help":"Help","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"About us...","menubar/soma":"Soma Cube","menubar/somaproject":"Soma Project","menubar/somadevelopment":"Soma Development","menubar/somabuilding":"Soma Building","menubar/somaexercises":"Soma exercices","menubar/objects":"Object","menubar/create":"Create Object","menubar/examples":"Examples","menubar/exercices":"Exercices","menubar/correction":"Correction","menubar/soma6viewsexamples":"Examples 6 views","menubar/soma6viewsexercises":"Exercises 6 views","toolbar/translate":"Translate","toolbar/rotate":"Rotate","toolbar/scale":"Scale","modelbar/cube":"Cube","modelbar/cube1":"Cube 1","modelbar/cube2":"Cube 2","modelbar/cube3":"Cube 3","modelbar/icosahedron":"Icosahedron","select/vertices":"Vertices","select/edges":"Edges","select/objects":"Objects","CSG/selected":"Selecteds: ","CSG/addition":"Addition A \u222A B","CSG/subtraction":"Subtraction A - B","CSG/reversesubtraction":"Reverse Subtraction B - A","CSG/difference":"Difference A \u2295 B","CSG/intersection":"Intersection","file/save":"save","file/load":"load","planeprojec/plan":"Plan","planeprojec/elevation":"Elevation","planeprojec/profile":"Profile","line/visible":"Visible Line","line/hidden":"Hidden Line","line/delete":"Delete Line","line/change":"Change","line/create":"Create","line/red":"Red line","line/black":"Black line","views/open":"Open Views","views/close":"Close Views",solutions:"Solution",opacity:"Opacity","object/base":"Object base","object/auxiliar":"Auxiliar Object","clipboard/copy":"Copy","clipboard/paste":"Paste","soma/cube":"Soma cube","soma/piece":"Piece","number/exercise":"Exercise","number/example":"Example","configBar/size":"Size","configBar/edges":"Edges","configBar/color":"Color","configBar/shadow":"Shadow","configBar/visible":"Visible","configBar/development":"Development"},es:{"menubar/views":"Vistas","menubar/isometric":"Perspectiva","menubar/pieces":"Piezas","menubar/generator":"Generador","menubar/help":"Ayuda","menubar/helptutorials":"Tutoriales","menubar/helpaboutus":"Acerca de...","menubar/soma":"Cubo Soma","menubar/somaproject":"Proyecto Soma","menubar/somadevelopment":"Desarrollo Soma ","menubar/somabuilding":"Construcci\xF3n Soma","menubar/somaexercises":"Soma ejercicios","menubar/soma6viewsexamples":"Ejemplos 6 vistas","menubar/soma6viewsexercises":"Ejercicios 6 vistas","menubar/objects":"Objeto","menubar/create":"Crear Objetos","menubar/examples":"Ejemplos","menubar/exercices":"Ejercicios","menubar/correction":"Correcci\xF3n","toolbar/translate":"Trasladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cubo","modelbar/cube1":"Cubo 1","modelbar/cube2":"Cubo 2","modelbar/cube3":"Cubo 3","modelbar/icosahedron":"Icosaedro","select/vertices":"V\xE9rtices","select/edges":"Aristas","select/objects":"Objetos","CSG/selected":"Seleccionados: ","CSG/addition":"Adici\xF3n A \u222A B","CSG/subtraction":"Sustracci\xF3n A - B","CSG/reversesubtraction":"Sustracci\xF3n inversa B - A","CSG/difference":"Diferencia A \u2295 B","CSG/intersection":"Intersecci\xF3n","file/save":"Guardar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Alzado","planeprojec/profile":"Perfil","line/visible":"L\xEDnea Visible","line/hidden":"L\xEDnea Oculta","line/delete":"Borrar L\xEDnea","line/change":"Cambiar","line/create":"Crear","line/red":"L\xEDnea roja","line/black":"L\xEDnea negra","views/open":"Abir Vistas","views/close":"Cerrar Vistas",solutions:"Soluci\xF3n",opacity:"Opacidad","object/base":"Objeto base","object/auxiliar":"Objeto auxiliar","clipboard/copy":"Copiar","clipboard/paste":"Pegar","soma/cube":"Cubo Soma","soma/piece":"Pieza","number/exercise":"Ejercicio","number/example":"Ejemplo","configBar/size":"Tama\xF1o","configBar/edges":"Aristas","configBar/color":"Color","configBar/shadow":"Sombra","configBar/visible":"Visible","configBar/development":"Desarrollo"},ca:{"menubar/views":"Vistes","menubar/isometric":"Perspectiva","menubar/pieces":"Peces","menubar/generator":"Generador","menubar/help":"Ajuda","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"Sobre...","menubar/soma":"Cub Soma","menubar/somaproject":"Projecte Soma","menubar/somadevelopment":"Desenvolupament Soma ","menubar/somabuilding":"Construcci\xF3 Soma","menubar/somaexercises":"Soma exercicis","menubar/objects":"Objecte","menubar/create":"Crear Objectes","menubar/examples":"Exemples","menubar/exercices":"Exercicis","menubar/correction":"Correcci\xF3","menubar/soma6viewsexamples":"Exemples 6 vistes","menubar/soma6viewsexercises":"Exercicis 6 vistes","toolbar/translate":"Traslladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cub","modelbar/cube1":"Cub 1","modelbar/cube2":"Cub 2","modelbar/cube3":"Cub 3","modelbar/icosahedron":"Icosaedre","select/vertices":"V\xE8rtexs","select/edges":"Arestes","select/objects":"Objectes","CSG/selected":"Seleccionats: ","CSG/addition":"Adici\xF3 A \u222A B","CSG/subtraction":"Sustracci\xF3 A - B","CSG/reversesubtraction":"Sustracci\xF3 inversa B - A","CSG/difference":"Difer\xE8ncia A \u2295 B","CSG/intersection":"Intersecci\xF3","file/save":"Desar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Al\xE7at","planeprojec/profile":"Perfil","line/visible":"L\xEDnia Visible","line/hidden":"L\xEDnia Oculta","line/delete":"Esborrar L\xEDnia","line/change":"Canviar","line/create":"Crear","line/red":"L\xEDnia vermella","line/black":"L\xEDnia negra","views/open":"Obir Vistes","views/close":"Tancar Vistes",solutions:"Soluci\xF3",opacity:"Opacitat","object/base":"Objecte base","object/auxiliar":"Objecte auxiliar","clipboard/copy":"Copia","clipboard/paste":"Enganxa","soma/cube":"Cub Soma","soma/piece":"Pe\xE7a","number/exercise":"Exercici","number/example":"Exemple","configBar/size":"Tamany","configBar/edges":"Arestes","configBar/color":"Color","configBar/shadow":"Ombra","configBar/visible":"Visible","configBar/development":"Desenvolupament"}};return{getKey:function(e){return t[a.getKey("language")][e]||"???"}}},Zy=()=>{const n=1.7999999999999998;return{sizeProj:4,configVistas:[{axis:"x",dir:1,color:"red",name:"alzado",rotate:!1,far:30,dim:{left:-1.2*4,right:1.2*4,top:1.2*4,bottom:-1.2*4},pos:{x:-4,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",rotate:!1,far:30,dim:{left:-1.2*4,right:1.2*4,top:1.2*4,bottom:-1.2*4},pos:{x:0,y:0,z:-4},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",rotate:!1,far:30,dim:{left:-1.2*4,right:1.2*4,top:1.2*4,bottom:-1.2*4},pos:{x:0,y:-4,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",rotate:!1,far:30,dim:{left:-n*4,right:n*4,top:n*4,bottom:-n*4},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]}},d1=new ss,f1=new P;ut.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new lt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};En.line={uniforms:Qu.merge([ut.common,ut.fog,ut.line]),vertexShader:`
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
		`};const p1=new P,m1=new P,g1=new re,_1=new re,x1=new re,v1=new P,y1=new se,b1=new pv,M1=new P,S1=new ss,w1=new or,E1=new re;class Ro extends Rr{constructor(t=[0,0,0,0,0,0],e=0,n=0,i=1){let s=new ue().setAttribute("position",new Pe(new Float32Array([t[0],t[1],t[2],t[3],t[4],t[5]]),3));super(s,new pd({color:e,dashSize:.15,gapSize:n})),this.computeLineDistances();let r=new In({color:e,size:i}),o=new ue;o.setAttribute("position",new Pe(new Float32Array([t[0],t[1],t[2]]),3)),this.point1=new bi(o,r),r=new In({color:e,size:i}),o=new ue,o.setAttribute("position",new Pe(new Float32Array([t[3],t[4],t[5]]),3)),this.point2=new bi(o,r)}updatePosition(t,e=0,n=!1,i){const s=this.geometry.attributes.position.array;if(!n&&s[e+0]==Math.round(t.x)&&s[e+1]==Math.round(t.y)&&s[e+2]==Math.round(t.z))return;const r=e!=0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,o=e!=0?this.point1:this.point2,c=e==0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,l=e==0?this.point1:this.point2;s[e+0]=c[0]=Math.round(t.x),s[e+1]=c[1]=Math.round(t.y),s[e+2]=c[2]=Math.round(t.z),l.visible=!0,l.geometry.computeBoundingSphere(),l.geometry.attributes.position.needsUpdate=!0,n&&(e=e==0?3:0,s[e+0]=r[0]=c[0],s[e+1]=r[1]=c[1],s[e+2]=r[2]=c[2],this.visible=!0,o.visible=!0,o.geometry.computeBoundingSphere(),o.geometry.attributes.position.needsUpdate=!0),this.computeLineDistances(),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0}updateColor(t,e,n){this.material.color.r=this.point1.material.color.r=this.point2.material.color.r=t,this.material.color.g=this.point1.material.color.g=this.point2.material.color.g=e,this.material.color.b=this.point1.material.color.b=this.point2.material.color.b=n}}const $y=/^[og]\s*(.+)?/,Jy=/^mtllib /,Ky=/^usemtl /,Qy=/^usemap /,Lu=/\s+/,Pu=new P,ll=new P,Ru=new P,Du=new P,ln=new P,Do=new Vt;function t1(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;Pu.fromArray(i,t),ll.fromArray(i,e),Ru.fromArray(i,n),ln.subVectors(Ru,ll),Du.subVectors(Pu,ll),ln.cross(Du),ln.normalize(),s.push(ln.x,ln.y,ln.z),s.push(ln.x,ln.y,ln.z),s.push(ln.x,ln.y,ln.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,r,o,c,l){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){const _=this.normals.length;u=this.parseNormalIndex(o,_),d=this.parseNormalIndex(c,_),f=this.parseNormalIndex(l,_),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(i!==void 0&&i!==""){const _=this.uvs.length;u=this.parseUVIndex(i,_),d=this.parseUVIndex(s,_),f=this.parseUVIndex(r,_),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,r=t.length;s<r;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,r=e.length;s<r;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return a.startObject("",!1),a}class zu extends Ql{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,r=new md(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){try{e(s.parse(o))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new t1;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const u=l.split(Lu);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Do.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),e.colors.push(Do.r,Do.g,Do.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const d=l.slice(1).trim().split(Lu),f=[];for(let m=0,g=d.length;m<g;m++){const p=d[m];if(p.length>0){const y=p.split("/");f.push(y)}}const _=f[0];for(let m=1,g=f.length-1;m<g;m++){const p=f[m],y=f[m+1];e.addFace(_[0],p[0],y[0],_[1],p[1],y[1],_[2],p[2],y[2])}}else if(h==="l"){const u=l.substring(1).trim().split(" ");let d=[];const f=[];if(l.indexOf("/")===-1)d=u;else for(let _=0,m=u.length;_<m;_++){const g=u[_].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&f.push(g[1])}e.addLineGeometry(d,f)}else if(h==="p"){const d=l.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((i=$y.exec(l))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);e.startObject(u)}else if(Ky.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(Jy.test(l))e.materialLibraries.push(l.substring(7).trim());else if(Qy.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=l.split(" "),i.length>1){const d=i[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const s=new ji;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=e.objects.length;o<c;o++){const l=e.objects[o],h=l.geometry,u=l.materials,d=h.type==="Line",f=h.type==="Points";let _=!1;if(h.vertices.length===0)continue;const m=new ue;m.setAttribute("position",new ee(h.vertices,3)),h.normals.length>0&&m.setAttribute("normal",new ee(h.normals,3)),h.colors.length>0&&(_=!0,m.setAttribute("color",new ee(h.colors,3))),h.hasUVIndices===!0&&m.setAttribute("uv",new ee(h.uvs,2));const g=[];for(let y=0,v=u.length;y<v;y++){const x=u[y],b=x.name+"_"+x.smooth+"_"+_;let w=e.materials[b];if(this.materials!==null){if(w=this.materials.create(x.name),d&&w&&!(w instanceof Vs)){const E=new Vs;si.prototype.copy.call(E,w),E.color.copy(w.color),w=E}else if(f&&w&&!(w instanceof In)){const E=new In({size:10,sizeAttenuation:!1});si.prototype.copy.call(E,w),E.color.copy(w.color),E.map=w.map,w=E}}w===void 0&&(d?w=new Vs:f?w=new In({size:1,sizeAttenuation:!1}):w=new ea,w.name=x.name,w.flatShading=!x.smooth,w.vertexColors=_,e.materials[b]=w),g.push(w)}let p;if(g.length>1){for(let y=0,v=u.length;y<v;y++){const x=u[y];m.addGroup(x.groupStart,x.groupCount,y)}d?p=new Rr(m,g):f?p=new bi(m,g):p=new Xt(m,g)}else d?p=new Rr(m,g[0]):f?p=new bi(m,g[0]):p=new Xt(m,g[0]);p.name=l.name,s.add(p)}else if(e.vertices.length>0){const o=new In({size:1,sizeAttenuation:!1}),c=new ue;c.setAttribute("position",new ee(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new ee(e.colors,3)),o.vertexColors=!0);const l=new bi(c,o);s.add(l)}return s}}class e1{constructor(t,e=window){Ot(this,"intersect",(t,e,n)=>(this.mouse.x=t.offsetX/t.target.clientWidth*2-1,this.mouse.y=-(t.offsetY/t.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,e),this.raycaster.intersectObjects(n,!1)));Ot(this,"initListeners",()=>{window.addEventListener("keydown",t=>{switch(t.key.toUpperCase()){case"J":this.toJSON();break;case"R":this.JSONtoVar();break;case"S":saveObjects();break;case"L":let e=document.createElement("input");e.type="file",e.onchange=n=>{const i=e.files[0].name;this.read("./exercises/",i)},e.click();break;case"M":this.read();break}})});Ot(this,"initConfigVistas",()=>{const t=this.sizeProj*1,e=1.2,n=e*1.5;this.configVistas=[{axis:"x",dir:1,color:"red",name:"alzado",dim:{left:-e*t,right:e*t,top:e*t,bottom:-e*t},pos:{x:-t,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",dim:{left:-e*t,right:e*t,top:e*t,bottom:-e*t},pos:{x:0,y:0,z:-t},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",dim:{left:-e*t,right:e*t,top:e*t,bottom:-e*t},pos:{x:0,y:-t,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",dim:{left:-n*t,right:n*t,top:n*t,bottom:-n*t},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]});Ot(this,"initScene",()=>{this.scene=new _l;const t=13421772;this.scene.background=new Vt(t)});Ot(this,"initRenderer",()=>{this.allCanvas=[],this.allRenderer=[];for(let t=0;t<this.configVistas.length;t++){const e=new ql({antialias:!0,alpha:!0});e.setPixelRatio(window.devicePixelRatio);let n;this.configVistas[t].name===null?(document.body.appendChild(e.domElement),n=e.domElement):(n=document.getElementById(this.configVistas[t].name),n.appendChild(e.domElement)),this.allCanvas.push(n),n.addEventListener("dblclick",i=>{const s=this.intersect(i,this.allCameras[t],this.linesSegments,!1);s.length>0&&(this.LineDashed=s[s.length-1].object.material.gapSize,this.Line.setLineReset(),this.Line.setLineSelected(s[s.length-1].object,t,this.LineDashed),this.Line.points=[this.Line.segment.point1,this.Line.segment.point2],this.LineDashed==0?(this.visibleLine.classList.add("selected"),this.hiddenLine.classList.remove("selected")):(this.visibleLine.classList.remove("selected"),this.hiddenLine.classList.add("selected")))}),e.setSize(n.clientWidth,n.clientHeight),this.allRenderer.push(e),window.addEventListener("resize",()=>{for(let i=0;i<this.allRenderer.length;i++)this.allRenderer[i].setSize(this.allCanvas[i].clientWidth,this.allCanvas[i].clientHeight)})}});Ot(this,"initCamera",()=>{this.allCameras=[];for(let t=0;t<this.configVistas.length;t++){const e=this.allCanvas[t].clientWidth/(this.allCanvas[t].clientHeight-16),n=e>=1?e:1,i=e>=1?1:1/e,s=new Ko(n*this.configVistas[t].dim.left,n*this.configVistas[t].dim.right,i*this.configVistas[t].dim.top,i*this.configVistas[t].dim.bottom,.1,this.configVistas[t].far);s.position.set(this.configVistas[t].pos.x,this.configVistas[t].pos.y,this.configVistas[t].pos.z),s.lookAt(new P(this.configVistas[t].look.x,this.configVistas[t].look.y,this.configVistas[t].look.z)),s.up.set(this.configVistas[t].up.x,this.configVistas[t].up.y,this.configVistas[t].up.z),s.aspect=e,this.allCameras.push(s)}window.addEventListener("resize",this.updateCamera)});Ot(this,"updateCamera",()=>{for(let t=0;t<this.allCameras.length;t++){const e=this.allCanvas[t].clientWidth/(this.allCanvas[t].clientHeight-16),n=e>=1?e:1,i=e>=1?1:1/e,s=this.allCameras[t];s.left=n*this.configVistas[t].dim.left,s.right=n*this.configVistas[t].dim.right,s.top=i*this.configVistas[t].dim.top,s.bottom=i*this.configVistas[t].dim.bottom,s.position.set(this.configVistas[t].pos.x,this.configVistas[t].pos.y,this.configVistas[t].pos.z),s.aspect=e,s.updateProjectionMatrix(),this.controls.orbits[t].update()}});Ot(this,"initLights",()=>{let t=new dv(12303291);this.scene.add(t);let e=new $n(16777215,.6);e.position.set(15,10,6),e.castShadow=!0,e.shadow.mapSize=new lt(1024*2,1024*2),e.shadow.camera.top=34,e.shadow.camera.bottom=-34,e.shadow.camera.left=-34,e.shadow.camera.right=34,e.shadow.camera.near=-20,e.shadow.camera.far=80,e.shadow.bias=-.002,e.shadow.radius=3,e.shadow.blurSamples=25,this.scene.add(e)});Ot(this,"initControls",()=>{for(let t=0;t<this.configVistas.length;t++){const e=new yf(this.allCameras[t],this.allCanvas[t]);e.enablePan=!1,e.enableRotate=this.configVistas[t].rotate,e.target.set(this.configVistas[t].look.x,this.configVistas[t].look.y,this.configVistas[t].look.z),e.update(),this.controls.orbits.push(e)}});Ot(this,"initConfig",()=>{const t=new URLSearchParams(window.location.search),e=t.get("lang");this.levelPermission=t.get("perm"),this.config=Bl(),e!==null&&this.config.setKey("language",e),this.levelPermission!==null?this.config.setKey("permission",this.levelPermission):this.levelPermission=this.config.getKey("permission"),this.strings=kl(this.config)});this.BLACK={r:0,g:0,b:0},this.YELLOW={r:255,g:255,b:0},this.RED={r:255,g:0,b:0},this.BLUE={r:0,g:0,b:255},this.configVistas=t.configVistas,this.sizeProj=t.sizeProj,this.raycaster=new fv,this.raycaster.params.Points.threshold=.25,this.raycaster.params.Line.threshold=.25,this.controls={orbits:[]},this.mouse=new lt,this.initScene(),this.initRenderer(),this.initCamera(),this.initLights(),this.initControls(),this.initConfig()}}const n1=async({path:a,name:t,ext:e=".txt",editor:n})=>{fetch(`${a}${t}${e}`,{method:"GET"}).then(i=>i.json()).then(i=>{n.reset();for(const s in i.segments){const r=[];for(const o in i.segments[s])r.push(i.segments[s][o]);n.copyLine3(r,i.gapSize[s],i.color[s])}}).catch(i=>console.error("error:",i))};class i1 extends Rr{constructor(t=[0,0,0,0,0,0],e=0,n=0,i=1){let s=new ue().setAttribute("position",new Pe(new Float32Array([t[0],t[1],t[2],t[3],t[4],t[5]]),3));super(s,new pd({color:e,dashSize:.15,gapSize:n})),this.computeLineDistances();let r=new In({color:e,size:i}),o=new ue;o.setAttribute("position",new Pe(new Float32Array([t[0],t[1],t[2]]),3)),this.point1=new bi(o,r),r=new In({color:e,size:i}),o=new ue,o.setAttribute("position",new Pe(new Float32Array([t[3],t[4],t[5]]),3)),this.point2=new bi(o,r),this.points=[this.point1,this.point2]}updatePosition(t,e=0,n=!1,i){e*=3;const s=this.geometry.attributes.position.array;if(!n&&s[e+0]==Math.round(t.x)&&s[e+1]==Math.round(t.y)&&s[e+2]==Math.round(t.z))return;const r=e!=0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,o=e!=0?this.point1:this.point2,c=e==0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,l=e==0?this.point1:this.point2;s[e+0]=c[0]=Math.round(t.x),s[e+1]=c[1]=Math.round(t.y),s[e+2]=c[2]=Math.round(t.z),l.visible=!0,l.geometry.computeBoundingSphere(),l.geometry.attributes.position.needsUpdate=!0,n&&(e=e==0?3:0,s[e+0]=r[0]=c[0],s[e+1]=r[1]=c[1],s[e+2]=r[2]=c[2],this.visible=!0,o.visible=!0,o.geometry.computeBoundingSphere(),o.geometry.attributes.position.needsUpdate=!0),this.computeLineDistances(),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0}updateColor({r:t,g:e,b:n}){this.material.color.r=this.points[0].material.color.r=this.points[1].material.color.r=t,this.material.color.g=this.points[0].material.color.g=this.points[1].material.color.g=e,this.material.color.b=this.points[0].material.color.b=this.points[1].material.color.b=n}}const s1=a=>({selectedSegment:!1,segment:null,selectedPoint:!1,points:null,npoint:0,handler:{down:[],move:[],up:[]},setLineSelected:function(t,e,n=0){this.selectedPoint=!1,this.selectedSegment=!0,this.segment=t,this.originalColorSegment={r:t.material.color.r,g:t.material.color.g,b:t.material.color.b},this.segment.material.gapSize=n,this.segment.updateColor(a.BLUE),this.segment.points[0].material.size=8,this.segment.points[1].material.size=8},setLineReset:function(){this.selectedPoint=!1,this.selectedSegment=!1,this.segment.updateColor(this.segment.userData.color),this.segment.points[0].material.size=1,this.segment.points[1].material.size=1},setPointsColor:function({color1:t,color2:e}){let n=this.npoint;n==null&&(n=0),this.setPointColor({color:t,n}),n=(n+1)%2,this.setPointColor({color:e,n})},setPointColor:function({color:t,n:e}){this.points[e].material.color.r=t.r,this.points[e].material.color.g=t.g,this.points[e].material.color.b=t.b},setSegmentColor:function({color:t}){this.segment.material.color.r=t.r,this.segment.material.color.g=t.g,this.segment.material.color.b=t.b},createHandler:function(){for(let t=0;t<a.allCanvas.length;t++){const e=a.allCanvas[t];this.handler.down.push(this.pointerdown.bind(null,this,t)),e.addEventListener("pointerdown",this.handler.down[t]),this.handler.move.push(this.pointermove.bind(null,this,t)),e.addEventListener("pointermove",this.handler.move[t]),this.handler.up.push(this.pointerup.bind(null,this)),e.addEventListener("pointerup",this.handler.up[t])}},pointerClamp(t,e,n){e==n[0][0]&&(t.y=Math.max(-a.sizeProj,Math.min(a.sizeProj,t.y)),t.z=Math.max(-a.sizeProj,Math.min(a.sizeProj,t.z))),e==n[1][0]&&(t.x=Math.max(-a.sizeProj,Math.min(a.sizeProj,t.x)),t.y=Math.max(-a.sizeProj,Math.min(a.sizeProj,t.y))),e==n[2][0]&&(t.x=Math.max(-a.sizeProj,Math.min(a.sizeProj,t.x)),t.z=Math.max(-a.sizeProj,Math.min(a.sizeProj,t.z)))},pointerdown:function(t,e,n){if(t.selectedSegment&&!t.selectedPoint){const i=a.intersect(n,a.allCameras[e],t.points);i.length>0?t.npoint=i[0].object.uuid==t.points[0].uuid?0:1:t.setLineReset(),t.selectedPoint=i.length>0}if(!t.selectedPoint){const i=a.intersect(n,a.allCameras[e],a.canvasPlanes[e]);if(i.length>0){const s=i[0].point.round();t.pointerClamp(s,i[0].object,a.canvasPlanes);const r=new i1([s.x,s.y,s.z,s.x,s.y,s.z],16777215,a.LineDashed);r.userData.indexPlane=e,r.userData.color=a.BLACK,a.scene.add(r,r.point1,r.point2),a.linesSegments.push(r),t.points=[r.point1,r.point2],t.npoint=0,t.setLineSelected(r,e,a.LineDashed)}t.selectedPoint=i.length>0}t.selectedPoint&&t.setPointsColor({color1:a.RED,color2:a.BLUE})},pointermove:function(t,e,n){if(!!t.selectedSegment)if(t.selectedPoint){const i=a.intersect(n,a.allCameras[e],a.canvasPlanes[e]);if(i.length>0){const s=i[0].point.round();t.pointerClamp(s,i[0].object,a.canvasPlanes),t.segment.updatePosition(i[0].point,t.npoint,!1,e,a.sizeProj)}}else{const i=a.intersect(n,a.allCameras[e],t.points);if(i.length>0){const s=i[0].object.uuid==t.points[0].uuid?0:1;t.setPointColor({color:a.RED,n:s})}else t.setPointsColor({color1:a.BLUE,color2:a.BLUE})}},pointerup:function(t){if(t.segment==null)return;t.selectedPoint=!1,t.setPointColor({color:a.BLUE,n:t.npoint});const e=t.segment.geometry.attributes.position.array;if(!(Math.abs(e[0]-e[3+0])+Math.abs(e[1]-e[3+1])+Math.abs(e[2]-e[3+2])>0)){for(let n=0;n<a.linesSegments.length;n++)if(t.segment.uuid==a.linesSegments[n].uuid){t.setLineReset(),a.scene.remove(t.segment.point1),a.scene.remove(t.segment.point2),a.scene.remove(t.segment),a.linesSegments.splice(n,1);return}}}});class ai{constructor(t){this.dom=t}add(){for(let t=0;t<arguments.length;t++){const e=arguments[t];e instanceof ai?this.dom.appendChild(e.dom):console.error("UIElement:",e,"is not an instance of UIElement.")}return this}remove(){for(let t=0;t<arguments.length;t++){const e=arguments[t];e instanceof ai?this.dom.removeChild(e.dom):console.error("UIElement:",e,"is not an instance of UIElement.")}return this}clear(){for(;this.dom.children.length;)this.dom.removeChild(this.dom.lastChild)}setId(t){return this.dom.id=t,this}getId(){return this.dom.id}setClass(t){return this.dom.className=t,this}addClass(t){return this.dom.classList.add(t),this}removeClass(t){return this.dom.classList.remove(t),this}setStyle(t,e){for(let n=0;n<e.length;n++)this.dom.style[t]=e[n];return this}setDisabled(t){return this.dom.disabled=t,this}setTextContent(t){return this.dom.textContent=t,this}setInnerHTML(t){this.dom.innerHTML=t}getIndexOfChild(t){return Array.prototype.indexOf.call(this.dom.children,t.dom)}}const r1=["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","verticalAlign","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"];r1.forEach(function(a){const t="set"+a.substring(0,1).toUpperCase()+a.substring(1,a.length);ai.prototype[t]=function(){return this.setStyle(a,arguments),this}});const o1=["KeyUp","KeyDown","MouseOver","MouseOut","Click","DblClick","Change","Input"];o1.forEach(function(a){const t="on"+a;ai.prototype[t]=function(e){return this.dom.addEventListener(a.toLowerCase(),e.bind(this),!1),this}});class Vr extends ai{constructor(){super(document.createElement("div"))}}class fn extends Vr{constructor(){super(),this.dom.className="Panel"}}class bf extends ai{constructor(t){super(document.createElement("button")),this.dom.className="Button",this.dom.textContent=t}}const Iu=({id:a})=>{const t=new fn;return t.setId(a),document.body.appendChild(t.dom),{add:e=>{t.dom.appendChild(e.dom)}}};function Uu({id:a}){let t=new fn;return t.setId(a),t}function zo({id:a,cl:t=[],container:e,imgSrc:n,dataTitle:i,selected:s=!0,onClick:r,args:o={}}){const c=document.createElement("img");c.src=`${n}`;const l=new bf;return l.setId(a),l.dom.setAttribute("data-title",i),t.forEach(h=>l.dom.classList.add(h)),l.dom.appendChild(c),l.onClick(()=>{if(r(o),!!s){for(let h=0;h<e.dom.children.length;h++)e.dom.children[h].classList.remove("selected");l.dom.classList.add("selected")}}),e.add(l),l}const Ou=()=>{const a=new fn;a.setId("TeideLogo"),document.body.appendChild(a.dom);const t=document.createElement("img");t.src="../assets/icons/Teide200x200.png";const e=new bf;return e.dom.setAttribute("data-title","Editorial Teide"),e.dom.appendChild(t),a.add(e),{container:a}};class Mf extends ai{constructor(t,e){super(document.createElement("a")),this.dom.href=e,this.dom.innerHTML=t}}class Sf extends ai{constructor(t,e){super(document.createElement("a")),this.dom.href=e,this.dom.classList.add("logoTeiDSpace");const n=document.createElement("img");n.src=t,this.dom.appendChild(n);let i=new Vr;i.dom.innerHTML="TeiDSpace",i.dom.classList.add("logoText"),this.add(i)}}const a1=a=>{const t=new fn;t.setId("menubar"),document.body.appendChild(t.dom);const e=new fn;e.setClass("menu logo");const n=new Sf("../assets/icons/logo_TEIDSPACE.png","../TeiDSpace/index.html");e.add(n),t.add(e);for(let i=1;i<a.menu.length;i++){const s=a.menu[i];if(s.permission>a.levelPermission)continue;const r=new fn;r.setClass("menu");const o=new fn;for(let l=0;l<s.classes.length;l++)o.setClass(s.classes[l]);o.setTextContent(a.strings.getKey(s.title)),r.add(o);const c=new fn;c.setClass("options"),r.add(c);for(let l=0;l<s.subMenu.length;l++){const h=s.subMenu[l];if(h.permission>a.levelPermission)continue;const u=new Vr;for(let f=0;f<h.classes.length;f++)u.setClass(h.classes[f]);const d=new Mf(a.strings.getKey(h.title),h.link);u.add(d),c.add(u)}t.add(r)}},l1=a=>{const t=new fn;t.setId("menubar"),document.body.appendChild(t.dom);const e=new Vr;e.setClass("menu logo");const n=new Sf("../assets/icons/logo_TEIDSPACE.png","../TeiDSpace/index.html");e.add(n),t.add(e);for(let i=0;i<a.menu.length;i++){const s=a.menu[i];if(s.level>a.levelPermission)continue;const r=new fn;r.setClass("menu");const o=new fn;o.setClass("title"),o.setTextContent(a.strings.getKey(s.title)),r.add(o);const c=new fn;c.setClass("options"),r.add(c);for(let l=0;l<s.options.length;l++){const h=s.options[l];if(h.level>a.levelPermission)continue;const u=new Vr;u.setClass("option");const d=new Mf(a.strings.getKey(h.textContent),h.link);u.add(d),c.add(u)}t.add(r)}},c1=[{title:"menubar/soma",level:0,options:[{textContent:"menubar/somabuilding",link:"../somaConstruccion/index.html",level:0},{textContent:"menubar/somaproject",link:"../soma/index.html",level:0},{textContent:"menubar/soma6viewsexamples",link:"../soma6VistasEjemplos/index.html",level:0},{textContent:"menubar/soma6viewsexercises",link:"../soma6VistasEjercicios/index.html",level:0}]},{title:"menubar/views",level:0,options:[{textContent:"menubar/examples",link:"../vistasEjemplos/index.html",level:0},{textContent:"menubar/exercices",link:"../vistasEjercicios/index.html",level:0},{textContent:"menubar/somaexercises",link:"../vistasEjerciciosSoma/index.html",level:0},{textContent:"menubar/correction",link:"../vistasCorreccion/index.html",level:100}]},{title:"menubar/isometric",level:0,options:[{textContent:"menubar/examples",link:"../isometricoEjemplos/index.html",level:0},{textContent:"menubar/exercices",link:"../isometricoEjercicios/index.html",level:0},{textContent:"menubar/correction",link:"../isometricoCorreccion/index.html",level:100}]},{title:"menubar/pieces",level:100,options:[{textContent:"menubar/generator",link:"../create/index.html",level:100}]},{level:0,title:"menubar/help",options:[{textContent:"menubar/helptutorials",link:"",level:0},{textContent:"menubar/helpaboutus",link:"",level:0}]}];class h1 extends e1{constructor(e=window){super(Zy(),e);Ot(this,"newMenu",()=>{this.Teidebar=Ou();const e=Iu({id:"leftbar"}),n=Uu({id:"linebar"});e.add(n),this.visibleLine=zo({id:"visibleLine",cl:["selected","invert"],container:n,imgSrc:"../assets/icons/tools/line27.png",dataTitle:this.strings.getKey("line/visible"),onClick:s=>{this.LineDashed=0,this.Line.selectedSegment&&(this.Line.segment.material.gapSize=0)}}).dom,this.hiddenLine=zo({id:"hiddenLine",cl:["invert"],container:n,imgSrc:"../assets/icons/tools/lineD1.png",dataTitle:this.strings.getKey("line/hidden"),onClick:s=>{this.LineDashed=.25,this.Line.selectedSegment&&(this.Line.segment.material.gapSize=.25)}}).dom,this.deleteLine=zo({id:"deleteLine",cl:[],container:n,imgSrc:"../assets/icons/tools/eraser1.png",dataTitle:this.strings.getKey("line/delete"),selected:!1,onClick:s=>{for(let r=0;r<this.linesSegments.length;r++)if(this.Line.segment.uuid==this.linesSegments[r].uuid){this.Line.setLineReset(),this.scene.remove(this.Line.segment.point1),this.scene.remove(this.Line.segment.point2),this.scene.remove(this.Line.segment),this.linesSegments.splice(r,1);return}}}).dom;const i=Uu({id:"IsometricoEjemplosBar"});e.add(i);for(let s=1;s<5;s++)zo({id:"Example"+s,container:i,imgSrc:`../assets/icons/numbers/${s}.png`,dataTitle:`${this.strings.getKey("number/exercise")} ${s}`,onClick:r=>n1({path:"./exercises/",name:s,editor:this})})});Ot(this,"readPortapapeles",e=>{const n=JSON.parse(e);for(const i in n.segments){const s=[];for(const r in n.segments[i])s.push(n.segments[i][r]);this.copyLine2(s,n.gapSize[i])}});Ot(this,"read",(e,n)=>{let i=new XMLHttpRequest;i.open("GET",e+n+".txt",!0),i.onreadystatechange=()=>{if(i.readyState===4&&i.status===200){this.reset();const s=JSON.parse(i.responseText);for(const r in s.segments){const o=[];for(const c in s.segments[r])o.push(s.segments[r][c]);s.views!=null?this.copyLine3(o,s.gapSize[r],s.views[r]):this.copyLine3(o,s.gapSize[r])}}},i.send(null)});Ot(this,"read1",(e,n)=>{let i=new XMLHttpRequest;i.open("GET",e+n+".txt",!0),i.onreadystatechange=()=>{if(i.readyState===4&&i.status===200){this.reset();const s=JSON.parse(i.responseText);for(const r in s.segments){const o=[];for(const c in s.segments[r])o.push(s.segments[r][c]);this.copyLine3(o,s.gapSize[r],s.views[r])}}},i.send(null)});Ot(this,"saveObjects",()=>{const e=this.toJSON();let n=new File([e],"Ejercicio1.txt",{type:"text/plain;charset=utf8"});saveAs(n)});Ot(this,"loadObjects",(e,n)=>{new zu().load(e+n,s=>{for(const r in s.segments){const o=[];console.log(typeof s.segments[r]);for(const c in s.segments[r])o.push(s.segments[r][c]);this.copyLine(o)}},s=>{console.log(s.loaded/s.total*100+"% loaded")},s=>{console.log(s,"An error happened")})});Ot(this,"createLine",{createHandler:()=>{this.createLine.handler={down:[],move:[],up:[]};for(let e=0;e<this.allCanvas.length-0;e++)this.createLine.handler.down.push(this.createLine.pointerdown.bind(null,e)),this.createLine.handler.move.push(this.createLine.pointermove.bind(null,e)),this.createLine.handler.up.push(this.createLine.pointerup.bind())},pointerdown:(e,n)=>{this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects([this.planesP.planes[(3-e)%3]],!1);i.length>0&&(this.tempLine.userData.indexPlane=e,this.tempLine.material.gapSize=this.LineDashed,this.tempLine.updatePosition(i[0].point,0,!0,e,this.sizeProj),this.tempLine.point1.material.size=4,this.tempLine.point2.material.size=4)},pointermove:(e,n)=>{if(this.tempLine.userData.indexPlane==-1)return;this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects([this.planesP.planes[(3-e)%3]],!1);if(i.length>0){const s=i[0].point;this.tempLine.geometry.attributes.position,this.tempLine.updatePosition(s,0,!1,e,this.sizeProj)}},pointerup:()=>{this.tempLine.userData.indexPlane=-1;const e=this.tempLine.geometry.attributes.position.array;Math.abs(e[0]-e[3+0])+Math.abs(e[1]-e[3+1])+Math.abs(e[2]-e[3+2])>0&&(this.copyLine(this.tempLine),this.tempLine.visible=!1,this.tempLine.point1.visible=!1,this.tempLine.point2.visible=!1)},create:()=>{this.createLine.handler==null&&this.createLine.createHandler();for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.addEventListener("pointerdown",this.createLine.handler.down[e]),n.addEventListener("pointermove",this.createLine.handler.move[e]),n.addEventListener("pointerup",this.createLine.handler.up[e])}},remove:()=>{for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.removeEventListener("pointerdown",this.createLine.handler.down[e]),n.removeEventListener("pointermove",this.createLine.handler.move[e]),n.removeEventListener("pointerup",this.createLine.handler.up[e])}}});Ot(this,"selectLine",{downLineSelected:!1,downLine:void 0,overLineSelected:!1,overLine:void 0,createHandler:()=>{this.selectLine.handler={down:[],move:[],up:[]};for(let e=0;e<this.allCanvas.length-1;e++)this.selectLine.handler.down.push(this.selectLine.pointerdown.bind(null,e)),this.selectLine.handler.move.push(this.selectLine.pointermove.bind(null,e)),this.selectLine.handler.up.push(this.selectLine.pointerup.bind())},pointerdown:(e,n)=>{this.selectLine1.downLineSelected&&(this.selectLine1.downLineSelected=!1,this.selectLine1.downLine.updateColor(0,0,0),this.selectLine1.downLine.point1.material.size=1,this.selectLine1.downLine.point2.material.size=1),this.selectLine.overLineSelected=!1,this.selectLine.overLine.updateColor(0,0,0),this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.linesSegments,!1);if(this.selectLine.downLineSelected=!1,i.length>0){if(this.selectLine.downLineSelected&&this.selectLine.downLine==i[0].object)return;this.selectLine.downLineSelected&&this.selectLine.downLine!=i[0].object&&this.selectLine.downLine.updateColor(0,0,0),this.selectLine.downLineSelected=!0,this.selectLine.downLine=i[0].object,this.selectLine.downLine.updateColor(255,255,0),this.movePoint.points=[this.selectLine.downLine.point1,this.selectLine.downLine.point2],this.selectLine.remove(),this.movePoint.create(),this.selectLine.downLine.point1.material.size=8,this.selectLine.downLine.point2.material.size=8,this.selectLine.downLine.material.gapSize==0?(this.oculta.dom.classList.remove("selected"),this.visible.dom.classList.add("selected")):(this.visible.dom.classList.remove("selected"),this.oculta.dom.classList.add("selected"))}},pointermove:(e,n)=>{if(this.selectLine1.downLineSelected)return;this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.linesSegments,!1);if(i.length>0){if(this.selectLine.downLineSelected&&this.selectLine.downLine==i[0].object||this.selectLine.overLineSelected&&this.selectLine.overLine==i[0].object)return;this.selectLine.overLineSelected&&(this.selectLine.overLine.updateColor(0,0,0),this.selectLine.overLine.point1.material.size=1,this.selectLine.overLine.point2.material.size=1),this.selectLine.overLineSelected=!0,this.selectLine.overLine=i[0].object,this.selectLine.overLine.updateColor(255,0,255),this.selectLine.overLine.point1.material.size=8,this.selectLine.overLine.point2.material.size=8}else this.selectLine.overLineSelected&&(this.selectLine.overLine.updateColor(0,0,0),this.selectLine.overLine.point1.material.size=1,this.selectLine.overLine.point2.material.size=1),this.selectLine.overLineSelected=!1},pointerup:()=>{this.tempLine.userData.indexPlane=-1},create:()=>{this.selectLine.handler==null&&this.selectLine.createHandler();for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.addEventListener("pointerdown",this.selectLine.handler.down[e]),n.addEventListener("pointermove",this.selectLine.handler.move[e]),n.addEventListener("pointerup",this.selectLine.handler.up[e])}},remove:()=>{for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.removeEventListener("pointerdown",this.selectLine.handler.down[e]),n.removeEventListener("pointermove",this.selectLine.handler.move[e]),n.removeEventListener("pointerup",this.selectLine.handler.up[e])}}});Ot(this,"movePoint",{downPointSelected:!1,downPoint:void 0,overPointSelected:!1,overPoint:void 0,points:void 0,npoint:void 0,createHandler:()=>{this.movePoint.handler={down:[],move:[],up:[]};for(let e=0;e<this.allCanvas.length-1;e++)this.movePoint.handler.down.push(this.movePoint.pointerdown.bind(null,e)),this.movePoint.handler.move.push(this.movePoint.pointermove.bind(null,e)),this.movePoint.handler.up.push(this.movePoint.pointerup.bind())},pointerdown:(e,n)=>{this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.movePoint.points,!1);i.length>0?(this.movePoint.downPointSelected=!0,this.movePoint.npoint=i[0].object.uuid==this.movePoint.points[0].uuid?0:3):(this.movePoint.downPointSelected=!1,this.selectLine.downLineSelected=!1,this.selectLine.downLine.updateColor(0,0,0),this.selectLine.downLine.point1.material.size=1,this.selectLine.downLine.point2.material.size=1,this.movePoint.remove(),this.selectLine.create())},pointermove:(e,n)=>{if(this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]),this.movePoint.downPointSelected){const i=this.raycaster.intersectObjects([this.planesP.planes[(3-e)%3]],!1);if(i.length>0){const s=i[0].point;this.selectLine.downLine.updatePosition(s,this.movePoint.npoint,!1,e,this.sizeProj)}}else{const i=this.raycaster.intersectObjects(this.movePoint.points,!1);i.length>0?(this.movePoint.overPointSelected=!0,this.movePoint.overPoint=i[0].object,this.movePoint.overPoint.material.size=12,this.movePoint.overPoint.material.color.r=255,this.movePoint.overPoint.material.color.g=0,this.movePoint.overPoint.material.color.b=0):this.movePoint.overPointSelected&&(this.movePoint.overPointSelected=!1,this.movePoint.overPoint.material.size=8,this.movePoint.overPoint.material.color.r=255,this.movePoint.overPoint.material.color.g=255,this.movePoint.overPoint.material.color.b=0)}},pointerup:()=>{this.movePoint.downPointSelected=!1},create:()=>{this.movePoint.handler==null&&this.movePoint.createHandler();for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];n.addEventListener("pointerdown",this.movePoint.handler.down[e]),n.addEventListener("pointermove",this.movePoint.handler.move[e]),n.addEventListener("pointerup",this.movePoint.handler.up[e])}},remove:()=>{for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[e];try{n.removeEventListener("pointerdown",this.movePoint.handler.down[e]),n.removeEventListener("pointermove",this.movePoint.handler.move[e]),n.removeEventListener("pointerup",this.movePoint.handler.up[e])}catch{}}}});Ot(this,"createLine1",{createHandler:()=>{this.createLine1.handler={down:[],move:[],up:[]};let e=0;this.createLine1.handler.down.push(this.createLine1.pointerdown.bind(null,e)),this.createLine1.handler.move.push(this.createLine1.pointermove.bind(null,e)),this.createLine1.handler.up.push(this.createLine1.pointerup.bind())},pointerdown:(e,n)=>{this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.cameraIsometric);const i=this.raycaster.intersectObjects(this.planesIsometric.planes,!1);i.length>0&&(this.tempLine1.userData.indexPlane=3,this.tempLine1.material.gapSize=this.LineDashed,this.tempLine1.updatePosition(i[0].point,0,!0))},pointermove:(e,n)=>{if(this.tempLine1.userData.indexPlane==-1)return;this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.cameraIsometric);const i=this.raycaster.intersectObjects(this.planesIsometric.planes,!1);if(i.length>0){const s=i[0].point;this.tempLine1.updatePosition(s,0,!1,i[0].object)}},pointerup:()=>{this.tempLine1.userData.indexPlane=-1;const e=this.tempLine1.geometry.attributes.position.array;Math.abs(e[0]-e[3+0])+Math.abs(e[1]-e[3+1])+Math.abs(e[2]-e[3+2])>0&&(this.copyLine2(this.tempLine1),this.tempLine1.visible=!1,this.tempLine1.point1.visible=!1,this.tempLine1.point2.visible=!1)},create:()=>{this.createLine1.handler==null&&this.createLine1.createHandler();let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.addEventListener("pointerdown",this.createLine1.handler.down[e]),n.addEventListener("pointermove",this.createLine1.handler.move[e]),n.addEventListener("pointerup",this.createLine1.handler.up[e])},remove:()=>{let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.removeEventListener("pointerdown",this.createLine1.handler.down[e]),n.removeEventListener("pointermove",this.createLine1.handler.move[e]),n.removeEventListener("pointerup",this.createLine1.handler.up[e])}});Ot(this,"selectLine1",{downLineSelected:!1,downLine:void 0,overLineSelected:!1,overLine:void 0,createHandler:()=>{this.selectLine1.handler={down:[],move:[],up:[]};let e=3;this.selectLine1.handler.down.push(this.selectLine1.pointerdown.bind(null,e)),this.selectLine1.handler.move.push(this.selectLine1.pointermove.bind(null,e)),this.selectLine1.handler.up.push(this.selectLine1.pointerup.bind())},pointerdown:(e,n)=>{var s;e=3,console.log("i=3"),this.selectLine.downLineSelected&&(this.selectLine.downLineSelected=!1,this.selectLine.downLine.updateColor(0,0,0),this.selectLine.downLine.point1.material.size=1,this.selectLine.downLine.point2.material.size=1),this.selectLine1.overLineSelected=!1,(s=this.selectLine1.overLine)==null||s.updateColor(0,0,0),this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.linesSegments1,!1);if(this.selectLine1.downLineSelected=!1,i.length>0){if(this.selectLine1.downLineSelected&&this.selectLine1.downLine==i[0].object)return;this.selectLine1.downLineSelected&&this.selectLine1.downLine!=i[0].object&&this.selectLine1.downLine.updateColor(0,0,0),this.selectLine1.downLineSelected=!0,this.selectLine1.downLine=i[0].object,this.selectLine1.downLine.updateColor(255,255,0),this.movePoint1.points=[this.selectLine1.downLine.point1,this.selectLine1.downLine.point2],this.selectLine1.downLine.point1.material.size=8,this.selectLine1.downLine.point2.material.size=8,this.selectLine1.remove(),this.movePoint1.create(),this.selectLine1.downLine.material.gapSize==0?(this.oculta.dom.classList.remove("selected"),this.visible.dom.classList.add("selected")):(this.visible.dom.classList.remove("selected"),this.oculta.dom.classList.add("selected"))}},pointermove:(e,n)=>{if(e=3,this.selectLine.downLineSelected)return;this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.linesSegments1,!1);if(i.length>0){if(this.selectLine1.downLineSelected&&this.selectLine1.downLine==i[0].object||this.selectLine1.overLineSelected&&this.selectLine1.overLine==i[0].object)return;this.selectLine1.overLineSelected&&(this.selectLine1.overLine.updateColor(0,0,0),this.selectLine1.overLine.point1.material.size=1,this.selectLine1.overLine.point2.material.size=1),this.selectLine1.overLineSelected=!0,this.selectLine1.overLine=i[0].object,this.selectLine1.overLine.updateColor(255,0,255),this.selectLine1.overLine.point1.material.size=8,this.selectLine1.overLine.point2.material.size=8}else this.selectLine1.overLineSelected&&(this.selectLine1.overLine.updateColor(0,0,0),this.selectLine1.overLine.point1.material.size=1,this.selectLine1.overLine.point2.material.size=1),this.selectLine1.overLineSelected=!1},pointerup:()=>{this.tempLine1.userData.indexPlane=-1},create:()=>{this.selectLine1.handler==null&&this.selectLine1.createHandler();let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.addEventListener("pointerdown",this.selectLine1.handler.down[e]),n.addEventListener("pointermove",this.selectLine1.handler.move[e]),n.addEventListener("pointerup",this.selectLine1.handler.up[e])},remove:()=>{let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.removeEventListener("pointerdown",this.selectLine1.handler.down[e]),n.removeEventListener("pointermove",this.selectLine1.handler.move[e]),n.removeEventListener("pointerup",this.selectLine1.handler.up[e])}});Ot(this,"movePoint1",{downPointSelected:!1,downPoint:void 0,overPointSelected:!1,overPoint:void 0,points:void 0,npoint:void 0,createHandler:()=>{this.movePoint1.handler={down:[],move:[],up:[]};for(let e=0;e<this.allCanvas.length-1;e++)this.movePoint1.handler.down.push(this.movePoint1.pointerdown.bind(null,e)),this.movePoint1.handler.move.push(this.movePoint1.pointermove.bind(null,e)),this.movePoint1.handler.up.push(this.movePoint1.pointerup.bind())},pointerdown:(e,n)=>{e=3,this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]);const i=this.raycaster.intersectObjects(this.movePoint1.points,!1);console.log("dd"),i.length>0?(console.log("dd1"),this.movePoint1.downPointSelected=!0,this.movePoint1.npoint=i[0].object.uuid==this.movePoint1.points[0].uuid?0:3):(this.movePoint1.downPointSelected=!1,this.selectLine1.downLineSelected=!1,this.selectLine1.downLine.updateColor(0,0,0),this.selectLine1.downLine.point1.material.size=4,this.selectLine1.downLine.point2.material.size=4,this.movePoint1.remove(),this.selectLine1.create())},pointermove:(e,n)=>{if(e=3,this.mouse.x=n.offsetX/n.target.clientWidth*2-1,this.mouse.y=-(n.offsetY/n.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[e]),console.log(e),this.movePoint1.downPointSelected){const i=this.raycaster.intersectObjects(this.planesIsometric.planes,!1);if(i.length>0){const s=i[0].point;this.selectLine1.downLine.updatePosition(s,this.movePoint1.npoint,!1)}}else{const i=this.raycaster.intersectObjects(this.movePoint1.points,!1);i.length>0?(this.movePoint1.overPointSelected=!0,this.movePoint1.overPoint=i[0].object,this.movePoint1.overPoint.material.size=12,this.movePoint1.overPoint.material.color.r=255,this.movePoint1.overPoint.material.color.g=0,this.movePoint1.overPoint.material.color.b=0):this.movePoint1.overPointSelected&&(this.movePoint1.overPointSelected=!1,this.movePoint1.overPoint.material.size=8,this.movePoint1.overPoint.material.color.r=255,this.movePoint1.overPoint.material.color.g=255,this.movePoint1.overPoint.material.color.b=0)}},pointerup:()=>{this.movePoint1.downPointSelected!=!1&&(this.movePoint1.downPointSelected=!1)},create:()=>{this.movePoint1.handler==null&&this.movePoint1.createHandler();let e=0;const n=this.allCanvas[this.allCanvas.length-1];n.addEventListener("pointerdown",this.movePoint1.handler.down[e]),n.addEventListener("pointermove",this.movePoint1.handler.move[e]),n.addEventListener("pointerup",this.movePoint1.handler.up[e])},remove:()=>{for(let e=0;e<this.allCanvas.length-1;e++){const n=this.allCanvas[this.allCanvas.length-1];try{n.removeEventListener("pointerdown",this.movePoint1.handler.down[e]),n.removeEventListener("pointermove",this.movePoint1.handler.move[e]),n.removeEventListener("pointerup",this.movePoint1.handler.up[e])}catch{}}}});Ot(this,"initConfigVistas",()=>{const e=this.sizeProj*1,n=1.2,i=n*1.5;this.configVistas=[{axis:"x",dir:1,color:"red",name:"alzado",dim:{left:-n*e,right:n*e,top:n*e,bottom:-n*e},pos:{x:-e,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",dim:{left:-n*e,right:n*e,top:n*e,bottom:-n*e},pos:{x:0,y:0,z:-e},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",dim:{left:-n*e,right:n*e,top:n*e,bottom:-n*e},pos:{x:0,y:-e,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",dim:{left:-i*e,right:i*e,top:i*e,bottom:-i*e},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]});Ot(this,"initConfigVistas1",()=>{const e=this.sizeProj;this.configVistas=[{axis:"x",dir:1,color:"red",name:"alzado",dim:{left:-.6*e,right:.6*e,top:.6*e,bottom:-.6*e},pos:{x:-e+2,y:.7,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:.7,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",dim:{left:-.6*e,right:.6*e,top:.6*e,bottom:-.6*e},pos:{x:0,y:.7,z:-e+2},up:{x:0,y:1,z:0},look:{x:0,y:.7,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",dim:{left:-.6*e,right:.6*e,top:.6*e,bottom:-.6*e},pos:{x:0,y:-e+2,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",dim:{left:-.75*e,right:.75*e,top:.75*e,bottom:-.75*e},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]});Ot(this,"loadObject",(e,n,i={x:0,y:0,z:0})=>{new zu().load(e+n,r=>{for(let o=0;o<this.objects.length;o++)this.scene.remove(this.objects[o]);this.scene.add(r),this.objects=[],this.objects.push(r)},r=>{console.log(r.loaded/r.total*100+"% loaded")},r=>{console.log(r,"An error happened")})});Ot(this,"addObject1",()=>{const e=new Kl(2),n=new ea({color:255}),i=new Xt(e,n);this.objects.push(i),this.scene.add(i)});Ot(this,"initScene",()=>{this.scene=new _l;const e=11184810;this.scene.background=new Vt(e),this.sceneIsometric=new _l,this.sceneIsometric.background=new Vt(e)});Ot(this,"initRenderer",()=>{this.allCanvas=[],this.allRenderer=[];for(let e=0;e<this.configVistas.length;e++){const n=new ql({antialias:!0,alpha:!0});n.setPixelRatio(window.devicePixelRatio);const i=document.getElementById(this.configVistas[e].name);i.appendChild(n.domElement),this.allCanvas.push(i),n.setSize(i.clientWidth,i.clientHeight),this.allRenderer.push(n),window.addEventListener("resize",()=>{for(let s=0;s<this.allRenderer.length;s++)this.allRenderer[s].setSize(this.allCanvas[s].clientWidth,this.allCanvas[s].clientHeight)})}});Ot(this,"updateCamera",()=>{for(let e=0;e<this.allCameras.length;e++){const n=this.allCanvas[e].clientWidth/(this.allCanvas[e].clientHeight-16),i=n>=1?n:1,s=n>=1?1:1/n,r=this.allCameras[e];r.left=i*this.configVistas[e].dim.left,r.right=i*this.configVistas[e].dim.right,r.top=s*this.configVistas[e].dim.top,r.bottom=s*this.configVistas[e].dim.bottom,r.position.set(this.configVistas[e].pos.x,this.configVistas[e].pos.y,this.configVistas[e].pos.z),r.aspect=n,r.updateProjectionMatrix(),this.controls.orbits[e].update()}});Ot(this,"initCamera",()=>{this.allCameras=[];for(let e=0;e<this.configVistas.length;e++){const n=this.allCanvas[e].clientWidth/(this.allCanvas[e].clientHeight-16),i=n>=1?n:1,s=n>=1?1:1/n,r=new Ko(i*this.configVistas[e].dim.left,i*this.configVistas[e].dim.right,s*this.configVistas[e].dim.top,s*this.configVistas[e].dim.bottom,.1,3e3);r.position.set(this.configVistas[e].pos.x,this.configVistas[e].pos.y,this.configVistas[e].pos.z),r.lookAt(new P(this.configVistas[e].look.x,this.configVistas[e].look.y,this.configVistas[e].look.z)),r.up.set(this.configVistas[e].up.x,this.configVistas[e].up.y,this.configVistas[e].up.z),r.aspect=n,this.allCameras.push(r)}this.cameraIsometric=this.allCameras[this.allCameras.length-1],window.addEventListener("resize",()=>{for(let e=0;e<this.allCameras.length;e++){const n=this.allCanvas[e].clientWidth/this.allCanvas[e].clientHeight,i=n>=1?n:1,s=n>=1?1:1/n,r=this.allCameras[e];r.left=i*this.configVistas[e].dim.left,r.right=i*this.configVistas[e].dim.right,r.top=s*this.configVistas[e].dim.top,r.bottom=s*this.configVistas[e].dim.bottom,r.aspect=n,r.updateProjectionMatrix(),this.controls.orbits[e].update()}})});Ot(this,"initLights2",()=>{let e=new $n(16777215,1.5);e.position.set(1,.75,.5).normalize(),this.scene.add(e),e=new $n(16777215,1.5),e.position.set(-1,-.75,-.5).normalize(),this.scene.add(e),e=new $n(16711680,.2),e.position.set(1,0,0),this.scene.add(e),e=new $n(16711680,.2),e.position.set(-1,0,0),this.scene.add(e),e=new $n(65280,.2),e.position.set(0,1,0),this.scene.add(e),e=new $n(65280,.2),e.position.set(0,-1,0),this.scene.add(e),e=new $n(255,.2),e.position.set(0,0,1),this.scene.add(e),e=new $n(255,.2),e.position.set(0,0,-1),this.scene.add(e)});Ot(this,"initControls",()=>{this.controls={orbits:[]};for(let e=0;e<this.configVistas.length;e++){const n=new yf(this.allCameras[e],this.allCanvas[e]);n.enablePan=!1,n.enableRotate=!1,n.target.set(this.configVistas[e].look.x,this.configVistas[e].look.y,this.configVistas[e].look.z),n.update(),this.controls.orbits.push(n)}});Ot(this,"initConfig",()=>{const e=new URLSearchParams(window.location.search),n=e.get("lang");this.levelPermission=e.get("perm"),this.config=Bl(),n!==null&&this.config.setKey("language",n),this.levelPermission!==null?this.config.setKey("permission",this.levelPermission):this.levelPermission=this.config.getKey("permission"),this.strings=kl(this.config)});Ot(this,"initConfig1",()=>{this.config=Bl(),this.config.setKey(),this.strings=kl(this.config)});Ot(this,"initMenu",async()=>{this.menu=await fetch("../common/menu.json").then(e=>e.json()).then(e=>e.menu),this.menuBar=a1(this)});Ot(this,"initMenu1",()=>{this.levelPermission=100,this.menu=c1,this.menuBar=l1(this)});Ot(this,"initBar",()=>{this.bar=Iu(),this.LineBar=Linebar(this),this.isometricoEjerciciosbar=IsometricoEjerciciosbar(this),this.bar.add(this.LineBar),this.bar.add(this.isometricoEjerciciosbar),this.Teidebar=Ou()});Ot(this,"initPlanesPorj",()=>{this.planesP=new Iy(this),this.scene.add(this.planesP.planes[0],this.planesP.planes[1],this.planesP.planes[2]),this.planesIsometric=new Yy(this),this.scene.add(this.planesIsometric.planes[0],this.planesIsometric.planes[1],this.planesIsometric.planes[2],this.planesIsometric.planes[3],this.planesIsometric.planes[4],this.planesIsometric.planes[5]),this.canvasPlanes[3]=[this.planesIsometric.planes[0],this.planesIsometric.planes[1],this.planesIsometric.planes[2]]});this.objects=[],this.cubes=[],this.lines=[],this.linesSegments=[],this.pointsLinesSegments=[],this.history={copyObject:[],object:[],index:0},this.canvasPlanes={0:[],1:[],2:[],3:[]},this.width,this.height,this.LineDashed=0,this.initConfig(),this.initMenu(),this.newMenu(),this.initPlanesPorj(),this.intDrawLine(),window.addEventListener("keydown",n=>{switch(n.key.toUpperCase()){case"J":this.toJSON();break;case"R":this.JSONtoVar();break;case"S":this.saveObjects();break;case"L":let i=document.createElement("input");i.type="file",i.onchange=s=>{const r=i.files[0].name;this.read("./exercises/",r)},i.click();break;case"M":this.read();break}})}toJSON(){this.exportJSON={segments:[],gapSize:[],views:[]};for(let n=0;n<this.linesSegments.length;n++)this.exportJSON.segments.push(this.linesSegments[n].geometry.attributes.position.array),this.exportJSON.gapSize.push(this.linesSegments[n].material.gapSize),this.exportJSON.views.push(this.linesSegments[n].views);for(let n=0;n<this.linesSegments1.length;n++)this.exportJSON.segments.push(this.linesSegments1[n].geometry.attributes.position.array),this.exportJSON.gapSize.push(this.linesSegments1[n].material.gapSize),this.exportJSON.views.push(this.linesSegments1[n].views);const e=JSON.stringify(this.exportJSON);return JSON.parse(e),e}JSONtoVar(){const e=JSON.parse(window.localStorage.proj);for(const n in e.segments){const i=[];for(const s in e.segments[n])i.push(e.segments[n][s]);this.copyLine(i)}}reset(){for(let e=0;e<this.linesSegments.length;e++)this.scene.remove(this.linesSegments[e]);this.linesSegments=[]}reset1(){for(let e=0;e<this.linesSegments.length;e++)this.scene.remove(this.linesSegments[e]);for(let e=0;e<this.pointsLinesSegments.length;e++)this.scene.remove(this.pointsLinesSegments[e]);this.linesSegments=[],this.pointsLinesSegments=[];for(let e=0;e<this.linesSegments1.length;e++)this.sceneIsometric.remove(this.linesSegments1[e]);for(let e=0;e<this.pointsLinesSegments1.length;e++)this.sceneIsometric.remove(this.pointsLinesSegments1[e]);this.linesSegments1=[],this.pointsLinesSegments1=[]}copyLine3(e,n,i=null){const s=new Ro(e,0);s.material.gapSize=n,s.views=i,i==null||i?(this.linesSegments.push(s),this.pointsLinesSegments.push(s.point1,s.point2),this.scene.add(s,s.point1,s.point2)):(this.linesSegments1.push(s),this.pointsLinesSegments1.push(s.point1,s.point2),this.sceneIsometric.add(s,s.point1,s.point2))}copyLine4(e,n){const i=new Ro(e,0);i.material.gapSize=n,this.linesSegments.push(i),this.pointsLinesSegments.push(i.point1,i.point2),this.sceneIsometric.add(i,i.point1,i.point2)}copyLine(e){const n=new Ro(e.geometry.attributes.position.array,0);n.material.gapSize=this.tempLine.material.gapSize,n.views=!0,this.linesSegments.push(n),this.pointsLinesSegments.push(n.point1,n.point2),this.scene.add(n,n.point1,n.point2)}copyLine2(e){const n=new Ro(e.geometry.attributes.position.array,0);n.material.gapSize=this.tempLine1.material.gapSize,n.views=!1,this.linesSegments1.push(n),this.pointsLinesSegments1.push(n.point1,n.point2),this.sceneIsometric.add(n,n.point1,n.point2)}intDrawLine(){this.Line=s1(this),this.Line.createHandler()}intDrawPoint(){const e=[0,0,0],n=new In({color:0,name:"P0",size:3}),i=new ue;i.setAttribute("position",new ee(e,3)),this.point=new bi(i,n),this.scene.add(this.point);for(let s=0;s<this.allCanvas.length-1;s++)this.allCanvas[s].addEventListener("pointerdown",r=>{console.log(r),this.mouse.x=r.offsetX/r.target.clientWidth*2-1,this.mouse.y=-(r.offsetY/r.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[s]);const o=this.raycaster.intersectObjects([this.planesP.planes[(3-s)%3]],!1);if(o.length>0){const c=o[0].point,l=this.point.geometry.attributes.position;l.array[0]=c.x,l.array[1]=c.y,l.array[2]=c.z,l.needsUpdate=!0}})}}let Io=new h1;function wf(){requestAnimationFrame(wf);for(let a=0;a<Io.allRenderer.length-0;a++)Io.allRenderer[a].render(Io.scene,Io.allCameras[a])}wf();
