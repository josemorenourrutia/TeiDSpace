var pf=Object.defineProperty;var mf=(a,e,t)=>e in a?pf(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var $e=(a,e,t)=>(mf(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="151",Ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gf=0,bl=1,_f=2,Ah=1,vf=2,ks=3,ni=0,Ut=1,tn=2,Qn=0,hs=1,Ml=2,wl=3,Tl=4,xf=5,rs=100,yf=101,Sf=102,El=103,Al=104,bf=200,Mf=201,wf=202,Tf=203,Ch=204,Ph=205,Ef=206,Af=207,Cf=208,Pf=209,Lf=210,Df=0,Lh=1,Rf=2,pa=3,If=4,Uf=5,Of=6,zf=7,ja=0,Nf=1,Ff=2,zn=0,Bf=1,kf=2,Vf=3,Gf=4,Hf=5,Dh=300,_s=301,vs=302,ma=303,ga=304,ao=306,_a=1e3,pn=1001,va=1002,Rt=1003,Cl=1004,yo=1005,en=1006,Wf=1007,Ks=1008,Ci=1009,jf=1010,qf=1011,Rh=1012,Xf=1013,xi=1014,yi=1015,$s=1016,Yf=1017,Zf=1018,us=1020,Jf=1021,mn=1023,Kf=1024,$f=1025,Mi=1026,xs=1027,Qf=1028,ed=1029,td=1030,nd=1031,id=1033,So=33776,bo=33777,Mo=33778,wo=33779,Pl=35840,Ll=35841,Dl=35842,Rl=35843,sd=36196,Il=37492,Ul=37496,Ol=37808,zl=37809,Nl=37810,Fl=37811,Bl=37812,kl=37813,Vl=37814,Gl=37815,Hl=37816,Wl=37817,jl=37818,ql=37819,Xl=37820,Yl=37821,To=36492,rd=36283,Zl=36284,Jl=36285,Kl=36286,Pi=3e3,Je=3001,od=3200,ad=3201,Ih=0,ld=1,yn="srgb",Qs="srgb-linear",Uh="display-p3",Eo=7680,cd=519,$l=35044,Ql="300 es",xa=1035;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];const Ao=Math.PI/180,ya=180/Math.PI;function Cs(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[a&255]+Mt[a>>8&255]+Mt[a>>16&255]+Mt[a>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function xt(a,e,t){return Math.max(e,Math.min(t,a))}function hd(a,e){return(a%e+e)%e}function Co(a,e,t){return(1-t)*a+t*e}function ec(a){return(a&a-1)===0&&a!==0}function ud(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function dr(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function kt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],b=i[1],x=i[4],v=i[7],y=i[2],M=i[5],E=i[8];return s[0]=o*g+r*b+l*y,s[3]=o*m+r*x+l*M,s[6]=o*d+r*v+l*E,s[1]=c*g+h*b+u*y,s[4]=c*m+h*x+u*M,s[7]=c*d+h*v+u*E,s[2]=f*g+p*b+_*y,s[5]=f*m+p*x+_*M,s[8]=f*d+p*v+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*r*c-n*s*h+n*r*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=h*o-r*c,f=r*l-h*s,p=c*s-o*l,_=t*u+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(r*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-r*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*r)+o+e,-i*c,i*l,-i*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new ke;function Oh(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function $r(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function fs(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Lo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const fd=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),dd=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function pd(a){return a.convertSRGBToLinear().applyMatrix3(dd)}function md(a){return a.applyMatrix3(fd).convertLinearToSRGB()}const gd={[Qs]:a=>a,[yn]:a=>a.convertSRGBToLinear(),[Uh]:pd},_d={[Qs]:a=>a,[yn]:a=>a.convertLinearToSRGB(),[Uh]:md},Vt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Qs},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=gd[e],i=_d[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Bi;class zh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=$r("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fs(t[n]/255)*255):t[n]=fs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nh{constructor(e=null){this.isSource=!0,this.uuid=Cs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Do(i[o].image)):s.push(Do(i[o]))}else s=Do(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Do(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?zh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;class qt extends Ui{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=pn,i=pn,s=en,o=Ks,r=mn,l=Ci,c=qt.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Cs(),this.name="",this.source=new Nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _a:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _a:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Dh;qt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,y=(d+1)/2,M=(h+f)/4,E=(u+g)/4,C=(_+m)/4;return x>v&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=M/n,s=E/n):v>y?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=M/i,s=C/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=E/s,i=C/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-g)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Li extends Ui{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fh extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xd extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(r===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==f||c!==p||h!==_){let m=1-r;const d=l*f+c*p+h*_+u*g,b=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const y=Math.sqrt(x),M=Math.atan2(y,d*b);m=Math.sin(m*M)/y,r=Math.sin(r*M)/y}const v=r*b;if(l=l*m+f*v,c=c*m+p*v,h=h*m+_*v,u=u*m+g*v,m===1-r){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=r*_+h*u+l*p-c*f,e[t+1]=l*_+h*f+c*u-r*p,e[t+2]=c*_+h*p+r*f-l*u,e[t+3]=h*_-r*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),u=r(s/2),f=l(n/2),p=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+r+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>r&&n>u){const p=2*Math.sqrt(1+n-r-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(r>u){const p=2*Math.sqrt(1+r-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-r);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*r+i*c-s*l,this._y=i*h+o*l+s*r-n*c,this._z=s*h+o*c+n*l-i*r,this._w=o*h-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=l*t+o*i-r*n,h=l*n+r*t-s*i,u=l*i+s*n-o*t,f=-s*t-o*n-r*i;return this.x=c*l+f*-s+h*-r-u*-o,this.y=h*l+f*-o+u*-s-c*-r,this.z=u*l+f*-r+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=i*l-s*r,this.y=s*o-n*l,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new L,tc=new ii;class Oi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,r=s.count;o<r;o++)An.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(An)}else i.boundingBox===null&&i.computeBoundingBox(),ki.copy(i.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),pr.subVectors(this.max,Is),Vi.subVectors(e.a,Is),Gi.subVectors(e.b,Is),Hi.subVectors(e.c,Is),Wn.subVectors(Gi,Vi),jn.subVectors(Hi,Gi),hi.subVectors(Vi,Hi);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-hi.z,hi.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!Io(t,Vi,Gi,Hi,pr)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,Vi,Gi,Hi,pr))?!1:(mr.crossVectors(Wn,jn),t=[mr.x,mr.y,mr.z],Io(t,Vi,Gi,Hi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new L,new L,new L,new L,new L,new L,new L,new L],An=new L,ki=new Oi,Vi=new L,Gi=new L,Hi=new L,Wn=new L,jn=new L,hi=new L,Is=new L,pr=new L,mr=new L,ui=new L;function Io(a,e,t,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){ui.fromArray(a,s);const r=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const yd=new Oi,Us=new L,Uo=new L;class Ps{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Uo)),this.expandByPoint(Us.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new L,Oo=new L,gr=new L,qn=new L,zo=new L,_r=new L,No=new L;class lo{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oo.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Oo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gr),r=qn.dot(this.direction),l=-qn.dot(gr),c=qn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,_;if(h>0)if(u=o*l-r,f=o*r-l,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,p=u*(u+o*f+2*r)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*s+r)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+r)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+r)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oo).addScaledVector(gr,f),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(r=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,s){zo.subVectors(t,e),_r.subVectors(n,e),No.crossVectors(zo,_r);let o=this.direction.dot(No),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=r*this.direction.dot(_r.crossVectors(qn,_r));if(l<0)return null;const c=r*this.direction.dot(zo.cross(qn));if(c<0||l+c>o)return null;const h=-r*qn.dot(No);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,l,c,h,u,f,p,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=r,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*u,_=r*h,g=r*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=f-g*c,t[9]=-r*l,t[2]=g-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,_=c*h,g=c*u;t[0]=f+g*r,t[4]=_*r-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-r,t[2]=p*r-_,t[6]=g+f*r,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,_=c*h,g=c*u;t[0]=f-g*r,t[4]=-o*u,t[8]=_+p*r,t[1]=p+_*r,t[5]=o*h,t[9]=g-f*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,_=r*h,g=r*u;t[0]=l*h,t[4]=_*c-p,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=p*c-_,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=r*l,g=r*c;t[0]=l*h,t[4]=g-f*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-r*h,t[2]=-c*h,t[6]=p*u+_,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*l,p=o*c,_=r*l,g=r*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=r*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sd,e,bd)}lookAt(e,t,n){const i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Xn.crossVectors(n,Gt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Xn.crossVectors(n,Gt)),Xn.normalize(),vr.crossVectors(Gt,Xn),i[0]=Xn.x,i[4]=vr.x,i[8]=Gt.x,i[1]=Xn.y,i[5]=vr.y,i[9]=Gt.y,i[2]=Xn.z,i[6]=vr.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],b=n[3],x=n[7],v=n[11],y=n[15],M=i[0],E=i[4],C=i[8],S=i[12],T=i[1],z=i[5],k=i[9],R=i[13],U=i[2],N=i[6],X=i[10],Z=i[14],W=i[3],ne=i[7],Q=i[11],xe=i[15];return s[0]=o*M+r*T+l*U+c*W,s[4]=o*E+r*z+l*N+c*ne,s[8]=o*C+r*k+l*X+c*Q,s[12]=o*S+r*R+l*Z+c*xe,s[1]=h*M+u*T+f*U+p*W,s[5]=h*E+u*z+f*N+p*ne,s[9]=h*C+u*k+f*X+p*Q,s[13]=h*S+u*R+f*Z+p*xe,s[2]=_*M+g*T+m*U+d*W,s[6]=_*E+g*z+m*N+d*ne,s[10]=_*C+g*k+m*X+d*Q,s[14]=_*S+g*R+m*Z+d*xe,s[3]=b*M+x*T+v*U+y*W,s[7]=b*E+x*z+v*N+y*ne,s[11]=b*C+x*k+v*X+y*Q,s[15]=b*S+x*R+v*Z+y*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+s*l*u-i*c*u-s*r*f+n*c*f+i*r*p-n*l*p)+g*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*h-s*l*h)+m*(+t*c*u-t*r*p-s*o*u+n*o*p+s*r*h-n*c*h)+d*(-i*r*h-t*l*u+t*r*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],b=u*m*c-g*f*c+g*l*p-r*m*p-u*l*d+r*f*d,x=_*f*c-h*m*c-_*l*p+o*m*p+h*l*d-o*f*d,v=h*g*c-_*u*c+_*r*p-o*g*p-h*r*d+o*u*d,y=_*u*l-h*g*l-_*r*f+o*g*f+h*r*m-o*u*m,M=t*b+n*x+i*v+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=b*E,e[1]=(g*f*s-u*m*s-g*i*p+n*m*p+u*i*d-n*f*d)*E,e[2]=(r*m*s-g*l*s+g*i*c-n*m*c-r*i*d+n*l*d)*E,e[3]=(u*l*s-r*f*s-u*i*c+n*f*c+r*i*p-n*l*p)*E,e[4]=x*E,e[5]=(h*m*s-_*f*s+_*i*p-t*m*p-h*i*d+t*f*d)*E,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*d-t*l*d)*E,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*p+t*l*p)*E,e[8]=v*E,e[9]=(_*u*s-h*g*s-_*n*p+t*g*p+h*n*d-t*u*d)*E,e[10]=(o*g*s-_*r*s+_*n*c-t*g*c-o*n*d+t*r*d)*E,e[11]=(h*r*s-o*u*s-h*n*c+t*u*c+o*n*p-t*r*p)*E,e[12]=y*E,e[13]=(h*g*i-_*u*i+_*n*f-t*g*f-h*n*m+t*u*m)*E,e[14]=(_*r*i-o*g*i-_*n*l+t*g*l+o*n*m-t*r*m)*E,e[15]=(o*u*i-h*r*i+h*n*l-t*u*l-o*n*f+t*r*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,l=e.z,c=s*o,h=s*r;return this.set(c*o+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*o,0,c*l-i*r,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,h=o+o,u=r+r,f=s*c,p=s*h,_=s*u,g=o*h,m=o*u,d=r*u,b=l*c,x=l*h,v=l*u,y=n.x,M=n.y,E=n.z;return i[0]=(1-(g+d))*y,i[1]=(p+v)*y,i[2]=(_-x)*y,i[3]=0,i[4]=(p-v)*M,i[5]=(1-(f+d))*M,i[6]=(m+b)*M,i[7]=0,i[8]=(_+x)*E,i[9]=(m-b)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Wi.set(i[0],i[1],i[2]).length();const o=Wi.set(i[4],i[5],i[6]).length(),r=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/s,h=1/o,u=1/r;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){const r=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return r[0]=l,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=f,r[14]=p,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){const r=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,f=(n+i)*c,p=(o+s)*h;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-p,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new L,ln=new it,Sd=new L(0,0,0),bd=new L(1,1,1),Xn=new L,vr=new L,Gt=new L,nc=new it,ic=new ii;class co{constructor(e=0,t=0,n=0,i=co.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],r=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}co.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Md=0;const sc=new L,ji=new ii,Pn=new it,xr=new L,Os=new L,wd=new L,Td=new ii,rc=new L(1,0,0),oc=new L(0,1,0),ac=new L(0,0,1),Ed={type:"added"},lc={type:"removed"};class ft extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new co,n=new ii,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new ke}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(oc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(oc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Os,xr,this.up):Pn.lookAt(xr,Os,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),ji.setFromRotationMatrix(Pn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ed)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(lc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(s(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new L,Ln=new L,Fo=new L,Dn=new L,qi=new L,Xi=new L,cc=new L,Bo=new L,ko=new L,Vo=new L;let yr=!1;class un{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),Ln.subVectors(n,t),Fo.subVectors(e,t);const o=cn.dot(cn),r=cn.dot(Ln),l=cn.dot(Fo),c=Ln.dot(Ln),h=Ln.dot(Fo),u=o*c-r*r;if(u===0)return s.set(-2,-1,-1);const f=1/u,p=(c*l-r*h)*f,_=(o*h-r*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,i,s,o,r,l){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),this.getInterpolation(e,t,n,i,s,o,r,l)}static getInterpolation(e,t,n,i,s,o,r,l){return this.getBarycoord(e,t,n,i,Dn),l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(r,Dn.z),l}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Ln.subVectors(e,t),cn.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,r;qi.subVectors(i,n),Xi.subVectors(s,n),Bo.subVectors(e,n);const l=qi.dot(Bo),c=Xi.dot(Bo);if(l<=0&&c<=0)return t.copy(n);ko.subVectors(e,i);const h=qi.dot(ko),u=Xi.dot(ko);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(qi,o);Vo.subVectors(e,s);const p=qi.dot(Vo),_=Xi.dot(Vo);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return r=c/(c-_),t.copy(n).addScaledVector(Xi,r);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return cc.subVectors(s,i),r=(u-h)/(u-h+(p-_)),t.copy(i).addScaledVector(cc,r);const d=1/(m+g+f);return o=g*d,r=f*d,t.copy(n).addScaledVector(qi,o).addScaledVector(Xi,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ad=0;class Bn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=hs,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Go(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vt.workingColorSpace){if(e=hd(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Go(o,s,e+1/3),this.g=Go(o,s,e),this.b=Go(o,s,e-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(e,t=yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Vt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Vt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Vt.fromWorkingColorSpace(wt.copy(this),e),xt(wt.r*255,0,255)<<16^xt(wt.g*255,0,255)<<8^xt(wt.b*255,0,255)<<0}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,s=wt.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const u=o-r;switch(c=h<=.5?u/(o+r):u/(2-o-r),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=yn){Vt.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Sr);const n=Co(hn.h,Sr.h,t),i=Co(hn.s,Sr.s,t),s=Co(hn.l,Sr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ve;Ve.NAMES=Bh;class Ws extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new L,br=new ce;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$l,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class kh extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vh extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cd=0;const Jt=new it,Ho=new ft,Yi=new L,Ht=new Oi,zs=new Oi,vt=new L;class Ke extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Vh:kh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];zs.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(Ht.min,zs.min),Ht.expandByPoint(vt),vt.addVectors(Ht.max,zs.max),Ht.expandByPoint(vt)):(Ht.expandByPoint(zs.min),Ht.expandByPoint(zs.max))}Ht.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)vt.fromBufferAttribute(r,c),l&&(Yi.fromBufferAttribute(e,c),vt.add(Yi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<r;T++)c[T]=new L,h[T]=new L;const u=new L,f=new L,p=new L,_=new ce,g=new ce,m=new ce,d=new L,b=new L;function x(T,z,k){u.fromArray(i,T*3),f.fromArray(i,z*3),p.fromArray(i,k*3),_.fromArray(o,T*2),g.fromArray(o,z*2),m.fromArray(o,k*2),f.sub(u),p.sub(u),g.sub(_),m.sub(_);const R=1/(g.x*m.y-m.x*g.y);!isFinite(R)||(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(R),b.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(R),c[T].add(d),c[z].add(d),c[k].add(d),h[T].add(b),h[z].add(b),h[k].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,z=v.length;T<z;++T){const k=v[T],R=k.start,U=k.count;for(let N=R,X=R+U;N<X;N+=3)x(n[N+0],n[N+1],n[N+2])}const y=new L,M=new L,E=new L,C=new L;function S(T){E.fromArray(s,T*3),C.copy(E);const z=c[T];y.copy(z),y.sub(E.multiplyScalar(E.dot(z))).normalize(),M.crossVectors(C,z);const R=M.dot(h[T])<0?-1:1;l[T*4]=y.x,l[T*4+1]=y.y,l[T*4+2]=y.z,l[T*4+3]=R}for(let T=0,z=v.length;T<z;++T){const k=v[T],R=k.start,U=k.count;for(let N=R,X=R+U;N<X;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,o=new L,r=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),r.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(_,r.x,r.y,r.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,u=r.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){r.isInterleavedBufferAttribute?p=l[g]*r.data.stride+r.offset:p=l[g]*h;for(let d=0;d<h;d++)f[_++]=c[p++]}return new Et(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ke,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=e(l,n);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new it,xn=new lo,Mr=new Ps,uc=new L,Zi=new L,Ji=new L,Ki=new L,Wo=new L,wr=new L,Tr=new ce,Er=new ce,Ar=new ce,fc=new L,dc=new L,pc=new L,Cr=new L,Pr=new L;class pt extends ft{constructor(e=new Ke,t=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],u=s[l];h!==0&&(Wo.fromBufferAttribute(u,e),o?wr.addScaledVector(Wo,h):wr.addScaledVector(Wo.sub(t),h))}t.add(wr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),xn.copy(e.ray).recast(e.near),Mr.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Mr,uc)===null||xn.origin.distanceToSquared(uc)>(e.far-e.near)**2))||(hc.copy(s).invert(),xn.copy(e.ray).applyMatrix4(hc),n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,f=n.groups,p=n.drawRange;if(r!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,y=x;v<y;v+=3){const M=r.getX(v),E=r.getX(v+1),C=r.getX(v+2);o=Lr(this,d,e,xn,c,h,u,M,E,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,p.start),g=Math.min(r.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const b=r.getX(m),x=r.getX(m+1),v=r.getX(m+2);o=Lr(this,i,e,xn,c,h,u,b,x,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,y=x;v<y;v+=3){const M=v,E=v+1,C=v+2;o=Lr(this,d,e,xn,c,h,u,M,E,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const b=m,x=m+1,v=m+2;o=Lr(this,i,e,xn,c,h,u,b,x,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Pd(a,e,t,n,i,s,o,r){let l;if(e.side===Ut?l=n.intersectTriangle(o,s,i,!0,r):l=n.intersectTriangle(i,s,o,e.side===ni,r),l===null)return null;Pr.copy(r),Pr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:a}}function Lr(a,e,t,n,i,s,o,r,l,c){a.getVertexPosition(r,Zi),a.getVertexPosition(l,Ji),a.getVertexPosition(c,Ki);const h=Pd(a,e,t,n,Zi,Ji,Ki,Cr);if(h){i&&(Tr.fromBufferAttribute(i,r),Er.fromBufferAttribute(i,l),Ar.fromBufferAttribute(i,c),h.uv=un.getInterpolation(Cr,Zi,Ji,Ki,Tr,Er,Ar,new ce)),s&&(Tr.fromBufferAttribute(s,r),Er.fromBufferAttribute(s,l),Ar.fromBufferAttribute(s,c),h.uv2=un.getInterpolation(Cr,Zi,Ji,Ki,Tr,Er,Ar,new ce)),o&&(fc.fromBufferAttribute(o,r),dc.fromBufferAttribute(o,l),pc.fromBufferAttribute(o,c),h.normal=un.getInterpolation(Cr,Zi,Ji,Ki,fc,dc,pc,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:r,b:l,c,normal:new L,materialIndex:0};un.getNormal(Zi,Ji,Ki,u.normal),h.face=u}return h}class Ls extends Ke{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function _(g,m,d,b,x,v,y,M,E,C,S){const T=v/E,z=y/C,k=v/2,R=y/2,U=M/2,N=E+1,X=C+1;let Z=0,W=0;const ne=new L;for(let Q=0;Q<X;Q++){const xe=Q*z-R;for(let se=0;se<N;se++){const H=se*T-k;ne[g]=H*b,ne[m]=xe*x,ne[d]=U,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[d]=M>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(se/E),u.push(1-Q/C),Z+=1}}for(let Q=0;Q<C;Q++)for(let xe=0;xe<E;xe++){const se=f+xe+N*Q,H=f+xe+N*(Q+1),J=f+(xe+1)+N*(Q+1),le=f+(xe+1)+N*Q;l.push(se,H,le),l.push(H,J,le),W+=6}r.addGroup(p,W,S),p+=W,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(a){const e={};for(let t=0;t<a.length;t++){const n=ys(a[t]);for(const i in n)e[i]=n[i]}return e}function Ld(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Gh(a){return a.getRenderTarget()===null&&a.outputEncoding===Je?yn:Qs}const Hh={clone:ys,merge:Dt};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wh extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Wh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Qi=1;class Id extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new fn($i,Qi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new fn($i,Qi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new fn($i,Qi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new fn($i,Qi,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const l=new fn($i,Qi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new fn($i,Qi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=zn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class jh extends qt{constructor(e,t,n,i,s,o,r,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,i,s,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ud extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ls(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Qn});s.uniforms.tEquirect.value=t;const o=new pt(i,s),r=t.minFilter;return t.minFilter===Ks&&(t.minFilter=en),new Id(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const jo=new L,Od=new L,zd=new ke;class mi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=jo.subVectors(n,t).cross(Od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zd.getNormalMatrix(e),i=this.coplanarPoint(jo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ps,Dr=new L;class Xa{constructor(e=new mi,t=new mi,n=new mi,i=new mi,s=new mi,o=new mi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],d=n[13],b=n[14],x=n[15];return t[0].setComponents(r-i,u-l,g-f,x-m).normalize(),t[1].setComponents(r+i,u+l,g+f,x+m).normalize(),t[2].setComponents(r+s,u+c,g+p,x+d).normalize(),t[3].setComponents(r-s,u-c,g-p,x-d).normalize(),t[4].setComponents(r-o,u-h,g-_,x-b).normalize(),t[5].setComponents(r+o,u+h,g+_,x+b).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qh(){let a=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Nd(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,p=a.createBuffer();a.bindBuffer(h,p),a.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,p=h.updateRange;a.bindBuffer(u,c),p.count===-1?a.bufferSubData(u,0,f):(t?a.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):a.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:r,update:l}}class er extends Ke{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,u=e/r,f=t/l,p=[],_=[],g=[],m=[];for(let d=0;d<h;d++){const b=d*f-o;for(let x=0;x<c;x++){const v=x*u-s;_.push(v,-b,0),g.push(0,0,1),m.push(x/r),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<r;b++){const x=b+c*d,v=b+c*(d+1),y=b+1+c*(d+1),M=b+1+c*d;p.push(x,v,M),p.push(v,y,M)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd="vec3 transformed = vec3( position );",jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ip=`#define PI 3.141592653589793
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
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rp=`vec3 transformedNormal = objectNormal;
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
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fp=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,bp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
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
#endif`,Ap=`#if defined( USE_ENVMAP )
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
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
#endif`,Ip=`struct PhysicalMaterial {
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
}`,Up=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wp=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
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
#endif`,Zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#ifdef USE_UV
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
#endif`,Lm=`#ifdef USE_UV
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
#endif`,Dm=`#ifdef USE_UV
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Um=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bm=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,Vm=`#define DISTANCE
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
}`,Gm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jm=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Zm=`#define LAMBERT
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
}`,Jm=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,$m=`#define MATCAP
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
}`,Qm=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,og=`#define TOON
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
}`,ag=`uniform float size;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Fd,alphamap_pars_fragment:Bd,alphatest_fragment:kd,alphatest_pars_fragment:Vd,aomap_fragment:Gd,aomap_pars_fragment:Hd,begin_vertex:Wd,beginnormal_vertex:jd,bsdfs:qd,iridescence_fragment:Xd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:$d,color_fragment:Qd,color_pars_fragment:ep,color_pars_vertex:tp,color_vertex:np,common:ip,cube_uv_reflection_fragment:sp,defaultnormal_vertex:rp,displacementmap_pars_vertex:op,displacementmap_vertex:ap,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,encodings_fragment:hp,encodings_pars_fragment:up,envmap_fragment:fp,envmap_common_pars_fragment:dp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:Ap,envmap_vertex:gp,fog_vertex:_p,fog_pars_vertex:vp,fog_fragment:xp,fog_pars_fragment:yp,gradientmap_pars_fragment:Sp,lightmap_fragment:bp,lightmap_pars_fragment:Mp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ep,lights_toon_fragment:Cp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Rp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Up,lights_fragment_maps:Op,lights_fragment_end:zp,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:kp,map_fragment:Vp,map_pars_fragment:Gp,map_particle_fragment:Hp,map_particle_pars_fragment:Wp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:qp,morphcolor_vertex:Xp,morphnormal_vertex:Yp,morphtarget_pars_vertex:Zp,morphtarget_vertex:Jp,normal_fragment_begin:Kp,normal_fragment_maps:$p,normal_pars_fragment:Qp,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:om,output_fragment:am,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:hm,dithering_fragment:um,dithering_pars_fragment:fm,roughnessmap_fragment:dm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:_m,shadowmask_pars_fragment:vm,skinbase_vertex:xm,skinning_pars_vertex:ym,skinning_vertex:Sm,skinnormal_vertex:bm,specularmap_fragment:Mm,specularmap_pars_fragment:wm,tonemapping_fragment:Tm,tonemapping_pars_fragment:Em,transmission_fragment:Am,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Lm,uv_vertex:Dm,worldpos_vertex:Rm,background_vert:Im,background_frag:Um,backgroundCube_vert:Om,backgroundCube_frag:zm,cube_vert:Nm,cube_frag:Fm,depth_vert:Bm,depth_frag:km,distanceRGBA_vert:Vm,distanceRGBA_frag:Gm,equirect_vert:Hm,equirect_frag:Wm,linedashed_vert:jm,linedashed_frag:qm,meshbasic_vert:Xm,meshbasic_frag:Ym,meshlambert_vert:Zm,meshlambert_frag:Jm,meshmatcap_vert:Km,meshmatcap_frag:$m,meshnormal_vert:Qm,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:lg,shadow_vert:cg,shadow_frag:hg,sprite_vert:ug,sprite_frag:fg},ue={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaTest:{value:0}}},dn={basic:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Dt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Dt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Dt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Dt([ue.points,ue.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Dt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Dt([ue.common,ue.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Dt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Dt([ue.sprite,ue.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Dt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Dt([ue.lights,ue.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};dn.physical={uniforms:Dt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Rr={r:0,b:0,g:0};function dg(a,e,t,n,i,s,o){const r=new Ve(0);let l=s===!0?0:1,c,h,u=null,f=0,p=null;function _(m,d){let b=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x));const v=a.xr,y=v.getSession&&v.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(r,l):x&&x.isColor&&(g(x,1),b=!0),(a.autoClear||b)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ao)?(h===void 0&&(h=new pt(new Ls(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:ys(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=x.encoding!==Je,(u!==x||f!==x.version||p!==a.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pt(new er(2,2),new Di({name:"BackgroundMaterial",uniforms:ys(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(Rr,Gh(a)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,d,o)}return{getClearColor:function(){return r},setClearColor:function(m,d=1){r.set(m),l=d,g(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(r,l)},render:_}}function pg(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},l=m(null);let c=l,h=!1;function u(U,N,X,Z,W){let ne=!1;if(o){const Q=g(Z,X,N);c!==Q&&(c=Q,p(c.object)),ne=d(U,Z,X,W),ne&&b(U,Z,X,W)}else{const Q=N.wireframe===!0;(c.geometry!==Z.id||c.program!==X.id||c.wireframe!==Q)&&(c.geometry=Z.id,c.program=X.id,c.wireframe=Q,ne=!0)}W!==null&&t.update(W,34963),(ne||h)&&(h=!1,C(U,N,X,Z),W!==null&&a.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function p(U){return n.isWebGL2?a.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?a.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function g(U,N,X){const Z=X.wireframe===!0;let W=r[U.id];W===void 0&&(W={},r[U.id]=W);let ne=W[N.id];ne===void 0&&(ne={},W[N.id]=ne);let Q=ne[Z];return Q===void 0&&(Q=m(f()),ne[Z]=Q),Q}function m(U){const N=[],X=[],Z=[];for(let W=0;W<i;W++)N[W]=0,X[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:Z,object:U,attributes:{},index:null}}function d(U,N,X,Z){const W=c.attributes,ne=N.attributes;let Q=0;const xe=X.getAttributes();for(const se in xe)if(xe[se].location>=0){const J=W[se];let le=ne[se];if(le===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Z}function b(U,N,X,Z){const W={},ne=N.attributes;let Q=0;const xe=X.getAttributes();for(const se in xe)if(xe[se].location>=0){let J=ne[se];J===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),W[se]=le,Q++}c.attributes=W,c.attributesNum=Q,c.index=Z}function x(){const U=c.newAttributes;for(let N=0,X=U.length;N<X;N++)U[N]=0}function v(U){y(U,0)}function y(U,N){const X=c.newAttributes,Z=c.enabledAttributes,W=c.attributeDivisors;X[U]=1,Z[U]===0&&(a.enableVertexAttribArray(U),Z[U]=1),W[U]!==N&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,N),W[U]=N)}function M(){const U=c.newAttributes,N=c.enabledAttributes;for(let X=0,Z=N.length;X<Z;X++)N[X]!==U[X]&&(a.disableVertexAttribArray(X),N[X]=0)}function E(U,N,X,Z,W,ne){n.isWebGL2===!0&&(X===5124||X===5125)?a.vertexAttribIPointer(U,N,X,W,ne):a.vertexAttribPointer(U,N,X,Z,W,ne)}function C(U,N,X,Z){if(n.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=Z.attributes,ne=X.getAttributes(),Q=N.defaultAttributeValues;for(const xe in ne){const se=ne[xe];if(se.location>=0){let H=W[xe];if(H===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){const J=H.normalized,le=H.itemSize,pe=t.get(H);if(pe===void 0)continue;const B=pe.buffer,Pe=pe.type,Ce=pe.bytesPerElement;if(H.isInterleavedBufferAttribute){const ae=H.data,ye=ae.stride,te=H.offset;if(ae.isInstancedInterleavedBuffer){for(let Y=0;Y<se.locationSize;Y++)y(se.location+Y,ae.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Y=0;Y<se.locationSize;Y++)v(se.location+Y);a.bindBuffer(34962,B);for(let Y=0;Y<se.locationSize;Y++)E(se.location+Y,le/se.locationSize,Pe,J,ye*Ce,(te+le/se.locationSize*Y)*Ce)}else{if(H.isInstancedBufferAttribute){for(let ae=0;ae<se.locationSize;ae++)y(se.location+ae,H.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ae=0;ae<se.locationSize;ae++)v(se.location+ae);a.bindBuffer(34962,B);for(let ae=0;ae<se.locationSize;ae++)E(se.location+ae,le/se.locationSize,Pe,J,le*Ce,le/se.locationSize*ae*Ce)}}else if(Q!==void 0){const J=Q[xe];if(J!==void 0)switch(J.length){case 2:a.vertexAttrib2fv(se.location,J);break;case 3:a.vertexAttrib3fv(se.location,J);break;case 4:a.vertexAttrib4fv(se.location,J);break;default:a.vertexAttrib1fv(se.location,J)}}}}M()}function S(){k();for(const U in r){const N=r[U];for(const X in N){const Z=N[X];for(const W in Z)_(Z[W].object),delete Z[W];delete N[X]}delete r[U]}}function T(U){if(r[U.id]===void 0)return;const N=r[U.id];for(const X in N){const Z=N[X];for(const W in Z)_(Z[W].object),delete Z[W];delete N[X]}delete r[U.id]}function z(U){for(const N in r){const X=r[N];if(X[U.id]===void 0)continue;const Z=X[U.id];for(const W in Z)_(Z[W].object),delete Z[W];delete X[U.id]}}function k(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:v,disableUnusedAttributes:M}}function mg(a,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function r(c,h){a.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,p;if(i)f=a,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=r,this.renderInstances=l}function gg(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=a.getParameter(34930),f=a.getParameter(35660),p=a.getParameter(3379),_=a.getParameter(34076),g=a.getParameter(34921),m=a.getParameter(36347),d=a.getParameter(36348),b=a.getParameter(36349),x=f>0,v=o||e.has("OES_texture_float"),y=x&&v,M=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:y,maxSamples:M}}function _g(a){const e=this;let t=null,n=0,i=!1,s=!1;const o=new mi,r=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=a.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,x=b*4;let v=d.clippingState||null;l.value=v,v=h(_,f,x,p);for(let y=0;y!==x;++y)v[y]=t[y];d.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,b=f.matrixWorldInverse;r.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,v=p;x!==g;++x,v+=4)o.copy(u[x]).applyMatrix4(b,r),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function vg(a){let e=new WeakMap;function t(o,r){return r===ma?o.mapping=_s:r===ga&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===ma||r===ga)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ud(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ya extends Wh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,mc=[.125,.215,.35,.446,.526,.582],vi=20,qo=new Ya,gc=new Ve;let Xo=null;const gi=(1+Math.sqrt(5))/2,es=1/gi,_c=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gi,es),new L(0,gi,-es),new L(es,0,gi),new L(-es,0,gi),new L(gi,es,0),new L(-gi,es,0)];class vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo),e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:$s,format:mn,encoding:Pi,depthBuffer:!1},i=xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(s)),this._blurMaterial=yg(s,e,t)}return i}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,i){const r=new fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gc),h.toneMapping=zn,h.autoClear=!1;const p=new Ws({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),_=new pt(new Ls,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(gc),g=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(r.up.set(0,l[d],0),r.lookAt(c[d],0,0)):b===1?(r.up.set(0,0,l[d]),r.lookAt(0,c[d],0)):(r.up.set(0,l[d],0),r.lookAt(0,0,c[d]));const x=this._cubeSize;Ir(i,b*x,d>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,r),h.render(e,r)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_s||e.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;Ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_c[(i-1)%_c.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const d=[];let b=0;for(let E=0;E<vi;++E){const C=E/g,S=Math.exp(-C*C/2);d.push(S),E===0?b+=S:E<m&&(b+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const v=this._sizeLods[i],y=3*v*(i>x-os?i-x+os:0),M=4*(this._cubeSize-v);Ir(t,y,M,3*v,2*v),l.setRenderTarget(t),l.render(u,qo)}}function xg(a){const e=[],t=[],n=[];let i=a;const s=a-os+1+mc.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);t.push(r);let l=1/r;o>a-os?l=mc[o-a+os-1]:o===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,d=1,b=new Float32Array(g*_*p),x=new Float32Array(m*_*p),v=new Float32Array(d*_*p);for(let M=0;M<p;M++){const E=M%3*2/3-1,C=M>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];b.set(S,g*_*M),x.set(f,m*_*M);const T=[M,M,M,M,M,M];v.set(T,d*_*M)}const y=new Ke;y.setAttribute("position",new Et(b,g)),y.setAttribute("uv",new Et(x,m)),y.setAttribute("faceIndex",new Et(v,d)),e.push(y),i>os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xc(a,e,t){const n=new Li(a,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function yg(a,e,t){const n=new Float32Array(vi),i=new L(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function yc(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Sc(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}function Sg(a){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===ma||l===ga,h=l===_s||l===vs;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=e.get(r);return t===null&&(t=new vc(a)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),e.set(r,u),u.texture}else{if(e.has(r))return e.get(r).texture;{const u=r.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new vc(a));const f=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bg(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mg(a,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],34962);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)e.update(g[m],34962)}}function c(u){const f=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let x=0,v=b.length;x<v;x+=3){const y=b[x+0],M=b[x+1],E=b[x+2];f.push(y,M,M,E,E,y)}}else{const b=_.array;g=_.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const y=x+0,M=x+1,E=x+2;f.push(y,M,M,E,E,y)}}const m=new(Oh(f)?Vh:kh)(f,1);m.version=g;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function wg(a,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let r,l;function c(f){r=f.type,l=f.bytesPerElement}function h(f,p){a.drawElements(s,p,r,f*l),t.update(p,s,1)}function u(f,p,_){if(_===0)return;let g,m;if(i)g=a,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,r,f*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Tg(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Eg(a,e){return a[0]-e[0]}function Ag(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Cg(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new st,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(h);if(m===void 0||m.count!==g){let N=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),y===!0&&(S=3);let T=h.attributes.position.count*S,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const k=new Float32Array(T*z*4*g),R=new Fh(k,T,z,g);R.type=yi,R.needsUpdate=!0;const U=S*4;for(let X=0;X<g;X++){const Z=M[X],W=E[X],ne=C[X],Q=T*z*4*X;for(let xe=0;xe<Z.count;xe++){const se=xe*U;x===!0&&(o.fromBufferAttribute(Z,xe),k[Q+se+0]=o.x,k[Q+se+1]=o.y,k[Q+se+2]=o.z,k[Q+se+3]=0),v===!0&&(o.fromBufferAttribute(W,xe),k[Q+se+4]=o.x,k[Q+se+5]=o.y,k[Q+se+6]=o.z,k[Q+se+7]=0),y===!0&&(o.fromBufferAttribute(ne,xe),k[Q+se+8]=o.x,k[Q+se+9]=o.y,k[Q+se+10]=o.z,k[Q+se+11]=ne.itemSize===4?o.w:1)}}m={count:g,texture:R,size:new ce(T,z)},s.set(h,m),h.addEventListener("dispose",N)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const b=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(a,"morphTargetBaseInfluence",b),u.getUniforms().setValue(a,"morphTargetInfluences",f),u.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<_;v++){const y=g[v];y[0]=v,y[1]=f[v]}g.sort(Ag);for(let v=0;v<8;v++)v<_&&g[v][1]?(r[v][0]=g[v][0],r[v][1]=g[v][1]):(r[v][0]=Number.MAX_SAFE_INTEGER,r[v][1]=0);r.sort(Eg);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const y=r[v],M=y[0],E=y[1];M!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+v)!==m[M]&&h.setAttribute("morphTarget"+v,m[M]),d&&h.getAttribute("morphNormal"+v)!==d[M]&&h.setAttribute("morphNormal"+v,d[M]),i[v]=E,b+=E):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(a,"morphTargetBaseInfluence",x),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Pg(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Xh=new qt,Yh=new Fh,Zh=new xd,Jh=new jh,bc=[],Mc=[],wc=new Float32Array(16),Tc=new Float32Array(9),Ec=new Float32Array(4);function Ds(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=bc[i];if(s===void 0&&(s=new Float32Array(i),bc[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,a[o].toArray(s,r)}return s}function mt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function gt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ho(a,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Lg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Dg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2fv(this.addr,e),gt(t,e)}}function Rg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;a.uniform3fv(this.addr,e),gt(t,e)}}function Ig(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4fv(this.addr,e),gt(t,e)}}function Ug(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Ec.set(n),a.uniformMatrix2fv(this.addr,!1,Ec),gt(t,n)}}function Og(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Tc.set(n),a.uniformMatrix3fv(this.addr,!1,Tc),gt(t,n)}}function zg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;wc.set(n),a.uniformMatrix4fv(this.addr,!1,wc),gt(t,n)}}function Ng(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Fg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2iv(this.addr,e),gt(t,e)}}function Bg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;a.uniform3iv(this.addr,e),gt(t,e)}}function kg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4iv(this.addr,e),gt(t,e)}}function Vg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Gg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2uiv(this.addr,e),gt(t,e)}}function Hg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;a.uniform3uiv(this.addr,e),gt(t,e)}}function Wg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4uiv(this.addr,e),gt(t,e)}}function jg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Xh,i)}function qg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zh,i)}function Xg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jh,i)}function Yg(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yh,i)}function Zg(a){switch(a){case 5126:return Lg;case 35664:return Dg;case 35665:return Rg;case 35666:return Ig;case 35674:return Ug;case 35675:return Og;case 35676:return zg;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return Vg;case 36294:return Gg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Jg(a,e){a.uniform1fv(this.addr,e)}function Kg(a,e){const t=Ds(e,this.size,2);a.uniform2fv(this.addr,t)}function $g(a,e){const t=Ds(e,this.size,3);a.uniform3fv(this.addr,t)}function Qg(a,e){const t=Ds(e,this.size,4);a.uniform4fv(this.addr,t)}function e_(a,e){const t=Ds(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function t_(a,e){const t=Ds(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function n_(a,e){const t=Ds(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function i_(a,e){a.uniform1iv(this.addr,e)}function s_(a,e){a.uniform2iv(this.addr,e)}function r_(a,e){a.uniform3iv(this.addr,e)}function o_(a,e){a.uniform4iv(this.addr,e)}function a_(a,e){a.uniform1uiv(this.addr,e)}function l_(a,e){a.uniform2uiv(this.addr,e)}function c_(a,e){a.uniform3uiv(this.addr,e)}function h_(a,e){a.uniform4uiv(this.addr,e)}function u_(a,e,t){const n=this.cache,i=e.length,s=ho(t,i);mt(n,s)||(a.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Xh,s[o])}function f_(a,e,t){const n=this.cache,i=e.length,s=ho(t,i);mt(n,s)||(a.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zh,s[o])}function d_(a,e,t){const n=this.cache,i=e.length,s=ho(t,i);mt(n,s)||(a.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jh,s[o])}function p_(a,e,t){const n=this.cache,i=e.length,s=ho(t,i);mt(n,s)||(a.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yh,s[o])}function m_(a){switch(a){case 5126:return Jg;case 35664:return Kg;case 35665:return $g;case 35666:return Qg;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Zg(t.type)}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=m_(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Ac(a,e){a.seq.push(e),a.map[e.id]=e}function x_(a,e,t){const n=a.name,i=n.length;for(Yo.lastIndex=0;;){const s=Yo.exec(n),o=Yo.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===i){Ac(t,c===void 0?new g_(r,a,e):new __(r,a,e));break}else{let u=t.map[r];u===void 0&&(u=new v_(r),Ac(t,u)),t=u}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);x_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const r=t[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Cc(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let y_=0;function S_(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function b_(a){switch(a){case Pi:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Pc(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+S_(a.getShaderSource(e),o)}else return i}function M_(a,e){const t=b_(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function w_(a,e){let t;switch(e){case Bf:t="Linear";break;case kf:t="Reinhard";break;case Vf:t="OptimizedCineon";break;case Gf:t="ACESFilmic";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function T_(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function E_(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:a.getAttribLocation(e,o),locationSize:r}}return t}function Vs(a){return a!==""}function Lc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(a){return a.replace(C_,P_)}function P_(a,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sa(t)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(a){return a.replace(L_,D_)}function D_(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ic(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R_(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ks&&(e="SHADOWMAP_TYPE_VSM"),e}function I_(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U_(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function O_(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Ff:e="ENVMAP_BLENDING_ADD";break}return e}function z_(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function N_(a,e,t,n){const i=a.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=R_(t),c=I_(t),h=U_(t),u=O_(t),f=z_(t),p=t.isWebGL2?"":T_(t),_=E_(s),g=i.createProgram();let m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(Vs).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(Vs).join(`
`),d.length>0&&(d+=`
`)):(m=[Ic(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),d=[p,Ic(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==zn?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,M_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Sa(o),o=Lc(o,t),o=Dc(o,t),r=Sa(r),r=Lc(r,t),r=Dc(r,t),o=Rc(o),r=Rc(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=b+m+o,v=b+d+r,y=Cc(i,35633,x),M=Cc(i,35632,v);if(i.attachShader(g,y),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),a.debug.checkShaderErrors){const S=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(y).trim(),z=i.getShaderInfoLog(M).trim();let k=!0,R=!0;if(i.getProgramParameter(g,35714)===!1)if(k=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,y,M);else{const U=Pc(i,y,"vertex"),N=Pc(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+S+`
`+U+`
`+N)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||z==="")&&(R=!1);R&&(this.diagnostics={runnable:k,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:z,prefix:d}})}i.deleteShader(y),i.deleteShader(M);let E;this.getUniforms=function(){return E===void 0&&(E=new qr(i,g)),E};let C;return this.getAttributes=function(){return C===void 0&&(C=A_(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=M,this}let F_=0;class B_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k_(e),t.set(e,n)),n}}class k_{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}}function V_(a,e,t,n,i,s,o){const r=new qa,l=new B_,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===1?"uv2":"uv"}function m(S,T,z,k,R){const U=k.fog,N=R.geometry,X=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),W=!!Z&&Z.mapping===ao?Z.image.height:null,ne=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xe=Q!==void 0?Q.length:0;let se=0;N.morphAttributes.position!==void 0&&(se=1),N.morphAttributes.normal!==void 0&&(se=2),N.morphAttributes.color!==void 0&&(se=3);let H,J,le,pe;if(ne){const ge=dn[ne];H=ge.vertexShader,J=ge.fragmentShader}else H=S.vertexShader,J=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const B=a.getRenderTarget(),Pe=R.isInstancedMesh===!0,Ce=!!S.map,ae=!!S.matcap,ye=!!Z,te=!!S.aoMap,Y=!!S.lightMap,ee=!!S.bumpMap,_e=!!S.normalMap,he=!!S.displacementMap,Ee=!!S.emissiveMap,Ae=!!S.metalnessMap,Me=!!S.roughnessMap,Ie=S.clearcoat>0,He=S.iridescence>0,P=S.sheen>0,w=S.transmission>0,G=Ie&&!!S.clearcoatMap,ie=Ie&&!!S.clearcoatNormalMap,re=Ie&&!!S.clearcoatRoughnessMap,fe=He&&!!S.iridescenceMap,D=He&&!!S.iridescenceThicknessMap,$=P&&!!S.sheenColorMap,V=P&&!!S.sheenRoughnessMap,de=!!S.specularMap,ve=!!S.specularColorMap,be=!!S.specularIntensityMap,me=w&&!!S.transmissionMap,Se=w&&!!S.thicknessMap,De=!!S.gradientMap,ze=!!S.alphaMap,ot=S.alphaTest>0,I=!!S.extensions,q=!!N.attributes.uv2;return{isWebGL2:h,shaderID:ne,shaderName:S.type,vertexShader:H,fragmentShader:J,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Pe,instancingColor:Pe&&R.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?a.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Pi,map:Ce,matcap:ae,envMap:ye,envMapMode:ye&&Z.mapping,envMapCubeUVHeight:W,aoMap:te,lightMap:Y,bumpMap:ee,normalMap:_e,displacementMap:f&&he,emissiveMap:Ee,normalMapObjectSpace:_e&&S.normalMapType===ld,normalMapTangentSpace:_e&&S.normalMapType===Ih,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&S.map.encoding===Je,metalnessMap:Ae,roughnessMap:Me,clearcoat:Ie,clearcoatMap:G,clearcoatNormalMap:ie,clearcoatRoughnessMap:re,iridescence:He,iridescenceMap:fe,iridescenceThicknessMap:D,sheen:P,sheenColorMap:$,sheenRoughnessMap:V,specularMap:de,specularColorMap:ve,specularIntensityMap:be,transmission:w,transmissionMap:me,thicknessMap:Se,gradientMap:De,opaque:S.transparent===!1&&S.blending===hs,alphaMap:ze,alphaTest:ot,combine:S.combine,mapUv:Ce&&g(S.map.channel),aoMapUv:te&&g(S.aoMap.channel),lightMapUv:Y&&g(S.lightMap.channel),bumpMapUv:ee&&g(S.bumpMap.channel),normalMapUv:_e&&g(S.normalMap.channel),displacementMapUv:he&&g(S.displacementMap.channel),emissiveMapUv:Ee&&g(S.emissiveMap.channel),metalnessMapUv:Ae&&g(S.metalnessMap.channel),roughnessMapUv:Me&&g(S.roughnessMap.channel),clearcoatMapUv:G&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:D&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:$&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(S.sheenRoughnessMap.channel),specularMapUv:de&&g(S.specularMap.channel),specularColorMapUv:ve&&g(S.specularColorMap.channel),specularIntensityMapUv:be&&g(S.specularIntensityMap.channel),transmissionMapUv:me&&g(S.transmissionMap.channel),thicknessMapUv:Se&&g(S.thicknessMap.channel),alphaMapUv:ze&&g(S.alphaMap.channel),vertexTangents:_e&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs2:q,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(Ce||ze),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:S.toneMapped?a.toneMapping:zn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Ut,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:I&&S.extensions.derivatives===!0,extensionFragDepth:I&&S.extensions.fragDepth===!0,extensionDrawBuffers:I&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)T.push(z),T.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(b(T,S),x(T,S),T.push(a.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function b(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){r.disableAll(),T.isWebGL2&&r.enable(0),T.supportsVertexTextures&&r.enable(1),T.instancing&&r.enable(2),T.instancingColor&&r.enable(3),T.matcap&&r.enable(4),T.envMap&&r.enable(5),T.normalMapObjectSpace&&r.enable(6),T.normalMapTangentSpace&&r.enable(7),T.clearcoat&&r.enable(8),T.iridescence&&r.enable(9),T.alphaTest&&r.enable(10),T.vertexColors&&r.enable(11),T.vertexAlphas&&r.enable(12),T.vertexUvs2&&r.enable(13),T.vertexTangents&&r.enable(14),S.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.skinning&&r.enable(4),T.morphTargets&&r.enable(5),T.morphNormals&&r.enable(6),T.morphColors&&r.enable(7),T.premultipliedAlpha&&r.enable(8),T.shadowMapEnabled&&r.enable(9),T.useLegacyLights&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.decodeVideoTexture&&r.enable(17),T.opaque&&r.enable(18),T.pointsUvs&&r.enable(19),S.push(r.mask)}function v(S){const T=_[S.type];let z;if(T){const k=dn[T];z=Hh.clone(k.uniforms)}else z=S.uniforms;return z}function y(S,T){let z;for(let k=0,R=c.length;k<R;k++){const U=c[k];if(U.cacheKey===T){z=U,++z.usedTimes;break}}return z===void 0&&(z=new N_(a,T,S,s),c.push(z)),z}function M(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function E(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:C}}function G_(){let a=new WeakMap;function e(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function t(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function H_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Uc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Oc(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,p,_,g,m){let d=a[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},a[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),e++,d}function r(u,f,p,_,g,m){const d=o(u,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(u,f,p,_,g,m){const d=o(u,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||H_),n.length>1&&n.sort(f||Uc),i.length>1&&i.sort(f||Uc)}function h(){for(let u=e,f=a.length;u<f;u++){const p=a[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:h,sort:c}}function W_(){let a=new WeakMap;function e(n,i){const s=a.get(n);let o;return s===void 0?(o=new Oc,a.set(n,[o])):i>=s.length?(o=new Oc,s.push(o)):o=s[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function j_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ve};break;case"SpotLight":t={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return a[e.id]=t,t}}}function q_(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let X_=0;function Y_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Z_(a,e){const t=new j_,n=q_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,o=new it,r=new it;function l(h,u){let f=0,p=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,m=0,d=0,b=0,x=0,v=0,y=0,M=0,E=0,C=0;h.sort(Y_);const S=u===!0?Math.PI:1;for(let z=0,k=h.length;z<k;z++){const R=h[z],U=R.color,N=R.intensity,X=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=U.r*N*S,p+=U.g*N*S,_+=U.b*N*S;else if(R.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],N);else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const ne=R.shadow,Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=R.shadow.matrix,v++}i.directional[g]=W,g++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(U).multiplyScalar(N*S),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[d]=W;const ne=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,ne.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[d]=ne.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,i.spotShadow[d]=Q,i.spotShadowMap[d]=Z,M++}d++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(U).multiplyScalar(N),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[b]=W,b++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*S),W.distance=R.distance,W.decay=R.decay,R.castShadow){const ne=R.shadow,Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,Q.shadowCameraNear=ne.camera.near,Q.shadowCameraFar=ne.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=R.shadow.matrix,y++}i.point[m]=W,m++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(N*S),W.groundColor.copy(R.groundColor).multiplyScalar(N*S),i.hemi[x]=W,x++}}b>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==b||T.hemiLength!==x||T.numDirectionalShadows!==v||T.numPointShadows!==y||T.numSpotShadows!==M||T.numSpotMaps!==E)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,T.directionalLength=g,T.pointLength=m,T.spotLength=d,T.rectAreaLength=b,T.hemiLength=x,T.numDirectionalShadows=v,T.numPointShadows=y,T.numSpotShadows=M,T.numSpotMaps=E,i.version=X_++)}function c(h,u){let f=0,p=0,_=0,g=0,m=0;const d=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const v=h[b];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(v.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),_++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),r.identity(),o.copy(v.matrixWorld),o.premultiply(d),r.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function zc(a,e){const t=new Z_(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function r(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function J_(a,e){let t=new WeakMap;function n(s,o=0){const r=t.get(s);let l;return r===void 0?(l=new zc(a,e),t.set(s,[l])):o>=r.length?(l=new zc(a,e),r.push(l)):l=r[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class K_ extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $_ extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function t0(a,e,t){let n=new Xa;const i=new ce,s=new ce,o=new st,r=new K_({depthPacking:ad}),l=new $_,c={},h=t.maxTextureSize,u={[ni]:Ut,[Ut]:ni,[tn]:tn},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Q_,fragmentShader:e0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ke;_.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah,this.render=function(v,y,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const E=a.getRenderTarget(),C=a.getActiveCubeFace(),S=a.getActiveMipmapLevel(),T=a.state;T.setBlending(Qn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let z=0,k=v.length;z<k;z++){const R=v[z],U=R.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const N=U.getFrameExtents();if(i.multiply(N),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,U.mapSize.y=s.y)),U.map===null){const Z=this.type!==ks?{minFilter:Rt,magFilter:Rt}:{};U.map=new Li(i.x,i.y,Z),U.map.texture.name=R.name+".shadowMap",U.camera.updateProjectionMatrix()}a.setRenderTarget(U.map),a.clear();const X=U.getViewportCount();for(let Z=0;Z<X;Z++){const W=U.getViewport(Z);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),T.viewport(o),U.updateMatrices(R,Z),n=U.getFrustum(),x(y,M,U.camera,R,this.type)}U.isPointLightShadow!==!0&&this.type===ks&&d(U,M),U.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(E,C,S)};function d(v,y){const M=e.update(g);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Li(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(y,null,M,f,g,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(y,null,M,p,g,null)}function b(v,y,M,E){let C=null;const S=M.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(S!==void 0)C=S;else if(C=M.isPointLight===!0?l:r,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const T=C.uuid,z=y.uuid;let k=c[T];k===void 0&&(k={},c[T]=k);let R=k[z];R===void 0&&(R=C.clone(),k[z]=R),C=R}if(C.visible=y.visible,C.wireframe=y.wireframe,E===ks?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:u[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const T=a.properties.get(C);T.light=M}return C}function x(v,y,M,E,C){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===ks)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,v.matrixWorld);const z=e.update(v),k=v.material;if(Array.isArray(k)){const R=z.groups;for(let U=0,N=R.length;U<N;U++){const X=R[U],Z=k[X.materialIndex];if(Z&&Z.visible){const W=b(v,Z,E,C);a.renderBufferDirect(M,null,z,W,v,X)}}}else if(k.visible){const R=b(v,k,E,C);a.renderBufferDirect(M,null,z,R,v,null)}}const T=v.children;for(let z=0,k=T.length;z<k;z++)x(T[z],y,M,E,C)}}function n0(a,e,t){const n=t.isWebGL2;function i(){let I=!1;const q=new st;let oe=null;const ge=new st(0,0,0,0);return{setMask:function(we){oe!==we&&!I&&(a.colorMask(we,we,we,we),oe=we)},setLocked:function(we){I=we},setClear:function(we,Ze,Qe,bt,Hn){Hn===!0&&(we*=bt,Ze*=bt,Qe*=bt),q.set(we,Ze,Qe,bt),ge.equals(q)===!1&&(a.clearColor(we,Ze,Qe,bt),ge.copy(q))},reset:function(){I=!1,oe=null,ge.set(-1,0,0,0)}}}function s(){let I=!1,q=null,oe=null,ge=null;return{setTest:function(we){we?B(2929):Pe(2929)},setMask:function(we){q!==we&&!I&&(a.depthMask(we),q=we)},setFunc:function(we){if(oe!==we){switch(we){case Df:a.depthFunc(512);break;case Lh:a.depthFunc(519);break;case Rf:a.depthFunc(513);break;case pa:a.depthFunc(515);break;case If:a.depthFunc(514);break;case Uf:a.depthFunc(518);break;case Of:a.depthFunc(516);break;case zf:a.depthFunc(517);break;default:a.depthFunc(515)}oe=we}},setLocked:function(we){I=we},setClear:function(we){ge!==we&&(a.clearDepth(we),ge=we)},reset:function(){I=!1,q=null,oe=null,ge=null}}}function o(){let I=!1,q=null,oe=null,ge=null,we=null,Ze=null,Qe=null,bt=null,Hn=null;return{setTest:function(at){I||(at?B(2960):Pe(2960))},setMask:function(at){q!==at&&!I&&(a.stencilMask(at),q=at)},setFunc:function(at,Zt,vn){(oe!==at||ge!==Zt||we!==vn)&&(a.stencilFunc(at,Zt,vn),oe=at,ge=Zt,we=vn)},setOp:function(at,Zt,vn){(Ze!==at||Qe!==Zt||bt!==vn)&&(a.stencilOp(at,Zt,vn),Ze=at,Qe=Zt,bt=vn)},setLocked:function(at){I=at},setClear:function(at){Hn!==at&&(a.clearStencil(at),Hn=at)},reset:function(){I=!1,q=null,oe=null,ge=null,we=null,Ze=null,Qe=null,bt=null,Hn=null}}}const r=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},p={},_=new WeakMap,g=[],m=null,d=!1,b=null,x=null,v=null,y=null,M=null,E=null,C=null,S=!1,T=null,z=null,k=null,R=null,U=null;const N=a.getParameter(35661);let X=!1,Z=0;const W=a.getParameter(7938);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=Z>=2);let ne=null,Q={};const xe=a.getParameter(3088),se=a.getParameter(2978),H=new st().fromArray(xe),J=new st().fromArray(se);function le(I,q,oe){const ge=new Uint8Array(4),we=a.createTexture();a.bindTexture(I,we),a.texParameteri(I,10241,9728),a.texParameteri(I,10240,9728);for(let Ze=0;Ze<oe;Ze++)a.texImage2D(q+Ze,0,6408,1,1,0,6408,5121,ge);return we}const pe={};pe[3553]=le(3553,3553,1),pe[34067]=le(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc(pa),he(!1),Ee(bl),B(2884),ee(Qn);function B(I){f[I]!==!0&&(a.enable(I),f[I]=!0)}function Pe(I){f[I]!==!1&&(a.disable(I),f[I]=!1)}function Ce(I,q){return p[I]!==q?(a.bindFramebuffer(I,q),p[I]=q,n&&(I===36009&&(p[36160]=q),I===36160&&(p[36009]=q)),!0):!1}function ae(I,q){let oe=g,ge=!1;if(I)if(oe=_.get(q),oe===void 0&&(oe=[],_.set(q,oe)),I.isWebGLMultipleRenderTargets){const we=I.texture;if(oe.length!==we.length||oe[0]!==36064){for(let Ze=0,Qe=we.length;Ze<Qe;Ze++)oe[Ze]=36064+Ze;oe.length=we.length,ge=!0}}else oe[0]!==36064&&(oe[0]=36064,ge=!0);else oe[0]!==1029&&(oe[0]=1029,ge=!0);ge&&(t.isWebGL2?a.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function ye(I){return m!==I?(a.useProgram(I),m=I,!0):!1}const te={[rs]:32774,[yf]:32778,[Sf]:32779};if(n)te[El]=32775,te[Al]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(te[El]=I.MIN_EXT,te[Al]=I.MAX_EXT)}const Y={[bf]:0,[Mf]:1,[wf]:768,[Ch]:770,[Lf]:776,[Cf]:774,[Ef]:772,[Tf]:769,[Ph]:771,[Pf]:775,[Af]:773};function ee(I,q,oe,ge,we,Ze,Qe,bt){if(I===Qn){d===!0&&(Pe(3042),d=!1);return}if(d===!1&&(B(3042),d=!0),I!==xf){if(I!==b||bt!==S){if((x!==rs||M!==rs)&&(a.blendEquation(32774),x=rs,M=rs),bt)switch(I){case hs:a.blendFuncSeparate(1,771,1,771);break;case Ml:a.blendFunc(1,1);break;case wl:a.blendFuncSeparate(0,769,0,1);break;case Tl:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hs:a.blendFuncSeparate(770,771,1,771);break;case Ml:a.blendFunc(770,1);break;case wl:a.blendFuncSeparate(0,769,0,1);break;case Tl:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,y=null,E=null,C=null,b=I,S=bt}return}we=we||q,Ze=Ze||oe,Qe=Qe||ge,(q!==x||we!==M)&&(a.blendEquationSeparate(te[q],te[we]),x=q,M=we),(oe!==v||ge!==y||Ze!==E||Qe!==C)&&(a.blendFuncSeparate(Y[oe],Y[ge],Y[Ze],Y[Qe]),v=oe,y=ge,E=Ze,C=Qe),b=I,S=!1}function _e(I,q){I.side===tn?Pe(2884):B(2884);let oe=I.side===Ut;q&&(oe=!oe),he(oe),I.blending===hs&&I.transparent===!1?ee(Qn):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),r.setMask(I.colorWrite);const ge=I.stencilWrite;c.setTest(ge),ge&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?B(32926):Pe(32926)}function he(I){T!==I&&(I?a.frontFace(2304):a.frontFace(2305),T=I)}function Ee(I){I!==gf?(B(2884),I!==z&&(I===bl?a.cullFace(1029):I===_f?a.cullFace(1028):a.cullFace(1032))):Pe(2884),z=I}function Ae(I){I!==k&&(X&&a.lineWidth(I),k=I)}function Me(I,q,oe){I?(B(32823),(R!==q||U!==oe)&&(a.polygonOffset(q,oe),R=q,U=oe)):Pe(32823)}function Ie(I){I?B(3089):Pe(3089)}function He(I){I===void 0&&(I=33984+N-1),ne!==I&&(a.activeTexture(I),ne=I)}function P(I,q,oe){oe===void 0&&(ne===null?oe=33984+N-1:oe=ne);let ge=Q[oe];ge===void 0&&(ge={type:void 0,texture:void 0},Q[oe]=ge),(ge.type!==I||ge.texture!==q)&&(ne!==oe&&(a.activeTexture(oe),ne=oe),a.bindTexture(I,q||pe[I]),ge.type=I,ge.texture=q)}function w(){const I=Q[ne];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function G(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){H.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),H.copy(I))}function Se(I){J.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function De(I,q){let oe=u.get(q);oe===void 0&&(oe=new WeakMap,u.set(q,oe));let ge=oe.get(I);ge===void 0&&(ge=a.getUniformBlockIndex(q,I.name),oe.set(I,ge))}function ze(I,q){const ge=u.get(q).get(I);h.get(q)!==ge&&(a.uniformBlockBinding(q,ge,I.__bindingPointIndex),h.set(q,ge))}function ot(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},ne=null,Q={},p={},_=new WeakMap,g=[],m=null,d=!1,b=null,x=null,v=null,y=null,M=null,E=null,C=null,S=!1,T=null,z=null,k=null,R=null,U=null,H.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:B,disable:Pe,bindFramebuffer:Ce,drawBuffers:ae,useProgram:ye,setBlending:ee,setMaterial:_e,setFlipSided:he,setCullFace:Ee,setLineWidth:Ae,setPolygonOffset:Me,setScissorTest:Ie,activeTexture:He,bindTexture:P,unbindTexture:w,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:ve,texImage3D:be,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:V,texStorage3D:de,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:D,compressedTexSubImage3D:$,scissor:me,viewport:Se,reset:ot}}function i0(a,e,t,n,i,s,o){const r=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,w){return d?new OffscreenCanvas(P,w):$r("canvas")}function x(P,w,G,ie){let re=1;if((P.width>ie||P.height>ie)&&(re=ie/Math.max(P.width,P.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const fe=w?ud:Math.floor,D=fe(re*P.width),$=fe(re*P.height);g===void 0&&(g=b(D,$));const V=G?b(D,$):g;return V.width=D,V.height=$,V.getContext("2d").drawImage(P,0,0,D,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+D+"x"+$+")."),V}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return ec(P.width)&&ec(P.height)}function y(P){return r?!1:P.wrapS!==pn||P.wrapT!==pn||P.minFilter!==Rt&&P.minFilter!==en}function M(P,w){return P.generateMipmaps&&w&&P.minFilter!==Rt&&P.minFilter!==en}function E(P){a.generateMipmap(P)}function C(P,w,G,ie,re=!1){if(r===!1)return w;if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=w;return w===6403&&(G===5126&&(fe=33326),G===5131&&(fe=33325),G===5121&&(fe=33321)),w===33319&&(G===5126&&(fe=33328),G===5131&&(fe=33327),G===5121&&(fe=33323)),w===6408&&(G===5126&&(fe=34836),G===5131&&(fe=34842),G===5121&&(fe=ie===Je&&re===!1?35907:32856),G===32819&&(fe=32854),G===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function S(P,w,G){return M(P,G)===!0||P.isFramebufferTexture&&P.minFilter!==Rt&&P.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function T(P){return P===Rt||P===Cl||P===yo?9728:9729}function z(P){const w=P.target;w.removeEventListener("dispose",z),R(w),w.isVideoTexture&&_.delete(w)}function k(P){const w=P.target;w.removeEventListener("dispose",k),N(w)}function R(P){const w=n.get(P);if(w.__webglInit===void 0)return;const G=P.source,ie=m.get(G);if(ie){const re=ie[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(P),Object.keys(ie).length===0&&m.delete(G)}n.remove(P)}function U(P){const w=n.get(P);a.deleteTexture(w.__webglTexture);const G=P.source,ie=m.get(G);delete ie[w.__cacheKey],o.memory.textures--}function N(P){const w=P.texture,G=n.get(P),ie=n.get(w);if(ie.__webglTexture!==void 0&&(a.deleteTexture(ie.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)a.deleteFramebuffer(G.__webglFramebuffer[re]),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer[re]);else{if(a.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&a.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let re=0;re<G.__webglColorRenderbuffer.length;re++)G.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(G.__webglColorRenderbuffer[re]);G.__webglDepthRenderbuffer&&a.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let re=0,fe=w.length;re<fe;re++){const D=n.get(w[re]);D.__webglTexture&&(a.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove(w[re])}n.remove(w),n.remove(P)}let X=0;function Z(){X=0}function W(){const P=X;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),X+=1,P}function ne(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function Q(P,w){const G=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(G,P,w);return}}t.bindTexture(3553,G.__webglTexture,33984+w)}function xe(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Pe(G,P,w);return}t.bindTexture(35866,G.__webglTexture,33984+w)}function se(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Pe(G,P,w);return}t.bindTexture(32879,G.__webglTexture,33984+w)}function H(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Ce(G,P,w);return}t.bindTexture(34067,G.__webglTexture,33984+w)}const J={[_a]:10497,[pn]:33071,[va]:33648},le={[Rt]:9728,[Cl]:9984,[yo]:9986,[en]:9729,[Wf]:9985,[Ks]:9987};function pe(P,w,G){if(G?(a.texParameteri(P,10242,J[w.wrapS]),a.texParameteri(P,10243,J[w.wrapT]),(P===32879||P===35866)&&a.texParameteri(P,32882,J[w.wrapR]),a.texParameteri(P,10240,le[w.magFilter]),a.texParameteri(P,10241,le[w.minFilter])):(a.texParameteri(P,10242,33071),a.texParameteri(P,10243,33071),(P===32879||P===35866)&&a.texParameteri(P,32882,33071),(w.wrapS!==pn||w.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(P,10240,T(w.magFilter)),a.texParameteri(P,10241,T(w.minFilter)),w.minFilter!==Rt&&w.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Rt||w.minFilter!==yo&&w.minFilter!==Ks||w.type===yi&&e.has("OES_texture_float_linear")===!1||r===!1&&w.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function B(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",z));const ie=w.source;let re=m.get(ie);re===void 0&&(re={},m.set(ie,re));const fe=ne(w);if(fe!==P.__cacheKey){re[fe]===void 0&&(re[fe]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,G=!0),re[fe].usedTimes++;const D=re[P.__cacheKey];D!==void 0&&(re[P.__cacheKey].usedTimes--,D.usedTimes===0&&U(w)),P.__cacheKey=fe,P.__webglTexture=re[fe].texture}return G}function Pe(P,w,G){let ie=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=35866),w.isData3DTexture&&(ie=32879);const re=B(P,w),fe=w.source;t.bindTexture(ie,P.__webglTexture,33984+G);const D=n.get(fe);if(fe.version!==D.__version||re===!0){t.activeTexture(33984+G),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const $=y(w)&&v(w.image)===!1;let V=x(w.image,$,!1,h);V=He(w,V);const de=v(V)||r,ve=s.convert(w.format,w.encoding);let be=s.convert(w.type),me=C(w.internalFormat,ve,be,w.encoding,w.isVideoTexture);pe(ie,w,de);let Se;const De=w.mipmaps,ze=r&&w.isVideoTexture!==!0,ot=D.__version===void 0||re===!0,I=S(w,V,de);if(w.isDepthTexture)me=6402,r?w.type===yi?me=36012:w.type===xi?me=33190:w.type===us?me=35056:me=33189:w.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Mi&&me===6402&&w.type!==Rh&&w.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=xi,be=s.convert(w.type)),w.format===xs&&me===6402&&(me=34041,w.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=us,be=s.convert(w.type))),ot&&(ze?t.texStorage2D(3553,1,me,V.width,V.height):t.texImage2D(3553,0,me,V.width,V.height,0,ve,be,null));else if(w.isDataTexture)if(De.length>0&&de){ze&&ot&&t.texStorage2D(3553,I,me,De[0].width,De[0].height);for(let q=0,oe=De.length;q<oe;q++)Se=De[q],ze?t.texSubImage2D(3553,q,0,0,Se.width,Se.height,ve,be,Se.data):t.texImage2D(3553,q,me,Se.width,Se.height,0,ve,be,Se.data);w.generateMipmaps=!1}else ze?(ot&&t.texStorage2D(3553,I,me,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ve,be,V.data)):t.texImage2D(3553,0,me,V.width,V.height,0,ve,be,V.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&ot&&t.texStorage3D(35866,I,me,De[0].width,De[0].height,V.depth);for(let q=0,oe=De.length;q<oe;q++)Se=De[q],w.format!==mn?ve!==null?ze?t.compressedTexSubImage3D(35866,q,0,0,0,Se.width,Se.height,V.depth,ve,Se.data,0,0):t.compressedTexImage3D(35866,q,me,Se.width,Se.height,V.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,q,0,0,0,Se.width,Se.height,V.depth,ve,be,Se.data):t.texImage3D(35866,q,me,Se.width,Se.height,V.depth,0,ve,be,Se.data)}else{ze&&ot&&t.texStorage2D(3553,I,me,De[0].width,De[0].height);for(let q=0,oe=De.length;q<oe;q++)Se=De[q],w.format!==mn?ve!==null?ze?t.compressedTexSubImage2D(3553,q,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(3553,q,me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,q,0,0,Se.width,Se.height,ve,be,Se.data):t.texImage2D(3553,q,me,Se.width,Se.height,0,ve,be,Se.data)}else if(w.isDataArrayTexture)ze?(ot&&t.texStorage3D(35866,I,me,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ve,be,V.data)):t.texImage3D(35866,0,me,V.width,V.height,V.depth,0,ve,be,V.data);else if(w.isData3DTexture)ze?(ot&&t.texStorage3D(32879,I,me,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ve,be,V.data)):t.texImage3D(32879,0,me,V.width,V.height,V.depth,0,ve,be,V.data);else if(w.isFramebufferTexture){if(ot)if(ze)t.texStorage2D(3553,I,me,V.width,V.height);else{let q=V.width,oe=V.height;for(let ge=0;ge<I;ge++)t.texImage2D(3553,ge,me,q,oe,0,ve,be,null),q>>=1,oe>>=1}}else if(De.length>0&&de){ze&&ot&&t.texStorage2D(3553,I,me,De[0].width,De[0].height);for(let q=0,oe=De.length;q<oe;q++)Se=De[q],ze?t.texSubImage2D(3553,q,0,0,ve,be,Se):t.texImage2D(3553,q,me,ve,be,Se);w.generateMipmaps=!1}else ze?(ot&&t.texStorage2D(3553,I,me,V.width,V.height),t.texSubImage2D(3553,0,0,0,ve,be,V)):t.texImage2D(3553,0,me,ve,be,V);M(w,de)&&E(ie),D.__version=fe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ce(P,w,G){if(w.image.length!==6)return;const ie=B(P,w),re=w.source;t.bindTexture(34067,P.__webglTexture,33984+G);const fe=n.get(re);if(re.version!==fe.__version||ie===!0){t.activeTexture(33984+G),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const D=w.isCompressedTexture||w.image[0].isCompressedTexture,$=w.image[0]&&w.image[0].isDataTexture,V=[];for(let q=0;q<6;q++)!D&&!$?V[q]=x(w.image[q],!1,!0,c):V[q]=$?w.image[q].image:w.image[q],V[q]=He(w,V[q]);const de=V[0],ve=v(de)||r,be=s.convert(w.format,w.encoding),me=s.convert(w.type),Se=C(w.internalFormat,be,me,w.encoding),De=r&&w.isVideoTexture!==!0,ze=fe.__version===void 0||ie===!0;let ot=S(w,de,ve);pe(34067,w,ve);let I;if(D){De&&ze&&t.texStorage2D(34067,ot,Se,de.width,de.height);for(let q=0;q<6;q++){I=V[q].mipmaps;for(let oe=0;oe<I.length;oe++){const ge=I[oe];w.format!==mn?be!==null?De?t.compressedTexSubImage2D(34069+q,oe,0,0,ge.width,ge.height,be,ge.data):t.compressedTexImage2D(34069+q,oe,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+q,oe,0,0,ge.width,ge.height,be,me,ge.data):t.texImage2D(34069+q,oe,Se,ge.width,ge.height,0,be,me,ge.data)}}}else{I=w.mipmaps,De&&ze&&(I.length>0&&ot++,t.texStorage2D(34067,ot,Se,V[0].width,V[0].height));for(let q=0;q<6;q++)if($){De?t.texSubImage2D(34069+q,0,0,0,V[q].width,V[q].height,be,me,V[q].data):t.texImage2D(34069+q,0,Se,V[q].width,V[q].height,0,be,me,V[q].data);for(let oe=0;oe<I.length;oe++){const we=I[oe].image[q].image;De?t.texSubImage2D(34069+q,oe+1,0,0,we.width,we.height,be,me,we.data):t.texImage2D(34069+q,oe+1,Se,we.width,we.height,0,be,me,we.data)}}else{De?t.texSubImage2D(34069+q,0,0,0,be,me,V[q]):t.texImage2D(34069+q,0,Se,be,me,V[q]);for(let oe=0;oe<I.length;oe++){const ge=I[oe];De?t.texSubImage2D(34069+q,oe+1,0,0,be,me,ge.image[q]):t.texImage2D(34069+q,oe+1,Se,be,me,ge.image[q])}}}M(w,ve)&&E(34067),fe.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ae(P,w,G,ie,re){const fe=s.convert(G.format,G.encoding),D=s.convert(G.type),$=C(G.internalFormat,fe,D,G.encoding);n.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,$,w.width,w.height,w.depth,0,fe,D,null):t.texImage2D(re,0,$,w.width,w.height,0,fe,D,null)),t.bindFramebuffer(36160,P),Me(w)?f.framebufferTexture2DMultisampleEXT(36160,ie,re,n.get(G).__webglTexture,0,Ae(w)):(re===3553||re>=34069&&re<=34074)&&a.framebufferTexture2D(36160,ie,re,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ye(P,w,G){if(a.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let ie=33189;if(G||Me(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===yi?ie=36012:re.type===xi&&(ie=33190));const fe=Ae(w);Me(w)?f.renderbufferStorageMultisampleEXT(36161,fe,ie,w.width,w.height):a.renderbufferStorageMultisample(36161,fe,ie,w.width,w.height)}else a.renderbufferStorage(36161,ie,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const ie=Ae(w);G&&Me(w)===!1?a.renderbufferStorageMultisample(36161,ie,35056,w.width,w.height):Me(w)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,P)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ie.length;re++){const fe=ie[re],D=s.convert(fe.format,fe.encoding),$=s.convert(fe.type),V=C(fe.internalFormat,D,$,fe.encoding),de=Ae(w);G&&Me(w)===!1?a.renderbufferStorageMultisample(36161,de,V,w.width,w.height):Me(w)?f.renderbufferStorageMultisampleEXT(36161,de,V,w.width,w.height):a.renderbufferStorage(36161,V,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function te(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const ie=n.get(w.depthTexture).__webglTexture,re=Ae(w);if(w.depthTexture.format===Mi)Me(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,re):a.framebufferTexture2D(36160,36096,3553,ie,0);else if(w.depthTexture.format===xs)Me(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,re):a.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function Y(P){const w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");te(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=a.createRenderbuffer(),ye(w.__webglDepthbuffer[ie],P,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),ye(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function ee(P,w,G){const ie=n.get(P);w!==void 0&&ae(ie.__webglFramebuffer,P,P.texture,36064,3553),G!==void 0&&Y(P)}function _e(P){const w=P.texture,G=n.get(P),ie=n.get(w);P.addEventListener("dispose",k),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=w.version,o.memory.textures++);const re=P.isWebGLCubeRenderTarget===!0,fe=P.isWebGLMultipleRenderTargets===!0,D=v(P)||r;if(re){G.__webglFramebuffer=[];for(let $=0;$<6;$++)G.__webglFramebuffer[$]=a.createFramebuffer()}else{if(G.__webglFramebuffer=a.createFramebuffer(),fe)if(i.drawBuffers){const $=P.texture;for(let V=0,de=$.length;V<de;V++){const ve=n.get($[V]);ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&P.samples>0&&Me(P)===!1){const $=fe?w:[w];G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let V=0;V<$.length;V++){const de=$[V];G.__webglColorRenderbuffer[V]=a.createRenderbuffer(),a.bindRenderbuffer(36161,G.__webglColorRenderbuffer[V]);const ve=s.convert(de.format,de.encoding),be=s.convert(de.type),me=C(de.internalFormat,ve,be,de.encoding,P.isXRRenderTarget===!0),Se=Ae(P);a.renderbufferStorageMultisample(36161,Se,me,P.width,P.height),a.framebufferRenderbuffer(36160,36064+V,36161,G.__webglColorRenderbuffer[V])}a.bindRenderbuffer(36161,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),ye(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ie.__webglTexture),pe(34067,w,D);for(let $=0;$<6;$++)ae(G.__webglFramebuffer[$],P,w,36064,34069+$);M(w,D)&&E(34067),t.unbindTexture()}else if(fe){const $=P.texture;for(let V=0,de=$.length;V<de;V++){const ve=$[V],be=n.get(ve);t.bindTexture(3553,be.__webglTexture),pe(3553,ve,D),ae(G.__webglFramebuffer,P,ve,36064+V,3553),M(ve,D)&&E(3553)}t.unbindTexture()}else{let $=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(r?$=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,ie.__webglTexture),pe($,w,D),ae(G.__webglFramebuffer,P,w,36064,$),M(w,D)&&E($),t.unbindTexture()}P.depthBuffer&&Y(P)}function he(P){const w=v(P)||r,G=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,re=G.length;ie<re;ie++){const fe=G[ie];if(M(fe,w)){const D=P.isWebGLCubeRenderTarget?34067:3553,$=n.get(fe).__webglTexture;t.bindTexture(D,$),E(D),t.unbindTexture()}}}function Ee(P){if(r&&P.samples>0&&Me(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],G=P.width,ie=P.height;let re=16384;const fe=[],D=P.stencilBuffer?33306:36096,$=n.get(P),V=P.isWebGLMultipleRenderTargets===!0;if(V)for(let de=0;de<w.length;de++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),a.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let de=0;de<w.length;de++){fe.push(36064+de),P.depthBuffer&&fe.push(D);const ve=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(ve===!1&&(P.depthBuffer&&(re|=256),P.stencilBuffer&&(re|=1024)),V&&a.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[de]),ve===!0&&(a.invalidateFramebuffer(36008,[D]),a.invalidateFramebuffer(36009,[D])),V){const be=n.get(w[de]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,be,0)}a.blitFramebuffer(0,0,G,ie,0,0,G,ie,re,9728),p&&a.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let de=0;de<w.length;de++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+de,36161,$.__webglColorRenderbuffer[de]);const ve=n.get(w[de]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),a.framebufferTexture2D(36009,36064+de,3553,ve,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function Ae(P){return Math.min(u,P.samples)}function Me(P){const w=n.get(P);return r&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(P){const w=o.render.frame;_.get(P)!==w&&(_.set(P,w),P.update())}function He(P,w){const G=P.encoding,ie=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===xa||G!==Pi&&(G===Je?r===!1?e.has("EXT_sRGB")===!0&&ie===mn?(P.format=xa,P.minFilter=en,P.generateMipmaps=!1):w=zh.sRGBToLinear(w):(ie!==mn||re!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),w}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=xe,this.setTexture3D=se,this.setTextureCube=H,this.rebindTextures=ee,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Me}function s0(a,e,t){const n=t.isWebGL2;function i(s,o=null){let r;if(s===Ci)return 5121;if(s===Yf)return 32819;if(s===Zf)return 32820;if(s===jf)return 5120;if(s===qf)return 5122;if(s===Rh)return 5123;if(s===Xf)return 5124;if(s===xi)return 5125;if(s===yi)return 5126;if(s===$s)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Jf)return 6406;if(s===mn)return 6408;if(s===Kf)return 6409;if(s===$f)return 6410;if(s===Mi)return 6402;if(s===xs)return 34041;if(s===xa)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Qf)return 6403;if(s===ed)return 36244;if(s===td)return 33319;if(s===nd)return 33320;if(s===id)return 36249;if(s===So||s===bo||s===Mo||s===wo)if(o===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pl||s===Ll||s===Dl||s===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sd)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Il||s===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Il)return o===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Ul)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ol||s===zl||s===Nl||s===Fl||s===Bl||s===kl||s===Vl||s===Gl||s===Hl||s===Wl||s===jl||s===ql||s===Xl||s===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Ol)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ql)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===To)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===To)return o===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===rd||s===Zl||s===Jl||s===Kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(s===To)return r.COMPRESSED_RED_RGTC1_EXT;if(s===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===us?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class r0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Si extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o0={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class a0 extends qt{constructor(e,t,n,i,s,o,r,l,c,h){if(h=h!==void 0?h:Mi,h!==Mi&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=xi),n===void 0&&h===xs&&(n=us),super(null,i,s,o,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1}}class l0 extends Ui{constructor(e,t){super();const n=this;let i=null,s=1,o=null,r="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null;const g=t.getContextAttributes();let m=null,d=null;const b=[],x=[],v=new Set,y=new Map,M=new fn;M.layers.enable(1),M.viewport=new st;const E=new fn;E.layers.enable(2),E.viewport=new st;const C=[M,E],S=new r0;S.layers.enable(1),S.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=b[H];return J===void 0&&(J=new Zo,b[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=b[H];return J===void 0&&(J=new Zo,b[H]=J),J.getGripSpace()},this.getHand=function(H){let J=b[H];return J===void 0&&(J=new Zo,b[H]=J),J.getHandSpace()};function k(H){const J=x.indexOf(H.inputSource);if(J===-1)return;const le=b[J];le!==void 0&&le.dispatchEvent({type:H.type,data:H.inputSource})}function R(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",U);for(let H=0;H<b.length;H++){const J=x[H];J!==null&&(x[H]=null,b[H].disconnect(J))}T=null,z=null,e.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",R),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),d=new Li(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Ci,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let J=null,le=null,pe=null;g.depth&&(pe=g.stencil?35056:33190,J=g.stencil?xs:Mi,le=g.stencil?us:xi);const B={colorFormat:32856,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(B),i.updateRenderState({layers:[f]}),d=new Li(f.textureWidth,f.textureHeight,{format:mn,type:Ci,depthTexture:new a0(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Pe=e.properties.get(d);Pe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(r),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(H){for(let J=0;J<H.removed.length;J++){const le=H.removed[J],pe=x.indexOf(le);pe>=0&&(x[pe]=null,b[pe].disconnect(le))}for(let J=0;J<H.added.length;J++){const le=H.added[J];let pe=x.indexOf(le);if(pe===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=x.length){x.push(le),pe=Pe;break}else if(x[Pe]===null){x[Pe]=le,pe=Pe;break}if(pe===-1)break}const B=b[pe];B&&B.connect(le)}}const N=new L,X=new L;function Z(H,J,le){N.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const pe=N.distanceTo(X),B=J.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Ce=B[14]/(B[10]-1),ae=B[14]/(B[10]+1),ye=(B[9]+1)/B[5],te=(B[9]-1)/B[5],Y=(B[8]-1)/B[0],ee=(Pe[8]+1)/Pe[0],_e=Ce*Y,he=Ce*ee,Ee=pe/(-Y+ee),Ae=Ee*-Y;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ae),H.translateZ(Ee),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Me=Ce+Ee,Ie=ae+Ee,He=_e-Ae,P=he+(pe-Ae),w=ye*ae/Ie*Me,G=te*ae/Ie*Me;H.projectionMatrix.makePerspective(He,P,w,G,Me,Ie),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;S.near=E.near=M.near=H.near,S.far=E.far=M.far=H.far,(T!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,z=S.far);const J=H.parent,le=S.cameras;W(S,J);for(let pe=0;pe<le.length;pe++)W(le[pe],J);le.length===2?Z(S,M,E):S.projectionMatrix.copy(M.projectionMatrix),ne(H,S,J)};function ne(H,J,le){le===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const pe=H.children;for(let B=0,Pe=pe.length;B<Pe;B++)pe[B].updateMatrixWorld(!0);H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ya*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.getPlanes=function(){return v};let Q=null;function xe(H,J){if(h=J.getViewerPose(c||o),_=J,h!==null){const le=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let pe=!1;le.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let B=0;B<le.length;B++){const Pe=le[B];let Ce=null;if(p!==null)Ce=p.getViewport(Pe);else{const ye=u.getViewSubImage(f,Pe);Ce=ye.viewport,B===0&&(e.setRenderTargetTextures(d,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(d))}let ae=C[B];ae===void 0&&(ae=new fn,ae.layers.enable(B),ae.viewport=new st,C[B]=ae),ae.matrix.fromArray(Pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),B===0&&(S.matrix.copy(ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(ae)}}for(let le=0;le<b.length;le++){const pe=x[le],B=b[le];pe!==null&&B!==void 0&&B.update(pe,J,c||o)}if(Q&&Q(H,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let le=null;for(const pe of v)J.detectedPlanes.has(pe)||(le===null&&(le=[]),le.push(pe));if(le!==null)for(const pe of le)v.delete(pe),y.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of J.detectedPlanes)if(!v.has(pe))v.add(pe),y.set(pe,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const B=y.get(pe);pe.lastChangedTime>B&&(y.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}_=null}const se=new qh;se.setAnimationLoop(xe),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}}function c0(a,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gh(a)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,b,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&r(m,d)):d.isPointsMaterial?l(m,d,b,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ut&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ut&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function r(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function h0(a,e,t,n){let i={},s={},o=[];const r=t.isWebGL2?a.getParameter(35375):0;function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(_(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(b,y);const M=e.render.frame;s[b.id]!==M&&(f(b),s[b.id]=M)}function h(b){const x=u();b.__bindingPointIndex=x;const v=a.createBuffer(),y=b.__size,M=b.usage;return a.bindBuffer(35345,v),a.bufferData(35345,y,M),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,v),v}function u(){for(let b=0;b<r;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=i[b.id],v=b.uniforms,y=b.__cache;a.bindBuffer(35345,x);for(let M=0,E=v.length;M<E;M++){const C=v[M];if(p(C,M,y)===!0){const S=C.__offset,T=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let k=0;k<T.length;k++){const R=T[k],U=g(R);typeof R=="number"?(C.__data[0]=R,a.bufferSubData(35345,S+z,C.__data)):R.isMatrix3?(C.__data[0]=R.elements[0],C.__data[1]=R.elements[1],C.__data[2]=R.elements[2],C.__data[3]=R.elements[0],C.__data[4]=R.elements[3],C.__data[5]=R.elements[4],C.__data[6]=R.elements[5],C.__data[7]=R.elements[0],C.__data[8]=R.elements[6],C.__data[9]=R.elements[7],C.__data[10]=R.elements[8],C.__data[11]=R.elements[0]):(R.toArray(C.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,S,C.__data)}}a.bindBuffer(35345,null)}function p(b,x,v){const y=b.value;if(v[x]===void 0){if(typeof y=="number")v[x]=y;else{const M=Array.isArray(y)?y:[y],E=[];for(let C=0;C<M.length;C++)E.push(M[C].clone());v[x]=E}return!0}else if(typeof y=="number"){if(v[x]!==y)return v[x]=y,!0}else{const M=Array.isArray(v[x])?v[x]:[v[x]],E=Array.isArray(y)?y:[y];for(let C=0;C<M.length;C++){const S=M[C];if(S.equals(E[C])===!1)return S.copy(E[C]),!0}}return!1}function _(b){const x=b.uniforms;let v=0;const y=16;let M=0;for(let E=0,C=x.length;E<C;E++){const S=x[E],T={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let k=0,R=z.length;k<R;k++){const U=z[k],N=g(U);T.boundary+=N.boundary,T.storage+=N.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,E>0){M=v%y;const k=y-M;M!==0&&k-T.boundary<0&&(v+=y-M,S.__offset=v)}v+=T.storage}return M=v%y,M>0&&(v+=y-M),b.__size=v,b.__cache={},this}function g(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const b in i)a.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}function u0(){const a=$r("canvas");return a.style.display="block",a}class Kh{constructor(e={}){const{canvas:t=u0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Pi,this.useLegacyLights=!0,this.toneMapping=zn,this.toneMappingExposure=1;const d=this;let b=!1,x=0,v=0,y=null,M=-1,E=null;const C=new st,S=new st;let T=null,z=t.width,k=t.height,R=1,U=null,N=null;const X=new st(0,0,z,k),Z=new st(0,0,z,k);let W=!1;const ne=new Xa;let Q=!1,xe=!1,se=null;const H=new it,J=new L,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return y===null?R:1}let B=n;function Pe(A,F){for(let j=0;j<A.length;j++){const O=A[j],K=t.getContext(O,F);if(K!==null)return K}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ze,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),B=Pe(F,A),B===null)throw Pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ce,ae,ye,te,Y,ee,_e,he,Ee,Ae,Me,Ie,He,P,w,G,ie,re,fe,D,$,V,de,ve;function be(){Ce=new bg(B),ae=new gg(B,Ce,e),Ce.init(ae),V=new s0(B,Ce,ae),ye=new n0(B,Ce,ae),te=new Tg,Y=new G_,ee=new i0(B,Ce,ye,Y,ae,V,te),_e=new vg(d),he=new Sg(d),Ee=new Nd(B,ae),de=new pg(B,Ce,Ee,ae),Ae=new Mg(B,Ee,te,de),Me=new Pg(B,Ae,Ee,te),fe=new Cg(B,ae,ee),G=new _g(Y),Ie=new V_(d,_e,he,Ce,ae,de,G),He=new c0(d,Y),P=new W_,w=new J_(Ce,ae),re=new dg(d,_e,he,ye,Me,f,l),ie=new t0(d,Me,ae),ve=new h0(B,te,ae,ye),D=new mg(B,Ce,te,ae),$=new wg(B,Ce,te,ae),te.programs=Ie.programs,d.capabilities=ae,d.extensions=Ce,d.properties=Y,d.renderLists=P,d.shadowMap=ie,d.state=ye,d.info=te}be();const me=new l0(d,B);this.xr=me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(A){A!==void 0&&(R=A,this.setSize(z,k,!1))},this.getSize=function(A){return A.set(z,k)},this.setSize=function(A,F,j=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,k=F,t.width=Math.floor(A*R),t.height=Math.floor(F*R),j===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(z*R,k*R).floor()},this.setDrawingBufferSize=function(A,F,j){z=A,k=F,R=j,t.width=Math.floor(A*j),t.height=Math.floor(F*j),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,F,j,O){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,F,j,O),ye.viewport(C.copy(X).multiplyScalar(R).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,F,j,O){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,F,j,O),ye.scissor(S.copy(Z).multiplyScalar(R).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(A){ye.setScissorTest(W=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,F=!0,j=!0){let O=0;A&&(O|=16384),F&&(O|=256),j&&(O|=1024),B.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),P.dispose(),w.dispose(),Y.dispose(),_e.dispose(),he.dispose(),Me.dispose(),de.dispose(),ve.dispose(),Ie.dispose(),me.dispose(),me.removeEventListener("sessionstart",we),me.removeEventListener("sessionend",Ze),se&&(se.dispose(),se=null),Qe.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=te.autoReset,F=ie.enabled,j=ie.autoUpdate,O=ie.needsUpdate,K=ie.type;be(),te.autoReset=A,ie.enabled=F,ie.autoUpdate=j,ie.needsUpdate=O,ie.type=K}function ze(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const F=A.target;F.removeEventListener("dispose",ot),I(F)}function I(A){q(A),Y.remove(A)}function q(A){const F=Y.get(A).programs;F!==void 0&&(F.forEach(function(j){Ie.releaseProgram(j)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,j,O,K,Te){F===null&&(F=le);const Le=K.isMesh&&K.matrixWorld.determinant()<0,Re=hf(A,F,j,O,K);ye.setMaterial(O,Le);let Ue=j.index,Ne=1;O.wireframe===!0&&(Ue=Ae.getWireframeAttribute(j),Ne=2);const Fe=j.drawRange,Be=j.attributes.position;let je=Fe.start*Ne,Pt=(Fe.start+Fe.count)*Ne;Te!==null&&(je=Math.max(je,Te.start*Ne),Pt=Math.min(Pt,(Te.start+Te.count)*Ne)),Ue!==null?(je=Math.max(je,0),Pt=Math.min(Pt,Ue.count)):Be!=null&&(je=Math.max(je,0),Pt=Math.min(Pt,Be.count));const an=Pt-je;if(an<0||an===1/0)return;de.setup(K,O,Re,j,Ue);let ai,ct=D;if(Ue!==null&&(ai=Ee.get(Ue),ct=$,ct.setIndex(ai)),K.isMesh)O.wireframe===!0?(ye.setLineWidth(O.wireframeLinewidth*pe()),ct.setMode(1)):ct.setMode(4);else if(K.isLine){let We=O.linewidth;We===void 0&&(We=1),ye.setLineWidth(We*pe()),K.isLineSegments?ct.setMode(1):K.isLineLoop?ct.setMode(2):ct.setMode(3)}else K.isPoints?ct.setMode(0):K.isSprite&&ct.setMode(4);if(K.isInstancedMesh)ct.renderInstances(je,an,K.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,go=Math.min(j.instanceCount,We);ct.renderInstances(je,an,go)}else ct.render(je,an)},this.compile=function(A,F){function j(O,K,Te){O.transparent===!0&&O.side===tn&&O.forceSinglePass===!1?(O.side=Ut,O.needsUpdate=!0,fr(O,K,Te),O.side=ni,O.needsUpdate=!0,fr(O,K,Te),O.side=tn):fr(O,K,Te)}_=w.get(A),_.init(),m.push(_),A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights(d.useLegacyLights),A.traverse(function(O){const K=O.material;if(K)if(Array.isArray(K))for(let Te=0;Te<K.length;Te++){const Le=K[Te];j(Le,A,O)}else j(K,A,O)}),m.pop(),_=null};let oe=null;function ge(A){oe&&oe(A)}function we(){Qe.stop()}function Ze(){Qe.start()}const Qe=new qh;Qe.setAnimationLoop(ge),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(A){oe=A,me.setAnimationLoop(A),A===null?Qe.stop():Qe.start()},me.addEventListener("sessionstart",we),me.addEventListener("sessionend",Ze),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,F,y),_=w.get(A,m.length),_.init(),m.push(_),H.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(H),xe=this.localClippingEnabled,Q=G.init(this.clippingPlanes,xe),p=P.get(A,g.length),p.init(),g.push(p),bt(A,F,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(U,N),Q===!0&&G.beginShadows();const j=_.state.shadowsArray;if(ie.render(j,A,F),Q===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,A),_.setupLights(d.useLegacyLights),F.isArrayCamera){const O=F.cameras;for(let K=0,Te=O.length;K<Te;K++){const Le=O[K];Hn(p,A,Le,Le.viewport)}}else Hn(p,A,F);y!==null&&(ee.updateMultisampleRenderTarget(y),ee.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(d,A,F),de.resetDefaultState(),M=-1,E=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function bt(A,F,j,O){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){O&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const Le=Me.update(A),Re=A.material;Re.visible&&p.push(A,Le,Re,j,J.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==te.render.frame&&(A.skeleton.update(),A.skeleton.frame=te.render.frame),!A.frustumCulled||ne.intersectsObject(A))){O&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const Le=Me.update(A),Re=A.material;if(Array.isArray(Re)){const Ue=Le.groups;for(let Ne=0,Fe=Ue.length;Ne<Fe;Ne++){const Be=Ue[Ne],je=Re[Be.materialIndex];je&&je.visible&&p.push(A,Le,je,j,J.z,Be)}}else Re.visible&&p.push(A,Le,Re,j,J.z,null)}}const Te=A.children;for(let Le=0,Re=Te.length;Le<Re;Le++)bt(Te[Le],F,j,O)}function Hn(A,F,j,O){const K=A.opaque,Te=A.transmissive,Le=A.transparent;_.setupLightsView(j),Q===!0&&G.setGlobalState(d.clippingPlanes,j),Te.length>0&&at(K,Te,F,j),O&&ye.viewport(C.copy(O)),K.length>0&&Zt(K,F,j),Te.length>0&&Zt(Te,F,j),Le.length>0&&Zt(Le,F,j),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function at(A,F,j,O){if(se===null){const Re=ae.isWebGL2;se=new Li(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?$s:Ci,minFilter:Ks,samples:Re&&r===!0?4:0})}const K=d.getRenderTarget();d.setRenderTarget(se),d.clear();const Te=d.toneMapping;d.toneMapping=zn,Zt(A,j,O),ee.updateMultisampleRenderTarget(se),ee.updateRenderTargetMipmap(se);let Le=!1;for(let Re=0,Ue=F.length;Re<Ue;Re++){const Ne=F[Re],Fe=Ne.object,Be=Ne.geometry,je=Ne.material,Pt=Ne.group;if(je.side===tn&&Fe.layers.test(O.layers)){const an=je.side;je.side=Ut,je.needsUpdate=!0,vn(Fe,j,O,Be,je,Pt),je.side=an,je.needsUpdate=!0,Le=!0}}Le===!0&&(ee.updateMultisampleRenderTarget(se),ee.updateRenderTargetMipmap(se)),d.setRenderTarget(K),d.toneMapping=Te}function Zt(A,F,j){const O=F.isScene===!0?F.overrideMaterial:null;for(let K=0,Te=A.length;K<Te;K++){const Le=A[K],Re=Le.object,Ue=Le.geometry,Ne=O===null?Le.material:O,Fe=Le.group;Re.layers.test(j.layers)&&vn(Re,F,j,Ue,Ne,Fe)}}function vn(A,F,j,O,K,Te){A.onBeforeRender(d,F,j,O,K,Te),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(d,F,j,O,A,Te),K.transparent===!0&&K.side===tn&&K.forceSinglePass===!1?(K.side=Ut,K.needsUpdate=!0,d.renderBufferDirect(j,F,O,K,A,Te),K.side=ni,K.needsUpdate=!0,d.renderBufferDirect(j,F,O,K,A,Te),K.side=tn):d.renderBufferDirect(j,F,O,K,A,Te),A.onAfterRender(d,F,j,O,K,Te)}function fr(A,F,j){F.isScene!==!0&&(F=le);const O=Y.get(A),K=_.state.lights,Te=_.state.shadowsArray,Le=K.state.version,Re=Ie.getParameters(A,K.state,Te,F,j),Ue=Ie.getProgramCacheKey(Re);let Ne=O.programs;O.environment=A.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(A.isMeshStandardMaterial?he:_e).get(A.envMap||O.environment),Ne===void 0&&(A.addEventListener("dispose",ot),Ne=new Map,O.programs=Ne);let Fe=Ne.get(Ue);if(Fe!==void 0){if(O.currentProgram===Fe&&O.lightsStateVersion===Le)return xl(A,Re),Fe}else Re.uniforms=Ie.getUniforms(A),A.onBuild(j,Re,d),A.onBeforeCompile(Re,d),Fe=Ie.acquireProgram(Re,Ue),Ne.set(Ue,Fe),O.uniforms=Re.uniforms;const Be=O.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=G.uniform),xl(A,Re),O.needsLights=ff(A),O.lightsStateVersion=Le,O.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.directionalShadowMap.value=K.state.directionalShadowMap,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotShadowMap.value=K.state.spotShadowMap,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMap.value=K.state.pointShadowMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix);const je=Fe.getUniforms(),Pt=qr.seqWithValue(je.seq,Be);return O.currentProgram=Fe,O.uniformsList=Pt,Fe}function xl(A,F){const j=Y.get(A);j.outputEncoding=F.outputEncoding,j.instancing=F.instancing,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function hf(A,F,j,O,K){F.isScene!==!0&&(F=le),ee.resetTextureUnits();const Te=F.fog,Le=O.isMeshStandardMaterial?F.environment:null,Re=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Pi,Ue=(O.isMeshStandardMaterial?he:_e).get(O.envMap||Le),Ne=O.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!O.normalMap&&!!j.attributes.tangent,Be=!!j.morphAttributes.position,je=!!j.morphAttributes.normal,Pt=!!j.morphAttributes.color,an=O.toneMapped?d.toneMapping:zn,ai=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ct=ai!==void 0?ai.length:0,We=Y.get(O),go=_.state.lights;if(Q===!0&&(xe===!0||A!==E)){const Bt=A===E&&O.id===M;G.setState(O,A,Bt)}let _t=!1;O.version===We.__version?(We.needsLights&&We.lightsStateVersion!==go.state.version||We.outputEncoding!==Re||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ue||O.fog===!0&&We.fog!==Te||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==G.numPlanes||We.numIntersection!==G.numIntersection)||We.vertexAlphas!==Ne||We.vertexTangents!==Fe||We.morphTargets!==Be||We.morphNormals!==je||We.morphColors!==Pt||We.toneMapping!==an||ae.isWebGL2===!0&&We.morphTargetsCount!==ct)&&(_t=!0):(_t=!0,We.__version=O.version);let li=We.currentProgram;_t===!0&&(li=fr(O,F,K));let yl=!1,Rs=!1,_o=!1;const Lt=li.getUniforms(),ci=We.uniforms;if(ye.useProgram(li.program)&&(yl=!0,Rs=!0,_o=!0),O.id!==M&&(M=O.id,Rs=!0),yl||E!==A){if(Lt.setValue(B,"projectionMatrix",A.projectionMatrix),ae.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),E!==A&&(E=A,Rs=!0,_o=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Bt=Lt.map.cameraPosition;Bt!==void 0&&Bt.setValue(B,J.setFromMatrixPosition(A.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||K.isSkinnedMesh)&&Lt.setValue(B,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){Lt.setOptional(B,K,"bindMatrix"),Lt.setOptional(B,K,"bindMatrixInverse");const Bt=K.skeleton;Bt&&(ae.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Lt.setValue(B,"boneTexture",Bt.boneTexture,ee),Lt.setValue(B,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vo=j.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0&&ae.isWebGL2===!0)&&fe.update(K,j,li),(Rs||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,Lt.setValue(B,"receiveShadow",K.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ci.envMap.value=Ue,ci.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Rs&&(Lt.setValue(B,"toneMappingExposure",d.toneMappingExposure),We.needsLights&&uf(ci,_o),Te&&O.fog===!0&&He.refreshFogUniforms(ci,Te),He.refreshMaterialUniforms(ci,O,R,k,se),qr.upload(B,We.uniformsList,ci,ee)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(qr.upload(B,We.uniformsList,ci,ee),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Lt.setValue(B,"center",K.center),Lt.setValue(B,"modelViewMatrix",K.modelViewMatrix),Lt.setValue(B,"normalMatrix",K.normalMatrix),Lt.setValue(B,"modelMatrix",K.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Bt=O.uniformsGroups;for(let xo=0,df=Bt.length;xo<df;xo++)if(ae.isWebGL2){const Sl=Bt[xo];ve.update(Sl,li),ve.bind(Sl,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function uf(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function ff(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,F,j){Y.get(A.texture).__webglTexture=F,Y.get(A.depthTexture).__webglTexture=j;const O=Y.get(A);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=j===void 0,O.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const j=Y.get(A);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,j=0){y=A,x=F,v=j;let O=!0,K=null,Te=!1,Le=!1;if(A){const Ue=Y.get(A);Ue.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),O=!1):Ue.__webglFramebuffer===void 0?ee.setupRenderTarget(A):Ue.__hasExternalTextures&&ee.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Le=!0);const Fe=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=Fe[F],Te=!0):ae.isWebGL2&&A.samples>0&&ee.useMultisampledRTT(A)===!1?K=Y.get(A).__webglMultisampledFramebuffer:K=Fe,C.copy(A.viewport),S.copy(A.scissor),T=A.scissorTest}else C.copy(X).multiplyScalar(R).floor(),S.copy(Z).multiplyScalar(R).floor(),T=W;if(ye.bindFramebuffer(36160,K)&&ae.drawBuffers&&O&&ye.drawBuffers(A,K),ye.viewport(C),ye.scissor(S),ye.setScissorTest(T),Te){const Ue=Y.get(A.texture);B.framebufferTexture2D(36160,36064,34069+F,Ue.__webglTexture,j)}else if(Le){const Ue=Y.get(A.texture),Ne=F||0;B.framebufferTextureLayer(36160,36064,Ue.__webglTexture,j||0,Ne)}M=-1},this.readRenderTargetPixels=function(A,F,j,O,K,Te,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le]),Re){ye.bindFramebuffer(36160,Re);try{const Ue=A.texture,Ne=Ue.format,Fe=Ue.type;if(Ne!==mn&&V.convert(Ne)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===$s&&(Ce.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Fe!==Ci&&V.convert(Fe)!==B.getParameter(35738)&&!(Fe===yi&&(ae.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-O&&j>=0&&j<=A.height-K&&B.readPixels(F,j,O,K,V.convert(Ne),V.convert(Fe),Te)}finally{const Ue=y!==null?Y.get(y).__webglFramebuffer:null;ye.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(A,F,j=0){const O=Math.pow(2,-j),K=Math.floor(F.image.width*O),Te=Math.floor(F.image.height*O);ee.setTexture2D(F,0),B.copyTexSubImage2D(3553,j,0,0,A.x,A.y,K,Te),ye.unbindTexture()},this.copyTextureToTexture=function(A,F,j,O=0){const K=F.image.width,Te=F.image.height,Le=V.convert(j.format),Re=V.convert(j.type);ee.setTexture2D(j,0),B.pixelStorei(37440,j.flipY),B.pixelStorei(37441,j.premultiplyAlpha),B.pixelStorei(3317,j.unpackAlignment),F.isDataTexture?B.texSubImage2D(3553,O,A.x,A.y,K,Te,Le,Re,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(3553,O,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,Le,F.mipmaps[0].data):B.texSubImage2D(3553,O,A.x,A.y,Le,Re,F.image),O===0&&j.generateMipmaps&&B.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,F,j,O,K=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=A.max.x-A.min.x+1,Le=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,Ue=V.convert(O.format),Ne=V.convert(O.type);let Fe;if(O.isData3DTexture)ee.setTexture3D(O,0),Fe=32879;else if(O.isDataArrayTexture)ee.setTexture2DArray(O,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,O.flipY),B.pixelStorei(37441,O.premultiplyAlpha),B.pixelStorei(3317,O.unpackAlignment);const Be=B.getParameter(3314),je=B.getParameter(32878),Pt=B.getParameter(3316),an=B.getParameter(3315),ai=B.getParameter(32877),ct=j.isCompressedTexture?j.mipmaps[0]:j.image;B.pixelStorei(3314,ct.width),B.pixelStorei(32878,ct.height),B.pixelStorei(3316,A.min.x),B.pixelStorei(3315,A.min.y),B.pixelStorei(32877,A.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Fe,K,F.x,F.y,F.z,Te,Le,Re,Ue,Ne,ct.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Fe,K,F.x,F.y,F.z,Te,Le,Re,Ue,ct.data)):B.texSubImage3D(Fe,K,F.x,F.y,F.z,Te,Le,Re,Ue,Ne,ct),B.pixelStorei(3314,Be),B.pixelStorei(32878,je),B.pixelStorei(3316,Pt),B.pixelStorei(3315,an),B.pixelStorei(32877,ai),K===0&&O.generateMipmaps&&B.generateMipmap(Fe),ye.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){x=0,v=0,y=null,ye.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class f0 extends Kh{}f0.prototype.isWebGL1Renderer=!0;class d0 extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class wi extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nc=new L,Fc=new L,Bc=new it,Jo=new lo,Ur=new Ps;class p0 extends ft{constructor(e=new Ke,t=new wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Nc.fromBufferAttribute(t,i-1),Fc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nc.distanceTo(Fc);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;Bc.copy(i).invert(),Jo.copy(e.ray).applyMatrix4(Bc);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new L,h=new L,u=new L,f=new L,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const d=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let x=d,v=b-1;x<v;x+=p){const y=_.getX(x),M=_.getX(x+1);if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,M),Jo.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let x=d,v=b-1;x<v;x+=p){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Jo.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const kc=new L,Vc=new L;class On extends p0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)kc.fromBufferAttribute(t,i),Vc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kc.distanceTo(Vc);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gn extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gc=new it,ba=new lo,Or=new Ps,zr=new L;class Nn extends ft{constructor(e=new Ke,t=new gn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=s,e.ray.intersectsSphere(Or)===!1)return;Gc.copy(i).invert(),ba.copy(e.ray).applyMatrix4(Gc);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,g=p;_<g;_++){const m=c.getX(_);zr.fromBufferAttribute(u,m),Hc(zr,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p;_<g;_++)zr.fromBufferAttribute(u,_),Hc(zr,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Hc(a,e,t,n,i,s,o){const r=ba.distanceSqToPoint(a);if(r<t){const l=new L;ba.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,object:o})}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let r=0,l=s-1,c;for(;r<=l;)if(i=Math.floor(r+(l-r)/2),c=n[i]-o,c<0)r=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),r=this.getPoint(s),l=t||(o.isVector2?new ce:new L);return l.copy(r).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],s=[],o=[],r=new L,l=new it;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],r),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),r.crossVectors(i[p-1],i[p]),r.length()>Number.EPSILON){r.normalize();const _=Math.acos(xt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(r,_))}o[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(xt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(r.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ja extends Tn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(e,t){const n=t||new ce,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const r=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m0 extends Ja{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ka(){let a=0,e=0,t=0,n=0;function i(s,o,r,l){a=s,e=r,t=-3*s+3*o-2*r-l,n=2*s-2*o+r+l}return{initCatmullRom:function(s,o,r,l,c){i(o,r,c*(r-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,r,l,c,h,u){let f=(o-s)/c-(r-s)/(c+h)+(r-o)/h,p=(r-o)/h-(l-o)/(h+u)+(l-r)/u;f*=h,p*=h,i(o,r,f,p)},calc:function(s){const o=s*s,r=o*s;return a+e*s+t*o+n*r}}}const Nr=new L,Ko=new Ka,$o=new Ka,Qo=new Ka;class g0 extends Tn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:l===0&&r===s-1&&(r=s-2,l=1);let c,h;this.closed||r>0?c=i[(r-1)%s]:(Nr.subVectors(i[0],i[1]).add(i[0]),c=Nr);const u=i[r%s],f=i[(r+1)%s];if(this.closed||r+2<s?h=i[(r+2)%s]:(Nr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ko.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,g,m),$o.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,g,m),Qo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),$o.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Qo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ko.calc(l),$o.calc(l),Qo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wc(a,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,r=a*a,l=a*r;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*r+s*a+t}function _0(a,e){const t=1-a;return t*t*e}function v0(a,e){return 2*(1-a)*a*e}function x0(a,e){return a*a*e}function js(a,e,t,n){return _0(a,e)+v0(a,t)+x0(a,n)}function y0(a,e){const t=1-a;return t*t*t*e}function S0(a,e){const t=1-a;return 3*t*t*a*e}function b0(a,e){return 3*(1-a)*a*a*e}function M0(a,e){return a*a*a*e}function qs(a,e,t,n,i){return y0(a,e)+S0(a,t)+b0(a,n)+M0(a,i)}class $h extends Tn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,o=this.v2,r=this.v3;return n.set(qs(e,i.x,s.x,o.x,r.x),qs(e,i.y,s.y,o.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w0 extends Tn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,o=this.v2,r=this.v3;return n.set(qs(e,i.x,s.x,o.x,r.x),qs(e,i.y,s.y,o.y,r.y),qs(e,i.z,s.z,o.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $a extends Tn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T0 extends Tn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends Tn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(js(e,i.x,s.x,o.x),js(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E0 extends Tn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(js(e,i.x,s.x,o.x),js(e,i.y,s.y,o.y),js(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eu extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),r=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Wc(r,l.x,c.x,h.x,u.x),Wc(r,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}}var tu=Object.freeze({__proto__:null,ArcCurve:m0,CatmullRomCurve3:g0,CubicBezierCurve:$h,CubicBezierCurve3:w0,EllipseCurve:Ja,LineCurve:$a,LineCurve3:T0,QuadraticBezierCurve:Qh,QuadraticBezierCurve3:E0,SplineCurve:eu});class A0 extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new $a(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,r=this.curves[s],l=r.getLength(),c=l===0?0:1-o/l;return r.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],r=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(r);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new tu[i.type]().fromJSON(i))}return this}}class Ma extends A0{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $a(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Qh(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const r=new $h(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(s,o));return this.curves.push(r),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new eu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,r,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,r,l),this}absellipse(e,t,n,i,s,o,r,l){const c=new Ja(e,t,n,i,s,o,r,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xr extends Ma{constructor(e){super(e),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ma().fromJSON(i))}return this}}const C0={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let s=nu(a,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let r,l,c,h,u,f,p;if(n&&(s=I0(a,e,s,t)),a.length>80*t){r=c=a[0],l=h=a[1];for(let _=t;_<i;_+=t)u=a[_],f=a[_+1],u<r&&(r=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-r,h-l),p=p!==0?32767/p:0}return tr(s,o,t,r,l,p,0),o}};function nu(a,e,t,n,i){let s,o;if(i===W0(a,e,t,n)>0)for(s=e;s<t;s+=n)o=jc(s,a[s],a[s+1],o);else for(s=t-n;s>=e;s-=n)o=jc(s,a[s],a[s+1],o);return o&&uo(o,o.next)&&(ir(o),o=o.next),o}function Ri(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(uo(t,t.next)||tt(t.prev,t,t.next)===0)){if(ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function tr(a,e,t,n,i,s,o){if(!a)return;!o&&s&&F0(a,n,i,s);let r=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?L0(a,n,i,s):P0(a)){e.push(l.i/t|0),e.push(a.i/t|0),e.push(c.i/t|0),ir(a),a=c.next,r=c.next;continue}if(a=c,a===r){o?o===1?(a=D0(Ri(a),e,t),tr(a,e,t,n,i,s,2)):o===2&&R0(a,e,t,n,i,s):tr(Ri(a),e,t,n,i,s,1);break}}}function P0(a){const e=a.prev,t=a,n=a.next;if(tt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,r=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=r<l?r<c?r:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,p=r>l?r>c?r:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=p&&as(i,r,s,l,o,c,_.x,_.y)&&tt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function L0(a,e,t,n){const i=a.prev,s=a,o=a.next;if(tt(i,s,o)>=0)return!1;const r=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,p=r<l?r<c?r:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,g=r>l?r>c?r:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=wa(p,_,e,t,n),b=wa(g,m,e,t,n);let x=a.prevZ,v=a.nextZ;for(;x&&x.z>=d&&v&&v.z<=b;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==o&&as(r,h,l,u,c,f,x.x,x.y)&&tt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&as(r,h,l,u,c,f,v.x,v.y)&&tt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==o&&as(r,h,l,u,c,f,x.x,x.y)&&tt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=p&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&as(r,h,l,u,c,f,v.x,v.y)&&tt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function D0(a,e,t){let n=a;do{const i=n.prev,s=n.next.next;!uo(i,s)&&iu(i,n,n.next,s)&&nr(i,s)&&nr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ir(n),ir(n.next),n=a=s),n=n.next}while(n!==a);return Ri(n)}function R0(a,e,t,n,i,s){let o=a;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&V0(o,r)){let l=su(o,r);o=Ri(o,o.next),l=Ri(l,l.next),tr(o,e,t,n,i,s,0),tr(l,e,t,n,i,s,0);return}r=r.next}o=o.next}while(o!==a)}function I0(a,e,t,n){const i=[];let s,o,r,l,c;for(s=0,o=e.length;s<o;s++)r=e[s]*n,l=s<o-1?e[s+1]*n:a.length,c=nu(a,r,l,n,!1),c===c.next&&(c.steiner=!0),i.push(k0(c));for(i.sort(U0),s=0;s<i.length;s++)t=O0(i[s],t);return t}function U0(a,e){return a.x-e.x}function O0(a,e){const t=z0(a,e);if(!t)return e;const n=su(t,a);return Ri(n,n.next),Ri(t,t.next)}function z0(a,e){let t=e,n=-1/0,i;const s=a.x,o=a.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const r=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&as(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),nr(t,a)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&N0(i,t)))&&(i=t,h=u)),t=t.next;while(t!==r);return i}function N0(a,e){return tt(a.prev,a,e.prev)<0&&tt(e.next,a,a.next)<0}function F0(a,e,t,n){let i=a;do i.z===0&&(i.z=wa(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,B0(i)}function B0(a){let e,t,n,i,s,o,r,l,c=1;do{for(t=a,a=null,s=null,o=0;t;){for(o++,n=t,r=0,e=0;e<c&&(r++,n=n.nextZ,!!n);e++);for(l=c;r>0||l>0&&n;)r!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,r--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return a}function wa(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function k0(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function as(a,e,t,n,i,s,o,r){return(i-o)*(e-r)>=(a-o)*(s-r)&&(a-o)*(n-r)>=(t-o)*(e-r)&&(t-o)*(s-r)>=(i-o)*(n-r)}function V0(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!G0(a,e)&&(nr(a,e)&&nr(e,a)&&H0(a,e)&&(tt(a.prev,a,e.prev)||tt(a,e.prev,e))||uo(a,e)&&tt(a.prev,a,a.next)>0&&tt(e.prev,e,e.next)>0)}function tt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function uo(a,e){return a.x===e.x&&a.y===e.y}function iu(a,e,t,n){const i=Br(tt(a,e,t)),s=Br(tt(a,e,n)),o=Br(tt(t,n,a)),r=Br(tt(t,n,e));return!!(i!==s&&o!==r||i===0&&Fr(a,t,e)||s===0&&Fr(a,n,e)||o===0&&Fr(t,a,n)||r===0&&Fr(t,e,n))}function Fr(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Br(a){return a>0?1:a<0?-1:0}function G0(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&iu(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function nr(a,e){return tt(a.prev,a,a.next)<0?tt(a,e,a.next)>=0&&tt(a,a.prev,e)>=0:tt(a,e,a.prev)<0||tt(a,a.next,e)<0}function H0(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function su(a,e){const t=new Ta(a.i,a.x,a.y),n=new Ta(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function jc(a,e,t,n){const i=new Ta(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ir(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Ta(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W0(a,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(a[o]-a[s])*(a[s+1]+a[o+1]),o=s;return i}class ds{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ds.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];qc(e),Xc(n,e);let o=e.length;t.forEach(qc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Xc(n,t[l]);const r=C0.triangulate(n,i);for(let l=0;l<r.length;l+=3)s.push(r.slice(l,l+3));return s}}function qc(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function Xc(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Qa extends Ke{constructor(e=new Xr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];o(c)}this.setAttribute("position",new Ye(i,3)),this.setAttribute("uv",new Ye(s,2)),this.computeVertexNormals();function o(r){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:j0;let x,v=!1,y,M,E,C;d&&(x=d.getSpacedPoints(h),v=!0,f=!1,y=d.computeFrenetFrames(h,!1),M=new L,E=new L,C=new L),f||(m=0,p=0,_=0,g=0);const S=r.extractPoints(c);let T=S.shape;const z=S.holes;if(!ds.isClockWise(T)){T=T.reverse();for(let te=0,Y=z.length;te<Y;te++){const ee=z[te];ds.isClockWise(ee)&&(z[te]=ee.reverse())}}const R=ds.triangulateShape(T,z),U=T;for(let te=0,Y=z.length;te<Y;te++){const ee=z[te];T=T.concat(ee)}function N(te,Y,ee){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(Y,ee)}const X=T.length,Z=R.length;function W(te,Y,ee){let _e,he,Ee;const Ae=te.x-Y.x,Me=te.y-Y.y,Ie=ee.x-te.x,He=ee.y-te.y,P=Ae*Ae+Me*Me,w=Ae*He-Me*Ie;if(Math.abs(w)>Number.EPSILON){const G=Math.sqrt(P),ie=Math.sqrt(Ie*Ie+He*He),re=Y.x-Me/G,fe=Y.y+Ae/G,D=ee.x-He/ie,$=ee.y+Ie/ie,V=((D-re)*He-($-fe)*Ie)/(Ae*He-Me*Ie);_e=re+Ae*V-te.x,he=fe+Me*V-te.y;const de=_e*_e+he*he;if(de<=2)return new ce(_e,he);Ee=Math.sqrt(de/2)}else{let G=!1;Ae>Number.EPSILON?Ie>Number.EPSILON&&(G=!0):Ae<-Number.EPSILON?Ie<-Number.EPSILON&&(G=!0):Math.sign(Me)===Math.sign(He)&&(G=!0),G?(_e=-Me,he=Ae,Ee=Math.sqrt(P)):(_e=Ae,he=Me,Ee=Math.sqrt(P/2))}return new ce(_e/Ee,he/Ee)}const ne=[];for(let te=0,Y=U.length,ee=Y-1,_e=te+1;te<Y;te++,ee++,_e++)ee===Y&&(ee=0),_e===Y&&(_e=0),ne[te]=W(U[te],U[ee],U[_e]);const Q=[];let xe,se=ne.concat();for(let te=0,Y=z.length;te<Y;te++){const ee=z[te];xe=[];for(let _e=0,he=ee.length,Ee=he-1,Ae=_e+1;_e<he;_e++,Ee++,Ae++)Ee===he&&(Ee=0),Ae===he&&(Ae=0),xe[_e]=W(ee[_e],ee[Ee],ee[Ae]);Q.push(xe),se=se.concat(xe)}for(let te=0;te<m;te++){const Y=te/m,ee=p*Math.cos(Y*Math.PI/2),_e=_*Math.sin(Y*Math.PI/2)+g;for(let he=0,Ee=U.length;he<Ee;he++){const Ae=N(U[he],ne[he],_e);B(Ae.x,Ae.y,-ee)}for(let he=0,Ee=z.length;he<Ee;he++){const Ae=z[he];xe=Q[he];for(let Me=0,Ie=Ae.length;Me<Ie;Me++){const He=N(Ae[Me],xe[Me],_e);B(He.x,He.y,-ee)}}}const H=_+g;for(let te=0;te<X;te++){const Y=f?N(T[te],se[te],H):T[te];v?(E.copy(y.normals[0]).multiplyScalar(Y.x),M.copy(y.binormals[0]).multiplyScalar(Y.y),C.copy(x[0]).add(E).add(M),B(C.x,C.y,C.z)):B(Y.x,Y.y,0)}for(let te=1;te<=h;te++)for(let Y=0;Y<X;Y++){const ee=f?N(T[Y],se[Y],H):T[Y];v?(E.copy(y.normals[te]).multiplyScalar(ee.x),M.copy(y.binormals[te]).multiplyScalar(ee.y),C.copy(x[te]).add(E).add(M),B(C.x,C.y,C.z)):B(ee.x,ee.y,u/h*te)}for(let te=m-1;te>=0;te--){const Y=te/m,ee=p*Math.cos(Y*Math.PI/2),_e=_*Math.sin(Y*Math.PI/2)+g;for(let he=0,Ee=U.length;he<Ee;he++){const Ae=N(U[he],ne[he],_e);B(Ae.x,Ae.y,u+ee)}for(let he=0,Ee=z.length;he<Ee;he++){const Ae=z[he];xe=Q[he];for(let Me=0,Ie=Ae.length;Me<Ie;Me++){const He=N(Ae[Me],xe[Me],_e);v?B(He.x,He.y+x[h-1].y,x[h-1].x+ee):B(He.x,He.y,u+ee)}}}J(),le();function J(){const te=i.length/3;if(f){let Y=0,ee=X*Y;for(let _e=0;_e<Z;_e++){const he=R[_e];Pe(he[2]+ee,he[1]+ee,he[0]+ee)}Y=h+m*2,ee=X*Y;for(let _e=0;_e<Z;_e++){const he=R[_e];Pe(he[0]+ee,he[1]+ee,he[2]+ee)}}else{for(let Y=0;Y<Z;Y++){const ee=R[Y];Pe(ee[2],ee[1],ee[0])}for(let Y=0;Y<Z;Y++){const ee=R[Y];Pe(ee[0]+X*h,ee[1]+X*h,ee[2]+X*h)}}n.addGroup(te,i.length/3-te,0)}function le(){const te=i.length/3;let Y=0;pe(U,Y),Y+=U.length;for(let ee=0,_e=z.length;ee<_e;ee++){const he=z[ee];pe(he,Y),Y+=he.length}n.addGroup(te,i.length/3-te,1)}function pe(te,Y){let ee=te.length;for(;--ee>=0;){const _e=ee;let he=ee-1;he<0&&(he=te.length-1);for(let Ee=0,Ae=h+m*2;Ee<Ae;Ee++){const Me=X*Ee,Ie=X*(Ee+1),He=Y+_e+Me,P=Y+he+Me,w=Y+he+Ie,G=Y+_e+Ie;Ce(He,P,w,G)}}}function B(te,Y,ee){l.push(te),l.push(Y),l.push(ee)}function Pe(te,Y,ee){ae(te),ae(Y),ae(ee);const _e=i.length/3,he=b.generateTopUV(n,i,_e-3,_e-2,_e-1);ye(he[0]),ye(he[1]),ye(he[2])}function Ce(te,Y,ee,_e){ae(te),ae(Y),ae(_e),ae(Y),ae(ee),ae(_e);const he=i.length/3,Ee=b.generateSideWallUV(n,i,he-6,he-3,he-2,he-1);ye(Ee[0]),ye(Ee[1]),ye(Ee[3]),ye(Ee[1]),ye(Ee[2]),ye(Ee[3])}function ae(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}function ye(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return q0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const r=t[e.shapes[s]];n.push(r)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new tu[i.type]().fromJSON(i)),new Qa(n,e.options)}}const j0={generateTopUV:function(a,e,t,n,i){const s=e[t*3],o=e[t*3+1],r=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ce(s,o),new ce(r,l),new ce(c,h)]},generateSideWallUV:function(a,e,t,n,i,s){const o=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],g=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(r-h)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-u),new ce(f,1-_),new ce(g,1-d)]:[new ce(r,1-l),new ce(h,1-u),new ce(p,1-_),new ce(m,1-d)]}};function q0(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class sr extends Bn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xs extends wi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Yc={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class X0{constructor(e,t,n){const i=this;let s=!1,o=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,r),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Y0=new X0;class el{constructor(e){this.manager=e!==void 0?e:Y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Rn={};class Z0 extends Error{constructor(e,t){super(e),this.response=t}}class ru extends el{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:i});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Rn[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let g=0;const m=new ReadableStream({start(d){b();function b(){u.read().then(({done:x,value:v})=>{if(x)d.close();else{g+=v.byteLength;const y=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let M=0,E=h.length;M<E;M++){const C=h[M];C.onProgress&&C.onProgress(y)}d.enqueue(v),b()}})}}});return new Response(m)}else throw new Z0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,r));case"json":return c.json();default:if(r===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(r),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Yc.add(e,c);const h=Rn[e];delete Rn[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Rn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ou extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ea=new it,Zc=new L,Jc=new L;class J0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class K0 extends J0{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ea extends ou{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new K0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class au extends ou{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $0{constructor(e,t,n=0,i=1/0){this.ray=new lo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Aa(e,this,n,t),n.sort(Kc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Aa(e[i],this,n,t);return n.sort(Kc),n}}function Kc(a,e){return a.distance-e.distance}function Aa(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)Aa(i[s],e,t,!0)}}class $c{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qc=new L,kr=new L;class Yr{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Qc.subVectors(e,this.start),kr.subVectors(this.end,this.start);const n=kr.dot(kr);let s=kr.dot(Qc)/n;return t&&(s=xt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Ns extends On{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ve(n),i=new Ve(i);const s=t/2,o=e/t,r=e/2,l=[],c=[];for(let f=0,p=0,_=-r;f<=t;f++,_+=o){l.push(-r,0,_,r,0,_),l.push(_,0,-r,_,0,r);const g=f===s?n:i;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const h=new Ke;h.setAttribute("position",new Ye(l,3)),h.setAttribute("color",new Ye(c,3));const u=new wi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Q0{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ma,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const b=[];for(let x=0,v=d.length;x<v;x++){const y=d[x],M=new Xr;M.curves=y.curves,b.push(M)}return b}function n(d,b){const x=b.length;let v=!1;for(let y=x-1,M=0;M<x;y=M++){let E=b[y],C=b[M],S=C.x-E.x,T=C.y-E.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(E=b[M],S=-S,C=b[y],T=-T),d.y<E.y||d.y>C.y)continue;if(d.y===E.y){if(d.x===E.x)return!0}else{const z=T*(d.x-E.x)-S*(d.y-E.y);if(z===0)return!0;if(z<0)continue;v=!v}}else{if(d.y!==E.y)continue;if(C.x<=d.x&&d.x<=E.x||E.x<=d.x&&d.x<=C.x)return!0}}return v}const i=ds.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,r,l;const c=[];if(s.length===1)return r=s[0],l=new Xr,l.curves=r.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],f=[];let p=[],_=0,g;f[_]=void 0,p[_]=[];for(let d=0,b=s.length;d<b;d++)r=s[d],g=r.getPoints(),o=i(g),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new Xr,p:g},f[_].s.curves=r.curves,h&&_++,p[_]=[]):p[_].push({h:r,p:g[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,b=0;for(let x=0,v=f.length;x<v;x++)u[x]=[];for(let x=0,v=f.length;x<v;x++){const y=p[x];for(let M=0;M<y.length;M++){const E=y[M];let C=!0;for(let S=0;S<f.length;S++)n(E.p,f[S].p)&&(x!==S&&b++,C?(C=!1,u[S].push(E)):d=!0);C&&u[x].push(E)}}b>0&&d===!1&&(p=u)}let m;for(let d=0,b=f.length;d<b;d++){l=f[d].s,c.push(l),m=p[d];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);function In(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function lu(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ss={duration:.5,overwrite:!1,delay:0},tl,At,ut,nn=1e8,Xe=1/nn,Ca=Math.PI*2,ev=Ca/4,tv=0,cu=Math.sqrt,nv=Math.cos,iv=Math.sin,yt=function(e){return typeof e=="string"},rt=function(e){return typeof e=="function"},kn=function(e){return typeof e=="number"},nl=function(e){return typeof e>"u"},wn=function(e){return typeof e=="object"},Ot=function(e){return e!==!1},il=function(){return typeof window<"u"},Vr=function(e){return rt(e)||yt(e)},hu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ct=Array.isArray,Pa=/(?:-?\.?\d|\.)+/gi,uu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ta=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fu=/[+-]=-?[.\d]+/,du=/[^,'"\[\]\s]+/gi,sv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,et,Qt,La,sl,Yt={},Qr={},pu,mu=function(e){return(Qr=Ii(e,Yt))&&Ft},rl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},eo=function(e,t){return!t&&console.warn(e)},gu=function(e,t){return e&&(Yt[e]=t)&&Qr&&(Qr[e]=t)||Yt},rr=function(){return 0},rv={suppressEvents:!0,isStart:!0,kill:!1},Zr={suppressEvents:!0,kill:!1},ov={suppressEvents:!0},ol={},ei=[],Da={},_u,Wt={},na={},eh=30,Jr=[],al="",ll=function(e){var t=e[0],n,i;if(wn(t)||rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Jr.length;i--&&!Jr[i].targetTest(t););n=Jr[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vu(e[i],n)))||e.splice(i,1);return e},Ti=function(e){return e._gsap||ll(sn(e))[0]._gsap},vu=function(e,t,n){return(n=e[t])&&rt(n)?e[t]():nl(n)&&e.getAttribute&&e.getAttribute(t)||n},zt=function(e,t){return(e=e.split(",")).forEach(t)||e},lt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},ps=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},av=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},to=function(){var e=ei.length,t=ei.slice(0),n,i;for(Da={},ei.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xu=function(e,t,n,i){ei.length&&!At&&to(),e.render(t,n,i||At&&t<0&&(e._initted||e._startAt)),ei.length&&!At&&to()},yu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(du).length<2?t:yt(e)?e.trim():e},Su=function(e){return e},on=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ii=function(e,t){for(var n in t)e[n]=t[n];return e},th=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wn(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},no=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ys=function(e){var t=e.parent||et,n=e.keyframes?lv(Ct(e.keyframes)):on;if(Ot(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bu=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],r;if(s)for(r=t[s];o&&o[s]>r;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},fo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},si=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ei=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},hv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ra=function(e,t,n,i){return e._startAt&&(At?e._startAt.revert(Zr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},uv=function a(e){return!e||e._ts&&a(e.parent)},nh=function(e){return e._repeat?bs(e._tTime,e=e.duration()+e._rDelay)*e:0},bs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},io=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},po=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||Xe)||0))},mo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),po(e),n._dirty||Ei(n,e)),e},Mu=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=io(e.rawTime(),t),(!t._dur||ur(0,t.totalDuration(),n)-t._tTime>Xe)&&t.render(n,!0)),Ei(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Xe}},Sn=function(e,t,n,i){return t.parent&&si(t),t._start=St((kn(n)?n:n||e!==et?$t(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bu(e,t,"_first","_last",e._sort?"_start":0),Ia(t)||(e._recent=t),i||Mu(e,t),e._ts<0&&mo(e,e._tTime),e},wu=function(e,t){return(Yt.ScrollTrigger||rl("scrollTrigger",t))&&Yt.ScrollTrigger.create(t,e)},Tu=function(e,t,n,i,s){if(hl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!At&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_u!==jt.frame)return ei.push(e),e._lazy=[s,i],1},fv=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Ia=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&fv(e)&&!(!e._initted&&Ia(e))||(e._ts<0||e._dp._ts<0)&&!Ia(e))?0:1,r=e._rDelay,l=0,c,h,u;if(r&&e._repeat&&(l=ur(0,e._tDur,t),h=bs(l,r),e._yoyo&&h&1&&(o=1-o),h!==bs(e._tTime,r)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||At||i||e._zTime===Xe||!t&&e._zTime){if(!e._initted&&Tu(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Xe:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ra(e,t,n,!0),e._onUpdate&&!n&&rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&si(e,1),!n&&!At&&(rn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ms=function(e,t,n,i){var s=e._repeat,o=St(t)||0,r=e._tTime/e._tDur;return r&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:St(o*(s+1)+e._rDelay*s):o,r>0&&!i&&mo(e,e._tTime=e._tDur*r),e.parent&&po(e),n||Ei(e.parent,e),e},ih=function(e){return e instanceof It?Ei(e):Ms(e,e._dur)},mv={_start:0,endTime:rr,totalDuration:rr},$t=function a(e,t,n){var i=e.labels,s=e._recent||mv,o=e.duration()>=nn?s.endTime(!1):e._dur,r,l,c;return yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",r=t.indexOf("="),l==="<"||l===">"?(r>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(r<0?s:n).totalDuration()/100:1)):r<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(r-1)+t.substr(r+1)),c&&n&&(l=l/100*(Ct(n)?n[0]:n).totalDuration()),r>1?a(e,t.substr(0,r-1),n)+l:o+l)):t==null?o:+t},Zs=function(e,t,n){var i=kn(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],r,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(r=o,l=n;l&&!("immediateRender"in r);)r=l.vars.defaults||{},l=Ot(l.vars.inherit)&&l.parent;o.immediateRender=Ot(r.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dt(t[0],o,t[s+1])},oi=function(e,t){return e||e===0?t(e):t},ur=function(e,t,n){return n<e?e:n>t?t:n},Tt=function(e,t){return!yt(e)||!(t=sv.exec(e))?"":t[1]},gv=function(e,t,n){return oi(n,function(i){return ur(e,t,i)})},Ua=[].slice,Eu=function(e,t){return e&&wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wn(e[0]))&&!e.nodeType&&e!==Qt},_v=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return yt(i)&&!t||Eu(i,1)?(s=n).push.apply(s,sn(i)):n.push(i)})||n},sn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):yt(e)&&!n&&(La||!ws())?Ua.call((t||sl).querySelectorAll(e),0):Ct(e)?_v(e,n):Eu(e)?Ua.call(e,0):e?[e]:[]},Oa=function(e){return e=sn(e)[0]||eo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return sn(t,n.querySelectorAll?n:n===e?eo("Invalid scope")||sl.createElement("div"):e)}},Au=function(e){return e.sort(function(){return .5-Math.random()})},Cu=function(e){if(rt(e))return e;var t=wn(e)?e:{each:e},n=Ai(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},r=i>0&&i<1,l=isNaN(i)||r,c=t.axis,h=i,u=i;return yt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!r&&l&&(h=i[0],u=i[1]),function(f,p,_){var g=(_||t).length,m=o[g],d,b,x,v,y,M,E,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,nn])[1],!S){for(E=-nn;E<(E=_[S++].getBoundingClientRect().left)&&S<g;);S--}for(m=o[g]=[],d=l?Math.min(S,g)*h-.5:i%S,b=S===nn?0:l?g*u/S-.5:i/S|0,E=0,C=nn,M=0;M<g;M++)x=M%S-d,v=b-(M/S|0),m[M]=y=c?Math.abs(c==="y"?v:x):cu(x*x+v*v),y>E&&(E=y),y<C&&(C=y);i==="random"&&Au(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Tt(t.amount||t.each)||0,n=n&&g<0?Fu(n):n}return g=(m[f]-m.min)/m.max||0,St(m.b+(n?n(g):g)*m.v)+m.u}},za=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(kn(n)?0:Tt(n))}},Pu=function(e,t){var n=Ct(e),i,s;return!n&&wn(e)&&(i=n=e.radius||nn,e.values?(e=sn(e.values),(s=!kn(e[0]))&&(i*=i)):e=za(e.increment)),oi(t,n?rt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var r=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=nn,h=0,u=e.length,f,p;u--;)s?(f=e[u].x-r,p=e[u].y-l,f=f*f+p*p):f=Math.abs(e[u]-r),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,s||h===o||kn(o)?h:h+Tt(o)}:za(e))},Lu=function(e,t,n,i){return oi(Ct(e)?!t:n===!0?!!(n=0):!i,function(){return Ct(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},vv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},xv=function(e,t){return function(n){return e(parseFloat(n))+(t||Tt(n))}},yv=function(e,t,n){return Ru(e,t,0,1,n)},Du=function(e,t,n){return oi(n,function(i){return e[~~t(i)]})},Sv=function a(e,t,n){var i=t-e;return Ct(e)?Du(e,a(0,e.length),t):oi(n,function(s){return(i+(s-e)%i)%i+e})},bv=function a(e,t,n){var i=t-e,s=i*2;return Ct(e)?Du(e,a(0,e.length-1),t):oi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},or=function(e){for(var t=0,n="",i,s,o,r;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),r=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(r?du:Pa),n+=e.substr(t,i-t)+Lu(r?s:+s[0],r?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Ru=function(e,t,n,i,s){var o=t-e,r=i-n;return oi(s,function(l){return n+((l-e)/o*r||0)})},Mv=function a(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=yt(e),r={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Ct(e)&&!Ct(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(a(e[c-1],e[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=t}else i||(e=Ii(Ct(e)?[]:{},e));if(!h){for(l in t)cl.call(r,e,l,"get",t[l]);s=function(_){return dl(_,r)||(o?e.p:e)}}}return oi(n,s)},sh=function(e,t,n){var i=e.labels,s=nn,o,r,l;for(o in i)r=i[o]-t,r<0==!!n&&r&&s>(r=Math.abs(r))&&(l=o,s=r);return l},rn=function(e,t,n){var i=e.vars,s=i[t],o=ut,r=e._ctx,l,c,h;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ei.length&&to(),r&&(ut=r),h=l?s.apply(c,l):s.call(c),ut=o,h},Gs=function(e){return si(e),e.scrollTrigger&&e.scrollTrigger.kill(!!At),e.progress()<1&&rn(e,"onInterrupt"),e},cs,Iu=[],Uu=function(e){if(!il()){Iu.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=rt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:rr,render:dl,add:cl,kill:Bv,modifier:Fv,rawVars:0},o={targetTest:0,get:0,getSetter:fl,aliases:{},register:0};if(ws(),e!==i){if(Wt[t])return;on(i,on(no(e,s),o)),Ii(i.prototype,Ii(s,no(e,o))),Wt[i.prop=t]=i,e.targetTest&&(Jr.push(i),ol[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gu(t,i),e.register&&e.register(Ft,i,Nt)},qe=255,Hs={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},ia=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*qe+.5|0},Ou=function(e,t,n){var i=e?kn(e)?[e>>16,e>>8&qe,e&qe]:0:Hs.black,s,o,r,l,c,h,u,f,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])i=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),r=e.charAt(3),e="#"+s+s+o+o+r+r+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Pa),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ia(l+1/3,s,o),i[1]=ia(l,s,o),i[2]=ia(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(uu),n&&i.length<4&&(i[3]=1),i}else i=e.match(Pa)||Hs.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/qe,o=i[1]/qe,r=i[2]/qe,u=Math.max(s,o,r),f=Math.min(s,o,r),h=(u+f)/2,u===f?l=c=0:(p=u-f,c=h>.5?p/(2-u-f):p/(u+f),l=u===s?(o-r)/p+(o<r?6:0):u===o?(r-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},zu=function(e){var t=[],n=[],i=-1;return e.split(ti).forEach(function(s){var o=s.match(ls)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},rh=function(e,t,n){var i="",s=(e+i).match(ti),o=t?"hsla(":"rgba(",r=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=Ou(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=zu(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ti,"1").split(ls),u=c.length-1;r<u;r++)i+=c[r]+(~l.indexOf(r)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(ti),u=c.length-1;r<u;r++)i+=c[r]+s[r];return i+c[u]},ti=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),wv=/hsl[a]?\(/,Nu=function(e){var t=e.join(" "),n;if(ti.lastIndex=0,ti.test(t))return n=wv.test(t),e[1]=rh(e[1],n),e[0]=rh(e[0],n,zu(e[1])),!0},ar,jt=function(){var a=Date.now,e=500,t=33,n=a(),i=n,s=1e3/240,o=s,r=[],l,c,h,u,f,p,_=function g(m){var d=a()-i,b=m===!0,x,v,y,M;if(d>e&&(n+=d-t),i+=d,y=i-n,x=y-o,(x>0||b)&&(M=++u.frame,f=y-u.time*1e3,u.time=y=y/1e3,o+=x+(x>=s?4:s-x),v=1),b||(l=c(g)),v)for(p=0;p<r.length;p++)r[p](y,f,M,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){pu&&(!La&&il()&&(Qt=La=window,sl=Qt.document||{},Yt.gsap=Ft,(Qt.gsapVersions||(Qt.gsapVersions=[])).push(Ft.version),mu(Qr||Qt.GreenSockGlobals||!Qt.gsap&&Qt||{}),h=Qt.requestAnimationFrame,Iu.forEach(Uu)),l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},ar=1,_(2))},sleep:function(){(h?Qt.cancelAnimationFrame:clearTimeout)(l),ar=0,c=rr},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,d,b){var x=d?function(v,y,M,E){m(v,y,M,E),u.remove(x)}:m;return u.remove(m),r[b?"unshift":"push"](x),ws(),x},remove:function(m,d){~(d=r.indexOf(m))&&r.splice(d,1)&&p>=d&&p--},_listeners:r},u}(),ws=function(){return!ar&&jt.wake()},Ge={},Tv=/^[\d.\-M][\d.\-,\s]/,Ev=/["']/g,Av=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,r,l,c;s<o;s++)l=n[s],r=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,r),t[i]=isNaN(c)?c.replace(Ev,"").trim():+c,i=l.substr(r+1).trim();return t},Cv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Pv=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Av(t[1])]:Cv(e).split(",").map(yu)):Ge._CE&&Tv.test(e)?Ge._CE("",e):n},Fu=function(e){return function(t){return 1-e(1-t)}},Bu=function a(e,t){for(var n=e._first,i;n;)n instanceof It?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ai=function(e,t){return e&&(rt(e)?e:Ge[e]||Pv(e))||t},zi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return zt(e,function(r){Ge[r]=Yt[r]=s,Ge[o=r.toLowerCase()]=n;for(var l in s)Ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[r+"."+l]=s[l]}),s},ku=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sa=function a(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ca*(Math.asin(1/i)||0),r=function(h){return h===1?1:i*Math.pow(2,-10*h)*iv((h-o)*s)+1},l=e==="out"?r:e==="in"?function(c){return 1-r(1-c)}:ku(r);return s=Ca/s,l.config=function(c,h){return a(e,c,h)},l},ra=function a(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ku(n);return i.config=function(s){return a(e,s)},i};zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;zi(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;zi("Elastic",sa("in"),sa("out"),sa());(function(a,e){var t=1/e,n=2*t,i=2.5*t,s=function(r){return r<t?a*r*r:r<n?a*Math.pow(r-1.5/e,2)+.75:r<i?a*(r-=2.25/e)*r+.9375:a*Math.pow(r-2.625/e,2)+.984375};zi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zi("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});zi("Circ",function(a){return-(cu(1-a*a)-1)});zi("Sine",function(a){return a===1?1:-nv(a*ev)+1});zi("Back",ra("in"),ra("out"),ra());Ge.SteppedEase=Ge.steps=Yt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Xe;return function(r){return((i*ur(0,o,r)|0)+s)*n}}};Ss.ease=Ge["quad.out"];zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return al+=a+","+a+"Params,"});var Vu=function(e,t){this.id=tv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vu,this.set=t?t.getSetter:fl},Ts=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ms(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),ar||jt.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(mo(this,n),!s._dp||s.parent||Mu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Sn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Xe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?bs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?io(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Xe?0:this._rts,this.totalTime(ur(-Math.abs(this._delay),this._tDur,i),!0),po(this),hv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Sn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ot(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?io(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ov);var i=At;return At=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),At=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ih(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ih(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime($t(this,n),Ot(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ot(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Xe)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=rt(n)?n:Su,r=function(){var c=i.then;i.then=null,rt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?r():i._prom=r})},e.kill=function(){Gs(this)},a}();on(Ts.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var It=function(a){lu(e,a);function e(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ot(n.sortChildren),et&&Sn(n.parent||et,In(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wu(In(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Zs(0,arguments,this),this},t.from=function(i,s,o){return Zs(1,arguments,this),this},t.fromTo=function(i,s,o,r){return Zs(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ys(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dt(i,s,$t(this,o),1),this},t.call=function(i,s,o){return Sn(this,dt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,r,l,c,h){return o.duration=s,o.stagger=o.stagger||r,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new dt(i,o,$t(this,l)),this},t.staggerFrom=function(i,s,o,r,l,c,h){return o.runBackwards=1,Ys(o).immediateRender=Ot(o.immediateRender),this.staggerTo(i,s,o,r,l,c,h)},t.staggerFromTo=function(i,s,o,r,l,c,h,u){return r.startAt=o,Ys(r).immediateRender=Ot(r.immediateRender),this.staggerTo(i,s,r,l,c,h,u)},t.render=function(i,s,o){var r=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:St(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,p,_,g,m,d,b,x,v,y,M,E;if(this!==et&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(r!==this._time&&c&&(h+=this._time-r,i+=this._time-r),f=h,v=this._start,x=this._ts,d=!x,u&&(c||(r=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=St(h%m),h===l?(g=this._repeat,f=c):(g=~~(h/m),g&&g===h/m&&(f=c,g--),f>c&&(f=c)),y=bs(this._tTime,m),!r&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),M&&g&1&&(f=c-f,E=1),g!==y&&!this._lock){var C=M&&y&1,S=C===(M&&g&1);if(g<y&&(C=!C),r=C?0:c,this._lock=1,this.render(r||(E?0:St(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),r&&r!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,r=C?c:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Bu(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=pv(this,St(r),St(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,r=0),!r&&f&&!s&&!g&&(rn(this,"onStart"),this._tTime!==h))return this;if(f>=r&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){b=0,_&&(h+=this._zTime=-Xe);break}}p=_}else{p=this._last;for(var T=i<0?i:f;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,o||At&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){b=0,_&&(h+=this._zTime=T?-Xe:Xe);break}}p=_}}if(b&&!s&&(this.pause(),b.render(f>=r?0:-Xe)._zTime=f>=r?1:-1,this._ts))return this._start=v,po(this),this.render(i,s,o);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&r)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&si(this,1),!s&&!(i<0&&!r)&&(h||r||!l)&&(rn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(kn(s)||(s=$t(this,s,i)),!(i instanceof Ts)){if(Ct(i))return i.forEach(function(r){return o.add(r,s)}),this;if(yt(i))return this.addLabel(i,s);if(rt(i))i=dt.delayedCall(0,i);else return this}return this!==i?Sn(this,i,s):this},t.getChildren=function(i,s,o,r){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),r===void 0&&(r=-nn);for(var l=[],c=this._first;c;)c._start>=r&&(c instanceof dt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return yt(i)?this.removeLabel(i):rt(i)?this.killTweensOf(i):(fo(this,i),i===this._recent&&(this._recent=this._last),Ei(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=$t(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var r=dt.delayedCall(0,s||rr,o);return r.data="isPause",this._hasPause=1,Sn(this,r,$t(this,i))},t.removePause=function(i){var s=this._first;for(i=$t(this,i);s;)s._start===i&&s.data==="isPause"&&si(s),s=s._next},t.killTweensOf=function(i,s,o){for(var r=this.getTweensOf(i,o),l=r.length;l--;)Jn!==r[l]&&r[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],r=sn(i),l=this._first,c=kn(s),h;l;)l instanceof dt?av(l._targets,r)&&(c?(!Jn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(r,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,r=$t(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,p,_=dt.to(o,on({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:r,overwrite:"auto",duration:s.duration||Math.abs((r-(c&&"time"in c?c.time:o._time))/o.timeScale())||Xe,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((r-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Ms(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,on({startAt:{time:$t(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),sh(this,$t(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),sh(this,$t(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Xe)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var r=this._first,l=this.labels,c;r;)r._start>=o&&(r._start+=i,r._end+=i),r=r._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ei(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ei(this)},t.totalDuration=function(i){var s=0,o=this,r=o._last,l=nn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;r;)c=r._prev,r._dirty&&r.totalDuration(),h=r._start,h>l&&o._sort&&r._ts&&!o._lock?(o._lock=1,Sn(o,r,h-r._delay,1)._lock=0):l=h,h<0&&r._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),r._end>s&&r._ts&&(s=r._end),r=c;Ms(o,o===et&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(et._ts&&(xu(et,io(i,et)),_u=jt.frame),jt.frame>=eh){eh+=Xt.autoSleep||120;var s=et._first;if((!s||!s._ts)&&Xt.autoSleep&&jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jt.sleep()}}},e}(Ts);on(It.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lv=function(e,t,n,i,s,o,r){var l=new Nt(this._pt,e,t,0,1,Xu,null,s),c=0,h=0,u,f,p,_,g,m,d,b;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=or(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(ta)||[];u=ta.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?ps(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=ta.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=r,(fu.test(i)||d)&&(l.e=0),this._pt=l,l},cl=function(e,t,n,i,s,o,r,l,c,h){rt(i)&&(i=i(s||0,e,o));var u=e[t],f=n!=="get"?n:rt(u)?c?e[t.indexOf("set")||!rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,p=rt(u)?c?Ov:ju:ul,_;if(yt(i)&&(~i.indexOf("random(")&&(i=or(i)),i.charAt(1)==="="&&(_=ps(f,i)+(Tt(f)||0),(_||_===0)&&(i=_))),!h||f!==i||Na)return!isNaN(f*i)&&i!==""?(_=new Nt(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?Nv:qu,0,p),c&&(_.fp=c),r&&_.modifier(r,this,e),this._pt=_):(!u&&!(t in e)&&rl(t,i),Lv.call(this,e,t,f,i,p,l||Xt.stringFilter,c))},Dv=function(e,t,n,i,s){if(rt(e)&&(e=Js(e,s,t,n,i)),!wn(e)||e.style&&e.nodeType||Ct(e)||hu(e))return yt(e)?Js(e,s,t,n,i):e;var o={},r;for(r in e)o[r]=Js(e[r],s,t,n,i);return o},Gu=function(e,t,n,i,s,o){var r,l,c,h;if(Wt[e]&&(r=new Wt[e]).init(s,r.rawVars?t[e]:Dv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Nt(n._pt,s,e,0,1,r.render,r,0,r.priority),n!==cs))for(c=n._ptLookup[n._targets.indexOf(s)],h=r._props.length;h--;)c[r._props[h]]=l;return r},Jn,Na,hl=function a(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,r=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=e._dur,d=e._startAt,b=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:b,y=e._overwrite==="auto"&&!tl,M=e.timeline,E,C,S,T,z,k,R,U,N,X,Z,W,ne;if(M&&(!_||!s)&&(s="none"),e._ease=Ai(s,Ss.ease),e._yEase=p?Fu(Ai(p===!0?s:p,Ss.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!M&&!!i.runBackwards,!M||_&&!i.stagger){if(U=b[0]?Ti(b[0]).harness:0,W=U&&i[U.prop],E=no(i,ol),d&&(d._zTime<0&&d.progress(1),t<0&&f&&r&&!g?d.render(-1,!0):d.revert(f&&m?Zr:rv),d._lazy=0),o){if(si(e._startAt=dt.set(b,on({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Ot(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(At||!r&&!g)&&e._startAt.revert(Zr),r&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!d){if(t&&(r=!1),S=on({overwrite:!1,data:"isFromStart",lazy:r&&!d&&Ot(l),immediateRender:r,stagger:0,parent:x},E),W&&(S[U.prop]=W),si(e._startAt=dt.set(b,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(At?e._startAt.revert(Zr):e._startAt.render(-1,!0)),e._zTime=t,!r)a(e._startAt,Xe,Xe);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Ot(l)||l&&!m,C=0;C<b.length;C++){if(z=b[C],R=z._gsap||ll(b)[C]._gsap,e._ptLookup[C]=X={},Da[R.id]&&ei.length&&to(),Z=v===b?C:v.indexOf(z),U&&(N=new U).init(z,W||E,e,Z,v)!==!1&&(e._pt=T=new Nt(e._pt,z,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Q){X[Q]=T}),N.priority&&(k=1)),!U||W)for(S in E)Wt[S]&&(N=Gu(S,E,e,Z,z,v))?N.priority&&(k=1):X[S]=T=cl.call(e,z,S,"get",E[S],Z,v,0,i.stringFilter);e._op&&e._op[C]&&e.kill(z,e._op[C]),y&&e._pt&&(Jn=e,et.killTweensOf(z,X,e.globalTime(t)),ne=!e.parent,Jn=0),e._pt&&l&&(Da[R.id]=1)}k&&Yu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ne,_&&t<=0&&M.render(nn,!0,!0)},Rv=function(e,t,n,i,s,o,r){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,u,f;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(c=u[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Na=1,e.vars[t]="+=0",hl(e,r),Na=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,h.e&&(h.e=lt(n)+Tt(h.e)),h.b&&(h.b=c.s+Tt(h.b))},Iv=function(e,t){var n=e[0]?Ti(e[0]).harness:0,i=n&&n.aliases,s,o,r,l;if(!i)return t;s=Ii({},t);for(o in i)if(o in s)for(l=i[o].split(","),r=l.length;r--;)s[l[r]]=s[o];return s},Uv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,r;if(Ct(t))r=n[e]||(n[e]=[]),t.forEach(function(l,c){return r.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)r=n[o]||(n[o]=[]),o==="ease"||r.push({t:parseFloat(e),v:t[o],e:s})},Js=function(e,t,n,i,s){return rt(e)?e.call(t,n,i,s):yt(e)&&~e.indexOf("random(")?or(e):e},Hu=al+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wu={};zt(Hu+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Wu[a]=1});var dt=function(a){lu(e,a);function e(n,i,s,o){var r;typeof i=="number"&&(s.duration=i,i=s,s=null),r=a.call(this,o?i:Ys(i))||this;var l=r.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,b=i.parent||et,x=(Ct(n)||hu(n)?kn(n[0]):"length"in i)?[n]:sn(n),v,y,M,E,C,S,T,z;if(r._targets=x.length?ll(x):eo("GSAP target "+n+" not found. https://greensock.com",!Xt.nullTargetWarn)||[],r._ptLookup=[],r._overwrite=p,_||f||Vr(c)||Vr(h)){if(i=r.vars,v=r.timeline=new It({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:x}),v.kill(),v.parent=v._dp=In(r),v._start=0,f||Vr(c)||Vr(h)){if(E=x.length,T=f&&Cu(f),wn(f))for(C in f)~Hu.indexOf(C)&&(z||(z={}),z[C]=f[C]);for(y=0;y<E;y++)M=no(i,Wu),M.stagger=0,d&&(M.yoyoEase=d),z&&Ii(M,z),S=x[y],M.duration=+Js(c,In(r),y,S,x),M.delay=(+Js(h,In(r),y,S,x)||0)-r._delay,!f&&E===1&&M.delay&&(r._delay=h=M.delay,r._start+=h,M.delay=0),v.to(S,M,T?T(y,S,x):0),v._ease=Ge.none;v.duration()?c=h=0:r.timeline=0}else if(_){Ys(on(v.vars.defaults,{ease:"none"})),v._ease=Ai(_.ease||i.ease||"none");var k=0,R,U,N;if(Ct(_))_.forEach(function(X){return v.to(x,X,">")}),v.duration();else{M={};for(C in _)C==="ease"||C==="easeEach"||Uv(C,_[C],M,_.easeEach);for(C in M)for(R=M[C].sort(function(X,Z){return X.t-Z.t}),k=0,y=0;y<R.length;y++)U=R[y],N={ease:U.e,duration:(U.t-(y?R[y-1].t:0))/100*c},N[C]=U.v,v.to(x,N,k),k+=N.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||r.duration(c=v.duration())}else r.timeline=0;return p===!0&&!tl&&(Jn=In(r),et.killTweensOf(x),Jn=0),Sn(b,In(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),(u||!c&&!_&&r._start===St(b._time)&&Ot(u)&&uv(In(r))&&b.data!=="nested")&&(r._tTime=-Xe,r.render(Math.max(0,-h)||0)),m&&wu(In(r),m),r}var t=e.prototype;return t.render=function(i,s,o){var r=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Xe&&!h?l:i<Xe?0:i,f,p,_,g,m,d,b,x,v;if(!c)dv(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(f=St(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===u/g&&(f=c,_--),f>c&&(f=c)),d=this._yoyo&&_&1,d&&(v=this._yEase,f=c-f),m=bs(this._tTime,g),f===r&&!o&&this._initted)return this._tTime=u,this;_!==m&&(x&&this._yEase&&Bu(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=o=1,this.render(St(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Tu(this,h?i:f,o,s,u))return this._tTime=0,this;if(r!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!r&&!s&&!_&&(rn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(i<0?i:!f&&d?-Xe:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Ra(this,i,s,o),rn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ra(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&si(this,1),!s&&!(h&&!r)&&(u||r||d)&&(rn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,r){ar||jt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||hl(this,l),c=this._ease(l/this._dur),Rv(this,i,s,o,r,c,l)?this.resetTo(i,s,o,r):(mo(this,0),this.parent||bu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Jn&&Jn.vars.overwrite!==!0)._first||Gs(this),this.parent&&o!==this.timeline.totalDuration()&&Ms(this,this._dur*this.timeline._tDur/o,0,1),this}var r=this._targets,l=i?sn(i):r,c=this._ptLookup,h=this._pt,u,f,p,_,g,m,d;if((!s||s==="all")&&cv(r,l))return s==="all"&&(this._pt=0),Gs(this);for(u=this._op=this._op||[],s!=="all"&&(yt(s)&&(g={},zt(s,function(b){return g[b]=1}),s=g),s=Iv(r,s)),d=r.length;d--;)if(~l.indexOf(r[d])){f=c[d],s==="all"?(u[d]=s,_=f,p={}):(p=u[d]=u[d]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&fo(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Gs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Zs(1,arguments)},e.delayedCall=function(i,s,o,r){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:r})},e.fromTo=function(i,s,o){return Zs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return et.killTweensOf(i,s,o)},e}(Ts);on(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zt("staggerTo,staggerFrom,staggerFromTo",function(a){dt[a]=function(){var e=new It,t=Ua.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var ul=function(e,t,n){return e[t]=n},ju=function(e,t,n){return e[t](n)},Ov=function(e,t,n,i){return e[t](i.fp,n)},zv=function(e,t,n){return e.setAttribute(t,n)},fl=function(e,t){return rt(e[t])?ju:nl(e[t])&&e.setAttribute?zv:ul},qu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Nv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},dl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Fv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Bv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?fo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},kv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yu=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Nt=function(){function a(t,n,i,s,o,r,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=r||qu,this.d=l||this,this.set=c||ul,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=kv,this.m=n,this.mt=s,this.tween=i},a}();zt(al+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return ol[a]=1});Yt.TweenMax=Yt.TweenLite=dt;Yt.TimelineLite=Yt.TimelineMax=It;et=new It({sortChildren:!1,defaults:Ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xt.stringFilter=Nu;var Es=[],Kr={},Vv=[],oh=0,oa=function(e){return(Kr[e]||Vv).map(function(t){return t()})},Fa=function(){var e=Date.now(),t=[];e-oh>2&&(oa("matchMediaInit"),Es.forEach(function(n){var i=n.queries,s=n.conditions,o,r,l,c;for(r in i)o=Qt.matchMedia(i[r]).matches,o&&(l=1),o!==s[r]&&(s[r]=o,c=1);c&&(n.revert(),l&&t.push(n))}),oa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),oh=e,oa("matchMedia"))},Zu=function(){function a(t,n){this.selector=n&&Oa(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,s){rt(n)&&(s=i,i=n,n=rt);var o=this,r=function(){var c=ut,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Oa(s)),ut=o,u=i.apply(o,arguments),rt(u)&&o._r.push(u),ut=c,o.selector=h,o.isReverted=!1,u};return o.last=r,n===rt?r(o):n?o[n]=r:r},e.ignore=function(n){var i=ut;ut=null,n(this),ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ts)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var r=Es.indexOf(this);~r&&Es.splice(r,1)}},e.revert=function(n){this.kill(n||{})},a}(),Gv=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,s){wn(n)||(n={matches:n});var o=new Zu(0,s||this.scope),r=o.conditions={},l,c,h;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Qt.matchMedia(n[c]),l&&(Es.indexOf(o)<0&&Es.push(o),(r[c]=l.matches)&&(h=1),l.addListener?l.addListener(Fa):l.addEventListener("change",Fa)));return h&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),so={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Uu(i)})},timeline:function(e){return new It(e)},getTweensOf:function(e,t){return et.getTweensOf(e,t)},getProperty:function(e,t,n,i){yt(e)&&(e=sn(e)[0]);var s=Ti(e||{}).get,o=n?Su:yu;return n==="native"&&(n=""),e&&(t?o((Wt[t]&&Wt[t].get||s)(e,t,n,i)):function(r,l,c){return o((Wt[r]&&Wt[r].get||s)(e,r,l,c))})},quickSetter:function(e,t,n){if(e=sn(e),e.length>1){var i=e.map(function(h){return Ft.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=Wt[t],r=Ti(e),l=r.harness&&(r.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;cs._pt=0,u.init(e,n?h+n:h,cs,0,[e]),u.render(1,u),cs._pt&&dl(1,cs)}:r.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,r,1)}},quickTo:function(e,t,n){var i,s=Ft.to(e,Ii((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return et.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ai(e.ease,Ss.ease)),th(Ss,e||{})},config:function(e){return th(Xt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(r){return r&&!Wt[r]&&!Yt[r]&&eo(t+" effect requires "+r+" plugin.")}),na[t]=function(r,l,c){return n(sn(r),on(l||{},s),c)},o&&(It.prototype[t]=function(r,l,c){return this.add(na[t](r,wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ge[e]=Ai(t)},parseEase:function(e,t){return arguments.length?Ai(e,t):Ge},getById:function(e){return et.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new It(e),i,s;for(n.smoothChildTiming=Ot(e.smoothChildTiming),et.remove(n),n._dp=0,n._time=n._tTime=et._time,i=et._first;i;)s=i._next,(t||!(!i._dur&&i instanceof dt&&i.vars.onComplete===i._targets[0]))&&Sn(n,i,i._start-i._delay),i=s;return Sn(et,n,0),n},context:function(e,t){return e?new Zu(e,t):ut},matchMedia:function(e){return new Gv(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Fa()},addEventListener:function(e,t){var n=Kr[e]||(Kr[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Kr[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Sv,wrapYoyo:bv,distribute:Cu,random:Lu,snap:Pu,normalize:yv,getUnit:Tt,clamp:gv,splitColor:Ou,toArray:sn,selector:Oa,mapRange:Ru,pipe:vv,unitize:xv,interpolate:Mv,shuffle:Au},install:mu,effects:na,ticker:jt,updateRoot:It.updateRoot,plugins:Wt,globalTimeline:et,core:{PropTween:Nt,globals:gu,Tween:dt,Timeline:It,Animation:Ts,getCache:Ti,_removeLinkedListItem:fo,reverting:function(){return At},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return tl=e}}};zt("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return so[a]=dt[a]});jt.add(It.updateRoot);cs=so.to({},{duration:0});var Hv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Wv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Hv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},aa=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(r){var l,c;if(yt(s)&&(l={},zt(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Wv(r,s)}}}},Ft=so.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,r,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",r=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),r.op=o,r.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)At?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},aa("roundProps",za),aa("modifiers"),aa("snap",Pu))||so;dt.version=It.version=Ft.version="3.11.5";pu=1;il()&&ws();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ah,Kn,ms,pl,bi,lh,ml,jv=function(){return typeof window<"u"},Vn={},_i=180/Math.PI,gs=Math.PI/180,ts=Math.atan2,ch=1e8,gl=/([A-Z])/g,qv=/(left|right|width|margin|padding|x)/i,Xv=/[\s,\(]\S/,bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ba=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ju=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ku=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Kv=function(e,t,n){return e.style[t]=n},$v=function(e,t,n){return e.style.setProperty(t,n)},Qv=function(e,t,n){return e._gsap[t]=n},ex=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},tx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},nx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},nt="transform",_n=nt+"Origin",ix=function a(e,t){var n=this,i=this.target,s=i.style;if(e in Vn){if(this.tfm=this.tfm||{},e!=="transform")e=bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Un(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Un(i,e);else return bn.transform.split(",").forEach(function(o){return a.call(n,o,t)});if(this.props.indexOf(nt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_n,t,"")),e=nt}(s||t)&&this.props.push(e,t,s[e])},$u=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ml(),(!s||!s.isStart)&&!n[nt]&&($u(n),i.uncache=1)}},Qu=function(e,t){var n={target:e,props:[],revert:sx,save:ix};return e._gsap||Ft.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},ef,ka=function(e,t){var n=Kn.createElementNS?Kn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Kn.createElement(e);return n.style?n:Kn.createElement(e)},Mn=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,As(t)||t,1)||""},hh="O,Moz,ms,Ms,Webkit".split(","),As=function(e,t,n){var i=t||bi,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(hh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?hh[o]:"")+e},Va=function(){jv()&&window.document&&(ah=window,Kn=ah.document,ms=Kn.documentElement,bi=ka("div")||{style:{}},ka("div"),nt=As(nt),_n=nt+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ef=!!As("perspective"),ml=Ft.core.reverting,pl=1)},la=function a(e){var t=ka("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ms.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ms.removeChild(t),this.style.cssText=s,o},uh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},tf=function(e){var t;try{t=e.getBBox()}catch{t=la.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===la||(t=la.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+uh(e,["x","cx","x1"])||0,y:+uh(e,["y","cy","y1"])||0,width:0,height:0}:t},nf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tf(e))},lr=function(e,t){if(t){var n=e.style;t in Vn&&t!==_n&&(t=nt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(gl,"-$1").toLowerCase())):n.removeAttribute(t)}},$n=function(e,t,n,i,s,o){var r=new Nt(e._pt,t,n,0,1,o?Ku:Ju);return e._pt=r,r.b=i,r.e=s,e._props.push(n),r},fh={deg:1,rad:1,turn:1},rx={grid:1,flex:1},ri=function a(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",r=bi.style,l=qv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",p=i==="%",_,g,m,d;return i===o||!s||fh[i]||fh[o]?s:(o!=="px"&&!f&&(s=a(e,t,n,"px")),d=e.getCTM&&nf(e),(p||o==="%")&&(Vn[t]||~t.indexOf("adius"))?(_=d?e.getBBox()[l?"width":"height"]:e[h],lt(p?s/_*u:s/100*_)):(r[l?"width":"height"]=u+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Kn||!g.appendChild)&&(g=Kn.body),m=g._gsap,m&&p&&m.width&&l&&m.time===jt.time&&!m.uncache?lt(s/m.width*u):((p||o==="%")&&!rx[Mn(g,"display")]&&(r.position=Mn(e,"position")),g===e&&(r.position="static"),g.appendChild(bi),_=bi[h],g.removeChild(bi),r.position="absolute",l&&p&&(m=Ti(g),m.time=jt.time,m.width=g[h]),lt(f?_*s/u:_&&s?u/_*s:0))))},Un=function(e,t,n,i){var s;return pl||Va(),t in bn&&t!=="transform"&&(t=bn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vn[t]&&t!=="transform"?(s=hr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:oo(Mn(e,_n))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ro[t]&&ro[t](e,t,n)||Mn(e,t)||vu(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ri(e,t,s,n)+n:s},ox=function(e,t,n,i){if(!n||n==="none"){var s=As(t,e,1),o=s&&Mn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Mn(e,"borderTopColor"))}var r=new Nt(this._pt,e.style,t,0,1,Xu),l=0,c=0,h,u,f,p,_,g,m,d,b,x,v,y;if(r.b=n,r.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Mn(e,t)||i,e.style[t]=n),h=[n,i],Nu(h),n=h[0],i=h[1],f=n.match(ls)||[],y=i.match(ls)||[],y.length){for(;u=ls.exec(i);)m=u[0],b=i.substring(l,u.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),m.charAt(1)==="="&&(m=ps(p,m)+v),d=parseFloat(m),x=m.substr((d+"").length),l=ls.lastIndex-x.length,x||(x=x||Xt.units[t]||v,l===i.length&&(i+=x,r.e+=x)),v!==x&&(p=ri(e,t,g,x)||0),r._pt={_next:r._pt,p:b||c===1?b:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});r.c=l<i.length?i.substring(l,i.length):""}else r.r=t==="display"&&i==="none"?Ku:Ju;return fu.test(i)&&(r.e=0),this._pt=r,r},dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ax=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=dh[n]||n,t[1]=dh[i]||i,t.join(" ")},lx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,r,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)r=s[c],Vn[r]&&(l=1,r=r==="transformOrigin"?_n:nt),lr(n,r);l&&(lr(n,nt),o&&(o.svg&&n.removeAttribute("transform"),hr(n,1),o.uncache=1,$u(i)))}},ro={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Nt(e._pt,t,n,0,0,lx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},cr=[1,0,0,1,0,0],sf={},rf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ph=function(e){var t=Mn(e,nt);return rf(t)?cr:t.substr(7).match(uu).map(lt)},_l=function(e,t){var n=e._gsap||Ti(e),i=e.style,s=ph(e),o,r,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?cr:s):(s===cr&&!e.offsetParent&&e!==ms&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,r=e.nextElementSibling,ms.appendChild(e)),s=ph(e),l?i.display=l:lr(e,"display"),c&&(r?o.insertBefore(e,r):o?o.appendChild(e):ms.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ga=function(e,t,n,i,s,o){var r=e._gsap,l=s||_l(e,!0),c=r.xOrigin||0,h=r.yOrigin||0,u=r.xOffset||0,f=r.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],b=l[5],x=t.split(" "),v=parseFloat(x[0])||0,y=parseFloat(x[1])||0,M,E,C,S;n?l!==cr&&(E=p*m-_*g)&&(C=v*(m/E)+y*(-g/E)+(g*b-m*d)/E,S=v*(-_/E)+y*(p/E)-(p*b-_*d)/E,v=C,y=S):(M=tf(e),v=M.x+(~x[0].indexOf("%")?v/100*M.width:v),y=M.y+(~(x[1]||x[0]).indexOf("%")?y/100*M.height:y)),i||i!==!1&&r.smooth?(d=v-c,b=y-h,r.xOffset=u+(d*p+b*g)-d,r.yOffset=f+(d*_+b*m)-b):r.xOffset=r.yOffset=0,r.xOrigin=v,r.yOrigin=y,r.smooth=!!i,r.origin=t,r.originIsAbsolute=!!n,e.style[_n]="0px 0px",o&&($n(o,r,"xOrigin",c,v),$n(o,r,"yOrigin",h,y),$n(o,r,"xOffset",u,r.xOffset),$n(o,r,"yOffset",f,r.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},hr=function(e,t){var n=e._gsap||new Vu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",r="deg",l=getComputedStyle(e),c=Mn(e,_n)||"0",h,u,f,p,_,g,m,d,b,x,v,y,M,E,C,S,T,z,k,R,U,N,X,Z,W,ne,Q,xe,se,H,J,le;return h=u=f=g=m=d=b=x=v=0,p=_=1,n.svg=!!(e.getCTM&&nf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),i.scale=i.rotate=i.translate="none"),E=_l(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Ga(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,E)),y=n.xOrigin||0,M=n.yOrigin||0,E!==cr&&(z=E[0],k=E[1],R=E[2],U=E[3],h=N=E[4],u=X=E[5],E.length===6?(p=Math.sqrt(z*z+k*k),_=Math.sqrt(U*U+R*R),g=z||k?ts(k,z)*_i:0,b=R||U?ts(R,U)*_i+g:0,b&&(_*=Math.abs(Math.cos(b*gs))),n.svg&&(h-=y-(y*z+M*R),u-=M-(y*k+M*U))):(le=E[6],H=E[7],Q=E[8],xe=E[9],se=E[10],J=E[11],h=E[12],u=E[13],f=E[14],C=ts(le,se),m=C*_i,C&&(S=Math.cos(-C),T=Math.sin(-C),Z=N*S+Q*T,W=X*S+xe*T,ne=le*S+se*T,Q=N*-T+Q*S,xe=X*-T+xe*S,se=le*-T+se*S,J=H*-T+J*S,N=Z,X=W,le=ne),C=ts(-R,se),d=C*_i,C&&(S=Math.cos(-C),T=Math.sin(-C),Z=z*S-Q*T,W=k*S-xe*T,ne=R*S-se*T,J=U*T+J*S,z=Z,k=W,R=ne),C=ts(k,z),g=C*_i,C&&(S=Math.cos(C),T=Math.sin(C),Z=z*S+k*T,W=N*S+X*T,k=k*S-z*T,X=X*S-N*T,z=Z,N=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=lt(Math.sqrt(z*z+k*k+R*R)),_=lt(Math.sqrt(X*X+le*le)),C=ts(N,X),b=Math.abs(C)>2e-4?C*_i:0,v=J?1/(J<0?-J:J):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rf(Mn(e,nt)),Z&&e.setAttribute("transform",Z))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=lt(p),n.scaleY=lt(_),n.rotation=lt(g)+r,n.rotationX=lt(m)+r,n.rotationY=lt(d)+r,n.skewX=b+r,n.skewY=x+r,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[_n]=oo(c)),n.xOffset=n.yOffset=0,n.force3D=Xt.force3D,n.renderTransform=n.svg?hx:ef?of:cx,n.uncache=0,n},oo=function(e){return(e=e.split(" "))[0]+" "+e[1]},ca=function(e,t,n){var i=Tt(t);return lt(parseFloat(t)+parseFloat(ri(e,"x",n+"px",i)))+i},cx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,of(e,t)},di="0deg",Fs="0px",pi=") ",of=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,r=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,b=n.target,x=n.zOrigin,v="",y=d==="auto"&&e&&e!==1||d===!0;if(x&&(u!==di||h!==di)){var M=parseFloat(h)*gs,E=Math.sin(M),C=Math.cos(M),S;M=parseFloat(u)*gs,S=Math.cos(M),o=ca(b,o,E*S*-x),r=ca(b,r,-Math.sin(M)*-x),l=ca(b,l,C*S*-x+x)}m!==Fs&&(v+="perspective("+m+pi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(y||o!==Fs||r!==Fs||l!==Fs)&&(v+=l!==Fs||y?"translate3d("+o+", "+r+", "+l+") ":"translate("+o+", "+r+pi),c!==di&&(v+="rotate("+c+pi),h!==di&&(v+="rotateY("+h+pi),u!==di&&(v+="rotateX("+u+pi),(f!==di||p!==di)&&(v+="skew("+f+", "+p+pi),(_!==1||g!==1)&&(v+="scale("+_+", "+g+pi),b.style[nt]=v||"translate(0, 0)"},hx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,r=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,b=n.forceCSS,x=parseFloat(o),v=parseFloat(r),y,M,E,C,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=gs,c*=gs,y=Math.cos(l)*u,M=Math.sin(l)*u,E=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=gs,S=Math.tan(c-h),S=Math.sqrt(1+S*S),E*=S,C*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),y*=S,M*=S)),y=lt(y),M=lt(M),E=lt(E),C=lt(C)):(y=u,C=f,M=E=0),(x&&!~(o+"").indexOf("px")||v&&!~(r+"").indexOf("px"))&&(x=ri(p,"x",o,"px"),v=ri(p,"y",r,"px")),(_||g||m||d)&&(x=lt(x+_-(_*y+g*E)+m),v=lt(v+g-(_*M+g*C)+d)),(i||s)&&(S=p.getBBox(),x=lt(x+i/100*S.width),v=lt(v+s/100*S.height)),S="matrix("+y+","+M+","+E+","+C+","+x+","+v+")",p.setAttribute("transform",S),b&&(p.style[nt]=S)},ux=function(e,t,n,i,s){var o=360,r=yt(s),l=parseFloat(s)*(r&&~s.indexOf("rad")?_i:1),c=l-i,h=i+c+"deg",u,f;return r&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*ch)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*ch)%o-~~(c/o)*o)),e._pt=f=new Nt(e._pt,t,n,i,c,Yv),f.e=h,f.u="deg",e._props.push(n),f},mh=function(e,t){for(var n in t)e[n]=t[n];return e},fx=function(e,t,n){var i=mh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,r,l,c,h,u,f,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[nt]=t,r=hr(n,1),lr(n,nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nt],o[nt]=t,r=hr(n,1),o[nt]=c);for(l in Vn)c=i[l],h=r[l],c!==h&&s.indexOf(l)<0&&(p=Tt(c),_=Tt(h),u=p!==_?ri(n,l,c,_):parseFloat(c),f=parseFloat(h),e._pt=new Nt(e._pt,r,l,u,f-u,Ba),e._pt.u=_||0,e._props.push(l));mh(r,i)};zt("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(r){return e<2?a+r:"border"+r+a});ro[e>1?"border"+a:a]=function(r,l,c,h,u){var f,p;if(arguments.length<4)return f=o.map(function(_){return Un(r,_,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),r.init(l,p,u)}});var af={name:"css",register:Va,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,r=e.style,l=n.vars.startAt,c,h,u,f,p,_,g,m,d,b,x,v,y,M,E,C;pl||Va(),this.styles=this.styles||Qu(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Wt[g]&&Gu(g,t,n,i,e,s)))){if(p=typeof h,_=ro[g],p==="function"&&(h=h.call(n,i,e,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=or(h)),_)_(this,e,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",ti.lastIndex=0,ti.test(c)||(m=Tt(c),d=Tt(h)),d?m!==d&&(c=ri(e,g,c,d)+d):m&&(h+=m),this.add(r,"setProperty",c,h,i,s,0,0,g),o.push(g),C.push(g,0,r[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],yt(c)&&~c.indexOf("random(")&&(c=or(c)),Tt(c+"")||(c+=Xt.units[g]||Tt(Un(e,g))||""),(c+"").charAt(1)==="="&&(c=Un(e,g))):c=Un(e,g),f=parseFloat(c),b=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),u=parseFloat(h),g in bn&&(g==="autoAlpha"&&(f===1&&Un(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,r.visibility),$n(this,r,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=bn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Vn,x){if(this.styles.save(g),v||(y=e._gsap,y.renderTransform&&!t.parseTransform||hr(e,t.parseTransform),M=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Nt(this._pt,r,nt,0,1,y.renderTransform,y,0,-1),v.dep=1),g==="scale")this._pt=new Nt(this._pt,y,"scaleY",y.scaleY,(b?ps(y.scaleY,b+u):u)-y.scaleY||0,Ba),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(_n,0,r[_n]),h=ax(h),y.svg?Ga(e,h,0,M,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==y.zOrigin&&$n(this,y,"zOrigin",y.zOrigin,d),$n(this,r,g,oo(c),oo(h)));continue}else if(g==="svgOrigin"){Ga(e,h,1,M,0,this);continue}else if(g in sf){ux(this,y,g,f,b?ps(f,b+h):h);continue}else if(g==="smoothOrigin"){$n(this,y,"smooth",y.smooth,h);continue}else if(g==="force3D"){y[g]=h;continue}else if(g==="transform"){fx(this,h,e);continue}}else g in r||(g=As(g)||g);if(x||(u||u===0)&&(f||f===0)&&!Xv.test(h)&&g in r)m=(c+"").substr((f+"").length),u||(u=0),d=Tt(h)||(g in Xt.units?Xt.units[g]:m),m!==d&&(f=ri(e,g,c,d)),this._pt=new Nt(this._pt,x?y:r,g,f,(b?ps(f,b+u):u)-f,!x&&(d==="px"||g==="zIndex")&&t.autoRound!==!1?Jv:Ba),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Zv);else if(g in r)ox.call(this,e,g,c,b?b+h:h);else if(g in e)this.add(e,g,c||e[g],b?b+h:h,i,s);else if(g!=="parseTransform"){rl(g,h);continue}x||(g in r?C.push(g,0,r[g]):C.push(g,1,c||e[g])),o.push(g)}}E&&Yu(this)},render:function(e,t){if(t.tween._time||!ml())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Un,aliases:bn,getSetter:function(e,t,n){var i=bn[t];return i&&i.indexOf(",")<0&&(t=i),t in Vn&&t!==_n&&(e._gsap.x||Un(e,"x"))?n&&lh===n?t==="scale"?ex:Qv:(lh=n||{})&&(t==="scale"?tx:nx):e.style&&!nl(e.style[t])?Kv:~t.indexOf("-")?$v:fl(e,t)},core:{_removeProperty:lr,_getMatrix:_l}};Ft.utils.checkPrefix=As;Ft.core.getStyleSaver=Qu;(function(a,e,t,n){var i=zt(a+","+e+","+t,function(s){Vn[s]=1});zt(e,function(s){Xt.units[s]="deg",sf[s]=1}),bn[i[13]]=a+","+e,zt(n,function(s){var o=s.split(":");bn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Xt.units[a]="px"});Ft.registerPlugin(af);var Ha=Ft.registerPlugin(af)||Ft;Ha.core.Tween;class dx extends el{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ru(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(r){const l=s.parse(JSON.parse(r));t&&t(l)},n,i)}parse(e){return new px(e)}}class px{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=mx(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function mx(a,e,t){const n=Array.from(a),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let r=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)r=0,l-=s;else{const u=gx(h,i,r,l,t);r+=u.offsetX,o.push(u.path)}}return o}function gx(a,e,t,n,i){const s=i.glyphs[a]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const o=new Q0;let r,l,c,h,u,f,p,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=g.length;m<d;)switch(g[m++]){case"m":r=g[m++]*e+t,l=g[m++]*e+n,o.moveTo(r,l);break;case"l":r=g[m++]*e+t,l=g[m++]*e+n,o.lineTo(r,l);break;case"q":c=g[m++]*e+t,h=g[m++]*e+n,u=g[m++]*e+t,f=g[m++]*e+n,o.quadraticCurveTo(u,f,c,h);break;case"b":c=g[m++]*e+t,h=g[m++]*e+n,u=g[m++]*e+t,f=g[m++]*e+n,p=g[m++]*e+t,_=g[m++]*e+n,o.bezierCurveTo(u,f,p,_,c,h);break}}return{offsetX:s.ha*e,path:o}}class ns extends Qa{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}ft.prototype.rotateAroundWorldAxis=function(a,e,t){var n=new ii;const i=new L;i.copy(a).sub(e).normalize(),n.setFromAxisAngle(i,t),this.applyQuaternion(n),this.position.sub(a),this.position.applyQuaternion(n),this.position.add(a)};ft.prototype.rotateAroundWorldAxis2=function(a,e,t){const n=new L;n.copy(a).sub(e).normalize(),this.position.sub(a),this.rotateOnWorldAxis(n,t),this.position.add(a)};const is=(a,e,t)=>a*(1-t)+e*t;let Gr,Bs;const Fn=6;new L(50,50,50);let _x=new L(Fn*1,-Fn,-Fn),vx=new L(20,20,20),gh=new L(-Fn,-Fn,-Fn),_h=new L(-Fn,-Fn,-Fn),Yn;class xx{constructor(e){this.planes=[],this.editor=e,this.createPlanes(),this.dir=1,this.strings=e.strings,this.sizeText=.5}updateGridPlanes(){let e=this.editor.sizeProj*1,t=e+1,n=.1,i=2*t*t+n*n,s=this.sizeText,o=.3*s*Math.sqrt(i);const r=1.01;let l=new er(2*e+2,2*e+2);this.planes[0].geometry.dispose(),this.planes[0].geometry=l,this.planes[0].children[0].children[0].dispose(),this.planes[0].children[0].children[0]=new Ns(2*e,2*e,8947848,10066329),this.planes[0].children[0].children[0].applyMatrix4(this.planes[0].children[0].matrixWorld),this.planes[0].position.set(-e-r,0,0),this.planes[0].children[0].children[0].position.set(-e-r,0,0),this.planes[0].children[1].position.set(-t+o*s*.5,t-o*s*1.5,n),this.planes[0].children[1].scale.set(o,o,o),this.planes[1].geometry.dispose(),this.planes[1].geometry=l,this.planes[1].children[0].children[0].dispose(),this.planes[1].children[0].children[0]=new Ns(2*e,2*e,8947848,10066329),this.planes[1].children[0].children[0].applyMatrix4(this.planes[1].children[0].matrixWorld),this.planes[1].position.set(0,-e-r,0),this.planes[1].children[0].children[0].position.set(0,-e-r,0),this.planes[1].children[1].position.set(-t+o*s*1.5,-t+o*s*1,n),this.planes[1].children[1].scale.set(o,o,o),this.planes[2].geometry.dispose(),this.planes[2].geometry=l,this.planes[2].children[0].children[0].dispose(),this.planes[2].children[0].children[0]=new Ns(2*e,2*e,8947848,10066329),this.planes[2].children[0].children[0].applyMatrix4(this.planes[2].children[0].matrixWorld),this.planes[2].position.set(0,0,-e-r),this.planes[2].children[0].children[0].position.set(0,0,-e-r),this.planes[2].children[1].position.set(-t+o*s*.5,t-o*s*1.5,n),this.planes[2].children[1].scale.set(o,o,o)}createPlanes(){let e=this.editor.sizeProj;const t=1.01;let n=new er(2*e+2,2*e+2),i=new Ws({visible:!0,transparent:!0,opacity:.1,color:16711680});const s=new pt(n,i);s.rotateY(Math.PI/2),s.translateZ(-e-t),s.userData.rot=new L(0,-1,0),s.userData.dir=new L(-1,0,0),this.planes.push(s),i=new Ws({visible:!0,transparent:!0,opacity:.1,color:65280});const o=new pt(n,i);o.translateY(-e-t),o.rotateX(-Math.PI/2),o.userData.rot=new L(1,0,0),o.userData.dir=new L(0,-1,0),this.planes.push(o),i=new Ws({visible:!0,transparent:!0,opacity:.1,color:255});const r=new pt(n,i);r.translateZ(-e-t),r.userData.rot=!1,r.userData.dir=new L(0,0,-1),this.planes.push(r),new dx().load("../assets/fonts/gentilis_regular.typeface.json",_=>{this.font=_;let g=new ns(this.strings.getKey("planeprojec/plan"),{font:_,size:this.sizeText,height:0});const m=[new sr({color:"black",transparent:!0,opacity:.5})];let d=new pt(g,m),b=-e-1,x=e+1,v=.15*Math.sqrt(b*b+x*x+.1*.1);d.position.set(b+.75*v,-x+.5*v,.1),d.scale.set(v,v,v),d.rotateZ(Math.PI/2),o.add(d),o.indexText=o.children.length-1,g=new ns(this.strings.getKey("planeprojec/elevation"),{font:_,size:this.sizeText,height:0}),d=new pt(g,m),b=-e-1,x=e+1,v=.15*Math.sqrt(b*b+x*x+.1*.1),d.position.set(b+.25*v,x-.75*v,.1),d.scale.set(v,v,v),s.add(d),s.indexText=s.children.length-1,g=new ns(this.strings.getKey("planeprojec/profile"),{font:_,size:this.sizeText,height:0}),d=new pt(g,m),b=-e-1,x=e+1,v=.15*Math.sqrt(b*b+x*x+.1*.1),d.position.set(b+.25*v,x-.75*v,.1),d.scale.set(v,v,v),r.add(d),r.indexText=r.children.length-1});let c=new Si,h=new Ns(2*e,2*e,7829367,10066329);c.add(h);let u=new Ns(e+4,2,2228224);u.layers.enableAll(),u.material.color.setHex(7829367),u.material.depthFunc=Lh,u.material.vertexColors=!1,c.rotateX(Math.PI/2),s.add(c);let f=c.clone();r.add(f);let p=c.clone();o.add(p),this.planeY=o,this.planeZ=r,o.userData.angleTot=0,r.userData.angleTot=0}vistas(e,t,n,i,s=1){this.editor=e;let o=Math.PI/2/60,r=Ha.timeline({repeat:-1,repeatDelay:1e-4,onRepeat:()=>{this.planeY.userData.angleTot+Math.PI/2/60>Math.PI/2&&(o=Math.PI/2-this.planeY.userData.angleTot),this.planeY.rotateAroundWorldAxis(this.points[0],this.points[1],s*o),this.planeZ.rotateAroundWorldAxis(this.points[2],this.points[3],s*o),this.planeY.userData.angleTot+=o,this.planeY.userData.angleTot>=Math.PI/2&&(r.pause(0),this.planeY.userData.angleTot=0,this.planeZ.userData.angleTot=0)}}),l={t:0},c;Ha.to(l,{duration:1,t:1,onStart:()=>{c=this.editor.controls.orbit.target.clone()},onUpdate:()=>{this.editor.camera.position.x=is(Gr.x,Bs.x,l.t),this.editor.camera.position.y=is(Gr.y,Bs.y,l.t),this.editor.camera.position.z=is(Gr.z,Bs.z,l.t),this.editor.camera.lookAt(is(c.x,Yn.x,l.t),is(c.y,Yn.y,l.t),is(c.z,Yn.z,l.t))},onComplete:()=>{this.editor.camera.updateProjectionMatrix(),this.editor.controls.orbit.target.set(Yn.x,Yn.y,Yn.z),this.editor.controls.orbit.update(),l.t=0}})}desplegar(e){Gr=e.camera.position.clone(),this.dir==1?(Bs=_x.clone(),Yn=gh.clone(),gh.clone()):(Bs=vx.clone(),Yn=_h.clone(),_h.clone()),this.points=[];const t=6;this.points.push(new L(-t,-t,-t)),this.points.push(new L(-t,-t,t)),this.points.push(new L(-t,t,-t)),this.points.push(new L(-t,-t,-t)),this.vistas(e,this.planes[1],this.planes[2],this.points,this.dir),this.dir*=-1}updateText(e){this.planes[1].children[this.planes[1].indexText].geometry=new ns(e.strings.getKey("planeprojec/plan"),{font:this.font,size:this.sizeText,height:0}),this.planes[0].children[this.planes[0].indexText].geometry=new ns(e.strings.getKey("planeprojec/elevation"),{font:this.font,size:this.sizeText,height:0}),this.planes[2].children[this.planes[2].indexText].geometry=new ns(e.strings.getKey("planeprojec/profile"),{font:this.font,size:this.sizeText,height:0})}}class Gn{constructor(e){this.dom=e}add(){for(let e=0;e<arguments.length;e++){const t=arguments[e];t instanceof Gn?this.dom.appendChild(t.dom):console.error("UIElement:",t,"is not an instance of UIElement.")}return this}remove(){for(let e=0;e<arguments.length;e++){const t=arguments[e];t instanceof Gn?this.dom.removeChild(t.dom):console.error("UIElement:",t,"is not an instance of UIElement.")}return this}clear(){for(;this.dom.children.length;)this.dom.removeChild(this.dom.lastChild)}setId(e){return this.dom.id=e,this}getId(){return this.dom.id}setClass(e){return this.dom.className=e,this}addClass(e){return this.dom.classList.add(e),this}removeClass(e){return this.dom.classList.remove(e),this}setStyle(e,t){for(let n=0;n<t.length;n++)this.dom.style[e]=t[n];return this}setDisabled(e){return this.dom.disabled=e,this}setTextContent(e){return this.dom.textContent=e,this}setInnerHTML(e){this.dom.innerHTML=e}getIndexOfChild(e){return Array.prototype.indexOf.call(this.dom.children,e.dom)}}const yx=["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","verticalAlign","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"];yx.forEach(function(a){const e="set"+a.substring(0,1).toUpperCase()+a.substring(1,a.length);Gn.prototype[e]=function(){return this.setStyle(a,arguments),this}});const Sx=["KeyUp","KeyDown","MouseOver","MouseOut","Click","DblClick","Change","Input"];Sx.forEach(function(a){const e="on"+a;Gn.prototype[e]=function(t){return this.dom.addEventListener(a.toLowerCase(),t.bind(this),!1),this}});class vl extends Gn{constructor(){super(document.createElement("div"))}}class Zn extends vl{constructor(){super(),this.dom.className="Panel"}}class lf extends Gn{constructor(e){super(document.createElement("button")),this.dom.className="Button",this.dom.textContent=e}}const bx=({id:a})=>{const e=new Zn;return e.setId(a),document.body.appendChild(e.dom),{add:t=>{e.dom.appendChild(t.dom)}}};function ha({id:a}){let e=new Zn;return e.setId(a),e}function ss({id:a,cl:e=[],container:t,imgSrc:n,dataTitle:i,selected:s=!0,onClick:o,args:r={}}){const l=document.createElement("img");l.src=`${n}`;const c=new lf;return c.setId(a),c.dom.setAttribute("data-title",i),e.forEach(h=>c.dom.classList.add(h)),c.dom.appendChild(l),c.onClick(()=>{if(o(r),!!s){for(let h=0;h<t.dom.children.length;h++)t.dom.children[h].classList.remove("selected");c.dom.classList.add("selected")}}),t.add(c),c}const Mx=()=>{const a=new Zn;a.setId("TeideLogo"),document.body.appendChild(a.dom);const e=document.createElement("img");e.src="../assets/icons/Teide200x200.png";const t=new lf;return t.dom.setAttribute("data-title","Editorial Teide"),t.dom.appendChild(e),a.add(t),{container:a}};class wx extends Gn{constructor(e,t){super(document.createElement("a")),this.dom.href=t,this.dom.innerHTML=e}}class Tx extends Gn{constructor(e,t){super(document.createElement("a")),this.dom.href=t,this.dom.classList.add("logoTeiDSpace");const n=document.createElement("img");n.src=e,this.dom.appendChild(n);let i=new vl;i.dom.innerHTML="TeiDSpace",i.dom.classList.add("logoText"),this.add(i)}}const Ex=a=>{const e=new Zn;e.setId("menubar"),document.body.appendChild(e.dom);const t=new Zn;t.setClass("menu logo");const n=new Tx("../assets/icons/logo_TEIDSPACE.png","../TeiDSpace/index.html");t.add(n),e.add(t);for(let i=1;i<a.menu.length;i++){const s=a.menu[i];if(s.permission>a.levelPermission)continue;const o=new Zn;o.setClass("menu");const r=new Zn;for(let c=0;c<s.classes.length;c++)r.setClass(s.classes[c]);r.setTextContent(a.strings.getKey(s.title)),o.add(r);const l=new Zn;l.setClass("options"),o.add(l);for(let c=0;c<s.subMenu.length;c++){const h=s.subMenu[c];if(h.permission>a.levelPermission)continue;const u=new vl;for(let p=0;p<h.classes.length;p++)u.setClass(h.classes[p]);const f=new wx(a.strings.getKey(h.title),h.link);u.add(f),l.add(u)}e.add(o)}},vh={type:"change"},ua={type:"start"},xh={type:"end"};class Ax extends Ui{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Ie),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vh),n.update(),s=i.NONE},this.update=function(){const D=new L,$=new ii().setFromUnitVectors(e.up,new L(0,1,0)),V=$.clone().invert(),de=new L,ve=new ii,be=2*Math.PI;return function(){const Se=n.object.position;D.copy(Se).sub(n.target),D.applyQuaternion($),r.setFromVector3(D),n.autoRotate&&s===i.NONE&&S(E()),n.enableDamping?(r.theta+=l.theta*n.dampingFactor,r.phi+=l.phi*n.dampingFactor):(r.theta+=l.theta,r.phi+=l.phi);let De=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(De)&&isFinite(ze)&&(De<-Math.PI?De+=be:De>Math.PI&&(De-=be),ze<-Math.PI?ze+=be:ze>Math.PI&&(ze-=be),De<=ze?r.theta=Math.max(De,Math.min(ze,r.theta)):r.theta=r.theta>(De+ze)/2?Math.max(De,r.theta):Math.min(ze,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=c,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),D.setFromSpherical(r),D.applyQuaternion(V),Se.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||de.distanceToSquared(n.object.position)>o||8*(1-ve.dot(n.object.quaternion))>o?(n.dispatchEvent(vh),de.copy(n.object.position),ve.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",ee),n.domElement.removeEventListener("pointercancel",he),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",he),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,r=new $c,l=new $c;let c=1;const h=new L;let u=!1;const f=new ce,p=new ce,_=new ce,g=new ce,m=new ce,d=new ce,b=new ce,x=new ce,v=new ce,y=[],M={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function S(D){l.theta-=D}function T(D){l.phi-=D}const z=function(){const D=new L;return function(V,de){D.setFromMatrixColumn(de,0),D.multiplyScalar(-V),h.add(D)}}(),k=function(){const D=new L;return function(V,de){n.screenSpacePanning===!0?D.setFromMatrixColumn(de,1):(D.setFromMatrixColumn(de,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(V),h.add(D)}}(),R=function(){const D=new L;return function(V,de){const ve=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;D.copy(be).sub(n.target);let me=D.length();me*=Math.tan(n.object.fov/2*Math.PI/180),z(2*V*me/ve.clientHeight,n.object.matrix),k(2*de*me/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(V*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),k(de*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(D){f.set(D.clientX,D.clientY)}function Z(D){b.set(D.clientX,D.clientY)}function W(D){g.set(D.clientX,D.clientY)}function ne(D){p.set(D.clientX,D.clientY),_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;S(2*Math.PI*_.x/$.clientHeight),T(2*Math.PI*_.y/$.clientHeight),f.copy(p),n.update()}function Q(D){x.set(D.clientX,D.clientY),v.subVectors(x,b),v.y>0?U(C()):v.y<0&&N(C()),b.copy(x),n.update()}function xe(D){m.set(D.clientX,D.clientY),d.subVectors(m,g).multiplyScalar(n.panSpeed),R(d.x,d.y),g.copy(m),n.update()}function se(D){D.deltaY<0?N(C()):D.deltaY>0&&U(C()),n.update()}function H(D){let $=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),$=!0;break}$&&(D.preventDefault(),n.update())}function J(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const D=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);f.set(D,$)}}function le(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{const D=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);g.set(D,$)}}function pe(){const D=y[0].pageX-y[1].pageX,$=y[0].pageY-y[1].pageY,V=Math.sqrt(D*D+$*$);b.set(0,V)}function B(){n.enableZoom&&pe(),n.enablePan&&le()}function Pe(){n.enableZoom&&pe(),n.enableRotate&&J()}function Ce(D){if(y.length==1)p.set(D.pageX,D.pageY);else{const V=fe(D),de=.5*(D.pageX+V.x),ve=.5*(D.pageY+V.y);p.set(de,ve)}_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;S(2*Math.PI*_.x/$.clientHeight),T(2*Math.PI*_.y/$.clientHeight),f.copy(p)}function ae(D){if(y.length===1)m.set(D.pageX,D.pageY);else{const $=fe(D),V=.5*(D.pageX+$.x),de=.5*(D.pageY+$.y);m.set(V,de)}d.subVectors(m,g).multiplyScalar(n.panSpeed),R(d.x,d.y),g.copy(m)}function ye(D){const $=fe(D),V=D.pageX-$.x,de=D.pageY-$.y,ve=Math.sqrt(V*V+de*de);x.set(0,ve),v.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),U(v.y),b.copy(x)}function te(D){n.enableZoom&&ye(D),n.enablePan&&ae(D)}function Y(D){n.enableZoom&&ye(D),n.enableRotate&&Ce(D)}function ee(D){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",_e),n.domElement.addEventListener("pointerup",he)),G(D),D.pointerType==="touch"?He(D):Ee(D))}function _e(D){n.enabled!==!1&&(D.pointerType==="touch"?P(D):Ae(D))}function he(D){ie(D),y.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",he)),n.dispatchEvent(xh),s=i.NONE}function Ee(D){let $;switch(D.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ni.DOLLY:if(n.enableZoom===!1)return;Z(D),s=i.DOLLY;break;case Ni.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;W(D),s=i.PAN}else{if(n.enableRotate===!1)return;X(D),s=i.ROTATE}break;case Ni.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;X(D),s=i.ROTATE}else{if(n.enablePan===!1)return;W(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ua)}function Ae(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ne(D);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(D);break;case i.PAN:if(n.enablePan===!1)return;xe(D);break}}function Me(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(ua),se(D),n.dispatchEvent(xh))}function Ie(D){n.enabled===!1||n.enablePan===!1||H(D)}function He(D){switch(re(D),y.length){case 1:switch(n.touches.ONE){case Fi.ROTATE:if(n.enableRotate===!1)return;J(),s=i.TOUCH_ROTATE;break;case Fi.PAN:if(n.enablePan===!1)return;le(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Fi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),s=i.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ua)}function P(D){switch(re(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ae(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(D),n.update();break;default:s=i.NONE}}function w(D){n.enabled!==!1&&D.preventDefault()}function G(D){y.push(D)}function ie(D){delete M[D.pointerId];for(let $=0;$<y.length;$++)if(y[$].pointerId==D.pointerId){y.splice($,1);return}}function re(D){let $=M[D.pointerId];$===void 0&&($=new ce,M[D.pointerId]=$),$.set(D.pageX,D.pageY)}function fe(D){const $=D.pointerId===y[0].pointerId?y[1]:y[0];return M[$.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",ee),n.domElement.addEventListener("pointercancel",he),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}}const Cx=a=>{const e="TeiDSpace",t={language:"es",permission:100};if(window.localStorage[e]===void 0)window.localStorage[e]=JSON.stringify(t);else{const n=JSON.parse(window.localStorage[e]);for(const i in n)t[i]=n[i]}return{getKey:function(n){return t[n]},setKey:function(){for(let n=0,i=arguments.length;n<i;n+=2)t[arguments[n]]=arguments[n+1];window.localStorage[e]=JSON.stringify(t)},clear:function(){delete window.localStorage[e]}}},Px=a=>{const e={en:{"menubar/views":"Views","menubar/isometric":"Perspective","menubar/pieces":"Pieces","menubar/generator":"Generator","menubar/help":"Help","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"About us...","menubar/soma":"Soma Cube","menubar/somaproject":"Soma Project","menubar/somadevelopment":"Soma Development","menubar/somabuilding":"Soma Building","menubar/somaexercises":"Soma exercices","menubar/objects":"Object","menubar/create":"Create Object","menubar/examples":"Examples","menubar/exercices":"Exercices","menubar/correction":"Correction","menubar/soma6viewsexamples":"Examples 6 views","menubar/soma6viewsexercises":"Exercises 6 views","toolbar/translate":"Translate","toolbar/rotate":"Rotate","toolbar/scale":"Scale","modelbar/cube":"Cube","modelbar/cube1":"Cube 1","modelbar/cube2":"Cube 2","modelbar/cube3":"Cube 3","modelbar/icosahedron":"Icosahedron","select/vertices":"Vertices","select/edges":"Edges","select/objects":"Objects","CSG/selected":"Selecteds: ","CSG/addition":"Addition A \u222A B","CSG/subtraction":"Subtraction A - B","CSG/reversesubtraction":"Reverse Subtraction B - A","CSG/difference":"Difference A \u2295 B","CSG/intersection":"Intersection","file/save":"save","file/load":"load","planeprojec/plan":"Plan","planeprojec/elevation":"Elevation","planeprojec/profile":"Profile","line/visible":"Visible Line","line/hidden":"Hidden Line","line/delete":"Delete Line","line/change":"Change","line/create":"Create","line/red":"Red line","line/black":"Black line","views/open":"Open Views","views/close":"Close Views",solutions:"Solution",opacity:"Opacity","object/base":"Object base","object/auxiliar":"Auxiliar Object","clipboard/copy":"Copy","clipboard/paste":"Paste","soma/cube":"Soma cube","soma/piece":"Piece","number/exercise":"Exercise","number/example":"Example","configBar/size":"Size","configBar/edges":"Edges","configBar/color":"Color","configBar/shadow":"Shadow","configBar/visible":"Visible","configBar/development":"Development"},es:{"menubar/views":"Vistas","menubar/isometric":"Perspectiva","menubar/pieces":"Piezas","menubar/generator":"Generador","menubar/help":"Ayuda","menubar/helptutorials":"Tutoriales","menubar/helpaboutus":"Acerca de...","menubar/soma":"Cubo Soma","menubar/somaproject":"Proyecto Soma","menubar/somadevelopment":"Desarrollo Soma ","menubar/somabuilding":"Construcci\xF3n Soma","menubar/somaexercises":"Soma ejercicios","menubar/soma6viewsexamples":"Ejemplos 6 vistas","menubar/soma6viewsexercises":"Ejercicios 6 vistas","menubar/objects":"Objeto","menubar/create":"Crear Objetos","menubar/examples":"Ejemplos","menubar/exercices":"Ejercicios","menubar/correction":"Correcci\xF3n","toolbar/translate":"Trasladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cubo","modelbar/cube1":"Cubo 1","modelbar/cube2":"Cubo 2","modelbar/cube3":"Cubo 3","modelbar/icosahedron":"Icosaedro","select/vertices":"V\xE9rtices","select/edges":"Aristas","select/objects":"Objetos","CSG/selected":"Seleccionados: ","CSG/addition":"Adici\xF3n A \u222A B","CSG/subtraction":"Sustracci\xF3n A - B","CSG/reversesubtraction":"Sustracci\xF3n inversa B - A","CSG/difference":"Diferencia A \u2295 B","CSG/intersection":"Intersecci\xF3n","file/save":"Guardar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Alzado","planeprojec/profile":"Perfil","line/visible":"L\xEDnea Visible","line/hidden":"L\xEDnea Oculta","line/delete":"Borrar L\xEDnea","line/change":"Cambiar","line/create":"Crear","line/red":"L\xEDnea roja","line/black":"L\xEDnea negra","views/open":"Abir Vistas","views/close":"Cerrar Vistas",solutions:"Soluci\xF3n",opacity:"Opacidad","object/base":"Objeto base","object/auxiliar":"Objeto auxiliar","clipboard/copy":"Copiar","clipboard/paste":"Pegar","soma/cube":"Cubo Soma","soma/piece":"Pieza","number/exercise":"Ejercicio","number/example":"Ejemplo","configBar/size":"Tama\xF1o","configBar/edges":"Aristas","configBar/color":"Color","configBar/shadow":"Sombra","configBar/visible":"Visible","configBar/development":"Desarrollo"},ca:{"menubar/views":"Vistes","menubar/isometric":"Perspectiva","menubar/pieces":"Peces","menubar/generator":"Generador","menubar/help":"Ajuda","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"Sobre...","menubar/soma":"Cub Soma","menubar/somaproject":"Projecte Soma","menubar/somadevelopment":"Desenvolupament Soma ","menubar/somabuilding":"Construcci\xF3 Soma","menubar/somaexercises":"Soma exercicis","menubar/objects":"Objecte","menubar/create":"Crear Objectes","menubar/examples":"Exemples","menubar/exercices":"Exercicis","menubar/correction":"Correcci\xF3","menubar/soma6viewsexamples":"Exemples 6 vistes","menubar/soma6viewsexercises":"Exercicis 6 vistes","toolbar/translate":"Traslladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cub","modelbar/cube1":"Cub 1","modelbar/cube2":"Cub 2","modelbar/cube3":"Cub 3","modelbar/icosahedron":"Icosaedre","select/vertices":"V\xE8rtexs","select/edges":"Arestes","select/objects":"Objectes","CSG/selected":"Seleccionats: ","CSG/addition":"Adici\xF3 A \u222A B","CSG/subtraction":"Sustracci\xF3 A - B","CSG/reversesubtraction":"Sustracci\xF3 inversa B - A","CSG/difference":"Difer\xE8ncia A \u2295 B","CSG/intersection":"Intersecci\xF3","file/save":"Desar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Al\xE7at","planeprojec/profile":"Perfil","line/visible":"L\xEDnia Visible","line/hidden":"L\xEDnia Oculta","line/delete":"Esborrar L\xEDnia","line/change":"Canviar","line/create":"Crear","line/red":"L\xEDnia vermella","line/black":"L\xEDnia negra","views/open":"Obir Vistes","views/close":"Tancar Vistes",solutions:"Soluci\xF3",opacity:"Opacitat","object/base":"Objecte base","object/auxiliar":"Objecte auxiliar","clipboard/copy":"Copia","clipboard/paste":"Enganxa","soma/cube":"Cub Soma","soma/piece":"Pe\xE7a","number/exercise":"Exercici","number/example":"Exemple","configBar/size":"Tamany","configBar/edges":"Arestes","configBar/color":"Color","configBar/shadow":"Ombra","configBar/visible":"Visible","configBar/development":"Desenvolupament"}};return{getKey:function(t){return e[a.getKey("language")][t]||"???"}}},Lx=()=>{const t=1.2833333333333334,n=t*1.5;return{sizeProj:6,configVistas:[{axis:"x",dir:1,color:"red",name:"alzado",rotate:!1,far:300,dim:{left:-t*6,right:t*6,top:t*6,bottom:-t*6},pos:{x:-6,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",rotate:!1,far:300,dim:{left:-t*6,right:t*6,top:t*6,bottom:-t*6},pos:{x:0,y:0,z:-6},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",rotate:!1,far:300,dim:{left:-t*6,right:t*6,top:t*6,bottom:-t*6},pos:{x:0,y:-6,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",rotate:!0,far:300,dim:{left:-n*6,right:n*6,top:n*6,bottom:-n*6},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]}};class Dx{constructor(e,t=window){$e(this,"intersect",(e,t,n)=>(this.mouse.x=e.offsetX/e.target.clientWidth*2-1,this.mouse.y=-(e.offsetY/e.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,t),this.raycaster.intersectObjects(n,!1)));$e(this,"initListeners",()=>{window.addEventListener("keydown",e=>{switch(e.key.toUpperCase()){case"J":this.toJSON();break;case"R":this.JSONtoVar();break;case"S":saveObjects();break;case"L":let t=document.createElement("input");t.type="file",t.onchange=n=>{const i=t.files[0].name;this.read("./exercises/",i)},t.click();break;case"M":this.read();break}})});$e(this,"initConfigVistas",()=>{const e=this.sizeProj*1,t=1.2,n=t*1.5;this.configVistas=[{axis:"x",dir:1,color:"red",name:"alzado",dim:{left:-t*e,right:t*e,top:t*e,bottom:-t*e},pos:{x:-e,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",dim:{left:-t*e,right:t*e,top:t*e,bottom:-t*e},pos:{x:0,y:0,z:-e},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",dim:{left:-t*e,right:t*e,top:t*e,bottom:-t*e},pos:{x:0,y:-e,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",dim:{left:-n*e,right:n*e,top:n*e,bottom:-n*e},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]});$e(this,"initScene",()=>{this.scene=new d0;const e=13421772;this.scene.background=new Ve(e)});$e(this,"initRenderer",()=>{this.allCanvas=[],this.allRenderer=[];for(let e=0;e<this.configVistas.length;e++){const t=new Kh({antialias:!0,alpha:!0});t.setPixelRatio(window.devicePixelRatio);let n;this.configVistas[e].name===null?(document.body.appendChild(t.domElement),n=t.domElement):(n=document.getElementById(this.configVistas[e].name),n.appendChild(t.domElement)),this.allCanvas.push(n),n.addEventListener("dblclick",i=>{const s=this.intersect(i,this.allCameras[e],this.linesSegments,!1);s.length>0&&(this.LineDashed=s[s.length-1].object.material.gapSize,this.Line.setLineReset(),this.Line.setLineSelected(s[s.length-1].object,e,this.LineDashed),this.Line.points=[this.Line.segment.point1,this.Line.segment.point2],this.LineDashed==0?(this.visibleLine.classList.add("selected"),this.hiddenLine.classList.remove("selected")):(this.visibleLine.classList.remove("selected"),this.hiddenLine.classList.add("selected")))}),t.setSize(n.clientWidth,n.clientHeight),this.allRenderer.push(t),window.addEventListener("resize",()=>{for(let i=0;i<this.allRenderer.length;i++)this.allRenderer[i].setSize(this.allCanvas[i].clientWidth,this.allCanvas[i].clientHeight)})}});$e(this,"initCamera",()=>{this.allCameras=[];for(let e=0;e<this.configVistas.length;e++){const t=this.allCanvas[e].clientWidth/(this.allCanvas[e].clientHeight-16),n=t>=1?t:1,i=t>=1?1:1/t,s=new Ya(n*this.configVistas[e].dim.left,n*this.configVistas[e].dim.right,i*this.configVistas[e].dim.top,i*this.configVistas[e].dim.bottom,.1,this.configVistas[e].far);s.position.set(this.configVistas[e].pos.x,this.configVistas[e].pos.y,this.configVistas[e].pos.z),s.lookAt(new L(this.configVistas[e].look.x,this.configVistas[e].look.y,this.configVistas[e].look.z)),s.up.set(this.configVistas[e].up.x,this.configVistas[e].up.y,this.configVistas[e].up.z),s.aspect=t,this.allCameras.push(s)}window.addEventListener("resize",this.updateCamera)});$e(this,"updateCamera",()=>{for(let e=0;e<this.allCameras.length;e++){const t=this.allCanvas[e].clientWidth/(this.allCanvas[e].clientHeight-16),n=t>=1?t:1,i=t>=1?1:1/t,s=this.allCameras[e];s.left=n*this.configVistas[e].dim.left,s.right=n*this.configVistas[e].dim.right,s.top=i*this.configVistas[e].dim.top,s.bottom=i*this.configVistas[e].dim.bottom,s.position.set(this.configVistas[e].pos.x,this.configVistas[e].pos.y,this.configVistas[e].pos.z),s.aspect=t,s.updateProjectionMatrix(),this.controls.orbits[e].update()}});$e(this,"initLights",()=>{let e=new au(12303291);this.scene.add(e);let t=new Ea(16777215,.6);t.position.set(15,10,6),t.castShadow=!0,t.shadow.mapSize=new ce(1024*2,1024*2),t.shadow.camera.top=34,t.shadow.camera.bottom=-34,t.shadow.camera.left=-34,t.shadow.camera.right=34,t.shadow.camera.near=-20,t.shadow.camera.far=80,t.shadow.bias=-.002,t.shadow.radius=3,t.shadow.blurSamples=25,this.scene.add(t)});$e(this,"initControls",()=>{for(let e=0;e<this.configVistas.length;e++){const t=new Ax(this.allCameras[e],this.allCanvas[e]);t.enablePan=!1,t.enableRotate=this.configVistas[e].rotate,t.target.set(this.configVistas[e].look.x,this.configVistas[e].look.y,this.configVistas[e].look.z),t.update(),this.controls.orbits.push(t)}});$e(this,"initConfig",()=>{const e=new URLSearchParams(window.location.search),t=e.get("lang");this.levelPermission=e.get("perm"),this.config=Cx(),t!==null&&this.config.setKey("language",t),this.levelPermission!==null?this.config.setKey("permission",this.levelPermission):this.levelPermission=this.config.getKey("permission"),this.strings=Px(this.config)});this.BLACK={r:0,g:0,b:0},this.YELLOW={r:255,g:255,b:0},this.RED={r:255,g:0,b:0},this.BLUE={r:0,g:0,b:255},this.configVistas=e.configVistas,this.sizeProj=e.sizeProj,this.raycaster=new $0,this.raycaster.params.Points.threshold=.25,this.raycaster.params.Line.threshold=.25,this.controls={orbits:[]},this.mouse=new ce,this.initScene(),this.initRenderer(),this.initCamera(),this.initLights(),this.initControls(),this.initConfig()}}const Vx=new Oi,Gx=new L;ue.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ce(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};dn.line={uniforms:Hh.merge([ue.common,ue.fog,ue.line]),vertexShader:`
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
		`};const Hx=new L,Wx=new L,jx=new st,qx=new st,Xx=new st,Yx=new L,Zx=new it,Jx=new Yr,Kx=new L,$x=new Oi,Qx=new Ps,ey=new st;class Rx extends On{constructor(e=[0,0,0,0,0,0],t=0,n=0,i=1){let s=new Ke().setAttribute("position",new Et(new Float32Array([e[0],e[1],e[2],e[3],e[4],e[5]]),3));super(s,new Xs({color:t,dashSize:.15,gapSize:n})),this.computeLineDistances();let o=new gn({color:t,size:i}),r=new Ke;r.setAttribute("position",new Et(new Float32Array([e[0],e[1],e[2]]),3)),this.point1=new Nn(r,o),o=new gn({color:t,size:i}),r=new Ke,r.setAttribute("position",new Et(new Float32Array([e[3],e[4],e[5]]),3)),this.point2=new Nn(r,o),this.points=[this.point1,this.point2]}updatePosition(e,t=0,n=!1,i){t*=3;const s=this.geometry.attributes.position.array;if(!n&&s[t+0]==Math.round(e.x)&&s[t+1]==Math.round(e.y)&&s[t+2]==Math.round(e.z))return;const o=t!=0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,r=t!=0?this.point1:this.point2,l=t==0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,c=t==0?this.point1:this.point2;s[t+0]=l[0]=Math.round(e.x),s[t+1]=l[1]=Math.round(e.y),s[t+2]=l[2]=Math.round(e.z),c.visible=!0,c.geometry.computeBoundingSphere(),c.geometry.attributes.position.needsUpdate=!0,n&&(t=t==0?3:0,s[t+0]=o[0]=l[0],s[t+1]=o[1]=l[1],s[t+2]=o[2]=l[2],this.visible=!0,r.visible=!0,r.geometry.computeBoundingSphere(),r.geometry.attributes.position.needsUpdate=!0),this.computeLineDistances(),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0}updateColor({r:e,g:t,b:n}){this.material.color.r=this.points[0].material.color.r=this.points[1].material.color.r=e,this.material.color.g=this.points[0].material.color.g=this.points[1].material.color.g=t,this.material.color.b=this.points[0].material.color.b=this.points[1].material.color.b=n}}const Ix=a=>({selectedSegment:!1,segment:null,selectedPoint:!1,points:null,npoint:0,handler:{down:[],move:[],up:[]},setLineSelected:function(e,t,n=0){this.selectedPoint=!1,this.selectedSegment=!0,this.segment=e,this.originalColorSegment={r:e.material.color.r,g:e.material.color.g,b:e.material.color.b},this.segment.material.gapSize=n,this.segment.updateColor(a.BLUE),this.segment.points[0].material.size=8,this.segment.points[1].material.size=8},setLineReset:function(){this.selectedPoint=!1,this.selectedSegment=!1,this.segment.updateColor(this.segment.userData.color),this.segment.points[0].material.size=1,this.segment.points[1].material.size=1},setPointsColor:function({color1:e,color2:t}){let n=this.npoint;n==null&&(n=0),this.setPointColor({color:e,n}),n=(n+1)%2,this.setPointColor({color:t,n})},setPointColor:function({color:e,n:t}){this.points[t].material.color.r=e.r,this.points[t].material.color.g=e.g,this.points[t].material.color.b=e.b},setSegmentColor:function({color:e}){this.segment.material.color.r=e.r,this.segment.material.color.g=e.g,this.segment.material.color.b=e.b},createHandler:function(){for(let e=0;e<a.allCanvas.length;e++){const t=a.allCanvas[e];this.handler.down.push(this.pointerdown.bind(null,this,e)),t.addEventListener("pointerdown",this.handler.down[e]),this.handler.move.push(this.pointermove.bind(null,this,e)),t.addEventListener("pointermove",this.handler.move[e]),this.handler.up.push(this.pointerup.bind(null,this)),t.addEventListener("pointerup",this.handler.up[e])}},pointerClamp(e,t,n){t==n[0][0]&&(e.y=Math.max(-a.sizeProj,Math.min(a.sizeProj,e.y)),e.z=Math.max(-a.sizeProj,Math.min(a.sizeProj,e.z))),t==n[1][0]&&(e.x=Math.max(-a.sizeProj,Math.min(a.sizeProj,e.x)),e.y=Math.max(-a.sizeProj,Math.min(a.sizeProj,e.y))),t==n[2][0]&&(e.x=Math.max(-a.sizeProj,Math.min(a.sizeProj,e.x)),e.z=Math.max(-a.sizeProj,Math.min(a.sizeProj,e.z)))},pointerdown:function(e,t,n){if(e.selectedSegment&&!e.selectedPoint){const i=a.intersect(n,a.allCameras[t],e.points);i.length>0?e.npoint=i[0].object.uuid==e.points[0].uuid?0:1:e.setLineReset(),e.selectedPoint=i.length>0}if(!e.selectedPoint){const i=a.intersect(n,a.allCameras[t],a.canvasPlanes[t]);if(i.length>0){const s=i[0].point.round();e.pointerClamp(s,i[0].object,a.canvasPlanes);const o=new Rx([s.x,s.y,s.z,s.x,s.y,s.z],16777215,a.LineDashed);o.userData.indexPlane=t,o.userData.color=a.BLACK,a.scene.add(o,o.point1,o.point2),a.linesSegments.push(o),e.points=[o.point1,o.point2],e.npoint=0,e.setLineSelected(o,t,a.LineDashed)}e.selectedPoint=i.length>0}e.selectedPoint&&e.setPointsColor({color1:a.RED,color2:a.BLUE})},pointermove:function(e,t,n){if(!!e.selectedSegment)if(e.selectedPoint){const i=a.intersect(n,a.allCameras[t],a.canvasPlanes[t]);if(i.length>0){const s=i[0].point.round();e.pointerClamp(s,i[0].object,a.canvasPlanes),e.segment.updatePosition(i[0].point,e.npoint,!1,t,a.sizeProj)}}else{const i=a.intersect(n,a.allCameras[t],e.points);if(i.length>0){const s=i[0].object.uuid==e.points[0].uuid?0:1;e.setPointColor({color:a.RED,n:s})}else e.setPointsColor({color1:a.BLUE,color2:a.BLUE})}},pointerup:function(e){if(e.segment==null)return;e.selectedPoint=!1,e.setPointColor({color:a.BLUE,n:e.npoint});const t=e.segment.geometry.attributes.position.array;if(!(Math.abs(t[0]-t[3+0])+Math.abs(t[1]-t[3+1])+Math.abs(t[2]-t[3+2])>0)){for(let n=0;n<a.linesSegments.length;n++)if(e.segment.uuid==a.linesSegments[n].uuid){e.setLineReset(),a.scene.remove(e.segment.point1),a.scene.remove(e.segment.point2),a.scene.remove(e.segment),a.linesSegments.splice(n,1);return}}}});class yh extends Ke{constructor(t=null,n=1){super();$e(this,"addFace",(t,n,i,s=new L)=>this.faces.push({a:t,b:n,c:i,normal:s,splitted:!1}));this.type="BufferGeometry",t!=null&&(this.thresholdDot=Math.cos(Math.PI/180*n),this.geometry=t,t.attributes.position!==void 0&&this.update(t,n))}fromBufferGeometry(t){if(t.attributes.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;this.vertices=[],this.faces=[];const i=t.getIndex(),s=t.getAttribute("position"),o=i!==null?i.count:s.count;for(let l=0,c=o,h=this.vertices;l<c;l++)h.push(new L().fromBufferAttribute(s,l));const r=t.groups;if(r.length>0)for(let l=0,c=r.length;l<c;l++){const h=r[l],u=h.start,f=h.count;for(let p=u,_=u+f;p<_;p+=3)i!==null?this.addFace(i.getX(p),i.getX(p+1),i.getX(p+2)):this.addFace(p,p+1,p+2)}else for(let l=0;l<o;l+=3)i!==null?this.addFace(i.getX(l),i.getX(l+1),i.getX(l+2)):this.addFace(l,l+1,l+2);return this}computeFaceNormals(){const t=new L;for(let n=0,i=this.faces.length;n<i;n++){const s=this.faces[n],o=this.vertices[s.a],r=this.vertices[s.b],l=this.vertices[s.c];t.subVectors(o,r),s.normal.subVectors(l,r),s.normal.cross(t).normalize()}return this}mergeVertices(t=4){const n=Math.pow(10,t),i=c=>{const h=~~(c.x*n),u=~~(c.y*n),f=~~(c.z*n);return`${h},${u},${f}`},s={},o=[],r=[];for(let c=0,h=0,u=this.vertices.length;c<u;c++){const f=this.vertices[c],p=i(f);s[p]===void 0?(s[p]=c,o.push(f),r[c]=h++):r[c]=r[s[p]]}const l=[];for(let c=0,h=this.faces.length;c<h;c++){const u=this.faces[c];u.a=r[u.a],u.b=r[u.b],u.c=r[u.c];const f=[u.a,u.b,u.c,u.a,u.b,u.c];for(let p=0;p<3;p++)if(f[p]===f[p+1]){l.push(c);break}}for(let c=0,h=l.length,u=this.faces;c<h;c++)u.splice(l[c],1);return this.vertices=o,this}update1(t=null){if(t===null||t.attributes.position===void 0)return;const n=[0,0],i={},s=["a","b","c","a","b","c"],o=1e-10,r=.01,l=(_,g)=>_-g;this.fromBufferGeometry(t).mergeVertices().computeFaceNormals();const c=this.vertices,h=this.faces,u=new L,f=new Yr;for(let _=0;_<h.length&&_<2e4;_++){const g=h[_];for(let m=0;m<3;m++){n[0]=g[s[m]],n[1]=g[s[m+1]];const d=c[n[0]],b=c[n[1]],x=f.set(d,b).distanceSq()+r;for(let v=0,y=c.length;v<y;v++){if(v===n[0]||v===n[1])continue;let M=c[v],E=M.distanceToSquared(d);if(!(E<o||E>x)&&(E=M.distanceToSquared(b),!(E<o||E>x)&&(f.closestPointToPoint(M,!0,u),u.distanceToSquared(M)<o))){g.splitted=!0,this.addFace(v,g[s[m+2]],g[s[m]],g.normal),this.addFace(v,g[s[m+2]],g[s[m+1]],g.normal);break}}if(g.splitted)break}}for(let _=0,g=h.length;_<g;_++){const m=h[_];if(!m.splitted)for(let d=0;d<3;d++){n[0]=m[s[d]],n[1]=m[s[d+1]],n.sort(l);const b=n.toString();i[b]===void 0?i[b]={vert1:n[0],vert2:n[1],face1:_}:h[i[b].face1].normal.dot(m.normal)>this.thresholdDot&&delete i[b]}}const p=[];for(let _ in i){let g=i[_],m=c[g.vert1];p.push(m.x,m.y,m.z),m=c[g.vert2],p.push(m.x,m.y,m.z)}this.setAttribute("position",new Ye(p,3))}updateFunciona(t=null,n=1){if(t===null||t.attributes.position===void 0)return;const i=Math.cos(Math.PI/180*n),s=[0,0],o={},r={},l=["a","b","c","a","b","c"],c=1e-10,h=.01;this.fromBufferGeometry(t).mergeVertices().computeFaceNormals();const u=this.vertices,f=this.faces;for(let b=0;b<f.length&&b<2e4;b++){const x=f[b];for(let v=0;v<3;v++){s[0]=x[l[v]],s[1]=x[l[v+1]];const y=u[s[0]],M=u[s[1]],E=new Yr(y,M),C=y.distanceToSquared(M)+h;for(let S=0,T=u.length;S<T;S++){if(S===s[0]||S===s[1])continue;let z=u[S];const k=z.distanceToSquared(y);if(k<c||k>C)continue;const R=z.distanceToSquared(M);if(R<c||R>C)continue;let U=new L;if(E.closestPointToPoint(z,!0,U),U.distanceToSquared(z)<c){x.splitted=!0,this.addFace(S,x[l[v+2]],x[l[v]],x.normal),this.addFace(S,x[l[v+2]],x[l[v+1]],x.normal);break}}if(x.splitted)break}}const p=new L,_=new L;for(let b=0,x=f.length;b<x;b++){const v=f[b];if(!v.splitted)for(let y=0;y<3;y++){s[0]=v[l[y]],s[1]=v[l[y+1]],s.sort((E,C)=>E-C);const M=s.toString();if(o[M]===void 0)o[M]={vert1:s[0],vert2:s[1],face1:b,face2:void 0},r[s[0]]==null&&(r[s[0]]={});else if(f[o[M].face1].normal.dot(v.normal)>i)delete o[M];else{p.subVectors(u[s[0]],u[s[1]]).normalize();let E=!0;for(let C in r[s[0]]){const S=r[s[0]][C];if(_.subVectors(u[s[0]],u[S.vert2]).normalize(),Math.abs(p.dot(_))>=i){r[s[1]]==null&&(r[s[1]]={}),r[s[1]][S.vert2]={vert1:s[1],vert2:S.vert2,splitted:!1},r[S.vert2][s[1]]={vert1:S.vert2,vert2:s[1],splitted:!1},delete r[s[0]][S.vert2],delete r[S.vert2][s[0]],E=!1;break}}E&&(r[s[0]]==null&&(r[s[0]]={}),r[s[1]]==null&&(r[s[1]]={}),r[s[0]][s[1]]={vert1:s[0],vert2:s[1],splitted:!0},r[s[1]][s[0]]={vert1:s[1],vert2:s[0],splitted:!0})}}}let g=!1,m=Object.keys(r);for(let b=0;b<m.length;b++){const x=m[b];for(let v in r[x])if(!(r[x][v].vert1>=r[x][v].vert2)){for(let y in r[v]){if(r[x][v].vert1>=r[v][y].vert2)continue;const M=u[r[x][v].vert1],E=u[r[x][v].vert2];p.subVectors(E,M).normalize(),g=!1;const C=u[r[v][y].vert2];if(_.subVectors(E,C).normalize(),p.dot(_)<-i){r[x][y]={vert1:r[x][v].vert1,vert2:r[v][y].vert2,splitted:!0},r[y]==null&&(r[y]={}),r[y][x]={vert1:r[v][y].vert2,vert2:r[x][v].vert1,splitted:!0},delete r[x][v],delete r[v][x],delete r[v][y],delete r[y][v],b--,g=!0;break}}if(g)break}}let d=[];for(let b in r)for(let x in r[b]){const v=r[b][x];if(v.vert1>=v.vert2)continue;let y=u[v.vert1];d.push(y.x,y.y,y.z),y=u[v.vert2],d.push(y.x,y.y,y.z)}this.setAttribute("position",new Ye(d,3))}update(t=null,n=1){if(t==null||t.attributes.position===void 0)return;this.calculate=!0;const i=Math.cos(Math.PI/180*n),s=[0,0],o={},r={},l=["a","b","c","a","b","c"],c=1e-10,h=.01,u=(x,v)=>x-v;this.fromBufferGeometry(t).mergeVertices().computeFaceNormals();const f=this.vertices,p=this.faces;for(let x=0;x<p.length&&x<2e4;x++){const v=p[x];for(let y=0;y<3;y++){s[0]=v[l[y]],s[1]=v[l[y+1]];const M=f[s[0]],E=f[s[1]],C=new Yr(M,E),S=M.distanceToSquared(E)+h;for(let T=0,z=f.length;T<z;T++){if(T===s[0]||T===s[1])continue;let k=f[T];const R=k.distanceToSquared(M);if(R<c||R>S)continue;const U=k.distanceToSquared(E);if(U<c||U>S)continue;let N=new L;if(C.closestPointToPoint(k,!0,N),N.distanceToSquared(k)<c){v.splitted=!0,this.addFace(T,v[l[y+2]],v[l[y]],v.normal),this.addFace(T,v[l[y+2]],v[l[y+1]],v.normal);break}}if(v.splitted)break}}const _=new L,g=new L;for(let x=0,v=p.length;x<v;x++){const y=p[x];if(!y.splitted)for(let M=0;M<3;M++){s[0]=y[l[M]],s[1]=y[l[M+1]],s.sort(u);const E=s.toString();if(o[E]===void 0)o[E]={vert1:s[0],vert2:s[1],face1:x,face2:void 0};else if(p[o[E].face1].normal.dot(y.normal)>i)delete o[E];else{_.subVectors(f[s[0]],f[s[1]]).normalize();let C=!0;for(let S in r[s[0]]){const T=r[s[0]][S];if(g.subVectors(f[s[0]],f[T.vert2]).normalize(),Math.abs(_.dot(g))>=i){r[s[1]]==null&&(r[s[1]]={}),r[s[1]][T.vert2]={vert1:s[1],vert2:T.vert2,splitted:!1},r[T.vert2][s[1]]={vert1:T.vert2,vert2:s[1],splitted:!1},delete r[s[0]][T.vert2],delete r[T.vert2][s[0]],C=!1;break}}C&&(r[s[0]]==null&&(r[s[0]]={}),r[s[0]][s[1]]={vert1:s[0],vert2:s[1],splitted:!0},r[s[1]]==null&&(r[s[1]]={}),r[s[1]][s[0]]={vert1:s[1],vert2:s[0],splitted:!0})}}}let m=!1;const d=Object.keys(r);for(let x=0,v=d.length;x<v;x++){const y=d[x];for(let M in r[y]){const E=r[y];if(!(E[M].vert1>=E[M].vert2)){for(let C in r[M]){if(r[y][M].vert1>=r[M][C].vert2)continue;const S=r[M],T=E[M],z=f[T.vert1],k=f[T.vert2];_.subVectors(z,k).normalize();const R=f[r[M][C].vert2];if(g.subVectors(k,R).normalize(),m=!1,_.dot(g)>i){E[C]={vert1:T.vert1,vert2:S[C].vert2,splitted:!0},r[C]==null&&(r[C]={}),r[C][y]={vert1:S[C].vert2,vert2:T.vert1,splitted:!0},delete E[M],delete S[y],delete S[C],delete r[C][M],x--,m=!0;break}}if(m)break}}}let b=[];for(let x in r)for(let v in r[x]){const y=r[x][v];if(y.vert1>=y.vert2)continue;let M=f[y.vert1];b.push(M.x,M.y,M.z),M=f[y.vert2],b.push(M.x,M.y,M.z)}this.setAttribute("position",new Ye(b,3)),this.calculate=!1}updateLines(){const t=this.hashLine,n=this.vertices,i=[];for(let s in t)if(!(Object.keys(t[s]).length<1))for(let o in t[s]){const r=t[s][o];let l=n[r.vert1];i.push(l.x,l.y,l.z),l=n[r.vert2],i.push(l.x,l.y,l.z)}this.setAttribute("position",new Ye(i,3))}}class Sh{constructor(e,t,n=new Ls(2,2,2),i=!0,s=!0){$e(this,"object",()=>({children:[],geometry:{attributes:{normal:[],position:[]},boundingSphere:{center:{x:0,y:0,z:0},radius:0}},matrixWorld:{elements:[]},position:{x:0,y:0,z:0}}));this.linesPlanesProj=[[],[],[]],this.planes=t,this.scene=e.scene,this.camera=e.camera,this.points=[],this.lines=[],this.geometryMap={},this.verticesVisibles=i,this.raycaster=e.raycaster,this.addObject(n),i?this.addVertices():this.addVerticesConfig(),this.addEdges(),s&&this.addProject()}copyBasicObject(e,t){let n;if(t.geometry.attributes.normal!=null){n=t.geometry.attributes.normal.array;for(let i=0;i<n.length;i++)e.geometry.attributes.normal.push(n[i])}n=t.geometry.attributes.position.array;for(let i=0;i<n.length;i++)e.geometry.attributes.position.push(n[i]);t.geometry.boundingSphere!=null&&(e.geometry.boundingSphere.center.x=t.geometry.boundingSphere.center.x,e.geometry.boundingSphere.center.y=t.geometry.boundingSphere.center.y,e.geometry.boundingSphere.center.z=t.geometry.boundingSphere.center.z,e.geometry.boundingSphere.raius=this.cube.geometry.boundingSphere.radius),n=this.cube.matrixWorld.elements;for(let i=0;i<n.length;i++)e.matrixWorld.elements.push(n[i]);return e.position.x=t.position.x,e.position.y=t.position.y,e.position.z=t.position.z,e}copyObject(){const e=this.object();let t=this.cube.children;for(let n=0;n<t.length;n++){const i=this.object();e.children.push(this.copyBasicObject(i,t[n]))}return this.copyBasicObject(e,this.cube),e}undoBasicObject(e,t){console.log(e,t);let n;if(t.geometry.attributes.normal.length>0){n=t.geometry.attributes.normal;for(let i=0;i<n.length;i++)e.geometry.attributes.normal.array[i]=n[i]}n=t.geometry.attributes.position;for(let i=0;i<n.length;i++)e.geometry.attributes.position.array[i]=n[i];e.geometry.boundingSphere!=null&&(e.geometry.boundingSphere.center.x=t.geometry.boundingSphere.center.x,e.geometry.boundingSphere.center.y=t.geometry.boundingSphere.center.y,e.geometry.boundingSphere.center.z=t.geometry.boundingSphere.center.z),n=t.matrixWorld.elements;for(let i=0;i<n.length;i++)e.matrixWorld.elements[i]=n[i];e.position.x=t.position.x,e.position.y=t.position.y,e.position.z=t.position.z}undoObject(e){console.log(e);let t=this.cube.children;for(let n=0;n<t.length;n++)this.undoBasicObject(t[n],e.children[n]),t[n].geometry.attributes.position.needsUpdate=!0,t[n].matrixWorldNeedsUpdate=!0;this.undoBasicObject(this.cube,e),this.cube.geometry.attributes.position.needsUpdate=!0,this.cube.matrixWorldNeedsUpdate=!0,this.updateVisible()}addObject(e){const t=new sr({color:this.verticesVisibles?255:153,side:tn});this.cube=new pt(e,t),this.cube.extendObject="extendObject",this.cube.parentObject=this,this.scene.add(this.cube)}addVerticesEdges(){this.edges=new yh(this.cube.geometry,10);const e=new Xs({color:16777215,linewidth:1,scale:1,dashSize:.1,gapSize:0});this.lines=new On(this.edges,e),this.lines.computeLineDistances(),this.cube.add(this.lines)}addVerticesConfig(){let e=this.cube.geometry.getAttribute("position").array;for(let t=0,n=e.length;t<n;t+=3){const i=Hr(e[t+0],e[t+1],e[t+2]);this.geometryMap[i]===void 0?this.geometryMap[i]={point:null,vertices:[t],lines:[]}:this.geometryMap[i].vertices.push(t)}this.cube.userData.geometryMap=this.geometryMap}addVertices(){let e=this.cube.geometry.getAttribute("position").array;const t=new gn({color:0,size:this.camera.isOrthographicCamera?5:.2});for(let n=0,i=e.length;n<i;n+=3){const s=Hr(e[n+0],e[n+1],e[n+2]);if(this.geometryMap[s]===void 0){const o=new Ke().setFromPoints([{x:0,y:0,z:0}]),r=new Nn(o,t);this.points.push(r),this.geometryMap[s]={point:r,vertices:[n],lines:[]},r.position.set(e[n+0],e[n+1],e[n+2]),r.userData.vertices=[{key:s,index:0}],r.parentObject=this,this.cube.add(r)}else this.geometryMap[s].vertices.push(n)}this.cube.userData.geometryMap=this.geometryMap}addEdges(){const e=new yh(this.cube.geometry,10),t=[],n=e.attributes.position.array;for(let i=0,s=n.length;i<s;i+=6){for(let u=0;u<6;u++)t[u]=n[u+i];const o=new Ke;o.setAttribute("position",new Ye(t,3));const r=new wi({color:16777215}),l=new On(o,r);l.parentObject=this,this.cube.add(l),this.lines.push(l);const c=Hr(n[i+0],n[i+1],n[i+2]);this.geometryMap[c].lines.push({line:l,index:0});const h=Hr(n[i+3],n[i+4],n[i+5]);this.geometryMap[h].lines.push({line:l,index:3}),l.userData.vertices=[{key:c,index:0},{key:h,index:3}]}}removeProject(){for(let e=0;e<this.linesPlanesProj.length;e++){const t=this.linesPlanesProj[e];for(let n=0,i=t.length;n<i;n++){const s=this.planes[e].children;for(let o=s.length;o>-1;o--)if(s[o]==t[n]){s.splice(o,1);break}}}}addProject(){this.subDivisions=2;for(let e=0;e<this.linesPlanesProj.length;e++){const t=[];for(let n=0,i=this.lines.length;n<i;n++){const s=new Si;for(let o=0;o<this.subDivisions;o++){const r=new Xs({color:0,linewidth:1,scale:1,dashSize:.1,gapSize:.05}),l=new Ke,c=[],h=o/2,u=(o+1)/2;for(let f=0;f<3;f++)c.push((1-h)*this.lines[n].geometry.attributes.position.array[f]+h*this.lines[n].geometry.attributes.position.array[f+3]);for(let f=0;f<3;f++)c.push((1-u)*this.lines[n].geometry.attributes.position.array[f]+u*this.lines[n].geometry.attributes.position.array[f+3]);l.setAttribute("position",new Ye(c,3)),l.rotateY(Math.PI/2),s.add(new On(l,r)),s.children[o].computeLineDistances(),s.children[o].geometry.computeBoundingSphere()}s.userData.vertexI=n,t.push(s),this.planes[e].add(s)}this.linesPlanesProj[e]=t}}addProject1(){for(let e=0;e<this.linesPlanesProj.length;e++){const t=[];for(let n=0,i=this.lines.geometry.attributes.position.array.length;n<i;n+=6){const s=new Xs({color:0,linewidth:1,scale:1,dashSize:.1,gapSize:.05}),o=new Ke,r=[];for(let c=0;c<6;c++)r.push(this.edges.attributes.position.array[c+n]);o.setAttribute("position",new Ye(r,3));const l=new On(o,s);l.userData.vertex1=new L(r[0],r[1],r[2]),l.userData.vertex2=new L(r[3],r[4],r[5]),l.userData.vertex=new L((r[0]+r[3])/2,(r[1]+r[4])/2,(r[2]+r[5])/2),l.computeLineDistances(),t.push(l),o.rotateY(Math.PI/2),this.planes[e].add(l)}this.linesPlanesProj[e]=t}}updateVisible(){let e,t,n,i=new L,s=new L,o;const r=this.linesPlanesProj[0];for(let l=0,c=r.length;l<c;l++){const h=this.lines[r[l].userData.vertexI],u=h.geometry.attributes.position.array;i.set(u[0],u[1],u[2]),s.set(u[3],u[4],u[5]),h.localToWorld(i),h.localToWorld(s);for(let f=0,p=this.linesPlanesProj.length;f<p;f++)for(let _=0,g=this.subDivisions;_<g;_++){e=this.linesPlanesProj[f][l].children[_];const m=this.planes[f];t=i.clone(),n=s.clone(),m.userData.rot&&(t.applyAxisAngle(m.userData.rot,Math.PI/2),n.applyAxisAngle(m.userData.rot,Math.PI/2));const d=_/g,b=(_+1)/g;o=e.geometry.attributes.position.array,o[0]=(1-d)*t.x+d*n.x,o[1]=(1-d)*t.y+d*n.y,o[2]=.01,o[3]=(1-b)*t.x+b*n.x,o[4]=(1-b)*t.y+b*n.y,o[5]=.01,e.computeLineDistances(),e.geometry.computeBoundingSphere(),e.geometry.attributes.position.needsUpdate=!0,e.material.gapSize=this.isVisible(m.userData.dir,l,f,_,g)?0:.3}}}updateVisible2(){let e,t,n,i,s,o,r,l;const c=this.linesPlanesProj[0];for(let h=0,u=c.length;h<u;h++){o=c[h].userData.vertex1.clone(),r=c[h].userData.vertex2.clone(),this.group.localToWorld(o),this.group.localToWorld(r);for(let f=0,p=this.linesPlanesProj.length;f<p;f++)e=this.linesPlanesProj[f][h],t=this.planes[f],n=t.userData.dir,i=o.clone(),s=r.clone(),t.userData.rot&&(i.applyAxisAngle(t.userData.rot,Math.PI/2),s.applyAxisAngle(t.userData.rot,Math.PI/2)),l=e.geometry.attributes.position.array,l[0]=i.x,l[1]=i.y,l[3]=s.x,l[4]=s.y,e.computeLineDistances(),e.geometry.attributes.position.needsUpdate=!0,e.material.gapSize=this.isVisible(n,h,f)?0:.05}}updateVisible1(){for(let e=0,t=this.linesPlanesProj.length;e<t;e++){const n=this.linesPlanesProj[e],i=this.planes[e],s=i.userData.dir;for(let o=0,r=this.linesPlanesProj[0].length;o<r;o++){const l=n[o];l.material.gapSize=this.isVisible(s,o,e)?0:.05;const c=l.userData.vertex1.clone(),h=l.userData.vertex2.clone();this.group.localToWorld(c),this.group.localToWorld(h),i.worldToLocal(c),i.worldToLocal(h);const u=l.geometry.attributes.position.array;u[0]=c.x,u[1]=c.y,u[2]=.01,u[3]=h.x,u[4]=h.y,u[5]=.01,l.computeLineDistances(),l.geometry.attributes.position.needsUpdate=!0}}}isVisible3(e,t,n){const i=this.lines[this.linesPlanesProj[n][t].userData.vertexI],s=i.geometry.attributes.position.array,o=new L((s[0]+s[3])/2,(s[1]+s[4])/2,(s[2]+s[5])/2);return i.localToWorld(o),this.raycaster.set(o,e),this.raycaster.intersectObjects([this.cube],!1).length>0}isVisible(e,t,n,i,s){var _;const o=i/s,r=(i+1)/s,l=this.lines[this.linesPlanesProj[n][t].userData.vertexI],c=l.geometry.attributes.position.array,h=new L(((1-o)*c[0]+o*c[3]+(1-r)*c[0]+r*c[3])/2,((1-o)*c[1]+o*c[4]+(1-r)*c[1]+r*c[4])/2,((1-o)*c[2]+o*c[5]+(1-r)*c[2]+r*c[5])/2);l.localToWorld(h);const u=new L((1-e.x)*h.x-10*e.x,(1-e.y)*h.y-10*e.y,(1-e.z)*h.z-10*e.z),f=h.distanceTo(u);return this.raycaster.set(u,e),!(((_=this.raycaster.intersectObjects([this.cube],!1)[0])==null?void 0:_.distance)<f-.01)}isVisible4(e,t,n){const i=this.lines[this.linesPlanesProj[n][t].userData.vertexI],s=i.geometry.attributes.position.array,o=new L((s[0]+s[3])/2,(s[1]+s[4])/2,(s[2]+s[5])/2);i.localToWorld(o);const r=new L(o.x-10*e.x,o.y-10*e.y,o.z-10*e.z),l=o.distanceTo(r);this.raycaster.set(r,e);const c=this.raycaster.intersectObjects([this.cube],!1);return c.length>0&&Math.abs(c[0].distance-l)<.05}isVisible1(e,t,n){const i=this.linesPlanesProj[n][t].userData.vertexI,s=new L((this.lines[i].geometry.attributes.position.array[0]+this.lines[i].geometry.attributes.position.array[3])/2,(this.lines[i].geometry.attributes.position.array[1]+this.lines[i].geometry.attributes.position.array[4])/2,(this.lines[i].geometry.attributes.position.array[2]+this.lines[i].geometry.attributes.position.array[5])/2);this.lines[i].localToWorld(s);const o=new L((1-e.x)*s.x-10*e.x,(1-e.y)*s.y-10*e.y,(1-e.z)*s.z-10*e.z),r=s.distanceTo(o);this.raycaster.set(o,e);const l=this.raycaster.intersectObjects([this.cube],!1);for(let c=0;c<l.length;c++)if(l[c].distance<r-.1)return!1;return!0}}const Hr=(a,e,t,n=4)=>{const i=Math.pow(10,n),s=~~(a*i),o=~~(e*i),r=~~(t*i);return`${s},${o},${r}`};class bh extends On{constructor(t=[0,0,0,0,0,0],n=0,i=0){let s=new Ke().setAttribute("position",new Et(new Float32Array([t[0],t[1],t[2],t[3],t[4],t[5]]),3));super(s,new Xs({color:n,dashSize:.15,gapSize:i}));$e(this,"clamp",(t,n,i)=>Math.min(Math.max(i,t),n));this.computeLineDistances();let o=new gn({color:n,size:4}),r=new Ke;r.setAttribute("position",new Et(new Float32Array([t[0],t[1],t[2]]),3)),this.point1=new Nn(r,o),o=new gn({color:n,size:4}),r=new Ke,r.setAttribute("position",new Et(new Float32Array([t[3],t[4],t[5]]),3)),this.point2=new Nn(r,o)}updatePosition(t,n=0,i=!1,s,o){s=(3-s)%3;const r=this.geometry.attributes.position.array;if(!i&&r[n+0]==Math.round(t.x)&&r[n+1]==Math.round(t.y)&&r[n+2]==Math.round(t.z))return;const l=n!=0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,c=n!=0?this.point1:this.point2,h=n==0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,u=n==0?this.point1:this.point2;s==0&&(r[n+0]=h[0]=Math.round(t.x),r[n+1]=h[1]=this.clamp(-o,o,Math.round(t.y)),r[n+2]=h[2]=this.clamp(-o,o,Math.round(t.z))),s==1&&(r[n+0]=h[0]=this.clamp(-o,o,Math.round(t.x)),r[n+1]=h[1]=Math.round(t.y),r[n+2]=h[2]=this.clamp(-o,o,Math.round(t.z))),s==2&&(r[n+0]=h[0]=this.clamp(-o,o,Math.round(t.x)),r[n+1]=h[1]=this.clamp(-o,o,Math.round(t.y)),r[n+2]=h[2]=Math.round(t.z)),u.visible=!0,u.geometry.computeBoundingSphere(),u.geometry.attributes.position.needsUpdate=!0,i&&(n=n==0?3:0,r[n+0]=l[0]=h[0],r[n+1]=l[1]=h[1],r[n+2]=l[2]=h[2],this.visible=!0,c.visible=!0,c.geometry.computeBoundingSphere(),c.geometry.attributes.position.needsUpdate=!0),this.computeLineDistances(),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0}updateColor(t,n,i){this.material.color.r=this.point1.material.color.r=this.point2.material.color.r=t,this.material.color.g=this.point1.material.color.g=this.point2.material.color.g=n,this.material.color.b=this.point1.material.color.b=this.point2.material.color.b=i}}const Ux=/^[og]\s*(.+)?/,Ox=/^mtllib /,zx=/^usemtl /,Nx=/^usemap /,Mh=/\s+/,wh=new L,fa=new L,Th=new L,Eh=new L,Kt=new L,Wr=new Ve;function Fx(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const r={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(r),r},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;wh.fromArray(i,e),fa.fromArray(i,t),Th.fromArray(i,n),Kt.subVectors(Th,fa),Eh.subVectors(wh,fa),Kt.cross(Eh),Kt.normalize(),s.push(Kt.x,Kt.y,Kt.z),s.push(Kt.x,Kt.y,Kt.z),s.push(Kt.x,Kt.y,Kt.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,r,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(t,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),r!==void 0&&r!==""){const _=this.normals.length;u=this.parseNormalIndex(r,_),f=this.parseNormalIndex(l,_),p=this.parseNormalIndex(c,_),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(i!==void 0&&i!==""){const _=this.uvs.length;u=this.parseUVIndex(i,_),f=this.parseUVIndex(s,_),p=this.parseUVIndex(o,_),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return a.startObject("",!1),a}class da extends el{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new ru(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(r){try{t(s.parse(r))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Fx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let r=0,l=n.length;r<l;r++){const c=n[r].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(Mh);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Wr.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),t.colors.push(Wr.r,Wr.g,Wr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(Mh),p=[];for(let g=0,m=f.length;g<m;g++){const d=f[g];if(d.length>0){const b=d.split("/");p.push(b)}}const _=p[0];for(let g=1,m=p.length-1;g<m;g++){const d=p[g],b=p[g+1];t.addFace(_[0],d[0],b[0],_[1],d[1],b[1],_[2],d[2],b[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=u;else for(let _=0,g=u.length;_<g;_++){const m=u[_].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(f,p)}else if(h==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=Ux.exec(c))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(zx.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Ox.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Nx.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Si;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let r=0,l=t.objects.length;r<l;r++){const c=t.objects[r],h=c.geometry,u=c.materials,f=h.type==="Line",p=h.type==="Points";let _=!1;if(h.vertices.length===0)continue;const g=new Ke;g.setAttribute("position",new Ye(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new Ye(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new Ye(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new Ye(h.uvs,2));const m=[];for(let b=0,x=u.length;b<x;b++){const v=u[b],y=v.name+"_"+v.smooth+"_"+_;let M=t.materials[y];if(this.materials!==null){if(M=this.materials.create(v.name),f&&M&&!(M instanceof wi)){const E=new wi;Bn.prototype.copy.call(E,M),E.color.copy(M.color),M=E}else if(p&&M&&!(M instanceof gn)){const E=new gn({size:10,sizeAttenuation:!1});Bn.prototype.copy.call(E,M),E.color.copy(M.color),E.map=M.map,M=E}}M===void 0&&(f?M=new wi:p?M=new gn({size:1,sizeAttenuation:!1}):M=new sr,M.name=v.name,M.flatShading=!v.smooth,M.vertexColors=_,t.materials[y]=M),m.push(M)}let d;if(m.length>1){for(let b=0,x=u.length;b<x;b++){const v=u[b];g.addGroup(v.groupStart,v.groupCount,b)}f?d=new On(g,m):p?d=new Nn(g,m):d=new pt(g,m)}else f?d=new On(g,m[0]):p?d=new Nn(g,m[0]):d=new pt(g,m[0]);d.name=c.name,s.add(d)}else if(t.vertices.length>0){const r=new gn({size:1,sizeAttenuation:!1}),l=new Ke;l.setAttribute("position",new Ye(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Ye(t.colors,3)),r.vertexColors=!0);const c=new Nn(l,r);s.add(c)}return s}}class Bx extends Dx{constructor(t=window){super(Lx(),t);$e(this,"newMenu",()=>{this.Teidebar=Mx();const t=bx({id:"leftbar"}),n=ha({id:"linebar"});t.add(n),this.visibleLine=ss({id:"visibleLine",cl:["selected","invert"],container:n,imgSrc:"../assets/icons/tools/line27.png",dataTitle:this.strings.getKey("line/visible"),onClick:o=>{this.LineDashed=0,this.Line.selectedSegment&&(this.Line.segment.material.gapSize=0)}}).dom,this.hiddenLine=ss({id:"hiddenLine",cl:["invert"],container:n,imgSrc:"../assets/icons/tools/lineD1.png",dataTitle:this.strings.getKey("line/hidden"),onClick:o=>{this.LineDashed=.25,this.Line.selectedSegment&&(this.Line.segment.material.gapSize=.25)}}).dom,this.deleteLine=ss({id:"deleteLine",cl:[],container:n,imgSrc:"../assets/icons/tools/eraser1.png",dataTitle:this.strings.getKey("line/delete"),selected:!1,onClick:o=>{for(let r=0;r<this.linesSegments.length;r++)if(this.Line.segment.uuid==this.linesSegments[r].uuid){this.Line.setLineReset(),this.scene.remove(this.Line.segment.point1),this.scene.remove(this.Line.segment.point2),this.scene.remove(this.Line.segment),this.linesSegments.splice(r,1);return}}}).dom;const i=ha({id:"colorBar"});t.add(i),this.redLine=ss({id:"redLine",cl:[],container:i,imgSrc:"../assets/icons/misc/red.png",dataTitle:this.strings.getKey("line/red"),selected:!1,onClick:o=>{this.Line.selectedSegment&&(this.Line.segment.userData.color=this.RED,this.Line.setSegmentColor({color:this.RED}))}}).dom,this.blackLine=ss({id:"colorBlackBar",cl:[],container:i,imgSrc:"../assets/icons/misc/black.png",dataTitle:this.strings.getKey("line/black"),selected:!1,onClick:o=>{this.Line.selectedSegment&&(this.Line.segment.userData.color=this.BLACK,this.Line.setSegmentColor({color:this.BLACK}))}}).dom;const s=ha({id:"clipboardPegarBar"});t.add(s),this.clipboard=ss({id:"clipboardPegarBar",cl:[],container:s,imgSrc:"../assets/icons/misc/copy2.png",dataTitle:this.strings.getKey("clipboard/copy"),selected:!1,onClick:o=>{navigator.clipboard.readText().then(r=>{this.readPortapapeles(r)}).catch(r=>{console.error("Error al leer del portapapeles:",r)})}}).dom});$e(this,"readPortapapeles",t=>{const n=JSON.parse(t);for(const i in n.segments){const s=[];for(const o in n.segments[i])s.push(n.segments[i][o]);this.copyLine2(s,n.gapSize[i])}console.log(n.exercise,"./exercises/666/",`${n.exercise} + .obj`),this.loadPortapapeles("./exercises/666/",`${n.exercise}.obj`,n.rotate)});$e(this,"read",(t,n)=>{let i=new XMLHttpRequest;i.open("GET",t+n,!0),i.onreadystatechange=()=>{if(i.readyState===4&&i.status===200){this.reset();const s=JSON.parse(i.responseText);for(const o in s.segments){const r=[];for(const l in s.segments[o])r.push(s.segments[o][l]);this.copyLine2(r,s.gapSize[o])}}},i.send(null)});$e(this,"saveObjects",()=>{const t=this.toJSON();console.log(t);let n=new File([t],"Ejercicio1.txt",{type:"text/plain;charset=utf8"});saveAs(n)});$e(this,"loadObjects",(t,n)=>{console.log(t+n),new da().load(t+n,s=>{console.log(s),this.scene.remove(this.cube);const o=new sr({color:this.verticesVisibles?255:153,side:tn});this.cube=new pt(s.children[0].geometry,o)},s=>{console.log(s.loaded/s.total*100+"% loaded")},s=>{console.log(s,"An error happened")})});$e(this,"loadPortapapeles",(t,n,i,s={x:0,y:0,z:0})=>{console.log(t+n),new da().load(t+n,r=>{this.scene.remove(this.cube);const l=new Sh(this,this.planesP.planes,r.children[0].geometry,!1,!1);console.log(l),this.cube=l.cube,this.cube.geometry.rotateX(i.x%4*Math.PI/2),this.cube.geometry.rotateY(i.y%4*Math.PI/2),this.cube.geometry.rotateZ(i.z%4*Math.PI/2);for(let c=0;c<l.lines.length;c++)l.lines[c].geometry.rotateX(i.x%4*Math.PI/2),l.lines[c].geometry.rotateY(i.y%4*Math.PI/2),l.lines[c].geometry.rotateZ(i.z%4*Math.PI/2);this.scene.add(this.cube)},r=>{console.log(r.loaded/r.total*100+"% loaded")},r=>{console.log(r,"An error happened")})});$e(this,"loadObject",(t,n,i={x:0,y:0,z:0})=>{new da().load(t+n+".obj",o=>{this.scene.remove(this.cube);const r=new Sh(this,this.planesP.planes,o.children[0].geometry,!1,!1);console.log(r),this.cube=r.cube,this.cube.userData.rotate={x:Math.floor(Math.random()*1e3),y:Math.floor(Math.random()*1e3),z:Math.floor(Math.random()*1e3)},this.cube.userData.name=n,this.cube.geometry.rotateX(this.cube.userData.rotate.x%4*Math.PI/2),this.cube.geometry.rotateY(this.cube.userData.rotate.y%4*Math.PI/2),this.cube.geometry.rotateZ(this.cube.userData.rotate.z%4*Math.PI/2);for(let l=0;l<r.lines.length;l++)r.lines[l].geometry.rotateX(this.cube.userData.rotate.x%4*Math.PI/2),r.lines[l].geometry.rotateY(this.cube.userData.rotate.y%4*Math.PI/2),r.lines[l].geometry.rotateZ(this.cube.userData.rotate.z%4*Math.PI/2);this.scene.add(this.cube)},o=>{console.log(o.loaded/o.total*100+"% loaded")},o=>{console.log(o,"An error happened")})});$e(this,"initLights2",()=>{let t=new au(12303291);this.scene.add(t);let n=new Ea(16777215,1.5);n.position.set(1,.75,.5),this.scene.add(n),n=new Ea(16777215,1.5),n.position.set(-1,-.75,-.5),this.scene.add(n)});$e(this,"initMenu",async()=>{this.menu=await fetch("../common/menu.json").then(t=>t.json()).then(t=>t.menu),this.menuBar=Ex(this)});$e(this,"initPlanesPorj",()=>{this.planesP=new xx(this),this.scene.add(this.planesP.planes[0],this.planesP.planes[1],this.planesP.planes[2]),this.canvasPlanes[0]=[this.planesP.planes[0]],this.canvasPlanes[1]=[this.planesP.planes[2]],this.canvasPlanes[2]=[this.planesP.planes[1]]});this.objects=[],this.cubes=[],this.lines=[],this.points=[],this.linesSegments=[],this.pointsLinesSegments=[],this.history={copyObject:[],object:[],index:0},this.canvasPlanes={0:[],1:[],2:[],3:[]},this.width,this.height,this.LineDashed=0,this.sizeProj=6,this.initConfig(),this.initMenu(),this.newMenu(),this.initPlanesPorj(),this.intDrawLine()}addObject(t){const n=new sr({color:this.verticesVisibles?255:153,side:tn});this.cube=new pt(t,n),this.cube.extendObject="extendObject",this.cube.parentObject=this,this.scene.add(this.cube)}toJSON(){this.exportJSON={segments:[],colorLine:[],gapSize:[],exercise:"",rotate:{x:0,y:0,z:0}};for(let n=0;n<this.linesSegments.length;n++)this.exportJSON.segments.push(this.linesSegments[n].geometry.attributes.position.array),this.exportJSON.colorLine.push({r:this.linesSegments[n].material.color.r,g:this.linesSegments[n].material.color.g,b:this.linesSegments[n].material.color.b}),console.log(this.linesSegments[n].material),this.exportJSON.gapSize.push(this.linesSegments[n].material.gapSize);this.exportJSON.exercise="1",this.exportJSON.rotate=this.cube.userData.rotate,console.log(this.cube.userData);const t=JSON.stringify(this.exportJSON);return JSON.parse(t),t}JSONtoVar(){const t=JSON.parse(window.localStorage.proj);for(const n in t.segments){const i=[];for(const s in t.segments[n])i.push(t.segments[n][s]);this.copyLine(i)}}reset(){for(let t=0;t<this.linesSegments.length;t++)this.scene.remove(this.linesSegments[t]);for(let t=0;t<this.pointsLinesSegments.length;t++)this.scene.remove(this.pointsLinesSegments[t]);this.linesSegments=[],this.pointsLinesSegments=[]}copyLine2(t,n){const i=new bh(t,0);i.material.gapSize=n,this.linesSegments.push(i),this.pointsLinesSegments.push(i.point1,i.point2),this.scene.add(i,i.point1,i.point2)}copyLine(t){const n=new bh(t.geometry.attributes.position.array,0);n.material.gapSize=this.tempLine.material.gapSize,this.linesSegments.push(n),this.pointsLinesSegments.push(n.point1,n.point2),this.scene.add(n,n.point1,n.point2)}intDrawLine(){this.Line=Ix(this),this.Line.createHandler()}intDrawPoint(){const t=[0,0,0],n=new gn({color:0,name:"P0",size:3}),i=new Ke;i.setAttribute("position",new Ye(t,3)),this.point=new Nn(i,n),this.scene.add(this.point);for(let s=0;s<this.allCanvas.length-1;s++)this.allCanvas[s].addEventListener("pointerdown",o=>{this.mouse.x=o.offsetX/o.target.clientWidth*2-1,this.mouse.y=-(o.offsetY/o.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.allCameras[s]);const r=this.raycaster.intersectObjects([this.planesP.planes[(3-s)%3]],!1);if(r.length>0){const l=r[0].point,c=this.point.geometry.attributes.position;c.array[0]=l.x,c.array[1]=l.y,c.array[2]=l.z,c.needsUpdate=!0}})}}let jr=new Bx;function cf(){requestAnimationFrame(cf);for(let a=0;a<jr.allRenderer.length;a++)jr.allRenderer[a].render(jr.scene,jr.allCameras[a])}cf();
