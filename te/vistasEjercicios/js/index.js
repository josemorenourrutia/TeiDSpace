var uf=Object.defineProperty;var hf=(o,e,t)=>e in o?uf(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var xt=(o,e,t)=>(hf(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="151",Ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ff=0,yl=1,df=2,wu=1,pf=2,ks=3,ni=0,Ut=1,xn=2,$n=0,cs=1,Sl=2,bl=3,Ml=4,mf=5,ss=100,gf=101,_f=102,wl=103,Tl=104,vf=200,xf=201,yf=202,Sf=203,Tu=204,Eu=205,bf=206,Mf=207,wf=208,Tf=209,Ef=210,Af=0,Au=1,Cf=2,ho=3,Pf=4,Lf=5,Df=6,Rf=7,Go=0,If=1,Uf=2,zn=0,Of=1,zf=2,Nf=3,Ff=4,Bf=5,Cu=300,gs=301,_s=302,fo=303,po=304,aa=306,mo=1e3,dn=1001,go=1002,Rt=1003,El=1004,va=1005,en=1006,kf=1007,Ks=1008,Ci=1009,Vf=1010,Gf=1011,Pu=1012,Hf=1013,xi=1014,yi=1015,$s=1016,Wf=1017,jf=1018,us=1020,qf=1021,pn=1023,Xf=1024,Yf=1025,Mi=1026,vs=1027,Zf=1028,Jf=1029,Kf=1030,$f=1031,Qf=1033,xa=33776,ya=33777,Sa=33778,ba=33779,Al=35840,Cl=35841,Pl=35842,Ll=35843,ed=36196,Dl=37492,Rl=37496,Il=37808,Ul=37809,Ol=37810,zl=37811,Nl=37812,Fl=37813,Bl=37814,kl=37815,Vl=37816,Gl=37817,Hl=37818,Wl=37819,jl=37820,ql=37821,Ma=36492,td=36283,Xl=36284,Yl=36285,Zl=36286,Pi=3e3,Je=3001,nd=3200,id=3201,Lu=0,sd=1,vn="srgb",Qs="srgb-linear",Du="display-p3",wa=7680,rd=519,Jl=35044,Kl="300 es",_o=1035;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];const Ta=Math.PI/180,vo=180/Math.PI;function As(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[o&255]+Mt[o>>8&255]+Mt[o>>16&255]+Mt[o>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function _t(o,e,t){return Math.max(e,Math.min(t,o))}function ad(o,e){return(o%e+e)%e}function Ea(o,e,t){return(1-t)*o+t*e}function $l(o){return(o&o-1)===0&&o!==0}function od(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function fr(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kt(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],b=i[1],x=i[4],v=i[7],y=i[2],M=i[5],E=i[8];return s[0]=r*g+a*b+c*y,s[3]=r*m+a*x+c*M,s[6]=r*d+a*v+c*E,s[1]=l*g+u*b+h*y,s[4]=l*m+u*x+h*M,s[7]=l*d+u*v+h*E,s[2]=f*g+p*b+_*y,s[5]=f*m+p*x+_*M,s[8]=f*d+p*v+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-n*s*u+n*a*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*r-a*l,f=a*c-u*s,p=l*s-r*c,_=t*h+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(a*n-i*r)*g,e[3]=f*g,e[4]=(u*t-i*c)*g,e[5]=(i*s-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+e,-i*l,i*c,-i*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new ke;function Ru(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Kr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ca(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ld=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cd=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ud(o){return o.convertSRGBToLinear().applyMatrix3(cd)}function hd(o){return o.applyMatrix3(ld).convertLinearToSRGB()}const fd={[Qs]:o=>o,[vn]:o=>o.convertSRGBToLinear(),[Du]:ud},dd={[Qs]:o=>o,[vn]:o=>o.convertLinearToSRGB(),[Du]:hd},Vt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Qs},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=fd[e],i=dd[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let Bi;class Iu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Kr("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=hs(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hs(t[n]/255)*255):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Uu{constructor(e=null){this.isSource=!0,this.uuid=As(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Pa(i[r].image)):s.push(Pa(i[r]))}else s=Pa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Iu.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pd=0;class qt extends Ui{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=dn,i=dn,s=en,r=Ks,a=pn,c=Ci,l=qt.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=As(),this.name="",this.source=new Uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Cu;qt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(p+1)/2,y=(d+1)/2,M=(u+f)/4,E=(h+g)/4,C=(_+m)/4;return x>v&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=M/n,s=E/n):v>y?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=M/i,s=C/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=E/s,i=C/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-g)/b,this.z=(f-u)/b,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Li extends Ui{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ou extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class md extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[r+0],p=s[r+1],_=s[r+2],g=s[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==f||l!==p||u!==_){let m=1-a;const d=c*f+l*p+u*_+h*g,b=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const y=Math.sqrt(x),M=Math.atan2(y,d*b);m=Math.sin(m*M)/y,a=Math.sin(a*M)/y}const v=a*b;if(c=c*m+f*v,l=l*m+p*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[r],f=s[r+1],p=s[r+2],_=s[r+3];return e[t]=a*_+u*h+c*p-l*f,e[t+1]=c*_+u*f+l*h-a*p,e[t+2]=l*_+u*p+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),p=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"YZX":this._x=f*u*h+l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h-f*p*_;break;case"XZY":this._x=f*u*h-l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*a+i*l-s*c,this._y=i*u+r*c+s*a-n*l,this._z=s*u+r*l+n*c-i*a,this._w=r*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,c=e.w,l=c*t+r*i-a*n,u=c*n+a*t-s*i,h=c*i+s*n-r*t,f=-s*t-r*n-a*i;return this.x=l*c+f*-s+u*-a-h*-r,this.y=u*c+f*-r+h*-s-l*-a,this.z=h*c+f*-a+l*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new L,Ql=new ii;class Oi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)An.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(An)}else i.boundingBox===null&&i.computeBoundingBox(),ki.copy(i.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),dr.subVectors(this.max,Rs),Vi.subVectors(e.a,Rs),Gi.subVectors(e.b,Rs),Hi.subVectors(e.c,Rs),Hn.subVectors(Gi,Vi),Wn.subVectors(Hi,Gi),ui.subVectors(Vi,Hi);let t=[0,-Hn.z,Hn.y,0,-Wn.z,Wn.y,0,-ui.z,ui.y,Hn.z,0,-Hn.x,Wn.z,0,-Wn.x,ui.z,0,-ui.x,-Hn.y,Hn.x,0,-Wn.y,Wn.x,0,-ui.y,ui.x,0];return!Da(t,Vi,Gi,Hi,dr)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,Vi,Gi,Hi,dr))?!1:(pr.crossVectors(Hn,Wn),t=[pr.x,pr.y,pr.z],Da(t,Vi,Gi,Hi,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new L,new L,new L,new L,new L,new L,new L,new L],An=new L,ki=new Oi,Vi=new L,Gi=new L,Hi=new L,Hn=new L,Wn=new L,ui=new L,Rs=new L,dr=new L,pr=new L,hi=new L;function Da(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){hi.fromArray(o,s);const a=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const gd=new Oi,Is=new L,Ra=new L;class Cs{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Ra)),this.expandByPoint(Is.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new L,Ia=new L,mr=new L,jn=new L,Ua=new L,gr=new L,Oa=new L;class oa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ia.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Ia);const s=e.distanceTo(t)*.5,r=-this.direction.dot(mr),a=jn.dot(this.direction),c=-jn.dot(mr),l=jn.lengthSq(),u=Math.abs(1-r*r);let h,f,p,_;if(u>0)if(h=r*c-a,f=r*a-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,p=h*(h+r*f+2*a)+f*(r*h+f+2*c)+l}else f=s,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-r*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(r*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=r>0?-s:s,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ia).addScaledVector(mr,f),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,s){Ua.subVectors(t,e),gr.subVectors(n,e),Oa.crossVectors(Ua,gr);let r=this.direction.dot(Oa),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,e);const c=a*this.direction.dot(gr.crossVectors(jn,gr));if(c<0)return null;const l=a*this.direction.dot(Ua.cross(jn));if(l<0||c+l>r)return null;const u=-a*jn.dot(Oa);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,a,c,l,u,h,f,p,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),r=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*u,p=r*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=_+p*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,_=l*u,g=l*h;t[0]=f+g*a,t[4]=_*a-p,t[8]=r*l,t[1]=r*h,t[5]=r*u,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=r*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,_=l*u,g=l*h;t[0]=f-g*a,t[4]=-r*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=r*u,t[9]=g-f*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const f=r*u,p=r*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,p=r*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-f*h,t[8]=_*h+p,t[1]=h,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=r*c,p=r*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+g,t[5]=r*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_d,e,vd)}lookAt(e,t,n){const i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),qn.crossVectors(n,Gt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),qn.crossVectors(n,Gt)),qn.normalize(),_r.crossVectors(Gt,qn),i[0]=qn.x,i[4]=_r.x,i[8]=Gt.x,i[1]=qn.y,i[5]=_r.y,i[9]=Gt.y,i[2]=qn.z,i[6]=_r.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],b=n[3],x=n[7],v=n[11],y=n[15],M=i[0],E=i[4],C=i[8],S=i[12],T=i[1],z=i[5],k=i[9],R=i[13],U=i[2],N=i[6],X=i[10],Z=i[14],W=i[3],ne=i[7],Q=i[11],xe=i[15];return s[0]=r*M+a*T+c*U+l*W,s[4]=r*E+a*z+c*N+l*ne,s[8]=r*C+a*k+c*X+l*Q,s[12]=r*S+a*R+c*Z+l*xe,s[1]=u*M+h*T+f*U+p*W,s[5]=u*E+h*z+f*N+p*ne,s[9]=u*C+h*k+f*X+p*Q,s[13]=u*S+h*R+f*Z+p*xe,s[2]=_*M+g*T+m*U+d*W,s[6]=_*E+g*z+m*N+d*ne,s[10]=_*C+g*k+m*X+d*Q,s[14]=_*S+g*R+m*Z+d*xe,s[3]=b*M+x*T+v*U+y*W,s[7]=b*E+x*z+v*N+y*ne,s[11]=b*C+x*k+v*X+y*Q,s[15]=b*S+x*R+v*Z+y*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*p-n*c*p)+g*(+t*c*p-t*l*f+s*r*f-i*r*p+i*l*u-s*c*u)+m*(+t*l*h-t*a*p-s*r*h+n*r*p+s*a*u-n*l*u)+d*(-i*a*u-t*c*h+t*a*f+i*r*h-n*r*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],b=h*m*l-g*f*l+g*c*p-a*m*p-h*c*d+a*f*d,x=_*f*l-u*m*l-_*c*p+r*m*p+u*c*d-r*f*d,v=u*g*l-_*h*l+_*a*p-r*g*p-u*a*d+r*h*d,y=_*h*c-u*g*c-_*a*f+r*g*f+u*a*m-r*h*m,M=t*b+n*x+i*v+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=b*E,e[1]=(g*f*s-h*m*s-g*i*p+n*m*p+h*i*d-n*f*d)*E,e[2]=(a*m*s-g*c*s+g*i*l-n*m*l-a*i*d+n*c*d)*E,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*p-n*c*p)*E,e[4]=x*E,e[5]=(u*m*s-_*f*s+_*i*p-t*m*p-u*i*d+t*f*d)*E,e[6]=(_*c*s-r*m*s-_*i*l+t*m*l+r*i*d-t*c*d)*E,e[7]=(r*f*s-u*c*s+u*i*l-t*f*l-r*i*p+t*c*p)*E,e[8]=v*E,e[9]=(_*h*s-u*g*s-_*n*p+t*g*p+u*n*d-t*h*d)*E,e[10]=(r*g*s-_*a*s+_*n*l-t*g*l-r*n*d+t*a*d)*E,e[11]=(u*a*s-r*h*s-u*n*l+t*h*l+r*n*p-t*a*p)*E,e[12]=y*E,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*E,e[14]=(_*a*i-r*g*i-_*n*c+t*g*c+r*n*m-t*a*m)*E,e[15]=(r*h*i-u*a*i+u*n*c-t*h*c-r*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,c=e.z,l=s*r,u=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*r,0,l*c-i*a,u*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,c=t._w,l=s+s,u=r+r,h=a+a,f=s*l,p=s*u,_=s*h,g=r*u,m=r*h,d=a*h,b=c*l,x=c*u,v=c*h,y=n.x,M=n.y,E=n.z;return i[0]=(1-(g+d))*y,i[1]=(p+v)*y,i[2]=(_-x)*y,i[3]=0,i[4]=(p-v)*M,i[5]=(1-(f+d))*M,i[6]=(m+b)*M,i[7]=0,i[8]=(_+x)*E,i[9]=(m-b)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Wi.set(i[0],i[1],i[2]).length();const r=Wi.set(i[4],i[5],i[6]).length(),a=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const l=1/s,u=1/r,h=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(r+s)/(r-s),p=-2*r*s/(r-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(r-s),h=(t+e)*c,f=(n+i)*l,p=(r+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new L,on=new nt,_d=new L(0,0,0),vd=new L(1,1,1),qn=new L,_r=new L,Gt=new L,ec=new nt,tc=new ii;class la{constructor(e=0,t=0,n=0,i=la.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const nc=new L,ji=new ii,Pn=new nt,vr=new L,Us=new L,yd=new L,Sd=new ii,ic=new L(1,0,0),sc=new L(0,1,0),rc=new L(0,0,1),bd={type:"added"},ac={type:"removed"};class ht extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new L,t=new la,n=new ii,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new ke}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Us,vr,this.up):Pn.lookAt(vr,Us,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),ji.setFromRotationMatrix(Pn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ac)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),h=r(e.shapes),f=r(e.skeletons),p=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new L(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new L,Ln=new L,za=new L,Dn=new L,qi=new L,Xi=new L,oc=new L,Na=new L,Fa=new L,Ba=new L;let xr=!1;class un{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),Ln.subVectors(n,t),za.subVectors(e,t);const r=ln.dot(ln),a=ln.dot(Ln),c=ln.dot(za),l=Ln.dot(Ln),u=Ln.dot(za),h=r*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(l*c-a*u)*f,_=(r*u-a*c)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,i,s,r,a,c){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(e,t,n,i,s,r,a,c)}static getInterpolation(e,t,n,i,s,r,a,c){return this.getBarycoord(e,t,n,i,Dn),c.setScalar(0),c.addScaledVector(s,Dn.x),c.addScaledVector(r,Dn.y),c.addScaledVector(a,Dn.z),c}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Ln.subVectors(e,t),ln.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;qi.subVectors(i,n),Xi.subVectors(s,n),Na.subVectors(e,n);const c=qi.dot(Na),l=Xi.dot(Na);if(c<=0&&l<=0)return t.copy(n);Fa.subVectors(e,i);const u=qi.dot(Fa),h=Xi.dot(Fa);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(qi,r);Ba.subVectors(e,s);const p=qi.dot(Ba),_=Xi.dot(Ba);if(_>=0&&p<=_)return t.copy(s);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Xi,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return oc.subVectors(s,i),a=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(oc,a);const d=1/(m+g+f);return r=g*d,a=f*d,t.copy(n).addScaledVector(qi,r).addScaledVector(Xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Md=0;class Fn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=As(),this.name="",this.type="Material",this.blending=cs,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Tu,this.blendDst=Eu,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function ka(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vt.workingColorSpace){if(e=ad(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ka(r,s,e+1/3),this.g=ka(r,s,e),this.b=ka(r,s,e-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(e,t=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Vt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Vt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Vt.fromWorkingColorSpace(wt.copy(this),e),_t(wt.r*255,0,255)<<16^_t(wt.g*255,0,255)<<8^_t(wt.b*255,0,255)<<0}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,s=wt.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=vn){Vt.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(cn),cn.h+=e,cn.s+=t,cn.l+=n,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(yr);const n=Ea(cn.h,yr.h,t),i=Ea(cn.s,yr.s,t),s=Ea(cn.l,yr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ve;Ve.NAMES=zu;class Ws extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new L,Sr=new ce;class Et{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Nu extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fu extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wd=0;const Jt=new nt,Va=new ht,Yi=new L,Ht=new Oi,Os=new Oi,gt=new L;class Ke extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Fu:Nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ht.min,Os.min),Ht.expandByPoint(gt),gt.addVectors(Ht.max,Os.max),Ht.expandByPoint(gt)):(Ht.expandByPoint(Os.min),Ht.expandByPoint(Os.max))}Ht.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gt.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(e,l),gt.add(Yi)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new L,u[T]=new L;const h=new L,f=new L,p=new L,_=new ce,g=new ce,m=new ce,d=new L,b=new L;function x(T,z,k){h.fromArray(i,T*3),f.fromArray(i,z*3),p.fromArray(i,k*3),_.fromArray(r,T*2),g.fromArray(r,z*2),m.fromArray(r,k*2),f.sub(h),p.sub(h),g.sub(_),m.sub(_);const R=1/(g.x*m.y-m.x*g.y);!isFinite(R)||(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(R),b.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(R),l[T].add(d),l[z].add(d),l[k].add(d),u[T].add(b),u[z].add(b),u[k].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,z=v.length;T<z;++T){const k=v[T],R=k.start,U=k.count;for(let N=R,X=R+U;N<X;N+=3)x(n[N+0],n[N+1],n[N+2])}const y=new L,M=new L,E=new L,C=new L;function S(T){E.fromArray(s,T*3),C.copy(E);const z=l[T];y.copy(z),y.sub(E.multiplyScalar(E.dot(z))).normalize(),M.crossVectors(C,z);const R=M.dot(u[T])<0?-1:1;c[T*4]=y.x,c[T*4+1]=y.y,c[T*4+2]=y.z,c[T*4+3]=R}for(let T=0,z=v.length;T<z;++T){const k=v[T],R=k.start,U=k.count;for(let N=R,X=R+U;N<X;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,r=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let d=0;d<u;d++)f[_++]=l[p++]}return new Et(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ke,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new nt,_n=new oa,br=new Cs,cc=new L,Zi=new L,Ji=new L,Ki=new L,Ga=new L,Mr=new L,wr=new ce,Tr=new ce,Er=new ce,uc=new L,hc=new L,fc=new L,Ar=new L,Cr=new L;class yt extends ht{constructor(e=new Ke,t=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Mr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Ga.fromBufferAttribute(h,e),r?Mr.addScaledVector(Ga,u):Mr.addScaledVector(Ga.sub(t),u))}t.add(Mr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),_n.copy(e.ray).recast(e.near),br.containsPoint(_n.origin)===!1&&(_n.intersectSphere(br,cc)===null||_n.origin.distanceToSquared(cc)>(e.far-e.near)**2))||(lc.copy(s).invert(),_n.copy(e.ray).applyMatrix4(lc),n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,y=x;v<y;v+=3){const M=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);r=Pr(this,d,e,_n,l,u,h,M,E,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const b=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=Pr(this,i,e,_n,l,u,h,b,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,y=x;v<y;v+=3){const M=v,E=v+1,C=v+2;r=Pr(this,d,e,_n,l,u,h,M,E,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const b=m,x=m+1,v=m+2;r=Pr(this,i,e,_n,l,u,h,b,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Td(o,e,t,n,i,s,r,a){let c;if(e.side===Ut?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,e.side===ni,a),c===null)return null;Cr.copy(a),Cr.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(Cr);return l<t.near||l>t.far?null:{distance:l,point:Cr.clone(),object:o}}function Pr(o,e,t,n,i,s,r,a,c,l){o.getVertexPosition(a,Zi),o.getVertexPosition(c,Ji),o.getVertexPosition(l,Ki);const u=Td(o,e,t,n,Zi,Ji,Ki,Ar);if(u){i&&(wr.fromBufferAttribute(i,a),Tr.fromBufferAttribute(i,c),Er.fromBufferAttribute(i,l),u.uv=un.getInterpolation(Ar,Zi,Ji,Ki,wr,Tr,Er,new ce)),s&&(wr.fromBufferAttribute(s,a),Tr.fromBufferAttribute(s,c),Er.fromBufferAttribute(s,l),u.uv2=un.getInterpolation(Ar,Zi,Ji,Ki,wr,Tr,Er,new ce)),r&&(uc.fromBufferAttribute(r,a),hc.fromBufferAttribute(r,c),fc.fromBufferAttribute(r,l),u.normal=un.getInterpolation(Ar,Zi,Ji,Ki,uc,hc,fc,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};un.getNormal(Zi,Ji,Ki,h.normal),u.face=h}return u}class Ps extends Ke{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,r,s,0),_("z","y","x",1,-1,n,t,-e,r,s,1),_("x","z","y",1,1,e,n,t,i,r,2),_("x","z","y",1,-1,e,n,-t,i,r,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2));function _(g,m,d,b,x,v,y,M,E,C,S){const T=v/E,z=y/C,k=v/2,R=y/2,U=M/2,N=E+1,X=C+1;let Z=0,W=0;const ne=new L;for(let Q=0;Q<X;Q++){const xe=Q*z-R;for(let se=0;se<N;se++){const H=se*T-k;ne[g]=H*b,ne[m]=xe*x,ne[d]=U,l.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[d]=M>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(se/E),h.push(1-Q/C),Z+=1}}for(let Q=0;Q<C;Q++)for(let xe=0;xe<E;xe++){const se=f+xe+N*Q,H=f+xe+N*(Q+1),J=f+(xe+1)+N*(Q+1),le=f+(xe+1)+N*Q;c.push(se,H,le),c.push(H,J,le),W+=6}a.addGroup(p,W,S),p+=W,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(o){const e={};for(let t=0;t<o.length;t++){const n=xs(o[t]);for(const i in n)e[i]=n[i]}return e}function Ed(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Bu(o){return o.getRenderTarget()===null&&o.outputEncoding===Je?vn:Qs}const ku={clone:xs,merge:Dt};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vu extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Vu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Qi=1;class Pd extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new hn($i,Qi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new hn($i,Qi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new hn($i,Qi,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const a=new hn($i,Qi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new hn($i,Qi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new hn($i,Qi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=zn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Gu extends qt{constructor(e,t,n,i,s,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,n,i,s,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ld extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ps(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:$n});s.uniforms.tEquirect.value=t;const r=new yt(i,s),a=t.minFilter;return t.minFilter===Ks&&(t.minFilter=en),new Pd(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Ha=new L,Dd=new L,Rd=new ke;class mi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ha.subVectors(n,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rd.getNormalMatrix(e),i=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Cs,Lr=new L;class Wo{constructor(e=new mi,t=new mi,n=new mi,i=new mi,s=new mi,r=new mi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],d=n[13],b=n[14],x=n[15];return t[0].setComponents(a-i,h-c,g-f,x-m).normalize(),t[1].setComponents(a+i,h+c,g+f,x+m).normalize(),t[2].setComponents(a+s,h+l,g+p,x+d).normalize(),t[3].setComponents(a-s,h-l,g-p,x-d).normalize(),t[4].setComponents(a-r,h-u,g-_,x-b).normalize(),t[5].setComponents(a+r,h+u,g+_,x+b).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hu(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Id(o,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,p=o.createBuffer();o.bindBuffer(u,p),o.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,p=u.updateRange;o.bindBuffer(h,l),p.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):o.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(o.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:r,remove:a,update:c}}class er extends Ke{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,p=[],_=[],g=[],m=[];for(let d=0;d<u;d++){const b=d*f-r;for(let x=0;x<l;x++){const v=x*h-s;_.push(v,-b,0),g.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const x=b+l*d,v=b+l*(d+1),y=b+1+l*(d+1),M=b+1+l*d;p.push(x,v,M),p.push(v,y,M)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd="vec3 transformed = vec3( position );",Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qd=`#define PI 3.141592653589793
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
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tp=`vec3 transformedNormal = objectNormal;
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
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
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
#endif`,Mp=`#if defined( USE_ENVMAP )
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Pp=`struct PhysicalMaterial {
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
}`,Lp=`
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pm=`float getShadowMask() {
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#ifdef USE_UV
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
#endif`,Em=`#ifdef USE_UV
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
#endif`,Am=`#ifdef USE_UV
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
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Om=`#include <common>
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
}`,zm=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vm=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,qm=`#define LAMBERT
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
}`,Xm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Qm=`#define STANDARD
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
}`,eg=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,ng=`#define TOON
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
}`,ig=`uniform float size;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,ag=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Ud,alphamap_pars_fragment:Od,alphatest_fragment:zd,alphatest_pars_fragment:Nd,aomap_fragment:Fd,aomap_pars_fragment:Bd,begin_vertex:kd,beginnormal_vertex:Vd,bsdfs:Gd,iridescence_fragment:Hd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:Yd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:Kd,color_vertex:$d,common:Qd,cube_uv_reflection_fragment:ep,defaultnormal_vertex:tp,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,encodings_fragment:ap,encodings_pars_fragment:op,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:up,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:fp,fog_vertex:dp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:_p,lightmap_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:Sp,lights_pars_begin:bp,lights_toon_fragment:wp,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Ap,lights_physical_fragment:Cp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Rp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:zp,map_fragment:Np,map_pars_fragment:Fp,map_particle_fragment:Bp,map_particle_pars_fragment:kp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Gp,morphcolor_vertex:Hp,morphnormal_vertex:Wp,morphtarget_pars_vertex:jp,morphtarget_vertex:qp,normal_fragment_begin:Xp,normal_fragment_maps:Yp,normal_pars_fragment:Zp,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:tm,iridescence_pars_fragment:nm,output_fragment:im,packing:sm,premultiplied_alpha_fragment:rm,project_vertex:am,dithering_fragment:om,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:fm,shadowmap_vertex:dm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:_m,skinnormal_vertex:vm,specularmap_fragment:xm,specularmap_pars_fragment:ym,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:Mm,transmission_pars_fragment:wm,uv_pars_fragment:Tm,uv_pars_vertex:Em,uv_vertex:Am,worldpos_vertex:Cm,background_vert:Pm,background_frag:Lm,backgroundCube_vert:Dm,backgroundCube_frag:Rm,cube_vert:Im,cube_frag:Um,depth_vert:Om,depth_frag:zm,distanceRGBA_vert:Nm,distanceRGBA_frag:Fm,equirect_vert:Bm,equirect_frag:km,linedashed_vert:Vm,linedashed_frag:Gm,meshbasic_vert:Hm,meshbasic_frag:Wm,meshlambert_vert:jm,meshlambert_frag:qm,meshmatcap_vert:Xm,meshmatcap_frag:Ym,meshnormal_vert:Zm,meshnormal_frag:Jm,meshphong_vert:Km,meshphong_frag:$m,meshphysical_vert:Qm,meshphysical_frag:eg,meshtoon_vert:tg,meshtoon_frag:ng,points_vert:ig,points_frag:sg,shadow_vert:rg,shadow_frag:ag,sprite_vert:og,sprite_frag:lg},he={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaTest:{value:0}}},fn={basic:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Dt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Dt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Dt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Dt([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Dt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Dt([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Dt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Dt([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Dt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Dt([he.lights,he.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};fn.physical={uniforms:Dt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Dr={r:0,b:0,g:0};function cg(o,e,t,n,i,s,r){const a=new Ve(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function _(m,d){let b=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x));const v=o.xr,y=v.getSession&&v.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(a,c):x&&x.isColor&&(g(x,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===aa)?(u===void 0&&(u=new yt(new Ps(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:xs(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.encoding!==Je,(h!==x||f!==x.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new yt(new er(2,2),new Di({name:"BackgroundMaterial",uniforms:xs(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==o.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,p=o.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){m.getRGB(Dr,Bu(o)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,d,r)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function ug(o,e,t,n){const i=o.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function h(U,N,X,Z,W){let ne=!1;if(r){const Q=g(Z,X,N);l!==Q&&(l=Q,p(l.object)),ne=d(U,Z,X,W),ne&&b(U,Z,X,W)}else{const Q=N.wireframe===!0;(l.geometry!==Z.id||l.program!==X.id||l.wireframe!==Q)&&(l.geometry=Z.id,l.program=X.id,l.wireframe=Q,ne=!0)}W!==null&&t.update(W,34963),(ne||u)&&(u=!1,C(U,N,X,Z),W!==null&&o.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function p(U){return n.isWebGL2?o.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?o.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function g(U,N,X){const Z=X.wireframe===!0;let W=a[U.id];W===void 0&&(W={},a[U.id]=W);let ne=W[N.id];ne===void 0&&(ne={},W[N.id]=ne);let Q=ne[Z];return Q===void 0&&(Q=m(f()),ne[Z]=Q),Q}function m(U){const N=[],X=[],Z=[];for(let W=0;W<i;W++)N[W]=0,X[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:Z,object:U,attributes:{},index:null}}function d(U,N,X,Z){const W=l.attributes,ne=N.attributes;let Q=0;const xe=X.getAttributes();for(const se in xe)if(xe[se].location>=0){const J=W[se];let le=ne[se];if(le===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Z}function b(U,N,X,Z){const W={},ne=N.attributes;let Q=0;const xe=X.getAttributes();for(const se in xe)if(xe[se].location>=0){let J=ne[se];J===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),W[se]=le,Q++}l.attributes=W,l.attributesNum=Q,l.index=Z}function x(){const U=l.newAttributes;for(let N=0,X=U.length;N<X;N++)U[N]=0}function v(U){y(U,0)}function y(U,N){const X=l.newAttributes,Z=l.enabledAttributes,W=l.attributeDivisors;X[U]=1,Z[U]===0&&(o.enableVertexAttribArray(U),Z[U]=1),W[U]!==N&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,N),W[U]=N)}function M(){const U=l.newAttributes,N=l.enabledAttributes;for(let X=0,Z=N.length;X<Z;X++)N[X]!==U[X]&&(o.disableVertexAttribArray(X),N[X]=0)}function E(U,N,X,Z,W,ne){n.isWebGL2===!0&&(X===5124||X===5125)?o.vertexAttribIPointer(U,N,X,W,ne):o.vertexAttribPointer(U,N,X,Z,W,ne)}function C(U,N,X,Z){if(n.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=Z.attributes,ne=X.getAttributes(),Q=N.defaultAttributeValues;for(const xe in ne){const se=ne[xe];if(se.location>=0){let H=W[xe];if(H===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){const J=H.normalized,le=H.itemSize,pe=t.get(H);if(pe===void 0)continue;const B=pe.buffer,Pe=pe.type,Ce=pe.bytesPerElement;if(H.isInterleavedBufferAttribute){const oe=H.data,ye=oe.stride,te=H.offset;if(oe.isInstancedInterleavedBuffer){for(let Y=0;Y<se.locationSize;Y++)y(se.location+Y,oe.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Y=0;Y<se.locationSize;Y++)v(se.location+Y);o.bindBuffer(34962,B);for(let Y=0;Y<se.locationSize;Y++)E(se.location+Y,le/se.locationSize,Pe,J,ye*Ce,(te+le/se.locationSize*Y)*Ce)}else{if(H.isInstancedBufferAttribute){for(let oe=0;oe<se.locationSize;oe++)y(se.location+oe,H.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let oe=0;oe<se.locationSize;oe++)v(se.location+oe);o.bindBuffer(34962,B);for(let oe=0;oe<se.locationSize;oe++)E(se.location+oe,le/se.locationSize,Pe,J,le*Ce,le/se.locationSize*oe*Ce)}}else if(Q!==void 0){const J=Q[xe];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(se.location,J);break;case 3:o.vertexAttrib3fv(se.location,J);break;case 4:o.vertexAttrib4fv(se.location,J);break;default:o.vertexAttrib1fv(se.location,J)}}}}M()}function S(){k();for(const U in a){const N=a[U];for(const X in N){const Z=N[X];for(const W in Z)_(Z[W].object),delete Z[W];delete N[X]}delete a[U]}}function T(U){if(a[U.id]===void 0)return;const N=a[U.id];for(const X in N){const Z=N[X];for(const W in Z)_(Z[W].object),delete Z[W];delete N[X]}delete a[U.id]}function z(U){for(const N in a){const X=a[N];if(X[U.id]===void 0)continue;const Z=X[U.id];for(const W in Z)_(Z[W].object),delete Z[W];delete X[U.id]}}function k(){R(),u=!0,l!==c&&(l=c,p(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:k,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:v,disableUnusedAttributes:M}}function hg(o,e,t,n){const i=n.isWebGL2;let s;function r(l){s=l}function a(l,u){o.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,p;if(i)f=o,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,l,u,h),t.update(u,s,h)}this.setMode=r,this.render=a,this.renderInstances=c}function fg(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),p=o.getParameter(3379),_=o.getParameter(34076),g=o.getParameter(34921),m=o.getParameter(36347),d=o.getParameter(36348),b=o.getParameter(36349),x=f>0,v=r||e.has("OES_texture_float"),y=x&&v,M=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:y,maxSamples:M}}function dg(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new mi,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=o.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):l();else{const b=s?0:n,x=b*4;let v=d.clippingState||null;c.value=v,v=u(_,f,x,p);for(let y=0;y!==x;++y)v[y]=t[y];d.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const d=p+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,v=p;x!==g;++x,v+=4)r.copy(h[x]).applyMatrix4(b,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function pg(o){let e=new WeakMap;function t(r,a){return a===fo?r.mapping=gs:a===po&&(r.mapping=_s),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===fo||a===po)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Ld(c.height/2);return l.fromEquirectangularTexture(o,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class jo extends Vu{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,dc=[.125,.215,.35,.446,.526,.582],vi=20,Wa=new jo,pc=new Ve;let ja=null;const gi=(1+Math.sqrt(5))/2,es=1/gi,mc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,gi,es),new L(0,gi,-es),new L(es,0,gi),new L(-es,0,gi),new L(gi,es,0),new L(-gi,es,0)];class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ja=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja),e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:$s,format:pn,encoding:Pi,depthBuffer:!1},i=_c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(s)),this._blurMaterial=gg(s,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,i){const a=new hn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(pc),u.toneMapping=zn,u.autoClear=!1;const p=new Ws({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),_=new yt(new Ps,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(pc),g=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):b===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const x=this._cubeSize;Rr(i,b*x,d>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gs||e.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Rr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=mc[(i-1)%mc.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new yt(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const d=[];let b=0;for(let E=0;E<vi;++E){const C=E/g,S=Math.exp(-C*C/2);d.push(S),E===0?b+=S:E<m&&(b+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const v=this._sizeLods[i],y=3*v*(i>x-rs?i-x+rs:0),M=4*(this._cubeSize-v);Rr(t,y,M,3*v,2*v),c.setRenderTarget(t),c.render(h,Wa)}}function mg(o){const e=[],t=[],n=[];let i=o;const s=o-rs+1+dc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let c=1/a;r>o-rs?c=dc[r-o+rs-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,d=1,b=new Float32Array(g*_*p),x=new Float32Array(m*_*p),v=new Float32Array(d*_*p);for(let M=0;M<p;M++){const E=M%3*2/3-1,C=M>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];b.set(S,g*_*M),x.set(f,m*_*M);const T=[M,M,M,M,M,M];v.set(T,d*_*M)}const y=new Ke;y.setAttribute("position",new Et(b,g)),y.setAttribute("uv",new Et(x,m)),y.setAttribute("faceIndex",new Et(v,d)),e.push(y),i>rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _c(o,e,t){const n=new Li(o,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function gg(o,e,t){const n=new Float32Array(vi),i=new L(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function vc(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function xc(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function qo(){return`

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
	`}function _g(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===fo||c===po,u=c===gs||c===_s;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new gc(o)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new gc(o));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function vg(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xg(o,e,t,n){const i={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)e.update(g[m],34962)}}function l(h){const f=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let x=0,v=b.length;x<v;x+=3){const y=b[x+0],M=b[x+1],E=b[x+2];f.push(y,M,M,E,E,y)}}else{const b=_.array;g=_.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const y=x+0,M=x+1,E=x+2;f.push(y,M,M,E,E,y)}}const m=new(Ru(f)?Fu:Nu)(f,1);m.version=g;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function yg(o,e,t,n){const i=n.isWebGL2;let s;function r(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,p){o.drawElements(s,p,a,f*c),t.update(p,s,1)}function h(f,p,_){if(_===0)return;let g,m;if(i)g=o,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,f*c,_),t.update(p,s,_)}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=h}function Sg(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bg(o,e){return o[0]-e[0]}function Mg(o,e){return Math.abs(e[1])-Math.abs(o[1])}function wg(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new it,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let N=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),y===!0&&(S=3);let T=u.attributes.position.count*S,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const k=new Float32Array(T*z*4*g),R=new Ou(k,T,z,g);R.type=yi,R.needsUpdate=!0;const U=S*4;for(let X=0;X<g;X++){const Z=M[X],W=E[X],ne=C[X],Q=T*z*4*X;for(let xe=0;xe<Z.count;xe++){const se=xe*U;x===!0&&(r.fromBufferAttribute(Z,xe),k[Q+se+0]=r.x,k[Q+se+1]=r.y,k[Q+se+2]=r.z,k[Q+se+3]=0),v===!0&&(r.fromBufferAttribute(W,xe),k[Q+se+4]=r.x,k[Q+se+5]=r.y,k[Q+se+6]=r.z,k[Q+se+7]=0),y===!0&&(r.fromBufferAttribute(ne,xe),k[Q+se+8]=r.x,k[Q+se+9]=r.y,k[Q+se+10]=r.z,k[Q+se+11]=ne.itemSize===4?r.w:1)}}m={count:g,texture:R,size:new ce(T,z)},s.set(u,m),u.addEventListener("dispose",N)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const b=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(o,"morphTargetBaseInfluence",b),h.getUniforms().setValue(o,"morphTargetInfluences",f),h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<_;v++){const y=g[v];y[0]=v,y[1]=f[v]}g.sort(Mg);for(let v=0;v<8;v++)v<_&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(bg);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const y=a[v],M=y[0],E=y[1];M!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+v)!==m[M]&&u.setAttribute("morphTarget"+v,m[M]),d&&u.getAttribute("morphNormal"+v)!==d[M]&&u.setAttribute("morphNormal"+v,d[M]),i[v]=E,b+=E):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),d&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(o,"morphTargetBaseInfluence",x),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function Tg(o,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}const Wu=new qt,ju=new Ou,qu=new md,Xu=new Gu,yc=[],Sc=[],bc=new Float32Array(16),Mc=new Float32Array(9),wc=new Float32Array(4);function Ls(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=yc[i];if(s===void 0&&(s=new Float32Array(i),yc[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function dt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function pt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ca(o,e){let t=Sc[e];t===void 0&&(t=new Int32Array(e),Sc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Eg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Ag(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;o.uniform2fv(this.addr,e),pt(t,e)}}function Cg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;o.uniform3fv(this.addr,e),pt(t,e)}}function Pg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;o.uniform4fv(this.addr,e),pt(t,e)}}function Lg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;wc.set(n),o.uniformMatrix2fv(this.addr,!1,wc),pt(t,n)}}function Dg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Mc.set(n),o.uniformMatrix3fv(this.addr,!1,Mc),pt(t,n)}}function Rg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;bc.set(n),o.uniformMatrix4fv(this.addr,!1,bc),pt(t,n)}}function Ig(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Ug(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;o.uniform2iv(this.addr,e),pt(t,e)}}function Og(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;o.uniform3iv(this.addr,e),pt(t,e)}}function zg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;o.uniform4iv(this.addr,e),pt(t,e)}}function Ng(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Fg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;o.uniform2uiv(this.addr,e),pt(t,e)}}function Bg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;o.uniform3uiv(this.addr,e),pt(t,e)}}function kg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;o.uniform4uiv(this.addr,e),pt(t,e)}}function Vg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Wu,i)}function Gg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qu,i)}function Hg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xu,i)}function Wg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ju,i)}function jg(o){switch(o){case 5126:return Eg;case 35664:return Ag;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Rg;case 5124:case 35670:return Ig;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return zg;case 5125:return Ng;case 36294:return Fg;case 36295:return Bg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Wg}}function qg(o,e){o.uniform1fv(this.addr,e)}function Xg(o,e){const t=Ls(e,this.size,2);o.uniform2fv(this.addr,t)}function Yg(o,e){const t=Ls(e,this.size,3);o.uniform3fv(this.addr,t)}function Zg(o,e){const t=Ls(e,this.size,4);o.uniform4fv(this.addr,t)}function Jg(o,e){const t=Ls(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Kg(o,e){const t=Ls(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function $g(o,e){const t=Ls(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Qg(o,e){o.uniform1iv(this.addr,e)}function e_(o,e){o.uniform2iv(this.addr,e)}function t_(o,e){o.uniform3iv(this.addr,e)}function n_(o,e){o.uniform4iv(this.addr,e)}function i_(o,e){o.uniform1uiv(this.addr,e)}function s_(o,e){o.uniform2uiv(this.addr,e)}function r_(o,e){o.uniform3uiv(this.addr,e)}function a_(o,e){o.uniform4uiv(this.addr,e)}function o_(o,e,t){const n=this.cache,i=e.length,s=ca(t,i);dt(n,s)||(o.uniform1iv(this.addr,s),pt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Wu,s[r])}function l_(o,e,t){const n=this.cache,i=e.length,s=ca(t,i);dt(n,s)||(o.uniform1iv(this.addr,s),pt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||qu,s[r])}function c_(o,e,t){const n=this.cache,i=e.length,s=ca(t,i);dt(n,s)||(o.uniform1iv(this.addr,s),pt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Xu,s[r])}function u_(o,e,t){const n=this.cache,i=e.length,s=ca(t,i);dt(n,s)||(o.uniform1iv(this.addr,s),pt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||ju,s[r])}function h_(o){switch(o){case 5126:return qg;case 35664:return Xg;case 35665:return Yg;case 35666:return Zg;case 35674:return Jg;case 35675:return Kg;case 35676:return $g;case 5124:case 35670:return Qg;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return u_}}class f_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=jg(t.type)}}class d_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=h_(t.type)}}class p_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Tc(o,e){o.seq.push(e),o.map[e.id]=e}function m_(o,e,t){const n=o.name,i=n.length;for(qa.lastIndex=0;;){const s=qa.exec(n),r=qa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Tc(t,l===void 0?new f_(a,o,e):new d_(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new p_(a),Tc(t,h)),t=h}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);m_(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Ec(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let g_=0;function __(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function v_(o){switch(o){case Pi:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Ac(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+__(o.getShaderSource(e),r)}else return i}function x_(o,e){const t=v_(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function y_(o,e){let t;switch(e){case Of:t="Linear";break;case zf:t="Reinhard";break;case Nf:t="OptimizedCineon";break;case Ff:t="ACESFilmic";break;case Bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function S_(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function b_(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M_(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Vs(o){return o!==""}function Cc(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(o){return o.replace(w_,T_)}function T_(o,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xo(t)}const E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(o){return o.replace(E_,A_)}function A_(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Dc(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C_(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ks&&(e="SHADOWMAP_TYPE_VSM"),e}function P_(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L_(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function D_(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Go:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function R_(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function I_(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=C_(t),l=P_(t),u=L_(t),h=D_(t),f=R_(t),p=t.isWebGL2?"":S_(t),_=b_(s),g=i.createProgram();let m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(Vs).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(Vs).join(`
`),d.length>0&&(d+=`
`)):(m=[Dc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),d=[p,Dc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==zn?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,x_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),r=xo(r),r=Cc(r,t),r=Pc(r,t),a=xo(a),a=Cc(a,t),a=Pc(a,t),r=Lc(r),a=Lc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=b+m+r,v=b+d+a,y=Ec(i,35633,x),M=Ec(i,35632,v);if(i.attachShader(g,y),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){const S=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(y).trim(),z=i.getShaderInfoLog(M).trim();let k=!0,R=!0;if(i.getProgramParameter(g,35714)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,y,M);else{const U=Ac(i,y,"vertex"),N=Ac(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+S+`
`+U+`
`+N)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||z==="")&&(R=!1);R&&(this.diagnostics={runnable:k,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:z,prefix:d}})}i.deleteShader(y),i.deleteShader(M);let E;this.getUniforms=function(){return E===void 0&&(E=new jr(i,g)),E};let C;return this.getAttributes=function(){return C===void 0&&(C=M_(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=M,this}let U_=0;class O_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z_(e),t.set(e,n)),n}}class z_{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}}function N_(o,e,t,n,i,s,r){const a=new Ho,c=new O_,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===1?"uv2":"uv"}function m(S,T,z,k,R){const U=k.fog,N=R.geometry,X=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),W=!!Z&&Z.mapping===aa?Z.image.height:null,ne=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xe=Q!==void 0?Q.length:0;let se=0;N.morphAttributes.position!==void 0&&(se=1),N.morphAttributes.normal!==void 0&&(se=2),N.morphAttributes.color!==void 0&&(se=3);let H,J,le,pe;if(ne){const ge=fn[ne];H=ge.vertexShader,J=ge.fragmentShader}else H=S.vertexShader,J=S.fragmentShader,c.update(S),le=c.getVertexShaderID(S),pe=c.getFragmentShaderID(S);const B=o.getRenderTarget(),Pe=R.isInstancedMesh===!0,Ce=!!S.map,oe=!!S.matcap,ye=!!Z,te=!!S.aoMap,Y=!!S.lightMap,ee=!!S.bumpMap,_e=!!S.normalMap,ue=!!S.displacementMap,Ee=!!S.emissiveMap,Ae=!!S.metalnessMap,Me=!!S.roughnessMap,Ie=S.clearcoat>0,He=S.iridescence>0,P=S.sheen>0,w=S.transmission>0,G=Ie&&!!S.clearcoatMap,ie=Ie&&!!S.clearcoatNormalMap,re=Ie&&!!S.clearcoatRoughnessMap,fe=He&&!!S.iridescenceMap,D=He&&!!S.iridescenceThicknessMap,$=P&&!!S.sheenColorMap,V=P&&!!S.sheenRoughnessMap,de=!!S.specularMap,ve=!!S.specularColorMap,be=!!S.specularIntensityMap,me=w&&!!S.transmissionMap,Se=w&&!!S.thicknessMap,De=!!S.gradientMap,ze=!!S.alphaMap,rt=S.alphaTest>0,I=!!S.extensions,q=!!N.attributes.uv2;return{isWebGL2:u,shaderID:ne,shaderName:S.type,vertexShader:H,fragmentShader:J,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Pe,instancingColor:Pe&&R.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?o.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Pi,map:Ce,matcap:oe,envMap:ye,envMapMode:ye&&Z.mapping,envMapCubeUVHeight:W,aoMap:te,lightMap:Y,bumpMap:ee,normalMap:_e,displacementMap:f&&ue,emissiveMap:Ee,normalMapObjectSpace:_e&&S.normalMapType===sd,normalMapTangentSpace:_e&&S.normalMapType===Lu,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&S.map.encoding===Je,metalnessMap:Ae,roughnessMap:Me,clearcoat:Ie,clearcoatMap:G,clearcoatNormalMap:ie,clearcoatRoughnessMap:re,iridescence:He,iridescenceMap:fe,iridescenceThicknessMap:D,sheen:P,sheenColorMap:$,sheenRoughnessMap:V,specularMap:de,specularColorMap:ve,specularIntensityMap:be,transmission:w,transmissionMap:me,thicknessMap:Se,gradientMap:De,opaque:S.transparent===!1&&S.blending===cs,alphaMap:ze,alphaTest:rt,combine:S.combine,mapUv:Ce&&g(S.map.channel),aoMapUv:te&&g(S.aoMap.channel),lightMapUv:Y&&g(S.lightMap.channel),bumpMapUv:ee&&g(S.bumpMap.channel),normalMapUv:_e&&g(S.normalMap.channel),displacementMapUv:ue&&g(S.displacementMap.channel),emissiveMapUv:Ee&&g(S.emissiveMap.channel),metalnessMapUv:Ae&&g(S.metalnessMap.channel),roughnessMapUv:Me&&g(S.roughnessMap.channel),clearcoatMapUv:G&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:D&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:$&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(S.sheenRoughnessMap.channel),specularMapUv:de&&g(S.specularMap.channel),specularColorMapUv:ve&&g(S.specularColorMap.channel),specularIntensityMapUv:be&&g(S.specularIntensityMap.channel),transmissionMapUv:me&&g(S.transmissionMap.channel),thicknessMapUv:Se&&g(S.thicknessMap.channel),alphaMapUv:ze&&g(S.alphaMap.channel),vertexTangents:_e&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs2:q,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(Ce||ze),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:R.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:S.toneMapped?o.toneMapping:zn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xn,flipSided:S.side===Ut,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:I&&S.extensions.derivatives===!0,extensionFragDepth:I&&S.extensions.fragDepth===!0,extensionDrawBuffers:I&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)T.push(z),T.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(b(T,S),x(T,S),T.push(o.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function b(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),S.push(a.mask)}function v(S){const T=_[S.type];let z;if(T){const k=fn[T];z=ku.clone(k.uniforms)}else z=S.uniforms;return z}function y(S,T){let z;for(let k=0,R=l.length;k<R;k++){const U=l[k];if(U.cacheKey===T){z=U,++z.usedTimes;break}}return z===void 0&&(z=new I_(o,T,S,s),l.push(z)),z}function M(S){if(--S.usedTimes===0){const T=l.indexOf(S);l[T]=l[l.length-1],l.pop(),S.destroy()}}function E(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:C}}function F_(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function B_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Rc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ic(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,f,p,_,g,m){let d=o[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},o[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=m),e++,d}function a(h,f,p,_,g,m){const d=r(h,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(h,f,p,_,g,m){const d=r(h,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||B_),n.length>1&&n.sort(f||Rc),i.length>1&&i.sort(f||Rc)}function u(){for(let h=e,f=o.length;h<f;h++){const p=o[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function k_(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new Ic,o.set(n,[r])):i>=s.length?(r=new Ic,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function V_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ve};break;case"SpotLight":t={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return o[e.id]=t,t}}}function G_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let H_=0;function W_(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function j_(o,e){const t=new V_,n=G_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new L);const s=new L,r=new nt,a=new nt;function c(u,h){let f=0,p=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,m=0,d=0,b=0,x=0,v=0,y=0,M=0,E=0,C=0;u.sort(W_);const S=h===!0?Math.PI:1;for(let z=0,k=u.length;z<k;z++){const R=u[z],U=R.color,N=R.intensity,X=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=U.r*N*S,p+=U.g*N*S,_+=U.b*N*S;else if(R.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],N);else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const ne=R.shadow,Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=R.shadow.matrix,v++}i.directional[g]=W,g++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(U).multiplyScalar(N*S),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[d]=W;const ne=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,ne.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[d]=ne.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,i.spotShadow[d]=Q,i.spotShadowMap[d]=Z,M++}d++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(U).multiplyScalar(N),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[b]=W,b++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*S),W.distance=R.distance,W.decay=R.decay,R.castShadow){const ne=R.shadow,Q=n.get(R);Q.shadowBias=ne.bias,Q.shadowNormalBias=ne.normalBias,Q.shadowRadius=ne.radius,Q.shadowMapSize=ne.mapSize,Q.shadowCameraNear=ne.camera.near,Q.shadowCameraFar=ne.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=R.shadow.matrix,y++}i.point[m]=W,m++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(N*S),W.groundColor.copy(R.groundColor).multiplyScalar(N*S),i.hemi[x]=W,x++}}b>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==b||T.hemiLength!==x||T.numDirectionalShadows!==v||T.numPointShadows!==y||T.numSpotShadows!==M||T.numSpotMaps!==E)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,T.directionalLength=g,T.pointLength=m,T.spotLength=d,T.rectAreaLength=b,T.hemiLength=x,T.numDirectionalShadows=v,T.numPointShadows=y,T.numSpotShadows=M,T.numSpotMaps=E,i.version=H_++)}function l(u,h){let f=0,p=0,_=0,g=0,m=0;const d=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const v=u[b];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(v.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),_++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function Uc(o,e){const t=new j_(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function q_(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let c;return a===void 0?(c=new Uc(o,e),t.set(s,[c])):r>=a.length?(c=new Uc(o,e),a.push(c)):c=a[r],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class X_ extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y_ extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`;function K_(o,e,t){let n=new Wo;const i=new ce,s=new ce,r=new it,a=new X_({depthPacking:id}),c=new Y_,l={},u=t.maxTextureSize,h={[ni]:Ut,[Ut]:ni,[xn]:xn},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ke;_.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu,this.render=function(v,y,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const E=o.getRenderTarget(),C=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),T=o.state;T.setBlending($n),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let z=0,k=v.length;z<k;z++){const R=v[z],U=R.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const N=U.getFrameExtents();if(i.multiply(N),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/N.x),i.x=s.x*N.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/N.y),i.y=s.y*N.y,U.mapSize.y=s.y)),U.map===null){const Z=this.type!==ks?{minFilter:Rt,magFilter:Rt}:{};U.map=new Li(i.x,i.y,Z),U.map.texture.name=R.name+".shadowMap",U.camera.updateProjectionMatrix()}o.setRenderTarget(U.map),o.clear();const X=U.getViewportCount();for(let Z=0;Z<X;Z++){const W=U.getViewport(Z);r.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),T.viewport(r),U.updateMatrices(R,Z),n=U.getFrustum(),x(y,M,U.camera,R,this.type)}U.isPointLightShadow!==!0&&this.type===ks&&d(U,M),U.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(E,C,S)};function d(v,y){const M=e.update(g);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Li(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(y,null,M,f,g,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(y,null,M,p,g,null)}function b(v,y,M,E){let C=null;const S=M.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(S!==void 0)C=S;else if(C=M.isPointLight===!0?c:a,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const T=C.uuid,z=y.uuid;let k=l[T];k===void 0&&(k={},l[T]=k);let R=k[z];R===void 0&&(R=C.clone(),k[z]=R),C=R}if(C.visible=y.visible,C.wireframe=y.wireframe,E===ks?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:h[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const T=o.properties.get(C);T.light=M}return C}function x(v,y,M,E,C){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===ks)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,v.matrixWorld);const z=e.update(v),k=v.material;if(Array.isArray(k)){const R=z.groups;for(let U=0,N=R.length;U<N;U++){const X=R[U],Z=k[X.materialIndex];if(Z&&Z.visible){const W=b(v,Z,E,C);o.renderBufferDirect(M,null,z,W,v,X)}}}else if(k.visible){const R=b(v,k,E,C);o.renderBufferDirect(M,null,z,R,v,null)}}const T=v.children;for(let z=0,k=T.length;z<k;z++)x(T[z],y,M,E,C)}}function $_(o,e,t){const n=t.isWebGL2;function i(){let I=!1;const q=new it;let ae=null;const ge=new it(0,0,0,0);return{setMask:function(we){ae!==we&&!I&&(o.colorMask(we,we,we,we),ae=we)},setLocked:function(we){I=we},setClear:function(we,Ze,$e,bt,Gn){Gn===!0&&(we*=bt,Ze*=bt,$e*=bt),q.set(we,Ze,$e,bt),ge.equals(q)===!1&&(o.clearColor(we,Ze,$e,bt),ge.copy(q))},reset:function(){I=!1,ae=null,ge.set(-1,0,0,0)}}}function s(){let I=!1,q=null,ae=null,ge=null;return{setTest:function(we){we?B(2929):Pe(2929)},setMask:function(we){q!==we&&!I&&(o.depthMask(we),q=we)},setFunc:function(we){if(ae!==we){switch(we){case Af:o.depthFunc(512);break;case Au:o.depthFunc(519);break;case Cf:o.depthFunc(513);break;case ho:o.depthFunc(515);break;case Pf:o.depthFunc(514);break;case Lf:o.depthFunc(518);break;case Df:o.depthFunc(516);break;case Rf:o.depthFunc(517);break;default:o.depthFunc(515)}ae=we}},setLocked:function(we){I=we},setClear:function(we){ge!==we&&(o.clearDepth(we),ge=we)},reset:function(){I=!1,q=null,ae=null,ge=null}}}function r(){let I=!1,q=null,ae=null,ge=null,we=null,Ze=null,$e=null,bt=null,Gn=null;return{setTest:function(at){I||(at?B(2960):Pe(2960))},setMask:function(at){q!==at&&!I&&(o.stencilMask(at),q=at)},setFunc:function(at,Zt,gn){(ae!==at||ge!==Zt||we!==gn)&&(o.stencilFunc(at,Zt,gn),ae=at,ge=Zt,we=gn)},setOp:function(at,Zt,gn){(Ze!==at||$e!==Zt||bt!==gn)&&(o.stencilOp(at,Zt,gn),Ze=at,$e=Zt,bt=gn)},setLocked:function(at){I=at},setClear:function(at){Gn!==at&&(o.clearStencil(at),Gn=at)},reset:function(){I=!1,q=null,ae=null,ge=null,we=null,Ze=null,$e=null,bt=null,Gn=null}}}const a=new i,c=new s,l=new r,u=new WeakMap,h=new WeakMap;let f={},p={},_=new WeakMap,g=[],m=null,d=!1,b=null,x=null,v=null,y=null,M=null,E=null,C=null,S=!1,T=null,z=null,k=null,R=null,U=null;const N=o.getParameter(35661);let X=!1,Z=0;const W=o.getParameter(7938);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=Z>=2);let ne=null,Q={};const xe=o.getParameter(3088),se=o.getParameter(2978),H=new it().fromArray(xe),J=new it().fromArray(se);function le(I,q,ae){const ge=new Uint8Array(4),we=o.createTexture();o.bindTexture(I,we),o.texParameteri(I,10241,9728),o.texParameteri(I,10240,9728);for(let Ze=0;Ze<ae;Ze++)o.texImage2D(q+Ze,0,6408,1,1,0,6408,5121,ge);return we}const pe={};pe[3553]=le(3553,3553,1),pe[34067]=le(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),B(2929),c.setFunc(ho),ue(!1),Ee(yl),B(2884),ee($n);function B(I){f[I]!==!0&&(o.enable(I),f[I]=!0)}function Pe(I){f[I]!==!1&&(o.disable(I),f[I]=!1)}function Ce(I,q){return p[I]!==q?(o.bindFramebuffer(I,q),p[I]=q,n&&(I===36009&&(p[36160]=q),I===36160&&(p[36009]=q)),!0):!1}function oe(I,q){let ae=g,ge=!1;if(I)if(ae=_.get(q),ae===void 0&&(ae=[],_.set(q,ae)),I.isWebGLMultipleRenderTargets){const we=I.texture;if(ae.length!==we.length||ae[0]!==36064){for(let Ze=0,$e=we.length;Ze<$e;Ze++)ae[Ze]=36064+Ze;ae.length=we.length,ge=!0}}else ae[0]!==36064&&(ae[0]=36064,ge=!0);else ae[0]!==1029&&(ae[0]=1029,ge=!0);ge&&(t.isWebGL2?o.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ye(I){return m!==I?(o.useProgram(I),m=I,!0):!1}const te={[ss]:32774,[gf]:32778,[_f]:32779};if(n)te[wl]=32775,te[Tl]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(te[wl]=I.MIN_EXT,te[Tl]=I.MAX_EXT)}const Y={[vf]:0,[xf]:1,[yf]:768,[Tu]:770,[Ef]:776,[wf]:774,[bf]:772,[Sf]:769,[Eu]:771,[Tf]:775,[Mf]:773};function ee(I,q,ae,ge,we,Ze,$e,bt){if(I===$n){d===!0&&(Pe(3042),d=!1);return}if(d===!1&&(B(3042),d=!0),I!==mf){if(I!==b||bt!==S){if((x!==ss||M!==ss)&&(o.blendEquation(32774),x=ss,M=ss),bt)switch(I){case cs:o.blendFuncSeparate(1,771,1,771);break;case Sl:o.blendFunc(1,1);break;case bl:o.blendFuncSeparate(0,769,0,1);break;case Ml:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case cs:o.blendFuncSeparate(770,771,1,771);break;case Sl:o.blendFunc(770,1);break;case bl:o.blendFuncSeparate(0,769,0,1);break;case Ml:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,y=null,E=null,C=null,b=I,S=bt}return}we=we||q,Ze=Ze||ae,$e=$e||ge,(q!==x||we!==M)&&(o.blendEquationSeparate(te[q],te[we]),x=q,M=we),(ae!==v||ge!==y||Ze!==E||$e!==C)&&(o.blendFuncSeparate(Y[ae],Y[ge],Y[Ze],Y[$e]),v=ae,y=ge,E=Ze,C=$e),b=I,S=!1}function _e(I,q){I.side===xn?Pe(2884):B(2884);let ae=I.side===Ut;q&&(ae=!ae),ue(ae),I.blending===cs&&I.transparent===!1?ee($n):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const ge=I.stencilWrite;l.setTest(ge),ge&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?B(32926):Pe(32926)}function ue(I){T!==I&&(I?o.frontFace(2304):o.frontFace(2305),T=I)}function Ee(I){I!==ff?(B(2884),I!==z&&(I===yl?o.cullFace(1029):I===df?o.cullFace(1028):o.cullFace(1032))):Pe(2884),z=I}function Ae(I){I!==k&&(X&&o.lineWidth(I),k=I)}function Me(I,q,ae){I?(B(32823),(R!==q||U!==ae)&&(o.polygonOffset(q,ae),R=q,U=ae)):Pe(32823)}function Ie(I){I?B(3089):Pe(3089)}function He(I){I===void 0&&(I=33984+N-1),ne!==I&&(o.activeTexture(I),ne=I)}function P(I,q,ae){ae===void 0&&(ne===null?ae=33984+N-1:ae=ne);let ge=Q[ae];ge===void 0&&(ge={type:void 0,texture:void 0},Q[ae]=ge),(ge.type!==I||ge.texture!==q)&&(ne!==ae&&(o.activeTexture(ae),ne=ae),o.bindTexture(I,q||pe[I]),ge.type=I,ge.texture=q)}function w(){const I=Q[ne];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function G(){try{o.compressedTexImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{o.compressedTexImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{o.texSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{o.texSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{o.texStorage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{o.texStorage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{o.texImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{o.texImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){H.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),H.copy(I))}function Se(I){J.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function De(I,q){let ae=h.get(q);ae===void 0&&(ae=new WeakMap,h.set(q,ae));let ge=ae.get(I);ge===void 0&&(ge=o.getUniformBlockIndex(q,I.name),ae.set(I,ge))}function ze(I,q){const ge=h.get(q).get(I);u.get(q)!==ge&&(o.uniformBlockBinding(q,ge,I.__bindingPointIndex),u.set(q,ge))}function rt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},ne=null,Q={},p={},_=new WeakMap,g=[],m=null,d=!1,b=null,x=null,v=null,y=null,M=null,E=null,C=null,S=!1,T=null,z=null,k=null,R=null,U=null,H.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:B,disable:Pe,bindFramebuffer:Ce,drawBuffers:oe,useProgram:ye,setBlending:ee,setMaterial:_e,setFlipSided:ue,setCullFace:Ee,setLineWidth:Ae,setPolygonOffset:Me,setScissorTest:Ie,activeTexture:He,bindTexture:P,unbindTexture:w,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:ve,texImage3D:be,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:V,texStorage3D:de,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:D,compressedTexSubImage3D:$,scissor:me,viewport:Se,reset:rt}}function Q_(o,e,t,n,i,s,r){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,w){return d?new OffscreenCanvas(P,w):Kr("canvas")}function x(P,w,G,ie){let re=1;if((P.width>ie||P.height>ie)&&(re=ie/Math.max(P.width,P.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const fe=w?od:Math.floor,D=fe(re*P.width),$=fe(re*P.height);g===void 0&&(g=b(D,$));const V=G?b(D,$):g;return V.width=D,V.height=$,V.getContext("2d").drawImage(P,0,0,D,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+D+"x"+$+")."),V}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return $l(P.width)&&$l(P.height)}function y(P){return a?!1:P.wrapS!==dn||P.wrapT!==dn||P.minFilter!==Rt&&P.minFilter!==en}function M(P,w){return P.generateMipmaps&&w&&P.minFilter!==Rt&&P.minFilter!==en}function E(P){o.generateMipmap(P)}function C(P,w,G,ie,re=!1){if(a===!1)return w;if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=w;return w===6403&&(G===5126&&(fe=33326),G===5131&&(fe=33325),G===5121&&(fe=33321)),w===33319&&(G===5126&&(fe=33328),G===5131&&(fe=33327),G===5121&&(fe=33323)),w===6408&&(G===5126&&(fe=34836),G===5131&&(fe=34842),G===5121&&(fe=ie===Je&&re===!1?35907:32856),G===32819&&(fe=32854),G===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function S(P,w,G){return M(P,G)===!0||P.isFramebufferTexture&&P.minFilter!==Rt&&P.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function T(P){return P===Rt||P===El||P===va?9728:9729}function z(P){const w=P.target;w.removeEventListener("dispose",z),R(w),w.isVideoTexture&&_.delete(w)}function k(P){const w=P.target;w.removeEventListener("dispose",k),N(w)}function R(P){const w=n.get(P);if(w.__webglInit===void 0)return;const G=P.source,ie=m.get(G);if(ie){const re=ie[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(P),Object.keys(ie).length===0&&m.delete(G)}n.remove(P)}function U(P){const w=n.get(P);o.deleteTexture(w.__webglTexture);const G=P.source,ie=m.get(G);delete ie[w.__cacheKey],r.memory.textures--}function N(P){const w=P.texture,G=n.get(P),ie=n.get(w);if(ie.__webglTexture!==void 0&&(o.deleteTexture(ie.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)o.deleteFramebuffer(G.__webglFramebuffer[re]),G.__webglDepthbuffer&&o.deleteRenderbuffer(G.__webglDepthbuffer[re]);else{if(o.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&o.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&o.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let re=0;re<G.__webglColorRenderbuffer.length;re++)G.__webglColorRenderbuffer[re]&&o.deleteRenderbuffer(G.__webglColorRenderbuffer[re]);G.__webglDepthRenderbuffer&&o.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let re=0,fe=w.length;re<fe;re++){const D=n.get(w[re]);D.__webglTexture&&(o.deleteTexture(D.__webglTexture),r.memory.textures--),n.remove(w[re])}n.remove(w),n.remove(P)}let X=0;function Z(){X=0}function W(){const P=X;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),X+=1,P}function ne(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function Q(P,w){const G=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(G,P,w);return}}t.bindTexture(3553,G.__webglTexture,33984+w)}function xe(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Pe(G,P,w);return}t.bindTexture(35866,G.__webglTexture,33984+w)}function se(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Pe(G,P,w);return}t.bindTexture(32879,G.__webglTexture,33984+w)}function H(P,w){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Ce(G,P,w);return}t.bindTexture(34067,G.__webglTexture,33984+w)}const J={[mo]:10497,[dn]:33071,[go]:33648},le={[Rt]:9728,[El]:9984,[va]:9986,[en]:9729,[kf]:9985,[Ks]:9987};function pe(P,w,G){if(G?(o.texParameteri(P,10242,J[w.wrapS]),o.texParameteri(P,10243,J[w.wrapT]),(P===32879||P===35866)&&o.texParameteri(P,32882,J[w.wrapR]),o.texParameteri(P,10240,le[w.magFilter]),o.texParameteri(P,10241,le[w.minFilter])):(o.texParameteri(P,10242,33071),o.texParameteri(P,10243,33071),(P===32879||P===35866)&&o.texParameteri(P,32882,33071),(w.wrapS!==dn||w.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(P,10240,T(w.magFilter)),o.texParameteri(P,10241,T(w.minFilter)),w.minFilter!==Rt&&w.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Rt||w.minFilter!==va&&w.minFilter!==Ks||w.type===yi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(o.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function B(P,w){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",z));const ie=w.source;let re=m.get(ie);re===void 0&&(re={},m.set(ie,re));const fe=ne(w);if(fe!==P.__cacheKey){re[fe]===void 0&&(re[fe]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,G=!0),re[fe].usedTimes++;const D=re[P.__cacheKey];D!==void 0&&(re[P.__cacheKey].usedTimes--,D.usedTimes===0&&U(w)),P.__cacheKey=fe,P.__webglTexture=re[fe].texture}return G}function Pe(P,w,G){let ie=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=35866),w.isData3DTexture&&(ie=32879);const re=B(P,w),fe=w.source;t.bindTexture(ie,P.__webglTexture,33984+G);const D=n.get(fe);if(fe.version!==D.__version||re===!0){t.activeTexture(33984+G),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const $=y(w)&&v(w.image)===!1;let V=x(w.image,$,!1,u);V=He(w,V);const de=v(V)||a,ve=s.convert(w.format,w.encoding);let be=s.convert(w.type),me=C(w.internalFormat,ve,be,w.encoding,w.isVideoTexture);pe(ie,w,de);let Se;const De=w.mipmaps,ze=a&&w.isVideoTexture!==!0,rt=D.__version===void 0||re===!0,I=S(w,V,de);if(w.isDepthTexture)me=6402,a?w.type===yi?me=36012:w.type===xi?me=33190:w.type===us?me=35056:me=33189:w.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Mi&&me===6402&&w.type!==Pu&&w.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=xi,be=s.convert(w.type)),w.format===vs&&me===6402&&(me=34041,w.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=us,be=s.convert(w.type))),rt&&(ze?t.texStorage2D(3553,1,me,V.width,V.height):t.texImage2D(3553,0,me,V.width,V.height,0,ve,be,null));else if(w.isDataTexture)if(De.length>0&&de){ze&&rt&&t.texStorage2D(3553,I,me,De[0].width,De[0].height);for(let q=0,ae=De.length;q<ae;q++)Se=De[q],ze?t.texSubImage2D(3553,q,0,0,Se.width,Se.height,ve,be,Se.data):t.texImage2D(3553,q,me,Se.width,Se.height,0,ve,be,Se.data);w.generateMipmaps=!1}else ze?(rt&&t.texStorage2D(3553,I,me,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ve,be,V.data)):t.texImage2D(3553,0,me,V.width,V.height,0,ve,be,V.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&rt&&t.texStorage3D(35866,I,me,De[0].width,De[0].height,V.depth);for(let q=0,ae=De.length;q<ae;q++)Se=De[q],w.format!==pn?ve!==null?ze?t.compressedTexSubImage3D(35866,q,0,0,0,Se.width,Se.height,V.depth,ve,Se.data,0,0):t.compressedTexImage3D(35866,q,me,Se.width,Se.height,V.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,q,0,0,0,Se.width,Se.height,V.depth,ve,be,Se.data):t.texImage3D(35866,q,me,Se.width,Se.height,V.depth,0,ve,be,Se.data)}else{ze&&rt&&t.texStorage2D(3553,I,me,De[0].width,De[0].height);for(let q=0,ae=De.length;q<ae;q++)Se=De[q],w.format!==pn?ve!==null?ze?t.compressedTexSubImage2D(3553,q,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(3553,q,me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,q,0,0,Se.width,Se.height,ve,be,Se.data):t.texImage2D(3553,q,me,Se.width,Se.height,0,ve,be,Se.data)}else if(w.isDataArrayTexture)ze?(rt&&t.texStorage3D(35866,I,me,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ve,be,V.data)):t.texImage3D(35866,0,me,V.width,V.height,V.depth,0,ve,be,V.data);else if(w.isData3DTexture)ze?(rt&&t.texStorage3D(32879,I,me,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ve,be,V.data)):t.texImage3D(32879,0,me,V.width,V.height,V.depth,0,ve,be,V.data);else if(w.isFramebufferTexture){if(rt)if(ze)t.texStorage2D(3553,I,me,V.width,V.height);else{let q=V.width,ae=V.height;for(let ge=0;ge<I;ge++)t.texImage2D(3553,ge,me,q,ae,0,ve,be,null),q>>=1,ae>>=1}}else if(De.length>0&&de){ze&&rt&&t.texStorage2D(3553,I,me,De[0].width,De[0].height);for(let q=0,ae=De.length;q<ae;q++)Se=De[q],ze?t.texSubImage2D(3553,q,0,0,ve,be,Se):t.texImage2D(3553,q,me,ve,be,Se);w.generateMipmaps=!1}else ze?(rt&&t.texStorage2D(3553,I,me,V.width,V.height),t.texSubImage2D(3553,0,0,0,ve,be,V)):t.texImage2D(3553,0,me,ve,be,V);M(w,de)&&E(ie),D.__version=fe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ce(P,w,G){if(w.image.length!==6)return;const ie=B(P,w),re=w.source;t.bindTexture(34067,P.__webglTexture,33984+G);const fe=n.get(re);if(re.version!==fe.__version||ie===!0){t.activeTexture(33984+G),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const D=w.isCompressedTexture||w.image[0].isCompressedTexture,$=w.image[0]&&w.image[0].isDataTexture,V=[];for(let q=0;q<6;q++)!D&&!$?V[q]=x(w.image[q],!1,!0,l):V[q]=$?w.image[q].image:w.image[q],V[q]=He(w,V[q]);const de=V[0],ve=v(de)||a,be=s.convert(w.format,w.encoding),me=s.convert(w.type),Se=C(w.internalFormat,be,me,w.encoding),De=a&&w.isVideoTexture!==!0,ze=fe.__version===void 0||ie===!0;let rt=S(w,de,ve);pe(34067,w,ve);let I;if(D){De&&ze&&t.texStorage2D(34067,rt,Se,de.width,de.height);for(let q=0;q<6;q++){I=V[q].mipmaps;for(let ae=0;ae<I.length;ae++){const ge=I[ae];w.format!==pn?be!==null?De?t.compressedTexSubImage2D(34069+q,ae,0,0,ge.width,ge.height,be,ge.data):t.compressedTexImage2D(34069+q,ae,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+q,ae,0,0,ge.width,ge.height,be,me,ge.data):t.texImage2D(34069+q,ae,Se,ge.width,ge.height,0,be,me,ge.data)}}}else{I=w.mipmaps,De&&ze&&(I.length>0&&rt++,t.texStorage2D(34067,rt,Se,V[0].width,V[0].height));for(let q=0;q<6;q++)if($){De?t.texSubImage2D(34069+q,0,0,0,V[q].width,V[q].height,be,me,V[q].data):t.texImage2D(34069+q,0,Se,V[q].width,V[q].height,0,be,me,V[q].data);for(let ae=0;ae<I.length;ae++){const we=I[ae].image[q].image;De?t.texSubImage2D(34069+q,ae+1,0,0,we.width,we.height,be,me,we.data):t.texImage2D(34069+q,ae+1,Se,we.width,we.height,0,be,me,we.data)}}else{De?t.texSubImage2D(34069+q,0,0,0,be,me,V[q]):t.texImage2D(34069+q,0,Se,be,me,V[q]);for(let ae=0;ae<I.length;ae++){const ge=I[ae];De?t.texSubImage2D(34069+q,ae+1,0,0,be,me,ge.image[q]):t.texImage2D(34069+q,ae+1,Se,be,me,ge.image[q])}}}M(w,ve)&&E(34067),fe.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function oe(P,w,G,ie,re){const fe=s.convert(G.format,G.encoding),D=s.convert(G.type),$=C(G.internalFormat,fe,D,G.encoding);n.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,$,w.width,w.height,w.depth,0,fe,D,null):t.texImage2D(re,0,$,w.width,w.height,0,fe,D,null)),t.bindFramebuffer(36160,P),Me(w)?f.framebufferTexture2DMultisampleEXT(36160,ie,re,n.get(G).__webglTexture,0,Ae(w)):(re===3553||re>=34069&&re<=34074)&&o.framebufferTexture2D(36160,ie,re,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ye(P,w,G){if(o.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let ie=33189;if(G||Me(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===yi?ie=36012:re.type===xi&&(ie=33190));const fe=Ae(w);Me(w)?f.renderbufferStorageMultisampleEXT(36161,fe,ie,w.width,w.height):o.renderbufferStorageMultisample(36161,fe,ie,w.width,w.height)}else o.renderbufferStorage(36161,ie,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const ie=Ae(w);G&&Me(w)===!1?o.renderbufferStorageMultisample(36161,ie,35056,w.width,w.height):Me(w)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,P)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ie.length;re++){const fe=ie[re],D=s.convert(fe.format,fe.encoding),$=s.convert(fe.type),V=C(fe.internalFormat,D,$,fe.encoding),de=Ae(w);G&&Me(w)===!1?o.renderbufferStorageMultisample(36161,de,V,w.width,w.height):Me(w)?f.renderbufferStorageMultisampleEXT(36161,de,V,w.width,w.height):o.renderbufferStorage(36161,V,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function te(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const ie=n.get(w.depthTexture).__webglTexture,re=Ae(w);if(w.depthTexture.format===Mi)Me(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,re):o.framebufferTexture2D(36160,36096,3553,ie,0);else if(w.depthTexture.format===vs)Me(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,re):o.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function Y(P){const w=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");te(w.__webglFramebuffer,P)}else if(G){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=o.createRenderbuffer(),ye(w.__webglDepthbuffer[ie],P,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),ye(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function ee(P,w,G){const ie=n.get(P);w!==void 0&&oe(ie.__webglFramebuffer,P,P.texture,36064,3553),G!==void 0&&Y(P)}function _e(P){const w=P.texture,G=n.get(P),ie=n.get(w);P.addEventListener("dispose",k),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture()),ie.__version=w.version,r.memory.textures++);const re=P.isWebGLCubeRenderTarget===!0,fe=P.isWebGLMultipleRenderTargets===!0,D=v(P)||a;if(re){G.__webglFramebuffer=[];for(let $=0;$<6;$++)G.__webglFramebuffer[$]=o.createFramebuffer()}else{if(G.__webglFramebuffer=o.createFramebuffer(),fe)if(i.drawBuffers){const $=P.texture;for(let V=0,de=$.length;V<de;V++){const ve=n.get($[V]);ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Me(P)===!1){const $=fe?w:[w];G.__webglMultisampledFramebuffer=o.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let V=0;V<$.length;V++){const de=$[V];G.__webglColorRenderbuffer[V]=o.createRenderbuffer(),o.bindRenderbuffer(36161,G.__webglColorRenderbuffer[V]);const ve=s.convert(de.format,de.encoding),be=s.convert(de.type),me=C(de.internalFormat,ve,be,de.encoding,P.isXRRenderTarget===!0),Se=Ae(P);o.renderbufferStorageMultisample(36161,Se,me,P.width,P.height),o.framebufferRenderbuffer(36160,36064+V,36161,G.__webglColorRenderbuffer[V])}o.bindRenderbuffer(36161,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ie.__webglTexture),pe(34067,w,D);for(let $=0;$<6;$++)oe(G.__webglFramebuffer[$],P,w,36064,34069+$);M(w,D)&&E(34067),t.unbindTexture()}else if(fe){const $=P.texture;for(let V=0,de=$.length;V<de;V++){const ve=$[V],be=n.get(ve);t.bindTexture(3553,be.__webglTexture),pe(3553,ve,D),oe(G.__webglFramebuffer,P,ve,36064+V,3553),M(ve,D)&&E(3553)}t.unbindTexture()}else{let $=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?$=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,ie.__webglTexture),pe($,w,D),oe(G.__webglFramebuffer,P,w,36064,$),M(w,D)&&E($),t.unbindTexture()}P.depthBuffer&&Y(P)}function ue(P){const w=v(P)||a,G=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,re=G.length;ie<re;ie++){const fe=G[ie];if(M(fe,w)){const D=P.isWebGLCubeRenderTarget?34067:3553,$=n.get(fe).__webglTexture;t.bindTexture(D,$),E(D),t.unbindTexture()}}}function Ee(P){if(a&&P.samples>0&&Me(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],G=P.width,ie=P.height;let re=16384;const fe=[],D=P.stencilBuffer?33306:36096,$=n.get(P),V=P.isWebGLMultipleRenderTargets===!0;if(V)for(let de=0;de<w.length;de++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let de=0;de<w.length;de++){fe.push(36064+de),P.depthBuffer&&fe.push(D);const ve=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(ve===!1&&(P.depthBuffer&&(re|=256),P.stencilBuffer&&(re|=1024)),V&&o.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[de]),ve===!0&&(o.invalidateFramebuffer(36008,[D]),o.invalidateFramebuffer(36009,[D])),V){const be=n.get(w[de]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,be,0)}o.blitFramebuffer(0,0,G,ie,0,0,G,ie,re,9728),p&&o.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let de=0;de<w.length;de++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+de,36161,$.__webglColorRenderbuffer[de]);const ve=n.get(w[de]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+de,3553,ve,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function Ae(P){return Math.min(h,P.samples)}function Me(P){const w=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(P){const w=r.render.frame;_.get(P)!==w&&(_.set(P,w),P.update())}function He(P,w){const G=P.encoding,ie=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===_o||G!==Pi&&(G===Je?a===!1?e.has("EXT_sRGB")===!0&&ie===pn?(P.format=_o,P.minFilter=en,P.generateMipmaps=!1):w=Iu.sRGBToLinear(w):(ie!==pn||re!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),w}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=xe,this.setTexture3D=se,this.setTextureCube=H,this.rebindTextures=ee,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Me}function e0(o,e,t){const n=t.isWebGL2;function i(s,r=null){let a;if(s===Ci)return 5121;if(s===Wf)return 32819;if(s===jf)return 32820;if(s===Vf)return 5120;if(s===Gf)return 5122;if(s===Pu)return 5123;if(s===Hf)return 5124;if(s===xi)return 5125;if(s===yi)return 5126;if(s===$s)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qf)return 6406;if(s===pn)return 6408;if(s===Xf)return 6409;if(s===Yf)return 6410;if(s===Mi)return 6402;if(s===vs)return 34041;if(s===_o)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zf)return 6403;if(s===Jf)return 36244;if(s===Kf)return 33319;if(s===$f)return 33320;if(s===Qf)return 36249;if(s===xa||s===ya||s===Sa||s===ba)if(r===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Al||s===Cl||s===Pl||s===Ll)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Al)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ll)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ed)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dl||s===Rl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Dl)return r===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Rl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Il||s===Ul||s===Ol||s===zl||s===Nl||s===Fl||s===Bl||s===kl||s===Vl||s===Gl||s===Hl||s===Wl||s===jl||s===ql)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Il)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ul)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ol)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jl)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ql)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ma)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ma)return r===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===td||s===Xl||s===Yl||s===Zl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ma)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Xl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===us?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class t0 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Si extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n0={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class i0 extends qt{constructor(e,t,n,i,s,r,a,c,l,u){if(u=u!==void 0?u:Mi,u!==Mi&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mi&&(n=xi),n===void 0&&u===vs&&(n=us),super(null,i,s,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rt,this.minFilter=c!==void 0?c:Rt,this.flipY=!1,this.generateMipmaps=!1}}class s0 extends Ui{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,_=null;const g=t.getContextAttributes();let m=null,d=null;const b=[],x=[],v=new Set,y=new Map,M=new hn;M.layers.enable(1),M.viewport=new it;const E=new hn;E.layers.enable(2),E.viewport=new it;const C=[M,E],S=new t0;S.layers.enable(1),S.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=b[H];return J===void 0&&(J=new Xa,b[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=b[H];return J===void 0&&(J=new Xa,b[H]=J),J.getGripSpace()},this.getHand=function(H){let J=b[H];return J===void 0&&(J=new Xa,b[H]=J),J.getHandSpace()};function k(H){const J=x.indexOf(H.inputSource);if(J===-1)return;const le=b[J];le!==void 0&&le.dispatchEvent({type:H.type,data:H.inputSource})}function R(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",U);for(let H=0;H<b.length;H++){const J=x[H];J!==null&&(x[H]=null,b[H].disconnect(J))}T=null,z=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",R),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),d=new Li(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Ci,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let J=null,le=null,pe=null;g.depth&&(pe=g.stencil?35056:33190,J=g.stencil?vs:Mi,le=g.stencil?us:xi);const B={colorFormat:32856,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(B),i.updateRenderState({layers:[f]}),d=new Li(f.textureWidth,f.textureHeight,{format:pn,type:Ci,depthTexture:new i0(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Pe=e.properties.get(d);Pe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(H){for(let J=0;J<H.removed.length;J++){const le=H.removed[J],pe=x.indexOf(le);pe>=0&&(x[pe]=null,b[pe].disconnect(le))}for(let J=0;J<H.added.length;J++){const le=H.added[J];let pe=x.indexOf(le);if(pe===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=x.length){x.push(le),pe=Pe;break}else if(x[Pe]===null){x[Pe]=le,pe=Pe;break}if(pe===-1)break}const B=b[pe];B&&B.connect(le)}}const N=new L,X=new L;function Z(H,J,le){N.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const pe=N.distanceTo(X),B=J.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Ce=B[14]/(B[10]-1),oe=B[14]/(B[10]+1),ye=(B[9]+1)/B[5],te=(B[9]-1)/B[5],Y=(B[8]-1)/B[0],ee=(Pe[8]+1)/Pe[0],_e=Ce*Y,ue=Ce*ee,Ee=pe/(-Y+ee),Ae=Ee*-Y;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ae),H.translateZ(Ee),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Me=Ce+Ee,Ie=oe+Ee,He=_e-Ae,P=ue+(pe-Ae),w=ye*oe/Ie*Me,G=te*oe/Ie*Me;H.projectionMatrix.makePerspective(He,P,w,G,Me,Ie),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;S.near=E.near=M.near=H.near,S.far=E.far=M.far=H.far,(T!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,z=S.far);const J=H.parent,le=S.cameras;W(S,J);for(let pe=0;pe<le.length;pe++)W(le[pe],J);le.length===2?Z(S,M,E):S.projectionMatrix.copy(M.projectionMatrix),ne(H,S,J)};function ne(H,J,le){le===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const pe=H.children;for(let B=0,Pe=pe.length;B<Pe;B++)pe[B].updateMatrixWorld(!0);H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=vo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.getPlanes=function(){return v};let Q=null;function xe(H,J){if(u=J.getViewerPose(l||r),_=J,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let pe=!1;le.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let B=0;B<le.length;B++){const Pe=le[B];let Ce=null;if(p!==null)Ce=p.getViewport(Pe);else{const ye=h.getViewSubImage(f,Pe);Ce=ye.viewport,B===0&&(e.setRenderTargetTextures(d,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(d))}let oe=C[B];oe===void 0&&(oe=new hn,oe.layers.enable(B),oe.viewport=new it,C[B]=oe),oe.matrix.fromArray(Pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),B===0&&(S.matrix.copy(oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(oe)}}for(let le=0;le<b.length;le++){const pe=x[le],B=b[le];pe!==null&&B!==void 0&&B.update(pe,J,l||r)}if(Q&&Q(H,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let le=null;for(const pe of v)J.detectedPlanes.has(pe)||(le===null&&(le=[]),le.push(pe));if(le!==null)for(const pe of le)v.delete(pe),y.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of J.detectedPlanes)if(!v.has(pe))v.add(pe),y.set(pe,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const B=y.get(pe);pe.lastChangedTime>B&&(y.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}_=null}const se=new Hu;se.setAnimationLoop(xe),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}}function r0(o,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Bu(o)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,b,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ut&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ut&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a0(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(35375):0;function c(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function l(b,x){let v=i[b.id];v===void 0&&(_(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(b,y);const M=e.render.frame;s[b.id]!==M&&(f(b),s[b.id]=M)}function u(b){const x=h();b.__bindingPointIndex=x;const v=o.createBuffer(),y=b.__size,M=b.usage;return o.bindBuffer(35345,v),o.bufferData(35345,y,M),o.bindBuffer(35345,null),o.bindBufferBase(35345,x,v),v}function h(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=i[b.id],v=b.uniforms,y=b.__cache;o.bindBuffer(35345,x);for(let M=0,E=v.length;M<E;M++){const C=v[M];if(p(C,M,y)===!0){const S=C.__offset,T=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let k=0;k<T.length;k++){const R=T[k],U=g(R);typeof R=="number"?(C.__data[0]=R,o.bufferSubData(35345,S+z,C.__data)):R.isMatrix3?(C.__data[0]=R.elements[0],C.__data[1]=R.elements[1],C.__data[2]=R.elements[2],C.__data[3]=R.elements[0],C.__data[4]=R.elements[3],C.__data[5]=R.elements[4],C.__data[6]=R.elements[5],C.__data[7]=R.elements[0],C.__data[8]=R.elements[6],C.__data[9]=R.elements[7],C.__data[10]=R.elements[8],C.__data[11]=R.elements[0]):(R.toArray(C.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,S,C.__data)}}o.bindBuffer(35345,null)}function p(b,x,v){const y=b.value;if(v[x]===void 0){if(typeof y=="number")v[x]=y;else{const M=Array.isArray(y)?y:[y],E=[];for(let C=0;C<M.length;C++)E.push(M[C].clone());v[x]=E}return!0}else if(typeof y=="number"){if(v[x]!==y)return v[x]=y,!0}else{const M=Array.isArray(v[x])?v[x]:[v[x]],E=Array.isArray(y)?y:[y];for(let C=0;C<M.length;C++){const S=M[C];if(S.equals(E[C])===!1)return S.copy(E[C]),!0}}return!1}function _(b){const x=b.uniforms;let v=0;const y=16;let M=0;for(let E=0,C=x.length;E<C;E++){const S=x[E],T={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let k=0,R=z.length;k<R;k++){const U=z[k],N=g(U);T.boundary+=N.boundary,T.storage+=N.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,E>0){M=v%y;const k=y-M;M!==0&&k-T.boundary<0&&(v+=y-M,S.__offset=v)}v+=T.storage}return M=v%y,M>0&&(v+=y-M),b.__size=v,b.__cache={},this}function g(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const b in i)o.deleteBuffer(i[b]);r=[],i={},s={}}return{bind:c,update:l,dispose:d}}function o0(){const o=Kr("canvas");return o.style.display="block",o}class Yu{constructor(e={}){const{canvas:t=o0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=r;let p=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Pi,this.useLegacyLights=!0,this.toneMapping=zn,this.toneMappingExposure=1;const d=this;let b=!1,x=0,v=0,y=null,M=-1,E=null;const C=new it,S=new it;let T=null,z=t.width,k=t.height,R=1,U=null,N=null;const X=new it(0,0,z,k),Z=new it(0,0,z,k);let W=!1;const ne=new Wo;let Q=!1,xe=!1,se=null;const H=new nt,J=new L,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return y===null?R:1}let B=n;function Pe(A,F){for(let j=0;j<A.length;j++){const O=A[j],K=t.getContext(O,F);if(K!==null)return K}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ze,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),B=Pe(F,A),B===null)throw Pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ce,oe,ye,te,Y,ee,_e,ue,Ee,Ae,Me,Ie,He,P,w,G,ie,re,fe,D,$,V,de,ve;function be(){Ce=new vg(B),oe=new fg(B,Ce,e),Ce.init(oe),V=new e0(B,Ce,oe),ye=new $_(B,Ce,oe),te=new Sg,Y=new F_,ee=new Q_(B,Ce,ye,Y,oe,V,te),_e=new pg(d),ue=new _g(d),Ee=new Id(B,oe),de=new ug(B,Ce,Ee,oe),Ae=new xg(B,Ee,te,de),Me=new Tg(B,Ae,Ee,te),fe=new wg(B,oe,ee),G=new dg(Y),Ie=new N_(d,_e,ue,Ce,oe,de,G),He=new r0(d,Y),P=new k_,w=new q_(Ce,oe),re=new cg(d,_e,ue,ye,Me,f,c),ie=new K_(d,Me,oe),ve=new a0(B,te,oe,ye),D=new hg(B,Ce,te,oe),$=new yg(B,Ce,te,oe),te.programs=Ie.programs,d.capabilities=oe,d.extensions=Ce,d.properties=Y,d.renderLists=P,d.shadowMap=ie,d.state=ye,d.info=te}be();const me=new s0(d,B);this.xr=me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(A){A!==void 0&&(R=A,this.setSize(z,k,!1))},this.getSize=function(A){return A.set(z,k)},this.setSize=function(A,F,j=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,k=F,t.width=Math.floor(A*R),t.height=Math.floor(F*R),j===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(z*R,k*R).floor()},this.setDrawingBufferSize=function(A,F,j){z=A,k=F,R=j,t.width=Math.floor(A*j),t.height=Math.floor(F*j),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,F,j,O){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,F,j,O),ye.viewport(C.copy(X).multiplyScalar(R).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,F,j,O){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,F,j,O),ye.scissor(S.copy(Z).multiplyScalar(R).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(A){ye.setScissorTest(W=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,F=!0,j=!0){let O=0;A&&(O|=16384),F&&(O|=256),j&&(O|=1024),B.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),P.dispose(),w.dispose(),Y.dispose(),_e.dispose(),ue.dispose(),Me.dispose(),de.dispose(),ve.dispose(),Ie.dispose(),me.dispose(),me.removeEventListener("sessionstart",we),me.removeEventListener("sessionend",Ze),se&&(se.dispose(),se=null),$e.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=te.autoReset,F=ie.enabled,j=ie.autoUpdate,O=ie.needsUpdate,K=ie.type;be(),te.autoReset=A,ie.enabled=F,ie.autoUpdate=j,ie.needsUpdate=O,ie.type=K}function ze(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const F=A.target;F.removeEventListener("dispose",rt),I(F)}function I(A){q(A),Y.remove(A)}function q(A){const F=Y.get(A).programs;F!==void 0&&(F.forEach(function(j){Ie.releaseProgram(j)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,j,O,K,Te){F===null&&(F=le);const Le=K.isMesh&&K.matrixWorld.determinant()<0,Re=af(A,F,j,O,K);ye.setMaterial(O,Le);let Ue=j.index,Ne=1;O.wireframe===!0&&(Ue=Ae.getWireframeAttribute(j),Ne=2);const Fe=j.drawRange,Be=j.attributes.position;let je=Fe.start*Ne,Pt=(Fe.start+Fe.count)*Ne;Te!==null&&(je=Math.max(je,Te.start*Ne),Pt=Math.min(Pt,(Te.start+Te.count)*Ne)),Ue!==null?(je=Math.max(je,0),Pt=Math.min(Pt,Ue.count)):Be!=null&&(je=Math.max(je,0),Pt=Math.min(Pt,Be.count));const an=Pt-je;if(an<0||an===1/0)return;de.setup(K,O,Re,j,Ue);let oi,lt=D;if(Ue!==null&&(oi=Ee.get(Ue),lt=$,lt.setIndex(oi)),K.isMesh)O.wireframe===!0?(ye.setLineWidth(O.wireframeLinewidth*pe()),lt.setMode(1)):lt.setMode(4);else if(K.isLine){let We=O.linewidth;We===void 0&&(We=1),ye.setLineWidth(We*pe()),K.isLineSegments?lt.setMode(1):K.isLineLoop?lt.setMode(2):lt.setMode(3)}else K.isPoints?lt.setMode(0):K.isSprite&&lt.setMode(4);if(K.isInstancedMesh)lt.renderInstances(je,an,K.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,pa=Math.min(j.instanceCount,We);lt.renderInstances(je,an,pa)}else lt.render(je,an)},this.compile=function(A,F){function j(O,K,Te){O.transparent===!0&&O.side===xn&&O.forceSinglePass===!1?(O.side=Ut,O.needsUpdate=!0,hr(O,K,Te),O.side=ni,O.needsUpdate=!0,hr(O,K,Te),O.side=xn):hr(O,K,Te)}_=w.get(A),_.init(),m.push(_),A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights(d.useLegacyLights),A.traverse(function(O){const K=O.material;if(K)if(Array.isArray(K))for(let Te=0;Te<K.length;Te++){const Le=K[Te];j(Le,A,O)}else j(K,A,O)}),m.pop(),_=null};let ae=null;function ge(A){ae&&ae(A)}function we(){$e.stop()}function Ze(){$e.start()}const $e=new Hu;$e.setAnimationLoop(ge),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(A){ae=A,me.setAnimationLoop(A),A===null?$e.stop():$e.start()},me.addEventListener("sessionstart",we),me.addEventListener("sessionend",Ze),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,F,y),_=w.get(A,m.length),_.init(),m.push(_),H.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(H),xe=this.localClippingEnabled,Q=G.init(this.clippingPlanes,xe),p=P.get(A,g.length),p.init(),g.push(p),bt(A,F,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(U,N),Q===!0&&G.beginShadows();const j=_.state.shadowsArray;if(ie.render(j,A,F),Q===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,A),_.setupLights(d.useLegacyLights),F.isArrayCamera){const O=F.cameras;for(let K=0,Te=O.length;K<Te;K++){const Le=O[K];Gn(p,A,Le,Le.viewport)}}else Gn(p,A,F);y!==null&&(ee.updateMultisampleRenderTarget(y),ee.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(d,A,F),de.resetDefaultState(),M=-1,E=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function bt(A,F,j,O){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){O&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const Le=Me.update(A),Re=A.material;Re.visible&&p.push(A,Le,Re,j,J.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==te.render.frame&&(A.skeleton.update(),A.skeleton.frame=te.render.frame),!A.frustumCulled||ne.intersectsObject(A))){O&&J.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const Le=Me.update(A),Re=A.material;if(Array.isArray(Re)){const Ue=Le.groups;for(let Ne=0,Fe=Ue.length;Ne<Fe;Ne++){const Be=Ue[Ne],je=Re[Be.materialIndex];je&&je.visible&&p.push(A,Le,je,j,J.z,Be)}}else Re.visible&&p.push(A,Le,Re,j,J.z,null)}}const Te=A.children;for(let Le=0,Re=Te.length;Le<Re;Le++)bt(Te[Le],F,j,O)}function Gn(A,F,j,O){const K=A.opaque,Te=A.transmissive,Le=A.transparent;_.setupLightsView(j),Q===!0&&G.setGlobalState(d.clippingPlanes,j),Te.length>0&&at(K,Te,F,j),O&&ye.viewport(C.copy(O)),K.length>0&&Zt(K,F,j),Te.length>0&&Zt(Te,F,j),Le.length>0&&Zt(Le,F,j),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function at(A,F,j,O){if(se===null){const Re=oe.isWebGL2;se=new Li(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?$s:Ci,minFilter:Ks,samples:Re&&a===!0?4:0})}const K=d.getRenderTarget();d.setRenderTarget(se),d.clear();const Te=d.toneMapping;d.toneMapping=zn,Zt(A,j,O),ee.updateMultisampleRenderTarget(se),ee.updateRenderTargetMipmap(se);let Le=!1;for(let Re=0,Ue=F.length;Re<Ue;Re++){const Ne=F[Re],Fe=Ne.object,Be=Ne.geometry,je=Ne.material,Pt=Ne.group;if(je.side===xn&&Fe.layers.test(O.layers)){const an=je.side;je.side=Ut,je.needsUpdate=!0,gn(Fe,j,O,Be,je,Pt),je.side=an,je.needsUpdate=!0,Le=!0}}Le===!0&&(ee.updateMultisampleRenderTarget(se),ee.updateRenderTargetMipmap(se)),d.setRenderTarget(K),d.toneMapping=Te}function Zt(A,F,j){const O=F.isScene===!0?F.overrideMaterial:null;for(let K=0,Te=A.length;K<Te;K++){const Le=A[K],Re=Le.object,Ue=Le.geometry,Ne=O===null?Le.material:O,Fe=Le.group;Re.layers.test(j.layers)&&gn(Re,F,j,Ue,Ne,Fe)}}function gn(A,F,j,O,K,Te){A.onBeforeRender(d,F,j,O,K,Te),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(d,F,j,O,A,Te),K.transparent===!0&&K.side===xn&&K.forceSinglePass===!1?(K.side=Ut,K.needsUpdate=!0,d.renderBufferDirect(j,F,O,K,A,Te),K.side=ni,K.needsUpdate=!0,d.renderBufferDirect(j,F,O,K,A,Te),K.side=xn):d.renderBufferDirect(j,F,O,K,A,Te),A.onAfterRender(d,F,j,O,K,Te)}function hr(A,F,j){F.isScene!==!0&&(F=le);const O=Y.get(A),K=_.state.lights,Te=_.state.shadowsArray,Le=K.state.version,Re=Ie.getParameters(A,K.state,Te,F,j),Ue=Ie.getProgramCacheKey(Re);let Ne=O.programs;O.environment=A.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(A.isMeshStandardMaterial?ue:_e).get(A.envMap||O.environment),Ne===void 0&&(A.addEventListener("dispose",rt),Ne=new Map,O.programs=Ne);let Fe=Ne.get(Ue);if(Fe!==void 0){if(O.currentProgram===Fe&&O.lightsStateVersion===Le)return _l(A,Re),Fe}else Re.uniforms=Ie.getUniforms(A),A.onBuild(j,Re,d),A.onBeforeCompile(Re,d),Fe=Ie.acquireProgram(Re,Ue),Ne.set(Ue,Fe),O.uniforms=Re.uniforms;const Be=O.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=G.uniform),_l(A,Re),O.needsLights=lf(A),O.lightsStateVersion=Le,O.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.directionalShadowMap.value=K.state.directionalShadowMap,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotShadowMap.value=K.state.spotShadowMap,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMap.value=K.state.pointShadowMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix);const je=Fe.getUniforms(),Pt=jr.seqWithValue(je.seq,Be);return O.currentProgram=Fe,O.uniformsList=Pt,Fe}function _l(A,F){const j=Y.get(A);j.outputEncoding=F.outputEncoding,j.instancing=F.instancing,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function af(A,F,j,O,K){F.isScene!==!0&&(F=le),ee.resetTextureUnits();const Te=F.fog,Le=O.isMeshStandardMaterial?F.environment:null,Re=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Pi,Ue=(O.isMeshStandardMaterial?ue:_e).get(O.envMap||Le),Ne=O.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!O.normalMap&&!!j.attributes.tangent,Be=!!j.morphAttributes.position,je=!!j.morphAttributes.normal,Pt=!!j.morphAttributes.color,an=O.toneMapped?d.toneMapping:zn,oi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,lt=oi!==void 0?oi.length:0,We=Y.get(O),pa=_.state.lights;if(Q===!0&&(xe===!0||A!==E)){const Bt=A===E&&O.id===M;G.setState(O,A,Bt)}let mt=!1;O.version===We.__version?(We.needsLights&&We.lightsStateVersion!==pa.state.version||We.outputEncoding!==Re||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ue||O.fog===!0&&We.fog!==Te||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==G.numPlanes||We.numIntersection!==G.numIntersection)||We.vertexAlphas!==Ne||We.vertexTangents!==Fe||We.morphTargets!==Be||We.morphNormals!==je||We.morphColors!==Pt||We.toneMapping!==an||oe.isWebGL2===!0&&We.morphTargetsCount!==lt)&&(mt=!0):(mt=!0,We.__version=O.version);let li=We.currentProgram;mt===!0&&(li=hr(O,F,K));let vl=!1,Ds=!1,ma=!1;const Lt=li.getUniforms(),ci=We.uniforms;if(ye.useProgram(li.program)&&(vl=!0,Ds=!0,ma=!0),O.id!==M&&(M=O.id,Ds=!0),vl||E!==A){if(Lt.setValue(B,"projectionMatrix",A.projectionMatrix),oe.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),E!==A&&(E=A,Ds=!0,ma=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Bt=Lt.map.cameraPosition;Bt!==void 0&&Bt.setValue(B,J.setFromMatrixPosition(A.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||K.isSkinnedMesh)&&Lt.setValue(B,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){Lt.setOptional(B,K,"bindMatrix"),Lt.setOptional(B,K,"bindMatrixInverse");const Bt=K.skeleton;Bt&&(oe.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Lt.setValue(B,"boneTexture",Bt.boneTexture,ee),Lt.setValue(B,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ga=j.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0&&oe.isWebGL2===!0)&&fe.update(K,j,li),(Ds||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,Lt.setValue(B,"receiveShadow",K.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ci.envMap.value=Ue,ci.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ds&&(Lt.setValue(B,"toneMappingExposure",d.toneMappingExposure),We.needsLights&&of(ci,ma),Te&&O.fog===!0&&He.refreshFogUniforms(ci,Te),He.refreshMaterialUniforms(ci,O,R,k,se),jr.upload(B,We.uniformsList,ci,ee)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(jr.upload(B,We.uniformsList,ci,ee),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Lt.setValue(B,"center",K.center),Lt.setValue(B,"modelViewMatrix",K.modelViewMatrix),Lt.setValue(B,"normalMatrix",K.normalMatrix),Lt.setValue(B,"modelMatrix",K.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Bt=O.uniformsGroups;for(let _a=0,cf=Bt.length;_a<cf;_a++)if(oe.isWebGL2){const xl=Bt[_a];ve.update(xl,li),ve.bind(xl,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function of(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function lf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,F,j){Y.get(A.texture).__webglTexture=F,Y.get(A.depthTexture).__webglTexture=j;const O=Y.get(A);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=j===void 0,O.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const j=Y.get(A);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,j=0){y=A,x=F,v=j;let O=!0,K=null,Te=!1,Le=!1;if(A){const Ue=Y.get(A);Ue.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),O=!1):Ue.__webglFramebuffer===void 0?ee.setupRenderTarget(A):Ue.__hasExternalTextures&&ee.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Le=!0);const Fe=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=Fe[F],Te=!0):oe.isWebGL2&&A.samples>0&&ee.useMultisampledRTT(A)===!1?K=Y.get(A).__webglMultisampledFramebuffer:K=Fe,C.copy(A.viewport),S.copy(A.scissor),T=A.scissorTest}else C.copy(X).multiplyScalar(R).floor(),S.copy(Z).multiplyScalar(R).floor(),T=W;if(ye.bindFramebuffer(36160,K)&&oe.drawBuffers&&O&&ye.drawBuffers(A,K),ye.viewport(C),ye.scissor(S),ye.setScissorTest(T),Te){const Ue=Y.get(A.texture);B.framebufferTexture2D(36160,36064,34069+F,Ue.__webglTexture,j)}else if(Le){const Ue=Y.get(A.texture),Ne=F||0;B.framebufferTextureLayer(36160,36064,Ue.__webglTexture,j||0,Ne)}M=-1},this.readRenderTargetPixels=function(A,F,j,O,K,Te,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le]),Re){ye.bindFramebuffer(36160,Re);try{const Ue=A.texture,Ne=Ue.format,Fe=Ue.type;if(Ne!==pn&&V.convert(Ne)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===$s&&(Ce.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Fe!==Ci&&V.convert(Fe)!==B.getParameter(35738)&&!(Fe===yi&&(oe.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-O&&j>=0&&j<=A.height-K&&B.readPixels(F,j,O,K,V.convert(Ne),V.convert(Fe),Te)}finally{const Ue=y!==null?Y.get(y).__webglFramebuffer:null;ye.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(A,F,j=0){const O=Math.pow(2,-j),K=Math.floor(F.image.width*O),Te=Math.floor(F.image.height*O);ee.setTexture2D(F,0),B.copyTexSubImage2D(3553,j,0,0,A.x,A.y,K,Te),ye.unbindTexture()},this.copyTextureToTexture=function(A,F,j,O=0){const K=F.image.width,Te=F.image.height,Le=V.convert(j.format),Re=V.convert(j.type);ee.setTexture2D(j,0),B.pixelStorei(37440,j.flipY),B.pixelStorei(37441,j.premultiplyAlpha),B.pixelStorei(3317,j.unpackAlignment),F.isDataTexture?B.texSubImage2D(3553,O,A.x,A.y,K,Te,Le,Re,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(3553,O,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,Le,F.mipmaps[0].data):B.texSubImage2D(3553,O,A.x,A.y,Le,Re,F.image),O===0&&j.generateMipmaps&&B.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(A,F,j,O,K=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=A.max.x-A.min.x+1,Le=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,Ue=V.convert(O.format),Ne=V.convert(O.type);let Fe;if(O.isData3DTexture)ee.setTexture3D(O,0),Fe=32879;else if(O.isDataArrayTexture)ee.setTexture2DArray(O,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,O.flipY),B.pixelStorei(37441,O.premultiplyAlpha),B.pixelStorei(3317,O.unpackAlignment);const Be=B.getParameter(3314),je=B.getParameter(32878),Pt=B.getParameter(3316),an=B.getParameter(3315),oi=B.getParameter(32877),lt=j.isCompressedTexture?j.mipmaps[0]:j.image;B.pixelStorei(3314,lt.width),B.pixelStorei(32878,lt.height),B.pixelStorei(3316,A.min.x),B.pixelStorei(3315,A.min.y),B.pixelStorei(32877,A.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Fe,K,F.x,F.y,F.z,Te,Le,Re,Ue,Ne,lt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Fe,K,F.x,F.y,F.z,Te,Le,Re,Ue,lt.data)):B.texSubImage3D(Fe,K,F.x,F.y,F.z,Te,Le,Re,Ue,Ne,lt),B.pixelStorei(3314,Be),B.pixelStorei(32878,je),B.pixelStorei(3316,Pt),B.pixelStorei(3315,an),B.pixelStorei(32877,oi),K===0&&O.generateMipmaps&&B.generateMipmap(Fe),ye.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){x=0,v=0,y=null,ye.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class l0 extends Yu{}l0.prototype.isWebGL1Renderer=!0;class c0 extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class wi extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oc=new L,zc=new L,Nc=new nt,Ya=new oa,Ir=new Cs;class u0 extends ht{constructor(e=new Ke,t=new wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Oc.fromBufferAttribute(t,i-1),zc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oc.distanceTo(zc);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;Nc.copy(i).invert(),Ya.copy(e.ray).applyMatrix4(Nc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new L,u=new L,h=new L,f=new L,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const d=Math.max(0,r.start),b=Math.min(_.count,r.start+r.count);for(let x=d,v=b-1;x<v;x+=p){const y=_.getX(x),M=_.getX(x+1);if(l.fromBufferAttribute(m,y),u.fromBufferAttribute(m,M),Ya.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,r.start),b=Math.min(m.count,r.start+r.count);for(let x=d,v=b-1;x<v;x+=p){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ya.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Fc=new L,Bc=new L;class On extends u0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fc.fromBufferAttribute(t,i),Bc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fc.distanceTo(Bc);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sn extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kc=new nt,yo=new oa,Ur=new Cs,Or=new L;class Qn extends ht{constructor(e=new Ke,t=new Sn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;kc.copy(i).invert(),yo.copy(e.ray).applyMatrix4(kc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let _=f,g=p;_<g;_++){const m=l.getX(_);Or.fromBufferAttribute(h,m),Vc(Or,m,c,i,e,t,this)}}else{const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let _=f,g=p;_<g;_++)Or.fromBufferAttribute(h,_),Vc(Or,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vc(o,e,t,n,i,s,r){const a=yo.distanceSqToPoint(o);if(a<t){const c=new L;yo.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:r})}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);const u=n[i],f=n[i+1]-u,p=(r-u)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),c=t||(r.isVector2?new ce:new L);return c.copy(a).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],s=[],r=[],a=new L,c=new nt;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new L)}s[0]=new L,r[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(_t(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,_))}r[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(_t(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(i[_],p*_)),r[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xo extends Tn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new ce,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class h0 extends Xo{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Yo(){let o=0,e=0,t=0,n=0;function i(s,r,a,c){o=s,e=a,t=-3*s+3*r-2*a-c,n=2*s-2*r+a+c}return{initCatmullRom:function(s,r,a,c,l){i(r,a,l*(a-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,a,c,l,u,h){let f=(r-s)/l-(a-s)/(l+u)+(a-r)/u,p=(a-r)/u-(c-r)/(u+h)+(c-a)/h;f*=u,p*=u,i(r,a,f,p)},calc:function(s){const r=s*s,a=r*s;return o+e*s+t*r+n*a}}}const zr=new L,Za=new Yo,Ja=new Yo,Ka=new Yo;class f0 extends Tn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(zr.subVectors(i[0],i[1]).add(i[0]),l=zr);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(zr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Za.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,_,g,m),Ja.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,_,g,m),Ka.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ja.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ka.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Za.calc(c),Ja.calc(c),Ka.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gc(o,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,a=o*o,c=o*a;return(2*t-2*n+s+r)*c+(-3*t+3*n-2*s-r)*a+s*o+t}function d0(o,e){const t=1-o;return t*t*e}function p0(o,e){return 2*(1-o)*o*e}function m0(o,e){return o*o*e}function js(o,e,t,n){return d0(o,e)+p0(o,t)+m0(o,n)}function g0(o,e){const t=1-o;return t*t*t*e}function _0(o,e){const t=1-o;return 3*t*t*o*e}function v0(o,e){return 3*(1-o)*o*o*e}function x0(o,e){return o*o*o*e}function qs(o,e,t,n,i){return g0(o,e)+_0(o,t)+v0(o,n)+x0(o,i)}class Zu extends Tn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(qs(e,i.x,s.x,r.x,a.x),qs(e,i.y,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y0 extends Tn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(qs(e,i.x,s.x,r.x,a.x),qs(e,i.y,s.y,r.y,a.y),qs(e,i.z,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zo extends Tn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S0 extends Tn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends Tn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(js(e,i.x,s.x,r.x),js(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b0 extends Tn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(js(e,i.x,s.x,r.x),js(e,i.y,s.y,r.y),js(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ku extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),a=s-r,c=i[r===0?r:r-1],l=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(Gc(a,c.x,l.x,u.x,h.x),Gc(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}}var $u=Object.freeze({__proto__:null,ArcCurve:h0,CatmullRomCurve3:f0,CubicBezierCurve:Zu,CubicBezierCurve3:y0,EllipseCurve:Xo,LineCurve:Zo,LineCurve3:S0,QuadraticBezierCurve:Ju,QuadraticBezierCurve3:b0,SplineCurve:Ku});class M0 extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Zo(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new $u[i.type]().fromJSON(i))}return this}}class So extends M0{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zo(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ju(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){const a=new Zu(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ku(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,r,a,c),this}absellipse(e,t,n,i,s,r,a,c){const l=new Xo(e,t,n,i,s,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qr extends So{constructor(e){super(e),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new So().fromJSON(i))}return this}}const w0={triangulate:function(o,e,t=2){const n=e&&e.length,i=n?e[0]*t:o.length;let s=Qu(o,0,i,t,!0);const r=[];if(!s||s.next===s.prev)return r;let a,c,l,u,h,f,p;if(n&&(s=P0(o,e,s,t)),o.length>80*t){a=l=o[0],c=u=o[1];for(let _=t;_<i;_+=t)h=o[_],f=o[_+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return tr(s,r,t,a,c,p,0),r}};function Qu(o,e,t,n,i){let s,r;if(i===k0(o,e,t,n)>0)for(s=e;s<t;s+=n)r=Hc(s,o[s],o[s+1],r);else for(s=t-n;s>=e;s-=n)r=Hc(s,o[s],o[s+1],r);return r&&ua(r,r.next)&&(ir(r),r=r.next),r}function Ri(o,e){if(!o)return o;e||(e=o);let t=o,n;do if(n=!1,!t.steiner&&(ua(t,t.next)||et(t.prev,t,t.next)===0)){if(ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function tr(o,e,t,n,i,s,r){if(!o)return;!r&&s&&U0(o,n,i,s);let a=o,c,l;for(;o.prev!==o.next;){if(c=o.prev,l=o.next,s?E0(o,n,i,s):T0(o)){e.push(c.i/t|0),e.push(o.i/t|0),e.push(l.i/t|0),ir(o),o=l.next,a=l.next;continue}if(o=l,o===a){r?r===1?(o=A0(Ri(o),e,t),tr(o,e,t,n,i,s,2)):r===2&&C0(o,e,t,n,i,s):tr(Ri(o),e,t,n,i,s,1);break}}}function T0(o){const e=o.prev,t=o,n=o.next;if(et(e,t,n)>=0)return!1;const i=e.x,s=t.x,r=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<r?i:r:s<r?s:r,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>r?i:r:s>r?s:r,p=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=p&&as(i,a,s,c,r,l,_.x,_.y)&&et(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function E0(o,e,t,n){const i=o.prev,s=o,r=o.next;if(et(i,s,r)>=0)return!1;const a=i.x,c=s.x,l=r.x,u=i.y,h=s.y,f=r.y,p=a<c?a<l?a:l:c<l?c:l,_=u<h?u<f?u:f:h<f?h:f,g=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,d=bo(p,_,e,t,n),b=bo(g,m,e,t,n);let x=o.prevZ,v=o.nextZ;for(;x&&x.z>=d&&v&&v.z<=b;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==r&&as(a,u,c,h,l,f,x.x,x.y)&&et(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==r&&as(a,u,c,h,l,f,v.x,v.y)&&et(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==r&&as(a,u,c,h,l,f,x.x,x.y)&&et(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=p&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==r&&as(a,u,c,h,l,f,v.x,v.y)&&et(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function A0(o,e,t){let n=o;do{const i=n.prev,s=n.next.next;!ua(i,s)&&eh(i,n,n.next,s)&&nr(i,s)&&nr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ir(n),ir(n.next),n=o=s),n=n.next}while(n!==o);return Ri(n)}function C0(o,e,t,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&N0(r,a)){let c=th(r,a);r=Ri(r,r.next),c=Ri(c,c.next),tr(r,e,t,n,i,s,0),tr(c,e,t,n,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function P0(o,e,t,n){const i=[];let s,r,a,c,l;for(s=0,r=e.length;s<r;s++)a=e[s]*n,c=s<r-1?e[s+1]*n:o.length,l=Qu(o,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(z0(l));for(i.sort(L0),s=0;s<i.length;s++)t=D0(i[s],t);return t}function L0(o,e){return o.x-e.x}function D0(o,e){const t=R0(o,e);if(!t)return e;const n=th(t,o);return Ri(n,n.next),Ri(t,t.next)}function R0(o,e){let t=e,n=-1/0,i;const s=o.x,r=o.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&as(r<l?s:n,r,c,l,r<l?n:s,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(s-t.x),nr(t,o)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&I0(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function I0(o,e){return et(o.prev,o,e.prev)<0&&et(e.next,o,o.next)<0}function U0(o,e,t,n){let i=o;do i.z===0&&(i.z=bo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,O0(i)}function O0(o){let e,t,n,i,s,r,a,c,l=1;do{for(t=o,o=null,s=null,r=0;t;){for(r++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(r>1);return o}function bo(o,e,t,n,i){return o=(o-t)*i|0,e=(e-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function z0(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function as(o,e,t,n,i,s,r,a){return(i-r)*(e-a)>=(o-r)*(s-a)&&(o-r)*(n-a)>=(t-r)*(e-a)&&(t-r)*(s-a)>=(i-r)*(n-a)}function N0(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!F0(o,e)&&(nr(o,e)&&nr(e,o)&&B0(o,e)&&(et(o.prev,o,e.prev)||et(o,e.prev,e))||ua(o,e)&&et(o.prev,o,o.next)>0&&et(e.prev,e,e.next)>0)}function et(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function ua(o,e){return o.x===e.x&&o.y===e.y}function eh(o,e,t,n){const i=Fr(et(o,e,t)),s=Fr(et(o,e,n)),r=Fr(et(t,n,o)),a=Fr(et(t,n,e));return!!(i!==s&&r!==a||i===0&&Nr(o,t,e)||s===0&&Nr(o,n,e)||r===0&&Nr(t,o,n)||a===0&&Nr(t,e,n))}function Nr(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function Fr(o){return o>0?1:o<0?-1:0}function F0(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&eh(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function nr(o,e){return et(o.prev,o,o.next)<0?et(o,e,o.next)>=0&&et(o,o.prev,e)>=0:et(o,e,o.prev)<0||et(o,o.next,e)<0}function B0(o,e){let t=o,n=!1;const i=(o.x+e.x)/2,s=(o.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==o);return n}function th(o,e){const t=new Mo(o.i,o.x,o.y),n=new Mo(e.i,e.x,e.y),i=o.next,s=e.prev;return o.next=e,e.prev=o,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Hc(o,e,t,n){const i=new Mo(o,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ir(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Mo(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k0(o,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}class fs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return fs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Wc(e),jc(n,e);let r=e.length;t.forEach(Wc);for(let c=0;c<t.length;c++)i.push(r),r+=t[c].length,jc(n,t[c]);const a=w0.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Wc(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function jc(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Jo extends Ke{constructor(e=new qr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];r(l)}this.setAttribute("position",new Ye(i,3)),this.setAttribute("uv",new Ye(s,2)),this.computeVertexNormals();function r(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:V0;let x,v=!1,y,M,E,C;d&&(x=d.getSpacedPoints(u),v=!0,f=!1,y=d.computeFrenetFrames(u,!1),M=new L,E=new L,C=new L),f||(m=0,p=0,_=0,g=0);const S=a.extractPoints(l);let T=S.shape;const z=S.holes;if(!fs.isClockWise(T)){T=T.reverse();for(let te=0,Y=z.length;te<Y;te++){const ee=z[te];fs.isClockWise(ee)&&(z[te]=ee.reverse())}}const R=fs.triangulateShape(T,z),U=T;for(let te=0,Y=z.length;te<Y;te++){const ee=z[te];T=T.concat(ee)}function N(te,Y,ee){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(Y,ee)}const X=T.length,Z=R.length;function W(te,Y,ee){let _e,ue,Ee;const Ae=te.x-Y.x,Me=te.y-Y.y,Ie=ee.x-te.x,He=ee.y-te.y,P=Ae*Ae+Me*Me,w=Ae*He-Me*Ie;if(Math.abs(w)>Number.EPSILON){const G=Math.sqrt(P),ie=Math.sqrt(Ie*Ie+He*He),re=Y.x-Me/G,fe=Y.y+Ae/G,D=ee.x-He/ie,$=ee.y+Ie/ie,V=((D-re)*He-($-fe)*Ie)/(Ae*He-Me*Ie);_e=re+Ae*V-te.x,ue=fe+Me*V-te.y;const de=_e*_e+ue*ue;if(de<=2)return new ce(_e,ue);Ee=Math.sqrt(de/2)}else{let G=!1;Ae>Number.EPSILON?Ie>Number.EPSILON&&(G=!0):Ae<-Number.EPSILON?Ie<-Number.EPSILON&&(G=!0):Math.sign(Me)===Math.sign(He)&&(G=!0),G?(_e=-Me,ue=Ae,Ee=Math.sqrt(P)):(_e=Ae,ue=Me,Ee=Math.sqrt(P/2))}return new ce(_e/Ee,ue/Ee)}const ne=[];for(let te=0,Y=U.length,ee=Y-1,_e=te+1;te<Y;te++,ee++,_e++)ee===Y&&(ee=0),_e===Y&&(_e=0),ne[te]=W(U[te],U[ee],U[_e]);const Q=[];let xe,se=ne.concat();for(let te=0,Y=z.length;te<Y;te++){const ee=z[te];xe=[];for(let _e=0,ue=ee.length,Ee=ue-1,Ae=_e+1;_e<ue;_e++,Ee++,Ae++)Ee===ue&&(Ee=0),Ae===ue&&(Ae=0),xe[_e]=W(ee[_e],ee[Ee],ee[Ae]);Q.push(xe),se=se.concat(xe)}for(let te=0;te<m;te++){const Y=te/m,ee=p*Math.cos(Y*Math.PI/2),_e=_*Math.sin(Y*Math.PI/2)+g;for(let ue=0,Ee=U.length;ue<Ee;ue++){const Ae=N(U[ue],ne[ue],_e);B(Ae.x,Ae.y,-ee)}for(let ue=0,Ee=z.length;ue<Ee;ue++){const Ae=z[ue];xe=Q[ue];for(let Me=0,Ie=Ae.length;Me<Ie;Me++){const He=N(Ae[Me],xe[Me],_e);B(He.x,He.y,-ee)}}}const H=_+g;for(let te=0;te<X;te++){const Y=f?N(T[te],se[te],H):T[te];v?(E.copy(y.normals[0]).multiplyScalar(Y.x),M.copy(y.binormals[0]).multiplyScalar(Y.y),C.copy(x[0]).add(E).add(M),B(C.x,C.y,C.z)):B(Y.x,Y.y,0)}for(let te=1;te<=u;te++)for(let Y=0;Y<X;Y++){const ee=f?N(T[Y],se[Y],H):T[Y];v?(E.copy(y.normals[te]).multiplyScalar(ee.x),M.copy(y.binormals[te]).multiplyScalar(ee.y),C.copy(x[te]).add(E).add(M),B(C.x,C.y,C.z)):B(ee.x,ee.y,h/u*te)}for(let te=m-1;te>=0;te--){const Y=te/m,ee=p*Math.cos(Y*Math.PI/2),_e=_*Math.sin(Y*Math.PI/2)+g;for(let ue=0,Ee=U.length;ue<Ee;ue++){const Ae=N(U[ue],ne[ue],_e);B(Ae.x,Ae.y,h+ee)}for(let ue=0,Ee=z.length;ue<Ee;ue++){const Ae=z[ue];xe=Q[ue];for(let Me=0,Ie=Ae.length;Me<Ie;Me++){const He=N(Ae[Me],xe[Me],_e);v?B(He.x,He.y+x[u-1].y,x[u-1].x+ee):B(He.x,He.y,h+ee)}}}J(),le();function J(){const te=i.length/3;if(f){let Y=0,ee=X*Y;for(let _e=0;_e<Z;_e++){const ue=R[_e];Pe(ue[2]+ee,ue[1]+ee,ue[0]+ee)}Y=u+m*2,ee=X*Y;for(let _e=0;_e<Z;_e++){const ue=R[_e];Pe(ue[0]+ee,ue[1]+ee,ue[2]+ee)}}else{for(let Y=0;Y<Z;Y++){const ee=R[Y];Pe(ee[2],ee[1],ee[0])}for(let Y=0;Y<Z;Y++){const ee=R[Y];Pe(ee[0]+X*u,ee[1]+X*u,ee[2]+X*u)}}n.addGroup(te,i.length/3-te,0)}function le(){const te=i.length/3;let Y=0;pe(U,Y),Y+=U.length;for(let ee=0,_e=z.length;ee<_e;ee++){const ue=z[ee];pe(ue,Y),Y+=ue.length}n.addGroup(te,i.length/3-te,1)}function pe(te,Y){let ee=te.length;for(;--ee>=0;){const _e=ee;let ue=ee-1;ue<0&&(ue=te.length-1);for(let Ee=0,Ae=u+m*2;Ee<Ae;Ee++){const Me=X*Ee,Ie=X*(Ee+1),He=Y+_e+Me,P=Y+ue+Me,w=Y+ue+Ie,G=Y+_e+Ie;Ce(He,P,w,G)}}}function B(te,Y,ee){c.push(te),c.push(Y),c.push(ee)}function Pe(te,Y,ee){oe(te),oe(Y),oe(ee);const _e=i.length/3,ue=b.generateTopUV(n,i,_e-3,_e-2,_e-1);ye(ue[0]),ye(ue[1]),ye(ue[2])}function Ce(te,Y,ee,_e){oe(te),oe(Y),oe(_e),oe(Y),oe(ee),oe(_e);const ue=i.length/3,Ee=b.generateSideWallUV(n,i,ue-6,ue-3,ue-2,ue-1);ye(Ee[0]),ye(Ee[1]),ye(Ee[3]),ye(Ee[1]),ye(Ee[2]),ye(Ee[3])}function oe(te){i.push(c[te*3+0]),i.push(c[te*3+1]),i.push(c[te*3+2])}function ye(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return G0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new $u[i.type]().fromJSON(i)),new Jo(n,e.options)}}const V0={generateTopUV:function(o,e,t,n,i){const s=e[t*3],r=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ce(s,r),new ce(a,c),new ce(l,u)]},generateSideWallUV:function(o,e,t,n,i,s){const r=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],g=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new ce(r,1-c),new ce(l,1-h),new ce(f,1-_),new ce(g,1-d)]:[new ce(a,1-c),new ce(u,1-h),new ce(p,1-_),new ce(m,1-d)]}};function G0(o,e,t){if(t.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const s=o[n];t.shapes.push(s.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ko extends Fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xs extends wi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const qc={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class H0{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const W0=new H0;class $o{constructor(e){this.manager=e!==void 0?e:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Rn={};class j0 extends Error{constructor(e,t){super(e),this.response=t}}class nh extends $o{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:i});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Rn[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let g=0;const m=new ReadableStream({start(d){b();function b(){h.read().then(({done:x,value:v})=>{if(x)d.close();else{g+=v.byteLength;const y=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let M=0,E=u.length;M<E;M++){const C=u[M];C.onProgress&&C.onProgress(y)}d.enqueue(v),b()}})}}});return new Response(m)}else throw new j0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{qc.add(e,l);const u=Rn[e];delete Rn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Rn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ih extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $a=new nt,Xc=new L,Yc=new L;class q0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X0 extends q0{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y0 extends ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new X0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z0 extends ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class J0{constructor(e,t,n=0,i=1/0){this.ray=new oa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return wo(e,this,n,t),n.sort(Zc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)wo(e[i],this,n,t);return n.sort(Zc),n}}function Zc(o,e){return o.distance-e.distance}function wo(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)wo(i[s],e,t,!0)}}class Jc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kc=new L,Br=new L;class Xr{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Kc.subVectors(e,this.start),Br.subVectors(this.end,this.start);const n=Br.dot(Br);let s=Br.dot(Kc)/n;return t&&(s=_t(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class zs extends On{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ve(n),i=new Ve(i);const s=t/2,r=e/t,a=e/2,c=[],l=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=r){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const g=f===s?n:i;g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3}const u=new Ke;u.setAttribute("position",new Ye(c,3)),u.setAttribute("color",new Ye(l,3));const h=new wi({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class K0{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new So,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,r){return this.currentPath.bezierCurveTo(e,t,n,i,s,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const b=[];for(let x=0,v=d.length;x<v;x++){const y=d[x],M=new qr;M.curves=y.curves,b.push(M)}return b}function n(d,b){const x=b.length;let v=!1;for(let y=x-1,M=0;M<x;y=M++){let E=b[y],C=b[M],S=C.x-E.x,T=C.y-E.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(E=b[M],S=-S,C=b[y],T=-T),d.y<E.y||d.y>C.y)continue;if(d.y===E.y){if(d.x===E.x)return!0}else{const z=T*(d.x-E.x)-S*(d.y-E.y);if(z===0)return!0;if(z<0)continue;v=!v}}else{if(d.y!==E.y)continue;if(C.x<=d.x&&d.x<=E.x||E.x<=d.x&&d.x<=C.x)return!0}}return v}const i=fs.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,a,c;const l=[];if(s.length===1)return a=s[0],c=new qr,c.curves=a.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],_=0,g;f[_]=void 0,p[_]=[];for(let d=0,b=s.length;d<b;d++)a=s[d],g=a.getPoints(),r=i(g),r=e?!r:r,r?(!u&&f[_]&&_++,f[_]={s:new qr,p:g},f[_].s.curves=a.curves,u&&_++,p[_]=[]):p[_].push({h:a,p:g[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,b=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const y=p[x];for(let M=0;M<y.length;M++){const E=y[M];let C=!0;for(let S=0;S<f.length;S++)n(E.p,f[S].p)&&(x!==S&&b++,C?(C=!1,h[S].push(E)):d=!0);C&&h[x].push(E)}}b>0&&d===!1&&(p=h)}let m;for(let d=0,b=f.length;d<b;d++){c=f[d].s,l.push(c),m=p[d];for(let x=0,v=m.length;x<v;x++)c.holes.push(m[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function In(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function sh(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},Qo,At,ut,tn=1e8,Xe=1/tn,To=Math.PI*2,$0=To/4,Q0=0,rh=Math.sqrt,ev=Math.cos,tv=Math.sin,vt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},Bn=function(e){return typeof e=="number"},el=function(e){return typeof e>"u"},wn=function(e){return typeof e=="object"},Ot=function(e){return e!==!1},tl=function(){return typeof window<"u"},kr=function(e){return st(e)||vt(e)},ah=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ct=Array.isArray,Eo=/(?:-?\.?\d|\.)+/gi,oh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lh=/[+-]=-?[.\d]+/,ch=/[^,'"\[\]\s]+/gi,nv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,Qt,Ao,nl,Yt={},$r={},uh,hh=function(e){return($r=Ii(e,Yt))&&Ft},il=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Qr=function(e,t){return!t&&console.warn(e)},fh=function(e,t){return e&&(Yt[e]=t)&&$r&&($r[e]=t)||Yt},sr=function(){return 0},iv={suppressEvents:!0,isStart:!0,kill:!1},Yr={suppressEvents:!0,kill:!1},sv={suppressEvents:!0},sl={},ei=[],Co={},dh,Wt={},eo={},$c=30,Zr=[],rl="",al=function(e){var t=e[0],n,i;if(wn(t)||st(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Zr.length;i--&&!Zr[i].targetTest(t););n=Zr[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Nh(e[i],n)))||e.splice(i,1);return e},Ti=function(e){return e._gsap||al(nn(e))[0]._gsap},ph=function(e,t,n){return(n=e[t])&&st(n)?e[t]():el(n)&&e.getAttribute&&e.getAttribute(t)||n},zt=function(e,t){return(e=e.split(",")).forEach(t)||e},ot=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},rv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ea=function(){var e=ei.length,t=ei.slice(0),n,i;for(Co={},ei.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},mh=function(e,t,n,i){ei.length&&!At&&ea(),e.render(t,n,i||At&&t<0&&(e._initted||e._startAt)),ei.length&&!At&&ea()},gh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ch).length<2?t:vt(e)?e.trim():e},_h=function(e){return e},rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},av=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ii=function(e,t){for(var n in t)e[n]=t[n];return e},Qc=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ta=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ys=function(e){var t=e.parent||Qe,n=e.keyframes?av(Ct(e.keyframes)):rn;if(Ot(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ov=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},vh=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e[i],a;if(s)for(a=t[s];r&&r[s]>a;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},ha=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},si=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ei=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},lv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Po=function(e,t,n,i){return e._startAt&&(At?e._startAt.revert(Yr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},cv=function o(e){return!e||e._ts&&o(e.parent)},eu=function(e){return e._repeat?Ss(e._tTime,e=e.duration()+e._rDelay)*e:0},Ss=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},na=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fa=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||Xe)||0))},da=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fa(e),n._dirty||Ei(n,e)),e},xh=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=na(e.rawTime(),t),(!t._dur||ur(0,t.totalDuration(),n)-t._tTime>Xe)&&t.render(n,!0)),Ei(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Xe}},yn=function(e,t,n,i){return t.parent&&si(t),t._start=St((Bn(n)?n:n||e!==Qe?$t(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vh(e,t,"_first","_last",e._sort?"_start":0),Lo(t)||(e._recent=t),i||xh(e,t),e._ts<0&&da(e,e._tTime),e},yh=function(e,t){return(Yt.ScrollTrigger||il("scrollTrigger",t))&&Yt.ScrollTrigger.create(t,e)},Sh=function(e,t,n,i,s){if(ll(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!At&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dh!==jt.frame)return ei.push(e),e._lazy=[s,i],1},uv=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Lo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hv=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&uv(e)&&!(!e._initted&&Lo(e))||(e._ts<0||e._dp._ts<0)&&!Lo(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=ur(0,e._tDur,t),u=Ss(c,a),e._yoyo&&u&1&&(r=1-r),u!==Ss(e._tTime,a)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||At||i||e._zTime===Xe||!t&&e._zTime){if(!e._initted&&Sh(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Xe:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=c,l=e._pt;l;)l.r(r,l.d),l=l._next;t<0&&Po(e,t,n,!0),e._onUpdate&&!n&&sn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&si(e,1),!n&&!At&&(sn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},bs=function(e,t,n,i){var s=e._repeat,r=St(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:St(r*(s+1)+e._rDelay*s):r,a>0&&!i&&da(e,e._tTime=e._tDur*a),e.parent&&fa(e),n||Ei(e.parent,e),e},tu=function(e){return e instanceof It?Ei(e):bs(e,e._dur)},dv={_start:0,endTime:sr,totalDuration:sr},$t=function o(e,t,n){var i=e.labels,s=e._recent||dv,r=e.duration()>=tn?s.endTime(!1):e._dur,a,c,l;return vt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=r),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Ct(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+c:r+c)):t==null?r:+t},Zs=function(e,t,n){var i=Bn(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],a,c;if(i&&(r.duration=t[1]),r.parent=n,e){for(a=r,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Ot(c.vars.inherit)&&c.parent;r.immediateRender=Ot(a.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new ft(t[0],r,t[s+1])},ai=function(e,t){return e||e===0?t(e):t},ur=function(e,t,n){return n<e?e:n>t?t:n},Tt=function(e,t){return!vt(e)||!(t=nv.exec(e))?"":t[1]},pv=function(e,t,n){return ai(n,function(i){return ur(e,t,i)})},Do=[].slice,bh=function(e,t){return e&&wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wn(e[0]))&&!e.nodeType&&e!==Qt},mv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return vt(i)&&!t||bh(i,1)?(s=n).push.apply(s,nn(i)):n.push(i)})||n},nn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):vt(e)&&!n&&(Ao||!Ms())?Do.call((t||nl).querySelectorAll(e),0):Ct(e)?mv(e,n):bh(e)?Do.call(e,0):e?[e]:[]},Ro=function(e){return e=nn(e)[0]||Qr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return nn(t,n.querySelectorAll?n:n===e?Qr("Invalid scope")||nl.createElement("div"):e)}},Mh=function(e){return e.sort(function(){return .5-Math.random()})},wh=function(e){if(st(e))return e;var t=wn(e)?e:{each:e},n=Ai(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return vt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(f,p,_){var g=(_||t).length,m=r[g],d,b,x,v,y,M,E,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,tn])[1],!S){for(E=-tn;E<(E=_[S++].getBoundingClientRect().left)&&S<g;);S--}for(m=r[g]=[],d=c?Math.min(S,g)*u-.5:i%S,b=S===tn?0:c?g*h/S-.5:i/S|0,E=0,C=tn,M=0;M<g;M++)x=M%S-d,v=b-(M/S|0),m[M]=y=l?Math.abs(l==="y"?v:x):rh(x*x+v*v),y>E&&(E=y),y<C&&(C=y);i==="random"&&Mh(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:l?l==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Tt(t.amount||t.each)||0,n=n&&g<0?Uh(n):n}return g=(m[f]-m.min)/m.max||0,St(m.b+(n?n(g):g)*m.v)+m.u}},Io=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Bn(n)?0:Tt(n))}},Th=function(e,t){var n=Ct(e),i,s;return!n&&wn(e)&&(i=n=e.radius||tn,e.values?(e=nn(e.values),(s=!Bn(e[0]))&&(i*=i)):e=Io(e.increment)),ai(t,n?st(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var a=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=tn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-c,f=f*f+p*p):f=Math.abs(e[h]-a),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:r,s||u===r||Bn(r)?u:u+Tt(r)}:Io(e))},Eh=function(e,t,n,i){return ai(Ct(e)?!t:n===!0?!!(n=0):!i,function(){return Ct(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},gv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},_v=function(e,t){return function(n){return e(parseFloat(n))+(t||Tt(n))}},vv=function(e,t,n){return Ch(e,t,0,1,n)},Ah=function(e,t,n){return ai(n,function(i){return e[~~t(i)]})},xv=function o(e,t,n){var i=t-e;return Ct(e)?Ah(e,o(0,e.length),t):ai(n,function(s){return(i+(s-e)%i)%i+e})},yv=function o(e,t,n){var i=t-e,s=i*2;return Ct(e)?Ah(e,o(0,e.length-1),t):ai(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},rr=function(e){for(var t=0,n="",i,s,r,a;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(a?ch:Eo),n+=e.substr(t,i-t)+Eh(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},Ch=function(e,t,n,i,s){var r=t-e,a=i-n;return ai(s,function(c){return n+((c-e)/r*a||0)})},Sv=function o(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var r=vt(e),a={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Ct(e)&&!Ct(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(o(e[l-1],e[l]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Ii(Ct(e)?[]:{},e));if(!u){for(c in t)ol.call(a,e,c,"get",t[c]);s=function(_){return hl(_,a)||(r?e.p:e)}}}return ai(n,s)},nu=function(e,t,n){var i=e.labels,s=tn,r,a,c;for(r in i)a=i[r]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=r,s=a);return c},sn=function(e,t,n){var i=e.vars,s=i[t],r=ut,a=e._ctx,c,l,u;if(!!s)return c=i[t+"Params"],l=i.callbackScope||e,n&&ei.length&&ea(),a&&(ut=a),u=c?s.apply(l,c):s.call(l),ut=r,u},Gs=function(e){return si(e),e.scrollTrigger&&e.scrollTrigger.kill(!!At),e.progress()<1&&sn(e,"onInterrupt"),e},ls,Ph=[],Lh=function(e){if(!tl()){Ph.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=st(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:sr,render:hl,add:ol,kill:Nv,modifier:zv,rawVars:0},r={targetTest:0,get:0,getSetter:ul,aliases:{},register:0};if(Ms(),e!==i){if(Wt[t])return;rn(i,rn(ta(e,s),r)),Ii(i.prototype,Ii(s,ta(e,r))),Wt[i.prop=t]=i,e.targetTest&&(Zr.push(i),sl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}fh(t,i),e.register&&e.register(Ft,i,Nt)},qe=255,Hs={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},to=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*qe+.5|0},Dh=function(e,t,n){var i=e?Bn(e)?[e>>16,e>>8&qe,e&qe]:0:Hs.black,s,r,a,c,l,u,h,f,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])i=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),a=e.charAt(3),e="#"+s+s+r+r+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Eo),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(l+1):u+l-u*l,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=to(c+1/3,s,r),i[1]=to(c,s,r),i[2]=to(c-1/3,s,r);else if(~e.indexOf("="))return i=e.match(oh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Eo)||Hs.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/qe,r=i[1]/qe,a=i[2]/qe,h=Math.max(s,r,a),f=Math.min(s,r,a),u=(h+f)/2,h===f?c=l=0:(p=h-f,l=u>.5?p/(2-h-f):p/(h+f),c=h===s?(r-a)/p+(r<a?6:0):h===r?(a-s)/p+2:(s-r)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Rh=function(e){var t=[],n=[],i=-1;return e.split(ti).forEach(function(s){var r=s.match(os)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},iu=function(e,t,n){var i="",s=(e+i).match(ti),r=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Dh(f,t,1))&&r+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Rh(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(ti,"1").split(os),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(ti),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},ti=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),bv=/hsl[a]?\(/,Ih=function(e){var t=e.join(" "),n;if(ti.lastIndex=0,ti.test(t))return n=bv.test(t),e[1]=iu(e[1],n),e[0]=iu(e[0],n,Rh(e[1])),!0},ar,jt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,s=1e3/240,r=s,a=[],c,l,u,h,f,p,_=function g(m){var d=o()-i,b=m===!0,x,v,y,M;if(d>e&&(n+=d-t),i+=d,y=i-n,x=y-r,(x>0||b)&&(M=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,r+=x+(x>=s?4:s-x),v=1),b||(c=l(g)),v)for(p=0;p<a.length;p++)a[p](y,f,M,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){uh&&(!Ao&&tl()&&(Qt=Ao=window,nl=Qt.document||{},Yt.gsap=Ft,(Qt.gsapVersions||(Qt.gsapVersions=[])).push(Ft.version),hh($r||Qt.GreenSockGlobals||!Qt.gsap&&Qt||{}),u=Qt.requestAnimationFrame,Ph.forEach(Lh)),c&&h.sleep(),l=u||function(m){return setTimeout(m,r-h.time*1e3+1|0)},ar=1,_(2))},sleep:function(){(u?Qt.cancelAnimationFrame:clearTimeout)(c),ar=0,l=sr},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),r=h.time*1e3+s},add:function(m,d,b){var x=d?function(v,y,M,E){m(v,y,M,E),h.remove(x)}:m;return h.remove(m),a[b?"unshift":"push"](x),Ms(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),Ms=function(){return!ar&&jt.wake()},Ge={},Mv=/^[\d.\-M][\d.\-,\s]/,wv=/["']/g,Tv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,a,c,l;s<r;s++)c=n[s],a=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(wv,"").trim():+l,i=c.substr(a+1).trim();return t},Ev=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Av=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Tv(t[1])]:Ev(e).split(",").map(gh)):Ge._CE&&Mv.test(e)?Ge._CE("",e):n},Uh=function(e){return function(t){return 1-e(1-t)}},Oh=function o(e,t){for(var n=e._first,i;n;)n instanceof It?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ai=function(e,t){return e&&(st(e)?e:Ge[e]||Av(e))||t},zi=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return zt(e,function(a){Ge[a]=Yt[a]=s,Ge[r=a.toLowerCase()]=n;for(var c in s)Ge[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ge[a+"."+c]=s[c]}),s},zh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},no=function o(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/To*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*tv((u-r)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:zh(a);return s=To/s,c.config=function(l,u){return o(e,l,u)},c},io=function o(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:zh(n);return i.config=function(s){return o(e,s)},i};zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;zi(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;zi("Elastic",no("in"),no("out"),no());(function(o,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};zi("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);zi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});zi("Circ",function(o){return-(rh(1-o*o)-1)});zi("Sine",function(o){return o===1?1:-ev(o*$0)+1});zi("Back",io("in"),io("out"),io());Ge.SteppedEase=Ge.steps=Yt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-Xe;return function(a){return((i*ur(0,r,a)|0)+s)*n}}};ys.ease=Ge["quad.out"];zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return rl+=o+","+o+"Params,"});var Nh=function(e,t){this.id=Q0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ph,this.set=t?t.getSetter:ul},ws=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),ar||jt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(da(this,n),!s._dp||s.parent||xh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Xe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+eu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+eu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ss(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?na(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Xe?0:this._rts,this.totalTime(ur(-Math.abs(this._delay),this._tDur,i),!0),fa(this),lv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ot(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?na(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sv);var i=At;return At=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),At=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime($t(this,n),Ot(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ot(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Xe)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=st(n)?n:_h,a=function(){var l=i.then;i.then=null,st(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=l),s(r),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Gs(this)},o}();rn(ws.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var It=function(o){sh(e,o);function e(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ot(n.sortChildren),Qe&&yn(n.parent||Qe,In(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yh(In(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return Zs(0,arguments,this),this},t.from=function(i,s,r){return Zs(1,arguments,this),this},t.fromTo=function(i,s,r,a){return Zs(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,Ys(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ft(i,s,$t(this,r),1),this},t.call=function(i,s,r){return yn(this,ft.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,a,c,l,u){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=l,r.onCompleteParams=u,r.parent=this,new ft(i,r,$t(this,c)),this},t.staggerFrom=function(i,s,r,a,c,l,u){return r.runBackwards=1,Ys(r).immediateRender=Ot(r.immediateRender),this.staggerTo(i,s,r,a,c,l,u)},t.staggerFromTo=function(i,s,r,a,c,l,u,h){return a.startAt=r,Ys(a).immediateRender=Ot(a.immediateRender),this.staggerTo(i,s,a,c,l,u,h)},t.render=function(i,s,r){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:St(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,p,_,g,m,d,b,x,v,y,M,E;if(this!==Qe&&u>c&&i>=0&&(u=c),u!==this._tTime||r||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,x=this._ts,d=!x,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(f=St(u%m),u===c?(g=this._repeat,f=l):(g=~~(u/m),g&&g===u/m&&(f=l,g--),f>l&&(f=l)),y=Ss(this._tTime,m),!a&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),M&&g&1&&(f=l-f,E=1),g!==y&&!this._lock){var C=M&&y&1,S=C===(M&&g&1);if(g<y&&(C=!C),a=C?0:l,this._lock=1,this.render(a||(E?0:St(g*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,a=C?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Oh(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=fv(this,St(a),St(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(sn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,r),f!==this._time||!this._ts&&!d){b=0,_&&(u+=this._zTime=-Xe);break}}p=_}else{p=this._last;for(var T=i<0?i:f;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,r||At&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){b=0,_&&(u+=this._zTime=T?-Xe:Xe);break}}p=_}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-Xe)._zTime=f>=a?1:-1,this._ts))return this._start=v,fa(this),this.render(i,s,r);this._onUpdate&&!s&&sn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&si(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(sn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(Bn(s)||(s=$t(this,s,i)),!(i instanceof ws)){if(Ct(i))return i.forEach(function(a){return r.add(a,s)}),this;if(vt(i))return this.addLabel(i,s);if(st(i))i=ft.delayedCall(0,i);else return this}return this!==i?yn(this,i,s):this},t.getChildren=function(i,s,r,a){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-tn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof ft?s&&c.push(l):(r&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return vt(i)?this.removeLabel(i):st(i)?this.killTweensOf(i):(ha(this,i),i===this._recent&&(this._recent=this._last),Ei(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(jt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=$t(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var a=ft.delayedCall(0,s||sr,r);return a.data="isPause",this._hasPause=1,yn(this,a,$t(this,i))},t.removePause=function(i){var s=this._first;for(i=$t(this,i);s;)s._start===i&&s.data==="isPause"&&si(s),s=s._next},t.killTweensOf=function(i,s,r){for(var a=this.getTweensOf(i,r),c=a.length;c--;)Zn!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],a=nn(i),c=this._first,l=Bn(s),u;c;)c instanceof ft?rv(c._targets,a)&&(l?(!Zn||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(u=c.getTweensOf(a,s)).length&&r.push.apply(r,u),c=c._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,a=$t(r,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,p,_=ft.to(r,rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale())||Xe,onStart:function(){if(r.pause(),!p){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale());_._dur!==m&&bs(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,rn({startAt:{time:$t(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),nu(this,$t(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),nu(this,$t(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Xe)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var a=this._first,c=this.labels,l;a;)a._start>=r&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=r&&(c[l]+=i);return Ei(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ei(this)},t.totalDuration=function(i){var s=0,r=this,a=r._last,c=tn,l,u,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(h=r.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&r._sort&&a._ts&&!r._lock?(r._lock=1,yn(r,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;bs(r,r===Qe&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(Qe._ts&&(mh(Qe,na(i,Qe)),dh=jt.frame),jt.frame>=$c){$c+=Xt.autoSleep||120;var s=Qe._first;if((!s||!s._ts)&&Xt.autoSleep&&jt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jt.sleep()}}},e}(ws);rn(It.prototype,{_lock:0,_hasPause:0,_forcing:0});var Cv=function(e,t,n,i,s,r,a){var c=new Nt(this._pt,e,t,0,1,Hh,null,s),l=0,u=0,h,f,p,_,g,m,d,b;for(c.b=n,c.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=rr(i)),r&&(b=[n,i],r(b,e,t),n=b[0],i=b[1]),f=n.match(Qa)||[];h=Qa.exec(i);)_=h[0],g=i.substring(l,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ds(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},l=Qa.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(lh.test(i)||d)&&(c.e=0),this._pt=c,c},ol=function(e,t,n,i,s,r,a,c,l,u){st(i)&&(i=i(s||0,e,r));var h=e[t],f=n!=="get"?n:st(h)?l?e[t.indexOf("set")||!st(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,p=st(h)?l?Iv:Vh:cl,_;if(vt(i)&&(~i.indexOf("random(")&&(i=rr(i)),i.charAt(1)==="="&&(_=ds(f,i)+(Tt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Uo)return!isNaN(f*i)&&i!==""?(_=new Nt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Ov:Gh,0,p),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&il(t,i),Cv.call(this,e,t,f,i,p,c||Xt.stringFilter,l))},Pv=function(e,t,n,i,s){if(st(e)&&(e=Js(e,s,t,n,i)),!wn(e)||e.style&&e.nodeType||Ct(e)||ah(e))return vt(e)?Js(e,s,t,n,i):e;var r={},a;for(a in e)r[a]=Js(e[a],s,t,n,i);return r},Fh=function(e,t,n,i,s,r){var a,c,l,u;if(Wt[e]&&(a=new Wt[e]).init(s,a.rawVars?t[e]:Pv(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=c=new Nt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ls))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Zn,Uo,ll=function o(e,t,n){var i=e.vars,s=i.ease,r=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=e._dur,d=e._startAt,b=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:b,y=e._overwrite==="auto"&&!Qo,M=e.timeline,E,C,S,T,z,k,R,U,N,X,Z,W,ne;if(M&&(!_||!s)&&(s="none"),e._ease=Ai(s,ys.ease),e._yEase=p?Uh(Ai(p===!0?s:p,ys.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!M&&!!i.runBackwards,!M||_&&!i.stagger){if(U=b[0]?Ti(b[0]).harness:0,W=U&&i[U.prop],E=ta(i,sl),d&&(d._zTime<0&&d.progress(1),t<0&&f&&a&&!g?d.render(-1,!0):d.revert(f&&m?Yr:iv),d._lazy=0),r){if(si(e._startAt=ft.set(b,rn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Ot(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:u,callbackScope:h,stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(At||!a&&!g)&&e._startAt.revert(Yr),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!d){if(t&&(a=!1),S=rn({overwrite:!1,data:"isFromStart",lazy:a&&!d&&Ot(c),immediateRender:a,stagger:0,parent:x},E),W&&(S[U.prop]=W),si(e._startAt=ft.set(b,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(At?e._startAt.revert(Yr):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,Xe,Xe);else if(!t)return}for(e._pt=e._ptCache=0,c=m&&Ot(c)||c&&!m,C=0;C<b.length;C++){if(z=b[C],R=z._gsap||al(b)[C]._gsap,e._ptLookup[C]=X={},Co[R.id]&&ei.length&&ea(),Z=v===b?C:v.indexOf(z),U&&(N=new U).init(z,W||E,e,Z,v)!==!1&&(e._pt=T=new Nt(e._pt,z,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Q){X[Q]=T}),N.priority&&(k=1)),!U||W)for(S in E)Wt[S]&&(N=Fh(S,E,e,Z,z,v))?N.priority&&(k=1):X[S]=T=ol.call(e,z,S,"get",E[S],Z,v,0,i.stringFilter);e._op&&e._op[C]&&e.kill(z,e._op[C]),y&&e._pt&&(Zn=e,Qe.killTweensOf(z,X,e.globalTime(t)),ne=!e.parent,Zn=0),e._pt&&c&&(Co[R.id]=1)}k&&Wh(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ne,_&&t<=0&&M.render(tn,!0,!0)},Lv=function(e,t,n,i,s,r,a){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(l=h[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Uo=1,e.vars[t]="+=0",ll(e,a),Uo=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!s?i:l.s+(i||0)+r*l.c,l.c=n-l.s,u.e&&(u.e=ot(n)+Tt(u.e)),u.b&&(u.b=l.s+Tt(u.b))},Dv=function(e,t){var n=e[0]?Ti(e[0]).harness:0,i=n&&n.aliases,s,r,a,c;if(!i)return t;s=Ii({},t);for(r in i)if(r in s)for(c=i[r].split(","),a=c.length;a--;)s[c[a]]=s[r];return s},Rv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,a;if(Ct(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(r in t)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(e),v:t[r],e:s})},Js=function(e,t,n,i,s){return st(e)?e.call(t,n,i,s):vt(e)&&~e.indexOf("random(")?rr(e):e},Bh=rl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",kh={};zt(Bh+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return kh[o]=1});var ft=function(o){sh(e,o);function e(n,i,s,r){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=o.call(this,r?i:Ys(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,p=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,d=c.yoyoEase,b=i.parent||Qe,x=(Ct(n)||ah(n)?Bn(n[0]):"length"in i)?[n]:nn(n),v,y,M,E,C,S,T,z;if(a._targets=x.length?al(x):Qr("GSAP target "+n+" not found. https://greensock.com",!Xt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||kr(l)||kr(u)){if(i=a.vars,v=a.timeline=new It({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:x}),v.kill(),v.parent=v._dp=In(a),v._start=0,f||kr(l)||kr(u)){if(E=x.length,T=f&&wh(f),wn(f))for(C in f)~Bh.indexOf(C)&&(z||(z={}),z[C]=f[C]);for(y=0;y<E;y++)M=ta(i,kh),M.stagger=0,d&&(M.yoyoEase=d),z&&Ii(M,z),S=x[y],M.duration=+Js(l,In(a),y,S,x),M.delay=(+Js(u,In(a),y,S,x)||0)-a._delay,!f&&E===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),v.to(S,M,T?T(y,S,x):0),v._ease=Ge.none;v.duration()?l=u=0:a.timeline=0}else if(_){Ys(rn(v.vars.defaults,{ease:"none"})),v._ease=Ai(_.ease||i.ease||"none");var k=0,R,U,N;if(Ct(_))_.forEach(function(X){return v.to(x,X,">")}),v.duration();else{M={};for(C in _)C==="ease"||C==="easeEach"||Rv(C,_[C],M,_.easeEach);for(C in M)for(R=M[C].sort(function(X,Z){return X.t-Z.t}),k=0,y=0;y<R.length;y++)U=R[y],N={ease:U.e,duration:(U.t-(y?R[y-1].t:0))/100*l},N[C]=U.v,v.to(x,N,k),k+=N.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return p===!0&&!Qo&&(Zn=In(a),Qe.killTweensOf(x),Zn=0),yn(b,In(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!_&&a._start===St(b._time)&&Ot(h)&&cv(In(a))&&b.data!=="nested")&&(a._tTime=-Xe,a.render(Math.max(0,-u)||0)),m&&yh(In(a),m),a}var t=e.prototype;return t.render=function(i,s,r){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Xe&&!u?c:i<Xe?0:i,f,p,_,g,m,d,b,x,v;if(!l)hv(this,i,s,r);else if(h!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,r);if(f=St(h%g),h===c?(_=this._repeat,f=l):(_=~~(h/g),_&&_===h/g&&(f=l,_--),f>l&&(f=l)),d=this._yoyo&&_&1,d&&(v=this._yEase,f=l-f),m=Ss(this._tTime,g),f===a&&!r&&this._initted)return this._tTime=h,this;_!==m&&(x&&this._yEase&&Oh(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=r=1,this.render(St(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Sh(this,u?i:f,r,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,s,r)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(f/l),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&!_&&(sn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(i<0?i:!f&&d?-Xe:x._dur*x._ease(f/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Po(this,i,s,r),sn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Po(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&si(this,1),!s&&!(u&&!a)&&(h||a||d)&&(sn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,r,a){ar||jt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||ll(this,c),l=this._ease(c/this._dur),Lv(this,i,s,r,a,l,c)?this.resetTo(i,s,r,a):(da(this,0),this.parent||vh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gs(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Zn&&Zn.vars.overwrite!==!0)._first||Gs(this),this.parent&&r!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,c=i?nn(i):a,l=this._ptLookup,u=this._pt,h,f,p,_,g,m,d;if((!s||s==="all")&&ov(a,c))return s==="all"&&(this._pt=0),Gs(this);for(h=this._op=this._op||[],s!=="all"&&(vt(s)&&(g={},zt(s,function(b){return g[b]=1}),s=g),s=Dv(a,s)),d=a.length;d--;)if(~c.indexOf(a[d])){f=l[d],s==="all"?(h[d]=s,_=f,p={}):(p=h[d]=h[d]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ha(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Gs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Zs(1,arguments)},e.delayedCall=function(i,s,r,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},e.fromTo=function(i,s,r){return Zs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return Qe.killTweensOf(i,s,r)},e}(ws);rn(ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zt("staggerTo,staggerFrom,staggerFromTo",function(o){ft[o]=function(){var e=new It,t=Do.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var cl=function(e,t,n){return e[t]=n},Vh=function(e,t,n){return e[t](n)},Iv=function(e,t,n,i){return e[t](i.fp,n)},Uv=function(e,t,n){return e.setAttribute(t,n)},ul=function(e,t){return st(e[t])?Vh:el(e[t])&&e.setAttribute?Uv:cl},Gh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ov=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},hl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zv=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},Nv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ha(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Fv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Wh=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},Nt=function(){function o(t,n,i,s,r,a,c,l,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=a||Gh,this.d=c||this,this.set=l||cl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Fv,this.m=n,this.mt=s,this.tween=i},o}();zt(rl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return sl[o]=1});Yt.TweenMax=Yt.TweenLite=ft;Yt.TimelineLite=Yt.TimelineMax=It;Qe=new It({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xt.stringFilter=Ih;var Ts=[],Jr={},Bv=[],su=0,so=function(e){return(Jr[e]||Bv).map(function(t){return t()})},Oo=function(){var e=Date.now(),t=[];e-su>2&&(so("matchMediaInit"),Ts.forEach(function(n){var i=n.queries,s=n.conditions,r,a,c,l;for(a in i)r=Qt.matchMedia(i[a]).matches,r&&(c=1),r!==s[a]&&(s[a]=r,l=1);l&&(n.revert(),c&&t.push(n))}),so("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),su=e,so("matchMedia"))},jh=function(){function o(t,n){this.selector=n&&Ro(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,s){st(n)&&(s=i,i=n,n=st);var r=this,a=function(){var l=ut,u=r.selector,h;return l&&l!==r&&l.data.push(r),s&&(r.selector=Ro(s)),ut=r,h=i.apply(r,arguments),st(h)&&r._r.push(h),ut=l,r.selector=u,r.isReverted=!1,h};return r.last=a,n===st?a(r):n?r[n]=a:a},e.ignore=function(n){var i=ut;ut=null,n(this),ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return r.splice(r.indexOf(l),1)}))}),r.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof ws)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var a=Ts.indexOf(this);~a&&Ts.splice(a,1)}},e.revert=function(n){this.kill(n||{})},o}(),kv=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,s){wn(n)||(n={matches:n});var r=new jh(0,s||this.scope),a=r.conditions={},c,l,u;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(l in n)l==="all"?u=1:(c=Qt.matchMedia(n[l]),c&&(Ts.indexOf(r)<0&&Ts.push(r),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Oo):c.addEventListener("change",Oo)));return u&&i(r),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ia={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Lh(i)})},timeline:function(e){return new It(e)},getTweensOf:function(e,t){return Qe.getTweensOf(e,t)},getProperty:function(e,t,n,i){vt(e)&&(e=nn(e)[0]);var s=Ti(e||{}).get,r=n?_h:gh;return n==="native"&&(n=""),e&&(t?r((Wt[t]&&Wt[t].get||s)(e,t,n,i)):function(a,c,l){return r((Wt[a]&&Wt[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=nn(e),e.length>1){var i=e.map(function(u){return Ft.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var r=Wt[t],a=Ti(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=r?function(u){var h=new r;ls._pt=0,h.init(e,n?u+n:u,ls,0,[e]),h.render(1,h),ls._pt&&hl(1,ls)}:a.set(e,c);return r?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Ft.to(e,Ii((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(c,l,u){return s.resetTo(t,c,l,u)};return r.tween=s,r},isTweening:function(e){return Qe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ai(e.ease,ys.ease)),Qc(ys,e||{})},config:function(e){return Qc(Xt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wt[a]&&!Yt[a]&&Qr(t+" effect requires "+a+" plugin.")}),eo[t]=function(a,c,l){return n(nn(a),rn(c||{},s),l)},r&&(It.prototype[t]=function(a,c,l){return this.add(eo[t](a,wn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ge[e]=Ai(t)},parseEase:function(e,t){return arguments.length?Ai(e,t):Ge},getById:function(e){return Qe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new It(e),i,s;for(n.smoothChildTiming=Ot(e.smoothChildTiming),Qe.remove(n),n._dp=0,n._time=n._tTime=Qe._time,i=Qe._first;i;)s=i._next,(t||!(!i._dur&&i instanceof ft&&i.vars.onComplete===i._targets[0]))&&yn(n,i,i._start-i._delay),i=s;return yn(Qe,n,0),n},context:function(e,t){return e?new jh(e,t):ut},matchMedia:function(e){return new kv(e)},matchMediaRefresh:function(){return Ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Oo()},addEventListener:function(e,t){var n=Jr[e]||(Jr[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jr[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:xv,wrapYoyo:yv,distribute:wh,random:Eh,snap:Th,normalize:vv,getUnit:Tt,clamp:pv,splitColor:Dh,toArray:nn,selector:Ro,mapRange:Ch,pipe:gv,unitize:_v,interpolate:Sv,shuffle:Mh},install:hh,effects:eo,ticker:jt,updateRoot:It.updateRoot,plugins:Wt,globalTimeline:Qe,core:{PropTween:Nt,globals:fh,Tween:ft,Timeline:It,Animation:ws,getCache:Ti,_removeLinkedListItem:ha,reverting:function(){return At},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Qo=e}}};zt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ia[o]=ft[o]});jt.add(It.updateRoot);ls=ia.to({},{duration:0});var Vv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Gv=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=Vv(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},ro=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(a){var c,l;if(vt(s)&&(c={},zt(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Gv(a,s)}}}},Ft=ia.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,a,c;this.tween=n;for(r in t)c=e.getAttribute(r)||"",a=this.add(e,"setAttribute",(c||0)+"",t[r],i,s,0,0,r),a.op=r,a.b=c,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)At?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ro("roundProps",Io),ro("modifiers"),ro("snap",Th))||ia;ft.version=It.version=Ft.version="3.11.5";uh=1;tl()&&Ms();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ru,Jn,ps,fl,bi,au,dl,Hv=function(){return typeof window<"u"},kn={},_i=180/Math.PI,ms=Math.PI/180,ts=Math.atan2,ou=1e8,pl=/([A-Z])/g,Wv=/(left|right|width|margin|padding|x)/i,jv=/[\s,\(]\S/,bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},qh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zv=function(e,t,n){return e.style[t]=n},Jv=function(e,t,n){return e.style.setProperty(t,n)},Kv=function(e,t,n){return e._gsap[t]=n},$v=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Qv=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},ex=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},tt="transform",mn=tt+"Origin",tx=function o(e,t){var n=this,i=this.target,s=i.style;if(e in kn){if(this.tfm=this.tfm||{},e!=="transform")e=bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return n.tfm[r]=Un(i,r)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Un(i,e);else return bn.transform.split(",").forEach(function(r){return o.call(n,r,t)});if(this.props.indexOf(tt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mn,t,"")),e=tt}(s||t)&&this.props.push(e,t,s[e])},Yh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},nx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(pl,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=dl(),(!s||!s.isStart)&&!n[tt]&&(Yh(n),i.uncache=1)}},Zh=function(e,t){var n={target:e,props:[],revert:nx,save:tx};return e._gsap||Ft.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Jh,No=function(e,t){var n=Jn.createElementNS?Jn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Jn.createElement(e);return n.style?n:Jn.createElement(e)},Mn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(pl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Es(t)||t,1)||""},lu="O,Moz,ms,Ms,Webkit".split(","),Es=function(e,t,n){var i=t||bi,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(lu[r]+e in s););return r<0?null:(r===3?"ms":r>=0?lu[r]:"")+e},Fo=function(){Hv()&&window.document&&(ru=window,Jn=ru.document,ps=Jn.documentElement,bi=No("div")||{style:{}},No("div"),tt=Es(tt),mn=tt+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jh=!!Es("perspective"),dl=Ft.core.reverting,fl=1)},ao=function o(e){var t=No("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(ps.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ps.removeChild(t),this.style.cssText=s,r},cu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kh=function(e){var t;try{t=e.getBBox()}catch{t=ao.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ao||(t=ao.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+cu(e,["x","cx","x1"])||0,y:+cu(e,["y","cy","y1"])||0,width:0,height:0}:t},$h=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kh(e))},or=function(e,t){if(t){var n=e.style;t in kn&&t!==mn&&(t=tt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(pl,"-$1").toLowerCase())):n.removeAttribute(t)}},Kn=function(e,t,n,i,s,r){var a=new Nt(e._pt,t,n,0,1,r?Xh:qh);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},uu={deg:1,rad:1,turn:1},ix={grid:1,flex:1},ri=function o(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=bi.style,c=Wv.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",p=i==="%",_,g,m,d;return i===r||!s||uu[i]||uu[r]?s:(r!=="px"&&!f&&(s=o(e,t,n,"px")),d=e.getCTM&&$h(e),(p||r==="%")&&(kn[t]||~t.indexOf("adius"))?(_=d?e.getBBox()[c?"width":"height"]:e[u],ot(p?s/_*h:s/100*_)):(a[c?"width":"height"]=h+(f?r:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,d&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Jn||!g.appendChild)&&(g=Jn.body),m=g._gsap,m&&p&&m.width&&c&&m.time===jt.time&&!m.uncache?ot(s/m.width*h):((p||r==="%")&&!ix[Mn(g,"display")]&&(a.position=Mn(e,"position")),g===e&&(a.position="static"),g.appendChild(bi),_=bi[u],g.removeChild(bi),a.position="absolute",c&&p&&(m=Ti(g),m.time=jt.time,m.width=g[u]),ot(f?_*s/h:_&&s?h/_*s:0))))},Un=function(e,t,n,i){var s;return fl||Fo(),t in bn&&t!=="transform"&&(t=bn[t],~t.indexOf(",")&&(t=t.split(",")[0])),kn[t]&&t!=="transform"?(s=cr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ra(Mn(e,mn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=sa[t]&&sa[t](e,t,n)||Mn(e,t)||ph(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ri(e,t,s,n)+n:s},sx=function(e,t,n,i){if(!n||n==="none"){var s=Es(t,e,1),r=s&&Mn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=Mn(e,"borderTopColor"))}var a=new Nt(this._pt,e.style,t,0,1,Hh),c=0,l=0,u,h,f,p,_,g,m,d,b,x,v,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Mn(e,t)||i,e.style[t]=n),u=[n,i],Ih(u),n=u[0],i=u[1],f=n.match(os)||[],y=i.match(os)||[],y.length){for(;h=os.exec(i);)m=h[0],b=i.substring(c,h.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=f[l++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),m.charAt(1)==="="&&(m=ds(p,m)+v),d=parseFloat(m),x=m.substr((d+"").length),c=os.lastIndex-x.length,x||(x=x||Xt.units[t]||v,c===i.length&&(i+=x,a.e+=x)),v!==x&&(p=ri(e,t,g,x)||0),a._pt={_next:a._pt,p:b||l===1?b:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Xh:qh;return lh.test(i)&&(a.e=0),this._pt=a,a},hu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=hu[n]||n,t[1]=hu[i]||i,t.join(" ")},ax=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],kn[a]&&(c=1,a=a==="transformOrigin"?mn:tt),or(n,a);c&&(or(n,tt),r&&(r.svg&&n.removeAttribute("transform"),cr(n,1),r.uncache=1,Yh(i)))}},sa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new Nt(e._pt,t,n,0,0,ax);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},lr=[1,0,0,1,0,0],Qh={},ef=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fu=function(e){var t=Mn(e,tt);return ef(t)?lr:t.substr(7).match(oh).map(ot)},ml=function(e,t){var n=e._gsap||Ti(e),i=e.style,s=fu(e),r,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?lr:s):(s===lr&&!e.offsetParent&&e!==ps&&!n.svg&&(c=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(l=1,a=e.nextElementSibling,ps.appendChild(e)),s=fu(e),c?i.display=c:or(e,"display"),l&&(a?r.insertBefore(e,a):r?r.appendChild(e):ps.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bo=function(e,t,n,i,s,r){var a=e._gsap,c=s||ml(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=c[0],_=c[1],g=c[2],m=c[3],d=c[4],b=c[5],x=t.split(" "),v=parseFloat(x[0])||0,y=parseFloat(x[1])||0,M,E,C,S;n?c!==lr&&(E=p*m-_*g)&&(C=v*(m/E)+y*(-g/E)+(g*b-m*d)/E,S=v*(-_/E)+y*(p/E)-(p*b-_*d)/E,v=C,y=S):(M=Kh(e),v=M.x+(~x[0].indexOf("%")?v/100*M.width:v),y=M.y+(~(x[1]||x[0]).indexOf("%")?y/100*M.height:y)),i||i!==!1&&a.smooth?(d=v-l,b=y-u,a.xOffset=h+(d*p+b*g)-d,a.yOffset=f+(d*_+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=y,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[mn]="0px 0px",r&&(Kn(r,a,"xOrigin",l,v),Kn(r,a,"yOrigin",u,y),Kn(r,a,"xOffset",h,a.xOffset),Kn(r,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},cr=function(e,t){var n=e._gsap||new Nh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",a="deg",c=getComputedStyle(e),l=Mn(e,mn)||"0",u,h,f,p,_,g,m,d,b,x,v,y,M,E,C,S,T,z,k,R,U,N,X,Z,W,ne,Q,xe,se,H,J,le;return u=h=f=g=m=d=b=x=v=0,p=_=1,n.svg=!!(e.getCTM&&$h(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[tt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[tt]!=="none"?c[tt]:"")),i.scale=i.rotate=i.translate="none"),E=ml(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),l=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Bo(e,Z||l,!!Z||n.originIsAbsolute,n.smooth!==!1,E)),y=n.xOrigin||0,M=n.yOrigin||0,E!==lr&&(z=E[0],k=E[1],R=E[2],U=E[3],u=N=E[4],h=X=E[5],E.length===6?(p=Math.sqrt(z*z+k*k),_=Math.sqrt(U*U+R*R),g=z||k?ts(k,z)*_i:0,b=R||U?ts(R,U)*_i+g:0,b&&(_*=Math.abs(Math.cos(b*ms))),n.svg&&(u-=y-(y*z+M*R),h-=M-(y*k+M*U))):(le=E[6],H=E[7],Q=E[8],xe=E[9],se=E[10],J=E[11],u=E[12],h=E[13],f=E[14],C=ts(le,se),m=C*_i,C&&(S=Math.cos(-C),T=Math.sin(-C),Z=N*S+Q*T,W=X*S+xe*T,ne=le*S+se*T,Q=N*-T+Q*S,xe=X*-T+xe*S,se=le*-T+se*S,J=H*-T+J*S,N=Z,X=W,le=ne),C=ts(-R,se),d=C*_i,C&&(S=Math.cos(-C),T=Math.sin(-C),Z=z*S-Q*T,W=k*S-xe*T,ne=R*S-se*T,J=U*T+J*S,z=Z,k=W,R=ne),C=ts(k,z),g=C*_i,C&&(S=Math.cos(C),T=Math.sin(C),Z=z*S+k*T,W=N*S+X*T,k=k*S-z*T,X=X*S-N*T,z=Z,N=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=ot(Math.sqrt(z*z+k*k+R*R)),_=ot(Math.sqrt(X*X+le*le)),C=ts(N,X),b=Math.abs(C)>2e-4?C*_i:0,v=J?1/(J<0?-J:J):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ef(Mn(e,tt)),Z&&e.setAttribute("transform",Z))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=f+r,n.scaleX=ot(p),n.scaleY=ot(_),n.rotation=ot(g)+a,n.rotationX=ot(m)+a,n.rotationY=ot(d)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=v+r,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[mn]=ra(l)),n.xOffset=n.yOffset=0,n.force3D=Xt.force3D,n.renderTransform=n.svg?lx:Jh?tf:ox,n.uncache=0,n},ra=function(e){return(e=e.split(" "))[0]+" "+e[1]},oo=function(e,t,n){var i=Tt(t);return ot(parseFloat(t)+parseFloat(ri(e,"x",n+"px",i)))+i},ox=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,tf(e,t)},di="0deg",Ns="0px",pi=") ",tf=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,b=n.target,x=n.zOrigin,v="",y=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==di||u!==di)){var M=parseFloat(u)*ms,E=Math.sin(M),C=Math.cos(M),S;M=parseFloat(h)*ms,S=Math.cos(M),r=oo(b,r,E*S*-x),a=oo(b,a,-Math.sin(M)*-x),c=oo(b,c,C*S*-x+x)}m!==Ns&&(v+="perspective("+m+pi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(y||r!==Ns||a!==Ns||c!==Ns)&&(v+=c!==Ns||y?"translate3d("+r+", "+a+", "+c+") ":"translate("+r+", "+a+pi),l!==di&&(v+="rotate("+l+pi),u!==di&&(v+="rotateY("+u+pi),h!==di&&(v+="rotateX("+h+pi),(f!==di||p!==di)&&(v+="skew("+f+", "+p+pi),(_!==1||g!==1)&&(v+="scale("+_+", "+g+pi),b.style[tt]=v||"translate(0, 0)"},lx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,b=n.forceCSS,x=parseFloat(r),v=parseFloat(a),y,M,E,C,S;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=ms,l*=ms,y=Math.cos(c)*h,M=Math.sin(c)*h,E=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(u*=ms,S=Math.tan(l-u),S=Math.sqrt(1+S*S),E*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),y*=S,M*=S)),y=ot(y),M=ot(M),E=ot(E),C=ot(C)):(y=h,C=f,M=E=0),(x&&!~(r+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=ri(p,"x",r,"px"),v=ri(p,"y",a,"px")),(_||g||m||d)&&(x=ot(x+_-(_*y+g*E)+m),v=ot(v+g-(_*M+g*C)+d)),(i||s)&&(S=p.getBBox(),x=ot(x+i/100*S.width),v=ot(v+s/100*S.height)),S="matrix("+y+","+M+","+E+","+C+","+x+","+v+")",p.setAttribute("transform",S),b&&(p.style[tt]=S)},cx=function(e,t,n,i,s){var r=360,a=vt(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?_i:1),l=c-i,u=i+l+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),h==="cw"&&l<0?l=(l+r*ou)%r-~~(l/r)*r:h==="ccw"&&l>0&&(l=(l-r*ou)%r-~~(l/r)*r)),e._pt=f=new Nt(e._pt,t,n,i,l,qv),f.e=u,f.u="deg",e._props.push(n),f},du=function(e,t){for(var n in t)e[n]=t[n];return e},ux=function(e,t,n){var i=du({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,c,l,u,h,f,p,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[tt]=t,a=cr(n,1),or(n,tt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[tt],r[tt]=t,a=cr(n,1),r[tt]=l);for(c in kn)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(p=Tt(l),_=Tt(u),h=p!==_?ri(n,c,l,_):parseFloat(l),f=parseFloat(u),e._pt=new Nt(e._pt,a,c,h,f-h,zo),e._pt.u=_||0,e._props.push(c));du(a,i)};zt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?o+a:"border"+a+o});sa[e>1?"border"+o:o]=function(a,c,l,u,h){var f,p;if(arguments.length<4)return f=r.map(function(_){return Un(a,_,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},r.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(c,p,h)}});var nf={name:"css",register:Fo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,a=e.style,c=n.vars.startAt,l,u,h,f,p,_,g,m,d,b,x,v,y,M,E,C;fl||Fo(),this.styles=this.styles||Zh(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Wt[g]&&Fh(g,t,n,i,e,s)))){if(p=typeof u,_=sa[g],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=rr(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ti.lastIndex=0,ti.test(l)||(m=Tt(l),d=Tt(u)),d?m!==d&&(l=ri(e,g,l,d)+d):m&&(u+=m),this.add(a,"setProperty",l,u,i,s,0,0,g),r.push(g),C.push(g,0,a[g]);else if(p!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],vt(l)&&~l.indexOf("random(")&&(l=rr(l)),Tt(l+"")||(l+=Xt.units[g]||Tt(Un(e,g))||""),(l+"").charAt(1)==="="&&(l=Un(e,g))):l=Un(e,g),f=parseFloat(l),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),g in bn&&(g==="autoAlpha"&&(f===1&&Un(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),Kn(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=bn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in kn,x){if(this.styles.save(g),v||(y=e._gsap,y.renderTransform&&!t.parseTransform||cr(e,t.parseTransform),M=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Nt(this._pt,a,tt,0,1,y.renderTransform,y,0,-1),v.dep=1),g==="scale")this._pt=new Nt(this._pt,y,"scaleY",y.scaleY,(b?ds(y.scaleY,b+h):h)-y.scaleY||0,zo),this._pt.u=0,r.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(mn,0,a[mn]),u=rx(u),y.svg?Bo(e,u,0,M,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==y.zOrigin&&Kn(this,y,"zOrigin",y.zOrigin,d),Kn(this,a,g,ra(l),ra(u)));continue}else if(g==="svgOrigin"){Bo(e,u,1,M,0,this);continue}else if(g in Qh){cx(this,y,g,f,b?ds(f,b+u):u);continue}else if(g==="smoothOrigin"){Kn(this,y,"smooth",y.smooth,u);continue}else if(g==="force3D"){y[g]=u;continue}else if(g==="transform"){ux(this,u,e);continue}}else g in a||(g=Es(g)||g);if(x||(h||h===0)&&(f||f===0)&&!jv.test(u)&&g in a)m=(l+"").substr((f+"").length),h||(h=0),d=Tt(u)||(g in Xt.units?Xt.units[g]:m),m!==d&&(f=ri(e,g,l,d)),this._pt=new Nt(this._pt,x?y:a,g,f,(b?ds(f,b+h):h)-f,!x&&(d==="px"||g==="zIndex")&&t.autoRound!==!1?Yv:zo),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=l,this._pt.r=Xv);else if(g in a)sx.call(this,e,g,l,b?b+u:u);else if(g in e)this.add(e,g,l||e[g],b?b+u:u,i,s);else if(g!=="parseTransform"){il(g,u);continue}x||(g in a?C.push(g,0,a[g]):C.push(g,1,l||e[g])),r.push(g)}}E&&Wh(this)},render:function(e,t){if(t.tween._time||!dl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Un,aliases:bn,getSetter:function(e,t,n){var i=bn[t];return i&&i.indexOf(",")<0&&(t=i),t in kn&&t!==mn&&(e._gsap.x||Un(e,"x"))?n&&au===n?t==="scale"?$v:Kv:(au=n||{})&&(t==="scale"?Qv:ex):e.style&&!el(e.style[t])?Zv:~t.indexOf("-")?Jv:ul(e,t)},core:{_removeProperty:or,_getMatrix:ml}};Ft.utils.checkPrefix=Es;Ft.core.getStyleSaver=Zh;(function(o,e,t,n){var i=zt(o+","+e+","+t,function(s){kn[s]=1});zt(e,function(s){Xt.units[s]="deg",Qh[s]=1}),bn[i[13]]=o+","+e,zt(n,function(s){var r=s.split(":");bn[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Xt.units[o]="px"});Ft.registerPlugin(nf);var ko=Ft.registerPlugin(nf)||Ft;ko.core.Tween;class hx extends $o{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new nh(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){const c=s.parse(JSON.parse(a));t&&t(c)},n,i)}parse(e){return new fx(e)}}class fx{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=dx(e,t,this.data);for(let s=0,r=i.length;s<r;s++)n.push(...i[s].toShapes());return n}}function dx(o,e,t){const n=Array.from(o),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,r=[];let a=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)a=0,c-=s;else{const h=px(u,i,a,c,t);a+=h.offsetX,r.push(h.path)}}return r}function px(o,e,t,n,i){const s=i.glyphs[o]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+o+'" does not exists in font family '+i.familyName+".");return}const r=new K0;let a,c,l,u,h,f,p,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=g.length;m<d;)switch(g[m++]){case"m":a=g[m++]*e+t,c=g[m++]*e+n,r.moveTo(a,c);break;case"l":a=g[m++]*e+t,c=g[m++]*e+n,r.lineTo(a,c);break;case"q":l=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,f=g[m++]*e+n,r.quadraticCurveTo(h,f,l,u);break;case"b":l=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,f=g[m++]*e+n,p=g[m++]*e+t,_=g[m++]*e+n,r.bezierCurveTo(h,f,p,_,l,u);break}}return{offsetX:s.ha*e,path:r}}class ns extends Jo{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}ht.prototype.rotateAroundWorldAxis=function(o,e,t){var n=new ii;const i=new L;i.copy(o).sub(e).normalize(),n.setFromAxisAngle(i,t),this.applyQuaternion(n),this.position.sub(o),this.position.applyQuaternion(n),this.position.add(o)};ht.prototype.rotateAroundWorldAxis2=function(o,e,t){const n=new L;n.copy(o).sub(e).normalize(),this.position.sub(o),this.rotateOnWorldAxis(n,t),this.position.add(o)};const is=(o,e,t)=>o*(1-t)+e*t;let Vr,Fs;const Nn=6;new L(50,50,50);let mx=new L(Nn*1,-Nn,-Nn),gx=new L(20,20,20),pu=new L(-Nn,-Nn,-Nn),mu=new L(-Nn,-Nn,-Nn),Xn;class _x{constructor(e){this.planes=[],this.editor=e,this.createPlanes(),this.dir=1,this.strings=e.strings,this.sizeText=.5}updateGridPlanes(){let e=this.editor.sizeProj*1,t=e+1,n=.1,i=2*t*t+n*n,s=this.sizeText,r=.3*s*Math.sqrt(i);const a=1.01;let c=new er(2*e+2,2*e+2);this.planes[0].geometry.dispose(),this.planes[0].geometry=c,this.planes[0].children[0].children[0].dispose(),this.planes[0].children[0].children[0]=new zs(2*e,2*e,8947848,10066329),this.planes[0].children[0].children[0].applyMatrix4(this.planes[0].children[0].matrixWorld),this.planes[0].position.set(-e-a,0,0),this.planes[0].children[0].children[0].position.set(-e-a,0,0),this.planes[0].children[1].position.set(-t+r*s*.5,t-r*s*1.5,n),this.planes[0].children[1].scale.set(r,r,r),this.planes[1].geometry.dispose(),this.planes[1].geometry=c,this.planes[1].children[0].children[0].dispose(),this.planes[1].children[0].children[0]=new zs(2*e,2*e,8947848,10066329),this.planes[1].children[0].children[0].applyMatrix4(this.planes[1].children[0].matrixWorld),this.planes[1].position.set(0,-e-a,0),this.planes[1].children[0].children[0].position.set(0,-e-a,0),this.planes[1].children[1].position.set(-t+r*s*1.5,-t+r*s*1,n),this.planes[1].children[1].scale.set(r,r,r),this.planes[2].geometry.dispose(),this.planes[2].geometry=c,this.planes[2].children[0].children[0].dispose(),this.planes[2].children[0].children[0]=new zs(2*e,2*e,8947848,10066329),this.planes[2].children[0].children[0].applyMatrix4(this.planes[2].children[0].matrixWorld),this.planes[2].position.set(0,0,-e-a),this.planes[2].children[0].children[0].position.set(0,0,-e-a),this.planes[2].children[1].position.set(-t+r*s*.5,t-r*s*1.5,n),this.planes[2].children[1].scale.set(r,r,r)}createPlanes(){let e=this.editor.sizeProj;const t=1.01;let n=new er(2*e+2,2*e+2),i=new Ws({visible:!0,transparent:!0,opacity:.1,color:16711680});const s=new yt(n,i);s.rotateY(Math.PI/2),s.translateZ(-e-t),s.userData.rot=new L(0,-1,0),s.userData.dir=new L(-1,0,0),this.planes.push(s),i=new Ws({visible:!0,transparent:!0,opacity:.1,color:65280});const r=new yt(n,i);r.translateY(-e-t),r.rotateX(-Math.PI/2),r.userData.rot=new L(1,0,0),r.userData.dir=new L(0,-1,0),this.planes.push(r),i=new Ws({visible:!0,transparent:!0,opacity:.1,color:255});const a=new yt(n,i);a.translateZ(-e-t),a.userData.rot=!1,a.userData.dir=new L(0,0,-1),this.planes.push(a),new hx().load("../assets/fonts/gentilis_regular.typeface.json",_=>{this.font=_;let g=new ns(this.strings.getKey("planeprojec/plan"),{font:_,size:this.sizeText,height:0});const m=[new Ko({color:"black",transparent:!0,opacity:.5})];let d=new yt(g,m),b=-e-1,x=e+1,v=.15*Math.sqrt(b*b+x*x+.1*.1);d.position.set(b+.75*v,-x+.5*v,.1),d.scale.set(v,v,v),d.rotateZ(Math.PI/2),r.add(d),r.indexText=r.children.length-1,g=new ns(this.strings.getKey("planeprojec/elevation"),{font:_,size:this.sizeText,height:0}),d=new yt(g,m),b=-e-1,x=e+1,v=.15*Math.sqrt(b*b+x*x+.1*.1),d.position.set(b+.25*v,x-.75*v,.1),d.scale.set(v,v,v),s.add(d),s.indexText=s.children.length-1,g=new ns(this.strings.getKey("planeprojec/profile"),{font:_,size:this.sizeText,height:0}),d=new yt(g,m),b=-e-1,x=e+1,v=.15*Math.sqrt(b*b+x*x+.1*.1),d.position.set(b+.25*v,x-.75*v,.1),d.scale.set(v,v,v),a.add(d),a.indexText=a.children.length-1});let l=new Si,u=new zs(2*e,2*e,10066329,12303291);l.add(u);let h=new zs(e+4,2,2228224);h.layers.enableAll(),h.material.color.setHex(7829367),h.material.depthFunc=Au,h.material.vertexColors=!1,l.rotateX(Math.PI/2),s.add(l);let f=l.clone();a.add(f);let p=l.clone();r.add(p),this.planeY=r,this.planeZ=a,r.userData.angleTot=0,a.userData.angleTot=0}vistas(e,t,n,i,s=1){this.editor=e;let r=Math.PI/2/60,a=ko.timeline({repeat:-1,repeatDelay:1e-4,onRepeat:()=>{this.planeY.userData.angleTot+Math.PI/2/60>Math.PI/2&&(r=Math.PI/2-this.planeY.userData.angleTot),this.planeY.rotateAroundWorldAxis(this.points[0],this.points[1],s*r),this.planeZ.rotateAroundWorldAxis(this.points[2],this.points[3],s*r),this.planeY.userData.angleTot+=r,this.planeY.userData.angleTot>=Math.PI/2&&(a.pause(0),this.planeY.userData.angleTot=0,this.planeZ.userData.angleTot=0)}}),c={t:0},l;ko.to(c,{duration:1,t:1,onStart:()=>{l=this.editor.controls.orbit.target.clone()},onUpdate:()=>{this.editor.camera.position.x=is(Vr.x,Fs.x,c.t),this.editor.camera.position.y=is(Vr.y,Fs.y,c.t),this.editor.camera.position.z=is(Vr.z,Fs.z,c.t),this.editor.camera.lookAt(is(l.x,Xn.x,c.t),is(l.y,Xn.y,c.t),is(l.z,Xn.z,c.t))},onComplete:()=>{this.editor.camera.updateProjectionMatrix(),this.editor.controls.orbit.target.set(Xn.x,Xn.y,Xn.z),this.editor.controls.orbit.update(),c.t=0}})}desplegar(e){Vr=e.camera.position.clone(),this.dir==1?(Fs=mx.clone(),Xn=pu.clone(),pu.clone()):(Fs=gx.clone(),Xn=mu.clone(),mu.clone()),this.points=[];const t=6;this.points.push(new L(-t,-t,-t)),this.points.push(new L(-t,-t,t)),this.points.push(new L(-t,t,-t)),this.points.push(new L(-t,-t,-t)),this.vistas(e,this.planes[1],this.planes[2],this.points,this.dir),this.dir*=-1}updateText(e){this.planes[1].children[this.planes[1].indexText].geometry=new ns(e.strings.getKey("planeprojec/plan"),{font:this.font,size:this.sizeText,height:0}),this.planes[0].children[this.planes[0].indexText].geometry=new ns(e.strings.getKey("planeprojec/elevation"),{font:this.font,size:this.sizeText,height:0}),this.planes[2].children[this.planes[2].indexText].geometry=new ns(e.strings.getKey("planeprojec/profile"),{font:this.font,size:this.sizeText,height:0})}}class Vn{constructor(e){this.dom=e}add(){for(let e=0;e<arguments.length;e++){const t=arguments[e];t instanceof Vn?this.dom.appendChild(t.dom):console.error("UIElement:",t,"is not an instance of UIElement.")}return this}remove(){for(let e=0;e<arguments.length;e++){const t=arguments[e];t instanceof Vn?this.dom.removeChild(t.dom):console.error("UIElement:",t,"is not an instance of UIElement.")}return this}clear(){for(;this.dom.children.length;)this.dom.removeChild(this.dom.lastChild)}setId(e){return this.dom.id=e,this}getId(){return this.dom.id}setClass(e){return this.dom.className=e,this}addClass(e){return this.dom.classList.add(e),this}removeClass(e){return this.dom.classList.remove(e),this}setStyle(e,t){for(let n=0;n<t.length;n++)this.dom.style[e]=t[n];return this}setDisabled(e){return this.dom.disabled=e,this}setTextContent(e){return this.dom.textContent=e,this}setInnerHTML(e){this.dom.innerHTML=e}getIndexOfChild(e){return Array.prototype.indexOf.call(this.dom.children,e.dom)}}const vx=["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","verticalAlign","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"];vx.forEach(function(o){const e="set"+o.substring(0,1).toUpperCase()+o.substring(1,o.length);Vn.prototype[e]=function(){return this.setStyle(o,arguments),this}});const xx=["KeyUp","KeyDown","MouseOver","MouseOut","Click","DblClick","Change","Input"];xx.forEach(function(o){const e="on"+o;Vn.prototype[e]=function(t){return this.dom.addEventListener(o.toLowerCase(),t.bind(this),!1),this}});class gl extends Vn{constructor(){super(document.createElement("div"))}}class Yn extends gl{constructor(){super(),this.dom.className="Panel"}}class sf extends Vn{constructor(e){super(document.createElement("button")),this.dom.className="Button",this.dom.textContent=e}}const yx=({id:o})=>{const e=new Yn;return e.setId(o),document.body.appendChild(e.dom),{add:t=>{e.dom.appendChild(t.dom)}}};function lo({id:o}){let e=new Yn;return e.setId(o),e}function Bs({id:o,cl:e=[],container:t,imgSrc:n,dataTitle:i,selected:s=!0,onClick:r,args:a={}}){const c=document.createElement("img");c.src=`${n}`;const l=new sf;return l.setId(o),l.dom.setAttribute("data-title",i),e.forEach(u=>l.dom.classList.add(u)),l.dom.appendChild(c),l.onClick(()=>{if(r(a),!!s){for(let u=0;u<t.dom.children.length;u++)t.dom.children[u].classList.remove("selected");l.dom.classList.add("selected")}}),t.add(l),l}const Sx=()=>{const o=new Yn;o.setId("TeideLogo"),document.body.appendChild(o.dom);const e=document.createElement("img");e.src="../assets/icons/Teide200x200.png";const t=new sf;return t.dom.setAttribute("data-title","Editorial Teide"),t.dom.appendChild(e),o.add(t),{container:o}};class bx extends Vn{constructor(e,t){super(document.createElement("a")),this.dom.href=t,this.dom.innerHTML=e}}class Mx extends Vn{constructor(e,t){super(document.createElement("a")),this.dom.href=t,this.dom.classList.add("logoTeiDSpace");const n=document.createElement("img");n.src=e,this.dom.appendChild(n);let i=new gl;i.dom.innerHTML="TeiDSpace",i.dom.classList.add("logoText"),this.add(i)}}const wx=o=>{const e=new Yn;e.setId("menubar"),document.body.appendChild(e.dom);const t=new Yn;t.setClass("menu logo");const n=new Mx("../assets/icons/logo_TEIDSPACE.png","../TeiDSpace/index.html");t.add(n),e.add(t);for(let i=1;i<o.menu.length;i++){const s=o.menu[i];if(s.permission>o.levelPermission)continue;const r=new Yn;r.setClass("menu");const a=new Yn;for(let l=0;l<s.classes.length;l++)a.setClass(s.classes[l]);a.setTextContent(o.strings.getKey(s.title)),r.add(a);const c=new Yn;c.setClass("options"),r.add(c);for(let l=0;l<s.subMenu.length;l++){const u=s.subMenu[l];if(u.permission>o.levelPermission)continue;const h=new gl;for(let p=0;p<u.classes.length;p++)h.setClass(u.classes[p]);const f=new bx(o.strings.getKey(u.title),u.link);h.add(f),c.add(h)}e.add(r)}},gu={type:"change"},co={type:"start"},_u={type:"end"};class Tx extends Ui{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Ie),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(gu),n.update(),s=i.NONE},this.update=function(){const D=new L,$=new ii().setFromUnitVectors(e.up,new L(0,1,0)),V=$.clone().invert(),de=new L,ve=new ii,be=2*Math.PI;return function(){const Se=n.object.position;D.copy(Se).sub(n.target),D.applyQuaternion($),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&S(E()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let De=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(De)&&isFinite(ze)&&(De<-Math.PI?De+=be:De>Math.PI&&(De-=be),ze<-Math.PI?ze+=be:ze>Math.PI&&(ze-=be),De<=ze?a.theta=Math.max(De,Math.min(ze,a.theta)):a.theta=a.theta>(De+ze)/2?Math.max(De,a.theta):Math.min(ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(a),D.applyQuaternion(V),Se.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||de.distanceToSquared(n.object.position)>r||8*(1-ve.dot(n.object.quaternion))>r?(n.dispatchEvent(gu),de.copy(n.object.position),ve.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",ee),n.domElement.removeEventListener("pointercancel",ue),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",ue),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new Jc,c=new Jc;let l=1;const u=new L;let h=!1;const f=new ce,p=new ce,_=new ce,g=new ce,m=new ce,d=new ce,b=new ce,x=new ce,v=new ce,y=[],M={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function S(D){c.theta-=D}function T(D){c.phi-=D}const z=function(){const D=new L;return function(V,de){D.setFromMatrixColumn(de,0),D.multiplyScalar(-V),u.add(D)}}(),k=function(){const D=new L;return function(V,de){n.screenSpacePanning===!0?D.setFromMatrixColumn(de,1):(D.setFromMatrixColumn(de,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(V),u.add(D)}}(),R=function(){const D=new L;return function(V,de){const ve=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;D.copy(be).sub(n.target);let me=D.length();me*=Math.tan(n.object.fov/2*Math.PI/180),z(2*V*me/ve.clientHeight,n.object.matrix),k(2*de*me/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(V*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),k(de*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(D){n.object.isPerspectiveCamera?l/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(D){n.object.isPerspectiveCamera?l*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(D){f.set(D.clientX,D.clientY)}function Z(D){b.set(D.clientX,D.clientY)}function W(D){g.set(D.clientX,D.clientY)}function ne(D){p.set(D.clientX,D.clientY),_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;S(2*Math.PI*_.x/$.clientHeight),T(2*Math.PI*_.y/$.clientHeight),f.copy(p),n.update()}function Q(D){x.set(D.clientX,D.clientY),v.subVectors(x,b),v.y>0?U(C()):v.y<0&&N(C()),b.copy(x),n.update()}function xe(D){m.set(D.clientX,D.clientY),d.subVectors(m,g).multiplyScalar(n.panSpeed),R(d.x,d.y),g.copy(m),n.update()}function se(D){D.deltaY<0?N(C()):D.deltaY>0&&U(C()),n.update()}function H(D){let $=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),$=!0;break}$&&(D.preventDefault(),n.update())}function J(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const D=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);f.set(D,$)}}function le(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{const D=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);g.set(D,$)}}function pe(){const D=y[0].pageX-y[1].pageX,$=y[0].pageY-y[1].pageY,V=Math.sqrt(D*D+$*$);b.set(0,V)}function B(){n.enableZoom&&pe(),n.enablePan&&le()}function Pe(){n.enableZoom&&pe(),n.enableRotate&&J()}function Ce(D){if(y.length==1)p.set(D.pageX,D.pageY);else{const V=fe(D),de=.5*(D.pageX+V.x),ve=.5*(D.pageY+V.y);p.set(de,ve)}_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;S(2*Math.PI*_.x/$.clientHeight),T(2*Math.PI*_.y/$.clientHeight),f.copy(p)}function oe(D){if(y.length===1)m.set(D.pageX,D.pageY);else{const $=fe(D),V=.5*(D.pageX+$.x),de=.5*(D.pageY+$.y);m.set(V,de)}d.subVectors(m,g).multiplyScalar(n.panSpeed),R(d.x,d.y),g.copy(m)}function ye(D){const $=fe(D),V=D.pageX-$.x,de=D.pageY-$.y,ve=Math.sqrt(V*V+de*de);x.set(0,ve),v.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),U(v.y),b.copy(x)}function te(D){n.enableZoom&&ye(D),n.enablePan&&oe(D)}function Y(D){n.enableZoom&&ye(D),n.enableRotate&&Ce(D)}function ee(D){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",_e),n.domElement.addEventListener("pointerup",ue)),G(D),D.pointerType==="touch"?He(D):Ee(D))}function _e(D){n.enabled!==!1&&(D.pointerType==="touch"?P(D):Ae(D))}function ue(D){ie(D),y.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",ue)),n.dispatchEvent(_u),s=i.NONE}function Ee(D){let $;switch(D.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ni.DOLLY:if(n.enableZoom===!1)return;Z(D),s=i.DOLLY;break;case Ni.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;W(D),s=i.PAN}else{if(n.enableRotate===!1)return;X(D),s=i.ROTATE}break;case Ni.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;X(D),s=i.ROTATE}else{if(n.enablePan===!1)return;W(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(co)}function Ae(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ne(D);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(D);break;case i.PAN:if(n.enablePan===!1)return;xe(D);break}}function Me(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(co),se(D),n.dispatchEvent(_u))}function Ie(D){n.enabled===!1||n.enablePan===!1||H(D)}function He(D){switch(re(D),y.length){case 1:switch(n.touches.ONE){case Fi.ROTATE:if(n.enableRotate===!1)return;J(),s=i.TOUCH_ROTATE;break;case Fi.PAN:if(n.enablePan===!1)return;le(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Fi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),s=i.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(co)}function P(D){switch(re(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;oe(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(D),n.update();break;default:s=i.NONE}}function w(D){n.enabled!==!1&&D.preventDefault()}function G(D){y.push(D)}function ie(D){delete M[D.pointerId];for(let $=0;$<y.length;$++)if(y[$].pointerId==D.pointerId){y.splice($,1);return}}function re(D){let $=M[D.pointerId];$===void 0&&($=new ce,M[D.pointerId]=$),$.set(D.pageX,D.pageY)}function fe(D){const $=D.pointerId===y[0].pointerId?y[1]:y[0];return M[$.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",ee),n.domElement.addEventListener("pointercancel",ue),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}}const Ex=o=>{const e="TeiDSpace",t={language:"es",permission:100};if(window.localStorage[e]===void 0)window.localStorage[e]=JSON.stringify(t);else{const n=JSON.parse(window.localStorage[e]);for(const i in n)t[i]=n[i]}return{getKey:function(n){return t[n]},setKey:function(){for(let n=0,i=arguments.length;n<i;n+=2)t[arguments[n]]=arguments[n+1];window.localStorage[e]=JSON.stringify(t)},clear:function(){delete window.localStorage[e]}}},Ax=o=>{const e={en:{"menubar/views":"Views","menubar/isometric":"Perspective","menubar/pieces":"Pieces","menubar/generator":"Generator","menubar/help":"Help","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"About us...","menubar/soma":"Soma Cube","menubar/somaproject":"Soma Project","menubar/somadevelopment":"Soma Development","menubar/somabuilding":"Soma Building","menubar/somaexercises":"Soma exercices","menubar/objects":"Object","menubar/create":"Create Object","menubar/examples":"Examples","menubar/exercices":"Exercices","menubar/correction":"Correction","menubar/soma6viewsexamples":"Examples 6 views","menubar/soma6viewsexercises":"Exercises 6 views","toolbar/translate":"Translate","toolbar/rotate":"Rotate","toolbar/scale":"Scale","modelbar/cube":"Cube","modelbar/cube1":"Cube 1","modelbar/cube2":"Cube 2","modelbar/cube3":"Cube 3","modelbar/icosahedron":"Icosahedron","select/vertices":"Vertices","select/edges":"Edges","select/objects":"Objects","CSG/selected":"Selecteds: ","CSG/addition":"Addition A \u222A B","CSG/subtraction":"Subtraction A - B","CSG/reversesubtraction":"Reverse Subtraction B - A","CSG/difference":"Difference A \u2295 B","CSG/intersection":"Intersection","file/save":"save","file/load":"load","planeprojec/plan":"Plan","planeprojec/elevation":"Elevation","planeprojec/profile":"Profile","line/visible":"Visible Line","line/hidden":"Hidden Line","line/delete":"Delete Line","line/change":"Change","line/create":"Create","line/red":"Red line","line/black":"Black line","views/open":"Open Views","views/close":"Close Views",solutions:"Solution",opacity:"Opacity","object/base":"Object base","object/auxiliar":"Auxiliar Object","clipboard/copy":"Copy","clipboard/paste":"Paste","soma/cube":"Soma cube","soma/piece":"Piece","number/exercise":"Exercise","number/example":"Example","configBar/size":"Size","configBar/edges":"Edges","configBar/color":"Color","configBar/shadow":"Shadow","configBar/visible":"Visible","configBar/development":"Development"},es:{"menubar/views":"Vistas","menubar/isometric":"Perspectiva","menubar/pieces":"Piezas","menubar/generator":"Generador","menubar/help":"Ayuda","menubar/helptutorials":"Tutoriales","menubar/helpaboutus":"Acerca de...","menubar/soma":"Cubo Soma","menubar/somaproject":"Proyecto Soma","menubar/somadevelopment":"Desarrollo Soma ","menubar/somabuilding":"Construcci\xF3n Soma","menubar/somaexercises":"Soma ejercicios","menubar/soma6viewsexamples":"Ejemplos 6 vistas","menubar/soma6viewsexercises":"Ejercicios 6 vistas","menubar/objects":"Objeto","menubar/create":"Crear Objetos","menubar/examples":"Ejemplos","menubar/exercices":"Ejercicios","menubar/correction":"Correcci\xF3n","toolbar/translate":"Trasladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cubo","modelbar/cube1":"Cubo 1","modelbar/cube2":"Cubo 2","modelbar/cube3":"Cubo 3","modelbar/icosahedron":"Icosaedro","select/vertices":"V\xE9rtices","select/edges":"Aristas","select/objects":"Objetos","CSG/selected":"Seleccionados: ","CSG/addition":"Adici\xF3n A \u222A B","CSG/subtraction":"Sustracci\xF3n A - B","CSG/reversesubtraction":"Sustracci\xF3n inversa B - A","CSG/difference":"Diferencia A \u2295 B","CSG/intersection":"Intersecci\xF3n","file/save":"Guardar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Alzado","planeprojec/profile":"Perfil","line/visible":"L\xEDnea Visible","line/hidden":"L\xEDnea Oculta","line/delete":"Borrar L\xEDnea","line/change":"Cambiar","line/create":"Crear","line/red":"L\xEDnea roja","line/black":"L\xEDnea negra","views/open":"Abir Vistas","views/close":"Cerrar Vistas",solutions:"Soluci\xF3n",opacity:"Opacidad","object/base":"Objeto base","object/auxiliar":"Objeto auxiliar","clipboard/copy":"Copiar","clipboard/paste":"Pegar","soma/cube":"Cubo Soma","soma/piece":"Pieza","number/exercise":"Ejercicio","number/example":"Ejemplo","configBar/size":"Tama\xF1o","configBar/edges":"Aristas","configBar/color":"Color","configBar/shadow":"Sombra","configBar/visible":"Visible","configBar/development":"Desarrollo"},ca:{"menubar/views":"Vistes","menubar/isometric":"Perspectiva","menubar/pieces":"Peces","menubar/generator":"Generador","menubar/help":"Ajuda","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"Sobre...","menubar/soma":"Cub Soma","menubar/somaproject":"Projecte Soma","menubar/somadevelopment":"Desenvolupament Soma ","menubar/somabuilding":"Construcci\xF3 Soma","menubar/somaexercises":"Soma exercicis","menubar/objects":"Objecte","menubar/create":"Crear Objectes","menubar/examples":"Exemples","menubar/exercices":"Exercicis","menubar/correction":"Correcci\xF3","menubar/soma6viewsexamples":"Exemples 6 vistes","menubar/soma6viewsexercises":"Exercicis 6 vistes","toolbar/translate":"Traslladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cub","modelbar/cube1":"Cub 1","modelbar/cube2":"Cub 2","modelbar/cube3":"Cub 3","modelbar/icosahedron":"Icosaedre","select/vertices":"V\xE8rtexs","select/edges":"Arestes","select/objects":"Objectes","CSG/selected":"Seleccionats: ","CSG/addition":"Adici\xF3 A \u222A B","CSG/subtraction":"Sustracci\xF3 A - B","CSG/reversesubtraction":"Sustracci\xF3 inversa B - A","CSG/difference":"Difer\xE8ncia A \u2295 B","CSG/intersection":"Intersecci\xF3","file/save":"Desar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Al\xE7at","planeprojec/profile":"Perfil","line/visible":"L\xEDnia Visible","line/hidden":"L\xEDnia Oculta","line/delete":"Esborrar L\xEDnia","line/change":"Canviar","line/create":"Crear","line/red":"L\xEDnia vermella","line/black":"L\xEDnia negra","views/open":"Obir Vistes","views/close":"Tancar Vistes",solutions:"Soluci\xF3",opacity:"Opacitat","object/base":"Objecte base","object/auxiliar":"Objecte auxiliar","clipboard/copy":"Copia","clipboard/paste":"Enganxa","soma/cube":"Cub Soma","soma/piece":"Pe\xE7a","number/exercise":"Exercici","number/example":"Exemple","configBar/size":"Tamany","configBar/edges":"Arestes","configBar/color":"Color","configBar/shadow":"Ombra","configBar/visible":"Visible","configBar/development":"Desenvolupament"}};return{getKey:function(t){return e[o.getKey("language")][t]||"???"}}},Cx=()=>{const t=1.2833333333333334,n=t*1.5;return{sizeProj:6,configVistas:[{axis:"x",dir:1,color:"red",name:"alzado",rotate:!1,far:300,dim:{left:-t*6,right:t*6,top:t*6,bottom:-t*6},pos:{x:-6,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",rotate:!1,far:300,dim:{left:-t*6,right:t*6,top:t*6,bottom:-t*6},pos:{x:0,y:0,z:-6},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",rotate:!1,far:300,dim:{left:-t*6,right:t*6,top:t*6,bottom:-t*6},pos:{x:0,y:-6,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",rotate:!0,far:300,dim:{left:-n*6,right:n*6,top:n*6,bottom:-n*6},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]}};class Px{constructor(e,t=window){xt(this,"intersect",(e,t,n)=>(this.mouse.x=e.offsetX/e.target.clientWidth*2-1,this.mouse.y=-(e.offsetY/e.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,t),this.raycaster.intersectObjects(n,!1)));xt(this,"initListeners",()=>{window.addEventListener("keydown",e=>{switch(e.key.toUpperCase()){case"J":this.toJSON();break;case"R":this.JSONtoVar();break;case"S":saveObjects();break;case"L":let t=document.createElement("input");t.type="file",t.onchange=n=>{const i=t.files[0].name;this.read("./exercises/",i)},t.click();break;case"M":this.read();break}})});xt(this,"initConfigVistas",()=>{const e=this.sizeProj*1,t=1.2,n=t*1.5;this.configVistas=[{axis:"x",dir:1,color:"red",name:"alzado",dim:{left:-t*e,right:t*e,top:t*e,bottom:-t*e},pos:{x:-e,y:0,z:0},up:{x:0,y:1,z:0},look:{x:-10,y:0,z:0},rotZ:-Math.PI/2,cam:"Orthographic"},{axis:"x",dir:-1,color:"orange",name:"perfil",dim:{left:-t*e,right:t*e,top:t*e,bottom:-t*e},pos:{x:0,y:0,z:-e},up:{x:0,y:1,z:0},look:{x:0,y:0,z:-10},rotZ:Math.PI/2,cam:"Orthographic"},{axis:"y",dir:1,color:"yellow",name:"planta",dim:{left:-t*e,right:t*e,top:t*e,bottom:-t*e},pos:{x:0,y:-e,z:0},up:{x:-1,y:0,z:0},look:{x:0,y:-10,z:0},rotZ:0,cam:"Orthographic"},{axis:"y",dir:-1,color:"white",name:"3D",dim:{left:-n*e,right:n*e,top:n*e,bottom:-n*e},pos:{x:20,y:20,z:20},up:{x:0,y:1,z:0},look:{x:0,y:0,z:0},rotZ:Math.PI,cam:"Orthographic"}]});xt(this,"initScene",()=>{this.scene=new c0;const e=13421772;this.scene.background=new Ve(e)});xt(this,"initRenderer",()=>{this.allCanvas=[],this.allRenderer=[];for(let e=0;e<this.configVistas.length;e++){const t=new Yu({antialias:!0,alpha:!0});t.setPixelRatio(window.devicePixelRatio);let n;this.configVistas[e].name===null?(document.body.appendChild(t.domElement),n=t.domElement):(n=document.getElementById(this.configVistas[e].name),n.appendChild(t.domElement)),this.allCanvas.push(n),n.addEventListener("dblclick",i=>{const s=this.intersect(i,this.allCameras[e],this.linesSegments,!1);s.length>0&&(this.LineDashed=s[s.length-1].object.material.gapSize,this.Line.setLineReset(),this.Line.setLineSelected(s[s.length-1].object,e,this.LineDashed),this.Line.points=[this.Line.segment.point1,this.Line.segment.point2],this.LineDashed==0?(this.visibleLine.classList.add("selected"),this.hiddenLine.classList.remove("selected")):(this.visibleLine.classList.remove("selected"),this.hiddenLine.classList.add("selected")))}),t.setSize(n.clientWidth,n.clientHeight),this.allRenderer.push(t),window.addEventListener("resize",()=>{for(let i=0;i<this.allRenderer.length;i++)this.allRenderer[i].setSize(this.allCanvas[i].clientWidth,this.allCanvas[i].clientHeight)})}});xt(this,"initCamera",()=>{this.allCameras=[];for(let e=0;e<this.configVistas.length;e++){const t=this.allCanvas[e].clientWidth/(this.allCanvas[e].clientHeight-16),n=t>=1?t:1,i=t>=1?1:1/t,s=new jo(n*this.configVistas[e].dim.left,n*this.configVistas[e].dim.right,i*this.configVistas[e].dim.top,i*this.configVistas[e].dim.bottom,.1,this.configVistas[e].far);s.position.set(this.configVistas[e].pos.x,this.configVistas[e].pos.y,this.configVistas[e].pos.z),s.lookAt(new L(this.configVistas[e].look.x,this.configVistas[e].look.y,this.configVistas[e].look.z)),s.up.set(this.configVistas[e].up.x,this.configVistas[e].up.y,this.configVistas[e].up.z),s.aspect=t,this.allCameras.push(s)}window.addEventListener("resize",this.updateCamera)});xt(this,"updateCamera",()=>{for(let e=0;e<this.allCameras.length;e++){const t=this.allCanvas[e].clientWidth/(this.allCanvas[e].clientHeight-16),n=t>=1?t:1,i=t>=1?1:1/t,s=this.allCameras[e];s.left=n*this.configVistas[e].dim.left,s.right=n*this.configVistas[e].dim.right,s.top=i*this.configVistas[e].dim.top,s.bottom=i*this.configVistas[e].dim.bottom,s.position.set(this.configVistas[e].pos.x,this.configVistas[e].pos.y,this.configVistas[e].pos.z),s.aspect=t,s.updateProjectionMatrix(),this.controls.orbits[e].update()}});xt(this,"initLights",()=>{let e=new Z0(12303291);this.scene.add(e);let t=new Y0(16777215,.6);t.position.set(15,10,6),t.castShadow=!0,t.shadow.mapSize=new ce(1024*2,1024*2),t.shadow.camera.top=34,t.shadow.camera.bottom=-34,t.shadow.camera.left=-34,t.shadow.camera.right=34,t.shadow.camera.near=-20,t.shadow.camera.far=80,t.shadow.bias=-.002,t.shadow.radius=3,t.shadow.blurSamples=25,this.scene.add(t)});xt(this,"initControls",()=>{for(let e=0;e<this.configVistas.length;e++){const t=new Tx(this.allCameras[e],this.allCanvas[e]);t.enablePan=!1,t.enableRotate=this.configVistas[e].rotate,t.target.set(this.configVistas[e].look.x,this.configVistas[e].look.y,this.configVistas[e].look.z),t.update(),this.controls.orbits.push(t)}});xt(this,"initConfig",()=>{const e=new URLSearchParams(window.location.search),t=e.get("lang");this.levelPermission=e.get("perm"),this.config=Ex(),t!==null&&this.config.setKey("language",t),this.levelPermission!==null?this.config.setKey("permission",this.levelPermission):this.levelPermission=this.config.getKey("permission"),this.strings=Ax(this.config)});this.BLACK={r:0,g:0,b:0},this.YELLOW={r:255,g:255,b:0},this.RED={r:255,g:0,b:0},this.BLUE={r:0,g:0,b:255},this.configVistas=e.configVistas,this.sizeProj=e.sizeProj,this.raycaster=new J0,this.raycaster.params.Points.threshold=.25,this.raycaster.params.Line.threshold=.25,this.controls={orbits:[]},this.mouse=new ce,this.initScene(),this.initRenderer(),this.initCamera(),this.initLights(),this.initControls(),this.initConfig()}}const Gx=new Oi,Hx=new L;he.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ce(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};fn.line={uniforms:ku.merge([he.common,he.fog,he.line]),vertexShader:`
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
		`};const Wx=new L,jx=new L,qx=new it,Xx=new it,Yx=new it,Zx=new L,Jx=new nt,Kx=new Xr,$x=new L,Qx=new Oi,ey=new Cs,ty=new it;class Lx extends On{constructor(e=[0,0,0,0,0,0],t=0,n=0,i=1){let s=new Ke().setAttribute("position",new Et(new Float32Array([e[0],e[1],e[2],e[3],e[4],e[5]]),3));super(s,new Xs({color:t,dashSize:.15,gapSize:n})),this.computeLineDistances();let r=new Sn({color:t,size:i}),a=new Ke;a.setAttribute("position",new Et(new Float32Array([e[0],e[1],e[2]]),3)),this.point1=new Qn(a,r),r=new Sn({color:t,size:i}),a=new Ke,a.setAttribute("position",new Et(new Float32Array([e[3],e[4],e[5]]),3)),this.point2=new Qn(a,r),this.points=[this.point1,this.point2]}updatePosition(e,t=0,n=!1,i){t*=3;const s=this.geometry.attributes.position.array;if(!n&&s[t+0]==Math.round(e.x)&&s[t+1]==Math.round(e.y)&&s[t+2]==Math.round(e.z))return;const r=t!=0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,a=t!=0?this.point1:this.point2,c=t==0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,l=t==0?this.point1:this.point2;s[t+0]=c[0]=Math.round(e.x),s[t+1]=c[1]=Math.round(e.y),s[t+2]=c[2]=Math.round(e.z),l.visible=!0,l.geometry.computeBoundingSphere(),l.geometry.attributes.position.needsUpdate=!0,n&&(t=t==0?3:0,s[t+0]=r[0]=c[0],s[t+1]=r[1]=c[1],s[t+2]=r[2]=c[2],this.visible=!0,a.visible=!0,a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0),this.computeLineDistances(),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0}updateColor({r:e,g:t,b:n}){this.material.color.r=this.points[0].material.color.r=this.points[1].material.color.r=e,this.material.color.g=this.points[0].material.color.g=this.points[1].material.color.g=t,this.material.color.b=this.points[0].material.color.b=this.points[1].material.color.b=n}}const Dx=o=>({selectedSegment:!1,segment:null,selectedPoint:!1,points:null,npoint:0,handler:{down:[],move:[],up:[]},setLineSelected:function(e,t,n=0){this.selectedPoint=!1,this.selectedSegment=!0,this.segment=e,this.originalColorSegment={r:e.material.color.r,g:e.material.color.g,b:e.material.color.b},this.segment.material.gapSize=n,this.segment.updateColor(o.BLUE),this.segment.points[0].material.size=8,this.segment.points[1].material.size=8},setLineReset:function(){this.selectedPoint=!1,this.selectedSegment=!1,this.segment.updateColor(this.segment.userData.color),this.segment.points[0].material.size=1,this.segment.points[1].material.size=1},setPointsColor:function({color1:e,color2:t}){let n=this.npoint;n==null&&(n=0),this.setPointColor({color:e,n}),n=(n+1)%2,this.setPointColor({color:t,n})},setPointColor:function({color:e,n:t}){this.points[t].material.color.r=e.r,this.points[t].material.color.g=e.g,this.points[t].material.color.b=e.b},setSegmentColor:function({color:e}){this.segment.material.color.r=e.r,this.segment.material.color.g=e.g,this.segment.material.color.b=e.b},createHandler:function(){for(let e=0;e<o.allCanvas.length;e++){const t=o.allCanvas[e];this.handler.down.push(this.pointerdown.bind(null,this,e)),t.addEventListener("pointerdown",this.handler.down[e]),this.handler.move.push(this.pointermove.bind(null,this,e)),t.addEventListener("pointermove",this.handler.move[e]),this.handler.up.push(this.pointerup.bind(null,this)),t.addEventListener("pointerup",this.handler.up[e])}},pointerClamp(e,t,n){t==n[0][0]&&(e.y=Math.max(-o.sizeProj,Math.min(o.sizeProj,e.y)),e.z=Math.max(-o.sizeProj,Math.min(o.sizeProj,e.z))),t==n[1][0]&&(e.x=Math.max(-o.sizeProj,Math.min(o.sizeProj,e.x)),e.y=Math.max(-o.sizeProj,Math.min(o.sizeProj,e.y))),t==n[2][0]&&(e.x=Math.max(-o.sizeProj,Math.min(o.sizeProj,e.x)),e.z=Math.max(-o.sizeProj,Math.min(o.sizeProj,e.z)))},pointerdown:function(e,t,n){if(e.selectedSegment&&!e.selectedPoint){const i=o.intersect(n,o.allCameras[t],e.points);i.length>0?e.npoint=i[0].object.uuid==e.points[0].uuid?0:1:e.setLineReset(),e.selectedPoint=i.length>0}if(!e.selectedPoint){const i=o.intersect(n,o.allCameras[t],o.canvasPlanes[t]);if(i.length>0){const s=i[0].point.round();e.pointerClamp(s,i[0].object,o.canvasPlanes);const r=new Lx([s.x,s.y,s.z,s.x,s.y,s.z],16777215,o.LineDashed);r.userData.indexPlane=t,r.userData.color=o.BLACK,o.scene.add(r,r.point1,r.point2),o.linesSegments.push(r),e.points=[r.point1,r.point2],e.npoint=0,e.setLineSelected(r,t,o.LineDashed)}e.selectedPoint=i.length>0}e.selectedPoint&&e.setPointsColor({color1:o.RED,color2:o.BLUE})},pointermove:function(e,t,n){if(!!e.selectedSegment)if(e.selectedPoint){const i=o.intersect(n,o.allCameras[t],o.canvasPlanes[t]);if(i.length>0){const s=i[0].point.round();e.pointerClamp(s,i[0].object,o.canvasPlanes),e.segment.updatePosition(i[0].point,e.npoint,!1,t,o.sizeProj)}}else{const i=o.intersect(n,o.allCameras[t],e.points);if(i.length>0){const s=i[0].object.uuid==e.points[0].uuid?0:1;e.setPointColor({color:o.RED,n:s})}else e.setPointsColor({color1:o.BLUE,color2:o.BLUE})}},pointerup:function(e){if(e.segment==null)return;e.selectedPoint=!1,e.setPointColor({color:o.BLUE,n:e.npoint});const t=e.segment.geometry.attributes.position.array;if(!(Math.abs(t[0]-t[3+0])+Math.abs(t[1]-t[3+1])+Math.abs(t[2]-t[3+2])>0)){for(let n=0;n<o.linesSegments.length;n++)if(e.segment.uuid==o.linesSegments[n].uuid){e.setLineReset(),o.scene.remove(e.segment.point1),o.scene.remove(e.segment.point2),o.scene.remove(e.segment),o.linesSegments.splice(n,1);return}}}}),Rx=/^[og]\s*(.+)?/,Ix=/^mtllib /,Ux=/^usemtl /,Ox=/^usemap /,vu=/\s+/,xu=new L,uo=new L,yu=new L,Su=new L,Kt=new L,Gr=new Ve;function zx(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;xu.fromArray(i,e),uo.fromArray(i,t),yu.fromArray(i,n),Kt.subVectors(yu,uo),Su.subVectors(xu,uo),Kt.cross(Su),Kt.normalize(),s.push(Kt.x,Kt.y,Kt.z),s.push(Kt.x,Kt.y,Kt.z),s.push(Kt.x,Kt.y,Kt.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,r,a,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),f=this.parseNormalIndex(c,_),p=this.parseNormalIndex(l,_),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),f=this.parseUVIndex(s,_),p=this.parseUVIndex(r,_),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,r=e.length;s<r;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,r=t.length;s<r;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return o.startObject("",!1),o}class Nx extends $o{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,r=new nh(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new zx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(vu);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Gr.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(Gr.r,Gr.g,Gr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=l.slice(1).trim().split(vu),p=[];for(let g=0,m=f.length;g<m;g++){const d=f[g];if(d.length>0){const b=d.split("/");p.push(b)}}const _=p[0];for(let g=1,m=p.length-1;g<m;g++){const d=p[g],b=p[g+1];t.addFace(_[0],d[0],b[0],_[1],d[1],b[1],_[2],d[2],b[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let f=[];const p=[];if(l.indexOf("/")===-1)f=h;else for(let _=0,g=h.length;_<g;_++){const m=h[_].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(f,p)}else if(u==="p"){const f=l.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=Rx.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Ux.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Ix.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Ox.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new Si;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,h=l.materials,f=u.type==="Line",p=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const g=new Ke;g.setAttribute("position",new Ye(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new Ye(u.normals,3)),u.colors.length>0&&(_=!0,g.setAttribute("color",new Ye(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new Ye(u.uvs,2));const m=[];for(let b=0,x=h.length;b<x;b++){const v=h[b],y=v.name+"_"+v.smooth+"_"+_;let M=t.materials[y];if(this.materials!==null){if(M=this.materials.create(v.name),f&&M&&!(M instanceof wi)){const E=new wi;Fn.prototype.copy.call(E,M),E.color.copy(M.color),M=E}else if(p&&M&&!(M instanceof Sn)){const E=new Sn({size:10,sizeAttenuation:!1});Fn.prototype.copy.call(E,M),E.color.copy(M.color),E.map=M.map,M=E}}M===void 0&&(f?M=new wi:p?M=new Sn({size:1,sizeAttenuation:!1}):M=new Ko,M.name=v.name,M.flatShading=!v.smooth,M.vertexColors=_,t.materials[y]=M),m.push(M)}let d;if(m.length>1){for(let b=0,x=h.length;b<x;b++){const v=h[b];g.addGroup(v.groupStart,v.groupCount,b)}f?d=new On(g,m):p?d=new Qn(g,m):d=new yt(g,m)}else f?d=new On(g,m[0]):p?d=new Qn(g,m[0]):d=new yt(g,m[0]);d.name=l.name,s.add(d)}else if(t.vertices.length>0){const a=new Sn({size:1,sizeAttenuation:!1}),c=new Ke;c.setAttribute("position",new Ye(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Ye(t.colors,3)),a.vertexColors=!0);const l=new Qn(c,a);s.add(l)}return s}}class bu extends Ke{constructor(t=null,n=1){super();xt(this,"addFace",(t,n,i,s=new L)=>this.faces.push({a:t,b:n,c:i,normal:s,splitted:!1}));this.type="BufferGeometry",t!=null&&(this.thresholdDot=Math.cos(Math.PI/180*n),this.geometry=t,t.attributes.position!==void 0&&this.update(t,n))}fromBufferGeometry(t){if(t.attributes.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;this.vertices=[],this.faces=[];const i=t.getIndex(),s=t.getAttribute("position"),r=i!==null?i.count:s.count;for(let c=0,l=r,u=this.vertices;c<l;c++)u.push(new L().fromBufferAttribute(s,c));const a=t.groups;if(a.length>0)for(let c=0,l=a.length;c<l;c++){const u=a[c],h=u.start,f=u.count;for(let p=h,_=h+f;p<_;p+=3)i!==null?this.addFace(i.getX(p),i.getX(p+1),i.getX(p+2)):this.addFace(p,p+1,p+2)}else for(let c=0;c<r;c+=3)i!==null?this.addFace(i.getX(c),i.getX(c+1),i.getX(c+2)):this.addFace(c,c+1,c+2);return this}computeFaceNormals(){const t=new L;for(let n=0,i=this.faces.length;n<i;n++){const s=this.faces[n],r=this.vertices[s.a],a=this.vertices[s.b],c=this.vertices[s.c];t.subVectors(r,a),s.normal.subVectors(c,a),s.normal.cross(t).normalize()}return this}mergeVertices(t=4){const n=Math.pow(10,t),i=l=>{const u=~~(l.x*n),h=~~(l.y*n),f=~~(l.z*n);return`${u},${h},${f}`},s={},r=[],a=[];for(let l=0,u=0,h=this.vertices.length;l<h;l++){const f=this.vertices[l],p=i(f);s[p]===void 0?(s[p]=l,r.push(f),a[l]=u++):a[l]=a[s[p]]}const c=[];for(let l=0,u=this.faces.length;l<u;l++){const h=this.faces[l];h.a=a[h.a],h.b=a[h.b],h.c=a[h.c];const f=[h.a,h.b,h.c,h.a,h.b,h.c];for(let p=0;p<3;p++)if(f[p]===f[p+1]){c.push(l);break}}for(let l=0,u=c.length,h=this.faces;l<u;l++)h.splice(c[l],1);return this.vertices=r,this}update1(t=null){if(t===null||t.attributes.position===void 0)return;const n=[0,0],i={},s=["a","b","c","a","b","c"],r=1e-10,a=.01,c=(_,g)=>_-g;this.fromBufferGeometry(t).mergeVertices().computeFaceNormals();const l=this.vertices,u=this.faces,h=new L,f=new Xr;for(let _=0;_<u.length&&_<2e4;_++){const g=u[_];for(let m=0;m<3;m++){n[0]=g[s[m]],n[1]=g[s[m+1]];const d=l[n[0]],b=l[n[1]],x=f.set(d,b).distanceSq()+a;for(let v=0,y=l.length;v<y;v++){if(v===n[0]||v===n[1])continue;let M=l[v],E=M.distanceToSquared(d);if(!(E<r||E>x)&&(E=M.distanceToSquared(b),!(E<r||E>x)&&(f.closestPointToPoint(M,!0,h),h.distanceToSquared(M)<r))){g.splitted=!0,this.addFace(v,g[s[m+2]],g[s[m]],g.normal),this.addFace(v,g[s[m+2]],g[s[m+1]],g.normal);break}}if(g.splitted)break}}for(let _=0,g=u.length;_<g;_++){const m=u[_];if(!m.splitted)for(let d=0;d<3;d++){n[0]=m[s[d]],n[1]=m[s[d+1]],n.sort(c);const b=n.toString();i[b]===void 0?i[b]={vert1:n[0],vert2:n[1],face1:_}:u[i[b].face1].normal.dot(m.normal)>this.thresholdDot&&delete i[b]}}const p=[];for(let _ in i){let g=i[_],m=l[g.vert1];p.push(m.x,m.y,m.z),m=l[g.vert2],p.push(m.x,m.y,m.z)}this.setAttribute("position",new Ye(p,3))}updateFunciona(t=null,n=1){if(t===null||t.attributes.position===void 0)return;const i=Math.cos(Math.PI/180*n),s=[0,0],r={},a={},c=["a","b","c","a","b","c"],l=1e-10,u=.01;this.fromBufferGeometry(t).mergeVertices().computeFaceNormals();const h=this.vertices,f=this.faces;for(let b=0;b<f.length&&b<2e4;b++){const x=f[b];for(let v=0;v<3;v++){s[0]=x[c[v]],s[1]=x[c[v+1]];const y=h[s[0]],M=h[s[1]],E=new Xr(y,M),C=y.distanceToSquared(M)+u;for(let S=0,T=h.length;S<T;S++){if(S===s[0]||S===s[1])continue;let z=h[S];const k=z.distanceToSquared(y);if(k<l||k>C)continue;const R=z.distanceToSquared(M);if(R<l||R>C)continue;let U=new L;if(E.closestPointToPoint(z,!0,U),U.distanceToSquared(z)<l){x.splitted=!0,this.addFace(S,x[c[v+2]],x[c[v]],x.normal),this.addFace(S,x[c[v+2]],x[c[v+1]],x.normal);break}}if(x.splitted)break}}const p=new L,_=new L;for(let b=0,x=f.length;b<x;b++){const v=f[b];if(!v.splitted)for(let y=0;y<3;y++){s[0]=v[c[y]],s[1]=v[c[y+1]],s.sort((E,C)=>E-C);const M=s.toString();if(r[M]===void 0)r[M]={vert1:s[0],vert2:s[1],face1:b,face2:void 0},a[s[0]]==null&&(a[s[0]]={});else if(f[r[M].face1].normal.dot(v.normal)>i)delete r[M];else{p.subVectors(h[s[0]],h[s[1]]).normalize();let E=!0;for(let C in a[s[0]]){const S=a[s[0]][C];if(_.subVectors(h[s[0]],h[S.vert2]).normalize(),Math.abs(p.dot(_))>=i){a[s[1]]==null&&(a[s[1]]={}),a[s[1]][S.vert2]={vert1:s[1],vert2:S.vert2,splitted:!1},a[S.vert2][s[1]]={vert1:S.vert2,vert2:s[1],splitted:!1},delete a[s[0]][S.vert2],delete a[S.vert2][s[0]],E=!1;break}}E&&(a[s[0]]==null&&(a[s[0]]={}),a[s[1]]==null&&(a[s[1]]={}),a[s[0]][s[1]]={vert1:s[0],vert2:s[1],splitted:!0},a[s[1]][s[0]]={vert1:s[1],vert2:s[0],splitted:!0})}}}let g=!1,m=Object.keys(a);for(let b=0;b<m.length;b++){const x=m[b];for(let v in a[x])if(!(a[x][v].vert1>=a[x][v].vert2)){for(let y in a[v]){if(a[x][v].vert1>=a[v][y].vert2)continue;const M=h[a[x][v].vert1],E=h[a[x][v].vert2];p.subVectors(E,M).normalize(),g=!1;const C=h[a[v][y].vert2];if(_.subVectors(E,C).normalize(),p.dot(_)<-i){a[x][y]={vert1:a[x][v].vert1,vert2:a[v][y].vert2,splitted:!0},a[y]==null&&(a[y]={}),a[y][x]={vert1:a[v][y].vert2,vert2:a[x][v].vert1,splitted:!0},delete a[x][v],delete a[v][x],delete a[v][y],delete a[y][v],b--,g=!0;break}}if(g)break}}let d=[];for(let b in a)for(let x in a[b]){const v=a[b][x];if(v.vert1>=v.vert2)continue;let y=h[v.vert1];d.push(y.x,y.y,y.z),y=h[v.vert2],d.push(y.x,y.y,y.z)}this.setAttribute("position",new Ye(d,3))}update(t=null,n=1){if(t==null||t.attributes.position===void 0)return;this.calculate=!0;const i=Math.cos(Math.PI/180*n),s=[0,0],r={},a={},c=["a","b","c","a","b","c"],l=1e-10,u=.01,h=(x,v)=>x-v;this.fromBufferGeometry(t).mergeVertices().computeFaceNormals();const f=this.vertices,p=this.faces;for(let x=0;x<p.length&&x<2e4;x++){const v=p[x];for(let y=0;y<3;y++){s[0]=v[c[y]],s[1]=v[c[y+1]];const M=f[s[0]],E=f[s[1]],C=new Xr(M,E),S=M.distanceToSquared(E)+u;for(let T=0,z=f.length;T<z;T++){if(T===s[0]||T===s[1])continue;let k=f[T];const R=k.distanceToSquared(M);if(R<l||R>S)continue;const U=k.distanceToSquared(E);if(U<l||U>S)continue;let N=new L;if(C.closestPointToPoint(k,!0,N),N.distanceToSquared(k)<l){v.splitted=!0,this.addFace(T,v[c[y+2]],v[c[y]],v.normal),this.addFace(T,v[c[y+2]],v[c[y+1]],v.normal);break}}if(v.splitted)break}}const _=new L,g=new L;for(let x=0,v=p.length;x<v;x++){const y=p[x];if(!y.splitted)for(let M=0;M<3;M++){s[0]=y[c[M]],s[1]=y[c[M+1]],s.sort(h);const E=s.toString();if(r[E]===void 0)r[E]={vert1:s[0],vert2:s[1],face1:x,face2:void 0};else if(p[r[E].face1].normal.dot(y.normal)>i)delete r[E];else{_.subVectors(f[s[0]],f[s[1]]).normalize();let C=!0;for(let S in a[s[0]]){const T=a[s[0]][S];if(g.subVectors(f[s[0]],f[T.vert2]).normalize(),Math.abs(_.dot(g))>=i){a[s[1]]==null&&(a[s[1]]={}),a[s[1]][T.vert2]={vert1:s[1],vert2:T.vert2,splitted:!1},a[T.vert2][s[1]]={vert1:T.vert2,vert2:s[1],splitted:!1},delete a[s[0]][T.vert2],delete a[T.vert2][s[0]],C=!1;break}}C&&(a[s[0]]==null&&(a[s[0]]={}),a[s[0]][s[1]]={vert1:s[0],vert2:s[1],splitted:!0},a[s[1]]==null&&(a[s[1]]={}),a[s[1]][s[0]]={vert1:s[1],vert2:s[0],splitted:!0})}}}let m=!1;const d=Object.keys(a);for(let x=0,v=d.length;x<v;x++){const y=d[x];for(let M in a[y]){const E=a[y];if(!(E[M].vert1>=E[M].vert2)){for(let C in a[M]){if(a[y][M].vert1>=a[M][C].vert2)continue;const S=a[M],T=E[M],z=f[T.vert1],k=f[T.vert2];_.subVectors(z,k).normalize();const R=f[a[M][C].vert2];if(g.subVectors(k,R).normalize(),m=!1,_.dot(g)>i){E[C]={vert1:T.vert1,vert2:S[C].vert2,splitted:!0},a[C]==null&&(a[C]={}),a[C][y]={vert1:S[C].vert2,vert2:T.vert1,splitted:!0},delete E[M],delete S[y],delete S[C],delete a[C][M],x--,m=!0;break}}if(m)break}}}let b=[];for(let x in a)for(let v in a[x]){const y=a[x][v];if(y.vert1>=y.vert2)continue;let M=f[y.vert1];b.push(M.x,M.y,M.z),M=f[y.vert2],b.push(M.x,M.y,M.z)}this.setAttribute("position",new Ye(b,3)),this.calculate=!1}updateLines(){const t=this.hashLine,n=this.vertices,i=[];for(let s in t)if(!(Object.keys(t[s]).length<1))for(let r in t[s]){const a=t[s][r];let c=n[a.vert1];i.push(c.x,c.y,c.z),c=n[a.vert2],i.push(c.x,c.y,c.z)}this.setAttribute("position",new Ye(i,3))}}class Fx{constructor(e,t,n=new Ps(2,2,2),i=!0,s=!0){xt(this,"object",()=>({children:[],geometry:{attributes:{normal:[],position:[]},boundingSphere:{center:{x:0,y:0,z:0},radius:0}},matrixWorld:{elements:[]},position:{x:0,y:0,z:0}}));this.linesPlanesProj=[[],[],[]],this.planes=t,this.scene=e.scene,this.camera=e.camera,this.points=[],this.lines=[],this.geometryMap={},this.verticesVisibles=i,this.raycaster=e.raycaster,this.addObject(n),i?this.addVertices():this.addVerticesConfig(),this.addEdges(),s&&this.addProject()}copyBasicObject(e,t){let n;if(t.geometry.attributes.normal!=null){n=t.geometry.attributes.normal.array;for(let i=0;i<n.length;i++)e.geometry.attributes.normal.push(n[i])}n=t.geometry.attributes.position.array;for(let i=0;i<n.length;i++)e.geometry.attributes.position.push(n[i]);t.geometry.boundingSphere!=null&&(e.geometry.boundingSphere.center.x=t.geometry.boundingSphere.center.x,e.geometry.boundingSphere.center.y=t.geometry.boundingSphere.center.y,e.geometry.boundingSphere.center.z=t.geometry.boundingSphere.center.z,e.geometry.boundingSphere.raius=this.cube.geometry.boundingSphere.radius),n=this.cube.matrixWorld.elements;for(let i=0;i<n.length;i++)e.matrixWorld.elements.push(n[i]);return e.position.x=t.position.x,e.position.y=t.position.y,e.position.z=t.position.z,e}copyObject(){const e=this.object();let t=this.cube.children;for(let n=0;n<t.length;n++){const i=this.object();e.children.push(this.copyBasicObject(i,t[n]))}return this.copyBasicObject(e,this.cube),e}undoBasicObject(e,t){console.log(e,t);let n;if(t.geometry.attributes.normal.length>0){n=t.geometry.attributes.normal;for(let i=0;i<n.length;i++)e.geometry.attributes.normal.array[i]=n[i]}n=t.geometry.attributes.position;for(let i=0;i<n.length;i++)e.geometry.attributes.position.array[i]=n[i];e.geometry.boundingSphere!=null&&(e.geometry.boundingSphere.center.x=t.geometry.boundingSphere.center.x,e.geometry.boundingSphere.center.y=t.geometry.boundingSphere.center.y,e.geometry.boundingSphere.center.z=t.geometry.boundingSphere.center.z),n=t.matrixWorld.elements;for(let i=0;i<n.length;i++)e.matrixWorld.elements[i]=n[i];e.position.x=t.position.x,e.position.y=t.position.y,e.position.z=t.position.z}undoObject(e){console.log(e);let t=this.cube.children;for(let n=0;n<t.length;n++)this.undoBasicObject(t[n],e.children[n]),t[n].geometry.attributes.position.needsUpdate=!0,t[n].matrixWorldNeedsUpdate=!0;this.undoBasicObject(this.cube,e),this.cube.geometry.attributes.position.needsUpdate=!0,this.cube.matrixWorldNeedsUpdate=!0,this.updateVisible()}addObject(e){const t=new Ko({color:this.verticesVisibles?255:153,side:xn});this.cube=new yt(e,t),this.cube.extendObject="extendObject",this.cube.parentObject=this,this.scene.add(this.cube)}addVerticesEdges(){this.edges=new bu(this.cube.geometry,10);const e=new Xs({color:16777215,linewidth:1,scale:1,dashSize:.1,gapSize:0});this.lines=new On(this.edges,e),this.lines.computeLineDistances(),this.cube.add(this.lines)}addVerticesConfig(){let e=this.cube.geometry.getAttribute("position").array;for(let t=0,n=e.length;t<n;t+=3){const i=Hr(e[t+0],e[t+1],e[t+2]);this.geometryMap[i]===void 0?this.geometryMap[i]={point:null,vertices:[t],lines:[]}:this.geometryMap[i].vertices.push(t)}this.cube.userData.geometryMap=this.geometryMap}addVertices(){let e=this.cube.geometry.getAttribute("position").array;const t=new Sn({color:0,size:this.camera.isOrthographicCamera?5:.2});for(let n=0,i=e.length;n<i;n+=3){const s=Hr(e[n+0],e[n+1],e[n+2]);if(this.geometryMap[s]===void 0){const r=new Ke().setFromPoints([{x:0,y:0,z:0}]),a=new Qn(r,t);this.points.push(a),this.geometryMap[s]={point:a,vertices:[n],lines:[]},a.position.set(e[n+0],e[n+1],e[n+2]),a.userData.vertices=[{key:s,index:0}],a.parentObject=this,this.cube.add(a)}else this.geometryMap[s].vertices.push(n)}this.cube.userData.geometryMap=this.geometryMap}addEdges(){const e=new bu(this.cube.geometry,10),t=[],n=e.attributes.position.array;for(let i=0,s=n.length;i<s;i+=6){for(let h=0;h<6;h++)t[h]=n[h+i];const r=new Ke;r.setAttribute("position",new Ye(t,3));const a=new wi({color:16777215}),c=new On(r,a);c.parentObject=this,this.cube.add(c),this.lines.push(c);const l=Hr(n[i+0],n[i+1],n[i+2]);this.geometryMap[l].lines.push({line:c,index:0});const u=Hr(n[i+3],n[i+4],n[i+5]);this.geometryMap[u].lines.push({line:c,index:3}),c.userData.vertices=[{key:l,index:0},{key:u,index:3}]}}removeProject(){for(let e=0;e<this.linesPlanesProj.length;e++){const t=this.linesPlanesProj[e];for(let n=0,i=t.length;n<i;n++){const s=this.planes[e].children;for(let r=s.length;r>-1;r--)if(s[r]==t[n]){s.splice(r,1);break}}}}addProject(){this.subDivisions=2;for(let e=0;e<this.linesPlanesProj.length;e++){const t=[];for(let n=0,i=this.lines.length;n<i;n++){const s=new Si;for(let r=0;r<this.subDivisions;r++){const a=new Xs({color:0,linewidth:1,scale:1,dashSize:.1,gapSize:.05}),c=new Ke,l=[],u=r/2,h=(r+1)/2;for(let f=0;f<3;f++)l.push((1-u)*this.lines[n].geometry.attributes.position.array[f]+u*this.lines[n].geometry.attributes.position.array[f+3]);for(let f=0;f<3;f++)l.push((1-h)*this.lines[n].geometry.attributes.position.array[f]+h*this.lines[n].geometry.attributes.position.array[f+3]);c.setAttribute("position",new Ye(l,3)),c.rotateY(Math.PI/2),s.add(new On(c,a)),s.children[r].computeLineDistances(),s.children[r].geometry.computeBoundingSphere()}s.userData.vertexI=n,t.push(s),this.planes[e].add(s)}this.linesPlanesProj[e]=t}}addProject1(){for(let e=0;e<this.linesPlanesProj.length;e++){const t=[];for(let n=0,i=this.lines.geometry.attributes.position.array.length;n<i;n+=6){const s=new Xs({color:0,linewidth:1,scale:1,dashSize:.1,gapSize:.05}),r=new Ke,a=[];for(let l=0;l<6;l++)a.push(this.edges.attributes.position.array[l+n]);r.setAttribute("position",new Ye(a,3));const c=new On(r,s);c.userData.vertex1=new L(a[0],a[1],a[2]),c.userData.vertex2=new L(a[3],a[4],a[5]),c.userData.vertex=new L((a[0]+a[3])/2,(a[1]+a[4])/2,(a[2]+a[5])/2),c.computeLineDistances(),t.push(c),r.rotateY(Math.PI/2),this.planes[e].add(c)}this.linesPlanesProj[e]=t}}updateVisible(){let e,t,n,i=new L,s=new L,r;const a=this.linesPlanesProj[0];for(let c=0,l=a.length;c<l;c++){const u=this.lines[a[c].userData.vertexI],h=u.geometry.attributes.position.array;i.set(h[0],h[1],h[2]),s.set(h[3],h[4],h[5]),u.localToWorld(i),u.localToWorld(s);for(let f=0,p=this.linesPlanesProj.length;f<p;f++)for(let _=0,g=this.subDivisions;_<g;_++){e=this.linesPlanesProj[f][c].children[_];const m=this.planes[f];t=i.clone(),n=s.clone(),m.userData.rot&&(t.applyAxisAngle(m.userData.rot,Math.PI/2),n.applyAxisAngle(m.userData.rot,Math.PI/2));const d=_/g,b=(_+1)/g;r=e.geometry.attributes.position.array,r[0]=(1-d)*t.x+d*n.x,r[1]=(1-d)*t.y+d*n.y,r[2]=.01,r[3]=(1-b)*t.x+b*n.x,r[4]=(1-b)*t.y+b*n.y,r[5]=.01,e.computeLineDistances(),e.geometry.computeBoundingSphere(),e.geometry.attributes.position.needsUpdate=!0,e.material.gapSize=this.isVisible(m.userData.dir,c,f,_,g)?0:.3}}}updateVisible2(){let e,t,n,i,s,r,a,c;const l=this.linesPlanesProj[0];for(let u=0,h=l.length;u<h;u++){r=l[u].userData.vertex1.clone(),a=l[u].userData.vertex2.clone(),this.group.localToWorld(r),this.group.localToWorld(a);for(let f=0,p=this.linesPlanesProj.length;f<p;f++)e=this.linesPlanesProj[f][u],t=this.planes[f],n=t.userData.dir,i=r.clone(),s=a.clone(),t.userData.rot&&(i.applyAxisAngle(t.userData.rot,Math.PI/2),s.applyAxisAngle(t.userData.rot,Math.PI/2)),c=e.geometry.attributes.position.array,c[0]=i.x,c[1]=i.y,c[3]=s.x,c[4]=s.y,e.computeLineDistances(),e.geometry.attributes.position.needsUpdate=!0,e.material.gapSize=this.isVisible(n,u,f)?0:.05}}updateVisible1(){for(let e=0,t=this.linesPlanesProj.length;e<t;e++){const n=this.linesPlanesProj[e],i=this.planes[e],s=i.userData.dir;for(let r=0,a=this.linesPlanesProj[0].length;r<a;r++){const c=n[r];c.material.gapSize=this.isVisible(s,r,e)?0:.05;const l=c.userData.vertex1.clone(),u=c.userData.vertex2.clone();this.group.localToWorld(l),this.group.localToWorld(u),i.worldToLocal(l),i.worldToLocal(u);const h=c.geometry.attributes.position.array;h[0]=l.x,h[1]=l.y,h[2]=.01,h[3]=u.x,h[4]=u.y,h[5]=.01,c.computeLineDistances(),c.geometry.attributes.position.needsUpdate=!0}}}isVisible3(e,t,n){const i=this.lines[this.linesPlanesProj[n][t].userData.vertexI],s=i.geometry.attributes.position.array,r=new L((s[0]+s[3])/2,(s[1]+s[4])/2,(s[2]+s[5])/2);return i.localToWorld(r),this.raycaster.set(r,e),this.raycaster.intersectObjects([this.cube],!1).length>0}isVisible(e,t,n,i,s){var _;const r=i/s,a=(i+1)/s,c=this.lines[this.linesPlanesProj[n][t].userData.vertexI],l=c.geometry.attributes.position.array,u=new L(((1-r)*l[0]+r*l[3]+(1-a)*l[0]+a*l[3])/2,((1-r)*l[1]+r*l[4]+(1-a)*l[1]+a*l[4])/2,((1-r)*l[2]+r*l[5]+(1-a)*l[2]+a*l[5])/2);c.localToWorld(u);const h=new L((1-e.x)*u.x-10*e.x,(1-e.y)*u.y-10*e.y,(1-e.z)*u.z-10*e.z),f=u.distanceTo(h);return this.raycaster.set(h,e),!(((_=this.raycaster.intersectObjects([this.cube],!1)[0])==null?void 0:_.distance)<f-.01)}isVisible4(e,t,n){const i=this.lines[this.linesPlanesProj[n][t].userData.vertexI],s=i.geometry.attributes.position.array,r=new L((s[0]+s[3])/2,(s[1]+s[4])/2,(s[2]+s[5])/2);i.localToWorld(r);const a=new L(r.x-10*e.x,r.y-10*e.y,r.z-10*e.z),c=r.distanceTo(a);this.raycaster.set(a,e);const l=this.raycaster.intersectObjects([this.cube],!1);return l.length>0&&Math.abs(l[0].distance-c)<.05}isVisible1(e,t,n){const i=this.linesPlanesProj[n][t].userData.vertexI,s=new L((this.lines[i].geometry.attributes.position.array[0]+this.lines[i].geometry.attributes.position.array[3])/2,(this.lines[i].geometry.attributes.position.array[1]+this.lines[i].geometry.attributes.position.array[4])/2,(this.lines[i].geometry.attributes.position.array[2]+this.lines[i].geometry.attributes.position.array[5])/2);this.lines[i].localToWorld(s);const r=new L((1-e.x)*s.x-10*e.x,(1-e.y)*s.y-10*e.y,(1-e.z)*s.z-10*e.z),a=s.distanceTo(r);this.raycaster.set(r,e);const c=this.raycaster.intersectObjects([this.cube],!1);for(let l=0;l<c.length;l++)if(c[l].distance<a-.1)return!1;return!0}}const Hr=(o,e,t,n=4)=>{const i=Math.pow(10,n),s=~~(o*i),r=~~(e*i),a=~~(t*i);return`${s},${r},${a}`},Bx=({path:o,name:e,editor:t})=>{new Nx().load(o+e+".obj.txt",i=>{t.scene.remove(t.cube);const s=new Fx(t,t.planesP.planes,i.children[0].geometry,!1,!1);t.cube=s.cube,t.cube.userData.rotate={x:Math.floor(Math.random()*1e3),y:Math.floor(Math.random()*1e3),z:Math.floor(Math.random()*1e3)},t.cube.userData.name=e,t.cube.geometry.rotateX(t.cube.userData.rotate.x%4*Math.PI/2),t.cube.geometry.rotateY(t.cube.userData.rotate.y%4*Math.PI/2),t.cube.geometry.rotateZ(t.cube.userData.rotate.z%4*Math.PI/2);for(let r=0;r<s.lines.length;r++)s.lines[r].geometry.rotateX(t.cube.userData.rotate.x%4*Math.PI/2),s.lines[r].geometry.rotateY(t.cube.userData.rotate.y%4*Math.PI/2),s.lines[r].geometry.rotateZ(t.cube.userData.rotate.z%4*Math.PI/2);t.scene.add(t.cube)},i=>{console.log(i.loaded/i.total*100+"% loaded")},i=>{console.log(i,"An error happened")})};class Mu extends On{constructor(t=[0,0,0,0,0,0],n=0,i=0){let s=new Ke().setAttribute("position",new Et(new Float32Array([t[0],t[1],t[2],t[3],t[4],t[5]]),3));super(s,new Xs({color:n,dashSize:.15,gapSize:i}));xt(this,"clamp",(t,n,i)=>Math.min(Math.max(i,t),n));this.computeLineDistances();let r=new Sn({color:n,size:4}),a=new Ke;a.setAttribute("position",new Et(new Float32Array([t[0],t[1],t[2]]),3)),this.point1=new Qn(a,r),r=new Sn({color:n,size:4}),a=new Ke,a.setAttribute("position",new Et(new Float32Array([t[3],t[4],t[5]]),3)),this.point2=new Qn(a,r)}updatePosition(t,n=0,i=!1,s,r){s=(3-s)%3;const a=this.geometry.attributes.position.array;if(!i&&a[n+0]==Math.round(t.x)&&a[n+1]==Math.round(t.y)&&a[n+2]==Math.round(t.z))return;const c=n!=0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,l=n!=0?this.point1:this.point2,u=n==0?this.point1.geometry.attributes.position.array:this.point2.geometry.attributes.position.array,h=n==0?this.point1:this.point2;s==0&&(a[n+0]=u[0]=Math.round(t.x),a[n+1]=u[1]=this.clamp(-r,r,Math.round(t.y)),a[n+2]=u[2]=this.clamp(-r,r,Math.round(t.z))),s==1&&(a[n+0]=u[0]=this.clamp(-r,r,Math.round(t.x)),a[n+1]=u[1]=Math.round(t.y),a[n+2]=u[2]=this.clamp(-r,r,Math.round(t.z))),s==2&&(a[n+0]=u[0]=this.clamp(-r,r,Math.round(t.x)),a[n+1]=u[1]=this.clamp(-r,r,Math.round(t.y)),a[n+2]=u[2]=Math.round(t.z)),h.visible=!0,h.geometry.computeBoundingSphere(),h.geometry.attributes.position.needsUpdate=!0,i&&(n=n==0?3:0,a[n+0]=c[0]=u[0],a[n+1]=c[1]=u[1],a[n+2]=c[2]=u[2],this.visible=!0,l.visible=!0,l.geometry.computeBoundingSphere(),l.geometry.attributes.position.needsUpdate=!0),this.computeLineDistances(),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0}updateColor(t,n,i){this.material.color.r=this.point1.material.color.r=this.point2.material.color.r=t,this.material.color.g=this.point1.material.color.g=this.point2.material.color.g=n,this.material.color.b=this.point1.material.color.b=this.point2.material.color.b=i}}class kx extends Px{constructor(t=window){super(Cx(),t);xt(this,"newMenu",()=>{this.Teidebar=Sx();const t=yx({id:"leftbar"}),n=lo({id:"linebar"});t.add(n),this.visibleLine=Bs({id:"visibleLine",cl:["selected","invert"],container:n,imgSrc:"../assets/icons/tools/line27.png",dataTitle:this.strings.getKey("line/visible"),onClick:r=>{this.LineDashed=0,this.Line.selectedSegment&&(this.Line.segment.material.gapSize=0)}}).dom,this.hiddenLine=Bs({id:"hiddenLine",cl:["invert"],container:n,imgSrc:"../assets/icons/tools/lineD1.png",dataTitle:this.strings.getKey("line/hidden"),onClick:r=>{this.LineDashed=.25,this.Line.selectedSegment&&(this.Line.segment.material.gapSize=.25)}}).dom,this.deleteLine=Bs({id:"deleteLine",cl:[],container:n,imgSrc:"../assets/icons/tools/eraser1.png",dataTitle:this.strings.getKey("line/delete"),selected:!1,onClick:r=>{for(let a=0;a<this.linesSegments.length;a++)if(this.Line.segment.uuid==this.linesSegments[a].uuid){this.Line.setLineReset(),this.scene.remove(this.Line.segment.point1),this.scene.remove(this.Line.segment.point2),this.scene.remove(this.Line.segment),this.linesSegments.splice(a,1);return}}}).dom;const i=lo({id:"IsometricoEjerciciosBar"});t.add(i);for(let r=1;r<5;r++)Bs({id:"Exercise"+r,container:i,imgSrc:`../assets/icons/numbers/${r}.png`,dataTitle:`${this.strings.getKey("number/exercise")} ${r}`,onClick:a=>Bx({path:"./exercises/",name:r,editor:this})});const s=lo({id:"portapapelesbar"});t.add(s),this.clipboard=Bs({id:"portapapelesbar",cl:[],container:s,imgSrc:"../assets/icons/misc/copy2.png",dataTitle:this.strings.getKey("clipboard/copy"),selected:!1,onClick:r=>{navigator.clipboard.writeText(this.toJSON()).then(a=>{console.log("Texto copiado al portapapeles",a)}).catch(a=>{console.error("Error al copiar al portapapeles:",a)})}}).dom});xt(this,"initMenu",async()=>{this.menu=await fetch("../common/menu.json").then(t=>t.json()).then(t=>t.menu),this.menuBar=wx(this)});xt(this,"initPlanesPorj",()=>{this.planesP=new _x(this),this.scene.add(this.planesP.planes[0],this.planesP.planes[1],this.planesP.planes[2]),this.canvasPlanes[0]=[this.planesP.planes[0]],this.canvasPlanes[1]=[this.planesP.planes[2]],this.canvasPlanes[2]=[this.planesP.planes[1]]});this.objects=[],this.cubes=[],this.lines=[],this.points=[],this.linesSegments=[],this.pointsLinesSegments=[],this.history={copyObject:[],object:[],index:0},this.canvasPlanes={0:[],1:[],2:[],3:[]},this.width,this.height,this.LineDashed=0,this.sizeProj=6,this.initConfig(),this.initMenu(),this.newMenu(),this.initPlanesPorj(),this.intDrawLine()}toJSON(){this.exportJSON={segments:[],colorLine:[],gapSize:[],exercise:"",rotate:{x:0,y:0,z:0}};for(let n=0;n<this.linesSegments.length;n++)this.exportJSON.segments.push(this.linesSegments[n].geometry.attributes.position.array),this.exportJSON.colorLine.push({r:this.linesSegments[n].material.color.r,g:this.linesSegments[n].material.color.g,b:this.linesSegments[n].material.color.b}),console.log(this.linesSegments[n].material),this.exportJSON.gapSize.push(this.linesSegments[n].material.gapSize);this.exportJSON.exercise=this.cube.userData.name,this.exportJSON.rotate=this.cube.userData.rotate,console.log(this.cube.userData);const t=JSON.stringify(this.exportJSON);return JSON.parse(t),t}JSONtoVar(){const t=JSON.parse(window.localStorage.proj);for(const n in t.segments){const i=[];for(const s in t.segments[n])i.push(t.segments[n][s]);this.copyLine(i)}}reset(){for(let t=0;t<this.linesSegments.length;t++)this.scene.remove(this.linesSegments[t]);for(let t=0;t<this.pointsLinesSegments.length;t++)this.scene.remove(this.pointsLinesSegments[t]);this.linesSegments=[],this.pointsLinesSegments=[]}copyLine2(t,n){const i=new Mu(t,0);i.material.gapSize=n,this.linesSegments.push(i),this.pointsLinesSegments.push(i.point1,i.point2),this.scene.add(i,i.point1,i.point2)}copyLine(t){const n=new Mu(t.geometry.attributes.position.array,0);n.material.gapSize=this.tempLine.material.gapSize,this.linesSegments.push(n),this.pointsLinesSegments.push(n.point1,n.point2),this.scene.add(n,n.point1,n.point2)}intDrawLine(){this.Line=Dx(this),this.Line.createHandler()}}let Wr=new kx;function rf(){requestAnimationFrame(rf);for(let o=0;o<Wr.allRenderer.length;o++)Wr.allRenderer[o].render(Wr.scene,Wr.allCameras[o])}rf();
