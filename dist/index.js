"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var d=c(function(D,y){
var _=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function w(r,e,a,i,p){var f,t,s,n,v,u,q;if(u=r-e,r<=0||u<=0)return NaN;if(r===1||i===0)return 0;for(f=_(r,a,i,p)/r,t=p,s=0,n=0,q=0;q<r;q++)v=a[t]-f,s+=v*v,n+=v,t+=i;return s/u-n/r*(n/u)}y.exports=w
});var x=c(function(F,m){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=d();function b(r,e,a,i){return O(r,e,a,i,E(r,i))}m.exports=b
});var M=c(function(G,l){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),h=d();g(j,"ndarray",h);l.exports=j
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=M(),o,R=z(k(__dirname,"./native.js"));A(R)?o=B:o=R;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
