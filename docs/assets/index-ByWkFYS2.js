(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="161",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vh=0,Ko=1,xh=2,fu=1,yh=2,Cn=3,xn=0,It=1,Kt=2,qn=0,qi=1,Zo=2,Jo=3,Qo=4,Mh=5,li=100,Sh=101,Eh=102,$o=103,el=104,Th=200,bh=201,Ah=202,wh=203,Ja=204,Qa=205,Rh=206,Ch=207,Lh=208,Ph=209,Uh=210,Dh=211,Ih=212,Nh=213,Fh=214,Oh=0,Bh=1,kh=2,Is=3,Gh=4,zh=5,Hh=6,Vh=7,du=0,Wh=1,Xh=2,Kn=0,jh=1,Yh=2,qh=3,Kh=4,Zh=5,Jh=6,tl="attached",Qh="detached",pu=300,Ji=301,Qi=302,$a=303,eo=304,Xs=306,$i=1e3,Zt=1001,Ns=1002,Mt=1003,to=1004,Wi=1005,yt=1006,Ls=1007,Ln=1008,Zn=1009,$h=1010,ef=1011,go=1012,mu=1013,jn=1014,gn=1015,Or=1016,gu=1017,_u=1018,hi=1020,tf=1021,Jt=1023,nf=1024,rf=1025,fi=1026,er=1027,sf=1028,vu=1029,af=1030,xu=1031,yu=1033,ca=33776,ua=33777,ha=33778,fa=33779,nl=35840,il=35841,rl=35842,sl=35843,Mu=36196,al=37492,ol=37496,ll=37808,cl=37809,ul=37810,hl=37811,fl=37812,dl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,yl=37820,Ml=37821,da=36492,Sl=36494,El=36495,of=36283,Tl=36284,bl=36285,Al=36286,Br=2300,tr=2301,pa=2302,wl=2400,Rl=2401,Cl=2402,lf=2500,cf=0,Su=1,no=2,Eu=3e3,di=3001,uf=3200,Tu=3201,bu=0,hf=1,Qt="",dt="srgb",St="srgb-linear",_o="display-p3",js="display-p3-linear",Fs="linear",ct="srgb",Os="rec709",Bs="p3",Ai=7680,Ll=519,ff=512,df=513,pf=514,Au=515,mf=516,gf=517,_f=518,vf=519,io=35044,Pl="300 es",ro=1035,Pn=2e3,ks=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Ur=Math.PI/180,nr=180/Math.PI;function hn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function vo(s,e){return(s%e+e)%e}function xf(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function yf(s,e,t){return s!==e?(t-s)/(e-s):0}function Dr(s,e,t){return(1-t)*s+t*e}function Mf(s,e,t,i){return Dr(s,e,1-Math.exp(-t*i))}function Sf(s,e=1){return e-Math.abs(vo(s,e*2)-e)}function Ef(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Af(s,e){return s+Math.random()*(e-s)}function wf(s){return s*(.5-Math.random())}function Rf(s){s!==void 0&&(Ul=s);let e=Ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cf(s){return s*Ur}function Lf(s){return s*nr}function so(s){return(s&s-1)===0&&s!==0}function Pf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uf(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wu={DEG2RAD:Ur,RAD2DEG:nr,generateUUID:hn,clamp:Tt,euclideanModulo:vo,mapLinear:xf,inverseLerp:yf,lerp:Dr,damp:Mf,pingpong:Sf,smoothstep:Ef,smootherstep:Tf,randInt:bf,randFloat:Af,randFloatSpread:wf,seededRandom:Rf,degToRad:Cf,radToDeg:Lf,isPowerOfTwo:so,ceilPowerOfTwo:Pf,floorPowerOfTwo:Gs,setQuaternionFromProperEuler:Uf,normalize:nt,denormalize:un};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,n,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=n[0],p=n[3],m=n[6],M=n[1],x=n[4],y=n[7],b=n[2],A=n[5],E=n[8];return r[0]=a*_+o*M+l*b,r[3]=a*p+o*x+l*A,r[6]=a*m+o*y+l*E,r[1]=c*_+u*M+h*b,r[4]=c*p+u*x+h*A,r[7]=c*m+u*y+h*E,r[2]=f*_+d*M+g*b,r[5]=f*p+d*x+g*A,r[8]=f*m+d*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=t*h+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*i)*_,e[2]=(o*i-n*a)*_,e[3]=f*_,e[4]=(u*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Je;function Ru(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Df(){const s=kr("canvas");return s.style.display="block",s}const Dl={};function pi(s){s in Dl||(Dl[s]=!0,console.warn(s))}const Il=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nl=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[St]:{transfer:Fs,primaries:Os,toReference:s=>s,fromReference:s=>s},[dt]:{transfer:ct,primaries:Os,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[js]:{transfer:Fs,primaries:Bs,toReference:s=>s.applyMatrix3(Nl),fromReference:s=>s.applyMatrix3(Il)},[_o]:{transfer:ct,primaries:Bs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Nl),fromReference:s=>s.applyMatrix3(Il).convertLinearToSRGB()}},If=new Set([St,js]),tt={enabled:!0,_workingColorSpace:St,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!If.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=$r[e].toReference,n=$r[t].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return $r[s].primaries},getTransfer:function(s){return s===Qt?Fs:$r[s].transfer}};function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let wi;class Cu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=kr("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nf=0;class Lu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(_a(n[a].image)):r.push(_a(n[a]))}else r=_a(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function _a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ff=0;class mt extends yi{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,i=Zt,n=Zt,r=yt,a=Ln,o=Jt,l=Zn,c=mt.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=hn(),this.name="",this.source=new Lu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===di?dt:Qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?di:Eu}set encoding(e){pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===di?dt:Qt}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=pu;mt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,n=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,b=(m+1)/2,A=(u+f)/4,E=(h+_)/4,O=(g+p)/4;return x>y&&x>b?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=A/i,r=E/i):y>b?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=A/n,r=O/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=E/r,n=O/r),this.set(i,n,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Of extends yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(pi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===di?dt:Qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Of{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pu extends mt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bf extends mt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-o;const m=l*f+c*d+u*g+h*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const b=Math.sqrt(x),A=Math.atan2(b,m*M);p=Math.sin(p*A)/b,o=Math.sin(o*A)/b}const y=o*M;if(l=l*p+f*y,c=c*p+d*y,u=u*p+g*y,h=h*p+_*y,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new X,Fl=new yn;class Mn{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),es.copy(i.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),ts.subVectors(this.max,Er),Ri.subVectors(e.a,Er),Ci.subVectors(e.b,Er),Li.subVectors(e.c,Er),On.subVectors(Ci,Ri),Bn.subVectors(Li,Ci),ti.subVectors(Ri,Li);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!xa(t,Ri,Ci,Li,ts)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Ri,Ci,Li,ts))?!1:(ns.crossVectors(On,Bn),t=[ns.x,ns.y,ns.z],xa(t,Ri,Ci,Li,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new X,new X,new X,new X,new X,new X,new X,new X],on=new X,es=new Mn,Ri=new X,Ci=new X,Li=new X,On=new X,Bn=new X,ti=new X,Er=new X,ts=new X,ns=new X,ni=new X;function xa(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ni.fromArray(s,r);const o=n.x*Math.abs(ni.x)+n.y*Math.abs(ni.y)+n.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=i.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kf=new Mn,Tr=new X,ya=new X;class fn{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kf.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Tr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(ya)),this.expandByPoint(Tr.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new X,Ma=new X,is=new X,kn=new X,Sa=new X,rs=new X,Ea=new X;class zr{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ma.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Ma);const r=e.distanceTo(t)*.5,a=-this.direction.dot(is),o=kn.dot(this.direction),l=-kn.dot(is),c=kn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ma).addScaledVector(is,f),d}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),n=Tn.dot(Tn)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,n,r){Sa.subVectors(t,e),rs.subVectors(i,e),Ea.crossVectors(Sa,rs);let a=this.direction.dot(Ea),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(kn,rs));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(Ea);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p)}set(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gf,e,zf)}lookAt(e,t,i){const n=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Gn.crossVectors(i,Xt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Gn.crossVectors(i,Xt)),Gn.normalize(),ss.crossVectors(Xt,Gn),n[0]=Gn.x,n[4]=ss.x,n[8]=Xt.x,n[1]=Gn.y,n[5]=ss.y,n[9]=Xt.y,n[2]=Gn.z,n[6]=ss.z,n[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],M=i[3],x=i[7],y=i[11],b=i[15],A=n[0],E=n[4],O=n[8],j=n[12],v=n[1],R=n[5],U=n[9],V=n[13],w=n[2],H=n[6],B=n[10],Q=n[14],K=n[3],W=n[7],z=n[11],P=n[15];return r[0]=a*A+o*v+l*w+c*K,r[4]=a*E+o*R+l*H+c*W,r[8]=a*O+o*U+l*B+c*z,r[12]=a*j+o*V+l*Q+c*P,r[1]=u*A+h*v+f*w+d*K,r[5]=u*E+h*R+f*H+d*W,r[9]=u*O+h*U+f*B+d*z,r[13]=u*j+h*V+f*Q+d*P,r[2]=g*A+_*v+p*w+m*K,r[6]=g*E+_*R+p*H+m*W,r[10]=g*O+_*U+p*B+m*z,r[14]=g*j+_*V+p*Q+m*P,r[3]=M*A+x*v+y*w+b*K,r[7]=M*E+x*R+y*H+b*W,r[11]=M*O+x*U+y*B+b*z,r[15]=M*j+x*V+y*Q+b*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*h-n*c*h-r*o*f+i*c*f+n*o*d-i*l*d)+_*(+t*l*d-t*c*f+r*a*f-n*a*d+n*c*u-r*l*u)+p*(+t*c*h-t*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+m*(-n*o*u-t*l*h+t*o*f+n*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=h*p*c-_*f*c+_*l*d-o*p*d-h*l*m+o*f*m,x=g*f*c-u*p*c-g*l*d+a*p*d+u*l*m-a*f*m,y=u*_*c-g*h*c+g*o*d-a*_*d-u*o*m+a*h*m,b=g*h*l-u*_*l-g*o*f+a*_*f+u*o*p-a*h*p,A=t*M+i*x+n*y+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=M*E,e[1]=(_*f*r-h*p*r-_*n*d+i*p*d+h*n*m-i*f*m)*E,e[2]=(o*p*r-_*l*r+_*n*c-i*p*c-o*n*m+i*l*m)*E,e[3]=(h*l*r-o*f*r-h*n*c+i*f*c+o*n*d-i*l*d)*E,e[4]=x*E,e[5]=(u*p*r-g*f*r+g*n*d-t*p*d-u*n*m+t*f*m)*E,e[6]=(g*l*r-a*p*r-g*n*c+t*p*c+a*n*m-t*l*m)*E,e[7]=(a*f*r-u*l*r+u*n*c-t*f*c-a*n*d+t*l*d)*E,e[8]=y*E,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*m-t*h*m)*E,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*m+t*o*m)*E,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*E,e[12]=b*E,e[13]=(u*_*n-g*h*n+g*i*f-t*_*f-u*i*p+t*h*p)*E,e[14]=(g*o*n-a*_*n-g*i*l+t*_*l+a*i*p-t*o*p)*E,e[15]=(a*h*n-u*o*n+u*i*l-t*h*l-a*i*f+t*o*f)*E,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,p=a*h,m=o*h,M=l*c,x=l*u,y=l*h,b=i.x,A=i.y,E=i.z;return n[0]=(1-(_+m))*b,n[1]=(d+y)*b,n[2]=(g-x)*b,n[3]=0,n[4]=(d-y)*A,n[5]=(1-(f+m))*A,n[6]=(p+M)*A,n[7]=0,n[8]=(g+x)*E,n[9]=(p-M)*E,n[10]=(1-(f+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Pi.set(n[0],n[1],n[2]).length();const a=Pi.set(n[4],n[5],n[6]).length(),o=Pi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],ln.copy(this);const c=1/r,u=1/a,h=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Pn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),h=(t+e)/(t-e),f=(i+n)/(i-n);let d,g;if(o===Pn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ks)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Pn){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(a-r),f=(t+e)*c,d=(i+n)*u;let g,_;if(o===Pn)g=(a+r)*h,_=-2*h;else if(o===ks)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new X,ln=new Qe,Gf=new X(0,0,0),zf=new X(1,1,1),Gn=new X,ss=new X,Xt=new X,Ol=new Qe,Bl=new yn;class Ys{constructor(e=0,t=0,i=0,n=Ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ys.DEFAULT_ORDER="XYZ";class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hf=0;const kl=new X,Ui=new yn,bn=new Qe,as=new X,br=new X,Vf=new X,Wf=new yn,Gl=new X(1,0,0),zl=new X(0,1,0),Hl=new X(0,0,1),Xf={type:"added"},jf={type:"removed"};class ut extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new X,t=new Ys,i=new yn,n=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Je}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Gl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?as.copy(e):as.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(br,as,this.up):bn.lookAt(as,br,this.up),this.quaternion.setFromRotationMatrix(bn),n&&(bn.extractRotation(n.matrixWorld),Ui.setFromRotationMatrix(bn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ut.DEFAULT_UP=new X(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new X,An=new X,Ta=new X,wn=new X,Di=new X,Ii=new X,Vl=new X,ba=new X,Aa=new X,wa=new X;class _n{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),cn.subVectors(e,t),n.cross(cn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){cn.subVectors(n,t),An.subVectors(i,t),Ta.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(An),l=cn.dot(Ta),c=An.dot(An),u=An.dot(Ta),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static isFrontFacing(e,t,i,n){return cn.subVectors(i,t),An.subVectors(e,t),cn.cross(An).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),cn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;Di.subVectors(n,i),Ii.subVectors(r,i),ba.subVectors(e,i);const l=Di.dot(ba),c=Ii.dot(ba);if(l<=0&&c<=0)return t.copy(i);Aa.subVectors(e,n);const u=Di.dot(Aa),h=Ii.dot(Aa);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Di,a);wa.subVectors(e,r);const d=Di.dot(wa),g=Ii.dot(wa);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ii,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Vl.subVectors(r,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(Vl,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(i).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},os={h:0,s:0,l:0};function Ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=vo(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ra(a,r,e+1/3),this.g=Ra(a,r,e),this.b=Ra(a,r,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=Du[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return tt.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Tt(Ct.r*255,0,255))*65536+Math.round(Tt(Ct.g*255,0,255))*256+Math.round(Tt(Ct.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,n=Ct.g,r=Ct.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=dt){tt.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,n=Ct.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(os);const i=Dr(zn.h,os.h,t),n=Dr(zn.s,os.s,t),r=Dr(zn.l,os.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Xe;Xe.NAMES=Du;let Yf=0;class vn extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=qi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Qa&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Un extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new X,ls=new He;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}}class Iu extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nu extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qf=0;const Yt=new Qe,Ca=new ut,Ni=new X,jt=new Mn,Ar=new Mn,xt=new X;class Ot extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Nu:Iu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(jt.min,Ar.min),jt.expandByPoint(xt),xt.addVectors(jt.max,Ar.max),jt.expandByPoint(xt)):(jt.expandByPoint(Ar.min),jt.expandByPoint(Ar.max))}jt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),xt.add(Ni)),n=Math.max(n,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let v=0;v<o;v++)c[v]=new X,u[v]=new X;const h=new X,f=new X,d=new X,g=new He,_=new He,p=new He,m=new X,M=new X;function x(v,R,U){h.fromArray(n,v*3),f.fromArray(n,R*3),d.fromArray(n,U*3),g.fromArray(a,v*2),_.fromArray(a,R*2),p.fromArray(a,U*2),f.sub(h),d.sub(h),_.sub(g),p.sub(g);const V=1/(_.x*p.y-p.x*_.y);isFinite(V)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(V),M.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(V),c[v].add(m),c[R].add(m),c[U].add(m),u[v].add(M),u[R].add(M),u[U].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let v=0,R=y.length;v<R;++v){const U=y[v],V=U.start,w=U.count;for(let H=V,B=V+w;H<B;H+=3)x(i[H+0],i[H+1],i[H+2])}const b=new X,A=new X,E=new X,O=new X;function j(v){E.fromArray(r,v*3),O.copy(E);const R=c[v];b.copy(R),b.sub(E.multiplyScalar(E.dot(R))).normalize(),A.crossVectors(O,R);const V=A.dot(u[v])<0?-1:1;l[v*4]=b.x,l[v*4+1]=b.y,l[v*4+2]=b.z,l[v*4+3]=V}for(let v=0,R=y.length;v<R;++v){const U=y[v],V=U.start,w=U.count;for(let H=V,B=V+w;H<B;H+=3)j(i[H+0]),j(i[H+1]),j(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new X,r=new X,a=new X,o=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Nt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new Qe,ii=new zr,cs=new fn,Xl=new X,Fi=new X,Oi=new X,Bi=new X,La=new X,us=new X,hs=new He,fs=new He,ds=new He,jl=new X,Yl=new X,ql=new X,ps=new X,ms=new X;class bt extends ut{constructor(e=new Ot,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(La.fromBufferAttribute(h,e),a?us.addScaledVector(La,u):us.addScaledVector(La.sub(t),u))}t.add(us)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),ii.copy(e.ray).recast(e.near),!(cs.containsPoint(ii.origin)===!1&&(ii.intersectSphere(cs,Xl)===null||ii.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(r).invert(),ii.copy(e.ray).applyMatrix4(Wl),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,b=x;y<b;y+=3){const A=o.getX(y),E=o.getX(y+1),O=o.getX(y+2);n=gs(this,m,e,i,c,u,h,A,E,O),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);n=gs(this,a,e,i,c,u,h,M,x,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,b=x;y<b;y+=3){const A=y,E=y+1,O=y+2;n=gs(this,m,e,i,c,u,h,A,E,O),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,x=p+1,y=p+2;n=gs(this,a,e,i,c,u,h,M,x,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function Kf(s,e,t,i,n,r,a,o){let l;if(e.side===It?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===xn,o),l===null)return null;ms.copy(o),ms.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:s}}function gs(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Fi),s.getVertexPosition(l,Oi),s.getVertexPosition(c,Bi);const u=Kf(s,e,t,i,Fi,Oi,Bi,ps);if(u){n&&(hs.fromBufferAttribute(n,o),fs.fromBufferAttribute(n,l),ds.fromBufferAttribute(n,c),u.uv=_n.getInterpolation(ps,Fi,Oi,Bi,hs,fs,ds,new He)),r&&(hs.fromBufferAttribute(r,o),fs.fromBufferAttribute(r,l),ds.fromBufferAttribute(r,c),u.uv1=_n.getInterpolation(ps,Fi,Oi,Bi,hs,fs,ds,new He),u.uv2=u.uv1),a&&(jl.fromBufferAttribute(a,o),Yl.fromBufferAttribute(a,l),ql.fromBufferAttribute(a,c),u.normal=_n.getInterpolation(ps,Fi,Oi,Bi,jl,Yl,ql,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};_n.getNormal(Fi,Oi,Bi,h.normal),u.face=h}return u}class Hr extends Ot{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(h,2));function g(_,p,m,M,x,y,b,A,E,O,j){const v=y/E,R=b/O,U=y/2,V=b/2,w=A/2,H=E+1,B=O+1;let Q=0,K=0;const W=new X;for(let z=0;z<B;z++){const P=z*R-V;for(let G=0;G<H;G++){const Y=G*v-U;W[_]=Y*M,W[p]=P*x,W[m]=w,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[m]=A>0?1:-1,u.push(W.x,W.y,W.z),h.push(G/E),h.push(1-z/O),Q+=1}}for(let z=0;z<O;z++)for(let P=0;P<E;P++){const G=f+P+H*z,Y=f+P+H*(z+1),F=f+(P+1)+H*(z+1),k=f+(P+1)+H*z;l.push(G,Y,k),l.push(Y,F,k),K+=6}o.addGroup(d,K,j),d+=K,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Pt(s){const e={};for(let t=0;t<s.length;t++){const i=ir(s[t]);for(const n in i)e[n]=i[n]}return e}function Zf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fu(s){return s.getRenderTarget()===null?s.outputColorSpace:tt.workingColorSpace}const Ou={clone:ir,merge:Pt};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bu extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new X,Kl=new He,Zl=new He;class Dt extends Bu{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,Zl),t.subVectors(Zl,Kl)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Gi=1;class $f extends ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Dt(ki,Gi,e,t);n.layers=this.layers,this.add(n);const r=new Dt(ki,Gi,e,t);r.layers=this.layers,this.add(r);const a=new Dt(ki,Gi,e,t);a.layers=this.layers,this.add(a);const o=new Dt(ki,Gi,e,t);o.layers=this.layers,this.add(o);const l=new Dt(ki,Gi,e,t);l.layers=this.layers,this.add(l);const c=new Dt(ki,Gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ku extends mt{constructor(e,t,i,n,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ed extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(pi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===di?dt:Qt),this.texture=new ku(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Hr(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:qn});r.uniforms.tEquirect.value=t;const a=new bt(n,r),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=yt),new $f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}const Pa=new X,td=new X,nd=new Je;class Wn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Pa.subVectors(i,t).cross(td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nd.getNormalMatrix(e),n=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new fn,_s=new X;class xo{constructor(e=new Wn,t=new Wn,i=new Wn,n=new Wn,r=new Wn,a=new Wn){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],_=n[10],p=n[11],m=n[12],M=n[13],x=n[14],y=n[15];if(i[0].setComponents(l-r,f-c,p-d,y-m).normalize(),i[1].setComponents(l+r,f+c,p+d,y+m).normalize(),i[2].setComponents(l+a,f+u,p+g,y+M).normalize(),i[3].setComponents(l-a,f-u,p-g,y-M).normalize(),i[4].setComponents(l-o,f-h,p-_,y-x).normalize(),t===Pn)i[5].setComponents(l+o,f+h,p+_,y+x).normalize();else if(t===ks)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(_s.x=n.normal.x>0?e.max.x:e.min.x,_s.y=n.normal.y>0?e.max.y:e.min.y,_s.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gu(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function id(s,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const h=c.array,f=c.usage,d=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,c),d.count===-1&&g.length===0&&s.bufferSubData(h,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?s.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count):s.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(s.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,n(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class Mi extends Ot{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*f-a;for(let x=0;x<c;x++){const y=x*h-r;g.push(y,-M,0),_.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const x=M+c*m,y=M+c*(m+1),b=M+1+c*(m+1),A=M+1+c*m;d.push(x,y,A),d.push(y,b,A)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_d=`#ifdef USE_IRIDESCENCE
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
#endif`,vd=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wd=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Cd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
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
}`,jd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,fm=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
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
}`,gm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,vm=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,ym=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Sm=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Tm=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Am=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Rm=`#define STANDARD
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Lm=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,Im=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
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
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:rd,alphahash_pars_fragment:sd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:ud,aomap_pars_fragment:hd,batching_pars_vertex:fd,batching_vertex:dd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:_d,bumpmap_pars_fragment:vd,clipping_planes_fragment:xd,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:Sd,color_fragment:Ed,color_pars_fragment:Td,color_pars_vertex:bd,color_vertex:Ad,common:wd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Pd,emissivemap_fragment:Ud,emissivemap_pars_fragment:Dd,colorspace_fragment:Id,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Jd,envmap_vertex:Gd,fog_vertex:zd,fog_pars_vertex:Hd,fog_fragment:Vd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_fragment:jd,lightmap_pars_fragment:Yd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Kd,lights_pars_begin:Zd,lights_toon_fragment:Qd,lights_toon_pars_fragment:$d,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:up,map_fragment:hp,map_pars_fragment:fp,map_particle_fragment:dp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphcolor_vertex:_p,morphnormal_vertex:vp,morphtarget_pars_vertex:xp,morphtarget_vertex:yp,normal_fragment_begin:Mp,normal_fragment_maps:Sp,normal_pars_fragment:Ep,normal_pars_vertex:Tp,normal_vertex:bp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Lp,opaque_fragment:Pp,packing:Up,premultiplied_alpha_fragment:Dp,project_vertex:Ip,dithering_fragment:Np,dithering_pars_fragment:Fp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Gp,shadowmap_vertex:zp,shadowmask_pars_fragment:Hp,skinbase_vertex:Vp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:jp,specularmap_fragment:Yp,specularmap_pars_fragment:qp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:$p,uv_pars_vertex:em,uv_vertex:tm,worldpos_vertex:nm,background_vert:im,background_frag:rm,backgroundCube_vert:sm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:um,distanceRGBA_vert:hm,distanceRGBA_frag:fm,equirect_vert:dm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:vm,meshlambert_vert:xm,meshlambert_frag:ym,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:Em,meshnormal_frag:Tm,meshphong_vert:bm,meshphong_frag:Am,meshphysical_vert:wm,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Lm,points_vert:Pm,points_frag:Um,shadow_vert:Dm,shadow_frag:Im,sprite_vert:Nm,sprite_frag:Fm},Ce={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},mn={basic:{uniforms:Pt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Pt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Pt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Pt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Pt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Pt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Pt([Ce.points,Ce.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Pt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Pt([Ce.common,Ce.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Pt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Pt([Ce.sprite,Ce.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Pt([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Pt([Ce.lights,Ce.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};mn.physical={uniforms:Pt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const vs={r:0,b:0,g:0};function Om(s,e,t,i,n,r,a){const o=new Xe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let M=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),M=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Xs)?(u===void 0&&(u=new bt(new Hr(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ir(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,(h!==x||f!==x.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new bt(new Mi(2,2),new Jn({name:"BackgroundMaterial",uniforms:ir(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(vs,Fu(s)),i.buffers.color.setClear(vs.r,vs.g,vs.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Bm(s,e,t,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function h(w,H,B,Q,K){let W=!1;if(a){const z=_(Q,B,H);c!==z&&(c=z,d(c.object)),W=m(w,Q,B,K),W&&M(w,Q,B,K)}else{const z=H.wireframe===!0;(c.geometry!==Q.id||c.program!==B.id||c.wireframe!==z)&&(c.geometry=Q.id,c.program=B.id,c.wireframe=z,W=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,O(w,H,B,Q),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(w){return i.isWebGL2?s.bindVertexArray(w):r.bindVertexArrayOES(w)}function g(w){return i.isWebGL2?s.deleteVertexArray(w):r.deleteVertexArrayOES(w)}function _(w,H,B){const Q=B.wireframe===!0;let K=o[w.id];K===void 0&&(K={},o[w.id]=K);let W=K[H.id];W===void 0&&(W={},K[H.id]=W);let z=W[Q];return z===void 0&&(z=p(f()),W[Q]=z),z}function p(w){const H=[],B=[],Q=[];for(let K=0;K<n;K++)H[K]=0,B[K]=0,Q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:Q,object:w,attributes:{},index:null}}function m(w,H,B,Q){const K=c.attributes,W=H.attributes;let z=0;const P=B.getAttributes();for(const G in P)if(P[G].location>=0){const F=K[G];let k=W[G];if(k===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(k=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(k=w.instanceColor)),F===void 0||F.attribute!==k||k&&F.data!==k.data)return!0;z++}return c.attributesNum!==z||c.index!==Q}function M(w,H,B,Q){const K={},W=H.attributes;let z=0;const P=B.getAttributes();for(const G in P)if(P[G].location>=0){let F=W[G];F===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(F=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(F=w.instanceColor));const k={};k.attribute=F,F&&F.data&&(k.data=F.data),K[G]=k,z++}c.attributes=K,c.attributesNum=z,c.index=Q}function x(){const w=c.newAttributes;for(let H=0,B=w.length;H<B;H++)w[H]=0}function y(w){b(w,0)}function b(w,H){const B=c.newAttributes,Q=c.enabledAttributes,K=c.attributeDivisors;B[w]=1,Q[w]===0&&(s.enableVertexAttribArray(w),Q[w]=1),K[w]!==H&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,H),K[w]=H)}function A(){const w=c.newAttributes,H=c.enabledAttributes;for(let B=0,Q=H.length;B<Q;B++)H[B]!==w[B]&&(s.disableVertexAttribArray(B),H[B]=0)}function E(w,H,B,Q,K,W,z){z===!0?s.vertexAttribIPointer(w,H,B,K,W):s.vertexAttribPointer(w,H,B,Q,K,W)}function O(w,H,B,Q){if(i.isWebGL2===!1&&(w.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=Q.attributes,W=B.getAttributes(),z=H.defaultAttributeValues;for(const P in W){const G=W[P];if(G.location>=0){let Y=K[P];if(Y===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),Y!==void 0){const F=Y.normalized,k=Y.itemSize,$=t.get(Y);if($===void 0)continue;const J=$.buffer,te=$.type,oe=$.bytesPerElement,Ae=i.isWebGL2===!0&&(te===s.INT||te===s.UNSIGNED_INT||Y.gpuType===mu);if(Y.isInterleavedBufferAttribute){const he=Y.data,N=he.stride,Oe=Y.offset;if(he.isInstancedInterleavedBuffer){for(let Me=0;Me<G.locationSize;Me++)b(G.location+Me,he.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Me=0;Me<G.locationSize;Me++)y(G.location+Me);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Me=0;Me<G.locationSize;Me++)E(G.location+Me,k/G.locationSize,te,F,N*oe,(Oe+k/G.locationSize*Me)*oe,Ae)}else{if(Y.isInstancedBufferAttribute){for(let he=0;he<G.locationSize;he++)b(G.location+he,Y.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let he=0;he<G.locationSize;he++)y(G.location+he);s.bindBuffer(s.ARRAY_BUFFER,J);for(let he=0;he<G.locationSize;he++)E(G.location+he,k/G.locationSize,te,F,k*oe,k/G.locationSize*he*oe,Ae)}}else if(z!==void 0){const F=z[P];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(G.location,F);break;case 3:s.vertexAttrib3fv(G.location,F);break;case 4:s.vertexAttrib4fv(G.location,F);break;default:s.vertexAttrib1fv(G.location,F)}}}}A()}function j(){U();for(const w in o){const H=o[w];for(const B in H){const Q=H[B];for(const K in Q)g(Q[K].object),delete Q[K];delete H[B]}delete o[w]}}function v(w){if(o[w.id]===void 0)return;const H=o[w.id];for(const B in H){const Q=H[B];for(const K in Q)g(Q[K].object),delete Q[K];delete H[B]}delete o[w.id]}function R(w){for(const H in o){const B=o[H];if(B[w.id]===void 0)continue;const Q=B[w.id];for(const K in Q)g(Q[K].object),delete Q[K];delete B[w.id]}}function U(){V(),u=!0,c!==l&&(c=l,d(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:V,dispose:j,releaseStatesOfGeometry:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function km(s,e,t,i){const n=i.isWebGL2;let r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let d,g;if(n)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Gm(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=a||e.has("OES_texture_float"),b=x&&y,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:A}}function zm(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new Wn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!n||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,x=M*4;let y=m.clippingState||null;l.value=y,y=u(g,f,x,d);for(let b=0;b!==x;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=d;x!==_;++x,y+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Hm(s){let e=new WeakMap;function t(a,o){return o===$a?a.mapping=Ji:o===eo&&(a.mapping=Qi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===eo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ed(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class yo extends Bu{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,Jl=[.125,.215,.35,.446,.526,.582],ci=20,Ua=new yo,Ql=new Xe;let Da=null,Ia=0,Na=0;const oi=(1+Math.sqrt(5))/2,zi=1/oi,$l=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,oi,zi),new X(0,oi,-zi),new X(zi,0,oi),new X(-zi,0,oi),new X(oi,zi,0),new X(-oi,zi,0)];class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Ia,Na),e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Or,format:Jt,colorSpace:St,depthBuffer:!1},n=tc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Wm(r,e,t)}return n}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,n){const o=new Dt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Kn,u.autoClear=!1;const d=new Un({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new bt(new Hr,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Ql),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;xs(n,M*x,m>2?x:0,x,x),u.setRenderTarget(n),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Ji||e.mapping===Qi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=$l[(n-1)%$l.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ci-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ci;p>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const m=[];let M=0;for(let E=0;E<ci;++E){const O=E/_,j=Math.exp(-O*O/2);m.push(j),E===0?M+=j:E<p&&(M+=2*j)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[n],b=3*y*(n>x-ji?n-x+ji:0),A=4*(this._cubeSize-y);xs(t,b,A,3*y,2*y),l.setRenderTarget(t),l.render(h,Ua)}}function Vm(s){const e=[],t=[],i=[];let n=s;const r=s-ji+1+Jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-ji?l=Jl[a-s+ji-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),x=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,O=A>2?0:-1,j=[E,O,0,E+2/3,O,0,E+2/3,O+1,0,E,O,0,E+2/3,O+1,0,E,O+1,0];M.set(j,_*g*A),x.set(f,p*g*A);const v=[A,A,A,A,A,A];y.set(v,m*g*A)}const b=new Ot;b.setAttribute("position",new Nt(M,_)),b.setAttribute("uv",new Nt(x,p)),b.setAttribute("faceIndex",new Nt(y,m)),e.push(b),n>ji&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tc(s,e,t){const i=new gi(s,e,t);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Wm(s,e,t){const i=new Float32Array(ci),n=new X(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function nc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ic(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function Xm(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$a||l===eo,u=l===Ji||l===Qi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new ec(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new ec(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function jm(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ym(s,e,t,i){const n={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,y=M.length;x<y;x+=3){const b=M[x+0],A=M[x+1],E=M[x+2];f.push(b,A,A,E,E,b)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const b=x+0,A=x+1,E=x+2;f.push(b,A,A,E,E,b)}}else return;const p=new(Ru(f)?Nu:Iu)(f,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function qm(s,e,t,i){const n=i.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,g){s.drawElements(r,g,o,d*l),t.update(g,r,1)}function h(d,g,_){if(_===0)return;let p,m;if(n)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,o,d*l,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,o,d,0,_);let m=0;for(let M=0;M<_;M++)m+=g[M];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Km(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Zm(s,e){return s[0]-e[0]}function Jm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Qm(s,e,t){const i={},n=new Float32Array(8),r=new WeakMap,a=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let H=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",H)};var d=H;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let j=0;x===!0&&(j=1),y===!0&&(j=2),b===!0&&(j=3);let v=u.attributes.position.count*j,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const U=new Float32Array(v*R*4*_),V=new Pu(U,v,R,_);V.type=gn,V.needsUpdate=!0;const w=j*4;for(let B=0;B<_;B++){const Q=A[B],K=E[B],W=O[B],z=v*R*4*B;for(let P=0;P<Q.count;P++){const G=P*w;x===!0&&(a.fromBufferAttribute(Q,P),U[z+G+0]=a.x,U[z+G+1]=a.y,U[z+G+2]=a.z,U[z+G+3]=0),y===!0&&(a.fromBufferAttribute(K,P),U[z+G+4]=a.x,U[z+G+5]=a.y,U[z+G+6]=a.z,U[z+G+7]=0),b===!0&&(a.fromBufferAttribute(W,P),U[z+G+8]=a.x,U[z+G+9]=a.y,U[z+G+10]=a.z,U[z+G+11]=W.itemSize===4?a.w:1)}}p={count:_,texture:V,size:new He(v,R)},r.set(u,p),u.addEventListener("dispose",H)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];const M=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[u.id]=_}for(let y=0;y<g;y++){const b=_[y];b[0]=y,b[1]=f[y]}_.sort(Jm);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Zm);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const b=o[y],A=b[0],E=b[1];A!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+y)!==p[A]&&u.setAttribute("morphTarget"+y,p[A]),m&&u.getAttribute("morphNormal"+y)!==m[A]&&u.setAttribute("morphNormal"+y,m[A]),n[y]=E,M+=E):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),n[y]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function $m(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class zu extends mt{constructor(e,t,i,n,r,a,o,l,c,u){if(u=u!==void 0?u:fi,u!==fi&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fi&&(i=jn),i===void 0&&u===er&&(i=hi),super(null,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hu=new mt,Vu=new zu(1,1);Vu.compareFunction=Au;const Wu=new Pu,Xu=new Bf,ju=new ku,rc=[],sc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function lr(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=rc[n];if(r===void 0&&(r=new Float32Array(n),rc[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function qs(s,e){let t=sc[e];t===void 0&&(t=new Int32Array(e),sc[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function eg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function rg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;lc.set(i),s.uniformMatrix2fv(this.addr,!1,lc),_t(t,i)}}function sg(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;oc.set(i),s.uniformMatrix3fv(this.addr,!1,oc),_t(t,i)}}function ag(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;ac.set(i),s.uniformMatrix4fv(this.addr,!1,ac),_t(t,i)}}function og(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function hg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function mg(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const r=this.type===s.SAMPLER_2D_SHADOW?Vu:Hu;t.setTexture2D(e||r,n)}function gg(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Xu,n)}function _g(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ju,n)}function vg(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Wu,n)}function xg(s){switch(s){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return hg;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function yg(s,e){s.uniform1fv(this.addr,e)}function Mg(s,e){const t=lr(e,this.size,2);s.uniform2fv(this.addr,t)}function Sg(s,e){const t=lr(e,this.size,3);s.uniform3fv(this.addr,t)}function Eg(s,e){const t=lr(e,this.size,4);s.uniform4fv(this.addr,t)}function Tg(s,e){const t=lr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bg(s,e){const t=lr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ag(s,e){const t=lr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wg(s,e){s.uniform1iv(this.addr,e)}function Rg(s,e){s.uniform2iv(this.addr,e)}function Cg(s,e){s.uniform3iv(this.addr,e)}function Lg(s,e){s.uniform4iv(this.addr,e)}function Pg(s,e){s.uniform1uiv(this.addr,e)}function Ug(s,e){s.uniform2uiv(this.addr,e)}function Dg(s,e){s.uniform3uiv(this.addr,e)}function Ig(s,e){s.uniform4uiv(this.addr,e)}function Ng(s,e,t){const i=this.cache,n=e.length,r=qs(t,n);gt(i,r)||(s.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Hu,r[a])}function Fg(s,e,t){const i=this.cache,n=e.length,r=qs(t,n);gt(i,r)||(s.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Xu,r[a])}function Og(s,e,t){const i=this.cache,n=e.length,r=qs(t,n);gt(i,r)||(s.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ju,r[a])}function Bg(s,e,t){const i=this.cache,n=e.length,r=qs(t,n);gt(i,r)||(s.uniform1iv(this.addr,r),_t(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Wu,r[a])}function kg(s){switch(s){case 5126:return yg;case 35664:return Mg;case 35665:return Sg;case 35666:return Eg;case 35674:return Tg;case 35675:return bg;case 35676:return Ag;case 5124:case 35670:return wg;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Lg;case 5125:return Pg;case 36294:return Ug;case 36295:return Dg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}class Gg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xg(t.type)}}class zg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kg(t.type)}}class Hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function cc(s,e){s.seq.push(e),s.map[e.id]=e}function Vg(s,e,t){const i=s.name,n=i.length;for(Fa.lastIndex=0;;){const r=Fa.exec(i),a=Fa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){cc(t,c===void 0?new Gg(o,s,e):new zg(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Hg(o),cc(t,h)),t=h}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);Vg(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function uc(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Wg=37297;let Xg=0;function jg(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Yg(s){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(s);let i;switch(e===t?i="":e===Bs&&t===Os?i="LinearDisplayP3ToLinearSRGB":e===Os&&t===Bs&&(i="LinearSRGBToLinearDisplayP3"),s){case St:case js:return[i,"LinearTransferOETF"];case dt:case _o:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function hc(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+jg(s.getShaderSource(e),a)}else return n}function qg(s,e){const t=Yg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kg(s,e){let t;switch(e){case jh:t="Linear";break;case Yh:t="Reinhard";break;case qh:t="OptimizedCineon";break;case Kh:t="ACESFilmic";break;case Jh:t="AgX";break;case Zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function Jg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function Qg(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $g(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Yi(s){return s!==""}function fc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(s){return s.replace(e_,n_)}const t_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n_(s,e){let t=Ze[e];if(t===void 0){const i=t_.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(s){return s.replace(i_,r_)}function r_(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function mc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function l_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case du:e="ENVMAP_BLENDING_MULTIPLY";break;case Wh:e="ENVMAP_BLENDING_MIX";break;case Xh:e="ENVMAP_BLENDING_ADD";break}return e}function c_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function u_(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=s_(t),c=a_(t),u=o_(t),h=l_(t),f=c_(t),d=t.isWebGL2?"":Zg(t),g=Jg(t),_=Qg(r),p=n.createProgram();let m,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yi).join(`
`),m.length>0&&(m+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yi).join(`
`),M.length>0&&(M+=`
`)):(m=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),M=[d,mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,qg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),a=ao(a),a=fc(a,t),a=dc(a,t),o=ao(o),o=fc(o,t),o=dc(o,t),a=pc(a),o=pc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=x+m+a,b=x+M+o,A=uc(n,n.VERTEX_SHADER,y),E=uc(n,n.FRAGMENT_SHADER,b);n.attachShader(p,A),n.attachShader(p,E),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function O(U){if(s.debug.checkShaderErrors){const V=n.getProgramInfoLog(p).trim(),w=n.getShaderInfoLog(A).trim(),H=n.getShaderInfoLog(E).trim();let B=!0,Q=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,A,E);else{const K=hc(n,A,"vertex"),W=hc(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+K+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(w===""||H==="")&&(Q=!1);Q&&(U.diagnostics={runnable:B,programLog:V,vertexShader:{log:w,prefix:m},fragmentShader:{log:H,prefix:M}})}n.deleteShader(A),n.deleteShader(E),j=new Ps(n,p),v=$g(n,p)}let j;this.getUniforms=function(){return j===void 0&&O(this),j};let v;this.getAttributes=function(){return v===void 0&&O(this),v};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(p,Wg)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=E,this}let h_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new d_(e),t.set(e,i)),i}}class d_{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}}function p_(s,e,t,i,n,r,a){const o=new Uu,l=new f_,c=new Set,u=[],h=n.isWebGL2,f=n.logarithmicDepthBuffer,d=n.vertexTextures;let g=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,R,U,V,w){const H=V.fog,B=w.geometry,Q=v.isMeshStandardMaterial?V.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||Q),W=K&&K.mapping===Xs?K.image.height:null,z=_[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const P=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,G=P!==void 0?P.length:0;let Y=0;B.morphAttributes.position!==void 0&&(Y=1),B.morphAttributes.normal!==void 0&&(Y=2),B.morphAttributes.color!==void 0&&(Y=3);let F,k,$,J;if(z){const Le=mn[z];F=Le.vertexShader,k=Le.fragmentShader}else F=v.vertexShader,k=v.fragmentShader,l.update(v),$=l.getVertexShaderID(v),J=l.getFragmentShaderID(v);const te=s.getRenderTarget(),oe=w.isInstancedMesh===!0,Ae=w.isBatchedMesh===!0,he=!!v.map,N=!!v.matcap,Oe=!!K,Me=!!v.aoMap,Te=!!v.lightMap,pe=!!v.bumpMap,Ne=!!v.normalMap,de=!!v.displacementMap,T=!!v.emissiveMap,S=!!v.metalnessMap,D=!!v.roughnessMap,ne=v.anisotropy>0,q=v.clearcoat>0,ee=v.iridescence>0,ue=v.sheen>0,ge=v.transmission>0,fe=ne&&!!v.anisotropyMap,ve=q&&!!v.clearcoatMap,we=q&&!!v.clearcoatNormalMap,ae=q&&!!v.clearcoatRoughnessMap,Fe=ee&&!!v.iridescenceMap,Ie=ee&&!!v.iridescenceThicknessMap,Re=ue&&!!v.sheenColorMap,Ee=ue&&!!v.sheenRoughnessMap,le=!!v.specularMap,Pe=!!v.specularColorMap,I=!!v.specularIntensityMap,me=ge&&!!v.transmissionMap,Se=ge&&!!v.thicknessMap,_e=!!v.gradientMap,L=!!v.alphaMap,xe=v.alphaTest>0,ce=!!v.alphaHash,be=!!v.extensions;let Ue=Kn;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const ke={isWebGL2:h,shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:F,fragmentShader:k,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ae,instancing:oe,instancingColor:oe&&w.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:St,alphaToCoverage:!!v.alphaToCoverage,map:he,matcap:N,envMap:Oe,envMapMode:Oe&&K.mapping,envMapCubeUVHeight:W,aoMap:Me,lightMap:Te,bumpMap:pe,normalMap:Ne,displacementMap:d&&de,emissiveMap:T,normalMapObjectSpace:Ne&&v.normalMapType===hf,normalMapTangentSpace:Ne&&v.normalMapType===bu,metalnessMap:S,roughnessMap:D,anisotropy:ne,anisotropyMap:fe,clearcoat:q,clearcoatMap:ve,clearcoatNormalMap:we,clearcoatRoughnessMap:ae,iridescence:ee,iridescenceMap:Fe,iridescenceThicknessMap:Ie,sheen:ue,sheenColorMap:Re,sheenRoughnessMap:Ee,specularMap:le,specularColorMap:Pe,specularIntensityMap:I,transmission:ge,transmissionMap:me,thicknessMap:Se,gradientMap:_e,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:L,alphaTest:xe,alphaHash:ce,combine:v.combine,mapUv:he&&p(v.map.channel),aoMapUv:Me&&p(v.aoMap.channel),lightMapUv:Te&&p(v.lightMap.channel),bumpMapUv:pe&&p(v.bumpMap.channel),normalMapUv:Ne&&p(v.normalMap.channel),displacementMapUv:de&&p(v.displacementMap.channel),emissiveMapUv:T&&p(v.emissiveMap.channel),metalnessMapUv:S&&p(v.metalnessMap.channel),roughnessMapUv:D&&p(v.roughnessMap.channel),anisotropyMapUv:fe&&p(v.anisotropyMap.channel),clearcoatMapUv:ve&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:we&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(v.sheenRoughnessMap.channel),specularMapUv:le&&p(v.specularMap.channel),specularColorMapUv:Pe&&p(v.specularColorMap.channel),specularIntensityMapUv:I&&p(v.specularIntensityMap.channel),transmissionMapUv:me&&p(v.transmissionMap.channel),thicknessMapUv:Se&&p(v.thicknessMap.channel),alphaMapUv:L&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ne||ne),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!B.attributes.uv&&(he||L),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:w.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Y,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,useLegacyLights:s._useLegacyLights,decodeVideoTexture:he&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Kt,flipSided:v.side===It,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:be&&v.extensions.derivatives===!0,extensionFragDepth:be&&v.extensions.fragDepth===!0,extensionDrawBuffers:be&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:be&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function M(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)R.push(U),R.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(x(R,v),y(R,v),R.push(s.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function x(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function y(v,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),v.push(o.mask)}function b(v){const R=_[v.type];let U;if(R){const V=mn[R];U=Ou.clone(V.uniforms)}else U=v.uniforms;return U}function A(v,R){let U;for(let V=0,w=u.length;V<w;V++){const H=u[V];if(H.cacheKey===R){U=H,++U.usedTimes;break}}return U===void 0&&(U=new u_(s,R,v,r),u.push(U)),U}function E(v){if(--v.usedTimes===0){const R=u.indexOf(v);u[R]=u[u.length-1],u.pop(),v.destroy()}}function O(v){l.remove(v)}function j(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:b,acquireProgram:A,releaseProgram:E,releaseShaderCache:O,programs:u,dispose:j}}function m_(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function g_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _c(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h,f,d,g,_,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function o(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||g_),i.length>1&&i.sort(f||gc),n.length>1&&n.sort(f||gc)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function __(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new _c,s.set(i,[a])):n>=r.length?(a=new _c,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function v_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Xe};break;case"SpotLight":t={position:new X,direction:new X,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function x_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let y_=0;function M_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function S_(s,e){const t=new v_,i=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new X);const r=new X,a=new Qe,o=new Qe;function l(u,h){let f=0,d=0,g=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let _=0,p=0,m=0,M=0,x=0,y=0,b=0,A=0,E=0,O=0,j=0;u.sort(M_);const v=h===!0?Math.PI:1;for(let U=0,V=u.length;U<V;U++){const w=u[U],H=w.color,B=w.intensity,Q=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=H.r*B*v,d+=H.g*B*v,g+=H.b*B*v;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],B);j++}else if(w.isDirectionalLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity*v),w.castShadow){const z=w.shadow,P=i.get(w);P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,n.directionalShadow[_]=P,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=w.shadow.matrix,y++}n.directional[_]=W,_++}else if(w.isSpotLight){const W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(H).multiplyScalar(B*v),W.distance=Q,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[m]=W;const z=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,z.updateMatrices(w),w.castShadow&&O++),n.spotLightMatrix[m]=z.matrix,w.castShadow){const P=i.get(w);P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,n.spotShadow[m]=P,n.spotShadowMap[m]=K,A++}m++}else if(w.isRectAreaLight){const W=t.get(w);W.color.copy(H).multiplyScalar(B),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[M]=W,M++}else if(w.isPointLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity*v),W.distance=w.distance,W.decay=w.decay,w.castShadow){const z=w.shadow,P=i.get(w);P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,P.shadowCameraNear=z.camera.near,P.shadowCameraFar=z.camera.far,n.pointShadow[p]=P,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=w.shadow.matrix,b++}n.point[p]=W,p++}else if(w.isHemisphereLight){const W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(B*v),W.groundColor.copy(w.groundColor).multiplyScalar(B*v),n.hemi[x]=W,x++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=g;const R=n.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==M||R.hemiLength!==x||R.numDirectionalShadows!==y||R.numPointShadows!==b||R.numSpotShadows!==A||R.numSpotMaps!==E||R.numLightProbes!==j)&&(n.directional.length=_,n.spot.length=m,n.rectArea.length=M,n.point.length=p,n.hemi.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=A+E-O,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=j,R.directionalLength=_,R.pointLength=p,R.spotLength=m,R.rectAreaLength=M,R.hemiLength=x,R.numDirectionalShadows=y,R.numPointShadows=b,R.numSpotShadows=A,R.numSpotMaps=E,R.numLightProbes=j,n.version=y_++)}function c(u,h){let f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const y=u[M];if(y.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(y.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:n}}function vc(s,e){const t=new S_(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function a(h){i.push(h)}function o(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function E_(s,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new vc(s,e),t.set(r,[l])):a>=o.length?(l=new vc(s,e),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Yu extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qu extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`;function A_(s,e,t){let i=new xo;const n=new He,r=new He,a=new rt,o=new Yu({depthPacking:Tu}),l=new qu,c={},u=t.maxTextureSize,h={[xn]:It,[It]:xn,[Kt]:Kt},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:T_,fragmentShader:b_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let m=this.type;this.render=function(A,E,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const j=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(qn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=m!==Cn&&this.type===Cn,w=m===Cn&&this.type!==Cn;for(let H=0,B=A.length;H<B;H++){const Q=A[H],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const W=K.getFrameExtents();if(n.multiply(W),r.copy(K.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/W.x),n.x=r.x*W.x,K.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/W.y),n.y=r.y*W.y,K.mapSize.y=r.y)),K.map===null||V===!0||w===!0){const P=this.type!==Cn?{minFilter:Mt,magFilter:Mt}:{};K.map!==null&&K.map.dispose(),K.map=new gi(n.x,n.y,P),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const z=K.getViewportCount();for(let P=0;P<z;P++){const G=K.getViewport(P);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),U.viewport(a),K.updateMatrices(Q,P),i=K.getFrustum(),y(E,O,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===Cn&&M(K,O),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(j,v,R)};function M(A,E){const O=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gi(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,O,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,O,d,_,null)}function x(A,E,O,j){let v=null;const R=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=O.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=v.uuid,V=E.uuid;let w=c[U];w===void 0&&(w={},c[U]=w);let H=w[V];H===void 0&&(H=v.clone(),w[V]=H,E.addEventListener("dispose",b)),v=H}if(v.visible=E.visible,v.wireframe=E.wireframe,j===Cn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=s.properties.get(v);U.light=O}return v}function y(A,E,O,j,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Cn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const V=e.update(A),w=A.material;if(Array.isArray(w)){const H=V.groups;for(let B=0,Q=H.length;B<Q;B++){const K=H[B],W=w[K.materialIndex];if(W&&W.visible){const z=x(A,W,j,v);A.onBeforeShadow(s,A,E,O,V,z,K),s.renderBufferDirect(O,null,V,z,A,K),A.onAfterShadow(s,A,E,O,V,z,K)}}}else if(w.visible){const H=x(A,w,j,v);A.onBeforeShadow(s,A,E,O,V,H,null),s.renderBufferDirect(O,null,V,H,A,null),A.onAfterShadow(s,A,E,O,V,H,null)}}const U=A.children;for(let V=0,w=U.length;V<w;V++)y(U[V],E,O,j,v)}function b(A){A.target.removeEventListener("dispose",b);for(const O in c){const j=c[O],v=A.target.uuid;v in j&&(j[v].dispose(),delete j[v])}}}function w_(s,e,t){const i=t.isWebGL2;function n(){let L=!1;const xe=new rt;let ce=null;const be=new rt(0,0,0,0);return{setMask:function(Ue){ce!==Ue&&!L&&(s.colorMask(Ue,Ue,Ue,Ue),ce=Ue)},setLocked:function(Ue){L=Ue},setClear:function(Ue,ke,Le,Ge,et){et===!0&&(Ue*=Ge,ke*=Ge,Le*=Ge),xe.set(Ue,ke,Le,Ge),be.equals(xe)===!1&&(s.clearColor(Ue,ke,Le,Ge),be.copy(xe))},reset:function(){L=!1,ce=null,be.set(-1,0,0,0)}}}function r(){let L=!1,xe=null,ce=null,be=null;return{setTest:function(Ue){Ue?oe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Ue){xe!==Ue&&!L&&(s.depthMask(Ue),xe=Ue)},setFunc:function(Ue){if(ce!==Ue){switch(Ue){case Oh:s.depthFunc(s.NEVER);break;case Bh:s.depthFunc(s.ALWAYS);break;case kh:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case Gh:s.depthFunc(s.EQUAL);break;case zh:s.depthFunc(s.GEQUAL);break;case Hh:s.depthFunc(s.GREATER);break;case Vh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ue}},setLocked:function(Ue){L=Ue},setClear:function(Ue){be!==Ue&&(s.clearDepth(Ue),be=Ue)},reset:function(){L=!1,xe=null,ce=null,be=null}}}function a(){let L=!1,xe=null,ce=null,be=null,Ue=null,ke=null,Le=null,Ge=null,et=null;return{setTest:function(Ve){L||(Ve?oe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Ve){xe!==Ve&&!L&&(s.stencilMask(Ve),xe=Ve)},setFunc:function(Ve,qe,at){(ce!==Ve||be!==qe||Ue!==at)&&(s.stencilFunc(Ve,qe,at),ce=Ve,be=qe,Ue=at)},setOp:function(Ve,qe,at){(ke!==Ve||Le!==qe||Ge!==at)&&(s.stencilOp(Ve,qe,at),ke=Ve,Le=qe,Ge=at)},setLocked:function(Ve){L=Ve},setClear:function(Ve){et!==Ve&&(s.clearStencil(Ve),et=Ve)},reset:function(){L=!1,xe=null,ce=null,be=null,Ue=null,ke=null,Le=null,Ge=null,et=null}}}const o=new n,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],p=null,m=!1,M=null,x=null,y=null,b=null,A=null,E=null,O=null,j=new Xe(0,0,0),v=0,R=!1,U=null,V=null,w=null,H=null,B=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=W>=2);let P=null,G={};const Y=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),k=new rt().fromArray(Y),$=new rt().fromArray(F);function J(L,xe,ce,be){const Ue=new Uint8Array(4),ke=s.createTexture();s.bindTexture(L,ke),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<ce;Le++)i&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(xe,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(xe+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return ke}const te={};te[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(te[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(s.DEPTH_TEST),l.setFunc(Is),de(!1),T(Ko),oe(s.CULL_FACE),pe(qn);function oe(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function Ae(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function he(L,xe){return d[L]!==xe?(s.bindFramebuffer(L,xe),d[L]=xe,i&&(L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=xe),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=xe)),!0):!1}function N(L,xe){let ce=_,be=!1;if(L)if(ce=g.get(xe),ce===void 0&&(ce=[],g.set(xe,ce)),L.isWebGLMultipleRenderTargets){const Ue=L.texture;if(ce.length!==Ue.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,Le=Ue.length;ke<Le;ke++)ce[ke]=s.COLOR_ATTACHMENT0+ke;ce.length=Ue.length,be=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,be=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,be=!0);be&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Oe(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const Me={[li]:s.FUNC_ADD,[Sh]:s.FUNC_SUBTRACT,[Eh]:s.FUNC_REVERSE_SUBTRACT};if(i)Me[$o]=s.MIN,Me[el]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[$o]=L.MIN_EXT,Me[el]=L.MAX_EXT)}const Te={[Th]:s.ZERO,[bh]:s.ONE,[Ah]:s.SRC_COLOR,[Ja]:s.SRC_ALPHA,[Uh]:s.SRC_ALPHA_SATURATE,[Lh]:s.DST_COLOR,[Rh]:s.DST_ALPHA,[wh]:s.ONE_MINUS_SRC_COLOR,[Qa]:s.ONE_MINUS_SRC_ALPHA,[Ph]:s.ONE_MINUS_DST_COLOR,[Ch]:s.ONE_MINUS_DST_ALPHA,[Dh]:s.CONSTANT_COLOR,[Ih]:s.ONE_MINUS_CONSTANT_COLOR,[Nh]:s.CONSTANT_ALPHA,[Fh]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(L,xe,ce,be,Ue,ke,Le,Ge,et,Ve){if(L===qn){m===!0&&(Ae(s.BLEND),m=!1);return}if(m===!1&&(oe(s.BLEND),m=!0),L!==Mh){if(L!==M||Ve!==R){if((x!==li||A!==li)&&(s.blendEquation(s.FUNC_ADD),x=li,A=li),Ve)switch(L){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zo:s.blendFunc(s.ONE,s.ONE);break;case Jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,E=null,O=null,j.set(0,0,0),v=0,M=L,R=Ve}return}Ue=Ue||xe,ke=ke||ce,Le=Le||be,(xe!==x||Ue!==A)&&(s.blendEquationSeparate(Me[xe],Me[Ue]),x=xe,A=Ue),(ce!==y||be!==b||ke!==E||Le!==O)&&(s.blendFuncSeparate(Te[ce],Te[be],Te[ke],Te[Le]),y=ce,b=be,E=ke,O=Le),(Ge.equals(j)===!1||et!==v)&&(s.blendColor(Ge.r,Ge.g,Ge.b,et),j.copy(Ge),v=et),M=L,R=!1}function Ne(L,xe){L.side===Kt?Ae(s.CULL_FACE):oe(s.CULL_FACE);let ce=L.side===It;xe&&(ce=!ce),de(ce),L.blending===qi&&L.transparent===!1?pe(qn):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const be=L.stencilWrite;c.setTest(be),be&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(L){U!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),U=L)}function T(L){L!==vh?(oe(s.CULL_FACE),L!==V&&(L===Ko?s.cullFace(s.BACK):L===xh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),V=L}function S(L){L!==w&&(K&&s.lineWidth(L),w=L)}function D(L,xe,ce){L?(oe(s.POLYGON_OFFSET_FILL),(H!==xe||B!==ce)&&(s.polygonOffset(xe,ce),H=xe,B=ce)):Ae(s.POLYGON_OFFSET_FILL)}function ne(L){L?oe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function q(L){L===void 0&&(L=s.TEXTURE0+Q-1),P!==L&&(s.activeTexture(L),P=L)}function ee(L,xe,ce){ce===void 0&&(P===null?ce=s.TEXTURE0+Q-1:ce=P);let be=G[ce];be===void 0&&(be={type:void 0,texture:void 0},G[ce]=be),(be.type!==L||be.texture!==xe)&&(P!==ce&&(s.activeTexture(ce),P=ce),s.bindTexture(L,xe||te[L]),be.type=L,be.texture=xe)}function ue(){const L=G[P];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(L){k.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),k.copy(L))}function I(L){$.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function me(L,xe){let ce=h.get(xe);ce===void 0&&(ce=new WeakMap,h.set(xe,ce));let be=ce.get(L);be===void 0&&(be=s.getUniformBlockIndex(xe,L.name),ce.set(L,be))}function Se(L,xe){const be=h.get(xe).get(L);u.get(xe)!==be&&(s.uniformBlockBinding(xe,be,L.__bindingPointIndex),u.set(xe,be))}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},P=null,G={},d={},g=new WeakMap,_=[],p=null,m=!1,M=null,x=null,y=null,b=null,A=null,E=null,O=null,j=new Xe(0,0,0),v=0,R=!1,U=null,V=null,w=null,H=null,B=null,k.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:oe,disable:Ae,bindFramebuffer:he,drawBuffers:N,useProgram:Oe,setBlending:pe,setMaterial:Ne,setFlipSided:de,setCullFace:T,setLineWidth:S,setPolygonOffset:D,setScissorTest:ne,activeTexture:q,bindTexture:ee,unbindTexture:ue,compressedTexImage2D:ge,compressedTexImage3D:fe,texImage2D:Ee,texImage3D:le,updateUBOMapping:me,uniformBlockBinding:Se,texStorage2D:Ie,texStorage3D:Re,texSubImage2D:ve,texSubImage3D:we,compressedTexSubImage2D:ae,compressedTexSubImage3D:Fe,scissor:Pe,viewport:I,reset:_e}}function R_(s,e,t,i,n,r,a){const o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return d?new OffscreenCanvas(T,S):kr("canvas")}function _(T,S,D,ne){let q=1;if((T.width>ne||T.height>ne)&&(q=ne/Math.max(T.width,T.height)),q<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ee=S?Gs:Math.floor,ue=ee(q*T.width),ge=ee(q*T.height);h===void 0&&(h=g(ue,ge));const fe=D?g(ue,ge):h;return fe.width=ue,fe.height=ge,fe.getContext("2d").drawImage(T,0,0,ue,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ue+"x"+ge+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return so(T.width)&&so(T.height)}function m(T){return o?!1:T.wrapS!==Zt||T.wrapT!==Zt||T.minFilter!==Mt&&T.minFilter!==yt}function M(T,S){return T.generateMipmaps&&S&&T.minFilter!==Mt&&T.minFilter!==yt}function x(T){s.generateMipmap(T)}function y(T,S,D,ne,q=!1){if(o===!1)return S;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=S;if(S===s.RED&&(D===s.FLOAT&&(ee=s.R32F),D===s.HALF_FLOAT&&(ee=s.R16F),D===s.UNSIGNED_BYTE&&(ee=s.R8)),S===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(ee=s.R8UI),D===s.UNSIGNED_SHORT&&(ee=s.R16UI),D===s.UNSIGNED_INT&&(ee=s.R32UI),D===s.BYTE&&(ee=s.R8I),D===s.SHORT&&(ee=s.R16I),D===s.INT&&(ee=s.R32I)),S===s.RG&&(D===s.FLOAT&&(ee=s.RG32F),D===s.HALF_FLOAT&&(ee=s.RG16F),D===s.UNSIGNED_BYTE&&(ee=s.RG8)),S===s.RGBA){const ue=q?Fs:tt.getTransfer(ne);D===s.FLOAT&&(ee=s.RGBA32F),D===s.HALF_FLOAT&&(ee=s.RGBA16F),D===s.UNSIGNED_BYTE&&(ee=ue===ct?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(T,S,D){return M(T,D)===!0||T.isFramebufferTexture&&T.minFilter!==Mt&&T.minFilter!==yt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){return T===Mt||T===to||T===Wi?s.NEAREST:s.LINEAR}function E(T){const S=T.target;S.removeEventListener("dispose",E),j(S),S.isVideoTexture&&u.delete(S)}function O(T){const S=T.target;S.removeEventListener("dispose",O),R(S)}function j(T){const S=i.get(T);if(S.__webglInit===void 0)return;const D=T.source,ne=f.get(D);if(ne){const q=ne[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&v(T),Object.keys(ne).length===0&&f.delete(D)}i.remove(T)}function v(T){const S=i.get(T);s.deleteTexture(S.__webglTexture);const D=T.source,ne=f.get(D);delete ne[S.__cacheKey],a.memory.textures--}function R(T){const S=T.texture,D=i.get(T),ne=i.get(S);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(D.__webglFramebuffer[q]))for(let ee=0;ee<D.__webglFramebuffer[q].length;ee++)s.deleteFramebuffer(D.__webglFramebuffer[q][ee]);else s.deleteFramebuffer(D.__webglFramebuffer[q]);D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer[q])}else{if(Array.isArray(D.__webglFramebuffer))for(let q=0;q<D.__webglFramebuffer.length;q++)s.deleteFramebuffer(D.__webglFramebuffer[q]);else s.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&s.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let q=0;q<D.__webglColorRenderbuffer.length;q++)D.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(D.__webglColorRenderbuffer[q]);D.__webglDepthRenderbuffer&&s.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let q=0,ee=S.length;q<ee;q++){const ue=i.get(S[q]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(S[q])}i.remove(S),i.remove(T)}let U=0;function V(){U=0}function w(){const T=U;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),U+=1,T}function H(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function B(T,S){const D=i.get(T);if(T.isVideoTexture&&Ne(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(D,T,S);return}}t.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+S)}function Q(T,S){const D=i.get(T);if(T.version>0&&D.__version!==T.version){k(D,T,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+S)}function K(T,S){const D=i.get(T);if(T.version>0&&D.__version!==T.version){k(D,T,S);return}t.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+S)}function W(T,S){const D=i.get(T);if(T.version>0&&D.__version!==T.version){$(D,T,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+S)}const z={[$i]:s.REPEAT,[Zt]:s.CLAMP_TO_EDGE,[Ns]:s.MIRRORED_REPEAT},P={[Mt]:s.NEAREST,[to]:s.NEAREST_MIPMAP_NEAREST,[Wi]:s.NEAREST_MIPMAP_LINEAR,[yt]:s.LINEAR,[Ls]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},G={[ff]:s.NEVER,[vf]:s.ALWAYS,[df]:s.LESS,[Au]:s.LEQUAL,[pf]:s.EQUAL,[_f]:s.GEQUAL,[mf]:s.GREATER,[gf]:s.NOTEQUAL};function Y(T,S,D){if(S.type===gn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yt||S.magFilter===Ls||S.magFilter===Wi||S.magFilter===Ln||S.minFilter===yt||S.minFilter===Ls||S.minFilter===Wi||S.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),D?(s.texParameteri(T,s.TEXTURE_WRAP_S,z[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,z[S.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,z[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,P[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,P[S.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Zt||S.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,A(S.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Mt&&S.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,G[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Mt||S.minFilter!==Wi&&S.minFilter!==Ln||S.type===gn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Or&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(s.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function F(T,S){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",E));const ne=S.source;let q=f.get(ne);q===void 0&&(q={},f.set(ne,q));const ee=H(S);if(ee!==T.__cacheKey){q[ee]===void 0&&(q[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,D=!0),q[ee].usedTimes++;const ue=q[T.__cacheKey];ue!==void 0&&(q[T.__cacheKey].usedTimes--,ue.usedTimes===0&&v(S)),T.__cacheKey=ee,T.__webglTexture=q[ee].texture}return D}function k(T,S,D){let ne=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=s.TEXTURE_3D);const q=F(T,S),ee=S.source;t.bindTexture(ne,T.__webglTexture,s.TEXTURE0+D);const ue=i.get(ee);if(ee.version!==ue.__version||q===!0){t.activeTexture(s.TEXTURE0+D);const ge=tt.getPrimaries(tt.workingColorSpace),fe=S.colorSpace===Qt?null:tt.getPrimaries(S.colorSpace),ve=S.colorSpace===Qt||ge===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const we=m(S)&&p(S.image)===!1;let ae=_(S.image,we,!1,n.maxTextureSize);ae=de(S,ae);const Fe=p(ae)||o,Ie=r.convert(S.format,S.colorSpace);let Re=r.convert(S.type),Ee=y(S.internalFormat,Ie,Re,S.colorSpace,S.isVideoTexture);Y(ne,S,Fe);let le;const Pe=S.mipmaps,I=o&&S.isVideoTexture!==!0&&Ee!==Mu,me=ue.__version===void 0||q===!0,Se=ee.dataReady,_e=b(S,ae,Fe);if(S.isDepthTexture)Ee=s.DEPTH_COMPONENT,o?S.type===gn?Ee=s.DEPTH_COMPONENT32F:S.type===jn?Ee=s.DEPTH_COMPONENT24:S.type===hi?Ee=s.DEPTH24_STENCIL8:Ee=s.DEPTH_COMPONENT16:S.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===fi&&Ee===s.DEPTH_COMPONENT&&S.type!==go&&S.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=jn,Re=r.convert(S.type)),S.format===er&&Ee===s.DEPTH_COMPONENT&&(Ee=s.DEPTH_STENCIL,S.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=hi,Re=r.convert(S.type))),me&&(I?t.texStorage2D(s.TEXTURE_2D,1,Ee,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Ee,ae.width,ae.height,0,Ie,Re,null));else if(S.isDataTexture)if(Pe.length>0&&Fe){I&&me&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,Pe[0].width,Pe[0].height);for(let L=0,xe=Pe.length;L<xe;L++)le=Pe[L],I?Se&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,le.width,le.height,Ie,Re,le.data):t.texImage2D(s.TEXTURE_2D,L,Ee,le.width,le.height,0,Ie,Re,le.data);S.generateMipmaps=!1}else I?(me&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,ae.width,ae.height),Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,Ie,Re,ae.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,ae.width,ae.height,0,Ie,Re,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ee,Pe[0].width,Pe[0].height,ae.depth);for(let L=0,xe=Pe.length;L<xe;L++)le=Pe[L],S.format!==Jt?Ie!==null?I?Se&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,L,0,0,0,le.width,le.height,ae.depth,Ie,le.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,L,Ee,le.width,le.height,ae.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,L,0,0,0,le.width,le.height,ae.depth,Ie,Re,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,L,Ee,le.width,le.height,ae.depth,0,Ie,Re,le.data)}else{I&&me&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,Pe[0].width,Pe[0].height);for(let L=0,xe=Pe.length;L<xe;L++)le=Pe[L],S.format!==Jt?Ie!==null?I?Se&&t.compressedTexSubImage2D(s.TEXTURE_2D,L,0,0,le.width,le.height,Ie,le.data):t.compressedTexImage2D(s.TEXTURE_2D,L,Ee,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?Se&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,le.width,le.height,Ie,Re,le.data):t.texImage2D(s.TEXTURE_2D,L,Ee,le.width,le.height,0,Ie,Re,le.data)}else if(S.isDataArrayTexture)I?(me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ee,ae.width,ae.height,ae.depth),Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ie,Re,ae.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,Ie,Re,ae.data);else if(S.isData3DTexture)I?(me&&t.texStorage3D(s.TEXTURE_3D,_e,Ee,ae.width,ae.height,ae.depth),Se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ie,Re,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,Ie,Re,ae.data);else if(S.isFramebufferTexture){if(me)if(I)t.texStorage2D(s.TEXTURE_2D,_e,Ee,ae.width,ae.height);else{let L=ae.width,xe=ae.height;for(let ce=0;ce<_e;ce++)t.texImage2D(s.TEXTURE_2D,ce,Ee,L,xe,0,Ie,Re,null),L>>=1,xe>>=1}}else if(Pe.length>0&&Fe){I&&me&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,Pe[0].width,Pe[0].height);for(let L=0,xe=Pe.length;L<xe;L++)le=Pe[L],I?Se&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,Ie,Re,le):t.texImage2D(s.TEXTURE_2D,L,Ee,Ie,Re,le);S.generateMipmaps=!1}else I?(me&&t.texStorage2D(s.TEXTURE_2D,_e,Ee,ae.width,ae.height),Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Re,ae)):t.texImage2D(s.TEXTURE_2D,0,Ee,Ie,Re,ae);M(S,Fe)&&x(ne),ue.__version=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function $(T,S,D){if(S.image.length!==6)return;const ne=F(T,S),q=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+D);const ee=i.get(q);if(q.version!==ee.__version||ne===!0){t.activeTexture(s.TEXTURE0+D);const ue=tt.getPrimaries(tt.workingColorSpace),ge=S.colorSpace===Qt?null:tt.getPrimaries(S.colorSpace),fe=S.colorSpace===Qt||ue===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,we=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let L=0;L<6;L++)!ve&&!we?ae[L]=_(S.image[L],!1,!0,n.maxCubemapSize):ae[L]=we?S.image[L].image:S.image[L],ae[L]=de(S,ae[L]);const Fe=ae[0],Ie=p(Fe)||o,Re=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type),le=y(S.internalFormat,Re,Ee,S.colorSpace),Pe=o&&S.isVideoTexture!==!0,I=ee.__version===void 0||ne===!0,me=q.dataReady;let Se=b(S,Fe,Ie);Y(s.TEXTURE_CUBE_MAP,S,Ie);let _e;if(ve){Pe&&I&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,le,Fe.width,Fe.height);for(let L=0;L<6;L++){_e=ae[L].mipmaps;for(let xe=0;xe<_e.length;xe++){const ce=_e[xe];S.format!==Jt?Re!==null?Pe?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe,le,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe,0,0,ce.width,ce.height,Re,Ee,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe,le,ce.width,ce.height,0,Re,Ee,ce.data)}}}else{_e=S.mipmaps,Pe&&I&&(_e.length>0&&Se++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,le,ae[0].width,ae[0].height));for(let L=0;L<6;L++)if(we){Pe?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ae[L].width,ae[L].height,Re,Ee,ae[L].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,le,ae[L].width,ae[L].height,0,Re,Ee,ae[L].data);for(let xe=0;xe<_e.length;xe++){const be=_e[xe].image[L].image;Pe?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe+1,0,0,be.width,be.height,Re,Ee,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe+1,le,be.width,be.height,0,Re,Ee,be.data)}}else{Pe?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Re,Ee,ae[L]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,le,Re,Ee,ae[L]);for(let xe=0;xe<_e.length;xe++){const ce=_e[xe];Pe?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe+1,0,0,Re,Ee,ce.image[L]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe+1,le,Re,Ee,ce.image[L])}}}M(S,Ie)&&x(s.TEXTURE_CUBE_MAP),ee.__version=q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function J(T,S,D,ne,q,ee){const ue=r.convert(D.format,D.colorSpace),ge=r.convert(D.type),fe=y(D.internalFormat,ue,ge,D.colorSpace);if(!i.get(S).__hasExternalTextures){const we=Math.max(1,S.width>>ee),ae=Math.max(1,S.height>>ee);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,ee,fe,we,ae,S.depth,0,ue,ge,null):t.texImage2D(q,ee,fe,we,ae,0,ue,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),pe(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,q,i.get(D).__webglTexture,0,Te(S)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,q,i.get(D).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(T,S,D){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let ne=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(D||pe(S)){const q=S.depthTexture;q&&q.isDepthTexture&&(q.type===gn?ne=s.DEPTH_COMPONENT32F:q.type===jn&&(ne=s.DEPTH_COMPONENT24));const ee=Te(S);pe(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,ne,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,ne,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Te(S);D&&pe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,S.width,S.height):pe(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let q=0;q<ne.length;q++){const ee=ne[q],ue=r.convert(ee.format,ee.colorSpace),ge=r.convert(ee.type),fe=y(ee.internalFormat,ue,ge,ee.colorSpace),ve=Te(S);D&&pe(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,fe,S.width,S.height):pe(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,fe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,fe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const ne=i.get(S.depthTexture).__webglTexture,q=Te(S);if(S.depthTexture.format===fi)pe(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(S.depthTexture.format===er)pe(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(T){const S=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,T)}else if(D){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=s.createRenderbuffer(),te(S.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),te(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(T,S,D){const ne=i.get(T);S!==void 0&&J(ne.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Ae(T)}function N(T){const S=T.texture,D=i.get(T),ne=i.get(S);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=S.version,a.memory.textures++);const q=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,ue=p(T)||o;if(q){D.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[ge]=[];for(let fe=0;fe<S.mipmaps.length;fe++)D.__webglFramebuffer[ge][fe]=s.createFramebuffer()}else D.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)D.__webglFramebuffer[ge]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(ee)if(n.drawBuffers){const ge=T.texture;for(let fe=0,ve=ge.length;fe<ve;fe++){const we=i.get(ge[fe]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&pe(T)===!1){const ge=ee?S:[S];D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const ve=ge[fe];D.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[fe]);const we=r.convert(ve.format,ve.colorSpace),ae=r.convert(ve.type),Fe=y(ve.internalFormat,we,ae,ve.colorSpace,T.isXRRenderTarget===!0),Ie=Te(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,Fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,D.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),te(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Y(s.TEXTURE_CUBE_MAP,S,ue);for(let ge=0;ge<6;ge++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)J(D.__webglFramebuffer[ge][fe],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,fe);else J(D.__webglFramebuffer[ge],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);M(S,ue)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const ge=T.texture;for(let fe=0,ve=ge.length;fe<ve;fe++){const we=ge[fe],ae=i.get(we);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),Y(s.TEXTURE_2D,we,ue),J(D.__webglFramebuffer,T,we,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),M(we,ue)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ge=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ne.__webglTexture),Y(ge,S,ue),o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)J(D.__webglFramebuffer[fe],T,S,s.COLOR_ATTACHMENT0,ge,fe);else J(D.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,ge,0);M(S,ue)&&x(ge),t.unbindTexture()}T.depthBuffer&&Ae(T)}function Oe(T){const S=p(T)||o,D=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,q=D.length;ne<q;ne++){const ee=D[ne];if(M(ee,S)){const ue=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ge=i.get(ee).__webglTexture;t.bindTexture(ue,ge),x(ue),t.unbindTexture()}}}function Me(T){if(o&&T.samples>0&&pe(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],D=T.width,ne=T.height;let q=s.COLOR_BUFFER_BIT;const ee=[],ue=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=i.get(T),fe=T.isWebGLMultipleRenderTargets===!0;if(fe)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){ee.push(s.COLOR_ATTACHMENT0+ve),T.depthBuffer&&ee.push(ue);const we=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(we===!1&&(T.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]),we===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ue])),fe){const ae=i.get(S[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,D,ne,0,0,D,ne,q,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);const we=i.get(S[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,we,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Te(T){return Math.min(n.maxSamples,T.samples)}function pe(T){const S=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ne(T){const S=a.render.frame;u.get(T)!==S&&(u.set(T,S),T.update())}function de(T,S){const D=T.colorSpace,ne=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ro||D!==St&&D!==Qt&&(tt.getTransfer(D)===ct?o===!1?e.has("EXT_sRGB")===!0&&ne===Jt?(T.format=ro,T.minFilter=yt,T.generateMipmaps=!1):S=Cu.sRGBToLinear(S):(ne!==Jt||q!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),S}this.allocateTextureUnit=w,this.resetTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=he,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=J,this.useMultisampledRTT=pe}function C_(s,e,t){const i=t.isWebGL2;function n(r,a=Qt){let o;const l=tt.getTransfer(a);if(r===Zn)return s.UNSIGNED_BYTE;if(r===gu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_u)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$h)return s.BYTE;if(r===ef)return s.SHORT;if(r===go)return s.UNSIGNED_SHORT;if(r===mu)return s.INT;if(r===jn)return s.UNSIGNED_INT;if(r===gn)return s.FLOAT;if(r===Or)return i?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===tf)return s.ALPHA;if(r===Jt)return s.RGBA;if(r===nf)return s.LUMINANCE;if(r===rf)return s.LUMINANCE_ALPHA;if(r===fi)return s.DEPTH_COMPONENT;if(r===er)return s.DEPTH_STENCIL;if(r===ro)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===sf)return s.RED;if(r===vu)return s.RED_INTEGER;if(r===af)return s.RG;if(r===xu)return s.RG_INTEGER;if(r===yu)return s.RGBA_INTEGER;if(r===ca||r===ua||r===ha||r===fa)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ha)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nl||r===il||r===rl||r===sl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===il)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===al||r===ol)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===al)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ol)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ll||r===cl||r===ul||r===hl||r===fl||r===dl||r===pl||r===ml||r===gl||r===_l||r===vl||r===xl||r===yl||r===Ml)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ll)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ul)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ml)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_l)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yl)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ml)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===da||r===Sl||r===El)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===da)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===El)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===of||r===Tl||r===bl||r===Al)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===da)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Tl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Al)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===hi?i?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class L_ extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ui extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new mt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,n=new Jn({extensions:{fragDepth:!0},vertexShader:U_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bt(new Mi(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class N_ extends yi{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new I_,p=t.getContextAttributes();let m=null,M=null;const x=[],y=[],b=new He;let A=null;const E=new Dt;E.layers.enable(1),E.viewport=new rt;const O=new Dt;O.layers.enable(2),O.viewport=new rt;const j=[E,O],v=new L_;v.layers.enable(1),v.layers.enable(2);let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let k=x[F];return k===void 0&&(k=new Oa,x[F]=k),k.getTargetRaySpace()},this.getControllerGrip=function(F){let k=x[F];return k===void 0&&(k=new Oa,x[F]=k),k.getGripSpace()},this.getHand=function(F){let k=x[F];return k===void 0&&(k=new Oa,x[F]=k),k.getHandSpace()};function V(F){const k=y.indexOf(F.inputSource);if(k===-1)return;const $=x[k];$!==void 0&&($.update(F.inputSource,F.frame,c||a),$.dispatchEvent({type:F.type,data:F.inputSource}))}function w(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",w),n.removeEventListener("inputsourceschange",H);for(let F=0;F<x.length;F++){const k=y[F];k!==null&&(y[F]=null,x[F].disconnect(k))}R=null,U=null,_.reset(),e.setRenderTarget(m),d=null,f=null,h=null,n=null,M=null,Y.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",w),n.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:n.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,k),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new gi(d.framebufferWidth,d.framebufferHeight,{format:Jt,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let k=null,$=null,J=null;p.depth&&(J=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=p.stencil?er:fi,$=p.stencil?hi:jn);const te={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(te),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new gi(f.textureWidth,f.textureHeight,{format:Jt,type:Zn,depthTexture:new zu(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const oe=e.properties.get(M);oe.__ignoreDepthValues=f.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Y.setContext(n),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function H(F){for(let k=0;k<F.removed.length;k++){const $=F.removed[k],J=y.indexOf($);J>=0&&(y[J]=null,x[J].disconnect($))}for(let k=0;k<F.added.length;k++){const $=F.added[k];let J=y.indexOf($);if(J===-1){for(let oe=0;oe<x.length;oe++)if(oe>=y.length){y.push($),J=oe;break}else if(y[oe]===null){y[oe]=$,J=oe;break}if(J===-1)break}const te=x[J];te&&te.connect($)}}const B=new X,Q=new X;function K(F,k,$){B.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition($.matrixWorld);const J=B.distanceTo(Q),te=k.projectionMatrix.elements,oe=$.projectionMatrix.elements,Ae=te[14]/(te[10]-1),he=te[14]/(te[10]+1),N=(te[9]+1)/te[5],Oe=(te[9]-1)/te[5],Me=(te[8]-1)/te[0],Te=(oe[8]+1)/oe[0],pe=Ae*Me,Ne=Ae*Te,de=J/(-Me+Te),T=de*-Me;k.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(T),F.translateZ(de),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const S=Ae+de,D=he+de,ne=pe-T,q=Ne+(J-T),ee=N*he/D*S,ue=Oe*he/D*S;F.projectionMatrix.makePerspective(ne,q,ee,ue,S,D),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function W(F,k){k===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(k.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;_.texture!==null&&(F.near=_.depthNear,F.far=_.depthFar),v.near=O.near=E.near=F.near,v.far=O.far=E.far=F.far,(R!==v.near||U!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,U=v.far,E.near=R,E.far=U,O.near=R,O.far=U,E.updateProjectionMatrix(),O.updateProjectionMatrix(),F.updateProjectionMatrix());const k=F.parent,$=v.cameras;W(v,k);for(let J=0;J<$.length;J++)W($[J],k);$.length===2?K(v,E,O):v.projectionMatrix.copy(E.projectionMatrix),z(F,v,k)};function z(F,k,$){$===null?F.matrix.copy(k.matrixWorld):(F.matrix.copy($.matrixWorld),F.matrix.invert(),F.matrix.multiply(k.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=nr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null};let P=null;function G(F,k){if(u=k.getViewerPose(c||a),g=k,u!==null){const $=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let J=!1;$.length!==v.cameras.length&&(v.cameras.length=0,J=!0);for(let oe=0;oe<$.length;oe++){const Ae=$[oe];let he=null;if(d!==null)he=d.getViewport(Ae);else{const Oe=h.getViewSubImage(f,Ae);he=Oe.viewport,oe===0&&(e.setRenderTargetTextures(M,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(M))}let N=j[oe];N===void 0&&(N=new Dt,N.layers.enable(oe),N.viewport=new rt,j[oe]=N),N.matrix.fromArray(Ae.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Ae.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(he.x,he.y,he.width,he.height),oe===0&&(v.matrix.copy(N.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),J===!0&&v.cameras.push(N)}const te=n.enabledFeatures;if(te&&te.includes("depth-sensing")){const oe=h.getDepthInformation($[0]);oe&&oe.isValid&&oe.texture&&_.init(e,oe,n.renderState)}}for(let $=0;$<x.length;$++){const J=y[$],te=x[$];J!==null&&te!==void 0&&te.update(J,k,c||a)}_.render(e,v),P&&P(F,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}const Y=new Gu;Y.setAnimationLoop(G),this.setAnimationLoop=function(F){P=F},this.dispose=function(){}}}function F_(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Fu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,M,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===It&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===It&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===It&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function O_(s,e,t,i){let n={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const y=x.program;i.uniformBlockBinding(M,y)}function c(M,x){let y=n[M.id];y===void 0&&(g(M),y=u(M),n[M.id]=y,M.addEventListener("dispose",p));const b=x.program;i.updateUBOMapping(M,b);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const x=h();M.__bindingPointIndex=x;const y=s.createBuffer(),b=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=n[M.id],y=M.uniforms,b=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,E=y.length;A<E;A++){const O=Array.isArray(y[A])?y[A]:[y[A]];for(let j=0,v=O.length;j<v;j++){const R=O[j];if(d(R,A,j,b)===!0){const U=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let w=0;for(let H=0;H<V.length;H++){const B=V[H],Q=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,U+w,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,w),w+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,x,y,b){const A=M.value,E=x+"_"+y;if(b[E]===void 0)return typeof A=="number"||typeof A=="boolean"?b[E]=A:b[E]=A.clone(),!0;{const O=b[E];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return b[E]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(M){const x=M.uniforms;let y=0;const b=16;for(let E=0,O=x.length;E<O;E++){const j=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,R=j.length;v<R;v++){const U=j[v],V=Array.isArray(U.value)?U.value:[U.value];for(let w=0,H=V.length;w<H;w++){const B=V[w],Q=_(B),K=y%b;K!==0&&b-K<Q.boundary&&(y+=b-K),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Q.storage}}}const A=y%b;return A>0&&(y+=b-A),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function m(){for(const M in n)s.deleteBuffer(n[M]);a=[],n={},r={}}return{bind:l,update:c,dispose:m}}class Ku{constructor(e={}){const{canvas:t=Df(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const x=this;let y=!1,b=0,A=0,E=null,O=-1,j=null;const v=new rt,R=new rt;let U=null;const V=new Xe(0);let w=0,H=t.width,B=t.height,Q=1,K=null,W=null;const z=new rt(0,0,H,B),P=new rt(0,0,H,B);let G=!1;const Y=new xo;let F=!1,k=!1,$=null;const J=new Qe,te=new He,oe=new X,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return E===null?Q:1}let N=i;function Oe(C,Z){for(let re=0;re<C.length;re++){const se=C[re],ie=t.getContext(se,Z);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",xe,!1),N===null){const Z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&Z.shift(),N=Oe(Z,C),N===null)throw Oe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Me,Te,pe,Ne,de,T,S,D,ne,q,ee,ue,ge,fe,ve,we,ae,Fe,Ie,Re,Ee,le,Pe,I;function me(){Me=new jm(N),Te=new Gm(N,Me,e),Me.init(Te),le=new C_(N,Me,Te),pe=new w_(N,Me,Te),Ne=new Km(N),de=new m_,T=new R_(N,Me,pe,de,Te,le,Ne),S=new Hm(x),D=new Xm(x),ne=new id(N,Te),Pe=new Bm(N,Me,ne,Te),q=new Ym(N,ne,Ne,Pe),ee=new $m(N,q,ne,Ne),Ie=new Qm(N,Te,T),we=new zm(de),ue=new p_(x,S,D,Me,Te,Pe,we),ge=new F_(x,de),fe=new __,ve=new E_(Me,Te),Fe=new Om(x,S,D,pe,ee,f,l),ae=new A_(x,ee,Te),I=new O_(N,Ne,Te,pe),Re=new km(N,Me,Ne,Te),Ee=new qm(N,Me,Ne,Te),Ne.programs=ue.programs,x.capabilities=Te,x.extensions=Me,x.properties=de,x.renderLists=fe,x.shadowMap=ae,x.state=pe,x.info=Ne}me();const Se=new N_(x,N);this.xr=Se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(H,B,!1))},this.getSize=function(C){return C.set(H,B)},this.setSize=function(C,Z,re=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,B=Z,t.width=Math.floor(C*Q),t.height=Math.floor(Z*Q),re===!0&&(t.style.width=C+"px",t.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(H*Q,B*Q).floor()},this.setDrawingBufferSize=function(C,Z,re){H=C,B=Z,Q=re,t.width=Math.floor(C*re),t.height=Math.floor(Z*re),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(v)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,Z,re,se){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,Z,re,se),pe.viewport(v.copy(z).multiplyScalar(Q).floor())},this.getScissor=function(C){return C.copy(P)},this.setScissor=function(C,Z,re,se){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,Z,re,se),pe.scissor(R.copy(P).multiplyScalar(Q).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(C){pe.setScissorTest(G=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(C=!0,Z=!0,re=!0){let se=0;if(C){let ie=!1;if(E!==null){const De=E.texture.format;ie=De===yu||De===xu||De===vu}if(ie){const De=E.texture.type,Be=De===Zn||De===jn||De===go||De===hi||De===gu||De===_u,ze=Fe.getClearColor(),ye=Fe.getClearAlpha(),je=ze.r,Ye=ze.g,We=ze.b;Be?(d[0]=je,d[1]=Ye,d[2]=We,d[3]=ye,N.clearBufferuiv(N.COLOR,0,d)):(g[0]=je,g[1]=Ye,g[2]=We,g[3]=ye,N.clearBufferiv(N.COLOR,0,g))}else se|=N.COLOR_BUFFER_BIT}Z&&(se|=N.DEPTH_BUFFER_BIT),re&&(se|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),fe.dispose(),ve.dispose(),de.dispose(),S.dispose(),D.dispose(),ee.dispose(),Pe.dispose(),I.dispose(),ue.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",et),Se.removeEventListener("sessionend",Ve),$&&($.dispose(),$=null),qe.stop()};function _e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Ne.autoReset,Z=ae.enabled,re=ae.autoUpdate,se=ae.needsUpdate,ie=ae.type;me(),Ne.autoReset=C,ae.enabled=Z,ae.autoUpdate=re,ae.needsUpdate=se,ae.type=ie}function xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const Z=C.target;Z.removeEventListener("dispose",ce),be(Z)}function be(C){Ue(C),de.remove(C)}function Ue(C){const Z=de.get(C).programs;Z!==void 0&&(Z.forEach(function(re){ue.releaseProgram(re)}),C.isShaderMaterial&&ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,re,se,ie,De){Z===null&&(Z=Ae);const Be=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=jr(C,Z,re,se,ie);pe.setMaterial(se,Be);let ye=re.index,je=1;if(se.wireframe===!0){if(ye=q.getWireframeAttribute(re),ye===void 0)return;je=2}const Ye=re.drawRange,We=re.attributes.position;let ot=Ye.start*je,At=(Ye.start+Ye.count)*je;De!==null&&(ot=Math.max(ot,De.start*je),At=Math.min(At,(De.start+De.count)*je)),ye!==null?(ot=Math.max(ot,0),At=Math.min(At,ye.count)):We!=null&&(ot=Math.max(ot,0),At=Math.min(At,We.count));const ft=At-ot;if(ft<0||ft===1/0)return;Pe.setup(ie,se,ze,re,ye);let kt,st=Re;if(ye!==null&&(kt=ne.get(ye),st=Ee,st.setIndex(kt)),ie.isMesh)se.wireframe===!0?(pe.setLineWidth(se.wireframeLinewidth*he()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(ie.isLine){let Ke=se.linewidth;Ke===void 0&&(Ke=1),pe.setLineWidth(Ke*he()),ie.isLineSegments?st.setMode(N.LINES):ie.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else ie.isPoints?st.setMode(N.POINTS):ie.isSprite&&st.setMode(N.TRIANGLES);if(ie.isBatchedMesh)st.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)st.renderInstances(ot,ft,ie.count);else if(re.isInstancedBufferGeometry){const Ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,In=Math.min(re.instanceCount,Ke);st.renderInstances(ot,ft,In)}else st.render(ot,ft)};function ke(C,Z,re){C.transparent===!0&&C.side===Kt&&C.forceSinglePass===!1?(C.side=It,C.needsUpdate=!0,Bt(C,Z,re),C.side=xn,C.needsUpdate=!0,Bt(C,Z,re),C.side=Kt):Bt(C,Z,re)}this.compile=function(C,Z,re=null){re===null&&(re=C),p=ve.get(re),p.init(),M.push(p),re.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),C!==re&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),p.setupLights(x._useLegacyLights);const se=new Set;return C.traverse(function(ie){const De=ie.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const ze=De[Be];ke(ze,re,ie),se.add(ze)}else ke(De,re,ie),se.add(De)}),M.pop(),p=null,se},this.compileAsync=function(C,Z,re=null){const se=this.compile(C,Z,re);return new Promise(ie=>{function De(){if(se.forEach(function(Be){de.get(Be).currentProgram.isReady()&&se.delete(Be)}),se.size===0){ie(C);return}setTimeout(De,10)}Me.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Le=null;function Ge(C){Le&&Le(C)}function et(){qe.stop()}function Ve(){qe.start()}const qe=new Gu;qe.setAnimationLoop(Ge),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(C){Le=C,Se.setAnimationLoop(C),C===null?qe.stop():qe.start()},Se.addEventListener("sessionstart",et),Se.addEventListener("sessionend",Ve),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(Z),Z=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,Z,E),p=ve.get(C,M.length),p.init(),M.push(p),J.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y.setFromProjectionMatrix(J),k=this.localClippingEnabled,F=we.init(this.clippingPlanes,k),_=fe.get(C,m.length),_.init(),m.push(_),at(C,Z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,W),this.info.render.frame++,F===!0&&we.beginShadows();const re=p.state.shadowsArray;if(ae.render(re,C,Z),F===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1)&&Fe.render(_,C),p.setupLights(x._useLegacyLights),Z.isArrayCamera){const se=Z.cameras;for(let ie=0,De=se.length;ie<De;ie++){const Be=se[ie];$t(_,C,Be,Be.viewport)}}else $t(_,C,Z);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,Z),Pe.resetDefaultState(),O=-1,j=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function at(C,Z,re,se){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){se&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);const Be=ee.update(C),ze=C.material;ze.visible&&_.push(C,Be,ze,re,oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Be=ee.update(C),ze=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),oe.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),oe.copy(Be.boundingSphere.center)),oe.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(ze)){const ye=Be.groups;for(let je=0,Ye=ye.length;je<Ye;je++){const We=ye[je],ot=ze[We.materialIndex];ot&&ot.visible&&_.push(C,Be,ot,re,oe.z,We)}}else ze.visible&&_.push(C,Be,ze,re,oe.z,null)}}const De=C.children;for(let Be=0,ze=De.length;Be<ze;Be++)at(De[Be],Z,re,se)}function $t(C,Z,re,se){const ie=C.opaque,De=C.transmissive,Be=C.transparent;p.setupLightsView(re),F===!0&&we.setGlobalState(x.clippingPlanes,re),De.length>0&&en(ie,De,Z,re),se&&pe.viewport(v.copy(se)),ie.length>0&&Vt(ie,Z,re),De.length>0&&Vt(De,Z,re),Be.length>0&&Vt(Be,Z,re),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function en(C,Z,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;const De=Te.isWebGL2;$===null&&($=new gi(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Or:Zn,minFilter:Ln,samples:De?4:0})),x.getDrawingBufferSize(te),De?$.setSize(te.x,te.y):$.setSize(Gs(te.x),Gs(te.y));const Be=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(V),w=x.getClearAlpha(),w<1&&x.setClearColor(16777215,.5),x.clear();const ze=x.toneMapping;x.toneMapping=Kn,Vt(C,re,se),T.updateMultisampleRenderTarget($),T.updateRenderTargetMipmap($);let ye=!1;for(let je=0,Ye=Z.length;je<Ye;je++){const We=Z[je],ot=We.object,At=We.geometry,ft=We.material,kt=We.group;if(ft.side===Kt&&ot.layers.test(se.layers)){const st=ft.side;ft.side=It,ft.needsUpdate=!0,dn(ot,re,se,At,ft,kt),ft.side=st,ft.needsUpdate=!0,ye=!0}}ye===!0&&(T.updateMultisampleRenderTarget($),T.updateRenderTargetMipmap($)),x.setRenderTarget(Be),x.setClearColor(V,w),x.toneMapping=ze}function Vt(C,Z,re){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let ie=0,De=C.length;ie<De;ie++){const Be=C[ie],ze=Be.object,ye=Be.geometry,je=se===null?Be.material:se,Ye=Be.group;ze.layers.test(re.layers)&&dn(ze,Z,re,ye,je,Ye)}}function dn(C,Z,re,se,ie,De){C.onBeforeRender(x,Z,re,se,ie,De),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(x,Z,re,se,C,De),ie.transparent===!0&&ie.side===Kt&&ie.forceSinglePass===!1?(ie.side=It,ie.needsUpdate=!0,x.renderBufferDirect(re,Z,se,ie,C,De),ie.side=xn,ie.needsUpdate=!0,x.renderBufferDirect(re,Z,se,ie,C,De),ie.side=Kt):x.renderBufferDirect(re,Z,se,ie,C,De),C.onAfterRender(x,Z,re,se,ie,De)}function Bt(C,Z,re){Z.isScene!==!0&&(Z=Ae);const se=de.get(C),ie=p.state.lights,De=p.state.shadowsArray,Be=ie.state.version,ze=ue.getParameters(C,ie.state,De,Z,re),ye=ue.getProgramCacheKey(ze);let je=se.programs;se.environment=C.isMeshStandardMaterial?Z.environment:null,se.fog=Z.fog,se.envMap=(C.isMeshStandardMaterial?D:S).get(C.envMap||se.environment),je===void 0&&(C.addEventListener("dispose",ce),je=new Map,se.programs=je);let Ye=je.get(ye);if(Ye!==void 0){if(se.currentProgram===Ye&&se.lightsStateVersion===Be)return pn(C,ze),Ye}else ze.uniforms=ue.getUniforms(C),C.onBuild(re,ze,x),C.onBeforeCompile(ze,x),Ye=ue.acquireProgram(ze,ye),je.set(ye,Ye),se.uniforms=ze.uniforms;const We=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=we.uniform),pn(C,ze),se.needsLights=Js(C),se.lightsStateVersion=Be,se.needsLights&&(We.ambientLightColor.value=ie.state.ambient,We.lightProbe.value=ie.state.probe,We.directionalLights.value=ie.state.directional,We.directionalLightShadows.value=ie.state.directionalShadow,We.spotLights.value=ie.state.spot,We.spotLightShadows.value=ie.state.spotShadow,We.rectAreaLights.value=ie.state.rectArea,We.ltc_1.value=ie.state.rectAreaLTC1,We.ltc_2.value=ie.state.rectAreaLTC2,We.pointLights.value=ie.state.point,We.pointLightShadows.value=ie.state.pointShadow,We.hemisphereLights.value=ie.state.hemi,We.directionalShadowMap.value=ie.state.directionalShadowMap,We.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,We.spotShadowMap.value=ie.state.spotShadowMap,We.spotLightMatrix.value=ie.state.spotLightMatrix,We.spotLightMap.value=ie.state.spotLightMap,We.pointShadowMap.value=ie.state.pointShadowMap,We.pointShadowMatrix.value=ie.state.pointShadowMatrix),se.currentProgram=Ye,se.uniformsList=null,Ye}function vt(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Ps.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function pn(C,Z){const re=de.get(C);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function jr(C,Z,re,se,ie){Z.isScene!==!0&&(Z=Ae),T.resetTextureUnits();const De=Z.fog,Be=se.isMeshStandardMaterial?Z.environment:null,ze=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:St,ye=(se.isMeshStandardMaterial?D:S).get(se.envMap||Be),je=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ye=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),We=!!re.morphAttributes.position,ot=!!re.morphAttributes.normal,At=!!re.morphAttributes.color;let ft=Kn;se.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ft=x.toneMapping);const kt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,st=kt!==void 0?kt.length:0,Ke=de.get(se),In=p.state.lights;if(F===!0&&(k===!0||C!==j)){const wt=C===j&&se.id===O;we.setState(se,C,wt)}let lt=!1;se.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==In.state.version||Ke.outputColorSpace!==ze||ie.isBatchedMesh&&Ke.batching===!1||!ie.isBatchedMesh&&Ke.batching===!0||ie.isInstancedMesh&&Ke.instancing===!1||!ie.isInstancedMesh&&Ke.instancing===!0||ie.isSkinnedMesh&&Ke.skinning===!1||!ie.isSkinnedMesh&&Ke.skinning===!0||ie.isInstancedMesh&&Ke.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ke.instancingColor===!1&&ie.instanceColor!==null||Ke.envMap!==ye||se.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==Ye||Ke.morphTargets!==We||Ke.morphNormals!==ot||Ke.morphColors!==At||Ke.toneMapping!==ft||Te.isWebGL2===!0&&Ke.morphTargetsCount!==st)&&(lt=!0):(lt=!0,Ke.__version=se.version);let tn=Ke.currentProgram;lt===!0&&(tn=Bt(se,Z,ie));let pr=!1,nn=!1,Qn=!1;const ht=tn.getUniforms(),rn=Ke.uniforms;if(pe.useProgram(tn.program)&&(pr=!0,nn=!0,Qn=!0),se.id!==O&&(O=se.id,nn=!0),pr||j!==C){ht.setValue(N,"projectionMatrix",C.projectionMatrix),ht.setValue(N,"viewMatrix",C.matrixWorldInverse);const wt=ht.map.cameraPosition;wt!==void 0&&wt.setValue(N,oe.setFromMatrixPosition(C.matrixWorld)),Te.logarithmicDepthBuffer&&ht.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&ht.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),j!==C&&(j=C,nn=!0,Qn=!0)}if(ie.isSkinnedMesh){ht.setOptional(N,ie,"bindMatrix"),ht.setOptional(N,ie,"bindMatrixInverse");const wt=ie.skeleton;wt&&(Te.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),ht.setValue(N,"boneTexture",wt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(ht.setOptional(N,ie,"batchingTexture"),ht.setValue(N,"batchingTexture",ie._matricesTexture,T));const $n=re.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0&&Te.isWebGL2===!0)&&Ie.update(ie,re,tn),(nn||Ke.receiveShadow!==ie.receiveShadow)&&(Ke.receiveShadow=ie.receiveShadow,ht.setValue(N,"receiveShadow",ie.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(rn.envMap.value=ye,rn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),nn&&(ht.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&dr(rn,Qn),De&&se.fog===!0&&ge.refreshFogUniforms(rn,De),ge.refreshMaterialUniforms(rn,se,Q,B,$),Ps.upload(N,vt(Ke),rn,T)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ps.upload(N,vt(Ke),rn,T),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&ht.setValue(N,"center",ie.center),ht.setValue(N,"modelViewMatrix",ie.modelViewMatrix),ht.setValue(N,"normalMatrix",ie.normalMatrix),ht.setValue(N,"modelMatrix",ie.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const wt=se.uniformsGroups;for(let Gt=0,Qs=wt.length;Gt<Qs;Gt++)if(Te.isWebGL2){const ei=wt[Gt];I.update(ei,tn),I.bind(ei,tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tn}function dr(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Js(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,Z,re){de.get(C.texture).__webglTexture=Z,de.get(C.depthTexture).__webglTexture=re;const se=de.get(C);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Z){const re=de.get(C);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,re=0){E=C,b=Z,A=re;let se=!0,ie=null,De=!1,Be=!1;if(C){const ye=de.get(C);ye.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(N.FRAMEBUFFER,null),se=!1):ye.__webglFramebuffer===void 0?T.setupRenderTarget(C):ye.__hasExternalTextures&&T.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Be=!0);const Ye=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[Z])?ie=Ye[Z][re]:ie=Ye[Z],De=!0):Te.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?ie=de.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?ie=Ye[re]:ie=Ye,v.copy(C.viewport),R.copy(C.scissor),U=C.scissorTest}else v.copy(z).multiplyScalar(Q).floor(),R.copy(P).multiplyScalar(Q).floor(),U=G;if(pe.bindFramebuffer(N.FRAMEBUFFER,ie)&&Te.drawBuffers&&se&&pe.drawBuffers(C,ie),pe.viewport(v),pe.scissor(R),pe.setScissorTest(U),De){const ye=de.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye.__webglTexture,re)}else if(Be){const ye=de.get(C.texture),je=Z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,re||0,je)}O=-1},this.readRenderTargetPixels=function(C,Z,re,se,ie,De,Be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(ze=ze[Be]),ze){pe.bindFramebuffer(N.FRAMEBUFFER,ze);try{const ye=C.texture,je=ye.format,Ye=ye.type;if(je!==Jt&&le.convert(je)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ye===Or&&(Me.has("EXT_color_buffer_half_float")||Te.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ye!==Zn&&le.convert(Ye)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===gn&&(Te.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-se&&re>=0&&re<=C.height-ie&&N.readPixels(Z,re,se,ie,le.convert(je),le.convert(Ye),De)}finally{const ye=E!==null?de.get(E).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(C,Z,re=0){const se=Math.pow(2,-re),ie=Math.floor(Z.image.width*se),De=Math.floor(Z.image.height*se);T.setTexture2D(Z,0),N.copyTexSubImage2D(N.TEXTURE_2D,re,0,0,C.x,C.y,ie,De),pe.unbindTexture()},this.copyTextureToTexture=function(C,Z,re,se=0){const ie=Z.image.width,De=Z.image.height,Be=le.convert(re.format),ze=le.convert(re.type);T.setTexture2D(re,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,re.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,re.unpackAlignment),Z.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,C.x,C.y,ie,De,Be,ze,Z.image.data):Z.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,C.x,C.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Be,Z.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,se,C.x,C.y,Be,ze,Z.image),se===0&&re.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,re,se,ie=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=C.max.x-C.min.x+1,Be=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,ye=le.convert(se.format),je=le.convert(se.type);let Ye;if(se.isData3DTexture)T.setTexture3D(se,0),Ye=N.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)T.setTexture2DArray(se,0),Ye=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,se.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,se.unpackAlignment);const We=N.getParameter(N.UNPACK_ROW_LENGTH),ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),At=N.getParameter(N.UNPACK_SKIP_PIXELS),ft=N.getParameter(N.UNPACK_SKIP_ROWS),kt=N.getParameter(N.UNPACK_SKIP_IMAGES),st=re.isCompressedTexture?re.mipmaps[ie]:re.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,C.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,C.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C.min.z),re.isDataTexture||re.isData3DTexture?N.texSubImage3D(Ye,ie,Z.x,Z.y,Z.z,De,Be,ze,ye,je,st.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ye,ie,Z.x,Z.y,Z.z,De,Be,ze,ye,st.data)):N.texSubImage3D(Ye,ie,Z.x,Z.y,Z.z,De,Be,ze,ye,je,st),N.pixelStorei(N.UNPACK_ROW_LENGTH,We),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,At),N.pixelStorei(N.UNPACK_SKIP_ROWS,ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt),ie===0&&se.generateMipmaps&&N.generateMipmap(Ye),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){b=0,A=0,E=null,pe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_o?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===js?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?di:Eu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===di?dt:St}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class B_ extends Ku{}B_.prototype.isWebGL1Renderer=!0;class k_ extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class G_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new X;class So{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new So(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xc=new X,yc=new rt,Mc=new rt,z_=new X,Sc=new Qe,ys=new X,Ba=new fn,Ec=new Qe,ka=new zr;class H_ extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tl,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ys),this.boundingBox.expandByPoint(ys)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ys),this.boundingSphere.expandByPoint(ys)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(n),e.ray.intersectsSphere(Ba)!==!1&&(Ec.copy(n).invert(),ka.copy(e.ray).applyMatrix4(Ec),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;yc.fromBufferAttribute(n.attributes.skinIndex,e),Mc.fromBufferAttribute(n.attributes.skinWeight,e),xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Mc.getComponent(r);if(a!==0){const o=yc.getComponent(r);Sc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(z_.copy(xc).applyMatrix4(Sc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class V_ extends mt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Mt,u=Mt,h,f){super(null,a,o,l,c,u,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new Qe,W_=new Qe;class Eo{constructor(e=[],t=[]){this.uuid=hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:W_;Tc.multiplyMatrices(o,t[r]),Tc.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Eo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new V_(t,e,e,Jt,gn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Zu),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class zs extends Nt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hi=new Qe,bc=new Qe,Ms=[],Ac=new Mn,X_=new Qe,wr=new bt,Rr=new fn;class j_ extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,X_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hi),Ac.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Ac)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hi),Rr.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(i),e.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Hi),bc.multiplyMatrices(i,Hi),wr.matrixWorld=bc,wr.raycast(e,Ms);for(let a=0,o=Ms.length;a<o;a++){const l=Ms[a];l.instanceId=r,l.object=this,t.push(l)}Ms.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class To extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new X,Rc=new X,Cc=new Qe,Ga=new zr,Ss=new fn;class Gr extends ut{constructor(e=new Ot,t=new To){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)wc.fromBufferAttribute(t,n-1),Rc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=wc.distanceTo(Rc);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(n),Ss.radius+=r,e.ray.intersectsSphere(Ss)===!1)return;Cc.copy(n).invert(),Ga.copy(e.ray).applyMatrix4(Cc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new X,u=new X,h=new X,f=new X,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let x=m,y=M-1;x<y;x+=d){const b=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(p,b),u.fromBufferAttribute(p,A),Ga.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let x=m,y=M-1;x<y;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Ga.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Lc=new X,Pc=new X;class Y_ extends Gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Lc.fromBufferAttribute(t,n),Pc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Lc.distanceTo(Pc);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q_ extends Gr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ju extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uc=new Qe,oo=new zr,Es=new fn,Ts=new X;class K_ extends ut{constructor(e=new Ot,t=new Ju){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(n),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;Uc.copy(n).invert(),oo.copy(e.ray).applyMatrix4(Uc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Ts.fromBufferAttribute(h,p),Dc(Ts,p,l,n,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Ts.fromBufferAttribute(h,g),Dc(Ts,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dc(s,e,t,i,n,r,a){const o=oo.distanceSqToPoint(s);if(o<t){const l=new X;oo.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class bo extends Ot{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new X,f=new X,d=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const M=[],x=m/i;let y=0;m===0&&a===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const A=b/t;h.x=-e*Math.cos(n+A*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(n+A*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(A+y,1-x),M.push(c++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const x=u[m][M+1],y=u[m][M],b=u[m+1][M],A=u[m+1][M+1];(m!==0||a>0)&&d.push(x,y,A),(m!==i-1||l<Math.PI)&&d.push(y,b,A)}this.setIndex(d),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ao extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Ao{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function bs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Z_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function J_(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Ic(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function Qu(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}class Vr{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Q_ extends Vr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rl:r=e,o=2*t-i;break;case Cl:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rl:a=e,l=2*i-t;break;case Cl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(n-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*_+.5*g,y=d*p-d*_;for(let b=0;b!==o;++b)r[b]=m*a[u+b]+M*a[c+b]+x*a[l+b]+y*a[h+b];return r}}class $_ extends Vr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class ev extends Vr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ev(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Q_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case tr:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Z_(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===pa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{const h=o*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=tr;class cr extends Sn{}cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Br;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class $u extends Sn{}$u.prototype.ValueTypeName="color";class rr extends Sn{}rr.prototype.ValueTypeName="number";class tv extends Vr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let u=c+o;c!==u;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class _i extends Sn{InterpolantFactoryMethodLinear(e){return new tv(this.times,this.values,this.getValueSize(),e)}}_i.prototype.ValueTypeName="quaternion";_i.prototype.DefaultInterpolation=tr;_i.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends Sn{}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Br;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Sn{}sr.prototype.ValueTypeName="vector";class nv{constructor(e,t=-1,i,n=lf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(rv(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(Sn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=J_(l);l=Ic(l,1,u),c=Ic(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new rr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=n[h];f||(n[h]=f=[]),f.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];Qu(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let M=0;M!==f[g].morphTargets.length;++M){const x=f[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}n.push(new rr(".morphTargetInfluence["+_+"]",p,m))}l=d.length*a}else{const d=".bones["+t[h].name+"]";i(sr,d+".position",f,"pos",n),i(_i,d+".quaternion",f,"rot",n),i(sr,d+".scale",f,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function iv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return $u;case"quaternion":return _i;case"bool":case"boolean":return cr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function rv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iv(s.type);if(s.times===void 0){const t=[],i=[];Qu(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Yn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class sv{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const av=new sv;class hr{constructor(e){this.manager=e!==void 0?e:av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class ov extends Error{constructor(e,t){super(e),this.response=t}}class eh extends hr{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:i,onError:n});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){M();function M(){h.read().then(({done:x,value:y})=>{if(x)m.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,E=u.length;A<E;A++){const O=u[A];O.onProgress&&O.onProgress(b)}m.enqueue(y),M()}})}}});return new Response(p)}else throw new ov(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Yn.add(e,c);const u=Rn[e];delete Rn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lv extends hr{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Yn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=kr("img");function l(){u(),Yn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),n&&n(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class cv extends hr{constructor(e){super(e)}load(e,t,i,n){const r=new mt,a=new lv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Ks extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const za=new Qe,Nc=new X,Fc=new X;class wo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uv extends wo{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=nr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hv extends Ks{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oc=new Qe,Cr=new X,Ha=new X;class fv extends wo{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cr),Ha.copy(i.position),Ha.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ha),i.updateMatrixWorld(),n.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Oc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc)}}class Ro extends Ks{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new fv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dv extends wo{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Co extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new dv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pv extends Ks{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ir{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mv extends Ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class gv extends hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Yn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Yn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Yn.add(e,l),r.manager.itemStart(e)}}const Lo="\\[\\]\\.:\\/",_v=new RegExp("["+Lo+"]","g"),Po="[^"+Lo+"]",vv="[^"+Lo.replace("\\.","")+"]",xv=/((?:WC+[\/:])*)/.source.replace("WC",Po),yv=/(WCOD+)?/.source.replace("WCOD",vv),Mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Po),Sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Po),Ev=new RegExp("^"+xv+yv+Mv+Sv+"$"),Tv=["material","materials","bones","map"];class bv{constructor(e,t,i){const n=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class it{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_v,"")}static parseTrackName(e){const t=Ev.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);Tv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=bv;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class th extends bt{constructor(e,t,i){const n=new bo(t,4,2),r=new Un({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const kc=new X,As=new X,Gc=new X;class nh extends ut{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Ot;n.setAttribute("position",new Ft([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new To({fog:!1,toneMapped:!1});this.lightPlane=new Gr(n,r),this.add(this.lightPlane),n=new Ot,n.setAttribute("position",new Ft([0,0,0,0,0,1],3)),this.targetLine=new Gr(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),kc.setFromMatrixPosition(this.light.matrixWorld),As.setFromMatrixPosition(this.light.target.matrixWorld),Gc.subVectors(As,kc),this.lightPlane.lookAt(As),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(As),this.targetLine.scale.z=Gc.length()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);function zc(s,e){if(e===cf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===no||e===Su){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===no)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Av extends hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Pv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Wv(t)})}load(e,t,i,n){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ir.extractUrlBase(e);a=Ir.resolveURL(c,this.path)}else a=Ir.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new eh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ih){try{a[$e.KHR_BINARY_GLTF]=new Xv(e)}catch(h){n&&n(h);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new r0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:a[h]=new Cv;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[h]=new jv(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[h]=new Yv;break;case $e.KHR_MESH_QUANTIZATION:a[h]=new qv;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function wv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Rv{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Xe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],St);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Co(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ro(u),c.distance=h;break;case"spot":c=new hv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Xn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class Cv{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Un}extendParams(e,t,i){const n=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],St),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(n)}}class Lv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Pv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(r)}}class Uv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Dv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],St)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Iv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Nv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(o[0],o[1],o[2],St),Promise.all(r)}}class Fv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ov{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(o[0],o[1],o[2],St),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(r)}}class Bv{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class kv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Gv{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class zv{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hv{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vv{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,u=n.count,h=n.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,n.mode,n.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,n.mode,n.filter),d})})}else return null}}class Wv{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==qt.TRIANGLES&&c.mode!==qt.TRIANGLE_STRIP&&c.mode!==qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Qe,p=new X,m=new yn,M=new X(1,1,1),x=new j_(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(p,m,M));for(const y in l)if(y==="_COLOR_0"){const b=l[y];x.instanceColor=new zs(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);ut.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const ih="glTF",Lr=12,Hc={JSON:1313821514,BIN:5130562};class Xv{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Lr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ih)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Lr,r=new DataView(e,Lr);let a=0;for(;a<n;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Hc.JSON){const c=new Uint8Array(e,Lr+a,o);this.content=i.decode(c)}else if(l===Hc.BIN){const c=Lr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=lo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=lo[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Zi[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){n.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(d)},o,c,St,f)})})}}class Yv{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qv{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class rh extends Vr{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=n-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,M=1-p,x=m-f+h;for(let y=0;y!==o;y++){const b=a[_+y+o],A=a[_+y+l]*u,E=a[g+y+o],O=a[g+y]*u;r[y]=M*b+x*A+p*E+m*O}return r}}const Kv=new yn;class Zv extends rh{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return Kv.fromArray(r).normalize().toArray(r),r}}const qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vc={9728:Mt,9729:yt,9984:to,9985:Ls,9986:Wi,9987:Ln},Wc={33071:Zt,33648:Ns,10497:$i},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Jv={CUBICSPLINE:void 0,LINEAR:tr,STEP:Br},Wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ao({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),s.DefaultMaterial}function si(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Xn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $v(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(n=!0),h.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(n){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(s.morphAttributes.position=u),n&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function e0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function t0(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xa(t.attributes):e=s.indices+":"+Xa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+Xa(s.targets[i]);return e}function Xa(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function co(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function n0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const i0=new Qe;class r0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new cv(this.options.manager):this.textureLoader=new gv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return si(r,o,n),Xn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,a){i.load(Ir.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=Va[n.type],o=Zi[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Nt(c,a,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Va[n.type],c=Zi[n.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,p;if(d&&d!==h){const m=Math.floor(f/d),M="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let x=t.cache.get(M);x||(_=new c(o,m*d,n.count*d/u),x=new G_(_,d/u),t.cache.add(M,x)),p=new So(x,l,f%d/u,g)}else o===null?_=new c(n.count*l):_=new c(o,f,n.count*l),p=new Nt(_,l,g);if(n.sparse!==void 0){const m=Va.SCALAR,M=Zi[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,b=new M(a[1],x,n.sparse.count*m),A=new c(a[2],y,n.sparse.count*l);o!==null&&(p=new Nt(p.array.slice(),p.itemSize,p.normalized));for(let E=0,O=b.length;E<O;E++){const j=b[E];if(p.setX(j,A[E*l]),l>=2&&p.setY(j,A[E*l+1]),l>=3&&p.setZ(j,A[E*l+2]),l>=4&&p.setW(j,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Vc[f.magFilter]||yt,u.minFilter=Vc[f.minFilter]||Ln,u.wrapS=Wc[f.wrapS]||$i,u.wrapT=Wc[f.wrapT]||$i,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new mt(_);p.needsUpdate=!0,f(p)}),t.load(Ir.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||n0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ju,vn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new To,vn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ao}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=n[$e.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],St),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,dt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Kt);const u=r.alphaMode||Wa.OPAQUE;if(u===Wa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Wa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Un&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Un&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Un){const h=r.emissiveFactor;o.emissive=new Xe().setRGB(h[0],h[1],h[2],St)}return r.emissiveTexture!==void 0&&a!==Un&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Xn(h,r),t.associations.set(h,{materials:e}),r.extensions&&si(n,h,r),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Xc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=t0(c),h=n[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Xc(new Ot,c,t),n[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Qv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=a[d];let m;const M=c[d];if(p.mode===qt.TRIANGLES||p.mode===qt.TRIANGLE_STRIP||p.mode===qt.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new H_(_,M):new bt(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===qt.TRIANGLE_STRIP?m.geometry=zc(m.geometry,Su):p.mode===qt.TRIANGLE_FAN&&(m.geometry=zc(m.geometry,no));else if(p.mode===qt.LINES)m=new Y_(_,M);else if(p.mode===qt.LINE_STRIP)m=new Gr(_,M);else if(p.mode===qt.LINE_LOOP)m=new q_(_,M);else if(p.mode===qt.POINTS)m=new K_(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&e0(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Xn(m,r),p.extensions&&si(n,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&si(n,h[0],r),h[0];const f=new ui;r.extensions&&si(n,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Dt(wu.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new yo(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Xn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),a=n,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new Qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Eo(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=n.channels.length;h<f;h++){const d=n.channels[h],g=n.samplers[d.sampler],_=d.target,p=_.node,m=n.parameters!==void 0?n.parameters[g.input]:g.input,M=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let M=0,x=f.length;M<x;M++){const y=f[M],b=d[M],A=g[M],E=_[M],O=p[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const j=i._createAnimationTracks(y,b,A,E,O);if(j)for(let v=0;v<j.length;v++)m.push(j[v])}return new nv(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,i0)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Zu:c.length>1?u=new ui:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Xn(u,r),r.extensions&&si(i,u,r),r.matrix!==void 0){const h=new Qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new ui;i.name&&(r.name=n.createUniqueName(i.name)),Xn(r,i),i.extensions&&si(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of n.associations)(f instanceof vn||f instanceof mt)&&h.set(f,d);return u.traverse(f=>{const d=n.associations.get(f);d!=null&&h.set(f,d)}),h};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const a=[],o=e.name?e.name:e.uuid,l=[];Vn[r.path]===Vn.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Vn[r.path]){case Vn.weights:c=rr;break;case Vn.rotation:c=_i;break;case Vn.position:case Vn.scale:c=sr;break;default:switch(i.itemSize){case 1:c=rr;break;case 2:case 3:default:c=sr;break}break}const u=n.interpolation!==void 0?Jv[n.interpolation]:tr,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Vn[r.path],t.array,h,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=co(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof _i?Zv:rh;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function s0(s,e,t){const i=e.attributes,n=new Mn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),o.normalized){const u=co(Zi[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new X,l=new X;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=co(Zi[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;const a=new fn;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function Xc(s,e,t){const i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=lo[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return tt.workingColorSpace!==St&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Xn(s,e),s0(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?$v(s,e.targets,t):s})}const jc={type:"change"},ja={type:"start"},Yc={type:"end"},ws=new zr,qc=new Wn,a0=Math.cos(70*wu.DEG2RAD);class o0 extends yi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",ve),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(jc),i.update(),r=n.NONE},this.update=function(){const I=new X,me=new yn().setFromUnitVectors(e.up,new X(0,1,0)),Se=me.clone().invert(),_e=new X,L=new yn,xe=new X,ce=2*Math.PI;return function(Ue=null){const ke=i.object.position;I.copy(ke).sub(i.target),I.applyQuaternion(me),o.setFromVector3(I),i.autoRotate&&r===n.NONE&&U(v(Ue)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Le=i.minAzimuthAngle,Ge=i.maxAzimuthAngle;isFinite(Le)&&isFinite(Ge)&&(Le<-Math.PI?Le+=ce:Le>Math.PI&&(Le-=ce),Ge<-Math.PI?Ge+=ce:Ge>Math.PI&&(Ge-=ce),Le<=Ge?o.theta=Math.max(Le,Math.min(Ge,o.theta)):o.theta=o.theta>(Le+Ge)/2?Math.max(Le,o.theta):Math.min(Ge,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?o.radius=z(o.radius):o.radius=z(o.radius*c),I.setFromSpherical(o),I.applyQuaternion(Se),ke.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let et=!1;if(i.zoomToCursor&&A){let Ve=null;if(i.object.isPerspectiveCamera){const qe=I.length();Ve=z(qe*c);const at=qe-Ve;i.object.position.addScaledVector(y,at),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const qe=new X(b.x,b.y,0);qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),et=!0;const at=new X(b.x,b.y,0);at.unproject(i.object),i.object.position.sub(at).add(qe),i.object.updateMatrixWorld(),Ve=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ve!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ve).add(i.object.position):(ws.origin.copy(i.object.position),ws.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ws.direction))<a0?e.lookAt(i.target):(qc.setFromNormalAndCoplanarPoint(i.object.up,i.target),ws.intersectPlane(qc,i.target))))}else i.object.isOrthographicCamera&&(et=c!==1,et&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix()));return c=1,A=!1,et||_e.distanceToSquared(i.object.position)>a||8*(1-L.dot(i.object.quaternion))>a||xe.distanceToSquared(i.target)>0?(i.dispatchEvent(jc),_e.copy(i.object.position),L.copy(i.object.quaternion),xe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Fe),i.domElement.removeEventListener("pointerdown",T),i.domElement.removeEventListener("pointercancel",D),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",D),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ve),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=n.NONE;const a=1e-6,o=new Bc,l=new Bc;let c=1;const u=new X,h=new He,f=new He,d=new He,g=new He,_=new He,p=new He,m=new He,M=new He,x=new He,y=new X,b=new He;let A=!1;const E=[],O={};let j=!1;function v(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function R(I){const me=Math.abs(I*.01);return Math.pow(.95,i.zoomSpeed*me)}function U(I){l.theta-=I}function V(I){l.phi-=I}const w=function(){const I=new X;return function(Se,_e){I.setFromMatrixColumn(_e,0),I.multiplyScalar(-Se),u.add(I)}}(),H=function(){const I=new X;return function(Se,_e){i.screenSpacePanning===!0?I.setFromMatrixColumn(_e,1):(I.setFromMatrixColumn(_e,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(Se),u.add(I)}}(),B=function(){const I=new X;return function(Se,_e){const L=i.domElement;if(i.object.isPerspectiveCamera){const xe=i.object.position;I.copy(xe).sub(i.target);let ce=I.length();ce*=Math.tan(i.object.fov/2*Math.PI/180),w(2*Se*ce/L.clientHeight,i.object.matrix),H(2*_e*ce/L.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(w(Se*(i.object.right-i.object.left)/i.object.zoom/L.clientWidth,i.object.matrix),H(_e*(i.object.top-i.object.bottom)/i.object.zoom/L.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(I,me){if(!i.zoomToCursor)return;A=!0;const Se=i.domElement.getBoundingClientRect(),_e=I-Se.left,L=me-Se.top,xe=Se.width,ce=Se.height;b.x=_e/xe*2-1,b.y=-(L/ce)*2+1,y.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function z(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function P(I){h.set(I.clientX,I.clientY)}function G(I){W(I.clientX,I.clientX),m.set(I.clientX,I.clientY)}function Y(I){g.set(I.clientX,I.clientY)}function F(I){f.set(I.clientX,I.clientY),d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const me=i.domElement;U(2*Math.PI*d.x/me.clientHeight),V(2*Math.PI*d.y/me.clientHeight),h.copy(f),i.update()}function k(I){M.set(I.clientX,I.clientY),x.subVectors(M,m),x.y>0?Q(R(x.y)):x.y<0&&K(R(x.y)),m.copy(M),i.update()}function $(I){_.set(I.clientX,I.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),B(p.x,p.y),g.copy(_),i.update()}function J(I){W(I.clientX,I.clientY),I.deltaY<0?K(R(I.deltaY)):I.deltaY>0&&Q(R(I.deltaY)),i.update()}function te(I){let me=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),me=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),me=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),me=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),me=!0;break}me&&(I.preventDefault(),i.update())}function oe(I){if(E.length===1)h.set(I.pageX,I.pageY);else{const me=le(I),Se=.5*(I.pageX+me.x),_e=.5*(I.pageY+me.y);h.set(Se,_e)}}function Ae(I){if(E.length===1)g.set(I.pageX,I.pageY);else{const me=le(I),Se=.5*(I.pageX+me.x),_e=.5*(I.pageY+me.y);g.set(Se,_e)}}function he(I){const me=le(I),Se=I.pageX-me.x,_e=I.pageY-me.y,L=Math.sqrt(Se*Se+_e*_e);m.set(0,L)}function N(I){i.enableZoom&&he(I),i.enablePan&&Ae(I)}function Oe(I){i.enableZoom&&he(I),i.enableRotate&&oe(I)}function Me(I){if(E.length==1)f.set(I.pageX,I.pageY);else{const Se=le(I),_e=.5*(I.pageX+Se.x),L=.5*(I.pageY+Se.y);f.set(_e,L)}d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const me=i.domElement;U(2*Math.PI*d.x/me.clientHeight),V(2*Math.PI*d.y/me.clientHeight),h.copy(f)}function Te(I){if(E.length===1)_.set(I.pageX,I.pageY);else{const me=le(I),Se=.5*(I.pageX+me.x),_e=.5*(I.pageY+me.y);_.set(Se,_e)}p.subVectors(_,g).multiplyScalar(i.panSpeed),B(p.x,p.y),g.copy(_)}function pe(I){const me=le(I),Se=I.pageX-me.x,_e=I.pageY-me.y,L=Math.sqrt(Se*Se+_e*_e);M.set(0,L),x.set(0,Math.pow(M.y/m.y,i.zoomSpeed)),Q(x.y),m.copy(M);const xe=(I.pageX+me.x)*.5,ce=(I.pageY+me.y)*.5;W(xe,ce)}function Ne(I){i.enableZoom&&pe(I),i.enablePan&&Te(I)}function de(I){i.enableZoom&&pe(I),i.enableRotate&&Me(I)}function T(I){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",D)),Ie(I),I.pointerType==="touch"?we(I):ne(I))}function S(I){i.enabled!==!1&&(I.pointerType==="touch"?ae(I):q(I))}function D(I){switch(Re(I),E.length){case 0:i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",D),i.dispatchEvent(Yc),r=n.NONE;break;case 1:const me=E[0],Se=O[me];we({pointerId:me,pageX:Se.x,pageY:Se.y});break}}function ne(I){let me;switch(I.button){case 0:me=i.mouseButtons.LEFT;break;case 1:me=i.mouseButtons.MIDDLE;break;case 2:me=i.mouseButtons.RIGHT;break;default:me=-1}switch(me){case Ti.DOLLY:if(i.enableZoom===!1)return;G(I),r=n.DOLLY;break;case Ti.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;Y(I),r=n.PAN}else{if(i.enableRotate===!1)return;P(I),r=n.ROTATE}break;case Ti.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;P(I),r=n.ROTATE}else{if(i.enablePan===!1)return;Y(I),r=n.PAN}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(ja)}function q(I){switch(r){case n.ROTATE:if(i.enableRotate===!1)return;F(I);break;case n.DOLLY:if(i.enableZoom===!1)return;k(I);break;case n.PAN:if(i.enablePan===!1)return;$(I);break}}function ee(I){i.enabled===!1||i.enableZoom===!1||r!==n.NONE||(I.preventDefault(),i.dispatchEvent(ja),J(ue(I)),i.dispatchEvent(Yc))}function ue(I){const me=I.deltaMode,Se={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(me){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return I.ctrlKey&&!j&&(Se.deltaY*=10),Se}function ge(I){I.key==="Control"&&(j=!0,i.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(I){I.key==="Control"&&(j=!1,i.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function ve(I){i.enabled===!1||i.enablePan===!1||te(I)}function we(I){switch(Ee(I),E.length){case 1:switch(i.touches.ONE){case bi.ROTATE:if(i.enableRotate===!1)return;oe(I),r=n.TOUCH_ROTATE;break;case bi.PAN:if(i.enablePan===!1)return;Ae(I),r=n.TOUCH_PAN;break;default:r=n.NONE}break;case 2:switch(i.touches.TWO){case bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;N(I),r=n.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Oe(I),r=n.TOUCH_DOLLY_ROTATE;break;default:r=n.NONE}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(ja)}function ae(I){switch(Ee(I),r){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(I),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Te(I),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ne(I),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;de(I),i.update();break;default:r=n.NONE}}function Fe(I){i.enabled!==!1&&I.preventDefault()}function Ie(I){E.push(I.pointerId)}function Re(I){delete O[I.pointerId];for(let me=0;me<E.length;me++)if(E[me]==I.pointerId){E.splice(me,1);return}}function Ee(I){let me=O[I.pointerId];me===void 0&&(me=new He,O[I.pointerId]=me),me.set(I.pageX,I.pageY)}function le(I){const me=I.pointerId===E[0]?E[1]:E[0];return O[me]}i.domElement.addEventListener("contextmenu",Fe),i.domElement.addEventListener("pointerdown",T),i.domElement.addEventListener("pointercancel",D),i.domElement.addEventListener("wheel",ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}function l0(){var s=Object.create(null);function e(n,r){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var r=n.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function c0(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var sh=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return sh=function(){return s},s},u0=0,h0=0,Ya=!1,Nr=Object.create(null),Fr=Object.create(null),uo=Object.create(null);function fr(s){if((!s||typeof s.init!="function")&&!Ya)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId;if(!sh())return c0(s);n==null&&(n="#default");var r="workerModule"+ ++u0,a=s.name||r,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Ya=!0,c=fr({workerId:n,name:"<"+a+"> function dependency: "+c.name,init:`function(){return (
`+Us(c)+`
)}`}),Ya=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!o){o=Kc(n,"registerModule",l.workerModuleData);var h=function(){o=null,Fr[n].delete(h)};(Fr[n]||(Fr[n]=new Set)).add(h)}return o.then(function(f){var d=f.isCallable;if(d)return Kc(n,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:a,dependencies:e,init:Us(t),getTransferables:i&&Us(i)},l}function f0(s){Fr[s]&&Fr[s].forEach(function(e){e()}),Nr[s]&&(Nr[s].terminate(),delete Nr[s])}function Us(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function d0(s){var e=Nr[s];if(!e){var t=Us(l0);e=Nr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,a=uo[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete uo[r],a(n)}}return e}function Kc(s,e,t){return new Promise(function(i,n){var r=++h0;uo[r]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},d0(s).postMessage({messageId:r,action:e,data:t})})}function ah(){var s=function(e){function t(W,z,P,G,Y,F,k,$){var J=1-k;$.x=J*J*W+2*J*k*P+k*k*Y,$.y=J*J*z+2*J*k*G+k*k*F}function i(W,z,P,G,Y,F,k,$,J,te){var oe=1-J;te.x=oe*oe*oe*W+3*oe*oe*J*P+3*oe*J*J*Y+J*J*J*k,te.y=oe*oe*oe*z+3*oe*oe*J*G+3*oe*J*J*F+J*J*J*$}function n(W,z){for(var P=/([MLQCZ])([^MLQCZ]*)/g,G,Y,F,k,$;G=P.exec(W);){var J=G[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(te){return parseFloat(te)});switch(G[1]){case"M":k=Y=J[0],$=F=J[1];break;case"L":(J[0]!==k||J[1]!==$)&&z("L",k,$,k=J[0],$=J[1]);break;case"Q":{z("Q",k,$,k=J[2],$=J[3],J[0],J[1]);break}case"C":{z("C",k,$,k=J[4],$=J[5],J[0],J[1],J[2],J[3]);break}case"Z":(k!==Y||$!==F)&&z("L",k,$,Y,F);break}}}function r(W,z,P){P===void 0&&(P=16);var G={x:0,y:0};n(W,function(Y,F,k,$,J,te,oe,Ae,he){switch(Y){case"L":z(F,k,$,J);break;case"Q":{for(var N=F,Oe=k,Me=1;Me<P;Me++)t(F,k,te,oe,$,J,Me/(P-1),G),z(N,Oe,G.x,G.y),N=G.x,Oe=G.y;break}case"C":{for(var Te=F,pe=k,Ne=1;Ne<P;Ne++)i(F,k,te,oe,Ae,he,$,J,Ne/(P-1),G),z(Te,pe,G.x,G.y),Te=G.x,pe=G.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(W,z){var P=W.getContext?W.getContext("webgl",c):W,G=l.get(P);if(!G){let Te=function(D){var ne=F[D];if(!ne&&(ne=F[D]=P.getExtension(D),!ne))throw new Error(D+" not supported");return ne},pe=function(D,ne){var q=P.createShader(ne);return P.shaderSource(q,D),P.compileShader(q),q},Ne=function(D,ne,q,ee){if(!k[D]){var ue={},ge={},fe=P.createProgram();P.attachShader(fe,pe(ne,P.VERTEX_SHADER)),P.attachShader(fe,pe(q,P.FRAGMENT_SHADER)),P.linkProgram(fe),k[D]={program:fe,transaction:function(we){P.useProgram(fe),we({setUniform:function(Fe,Ie){for(var Re=[],Ee=arguments.length-2;Ee-- >0;)Re[Ee]=arguments[Ee+2];var le=ge[Ie]||(ge[Ie]=P.getUniformLocation(fe,Ie));P["uniform"+Fe].apply(P,[le].concat(Re))},setAttribute:function(Fe,Ie,Re,Ee,le){var Pe=ue[Fe];Pe||(Pe=ue[Fe]={buf:P.createBuffer(),loc:P.getAttribLocation(fe,Fe),data:null}),P.bindBuffer(P.ARRAY_BUFFER,Pe.buf),P.vertexAttribPointer(Pe.loc,Ie,P.FLOAT,!1,0,0),P.enableVertexAttribArray(Pe.loc),Y?P.vertexAttribDivisor(Pe.loc,Ee):Te("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Pe.loc,Ee),le!==Pe.data&&(P.bufferData(P.ARRAY_BUFFER,le,Re),Pe.data=le)}})}}}k[D].transaction(ee)},de=function(D,ne){J++;try{P.activeTexture(P.TEXTURE0+J);var q=$[D];q||(q=$[D]=P.createTexture(),P.bindTexture(P.TEXTURE_2D,q),P.texParameteri(P.TEXTURE_2D,P.TEXTURE_MIN_FILTER,P.NEAREST),P.texParameteri(P.TEXTURE_2D,P.TEXTURE_MAG_FILTER,P.NEAREST)),P.bindTexture(P.TEXTURE_2D,q),ne(q,J)}finally{J--}},T=function(D,ne,q){var ee=P.createFramebuffer();te.push(ee),P.bindFramebuffer(P.FRAMEBUFFER,ee),P.activeTexture(P.TEXTURE0+ne),P.bindTexture(P.TEXTURE_2D,D),P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,D,0);try{q(ee)}finally{P.deleteFramebuffer(ee),P.bindFramebuffer(P.FRAMEBUFFER,te[--te.length-1]||null)}},S=function(){F={},k={},$={},J=-1,te.length=0};var oe=Te,Ae=pe,he=Ne,N=de,Oe=T,Me=S,Y=typeof WebGL2RenderingContext<"u"&&P instanceof WebGL2RenderingContext,F={},k={},$={},J=-1,te=[];P.canvas.addEventListener("webglcontextlost",function(D){S(),D.preventDefault()},!1),l.set(P,G={gl:P,isWebGL2:Y,getExtension:Te,withProgram:Ne,withTexture:de,withTextureFramebuffer:T,handleContextLoss:S})}z(G)}function h(W,z,P,G,Y,F,k,$){k===void 0&&(k=15),$===void 0&&($=null),u(W,function(J){var te=J.gl,oe=J.withProgram,Ae=J.withTexture;Ae("copy",function(he,N){te.texImage2D(te.TEXTURE_2D,0,te.RGBA,Y,F,0,te.RGBA,te.UNSIGNED_BYTE,z),oe("copy",a,o,function(Oe){var Me=Oe.setUniform,Te=Oe.setAttribute;Te("aUV",2,te.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Me("1i","image",N),te.bindFramebuffer(te.FRAMEBUFFER,$||null),te.disable(te.BLEND),te.colorMask(k&8,k&4,k&2,k&1),te.viewport(P,G,Y,F),te.scissor(P,G,Y,F),te.drawArrays(te.TRIANGLES,0,3)})})})}function f(W,z,P){var G=W.width,Y=W.height;u(W,function(F){var k=F.gl,$=new Uint8Array(G*Y*4);k.readPixels(0,0,G,Y,k.RGBA,k.UNSIGNED_BYTE,$),W.width=z,W.height=P,h(k,$,0,0,G,Y)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(W,z,P,G,Y,F){F===void 0&&(F=1);var k=new Uint8Array(W*z),$=G[2]-G[0],J=G[3]-G[1],te=[];r(P,function(Te,pe,Ne,de){te.push({x1:Te,y1:pe,x2:Ne,y2:de,minX:Math.min(Te,Ne),minY:Math.min(pe,de),maxX:Math.max(Te,Ne),maxY:Math.max(pe,de)})}),te.sort(function(Te,pe){return Te.maxX-pe.maxX});for(var oe=0;oe<W;oe++)for(var Ae=0;Ae<z;Ae++){var he=Oe(G[0]+$*(oe+.5)/W,G[1]+J*(Ae+.5)/z),N=Math.pow(1-Math.abs(he)/Y,F)/2;he<0&&(N=1-N),N=Math.max(0,Math.min(255,Math.round(N*255))),k[Ae*W+oe]=N}return k;function Oe(Te,pe){for(var Ne=1/0,de=1/0,T=te.length;T--;){var S=te[T];if(S.maxX+de<=Te)break;if(Te+de>S.minX&&pe-de<S.maxY&&pe+de>S.minY){var D=m(Te,pe,S.x1,S.y1,S.x2,S.y2);D<Ne&&(Ne=D,de=Math.sqrt(Ne))}}return Me(Te,pe)&&(de=-de),de}function Me(Te,pe){for(var Ne=0,de=te.length;de--;){var T=te[de];if(T.maxX<=Te)break;var S=T.y1>pe!=T.y2>pe&&Te<(T.x2-T.x1)*(pe-T.y1)/(T.y2-T.y1)+T.x1;S&&(Ne+=T.y1<T.y2?1:-1)}return Ne!==0}}function _(W,z,P,G,Y,F,k,$,J,te){F===void 0&&(F=1),$===void 0&&($=0),J===void 0&&(J=0),te===void 0&&(te=0),p(W,z,P,G,Y,F,k,null,$,J,te)}function p(W,z,P,G,Y,F,k,$,J,te,oe){F===void 0&&(F=1),J===void 0&&(J=0),te===void 0&&(te=0),oe===void 0&&(oe=0);for(var Ae=g(W,z,P,G,Y,F),he=new Uint8Array(Ae.length*4),N=0;N<Ae.length;N++)he[N*4+oe]=Ae[N];h(k,he,J,te,W,z,1<<3-oe,$)}function m(W,z,P,G,Y,F){var k=Y-P,$=F-G,J=k*k+$*$,te=J?Math.max(0,Math.min(1,((W-P)*k+(z-G)*$)/J)):0,oe=W-(P+te*k),Ae=z-(G+te*$);return oe*oe+Ae*Ae}var M=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",b="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",A=new Float32Array([0,0,2,0,0,2]),E=null,O=!1,j={},v=new WeakMap;function R(W){if(!O&&!H(W))throw new Error("WebGL generation not supported")}function U(W,z,P,G,Y,F,k){if(F===void 0&&(F=1),k===void 0&&(k=null),!k&&(k=E,!k)){var $=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!$)throw new Error("OffscreenCanvas or DOM canvas not supported");k=E=$.getContext("webgl",{depth:!1})}R(k);var J=new Uint8Array(W*z*4);u(k,function(he){var N=he.gl,Oe=he.withTexture,Me=he.withTextureFramebuffer;Oe("readable",function(Te,pe){N.texImage2D(N.TEXTURE_2D,0,N.RGBA,W,z,0,N.RGBA,N.UNSIGNED_BYTE,null),Me(Te,pe,function(Ne){w(W,z,P,G,Y,F,N,Ne,0,0,0),N.readPixels(0,0,W,z,N.RGBA,N.UNSIGNED_BYTE,J)})})});for(var te=new Uint8Array(W*z),oe=0,Ae=0;oe<J.length;oe+=4)te[Ae++]=J[oe];return te}function V(W,z,P,G,Y,F,k,$,J,te){F===void 0&&(F=1),$===void 0&&($=0),J===void 0&&(J=0),te===void 0&&(te=0),w(W,z,P,G,Y,F,k,null,$,J,te)}function w(W,z,P,G,Y,F,k,$,J,te,oe){F===void 0&&(F=1),J===void 0&&(J=0),te===void 0&&(te=0),oe===void 0&&(oe=0),R(k);var Ae=[];r(P,function(he,N,Oe,Me){Ae.push(he,N,Oe,Me)}),Ae=new Float32Array(Ae),u(k,function(he){var N=he.gl,Oe=he.isWebGL2,Me=he.getExtension,Te=he.withProgram,pe=he.withTexture,Ne=he.withTextureFramebuffer,de=he.handleContextLoss;if(pe("rawDistances",function(T,S){(W!==T._lastWidth||z!==T._lastHeight)&&N.texImage2D(N.TEXTURE_2D,0,N.RGBA,T._lastWidth=W,T._lastHeight=z,0,N.RGBA,N.UNSIGNED_BYTE,null),Te("main",x,y,function(D){var ne=D.setAttribute,q=D.setUniform,ee=!Oe&&Me("ANGLE_instanced_arrays"),ue=!Oe&&Me("EXT_blend_minmax");ne("aUV",2,N.STATIC_DRAW,0,A),ne("aLineSegment",4,N.DYNAMIC_DRAW,1,Ae),q.apply(void 0,["4f","uGlyphBounds"].concat(G)),q("1f","uMaxDistance",Y),q("1f","uExponent",F),Ne(T,S,function(ge){N.enable(N.BLEND),N.colorMask(!0,!0,!0,!0),N.viewport(0,0,W,z),N.scissor(0,0,W,z),N.blendFunc(N.ONE,N.ONE),N.blendEquationSeparate(N.FUNC_ADD,Oe?N.MAX:ue.MAX_EXT),N.clear(N.COLOR_BUFFER_BIT),Oe?N.drawArraysInstanced(N.TRIANGLES,0,3,Ae.length/4):ee.drawArraysInstancedANGLE(N.TRIANGLES,0,3,Ae.length/4)})}),Te("post",a,b,function(D){D.setAttribute("aUV",2,N.STATIC_DRAW,0,A),D.setUniform("1i","tex",S),N.bindFramebuffer(N.FRAMEBUFFER,$),N.disable(N.BLEND),N.colorMask(oe===0,oe===1,oe===2,oe===3),N.viewport(J,te,W,z),N.scissor(J,te,W,z),N.drawArrays(N.TRIANGLES,0,3)})}),N.isContextLost())throw de(),new Error("webgl context lost")})}function H(W){var z=!W||W===E?j:W.canvas||W,P=v.get(z);if(P===void 0){O=!0;var G=null;try{var Y=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,W);P=F&&Y.length===F.length&&F.every(function(k,$){return k===Y[$]}),P||(G="bad trial run results",console.info(Y,F))}catch(k){P=!1,G=k.message}G&&console.warn("WebGL SDF generation not supported:",G),O=!1,v.set(z,P)}return P}var B=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:V,generateIntoFramebuffer:w,isSupported:H});function Q(W,z,P,G,Y,F){Y===void 0&&(Y=Math.max(G[2]-G[0],G[3]-G[1])/2),F===void 0&&(F=1);try{return U.apply(B,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),g.apply(M,arguments)}}function K(W,z,P,G,Y,F,k,$,J,te){Y===void 0&&(Y=Math.max(G[2]-G[0],G[3]-G[1])/2),F===void 0&&(F=1),$===void 0&&($=0),J===void 0&&(J=0),te===void 0&&(te=0);try{return V.apply(B,arguments)}catch(oe){return console.info("WebGL SDF generation failed, falling back to JS",oe),_.apply(M,arguments)}}return e.forEachPathCommand=n,e.generate=Q,e.generateIntoCanvas=K,e.javascript=M,e.pathToLineSegments=r,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function p0(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(de,T){i[de]=1<<T+1,n[i[de]]=de}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var de=function(S){if(t.hasOwnProperty(S)){var D=0;t[S].split(",").forEach(function(ne){var q=ne.split("+"),ee=q[0],ue=q[1];ee=parseInt(ee,36),ue=ue?parseInt(ue,36):0,u.set(D+=ee,i[S]);for(var ge=0;ge<ue;ge++)u.set(++D,i[S])})}};for(var T in t)de(T)}}function f(de){return h(),u.get(de.codePointAt(0))||i.L}function d(de){return n[f(de)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(de,T){var S=36,D=0,ne=new Map,q=T&&new Map,ee;return de.split(",").forEach(function ue(ge){if(ge.indexOf("+")!==-1)for(var fe=+ge;fe--;)ue(ee);else{ee=ge;var ve=ge.split(">"),we=ve[0],ae=ve[1];we=String.fromCodePoint(D+=parseInt(we,S)),ae=String.fromCodePoint(D+=parseInt(ae,S)),ne.set(we,ae),T&&q.set(ae,we)}}),{map:ne,reverseMap:q}}var p,m,M;function x(){if(!p){var de=_(g.pairs,!0),T=de.map,S=de.reverseMap;p=T,m=S,M=_(g.canonical,!1).map}}function y(de){return x(),p.get(de)||null}function b(de){return x(),m.get(de)||null}function A(de){return x(),M.get(de)||null}var E=i.L,O=i.R,j=i.EN,v=i.ES,R=i.ET,U=i.AN,V=i.CS,w=i.B,H=i.S,B=i.ON,Q=i.BN,K=i.NSM,W=i.AL,z=i.LRO,P=i.RLO,G=i.LRE,Y=i.RLE,F=i.PDF,k=i.LRI,$=i.RLI,J=i.FSI,te=i.PDI;function oe(de,T){for(var S=125,D=new Uint32Array(de.length),ne=0;ne<de.length;ne++)D[ne]=f(de[ne]);var q=new Map;function ee(zt,an){var Ht=D[zt];D[zt]=an,q.set(Ht,q.get(Ht)-1),Ht&o&&q.set(o,q.get(o)-1),q.set(an,(q.get(an)||0)+1),an&o&&q.set(o,(q.get(o)||0)+1)}for(var ue=new Uint8Array(de.length),ge=new Map,fe=[],ve=null,we=0;we<de.length;we++)ve||fe.push(ve={start:we,end:de.length-1,level:T==="rtl"?1:T==="ltr"?0:Yo(we,!1)}),D[we]&w&&(ve.end=we,ve=null);for(var ae=Y|G|P|z|r|te|F|w,Fe=function(zt){return zt+(zt&1?1:2)},Ie=function(zt){return zt+(zt&1?2:1)},Re=0;Re<fe.length;Re++){ve=fe[Re];var Ee=[{_level:ve.level,_override:0,_isolate:0}],le=void 0,Pe=0,I=0,me=0;q.clear();for(var Se=ve.start;Se<=ve.end;Se++){var _e=D[Se];if(le=Ee[Ee.length-1],q.set(_e,(q.get(_e)||0)+1),_e&o&&q.set(o,(q.get(o)||0)+1),_e&ae)if(_e&(Y|G)){ue[Se]=le._level;var L=(_e===Y?Ie:Fe)(le._level);L<=S&&!Pe&&!I?Ee.push({_level:L,_override:0,_isolate:0}):Pe||I++}else if(_e&(P|z)){ue[Se]=le._level;var xe=(_e===P?Ie:Fe)(le._level);xe<=S&&!Pe&&!I?Ee.push({_level:xe,_override:_e&P?O:E,_isolate:0}):Pe||I++}else if(_e&r){_e&J&&(_e=Yo(Se+1,!0)===1?$:k),ue[Se]=le._level,le._override&&ee(Se,le._override);var ce=(_e===$?Ie:Fe)(le._level);ce<=S&&Pe===0&&I===0?(me++,Ee.push({_level:ce,_override:0,_isolate:1,_isolInitIndex:Se})):Pe++}else if(_e&te){if(Pe>0)Pe--;else if(me>0){for(I=0;!Ee[Ee.length-1]._isolate;)Ee.pop();var be=Ee[Ee.length-1]._isolInitIndex;be!=null&&(ge.set(be,Se),ge.set(Se,be)),Ee.pop(),me--}le=Ee[Ee.length-1],ue[Se]=le._level,le._override&&ee(Se,le._override)}else _e&F?(Pe===0&&(I>0?I--:!le._isolate&&Ee.length>1&&(Ee.pop(),le=Ee[Ee.length-1])),ue[Se]=le._level):_e&w&&(ue[Se]=ve.level);else ue[Se]=le._level,le._override&&_e!==Q&&ee(Se,le._override)}for(var Ue=[],ke=null,Le=ve.start;Le<=ve.end;Le++){var Ge=D[Le];if(!(Ge&l)){var et=ue[Le],Ve=Ge&r,qe=Ge===te;ke&&et===ke._level?(ke._end=Le,ke._endsWithIsolInit=Ve):Ue.push(ke={_start:Le,_end:Le,_level:et,_startsWithPDI:qe,_endsWithIsolInit:Ve})}}for(var at=[],$t=0;$t<Ue.length;$t++){var en=Ue[$t];if(!en._startsWithPDI||en._startsWithPDI&&!ge.has(en._start)){for(var Vt=[ke=en],dn=void 0;ke&&ke._endsWithIsolInit&&(dn=ge.get(ke._end))!=null;)for(var Bt=$t+1;Bt<Ue.length;Bt++)if(Ue[Bt]._start===dn){Vt.push(ke=Ue[Bt]);break}for(var vt=[],pn=0;pn<Vt.length;pn++)for(var jr=Vt[pn],dr=jr._start;dr<=jr._end;dr++)vt.push(dr);for(var Js=ue[vt[0]],C=ve.level,Z=vt[0]-1;Z>=0;Z--)if(!(D[Z]&l)){C=ue[Z];break}var re=vt[vt.length-1],se=ue[re],ie=ve.level;if(!(D[re]&r)){for(var De=re+1;De<=ve.end;De++)if(!(D[De]&l)){ie=ue[De];break}}at.push({_seqIndices:vt,_sosType:Math.max(C,Js)%2?O:E,_eosType:Math.max(ie,se)%2?O:E})}}for(var Be=0;Be<at.length;Be++){var ze=at[Be],ye=ze._seqIndices,je=ze._sosType,Ye=ze._eosType,We=ue[ye[0]]&1?O:E;if(q.get(K))for(var ot=0;ot<ye.length;ot++){var At=ye[ot];if(D[At]&K){for(var ft=je,kt=ot-1;kt>=0;kt--)if(!(D[ye[kt]]&l)){ft=D[ye[kt]];break}ee(At,ft&(r|te)?B:ft)}}if(q.get(j))for(var st=0;st<ye.length;st++){var Ke=ye[st];if(D[Ke]&j)for(var In=st-1;In>=-1;In--){var lt=In===-1?je:D[ye[In]];if(lt&a){lt===W&&ee(Ke,U);break}}}if(q.get(W))for(var tn=0;tn<ye.length;tn++){var pr=ye[tn];D[pr]&W&&ee(pr,O)}if(q.get(v)||q.get(V))for(var nn=1;nn<ye.length-1;nn++){var Qn=ye[nn];if(D[Qn]&(v|V)){for(var ht=0,rn=0,$n=nn-1;$n>=0&&(ht=D[ye[$n]],!!(ht&l));$n--);for(var wt=nn+1;wt<ye.length&&(rn=D[ye[wt]],!!(rn&l));wt++);ht===rn&&(D[Qn]===v?ht===j:ht&(j|U))&&ee(Qn,ht)}}if(q.get(j))for(var Gt=0;Gt<ye.length;Gt++){var Qs=ye[Gt];if(D[Qs]&j){for(var ei=Gt-1;ei>=0&&D[ye[ei]]&(R|l);ei--)ee(ye[ei],j);for(Gt++;Gt<ye.length&&D[ye[Gt]]&(R|l|j);Gt++)D[ye[Gt]]!==j&&ee(ye[Gt],j)}}if(q.get(R)||q.get(v)||q.get(V))for(var mr=0;mr<ye.length;mr++){var Io=ye[mr];if(D[Io]&(R|v|V)){ee(Io,B);for(var Yr=mr-1;Yr>=0&&D[ye[Yr]]&l;Yr--)ee(ye[Yr],B);for(var qr=mr+1;qr<ye.length&&D[ye[qr]]&l;qr++)ee(ye[qr],B)}}if(q.get(j))for(var $s=0,No=je;$s<ye.length;$s++){var Fo=ye[$s],ea=D[Fo];ea&j?No===E&&ee(Fo,E):ea&a&&(No=ea)}if(q.get(o)){var gr=O|j|U,Oo=gr|E,Kr=[];{for(var Si=[],Ei=0;Ei<ye.length;Ei++)if(D[ye[Ei]]&o){var _r=de[ye[Ei]],Bo=void 0;if(y(_r)!==null)if(Si.length<63)Si.push({char:_r,seqIndex:Ei});else break;else if((Bo=b(_r))!==null)for(var vr=Si.length-1;vr>=0;vr--){var ta=Si[vr].char;if(ta===Bo||ta===b(A(_r))||y(A(ta))===_r){Kr.push([Si[vr].seqIndex,Ei]),Si.length=vr;break}}}Kr.sort(function(zt,an){return zt[0]-an[0]})}for(var na=0;na<Kr.length;na++){for(var ko=Kr[na],Zr=ko[0],ia=ko[1],Go=!1,sn=0,ra=Zr+1;ra<ia;ra++){var zo=ye[ra];if(D[zo]&Oo){Go=!0;var Ho=D[zo]&gr?O:E;if(Ho===We){sn=Ho;break}}}if(Go&&!sn){sn=je;for(var sa=Zr-1;sa>=0;sa--){var Vo=ye[sa];if(D[Vo]&Oo){var Wo=D[Vo]&gr?O:E;Wo!==We?sn=Wo:sn=We;break}}}if(sn){if(D[ye[Zr]]=D[ye[ia]]=sn,sn!==We){for(var xr=Zr+1;xr<ye.length;xr++)if(!(D[ye[xr]]&l)){f(de[ye[xr]])&K&&(D[ye[xr]]=sn);break}}if(sn!==We){for(var yr=ia+1;yr<ye.length;yr++)if(!(D[ye[yr]]&l)){f(de[ye[yr]])&K&&(D[ye[yr]]=sn);break}}}}for(var Nn=0;Nn<ye.length;Nn++)if(D[ye[Nn]]&o){for(var Xo=Nn,aa=Nn,oa=je,Mr=Nn-1;Mr>=0;Mr--)if(D[ye[Mr]]&l)Xo=Mr;else{oa=D[ye[Mr]]&gr?O:E;break}for(var jo=Ye,Sr=Nn+1;Sr<ye.length;Sr++)if(D[ye[Sr]]&(o|l))aa=Sr;else{jo=D[ye[Sr]]&gr?O:E;break}for(var la=Xo;la<=aa;la++)D[ye[la]]=oa===jo?oa:We;Nn=aa}}}for(var Wt=ve.start;Wt<=ve.end;Wt++){var gh=ue[Wt],Jr=D[Wt];if(gh&1?Jr&(E|j|U)&&ue[Wt]++:Jr&O?ue[Wt]++:Jr&(U|j)&&(ue[Wt]+=2),Jr&l&&(ue[Wt]=Wt===0?ve.level:ue[Wt-1]),Wt===ve.end||f(de[Wt])&(H|w))for(var Qr=Wt;Qr>=0&&f(de[Qr])&c;Qr--)ue[Qr]=ve.level}}return{levels:ue,paragraphs:fe};function Yo(zt,an){for(var Ht=zt;Ht<de.length;Ht++){var Fn=D[Ht];if(Fn&(O|W))return 1;if(Fn&(w|E)||an&&Fn===te)return 0;if(Fn&r){var qo=_h(Ht);Ht=qo===-1?de.length:qo}}return 0}function _h(zt){for(var an=1,Ht=zt+1;Ht<de.length;Ht++){var Fn=D[Ht];if(Fn&w)break;if(Fn&te){if(--an===0)return Ht}else Fn&r&&an++}return-1}}var Ae="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",he;function N(){if(!he){var de=_(Ae,!0),T=de.map,S=de.reverseMap;S.forEach(function(D,ne){T.set(ne,D)}),he=T}}function Oe(de){return N(),he.get(de)||null}function Me(de,T,S,D){var ne=de.length;S=Math.max(0,S==null?0:+S),D=Math.min(ne-1,D==null?ne-1:+D);for(var q=new Map,ee=S;ee<=D;ee++)if(T[ee]&1){var ue=Oe(de[ee]);ue!==null&&q.set(ee,ue)}return q}function Te(de,T,S,D){var ne=de.length;S=Math.max(0,S==null?0:+S),D=Math.min(ne-1,D==null?ne-1:+D);var q=[];return T.paragraphs.forEach(function(ee){var ue=Math.max(S,ee.start),ge=Math.min(D,ee.end);if(ue<ge){for(var fe=T.levels.slice(ue,ge+1),ve=ge;ve>=ue&&f(de[ve])&c;ve--)fe[ve]=ee.level;for(var we=ee.level,ae=1/0,Fe=0;Fe<fe.length;Fe++){var Ie=fe[Fe];Ie>we&&(we=Ie),Ie<ae&&(ae=Ie|1)}for(var Re=we;Re>=ae;Re--)for(var Ee=0;Ee<fe.length;Ee++)if(fe[Ee]>=Re){for(var le=Ee;Ee+1<fe.length&&fe[Ee+1]>=Re;)Ee++;Ee>le&&q.push([le+ue,Ee+ue])}}}),q}function pe(de,T,S,D){var ne=Ne(de,T,S,D),q=[].concat(de);return ne.forEach(function(ee,ue){q[ue]=(T.levels[ee]&1?Oe(de[ee]):null)||de[ee]}),q.join("")}function Ne(de,T,S,D){for(var ne=Te(de,T,S,D),q=[],ee=0;ee<de.length;ee++)q[ee]=ee;return ne.forEach(function(ue){for(var ge=ue[0],fe=ue[1],ve=q.slice(ge,fe+1),we=ve.length;we--;)q[fe-we]=ve[we]}),q}return e.closingToOpeningBracket=b,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=A,e.getEmbeddingLevels=oe,e.getMirroredCharacter=Oe,e.getMirroredCharactersMap=Me,e.getReorderSegments=Te,e.getReorderedIndices=Ne,e.getReorderedString=pe,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const oh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function ho(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Ze[n];return r?ho(r):i}return s.replace(e,t)}const Et=[];for(let s=0;s<256;s++)Et[s]=(s<16?"0":"")+s.toString(16);function m0(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toUpperCase()}const ai=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},g0=Date.now(),Zc=new WeakMap,Jc=new Map;let _0=1e10;function fo(s,e){const t=M0(e);let i=Zc.get(s);if(i||Zc.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Jc[h];if(!f){const d=v0(this,c,e,t);f=Jc[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,ai(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-g0}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:_0++}),u.uuid=m0(),u.uniforms=ai({},c.uniforms,e.uniforms),u.defines=ai({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=ai({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(ai(this.extensions,c.extensions),ai(this.defines,c.defines),ai(this.uniforms,Ou.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=fo(s.isDerivedMaterial?s.getDepthMaterial():new Yu({depthPacking:Tu}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=fo(s.isDerivedMaterial?s.getDistanceMaterial():new qu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=a,new a}function v0(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=i;if(r=r||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=ho(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=ho(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),h=`${f}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,M)=>/\battribute\s+vec[23]\s+$/.test(M.substr(0,m))?p:`troika_${p}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Qc(e,n,r,a,o),t=Qc(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function Qc(s,e,t,i,n){return(i||n||t)&&(s=s.replace(oh,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function x0(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let y0=0;const $c=new Map;function M0(s){const e=JSON.stringify(s,x0);let t=$c.get(e);return t==null&&$c.set(e,t=++y0),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function S0(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,a=new Uint8Array(n);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(n,r){var a=e._bin,o=r;a.readFixed(n,r),r+=4;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(n,r,4);r+=4,a.readUint(n,r),r+=4;var g=a.readUint(n,r);r+=4;var _=a.readUint(n,r);r+=4,h[d]={offset:g,length:_}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(n,h[p].offset,h[p].length,u))}return u},_tabOffset:function(n,r,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,a){for(var o="",l=0;l<a;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,a){var o=e._bin._tdec;return o&&r==0&&a==n.length?o.decode(n):e._bin.readASCII(n,r,a)},readBytes:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,a,o,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,r,a){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,r);r+=2;var g=a(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,a=0;a<32;a++)n>>>a&1&&r++;return r},e._lctf.readClassDef=function(n,r){var a=e._bin,o=[],l=a.readUshort(n,r);if(r+=2,l==1){var c=a.readUshort(n,r);r+=2;var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(n,r)),r+=2}if(l==2){var f=a.readUshort(n,r);for(r+=2,h=0;h<f;h++)o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(n,r){var a=e._bin,o={};o.fmt=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(n,r,l)),o.fmt==2&&(o.tab=a.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var a=n.tab;if(n.fmt==1)return a.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var a=e._bin,o={};a.readUshort(n,r),r+=2,o.reqFeature=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.features=a.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,a){var o=e._bin;(n=new Uint8Array(n.buffer,r,a))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],g=[];r=e.CFF.readIndex(n,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var p=[];for(u=0;u<g.length-1;u++)p.push(o.readBytes(n,r+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(n,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var M=e.CFF.readDict(n,r+m[u],r+m[u+1]);e.CFF._readFDict(n,M,_),d.FDArray.push(M)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var y=o.readUshort(n,r);for(r+=2,u=0;u<y+1;u++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(n,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,a){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,a){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=o.readUshort(n,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,a){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)a.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,a){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,r+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,r+1)/65535,f=5),c.push(g??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,a){for(var o=e._bin,l={},c=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,r+1),f=3),u==29&&(g=o.readInt(n,r+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,r+1)/65535,f=5,"unknown number";if(u==30){var _=[];for(f=1;;){var p=n[r+f];f++;var m=p>>4,M=15&p;if(m!=15&&_.push(m),M!=15&&_.push(M),M==15)break}for(var x="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],b=0;b<_.length;b++)x+=y[_[b]];g=parseFloat(x)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,a){n=new Uint8Array(n.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var g=o.readUint(n,r);r+=4;var _="p"+f+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var M=o.readUshort(n,g);M==0?m=e.cmap.parse0(n,g):M==4?m=e.cmap.parse4(n,g):M==6?m=e.cmap.parse6(n,g):M==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+M,f,d,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=p}return l},e.cmap.parse0=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var a=e._bin,o=r,l={};l.format=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;var h=u/2;l.searchRange=a.readUshort(n,r),r+=2,l.entrySelector=a.readUshort(n,r),r+=2,l.rangeShift=a.readUshort(n,r),r+=2,l.endCount=a.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=a.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(n,r)),r+=2;for(l.idRangeOffset=a.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,o.firstCode=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,r+=2,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4;var l=a.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var M=0,x=0;for(u=0;u<f;u++)M+=c.xs[u],x+=c.ys[u],c.xs[u]=M,c.ys[u]=x}else{var y;c.parts=[];do{y=a.readUshort(o,l),l+=2;var b={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(b),b.glyphIndex=a.readUshort(o,l),l+=2,1&y){var A=a.readShort(o,l);l+=2;var E=a.readShort(o,l);l+=2}else A=a.readInt8(o,l),l++,E=a.readInt8(o,l),l++;2&y?(b.m.tx=A,b.m.ty=E):(b.p1=A,b.p2=E),8&y?(b.m.a=b.m.d=a.readF2dot14(o,l),l+=2):64&y?(b.m.a=a.readF2dot14(o,l),l+=2,b.m.d=a.readF2dot14(o,l),l+=2):128&y&&(b.m.a=a.readF2dot14(o,l),l+=2,b.m.b=a.readF2dot14(o,l),l+=2,b.m.c=a.readF2dot14(o,l),l+=2,b.m.d=a.readF2dot14(o,l),l+=2)}while(32&y);if(256&y){var O=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<O;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,a);a+=2;for(var m=0;m<p;m++){var M=c+l.readUshort(n,a);a+=2;var x=l.readUshort(n,M);M+=2;for(var y=[],b=0;b<x;b++){var A=l.readUshort(n,M);M+=2,f!=0&&(U=e.GPOS.readValueRecord(n,M,f),M+=2*g),d!=0&&(V=e.GPOS.readValueRecord(n,M,d),M+=2*_),y.push({gid2:A,val1:U,val2:V})}u.pairsets.push(y)}}if(u.fmt==2){var E=l.readUshort(n,a);a+=2;var O=l.readUshort(n,a);a+=2;var j=l.readUshort(n,a);a+=2;var v=l.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,c+E),u.classDef2=e._lctf.readClassDef(n,c+O),u.matrix=[],m=0;m<j;m++){var R=[];for(b=0;b<v;b++){var U=null,V=null;f!=0&&(U=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(V=e.GPOS.readValueRecord(n,a,d),a+=2*_),R.push({val1:U,val2:V})}u.matrix.push(R)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var w=l.readUshort(n,a);a+=2;var H=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+H)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(n,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(n,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(n,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,r,a){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,r){var a=e._bin,o=[],l=r,c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,r+2)+l);h.markClass=a.readUshort(n,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var a=e._bin,o={};return o.fmt=a.readUshort(n,r),o.x=a.readShort(n,r+2),o.y=a.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,a),a+=2;else if(u.fmt==2){var f=l.readUshort(n,a);a+=2,u.newg=l.readUshorts(n,a,f),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,a)+c;a+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(r==4)for(u.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var p=l.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var M=l.readUshort(n,a);for(a+=2,d=0;d<M;d++){var x=l.readUshort(n,a);a+=2,u.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var y=[],b=0;b<f;b++)y.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*b)));a+=2*f,d==0&&(u.backCvg=y),d==1&&(u.inptCvg=y),d==2&&(u.ahedCvg=y)}f=l.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(r==7&&u.fmt==1){var A=l.readUshort(n,a);a+=2;var E=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=A;else if(o.ltype!=A)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+E)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var a=e._bin.readUshort,o=r,l=[],c=a(n,r);r+=2;for(var u=0;u<c;u++){var h=a(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,r){var a=e._bin.readUshort,o={},l=a(n,r),c=a(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=a.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=a.readUshort(n,r),r+=2,o.subst=a.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,a,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,a,o);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,a=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,a,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,a){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(n,r,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,a){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,a){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var g=o.readUshort(n,r);r+=2;var _=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var M=o.readUshort(n,r);r+=2;var x=o.readUshort(n,r);r+=2;var y,b=h[m],A=f+12*c+x;if(g==0)y=o.readUnicode(n,A,M/2);else if(g==3&&_==0)y=o.readUnicode(n,A,M/2);else if(_==0)y=o.readASCII(n,A,M);else if(_==1)y=o.readUnicode(n,A,M/2);else if(_==3)y=o.readUnicode(n,A,M/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;y=o.readASCII(n,A,M),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var E="p"+g+","+p.toString(16);l[E]==null&&(l[E]={}),l[E][b!==void 0?b:m]=y,l[E]._lang=p}for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==1033)return l[O];for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==0)return l[O];for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==3084)return l[O];for(var O in l)if(l[O].postScriptName!=null)return l[O];for(var O in l){u=O;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,a){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,r),r+=2,a.usWeightClass=o.readUshort(n,r),r+=2,a.usWidthClass=o.readUshort(n,r),r+=2,a.fsType=o.readUshort(n,r),r+=2,a.ySubscriptXSize=o.readShort(n,r),r+=2,a.ySubscriptYSize=o.readShort(n,r),r+=2,a.ySubscriptXOffset=o.readShort(n,r),r+=2,a.ySubscriptYOffset=o.readShort(n,r),r+=2,a.ySuperscriptXSize=o.readShort(n,r),r+=2,a.ySuperscriptYSize=o.readShort(n,r),r+=2,a.ySuperscriptXOffset=o.readShort(n,r),r+=2,a.ySuperscriptYOffset=o.readShort(n,r),r+=2,a.yStrikeoutSize=o.readShort(n,r),r+=2,a.yStrikeoutPosition=o.readShort(n,r),r+=2,a.sFamilyClass=o.readShort(n,r),r+=2,a.panose=o.readBytes(n,r,10),r+=10,a.ulUnicodeRange1=o.readUint(n,r),r+=4,a.ulUnicodeRange2=o.readUint(n,r),r+=4,a.ulUnicodeRange3=o.readUint(n,r),r+=4,a.ulUnicodeRange4=o.readUint(n,r),r+=4,a.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,a.fsSelection=o.readUshort(n,r),r+=2,a.usFirstCharIndex=o.readUshort(n,r),r+=2,a.usLastCharIndex=o.readUshort(n,r),r+=2,a.sTypoAscender=o.readShort(n,r),r+=2,a.sTypoDescender=o.readShort(n,r),r+=2,a.sTypoLineGap=o.readShort(n,r),r+=2,a.usWinAscent=o.readUshort(n,r),r+=2,a.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,a){var o=e._bin;return r=e["OS/2"].version0(n,r,a),a.ulCodePageRange1=o.readUint(n,r),r+=4,a.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,a){var o=e._bin;return r=e["OS/2"].version1(n,r,a),a.sxHeight=o.readShort(n,r),r+=2,a.sCapHeight=o.readShort(n,r),r+=2,a.usDefault=o.readUshort(n,r),r+=2,a.usBreak=o.readUshort(n,r),r+=2,a.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,a){var o=e._bin;return r=e["OS/2"].version2(n,r,a),a.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,a){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,a)}else n.glyf&&e.U._drawGlyf(r,n,a);return a},e.U._drawGlyf=function(n,r,a){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(n,r){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],_=n.xs[c],p=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,_,p);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+_)/2,(n.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,_,p):g?e.U.P.qcurveTo(r,_,p,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,_,p,(_+n.xs[h])/2,(p+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var a=e._lctf.getInterval(r,n);return a==-1?0:r[a+2]},e.U._applySubs=function(n,r,a,o){for(var l=n.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(a.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>l)){for(var p=!0,m=0,M=0;M<_;M++){for(;n[r+m+(1+M)]==-1;)m++;g.chain[M]!=n[r+m+(1+M)]&&(p=!1)}if(p){for(n[r]=g.nglyph,M=0;M<_+m;M++)n[r+M+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var x=e._lctf.getInterval(h.cDef,n[r]),y=h.cDef[x+2],b=h.scset[y],A=0;A<b.length;A++){var E=b[A],O=E.input;if(!(O.length>l)){for(p=!0,M=0;M<O.length;M++){var j=e._lctf.getInterval(h.cDef,n[r+1+M]);if(x==-1&&h.cDef[j+2]!=O[M]){p=!1;break}}if(p){var v=E.substLookupRecords;for(d=0;d<v.length;d+=2)v[d],v[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var R=h.lookupRec;for(A=0;A<R.length;A+=2){x=R[A];var U=o[R[A+1]];e.U._applySubs(n,r+x,U,o)}}}}},e.U._glsCovered=function(n,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,a){n.cmds.push("M"),n.crds.push(r,a)},e.U.P.lineTo=function(n,r,a){n.cmds.push("L"),n.crds.push(r,a)},e.U.P.curveTo=function(n,r,a,o,l,c,u){n.cmds.push("C"),n.crds.push(r,a,o,l,c,u)},e.U.P.qcurveTo=function(n,r,a,o,l){n.cmds.push("Q"),n.crds.push(r,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,a,o,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,g=0,_=r.x,p=r.y,m=0,M=0,x=0,y=0,b=0,A=0,E=0,O=0,j=0,v=0,R={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,R);var U=R.val;if(g+=R.size,U=="o1"||U=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(U=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o5")for(;c.length>0;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);else if(U=="o6"||U=="o7")for(var V=c.length,w=U=="o6",H=0;H<V;H++){var B=c.shift();w?_+=B:p+=B,w=!w,e.U.P.lineTo(l,_,p)}else if(U=="o8"||U=="o24"){V=c.length;for(var Q=0;Q+6<=V;)m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),y=M+c.shift(),_=x+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,M,x,y,_,p),Q+=6;U=="o24"&&(_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(M=p,x=(m=_+c.shift())+c.shift(),v=y=M+c.shift(),A=y,O=p,_=(E=(b=(j=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,M,x,y,j,v),e.U.P.curveTo(l,b,A,E,O,_,p)),U=="o1235"&&(m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),y=M+c.shift(),j=x+c.shift(),v=y+c.shift(),b=j+c.shift(),A=v+c.shift(),E=b+c.shift(),O=A+c.shift(),_=E+c.shift(),p=O+c.shift(),c.shift(),e.U.P.curveTo(l,m,M,x,y,j,v),e.U.P.curveTo(l,b,A,E,O,_,p)),U=="o1236"&&(m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),v=y=M+c.shift(),A=y,E=(b=(j=x+c.shift())+c.shift())+c.shift(),O=A+c.shift(),_=E+c.shift(),e.U.P.curveTo(l,m,M,x,y,j,v),e.U.P.curveTo(l,b,A,E,O,_,p)),U=="o1237"&&(m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),y=M+c.shift(),j=x+c.shift(),v=y+c.shift(),b=j+c.shift(),A=v+c.shift(),E=b+c.shift(),O=A+c.shift(),Math.abs(E-_)>Math.abs(O-p)?_=E+c.shift():p=O+c.shift(),e.U.P.curveTo(l,m,M,x,y,j,v),e.U.P.curveTo(l,b,A,E,O,_,p));else if(U=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var K=c.shift(),W=c.shift(),z=c.shift(),P=c.shift(),G=e.CFF.glyphBySE(a,z),Y=e.CFF.glyphBySE(a,P);e.U._drawCFF(a.CharStrings[G],r,a,o,l),r.x=K,r.y=W,e.U._drawCFF(a.CharStrings[Y],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(U=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),p+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(U=="o25"){for(;c.length>6;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);m=_+c.shift(),M=p+c.shift(),x=m+c.shift(),y=M+c.shift(),_=x+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,M,x,y,_,p)}else if(U=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,M=p+c.shift(),_=x=m+c.shift(),p=(y=M+c.shift())+c.shift(),e.U.P.curveTo(l,m,M,x,y,_,p);else if(U=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)M=p,x=(m=_+c.shift())+c.shift(),y=M+c.shift(),_=x+c.shift(),p=y,e.U.P.curveTo(l,m,M,x,y,_,p);else if(U=="o10"||U=="o29"){var F=U=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),$=F.Subrs[k+F.Bias];r.x=_,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF($,r,a,o,l),_=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(U=="o30"||U=="o31"){var J=c.length,te=(Q=0,U=="o31");for(Q+=J-(V=-3&J);Q<V;)te?(M=p,x=(m=_+c.shift())+c.shift(),p=(y=M+c.shift())+c.shift(),V-Q==5?(_=x+c.shift(),Q++):_=x,te=!1):(m=_,M=p+c.shift(),x=m+c.shift(),y=M+c.shift(),_=x+c.shift(),V-Q==5?(p=y+c.shift(),Q++):p=y,te=!0),e.U.P.curveTo(l,m,M,x,y,_,p),Q+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,n),U;c.push(U)}}}r.x=_,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function E0(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(U,V){for(var w=new t(31),H=0;H<31;++H)w[H]=V+=1<<U[H-1];var B=new i(w[30]);for(H=1;H<30;++H)for(var Q=w[H];Q<w[H+1];++Q)B[Q]=Q-w[H]<<5|H;return[w,B]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(U,V,w){for(var H=U.length,B=0,Q=new t(V);B<H;++B)++Q[U[B]-1];var K,W=new t(V);for(B=0;B<V;++B)W[B]=W[B-1]+Q[B-1]<<1;if(w){K=new t(1<<V);var z=15-V;for(B=0;B<H;++B)if(U[B])for(var P=B<<4|U[B],G=V-U[B],Y=W[U[B]-1]++<<G,F=Y|(1<<G)-1;Y<=F;++Y)K[f[Y]>>>z]=P}else for(K=new t(H),B=0;B<H;++B)U[B]&&(K[B]=f[W[U[B]-1]++]>>>15-U[B]);return K},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var M=_(p,9,1),x=_(m,5,1),y=function(U){for(var V=U[0],w=1;w<U.length;++w)U[w]>V&&(V=U[w]);return V},b=function(U,V,w){var H=V/8|0;return(U[H]|U[H+1]<<8)>>(7&V)&w},A=function(U,V){var w=V/8|0;return(U[w]|U[w+1]<<8|U[w+2]<<16)>>(7&V)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],O=function(U,V,w){var H=new Error(V||E[U]);if(H.code=U,Error.captureStackTrace&&Error.captureStackTrace(H,O),!w)throw H;return H},j=function(U,V,w){var H=U.length;if(!H||w&&!w.l&&H<5)return V||new e(0);var B=!V||w,Q=!w||w.i;w||(w={}),V||(V=new e(3*H));var K,W=function(le){var Pe=V.length;if(le>Pe){var I=new e(Math.max(2*Pe,le));I.set(V),V=I}},z=w.f||0,P=w.p||0,G=w.b||0,Y=w.l,F=w.d,k=w.m,$=w.n,J=8*H;do{if(!Y){w.f=z=b(U,P,1);var te=b(U,P+1,3);if(P+=3,!te){var oe=U[(S=((K=P)/8|0)+(7&K&&1)+4)-4]|U[S-3]<<8,Ae=S+oe;if(Ae>H){Q&&O(0);break}B&&W(G+oe),V.set(U.subarray(S,Ae),G),w.b=G+=oe,w.p=P=8*Ae;continue}if(te==1)Y=M,F=x,k=9,$=5;else if(te==2){var he=b(U,P,31)+257,N=b(U,P+10,15)+4,Oe=he+b(U,P+5,31)+1;P+=14;for(var Me=new e(Oe),Te=new e(19),pe=0;pe<N;++pe)Te[a[pe]]=b(U,P+3*pe,7);P+=3*N;var Ne=y(Te),de=(1<<Ne)-1,T=_(Te,Ne,1);for(pe=0;pe<Oe;){var S,D=T[b(U,P,de)];if(P+=15&D,(S=D>>>4)<16)Me[pe++]=S;else{var ne=0,q=0;for(S==16?(q=3+b(U,P,3),P+=2,ne=Me[pe-1]):S==17?(q=3+b(U,P,7),P+=3):S==18&&(q=11+b(U,P,127),P+=7);q--;)Me[pe++]=ne}}var ee=Me.subarray(0,he),ue=Me.subarray(he);k=y(ee),$=y(ue),Y=_(ee,k,1),F=_(ue,$,1)}else O(1);if(P>J){Q&&O(0);break}}B&&W(G+131072);for(var ge=(1<<k)-1,fe=(1<<$)-1,ve=P;;ve=P){var we=(ne=Y[A(U,P)&ge])>>>4;if((P+=15&ne)>J){Q&&O(0);break}if(ne||O(2),we<256)V[G++]=we;else{if(we==256){ve=P,Y=null;break}var ae=we-254;if(we>264){var Fe=n[pe=we-257];ae=b(U,P,(1<<Fe)-1)+c[pe],P+=Fe}var Ie=F[A(U,P)&fe],Re=Ie>>>4;if(Ie||O(3),P+=15&Ie,ue=h[Re],Re>3&&(Fe=r[Re],ue+=A(U,P)&(1<<Fe)-1,P+=Fe),P>J){Q&&O(0);break}B&&W(G+131072);for(var Ee=G+ae;G<Ee;G+=4)V[G]=V[G-ue],V[G+1]=V[G+1-ue],V[G+2]=V[G+2-ue],V[G+3]=V[G+3-ue];G=Ee}}w.l=Y,w.p=ve,w.b=G,Y&&(z=1,w.m=k,w.d=F,w.n=$)}while(!z);return G==V.length?V:function(le,Pe,I){(Pe==null||Pe<0)&&(Pe=0),(I==null||I>le.length)&&(I=le.length);var me=new(le instanceof t?t:le instanceof i?i:e)(I-Pe);return me.set(le.subarray(Pe,I)),me}(V,0,G)},v=new e(0),R=typeof TextDecoder<"u"&&new TextDecoder;try{R.decode(v,{stream:!0})}catch{}return s.convert_streams=function(U){var V=new DataView(U),w=0;function H(){var he=V.getUint16(w);return w+=2,he}function B(){var he=V.getUint32(w);return w+=4,he}function Q(he){oe.setUint16(Ae,he),Ae+=2}function K(he){oe.setUint32(Ae,he),Ae+=4}for(var W={signature:B(),flavor:B(),length:B(),numTables:H(),reserved:H(),totalSfntSize:B(),majorVersion:H(),minorVersion:H(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},z=0;Math.pow(2,z)<=W.numTables;)z++;z--;for(var P=16*Math.pow(2,z),G=16*W.numTables-P,Y=12,F=[],k=0;k<W.numTables;k++)F.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),Y+=16;var $,J=new Uint8Array(12+16*F.length+F.reduce(function(he,N){return he+N.origLength+4},0)),te=J.buffer,oe=new DataView(te),Ae=0;return K(W.flavor),Q(W.numTables),Q(P),Q(z),Q(G),F.forEach(function(he){K(he.tag),K(he.origChecksum),K(Y),K(he.origLength),he.outOffset=Y,(Y+=he.origLength)%4!=0&&(Y+=4-Y%4)}),F.forEach(function(he){var N,Oe=U.slice(he.offset,he.offset+he.compLength);if(he.compLength!=he.origLength){var Me=new Uint8Array(he.origLength);N=new Uint8Array(Oe,2),j(N,Me)}else Me=new Uint8Array(Oe);J.set(Me,he.outOffset);var Te=0;(Y=he.outOffset+he.origLength)%4!=0&&(Te=4-Y%4),J.set(new Uint8Array(Te).buffer,he.outOffset+he.origLength),$=Y+Te}),te.slice(0,$)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function T0(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,a=4,o=8,l=16,c=32;let u;function h(E){if(!u){const O={R:r,L:n,D:a,C:l,U:c,T:o};u=new Map;for(let j in i){let v=0;i[j].split(",").forEach(R=>{let[U,V]=R.split("+");U=parseInt(U,36),V=V?parseInt(V,36):0,u.set(v+=U,O[j]);for(let w=V;w--;)u.set(++v,O[j])})}}return u.get(E)||c}const f=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(E){const O=new Uint8Array(E.length);let j=c,v=f,R=-1;for(let U=0;U<E.length;U++){const V=E.codePointAt(U);let w=h(V)|0,H=f;w&o||(j&(n|a|l)?w&(r|a|l)?(H=g,(v===f||v===g)&&O[R]++):w&(n|c)&&(v===d||v===_)&&O[R]--:j&(r|c)&&(v===d||v===_)&&O[R]--,v=O[U]=H,j=w,R=U,V>65535&&U++)}return O}function M(E,O){const j=[];for(let R=0;R<O.length;R++){const U=O.codePointAt(R);U>65535&&R++,j.push(s.U.codeToGlyph(E,U))}const v=E.GSUB;if(v){const{lookupList:R,featureList:U}=v;let V;const w=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,H=[];U.forEach(B=>{if(w.test(B.tag))for(let Q=0;Q<B.tab.length;Q++){if(H[B.tab[Q]])continue;H[B.tab[Q]]=!0;const K=R[B.tab[Q]],W=/^(isol|init|fina|medi)$/.test(B.tag);W&&!V&&(V=m(O));for(let z=0;z<j.length;z++)(!V||!W||p[V[z]]===B.tag)&&s.U._applySubs(j,z,K,R)}})}return j}function x(E,O){const j=new Int16Array(O.length*3);let v=0;for(;v<O.length;v++){const w=O[v];if(w===-1)continue;j[v*3+2]=E.hmtx.aWidth[w];const H=E.GPOS;if(H){const B=H.lookupList;for(let Q=0;Q<B.length;Q++){const K=B[Q];for(let W=0;W<K.tabs.length;W++){const z=K.tabs[W];if(K.ltype===1){if(s._lctf.coverageIndex(z.coverage,w)!==-1&&z.pos){V(z.pos,v);break}}else if(K.ltype===2){let P=null,G=R();if(G!==-1){const Y=s._lctf.coverageIndex(z.coverage,O[G]);if(Y!==-1){if(z.fmt===1){const F=z.pairsets[Y];for(let k=0;k<F.length;k++)F[k].gid2===w&&(P=F[k])}else if(z.fmt===2){const F=s.U._getGlyphClass(O[G],z.classDef1),k=s.U._getGlyphClass(w,z.classDef2);P=z.matrix[F][k]}if(P){P.val1&&V(P.val1,G),P.val2&&V(P.val2,v);break}}}}else if(K.ltype===4){const P=s._lctf.coverageIndex(z.markCoverage,w);if(P!==-1){const G=R(U),Y=G===-1?-1:s._lctf.coverageIndex(z.baseCoverage,O[G]);if(Y!==-1){const F=z.markArray[P],k=z.baseArray[Y][F.markClass];j[v*3]=k.x-F.x+j[G*3]-j[G*3+2],j[v*3+1]=k.y-F.y+j[G*3+1];break}}}else if(K.ltype===6){const P=s._lctf.coverageIndex(z.mark1Coverage,w);if(P!==-1){const G=R();if(G!==-1){const Y=O[G];if(y(E,Y)===3){const F=s._lctf.coverageIndex(z.mark2Coverage,Y);if(F!==-1){const k=z.mark1Array[P],$=z.mark2Array[F][k.markClass];j[v*3]=$.x-k.x+j[G*3]-j[G*3+2],j[v*3+1]=$.y-k.y+j[G*3+1];break}}}}}}}}else if(E.kern&&!E.cff){const B=R();if(B!==-1){const Q=E.kern.glyph1.indexOf(O[B]);if(Q!==-1){const K=E.kern.rval[Q].glyph2.indexOf(w);K!==-1&&(j[B*3+2]+=E.kern.rval[Q].vals[K])}}}}return j;function R(w){for(let H=v-1;H>=0;H--)if(O[H]!==-1&&(!w||w(O[H])))return H;return-1}function U(w){return y(E,w)===1}function V(w,H){for(let B=0;B<3;B++)j[H*3+B]+=w[B]||0}}function y(E,O){const j=E.GDEF&&E.GDEF.glyphClassDef;return j?s.U._getGlyphClass(O,j):0}function b(...E){for(let O=0;O<E.length;O++)if(typeof E[O]=="number")return E[O]}function A(E){const O=Object.create(null),j=E["OS/2"],v=E.hhea,R=E.head.unitsPerEm,U=b(j&&j.sTypoAscender,v&&v.ascender,R),V={unitsPerEm:R,ascender:U,descender:b(j&&j.sTypoDescender,v&&v.descender,0),capHeight:b(j&&j.sCapHeight,U),xHeight:b(j&&j.sxHeight,U),lineGap:b(j&&j.sTypoLineGap,v&&v.lineGap),supportsCodePoint(w){return s.U.codeToGlyph(E,w)>0},forEachGlyph(w,H,B,Q){let K=0;const W=1/V.unitsPerEm*H,z=M(E,w);let P=0;const G=x(E,z);return z.forEach((Y,F)=>{if(Y!==-1){let k=O[Y];if(!k){const{cmds:$,crds:J}=s.U.glyphToPath(E,Y);let te="",oe=0;for(let Me=0,Te=$.length;Me<Te;Me++){const pe=t[$[Me]];te+=$[Me];for(let Ne=1;Ne<=pe;Ne++)te+=(Ne>1?",":"")+J[oe++]}let Ae,he,N,Oe;if(J.length){Ae=he=1/0,N=Oe=-1/0;for(let Me=0,Te=J.length;Me<Te;Me+=2){let pe=J[Me],Ne=J[Me+1];pe<Ae&&(Ae=pe),Ne<he&&(he=Ne),pe>N&&(N=pe),Ne>Oe&&(Oe=Ne)}}else Ae=N=he=Oe=0;k=O[Y]={index:Y,advanceWidth:E.hmtx.aWidth[Y],xMin:Ae,yMin:he,xMax:N,yMax:Oe,path:te}}Q.call(null,k,K+G[F*3]*W,G[F*3+1]*W,P),K+=G[F*3+2]*W,B&&(K+=B*H)}P+=w.codePointAt(P)>65535?2:1}),K}};return V}return function(O){const j=new Uint8Array(O,0,4),v=s._bin.readASCII(j,0,4);if(v==="wOFF")O=e(O);else if(v==="wOF2")throw new Error("woff2 fonts not supported");return A(s.parse(O)[0])}}const b0=fr({name:"Typr Font Parser",dependencies:[S0,E0,T0],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function A0(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var y=x>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&x))},e.prototype.has=function(x){var y=this.buckets.get(x>>5);return y!==void 0&&(y&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach(function(y,b){x.push((+b).toString(36)+":"+y.toString(36))}),x.join(",")},e.prototype.deserialize=function(x){var y=this;this.buckets.clear(),x.split(",").forEach(function(b){var A=b.split(":");y.buckets.set(parseInt(A[0],36),parseInt(A[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(x){var y=function(A){return A&n}(x).toString(16),b=function(A){return(A&n)+t-1}(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+y+"-"+b+".json"}function a(x,y){var b=x&i,A=y.codePointAt(b/6|0);return((A=(A||48)-48)&1<<b%6)!=0}function o(x,y){var b;(b=x,b.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(A){return A.split("-").map(function(E){return parseInt(E.trim(),16)})})).forEach(function(A){var E=A[0],O=A[1];O===void 0&&(O=E),y(E,O)})}function l(x,y){o(x,function(b,A){for(var E=b;E<=A;E++)y(E)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(x){var y=h.get(x);return y||(y=new e,l(x.ranges,function(b){return y.add(b)}),h.set(x,y)),y}var g,_=new Map;function p(x,y,b){return x[y]?y:x[b]?b:function(A){for(var E in A)return E}(x)}function m(x,y){var b=y;if(!x.includes(b)){b=1/0;for(var A=0;A<x.length;A++)Math.abs(x[A]-y)<Math.abs(b-y)&&(b=x[A])}return b}function M(x){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(y){g.add(y)})),g.has(x)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(x,y){y===void 0&&(y={});var b,A=y.lang;A===void 0&&(A=new RegExp("\\p{Script=Hangul}","u").test(b=x)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(b)?"ja":"en");var E=y.category;E===void 0&&(E="sans-serif");var O=y.style;O===void 0&&(O="normal");var j=y.weight;j===void 0&&(j=400);var v=(y.dataUrl||f).replace(/\/$/g,""),R=new Map,U=new Uint8Array(x.length),V={},w={},H=new Array(x.length),B=new Map,Q=!1;function K(P){var G=_.get(P);return G||(G=fetch(v+"/"+P).then(function(Y){if(!Y.ok)throw new Error(Y.statusText);return Y.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(Y){if(v!==f)return Q||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+Y.message),Q=!0),v=f,_.delete(P),K(P);throw Y}),_.set(P,G)),G}for(var W=function(P){var G=x.codePointAt(P),Y=r(G);H[P]=Y,c[Y]||B.has(Y)||B.set(Y,K(Y).then(function(F){c[Y]=F})),G>65535&&(P++,z=P)},z=0;z<x.length;z++)W(z);return Promise.all(B.values()).then(function(){B.clear();for(var P=function(Y){var F=x.codePointAt(Y),k=null,$=c[H[Y]],J=void 0;for(var te in $){var oe=w[te];if(oe===void 0&&(oe=w[te]=new RegExp(te).test(A||"en")),oe){for(var Ae in J=te,$[te])if(a(F,$[te][Ae])){k=Ae;break}break}}if(!k){e:for(var he in $)if(he!==J){for(var N in $[he])if(a(F,$[he][N])){k=N;break e}}}k||(console.debug("No font coverage for U+"+F.toString(16)),k="latin"),H[Y]=k,u[k]||B.has(k)||B.set(k,K("font-meta/"+k+".json").then(function(Oe){u[k]=Oe})),F>65535&&(Y++,G=Y)},G=0;G<x.length;G++)P(G);return Promise.all(B.values())}).then(function(){for(var P,G=null,Y=0;Y<x.length;Y++){var F=x.codePointAt(Y);if(G&&(M(F)||d(G).has(F)))U[Y]=U[Y-1];else{G=u[H[Y]];var k=V[G.id];if(!k){var $=G.typeforms,J=p($,E,"sans-serif"),te=p($[J],O,"normal"),oe=m((P=$[J])===null||P===void 0?void 0:P[te],j);k=V[G.id]=v+"/font-files/"+G.id+"/"+J+"."+te+"."+oe+".woff"}var Ae=R.get(k);Ae==null&&(Ae=R.size,R.set(k,Ae)),U[Y]=Ae}F>65535&&(Y++,U[Y]=U[Y-1])}return{fontUrls:Array.from(R.keys()),chars:U}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function w0(s,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):i[a]?i[a].push(o):(i[a]=[o],n(a,c=>{c.src=a,t[a]=c,i[a].forEach(u=>u(c)),delete i[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||M();const _=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(y=>!y.lang||y.lang.test(l)).reverse(),c.length){let E=0;(function O(j=0){for(let v=j,R=a.length;v<R;v++){const U=a.codePointAt(v);if(E===1&&g[d[v-1]].supportsCodePoint(U)||/\s/.test(a[v]))d[v]=d[v-1],E===2&&(p[p.length-1][1]=v);else for(let V=d[v],w=c.length;V<=w;V++)if(V===w){const H=E===2?p[p.length-1]:p[p.length]=[v,v];H[1]=v,E=2}else{d[v]=V;const{src:H,unicodeRange:B}=c[V];if(!B||x(U,B)){const Q=t[H];if(!Q){r(H,()=>{O(v)});return}if(Q.supportsCodePoint(U)){let K=_.get(Q);typeof K!="number"&&(K=g.length,g.push(Q),_.set(Q,K)),d[v]=K,E=1;break}}}U>65535&&v+1<R&&(d[v+1]=d[v],v++,E===2&&(p[p.length-1][1]=v))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){const y=p.map(b=>a.substring(b[0],b[1]+1)).join(`
`);e.getFontsForString(y,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:b,chars:A})=>{const E=g.length;let O=0;p.forEach(v=>{for(let R=0,U=v[1]-v[0];R<=U;R++)d[v[0]+R]=A[O++]+E;O++});let j=0;b.forEach((v,R)=>{r(v,U=>{g[R+E]=U,++j===b.length&&M()})})})}else M()}function M(){o({chars:d,fonts:g})}function x(y,b){for(let A=0;A<b.length;A++){const[E,O=E]=b[A];if(E<=y&&y<=O)return!0}return!1}}}const R0=fr({name:"FontResolver",dependencies:[w0,b0,A0],init(s,e,t){return s(e,t())}});function C0(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:_,fonts:p,style:m,weight:M,preResolvedFonts:x,unicodeFontsURL:y},b){const A=({chars:E,fonts:O})=>{let j,v;const R=[];for(let U=0;U<E.length;U++)E[U]!==v?(v=E[U],R.push(j={start:U,end:U,fontObj:O[E[U]]})):j.end=U;b(R)};x?A(x):s(g,A,{lang:_,fonts:p,style:m,weight:M,unicodeFontsURL:y})}function o({text:g="",font:_,lang:p,sdfGlyphSize:m=64,fontSize:M=400,fontWeight:x=1,fontStyle:y="normal",letterSpacing:b=0,lineHeight:A="normal",maxWidth:E=1/0,direction:O,textAlign:j="left",textIndent:v=0,whiteSpace:R="normal",overflowWrap:U="normal",anchorX:V=0,anchorY:w=0,metricsOnly:H=!1,unicodeFontsURL:B,preResolvedFonts:Q=null,includeCaretPositions:K=!1,chunkedBoundsSize:W=8192,colorRanges:z=null},P){const G=h(),Y={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),M=+M,b=+b,E=+E,A=A||"normal",v=+v,a({text:g,lang:p,style:y,weight:x,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:B,preResolvedFonts:Q},F=>{Y.fontLoad=h()-G;const k=isFinite(E);let $=null,J=null,te=null,oe=null,Ae=null,he=null,N=null,Oe=null,Me=0,Te=0,pe=R!=="nowrap";const Ne=new Map,de=h();let T=v,S=0,D=new f;const ne=[D];F.forEach(fe=>{const{fontObj:ve}=fe,{ascender:we,descender:ae,unitsPerEm:Fe,lineGap:Ie,capHeight:Re,xHeight:Ee}=ve;let le=Ne.get(ve);if(!le){const _e=M/Fe,L=A==="normal"?(we-ae+Ie)*_e:A*M,xe=(L-(we-ae)*_e)/2,ce=Math.min(L,(we-ae)*_e),be=(we+ae)/2*_e+ce/2;le={index:Ne.size,src:ve.src,fontObj:ve,fontSizeMult:_e,unitsPerEm:Fe,ascender:we*_e,descender:ae*_e,capHeight:Re*_e,xHeight:Ee*_e,lineHeight:L,baseline:-xe-we*_e,caretTop:(we+ae)/2*_e+ce/2,caretBottom:be-ce},Ne.set(ve,le)}const{fontSizeMult:Pe}=le,I=g.slice(fe.start,fe.end+1);let me,Se;ve.forEachGlyph(I,M,b,(_e,L,xe,ce)=>{L+=S,ce+=fe.start,me=L,Se=_e;const be=g.charAt(ce),Ue=_e.advanceWidth*Pe,ke=D.count;let Le;if("isEmpty"in _e||(_e.isWhitespace=!!be&&new RegExp(n).test(be),_e.canBreakAfter=!!be&&r.test(be),_e.isEmpty=_e.xMin===_e.xMax||_e.yMin===_e.yMax||i.test(be)),!_e.isWhitespace&&!_e.isEmpty&&Te++,pe&&k&&!_e.isWhitespace&&L+Ue+T>E&&ke){if(D.glyphAt(ke-1).glyphObj.canBreakAfter)Le=new f,T=-L;else for(let et=ke;et--;)if(et===0&&U==="break-word"){Le=new f,T=-L;break}else if(D.glyphAt(et).glyphObj.canBreakAfter){Le=D.splitAt(et+1);const Ve=Le.glyphAt(0).x;T-=Ve;for(let qe=Le.count;qe--;)Le.glyphAt(qe).x-=Ve;break}Le&&(D.isSoftWrapped=!0,D=Le,ne.push(D),Me=E)}let Ge=D.glyphAt(D.count);Ge.glyphObj=_e,Ge.x=L+T,Ge.y=xe,Ge.width=Ue,Ge.charIndex=ce,Ge.fontData=le,be===`
`&&(D=new f,ne.push(D),T=-(L+Ue+b*M)+v)}),S=me+Se.advanceWidth*Pe+b*M});let q=0;ne.forEach(fe=>{let ve=!0;for(let we=fe.count;we--;){const ae=fe.glyphAt(we);ve&&!ae.glyphObj.isWhitespace&&(fe.width=ae.x+ae.width,fe.width>Me&&(Me=fe.width),ve=!1);let{lineHeight:Fe,capHeight:Ie,xHeight:Re,baseline:Ee}=ae.fontData;Fe>fe.lineHeight&&(fe.lineHeight=Fe);const le=Ee-fe.baseline;le<0&&(fe.baseline+=le,fe.cap+=le,fe.ex+=le),fe.cap=Math.max(fe.cap,fe.baseline+Ie),fe.ex=Math.max(fe.ex,fe.baseline+Re)}fe.baseline-=q,fe.cap-=q,fe.ex-=q,q+=fe.lineHeight});let ee=0,ue=0;if(V&&(typeof V=="number"?ee=-V:typeof V=="string"&&(ee=-Me*(V==="left"?0:V==="center"?.5:V==="right"?1:c(V)))),w&&(typeof w=="number"?ue=-w:typeof w=="string"&&(ue=w==="top"?0:w==="top-baseline"?-ne[0].baseline:w==="top-cap"?-ne[0].cap:w==="top-ex"?-ne[0].ex:w==="middle"?q/2:w==="bottom"?q:w==="bottom-baseline"?ne[ne.length-1].baseline:c(w)*q)),!H){const fe=e.getEmbeddingLevels(g,O);$=new Uint16Array(Te),J=new Uint8Array(Te),te=new Float32Array(Te*2),oe={},N=[1/0,1/0,-1/0,-1/0],Oe=[],K&&(he=new Float32Array(g.length*4)),z&&(Ae=new Uint8Array(Te*3));let ve=0,we=-1,ae=-1,Fe,Ie;if(ne.forEach((Re,Ee)=>{let{count:le,width:Pe}=Re;if(le>0){let I=0;for(let ce=le;ce--&&Re.glyphAt(ce).glyphObj.isWhitespace;)I++;let me=0,Se=0;if(j==="center")me=(Me-Pe)/2;else if(j==="right")me=Me-Pe;else if(j==="justify"&&Re.isSoftWrapped){let ce=0;for(let be=le-I;be--;)Re.glyphAt(be).glyphObj.isWhitespace&&ce++;Se=(Me-Pe)/ce}if(Se||me){let ce=0;for(let be=0;be<le;be++){let Ue=Re.glyphAt(be);const ke=Ue.glyphObj;Ue.x+=me+ce,Se!==0&&ke.isWhitespace&&be<le-I&&(ce+=Se,Ue.width+=Se)}}const _e=e.getReorderSegments(g,fe,Re.glyphAt(0).charIndex,Re.glyphAt(Re.count-1).charIndex);for(let ce=0;ce<_e.length;ce++){const[be,Ue]=_e[ce];let ke=1/0,Le=-1/0;for(let Ge=0;Ge<le;Ge++)if(Re.glyphAt(Ge).charIndex>=be){let et=Ge,Ve=Ge;for(;Ve<le;Ve++){let qe=Re.glyphAt(Ve);if(qe.charIndex>Ue)break;Ve<le-I&&(ke=Math.min(ke,qe.x),Le=Math.max(Le,qe.x+qe.width))}for(let qe=et;qe<Ve;qe++){const at=Re.glyphAt(qe);at.x=Le-(at.x+at.width-ke)}break}}let L;const xe=ce=>L=ce;for(let ce=0;ce<le;ce++){const be=Re.glyphAt(ce);L=be.glyphObj;const Ue=L.index,ke=fe.levels[be.charIndex]&1;if(ke){const Le=e.getMirroredCharacter(g[be.charIndex]);Le&&be.fontData.fontObj.forEachGlyph(Le,0,0,xe)}if(K){const{charIndex:Le,fontData:Ge}=be,et=be.x+ee,Ve=be.x+be.width+ee;he[Le*4]=ke?Ve:et,he[Le*4+1]=ke?et:Ve,he[Le*4+2]=Re.baseline+Ge.caretBottom+ue,he[Le*4+3]=Re.baseline+Ge.caretTop+ue;const qe=Le-we;qe>1&&u(he,we,qe),we=Le}if(z){const{charIndex:Le}=be;for(;Le>ae;)ae++,z.hasOwnProperty(ae)&&(Ie=z[ae])}if(!L.isWhitespace&&!L.isEmpty){const Le=ve++,{fontSizeMult:Ge,src:et,index:Ve}=be.fontData,qe=oe[et]||(oe[et]={});qe[Ue]||(qe[Ue]={path:L.path,pathBounds:[L.xMin,L.yMin,L.xMax,L.yMax]});const at=be.x+ee,$t=be.y+Re.baseline+ue;te[Le*2]=at,te[Le*2+1]=$t;const en=at+L.xMin*Ge,Vt=$t+L.yMin*Ge,dn=at+L.xMax*Ge,Bt=$t+L.yMax*Ge;en<N[0]&&(N[0]=en),Vt<N[1]&&(N[1]=Vt),dn>N[2]&&(N[2]=dn),Bt>N[3]&&(N[3]=Bt),Le%W===0&&(Fe={start:Le,end:Le,rect:[1/0,1/0,-1/0,-1/0]},Oe.push(Fe)),Fe.end++;const vt=Fe.rect;if(en<vt[0]&&(vt[0]=en),Vt<vt[1]&&(vt[1]=Vt),dn>vt[2]&&(vt[2]=dn),Bt>vt[3]&&(vt[3]=Bt),$[Le]=Ue,J[Le]=Ve,z){const pn=Le*3;Ae[pn]=Ie>>16&255,Ae[pn+1]=Ie>>8&255,Ae[pn+2]=Ie&255}}}}}),he){const Re=g.length-we;Re>1&&u(he,we,Re)}}const ge=[];Ne.forEach(({index:fe,src:ve,unitsPerEm:we,ascender:ae,descender:Fe,lineHeight:Ie,capHeight:Re,xHeight:Ee})=>{ge[fe]={src:ve,unitsPerEm:we,ascender:ae,descender:Fe,lineHeight:Ie,capHeight:Re,xHeight:Ee}}),Y.typesetting=h()-de,P({glyphIds:$,glyphFontIndices:J,glyphPositions:te,glyphData:oe,fontData:ge,caretPositions:he,glyphColors:Ae,chunkedBounds:Oe,fontSize:M,topBaseline:ue+ne[0].baseline,blockBounds:[ee,ue-q,ee+Me,ue],visibleBounds:N,timings:Y})})}function l(g,_){o({...g,metricsOnly:!0},p=>{const[m,M,x,y]=p.blockBounds;_({width:x-m,height:y-M})})}function c(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function u(g,_,p){const m=g[_*4],M=g[_*4+1],x=g[_*4+2],y=g[_*4+3],b=(M-m)/p;for(let A=0;A<p;A++){const E=(_+A)*4;g[E]=m+b*A,g[E+1]=m+b*(A+1),g[E+2]=x,g[E+3]=y}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(M){this.data[this.index*d.length+p]=M}}),g),{data:null,index:0}),{typeset:o,measure:l}}const mi=()=>(self.performance||Date).now(),Zs=ah();let eu;function L0(s,e,t,i,n,r,a,o,l,c,u=!0){return u?U0(s,e,t,i,n,r,a,o,l,c).then(null,h=>(eu||(console.warn("WebGL SDF generation failed, falling back to JS",h),eu=!0),nu(s,e,t,i,n,r,a,o,l,c))):nu(s,e,t,i,n,r,a,o,l,c)}const Ds=[],P0=5;let po=0;function lh(){const s=mi();for(;Ds.length&&mi()-s<P0;)Ds.shift()();po=Ds.length?setTimeout(lh,0):0}const U0=(...s)=>new Promise((e,t)=>{Ds.push(()=>{const i=mi();try{Zs.webgl.generateIntoCanvas(...s),e({timing:mi()-i})}catch(n){t(n)}}),po||(po=setTimeout(lh,0))}),D0=4,I0=2e3,tu={};let N0=0;function nu(s,e,t,i,n,r,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+N0++%D0;let h=tu[u];return h||(h=tu[u]={workerModule:fr({name:u,workerId:u,dependencies:[ah,mi],init(f,d){const g=f().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{const g=mi(),_=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)_[p*4+c]=f[p];return Zs.webglUtils.renderImageData(a,_,o,l,s,e,1<<3-c),d+=mi()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{f0(u)},I0)),{timing:d}})}function F0(s){s._warm||(Zs.webgl.isSupported(s),s._warm=!0)}const O0=Zs.webglUtils.resizeWebGLCanvasWithoutClearing,Xi={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},B0=new Xe;function Vi(){return(self.performance||Date).now()}const iu=Object.create(null);function k0(s,e){s=z0({},s);const t=Vi(),{defaultFontURL:i}=Xi,n=[];if(i&&n.push({label:"default",src:ru(i)}),s.font&&n.push({label:"user",src:ru(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Xi.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Xi.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=B0.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:r,sdfExponent:a}=Xi,{sdfGlyphSize:o}=s,l=r/o*4;let c=iu[o];if(!c){const f=document.createElement("canvas");f.width=r,f.height=o*256/l,c=iu[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new mt(f,void 0,void 0,void 0,yt,yt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,G0(c)}const{sdfTexture:u,sdfCanvas:h}=c;V0(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:p,fontSize:m,timings:M}=f,x=[],y=new Float32Array(d.length*4);let b=0,A=0;const E=Vi(),O=_.map(V=>{let w=c.glyphsByFont.get(V.src);return w||c.glyphsByFont.set(V.src,w=new Map),w});d.forEach((V,w)=>{const H=g[w],{src:B,unitsPerEm:Q}=_[H];let K=O[H].get(V);if(!K){const{path:Y,pathBounds:F}=f.glyphData[B][V],k=Math.max(F[2]-F[0],F[3]-F[1])/o*(Xi.sdfMargin*o+.5),$=c.glyphCount++,J=[F[0]-k,F[1]-k,F[2]+k,F[3]+k];O[H].set(V,K={path:Y,atlasIndex:$,sdfViewBox:J}),x.push(K)}const{sdfViewBox:W}=K,z=p[A++],P=p[A++],G=m/Q;y[b++]=z+W[0]*G,y[b++]=P+W[1]*G,y[b++]=z+W[2]*G,y[b++]=P+W[3]*G,d[w]=K.atlasIndex}),M.quads=(M.quads||0)+(Vi()-E);const j=Vi();M.sdf={};const v=h.height,R=Math.ceil(c.glyphCount/l),U=Math.pow(2,Math.ceil(Math.log2(R*o)));U>v&&(console.info(`Increasing SDF texture size ${v}->${U}`),O0(h,r,U),u.dispose()),Promise.all(x.map(V=>ch(V,c,s.gpuAccelerateSDF).then(({timing:w})=>{M.sdf[V.atlasIndex]=w}))).then(()=>{x.length&&!c.contextLost&&(uh(c),u.needsUpdate=!0),M.sdfTotal=Vi()-j,M.total=Vi()-t,e(Object.freeze({parameters:s,sdfTexture:u,sdfGlyphSize:o,sdfExponent:a,glyphBounds:y,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||F0(h)})}function ch({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Xi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/i)*i,f=Math.floor(u/(o/i))*i,d=e%4;return L0(i,i,s,t,c,l,n,h,f,d,a)}function G0(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(ch(r,s,!0))})}),Promise.all(i).then(()=>{uh(s),s.sdfTexture.needsUpdate=!0})})}function z0(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Rs;function ru(s){return Rs||(Rs=typeof document>"u"?{}:document.createElement("a")),Rs.href=s,Rs.href}function uh(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,a)}}const H0=fr({name:"Typesetter",dependencies:[C0,R0,p0],init(s,e,t){return s(e,t())}}),V0=fr({name:"Typesetter",dependencies:[H0],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),su={};function W0(s){let e=su[s];if(!e){const t=new Mi(1,1,s,s),i=t.clone(),n=t.attributes,r=i.attributes,a=new Ot,o=n.uv.count;for(let l=0;l<o;l++)r.position.array[l*3]*=-1,r.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{a.setAttribute(l,new Ft([...n[l].array,...r[l].array],n[l].itemSize))}),a.setIndex([...t.index.array,...i.index.array.map(l=>l+o)]),a.translate(.5,.5,0),e=su[s]=a}return e}const X0="aTroikaGlyphBounds",au="aTroikaGlyphIndex",j0="aTroikaGlyphColor";class Y0 extends mv{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new fn,this.boundingBox=new Mn}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===It?t/2:0,e===Kt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=W0(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){qa(this,X0,e,4),qa(this,au,t,1),qa(this,j0,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:a,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=r((d+u)/h)!==r((g+u)/h)?-f:a(l(d)*f,l(g)*f),p=r((d-u)/h)!==r((g-u)/h)?f:o(l(d)*f,l(g)*f),m=r((d+n)/h)!==r((g+n)/h)?f*2:o(f-c(d)*f,f-c(g)*f);i.min.set(_,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(au).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function qa(s,e,t,i){const n=s.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(s.setAttribute(e,new zs(t,i)),delete s._maxInstanceCount,s.dispose()):n&&s.deleteAttribute(e)}const q0=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,K0=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Z0=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,J0=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Q0(s){const e=fo(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new He},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new rt(0,0,0,0)},uTroikaClipRect:{value:new rt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new He},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Xe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Je},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:q0,vertexTransform:K0,fragmentDefs:Z0,fragmentColorTransform:J0,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(oh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Uo=new Un({color:16777215,side:Kt,transparent:!0}),ou=8421504,lu=new Qe,Cs=new X,Ka=new X,Pr=[],$0=new X,Za="+x+y";function cu(s){return Array.isArray(s)?s[0]:s}let hh=()=>{const s=new bt(new Mi(1,1),Uo);return hh=()=>s,s},fh=()=>{const s=new bt(new Mi(1,1,32,1),Uo);return fh=()=>s,s};const ex={type:"syncstart"},tx={type:"synccomplete"},dh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],nx=dh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class ph extends bt{constructor(){const e=new Y0;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=ou,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Za,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(ex),k0({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(tx),e&&e()})))}onBeforeRender(e,t,i,n,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=xn}onAfterRender(e,t,i,n,r,a){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Uo.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Q0(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return cu(this.material).getDepthMaterial()}get customDistanceMaterial(){return cu(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,_=0,p=0;if(t){let{outlineWidth:M,outlineOffsetX:x,outlineOffsetY:y,outlineBlur:b,outlineOpacity:A}=this;c=this._parsePercent(M)||0,u=Math.max(0,this._parsePercent(b)||0),f=A,_=this._parsePercent(x)||0,p=this._parsePercent(y)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??ou),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaDistanceOffset.value=c,i.uTroikaPositionOffset.value.set(_,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const M=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-M,l[1]-M,l[2]+M,l[3]+M)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Xe;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||Za;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==Za&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;Cs.set(0,0,0)[u]=c==="-"?1:-1,Ka.set(0,0,0)[f]=h==="-"?-1:1,lu.lookAt($0,Cs.cross(Ka),Ka),o.setFromMatrix4(lu)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new He){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new He){return Cs.copy(e),this.localPositionToTextCoords(this.worldToLocal(Cs),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,a=n?fh():hh(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Pr.length=0,a.raycast(e,Pr);for(let u=0;u<Pr.length;u++)Pr[u].object=this,t.push(Pr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,nx.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}dh.forEach(s=>{const e="_private_"+s;Object.defineProperty(ph.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const Hs=1.3,Ut=new k_(16777215),ar=new Dt(45,window.innerWidth/window.innerHeight,.1,500),Wr=new Ku({antialias:!0,alpha:!0,canvas:document.querySelector("#scene")});Wr.setPixelRatio(window.devicePixelRatio);Wr.setSize(window.innerWidth/Hs,window.innerHeight/Hs);ar.position.set(-10,50,130);ar.lookAt(0,0,0);Ut.background=new Xe(15913);const Xr=new ph;Xr.text="Lake-Fred";Xr.fontSize=10;Xr.position.set(-10,20,-30);Xr.color=14893620;Ut.add(Xr);const ix=new Av;let uu;ix.load("/assets/models/lake2.glb",function(s){uu=s.scene,uu.position.set(0,0,0),Ut.add(s.scene)},function(s){console.log(s.loaded/s.total*100+"% loaded")},function(s){console.log(s)});const Vs=new Co(16777215,3),Ws=new Co(16777215,3),vi=new Ro(16777215,5e3),xi=new Ro(16777215,5e3),Do=new pv(16777215,1);vi.name="Point_Light_1";xi.name="Point_Light_2";Do.name="Ambient_Light";Vs.position.set(0,20,0);Ws.position.set(0,-20,0);vi.position.set(0,50,0);xi.position.set(0,-60,0);Do.position.set(0,50,0);new nh(Vs);new nh(Ws);new th(vi);new th(xi);Ut.add(vi,xi,Do);const or=new o0(ar,Wr.domElement);or.enableDamping=!0;or.autoRotate=!1;function mh(){requestAnimationFrame(mh),vi.position.x=Math.sin(Date.now()/500)/2*150,xi.position.x=Math.sin(Date.now()/500)/2*150,or.update(),Wr.render(Ut,ar)}window.addEventListener("resize",rx,!1);function rx(){ar.aspect=window.innerWidth/window.innerHeight,ar.updateProjectionMatrix(),Wr.setSize(window.innerWidth/Hs,window.innerHeight/Hs)}const sx=document.querySelector("#light_toggle");sx.addEventListener("click",()=>{Ut.getObjectByName("Point_Light_1")&&Ut.getObjectByName("Point_Light_2")?(Ut.remove(vi),Ut.remove(xi),Ut.add(Vs),Ut.add(Ws)):(Ut.remove(Vs),Ut.remove(Ws),Ut.add(vi),Ut.add(xi))});const ax=document.querySelector("#reset_camera");ax.addEventListener("click",()=>{or.reset()});const hu=document.getElementById("cam_spin");hu.addEventListener("click",function(){hu.checked?or.autoRotate=!0:or.autoRotate=!1});mh();
