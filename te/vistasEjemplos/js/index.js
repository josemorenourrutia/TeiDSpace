var Yf=Object.defineProperty;var Zf=(a,t,e)=>t in a?Yf(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var Ue=(a,t,e)=>(Zf(a,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="151",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kf=0,Kl=1,Jf=2,ml=1,$f=2,$s=3,pi=0,ke=1,vn=2,hi=0,bs=1,Jl=2,$l=3,Ql=4,Qf=5,ms=100,td=101,ed=102,tc=103,ec=104,nd=200,id=201,sd=202,rd=203,lu=204,cu=205,od=206,ad=207,ld=208,cd=209,hd=210,ud=0,ka=1,fd=2,Ba=3,dd=4,pd=5,md=6,gd=7,gl=0,_d=1,vd=2,qn=0,xd=1,yd=2,Md=3,bd=4,Sd=5,hu=300,Cs=301,Ls=302,Va=303,Ga=304,Ro=306,Ha=1e3,xn=1001,Wa=1002,ze=1003,nc=1004,Go=1005,an=1006,wd=1007,cr=1008,Vi=1009,Td=1010,Ed=1011,uu=1012,Ad=1013,Ii=1014,Ui=1015,hr=1016,Pd=1017,Cd=1018,Ss=1020,Ld=1021,yn=1023,Rd=1024,Dd=1025,Ni=1026,Rs=1027,Id=1028,Ud=1029,Od=1030,zd=1031,Nd=1033,Ho=33776,Wo=33777,jo=33778,qo=33779,ic=35840,sc=35841,rc=35842,oc=35843,Fd=36196,ac=37492,lc=37496,cc=37808,hc=37809,uc=37810,fc=37811,dc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Mc=37820,bc=37821,Xo=36492,kd=36283,Sc=36284,wc=36285,Tc=36286,Gi=3e3,$t=3001,Bd=3200,Vd=3201,fu=0,Gd=1,En="srgb",ur="srgb-linear",du="display-p3",Yo=7680,Hd=519,Ec=35044,Ac="300 es",ja=1035;class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,yo=180/Math.PI;function Vs(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[a&255]+Ee[a>>8&255]+Ee[a>>16&255]+Ee[a>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Me(a,t,e){return Math.max(t,Math.min(e,a))}function Wd(a,t){return(a%t+t)%t}function Ko(a,t,e){return(1-e)*a+e*t}function Pc(a){return(a&a-1)===0&&a!==0}function jd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Er(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function je(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],y=i[1],x=i[4],v=i[7],M=i[2],S=i[5],T=i[8];return s[0]=r*g+o*y+c*M,s[3]=r*m+o*x+c*S,s[6]=r*d+o*v+c*T,s[1]=l*g+h*y+u*M,s[4]=l*m+h*x+u*S,s[7]=l*d+h*v+u*T,s[2]=f*g+p*y+_*M,s[5]=f*m+p*x+_*S,s[8]=f*d+p*v+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*r-o*l,f=o*c-h*s,p=l*s-r*c,_=e*u+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(o*n-i*r)*g,t[3]=f*g,t[4]=(h*e-i*c)*g,t[5]=(i*s-o*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-i*l,i*c,-i*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new Gt;function pu(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Mo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ws(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function $o(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const qd=new Gt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Xd=new Gt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Yd(a){return a.convertSRGBToLinear().applyMatrix3(Xd)}function Zd(a){return a.applyMatrix3(qd).convertLinearToSRGB()}const Kd={[ur]:a=>a,[En]:a=>a.convertSRGBToLinear(),[du]:Yd},Jd={[ur]:a=>a,[En]:a=>a.convertLinearToSRGB(),[du]:Zd},qe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return ur},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=Kd[t],i=Jd[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}};let Ji;class mu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=Mo("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ws(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ws(e[n]/255)*255):e[n]=ws(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class gu{constructor(t=null){this.isSource=!0,this.uuid=Vs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Qo(i[r].image)):s.push(Qo(i[r]))}else s=Qo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Qo(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?mu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $d=0;class $e extends Xi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=xn,i=xn,s=an,r=cr,o=yn,c=Vi,l=$e.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Vs(),this.name="",this.source=new gu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=hu;$e.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(p+1)/2,M=(d+1)/2,S=(h+f)/4,T=(u+g)/4,E=(_+m)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=T/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=E/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=E/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hi extends Xi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new $e(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _u extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qd extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=s[r+0],p=s[r+1],_=s[r+2],g=s[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==p||h!==_){let m=1-o;const d=c*f+l*p+h*_+u*g,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const M=Math.sqrt(x),S=Math.atan2(M,d*y);m=Math.sin(m*S)/M,o=Math.sin(o*S)/M}const v=o*y;if(c=c*m+f*v,l=l*m+p*v,h=h*m+_*v,u=u*m+g*v,m===1-o){const M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],f=s[r+1],p=s[r+2],_=s[r+3];return t[e]=o*_+h*u+c*p-l*f,t[e+1]=c*_+h*f+l*u-o*p,t[e+2]=l*_+h*p+o*f-c*u,t[e+3]=h*_-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),p=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,c=t.w,l=c*e+r*i-o*n,h=c*n+o*e-s*i,u=c*i+s*n-r*e,f=-s*e-r*n-o*i;return this.x=l*c+f*-s+h*-o-u*-r,this.y=h*c+f*-r+u*-s-l*-o,this.z=u*c+f*-o+l*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new P,Cc=new ye;class Mr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox),$i.applyMatrix4(t.matrixWorld),this.union($i);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,o=s.count;r<o;r++)zn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(zn)}else i.boundingBox===null&&i.computeBoundingBox(),$i.copy(i.boundingBox),$i.applyMatrix4(t.matrixWorld),this.union($i)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Ar.subVectors(this.max,Ws),Qi.subVectors(t.a,Ws),ts.subVectors(t.b,Ws),es.subVectors(t.c,Ws),Qn.subVectors(ts,Qi),ti.subVectors(es,ts),Mi.subVectors(Qi,es);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-Mi.z,Mi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,Mi.z,0,-Mi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-Mi.y,Mi.x,0];return!ea(e,Qi,ts,es,Ar)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Qi,ts,es,Ar))?!1:(Pr.crossVectors(Qn,ti),e=[Pr.x,Pr.y,Pr.z],ea(e,Qi,ts,es,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new P,new P,new P,new P,new P,new P,new P,new P],zn=new P,$i=new Mr,Qi=new P,ts=new P,es=new P,Qn=new P,ti=new P,Mi=new P,Ws=new P,Ar=new P,Pr=new P,bi=new P;function ea(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){bi.fromArray(a,s);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),c=t.dot(bi),l=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const tp=new Mr,js=new P,na=new P;class br{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(na)),this.expandByPoint(js.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new P,ia=new P,Cr=new P,ei=new P,sa=new P,Lr=new P,ra=new P;class Do{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ia.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(ia);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Cr),o=ei.dot(this.direction),c=-ei.dot(Cr),l=ei.lengthSq(),h=Math.abs(1-r*r);let u,f,p,_;if(h>0)if(u=r*c-o,f=r*o-c,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,p=u*(u+r*f+2*o)+f*(r*u+f+2*c)+l}else f=s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ia).addScaledVector(Cr,f),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,i,s){sa.subVectors(e,t),Lr.subVectors(n,t),ra.crossVectors(sa,Lr);let r=this.direction.dot(ra),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ei.subVectors(this.origin,t);const c=o*this.direction.dot(Lr.crossVectors(ei,Lr));if(c<0)return null;const l=o*this.direction.dot(sa.cross(ei));if(l<0||c+l>r)return null;const h=-o*ei.dot(ra);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,c,l,h,u,f,p,_,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),r=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=r*h,p=r*u,_=o*h,g=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=f-g*l,e[9]=-o*c,e[2]=g-f*l,e[6]=_+p*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f+g*o,e[4]=_*o-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=p*o-_,e[6]=g+f*o,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f-g*o,e[4]=-r*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=r*h,e[9]=g-f*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,p=r*u,_=o*h,g=o*u;e[0]=c*h,e[4]=_*l-p,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,p=r*l,_=o*c,g=o*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+p,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=r*c,p=r*l,_=o*c,g=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=r*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),ni.crossVectors(n,Xe),ni.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),ni.crossVectors(n,Xe)),ni.normalize(),Rr.crossVectors(Xe,ni),i[0]=ni.x,i[4]=Rr.x,i[8]=Xe.x,i[1]=ni.y,i[5]=Rr.y,i[9]=Xe.y,i[2]=ni.z,i[6]=Rr.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],y=n[3],x=n[7],v=n[11],M=n[15],S=i[0],T=i[4],E=i[8],b=i[12],w=i[1],O=i[5],N=i[9],D=i[13],I=i[2],z=i[6],W=i[10],q=i[14],H=i[3],Q=i[7],tt=i[11],xt=i[15];return s[0]=r*S+o*w+c*I+l*H,s[4]=r*T+o*O+c*z+l*Q,s[8]=r*E+o*N+c*W+l*tt,s[12]=r*b+o*D+c*q+l*xt,s[1]=h*S+u*w+f*I+p*H,s[5]=h*T+u*O+f*z+p*Q,s[9]=h*E+u*N+f*W+p*tt,s[13]=h*b+u*D+f*q+p*xt,s[2]=_*S+g*w+m*I+d*H,s[6]=_*T+g*O+m*z+d*Q,s[10]=_*E+g*N+m*W+d*tt,s[14]=_*b+g*D+m*q+d*xt,s[3]=y*S+x*w+v*I+M*H,s[7]=y*T+x*O+v*z+M*Q,s[11]=y*E+x*N+v*W+M*tt,s[15]=y*b+x*D+v*q+M*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*p-n*c*p)+g*(+e*c*p-e*l*f+s*r*f-i*r*p+i*l*h-s*c*h)+m*(+e*l*u-e*o*p-s*r*u+n*r*p+s*o*h-n*l*h)+d*(-i*o*h-e*c*u+e*o*f+i*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],y=u*m*l-g*f*l+g*c*p-o*m*p-u*c*d+o*f*d,x=_*f*l-h*m*l-_*c*p+r*m*p+h*c*d-r*f*d,v=h*g*l-_*u*l+_*o*p-r*g*p-h*o*d+r*u*d,M=_*u*c-h*g*c-_*o*f+r*g*f+h*o*m-r*u*m,S=e*y+n*x+i*v+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=y*T,t[1]=(g*f*s-u*m*s-g*i*p+n*m*p+u*i*d-n*f*d)*T,t[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*d+n*c*d)*T,t[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*p-n*c*p)*T,t[4]=x*T,t[5]=(h*m*s-_*f*s+_*i*p-e*m*p-h*i*d+e*f*d)*T,t[6]=(_*c*s-r*m*s-_*i*l+e*m*l+r*i*d-e*c*d)*T,t[7]=(r*f*s-h*c*s+h*i*l-e*f*l-r*i*p+e*c*p)*T,t[8]=v*T,t[9]=(_*u*s-h*g*s-_*n*p+e*g*p+h*n*d-e*u*d)*T,t[10]=(r*g*s-_*o*s+_*n*l-e*g*l-r*n*d+e*o*d)*T,t[11]=(h*o*s-r*u*s-h*n*l+e*u*l+r*n*p-e*o*p)*T,t[12]=M*T,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*T,t[14]=(_*o*i-r*g*i-_*n*c+e*g*c+r*n*m-e*o*m)*T,t[15]=(r*u*i-h*o*i+h*n*c-e*u*c-r*n*f+e*o*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,c=t.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,c=e._w,l=s+s,h=r+r,u=o+o,f=s*l,p=s*h,_=s*u,g=r*h,m=r*u,d=o*u,y=c*l,x=c*h,v=c*u,M=n.x,S=n.y,T=n.z;return i[0]=(1-(g+d))*M,i[1]=(p+v)*M,i[2]=(_-x)*M,i[3]=0,i[4]=(p-v)*S,i[5]=(1-(f+d))*S,i[6]=(m+y)*S,i[7]=0,i[8]=(_+x)*T,i[9]=(m-y)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const r=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);const l=1/s,h=1/r,u=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),f=-(r+s)/(r-s),p=-2*r*s/(r-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,c=1/(e-t),l=1/(n-i),h=1/(r-s),u=(e+t)*c,f=(n+i)*l,p=(r+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new P,pn=new ne,ep=new P(0,0,0),np=new P(1,1,1),ni=new P,Rr=new P,Xe=new P,Lc=new ne,Rc=new ye;class Sr{constructor(t=0,e=0,n=0,i=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ip=0;const Dc=new P,is=new ye,Fn=new ne,Dr=new P,qs=new P,sp=new P,rp=new ye,Ic=new P(1,0,0),Uc=new P(0,1,0),Oc=new P(0,0,1),op={type:"added"},zc={type:"removed"};class Qt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const t=new P,e=new Sr,n=new ye,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Gt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Oc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dr.copy(t):Dr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(qs,Dr,this.up):Fn.lookAt(Dr,qs,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Fn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(op)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(zc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qt.DEFAULT_UP=new P(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new P,kn=new P,oa=new P,Bn=new P,ss=new P,rs=new P,Nc=new P,aa=new P,la=new P,ca=new P;let Ir=!1;class _n{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){mn.subVectors(i,e),kn.subVectors(n,e),oa.subVectors(t,e);const r=mn.dot(mn),o=mn.dot(kn),c=mn.dot(oa),l=kn.dot(kn),h=kn.dot(oa),u=r*l-o*o;if(u===0)return s.set(-2,-1,-1);const f=1/u,p=(l*c-o*h)*f,_=(r*h-o*c)*f;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(t,e,n,i,s,r,o,c){return Ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ir=!0),this.getInterpolation(t,e,n,i,s,r,o,c)}static getInterpolation(t,e,n,i,s,r,o,c){return this.getBarycoord(t,e,n,i,Bn),c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(r,Bn.y),c.addScaledVector(o,Bn.z),c}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),kn.subVectors(t,e),mn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),mn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ir=!0),_n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;ss.subVectors(i,n),rs.subVectors(s,n),aa.subVectors(t,n);const c=ss.dot(aa),l=rs.dot(aa);if(c<=0&&l<=0)return e.copy(n);la.subVectors(t,i);const h=ss.dot(la),u=rs.dot(la);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(ss,r);ca.subVectors(t,s);const p=ss.dot(ca),_=rs.dot(ca);if(_>=0&&p<=_)return e.copy(s);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(rs,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Nc.subVectors(s,i),o=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(Nc,o);const d=1/(m+g+f);return r=g*d,o=f*d,e.copy(n).addScaledVector(ss,r).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ap=0;class Yn extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=bs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ha(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qe.workingColorSpace){if(t=Wd(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ha(r,s,t+1/3),this.g=ha(r,s,t),this.b=ha(r,s,t-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(t,e=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,qe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,qe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=$o(t.r),this.g=$o(t.g),this.b=$o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return qe.fromWorkingColorSpace(Ae.copy(this),t),Me(Ae.r*255,0,255)<<16^Me(Ae.g*255,0,255)<<8^Me(Ae.b*255,0,255)<<0}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,s=Ae.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=En){qe.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(gn),gn.h+=t,gn.s+=e,gn.l+=n,this.setHSL(gn.h,gn.s,gn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Ur);const n=Ko(gn.h,Ur.h,e),i=Ko(gn.s,Ur.s,e),s=Ko(gn.l,Ur.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Ht;Ht.NAMES=vu;class An extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new P,Or=new lt;class Rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ec,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Er(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Er(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Er(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ec&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xu extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yu extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ot extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let lp=0;const nn=new ne,ua=new Qt,os=new P,Ye=new Mr,Xs=new Mr,xe=new P;class ee extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pu(t)?yu:xu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ot(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ye.min,Xs.min),Ye.expandByPoint(xe),xe.addVectors(Ye.max,Xs.max),Ye.expandByPoint(xe)):(Ye.expandByPoint(Xs.min),Ye.expandByPoint(Xs.max))}Ye.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(t,l),xe.add(os)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new P,h[w]=new P;const u=new P,f=new P,p=new P,_=new lt,g=new lt,m=new lt,d=new P,y=new P;function x(w,O,N){u.fromArray(i,w*3),f.fromArray(i,O*3),p.fromArray(i,N*3),_.fromArray(r,w*2),g.fromArray(r,O*2),m.fromArray(r,N*2),f.sub(u),p.sub(u),g.sub(_),m.sub(_);const D=1/(g.x*m.y-m.x*g.y);!isFinite(D)||(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(D),l[w].add(d),l[O].add(d),l[N].add(d),h[w].add(y),h[O].add(y),h[N].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,O=v.length;w<O;++w){const N=v[w],D=N.start,I=N.count;for(let z=D,W=D+I;z<W;z+=3)x(n[z+0],n[z+1],n[z+2])}const M=new P,S=new P,T=new P,E=new P;function b(w){T.fromArray(s,w*3),E.copy(T);const O=l[w];M.copy(O),M.sub(T.multiplyScalar(T.dot(O))).normalize(),S.crossVectors(E,O);const D=S.dot(h[w])<0?-1:1;c[w*4]=M.x,c[w*4+1]=M.y,c[w*4+2]=M.z,c[w*4+3]=D}for(let w=0,O=v.length;w<O;++w){const N=v[w],D=N.start,I=N.count;for(let z=D,W=D+I;z<W;z+=3)b(n[z+0]),b(n[z+1]),b(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,r=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new Rn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new ne,wn=new Do,zr=new br,kc=new P,as=new P,ls=new P,cs=new P,fa=new P,Nr=new P,Fr=new lt,kr=new lt,Br=new lt,Bc=new P,Vc=new P,Gc=new P,Vr=new P,Gr=new P;class ht extends Qt{constructor(t=new ee,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Nr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(fa.fromBufferAttribute(u,t),r?Nr.addScaledVector(fa,h):Nr.addScaledVector(fa.sub(e),h))}e.add(Nr)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),wn.copy(t.ray).recast(t.near),zr.containsPoint(wn.origin)===!1&&(wn.intersectSphere(zr,kc)===null||wn.origin.distanceToSquared(kc)>(t.far-t.near)**2))||(Fc.copy(s).invert(),wn.copy(t.ray).applyMatrix4(Fc),n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,f=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,M=x;v<M;v+=3){const S=o.getX(v),T=o.getX(v+1),E=o.getX(v+2);r=Hr(this,d,t,wn,l,h,u,S,T,E),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=Hr(this,i,t,wn,l,h,u,y,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,M=x;v<M;v+=3){const S=v,T=v+1,E=v+2;r=Hr(this,d,t,wn,l,h,u,S,T,E),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const y=m,x=m+1,v=m+2;r=Hr(this,i,t,wn,l,h,u,y,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function cp(a,t,e,n,i,s,r,o){let c;if(t.side===ke?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,t.side===pi,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:a}}function Hr(a,t,e,n,i,s,r,o,c,l){a.getVertexPosition(o,as),a.getVertexPosition(c,ls),a.getVertexPosition(l,cs);const h=cp(a,t,e,n,as,ls,cs,Vr);if(h){i&&(Fr.fromBufferAttribute(i,o),kr.fromBufferAttribute(i,c),Br.fromBufferAttribute(i,l),h.uv=_n.getInterpolation(Vr,as,ls,cs,Fr,kr,Br,new lt)),s&&(Fr.fromBufferAttribute(s,o),kr.fromBufferAttribute(s,c),Br.fromBufferAttribute(s,l),h.uv2=_n.getInterpolation(Vr,as,ls,cs,Fr,kr,Br,new lt)),r&&(Bc.fromBufferAttribute(r,o),Vc.fromBufferAttribute(r,c),Gc.fromBufferAttribute(r,l),h.normal=_n.getInterpolation(Vr,as,ls,cs,Bc,Vc,Gc,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};_n.getNormal(as,ls,cs,u.normal),h.face=u}return h}class he extends ee{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,r,s,0),_("z","y","x",1,-1,n,e,-t,r,s,1),_("x","z","y",1,1,t,n,e,i,r,2),_("x","z","y",1,-1,t,n,-e,i,r,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function _(g,m,d,y,x,v,M,S,T,E,b){const w=v/T,O=M/E,N=v/2,D=M/2,I=S/2,z=T+1,W=E+1;let q=0,H=0;const Q=new P;for(let tt=0;tt<W;tt++){const xt=tt*O-D;for(let it=0;it<z;it++){const j=it*w-N;Q[g]=j*y,Q[m]=xt*x,Q[d]=I,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[d]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(it/T),u.push(1-tt/E),q+=1}}for(let tt=0;tt<E;tt++)for(let xt=0;xt<T;xt++){const it=f+xt+z*tt,j=f+xt+z*(tt+1),Z=f+(xt+1)+z*(tt+1),ct=f+(xt+1)+z*tt;c.push(it,j,ct),c.push(j,Z,ct),H+=6}o.addGroup(p,H,b),p+=H,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(a){const t={};for(let e=0;e<a.length;e++){const n=Ds(a[e]);for(const i in n)t[i]=n[i]}return t}function hp(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Mu(a){return a.getRenderTarget()===null&&a.outputEncoding===$t?En:ur}const up={clone:Ds,merge:Oe};var fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bu extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends bu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class pp extends Qt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new ln(hs,us,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new ln(hs,us,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new ln(hs,us,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new ln(hs,us,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new ln(hs,us,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new ln(hs,us,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=qn,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Su extends $e{constructor(t,e,n,i,s,r,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mp extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Su(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new he(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:hi});s.uniforms.tEquirect.value=e;const r=new ht(i,s),o=e.minFilter;return e.minFilter===cr&&(e.minFilter=an),new pp(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const da=new P,gp=new P,_p=new Gt;class Ai{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=da.subVectors(n,e).cross(gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_p.getNormalMatrix(t),i=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new br,Wr=new P;class vl{constructor(t=new Ai,e=new Ai,n=new Ai,i=new Ai,s=new Ai,r=new Ai){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],d=n[13],y=n[14],x=n[15];return e[0].setComponents(o-i,u-c,g-f,x-m).normalize(),e[1].setComponents(o+i,u+c,g+f,x+m).normalize(),e[2].setComponents(o+s,u+l,g+p,x+d).normalize(),e[3].setComponents(o-s,u-l,g-p,x-d).normalize(),e[4].setComponents(o-r,u-h,g-_,x-y).normalize(),e[5].setComponents(o+r,u+h,g+_,x+y).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wr.x=i.normal.x>0?t.max.x:t.min.x,Wr.y=i.normal.y>0?t.max.y:t.min.y,Wr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wu(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function vp(a,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,p=a.createBuffer();a.bindBuffer(h,p),a.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const f=h.array,p=h.updateRange;a.bindBuffer(u,l),p.count===-1?a.bufferSubData(u,0,f):(e?a.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):a.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(a.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:r,remove:o,update:c}}class Is extends ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,p=[],_=[],g=[],m=[];for(let d=0;d<h;d++){const y=d*f-r;for(let x=0;x<l;x++){const v=x*u-s;_.push(v,-y,0),g.push(0,0,1),m.push(x/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const x=y+l*d,v=y+l*(d+1),M=y+1+l*(d+1),S=y+1+l*d;p.push(x,v,S),p.push(v,M,S)}this.setIndex(p),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}var xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp="vec3 transformed = vec3( position );",Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Cp=`#ifdef USE_BUMPMAP
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
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
}`,im=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,lm=`#if defined( USE_ENVMAP )
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,pm=`struct PhysicalMaterial {
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
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
#endif`,Lm=`#ifdef USE_MORPHTARGETS
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
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#ifdef USE_UV
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
#endif`,ug=`#ifdef USE_UV
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
#endif`,fg=`#ifdef USE_UV
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
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,bg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Lg=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Dg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,Ug=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,zg=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,Bg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Gg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,jg=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Nt={alphamap_fragment:xp,alphamap_pars_fragment:yp,alphatest_fragment:Mp,alphatest_pars_fragment:bp,aomap_fragment:Sp,aomap_pars_fragment:wp,begin_vertex:Tp,beginnormal_vertex:Ep,bsdfs:Ap,iridescence_fragment:Pp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Ip,color_fragment:Up,color_pars_fragment:Op,color_pars_vertex:zp,color_vertex:Np,common:Fp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Wp,encodings_fragment:jp,encodings_pars_fragment:qp,envmap_fragment:Xp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Zp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:lm,envmap_vertex:Jp,fog_vertex:$p,fog_pars_vertex:Qp,fog_fragment:tm,fog_pars_fragment:em,gradientmap_pars_fragment:nm,lightmap_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:cm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:_m,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:Mm,map_fragment:bm,map_pars_fragment:Sm,map_particle_fragment:wm,map_particle_pars_fragment:Tm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:Am,morphcolor_vertex:Pm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Lm,morphtarget_vertex:Rm,normal_fragment_begin:Dm,normal_fragment_maps:Im,normal_pars_fragment:Um,normal_pars_vertex:Om,normal_vertex:zm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:Vm,output_fragment:Gm,packing:Hm,premultiplied_alpha_fragment:Wm,project_vertex:jm,dithering_fragment:qm,dithering_pars_fragment:Xm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Jm,shadowmap_vertex:$m,shadowmask_pars_fragment:Qm,skinbase_vertex:tg,skinning_pars_vertex:eg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:fg,worldpos_vertex:dg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:vg,cube_frag:xg,depth_vert:yg,depth_frag:Mg,distanceRGBA_vert:bg,distanceRGBA_frag:Sg,equirect_vert:wg,equirect_frag:Tg,linedashed_vert:Eg,linedashed_frag:Ag,meshbasic_vert:Pg,meshbasic_frag:Cg,meshlambert_vert:Lg,meshlambert_frag:Rg,meshmatcap_vert:Dg,meshmatcap_frag:Ig,meshnormal_vert:Ug,meshnormal_frag:Og,meshphong_vert:zg,meshphong_frag:Ng,meshphysical_vert:Fg,meshphysical_frag:kg,meshtoon_vert:Bg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Hg,shadow_vert:Wg,shadow_frag:jg,sprite_vert:qg,sprite_frag:Xg},dt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaTest:{value:0}}},Pn={basic:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Oe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Oe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Oe([dt.points,dt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Oe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Oe([dt.common,dt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Oe([dt.sprite,dt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Oe([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Oe([dt.lights,dt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Pn.physical={uniforms:Oe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const jr={r:0,b:0,g:0};function Yg(a,t,e,n,i,s,r){const o=new Ht(0);let c=s===!0?0:1,l,h,u=null,f=0,p=null;function _(m,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x));const v=a.xr,M=v.getSession&&v.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?g(o,c):x&&x.isColor&&(g(x,1),y=!0),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ro)?(h===void 0&&(h=new ht(new he(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ds(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=x.encoding!==$t,(u!==x||f!==x.version||p!==a.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ht(new Is(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ds(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=x.encoding!==$t,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==a.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=a.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){m.getRGB(jr,Mu(a)),n.buffers.color.setClear(jr.r,jr.g,jr.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:_}}function Zg(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},c=m(null);let l=c,h=!1;function u(I,z,W,q,H){let Q=!1;if(r){const tt=g(q,W,z);l!==tt&&(l=tt,p(l.object)),Q=d(I,q,W,H),Q&&y(I,q,W,H)}else{const tt=z.wireframe===!0;(l.geometry!==q.id||l.program!==W.id||l.wireframe!==tt)&&(l.geometry=q.id,l.program=W.id,l.wireframe=tt,Q=!0)}H!==null&&e.update(H,34963),(Q||h)&&(h=!1,E(I,z,W,q),H!==null&&a.bindBuffer(34963,e.get(H).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?a.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?a.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,z,W){const q=W.wireframe===!0;let H=o[I.id];H===void 0&&(H={},o[I.id]=H);let Q=H[z.id];Q===void 0&&(Q={},H[z.id]=Q);let tt=Q[q];return tt===void 0&&(tt=m(f()),Q[q]=tt),tt}function m(I){const z=[],W=[],q=[];for(let H=0;H<i;H++)z[H]=0,W[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:q,object:I,attributes:{},index:null}}function d(I,z,W,q){const H=l.attributes,Q=z.attributes;let tt=0;const xt=W.getAttributes();for(const it in xt)if(xt[it].location>=0){const Z=H[it];let ct=Q[it];if(ct===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(ct=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(ct=I.instanceColor)),Z===void 0||Z.attribute!==ct||ct&&Z.data!==ct.data)return!0;tt++}return l.attributesNum!==tt||l.index!==q}function y(I,z,W,q){const H={},Q=z.attributes;let tt=0;const xt=W.getAttributes();for(const it in xt)if(xt[it].location>=0){let Z=Q[it];Z===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const ct={};ct.attribute=Z,Z&&Z.data&&(ct.data=Z.data),H[it]=ct,tt++}l.attributes=H,l.attributesNum=tt,l.index=q}function x(){const I=l.newAttributes;for(let z=0,W=I.length;z<W;z++)I[z]=0}function v(I){M(I,0)}function M(I,z){const W=l.newAttributes,q=l.enabledAttributes,H=l.attributeDivisors;W[I]=1,q[I]===0&&(a.enableVertexAttribArray(I),q[I]=1),H[I]!==z&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),H[I]=z)}function S(){const I=l.newAttributes,z=l.enabledAttributes;for(let W=0,q=z.length;W<q;W++)z[W]!==I[W]&&(a.disableVertexAttribArray(W),z[W]=0)}function T(I,z,W,q,H,Q){n.isWebGL2===!0&&(W===5124||W===5125)?a.vertexAttribIPointer(I,z,W,H,Q):a.vertexAttribPointer(I,z,W,q,H,Q)}function E(I,z,W,q){if(n.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=q.attributes,Q=W.getAttributes(),tt=z.defaultAttributeValues;for(const xt in Q){const it=Q[xt];if(it.location>=0){let j=H[xt];if(j===void 0&&(xt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),xt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const Z=j.normalized,ct=j.itemSize,mt=e.get(j);if(mt===void 0)continue;const B=mt.buffer,Lt=mt.type,Ct=mt.bytesPerElement;if(j.isInterleavedBufferAttribute){const at=j.data,Mt=at.stride,nt=j.offset;if(at.isInstancedInterleavedBuffer){for(let K=0;K<it.locationSize;K++)M(it.location+K,at.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let K=0;K<it.locationSize;K++)v(it.location+K);a.bindBuffer(34962,B);for(let K=0;K<it.locationSize;K++)T(it.location+K,ct/it.locationSize,Lt,Z,Mt*Ct,(nt+ct/it.locationSize*K)*Ct)}else{if(j.isInstancedBufferAttribute){for(let at=0;at<it.locationSize;at++)M(it.location+at,j.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let at=0;at<it.locationSize;at++)v(it.location+at);a.bindBuffer(34962,B);for(let at=0;at<it.locationSize;at++)T(it.location+at,ct/it.locationSize,Lt,Z,ct*Ct,ct/it.locationSize*at*Ct)}}else if(tt!==void 0){const Z=tt[xt];if(Z!==void 0)switch(Z.length){case 2:a.vertexAttrib2fv(it.location,Z);break;case 3:a.vertexAttrib3fv(it.location,Z);break;case 4:a.vertexAttrib4fv(it.location,Z);break;default:a.vertexAttrib1fv(it.location,Z)}}}}S()}function b(){N();for(const I in o){const z=o[I];for(const W in z){const q=z[W];for(const H in q)_(q[H].object),delete q[H];delete z[W]}delete o[I]}}function w(I){if(o[I.id]===void 0)return;const z=o[I.id];for(const W in z){const q=z[W];for(const H in q)_(q[H].object),delete q[H];delete z[W]}delete o[I.id]}function O(I){for(const z in o){const W=o[z];if(W[I.id]===void 0)continue;const q=W[I.id];for(const H in q)_(q[H].object),delete q[H];delete W[I.id]}}function N(){D(),h=!0,l!==c&&(l=c,p(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:N,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:v,disableUnusedAttributes:S}}function Kg(a,t,e,n){const i=n.isWebGL2;let s;function r(l){s=l}function o(l,h){a.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,p;if(i)f=a,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,l,h,u),e.update(h,s,u)}this.setMode=r,this.render=o,this.renderInstances=c}function Jg(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=a.getParameter(34930),f=a.getParameter(35660),p=a.getParameter(3379),_=a.getParameter(34076),g=a.getParameter(34921),m=a.getParameter(36347),d=a.getParameter(36348),y=a.getParameter(36349),x=f>0,v=r||t.has("OES_texture_float"),M=x&&v,S=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:S}}function $g(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Ai,o=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=a.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):l();else{const y=s?0:n,x=y*4;let v=d.clippingState||null;c.value=v,v=h(_,f,x,p);for(let M=0;M!==x;++M)v[M]=e[M];d.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const d=p+g*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,v=p;x!==g;++x,v+=4)r.copy(u[x]).applyMatrix4(y,o),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Qg(a){let t=new WeakMap;function e(r,o){return o===Va?r.mapping=Cs:o===Ga&&(r.mapping=Ls),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Va||o===Ga)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new mp(c.height/2);return l.fromEquirectangularTexture(a,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xl extends bu{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gs=4,Hc=[.125,.215,.35,.446,.526,.582],Ri=20,pa=new xl,Wc=new Ht;let ma=null;const Pi=(1+Math.sqrt(5))/2,fs=1/Pi,jc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Pi,fs),new P(0,Pi,-fs),new P(fs,0,Pi),new P(-fs,0,Pi),new P(Pi,fs,0),new P(-Pi,fs,0)];class qc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma),t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:hr,format:yn,encoding:Gi,depthBuffer:!1},i=Xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(s)),this._blurMaterial=e0(s,t,e)}return i}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i){const o=new ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Wc),h.toneMapping=qn,h.autoClear=!1;const p=new An({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),_=new ht(new he,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Wc),g=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):y===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const x=this._cubeSize;qr(i,y*x,d>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Cs||t.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=jc[(i-1)%jc.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ht(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const d=[];let y=0;for(let T=0;T<Ri;++T){const E=T/g,b=Math.exp(-E*E/2);d.push(b),T===0?y+=b:T<m&&(y+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const v=this._sizeLods[i],M=3*v*(i>x-gs?i-x+gs:0),S=4*(this._cubeSize-v);qr(e,M,S,3*v,2*v),c.setRenderTarget(e),c.render(u,pa)}}function t0(a){const t=[],e=[],n=[];let i=a;const s=a-gs+1+Hc.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let c=1/o;r>a-gs?c=Hc[r-a+gs-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,d=1,y=new Float32Array(g*_*p),x=new Float32Array(m*_*p),v=new Float32Array(d*_*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,E=S>2?0:-1,b=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];y.set(b,g*_*S),x.set(f,m*_*S);const w=[S,S,S,S,S,S];v.set(w,d*_*S)}const M=new ee;M.setAttribute("position",new Rn(y,g)),M.setAttribute("uv",new Rn(x,m)),M.setAttribute("faceIndex",new Rn(v,d)),t.push(M),i>gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xc(a,t,e){const n=new Hi(a,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function e0(a,t,e){const n=new Float32Array(Ri),i=new P(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Yc(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Zc(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function n0(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Va||c===Ga,h=c===Cs||c===Ls;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new qc(a)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new qc(a));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function i0(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function s0(a,t,e,n){const i={},s=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],34962);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],34962)}}function l(u){const f=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let x=0,v=y.length;x<v;x+=3){const M=y[x+0],S=y[x+1],T=y[x+2];f.push(M,S,S,T,T,M)}}else{const y=_.array;g=_.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const M=x+0,S=x+1,T=x+2;f.push(M,S,S,T,T,M)}}const m=new(pu(f)?yu:xu)(f,1);m.version=g;const d=s.get(u);d&&t.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function r0(a,t,e,n){const i=n.isWebGL2;let s;function r(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,p){a.drawElements(s,p,o,f*c),e.update(p,s,1)}function u(f,p,_){if(_===0)return;let g,m;if(i)g=a,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,f*c,_),e.update(p,s,_)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u}function o0(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function a0(a,t){return a[0]-t[0]}function l0(a,t){return Math.abs(t[1])-Math.abs(a[1])}function c0(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new be,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(h);if(m===void 0||m.count!==g){let z=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let b=0;x===!0&&(b=1),v===!0&&(b=2),M===!0&&(b=3);let w=h.attributes.position.count*b,O=1;w>t.maxTextureSize&&(O=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const N=new Float32Array(w*O*4*g),D=new _u(N,w,O,g);D.type=Ui,D.needsUpdate=!0;const I=b*4;for(let W=0;W<g;W++){const q=S[W],H=T[W],Q=E[W],tt=w*O*4*W;for(let xt=0;xt<q.count;xt++){const it=xt*I;x===!0&&(r.fromBufferAttribute(q,xt),N[tt+it+0]=r.x,N[tt+it+1]=r.y,N[tt+it+2]=r.z,N[tt+it+3]=0),v===!0&&(r.fromBufferAttribute(H,xt),N[tt+it+4]=r.x,N[tt+it+5]=r.y,N[tt+it+6]=r.z,N[tt+it+7]=0),M===!0&&(r.fromBufferAttribute(Q,xt),N[tt+it+8]=r.x,N[tt+it+9]=r.y,N[tt+it+10]=r.z,N[tt+it+11]=Q.itemSize===4?r.w:1)}}m={count:g,texture:D,size:new lt(w,O)},s.set(h,m),h.addEventListener("dispose",z)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(a,"morphTargetBaseInfluence",y),u.getUniforms().setValue(a,"morphTargetInfluences",f),u.getUniforms().setValue(a,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<_;v++){const M=g[v];M[0]=v,M[1]=f[v]}g.sort(l0);for(let v=0;v<8;v++)v<_&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(a0);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const M=o[v],S=M[0],T=M[1];S!==Number.MAX_SAFE_INTEGER&&T?(m&&h.getAttribute("morphTarget"+v)!==m[S]&&h.setAttribute("morphTarget"+v,m[S]),d&&h.getAttribute("morphNormal"+v)!==d[S]&&h.setAttribute("morphNormal"+v,d[S]),i[v]=T,y+=T):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(a,"morphTargetBaseInfluence",x),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function h0(a,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function r(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}const Tu=new $e,Eu=new _u,Au=new Qd,Pu=new Su,Kc=[],Jc=[],$c=new Float32Array(16),Qc=new Float32Array(9),th=new Float32Array(4);function Gs(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=Kc[i];if(s===void 0&&(s=new Float32Array(i),Kc[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function ge(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function _e(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Io(a,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function u0(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function f0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;a.uniform2fv(this.addr,t),_e(e,t)}}function d0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;a.uniform3fv(this.addr,t),_e(e,t)}}function p0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;a.uniform4fv(this.addr,t),_e(e,t)}}function m0(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;th.set(n),a.uniformMatrix2fv(this.addr,!1,th),_e(e,n)}}function g0(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Qc.set(n),a.uniformMatrix3fv(this.addr,!1,Qc),_e(e,n)}}function _0(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;$c.set(n),a.uniformMatrix4fv(this.addr,!1,$c),_e(e,n)}}function v0(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function x0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;a.uniform2iv(this.addr,t),_e(e,t)}}function y0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;a.uniform3iv(this.addr,t),_e(e,t)}}function M0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;a.uniform4iv(this.addr,t),_e(e,t)}}function b0(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function S0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;a.uniform2uiv(this.addr,t),_e(e,t)}}function w0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;a.uniform3uiv(this.addr,t),_e(e,t)}}function T0(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;a.uniform4uiv(this.addr,t),_e(e,t)}}function E0(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Tu,i)}function A0(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Au,i)}function P0(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pu,i)}function C0(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Eu,i)}function L0(a){switch(a){case 5126:return u0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return b0;case 36294:return S0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return C0}}function R0(a,t){a.uniform1fv(this.addr,t)}function D0(a,t){const e=Gs(t,this.size,2);a.uniform2fv(this.addr,e)}function I0(a,t){const e=Gs(t,this.size,3);a.uniform3fv(this.addr,e)}function U0(a,t){const e=Gs(t,this.size,4);a.uniform4fv(this.addr,e)}function O0(a,t){const e=Gs(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function z0(a,t){const e=Gs(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function N0(a,t){const e=Gs(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function F0(a,t){a.uniform1iv(this.addr,t)}function k0(a,t){a.uniform2iv(this.addr,t)}function B0(a,t){a.uniform3iv(this.addr,t)}function V0(a,t){a.uniform4iv(this.addr,t)}function G0(a,t){a.uniform1uiv(this.addr,t)}function H0(a,t){a.uniform2uiv(this.addr,t)}function W0(a,t){a.uniform3uiv(this.addr,t)}function j0(a,t){a.uniform4uiv(this.addr,t)}function q0(a,t,e){const n=this.cache,i=t.length,s=Io(e,i);ge(n,s)||(a.uniform1iv(this.addr,s),_e(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Tu,s[r])}function X0(a,t,e){const n=this.cache,i=t.length,s=Io(e,i);ge(n,s)||(a.uniform1iv(this.addr,s),_e(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Au,s[r])}function Y0(a,t,e){const n=this.cache,i=t.length,s=Io(e,i);ge(n,s)||(a.uniform1iv(this.addr,s),_e(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Pu,s[r])}function Z0(a,t,e){const n=this.cache,i=t.length,s=Io(e,i);ge(n,s)||(a.uniform1iv(this.addr,s),_e(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Eu,s[r])}function K0(a){switch(a){case 5126:return R0;case 35664:return D0;case 35665:return I0;case 35666:return U0;case 35674:return O0;case 35675:return z0;case 35676:return N0;case 5124:case 35670:return F0;case 35667:case 35671:return k0;case 35668:case 35672:return B0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return H0;case 36295:return W0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}class J0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=L0(e.type)}}class $0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=K0(e.type)}}class Q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function eh(a,t){a.seq.push(t),a.map[t.id]=t}function t_(a,t,e){const n=a.name,i=n.length;for(ga.lastIndex=0;;){const s=ga.exec(n),r=ga.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){eh(e,l===void 0?new J0(o,a,t):new $0(o,a,t));break}else{let u=e.map[o];u===void 0&&(u=new Q0(o),eh(e,u)),e=u}}}class ho{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);t_(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function nh(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let e_=0;function n_(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function i_(a){switch(a){case Gi:return["Linear","( value )"];case $t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function ih(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+n_(a.getShaderSource(t),r)}else return i}function s_(a,t){const e=i_(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function r_(a,t){let e;switch(t){case xd:e="Linear";break;case yd:e="Reinhard";break;case Md:e="OptimizedCineon";break;case bd:e="ACESFilmic";break;case Sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function o_(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function a_(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l_(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Qs(a){return a!==""}function sh(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rh(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(a){return a.replace(c_,h_)}function h_(a,t){const e=Nt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return qa(e)}const u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(a){return a.replace(u_,f_)}function f_(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ah(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function d_(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===$s&&(t="SHADOWMAP_TYPE_VSM"),t}function p_(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Cs:case Ls:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m_(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function g_(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case gl:t="ENVMAP_BLENDING_MULTIPLY";break;case _d:t="ENVMAP_BLENDING_MIX";break;case vd:t="ENVMAP_BLENDING_ADD";break}return t}function __(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v_(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=d_(e),l=p_(e),h=m_(e),u=g_(e),f=__(e),p=e.isWebGL2?"":o_(e),_=a_(s),g=i.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[_].filter(Qs).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(Qs).join(`
`),d.length>0&&(d+=`
`)):(m=[ah(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),d=[p,ah(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==qn?r_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.encodings_pars_fragment,s_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),r=qa(r),r=sh(r,e),r=rh(r,e),o=qa(o),o=sh(o,e),o=rh(o,e),r=oh(r),o=oh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+r,v=y+d+o,M=nh(i,35633,x),S=nh(i,35632,v);if(i.attachShader(g,M),i.attachShader(g,S),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),a.debug.checkShaderErrors){const b=i.getProgramInfoLog(g).trim(),w=i.getShaderInfoLog(M).trim(),O=i.getShaderInfoLog(S).trim();let N=!0,D=!0;if(i.getProgramParameter(g,35714)===!1)if(N=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,M,S);else{const I=ih(i,M,"vertex"),z=ih(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+b+`
`+I+`
`+z)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(w===""||O==="")&&(D=!1);D&&(this.diagnostics={runnable:N,programLog:b,vertexShader:{log:w,prefix:m},fragmentShader:{log:O,prefix:d}})}i.deleteShader(M),i.deleteShader(S);let T;this.getUniforms=function(){return T===void 0&&(T=new ho(i,g)),T};let E;return this.getAttributes=function(){return E===void 0&&(E=l_(i,g)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=e_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=S,this}let x_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M_(t),e.set(t,n)),n}}class M_{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}}function b_(a,t,e,n,i,s,r){const o=new _l,c=new y_,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===1?"uv2":"uv"}function m(b,w,O,N,D){const I=N.fog,z=D.geometry,W=b.isMeshStandardMaterial?N.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),H=!!q&&q.mapping===Ro?q.image.height:null,Q=_[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xt=tt!==void 0?tt.length:0;let it=0;z.morphAttributes.position!==void 0&&(it=1),z.morphAttributes.normal!==void 0&&(it=2),z.morphAttributes.color!==void 0&&(it=3);let j,Z,ct,mt;if(Q){const _t=Pn[Q];j=_t.vertexShader,Z=_t.fragmentShader}else j=b.vertexShader,Z=b.fragmentShader,c.update(b),ct=c.getVertexShaderID(b),mt=c.getFragmentShaderID(b);const B=a.getRenderTarget(),Lt=D.isInstancedMesh===!0,Ct=!!b.map,at=!!b.matcap,Mt=!!q,nt=!!b.aoMap,K=!!b.lightMap,et=!!b.bumpMap,vt=!!b.normalMap,ut=!!b.displacementMap,At=!!b.emissiveMap,Pt=!!b.metalnessMap,wt=!!b.roughnessMap,Ut=b.clearcoat>0,jt=b.iridescence>0,L=b.sheen>0,A=b.transmission>0,G=Ut&&!!b.clearcoatMap,st=Ut&&!!b.clearcoatNormalMap,rt=Ut&&!!b.clearcoatRoughnessMap,ft=jt&&!!b.iridescenceMap,R=jt&&!!b.iridescenceThicknessMap,$=L&&!!b.sheenColorMap,V=L&&!!b.sheenRoughnessMap,pt=!!b.specularMap,yt=!!b.specularColorMap,St=!!b.specularIntensityMap,gt=A&&!!b.transmissionMap,bt=A&&!!b.thicknessMap,Dt=!!b.gradientMap,Ft=!!b.alphaMap,le=b.alphaTest>0,U=!!b.extensions,Y=!!z.attributes.uv2;return{isWebGL2:h,shaderID:Q,shaderName:b.type,vertexShader:j,fragmentShader:Z,defines:b.defines,customVertexShaderID:ct,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:Lt,instancingColor:Lt&&D.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?a.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Gi,map:Ct,matcap:at,envMap:Mt,envMapMode:Mt&&q.mapping,envMapCubeUVHeight:H,aoMap:nt,lightMap:K,bumpMap:et,normalMap:vt,displacementMap:f&&ut,emissiveMap:At,normalMapObjectSpace:vt&&b.normalMapType===Gd,normalMapTangentSpace:vt&&b.normalMapType===fu,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&b.map.encoding===$t,metalnessMap:Pt,roughnessMap:wt,clearcoat:Ut,clearcoatMap:G,clearcoatNormalMap:st,clearcoatRoughnessMap:rt,iridescence:jt,iridescenceMap:ft,iridescenceThicknessMap:R,sheen:L,sheenColorMap:$,sheenRoughnessMap:V,specularMap:pt,specularColorMap:yt,specularIntensityMap:St,transmission:A,transmissionMap:gt,thicknessMap:bt,gradientMap:Dt,opaque:b.transparent===!1&&b.blending===bs,alphaMap:Ft,alphaTest:le,combine:b.combine,mapUv:Ct&&g(b.map.channel),aoMapUv:nt&&g(b.aoMap.channel),lightMapUv:K&&g(b.lightMap.channel),bumpMapUv:et&&g(b.bumpMap.channel),normalMapUv:vt&&g(b.normalMap.channel),displacementMapUv:ut&&g(b.displacementMap.channel),emissiveMapUv:At&&g(b.emissiveMap.channel),metalnessMapUv:Pt&&g(b.metalnessMap.channel),roughnessMapUv:wt&&g(b.roughnessMap.channel),clearcoatMapUv:G&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:R&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:$&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(b.sheenRoughnessMap.channel),specularMapUv:pt&&g(b.specularMap.channel),specularColorMapUv:yt&&g(b.specularColorMap.channel),specularIntensityMapUv:St&&g(b.specularIntensityMap.channel),transmissionMapUv:gt&&g(b.transmissionMap.channel),thicknessMapUv:bt&&g(b.thicknessMap.channel),alphaMapUv:Ft&&g(b.alphaMap.channel),vertexTangents:vt&&!!z.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs2:Y,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ct||Ft),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&O.length>0,shadowMapType:a.shadowMap.type,toneMapping:b.toneMapped?a.toneMapping:qn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:U&&b.extensions.derivatives===!0,extensionFragDepth:U&&b.extensions.fragDepth===!0,extensionDrawBuffers:U&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)w.push(O),w.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(y(w,b),x(w,b),w.push(a.outputEncoding)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputEncoding),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUvs2&&o.enable(13),w.vertexTangents&&o.enable(14),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.decodeVideoTexture&&o.enable(17),w.opaque&&o.enable(18),w.pointsUvs&&o.enable(19),b.push(o.mask)}function v(b){const w=_[b.type];let O;if(w){const N=Pn[w];O=up.clone(N.uniforms)}else O=b.uniforms;return O}function M(b,w){let O;for(let N=0,D=l.length;N<D;N++){const I=l[N];if(I.cacheKey===w){O=I,++O.usedTimes;break}}return O===void 0&&(O=new v_(a,w,b,s),l.push(O)),O}function S(b){if(--b.usedTimes===0){const w=l.indexOf(b);l[w]=l[l.length-1],l.pop(),b.destroy()}}function T(b){c.remove(b)}function E(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:M,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:E}}function S_(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function w_(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function lh(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function ch(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,p,_,g,m){let d=a[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},a[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function o(u,f,p,_,g,m){const d=r(u,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,_,g,m){const d=r(u,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||w_),n.length>1&&n.sort(f||lh),i.length>1&&i.sort(f||lh)}function h(){for(let u=t,f=a.length;u<f;u++){const p=a[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function T_(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new ch,a.set(n,[r])):i>=s.length?(r=new ch,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function E_(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return a[t.id]=e,e}}}function A_(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let P_=0;function C_(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function L_(a,t){const e=new E_,n=A_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,r=new ne,o=new ne;function c(h,u){let f=0,p=0,_=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,m=0,d=0,y=0,x=0,v=0,M=0,S=0,T=0,E=0;h.sort(C_);const b=u===!0?Math.PI:1;for(let O=0,N=h.length;O<N;O++){const D=h[O],I=D.color,z=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*z*b,p+=I.g*z*b,_+=I.b*z*b;else if(D.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],z);else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const Q=D.shadow,tt=n.get(D);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=H,g++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(I).multiplyScalar(z*b),H.distance=W,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[d]=H;const Q=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,Q.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[d]=Q.matrix,D.castShadow){const tt=n.get(D);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.spotShadow[d]=tt,i.spotShadowMap[d]=q,S++}d++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(I).multiplyScalar(z),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=H,y++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*b),H.distance=D.distance,H.decay=D.decay,D.castShadow){const Q=D.shadow,tt=n.get(D);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=H,m++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(z*b),H.groundColor.copy(D.groundColor).multiplyScalar(z*b),i.hemi[x]=H,x++}}y>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==d||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==v||w.numPointShadows!==M||w.numSpotShadows!==S||w.numSpotMaps!==T)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,w.directionalLength=g,w.pointLength=m,w.spotLength=d,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=v,w.numPointShadows=M,w.numSpotShadows=S,w.numSpotMaps=T,i.version=P_++)}function l(h,u){let f=0,p=0,_=0,g=0,m=0;const d=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const v=h[y];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),f++}else if(v.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),_++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function hh(a,t){const e=new L_(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function R_(a,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let c;return o===void 0?(c=new hh(a,t),e.set(s,[c])):r>=o.length?(c=new hh(a,t),o.push(c)):c=o[r],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class D_ extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class I_ extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
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
}`;function z_(a,t,e){let n=new vl;const i=new lt,s=new lt,r=new be,o=new D_({depthPacking:Vd}),c=new I_,l={},h=e.maxTextureSize,u={[pi]:ke,[ke]:pi,[vn]:vn},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:U_,fragmentShader:O_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new ee;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ht(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml,this.render=function(v,M,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const T=a.getRenderTarget(),E=a.getActiveCubeFace(),b=a.getActiveMipmapLevel(),w=a.state;w.setBlending(hi),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let O=0,N=v.length;O<N;O++){const D=v[O],I=D.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const z=I.getFrameExtents();if(i.multiply(z),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,I.mapSize.y=s.y)),I.map===null){const q=this.type!==$s?{minFilter:ze,magFilter:ze}:{};I.map=new Hi(i.x,i.y,q),I.map.texture.name=D.name+".shadowMap",I.camera.updateProjectionMatrix()}a.setRenderTarget(I.map),a.clear();const W=I.getViewportCount();for(let q=0;q<W;q++){const H=I.getViewport(q);r.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),w.viewport(r),I.updateMatrices(D,q),n=I.getFrustum(),x(M,S,I.camera,D,this.type)}I.isPointLightShadow!==!0&&this.type===$s&&d(I,S),I.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(T,E,b)};function d(v,M){const S=t.update(g);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Hi(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,a.setRenderTarget(v.mapPass),a.clear(),a.renderBufferDirect(M,null,S,f,g,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,a.setRenderTarget(v.map),a.clear(),a.renderBufferDirect(M,null,S,p,g,null)}function y(v,M,S,T){let E=null;const b=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(b!==void 0)E=b;else if(E=S.isPointLight===!0?c:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const w=E.uuid,O=M.uuid;let N=l[w];N===void 0&&(N={},l[w]=N);let D=N[O];D===void 0&&(D=E.clone(),N[O]=D),E=D}if(E.visible=M.visible,E.wireframe=M.wireframe,T===$s?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:u[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const w=a.properties.get(E);w.light=S}return E}function x(v,M,S,T,E){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===$s)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);const O=t.update(v),N=v.material;if(Array.isArray(N)){const D=O.groups;for(let I=0,z=D.length;I<z;I++){const W=D[I],q=N[W.materialIndex];if(q&&q.visible){const H=y(v,q,T,E);a.renderBufferDirect(S,null,O,H,v,W)}}}else if(N.visible){const D=y(v,N,T,E);a.renderBufferDirect(S,null,O,D,v,null)}}const w=v.children;for(let O=0,N=w.length;O<N;O++)x(w[O],M,S,T,E)}}function N_(a,t,e){const n=e.isWebGL2;function i(){let U=!1;const Y=new be;let ot=null;const _t=new be(0,0,0,0);return{setMask:function(Tt){ot!==Tt&&!U&&(a.colorMask(Tt,Tt,Tt,Tt),ot=Tt)},setLocked:function(Tt){U=Tt},setClear:function(Tt,Jt,ie,Te,$n){$n===!0&&(Tt*=Te,Jt*=Te,ie*=Te),Y.set(Tt,Jt,ie,Te),_t.equals(Y)===!1&&(a.clearColor(Tt,Jt,ie,Te),_t.copy(Y))},reset:function(){U=!1,ot=null,_t.set(-1,0,0,0)}}}function s(){let U=!1,Y=null,ot=null,_t=null;return{setTest:function(Tt){Tt?B(2929):Lt(2929)},setMask:function(Tt){Y!==Tt&&!U&&(a.depthMask(Tt),Y=Tt)},setFunc:function(Tt){if(ot!==Tt){switch(Tt){case ud:a.depthFunc(512);break;case ka:a.depthFunc(519);break;case fd:a.depthFunc(513);break;case Ba:a.depthFunc(515);break;case dd:a.depthFunc(514);break;case pd:a.depthFunc(518);break;case md:a.depthFunc(516);break;case gd:a.depthFunc(517);break;default:a.depthFunc(515)}ot=Tt}},setLocked:function(Tt){U=Tt},setClear:function(Tt){_t!==Tt&&(a.clearDepth(Tt),_t=Tt)},reset:function(){U=!1,Y=null,ot=null,_t=null}}}function r(){let U=!1,Y=null,ot=null,_t=null,Tt=null,Jt=null,ie=null,Te=null,$n=null;return{setTest:function(ce){U||(ce?B(2960):Lt(2960))},setMask:function(ce){Y!==ce&&!U&&(a.stencilMask(ce),Y=ce)},setFunc:function(ce,en,Sn){(ot!==ce||_t!==en||Tt!==Sn)&&(a.stencilFunc(ce,en,Sn),ot=ce,_t=en,Tt=Sn)},setOp:function(ce,en,Sn){(Jt!==ce||ie!==en||Te!==Sn)&&(a.stencilOp(ce,en,Sn),Jt=ce,ie=en,Te=Sn)},setLocked:function(ce){U=ce},setClear:function(ce){$n!==ce&&(a.clearStencil(ce),$n=ce)},reset:function(){U=!1,Y=null,ot=null,_t=null,Tt=null,Jt=null,ie=null,Te=null,$n=null}}}const o=new i,c=new s,l=new r,h=new WeakMap,u=new WeakMap;let f={},p={},_=new WeakMap,g=[],m=null,d=!1,y=null,x=null,v=null,M=null,S=null,T=null,E=null,b=!1,w=null,O=null,N=null,D=null,I=null;const z=a.getParameter(35661);let W=!1,q=0;const H=a.getParameter(7938);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=q>=2);let Q=null,tt={};const xt=a.getParameter(3088),it=a.getParameter(2978),j=new be().fromArray(xt),Z=new be().fromArray(it);function ct(U,Y,ot){const _t=new Uint8Array(4),Tt=a.createTexture();a.bindTexture(U,Tt),a.texParameteri(U,10241,9728),a.texParameteri(U,10240,9728);for(let Jt=0;Jt<ot;Jt++)a.texImage2D(Y+Jt,0,6408,1,1,0,6408,5121,_t);return Tt}const mt={};mt[3553]=ct(3553,3553,1),mt[34067]=ct(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),B(2929),c.setFunc(Ba),ut(!1),At(Kl),B(2884),et(hi);function B(U){f[U]!==!0&&(a.enable(U),f[U]=!0)}function Lt(U){f[U]!==!1&&(a.disable(U),f[U]=!1)}function Ct(U,Y){return p[U]!==Y?(a.bindFramebuffer(U,Y),p[U]=Y,n&&(U===36009&&(p[36160]=Y),U===36160&&(p[36009]=Y)),!0):!1}function at(U,Y){let ot=g,_t=!1;if(U)if(ot=_.get(Y),ot===void 0&&(ot=[],_.set(Y,ot)),U.isWebGLMultipleRenderTargets){const Tt=U.texture;if(ot.length!==Tt.length||ot[0]!==36064){for(let Jt=0,ie=Tt.length;Jt<ie;Jt++)ot[Jt]=36064+Jt;ot.length=Tt.length,_t=!0}}else ot[0]!==36064&&(ot[0]=36064,_t=!0);else ot[0]!==1029&&(ot[0]=1029,_t=!0);_t&&(e.isWebGL2?a.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Mt(U){return m!==U?(a.useProgram(U),m=U,!0):!1}const nt={[ms]:32774,[td]:32778,[ed]:32779};if(n)nt[tc]=32775,nt[ec]=32776;else{const U=t.get("EXT_blend_minmax");U!==null&&(nt[tc]=U.MIN_EXT,nt[ec]=U.MAX_EXT)}const K={[nd]:0,[id]:1,[sd]:768,[lu]:770,[hd]:776,[ld]:774,[od]:772,[rd]:769,[cu]:771,[cd]:775,[ad]:773};function et(U,Y,ot,_t,Tt,Jt,ie,Te){if(U===hi){d===!0&&(Lt(3042),d=!1);return}if(d===!1&&(B(3042),d=!0),U!==Qf){if(U!==y||Te!==b){if((x!==ms||S!==ms)&&(a.blendEquation(32774),x=ms,S=ms),Te)switch(U){case bs:a.blendFuncSeparate(1,771,1,771);break;case Jl:a.blendFunc(1,1);break;case $l:a.blendFuncSeparate(0,769,0,1);break;case Ql:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:a.blendFuncSeparate(770,771,1,771);break;case Jl:a.blendFunc(770,1);break;case $l:a.blendFuncSeparate(0,769,0,1);break;case Ql:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,M=null,T=null,E=null,y=U,b=Te}return}Tt=Tt||Y,Jt=Jt||ot,ie=ie||_t,(Y!==x||Tt!==S)&&(a.blendEquationSeparate(nt[Y],nt[Tt]),x=Y,S=Tt),(ot!==v||_t!==M||Jt!==T||ie!==E)&&(a.blendFuncSeparate(K[ot],K[_t],K[Jt],K[ie]),v=ot,M=_t,T=Jt,E=ie),y=U,b=!1}function vt(U,Y){U.side===vn?Lt(2884):B(2884);let ot=U.side===ke;Y&&(ot=!ot),ut(ot),U.blending===bs&&U.transparent===!1?et(hi):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const _t=U.stencilWrite;l.setTest(_t),_t&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?B(32926):Lt(32926)}function ut(U){w!==U&&(U?a.frontFace(2304):a.frontFace(2305),w=U)}function At(U){U!==Kf?(B(2884),U!==O&&(U===Kl?a.cullFace(1029):U===Jf?a.cullFace(1028):a.cullFace(1032))):Lt(2884),O=U}function Pt(U){U!==N&&(W&&a.lineWidth(U),N=U)}function wt(U,Y,ot){U?(B(32823),(D!==Y||I!==ot)&&(a.polygonOffset(Y,ot),D=Y,I=ot)):Lt(32823)}function Ut(U){U?B(3089):Lt(3089)}function jt(U){U===void 0&&(U=33984+z-1),Q!==U&&(a.activeTexture(U),Q=U)}function L(U,Y,ot){ot===void 0&&(Q===null?ot=33984+z-1:ot=Q);let _t=tt[ot];_t===void 0&&(_t={type:void 0,texture:void 0},tt[ot]=_t),(_t.type!==U||_t.texture!==Y)&&(Q!==ot&&(a.activeTexture(ot),Q=ot),a.bindTexture(U,Y||mt[U]),_t.type=U,_t.texture=Y)}function A(){const U=tt[Q];U!==void 0&&U.type!==void 0&&(a.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function G(){try{a.compressedTexImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{a.compressedTexImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{a.texSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{a.texSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{a.texStorage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{a.texStorage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{a.texImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{a.texImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(U){j.equals(U)===!1&&(a.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function bt(U){Z.equals(U)===!1&&(a.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function Dt(U,Y){let ot=u.get(Y);ot===void 0&&(ot=new WeakMap,u.set(Y,ot));let _t=ot.get(U);_t===void 0&&(_t=a.getUniformBlockIndex(Y,U.name),ot.set(U,_t))}function Ft(U,Y){const _t=u.get(Y).get(U);h.get(Y)!==_t&&(a.uniformBlockBinding(Y,_t,U.__bindingPointIndex),h.set(Y,_t))}function le(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},Q=null,tt={},p={},_=new WeakMap,g=[],m=null,d=!1,y=null,x=null,v=null,M=null,S=null,T=null,E=null,b=!1,w=null,O=null,N=null,D=null,I=null,j.set(0,0,a.canvas.width,a.canvas.height),Z.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:B,disable:Lt,bindFramebuffer:Ct,drawBuffers:at,useProgram:Mt,setBlending:et,setMaterial:vt,setFlipSided:ut,setCullFace:At,setLineWidth:Pt,setPolygonOffset:wt,setScissorTest:Ut,activeTexture:jt,bindTexture:L,unbindTexture:A,compressedTexImage2D:G,compressedTexImage3D:st,texImage2D:yt,texImage3D:St,updateUBOMapping:Dt,uniformBlockBinding:Ft,texStorage2D:V,texStorage3D:pt,texSubImage2D:rt,texSubImage3D:ft,compressedTexSubImage2D:R,compressedTexSubImage3D:$,scissor:gt,viewport:bt,reset:le}}function F_(a,t,e,n,i,s,r){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,A){return d?new OffscreenCanvas(L,A):Mo("canvas")}function x(L,A,G,st){let rt=1;if((L.width>st||L.height>st)&&(rt=st/Math.max(L.width,L.height)),rt<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ft=A?jd:Math.floor,R=ft(rt*L.width),$=ft(rt*L.height);g===void 0&&(g=y(R,$));const V=G?y(R,$):g;return V.width=R,V.height=$,V.getContext("2d").drawImage(L,0,0,R,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+R+"x"+$+")."),V}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return Pc(L.width)&&Pc(L.height)}function M(L){return o?!1:L.wrapS!==xn||L.wrapT!==xn||L.minFilter!==ze&&L.minFilter!==an}function S(L,A){return L.generateMipmaps&&A&&L.minFilter!==ze&&L.minFilter!==an}function T(L){a.generateMipmap(L)}function E(L,A,G,st,rt=!1){if(o===!1)return A;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=A;return A===6403&&(G===5126&&(ft=33326),G===5131&&(ft=33325),G===5121&&(ft=33321)),A===33319&&(G===5126&&(ft=33328),G===5131&&(ft=33327),G===5121&&(ft=33323)),A===6408&&(G===5126&&(ft=34836),G===5131&&(ft=34842),G===5121&&(ft=st===$t&&rt===!1?35907:32856),G===32819&&(ft=32854),G===32820&&(ft=32855)),(ft===33325||ft===33326||ft===33327||ft===33328||ft===34842||ft===34836)&&t.get("EXT_color_buffer_float"),ft}function b(L,A,G){return S(L,G)===!0||L.isFramebufferTexture&&L.minFilter!==ze&&L.minFilter!==an?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){return L===ze||L===nc||L===Go?9728:9729}function O(L){const A=L.target;A.removeEventListener("dispose",O),D(A),A.isVideoTexture&&_.delete(A)}function N(L){const A=L.target;A.removeEventListener("dispose",N),z(A)}function D(L){const A=n.get(L);if(A.__webglInit===void 0)return;const G=L.source,st=m.get(G);if(st){const rt=st[A.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&I(L),Object.keys(st).length===0&&m.delete(G)}n.remove(L)}function I(L){const A=n.get(L);a.deleteTexture(A.__webglTexture);const G=L.source,st=m.get(G);delete st[A.__cacheKey],r.memory.textures--}function z(L){const A=L.texture,G=n.get(L),st=n.get(A);if(st.__webglTexture!==void 0&&(a.deleteTexture(st.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)a.deleteFramebuffer(G.__webglFramebuffer[rt]),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer[rt]);else{if(a.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&a.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let rt=0;rt<G.__webglColorRenderbuffer.length;rt++)G.__webglColorRenderbuffer[rt]&&a.deleteRenderbuffer(G.__webglColorRenderbuffer[rt]);G.__webglDepthRenderbuffer&&a.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let rt=0,ft=A.length;rt<ft;rt++){const R=n.get(A[rt]);R.__webglTexture&&(a.deleteTexture(R.__webglTexture),r.memory.textures--),n.remove(A[rt])}n.remove(A),n.remove(L)}let W=0;function q(){W=0}function H(){const L=W;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),W+=1,L}function Q(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.encoding),A.join()}function tt(L,A){const G=n.get(L);if(L.isVideoTexture&&Ut(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(G,L,A);return}}e.bindTexture(3553,G.__webglTexture,33984+A)}function xt(L,A){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Lt(G,L,A);return}e.bindTexture(35866,G.__webglTexture,33984+A)}function it(L,A){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Lt(G,L,A);return}e.bindTexture(32879,G.__webglTexture,33984+A)}function j(L,A){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Ct(G,L,A);return}e.bindTexture(34067,G.__webglTexture,33984+A)}const Z={[Ha]:10497,[xn]:33071,[Wa]:33648},ct={[ze]:9728,[nc]:9984,[Go]:9986,[an]:9729,[wd]:9985,[cr]:9987};function mt(L,A,G){if(G?(a.texParameteri(L,10242,Z[A.wrapS]),a.texParameteri(L,10243,Z[A.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,Z[A.wrapR]),a.texParameteri(L,10240,ct[A.magFilter]),a.texParameteri(L,10241,ct[A.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(A.wrapS!==xn||A.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,w(A.magFilter)),a.texParameteri(L,10241,w(A.minFilter)),A.minFilter!==ze&&A.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===ze||A.minFilter!==Go&&A.minFilter!==cr||A.type===Ui&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===hr&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(a.texParameterf(L,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function B(L,A){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const st=A.source;let rt=m.get(st);rt===void 0&&(rt={},m.set(st,rt));const ft=Q(A);if(ft!==L.__cacheKey){rt[ft]===void 0&&(rt[ft]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,G=!0),rt[ft].usedTimes++;const R=rt[L.__cacheKey];R!==void 0&&(rt[L.__cacheKey].usedTimes--,R.usedTimes===0&&I(A)),L.__cacheKey=ft,L.__webglTexture=rt[ft].texture}return G}function Lt(L,A,G){let st=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(st=35866),A.isData3DTexture&&(st=32879);const rt=B(L,A),ft=A.source;e.bindTexture(st,L.__webglTexture,33984+G);const R=n.get(ft);if(ft.version!==R.__version||rt===!0){e.activeTexture(33984+G),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const $=M(A)&&v(A.image)===!1;let V=x(A.image,$,!1,h);V=jt(A,V);const pt=v(V)||o,yt=s.convert(A.format,A.encoding);let St=s.convert(A.type),gt=E(A.internalFormat,yt,St,A.encoding,A.isVideoTexture);mt(st,A,pt);let bt;const Dt=A.mipmaps,Ft=o&&A.isVideoTexture!==!0,le=R.__version===void 0||rt===!0,U=b(A,V,pt);if(A.isDepthTexture)gt=6402,o?A.type===Ui?gt=36012:A.type===Ii?gt=33190:A.type===Ss?gt=35056:gt=33189:A.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ni&&gt===6402&&A.type!==uu&&A.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ii,St=s.convert(A.type)),A.format===Rs&&gt===6402&&(gt=34041,A.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ss,St=s.convert(A.type))),le&&(Ft?e.texStorage2D(3553,1,gt,V.width,V.height):e.texImage2D(3553,0,gt,V.width,V.height,0,yt,St,null));else if(A.isDataTexture)if(Dt.length>0&&pt){Ft&&le&&e.texStorage2D(3553,U,gt,Dt[0].width,Dt[0].height);for(let Y=0,ot=Dt.length;Y<ot;Y++)bt=Dt[Y],Ft?e.texSubImage2D(3553,Y,0,0,bt.width,bt.height,yt,St,bt.data):e.texImage2D(3553,Y,gt,bt.width,bt.height,0,yt,St,bt.data);A.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(3553,U,gt,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,yt,St,V.data)):e.texImage2D(3553,0,gt,V.width,V.height,0,yt,St,V.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ft&&le&&e.texStorage3D(35866,U,gt,Dt[0].width,Dt[0].height,V.depth);for(let Y=0,ot=Dt.length;Y<ot;Y++)bt=Dt[Y],A.format!==yn?yt!==null?Ft?e.compressedTexSubImage3D(35866,Y,0,0,0,bt.width,bt.height,V.depth,yt,bt.data,0,0):e.compressedTexImage3D(35866,Y,gt,bt.width,bt.height,V.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage3D(35866,Y,0,0,0,bt.width,bt.height,V.depth,yt,St,bt.data):e.texImage3D(35866,Y,gt,bt.width,bt.height,V.depth,0,yt,St,bt.data)}else{Ft&&le&&e.texStorage2D(3553,U,gt,Dt[0].width,Dt[0].height);for(let Y=0,ot=Dt.length;Y<ot;Y++)bt=Dt[Y],A.format!==yn?yt!==null?Ft?e.compressedTexSubImage2D(3553,Y,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(3553,Y,gt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage2D(3553,Y,0,0,bt.width,bt.height,yt,St,bt.data):e.texImage2D(3553,Y,gt,bt.width,bt.height,0,yt,St,bt.data)}else if(A.isDataArrayTexture)Ft?(le&&e.texStorage3D(35866,U,gt,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,yt,St,V.data)):e.texImage3D(35866,0,gt,V.width,V.height,V.depth,0,yt,St,V.data);else if(A.isData3DTexture)Ft?(le&&e.texStorage3D(32879,U,gt,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,yt,St,V.data)):e.texImage3D(32879,0,gt,V.width,V.height,V.depth,0,yt,St,V.data);else if(A.isFramebufferTexture){if(le)if(Ft)e.texStorage2D(3553,U,gt,V.width,V.height);else{let Y=V.width,ot=V.height;for(let _t=0;_t<U;_t++)e.texImage2D(3553,_t,gt,Y,ot,0,yt,St,null),Y>>=1,ot>>=1}}else if(Dt.length>0&&pt){Ft&&le&&e.texStorage2D(3553,U,gt,Dt[0].width,Dt[0].height);for(let Y=0,ot=Dt.length;Y<ot;Y++)bt=Dt[Y],Ft?e.texSubImage2D(3553,Y,0,0,yt,St,bt):e.texImage2D(3553,Y,gt,yt,St,bt);A.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(3553,U,gt,V.width,V.height),e.texSubImage2D(3553,0,0,0,yt,St,V)):e.texImage2D(3553,0,gt,yt,St,V);S(A,pt)&&T(st),R.__version=ft.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ct(L,A,G){if(A.image.length!==6)return;const st=B(L,A),rt=A.source;e.bindTexture(34067,L.__webglTexture,33984+G);const ft=n.get(rt);if(rt.version!==ft.__version||st===!0){e.activeTexture(33984+G),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const R=A.isCompressedTexture||A.image[0].isCompressedTexture,$=A.image[0]&&A.image[0].isDataTexture,V=[];for(let Y=0;Y<6;Y++)!R&&!$?V[Y]=x(A.image[Y],!1,!0,l):V[Y]=$?A.image[Y].image:A.image[Y],V[Y]=jt(A,V[Y]);const pt=V[0],yt=v(pt)||o,St=s.convert(A.format,A.encoding),gt=s.convert(A.type),bt=E(A.internalFormat,St,gt,A.encoding),Dt=o&&A.isVideoTexture!==!0,Ft=ft.__version===void 0||st===!0;let le=b(A,pt,yt);mt(34067,A,yt);let U;if(R){Dt&&Ft&&e.texStorage2D(34067,le,bt,pt.width,pt.height);for(let Y=0;Y<6;Y++){U=V[Y].mipmaps;for(let ot=0;ot<U.length;ot++){const _t=U[ot];A.format!==yn?St!==null?Dt?e.compressedTexSubImage2D(34069+Y,ot,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(34069+Y,ot,bt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(34069+Y,ot,0,0,_t.width,_t.height,St,gt,_t.data):e.texImage2D(34069+Y,ot,bt,_t.width,_t.height,0,St,gt,_t.data)}}}else{U=A.mipmaps,Dt&&Ft&&(U.length>0&&le++,e.texStorage2D(34067,le,bt,V[0].width,V[0].height));for(let Y=0;Y<6;Y++)if($){Dt?e.texSubImage2D(34069+Y,0,0,0,V[Y].width,V[Y].height,St,gt,V[Y].data):e.texImage2D(34069+Y,0,bt,V[Y].width,V[Y].height,0,St,gt,V[Y].data);for(let ot=0;ot<U.length;ot++){const Tt=U[ot].image[Y].image;Dt?e.texSubImage2D(34069+Y,ot+1,0,0,Tt.width,Tt.height,St,gt,Tt.data):e.texImage2D(34069+Y,ot+1,bt,Tt.width,Tt.height,0,St,gt,Tt.data)}}else{Dt?e.texSubImage2D(34069+Y,0,0,0,St,gt,V[Y]):e.texImage2D(34069+Y,0,bt,St,gt,V[Y]);for(let ot=0;ot<U.length;ot++){const _t=U[ot];Dt?e.texSubImage2D(34069+Y,ot+1,0,0,St,gt,_t.image[Y]):e.texImage2D(34069+Y,ot+1,bt,St,gt,_t.image[Y])}}}S(A,yt)&&T(34067),ft.__version=rt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function at(L,A,G,st,rt){const ft=s.convert(G.format,G.encoding),R=s.convert(G.type),$=E(G.internalFormat,ft,R,G.encoding);n.get(A).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,$,A.width,A.height,A.depth,0,ft,R,null):e.texImage2D(rt,0,$,A.width,A.height,0,ft,R,null)),e.bindFramebuffer(36160,L),wt(A)?f.framebufferTexture2DMultisampleEXT(36160,st,rt,n.get(G).__webglTexture,0,Pt(A)):(rt===3553||rt>=34069&&rt<=34074)&&a.framebufferTexture2D(36160,st,rt,n.get(G).__webglTexture,0),e.bindFramebuffer(36160,null)}function Mt(L,A,G){if(a.bindRenderbuffer(36161,L),A.depthBuffer&&!A.stencilBuffer){let st=33189;if(G||wt(A)){const rt=A.depthTexture;rt&&rt.isDepthTexture&&(rt.type===Ui?st=36012:rt.type===Ii&&(st=33190));const ft=Pt(A);wt(A)?f.renderbufferStorageMultisampleEXT(36161,ft,st,A.width,A.height):a.renderbufferStorageMultisample(36161,ft,st,A.width,A.height)}else a.renderbufferStorage(36161,st,A.width,A.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(A.depthBuffer&&A.stencilBuffer){const st=Pt(A);G&&wt(A)===!1?a.renderbufferStorageMultisample(36161,st,35056,A.width,A.height):wt(A)?f.renderbufferStorageMultisampleEXT(36161,st,35056,A.width,A.height):a.renderbufferStorage(36161,34041,A.width,A.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const st=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let rt=0;rt<st.length;rt++){const ft=st[rt],R=s.convert(ft.format,ft.encoding),$=s.convert(ft.type),V=E(ft.internalFormat,R,$,ft.encoding),pt=Pt(A);G&&wt(A)===!1?a.renderbufferStorageMultisample(36161,pt,V,A.width,A.height):wt(A)?f.renderbufferStorageMultisampleEXT(36161,pt,V,A.width,A.height):a.renderbufferStorage(36161,V,A.width,A.height)}}a.bindRenderbuffer(36161,null)}function nt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),tt(A.depthTexture,0);const st=n.get(A.depthTexture).__webglTexture,rt=Pt(A);if(A.depthTexture.format===Ni)wt(A)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,st,0,rt):a.framebufferTexture2D(36160,36096,3553,st,0);else if(A.depthTexture.format===Rs)wt(A)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,st,0,rt):a.framebufferTexture2D(36160,33306,3553,st,0);else throw new Error("Unknown depthTexture format")}function K(L){const A=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");nt(A.__webglFramebuffer,L)}else if(G){A.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(36160,A.__webglFramebuffer[st]),A.__webglDepthbuffer[st]=a.createRenderbuffer(),Mt(A.__webglDepthbuffer[st],L,!1)}else e.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),Mt(A.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function et(L,A,G){const st=n.get(L);A!==void 0&&at(st.__webglFramebuffer,L,L.texture,36064,3553),G!==void 0&&K(L)}function vt(L){const A=L.texture,G=n.get(L),st=n.get(A);L.addEventListener("dispose",N),L.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=a.createTexture()),st.__version=A.version,r.memory.textures++);const rt=L.isWebGLCubeRenderTarget===!0,ft=L.isWebGLMultipleRenderTargets===!0,R=v(L)||o;if(rt){G.__webglFramebuffer=[];for(let $=0;$<6;$++)G.__webglFramebuffer[$]=a.createFramebuffer()}else{if(G.__webglFramebuffer=a.createFramebuffer(),ft)if(i.drawBuffers){const $=L.texture;for(let V=0,pt=$.length;V<pt;V++){const yt=n.get($[V]);yt.__webglTexture===void 0&&(yt.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&wt(L)===!1){const $=ft?A:[A];G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let V=0;V<$.length;V++){const pt=$[V];G.__webglColorRenderbuffer[V]=a.createRenderbuffer(),a.bindRenderbuffer(36161,G.__webglColorRenderbuffer[V]);const yt=s.convert(pt.format,pt.encoding),St=s.convert(pt.type),gt=E(pt.internalFormat,yt,St,pt.encoding,L.isXRRenderTarget===!0),bt=Pt(L);a.renderbufferStorageMultisample(36161,bt,gt,L.width,L.height),a.framebufferRenderbuffer(36160,36064+V,36161,G.__webglColorRenderbuffer[V])}a.bindRenderbuffer(36161,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),Mt(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,st.__webglTexture),mt(34067,A,R);for(let $=0;$<6;$++)at(G.__webglFramebuffer[$],L,A,36064,34069+$);S(A,R)&&T(34067),e.unbindTexture()}else if(ft){const $=L.texture;for(let V=0,pt=$.length;V<pt;V++){const yt=$[V],St=n.get(yt);e.bindTexture(3553,St.__webglTexture),mt(3553,yt,R),at(G.__webglFramebuffer,L,yt,36064+V,3553),S(yt,R)&&T(3553)}e.unbindTexture()}else{let $=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?$=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture($,st.__webglTexture),mt($,A,R),at(G.__webglFramebuffer,L,A,36064,$),S(A,R)&&T($),e.unbindTexture()}L.depthBuffer&&K(L)}function ut(L){const A=v(L)||o,G=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let st=0,rt=G.length;st<rt;st++){const ft=G[st];if(S(ft,A)){const R=L.isWebGLCubeRenderTarget?34067:3553,$=n.get(ft).__webglTexture;e.bindTexture(R,$),T(R),e.unbindTexture()}}}function At(L){if(o&&L.samples>0&&wt(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],G=L.width,st=L.height;let rt=16384;const ft=[],R=L.stencilBuffer?33306:36096,$=n.get(L),V=L.isWebGLMultipleRenderTargets===!0;if(V)for(let pt=0;pt<A.length;pt++)e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,$.__webglFramebuffer),a.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,$.__webglFramebuffer);for(let pt=0;pt<A.length;pt++){ft.push(36064+pt),L.depthBuffer&&ft.push(R);const yt=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(yt===!1&&(L.depthBuffer&&(rt|=256),L.stencilBuffer&&(rt|=1024)),V&&a.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[pt]),yt===!0&&(a.invalidateFramebuffer(36008,[R]),a.invalidateFramebuffer(36009,[R])),V){const St=n.get(A[pt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,St,0)}a.blitFramebuffer(0,0,G,st,0,0,G,st,rt,9728),p&&a.invalidateFramebuffer(36008,ft)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),V)for(let pt=0;pt<A.length;pt++){e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+pt,36161,$.__webglColorRenderbuffer[pt]);const yt=n.get(A[pt]).__webglTexture;e.bindFramebuffer(36160,$.__webglFramebuffer),a.framebufferTexture2D(36009,36064+pt,3553,yt,0)}e.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function Pt(L){return Math.min(u,L.samples)}function wt(L){const A=n.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ut(L){const A=r.render.frame;_.get(L)!==A&&(_.set(L,A),L.update())}function jt(L,A){const G=L.encoding,st=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ja||G!==Gi&&(G===$t?o===!1?t.has("EXT_sRGB")===!0&&st===yn?(L.format=ja,L.minFilter=an,L.generateMipmaps=!1):A=mu.sRGBToLinear(A):(st!==yn||rt!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),A}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.setTexture2D=tt,this.setTexture2DArray=xt,this.setTexture3D=it,this.setTextureCube=j,this.rebindTextures=et,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=at,this.useMultisampledRTT=wt}function k_(a,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===Vi)return 5121;if(s===Pd)return 32819;if(s===Cd)return 32820;if(s===Td)return 5120;if(s===Ed)return 5122;if(s===uu)return 5123;if(s===Ad)return 5124;if(s===Ii)return 5125;if(s===Ui)return 5126;if(s===hr)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ld)return 6406;if(s===yn)return 6408;if(s===Rd)return 6409;if(s===Dd)return 6410;if(s===Ni)return 6402;if(s===Rs)return 34041;if(s===ja)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Id)return 6403;if(s===Ud)return 36244;if(s===Od)return 33319;if(s===zd)return 33320;if(s===Nd)return 36249;if(s===Ho||s===Wo||s===jo||s===qo)if(r===$t)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ho)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ho)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ic||s===sc||s===rc||s===oc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ic)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ac||s===lc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ac)return r===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===lc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cc||s===hc||s===uc||s===fc||s===dc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===yc||s===Mc||s===bc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===cc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_c)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bc)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Xo)return r===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===kd||s===Sc||s===wc||s===Tc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Xo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Sc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ss?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class B_ extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class oi extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V_={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class G_ extends $e{constructor(t,e,n,i,s,r,o,c,l,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=Ii),n===void 0&&h===Rs&&(n=Ss),super(null,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1}}class H_ extends Xi{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null;const g=e.getContextAttributes();let m=null,d=null;const y=[],x=[],v=new Set,M=new Map,S=new ln;S.layers.enable(1),S.viewport=new be;const T=new ln;T.layers.enable(2),T.viewport=new be;const E=[S,T],b=new B_;b.layers.enable(1),b.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=y[j];return Z===void 0&&(Z=new _a,y[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=y[j];return Z===void 0&&(Z=new _a,y[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=y[j];return Z===void 0&&(Z=new _a,y[j]=Z),Z.getHandSpace()};function N(j){const Z=x.indexOf(j.inputSource);if(Z===-1)return;const ct=y[Z];ct!==void 0&&ct.dispatchEvent({type:j.type,data:j.inputSource})}function D(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",I);for(let j=0;j<y.length;j++){const Z=x[j];Z!==null&&(x[j]=null,y[j].disconnect(Z))}w=null,O=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,it.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",D),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:p}),d=new Hi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:Vi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let Z=null,ct=null,mt=null;g.depth&&(mt=g.stencil?35056:33190,Z=g.stencil?Rs:Ni,ct=g.stencil?Ss:Ii);const B={colorFormat:32856,depthFormat:mt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(B),i.updateRenderState({layers:[f]}),d=new Hi(f.textureWidth,f.textureHeight,{format:yn,type:Vi,depthTexture:new G_(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const Lt=t.properties.get(d);Lt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(j){for(let Z=0;Z<j.removed.length;Z++){const ct=j.removed[Z],mt=x.indexOf(ct);mt>=0&&(x[mt]=null,y[mt].disconnect(ct))}for(let Z=0;Z<j.added.length;Z++){const ct=j.added[Z];let mt=x.indexOf(ct);if(mt===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=x.length){x.push(ct),mt=Lt;break}else if(x[Lt]===null){x[Lt]=ct,mt=Lt;break}if(mt===-1)break}const B=y[mt];B&&B.connect(ct)}}const z=new P,W=new P;function q(j,Z,ct){z.setFromMatrixPosition(Z.matrixWorld),W.setFromMatrixPosition(ct.matrixWorld);const mt=z.distanceTo(W),B=Z.projectionMatrix.elements,Lt=ct.projectionMatrix.elements,Ct=B[14]/(B[10]-1),at=B[14]/(B[10]+1),Mt=(B[9]+1)/B[5],nt=(B[9]-1)/B[5],K=(B[8]-1)/B[0],et=(Lt[8]+1)/Lt[0],vt=Ct*K,ut=Ct*et,At=mt/(-K+et),Pt=At*-K;Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Pt),j.translateZ(At),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const wt=Ct+At,Ut=at+At,jt=vt-Pt,L=ut+(mt-Pt),A=Mt*at/Ut*wt,G=nt*at/Ut*wt;j.projectionMatrix.makePerspective(jt,L,A,G,wt,Ut),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function H(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;b.near=T.near=S.near=j.near,b.far=T.far=S.far=j.far,(w!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,O=b.far);const Z=j.parent,ct=b.cameras;H(b,Z);for(let mt=0;mt<ct.length;mt++)H(ct[mt],Z);ct.length===2?q(b,S,T):b.projectionMatrix.copy(S.projectionMatrix),Q(j,b,Z)};function Q(j,Z,ct){ct===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ct.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const mt=j.children;for(let B=0,Lt=mt.length;B<Lt;B++)mt[B].updateMatrixWorld(!0);j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.getPlanes=function(){return v};let tt=null;function xt(j,Z){if(h=Z.getViewerPose(l||r),_=Z,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let mt=!1;ct.length!==b.cameras.length&&(b.cameras.length=0,mt=!0);for(let B=0;B<ct.length;B++){const Lt=ct[B];let Ct=null;if(p!==null)Ct=p.getViewport(Lt);else{const Mt=u.getViewSubImage(f,Lt);Ct=Mt.viewport,B===0&&(t.setRenderTargetTextures(d,Mt.colorTexture,f.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(d))}let at=E[B];at===void 0&&(at=new ln,at.layers.enable(B),at.viewport=new be,E[B]=at),at.matrix.fromArray(Lt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Lt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),B===0&&(b.matrix.copy(at.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),mt===!0&&b.cameras.push(at)}}for(let ct=0;ct<y.length;ct++){const mt=x[ct],B=y[ct];mt!==null&&B!==void 0&&B.update(mt,Z,l||r)}if(tt&&tt(j,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ct=null;for(const mt of v)Z.detectedPlanes.has(mt)||(ct===null&&(ct=[]),ct.push(mt));if(ct!==null)for(const mt of ct)v.delete(mt),M.delete(mt),n.dispatchEvent({type:"planeremoved",data:mt});for(const mt of Z.detectedPlanes)if(!v.has(mt))v.add(mt),M.set(mt,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:mt});else{const B=M.get(mt);mt.lastChangedTime>B&&(M.set(mt,mt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:mt}))}}_=null}const it=new wu;it.setAnimationLoop(xt),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}}function W_(a,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Mu(a)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,y,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ke&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ke&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ke&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function j_(a,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?a.getParameter(35375):0;function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=i[y.id];v===void 0&&(_(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(y,M);const S=t.render.frame;s[y.id]!==S&&(f(y),s[y.id]=S)}function h(y){const x=u();y.__bindingPointIndex=x;const v=a.createBuffer(),M=y.__size,S=y.usage;return a.bindBuffer(35345,v),a.bufferData(35345,M,S),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,v),v}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,M=y.__cache;a.bindBuffer(35345,x);for(let S=0,T=v.length;S<T;S++){const E=v[S];if(p(E,S,M)===!0){const b=E.__offset,w=Array.isArray(E.value)?E.value:[E.value];let O=0;for(let N=0;N<w.length;N++){const D=w[N],I=g(D);typeof D=="number"?(E.__data[0]=D,a.bufferSubData(35345,b+O,E.__data)):D.isMatrix3?(E.__data[0]=D.elements[0],E.__data[1]=D.elements[1],E.__data[2]=D.elements[2],E.__data[3]=D.elements[0],E.__data[4]=D.elements[3],E.__data[5]=D.elements[4],E.__data[6]=D.elements[5],E.__data[7]=D.elements[0],E.__data[8]=D.elements[6],E.__data[9]=D.elements[7],E.__data[10]=D.elements[8],E.__data[11]=D.elements[0]):(D.toArray(E.__data,O),O+=I.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,b,E.__data)}}a.bindBuffer(35345,null)}function p(y,x,v){const M=y.value;if(v[x]===void 0){if(typeof M=="number")v[x]=M;else{const S=Array.isArray(M)?M:[M],T=[];for(let E=0;E<S.length;E++)T.push(S[E].clone());v[x]=T}return!0}else if(typeof M=="number"){if(v[x]!==M)return v[x]=M,!0}else{const S=Array.isArray(v[x])?v[x]:[v[x]],T=Array.isArray(M)?M:[M];for(let E=0;E<S.length;E++){const b=S[E];if(b.equals(T[E])===!1)return b.copy(T[E]),!0}}return!1}function _(y){const x=y.uniforms;let v=0;const M=16;let S=0;for(let T=0,E=x.length;T<E;T++){const b=x[T],w={boundary:0,storage:0},O=Array.isArray(b.value)?b.value:[b.value];for(let N=0,D=O.length;N<D;N++){const I=O[N],z=g(I);w.boundary+=z.boundary,w.storage+=z.storage}if(b.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=v,T>0){S=v%M;const N=M-S;S!==0&&N-w.boundary<0&&(v+=M-S,b.__offset=v)}v+=w.storage}return S=v%M,S>0&&(v+=M-S),y.__size=v,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const y in i)a.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:c,update:l,dispose:d}}function q_(){const a=Mo("canvas");return a.style.display="block",a}class Cu{constructor(t={}){const{canvas:e=q_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=r;let p=null,_=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gi,this.useLegacyLights=!0,this.toneMapping=qn,this.toneMappingExposure=1;const d=this;let y=!1,x=0,v=0,M=null,S=-1,T=null;const E=new be,b=new be;let w=null,O=e.width,N=e.height,D=1,I=null,z=null;const W=new be(0,0,O,N),q=new be(0,0,O,N);let H=!1;const Q=new vl;let tt=!1,xt=!1,it=null;const j=new ne,Z=new P,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mt(){return M===null?D:1}let B=n;function Lt(C,k){for(let X=0;X<C.length;X++){const F=C[X],J=e.getContext(F,k);if(J!==null)return J}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),B===null){const k=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&k.shift(),B=Lt(k,C),B===null)throw Lt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ct,at,Mt,nt,K,et,vt,ut,At,Pt,wt,Ut,jt,L,A,G,st,rt,ft,R,$,V,pt,yt;function St(){Ct=new i0(B),at=new Jg(B,Ct,t),Ct.init(at),V=new k_(B,Ct,at),Mt=new N_(B,Ct,at),nt=new o0,K=new S_,et=new F_(B,Ct,Mt,K,at,V,nt),vt=new Qg(d),ut=new n0(d),At=new vp(B,at),pt=new Zg(B,Ct,At,at),Pt=new s0(B,At,nt,pt),wt=new h0(B,Pt,At,nt),ft=new c0(B,at,et),G=new $g(K),Ut=new b_(d,vt,ut,Ct,at,pt,G),jt=new W_(d,K),L=new T_,A=new R_(Ct,at),rt=new Yg(d,vt,ut,Mt,wt,f,c),st=new z_(d,wt,at),yt=new j_(B,nt,at,Mt),R=new Kg(B,Ct,nt,at),$=new r0(B,Ct,nt,at),nt.programs=Ut.programs,d.capabilities=at,d.extensions=Ct,d.properties=K,d.renderLists=L,d.shadowMap=st,d.state=Mt,d.info=nt}St();const gt=new H_(d,B);this.xr=gt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(C){C!==void 0&&(D=C,this.setSize(O,N,!1))},this.getSize=function(C){return C.set(O,N)},this.setSize=function(C,k,X=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,N=k,e.width=Math.floor(C*D),e.height=Math.floor(k*D),X===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(O*D,N*D).floor()},this.setDrawingBufferSize=function(C,k,X){O=C,N=k,D=X,e.width=Math.floor(C*X),e.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,k,X,F){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,k,X,F),Mt.viewport(E.copy(W).multiplyScalar(D).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,k,X,F){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,k,X,F),Mt.scissor(b.copy(q).multiplyScalar(D).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(C){Mt.setScissorTest(H=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(C=!0,k=!0,X=!0){let F=0;C&&(F|=16384),k&&(F|=256),X&&(F|=1024),B.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),L.dispose(),A.dispose(),K.dispose(),vt.dispose(),ut.dispose(),wt.dispose(),pt.dispose(),yt.dispose(),Ut.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Tt),gt.removeEventListener("sessionend",Jt),it&&(it.dispose(),it=null),ie.stop()};function bt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=nt.autoReset,k=st.enabled,X=st.autoUpdate,F=st.needsUpdate,J=st.type;St(),nt.autoReset=C,st.enabled=k,st.autoUpdate=X,st.needsUpdate=F,st.type=J}function Ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const k=C.target;k.removeEventListener("dispose",le),U(k)}function U(C){Y(C),K.remove(C)}function Y(C){const k=K.get(C).programs;k!==void 0&&(k.forEach(function(X){Ut.releaseProgram(X)}),C.isShaderMaterial&&Ut.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,F,J,Et){k===null&&(k=ct);const Rt=J.isMesh&&J.matrixWorld.determinant()<0,It=Wf(C,k,X,F,J);Mt.setMaterial(F,Rt);let zt=X.index,kt=1;F.wireframe===!0&&(zt=Pt.getWireframeAttribute(X),kt=2);const Bt=X.drawRange,Vt=X.attributes.position;let Xt=Bt.start*kt,De=(Bt.start+Bt.count)*kt;Et!==null&&(Xt=Math.max(Xt,Et.start*kt),De=Math.min(De,(Et.start+Et.count)*kt)),zt!==null?(Xt=Math.max(Xt,0),De=Math.min(De,zt.count)):Vt!=null&&(Xt=Math.max(Xt,0),De=Math.min(De,Vt.count));const dn=De-Xt;if(dn<0||dn===1/0)return;pt.setup(J,F,It,X,zt);let vi,fe=R;if(zt!==null&&(vi=At.get(zt),fe=$,fe.setIndex(vi)),J.isMesh)F.wireframe===!0?(Mt.setLineWidth(F.wireframeLinewidth*mt()),fe.setMode(1)):fe.setMode(4);else if(J.isLine){let qt=F.linewidth;qt===void 0&&(qt=1),Mt.setLineWidth(qt*mt()),J.isLineSegments?fe.setMode(1):J.isLineLoop?fe.setMode(2):fe.setMode(3)}else J.isPoints?fe.setMode(0):J.isSprite&&fe.setMode(4);if(J.isInstancedMesh)fe.renderInstances(Xt,dn,J.count);else if(X.isInstancedBufferGeometry){const qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Fo=Math.min(X.instanceCount,qt);fe.renderInstances(Xt,dn,Fo)}else fe.render(Xt,dn)},this.compile=function(C,k){function X(F,J,Et){F.transparent===!0&&F.side===vn&&F.forceSinglePass===!1?(F.side=ke,F.needsUpdate=!0,Tr(F,J,Et),F.side=pi,F.needsUpdate=!0,Tr(F,J,Et),F.side=vn):Tr(F,J,Et)}_=A.get(C),_.init(),m.push(_),C.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights(d.useLegacyLights),C.traverse(function(F){const J=F.material;if(J)if(Array.isArray(J))for(let Et=0;Et<J.length;Et++){const Rt=J[Et];X(Rt,C,F)}else X(J,C,F)}),m.pop(),_=null};let ot=null;function _t(C){ot&&ot(C)}function Tt(){ie.stop()}function Jt(){ie.start()}const ie=new wu;ie.setAnimationLoop(_t),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(C){ot=C,gt.setAnimationLoop(C),C===null?ie.stop():ie.start()},gt.addEventListener("sessionstart",Tt),gt.addEventListener("sessionend",Jt),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(k),k=gt.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,k,M),_=A.get(C,m.length),_.init(),m.push(_),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(j),xt=this.localClippingEnabled,tt=G.init(this.clippingPlanes,xt),p=L.get(C,g.length),p.init(),g.push(p),Te(C,k,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(I,z),tt===!0&&G.beginShadows();const X=_.state.shadowsArray;if(st.render(X,C,k),tt===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(p,C),_.setupLights(d.useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let J=0,Et=F.length;J<Et;J++){const Rt=F[J];$n(p,C,Rt,Rt.viewport)}}else $n(p,C,k);M!==null&&(et.updateMultisampleRenderTarget(M),et.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(d,C,k),pt.resetDefaultState(),S=-1,T=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function Te(C,k,X,F){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){F&&Z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Rt=wt.update(C),It=C.material;It.visible&&p.push(C,Rt,It,X,Z.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==nt.render.frame&&(C.skeleton.update(),C.skeleton.frame=nt.render.frame),!C.frustumCulled||Q.intersectsObject(C))){F&&Z.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Rt=wt.update(C),It=C.material;if(Array.isArray(It)){const zt=Rt.groups;for(let kt=0,Bt=zt.length;kt<Bt;kt++){const Vt=zt[kt],Xt=It[Vt.materialIndex];Xt&&Xt.visible&&p.push(C,Rt,Xt,X,Z.z,Vt)}}else It.visible&&p.push(C,Rt,It,X,Z.z,null)}}const Et=C.children;for(let Rt=0,It=Et.length;Rt<It;Rt++)Te(Et[Rt],k,X,F)}function $n(C,k,X,F){const J=C.opaque,Et=C.transmissive,Rt=C.transparent;_.setupLightsView(X),tt===!0&&G.setGlobalState(d.clippingPlanes,X),Et.length>0&&ce(J,Et,k,X),F&&Mt.viewport(E.copy(F)),J.length>0&&en(J,k,X),Et.length>0&&en(Et,k,X),Rt.length>0&&en(Rt,k,X),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ce(C,k,X,F){if(it===null){const It=at.isWebGL2;it=new Hi(1024,1024,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")?hr:Vi,minFilter:cr,samples:It&&o===!0?4:0})}const J=d.getRenderTarget();d.setRenderTarget(it),d.clear();const Et=d.toneMapping;d.toneMapping=qn,en(C,X,F),et.updateMultisampleRenderTarget(it),et.updateRenderTargetMipmap(it);let Rt=!1;for(let It=0,zt=k.length;It<zt;It++){const kt=k[It],Bt=kt.object,Vt=kt.geometry,Xt=kt.material,De=kt.group;if(Xt.side===vn&&Bt.layers.test(F.layers)){const dn=Xt.side;Xt.side=ke,Xt.needsUpdate=!0,Sn(Bt,X,F,Vt,Xt,De),Xt.side=dn,Xt.needsUpdate=!0,Rt=!0}}Rt===!0&&(et.updateMultisampleRenderTarget(it),et.updateRenderTargetMipmap(it)),d.setRenderTarget(J),d.toneMapping=Et}function en(C,k,X){const F=k.isScene===!0?k.overrideMaterial:null;for(let J=0,Et=C.length;J<Et;J++){const Rt=C[J],It=Rt.object,zt=Rt.geometry,kt=F===null?Rt.material:F,Bt=Rt.group;It.layers.test(X.layers)&&Sn(It,k,X,zt,kt,Bt)}}function Sn(C,k,X,F,J,Et){C.onBeforeRender(d,k,X,F,J,Et),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(d,k,X,F,C,Et),J.transparent===!0&&J.side===vn&&J.forceSinglePass===!1?(J.side=ke,J.needsUpdate=!0,d.renderBufferDirect(X,k,F,J,C,Et),J.side=pi,J.needsUpdate=!0,d.renderBufferDirect(X,k,F,J,C,Et),J.side=vn):d.renderBufferDirect(X,k,F,J,C,Et),C.onAfterRender(d,k,X,F,J,Et)}function Tr(C,k,X){k.isScene!==!0&&(k=ct);const F=K.get(C),J=_.state.lights,Et=_.state.shadowsArray,Rt=J.state.version,It=Ut.getParameters(C,J.state,Et,k,X),zt=Ut.getProgramCacheKey(It);let kt=F.programs;F.environment=C.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(C.isMeshStandardMaterial?ut:vt).get(C.envMap||F.environment),kt===void 0&&(C.addEventListener("dispose",le),kt=new Map,F.programs=kt);let Bt=kt.get(zt);if(Bt!==void 0){if(F.currentProgram===Bt&&F.lightsStateVersion===Rt)return Xl(C,It),Bt}else It.uniforms=Ut.getUniforms(C),C.onBuild(X,It,d),C.onBeforeCompile(It,d),Bt=Ut.acquireProgram(It,zt),kt.set(zt,Bt),F.uniforms=It.uniforms;const Vt=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=G.uniform),Xl(C,It),F.needsLights=qf(C),F.lightsStateVersion=Rt,F.needsLights&&(Vt.ambientLightColor.value=J.state.ambient,Vt.lightProbe.value=J.state.probe,Vt.directionalLights.value=J.state.directional,Vt.directionalLightShadows.value=J.state.directionalShadow,Vt.spotLights.value=J.state.spot,Vt.spotLightShadows.value=J.state.spotShadow,Vt.rectAreaLights.value=J.state.rectArea,Vt.ltc_1.value=J.state.rectAreaLTC1,Vt.ltc_2.value=J.state.rectAreaLTC2,Vt.pointLights.value=J.state.point,Vt.pointLightShadows.value=J.state.pointShadow,Vt.hemisphereLights.value=J.state.hemi,Vt.directionalShadowMap.value=J.state.directionalShadowMap,Vt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Vt.spotShadowMap.value=J.state.spotShadowMap,Vt.spotLightMatrix.value=J.state.spotLightMatrix,Vt.spotLightMap.value=J.state.spotLightMap,Vt.pointShadowMap.value=J.state.pointShadowMap,Vt.pointShadowMatrix.value=J.state.pointShadowMatrix);const Xt=Bt.getUniforms(),De=ho.seqWithValue(Xt.seq,Vt);return F.currentProgram=Bt,F.uniformsList=De,Bt}function Xl(C,k){const X=K.get(C);X.outputEncoding=k.outputEncoding,X.instancing=k.instancing,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Wf(C,k,X,F,J){k.isScene!==!0&&(k=ct),et.resetTextureUnits();const Et=k.fog,Rt=F.isMeshStandardMaterial?k.environment:null,It=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Gi,zt=(F.isMeshStandardMaterial?ut:vt).get(F.envMap||Rt),kt=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Bt=!!F.normalMap&&!!X.attributes.tangent,Vt=!!X.morphAttributes.position,Xt=!!X.morphAttributes.normal,De=!!X.morphAttributes.color,dn=F.toneMapped?d.toneMapping:qn,vi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=vi!==void 0?vi.length:0,qt=K.get(F),Fo=_.state.lights;if(tt===!0&&(xt===!0||C!==T)){const We=C===T&&F.id===S;G.setState(F,C,We)}let ve=!1;F.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Fo.state.version||qt.outputEncoding!==It||J.isInstancedMesh&&qt.instancing===!1||!J.isInstancedMesh&&qt.instancing===!0||J.isSkinnedMesh&&qt.skinning===!1||!J.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==zt||F.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==G.numPlanes||qt.numIntersection!==G.numIntersection)||qt.vertexAlphas!==kt||qt.vertexTangents!==Bt||qt.morphTargets!==Vt||qt.morphNormals!==Xt||qt.morphColors!==De||qt.toneMapping!==dn||at.isWebGL2===!0&&qt.morphTargetsCount!==fe)&&(ve=!0):(ve=!0,qt.__version=F.version);let xi=qt.currentProgram;ve===!0&&(xi=Tr(F,k,J));let Yl=!1,Hs=!1,ko=!1;const Ie=xi.getUniforms(),yi=qt.uniforms;if(Mt.useProgram(xi.program)&&(Yl=!0,Hs=!0,ko=!0),F.id!==S&&(S=F.id,Hs=!0),Yl||T!==C){if(Ie.setValue(B,"projectionMatrix",C.projectionMatrix),at.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),T!==C&&(T=C,Hs=!0,ko=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const We=Ie.map.cameraPosition;We!==void 0&&We.setValue(B,Z.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||J.isSkinnedMesh)&&Ie.setValue(B,"viewMatrix",C.matrixWorldInverse)}if(J.isSkinnedMesh){Ie.setOptional(B,J,"bindMatrix"),Ie.setOptional(B,J,"bindMatrixInverse");const We=J.skeleton;We&&(at.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Ie.setValue(B,"boneTexture",We.boneTexture,et),Ie.setValue(B,"boneTextureSize",We.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bo=X.morphAttributes;if((Bo.position!==void 0||Bo.normal!==void 0||Bo.color!==void 0&&at.isWebGL2===!0)&&ft.update(J,X,xi),(Hs||qt.receiveShadow!==J.receiveShadow)&&(qt.receiveShadow=J.receiveShadow,Ie.setValue(B,"receiveShadow",J.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(yi.envMap.value=zt,yi.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Hs&&(Ie.setValue(B,"toneMappingExposure",d.toneMappingExposure),qt.needsLights&&jf(yi,ko),Et&&F.fog===!0&&jt.refreshFogUniforms(yi,Et),jt.refreshMaterialUniforms(yi,F,D,N,it),ho.upload(B,qt.uniformsList,yi,et)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ho.upload(B,qt.uniformsList,yi,et),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ie.setValue(B,"center",J.center),Ie.setValue(B,"modelViewMatrix",J.modelViewMatrix),Ie.setValue(B,"normalMatrix",J.normalMatrix),Ie.setValue(B,"modelMatrix",J.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const We=F.uniformsGroups;for(let Vo=0,Xf=We.length;Vo<Xf;Vo++)if(at.isWebGL2){const Zl=We[Vo];yt.update(Zl,xi),yt.bind(Zl,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function jf(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function qf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,X){K.get(C.texture).__webglTexture=k,K.get(C.depthTexture).__webglTexture=X;const F=K.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=X===void 0,F.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const X=K.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){M=C,x=k,v=X;let F=!0,J=null,Et=!1,Rt=!1;if(C){const zt=K.get(C);zt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(36160,null),F=!1):zt.__webglFramebuffer===void 0?et.setupRenderTarget(C):zt.__hasExternalTextures&&et.rebindTextures(C,K.get(C.texture).__webglTexture,K.get(C.depthTexture).__webglTexture);const kt=C.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Rt=!0);const Bt=K.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(J=Bt[k],Et=!0):at.isWebGL2&&C.samples>0&&et.useMultisampledRTT(C)===!1?J=K.get(C).__webglMultisampledFramebuffer:J=Bt,E.copy(C.viewport),b.copy(C.scissor),w=C.scissorTest}else E.copy(W).multiplyScalar(D).floor(),b.copy(q).multiplyScalar(D).floor(),w=H;if(Mt.bindFramebuffer(36160,J)&&at.drawBuffers&&F&&Mt.drawBuffers(C,J),Mt.viewport(E),Mt.scissor(b),Mt.setScissorTest(w),Et){const zt=K.get(C.texture);B.framebufferTexture2D(36160,36064,34069+k,zt.__webglTexture,X)}else if(Rt){const zt=K.get(C.texture),kt=k||0;B.framebufferTextureLayer(36160,36064,zt.__webglTexture,X||0,kt)}S=-1},this.readRenderTargetPixels=function(C,k,X,F,J,Et,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){Mt.bindFramebuffer(36160,It);try{const zt=C.texture,kt=zt.format,Bt=zt.type;if(kt!==yn&&V.convert(kt)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Bt===hr&&(Ct.has("EXT_color_buffer_half_float")||at.isWebGL2&&Ct.has("EXT_color_buffer_float"));if(Bt!==Vi&&V.convert(Bt)!==B.getParameter(35738)&&!(Bt===Ui&&(at.isWebGL2||Ct.has("OES_texture_float")||Ct.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-F&&X>=0&&X<=C.height-J&&B.readPixels(k,X,F,J,V.convert(kt),V.convert(Bt),Et)}finally{const zt=M!==null?K.get(M).__webglFramebuffer:null;Mt.bindFramebuffer(36160,zt)}}},this.copyFramebufferToTexture=function(C,k,X=0){const F=Math.pow(2,-X),J=Math.floor(k.image.width*F),Et=Math.floor(k.image.height*F);et.setTexture2D(k,0),B.copyTexSubImage2D(3553,X,0,0,C.x,C.y,J,Et),Mt.unbindTexture()},this.copyTextureToTexture=function(C,k,X,F=0){const J=k.image.width,Et=k.image.height,Rt=V.convert(X.format),It=V.convert(X.type);et.setTexture2D(X,0),B.pixelStorei(37440,X.flipY),B.pixelStorei(37441,X.premultiplyAlpha),B.pixelStorei(3317,X.unpackAlignment),k.isDataTexture?B.texSubImage2D(3553,F,C.x,C.y,J,Et,Rt,It,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(3553,F,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Rt,k.mipmaps[0].data):B.texSubImage2D(3553,F,C.x,C.y,Rt,It,k.image),F===0&&X.generateMipmaps&&B.generateMipmap(3553),Mt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X,F,J=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=C.max.x-C.min.x+1,Rt=C.max.y-C.min.y+1,It=C.max.z-C.min.z+1,zt=V.convert(F.format),kt=V.convert(F.type);let Bt;if(F.isData3DTexture)et.setTexture3D(F,0),Bt=32879;else if(F.isDataArrayTexture)et.setTexture2DArray(F,0),Bt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,F.flipY),B.pixelStorei(37441,F.premultiplyAlpha),B.pixelStorei(3317,F.unpackAlignment);const Vt=B.getParameter(3314),Xt=B.getParameter(32878),De=B.getParameter(3316),dn=B.getParameter(3315),vi=B.getParameter(32877),fe=X.isCompressedTexture?X.mipmaps[0]:X.image;B.pixelStorei(3314,fe.width),B.pixelStorei(32878,fe.height),B.pixelStorei(3316,C.min.x),B.pixelStorei(3315,C.min.y),B.pixelStorei(32877,C.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(Bt,J,k.x,k.y,k.z,Et,Rt,It,zt,kt,fe.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Bt,J,k.x,k.y,k.z,Et,Rt,It,zt,fe.data)):B.texSubImage3D(Bt,J,k.x,k.y,k.z,Et,Rt,It,zt,kt,fe),B.pixelStorei(3314,Vt),B.pixelStorei(32878,Xt),B.pixelStorei(3316,De),B.pixelStorei(3315,dn),B.pixelStorei(32877,vi),J===0&&F.generateMipmaps&&B.generateMipmap(Bt),Mt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?et.setTextureCube(C,0):C.isData3DTexture?et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?et.setTexture2DArray(C,0):et.setTexture2D(C,0),Mt.unbindTexture()},this.resetState=function(){x=0,v=0,M=null,Mt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class X_ extends Cu{}X_.prototype.isWebGL1Renderer=!0;class Y_ extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ui extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uh=new P,fh=new P,dh=new ne,va=new Do,Xr=new br;class Hn extends Qt{constructor(t=new ee,e=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)uh.fromBufferAttribute(e,i-1),fh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=uh.distanceTo(fh);t.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=s,t.ray.intersectsSphere(Xr)===!1)return;dh.copy(i).invert(),va.copy(t.ray).applyMatrix4(dh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,f=new P,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const d=Math.max(0,r.start),y=Math.min(_.count,r.start+r.count);for(let x=d,v=y-1;x<v;x+=p){const M=_.getX(x),S=_.getX(x+1);if(l.fromBufferAttribute(m,M),h.fromBufferAttribute(m,S),va.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(f);E<t.near||E>t.far||e.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,r.start),y=Math.min(m.count,r.start+r.count);for(let x=d,v=y-1;x<v;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),va.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(f);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ph=new P,mh=new P;class Oi extends Hn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ph.fromBufferAttribute(e,i),mh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ph.distanceTo(mh);t.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _s extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gh=new ne,Xa=new Do,Yr=new br,Zr=new P;class uo extends Qt{constructor(t=new ee,e=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,t.ray.intersectsSphere(Yr)===!1)return;gh.copy(i).invert(),Xa.copy(t.ray).applyMatrix4(gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let _=f,g=p;_<g;_++){const m=l.getX(_);Zr.fromBufferAttribute(u,m),_h(Zr,m,c,i,t,e,this)}}else{const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let _=f,g=p;_<g;_++)Zr.fromBufferAttribute(u,_),_h(Zr,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _h(a,t,e,n,i,s,r){const o=Xa.distanceSqToPoint(a);if(o<e){const c=new P;Xa.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:r})}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);const h=n[i],f=n[i+1]-h,p=(r-h)/f;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),c=e||(r.isVector2?new lt:new P);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],r=[],o=new P,c=new ne;for(let p=0;p<=t;p++){const _=p/t;i[p]=this.getTangentAt(_,new P)}s[0]=new P,r[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Me(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,_))}r[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(Me(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(i[_],p*_)),r[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ml extends Un{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new lt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Z_ extends Ml{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function bl(){let a=0,t=0,e=0,n=0;function i(s,r,o,c){a=s,t=o,e=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){i(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,u){let f=(r-s)/l-(o-s)/(l+h)+(o-r)/h,p=(o-r)/h-(c-r)/(h+u)+(c-o)/u;f*=h,p*=h,i(r,o,f,p)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+n*o}}}const Kr=new P,xa=new bl,ya=new bl,Ma=new bl;class K_ extends Un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Kr.subVectors(i[0],i[1]).add(i[0]),l=Kr);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Kr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),xa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,_,g,m),ya.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,_,g,m),Ma.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(xa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ya.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ma.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(xa.calc(c),ya.calc(c),Ma.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vh(a,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,o=a*a,c=a*o;return(2*e-2*n+s+r)*c+(-3*e+3*n-2*s-r)*o+s*a+e}function J_(a,t){const e=1-a;return e*e*t}function $_(a,t){return 2*(1-a)*a*t}function Q_(a,t){return a*a*t}function sr(a,t,e,n){return J_(a,t)+$_(a,e)+Q_(a,n)}function tv(a,t){const e=1-a;return e*e*e*t}function ev(a,t){const e=1-a;return 3*e*e*a*t}function nv(a,t){return 3*(1-a)*a*a*t}function iv(a,t){return a*a*a*t}function rr(a,t,e,n,i){return tv(a,t)+ev(a,e)+nv(a,n)+iv(a,i)}class Lu extends Un{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(rr(t,i.x,s.x,r.x,o.x),rr(t,i.y,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sv extends Un{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(rr(t,i.x,s.x,r.x,o.x),rr(t,i.y,s.y,r.y,o.y),rr(t,i.z,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sl extends Un{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rv extends Un{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ru extends Un{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(sr(t,i.x,s.x,r.x),sr(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ov extends Un{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(sr(t,i.x,s.x,r.x),sr(t,i.y,s.y,r.y),sr(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Du extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(vh(o,c.x,l.x,h.x,u.x),vh(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var Iu=Object.freeze({__proto__:null,ArcCurve:Z_,CatmullRomCurve3:K_,CubicBezierCurve:Lu,CubicBezierCurve3:sv,EllipseCurve:Ml,LineCurve:Sl,LineCurve3:rv,QuadraticBezierCurve:Ru,QuadraticBezierCurve3:ov,SplineCurve:Du});class av extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Sl(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Iu[i.type]().fromJSON(i))}return this}}class Ya extends av{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sl(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Ru(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const o=new Lu(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Du(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,r,o,c),this}absellipse(t,e,n,i,s,r,o,c){const l=new Ml(t,e,n,i,s,r,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pe extends ee{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],p=[];let _=0;const g=[],m=n/2;let d=0;y(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(p,2));function y(){const v=new P,M=new P;let S=0;const T=(e-t)/n;for(let E=0;E<=s;E++){const b=[],w=E/s,O=w*(e-t)+t;for(let N=0;N<=i;N++){const D=N/i,I=D*c+o,z=Math.sin(I),W=Math.cos(I);M.x=O*z,M.y=-w*n+m,M.z=O*W,u.push(M.x,M.y,M.z),v.set(z,T,W).normalize(),f.push(v.x,v.y,v.z),p.push(D,1-w),b.push(_++)}g.push(b)}for(let E=0;E<i;E++)for(let b=0;b<s;b++){const w=g[b][E],O=g[b+1][E],N=g[b+1][E+1],D=g[b][E+1];h.push(w,O,D),h.push(O,N,D),S+=6}l.addGroup(d,S,0),d+=S}function x(v){const M=_,S=new lt,T=new P;let E=0;const b=v===!0?t:e,w=v===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),_++;const O=_;for(let N=0;N<=i;N++){const I=N/i*c+o,z=Math.cos(I),W=Math.sin(I);T.x=b*W,T.y=m*w,T.z=b*z,u.push(T.x,T.y,T.z),f.push(0,w,0),S.x=z*.5+.5,S.y=W*.5*w+.5,p.push(S.x,S.y),_++}for(let N=0;N<i;N++){const D=M+N,I=O+N;v===!0?h.push(I,I+1,D):h.push(I+1,I,D),E+=3}l.addGroup(d,E,v===!0?1:2),d+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wl extends ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(s.slice(),3)),this.setAttribute("uv",new Ot(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new P,v=new P,M=new P;for(let S=0;S<e.length;S+=3)p(e[S+0],x),p(e[S+1],v),p(e[S+2],M),c(x,v,M,y)}function c(y,x,v,M){const S=M+1,T=[];for(let E=0;E<=S;E++){T[E]=[];const b=y.clone().lerp(v,E/S),w=x.clone().lerp(v,E/S),O=S-E;for(let N=0;N<=O;N++)N===0&&E===S?T[E][N]=b:T[E][N]=b.clone().lerp(w,N/O)}for(let E=0;E<S;E++)for(let b=0;b<2*(S-E)-1;b++){const w=Math.floor(b/2);b%2===0?(f(T[E][w+1]),f(T[E+1][w]),f(T[E][w])):(f(T[E][w+1]),f(T[E+1][w+1]),f(T[E+1][w]))}}function l(y){const x=new P;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const y=new P;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=m(y)/2/Math.PI+.5,M=d(y)/Math.PI+.5;r.push(v,1-M)}_(),u()}function u(){for(let y=0;y<r.length;y+=6){const x=r[y+0],v=r[y+2],M=r[y+4],S=Math.max(x,v,M),T=Math.min(x,v,M);S>.9&&T<.1&&(x<.2&&(r[y+0]+=1),v<.2&&(r[y+2]+=1),M<.2&&(r[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function p(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function _(){const y=new P,x=new P,v=new P,M=new P,S=new lt,T=new lt,E=new lt;for(let b=0,w=0;b<s.length;b+=9,w+=6){y.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),S.set(r[w+0],r[w+1]),T.set(r[w+2],r[w+3]),E.set(r[w+4],r[w+5]),M.copy(y).add(x).add(v).divideScalar(3);const O=m(M);g(S,w+0,y,O),g(T,w+2,x,O),g(E,w+4,v,O)}}function g(y,x,v,M){M<0&&y.x===1&&(r[x]=y.x-1),v.x===0&&v.z===0&&(r[x]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.vertices,t.indices,t.radius,t.details)}}class fo extends Ya{constructor(t){super(t),this.uuid=Vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ya().fromJSON(i))}return this}}const lv={triangulate:function(a,t,e=2){const n=t&&t.length,i=n?t[0]*e:a.length;let s=Uu(a,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let o,c,l,h,u,f,p;if(n&&(s=dv(a,t,s,e)),a.length>80*e){o=l=a[0],c=h=a[1];for(let _=e;_<i;_+=e)u=a[_],f=a[_+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return fr(s,r,e,o,c,p,0),r}};function Uu(a,t,e,n,i){let s,r;if(i===wv(a,t,e,n)>0)for(s=t;s<e;s+=n)r=xh(s,a[s],a[s+1],r);else for(s=e-n;s>=t;s-=n)r=xh(s,a[s],a[s+1],r);return r&&Uo(r,r.next)&&(pr(r),r=r.next),r}function ji(a,t){if(!a)return a;t||(t=a);let e=a,n;do if(n=!1,!e.steiner&&(Uo(e,e.next)||re(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fr(a,t,e,n,i,s,r){if(!a)return;!r&&s&&vv(a,n,i,s);let o=a,c,l;for(;a.prev!==a.next;){if(c=a.prev,l=a.next,s?hv(a,n,i,s):cv(a)){t.push(c.i/e|0),t.push(a.i/e|0),t.push(l.i/e|0),pr(a),a=l.next,o=l.next;continue}if(a=l,a===o){r?r===1?(a=uv(ji(a),t,e),fr(a,t,e,n,i,s,2)):r===2&&fv(a,t,e,n,i,s):fr(ji(a),t,e,n,i,s,1);break}}}function cv(a){const t=a.prev,e=a,n=a.next;if(re(t,e,n)>=0)return!1;const i=t.x,s=e.x,r=n.x,o=t.y,c=e.y,l=n.y,h=i<s?i<r?i:r:s<r?s:r,u=o<c?o<l?o:l:c<l?c:l,f=i>s?i>r?i:r:s>r?s:r,p=o>c?o>l?o:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=p&&vs(i,o,s,c,r,l,_.x,_.y)&&re(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function hv(a,t,e,n){const i=a.prev,s=a,r=a.next;if(re(i,s,r)>=0)return!1;const o=i.x,c=s.x,l=r.x,h=i.y,u=s.y,f=r.y,p=o<c?o<l?o:l:c<l?c:l,_=h<u?h<f?h:f:u<f?u:f,g=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=Za(p,_,t,e,n),y=Za(g,m,t,e,n);let x=a.prevZ,v=a.nextZ;for(;x&&x.z>=d&&v&&v.z<=y;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==r&&vs(o,h,c,u,l,f,x.x,x.y)&&re(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==r&&vs(o,h,c,u,l,f,v.x,v.y)&&re(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==r&&vs(o,h,c,u,l,f,x.x,x.y)&&re(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==r&&vs(o,h,c,u,l,f,v.x,v.y)&&re(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function uv(a,t,e){let n=a;do{const i=n.prev,s=n.next.next;!Uo(i,s)&&Ou(i,n,n.next,s)&&dr(i,s)&&dr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),pr(n),pr(n.next),n=a=s),n=n.next}while(n!==a);return ji(n)}function fv(a,t,e,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Mv(r,o)){let c=zu(r,o);r=ji(r,r.next),c=ji(c,c.next),fr(r,t,e,n,i,s,0),fr(c,t,e,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function dv(a,t,e,n){const i=[];let s,r,o,c,l;for(s=0,r=t.length;s<r;s++)o=t[s]*n,c=s<r-1?t[s+1]*n:a.length,l=Uu(a,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(yv(l));for(i.sort(pv),s=0;s<i.length;s++)e=mv(i[s],e);return e}function pv(a,t){return a.x-t.x}function mv(a,t){const e=gv(a,t);if(!e)return t;const n=zu(e,a);return ji(n,n.next),ji(e,e.next)}function gv(a,t){let e=t,n=-1/0,i;const s=a.x,r=a.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&vs(r<l?s:n,r,c,l,r<l?n:s,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(s-e.x),dr(e,a)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&_v(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function _v(a,t){return re(a.prev,a,t.prev)<0&&re(t.next,a,a.next)<0}function vv(a,t,e,n){let i=a;do i.z===0&&(i.z=Za(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,xv(i)}function xv(a){let t,e,n,i,s,r,o,c,l=1;do{for(e=a,a=null,s=null,r=0;e;){for(r++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(r>1);return a}function Za(a,t,e,n,i){return a=(a-e)*i|0,t=(t-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function yv(a){let t=a,e=a;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==a);return e}function vs(a,t,e,n,i,s,r,o){return(i-r)*(t-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(s-o)>=(i-r)*(n-o)}function Mv(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!bv(a,t)&&(dr(a,t)&&dr(t,a)&&Sv(a,t)&&(re(a.prev,a,t.prev)||re(a,t.prev,t))||Uo(a,t)&&re(a.prev,a,a.next)>0&&re(t.prev,t,t.next)>0)}function re(a,t,e){return(t.y-a.y)*(e.x-t.x)-(t.x-a.x)*(e.y-t.y)}function Uo(a,t){return a.x===t.x&&a.y===t.y}function Ou(a,t,e,n){const i=$r(re(a,t,e)),s=$r(re(a,t,n)),r=$r(re(e,n,a)),o=$r(re(e,n,t));return!!(i!==s&&r!==o||i===0&&Jr(a,e,t)||s===0&&Jr(a,n,t)||r===0&&Jr(e,a,n)||o===0&&Jr(e,t,n))}function Jr(a,t,e){return t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)}function $r(a){return a>0?1:a<0?-1:0}function bv(a,t){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==t.i&&e.next.i!==t.i&&Ou(e,e.next,a,t))return!0;e=e.next}while(e!==a);return!1}function dr(a,t){return re(a.prev,a,a.next)<0?re(a,t,a.next)>=0&&re(a,a.prev,t)>=0:re(a,t,a.prev)<0||re(a,a.next,t)<0}function Sv(a,t){let e=a,n=!1;const i=(a.x+t.x)/2,s=(a.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==a);return n}function zu(a,t){const e=new Ka(a.i,a.x,a.y),n=new Ka(t.i,t.x,t.y),i=a.next,s=t.prev;return a.next=t,t.prev=a,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function xh(a,t,e,n){const i=new Ka(a,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pr(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Ka(a,t,e){this.i=a,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wv(a,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class Ts{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ts.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];yh(t),Mh(n,t);let r=t.length;e.forEach(yh);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Mh(n,e[c]);const o=lv.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function yh(a){const t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function Mh(a,t){for(let e=0;e<t.length;e++)a.push(t[e].x),a.push(t[e].y)}class Tl extends ee{constructor(t=new fo([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];r(l)}this.setAttribute("position",new Ot(i,3)),this.setAttribute("uv",new Ot(s,2)),this.computeVertexNormals();function r(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Tv;let x,v=!1,M,S,T,E;d&&(x=d.getSpacedPoints(h),v=!0,f=!1,M=d.computeFrenetFrames(h,!1),S=new P,T=new P,E=new P),f||(m=0,p=0,_=0,g=0);const b=o.extractPoints(l);let w=b.shape;const O=b.holes;if(!Ts.isClockWise(w)){w=w.reverse();for(let nt=0,K=O.length;nt<K;nt++){const et=O[nt];Ts.isClockWise(et)&&(O[nt]=et.reverse())}}const D=Ts.triangulateShape(w,O),I=w;for(let nt=0,K=O.length;nt<K;nt++){const et=O[nt];w=w.concat(et)}function z(nt,K,et){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(K,et)}const W=w.length,q=D.length;function H(nt,K,et){let vt,ut,At;const Pt=nt.x-K.x,wt=nt.y-K.y,Ut=et.x-nt.x,jt=et.y-nt.y,L=Pt*Pt+wt*wt,A=Pt*jt-wt*Ut;if(Math.abs(A)>Number.EPSILON){const G=Math.sqrt(L),st=Math.sqrt(Ut*Ut+jt*jt),rt=K.x-wt/G,ft=K.y+Pt/G,R=et.x-jt/st,$=et.y+Ut/st,V=((R-rt)*jt-($-ft)*Ut)/(Pt*jt-wt*Ut);vt=rt+Pt*V-nt.x,ut=ft+wt*V-nt.y;const pt=vt*vt+ut*ut;if(pt<=2)return new lt(vt,ut);At=Math.sqrt(pt/2)}else{let G=!1;Pt>Number.EPSILON?Ut>Number.EPSILON&&(G=!0):Pt<-Number.EPSILON?Ut<-Number.EPSILON&&(G=!0):Math.sign(wt)===Math.sign(jt)&&(G=!0),G?(vt=-wt,ut=Pt,At=Math.sqrt(L)):(vt=Pt,ut=wt,At=Math.sqrt(L/2))}return new lt(vt/At,ut/At)}const Q=[];for(let nt=0,K=I.length,et=K-1,vt=nt+1;nt<K;nt++,et++,vt++)et===K&&(et=0),vt===K&&(vt=0),Q[nt]=H(I[nt],I[et],I[vt]);const tt=[];let xt,it=Q.concat();for(let nt=0,K=O.length;nt<K;nt++){const et=O[nt];xt=[];for(let vt=0,ut=et.length,At=ut-1,Pt=vt+1;vt<ut;vt++,At++,Pt++)At===ut&&(At=0),Pt===ut&&(Pt=0),xt[vt]=H(et[vt],et[At],et[Pt]);tt.push(xt),it=it.concat(xt)}for(let nt=0;nt<m;nt++){const K=nt/m,et=p*Math.cos(K*Math.PI/2),vt=_*Math.sin(K*Math.PI/2)+g;for(let ut=0,At=I.length;ut<At;ut++){const Pt=z(I[ut],Q[ut],vt);B(Pt.x,Pt.y,-et)}for(let ut=0,At=O.length;ut<At;ut++){const Pt=O[ut];xt=tt[ut];for(let wt=0,Ut=Pt.length;wt<Ut;wt++){const jt=z(Pt[wt],xt[wt],vt);B(jt.x,jt.y,-et)}}}const j=_+g;for(let nt=0;nt<W;nt++){const K=f?z(w[nt],it[nt],j):w[nt];v?(T.copy(M.normals[0]).multiplyScalar(K.x),S.copy(M.binormals[0]).multiplyScalar(K.y),E.copy(x[0]).add(T).add(S),B(E.x,E.y,E.z)):B(K.x,K.y,0)}for(let nt=1;nt<=h;nt++)for(let K=0;K<W;K++){const et=f?z(w[K],it[K],j):w[K];v?(T.copy(M.normals[nt]).multiplyScalar(et.x),S.copy(M.binormals[nt]).multiplyScalar(et.y),E.copy(x[nt]).add(T).add(S),B(E.x,E.y,E.z)):B(et.x,et.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){const K=nt/m,et=p*Math.cos(K*Math.PI/2),vt=_*Math.sin(K*Math.PI/2)+g;for(let ut=0,At=I.length;ut<At;ut++){const Pt=z(I[ut],Q[ut],vt);B(Pt.x,Pt.y,u+et)}for(let ut=0,At=O.length;ut<At;ut++){const Pt=O[ut];xt=tt[ut];for(let wt=0,Ut=Pt.length;wt<Ut;wt++){const jt=z(Pt[wt],xt[wt],vt);v?B(jt.x,jt.y+x[h-1].y,x[h-1].x+et):B(jt.x,jt.y,u+et)}}}Z(),ct();function Z(){const nt=i.length/3;if(f){let K=0,et=W*K;for(let vt=0;vt<q;vt++){const ut=D[vt];Lt(ut[2]+et,ut[1]+et,ut[0]+et)}K=h+m*2,et=W*K;for(let vt=0;vt<q;vt++){const ut=D[vt];Lt(ut[0]+et,ut[1]+et,ut[2]+et)}}else{for(let K=0;K<q;K++){const et=D[K];Lt(et[2],et[1],et[0])}for(let K=0;K<q;K++){const et=D[K];Lt(et[0]+W*h,et[1]+W*h,et[2]+W*h)}}n.addGroup(nt,i.length/3-nt,0)}function ct(){const nt=i.length/3;let K=0;mt(I,K),K+=I.length;for(let et=0,vt=O.length;et<vt;et++){const ut=O[et];mt(ut,K),K+=ut.length}n.addGroup(nt,i.length/3-nt,1)}function mt(nt,K){let et=nt.length;for(;--et>=0;){const vt=et;let ut=et-1;ut<0&&(ut=nt.length-1);for(let At=0,Pt=h+m*2;At<Pt;At++){const wt=W*At,Ut=W*(At+1),jt=K+vt+wt,L=K+ut+wt,A=K+ut+Ut,G=K+vt+Ut;Ct(jt,L,A,G)}}}function B(nt,K,et){c.push(nt),c.push(K),c.push(et)}function Lt(nt,K,et){at(nt),at(K),at(et);const vt=i.length/3,ut=y.generateTopUV(n,i,vt-3,vt-2,vt-1);Mt(ut[0]),Mt(ut[1]),Mt(ut[2])}function Ct(nt,K,et,vt){at(nt),at(K),at(vt),at(K),at(et),at(vt);const ut=i.length/3,At=y.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);Mt(At[0]),Mt(At[1]),Mt(At[3]),Mt(At[1]),Mt(At[2]),Mt(At[3])}function at(nt){i.push(c[nt*3+0]),i.push(c[nt*3+1]),i.push(c[nt*3+2])}function Mt(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ev(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Iu[i.type]().fromJSON(i)),new Tl(n,t.options)}}const Tv={generateTopUV:function(a,t,e,n,i){const s=t[e*3],r=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new lt(s,r),new lt(o,c),new lt(l,h)]},generateSideWallUV:function(a,t,e,n,i,s){const r=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],p=t[i*3+1],_=t[i*3+2],g=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new lt(r,1-c),new lt(l,1-u),new lt(f,1-_),new lt(g,1-d)]:[new lt(o,1-c),new lt(h,1-u),new lt(p,1-_),new lt(m,1-d)]}};function Ev(a,t,e){if(e.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];e.shapes.push(s.uuid)}else e.shapes.push(a.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class xs extends wl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xs(t.radius,t.detail)}}class El extends ee{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new P,f=new P,p=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){const y=[],x=d/n;let v=0;d===0&&r===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let M=0;M<=e;M++){const S=M/e;u.x=-t*Math.cos(i+S*s)*Math.sin(r+x*o),u.y=t*Math.cos(r+x*o),u.z=t*Math.sin(i+S*s)*Math.sin(r+x*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(S+v,1-x),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const x=h[d][y+1],v=h[d][y],M=h[d+1][y],S=h[d+1][y+1];(d!==0||r>0)&&p.push(x,v,S),(d!==n-1||c<Math.PI)&&p.push(v,M,S)}this.setIndex(p),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Di extends ee{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],c=[],l=[],h=new P,u=new P,f=new P;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const g=_/i*s,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const g=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,d=(i+1)*(p-1)+_,y=(i+1)*p+_;r.push(g,m,y),r.push(m,d,y)}this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class bo extends Yn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ba extends ui{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const bh={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Av{constructor(t,e,n){const i=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Pv=new Av;class Al{constructor(t){this.manager=t!==void 0?t:Pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Vn={};class Cv extends Error{constructor(t,e){super(t),this.response=e}}class Nu extends Al{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=bh.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Vn[t]!==void 0){Vn[t].push({onLoad:e,onProgress:n,onError:i});return}Vn[t]=[],Vn[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Vn[t],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let g=0;const m=new ReadableStream({start(d){y();function y(){u.read().then(({done:x,value:v})=>{if(x)d.close();else{g+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let S=0,T=h.length;S<T;S++){const E=h[S];E.onProgress&&E.onProgress(M)}d.enqueue(v),y()}})}}});return new Response(m)}else throw new Cv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{bh.add(t,l);const h=Vn[t];delete Vn[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Vn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Vn[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Pl extends Qt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Sa=new ne,Sh=new P,wh=new P;class Fu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lv extends Fu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=yo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Rv extends Pl{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Lv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dv extends Fu{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Th extends Pl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Dv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Iv extends Pl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ku{constructor(t,e,n=0,i=1/0){this.ray=new Do(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ja(t,this,n,e),n.sort(Eh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ja(t[i],this,n,e);return n.sort(Eh),n}}function Eh(a,t){return a.distance-t.distance}function Ja(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)Ja(i[s],t,e,!0)}}class Ah{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ph=new P,Qr=new P;class wa{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ph.subVectors(t,this.start),Qr.subVectors(this.end,this.start);const n=Qr.dot(Qr);let s=Qr.dot(Ph)/n;return e&&(s=Me(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class to extends Oi{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ht(n),i=new Ht(i);const s=e/2,r=t/e,o=t/2,c=[],l=[];for(let f=0,p=0,_=-o;f<=e;f++,_+=r){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const g=f===s?n:i;g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3}const h=new ee;h.setAttribute("position",new Ot(c,3)),h.setAttribute("color",new Ot(l,3));const u=new ui({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Uv{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ya,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,r){return this.currentPath.bezierCurveTo(t,e,n,i,s,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const y=[];for(let x=0,v=d.length;x<v;x++){const M=d[x],S=new fo;S.curves=M.curves,y.push(S)}return y}function n(d,y){const x=y.length;let v=!1;for(let M=x-1,S=0;S<x;M=S++){let T=y[M],E=y[S],b=E.x-T.x,w=E.y-T.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(T=y[S],b=-b,E=y[M],w=-w),d.y<T.y||d.y>E.y)continue;if(d.y===T.y){if(d.x===T.x)return!0}else{const O=w*(d.x-T.x)-b*(d.y-T.y);if(O===0)return!0;if(O<0)continue;v=!v}}else{if(d.y!==T.y)continue;if(E.x<=d.x&&d.x<=T.x||T.x<=d.x&&d.x<=E.x)return!0}}return v}const i=Ts.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,o,c;const l=[];if(s.length===1)return o=s[0],c=new fo,c.curves=o.curves,l.push(c),l;let h=!i(s[0].getPoints());h=t?!h:h;const u=[],f=[];let p=[],_=0,g;f[_]=void 0,p[_]=[];for(let d=0,y=s.length;d<y;d++)o=s[d],g=o.getPoints(),r=i(g),r=t?!r:r,r?(!h&&f[_]&&_++,f[_]={s:new fo,p:g},f[_].s.curves=o.curves,h&&_++,p[_]=[]):p[_].push({h:o,p:g[0]});if(!f[0])return e(s);if(f.length>1){let d=!1,y=0;for(let x=0,v=f.length;x<v;x++)u[x]=[];for(let x=0,v=f.length;x<v;x++){const M=p[x];for(let S=0;S<M.length;S++){const T=M[S];let E=!0;for(let b=0;b<f.length;b++)n(T.p,f[b].p)&&(x!==b&&y++,E?(E=!1,u[b].push(T)):d=!0);E&&u[x].push(T)}}y>0&&d===!1&&(p=u)}let m;for(let d=0,y=f.length;d<y;d++){c=f[d].s,l.push(c),m=p[d];for(let x=0,v=m.length;x<v;x++)c.holes.push(m[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);function Wn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Bu(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Us={duration:.5,overwrite:!1,delay:0},Cl,Le,pe,cn=1e8,Kt=1/cn,$a=Math.PI*2,Ov=$a/4,zv=0,Vu=Math.sqrt,Nv=Math.cos,Fv=Math.sin,Se=function(t){return typeof t=="string"},ae=function(t){return typeof t=="function"},Zn=function(t){return typeof t=="number"},Ll=function(t){return typeof t>"u"},In=function(t){return typeof t=="object"},Be=function(t){return t!==!1},Rl=function(){return typeof window<"u"},eo=function(t){return ae(t)||Se(t)},Gu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Re=Array.isArray,Qa=/(?:-?\.?\d|\.)+/gi,Hu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ta=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wu=/[+-]=-?[.\d]+/,ju=/[^,'"\[\]\s]+/gi,kv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,se,on,tl,Dl,tn={},So={},qu,Xu=function(t){return(So=qi(t,tn))&&He},Il=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},wo=function(t,e){return!e&&console.warn(t)},Yu=function(t,e){return t&&(tn[t]=e)&&So&&(So[t]=e)||tn},mr=function(){return 0},Bv={suppressEvents:!0,isStart:!0,kill:!1},po={suppressEvents:!0,kill:!1},Vv={suppressEvents:!0},Ul={},fi=[],el={},Zu,Ze={},Ea={},Ch=30,mo=[],Ol="",zl=function(t){var e=t[0],n,i;if(In(e)||ae(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=mo.length;i--&&!mo[i].targetTest(e););n=mo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new yf(t[i],n)))||t.splice(i,1);return t},Fi=function(t){return t._gsap||zl(hn(t))[0]._gsap},Ku=function(t,e,n){return(n=t[e])&&ae(n)?t[e]():Ll(n)&&t.getAttribute&&t.getAttribute(e)||n},Ve=function(t,e){return(t=t.split(",")).forEach(e)||t},ue=function(t){return Math.round(t*1e5)/1e5||0},we=function(t){return Math.round(t*1e7)/1e7||0},Es=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Gv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},To=function(){var t=fi.length,e=fi.slice(0),n,i;for(el={},fi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ju=function(t,e,n,i){fi.length&&!Le&&To(),t.render(e,n,i||Le&&e<0&&(t._initted||t._startAt)),fi.length&&!Le&&To()},$u=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ju).length<2?e:Se(t)?t.trim():t},Qu=function(t){return t},fn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Hv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},qi=function(t,e){for(var n in e)t[n]=e[n];return t},Lh=function a(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=In(e[n])?a(t[n]||(t[n]={}),e[n]):e[n]);return t},Eo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},or=function(t){var e=t.parent||se,n=t.keyframes?Hv(Re(t.keyframes)):fn;if(Be(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Wv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},tf=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t[i],o;if(s)for(o=e[s];r&&r[s]>o;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=r,e.parent=e._dp=t,e},Oo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,r=e._next;s?s._next=r:t[n]===e&&(t[n]=r),r?r._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},mi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},ki=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},jv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},nl=function(t,e,n,i){return t._startAt&&(Le?t._startAt.revert(po):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},qv=function a(t){return!t||t._ts&&a(t.parent)},Rh=function(t){return t._repeat?Os(t._tTime,t=t.duration()+t._rDelay)*t:0},Os=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ao=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zo=function(t){return t._end=we(t._start+(t._tDur/Math.abs(t._ts||t._rts||Kt)||0))},No=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=we(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zo(t),n._dirty||ki(n,t)),t},ef=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Ao(t.rawTime(),e),(!e._dur||wr(0,e.totalDuration(),n)-e._tTime>Kt)&&e.render(n,!0)),ki(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Kt}},Cn=function(t,e,n,i){return e.parent&&mi(e),e._start=we((Zn(n)?n:n||t!==se?rn(t,n,e):t._time)+e._delay),e._end=we(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),tf(t,e,"_first","_last",t._sort?"_start":0),il(e)||(t._recent=e),i||ef(t,e),t._ts<0&&No(t,t._tTime),t},nf=function(t,e){return(tn.ScrollTrigger||Il("scrollTrigger",e))&&tn.ScrollTrigger.create(e,t)},sf=function(t,e,n,i,s){if(Fl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Le&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zu!==Je.frame)return fi.push(t),t._lazy=[s,i],1},Xv=function a(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||a(e))},il=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Yv=function(t,e,n,i){var s=t.ratio,r=e<0||!e&&(!t._start&&Xv(t)&&!(!t._initted&&il(t))||(t._ts<0||t._dp._ts<0)&&!il(t))?0:1,o=t._rDelay,c=0,l,h,u;if(o&&t._repeat&&(c=wr(0,t._tDur,e),h=Os(c,o),t._yoyo&&h&1&&(r=1-r),h!==Os(t._tTime,o)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||Le||i||t._zTime===Kt||!e&&t._zTime){if(!t._initted&&sf(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?Kt:0),n||(n=e&&!u),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=c,l=t._pt;l;)l.r(r,l.d),l=l._next;e<0&&nl(t,e,n,!0),t._onUpdate&&!n&&un(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&mi(t,1),!n&&!Le&&(un(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Zv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},zs=function(t,e,n,i){var s=t._repeat,r=we(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:we(r*(s+1)+t._rDelay*s):r,o>0&&!i&&No(t,t._tTime=t._tDur*o),t.parent&&zo(t),n||ki(t.parent,t),t},Dh=function(t){return t instanceof Fe?ki(t):zs(t,t._dur)},Kv={_start:0,endTime:mr,totalDuration:mr},rn=function a(t,e,n){var i=t.labels,s=t._recent||Kv,r=t.duration()>=cn?s.endTime(!1):t._dur,o,c,l;return Se(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=r),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(Re(n)?n[0]:n).totalDuration()),o>1?a(t,e.substr(0,o-1),n)+c:r+c)):e==null?r:+e},ar=function(t,e,n){var i=Zn(e[1]),s=(i?2:1)+(t<2?0:1),r=e[s],o,c;if(i&&(r.duration=e[1]),r.parent=n,t){for(o=r,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Be(c.vars.inherit)&&c.parent;r.immediateRender=Be(o.immediateRender),t<2?r.runBackwards=1:r.startAt=e[s-1]}return new me(e[0],r,e[s+1])},_i=function(t,e){return t||t===0?e(t):e},wr=function(t,e,n){return n<t?t:n>e?e:n},Ce=function(t,e){return!Se(t)||!(e=kv.exec(t))?"":e[1]},Jv=function(t,e,n){return _i(n,function(i){return wr(t,e,i)})},sl=[].slice,rf=function(t,e){return t&&In(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&In(t[0]))&&!t.nodeType&&t!==on},$v=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||rf(i,1)?(s=n).push.apply(s,hn(i)):n.push(i)})||n},hn=function(t,e,n){return pe&&!e&&pe.selector?pe.selector(t):Se(t)&&!n&&(tl||!Ns())?sl.call((e||Dl).querySelectorAll(t),0):Re(t)?$v(t,n):rf(t)?sl.call(t,0):t?[t]:[]},rl=function(t){return t=hn(t)[0]||wo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return hn(e,n.querySelectorAll?n:n===t?wo("Invalid scope")||Dl.createElement("div"):t)}},of=function(t){return t.sort(function(){return .5-Math.random()})},af=function(t){if(ae(t))return t;var e=In(t)?t:{each:t},n=Bi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,r={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,u=i;return Se(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],u=i[1]),function(f,p,_){var g=(_||e).length,m=r[g],d,y,x,v,M,S,T,E,b;if(!m){if(b=e.grid==="auto"?0:(e.grid||[1,cn])[1],!b){for(T=-cn;T<(T=_[b++].getBoundingClientRect().left)&&b<g;);b--}for(m=r[g]=[],d=c?Math.min(b,g)*h-.5:i%b,y=b===cn?0:c?g*u/b-.5:i/b|0,T=0,E=cn,S=0;S<g;S++)x=S%b-d,v=y-(S/b|0),m[S]=M=l?Math.abs(l==="y"?v:x):Vu(x*x+v*v),M>T&&(T=M),M<E&&(E=M);i==="random"&&of(m),m.max=T-E,m.min=E,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(b>g?g-1:l?l==="y"?g/b:b:Math.max(b,g/b))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ce(e.amount||e.each)||0,n=n&&g<0?_f(n):n}return g=(m[f]-m.min)/m.max||0,we(m.b+(n?n(g):g)*m.v)+m.u}},ol=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=we(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Zn(n)?0:Ce(n))}},lf=function(t,e){var n=Re(t),i,s;return!n&&In(t)&&(i=n=t.radius||cn,t.values?(t=hn(t.values),(s=!Zn(t[0]))&&(i*=i)):t=ol(t.increment)),_i(e,n?ae(t)?function(r){return s=t(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=cn,h=0,u=t.length,f,p;u--;)s?(f=t[u].x-o,p=t[u].y-c,f=f*f+p*p):f=Math.abs(t[u]-o),f<l&&(l=f,h=u);return h=!i||l<=i?t[h]:r,s||h===r||Zn(r)?h:h+Ce(r)}:ol(t))},cf=function(t,e,n,i){return _i(Re(t)?!e:n===!0?!!(n=0):!i,function(){return Re(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Qv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,r){return r(s)},i)}},tx=function(t,e){return function(n){return t(parseFloat(n))+(e||Ce(n))}},ex=function(t,e,n){return uf(t,e,0,1,n)},hf=function(t,e,n){return _i(n,function(i){return t[~~e(i)]})},nx=function a(t,e,n){var i=e-t;return Re(t)?hf(t,a(0,t.length),e):_i(n,function(s){return(i+(s-t)%i)%i+t})},ix=function a(t,e,n){var i=e-t,s=i*2;return Re(t)?hf(t,a(0,t.length-1),e):_i(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>i?s-r:r)})},gr=function(t){for(var e=0,n="",i,s,r,o;~(i=t.indexOf("random(",e));)r=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,r-i-7).match(o?ju:Qa),n+=t.substr(e,i-e)+cf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=r+1;return n+t.substr(e,t.length-e)},uf=function(t,e,n,i,s){var r=e-t,o=i-n;return _i(s,function(c){return n+((c-t)/r*o||0)})},sx=function a(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var r=Se(t),o={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),r)t={p:t},e={p:e};else if(Re(t)&&!Re(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(a(t[l-1],t[l]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=qi(Re(t)?[]:{},t));if(!h){for(c in e)Nl.call(o,t,c,"get",e[c]);s=function(_){return Vl(_,o)||(r?t.p:t)}}}return _i(n,s)},Ih=function(t,e,n){var i=t.labels,s=cn,r,o,c;for(r in i)o=i[r]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=r,s=o);return c},un=function(t,e,n){var i=t.vars,s=i[e],r=pe,o=t._ctx,c,l,h;if(!!s)return c=i[e+"Params"],l=i.callbackScope||t,n&&fi.length&&To(),o&&(pe=o),h=c?s.apply(l,c):s.call(l),pe=r,h},tr=function(t){return mi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Le),t.progress()<1&&un(t,"onInterrupt"),t},Ms,ff=[],df=function(t){if(!Rl()){ff.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=ae(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:mr,render:Vl,add:Nl,kill:yx,modifier:xx,rawVars:0},r={targetTest:0,get:0,getSetter:Bl,aliases:{},register:0};if(Ns(),t!==i){if(Ze[e])return;fn(i,fn(Eo(t,s),r)),qi(i.prototype,qi(s,Eo(t,r))),Ze[i.prop=e]=i,t.targetTest&&(mo.push(i),Ul[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Yu(e,i),t.register&&t.register(He,i,Ge)},Zt=255,er={aqua:[0,Zt,Zt],lime:[0,Zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Zt],navy:[0,0,128],white:[Zt,Zt,Zt],olive:[128,128,0],yellow:[Zt,Zt,0],orange:[Zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Zt,0,0],pink:[Zt,192,203],cyan:[0,Zt,Zt],transparent:[Zt,Zt,Zt,0]},Aa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Zt+.5|0},pf=function(t,e,n){var i=t?Zn(t)?[t>>16,t>>8&Zt,t&Zt]:0:er.black,s,r,o,c,l,h,u,f,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),er[t])i=er[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),o=t.charAt(3),t="#"+s+s+r+r+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Zt,i&Zt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Zt,t&Zt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Qa),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,r=h<=.5?h*(l+1):h+l-h*l,s=h*2-r,i.length>3&&(i[3]*=1),i[0]=Aa(c+1/3,s,r),i[1]=Aa(c,s,r),i[2]=Aa(c-1/3,s,r);else if(~t.indexOf("="))return i=t.match(Hu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Qa)||er.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Zt,r=i[1]/Zt,o=i[2]/Zt,u=Math.max(s,r,o),f=Math.min(s,r,o),h=(u+f)/2,u===f?c=l=0:(p=u-f,l=h>.5?p/(2-u-f):p/(u+f),c=u===s?(r-o)/p+(r<o?6:0):u===r?(o-s)/p+2:(s-r)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},mf=function(t){var e=[],n=[],i=-1;return t.split(di).forEach(function(s){var r=s.match(ys)||[];e.push.apply(e,r),n.push(i+=r.length+1)}),e.c=n,e},Uh=function(t,e,n){var i="",s=(t+i).match(di),r=e?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return t;if(s=s.map(function(f){return(f=pf(f,e,1))&&r+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=mf(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(di,"1").split(ys),u=l.length-1;o<u;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||r+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(di),u=l.length-1;o<u;o++)i+=l[o]+s[o];return i+l[u]},di=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in er)a+="|"+t+"\\b";return new RegExp(a+")","gi")}(),rx=/hsl[a]?\(/,gf=function(t){var e=t.join(" "),n;if(di.lastIndex=0,di.test(e))return n=rx.test(e),t[1]=Uh(t[1],n),t[0]=Uh(t[0],n,mf(t[1])),!0},_r,Je=function(){var a=Date.now,t=500,e=33,n=a(),i=n,s=1e3/240,r=s,o=[],c,l,h,u,f,p,_=function g(m){var d=a()-i,y=m===!0,x,v,M,S;if(d>t&&(n+=d-e),i+=d,M=i-n,x=M-r,(x>0||y)&&(S=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,r+=x+(x>=s?4:s-x),v=1),y||(c=l(g)),v)for(p=0;p<o.length;p++)o[p](M,f,S,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){qu&&(!tl&&Rl()&&(on=tl=window,Dl=on.document||{},tn.gsap=He,(on.gsapVersions||(on.gsapVersions=[])).push(He.version),Xu(So||on.GreenSockGlobals||!on.gsap&&on||{}),h=on.requestAnimationFrame,ff.forEach(df)),c&&u.sleep(),l=h||function(m){return setTimeout(m,r-u.time*1e3+1|0)},_r=1,_(2))},sleep:function(){(h?on.cancelAnimationFrame:clearTimeout)(c),_r=0,l=mr},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),r=u.time*1e3+s},add:function(m,d,y){var x=d?function(v,M,S,T){m(v,M,S,T),u.remove(x)}:m;return u.remove(m),o[y?"unshift":"push"](x),Ns(),x},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},u}(),Ns=function(){return!_r&&Je.wake()},Wt={},ox=/^[\d.\-M][\d.\-,\s]/,ax=/["']/g,lx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,r=n.length,o,c,l;s<r;s++)c=n[s],o=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(ax,"").trim():+l,i=c.substr(o+1).trim();return e},cx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},hx=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[lx(e[1])]:cx(t).split(",").map($u)):Wt._CE&&ox.test(t)?Wt._CE("",t):n},_f=function(t){return function(e){return 1-t(1-e)}},vf=function a(t,e){for(var n=t._first,i;n;)n instanceof Fe?a(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?a(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Bi=function(t,e){return t&&(ae(t)?t:Wt[t]||hx(t))||e},Yi=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},r;return Ve(t,function(o){Wt[o]=tn[o]=s,Wt[r=o.toLowerCase()]=n;for(var c in s)Wt[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Wt[o+"."+c]=s[c]}),s},xf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Pa=function a(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),r=s/$a*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Fv((h-r)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:xf(o);return s=$a/s,c.config=function(l,h){return a(t,l,h)},c},Ca=function a(t,e){e===void 0&&(e=1.70158);var n=function(r){return r?--r*r*((e+1)*r+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:xf(n);return i.config=function(s){return a(t,s)},i};Ve("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var e=t<5?t+1:t;Yi(a+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;Yi("Elastic",Pa("in"),Pa("out"),Pa());(function(a,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?a*o*o:o<n?a*Math.pow(o-1.5/t,2)+.75:o<i?a*(o-=2.25/t)*o+.9375:a*Math.pow(o-2.625/t,2)+.984375};Yi("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Yi("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Yi("Circ",function(a){return-(Vu(1-a*a)-1)});Yi("Sine",function(a){return a===1?1:-Nv(a*Ov)+1});Yi("Back",Ca("in"),Ca("out"),Ca());Wt.SteppedEase=Wt.steps=tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,r=1-Kt;return function(o){return((i*wr(0,r,o)|0)+s)*n}}};Us.ease=Wt["quad.out"];Ve("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Ol+=a+","+a+"Params,"});var yf=function(t,e){this.id=zv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ku,this.set=e?e.getSetter:Bl},Fs=function(){function a(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,zs(this,+e.duration,1,1),this.data=e.data,pe&&(this._ctx=pe,pe.data.push(this)),_r||Je.wake()}var t=a.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(No(this,n),!s._dp||s.parent||ef(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Kt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ju(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Rh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Rh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Os(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Kt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ao(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Kt?0:this._rts,this.totalTime(wr(-Math.abs(this._delay),this._tDur,i),!0),zo(this),jv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Kt&&(this._tTime-=Kt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Cn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Be(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ao(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Vv);var i=Le;return Le=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Le=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(rn(this,n),Be(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Be(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Kt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Kt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Kt)},t.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},t.then=function(n){var i=this;return new Promise(function(s){var r=ae(n)?n:Qu,o=function(){var l=i.then;i.then=null,ae(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=l),s(r),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){tr(this)},a}();fn(Fs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Kt,_prom:0,_ps:!1,_rts:1});var Fe=function(a){Bu(t,a);function t(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Be(n.sortChildren),se&&Cn(n.parent||se,Wn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&nf(Wn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,r){return ar(0,arguments,this),this},e.from=function(i,s,r){return ar(1,arguments,this),this},e.fromTo=function(i,s,r,o){return ar(2,arguments,this),this},e.set=function(i,s,r){return s.duration=0,s.parent=this,or(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new me(i,s,rn(this,r),1),this},e.call=function(i,s,r){return Cn(this,me.delayedCall(0,i,s),r)},e.staggerTo=function(i,s,r,o,c,l,h){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=l,r.onCompleteParams=h,r.parent=this,new me(i,r,rn(this,c)),this},e.staggerFrom=function(i,s,r,o,c,l,h){return r.runBackwards=1,or(r).immediateRender=Be(r.immediateRender),this.staggerTo(i,s,r,o,c,l,h)},e.staggerFromTo=function(i,s,r,o,c,l,h,u){return o.startAt=r,or(o).immediateRender=Be(o.immediateRender),this.staggerTo(i,s,o,c,l,h,u)},e.render=function(i,s,r){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:we(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,p,_,g,m,d,y,x,v,M,S,T;if(this!==se&&h>c&&i>=0&&(h=c),h!==this._tTime||r||u){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),f=h,v=this._start,x=this._ts,d=!x,u&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(f=we(h%m),h===c?(g=this._repeat,f=l):(g=~~(h/m),g&&g===h/m&&(f=l,g--),f>l&&(f=l)),M=Os(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),S&&g&1&&(f=l-f,T=1),g!==M&&!this._lock){var E=S&&M&1,b=E===(S&&g&1);if(g<M&&(E=!E),o=E?0:l,this._lock=1,this.render(o||(T?0:we(g*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,b&&(this._lock=2,o=E?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;vf(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Zv(this,we(o),we(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!g&&(un(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,r),f!==this._time||!this._ts&&!d){y=0,_&&(h+=this._zTime=-Kt);break}}p=_}else{p=this._last;for(var w=i<0?i:f;p;){if(_=p._prev,(p._act||w<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,r||Le&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){y=0,_&&(h+=this._zTime=w?-Kt:Kt);break}}p=_}}if(y&&!s&&(this.pause(),y.render(f>=o?0:-Kt)._zTime=f>=o?1:-1,this._ts))return this._start=v,zo(this),this.render(i,s,r);this._onUpdate&&!s&&un(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&mi(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(un(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var r=this;if(Zn(s)||(s=rn(this,s,i)),!(i instanceof Fs)){if(Re(i))return i.forEach(function(o){return r.add(o,s)}),this;if(Se(i))return this.addLabel(i,s);if(ae(i))i=me.delayedCall(0,i);else return this}return this!==i?Cn(this,i,s):this},e.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-cn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof me?s&&c.push(l):(r&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},e.remove=function(i){return Se(i)?this.removeLabel(i):ae(i)?this.killTweensOf(i):(Oo(this,i),i===this._recent&&(this._recent=this._last),ki(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=we(Je.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=rn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,r){var o=me.delayedCall(0,s||mr,r);return o.data="isPause",this._hasPause=1,Cn(this,o,rn(this,i))},e.removePause=function(i){var s=this._first;for(i=rn(this,i);s;)s._start===i&&s.data==="isPause"&&mi(s),s=s._next},e.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),c=o.length;c--;)ai!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var r=[],o=hn(i),c=this._first,l=Zn(s),h;c;)c instanceof me?Gv(c._targets,o)&&(l?(!ai||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(h=c.getTweensOf(o,s)).length&&r.push.apply(r,h),c=c._next;return r},e.tweenTo=function(i,s){s=s||{};var r=this,o=rn(r,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,p,_=me.to(r,fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale())||Kt,onStart:function(){if(r.pause(),!p){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:r._time))/r.timeScale());_._dur!==m&&zs(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,r){return this.tweenTo(s,fn({startAt:{time:rn(this,i)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ih(this,rn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ih(this,rn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Kt)},e.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,c=this.labels,l;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=r&&(c[l]+=i);return ki(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return a.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ki(this)},e.totalDuration=function(i){var s=0,r=this,o=r._last,c=cn,l,h,u;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(u=r.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&r._sort&&o._ts&&!r._lock?(r._lock=1,Cn(r,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!r._dp||u&&u.smoothChildTiming)&&(r._start+=h/r._ts,r._time-=h,r._tTime-=h),r.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;zs(r,r===se&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(i){if(se._ts&&(Ju(se,Ao(i,se)),Zu=Je.frame),Je.frame>=Ch){Ch+=Qe.autoSleep||120;var s=se._first;if((!s||!s._ts)&&Qe.autoSleep&&Je._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Je.sleep()}}},t}(Fs);fn(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var ux=function(t,e,n,i,s,r,o){var c=new Ge(this._pt,t,e,0,1,Ef,null,s),l=0,h=0,u,f,p,_,g,m,d,y;for(c.b=n,c.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=gr(i)),r&&(y=[n,i],r(y,t,e),n=y[0],i=y[1]),f=n.match(Ta)||[];u=Ta.exec(i);)_=u[0],g=i.substring(l,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Es(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},l=Ta.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Wu.test(i)||d)&&(c.e=0),this._pt=c,c},Nl=function(t,e,n,i,s,r,o,c,l,h){ae(i)&&(i=i(s||0,t,r));var u=t[e],f=n!=="get"?n:ae(u)?l?t[e.indexOf("set")||!ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,p=ae(u)?l?gx:wf:kl,_;if(Se(i)&&(~i.indexOf("random(")&&(i=gr(i)),i.charAt(1)==="="&&(_=Es(f,i)+(Ce(f)||0),(_||_===0)&&(i=_))),!h||f!==i||al)return!isNaN(f*i)&&i!==""?(_=new Ge(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?vx:Tf,0,p),l&&(_.fp=l),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Il(e,i),ux.call(this,t,e,f,i,p,c||Qe.stringFilter,l))},fx=function(t,e,n,i,s){if(ae(t)&&(t=lr(t,s,e,n,i)),!In(t)||t.style&&t.nodeType||Re(t)||Gu(t))return Se(t)?lr(t,s,e,n,i):t;var r={},o;for(o in t)r[o]=lr(t[o],s,e,n,i);return r},Mf=function(t,e,n,i,s,r){var o,c,l,h;if(Ze[t]&&(o=new Ze[t]).init(s,o.rawVars?e[t]:fx(e[t],i,s,r,n),n,i,r)!==!1&&(n._pt=c=new Ge(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ms))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},ai,al,Fl=function a(t,e,n){var i=t.vars,s=i.ease,r=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,d=t._startAt,y=t._targets,x=t.parent,v=x&&x.data==="nested"?x.vars.targets:y,M=t._overwrite==="auto"&&!Cl,S=t.timeline,T,E,b,w,O,N,D,I,z,W,q,H,Q;if(S&&(!_||!s)&&(s="none"),t._ease=Bi(s,Us.ease),t._yEase=p?_f(Bi(p===!0?s:p,Us.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!S&&!!i.runBackwards,!S||_&&!i.stagger){if(I=y[0]?Fi(y[0]).harness:0,H=I&&i[I.prop],T=Eo(i,Ul),d&&(d._zTime<0&&d.progress(1),e<0&&f&&o&&!g?d.render(-1,!0):d.revert(f&&m?po:Bv),d._lazy=0),r){if(mi(t._startAt=me.set(y,fn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Be(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:h,callbackScope:u,stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le||!o&&!g)&&t._startAt.revert(po),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(o=!1),b=fn({overwrite:!1,data:"isFromStart",lazy:o&&!d&&Be(c),immediateRender:o,stagger:0,parent:x},T),H&&(b[I.prop]=H),mi(t._startAt=me.set(y,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le?t._startAt.revert(po):t._startAt.render(-1,!0)),t._zTime=e,!o)a(t._startAt,Kt,Kt);else if(!e)return}for(t._pt=t._ptCache=0,c=m&&Be(c)||c&&!m,E=0;E<y.length;E++){if(O=y[E],D=O._gsap||zl(y)[E]._gsap,t._ptLookup[E]=W={},el[D.id]&&fi.length&&To(),q=v===y?E:v.indexOf(O),I&&(z=new I).init(O,H||T,t,q,v)!==!1&&(t._pt=w=new Ge(t._pt,O,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(tt){W[tt]=w}),z.priority&&(N=1)),!I||H)for(b in T)Ze[b]&&(z=Mf(b,T,t,q,O,v))?z.priority&&(N=1):W[b]=w=Nl.call(t,O,b,"get",T[b],q,v,0,i.stringFilter);t._op&&t._op[E]&&t.kill(O,t._op[E]),M&&t._pt&&(ai=t,se.killTweensOf(O,W,t.globalTime(e)),Q=!t.parent,ai=0),t._pt&&c&&(el[D.id]=1)}N&&Af(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!Q,_&&e<=0&&S.render(cn,!0,!0)},dx=function(t,e,n,i,s,r,o){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(l=u[f][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return al=1,t.vars[e]="+=0",Fl(t,o),al=0,1;c.push(l)}for(f=c.length;f--;)h=c[f],l=h._pt||h,l.s=(i||i===0)&&!s?i:l.s+(i||0)+r*l.c,l.c=n-l.s,h.e&&(h.e=ue(n)+Ce(h.e)),h.b&&(h.b=l.s+Ce(h.b))},px=function(t,e){var n=t[0]?Fi(t[0]).harness:0,i=n&&n.aliases,s,r,o,c;if(!i)return e;s=qi({},e);for(r in i)if(r in s)for(c=i[r].split(","),o=c.length;o--;)s[c[o]]=s[r];return s},mx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",r,o;if(Re(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(r in e)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(t),v:e[r],e:s})},lr=function(t,e,n,i,s){return ae(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?gr(t):t},bf=Ol+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Sf={};Ve(bf+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Sf[a]=1});var me=function(a){Bu(t,a);function t(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:or(i))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,p=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,d=c.yoyoEase,y=i.parent||se,x=(Re(n)||Gu(n)?Zn(n[0]):"length"in i)?[n]:hn(n),v,M,S,T,E,b,w,O;if(o._targets=x.length?zl(x):wo("GSAP target "+n+" not found. https://greensock.com",!Qe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||eo(l)||eo(h)){if(i=o.vars,v=o.timeline=new Fe({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Wn(o),v._start=0,f||eo(l)||eo(h)){if(T=x.length,w=f&&af(f),In(f))for(E in f)~bf.indexOf(E)&&(O||(O={}),O[E]=f[E]);for(M=0;M<T;M++)S=Eo(i,Sf),S.stagger=0,d&&(S.yoyoEase=d),O&&qi(S,O),b=x[M],S.duration=+lr(l,Wn(o),M,b,x),S.delay=(+lr(h,Wn(o),M,b,x)||0)-o._delay,!f&&T===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),v.to(b,S,w?w(M,b,x):0),v._ease=Wt.none;v.duration()?l=h=0:o.timeline=0}else if(_){or(fn(v.vars.defaults,{ease:"none"})),v._ease=Bi(_.ease||i.ease||"none");var N=0,D,I,z;if(Re(_))_.forEach(function(W){return v.to(x,W,">")}),v.duration();else{S={};for(E in _)E==="ease"||E==="easeEach"||mx(E,_[E],S,_.easeEach);for(E in S)for(D=S[E].sort(function(W,q){return W.t-q.t}),N=0,M=0;M<D.length;M++)I=D[M],z={ease:I.e,duration:(I.t-(M?D[M-1].t:0))/100*l},z[E]=I.v,v.to(x,z,N),N+=z.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||o.duration(l=v.duration())}else o.timeline=0;return p===!0&&!Cl&&(ai=Wn(o),se.killTweensOf(x),ai=0),Cn(y,Wn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!l&&!_&&o._start===we(y._time)&&Be(u)&&qv(Wn(o))&&y.data!=="nested")&&(o._tTime=-Kt,o.render(Math.max(0,-h)||0)),m&&nf(Wn(o),m),o}var e=t.prototype;return e.render=function(i,s,r){var o=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-Kt&&!h?c:i<Kt?0:i,f,p,_,g,m,d,y,x,v;if(!l)Yv(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,x=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,r);if(f=we(u%g),u===c?(_=this._repeat,f=l):(_=~~(u/g),_&&_===u/g&&(f=l,_--),f>l&&(f=l)),d=this._yoyo&&_&1,d&&(v=this._yEase,f=l-f),m=Os(this._tTime,g),f===o&&!r&&this._initted)return this._tTime=u,this;_!==m&&(x&&this._yEase&&vf(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=r=1,this.render(we(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(sf(this,h?i:f,r,s,u))return this._tTime=0,this;if(o!==this._time)return this;if(l!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/l),this._from&&(this.ratio=y=1-y),f&&!o&&!s&&!_&&(un(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;x&&x.render(i<0?i:!f&&d?-Kt:x._dur*x._ease(f/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&nl(this,i,s,r),un(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&un(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&nl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&mi(this,1),!s&&!(h&&!o)&&(u||o||d)&&(un(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,r,o){_r||Je.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Fl(this,c),l=this._ease(c/this._dur),dx(this,i,s,r,o,l,c)?this.resetTo(i,s,r,o):(No(this,0),this.parent||tf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?tr(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ai&&ai.vars.overwrite!==!0)._first||tr(this),this.parent&&r!==this.timeline.totalDuration()&&zs(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,c=i?hn(i):o,l=this._ptLookup,h=this._pt,u,f,p,_,g,m,d;if((!s||s==="all")&&Wv(o,c))return s==="all"&&(this._pt=0),tr(this);for(u=this._op=this._op||[],s!=="all"&&(Se(s)&&(g={},Ve(s,function(y){return g[y]=1}),s=g),s=px(o,s)),d=o.length;d--;)if(~c.indexOf(o[d])){f=l[d],s==="all"?(u[d]=s,_=f,p={}):(p=u[d]=u[d]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Oo(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&tr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ar(1,arguments)},t.delayedCall=function(i,s,r,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},t.fromTo=function(i,s,r){return ar(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,r){return se.killTweensOf(i,s,r)},t}(Fs);fn(me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ve("staggerTo,staggerFrom,staggerFromTo",function(a){me[a]=function(){var t=new Fe,e=sl.call(arguments,0);return e.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,e)}});var kl=function(t,e,n){return t[e]=n},wf=function(t,e,n){return t[e](n)},gx=function(t,e,n,i){return t[e](i.fp,n)},_x=function(t,e,n){return t.setAttribute(e,n)},Bl=function(t,e){return ae(t[e])?wf:Ll(t[e])&&t.setAttribute?_x:kl},Tf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},vx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ef=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Vl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},xx=function(t,e,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(t,e,n),s=r},yx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Oo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Mx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Af=function(t){for(var e=t._pt,n,i,s,r;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:r)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:r=e,e=n}t._pt=s},Ge=function(){function a(e,n,i,s,r,o,c,l,h){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||Tf,this.d=c||this,this.set=l||kl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=a.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Mx,this.m=n,this.mt=s,this.tween=i},a}();Ve(Ol+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Ul[a]=1});tn.TweenMax=tn.TweenLite=me;tn.TimelineLite=tn.TimelineMax=Fe;se=new Fe({sortChildren:!1,defaults:Us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qe.stringFilter=gf;var ks=[],go={},bx=[],Oh=0,La=function(t){return(go[t]||bx).map(function(e){return e()})},ll=function(){var t=Date.now(),e=[];t-Oh>2&&(La("matchMediaInit"),ks.forEach(function(n){var i=n.queries,s=n.conditions,r,o,c,l;for(o in i)r=on.matchMedia(i[o]).matches,r&&(c=1),r!==s[o]&&(s[o]=r,l=1);l&&(n.revert(),c&&e.push(n))}),La("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Oh=t,La("matchMedia"))},Pf=function(){function a(e,n){this.selector=n&&rl(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=a.prototype;return t.add=function(n,i,s){ae(n)&&(s=i,i=n,n=ae);var r=this,o=function(){var l=pe,h=r.selector,u;return l&&l!==r&&l.data.push(r),s&&(r.selector=rl(s)),pe=r,u=i.apply(r,arguments),ae(u)&&r._r.push(u),pe=l,r.selector=h,r.isReverted=!1,u};return r.last=o,n===ae?o(r):n?r[n]=o:o},t.ignore=function(n){var i=pe;pe=null,n(this),pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof me&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return r.splice(r.indexOf(l),1)}))}),r.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Fs)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var o=ks.indexOf(this);~o&&ks.splice(o,1)}},t.revert=function(n){this.kill(n||{})},a}(),Sx=function(){function a(e){this.contexts=[],this.scope=e}var t=a.prototype;return t.add=function(n,i,s){In(n)||(n={matches:n});var r=new Pf(0,s||this.scope),o=r.conditions={},c,l,h;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(l in n)l==="all"?h=1:(c=on.matchMedia(n[l]),c&&(ks.indexOf(r)<0&&ks.push(r),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(ll):c.addEventListener("change",ll)));return h&&i(r),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),Po={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return df(i)})},timeline:function(t){return new Fe(t)},getTweensOf:function(t,e){return se.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=hn(t)[0]);var s=Fi(t||{}).get,r=n?Qu:$u;return n==="native"&&(n=""),t&&(e?r((Ze[e]&&Ze[e].get||s)(t,e,n,i)):function(o,c,l){return r((Ze[o]&&Ze[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=hn(t),t.length>1){var i=t.map(function(h){return He.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var r=Ze[e],o=Fi(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=r?function(h){var u=new r;Ms._pt=0,u.init(t,n?h+n:h,Ms,0,[t]),u.render(1,u),Ms._pt&&Vl(1,Ms)}:o.set(t,c);return r?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=He.to(t,qi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),r=function(c,l,h){return s.resetTo(e,c,l,h)};return r.tween=s,r},isTweening:function(t){return se.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Bi(t.ease,Us.ease)),Lh(Us,t||{})},config:function(t){return Lh(Qe,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,r=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ze[o]&&!tn[o]&&wo(e+" effect requires "+o+" plugin.")}),Ea[e]=function(o,c,l){return n(hn(o),fn(c||{},s),l)},r&&(Fe.prototype[e]=function(o,c,l){return this.add(Ea[e](o,In(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Wt[t]=Bi(e)},parseEase:function(t,e){return arguments.length?Bi(t,e):Wt},getById:function(t){return se.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Fe(t),i,s;for(n.smoothChildTiming=Be(t.smoothChildTiming),se.remove(n),n._dp=0,n._time=n._tTime=se._time,i=se._first;i;)s=i._next,(e||!(!i._dur&&i instanceof me&&i.vars.onComplete===i._targets[0]))&&Cn(n,i,i._start-i._delay),i=s;return Cn(se,n,0),n},context:function(t,e){return t?new Pf(t,e):pe},matchMedia:function(t){return new Sx(t)},matchMediaRefresh:function(){return ks.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ll()},addEventListener:function(t,e){var n=go[t]||(go[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=go[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:nx,wrapYoyo:ix,distribute:af,random:cf,snap:lf,normalize:ex,getUnit:Ce,clamp:Jv,splitColor:pf,toArray:hn,selector:rl,mapRange:uf,pipe:Qv,unitize:tx,interpolate:sx,shuffle:of},install:Xu,effects:Ea,ticker:Je,updateRoot:Fe.updateRoot,plugins:Ze,globalTimeline:se,core:{PropTween:Ge,globals:Yu,Tween:me,Timeline:Fe,Animation:Fs,getCache:Fi,_removeLinkedListItem:Oo,reverting:function(){return Le},context:function(t){return t&&pe&&(pe.data.push(t),t._ctx=pe),pe},suppressOverwrites:function(t){return Cl=t}}};Ve("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Po[a]=me[a]});Je.add(Fe.updateRoot);Ms=Po.to({},{duration:0});var wx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Tx=function(t,e){var n=t._targets,i,s,r;for(i in e)for(s=n.length;s--;)r=t._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=wx(r,i)),r&&r.modifier&&r.modifier(e[i],t,n[s],i))},Ra=function(t,e){return{name:t,rawVars:1,init:function(i,s,r){r._onInit=function(o){var c,l;if(Se(s)&&(c={},Ve(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}Tx(o,s)}}}},He=Po.registerPlugin({name:"attr",init:function(t,e,n,i,s){var r,o,c;this.tween=n;for(r in e)c=t.getAttribute(r)||"",o=this.add(t,"setAttribute",(c||0)+"",e[r],i,s,0,0,r),o.op=r,o.b=c,this._props.push(r)},render:function(t,e){for(var n=e._pt;n;)Le?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ra("roundProps",ol),Ra("modifiers"),Ra("snap",lf))||Po;me.version=Fe.version=He.version="3.11.5";qu=1;Rl()&&Ns();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zh,li,As,Gl,zi,Nh,Hl,Ex=function(){return typeof window<"u"},Kn={},Ci=180/Math.PI,Ps=Math.PI/180,ds=Math.atan2,Fh=1e8,Wl=/([A-Z])/g,Ax=/(left|right|width|margin|padding|x)/i,Px=/[\s,\(]\S/,Ln={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Lx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Rx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Cf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Lf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Dx=function(t,e,n){return t.style[e]=n},Ix=function(t,e,n){return t.style.setProperty(e,n)},Ux=function(t,e,n){return t._gsap[e]=n},Ox=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},zx=function(t,e,n,i,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},Nx=function(t,e,n,i,s){var r=t._gsap;r[e]=n,r.renderTransform(s,r)},oe="transform",Mn=oe+"Origin",Fx=function a(t,e){var n=this,i=this.target,s=i.style;if(t in Kn){if(this.tfm=this.tfm||{},t!=="transform")t=Ln[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return n.tfm[r]=jn(i,r)}):this.tfm[t]=i._gsap.x?i._gsap[t]:jn(i,t);else return Ln.transform.split(",").forEach(function(r){return a.call(n,r,e)});if(this.props.indexOf(oe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Mn,e,"")),t=oe}(s||e)&&this.props.push(t,e,s[t])},Rf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,r;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Wl,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Hl(),(!s||!s.isStart)&&!n[oe]&&(Rf(n),i.uncache=1)}},Df=function(t,e){var n={target:t,props:[],revert:kx,save:Fx};return t._gsap||He.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},If,hl=function(t,e){var n=li.createElementNS?li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):li.createElement(t);return n.style?n:li.createElement(t)},Dn=function a(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Wl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&a(t,Bs(e)||e,1)||""},kh="O,Moz,ms,Ms,Webkit".split(","),Bs=function(t,e,n){var i=e||zi,s=i.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(kh[r]+t in s););return r<0?null:(r===3?"ms":r>=0?kh[r]:"")+t},ul=function(){Ex()&&window.document&&(zh=window,li=zh.document,As=li.documentElement,zi=hl("div")||{style:{}},hl("div"),oe=Bs(oe),Mn=oe+"Origin",zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",If=!!Bs("perspective"),Hl=He.core.reverting,Gl=1)},Da=function a(t){var e=hl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(As.appendChild(e),e.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),As.removeChild(e),this.style.cssText=s,r},Bh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Uf=function(t){var e;try{e=t.getBBox()}catch{e=Da.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Da||(e=Da.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Bh(t,["x","cx","x1"])||0,y:+Bh(t,["y","cy","y1"])||0,width:0,height:0}:e},Of=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Uf(t))},vr=function(t,e){if(e){var n=t.style;e in Kn&&e!==Mn&&(e=oe),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Wl,"-$1").toLowerCase())):n.removeAttribute(e)}},ci=function(t,e,n,i,s,r){var o=new Ge(t._pt,e,n,0,1,r?Lf:Cf);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Vh={deg:1,rad:1,turn:1},Bx={grid:1,flex:1},gi=function a(t,e,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=zi.style,c=Ax.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",p=i==="%",_,g,m,d;return i===r||!s||Vh[i]||Vh[r]?s:(r!=="px"&&!f&&(s=a(t,e,n,"px")),d=t.getCTM&&Of(t),(p||r==="%")&&(Kn[e]||~e.indexOf("adius"))?(_=d?t.getBBox()[c?"width":"height"]:t[h],ue(p?s/_*u:s/100*_)):(o[c?"width":"height"]=u+(f?r:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===li||!g.appendChild)&&(g=li.body),m=g._gsap,m&&p&&m.width&&c&&m.time===Je.time&&!m.uncache?ue(s/m.width*u):((p||r==="%")&&!Bx[Dn(g,"display")]&&(o.position=Dn(t,"position")),g===t&&(o.position="static"),g.appendChild(zi),_=zi[h],g.removeChild(zi),o.position="absolute",c&&p&&(m=Fi(g),m.time=Je.time,m.width=g[h]),ue(f?_*s/u:_&&s?u/_*s:0))))},jn=function(t,e,n,i){var s;return Gl||ul(),e in Ln&&e!=="transform"&&(e=Ln[e],~e.indexOf(",")&&(e=e.split(",")[0])),Kn[e]&&e!=="transform"?(s=yr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Lo(Dn(t,Mn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Co[e]&&Co[e](t,e,n)||Dn(t,e)||Ku(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gi(t,e,s,n)+n:s},Vx=function(t,e,n,i){if(!n||n==="none"){var s=Bs(e,t,1),r=s&&Dn(t,s,1);r&&r!==n?(e=s,n=r):e==="borderColor"&&(n=Dn(t,"borderTopColor"))}var o=new Ge(this._pt,t.style,e,0,1,Ef),c=0,l=0,h,u,f,p,_,g,m,d,y,x,v,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Dn(t,e)||i,t.style[e]=n),h=[n,i],gf(h),n=h[0],i=h[1],f=n.match(ys)||[],M=i.match(ys)||[],M.length){for(;u=ys.exec(i);)m=u[0],y=i.substring(c,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[l++]||"")&&(p=parseFloat(g)||0,v=g.substr((p+"").length),m.charAt(1)==="="&&(m=Es(p,m)+v),d=parseFloat(m),x=m.substr((d+"").length),c=ys.lastIndex-x.length,x||(x=x||Qe.units[e]||v,c===i.length&&(i+=x,o.e+=x)),v!==x&&(p=gi(t,e,g,x)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:p,c:d-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?Lf:Cf;return Wu.test(i)&&(o.e=0),this._pt=o,o},Gh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Gh[n]||n,e[1]=Gh[i]||i,e.join(" ")},Hx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,r=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],Kn[o]&&(c=1,o=o==="transformOrigin"?Mn:oe),vr(n,o);c&&(vr(n,oe),r&&(r.svg&&n.removeAttribute("transform"),yr(n,1),r.uncache=1,Rf(i)))}},Co={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var r=t._pt=new Ge(t._pt,e,n,0,0,Hx);return r.u=i,r.pr=-10,r.tween=s,t._props.push(n),1}}},xr=[1,0,0,1,0,0],zf={},Nf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Hh=function(t){var e=Dn(t,oe);return Nf(e)?xr:e.substr(7).match(Hu).map(ue)},jl=function(t,e){var n=t._gsap||Fi(t),i=t.style,s=Hh(t),r,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?xr:s):(s===xr&&!t.offsetParent&&t!==As&&!n.svg&&(c=i.display,i.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(l=1,o=t.nextElementSibling,As.appendChild(t)),s=Hh(t),c?i.display=c:vr(t,"display"),l&&(o?r.insertBefore(t,o):r?r.appendChild(t):As.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fl=function(t,e,n,i,s,r){var o=t._gsap,c=s||jl(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,p=c[0],_=c[1],g=c[2],m=c[3],d=c[4],y=c[5],x=e.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,S,T,E,b;n?c!==xr&&(T=p*m-_*g)&&(E=v*(m/T)+M*(-g/T)+(g*y-m*d)/T,b=v*(-_/T)+M*(p/T)-(p*y-_*d)/T,v=E,M=b):(S=Uf(t),v=S.x+(~x[0].indexOf("%")?v/100*S.width:v),M=S.y+(~(x[1]||x[0]).indexOf("%")?M/100*S.height:M)),i||i!==!1&&o.smooth?(d=v-l,y=M-h,o.xOffset=u+(d*p+y*g)-d,o.yOffset=f+(d*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Mn]="0px 0px",r&&(ci(r,o,"xOrigin",l,v),ci(r,o,"yOrigin",h,M),ci(r,o,"xOffset",u,o.xOffset),ci(r,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},yr=function(t,e){var n=t._gsap||new yf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,r="px",o="deg",c=getComputedStyle(t),l=Dn(t,Mn)||"0",h,u,f,p,_,g,m,d,y,x,v,M,S,T,E,b,w,O,N,D,I,z,W,q,H,Q,tt,xt,it,j,Z,ct;return h=u=f=g=m=d=y=x=v=0,p=_=1,n.svg=!!(t.getCTM&&Of(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[oe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[oe]!=="none"?c[oe]:"")),i.scale=i.rotate=i.translate="none"),T=jl(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),l=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),fl(t,q||l,!!q||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,S=n.yOrigin||0,T!==xr&&(O=T[0],N=T[1],D=T[2],I=T[3],h=z=T[4],u=W=T[5],T.length===6?(p=Math.sqrt(O*O+N*N),_=Math.sqrt(I*I+D*D),g=O||N?ds(N,O)*Ci:0,y=D||I?ds(D,I)*Ci+g:0,y&&(_*=Math.abs(Math.cos(y*Ps))),n.svg&&(h-=M-(M*O+S*D),u-=S-(M*N+S*I))):(ct=T[6],j=T[7],tt=T[8],xt=T[9],it=T[10],Z=T[11],h=T[12],u=T[13],f=T[14],E=ds(ct,it),m=E*Ci,E&&(b=Math.cos(-E),w=Math.sin(-E),q=z*b+tt*w,H=W*b+xt*w,Q=ct*b+it*w,tt=z*-w+tt*b,xt=W*-w+xt*b,it=ct*-w+it*b,Z=j*-w+Z*b,z=q,W=H,ct=Q),E=ds(-D,it),d=E*Ci,E&&(b=Math.cos(-E),w=Math.sin(-E),q=O*b-tt*w,H=N*b-xt*w,Q=D*b-it*w,Z=I*w+Z*b,O=q,N=H,D=Q),E=ds(N,O),g=E*Ci,E&&(b=Math.cos(E),w=Math.sin(E),q=O*b+N*w,H=z*b+W*w,N=N*b-O*w,W=W*b-z*w,O=q,z=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=ue(Math.sqrt(O*O+N*N+D*D)),_=ue(Math.sqrt(W*W+ct*ct)),E=ds(z,W),y=Math.abs(E)>2e-4?E*Ci:0,v=Z?1/(Z<0?-Z:Z):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Nf(Dn(t,oe)),q&&t.setAttribute("transform",q))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(p*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=f+r,n.scaleX=ue(p),n.scaleY=ue(_),n.rotation=ue(g)+o,n.rotationX=ue(m)+o,n.rotationY=ue(d)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+r,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Mn]=Lo(l)),n.xOffset=n.yOffset=0,n.force3D=Qe.force3D,n.renderTransform=n.svg?jx:If?Ff:Wx,n.uncache=0,n},Lo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ia=function(t,e,n){var i=Ce(e);return ue(parseFloat(e)+parseFloat(gi(t,"x",n+"px",i)))+i},Wx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ff(t,e)},wi="0deg",Ys="0px",Ti=") ",Ff=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,y=n.target,x=n.zOrigin,v="",M=d==="auto"&&t&&t!==1||d===!0;if(x&&(u!==wi||h!==wi)){var S=parseFloat(h)*Ps,T=Math.sin(S),E=Math.cos(S),b;S=parseFloat(u)*Ps,b=Math.cos(S),r=Ia(y,r,T*b*-x),o=Ia(y,o,-Math.sin(S)*-x),c=Ia(y,c,E*b*-x+x)}m!==Ys&&(v+="perspective("+m+Ti),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||r!==Ys||o!==Ys||c!==Ys)&&(v+=c!==Ys||M?"translate3d("+r+", "+o+", "+c+") ":"translate("+r+", "+o+Ti),l!==wi&&(v+="rotate("+l+Ti),h!==wi&&(v+="rotateY("+h+Ti),u!==wi&&(v+="rotateX("+u+Ti),(f!==wi||p!==wi)&&(v+="skew("+f+", "+p+Ti),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ti),y.style[oe]=v||"translate(0, 0)"},jx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,y=n.forceCSS,x=parseFloat(r),v=parseFloat(o),M,S,T,E,b;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Ps,l*=Ps,M=Math.cos(c)*u,S=Math.sin(c)*u,T=Math.sin(c-l)*-f,E=Math.cos(c-l)*f,l&&(h*=Ps,b=Math.tan(l-h),b=Math.sqrt(1+b*b),T*=b,E*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,S*=b)),M=ue(M),S=ue(S),T=ue(T),E=ue(E)):(M=u,E=f,S=T=0),(x&&!~(r+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=gi(p,"x",r,"px"),v=gi(p,"y",o,"px")),(_||g||m||d)&&(x=ue(x+_-(_*M+g*T)+m),v=ue(v+g-(_*S+g*E)+d)),(i||s)&&(b=p.getBBox(),x=ue(x+i/100*b.width),v=ue(v+s/100*b.height)),b="matrix("+M+","+S+","+T+","+E+","+x+","+v+")",p.setAttribute("transform",b),y&&(p.style[oe]=b)},qx=function(t,e,n,i,s){var r=360,o=Se(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Ci:1),l=c-i,h=i+l+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),u==="cw"&&l<0?l=(l+r*Fh)%r-~~(l/r)*r:u==="ccw"&&l>0&&(l=(l-r*Fh)%r-~~(l/r)*r)),t._pt=f=new Ge(t._pt,e,n,i,l,Cx),f.e=h,f.u="deg",t._props.push(n),f},Wh=function(t,e){for(var n in e)t[n]=e[n];return t},Xx=function(t,e,n){var i=Wh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,c,l,h,u,f,p,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[oe]=e,o=yr(n,1),vr(n,oe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[oe],r[oe]=e,o=yr(n,1),r[oe]=l);for(c in Kn)l=i[c],h=o[c],l!==h&&s.indexOf(c)<0&&(p=Ce(l),_=Ce(h),u=p!==_?gi(n,c,l,_):parseFloat(l),f=parseFloat(h),t._pt=new Ge(t._pt,o,c,u,f-u,cl),t._pt.u=_||0,t._props.push(c));Wh(o,i)};Ve("padding,margin,Width,Radius",function(a,t){var e="Top",n="Right",i="Bottom",s="Left",r=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?a+o:"border"+o+a});Co[t>1?"border"+a:a]=function(o,c,l,h,u){var f,p;if(arguments.length<4)return f=r.map(function(_){return jn(o,_,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},r.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(c,p,u)}});var kf={name:"css",register:ul,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var r=this._props,o=t.style,c=n.vars.startAt,l,h,u,f,p,_,g,m,d,y,x,v,M,S,T,E;Gl||ul(),this.styles=this.styles||Df(t),E=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Ze[g]&&Mf(g,e,n,i,t,s)))){if(p=typeof h,_=Co[g],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=gr(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",di.lastIndex=0,di.test(l)||(m=Ce(l),d=Ce(h)),d?m!==d&&(l=gi(t,g,l,d)+d):m&&(h+=m),this.add(o,"setProperty",l,h,i,s,0,0,g),r.push(g),E.push(g,0,o[g]);else if(p!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,s):c[g],Se(l)&&~l.indexOf("random(")&&(l=gr(l)),Ce(l+"")||(l+=Qe.units[g]||Ce(jn(t,g))||""),(l+"").charAt(1)==="="&&(l=jn(t,g))):l=jn(t,g),f=parseFloat(l),y=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in Ln&&(g==="autoAlpha"&&(f===1&&jn(t,"visibility")==="hidden"&&u&&(f=0),E.push("visibility",0,o.visibility),ci(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Ln[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Kn,x){if(this.styles.save(g),v||(M=t._gsap,M.renderTransform&&!e.parseTransform||yr(t,e.parseTransform),S=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new Ge(this._pt,o,oe,0,1,M.renderTransform,M,0,-1),v.dep=1),g==="scale")this._pt=new Ge(this._pt,M,"scaleY",M.scaleY,(y?Es(M.scaleY,y+u):u)-M.scaleY||0,cl),this._pt.u=0,r.push("scaleY",g),g+="X";else if(g==="transformOrigin"){E.push(Mn,0,o[Mn]),h=Gx(h),M.svg?fl(t,h,0,S,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==M.zOrigin&&ci(this,M,"zOrigin",M.zOrigin,d),ci(this,o,g,Lo(l),Lo(h)));continue}else if(g==="svgOrigin"){fl(t,h,1,S,0,this);continue}else if(g in zf){qx(this,M,g,f,y?Es(f,y+h):h);continue}else if(g==="smoothOrigin"){ci(this,M,"smooth",M.smooth,h);continue}else if(g==="force3D"){M[g]=h;continue}else if(g==="transform"){Xx(this,h,t);continue}}else g in o||(g=Bs(g)||g);if(x||(u||u===0)&&(f||f===0)&&!Px.test(h)&&g in o)m=(l+"").substr((f+"").length),u||(u=0),d=Ce(h)||(g in Qe.units?Qe.units[g]:m),m!==d&&(f=gi(t,g,l,d)),this._pt=new Ge(this._pt,x?M:o,g,f,(y?Es(f,y+u):u)-f,!x&&(d==="px"||g==="zIndex")&&e.autoRound!==!1?Rx:cl),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=l,this._pt.r=Lx);else if(g in o)Vx.call(this,t,g,l,y?y+h:h);else if(g in t)this.add(t,g,l||t[g],y?y+h:h,i,s);else if(g!=="parseTransform"){Il(g,h);continue}x||(g in o?E.push(g,0,o[g]):E.push(g,1,l||t[g])),r.push(g)}}T&&Af(this)},render:function(t,e){if(e.tween._time||!Hl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:jn,aliases:Ln,getSetter:function(t,e,n){var i=Ln[e];return i&&i.indexOf(",")<0&&(e=i),e in Kn&&e!==Mn&&(t._gsap.x||jn(t,"x"))?n&&Nh===n?e==="scale"?Ox:Ux:(Nh=n||{})&&(e==="scale"?zx:Nx):t.style&&!Ll(t.style[e])?Dx:~e.indexOf("-")?Ix:Bl(t,e)},core:{_removeProperty:vr,_getMatrix:jl}};He.utils.checkPrefix=Bs;He.core.getStyleSaver=Df;(function(a,t,e,n){var i=Ve(a+","+t+","+e,function(s){Kn[s]=1});Ve(t,function(s){Qe.units[s]="deg",zf[s]=1}),Ln[i[13]]=a+","+t,Ve(n,function(s){var r=s.split(":");Ln[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ve("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){Qe.units[a]="px"});He.registerPlugin(kf);var dl=He.registerPlugin(kf)||He;dl.core.Tween;class jh extends Al{constructor(t){super(t)}load(t,e,n,i){const s=this,r=new Nu(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){const c=s.parse(JSON.parse(o));e&&e(c)},n,i)}parse(t){return new Yx(t)}}class Yx{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Zx(t,e,this.data);for(let s=0,r=i.length;s<r;s++)n.push(...i[s].toShapes());return n}}function Zx(a,t,e){const n=Array.from(a),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,r=[];let o=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)o=0,c-=s;else{const u=Kx(h,i,o,c,e);o+=u.offsetX,r.push(u.path)}}return r}function Kx(a,t,e,n,i){const s=i.glyphs[a]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const r=new Uv;let o,c,l,h,u,f,p,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=g.length;m<d;)switch(g[m++]){case"m":o=g[m++]*t+e,c=g[m++]*t+n,r.moveTo(o,c);break;case"l":o=g[m++]*t+e,c=g[m++]*t+n,r.lineTo(o,c);break;case"q":l=g[m++]*t+e,h=g[m++]*t+n,u=g[m++]*t+e,f=g[m++]*t+n,r.quadraticCurveTo(u,f,l,h);break;case"b":l=g[m++]*t+e,h=g[m++]*t+n,u=g[m++]*t+e,f=g[m++]*t+n,p=g[m++]*t+e,_=g[m++]*t+n,r.bezierCurveTo(u,f,p,_,l,h);break}}return{offsetX:s.ha*t,path:r}}class Gn extends Tl{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}Qt.prototype.rotateAroundWorldAxis=function(a,t,e){var n=new ye;const i=new P;i.copy(a).sub(t).normalize(),n.setFromAxisAngle(i,e),this.applyQuaternion(n),this.position.sub(a),this.position.applyQuaternion(n),this.position.add(a)};Qt.prototype.rotateAroundWorldAxis2=function(a,t,e){const n=new P;n.copy(a).sub(t).normalize(),this.position.sub(a),this.rotateOnWorldAxis(n,e),this.position.add(a)};const ps=(a,t,e)=>a*(1-e)+t*e;let no,Zs;const Xn=6+1;new P(50,50,50);let Jx=new P(Xn*1,-Xn,-Xn),$x=new P(20,20,20),qh=new P(-Xn,-Xn,-Xn),Xh=new P(-Xn,-Xn,-Xn),ii;class Qx{constructor(t){this.planes=[],this.editor=t,this.createPlanes(),this.dir=1,this.strings=t.strings,this.size=.4,this.sizeText=.5}createPlanes(){let t=this.editor.sizeProj;const e=1.01;let n=new Is(2*t+2,2*t+2),i=new An({visible:!0,transparent:!0,opacity:.1,color:16711680});const s=new ht(n,i);s.rotateY(Math.PI/2),s.translateZ(-t-e),s.userData.rot=new P(0,-1,0),s.userData.dir=new P(-1,0,0),this.planes.push(s),i=new An({visible:!0,transparent:!0,opacity:.1,color:65280});const r=new ht(n,i);r.translateY(-t-e),r.rotateX(-Math.PI/2),r.userData.rot=new P(1,0,0),r.userData.dir=new P(0,-1,0),this.planes.push(r),i=new An({visible:!0,transparent:!0,opacity:.1,color:255});const o=new ht(n,i);o.translateZ(-t-e),o.userData.rot=!1,o.userData.dir=new P(0,0,-1),this.planes.push(o),new jh().load("../assets/fonts/gentilis_regular.typeface.json",_=>{this.font=_;let g=new Gn(this.strings.getKey("planeprojec/plan"),{font:_,size:this.sizeText,height:0});const m=[new bo({color:"black",transparent:!0,opacity:.5})];let d=new ht(g,m),y=-t-1,x=t+1,v=.15*Math.sqrt(y*y+x*x+.1*.1);d.position.set(y+.75*v,-x+.5*v,.1),d.scale.set(v,v,v),d.rotateZ(Math.PI/2),r.add(d),r.indexText=r.children.length-1,g=new Gn(this.strings.getKey("planeprojec/elevation"),{font:_,size:this.sizeText,height:0}),d=new ht(g,m),y=-t-1,x=t+1,v=.15*Math.sqrt(y*y+x*x+.1*.1),d.position.set(y+.25*v,x-.75*v,.1),d.scale.set(v,v,v),s.add(d),s.indexText=s.children.length-1,g=new Gn(this.strings.getKey("planeprojec/profile"),{font:_,size:this.sizeText,height:0}),d=new ht(g,m),y=-t-1,x=t+1,v=.15*Math.sqrt(y*y+x*x+.1*.1),d.position.set(y+.25*v,x-.75*v,.1),d.scale.set(v,v,v),o.add(d),o.indexText=o.children.length-1});let l=new oi,h=new to(2*t,2*t,10066329,11184810);l.add(h);let u=new to(t+4,2,2228224);u.layers.enableAll(),u.material.depthFunc=ka,u.material.vertexColors=!1,l.rotateX(Math.PI/2),s.add(l);let f=l.clone();o.add(f);let p=l.clone();r.add(p),this.planeY=r,this.planeZ=o,r.userData.angleTot=0,o.userData.angleTot=0}createPlanes1(){let n=new Is(14,14),i=new An({visible:!0,transparent:!0,opacity:.1,color:16711680});const s=new ht(n,i);s.rotateY(Math.PI/2),s.translateZ(-7-0),s.userData.rot=new P(0,-1,0),s.userData.dir=new P(-1,0,0),this.planes.push(s),i=new An({visible:!0,transparent:!0,opacity:.1,color:65280});const r=new ht(n,i);r.translateY(-7-0),r.rotateX(-Math.PI/2),r.userData.rot=new P(1,0,0),r.userData.dir=new P(0,-1,0),this.planes.push(r),i=new An({visible:!0,transparent:!0,opacity:.1,color:255});const o=new ht(n,i);o.translateZ(-7-0),o.userData.rot=!1,o.userData.dir=new P(0,0,-1),this.planes.push(o),new jh().load("../../../assets/fonts/gentilis_regular.typeface.json",_=>{this.font=_;let g=new Gn(this.strings.getKey("planeprojec/plan"),{font:_,size:this.size,height:0});const m=[new bo({color:"black"})];let d=new ht(g,m);d.translateX(-7*.9),d.translateY(-7*.95),d.rotateZ(Math.PI/2),r.add(d),r.indexText=r.children.length-1,g=new Gn(this.strings.getKey("planeprojec/elevation"),{font:_,size:this.size,height:0}),d=new ht(g,m),d.translateX(-7*.95),d.translateY(7*.9),s.add(d),s.indexText=s.children.length-1,g=new Gn(this.strings.getKey("planeprojec/profile"),{font:_,size:this.size,height:0}),d=new ht(g,m),d.translateX(-7*.95),d.translateY(7*.9),o.add(d),o.indexText=o.children.length-1});let l=new oi,h=new to(7+4,7+4,8947848);h.layers.enableAll(),h.material.color.setHex(161061272),h.material.vertexColors=!1,l.add(h);let u=new to(7+4,2,2228224);u.layers.enableAll(),u.material.color.setHex(7829367),u.material.depthFunc=ka,u.material.vertexColors=!1,l.add(u),l.rotateX(Math.PI/2),s.add(l);let f=l.clone();o.add(f);let p=l.clone();r.add(p),this.planeY=r,this.planeZ=o,r.userData.angleTot=0,o.userData.angleTot=0}vistas(t,e,n,i,s=1){this.editor=t;let r=Math.PI/2/60,o=dl.timeline({repeat:-1,repeatDelay:1e-4,onRepeat:()=>{this.planeY.userData.angleTot+Math.PI/2/60>Math.PI/2&&(r=Math.PI/2-this.planeY.userData.angleTot),this.planeY.rotateAroundWorldAxis(this.points[0],this.points[1],s*r),this.planeZ.rotateAroundWorldAxis(this.points[2],this.points[3],s*r),this.planeY.userData.angleTot+=r,this.planeY.userData.angleTot>=Math.PI/2&&(o.pause(0),this.planeY.userData.angleTot=0,this.planeZ.userData.angleTot=0)}}),c={t:0},l;dl.to(c,{duration:1,t:1,onStart:()=>{l=this.editor.controls.orbit.target.clone()},onUpdate:()=>{this.editor.camera.position.x=ps(no.x,Zs.x,c.t),this.editor.camera.position.y=ps(no.y,Zs.y,c.t),this.editor.camera.position.z=ps(no.z,Zs.z,c.t),this.editor.camera.lookAt(ps(l.x,ii.x,c.t),ps(l.y,ii.y,c.t),ps(l.z,ii.z,c.t))},onComplete:()=>{this.editor.camera.updateProjectionMatrix(),s==1?this.editor.controls.orbit.target.set(ii.x,ii.y,ii.z):this.editor.controls.orbit.target.set(0,0,0),this.editor.controls.orbit.update(),c.t=0}})}desplegar(t){no=t.camera.position.clone(),this.dir==1?(Zs=Jx.clone(),ii=qh.clone(),qh.clone()):(Zs=$x.clone(),ii=Xh.clone(),Xh.clone()),this.points=[];const e=6+1;this.points.push(new P(-e,-e,-e)),this.points.push(new P(-e,-e,e)),this.points.push(new P(-e,e,-e)),this.points.push(new P(-e,-e,-e)),this.vistas(t,this.planes[1],this.planes[2],this.points,this.dir),this.dir*=-1}updateText(t){this.planes[1].children[this.planes[1].indexText].geometry=new Gn(t.strings.getKey("planeprojec/plan"),{font:this.font,size:this.size,height:0}),this.planes[0].children[this.planes[0].indexText].geometry=new Gn(t.strings.getKey("planeprojec/elevation"),{font:this.font,size:this.size,height:0}),this.planes[2].children[this.planes[2].indexText].geometry=new Gn(t.strings.getKey("planeprojec/profile"),{font:this.font,size:this.size,height:0})}}const Yh={type:"change"},Ua={type:"start"},Zh={type:"end"};class ty extends Xi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Ut),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ut),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yh),n.update(),s=i.NONE},this.update=function(){const R=new P,$=new ye().setFromUnitVectors(t.up,new P(0,1,0)),V=$.clone().invert(),pt=new P,yt=new ye,St=2*Math.PI;return function(){const bt=n.object.position;R.copy(bt).sub(n.target),R.applyQuaternion($),o.setFromVector3(R),n.autoRotate&&s===i.NONE&&b(T()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Dt=n.minAzimuthAngle,Ft=n.maxAzimuthAngle;return isFinite(Dt)&&isFinite(Ft)&&(Dt<-Math.PI?Dt+=St:Dt>Math.PI&&(Dt-=St),Ft<-Math.PI?Ft+=St:Ft>Math.PI&&(Ft-=St),Dt<=Ft?o.theta=Math.max(Dt,Math.min(Ft,o.theta)):o.theta=o.theta>(Dt+Ft)/2?Math.max(Dt,o.theta):Math.min(Ft,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),R.setFromSpherical(o),R.applyQuaternion(V),bt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||pt.distanceToSquared(n.object.position)>r||8*(1-yt.dot(n.object.quaternion))>r?(n.dispatchEvent(Yh),pt.copy(n.object.position),yt.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",ut),n.domElement.removeEventListener("wheel",wt),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",ut),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ut),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Ah,c=new Ah;let l=1;const h=new P;let u=!1;const f=new lt,p=new lt,_=new lt,g=new lt,m=new lt,d=new lt,y=new lt,x=new lt,v=new lt,M=[],S={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function b(R){c.theta-=R}function w(R){c.phi-=R}const O=function(){const R=new P;return function(V,pt){R.setFromMatrixColumn(pt,0),R.multiplyScalar(-V),h.add(R)}}(),N=function(){const R=new P;return function(V,pt){n.screenSpacePanning===!0?R.setFromMatrixColumn(pt,1):(R.setFromMatrixColumn(pt,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(V),h.add(R)}}(),D=function(){const R=new P;return function(V,pt){const yt=n.domElement;if(n.object.isPerspectiveCamera){const St=n.object.position;R.copy(St).sub(n.target);let gt=R.length();gt*=Math.tan(n.object.fov/2*Math.PI/180),O(2*V*gt/yt.clientHeight,n.object.matrix),N(2*pt*gt/yt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(V*(n.object.right-n.object.left)/n.object.zoom/yt.clientWidth,n.object.matrix),N(pt*(n.object.top-n.object.bottom)/n.object.zoom/yt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(R){n.object.isPerspectiveCamera?l/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(R){n.object.isPerspectiveCamera?l*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(R){f.set(R.clientX,R.clientY)}function q(R){y.set(R.clientX,R.clientY)}function H(R){g.set(R.clientX,R.clientY)}function Q(R){p.set(R.clientX,R.clientY),_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;b(2*Math.PI*_.x/$.clientHeight),w(2*Math.PI*_.y/$.clientHeight),f.copy(p),n.update()}function tt(R){x.set(R.clientX,R.clientY),v.subVectors(x,y),v.y>0?I(E()):v.y<0&&z(E()),y.copy(x),n.update()}function xt(R){m.set(R.clientX,R.clientY),d.subVectors(m,g).multiplyScalar(n.panSpeed),D(d.x,d.y),g.copy(m),n.update()}function it(R){R.deltaY<0?z(E()):R.deltaY>0&&I(E()),n.update()}function j(R){let $=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),$=!0;break}$&&(R.preventDefault(),n.update())}function Z(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);f.set(R,$)}}function ct(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);g.set(R,$)}}function mt(){const R=M[0].pageX-M[1].pageX,$=M[0].pageY-M[1].pageY,V=Math.sqrt(R*R+$*$);y.set(0,V)}function B(){n.enableZoom&&mt(),n.enablePan&&ct()}function Lt(){n.enableZoom&&mt(),n.enableRotate&&Z()}function Ct(R){if(M.length==1)p.set(R.pageX,R.pageY);else{const V=ft(R),pt=.5*(R.pageX+V.x),yt=.5*(R.pageY+V.y);p.set(pt,yt)}_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;b(2*Math.PI*_.x/$.clientHeight),w(2*Math.PI*_.y/$.clientHeight),f.copy(p)}function at(R){if(M.length===1)m.set(R.pageX,R.pageY);else{const $=ft(R),V=.5*(R.pageX+$.x),pt=.5*(R.pageY+$.y);m.set(V,pt)}d.subVectors(m,g).multiplyScalar(n.panSpeed),D(d.x,d.y),g.copy(m)}function Mt(R){const $=ft(R),V=R.pageX-$.x,pt=R.pageY-$.y,yt=Math.sqrt(V*V+pt*pt);x.set(0,yt),v.set(0,Math.pow(x.y/y.y,n.zoomSpeed)),I(v.y),y.copy(x)}function nt(R){n.enableZoom&&Mt(R),n.enablePan&&at(R)}function K(R){n.enableZoom&&Mt(R),n.enableRotate&&Ct(R)}function et(R){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",vt),n.domElement.addEventListener("pointerup",ut)),G(R),R.pointerType==="touch"?jt(R):At(R))}function vt(R){n.enabled!==!1&&(R.pointerType==="touch"?L(R):Pt(R))}function ut(R){st(R),M.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",ut)),n.dispatchEvent(Zh),s=i.NONE}function At(R){let $;switch(R.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Zi.DOLLY:if(n.enableZoom===!1)return;q(R),s=i.DOLLY;break;case Zi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;H(R),s=i.PAN}else{if(n.enableRotate===!1)return;W(R),s=i.ROTATE}break;case Zi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;W(R),s=i.ROTATE}else{if(n.enablePan===!1)return;H(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ua)}function Pt(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(R);break;case i.DOLLY:if(n.enableZoom===!1)return;tt(R);break;case i.PAN:if(n.enablePan===!1)return;xt(R);break}}function wt(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(Ua),it(R),n.dispatchEvent(Zh))}function Ut(R){n.enabled===!1||n.enablePan===!1||j(R)}function jt(R){switch(rt(R),M.length){case 1:switch(n.touches.ONE){case Ki.ROTATE:if(n.enableRotate===!1)return;Z(),s=i.TOUCH_ROTATE;break;case Ki.PAN:if(n.enablePan===!1)return;ct(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ki.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),s=i.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ua)}function L(R){switch(rt(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ct(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;at(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;nt(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;K(R),n.update();break;default:s=i.NONE}}function A(R){n.enabled!==!1&&R.preventDefault()}function G(R){M.push(R)}function st(R){delete S[R.pointerId];for(let $=0;$<M.length;$++)if(M[$].pointerId==R.pointerId){M.splice($,1);return}}function rt(R){let $=S[R.pointerId];$===void 0&&($=new lt,S[R.pointerId]=$),$.set(R.pageX,R.pageY)}function ft(R){const $=R.pointerId===M[0].pointerId?M[1]:M[0];return S[$.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",ut),n.domElement.addEventListener("wheel",wt,{passive:!1}),this.update()}}const Ei=new ku,Ne=new P,si=new P,te=new ye,Kh={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},Oa={type:"change"},Jh={type:"mouseDown"},$h={type:"mouseUp",mode:null},Qh={type:"objectChange"};class ey extends Qt{constructor(t,e){super(),e===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document),this.isTransformControls=!0,this.visible=!1,this.domElement=e,this.domElement.style.touchAction="none";const n=new ay;this._gizmo=n,this.add(n);const i=new ly;this._plane=i,this.add(i);const s=this;function r(y,x){let v=x;Object.defineProperty(s,y,{get:function(){return v!==void 0?v:x},set:function(M){v!==M&&(v=M,i[y]=M,n[y]=M,s.dispatchEvent({type:y+"-changed",value:M}),s.dispatchEvent(Oa))}}),s[y]=x,i[y]=x,n[y]=x}r("camera",t),r("object",void 0),r("enabled",!0),r("axis",null),r("mode","translate"),r("translationSnap",null),r("rotationSnap",null),r("scaleSnap",null),r("space","world"),r("size",1),r("dragging",!1),r("showX",!0),r("showY",!0),r("showZ",!0);const o=new P,c=new P,l=new ye,h=new ye,u=new P,f=new ye,p=new P,_=new P,g=new P,m=0,d=new P;r("worldPosition",o),r("worldPositionStart",c),r("worldQuaternion",l),r("worldQuaternionStart",h),r("cameraPosition",u),r("cameraQuaternion",f),r("pointStart",p),r("pointEnd",_),r("rotationAxis",g),r("rotationAngle",m),r("eye",d),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new ye,this._parentQuaternionInv=new ye,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new ye,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new ye,this._scaleStart=new P,this._getPointer=ny.bind(this),this._onPointerDown=sy.bind(this),this._onPointerHover=iy.bind(this),this._onPointerMove=ry.bind(this),this._onPointerUp=oy.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;Ei.setFromCamera(t,this.camera);const e=za(this._gizmo.picker[this.mode],Ei);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t.button!==0)&&this.axis!==null){Ei.setFromCamera(t,this.camera);const e=za(this._plane,Ei,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Jh.mode=this.mode,this.dispatchEvent(Jh)}}pointerMove(t){const e=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(s="world"),i===void 0||e===null||this.dragging===!1||t.button!==-1)return;Ei.setFromCamera(t,this.camera);const r=za(this._plane,Ei,!0);if(!!r){if(this.pointEnd.copy(r.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(te.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(Ne.setFromMatrixPosition(i.parent.matrixWorld)),e.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Ne.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(e.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),si.set(o,o,o)}else Ne.copy(this.pointStart),si.copy(this.pointEnd),Ne.applyQuaternion(this._worldQuaternionInv),si.applyQuaternion(this._worldQuaternionInv),si.divide(Ne),e.search("X")===-1&&(si.x=1),e.search("Y")===-1&&(si.y=1),e.search("Z")===-1&&(si.z=1);i.scale.copy(this._scaleStart).multiply(si),this.scaleSnap&&(e.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(Ne.setFromMatrixPosition(this.camera.matrixWorld));e==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ne.copy(this.rotationAxis).cross(this.eye))*o):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Kh[e]),Ne.copy(Kh[e]),s==="local"&&Ne.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Ne.cross(this.eye).normalize())*o),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&e!=="E"&&e!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(te.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(te.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Oa),this.dispatchEvent(Qh)}}pointerUp(t){t.button===0&&(this.dragging&&this.axis!==null&&($h.mode=this.mode,this.dispatchEvent($h)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}attach(t){return this.object=t,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Oa),this.dispatchEvent(Qh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ei}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function ny(a){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:a.button};{const t=this.domElement.getBoundingClientRect();return{x:(a.clientX-t.left)/t.width*2-1,y:-(a.clientY-t.top)/t.height*2+1,button:a.button}}}function iy(a){if(!!this.enabled)switch(a.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(a));break}}function sy(a){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(a)),this.pointerDown(this._getPointer(a)))}function ry(a){!this.enabled||this.pointerMove(this._getPointer(a))}function oy(a){!this.enabled||(this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(a)))}function za(a,t,e){const n=t.intersectObject(a,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||e)return n[i];return!1}const io=new Sr,Yt=new P(0,1,0),tu=new P(0,0,0),eu=new ne,so=new ye,_o=new ye,Tn=new P,nu=new ne,nr=new P(1,0,0),Li=new P(0,1,0),ir=new P(0,0,1),ro=new P,Ks=new P,Js=new P;class ay extends Qt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new An({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new ui({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const i=e.clone();i.opacity=.5;const s=t.clone();s.color.setHex(16711680);const r=t.clone();r.color.setHex(65280);const o=t.clone();o.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const h=t.clone();h.color.setHex(255),h.opacity=.5;const u=t.clone();u.opacity=.25;const f=t.clone();f.color.setHex(16776960),f.opacity=.25,t.clone().color.setHex(16776960);const _=t.clone();_.color.setHex(7895160);const g=new Pe(0,.04,.1,12);g.translate(0,.05,0);const m=new he(.08,.08,.08);m.translate(0,.04,0);const d=new ee;d.setAttribute("position",new Ot([0,0,0,1,0,0],3));const y=new Pe(.0075,.0075,.5,3);y.translate(0,.25,0);function x(z,W){const q=new Di(z,.0075,3,64,W*Math.PI*2);return q.rotateY(Math.PI/2),q.rotateX(Math.PI/2),q}function v(){const z=new ee;return z.setAttribute("position",new Ot([0,0,0,1,1,1],3)),z}const M={X:[[new ht(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new ht(g,s),[-.5,0,0],[0,0,Math.PI/2]],[new ht(y,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ht(g,r),[0,.5,0]],[new ht(g,r),[0,-.5,0],[Math.PI,0,0]],[new ht(y,r)]],Z:[[new ht(g,o),[0,0,.5],[Math.PI/2,0,0]],[new ht(g,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ht(y,o),null,[Math.PI/2,0,0]]],XYZ:[[new ht(new xs(.1,0),u.clone()),[0,0,0]]],XY:[[new ht(new he(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new ht(new he(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new he(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new ht(new Pe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ht(new Pe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ht(new Pe(.2,0,.6,4),n),[0,.3,0]],[new ht(new Pe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ht(new Pe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ht(new Pe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ht(new xs(.2,0),n)]],XY:[[new ht(new he(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ht(new he(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new he(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new ht(new xs(.01,2),i),null,null,null,"helper"]],END:[[new ht(new xs(.01,2),i),null,null,null,"helper"]],DELTA:[[new Hn(v(),i),null,null,null,"helper"]],X:[[new Hn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Hn(d,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Hn(d,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},E={XYZE:[[new ht(x(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new ht(x(.5,.5),s)]],Y:[[new ht(x(.5,.5),r),null,[0,0,-Math.PI/2]]],Z:[[new ht(x(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ht(x(.75,1),f),null,[0,Math.PI/2,0]]]},b={AXIS:[[new Hn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},w={XYZE:[[new ht(new El(.25,10,8),n)]],X:[[new ht(new Di(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ht(new Di(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ht(new Di(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ht(new Di(.75,.1,2,24),n)]]},O={X:[[new ht(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new ht(y,s),[0,0,0],[0,0,-Math.PI/2]],[new ht(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ht(m,r),[0,.5,0]],[new ht(y,r)],[new ht(m,r),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ht(m,o),[0,0,.5],[Math.PI/2,0,0]],[new ht(y,o),[0,0,0],[Math.PI/2,0,0]],[new ht(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ht(new he(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ht(new he(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new he(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ht(new he(.1,.1,.1),u.clone())]]},N={X:[[new ht(new Pe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ht(new Pe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ht(new Pe(.2,0,.6,4),n),[0,.3,0]],[new ht(new Pe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ht(new Pe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ht(new Pe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ht(new he(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ht(new he(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ht(new he(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ht(new he(.2,.2,.2),n),[0,0,0]]]},D={X:[[new Hn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Hn(d,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Hn(d,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(z){const W=new Qt;for(const q in z)for(let H=z[q].length;H--;){const Q=z[q][H][0].clone(),tt=z[q][H][1],xt=z[q][H][2],it=z[q][H][3],j=z[q][H][4];Q.name=q,Q.tag=j,tt&&Q.position.set(tt[0],tt[1],tt[2]),xt&&Q.rotation.set(xt[0],xt[1],xt[2]),it&&Q.scale.set(it[0],it[1],it[2]),Q.updateMatrix();const Z=Q.geometry.clone();Z.applyMatrix4(Q.matrix),Q.geometry=Z,Q.renderOrder=1/0,Q.position.set(0,0,0),Q.rotation.set(0,0,0),Q.scale.set(1,1,1),W.add(Q)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(M)),this.add(this.gizmo.rotate=I(E)),this.add(this.gizmo.scale=I(O)),this.add(this.picker.translate=I(S)),this.add(this.picker.rotate=I(w)),this.add(this.picker.scale=I(N)),this.add(this.helper.translate=I(T)),this.add(this.helper.rotate=I(b)),this.add(this.helper.scale=I(D)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:_o;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const r=i[s];r.visible=!0,r.rotation.set(0,0,0),r.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),r.scale.set(1,1,1).multiplyScalar(o*this.size/4),r.tag==="helper"){r.visible=!1,r.name==="AXIS"?(r.visible=!!this.axis,this.axis==="X"&&(te.setFromEuler(io.set(0,0,0)),r.quaternion.copy(n).multiply(te),Math.abs(Yt.copy(nr).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Y"&&(te.setFromEuler(io.set(0,0,Math.PI/2)),r.quaternion.copy(n).multiply(te),Math.abs(Yt.copy(Li).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Z"&&(te.setFromEuler(io.set(0,Math.PI/2,0)),r.quaternion.copy(n).multiply(te),Math.abs(Yt.copy(ir).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="XYZE"&&(te.setFromEuler(io.set(0,Math.PI/2,0)),Yt.copy(this.rotationAxis),r.quaternion.setFromRotationMatrix(eu.lookAt(tu,Yt,Li)),r.quaternion.multiply(te),r.visible=this.dragging),this.axis==="E"&&(r.visible=!1)):r.name==="START"?(r.position.copy(this.worldPositionStart),r.visible=this.dragging):r.name==="END"?(r.position.copy(this.worldPosition),r.visible=this.dragging):r.name==="DELTA"?(r.position.copy(this.worldPositionStart),r.quaternion.copy(this.worldQuaternionStart),Ne.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ne.applyQuaternion(this.worldQuaternionStart.clone().invert()),r.scale.copy(Ne),r.visible=this.dragging):(r.quaternion.copy(n),this.dragging?r.position.copy(this.worldPositionStart):r.position.copy(this.worldPosition),this.axis&&(r.visible=this.axis.search(r.name)!==-1));continue}r.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(r.name==="X"&&Math.abs(Yt.copy(nr).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Y"&&Math.abs(Yt.copy(Li).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Z"&&Math.abs(Yt.copy(ir).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XY"&&Math.abs(Yt.copy(ir).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="YZ"&&Math.abs(Yt.copy(nr).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XZ"&&Math.abs(Yt.copy(Li).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1)):this.mode==="rotate"&&(so.copy(n),Yt.copy(this.eye).applyQuaternion(te.copy(n).invert()),r.name.search("E")!==-1&&r.quaternion.setFromRotationMatrix(eu.lookAt(this.eye,tu,Li)),r.name==="X"&&(te.setFromAxisAngle(nr,Math.atan2(-Yt.y,Yt.z)),te.multiplyQuaternions(so,te),r.quaternion.copy(te)),r.name==="Y"&&(te.setFromAxisAngle(Li,Math.atan2(Yt.x,Yt.z)),te.multiplyQuaternions(so,te),r.quaternion.copy(te)),r.name==="Z"&&(te.setFromAxisAngle(ir,Math.atan2(Yt.y,Yt.x)),te.multiplyQuaternions(so,te),r.quaternion.copy(te))),r.visible=r.visible&&(r.name.indexOf("X")===-1||this.showX),r.visible=r.visible&&(r.name.indexOf("Y")===-1||this.showY),r.visible=r.visible&&(r.name.indexOf("Z")===-1||this.showZ),r.visible=r.visible&&(r.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),r.material._color=r.material._color||r.material.color.clone(),r.material._opacity=r.material._opacity||r.material.opacity,r.material.color.copy(r.material._color),r.material.opacity=r.material._opacity,this.enabled&&this.axis&&(r.name===this.axis||this.axis.split("").some(function(c){return r.name===c}))&&(r.material.color.setHex(16776960),r.material.opacity=1)}super.updateMatrixWorld(t)}}class ly extends ht{constructor(){super(new Is(1e5,1e5,2,2),new An({visible:!1,wireframe:!0,side:vn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),ro.copy(nr).applyQuaternion(e==="local"?this.worldQuaternion:_o),Ks.copy(Li).applyQuaternion(e==="local"?this.worldQuaternion:_o),Js.copy(ir).applyQuaternion(e==="local"?this.worldQuaternion:_o),Yt.copy(Ks),this.mode){case"translate":case"scale":switch(this.axis){case"X":Yt.copy(this.eye).cross(ro),Tn.copy(ro).cross(Yt);break;case"Y":Yt.copy(this.eye).cross(Ks),Tn.copy(Ks).cross(Yt);break;case"Z":Yt.copy(this.eye).cross(Js),Tn.copy(Js).cross(Yt);break;case"XY":Tn.copy(Js);break;case"YZ":Tn.copy(ro);break;case"XZ":Yt.copy(Js),Tn.copy(Ks);break;case"XYZ":case"E":Tn.set(0,0,0);break}break;case"rotate":default:Tn.set(0,0,0)}Tn.length()===0?this.quaternion.copy(this.cameraQuaternion):(nu.lookAt(Ne.set(0,0,0),Tn,Yt),this.quaternion.setFromRotationMatrix(nu)),super.updateMatrixWorld(t)}}function cy(a){const t=a.selected;if(t.isMesh||t.geometry.type=="BoxGeometry"||t.extendObject=="extendObject")return;const e=t.parent,n=t.geometry.attributes.position.array;for(let i=0;i<t.userData.vertices.length;i++){const s=e.userData.geometryMap[t.userData.vertices[i].key].vertices,r=t.userData.vertices[i].index,o=new P(n[0+r],n[1+r],n[2+r]),c=t.matrixWorld.clone();o.applyMatrix4(c);const l=e.geometry.getAttribute("position");let h=e.matrixWorld.clone();h.invert();for(let p=0,_=s.length;p<_;p++){let g=s[p];const m=o.clone();m.applyMatrix4(h),l.array[g++]=m.x,l.array[g++]=m.y,l.array[g]=m.z}l.needsUpdate=!0,e.geometry.computeBoundingSphere();const u=e.userData.geometryMap[t.userData.vertices[i].key].point;if(t.type!="Points"){const p=o.clone();p.applyMatrix4(h),u.position.copy(p),u.position.needsUpdate=!0}const f=e.userData.geometryMap[t.userData.vertices[i].key].lines;for(let p=0,_=f.length;p<_;p++){const g=f[p].line;if(g==t)continue;const m=g.geometry.attributes.position.array,d=f[p].index;h=g.matrixWorld.clone(),h.invert();const y=o.clone();y.applyMatrix4(h),m[d+0]=y.x,m[d+1]=y.y,m[d+2]=y.z,g.geometry.attributes.position.needsUpdate=!0}}}class bn{constructor(t){this.dom=t}add(){for(let t=0;t<arguments.length;t++){const e=arguments[t];e instanceof bn?this.dom.appendChild(e.dom):console.error("UIElement:",e,"is not an instance of UIElement.")}return this}remove(){for(let t=0;t<arguments.length;t++){const e=arguments[t];e instanceof bn?this.dom.removeChild(e.dom):console.error("UIElement:",e,"is not an instance of UIElement.")}return this}clear(){for(;this.dom.children.length;)this.dom.removeChild(this.dom.lastChild)}setId(t){return this.dom.id=t,this}getId(){return this.dom.id}setClass(t){return this.dom.className=t,this}addClass(t){return this.dom.classList.add(t),this}removeClass(t){return this.dom.classList.remove(t),this}setStyle(t,e){for(let n=0;n<e.length;n++)this.dom.style[t]=e[n];return this}setDisabled(t){return this.dom.disabled=t,this}setTextContent(t){return this.dom.textContent=t,this}setInnerHTML(t){this.dom.innerHTML=t}getIndexOfChild(t){return Array.prototype.indexOf.call(this.dom.children,t.dom)}}const hy=["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","verticalAlign","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"];hy.forEach(function(a){const t="set"+a.substring(0,1).toUpperCase()+a.substring(1,a.length);bn.prototype[t]=function(){return this.setStyle(a,arguments),this}});const uy=["KeyUp","KeyDown","MouseOver","MouseOut","Click","DblClick","Change","Input"];uy.forEach(function(a){const t="on"+a;bn.prototype[t]=function(e){return this.dom.addEventListener(a.toLowerCase(),e.bind(this),!1),this}});class Bf extends bn{constructor(){super(document.createElement("span"))}}class Vf extends bn{constructor(){super(document.createElement("div"))}}class oo extends Vf{constructor(){super(),this.dom.className="Row"}}class vo extends Vf{constructor(){super(),this.dom.className="Panel"}}class xo extends Bf{constructor(t){super(),this.dom.className="Text",this.dom.style.cursor="default",this.dom.style.display="inline-block",this.setValue(t)}getValue(){return this.dom.textContent}setValue(t){return t!==void 0&&(this.dom.textContent=t),this}}class fy extends bn{constructor(t){super(document.createElement("input")),this.dom.className="Input",this.dom.style.padding="2px",this.dom.style.border="1px solid transparent",this.dom.setAttribute("autocomplete","off"),this.dom.addEventListener("keydown",function(e){e.stopPropagation()},!1),this.setValue(t)}getValue(){return this.dom.value}setValue(t){return this.dom.value=t,this}}class dy extends bn{constructor(t){super(document.createElement("input")),this.dom.className="Checkbox",this.dom.type="checkbox",this.setValue(t)}getValue(){return this.dom.checked}setValue(t){return t!==void 0&&(this.dom.checked=t),this}}class py extends bn{constructor(){super(document.createElement("input")),this.dom.className="Color",this.dom.style.width="32px",this.dom.style.height="16px",this.dom.style.border="0px",this.dom.style.padding="2px",this.dom.style.backgroundColor="transparent",this.dom.setAttribute("autocomplete","off");try{this.dom.type="color",this.dom.value="#ffffff"}catch{}}getValue(){return this.dom.value}getHexValue(){return parseInt(this.dom.value.substr(1),16)}setValue(t){return this.dom.value=t,this}setHexValue(t){return this.dom.value="#"+("000000"+t.toString(16)).slice(-6),this}}class my extends bn{constructor(t){super(document.createElement("button")),this.dom.className="Button",this.dom.textContent=t}}const gy=()=>{const a=new vo;a.setId("barRight"),document.body.appendChild(a.dom);const t=document.createElement("img");t.src="../assets/icons/settings1.png";const e=new my;return e.dom.appendChild(t),a.add(e),{add:n=>{a.dom.appendChild(n.container.dom)},container:a}};class _y extends Bf{constructor(t,e){super(),this.setMarginRight("4px"),this.checkbox=new dy(t),this.text=new xo(e).setMarginLeft("3px"),this.add(this.checkbox),this.add(this.text)}getValue(){return this.checkbox.getValue()}setValue(t){return this.checkbox.setValue(t)}}const vy=a=>{const t=new vo;t.setId("opacityBar"),document.body.appendChild(t.dom);const e=new vo;document.body.appendChild(e.dom),t.add(e);const n=new vo;document.body.appendChild(n.dom),t.add(n);const i=new oo;i.add(new xo(a.strings.getKey("object/base").toUpperCase())),e.add(i);const s=new oo;e.add(s),s.add(new xo("Visible"));const r=new _y(!0);r.onChange(u=>{a.objectSelected.A[0].visible=r.getValue()}),s.add(r);const o=new oo;e.add(o);const c=new fy;c.dom.type="range",c.dom.min="0",c.dom.max="100",c.dom.value="50",c.dom.style.padding="0px",c.dom.style.border="0px solid transparent",c.dom.style.margin="0 0 20px 0",c.dom.style.width="90%",c.dom.setAttribute("data-title",a.strings.getKey("opacity")+" "+c.dom.value+"%"),c.onInput(u=>{a.objectSelected.A[0].material.opacity=u.target.value/100,c.dom.setAttribute("data-title",a.strings.getKey("opacity")+" "+u.target.value+"%")}),o.add(c);const l=new oo;e.add(l),l.add(new xo("Color"));const h=new py().setValue("#0000ff").setMarginLeft("20px");return l.add(h),h.onInput(u=>{a.objectSelected.A[0].material.color.set(h.getHexValue())}),{add:u=>{t.dom.appendChild(u.container.dom)},updateOpacityBar:u=>{console.log(i),c.dom.setAttribute("data-title",u.strings.getKey("opacity")+" "+c.dom.value+"%"),i.dom.innerText=u.strings.getKey("object/base").toUpperCase()},container:t,slider:c}},xy=a=>{const t="TeiDSpace",e={language:"es",permission:100};if(window.localStorage[t]===void 0)window.localStorage[t]=JSON.stringify(e);else{const n=JSON.parse(window.localStorage[t]);for(const i in n)e[i]=n[i]}return{getKey:function(n){return e[n]},setKey:function(){for(let n=0,i=arguments.length;n<i;n+=2)e[arguments[n]]=arguments[n+1];window.localStorage[t]=JSON.stringify(e)},clear:function(){delete window.localStorage[t]}}},yy=a=>{const t={en:{"menubar/views":"Views","menubar/isometric":"Perspective","menubar/pieces":"Pieces","menubar/generator":"Generator","menubar/help":"Help","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"About us...","menubar/soma":"Soma Cube","menubar/somaproject":"Soma Project","menubar/somadevelopment":"Soma Development","menubar/somabuilding":"Soma Building","menubar/somaexercises":"Soma exercices","menubar/objects":"Object","menubar/create":"Create Object","menubar/examples":"Examples","menubar/exercices":"Exercices","menubar/correction":"Correction","menubar/soma6viewsexamples":"Examples 6 views","menubar/soma6viewsexercises":"Exercises 6 views","toolbar/translate":"Translate","toolbar/rotate":"Rotate","toolbar/scale":"Scale","modelbar/cube":"Cube","modelbar/cube1":"Cube 1","modelbar/cube2":"Cube 2","modelbar/cube3":"Cube 3","modelbar/icosahedron":"Icosahedron","select/vertices":"Vertices","select/edges":"Edges","select/objects":"Objects","CSG/selected":"Selecteds: ","CSG/addition":"Addition A \u222A B","CSG/subtraction":"Subtraction A - B","CSG/reversesubtraction":"Reverse Subtraction B - A","CSG/difference":"Difference A \u2295 B","CSG/intersection":"Intersection","file/save":"save","file/load":"load","planeprojec/plan":"Plan","planeprojec/elevation":"Elevation","planeprojec/profile":"Profile","line/visible":"Visible Line","line/hidden":"Hidden Line","line/delete":"Delete Line","line/change":"Change","line/create":"Create","line/red":"Red line","line/black":"Black line","views/open":"Open Views","views/close":"Close Views",solutions:"Solution",opacity:"Opacity","object/base":"Object base","object/auxiliar":"Auxiliar Object","clipboard/copy":"Copy","clipboard/paste":"Paste","soma/cube":"Soma cube","soma/piece":"Piece","number/exercise":"Exercise","number/example":"Example","configBar/size":"Size","configBar/edges":"Edges","configBar/color":"Color","configBar/shadow":"Shadow","configBar/visible":"Visible","configBar/development":"Development"},es:{"menubar/views":"Vistas","menubar/isometric":"Perspectiva","menubar/pieces":"Piezas","menubar/generator":"Generador","menubar/help":"Ayuda","menubar/helptutorials":"Tutoriales","menubar/helpaboutus":"Acerca de...","menubar/soma":"Cubo Soma","menubar/somaproject":"Proyecto Soma","menubar/somadevelopment":"Desarrollo Soma ","menubar/somabuilding":"Construcci\xF3n Soma","menubar/somaexercises":"Soma ejercicios","menubar/soma6viewsexamples":"Ejemplos 6 vistas","menubar/soma6viewsexercises":"Ejercicios 6 vistas","menubar/objects":"Objeto","menubar/create":"Crear Objetos","menubar/examples":"Ejemplos","menubar/exercices":"Ejercicios","menubar/correction":"Correcci\xF3n","toolbar/translate":"Trasladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cubo","modelbar/cube1":"Cubo 1","modelbar/cube2":"Cubo 2","modelbar/cube3":"Cubo 3","modelbar/icosahedron":"Icosaedro","select/vertices":"V\xE9rtices","select/edges":"Aristas","select/objects":"Objetos","CSG/selected":"Seleccionados: ","CSG/addition":"Adici\xF3n A \u222A B","CSG/subtraction":"Sustracci\xF3n A - B","CSG/reversesubtraction":"Sustracci\xF3n inversa B - A","CSG/difference":"Diferencia A \u2295 B","CSG/intersection":"Intersecci\xF3n","file/save":"Guardar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Alzado","planeprojec/profile":"Perfil","line/visible":"L\xEDnea Visible","line/hidden":"L\xEDnea Oculta","line/delete":"Borrar L\xEDnea","line/change":"Cambiar","line/create":"Crear","line/red":"L\xEDnea roja","line/black":"L\xEDnea negra","views/open":"Abir Vistas","views/close":"Cerrar Vistas",solutions:"Soluci\xF3n",opacity:"Opacidad","object/base":"Objeto base","object/auxiliar":"Objeto auxiliar","clipboard/copy":"Copiar","clipboard/paste":"Pegar","soma/cube":"Cubo Soma","soma/piece":"Pieza","number/exercise":"Ejercicio","number/example":"Ejemplo","configBar/size":"Tama\xF1o","configBar/edges":"Aristas","configBar/color":"Color","configBar/shadow":"Sombra","configBar/visible":"Visible","configBar/development":"Desarrollo"},ca:{"menubar/views":"Vistes","menubar/isometric":"Perspectiva","menubar/pieces":"Peces","menubar/generator":"Generador","menubar/help":"Ajuda","menubar/helptutorials":"Tutorials","menubar/helpaboutus":"Sobre...","menubar/soma":"Cub Soma","menubar/somaproject":"Projecte Soma","menubar/somadevelopment":"Desenvolupament Soma ","menubar/somabuilding":"Construcci\xF3 Soma","menubar/somaexercises":"Soma exercicis","menubar/objects":"Objecte","menubar/create":"Crear Objectes","menubar/examples":"Exemples","menubar/exercices":"Exercicis","menubar/correction":"Correcci\xF3","menubar/soma6viewsexamples":"Exemples 6 vistes","menubar/soma6viewsexercises":"Exercicis 6 vistes","toolbar/translate":"Traslladar","toolbar/rotate":"Rotar","toolbar/scale":"Escalar","modelbar/cube":"Cub","modelbar/cube1":"Cub 1","modelbar/cube2":"Cub 2","modelbar/cube3":"Cub 3","modelbar/icosahedron":"Icosaedre","select/vertices":"V\xE8rtexs","select/edges":"Arestes","select/objects":"Objectes","CSG/selected":"Seleccionats: ","CSG/addition":"Adici\xF3 A \u222A B","CSG/subtraction":"Sustracci\xF3 A - B","CSG/reversesubtraction":"Sustracci\xF3 inversa B - A","CSG/difference":"Difer\xE8ncia A \u2295 B","CSG/intersection":"Intersecci\xF3","file/save":"Desar","file/load":"Cargar","planeprojec/plan":"Planta","planeprojec/elevation":"Al\xE7at","planeprojec/profile":"Perfil","line/visible":"L\xEDnia Visible","line/hidden":"L\xEDnia Oculta","line/delete":"Esborrar L\xEDnia","line/change":"Canviar","line/create":"Crear","line/red":"L\xEDnia vermella","line/black":"L\xEDnia negra","views/open":"Obir Vistes","views/close":"Tancar Vistes",solutions:"Soluci\xF3",opacity:"Opacitat","object/base":"Objecte base","object/auxiliar":"Objecte auxiliar","clipboard/copy":"Copia","clipboard/paste":"Enganxa","soma/cube":"Cub Soma","soma/piece":"Pe\xE7a","number/exercise":"Exercici","number/example":"Exemple","configBar/size":"Tamany","configBar/edges":"Arestes","configBar/color":"Color","configBar/shadow":"Ombra","configBar/visible":"Visible","configBar/development":"Desenvolupament"}};return{getKey:function(e){return t[a.getKey("language")][e]||"???"}}};class iu extends ee{constructor(e=null,n=1){super();Ue(this,"addFace",(e,n,i,s=new P)=>this.faces.push({a:e,b:n,c:i,normal:s,splitted:!1}));this.type="BufferGeometry",e!=null&&(this.thresholdDot=Math.cos(Math.PI/180*n),this.geometry=e,e.attributes.position!==void 0&&this.update(e,n))}fromBufferGeometry(e){if(e.attributes.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;this.vertices=[],this.faces=[];const i=e.getIndex(),s=e.getAttribute("position"),r=i!==null?i.count:s.count;for(let c=0,l=r,h=this.vertices;c<l;c++)h.push(new P().fromBufferAttribute(s,c));const o=e.groups;if(o.length>0)for(let c=0,l=o.length;c<l;c++){const h=o[c],u=h.start,f=h.count;for(let p=u,_=u+f;p<_;p+=3)i!==null?this.addFace(i.getX(p),i.getX(p+1),i.getX(p+2)):this.addFace(p,p+1,p+2)}else for(let c=0;c<r;c+=3)i!==null?this.addFace(i.getX(c),i.getX(c+1),i.getX(c+2)):this.addFace(c,c+1,c+2);return this}computeFaceNormals(){const e=new P;for(let n=0,i=this.faces.length;n<i;n++){const s=this.faces[n],r=this.vertices[s.a],o=this.vertices[s.b],c=this.vertices[s.c];e.subVectors(r,o),s.normal.subVectors(c,o),s.normal.cross(e).normalize()}return this}mergeVertices(e=4){const n=Math.pow(10,e),i=l=>{const h=~~(l.x*n),u=~~(l.y*n),f=~~(l.z*n);return`${h},${u},${f}`},s={},r=[],o=[];for(let l=0,h=0,u=this.vertices.length;l<u;l++){const f=this.vertices[l],p=i(f);s[p]===void 0?(s[p]=l,r.push(f),o[l]=h++):o[l]=o[s[p]]}const c=[];for(let l=0,h=this.faces.length;l<h;l++){const u=this.faces[l];u.a=o[u.a],u.b=o[u.b],u.c=o[u.c];const f=[u.a,u.b,u.c,u.a,u.b,u.c];for(let p=0;p<3;p++)if(f[p]===f[p+1]){c.push(l);break}}for(let l=0,h=c.length,u=this.faces;l<h;l++)u.splice(c[l],1);return this.vertices=r,this}update1(e=null){if(e===null||e.attributes.position===void 0)return;const n=[0,0],i={},s=["a","b","c","a","b","c"],r=1e-10,o=.01,c=(_,g)=>_-g;this.fromBufferGeometry(e).mergeVertices().computeFaceNormals();const l=this.vertices,h=this.faces,u=new P,f=new wa;for(let _=0;_<h.length&&_<2e4;_++){const g=h[_];for(let m=0;m<3;m++){n[0]=g[s[m]],n[1]=g[s[m+1]];const d=l[n[0]],y=l[n[1]],x=f.set(d,y).distanceSq()+o;for(let v=0,M=l.length;v<M;v++){if(v===n[0]||v===n[1])continue;let S=l[v],T=S.distanceToSquared(d);if(!(T<r||T>x)&&(T=S.distanceToSquared(y),!(T<r||T>x)&&(f.closestPointToPoint(S,!0,u),u.distanceToSquared(S)<r))){g.splitted=!0,this.addFace(v,g[s[m+2]],g[s[m]],g.normal),this.addFace(v,g[s[m+2]],g[s[m+1]],g.normal);break}}if(g.splitted)break}}for(let _=0,g=h.length;_<g;_++){const m=h[_];if(!m.splitted)for(let d=0;d<3;d++){n[0]=m[s[d]],n[1]=m[s[d+1]],n.sort(c);const y=n.toString();i[y]===void 0?i[y]={vert1:n[0],vert2:n[1],face1:_}:h[i[y].face1].normal.dot(m.normal)>this.thresholdDot&&delete i[y]}}const p=[];for(let _ in i){let g=i[_],m=l[g.vert1];p.push(m.x,m.y,m.z),m=l[g.vert2],p.push(m.x,m.y,m.z)}this.setAttribute("position",new Ot(p,3))}updateFunciona(e=null,n=1){if(e===null||e.attributes.position===void 0)return;const i=Math.cos(Math.PI/180*n),s=[0,0],r={},o={},c=["a","b","c","a","b","c"],l=1e-10,h=.01;this.fromBufferGeometry(e).mergeVertices().computeFaceNormals();const u=this.vertices,f=this.faces;for(let y=0;y<f.length&&y<2e4;y++){const x=f[y];for(let v=0;v<3;v++){s[0]=x[c[v]],s[1]=x[c[v+1]];const M=u[s[0]],S=u[s[1]],T=new wa(M,S),E=M.distanceToSquared(S)+h;for(let b=0,w=u.length;b<w;b++){if(b===s[0]||b===s[1])continue;let O=u[b];const N=O.distanceToSquared(M);if(N<l||N>E)continue;const D=O.distanceToSquared(S);if(D<l||D>E)continue;let I=new P;if(T.closestPointToPoint(O,!0,I),I.distanceToSquared(O)<l){x.splitted=!0,this.addFace(b,x[c[v+2]],x[c[v]],x.normal),this.addFace(b,x[c[v+2]],x[c[v+1]],x.normal);break}}if(x.splitted)break}}const p=new P,_=new P;for(let y=0,x=f.length;y<x;y++){const v=f[y];if(!v.splitted)for(let M=0;M<3;M++){s[0]=v[c[M]],s[1]=v[c[M+1]],s.sort((T,E)=>T-E);const S=s.toString();if(r[S]===void 0)r[S]={vert1:s[0],vert2:s[1],face1:y,face2:void 0},o[s[0]]==null&&(o[s[0]]={});else if(f[r[S].face1].normal.dot(v.normal)>i)delete r[S];else{p.subVectors(u[s[0]],u[s[1]]).normalize();let T=!0;for(let E in o[s[0]]){const b=o[s[0]][E];if(_.subVectors(u[s[0]],u[b.vert2]).normalize(),Math.abs(p.dot(_))>=i){o[s[1]]==null&&(o[s[1]]={}),o[s[1]][b.vert2]={vert1:s[1],vert2:b.vert2,splitted:!1},o[b.vert2][s[1]]={vert1:b.vert2,vert2:s[1],splitted:!1},delete o[s[0]][b.vert2],delete o[b.vert2][s[0]],T=!1;break}}T&&(o[s[0]]==null&&(o[s[0]]={}),o[s[1]]==null&&(o[s[1]]={}),o[s[0]][s[1]]={vert1:s[0],vert2:s[1],splitted:!0},o[s[1]][s[0]]={vert1:s[1],vert2:s[0],splitted:!0})}}}let g=!1,m=Object.keys(o);for(let y=0;y<m.length;y++){const x=m[y];for(let v in o[x])if(!(o[x][v].vert1>=o[x][v].vert2)){for(let M in o[v]){if(o[x][v].vert1>=o[v][M].vert2)continue;const S=u[o[x][v].vert1],T=u[o[x][v].vert2];p.subVectors(T,S).normalize(),g=!1;const E=u[o[v][M].vert2];if(_.subVectors(T,E).normalize(),p.dot(_)<-i){o[x][M]={vert1:o[x][v].vert1,vert2:o[v][M].vert2,splitted:!0},o[M]==null&&(o[M]={}),o[M][x]={vert1:o[v][M].vert2,vert2:o[x][v].vert1,splitted:!0},delete o[x][v],delete o[v][x],delete o[v][M],delete o[M][v],y--,g=!0;break}}if(g)break}}let d=[];for(let y in o)for(let x in o[y]){const v=o[y][x];if(v.vert1>=v.vert2)continue;let M=u[v.vert1];d.push(M.x,M.y,M.z),M=u[v.vert2],d.push(M.x,M.y,M.z)}this.setAttribute("position",new Ot(d,3))}update(e=null,n=1){if(e==null||e.attributes.position===void 0)return;this.calculate=!0;const i=Math.cos(Math.PI/180*n),s=[0,0],r={},o={},c=["a","b","c","a","b","c"],l=1e-10,h=.01,u=(x,v)=>x-v;this.fromBufferGeometry(e).mergeVertices().computeFaceNormals();const f=this.vertices,p=this.faces;for(let x=0;x<p.length&&x<2e4;x++){const v=p[x];for(let M=0;M<3;M++){s[0]=v[c[M]],s[1]=v[c[M+1]];const S=f[s[0]],T=f[s[1]],E=new wa(S,T),b=S.distanceToSquared(T)+h;for(let w=0,O=f.length;w<O;w++){if(w===s[0]||w===s[1])continue;let N=f[w];const D=N.distanceToSquared(S);if(D<l||D>b)continue;const I=N.distanceToSquared(T);if(I<l||I>b)continue;let z=new P;if(E.closestPointToPoint(N,!0,z),z.distanceToSquared(N)<l){v.splitted=!0,this.addFace(w,v[c[M+2]],v[c[M]],v.normal),this.addFace(w,v[c[M+2]],v[c[M+1]],v.normal);break}}if(v.splitted)break}}const _=new P,g=new P;for(let x=0,v=p.length;x<v;x++){const M=p[x];if(!M.splitted)for(let S=0;S<3;S++){s[0]=M[c[S]],s[1]=M[c[S+1]],s.sort(u);const T=s.toString();if(r[T]===void 0)r[T]={vert1:s[0],vert2:s[1],face1:x,face2:void 0};else if(p[r[T].face1].normal.dot(M.normal)>i)delete r[T];else{_.subVectors(f[s[0]],f[s[1]]).normalize();let E=!0;for(let b in o[s[0]]){const w=o[s[0]][b];if(g.subVectors(f[s[0]],f[w.vert2]).normalize(),Math.abs(_.dot(g))>=i){o[s[1]]==null&&(o[s[1]]={}),o[s[1]][w.vert2]={vert1:s[1],vert2:w.vert2,splitted:!1},o[w.vert2][s[1]]={vert1:w.vert2,vert2:s[1],splitted:!1},delete o[s[0]][w.vert2],delete o[w.vert2][s[0]],E=!1;break}}E&&(o[s[0]]==null&&(o[s[0]]={}),o[s[0]][s[1]]={vert1:s[0],vert2:s[1],splitted:!0},o[s[1]]==null&&(o[s[1]]={}),o[s[1]][s[0]]={vert1:s[1],vert2:s[0],splitted:!0})}}}let m=!1;const d=Object.keys(o);for(let x=0,v=d.length;x<v;x++){const M=d[x];for(let S in o[M]){const T=o[M];if(!(T[S].vert1>=T[S].vert2)){for(let E in o[S]){if(o[M][S].vert1>=o[S][E].vert2)continue;const b=o[S],w=T[S],O=f[w.vert1],N=f[w.vert2];_.subVectors(O,N).normalize();const D=f[o[S][E].vert2];if(g.subVectors(N,D).normalize(),m=!1,_.dot(g)>i){T[E]={vert1:w.vert1,vert2:b[E].vert2,splitted:!0},o[E]==null&&(o[E]={}),o[E][M]={vert1:b[E].vert2,vert2:w.vert1,splitted:!0},delete T[S],delete b[M],delete b[E],delete o[E][S],x--,m=!0;break}}if(m)break}}}let y=[];for(let x in o)for(let v in o[x]){const M=o[x][v];if(M.vert1>=M.vert2)continue;let S=f[M.vert1];y.push(S.x,S.y,S.z),S=f[M.vert2],y.push(S.x,S.y,S.z)}this.setAttribute("position",new Ot(y,3)),this.calculate=!1}updateLines(){const e=this.hashLine,n=this.vertices,i=[];for(let s in e)if(!(Object.keys(e[s]).length<1))for(let r in e[s]){const o=e[s][r];let c=n[o.vert1];i.push(c.x,c.y,c.z),c=n[o.vert2],i.push(c.x,c.y,c.z)}this.setAttribute("position",new Ot(i,3))}}class My{constructor(t,e,n=new he(2,2,2),i=!0,s=!0){Ue(this,"object",()=>({children:[],geometry:{attributes:{normal:[],position:[]},boundingSphere:{center:{x:0,y:0,z:0},radius:0}},matrixWorld:{elements:[]},position:{x:0,y:0,z:0}}));this.linesPlanesProj=[[],[],[]],this.planes=e,this.scene=t.scene,this.camera=t.camera,this.points=[],this.lines=[],this.geometryMap={},this.verticesVisibles=i,this.raycaster=t.raycaster,this.addObject(n),i?this.addVertices():this.addVerticesConfig(),this.addEdges(),s&&this.addProject()}copyBasicObject(t,e){let n;if(e.geometry.attributes.normal!=null){n=e.geometry.attributes.normal.array;for(let i=0;i<n.length;i++)t.geometry.attributes.normal.push(n[i])}n=e.geometry.attributes.position.array;for(let i=0;i<n.length;i++)t.geometry.attributes.position.push(n[i]);e.geometry.boundingSphere!=null&&(t.geometry.boundingSphere.center.x=e.geometry.boundingSphere.center.x,t.geometry.boundingSphere.center.y=e.geometry.boundingSphere.center.y,t.geometry.boundingSphere.center.z=e.geometry.boundingSphere.center.z,t.geometry.boundingSphere.raius=this.cube.geometry.boundingSphere.radius),n=this.cube.matrixWorld.elements;for(let i=0;i<n.length;i++)t.matrixWorld.elements.push(n[i]);return t.position.x=e.position.x,t.position.y=e.position.y,t.position.z=e.position.z,t}copyObject(){const t=this.object();let e=this.cube.children;for(let n=0;n<e.length;n++){const i=this.object();t.children.push(this.copyBasicObject(i,e[n]))}return this.copyBasicObject(t,this.cube),t}undoBasicObject(t,e){console.log(t,e);let n;if(e.geometry.attributes.normal.length>0){n=e.geometry.attributes.normal;for(let i=0;i<n.length;i++)t.geometry.attributes.normal.array[i]=n[i]}n=e.geometry.attributes.position;for(let i=0;i<n.length;i++)t.geometry.attributes.position.array[i]=n[i];t.geometry.boundingSphere!=null&&(t.geometry.boundingSphere.center.x=e.geometry.boundingSphere.center.x,t.geometry.boundingSphere.center.y=e.geometry.boundingSphere.center.y,t.geometry.boundingSphere.center.z=e.geometry.boundingSphere.center.z),n=e.matrixWorld.elements;for(let i=0;i<n.length;i++)t.matrixWorld.elements[i]=n[i];t.position.x=e.position.x,t.position.y=e.position.y,t.position.z=e.position.z}undoObject(t){console.log(t);let e=this.cube.children;for(let n=0;n<e.length;n++)this.undoBasicObject(e[n],t.children[n]),e[n].geometry.attributes.position.needsUpdate=!0,e[n].matrixWorldNeedsUpdate=!0;this.undoBasicObject(this.cube,t),this.cube.geometry.attributes.position.needsUpdate=!0,this.cube.matrixWorldNeedsUpdate=!0,this.updateVisible()}addObject(t){const e=new bo({color:this.verticesVisibles?255:153,side:vn});this.cube=new ht(t,e),this.cube.extendObject="extendObject",this.cube.parentObject=this,this.scene.add(this.cube)}addVerticesEdges(){this.edges=new iu(this.cube.geometry,10);const t=new ba({color:16777215,linewidth:1,scale:1,dashSize:.1,gapSize:0});this.lines=new Oi(this.edges,t),this.lines.computeLineDistances(),this.cube.add(this.lines)}addVerticesConfig(){let t=this.cube.geometry.getAttribute("position").array;for(let e=0,n=t.length;e<n;e+=3){const i=ao(t[e+0],t[e+1],t[e+2]);this.geometryMap[i]===void 0?this.geometryMap[i]={point:null,vertices:[e],lines:[]}:this.geometryMap[i].vertices.push(e)}this.cube.userData.geometryMap=this.geometryMap}addVertices(){let t=this.cube.geometry.getAttribute("position").array;const e=new _s({color:0,size:this.camera.isOrthographicCamera?5:.2});for(let n=0,i=t.length;n<i;n+=3){const s=ao(t[n+0],t[n+1],t[n+2]);if(this.geometryMap[s]===void 0){const r=new ee().setFromPoints([{x:0,y:0,z:0}]),o=new uo(r,e);this.points.push(o),this.geometryMap[s]={point:o,vertices:[n],lines:[]},o.position.set(t[n+0],t[n+1],t[n+2]),o.userData.vertices=[{key:s,index:0}],o.parentObject=this,this.cube.add(o)}else this.geometryMap[s].vertices.push(n)}this.cube.userData.geometryMap=this.geometryMap}addEdges(){const t=new iu(this.cube.geometry,10),e=[],n=t.attributes.position.array;for(let i=0,s=n.length;i<s;i+=6){for(let u=0;u<6;u++)e[u]=n[u+i];const r=new ee;r.setAttribute("position",new Ot(e,3));const o=new ui({color:16777215}),c=new Oi(r,o);c.parentObject=this,this.cube.add(c),this.lines.push(c);const l=ao(n[i+0],n[i+1],n[i+2]);this.geometryMap[l].lines.push({line:c,index:0});const h=ao(n[i+3],n[i+4],n[i+5]);this.geometryMap[h].lines.push({line:c,index:3}),c.userData.vertices=[{key:l,index:0},{key:h,index:3}]}}removeProject(){for(let t=0;t<this.linesPlanesProj.length;t++){const e=this.linesPlanesProj[t];for(let n=0,i=e.length;n<i;n++){const s=this.planes[t].children;for(let r=s.length;r>-1;r--)if(s[r]==e[n]){s.splice(r,1);break}}}}addProject(){this.subDivisions=2;for(let t=0;t<this.linesPlanesProj.length;t++){const e=[];for(let n=0,i=this.lines.length;n<i;n++){const s=new oi;for(let r=0;r<this.subDivisions;r++){const o=new ba({color:0,linewidth:1,scale:1,dashSize:.1,gapSize:.05}),c=new ee,l=[],h=r/2,u=(r+1)/2;for(let f=0;f<3;f++)l.push((1-h)*this.lines[n].geometry.attributes.position.array[f]+h*this.lines[n].geometry.attributes.position.array[f+3]);for(let f=0;f<3;f++)l.push((1-u)*this.lines[n].geometry.attributes.position.array[f]+u*this.lines[n].geometry.attributes.position.array[f+3]);c.setAttribute("position",new Ot(l,3)),c.rotateY(Math.PI/2),s.add(new Oi(c,o)),s.children[r].computeLineDistances(),s.children[r].geometry.computeBoundingSphere()}s.userData.vertexI=n,e.push(s),this.planes[t].add(s)}this.linesPlanesProj[t]=e}}addProject1(){for(let t=0;t<this.linesPlanesProj.length;t++){const e=[];for(let n=0,i=this.lines.geometry.attributes.position.array.length;n<i;n+=6){const s=new ba({color:0,linewidth:1,scale:1,dashSize:.1,gapSize:.05}),r=new ee,o=[];for(let l=0;l<6;l++)o.push(this.edges.attributes.position.array[l+n]);r.setAttribute("position",new Ot(o,3));const c=new Oi(r,s);c.userData.vertex1=new P(o[0],o[1],o[2]),c.userData.vertex2=new P(o[3],o[4],o[5]),c.userData.vertex=new P((o[0]+o[3])/2,(o[1]+o[4])/2,(o[2]+o[5])/2),c.computeLineDistances(),e.push(c),r.rotateY(Math.PI/2),this.planes[t].add(c)}this.linesPlanesProj[t]=e}}updateVisible(){let t,e,n,i=new P,s=new P,r;const o=this.linesPlanesProj[0];for(let c=0,l=o.length;c<l;c++){const h=this.lines[o[c].userData.vertexI],u=h.geometry.attributes.position.array;i.set(u[0],u[1],u[2]),s.set(u[3],u[4],u[5]),h.localToWorld(i),h.localToWorld(s);for(let f=0,p=this.linesPlanesProj.length;f<p;f++)for(let _=0,g=this.subDivisions;_<g;_++){t=this.linesPlanesProj[f][c].children[_];const m=this.planes[f];e=i.clone(),n=s.clone(),m.userData.rot&&(e.applyAxisAngle(m.userData.rot,Math.PI/2),n.applyAxisAngle(m.userData.rot,Math.PI/2));const d=_/g,y=(_+1)/g;r=t.geometry.attributes.position.array,r[0]=(1-d)*e.x+d*n.x,r[1]=(1-d)*e.y+d*n.y,r[2]=.01,r[3]=(1-y)*e.x+y*n.x,r[4]=(1-y)*e.y+y*n.y,r[5]=.01,t.computeLineDistances(),t.geometry.computeBoundingSphere(),t.geometry.attributes.position.needsUpdate=!0,t.material.gapSize=this.isVisible(m.userData.dir,c,f,_,g)?0:.3}}}updateVisible2(){let t,e,n,i,s,r,o,c;const l=this.linesPlanesProj[0];for(let h=0,u=l.length;h<u;h++){r=l[h].userData.vertex1.clone(),o=l[h].userData.vertex2.clone(),this.group.localToWorld(r),this.group.localToWorld(o);for(let f=0,p=this.linesPlanesProj.length;f<p;f++)t=this.linesPlanesProj[f][h],e=this.planes[f],n=e.userData.dir,i=r.clone(),s=o.clone(),e.userData.rot&&(i.applyAxisAngle(e.userData.rot,Math.PI/2),s.applyAxisAngle(e.userData.rot,Math.PI/2)),c=t.geometry.attributes.position.array,c[0]=i.x,c[1]=i.y,c[3]=s.x,c[4]=s.y,t.computeLineDistances(),t.geometry.attributes.position.needsUpdate=!0,t.material.gapSize=this.isVisible(n,h,f)?0:.05}}updateVisible1(){for(let t=0,e=this.linesPlanesProj.length;t<e;t++){const n=this.linesPlanesProj[t],i=this.planes[t],s=i.userData.dir;for(let r=0,o=this.linesPlanesProj[0].length;r<o;r++){const c=n[r];c.material.gapSize=this.isVisible(s,r,t)?0:.05;const l=c.userData.vertex1.clone(),h=c.userData.vertex2.clone();this.group.localToWorld(l),this.group.localToWorld(h),i.worldToLocal(l),i.worldToLocal(h);const u=c.geometry.attributes.position.array;u[0]=l.x,u[1]=l.y,u[2]=.01,u[3]=h.x,u[4]=h.y,u[5]=.01,c.computeLineDistances(),c.geometry.attributes.position.needsUpdate=!0}}}isVisible3(t,e,n){const i=this.lines[this.linesPlanesProj[n][e].userData.vertexI],s=i.geometry.attributes.position.array,r=new P((s[0]+s[3])/2,(s[1]+s[4])/2,(s[2]+s[5])/2);return i.localToWorld(r),this.raycaster.set(r,t),this.raycaster.intersectObjects([this.cube],!1).length>0}isVisible(t,e,n,i,s){var _;const r=i/s,o=(i+1)/s,c=this.lines[this.linesPlanesProj[n][e].userData.vertexI],l=c.geometry.attributes.position.array,h=new P(((1-r)*l[0]+r*l[3]+(1-o)*l[0]+o*l[3])/2,((1-r)*l[1]+r*l[4]+(1-o)*l[1]+o*l[4])/2,((1-r)*l[2]+r*l[5]+(1-o)*l[2]+o*l[5])/2);c.localToWorld(h);const u=new P((1-t.x)*h.x-10*t.x,(1-t.y)*h.y-10*t.y,(1-t.z)*h.z-10*t.z),f=h.distanceTo(u);return this.raycaster.set(u,t),!(((_=this.raycaster.intersectObjects([this.cube],!1)[0])==null?void 0:_.distance)<f-.01)}isVisible4(t,e,n){const i=this.lines[this.linesPlanesProj[n][e].userData.vertexI],s=i.geometry.attributes.position.array,r=new P((s[0]+s[3])/2,(s[1]+s[4])/2,(s[2]+s[5])/2);i.localToWorld(r);const o=new P(r.x-10*t.x,r.y-10*t.y,r.z-10*t.z),c=r.distanceTo(o);this.raycaster.set(o,t);const l=this.raycaster.intersectObjects([this.cube],!1);return l.length>0&&Math.abs(l[0].distance-c)<.05}isVisible1(t,e,n){const i=this.linesPlanesProj[n][e].userData.vertexI,s=new P((this.lines[i].geometry.attributes.position.array[0]+this.lines[i].geometry.attributes.position.array[3])/2,(this.lines[i].geometry.attributes.position.array[1]+this.lines[i].geometry.attributes.position.array[4])/2,(this.lines[i].geometry.attributes.position.array[2]+this.lines[i].geometry.attributes.position.array[5])/2);this.lines[i].localToWorld(s);const r=new P((1-t.x)*s.x-10*t.x,(1-t.y)*s.y-10*t.y,(1-t.z)*s.z-10*t.z),o=s.distanceTo(r);this.raycaster.set(r,t);const c=this.raycaster.intersectObjects([this.cube],!1);for(let l=0;l<c.length;l++)if(c[l].distance<o-.1)return!1;return!0}}const ao=(a,t,e,n=4)=>{const i=Math.pow(10,n),s=~~(a*i),r=~~(t*i),o=~~(e*i);return`${s},${r},${o}`};class by{parse(t){console.log(t);let e="",n=0,i=0,s=0;const r=new P;new Ht;const o=new P,c=new lt,l=[];h(t);function h(u){let f=0,p=0,_=0;const g=u.geometry,m=new Gt,d=g.getAttribute("position"),y=g.getAttribute("normal"),x=g.getAttribute("uv"),v=g.getIndex();if(e+="o "+u.name+`
`,u.material&&u.material.name&&(e+="usemtl "+u.material.name+`
`),d!==void 0)for(let M=0,S=d.count;M<S;M++,f++)r.fromBufferAttribute(d,M),r.applyMatrix4(u.matrixWorld),e+="v "+r.x+" "+r.y+" "+r.z+`
`;if(x!==void 0)for(let M=0,S=x.count;M<S;M++,_++)c.fromBufferAttribute(x,M),e+="vt "+c.x+" "+c.y+`
`;if(y!==void 0){m.getNormalMatrix(u.matrixWorld);for(let M=0,S=y.count;M<S;M++,p++)o.fromBufferAttribute(y,M),o.applyMatrix3(m).normalize(),e+="vn "+o.x+" "+o.y+" "+o.z+`
`}if(v!==null)for(let M=0,S=v.count;M<S;M+=3){for(let T=0;T<3;T++){const E=v.getX(M+T)+1;l[T]=n+E+(y||x?"/"+(x?i+E:"")+(y?"/"+(s+E):""):"")}e+="f "+l.join(" ")+`
`}else for(let M=0,S=d.count;M<S;M+=3){for(let T=0;T<3;T++){const E=M+T+1;l[T]=n+E+(y||x?"/"+(x?i+E:"")+(y?"/"+(s+E):""):"")}e+="f "+l.join(" ")+`
`}n+=f,i+=_,s+=p}return e}}const Sy=/^[og]\s*(.+)?/,wy=/^mtllib /,Ty=/^usemtl /,Ey=/^usemap /,su=/\s+/,ru=new P,Na=new P,ou=new P,au=new P,sn=new P,lo=new Ht;function Ay(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;ru.fromArray(i,t),Na.fromArray(i,e),ou.fromArray(i,n),sn.subVectors(ou,Na),au.subVectors(ru,Na),sn.cross(au),sn.normalize(),s.push(sn.x,sn.y,sn.z),s.push(sn.x,sn.y,sn.z),s.push(sn.x,sn.y,sn.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,r,o,c,l){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(e,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),o!==void 0&&o!==""){const _=this.normals.length;u=this.parseNormalIndex(o,_),f=this.parseNormalIndex(c,_),p=this.parseNormalIndex(l,_),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(i!==void 0&&i!==""){const _=this.uvs.length;u=this.parseUVIndex(i,_),f=this.parseUVIndex(s,_),p=this.parseUVIndex(r,_),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,r=t.length;s<r;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,r=e.length;s<r;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return a.startObject("",!1),a}class Py extends Al{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,r=new Nu(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){try{e(s.parse(o))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new Ay;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const u=l.split(su);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(lo.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),e.colors.push(lo.r,lo.g,lo.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=l.slice(1).trim().split(su),p=[];for(let g=0,m=f.length;g<m;g++){const d=f[g];if(d.length>0){const y=d.split("/");p.push(y)}}const _=p[0];for(let g=1,m=p.length-1;g<m;g++){const d=p[g],y=p[g+1];e.addFace(_[0],d[0],y[0],_[1],d[1],y[1],_[2],d[2],y[2])}}else if(h==="l"){const u=l.substring(1).trim().split(" ");let f=[];const p=[];if(l.indexOf("/")===-1)f=u;else for(let _=0,g=u.length;_<g;_++){const m=u[_].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}e.addLineGeometry(f,p)}else if(h==="p"){const f=l.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((i=Sy.exec(l))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);e.startObject(u)}else if(Ty.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(wy.test(l))e.materialLibraries.push(l.substring(7).trim());else if(Ey.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=l.split(" "),i.length>1){const f=i[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const s=new oi;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=e.objects.length;o<c;o++){const l=e.objects[o],h=l.geometry,u=l.materials,f=h.type==="Line",p=h.type==="Points";let _=!1;if(h.vertices.length===0)continue;const g=new ee;g.setAttribute("position",new Ot(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new Ot(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new Ot(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new Ot(h.uvs,2));const m=[];for(let y=0,x=u.length;y<x;y++){const v=u[y],M=v.name+"_"+v.smooth+"_"+_;let S=e.materials[M];if(this.materials!==null){if(S=this.materials.create(v.name),f&&S&&!(S instanceof ui)){const T=new ui;Yn.prototype.copy.call(T,S),T.color.copy(S.color),S=T}else if(p&&S&&!(S instanceof _s)){const T=new _s({size:10,sizeAttenuation:!1});Yn.prototype.copy.call(T,S),T.color.copy(S.color),T.map=S.map,S=T}}S===void 0&&(f?S=new ui:p?S=new _s({size:1,sizeAttenuation:!1}):S=new bo,S.name=v.name,S.flatShading=!v.smooth,S.vertexColors=_,e.materials[M]=S),m.push(S)}let d;if(m.length>1){for(let y=0,x=u.length;y<x;y++){const v=u[y];g.addGroup(v.groupStart,v.groupCount,y)}f?d=new Oi(g,m):p?d=new uo(g,m):d=new ht(g,m)}else f?d=new Oi(g,m[0]):p?d=new uo(g,m[0]):d=new ht(g,m[0]);d.name=l.name,s.add(d)}else if(e.vertices.length>0){const o=new _s({size:1,sizeAttenuation:!1}),c=new ee;c.setAttribute("position",new Ot(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new Ot(e.colors,3)),o.vertexColors=!0);const l=new uo(c,o);s.add(l)}return s}}class Jn{constructor(t){this.dom=t}add(){for(let t=0;t<arguments.length;t++){const e=arguments[t];e instanceof Jn?this.dom.appendChild(e.dom):console.error("UIElement:",e,"is not an instance of UIElement.")}return this}remove(){for(let t=0;t<arguments.length;t++){const e=arguments[t];e instanceof Jn?this.dom.removeChild(e.dom):console.error("UIElement:",e,"is not an instance of UIElement.")}return this}clear(){for(;this.dom.children.length;)this.dom.removeChild(this.dom.lastChild)}setId(t){return this.dom.id=t,this}getId(){return this.dom.id}setClass(t){return this.dom.className=t,this}addClass(t){return this.dom.classList.add(t),this}removeClass(t){return this.dom.classList.remove(t),this}setStyle(t,e){for(let n=0;n<e.length;n++)this.dom.style[t]=e[n];return this}setDisabled(t){return this.dom.disabled=t,this}setTextContent(t){return this.dom.textContent=t,this}setInnerHTML(t){this.dom.innerHTML=t}getIndexOfChild(t){return Array.prototype.indexOf.call(this.dom.children,t.dom)}}const Cy=["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","verticalAlign","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"];Cy.forEach(function(a){const t="set"+a.substring(0,1).toUpperCase()+a.substring(1,a.length);Jn.prototype[t]=function(){return this.setStyle(a,arguments),this}});const Ly=["KeyUp","KeyDown","MouseOver","MouseOut","Click","DblClick","Change","Input"];Ly.forEach(function(a){const t="on"+a;Jn.prototype[t]=function(e){return this.dom.addEventListener(a.toLowerCase(),e.bind(this),!1),this}});class ql extends Jn{constructor(){super(document.createElement("div"))}}class ri extends ql{constructor(){super(),this.dom.className="Panel"}}class Gf extends Jn{constructor(t){super(document.createElement("button")),this.dom.className="Button",this.dom.textContent=t}}class Ry extends Jn{constructor(t,e){super(document.createElement("a")),this.dom.href=e,this.dom.innerHTML=t}}class Dy extends Jn{constructor(t,e){super(document.createElement("a")),this.dom.href=e,this.dom.classList.add("logoTeiDSpace");const n=document.createElement("img");n.src=t,this.dom.appendChild(n);let i=new ql;i.dom.innerHTML="TeiDSpace",i.dom.classList.add("logoText"),this.add(i)}}const Iy=a=>{const t=new ri;t.setId("menubar"),document.body.appendChild(t.dom);const e=new ri;e.setClass("menu logo");const n=new Dy("../assets/icons/logo_TEIDSPACE.png","../TeiDSpace/index.html");e.add(n),t.add(e);for(let i=1;i<a.menu.length;i++){const s=a.menu[i];if(s.permission>a.levelPermission)continue;const r=new ri;r.setClass("menu");const o=new ri;for(let l=0;l<s.classes.length;l++)o.setClass(s.classes[l]);o.setTextContent(a.strings.getKey(s.title)),r.add(o);const c=new ri;c.setClass("options"),r.add(c);for(let l=0;l<s.subMenu.length;l++){const h=s.subMenu[l];if(h.permission>a.levelPermission)continue;const u=new ql;for(let p=0;p<h.classes.length;p++)u.setClass(h.classes[p]);const f=new Ry(a.strings.getKey(h.title),h.link);u.add(f),c.add(u)}t.add(r)}},Uy=({id:a})=>{const t=new ri;return t.setId(a),document.body.appendChild(t.dom),{add:e=>{t.dom.appendChild(e.dom)}}};function Fa({id:a}){let t=new ri;return t.setId(a),t}function co({id:a,cl:t=[],container:e,imgSrc:n,dataTitle:i,selected:s=!0,onClick:r,args:o={}}){const c=document.createElement("img");c.src=`${n}`;const l=new Gf;return l.setId(a),l.dom.setAttribute("data-title",i),t.forEach(h=>l.dom.classList.add(h)),l.dom.appendChild(c),l.onClick(()=>{if(r(o),!!s){for(let h=0;h<e.dom.children.length;h++)e.dom.children[h].classList.remove("selected");l.dom.classList.add("selected")}}),e.add(l),l}const Oy=()=>{const a=new ri;a.setId("TeideLogo"),document.body.appendChild(a.dom);const t=document.createElement("img");t.src="../assets/icons/Teide200x200.png";const e=new Gf;return e.dom.setAttribute("data-title","Editorial Teide"),e.dom.appendChild(t),a.add(e),{container:a}};class zy{constructor(t=window){Ue(this,"newMenu",()=>{this.barRight=gy(),this.opacityBaseBar=vy(this),this.barRight.add(this.opacityBaseBar),this.Teidebar=Oy();const t=Uy({id:"leftbar"}),e=Fa({id:"toolbar"});t.add(e),this.translate=co({id:"translate",cl:["selected"],container:e,imgSrc:"../assets/icons/tools/translate.png",dataTitle:this.strings.getKey("toolbar/translate"),onClick:s=>{this.controls.transform.setMode("translate")}}).dom,this.rotate=co({id:"rotate",cl:[],container:e,imgSrc:"../assets/icons/tools/rotate.png",dataTitle:this.strings.getKey("toolbar/rotate"),onClick:s=>{this.controls.transform.setMode("rotate")}}).dom;const n=Fa({id:"examplesBar"});t.add(n);for(let s=1;s<5;s++)co({id:this.strings.getKey("solutions")+s,cl:s===1?["selected"]:[],container:n,imgSrc:`../assets/icons/numbers/${s}.png`,dataTitle:`${this.strings.getKey("number/example")} ${s}`,onClick:r=>{this.loadObject("./examples/",`${s}`)}});const i=Fa({id:"openCloseViewBar"});i.Close=!0,t.add(i),co({id:"openCloseViewBar1",cl:[],container:i,imgSrc:"../assets/icons/tools/OpenView.png",dataTitle:this.strings.getKey("views/open"),onClick:s=>{const r=i.dom.children[0],o=r.children[0];i.Close?(r.setAttribute("data-title",this.strings.getKey("views/close")),o.src="../assets/icons/tools/CloseView.png"):(r.setAttribute("data-title",this.strings.getKey("views/open")),o.src="../assets/icons/tools/OpenView.png"),i.Close=!i.Close,this.planesP.desplegar(this)}}).dom});Ue(this,"saveObjects",()=>{const e=new by().parse(this.objectSelected.A[0]);let n=new File([e],"Ejercicio1.obj",{type:"text/plain;charset=utf8"});saveAs(n)});Ue(this,"loadObject",(t,e,n={x:0,y:0,z:0})=>{new Py().load(t+e+".obj.txt",s=>{var o;const r=new My(this,this.planesP.planes,s.children[0].geometry,!1);r.cube.material.transparent=!0,r.cube.material.opacity=this.opacityBaseBar.slider.dom.value/100,r.updateVisible(),this.controls.orbit.update(),this.scene.remove(this.cubes[0]),(o=this.objects[0])==null||o.removeProject(),this.objects[0]=r,this.cubes[0]=r.cube,this.objectSelected.A[0]=r.cube,this.controls.updateObjectsControls([r.cube])},s=>{console.log(s.loaded/s.total*100+"% loaded")},s=>{console.log(s,"An error happened")})});Ue(this,"initScene",()=>{this.scene=new Y_;const t=13421772;this.scene.background=new Ht(t)});Ue(this,"initRenderer",()=>{this.renderer=new Cu({antialias:!0}),this.renderer.setPixelRatio(2),this.renderer.setSize(this.containerElement.innerWidth,this.containerElement.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ml,this.canvas=this.renderer.domElement,this.renderer.autoClear=!1,this.body.appendChild(this.canvas),this.containerElement.addEventListener("resize",()=>{this.renderer.setSize(this.containerElement.innerWidth,this.containerElement.innerHeight)})});Ue(this,"initCamera",()=>{this.dim={left:-16,right:16,top:16,bottom:-16};const e=this.canvas.clientWidth/this.canvas.clientHeight,n=e>=1?e:1,i=e>=1?1:1/e;this.camera=new xl(n*this.dim.left,n*this.dim.right,i*this.dim.top,i*this.dim.bottom,-10,300),this.camera.aspect=e,this.camera.position.set(40,40,40),this.camera.updateProjectionMatrix(),this.camera.lookAt(0,0,0),window.addEventListener("resize",()=>{const s=this.canvas.clientWidth/this.canvas.clientHeight,r=s>=1?s:1,o=s>=1?1:1/s;this.camera.left=r*this.dim.left,this.camera.right=r*this.dim.right,this.camera.top=o*this.dim.top,this.camera.bottom=o*this.dim.bottom,this.camera.aspect=s,this.camera.updateProjectionMatrix()})});Ue(this,"initLights2",()=>{let t=new Th(16777215,1.5);t.position.set(1,.75,.5).normalize(),this.scene.add(t)});Ue(this,"initLights",()=>{this.ambientLight=new Iv(3355443),this.scene.add(this.ambientLight),this.directionalLight=new Th(16777215,.5),this.directionalLight.castShadow=!0;var t=15;this.directionalLight.shadow.camera.left=-t,this.directionalLight.shadow.camera.right=t,this.directionalLight.shadow.camera.top=t,this.directionalLight.shadow.camera.bottom=-t,this.directionalLight.shadow.camera.near=2,this.directionalLight.shadow.camera.far=50,this.directionalLight.shadow.mapSize.x=1024,this.directionalLight.shadow.mapSize.y=1024,this.scene.add(this.directionalLight),this.spotLight=new Rv(16777215,1.25),this.spotLight.visible=!1,this.spotLight.position.set(30,30,30),this.spotLight.angle=Math.PI/9,this.spotLight.penumbra=.25,this.spotLight.castShadow=!0,this.spotLight.shadow.camera.near=1,this.spotLight.shadow.camera.far=4e3,this.spotLight.shadow.mapSize.width=1024,this.spotLight.shadow.mapSize.height=1024,this.scene.add(this.spotLight)});Ue(this,"initControls",()=>{this.raycaster.params.Line.threshold=.05,this.raycaster.params.Points.threshold=.1,this.mouse=new lt,this.controls={activeTransform:!0,dragTransform:!0,dragChange:!1,activeTransformCenter:!1,objectsTransform:[],orbit:new ty(this.camera,this.canvas),transform:new ey(this.camera,this.canvas),needUpdate:!1,resetConfigControls:()=>{this.controls.dragTransform=!1,this.controls.selected=null,this.controls.orbit.enabled=!0,this.controls.transform.detach()},updateObjectsControls:e=>{this.controls.objectsTransform=e,this.controls.resetConfigControls()},addObjectsControls:e=>{this.controls.resetConfigControls();for(let n=0;n<e.length;n++)this.controls.objectsTransform.push(e[n])}},this.controls.orbit.minDistance=5,this.controls.orbit.maxDistance=500,this.controls.orbit.maxPolarAngle=Math.PI/1,this.controls.orbit.update(),this.controls.transform.size=.5,this.scene.add(this.controls.transform),this.controls.resetConfigControls(),this.controls.transform.addEventListener("objectChange",e=>{!this.controls.dragTransform||(this.controls.dragChange=!0,t(this.controls,this.controls.transform.object))});const t=(e,n)=>{n.updateMatrixWorld(),cy(e),n.parentObject.updateVisible()};this.controls.transform.addEventListener("dragging-changed",e=>{this.controls.dragTransform=e.value,this.controls.orbit.enabled=!e.value;const n=this.controls.transform.object;n.position.round(),n.rotation.x=Math.round(n.rotation.x/(Math.PI/2))*Math.PI/2,n.rotation.y=Math.round(n.rotation.y/(Math.PI/2))*Math.PI/2,n.rotation.z=Math.round(n.rotation.z/(Math.PI/2))*Math.PI/2,n.scale.round(),n.scale.x=n.scale.x<1?1:n.scale.x,n.scale.y=n.scale.y<1?1:n.scale.y,n.scale.z=n.scale.z<1?1:n.scale.z,t(this.controls,this.controls.transform.object)}),this.canvas.addEventListener("mousedown",e=>{if(this.controls.dragTransform||!this.controls.activeTransform)return;this.mouse.x=e.offsetX/e.target.clientWidth*2-1,this.mouse.y=-(e.offsetY/e.target.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObjects(this.controls.objectsTransform,!1);if(n.length==0)this.controls.transform.detach(),this.controls.orbit.enabled=!0;else{const i=n[0].object;if(i!==this.controls.transform.object){this.controls.transform.detach(),this.controls.transform.attach(i),i.geometry.computeBoundingSphere();const s=i.geometry.boundingSphere.center.clone(),r=i.matrixWorld.clone();s.applyMatrix4(r.setPosition(0,0,0)),this.controls.transform.position.copy(s),this.controls.selected=i}}})});Ue(this,"initConfig",()=>{const t=new URLSearchParams(window.location.search),e=t.get("lang");this.levelPermission=t.get("perm"),this.config=xy(),e!==null&&this.config.setKey("language",e),this.levelPermission!==null?this.config.setKey("permission",this.levelPermission):this.levelPermission=this.config.getKey("permission"),this.strings=yy(this.config)});Ue(this,"initMenu",async()=>{this.menu=await fetch("../common/menu.json").then(t=>t.json()).then(t=>t.menu),this.menuBar=Iy(this)});Ue(this,"initPlanesPorj",()=>{this.planesP=new Qx(this),this.scene.add(this.planesP.planes[0],this.planesP.planes[1],this.planesP.planes[2])});this.containerElement=t,this.body=t!=window?t:document.body,this.objects=[],this.cubes=[],this.lines=[],this.points=[],this.objectSelected={A:[],B:[]},this.raycaster=new ku,this.initScene(),this.initRenderer(),this.initCamera(),this.initLights2(),this.initControls(),this.initConfig(),this.initMenu(),this.newMenu(),this.sizeProj=6,this.initPlanesPorj(),this.loadObject("./examples/",1)}}let Ke=new zy;window.addEventListener("keydown",a=>{switch(a.key.toUpperCase()){case"B":console.log(Ke.cubes),Ke.controls.updateObjectsControls(Ke.cubes);break;case"P":Ke.controls.updateObjectsControls(Ke.points);break;case"L":Ke.controls.updateObjectsControls(Ke.lines);break}});function Hf(){requestAnimationFrame(Hf),Ke.controls.dragChange&&(Ke.controls.selected.parentObject.updateVisible(),Ke.controls.dragChange=!1),Ke.renderer.render(Ke.scene,Ke.camera)}Hf();
