(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="161",Es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gm=0,El=1,_m=2,Uh=1,xm=2,Si=3,qi=0,Sn=1,Ni=2,ki=0,Ys=1,Al=2,Nl=3,bl=4,vm=5,as=100,ym=101,Mm=102,wl=103,Rl=104,Sm=200,Tm=201,Em=202,Am=203,fc=204,pc=205,Nm=206,bm=207,wm=208,Rm=209,Cm=210,Lm=211,Pm=212,Im=213,Dm=214,Um=0,Om=1,Fm=2,Po=3,Vm=4,zm=5,Bm=6,Gm=7,Zo=0,Hm=1,km=2,ti=0,Oh=1,Fh=2,Vh=3,zh=4,Wm=5,Bh=6,Gh=300,er=301,tr=302,mc=303,gc=304,Jo=306,_c=1e3,Jn=1001,xc=1002,kt=1003,Cl=1004,_r=1005,xn=1006,Ma=1007,Gi=1008,Wi=1009,Xm=1010,qm=1011,Uc=1012,Hh=1013,Hi=1014,ci=1015,nr=1016,kh=1017,Wh=1018,us=1020,Ym=1021,Qn=1023,jm=1024,$m=1025,hs=1026,ir=1027,Km=1028,Xh=1029,Zm=1030,qh=1031,Yh=1033,Sa=33776,Ta=33777,Ea=33778,Aa=33779,Ll=35840,Pl=35841,Il=35842,Dl=35843,jh=36196,Ul=37492,Ol=37496,Fl=37808,Vl=37809,zl=37810,Bl=37811,Gl=37812,Hl=37813,kl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,jl=37819,$l=37820,Kl=37821,Na=36492,Zl=36494,Jl=36495,Jm=36283,Ql=36284,eu=36285,tu=36286,$h=3e3,ds=3001,Qm=3200,eg=3201,ps=0,Kh=1,Pn="",Qt="srgb",In="srgb-linear",Oc="display-p3",Qo="display-p3-linear",Io="linear",Tt="srgb",Do="rec709",Uo="p3",Ns=7680,nu=519,tg=512,Zh=513,ng=514,Jh=515,ig=516,sg=517,rg=518,og=519,Oo=35044,Qh=35048,iu="300 es",vc=1035,bi=2e3,sr=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const Cr=Math.PI/180,rr=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function nn(i,e,t){return Math.max(e,Math.min(t,i))}function Fc(i,e){return(i%e+e)%e}function ag(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cg(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function lg(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function ug(i,e=1){return e-Math.abs(Fc(i,e*2)-e)}function hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pg(i,e){return i+Math.random()*(e-i)}function mg(i){return i*(.5-Math.random())}function gg(i){i!==void 0&&(su=i);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _g(i){return i*Cr}function xg(i){return i*rr}function yc(i){return(i&i-1)===0&&i!==0}function vg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yg(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vc={DEG2RAD:Cr,RAD2DEG:rr,generateUUID:wi,clamp:nn,euclideanModulo:Fc,mapLinear:ag,inverseLerp:cg,lerp:Lr,damp:lg,pingpong:ug,smoothstep:hg,smootherstep:dg,randInt:fg,randFloat:pg,randFloatSpread:mg,seededRandom:gg,degToRad:_g,radToDeg:xg,isPowerOfTwo:yc,ceilPowerOfTwo:vg,floorPowerOfTwo:Fo,setQuaternionFromProperEuler:yg,normalize:mt,denormalize:ei};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,s,r,a,o,c,l){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],T=s[1],y=s[4],E=s[7],I=s[2],R=s[5],N=s[8];return r[0]=a*_+o*T+c*I,r[3]=a*p+o*y+c*R,r[6]=a*f+o*E+c*N,r[1]=l*_+u*T+h*I,r[4]=l*p+u*y+h*R,r[7]=l*f+u*E+h*N,r[2]=d*_+m*T+g*I,r[5]=d*p+m*y+g*R,r[8]=d*f+m*E+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new st;function ed(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mg(){const i=Vo("canvas");return i.style.display="block",i}const ru={};function fs(i){i in ru||(ru[i]=!0,console.warn(i))}const ou=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),au=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[In]:{transfer:Io,primaries:Do,toReference:i=>i,fromReference:i=>i},[Qt]:{transfer:Tt,primaries:Do,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qo]:{transfer:Io,primaries:Uo,toReference:i=>i.applyMatrix3(au),fromReference:i=>i.applyMatrix3(ou)},[Oc]:{transfer:Tt,primaries:Uo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(au),fromReference:i=>i.applyMatrix3(ou).convertLinearToSRGB()}},Sg=new Set([In,Qo]),_t={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=io[e].toReference,s=io[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return io[i].primaries},getTransfer:function(i){return i===Pn?Io:io[i].transfer}};function js(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bs;class td{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Vo("canvas")),bs.width=e.width,bs.height=e.height;const n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=js(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(js(t[n]/255)*255):t[n]=js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tg=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ra(s[a].image)):r.push(Ra(s[a]))}else r=Ra(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eg=0;class mn extends Pi{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Jn,s=Jn,r=xn,a=Gi,o=Qn,c=Wi,l=mn.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=wi(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ds?Qt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _c:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _c:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?ds:$h}set encoding(e){fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ds?Qt:Pn}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Gh;mn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,E=(m+1)/2,I=(f+1)/2,R=(u+d)/4,N=(h+_)/4,Y=(g+p)/4;return y>E&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=N/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=Y/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=N/r,s=Y/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yi extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ds?Qt:Pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends Yi{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zc extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ag extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let p=1-o;const f=c*d+l*m+u*g+h*_,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const I=Math.sqrt(y),R=Math.atan2(I,f*T);p=Math.sin(p*R)/I,o=Math.sin(o*R)/I}const E=o*T;if(c=c*p+d*E,l=l*p+m*E,u=u*p+g*E,h=h*p+_*E,p===1-o){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-o*m,e[t+2]=l*g+u*m+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new P,cu=new gs;class kr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),ro.subVectors(this.max,xr),ws.subVectors(e.a,xr),Rs.subVectors(e.b,xr),Cs.subVectors(e.c,xr),Ii.subVectors(Rs,ws),Di.subVectors(Cs,Rs),Qi.subVectors(ws,Cs);let t=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-Qi.z,Qi.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,Qi.z,0,-Qi.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-Qi.y,Qi.x,0];return!La(t,ws,Rs,Cs,ro)||(t=[1,0,0,0,1,0,0,0,1],!La(t,ws,Rs,Cs,ro))?!1:(oo.crossVectors(Ii,Di),t=[oo.x,oo.y,oo.z],La(t,ws,Rs,Cs,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new P,new P,new P,new P,new P,new P,new P,new P],$n=new P,so=new kr,ws=new P,Rs=new P,Cs=new P,Ii=new P,Di=new P,Qi=new P,xr=new P,ro=new P,oo=new P,es=new P;function La(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){es.fromArray(i,r);const o=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),u=n.dot(es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ng=new kr,vr=new P,Pa=new P;class ea{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ng.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Pa)),this.expandByPoint(vr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new P,Ia=new P,ao=new P,Ui=new P,Da=new P,co=new P,Ua=new P;class Bc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ia.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ao),o=Ui.dot(this.direction),c=-Ui.dot(ao),l=Ui.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ia).addScaledVector(ao,d),m}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){Da.subVectors(t,e),co.subVectors(n,e),Ua.crossVectors(Da,co);let a=this.direction.dot(Ua),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);const c=o*this.direction.dot(co.crossVectors(Ui,co));if(c<0)return null;const l=o*this.direction.dot(Da.cross(Ui));if(l<0||c+l>a)return null;const u=-o*Ui.dot(Ua);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p)}set(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,wg)}lookAt(e,t,n){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Oi.crossVectors(n,wn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Oi.crossVectors(n,wn)),Oi.normalize(),lo.crossVectors(wn,Oi),s[0]=Oi.x,s[4]=lo.x,s[8]=wn.x,s[1]=Oi.y,s[5]=lo.y,s[9]=wn.y,s[2]=Oi.z,s[6]=lo.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],T=n[3],y=n[7],E=n[11],I=n[15],R=s[0],N=s[4],Y=s[8],ie=s[12],v=s[1],w=s[5],$=s[9],ue=s[13],D=s[2],j=s[6],W=s[10],te=s[14],K=s[3],Q=s[7],ee=s[11],pe=s[15];return r[0]=a*R+o*v+c*D+l*K,r[4]=a*N+o*w+c*j+l*Q,r[8]=a*Y+o*$+c*W+l*ee,r[12]=a*ie+o*ue+c*te+l*pe,r[1]=u*R+h*v+d*D+m*K,r[5]=u*N+h*w+d*j+m*Q,r[9]=u*Y+h*$+d*W+m*ee,r[13]=u*ie+h*ue+d*te+m*pe,r[2]=g*R+_*v+p*D+f*K,r[6]=g*N+_*w+p*j+f*Q,r[10]=g*Y+_*$+p*W+f*ee,r[14]=g*ie+_*ue+p*te+f*pe,r[3]=T*R+y*v+E*D+I*K,r[7]=T*N+y*w+E*j+I*Q,r[11]=T*Y+y*$+E*W+I*ee,r[15]=T*ie+y*ue+E*te+I*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*m-n*c*m)+_*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*u-r*c*u)+p*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+f*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],T=h*p*l-_*d*l+_*c*m-o*p*m-h*c*f+o*d*f,y=g*d*l-u*p*l-g*c*m+a*p*m+u*c*f-a*d*f,E=u*_*l-g*h*l+g*o*m-a*_*m-u*o*f+a*h*f,I=g*h*c-u*_*c-g*o*d+a*_*d+u*o*p-a*h*p,R=t*T+n*y+s*E+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=T*N,e[1]=(_*d*r-h*p*r-_*s*m+n*p*m+h*s*f-n*d*f)*N,e[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*f+n*c*f)*N,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*m-n*c*m)*N,e[4]=y*N,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*f+t*d*f)*N,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*f-t*c*f)*N,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*m+t*c*m)*N,e[8]=E*N,e[9]=(g*h*r-u*_*r-g*n*m+t*_*m+u*n*f-t*h*f)*N,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*f+t*o*f)*N,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*m-t*o*m)*N,e[12]=I*N,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*N,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*p-t*o*p)*N,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,g=r*h,_=a*u,p=a*h,f=o*h,T=c*l,y=c*u,E=c*h,I=n.x,R=n.y,N=n.z;return s[0]=(1-(_+f))*I,s[1]=(m+E)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(d+f))*R,s[6]=(p+T)*R,s[7]=0,s[8]=(g+y)*N,s[9]=(p-T)*N,s[10]=(1-(d+_))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ls.set(s[0],s[1],s[2]).length();const a=Ls.set(s[4],s[5],s[6]).length(),o=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);const l=1/r,u=1/a,h=1/o;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=bi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(o===bi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===sr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*l,m=(n+s)*u;let g,_;if(o===bi)g=(a+r)*h,_=-2*h;else if(o===sr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ls=new P,Kn=new wt,bg=new P(0,0,0),wg=new P(1,1,1),Oi=new P,lo=new P,wn=new P,lu=new wt,uu=new gs;class ta{constructor(e=0,t=0,n=0,s=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rg=0;const hu=new P,Ps=new gs,vi=new wt,uo=new P,yr=new P,Cg=new P,Lg=new gs,du=new P(1,0,0),fu=new P(0,1,0),pu=new P(0,0,1),Pg={type:"added"},Ig={type:"removed"};class Ft extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new P,t=new ta,n=new gs,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new st}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(yr,uo,this.up):vi.lookAt(uo,yr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(vi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ig)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new P(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new P,yi=new P,Oa=new P,Mi=new P,Is=new P,Ds=new P,mu=new P,Fa=new P,Va=new P,za=new P;class li{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),yi.subVectors(n,t),Oa.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(yi),c=Zn.dot(Oa),l=yi.dot(yi),u=yi.dot(Oa),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),yi.subVectors(e,t),Zn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Zn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return li.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Is.subVectors(s,n),Ds.subVectors(r,n),Fa.subVectors(e,n);const c=Is.dot(Fa),l=Ds.dot(Fa);if(c<=0&&l<=0)return t.copy(n);Va.subVectors(e,s);const u=Is.dot(Va),h=Ds.dot(Va);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Is,a);za.subVectors(e,r);const m=Is.dot(za),g=Ds.dot(za);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ds,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return mu.subVectors(r,s),o=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(mu,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(Is,a).addScaledVector(Ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=Fc(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ba(a,r,e+1/3),this.g=Ba(a,r,e),this.b=Ba(a,r,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return _t.fromWorkingColorSpace(ln.copy(this),e),Math.round(nn(ln.r*255,0,255))*65536+Math.round(nn(ln.g*255,0,255))*256+Math.round(nn(ln.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(ln.copy(this),t);const n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Qt){_t.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,s=ln.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(ho);const n=Lr(Fi.h,ho.h,t),s=Lr(Fi.s,ho.s,t),r=Lr(Fi.l,ho.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ke;ke.NAMES=sd;let Dg=0;class Xn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Ys,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wr extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new P,fo=new Ne;class ni{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}}class rd extends ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class od extends ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gn extends ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ug=0;const Fn=new wt,Ga=new Ft,Us=new P,Rn=new kr,Mr=new kr,Zt=new P;class kn extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?od:rd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Rn.min,Mr.min),Rn.expandByPoint(Zt),Zt.addVectors(Rn.max,Mr.max),Rn.expandByPoint(Zt)):(Rn.expandByPoint(Mr.min),Rn.expandByPoint(Mr.max))}Rn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Zt.fromBufferAttribute(o,l),c&&(Us.fromBufferAttribute(e,l),Zt.add(Us)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let v=0;v<o;v++)l[v]=new P,u[v]=new P;const h=new P,d=new P,m=new P,g=new Ne,_=new Ne,p=new Ne,f=new P,T=new P;function y(v,w,$){h.fromArray(s,v*3),d.fromArray(s,w*3),m.fromArray(s,$*3),g.fromArray(a,v*2),_.fromArray(a,w*2),p.fromArray(a,$*2),d.sub(h),m.sub(h),_.sub(g),p.sub(g);const ue=1/(_.x*p.y-p.x*_.y);isFinite(ue)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ue),T.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(ue),l[v].add(f),l[w].add(f),l[$].add(f),u[v].add(T),u[w].add(T),u[$].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let v=0,w=E.length;v<w;++v){const $=E[v],ue=$.start,D=$.count;for(let j=ue,W=ue+D;j<W;j+=3)y(n[j+0],n[j+1],n[j+2])}const I=new P,R=new P,N=new P,Y=new P;function ie(v){N.fromArray(r,v*3),Y.copy(N);const w=l[v];I.copy(w),I.sub(N.multiplyScalar(N.dot(w))).normalize(),R.crossVectors(Y,w);const ue=R.dot(u[v])<0?-1:1;c[v*4]=I.x,c[v*4+1]=I.y,c[v*4+2]=I.z,c[v*4+3]=ue}for(let v=0,w=E.length;v<w;++v){const $=E[v],ue=$.start,D=$.count;for(let j=ue,W=ue+D;j<W;j+=3)ie(n[j+0]),ie(n[j+1]),ie(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new ni(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new wt,ts=new Bc,po=new ea,_u=new P,Os=new P,Fs=new P,Vs=new P,Ha=new P,mo=new P,go=new Ne,_o=new Ne,xo=new Ne,xu=new P,vu=new P,yu=new P,vo=new P,yo=new P;class Gn extends Ft{constructor(e=new kn,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ha.fromBufferAttribute(h,e),a?mo.addScaledVector(Ha,u):mo.addScaledVector(Ha.sub(t),u))}t.add(mo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(po.containsPoint(ts.origin)===!1&&(ts.intersectSphere(po,_u)===null||ts.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(r).invert(),ts.copy(e.ray).applyMatrix4(gu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,I=y;E<I;E+=3){const R=o.getX(E),N=o.getX(E+1),Y=o.getX(E+2);s=Mo(this,f,e,n,l,u,h,R,N,Y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const T=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);s=Mo(this,a,e,n,l,u,h,T,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,I=y;E<I;E+=3){const R=E,N=E+1,Y=E+2;s=Mo(this,f,e,n,l,u,h,R,N,Y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const T=p,y=p+1,E=p+2;s=Mo(this,a,e,n,l,u,h,T,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Og(i,e,t,n,s,r,a,o){let c;if(e.side===Sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===qi,o),c===null)return null;yo.copy(o),yo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:i}}function Mo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Os),i.getVertexPosition(c,Fs),i.getVertexPosition(l,Vs);const u=Og(i,e,t,n,Os,Fs,Vs,vo);if(u){s&&(go.fromBufferAttribute(s,o),_o.fromBufferAttribute(s,c),xo.fromBufferAttribute(s,l),u.uv=li.getInterpolation(vo,Os,Fs,Vs,go,_o,xo,new Ne)),r&&(go.fromBufferAttribute(r,o),_o.fromBufferAttribute(r,c),xo.fromBufferAttribute(r,l),u.uv1=li.getInterpolation(vo,Os,Fs,Vs,go,_o,xo,new Ne),u.uv2=u.uv1),a&&(xu.fromBufferAttribute(a,o),vu.fromBufferAttribute(a,c),yu.fromBufferAttribute(a,l),u.normal=li.getInterpolation(vo,Os,Fs,Vs,xu,vu,yu,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new P,materialIndex:0};li.getNormal(Os,Fs,Vs,h.normal),u.face=h}return u}class Xr extends kn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gn(l,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(h,2));function g(_,p,f,T,y,E,I,R,N,Y,ie){const v=E/N,w=I/Y,$=E/2,ue=I/2,D=R/2,j=N+1,W=Y+1;let te=0,K=0;const Q=new P;for(let ee=0;ee<W;ee++){const pe=ee*w-ue;for(let _e=0;_e<j;_e++){const Ge=_e*v-$;Q[_]=Ge*T,Q[p]=pe*y,Q[f]=D,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[f]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(_e/N),h.push(1-ee/Y),te+=1}}for(let ee=0;ee<Y;ee++)for(let pe=0;pe<N;pe++){const _e=d+pe+j*ee,Ge=d+pe+j*(ee+1),q=d+(pe+1)+j*(ee+1),oe=d+(pe+1)+j*ee;c.push(_e,Ge,oe),c.push(Ge,q,oe),K+=6}o.addGroup(m,K,ie),m+=K,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=or(i[t]);for(const s in n)e[s]=n[s]}return e}function Fg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ad(i){return i.getRenderTarget()===null?i.outputColorSpace:_t.workingColorSpace}const Vg={clone:or,merge:fn};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new P,Mu=new Ne,Su=new Ne;class yn extends cd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Bs=1;class Gg extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(zs,Bs,e,t);s.layers=this.layers,this.add(s);const r=new yn(zs,Bs,e,t);r.layers=this.layers,this.add(r);const a=new yn(zs,Bs,e,t);a.layers=this.layers,this.add(a);const o=new yn(zs,Bs,e,t);o.layers=this.layers,this.add(o);const c=new yn(zs,Bs,e,t);c.layers=this.layers,this.add(c);const l=new yn(zs,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ld extends mn{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hg extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ds?Qt:Pn),this.texture=new ld(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xr(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:ki});r.uniforms.tEquirect.value=t;const a=new Gn(s,r),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=xn),new Gg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const ka=new P,kg=new P,Wg=new st;class Ti{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ka.subVectors(n,t).cross(kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wg.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new ea,So=new P;class Gc{constructor(e=new Ti,t=new Ti,n=new Ti,s=new Ti,r=new Ti,a=new Ti){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],T=s[13],y=s[14],E=s[15];if(n[0].setComponents(c-r,d-l,p-m,E-f).normalize(),n[1].setComponents(c+r,d+l,p+m,E+f).normalize(),n[2].setComponents(c+a,d+u,p+g,E+T).normalize(),n[3].setComponents(c-a,d-u,p-g,E-T).normalize(),n[4].setComponents(c-o,d-h,p-_,E-y).normalize(),t===bi)n[5].setComponents(c+o,d+h,p+_,E+y).normalize();else if(t===sr)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(So.x=s.normal.x>0?e.max.x:e.min.x,So.y=s.normal.y>0?e.max.y:e.min.y,So.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ud(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xg(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class na extends kn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const T=f*d-a;for(let y=0;y<l;y++){const E=y*h-r;g.push(E,-T,0),_.push(0,0,1),p.push(y/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){const y=T+l*f,E=T+l*(f+1),I=T+1+l*(f+1),R=T+1+l*f;m.push(y,E,R),m.push(E,I,R)}this.setIndex(m),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.widthSegments,e.heightSegments)}}var qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
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
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_=`#ifdef USE_BATCHING
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
#endif`,t_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,n_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r_=`#ifdef USE_IRIDESCENCE
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
#endif`,o_=`#ifdef USE_BUMPMAP
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,m_=`#define PI 3.141592653589793
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
} // validated`,g_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,__=`vec3 transformedNormal = objectNormal;
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
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`
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
}`,E_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
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
}`,D_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
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
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W_=`PhysicalMaterial material;
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
#endif`,X_=`struct PhysicalMaterial {
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
}`,q_=`
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
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nx=`#if defined( USE_POINTS_UV )
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
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
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
#endif`,ax=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
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
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cx=`float getShadowMask() {
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
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,x0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,E0=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:qg,alphahash_pars_fragment:Yg,alphamap_fragment:jg,alphamap_pars_fragment:$g,alphatest_fragment:Kg,alphatest_pars_fragment:Zg,aomap_fragment:Jg,aomap_pars_fragment:Qg,batching_pars_vertex:e_,batching_vertex:t_,begin_vertex:n_,beginnormal_vertex:i_,bsdfs:s_,iridescence_fragment:r_,bumpmap_pars_fragment:o_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:c_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:u_,color_fragment:h_,color_pars_fragment:d_,color_pars_vertex:f_,color_vertex:p_,common:m_,cube_uv_reflection_fragment:g_,defaultnormal_vertex:__,displacementmap_pars_vertex:x_,displacementmap_vertex:v_,emissivemap_fragment:y_,emissivemap_pars_fragment:M_,colorspace_fragment:S_,colorspace_pars_fragment:T_,envmap_fragment:E_,envmap_common_pars_fragment:A_,envmap_pars_fragment:N_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:z_,envmap_vertex:w_,fog_vertex:R_,fog_pars_vertex:C_,fog_fragment:L_,fog_pars_fragment:P_,gradientmap_pars_fragment:I_,lightmap_fragment:D_,lightmap_pars_fragment:U_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:F_,lights_pars_begin:V_,lights_toon_fragment:B_,lights_toon_pars_fragment:G_,lights_phong_fragment:H_,lights_phong_pars_fragment:k_,lights_physical_fragment:W_,lights_physical_pars_fragment:X_,lights_fragment_begin:q_,lights_fragment_maps:Y_,lights_fragment_end:j_,logdepthbuf_fragment:$_,logdepthbuf_pars_fragment:K_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:J_,map_fragment:Q_,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphcolor_vertex:rx,morphnormal_vertex:ox,morphtarget_pars_vertex:ax,morphtarget_vertex:cx,normal_fragment_begin:lx,normal_fragment_maps:ux,normal_pars_fragment:hx,normal_pars_vertex:dx,normal_vertex:fx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:xx,opaque_fragment:vx,packing:yx,premultiplied_alpha_fragment:Mx,project_vertex:Sx,dithering_fragment:Tx,dithering_pars_fragment:Ex,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:wx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Lx,skinning_pars_vertex:Px,skinning_vertex:Ix,skinnormal_vertex:Dx,specularmap_fragment:Ux,specularmap_pars_fragment:Ox,tonemapping_fragment:Fx,tonemapping_pars_fragment:Vx,transmission_fragment:zx,transmission_pars_fragment:Bx,uv_pars_fragment:Gx,uv_pars_vertex:Hx,uv_vertex:kx,worldpos_vertex:Wx,background_vert:Xx,background_frag:qx,backgroundCube_vert:Yx,backgroundCube_frag:jx,cube_vert:$x,cube_frag:Kx,depth_vert:Zx,depth_frag:Jx,distanceRGBA_vert:Qx,distanceRGBA_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:c0,meshmatcap_vert:l0,meshmatcap_frag:u0,meshnormal_vert:h0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:x0,points_vert:v0,points_frag:y0,shadow_vert:M0,shadow_frag:S0,sprite_vert:T0,sprite_frag:E0},me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},oi={basic:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:fn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:fn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:fn([me.points,me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:fn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:fn([me.common,me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:fn([me.sprite,me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:fn([me.common,me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:fn([me.lights,me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};oi.physical={uniforms:fn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const To={r:0,b:0,g:0};function A0(i,e,t,n,s,r,a){const o=new ke(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(p,f){let T=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?_(o,c):y&&y.isColor&&(_(y,1),T=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Jo)?(u===void 0&&(u=new Gn(new Xr(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:or(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=_t.getTransfer(y.colorSpace)!==Tt,(h!==y||d!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Gn(new na(2,2),new Ci({name:"BackgroundMaterial",uniforms:or(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=_t.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(To,ad(i)),n.buffers.color.setClear(To.r,To.g,To.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function N0(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,u=!1;function h(D,j,W,te,K){let Q=!1;if(a){const ee=_(te,W,j);l!==ee&&(l=ee,m(l.object)),Q=f(D,te,W,K),Q&&T(D,te,W,K)}else{const ee=j.wireframe===!0;(l.geometry!==te.id||l.program!==W.id||l.wireframe!==ee)&&(l.geometry=te.id,l.program=W.id,l.wireframe=ee,Q=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,Y(D,j,W,te),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,j,W){const te=W.wireframe===!0;let K=o[D.id];K===void 0&&(K={},o[D.id]=K);let Q=K[j.id];Q===void 0&&(Q={},K[j.id]=Q);let ee=Q[te];return ee===void 0&&(ee=p(d()),Q[te]=ee),ee}function p(D){const j=[],W=[],te=[];for(let K=0;K<s;K++)j[K]=0,W[K]=0,te[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:W,attributeDivisors:te,object:D,attributes:{},index:null}}function f(D,j,W,te){const K=l.attributes,Q=j.attributes;let ee=0;const pe=W.getAttributes();for(const _e in pe)if(pe[_e].location>=0){const q=K[_e];let oe=Q[_e];if(oe===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;ee++}return l.attributesNum!==ee||l.index!==te}function T(D,j,W,te){const K={},Q=j.attributes;let ee=0;const pe=W.getAttributes();for(const _e in pe)if(pe[_e].location>=0){let q=Q[_e];q===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(q=D.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),K[_e]=oe,ee++}l.attributes=K,l.attributesNum=ee,l.index=te}function y(){const D=l.newAttributes;for(let j=0,W=D.length;j<W;j++)D[j]=0}function E(D){I(D,0)}function I(D,j){const W=l.newAttributes,te=l.enabledAttributes,K=l.attributeDivisors;W[D]=1,te[D]===0&&(i.enableVertexAttribArray(D),te[D]=1),K[D]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,j),K[D]=j)}function R(){const D=l.newAttributes,j=l.enabledAttributes;for(let W=0,te=j.length;W<te;W++)j[W]!==D[W]&&(i.disableVertexAttribArray(W),j[W]=0)}function N(D,j,W,te,K,Q,ee){ee===!0?i.vertexAttribIPointer(D,j,W,K,Q):i.vertexAttribPointer(D,j,W,te,K,Q)}function Y(D,j,W,te){if(n.isWebGL2===!1&&(D.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const K=te.attributes,Q=W.getAttributes(),ee=j.defaultAttributeValues;for(const pe in Q){const _e=Q[pe];if(_e.location>=0){let Ge=K[pe];if(Ge===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(Ge=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(Ge=D.instanceColor)),Ge!==void 0){const q=Ge.normalized,oe=Ge.itemSize,Te=t.get(Ge);if(Te===void 0)continue;const Fe=Te.buffer,ze=Te.type,Ae=Te.bytesPerElement,at=n.isWebGL2===!0&&(ze===i.INT||ze===i.UNSIGNED_INT||Ge.gpuType===Hh);if(Ge.isInterleavedBufferAttribute){const je=Ge.data,V=je.stride,Ht=Ge.offset;if(je.isInstancedInterleavedBuffer){for(let Ue=0;Ue<_e.locationSize;Ue++)I(_e.location+Ue,je.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Ue=0;Ue<_e.locationSize;Ue++)E(_e.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ue=0;Ue<_e.locationSize;Ue++)N(_e.location+Ue,oe/_e.locationSize,ze,q,V*Ae,(Ht+oe/_e.locationSize*Ue)*Ae,at)}else{if(Ge.isInstancedBufferAttribute){for(let je=0;je<_e.locationSize;je++)I(_e.location+je,Ge.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let je=0;je<_e.locationSize;je++)E(_e.location+je);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let je=0;je<_e.locationSize;je++)N(_e.location+je,oe/_e.locationSize,ze,q,oe*Ae,oe/_e.locationSize*je*Ae,at)}}else if(ee!==void 0){const q=ee[pe];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(_e.location,q);break;case 3:i.vertexAttrib3fv(_e.location,q);break;case 4:i.vertexAttrib4fv(_e.location,q);break;default:i.vertexAttrib1fv(_e.location,q)}}}}R()}function ie(){$();for(const D in o){const j=o[D];for(const W in j){const te=j[W];for(const K in te)g(te[K].object),delete te[K];delete j[W]}delete o[D]}}function v(D){if(o[D.id]===void 0)return;const j=o[D.id];for(const W in j){const te=j[W];for(const K in te)g(te[K].object),delete te[K];delete j[W]}delete o[D.id]}function w(D){for(const j in o){const W=o[j];if(W[D.id]===void 0)continue;const te=W[D.id];for(const K in te)g(te[K].object),delete te[K];delete W[D.id]}}function $(){ue(),u=!0,l!==c&&(l=c,m(l.object))}function ue(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:ue,dispose:ie,releaseStatesOfGeometry:v,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:E,disableUnusedAttributes:R}}function b0(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function w0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,E=a||e.has("OES_texture_float"),I=y&&E,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:I,maxSamples:R}}function R0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ti,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const T=r?0:n,y=T*4;let E=f.clippingState||null;c.value=E,E=u(g,d,y,m);for(let I=0;I!==y;++I)E[I]=t[I];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,E=m;y!==_;++y,E+=4)a.copy(h[y]).applyMatrix4(T,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function C0(i){let e=new WeakMap;function t(a,o){return o===mc?a.mapping=er:o===gc&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===mc||o===gc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Hg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Hc extends cd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,Tu=[.125,.215,.35,.446,.526,.582],cs=20,Wa=new Hc,Eu=new ke;let Xa=null,qa=0,Ya=0;const rs=(1+Math.sqrt(5))/2,Gs=1/rs,Au=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,rs,Gs),new P(0,rs,-Gs),new P(Gs,0,rs),new P(-Gs,0,rs),new P(rs,Gs,0),new P(-rs,Gs,0)];class Nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:nr,format:Qn,colorSpace:In,depthBuffer:!1},s=bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(r)),this._blurMaterial=P0(r,e,t)}return s}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,s){const o=new yn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Eu),u.toneMapping=ti,u.autoClear=!1;const m=new Wr({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new Gn(new Xr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Eu),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):T===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const y=this._cubeSize;Eo(s,T*y,f>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Au[(s-1)%Au.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Gn(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cs-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):cs;p>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${cs}`);const f=[];let T=0;for(let N=0;N<cs;++N){const Y=N/_,ie=Math.exp(-Y*Y/2);f.push(ie),N===0?T+=ie:N<p&&(T+=2*ie)}for(let N=0;N<f.length;N++)f[N]=f[N]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const E=this._sizeLods[s],I=3*E*(s>y-Hs?s-y+Hs:0),R=4*(this._cubeSize-E);Eo(t,I,R,3*E,2*E),c.setRenderTarget(t),c.render(h,Wa)}}function L0(i){const e=[],t=[],n=[];let s=i;const r=i-Hs+1+Tu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Hs?c=Tu[a-i+Hs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,T=new Float32Array(_*g*m),y=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let R=0;R<m;R++){const N=R%3*2/3-1,Y=R>2?0:-1,ie=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];T.set(ie,_*g*R),y.set(d,p*g*R);const v=[R,R,R,R,R,R];E.set(v,f*g*R)}const I=new kn;I.setAttribute("position",new ni(T,_)),I.setAttribute("uv",new ni(y,p)),I.setAttribute("faceIndex",new ni(E,f)),e.push(I),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bu(i,e,t){const n=new ms(i,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function P0(i,e,t){const n=new Float32Array(cs),s=new P(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function wu(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ru(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function I0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===mc||c===gc,u=c===er||c===tr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Nu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Nu(i));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U0(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let y=0,E=T.length;y<E;y+=3){const I=T[y+0],R=T[y+1],N=T[y+2];d.push(I,R,R,N,N,I)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const I=y+0,R=y+1,N=y+2;d.push(I,R,R,N,N,I)}}else return;const p=new(ed(d)?od:rd)(d,1);p.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function O0(i,e,t,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(r,g,o,m*c),t.update(g,r,1)}function h(m,g,_){if(_===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,_),t.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let f=0;for(let T=0;T<_;T++)f+=g[T];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function F0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function V0(i,e){return i[0]-e[0]}function z0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function B0(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new ut,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let j=function(){ue.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var m=j;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],Y=u.morphAttributes.color||[];let ie=0;y===!0&&(ie=1),E===!0&&(ie=2),I===!0&&(ie=3);let v=u.attributes.position.count*ie,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const $=new Float32Array(v*w*4*_),ue=new zc($,v,w,_);ue.type=ci,ue.needsUpdate=!0;const D=ie*4;for(let W=0;W<_;W++){const te=R[W],K=N[W],Q=Y[W],ee=v*w*4*W;for(let pe=0;pe<te.count;pe++){const _e=pe*D;y===!0&&(a.fromBufferAttribute(te,pe),$[ee+_e+0]=a.x,$[ee+_e+1]=a.y,$[ee+_e+2]=a.z,$[ee+_e+3]=0),E===!0&&(a.fromBufferAttribute(K,pe),$[ee+_e+4]=a.x,$[ee+_e+5]=a.y,$[ee+_e+6]=a.z,$[ee+_e+7]=0),I===!0&&(a.fromBufferAttribute(Q,pe),$[ee+_e+8]=a.x,$[ee+_e+9]=a.y,$[ee+_e+10]=a.z,$[ee+_e+11]=Q.itemSize===4?a.w:1)}}p={count:_,texture:ue,size:new Ne(v,w)},r.set(u,p),u.addEventListener("dispose",j)}let f=0;for(let y=0;y<d.length;y++)f+=d[y];const T=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[u.id]=_}for(let E=0;E<g;E++){const I=_[E];I[0]=E,I[1]=d[E]}_.sort(z0);for(let E=0;E<8;E++)E<g&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(V0);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let T=0;for(let E=0;E<8;E++){const I=o[E],R=I[0],N=I[1];R!==Number.MAX_SAFE_INTEGER&&N?(p&&u.getAttribute("morphTarget"+E)!==p[R]&&u.setAttribute("morphTarget"+E,p[R]),f&&u.getAttribute("morphNormal"+E)!==f[R]&&u.setAttribute("morphNormal"+E,f[R]),s[E]=N,T+=N):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),f&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const y=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function G0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class qr extends mn{constructor(e,t,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:hs,u!==hs&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hs&&(n=Hi),n===void 0&&u===ir&&(n=us),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hd=new mn,dd=new qr(1,1);dd.compareFunction=Jh;const fd=new zc,pd=new Ag,md=new ld,Cu=[],Lu=[],Pu=new Float32Array(16),Iu=new Float32Array(9),Du=new Float32Array(4);function ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Cu[s];if(r===void 0&&(r=new Float32Array(s),Cu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ia(i,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function H0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),$t(t,n)}}function Y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Iu.set(n),i.uniformMatrix3fv(this.addr,!1,Iu),$t(t,n)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),$t(t,n)}}function $0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function iv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?dd:hd;t.setTexture2D(e||r,s)}function sv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pd,s)}function rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||md,s)}function ov(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fd,s)}function av(i){switch(i){case 5126:return H0;case 35664:return k0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return j0;case 5124:case 35670:return $0;case 35667:case 35671:return K0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return ov}}function cv(i,e){i.uniform1fv(this.addr,e)}function lv(i,e){const t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function uv(i,e){const t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function hv(i,e){const t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function dv(i,e){const t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fv(i,e){const t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pv(i,e){const t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mv(i,e){i.uniform1iv(this.addr,e)}function gv(i,e){i.uniform2iv(this.addr,e)}function _v(i,e){i.uniform3iv(this.addr,e)}function xv(i,e){i.uniform4iv(this.addr,e)}function vv(i,e){i.uniform1uiv(this.addr,e)}function yv(i,e){i.uniform2uiv(this.addr,e)}function Mv(i,e){i.uniform3uiv(this.addr,e)}function Sv(i,e){i.uniform4uiv(this.addr,e)}function Tv(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||hd,r[a])}function Ev(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pd,r[a])}function Av(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||md,r[a])}function Nv(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fd,r[a])}function bv(i){switch(i){case 5126:return cv;case 35664:return lv;case 35665:return uv;case 35666:return hv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Nv}}class wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=av(t.type)}}class Rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bv(t.type)}}class Cv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Uu(i,e){i.seq.push(e),i.map[e.id]=e}function Lv(i,e,t){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),a=ja.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Uu(t,l===void 0?new wv(o,i,e):new Rv(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Cv(o),Uu(t,h)),t=h}}}class Co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Lv(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ou(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Pv=37297;let Iv=0;function Dv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Uv(i){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i);let n;switch(e===t?n="":e===Uo&&t===Do?n="LinearDisplayP3ToLinearSRGB":e===Do&&t===Uo&&(n="LinearSRGBToLinearDisplayP3"),i){case In:case Qo:return[n,"LinearTransferOETF"];case Qt:case Oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Dv(i.getShaderSource(e),a)}else return s}function Ov(i,e){const t=Uv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fv(i,e){let t;switch(e){case Oh:t="Linear";break;case Fh:t="Reinhard";break;case Vh:t="OptimizedCineon";break;case zh:t="ACESFilmic";break;case Bh:t="AgX";break;case Wm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function Bv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ks(i){return i!==""}function Vu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(Hv,Wv)}const kv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Wv(i,e){let t=tt[e];if(t===void 0){const n=kv.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}const Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace(Xv,qv)}function qv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function jv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Kv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case km:e="ENVMAP_BLENDING_ADD";break}return e}function Zv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Yv(t),l=jv(t),u=$v(t),h=Kv(t),d=Zv(t),m=t.isWebGL2?"":Vv(t),g=zv(t),_=Bv(r),p=s.createProgram();let f,T,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ks).join(`
`),f.length>0&&(f+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ks).join(`
`),T.length>0&&(T+=`
`)):(f=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),T=[m,Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?tt.tonemapping_pars_fragment:"",t.toneMapping!==ti?Fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Ov("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=Mc(a),a=Vu(a,t),a=zu(a,t),o=Mc(o),o=Vu(o,t),o=zu(o,t),a=Bu(a),o=Bu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const E=y+f+a,I=y+T+o,R=Ou(s,s.VERTEX_SHADER,E),N=Ou(s,s.FRAGMENT_SHADER,I);s.attachShader(p,R),s.attachShader(p,N),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function Y($){if(i.debug.checkShaderErrors){const ue=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(R).trim(),j=s.getShaderInfoLog(N).trim();let W=!0,te=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,N);else{const K=Fu(s,R,"vertex"),Q=Fu(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+ue+`
`+K+`
`+Q)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(D===""||j==="")&&(te=!1);te&&($.diagnostics={runnable:W,programLog:ue,vertexShader:{log:D,prefix:f},fragmentShader:{log:j,prefix:T}})}s.deleteShader(R),s.deleteShader(N),ie=new Co(s,p),v=Gv(s,p)}let ie;this.getUniforms=function(){return ie===void 0&&Y(this),ie};let v;this.getAttributes=function(){return v===void 0&&Y(this),v};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,Pv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=N,this}let Qv=0;class ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ty(e),t.set(e,n)),n}}class ty{constructor(e){this.id=Qv++,this.code=e,this.usedTimes=0}}function ny(i,e,t,n,s,r,a){const o=new id,c=new ey,l=new Set,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,w,$,ue,D){const j=ue.fog,W=D.geometry,te=v.isMeshStandardMaterial?ue.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||te),Q=K&&K.mapping===Jo?K.image.height:null,ee=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=pe!==void 0?pe.length:0;let Ge=0;W.morphAttributes.position!==void 0&&(Ge=1),W.morphAttributes.normal!==void 0&&(Ge=2),W.morphAttributes.color!==void 0&&(Ge=3);let q,oe,Te,Fe;if(ee){const ot=oi[ee];q=ot.vertexShader,oe=ot.fragmentShader}else q=v.vertexShader,oe=v.fragmentShader,c.update(v),Te=c.getVertexShaderID(v),Fe=c.getFragmentShaderID(v);const ze=i.getRenderTarget(),Ae=D.isInstancedMesh===!0,at=D.isBatchedMesh===!0,je=!!v.map,V=!!v.matcap,Ht=!!K,Ue=!!v.aoMap,We=!!v.lightMap,Re=!!v.bumpMap,St=!!v.normalMap,$e=!!v.displacementMap,S=!!v.emissiveMap,x=!!v.metalnessMap,B=!!v.roughnessMap,de=v.anisotropy>0,ne=v.clearcoat>0,ce=v.iridescence>0,be=v.sheen>0,xe=v.transmission>0,Ee=de&&!!v.anisotropyMap,Ve=ne&&!!v.clearcoatMap,Ke=ne&&!!v.clearcoatNormalMap,se=ne&&!!v.clearcoatRoughnessMap,ht=ce&&!!v.iridescenceMap,nt=ce&&!!v.iridescenceThicknessMap,Xe=be&&!!v.sheenColorMap,Ie=be&&!!v.sheenRoughnessMap,ye=!!v.specularMap,Qe=!!v.specularColorMap,b=!!v.specularIntensityMap,fe=xe&&!!v.transmissionMap,ve=xe&&!!v.thicknessMap,De=!!v.gradientMap,A=!!v.alphaMap,he=v.alphaTest>0,re=!!v.alphaHash,we=!!v.extensions;let Oe=ti;v.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const ct={isWebGL2:h,shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:oe,defines:v.defines,customVertexShaderID:Te,customFragmentShaderID:Fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:at,instancing:Ae,instancingColor:Ae&&D.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:In,alphaToCoverage:!!v.alphaToCoverage,map:je,matcap:V,envMap:Ht,envMapMode:Ht&&K.mapping,envMapCubeUVHeight:Q,aoMap:Ue,lightMap:We,bumpMap:Re,normalMap:St,displacementMap:m&&$e,emissiveMap:S,normalMapObjectSpace:St&&v.normalMapType===Kh,normalMapTangentSpace:St&&v.normalMapType===ps,metalnessMap:x,roughnessMap:B,anisotropy:de,anisotropyMap:Ee,clearcoat:ne,clearcoatMap:Ve,clearcoatNormalMap:Ke,clearcoatRoughnessMap:se,iridescence:ce,iridescenceMap:ht,iridescenceThicknessMap:nt,sheen:be,sheenColorMap:Xe,sheenRoughnessMap:Ie,specularMap:ye,specularColorMap:Qe,specularIntensityMap:b,transmission:xe,transmissionMap:fe,thicknessMap:ve,gradientMap:De,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:A,alphaTest:he,alphaHash:re,combine:v.combine,mapUv:je&&p(v.map.channel),aoMapUv:Ue&&p(v.aoMap.channel),lightMapUv:We&&p(v.lightMap.channel),bumpMapUv:Re&&p(v.bumpMap.channel),normalMapUv:St&&p(v.normalMap.channel),displacementMapUv:$e&&p(v.displacementMap.channel),emissiveMapUv:S&&p(v.emissiveMap.channel),metalnessMapUv:x&&p(v.metalnessMap.channel),roughnessMapUv:B&&p(v.roughnessMap.channel),anisotropyMapUv:Ee&&p(v.anisotropyMap.channel),clearcoatMapUv:Ve&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&p(v.sheenRoughnessMap.channel),specularMapUv:ye&&p(v.specularMap.channel),specularColorMapUv:Qe&&p(v.specularColorMap.channel),specularIntensityMapUv:b&&p(v.specularIntensityMap.channel),transmissionMapUv:fe&&p(v.transmissionMap.channel),thicknessMapUv:ve&&p(v.thicknessMap.channel),alphaMapUv:A&&p(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||de),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(je||A),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ge,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:je&&v.map.isVideoTexture===!0&&_t.getTransfer(v.map.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ni,flipSided:v.side===Sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:we&&v.extensions.derivatives===!0,extensionFragDepth:we&&v.extensions.fragDepth===!0,extensionDrawBuffers:we&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function T(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const $ in v.defines)w.push($),w.push(v.defines[$]);return v.isRawShaderMaterial===!1&&(y(w,v),E(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function E(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),v.push(o.mask)}function I(v){const w=_[v.type];let $;if(w){const ue=oi[w];$=Vg.clone(ue.uniforms)}else $=v.uniforms;return $}function R(v,w){let $;for(let ue=0,D=u.length;ue<D;ue++){const j=u[ue];if(j.cacheKey===w){$=j,++$.usedTimes;break}}return $===void 0&&($=new Jv(i,w,v,r),u.push($)),$}function N(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),v.destroy()}}function Y(v){c.remove(v)}function ie(){c.dispose()}return{getParameters:f,getProgramCacheKey:T,getUniforms:I,acquireProgram:R,releaseProgram:N,releaseShaderCache:Y,programs:u,dispose:ie}}function iy(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function sy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ku(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function o(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||sy),n.length>1&&n.sort(d||Hu),s.length>1&&s.sort(d||Hu)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function ry(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ku,i.set(n,[a])):s>=r.length?(a=new ku,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function oy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function ay(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cy=0;function ly(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uy(i,e){const t=new oy,n=ay(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,a=new wt,o=new wt;function c(u,h){let d=0,m=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let _=0,p=0,f=0,T=0,y=0,E=0,I=0,R=0,N=0,Y=0,ie=0;u.sort(ly);const v=h===!0?Math.PI:1;for(let $=0,ue=u.length;$<ue;$++){const D=u[$],j=D.color,W=D.intensity,te=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=j.r*W*v,m+=j.g*W*v,g+=j.b*W*v;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(D.sh.coefficients[Q],W);ie++}else if(D.isDirectionalLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*v),D.castShadow){const ee=D.shadow,pe=n.get(D);pe.shadowBias=ee.bias,pe.shadowNormalBias=ee.normalBias,pe.shadowRadius=ee.radius,pe.shadowMapSize=ee.mapSize,s.directionalShadow[_]=pe,s.directionalShadowMap[_]=K,s.directionalShadowMatrix[_]=D.shadow.matrix,E++}s.directional[_]=Q,_++}else if(D.isSpotLight){const Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(j).multiplyScalar(W*v),Q.distance=te,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,s.spot[f]=Q;const ee=D.shadow;if(D.map&&(s.spotLightMap[N]=D.map,N++,ee.updateMatrices(D),D.castShadow&&Y++),s.spotLightMatrix[f]=ee.matrix,D.castShadow){const pe=n.get(D);pe.shadowBias=ee.bias,pe.shadowNormalBias=ee.normalBias,pe.shadowRadius=ee.radius,pe.shadowMapSize=ee.mapSize,s.spotShadow[f]=pe,s.spotShadowMap[f]=K,R++}f++}else if(D.isRectAreaLight){const Q=t.get(D);Q.color.copy(j).multiplyScalar(W),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),s.rectArea[T]=Q,T++}else if(D.isPointLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*v),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const ee=D.shadow,pe=n.get(D);pe.shadowBias=ee.bias,pe.shadowNormalBias=ee.normalBias,pe.shadowRadius=ee.radius,pe.shadowMapSize=ee.mapSize,pe.shadowCameraNear=ee.camera.near,pe.shadowCameraFar=ee.camera.far,s.pointShadow[p]=pe,s.pointShadowMap[p]=K,s.pointShadowMatrix[p]=D.shadow.matrix,I++}s.point[p]=Q,p++}else if(D.isHemisphereLight){const Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(W*v),Q.groundColor.copy(D.groundColor).multiplyScalar(W*v),s.hemi[y]=Q,y++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==_||w.pointLength!==p||w.spotLength!==f||w.rectAreaLength!==T||w.hemiLength!==y||w.numDirectionalShadows!==E||w.numPointShadows!==I||w.numSpotShadows!==R||w.numSpotMaps!==N||w.numLightProbes!==ie)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=T,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+N-Y,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=ie,w.directionalLength=_,w.pointLength=p,w.spotLength=f,w.rectAreaLength=T,w.hemiLength=y,w.numDirectionalShadows=E,w.numPointShadows=I,w.numSpotShadows=R,w.numSpotMaps=N,w.numLightProbes=ie,s.version=cy++)}function l(u,h){let d=0,m=0,g=0,_=0,p=0;const f=h.matrixWorldInverse;for(let T=0,y=u.length;T<y;T++){const E=u[T];if(E.isDirectionalLight){const I=s.directional[d];I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),d++}else if(E.isSpotLight){const I=s.spot[g];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const I=s.rectArea[_];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const I=s.point[m];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const I=s.hemi[p];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function Wu(i,e){const t=new uy(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function hy(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Wu(i,e),t.set(r,[c])):a>=o.length?(c=new Wu(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class dy extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fy extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
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
}`;function gy(i,e,t){let n=new Gc;const s=new Ne,r=new Ne,a=new ut,o=new dy({depthPacking:eg}),c=new fy,l={},u=t.maxTextureSize,h={[qi]:Sn,[Sn]:qi,[Ni]:Ni},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:py,fragmentShader:my}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let f=this.type;this.render=function(R,N,Y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const ie=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),$=i.state;$.setBlending(ki),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ue=f!==Si&&this.type===Si,D=f===Si&&this.type!==Si;for(let j=0,W=R.length;j<W;j++){const te=R[j],K=te.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const Q=K.getFrameExtents();if(s.multiply(Q),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,K.mapSize.y=r.y)),K.map===null||ue===!0||D===!0){const pe=this.type!==Si?{minFilter:kt,magFilter:kt}:{};K.map!==null&&K.map.dispose(),K.map=new ms(s.x,s.y,pe),K.map.texture.name=te.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ee=K.getViewportCount();for(let pe=0;pe<ee;pe++){const _e=K.getViewport(pe);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),$.viewport(a),K.updateMatrices(te,pe),n=K.getFrustum(),E(N,Y,K.camera,te,this.type)}K.isPointLightShadow!==!0&&this.type===Si&&T(K,Y),K.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(ie,v,w)};function T(R,N){const Y=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ms(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(N,null,Y,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(N,null,Y,m,_,null)}function y(R,N,Y,ie){let v=null;const w=Y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)v=w;else if(v=Y.isPointLight===!0?c:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const $=v.uuid,ue=N.uuid;let D=l[$];D===void 0&&(D={},l[$]=D);let j=D[ue];j===void 0&&(j=v.clone(),D[ue]=j,N.addEventListener("dispose",I)),v=j}if(v.visible=N.visible,v.wireframe=N.wireframe,ie===Si?v.side=N.shadowSide!==null?N.shadowSide:N.side:v.side=N.shadowSide!==null?N.shadowSide:h[N.side],v.alphaMap=N.alphaMap,v.alphaTest=N.alphaTest,v.map=N.map,v.clipShadows=N.clipShadows,v.clippingPlanes=N.clippingPlanes,v.clipIntersection=N.clipIntersection,v.displacementMap=N.displacementMap,v.displacementScale=N.displacementScale,v.displacementBias=N.displacementBias,v.wireframeLinewidth=N.wireframeLinewidth,v.linewidth=N.linewidth,Y.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const $=i.properties.get(v);$.light=Y}return v}function E(R,N,Y,ie,v){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Si)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld);const ue=e.update(R),D=R.material;if(Array.isArray(D)){const j=ue.groups;for(let W=0,te=j.length;W<te;W++){const K=j[W],Q=D[K.materialIndex];if(Q&&Q.visible){const ee=y(R,Q,ie,v);R.onBeforeShadow(i,R,N,Y,ue,ee,K),i.renderBufferDirect(Y,null,ue,ee,R,K),R.onAfterShadow(i,R,N,Y,ue,ee,K)}}}else if(D.visible){const j=y(R,D,ie,v);R.onBeforeShadow(i,R,N,Y,ue,j,null),i.renderBufferDirect(Y,null,ue,j,R,null),R.onAfterShadow(i,R,N,Y,ue,j,null)}}const $=R.children;for(let ue=0,D=$.length;ue<D;ue++)E($[ue],N,Y,ie,v)}function I(R){R.target.removeEventListener("dispose",I);for(const Y in l){const ie=l[Y],v=R.target.uuid;v in ie&&(ie[v].dispose(),delete ie[v])}}}function _y(i,e,t){const n=t.isWebGL2;function s(){let A=!1;const he=new ut;let re=null;const we=new ut(0,0,0,0);return{setMask:function(Oe){re!==Oe&&!A&&(i.colorMask(Oe,Oe,Oe,Oe),re=Oe)},setLocked:function(Oe){A=Oe},setClear:function(Oe,ct,ot,xt,tn){tn===!0&&(Oe*=xt,ct*=xt,ot*=xt),he.set(Oe,ct,ot,xt),we.equals(he)===!1&&(i.clearColor(Oe,ct,ot,xt),we.copy(he))},reset:function(){A=!1,re=null,we.set(-1,0,0,0)}}}function r(){let A=!1,he=null,re=null,we=null;return{setTest:function(Oe){Oe?Ae(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Oe){he!==Oe&&!A&&(i.depthMask(Oe),he=Oe)},setFunc:function(Oe){if(re!==Oe){switch(Oe){case Um:i.depthFunc(i.NEVER);break;case Om:i.depthFunc(i.ALWAYS);break;case Fm:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Vm:i.depthFunc(i.EQUAL);break;case zm:i.depthFunc(i.GEQUAL);break;case Bm:i.depthFunc(i.GREATER);break;case Gm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Oe}},setLocked:function(Oe){A=Oe},setClear:function(Oe){we!==Oe&&(i.clearDepth(Oe),we=Oe)},reset:function(){A=!1,he=null,re=null,we=null}}}function a(){let A=!1,he=null,re=null,we=null,Oe=null,ct=null,ot=null,xt=null,tn=null;return{setTest:function(lt){A||(lt?Ae(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(lt){he!==lt&&!A&&(i.stencilMask(lt),he=lt)},setFunc:function(lt,It,hn){(re!==lt||we!==It||Oe!==hn)&&(i.stencilFunc(lt,It,hn),re=lt,we=It,Oe=hn)},setOp:function(lt,It,hn){(ct!==lt||ot!==It||xt!==hn)&&(i.stencilOp(lt,It,hn),ct=lt,ot=It,xt=hn)},setLocked:function(lt){A=lt},setClear:function(lt){tn!==lt&&(i.clearStencil(lt),tn=lt)},reset:function(){A=!1,he=null,re=null,we=null,Oe=null,ct=null,ot=null,xt=null,tn=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,T=null,y=null,E=null,I=null,R=null,N=null,Y=null,ie=new ke(0,0,0),v=0,w=!1,$=null,ue=null,D=null,j=null,W=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=Q>=2);let pe=null,_e={};const Ge=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),oe=new ut().fromArray(Ge),Te=new ut().fromArray(q);function Fe(A,he,re,we){const Oe=new Uint8Array(4),ct=i.createTexture();i.bindTexture(A,ct),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<re;ot++)n&&(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(he+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return ct}const ze={};ze[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ze[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ae(i.DEPTH_TEST),c.setFunc(Po),$e(!1),S(El),Ae(i.CULL_FACE),Re(ki);function Ae(A){d[A]!==!0&&(i.enable(A),d[A]=!0)}function at(A){d[A]!==!1&&(i.disable(A),d[A]=!1)}function je(A,he){return m[A]!==he?(i.bindFramebuffer(A,he),m[A]=he,n&&(A===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=he),A===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function V(A,he){let re=_,we=!1;if(A)if(re=g.get(he),re===void 0&&(re=[],g.set(he,re)),A.isWebGLMultipleRenderTargets){const Oe=A.texture;if(re.length!==Oe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,ot=Oe.length;ct<ot;ct++)re[ct]=i.COLOR_ATTACHMENT0+ct;re.length=Oe.length,we=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,we=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,we=!0);we&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Ht(A){return p!==A?(i.useProgram(A),p=A,!0):!1}const Ue={[as]:i.FUNC_ADD,[ym]:i.FUNC_SUBTRACT,[Mm]:i.FUNC_REVERSE_SUBTRACT};if(n)Ue[wl]=i.MIN,Ue[Rl]=i.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(Ue[wl]=A.MIN_EXT,Ue[Rl]=A.MAX_EXT)}const We={[Sm]:i.ZERO,[Tm]:i.ONE,[Em]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[Cm]:i.SRC_ALPHA_SATURATE,[wm]:i.DST_COLOR,[Nm]:i.DST_ALPHA,[Am]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[Rm]:i.ONE_MINUS_DST_COLOR,[bm]:i.ONE_MINUS_DST_ALPHA,[Lm]:i.CONSTANT_COLOR,[Pm]:i.ONE_MINUS_CONSTANT_COLOR,[Im]:i.CONSTANT_ALPHA,[Dm]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(A,he,re,we,Oe,ct,ot,xt,tn,lt){if(A===ki){f===!0&&(at(i.BLEND),f=!1);return}if(f===!1&&(Ae(i.BLEND),f=!0),A!==vm){if(A!==T||lt!==w){if((y!==as||R!==as)&&(i.blendEquation(i.FUNC_ADD),y=as,R=as),lt)switch(A){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}E=null,I=null,N=null,Y=null,ie.set(0,0,0),v=0,T=A,w=lt}return}Oe=Oe||he,ct=ct||re,ot=ot||we,(he!==y||Oe!==R)&&(i.blendEquationSeparate(Ue[he],Ue[Oe]),y=he,R=Oe),(re!==E||we!==I||ct!==N||ot!==Y)&&(i.blendFuncSeparate(We[re],We[we],We[ct],We[ot]),E=re,I=we,N=ct,Y=ot),(xt.equals(ie)===!1||tn!==v)&&(i.blendColor(xt.r,xt.g,xt.b,tn),ie.copy(xt),v=tn),T=A,w=!1}function St(A,he){A.side===Ni?at(i.CULL_FACE):Ae(i.CULL_FACE);let re=A.side===Sn;he&&(re=!re),$e(re),A.blending===Ys&&A.transparent===!1?Re(ki):Re(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),o.setMask(A.colorWrite);const we=A.stencilWrite;l.setTest(we),we&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),B(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(A){$!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),$=A)}function S(A){A!==gm?(Ae(i.CULL_FACE),A!==ue&&(A===El?i.cullFace(i.BACK):A===_m?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),ue=A}function x(A){A!==D&&(K&&i.lineWidth(A),D=A)}function B(A,he,re){A?(Ae(i.POLYGON_OFFSET_FILL),(j!==he||W!==re)&&(i.polygonOffset(he,re),j=he,W=re)):at(i.POLYGON_OFFSET_FILL)}function de(A){A?Ae(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function ne(A){A===void 0&&(A=i.TEXTURE0+te-1),pe!==A&&(i.activeTexture(A),pe=A)}function ce(A,he,re){re===void 0&&(pe===null?re=i.TEXTURE0+te-1:re=pe);let we=_e[re];we===void 0&&(we={type:void 0,texture:void 0},_e[re]=we),(we.type!==A||we.texture!==he)&&(pe!==re&&(i.activeTexture(re),pe=re),i.bindTexture(A,he||ze[A]),we.type=A,we.texture=he)}function be(){const A=_e[pe];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ve(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ke(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Xe(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Qe(A){oe.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),oe.copy(A))}function b(A){Te.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),Te.copy(A))}function fe(A,he){let re=h.get(he);re===void 0&&(re=new WeakMap,h.set(he,re));let we=re.get(A);we===void 0&&(we=i.getUniformBlockIndex(he,A.name),re.set(A,we))}function ve(A,he){const we=h.get(he).get(A);u.get(he)!==we&&(i.uniformBlockBinding(he,we,A.__bindingPointIndex),u.set(he,we))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},pe=null,_e={},m={},g=new WeakMap,_=[],p=null,f=!1,T=null,y=null,E=null,I=null,R=null,N=null,Y=null,ie=new ke(0,0,0),v=0,w=!1,$=null,ue=null,D=null,j=null,W=null,oe.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ae,disable:at,bindFramebuffer:je,drawBuffers:V,useProgram:Ht,setBlending:Re,setMaterial:St,setFlipSided:$e,setCullFace:S,setLineWidth:x,setPolygonOffset:B,setScissorTest:de,activeTexture:ne,bindTexture:ce,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Ee,texImage2D:Ie,texImage3D:ye,updateUBOMapping:fe,uniformBlockBinding:ve,texStorage2D:nt,texStorage3D:Xe,texSubImage2D:Ve,texSubImage3D:Ke,compressedTexSubImage2D:se,compressedTexSubImage3D:ht,scissor:Qe,viewport:b,reset:De}}function xy(i,e,t,n,s,r,a){const o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):Vo("canvas")}function _(S,x,B,de){let ne=1;if((S.width>de||S.height>de)&&(ne=de/Math.max(S.width,S.height)),ne<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ce=x?Fo:Math.floor,be=ce(ne*S.width),xe=ce(ne*S.height);h===void 0&&(h=g(be,xe));const Ee=B?g(be,xe):h;return Ee.width=be,Ee.height=xe,Ee.getContext("2d").drawImage(S,0,0,be,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+be+"x"+xe+")."),Ee}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return yc(S.width)&&yc(S.height)}function f(S){return o?!1:S.wrapS!==Jn||S.wrapT!==Jn||S.minFilter!==kt&&S.minFilter!==xn}function T(S,x){return S.generateMipmaps&&x&&S.minFilter!==kt&&S.minFilter!==xn}function y(S){i.generateMipmap(S)}function E(S,x,B,de,ne=!1){if(o===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce=x;if(x===i.RED&&(B===i.FLOAT&&(ce=i.R32F),B===i.HALF_FLOAT&&(ce=i.R16F),B===i.UNSIGNED_BYTE&&(ce=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(ce=i.R8UI),B===i.UNSIGNED_SHORT&&(ce=i.R16UI),B===i.UNSIGNED_INT&&(ce=i.R32UI),B===i.BYTE&&(ce=i.R8I),B===i.SHORT&&(ce=i.R16I),B===i.INT&&(ce=i.R32I)),x===i.RG&&(B===i.FLOAT&&(ce=i.RG32F),B===i.HALF_FLOAT&&(ce=i.RG16F),B===i.UNSIGNED_BYTE&&(ce=i.RG8)),x===i.RGBA){const be=ne?Io:_t.getTransfer(de);B===i.FLOAT&&(ce=i.RGBA32F),B===i.HALF_FLOAT&&(ce=i.RGBA16F),B===i.UNSIGNED_BYTE&&(ce=be===Tt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function I(S,x,B){return T(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==kt&&S.minFilter!==xn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function R(S){return S===kt||S===Cl||S===_r?i.NEAREST:i.LINEAR}function N(S){const x=S.target;x.removeEventListener("dispose",N),ie(x),x.isVideoTexture&&u.delete(x)}function Y(S){const x=S.target;x.removeEventListener("dispose",Y),w(x)}function ie(S){const x=n.get(S);if(x.__webglInit===void 0)return;const B=S.source,de=d.get(B);if(de){const ne=de[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&v(S),Object.keys(de).length===0&&d.delete(B)}n.remove(S)}function v(S){const x=n.get(S);i.deleteTexture(x.__webglTexture);const B=S.source,de=d.get(B);delete de[x.__cacheKey],a.memory.textures--}function w(S){const x=S.texture,B=n.get(S),de=n.get(x);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(B.__webglFramebuffer[ne]))for(let ce=0;ce<B.__webglFramebuffer[ne].length;ce++)i.deleteFramebuffer(B.__webglFramebuffer[ne][ce]);else i.deleteFramebuffer(B.__webglFramebuffer[ne]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[ne])}else{if(Array.isArray(B.__webglFramebuffer))for(let ne=0;ne<B.__webglFramebuffer.length;ne++)i.deleteFramebuffer(B.__webglFramebuffer[ne]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ne=0;ne<B.__webglColorRenderbuffer.length;ne++)B.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ne=0,ce=x.length;ne<ce;ne++){const be=n.get(x[ne]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(x[ne])}n.remove(x),n.remove(S)}let $=0;function ue(){$=0}function D(){const S=$;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),$+=1,S}function j(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function W(S,x){const B=n.get(S);if(S.isVideoTexture&&St(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const de=S.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,S,x);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function te(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){oe(B,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function K(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){oe(B,S,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function Q(S,x){const B=n.get(S);if(S.version>0&&B.__version!==S.version){Te(B,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const ee={[_c]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[xc]:i.MIRRORED_REPEAT},pe={[kt]:i.NEAREST,[Cl]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},_e={[tg]:i.NEVER,[og]:i.ALWAYS,[Zh]:i.LESS,[Jh]:i.LEQUAL,[ng]:i.EQUAL,[rg]:i.GEQUAL,[ig]:i.GREATER,[sg]:i.NOTEQUAL};function Ge(S,x,B){if(x.type===ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===xn||x.magFilter===Ma||x.magFilter===_r||x.magFilter===Gi||x.minFilter===xn||x.minFilter===Ma||x.minFilter===_r||x.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B?(i.texParameteri(S,i.TEXTURE_WRAP_S,ee[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ee[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ee[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,pe[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,pe[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Jn||x.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,R(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==kt&&x.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===kt||x.minFilter!==_r&&x.minFilter!==Gi||x.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===nr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function q(S,x){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",N));const de=x.source;let ne=d.get(de);ne===void 0&&(ne={},d.set(de,ne));const ce=j(x);if(ce!==S.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ne[ce].usedTimes++;const be=ne[S.__cacheKey];be!==void 0&&(ne[S.__cacheKey].usedTimes--,be.usedTimes===0&&v(x)),S.__cacheKey=ce,S.__webglTexture=ne[ce].texture}return B}function oe(S,x,B){let de=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(de=i.TEXTURE_3D);const ne=q(S,x),ce=x.source;t.bindTexture(de,S.__webglTexture,i.TEXTURE0+B);const be=n.get(ce);if(ce.version!==be.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);const xe=_t.getPrimaries(_t.workingColorSpace),Ee=x.colorSpace===Pn?null:_t.getPrimaries(x.colorSpace),Ve=x.colorSpace===Pn||xe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Ke=f(x)&&p(x.image)===!1;let se=_(x.image,Ke,!1,s.maxTextureSize);se=$e(x,se);const ht=p(se)||o,nt=r.convert(x.format,x.colorSpace);let Xe=r.convert(x.type),Ie=E(x.internalFormat,nt,Xe,x.colorSpace,x.isVideoTexture);Ge(de,x,ht);let ye;const Qe=x.mipmaps,b=o&&x.isVideoTexture!==!0&&Ie!==jh,fe=be.__version===void 0||ne===!0,ve=ce.dataReady,De=I(x,se,ht);if(x.isDepthTexture)Ie=i.DEPTH_COMPONENT,o?x.type===ci?Ie=i.DEPTH_COMPONENT32F:x.type===Hi?Ie=i.DEPTH_COMPONENT24:x.type===us?Ie=i.DEPTH24_STENCIL8:Ie=i.DEPTH_COMPONENT16:x.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===hs&&Ie===i.DEPTH_COMPONENT&&x.type!==Uc&&x.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Hi,Xe=r.convert(x.type)),x.format===ir&&Ie===i.DEPTH_COMPONENT&&(Ie=i.DEPTH_STENCIL,x.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=us,Xe=r.convert(x.type))),fe&&(b?t.texStorage2D(i.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ie,se.width,se.height,0,nt,Xe,null));else if(x.isDataTexture)if(Qe.length>0&&ht){b&&fe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,Qe[0].width,Qe[0].height);for(let A=0,he=Qe.length;A<he;A++)ye=Qe[A],b?ve&&t.texSubImage2D(i.TEXTURE_2D,A,0,0,ye.width,ye.height,nt,Xe,ye.data):t.texImage2D(i.TEXTURE_2D,A,Ie,ye.width,ye.height,0,nt,Xe,ye.data);x.generateMipmaps=!1}else b?(fe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,se.width,se.height),ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,nt,Xe,se.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,se.width,se.height,0,nt,Xe,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){b&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ie,Qe[0].width,Qe[0].height,se.depth);for(let A=0,he=Qe.length;A<he;A++)ye=Qe[A],x.format!==Qn?nt!==null?b?ve&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,A,0,0,0,ye.width,ye.height,se.depth,nt,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,A,Ie,ye.width,ye.height,se.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,A,0,0,0,ye.width,ye.height,se.depth,nt,Xe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,A,Ie,ye.width,ye.height,se.depth,0,nt,Xe,ye.data)}else{b&&fe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,Qe[0].width,Qe[0].height);for(let A=0,he=Qe.length;A<he;A++)ye=Qe[A],x.format!==Qn?nt!==null?b?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,A,0,0,ye.width,ye.height,nt,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,A,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?ve&&t.texSubImage2D(i.TEXTURE_2D,A,0,0,ye.width,ye.height,nt,Xe,ye.data):t.texImage2D(i.TEXTURE_2D,A,Ie,ye.width,ye.height,0,nt,Xe,ye.data)}else if(x.isDataArrayTexture)b?(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ie,se.width,se.height,se.depth),ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,nt,Xe,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,nt,Xe,se.data);else if(x.isData3DTexture)b?(fe&&t.texStorage3D(i.TEXTURE_3D,De,Ie,se.width,se.height,se.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,nt,Xe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,nt,Xe,se.data);else if(x.isFramebufferTexture){if(fe)if(b)t.texStorage2D(i.TEXTURE_2D,De,Ie,se.width,se.height);else{let A=se.width,he=se.height;for(let re=0;re<De;re++)t.texImage2D(i.TEXTURE_2D,re,Ie,A,he,0,nt,Xe,null),A>>=1,he>>=1}}else if(Qe.length>0&&ht){b&&fe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,Qe[0].width,Qe[0].height);for(let A=0,he=Qe.length;A<he;A++)ye=Qe[A],b?ve&&t.texSubImage2D(i.TEXTURE_2D,A,0,0,nt,Xe,ye):t.texImage2D(i.TEXTURE_2D,A,Ie,nt,Xe,ye);x.generateMipmaps=!1}else b?(fe&&t.texStorage2D(i.TEXTURE_2D,De,Ie,se.width,se.height),ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,nt,Xe,se)):t.texImage2D(i.TEXTURE_2D,0,Ie,nt,Xe,se);T(x,ht)&&y(de),be.__version=ce.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Te(S,x,B){if(x.image.length!==6)return;const de=q(S,x),ne=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+B);const ce=n.get(ne);if(ne.version!==ce.__version||de===!0){t.activeTexture(i.TEXTURE0+B);const be=_t.getPrimaries(_t.workingColorSpace),xe=x.colorSpace===Pn?null:_t.getPrimaries(x.colorSpace),Ee=x.colorSpace===Pn||be===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Ke=x.image[0]&&x.image[0].isDataTexture,se=[];for(let A=0;A<6;A++)!Ve&&!Ke?se[A]=_(x.image[A],!1,!0,s.maxCubemapSize):se[A]=Ke?x.image[A].image:x.image[A],se[A]=$e(x,se[A]);const ht=se[0],nt=p(ht)||o,Xe=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type),ye=E(x.internalFormat,Xe,Ie,x.colorSpace),Qe=o&&x.isVideoTexture!==!0,b=ce.__version===void 0||de===!0,fe=ne.dataReady;let ve=I(x,ht,nt);Ge(i.TEXTURE_CUBE_MAP,x,nt);let De;if(Ve){Qe&&b&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,ye,ht.width,ht.height);for(let A=0;A<6;A++){De=se[A].mipmaps;for(let he=0;he<De.length;he++){const re=De[he];x.format!==Qn?Xe!==null?Qe?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,he,0,0,re.width,re.height,Xe,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,he,ye,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,he,0,0,re.width,re.height,Xe,Ie,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,he,ye,re.width,re.height,0,Xe,Ie,re.data)}}}else{De=x.mipmaps,Qe&&b&&(De.length>0&&ve++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,ye,se[0].width,se[0].height));for(let A=0;A<6;A++)if(Ke){Qe?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,se[A].width,se[A].height,Xe,Ie,se[A].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,ye,se[A].width,se[A].height,0,Xe,Ie,se[A].data);for(let he=0;he<De.length;he++){const we=De[he].image[A].image;Qe?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,he+1,0,0,we.width,we.height,Xe,Ie,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,he+1,ye,we.width,we.height,0,Xe,Ie,we.data)}}else{Qe?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,Xe,Ie,se[A]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,ye,Xe,Ie,se[A]);for(let he=0;he<De.length;he++){const re=De[he];Qe?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,he+1,0,0,Xe,Ie,re.image[A]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+A,he+1,ye,Xe,Ie,re.image[A])}}}T(x,nt)&&y(i.TEXTURE_CUBE_MAP),ce.__version=ne.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Fe(S,x,B,de,ne,ce){const be=r.convert(B.format,B.colorSpace),xe=r.convert(B.type),Ee=E(B.internalFormat,be,xe,B.colorSpace);if(!n.get(x).__hasExternalTextures){const Ke=Math.max(1,x.width>>ce),se=Math.max(1,x.height>>ce);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ce,Ee,Ke,se,x.depth,0,be,xe,null):t.texImage2D(ne,ce,Ee,Ke,se,0,be,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Re(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ne,n.get(B).__webglTexture,0,We(x)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,ne,n.get(B).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(S,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let de=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||Re(x)){const ne=x.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ci?de=i.DEPTH_COMPONENT32F:ne.type===Hi&&(de=i.DEPTH_COMPONENT24));const ce=We(x);Re(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,de,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){const de=We(x);B&&Re(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,x.width,x.height):Re(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const de=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ne=0;ne<de.length;ne++){const ce=de[ne],be=r.convert(ce.format,ce.colorSpace),xe=r.convert(ce.type),Ee=E(ce.internalFormat,be,xe,ce.colorSpace),Ve=We(x);B&&Re(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Ee,x.width,x.height):Re(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const de=n.get(x.depthTexture).__webglTexture,ne=We(x);if(x.depthTexture.format===hs)Re(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(x.depthTexture.format===ir)Re(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function at(S){const x=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ae(x.__webglFramebuffer,S)}else if(B){x.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[de]),x.__webglDepthbuffer[de]=i.createRenderbuffer(),ze(x.__webglDepthbuffer[de],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),ze(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(S,x,B){const de=n.get(S);x!==void 0&&Fe(de.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&at(S)}function V(S){const x=S.texture,B=n.get(S),de=n.get(x);S.addEventListener("dispose",Y),S.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=x.version,a.memory.textures++);const ne=S.isWebGLCubeRenderTarget===!0,ce=S.isWebGLMultipleRenderTargets===!0,be=p(S)||o;if(ne){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(o&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)B.__webglFramebuffer[xe][Ee]=i.createFramebuffer()}else B.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<x.mipmaps.length;xe++)B.__webglFramebuffer[xe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){const xe=S.texture;for(let Ee=0,Ve=xe.length;Ee<Ve;Ee++){const Ke=n.get(xe[Ee]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&Re(S)===!1){const xe=ce?x:[x];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ee=0;Ee<xe.length;Ee++){const Ve=xe[Ee];B.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Ee]);const Ke=r.convert(Ve.format,Ve.colorSpace),se=r.convert(Ve.type),ht=E(Ve.internalFormat,Ke,se,Ve.colorSpace,S.isXRRenderTarget===!0),nt=We(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,ht,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,B.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,x,be);for(let xe=0;xe<6;xe++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)Fe(B.__webglFramebuffer[xe][Ee],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else Fe(B.__webglFramebuffer[xe],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);T(x,be)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const xe=S.texture;for(let Ee=0,Ve=xe.length;Ee<Ve;Ee++){const Ke=xe[Ee],se=n.get(Ke);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),Ge(i.TEXTURE_2D,Ke,be),Fe(B.__webglFramebuffer,S,Ke,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),T(Ke,be)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?xe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,de.__webglTexture),Ge(xe,x,be),o&&x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)Fe(B.__webglFramebuffer[Ee],S,x,i.COLOR_ATTACHMENT0,xe,Ee);else Fe(B.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,xe,0);T(x,be)&&y(xe),t.unbindTexture()}S.depthBuffer&&at(S)}function Ht(S){const x=p(S)||o,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let de=0,ne=B.length;de<ne;de++){const ce=B[de];if(T(ce,x)){const be=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(ce).__webglTexture;t.bindTexture(be,xe),y(be),t.unbindTexture()}}}function Ue(S){if(o&&S.samples>0&&Re(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,de=S.height;let ne=i.COLOR_BUFFER_BIT;const ce=[],be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(S),Ee=S.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Ve=0;Ve<x.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ve=0;Ve<x.length;Ve++){ce.push(i.COLOR_ATTACHMENT0+Ve),S.depthBuffer&&ce.push(be);const Ke=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ke===!1&&(S.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ve]),Ke===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),Ee){const se=n.get(x[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,B,de,0,0,B,de,ne,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Ve=0;Ve<x.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Ve]);const Ke=n.get(x[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function We(S){return Math.min(s.maxSamples,S.samples)}function Re(S){const x=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(S){const x=a.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function $e(S,x){const B=S.colorSpace,de=S.format,ne=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===vc||B!==In&&B!==Pn&&(_t.getTransfer(B)===Tt?o===!1?e.has("EXT_sRGB")===!0&&de===Qn?(S.format=vc,S.minFilter=xn,S.generateMipmaps=!1):x=td.sRGBToLinear(x):(de!==Qn||ne!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}this.allocateTextureUnit=D,this.resetTextureUnits=ue,this.setTexture2D=W,this.setTexture2DArray=te,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=je,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Re}function vy(i,e,t){const n=t.isWebGL2;function s(r,a=Pn){let o;const c=_t.getTransfer(a);if(r===Wi)return i.UNSIGNED_BYTE;if(r===kh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Xm)return i.BYTE;if(r===qm)return i.SHORT;if(r===Uc)return i.UNSIGNED_SHORT;if(r===Hh)return i.INT;if(r===Hi)return i.UNSIGNED_INT;if(r===ci)return i.FLOAT;if(r===nr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ym)return i.ALPHA;if(r===Qn)return i.RGBA;if(r===jm)return i.LUMINANCE;if(r===$m)return i.LUMINANCE_ALPHA;if(r===hs)return i.DEPTH_COMPONENT;if(r===ir)return i.DEPTH_STENCIL;if(r===vc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Km)return i.RED;if(r===Xh)return i.RED_INTEGER;if(r===Zm)return i.RG;if(r===qh)return i.RG_INTEGER;if(r===Yh)return i.RGBA_INTEGER;if(r===Sa||r===Ta||r===Ea||r===Aa)if(c===Tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ta)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ea)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ll||r===Pl||r===Il||r===Dl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ll)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Il)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ul||r===Ol)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ul)return c===Tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ol)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fl||r===Vl||r===zl||r===Bl||r===Gl||r===Hl||r===kl||r===Wl||r===Xl||r===ql||r===Yl||r===jl||r===$l||r===Kl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Fl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ql)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$l)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kl)return c===Tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Na||r===Zl||r===Jl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Na)return c===Tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jm||r===Ql||r===eu||r===tu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Na)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ql)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===eu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===us?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class yy extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const My={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(My)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ao;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
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

}`;class Ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Ci({extensions:{fragDepth:!0},vertexShader:Sy,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gn(new na(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Ay extends Pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=new Ey,p=t.getContextAttributes();let f=null,T=null;const y=[],E=[],I=new Ne;let R=null;const N=new yn;N.layers.enable(1),N.viewport=new ut;const Y=new yn;Y.layers.enable(2),Y.viewport=new ut;const ie=[N,Y],v=new yy;v.layers.enable(1),v.layers.enable(2);let w=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=y[q];return oe===void 0&&(oe=new $a,y[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=y[q];return oe===void 0&&(oe=new $a,y[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=y[q];return oe===void 0&&(oe=new $a,y[q]=oe),oe.getHandSpace()};function ue(q){const oe=E.indexOf(q.inputSource);if(oe===-1)return;const Te=y[oe];Te!==void 0&&(Te.update(q.inputSource,q.frame,l||a),Te.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",j);for(let q=0;q<y.length;q++){const oe=E[q];oe!==null&&(E[q]=null,y[q].disconnect(oe))}w=null,$=null,_.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,T=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",D),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ms(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let oe=null,Te=null,Fe=null;p.depth&&(Fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?ir:hs,Te=p.stencil?us:Hi);const ze={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new ms(d.textureWidth,d.textureHeight,{format:Qn,type:Wi,depthTexture:new qr(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Ae=e.properties.get(T);Ae.__ignoreDepthValues=d.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function j(q){for(let oe=0;oe<q.removed.length;oe++){const Te=q.removed[oe],Fe=E.indexOf(Te);Fe>=0&&(E[Fe]=null,y[Fe].disconnect(Te))}for(let oe=0;oe<q.added.length;oe++){const Te=q.added[oe];let Fe=E.indexOf(Te);if(Fe===-1){for(let Ae=0;Ae<y.length;Ae++)if(Ae>=E.length){E.push(Te),Fe=Ae;break}else if(E[Ae]===null){E[Ae]=Te,Fe=Ae;break}if(Fe===-1)break}const ze=y[Fe];ze&&ze.connect(Te)}}const W=new P,te=new P;function K(q,oe,Te){W.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);const Fe=W.distanceTo(te),ze=oe.projectionMatrix.elements,Ae=Te.projectionMatrix.elements,at=ze[14]/(ze[10]-1),je=ze[14]/(ze[10]+1),V=(ze[9]+1)/ze[5],Ht=(ze[9]-1)/ze[5],Ue=(ze[8]-1)/ze[0],We=(Ae[8]+1)/Ae[0],Re=at*Ue,St=at*We,$e=Fe/(-Ue+We),S=$e*-Ue;oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(S),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const x=at+$e,B=je+$e,de=Re-S,ne=St+(Fe-S),ce=V*je/B*x,be=Ht*je/B*x;q.projectionMatrix.makePerspective(de,ne,ce,be,x,B),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),v.near=Y.near=N.near=q.near,v.far=Y.far=N.far=q.far,(w!==v.near||$!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,$=v.far,N.near=w,N.far=$,Y.near=w,Y.far=$,N.updateProjectionMatrix(),Y.updateProjectionMatrix(),q.updateProjectionMatrix());const oe=q.parent,Te=v.cameras;Q(v,oe);for(let Fe=0;Fe<Te.length;Fe++)Q(Te[Fe],oe);Te.length===2?K(v,N,Y):v.projectionMatrix.copy(N.projectionMatrix),ee(q,v,oe)};function ee(q,oe,Te){Te===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(Te.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null};let pe=null;function _e(q,oe){if(u=oe.getViewerPose(l||a),g=oe,u!==null){const Te=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Fe=!1;Te.length!==v.cameras.length&&(v.cameras.length=0,Fe=!0);for(let Ae=0;Ae<Te.length;Ae++){const at=Te[Ae];let je=null;if(m!==null)je=m.getViewport(at);else{const Ht=h.getViewSubImage(d,at);je=Ht.viewport,Ae===0&&(e.setRenderTargetTextures(T,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(T))}let V=ie[Ae];V===void 0&&(V=new yn,V.layers.enable(Ae),V.viewport=new ut,ie[Ae]=V),V.matrix.fromArray(at.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(at.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(je.x,je.y,je.width,je.height),Ae===0&&(v.matrix.copy(V.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Fe===!0&&v.cameras.push(V)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Ae=h.getDepthInformation(Te[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,s.renderState)}}for(let Te=0;Te<y.length;Te++){const Fe=E[Te],ze=y[Te];Fe!==null&&ze!==void 0&&ze.update(Fe,oe,l||a)}_.render(e,v),pe&&pe(q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ge=new ud;Ge.setAnimationLoop(_e),this.setAnimationLoop=function(q){pe=q},this.dispose=function(){}}}function Ny(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ad(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,T,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,T,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Sn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Sn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=e.get(f).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,T,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Sn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function by(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,y){const E=y.program;n.uniformBlockBinding(T,E)}function l(T,y){let E=s[T.id];E===void 0&&(g(T),E=u(T),s[T.id]=E,T.addEventListener("dispose",p));const I=y.program;n.updateUBOMapping(T,I);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function u(T){const y=h();T.__bindingPointIndex=y;const E=i.createBuffer(),I=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=s[T.id],E=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,N=E.length;R<N;R++){const Y=Array.isArray(E[R])?E[R]:[E[R]];for(let ie=0,v=Y.length;ie<v;ie++){const w=Y[ie];if(m(w,R,ie,I)===!0){const $=w.__offset,ue=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let j=0;j<ue.length;j++){const W=ue[j],te=_(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,$+D,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,D),D+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,y,E,I){const R=T.value,N=y+"_"+E;if(I[N]===void 0)return typeof R=="number"||typeof R=="boolean"?I[N]=R:I[N]=R.clone(),!0;{const Y=I[N];if(typeof R=="number"||typeof R=="boolean"){if(Y!==R)return I[N]=R,!0}else if(Y.equals(R)===!1)return Y.copy(R),!0}return!1}function g(T){const y=T.uniforms;let E=0;const I=16;for(let N=0,Y=y.length;N<Y;N++){const ie=Array.isArray(y[N])?y[N]:[y[N]];for(let v=0,w=ie.length;v<w;v++){const $=ie[v],ue=Array.isArray($.value)?$.value:[$.value];for(let D=0,j=ue.length;D<j;D++){const W=ue[D],te=_(W),K=E%I;K!==0&&I-K<te.boundary&&(E+=I-K),$.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=te.storage}}}const R=E%I;return R>0&&(E+=I-R),T.__size=E,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class gd{constructor(e={}){const{canvas:t=Mg(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;const y=this;let E=!1,I=0,R=0,N=null,Y=-1,ie=null;const v=new ut,w=new ut;let $=null;const ue=new ke(0);let D=0,j=t.width,W=t.height,te=1,K=null,Q=null;const ee=new ut(0,0,j,W),pe=new ut(0,0,j,W);let _e=!1;const Ge=new Gc;let q=!1,oe=!1,Te=null;const Fe=new wt,ze=new Ne,Ae=new P,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return N===null?te:1}let V=n;function Ht(M,F){for(let k=0;k<M.length;k++){const X=M[k],H=t.getContext(X,F);if(H!==null)return H}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",he,!1),V===null){const F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),V=Ht(F,M),V===null)throw Ht(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,We,Re,St,$e,S,x,B,de,ne,ce,be,xe,Ee,Ve,Ke,se,ht,nt,Xe,Ie,ye,Qe,b;function fe(){Ue=new D0(V),We=new w0(V,Ue,e),Ue.init(We),ye=new vy(V,Ue,We),Re=new _y(V,Ue,We),St=new F0(V),$e=new iy,S=new xy(V,Ue,Re,$e,We,ye,St),x=new C0(y),B=new I0(y),de=new Xg(V,We),Qe=new N0(V,Ue,de,We),ne=new U0(V,de,St,Qe),ce=new G0(V,ne,de,St),nt=new B0(V,We,S),Ke=new R0($e),be=new ny(y,x,B,Ue,We,Qe,Ke),xe=new Ny(y,$e),Ee=new ry,Ve=new hy(Ue,We),ht=new A0(y,x,B,Re,ce,d,c),se=new gy(y,ce,We),b=new by(V,St,We,Re),Xe=new b0(V,Ue,St,We),Ie=new O0(V,Ue,St,We),St.programs=be.programs,y.capabilities=We,y.extensions=Ue,y.properties=$e,y.renderLists=Ee,y.shadowMap=se,y.state=Re,y.info=St}fe();const ve=new Ay(y,V);this.xr=ve,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(j,W,!1))},this.getSize=function(M){return M.set(j,W)},this.setSize=function(M,F,k=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,W=F,t.width=Math.floor(M*te),t.height=Math.floor(F*te),k===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(j*te,W*te).floor()},this.setDrawingBufferSize=function(M,F,k){j=M,W=F,te=k,t.width=Math.floor(M*k),t.height=Math.floor(F*k),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(ee)},this.setViewport=function(M,F,k,X){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,F,k,X),Re.viewport(v.copy(ee).multiplyScalar(te).floor())},this.getScissor=function(M){return M.copy(pe)},this.setScissor=function(M,F,k,X){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,F,k,X),Re.scissor(w.copy(pe).multiplyScalar(te).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(M){Re.setScissorTest(_e=M)},this.setOpaqueSort=function(M){K=M},this.setTransparentSort=function(M){Q=M},this.getClearColor=function(M){return M.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(M=!0,F=!0,k=!0){let X=0;if(M){let H=!1;if(N!==null){const Me=N.texture.format;H=Me===Yh||Me===qh||Me===Xh}if(H){const Me=N.texture.type,Le=Me===Wi||Me===Hi||Me===Uc||Me===us||Me===kh||Me===Wh,Be=ht.getClearColor(),qe=ht.getClearAlpha(),it=Be.r,Ze=Be.g,et=Be.b;Le?(m[0]=it,m[1]=Ze,m[2]=et,m[3]=qe,V.clearBufferuiv(V.COLOR,0,m)):(g[0]=it,g[1]=Ze,g[2]=et,g[3]=qe,V.clearBufferiv(V.COLOR,0,g))}else X|=V.COLOR_BUFFER_BIT}F&&(X|=V.DEPTH_BUFFER_BIT),k&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ee.dispose(),Ve.dispose(),$e.dispose(),x.dispose(),B.dispose(),ce.dispose(),Qe.dispose(),b.dispose(),be.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",tn),ve.removeEventListener("sessionend",lt),Te&&(Te.dispose(),Te=null),It.stop()};function De(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=St.autoReset,F=se.enabled,k=se.autoUpdate,X=se.needsUpdate,H=se.type;fe(),St.autoReset=M,se.enabled=F,se.autoUpdate=k,se.needsUpdate=X,se.type=H}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const F=M.target;F.removeEventListener("dispose",re),we(F)}function we(M){Oe(M),$e.remove(M)}function Oe(M){const F=$e.get(M).programs;F!==void 0&&(F.forEach(function(k){be.releaseProgram(k)}),M.isShaderMaterial&&be.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,k,X,H,Me){F===null&&(F=at);const Le=H.isMesh&&H.matrixWorld.determinant()<0,Be=dm(M,F,k,X,H);Re.setMaterial(X,Le);let qe=k.index,it=1;if(X.wireframe===!0){if(qe=ne.getWireframeAttribute(k),qe===void 0)return;it=2}const Ze=k.drawRange,et=k.attributes.position;let Dt=Ze.start*it,bn=(Ze.start+Ze.count)*it;Me!==null&&(Dt=Math.max(Dt,Me.start*it),bn=Math.min(bn,(Me.start+Me.count)*it)),qe!==null?(Dt=Math.max(Dt,0),bn=Math.min(bn,qe.count)):et!=null&&(Dt=Math.max(Dt,0),bn=Math.min(bn,et.count));const Kt=bn-Dt;if(Kt<0||Kt===1/0)return;Qe.setup(H,X,Be,k,qe);let gi,Nt=Xe;if(qe!==null&&(gi=de.get(qe),Nt=Ie,Nt.setIndex(gi)),H.isMesh)X.wireframe===!0?(Re.setLineWidth(X.wireframeLinewidth*je()),Nt.setMode(V.LINES)):Nt.setMode(V.TRIANGLES);else if(H.isLine){let rt=X.linewidth;rt===void 0&&(rt=1),Re.setLineWidth(rt*je()),H.isLineSegments?Nt.setMode(V.LINES):H.isLineLoop?Nt.setMode(V.LINE_LOOP):Nt.setMode(V.LINE_STRIP)}else H.isPoints?Nt.setMode(V.POINTS):H.isSprite&&Nt.setMode(V.TRIANGLES);if(H.isBatchedMesh)Nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Nt.renderInstances(Dt,Kt,H.count);else if(k.isInstancedBufferGeometry){const rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_a=Math.min(k.instanceCount,rt);Nt.renderInstances(Dt,Kt,_a)}else Nt.render(Dt,Kt)};function ct(M,F,k){M.transparent===!0&&M.side===Ni&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,no(M,F,k),M.side=qi,M.needsUpdate=!0,no(M,F,k),M.side=Ni):no(M,F,k)}this.compile=function(M,F,k=null){k===null&&(k=M),p=Ve.get(k),p.init(),T.push(p),k.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),M!==k&&M.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(y._useLegacyLights);const X=new Set;return M.traverse(function(H){const Me=H.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){const Be=Me[Le];ct(Be,k,H),X.add(Be)}else ct(Me,k,H),X.add(Me)}),T.pop(),p=null,X},this.compileAsync=function(M,F,k=null){const X=this.compile(M,F,k);return new Promise(H=>{function Me(){if(X.forEach(function(Le){$e.get(Le).currentProgram.isReady()&&X.delete(Le)}),X.size===0){H(M);return}setTimeout(Me,10)}Ue.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ot=null;function xt(M){ot&&ot(M)}function tn(){It.stop()}function lt(){It.start()}const It=new ud;It.setAnimationLoop(xt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(M){ot=M,ve.setAnimationLoop(M),M===null?It.stop():It.start()},ve.addEventListener("sessionstart",tn),ve.addEventListener("sessionend",lt),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,N),p=Ve.get(M,T.length),p.init(),T.push(p),Fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(Fe),oe=this.localClippingEnabled,q=Ke.init(this.clippingPlanes,oe),_=Ee.get(M,f.length),_.init(),f.push(_),hn(M,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(K,Q),this.info.render.frame++,q===!0&&Ke.beginShadows();const k=p.state.shadowsArray;if(se.render(k,M,F),q===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1)&&ht.render(_,M),p.setupLights(y._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let H=0,Me=X.length;H<Me;H++){const Le=X[H];xl(_,M,Le,Le.viewport)}}else xl(_,M,F);N!==null&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(y,M,F),Qe.resetDefaultState(),Y=-1,ie=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function hn(M,F,k,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ge.intersectsSprite(M)){X&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Fe);const Le=ce.update(M),Be=M.material;Be.visible&&_.push(M,Le,Be,k,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ge.intersectsObject(M))){const Le=ce.update(M),Be=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ae.copy(Le.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(Fe)),Array.isArray(Be)){const qe=Le.groups;for(let it=0,Ze=qe.length;it<Ze;it++){const et=qe[it],Dt=Be[et.materialIndex];Dt&&Dt.visible&&_.push(M,Le,Dt,k,Ae.z,et)}}else Be.visible&&_.push(M,Le,Be,k,Ae.z,null)}}const Me=M.children;for(let Le=0,Be=Me.length;Le<Be;Le++)hn(Me[Le],F,k,X)}function xl(M,F,k,X){const H=M.opaque,Me=M.transmissive,Le=M.transparent;p.setupLightsView(k),q===!0&&Ke.setGlobalState(y.clippingPlanes,k),Me.length>0&&hm(H,Me,F,k),X&&Re.viewport(v.copy(X)),H.length>0&&to(H,F,k),Me.length>0&&to(Me,F,k),Le.length>0&&to(Le,F,k),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function hm(M,F,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const Me=We.isWebGL2;Te===null&&(Te=new ms(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?nr:Wi,minFilter:Gi,samples:Me?4:0})),y.getDrawingBufferSize(ze),Me?Te.setSize(ze.x,ze.y):Te.setSize(Fo(ze.x),Fo(ze.y));const Le=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(ue),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();const Be=y.toneMapping;y.toneMapping=ti,to(M,k,X),S.updateMultisampleRenderTarget(Te),S.updateRenderTargetMipmap(Te);let qe=!1;for(let it=0,Ze=F.length;it<Ze;it++){const et=F[it],Dt=et.object,bn=et.geometry,Kt=et.material,gi=et.group;if(Kt.side===Ni&&Dt.layers.test(X.layers)){const Nt=Kt.side;Kt.side=Sn,Kt.needsUpdate=!0,vl(Dt,k,X,bn,Kt,gi),Kt.side=Nt,Kt.needsUpdate=!0,qe=!0}}qe===!0&&(S.updateMultisampleRenderTarget(Te),S.updateRenderTargetMipmap(Te)),y.setRenderTarget(Le),y.setClearColor(ue,D),y.toneMapping=Be}function to(M,F,k){const X=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Me=M.length;H<Me;H++){const Le=M[H],Be=Le.object,qe=Le.geometry,it=X===null?Le.material:X,Ze=Le.group;Be.layers.test(k.layers)&&vl(Be,F,k,qe,it,Ze)}}function vl(M,F,k,X,H,Me){M.onBeforeRender(y,F,k,X,H,Me),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(y,F,k,X,M,Me),H.transparent===!0&&H.side===Ni&&H.forceSinglePass===!1?(H.side=Sn,H.needsUpdate=!0,y.renderBufferDirect(k,F,X,H,M,Me),H.side=qi,H.needsUpdate=!0,y.renderBufferDirect(k,F,X,H,M,Me),H.side=Ni):y.renderBufferDirect(k,F,X,H,M,Me),M.onAfterRender(y,F,k,X,H,Me)}function no(M,F,k){F.isScene!==!0&&(F=at);const X=$e.get(M),H=p.state.lights,Me=p.state.shadowsArray,Le=H.state.version,Be=be.getParameters(M,H.state,Me,F,k),qe=be.getProgramCacheKey(Be);let it=X.programs;X.environment=M.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(M.isMeshStandardMaterial?B:x).get(M.envMap||X.environment),it===void 0&&(M.addEventListener("dispose",re),it=new Map,X.programs=it);let Ze=it.get(qe);if(Ze!==void 0){if(X.currentProgram===Ze&&X.lightsStateVersion===Le)return Ml(M,Be),Ze}else Be.uniforms=be.getUniforms(M),M.onBuild(k,Be,y),M.onBeforeCompile(Be,y),Ze=be.acquireProgram(Be,qe),it.set(qe,Ze),X.uniforms=Be.uniforms;const et=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(et.clippingPlanes=Ke.uniform),Ml(M,Be),X.needsLights=pm(M),X.lightsStateVersion=Le,X.needsLights&&(et.ambientLightColor.value=H.state.ambient,et.lightProbe.value=H.state.probe,et.directionalLights.value=H.state.directional,et.directionalLightShadows.value=H.state.directionalShadow,et.spotLights.value=H.state.spot,et.spotLightShadows.value=H.state.spotShadow,et.rectAreaLights.value=H.state.rectArea,et.ltc_1.value=H.state.rectAreaLTC1,et.ltc_2.value=H.state.rectAreaLTC2,et.pointLights.value=H.state.point,et.pointLightShadows.value=H.state.pointShadow,et.hemisphereLights.value=H.state.hemi,et.directionalShadowMap.value=H.state.directionalShadowMap,et.directionalShadowMatrix.value=H.state.directionalShadowMatrix,et.spotShadowMap.value=H.state.spotShadowMap,et.spotLightMatrix.value=H.state.spotLightMatrix,et.spotLightMap.value=H.state.spotLightMap,et.pointShadowMap.value=H.state.pointShadowMap,et.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ze,X.uniformsList=null,Ze}function yl(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Co.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Ml(M,F){const k=$e.get(M);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function dm(M,F,k,X,H){F.isScene!==!0&&(F=at),S.resetTextureUnits();const Me=F.fog,Le=X.isMeshStandardMaterial?F.environment:null,Be=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:In,qe=(X.isMeshStandardMaterial?B:x).get(X.envMap||Le),it=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ze=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),et=!!k.morphAttributes.position,Dt=!!k.morphAttributes.normal,bn=!!k.morphAttributes.color;let Kt=ti;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Kt=y.toneMapping);const gi=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Nt=gi!==void 0?gi.length:0,rt=$e.get(X),_a=p.state.lights;if(q===!0&&(oe===!0||M!==ie)){const On=M===ie&&X.id===Y;Ke.setState(X,M,On)}let Rt=!1;X.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==_a.state.version||rt.outputColorSpace!==Be||H.isBatchedMesh&&rt.batching===!1||!H.isBatchedMesh&&rt.batching===!0||H.isInstancedMesh&&rt.instancing===!1||!H.isInstancedMesh&&rt.instancing===!0||H.isSkinnedMesh&&rt.skinning===!1||!H.isSkinnedMesh&&rt.skinning===!0||H.isInstancedMesh&&rt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&rt.instancingColor===!1&&H.instanceColor!==null||rt.envMap!==qe||X.fog===!0&&rt.fog!==Me||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ke.numPlanes||rt.numIntersection!==Ke.numIntersection)||rt.vertexAlphas!==it||rt.vertexTangents!==Ze||rt.morphTargets!==et||rt.morphNormals!==Dt||rt.morphColors!==bn||rt.toneMapping!==Kt||We.isWebGL2===!0&&rt.morphTargetsCount!==Nt)&&(Rt=!0):(Rt=!0,rt.__version=X.version);let Zi=rt.currentProgram;Rt===!0&&(Zi=no(X,F,H));let Sl=!1,gr=!1,xa=!1;const an=Zi.getUniforms(),Ji=rt.uniforms;if(Re.useProgram(Zi.program)&&(Sl=!0,gr=!0,xa=!0),X.id!==Y&&(Y=X.id,gr=!0),Sl||ie!==M){an.setValue(V,"projectionMatrix",M.projectionMatrix),an.setValue(V,"viewMatrix",M.matrixWorldInverse);const On=an.map.cameraPosition;On!==void 0&&On.setValue(V,Ae.setFromMatrixPosition(M.matrixWorld)),We.logarithmicDepthBuffer&&an.setValue(V,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&an.setValue(V,"isOrthographic",M.isOrthographicCamera===!0),ie!==M&&(ie=M,gr=!0,xa=!0)}if(H.isSkinnedMesh){an.setOptional(V,H,"bindMatrix"),an.setOptional(V,H,"bindMatrixInverse");const On=H.skeleton;On&&(We.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),an.setValue(V,"boneTexture",On.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(an.setOptional(V,H,"batchingTexture"),an.setValue(V,"batchingTexture",H._matricesTexture,S));const va=k.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&We.isWebGL2===!0)&&nt.update(H,k,Zi),(gr||rt.receiveShadow!==H.receiveShadow)&&(rt.receiveShadow=H.receiveShadow,an.setValue(V,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ji.envMap.value=qe,Ji.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),gr&&(an.setValue(V,"toneMappingExposure",y.toneMappingExposure),rt.needsLights&&fm(Ji,xa),Me&&X.fog===!0&&xe.refreshFogUniforms(Ji,Me),xe.refreshMaterialUniforms(Ji,X,te,W,Te),Co.upload(V,yl(rt),Ji,S)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Co.upload(V,yl(rt),Ji,S),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&an.setValue(V,"center",H.center),an.setValue(V,"modelViewMatrix",H.modelViewMatrix),an.setValue(V,"normalMatrix",H.normalMatrix),an.setValue(V,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const On=X.uniformsGroups;for(let ya=0,mm=On.length;ya<mm;ya++)if(We.isWebGL2){const Tl=On[ya];b.update(Tl,Zi),b.bind(Tl,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function fm(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function pm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,F,k){$e.get(M.texture).__webglTexture=F,$e.get(M.depthTexture).__webglTexture=k;const X=$e.get(M);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=k===void 0,X.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,F){const k=$e.get(M);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,k=0){N=M,I=F,R=k;let X=!0,H=null,Me=!1,Le=!1;if(M){const qe=$e.get(M);qe.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(V.FRAMEBUFFER,null),X=!1):qe.__webglFramebuffer===void 0?S.setupRenderTarget(M):qe.__hasExternalTextures&&S.rebindTextures(M,$e.get(M.texture).__webglTexture,$e.get(M.depthTexture).__webglTexture);const it=M.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Le=!0);const Ze=$e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ze[F])?H=Ze[F][k]:H=Ze[F],Me=!0):We.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?H=$e.get(M).__webglMultisampledFramebuffer:Array.isArray(Ze)?H=Ze[k]:H=Ze,v.copy(M.viewport),w.copy(M.scissor),$=M.scissorTest}else v.copy(ee).multiplyScalar(te).floor(),w.copy(pe).multiplyScalar(te).floor(),$=_e;if(Re.bindFramebuffer(V.FRAMEBUFFER,H)&&We.drawBuffers&&X&&Re.drawBuffers(M,H),Re.viewport(v),Re.scissor(w),Re.setScissorTest($),Me){const qe=$e.get(M.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,qe.__webglTexture,k)}else if(Le){const qe=$e.get(M.texture),it=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.__webglTexture,k||0,it)}Y=-1},this.readRenderTargetPixels=function(M,F,k,X,H,Me,Le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=$e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){Re.bindFramebuffer(V.FRAMEBUFFER,Be);try{const qe=M.texture,it=qe.format,Ze=qe.type;if(it!==Qn&&ye.convert(it)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Ze===nr&&(Ue.has("EXT_color_buffer_half_float")||We.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(Ze!==Wi&&ye.convert(Ze)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===ci&&(We.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&k>=0&&k<=M.height-H&&V.readPixels(F,k,X,H,ye.convert(it),ye.convert(Ze),Me)}finally{const qe=N!==null?$e.get(N).__webglFramebuffer:null;Re.bindFramebuffer(V.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(M,F,k=0){const X=Math.pow(2,-k),H=Math.floor(F.image.width*X),Me=Math.floor(F.image.height*X);S.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,k,0,0,M.x,M.y,H,Me),Re.unbindTexture()},this.copyTextureToTexture=function(M,F,k,X=0){const H=F.image.width,Me=F.image.height,Le=ye.convert(k.format),Be=ye.convert(k.type);S.setTexture2D(k,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,X,M.x,M.y,H,Me,Le,Be,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,X,M.x,M.y,F.mipmaps[0].width,F.mipmaps[0].height,Le,F.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,X,M.x,M.y,Le,Be,F.image),X===0&&k.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(M,F,k,X,H=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=M.max.x-M.min.x+1,Le=M.max.y-M.min.y+1,Be=M.max.z-M.min.z+1,qe=ye.convert(X.format),it=ye.convert(X.type);let Ze;if(X.isData3DTexture)S.setTexture3D(X,0),Ze=V.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)S.setTexture2DArray(X,0),Ze=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const et=V.getParameter(V.UNPACK_ROW_LENGTH),Dt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),bn=V.getParameter(V.UNPACK_SKIP_PIXELS),Kt=V.getParameter(V.UNPACK_SKIP_ROWS),gi=V.getParameter(V.UNPACK_SKIP_IMAGES),Nt=k.isCompressedTexture?k.mipmaps[H]:k.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,M.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,M.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,M.min.z),k.isDataTexture||k.isData3DTexture?V.texSubImage3D(Ze,H,F.x,F.y,F.z,Me,Le,Be,qe,it,Nt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ze,H,F.x,F.y,F.z,Me,Le,Be,qe,Nt.data)):V.texSubImage3D(Ze,H,F.x,F.y,F.z,Me,Le,Be,qe,it,Nt),V.pixelStorei(V.UNPACK_ROW_LENGTH,et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Dt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,bn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,gi),H===0&&X.generateMipmaps&&V.generateMipmap(Ze),Re.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),Re.unbindTexture()},this.resetState=function(){I=0,R=0,N=null,Re.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oc?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===Qo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?ds:$h}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ds?Qt:In}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wy extends gd{}wy.prototype.isWebGL1Renderer=!0;class Ry extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class _d{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new P;class Wc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ni(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cy extends Xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class sa extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xu=new P,qu=new P,Yu=new wt,Ka=new Bc,No=new ea;class ju extends Ft{constructor(e=new kn,t=new sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xu.fromBufferAttribute(t,s-1),qu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xu.distanceTo(qu);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;Yu.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(Yu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,u=new P,h=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let y=f,E=T-1;y<E;y+=m){const I=g.getX(y),R=g.getX(y+1);if(l.fromBufferAttribute(p,I),u.fromBufferAttribute(p,R),Ka.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const Y=e.ray.origin.distanceTo(d);Y<e.near||Y>e.far||t.push({distance:Y,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),T=Math.min(p.count,a.start+a.count);for(let y=f,E=T-1;y<E;y+=m){if(l.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),Ka.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class xd extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class vd extends mn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=kt,this.minFilter=kt,this.generateMipmaps=!1,this.needsUpdate=!0}}class ra extends kn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new P,h=new P,d=new P;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,T=(s+1)*m+g;a.push(_,p,T),a.push(p,f,T)}this.setIndex(a),this.setAttribute("position",new gn(o,3)),this.setAttribute("normal",new gn(c,3)),this.setAttribute("uv",new gn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yd extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ly extends yd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Py extends Xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iy extends Xn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Dy extends Xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Md extends sa{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Yr extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Uy extends Yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Za=new wt,$u=new P,Ku=new P;class Xc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Oy extends Xc{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=rr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sd extends Yr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Oy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zu=new wt,Sr=new P,Ja=new P;class Fy extends Xc{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),Ja.copy(n.position),Ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ja),n.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu)}}class Vy extends Yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zy extends Xc{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new zy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class By extends Yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gy extends _d{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ju{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qu=new P,bo=new P,eh=new P;class Td extends Ft{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new kn;s.setAttribute("position",new gn([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new sa({fog:!1,toneMapped:!1});this.lightPlane=new ju(s,r),this.add(this.lightPlane),s=new kn,s.setAttribute("position",new gn([0,0,0,0,0,1],3)),this.targetLine=new ju(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Qu.setFromMatrixPosition(this.light.matrixWorld),bo.setFromMatrixPosition(this.light.target.matrixWorld),eh.subVectors(bo,Qu),this.lightPlane.lookAt(bo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(bo),this.targetLine.scale.z=eh.length()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);const th={type:"change"},Qa={type:"start"},nh={type:"end"},wo=new Bc,ih=new Ti,Hy=Math.cos(70*Vc.DEG2RAD);class ky extends Pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ve),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(th),n.update(),r=s.NONE},this.update=function(){const b=new P,fe=new gs().setFromUnitVectors(e.up,new P(0,1,0)),ve=fe.clone().invert(),De=new P,A=new gs,he=new P,re=2*Math.PI;return function(Oe=null){const ct=n.object.position;b.copy(ct).sub(n.target),b.applyQuaternion(fe),o.setFromVector3(b),n.autoRotate&&r===s.NONE&&$(v(Oe)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ot=n.minAzimuthAngle,xt=n.maxAzimuthAngle;isFinite(ot)&&isFinite(xt)&&(ot<-Math.PI?ot+=re:ot>Math.PI&&(ot-=re),xt<-Math.PI?xt+=re:xt>Math.PI&&(xt-=re),ot<=xt?o.theta=Math.max(ot,Math.min(xt,o.theta)):o.theta=o.theta>(ot+xt)/2?Math.max(ot,o.theta):Math.min(xt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?o.radius=ee(o.radius):o.radius=ee(o.radius*l),b.setFromSpherical(o),b.applyQuaternion(ve),ct.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let tn=!1;if(n.zoomToCursor&&R){let lt=null;if(n.object.isPerspectiveCamera){const It=b.length();lt=ee(It*l);const hn=It-lt;n.object.position.addScaledVector(E,hn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const It=new P(I.x,I.y,0);It.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),tn=!0;const hn=new P(I.x,I.y,0);hn.unproject(n.object),n.object.position.sub(hn).add(It),n.object.updateMatrixWorld(),lt=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(wo.origin.copy(n.object.position),wo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(wo.direction))<Hy?e.lookAt(n.target):(ih.setFromNormalAndCoplanarPoint(n.object.up,n.target),wo.intersectPlane(ih,n.target))))}else n.object.isOrthographicCamera&&(tn=l!==1,tn&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix()));return l=1,R=!1,tn||De.distanceToSquared(n.object.position)>a||8*(1-A.dot(n.object.quaternion))>a||he.distanceToSquared(n.target)>0?(n.dispatchEvent(th),De.copy(n.object.position),A.copy(n.object.quaternion),he.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ht),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ve),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Ju,c=new Ju;let l=1;const u=new P,h=new Ne,d=new Ne,m=new Ne,g=new Ne,_=new Ne,p=new Ne,f=new Ne,T=new Ne,y=new Ne,E=new P,I=new Ne;let R=!1;const N=[],Y={};let ie=!1;function v(b){return b!==null?2*Math.PI/60*n.autoRotateSpeed*b:2*Math.PI/60/60*n.autoRotateSpeed}function w(b){const fe=Math.abs(b*.01);return Math.pow(.95,n.zoomSpeed*fe)}function $(b){c.theta-=b}function ue(b){c.phi-=b}const D=function(){const b=new P;return function(ve,De){b.setFromMatrixColumn(De,0),b.multiplyScalar(-ve),u.add(b)}}(),j=function(){const b=new P;return function(ve,De){n.screenSpacePanning===!0?b.setFromMatrixColumn(De,1):(b.setFromMatrixColumn(De,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(ve),u.add(b)}}(),W=function(){const b=new P;return function(ve,De){const A=n.domElement;if(n.object.isPerspectiveCamera){const he=n.object.position;b.copy(he).sub(n.target);let re=b.length();re*=Math.tan(n.object.fov/2*Math.PI/180),D(2*ve*re/A.clientHeight,n.object.matrix),j(2*De*re/A.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(ve*(n.object.right-n.object.left)/n.object.zoom/A.clientWidth,n.object.matrix),j(De*(n.object.top-n.object.bottom)/n.object.zoom/A.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function te(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(b,fe){if(!n.zoomToCursor)return;R=!0;const ve=n.domElement.getBoundingClientRect(),De=b-ve.left,A=fe-ve.top,he=ve.width,re=ve.height;I.x=De/he*2-1,I.y=-(A/re)*2+1,E.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(b){return Math.max(n.minDistance,Math.min(n.maxDistance,b))}function pe(b){h.set(b.clientX,b.clientY)}function _e(b){Q(b.clientX,b.clientX),f.set(b.clientX,b.clientY)}function Ge(b){g.set(b.clientX,b.clientY)}function q(b){d.set(b.clientX,b.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const fe=n.domElement;$(2*Math.PI*m.x/fe.clientHeight),ue(2*Math.PI*m.y/fe.clientHeight),h.copy(d),n.update()}function oe(b){T.set(b.clientX,b.clientY),y.subVectors(T,f),y.y>0?te(w(y.y)):y.y<0&&K(w(y.y)),f.copy(T),n.update()}function Te(b){_.set(b.clientX,b.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_),n.update()}function Fe(b){Q(b.clientX,b.clientY),b.deltaY<0?K(w(b.deltaY)):b.deltaY>0&&te(w(b.deltaY)),n.update()}function ze(b){let fe=!1;switch(b.code){case n.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?ue(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?ue(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),fe=!0;break}fe&&(b.preventDefault(),n.update())}function Ae(b){if(N.length===1)h.set(b.pageX,b.pageY);else{const fe=ye(b),ve=.5*(b.pageX+fe.x),De=.5*(b.pageY+fe.y);h.set(ve,De)}}function at(b){if(N.length===1)g.set(b.pageX,b.pageY);else{const fe=ye(b),ve=.5*(b.pageX+fe.x),De=.5*(b.pageY+fe.y);g.set(ve,De)}}function je(b){const fe=ye(b),ve=b.pageX-fe.x,De=b.pageY-fe.y,A=Math.sqrt(ve*ve+De*De);f.set(0,A)}function V(b){n.enableZoom&&je(b),n.enablePan&&at(b)}function Ht(b){n.enableZoom&&je(b),n.enableRotate&&Ae(b)}function Ue(b){if(N.length==1)d.set(b.pageX,b.pageY);else{const ve=ye(b),De=.5*(b.pageX+ve.x),A=.5*(b.pageY+ve.y);d.set(De,A)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const fe=n.domElement;$(2*Math.PI*m.x/fe.clientHeight),ue(2*Math.PI*m.y/fe.clientHeight),h.copy(d)}function We(b){if(N.length===1)_.set(b.pageX,b.pageY);else{const fe=ye(b),ve=.5*(b.pageX+fe.x),De=.5*(b.pageY+fe.y);_.set(ve,De)}p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_)}function Re(b){const fe=ye(b),ve=b.pageX-fe.x,De=b.pageY-fe.y,A=Math.sqrt(ve*ve+De*De);T.set(0,A),y.set(0,Math.pow(T.y/f.y,n.zoomSpeed)),te(y.y),f.copy(T);const he=(b.pageX+fe.x)*.5,re=(b.pageY+fe.y)*.5;Q(he,re)}function St(b){n.enableZoom&&Re(b),n.enablePan&&We(b)}function $e(b){n.enableZoom&&Re(b),n.enableRotate&&Ue(b)}function S(b){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",B)),nt(b),b.pointerType==="touch"?Ke(b):de(b))}function x(b){n.enabled!==!1&&(b.pointerType==="touch"?se(b):ne(b))}function B(b){switch(Xe(b),N.length){case 0:n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",B),n.dispatchEvent(nh),r=s.NONE;break;case 1:const fe=N[0],ve=Y[fe];Ke({pointerId:fe,pageX:ve.x,pageY:ve.y});break}}function de(b){let fe;switch(b.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case Es.DOLLY:if(n.enableZoom===!1)return;_e(b),r=s.DOLLY;break;case Es.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;Ge(b),r=s.PAN}else{if(n.enableRotate===!1)return;pe(b),r=s.ROTATE}break;case Es.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;pe(b),r=s.ROTATE}else{if(n.enablePan===!1)return;Ge(b),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qa)}function ne(b){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;q(b);break;case s.DOLLY:if(n.enableZoom===!1)return;oe(b);break;case s.PAN:if(n.enablePan===!1)return;Te(b);break}}function ce(b){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(b.preventDefault(),n.dispatchEvent(Qa),Fe(be(b)),n.dispatchEvent(nh))}function be(b){const fe=b.deltaMode,ve={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(fe){case 1:ve.deltaY*=16;break;case 2:ve.deltaY*=100;break}return b.ctrlKey&&!ie&&(ve.deltaY*=10),ve}function xe(b){b.key==="Control"&&(ie=!0,n.domElement.getRootNode().addEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Ee(b){b.key==="Control"&&(ie=!1,n.domElement.getRootNode().removeEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Ve(b){n.enabled===!1||n.enablePan===!1||ze(b)}function Ke(b){switch(Ie(b),N.length){case 1:switch(n.touches.ONE){case As.ROTATE:if(n.enableRotate===!1)return;Ae(b),r=s.TOUCH_ROTATE;break;case As.PAN:if(n.enablePan===!1)return;at(b),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case As.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(b),r=s.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ht(b),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qa)}function se(b){switch(Ie(b),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ue(b),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;We(b),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(b),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$e(b),n.update();break;default:r=s.NONE}}function ht(b){n.enabled!==!1&&b.preventDefault()}function nt(b){N.push(b.pointerId)}function Xe(b){delete Y[b.pointerId];for(let fe=0;fe<N.length;fe++)if(N[fe]==b.pointerId){N.splice(fe,1);return}}function Ie(b){let fe=Y[b.pointerId];fe===void 0&&(fe=new Ne,Y[b.pointerId]=fe),fe.set(b.pageX,b.pageY)}function ye(b){const fe=b.pointerId===N[0]?N[1]:N[0];return Y[fe]}n.domElement.addEventListener("contextmenu",ht),n.domElement.addEventListener("pointerdown",S),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",ce,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",xe,{passive:!0,capture:!0}),this.update()}}const sh={VERTEX:"vertex",FRAGMENT:"fragment"},Pt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},Yc=["x","y","z","w"];function Ed(i){let e="{";i.isNode===!0&&(e+=i.id);for(const{property:t,childNode:n}of zo(i))e+=","+t.slice(0,-4)+":"+n.getCacheKey();return e+="}",e}function*zo(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function ls(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function Ad(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new ke(...e):t==="vec2"?new Ne(...e):t==="vec3"?new P(...e):t==="vec4"?new ut(...e):t==="mat3"?new st(...e):t==="mat4"?new wt(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?bd(e[0]):null}function Nd(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function bd(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const rh=new Map;let Wy=0;class Pe extends Pi{constructor(e=null){super(),this.nodeType=e,this.updateType=Pt.NONE,this.updateBeforeType=Pt.NONE,this.uuid=Vc.generateUUID(),this.isNode=!0,Object.defineProperty(this,"id",{value:Wy++})}get type(){return this.constructor.type}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of zo(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(){return Ed(this)}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}analyze(e){const t=e.getDataFromNode(this);if(t.dependenciesCount=t.dependenciesCount===void 0?1:t.dependenciesCount+1,t.dependenciesCount===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){const a=e.getNodeProperties(this);if(a.initialized!==!0||e.context.tempRead===!1){const o=e.stack.nodes.length;a.initialized=!0,a.outputNode=this.setup(e),a.outputNode!==null&&e.stack.nodes.length!==o&&(a.outputNode=e.stack);for(const c of Object.values(a))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const o=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,o,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return zo(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:a}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=a.toJSON(e.meta).uuid):n[s]=a.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const a=e.inputNodes[n][r];s[r]=t[a]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}if(s){const o=a(e.textures),c=a(e.images),l=a(e.nodes);o.length>0&&(r.textures=o),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function Z(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(rh.has(i)){console.warn(`Redefinition of node class ${i}`);return}rh.set(i,e),e.type=i}class oa extends Pe{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?ls(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=ls(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Nd(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Ad(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}Z("InputNode",oa);class jc extends Pe{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const Xy=i=>new jc(i),wd=i=>new jc(i,!0);wd("frame");wd("render");const qy=Xy("object");Z("UniformGroupNode",jc);class $c extends Pe{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return this.node.isStorageBufferNode&&!e.isAvailable("storageBuffer")?t:`${t}[ ${n} ]`}}Z("ArrayElementNode",$c);class Kc extends Pe{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}Z("ConvertNode",Kc);class Mt extends Pe{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).dependenciesCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(e.context.tempWrite!==!1&&s!=="void"&&t!=="void"&&this.hasDependencies(e)){const a=super.build(e,s),o=e.getVarFromNode(this,null,s),c=e.getPropertyName(o);return e.addLineFlowCode(`${c} = ${a}`),r.snippet=a,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}}Z("TempNode",Mt);class Rd extends Mt{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),a=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),a.push(l)}const o=`${e.getType(n)}( ${a.join(", ")} )`;return e.format(o,n,t)}}Z("JoinNode",Rd);const Yy=Yc.join("");class Sc extends Pe{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Yc.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let a=null;this.getVectorLength()>=s&&(a=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,a);this.components.length===s&&this.components===Yy.slice(0,this.components.length)?r=e.format(c,a,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}Z("SplitNode",Sc);class Cd extends Mt{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),a=e.getTypeFromLength(n.length),o=s.build(e,a),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=Yc[h];d===n[0]?(u.push(o),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}Z("SetNode",Cd);class qn extends oa{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}Z("ConstNode",qn);let ar=null;const Ws=new Map;function O(i,e){if(Ws.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Ws.set(i,e)}const oh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Ld={setup(i,e){const t=e.shift();return i(la(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(ar.assign(t,...n),t);if(Ws.has(e)){const n=Ws.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Ws.has(e.slice(0,e.length-6))){const n=Ws.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=oh(e),Se(new Sc(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=oh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>Se(new Cd(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),Se(new Sc(i,e));if(/^\d+$/.test(e)===!0)return Se(new $c(t,new qn(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},ec=new WeakMap,ah=new WeakMap,jy=function(i,e=null){const t=ls(i);if(t==="node"){let n=ec.get(i);return n===void 0&&(n=new Proxy(i,Ld),ec.set(i,n),ec.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return Se(Tc(i,e));if(t==="shader")return J(i)}return i},$y=function(i,e=null){for(const t in i)i[t]=Se(i[t],e);return i},Ky=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=Se(i[n],e);return i},Zy=function(i,e=null,t=null,n=null){const s=r=>Se(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...$s(r))):t!==null?(t=Se(t),(...r)=>s(new i(e,...$s(r),t))):(...r)=>s(new i(e,...$s(r)))},Jy=function(i,...e){return Se(new i(...$s(e)))};class Qy extends Pe{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let a=ah.get(e.constructor);a===void 0&&(a=new WeakMap,ah.set(e.constructor,a));let o=a.get(t);return o===void 0&&(o=Se(e.buildFunctionNode(t)),a.set(t,o)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(o),Se(o.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return Se(r)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class eM extends Pe{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return la(e),Se(new Qy(this,e))}setup(){return this.call()}}const tM=[!1,!0],nM=[0,1,2,3],iM=[-1,-2],Pd=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Zc=new Map;for(const i of tM)Zc.set(i,new qn(i));const Jc=new Map;for(const i of nM)Jc.set(i,new qn(i,"uint"));const Qc=new Map([...Jc].map(i=>new qn(i.value,"int")));for(const i of iM)Qc.set(i,new qn(i,"int"));const aa=new Map([...Qc].map(i=>new qn(i.value)));for(const i of Pd)aa.set(i,new qn(i));for(const i of Pd)aa.set(-i,new qn(-i));const ca={bool:Zc,uint:Jc,ints:Qc,float:aa},ch=new Map([...Zc,...aa]),Tc=(i,e)=>ch.has(i)?ch.get(i):i.isNode===!0?i:new qn(i,e),sM=i=>{try{return i.getNodeType()}catch{return}},gt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[Ad(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return Se(e.get(t[0]));if(t.length===1){const s=Tc(t[0],i);return sM(s)===i?Se(s):Se(new Kc(s,i))}const n=t.map(s=>Tc(s));return Se(new Rd(n,i))}},rM=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Pr(i){return new Proxy(new eM(i),Ld)}const Se=(i,e=null)=>jy(i,e),la=(i,e=null)=>new $y(i,e),$s=(i,e=null)=>new Ky(i,e),G=(...i)=>new Zy(...i),ae=(...i)=>new Jy(...i),J=i=>{const e=new Pr(i),t=(...n)=>{let s;return la(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};Z("ShaderNode",Pr);const lh=i=>{ar=i},oM=()=>ar,yt=(...i)=>ar.if(...i);function aM(i){return ar&&ar.add(i),i}O("append",aM);const cM=new gt("color"),C=new gt("float",ca.float),L=new gt("int",ca.int),ge=new gt("uint",ca.uint),_s=new gt("bool",ca.bool),Ye=new gt("vec2"),Id=new gt("ivec2"),lM=new gt("uvec2"),uM=new gt("bvec2"),z=new gt("vec3"),hM=new gt("ivec3"),jr=new gt("uvec3"),Dd=new gt("bvec3"),Ce=new gt("vec4"),dM=new gt("ivec4"),fM=new gt("uvec4"),pM=new gt("bvec4"),Ud=new gt("mat2"),mM=new gt("imat2"),gM=new gt("umat2"),_M=new gt("bmat2"),hi=new gt("mat3"),xM=new gt("imat3"),vM=new gt("umat3"),yM=new gt("bmat3"),Ir=new gt("mat4"),MM=new gt("imat4"),SM=new gt("umat4"),TM=new gt("bmat4"),EM=(i="")=>Se(new qn(i,"string")),AM=i=>Se(new qn(i,"ArrayBuffer"));O("color",cM);O("float",C);O("int",L);O("uint",ge);O("bool",_s);O("vec2",Ye);O("ivec2",Id);O("uvec2",lM);O("bvec2",uM);O("vec3",z);O("ivec3",hM);O("uvec3",jr);O("bvec3",Dd);O("vec4",Ce);O("ivec4",dM);O("uvec4",fM);O("bvec4",pM);O("mat2",Ud);O("imat2",mM);O("umat2",gM);O("bmat2",_M);O("mat3",hi);O("imat3",xM);O("umat3",vM);O("bmat3",yM);O("mat4",Ir);O("imat4",MM);O("umat4",SM);O("bmat4",TM);O("string",EM);O("arrayBuffer",AM);const NM=G($c),bM=(i,e)=>Se(new Kc(Se(i),e));O("element",NM);O("convert",bM);class $i extends oa{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=qy}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const a=r.getInputType(e),o=e.getUniformFromNode(r,a,e.shaderStage,e.context.label),c=e.getPropertyName(o);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const bt=(i,e)=>{const t=rM(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return Se(new $i(n,t))};Z("UniformNode",$i);class wM extends $i{constructor(e=[]){super(),this.isArrayUniformNode=!0,this.nodes=e}getNodeType(e){return this.nodes[0].getNodeType(e)}}Z("ArrayUniformNode",wM);class Od extends Mt{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}generate(e,t){const n=this.targetNode,s=this.sourceNode,r=n.getNodeType(e),a=n.build(e),o=s.build(e,r),c=`${a} = ${o}`;if(t==="void"){e.addLineFlowCode(c);return}else return s.getNodeType(e)==="void"?(e.addLineFlowCode(c),a):e.format(c,r,t)}}const RM=G(Od);Z("AssignNode",Od);O("assign",RM);class Fd extends Pe{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,s=this.getNodeType(e),r=e.getVaryingFromNode(this,t,s);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment");const a=e.getPropertyName(r,sh.VERTEX);return e.flowNodeFromShaderStage(sh.VERTEX,n,s,a),e.getPropertyName(r)}}const Ct=G(Fd);O("varying",Ct);Z("VaryingNode",Fd);class ua extends Pe{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),a=e.getTypeFromAttribute(r),o=e.getAttribute(t,a);return e.shaderStage==="vertex"?e.format(o.name,a,n):Ct(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const pn=(i,e)=>Se(new ua(i,e));Z("AttributeNode",ua);class Vd extends Pe{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const zd=G(Vd);O("bypass",zd);Z("BypassNode",Vd);let CM=0;class LM{constructor(){this.id=CM++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class Bd extends Pe{constructor(e,t=new LM){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=this.cache||e.globalCache;e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const Bo=G(Bd),PM=i=>Bo(i,null);O("cache",Bo);O("globalCache",PM);Z("CacheNode",Bd);class el extends Pe{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Ri=G(el),IM=(i,e)=>Ri(i,{label:e});O("context",Ri);O("label",IM);Z("ContextNode",el);class di extends Pe{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===di.VERTEX)s=e.getVertexIndex();else if(n===di.INSTANCE)s=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=Ct(this).build(e,t),r}}di.VERTEX="vertex";di.INSTANCE="instance";const DM=ae(di,di.VERTEX),UM=ae(di,di.INSTANCE);Z("IndexNode",di);class Gd{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class Hd extends Pe{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),a=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${a}`),r}}const Ur=G(Hd);O("temp",Ur);O("toVar",(...i)=>Ur(...i).append());Z("VarNode",Hd);class Gt extends Pe{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const Bn=(i,e)=>Se(new Gt(i,e)),zi=(i,e)=>Se(new Gt(i,e,!0)),un=ae(Gt,"vec4","DiffuseColor"),Dr=ae(Gt,"float","Roughness"),OM=ae(Gt,"float","Metalness"),Ec=ae(Gt,"float","Clearcoat"),Go=ae(Gt,"float","ClearcoatRoughness"),Xs=ae(Gt,"vec3","Sheen"),tl=ae(Gt,"float","SheenRoughness"),nl=ae(Gt,"float","Iridescence"),kd=ae(Gt,"float","IridescenceIOR"),Wd=ae(Gt,"float","IridescenceThickness"),Ei=ae(Gt,"color","SpecularColor"),Ac=ae(Gt,"float","Shininess"),FM=ae(Gt,"vec4","Output"),Ks=ae(Gt,"float","dashSize"),Ho=ae(Gt,"float","gapSize");ae(Gt,"float","pointWidth");Z("PropertyNode",Gt);class VM extends Gt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}Z("ParameterNode",VM);class il extends Pe{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}G(il);Z("CodeNode",il);class zM extends il{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,a=e.getCodeFromNode(this,r);s!==""&&(a.name=s);const o=e.getPropertyName(a);let c=this.getNodeFunction(e).getCode(o);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),m=l[h].build(e,"property");c=c.replace(d,m)}return a.code=c+`
`,t==="property"?o:e.format(`${o}()`,r,t)}}Z("FunctionNode",zM);class Xd extends ua{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const mi=(...i)=>Se(new Xd(...i));Z("UVNode",Xd);class qd extends Pe{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const Yd=G(qd);O("textureSize",Yd);Z("TextureSizeNode",qd);class At extends Mt{constructor(e,t,n,...s){if(super(),this.op=e,s.length>0){let r=n;for(let a=0;a<s.length;a++)r=new At(e,r,s[a]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,a=s.getNodeType(e),o=typeof r<"u"?r.getNodeType(e):null;if(a==="void"||o==="void")return"void";if(n==="%")return a;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(a);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(a),e.getTypeLength(o));return c>1?`bvec${c}`:"bool"}else return a==="float"&&e.isMatrix(o)?o:e.isMatrix(a)&&e.isVector(o)?e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(o)?e.getVectorFromMatrix(o):e.getTypeLength(o)>e.getTypeLength(a)?o:a}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,a=this.getNodeType(e,t);let o=null,c=null;a!=="void"?(o=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(o)?c=o:o=c="float":n===">>"||n==="<<"?(o=a,c=e.changeComponentType(c,"uint")):e.isMatrix(o)&&e.isVector(c)?c=e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(c)?o=e.getVectorFromMatrix(c):o=c=a):o=c=a;const l=s.build(e,o),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,a,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,a,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,a,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,a,t):n==="!"||n==="~"?e.format(`(${n}${l})`,o,t):d?e.format(`${d}( ${l}, ${u} )`,a,t):e.format(`( ${l} ${n} ${u} )`,a,t);if(o!=="void")return d?e.format(`${d}( ${l}, ${u} )`,a,t):e.format(`${l} ${n} ${u}`,a,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const Dn=G(At,"+"),Ot=G(At,"-"),pt=G(At,"*"),cr=G(At,"/"),BM=G(At,"%"),GM=G(At,"=="),HM=G(At,"!="),kM=G(At,"<"),jd=G(At,">"),WM=G(At,"<="),XM=G(At,">="),qM=G(At,"&&"),YM=G(At,"||"),jM=G(At,"!"),$M=G(At,"^^"),KM=G(At,"&"),ZM=G(At,"~"),JM=G(At,"|"),QM=G(At,"^"),eS=G(At,"<<"),tS=G(At,">>");O("add",Dn);O("sub",Ot);O("mul",pt);O("div",cr);O("remainder",BM);O("equal",GM);O("notEqual",HM);O("lessThan",kM);O("greaterThan",jd);O("lessThanEqual",WM);O("greaterThanEqual",XM);O("and",qM);O("or",YM);O("not",jM);O("xor",$M);O("bitAnd",KM);O("bitNot",ZM);O("bitOr",JM);O("bitXor",QM);O("shiftLeft",eS);O("shiftRight",tS);Z("OperatorNode",At);class U extends Mt{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),a=e.isMatrix(n)?0:e.getTypeLength(n),o=e.isMatrix(s)?0:e.getTypeLength(s);return r>a&&r>o?t:a>o?n:o>r?s:t}getNodeType(e){const t=this.method;return t===U.LENGTH||t===U.DISTANCE||t===U.DOT?"float":t===U.CROSS?"vec3":t===U.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),a=this.aNode,o=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===U.TRANSFORM_DIRECTION){let u=a,h=o;e.isMatrix(u.getNodeType(e))?h=Ce(z(h),0):u=Ce(z(u),0);const d=pt(u,h).xyz;return Wn(d).build(e,t)}else{if(n===U.NEGATE)return e.format("( - "+a.build(e,r)+" )",s,t);if(n===U.ONE_MINUS)return Ot(1,a).build(e,t);if(n===U.RECIPROCAL)return cr(1,a).build(e,t);if(n===U.DIFFERENCE)return Ln(Ot(a,o)).build(e,t);{const u=[];return n===U.CROSS||n===U.MOD?u.push(a.build(e,s),o.build(e,s)):n===U.STEP?u.push(a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r),o.build(e,r)):l&&(n===U.MIN||n===U.MAX)||n===U.MOD?u.push(a.build(e,r),o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r)):n===U.REFRACT?u.push(a.build(e,r),o.build(e,r),c.build(e,"float")):n===U.MIX?u.push(a.build(e,r),o.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(a.build(e,r)),o!==null&&u.push(o.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}U.RADIANS="radians";U.DEGREES="degrees";U.EXP="exp";U.EXP2="exp2";U.LOG="log";U.LOG2="log2";U.SQRT="sqrt";U.INVERSE_SQRT="inversesqrt";U.FLOOR="floor";U.CEIL="ceil";U.NORMALIZE="normalize";U.FRACT="fract";U.SIN="sin";U.COS="cos";U.TAN="tan";U.ASIN="asin";U.ACOS="acos";U.ATAN="atan";U.ABS="abs";U.SIGN="sign";U.LENGTH="length";U.NEGATE="negate";U.ONE_MINUS="oneMinus";U.DFDX="dFdx";U.DFDY="dFdy";U.ROUND="round";U.RECIPROCAL="reciprocal";U.TRUNC="trunc";U.FWIDTH="fwidth";U.BITCAST="bitcast";U.ATAN2="atan2";U.MIN="min";U.MAX="max";U.MOD="mod";U.STEP="step";U.REFLECT="reflect";U.DISTANCE="distance";U.DIFFERENCE="difference";U.DOT="dot";U.CROSS="cross";U.POW="pow";U.TRANSFORM_DIRECTION="transformDirection";U.MIX="mix";U.CLAMP="clamp";U.REFRACT="refract";U.SMOOTHSTEP="smoothstep";U.FACEFORWARD="faceforward";const $d=C(1e-6);C(1e6);const uh=C(Math.PI);C(Math.PI*2);const nS=G(U,U.RADIANS),iS=G(U,U.DEGREES),sS=G(U,U.EXP),rS=G(U,U.EXP2),oS=G(U,U.LOG),Kd=G(U,U.LOG2),Ss=G(U,U.SQRT),aS=G(U,U.INVERSE_SQRT),$r=G(U,U.FLOOR),Zd=G(U,U.CEIL),Wn=G(U,U.NORMALIZE),sl=G(U,U.FRACT),Bi=G(U,U.SIN),os=G(U,U.COS),cS=G(U,U.TAN),lS=G(U,U.ASIN),uS=G(U,U.ACOS),hS=G(U,U.ATAN),Ln=G(U,U.ABS),rl=G(U,U.SIGN),dS=G(U,U.LENGTH),fS=G(U,U.NEGATE),pS=G(U,U.ONE_MINUS),mS=G(U,U.DFDX),gS=G(U,U.DFDY),_S=G(U,U.ROUND),xS=G(U,U.RECIPROCAL),Jd=G(U,U.TRUNC),vS=G(U,U.FWIDTH);G(U,U.BITCAST);const yS=G(U,U.ATAN2),Or=G(U,U.MIN),ri=G(U,U.MAX),MS=G(U,U.MOD),SS=G(U,U.STEP),TS=G(U,U.REFLECT),ES=G(U,U.DISTANCE),AS=G(U,U.DIFFERENCE),hr=G(U,U.DOT),NS=G(U,U.CROSS),ui=G(U,U.POW),bS=G(U,U.POW,2),wS=G(U,U.POW,3),RS=G(U,U.POW,4),CS=G(U,U.TRANSFORM_DIRECTION),LS=i=>pt(rl(i),ui(Ln(i),1/3)),PS=i=>hr(i,i),Un=G(U,U.MIX),ko=(i,e=0,t=1)=>Se(new U(U.CLAMP,Se(i),Se(e),Se(t))),IS=i=>ko(i),DS=G(U,U.REFRACT),xs=G(U,U.SMOOTHSTEP),US=G(U,U.FACEFORWARD),OS=(i,e,t)=>Un(e,t,i),FS=(i,e,t)=>xs(e,t,i);O("radians",nS);O("degrees",iS);O("exp",sS);O("exp2",rS);O("log",oS);O("log2",Kd);O("sqrt",Ss);O("inverseSqrt",aS);O("floor",$r);O("ceil",Zd);O("normalize",Wn);O("fract",sl);O("sin",Bi);O("cos",os);O("tan",cS);O("asin",lS);O("acos",uS);O("atan",hS);O("abs",Ln);O("sign",rl);O("length",dS);O("lengthSq",PS);O("negate",fS);O("oneMinus",pS);O("dFdx",mS);O("dFdy",gS);O("round",_S);O("reciprocal",xS);O("trunc",Jd);O("fwidth",vS);O("atan2",yS);O("min",Or);O("max",ri);O("mod",MS);O("step",SS);O("reflect",TS);O("distance",ES);O("dot",hr);O("cross",NS);O("pow",ui);O("pow2",bS);O("pow3",wS);O("pow4",RS);O("transformDirection",CS);O("mix",OS);O("clamp",ko);O("refract",DS);O("smoothstep",FS);O("faceForward",US);O("difference",AS);O("saturate",IS);O("cbrt",LS);Z("MathNode",U);const VS=J(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),a=Un(n,s,r);return Ce(a,e.a)}),zS=J(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),a=Un(n,s,r);return Ce(a,e.a)}),hh=i=>{let e=null;return i===In?e="Linear":i===Qt&&(e="sRGB"),e},Qd=(i,e)=>hh(i)+"To"+hh(e);class An extends Mt{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===An.LINEAR_TO_LINEAR?t:BS[e]({value:t})}}An.LINEAR_TO_LINEAR="LinearToLinear";An.LINEAR_TO_sRGB="LinearTosRGB";An.sRGB_TO_LINEAR="sRGBToLinear";const BS={[An.LINEAR_TO_sRGB]:zS,[An.sRGB_TO_LINEAR]:VS},GS=(i,e)=>Se(new An(Qd(In,e),Se(i))),ef=(i,e)=>Se(new An(Qd(e,In),Se(i))),HS=G(An,An.LINEAR_TO_sRGB),kS=G(An,An.sRGB_TO_LINEAR);O("linearTosRGB",HS);O("sRGBToLinear",kS);O("linearToColorSpace",GS);O("colorSpaceToLinear",ef);Z("ColorSpaceNode",An);class tf extends Pe{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const ol=G(tf);Z("ExpressionNode",tf);class nf extends $i{constructor(e){super(0),this.textureNode=e,this.updateType=Pt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const al=G(nf);Z("MaxMipLevelNode",nf);class dr extends $i{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=Pt.NONE,this.setUpdateMatrix(t===null)}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return mi(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return bt(t.matrix).mul(z(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?Pt.FRAME:Pt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),s!==null&&e.context.getTextureLevelAlgorithm!==void 0&&(s=e.context.getTextureLevelAlgorithm(this,s)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,a){const o=this.value;let c;return s?c=e.generateTextureLevel(o,t,n,s,r):a?c=e.generateTextureCompare(o,t,n,a,r):this.sampler===!1?c=e.generateTextureLoad(o,t,n,r):c=e.generateTexture(o,t,n,r),c}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const a=e.getDataFromNode(this);let o=a.propertyName;if(o===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:m}=n,g=this.generateUV(e,u),_=h?h.build(e,"float"):null,p=m?m.build(e,"int"):null,f=d?d.build(e,"float"):null,T=e.getVarFromNode(this);o=e.getPropertyName(T);const y=this.generateSnippet(e,r,g,_,p,f);e.addLineFlowCode(`${o} = ${y}`),e.context.tempWrite!==!1&&(a.snippet=y,a.propertyName=o)}let c=o;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=ef(ol(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,Se(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(al(t)),Se(t)}level(e){const t=this.clone();return t.levelNode=e,t}size(e){return Yd(this,e)}compare(e){const t=this.clone();return t.compareNode=Se(e),Se(t)}depth(e){const t=this.clone();return t.depthNode=Se(e),Se(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Hn=G(dr),WS=(...i)=>Hn(...i).setSampler(!1);O("texture",Hn);Z("TextureNode",dr);class Kr extends Pe{constructor(e,t,n=null){super(),this.property=e,this.index=null,this.uniformType=t,this.object=n,this.reference=null,this.node=null,this.updateType=Pt.OBJECT,this.setNodeType(t)}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setIndex(e){return this.index=e,this}getIndex(){return this.index}setNodeType(e){let t=null;e==="texture"?t=Hn(null):t=bt(e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}update(){let e=this.reference[this.property];this.index!==null&&(e=e[this.index]),this.node.value=e}setup(){return this.node}}const vs=(i,e,t)=>Se(new Kr(i,e,t)),XS=(i,e,t,n)=>Se(new Kr(i,t,n).setIndex(e));Z("ReferenceNode",Kr);class sf extends Kr{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}setup(e){const t=this.material!==null?this.material:e.material;return this.node.value=t[this.property],super.setup(e)}}const qS=(i,e,t)=>Se(new sf(i,e,t));Z("MaterialReferenceNode",sf);class He extends Pe{constructor(e=He.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=Pt.OBJECT,this._uniformNode=new $i(null)}getNodeType(){const e=this.scope;if(e===He.WORLD_MATRIX||e===He.VIEW_MATRIX)return"mat4";if(e===He.NORMAL_MATRIX)return"mat3";if(e===He.POSITION||e===He.VIEW_POSITION||e===He.DIRECTION||e===He.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===He.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===He.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===He.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===He.POSITION)n.value=n.value||new P,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===He.SCALE)n.value=n.value||new P,n.value.setFromMatrixScale(t.matrixWorld);else if(s===He.DIRECTION)n.value=n.value||new P,t.getWorldDirection(n.value);else if(s===He.VIEW_POSITION){const r=e.camera;n.value=n.value||new P,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===He.WORLD_MATRIX||t===He.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===He.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===He.POSITION||t===He.VIEW_POSITION||t===He.DIRECTION||t===He.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}He.VIEW_MATRIX="viewMatrix";He.NORMAL_MATRIX="normalMatrix";He.WORLD_MATRIX="worldMatrix";He.POSITION="position";He.SCALE="scale";He.VIEW_POSITION="viewPosition";He.DIRECTION="direction";G(He,He.DIRECTION);G(He,He.VIEW_MATRIX);G(He,He.NORMAL_MATRIX);G(He,He.WORLD_MATRIX);const Nc=G(He,He.POSITION);G(He,He.SCALE);const rf=G(He,He.VIEW_POSITION);Z("Object3DNode",He);class Je extends He{constructor(e=Je.POSITION){super(e),this.updateType=Pt.RENDER}getNodeType(e){const t=this.scope;return t===Je.PROJECTION_MATRIX||t===Je.PROJECTION_MATRIX_INVERSE?"mat4":t===Je.NEAR||t===Je.FAR||t===Je.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,s=this.scope;s===Je.VIEW_MATRIX?n.value=t.matrixWorldInverse:s===Je.PROJECTION_MATRIX?n.value=t.projectionMatrix:s===Je.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:s===Je.NEAR?n.value=t.near:s===Je.FAR?n.value=t.far:s===Je.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===Je.PROJECTION_MATRIX||t===Je.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===Je.NEAR||t===Je.FAR||t===Je.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}Je.PROJECTION_MATRIX="projectionMatrix";Je.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";Je.NEAR="near";Je.FAR="far";Je.LOG_DEPTH="logDepth";const Ai=ae(Je,Je.PROJECTION_MATRIX);ae(Je,Je.PROJECTION_MATRIX_INVERSE);const tc=ae(Je,Je.NEAR),nc=ae(Je,Je.FAR),YS=ae(Je,Je.LOG_DEPTH),Ki=ae(Je,Je.VIEW_MATRIX);ae(Je,Je.NORMAL_MATRIX);ae(Je,Je.WORLD_MATRIX);ae(Je,Je.POSITION);Z("CameraNode",Je);class on extends He{constructor(e=on.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}ae(on,on.DIRECTION);const ys=ae(on,on.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),of=ae(on,on.NORMAL_MATRIX),Wo=ae(on,on.WORLD_MATRIX);ae(on,on.POSITION);ae(on,on.SCALE);ae(on,on.VIEW_POSITION);Z("ModelNode",on);class Xt extends Pe{constructor(e=Xt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Xt.GEOMETRY)n=pn("normal","vec3");else if(t===Xt.LOCAL)n=Ct(Xo);else if(t===Xt.VIEW){const s=of.mul(Li);n=Wn(Ct(s))}else if(t===Xt.WORLD){const s=ji.transformDirection(Ki);n=Wn(Ct(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Xt.GEOMETRY="geometry";Xt.LOCAL="local";Xt.VIEW="view";Xt.WORLD="world";const Xo=ae(Xt,Xt.GEOMETRY),Li=ae(Xt,Xt.LOCAL).temp("Normal"),ji=ae(Xt,Xt.VIEW),af=ae(Xt,Xt.WORLD),Ut=Bn("vec3","TransformedNormalView"),jS=Ut.transformDirection(Ki).normalize(),qs=Bn("vec3","TransformedClearcoatNormalView");Z("NormalNode",Xt);const dh=new Map;class le extends Pe{constructor(e){super(),this.scope=e}getCache(e,t){let n=dh.get(e);return n===void 0&&(n=qS(e,t),dh.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===le.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===le.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===le.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture(n).r:s=C(1);else if(n===le.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===le.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===le.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===le.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=ji;else if(n===le.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===le.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===le.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=ji;else if(n===le.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===le.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===le.IRIDESCENCE_THICKNESS){const r=vs(1,"float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const a=vs(0,"float",t.iridescenceThicknessRange);s=r.sub(a).mul(this.getTexture(n).g).add(a)}else s=r}else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}le.ALPHA_TEST="alphaTest";le.COLOR="color";le.OPACITY="opacity";le.SHININESS="shininess";le.SPECULAR_COLOR="specular";le.SPECULAR_STRENGTH="specularStrength";le.REFLECTIVITY="reflectivity";le.ROUGHNESS="roughness";le.METALNESS="metalness";le.NORMAL="normal";le.CLEARCOAT="clearcoat";le.CLEARCOAT_ROUGHNESS="clearcoatRoughness";le.CLEARCOAT_NORMAL="clearcoatNormal";le.EMISSIVE="emissive";le.ROTATION="rotation";le.SHEEN="sheen";le.SHEEN_ROUGHNESS="sheenRoughness";le.IRIDESCENCE="iridescence";le.IRIDESCENCE_IOR="iridescenceIOR";le.IRIDESCENCE_THICKNESS="iridescenceThickness";le.LINE_SCALE="scale";le.LINE_DASH_SIZE="dashSize";le.LINE_GAP_SIZE="gapSize";le.LINE_WIDTH="linewidth";le.LINE_DASH_OFFSET="dashOffset";le.POINT_WIDTH="pointWidth";const $S=ae(le,le.ALPHA_TEST),Fr=ae(le,le.COLOR),KS=ae(le,le.SHININESS),ZS=ae(le,le.EMISSIVE),cf=ae(le,le.OPACITY),JS=ae(le,le.SPECULAR_COLOR),QS=ae(le,le.SPECULAR_STRENGTH);ae(le,le.REFLECTIVITY);const eT=ae(le,le.ROUGHNESS),tT=ae(le,le.METALNESS),nT=ae(le,le.NORMAL),iT=ae(le,le.CLEARCOAT),sT=ae(le,le.CLEARCOAT_ROUGHNESS),rT=ae(le,le.CLEARCOAT_NORMAL),oT=ae(le,le.ROTATION),aT=ae(le,le.SHEEN),cT=ae(le,le.SHEEN_ROUGHNESS),lT=ae(le,le.IRIDESCENCE),uT=ae(le,le.IRIDESCENCE_IOR),hT=ae(le,le.IRIDESCENCE_THICKNESS),bc=ae(le,le.LINE_SCALE),lf=ae(le,le.LINE_DASH_SIZE),uf=ae(le,le.LINE_GAP_SIZE),ic=ae(le,le.LINE_WIDTH),fh=ae(le,le.LINE_DASH_OFFSET),dT=ae(le,le.POINT_WIDTH);Z("MaterialNode",le);class vt extends Pe{constructor(e=vt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===vt.GEOMETRY)n=pn("position","vec3");else if(t===vt.LOCAL)n=Ct(_n);else if(t===vt.WORLD){const s=Wo.mul(Tn);n=Ct(s)}else if(t===vt.VIEW){const s=ys.mul(Tn);n=Ct(s)}else if(t===vt.VIEW_DIRECTION){const s=fi.negate();n=Wn(Ct(s))}else if(t===vt.WORLD_DIRECTION){const s=Tn.transformDirection(Wo);n=Wn(Ct(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}vt.GEOMETRY="geometry";vt.LOCAL="local";vt.WORLD="world";vt.WORLD_DIRECTION="worldDirection";vt.VIEW="view";vt.VIEW_DIRECTION="viewDirection";const _n=ae(vt,vt.GEOMETRY),Tn=ae(vt,vt.LOCAL).temp("Position"),fT=ae(vt,vt.WORLD),pT=ae(vt,vt.WORLD_DIRECTION),fi=ae(vt,vt.VIEW),Wt=ae(vt,vt.VIEW_DIRECTION);Z("PositionNode",vt);class hf extends Mt{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Ct(e.context.mvp);const t=this.positionNode||Tn;return Ai.mul(ys).mul(t)}}const ph=G(hf);Z("ModelViewProjectionNode",hf);class df extends oa{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=Oo,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,a=this.bufferOffset,o=n.isInterleavedBuffer===!0?n:new _d(n,r),c=new Wc(o,s,a);o.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=Ct(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const ha=(i,e,t,n)=>Se(new df(i,e,t,n)),mT=(i,e,t,n)=>ha(i,e,t,n).setUsage(Qh),gT=(i,e,t,n)=>ha(i,e,t,n).setInstanced(!0),_T=(i,e,t,n)=>mT(i,e,t,n).setInstanced(!0);O("toAttribute",i=>ha(i.value));Z("BufferAttributeNode",df);class ff extends Pe{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null}setup(){let e=this.instanceMatrixNode;if(e===null){const o=this.instanceMesh.instanceMatrix,c=new Gy(o.array,16,1),l=o.usage===Qh?_T:gT,u=[l(c,"vec4",16,0),l(c,"vec4",16,4),l(c,"vec4",16,8),l(c,"vec4",16,12)];e=Ir(...u),this.instanceMatrixNode=e}const t=e.mul(Tn).xyz,n=hi(e[0].xyz,e[1].xyz,e[2].xyz),s=Li.div(z(n[0].dot(n[0]),n[1].dot(n[1]),n[2].dot(n[2]))),r=n.mul(s).xyz;Tn.assign(t),Li.assign(r)}}const xT=G(ff);Z("InstanceNode",ff);class cl extends $i{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const pf=(i,e,t)=>Se(new cl(i,e,t));Z("BufferNode",cl);class zt extends Pe{constructor(e=zt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===zt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===zt.GEOMETRY)n=pn("tangent","vec4");else if(t===zt.LOCAL)n=Ct(qo.xyz);else if(t===zt.VIEW){const s=ys.mul(ll).xyz;n=Wn(Ct(s))}else if(t===zt.WORLD){const s=da.transformDirection(Ki);n=Wn(Ct(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}zt.GEOMETRY="geometry";zt.LOCAL="local";zt.VIEW="view";zt.WORLD="world";const qo=ae(zt,zt.GEOMETRY),ll=ae(zt,zt.LOCAL),da=ae(zt,zt.VIEW),vT=ae(zt,zt.WORLD),mf=Ur(da,"TransformedTangentView");Wn(mf.transformDirection(Ki));Z("TangentNode",zt);class gf extends Pe{constructor(e){super("void"),this.skinnedMesh=e,this.updateType=Pt.OBJECT,this.skinIndexNode=pn("skinIndex","uvec4"),this.skinWeightNode=pn("skinWeight","vec4"),this.bindMatrixNode=bt(e.bindMatrix,"mat4"),this.bindMatrixInverseNode=bt(e.bindMatrixInverse,"mat4"),this.boneMatricesNode=pf(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:a}=this,o=a.element(t.x),c=a.element(t.y),l=a.element(t.z),u=a.element(t.w),h=s.mul(Tn),d=Dn(o.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),m=r.mul(d).xyz;let g=Dn(n.x.mul(o),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=r.mul(g).mul(s);const _=g.transformDirection(Li).xyz;Tn.assign(m),Li.assign(_),e.hasGeometryAttribute("tangent")&&ll.assign(_)}generate(e,t){if(t!=="void")return Tn.build(e,t)}update(){this.skinnedMesh.skeleton.update()}}const yT=G(gf);Z("SkinningNode",gf);const sc=new WeakMap,Cn=new ut,mh=J(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const a=L(DM).mul(t).add(r),o=a.div(n),c=a.sub(o.mul(n));return WS(i,Id(c,o)).depth(s).mul(e)});function MT(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let a=sc.get(i);if(a===void 0||a.count!==r){let T=function(){p.dispose(),sc.delete(i),i.removeEventListener("dispose",T)};var o=T;a!==void 0&&a.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,m=1;const g=4096;d>g&&(m=Math.ceil(d/g),d=g);const _=new Float32Array(d*m*4*r),p=new zc(_,d,m,r);p.type=ci,p.needsUpdate=!0;const f=h*4;for(let y=0;y<r;y++){const E=c[y],I=l[y],R=u[y],N=d*m*4*y;for(let Y=0;Y<E.count;Y++){const ie=Y*f;e===!0&&(Cn.fromBufferAttribute(E,Y),_[N+ie+0]=Cn.x,_[N+ie+1]=Cn.y,_[N+ie+2]=Cn.z,_[N+ie+3]=0),t===!0&&(Cn.fromBufferAttribute(I,Y),_[N+ie+4]=Cn.x,_[N+ie+5]=Cn.y,_[N+ie+6]=Cn.z,_[N+ie+7]=0),n===!0&&(Cn.fromBufferAttribute(R,Y),_[N+ie+8]=Cn.x,_[N+ie+9]=Cn.y,_[N+ie+10]=Cn.z,_[N+ie+11]=R.itemSize===4?Cn.w:1)}}a={count:r,texture:p,stride:h,size:new Ne(d,m)},sc.set(i,a),i.addEventListener("dispose",T)}return a}class _f extends Pe{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=bt(1),this.updateType=Pt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,a=r!==void 0?r.length:0,{texture:o,stride:c,size:l}=MT(t);n===!0&&Tn.mulAssign(this.morphBaseInfluence),s===!0&&Li.mulAssign(this.morphBaseInfluence);const u=L(l.width);for(let h=0;h<a;h++){const d=XS("morphTargetInfluences",h,"float"),m=L(h);n===!0&&Tn.addAssign(mh({bufferMap:o,influence:d,stride:c,width:u,depth:m,offset:L(0)})),s===!0&&Li.addAssign(mh({bufferMap:o,influence:d,stride:c,width:u,depth:m,offset:L(1)}))}}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const ST=G(_f);Z("MorphNode",_f);class xf extends Pe{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return Wt.negate().reflect(Ut).transformDirection(Ki)}}const TT=ae(xf);Z("ReflectVectorNode",xf);class vf extends dr{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return TT}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===sr||!n.isRenderTargetTexture?z(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const ul=G(vf);O("cubeTexture",ul);Z("CubeTextureNode",vf);class fa extends Pe{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}Z("LightingNode",fa);let Tr=null;class Ts extends fa{constructor(e=null){super(),this.updateType=Pt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.color=new ke,this._defaultColorNode=bt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){let t=this.shadowNode;if(t===null){Tr===null&&(Tr=e.createNodeMaterial(),Tr.fragmentNode=Ce(0,0,0,1),Tr.isShadowNodeMaterial=!0);const n=this.light.shadow,s=e.getRenderTarget(n.mapSize.width,n.mapSize.height),r=new qr;r.minFilter=kt,r.magFilter=kt,r.image.width=n.mapSize.width,r.image.height=n.mapSize.height,r.compareFunction=Zh,s.depthTexture=r,n.camera.updateProjectionMatrix();const a=vs("bias","float",n),o=vs("normalBias","float",n);let c=bt(n.matrix).mul(fT.add(af.mul(o)));c=c.xyz.div(c.w);const l=c.x.greaterThanEqual(0).and(c.x.lessThanEqual(1)).and(c.y.greaterThanEqual(0)).and(c.y.lessThanEqual(1)).and(c.z.lessThanEqual(1));let u=c.z.add(a);e.renderer.coordinateSystem===sr&&(u=u.mul(2).sub(1)),c=z(c.x,c.y.oneMinus(),u),t=((m,g,_)=>Hn(m,g).compare(_))(r,c.xy,c.z);const d=Hn(s.texture,c);this.rtt=s,this.colorNode=this.colorNode.mul(l.mix(1,t.mix(d.a.mix(1,d),1))),this.shadowNode=t,this.updateBeforeType=Pt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r}=e,a=r.overrideMaterial;r.overrideMaterial=Tr,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const o=s.getRenderTarget(),c=s.getRenderObjectFunction();s.setRenderObjectFunction((l,...u)=>{l.castShadow===!0&&s.renderObject(l,...u)}),s.setRenderTarget(t),s.render(r,n.shadow.camera),s.setRenderTarget(o),s.setRenderObjectFunction(c),r.overrideMaterial=a}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}Z("AnalyticLightNode",Ts);const Yo=new WeakMap,ET=i=>i.sort((e,t)=>e.id-t.id);class AT extends Pe{constructor(e=[]){super("vec3"),this.totalDiffuseNode=z().temp("totalDiffuse"),this.totalSpecularNode=z().temp("totalSpecular"),this.outgoingLightNode=z().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:a,totalSpecularNode:o}=this;t.outgoingLight=s;const c=e.addStack();n.start(t,c,e);for(const p of r)p.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:m,indirectSpecular:g}=t.reflectedLight;let _=h.add(m);l!==null&&(_=z(u!==null?u.mix(_,l):l)),a.assign(_),o.assign(d.add(g)),s.assign(a.add(o)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=ET(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,a=Yo.has(r)?Yo.get(r):Ts;s=Se(new a(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const NT=G(AT);function fr(i,e){if(Yo.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);Yo.set(i,e)}class yf extends fa{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}Z("AONode",yf);class Mf extends el{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=z().temp("directDiffuse"),s=z().temp("directSpecular"),r=z().temp("indirectDiffuse"),a=z().temp("indirectSpecular"),o={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:a};return{radiance:z().temp("radiance"),irradiance:z().temp("irradiance"),iblIrradiance:z().temp("iblIrradiance"),ambientOcclusion:C(1).temp("ambientOcclusion"),reflectedLight:o,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const Sf=G(Mf);O("lightingContext",Sf);Z("LightingContextNode",Mf);class Tf extends Mt{constructor(e=pT){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.negate().clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Ye(t,n)}}const Ef=G(Tf);Z("EquirectUVNode",Tf);class Af extends Pe{constructor(e,t=null){super("float"),this.textureNode=e,this.roughnessNode=t}setup(){const{textureNode:e,roughnessNode:t}=this,n=al(e),s=t.mul(t).mul(Math.PI).div(t.add(1));return n.add(s.log2()).clamp(0,n)}}const bT=G(Af);Z("SpecularMIPLevelNode",Af);const gh=new WeakMap;class Nf extends fa{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode&&t.value.isCubeTexture!==!0){let c=gh.get(t.value);if(c===void 0){const l=t.value,u=e.renderer,h=e.getCubeRenderTarget(512).fromEquirectangularTexture(u,l);c=ul(h.texture),gh.set(t.value,c)}t=c}const n=vs("envMapIntensity","float",e.material),s=Ri(t,_h(Dr,Ut)).mul(n),r=Ri(t,wT(jS)).mul(Math.PI).mul(n),a=Bo(s);e.context.radiance.addAssign(a),e.context.iblIrradiance.addAssign(r);const o=e.context.lightingModel.clearcoatRadiance;if(o){const c=Ri(t,_h(Go,qs)).mul(n),l=Bo(c);o.addAssign(l)}}}const _h=(i,e)=>{let t=null,n=null;return{getUV:s=>{let r=null;return t===null&&(t=Wt.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(Ki)),s.isCubeTextureNode?r=t:s.isTextureNode&&(n===null&&(n=Ef(t)),r=n),r},getTextureLevel:()=>i,getTextureLevelAlgorithm:(s,r)=>bT(s,r)}},wT=i=>{let e=null;return{getUV:t=>{let n=null;return t.isCubeTextureNode?n=i:t.isTextureNode&&(e===null&&(e=Ef(i),e=Ye(e.x,e.y.oneMinus())),n=e),n},getTextureLevel:t=>al(t)}};Z("EnvironmentNode",Nf);let rc,oc;class ft extends Pe{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ft.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=Pt.NONE;return(this.scope===ft.RESOLUTION||this.scope===ft.VIEWPORT)&&(e=Pt.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===ft.VIEWPORT?e.getViewport(oc):e.getDrawingBufferSize(rc)}setup(){const e=this.scope;let t=null;if(e===ft.RESOLUTION)t=bt(rc||(rc=new Ne));else if(e===ft.VIEWPORT)t=bt(oc||(oc=new ut));else{t=RT.div(xh);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Ye(n,s)}return t}generate(e){if(this.scope===ft.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(xh).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}}ft.COORDINATE="coordinate";ft.RESOLUTION="resolution";ft.VIEWPORT="viewport";ft.TOP_LEFT="topLeft";ft.BOTTOM_LEFT="bottomLeft";ft.TOP_RIGHT="topRight";ft.BOTTOM_RIGHT="bottomRight";const RT=ae(ft,ft.COORDINATE),xh=ae(ft,ft.RESOLUTION),Zs=ae(ft,ft.VIEWPORT),Vr=ae(ft,ft.TOP_LEFT);ae(ft,ft.BOTTOM_LEFT);ae(ft,ft.TOP_RIGHT);ae(ft,ft.BOTTOM_RIGHT);Z("ViewportNode",ft);const Er=new Ne;class Zr extends dr{constructor(e=Vr,t=null,n=null){n===null&&(n=new vd,n.minFilter=Gi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=Pt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(Er);const n=this.value;(n.image.width!==Er.width||n.image.height!==Er.height)&&(n.image.width=Er.width,n.image.height=Er.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){return new this.constructor(this.uvNode,this.levelNode,this.value)}}const CT=G(Zr),LT=G(Zr,null,null,{generateMipmaps:!0});O("viewportTexture",CT);O("viewportMipTexture",LT);Z("ViewportTextureNode",Zr);let ac=null;class bf extends Zr{constructor(e=Vr,t=null){ac===null&&(ac=new qr),super(e,t,ac)}}const wf=G(bf);O("viewportDepthTexture",wf);Z("ViewportDepthTextureNode",bf);class sn extends Pe{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===sn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===sn.DEPTH)t=wc(fi.z,tc,nc);else if(e===sn.DEPTH_TEXTURE){const n=this.valueNode||wf(),s=Rf(n,tc,nc);t=wc(s,tc,nc)}else e===sn.DEPTH_PIXEL&&this.valueNode!==null&&(t=Cf().assign(this.valueNode));return t}}const wc=(i,e,t)=>i.add(e).div(e.sub(t)),Rf=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));sn.DEPTH="depth";sn.DEPTH_TEXTURE="depthTexture";sn.DEPTH_PIXEL="depthPixel";const Cf=G(sn,sn.DEPTH_PIXEL);ae(sn,sn.DEPTH);G(sn,sn.DEPTH_TEXTURE);const Lf=ae(sn,sn.DEPTH_PIXEL);Lf.assign=i=>Cf(i);Z("ViewportDepthNode",sn);const Rc=new Map;class Yn extends Ci{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.colorSpaced=!0,this.lightsNode=null,this.envNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Ed(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;if(this.fragmentNode===null){this.depthWrite===!0&&this.setupDepth(e),this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const n=this.setupLighting(e);t=this.setupOutput(e,Ce(n,un.a)),FM.assign(t),this.outputNode!==null&&(t=this.outputNode)}else t=this.setupOutput(e,this.fragmentNode);e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=ph().w.add(1).log2().mul(YS).mul(.5)),n!==null&&Lf.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&ST(t).append(),t.isSkinnedMesh===!0&&yT(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&xT(t).append(),this.positionNode!==null&&Tn.assign(this.positionNode);const s=ph();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({geometry:e}){let t=this.colorNode?Ce(this.colorNode):Fr;this.vertexColors===!0&&e.hasAttribute("color")&&(t=Ce(t.xyz.mul(pn("color","vec3")),t.a)),un.assign(t);const n=this.opacityNode?C(this.opacityNode):cf;if(un.a.assign(un.a.mul(n)),this.alphaTestNode!==null||this.alphaTest>0){const s=this.alphaTestNode!==null?C(this.alphaTestNode):$S;un.a.lessThanEqual(s).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=fi.dFdx().cross(fi.dFdy()).normalize();Ut.assign(e)}else{const e=this.normalNode?z(this.normalNode):nT;Ut.assign(e)}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?ul(this.envMap):Hn(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];t&&n.push(new Nf(t)),e.material.aoMap&&n.push(new yf(Hn(e.material.aoMap)));let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=NT([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,o=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=un.rgb;if(o&&o.hasLight!==!1){const l=this.setupLightingModel(e);c=Sf(o,l,n,s)}else n!==null&&(c=z(s!==null?Un(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(z(r||ZS))),c}setupOutput(e,t){const n=e.renderer,s=e.toneMappingNode;if(this.toneMapped===!0&&s&&(t=Ce(s.context({color:t.rgb}),t.a)),this.fog===!0){const r=e.fogNode;r&&(t=Ce(r.mixAssign(t.rgb),t.a))}if(this.colorSpaced===!0){const r=n.currentColorSpace;r!==In&&r!==Pn&&(t=t.linearToColorSpace(r))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=Xn.prototype.toJSON.call(this,e),s=zo(this);n.inputNodes={};for(const{property:a,childNode:o}of s)n.inputNodes[a]=o.toJSON(e).uuid;function r(a){const o=[];for(const c in a){const l=a[c];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images),c=r(e.nodes);a.length>0&&(n.textures=a),o.length>0&&(n.images=o),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=PT(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function Nn(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(Rc.has(i)){console.warn(`Redefinition of node material ${i}`);return}Rc.set(i,e),e.type=i}function PT(i){const e=Rc.get(i);if(e!==void 0)return new e}Nn("NodeMaterial",Yn);class hl extends Pe{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e){const t=this.getNodeType(e),n={tempWrite:!1},{ifNode:s,elseNode:r}=this,a=s.getNodeType(e)!=="void"||r&&r.getNodeType(e)!=="void",o=a?Bn(t).build(e):"",c=Ri(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${c} ) {

`).addFlowTab();let l=Ri(this.ifNode,n).build(e,t);if(l=a?o+" = "+l+";":l,e.removeFlowTab().addFlowCode(e.tab+"	"+l+`

`+e.tab+"}"),r!==null){e.addFlowCode(` else {

`).addFlowTab();let u=Ri(r,n).build(e,t);u=o?o+" = "+u+";":u,e.removeFlowTab().addFlowCode(e.tab+"	"+u+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return o}}const Xi=G(hl);O("cond",Xi);Z("CondNode",hl);class Pf extends Pe{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Pr(t);return this._currentCond=Xi(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Pr(t),s=Xi(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Pr(e),this}build(e,...t){const n=oM();lh(this);for(const s of this.nodes)s.build(e,"void");return lh(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}G(Pf);Z("StackNode",Pf);class If extends Pe{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}Z("StructTypeNode",If);class Df extends Pe{constructor(...e){super(),this.isOutputStructNode=!0,this.members=e}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new If(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const s=e.getPropertyName(n),r=this.members,a=s!==""?s+".":"";for(let o=0;o<r.length;o++){const c=r[o].build(e,t);e.addLineFlowCode(`${a}m${o} = ${c}`)}return s}}G(Df);Z("OutputStructNode",Df);class Uf extends Pe{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const IT=G(Uf);O("hash",IT);Z("HashNode",Uf);const Cc=(i,e)=>ui(pt(4,i.mul(Ot(1,i))),e),DT=(i,e)=>i.lessThan(.5)?Cc(i.mul(2),e).div(2):Ot(1,Cc(pt(Ot(1,i),2),e).div(2)),UT=(i,e,t)=>ui(cr(ui(i,e),Dn(ui(i,e),ui(Ot(1,i),t))),1/e),OT=(i,e)=>Bi(uh.mul(e.mul(i).sub(1))).div(uh.mul(e.mul(i).sub(1)));O("parabola",Cc);O("gain",DT);O("pcurve",UT);O("sinc",OT);class Of extends Pe{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let s=0,r=this.params.length-1;s<r;s++){const a=this.params[s],o=a.isNode!==!0&&a.name||this.getVarName(s),c=a.isNode!==!0&&a.type||"int";n[o]=ol(o,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},s=this.params,r=t.stackNode;for(let c=0,l=s.length-1;c<l;c++){const u=s[c];let h=null,d=null,m=null,g=null,_=null,p=null;u.isNode?(g="int",m=this.getVarName(c),h="0",d=u.build(e,g),_="<"):(g=u.type||"int",m=u.name||this.getVarName(c),h=u.start,d=u.end,_=u.condition,p=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",_=">="):d!==void 0&&h===void 0&&(h="0",_="<"),_===void 0&&(Number(h)>Number(d)?_=">=":_="<"));const f={start:h,end:d,condition:_},T=f.start,y=f.end;let E="",I="",R="";p||(g==="int"||g==="uint"?_.includes("<")?p="++":p="--":_.includes("<")?p="+= 1.":p="-= 1."),E+=e.getVar(g,m)+" = "+T,I+=m+" "+_+" "+y,R+=m+" "+p;const N=`for ( ${E}; ${I}; ${R} )`;e.addFlowCode((c===0?`
`:"")+e.tab+N+` {

`).addFlowTab()}const a=Ri(r,n).build(e,"void"),o=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+a);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),o}}const Bt=(...i)=>Se(new Of($s(i,"int"))).append();O("loop",(i,...e)=>zd(i,Bt(...e)));Z("LoopNode",Of);const ai=J(([i])=>i.fract().sub(.5).abs()),Ff=J(([i])=>z(ai(i.z.add(ai(i.y.mul(1)))),ai(i.z.add(ai(i.x.mul(1)))),ai(i.y.add(ai(i.x.mul(1)))))),FT=J(([i,e,t])=>{const n=z(i).toVar(),s=C(1.4).toVar(),r=C(0).toVar(),a=z(n).toVar();return Bt({start:C(0),end:C(3),type:"float",condition:"<="},()=>{const o=z(Ff(a.mul(2))).toVar();n.addAssign(o.add(t.mul(C(.1).mul(e)))),a.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=C(ai(n.z.add(ai(n.x.add(ai(n.y)))))).toVar();r.addAssign(c.div(s)),a.addAssign(.14)}),r});ai.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Ff.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});FT.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let cc;class Vf extends hl{constructor(e){cc=cc||ol("discard"),super(e,cc)}}const VT=G(Vf),zT=i=>VT(i).append();O("discard",zT);Z("DiscardNode",Vf);class zf extends Pe{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const a of this.functionNodes){const c=a.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],m=l[h];d.getNodeType(e)===m.type?u++:u=0}u>r&&(s=a,r=u)}}this._candidateFnCall=n=s(...t)}return n}}const BT=G(zf),jn=i=>(...e)=>BT(i,...e);Z("FunctionOverloadingNode",zf);class Bf extends Mt{constructor(){super("vec2")}setup(){const e=z(Wt.z,0,Wt.x.negate()).normalize(),t=Wt.cross(e);return Ye(e.dot(Ut),t.dot(Ut)).mul(.495).add(.5)}}ae(Bf);Z("MatcapUVNode",Bf);class Mn extends $i{constructor(e=Mn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=Pt.FRAME}update(e){const t=this.scope,n=this.scale;t===Mn.LOCAL?this.value+=e.deltaTime*n:t===Mn.DELTA?this.value=e.deltaTime*n:t===Mn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}Mn.LOCAL="local";Mn.GLOBAL="global";Mn.DELTA="delta";Mn.FRAME="frame";const GT=(i,e=0)=>Se(new Mn(Mn.LOCAL,i,e));ae(Mn,Mn.FRAME).uint();Z("TimerNode",Mn);class qt extends Pe{constructor(e=qt.SINE,t=GT()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=Se(this.timeNode);let n=null;return e===qt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===qt.SQUARE?n=t.fract().round():e===qt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===qt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}qt.SINE="sine";qt.SQUARE="square";qt.TRIANGLE="triangle";qt.SAWTOOTH="sawtooth";G(qt,qt.SINE);G(qt,qt.SQUARE);G(qt,qt.TRIANGLE);G(qt,qt.SAWTOOTH);Z("OscNode",qt);class pi extends Mt{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===pi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===pi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}pi.DIRECTION_TO_COLOR="directionToColor";pi.COLOR_TO_DIRECTION="colorToDirection";const Gf=G(pi,pi.DIRECTION_TO_COLOR),HT=G(pi,pi.COLOR_TO_DIRECTION);O("directionToColor",Gf);O("colorToDirection",HT);Z("PackingNode",pi);class dl extends Pe{constructor(e,t,n,s=C(0),r=C(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:a}=this;let o=e.sub(t).div(n.sub(t));return a===!0&&(o=o.clamp()),o.mul(r.sub(s)).add(s)}}const kT=G(dl,null,null,{doClamp:!1}),WT=G(dl);O("remap",kT);O("remapClamp",WT);Z("RemapNode",dl);class Hf extends Mt{constructor(e,t,n=Ye(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const XT=G(Hf);O("rotateUV",XT);Z("RotateUVNode",Hf);class kf extends Mt{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),a=t.sin();return Ud(r,a,a.negate(),r).mul(n)}else{const r=t,a=Ir(Ce(1,0,0,0),Ce(0,os(r.x),Bi(r.x).negate(),0),Ce(0,Bi(r.x),os(r.x),0),Ce(0,0,0,1)),o=Ir(Ce(os(r.y),0,Bi(r.y),0),Ce(0,1,0,0),Ce(Bi(r.y).negate(),0,os(r.y),0),Ce(0,0,0,1)),c=Ir(Ce(os(r.z),Bi(r.z).negate(),0,0),Ce(Bi(r.z),os(r.z),0,0),Ce(0,0,1,0),Ce(0,0,0,1));return a.mul(o).mul(c).mul(Ce(n,1)).xyz}}}const qT=G(kf);O("rotate",qT);Z("RotateNode",kf);class Wf extends Pe{constructor(e,t=mi(),n=C(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,a=e.mod(s.mul(r)).floor(),o=a.mod(s),c=r.sub(a.add(1).div(s).ceil()),l=n.reciprocal(),u=Ye(o,c);return t.add(u).mul(l)}}G(Wf);Z("SpriteSheetUVNode",Wf);class Xf extends Pe{constructor(e,t=null,n=null,s=C(1),r=Tn,a=Li){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=a}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:a}=this;let o=a.abs().normalize();o=o.div(o.dot(z(1)));const c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),h=e.value,d=t!==null?t.value:h,m=n!==null?n.value:h,g=Hn(h,c).mul(o.x),_=Hn(d,l).mul(o.y),p=Hn(m,u).mul(o.z);return Dn(g,_,p)}}const YT=G(Xf),jT=(...i)=>YT(...i);O("triplanarTexture",jT);Z("TriplanarTexturesNode",Xf);new Ti;new P;new P;new P;new wt;new P(0,0,-1);new ut;new P;new P;new ut;new Ne;new Yi;Ye(Vr.x.oneMinus(),Vr.y);class Yt extends Pe{constructor(e=Yt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===Yt.GEOMETRY?n=Xo.cross(qo):t===Yt.LOCAL?n=Li.cross(ll):t===Yt.VIEW?n=ji.cross(da):t===Yt.WORLD&&(n=af.cross(vT));const s=n.mul(qo.w).xyz;return Wn(Ct(s)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Yt.GEOMETRY="geometry";Yt.LOCAL="local";Yt.VIEW="view";Yt.WORLD="world";ae(Yt,Yt.GEOMETRY);ae(Yt,Yt.LOCAL);const $T=ae(Yt,Yt.VIEW);ae(Yt,Yt.WORLD);const KT=Wn(Ut.cross(mf).mul(qo.w));Wn(KT.transformDirection(Ki));Z("BitangentNode",Yt);class ZT extends ua{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new ut(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}Z("VertexColorNode",ZT);const pa=1/6,qf=i=>pt(pa,pt(i,pt(i,i.negate().add(3)).sub(3)).add(1)),Lc=i=>pt(pa,pt(i,pt(i,pt(3,i).sub(6))).add(4)),Yf=i=>pt(pa,pt(i,pt(i,pt(-3,i).add(3)).add(3)).add(1)),Pc=i=>pt(pa,ui(i,3)),vh=i=>qf(i).add(Lc(i)),yh=i=>Yf(i).add(Pc(i)),Mh=i=>Dn(-1,Lc(i).div(qf(i).add(Lc(i)))),Sh=i=>Dn(1,Pc(i).div(Yf(i).add(Pc(i)))),Th=(i,e,t)=>{const n=i.uvNode,s=pt(n,e.zw).add(.5),r=$r(s),a=sl(s),o=vh(a.x),c=yh(a.x),l=Mh(a.x),u=Sh(a.x),h=Mh(a.y),d=Sh(a.y),m=Ye(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),g=Ye(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),_=Ye(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),p=Ye(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),f=vh(a.y).mul(Dn(o.mul(i.uv(m).level(t)),c.mul(i.uv(g).level(t)))),T=yh(a.y).mul(Dn(o.mul(i.uv(_).level(t)),c.mul(i.uv(p).level(t))));return f.add(T)},JT=(i,e)=>{const t=Ye(i.size(L(e))),n=Ye(i.size(L(e.add(1)))),s=cr(1,t),r=cr(1,n),a=Th(i,Ce(s,t),$r(e)),o=Th(i,Ce(r,n),Zd(e));return sl(e).mix(a,o)};class jf extends Mt{constructor(e,t=C(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return JT(this.textureNode,this.blurNode)}}const QT=G(jf);O("bicubic",QT);Z("TextureBicubicNode",jf);class $f extends Pe{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}ae($f);Z("PointUVNode",$f);class ii extends Pe{constructor(e=ii.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===ii.BACKGROUND_BLURRINESS?s=vs("backgroundBlurriness","float",n):t===ii.BACKGROUND_INTENSITY?s=vs("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}ii.BACKGROUND_BLURRINESS="backgroundBlurriness";ii.BACKGROUND_INTENSITY="backgroundIntensity";ae(ii,ii.BACKGROUND_BLURRINESS);ae(ii,ii.BACKGROUND_INTENSITY);Z("SceneNode",ii);class eE extends cl{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this._attribute=null,this._varying=null}getInputType(){return"storageBuffer"}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=ha(this.value),this._varying=Ct(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}Z("StorageBufferNode",eE);class Kf extends dr{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),a=n.build(e,"uvec2"),o=s.build(e,"vec4"),c=e.generateTextureStore(e,r,a,o);e.addLineFlowCode(c)}}G(Kf);Z("TextureStoreNode",Kf);class tE extends Kr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}Z("UserDataNode",tE);const nE=J(({base:i,blend:e})=>{const t=n=>e[n].lessThan($d).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return z(t("x"),t("y"),t("z"))}),iE=J(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return z(t("x"),t("y"),t("z"))}),sE=J(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return z(t("x"),t("y"),t("z"))}),rE=J(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return z(t("x"),t("y"),t("z"))});class en extends Mt{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===en.BURN?r=nE(s):e===en.DODGE?r=iE(s):e===en.SCREEN?r=sE(s):e===en.OVERLAY&&(r=rE(s)),r}}en.BURN="burn";en.DODGE="dodge";en.SCREEN="screen";en.OVERLAY="overlay";const oE=G(en,en.BURN),aE=G(en,en.DODGE),cE=G(en,en.OVERLAY),lE=G(en,en.SCREEN);O("burn",oE);O("dodge",aE);O("overlay",cE);O("screen",lE);Z("BlendModeNode",en);class Zf extends Pe{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}const uE=ae(Zf),Jf=C(uE).mul(2).sub(1);Z("FrontFacingNode",Zf);const hE=J(({textureNode:i,bumpScale:e})=>{let t=i;if(t.isTextureNode!==!0&&t.traverse(a=>{a.isTextureNode===!0&&(t=a)}),t.isTextureNode!==!0)throw new Error("THREE.TSL: dHdxy_fwd() requires a TextureNode.");const n=C(i),s=t.uvNode||mi(),r=a=>i.cache().context({getUV:()=>a,forceUVContext:!0});return Ye(C(r(s.add(s.dFdx()))).sub(n),C(r(s.add(s.dFdy()))).sub(n)).mul(e)}),dE=J(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),a=t,o=r.cross(a),c=a.cross(s),l=s.dot(o).mul(Jf),u=l.sign().mul(n.x.mul(o).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class Qf extends Mt{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=hE({textureNode:this.textureNode,bumpScale:e});return dE({surf_pos:fi,surf_norm:ji,dHdxy:t})}}const fE=G(Qf);O("bumpMap",fE);Z("BumpMapNode",Qf);const pE=J(({color:i,adjustment:e})=>e.mix(ep(i.rgb),i.rgb)),mE=J(({color:i,adjustment:e})=>{const t=Dn(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return Un(i.rgb,n,s)}),gE=J(({color:i,adjustment:e})=>{const t=z(.57735,.57735,.57735),n=e.cos();return z(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(hr(t,i.rgb).mul(n.oneMinus())))))});class En extends Mt{constructor(e,t,n=C(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===En.SATURATION?r=pE(s):e===En.VIBRANCE?r=mE(s):e===En.HUE?r=gE(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}En.SATURATION="saturation";En.VIBRANCE="vibrance";En.HUE="hue";const _E=G(En,En.SATURATION),xE=G(En,En.VIBRANCE),vE=G(En,En.HUE),yE=z(.2125,.7154,.0721),ep=(i,e=yE)=>hr(i,e),tp=(i,e)=>Un(z(0),i,ep(i).sub(e).max(0));O("saturation",_E);O("vibrance",xE);O("hue",vE);O("threshold",tp);Z("ColorAdjustmentNode",En);const ME=J(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),a=e.dFdy(),o=s.dFdx(),c=s.dFdy(),l=t,u=a.cross(l),h=l.cross(r),d=u.mul(o.x).add(h.mul(c.x)),m=u.mul(o.y).add(h.mul(c.y)),g=d.dot(d).max(m.dot(m)),_=Jf.mul(g.inverseSqrt());return Dn(d.mul(n.x,_),m.mul(n.y,_),l.mul(n.z)).normalize()});class np extends Mt{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=ps}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=z(s.xy.mul(n),s.z));let r=null;return t===Kh?r=of.mul(s).normalize():t===ps&&(e.hasGeometryAttribute("tangent")===!0?r=TE.mul(s).normalize():r=ME({eye_pos:fi,surf_norm:ji,mapN:s,uv:mi()})),r}}const SE=G(np),TE=hi(da,$T,ji);O("normalMap",SE);Z("NormalMapNode",np);class ip extends Mt{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const EE=G(ip);O("posterize",EE);Z("PosterizeNode",ip);const AE=J(({color:i,exposure:e})=>i.mul(e).clamp()),NE=J(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),bE=J(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),wE=J(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),RE=J(({color:i,exposure:e})=>{const t=hi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=hi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=wE({color:i}),i=n.mul(i),i.clamp()}),CE=hi(z(1.6605,-.1246,-.0182),z(-.5876,1.1329,-.1006),z(-.0728,-.0083,1.1187)),LE=hi(z(.6274,.0691,.0164),z(.3293,.9195,.088),z(.0433,.0113,.8956)),PE=J(([i])=>{const e=z(i).toVar(),t=z(e.mul(e)).toVar(),n=z(t.mul(t)).toVar();return C(15.5).mul(n.mul(t)).sub(pt(40.14,n.mul(e))).add(pt(31.96,n).sub(pt(6.868,t.mul(e))).add(pt(.4298,t).add(pt(.1191,e).sub(.00232))))}),IE=J(({color:i,exposure:e})=>{const t=z(i).toVar(),n=hi(z(.856627153315983,.137318972929847,.11189821299995),z(.0951212405381588,.761241990602591,.0767994186031903),z(.0482516061458583,.101439036467562,.811302368396859)),s=hi(z(1.1271005818144368,-.1413297634984383,-.14132976349843826),z(-.11060664309660323,1.157823702216272,-.11060664309660294),z(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=C(-12.47393),a=C(4.026069);return t.mulAssign(e),t.assign(LE.mul(t)),t.assign(n.mul(t)),t.assign(ri(t,1e-10)),t.assign(Kd(t)),t.assign(t.sub(r).div(a.sub(r))),t.assign(ko(t,0,1)),t.assign(PE(t)),t.assign(s.mul(t)),t.assign(ui(ri(z(0),t),z(2.2))),t.assign(CE.mul(t)),t.assign(ko(t,0,1)),t}),DE={[Oh]:AE,[Fh]:NE,[Vh]:bE,[zh]:RE,[Bh]:IE};class UE extends Mt{constructor(e=ti,t=C(1),n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===ti)return t;const s={exposure:this.exposureNode,color:t},r=DE[n];let a=null;return r?a=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),a=t),a}}Z("ToneMappingNode",UE);let lc=null;class sp extends Zr{constructor(e=Vr,t=null){lc===null&&(lc=new vd),super(e,t,lc)}}const OE=G(sp);O("viewportSharedTexture",OE);Z("ViewportSharedTextureNode",sp);class Ic extends dr{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Jr extends Mt{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new qr;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new Yi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nr});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=Pt.FRAME,this._textureNode=Se(new Ic(this,r.texture)),this._depthTextureNode=Se(new Ic(this,s)),this._depthNode=null,this._cameraNear=bt(0),this._cameraFar=bt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=wc(Rf(this._depthTextureNode,e,t),e,t)}return this._depthNode}setup(){return this.scope===Jr.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(new Ne);this.setSize(r.width,r.height);const a=t.toneMapping,o=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=ti,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=a,t.toneMappingNode=o,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Jr.COLOR="color";Jr.DEPTH="depth";const fl=(i,e)=>Se(new Ic(i,e));Z("PassNode",Jr);const FE=new Hc(-1,1,1,-1,0,1);class VE extends kn{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gn(t,2))}}const zE=new VE;class ma{constructor(e=null){this._mesh=new Gn(zE,e)}dispose(){this._mesh.geometry.dispose()}async renderAsync(e){await e.renderAsync(this._mesh,FE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}get render(){return this.renderAsync}}const Eh=new ma,Ah=new ma;class BE extends Mt{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Ye(1),this._invSize=bt(new Ne),this._passDirection=bt(new Ne),this._horizontalRT=new Yi,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Yi,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=fl(this,this._verticalRT.texture),this.updateBeforeType=Pt.RENDER,this.resolution=new Ne(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),a=n.value;Eh.material=this._material,Ah.material=this._material,this.setSize(s.image.width,s.image.height);const o=s.type;this._horizontalRT.texture.type=o,this._verticalRT.texture.type=o,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Eh.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),Ah.render(t),t.setRenderTarget(r),n.value=a}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Ce();const n=t.uvNode||mi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=J(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Ye(this.directionNode).mul(this._passDirection),d=C(l[0]).toVar(),m=Ce(s(n).mul(d)).toVar();for(let g=1;g<c;g++){const _=C(g),p=C(l[g]),f=Ye(h.mul(u.mul(_))).toVar(),T=Ce(s(n.add(f))),y=Ce(s(n.sub(f)));m.addAssign(T.add(y).mul(p)),d.addAssign(pt(2,p))}return m.div(d)}),a=this._material||(this._material=e.createNodeMaterial());a.fragmentNode=r();const o=e.getNodeProperties(this);return o.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const GE=(i,e)=>Se(new BE(Se(i),e));O("gaussianBlur",GE);const Nh=new ma;class HE extends Mt{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Hn(),this.damp=bt(t),this._compRT=new Yi,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Yi,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=fl(this,this._compRT.texture),this.updateBeforeType=Pt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=s.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const a=t.getRenderTarget(),o=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),Nh.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(s.image.width,s.image.height),t.setRenderTarget(a),n.value=o}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Ce();const s=t.uvNode||mi();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),a=J(([u,h])=>{const d=C(h).toVar(),m=Ce(u).toVar();return ri(rl(m.sub(d)),0)}),o=J(()=>{const u=Ce(n),h=Ce(r(s));return u.mulAssign(this.damp.mul(a(u,.1))),ri(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=o(),Nh.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const kE=(i,e)=>Se(new HE(Se(i),e));O("afterImage",kE);const bh=new ma;class WE extends Mt{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=z(.1,0,1),this.samples=s,this.resolution=new Ne(1,1),this._renderTarget=new Yi,this._renderTarget.texture.name="anamorphic",this._invSize=bt(new Ne),this._textureNode=fl(this,this._renderTarget.texture),this.updateBeforeType=Pt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),a=n.value;bh.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),bh.render(t),t.setRenderTarget(r),n.value=a}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Ce();const n=t.uvNode||mi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=J(()=>{const c=this.samples,l=Math.floor(c/2),u=z(0).toVar();return Bt({start:-l,end:l},({i:h})=>{const d=C(h).abs().div(l).oneMinus(),m=Ye(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),g=s(m),_=tp(g,this.tresholdNode).mul(d);u.addAssign(_)}),u.mul(this.colorNode)}),a=this._material||(this._material=e.createNodeMaterial());a.fragmentNode=r();const o=e.getNodeProperties(this);return o.textureNode=t,this._textureNode}}const XE=(i,e=.9,t=3,n=32)=>Se(new WE(Se(i),Se(e),Se(t),n));O("anamorphic",XE);class rp extends Mt{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let o=0;o<r.length;o++){const c=s[o],l=r[o];t.push(l.build(e,c.type))}else for(const o of s){const c=r[o.name];if(c!==void 0)t.push(c.build(e,o.type));else throw new Error(`FunctionCallNode: Input '${o.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const qE=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?$s(e):la(e[0]),Se(new rp(Se(i),e)));O("call",qE);Z("FunctionCallNode",rp);class op extends Pe{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Pi,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:C()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Nd(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=bd(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const Lo=G(op);O("scriptableValue",Lo);Z("ScriptableValueNode",op);class ap extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class YE{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const uc=new ap;class cp extends Pe{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new ap,this._output=Lo(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=Lo(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=Lo(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new YE(this),s=uc.get("THREE"),r=uc.get("TSL"),a=this.getMethod(this.codeNode),o=[n,this._local,uc,e,t,s,r];this._object=a(...o);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:C()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",a=s+this.codeNode.code+r;return this._method=new Function(...e,a),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const jE=G(cp);O("scriptable",jE);Z("ScriptableNode",cp);class ga extends Pe{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}mixAssign(e){return Un(e,this.colorNode,this)}setup(){return this.factorNode}}const $E=G(ga);O("fog",$E);Z("FogNode",ga);class lp extends ga{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(){return xs(this.nearNode,this.farNode,fi.z.negate())}}const KE=G(lp);O("rangeFog",KE);Z("FogRangeNode",lp);class up extends ga{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(){const e=fi.z.negate(),t=this.densityNode;return t.mul(t,e,e).negate().exp().oneMinus()}}const ZE=G(up);O("densityFog",ZE);Z("FogExp2Node",up);let is=null,ss=null;class hp extends Pe{constructor(e=C(),t=C()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(ls(this.minNode.value)),n=e.getTypeLength(ls(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const s=this.minNode.value,r=this.maxNode.value,a=e.getTypeLength(ls(s)),o=e.getTypeLength(ls(r));is=is||new ut,ss=ss||new ut,is.setScalar(0),ss.setScalar(0),a===1?is.setScalar(s):s.isColor?is.set(s.r,s.g,s.b):is.set(s.x,s.y,s.z||0,s.w||0),o===1?ss.setScalar(r):r.isColor?ss.set(r.r,r.g,r.b):ss.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const m=d%c,g=is.getComponent(m),_=ss.getComponent(m);u[d]=Vc.lerp(g,_,Math.random())}const h=this.getNodeType(e);n=pf(u,"vec4",t.count).element(UM).convert(h)}else n=C(0);return n}}G(hp);Z("RangeNode",hp);class dp extends Pe{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=Pt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const JE=(i,e,t)=>Se(new dp(Se(i),e,t));O("compute",JE);Z("ComputeNode",dp);class Ms extends Pe{constructor(e=Ms.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Ms.TARGET_DIRECTION&&(n=Ki.transformDirection(Nc(t).sub(Nc(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ms.TARGET_DIRECTION="targetDirection";const fp=G(Ms,Ms.TARGET_DIRECTION);Z("LightNode",Ms);const pp=J(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class mp extends Ts{constructor(e=null){super(e),this.cutoffDistanceNode=bt(0),this.decayExponentNode=bt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,a=e.context.lightingModel,o=rf(r).sub(fi),c=o.normalize(),l=o.length(),u=pp({lightDistance:l,cutoffDistance:n,decayExponent:s}),h=t.mul(u),d=e.context.reflectedLight;a.direct({lightDirection:c,lightColor:h,reflectedLight:d},e.stack,e)}}Z("PointLightNode",mp);fr(Vy,mp);class gp extends Ts{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=fp(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r},e.stack,e)}}Z("DirectionalLightNode",gp);fr(qc,gp);class pl extends Ts{constructor(e=null){super(e),this.coneCosNode=bt(0),this.penumbraCosNode=bt(0),this.cutoffDistanceNode=bt(0),this.decayExponentNode=bt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return xs(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:a}=this,o=rf(a).sub(fi),c=o.normalize(),l=c.dot(fp(a)),u=this.getSpotAttenuation(l),h=o.length(),d=pp({lightDistance:h,cutoffDistance:s,decayExponent:r}),m=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:m,reflectedLight:g},e.stack,e)}}Z("SpotLightNode",pl);fr(Sd,pl);class QE extends Sd{constructor(e,t,n,s,r,a){super(e,t,n,s,r,a),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const eA=QE;class _p extends pl{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Hn(t,Ye(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}Z("IESSpotLightNode",_p);fr(eA,_p);class xp extends Ts{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}Z("AmbientLightNode",xp);fr(By,xp);class vp extends Ts{constructor(e=null){super(e),this.lightPositionNode=Nc(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=bt(new ke)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,a=ji.dot(s).mul(.5).add(.5),o=Un(n,t,a);e.context.irradiance.addAssign(o)}}Z("HemisphereLightNode",vp);fr(Uy,vp);const tA=J(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class yp extends Mt{constructor(e=mi()){super("float"),this.uvNode=e}setup(){return tA({uv:this.uvNode})}}const nA=G(yp);O("checker",nA);Z("CheckerNode",yp);const iA=new xd;class sA extends Yn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(iA),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=J(()=>{Ct(Ye(),"vUv").assign(mi());const n=pn("instancePosition"),s=Bn("vec4","mvPos");s.assign(ys.mul(Ce(n,1)));const r=Zs.z.div(Zs.w),a=Ai.mul(s),o=Bn("vec2","offset");return o.assign(_n.xy),o.assign(o.mul(dT)),o.assign(o.div(Zs.z)),o.y.assign(o.y.mul(r)),o.assign(o.mul(a.w)),a.assign(a.add(Ce(o,0,0))),a})(),this.fragmentNode=J(()=>{const n=Ct(Ye(),"vUv"),s=Bn("float","alpha");s.assign(1);const r=n.x,a=n.y,o=r.mul(r).add(a.mul(a));if(e){const l=Bn("float","dlen");l.assign(o.fwidth()),s.assign(xs(l.oneMinus(),l.add(1),o).oneMinus())}else o.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=pn("instanceColor").mul(Fr):c=Fr,Ce(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Nn("InstancedPointsNodeMaterial",sA);const rA=new sa;class oA extends Yn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(rA),this.setValues(e)}}Nn("LineBasicNodeMaterial",oA);const aA=new Md;class cA extends Yn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(aA),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?C(this.dashScaleNode):bc,n=this.dashSizeNode?C(this.dashSizeNode):lf,s=this.dashSizeNode?C(this.dashGapNode):uf;Ks.assign(n),Ho.assign(s);const r=Ct(pn("lineDistance").mul(t));(e?r.add(e):r).mod(Ks.add(Ho)).greaterThan(Ks).discard()}}Nn("LineDashedNodeMaterial",cA);const lA=new Md;class uA extends Yn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(lA),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=J(({start:o,end:c})=>{const l=Ai.element(2).element(2),d=Ai.element(3).element(2).mul(-.5).div(l).sub(o.z).div(c.z.sub(o.z));return Ce(Un(o.xyz,c.xyz,d),c.w)});this.vertexNode=J(()=>{zi("vec2","vUv").assign(mi());const o=pn("instanceStart"),c=pn("instanceEnd"),l=Bn("vec4","start"),u=Bn("vec4","end");l.assign(ys.mul(Ce(o,1))),u.assign(ys.mul(Ce(c,1))),s&&(zi("vec3","worldStart").assign(l.xyz),zi("vec3","worldEnd").assign(u.xyz));const h=Zs.z.div(Zs.w),d=Ai.element(2).element(3).equal(-1);yt(d,()=>{yt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const m=Ai.mul(l),g=Ai.mul(u),_=m.xyz.div(m.w),p=g.xyz.div(g.w),f=p.xy.sub(_.xy).temp();f.x.assign(f.x.mul(h)),f.assign(f.normalize());const T=Ur(Ce());if(s){const y=u.xyz.sub(l.xyz).normalize(),E=Un(l.xyz,u.xyz,.5).normalize(),I=y.cross(E).normalize(),R=y.cross(I),N=zi("vec4","worldPos");N.assign(_n.y.lessThan(.5).cond(l,u));const Y=ic.mul(.5);N.addAssign(Ce(_n.x.lessThan(0).cond(I.mul(Y),I.mul(Y).negate()),0)),n||(N.addAssign(Ce(_n.y.lessThan(.5).cond(y.mul(Y).negate(),y.mul(Y)),0)),N.addAssign(Ce(R.mul(Y),0)),yt(_n.y.greaterThan(1).or(_n.y.lessThan(0)),()=>{N.subAssign(Ce(R.mul(2).mul(Y),0))})),T.assign(Ai.mul(N));const ie=Ur(z());ie.assign(_n.y.lessThan(.5).cond(_,p)),T.z.assign(ie.z.mul(T.w))}else{const y=Bn("vec2","offset");y.assign(Ye(f.y,f.x.negate())),f.x.assign(f.x.div(h)),y.x.assign(y.x.div(h)),y.assign(_n.x.lessThan(0).cond(y.negate(),y)),yt(_n.y.lessThan(0),()=>{y.assign(y.sub(f))}).elseif(_n.y.greaterThan(1),()=>{y.assign(y.add(f))}),y.assign(y.mul(ic)),y.assign(y.div(Zs.w)),T.assign(_n.y.lessThan(.5).cond(m,g)),y.assign(y.mul(T.w)),T.assign(T.add(Ce(y,0,0)))}return T})();const a=J(({p1:o,p2:c,p3:l,p4:u})=>{const h=o.sub(l),d=u.sub(l),m=c.sub(o),g=h.dot(d),_=d.dot(m),p=h.dot(m),f=d.dot(d),y=m.dot(m).mul(f).sub(_.mul(_)),I=g.mul(_).sub(p.mul(f)).div(y).clamp(),R=g.add(_.mul(I)).div(f).clamp();return Ye(I,R)});this.fragmentNode=J(()=>{const o=zi("vec2","vUv");if(n){const u=this.offsetNode?C(this.offsetNodeNode):fh,h=this.dashScaleNode?C(this.dashScaleNode):bc,d=this.dashSizeNode?C(this.dashSizeNode):lf,m=this.dashSizeNode?C(this.dashGapNode):uf;Ks.assign(d),Ho.assign(m);const g=pn("instanceDistanceStart"),_=pn("instanceDistanceEnd"),p=_n.y.lessThan(.5).cond(h.mul(g),bc.mul(_)),f=Ct(p.add(fh)),T=u?f.add(u):f;o.y.lessThan(-1).or(o.y.greaterThan(1)).discard(),T.mod(Ks.add(Ho)).greaterThan(Ks).discard()}const c=Bn("float","alpha");if(c.assign(1),s){const u=zi("vec3","worldStart"),h=zi("vec3","worldEnd"),d=zi("vec4","worldPos").xyz.normalize().mul(1e5),m=h.sub(u),g=a({p1:u,p2:h,p3:z(0,0,0),p4:d}),_=u.add(m.mul(g.x)),p=d.mul(g.y),y=_.sub(p).length().div(ic);if(!n)if(e){const E=y.fwidth();c.assign(xs(E.negate().add(.5),E.add(.5),y).oneMinus())}else y.greaterThan(.5).discard()}else if(e){const u=o.x,h=o.y.greaterThan(0).cond(o.y.sub(1),o.y.add(1)),d=u.mul(u).add(h.mul(h)),m=Bn("float","dlen");m.assign(d.fwidth()),yt(o.y.abs().greaterThan(1),()=>{c.assign(xs(m.oneMinus(),m.add(1),d).oneMinus())})}else yt(o.y.abs().greaterThan(1),()=>{const u=o.x,h=o.y.greaterThan(0).cond(o.y.sub(1),o.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=pn("instanceColorStart"),h=pn("instanceColorEnd");l=_n.y.lessThan(.5).cond(u,h).mul(Fr)}else l=Fr;return Ce(l,c)})(),this.needsUpdate=!0}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.setupShaders())}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.setupShaders())}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Nn("Line2NodeMaterial",uA);const hA=new Iy;class dA extends Yn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.colorSpaced=!1,this.setDefaultValues(hA),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?C(this.opacityNode):cf;un.assign(Ce(Gf(Ut),e))}}Nn("MeshNormalNodeMaterial",dA);const fA=new Wr;class pA extends Yn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(fA),this.setValues(e)}}Nn("MeshBasicNodeMaterial",pA);const zr=J(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),jo=J(i=>i.diffuseColor.mul(1/Math.PI)),mA=()=>C(.25),gA=J(({dotNH:i})=>Ac.mul(.5/Math.PI).add(1).mul(i.pow(Ac))),_A=J(({lightDirection:i})=>{const e=i.add(Wt).normalize(),t=Ut.dot(e).clamp(),n=Wt.dot(e).clamp(),s=zr({f0:Ei,f90:1,dotVH:n}),r=mA(),a=gA({dotNH:t});return s.mul(r).mul(a)});class Mp extends Gd{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Ut.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(jo({diffuseColor:un.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(_A({lightDirection:e})).mul(QS))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(jo({diffuseColor:un})))}}const xA=new Dy;class vA extends Yn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(xA),this.setValues(e)}setupLightingModel(){return new Mp(!1)}}Nn("MeshLambertNodeMaterial",vA);const yA=new Py;class MA extends Yn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(yA),this.setValues(e)}setupLightingModel(){return new Mp}setupVariants(){const e=(this.shininessNode?C(this.shininessNode):KS).max(1e-4);Ac.assign(e);const t=this.specularNode||JS;Ei.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Nn("MeshPhongNodeMaterial",MA);const SA=J(()=>{const i=Xo.dFdx().abs().max(Xo.dFdy().abs());return i.x.max(i.y).max(i.z)}),TA=J(i=>{const{roughness:e}=i,t=SA();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),EA=J(i=>{const{alpha:e,dotNL:t,dotNV:n}=i,s=e.pow2(),r=t.mul(s.add(s.oneMinus().mul(n.pow2())).sqrt()),a=n.mul(s.add(s.oneMinus().mul(t.pow2())).sqrt());return cr(.5,r.add(a).max($d))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),AA=J(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),wh=J(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,iridescenceFresnel:r}=i,a=i.normalView||Ut,o=s.pow2(),c=e.add(Wt).normalize(),l=a.dot(e).clamp(),u=a.dot(Wt).clamp(),h=a.dot(c).clamp(),d=Wt.dot(c).clamp();let m=zr({f0:t,f90:n,dotVH:d});r&&(m=nl.mix(m,r));const g=EA({alpha:o,dotNL:l,dotNV:u}),_=AA({alpha:o,dotNH:h});return m.mul(g).mul(_)}),Sp=J(({roughness:i,dotNV:e})=>{const t=Ce(-1,-.0275,-.572,.022),n=Ce(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return Ye(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),NA=J(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=Sp({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),bA=J(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(z(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),wA=J(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=C(1).div(t),r=e.pow2().oneMinus().max(.0078125);return C(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),RA=J(({dotNV:i,dotNL:e})=>C(1).div(C(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),CA=J(({lightDirection:i})=>{const e=i.add(Wt).normalize(),t=Ut.dot(i).clamp(),n=Ut.dot(Wt).clamp(),s=Ut.dot(e).clamp(),r=wA({roughness:tl,dotNH:s}),a=RA({dotNV:n,dotNL:t});return Xs.mul(r).mul(a)}),LA=hi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),PA=i=>{const e=i.sqrt();return z(1).add(e).div(z(1).sub(e))},Rh=(i,e)=>i.sub(e).div(i.add(e)).pow2(),IA=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=z(54856e-17,44201e-17,52481e-17),s=z(1681e3,1795300,2208400),r=z(43278e5,93046e5,66121e5),a=C(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let o=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return o=z(o.x.add(a),o.y,o.z).div(10685e-11),LA.mul(o)},DA=J(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=Un(i,e,xs(0,.03,n)),a=i.div(r).pow2().mul(C(1).sub(t.pow2())),c=C(1).sub(a).sqrt(),l=Rh(r,i),u=zr({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(i).cond(Math.PI,0),m=C(Math.PI).sub(d),g=PA(s.clamp(0,.9999)),_=Rh(g,r.vec3()),p=zr({f0:_,f90:1,dotVH:c}),f=z(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),T=r.mul(n,c,2),y=z(m).add(f),E=u.mul(p).clamp(1e-5,.9999),I=E.sqrt(),R=h.pow2().mul(p).div(z(1).sub(E));let Y=u.add(R),ie=R.sub(h);for(let v=1;v<=2;++v){ie=ie.mul(I);const w=IA(C(v).mul(T),C(v).mul(y)).mul(2);Y=Y.add(ie.mul(w))}return Y.max(z(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),UA=J(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=Xi(t.lessThan(.25),C(-339.2).mul(s).add(C(161.4).mul(t)).sub(25.9),C(-8.48).mul(s).add(C(14.3).mul(t)).sub(9.95)),a=Xi(t.lessThan(.25),C(44).mul(s).sub(C(23.7).mul(t)).add(3.26),C(1.97).mul(s).sub(C(3.27).mul(t)).add(.72));return Xi(t.lessThan(.25),0,C(.1).mul(t).sub(.025)).add(r.mul(n).add(a).exp()).mul(1/Math.PI).saturate()}),hc=z(.04),dc=z(1);class ml extends Gd{constructor(e=!1,t=!1,n=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(){if(this.clearcoat===!0&&(this.clearcoatRadiance=z().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=z().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=z().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=z().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=z().temp("sheenSpecularIndirect")),this.iridescence===!0){const e=Ut.dot(Wt).clamp();this.iridescenceFresnel=DA({outsideIOR:C(1),eta2:kd,cosTheta1:e,thinFilmThickness:Wd,baseF0:Ei}),this.iridescenceF0=bA({f:this.iridescenceFresnel,f90:1,dotVH:e})}}computeMultiscattering(e,t,n=C(1)){const s=Ut.dot(Wt).clamp(),r=Sp({roughness:Dr,dotNV:s}),o=(this.iridescenceF0?nl.mix(Ei,this.iridescenceF0):Ei).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Ei.add(Ei.oneMinus().mul(.047619)),h=o.mul(u).div(l.mul(u).oneMinus());e.addAssign(o),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Ut.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(CA({lightDirection:e}))),this.clearcoat===!0){const o=qs.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(o.mul(wh({lightDirection:e,f0:hc,f90:dc,roughness:Go,normalView:qs})))}n.directDiffuse.addAssign(r.mul(jo({diffuseColor:un.rgb}))),n.directSpecular.addAssign(r.mul(wh({lightDirection:e,f0:Ei,f90:1,roughness:Dr,iridescence:this.iridescence,iridescenceFresnel:this.iridescenceFresnel})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(jo({diffuseColor:un})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(Xs,UA({normal:Ut,viewDir:Wt,roughness:tl}))),this.clearcoat===!0){const l=qs.dot(Wt).clamp(),u=NA({dotNV:l,specularColor:hc,specularF90:dc,roughness:Go});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=z().temp("singleScattering"),r=z().temp("multiScattering"),a=t.mul(1/Math.PI);this.computeMultiscattering(s,r);const o=s.add(r),c=un.mul(o.r.max(o.g).max(o.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(a)),n.indirectDiffuse.addAssign(c.mul(a))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Ut.dot(Wt).clamp().add(e),r=Dr.mul(-16).oneMinus().negate().exp2(),a=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(a)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=qs.dot(Wt).clamp(),s=zr({dotVH:n,f0:hc,f90:dc}),r=t.mul(Ec.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Ec));t.assign(r)}if(this.sheen===!0){const n=Xs.r.max(Xs.g).max(Xs.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const OA=new yd;class Tp extends Yn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(OA),this.setValues(e)}setupLightingModel(){return new ml}setupVariants(){const e=this.metalnessNode?C(this.metalnessNode):tT;OM.assign(e);let t=this.roughnessNode?C(this.roughnessNode):eT;t=TA({roughness:t}),Dr.assign(t);const n=Un(z(.04),un.rgb,e);Ei.assign(n),un.assign(Ce(un.rgb.mul(e.oneMinus()),un.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Nn("MeshStandardNodeMaterial",Tp);const FA=new Ly;class Ep extends Tp{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.setDefaultValues(FA),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}setupLightingModel(){return new ml(this.useClearcoat,this.useSheen,this.useIridescence)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?C(this.clearcoatNode):iT,n=this.clearcoatRoughnessNode?C(this.clearcoatRoughnessNode):sT;Ec.assign(t),Go.assign(n)}if(this.useSheen){const t=this.sheenNode?z(this.sheenNode):aT,n=this.sheenRoughnessNode?C(this.sheenRoughnessNode):cT;Xs.assign(t),tl.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?C(this.iridescenceNode):lT,n=this.iridescenceIORNode?C(this.iridescenceIORNode):uT,s=this.iridescenceThicknessNode?C(this.iridescenceThicknessNode):hT;nl.assign(t),kd.assign(n),Wd.assign(s)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?z(this.clearcoatNormalNode):rT;qs.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,super.copy(e)}}Nn("MeshPhysicalNodeMaterial",Ep);class VA extends ml{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const a=r.material,{thicknessColorNode:o,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=a,m=e.add(Ut.mul(c)).normalize(),g=C(Wt.dot(m.negate()).saturate().pow(h).mul(d)),_=z(g.add(l).mul(o));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class zA extends Ep{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=C(.1),this.thicknessAmbientNode=C(0),this.thicknessAttenuationNode=C(.1),this.thicknessPowerNode=C(2),this.thicknessScaleNode=C(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new VA(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Nn("MeshSSSNodeMaterial",zA);const BA=new xd;class GA extends Yn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(BA),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Nn("PointsNodeMaterial",GA);const HA=new Cy;class kA extends Yn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(HA),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,a=Tn;let o=ys.mul(z(n||0)),c=Ye(Wo[0].xyz.length(),Wo[1].xyz.length());r!==null&&(c=c.mul(r));let l=a.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(bt(e.center).sub(.5))),l=l.mul(c);const u=C(s||oT),h=l.rotate(u);o=Ce(o.xy.add(h),o.zw);const d=Ai.mul(o);return t.vertex=a,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Nn("SpriteNodeMaterial",kA);const Js=J(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),r=_s(i).toVar();return Xi(r,s,n)}),Br=J(([i,e])=>{const t=_s(e).toVar(),n=C(i).toVar();return Xi(t,n.negate(),n)}),Lt=J(([i])=>{const e=C(i).toVar();return L($r(e))}),Et=J(([i,e])=>{const t=C(i).toVar();return e.assign(Lt(t)),t.sub(C(e))}),Ap=J(([i,e,t,n,s,r])=>{const a=C(r).toVar(),o=C(s).toVar(),c=C(n).toVar(),l=C(t).toVar(),u=C(e).toVar(),h=C(i).toVar(),d=C(Ot(1,o)).toVar();return Ot(1,a).mul(h.mul(d).add(u.mul(o))).add(a.mul(l.mul(d).add(c.mul(o))))}),Np=J(([i,e,t,n,s,r])=>{const a=C(r).toVar(),o=C(s).toVar(),c=z(n).toVar(),l=z(t).toVar(),u=z(e).toVar(),h=z(i).toVar(),d=C(Ot(1,o)).toVar();return Ot(1,a).mul(h.mul(d).add(u.mul(o))).add(a.mul(l.mul(d).add(c.mul(o))))}),bp=jn([Ap,Np]),wp=J(([i,e,t,n,s,r,a,o,c,l,u])=>{const h=C(u).toVar(),d=C(l).toVar(),m=C(c).toVar(),g=C(o).toVar(),_=C(a).toVar(),p=C(r).toVar(),f=C(s).toVar(),T=C(n).toVar(),y=C(t).toVar(),E=C(e).toVar(),I=C(i).toVar(),R=C(Ot(1,m)).toVar(),N=C(Ot(1,d)).toVar();return C(Ot(1,h)).toVar().mul(N.mul(I.mul(R).add(E.mul(m))).add(d.mul(y.mul(R).add(T.mul(m))))).add(h.mul(N.mul(f.mul(R).add(p.mul(m))).add(d.mul(_.mul(R).add(g.mul(m))))))}),Rp=J(([i,e,t,n,s,r,a,o,c,l,u])=>{const h=C(u).toVar(),d=C(l).toVar(),m=C(c).toVar(),g=z(o).toVar(),_=z(a).toVar(),p=z(r).toVar(),f=z(s).toVar(),T=z(n).toVar(),y=z(t).toVar(),E=z(e).toVar(),I=z(i).toVar(),R=C(Ot(1,m)).toVar(),N=C(Ot(1,d)).toVar();return C(Ot(1,h)).toVar().mul(N.mul(I.mul(R).add(E.mul(m))).add(d.mul(y.mul(R).add(T.mul(m))))).add(h.mul(N.mul(f.mul(R).add(p.mul(m))).add(d.mul(_.mul(R).add(g.mul(m))))))}),Cp=jn([wp,Rp]),Lp=J(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),r=ge(i).toVar(),a=ge(r.bitAnd(ge(7))).toVar(),o=C(Js(a.lessThan(ge(4)),s,n)).toVar(),c=C(pt(2,Js(a.lessThan(ge(4)),n,s))).toVar();return Br(o,_s(a.bitAnd(ge(1)))).add(Br(c,_s(a.bitAnd(ge(2)))))}),Pp=J(([i,e,t,n])=>{const s=C(n).toVar(),r=C(t).toVar(),a=C(e).toVar(),o=ge(i).toVar(),c=ge(o.bitAnd(ge(15))).toVar(),l=C(Js(c.lessThan(ge(8)),a,r)).toVar(),u=C(Js(c.lessThan(ge(4)),r,Js(c.equal(ge(12)).or(c.equal(ge(14))),a,s))).toVar();return Br(l,_s(c.bitAnd(ge(1)))).add(Br(u,_s(c.bitAnd(ge(2)))))}),Jt=jn([Lp,Pp]),Ip=J(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),r=jr(i).toVar();return z(Jt(r.x,s,n),Jt(r.y,s,n),Jt(r.z,s,n))}),Dp=J(([i,e,t,n])=>{const s=C(n).toVar(),r=C(t).toVar(),a=C(e).toVar(),o=jr(i).toVar();return z(Jt(o.x,a,r,s),Jt(o.y,a,r,s),Jt(o.z,a,r,s))}),Vn=jn([Ip,Dp]),Up=J(([i])=>{const e=C(i).toVar();return pt(.6616,e)}),Op=J(([i])=>{const e=C(i).toVar();return pt(.982,e)}),Fp=J(([i])=>{const e=z(i).toVar();return pt(.6616,e)}),Vp=jn([Up,Fp]),zp=J(([i])=>{const e=z(i).toVar();return pt(.982,e)}),Bp=jn([Op,zp]),vn=J(([i,e])=>{const t=L(e).toVar(),n=ge(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(L(32).sub(t)))}),Gp=J(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(vn(t,L(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(vn(i,L(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(vn(e,L(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(vn(t,L(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(vn(i,L(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(vn(e,L(4))),e.addAssign(i)}),pr=J(([i,e,t])=>{const n=ge(t).toVar(),s=ge(e).toVar(),r=ge(i).toVar();return n.bitXorAssign(s),n.subAssign(vn(s,L(14))),r.bitXorAssign(n),r.subAssign(vn(n,L(11))),s.bitXorAssign(r),s.subAssign(vn(r,L(25))),n.bitXorAssign(s),n.subAssign(vn(s,L(16))),r.bitXorAssign(n),r.subAssign(vn(n,L(4))),s.bitXorAssign(r),s.subAssign(vn(r,L(14))),n.bitXorAssign(s),n.subAssign(vn(s,L(24))),n}),rn=J(([i])=>{const e=ge(i).toVar();return C(e).div(C(ge(L(4294967295))))}),si=J(([i])=>{const e=C(i).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),Hp=J(([i])=>{const e=L(i).toVar(),t=ge(ge(1)).toVar(),n=ge(ge(L(3735928559)).add(t.shiftLeft(ge(2)).add(ge(13)))).toVar();return pr(n.add(ge(e)),n,n)}),kp=J(([i,e])=>{const t=L(e).toVar(),n=L(i).toVar(),s=ge(ge(2)).toVar(),r=ge().toVar(),a=ge().toVar(),o=ge().toVar();return r.assign(a.assign(o.assign(ge(L(3735928559)).add(s.shiftLeft(ge(2)).add(ge(13)))))),r.addAssign(ge(n)),a.addAssign(ge(t)),pr(r,a,o)}),Wp=J(([i,e,t])=>{const n=L(t).toVar(),s=L(e).toVar(),r=L(i).toVar(),a=ge(ge(3)).toVar(),o=ge().toVar(),c=ge().toVar(),l=ge().toVar();return o.assign(c.assign(l.assign(ge(L(3735928559)).add(a.shiftLeft(ge(2)).add(ge(13)))))),o.addAssign(ge(r)),c.addAssign(ge(s)),l.addAssign(ge(n)),pr(o,c,l)}),Xp=J(([i,e,t,n])=>{const s=L(n).toVar(),r=L(t).toVar(),a=L(e).toVar(),o=L(i).toVar(),c=ge(ge(4)).toVar(),l=ge().toVar(),u=ge().toVar(),h=ge().toVar();return l.assign(u.assign(h.assign(ge(L(3735928559)).add(c.shiftLeft(ge(2)).add(ge(13)))))),l.addAssign(ge(o)),u.addAssign(ge(a)),h.addAssign(ge(r)),Gp(l,u,h),l.addAssign(ge(s)),pr(l,u,h)}),qp=J(([i,e,t,n,s])=>{const r=L(s).toVar(),a=L(n).toVar(),o=L(t).toVar(),c=L(e).toVar(),l=L(i).toVar(),u=ge(ge(5)).toVar(),h=ge().toVar(),d=ge().toVar(),m=ge().toVar();return h.assign(d.assign(m.assign(ge(L(3735928559)).add(u.shiftLeft(ge(2)).add(ge(13)))))),h.addAssign(ge(l)),d.addAssign(ge(c)),m.addAssign(ge(o)),Gp(h,d,m),h.addAssign(ge(a)),d.addAssign(ge(r)),pr(h,d,m)}),dt=jn([Hp,kp,Wp,Xp,qp]),Yp=J(([i,e])=>{const t=L(e).toVar(),n=L(i).toVar(),s=ge(dt(n,t)).toVar(),r=jr().toVar();return r.x.assign(s.bitAnd(L(255))),r.y.assign(s.shiftRight(L(8)).bitAnd(L(255))),r.z.assign(s.shiftRight(L(16)).bitAnd(L(255))),r}),jp=J(([i,e,t])=>{const n=L(t).toVar(),s=L(e).toVar(),r=L(i).toVar(),a=ge(dt(r,s,n)).toVar(),o=jr().toVar();return o.x.assign(a.bitAnd(L(255))),o.y.assign(a.shiftRight(L(8)).bitAnd(L(255))),o.z.assign(a.shiftRight(L(16)).bitAnd(L(255))),o}),zn=jn([Yp,jp]),$p=J(([i])=>{const e=Ye(i).toVar(),t=L().toVar(),n=L().toVar(),s=C(Et(e.x,t)).toVar(),r=C(Et(e.y,n)).toVar(),a=C(si(s)).toVar(),o=C(si(r)).toVar(),c=C(bp(Jt(dt(t,n),s,r),Jt(dt(t.add(L(1)),n),s.sub(1),r),Jt(dt(t,n.add(L(1))),s,r.sub(1)),Jt(dt(t.add(L(1)),n.add(L(1))),s.sub(1),r.sub(1)),a,o)).toVar();return Vp(c)}),Kp=J(([i])=>{const e=z(i).toVar(),t=L().toVar(),n=L().toVar(),s=L().toVar(),r=C(Et(e.x,t)).toVar(),a=C(Et(e.y,n)).toVar(),o=C(Et(e.z,s)).toVar(),c=C(si(r)).toVar(),l=C(si(a)).toVar(),u=C(si(o)).toVar(),h=C(Cp(Jt(dt(t,n,s),r,a,o),Jt(dt(t.add(L(1)),n,s),r.sub(1),a,o),Jt(dt(t,n.add(L(1)),s),r,a.sub(1),o),Jt(dt(t.add(L(1)),n.add(L(1)),s),r.sub(1),a.sub(1),o),Jt(dt(t,n,s.add(L(1))),r,a,o.sub(1)),Jt(dt(t.add(L(1)),n,s.add(L(1))),r.sub(1),a,o.sub(1)),Jt(dt(t,n.add(L(1)),s.add(L(1))),r,a.sub(1),o.sub(1)),Jt(dt(t.add(L(1)),n.add(L(1)),s.add(L(1))),r.sub(1),a.sub(1),o.sub(1)),c,l,u)).toVar();return Bp(h)}),WA=jn([$p,Kp]),Zp=J(([i])=>{const e=Ye(i).toVar(),t=L().toVar(),n=L().toVar(),s=C(Et(e.x,t)).toVar(),r=C(Et(e.y,n)).toVar(),a=C(si(s)).toVar(),o=C(si(r)).toVar(),c=z(bp(Vn(zn(t,n),s,r),Vn(zn(t.add(L(1)),n),s.sub(1),r),Vn(zn(t,n.add(L(1))),s,r.sub(1)),Vn(zn(t.add(L(1)),n.add(L(1))),s.sub(1),r.sub(1)),a,o)).toVar();return Vp(c)}),Jp=J(([i])=>{const e=z(i).toVar(),t=L().toVar(),n=L().toVar(),s=L().toVar(),r=C(Et(e.x,t)).toVar(),a=C(Et(e.y,n)).toVar(),o=C(Et(e.z,s)).toVar(),c=C(si(r)).toVar(),l=C(si(a)).toVar(),u=C(si(o)).toVar(),h=z(Cp(Vn(zn(t,n,s),r,a,o),Vn(zn(t.add(L(1)),n,s),r.sub(1),a,o),Vn(zn(t,n.add(L(1)),s),r,a.sub(1),o),Vn(zn(t.add(L(1)),n.add(L(1)),s),r.sub(1),a.sub(1),o),Vn(zn(t,n,s.add(L(1))),r,a,o.sub(1)),Vn(zn(t.add(L(1)),n,s.add(L(1))),r.sub(1),a,o.sub(1)),Vn(zn(t,n.add(L(1)),s.add(L(1))),r,a.sub(1),o.sub(1)),Vn(zn(t.add(L(1)),n.add(L(1)),s.add(L(1))),r.sub(1),a.sub(1),o.sub(1)),c,l,u)).toVar();return Bp(h)}),XA=jn([Zp,Jp]),qA=J(([i])=>{const e=C(i).toVar(),t=L(Lt(e)).toVar();return rn(dt(t))}),YA=J(([i])=>{const e=Ye(i).toVar(),t=L(Lt(e.x)).toVar(),n=L(Lt(e.y)).toVar();return rn(dt(t,n))}),jA=J(([i])=>{const e=z(i).toVar(),t=L(Lt(e.x)).toVar(),n=L(Lt(e.y)).toVar(),s=L(Lt(e.z)).toVar();return rn(dt(t,n,s))}),$A=J(([i])=>{const e=Ce(i).toVar(),t=L(Lt(e.x)).toVar(),n=L(Lt(e.y)).toVar(),s=L(Lt(e.z)).toVar(),r=L(Lt(e.w)).toVar();return rn(dt(t,n,s,r))}),Qp=J(([i])=>{const e=C(i).toVar(),t=L(Lt(e)).toVar();return z(rn(dt(t,L(0))),rn(dt(t,L(1))),rn(dt(t,L(2))))}),em=J(([i])=>{const e=Ye(i).toVar(),t=L(Lt(e.x)).toVar(),n=L(Lt(e.y)).toVar();return z(rn(dt(t,n,L(0))),rn(dt(t,n,L(1))),rn(dt(t,n,L(2))))}),tm=J(([i])=>{const e=z(i).toVar(),t=L(Lt(e.x)).toVar(),n=L(Lt(e.y)).toVar(),s=L(Lt(e.z)).toVar();return z(rn(dt(t,n,s,L(0))),rn(dt(t,n,s,L(1))),rn(dt(t,n,s,L(2))))}),nm=J(([i])=>{const e=Ce(i).toVar(),t=L(Lt(e.x)).toVar(),n=L(Lt(e.y)).toVar(),s=L(Lt(e.z)).toVar(),r=L(Lt(e.w)).toVar();return z(rn(dt(t,n,s,r,L(0))),rn(dt(t,n,s,r,L(1))),rn(dt(t,n,s,r,L(2))))}),im=jn([Qp,em,tm,nm]),$o=J(([i,e,t,n])=>{const s=C(n).toVar(),r=C(t).toVar(),a=L(e).toVar(),o=z(i).toVar(),c=C(0).toVar(),l=C(1).toVar();return Bt({start:L(0),end:a},({i:u})=>{c.addAssign(l.mul(WA(o))),l.mulAssign(s),o.mulAssign(r)}),c}),sm=J(([i,e,t,n])=>{const s=C(n).toVar(),r=C(t).toVar(),a=L(e).toVar(),o=z(i).toVar(),c=z(0).toVar(),l=C(1).toVar();return Bt({start:L(0),end:a},({i:u})=>{c.addAssign(l.mul(XA(o))),l.mulAssign(s),o.mulAssign(r)}),c}),KA=J(([i,e,t,n])=>{const s=C(n).toVar(),r=C(t).toVar(),a=L(e).toVar(),o=z(i).toVar();return Ye($o(o,a,r,s),$o(o.add(z(L(19),L(193),L(17))),a,r,s))}),ZA=J(([i,e,t,n])=>{const s=C(n).toVar(),r=C(t).toVar(),a=L(e).toVar(),o=z(i).toVar(),c=z(sm(o,a,r,s)).toVar(),l=C($o(o.add(z(L(19),L(193),L(17))),a,r,s)).toVar();return Ce(c,l)}),rm=J(([i,e,t,n,s,r,a])=>{const o=L(a).toVar(),c=C(r).toVar(),l=L(s).toVar(),u=L(n).toVar(),h=L(t).toVar(),d=L(e).toVar(),m=Ye(i).toVar(),g=z(im(Ye(d.add(u),h.add(l)))).toVar(),_=Ye(g.x,g.y).toVar();_.subAssign(.5),_.mulAssign(c),_.addAssign(.5);const p=Ye(Ye(C(d),C(h)).add(_)).toVar(),f=Ye(p.sub(m)).toVar();return yt(o.equal(L(2)),()=>Ln(f.x).add(Ln(f.y))),yt(o.equal(L(3)),()=>ri(Ln(f.x),Ln(f.y))),hr(f,f)}),om=J(([i,e,t,n,s,r,a,o,c])=>{const l=L(c).toVar(),u=C(o).toVar(),h=L(a).toVar(),d=L(r).toVar(),m=L(s).toVar(),g=L(n).toVar(),_=L(t).toVar(),p=L(e).toVar(),f=z(i).toVar(),T=z(im(z(p.add(m),_.add(d),g.add(h)))).toVar();T.subAssign(.5),T.mulAssign(u),T.addAssign(.5);const y=z(z(C(p),C(_),C(g)).add(T)).toVar(),E=z(y.sub(f)).toVar();return yt(l.equal(L(2)),()=>Ln(E.x).add(Ln(E.y).add(Ln(E.z)))),yt(l.equal(L(3)),()=>ri(ri(Ln(E.x),Ln(E.y)),Ln(E.z))),hr(E,E)}),mr=jn([rm,om]),JA=J(([i,e,t])=>{const n=L(t).toVar(),s=C(e).toVar(),r=Ye(i).toVar(),a=L().toVar(),o=L().toVar(),c=Ye(Et(r.x,a),Et(r.y,o)).toVar(),l=C(1e6).toVar();return Bt({start:-1,end:L(1),name:"x",condition:"<="},({x:u})=>{Bt({start:-1,end:L(1),name:"y",condition:"<="},({y:h})=>{const d=C(mr(c,u,h,a,o,s,n)).toVar();l.assign(Or(l,d))})}),yt(n.equal(L(0)),()=>{l.assign(Ss(l))}),l}),QA=J(([i,e,t])=>{const n=L(t).toVar(),s=C(e).toVar(),r=Ye(i).toVar(),a=L().toVar(),o=L().toVar(),c=Ye(Et(r.x,a),Et(r.y,o)).toVar(),l=Ye(1e6,1e6).toVar();return Bt({start:-1,end:L(1),name:"x",condition:"<="},({x:u})=>{Bt({start:-1,end:L(1),name:"y",condition:"<="},({y:h})=>{const d=C(mr(c,u,h,a,o,s,n)).toVar();yt(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),yt(n.equal(L(0)),()=>{l.assign(Ss(l))}),l}),eN=J(([i,e,t])=>{const n=L(t).toVar(),s=C(e).toVar(),r=Ye(i).toVar(),a=L().toVar(),o=L().toVar(),c=Ye(Et(r.x,a),Et(r.y,o)).toVar(),l=z(1e6,1e6,1e6).toVar();return Bt({start:-1,end:L(1),name:"x",condition:"<="},({x:u})=>{Bt({start:-1,end:L(1),name:"y",condition:"<="},({y:h})=>{const d=C(mr(c,u,h,a,o,s,n)).toVar();yt(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),yt(n.equal(L(0)),()=>{l.assign(Ss(l))}),l}),tN=J(([i,e,t])=>{const n=L(t).toVar(),s=C(e).toVar(),r=z(i).toVar(),a=L().toVar(),o=L().toVar(),c=L().toVar(),l=z(Et(r.x,a),Et(r.y,o),Et(r.z,c)).toVar(),u=C(1e6).toVar();return Bt({start:-1,end:L(1),name:"x",condition:"<="},({x:h})=>{Bt({start:-1,end:L(1),name:"y",condition:"<="},({y:d})=>{Bt({start:-1,end:L(1),name:"z",condition:"<="},({z:m})=>{const g=C(mr(l,h,d,m,a,o,c,s,n)).toVar();u.assign(Or(u,g))})})}),yt(n.equal(L(0)),()=>{u.assign(Ss(u))}),u}),nN=J(([i,e,t])=>{const n=L(t).toVar(),s=C(e).toVar(),r=z(i).toVar(),a=L().toVar(),o=L().toVar(),c=L().toVar(),l=z(Et(r.x,a),Et(r.y,o),Et(r.z,c)).toVar(),u=Ye(1e6,1e6).toVar();return Bt({start:-1,end:L(1),name:"x",condition:"<="},({x:h})=>{Bt({start:-1,end:L(1),name:"y",condition:"<="},({y:d})=>{Bt({start:-1,end:L(1),name:"z",condition:"<="},({z:m})=>{const g=C(mr(l,h,d,m,a,o,c,s,n)).toVar();yt(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),yt(n.equal(L(0)),()=>{u.assign(Ss(u))}),u}),iN=J(([i,e,t])=>{const n=L(t).toVar(),s=C(e).toVar(),r=z(i).toVar(),a=L().toVar(),o=L().toVar(),c=L().toVar(),l=z(Et(r.x,a),Et(r.y,o),Et(r.z,c)).toVar(),u=z(1e6,1e6,1e6).toVar();return Bt({start:-1,end:L(1),name:"x",condition:"<="},({x:h})=>{Bt({start:-1,end:L(1),name:"y",condition:"<="},({y:d})=>{Bt({start:-1,end:L(1),name:"z",condition:"<="},({z:m})=>{const g=C(mr(l,h,d,m,a,o,c,s,n)).toVar();yt(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),yt(n.equal(L(0)),()=>{u.assign(Ss(u))}),u});Js.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});Br.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Lt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});Ap.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});Np.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});wp.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Rp.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Lp.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});Pp.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Ip.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});Dp.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Up.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});Op.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});Fp.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});zp.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});vn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});pr.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});rn.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});si.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});Hp.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});kp.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Wp.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Xp.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});qp.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});Yp.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});jp.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});$p.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});Kp.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});Zp.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Jp.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});qA.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});YA.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});jA.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});$A.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});Qp.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});em.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});tm.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});nm.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});$o.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});sm.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});KA.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});ZA.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});rm.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});om.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});JA.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});QA.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});eN.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});tN.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});nN.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});iN.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const sN=J(([i])=>{const e=z(i).toVar(),t=C(e.x).toVar(),n=C(e.y).toVar(),s=C(e.z).toVar();yt(n.lessThan(1e-4),()=>z(s,s,s)).else(()=>{t.assign(pt(6,t.sub($r(t))));const r=L(Jd(t)).toVar(),a=C(t.sub(C(r))).toVar(),o=C(s.mul(Ot(1,n))).toVar(),c=C(s.mul(Ot(1,n.mul(a)))).toVar(),l=C(s.mul(Ot(1,n.mul(Ot(1,a))))).toVar();return yt(r.equal(L(0)),()=>z(s,l,o)).elseif(r.equal(L(1)),()=>z(c,s,o)).elseif(r.equal(L(2)),()=>z(o,s,l)).elseif(r.equal(L(3)),()=>z(o,c,s)).elseif(r.equal(L(4)),()=>z(l,o,s)),z(s,o,c)})}),rN=J(([i])=>{const e=z(i).toVar(),t=C(e.x).toVar(),n=C(e.y).toVar(),s=C(e.z).toVar(),r=C(Or(t,Or(n,s))).toVar(),a=C(ri(t,ri(n,s))).toVar(),o=C(a.sub(r)).toVar(),c=C().toVar(),l=C().toVar(),u=C().toVar();return u.assign(a),yt(a.greaterThan(0),()=>{l.assign(o.div(a))}).else(()=>{l.assign(0)}),yt(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{yt(t.greaterThanEqual(a),()=>{c.assign(n.sub(s).div(o))}).elseif(n.greaterThanEqual(a),()=>{c.assign(Dn(2,s.sub(t).div(o)))}).else(()=>{c.assign(Dn(4,t.sub(n).div(o)))}),c.mulAssign(1/6),yt(c.lessThan(0),()=>{c.addAssign(1)})}),z(c,l,u)});sN.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});rN.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const oN=J(([i])=>{const e=z(i).toVar(),t=Dd(jd(e,z(.04045))).toVar(),n=z(e.div(12.92)).toVar(),s=z(ui(ri(e.add(z(.055)),z(0)).div(1.055),z(2.4))).toVar();return Un(n,s,t)});oN.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});const am=document.getElementById("card-div");document.getElementById("card-scene");let Qs=am.clientWidth,Ko=148;console.log(Qs);const Qr=new Ry(16777215),lr=new yn(70,Qs/Ko,.1,500),eo=new gd({antialias:!0,alpha:!0,canvas:document.querySelector("#card-scene")});eo.setPixelRatio(window.devicePixelRatio);eo.setSize(Qs,Ko);lr.position.set(0,0,25);lr.lookAt(0,0,0);Qr.background=new ke(6130792);const gl=new qc(16777215,2.3),cm=new qc(16777215,2.3);gl.position.set(0,20,0);cm.position.set(0,-20,0);new Td(gl);new Td(cm);Qr.add(gl);const _l=new ky(lr,eo.domElement);_l.enableDamping=!0;_l.autoRotate=!1;let Ch=-1,Ar=10,Lh=-1,Nr=3,Ph=1,br=12,Ih=-1,wr=40,Dh=-1,Rr=Math.PI*2;const lm=new ra(Ar,Nr,br,wr,Rr),aN=new Wr({color:1401481}),Gr=new Gn(lm,aN),cN=new Wr({color:16777215,wireframe:!0}),Hr=new Gn(lm,cN);Qr.add(Gr);Qr.add(Hr);const lN=10,uN=5,hN=3,dN=2,fN=3,pN=20,mN=100,gN=3,_N=Math.PI*2,xN=Math.PI-(Math.PI-.5);function vN(i,e,t,n,s){const r=new ra(i,e,t,n,s);Gr.geometry.dispose(),Gr.geometry=r,Hr.geometry.dispose(),Hr.geometry=r}let Ro=.005;function um(){requestAnimationFrame(um),Ar+=Ch*.01,(Ar>=lN||Ar<=uN)&&(Ch*=-1),Nr+=Lh*.01,(Nr>=hN||Nr<=dN)&&(Lh*=-1),br+=Ph*.01,(br>=pN||br<=fN)&&(Ph*=-1),wr+=Ih*.01,(wr>=mN||wr<=gN)&&(Ih*=-1),Rr+=Dh*.01,(Rr>=_N||Rr<=xN)&&(Dh*=-1),vN(Ar,Nr,br,wr,Rr),Gr.rotation.x+=Ro,Gr.rotation.y+=Ro,Hr.rotation.x+=Ro,Hr.rotation.y+=Ro,_l.update(),eo.render(Qr,lr)}window.addEventListener("resize",yN,!1);function yN(){Qs=am.clientWidth,lr.aspect=Qs/Ko,lr.updateProjectionMatrix(),eo.setSize(Qs,Ko)}um();
