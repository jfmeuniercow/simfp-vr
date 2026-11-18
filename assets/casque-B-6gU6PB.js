var Pd=Object.defineProperty;var Id=(s,e,t)=>e in s?Pd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var It=(s,e,t)=>Id(s,typeof e!="symbol"?e+"":e,t);import{a as Ld,d as Dd,c as Ud,b as Nd,s as Fd,m as Od,h as Bd,v as zd,p as ph,e as ef,f as kd,g as Vd,i as Hd,j as Gd}from"./rooms-Cbxh2mb1.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="170",Wd=0,mh=1,Xd=2,tf=1,nf=2,gi=3,wi=0,pn=1,Dn=2,Hi=0,Ys=1,gh=2,_h=3,vh=4,qd=5,rs=100,Yd=101,$d=102,Zd=103,Kd=104,jd=200,Jd=201,Qd=202,ep=203,Tl=204,Al=205,tp=206,np=207,ip=208,sp=209,rp=210,ap=211,op=212,lp=213,cp=214,Rl=0,Cl=1,Pl=2,ir=3,Il=4,Ll=5,Dl=6,Ul=7,vo=0,hp=1,up=2,Gi=0,fp=1,dp=2,pp=3,sf=4,mp=5,gp=6,_p=7,xh="attached",vp="detached",rf=300,sr=301,rr=302,eo=303,Nl=304,xo=306,Ei=1e3,_i=1001,Fl=1002,Rn=1003,xp=1004,ua=1005,ti=1006,Lo=1007,os=1008,Ti=1009,af=1010,of=1011,Xr=1012,Rc=1013,us=1014,ni=1015,ia=1016,Cc=1017,Pc=1018,ar=1020,lf=35902,cf=1021,hf=1022,Fn=1023,uf=1024,ff=1025,$s=1026,or=1027,df=1028,Ic=1029,pf=1030,Lc=1031,Dc=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Ol=35840,Bl=35841,zl=35842,kl=35843,Vl=36196,Hl=37492,Gl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,$l=37812,Zl=37813,Kl=37814,jl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,$a=36492,sc=36494,rc=36495,mf=36283,ac=36284,oc=36285,lc=36286,yp=2200,Mp=2201,Sp=2202,to=2300,cc=2301,Do=2302,Vs=2400,Hs=2401,no=2402,Uc=2500,bp=2501,wp=3200,Ep=3201,yo=0,Tp=1,Vi="",ut="srgb",fr="srgb-linear",Mo="linear",_t="srgb",xs=7680,yh=519,Ap=512,Rp=513,Cp=514,gf=515,Pp=516,Ip=517,Lp=518,Dp=519,hc=35044,Mh="300 es",vi=2e3,io=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const Br=Math.PI/180,lr=180/Math.PI;function Bn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Yt(s,e,t){return Math.max(e,Math.min(t,s))}function Nc(s,e){return(s%e+e)%e}function Up(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Np(s,e,t){return s!==e?(t-s)/(e-s):0}function zr(s,e,t){return(1-t)*s+t*e}function Fp(s,e,t,n){return zr(s,e,1-Math.exp(-t*n))}function Op(s,e=1){return e-Math.abs(Nc(s,e*2)-e)}function Bp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function kp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vp(s,e){return s+Math.random()*(e-s)}function Hp(s){return s*(.5-Math.random())}function Gp(s){s!==void 0&&(Sh=s);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wp(s){return s*Br}function Xp(s){return s*lr}function qp(s){return(s&s-1)===0&&s!==0}function Yp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $p(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const tn={DEG2RAD:Br,RAD2DEG:lr,generateUUID:Bn,clamp:Yt,euclideanModulo:Nc,mapLinear:Up,inverseLerp:Np,lerp:zr,damp:Fp,pingpong:Op,smoothstep:Bp,smootherstep:zp,randInt:kp,randFloat:Vp,randFloatSpread:Hp,seededRandom:Gp,degToRad:Wp,radToDeg:Xp,isPowerOfTwo:qp,ceilPowerOfTwo:Yp,floorPowerOfTwo:$p,setQuaternionFromProperEuler:Zp,normalize:mt,denormalize:$n};class ee{constructor(e=0,t=0){ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],y=i[7],L=i[2],R=i[5],A=i[8];return r[0]=a*_+o*x+l*L,r[3]=a*m+o*v+l*R,r[6]=a*p+o*y+l*A,r[1]=c*_+h*x+u*L,r[4]=c*m+h*v+u*R,r[7]=c*p+h*y+u*A,r[2]=f*_+d*x+g*L,r[5]=f*m+d*v+g*R,r[8]=f*p+d*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new Ye;function _f(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kp(){const s=qr("canvas");return s.style.display="block",s}const bh={};function Fr(s){s in bh||(bh[s]=!0,console.warn(s))}function jp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Jp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Mo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const wh=[.64,.33,.3,.6,.15,.06],Eh=[.2126,.7152,.0722],Th=[.3127,.329],Ah=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[fr]:{primaries:wh,whitePoint:Th,transfer:Mo,toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:Eh,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:wh,whitePoint:Th,transfer:_t,toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:Eh,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}});let ys;class e0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=qr("canvas")),ys.width=e.width,ys.height=e.height;const n=ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t0=0;class vf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(No(i[a].image)):r.push(No(i[a]))}else r=No(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function No(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?e0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n0=0;class Qt extends gs{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=_i,i=_i,r=ti,a=os,o=Fn,l=Ti,c=Qt.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Bn(),this.name="",this.source=new vf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=rf;Qt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,L=(p+1)/2,R=(h+f)/4,A=(u+_)/4,I=(g+m)/4;return v>y&&v>L?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=A/n):y>L?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=R/i,r=I/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=A/r,i=I/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i0 extends gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends i0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xf extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const L=Math.sqrt(v),R=Math.atan2(L,p*x);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}const y=o*x;if(l=l*m+f*y,c=c*m+d*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new E,Ch=new gt;class qi{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),da.subVectors(this.max,br),Ms.subVectors(e.a,br),Ss.subVectors(e.b,br),bs.subVectors(e.c,br),Ii.subVectors(Ss,Ms),Li.subVectors(bs,Ss),Ki.subVectors(Ms,bs);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-Ki.z,Ki.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,Ki.z,0,-Ki.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-Ki.y,Ki.x,0];return!Oo(t,Ms,Ss,bs,da)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Ms,Ss,bs,da))?!1:(pa.crossVectors(Ii,Li),t=[pa.x,pa.y,pa.z],Oo(t,Ms,Ss,bs,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new E,new E,new E,new E,new E,new E,new E,new E],Hn=new E,fa=new qi,Ms=new E,Ss=new E,bs=new E,Ii=new E,Li=new E,Ki=new E,br=new E,da=new E,pa=new E,ji=new E;function Oo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ji.fromArray(s,r);const o=i.x*Math.abs(ji.x)+i.y*Math.abs(ji.y)+i.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const r0=new qi,wr=new E,Bo=new E;class dr{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):r0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Bo)),this.expandByPoint(wr.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new E,zo=new E,ma=new E,Di=new E,ko=new E,ga=new E,Vo=new E;class So{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zo.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ma),o=Di.dot(this.direction),l=-Di.dot(ma),c=Di.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zo).addScaledVector(ma,f),d}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,r){ko.subVectors(t,e),ga.subVectors(n,e),Vo.crossVectors(ko,ga);let a=this.direction.dot(Vo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);const l=o*this.direction.dot(ga.crossVectors(Di,ga));if(l<0)return null;const c=o*this.direction.dot(ko.cross(Di));if(c<0||l+c>a)return null;const h=-o*Di.dot(Vo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,o0)}lookAt(e,t,n){const i=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ui.crossVectors(n,Mn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ui.crossVectors(n,Mn)),Ui.normalize(),_a.crossVectors(Mn,Ui),i[0]=Ui.x,i[4]=_a.x,i[8]=Mn.x,i[1]=Ui.y,i[5]=_a.y,i[9]=Mn.y,i[2]=Ui.z,i[6]=_a.z,i[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],y=n[11],L=n[15],R=i[0],A=i[4],I=i[8],w=i[12],S=i[1],C=i[5],B=i[9],F=i[13],k=i[2],Z=i[6],H=i[10],te=i[14],G=i[3],ae=i[7],pe=i[11],Me=i[15];return r[0]=a*R+o*S+l*k+c*G,r[4]=a*A+o*C+l*Z+c*ae,r[8]=a*I+o*B+l*H+c*pe,r[12]=a*w+o*F+l*te+c*Me,r[1]=h*R+u*S+f*k+d*G,r[5]=h*A+u*C+f*Z+d*ae,r[9]=h*I+u*B+f*H+d*pe,r[13]=h*w+u*F+f*te+d*Me,r[2]=g*R+_*S+m*k+p*G,r[6]=g*A+_*C+m*Z+p*ae,r[10]=g*I+_*B+m*H+p*pe,r[14]=g*w+_*F+m*te+p*Me,r[3]=x*R+v*S+y*k+L*G,r[7]=x*A+v*C+y*Z+L*ae,r[11]=x*I+v*B+y*H+L*pe,r[15]=x*w+v*F+y*te+L*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,v=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,y=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,L=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,R=t*x+n*v+i*y+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=x*A,e[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*A,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=v*A,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*A,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*A,e[8]=y*A,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*A,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*A,e[12]=L*A,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,x=l*c,v=l*h,y=l*u,L=n.x,R=n.y,A=n.z;return i[0]=(1-(_+p))*L,i[1]=(d+y)*L,i[2]=(g-v)*L,i[3]=0,i[4]=(d-y)*R,i[5]=(1-(f+p))*R,i[6]=(m+x)*R,i[7]=0,i[8]=(g+v)*A,i[9]=(m-x)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ws.set(i[0],i[1],i[2]).length();const a=ws.set(i[4],i[5],i[6]).length(),o=ws.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);const c=1/r,h=1/a,u=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=vi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===vi)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===io)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=vi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,d=(n+i)*h;let g,_;if(o===vi)g=(a+r)*u,_=-2*u;else if(o===io)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ws=new E,Gn=new Pe,a0=new E(0,0,0),o0=new E(1,1,1),Ui=new E,_a=new E,Mn=new E,Ph=new Pe,Ih=new gt;class zt{constructor(e=0,t=0,n=0,i=zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zt.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l0=0;const Lh=new E,Es=new gt,fi=new Pe,va=new E,Er=new E,c0=new E,h0=new gt,Dh=new E(1,0,0),Uh=new E(0,1,0),Nh=new E(0,0,1),Fh={type:"added"},u0={type:"removed"},Ts={type:"childadded",child:null},Ho={type:"childremoved",child:null};class St extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new E,t=new zt,n=new gt,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ye}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Er,va,this.up):fi.lookAt(va,Er,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(fi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u0),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,h0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}St.DEFAULT_UP=new E(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new E,di=new E,Go=new E,pi=new E,As=new E,Rs=new E,Oh=new E,Wo=new E,Xo=new E,qo=new E,Yo=new at,$o=new at,Zo=new at;class Un{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wn.subVectors(i,t),di.subVectors(n,t),Go.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(di),l=Wn.dot(Go),c=di.dot(di),h=di.dot(Go),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Yo.setScalar(0),$o.setScalar(0),Zo.setScalar(0),Yo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,n),Zo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector($o,r.y),a.addScaledVector(Zo,r.z),a}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),di.subVectors(e,t),Wn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Wn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;As.subVectors(i,n),Rs.subVectors(r,n),Wo.subVectors(e,n);const l=As.dot(Wo),c=Rs.dot(Wo);if(l<=0&&c<=0)return t.copy(n);Xo.subVectors(e,i);const h=As.dot(Xo),u=Rs.dot(Xo);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(As,a);qo.subVectors(e,r);const d=As.dot(qo),g=Rs.dot(qo);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Rs,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Oh.subVectors(r,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Oh,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Ko(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Nc(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ko(a,r,e+1/3),this.g=Ko(a,r,e),this.b=Ko(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Ke.fromWorkingColorSpace(an.copy(this),e),Math.round(Yt(an.r*255,0,255))*65536+Math.round(Yt(an.g*255,0,255))*256+Math.round(Yt(an.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(an.copy(this),t);const n=an.r,i=an.g,r=an.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=ut){Ke.fromWorkingColorSpace(an.copy(this),e);const t=an.r,n=an.g,i=an.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(xa);const n=zr(Ni.h,xa.h,t),i=zr(Ni.s,xa.s,t),r=zr(Ni.l,xa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Fe;Fe.NAMES=yf;let f0=0;class Ri extends gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Bn(),this.name="",this.blending=Ys,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ai extends Ri{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new E,ya=new ee;class Zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}}class Oc extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mf extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d0=0;const Pn=new Pe,jo=new St,Cs=new E,Sn=new qi,Tr=new qi,Kt=new E;class kt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?Mf:Oc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Sn.min,Tr.min),Sn.expandByPoint(Kt),Kt.addVectors(Sn.max,Tr.max),Sn.expandByPoint(Kt)):(Sn.expandByPoint(Tr.min),Sn.expandByPoint(Tr.max))}Sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Kt.add(Cs)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new E,l[I]=new E;const c=new E,h=new E,u=new E,f=new ee,d=new ee,g=new ee,_=new E,m=new E;function p(I,w,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),o[I].add(_),o[w].add(_),o[S].add(_),l[I].add(m),l[w].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,w=x.length;I<w;++I){const S=x[I],C=S.start,B=S.count;for(let F=C,k=C+B;F<k;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new E,y=new E,L=new E,R=new E;function A(I){L.fromBufferAttribute(i,I),R.copy(L);const w=o[I];v.copy(w),v.sub(L.multiplyScalar(L.dot(w))).normalize(),y.crossVectors(R,w);const C=y.dot(l[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,C)}for(let I=0,w=x.length;I<w;++I){const S=x[I],C=S.start,B=S.count;for(let F=C,k=C+B;F<k;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Zn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new Pe,Ji=new So,Ma=new dr,zh=new E,Sa=new E,ba=new E,wa=new E,Jo=new E,Ea=new E,kh=new E,Ta=new E;class Ee extends St{constructor(e=new kt,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Jo.fromBufferAttribute(u,e),a?Ea.addScaledVector(Jo,h):Ea.addScaledVector(Jo.sub(t),h))}t.add(Ea)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(Ma.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Ma,zh)===null||Ji.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(Bh.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,L=v;y<L;y+=3){const R=o.getX(y),A=o.getX(y+1),I=o.getX(y+2);i=Aa(this,p,e,n,c,h,u,R,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);i=Aa(this,a,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,L=v;y<L;y+=3){const R=y,A=y+1,I=y+2;i=Aa(this,p,e,n,c,h,u,R,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,y=m+2;i=Aa(this,a,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function p0(s,e,t,n,i,r,a,o){let l;if(e.side===pn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===wi,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:s}}function Aa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Sa),s.getVertexPosition(l,ba),s.getVertexPosition(c,wa);const h=p0(s,e,t,n,Sa,ba,wa,kh);if(h){const u=new E;Un.getBarycoord(kh,Sa,ba,wa,u),i&&(h.uv=Un.getInterpolatedAttribute(i,o,l,c,u,new ee)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,l,c,u,new ee)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new E,materialIndex:0};Un.getNormal(Sa,ba,wa,f.normal),h.face=f,h.barycoord=u}return h}class xn extends kt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(_,m,p,x,v,y,L,R,A,I,w){const S=y/A,C=L/I,B=y/2,F=L/2,k=R/2,Z=A+1,H=I+1;let te=0,G=0;const ae=new E;for(let pe=0;pe<H;pe++){const Me=pe*C-F;for(let He=0;He<Z;He++){const et=He*S-B;ae[_]=et*x,ae[m]=Me*v,ae[p]=k,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=R>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(He/A),u.push(1-pe/I),te+=1}}for(let pe=0;pe<I;pe++)for(let Me=0;Me<A;Me++){const He=f+Me+Z*pe,et=f+Me+Z*(pe+1),q=f+(Me+1)+Z*(pe+1),ie=f+(Me+1)+Z*pe;l.push(He,et,ie),l.push(et,q,ie),G+=6}o.addGroup(d,G,w),d+=G,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function hn(s){const e={};for(let t=0;t<s.length;t++){const n=cr(s[t]);for(const i in n)e[i]=n[i]}return e}function m0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const g0={clone:cr,merge:hn};var _0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ri{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bf extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new E,Vh=new ee,Hh=new ee;class dn extends bf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Vh,Hh),t.subVectors(Hh,Vh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Is=1;class x0 extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(Ps,Is,e,t);i.layers=this.layers,this.add(i);const r=new dn(Ps,Is,e,t);r.layers=this.layers,this.add(r);const a=new dn(Ps,Is,e,t);a.layers=this.layers,this.add(a);const o=new dn(Ps,Is,e,t);o.layers=this.layers,this.add(o);const l=new dn(Ps,Is,e,t);l.layers=this.layers,this.add(l);const c=new dn(Ps,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wf extends Qt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y0 extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xn(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Hi});r.uniforms.tEquirect.value=t;const a=new Ee(i,r),o=t.minFilter;return t.minFilter===os&&(t.minFilter=ti),new x0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Qo=new E,M0=new E,S0=new Ye;class is{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qo.subVectors(n,t).cross(M0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||S0.getNormalMatrix(e),i=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new dr,Ra=new E;class Bc{constructor(e=new is,t=new is,n=new is,i=new is,r=new is,a=new is){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-d,y-p).normalize(),n[1].setComponents(l+r,f+c,m+d,y+p).normalize(),n[2].setComponents(l+a,f+h,m+g,y+x).normalize(),n[3].setComponents(l-a,f-h,m-g,y-x).normalize(),n[4].setComponents(l-o,f-u,m-_,y-v).normalize(),t===vi)n[5].setComponents(l+o,f+u,m+_,y+v).normalize();else if(t===io)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ra.x=i.normal.x>0?e.max.x:e.min.x,Ra.y=i.normal.y>0?e.max.y:e.min.y,Ra.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ef(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function b0(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Ct extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*f-a;for(let v=0;v<c;v++){const y=v*u-r;g.push(y,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const v=x+c*p,y=x+c*(p+1),L=x+1+c*(p+1),R=x+1+c*p;d.push(v,y,R),d.push(y,L,R)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.width,e.height,e.widthSegments,e.heightSegments)}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
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
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,bm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Pg=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ig=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Lg=`#define DISTANCE
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,kg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Hg=`#define MATCAP
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
}`,Gg=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,qg=`#define PHONG
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
}`,Yg=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,$g=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,Zg=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Kg=`#define TOON
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
}`,jg=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,e_=`uniform vec3 color;
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
}`,t_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,n_=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:w0,alphahash_pars_fragment:E0,alphamap_fragment:T0,alphamap_pars_fragment:A0,alphatest_fragment:R0,alphatest_pars_fragment:C0,aomap_fragment:P0,aomap_pars_fragment:I0,batching_pars_vertex:L0,batching_vertex:D0,begin_vertex:U0,beginnormal_vertex:N0,bsdfs:F0,iridescence_fragment:O0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:H0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:q0,common:Y0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:K0,displacementmap_vertex:j0,emissivemap_fragment:J0,emissivemap_pars_fragment:Q0,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:am,fog_vertex:om,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:fm,lights_lambert_fragment:dm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:vm,lights_phong_fragment:xm,lights_phong_pars_fragment:ym,lights_physical_fragment:Mm,lights_physical_pars_fragment:Sm,lights_fragment_begin:bm,lights_fragment_maps:wm,lights_fragment_end:Em,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Pm,map_pars_fragment:Im,map_particle_fragment:Lm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Nm,morphinstance_vertex:Fm,morphcolor_vertex:Om,morphnormal_vertex:Bm,morphtarget_pars_vertex:zm,morphtarget_vertex:km,normal_fragment_begin:Vm,normal_fragment_maps:Hm,normal_pars_fragment:Gm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Km,opaque_fragment:jm,packing:Jm,premultiplied_alpha_fragment:Qm,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:ag,shadowmap_vertex:og,shadowmask_pars_fragment:lg,skinbase_vertex:cg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:fg,specularmap_fragment:dg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:_g,transmission_pars_fragment:vg,uv_pars_fragment:xg,uv_pars_vertex:yg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:bg,background_frag:wg,backgroundCube_vert:Eg,backgroundCube_frag:Tg,cube_vert:Ag,cube_frag:Rg,depth_vert:Cg,depth_frag:Pg,distanceRGBA_vert:Ig,distanceRGBA_frag:Lg,equirect_vert:Dg,equirect_frag:Ug,linedashed_vert:Ng,linedashed_frag:Fg,meshbasic_vert:Og,meshbasic_frag:Bg,meshlambert_vert:zg,meshlambert_frag:kg,meshmatcap_vert:Vg,meshmatcap_frag:Hg,meshnormal_vert:Gg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:$g,meshtoon_vert:Zg,meshtoon_frag:Kg,points_vert:jg,points_frag:Jg,shadow_vert:Qg,shadow_frag:e_,sprite_vert:t_,sprite_frag:n_},ue={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ei={basic:{uniforms:hn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:hn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:hn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:hn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:hn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:hn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:hn([ue.points,ue.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:hn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:hn([ue.common,ue.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:hn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:hn([ue.sprite,ue.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:hn([ue.common,ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:hn([ue.lights,ue.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ei.physical={uniforms:hn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ca={r:0,b:0,g:0},es=new zt,i_=new Pe;function s_(s,e,t,n,i,r,a){const o=new Fe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const y=g(x);y===null?p(o,l):y&&y.isColor&&(p(y,1),v=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===xo)?(h===void 0&&(h=new Ee(new xn(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:cr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),es.copy(v.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i_.makeRotationFromEuler(es)),h.material.toneMapped=Ke.getTransfer(y.colorSpace)!==_t,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ee(new Ct(2,2),new Yi({name:"BackgroundMaterial",uniforms:cr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Ca,Sf(s)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function r_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(S,C,B,F,k){let Z=!1;const H=u(F,B,C);r!==H&&(r=H,c(r.object)),Z=d(S,F,B,k),Z&&g(S,F,B,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(S,C,B,F),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,C,B){const F=B.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let Z=k[C.id];Z===void 0&&(Z={},k[C.id]=Z);let H=Z[F];return H===void 0&&(H=f(l()),Z[F]=H),H}function f(S){const C=[],B=[],F=[];for(let k=0;k<t;k++)C[k]=0,B[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,C,B,F){const k=r.attributes,Z=C.attributes;let H=0;const te=B.getAttributes();for(const G in te)if(te[G].location>=0){const pe=k[G];let Me=Z[G];if(Me===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),pe===void 0||pe.attribute!==Me||Me&&pe.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(S,C,B,F){const k={},Z=C.attributes;let H=0;const te=B.getAttributes();for(const G in te)if(te[G].location>=0){let pe=Z[G];pe===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor));const Me={};Me.attribute=pe,pe&&pe.data&&(Me.data=pe.data),k[G]=Me,H++}r.attributes=k,r.attributesNum=H,r.index=F}function _(){const S=r.newAttributes;for(let C=0,B=S.length;C<B;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const B=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;B[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),k[S]!==C&&(s.vertexAttribDivisor(S,C),k[S]=C)}function x(){const S=r.newAttributes,C=r.enabledAttributes;for(let B=0,F=C.length;B<F;B++)C[B]!==S[B]&&(s.disableVertexAttribArray(B),C[B]=0)}function v(S,C,B,F,k,Z,H){H===!0?s.vertexAttribIPointer(S,C,B,k,Z):s.vertexAttribPointer(S,C,B,F,k,Z)}function y(S,C,B,F){_();const k=F.attributes,Z=B.getAttributes(),H=C.defaultAttributeValues;for(const te in Z){const G=Z[te];if(G.location>=0){let ae=k[te];if(ae===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ae!==void 0){const pe=ae.normalized,Me=ae.itemSize,He=e.get(ae);if(He===void 0)continue;const et=He.buffer,q=He.type,ie=He.bytesPerElement,Se=q===s.INT||q===s.UNSIGNED_INT||ae.gpuType===Rc;if(ae.isInterleavedBufferAttribute){const oe=ae.data,De=oe.stride,Ve=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)p(G.location+Oe,oe.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)m(G.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,et);for(let Oe=0;Oe<G.locationSize;Oe++)v(G.location+Oe,Me/G.locationSize,q,pe,De*ie,(Ve+Me/G.locationSize*Oe)*ie,Se)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,ae.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);s.bindBuffer(s.ARRAY_BUFFER,et);for(let oe=0;oe<G.locationSize;oe++)v(G.location+oe,Me/G.locationSize,q,pe,Me*ie,Me/G.locationSize*oe*ie,Se)}}else if(H!==void 0){const pe=H[te];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(G.location,pe);break;case 3:s.vertexAttrib3fv(G.location,pe);break;case 4:s.vertexAttrib4fv(G.location,pe);break;default:s.vertexAttrib1fv(G.location,pe)}}}}x()}function L(){I();for(const S in n){const C=n[S];for(const B in C){const F=C[B];for(const k in F)h(F[k].object),delete F[k];delete C[B]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const B in C){const F=C[B];for(const k in F)h(F[k].object),delete F[k];delete C[B]}delete n[S.id]}function A(S){for(const C in n){const B=n[C];if(B[S.id]===void 0)continue;const F=B[S.id];for(const k in F)h(F[k].object),delete F[k];delete B[S.id]}}function I(){w(),a=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function a_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function o_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Fn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ti&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ni&&!I)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:L,maxSamples:R}}function l_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new is,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let y=p.clippingState||null;l.value=y,y=h(g,f,v,d);for(let L=0;L!==v;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function c_(s){let e=new WeakMap;function t(a,o){return o===eo?a.mapping=sr:o===Nl&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===eo||o===Nl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new y0(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tf extends bf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=4,Gh=[.125,.215,.35,.446,.526,.582],as=20,el=new Tf,Wh=new Fe;let tl=null,nl=0,il=0,sl=!1;const ss=(1+Math.sqrt(5))/2,Ls=1/ss,Xh=[new E(-ss,Ls,0),new E(ss,Ls,0),new E(-Ls,0,ss),new E(Ls,0,ss),new E(0,ss,-Ls),new E(0,ss,Ls),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),this._renderer.xr.enabled=sl,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:ia,format:Fn,colorSpace:fr,depthBuffer:!1},i=qh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(r)),this._blurMaterial=u_(r,e,t)}return i}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,n,i){const o=new dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Wh),h.toneMapping=Gi,h.autoClear=!1;const d=new Ai({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Ee(new xn,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Wh),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Pa(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===sr||e.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,el)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xh[(i-r-1)%Xh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ee(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*as-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const p=[];let x=0;for(let A=0;A<as;++A){const I=A/_,w=Math.exp(-I*I/2);p.push(w),A===0?x+=w:A<m&&(x+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[i],L=3*y*(i>v-Gs?i-v+Gs:0),R=4*(this._cubeSize-y);Pa(t,L,R,3*y,2*y),l.setRenderTarget(t),l.render(u,el)}}function h_(s){const e=[],t=[],n=[];let i=s;const r=s-Gs+1+Gh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Gs?l=Gh[a-s+Gs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let R=0;R<d;R++){const A=R%3*2/3-1,I=R>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(w,_*g*R),v.set(f,m*g*R);const S=[R,R,R,R,R,R];y.set(S,p*g*R)}const L=new kt;L.setAttribute("position",new Zn(x,_)),L.setAttribute("uv",new Zn(v,m)),L.setAttribute("faceIndex",new Zn(y,p)),e.push(L),i>Gs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qh(s,e,t){const n=new fs(s,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function u_(s,e,t){const n=new Float32Array(as),i=new E(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Yh(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function $h(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function f_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===eo||l===Nl,h=l===sr||l===rr;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new uc(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new uc(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function d_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function p_(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const L=x[v+0],R=x[v+1],A=x[v+2];f.push(L,R,R,A,A,L)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const L=v+0,R=v+1,A=v+2;f.push(L,R,R,A,A,L)}}else return;const m=new(_f(f)?Mf:Oc)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function m_(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function g_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function __(s,e,t){const n=new WeakMap,i=new at;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*L*4*u),A=new xf(R,y,L,u);A.type=ni,A.needsUpdate=!0;const I=v*4;for(let S=0;S<u;S++){const C=m[S],B=p[S],F=x[S],k=y*L*4*S;for(let Z=0;Z<C.count;Z++){const H=Z*I;d===!0&&(i.fromBufferAttribute(C,Z),R[k+H+0]=i.x,R[k+H+1]=i.y,R[k+H+2]=i.z,R[k+H+3]=0),g===!0&&(i.fromBufferAttribute(B,Z),R[k+H+4]=i.x,R[k+H+5]=i.y,R[k+H+6]=i.z,R[k+H+7]=0),_===!0&&(i.fromBufferAttribute(F,Z),R[k+H+8]=i.x,R[k+H+9]=i.y,R[k+H+10]=i.z,R[k+H+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new ee(y,L)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function v_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Af extends Qt{constructor(e,t,n,i,r,a,o,l,c,h=$s){if(h!==$s&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$s&&(n=us),n===void 0&&h===or&&(n=ar),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rf=new Qt,Zh=new Af(1,1),Cf=new xf,Pf=new s0,If=new wf,Kh=[],jh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),eu=new Float32Array(4);function pr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Kh[i];if(r===void 0&&(r=new Float32Array(i),Kh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function $t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function bo(s,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function x_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function M_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function S_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function b_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;eu.set(n),s.uniformMatrix2fv(this.addr,!1,eu),Zt(t,n)}}function w_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Qh.set(n),s.uniformMatrix3fv(this.addr,!1,Qh),Zt(t,n)}}function E_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Jh.set(n),s.uniformMatrix4fv(this.addr,!1,Jh),Zt(t,n)}}function T_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function A_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function C_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function P_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function I_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function L_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function D_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function U_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zh.compareFunction=gf,r=Zh):r=Rf,t.setTexture2D(e||r,i)}function N_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pf,i)}function F_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||If,i)}function O_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cf,i)}function B_(s){switch(s){case 5126:return x_;case 35664:return y_;case 35665:return M_;case 35666:return S_;case 35674:return b_;case 35675:return w_;case 35676:return E_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(s,e){s.uniform1fv(this.addr,e)}function k_(s,e){const t=pr(e,this.size,2);s.uniform2fv(this.addr,t)}function V_(s,e){const t=pr(e,this.size,3);s.uniform3fv(this.addr,t)}function H_(s,e){const t=pr(e,this.size,4);s.uniform4fv(this.addr,t)}function G_(s,e){const t=pr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function W_(s,e){const t=pr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function X_(s,e){const t=pr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function q_(s,e){s.uniform1iv(this.addr,e)}function Y_(s,e){s.uniform2iv(this.addr,e)}function $_(s,e){s.uniform3iv(this.addr,e)}function Z_(s,e){s.uniform4iv(this.addr,e)}function K_(s,e){s.uniform1uiv(this.addr,e)}function j_(s,e){s.uniform2uiv(this.addr,e)}function J_(s,e){s.uniform3uiv(this.addr,e)}function Q_(s,e){s.uniform4uiv(this.addr,e)}function ev(s,e,t){const n=this.cache,i=e.length,r=bo(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Rf,r[a])}function tv(s,e,t){const n=this.cache,i=e.length,r=bo(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Pf,r[a])}function nv(s,e,t){const n=this.cache,i=e.length,r=bo(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||If,r[a])}function iv(s,e,t){const n=this.cache,i=e.length,r=bo(t,i);$t(n,r)||(s.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cf,r[a])}function sv(s){switch(s){case 5126:return z_;case 35664:return k_;case 35665:return V_;case 35666:return H_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return $_;case 35669:case 35673:return Z_;case 5125:return K_;case 36294:return j_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}class rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}}class av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sv(t.type)}}class ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function tu(s,e){s.seq.push(e),s.map[e.id]=e}function lv(s,e,t){const n=s.name,i=n.length;for(rl.lastIndex=0;;){const r=rl.exec(n),a=rl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){tu(t,c===void 0?new rv(o,s,e):new av(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new ov(o),tu(t,u)),t=u}}}class Za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);lv(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function nu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const cv=37297;let hv=0;function uv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const iu=new Ye;function fv(s){Ke._getMatrix(iu,Ke.workingColorSpace,s);const e=`mat3( ${iu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Mo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function su(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+uv(s.getShaderSource(e),a)}else return i}function dv(s,e){const t=fv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pv(s,e){let t;switch(e){case fp:t="Linear";break;case dp:t="Reinhard";break;case pp:t="Cineon";break;case sf:t="ACESFilmic";break;case gp:t="AgX";break;case _p:t="Neutral";break;case mp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ia=new E;function mv(){Ke.getLuminanceCoefficients(Ia);const s=Ia.x.toFixed(4),e=Ia.y.toFixed(4),t=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function _v(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Or(s){return s!==""}function ru(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(s){return s.replace(xv,Mv)}const yv=new Map;function Mv(s,e){let t=Je[e];if(t===void 0){const n=yv.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(s){return s.replace(Sv,bv)}function bv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ev(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case sr:case rr:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Av(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vo:e="ENVMAP_BLENDING_MULTIPLY";break;case hp:e="ENVMAP_BLENDING_MIX";break;case up:e="ENVMAP_BLENDING_ADD";break}return e}function Rv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=wv(t),c=Ev(t),h=Tv(t),u=Av(t),f=Rv(t),d=gv(t),g=_v(r),_=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(m=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Gi?pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,dv("linearToOutputTexel",t.outputColorSpace),mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=fc(a),a=ru(a,t),a=au(a,t),o=fc(o),o=ru(o,t),o=au(o,t),a=ou(a),o=ou(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+a,y=x+p+o,L=nu(i,i.VERTEX_SHADER,v),R=nu(i,i.FRAGMENT_SHADER,y);i.attachShader(_,L),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(C){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(L).trim(),k=i.getShaderInfoLog(R).trim();let Z=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,R);else{const te=su(i,L,"vertex"),G=su(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+te+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||k==="")&&(H=!1);H&&(C.diagnostics={runnable:Z,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(L),i.deleteShader(R),I=new Za(i,_),w=vv(i,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,cv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let Pv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lv(e),t.set(e,n)),n}}class Lv{constructor(e){this.id=Pv++,this.code=e,this.usedTimes=0}}function Dv(s,e,t,n,i,r,a){const o=new Fc,l=new Iv,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,C,B,F){const k=B.fog,Z=F.geometry,H=w.isMeshStandardMaterial?B.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),G=te&&te.mapping===xo?te.image.height:null,ae=g[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=pe!==void 0?pe.length:0;let He=0;Z.morphAttributes.position!==void 0&&(He=1),Z.morphAttributes.normal!==void 0&&(He=2),Z.morphAttributes.color!==void 0&&(He=3);let et,q,ie,Se;if(ae){const pt=ei[ae];et=pt.vertexShader,q=pt.fragmentShader}else et=w.vertexShader,q=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),Se=l.getFragmentShaderID(w);const oe=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Ve=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,it=!!w.map,K=!!w.matcap,se=!!te,P=!!w.aoMap,Ie=!!w.lightMap,ne=!!w.bumpMap,ye=!!w.normalMap,he=!!w.displacementMap,ze=!!w.emissiveMap,ve=!!w.metalnessMap,T=!!w.roughnessMap,M=w.anisotropy>0,O=w.clearcoat>0,Y=w.dispersion>0,J=w.iridescence>0,$=w.sheen>0,Te=w.transmission>0,fe=M&&!!w.anisotropyMap,xe=O&&!!w.clearcoatMap,st=O&&!!w.clearcoatNormalMap,re=O&&!!w.clearcoatRoughnessMap,be=J&&!!w.iridescenceMap,ke=J&&!!w.iridescenceThicknessMap,Ge=$&&!!w.sheenColorMap,we=$&&!!w.sheenRoughnessMap,lt=!!w.specularMap,je=!!w.specularColorMap,xt=!!w.specularIntensityMap,D=Te&&!!w.transmissionMap,de=Te&&!!w.thicknessMap,W=!!w.gradientMap,j=!!w.alphaMap,_e=w.alphaTest>0,me=!!w.alphaHash,$e=!!w.extensions;let Ut=Gi;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const sn={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:et,fragmentShader:q,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&F.instanceColor!==null,instancingMorph:Ve&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:fr,alphaToCoverage:!!w.alphaToCoverage,map:it,matcap:K,envMap:se,envMapMode:se&&te.mapping,envMapCubeUVHeight:G,aoMap:P,lightMap:Ie,bumpMap:ne,normalMap:ye,displacementMap:f&&he,emissiveMap:ze,normalMapObjectSpace:ye&&w.normalMapType===Tp,normalMapTangentSpace:ye&&w.normalMapType===yo,metalnessMap:ve,roughnessMap:T,anisotropy:M,anisotropyMap:fe,clearcoat:O,clearcoatMap:xe,clearcoatNormalMap:st,clearcoatRoughnessMap:re,dispersion:Y,iridescence:J,iridescenceMap:be,iridescenceThicknessMap:ke,sheen:$,sheenColorMap:Ge,sheenRoughnessMap:we,specularMap:lt,specularColorMap:je,specularIntensityMap:xt,transmission:Te,transmissionMap:D,thicknessMap:de,gradientMap:W,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:_e,alphaHash:me,combine:w.combine,mapUv:it&&_(w.map.channel),aoMapUv:P&&_(w.aoMap.channel),lightMapUv:Ie&&_(w.lightMap.channel),bumpMapUv:ne&&_(w.bumpMap.channel),normalMapUv:ye&&_(w.normalMap.channel),displacementMapUv:he&&_(w.displacementMap.channel),emissiveMapUv:ze&&_(w.emissiveMap.channel),metalnessMapUv:ve&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:fe&&_(w.anisotropyMap.channel),clearcoatMapUv:xe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(w.sheenRoughnessMap.channel),specularMapUv:lt&&_(w.specularMap.channel),specularColorMapUv:je&&_(w.specularColorMap.channel),specularIntensityMapUv:xt&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:de&&_(w.thicknessMap.channel),alphaMapUv:j&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ye||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(it||j),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:He,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&Ke.getTransfer(w.map.colorSpace)===_t,decodeVideoTextureEmissive:ze&&w.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(w.emissiveMap.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Dn,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$e&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&w.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return sn.vertexUv1s=c.has(1),sn.vertexUv2s=c.has(2),sn.vertexUv3s=c.has(3),c.clear(),sn}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)S.push(C),S.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(x(S,w),v(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){const S=g[w.type];let C;if(S){const B=ei[S];C=g0.clone(B.uniforms)}else C=w.uniforms;return C}function L(w,S){let C;for(let B=0,F=h.length;B<F;B++){const k=h[B];if(k.cacheKey===S){C=k,++C.usedTimes;break}}return C===void 0&&(C=new Cv(s,S,w,r),h.push(C)),C}function R(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:I}}function Uv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Nv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Nv),n.length>1&&n.sort(f||cu),i.length>1&&i.sort(f||cu)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Fv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new hu,s.set(n,[a])):i>=r.length?(a=new hu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ov(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Fe};break;case"SpotLight":t={position:new E,direction:new E,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function Bv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zv=0;function kv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vv(s){const e=new Ov,t=Bv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new Pe,a=new Pe;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,x=0,v=0,y=0,L=0,R=0,A=0;c.sort(kv);for(let w=0,S=c.length;w<S;w++){const C=c[w],B=C.color,F=C.intensity,k=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*F,u+=B.g*F,f+=B.b*F;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],F);A++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,G=t.get(C);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=H,d++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(B).multiplyScalar(F),H.distance=k,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const te=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,te.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=te.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Z,y++}_++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(B).multiplyScalar(F),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const te=C.shadow,G=t.get(C);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,G.shadowCameraNear=te.camera.near,G.shadowCameraFar=te.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(F),H.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=L,I.numLightProbes=A,n.version=zv++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function uu(s){const e=new Vv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Hv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new uu(s),e.set(i,[o])):r>=a.length?(o=new uu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Gv extends Ri{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`;function Yv(s,e,t){let n=new Bc;const i=new ee,r=new ee,a=new at,o=new Gv({depthPacking:Ep}),l=new Wv,c={},h=t.maxTextureSize,u={[wi]:pn,[pn]:wi,[Dn]:Dn},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let p=this.type;this.render=function(R,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Hi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==gi&&this.type===gi,k=p===gi&&this.type!==gi;for(let Z=0,H=R.length;Z<H;Z++){const te=R[Z],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ae=G.getFrameExtents();if(i.multiply(ae),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ae.x),i.x=r.x*ae.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ae.y),i.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||F===!0||k===!0){const Me=this.type!==gi?{minFilter:Rn,magFilter:Rn}:{};G.map!==null&&G.map.dispose(),G.map=new fs(i.x,i.y,Me),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const pe=G.getViewportCount();for(let Me=0;Me<pe;Me++){const He=G.getViewport(Me);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),B.viewport(a),G.updateMatrices(te,Me),n=G.getFrustum(),y(A,I,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===gi&&x(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,S,C)};function x(R,A){const I=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fs(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,I,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,I,d,_,null)}function v(R,A,I,w){let S=null;const C=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=I.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=S.uuid,F=A.uuid;let k=c[B];k===void 0&&(k={},c[B]=k);let Z=k[F];Z===void 0&&(Z=S.clone(),k[F]=Z,A.addEventListener("dispose",L)),S=Z}if(S.visible=A.visible,S.wireframe=A.wireframe,w===gi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=s.properties.get(S);B.light=I}return S}function y(R,A,I,w,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===gi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const F=e.update(R),k=R.material;if(Array.isArray(k)){const Z=F.groups;for(let H=0,te=Z.length;H<te;H++){const G=Z[H],ae=k[G.materialIndex];if(ae&&ae.visible){const pe=v(R,ae,w,S);R.onBeforeShadow(s,R,A,I,F,pe,G),s.renderBufferDirect(I,null,F,pe,R,G),R.onAfterShadow(s,R,A,I,F,pe,G)}}}else if(k.visible){const Z=v(R,k,w,S);R.onBeforeShadow(s,R,A,I,F,Z,null),s.renderBufferDirect(I,null,F,Z,R,null),R.onAfterShadow(s,R,A,I,F,Z,null)}}const B=R.children;for(let F=0,k=B.length;F<k;F++)y(B[F],A,I,w,S)}function L(R){R.target.removeEventListener("dispose",L);for(const I in c){const w=c[I],S=R.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const $v={[Rl]:Cl,[Pl]:Dl,[Il]:Ul,[ir]:Ll,[Cl]:Rl,[Dl]:Pl,[Ul]:Il,[Ll]:ir};function Zv(s,e){function t(){let D=!1;const de=new at;let W=null;const j=new at(0,0,0,0);return{setMask:function(_e){W!==_e&&!D&&(s.colorMask(_e,_e,_e,_e),W=_e)},setLocked:function(_e){D=_e},setClear:function(_e,me,$e,Ut,sn){sn===!0&&(_e*=Ut,me*=Ut,$e*=Ut),de.set(_e,me,$e,Ut),j.equals(de)===!1&&(s.clearColor(_e,me,$e,Ut),j.copy(de))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,W=null,j=null,_e=null;return{setReversed:function(me){if(de!==me){const $e=e.get("EXT_clip_control");de?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const Ut=_e;_e=null,this.setClear(Ut)}de=me},getReversed:function(){return de},setTest:function(me){me?oe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(me){W!==me&&!D&&(s.depthMask(me),W=me)},setFunc:function(me){if(de&&(me=$v[me]),j!==me){switch(me){case Rl:s.depthFunc(s.NEVER);break;case Cl:s.depthFunc(s.ALWAYS);break;case Pl:s.depthFunc(s.LESS);break;case ir:s.depthFunc(s.LEQUAL);break;case Il:s.depthFunc(s.EQUAL);break;case Ll:s.depthFunc(s.GEQUAL);break;case Dl:s.depthFunc(s.GREATER);break;case Ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=me}},setLocked:function(me){D=me},setClear:function(me){_e!==me&&(de&&(me=1-me),s.clearDepth(me),_e=me)},reset:function(){D=!1,W=null,j=null,_e=null,de=!1}}}function i(){let D=!1,de=null,W=null,j=null,_e=null,me=null,$e=null,Ut=null,sn=null;return{setTest:function(pt){D||(pt?oe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(pt){de!==pt&&!D&&(s.stencilMask(pt),de=pt)},setFunc:function(pt,kn,li){(W!==pt||j!==kn||_e!==li)&&(s.stencilFunc(pt,kn,li),W=pt,j=kn,_e=li)},setOp:function(pt,kn,li){(me!==pt||$e!==kn||Ut!==li)&&(s.stencilOp(pt,kn,li),me=pt,$e=kn,Ut=li)},setLocked:function(pt){D=pt},setClear:function(pt){sn!==pt&&(s.clearStencil(pt),sn=pt)},reset:function(){D=!1,de=null,W=null,j=null,_e=null,me=null,$e=null,Ut=null,sn=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,v=null,y=null,L=null,R=null,A=new Fe(0,0,0),I=0,w=!1,S=null,C=null,B=null,F=null,k=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=te>=2);let ae=null,pe={};const Me=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),et=new at().fromArray(Me),q=new at().fromArray(He);function ie(D,de,W,j){const _e=new Uint8Array(4),me=s.createTexture();s.bindTexture(D,me),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<W;$e++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(de+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return me}const Se={};Se[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),a.setFunc(ir),ne(!1),ye(mh),oe(s.CULL_FACE),P(Hi);function oe(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function De(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ve(D,de){return u[D]!==de?(s.bindFramebuffer(D,de),u[D]=de,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function Oe(D,de){let W=d,j=!1;if(D){W=f.get(de),W===void 0&&(W=[],f.set(de,W));const _e=D.textures;if(W.length!==_e.length||W[0]!==s.COLOR_ATTACHMENT0){for(let me=0,$e=_e.length;me<$e;me++)W[me]=s.COLOR_ATTACHMENT0+me;W.length=_e.length,j=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,j=!0);j&&s.drawBuffers(W)}function it(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const K={[rs]:s.FUNC_ADD,[Yd]:s.FUNC_SUBTRACT,[$d]:s.FUNC_REVERSE_SUBTRACT};K[Zd]=s.MIN,K[Kd]=s.MAX;const se={[jd]:s.ZERO,[Jd]:s.ONE,[Qd]:s.SRC_COLOR,[Tl]:s.SRC_ALPHA,[rp]:s.SRC_ALPHA_SATURATE,[ip]:s.DST_COLOR,[tp]:s.DST_ALPHA,[ep]:s.ONE_MINUS_SRC_COLOR,[Al]:s.ONE_MINUS_SRC_ALPHA,[sp]:s.ONE_MINUS_DST_COLOR,[np]:s.ONE_MINUS_DST_ALPHA,[ap]:s.CONSTANT_COLOR,[op]:s.ONE_MINUS_CONSTANT_COLOR,[lp]:s.CONSTANT_ALPHA,[cp]:s.ONE_MINUS_CONSTANT_ALPHA};function P(D,de,W,j,_e,me,$e,Ut,sn,pt){if(D===Hi){_===!0&&(De(s.BLEND),_=!1);return}if(_===!1&&(oe(s.BLEND),_=!0),D!==qd){if(D!==m||pt!==w){if((p!==rs||y!==rs)&&(s.blendEquation(s.FUNC_ADD),p=rs,y=rs),pt)switch(D){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gh:s.blendFunc(s.ONE,s.ONE);break;case _h:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _h:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,v=null,L=null,R=null,A.set(0,0,0),I=0,m=D,w=pt}return}_e=_e||de,me=me||W,$e=$e||j,(de!==p||_e!==y)&&(s.blendEquationSeparate(K[de],K[_e]),p=de,y=_e),(W!==x||j!==v||me!==L||$e!==R)&&(s.blendFuncSeparate(se[W],se[j],se[me],se[$e]),x=W,v=j,L=me,R=$e),(Ut.equals(A)===!1||sn!==I)&&(s.blendColor(Ut.r,Ut.g,Ut.b,sn),A.copy(Ut),I=sn),m=D,w=!1}function Ie(D,de){D.side===Dn?De(s.CULL_FACE):oe(s.CULL_FACE);let W=D.side===pn;de&&(W=!W),ne(W),D.blending===Ys&&D.transparent===!1?P(Hi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function ye(D){D!==Wd?(oe(s.CULL_FACE),D!==C&&(D===mh?s.cullFace(s.BACK):D===Xd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),C=D}function he(D){D!==B&&(H&&s.lineWidth(D),B=D)}function ze(D,de,W){D?(oe(s.POLYGON_OFFSET_FILL),(F!==de||k!==W)&&(s.polygonOffset(de,W),F=de,k=W)):De(s.POLYGON_OFFSET_FILL)}function ve(D){D?oe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+Z-1),ae!==D&&(s.activeTexture(D),ae=D)}function M(D,de,W){W===void 0&&(ae===null?W=s.TEXTURE0+Z-1:W=ae);let j=pe[W];j===void 0&&(j={type:void 0,texture:void 0},pe[W]=j),(j.type!==D||j.texture!==de)&&(ae!==W&&(s.activeTexture(W),ae=W),s.bindTexture(D,de||Se[D]),j.type=D,j.texture=de)}function O(){const D=pe[ae];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(D){et.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function we(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function lt(D,de){let W=c.get(de);W===void 0&&(W=new WeakMap,c.set(de,W));let j=W.get(D);j===void 0&&(j=s.getUniformBlockIndex(de,D.name),W.set(D,j))}function je(D,de){const j=c.get(de).get(D);l.get(de)!==j&&(s.uniformBlockBinding(de,j,D.__bindingPointIndex),l.set(de,j))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ae=null,pe={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,x=null,v=null,y=null,L=null,R=null,A=new Fe(0,0,0),I=0,w=!1,S=null,C=null,B=null,F=null,k=null,et.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:De,bindFramebuffer:Ve,drawBuffers:Oe,useProgram:it,setBlending:P,setMaterial:Ie,setFlipSided:ne,setCullFace:ye,setLineWidth:he,setPolygonOffset:ze,setScissorTest:ve,activeTexture:T,bindTexture:M,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:be,texImage3D:ke,updateUBOMapping:lt,uniformBlockBinding:je,texStorage2D:st,texStorage3D:re,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Ge,viewport:we,reset:xt}}function fu(s,e,t,n){const i=Kv(n);switch(t){case cf:return s*e;case uf:return s*e;case ff:return s*e*2;case df:return s*e/i.components*i.byteLength;case Ic:return s*e/i.components*i.byteLength;case pf:return s*e*2/i.components*i.byteLength;case Lc:return s*e*2/i.components*i.byteLength;case hf:return s*e*3/i.components*i.byteLength;case Fn:return s*e*4/i.components*i.byteLength;case Dc:return s*e*4/i.components*i.byteLength;case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bl:case kl:return Math.max(s,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(s,8)*Math.max(e,8)/2;case Vl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $a:case sc:case rc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mf:case ac:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oc:case lc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kv(s){switch(s){case Ti:case af:return{byteLength:1,components:1};case Xr:case of:case ia:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case us:case Rc:case ni:return{byteLength:4,components:1};case lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function jv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):qr("canvas")}function _(T,M,O){let Y=1;const J=ve(T);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Y*J.width),Te=Math.floor(Y*J.height);u===void 0&&(u=g($,Te));const fe=M?g($,Te):u;return fe.width=$,fe.height=Te,fe.getContext("2d").drawImage(T,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Te+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(T,M,O,Y,J=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=M;if(M===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),M===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),M===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),M===s.RGBA){const Te=J?Mo:Ke.getTransfer(Y);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=Te===_t?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(T,M){let O;return T?M===null||M===us||M===ar?O=s.DEPTH24_STENCIL8:M===ni?O=s.DEPTH32F_STENCIL8:M===Xr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===us||M===ar?O=s.DEPTH_COMPONENT24:M===ni?O=s.DEPTH_COMPONENT32F:M===Xr&&(O=s.DEPTH_COMPONENT16),O}function L(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Rn&&T.minFilter!==ti?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){const M=T.target;M.removeEventListener("dispose",R),I(M),M.isVideoTexture&&h.delete(M)}function A(T){const M=T.target;M.removeEventListener("dispose",A),S(M)}function I(T){const M=n.get(T);if(M.__webglInit===void 0)return;const O=T.source,Y=f.get(O);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(T),Object.keys(Y).length===0&&f.delete(O)}n.remove(T)}function w(T){const M=n.get(T);s.deleteTexture(M.__webglTexture);const O=T.source,Y=f.get(O);delete Y[M.__cacheKey],a.memory.textures--}function S(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)s.deleteFramebuffer(M.__webglFramebuffer[Y]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=T.textures;for(let Y=0,J=O.length;Y<J;Y++){const $=n.get(O[Y]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(T)}let C=0;function B(){C=0}function F(){const T=C;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),C+=1,T}function k(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Z(T,M){const O=n.get(T);if(T.isVideoTexture&&he(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,M);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function H(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function te(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,M);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function G(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ie(O,T,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const ae={[Ei]:s.REPEAT,[_i]:s.CLAMP_TO_EDGE,[Fl]:s.MIRRORED_REPEAT},pe={[Rn]:s.NEAREST,[xp]:s.NEAREST_MIPMAP_NEAREST,[ua]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[Lo]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},Me={[Ap]:s.NEVER,[Dp]:s.ALWAYS,[Rp]:s.LESS,[gf]:s.LEQUAL,[Cp]:s.EQUAL,[Lp]:s.GEQUAL,[Pp]:s.GREATER,[Ip]:s.NOTEQUAL};function He(T,M){if(M.type===ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ti||M.magFilter===Lo||M.magFilter===ua||M.magFilter===os||M.minFilter===ti||M.minFilter===Lo||M.minFilter===ua||M.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ae[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ae[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ae[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,pe[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==ua&&M.minFilter!==os||M.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));const Y=M.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const $=k(M);if($!==T.__cacheKey){J[$]===void 0&&(J[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[$].usedTimes++;const Te=J[T.__cacheKey];Te!==void 0&&(J[T.__cacheKey].usedTimes--,Te.usedTimes===0&&w(M)),T.__cacheKey=$,T.__webglTexture=J[$].texture}return O}function q(T,M,O){let Y=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=s.TEXTURE_3D);const J=et(T,M),$=M.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+O);const Te=n.get($);if($.version!==Te.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const fe=Ke.getPrimaries(Ke.workingColorSpace),xe=M.colorSpace===Vi?null:Ke.getPrimaries(M.colorSpace),st=M.colorSpace===Vi||fe===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let re=_(M.image,!1,i.maxTextureSize);re=ze(M,re);const be=r.convert(M.format,M.colorSpace),ke=r.convert(M.type);let Ge=v(M.internalFormat,be,ke,M.colorSpace,M.isVideoTexture);He(Y,M);let we;const lt=M.mipmaps,je=M.isVideoTexture!==!0,xt=Te.__version===void 0||J===!0,D=$.dataReady,de=L(M,re);if(M.isDepthTexture)Ge=y(M.format===or,M.type),xt&&(je?t.texStorage2D(s.TEXTURE_2D,1,Ge,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Ge,re.width,re.height,0,be,ke,null));else if(M.isDataTexture)if(lt.length>0){je&&xt&&t.texStorage2D(s.TEXTURE_2D,de,Ge,lt[0].width,lt[0].height);for(let W=0,j=lt.length;W<j;W++)we=lt[W],je?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,we.width,we.height,be,ke,we.data):t.texImage2D(s.TEXTURE_2D,W,Ge,we.width,we.height,0,be,ke,we.data);M.generateMipmaps=!1}else je?(xt&&t.texStorage2D(s.TEXTURE_2D,de,Ge,re.width,re.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,be,ke,re.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,re.width,re.height,0,be,ke,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Ge,lt[0].width,lt[0].height,re.depth);for(let W=0,j=lt.length;W<j;W++)if(we=lt[W],M.format!==Fn)if(be!==null)if(je){if(D)if(M.layerUpdates.size>0){const _e=fu(we.width,we.height,M.format,M.type);for(const me of M.layerUpdates){const $e=we.data.subarray(me*_e/we.data.BYTES_PER_ELEMENT,(me+1)*_e/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,me,we.width,we.height,1,be,$e)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,we.width,we.height,re.depth,be,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ge,we.width,we.height,re.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,we.width,we.height,re.depth,be,ke,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,Ge,we.width,we.height,re.depth,0,be,ke,we.data)}else{je&&xt&&t.texStorage2D(s.TEXTURE_2D,de,Ge,lt[0].width,lt[0].height);for(let W=0,j=lt.length;W<j;W++)we=lt[W],M.format!==Fn?be!==null?je?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(s.TEXTURE_2D,W,Ge,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,we.width,we.height,be,ke,we.data):t.texImage2D(s.TEXTURE_2D,W,Ge,we.width,we.height,0,be,ke,we.data)}else if(M.isDataArrayTexture)if(je){if(xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Ge,re.width,re.height,re.depth),D)if(M.layerUpdates.size>0){const W=fu(re.width,re.height,M.format,M.type);for(const j of M.layerUpdates){const _e=re.data.subarray(j*W/re.data.BYTES_PER_ELEMENT,(j+1)*W/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,be,ke,_e)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,ke,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,re.width,re.height,re.depth,0,be,ke,re.data);else if(M.isData3DTexture)je?(xt&&t.texStorage3D(s.TEXTURE_3D,de,Ge,re.width,re.height,re.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,ke,re.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,re.width,re.height,re.depth,0,be,ke,re.data);else if(M.isFramebufferTexture){if(xt)if(je)t.texStorage2D(s.TEXTURE_2D,de,Ge,re.width,re.height);else{let W=re.width,j=re.height;for(let _e=0;_e<de;_e++)t.texImage2D(s.TEXTURE_2D,_e,Ge,W,j,0,be,ke,null),W>>=1,j>>=1}}else if(lt.length>0){if(je&&xt){const W=ve(lt[0]);t.texStorage2D(s.TEXTURE_2D,de,Ge,W.width,W.height)}for(let W=0,j=lt.length;W<j;W++)we=lt[W],je?D&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,be,ke,we):t.texImage2D(s.TEXTURE_2D,W,Ge,be,ke,we);M.generateMipmaps=!1}else if(je){if(xt){const W=ve(re);t.texStorage2D(s.TEXTURE_2D,de,Ge,W.width,W.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,ke,re)}else t.texImage2D(s.TEXTURE_2D,0,Ge,be,ke,re);m(M)&&p(Y),Te.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ie(T,M,O){if(M.image.length!==6)return;const Y=et(T,M),J=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const $=n.get(J);if(J.version!==$.__version||Y===!0){t.activeTexture(s.TEXTURE0+O);const Te=Ke.getPrimaries(Ke.workingColorSpace),fe=M.colorSpace===Vi?null:Ke.getPrimaries(M.colorSpace),xe=M.colorSpace===Vi||Te===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const st=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,be=[];for(let j=0;j<6;j++)!st&&!re?be[j]=_(M.image[j],!0,i.maxCubemapSize):be[j]=re?M.image[j].image:M.image[j],be[j]=ze(M,be[j]);const ke=be[0],Ge=r.convert(M.format,M.colorSpace),we=r.convert(M.type),lt=v(M.internalFormat,Ge,we,M.colorSpace),je=M.isVideoTexture!==!0,xt=$.__version===void 0||Y===!0,D=J.dataReady;let de=L(M,ke);He(s.TEXTURE_CUBE_MAP,M);let W;if(st){je&&xt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,lt,ke.width,ke.height);for(let j=0;j<6;j++){W=be[j].mipmaps;for(let _e=0;_e<W.length;_e++){const me=W[_e];M.format!==Fn?Ge!==null?je?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,me.width,me.height,Ge,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,lt,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,me.width,me.height,Ge,we,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,lt,me.width,me.height,0,Ge,we,me.data)}}}else{if(W=M.mipmaps,je&&xt){W.length>0&&de++;const j=ve(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,lt,j.width,j.height)}for(let j=0;j<6;j++)if(re){je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,be[j].width,be[j].height,Ge,we,be[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,lt,be[j].width,be[j].height,0,Ge,we,be[j].data);for(let _e=0;_e<W.length;_e++){const $e=W[_e].image[j].image;je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,$e.width,$e.height,Ge,we,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,lt,$e.width,$e.height,0,Ge,we,$e.data)}}else{je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ge,we,be[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,lt,Ge,we,be[j]);for(let _e=0;_e<W.length;_e++){const me=W[_e];je?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,Ge,we,me.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,lt,Ge,we,me.image[j])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),$.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Se(T,M,O,Y,J,$){const Te=r.convert(O.format,O.colorSpace),fe=r.convert(O.type),xe=v(O.internalFormat,Te,fe,O.colorSpace),st=n.get(M),re=n.get(O);if(re.__renderTarget=M,!st.__hasExternalTextures){const be=Math.max(1,M.width>>$),ke=Math.max(1,M.height>>$);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,$,xe,be,ke,M.depth,0,Te,fe,null):t.texImage2D(J,$,xe,be,ke,0,Te,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,re.__webglTexture,0,ne(M)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,re.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(T,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,$=y(M.stencilBuffer,J),Te=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=ne(M);ye(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,$,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,$,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,$,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,T)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const $=Y[J],Te=r.convert($.format,$.colorSpace),fe=r.convert($.type),xe=v($.internalFormat,Te,fe,$.colorSpace),st=ne(M);O&&ye(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,xe,M.width,M.height):ye(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,xe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,xe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const J=Y.__webglTexture,$=ne(M);if(M.depthTexture.format===$s)ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(M.depthTexture.format===or)ye(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ve(T){const M=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=s.createRenderbuffer(),oe(M.__webglDepthbuffer[Y],T,!1);else{const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),oe(M.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(T,M,O){const Y=n.get(T);M!==void 0&&Se(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ve(T)}function it(T){const M=T.texture,O=n.get(T),Y=n.get(M);T.addEventListener("dispose",A);const J=T.textures,$=T.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=M.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)O.__webglFramebuffer[fe][xe]=s.createFramebuffer()}else O.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)O.__webglFramebuffer[fe]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Te)for(let fe=0,xe=J.length;fe<xe;fe++){const st=n.get(J[fe]);st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&ye(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<J.length;fe++){const xe=J[fe];O.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const st=r.convert(xe.format,xe.colorSpace),re=r.convert(xe.type),be=v(xe.internalFormat,st,re,xe.colorSpace,T.isXRRenderTarget===!0),ke=ne(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,be,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),He(s.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Se(O.__webglFramebuffer[fe][xe],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else Se(O.__webglFramebuffer[fe],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,xe=J.length;fe<xe;fe++){const st=J[fe],re=n.get(st);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),He(s.TEXTURE_2D,st),Se(O.__webglFramebuffer,T,st,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(st)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Y.__webglTexture),He(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Se(O.__webglFramebuffer[xe],T,M,s.COLOR_ATTACHMENT0,fe,xe);else Se(O.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,fe,0);m(M)&&p(fe),t.unbindTexture()}T.depthBuffer&&Ve(T)}function K(T){const M=T.textures;for(let O=0,Y=M.length;O<Y;O++){const J=M[O];if(m(J)){const $=x(T),Te=n.get(J).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const se=[],P=[];function Ie(T){if(T.samples>0){if(ye(T)===!1){const M=T.textures,O=T.width,Y=T.height;let J=s.COLOR_BUFFER_BIT;const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(T),fe=M.length>1;if(fe)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const st=n.get(M[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,s.NEAREST),l===!0&&(se.length=0,P.length=0,se.push(s.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(se.push($),P.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const st=n.get(M[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,st,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ne(T){return Math.min(i.maxSamples,T.samples)}function ye(T){const M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(T){const M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function ze(T,M){const O=T.colorSpace,Y=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==fr&&O!==Vi&&(Ke.getTransfer(O)===_t?(Y!==Fn||J!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=Oe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ye}function Jv(s,e){function t(n,i=Vi){let r;const a=Ke.getTransfer(i);if(n===Ti)return s.UNSIGNED_BYTE;if(n===Cc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return s.BYTE;if(n===of)return s.SHORT;if(n===Xr)return s.UNSIGNED_SHORT;if(n===Rc)return s.INT;if(n===us)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===ia)return s.HALF_FLOAT;if(n===cf)return s.ALPHA;if(n===hf)return s.RGB;if(n===Fn)return s.RGBA;if(n===uf)return s.LUMINANCE;if(n===ff)return s.LUMINANCE_ALPHA;if(n===$s)return s.DEPTH_COMPONENT;if(n===or)return s.DEPTH_STENCIL;if(n===df)return s.RED;if(n===Ic)return s.RED_INTEGER;if(n===pf)return s.RG;if(n===Lc)return s.RG_INTEGER;if(n===Dc)return s.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Hl||n===Gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Hl)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Zl||n===Kl||n===jl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===sc||n===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mf||n===ac||n===oc||n===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Qv extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ue extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ex={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ex)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Qt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yi({vertexShader:tx,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Ct(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sx extends gs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new ix,m=t.getContextAttributes();let p=null,x=null;const v=[],y=[],L=new ee;let R=null;const A=new dn;A.viewport=new at;const I=new dn;I.viewport=new at;const w=[A,I],S=new Qv;let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=v[q];return ie===void 0&&(ie=new al,v[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=v[q];return ie===void 0&&(ie=new al,v[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=v[q];return ie===void 0&&(ie=new al,v[q]=ie),ie.getHandSpace()};function F(q){const ie=y.indexOf(q.inputSource);if(ie===-1)return;const Se=v[ie];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||a),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Z);for(let q=0;q<v.length;q++){const ie=y[q];ie!==null&&(y[q]=null,v[q].disconnect(ie))}C=null,B=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,x=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new fs(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Se=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?or:$s,Se=m.stencil?ar:us);const De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new fs(f.textureWidth,f.textureHeight,{format:Fn,type:Ti,depthTexture:new Af(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let ie=0;ie<q.removed.length;ie++){const Se=q.removed[ie],oe=y.indexOf(Se);oe>=0&&(y[oe]=null,v[oe].disconnect(Se))}for(let ie=0;ie<q.added.length;ie++){const Se=q.added[ie];let oe=y.indexOf(Se);if(oe===-1){for(let Ve=0;Ve<v.length;Ve++)if(Ve>=y.length){y.push(Se),oe=Ve;break}else if(y[Ve]===null){y[Ve]=Se,oe=Ve;break}if(oe===-1)break}const De=v[oe];De&&De.connect(Se)}}const H=new E,te=new E;function G(q,ie,Se){H.setFromMatrixPosition(ie.matrixWorld),te.setFromMatrixPosition(Se.matrixWorld);const oe=H.distanceTo(te),De=ie.projectionMatrix.elements,Ve=Se.projectionMatrix.elements,Oe=De[14]/(De[10]-1),it=De[14]/(De[10]+1),K=(De[9]+1)/De[5],se=(De[9]-1)/De[5],P=(De[8]-1)/De[0],Ie=(Ve[8]+1)/Ve[0],ne=Oe*P,ye=Oe*Ie,he=oe/(-P+Ie),ze=he*-P;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ze),q.translateZ(he),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),De[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ve=Oe+he,T=it+he,M=ne-ze,O=ye+(oe-ze),Y=K*it/T*ve,J=se*it/T*ve;q.projectionMatrix.makePerspective(M,O,Y,J,ve,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ie=q.near,Se=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),S.near=I.near=A.near=ie,S.far=I.far=A.far=Se,(C!==S.near||B!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,B=S.far),A.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|I.layers.mask;const oe=q.parent,De=S.cameras;ae(S,oe);for(let Ve=0;Ve<De.length;Ve++)ae(De[Ve],oe);De.length===2?G(S,A,I):S.projectionMatrix.copy(A.projectionMatrix),pe(q,S,oe)};function pe(q,ie,Se){Se===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=lr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Me=null;function He(q,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){const Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let oe=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Ve=0;Ve<Se.length;Ve++){const Oe=Se[Ve];let it=null;if(d!==null)it=d.getViewport(Oe);else{const se=u.getViewSubImage(f,Oe);it=se.viewport,Ve===0&&(e.setRenderTargetTextures(x,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(x))}let K=w[Ve];K===void 0&&(K=new dn,K.layers.enable(Ve),K.viewport=new at,w[Ve]=K),K.matrix.fromArray(Oe.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Oe.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(it.x,it.y,it.width,it.height),Ve===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(K)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ve=u.getDepthInformation(Se[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(e,Ve,i.renderState)}}for(let Se=0;Se<v.length;Se++){const oe=y[Se],De=v[Se];oe!==null&&De!==void 0&&De.update(oe,ie,c||a)}Me&&Me(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const et=new Ef;et.setAnimationLoop(He),this.setAnimationLoop=function(q){Me=q},this.dispose=function(){}}}const ts=new zt,rx=new Pe;function ax(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,ts.copy(y),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(ts)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ox(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const L=v.program;n.updateUBOMapping(x,L);const R=e.render.frame;r[x.id]!==R&&(f(x),r[x.id]=R)}function h(x){const v=u();x.__bindingPointIndex=v;const y=s.createBuffer(),L=x.__size,R=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],y=x.uniforms,L=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,A=y.length;R<A;R++){const I=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,S=I.length;w<S;w++){const C=I[w];if(d(C,R,w,L)===!0){const B=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let Z=0;Z<F.length;Z++){const H=F[Z],te=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,B+k,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,k),k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,y,L){const R=x.value,A=v+"_"+y;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const I=L[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(x){const v=x.uniforms;let y=0;const L=16;for(let A=0,I=v.length;A<I;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,C=w.length;S<C;S++){const B=w[S],F=Array.isArray(B.value)?B.value:[B.value];for(let k=0,Z=F.length;k<Z;k++){const H=F[k],te=_(H),G=y%L,ae=G%te.boundary,pe=G+ae;y+=ae,pe!==0&&L-pe<te.storage&&(y+=L-pe),B.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=te.storage}}}const R=y%L;return R>0&&(y+=L-R),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class lx{constructor(e={}){const{canvas:t=Kp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this.toneMapping=Gi,this.toneMappingExposure=1;const y=this;let L=!1,R=0,A=0,I=null,w=-1,S=null;const C=new at,B=new at;let F=null;const k=new Fe(0);let Z=0,H=t.width,te=t.height,G=1,ae=null,pe=null;const Me=new at(0,0,H,te),He=new at(0,0,H,te);let et=!1;const q=new Bc;let ie=!1,Se=!1;const oe=new Pe,De=new Pe,Ve=new E,Oe=new at,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function se(){return I===null?G:1}let P=n;function Ie(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",me,!1),P===null){const U="webgl2";if(P=Ie(U,b),P===null)throw Ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ne,ye,he,ze,ve,T,M,O,Y,J,$,Te,fe,xe,st,re,be,ke,Ge,we,lt,je,xt,D;function de(){ne=new d_(P),ne.init(),je=new Jv(P,ne),ye=new o_(P,ne,e,je),he=new Zv(P,ne),ye.reverseDepthBuffer&&f&&he.buffers.depth.setReversed(!0),ze=new g_(P),ve=new Uv,T=new jv(P,ne,he,ve,ye,je,ze),M=new c_(y),O=new f_(y),Y=new b0(P),xt=new r_(P,Y),J=new p_(P,Y,ze,xt),$=new v_(P,J,Y,ze),Ge=new __(P,ye,T),re=new l_(ve),Te=new Dv(y,M,O,ne,ye,xt,re),fe=new ax(y,ve),xe=new Fv,st=new Hv(ne),ke=new s_(y,M,O,he,$,d,l),be=new Yv(y,$,ye),D=new ox(P,ze,ye,he),we=new a_(P,ne,ze),lt=new m_(P,ne,ze),ze.programs=Te.programs,y.capabilities=ye,y.extensions=ne,y.properties=ve,y.renderLists=xe,y.shadowMap=be,y.state=he,y.info=ze}de();const W=new sx(y,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(H,te,!1))},this.getSize=function(b){return b.set(H,te)},this.setSize=function(b,U,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,te=U,t.width=Math.floor(b*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(H*G,te*G).floor()},this.setDrawingBufferSize=function(b,U,z){H=b,te=U,G=z,t.width=Math.floor(b*z),t.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,U,z,V){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,U,z,V),he.viewport(C.copy(Me).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(He)},this.setScissor=function(b,U,z,V){b.isVector4?He.set(b.x,b.y,b.z,b.w):He.set(b,U,z,V),he.scissor(B.copy(He).multiplyScalar(G).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(b){he.setScissorTest(et=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){pe=b},this.getClearColor=function(b){return b.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(b=!0,U=!0,z=!0){let V=0;if(b){let N=!1;if(I!==null){const le=I.texture.format;N=le===Dc||le===Lc||le===Ic}if(N){const le=I.texture.type,ge=le===Ti||le===us||le===Xr||le===ar||le===Cc||le===Pc,Ae=ke.getClearColor(),Re=ke.getClearAlpha(),We=Ae.r,Ze=Ae.g,Ce=Ae.b;ge?(g[0]=We,g[1]=Ze,g[2]=Ce,g[3]=Re,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=We,_[1]=Ze,_[2]=Ce,_[3]=Re,P.clearBufferiv(P.COLOR,0,_))}else V|=P.COLOR_BUFFER_BIT}U&&(V|=P.DEPTH_BUFFER_BIT),z&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",me,!1),xe.dispose(),st.dispose(),ve.dispose(),M.dispose(),O.dispose(),$.dispose(),xt.dispose(),D.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",ah),W.removeEventListener("sessionend",oh),Zi.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=ze.autoReset,U=be.enabled,z=be.autoUpdate,V=be.needsUpdate,N=be.type;de(),ze.autoReset=b,be.enabled=U,be.autoUpdate=z,be.needsUpdate=V,be.type=N}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $e(b){const U=b.target;U.removeEventListener("dispose",$e),Ut(U)}function Ut(b){sn(b),ve.remove(b)}function sn(b){const U=ve.get(b).programs;U!==void 0&&(U.forEach(function(z){Te.releaseProgram(z)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,V,N,le){U===null&&(U=it);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Ae=Ad(b,U,z,V,N);he.setMaterial(V,ge);let Re=z.index,We=1;if(V.wireframe===!0){if(Re=J.getWireframeAttribute(z),Re===void 0)return;We=2}const Ze=z.drawRange,Ce=z.attributes.position;let ht=Ze.start*We,yt=(Ze.start+Ze.count)*We;le!==null&&(ht=Math.max(ht,le.start*We),yt=Math.min(yt,(le.start+le.count)*We)),Re!==null?(ht=Math.max(ht,0),yt=Math.min(yt,Re.count)):Ce!=null&&(ht=Math.max(ht,0),yt=Math.min(yt,Ce.count));const bt=yt-ht;if(bt<0||bt===1/0)return;xt.setup(N,V,Ae,z,Re);let mn,ft=we;if(Re!==null&&(mn=Y.get(Re),ft=lt,ft.setIndex(mn)),N.isMesh)V.wireframe===!0?(he.setLineWidth(V.wireframeLinewidth*se()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(N.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),he.setLineWidth(Le*se()),N.isLineSegments?ft.setMode(P.LINES):N.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else N.isPoints?ft.setMode(P.POINTS):N.isSprite&&ft.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ft.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ft.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,ci=N._multiDrawCounts,dt=N._multiDrawCount,Vn=Re?Y.get(Re).bytesPerElement:1,vs=ve.get(V).currentProgram.getUniforms();for(let yn=0;yn<dt;yn++)vs.setValue(P,"_gl_DrawID",yn),ft.render(Le[yn]/Vn,ci[yn])}else if(N.isInstancedMesh)ft.renderInstances(ht,bt,N.count);else if(z.isInstancedBufferGeometry){const Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ci=Math.min(z.instanceCount,Le);ft.renderInstances(ht,bt,ci)}else ft.render(ht,bt)};function pt(b,U,z){b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,ha(b,U,z),b.side=wi,b.needsUpdate=!0,ha(b,U,z),b.side=Dn):ha(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),p=st.get(z),p.init(U),v.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==z&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Ae=le[ge];pt(Ae,z,N),V.add(Ae)}else pt(le,z,N),V.add(le)}),v.pop(),p=null,V},this.compileAsync=function(b,U,z=null){const V=this.compile(b,U,z);return new Promise(N=>{function le(){if(V.forEach(function(ge){ve.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){N(b);return}setTimeout(le,10)}ne.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let kn=null;function li(b){kn&&kn(b)}function ah(){Zi.stop()}function oh(){Zi.start()}const Zi=new Ef;Zi.setAnimationLoop(li),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(b){kn=b,W.setAnimationLoop(b),b===null?Zi.stop():Zi.start()},W.addEventListener("sessionstart",ah),W.addEventListener("sessionend",oh),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,I),p=st.get(b,v.length),p.init(U),v.push(p),De.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(De),Se=this.localClippingEnabled,ie=re.init(this.clippingPlanes,Se),m=xe.get(b,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){const le=y.xr.getDepthSensingMesh();le!==null&&Io(le,U,-1/0,y.sortObjects)}Io(b,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ae,pe),K=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,K&&ke.addToRenderList(m,b),this.info.render.frame++,ie===!0&&re.beginShadows();const z=p.state.shadowsArray;be.render(z,b,U),ie===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const le=U.cameras;if(N.length>0)for(let ge=0,Ae=le.length;ge<Ae;ge++){const Re=le[ge];ch(V,N,b,Re)}K&&ke.render(b);for(let ge=0,Ae=le.length;ge<Ae;ge++){const Re=le[ge];lh(m,b,Re,Re.viewport)}}else N.length>0&&ch(V,N,b,U),K&&ke.render(b),lh(m,b,U);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(y,b,U),xt.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],ie===!0&&re.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Io(b,U,z,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){V&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(De);const ge=$.update(b),Ae=b.material;Ae.visible&&m.push(b,ge,Ae,z,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const ge=$.update(b),Ae=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Oe.copy(ge.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(De)),Array.isArray(Ae)){const Re=ge.groups;for(let We=0,Ze=Re.length;We<Ze;We++){const Ce=Re[We],ht=Ae[Ce.materialIndex];ht&&ht.visible&&m.push(b,ge,ht,z,Oe.z,Ce)}}else Ae.visible&&m.push(b,ge,Ae,z,Oe.z,null)}}const le=b.children;for(let ge=0,Ae=le.length;ge<Ae;ge++)Io(le[ge],U,z,V)}function lh(b,U,z,V){const N=b.opaque,le=b.transmissive,ge=b.transparent;p.setupLightsView(z),ie===!0&&re.setGlobalState(y.clippingPlanes,z),V&&he.viewport(C.copy(V)),N.length>0&&ca(N,U,z),le.length>0&&ca(le,U,z),ge.length>0&&ca(ge,U,z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ch(b,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new fs(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?ia:Ti,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const le=p.state.transmissionRenderTarget[V.id],ge=V.viewport||C;le.setSize(ge.z,ge.w);const Ae=y.getRenderTarget();y.setRenderTarget(le),y.getClearColor(k),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),K&&ke.render(z);const Re=y.toneMapping;y.toneMapping=Gi;const We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ie===!0&&re.setGlobalState(y.clippingPlanes,V),ca(b,z,V),T.updateMultisampleRenderTarget(le),T.updateRenderTargetMipmap(le),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ce=0,ht=U.length;Ce<ht;Ce++){const yt=U[Ce],bt=yt.object,mn=yt.geometry,ft=yt.material,Le=yt.group;if(ft.side===Dn&&bt.layers.test(V.layers)){const ci=ft.side;ft.side=pn,ft.needsUpdate=!0,hh(bt,z,V,mn,ft,Le),ft.side=ci,ft.needsUpdate=!0,Ze=!0}}Ze===!0&&(T.updateMultisampleRenderTarget(le),T.updateRenderTargetMipmap(le))}y.setRenderTarget(Ae),y.setClearColor(k,Z),We!==void 0&&(V.viewport=We),y.toneMapping=Re}function ca(b,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=b.length;N<le;N++){const ge=b[N],Ae=ge.object,Re=ge.geometry,We=V===null?ge.material:V,Ze=ge.group;Ae.layers.test(z.layers)&&hh(Ae,U,z,Re,We,Ze)}}function hh(b,U,z,V,N,le){b.onBeforeRender(y,U,z,V,N,le),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,U,z,V,b,le),N.transparent===!0&&N.side===Dn&&N.forceSinglePass===!1?(N.side=pn,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,b,le),N.side=wi,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,b,le),N.side=Dn):y.renderBufferDirect(z,U,V,N,b,le),b.onAfterRender(y,U,z,V,N,le)}function ha(b,U,z){U.isScene!==!0&&(U=it);const V=ve.get(b),N=p.state.lights,le=p.state.shadowsArray,ge=N.state.version,Ae=Te.getParameters(b,N.state,le,U,z),Re=Te.getProgramCacheKey(Ae);let We=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?O:M).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",$e),We=new Map,V.programs=We);let Ze=We.get(Re);if(Ze!==void 0){if(V.currentProgram===Ze&&V.lightsStateVersion===ge)return fh(b,Ae),Ze}else Ae.uniforms=Te.getUniforms(b),b.onBeforeCompile(Ae,y),Ze=Te.acquireProgram(Ae,Re),We.set(Re,Ze),V.uniforms=Ae.uniforms;const Ce=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=re.uniform),fh(b,Ae),V.needsLights=Cd(b),V.lightsStateVersion=ge,V.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ze,V.uniformsList=null,Ze}function uh(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Za.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function fh(b,U){const z=ve.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Ad(b,U,z,V,N){U.isScene!==!0&&(U=it),T.resetTextureUnits();const le=U.fog,ge=V.isMeshStandardMaterial?U.environment:null,Ae=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fr,Re=(V.isMeshStandardMaterial?O:M).get(V.envMap||ge),We=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ze=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!z.morphAttributes.position,ht=!!z.morphAttributes.normal,yt=!!z.morphAttributes.color;let bt=Gi;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(bt=y.toneMapping);const mn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ft=mn!==void 0?mn.length:0,Le=ve.get(V),ci=p.state.lights;if(ie===!0&&(Se===!0||b!==S)){const Cn=b===S&&V.id===w;re.setState(V,b,Cn)}let dt=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ci.state.version||Le.outputColorSpace!==Ae||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Re||V.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==We||Le.vertexTangents!==Ze||Le.morphTargets!==Ce||Le.morphNormals!==ht||Le.morphColors!==yt||Le.toneMapping!==bt||Le.morphTargetsCount!==ft)&&(dt=!0):(dt=!0,Le.__version=V.version);let Vn=Le.currentProgram;dt===!0&&(Vn=ha(V,U,N));let vs=!1,yn=!1,Mr=!1;const wt=Vn.getUniforms(),Jn=Le.uniforms;if(he.useProgram(Vn.program)&&(vs=!0,yn=!0,Mr=!0),V.id!==w&&(w=V.id,yn=!0),vs||S!==b){he.buffers.depth.getReversed()?(oe.copy(b.projectionMatrix),Jp(oe),Qp(oe),wt.setValue(P,"projectionMatrix",oe)):wt.setValue(P,"projectionMatrix",b.projectionMatrix),wt.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ci=wt.map.cameraPosition;Ci!==void 0&&Ci.setValue(P,Ve.setFromMatrixPosition(b.matrixWorld)),ye.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&wt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,yn=!0,Mr=!0)}if(N.isSkinnedMesh){wt.setOptional(P,N,"bindMatrix"),wt.setOptional(P,N,"bindMatrixInverse");const Cn=N.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),wt.setValue(P,"boneTexture",Cn.boneTexture,T))}N.isBatchedMesh&&(wt.setOptional(P,N,"batchingTexture"),wt.setValue(P,"batchingTexture",N._matricesTexture,T),wt.setOptional(P,N,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",N._indirectTexture,T),wt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",N._colorsTexture,T));const Sr=z.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&Ge.update(N,z,Vn),(yn||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,wt.setValue(P,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Jn.envMap.value=Re,Jn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Jn.envMapIntensity.value=U.environmentIntensity),yn&&(wt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&Rd(Jn,Mr),le&&V.fog===!0&&fe.refreshFogUniforms(Jn,le),fe.refreshMaterialUniforms(Jn,V,G,te,p.state.transmissionRenderTarget[b.id]),Za.upload(P,uh(Le),Jn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Za.upload(P,uh(Le),Jn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&wt.setValue(P,"center",N.center),wt.setValue(P,"modelViewMatrix",N.modelViewMatrix),wt.setValue(P,"normalMatrix",N.normalMatrix),wt.setValue(P,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Cn=V.uniformsGroups;for(let Ci=0,Pi=Cn.length;Ci<Pi;Ci++){const dh=Cn[Ci];D.update(dh,Vn),D.bind(dh,Vn)}}return Vn}function Rd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Cd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,U,z){ve.get(b.texture).__webglTexture=U,ve.get(b.depthTexture).__webglTexture=z;const V=ve.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const z=ve.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,z=0){I=b,R=U,A=z;let V=!0,N=null,le=!1,ge=!1;if(b){const Re=ve.get(b);if(Re.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(Re.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Re.__hasExternalTextures)T.rebindTextures(b,ve.get(b.texture).__webglTexture,ve.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ce=b.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&ve.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ge=!0);const Ze=ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[U])?N=Ze[U][z]:N=Ze[U],le=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?N=ve.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?N=Ze[z]:N=Ze,C.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else C.copy(Me).multiplyScalar(G).floor(),B.copy(He).multiplyScalar(G).floor(),F=et;if(he.bindFramebuffer(P.FRAMEBUFFER,N)&&V&&he.drawBuffers(b,N),he.viewport(C),he.scissor(B),he.setScissorTest(F),le){const Re=ve.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,z)}else if(ge){const Re=ve.get(b.texture),We=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.__webglTexture,z||0,We)}w=-1},this.readRenderTargetPixels=function(b,U,z,V,N,le,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){he.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const Re=b.texture,We=Re.format,Ze=Re.type;if(!ye.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&z>=0&&z<=b.height-N&&P.readPixels(U,z,V,N,je.convert(We),je.convert(Ze),le)}finally{const Re=I!==null?ve.get(I).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,V,N,le,ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){const Re=b.texture,We=Re.format,Ze=Re.type;if(!ye.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-V&&z>=0&&z<=b.height-N){he.bindFramebuffer(P.FRAMEBUFFER,Ae);const Ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),P.readPixels(U,z,V,N,je.convert(We),je.convert(Ze),0);const ht=I!==null?ve.get(I).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,ht);const yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jp(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(Ce),P.deleteSync(yt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,z=0){b.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-z),N=Math.floor(b.image.width*V),le=Math.floor(b.image.height*V),ge=U!==null?U.x:0,Ae=U!==null?U.y:0;T.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,ge,Ae,N,le),he.unbindTexture()},this.copyTextureToTexture=function(b,U,z=null,V=null,N=0){b.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let le,ge,Ae,Re,We,Ze,Ce,ht,yt;const bt=b.isCompressedTexture?b.mipmaps[N]:b.image;z!==null?(le=z.max.x-z.min.x,ge=z.max.y-z.min.y,Ae=z.isBox3?z.max.z-z.min.z:1,Re=z.min.x,We=z.min.y,Ze=z.isBox3?z.min.z:0):(le=bt.width,ge=bt.height,Ae=bt.depth||1,Re=0,We=0,Ze=0),V!==null?(Ce=V.x,ht=V.y,yt=V.z):(Ce=0,ht=0,yt=0);const mn=je.convert(U.format),ft=je.convert(U.type);let Le;U.isData3DTexture?(T.setTexture3D(U,0),Le=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Le=P.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Le=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ci=P.getParameter(P.UNPACK_ROW_LENGTH),dt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Vn=P.getParameter(P.UNPACK_SKIP_PIXELS),vs=P.getParameter(P.UNPACK_SKIP_ROWS),yn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ze);const Mr=b.isDataArrayTexture||b.isData3DTexture,wt=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Jn=ve.get(b),Sr=ve.get(U),Cn=ve.get(Jn.__renderTarget),Ci=ve.get(Sr.__renderTarget);he.bindFramebuffer(P.READ_FRAMEBUFFER,Cn.__webglFramebuffer),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Pi=0;Pi<Ae;Pi++)Mr&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(b).__webglTexture,N,Ze+Pi),b.isDepthTexture?(wt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(U).__webglTexture,N,yt+Pi),P.blitFramebuffer(Re,We,le,ge,Ce,ht,le,ge,P.DEPTH_BUFFER_BIT,P.NEAREST)):wt?P.copyTexSubImage3D(Le,N,Ce,ht,yt+Pi,Re,We,le,ge):P.copyTexSubImage2D(Le,N,Ce,ht,yt+Pi,Re,We,le,ge);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else wt?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Le,N,Ce,ht,yt,le,ge,Ae,mn,ft,bt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Le,N,Ce,ht,yt,le,ge,Ae,mn,bt.data):P.texSubImage3D(Le,N,Ce,ht,yt,le,ge,Ae,mn,ft,bt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Ce,ht,le,ge,mn,ft,bt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Ce,ht,bt.width,bt.height,mn,bt.data):P.texSubImage2D(P.TEXTURE_2D,N,Ce,ht,le,ge,mn,ft,bt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ci),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,vs),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yn),N===0&&U.generateMipmaps&&P.generateMipmap(Le),he.unbindTexture()},this.copyTextureToTexture3D=function(b,U,z=null,V=null,N=0){return b.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,z,V,N)},this.initRenderTarget=function(b){ve.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),he.unbindTexture()},this.resetState=function(){R=0,A=0,I=null,he.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Lf extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentIntensity=1,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new E;class so{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Zn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new so(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Df extends Ri{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ds;const Ar=new E,Us=new E,Ns=new E,Fs=new ee,Rr=new ee,Uf=new Pe,La=new E,Cr=new E,Da=new E,du=new ee,ol=new ee,pu=new ee;class hx extends St{constructor(e=new Df){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cx(t,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new so(n,3,0,!1)),Ds.setAttribute("uv",new so(n,2,3,!1))}this.geometry=Ds,this.material=e,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Uf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ua(La.set(-.5,-.5,0),Ns,a,Us,i,r),Ua(Cr.set(.5,-.5,0),Ns,a,Us,i,r),Ua(Da.set(.5,.5,0),Ns,a,Us,i,r),du.set(0,0),ol.set(1,0),pu.set(1,1);let o=e.ray.intersectTriangle(La,Cr,Da,!1,Ar);if(o===null&&(Ua(Cr.set(-.5,.5,0),Ns,a,Us,i,r),ol.set(0,1),o=e.ray.intersectTriangle(La,Da,Cr,!1,Ar),o===null))return;const l=e.ray.origin.distanceTo(Ar);l<e.near||l>e.far||t.push({distance:l,point:Ar.clone(),uv:Un.getInterpolation(Ar,La,Cr,Da,du,ol,pu,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ua(s,e,t,n,i,r){Fs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Rr.x=r*Fs.x-i*Fs.y,Rr.y=i*Fs.x+r*Fs.y):Rr.copy(Fs),s.copy(e),s.x+=Rr.x,s.y+=Rr.y,s.applyMatrix4(Uf)}const mu=new E,gu=new at,_u=new at,ux=new E,vu=new Pe,Na=new E,ll=new dr,xu=new Pe,cl=new So;class fx extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Na),this.boundingBox.expandByPoint(Na)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Na),this.boundingSphere.expandByPoint(Na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(i),e.ray.intersectsSphere(ll)!==!1&&(xu.copy(i).invert(),cl.copy(e.ray).applyMatrix4(xu),!(this.boundingBox!==null&&cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;gu.fromBufferAttribute(i.attributes.skinIndex,e),_u.fromBufferAttribute(i.attributes.skinWeight,e),mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=_u.getComponent(r);if(a!==0){const o=gu.getComponent(r);vu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ux.copy(mu).applyMatrix4(vu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class dc extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dx extends Qt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Rn,h=Rn,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=new Pe,px=new Pe;class kc{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:px;yu.multiplyMatrices(o,t[r]),yu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new kc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new dx(t,e,e,Fn,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new dc),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vc extends Ri{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ro=new E,ao=new E,Mu=new Pe,Pr=new So,Fa=new dr,hl=new E,Su=new E;class Nf extends St{constructor(e=new kt,t=new Vc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ro.fromBufferAttribute(t,i-1),ao.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ro.distanceTo(ao);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Mu.copy(i).invert(),Pr.copy(e.ray).applyMatrix4(Mu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),v=Oa(this,e,Pr,l,p,x);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=Oa(this,e,Pr,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=Oa(this,e,Pr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Oa(this,e,Pr,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oa(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ro.fromBufferAttribute(a,i),ao.fromBufferAttribute(a,r),t.distanceSqToSegment(ro,ao,hl,Su)>n)return;hl.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(hl);if(!(l<e.near||l>e.far))return{distance:l,point:Su.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class mr extends Qt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ee:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],r=[],a=[],o=new E,l=new Pe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Yt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Yt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hc extends jn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ee){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mx extends Hc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Gc(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Ba=new E,ul=new Gc,fl=new Gc,dl=new Gc;class sa extends jn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Ba.subVectors(i[0],i[1]).add(i[0]),c=Ba);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ba.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ul.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),fl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),dl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),fl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),dl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ul.calc(l),fl.calc(l),dl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function gx(s,e){const t=1-s;return t*t*e}function _x(s,e){return 2*(1-s)*s*e}function vx(s,e){return s*s*e}function kr(s,e,t,n){return gx(s,e)+_x(s,t)+vx(s,n)}function xx(s,e){const t=1-s;return t*t*t*e}function yx(s,e){const t=1-s;return 3*t*t*s*e}function Mx(s,e){return 3*(1-s)*s*s*e}function Sx(s,e){return s*s*s*e}function Vr(s,e,t,n,i){return xx(s,e)+yx(s,t)+Mx(s,n)+Sx(s,i)}class Ff extends jn{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,i.x,r.x,a.x,o.x),Vr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bx extends jn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,i.x,r.x,a.x,o.x),Vr(e,i.y,r.y,a.y,o.y),Vr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Of extends jn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wx extends jn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bf extends jn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,i.x,r.x,a.x),kr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zf extends jn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,i.x,r.x,a.x),kr(e,i.y,r.y,a.y),kr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kf extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(bu(o,l.x,c.x,h.x,u.x),bu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ee().fromArray(i))}return this}}var oo=Object.freeze({__proto__:null,ArcCurve:mx,CatmullRomCurve3:sa,CubicBezierCurve:Ff,CubicBezierCurve3:bx,EllipseCurve:Hc,LineCurve:Of,LineCurve3:wx,QuadraticBezierCurve:Bf,QuadraticBezierCurve3:zf,SplineCurve:kf});class Ex extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new oo[i.type]().fromJSON(i))}return this}}class lo extends Ex{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Of(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Bf(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Ff(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Hc(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wc extends kt{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Yt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,f=new ee,d=new E,g=new E,_=new E;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let x=0;x<=t;x++){const v=n+x*h*i,y=Math.sin(v),L=Math.cos(v);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*y,u.y=e[R].y,u.z=e[R].x*L,a.push(u.x,u.y,u.z),f.x=x/t,f.y=R/(e.length-1),o.push(f.x,f.y);const A=l[3*R+0]*y,I=l[3*R+1],w=l[3*R+0]*L;c.push(A,I,w)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,L=y,R=y+e.length,A=y+e.length+1,I=y+1;r.push(L,R,I),r.push(A,I,R)}this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.points,e.segments,e.phiStart,e.phiLength)}}class Xc extends Wc{constructor(e=1,t=1,n=4,i=8){const r=new lo;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Xc(e.radius,e.length,e.capSegments,e.radialSegments)}}class ra extends kt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new E,h=new ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zn extends kt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function x(){const y=new E,L=new E;let R=0;const A=(t-e)/n;for(let I=0;I<=r;I++){const w=[],S=I/r,C=S*(t-e)+e;for(let B=0;B<=i;B++){const F=B/i,k=F*l+o,Z=Math.sin(k),H=Math.cos(k);L.x=C*Z,L.y=-S*n+m,L.z=C*H,u.push(L.x,L.y,L.z),y.set(Z,A,H).normalize(),f.push(y.x,y.y,y.z),d.push(F,1-S),w.push(g++)}_.push(w)}for(let I=0;I<i;I++)for(let w=0;w<r;w++){const S=_[w][I],C=_[w+1][I],B=_[w+1][I+1],F=_[w][I+1];(e>0||w!==0)&&(h.push(S,C,F),R+=3),(t>0||w!==r-1)&&(h.push(C,B,F),R+=3)}c.addGroup(p,R,0),p+=R}function v(y){const L=g,R=new ee,A=new E;let I=0;const w=y===!0?e:t,S=y===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const C=g;for(let B=0;B<=i;B++){const k=B/i*l+o,Z=Math.cos(k),H=Math.sin(k);A.x=w*H,A.y=m*S,A.z=w*Z,u.push(A.x,A.y,A.z),f.push(0,S,0),R.x=Z*.5+.5,R.y=H*.5*S+.5,d.push(R.x,R.y),g++}for(let B=0;B<i;B++){const F=L+B,k=C+B;y===!0?h.push(k,k+1,F):h.push(k+1,k,F),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends zn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class co extends lo{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new lo().fromJSON(i))}return this}}const Tx={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Vf(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=Ix(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Yr(r,a,t,o,l,d,0),a}};function Vf(s,e,t,n,i){let r,a;if(i===Hx(s,e,t,n)>0)for(r=e;r<t;r+=n)a=wu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=wu(r,s[r],s[r+1],a);return a&&Eo(a,a.next)&&(Zr(a),a=a.next),a}function ds(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Eo(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Fx(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Rx(s,n,i,r):Ax(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Zr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Cx(ds(s),e,t),Yr(s,e,t,n,i,r,2)):a===2&&Px(s,e,t,n,i,r):Yr(ds(s),e,t,n,i,r,1);break}}}function Ax(s){const e=s.prev,t=s,n=s.next;if(Dt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ws(i,o,r,l,a,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rx(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Dt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=pc(d,g,e,t,n),x=pc(_,m,e,t,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Ws(o,h,l,u,c,f,v.x,v.y)&&Dt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Ws(o,h,l,u,c,f,y.x,y.y)&&Dt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Ws(o,h,l,u,c,f,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Ws(o,h,l,u,c,f,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Cx(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Eo(i,r)&&Hf(i,n,n.next,r)&&$r(i,r)&&$r(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Zr(n),Zr(n.next),n=s=r),n=n.next}while(n!==s);return ds(n)}function Px(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zx(a,o)){let l=Gf(a,o);a=ds(a,a.next),l=ds(l,l.next),Yr(a,e,t,n,i,r,0),Yr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ix(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Vf(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Bx(c));for(i.sort(Lx),r=0;r<i.length;r++)t=Dx(i[r],t);return t}function Lx(s,e){return s.x-e.x}function Dx(s,e){const t=Ux(s,e);if(!t)return e;const n=Gf(t,s);return ds(n,n.next),ds(t,t.next)}function Ux(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ws(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),$r(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Nx(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function Nx(s,e){return Dt(s.prev,s,e.prev)<0&&Dt(e.next,s,s.next)<0}function Fx(s,e,t,n){let i=s;do i.z===0&&(i.z=pc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ox(i)}function Ox(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function pc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Bx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ws(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function zx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!kx(s,e)&&($r(s,e)&&$r(e,s)&&Vx(s,e)&&(Dt(s.prev,s,e.prev)||Dt(s,e.prev,e))||Eo(s,e)&&Dt(s.prev,s,s.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Eo(s,e){return s.x===e.x&&s.y===e.y}function Hf(s,e,t,n){const i=ka(Dt(s,e,t)),r=ka(Dt(s,e,n)),a=ka(Dt(t,n,s)),o=ka(Dt(t,n,e));return!!(i!==r&&a!==o||i===0&&za(s,t,e)||r===0&&za(s,n,e)||a===0&&za(t,s,n)||o===0&&za(t,e,n))}function za(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ka(s){return s>0?1:s<0?-1:0}function kx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Hf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function $r(s,e){return Dt(s.prev,s,s.next)<0?Dt(s,e,s.next)>=0&&Dt(s,s.prev,e)>=0:Dt(s,e,s.prev)<0||Dt(s,s.next,e)<0}function Vx(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Gf(s,e){const t=new mc(s.i,s.x,s.y),n=new mc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wu(s,e,t,n){const i=new mc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hx(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Mi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Mi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Eu(e),Tu(n,e);let a=e.length;t.forEach(Eu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Tu(n,t[l]);const o=Tx.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Eu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Tu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class qc extends kt{constructor(e=new co([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new nt(i,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Gx;let v,y=!1,L,R,A,I;p&&(v=p.getSpacedPoints(h),y=!0,f=!1,L=p.computeFrenetFrames(h,!1),R=new E,A=new E,I=new E),f||(m=0,d=0,g=0,_=0);const w=o.extractPoints(c);let S=w.shape;const C=w.holes;if(!Mi.isClockWise(S)){S=S.reverse();for(let K=0,se=C.length;K<se;K++){const P=C[K];Mi.isClockWise(P)&&(C[K]=P.reverse())}}const F=Mi.triangulateShape(S,C),k=S;for(let K=0,se=C.length;K<se;K++){const P=C[K];S=S.concat(P)}function Z(K,se,P){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(se,P)}const H=S.length,te=F.length;function G(K,se,P){let Ie,ne,ye;const he=K.x-se.x,ze=K.y-se.y,ve=P.x-K.x,T=P.y-K.y,M=he*he+ze*ze,O=he*T-ze*ve;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(M),J=Math.sqrt(ve*ve+T*T),$=se.x-ze/Y,Te=se.y+he/Y,fe=P.x-T/J,xe=P.y+ve/J,st=((fe-$)*T-(xe-Te)*ve)/(he*T-ze*ve);Ie=$+he*st-K.x,ne=Te+ze*st-K.y;const re=Ie*Ie+ne*ne;if(re<=2)return new ee(Ie,ne);ye=Math.sqrt(re/2)}else{let Y=!1;he>Number.EPSILON?ve>Number.EPSILON&&(Y=!0):he<-Number.EPSILON?ve<-Number.EPSILON&&(Y=!0):Math.sign(ze)===Math.sign(T)&&(Y=!0),Y?(Ie=-ze,ne=he,ye=Math.sqrt(M)):(Ie=he,ne=ze,ye=Math.sqrt(M/2))}return new ee(Ie/ye,ne/ye)}const ae=[];for(let K=0,se=k.length,P=se-1,Ie=K+1;K<se;K++,P++,Ie++)P===se&&(P=0),Ie===se&&(Ie=0),ae[K]=G(k[K],k[P],k[Ie]);const pe=[];let Me,He=ae.concat();for(let K=0,se=C.length;K<se;K++){const P=C[K];Me=[];for(let Ie=0,ne=P.length,ye=ne-1,he=Ie+1;Ie<ne;Ie++,ye++,he++)ye===ne&&(ye=0),he===ne&&(he=0),Me[Ie]=G(P[Ie],P[ye],P[he]);pe.push(Me),He=He.concat(Me)}for(let K=0;K<m;K++){const se=K/m,P=d*Math.cos(se*Math.PI/2),Ie=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,ye=k.length;ne<ye;ne++){const he=Z(k[ne],ae[ne],Ie);oe(he.x,he.y,-P)}for(let ne=0,ye=C.length;ne<ye;ne++){const he=C[ne];Me=pe[ne];for(let ze=0,ve=he.length;ze<ve;ze++){const T=Z(he[ze],Me[ze],Ie);oe(T.x,T.y,-P)}}}const et=g+_;for(let K=0;K<H;K++){const se=f?Z(S[K],He[K],et):S[K];y?(A.copy(L.normals[0]).multiplyScalar(se.x),R.copy(L.binormals[0]).multiplyScalar(se.y),I.copy(v[0]).add(A).add(R),oe(I.x,I.y,I.z)):oe(se.x,se.y,0)}for(let K=1;K<=h;K++)for(let se=0;se<H;se++){const P=f?Z(S[se],He[se],et):S[se];y?(A.copy(L.normals[K]).multiplyScalar(P.x),R.copy(L.binormals[K]).multiplyScalar(P.y),I.copy(v[K]).add(A).add(R),oe(I.x,I.y,I.z)):oe(P.x,P.y,u/h*K)}for(let K=m-1;K>=0;K--){const se=K/m,P=d*Math.cos(se*Math.PI/2),Ie=g*Math.sin(se*Math.PI/2)+_;for(let ne=0,ye=k.length;ne<ye;ne++){const he=Z(k[ne],ae[ne],Ie);oe(he.x,he.y,u+P)}for(let ne=0,ye=C.length;ne<ye;ne++){const he=C[ne];Me=pe[ne];for(let ze=0,ve=he.length;ze<ve;ze++){const T=Z(he[ze],Me[ze],Ie);y?oe(T.x,T.y+v[h-1].y,v[h-1].x+P):oe(T.x,T.y,u+P)}}}q(),ie();function q(){const K=i.length/3;if(f){let se=0,P=H*se;for(let Ie=0;Ie<te;Ie++){const ne=F[Ie];De(ne[2]+P,ne[1]+P,ne[0]+P)}se=h+m*2,P=H*se;for(let Ie=0;Ie<te;Ie++){const ne=F[Ie];De(ne[0]+P,ne[1]+P,ne[2]+P)}}else{for(let se=0;se<te;se++){const P=F[se];De(P[2],P[1],P[0])}for(let se=0;se<te;se++){const P=F[se];De(P[0]+H*h,P[1]+H*h,P[2]+H*h)}}n.addGroup(K,i.length/3-K,0)}function ie(){const K=i.length/3;let se=0;Se(k,se),se+=k.length;for(let P=0,Ie=C.length;P<Ie;P++){const ne=C[P];Se(ne,se),se+=ne.length}n.addGroup(K,i.length/3-K,1)}function Se(K,se){let P=K.length;for(;--P>=0;){const Ie=P;let ne=P-1;ne<0&&(ne=K.length-1);for(let ye=0,he=h+m*2;ye<he;ye++){const ze=H*ye,ve=H*(ye+1),T=se+Ie+ze,M=se+ne+ze,O=se+ne+ve,Y=se+Ie+ve;Ve(T,M,O,Y)}}}function oe(K,se,P){l.push(K),l.push(se),l.push(P)}function De(K,se,P){Oe(K),Oe(se),Oe(P);const Ie=i.length/3,ne=x.generateTopUV(n,i,Ie-3,Ie-2,Ie-1);it(ne[0]),it(ne[1]),it(ne[2])}function Ve(K,se,P,Ie){Oe(K),Oe(se),Oe(Ie),Oe(se),Oe(P),Oe(Ie);const ne=i.length/3,ye=x.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);it(ye[0]),it(ye[1]),it(ye[3]),it(ye[1]),it(ye[2]),it(ye[3])}function Oe(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function it(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new oo[i.type]().fromJSON(i)),new qc(n,e.options)}}const Gx={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ee(r,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-u),new ee(f,1-g),new ee(_,1-p)]:[new ee(o,1-l),new ee(h,1-u),new ee(d,1-g),new ee(m,1-p)]}};function Wx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yc extends kt{constructor(e=new co([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(i,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(a,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;Mi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Mi.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Mi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){const x=d[m];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],v=x[0]+u,y=x[1]+u,L=x[2]+u;n.push(v,y,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Xx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Yc(n,e.curveSegments)}}function Xx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Tn extends kt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new E,f=new E,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const R=L/t;u.x=-e*Math.cos(i+R*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+R*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(R+y,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=h[p][x+1],y=h[p][x],L=h[p+1][x],R=h[p+1][x+1];(p!==0||a>0)&&d.push(v,y,R),(p!==n-1||l<Math.PI)&&d.push(y,L,R)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gr extends kt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new E,u=new E,f=new E;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,x=(i+1)*d+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _r extends kt{constructor(e=new zf(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,l=new E,c=new ee;let h=new E;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function _(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),x(),p()}function m(v){h=e.getPointAt(v/t,h);const y=a.normals[v],L=a.binormals[v];for(let R=0;R<=i;R++){const A=R/i*Math.PI*2,I=Math.sin(A),w=-Math.cos(A);l.x=w*y.x+I*L.x,l.y=w*y.y+I*L.y,l.z=w*y.z+I*L.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const L=(i+1)*(v-1)+(y-1),R=(i+1)*v+(y-1),A=(i+1)*v+y,I=(i+1)*(v-1)+y;g.push(L,R,I),g.push(R,A,I)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)c.x=v/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _r(new oo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ot extends Ri{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Si extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pl extends Ri{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qx extends Ri{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Va(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Yx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $x(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Au(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Wf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class To{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zx extends To{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vs,endingEnd:Vs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hs:r=e,o=2*t-n;break;case no:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hs:a=e,l=2*n-t;break;case no:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+x*a[c+L]+v*a[l+L]+y*a[u+L];return r}}class Xf extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class Kx extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class oi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Va(t,this.TimeBufferType),this.values=Va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Va(e.times,Array),values:Va(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case cc:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return cc;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Yx(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Do,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=cc;class vr extends oi{constructor(e,t,n){super(e,t,n)}}vr.prototype.ValueTypeName="bool";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=to;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class qf extends oi{}qf.prototype.ValueTypeName="color";class Kr extends oi{}Kr.prototype.ValueTypeName="number";class jx extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)gt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class hr extends oi{InterpolantFactoryMethodLinear(e){return new jx(this.times,this.values,this.getValueSize(),e)}}hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends oi{constructor(e,t,n){super(e,t,n)}}xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=to;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends oi{}jr.prototype.ValueTypeName="vector";class gc{constructor(e="",t=-1,n=[],i=Uc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Qx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(oi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=$x(l);l=Au(l,1,h),c=Au(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Kr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];Wf(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let x=0;x!==f[g].morphTargets.length;++x){const v=f[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Kr(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(jr,d+".position",f,"pos",i),n(hr,d+".quaternion",f,"rot",i),n(jr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return qf;case"quaternion":return hr;case"bool":case"boolean":return vr;case"string":return xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Qx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jx(s.type);if(s.times===void 0){const t=[],n=[];Wf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ho={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Yf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const ey=new Yf;class ps{constructor(e){this.manager=e!==void 0?e:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class ty extends Error{constructor(e,t){super(e),this.response=t}}class ny extends ps{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ho.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:i});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=mi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,A=h.length;R<A;R++){const I=h[R];I.onProgress&&I.onProgress(L)}p.enqueue(y),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new ty(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ho.add(e,c);const h=mi[e];delete mi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iy extends ps{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ho.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=qr("img");function l(){h(),ho.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class $f extends ps{constructor(e){super(e)}load(e,t,n,i){const r=new Qt,a=new iy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class aa extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ao extends aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ml=new Pe,Ru=new E,Cu=new E;class $c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bc,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sy extends $c{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=lr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ry extends aa{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new sy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pu=new Pe,Ir=new E,gl=new E;class ay extends $c{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ir),gl.copy(n.position),gl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gl),n.updateMatrixWorld(),i.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu)}}class ms extends aa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ay}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oy extends $c{constructor(){super(new Tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oa extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new oy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ly extends aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cy{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Iu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Iu(){return performance.now()}class uy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){gt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;gt.multiplyQuaternionsFlat(e,a,e,t,e,n),gt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Zc="\\[\\]\\.:\\/",fy=new RegExp("["+Zc+"]","g"),Kc="[^"+Zc+"]",dy="[^"+Zc.replace("\\.","")+"]",py=/((?:WC+[\/:])*)/.source.replace("WC",Kc),my=/(WCOD+)?/.source.replace("WCOD",dy),gy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),_y=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),vy=new RegExp("^"+py+my+gy+_y+"$"),xy=["material","materials","bones","map"];class yy{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fy,"")}static parseTrackName(e){const t=vy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);xy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=yy;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class My{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Vs,endingEnd:Vs};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Mp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case bp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Uc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Sp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===yp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Hs,i.endingEnd=Hs):(e?i.endingStart=this.zeroSlopeAtStart?Hs:Vs:i.endingStart=no,t?i.endingEnd=this.zeroSlopeAtEnd?Hs:Vs:i.endingEnd=no)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Sy=new Float32Array(1);class by extends gs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let g=h[d];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new uy(ct.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Xf(new Float32Array(2),new Float32Array(2),1,Sy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?gc.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Uc),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new My(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?gc.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Lu=new Pe;class Zf{constructor(e,t,n=0,i=1/0){this.ray=new So(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return _c(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)_c(e[i],this,n,t);return n.sort(Du),n}}function Du(s,e){return s.distance-e.distance}function _c(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)_c(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);class wy extends Lf{constructor(){super();const e=new xn;e.deleteAttribute("uv");const t=new ot({side:pn}),n=new ot,i=new ms(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Ee(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Ee(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Ee(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Ee(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ee(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Ee(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ee(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Ee(e,Os(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Ee(e,Os(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Ee(e,Os(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Ee(e,Os(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Ee(e,Os(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Ee(e,Os(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Os(s){const e=new Ai;return e.color.setScalar(s),e}function Hr(s,e,t){const n=[];for(const i of e.split(`
`)){let r="";for(const a of i.split(/\s+/).filter(Boolean)){const o=r?`${r} ${a}`:a;s.measureText(o).width>t&&r?(n.push(r),r=a):r=o}n.push(r)}return n}function Ks(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+n,t,e+n,t+i,r),s.arcTo(e+n,t+i,e,t+i,r),s.arcTo(e,t+i,e,t,r),s.arcTo(e,t,e+n,t,r),s.closePath()}const Uu=1e3;class Kf{constructor(e,t){It(this,"canvas",document.createElement("canvas"));It(this,"ctx");It(this,"texture");It(this,"mesh");this.widthM=e,this.heightM=t,this.canvas.width=Math.round(e*Uu),this.canvas.height=Math.round(t*Uu),this.ctx=this.canvas.getContext("2d"),this.texture=new mr(this.canvas),this.texture.colorSpace=ut,this.texture.anisotropy=4,this.mesh=new Ee(new Ct(e,t),new Ai({map:this.texture,transparent:!0}))}}class Ey extends Kf{constructor(){super(1.25,.72)}draw(e){var l;const{ctx:t,canvas:n}=this,i=n.width,r=n.height,a=46;t.clearRect(0,0,i,r),t.fillStyle="rgba(14, 22, 28, 0.92)",Ks(t,0,0,i,r,40),t.fill(),t.strokeStyle="rgba(74, 163, 255, 0.55)",t.lineWidth=4,Ks(t,2,2,i-4,r-4,38),t.stroke();let o=a+10;t.textBaseline="top",e.eyebrow&&(t.fillStyle="#4aa3ff",t.font="600 30px -apple-system, system-ui, sans-serif",t.fillText(e.eyebrow.toUpperCase(),a,o),o+=48),t.fillStyle="#ffffff",t.font="700 50px -apple-system, system-ui, sans-serif";for(const c of Hr(t,e.title,i-a*2))t.fillText(c,a,o),o+=60;e.speaker&&(t.fillStyle="#9cd67a",t.font="600 36px -apple-system, system-ui, sans-serif",t.fillText(e.speaker,a,o+6),o+=56),o+=10,t.fillStyle="#dfe7ee",t.font="400 36px -apple-system, system-ui, sans-serif";for(const c of Hr(t,e.body,i-a*2)){if(o>r-150)break;t.fillText(c,a,o),o+=48}if((l=e.feedback)!=null&&l.text){t.font="500 30px -apple-system, system-ui, sans-serif";const c=Hr(t,e.feedback.text,i-a*2-40).slice(0,3),h=c.length*40+30,u=r-h-(e.footer?70:30);t.fillStyle=e.feedback.tone==="good"?"rgba(76,195,138,0.18)":e.feedback.tone==="bad"?"rgba(255,123,114,0.18)":"rgba(74,163,255,0.15)",Ks(t,a,u,i-a*2,h,18),t.fill(),t.fillStyle=e.feedback.tone==="good"?"#7ee2ad":e.feedback.tone==="bad"?"#ffaaa3":"#a9d1ff",c.forEach((f,d)=>t.fillText(f,a+20,u+15+d*40))}e.footer&&(t.fillStyle="#93a1ad",t.font="400 28px -apple-system, system-ui, sans-serif",t.fillText(e.footer,a,r-58)),this.texture.needsUpdate=!0}}class jf extends Kf{constructor(t,n,i="normal",r=1.25,a=.12){super(r,a);It(this,"hovered",!1);this.label=t,this.onSelect=n,this.tone=i,this.mesh.userData.button=this,this.draw()}setHover(t){t!==this.hovered&&(this.hovered=t,this.draw())}draw(){const{ctx:t,canvas:n}=this,i=n.width,r=n.height;t.clearRect(0,0,i,r),t.fillStyle=this.hovered?"#4aa3ff":this.tone==="primary"?"rgba(74,163,255,0.85)":"rgba(30, 44, 54, 0.94)",Ks(t,0,0,i,r,28),t.fill(),t.strokeStyle=this.hovered?"#ffffff":"rgba(255,255,255,0.18)",t.lineWidth=4,Ks(t,2,2,i-4,r-4,26),t.stroke(),t.fillStyle=this.hovered||this.tone==="primary"?"#0b1620":"#ffffff";let a=36;t.font=`600 ${a}px -apple-system, system-ui, sans-serif`;let o=Hr(t,this.label,i-60);for(;o.length>2&&a>24;)a-=2,t.font=`600 ${a}px -apple-system, system-ui, sans-serif`,o=Hr(t,this.label,i-60);o=o.slice(0,2),t.textBaseline="middle";const l=a*1.2,c=r/2-(o.length-1)*l/2;o.forEach((h,u)=>t.fillText(h,30,c+u*l)),this.texture.needsUpdate=!0}}function Jf(s,e){const t=document.createElement("canvas");t.width=640,t.height=160;const n=t.getContext("2d"),i=new mr(t);i.colorSpace=ut;const r=new hx(new Df({map:i,depthTest:!1}));r.scale.set(.64,.16,1);const a=o=>{n.clearRect(0,0,640,160),n.fillStyle=o?"rgba(156,214,122,0.95)":"rgba(14,22,28,0.85)",Ks(n,0,0,640,160,36),n.fill(),n.fillStyle=o?"#0b1620":"#ffffff",n.textBaseline="top",n.font="700 52px -apple-system, system-ui, sans-serif",n.fillText(s,30,22),n.font="400 32px -apple-system, system-ui, sans-serif",n.fillStyle=o?"#123":"#b7c3cc",n.fillText(e.length>34?e.slice(0,33)+"…":e,30,92),i.needsUpdate=!0};return a(!1),{sprite:r,setSpeaking:a}}const Lr=new E;function In(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Lr.copy(e),Lr[n]=0,Lr.normalize();const c=.5*a/(a+o),h=1-Lr.angleTo(s)/l;return Math.sign(Lr[t])===1?h*c:o/(a+o)+c+c*(1-h)}class nn extends xn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new E,l=new E,c=new E(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new E,_=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=In(g,l,"z","y",r,n),f[p+1]=1-In(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-In(g,l,"z","y",r,n),f[p+1]=1-In(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-In(g,l,"x","z",r,e),f[p+1]=In(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-In(g,l,"x","z",r,e),f[p+1]=1-In(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-In(g,l,"x","y",r,e),f[p+1]=1-In(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=In(g,l,"x","y",r,e),f[p+1]=1-In(g,l,"y","x",r,t);break}}}const Ty={matin:{hour:8,minute:15,sky:["#9fc3e6","#f3e6d6","#f6d7b4"],sun:{color:16770756,intensity:1.9,position:[-2.6,2.4,-3.6]},hemi:{sky:16448767,ground:10129280,intensity:1.15},ceiling:2.6,panelGlow:1.2,litWindows:.08,dimCity:0,stars:!1,environment:.3},"apres-midi":{hour:14,minute:30,sky:["#6fa2d8","#cfe0ef","#eef2f4"],sun:{color:16777215,intensity:2.1,position:[-1.2,4.2,-2.6]},hemi:{sky:16777215,ground:10130054,intensity:1.25},ceiling:2.2,panelGlow:1.1,litWindows:.04,dimCity:0,stars:!1,environment:.32},soir:{hour:19,minute:45,sky:["#2d3a6b","#c46a5a","#f2a65e"],sun:{color:16751186,intensity:.9,position:[-3.2,1.2,-3.8]},hemi:{sky:13154520,ground:5917248,intensity:.55},ceiling:2.6,panelGlow:1.5,litWindows:.55,dimCity:.35,stars:!1,environment:.22},nuit:{hour:2,minute:10,sky:["#050914","#0d1630","#1a2440"],sun:{color:9414880,intensity:.35,position:[-2.2,3.4,-3.2]},hemi:{sky:4872842,ground:1381660,intensity:.14},ceiling:.12,panelGlow:.05,nightLight:1.6,litWindows:.18,dimCity:.78,stars:!0,environment:.04}},Ro=s=>Ty[s??"matin"];let jc=[],Qf=performance.now(),Jc=8*3600+15*60;function Ay(s){jc=[],Qf=performance.now();const e=Ro(s);Jc=e.hour*3600+e.minute*60}const Ry=s=>jc.push({...s,start:Jc});function Cy(){const s=Jc+(performance.now()-Qf)/1e3;for(const e of jc)e.second.rotation.z=-(Math.floor(s)%60)/60*Math.PI*2,e.minute.rotation.z=-(s/60%60)/60*Math.PI*2,e.hour.rotation.z=-(s/3600%12)/12*Math.PI*2}const Jt=(s,e=.6,t=0)=>new ot({color:s,roughness:e,metalness:t}),vc=Jt(12896460,.3,.75);function Q(s,e,t,n,i,r,a=!0){const o=new Ee(e,t);return o.position.set(n,i,r),o.castShadow=a,o.receiveShadow=!0,s.add(o),o}const Xe=(s,e,t,n=.02)=>new nn(s,e,t,4,Math.min(n,s/2-.001,e/2-.001,t/2-.001)),xi=(s,e,t)=>new xn(s,e,t),uo=(s,e)=>new zn(s,s,e,20);function yr(s,e,t){const n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);const i=new mr(n);return i.colorSpace=ut,i.anisotropy=8,i}function ln(s,e,t,n,i,r,a,o=0,l=0){const c=new Ee(new Ct(e,t),new ot({map:n,roughness:.5,emissive:l?16777215:0,emissiveMap:l?n:null,emissiveIntensity:l}));return c.position.set(i,r,a),c.rotation.y=o,s.add(c),c}function Py(s,e,t,n,i,r){let a="";for(const o of e.split(" ")){const l=a?`${a} ${o}`:o;s.measureText(l).width>i&&a?(s.fillText(a,t,n),n+=r,a=o):a=l}return s.fillText(a,t,n),n+r}function Iy(s,e){return yr(1200,800,(t,n,i)=>{t.fillStyle="#fbfcfd",t.fillRect(0,0,n,i),t.fillStyle="#1f5aa6",t.fillRect(0,0,n,110),t.fillStyle="#fff",t.font="bold 60px sans-serif",t.fillText(`Chambre ${s}`,40,76),t.font="36px sans-serif",t.fillText("Tableau de communication",680,72);const r=[["Aujourd'hui","Lundi 17 novembre"],["Mon infirmière",e],["Mon préposé","Martin"],["Mon médecin","Dre Gagnon"],["Objectif du jour","Marcher dans le corridor 2 fois"],["Questions pour l'équipe",""]];let a=170;for(const[o,l]of r)t.fillStyle="#4a5a6a",t.font="bold 34px sans-serif",t.fillText(o,40,a),t.strokeStyle="#c9d3dd",t.lineWidth=2,t.beginPath(),t.moveTo(440,a+10),t.lineTo(n-40,a+10),t.stroke(),t.fillStyle="#1b3c8c",t.font="italic 40px 'Comic Sans MS', 'Marker Felt', sans-serif",t.fillText(l,450,a),a+=92;t.fillStyle="#6b7a88",t.font="26px sans-serif",t.fillText("Douleur (0 à 10) :",40,i-40);for(let o=0;o<=10;o++)t.strokeStyle="#9fb0c0",t.strokeRect(300+o*70,i-72,56,44),t.fillText(String(o),318+o*70-(o===10?8:0),i-40)})}const ed=()=>yr(400,560,(s,e,t)=>{s.fillStyle="#ffffff",s.fillRect(0,0,e,t),s.fillStyle="#1f8a5b",s.fillRect(0,0,e,120),s.fillStyle="#fff",s.font="bold 46px sans-serif",s.textAlign="center",s.fillText("Hygiène",e/2,58),s.fillText("des mains",e/2,106),s.fillStyle="#e8f5ee",s.beginPath(),s.arc(e/2,270,110,0,Math.PI*2),s.fill(),s.fillStyle="#e9b48a";for(const n of[-36,36])s.beginPath(),s.ellipse(e/2+n,280,42,70,n<0?.35:-.35,0,Math.PI*2),s.fill();s.fillStyle="#8fd3ff";for(const[n,i]of[[160,200],[240,190],[200,170]])s.beginPath(),s.arc(n,i,9,0,Math.PI*2),s.fill();s.fillStyle="#1b2b3a",s.font="bold 30px sans-serif",Py(s,"En entrant et en sortant de la chambre",e/2,440,e-50,38)}),Ly=(s,e)=>yr(300,300,(t,n,i)=>{t.fillStyle="#1f5aa6",t.fillRect(0,0,n,i),t.fillStyle="#fff",t.font="bold 150px sans-serif",t.textAlign="center",t.fillText(e,n/2,175),t.font="bold 40px sans-serif",t.fillText(s,n/2,260)});function Dy(s,e,t,n){const i=new Ue;i.position.set(e,0,t),i.rotation.y=n,s.add(i),Q(i,Xe(.55,.16,.42,.05),Jt(16251128,.25),0,.85,.21),Q(i,Xe(.42,.06,.3,.05),Jt(14672870,.2),0,.9,.23);const r=Q(i,uo(.014,.22),vc,0,1,.06);r.rotation.x=0;const a=Q(i,uo(.012,.14),vc,0,1.1,.12);return a.rotation.x=Math.PI/2,Q(i,Xe(.12,.2,.09,.02),Jt(16777215,.4),-.42,1.18,.05),Q(i,xi(.04,.03,.02),Jt(3120750,.4),-.42,1.12,.1,!1),Q(i,Xe(.3,.36,.12,.02),Jt(16053490,.4),.48,1.3,.06),Q(i,xi(.2,.01,.02),Jt(10133668,.5),.48,1.13,.12,!1),Q(i,Xe(.34,.5,.28,.03),Jt(6055536,.5),.5,.25,.16),Q(i,Xe(.5,.7,.01,.005),Jt(14278370,.15,.4),0,1.55,.006),i}function Uy(s,e,t,n,i){Q(s,xi(t-e,.06,.1),Jt(15264492,.4),(e+t)/2,i-.03,n);const r=e+(t-e)*.75;Q(s,Xe(.32,.22,.2,.04),Jt(15921904,.35),r,i-.17,n),Q(s,xi(.03,.25,.03),Jt(3820122,.6),r,i-.4,n,!1),Q(s,Xe(.12,.08,.05,.02),Jt(3104158,.5),r,i-.55,n)}function Ny(s,e,t,n,i,r,a=13621711){const o=Jt(14014683,.35,.6);Q(s,xi(e-t,.03,.03),o,(e+t)/2,r-.25,n,!1),Q(s,xi(.03,.03,Math.abs(n-i)),o,t,r-.25,(n+i)/2,!1);for(const c of[r-.03])Q(s,xi(.02,.22,.02),o,t,c-.11,n,!1);const l=new ot({color:a,roughness:.95,side:Dn});for(let c=0;c<9;c++){const h=Q(s,Xe(.12,1.85,.03,.012),l,e-.12-c*.075,r-.25-.95,n+(c%2?.035:-.035));h.rotation.y=c%2?.5:-.5}Q(s,xi(.7,.4,.01),new ot({color:16777215,roughness:.9,transparent:!0,opacity:.6}),e-.45,r-.45,n,!1)}function td(s,e,t,n,i){const r=yr(256,256,c=>{c.fillStyle="#fff",c.beginPath(),c.arc(128,128,124,0,Math.PI*2),c.fill(),c.strokeStyle="#222",c.lineWidth=8,c.stroke(),c.fillStyle="#222",c.font="bold 26px sans-serif",c.textAlign="center";for(let h=1;h<=12;h++){const u=h/12*Math.PI*2-Math.PI/2;c.fillText(String(h),128+Math.cos(u)*92,137+Math.sin(u)*92)}c.fillStyle="#222";for(let h=0;h<60;h++){const u=h/60*Math.PI*2,f=h%5?112:106;c.fillRect(128+Math.cos(u)*f-1.5,128+Math.sin(u)*f-1.5,3,3)}}),a=new Ue;a.position.set(e,t,n),a.rotation.y=i,s.add(a),Q(a,uo(.17,.04),Jt(3817285,.5),0,0,.02).rotation.x=Math.PI/2;const o=new Ee(new ra(.155,40),new ot({map:r,roughness:.4}));o.position.z=.041,a.add(o);const l=(c,h,u,f)=>{const d=new Ue;d.position.z=f,a.add(d);const g=new Ee(new xn(h,c,.003),new ot({color:u,roughness:.5}));return g.position.y=c/2-c*.12,d.add(g),d};Ry({hour:l(.075,.011,2236962,.044),minute:l(.11,.007,2236962,.047),second:l(.125,.0025,13378082,.05)}),Q(a,uo(.008,.01),Jt(13378082,.4),0,0,.052).rotation.x=Math.PI/2}function Gr(s,e,t,n,i,r,a=14205858,o=.95){const l=new Ue;return l.position.set(e,0,t),l.rotation.y=n,s.add(l),Q(l,Xe(o+.08,2.18,.04,.01),Jt(12107460,.4),0,1.09,.01),Q(l,Xe(o,2.1,.045,.01),Jt(a,.5),0,1.05,.02),Q(l,xi(.16,.025,.04),vc,o/2-.12,1,.06),ln(l,.18,.18,Ly(i,r),0,1.6,.046),l}const Lt=6.2,Ot=-3.5,on=2.4,Dr=2.75,rt=(s,e=.6,t=0,n)=>new ot({color:s,roughness:e,metalness:t,map:n}),gn=(s,e,t)=>new xn(s,e,t),Ka=(s,e)=>new zn(s,s,e,20),ja=rt(12896460,.3,.75),js=rt(2304045,.5);function _s(s,e,t,n){const i=yr(s,e,r=>t(r));return n&&(i.wrapS=i.wrapT=Ei,i.repeat.set(...n)),i}const Fy=()=>_s(512,512,s=>{s.fillStyle="#cfd2cc",s.fillRect(0,0,512,512);let e=4;const t=()=>(e=e*16807%2147483647)/2147483647;for(let n=0;n<24e3;n++)s.fillStyle=["#a7aba3","#e6e7e1","#b9bcb4","#8f9a9f"][Math.floor(t()*4)],s.globalAlpha=.3+t()*.5,s.fillRect(t()*512,t()*512,1+t()*2.5,1+t()*2.5)},[5,5]),Oy=()=>_s(512,512,s=>{s.fillStyle="#f2f2ee",s.fillRect(0,0,512,512),s.fillStyle="#d9d9d2",s.fillRect(0,0,512,6),s.fillRect(0,0,6,512)},[5,5]),By=s=>_s(640,400,e=>{e.fillStyle="#eef2f6",e.fillRect(0,0,640,400),e.fillStyle="#1f5aa6",e.fillRect(0,0,640,46),e.fillStyle="#fff",e.font="bold 22px sans-serif",e.fillText(s===1?"Feuille d'administration des médicaments":"Dossier clinique · Unité de médecine 3e",14,31);const t=[["301","L. B.","Nadia"],["302","M. C.","Nadia"],["305","R. D.","Martin"],["308","S. L.","Martin"],["312","G. F.","Nadia"],["314","A. P.","Sophie"]];e.font="18px sans-serif",t.forEach((n,i)=>{const r=80+i*48;e.fillStyle=i%2?"#ffffff":"#e3eaf2",e.fillRect(10,r-26,620,44),e.fillStyle="#1b2b3a",e.fillText(`Ch. ${n[0]}`,24,r),e.fillText(n[1],130,r),e.fillText(n[2],240,r),e.fillStyle=["#2e9e5b","#e0a21a","#2e9e5b","#c0392b","#2e9e5b","#2e9e5b"][(i+s)%6],e.fillRect(560,r-18,50,26)})}),zy=()=>_s(1600,700,s=>{s.fillStyle="#fbfcfd",s.fillRect(0,0,1600,700),s.fillStyle="#1f5aa6",s.fillRect(0,0,1600,90),s.fillStyle="#fff",s.font="bold 52px sans-serif",s.fillText("Unité de médecine · 3e étage · Quart de jour",30,62),s.font="bold 30px sans-serif",s.fillStyle="#4a5a6a",["Chambre","Personne","Infirmière","Préposé","Remarques"].forEach((t,n)=>s.fillText(t,30+[0,200,440,700,960][n],140));const e=[["301","L. B.","Nadia","Martin","Départ prévu demain"],["302","M. C.","Nadia","Martin",""],["305","R. D.","Sophie","Martin","Précautions contact"],["308","S. L.","Sophie","Julie","Jeûn dès minuit"],["312","G. F.","Nadia","Julie","Admission ce matin"],["314","A. P.","Sophie","Julie",""]];s.font="italic 34px 'Comic Sans MS', 'Marker Felt', sans-serif",e.forEach((t,n)=>{const i=210+n*78;s.strokeStyle="#d3dbe3",s.lineWidth=2,s.beginPath(),s.moveTo(20,i+22),s.lineTo(1580,i+22),s.stroke(),t.forEach((r,a)=>{s.fillStyle=a===4&&r?"#c0392b":"#1b3c8c",s.fillText(r,30+[0,200,440,700,960][a],i)})})}),ky=()=>_s(1200,240,s=>{s.fillStyle="#1f5aa6",s.fillRect(0,0,1200,240),s.fillStyle="#fff",s.textAlign="center",s.font="bold 92px sans-serif",s.fillText("Poste des infirmières",600,120),s.font="48px sans-serif",s.fillText("Unité de médecine · 3e étage",600,195)}),Nu=(s,e="#c0392b")=>_s(600,140,t=>{t.fillStyle=e,t.fillRect(0,0,600,140),t.fillStyle="#fff",t.textAlign="center",t.font="bold 58px sans-serif",t.fillText(s,300,92)});function _l(s,e,t,n,i){const r=new Ue;r.position.set(e,.76,t),r.rotation.y=n,s.add(r),Q(r,Xe(.56,.36,.03,.01),js,0,.32,0),ln(r,.52,.32,By(i),0,.32,.016,0,.7),Q(r,gn(.05,.14,.04),js,0,.09,-.03),Q(r,gn(.22,.015,.16),js,0,.008,-.03),Q(r,Xe(.44,.02,.14,.006),rt(3159354,.6),0,.01,.2),Q(r,Xe(.06,.02,.1,.01),rt(3159354,.6),.3,.01,.2)}function Vy(s,e,t,n){const i=new Ue;i.position.set(e,0,t),i.rotation.y=n,s.add(i);for(let r=0;r<5;r++){const a=Q(i,gn(.3,.03,.04),js,Math.cos(r*2*Math.PI/5)*.15,.05,Math.sin(r*2*Math.PI/5)*.15);a.rotation.y=-r*2*Math.PI/5}Q(i,Ka(.025,.4),ja,0,.27,0),Q(i,Xe(.48,.08,.46,.04),rt(2832975,.7),0,.5,0),Q(i,Xe(.46,.5,.07,.04),rt(2832975,.7),0,.82,-.22)}function Hy(s){const e=Ro(s),t=s==="nuit",n=new Ue,i=rt(15527658,.92),r=Q(n,new Ct(Lt,on-Ot),rt(16777215,.45,0,Fy()),0,0,(on+Ot)/2,!1);r.rotation.x=-Math.PI/2;const a=Q(n,new Ct(Lt,on-Ot),rt(16777215,.95,0,Oy()),0,Dr,(on+Ot)/2,!1);a.rotation.x=Math.PI/2;for(const[_,m,p,x]of[[Lt,.08,0,Ot-.04],[Lt,.08,0,on+.04],[.08,on-Ot,-Lt/2-.04,(on+Ot)/2],[.08,on-Ot,Lt/2+.04,(on+Ot)/2]])Q(n,gn(_,Dr,m),i,p,Dr/2,x,!1);const o=rt(6000592,.55);for(const _ of[-Lt/2+.006,Lt/2-.006])Q(n,gn(.012,.06,on-Ot),o,_,1.05,(on+Ot)/2,!1),Q(n,gn(.015,.09,on-Ot),rt(3881526,.6),_,.045,(on+Ot)/2,!1);for(const _ of[-Lt/2+.07,Lt/2-.07])Q(n,Xe(.06,.06,on-.2,.025),rt(11569758,.5),_,.9,(on+.2)/2-.1);for(const _ of[-2.3,-.4,1.4])Q(n,gn(1.2,.03,.6),new ot({color:16777215,emissive:16775404,emissiveIntensity:1.2}),0,Dr-.015,_,!1);const l=new Ue;l.position.set(0,0,-1.3),n.add(l),Q(l,Xe(3.4,1.05,.12,.02),rt(7309992,.6),0,.525,0),Q(l,Xe(3.5,.04,.34,.015),rt(15327956,.35),0,1.07,.06);for(const _ of[-1.7,1.7])Q(l,Xe(.12,1.05,.9,.02),rt(7309992,.6),_,.525,-.39);Q(l,Xe(3.4,.04,.75,.015),rt(14207926,.4),0,.75,-.45),_l(n,-1,-1.75,Math.PI,0),_l(n,0,-1.75,Math.PI,1),_l(n,1,-1.75,Math.PI,2),Q(n,Xe(.2,.06,.18,.02),rt(2830131,.5),-1.45,.8,-1.55),Q(n,Xe(.42,.24,.36,.02),rt(14672612,.45),1.42,.89,-1.62),[12597547,3049153,2600544,15844367,9323693,3049153,15105570,1482885].forEach((_,m)=>Q(n,Xe(.06,.3,.26,.008),rt(_,.6),-.55+m*.07,.92,-2));for(const _ of[-1,0,1])Vy(n,_,-2.35,0);ln(n,.22,.31,ed(),-1.85,1.45,-1.23),Q(n,Xe(.12,.22,.09,.02),rt(16053492,.4),-1.85,1.15,-1.2),ln(n,1.6,.32,ky(),0,2.32,-1.25),Q(n,gn(.02,.3,.02),ja,-.7,2.6,-1.25),Q(n,gn(.02,.3,.02),ja,.7,2.6,-1.25),Q(n,Xe(2.5,1.12,.03,.01),rt(12107460,.4),-.5,1.6,Ot+.02),ln(n,2.4,1.05,zy(),-.5,1.6,Ot+.04),td(n,1.25,2.25,Ot+.01,0);const h=new Ue;h.position.set(2.45,0,Ot+.35),n.add(h),Q(h,Xe(.9,1.9,.6,.03),rt(15659250,.4),0,.95,0);for(let _=0;_<6;_++)Q(h,gn(.8,.12,.01),rt(_%2?9415113:12044248,.5),0,.2+_*.15,.302,!1);ln(h,.36,.24,_s(360,240,_=>{_.fillStyle="#0e2a47",_.fillRect(0,0,360,240),_.fillStyle="#fff",_.font="bold 28px sans-serif",_.fillText("Distribution",20,60),_.fillText("des médicaments",20,96),_.fillStyle="#7fd0ff",_.font="22px sans-serif",_.fillText("Identifiez-vous",20,160),_.fillText("(empreinte)",20,192)}),0,1.4,.303,0,.8),Q(h,Xe(.08,.08,.03,.01),rt(2764596,.4),.3,1.25,.31),ln(h,.6,.14,Nu("Médicaments","#1f5aa6"),0,1.98,.303);const u=new Ue;u.position.set(1.5,0,Ot+.35),n.add(u),Q(u,Xe(.6,.9,.6,.02),rt(14278112,.3,.6),0,.45,0),Q(u,gn(.5,.7,.01),new Si({color:14676479,transparent:!0,opacity:.45,roughness:.1}),0,.47,.302,!1),Q(n,Xe(.6,.9,1.4,.02),rt(15327956,.4),Lt/2-.32,.45,-1.9),Q(n,Xe(.42,.05,.38,.03),rt(14015198,.2,.6),Lt/2-.34,.9,-1.6),Q(n,Ka(.012,.22),ja,Lt/2-.12,1.02,-1.6);const f=new Ue;f.position.set(-2.35,0,-.5),f.rotation.y=Math.PI/2,n.add(f),Q(f,Xe(.75,1,.55,.03),rt(12597547,.45),0,.55,0);for(let _=0;_<5;_++)Q(f,gn(.68,.015,.01),rt(8003351,.5),0,.25+_*.17,.277,!1);Q(f,Xe(.38,.22,.3,.03),rt(15909376,.45),-.1,1.17,0),Q(f,gn(.22,.12,.01),new ot({color:858900,emissive:4120698,emissiveIntensity:.25}),-.1,1.2,.151,!1),Q(f,Ka(.06,.6),rt(3050327,.4,.3),.3,.9,-.2),Q(f,gn(.5,.6,.02),rt(15262416,.5),0,.95,-.29);for(const _ of[-.3,.3])for(const m of[-.2,.2])Q(f,Ka(.04,.04),js,_,.03,m);ln(f,.5,.12,Nu("Chariot d'urgence"),0,.98,.279);const d=new Ue;d.position.set(2.1,0,-.35),d.rotation.y=-Math.PI/2,n.add(d),Q(d,Xe(.7,.95,.5,.03),rt(3108272,.45),0,.52,0);for(let _=0;_<4;_++)for(let m=0;m<3;m++)Q(d,Xe(.2,.17,.01,.005),rt(15265525,.5),-.22+m*.22,.25+_*.19,.253);Q(d,Xe(.72,.03,.52,.01),rt(15327956,.4),0,1,0),Q(d,Xe(.3,.2,.03,.01),js,.15,1.15,-.1),Gr(n,-Lt/2,.7,Math.PI/2,"311","311",14205858,1),Gr(n,-Lt/2,2,Math.PI/2,"313","313",14205858,1),Gr(n,Lt/2,1.4,-Math.PI/2,"Utilité propre","▤",15196888,.9),Q(n,Xe(.12,.22,.09,.02),rt(16053492,.4),-Lt/2+.06,1.3,1.35),n.add(new Ao(16448767,10130828,t?.5:1.35));const g=new oa(16774890,1.1);g.position.set(1.5,3.2,1.5),g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.5,far:10}),g.shadow.bias=-4e-4,n.add(g);for(const _ of[-2.3,-.4,1.4]){const m=new ms(16774888,t?1.4:e.ceiling*.95,6,1.5);m.position.set(0,Dr-.25,_),n.add(m)}return n}const Gy={minX:-Lt/2,maxX:Lt/2,minZ:Ot,maxZ:on},Wy=[{minX:-1.8,maxX:1.8,minZ:-2.2,maxZ:-1.2},{minX:-Lt/2,maxX:-2.05,minZ:-.9,maxZ:-.1},{minX:1.85,maxX:2.4,minZ:-.75,maxZ:.05},{minX:1.15,maxX:Lt/2,minZ:Ot,maxZ:Ot+.7},{minX:Lt/2-.65,maxX:Lt/2,minZ:-2.65,maxZ:-1.15}],Xy=[new E(-.5,0,-2.55),new E(.75,0,-2.6),new E(-1.6,0,.6)],jt=(s,e=.7)=>new ot({color:s,roughness:e}),Qn=(s,e)=>new Xc(s,e,6,14);function tt(s,e,t,n,i,r,a=0,o=0,l=0){const c=new Ee(e,t);return c.position.set(n,i,r),c.rotation.set(a,o,l),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c}function qy(){const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d");e.fillStyle="#eef2f6",e.fillRect(0,0,128,128),e.fillStyle="#6f8fbf";for(let n=8;n<128;n+=16)for(let i=n/16%2?16:8;i<128;i+=16)e.beginPath(),e.moveTo(i,n-3),e.lineTo(i+3,n),e.lineTo(i,n+3),e.lineTo(i-3,n),e.fill();const t=new mr(s);return t.wrapS=t.wrapT=Ei,t.repeat.set(3,3),t.colorSpace=ut,t}function Fu(s){const e=new Ue,t=jt(s.skin,.6);tt(e,new Tn(.105,32,24),t,0,0,0).scale.set(.9,1.08,.98),tt(e,new Tn(.05,20,14),t,0,-.065,.035).scale.set(1.3,.8,1.1);for(const r of[-.035,.035])tt(e,new Tn(.014,12,10),jt(16777215,.3),r,.012,.088),tt(e,new Tn(.008,10,8),jt(2760728,.3),r,.012,.099),tt(e,new nn(.03,.006,.01,2,.003),jt(s.hair,.8),r,.038,.093),tt(e,new Tn(.02,12,10),t,r*2.75,-.005,0).scale.set(.5,1,.8);tt(e,new wo(.014,.04,10),t,0,-.01,.1,Math.PI/2+.3,0,0),tt(e,new nn(.035,.008,.01,2,.003),jt(10838618,.5),0,-.05,.088);const i=jt(s.hair,.85);if(s.hairStyle==="degarni")tt(e,new gr(.085,.022,8,24,Math.PI*1.2),i,0,.015,-.015,Math.PI/2,0,-Math.PI*.1+Math.PI);else{const r=tt(e,new Tn(.11,28,18,0,Math.PI*2,0,Math.PI*.55),i,0,.012,-.01);r.scale.set(.95,1.05,1.05),r.rotation.x=-.25,s.hairStyle==="chignon"&&tt(e,new Tn(.045,16,12),i,0,.06,-.1)}return e}function Yy(s,e){const t=new Ue,n=e.gown?new ot({map:qy(),roughness:.9}):jt(e.outfit,.8),i=e.gown?jt(e.skin,.6):jt(e.outfitDark,.8),r=jt(e.skin,.6),a=jt(2369580,.5);if(s==="couche"){const h=35*Math.PI/180,u=new E(Math.cos(h),Math.sin(h),0),f=u.clone().multiplyScalar(.27);tt(t,new nn(.42,.22,.34,4,.08),n,f.x,f.y+.08,0,0,0,h),tt(t,new nn(.26,.2,.36,4,.08),n,.02,.07,0);const d=u.clone().multiplyScalar(.52);tt(t,Qn(.045,.05),r,d.x,d.y+.1,0,0,0,h-Math.PI/2);const g=Fu(e);g.position.set(d.x+.1,d.y+.2,0),g.rotation.set(0,Math.PI/2,0),g.rotateX(-(Math.PI/2-h)+.35),t.add(g);for(const p of[-.21,.21]){const x=u.clone().multiplyScalar(.46);tt(t,Qn(.045,.22),n,x.x-.08,x.y-.04+.08,p,0,0,h+Math.PI/2-.25),tt(t,Qn(.038,.22),r,.02,.2,p*.85,0,p>0?-.35:.35,Math.PI/2-.15),tt(t,new Tn(.04,12,10),r,-.12,.19,p*.6).scale.set(1.2,.6,.9)}tt(t,new gr(.043,.009,8,24),jt(16316664,.5),-.07,.195,.15,0,Math.PI/2,0).scale.set(1,.8,1),tt(t,new nn(.03,.012,.025,2,.004),jt(16777215,.4),-.07,.24,.15);const m=jt(e.blanket??15331059,.95);tt(t,new nn(1,.14,.52,4,.06),m,-.5,.06,0);for(const p of[-.1,.1])tt(t,new nn(.1,.16,.1,3,.04),m,-.98,.12,p,0,0,-.2);return t}const o=s==="assis",l=o?.45:.92;for(const h of[-.09,.09])o?(tt(t,Qn(.065,.32),i,h,l,.2,Math.PI/2,0,0),tt(t,Qn(.055,.33),i,h,l-.22,.4),tt(t,new nn(.1,.07,.24,3,.03),a,h,.035,.46)):(tt(t,Qn(.07,.36),i,h,l-.22,0),tt(t,Qn(.058,.36),i,h,l-.66,0),tt(t,new nn(.1,.07,.25,3,.03),a,h,.035,.05));tt(t,new nn(.36,.18,.22,4,.07),i,0,l+.02,0),tt(t,new nn(.4,.5,.24,4,.1),n,0,l+.33,0),e.gown||tt(t,new wo(.06,.1,3),jt(e.outfitDark,.8),0,l+.53,.115,Math.PI,0,0),tt(t,Qn(.048,.03),r,0,l+.62,0);const c=Fu(e);c.position.set(0,l+.75,.01),t.add(c);for(const h of[-1,1])tt(t,new Tn(.065,14,10),n,h*.22,l+.53,0),tt(t,Qn(.05,.24),n,h*.25,l+.36,0,0,0,h*.08),tt(t,Qn(.042,.24),r,h*.27,l+.08,o?.12:.04,o?-.6:-.12,0,h*.05),tt(t,new Tn(.045,12,10),r,h*.275,l-.08,o?.24:.07).scale.set(.8,1.1,.7);if(e.stethoscope){const h=new sa([new E(-.06,l+.33,.13),new E(-.09,l+.5,.11),new E(-.07,l+.6,0),new E(0,l+.62,-.06),new E(.07,l+.6,0),new E(.09,l+.5,.11),new E(.05,l+.3,.13)]),u=new Ee(new _r(h,60,.008,8),jt(1842204,.4));u.castShadow=!0,t.add(u),tt(t,new zn(.022,.022,.012,16),jt(12896460,.3),.05,l+.28,.135,Math.PI/2,0,0),tt(t,new nn(.07,.09,.01,2,.01),jt(16777215,.4),-.11,l+.42,.125)}return t}const En=9,en=-5,wn=3.5,bn=4.2,nd=1018765,$y=15895592,Ft=(s,e=.6,t=0,n)=>new ot({color:s,roughness:e,metalness:t,map:n}),Ht=(s,e,t)=>new xn(s,e,t);let xc=11;const Js=()=>(xc=xc*16807%2147483647)/2147483647,$i=(s,e,t,n)=>{const i=yr(s,e,r=>t(r));return n&&(i.wrapS=i.wrapT=Ei,i.repeat.set(...n)),i},Zy=()=>$i(512,512,s=>{s.fillStyle="#c9cbcc",s.fillRect(0,0,512,512);for(let e=0;e<9e3;e++){const t=170+Js()*60;s.fillStyle=`rgba(${t},${t},${t+3},0.35)`,s.fillRect(Js()*512,Js()*512,2,2)}s.strokeStyle="rgba(90,90,90,0.25)",s.lineWidth=2,s.strokeRect(0,0,512,512)},[En/3,(wn-en)/3]),Ou=s=>$i(180,380,e=>{const t=e.createLinearGradient(0,0,180,380);t.addColorStop(0,`hsl(${s},70%,55%)`),t.addColorStop(1,`hsl(${(s+60)%360},70%,30%)`),e.fillStyle=t,e.fillRect(0,0,180,380),e.fillStyle="#fff",e.font="bold 44px sans-serif",e.textAlign="center",e.fillText("10:24",90,80);for(let n=0;n<4;n++)for(let i=0;i<4;i++)e.fillStyle=`hsla(${(s+n*40+i*25)%360},60%,85%,0.9)`,e.beginPath(),e.roundRect(18+i*40,140+n*50,30,30,8),e.fill()}),Bu=s=>$i(640,360,e=>{const t=e.createLinearGradient(0,0,0,360);t.addColorStop(0,`hsl(${s},60%,65%)`),t.addColorStop(1,`hsl(${s+30},50%,85%)`),e.fillStyle=t,e.fillRect(0,0,640,360),e.fillStyle=`hsl(${s+90},35%,35%)`,e.beginPath(),e.moveTo(0,260);for(let n=0;n<=640;n+=40)e.lineTo(n,200+Math.sin(n/70+s)*40);e.lineTo(640,360),e.lineTo(0,360),e.fill(),e.fillStyle="rgba(255,255,255,0.85)",e.font="bold 30px sans-serif",e.fillText("4K · 65 po",24,44)}),Ky=(s,e,t=!1)=>$i(360,200,n=>{n.fillStyle="#fff",n.fillRect(0,0,360,200),n.fillStyle=t?"#e4572e":"#0f8b8d",n.fillRect(0,0,360,46),n.fillStyle="#fff",n.font="bold 26px sans-serif",n.fillText(t?"PROMO":"PRIX",14,32),n.fillStyle="#14202b",n.font="bold 26px sans-serif",n.fillText(s,14,88),n.font="bold 56px sans-serif",n.fillText(e,14,160),n.font="18px sans-serif",n.fillStyle="#5b6b78",n.fillText("Prix fictif · avant taxes",14,190)}),yc=(s,e,t="#0f8b8d")=>$i(1024,256,n=>{n.fillStyle=t,n.fillRect(0,0,1024,256),n.fillStyle="#fff",n.font="bold 110px sans-serif",n.textBaseline="middle",n.fillText(s,40,110),n.font="40px sans-serif",n.fillText(e,44,205)}),jy=()=>$i(1024,256,s=>{s.fillStyle="#14202b",s.fillRect(0,0,1024,256),s.fillStyle="#f28c28",s.beginPath(),s.moveTo(60,200),s.lineTo(150,40),s.lineTo(180,120),s.lineTo(240,60),s.lineTo(200,220),s.lineTo(170,140),s.closePath(),s.fill(),s.fillStyle="#fff",s.font="bold 120px sans-serif",s.textBaseline="middle",s.fillText("Zénith",280,115),s.fillStyle="#3fd0d2",s.font="bold 64px sans-serif",s.fillText("ÉLECTRO",290,205)}),id=(s,e)=>$i(256,320,t=>{t.fillStyle=`hsl(${s},45%,${Js()>.5?22:92}%)`,t.fillRect(0,0,256,320),t.fillStyle=`hsl(${s},70%,55%)`,t.fillRect(0,230,256,90),t.fillStyle=t.fillStyle,t.font="bold 34px sans-serif",t.fillStyle="#fff",t.fillText(e,16,285)});function zu(s,e,t,n){const i=new Ue;i.position.set(e,0,t),s.add(i),Q(i,Xe(2.2,.06,.9,.02),Ft(16053490,.35),0,.9,0),Q(i,Ht(2,.84,.7),Ft(2764597,.5),0,.45,0),Q(i,Ht(2.02,.12,.72),Ft(nd,.5),0,.8,0);for(let r=0;r<5;r++){const a=-.8+r*.4;Q(i,Ht(.04,.08,.04),Ft(12107460,.3,.6),a,.97,-.05);const o=new Ue;o.position.set(a,1.08,-.06),o.rotation.x=-.35,i.add(o),Q(o,Xe(.085,.175,.009,.012),Ft(r%2?1776928:14277340,.25,.4),0,0,0);const l=new Ee(new Ct(.077,.165),new ot({map:Ou(n+r*47),emissive:16777215,emissiveMap:Ou(n+r*47),emissiveIntensity:.8}));l.position.z=.0052,o.add(l),Q(i,new zn(.004,.004,.15,6),Ft(1118481),a,.97,.03,!1),ln(i,.18,.1,Ky(["Nova 8","Orion S","Pixa 5","Nova 8 Pro","Aero Lite"][r],["699 $","1 049 $","549 $","999 $","329 $"][r],r===2),a,.935,.3,0),i.children[i.children.length-1].rotation.x=-Math.PI/2+.3}}function ku(s,e,t,n,i,r){const a=new Ue;a.position.set(e,0,t),a.rotation.y=n,s.add(a),Q(a,Ht(2.4,2.1,.08),Ft(15330028,.6),0,1.05,-.3);for(const o of[.15,.6,1.05,1.5,1.95])Q(a,Ht(2.4,.03,.6),Ft(14146012,.5),0,o,0);for(const o of[.17,.62,1.07,1.52])for(let l=0;l<7;l++){const c=.22+Js()*.08,h=.22+Js()*.18,u=new ot({map:id(i+l*18+o*40,r),roughness:.6});Q(a,Ht(c,h,.25),u,-1.05+l*.33,o+h/2+.015,.05)}ln(a,.9,.22,yc(r,"","#14202b"),0,2.32,-.25,0,.6)}function Jy(){xc=11;const s=new Ue,e=Q(s,new Ct(En,wn-en),Ft(16777215,.35,0,Zy()),0,0,(wn+en)/2,!1);e.rotation.x=-Math.PI/2,e.receiveShadow=!0;const t=Q(s,new Ct(En,wn-en),Ft(1842979,.9),0,bn,(wn+en)/2,!1);t.rotation.x=Math.PI/2;for(let o=en+1;o<wn;o+=2)Q(s,Ht(En,.25,.12),Ft(2830132,.7),0,bn-.2,o,!1);for(let o=en+1.5;o<wn;o+=2.2)for(const l of[-2.5,0,2.5])Q(s,Ht(1.8,.05,.12),new ot({color:16777215,emissive:16777215,emissiveIntensity:1.6}),l,bn-.55,o,!1),Q(s,new zn(.004,.004,.5,4),Ft(1118481),l,bn-.3,o,!1);const n=Ft(15659250,.85);Q(s,Ht(En,bn,.1),n,0,bn/2,en),Q(s,Ht(.1,bn,wn-en),n,-En/2,bn/2,(wn+en)/2),Q(s,Ht(.1,bn,wn-en),n,En/2,bn/2,(wn+en)/2),Q(s,Ht(En,bn,.1),n,0,bn/2,wn),Q(s,Ht(En-.2,.9,.04),Ft(nd,.5),0,3.1,en+.07),ln(s,3.6,.9,yc("Téléphonie","Cellulaires · forfaits · accessoires"),-2,3.1,en+.1,0,.5),ln(s,3.2,.8,jy(),2.3,3.1,en+.1,0,.6);const i=new Ue;i.position.set(0,0,en+.12),s.add(i),Q(i,Ht(En-1,2,.04),Ft(14606305,.7),0,1.45,0);for(let o=0;o<4;o++)for(let l=0;l<18;l++){const c=-3.8+l*.45,h=.75+o*.45;Q(i,Ht(.13,.2,.03),new ot({map:id(160+l*13+o*30,""),roughness:.5}),c,h,.08,!1)}zu(s,-1.6,-2.2,190),zu(s,1.6,-2.2,20);for(let o=0;o<4;o++){const l=new Ue;l.position.set(-En/2+.08,2,-3.2+o*1.55),l.rotation.y=Math.PI/2,s.add(l),Q(l,Ht(1.4,.82,.05),Ft(789775,.3),0,0,0);const c=new Ee(new Ct(1.34,.76),new ot({map:Bu(30+o*70),emissive:16777215,emissiveMap:Bu(30+o*70),emissiveIntensity:.9}));c.position.z=.027,l.add(c)}ku(s,3.2,.6,-Math.PI/2,200,"Audio"),ku(s,-2.6,1.6,Math.PI/2,20,"Jeux vidéo");const r=new Ue;r.position.set(2.9,0,-3.6),s.add(r),Q(r,Xe(2.2,1,.7,.03),Ft(16053490,.4),0,.5,0),Q(r,Ht(2.22,.18,.72),Ft($y,.5),0,.82,0),Q(r,Xe(.32,.22,.04,.01),Ft(1448220,.3),-.5,1.14,0),Q(r,Ht(.3,.2,.01),new ot({color:801613,emissive:2795716,emissiveIntensity:.5}),-.5,1.14,.025,!1),Q(r,Xe(.1,.16,.06,.01),Ft(2764597,.4),.2,1.08,.15),ln(r,1.6,.4,yc("Service · Caisse","Ouverture de compte · forfaits","#14202b"),0,2.3,0,0,.6),ln(s,1,1.4,$i(400,560,o=>{o.fillStyle="#fff",o.fillRect(0,0,400,560),o.fillStyle="#0f8b8d",o.fillRect(0,0,400,90),o.fillStyle="#fff",o.font="bold 40px sans-serif",o.fillText("Forfaits",20,60),[["Essentiel","10 Go","45 $/mois"],["Plus","50 Go","60 $/mois"],["Illimité","100 Go","75 $/mois"]].forEach(([c,h,u],f)=>{o.fillStyle="#14202b",o.font="bold 34px sans-serif",o.fillText(c,20,160+f*130),o.font="28px sans-serif",o.fillText(`${h} · ${u}`,20,200+f*130)}),o.fillStyle="#5b6b78",o.font="18px sans-serif",o.fillText("Exemples fictifs pour la formation",20,540)}),0,1.2,-3,0,.3),Q(s,Ht(1.06,1.46,.04),Ft(2764597),0,1.2,-3.03),Q(s,Ht(.06,.5,.06),Ft(2764597),0,.25,-3.03),s.add(new Ao(16777215,9080466,1.3));const a=new oa(16777215,1);a.position.set(2,4,2),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:12}),s.add(a);for(const[o,l]of[[-2.5,-2.5],[2.5,-2.5],[0,.5],[-2.5,2],[2.5,2]]){const c=new ms(16777215,3.5,8,1.5);c.position.set(o,bn-.7,l),s.add(c)}return s}const Qy={minX:-En/2+.4,maxX:En/2-.4,minZ:en+.5,maxZ:wn-.4},e1=[{minX:-2.75,maxX:-.45,minZ:-2.7,maxZ:-1.7},{minX:.45,maxX:2.75,minZ:-2.7,maxZ:-1.7},{minX:1.75,maxX:4.1,minZ:-4,maxZ:-3.2},{minX:2.8,maxX:3.6,minZ:-.7,maxZ:1.9},{minX:-2.9,maxX:-2.1,minZ:.3,maxZ:2.9}],t1=[new E(-.35,0,-1.25),new E(.75,0,-1.35),new E(-1.4,0,-.9)],n1="modulepreload",i1=function(s,e){return new URL(s,e).href},Vu={},s1=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=i1(c,n),c in Vu)return;Vu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":n1,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Nn=Uint8Array,Xs=Uint16Array,r1=Int32Array,sd=new Nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rd=new Nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a1=new Nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ad=function(s,e){for(var t=new Xs(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new r1(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},od=ad(sd,2),ld=od.b,o1=od.r;ld[28]=258,o1[258]=28;var l1=ad(rd,0),c1=l1.b,Mc=new Xs(32768);for(var Et=0;Et<32768;++Et){var Oi=(Et&43690)>>1|(Et&21845)<<1;Oi=(Oi&52428)>>2|(Oi&13107)<<2,Oi=(Oi&61680)>>4|(Oi&3855)<<4,Mc[Et]=((Oi&65280)>>8|(Oi&255)<<8)>>1}var Wr=function(s,e,t){for(var n=s.length,i=0,r=new Xs(e);i<n;++i)s[i]&&++r[s[i]-1];var a=new Xs(e);for(i=1;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new Xs(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=a[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[Mc[u]>>l]=c}else for(o=new Xs(n),i=0;i<n;++i)s[i]&&(o[i]=Mc[a[s[i]-1]++]>>15-s[i]);return o},la=new Nn(288);for(var Et=0;Et<144;++Et)la[Et]=8;for(var Et=144;Et<256;++Et)la[Et]=9;for(var Et=256;Et<280;++Et)la[Et]=7;for(var Et=280;Et<288;++Et)la[Et]=8;var cd=new Nn(32);for(var Et=0;Et<32;++Et)cd[Et]=5;var h1=Wr(la,9,1),u1=Wr(cd,5,1),vl=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Xn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},xl=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},f1=function(s){return(s+7)/8|0},d1=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new Nn(s.subarray(e,t))},p1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qn=function(s,e,t){var n=new Error(e||p1[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,qn),!t)throw n;return n},m1=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new Nn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Nn(i*3));var c=function(it){var K=t.length;if(it>K){var se=new Nn(Math.max(K*2,it));se.set(t),t=se}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,g=e.d,_=e.m,m=e.n,p=i*8;do{if(!d){h=Xn(s,u,1);var x=Xn(s,u+1,3);if(u+=3,x)if(x==1)d=h1,g=u1,_=9,m=5;else if(x==2){var R=Xn(s,u,31)+257,A=Xn(s,u+10,15)+4,I=R+Xn(s,u+5,31)+1;u+=14;for(var w=new Nn(I),S=new Nn(19),C=0;C<A;++C)S[a1[C]]=Xn(s,u+C*3,7);u+=A*3;for(var B=vl(S),F=(1<<B)-1,k=Wr(S,B,1),C=0;C<I;){var Z=k[Xn(s,u,F)];u+=Z&15;var v=Z>>4;if(v<16)w[C++]=v;else{var H=0,te=0;for(v==16?(te=3+Xn(s,u,3),u+=2,H=w[C-1]):v==17?(te=3+Xn(s,u,7),u+=3):v==18&&(te=11+Xn(s,u,127),u+=7);te--;)w[C++]=H}}var G=w.subarray(0,R),ae=w.subarray(R);_=vl(G),m=vl(ae),d=Wr(G,_,1),g=Wr(ae,m,1)}else qn(1);else{var v=f1(u)+4,y=s[v-4]|s[v-3]<<8,L=v+y;if(L>i){l&&qn(0);break}o&&c(f+y),t.set(s.subarray(v,L),f),e.b=f+=y,e.p=u=L*8,e.f=h;continue}if(u>p){l&&qn(0);break}}o&&c(f+131072);for(var pe=(1<<_)-1,Me=(1<<m)-1,He=u;;He=u){var H=d[xl(s,u)&pe],et=H>>4;if(u+=H&15,u>p){l&&qn(0);break}if(H||qn(2),et<256)t[f++]=et;else if(et==256){He=u,d=null;break}else{var q=et-254;if(et>264){var C=et-257,ie=sd[C];q=Xn(s,u,(1<<ie)-1)+ld[C],u+=ie}var Se=g[xl(s,u)&Me],oe=Se>>4;Se||qn(3),u+=Se&15;var ae=c1[oe];if(oe>3){var ie=rd[oe];ae+=xl(s,u)&(1<<ie)-1,u+=ie}if(u>p){l&&qn(0);break}o&&c(f+131072);var De=f+q;if(f<ae){var Ve=r-ae,Oe=Math.min(ae,De);for(Ve+f<0&&qn(3);f<Oe;++f)t[f]=n[Ve+f]}for(;f<De;++f)t[f]=t[f-ae]}}e.l=d,e.p=He,e.b=f,e.f=h,d&&(h=1,e.m=_,e.d=g,e.n=m)}while(!h);return f!=t.length&&a?d1(t,0,f):t.subarray(0,f)},g1=new Nn(0),_1=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&qn(6,"invalid zlib data"),(s[1]>>5&1)==1&&qn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function v1(s,e){return m1(s.subarray(_1(s),-4),{i:2},e,e)}var x1=typeof TextDecoder<"u"&&new TextDecoder,y1=0;try{x1.decode(g1,{stream:!0}),y1=1}catch{}function hd(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,a=Math.floor((i+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:i=a,a=Math.floor((i+r)/2);return a}function M1(s,e,t,n){const i=[],r=[],a=[];i[0]=1;for(let o=1;o<=t;++o){r[o]=e-n[s+1-o],a[o]=n[s+o]-e;let l=0;for(let c=0;c<o;++c){const h=a[c+1],u=r[o-c],f=i[c]/(h+u);i[c]=l+h*f,l=u*f}i[o]=l}return i}function S1(s,e,t,n){const i=hd(s,n,e),r=M1(i,n,s,e),a=new at(0,0,0,0);for(let o=0;o<=s;++o){const l=t[i-s+o],c=r[o],h=l.w*c;a.x+=l.x*h,a.y+=l.y*h,a.z+=l.z*h,a.w+=l.w*c}return a}function b1(s,e,t,n,i){const r=[];for(let u=0;u<=t;++u)r[u]=0;const a=[];for(let u=0;u<=n;++u)a[u]=r.slice(0);const o=[];for(let u=0;u<=t;++u)o[u]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[s+1-u],c[u]=i[s+u]-e;let f=0;for(let d=0;d<u;++d){const g=c[d+1],_=l[u-d];o[u][d]=g+_;const m=o[d][u-1]/o[u][d];o[d][u]=f+g*m,f=_*m}o[u][u]=f}for(let u=0;u<=t;++u)a[0][u]=o[u][t];for(let u=0;u<=t;++u){let f=0,d=1;const g=[];for(let _=0;_<=t;++_)g[_]=r.slice(0);g[0][0]=1;for(let _=1;_<=n;++_){let m=0;const p=u-_,x=t-_;u>=_&&(g[d][0]=g[f][0]/o[x+1][p],m=g[d][0]*o[p][x]);const v=p>=-1?1:-p,y=u-1<=x?_-1:t-u;for(let R=v;R<=y;++R)g[d][R]=(g[f][R]-g[f][R-1])/o[x+1][p+R],m+=g[d][R]*o[p+R][x];u<=x&&(g[d][_]=-g[f][_-1]/o[x+1][u],m+=g[d][_]*o[u][x]),a[_][u]=m;const L=f;f=d,d=L}}let h=t;for(let u=1;u<=n;++u){for(let f=0;f<=t;++f)a[u][f]*=h;h*=t-u}return a}function w1(s,e,t,n,i){const r=i<s?i:s,a=[],o=hd(s,n,e),l=b1(o,n,s,r,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[h]=u}for(let h=0;h<=r;++h){const u=c[o-s].clone().multiplyScalar(l[h][0]);for(let f=1;f<=s;++f)u.add(c[o-s+f].clone().multiplyScalar(l[h][f]));a[h]=u}for(let h=r+1;h<=i+1;++h)a[h]=new at(0,0,0);return a}function E1(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function T1(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const a=s[r];t[r]=new E(a.x,a.y,a.z),n[r]=a.w}const i=[];for(let r=0;r<e;++r){const a=t[r].clone();for(let o=1;o<=r;++o)a.sub(i[r-o].clone().multiplyScalar(E1(r,o)*n[o]));i[r]=a.divideScalar(n[0])}return i}function A1(s,e,t,n,i){const r=w1(s,e,t,n,i);return T1(r)}class R1 extends jn{constructor(e,t,n,i,r){super();const a=t?t.length-1:0,o=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||a;for(let l=0;l<o;++l){const c=n[l];this.controlPoints[l]=new at(c.x,c.y,c.z,c.w)}}getPoint(e,t=new E){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=S1(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new E){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=A1(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new at(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let Qe,Bt,un;class ud extends ps{constructor(e){super(e)}load(e,t,n,i){const r=this,a=r.path===""?cy.extractUrlBase(e):r.path,o=new ny(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(U1(e))Qe=new D1().parse(e);else{const i=pd(e);if(!N1(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Gu(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Gu(i));Qe=new L1().parse(i)}const n=new $f(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new C1(n,this.manager).parse(Qe)}}class C1{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Bt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new P1().parse(i);return this.parseScene(i,r,n),un}parseConnections(){const e=new Map;return"Connections"in Qe&&Qe.Connections.connections.forEach(function(n){const i=n[0],r=n[1],a=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:r,relationship:a};e.get(i).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:a};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Qe.Objects){const n=Qe.Objects.Video;for(const i in n){const r=n[i],a=parseInt(i);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Qe.Objects){const n=Qe.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,a=i!==void 0?i.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?Ei:_i,n.wrapT=o===0?Ei:_i,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new Qt;const a=r.path;a||r.setPath(this.textureLoader.path);const o=Bt.get(e.id).children;let l;o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(l=t[o[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&r.setPath(void 0));const c=r.load(l);return r.setPath(a),c}parseMaterials(e){const t=new Map;if("Material"in Qe.Objects){const n=Qe.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Bt.has(n))return null;const a=this.parseParameters(e,t,n);let o;switch(r.toLowerCase()){case"phong":o=new pl;break;case"lambert":o=new qx;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new pl;break}return o.setValues(a),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Ke.toWorkingColorSpace(new Fe().fromArray(e.Diffuse.value),ut):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Ke.toWorkingColorSpace(new Fe().fromArray(e.DiffuseColor.value),ut)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Ke.toWorkingColorSpace(new Fe().fromArray(e.Emissive.value),ut):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Ke.toWorkingColorSpace(new Fe().fromArray(e.EmissiveColor.value),ut)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Ke.toWorkingColorSpace(new Fe().fromArray(e.Specular.value),ut):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Ke.toWorkingColorSpace(new Fe().fromArray(e.SpecularColor.value),ut));const r=this;return Bt.get(n).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":i.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,a.ID),i.map!==void 0&&(i.map.colorSpace=ut);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,a.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ut);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,a.ID),i.envMap!==void 0&&(i.envMap.mapping=eo,i.envMap.colorSpace=ut);break;case"SpecularColor":i.specularMap=r.getTexture(t,a.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ut);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,a.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in Qe.Objects&&t in Qe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Bt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Qe.Objects){const n=Qe.Objects.Deformer;for(const i in n){const r=n[i],a=Bt.get(parseInt(i));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,n);o.ID=i,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[i]=o}else if(r.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(a,n),o.id=i,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const a={ID:i.ID,indices:[],weights:[],transformLink:new Pe().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=Bt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){un=new Ue;const i=this.parseModels(e.skeletons,t,n),r=Qe.Objects.Model,a=this;i.forEach(function(l){const c=r[l.ID];a.setLookAtProperties(l,c),Bt.get(l.ID).parents.forEach(function(u){const f=i.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&un.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),un.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=dd(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new I1().parse();un.children.length===1&&un.children[0].isGroup&&(un.children[0].animations=o,un=un.children[0]),un.animations=o}parseModels(e,t,n){const i=new Map,r=Qe.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=Bt.get(o);let h=this.buildSkeleton(c,e,o,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new dc;break;case"Null":default:h=new Ue;break}h.name=l.attrName?ct.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=o}this.getTransformData(h,l),i.set(o,h)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,h){if(c.ID===a.ID){const u=r;r=new dc,r.matrixWorld.copy(c.transformLink),r.name=i?ct.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Qe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new St;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const c=o/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new dn(h,c,r,a),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new St;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new St;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Qe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new St;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Ke.toWorkingColorSpace(new Fe().fromArray(n.Color.value),ut));let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new ms(r,a,o,l);break;case 1:t=new oa(r,a);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=tn.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=tn.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new ry(r,a,o,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new ms(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,a=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new pl({name:ps.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new fx(r,a),i.normalizeSkinWeights()):i=new Ee(r,a),i}createCurve(e,t){const n=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),i=new Vc({name:ps.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Nf(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Jr(t.RotationOrder.value):n.eulerOrder=Jr(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Bt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Qe.Objects.Model[i.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),un.add(e.target)):e.lookAt(new E().fromArray(a))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const a=e[r];Bt.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Bt.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new kc(a.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Qe.Objects){const t=Qe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Pe().fromArray(r.Matrix.a)}):e[i.Node]=new Pe().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Qe){if("AmbientColor"in Qe.GlobalSettings){const e=Qe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Fe().setRGB(t,n,i,ut);un.add(new ly(r,1))}}"UnitScaleFactor"in Qe.GlobalSettings&&(un.userData.unitScaleFactor=Qe.GlobalSettings.UnitScaleFactor.value)}}}class P1{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Qe.Objects){const n=Qe.Objects.Geometry;for(const i in n){const r=Bt.get(parseInt(i)),a=this.parseGeometry(r,n[i],e);t.set(parseInt(i),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],a=e.parents.map(function(u){return Qe.Objects.Model[u.ID]});if(a.length===0)return;const o=e.children.reduce(function(u,f){return i[f.ID]!==void 0&&(u=i[f.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Jr(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=dd(c);return this.genGeometry(t,o,r,h)}genGeometry(e,t,n,i){const r=new kt;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new nt(o.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new nt(o.colors,3)),t&&(r.setAttribute("skinIndex",new Oc(o.weightsIndices,4)),r.setAttribute("skinWeight",new nt(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const c=new Ye().getNormalMatrix(i),h=new nt(o.normal,3);h.applyNormalMatrix(c),r.setAttribute("normal",h)}if(o.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;r.setAttribute(u,new nt(o.uvs[h],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],h=0;if(o.materialIndex.forEach(function(u,f){u!==c&&(r.addGroup(h,f-h,c),c=u,h=f)}),r.groups.length>0){const u=r.groups[r.groups.length-1],f=u.start+u.count;f!==o.materialIndex.length&&r.addGroup(f,o.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,a=[],o=[],l=[],c=[],h=[],u=[];const f=this;return e.vertexIndices.forEach(function(d,g){let _,m=!1;d<0&&(d=d^-1,m=!0);let p=[],x=[];if(a.push(d*3,d*3+1,d*3+2),e.color){const v=Ha(g,n,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){x.push(v.weight),p.push(v.id)}),x.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const v=[0,0,0,0],y=[0,0,0,0];x.forEach(function(L,R){let A=L,I=p[R];y.forEach(function(w,S,C){if(A>w){C[S]=A,A=w;const B=v[S];v[S]=I,I=B}})}),p=v,x=y}for(;x.length<4;)x.push(0),p.push(0);for(let v=0;v<4;++v)h.push(x[v]),u.push(p[v])}if(e.normal){const v=Ha(g,n,d,e.normal);o.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=Ha(g,n,d,e.material)[0],_<0&&(f.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(v,y){const L=Ha(g,n,d,v);c[y]===void 0&&(c[y]=[]),c[y].push(L[0]),c[y].push(L[1])}),i++,m&&(f.genFace(t,e,a,_,o,l,c,h,u,i),n++,i=0,a=[],o=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){const t=new E(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new E(0,1,0):new E(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new ee(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,a,o,l,c,h){let u;if(h>3){const f=[],d=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<n.length;p+=3)f.push(new E(d[n[p]],d[n[p+1]],d[n[p+2]]));const{tangent:g,bitangent:_}=this.getNormalTangentAndBitangent(f),m=[];for(const p of f)m.push(this.flattenVertex(p,g,_));u=Mi.triangulateShape(m,[])}else u=[[0,1,2]];for(const[f,d,g]of u)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[g*3]]),e.vertex.push(t.vertexPositions[n[g*3+1]]),e.vertex.push(t.vertexPositions[n[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(a[f*3]),e.colors.push(a[f*3+1]),e.colors.push(a[f*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[g*3]),e.colors.push(a[g*3+1]),e.colors.push(a[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[g*3]),e.normal.push(r[g*3+1]),e.normal.push(r[g*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(o[m][f*2]),e.uvs[m].push(o[m][f*2+1]),e.uvs[m].push(o[m][d*2]),e.uvs[m].push(o[m][d*2+1]),e.uvs[m].push(o[m][g*2]),e.uvs[m].push(o[m][g*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(a){a.rawTargets.forEach(function(o){const l=Qe.Objects.Geometry[o.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,r){const a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let _=0;_<c.length;_++){const m=c[_]*3;u[m]=l[_*3],u[m+1]=l[_*3+1],u[m+2]=l[_*3+2]}const f={vertexIndices:o,vertexPositions:u,baseVertexPositions:a},d=this.genBuffers(f),g=new nt(d.vertex,3);g.name=r||n.attrName,g.applyMatrix4(i),e.morphAttributes.position.push(g)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let a=0,o=new Fe;a<i.length;a+=4)o.fromArray(i,a),Ke.toWorkingColorSpace(o,ut),o.toArray(i,a);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let a=0;a<i.length;++a)r.push(a);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new kt;const n=t-1,i=e.KnotVector.a,r=[],a=e.Points.a;for(let u=0,f=a.length;u<f;u+=4)r.push(new at().fromArray(a,u));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let u=0;u<n;++u)r.push(r[u])}const h=new R1(n,i,r,o,l).getPoints(r.length*12);return new kt().setFromPoints(h)}}class I1{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Qe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Qe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Qe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(F1),values:t[n].KeyValueFloat.a},r=Bt.get(i.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=i:o.match(/Y/)?e.get(a).curves.y=i:o.match(/Z/)?e.get(a).curves.z=i:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=i)}}}parseAnimationLayers(e){const t=Qe.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],a=Bt.get(parseInt(i));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[c]===void 0){const u=Bt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){const f=Qe.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?ct.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};un.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Pe),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[c]===void 0){const u=Bt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=Bt.get(u).parents[0].ID,d=Bt.get(f).parents[0].ID,g=Bt.get(d).parents[0].ID,_=Qe.Objects.Model[g],m={modelName:_.attrName?ct.sanitizeNodeName(_.attrName):"",morphName:Qe.Objects.Deformer[u].attrName};r[c]=m}r[c][h.attr]=h}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Qe.Objects.AnimationStack,n={};for(const i in t){const r=Bt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:a}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new gc(e.name,-1,t)}generateTracks(e){const t=[];let n=new E,i=new E;if(e.transform&&e.transform.decompose(n,new gt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,n);return new jr(e+"."+i,r,a)}generateRotationTrack(e,t,n,i,r){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const f=this.interpolateRotations(t.x,t.y,t.z,r);a=f[0],o=f[1]}const l=Jr(0);n!==void 0&&(n=n.map(tn.degToRad),n.push(l),n=new zt().fromArray(n),n=new gt().setFromEuler(n)),i!==void 0&&(i=i.map(tn.degToRad),i.push(l),i=new zt().fromArray(i),i=new gt().setFromEuler(i).invert());const c=new gt,h=new zt,u=[];if(!o||!a)return new hr(e+".quaternion",[0],[0]);for(let f=0;f<o.length;f+=3)h.set(o[f],o[f+1],o[f+2],r),c.setFromEuler(h),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),f>2&&new gt().fromArray(u,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,f/3*4);return new hr(e+".quaternion",a,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=un.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Kr(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==i&&(t[n]=a,i=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const h=t.x.values[a];r.push(h),i[0]=h}else r.push(i[0]);if(o!==-1){const h=t.y.values[o];r.push(h),i[1]=h}else r.push(i[1]);if(l!==-1){const h=t.z.values[l];r.push(h),i[2]=h}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],a=[];r.push(e.times[0]),a.push(tn.degToRad(e.values[0])),a.push(tn.degToRad(t.values[0])),a.push(tn.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(tn.degToRad),h=[e.values[o],t.values[o],n.values[o]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const u=h.map(tn.degToRad),f=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const _=Math.max(...d)/180,m=new zt(...c,i),p=new zt(...u,i),x=new gt().setFromEuler(m),v=new gt().setFromEuler(p);x.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const y=e.times[o-1],L=e.times[o]-y,R=new gt,A=new zt;for(let I=0;I<1;I+=1/_)R.copy(x.clone().slerp(v.clone(),I)),r.push(y+I*L),A.setFromQuaternion(R,i),a.push(A.x),a.push(A.y),a.push(A.z)}else r.push(e.times[o]),a.push(tn.degToRad(e.values[o])),a.push(tn.degToRad(t.values[o])),a.push(tn.degToRad(n.values[o]))}return[r,a]}}class L1{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new fd,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const a=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(a||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=r.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,h],B1(r,u),a[i]===void 0&&(a[i]=[])}i==="Node"&&(a.id=r),i in a&&Array.isArray(a[i])?a[i].push(r):i!=="a"?a[i]=r:a.a=r,this.setCurrentProp(a,i),i==="a"&&r.slice(-1)!==","&&(a.a=Ml(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Ml(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],a=i[1],o=i[2],l=i[3];let c=i[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Ml(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class D1{parse(e){const t=new Hu(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new fd;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(o,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,a){a!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const a=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const o=v1(new Uint8Array(e.getArrayBuffer(a))),l=new Hu(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Hu{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class fd{add(e,t){this[e]=t}}function U1(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===pd(s,0,e.length)}function N1(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Gu(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function F1(s){return s/46186158e3}const O1=[];function Ha(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,a=r+n.dataSize;return z1(O1,n.buffer,r,a)}const yl=new zt,Bs=new E;function dd(s){const e=new Pe,t=new Pe,n=new Pe,i=new Pe,r=new Pe,a=new Pe,o=new Pe,l=new Pe,c=new Pe,h=new Pe,u=new Pe,f=new Pe,d=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(Bs.fromArray(s.translation));const g=Jr(0);if(s.preRotation){const C=s.preRotation.map(tn.degToRad);C.push(g),t.makeRotationFromEuler(yl.fromArray(C))}if(s.rotation){const C=s.rotation.map(tn.degToRad);C.push(s.eulerOrder||g),n.makeRotationFromEuler(yl.fromArray(C))}if(s.postRotation){const C=s.postRotation.map(tn.degToRad);C.push(g),i.makeRotationFromEuler(yl.fromArray(C)),i.invert()}s.scale&&r.scale(Bs.fromArray(s.scale)),s.scalingOffset&&o.setPosition(Bs.fromArray(s.scalingOffset)),s.scalingPivot&&a.setPosition(Bs.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Bs.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Bs.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),m=new Pe;m.extractRotation(h);const p=new Pe;p.copyPosition(h);const x=p.clone().invert().multiply(h),v=m.clone().invert().multiply(x),y=r,L=new Pe;if(d===0)L.copy(m).multiply(_).multiply(v).multiply(y);else if(d===1)L.copy(m).multiply(v).multiply(_).multiply(y);else{const B=new Pe().scale(new E().setFromMatrixScale(u)).clone().invert(),F=v.clone().multiply(B);L.copy(m).multiply(_).multiply(F).multiply(y)}const R=c.clone().invert(),A=a.clone().invert();let I=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(R).multiply(o).multiply(a).multiply(r).multiply(A);const w=new Pe().copyPosition(I),S=h.clone().multiply(w);return f.copyPosition(S),I=f.clone().multiply(L),I.premultiply(h.invert()),I}function Jr(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Ml(s){return s.split(",").map(function(t){return parseFloat(t)})}function pd(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function B1(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function z1(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}const k1=["Bip01 Pelvis","Bip01 L Thigh","Bip01 R Thigh","Bip01 L Calf","Bip01 R Calf","Bip01 L UpperArm","Bip01 R UpperArm","Bip01 L Forearm","Bip01 R Forearm","Bip01 Neck","Bip01 Head"],fo=Ld("avatars"),Sc={"infirmiere-femme":{file:"Medical_Female_01",height:1.66,idle:"f_idle_breathe_01",talk:"f_gestic_talk_neutral_01"},"infirmiere-homme":{file:"Medical_Male_01",height:1.78,idle:"m_idle_breathe_01",talk:"m_gestic_talk_neutral_01"},"patient-homme":{file:"Male_Adult_16",height:1.76,idle:"m_sit_chair_breathe_01",gown:!0},"patient-femme":{file:"Female_Adult_08",height:1.64,idle:"f_sit_chair_breathe_01",gown:!0},"employe-homme":{file:"Male_Adult_16",height:1.78,idle:"m_idle_breathe_01",talk:"m_gestic_talk_neutral_01",polo:{zones:[[.3,0,.7,.86],[0,.42,.3,.68],[.7,.42,1,.68]]}},"employe-femme":{file:"Female_Adult_08",height:1.66,idle:"f_idle_breathe_01",talk:"f_gestic_talk_neutral_01",polo:{zones:[[0,0,1,.66]],lowSaturation:!0}},"client-homme":{file:"Male_Adult_05",height:1.76,idle:"m_idle_breathe_01",talk:"m_gestic_talk_neutral_01"},"client-femme":{file:"Female_Adult_08",height:1.64,idle:"f_idle_breathe_01",talk:"f_gestic_talk_neutral_01"},"patient-homme-age":{file:"Male_Adult_05",height:1.72,idle:"m_sit_chair_breathe_01",gown:!0,grayHair:!0,skinZones:[[0,.82,.27,1],[.73,.82,1,1]]},"patient-femme-age":{file:"Female_Adult_08",height:1.6,idle:"f_sit_chair_breathe_01",gown:!0,grayHair:!0}};async function Qc(s,e,t){var i;const n=new Set;s.traverse(r=>{const a=r;if(a.isMesh)for(const o of Array.isArray(a.material)?a.material:[a.material])o.map&&n.add(o.map)});for(let r=0;r<100&&[...n].some(a=>!a.image||a.image instanceof HTMLImageElement&&!a.image.complete);r++)await new Promise(a=>setTimeout(a,100));for(const r of[...n])e.test(((i=r.image)==null?void 0:i.src)??"")||n.delete(r);for(const r of n){const a=r.image;(!a.complete||!a.naturalWidth)&&await new Promise(d=>{a.addEventListener("load",d,{once:!0}),a.addEventListener("error",d,{once:!0})});const o=a.naturalWidth,l=a.naturalHeight;if(!o)continue;const c=document.createElement("canvas");c.width=o,c.height=l;const h=c.getContext("2d");h.drawImage(a,0,0);const u=h.getImageData(0,0,o,l),f=u.data;for(let d=0;d<l;d++)for(let g=0;g<o;g++)t(f,(d*o+g)*4,g,d,o,l);h.putImageData(u,0,0),r.image=c,r.needsUpdate=!0}}const eh=(s,e,t)=>s>95&&e>40&&t>20&&s>e&&s>t&&s-Math.min(e,t)>15&&s-e>12,V1=(s,e)=>Qc(s,/body_color/,(t,n,i,r,a,o)=>{const l=t[n],c=t[n+1],h=t[n+2],u=!e||e.some(([m,p,x,v])=>i>=m*a&&i<=x*a&&r>=p*o&&r<=v*o);if(l+c+h<30||u&&eh(l,c,h))return;const f=(l*.3+c*.59+h*.11)/255,d=Math.min(1.08,.72+f*.45),_=((i>>3)+(r>>3))%6===0&&((i&7)-3.5)**2+((r&7)-3.5)**2<6?[96,132,178]:[214,228,240];t[n]=_[0]*d,t[n+1]=_[1]*d,t[n+2]=_[2]*d}),H1=(s,e)=>Qc(s,/body_color/,(t,n,i,r,a,o)=>{const l=t[n],c=t[n+1],h=t[n+2];if(l+c+h<30||eh(l,c,h)||e.zones&&!e.zones.some(([d,g,_,m])=>i>=d*a&&i<=_*a&&r>=g*o&&r<=m*o)||e.lowSaturation&&Math.max(l,c,h)-Math.min(l,c,h)>40)return;const u=(l*.3+c*.59+h*.11)/255,f=Math.min(1.25,.55+u*.9);t[n]=15*f,t[n+1]=139*f,t[n+2]=141*f}),G1=s=>Qc(s,/head_color|opacity_color/,(e,t)=>{const n=e[t],i=e[t+1],r=e[t+2];if(eh(n,i,r))return;const a=(n*.3+i*.59+r*.11)/255;if(a>.75)return;const o=150+a*120;e[t]=o,e[t+1]=o,e[t+2]=o*1.02});function W1(s){const e=new Yf;return e.setURLModifier(t=>{if(!/\.tga$/i.test(t))return t;const n=t.split(/[\\/]/).pop().replace(/\.tga$/i,"");return/specular/i.test(n)?`${fo}/specular.png`:`${fo}/${s}/${n}${/opacity/i.test(n)?".png":".jpg"}`}),e.addHandler(/\.tga$/i,new $f(e)),new ud(e)}const Sl=new Map;function Wu(s){return Sl.has(s)||Sl.set(s,new ud().loadAsync(`${fo}/anims/${s}.fbx`).then(e=>{const t=e.animations[0];return t.tracks=t.tracks.filter(n=>n.name.endsWith(".quaternion")||n.name.includes("Pelvis")&&n.name.endsWith(".position")&&!1),t})),Sl.get(s)}const Xu=new Set,bl=new Map;function X1(s){if(!bl.has(s)){const e=Sc[s];bl.set(s,W1(e.file).loadAsync(`${fo}/${e.file}/${e.file}.fbx`))}return bl.get(s)}function q1(s){s.traverse(e=>{const t=e;if(!t.isMesh)return;t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1;const n=i=>{var l,c;const r=i,a=/opacity/i.test(r.name)||/opacity/i.test(((c=(l=r.map)==null?void 0:l.image)==null?void 0:c.src)??""),o=new ot({name:r.name,map:r.map,normalMap:r.normalMap,color:16777215,roughness:/head|skin/i.test(r.name)?.55:.8,metalness:0,transparent:a,alphaTest:a?.35:0,depthWrite:!a,side:a?Dn:wi});return o.map&&(o.map.colorSpace=ut),a&&r.map&&(o.alphaMap=null),o};t.material=Array.isArray(t.material)?t.material.map(n):n(t.material)})}async function Y1(s,e,t=s==="patient"?"homme":"femme",n){const i=Sc[`${s}-${t}-age`]&&(n??0)>=60?`${s}-${t}-age`:`${s}-${t}`,r=Sc[i],a=await X1(i);Xu.has(i)||(Xu.add(i),r.gown&&await V1(a,r.skinZones),r.polo&&await H1(a,r.polo),r.grayHair&&await G1(a));const{clone:o}=await s1(async()=>{const{clone:A}=await import("./SkeletonUtils-CuRFEry0.js");return{clone:A}},[],import.meta.url),l=o(a);q1(l);const c=new qi().setFromObject(l).getSize(new E);l.scale.setScalar(r.height/Math.max(c.y,.01));const h=new Ue;h.add(l),h.userData.sharedResources=!0;const u=new Map;l.traverse(A=>{A.isBone&&u.set(A.name.replace(/_/g," "),A)});const f=new Map;if(u.forEach((A,I)=>f.set(I,A.quaternion.clone())),e==="couche"){const A=u.get("Bip01 Pelvis");if(A){h.updateMatrixWorld(!0);const I=A.getWorldPosition(new E);l.position.set(-I.x,-I.y+.19,-I.z)}}else{const A=new qi().setFromObject(l);l.position.y-=A.min.y}const d=new by(l),g=d.clipAction(await Wu(r.idle));g.play();const _=r.talk?d.clipAction(await Wu(r.talk)):null;_&&(_.play(),_.setEffectiveWeight(0));let m=!1,p=0,x=Math.PI/4;const v=new E(1,0,0),y=(A,I)=>{const w=u.get(A);if(!w||!w.parent)return;w.parent.updateWorldMatrix(!0,!1);const S=w.parent.getWorldQuaternion(new gt),B=v.clone().applyQuaternion(l.getWorldQuaternion(new gt)).applyQuaternion(S.invert()).normalize();w.quaternion.premultiply(new gt().setFromAxisAngle(B,I))},L=(A,I,w)=>{const S=u.get(A),C=u.get(I);if(!S||!C||!S.parent)return;S.updateWorldMatrix(!0,!0);const B=C.getWorldPosition(new E).sub(S.getWorldPosition(new E)).normalize(),F=new gt().setFromUnitVectors(B,w),k=S.parent.getWorldQuaternion(new gt);S.quaternion.premultiply(k.clone().invert().multiply(F).multiply(k))},R=()=>{var C,B;const A=Math.PI/2-x;y("Bip01 Pelvis",-A);const I=new E(0,-.12,1).applyQuaternion(l.getWorldQuaternion(new gt)).normalize();for(const F of["L","R"])L(`Bip01 ${F} Thigh`,`Bip01 ${F} Calf`,I),L(`Bip01 ${F} Calf`,`Bip01 ${F} Foot`,I);l.updateWorldMatrix(!0,!0);const w=(C=u.get("Bip01 Neck"))==null?void 0:C.getWorldPosition(new E),S=(B=u.get("Bip01 Pelvis"))==null?void 0:B.getWorldPosition(new E);if(w&&S){const F=S.sub(w).normalize(),k=new E(1,0,0).applyQuaternion(l.getWorldQuaternion(new gt));for(const[Z,H]of[["L",1],["R",-1]])L(`Bip01 ${Z} UpperArm`,`Bip01 ${Z} Forearm`,F.clone().addScaledVector(k,.32*H).normalize()),L(`Bip01 ${Z} Forearm`,`Bip01 ${Z} Hand`,F.clone().addScaledVector(k,.12*H).normalize())}y("Bip01 Neck",Math.min(A,1)*.3)};return{root:h,update(A){if(_&&(p+=((m?1:0)-p)*Math.min(1,A*3),_.setEffectiveWeight(p),g.setEffectiveWeight(1-p)),e==="couche")for(const I of k1){const w=u.get(I),S=f.get(I);w&&S&&w.quaternion.copy(S)}d.update(A),e==="couche"&&R()},setTalking(A){m=A},setRecline(A){x=A},bone:A=>u.get(A)}}const th=[{id:"moderne",environment:"chambre-hopital",label:"Chambre moderne"},{id:"classique",environment:"chambre-hopital-classique",label:"Chambre classique"},{id:"equipee",environment:"chambre-hopital-equipee",label:"Chambre équipée"},{id:"simple",environment:"chambre-hopital-simple",label:"Chambre simple"},{id:"orthopedie",environment:"chambre-hopital-orthopedie",label:"Chambre d'orthopédie"}],Ga=[...th.map(s=>({environment:s.environment,label:s.label})),{environment:"poste-soins",label:"Poste des infirmières"},{environment:"magasin-electronique",label:"Magasin d'électronique"}],$1=s=>{var e;return((e=th.find(t=>t.environment===s))==null?void 0:e.id)??"moderne"},po={moderne:{wall:15658730,floor:"bois",stripe:6000592,stripeY:1.05,stripeH:.05,window:"grande",curtain:5211856,bed:"moderne",sheet:11127018,chair:2040616,tv:!1,ac:!1,monitor:!1,pump:!0,overbed:!0,trapeze:!1,headRail:!1,cabinet:13806972,doorOpen:!1},classique:{wall:15328936,floor:"vinyle",stripeY:0,stripeH:0,window:"classique",curtain:11055264,bed:"bois",sheet:16250609,chair:5978662,tv:!0,ac:!0,monitor:!1,pump:!1,overbed:!1,trapeze:!1,headRail:!1,cabinet:8018494,doorOpen:!1},equipee:{wall:15265007,floor:"ceramique",stripe:12175318,stripeY:1,stripeH:.18,window:"grande",curtain:9415113,bed:"moderne",sheet:4153246,blanket:4153246,chair:2767450,tv:!1,ac:!1,monitor:!0,pump:!0,overbed:!0,trapeze:!1,headRail:!0,cabinet:7311298,cabinetDoor:16054008,doorOpen:!1},simple:{wall:15987697,floor:"ceramique",stripe:13685974,stripeY:1,stripeH:.02,window:"grande",bed:"simple",sheet:16777215,blanket:8376752,chair:1908514,tv:!1,ac:!1,monitor:!1,pump:!1,overbed:!1,trapeze:!1,headRail:!0,cabinet:15328988,doorOpen:!0},orthopedie:{wall:15856110,floor:"vinyle",stripe:15309356,stripeY:.95,stripeH:.2,window:"classique",bed:"ortho",sheet:16777215,chair:3882820,tv:!1,ac:!1,monitor:!1,pump:!1,overbed:!1,trapeze:!0,headRail:!0,cabinet:15922420,cabinetDoor:7324608,doorOpen:!1}},Be=5.6,Mt=-3.9,Tt=1.8,Nt=2.75,fn=-2.2,ce=(s,e=.7,t=0,n)=>new ot({color:s,roughness:e,metalness:t,map:n}),Qs=(s,e=1.4)=>new ot({color:16777215,emissive:s,emissiveIntensity:e});function X(s,e,t,n,i,r,a=!0){const o=new Ee(e,t);return o.position.set(n,i,r),o.castShadow=a,o.receiveShadow=!0,s.add(o),o}const qe=(s,e,t)=>new xn(s,e,t),Ne=(s,e,t,n=.03)=>new nn(s,e,t,4,Math.min(n,s/2-.001,e/2-.001,t/2-.001)),At=(s,e,t=20)=>new zn(s,s,e,t),Gt=ce(12896460,.3,.75),Z1=ce(1974822,.6),Ja=ce(15922422,.45);function si(s,e,t,n){const i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"));const r=new mr(i);return r.colorSpace=ut,r.anisotropy=8,n&&(r.wrapS=r.wrapT=Ei,r.repeat.set(...n)),r}const er=s=>()=>(s=s*16807%2147483647)/2147483647;function K1(s){return s==="bois"?si(1024,1024,e=>{const t=er(3);for(let n=0;n<8;n++){let i=-t()*300;for(;i<1024;){const r=300+t()*350,a=200+Math.floor(t()*26);e.fillStyle=`rgb(${a},${a-22},${a-52})`,e.fillRect(i,n*128,r,128);for(let o=0;o<40;o++){e.strokeStyle=`rgba(120,85,50,${.04+t()*.07})`,e.beginPath();const l=n*128+t()*128;e.moveTo(i,l),e.bezierCurveTo(i+r/3,l+t()*6-3,i+2*r/3,l+t()*6-3,i+r,l),e.stroke()}e.fillStyle="rgba(90,65,40,0.35)",e.fillRect(i,n*128,2,128),i+=r}e.fillStyle="rgba(90,65,40,0.3)",e.fillRect(0,n*128,1024,2)}},[2.2,2.2]):s==="ceramique"?si(512,512,e=>{const t=er(9);for(let n=0;n<4;n++)for(let i=0;i<4;i++){const r=228+Math.floor(t()*14);e.fillStyle=`rgb(${r},${r},${r-2})`,e.fillRect(n*128,i*128,128,128)}for(let n=0;n<3e3;n++)e.fillStyle=`rgba(160,160,155,${t()*.3})`,e.fillRect(t()*512,t()*512,1.5,1.5);e.fillStyle="#b9bbb8";for(let n=0;n<=4;n++)e.fillRect(n*128-2,0,4,512),e.fillRect(0,n*128-2,512,4)},[3.5,3.5]):si(512,512,e=>{e.fillStyle="#c6c8c0",e.fillRect(0,0,512,512);const t=er(7);for(let n=0;n<26e3;n++)e.fillStyle=["#9fa39a","#e3e4dc","#b2b5ab"][Math.floor(t()*3)],e.globalAlpha=.25+t()*.5,e.fillRect(t()*512,t()*512,1+t()*2.5,1+t()*2.5);e.globalAlpha=1},[5,5])}const j1=()=>si(512,512,s=>{s.fillStyle="#f2f2ee",s.fillRect(0,0,512,512);const e=er(5);for(let t=0;t<5e3;t++)s.fillStyle=`rgba(150,150,140,${e()*.25})`,s.fillRect(e()*512,e()*512,1.5,1.5);s.fillStyle="#d9d9d2",s.fillRect(0,0,512,6),s.fillRect(0,0,6,512)},[4.6,4.6]),J1=s=>si(1400,900,e=>{const t=e.createLinearGradient(0,0,0,660);t.addColorStop(0,s.sky[0]),t.addColorStop(.55,s.sky[1]),t.addColorStop(1,s.sky[2]),e.fillStyle=t,e.fillRect(0,0,1400,900);const n=er(17);if(s.stars){for(let r=0;r<160;r++)e.fillStyle=`rgba(255,255,255,${.3+n()*.6})`,e.fillRect(n()*1400,n()*380,2,2);e.fillStyle="#f4f1e0",e.beginPath(),e.arc(1120,110,34,0,Math.PI*2),e.fill()}const i=er(91);for(let r=-40;r<1400;r+=160+n()*120){const a=220+n()*200,o=220+n()*230,l=640-o,c=150+Math.floor(n()*40),h=1-s.dimCity;e.fillStyle=`rgb(${Math.floor(c*h)},${Math.floor(c*.55*h)},${Math.floor(c*.42*h+20*s.dimCity)})`,e.fillRect(r,l,a,o+200);for(let u=l+18;u<620;u+=34)for(let f=r+14;f<r+a-20;f+=30)e.fillStyle=i()<s.litWindows?"rgba(255,214,140,0.95)":s.dimCity>.5?"rgba(30,38,58,0.9)":"rgba(225,232,238,0.85)",e.fillRect(f,u,16,20)}for(let r=0;r<9;r++){const a=n()*1400,o=160+n()*120;e.strokeStyle="rgba(70,60,50,0.55)",e.lineWidth=6,e.beginPath(),e.moveTo(a,680),e.lineTo(a,680-o),e.stroke(),e.fillStyle="rgba(110,120,90,0.35)",e.beginPath(),e.arc(a,680-o,70+n()*40,0,Math.PI*2),e.fill()}e.fillStyle="#7d8c62",e.fillRect(0,660,1400,70),s.dimCity&&(e.fillStyle=`rgba(8,12,30,${s.dimCity})`,e.fillRect(0,640,1400,260)),e.fillStyle="#6a6a68",e.fillRect(0,730,1400,170);for(let r=0;r<6;r++)e.fillStyle=["#d8dde2","#3a4a5a","#b03a2e","#e8e8e8"][r%4],e.fillRect(80+r*230+n()*60,760+r%2*50,120,42)}),md=(s,e=512,t=360)=>si(e,t,n=>{n.fillStyle="#04120c",n.fillRect(0,0,e,t),s(n)}),Q1=()=>md(s=>{const e=(t,n,i)=>{s.strokeStyle=n,s.lineWidth=3,s.beginPath();for(let r=10;r<340;r+=2)s.lineTo(r,t+i(r));s.stroke()};e(80,"#3ee07a",t=>t%80>40&&t%80<46?-40:t%80>46&&t%80<50?18:0),e(190,"#3fc6ff",t=>Math.sin(t/14)*14),e(290,"#ffd34a",t=>Math.sin(t/30)*18),s.font="bold 64px sans-serif",s.fillStyle="#3ee07a",s.fillText("78",380,105),s.fillStyle="#3fc6ff",s.fillText("97",380,215),s.font="bold 40px sans-serif",s.fillStyle="#ffd34a",s.fillText("118/76",352,305)}),eM=s=>si(512,256,e=>{e.fillStyle="#f4f6f8",e.fillRect(0,0,512,256),e.fillStyle=s,e.fillRect(0,214,512,42),e.fillStyle=s,e.fillRect(400,40,70,70),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(414,54,42,42)}),tM=()=>si(256,256,s=>{s.fillStyle="#fbfbf8",s.beginPath(),s.arc(128,128,124,0,Math.PI*2),s.fill(),s.strokeStyle="#222",s.lineWidth=3;for(let e=0;e<=300;e+=10){const t=-Math.PI*.75+e/300*Math.PI*1.5,n=e%50===0?92:102;s.beginPath(),s.moveTo(128+Math.cos(t)*n,128+Math.sin(t)*n),s.lineTo(128+Math.cos(t)*112,128+Math.sin(t)*112),s.stroke(),e%50===0&&(s.fillStyle="#222",s.font="bold 18px sans-serif",s.textAlign="center",s.fillText(String(e),128+Math.cos(t)*74,134+Math.sin(t)*74))}s.fillStyle="#333",s.font="14px sans-serif",s.textAlign="center",s.fillText("mmHg",128,175),s.strokeStyle="#c22",s.lineWidth=4,s.beginPath(),s.moveTo(128,128),s.lineTo(128+Math.cos(-Math.PI*.75)*100,128+Math.sin(-Math.PI*.75)*100),s.stroke()});function nM(s,e,t,n){const i=ce(e.wall,.92),r=X(s,new Ct(Be,Tt-Mt),ce(16777215,e.floor==="ceramique"?.25:.5,0,K1(e.floor)),0,0,(Tt+Mt)/2,!1);r.rotation.x=-Math.PI/2;const a=X(s,new Ct(Be,Tt-Mt),ce(16777215,.95,0,j1()),0,Nt,(Tt+Mt)/2,!1);a.rotation.x=Math.PI/2;for(const m of[-2.6,-.4])e.window==="classique"?X(s,qe(1.2,.03,.6),Qs(16775398,n.panelGlow),.2,Nt-.015,m,!1):X(s,At(.22,.03,40),Qs(16775920,n.panelGlow),.2,Nt-.015,m,!1);const o=e.window==="grande"?{l:-2.75,r:-.1,b:.55,t:2.55}:{l:-1.7,r:.9,b:1,t:2.25},l=(m,p,x,v)=>X(s,qe(m,p,.08),i,x,v,Mt-.04,!1);l(Be/2-o.r,Nt,(o.r+Be/2)/2,Nt/2),l(o.r-o.l,o.b,(o.l+o.r)/2,o.b/2),l(o.r-o.l,Nt-o.t,(o.l+o.r)/2,(o.t+Nt)/2),o.l>-Be/2&&l(o.l+Be/2,Nt,(-Be/2+o.l)/2,Nt/2),X(s,qe(.08,Nt,Tt-Mt),i,-Be/2-.04,Nt/2,(Tt+Mt)/2,!1),X(s,qe(.08,Nt,Tt-Mt),i,Be/2+.04,Nt/2,(Tt+Mt)/2,!1),X(s,qe(Be/2+1.1,Nt,.08),i,(Be/2-1.1)/2,Nt/2,Tt+.04,!1),X(s,qe(Be/2-2.1,Nt,.08),i,(-Be/2-2.1)/2,Nt/2,Tt+.04,!1),X(s,qe(1,Nt-2.15,.08),i,-1.6,(Nt+2.15)/2,Tt+.04,!1);const c=ce(e.floor==="bois"?10324592:3881526,.6);for(const m of[-Be/2+.008,Be/2-.008])X(s,qe(.015,.09,Tt-Mt),c,m,.045,(Tt+Mt)/2,!1);if(e.stripe){const m=ce(e.stripe,.55);for(const p of[-Be/2+.006,Be/2-.006])X(s,qe(.012,e.stripeH,Tt-Mt),m,p,e.stripeY,(Tt+Mt)/2,!1);X(s,qe(Be/2-o.r,e.stripeH,.012),m,(o.r+Be/2)/2,e.stripeY,Mt+.006,!1)}const h=new Ee(new Ct(6.5,4.2),new Ai({map:J1(n)}));h.position.set((o.l+o.r)/2,1.5,Mt-2.4),s.add(h);const u=new Ee(new Ct(o.r-o.l,o.t-o.b),new Si({color:15266552,transparent:!0,opacity:.1,roughness:.05}));u.position.set((o.l+o.r)/2,(o.b+o.t)/2,Mt-.03),s.add(u);const f=ce(12172994,.35,.5);for(const m of[o.l,(o.l+o.r)/2,o.r])X(s,qe(.06,o.t-o.b,.12),f,m,(o.b+o.t)/2,Mt);for(const m of e.window==="grande"?[o.b,1.15,o.t]:[o.b,o.t])X(s,qe(o.r-o.l+.06,.06,.12),f,(o.l+o.r)/2,m,Mt);if(e.window==="classique"){X(s,Ne(o.r-o.l+.4,.04,.26,.015),ce(e.stripe?15921904:11813946,.5),(o.l+o.r)/2,o.b-.02,Mt+.12);const m=new Ue;m.position.set((o.l+o.r)/2,.5,Mt+.12),s.add(m),X(m,qe(o.r-o.l+.3,.9,.18),ce(15131087,.6),0,0,0);for(let p=0;p<2;p++)for(let x=0;x<9;x++)X(m,qe(.16,.08,.01),ce(10262406,.7),-1.1+x*.26,.15-p*.28,.095,!1)}else X(s,Ne(o.r-o.l+.2,.04,.25,.012),ce(16185074,.4),(o.l+o.r)/2,o.b-.02,Mt+.11);if(e.curtain){const m=ce(e.curtain,.95);for(const[p,x]of[[o.r+.08,7],[o.l+.02,3]])for(let v=0;v<x;v++){const y=X(s,Ne(.11,2.4,.05,.02),m,p+v*.085,1.4,Mt+.16+v%2*.04);y.rotation.y=v%2?.45:-.45}}const d=new Ue;d.position.set(-2.1,0,Tt-.03),s.add(d);const g=X(d,Ne(1,2.1,.05,.01),ce(e.wall===15987697?16053490:14205858,.5),.5,1.05,0);d.rotation.y=e.doorOpen?-1.2:0;const _=new Ee(new Ct(.2,.1),new Ai({map:si(200,100,m=>{m.fillStyle="#2457a6",m.fillRect(0,0,200,100),m.fillStyle="#fff",m.font="bold 64px sans-serif",m.textAlign="center",m.fillText(t.slice(0,6),100,74)})}));return _.position.set(0,.6,-.03),_.rotation.y=Math.PI,g.add(_),X(s,Ne(.12,.22,.09,.02),ce(16053492,.4),-.6,1.3,Tt-.05),X(s,qe(.06,.05,.01),ce(3120750,.4),-.6,1.35,Tt-.1,!1),o}function iM(s){const e=new Ue,t=ce(s.sheet,.95),n=ce(16777215,.9),i=(c=.07)=>{for(const h of[-.85,.85])for(const u of[-.36,.36]){const f=X(e,At(.06,.04),Z1,h,c,u);f.rotation.x=Math.PI/2}};if(s.bed==="bois"){X(e,qe(2,.08,.92),Gt,0,.42,0);for(const c of[-.9,.9])for(const h of[-.4,.4])X(e,At(.02,.32),Gt,c,.26,h);i(.06),X(e,Ne(1.95,.18,.9,.06),t,0,.55,0),X(e,Ne(.06,.95,.98,.02),ce(9136712,.55),1.02,.6,0),X(e,Ne(.05,.62,.98,.02),ce(9136712,.55),-1.02,.5,0)}else{const c=s.bed==="ortho",h=s.bed==="simple",u=c?ce(10133928,.45):h?ce(12041408,.4,.4):ce(2314135,.5);X(e,Ne(2.05,.1,.95,.03),u,0,.5,0),X(e,qe(1.6,.16,.5),ce(3817285,.6),0,.33,0);for(const f of[-.85,.85])for(const d of[-.36,.36])X(e,At(.025,.2),Gt,f,.2,d);if(i(),X(e,Ne(1.95,.17,.9,.06),ce(15331059,.8),0,.63,0),c||h){const f=ce(h?13949146:10923186,.45);if(X(e,Ne(.07,.55,.98,.05),f,1.04,.85,0),X(e,Ne(.07,.5,.98,.05),f,-1.04,.8,0),c)for(const d of[1.04,-1.04])X(e,Ne(.075,.12,.6,.05),ce(5923176,.4),d,.92,0)}else{const f=new ot({map:eM("#2457a6"),roughness:.45}),d=X(e,Ne(.06,.62,.98,.03),Ja,1.04,.86,0),g=new Ee(new Ct(.92,.5),f);g.position.set(-.032,.02,0),g.rotation.y=-Math.PI/2,d.add(g);const _=X(e,Ne(.06,.48,.98,.03),Ja,-1.04,.78,0),m=new Ee(new Ct(.92,.38),f);m.position.set(-.032,0,0),m.rotation.y=-Math.PI/2,_.add(m)}for(const f of[-.5,.5])h?(X(e,qe(.7,.025,.025),Gt,.55,.92,f),X(e,qe(.7,.025,.025),Gt,.55,.8,f)):(X(e,Ne(.7,.26,.04,.03),c?ce(11910081,.45):Ja,.55,.88,f),c||X(e,qe(.5,.05,.045),ce(2314135,.5),.55,.8,f))}const r=s.bed==="bois"?.64:.72,a=new Ue;a.position.set(.16,r+.02,0),e.add(a),X(a,Ne(.84,.08,.86,.035),ce(s.sheet,.95),.42,.04,0),X(e,Ne(1.45,.05,.98,.04),t,-.25,s.bed==="bois"?.66:.73,0);for(const c of[.495,-.495])X(e,qe(1.45,.3,.012),t,-.25,s.bed==="bois"?.53:.6,c,!1);if(s.blanket&&s.blanket!==s.sheet){X(e,Ne(.9,.04,1,.03),ce(s.blanket,.95),-.5,(s.bed==="bois"?.66:.73)+.03,0);for(const c of[.505,-.505])X(e,qe(.9,.25,.012),ce(s.blanket,.95),-.5,.62,c,!1)}if(X(a,Ne(.34,.13,.66,.06),n,.66,.14,0),e.userData.hinge=a,X(e,Ne(.05,.03,.12,.012),ce(15132384,.5),.3,.78,-.42),X(e,At(.012,.012),ce(13777711,.4),.3,.8,-.42),s.trapeze){X(e,At(.025,1.7),Gt,1.12,1.4,-.42);const c=X(e,At(.022,1.15),Gt,.6,2.2,-.2);c.rotation.z=Math.PI/2+.25,c.rotation.y=.35,X(e,At(.004,.5),ce(7829367,.6),.2,1.88,0,!1);const h=X(e,new gr(.1,.012,8,24,Math.PI),ce(3883336,.5),.2,1.62,0);h.rotation.z=Math.PI}const o=new Ue;o.name="elevation";for(const c of[...e.children])c.position.y>=.4&&o.add(c);e.add(o);const l=[-.5,.5].map(c=>X(e,At(.035,1),Gt,c,.42,0));return e.userData.lift=o,e.userData.jacks=l,e}function sM(s,e,t){const n=new Ue;if(n.position.set(Be/2-.02,0,fn),n.rotation.y=-Math.PI/2,s.add(n),e.headRail){X(n,Ne(2.6,.22,.09,.03),ce(e.bed==="ortho"?10134443:14672863,.45),0,1.75,.05);for(let o=0;o<6;o++)X(n,qe(.07,.07,.02),ce(16448250,.4),-.9+o*.17,1.75,.1);X(n,qe(1.8,.02,.01),Qs(16774365,1.6),0,1.88,.07,!1)}else{X(n,Ne(1.7,.55,.22,.02),ce(16250869,.4),0,1.95,.11),X(n,qe(1.6,.012,.01),Qs(12574975,2),0,1.66,.215,!1),X(n,qe(1.6,.012,.01),Qs(16773840,2),0,2.235,.18,!1);for(const o of[-.75,-.62,.45,.58,.71])X(n,Ne(.1,.1,.025,.01),ce(16448250,.4),o,1.3,.012)}t.has("oxygene")&&(X(n,Ne(.06,.18,.06,.02),ce(3120735,.4),-.4,1.45,.06),X(n,At(.025,.12),new Si({color:15269872,transparent:!0,opacity:.6,roughness:.1}),-.4,1.3,.06)),t.has("aspiration")&&(X(n,At(.06,.2),new Si({color:15660287,transparent:!0,opacity:.65,roughness:.1}),-.72,1.35,.08),X(n,At(.064,.03),ce(2842526,.5),-.72,1.46,.08));const i=new Ue;i.position.set(.75,1.42,.03),i.visible=t.has("tensiometre"),n.add(i),X(i,Ne(.18,.22,.05,.02),ce(2962232,.45),0,0,0);const r=new Ee(new ra(.075,40),new ot({map:tM(),roughness:.3}));r.position.set(0,.02,.027),i.add(r);const a=new Ee(new _r(new sa(Array.from({length:60},(o,l)=>new E(Math.cos(l*.9)*.02,-.12-l*.006,.03+Math.sin(l*.9)*.02))),120,.004,6),ce(2238251,.5));if(i.add(a),X(i,Ne(.16,.1,.07,.02),ce(2962232,.5),0,-.55,.03),X(i,Ne(.13,.05,.05,.015),ce(2838415,.7),0,-.5,.04),t.has("gants")){for(let o=0;o<3;o++)X(n,Ne(.12,.25,.09,.01),ce([7311313,8044682,14995562][o],.6),1.12+o*.14-.14,1.12,.05);X(n,Ne(.42,.04,.1,.01),ce(14146526,.5),1.12,.98,.05)}t.has("objets-piquants")&&(X(n,Ne(.2,.24,.13,.02),ce(15975424,.5),-1.15,1,.08),X(n,Ne(.21,.05,.14,.02),ce(12593183,.5),-1.15,1.14,.08))}function rM(s,e,t,n){const i=new Ue;i.position.set(e,0,t),i.rotation.y=n,s.add(i);for(let l=0;l<5;l++){const c=X(i,qe(.32,.025,.04),ce(5991290,.5),Math.cos(l*2*Math.PI/5)*.16,.06,Math.sin(l*2*Math.PI/5)*.16);c.rotation.y=-l*2*Math.PI/5}X(i,At(.025,.9),Gt,0,.5,0),X(i,Ne(.26,.1,.16,.02),ce(14673128,.5),0,.62,0);const r=X(i,Ne(.3,.24,.14,.03),ce(15659507,.4),0,1.06,0),a=new Ee(new Ct(.18,.12),new ot({map:md(l=>{l.font="bold 70px sans-serif",l.fillStyle="#ffd34a",l.fillText("118/76",40,120),l.font="bold 56px sans-serif",l.fillStyle="#3ee07a",l.fillText("♥ 78",40,220),l.fillStyle="#3fc6ff",l.fillText("SpO₂ 97",230,220),l.fillStyle="#ffffff",l.fillText("37,0 °C",40,320)}),emissive:16777215,emissiveIntensity:.6}));a.position.set(0,.03,.071),r.add(a),X(i,Ne(.04,.12,.05,.015),ce(16250871,.4),.18,1.06,.02),X(i,Ne(.035,.06,.04,.012),ce(2845880,.4),.18,1.14,.02),X(i,Ne(.05,.03,.04,.012),ce(3832789,.4),-.18,1,.04),X(i,Ne(.14,.04,.08,.015),ce(2508415,.7),0,.68,.02);const o=new Ee(new _r(new sa([new E(-.12,1.18,.07),new E(-.16,.98,.09),new E(-.1,.85,.08),new E(-.02,.98,.09),new E(0,1.18,.07)]),40,.006,6),ce(1842204,.4));i.add(o),X(i,At(.02,.012),Gt,-.1,.84,.08)}function qu(s,e,t,n,i=0){const r=new Ue;r.position.set(e,t,n),r.rotation.y=i,s.add(r);const a=new co;a.absellipse(0,0,.13,.07,0,Math.PI*2,!1,0);const o=new lo;o.absellipse(.015,0,.11,.05,0,Math.PI*2,!1,0),a.holes.push(o);const l=new Ee(new qc(a,{depth:.035,bevelEnabled:!1,curveSegments:32}),ce(13225425,.25,.8));l.rotation.x=-Math.PI/2,l.castShadow=!0,r.add(l);const c=new Ee(new Yc(new co().absellipse(0,0,.125,.065,0,Math.PI*2,!1,0)),ce(13225425,.25,.8));c.rotation.x=-Math.PI/2,c.position.y=.002,r.add(c);const h=new Ue;h.position.set(0,.017,0),h.rotation.set(0,.15,Math.PI/2),r.add(h);const u=si(256,64,d=>{d.clearRect(0,0,256,64),d.fillStyle="rgba(255,255,255,0)",d.fillRect(0,0,256,64),d.fillStyle="#1b1b1b";for(let g=0;g<=10;g++){const _=6+g*5;d.fillRect(0,_,g%5?30:60,2)}d.font="bold 10px sans-serif",d.fillText("5 mL",70,58)});X(h,At(.0085,.075,24),new Si({color:16777215,map:u,transparent:!0,opacity:.55,roughness:.05}),0,0,0,!1),X(h,At(.007,.07),ce(16053492,.4),0,-.045,0,!1),X(h,At(.0068,.004),ce(2763306,.5),0,-.01,0,!1),X(h,qe(.03,.003,.012),ce(16053492,.4),0,-.081,0,!1),X(h,qe(.032,.003,.014),new Si({color:16777215,transparent:!0,opacity:.6}),0,-.037,0,!1),X(h,new zn(.0025,.004,.012,12),new Si({color:16777215,transparent:!0,opacity:.6}),0,.043,0,!1),X(h,new zn(.0025,.0045,.035,12),ce(15895592,.5),0,.066,0,!1);for(const[d,g]of[[-.07,.11],[-.03,.12]])X(r,qe(.03,.003,.03),ce(16777215,.8),d,.0015,g,!1);const f=new Ee(qe(.05,.2,.05),new Ai({transparent:!0,opacity:0,depthWrite:!1}));return f.userData.grabTarget=h,h.add(f),h.userData.grabbable={label:"Seringue",restHeight:.0095},h}const ki=class ki{constructor(e,t=45,n=0){It(this,"back");It(this,"height");It(this,"targetBack");It(this,"targetHeight");this.bed=e,this.back=this.targetBack=t*Math.PI/180,this.height=this.targetHeight=n,this.apply()}nudgeBack(e){this.targetBack=tn.clamp(this.targetBack+e*Math.PI/180,0,ki.MAX_BACK)}nudgeHeight(e){this.targetHeight=tn.clamp(this.targetHeight+e,ki.MIN_H,ki.MAX_H)}update(e){const t=(r,a,o)=>Math.abs(a-r)<=o*e?a:r+Math.sign(a-r)*o*e,n=t(this.back,this.targetBack,.35),i=t(this.height,this.targetHeight,.08);(n!==this.back||i!==this.height)&&(this.back=n,this.height=i,this.apply())}get moving(){return this.back!==this.targetBack||this.height!==this.targetHeight}apply(){this.bed.userData.hinge.rotation.z=this.back,this.bed.userData.lift.position.y=this.height;for(const e of this.bed.userData.jacks){const t=.12+this.height+.12;e.scale.y=Math.max(.05,t),e.position.y=.38+t/2-.12}}};It(ki,"MAX_BACK",75*Math.PI/180),It(ki,"MIN_H",-.12),It(ki,"MAX_H",.2);let bc=ki;function aM(s="moderne",e,t="Nadia",n,i){const r=Ro(n),a=th.find(x=>x.id===s).environment,o=new Set((e==null?void 0:e.equipment)??Dd(a)),l={...po[s],tv:o.has("television"),monitor:o.has("moniteur"),pump:o.has("pompe"),overbed:o.has("table-lit"),trapeze:o.has("potence-traction")},c=[],h=new Ue;nM(h,l,(e==null?void 0:e.roomNumber)||"312",r);const u=iM(l);u.position.set(Be/2-1.1,0,fn),h.add(u);const f=new bc(u,(i==null?void 0:i.backrest)??45,(i==null?void 0:i.height)??0),d=(e==null?void 0:e.roomNumber)||"312";if(Dy(h,.45,Tt,Math.PI),ln(h,.2,.28,ed(),-.6,1.68,Tt-.012,Math.PI),Gr(h,1.95,Tt,Math.PI,"Toilette","WC",l.wall===15328936?10123862:15196888,.9),Gr(h,-Be/2,.95,Math.PI/2,"Penderie","▥",l.wall===15328936?10123862:14273976,.8),ln(h,1.2,.8,Iy(d,t),-Be/2+.012,1.45,-1.75,Math.PI/2),td(h,-Be/2+.01,2.3,-1.75,Math.PI/2),Uy(h,Be/2-2.15,Be/2-.05,fn,Nt),Ny(h,Be/2,Be/2-2.35,fn+.8,fn-.8,Nt,l.wall===15328936?12174502:13621731),s==="moderne"||s==="equipee"){const x=new Ue;x.position.set(-Be/2+.45,0,-2.95),x.rotation.y=Math.PI/2,h.add(x);const v=ce(7176085,.85);X(x,Ne(1.5,.22,.75,.06),v,0,.32,0),X(x,Ne(1.5,.45,.16,.06),v,0,.62,-.3);for(const y of[-.78,.78])X(x,Ne(.12,.38,.75,.05),v,y,.4,0);X(x,qe(1.4,.18,.6),ce(3817285,.6),0,.12,.02)}sM(h,l,o);const g=new Ue;g.position.set(Be/2-.32,0,fn-.85),h.add(g),X(g,Ne(.48,.78,.46,.02),ce(l.cabinet,.5),0,.39,0),l.cabinetDoor&&X(g,qe(.4,.4,.01),ce(l.cabinetDoor,.45),0,.3,.232,!1),X(g,Ne(.18,.06,.15,.02),ce(14209728,.5),-.05,.81,.12),!l.overbed&&o.has("seringue")&&c.push(qu(g,-.05,.78,-.08,-Math.PI/2));const _=new Ue;_.position.set(.55,0,-3.15),_.rotation.y=.3,h.add(_);const m=ce(l.chair,.45);X(_,Ne(.6,.13,.58,.05),m,0,.47,0),X(_,Ne(.6,.72,.12,.05),m,0,.86,-.26);for(const x of[-.33,.33])X(_,Ne(.07,.04,.5,.02),m,x,.66,0),X(_,At(.015,.62),Gt,x,.33,.2),X(_,At(.015,.62),Gt,x,.33,-.2);if(l.overbed){const x=new Ue;x.position.set(Be/2-1.75,0,fn),h.add(x),X(x,Ne(.9,.035,.42,.015),ce(13082219,.5),0,1,0),X(x,At(.025,.95),Gt,0,.52,-.62),X(x,qe(.05,.03,.62),Gt,0,.98,-.33),X(x,qe(.6,.04,.06),Gt,0,.05,-.62),X(x,At(.035,.11),new Si({color:16777215,transparent:!0,opacity:.5,roughness:.1}),.3,1.07,.08),o.has("seringue")&&c.push(qu(x,-.12,1.0175,0,.2))}if(l.pump){const x=new Ue;x.position.set(Be/2-.35,0,fn+.85),h.add(x),X(x,At(.015,2.05),Gt,0,1.03,0);for(let v=0;v<5;v++){const y=X(x,qe(.3,.02,.03),Gt,Math.cos(v*2*Math.PI/5)*.15,.06,Math.sin(v*2*Math.PI/5)*.15);y.rotation.y=-v*2*Math.PI/5}X(x,qe(.3,.015,.015),Gt,0,2.02,0),X(x,Ne(.11,.2,.04,.02),new Si({color:15660799,transparent:!0,opacity:.75,roughness:.2}),.12,1.86,0),X(x,At(.003,.9),ce(15266040,.3),.12,1.33,.01,!1),X(x,Ne(.17,.24,.12,.02),ce(3104158,.45),0,1.25,.08),X(x,qe(.1,.07,.005),Qs(3837912,.8),0,1.3,.142,!1)}if(l.monitor){const x=new Ue;x.position.set(Be/2-.45,0,fn-1.4),x.rotation.y=-.5,h.add(x),X(x,Ne(.5,.85,.45,.02),Ja,0,.47,0);for(const y of[.25,.5,.75])X(x,qe(.42,.18,.01),ce(7311298,.5),0,y,.226,!1);X(x,Ne(.44,.34,.12,.02),ce(14672870,.45),0,1.1,0);const v=Q1();X(x,qe(.38,.27,.005),new ot({map:v,emissive:16777215,emissiveMap:v,emissiveIntensity:.9}),0,1.1,.062,!1)}if(o.has("chariot-signes-vitaux")&&rM(h,-Be/2+.4,-1,Math.PI/2),l.tv){const x=new Ue;x.position.set(-Be/2+.55,2.1,Mt+.55),x.rotation.y=.75,h.add(x),X(x,Ne(.62,.45,.42,.03),ce(4862498,.5),0,0,0),X(x,qe(.5,.36,.01),ce(1843236,.2,.2),0,0,.215),X(h,qe(.05,.05,.55),Gt,-Be/2+.3,1.88,Mt+.35)}if(l.ac){const x=new Ue;x.position.set(-Be/2+.5,0,-2),h.add(x),X(x,Ne(.55,.62,.48,.04),ce(15856110,.5),0,.84,0),X(x,qe(.6,.03,.55),ce(15263972,.5),0,.5,0);for(const v of[-.26,.26])X(x,At(.015,.5),Gt,v,.25,0)}h.add(new Ao(r.hemi.sky,r.hemi.ground,r.hemi.intensity));const p=new oa(r.sun.color,r.sun.intensity);if(p.position.set(r.sun.position[0],r.sun.position[1],Mt+r.sun.position[2]),p.target.position.set(.8,0,-.8),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),p.shadow.bias=-4e-4,p.shadow.normalBias=.02,Object.assign(p.shadow.camera,{left:-4.5,right:4.5,top:4.5,bottom:-4.5,near:.5,far:12}),h.add(p,p.target),r.nightLight){const x=new ms(16761992,r.nightLight,3.8,1.6);x.position.set(Be/2-.25,.5,fn-.9),h.add(x)}for(const x of[-2.6,-.4]){const v=new ms(16774888,r.ceiling,6.5,1.5);v.position.set(.2,Nt-.25,x),h.add(v)}return{group:h,grabbables:c,bed:f}}const oM={minX:-Be/2,maxX:Be/2,minZ:Mt,maxZ:Tt},lM=[{minX:Be/2-2.15,maxX:Be/2,minZ:fn-.5,maxZ:fn+.5},{minX:Be/2-.56,maxX:Be/2,minZ:fn-1.08,maxZ:fn-.62},{minX:.2,maxX:.9,minZ:-3.5,maxZ:-2.8},{minX:-.1,maxX:1,minZ:Tt-.5,maxZ:Tt},{minX:-Be/2,maxX:-Be/2+.9,minZ:-3.75,maxZ:-2.15},{minX:-Be/2,maxX:-Be/2+.65,minZ:-1.3,maxZ:-.7}],cM=s=>po[s].blanket??po[s].sheet,hM=s=>[new E(Be/2-1.1+.13,po[s].bed==="bois"?.64:.72,fn),new E(-1.5,0,-2.4),new E(-1.9,0,-.6)],Qa=(s,e=.85)=>new ot({color:s,roughness:e});function Ur(s,e,t,n,i,r,a,o){const l=new Ee(new xn(s,e,t),Qa(n));return l.position.set(i,r,a),l.castShadow=!0,l.receiveShadow=!0,o.add(l),l}function Yu(s,e,t){const r=new Ee(new Ct(7,7),Qa(t,.95));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,s.add(r);const a=new Ee(new Ct(7,7),Qa(16053490));a.rotation.x=Math.PI/2,a.position.y=2.9,s.add(a);for(const[l,c,h]of[[0,-7/2,0],[0,7/2,Math.PI],[-7/2,0,Math.PI/2],[7/2,0,-Math.PI/2]]){const u=new Ee(new Ct(7,2.9),Qa(e));u.position.set(l,2.9/2,c),u.rotation.y=h,u.receiveShadow=!0,s.add(u)}s.add(new Ao(16775407,9080982,1.15));const o=new oa(16777215,1.4);o.position.set(2.5,4,1.5),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),s.add(o)}const $u={minX:-3.4,maxX:3.4,minZ:-3.4,maxZ:3.4};function uM(s,e,t,n,i){Ay(n);const r=new Ue;switch(s){case"magasin-electronique":return r.add(Jy()),{group:r,slots:t1,seatedSlot:-1,bounds:Qy,obstacles:e1};case"poste-soins":return r.add(Hy(n)),{group:r,slots:Xy,seatedSlot:-1,bounds:Gy,obstacles:Wy};case"domicile":return Yu(r,15722200,10715228),Ur(2,.45,.85,7180200,1.3,.225,-2.3,r),Ur(2,.5,.2,7180200,1.3,.7,-2.65,r),Ur(.9,.42,.6,8018492,.2,.21,-1.6,r),{group:r,slots:[new E(1.3,.45,-2.25),new E(-1.2,0,-1.8)],seatedSlot:0,bounds:$u,obstacles:[]};case"salle-classe":{Yu(r,15133935,10135470),Ur(2.8,1.2,.04,16251386,0,1.5,-3.45,r);for(const a of[-1.2,1.2])Ur(1,.72,.6,13215612,a,.36,-1.9,r);return{group:r,slots:[new E(0,0,-2.9),new E(-1.6,0,-1.4),new E(1.6,0,-1.4)],seatedSlot:-1,bounds:$u,obstacles:[]}}default:{const a=$1(s),o=aM(a,e,t,n,i);return r.add(o.group),{bed:o.bed,grabbables:o.grabbables,group:r,slots:hM(a),seatedSlot:0,seatedPosture:"couche",blanket:cM(a),bounds:oM,obstacles:lM}}}}const Zu=[14726287,10185288,15845542,7226928],Ku=[3811870,1840916,9071178,12170413];function fM(s,e,t,n,i=!1){const r=new Ue,a=s.role.toLowerCase(),o=!i&&/hospitalis|patient|usager|résident|personne soignée|client/.test(a),l=[[2051705,1456732],[3042138,2182465],[6966419,4994922]][e%3],c=Yy(t,{outfit:o?15659766:l[0],outfitDark:o?13226973:l[1],skin:Zu[e%Zu.length],hair:o?Ku[3]:Ku[e%3],hairStyle:o?"degarni":e%2?"chignon":"court",gown:o,stethoscope:!o,blanket:n});r.add(c);const h=Jf(s.name||"Personnage",s.role);h.sprite.position.set(t==="couche"?.45:0,t==="couche"?.95:t==="assis"?1.55:1.98,0),r.add(h.sprite);let u,f=NaN,d=Math.PI/4,g,_=!1;return t!=="assis"&&Y1(i?/vend|conseill|employ|caissi|commis|gérant|représentant/i.test(s.role)?"employe":"client":o?"patient":"infirmiere",t==="couche"?"couche":"debout",Nd(s),Ud(s)).then(m=>{if(u=m,t==="couche"){m.root.rotation.y=-Math.PI/2;const p=new Ee(new nn(1.12,.16,.86,4,.07),new ot({color:n??15331059,roughness:.95}));p.position.set(-.62,.19,0),p.castShadow=p.receiveShadow=!0,r.add(p),g=new Ue,g.position.set(0,.19,0),r.add(g);const x=new Ee(new nn(.26,.07,.86,4,.03),p.material);x.position.set(.06,.13,0),x.castShadow=x.receiveShadow=!0,g.add(x);const v=new Ee(new nn(.1,.075,.88,4,.03),new ot({color:16185074,roughness:.9}));v.position.set(.2,.135,0),g.add(v),g.rotation.z=d}r.remove(c),r.add(m.root),m.setTalking(_),m.setRecline(d)}).catch(m=>console.warn("Avatar réaliste indisponible, silhouette simplifiée conservée",m)),{group:r,character:s,setSpeaking(m){_=m,h.setSpeaking(m),u==null||u.setTalking(m)},update(m){u==null||u.update(m)},bone:m=>u==null?void 0:u.bone(m),setBed:t==="couche"?(m,p)=>{Number.isNaN(f)&&(f=r.position.y),r.position.y=f+p,d=m,u==null||u.setRecline(m),g&&(g.rotation.z=m)}:void 0}}class dM{constructor(e=168,t=96,n=82){It(this,"stage","prendre");It(this,"pressure",0);It(this,"cuff");It(this,"gauge");It(this,"dial");It(this,"dialTexture");It(this,"beatTimer",0);It(this,"flash",0);It(this,"audio");It(this,"onStage");this.systolic=e,this.diastolic=t,this.pulse=n,this.cuff=new Ue,this.cuff.name="brassard";const i=new ot({color:1916787,roughness:.85}),r=new Ee(new zn(.055,.055,.14,24,1,!0),i);r.material.side=Dn,r.castShadow=!0,this.cuff.add(r);const a=new Ee(new xn(.02,.13,.03),new ot({color:14277081,roughness:.9}));a.position.set(.055,0,0),this.cuff.add(a);const o=new ot({color:2236962,roughness:.5}),l=new Ee(new _r(new sa([new E(.05,-.06,0),new E(.12,-.14,.03),new E(.18,-.16,.08)]),20,.005,6),o);this.cuff.add(l);const c=new Ee(new Tn(.03,16,12),new ot({color:1118481,roughness:.6}));c.scale.set(1,1.4,1),c.position.set(.19,-.17,.09),this.cuff.add(c),this.cuff.userData.grabbable={restHeight:.055,label:"Brassard"};const h=document.createElement("canvas");h.width=h.height=512,this.dial=h.getContext("2d"),this.dialTexture=new mr(h),this.dialTexture.colorSpace=ut,this.gauge=new Ue;const u=new Ee(new ra(.17,48),new Ai({map:this.dialTexture}));this.gauge.add(u);const f=new Ee(new gr(.172,.012,10,48),new ot({color:12107460,metalness:.6,roughness:.3}));this.gauge.add(f),this.gauge.visible=!1,this.drawDial()}taken(){this.stage==="prendre"&&this.setStage("placer")}placeOn(e,t,n){const i=n.clone().lerp(t,.62),r=t.clone().sub(n).normalize();this.cuff.removeFromParent(),e.parent&&e.attach(this.cuff);const a=new gt().setFromUnitVectors(new E(0,1,0),r),o=e.getWorldQuaternion(new gt).invert();this.cuff.quaternion.copy(o.multiply(a)),this.cuff.position.copy(e.worldToLocal(i.clone()));const l=e.getWorldScale(new E);this.cuff.scale.set(1/l.x,1/l.y,1/l.z),this.gauge.visible=!0,this.setStage("gonfler")}pump(){var e;this.stage==="gonfler"&&(this.unlockAudio(),this.pressure=Math.min(200,this.pressure+30),this.drawDial(),this.pressure>=180&&((e=this.onStage)==null||e.call(this,this.stage)))}readyToDeflate(){return this.stage==="gonfler"&&this.pressure>=180}deflate(){this.readyToDeflate()&&(this.unlockAudio(),this.setStage("degonfler"))}update(e){if(this.stage!=="degonfler"){this.flash>0&&(this.flash=Math.max(0,this.flash-e*4),this.drawDial());return}this.pressure=Math.max(0,this.pressure-4*e);const t=this.pressure<=this.systolic&&this.pressure>=this.diastolic;this.beatTimer-=e,this.beatTimer<=0&&(this.beatTimer=60/this.pulse,t&&(this.flash=1,this.thump())),this.flash=Math.max(0,this.flash-e*4),this.drawDial(),this.pressure<this.diastolic-16&&(this.pressure=0,this.drawDial(),this.setStage("termine"))}get hearing(){return this.stage==="degonfler"&&this.pressure<=this.systolic&&this.pressure>=this.diastolic}dispose(){var e;this.cuff.removeFromParent(),this.gauge.removeFromParent(),(e=this.audio)==null||e.close()}setStage(e){var t;this.stage=e,this.drawDial(),(t=this.onStage)==null||t.call(this,e)}unlockAudio(){try{this.audio??(this.audio=new AudioContext),this.audio.resume()}catch{}}thump(){const e=this.audio;if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(95,t),n.frequency.exponentialRampToValueAtTime(45,t+.12),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.6,t+.01),i.gain.exponentialRampToValueAtTime(1e-4,t+.16),n.connect(i).connect(e.destination),n.start(t),n.stop(t+.18)}drawDial(){const e=this.dial,t=256;e.clearRect(0,0,512,512),e.fillStyle="#f7f7f2",e.beginPath(),e.arc(t,t,250,0,Math.PI*2),e.fill();const n=r=>(-240+r/300*300)*(Math.PI/180)+Math.PI/2-Math.PI/2;e.strokeStyle="#1b1b1b",e.fillStyle="#1b1b1b",e.textAlign="center",e.textBaseline="middle";for(let r=0;r<=300;r+=2){const a=n(r)-Math.PI/2,o=r%20===0,l=r%10===0,c=228,h=o?196:l?208:216;e.lineWidth=o?5:2,e.beginPath(),e.moveTo(t+Math.cos(a)*h,t+Math.sin(a)*h),e.lineTo(t+Math.cos(a)*c,t+Math.sin(a)*c),e.stroke(),o&&(e.font="bold 30px sans-serif",e.fillText(String(r),t+Math.cos(a)*165,t+Math.sin(a)*165))}e.font="bold 26px sans-serif",e.fillText("mm Hg",t,t+95),this.hearing||this.flash>0?(e.fillStyle=`rgba(200,30,40,${.35+this.flash*.65})`,e.font="bold 40px sans-serif",e.fillText("♥  toc",t,t-90)):this.stage==="degonfler"&&(e.fillStyle="#777",e.font="26px sans-serif",e.fillText("j'écoute…",t,t-90));const i=n(this.pressure)-Math.PI/2;e.strokeStyle="#c0161f",e.lineWidth=8,e.lineCap="round",e.beginPath(),e.moveTo(t-Math.cos(i)*30,t-Math.sin(i)*30),e.lineTo(t+Math.cos(i)*200,t+Math.sin(i)*200),e.stroke(),e.fillStyle="#333",e.beginPath(),e.arc(t,t,16,0,Math.PI*2),e.fill(),this.dialTexture.needsUpdate=!0}}const Wi=document.getElementById("status"),Qr="Mode ordinateur : W A S D ou flèches pour te déplacer, glisse la souris pour regarder, clique sur un choix (touches 1 à 6) ou sur la seringue pour la prendre.",zs=document.getElementById("enter"),vt=new lx({antialias:!0});vt.setPixelRatio(Math.min(window.devicePixelRatio,2));vt.setSize(window.innerWidth,window.innerHeight);vt.shadowMap.enabled=!0;vt.shadowMap.type=nf;vt.toneMapping=sf;vt.toneMappingExposure=.95;vt.xr.enabled=!0;vt.xr.setReferenceSpaceType("local-floor");document.body.appendChild(vt.domElement);const bi=new Lf,pM=new uc(vt);bi.environment=pM.fromScene(new wy,.04).texture;bi.environmentIntensity=.3;bi.background=new Fe(922648);const vn=new dn(70,window.innerWidth/window.innerHeight,.05,50);vn.position.set(0,1.6,.2);vn.lookAt(0,1.35,-1.4);const ri=new Ue;ri.add(vn);bi.add(ri);let qt=null,ai=[],wc={bounds:{minX:-3,maxX:3,minZ:-3,maxZ:3},obstacles:[]},ea=[];const An=new Ue;An.position.set(-.15,1.45,-1.25);An.rotation.y=.12;bi.add(An);const Xi=new Ey;Xi.mesh.position.y=.2;An.add(Xi.mesh);let mo=[];function mM(s){const e=new Set,t=n=>{if(n.userData.sharedResources)return;const i=n;if(i.geometry&&i.geometry.dispose(),i.material)for(const r of Array.isArray(i.material)?i.material:[i.material]){for(const a of Object.values(r))a!=null&&a.isTexture&&e.add(a);r.dispose()}n.children.forEach(t)};t(s),e.forEach(n=>n.dispose())}let ls,nh=[];const ih=()=>[...mo,...nh];function gM(s){const e=new Ue,t=new Ee(new Ct(.66,.3),new Ai({color:1977398,transparent:!0,opacity:.85}));e.add(t);const n=Jf("Lit électrique","Dossier · Hauteur");return n.sprite.position.set(0,.24,0),n.sprite.scale.multiplyScalar(.6),e.add(n.sprite),nh=[["Dossier ▲",()=>s.nudgeBack(15)],["Dossier ▼",()=>s.nudgeBack(-15)],["Monter ▲",()=>s.nudgeHeight(.08)],["Descendre ▼",()=>s.nudgeHeight(-.08)]].map(([r,a],o)=>{const l=new jf(r,a,"normal",.3,.11);return l.mesh.position.set(o<2?-.16:.16,o%2?-.065:.065,.005),e.add(l.mesh),l}),e}function gd(s,e,t,n,i){qt&&(bi.remove(qt),mM(qt)),ur(!0);const r=e.find(o=>!/hospitalis|patient|usager|résident|personne soignée|client/i.test(o.role)),a=uM(s,t,r==null?void 0:r.name.split(" ")[0],n,i);if(ls=a.bed,nh=[],bi.environmentIntensity=Ro(n).environment,ai=a.grabbables??[],qt=a.group,wc=a,ri.position.set(0,0,0),ri.rotation.set(0,0,0),An.position.set(-.15,1.45,-1.25),An.rotation.set(0,.12,0),ea=e.map((o,l)=>{const c=l===a.seatedSlot?a.seatedPosture??"assis":"debout",h=fM(o,l,c,a.blanket,s.startsWith("magasin")),u=a.slots[l%a.slots.length];return h.group.position.copy(u),c!=="couche"&&h.group.lookAt(new E(0,u.y,0)),qt.add(h.group),h}),ls){const o=gM(ls);o.position.set(.5,1.12,-2.2),o.rotation.set(0,-Math.PI/2,0),o.rotateX(-.25),o.scale.setScalar(.7),qt.add(o)}bi.add(qt)}function tr(s){for(const e of mo)An.remove(e.mesh);mo=s.slice(0,6).map((e,t)=>{const n=new jf(e.label,e.onSelect,e.tone??"normal");return n.mesh.position.set(0,-.25-t*.14,.01),An.add(n.mesh),n})}let ta=[],Xt=null,Wt=null,Nr=0,Kn=(()=>{try{return localStorage.getItem("simfp.eleve")??""}catch{return""}})();const sh=document.getElementById("nom"),Ec=document.getElementById("nom-champ");function _d(){document.getElementById("eleve-nom").textContent=Kn||"—"}function vd(){Ec.value=Kn,sh.classList.add("ouvert"),setTimeout(()=>Ec.focus(),50)}document.getElementById("nom-carte").addEventListener("submit",s=>{s.preventDefault(),Kn=Ec.value.trim().slice(0,40);try{localStorage.setItem("simfp.eleve",Kn)}catch{}if(sh.classList.remove("ouvert"),_d(),Xt&&Wt){const e=ta.find(t=>t.id===Xt.id);e&&(Xt=ef(e,Kn)),hs()}});document.getElementById("eleve-modifier").addEventListener("click",vd);_d();!Kn&&!new URLSearchParams(location.search).has("camera")&&vd();const go=()=>Kn?`Élève : ${Kn} · `:"";let ns=0,Pt=null;const Tc=new Set;function Co(){Pt&&(ai=ai.filter(s=>s!==Pt.cuff),Pt.dispose(),Pt=null)}const xd=()=>ea.find(s=>s.setBed);function ju(){Co();const s=new dM;Pt=s,s.cuff.position.set(.95,.86,-1.88),s.cuff.rotation.set(0,0,Math.PI/2),qt==null||qt.add(s.cuff),ai=[...ai,s.cuff],s.gauge.position.set(.98,.05,.02),An.add(s.gauge),s.onStage=()=>hs()}function yd(s){const e=xd();if(!Pt||Pt.stage!=="placer"||!e)return!1;const t=e.bone("Bip01 L UpperArm"),n=e.bone("Bip01 L Forearm");if(!t||!n)return!1;const i=t.getWorldPosition(new E),r=n.getWorldPosition(new E);return s.distanceTo(i.clone().lerp(r,.6))<.55?((Rt==null?void 0:Rt.object)===Pt.cuff&&(Rt=null),Pt.placeOn(t,r,i),ai=ai.filter(o=>o!==Pt.cuff),Wi.textContent=Qr,!0):!1}let ks=null;function cs(){Co(),Xt=null,Wt=null,gd(Ga[Nr].environment,[]);const s=[...new Set(ta.map(i=>ph(i)))],e={label:`Visiter : ${Ga[Nr].label} (${Nr+1}/${Ga.length}) ▸`,onSelect:()=>{Nr=(Nr+1)%Ga.length,cs()}};if(s.length>1&&!ks){Xi.draw({eyebrow:"SimFP VR",title:"Choisis ton programme",body:"Sélectionne ton DEP pour voir ses mises en situation. Pointe un bouton avec la manette ou ta main, puis appuie sur la gâchette ou pince les doigts.",footer:`${go()}Contenu fictif · formation professionnelle`}),tr([...s.slice(0,5).map(i=>({label:i,onSelect:()=>{ks=i,ns=0,cs()},tone:"primary"})),e]);return}const t=ta.filter(i=>!ks||ph(i)===ks);Xi.draw({eyebrow:ks??"SimFP VR",title:"Choisis une mise en situation",body:t.length?"Pointe un scénario avec la manette ou ta main, puis appuie sur la gâchette ou pince les doigts. Pour te déplacer : marche, ou utilise la manette gauche; la manette droite fait pivoter.":"Aucun scénario disponible.",footer:`${go()}Contenu fictif · formation professionnelle`});const n=Math.max(1,Math.ceil(t.length/3));ns%=n,tr([...t.slice(ns*3,ns*3+3).map(i=>({label:i.title,onSelect:()=>Po(i),tone:"primary"})),...n>1?[{label:`Autres scénarios (${ns+1}/${n}) ▸`,onSelect:()=>{ns=(ns+1)%n,cs()}}]:[],...s.length>1?[{label:"◂ Changer de programme",onSelect:()=>{ks=null,cs()}}]:[],e])}function Po(s){Co(),Tc.clear(),Xt=ef(s,Kn),Wt=kd(s),gd(s.environment,s.characters,s.roomOptions,s.timeOfDay,s.bedPosition),hs()}function hs(){var i;if(!Xt||!Wt)return;const s=Vd(Xt,Wt),e=Xt.characters.find(r=>r.id===s.speakerId);for(const r of ea)r.setSpeaking(r.character.id===s.speakerId);const t=Wt.path.length>=2?Wt.path[Wt.path.length-2]:void 0,n=Wt.lastFeedback?{text:Wt.lastFeedback,tone:((t==null?void 0:t.scoreDelta)??0)>0?"good":((t==null?void 0:t.scoreDelta)??0)<0?"bad":"neutral"}:void 0;if(Wt.finished){const r=Hd(Xt,Wt);Xi.draw({eyebrow:`${r.passed?"Réussite":"À revoir"}${Kn?` · ${Kn}`:""}`,title:s.title,body:`${s.text}

Score : ${r.score} sur ${r.maxScore} (seuil : ${Xt.passingScore}) · ${r.steps} décisions.`,feedback:n,footer:Xt.title}),tr([{label:"Recommencer",onSelect:()=>Po(Xt),tone:"primary"},{label:"Revoir mes choix",onSelect:_M},{label:"Autre scénario",onSelect:cs}]);return}if(s.action==="pression-arterielle"&&!Tc.has(s.id)){Pt||ju();const r=Pt,o={prendre:"1. Prends le brassard posé sur le lit (clic dessus, ou bouton de préhension de la manette).",placer:`2. Approche le brassard du bras gauche de ${((i=xd())==null?void 0:i.character.name)??"la personne"}, 2 à 3 cm au-dessus du pli du coude, puis lâche-le (clic sur le bras).`,gonfler:r.readyToDeflate()?`3. Le brassard est gonflé à ${Math.round(r.pressure)} mm Hg. Dégonfle lentement et repère le premier bruit, puis la disparition des bruits.`:`3. Gonfle le brassard avec la poire jusqu'à environ 180 mm Hg (${Math.round(r.pressure)} mm Hg).`,degonfler:"4. Dégonflage lent… Observe l'aiguille : note la valeur au premier « toc » et quand les bruits disparaissent.",termine:"Mesure terminée. Retiens les deux valeurs que tu as repérées."};Xi.draw({eyebrow:Xt.title,title:s.title,body:`${s.text}

${o[r.stage]}`,feedback:n,footer:`${go()}Score : ${Wt.score}`});const l=[];r.stage==="gonfler"&&!r.readyToDeflate()&&l.push({label:"Presser la poire (+30 mm Hg)",onSelect:()=>{r.pump(),hs()},tone:"primary"}),r.readyToDeflate()&&l.push({label:"Dégonfler lentement",onSelect:()=>r.deflate(),tone:"primary"}),r.stage==="termine"&&l.push({label:"Continuer",onSelect:()=>{Tc.add(s.id),Co(),hs()},tone:"primary"}),r.stage!=="degonfler"&&l.push({label:"Recommencer la mesure",onSelect:()=>{ju(),hs()}}),tr(l);return}Xi.draw({eyebrow:Xt.title,title:s.title,speaker:e?`${e.name} · ${e.role}`:void 0,body:s.text,feedback:n,footer:`${go()}Score : ${Wt.score}`}),tr(s.choices.map(r=>({label:r.label,onSelect:()=>{Wt=Gd(Xt,Wt,r.id),hs()}})))}function _M(){if(!Xt||!Wt)return;const s=Wt.path.filter(e=>e.choiceId&&e.feedback).map(e=>{const n=Xt.nodes.find(i=>i.id===e.nodeId).choices.find(i=>i.id===e.choiceId);return`${e.scoreDelta&&e.scoreDelta>0?"✓":e.scoreDelta&&e.scoreDelta<0?"✗":"•"} ${n.feedback}`});Xi.draw({eyebrow:"Retour sur le parcours",title:Xt.title,body:s.join(`
`)||"Aucune rétroaction.",footer:`Score : ${Wt.score}`}),tr([{label:"Recommencer",onSelect:()=>Po(Xt),tone:"primary"},{label:"Autre scénario",onSelect:cs}])}let Rt=null;const wl=new Map,nr=[];function vM(s){return wl.has(s)||wl.set(s,{parent:s.parent,position:s.position.clone(),quaternion:s.quaternion.clone()}),wl.get(s)}function Md(s,e,t=!1){ur(!0);const n=vM(s);Rt={object:s,home:n},Pt&&s===Pt.cuff&&Pt.taken();const i=nr.findIndex(r=>r.object===s);i>=0&&nr.splice(i,1),t?(vn.add(s),s.position.set(.17,-.16,-.42),s.rotation.set(.2,-.5,Math.PI/2-.3)):e.attach(s),Wi.textContent=t?Pt&&s===Pt.cuff?"Brassard en main : clique sur le bras de la personne pour le placer.":"Seringue en main : clique sur une surface pour la poser, ou touche R pour la remettre dans le plateau.":Wi.textContent}function ur(s=!1){var t;if(!Rt)return;const{object:e}=Rt;if(!(!s&&Pt&&e===Pt.cuff&&yd(e.getWorldPosition(new E)))){if(s||!qt)Rt.home.parent.add(e),e.position.copy(Rt.home.position),e.quaternion.copy(Rt.home.quaternion);else{qt.attach(e);const n=e.getWorldPosition(new E),r=new Zf(n.clone().add(new E(0,.05,0)),new E(0,-1,0),0,5).intersectObject(qt,!0).find(a=>!bd(a.object,e)&&a.object.material&&!a.object.material.transparent);Sd(e,n.x,n.z),nr.push({object:e,targetY:((r==null?void 0:r.point.y)??0)+(((t=e.userData.grabbable)==null?void 0:t.restHeight)??.01)})}Rt=null}}function Sd(s,e,t){const n=new zt().setFromQuaternion(s.getWorldQuaternion(new gt),"YXZ").y,i=s.parent.getWorldQuaternion(new gt).invert();s.quaternion.copy(i.multiply(new gt().setFromEuler(new zt(0,n,Math.PI/2,"YXZ")))),s.position.x=e,s.position.z=t}function bd(s,e){for(let t=s;t;t=t.parent)if(t===e)return!0;return!1}function xM(s,e=.16){let t,n=e;for(const i of ai){const r=i.getWorldPosition(new E).distanceTo(s);r<n&&(t=i,n=r)}return t}function rh(s){const e=s.intersectObjects(ai,!0)[0];return e?ai.find(t=>bd(e.object,t)):void 0}const On=new Zf,qs=new Pe;function wd(s,e){On.set(s,e);const t=On.intersectObjects(ih().map(n=>n.mesh),!1)[0];return t==null?void 0:t.object.userData.button}const yM=[0,1].map(s=>{const e=vt.xr.getController(s),t=new Nf(new kt().setFromPoints([new E(0,0,0),new E(0,0,-4)]),new Vc({color:4891647}));e.add(t);let n=!1;const i=()=>{const r=new E().setFromMatrixPosition(e.matrixWorld);qs.identity().extractRotation(e.matrixWorld),On.set(r,new E(0,0,-1).applyMatrix4(qs)),On.far=.6;const a=xM(r)??rh(On);return On.far=1/0,a?(Md(a,e),!0):!1};return e.addEventListener("squeezestart",()=>{i()}),e.addEventListener("squeezeend",()=>{Rt&&Rt.object.parent===e&&ur()}),e.addEventListener("selectstart",()=>{n=!Rt&&i()}),e.addEventListener("selectend",()=>{n&&Rt&&Rt.object.parent===e&&ur()}),e.addEventListener("select",()=>{var a;if(n){n=!1;return}qs.identity().extractRotation(e.matrixWorld);const r=new E(0,0,-1).applyMatrix4(qs);(a=wd(new E().setFromMatrixPosition(e.matrixWorld),r))==null||a.onSelect()}),ri.add(e),e}),Ju=new ee;let na;const ii={yaw:0,pitch:-.12};let Ln=null;function _o(){ii.pitch=Math.max(-1.1,Math.min(1.1,ii.pitch)),vn.rotation.set(ii.pitch,ii.yaw,0,"YXZ")}_o();let Ed=!1;function Td(s){var e;Ju.set(s.clientX/window.innerWidth*2-1,-(s.clientY/window.innerHeight)*2+1),On.setFromCamera(Ju,vn),na=(e=On.intersectObjects(ih().map(t=>t.mesh),!1)[0])==null?void 0:e.object.userData.button,Ed=!na&&!Rt&&!!rh(On)}vt.domElement.addEventListener("pointerdown",s=>{Ln={x:s.clientX,y:s.clientY,yaw:ii.yaw,pitch:ii.pitch,moved:!1},vt.domElement.setPointerCapture(s.pointerId)});vt.domElement.addEventListener("pointermove",s=>{if(Ln){const e=s.clientX-Ln.x,t=s.clientY-Ln.y;if(Math.abs(e)+Math.abs(t)>6&&(Ln.moved=!0),Ln.moved){ii.yaw=Ln.yaw+e*.004,ii.pitch=Ln.pitch+t*.004,_o();return}}Td(s)});vt.domElement.addEventListener("pointerup",s=>{var n;const e=Ln==null?void 0:Ln.moved;if(Ln=null,e)return;if(Td(s),na){na.onSelect();return}if(Rt&&Pt&&Rt.object===Pt.cuff&&qt){const i=On.intersectObject(qt,!0)[0];if(i&&yd(i.point))return}if(Rt){const i=qt?On.intersectObject(qt,!0).find(r=>r.face&&r.face.normal.clone().transformDirection(r.object.matrixWorld).y>.7&&r.distance<4&&!r.object.material.transparent):void 0;if(i&&qt){const r=Rt.object;Rt=null,qt.attach(r),Sd(r,i.point.x,i.point.z),r.position.y=i.point.y+(((n=r.userData.grabbable)==null?void 0:n.restHeight)??.01)}else ur(!0);Wi.textContent=Qr;return}const t=rh(On);t&&Md(t,vn,!0)});const Yn=new Set;window.addEventListener("keydown",s=>{var e;if(!(vt.xr.isPresenting||sh.classList.contains("ouvert"))){if(s.code==="KeyR"&&Rt){ur(!0),Wi.textContent=Qr;return}if(/^[1-6]$/.test(s.key)){(e=mo[Number(s.key)-1])==null||e.onSelect();return}["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.code)&&(Yn.add(s.code),s.preventDefault())}});window.addEventListener("keyup",s=>Yn.delete(s.code));window.addEventListener("blur",()=>Yn.clear());const Bi=.25,_n=new E;function MM(s,e){vn.getWorldPosition(_n);let t=_n.x+s,n=_n.z+e;const i=wc.bounds;t=Math.min(i.maxX-Bi,Math.max(i.minX+Bi,t)),n=Math.min(i.maxZ-Bi,Math.max(i.minZ+Bi,n));for(const r of wc.obstacles){const a=r.minX-Bi,o=r.maxX+Bi,l=r.minZ-Bi,c=r.maxZ+Bi;if(t>a&&t<o&&n>l&&n<c){const h=[t-a,o-t,n-l,c-n],u=h.indexOf(Math.min(...h));u===0?t=a:u===1?t=o:u===2?n=l:n=c}}ri.position.x+=t-_n.x,ri.position.z+=n-_n.z}function SM(s){vn.getWorldPosition(_n);const e=ri.position.clone().sub(_n).applyAxisAngle(new E(0,1,0),s);ri.position.copy(_n).add(e),ri.rotation.y+=s}const zi=new E;function Qu(){return vn.getWorldDirection(zi),zi.y=0,zi.lengthSq()<1e-6&&zi.set(0,0,-1),zi.normalize(),{fwd:zi.clone(),right:new E(-zi.z,0,zi.x)}}let El=!0;const bM=new hy;function wM(s){var o,l;const e=1.4*s,{fwd:t,right:n}=Qu();let i=0,r=0;if(vt.xr.isPresenting){for(const c of((o=vt.xr.getSession())==null?void 0:o.inputSources)??[]){const h=(l=c.gamepad)==null?void 0:l.axes;!h||h.length<4||(c.handedness==="left"&&(i+=h[2],r+=h[3]),c.handedness==="right"&&(Math.abs(h[2])>.7&&El&&(SM(h[2]>0?-Math.PI/6:Math.PI/6),El=!1),Math.abs(h[2])<.3&&(El=!0)))}Math.hypot(i,r)<.15&&(i=r=0)}else(Yn.has("KeyW")||Yn.has("ArrowUp"))&&(r-=1),(Yn.has("KeyS")||Yn.has("ArrowDown"))&&(r+=1),Yn.has("KeyA")&&(i-=1),Yn.has("KeyD")&&(i+=1),Yn.has("ArrowLeft")&&(ii.yaw+=1.6*s,_o()),Yn.has("ArrowRight")&&(ii.yaw-=1.6*s,_o());if((i||r)&&MM((t.x*-r+n.x*i)*e,(t.z*-r+n.z*i)*e),vn.getWorldPosition(_n),Math.hypot(An.position.x-_n.x,An.position.z-_n.z)>2.3){const c=_n.clone().addScaledVector(Qu().fwd,1.25);An.position.set(c.x,1.45,c.z),An.lookAt(_n.x,1.45,_n.z)}}vt.setAnimationLoop(()=>{var t;const s=Math.min(bM.getDelta(),.1);if(wM(s),ls){ls.update(s);for(const n of ea)(t=n.setBed)==null||t.call(n,ls.back,ls.height)}for(const n of ea)n.update(s);Cy(),Pt==null||Pt.update(s);let e=vt.xr.isPresenting?void 0:na;if(vt.xr.isPresenting)for(const n of yM){qs.identity().extractRotation(n.matrixWorld);const i=wd(new E().setFromMatrixPosition(n.matrixWorld),new E(0,0,-1).applyMatrix4(qs));i&&(e=i)}for(const n of ih())n.setHover(n===e);vt.domElement.style.cursor=e?"pointer":Ed?"grab":Rt&&!vt.xr.isPresenting?"crosshair":"default";for(let n=nr.length-1;n>=0;n--){const i=nr[n];i.object.position.y=Math.max(i.targetY,i.object.position.y-.05),i.object.position.y<=i.targetY&&nr.splice(n,1)}vt.render(bi,vn)});window.addEventListener("resize",()=>{vn.aspect=window.innerWidth/window.innerHeight,vn.updateProjectionMatrix(),vt.setSize(window.innerWidth,window.innerHeight)});async function EM(){const s=navigator.xr;if(!s||!window.isSecureContext){Wi.textContent=window.isSecureContext?Qr:"Mode ordinateur : W A S D ou flèches pour te déplacer, glisse la souris pour regarder, clique sur un choix (ou touches 1 à 6). Pour la réalité virtuelle, ouvrez l'adresse https://.",zs.hidden=!0;return}if(!await s.isSessionSupported("immersive-vr")){Wi.textContent=Qr,zs.hidden=!0;return}zs.disabled=!1,zs.onclick=async()=>{var t;if(vt.xr.isPresenting){await((t=vt.xr.getSession())==null?void 0:t.end());return}const e=await s.requestSession("immersive-vr",{optionalFeatures:["local-floor","hand-tracking"]});await vt.xr.setSession(e),zs.textContent="Quitter la réalité virtuelle",e.addEventListener("end",()=>{zs.textContent="Entrer en réalité virtuelle"})},Wi.textContent="Mets le casque, puis touche « Entrer en réalité virtuelle »."}async function TM(){const s=new Map(Fd.map(n=>[n.id,n])),e=new URLSearchParams(location.search),t=e.get("source")==="editeur"?localStorage.getItem(`simfp.lecteur.${e.get("scenario")}`):null;if(t)try{const n=Od(JSON.parse(t));s.set(n.id,n)}catch{}return[...s.values()].filter(n=>!Bd(zd(n)))}TM().then(s=>{var n,i,r,a;ta=s;const e=new URLSearchParams(location.search);(n=e.get("camera"))==null||n.split(",").map(Number),(i=e.get("cible"))==null||i.split(",").map(Number),e.get("decor"),(r=e.get("sexes"))==null||r.split(","),(a=e.get("lit"))==null||a.split(",").map(Number),e.get("moment");const t=ta.find(o=>o.id===e.get("scenario"));if(!t)return cs();Po(t),e.get("etape"),e.get("geste")});EM();
