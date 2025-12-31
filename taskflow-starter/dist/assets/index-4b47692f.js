(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Oe="top",We="bottom",Ke="right",Ne="left",Sc="auto",fi=[Oe,We,Ke,Ne],ns="start",zs="end",s_="clippingParents",Th="viewport",Cs="popper",i_="reference",Su=fi.reduce(function(e,t){return e.concat([t+"-"+ns,t+"-"+zs])},[]),wh=[].concat(fi,[Sc]).reduce(function(e,t){return e.concat([t,t+"-"+ns,t+"-"+zs])},[]),o_="beforeRead",a_="read",c_="afterRead",l_="beforeMain",u_="main",h_="afterMain",d_="beforeWrite",f_="write",p_="afterWrite",m_=[o_,a_,c_,l_,u_,h_,d_,f_,p_];function bn(e){return e?(e.nodeName||"").toLowerCase():null}function Ge(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function rs(e){var t=Ge(e).Element;return e instanceof t||e instanceof Element}function Qe(e){var t=Ge(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ih(e){if(typeof ShadowRoot>"u")return!1;var t=Ge(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Fw(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},s=t.attributes[n]||{},i=t.elements[n];!Qe(i)||!bn(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(o){var c=s[o];c===!1?i.removeAttribute(o):i.setAttribute(o,c===!0?"":c)}))})}function Uw(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var s=t.elements[r],i=t.attributes[r]||{},o=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),c=o.reduce(function(l,u){return l[u]="",l},{});!Qe(s)||!bn(s)||(Object.assign(s.style,c),Object.keys(i).forEach(function(l){s.removeAttribute(l)}))})}}const Ah={name:"applyStyles",enabled:!0,phase:"write",fn:Fw,effect:Uw,requires:["computeStyles"]};function vn(e){return e.split("-")[0]}var Qr=Math.max,Ya=Math.min,Ys=Math.round;function Ru(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function g_(){return!/^((?!chrome|android).)*safari/i.test(Ru())}function Qs(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),s=1,i=1;t&&Qe(e)&&(s=e.offsetWidth>0&&Ys(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ys(r.height)/e.offsetHeight||1);var o=rs(e)?Ge(e):window,c=o.visualViewport,l=!g_()&&n,u=(r.left+(l&&c?c.offsetLeft:0))/s,d=(r.top+(l&&c?c.offsetTop:0))/i,p=r.width/s,m=r.height/i;return{width:p,height:m,top:d,right:u+p,bottom:d+m,left:u,x:u,y:d}}function bh(e){var t=Qs(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function __(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ih(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Hn(e){return Ge(e).getComputedStyle(e)}function $w(e){return["table","td","th"].indexOf(bn(e))>=0}function Or(e){return((rs(e)?e.ownerDocument:e.document)||window.document).documentElement}function Rc(e){return bn(e)==="html"?e:e.assignedSlot||e.parentNode||(Ih(e)?e.host:null)||Or(e)}function Qf(e){return!Qe(e)||Hn(e).position==="fixed"?null:e.offsetParent}function Bw(e){var t=/firefox/i.test(Ru()),n=/Trident/i.test(Ru());if(n&&Qe(e)){var r=Hn(e);if(r.position==="fixed")return null}var s=Rc(e);for(Ih(s)&&(s=s.host);Qe(s)&&["html","body"].indexOf(bn(s))<0;){var i=Hn(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function Lo(e){for(var t=Ge(e),n=Qf(e);n&&$w(n)&&Hn(n).position==="static";)n=Qf(n);return n&&(bn(n)==="html"||bn(n)==="body"&&Hn(n).position==="static")?t:n||Bw(e)||t}function Sh(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ji(e,t,n){return Qr(e,Ya(t,n))}function jw(e,t,n){var r=Ji(e,t,n);return r>n?n:r}function y_(){return{top:0,right:0,bottom:0,left:0}}function v_(e){return Object.assign({},y_(),e)}function E_(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Hw=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,v_(typeof t!="number"?t:E_(t,fi))};function qw(e){var t,n=e.state,r=e.name,s=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,c=vn(n.placement),l=Sh(c),u=[Ne,Ke].indexOf(c)>=0,d=u?"height":"width";if(!(!i||!o)){var p=Hw(s.padding,n),m=bh(i),_=l==="y"?Oe:Ne,S=l==="y"?We:Ke,P=n.rects.reference[d]+n.rects.reference[l]-o[l]-n.rects.popper[d],O=o[l]-n.rects.reference[l],x=Lo(i),M=x?l==="y"?x.clientHeight||0:x.clientWidth||0:0,U=P/2-O/2,L=p[_],z=M-m[d]-p[S],Z=M/2-m[d]/2+U,A=Ji(L,Z,z),y=l;n.modifiersData[r]=(t={},t[y]=A,t.centerOffset=A-Z,t)}}function Ww(e){var t=e.state,n=e.options,r=n.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||__(t.elements.popper,s)&&(t.elements.arrow=s))}const T_={name:"arrow",enabled:!0,phase:"main",fn:qw,effect:Ww,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Xs(e){return e.split("-")[1]}var Kw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Gw(e,t){var n=e.x,r=e.y,s=t.devicePixelRatio||1;return{x:Ys(n*s)/s||0,y:Ys(r*s)/s||0}}function Xf(e){var t,n=e.popper,r=e.popperRect,s=e.placement,i=e.variation,o=e.offsets,c=e.position,l=e.gpuAcceleration,u=e.adaptive,d=e.roundOffsets,p=e.isFixed,m=o.x,_=m===void 0?0:m,S=o.y,P=S===void 0?0:S,O=typeof d=="function"?d({x:_,y:P}):{x:_,y:P};_=O.x,P=O.y;var x=o.hasOwnProperty("x"),M=o.hasOwnProperty("y"),U=Ne,L=Oe,z=window;if(u){var Z=Lo(n),A="clientHeight",y="clientWidth";if(Z===Ge(n)&&(Z=Or(n),Hn(Z).position!=="static"&&c==="absolute"&&(A="scrollHeight",y="scrollWidth")),Z=Z,s===Oe||(s===Ne||s===Ke)&&i===zs){L=We;var E=p&&Z===z&&z.visualViewport?z.visualViewport.height:Z[A];P-=E-r.height,P*=l?1:-1}if(s===Ne||(s===Oe||s===We)&&i===zs){U=Ke;var w=p&&Z===z&&z.visualViewport?z.visualViewport.width:Z[y];_-=w-r.width,_*=l?1:-1}}var b=Object.assign({position:c},u&&Kw),R=d===!0?Gw({x:_,y:P},Ge(n)):{x:_,y:P};if(_=R.x,P=R.y,l){var T;return Object.assign({},b,(T={},T[L]=M?"0":"",T[U]=x?"0":"",T.transform=(z.devicePixelRatio||1)<=1?"translate("+_+"px, "+P+"px)":"translate3d("+_+"px, "+P+"px, 0)",T))}return Object.assign({},b,(t={},t[L]=M?P+"px":"",t[U]=x?_+"px":"",t.transform="",t))}function zw(e){var t=e.state,n=e.options,r=n.gpuAcceleration,s=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,c=n.roundOffsets,l=c===void 0?!0:c,u={placement:vn(t.placement),variation:Xs(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Xf(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Xf(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Rh={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:zw,data:{}};var _a={passive:!0};function Yw(e){var t=e.state,n=e.instance,r=e.options,s=r.scroll,i=s===void 0?!0:s,o=r.resize,c=o===void 0?!0:o,l=Ge(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(d){d.addEventListener("scroll",n.update,_a)}),c&&l.addEventListener("resize",n.update,_a),function(){i&&u.forEach(function(d){d.removeEventListener("scroll",n.update,_a)}),c&&l.removeEventListener("resize",n.update,_a)}}const Ch={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Yw,data:{}};var Qw={left:"right",right:"left",bottom:"top",top:"bottom"};function ka(e){return e.replace(/left|right|bottom|top/g,function(t){return Qw[t]})}var Xw={start:"end",end:"start"};function Jf(e){return e.replace(/start|end/g,function(t){return Xw[t]})}function Ph(e){var t=Ge(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Oh(e){return Qs(Or(e)).left+Ph(e).scrollLeft}function Jw(e,t){var n=Ge(e),r=Or(e),s=n.visualViewport,i=r.clientWidth,o=r.clientHeight,c=0,l=0;if(s){i=s.width,o=s.height;var u=g_();(u||!u&&t==="fixed")&&(c=s.offsetLeft,l=s.offsetTop)}return{width:i,height:o,x:c+Oh(e),y:l}}function Zw(e){var t,n=Or(e),r=Ph(e),s=(t=e.ownerDocument)==null?void 0:t.body,i=Qr(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=Qr(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),c=-r.scrollLeft+Oh(e),l=-r.scrollTop;return Hn(s||n).direction==="rtl"&&(c+=Qr(n.clientWidth,s?s.clientWidth:0)-i),{width:i,height:o,x:c,y:l}}function Nh(e){var t=Hn(e),n=t.overflow,r=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+r)}function w_(e){return["html","body","#document"].indexOf(bn(e))>=0?e.ownerDocument.body:Qe(e)&&Nh(e)?e:w_(Rc(e))}function Zi(e,t){var n;t===void 0&&(t=[]);var r=w_(e),s=r===((n=e.ownerDocument)==null?void 0:n.body),i=Ge(r),o=s?[i].concat(i.visualViewport||[],Nh(r)?r:[]):r,c=t.concat(o);return s?c:c.concat(Zi(Rc(o)))}function Cu(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function tI(e,t){var n=Qs(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Zf(e,t,n){return t===Th?Cu(Jw(e,n)):rs(t)?tI(t,n):Cu(Zw(Or(e)))}function eI(e){var t=Zi(Rc(e)),n=["absolute","fixed"].indexOf(Hn(e).position)>=0,r=n&&Qe(e)?Lo(e):e;return rs(r)?t.filter(function(s){return rs(s)&&__(s,r)&&bn(s)!=="body"}):[]}function nI(e,t,n,r){var s=t==="clippingParents"?eI(e):[].concat(t),i=[].concat(s,[n]),o=i[0],c=i.reduce(function(l,u){var d=Zf(e,u,r);return l.top=Qr(d.top,l.top),l.right=Ya(d.right,l.right),l.bottom=Ya(d.bottom,l.bottom),l.left=Qr(d.left,l.left),l},Zf(e,o,r));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function I_(e){var t=e.reference,n=e.element,r=e.placement,s=r?vn(r):null,i=r?Xs(r):null,o=t.x+t.width/2-n.width/2,c=t.y+t.height/2-n.height/2,l;switch(s){case Oe:l={x:o,y:t.y-n.height};break;case We:l={x:o,y:t.y+t.height};break;case Ke:l={x:t.x+t.width,y:c};break;case Ne:l={x:t.x-n.width,y:c};break;default:l={x:t.x,y:t.y}}var u=s?Sh(s):null;if(u!=null){var d=u==="y"?"height":"width";switch(i){case ns:l[u]=l[u]-(t[d]/2-n[d]/2);break;case zs:l[u]=l[u]+(t[d]/2-n[d]/2);break}}return l}function Js(e,t){t===void 0&&(t={});var n=t,r=n.placement,s=r===void 0?e.placement:r,i=n.strategy,o=i===void 0?e.strategy:i,c=n.boundary,l=c===void 0?s_:c,u=n.rootBoundary,d=u===void 0?Th:u,p=n.elementContext,m=p===void 0?Cs:p,_=n.altBoundary,S=_===void 0?!1:_,P=n.padding,O=P===void 0?0:P,x=v_(typeof O!="number"?O:E_(O,fi)),M=m===Cs?i_:Cs,U=e.rects.popper,L=e.elements[S?M:m],z=nI(rs(L)?L:L.contextElement||Or(e.elements.popper),l,d,o),Z=Qs(e.elements.reference),A=I_({reference:Z,element:U,strategy:"absolute",placement:s}),y=Cu(Object.assign({},U,A)),E=m===Cs?y:Z,w={top:z.top-E.top+x.top,bottom:E.bottom-z.bottom+x.bottom,left:z.left-E.left+x.left,right:E.right-z.right+x.right},b=e.modifiersData.offset;if(m===Cs&&b){var R=b[s];Object.keys(w).forEach(function(T){var Mt=[Ke,We].indexOf(T)>=0?1:-1,jt=[Oe,We].indexOf(T)>=0?"y":"x";w[T]+=R[jt]*Mt})}return w}function rI(e,t){t===void 0&&(t={});var n=t,r=n.placement,s=n.boundary,i=n.rootBoundary,o=n.padding,c=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?wh:l,d=Xs(r),p=d?c?Su:Su.filter(function(S){return Xs(S)===d}):fi,m=p.filter(function(S){return u.indexOf(S)>=0});m.length===0&&(m=p);var _=m.reduce(function(S,P){return S[P]=Js(e,{placement:P,boundary:s,rootBoundary:i,padding:o})[vn(P)],S},{});return Object.keys(_).sort(function(S,P){return _[S]-_[P]})}function sI(e){if(vn(e)===Sc)return[];var t=ka(e);return[Jf(e),t,Jf(t)]}function iI(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,c=o===void 0?!0:o,l=n.fallbackPlacements,u=n.padding,d=n.boundary,p=n.rootBoundary,m=n.altBoundary,_=n.flipVariations,S=_===void 0?!0:_,P=n.allowedAutoPlacements,O=t.options.placement,x=vn(O),M=x===O,U=l||(M||!S?[ka(O)]:sI(O)),L=[O].concat(U).reduce(function(be,Ht){return be.concat(vn(Ht)===Sc?rI(t,{placement:Ht,boundary:d,rootBoundary:p,padding:u,flipVariations:S,allowedAutoPlacements:P}):Ht)},[]),z=t.rects.reference,Z=t.rects.popper,A=new Map,y=!0,E=L[0],w=0;w<L.length;w++){var b=L[w],R=vn(b),T=Xs(b)===ns,Mt=[Oe,We].indexOf(R)>=0,jt=Mt?"width":"height",vt=Js(t,{placement:b,boundary:d,rootBoundary:p,altBoundary:m,padding:u}),st=Mt?T?Ke:Ne:T?We:Oe;z[jt]>Z[jt]&&(st=ka(st));var yt=ka(st),Gt=[];if(i&&Gt.push(vt[R]<=0),c&&Gt.push(vt[st]<=0,vt[yt]<=0),Gt.every(function(be){return be})){E=b,y=!1;break}A.set(b,Gt)}if(y)for(var pe=S?3:1,me=function(Ht){var Qt=L.find(function(k){var J=A.get(k);if(J)return J.slice(0,Ht).every(function(Q){return Q})});if(Qt)return E=Qt,"break"},Nt=pe;Nt>0;Nt--){var kt=me(Nt);if(kt==="break")break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}}const A_={name:"flip",enabled:!0,phase:"main",fn:iI,requiresIfExists:["offset"],data:{_skip:!1}};function tp(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ep(e){return[Oe,Ke,We,Ne].some(function(t){return e[t]>=0})}function oI(e){var t=e.state,n=e.name,r=t.rects.reference,s=t.rects.popper,i=t.modifiersData.preventOverflow,o=Js(t,{elementContext:"reference"}),c=Js(t,{altBoundary:!0}),l=tp(o,r),u=tp(c,s,i),d=ep(l),p=ep(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}const b_={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:oI};function aI(e,t,n){var r=vn(e),s=[Ne,Oe].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],c=i[1];return o=o||0,c=(c||0)*s,[Ne,Ke].indexOf(r)>=0?{x:c,y:o}:{x:o,y:c}}function cI(e){var t=e.state,n=e.options,r=e.name,s=n.offset,i=s===void 0?[0,0]:s,o=wh.reduce(function(d,p){return d[p]=aI(p,t.rects,i),d},{}),c=o[t.placement],l=c.x,u=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}const S_={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:cI};function lI(e){var t=e.state,n=e.name;t.modifiersData[n]=I_({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Dh={name:"popperOffsets",enabled:!0,phase:"read",fn:lI,data:{}};function uI(e){return e==="x"?"y":"x"}function hI(e){var t=e.state,n=e.options,r=e.name,s=n.mainAxis,i=s===void 0?!0:s,o=n.altAxis,c=o===void 0?!1:o,l=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.padding,m=n.tether,_=m===void 0?!0:m,S=n.tetherOffset,P=S===void 0?0:S,O=Js(t,{boundary:l,rootBoundary:u,padding:p,altBoundary:d}),x=vn(t.placement),M=Xs(t.placement),U=!M,L=Sh(x),z=uI(L),Z=t.modifiersData.popperOffsets,A=t.rects.reference,y=t.rects.popper,E=typeof P=="function"?P(Object.assign({},t.rects,{placement:t.placement})):P,w=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),b=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(Z){if(i){var T,Mt=L==="y"?Oe:Ne,jt=L==="y"?We:Ke,vt=L==="y"?"height":"width",st=Z[L],yt=st+O[Mt],Gt=st-O[jt],pe=_?-y[vt]/2:0,me=M===ns?A[vt]:y[vt],Nt=M===ns?-y[vt]:-A[vt],kt=t.elements.arrow,be=_&&kt?bh(kt):{width:0,height:0},Ht=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:y_(),Qt=Ht[Mt],k=Ht[jt],J=Ji(0,A[vt],be[vt]),Q=U?A[vt]/2-pe-J-Qt-w.mainAxis:me-J-Qt-w.mainAxis,rt=U?-A[vt]/2+pe+J+k+w.mainAxis:Nt+J+k+w.mainAxis,ht=t.elements.arrow&&Lo(t.elements.arrow),Ct=ht?L==="y"?ht.clientTop||0:ht.clientLeft||0:0,v=(T=b==null?void 0:b[L])!=null?T:0,I=st+Q-v-Ct,N=st+rt-v,F=Ji(_?Ya(yt,I):yt,st,_?Qr(Gt,N):Gt);Z[L]=F,R[L]=F-st}if(c){var V,j=L==="x"?Oe:Ne,Y=L==="x"?We:Ke,K=Z[z],W=z==="y"?"height":"width",B=K+O[j],it=K-O[Y],X=[Oe,Ne].indexOf(x)!==-1,tt=(V=b==null?void 0:b[z])!=null?V:0,lt=X?B:K-A[W]-y[W]-tt+w.altAxis,ot=X?K+A[W]+y[W]-tt-w.altAxis:it,pt=_&&X?jw(lt,K,ot):Ji(_?lt:B,K,_?ot:it);Z[z]=pt,R[z]=pt-K}t.modifiersData[r]=R}}const R_={name:"preventOverflow",enabled:!0,phase:"main",fn:hI,requiresIfExists:["offset"]};function dI(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function fI(e){return e===Ge(e)||!Qe(e)?Ph(e):dI(e)}function pI(e){var t=e.getBoundingClientRect(),n=Ys(t.width)/e.offsetWidth||1,r=Ys(t.height)/e.offsetHeight||1;return n!==1||r!==1}function mI(e,t,n){n===void 0&&(n=!1);var r=Qe(t),s=Qe(t)&&pI(t),i=Or(t),o=Qs(e,s,n),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((bn(t)!=="body"||Nh(i))&&(c=fI(t)),Qe(t)?(l=Qs(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=Oh(i))),{x:o.left+c.scrollLeft-l.x,y:o.top+c.scrollTop-l.y,width:o.width,height:o.height}}function gI(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function s(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(c){if(!n.has(c)){var l=t.get(c);l&&s(l)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||s(i)}),r}function _I(e){var t=gI(e);return m_.reduce(function(n,r){return n.concat(t.filter(function(s){return s.phase===r}))},[])}function yI(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function vI(e){var t=e.reduce(function(n,r){var s=n[r.name];return n[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var np={placement:"bottom",modifiers:[],strategy:"absolute"};function rp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Cc(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,s=t.defaultOptions,i=s===void 0?np:s;return function(c,l,u){u===void 0&&(u=i);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},np,i),modifiersData:{},elements:{reference:c,popper:l},attributes:{},styles:{}},p=[],m=!1,_={state:d,setOptions:function(x){var M=typeof x=="function"?x(d.options):x;P(),d.options=Object.assign({},i,d.options,M),d.scrollParents={reference:rs(c)?Zi(c):c.contextElement?Zi(c.contextElement):[],popper:Zi(l)};var U=_I(vI([].concat(r,d.options.modifiers)));return d.orderedModifiers=U.filter(function(L){return L.enabled}),S(),_.update()},forceUpdate:function(){if(!m){var x=d.elements,M=x.reference,U=x.popper;if(rp(M,U)){d.rects={reference:mI(M,Lo(U),d.options.strategy==="fixed"),popper:bh(U)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(w){return d.modifiersData[w.name]=Object.assign({},w.data)});for(var L=0;L<d.orderedModifiers.length;L++){if(d.reset===!0){d.reset=!1,L=-1;continue}var z=d.orderedModifiers[L],Z=z.fn,A=z.options,y=A===void 0?{}:A,E=z.name;typeof Z=="function"&&(d=Z({state:d,options:y,name:E,instance:_})||d)}}}},update:yI(function(){return new Promise(function(O){_.forceUpdate(),O(d)})}),destroy:function(){P(),m=!0}};if(!rp(c,l))return _;_.setOptions(u).then(function(O){!m&&u.onFirstUpdate&&u.onFirstUpdate(O)});function S(){d.orderedModifiers.forEach(function(O){var x=O.name,M=O.options,U=M===void 0?{}:M,L=O.effect;if(typeof L=="function"){var z=L({state:d,name:x,instance:_,options:U}),Z=function(){};p.push(z||Z)}})}function P(){p.forEach(function(O){return O()}),p=[]}return _}}var EI=Cc(),TI=[Ch,Dh,Rh,Ah],wI=Cc({defaultModifiers:TI}),II=[Ch,Dh,Rh,Ah,S_,A_,R_,T_,b_],kh=Cc({defaultModifiers:II});const C_=Object.freeze(Object.defineProperty({__proto__:null,afterMain:h_,afterRead:c_,afterWrite:p_,applyStyles:Ah,arrow:T_,auto:Sc,basePlacements:fi,beforeMain:l_,beforeRead:o_,beforeWrite:d_,bottom:We,clippingParents:s_,computeStyles:Rh,createPopper:kh,createPopperBase:EI,createPopperLite:wI,detectOverflow:Js,end:zs,eventListeners:Ch,flip:A_,hide:b_,left:Ne,main:u_,modifierPhases:m_,offset:S_,placements:wh,popper:Cs,popperGenerator:Cc,popperOffsets:Dh,preventOverflow:R_,read:a_,reference:i_,right:Ke,start:ns,top:Oe,variationPlacements:Su,viewport:Th,write:f_},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const rr=new Map,kl={set(e,t,n){rr.has(e)||rr.set(e,new Map);const r=rr.get(e);if(!r.has(t)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(t,n)},get(e,t){return rr.has(e)&&rr.get(e).get(t)||null},remove(e,t){if(!rr.has(e))return;const n=rr.get(e);n.delete(t),n.size===0&&rr.delete(e)}},AI=1e6,bI=1e3,Pu="transitionend",P_=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(t,n)=>`#${CSS.escape(n)}`)),e),SI=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),RI=e=>{do e+=Math.floor(Math.random()*AI);while(document.getElementById(e));return e},CI=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),s=Number.parseFloat(n);return!r&&!s?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*bI)},O_=e=>{e.dispatchEvent(new Event(Pu))},$n=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),Ir=e=>$n(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(P_(e)):null,pi=e=>{if(!$n(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const r=e.closest("summary");if(r&&r.parentNode!==n||r===null)return!1}return t},Ar=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",N_=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?N_(e.parentNode):null},Qa=()=>{},xo=e=>{e.offsetHeight},D_=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Vl=[],PI=e=>{document.readyState==="loading"?(Vl.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Vl)t()}),Vl.push(e)):e()},Je=()=>document.documentElement.dir==="rtl",en=e=>{PI(()=>{const t=D_();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},De=(e,t=[],n=e)=>typeof e=="function"?e.call(...t):n,k_=(e,t,n=!0)=>{if(!n){De(e);return}const r=5,s=CI(t)+r;let i=!1;const o=({target:c})=>{c===t&&(i=!0,t.removeEventListener(Pu,o),De(e))};t.addEventListener(Pu,o),setTimeout(()=>{i||O_(t)},s)},Vh=(e,t,n,r)=>{const s=e.length;let i=e.indexOf(t);return i===-1?!n&&r?e[s-1]:e[0]:(i+=n?1:-1,r&&(i=(i+s)%s),e[Math.max(0,Math.min(i,s-1))])},OI=/[^.]*(?=\..*)\.|.*/,NI=/\..*/,DI=/::\d+$/,Ll={};let sp=1;const V_={mouseenter:"mouseover",mouseleave:"mouseout"},kI=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L_(e,t){return t&&`${t}::${sp++}`||e.uidEvent||sp++}function x_(e){const t=L_(e);return e.uidEvent=t,Ll[t]=Ll[t]||{},Ll[t]}function VI(e,t){return function n(r){return Lh(r,{delegateTarget:e}),n.oneOff&&H.off(e,r.type,t),t.apply(e,[r])}}function LI(e,t,n){return function r(s){const i=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const c of i)if(c===o)return Lh(s,{delegateTarget:o}),r.oneOff&&H.off(e,s.type,t,n),n.apply(o,[s])}}function M_(e,t,n=null){return Object.values(e).find(r=>r.callable===t&&r.delegationSelector===n)}function F_(e,t,n){const r=typeof t=="string",s=r?n:t||n;let i=U_(e);return kI.has(i)||(i=e),[r,s,i]}function ip(e,t,n,r,s){if(typeof t!="string"||!e)return;let[i,o,c]=F_(t,n,r);t in V_&&(o=(S=>function(P){if(!P.relatedTarget||P.relatedTarget!==P.delegateTarget&&!P.delegateTarget.contains(P.relatedTarget))return S.call(this,P)})(o));const l=x_(e),u=l[c]||(l[c]={}),d=M_(u,o,i?n:null);if(d){d.oneOff=d.oneOff&&s;return}const p=L_(o,t.replace(OI,"")),m=i?LI(e,n,o):VI(e,o);m.delegationSelector=i?n:null,m.callable=o,m.oneOff=s,m.uidEvent=p,u[p]=m,e.addEventListener(c,m,i)}function Ou(e,t,n,r,s){const i=M_(t[n],r,s);i&&(e.removeEventListener(n,i,!!s),delete t[n][i.uidEvent])}function xI(e,t,n,r){const s=t[n]||{};for(const[i,o]of Object.entries(s))i.includes(r)&&Ou(e,t,n,o.callable,o.delegationSelector)}function U_(e){return e=e.replace(NI,""),V_[e]||e}const H={on(e,t,n,r){ip(e,t,n,r,!1)},one(e,t,n,r){ip(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!="string"||!e)return;const[s,i,o]=F_(t,n,r),c=o!==t,l=x_(e),u=l[o]||{},d=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(u).length)return;Ou(e,l,o,i,s?n:null);return}if(d)for(const p of Object.keys(l))xI(e,l,p,t.slice(1));for(const[p,m]of Object.entries(u)){const _=p.replace(DI,"");(!c||t.includes(_))&&Ou(e,l,o,m.callable,m.delegationSelector)}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const r=D_(),s=U_(t),i=t!==s;let o=null,c=!0,l=!0,u=!1;i&&r&&(o=r.Event(t,n),r(e).trigger(o),c=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),u=o.isDefaultPrevented());const d=Lh(new Event(t,{bubbles:c,cancelable:!0}),n);return u&&d.preventDefault(),l&&e.dispatchEvent(d),d.defaultPrevented&&o&&o.preventDefault(),d}};function Lh(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get(){return r}})}return e}function op(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function xl(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Bn={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${xl(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${xl(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of n){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),t[s]=op(e.dataset[r])}return t},getDataAttribute(e,t){return op(e.getAttribute(`data-bs-${xl(t)}`))}};class Mo{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const r=$n(n)?Bn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...$n(n)?Bn.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const[r,s]of Object.entries(n)){const i=t[r],o=$n(i)?"element":SI(i);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${s}".`)}}}const MI="5.3.8";class pn extends Mo{constructor(t,n){super(),t=Ir(t),t&&(this._element=t,this._config=this._getConfig(n),kl.set(this._element,this.constructor.DATA_KEY,this))}dispose(){kl.remove(this._element,this.constructor.DATA_KEY),H.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,r=!0){k_(t,n,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return kl.get(Ir(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return MI}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Ml=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t?t.split(",").map(n=>P_(n)).join(","):null},ct={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!Ar(n)&&pi(n))},getSelectorFromElement(e){const t=Ml(e);return t&&ct.findOne(t)?t:null},getElementFromSelector(e){const t=Ml(e);return t?ct.findOne(t):null},getMultipleElementsFromSelector(e){const t=Ml(e);return t?ct.find(t):[]}},Pc=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;H.on(document,n,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),Ar(this))return;const i=ct.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},FI="alert",UI="bs.alert",$_=`.${UI}`,$I=`close${$_}`,BI=`closed${$_}`,jI="fade",HI="show";class Oc extends pn{static get NAME(){return FI}close(){if(H.trigger(this._element,$I).defaultPrevented)return;this._element.classList.remove(HI);const n=this._element.classList.contains(jI);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),H.trigger(this._element,BI),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=Oc.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}Pc(Oc,"close");en(Oc);const qI="button",WI="bs.button",KI=`.${WI}`,GI=".data-api",zI="active",ap='[data-bs-toggle="button"]',YI=`click${KI}${GI}`;class Nc extends pn{static get NAME(){return qI}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(zI))}static jQueryInterface(t){return this.each(function(){const n=Nc.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}H.on(document,YI,ap,e=>{e.preventDefault();const t=e.target.closest(ap);Nc.getOrCreateInstance(t).toggle()});en(Nc);const QI="swipe",mi=".bs.swipe",XI=`touchstart${mi}`,JI=`touchmove${mi}`,ZI=`touchend${mi}`,tA=`pointerdown${mi}`,eA=`pointerup${mi}`,nA="touch",rA="pen",sA="pointer-event",iA=40,oA={endCallback:null,leftCallback:null,rightCallback:null},aA={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Xa extends Mo{constructor(t,n){super(),this._element=t,!(!t||!Xa.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return oA}static get DefaultType(){return aA}static get NAME(){return QI}dispose(){H.off(this._element,mi)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),De(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=iA)return;const n=t/this._deltaX;this._deltaX=0,n&&De(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(H.on(this._element,tA,t=>this._start(t)),H.on(this._element,eA,t=>this._end(t)),this._element.classList.add(sA)):(H.on(this._element,XI,t=>this._start(t)),H.on(this._element,JI,t=>this._move(t)),H.on(this._element,ZI,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===rA||t.pointerType===nA)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const cA="carousel",lA="bs.carousel",Nr=`.${lA}`,B_=".data-api",uA="ArrowLeft",hA="ArrowRight",dA=500,Mi="next",As="prev",Ps="left",Va="right",fA=`slide${Nr}`,Fl=`slid${Nr}`,pA=`keydown${Nr}`,mA=`mouseenter${Nr}`,gA=`mouseleave${Nr}`,_A=`dragstart${Nr}`,yA=`load${Nr}${B_}`,vA=`click${Nr}${B_}`,j_="carousel",ya="active",EA="slide",TA="carousel-item-end",wA="carousel-item-start",IA="carousel-item-next",AA="carousel-item-prev",H_=".active",q_=".carousel-item",bA=H_+q_,SA=".carousel-item img",RA=".carousel-indicators",CA="[data-bs-slide], [data-bs-slide-to]",PA='[data-bs-ride="carousel"]',OA={[uA]:Va,[hA]:Ps},NA={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},DA={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Fo extends pn{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ct.findOne(RA,this._element),this._addEventListeners(),this._config.ride===j_&&this.cycle()}static get Default(){return NA}static get DefaultType(){return DA}static get NAME(){return cA}next(){this._slide(Mi)}nextWhenVisible(){!document.hidden&&pi(this._element)&&this.next()}prev(){this._slide(As)}pause(){this._isSliding&&O_(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){H.one(this._element,Fl,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){H.one(this._element,Fl,()=>this.to(t));return}const r=this._getItemIndex(this._getActive());if(r===t)return;const s=t>r?Mi:As;this._slide(s,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&H.on(this._element,pA,t=>this._keydown(t)),this._config.pause==="hover"&&(H.on(this._element,mA,()=>this.pause()),H.on(this._element,gA,()=>this._maybeEnableCycle())),this._config.touch&&Xa.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of ct.find(SA,this._element))H.on(r,_A,s=>s.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(Ps)),rightCallback:()=>this._slide(this._directionToOrder(Va)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),dA+this._config.interval))}};this._swipeHelper=new Xa(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=OA[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=ct.findOne(H_,this._indicatorsElement);n.classList.remove(ya),n.removeAttribute("aria-current");const r=ct.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add(ya),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const r=this._getActive(),s=t===Mi,i=n||Vh(this._getItems(),r,s,this._config.wrap);if(i===r)return;const o=this._getItemIndex(i),c=_=>H.trigger(this._element,_,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:o});if(c(fA).defaultPrevented||!r||!i)return;const u=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const d=s?wA:TA,p=s?IA:AA;i.classList.add(p),xo(i),r.classList.add(d),i.classList.add(d);const m=()=>{i.classList.remove(d,p),i.classList.add(ya),r.classList.remove(ya,p,d),this._isSliding=!1,c(Fl)};this._queueCallback(m,r,this._isAnimated()),u&&this.cycle()}_isAnimated(){return this._element.classList.contains(EA)}_getActive(){return ct.findOne(bA,this._element)}_getItems(){return ct.find(q_,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Je()?t===Ps?As:Mi:t===Ps?Mi:As}_orderToDirection(t){return Je()?t===As?Ps:Va:t===As?Va:Ps}static jQueryInterface(t){return this.each(function(){const n=Fo.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}H.on(document,vA,CA,function(e){const t=ct.getElementFromSelector(this);if(!t||!t.classList.contains(j_))return;e.preventDefault();const n=Fo.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");if(r){n.to(r),n._maybeEnableCycle();return}if(Bn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});H.on(window,yA,()=>{const e=ct.find(PA);for(const t of e)Fo.getOrCreateInstance(t)});en(Fo);const kA="collapse",VA="bs.collapse",Uo=`.${VA}`,LA=".data-api",xA=`show${Uo}`,MA=`shown${Uo}`,FA=`hide${Uo}`,UA=`hidden${Uo}`,$A=`click${Uo}${LA}`,Ul="show",Ms="collapse",va="collapsing",BA="collapsed",jA=`:scope .${Ms} .${Ms}`,HA="collapse-horizontal",qA="width",WA="height",KA=".collapse.show, .collapse.collapsing",Nu='[data-bs-toggle="collapse"]',GA={parent:null,toggle:!0},zA={parent:"(null|element)",toggle:"boolean"};class _o extends pn{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const r=ct.find(Nu);for(const s of r){const i=ct.getSelectorFromElement(s),o=ct.find(i).filter(c=>c===this._element);i!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return GA}static get DefaultType(){return zA}static get NAME(){return kA}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(KA).filter(c=>c!==this._element).map(c=>_o.getOrCreateInstance(c,{toggle:!1}))),t.length&&t[0]._isTransitioning||H.trigger(this._element,xA).defaultPrevented)return;for(const c of t)c.hide();const r=this._getDimension();this._element.classList.remove(Ms),this._element.classList.add(va),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(va),this._element.classList.add(Ms,Ul),this._element.style[r]="",H.trigger(this._element,MA)},o=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||H.trigger(this._element,FA).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,xo(this._element),this._element.classList.add(va),this._element.classList.remove(Ms,Ul);for(const s of this._triggerArray){const i=ct.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(va),this._element.classList.add(Ms),H.trigger(this._element,UA)};this._element.style[n]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Ul)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Ir(t.parent),t}_getDimension(){return this._element.classList.contains(HA)?qA:WA}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Nu);for(const n of t){const r=ct.getElementFromSelector(n);r&&this._addAriaAndCollapsedClass([n],this._isShown(r))}}_getFirstLevelChildren(t){const n=ct.find(jA,this._config.parent);return ct.find(t,this._config.parent).filter(r=>!n.includes(r))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const r of t)r.classList.toggle(BA,!n),r.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const r=_o.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t]()}})}}H.on(document,$A,Nu,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();for(const t of ct.getMultipleElementsFromSelector(this))_o.getOrCreateInstance(t,{toggle:!1}).toggle()});en(_o);const cp="dropdown",YA="bs.dropdown",hs=`.${YA}`,xh=".data-api",QA="Escape",lp="Tab",XA="ArrowUp",up="ArrowDown",JA=2,ZA=`hide${hs}`,tb=`hidden${hs}`,eb=`show${hs}`,nb=`shown${hs}`,W_=`click${hs}${xh}`,K_=`keydown${hs}${xh}`,rb=`keyup${hs}${xh}`,Os="show",sb="dropup",ib="dropend",ob="dropstart",ab="dropup-center",cb="dropdown-center",qr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',lb=`${qr}.${Os}`,La=".dropdown-menu",ub=".navbar",hb=".navbar-nav",db=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",fb=Je()?"top-end":"top-start",pb=Je()?"top-start":"top-end",mb=Je()?"bottom-end":"bottom-start",gb=Je()?"bottom-start":"bottom-end",_b=Je()?"left-start":"right-start",yb=Je()?"right-start":"left-start",vb="top",Eb="bottom",Tb={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},wb={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class En extends pn{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=ct.next(this._element,La)[0]||ct.prev(this._element,La)[0]||ct.findOne(La,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Tb}static get DefaultType(){return wb}static get NAME(){return cp}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ar(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!H.trigger(this._element,eb,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(hb))for(const r of[].concat(...document.body.children))H.on(r,"mouseover",Qa);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Os),this._element.classList.add(Os),H.trigger(this._element,nb,t)}}hide(){if(Ar(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!H.trigger(this._element,ZA,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))H.off(r,"mouseover",Qa);this._popper&&this._popper.destroy(),this._menu.classList.remove(Os),this._element.classList.remove(Os),this._element.setAttribute("aria-expanded","false"),Bn.removeDataAttribute(this._menu,"popper"),H.trigger(this._element,tb,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!$n(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${cp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof C_>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:$n(this._config.reference)?t=Ir(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=kh(t,this._menu,n)}_isShown(){return this._menu.classList.contains(Os)}_getPlacement(){const t=this._parent;if(t.classList.contains(ib))return _b;if(t.classList.contains(ob))return yb;if(t.classList.contains(ab))return vb;if(t.classList.contains(cb))return Eb;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(sb)?n?pb:fb:n?gb:mb}_detectNavbar(){return this._element.closest(ub)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Bn.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...De(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:n}){const r=ct.find(db,this._menu).filter(s=>pi(s));r.length&&Vh(r,n,t===up,!r.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=En.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===JA||t.type==="keyup"&&t.key!==lp)return;const n=ct.find(lb);for(const r of n){const s=En.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=t.composedPath(),o=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===lp||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const c={relatedTarget:s._element};t.type==="click"&&(c.clickEvent=t),s._completeHide(c)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),r=t.key===QA,s=[XA,up].includes(t.key);if(!s&&!r||n&&!r)return;t.preventDefault();const i=this.matches(qr)?this:ct.prev(this,qr)[0]||ct.next(this,qr)[0]||ct.findOne(qr,t.delegateTarget.parentNode),o=En.getOrCreateInstance(i);if(s){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),i.focus())}}H.on(document,K_,qr,En.dataApiKeydownHandler);H.on(document,K_,La,En.dataApiKeydownHandler);H.on(document,W_,En.clearMenus);H.on(document,rb,En.clearMenus);H.on(document,W_,qr,function(e){e.preventDefault(),En.getOrCreateInstance(this).toggle()});en(En);const G_="backdrop",Ib="fade",hp="show",dp=`mousedown.bs.${G_}`,Ab={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},bb={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class z_ extends Mo{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ab}static get DefaultType(){return bb}static get NAME(){return G_}show(t){if(!this._config.isVisible){De(t);return}this._append();const n=this._getElement();this._config.isAnimated&&xo(n),n.classList.add(hp),this._emulateAnimation(()=>{De(t)})}hide(t){if(!this._config.isVisible){De(t);return}this._getElement().classList.remove(hp),this._emulateAnimation(()=>{this.dispose(),De(t)})}dispose(){this._isAppended&&(H.off(this._element,dp),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Ib),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Ir(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),H.on(t,dp,()=>{De(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){k_(t,this._getElement(),this._config.isAnimated)}}const Sb="focustrap",Rb="bs.focustrap",Ja=`.${Rb}`,Cb=`focusin${Ja}`,Pb=`keydown.tab${Ja}`,Ob="Tab",Nb="forward",fp="backward",Db={autofocus:!0,trapElement:null},kb={autofocus:"boolean",trapElement:"element"};class Y_ extends Mo{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Db}static get DefaultType(){return kb}static get NAME(){return Sb}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),H.off(document,Ja),H.on(document,Cb,t=>this._handleFocusin(t)),H.on(document,Pb,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,H.off(document,Ja))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const r=ct.focusableChildren(n);r.length===0?n.focus():this._lastTabNavDirection===fp?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===Ob&&(this._lastTabNavDirection=t.shiftKey?fp:Nb)}}const pp=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",mp=".sticky-top",Ea="padding-right",gp="margin-right";class Du{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ea,n=>n+t),this._setElementAttributes(pp,Ea,n=>n+t),this._setElementAttributes(mp,gp,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ea),this._resetElementAttributes(pp,Ea),this._resetElementAttributes(mp,gp)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,r){const s=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,n);const c=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${r(Number.parseFloat(c))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,n){const r=t.style.getPropertyValue(n);r&&Bn.setDataAttribute(t,n,r)}_resetElementAttributes(t,n){const r=s=>{const i=Bn.getDataAttribute(s,n);if(i===null){s.style.removeProperty(n);return}Bn.removeDataAttribute(s,n),s.style.setProperty(n,i)};this._applyManipulationCallback(t,r)}_applyManipulationCallback(t,n){if($n(t)){n(t);return}for(const r of ct.find(t,this._element))n(r)}}const Vb="modal",Lb="bs.modal",Ze=`.${Lb}`,xb=".data-api",Mb="Escape",Fb=`hide${Ze}`,Ub=`hidePrevented${Ze}`,Q_=`hidden${Ze}`,X_=`show${Ze}`,$b=`shown${Ze}`,Bb=`resize${Ze}`,jb=`click.dismiss${Ze}`,Hb=`mousedown.dismiss${Ze}`,qb=`keydown.dismiss${Ze}`,Wb=`click${Ze}${xb}`,_p="modal-open",Kb="fade",yp="show",$l="modal-static",Gb=".modal.show",zb=".modal-dialog",Yb=".modal-body",Qb='[data-bs-toggle="modal"]',Xb={backdrop:!0,focus:!0,keyboard:!0},Jb={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ss extends pn{constructor(t,n){super(t,n),this._dialog=ct.findOne(zb,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Du,this._addEventListeners()}static get Default(){return Xb}static get DefaultType(){return Jb}static get NAME(){return Vb}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||H.trigger(this._element,X_,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(_p),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||H.trigger(this._element,Fb).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(yp),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){H.off(window,Ze),H.off(this._dialog,Ze),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new z_({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Y_({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=ct.findOne(Yb,this._dialog);n&&(n.scrollTop=0),xo(this._element),this._element.classList.add(yp);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,H.trigger(this._element,$b,{relatedTarget:t})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){H.on(this._element,qb,t=>{if(t.key===Mb){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),H.on(window,Bb,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),H.on(this._element,Hb,t=>{H.one(this._element,jb,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(_p),this._resetAdjustments(),this._scrollBar.reset(),H.trigger(this._element,Q_)})}_isAnimated(){return this._element.classList.contains(Kb)}_triggerBackdropTransition(){if(H.trigger(this._element,Ub).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains($l)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add($l),this._queueCallback(()=>{this._element.classList.remove($l),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),r=n>0;if(r&&!t){const s=Je()?"paddingLeft":"paddingRight";this._element.style[s]=`${n}px`}if(!r&&t){const s=Je()?"paddingRight":"paddingLeft";this._element.style[s]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const r=ss.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t](n)}})}}H.on(document,Wb,Qb,function(e){const t=ct.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),H.one(t,X_,s=>{s.defaultPrevented||H.one(t,Q_,()=>{pi(this)&&this.focus()})});const n=ct.findOne(Gb);n&&ss.getInstance(n).hide(),ss.getOrCreateInstance(t).toggle(this)});Pc(ss);en(ss);const Zb="offcanvas",t0="bs.offcanvas",Xn=`.${t0}`,J_=".data-api",e0=`load${Xn}${J_}`,n0="Escape",vp="show",Ep="showing",Tp="hiding",r0="offcanvas-backdrop",Z_=".offcanvas.show",s0=`show${Xn}`,i0=`shown${Xn}`,o0=`hide${Xn}`,wp=`hidePrevented${Xn}`,ty=`hidden${Xn}`,a0=`resize${Xn}`,c0=`click${Xn}${J_}`,l0=`keydown.dismiss${Xn}`,u0='[data-bs-toggle="offcanvas"]',h0={backdrop:!0,keyboard:!0,scroll:!1},d0={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class br extends pn{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return h0}static get DefaultType(){return d0}static get NAME(){return Zb}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||H.trigger(this._element,s0,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Du().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ep);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(vp),this._element.classList.remove(Ep),H.trigger(this._element,i0,{relatedTarget:t})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||H.trigger(this._element,o0).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Tp),this._backdrop.hide();const n=()=>{this._element.classList.remove(vp,Tp),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Du().reset(),H.trigger(this._element,ty)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){H.trigger(this._element,wp);return}this.hide()},n=!!this._config.backdrop;return new z_({className:r0,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Y_({trapElement:this._element})}_addEventListeners(){H.on(this._element,l0,t=>{if(t.key===n0){if(this._config.keyboard){this.hide();return}H.trigger(this._element,wp)}})}static jQueryInterface(t){return this.each(function(){const n=br.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}H.on(document,c0,u0,function(e){const t=ct.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Ar(this))return;H.one(t,ty,()=>{pi(this)&&this.focus()});const n=ct.findOne(Z_);n&&n!==t&&br.getInstance(n).hide(),br.getOrCreateInstance(t).toggle(this)});H.on(window,e0,()=>{for(const e of ct.find(Z_))br.getOrCreateInstance(e).show()});H.on(window,a0,()=>{for(const e of ct.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&br.getOrCreateInstance(e).hide()});Pc(br);en(br);const f0=/^aria-[\w-]*$/i,ey={"*":["class","dir","id","lang","role",f0],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},p0=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),m0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,g0=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?p0.has(n)?!!m0.test(e.nodeValue):!0:t.filter(r=>r instanceof RegExp).some(r=>r.test(n))};function _0(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const s=new window.DOMParser().parseFromString(e,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const o of i){const c=o.nodeName.toLowerCase();if(!Object.keys(t).includes(c)){o.remove();continue}const l=[].concat(...o.attributes),u=[].concat(t["*"]||[],t[c]||[]);for(const d of l)g0(d,u)||o.removeAttribute(d.nodeName)}return s.body.innerHTML}const y0="TemplateFactory",v0={allowList:ey,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},E0={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},T0={entry:"(string|element|function|null)",selector:"(string|element)"};class w0 extends Mo{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return v0}static get DefaultType(){return E0}static get NAME(){return y0}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(t,i,s);const n=t.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&n.classList.add(...r.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,r]of Object.entries(t))super._typeCheckConfig({selector:n,entry:r},T0)}_setContent(t,n,r){const s=ct.findOne(r,t);if(s){if(n=this._resolvePossibleFunction(n),!n){s.remove();return}if($n(n)){this._putElementInTemplate(Ir(n),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(n);return}s.textContent=n}}_maybeSanitize(t){return this._config.sanitize?_0(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return De(t,[void 0,this])}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const I0="tooltip",A0=new Set(["sanitize","allowList","sanitizeFn"]),Bl="fade",b0="modal",Ta="show",S0=".tooltip-inner",Ip=`.${b0}`,Ap="hide.bs.modal",Fi="hover",jl="focus",Hl="click",R0="manual",C0="hide",P0="hidden",O0="show",N0="shown",D0="inserted",k0="click",V0="focusin",L0="focusout",x0="mouseenter",M0="mouseleave",F0={AUTO:"auto",TOP:"top",RIGHT:Je()?"left":"right",BOTTOM:"bottom",LEFT:Je()?"right":"left"},U0={allowList:ey,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},$0={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class gi extends pn{constructor(t,n){if(typeof C_>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return U0}static get DefaultType(){return $0}static get NAME(){return I0}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),H.off(this._element.closest(Ip),Ap,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=H.trigger(this._element,this.constructor.eventName(O0)),r=(N_(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),H.trigger(this._element,this.constructor.eventName(D0))),this._popper=this._createPopper(s),s.classList.add(Ta),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))H.on(c,"mouseover",Qa);const o=()=>{H.trigger(this._element,this.constructor.eventName(N0)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||H.trigger(this._element,this.constructor.eventName(C0)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ta),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))H.off(s,"mouseover",Qa);this._activeTrigger[Hl]=!1,this._activeTrigger[jl]=!1,this._activeTrigger[Fi]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),H.trigger(this._element,this.constructor.eventName(P0)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(Bl,Ta),n.classList.add(`bs-${this.constructor.NAME}-auto`);const r=RI(this.constructor.NAME).toString();return n.setAttribute("id",r),this._isAnimated()&&n.classList.add(Bl),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new w0({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[S0]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Bl)}_isShown(){return this.tip&&this.tip.classList.contains(Ta)}_createPopper(t){const n=De(this._config.placement,[this,t,this._element]),r=F0[n.toUpperCase()];return kh(this._element,t,this._getPopperConfig(r))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return De(t,[this._element,this._element])}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...n,...De(this._config.popperConfig,[void 0,n])}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")H.on(this._element,this.constructor.eventName(k0),this._config.selector,r=>{const s=this._initializeOnDelegatedTarget(r);s._activeTrigger[Hl]=!(s._isShown()&&s._activeTrigger[Hl]),s.toggle()});else if(n!==R0){const r=n===Fi?this.constructor.eventName(x0):this.constructor.eventName(V0),s=n===Fi?this.constructor.eventName(M0):this.constructor.eventName(L0);H.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?jl:Fi]=!0,o._enter()}),H.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?jl:Fi]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},H.on(this._element.closest(Ip),Ap,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=Bn.getDataAttributes(this._element);for(const r of Object.keys(n))A0.has(r)&&delete n[r];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Ir(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[n,r]of Object.entries(this._config))this.constructor.Default[n]!==r&&(t[n]=r);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=gi.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}en(gi);const B0="popover",j0=".popover-header",H0=".popover-body",q0={...gi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},W0={...gi.DefaultType,content:"(null|string|element|function)"};class Mh extends gi{static get Default(){return q0}static get DefaultType(){return W0}static get NAME(){return B0}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[j0]:this._getTitle(),[H0]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Mh.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}en(Mh);const K0="scrollspy",G0="bs.scrollspy",Fh=`.${G0}`,z0=".data-api",Y0=`activate${Fh}`,bp=`click${Fh}`,Q0=`load${Fh}${z0}`,X0="dropdown-item",bs="active",J0='[data-bs-spy="scroll"]',ql="[href]",Z0=".nav, .list-group",Sp=".nav-link",tS=".nav-item",eS=".list-group-item",nS=`${Sp}, ${tS} > ${Sp}, ${eS}`,rS=".dropdown",sS=".dropdown-toggle",iS={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},oS={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Dc extends pn{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return iS}static get DefaultType(){return oS}static get NAME(){return K0}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Ir(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(H.off(this._config.target,bp),H.on(this._config.target,bp,ql,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const r=this._rootElement||window,s=n.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=o=>this._targetLinks.get(`#${o.target.id}`),r=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const c=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&c){if(r(o),!s)return;continue}!i&&!c&&r(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=ct.find(ql,this._config.target);for(const n of t){if(!n.hash||Ar(n))continue;const r=ct.findOne(decodeURI(n.hash),this._element);pi(r)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,r))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(bs),this._activateParents(t),H.trigger(this._element,Y0,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(X0)){ct.findOne(sS,t.closest(rS)).classList.add(bs);return}for(const n of ct.parents(t,Z0))for(const r of ct.prev(n,nS))r.classList.add(bs)}_clearActiveClass(t){t.classList.remove(bs);const n=ct.find(`${ql}.${bs}`,t);for(const r of n)r.classList.remove(bs)}static jQueryInterface(t){return this.each(function(){const n=Dc.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}H.on(window,Q0,()=>{for(const e of ct.find(J0))Dc.getOrCreateInstance(e)});en(Dc);const aS="tab",cS="bs.tab",ds=`.${cS}`,lS=`hide${ds}`,uS=`hidden${ds}`,hS=`show${ds}`,dS=`shown${ds}`,fS=`click${ds}`,pS=`keydown${ds}`,mS=`load${ds}`,gS="ArrowLeft",Rp="ArrowRight",_S="ArrowUp",Cp="ArrowDown",Wl="Home",Pp="End",Wr="active",Op="fade",Kl="show",yS="dropdown",ny=".dropdown-toggle",vS=".dropdown-menu",Gl=`:not(${ny})`,ES='.list-group, .nav, [role="tablist"]',TS=".nav-item, .list-group-item",wS=`.nav-link${Gl}, .list-group-item${Gl}, [role="tab"]${Gl}`,ry='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',zl=`${wS}, ${ry}`,IS=`.${Wr}[data-bs-toggle="tab"], .${Wr}[data-bs-toggle="pill"], .${Wr}[data-bs-toggle="list"]`;class Zs extends pn{constructor(t){super(t),this._parent=this._element.closest(ES),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),H.on(this._element,pS,n=>this._keydown(n)))}static get NAME(){return aS}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),r=n?H.trigger(n,lS,{relatedTarget:t}):null;H.trigger(t,hS,{relatedTarget:n}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Wr),this._activate(ct.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Kl);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),H.trigger(t,dS,{relatedTarget:n})};this._queueCallback(r,t,t.classList.contains(Op))}_deactivate(t,n){if(!t)return;t.classList.remove(Wr),t.blur(),this._deactivate(ct.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Kl);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),H.trigger(t,uS,{relatedTarget:n})};this._queueCallback(r,t,t.classList.contains(Op))}_keydown(t){if(![gS,Rp,_S,Cp,Wl,Pp].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=this._getChildren().filter(s=>!Ar(s));let r;if([Wl,Pp].includes(t.key))r=n[t.key===Wl?0:n.length-1];else{const s=[Rp,Cp].includes(t.key);r=Vh(n,t.target,s,!0)}r&&(r.focus({preventScroll:!0}),Zs.getOrCreateInstance(r).show())}_getChildren(){return ct.find(zl,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const r of n)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),r=this._getOuterElement(t);t.setAttribute("aria-selected",n),r!==t&&this._setAttributeIfNotExists(r,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=ct.getElementFromSelector(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,n){const r=this._getOuterElement(t);if(!r.classList.contains(yS))return;const s=(i,o)=>{const c=ct.findOne(i,r);c&&c.classList.toggle(o,n)};s(ny,Wr),s(vS,Kl),r.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,r){t.hasAttribute(n)||t.setAttribute(n,r)}_elemIsActive(t){return t.classList.contains(Wr)}_getInnerElement(t){return t.matches(zl)?t:ct.findOne(zl,t)}_getOuterElement(t){return t.closest(TS)||t}static jQueryInterface(t){return this.each(function(){const n=Zs.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}H.on(document,fS,ry,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!Ar(this)&&Zs.getOrCreateInstance(this).show()});H.on(window,mS,()=>{for(const e of ct.find(IS))Zs.getOrCreateInstance(e)});en(Zs);const AS="toast",bS="bs.toast",Dr=`.${bS}`,SS=`mouseover${Dr}`,RS=`mouseout${Dr}`,CS=`focusin${Dr}`,PS=`focusout${Dr}`,OS=`hide${Dr}`,NS=`hidden${Dr}`,DS=`show${Dr}`,kS=`shown${Dr}`,VS="fade",Np="hide",wa="show",Ia="showing",LS={animation:"boolean",autohide:"boolean",delay:"number"},xS={animation:!0,autohide:!0,delay:5e3};class kc extends pn{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return xS}static get DefaultType(){return LS}static get NAME(){return AS}show(){if(H.trigger(this._element,DS).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(VS);const n=()=>{this._element.classList.remove(Ia),H.trigger(this._element,kS),this._maybeScheduleHide()};this._element.classList.remove(Np),xo(this._element),this._element.classList.add(wa,Ia),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||H.trigger(this._element,OS).defaultPrevented)return;const n=()=>{this._element.classList.add(Np),this._element.classList.remove(Ia,wa),H.trigger(this._element,NS)};this._element.classList.add(Ia),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(wa),super.dispose()}isShown(){return this._element.classList.contains(wa)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const r=t.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){H.on(this._element,SS,t=>this._onInteraction(t,!0)),H.on(this._element,RS,t=>this._onInteraction(t,!1)),H.on(this._element,CS,t=>this._onInteraction(t,!0)),H.on(this._element,PS,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=kc.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}Pc(kc);en(kc);/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uh(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Lt={},$s=[],sn=()=>{},sy=()=>!1,Vc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),$h=e=>e.startsWith("onUpdate:"),oe=Object.assign,Bh=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},MS=Object.prototype.hasOwnProperty,Ot=(e,t)=>MS.call(e,t),ft=Array.isArray,Bs=e=>Lc(e)==="[object Map]",iy=e=>Lc(e)==="[object Set]",_t=e=>typeof e=="function",Zt=e=>typeof e=="string",kr=e=>typeof e=="symbol",$t=e=>e!==null&&typeof e=="object",oy=e=>($t(e)||_t(e))&&_t(e.then)&&_t(e.catch),ay=Object.prototype.toString,Lc=e=>ay.call(e),FS=e=>Lc(e).slice(8,-1),cy=e=>Lc(e)==="[object Object]",xc=e=>Zt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,to=Uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mc=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},US=/-\w/g,tn=Mc(e=>e.replace(US,t=>t.slice(1).toUpperCase())),$S=/\B([A-Z])/g,fs=Mc(e=>e.replace($S,"-$1").toLowerCase()),Fc=Mc(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yl=Mc(e=>e?`on${Fc(e)}`:""),_r=(e,t)=>!Object.is(e,t),xa=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ly=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},jh=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Dp;const Uc=()=>Dp||(Dp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hh(e){if(ft(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Zt(r)?qS(r):Hh(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Zt(e)||$t(e))return e}const BS=/;(?![^(]*\))/g,jS=/:([^]+)/,HS=/\/\*[^]*?\*\//g;function qS(e){const t={};return e.replace(HS,"").split(BS).forEach(n=>{if(n){const r=n.split(jS);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qh(e){let t="";if(Zt(e))t=e;else if(ft(e))for(let n=0;n<e.length;n++){const r=qh(e[n]);r&&(t+=r+" ")}else if($t(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const WS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",KS=Uh(WS);function uy(e){return!!e||e===""}const hy=e=>!!(e&&e.__v_isRef===!0),Fs=e=>Zt(e)?e:e==null?"":ft(e)||$t(e)&&(e.toString===ay||!_t(e.toString))?hy(e)?Fs(e.value):JSON.stringify(e,dy,2):String(e),dy=(e,t)=>hy(t)?dy(e,t.value):Bs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Ql(r,i)+" =>"]=s,n),{})}:iy(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ql(n))}:kr(t)?Ql(t):$t(t)&&!ft(t)&&!cy(t)?String(t):t,Ql=(e,t="")=>{var n;return kr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ve;class fy{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ve,!t&&ve&&(this.index=(ve.scopes||(ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ve;try{return ve=this,t()}finally{ve=n}}}on(){++this._on===1&&(this.prevScope=ve,ve=this)}off(){this._on>0&&--this._on===0&&(ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function py(e){return new fy(e)}function my(){return ve}function GS(e,t=!1){ve&&ve.cleanups.push(e)}let xt;const Xl=new WeakSet;class gy{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ve&&ve.active&&ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xl.has(this)&&(Xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kp(this),vy(this);const t=xt,n=on;xt=this,on=!0;try{return this.fn()}finally{Ey(this),xt=t,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Gh(t);this.deps=this.depsTail=void 0,kp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ku(this)&&this.run()}get dirty(){return ku(this)}}let _y=0,eo,no;function yy(e,t=!1){if(e.flags|=8,t){e.next=no,no=e;return}e.next=eo,eo=e}function Wh(){_y++}function Kh(){if(--_y>0)return;if(no){let t=no;for(no=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;eo;){let t=eo;for(eo=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function vy(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ey(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Gh(r),zS(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ku(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ty(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ty(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yo)||(e.globalVersion=yo,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ku(e))))return;e.flags|=2;const t=e.dep,n=xt,r=on;xt=e,on=!0;try{vy(e);const s=e.fn(e._value);(t.version===0||_r(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{xt=n,on=r,Ey(e),e.flags&=-3}}function Gh(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Gh(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function zS(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let on=!0;const wy=[];function qn(){wy.push(on),on=!1}function Wn(){const e=wy.pop();on=e===void 0?!0:e}function kp(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=xt;xt=void 0;try{t()}finally{xt=n}}}let yo=0;class YS{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zh{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xt||!on||xt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xt)n=this.activeLink=new YS(xt,this),xt.deps?(n.prevDep=xt.depsTail,xt.depsTail.nextDep=n,xt.depsTail=n):xt.deps=xt.depsTail=n,Iy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xt.depsTail,n.nextDep=void 0,xt.depsTail.nextDep=n,xt.depsTail=n,xt.deps===n&&(xt.deps=r)}return n}trigger(t){this.version++,yo++,this.notify(t)}notify(t){Wh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Kh()}}}function Iy(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Iy(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Za=new WeakMap,Xr=Symbol(""),Vu=Symbol(""),vo=Symbol("");function Te(e,t,n){if(on&&xt){let r=Za.get(e);r||Za.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new zh),s.map=r,s.key=n),s.track()}}function Vn(e,t,n,r,s,i){const o=Za.get(e);if(!o){yo++;return}const c=l=>{l&&l.trigger()};if(Wh(),t==="clear")o.forEach(c);else{const l=ft(e),u=l&&xc(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===vo||!kr(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(vo)),t){case"add":l?u&&c(o.get("length")):(c(o.get(Xr)),Bs(e)&&c(o.get(Vu)));break;case"delete":l||(c(o.get(Xr)),Bs(e)&&c(o.get(Vu)));break;case"set":Bs(e)&&c(o.get(Xr));break}}Kh()}function QS(e,t){const n=Za.get(e);return n&&n.get(t)}function Ss(e){const t=St(e);return t===e?t:(Te(t,"iterate",vo),He(e)?t:t.map(ln))}function $c(e){return Te(e=St(e),"iterate",vo),e}function ar(e,t){return Kn(e)?jn(e)?ti(ln(t)):ti(t):ln(t)}const XS={__proto__:null,[Symbol.iterator](){return Jl(this,Symbol.iterator,e=>ar(this,e))},concat(...e){return Ss(this).concat(...e.map(t=>ft(t)?Ss(t):t))},entries(){return Jl(this,"entries",e=>(e[1]=ar(this,e[1]),e))},every(e,t){return Nn(this,"every",e,t,void 0,arguments)},filter(e,t){return Nn(this,"filter",e,t,n=>n.map(r=>ar(this,r)),arguments)},find(e,t){return Nn(this,"find",e,t,n=>ar(this,n),arguments)},findIndex(e,t){return Nn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Nn(this,"findLast",e,t,n=>ar(this,n),arguments)},findLastIndex(e,t){return Nn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Nn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Zl(this,"includes",e)},indexOf(...e){return Zl(this,"indexOf",e)},join(e){return Ss(this).join(e)},lastIndexOf(...e){return Zl(this,"lastIndexOf",e)},map(e,t){return Nn(this,"map",e,t,void 0,arguments)},pop(){return Ui(this,"pop")},push(...e){return Ui(this,"push",e)},reduce(e,...t){return Vp(this,"reduce",e,t)},reduceRight(e,...t){return Vp(this,"reduceRight",e,t)},shift(){return Ui(this,"shift")},some(e,t){return Nn(this,"some",e,t,void 0,arguments)},splice(...e){return Ui(this,"splice",e)},toReversed(){return Ss(this).toReversed()},toSorted(e){return Ss(this).toSorted(e)},toSpliced(...e){return Ss(this).toSpliced(...e)},unshift(...e){return Ui(this,"unshift",e)},values(){return Jl(this,"values",e=>ar(this,e))}};function Jl(e,t,n){const r=$c(e),s=r[t]();return r!==e&&!He(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const JS=Array.prototype;function Nn(e,t,n,r,s,i){const o=$c(e),c=o!==e&&!He(e),l=o[t];if(l!==JS[t]){const p=l.apply(e,i);return c?ln(p):p}let u=n;o!==e&&(c?u=function(p,m){return n.call(this,ar(e,p),m,e)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,e)}));const d=l.call(o,u,r);return c&&s?s(d):d}function Vp(e,t,n,r){const s=$c(e);let i=n;return s!==e&&(He(e)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,e)}):i=function(o,c,l){return n.call(this,o,ar(e,c),l,e)}),s[t](i,...r)}function Zl(e,t,n){const r=St(e);Te(r,"iterate",vo);const s=r[t](...n);return(s===-1||s===!1)&&Bc(n[0])?(n[0]=St(n[0]),r[t](...n)):s}function Ui(e,t,n=[]){qn(),Wh();const r=St(e)[t].apply(e,n);return Kh(),Wn(),r}const ZS=Uh("__proto__,__v_isRef,__isVue"),Ay=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(kr));function tR(e){kr(e)||(e=String(e));const t=St(this);return Te(t,"has",e),t.hasOwnProperty(e)}class by{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?uR:Py:i?Cy:Ry).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=ft(t);if(!s){let l;if(o&&(l=XS[n]))return l;if(n==="hasOwnProperty")return tR}const c=Reflect.get(t,n,Kt(t)?t:r);if((kr(n)?Ay.has(n):ZS(n))||(s||Te(t,"get",n),i))return c;if(Kt(c)){const l=o&&xc(n)?c:c.value;return s&&$t(l)?xu(l):l}return $t(c)?s?xu(c):$o(c):c}}class Sy extends by{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const o=ft(t)&&xc(n);if(!this._isShallow){const u=Kn(i);if(!He(r)&&!Kn(r)&&(i=St(i),r=St(r)),!o&&Kt(i)&&!Kt(r))return u||(i.value=r),!0}const c=o?Number(n)<t.length:Ot(t,n),l=Reflect.set(t,n,r,Kt(t)?t:s);return t===St(s)&&(c?_r(r,i)&&Vn(t,"set",n,r):Vn(t,"add",n,r)),l}deleteProperty(t,n){const r=Ot(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Vn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!kr(n)||!Ay.has(n))&&Te(t,"has",n),r}ownKeys(t){return Te(t,"iterate",ft(t)?"length":Xr),Reflect.ownKeys(t)}}class eR extends by{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const nR=new Sy,rR=new eR,sR=new Sy(!0);const Lu=e=>e,Aa=e=>Reflect.getPrototypeOf(e);function iR(e,t,n){return function(...r){const s=this.__v_raw,i=St(s),o=Bs(i),c=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=s[e](...r),d=n?Lu:t?ti:ln;return!t&&Te(i,"iterate",l?Vu:Xr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function ba(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function oR(e,t){const n={get(s){const i=this.__v_raw,o=St(i),c=St(s);e||(_r(s,c)&&Te(o,"get",s),Te(o,"get",c));const{has:l}=Aa(o),u=t?Lu:e?ti:ln;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Te(St(s),"iterate",Xr),s.size},has(s){const i=this.__v_raw,o=St(i),c=St(s);return e||(_r(s,c)&&Te(o,"has",s),Te(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=St(c),u=t?Lu:e?ti:ln;return!e&&Te(l,"iterate",Xr),c.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return oe(n,e?{add:ba("add"),set:ba("set"),delete:ba("delete"),clear:ba("clear")}:{add(s){!t&&!He(s)&&!Kn(s)&&(s=St(s));const i=St(this);return Aa(i).has.call(i,s)||(i.add(s),Vn(i,"add",s,s)),this},set(s,i){!t&&!He(i)&&!Kn(i)&&(i=St(i));const o=St(this),{has:c,get:l}=Aa(o);let u=c.call(o,s);u||(s=St(s),u=c.call(o,s));const d=l.call(o,s);return o.set(s,i),u?_r(i,d)&&Vn(o,"set",s,i):Vn(o,"add",s,i),this},delete(s){const i=St(this),{has:o,get:c}=Aa(i);let l=o.call(i,s);l||(s=St(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Vn(i,"delete",s,void 0),u},clear(){const s=St(this),i=s.size!==0,o=s.clear();return i&&Vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=iR(s,e,t)}),n}function Yh(e,t){const n=oR(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Ot(n,s)&&s in r?n:r,s,i)}const aR={get:Yh(!1,!1)},cR={get:Yh(!1,!0)},lR={get:Yh(!0,!1)};const Ry=new WeakMap,Cy=new WeakMap,Py=new WeakMap,uR=new WeakMap;function hR(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dR(e){return e.__v_skip||!Object.isExtensible(e)?0:hR(FS(e))}function $o(e){return Kn(e)?e:Qh(e,!1,nR,aR,Ry)}function Oy(e){return Qh(e,!1,sR,cR,Cy)}function xu(e){return Qh(e,!0,rR,lR,Py)}function Qh(e,t,n,r,s){if(!$t(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=dR(e);if(i===0)return e;const o=s.get(e);if(o)return o;const c=new Proxy(e,i===2?r:n);return s.set(e,c),c}function jn(e){return Kn(e)?jn(e.__v_raw):!!(e&&e.__v_isReactive)}function Kn(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function Bc(e){return e?!!e.__v_raw:!1}function St(e){const t=e&&e.__v_raw;return t?St(t):e}function Xh(e){return!Ot(e,"__v_skip")&&Object.isExtensible(e)&&ly(e,"__v_skip",!0),e}const ln=e=>$t(e)?$o(e):e,ti=e=>$t(e)?xu(e):e;function Kt(e){return e?e.__v_isRef===!0:!1}function Jr(e){return Ny(e,!1)}function fR(e){return Ny(e,!0)}function Ny(e,t){return Kt(e)?e:new pR(e,t)}class pR{constructor(t,n){this.dep=new zh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:St(t),this._value=n?t:ln(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||He(t)||Kn(t);t=r?t:St(t),_r(t,n)&&(this._rawValue=t,this._value=r?t:ln(t),this.dep.trigger())}}function Ye(e){return Kt(e)?e.value:e}const mR={get:(e,t,n)=>t==="__v_raw"?e:Ye(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Kt(s)&&!Kt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Dy(e){return jn(e)?e:new Proxy(e,mR)}function gR(e){const t=ft(e)?new Array(e.length):{};for(const n in e)t[n]=yR(e,n);return t}class _R{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=St(t);let s=!0,i=t;if(!ft(t)||!xc(String(n)))do s=!Bc(i)||He(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Ye(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Kt(this._raw[this._key])){const n=this._object[this._key];if(Kt(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return QS(this._raw,this._key)}}function yR(e,t,n){return new _R(e,t,n)}class vR{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new zh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return yy(this,!0),!0}get value(){const t=this.dep.track();return Ty(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ER(e,t,n=!1){let r,s;return _t(e)?r=e:(r=e.get,s=e.set),new vR(r,s,n)}const Sa={},tc=new WeakMap;let jr;function TR(e,t=!1,n=jr){if(n){let r=tc.get(n);r||tc.set(n,r=[]),r.push(e)}}function wR(e,t,n=Lt){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=L=>s?L:He(L)||s===!1||s===0?Ln(L,1):Ln(L);let d,p,m,_,S=!1,P=!1;if(Kt(e)?(p=()=>e.value,S=He(e)):jn(e)?(p=()=>u(e),S=!0):ft(e)?(P=!0,S=e.some(L=>jn(L)||He(L)),p=()=>e.map(L=>{if(Kt(L))return L.value;if(jn(L))return u(L);if(_t(L))return l?l(L,2):L()})):_t(e)?t?p=l?()=>l(e,2):e:p=()=>{if(m){qn();try{m()}finally{Wn()}}const L=jr;jr=d;try{return l?l(e,3,[_]):e(_)}finally{jr=L}}:p=sn,t&&s){const L=p,z=s===!0?1/0:s;p=()=>Ln(L(),z)}const O=my(),x=()=>{d.stop(),O&&O.active&&Bh(O.effects,d)};if(i&&t){const L=t;t=(...z)=>{L(...z),x()}}let M=P?new Array(e.length).fill(Sa):Sa;const U=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(t){const z=d.run();if(s||S||(P?z.some((Z,A)=>_r(Z,M[A])):_r(z,M))){m&&m();const Z=jr;jr=d;try{const A=[z,M===Sa?void 0:P&&M[0]===Sa?[]:M,_];M=z,l?l(t,3,A):t(...A)}finally{jr=Z}}}else d.run()};return c&&c(U),d=new gy(p),d.scheduler=o?()=>o(U,!1):U,_=L=>TR(L,!1,d),m=d.onStop=()=>{const L=tc.get(d);if(L){if(l)l(L,4);else for(const z of L)z();tc.delete(d)}},t?r?U(!0):M=d.run():o?o(U.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function Ln(e,t=1/0,n){if(t<=0||!$t(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Kt(e))Ln(e.value,t,n);else if(ft(e))for(let r=0;r<e.length;r++)Ln(e[r],t,n);else if(iy(e)||Bs(e))e.forEach(r=>{Ln(r,t,n)});else if(cy(e)){for(const r in e)Ln(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ln(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bo(e,t,n,r){try{return r?e(...r):e()}catch(s){jc(s,t,n)}}function Sn(e,t,n,r){if(_t(e)){const s=Bo(e,t,n,r);return s&&oy(s)&&s.catch(i=>{jc(i,t,n)}),s}if(ft(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Sn(e[i],t,n,r));return s}}function jc(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Lt;if(t){let c=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,l,u)===!1)return}c=c.parent}if(i){qn(),Bo(i,null,10,[e,l,u]),Wn();return}}IR(e,n,s,r,o)}function IR(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Pe=[];let _n=-1;const js=[];let cr=null,Ns=0;const ky=Promise.resolve();let ec=null;function Jh(e){const t=ec||ky;return e?t.then(this?e.bind(this):e):t}function AR(e){let t=_n+1,n=Pe.length;for(;t<n;){const r=t+n>>>1,s=Pe[r],i=Eo(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Zh(e){if(!(e.flags&1)){const t=Eo(e),n=Pe[Pe.length-1];!n||!(e.flags&2)&&t>=Eo(n)?Pe.push(e):Pe.splice(AR(t),0,e),e.flags|=1,Vy()}}function Vy(){ec||(ec=ky.then(xy))}function bR(e){ft(e)?js.push(...e):cr&&e.id===-1?cr.splice(Ns+1,0,e):e.flags&1||(js.push(e),e.flags|=1),Vy()}function Lp(e,t,n=_n+1){for(;n<Pe.length;n++){const r=Pe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ly(e){if(js.length){const t=[...new Set(js)].sort((n,r)=>Eo(n)-Eo(r));if(js.length=0,cr){cr.push(...t);return}for(cr=t,Ns=0;Ns<cr.length;Ns++){const n=cr[Ns];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}cr=null,Ns=0}}const Eo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xy(e){const t=sn;try{for(_n=0;_n<Pe.length;_n++){const n=Pe[_n];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Bo(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;_n<Pe.length;_n++){const n=Pe[_n];n&&(n.flags&=-2)}_n=-1,Pe.length=0,Ly(),ec=null,(Pe.length||js.length)&&xy()}}let $e=null,My=null;function nc(e){const t=$e;return $e=e,My=e&&e.type.__scopeId||null,t}function SR(e,t=$e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ic(-1);const i=nc(t);let o;try{o=e(...s)}finally{nc(i),r._d&&ic(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xp(e,t){if($e===null)return e;const n=Kc($e),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,c,l=Lt]=t[s];i&&(_t(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return e}function $r(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(qn(),Sn(l,n,8,[e.el,c,e,t]),Wn())}}function Ma(e,t){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[e]=t}}function an(e,t,n=!1){const r=dv();if(r||Zr){let s=Zr?Zr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&_t(t)?t.call(r&&r.proxy):t}}function RR(){return!!(dv()||Zr)}const CR=Symbol.for("v-scx"),PR=()=>an(CR);function ro(e,t,n){return Fy(e,t,n)}function Fy(e,t,n=Lt){const{immediate:r,deep:s,flush:i,once:o}=n,c=oe({},n),l=t&&r||!t&&i!=="post";let u;if(wo){if(i==="sync"){const _=PR();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=sn,_.resume=sn,_.pause=sn,_}}const d=Ie;c.call=(_,S,P)=>Sn(_,d,S,P);let p=!1;i==="post"?c.scheduler=_=>{Ue(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():Zh(_)}),c.augmentJob=_=>{t&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=wR(e,t,c);return wo&&(u?u.push(m):l&&m()),m}function OR(e,t,n){const r=this.proxy,s=Zt(e)?e.includes(".")?Uy(r,e):()=>r[e]:e.bind(r,r);let i;_t(t)?i=t:(i=t.handler,n=t);const o=jo(this),c=Fy(s,i.bind(r),n);return o(),c}function Uy(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const NR=Symbol("_vte"),DR=e=>e.__isTeleport,kR=Symbol("_leaveCb");function td(e,t){e.shapeFlag&6&&e.component?(e.transition=t,td(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $y(e,t){return _t(e)?(()=>oe({name:e.name},t,{setup:e}))():e}function By(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const rc=new WeakMap;function so(e,t,n,r,s=!1){if(ft(e)){e.forEach((S,P)=>so(S,t&&(ft(t)?t[P]:t),n,r,s));return}if(io(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&so(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Kc(r.component):r.el,o=s?null:i,{i:c,r:l}=e,u=t&&t.r,d=c.refs===Lt?c.refs={}:c.refs,p=c.setupState,m=St(p),_=p===Lt?sy:S=>Ot(m,S);if(u!=null&&u!==l){if(Mp(t),Zt(u))d[u]=null,_(u)&&(p[u]=null);else if(Kt(u)){u.value=null;const S=t;S.k&&(d[S.k]=null)}}if(_t(l))Bo(l,c,12,[o,d]);else{const S=Zt(l),P=Kt(l);if(S||P){const O=()=>{if(e.f){const x=S?_(l)?p[l]:d[l]:l.value;if(s)ft(x)&&Bh(x,i);else if(ft(x))x.includes(i)||x.push(i);else if(S)d[l]=[i],_(l)&&(p[l]=d[l]);else{const M=[i];l.value=M,e.k&&(d[e.k]=M)}}else S?(d[l]=o,_(l)&&(p[l]=o)):P&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const x=()=>{O(),rc.delete(e)};x.id=-1,rc.set(e,x),Ue(x,n)}else Mp(e),O()}}}function Mp(e){const t=rc.get(e);t&&(t.flags|=8,rc.delete(e))}Uc().requestIdleCallback;Uc().cancelIdleCallback;const io=e=>!!e.type.__asyncLoader,jy=e=>e.type.__isKeepAlive;function VR(e,t){Hy(e,"a",t)}function LR(e,t){Hy(e,"da",t)}function Hy(e,t,n=Ie){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Hc(t,r,n),n){let s=n.parent;for(;s&&s.parent;)jy(s.parent.vnode)&&xR(r,t,n,s),s=s.parent}}function xR(e,t,n,r){const s=Hc(t,e,r,!0);Wy(()=>{Bh(r[t],s)},n)}function Hc(e,t,n=Ie,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{qn();const c=jo(n),l=Sn(t,n,e,o);return c(),Wn(),l});return r?s.unshift(i):s.push(i),i}}const Jn=e=>(t,n=Ie)=>{(!wo||e==="sp")&&Hc(e,(...r)=>t(...r),n)},MR=Jn("bm"),qy=Jn("m"),FR=Jn("bu"),UR=Jn("u"),$R=Jn("bum"),Wy=Jn("um"),BR=Jn("sp"),jR=Jn("rtg"),HR=Jn("rtc");function qR(e,t=Ie){Hc("ec",e,t)}const Ky="components";function WR(e,t){return GR(Ky,e,!0,t)||e}const KR=Symbol.for("v-ndc");function GR(e,t,n=!0,r=!1){const s=$e||Ie;if(s){const i=s.type;if(e===Ky){const c=kC(i,!1);if(c&&(c===t||c===tn(t)||c===Fc(tn(t))))return i}const o=Fp(s[e]||i[e],t)||Fp(s.appContext[e],t);return!o&&r?i:o}}function Fp(e,t){return e&&(e[t]||e[tn(t)]||e[Fc(tn(t))])}function zR(e,t,n,r){let s;const i=n&&n[r],o=ft(e);if(o||Zt(e)){const c=o&&jn(e);let l=!1,u=!1;c&&(l=!He(e),u=Kn(e),e=$c(e)),s=new Array(e.length);for(let d=0,p=e.length;d<p;d++)s[d]=t(l?u?ti(ln(e[d])):ln(e[d]):e[d],d,void 0,i&&i[d])}else if(typeof e=="number"){s=new Array(e);for(let c=0;c<e;c++)s[c]=t(c+1,c,void 0,i&&i[c])}else if($t(e))if(e[Symbol.iterator])s=Array.from(e,(c,l)=>t(c,l,void 0,i&&i[l]));else{const c=Object.keys(e);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const d=c[l];s[l]=t(e[d],d,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}const Mu=e=>e?fv(e)?Kc(e):Mu(e.parent):null,oo=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mu(e.parent),$root:e=>Mu(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ed(e),$forceUpdate:e=>e.f||(e.f=()=>{Zh(e.update)}),$nextTick:e=>e.n||(e.n=Jh.bind(e.proxy)),$watch:e=>OR.bind(e)}),tu=(e,t)=>e!==Lt&&!e.__isScriptSetup&&Ot(e,t),YR={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=e;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(tu(r,t))return o[t]=1,r[t];if(s!==Lt&&Ot(s,t))return o[t]=2,s[t];if(Ot(i,t))return o[t]=3,i[t];if(n!==Lt&&Ot(n,t))return o[t]=4,n[t];Fu&&(o[t]=0)}}const u=oo[t];let d,p;if(u)return t==="$attrs"&&Te(e.attrs,"get",""),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==Lt&&Ot(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,Ot(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return tu(s,t)?(s[t]=n,!0):r!==Lt&&Ot(r,t)?(r[t]=n,!0):Ot(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||e!==Lt&&c[0]!=="$"&&Ot(e,c)||tu(t,c)||Ot(i,c)||Ot(r,c)||Ot(oo,c)||Ot(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ot(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Up(e){return ft(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Fu=!0;function QR(e){const t=ed(e),n=e.proxy,r=e.ctx;Fu=!1,t.beforeCreate&&$p(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:P,deactivated:O,beforeDestroy:x,beforeUnmount:M,destroyed:U,unmounted:L,render:z,renderTracked:Z,renderTriggered:A,errorCaptured:y,serverPrefetch:E,expose:w,inheritAttrs:b,components:R,directives:T,filters:Mt}=t;if(u&&XR(u,r,null),o)for(const st in o){const yt=o[st];_t(yt)&&(r[st]=yt.bind(n))}if(s){const st=s.call(n,n);$t(st)&&(e.data=$o(st))}if(Fu=!0,i)for(const st in i){const yt=i[st],Gt=_t(yt)?yt.bind(n,n):_t(yt.get)?yt.get.bind(n,n):sn,pe=!_t(yt)&&_t(yt.set)?yt.set.bind(n):sn,me=ke({get:Gt,set:pe});Object.defineProperty(r,st,{enumerable:!0,configurable:!0,get:()=>me.value,set:Nt=>me.value=Nt})}if(c)for(const st in c)Gy(c[st],r,n,st);if(l){const st=_t(l)?l.call(n):l;Reflect.ownKeys(st).forEach(yt=>{Ma(yt,st[yt])})}d&&$p(d,e,"c");function vt(st,yt){ft(yt)?yt.forEach(Gt=>st(Gt.bind(n))):yt&&st(yt.bind(n))}if(vt(MR,p),vt(qy,m),vt(FR,_),vt(UR,S),vt(VR,P),vt(LR,O),vt(qR,y),vt(HR,Z),vt(jR,A),vt($R,M),vt(Wy,L),vt(BR,E),ft(w))if(w.length){const st=e.exposed||(e.exposed={});w.forEach(yt=>{Object.defineProperty(st,yt,{get:()=>n[yt],set:Gt=>n[yt]=Gt,enumerable:!0})})}else e.exposed||(e.exposed={});z&&e.render===sn&&(e.render=z),b!=null&&(e.inheritAttrs=b),R&&(e.components=R),T&&(e.directives=T),E&&By(e)}function XR(e,t,n=sn){ft(e)&&(e=Uu(e));for(const r in e){const s=e[r];let i;$t(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),Kt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function $p(e,t,n){Sn(ft(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gy(e,t,n,r){let s=r.includes(".")?Uy(n,r):()=>n[r];if(Zt(e)){const i=t[e];_t(i)&&ro(s,i)}else if(_t(e))ro(s,e.bind(n));else if($t(e))if(ft(e))e.forEach(i=>Gy(i,t,n,r));else{const i=_t(e.handler)?e.handler.bind(n):t[e.handler];_t(i)&&ro(s,i,e)}}function ed(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let l;return c?l=c:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(u=>sc(l,u,o,!0)),sc(l,t,o)),$t(t)&&i.set(t,l),l}function sc(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&sc(e,i,n,!0),s&&s.forEach(o=>sc(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=JR[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const JR={data:Bp,props:jp,emits:jp,methods:Wi,computed:Wi,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Wi,directives:Wi,watch:tC,provide:Bp,inject:ZR};function Bp(e,t){return t?e?function(){return oe(_t(e)?e.call(this,this):e,_t(t)?t.call(this,this):t)}:t:e}function ZR(e,t){return Wi(Uu(e),Uu(t))}function Uu(e){if(ft(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function Wi(e,t){return e?oe(Object.create(null),e,t):t}function jp(e,t){return e?ft(e)&&ft(t)?[...new Set([...e,...t])]:oe(Object.create(null),Up(e),Up(t??{})):t}function tC(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function zy(){return{app:null,config:{isNativeTag:sy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eC=0;function nC(e,t){return function(r,s=null){_t(r)||(r=oe({},r)),s!=null&&!$t(s)&&(s=null);const i=zy(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:eC++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:LC,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&_t(d.install)?(o.add(d),d.install(u,...p)):_t(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!l){const _=u._ceVNode||re(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&t?t(_,d):e(_,d,m),l=!0,u._container=d,d.__vue_app__=u,Kc(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Sn(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Zr;Zr=u;try{return d()}finally{Zr=p}}};return u}}let Zr=null;const rC=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tn(t)}Modifiers`]||e[`${fs(t)}Modifiers`];function sC(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Lt;let s=n;const i=t.startsWith("update:"),o=i&&rC(r,t.slice(7));o&&(o.trim&&(s=n.map(d=>Zt(d)?d.trim():d)),o.number&&(s=n.map(jh)));let c,l=r[c=Yl(t)]||r[c=Yl(tn(t))];!l&&i&&(l=r[c=Yl(fs(t))]),l&&Sn(l,e,6,s);const u=r[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Sn(u,e,6,s)}}const iC=new WeakMap;function Yy(e,t,n=!1){const r=n?iC:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},c=!1;if(!_t(e)){const l=u=>{const d=Yy(u,t,!0);d&&(c=!0,oe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!c?($t(e)&&r.set(e,null),null):(ft(i)?i.forEach(l=>o[l]=null):oe(o,i),$t(e)&&r.set(e,o),o)}function qc(e,t){return!e||!Vc(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ot(e,t[0].toLowerCase()+t.slice(1))||Ot(e,fs(t))||Ot(e,t))}function eu(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:S,inheritAttrs:P}=e,O=nc(e);let x,M;try{if(n.shapeFlag&4){const L=s||r,z=L;x=yn(u.call(z,L,d,p,_,m,S)),M=c}else{const L=t;x=yn(L.length>1?L(p,{attrs:c,slots:o,emit:l}):L(p,null)),M=t.props?c:oC(c)}}catch(L){ao.length=0,jc(L,e,1),x=re(Sr)}let U=x;if(M&&P!==!1){const L=Object.keys(M),{shapeFlag:z}=U;L.length&&z&7&&(i&&L.some($h)&&(M=aC(M,i)),U=ei(U,M,!1,!0))}return n.dirs&&(U=ei(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&td(U,n.transition),x=U,nc(O),x}const oC=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vc(n))&&((t||(t={}))[n]=e[n]);return t},aC=(e,t)=>{const n={};for(const r in e)(!$h(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function cC(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:c,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hp(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!qc(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Hp(r,o,u):!0:!!o;return!1}function Hp(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!qc(n,i))return!0}return!1}function lC({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Qy={},Xy=()=>Object.create(Qy),Jy=e=>Object.getPrototypeOf(e)===Qy;function uC(e,t,n,r=!1){const s={},i=Xy();e.propsDefaults=Object.create(null),Zy(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Oy(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function hC(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,c=St(s),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(qc(e.emitsOptions,m))continue;const _=t[m];if(l)if(Ot(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=tn(m);s[S]=$u(l,c,S,_,e,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Zy(e,t,s,i)&&(u=!0);let d;for(const p in c)(!t||!Ot(t,p)&&((d=fs(p))===p||!Ot(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=$u(l,c,p,void 0,e,!0)):delete s[p]);if(i!==c)for(const p in i)(!t||!Ot(t,p))&&(delete i[p],u=!0)}u&&Vn(e.attrs,"set","")}function Zy(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,c;if(t)for(let l in t){if(to(l))continue;const u=t[l];let d;s&&Ot(s,d=tn(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:qc(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=St(n),u=c||Lt;for(let d=0;d<i.length;d++){const p=i[d];n[p]=$u(s,l,p,u[p],e,!Ot(u,p))}}return o}function $u(e,t,n,r,s,i){const o=e[n];if(o!=null){const c=Ot(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&_t(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=jo(s);r=u[n]=l.call(null,t),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===fs(n))&&(r=!0))}return r}const dC=new WeakMap;function tv(e,t,n=!1){const r=n?dC:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},c=[];let l=!1;if(!_t(e)){const d=p=>{l=!0;const[m,_]=tv(p,t,!0);oe(o,m),_&&c.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return $t(e)&&r.set(e,$s),$s;if(ft(i))for(let d=0;d<i.length;d++){const p=tn(i[d]);qp(p)&&(o[p]=Lt)}else if(i)for(const d in i){const p=tn(d);if(qp(p)){const m=i[d],_=o[p]=ft(m)||_t(m)?{type:m}:oe({},m),S=_.type;let P=!1,O=!0;if(ft(S))for(let x=0;x<S.length;++x){const M=S[x],U=_t(M)&&M.name;if(U==="Boolean"){P=!0;break}else U==="String"&&(O=!1)}else P=_t(S)&&S.name==="Boolean";_[0]=P,_[1]=O,(P||Ot(_,"default"))&&c.push(p)}}const u=[o,c];return $t(e)&&r.set(e,u),u}function qp(e){return e[0]!=="$"&&!to(e)}const nd=e=>e==="_"||e==="_ctx"||e==="$stable",rd=e=>ft(e)?e.map(yn):[yn(e)],fC=(e,t,n)=>{if(t._n)return t;const r=SR((...s)=>rd(t(...s)),n);return r._c=!1,r},ev=(e,t,n)=>{const r=e._ctx;for(const s in e){if(nd(s))continue;const i=e[s];if(_t(i))t[s]=fC(s,i,r);else if(i!=null){const o=rd(i);t[s]=()=>o}}},nv=(e,t)=>{const n=rd(t);e.slots.default=()=>n},rv=(e,t,n)=>{for(const r in t)(n||!nd(r))&&(e[r]=t[r])},pC=(e,t,n)=>{const r=e.slots=Xy();if(e.vnode.shapeFlag&32){const s=t._;s?(rv(r,t,n),n&&ly(r,"_",s,!0)):ev(t,r)}else t&&nv(e,t)},mC=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=Lt;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:rv(s,t,n):(i=!t.$stable,ev(t,s)),o=t}else t&&(nv(e,t),o={default:1});if(i)for(const c in s)!nd(c)&&o[c]==null&&delete s[c]},Ue=EC;function gC(e){return _C(e)}function _C(e,t){const n=Uc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=sn,insertStaticContent:S}=e,P=(v,I,N,F=null,V=null,j=null,Y=void 0,K=null,W=!!I.dynamicChildren)=>{if(v===I)return;v&&!$i(v,I)&&(F=k(v),Nt(v,V,j,!0),v=null),I.patchFlag===-2&&(W=!1,I.dynamicChildren=null);const{type:B,ref:it,shapeFlag:X}=I;switch(B){case Wc:O(v,I,N,F);break;case Sr:x(v,I,N,F);break;case ru:v==null&&M(I,N,F,Y);break;case rn:R(v,I,N,F,V,j,Y,K,W);break;default:X&1?z(v,I,N,F,V,j,Y,K,W):X&6?T(v,I,N,F,V,j,Y,K,W):(X&64||X&128)&&B.process(v,I,N,F,V,j,Y,K,W,rt)}it!=null&&V?so(it,v&&v.ref,j,I||v,!I):it==null&&v&&v.ref!=null&&so(v.ref,null,j,v,!0)},O=(v,I,N,F)=>{if(v==null)r(I.el=c(I.children),N,F);else{const V=I.el=v.el;I.children!==v.children&&u(V,I.children)}},x=(v,I,N,F)=>{v==null?r(I.el=l(I.children||""),N,F):I.el=v.el},M=(v,I,N,F)=>{[v.el,v.anchor]=S(v.children,I,N,F,v.el,v.anchor)},U=({el:v,anchor:I},N,F)=>{let V;for(;v&&v!==I;)V=m(v),r(v,N,F),v=V;r(I,N,F)},L=({el:v,anchor:I})=>{let N;for(;v&&v!==I;)N=m(v),s(v),v=N;s(I)},z=(v,I,N,F,V,j,Y,K,W)=>{if(I.type==="svg"?Y="svg":I.type==="math"&&(Y="mathml"),v==null)Z(I,N,F,V,j,Y,K,W);else{const B=v.el&&v.el._isVueCE?v.el:null;try{B&&B._beginPatch(),E(v,I,V,j,Y,K,W)}finally{B&&B._endPatch()}}},Z=(v,I,N,F,V,j,Y,K)=>{let W,B;const{props:it,shapeFlag:X,transition:tt,dirs:lt}=v;if(W=v.el=o(v.type,j,it&&it.is,it),X&8?d(W,v.children):X&16&&y(v.children,W,null,F,V,nu(v,j),Y,K),lt&&$r(v,null,F,"created"),A(W,v,v.scopeId,Y,F),it){for(const pt in it)pt!=="value"&&!to(pt)&&i(W,pt,null,it[pt],j,F);"value"in it&&i(W,"value",null,it.value,j),(B=it.onVnodeBeforeMount)&&gn(B,F,v)}lt&&$r(v,null,F,"beforeMount");const ot=yC(V,tt);ot&&tt.beforeEnter(W),r(W,I,N),((B=it&&it.onVnodeMounted)||ot||lt)&&Ue(()=>{B&&gn(B,F,v),ot&&tt.enter(W),lt&&$r(v,null,F,"mounted")},V)},A=(v,I,N,F,V)=>{if(N&&_(v,N),F)for(let j=0;j<F.length;j++)_(v,F[j]);if(V){let j=V.subTree;if(I===j||av(j.type)&&(j.ssContent===I||j.ssFallback===I)){const Y=V.vnode;A(v,Y,Y.scopeId,Y.slotScopeIds,V.parent)}}},y=(v,I,N,F,V,j,Y,K,W=0)=>{for(let B=W;B<v.length;B++){const it=v[B]=K?lr(v[B]):yn(v[B]);P(null,it,I,N,F,V,j,Y,K)}},E=(v,I,N,F,V,j,Y)=>{const K=I.el=v.el;let{patchFlag:W,dynamicChildren:B,dirs:it}=I;W|=v.patchFlag&16;const X=v.props||Lt,tt=I.props||Lt;let lt;if(N&&Br(N,!1),(lt=tt.onVnodeBeforeUpdate)&&gn(lt,N,I,v),it&&$r(I,v,N,"beforeUpdate"),N&&Br(N,!0),(X.innerHTML&&tt.innerHTML==null||X.textContent&&tt.textContent==null)&&d(K,""),B?w(v.dynamicChildren,B,K,N,F,nu(I,V),j):Y||yt(v,I,K,null,N,F,nu(I,V),j,!1),W>0){if(W&16)b(K,X,tt,N,V);else if(W&2&&X.class!==tt.class&&i(K,"class",null,tt.class,V),W&4&&i(K,"style",X.style,tt.style,V),W&8){const ot=I.dynamicProps;for(let pt=0;pt<ot.length;pt++){const It=ot[pt],ae=X[It],te=tt[It];(te!==ae||It==="value")&&i(K,It,ae,te,V,N)}}W&1&&v.children!==I.children&&d(K,I.children)}else!Y&&B==null&&b(K,X,tt,N,V);((lt=tt.onVnodeUpdated)||it)&&Ue(()=>{lt&&gn(lt,N,I,v),it&&$r(I,v,N,"updated")},F)},w=(v,I,N,F,V,j,Y)=>{for(let K=0;K<I.length;K++){const W=v[K],B=I[K],it=W.el&&(W.type===rn||!$i(W,B)||W.shapeFlag&198)?p(W.el):N;P(W,B,it,null,F,V,j,Y,!0)}},b=(v,I,N,F,V)=>{if(I!==N){if(I!==Lt)for(const j in I)!to(j)&&!(j in N)&&i(v,j,I[j],null,V,F);for(const j in N){if(to(j))continue;const Y=N[j],K=I[j];Y!==K&&j!=="value"&&i(v,j,K,Y,V,F)}"value"in N&&i(v,"value",I.value,N.value,V)}},R=(v,I,N,F,V,j,Y,K,W)=>{const B=I.el=v?v.el:c(""),it=I.anchor=v?v.anchor:c("");let{patchFlag:X,dynamicChildren:tt,slotScopeIds:lt}=I;lt&&(K=K?K.concat(lt):lt),v==null?(r(B,N,F),r(it,N,F),y(I.children||[],N,it,V,j,Y,K,W)):X>0&&X&64&&tt&&v.dynamicChildren&&v.dynamicChildren.length===tt.length?(w(v.dynamicChildren,tt,N,V,j,Y,K),(I.key!=null||V&&I===V.subTree)&&sv(v,I,!0)):yt(v,I,N,it,V,j,Y,K,W)},T=(v,I,N,F,V,j,Y,K,W)=>{I.slotScopeIds=K,v==null?I.shapeFlag&512?V.ctx.activate(I,N,F,Y,W):Mt(I,N,F,V,j,Y,W):jt(v,I,W)},Mt=(v,I,N,F,V,j,Y)=>{const K=v.component=CC(v,F,V);if(jy(v)&&(K.ctx.renderer=rt),PC(K,!1,Y),K.asyncDep){if(V&&V.registerDep(K,vt,Y),!v.el){const W=K.subTree=re(Sr);x(null,W,I,N),v.placeholder=W.el}}else vt(K,v,I,N,V,j,Y)},jt=(v,I,N)=>{const F=I.component=v.component;if(cC(v,I,N))if(F.asyncDep&&!F.asyncResolved){st(F,I,N);return}else F.next=I,F.update();else I.el=v.el,F.vnode=I},vt=(v,I,N,F,V,j,Y)=>{const K=()=>{if(v.isMounted){let{next:X,bu:tt,u:lt,parent:ot,vnode:pt}=v;{const ee=iv(v);if(ee){X&&(X.el=pt.el,st(v,X,Y)),ee.asyncDep.then(()=>{v.isUnmounted||K()});return}}let It=X,ae;Br(v,!1),X?(X.el=pt.el,st(v,X,Y)):X=pt,tt&&xa(tt),(ae=X.props&&X.props.onVnodeBeforeUpdate)&&gn(ae,ot,X,pt),Br(v,!0);const te=eu(v),Me=v.subTree;v.subTree=te,P(Me,te,p(Me.el),k(Me),v,V,j),X.el=te.el,It===null&&lC(v,te.el),lt&&Ue(lt,V),(ae=X.props&&X.props.onVnodeUpdated)&&Ue(()=>gn(ae,ot,X,pt),V)}else{let X;const{el:tt,props:lt}=I,{bm:ot,m:pt,parent:It,root:ae,type:te}=v,Me=io(I);if(Br(v,!1),ot&&xa(ot),!Me&&(X=lt&&lt.onVnodeBeforeMount)&&gn(X,It,I),Br(v,!0),tt&&Ct){const ee=()=>{v.subTree=eu(v),Ct(tt,v.subTree,v,V,null)};Me&&te.__asyncHydrate?te.__asyncHydrate(tt,v,ee):ee()}else{ae.ce&&ae.ce._def.shadowRoot!==!1&&ae.ce._injectChildStyle(te);const ee=v.subTree=eu(v);P(null,ee,N,F,v,V,j),I.el=ee.el}if(pt&&Ue(pt,V),!Me&&(X=lt&&lt.onVnodeMounted)){const ee=I;Ue(()=>gn(X,It,ee),V)}(I.shapeFlag&256||It&&io(It.vnode)&&It.vnode.shapeFlag&256)&&v.a&&Ue(v.a,V),v.isMounted=!0,I=N=F=null}};v.scope.on();const W=v.effect=new gy(K);v.scope.off();const B=v.update=W.run.bind(W),it=v.job=W.runIfDirty.bind(W);it.i=v,it.id=v.uid,W.scheduler=()=>Zh(it),Br(v,!0),B()},st=(v,I,N)=>{I.component=v;const F=v.vnode.props;v.vnode=I,v.next=null,hC(v,I.props,F,N),mC(v,I.children,N),qn(),Lp(v),Wn()},yt=(v,I,N,F,V,j,Y,K,W=!1)=>{const B=v&&v.children,it=v?v.shapeFlag:0,X=I.children,{patchFlag:tt,shapeFlag:lt}=I;if(tt>0){if(tt&128){pe(B,X,N,F,V,j,Y,K,W);return}else if(tt&256){Gt(B,X,N,F,V,j,Y,K,W);return}}lt&8?(it&16&&Qt(B,V,j),X!==B&&d(N,X)):it&16?lt&16?pe(B,X,N,F,V,j,Y,K,W):Qt(B,V,j,!0):(it&8&&d(N,""),lt&16&&y(X,N,F,V,j,Y,K,W))},Gt=(v,I,N,F,V,j,Y,K,W)=>{v=v||$s,I=I||$s;const B=v.length,it=I.length,X=Math.min(B,it);let tt;for(tt=0;tt<X;tt++){const lt=I[tt]=W?lr(I[tt]):yn(I[tt]);P(v[tt],lt,N,null,V,j,Y,K,W)}B>it?Qt(v,V,j,!0,!1,X):y(I,N,F,V,j,Y,K,W,X)},pe=(v,I,N,F,V,j,Y,K,W)=>{let B=0;const it=I.length;let X=v.length-1,tt=it-1;for(;B<=X&&B<=tt;){const lt=v[B],ot=I[B]=W?lr(I[B]):yn(I[B]);if($i(lt,ot))P(lt,ot,N,null,V,j,Y,K,W);else break;B++}for(;B<=X&&B<=tt;){const lt=v[X],ot=I[tt]=W?lr(I[tt]):yn(I[tt]);if($i(lt,ot))P(lt,ot,N,null,V,j,Y,K,W);else break;X--,tt--}if(B>X){if(B<=tt){const lt=tt+1,ot=lt<it?I[lt].el:F;for(;B<=tt;)P(null,I[B]=W?lr(I[B]):yn(I[B]),N,ot,V,j,Y,K,W),B++}}else if(B>tt)for(;B<=X;)Nt(v[B],V,j,!0),B++;else{const lt=B,ot=B,pt=new Map;for(B=ot;B<=tt;B++){const ce=I[B]=W?lr(I[B]):yn(I[B]);ce.key!=null&&pt.set(ce.key,B)}let It,ae=0;const te=tt-ot+1;let Me=!1,ee=0;const Zn=new Array(te);for(B=0;B<te;B++)Zn[B]=0;for(B=lt;B<=X;B++){const ce=v[B];if(ae>=te){Nt(ce,V,j,!0);continue}let ze;if(ce.key!=null)ze=pt.get(ce.key);else for(It=ot;It<=tt;It++)if(Zn[It-ot]===0&&$i(ce,I[It])){ze=It;break}ze===void 0?Nt(ce,V,j,!0):(Zn[ze-ot]=B+1,ze>=ee?ee=ze:Me=!0,P(ce,I[ze],N,null,V,j,Y,K,W),ae++)}const Ai=Me?vC(Zn):$s;for(It=Ai.length-1,B=te-1;B>=0;B--){const ce=ot+B,ze=I[ce],ea=I[ce+1],vs=ce+1<it?ea.el||ov(ea):F;Zn[B]===0?P(null,ze,N,vs,V,j,Y,K,W):Me&&(It<0||B!==Ai[It]?me(ze,N,vs,2):It--)}}},me=(v,I,N,F,V=null)=>{const{el:j,type:Y,transition:K,children:W,shapeFlag:B}=v;if(B&6){me(v.component.subTree,I,N,F);return}if(B&128){v.suspense.move(I,N,F);return}if(B&64){Y.move(v,I,N,rt);return}if(Y===rn){r(j,I,N);for(let X=0;X<W.length;X++)me(W[X],I,N,F);r(v.anchor,I,N);return}if(Y===ru){U(v,I,N);return}if(F!==2&&B&1&&K)if(F===0)K.beforeEnter(j),r(j,I,N),Ue(()=>K.enter(j),V);else{const{leave:X,delayLeave:tt,afterLeave:lt}=K,ot=()=>{v.ctx.isUnmounted?s(j):r(j,I,N)},pt=()=>{j._isLeaving&&j[kR](!0),X(j,()=>{ot(),lt&&lt()})};tt?tt(j,ot,pt):pt()}else r(j,I,N)},Nt=(v,I,N,F=!1,V=!1)=>{const{type:j,props:Y,ref:K,children:W,dynamicChildren:B,shapeFlag:it,patchFlag:X,dirs:tt,cacheIndex:lt}=v;if(X===-2&&(V=!1),K!=null&&(qn(),so(K,null,N,v,!0),Wn()),lt!=null&&(I.renderCache[lt]=void 0),it&256){I.ctx.deactivate(v);return}const ot=it&1&&tt,pt=!io(v);let It;if(pt&&(It=Y&&Y.onVnodeBeforeUnmount)&&gn(It,I,v),it&6)Ht(v.component,N,F);else{if(it&128){v.suspense.unmount(N,F);return}ot&&$r(v,null,I,"beforeUnmount"),it&64?v.type.remove(v,I,N,rt,F):B&&!B.hasOnce&&(j!==rn||X>0&&X&64)?Qt(B,I,N,!1,!0):(j===rn&&X&384||!V&&it&16)&&Qt(W,I,N),F&&kt(v)}(pt&&(It=Y&&Y.onVnodeUnmounted)||ot)&&Ue(()=>{It&&gn(It,I,v),ot&&$r(v,null,I,"unmounted")},N)},kt=v=>{const{type:I,el:N,anchor:F,transition:V}=v;if(I===rn){be(N,F);return}if(I===ru){L(v);return}const j=()=>{s(N),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(v.shapeFlag&1&&V&&!V.persisted){const{leave:Y,delayLeave:K}=V,W=()=>Y(N,j);K?K(v.el,j,W):W()}else j()},be=(v,I)=>{let N;for(;v!==I;)N=m(v),s(v),v=N;s(I)},Ht=(v,I,N)=>{const{bum:F,scope:V,job:j,subTree:Y,um:K,m:W,a:B}=v;Wp(W),Wp(B),F&&xa(F),V.stop(),j&&(j.flags|=8,Nt(Y,v,I,N)),K&&Ue(K,I),Ue(()=>{v.isUnmounted=!0},I)},Qt=(v,I,N,F=!1,V=!1,j=0)=>{for(let Y=j;Y<v.length;Y++)Nt(v[Y],I,N,F,V)},k=v=>{if(v.shapeFlag&6)return k(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=m(v.anchor||v.el),N=I&&I[NR];return N?m(N):I};let J=!1;const Q=(v,I,N)=>{let F;v==null?I._vnode&&(Nt(I._vnode,null,null,!0),F=I._vnode.component):P(I._vnode||null,v,I,null,null,null,N),I._vnode=v,J||(J=!0,Lp(F),Ly(),J=!1)},rt={p:P,um:Nt,m:me,r:kt,mt:Mt,mc:y,pc:yt,pbc:w,n:k,o:e};let ht,Ct;return t&&([ht,Ct]=t(rt)),{render:Q,hydrate:ht,createApp:nC(Q,ht)}}function nu({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Br({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function yC(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function sv(e,t,n=!1){const r=e.children,s=t.children;if(ft(r)&&ft(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=lr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&sv(o,c)),c.type===Wc&&(c.patchFlag!==-1?c.el=o.el:c.__elIndex=i+(e.type===rn?1:0)),c.type===Sr&&!c.el&&(c.el=o.el)}}function vC(e){const t=e.slice(),n=[0];let r,s,i,o,c;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,e[n[c]]<u?i=c+1:o=c;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function iv(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:iv(t)}function Wp(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ov(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ov(t.subTree):null}const av=e=>e.__isSuspense;function EC(e,t){t&&t.pendingBranch?ft(e)?t.effects.push(...e):t.effects.push(e):bR(e)}const rn=Symbol.for("v-fgt"),Wc=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),ru=Symbol.for("v-stc"),ao=[];let Be=null;function mr(e=!1){ao.push(Be=e?null:[])}function TC(){ao.pop(),Be=ao[ao.length-1]||null}let To=1;function ic(e,t=!1){To+=e,e<0&&Be&&t&&(Be.hasOnce=!0)}function cv(e){return e.dynamicChildren=To>0?Be||$s:null,TC(),To>0&&Be&&Be.push(e),e}function Kr(e,t,n,r,s,i){return cv(Et(e,t,n,r,s,i,!0))}function wC(e,t,n,r,s){return cv(re(e,t,n,r,s,!0))}function oc(e){return e?e.__v_isVNode===!0:!1}function $i(e,t){return e.type===t.type&&e.key===t.key}const lv=({key:e})=>e??null,Fa=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Zt(e)||Kt(e)||_t(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function Et(e,t=null,n=null,r=0,s=null,i=e===rn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lv(t),ref:t&&Fa(t),scopeId:My,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return c?(sd(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Zt(n)?8:16),To>0&&!o&&Be&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Be.push(l),l}const re=IC;function IC(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===KR)&&(e=Sr),oc(e)){const c=ei(e,t,!0);return n&&sd(c,n),To>0&&!i&&Be&&(c.shapeFlag&6?Be[Be.indexOf(e)]=c:Be.push(c)),c.patchFlag=-2,c}if(VC(e)&&(e=e.__vccOpts),t){t=AC(t);let{class:c,style:l}=t;c&&!Zt(c)&&(t.class=qh(c)),$t(l)&&(Bc(l)&&!ft(l)&&(l=oe({},l)),t.style=Hh(l))}const o=Zt(e)?1:av(e)?128:DR(e)?64:$t(e)?4:_t(e)?2:0;return Et(e,t,n,r,s,o,i,!0)}function AC(e){return e?Bc(e)||Jy(e)?oe({},e):e:null}function ei(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=e,u=t?bC(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&lv(u),ref:t&&t.ref?n&&i?ft(i)?i.concat(Fa(t)):[i,Fa(t)]:Fa(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==rn?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ei(e.ssContent),ssFallback:e.ssFallback&&ei(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&td(d,l.clone(d)),d}function uv(e=" ",t=0){return re(Wc,null,e,t)}function hv(e="",t=!1){return t?(mr(),wC(Sr,null,e)):re(Sr,null,e)}function yn(e){return e==null||typeof e=="boolean"?re(Sr):ft(e)?re(rn,null,e.slice()):oc(e)?lr(e):re(Wc,null,String(e))}function lr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ei(e)}function sd(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ft(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),sd(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Jy(t)?t._ctx=$e:s===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else _t(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[uv(t)]):n=8);e.children=t,e.shapeFlag|=n}function bC(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=qh([t.class,r.class]));else if(s==="style")t.style=Hh([t.style,r.style]);else if(Vc(s)){const i=t[s],o=r[s];o&&i!==o&&!(ft(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function gn(e,t,n,r=null){Sn(e,t,7,[n,r])}const SC=zy();let RC=0;function CC(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||SC,i={uid:RC++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tv(r,s),emitsOptions:Yy(r,s),emit:null,emitted:null,propsDefaults:Lt,inheritAttrs:r.inheritAttrs,ctx:Lt,data:Lt,props:Lt,attrs:Lt,slots:Lt,refs:Lt,setupState:Lt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=sC.bind(null,i),e.ce&&e.ce(i),i}let Ie=null;const dv=()=>Ie||$e;let ac,Bu;{const e=Uc(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ac=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Bu=t("__VUE_SSR_SETTERS__",n=>wo=n)}const jo=e=>{const t=Ie;return ac(e),e.scope.on(),()=>{e.scope.off(),ac(t)}},Kp=()=>{Ie&&Ie.scope.off(),ac(null)};function fv(e){return e.vnode.shapeFlag&4}let wo=!1;function PC(e,t=!1,n=!1){t&&Bu(t);const{props:r,children:s}=e.vnode,i=fv(e);uC(e,r,i,t),pC(e,s,n||t);const o=i?OC(e,t):void 0;return t&&Bu(!1),o}function OC(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,YR);const{setup:r}=n;if(r){qn();const s=e.setupContext=r.length>1?DC(e):null,i=jo(e),o=Bo(r,e,0,[e.props,s]),c=oy(o);if(Wn(),i(),(c||e.sp)&&!io(e)&&By(e),c){if(o.then(Kp,Kp),t)return o.then(l=>{Gp(e,l,t)}).catch(l=>{jc(l,e,0)});e.asyncDep=o}else Gp(e,o,t)}else pv(e,t)}function Gp(e,t,n){_t(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:$t(t)&&(e.setupState=Dy(t)),pv(e,n)}let zp;function pv(e,t,n){const r=e.type;if(!e.render){if(!t&&zp&&!r.render){const s=r.template||ed(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:l}=r,u=oe(oe({isCustomElement:i,delimiters:c},o),l);r.render=zp(s,u)}}e.render=r.render||sn}{const s=jo(e);qn();try{QR(e)}finally{Wn(),s()}}}const NC={get(e,t){return Te(e,"get",""),e[t]}};function DC(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,NC),slots:e.slots,emit:e.emit,expose:t}}function Kc(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Dy(Xh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in oo)return oo[n](e)},has(t,n){return n in t||n in oo}})):e.proxy}function kC(e,t=!0){return _t(e)?e.displayName||e.name:e.name||t&&e.__name}function VC(e){return _t(e)&&"__vccOpts"in e}const ke=(e,t)=>ER(e,t,wo);function Io(e,t,n){try{ic(-1);const r=arguments.length;return r===2?$t(t)&&!ft(t)?oc(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oc(n)&&(n=[n]),re(e,t,n))}finally{ic(1)}}const LC="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ju;const Yp=typeof window<"u"&&window.trustedTypes;if(Yp)try{ju=Yp.createPolicy("vue",{createHTML:e=>e})}catch{}const mv=ju?e=>ju.createHTML(e):e=>e,xC="http://www.w3.org/2000/svg",MC="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Qp=kn&&kn.createElement("template"),FC={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?kn.createElementNS(xC,e):t==="mathml"?kn.createElementNS(MC,e):n?kn.createElement(e,{is:n}):kn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>kn.createTextNode(e),createComment:e=>kn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Qp.innerHTML=mv(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=Qp.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},UC=Symbol("_vtc");function $C(e,t,n){const r=e[UC];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xp=Symbol("_vod"),BC=Symbol("_vsh"),jC=Symbol(""),HC=/(?:^|;)\s*display\s*:/;function qC(e,t,n){const r=e.style,s=Zt(n);let i=!1;if(n&&!s){if(t)if(Zt(t))for(const o of t.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ua(r,c,"")}else for(const o in t)n[o]==null&&Ua(r,o,"");for(const o in n)o==="display"&&(i=!0),Ua(r,o,n[o])}else if(s){if(t!==n){const o=r[jC];o&&(n+=";"+o),r.cssText=n,i=HC.test(n)}}else t&&e.removeAttribute("style");Xp in e&&(e[Xp]=i?r.display:"",e[BC]&&(r.display="none"))}const Jp=/\s*!important$/;function Ua(e,t,n){if(ft(n))n.forEach(r=>Ua(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=WC(e,t);Jp.test(n)?e.setProperty(fs(r),n.replace(Jp,""),"important"):e[r]=n}}const Zp=["Webkit","Moz","ms"],su={};function WC(e,t){const n=su[t];if(n)return n;let r=tn(t);if(r!=="filter"&&r in e)return su[t]=r;r=Fc(r);for(let s=0;s<Zp.length;s++){const i=Zp[s]+r;if(i in e)return su[t]=i}return t}const tm="http://www.w3.org/1999/xlink";function em(e,t,n,r,s,i=KS(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(tm,t.slice(6,t.length)):e.setAttributeNS(tm,t,n):n==null||i&&!uy(n)?e.removeAttribute(t):e.setAttribute(t,i?"":kr(n)?String(n):n)}function nm(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?mv(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=uy(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Ds(e,t,n,r){e.addEventListener(t,n,r)}function KC(e,t,n,r){e.removeEventListener(t,n,r)}const rm=Symbol("_vei");function GC(e,t,n,r,s=null){const i=e[rm]||(e[rm]={}),o=i[t];if(r&&o)o.value=r;else{const[c,l]=zC(t);if(r){const u=i[t]=XC(r,s);Ds(e,c,u,l)}else o&&(KC(e,c,o,l),i[t]=void 0)}}const sm=/(?:Once|Passive|Capture)$/;function zC(e){let t;if(sm.test(e)){t={};let r;for(;r=e.match(sm);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fs(e.slice(2)),t]}let iu=0;const YC=Promise.resolve(),QC=()=>iu||(YC.then(()=>iu=0),iu=Date.now());function XC(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Sn(JC(r,n.value),t,5,[r])};return n.value=e,n.attached=QC(),n}function JC(e,t){if(ft(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const im=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ZC=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?$C(e,r,o):t==="style"?qC(e,n,r):Vc(t)?$h(t)||GC(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tP(e,t,r,o))?(nm(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&em(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Zt(r))?nm(e,tn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),em(e,t,r,o))};function tP(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&im(t)&&_t(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return im(t)&&Zt(n)?!1:t in e}const om=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ft(t)?n=>xa(t,n):t};function eP(e){e.target.composing=!0}function am(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ou=Symbol("_assign");function cm(e,t,n){return t&&(e=e.trim()),n&&(e=jh(e)),e}const lm={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[ou]=om(s);const i=r||s.props&&s.props.type==="number";Ds(e,t?"change":"input",o=>{o.target.composing||e[ou](cm(e.value,n,i))}),(n||i)&&Ds(e,"change",()=>{e.value=cm(e.value,n,i)}),t||(Ds(e,"compositionstart",eP),Ds(e,"compositionend",am),Ds(e,"change",am))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[ou]=om(o),e.composing)return;const c=(i||e.type==="number")&&!/^0\d/.test(e.value)?jh(e.value):e.value,l=t??"";c!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===l)||(e.value=l))}},nP=["ctrl","shift","alt","meta"],rP={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nP.some(n=>e[`${n}Key`]&&!t.includes(n))},sP=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const c=rP[t[o]];if(c&&c(s,t))return}return e(s,...i)})},iP=oe({patchProp:ZC},FC);let um;function oP(){return um||(um=gC(iP))}const aP=(...e)=>{const t=oP().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=lP(r);if(!s)return;const i=t._component;!_t(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,cP(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function cP(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lP(e){return Zt(e)?document.querySelector(e):e}var uP=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let gv;const Gc=e=>gv=e,_v=Symbol();function Hu(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var co;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(co||(co={}));function hP(){const e=py(!0),t=e.run(()=>Jr({}));let n=[],r=[];const s=Xh({install(i){Gc(s),s._a=i,i.provide(_v,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!uP?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const yv=()=>{};function hm(e,t,n,r=yv){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&my()&&GS(s),s}function Rs(e,...t){e.slice().forEach(n=>{n(...t)})}const dP=e=>e(),dm=Symbol(),au=Symbol();function qu(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Hu(s)&&Hu(r)&&e.hasOwnProperty(n)&&!Kt(r)&&!jn(r)?e[n]=qu(s,r):e[n]=r}return e}const fP=Symbol();function pP(e){return!Hu(e)||!e.hasOwnProperty(fP)}const{assign:or}=Object;function mP(e){return!!(Kt(e)&&e.effect)}function gP(e,t,n,r){const{state:s,actions:i,getters:o}=t,c=n.state.value[e];let l;function u(){c||(n.state.value[e]=s?s():{});const d=gR(n.state.value[e]);return or(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Xh(ke(()=>{Gc(n);const _=n._s.get(e);return o[m].call(_,_)})),p),{}))}return l=vv(e,u,t,n,r,!0),l}function vv(e,t,n={},r,s,i){let o;const c=or({actions:{}},n),l={deep:!0};let u,d,p=[],m=[],_;const S=r.state.value[e];!i&&!S&&(r.state.value[e]={}),Jr({});let P;function O(y){let E;u=d=!1,typeof y=="function"?(y(r.state.value[e]),E={type:co.patchFunction,storeId:e,events:_}):(qu(r.state.value[e],y),E={type:co.patchObject,payload:y,storeId:e,events:_});const w=P=Symbol();Jh().then(()=>{P===w&&(u=!0)}),d=!0,Rs(p,E,r.state.value[e])}const x=i?function(){const{state:E}=n,w=E?E():{};this.$patch(b=>{or(b,w)})}:yv;function M(){o.stop(),p=[],m=[],r._s.delete(e)}const U=(y,E="")=>{if(dm in y)return y[au]=E,y;const w=function(){Gc(r);const b=Array.from(arguments),R=[],T=[];function Mt(st){R.push(st)}function jt(st){T.push(st)}Rs(m,{args:b,name:w[au],store:z,after:Mt,onError:jt});let vt;try{vt=y.apply(this&&this.$id===e?this:z,b)}catch(st){throw Rs(T,st),st}return vt instanceof Promise?vt.then(st=>(Rs(R,st),st)).catch(st=>(Rs(T,st),Promise.reject(st))):(Rs(R,vt),vt)};return w[dm]=!0,w[au]=E,w},L={_p:r,$id:e,$onAction:hm.bind(null,m),$patch:O,$reset:x,$subscribe(y,E={}){const w=hm(p,y,E.detached,()=>b()),b=o.run(()=>ro(()=>r.state.value[e],R=>{(E.flush==="sync"?d:u)&&y({storeId:e,type:co.direct,events:_},R)},or({},l,E)));return w},$dispose:M},z=$o(L);r._s.set(e,z);const A=(r._a&&r._a.runWithContext||dP)(()=>r._e.run(()=>(o=py()).run(()=>t({action:U}))));for(const y in A){const E=A[y];if(Kt(E)&&!mP(E)||jn(E))i||(S&&pP(E)&&(Kt(E)?E.value=S[y]:qu(E,S[y])),r.state.value[e][y]=E);else if(typeof E=="function"){const w=U(E,y);A[y]=w,c.actions[y]=E}}return or(z,A),or(St(z),A),Object.defineProperty(z,"$state",{get:()=>r.state.value[e],set:y=>{O(E=>{or(E,y)})}}),r._p.forEach(y=>{or(z,o.run(()=>y({store:z,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(z.$state,S),u=!0,d=!0,z}/*! #__NO_SIDE_EFFECTS__ */function Ev(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(c,l){const u=RR();return c=c||(u?an(_v,null):null),c&&Gc(c),c=gv,c._s.has(r)||(i?vv(r,t,s,c):gP(r,s,c)),c._s.get(r)}return o.$id=r,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},_P=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],c=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},wv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,c=o?e[s+1]:0,l=s+2<e.length,u=l?e[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Tv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_P(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new yP;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vP=function(e){const t=Tv(e);return wv.encodeByteArray(t,!0)},cc=function(e){return vP(e).replace(/\./g,"")},Iv=function(e){try{return wv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=()=>EP().__FIREBASE_DEFAULTS__,wP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},IP=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Iv(e[1]);return t&&JSON.parse(t)},zc=()=>{try{return TP()||wP()||IP()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Av=e=>{var t,n;return(n=(t=zc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},AP=e=>{const t=Av(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},bv=()=>{var e;return(e=zc())===null||e===void 0?void 0:e.config},Sv=e=>{var t;return(t=zc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[cc(JSON.stringify(n)),cc(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function CP(){var e;const t=(e=zc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function OP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NP(){const e=Ae();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function DP(){return!CP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cv(){try{return typeof indexedDB=="object"}catch{return!1}}function Pv(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function kP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="FirebaseError";class mn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=VP,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?LP(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new mn(s,c,r)}}function LP(e,t){return e.replace(xP,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const xP=/\{\$([^}]+)}/g;function MP(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ao(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(fm(i)&&fm(o)){if(!Ao(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fm(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ki(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Gi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function FP(e,t){const n=new UP(e,t);return n.subscribe.bind(n)}class UP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$P(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=cu),s.error===void 0&&(s.error=cu),s.complete===void 0&&(s.complete=cu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $P(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function cu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=1e3,jP=2,HP=4*60*60*1e3,qP=.5;function pm(e,t=BP,n=jP){const r=t*Math.pow(n,e),s=Math.round(qP*r*(Math.random()-.5)*2);return Math.min(HP,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e){return e&&e._delegate?e._delegate:e}class un{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new bP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(GP(t))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Hr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Hr){return this.instances.has(t)}getOptions(t=Hr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KP(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Hr){return this.component?this.component.multipleInstances?t:Hr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KP(e){return e===Hr?void 0:e}function GP(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new WP(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(wt||(wt={}));const YP={debug:wt.DEBUG,verbose:wt.VERBOSE,info:wt.INFO,warn:wt.WARN,error:wt.ERROR,silent:wt.SILENT},QP=wt.INFO,XP={[wt.DEBUG]:"log",[wt.VERBOSE]:"log",[wt.INFO]:"info",[wt.WARN]:"warn",[wt.ERROR]:"error"},JP=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=XP[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yc{constructor(t){this.name=t,this._logLevel=QP,this._logHandler=JP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in wt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?YP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,wt.DEBUG,...t),this._logHandler(this,wt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,wt.VERBOSE,...t),this._logHandler(this,wt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,wt.INFO,...t),this._logHandler(this,wt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,wt.WARN,...t),this._logHandler(this,wt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,wt.ERROR,...t),this._logHandler(this,wt.ERROR,...t)}}const ZP=(e,t)=>t.some(n=>e instanceof n);let mm,gm;function tO(){return mm||(mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eO(){return gm||(gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ov=new WeakMap,Wu=new WeakMap,Nv=new WeakMap,lu=new WeakMap,id=new WeakMap;function nO(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(yr(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ov.set(n,e)}).catch(()=>{}),id.set(t,e),t}function rO(e){if(Wu.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Wu.set(e,t)}let Ku={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Nv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sO(e){Ku=e(Ku)}function iO(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(uu(this),t,...n);return Nv.set(r,t.sort?t.sort():[t]),yr(r)}:eO().includes(e)?function(...t){return e.apply(uu(this),t),yr(Ov.get(this))}:function(...t){return yr(e.apply(uu(this),t))}}function oO(e){return typeof e=="function"?iO(e):(e instanceof IDBTransaction&&rO(e),ZP(e,tO())?new Proxy(e,Ku):e)}function yr(e){if(e instanceof IDBRequest)return nO(e);if(lu.has(e))return lu.get(e);const t=oO(e);return t!==e&&(lu.set(e,t),id.set(t,e)),t}const uu=e=>id.get(e);function Dv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),c=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const aO=["get","getKey","getAll","getAllKeys","count"],cO=["put","add","delete","clear"],hu=new Map;function _m(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(hu.get(t))return hu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=cO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aO.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return hu.set(t,i),i}sO(e=>({...e,get:(t,n,r)=>_m(t,n)||e.get(t,n,r),has:(t,n)=>!!_m(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uO(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gu="@firebase/app",ym="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Yc("@firebase/app"),hO="@firebase/app-compat",dO="@firebase/analytics-compat",fO="@firebase/analytics",pO="@firebase/app-check-compat",mO="@firebase/app-check",gO="@firebase/auth",_O="@firebase/auth-compat",yO="@firebase/database",vO="@firebase/data-connect",EO="@firebase/database-compat",TO="@firebase/functions",wO="@firebase/functions-compat",IO="@firebase/installations",AO="@firebase/installations-compat",bO="@firebase/messaging",SO="@firebase/messaging-compat",RO="@firebase/performance",CO="@firebase/performance-compat",PO="@firebase/remote-config",OO="@firebase/remote-config-compat",NO="@firebase/storage",DO="@firebase/storage-compat",kO="@firebase/firestore",VO="@firebase/vertexai-preview",LO="@firebase/firestore-compat",xO="firebase",MO="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="[DEFAULT]",FO={[Gu]:"fire-core",[hO]:"fire-core-compat",[fO]:"fire-analytics",[dO]:"fire-analytics-compat",[mO]:"fire-app-check",[pO]:"fire-app-check-compat",[gO]:"fire-auth",[_O]:"fire-auth-compat",[yO]:"fire-rtdb",[vO]:"fire-data-connect",[EO]:"fire-rtdb-compat",[TO]:"fire-fn",[wO]:"fire-fn-compat",[IO]:"fire-iid",[AO]:"fire-iid-compat",[bO]:"fire-fcm",[SO]:"fire-fcm-compat",[RO]:"fire-perf",[CO]:"fire-perf-compat",[PO]:"fire-rc",[OO]:"fire-rc-compat",[NO]:"fire-gcs",[DO]:"fire-gcs-compat",[kO]:"fire-fst",[LO]:"fire-fst-compat",[VO]:"fire-vertex","fire-js":"fire-js",[xO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map,UO=new Map,Yu=new Map;function vm(e,t){try{e.container.addComponent(t)}catch(n){Gn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Rn(e){const t=e.name;if(Yu.has(t))return Gn.debug(`There were multiple attempts to register component ${t}.`),!1;Yu.set(t,e);for(const n of lc.values())vm(n,e);for(const n of UO.values())vm(n,e);return!0}function ms(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function xn(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new ps("app","Firebase",$O);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=MO;function kv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zu,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=bv()),!n)throw vr.create("no-options");const i=lc.get(s);if(i){if(Ao(n,i.options)&&Ao(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new zP(s);for(const l of Yu.values())o.addComponent(l);const c=new BO(n,r,o);return lc.set(s,c),c}function od(e=zu){const t=lc.get(e);if(!t&&e===zu&&bv())return kv();if(!t)throw vr.create("no-app",{appName:e});return t}function Xe(e,t,n){var r;let s=(r=FO[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gn.warn(c.join(" "));return}Rn(new un(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="firebase-heartbeat-database",HO=1,bo="firebase-heartbeat-store";let du=null;function Vv(){return du||(du=Dv(jO,HO,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(bo)}catch(n){console.warn(n)}}}}).catch(e=>{throw vr.create("idb-open",{originalErrorMessage:e.message})})),du}async function qO(e){try{const n=(await Vv()).transaction(bo),r=await n.objectStore(bo).get(Lv(e));return await n.done,r}catch(t){if(t instanceof mn)Gn.warn(t.message);else{const n=vr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gn.warn(n.message)}}}async function Em(e,t){try{const r=(await Vv()).transaction(bo,"readwrite");await r.objectStore(bo).put(t,Lv(e)),await r.done}catch(n){if(n instanceof mn)Gn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function Lv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=1024,KO=30*24*60*60*1e3;class GO{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tm();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=KO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tm(),{heartbeatsToSend:r,unsentEntries:s}=zO(this._heartbeatsCache.heartbeats),i=cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function Tm(){return new Date().toISOString().substring(0,10)}function zO(e,t=WO){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wm(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wm(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cv()?Pv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Em(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Em(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function wm(e){return cc(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(e){Rn(new un("platform-logger",t=>new lO(t),"PRIVATE")),Rn(new un("heartbeat",t=>new GO(t),"PRIVATE")),Xe(Gu,ym,e),Xe(Gu,ym,"esm2017"),Xe("fire-js","")}QO("");var XO="firebase",JO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe(XO,JO,"app");function ad(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function xv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZO=xv,Mv=new ps("auth","Firebase",xv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Yc("@firebase/auth");function tN(e,...t){uc.logLevel<=wt.WARN&&uc.warn(`Auth (${_i}): ${e}`,...t)}function $a(e,...t){uc.logLevel<=wt.ERROR&&uc.error(`Auth (${_i}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e,...t){throw cd(e,...t)}function Tn(e,...t){return cd(e,...t)}function Fv(e,t,n){const r=Object.assign(Object.assign({},ZO()),{[t]:n});return new ps("auth","Firebase",r).create(t,{appName:e.name})}function Er(e){return Fv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Mv.create(e,...t)}function ut(e,t,...n){if(!e)throw cd(t,...n)}function Mn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $a(t),new Error(t)}function zn(e,t){e||Mn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function eN(){return Im()==="http:"||Im()==="https:"}function Im(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eN()||Rv()||"connection"in navigator)?navigator.onLine:!0}function rN(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,n){this.shortDelay=t,this.longDelay=n,zn(n>t,"Short delay should be less than long delay!"),this.isMobile=RP()||OP()}get(){return nN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e,t){zn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new qo(3e4,6e4);function gs(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vr(e,t,n,r,s={}){return $v(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ho(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},i);return PP()||(u.referrerPolicy="no-referrer"),Uv.fetch()(Bv(e,e.config.apiHost,n,c),u)})}async function $v(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},sN),t);try{const s=new aN(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ra(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ra(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Fv(e,d,u);hn(e,d)}}catch(s){if(s instanceof mn)throw s;hn(e,"network-request-failed",{message:String(s)})}}async function Qc(e,t,n,r,s={}){const i=await Vr(e,t,n,r,s);return"mfaPendingCredential"in i&&hn(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Bv(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?ld(e.config,s):`${e.config.apiScheme}://${s}`}function oN(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aN{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),iN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ra(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tn(e,t,r);return s.customData._tokenResponse=n,s}function Am(e){return e!==void 0&&e.enterprise!==void 0}class cN{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return oN(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function lN(e,t){return Vr(e,"GET","/v2/recaptchaConfig",gs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(e,t){return Vr(e,"POST","/v1/accounts:delete",t)}async function jv(e,t){return Vr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function hN(e,t=!1){const n=Yt(e),r=await n.getIdToken(t),s=ud(r);ut(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:lo(fu(s.auth_time)),issuedAtTime:lo(fu(s.iat)),expirationTime:lo(fu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fu(e){return Number(e)*1e3}function ud(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const s=Iv(n);return s?JSON.parse(s):($a("Failed to decode base64 JWT payload"),null)}catch(s){return $a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bm(e){const t=ud(e);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof mn&&dN(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function dN({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(e){var t;const n=e.auth,r=await e.getIdToken(),s=await So(e,jv(n,{idToken:r}));ut(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Hv(i.providerUserInfo):[],c=mN(e.providerData,o),l=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Xu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function pN(e){const t=Yt(e);await hc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function mN(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Hv(e){return e.map(t=>{var{providerId:n}=t,r=ad(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(e,t){const n=await $v(e,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Bv(e,s,"/v1/token",`key=${i}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Uv.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _N(e,t){return Vr(e,"POST","/v2/accounts:revokeToken",gs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const n=bm(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gN(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hs;return r&&(ut(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(ut(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(ut(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t){ut(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Fn{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=ad(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await So(this,this.stsTokenManager.getToken(this.auth,t));return ut(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return hN(this,t)}reload(){return pN(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Fn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(Er(this.auth));const t=await this.getIdToken();return await So(this,uN(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:L,isAnonymous:z,providerData:Z,stsTokenManager:A}=n;ut(U&&A,t,"internal-error");const y=Hs.fromJSON(this.name,A);ut(typeof U=="string",t,"internal-error"),sr(p,t.name),sr(m,t.name),ut(typeof L=="boolean",t,"internal-error"),ut(typeof z=="boolean",t,"internal-error"),sr(_,t.name),sr(S,t.name),sr(P,t.name),sr(O,t.name),sr(x,t.name),sr(M,t.name);const E=new Fn({uid:U,auth:t,email:m,emailVerified:L,displayName:p,isAnonymous:z,photoURL:S,phoneNumber:_,tenantId:P,stsTokenManager:y,createdAt:x,lastLoginAt:M});return Z&&Array.isArray(Z)&&(E.providerData=Z.map(w=>Object.assign({},w))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(t,n,r=!1){const s=new Hs;s.updateFromServerResponse(n);const i=new Fn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await hc(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];ut(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Hv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Hs;c.updateFromIdToken(r);const l=new Fn({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Map;function Un(e){zn(e instanceof Function,"Expected a class definition");let t=Sm.get(e);return t?(zn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sm.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}qv.type="NONE";const Rm=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(e,t,n){return`firebase:${e}:${t}:${n}`}class qs{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ba(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ba("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new qs(Un(Rm),t,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Un(Rm);const o=Ba(r,t.config.apiKey,t.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Fn._fromJSON(t,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qs(i,t,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new qs(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qv(t))return"Blackberry";if(Xv(t))return"Webos";if(Kv(t))return"Safari";if((t.includes("chrome/")||Gv(t))&&!t.includes("edge/"))return"Chrome";if(Yv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wv(e=Ae()){return/firefox\//i.test(e)}function Kv(e=Ae()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Gv(e=Ae()){return/crios\//i.test(e)}function zv(e=Ae()){return/iemobile/i.test(e)}function Yv(e=Ae()){return/android/i.test(e)}function Qv(e=Ae()){return/blackberry/i.test(e)}function Xv(e=Ae()){return/webos/i.test(e)}function hd(e=Ae()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function yN(e=Ae()){var t;return hd(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function vN(){return NP()&&document.documentMode===10}function Jv(e=Ae()){return hd(e)||Yv(e)||Xv(e)||Qv(e)||/windows phone/i.test(e)||zv(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(e,t=[]){let n;switch(e){case"Browser":n=Cm(Ae());break;case"Worker":n=`${Cm(Ae())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,c)=>{try{const l=t(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(e,t={}){return Vr(e,"GET","/v2/passwordPolicy",gs(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=6;class IN{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pm(this),this.idTokenSubscription=new Pm(this),this.beforeStateQueue=new EN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qs.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await jv(this,{idToken:t}),r=await Fn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await hc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=rN()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(xn(this.app))return Promise.reject(Er(this));const n=t?Yt(t):null;return n&&ut(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return xn(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await TN(this),n=new IN(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ps("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _N(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Un(t)||this._popupRedirectResolver;ut(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Zv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&tN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(e){return Yt(e)}class Pm{constructor(t){this.auth=t,this.observer=null,this.addObserver=FP(n=>this.observer=n)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bN(e){Xc=e}function tE(e){return Xc.loadJS(e)}function SN(){return Xc.recaptchaEnterpriseScript}function RN(){return Xc.gapiScript}function CN(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const PN="recaptcha-enterprise",ON="NO_RECAPTCHA";class NN{constructor(t){this.type=PN,this.auth=yi(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{lN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new cN(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Am(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:t}).then(u=>{o(u)}).catch(()=>{o(ON)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Am(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=SN();l.length!==0&&(l+=c),tE(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Om(e,t,n,r=!1){const s=new NN(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Nm(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Om(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Om(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(e,t){const n=ms(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ao(i,t??{}))return s;hn(s,"already-initialized")}return n.initialize({options:t})}function kN(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function VN(e,t,n){const r=yi(e);ut(r._canInitEmulator,r,"emulator-config-failed"),ut(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=eE(t),{host:o,port:c}=LN(t),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xN()}function eE(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function LN(e){const t=eE(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Dm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Dm(o)}}}function Dm(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function xN(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(t){return Mn("not implemented")}_linkToIdToken(t,n){return Mn("not implemented")}_getReauthenticationResolver(t){return Mn("not implemented")}}async function MN(e,t){return Vr(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(e,t){return Qc(e,"POST","/v1/accounts:signInWithPassword",gs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(e,t){return Qc(e,"POST","/v1/accounts:signInWithEmailLink",gs(e,t))}async function $N(e,t){return Qc(e,"POST","/v1/accounts:signInWithEmailLink",gs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends dd{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Ro(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ro(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(t,n,"signInWithPassword",FN);case"emailLink":return UN(t,{email:this._email,oobCode:this._password});default:hn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(t,r,"signUpPassword",MN);case"emailLink":return $N(t,{idToken:n,email:this._email,oobCode:this._password});default:hn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(e,t){return Qc(e,"POST","/v1/accounts:signInWithIdp",gs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="http://localhost";class is extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new is(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=ad(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Ws(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ws(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ws(t,n)}buildRequest(){const t={requestUri:BN,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ho(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HN(e){const t=Ki(Gi(e)).link,n=t?Ki(Gi(t)).deep_link_id:null,r=Ki(Gi(e)).deep_link_id;return(r?Ki(Gi(r)).link:null)||r||n||t||e}class fd{constructor(t){var n,r,s,i,o,c;const l=Ki(Gi(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=jN((s=l.mode)!==null&&s!==void 0?s:null);ut(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=HN(t);try{return new fd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(t,n){return Ro._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=fd.parseLink(n);return ut(r,"argument-error"),Ro._fromEmailAndCode(t,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends nE{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Wo{constructor(){super("facebook.com")}static credential(t){return is._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hr.credentialFromTaggedObject(t)}static credentialFromError(t){return hr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hr.credential(t.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return is._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return dr.credentialFromTaggedObject(t)}static credentialFromError(t){return dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Wo{constructor(){super("github.com")}static credential(t){return is._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fr.credentialFromTaggedObject(t)}static credentialFromError(t){return fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fr.credential(t.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Wo{constructor(){super("twitter.com")}static credential(t,n){return is._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return pr.credentialFromTaggedObject(t)}static credentialFromError(t){return pr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Fn._fromIdTokenResponse(t,r,s),o=km(r);return new ni({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=km(r);return new ni({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function km(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends mn{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new dc(t,n,r,s)}}function rE(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(e,i,t,r):i})}async function qN(e,t,n=!1){const r=await So(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ni._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(e,t,n=!1){const{auth:r}=e;if(xn(r.app))return Promise.reject(Er(r));const s="reauthenticate";try{const i=await So(e,rE(r,s,t,e),n);ut(i.idToken,r,"internal-error");const o=ud(i.idToken);ut(o,r,"internal-error");const{sub:c}=o;return ut(e.uid===c,r,"user-mismatch"),ni._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(e,t,n=!1){if(xn(e.app))return Promise.reject(Er(e));const r="signIn",s=await rE(e,r,t),i=await ni._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function KN(e,t){return sE(yi(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(e){const t=yi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function zN(e,t,n){return xn(e.app)?Promise.reject(Er(e)):KN(Yt(e),vi.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&GN(e),r})}function YN(e,t,n,r){return Yt(e).onIdTokenChanged(t,n,r)}function QN(e,t,n){return Yt(e).beforeAuthStateChanged(t,n)}function XN(e,t,n,r){return Yt(e).onAuthStateChanged(t,n,r)}function JN(e){return Yt(e).signOut()}const fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=1e3,tD=10;class oE extends iE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);vN()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,tD):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},ZN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}oE.type="LOCAL";const eD=oE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE extends iE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}aE.type="SESSION";const cE=aE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Jc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await nD(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=pd("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function sD(e){wn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function iD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oD(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function aD(){return lE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firebaseLocalStorageDb",cD=1,pc="firebaseLocalStorage",hE="fbase_key";class Ko{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(e,t){return e.transaction([pc],t?"readwrite":"readonly").objectStore(pc)}function lD(){const e=indexedDB.deleteDatabase(uE);return new Ko(e).toPromise()}function Ju(){const e=indexedDB.open(uE,cD);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(pc,{keyPath:hE})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(pc)?t(r):(r.close(),await lD(),t(await Ju()))})})}async function Vm(e,t,n){const r=Zc(e,!0).put({[hE]:t,value:n});return new Ko(r).toPromise()}async function uD(e,t){const n=Zc(e,!1).get(t),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Lm(e,t){const n=Zc(e,!0).delete(t);return new Ko(n).toPromise()}const hD=800,dD=3;class dE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ju(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>dD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(aD()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await iD(),!this.activeServiceWorker)return;this.sender=new rD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||oD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ju();return await Vm(t,fc,"1"),await Lm(t,fc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vm(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>uD(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lm(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Zc(s,!1).getAll();return new Ko(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dE.type="LOCAL";const fD=dE;new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(e,t){return t?Un(t):(ut(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends dd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ws(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ws(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ws(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function mD(e){return sE(e.auth,new md(e),e.bypassAuthState)}function gD(e){const{auth:t,user:n}=e;return ut(n,t,"internal-error"),WN(n,new md(e),e.bypassAuthState)}async function _D(e){const{auth:t,user:n}=e;return ut(n,t,"internal-error"),qN(n,new md(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mD;case"linkViaPopup":case"linkViaRedirect":return _D;case"reauthViaPopup":case"reauthViaRedirect":return gD;default:hn(this.auth,"internal-error")}}resolve(t){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=new qo(2e3,1e4);class Us extends fE{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ut(t,this.auth,"internal-error"),t}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const t=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,yD.get())};t()}}Us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD="pendingRedirect",ja=new Map;class ED extends fE{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ja.get(this.auth._key());if(!t){try{const r=await TD(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ja.set(this.auth._key(),t)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TD(e,t){const n=AD(t),r=ID(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wD(e,t){ja.set(e._key(),t)}function ID(e){return Un(e._redirectPersistence)}function AD(e){return Ba(vD,e.config.apiKey,e.name)}async function bD(e,t,n=!1){if(xn(e.app))return Promise.reject(Er(e));const r=yi(e),s=pD(r,t),o=await new ED(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=10*60*1e3;class RD{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!CD(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!pE(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=SD&&this.cachedEventUids.clear(),this.cachedEventUids.has(xm(t))}saveEventToCache(t){this.cachedEventUids.add(xm(t)),this.lastProcessedEventTime=Date.now()}}function xm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function pE({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function CD(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pE(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PD(e,t={}){return Vr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ND=/^https?/;async function DD(e){if(e.config.emulator)return;const{authorizedDomains:t}=await PD(e);for(const n of t)try{if(kD(n))return}catch{}hn(e,"unauthorized-domain")}function kD(e){const t=Qu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ND.test(n))return!1;if(OD.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new qo(3e4,6e4);function Mm(){const e=wn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function LD(e){return new Promise((t,n)=>{var r,s,i;function o(){Mm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mm(),n(Tn(e,"network-request-failed"))},timeout:VD.get()})}if(!((s=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const c=CN("iframefcb");return wn()[c]=()=>{gapi.load?o():n(Tn(e,"network-request-failed"))},tE(`${RN()}?onload=${c}`).catch(l=>n(l))}}).catch(t=>{throw Ha=null,t})}let Ha=null;function xD(e){return Ha=Ha||LD(e),Ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=new qo(5e3,15e3),FD="__/auth/iframe",UD="emulator/auth/iframe",$D={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jD(e){const t=e.config;ut(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ld(t,UD):`https://${e.config.authDomain}/${FD}`,r={apiKey:t.apiKey,appName:e.name,v:_i},s=BD.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ho(r).slice(1)}`}async function HD(e){const t=await xD(e),n=wn().gapi;return ut(n,e,"internal-error"),t.open({where:document.body,url:jD(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$D,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(e,"network-request-failed"),c=wn().setTimeout(()=>{i(o)},MD.get());function l(){wn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WD=500,KD=600,GD="_blank",zD="http://localhost";class Fm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YD(e,t,n,r=WD,s=KD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},qD),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ae().toLowerCase();n&&(c=Gv(u)?GD:n),Wv(u)&&(t=t||zD,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(yN(u)&&c!=="_self")return QD(t||"",c),new Fm(null);const p=window.open(t||"",c,d);ut(p,e,"popup-blocked");try{p.focus()}catch{}return new Fm(p)}function QD(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD="__/auth/handler",JD="emulator/auth/handler",ZD=encodeURIComponent("fac");async function Um(e,t,n,r,s,i){ut(e.config.authDomain,e,"auth-domain-config-required"),ut(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_i,eventId:s};if(t instanceof nE){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",MP(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,p]of Object.entries(i||{}))o[d]=p}if(t instanceof Wo){const d=t.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await e._getAppCheckToken(),u=l?`#${ZD}=${encodeURIComponent(l)}`:"";return`${tk(e)}?${Ho(c).slice(1)}${u}`}function tk({config:e}){return e.emulator?ld(e,JD):`https://${e.authDomain}/${XD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="webStorageSupport";class ek{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cE,this._completeRedirectFn=bD,this._overrideRedirectResult=wD}async _openPopup(t,n,r,s){var i;zn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Um(t,n,r,Qu(),s);return YD(t,o,pd())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Um(t,n,r,Qu(),s);return sD(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await HD(t),r=new RD(t);return n.register("authEvent",s=>(ut(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(pu,{type:pu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[pu];o!==void 0&&n(!!o),hn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DD(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jv()||Kv()||hd()}}const nk=ek;var $m="@firebase/auth",Bm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ik(e){Rn(new un("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ut(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zv(e)},u=new AN(r,s,i,l);return kN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Rn(new un("auth-internal",t=>{const n=yi(t.getProvider("auth").getImmediate());return(r=>new rk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe($m,Bm,sk(e)),Xe($m,Bm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=5*60,ak=Sv("authIdTokenMaxAge")||ok;let jm=null;const ck=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ak)return;const s=n==null?void 0:n.token;jm!==s&&(jm=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lk(e=od()){const t=ms(e,"auth");if(t.isInitialized())return t.getImmediate();const n=DN(e,{popupRedirectResolver:nk,persistence:[fD,eD,cE]}),r=Sv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ck(i.toString());QN(n,o,()=>o(n.currentUser)),YN(n,c=>o(c))}}const s=Av("auth");return s&&VN(n,`http://${s}`),n}function uk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}bN({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ik("Browser");var Hm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,mE;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(A,y){function E(){}E.prototype=y.prototype,A.D=y.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(w,b,R){for(var T=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)T[Mt-2]=arguments[Mt];return y.prototype[b].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,E){E||(E=0);var w=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)w[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)w[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=A.g[0],E=A.g[1],b=A.g[2];var R=A.g[3],T=y+(R^E&(b^R))+w[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[3]+3250441966&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[7]+4249261313&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[11]+2304563134&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[15]+1236535329&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(b^R&(E^b))+w[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[0]+3921069994&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[4]+3889429448&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[8]+1163531501&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[12]+2368359562&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(E^b^R)+w[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[14]+4259657740&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[10]+3200236656&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[6]+76029189&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[2]+3299628645&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(b^(E|~R))+w[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[5]+4237533241&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[1]+2240044497&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[13]+1309151649&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var E=y-this.blockSize,w=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=E;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<y;)if(w[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,w),b=0;break}}else for(;R<y;)if(w[b++]=A[R++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var E=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.u(A),A=Array(16),y=E=0;4>y;++y)for(var w=0;32>w;w+=8)A[E++]=this.g[y]>>>w&255;return A};function i(A,y){var E=c;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=y(A)}function o(A,y){this.h=y;for(var E=[],w=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;w&&R==y||(E[b]=R,w=!1)}this.g=E}var c={};function l(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return O(u(-A));for(var y=[],E=1,w=0;A>=E;w++)y[w]=A/E|0,E*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return O(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),w=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),T=parseInt(A.substring(b,b+R),y);8>R?(R=u(Math.pow(y,R)),w=w.j(R).add(u(T))):(w=w.j(E),w=w.add(u(T)))}return w}var p=l(0),m=l(1),_=l(16777216);e=o.prototype,e.m=function(){if(P(this))return-O(this).m();for(var A=0,y=1,E=0;E<this.g.length;E++){var w=this.i(E);A+=(0<=w?w:4294967296+w)*y,y*=4294967296}return A},e.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(P(this))return"-"+O(this).toString(A);for(var y=u(Math.pow(A,6)),E=this,w="";;){var b=L(E,y).g;E=x(E,b.j(y));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=b,S(E))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},e.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function P(A){return A.h==-1}e.l=function(A){return A=x(this,A),P(A)?-1:S(A)?0:1};function O(A){for(var y=A.g.length,E=[],w=0;w<y;w++)E[w]=~A.g[w];return new o(E,~A.h).add(m)}e.abs=function(){return P(this)?O(this):this},e.add=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0,b=0;b<=y;b++){var R=w+(this.i(b)&65535)+(A.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=T>>>16,R&=65535,T&=65535,E[b]=T<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(A,y){return A.add(O(y))}e.j=function(A){if(S(this)||S(A))return p;if(P(this))return P(A)?O(this).j(O(A)):O(O(this).j(A));if(P(A))return O(this.j(O(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,E=[],w=0;w<2*y;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var R=this.i(w)>>>16,T=this.i(w)&65535,Mt=A.i(b)>>>16,jt=A.i(b)&65535;E[2*w+2*b]+=T*jt,M(E,2*w+2*b),E[2*w+2*b+1]+=R*jt,M(E,2*w+2*b+1),E[2*w+2*b+1]+=T*Mt,M(E,2*w+2*b+1),E[2*w+2*b+2]+=R*Mt,M(E,2*w+2*b+2)}for(w=0;w<y;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=y;w<2*y;w++)E[w]=0;return new o(E,0)};function M(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function U(A,y){this.g=A,this.h=y}function L(A,y){if(S(y))throw Error("division by zero");if(S(A))return new U(p,p);if(P(A))return y=L(O(A),y),new U(O(y.g),O(y.h));if(P(y))return y=L(A,O(y)),new U(O(y.g),y.h);if(30<A.g.length){if(P(A)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,w=y;0>=w.l(A);)E=z(E),w=z(w);var b=Z(E,1),R=Z(w,1);for(w=Z(w,2),E=Z(E,2);!S(w);){var T=R.add(w);0>=T.l(A)&&(b=b.add(E),R=T),w=Z(w,1),E=Z(E,1)}return y=x(A,b.j(y)),new U(b,y)}for(b=p;0<=A.l(y);){for(E=Math.max(1,Math.floor(A.m()/y.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=u(E),T=R.j(y);P(T)||0<T.l(A);)E-=w,R=u(E),T=R.j(y);S(R)&&(R=m),b=b.add(R),A=x(A,T)}return new U(b,A)}e.A=function(A){return L(this,A).h},e.and=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)&A.i(w);return new o(E,this.h&A.h)},e.or=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)|A.i(w);return new o(E,this.h|A.h)},e.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)^A.i(w);return new o(E,this.h^A.h)};function z(A){for(var y=A.g.length+1,E=[],w=0;w<y;w++)E[w]=A.i(w)<<1|A.i(w-1)>>>31;return new o(E,A.h)}function Z(A,y){var E=y>>5;y%=32;for(var w=A.g.length-E,b=[],R=0;R<w;R++)b[R]=0<y?A.i(R+E)>>>y|A.i(R+E+1)<<32-y:A.i(R+E);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ts=o}).apply(typeof Hm<"u"?Hm:typeof self<"u"?self:typeof window<"u"?window:{});var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gE,zi,_E,qa,Zu,yE,vE,EE;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ca=="object"&&Ca];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)t:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break t;f=f[C]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&t(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,D){for(var G=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)G[Vt-2]=arguments[Vt];return h.prototype[C].apply(g,G)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const C=a.length||0,D=g.length||0;a.length=C+D;for(let G=0;G<D;G++)a[C+G]=g[G]}else a.push(g)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var z=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Z(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let D=0;D<E.length;D++)f=E[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Gt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Mt{constructor(){this.h=this.g=null}add(h,f){const g=jt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var jt=new x(()=>new vt,a=>a.reset());class vt{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let st,yt=!1,Gt=new Mt,pe=()=>{const a=c.Promise.resolve(void 0);st=()=>{a.then(me)}};var me=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){R(f)}var h=jt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}yt=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function kt(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var be=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function Ht(a,h){if(kt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(z){t:{try{L(h.nodeName);var C=!0;break t}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Qt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ht.aa.h.call(this)}}S(Ht,kt);var Qt={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,h,f,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=C,this.key=++J,this.da=this.fa=!1}function rt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ht(a){this.src=a,this.g={},this.h=0}ht.prototype.add=function(a,h,f,g,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var G=v(a,h,g,C);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new Q(h,this.src,D,!!g,C),h.fa=f,a.push(h)),h};function Ct(a,h){var f=h.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=C)&&Array.prototype.splice.call(g,C,1),D&&(rt(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,h,f,g){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return C}return-1}var I="closure_lm_"+(1e6*Math.random()|0),N={};function F(a,h,f,g,C){if(g&&g.once)return Y(a,h,f,g,C);if(Array.isArray(h)){for(var D=0;D<h.length;D++)F(a,h[D],f,g,C);return null}return f=lt(f),a&&a[k]?a.K(h,f,u(g)?!!g.capture:!!g,C):V(a,h,f,!1,g,C)}function V(a,h,f,g,C,D){if(!h)throw Error("Invalid event type");var G=u(C)?!!C.capture:!!C,Vt=X(a);if(Vt||(a[I]=Vt=new ht(a)),f=Vt.add(h,f,g,G,D),f.proxy)return f;if(g=j(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)be||(C=G),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(B(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function j(){function a(f){return h.call(a.src,a.listener,f)}const h=it;return a}function Y(a,h,f,g,C){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Y(a,h[D],f,g,C);return null}return f=lt(f),a&&a[k]?a.L(h,f,u(g)?!!g.capture:!!g,C):V(a,h,f,!0,g,C)}function K(a,h,f,g,C){if(Array.isArray(h))for(var D=0;D<h.length;D++)K(a,h[D],f,g,C);else g=u(g)?!!g.capture:!!g,f=lt(f),a&&a[k]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=v(D,f,g,C),-1<f&&(rt(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=v(h,f,g,C)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[k])Ct(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(B(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=X(h))?(Ct(f,a),f.h==0&&(f.src=null,h[I]=null)):rt(a)}}}function B(a){return a in N?N[a]:N[a]="on"+a}function it(a,h){if(a.da)a=!0;else{h=new Ht(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&W(a),a=f.call(g,h)}return a}function X(a){return a=a[I],a instanceof ht?a:null}var tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function lt(a){return typeof a=="function"?a:(a[tt]||(a[tt]=function(h){return a.handleEvent(h)}),a[tt])}function ot(){Nt.call(this),this.i=new ht(this),this.M=this,this.F=null}S(ot,Nt),ot.prototype[k]=!0,ot.prototype.removeEventListener=function(a,h,f,g){K(this,a,h,f,g)};function pt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new kt(h,a);else if(h instanceof kt)h.target=h.target||a;else{var C=h;h=new kt(g,a),w(h,C)}if(C=!0,f)for(var D=f.length-1;0<=D;D--){var G=h.g=f[D];C=It(G,g,!0,h)&&C}if(G=h.g=a,C=It(G,g,!0,h)&&C,C=It(G,g,!1,h)&&C,f)for(D=0;D<f.length;D++)G=h.g=f[D],C=It(G,g,!1,h)&&C}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)rt(f[g]);delete a.g[h],a.h--}}this.F=null},ot.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ot.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function It(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,D=0;D<h.length;++D){var G=h[D];if(G&&!G.da&&G.capture==f){var Vt=G.listener,le=G.ha||G.src;G.fa&&Ct(a.i,G),C=Vt.call(le,g)!==!1&&C}}return C&&!g.defaultPrevented}function ae(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function te(a){a.g=ae(()=>{a.g=null,a.i&&(a.i=!1,te(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Me extends Nt{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(a){Nt.call(this),this.h=a,this.g={}}S(ee,Nt);var Zn=[];function Ai(a){Z(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}ee.prototype.N=function(){ee.aa.N.call(this),Ai(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=c.JSON.stringify,ze=c.JSON.parse,ea=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function vs(){}vs.prototype.h=null;function sf(a){return a.h||(a.h=a.i())}function of(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vl(){kt.call(this,"d")}S(vl,kt);function El(){kt.call(this,"c")}S(El,kt);var xr={},af=null;function na(){return af=af||new ot}xr.La="serverreachability";function cf(a){kt.call(this,xr.La,a)}S(cf,kt);function Si(a){const h=na();pt(h,new cf(h))}xr.STAT_EVENT="statevent";function lf(a,h){kt.call(this,xr.STAT_EVENT,a),this.stat=h}S(lf,kt);function Se(a){const h=na();pt(h,new lf(h,a))}xr.Ma="timingevent";function uf(a,h){kt.call(this,xr.Ma,a),this.size=h}S(uf,kt);function Ri(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function mw(a,h,f,g,C,D){a.info(function(){if(a.g)if(D)for(var G="",Vt=D.split("&"),le=0;le<Vt.length;le++){var bt=Vt[le].split("=");if(1<bt.length){var ge=bt[0];bt=bt[1];var _e=ge.split("_");G=2<=_e.length&&_e[1]=="type"?G+(ge+"="+bt+"&"):G+(ge+"=redacted&")}}else G=null;else G=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+f+`
`+G})}function gw(a,h,f,g,C,D,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+f+`
`+D+" "+G})}function Es(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+yw(a,f)+(g?" "+g:"")})}function _w(a,h){a.info(function(){return"TIMEOUT: "+h})}Ci.prototype.info=function(){};function yw(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return ce(f)}catch{return h}}var ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tl;function sa(){}S(sa,vs),sa.prototype.g=function(){return new XMLHttpRequest},sa.prototype.i=function(){return{}},Tl=new sa;function tr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new ee(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var ff={},wl={};function Il(a,h,f){a.L=1,a.v=ca(Pn(h)),a.m=f,a.P=!0,pf(a,null)}function pf(a,h){a.F=Date.now(),ia(a),a.A=Pn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Cf(f.i,"t",g),a.C=0,f=a.j.J,a.h=new df,a.g=Kf(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Me(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Zn[0]=C.toString()),C=Zn);for(var D=0;D<C.length;D++){var G=F(f,C[D],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Si(),mw(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&On(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)t:{const _e=On(this.g);var h=this.g.Ba();const Is=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||Lf(this.g)))){this.J||_e!=4||h==7||(h==8||0>=Is?Si(3):Si(2)),Al(this);var f=this.g.Z();this.X=f;e:if(mf(this)){var g=Lf(this.g);a="";var C=g.length,D=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),Pi(this);var G="";break e}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,gw(this.i,this.u,this.A,this.l,this.R,_e,f),this.o){if(this.T&&!this.K){e:{if(this.g){var Vt,le=this.g;if((Vt=le.g?le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Vt)){var bt=Vt;break e}}bt=null}if(f=bt)Es(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bl(this,f);else{this.o=!1,this.s=3,Se(12),Mr(this),Pi(this);break t}}if(this.P){f=!0;let nn;for(;!this.J&&this.C<G.length;)if(nn=vw(this,G),nn==wl){_e==4&&(this.s=4,Se(14),f=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==ff){this.s=4,Se(15),Es(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else Es(this.i,this.l,nn,null),bl(this,nn);if(mf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||G.length!=0||this.h.h||(this.s=1,Se(16),f=!1),this.o=this.o&&f,!f)Es(this.i,this.l,G,"[Invalid Chunked Response]"),Mr(this),Pi(this);else if(0<G.length&&!this.W){this.W=!0;var ge=this.j;ge.g==this&&ge.ba&&!ge.M&&(ge.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Nl(ge),ge.M=!0,Se(11))}}else Es(this.i,this.l,G,null),bl(this,G);_e==4&&Mr(this),this.o&&!this.J&&(_e==4?jf(this.j,this):(this.o=!1,ia(this)))}else xw(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),Mr(this),Pi(this)}}}catch{}finally{}};function mf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vw(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?wl:(f=Number(h.substring(f,g)),isNaN(f)?ff:(g+=1,g+f>h.length?wl:(h=h.slice(g,g+f),a.C=g+f,h)))}tr.prototype.cancel=function(){this.J=!0,Mr(this)};function ia(a){a.S=Date.now()+a.I,gf(a,a.I)}function gf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ri(m(a.ba,a),h)}function Al(a){a.B&&(c.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(_w(this.i,this.A),this.L!=2&&(Si(),Se(17)),Mr(this),this.s=2,Pi(this)):gf(this,this.S-a)};function Pi(a){a.j.G==0||a.J||jf(a.j,a)}function Mr(a){Al(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ai(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function bl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Sl(f.h,a))){if(!a.K&&Sl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)pa(f),da(f);else break t;Ol(f),Se(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ri(m(f.Za,f),6e3));if(1>=vf(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ur(f,11)}else if((a.K||f.g==a)&&pa(f),!M(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let bt=C[h];if(f.T=bt[0],bt=bt[1],f.G==2)if(bt[0]=="c"){f.K=bt[1],f.ia=bt[2];const ge=bt[3];ge!=null&&(f.la=ge,f.j.info("VER="+f.la));const _e=bt[4];_e!=null&&(f.Aa=_e,f.j.info("SVER="+f.Aa));const Is=bt[5];Is!=null&&typeof Is=="number"&&0<Is&&(g=1.5*Is,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const nn=a.g;if(nn){const ga=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var D=g.h;D.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Rl(D,D.h),D.h=null))}if(g.D){const Dl=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(g.ya=Dl,Ft(g.I,g.D,Dl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=Wf(g,g.J?g.ia:null,g.W),G.K){Ef(g.h,G);var Vt=G,le=g.L;le&&(Vt.I=le),Vt.B&&(Al(Vt),ia(Vt)),g.g=G}else $f(g);0<f.i.length&&fa(f)}else bt[0]!="stop"&&bt[0]!="close"||Ur(f,7);else f.G==3&&(bt[0]=="stop"||bt[0]=="close"?bt[0]=="stop"?Ur(f,7):Pl(f):bt[0]!="noop"&&f.l&&f.l.ta(bt),f.v=0)}}Si(4)}catch{}}var Ew=class{constructor(a,h){this.g=a,this.map=h}};function _f(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vf(a){return a.h?1:a.g?a.g.size:0}function Sl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Rl(a,h){a.g?a.g.add(h):a.h=h}function Ef(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}_f.prototype.cancel=function(){if(this.i=Tf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function Tw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function ww(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function wf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=ww(a),g=Tw(a),C=g.length,D=0;D<C;D++)h.call(void 0,g[D],f&&f[D],a)}var If=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Iw(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var D=a[f].substring(0,g);C=a[f].substring(g+1)}else D=a[f];h(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fr){this.h=a.h,oa(this,a.j),this.o=a.o,this.g=a.g,aa(this,a.s),this.l=a.l;var h=a.i,f=new Di;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Af(this,f),this.m=a.m}else a&&(h=String(a).match(If))?(this.h=!1,oa(this,h[1]||"",!0),this.o=Oi(h[2]||""),this.g=Oi(h[3]||"",!0),aa(this,h[4]),this.l=Oi(h[5]||"",!0),Af(this,h[6]||"",!0),this.m=Oi(h[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}Fr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ni(h,bf,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ni(h,bf,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ni(f,f.charAt(0)=="/"?Sw:bw,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ni(f,Cw)),a.join("")};function Pn(a){return new Fr(a)}function oa(a,h,f){a.j=f?Oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function aa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Af(a,h,f){h instanceof Di?(a.i=h,Pw(a.i,a.h)):(f||(h=Ni(h,Rw)),a.i=new Di(h,a.h))}function Ft(a,h,f){a.i.set(h,f)}function ca(a){return Ft(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Aw),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Aw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bf=/[#\/\?@]/g,bw=/[#\?:]/g,Sw=/[#\?]/g,Rw=/[#\?@]/g,Cw=/#/g;function Di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function er(a){a.g||(a.g=new Map,a.h=0,a.i&&Iw(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}e=Di.prototype,e.add=function(a,h){er(this),this.i=null,a=Ts(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Sf(a,h){er(a),h=Ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Rf(a,h){return er(a),h=Ts(a,h),a.g.has(h)}e.forEach=function(a,h){er(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(h,C,g,this)},this)},this)},e.na=function(){er(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const C=a[g];for(let D=0;D<C.length;D++)f.push(h[g])}return f},e.V=function(a){er(this);let h=[];if(typeof a=="string")Rf(this,a)&&(h=h.concat(this.g.get(Ts(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},e.set=function(a,h){return er(this),this.i=null,a=Ts(this,a),Rf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},e.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Cf(a,h,f){Sf(a,h),0<f.length&&(a.i=null,a.g.set(Ts(a,h),P(f)),a.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var C=D;G[g]!==""&&(C+="="+encodeURIComponent(String(G[g]))),a.push(C)}}return this.i=a.join("&")};function Ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Pw(a,h){h&&!a.j&&(er(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Sf(this,g),Cf(this,C,f))},a)),a.j=h}function Ow(a,h){const f=new Ci;if(c.Image){const g=new Image;g.onload=_(nr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(nr,f,"TestLoadImage: error",!1,h,g),g.onabort=_(nr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(nr,f,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Nw(a,h){const f=new Ci,g=new AbortController,C=setTimeout(()=>{g.abort(),nr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?nr(f,"TestPingServer: ok",!0,h):nr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),nr(f,"TestPingServer: error",!1,h)})}function nr(a,h,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Dw(){this.g=new ea}function kw(a,h,f){const g=f||"";try{wf(a,function(C,D){let G=C;u(C)&&(G=ce(C)),h.push(g+D+"="+encodeURIComponent(G))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function la(a){this.l=a.Ub||null,this.j=a.eb||!1}S(la,vs),la.prototype.g=function(){return new ua(this.l,this.j)},la.prototype.i=function(a){return function(){return a}}({});function ua(a,h){ot.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ua,ot),e=ua.prototype,e.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Vi(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},e.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}e.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ki(this):Vi(this),this.readyState==3&&Pf(this)}},e.Ra=function(a){this.g&&(this.response=this.responseText=a,ki(this))},e.Qa=function(a){this.g&&(this.response=a,ki(this))},e.ga=function(){this.g&&ki(this)};function ki(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vi(a)}e.setRequestHeader=function(a,h){this.u.append(a,h)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Of(a){let h="";return Z(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Cl(a,h,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=Of(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ft(a,h,f))}function qt(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(qt,ot);var Vw=/^https?$/i,Lw=["POST","PUT"];e=qt.prototype,e.Ha=function(a){this.J=a},e.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tl.g(),this.v=this.o?sf(this.o):sf(Tl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Nf(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Lw,h,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,G]of f)this.g.setRequestHeader(D,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vf(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Nf(this,D)}};function Nf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Df(a),ha(a)}function Df(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pt(this,"complete"),pt(this,"abort"),ha(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),qt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?kf(this):this.bb())},e.bb=function(){kf(this)};function kf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||On(a)!=4||a.Z()!=2)){if(a.u&&On(a)==4)ae(a.Ea,0,a);else if(pt(a,"readystatechange"),On(a)==4){a.h=!1;try{const G=a.Z();t:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break t;default:h=!1}var f;if(!(f=h)){var g;if(g=G===0){var C=String(a.D).match(If)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Vw.test(C?C.toLowerCase():"")}f=g}if(f)pt(a,"complete"),pt(a,"success");else{a.m=6;try{var D=2<On(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Df(a)}}finally{ha(a)}}}}function ha(a,h){if(a.g){Vf(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pt(a,"ready");try{f.onreadystatechange=g}catch{}}}function Vf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}e.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}e.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ze(h)}};function Lf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xw(a){const h={};a=(a.g&&2<=On(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var f=b(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[C]||[];h[C]=D,D.push(f)}A(h,function(g){return g.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Li(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function xf(a){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Li("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Li("baseRetryDelayMs",5e3,a),this.cb=Li("retryDelaySeedMs",1e4,a),this.Wa=Li("forwardChannelMaxRetries",2,a),this.wa=Li("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new _f(a&&a.concurrentRequestLimit),this.Da=new Dw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=xf.prototype,e.la=8,e.G=1,e.connect=function(a,h,f,g){Se(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Wf(this,null,this.W),fa(this)};function Pl(a){if(Mf(a),a.G==3){var h=a.U++,f=Pn(a.I);if(Ft(f,"SID",a.K),Ft(f,"RID",h),Ft(f,"TYPE","terminate"),xi(a,f),h=new tr(a,a.j,h),h.L=2,h.v=ca(Pn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Kf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ia(h)}qf(a)}function da(a){a.g&&(Nl(a),a.g.cancel(),a.g=null)}function Mf(a){da(a),a.u&&(c.clearTimeout(a.u),a.u=null),pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function fa(a){if(!yf(a.h)&&!a.s){a.s=!0;var h=a.Ga;st||pe(),yt||(st(),yt=!0),Gt.add(h,a),a.B=0}}function Mw(a,h){return vf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ri(m(a.Ga,a,h),Hf(a,a.B)),a.B++,!0)}e.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new tr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),w(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)t:{for(var h=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break t}if(h===4096||f===this.i.length-1){h=f+1;break t}}h=1e3}else h=1e3;h=Uf(this,C,h),f=Pn(this.I),Ft(f,"RID",a),Ft(f,"CVER",22),this.D&&Ft(f,"X-HTTP-Session-Id",this.D),xi(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Of(D)))+"&"+h:this.m&&Cl(f,this.m,D)),Rl(this.h,C),this.Ua&&Ft(f,"TYPE","init"),this.P?(Ft(f,"$req",h),Ft(f,"SID","null"),C.T=!0,Il(C,f,null)):Il(C,f,h),this.G=2}}else this.G==3&&(a?Ff(this,a):this.i.length==0||yf(this.h)||Ff(this))};function Ff(a,h){var f;h?f=h.l:f=a.U++;const g=Pn(a.I);Ft(g,"SID",a.K),Ft(g,"RID",f),Ft(g,"AID",a.T),xi(a,g),a.m&&a.o&&Cl(g,a.m,a.o),f=new tr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Uf(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Rl(a.h,f),Il(f,g,h)}function xi(a,h){a.H&&Z(a.H,function(f,g){Ft(h,g,f)}),a.l&&wf({},function(f,g){Ft(h,g,f)})}function Uf(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;t:{var C=a.i;let D=-1;for(;;){const G=["count="+f];D==-1?0<f?(D=C[0].g,G.push("ofs="+D)):D=0:G.push("ofs="+D);let Vt=!0;for(let le=0;le<f;le++){let bt=C[le].g;const ge=C[le].map;if(bt-=D,0>bt)D=Math.max(0,C[le].g-100),Vt=!1;else try{kw(ge,G,"req"+bt+"_")}catch{g&&g(ge)}}if(Vt){g=G.join("&");break t}}}return a=a.i.splice(0,f),h.D=a,g}function $f(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;st||pe(),yt||(st(),yt=!0),Gt.add(h,a),a.v=0}}function Ol(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ri(m(a.Fa,a),Hf(a,a.v)),a.v++,!0)}e.Fa=function(){if(this.u=null,Bf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ri(m(this.ab,this),a)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),da(this),Bf(this))};function Nl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Bf(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Pn(a.qa);Ft(h,"RID","rpc"),Ft(h,"SID",a.K),Ft(h,"AID",a.T),Ft(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ft(h,"TO",a.ja),Ft(h,"TYPE","xmlhttp"),xi(a,h),a.m&&a.o&&Cl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ca(Pn(h)),f.m=null,f.P=!0,pf(f,a)}e.Za=function(){this.C!=null&&(this.C=null,da(this),Ol(this),Se(19))};function pa(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function jf(a,h){var f=null;if(a.g==h){pa(a),Nl(a),a.g=null;var g=2}else if(Sl(a.h,h))f=h.D,Ef(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=na(),pt(g,new uf(g,f)),fa(a)}else $f(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&Mw(a,h)||g==2&&Ol(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function Hf(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Ur(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new Fr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||oa(g,"https"),ca(g),C?Ow(g.toString(),f):Nw(g.toString(),f)}else Se(2);a.G=0,a.l&&a.l.sa(h),qf(a),Mf(a)}e.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function qf(a){if(a.G=0,a.ka=[],a.l){const h=Tf(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Wf(a,h,f){var g=f instanceof Fr?Pn(f):new Fr(f);if(g.g!="")h&&(g.g=h+"."+g.g),aa(g,g.s);else{var C=c.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var D=new Fr(null);g&&oa(D,g),h&&(D.g=h),C&&aa(D,C),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&Ft(g,f,h),Ft(g,"VER",a.la),xi(a,g),g}function Kf(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new qt(new la({eb:f})):new qt(a.pa),h.Ha(a.J),h}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gf(){}e=Gf.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function ma(){}ma.prototype.g=function(a,h){return new Fe(a,h)};function Fe(a,h){ot.call(this),this.g=new xf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ws(this)}S(Fe,ot),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){Pl(this.g)},Fe.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ce(a),a=f);h.i.push(new Ew(h.Ya++,a)),h.G==3&&fa(h)},Fe.prototype.N=function(){this.g.l=null,delete this.j,Pl(this.g),delete this.g,Fe.aa.N.call(this)};function zf(a){vl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){t:{for(const f in h){a=f;break t}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(zf,vl);function Yf(){El.call(this),this.status=1}S(Yf,El);function ws(a){this.g=a}S(ws,Gf),ws.prototype.ua=function(){pt(this.g,"a")},ws.prototype.ta=function(a){pt(this.g,new zf(a))},ws.prototype.sa=function(a){pt(this.g,new Yf)},ws.prototype.ra=function(){pt(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,EE=function(){return new ma},vE=function(){return na()},yE=xr,Zu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,qa=ra,hf.COMPLETE="complete",_E=hf,of.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",ot.prototype.listen=ot.prototype.K,zi=of,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,gE=qt}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});const qm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Yc("@firebase/firestore");function Bi(){return os.logLevel}function nt(e,...t){if(os.logLevel<=wt.DEBUG){const n=t.map(gd);os.debug(`Firestore (${Ei}): ${e}`,...n)}}function Yn(e,...t){if(os.logLevel<=wt.ERROR){const n=t.map(gd);os.error(`Firestore (${Ei}): ${e}`,...n)}}function ri(e,...t){if(os.logLevel<=wt.WARN){const n=t.map(gd);os.warn(`Firestore (${Ei}): ${e}`,...n)}}function gd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e="Unexpected state"){const t=`FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: `+e;throw Yn(t),new Error(t)}function Dt(e,t){e||dt()}function gt(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class et extends mn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ee.UNAUTHENTICATED))}shutdown(){}}class dk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fk{constructor(t){this.t=t,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Dt(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new es;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new es,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new es)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Dt(typeof r.accessToken=="string"),new TE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Dt(t===null||typeof t=="string"),new Ee(t)}}class pk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new pk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _k{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Dt(this.o===void 0);const r=i=>{i.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,nt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Dt(typeof n.token=="string"),this.R=n.token,new gk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=yk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function Rt(e,t){return e<t?-1:e>t?1:0}function si(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new et($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new et($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new et($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new et($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return se.fromMillis(Date.now())}static fromDate(t){return se.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Rt(this.nanoseconds,t.nanoseconds):Rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new mt(t)}static min(){return new mt(new se(0,0))}static max(){return new mt(new se(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,n,r){n===void 0?n=0:n>t.length&&dt(),r===void 0?r=t.length-n:r>t.length-n&&dt(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Co.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Co?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ut extends Co{construct(t,n,r){return new Ut(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new et($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ut(n)}static emptyPath(){return new Ut([])}}const vk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Co{construct(t,n,r){return new he(t,n,r)}static isValidIdentifier(t){return vk.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new et($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new et($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new et($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new et($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new he(n)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.path=t}static fromPath(t){return new at(Ut.fromString(t))}static fromName(t){return new at(Ut.fromString(t).popFirst(5))}static empty(){return new at(Ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ut.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ut.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new at(new Ut(t.slice()))}}function Ek(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=mt.fromTimestamp(r===1e9?new se(n+1,0):new se(n,r));return new Rr(s,at.empty(),t)}function Tk(e){return new Rr(e.readTime,e.key,-1)}class Rr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(mt.min(),at.empty(),-1)}static max(){return new Rr(mt.max(),at.empty(),-1)}}function wk(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=at.comparator(e.documentKey,t.documentKey),n!==0?n:Rt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ak{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(e){if(e.code!==$.FAILED_PRECONDITION||e.message!==Ik)throw e;nt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&dt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):q.reject(n)}static resolve(t){return new q((n,r)=>{n(t)})}static reject(t){return new q((n,r)=>{r(t)})}static waitFor(t){return new q((n,r)=>{let s=0,i=0,o=!1;t.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=q.resolve(!1);for(const r of t)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new q((r,s)=>{const i=t.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(t[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(t,n){return new q((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function bk(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zo(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}_d.oe=-1;function tl(e){return e==null}function mc(e){return e===0&&1/e==-1/0}function Sk(e){return typeof e=="number"&&Number.isInteger(e)&&!mc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _s(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function IE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,n){this.comparator=t,this.root=n||ue.EMPTY}insert(t,n){return new Bt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(t){return new Bt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ue.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pa(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pa(this.root,t,this.comparator,!0)}}class Pa{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ue{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??ue.RED,this.left=s??ue.EMPTY,this.right=i??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new ue(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw dt();const t=this.left.check();if(t!==this.right.check())throw dt();return t+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw dt()}get value(){throw dt()}get color(){throw dt()}get left(){throw dt()}get right(){throw dt()}copy(t,n,r,s,i){return this}insert(t,n,r){return new ue(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.comparator=t,this.data=new Bt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Km(this.data.getIterator())}getIteratorFrom(t){return new Km(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof de)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new de(this.comparator);return n.data=t,n}}class Km{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.fields=t,t.sort(he.comparator)}static empty(){return new je([])}unionWith(t){let n=new de(he.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new je(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return si(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new AE("Invalid base64 string: "+i):i}}(t);return new fe(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new fe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const Rk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(e){if(Dt(!!e),typeof e=="string"){let t=0;const n=Rk.exec(e);if(Dt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:zt(e.seconds),nanos:zt(e.nanos)}}function zt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function as(e){return typeof e=="string"?fe.fromBase64String(e):fe.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vd(e){const t=e.mapValue.fields.__previous_value__;return yd(t)?vd(t):t}function Po(e){const t=Cr(e.mapValue.fields.__local_write_time__.timestampValue);return new se(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(t,n,r,s,i,o,c,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Oo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Oo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?yd(e)?4:Ok(e)?9007199254740991:Pk(e)?10:11:dt()}function Cn(e,t){if(e===t)return!0;const n=cs(e);if(n!==cs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Po(e).isEqual(Po(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cr(s.timestampValue),c=Cr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return as(s.bytesValue).isEqual(as(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return zt(s.geoPointValue.latitude)===zt(i.geoPointValue.latitude)&&zt(s.geoPointValue.longitude)===zt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return zt(s.integerValue)===zt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=zt(s.doubleValue),c=zt(i.doubleValue);return o===c?mc(o)===mc(c):isNaN(o)&&isNaN(c)}return!1}(e,t);case 9:return si(e.arrayValue.values||[],t.arrayValue.values||[],Cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Wm(o)!==Wm(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Cn(o[l],c[l])))return!1;return!0}(e,t);default:return dt()}}function No(e,t){return(e.values||[]).find(n=>Cn(n,t))!==void 0}function ii(e,t){if(e===t)return 0;const n=cs(e),r=cs(t);if(n!==r)return Rt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Rt(e.booleanValue,t.booleanValue);case 2:return function(i,o){const c=zt(i.integerValue||i.doubleValue),l=zt(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(e,t);case 3:return Gm(e.timestampValue,t.timestampValue);case 4:return Gm(Po(e),Po(t));case 5:return Rt(e.stringValue,t.stringValue);case 6:return function(i,o){const c=as(i),l=as(o);return c.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Rt(c[u],l[u]);if(d!==0)return d}return Rt(c.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const c=Rt(zt(i.latitude),zt(o.latitude));return c!==0?c:Rt(zt(i.longitude),zt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return zm(e.arrayValue,t.arrayValue);case 10:return function(i,o){var c,l,u,d;const p=i.fields||{},m=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=Rt(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:zm(_,S)}(e.mapValue,t.mapValue);case 11:return function(i,o){if(i===Oa.mapValue&&o===Oa.mapValue)return 0;if(i===Oa.mapValue)return 1;if(o===Oa.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Rt(l[p],d[p]);if(m!==0)return m;const _=ii(c[l[p]],u[d[p]]);if(_!==0)return _}return Rt(l.length,d.length)}(e.mapValue,t.mapValue);default:throw dt()}}function Gm(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Rt(e,t);const n=Cr(e),r=Cr(t),s=Rt(n.seconds,r.seconds);return s!==0?s:Rt(n.nanos,r.nanos)}function zm(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ii(n[s],r[s]);if(i)return i}return Rt(n.length,r.length)}function oi(e){return th(e)}function th(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return as(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return at.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=th(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${th(n.fields[o])}`;return s+"}"}(e.mapValue):dt()}function Ym(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eh(e){return!!e&&"integerValue"in e}function Ed(e){return!!e&&"arrayValue"in e}function Qm(e){return!!e&&"nullValue"in e}function Xm(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Wa(e){return!!e&&"mapValue"in e}function Pk(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function uo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _s(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=uo(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=uo(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ok(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.value=t}static empty(){return new Ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=uo(n)}setAll(t){let n=he.emptyPath(),r={},s=[];t.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=uo(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Cn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Wa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){_s(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ve(uo(this.value))}}function bE(e){const t=[];return _s(e.fields,(n,r)=>{const s=new he([n]);if(Wa(r)){const i=bE(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new je(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n,r,s,i,o,c){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(t){return new we(t,0,mt.min(),mt.min(),mt.min(),Ve.empty(),0)}static newFoundDocument(t,n,r,s){return new we(t,1,n,mt.min(),r,s,0)}static newNoDocument(t,n){return new we(t,2,n,mt.min(),mt.min(),Ve.empty(),0)}static newUnknownDocument(t,n){return new we(t,3,n,mt.min(),mt.min(),Ve.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(mt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=mt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof we&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,n){this.position=t,this.inclusive=n}}function Jm(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=at.comparator(at.fromName(o.referenceValue),n.key):r=ii(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zm(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Cn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,n="asc"){this.field=t,this.dir=n}}function Nk(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{}class Jt extends SE{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new kk(t,n,r):n==="array-contains"?new xk(t,r):n==="in"?new Mk(t,r):n==="not-in"?new Fk(t,r):n==="array-contains-any"?new Uk(t,r):new Jt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Vk(t,r):new Lk(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ii(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(ii(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return dt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends SE{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new dn(t,n)}matches(t){return RE(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function RE(e){return e.op==="and"}function CE(e){return Dk(e)&&RE(e)}function Dk(e){for(const t of e.filters)if(t instanceof dn)return!1;return!0}function nh(e){if(e instanceof Jt)return e.field.canonicalString()+e.op.toString()+oi(e.value);if(CE(e))return e.filters.map(t=>nh(t)).join(",");{const t=e.filters.map(n=>nh(n)).join(",");return`${e.op}(${t})`}}function PE(e,t){return e instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(e,t):e instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&PE(o,s.filters[c]),!0):!1}(e,t):void dt()}function OE(e){return e instanceof Jt?function(n){return`${n.field.canonicalString()} ${n.op} ${oi(n.value)}`}(e):e instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(OE).join(" ,")+"}"}(e):"Filter"}class kk extends Jt{constructor(t,n,r){super(t,n,r),this.key=at.fromName(r.referenceValue)}matches(t){const n=at.comparator(t.key,this.key);return this.matchesComparison(n)}}class Vk extends Jt{constructor(t,n){super(t,"in",n),this.keys=NE("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Lk extends Jt{constructor(t,n){super(t,"not-in",n),this.keys=NE("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function NE(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>at.fromName(r.referenceValue))}class xk extends Jt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ed(n)&&No(n.arrayValue,this.value)}}class Mk extends Jt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class Fk extends Jt{constructor(t,n){super(t,"not-in",n)}matches(t){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!No(this.value.arrayValue,n)}}class Uk extends Jt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ed(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(t,n=null,r=[],s=[],i=null,o=null,c=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function tg(e,t=null,n=[],r=[],s=null,i=null,o=null){return new $k(e,t,n,r,s,i,o)}function Td(e){const t=gt(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>nh(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tl(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>oi(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>oi(r)).join(",")),t.ue=n}return t.ue}function wd(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Nk(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!PE(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Zm(e.startAt,t.startAt)&&Zm(e.endAt,t.endAt)}function rh(e){return at.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bk(e,t,n,r,s,i,o,c){return new Yo(e,t,n,r,s,i,o,c)}function Id(e){return new Yo(e)}function eg(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function DE(e){return e.collectionGroup!==null}function ho(e){const t=gt(e);if(t.ce===null){t.ce=[];const n=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new de(he.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.ce.push(new _c(i,r))}),n.has(he.keyField().canonicalString())||t.ce.push(new _c(he.keyField(),r))}return t.ce}function In(e){const t=gt(e);return t.le||(t.le=jk(t,ho(e))),t.le}function jk(e,t){if(e.limitType==="F")return tg(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new _c(s.field,i)});const n=e.endAt?new gc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new gc(e.startAt.position,e.startAt.inclusive):null;return tg(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function sh(e,t){const n=e.filters.concat([t]);return new Yo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ih(e,t,n){return new Yo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function el(e,t){return wd(In(e),In(t))&&e.limitType===t.limitType}function kE(e){return`${Td(In(e))}|lt:${e.limitType}`}function ks(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>OE(s)).join(", ")}]`),tl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>oi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>oi(s)).join(",")),`Target(${r})`}(In(e))}; limitType=${e.limitType})`}function nl(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):at.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ho(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Jm(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,ho(r),s)||r.endAt&&!function(o,c,l){const u=Jm(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,ho(r),s))}(e,t)}function Hk(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function VE(e){return(t,n)=>{let r=!1;for(const s of ho(e)){const i=qk(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qk(e,t,n){const r=e.field.isKeyField()?at.comparator(t.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ii(l,u):dt()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return dt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){_s(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return IE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=new Bt(at.comparator);function Qn(){return Wk}const LE=new Bt(at.comparator);function Yi(...e){let t=LE;for(const n of e)t=t.insert(n.key,n);return t}function xE(e){let t=LE;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Gr(){return fo()}function ME(){return fo()}function fo(){return new Ti(e=>e.toString(),(e,t)=>e.isEqual(t))}const Kk=new Bt(at.comparator),Gk=new de(at.comparator);function Tt(...e){let t=Gk;for(const n of e)t=t.add(n);return t}const zk=new de(Rt);function Yk(){return zk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(t)?"-0":t}}function FE(e){return{integerValue:""+e}}function Qk(e,t){return Sk(t)?FE(t):Ad(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this._=void 0}}function Xk(e,t,n){return e instanceof yc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yd(i)&&(i=vd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Do?$E(e,t):e instanceof ko?BE(e,t):function(s,i){const o=UE(s,i),c=ng(o)+ng(s.Pe);return eh(o)&&eh(s.Pe)?FE(c):Ad(s.serializer,c)}(e,t)}function Jk(e,t,n){return e instanceof Do?$E(e,t):e instanceof ko?BE(e,t):n}function UE(e,t){return e instanceof vc?function(r){return eh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class yc extends rl{}class Do extends rl{constructor(t){super(),this.elements=t}}function $E(e,t){const n=jE(t);for(const r of e.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends rl{constructor(t){super(),this.elements=t}}function BE(e,t){let n=jE(t);for(const r of e.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class vc extends rl{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function ng(e){return zt(e.integerValue||e.doubleValue)}function jE(e){return Ed(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Zk(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Do&&s instanceof Do||r instanceof ko&&s instanceof ko?si(r.elements,s.elements,Cn):r instanceof vc&&s instanceof vc?Cn(r.Pe,s.Pe):r instanceof yc&&s instanceof yc}(e.transform,t.transform)}class tV{constructor(t,n){this.version=t,this.transformResults=n}}class cn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new cn}static exists(t){return new cn(void 0,t)}static updateTime(t){return new cn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ka(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class sl{}function HE(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new bd(e.key,cn.none()):new Qo(e.key,e.data,cn.none());{const n=e.data,r=Ve.empty();let s=new de(he.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(e.key,r,new je(s.toArray()),cn.none())}}function eV(e,t,n){e instanceof Qo?function(s,i,o){const c=s.value.clone(),l=sg(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):e instanceof Lr?function(s,i,o){if(!Ka(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=sg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(qE(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function po(e,t,n,r){return e instanceof Qo?function(i,o,c,l){if(!Ka(i.precondition,o))return c;const u=i.value.clone(),d=ig(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Lr?function(i,o,c,l){if(!Ka(i.precondition,o))return c;const u=ig(i.fieldTransforms,l,o),d=o.data;return d.setAll(qE(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,o,c){return Ka(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(e,t,n)}function nV(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=UE(r.transform,s||null);i!=null&&(n===null&&(n=Ve.empty()),n.set(r.field,i))}return n||null}function rg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&si(r,s,(i,o)=>Zk(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Qo extends sl{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends sl{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qE(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function sg(e,t,n){const r=new Map;Dt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,c=t.data.field(i.field);r.set(i.field,Jk(o,c,n[s]))}return r}function ig(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Xk(i,o,t))}return r}class bd extends sl{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rV extends sl{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&eV(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=po(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=po(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=ME();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=HE(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(mt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Tt())}isEqual(t){return this.batchId===t.batchId&&si(this.mutations,t.mutations,(n,r)=>rg(n,r))&&si(this.baseMutations,t.baseMutations,(n,r)=>rg(n,r))}}class Sd{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Dt(t.mutations.length===r.length);let s=function(){return Kk}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Sd(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt,At;function aV(e){switch(e){default:return dt();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function WE(e){if(e===void 0)return Yn("GRPC error has no .code"),$.UNKNOWN;switch(e){case Xt.OK:return $.OK;case Xt.CANCELLED:return $.CANCELLED;case Xt.UNKNOWN:return $.UNKNOWN;case Xt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Xt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Xt.INTERNAL:return $.INTERNAL;case Xt.UNAVAILABLE:return $.UNAVAILABLE;case Xt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Xt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Xt.NOT_FOUND:return $.NOT_FOUND;case Xt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Xt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Xt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Xt.ABORTED:return $.ABORTED;case Xt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Xt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Xt.DATA_LOSS:return $.DATA_LOSS;default:return dt()}}(At=Xt||(Xt={}))[At.OK=0]="OK",At[At.CANCELLED=1]="CANCELLED",At[At.UNKNOWN=2]="UNKNOWN",At[At.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",At[At.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",At[At.NOT_FOUND=5]="NOT_FOUND",At[At.ALREADY_EXISTS=6]="ALREADY_EXISTS",At[At.PERMISSION_DENIED=7]="PERMISSION_DENIED",At[At.UNAUTHENTICATED=16]="UNAUTHENTICATED",At[At.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",At[At.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",At[At.ABORTED=10]="ABORTED",At[At.OUT_OF_RANGE=11]="OUT_OF_RANGE",At[At.UNIMPLEMENTED=12]="UNIMPLEMENTED",At[At.INTERNAL=13]="INTERNAL",At[At.UNAVAILABLE=14]="UNAVAILABLE",At[At.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=new ts([4294967295,4294967295],0);function og(e){const t=cV().encode(e),n=new mE;return n.update(t),new Uint8Array(n.digest())}function ag(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ts([n,r],0),new ts([s,i],0)]}class Rd{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qi(`Invalid padding: ${n}`);if(r<0)throw new Qi(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Qi(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Qi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=ts.fromNumber(this.Ie)}Ee(t,n,r){let s=t.add(n.multiply(ts.fromNumber(r)));return s.compare(lV)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=og(t),[r,s]=ag(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Rd(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(t){if(this.Ie===0)return;const n=og(t),[r,s]=ag(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Xo.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new il(mt.min(),s,new Bt(Rt),Qn(),Tt())}}class Xo{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Xo(r,n,Tt(),Tt(),Tt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,n,r,s){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=s}}class KE{constructor(t,n){this.targetId=t,this.me=n}}class GE{constructor(t,n,r=fe.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class cg{constructor(){this.fe=0,this.ge=ug(),this.pe=fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Tt(),n=Tt(),r=Tt();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:dt()}}),new Xo(this.pe,this.ye,t,n,r)}Ce(){this.we=!1,this.ge=ug()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Dt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uV{constructor(t){this.Le=t,this.Be=new Map,this.ke=Qn(),this.qe=lg(),this.Qe=new Bt(Rt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const r=this.Ge(n);switch(t.state){case 0:this.ze(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(t.resumeToken));break;default:dt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(t){const n=t.targetId,r=t.me.count,s=this.Je(n);if(s){const i=s.target;if(rh(i))if(r===0){const o=new at(i.path);this.Ue(n,o,we.newNoDocument(o,mt.min()))}else Dt(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(t),l=c?this.Xe(c,t,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=as(r).toUint8Array()}catch(l){if(l instanceof AE)return ri("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Rd(o,s,i)}catch(l){return ri(l instanceof Qi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(t,n,r){return n.me.count===r-this.nt(t,n.targetId)?0:2}nt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(t){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&rh(c.target)){const l=new at(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,we.newNoDocument(l,t))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Tt();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(t));const s=new il(t,n,this.Qe,this.ke,r);return this.ke=Qn(),this.qe=lg(),this.Qe=new Bt(Rt),s}$e(t,n){if(!this.ze(t))return;const r=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new cg,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new de(Rt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||nt("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new cg),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function lg(){return new Bt(at.comparator)}function ug(){return new Bt(at.comparator)}const hV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),fV=(()=>({and:"AND",or:"OR"}))();class pV{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function oh(e,t){return e.useProto3Json||tl(t)?t:{value:t}}function Ec(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zE(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function mV(e,t){return Ec(e,t.toTimestamp())}function An(e){return Dt(!!e),mt.fromTimestamp(function(n){const r=Cr(n);return new se(r.seconds,r.nanos)}(e))}function Cd(e,t){return ah(e,t).canonicalString()}function ah(e,t){const n=function(s){return new Ut(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function YE(e){const t=Ut.fromString(e);return Dt(tT(t)),t}function ch(e,t){return Cd(e.databaseId,t.path)}function mu(e,t){const n=YE(t);if(n.get(1)!==e.databaseId.projectId)throw new et($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new et($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new at(XE(n))}function QE(e,t){return Cd(e.databaseId,t)}function gV(e){const t=YE(e);return t.length===4?Ut.emptyPath():XE(t)}function lh(e){return new Ut(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function XE(e){return Dt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function hg(e,t,n){return{name:ch(e,t),fields:n.value.mapValue.fields}}function _V(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:dt()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Dt(d===void 0||typeof d=="string"),fe.fromBase64String(d||"")):(Dt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),fe.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,c=o&&function(u){const d=u.code===void 0?$.UNKNOWN:WE(u.code);return new et(d,u.message||"")}(o);n=new GE(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=mu(e,r.document.name),i=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):mt.min(),c=new Ve({mapValue:{fields:r.document.fields}}),l=we.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Ga(u,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=mu(e,r.document),i=r.readTime?An(r.readTime):mt.min(),o=we.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ga([],c,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=mu(e,r.document),i=r.removedTargetIds||[];n=new Ga([],i,s,null)}else{if(!("filter"in t))return dt();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new oV(s,i),c=r.targetId;n=new KE(c,o)}}return n}function yV(e,t){let n;if(t instanceof Qo)n={update:hg(e,t.key,t.value)};else if(t instanceof bd)n={delete:ch(e,t.key)};else if(t instanceof Lr)n={update:hg(e,t.key,t.data),updateMask:RV(t.fieldMask)};else{if(!(t instanceof rV))return dt();n={verify:ch(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof yc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof vc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw dt()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:mV(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:dt()}(e,t.precondition)),n}function vV(e,t){return e&&e.length>0?(Dt(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?An(s.updateTime):An(i);return o.isEqual(mt.min())&&(o=An(i)),new tV(o,s.transformResults||[])}(n,t))):[]}function EV(e,t){return{documents:[QE(e,t.path)]}}function TV(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QE(e,s);const i=function(u){if(u.length!==0)return ZE(dn.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Vs(m.field),direction:AV(m.dir)}}(d))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const c=oh(e,t.limit);return c!==null&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:n,parent:s}}function wV(e){let t=gV(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Dt(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=JE(p);return m instanceof dn&&CE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new _c(Ls(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,tl(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new gc(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new gc(_,m)}(n.endAt)),Bk(t,s,o,i,c,"F",l,u)}function IV(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return dt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function JE(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ls(n.unaryFilter.field);return Jt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ls(n.unaryFilter.field);return Jt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ls(n.unaryFilter.field);return Jt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(n.unaryFilter.field);return Jt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return dt()}}(e):e.fieldFilter!==void 0?function(n){return Jt.create(Ls(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return dt()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>JE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return dt()}}(n.compositeFilter.op))}(e):dt()}function AV(e){return hV[e]}function bV(e){return dV[e]}function SV(e){return fV[e]}function Vs(e){return{fieldPath:e.canonicalString()}}function Ls(e){return he.fromServerFormat(e.fieldPath)}function ZE(e){return e instanceof Jt?function(n){if(n.op==="=="){if(Xm(n.value))return{unaryFilter:{field:Vs(n.field),op:"IS_NAN"}};if(Qm(n.value))return{unaryFilter:{field:Vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xm(n.value))return{unaryFilter:{field:Vs(n.field),op:"IS_NOT_NAN"}};if(Qm(n.value))return{unaryFilter:{field:Vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vs(n.field),op:bV(n.op),value:n.value}}}(e):e instanceof dn?function(n){const r=n.getFilters().map(s=>ZE(s));return r.length===1?r[0]:{compositeFilter:{op:SV(n.op),filters:r}}}(e):dt()}function RV(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function tT(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n,r,s,i=mt.min(),o=mt.min(),c=fe.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new gr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(t){this.ct=t}}function PV(e){const t=wV({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ih(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(){this.un=new NV}addToCollectionParentIndex(t,n){return this.un.add(n),q.resolve()}getCollectionParents(t,n){return q.resolve(this.un.getEntries(n))}addFieldIndex(t,n){return q.resolve()}deleteFieldIndex(t,n){return q.resolve()}deleteAllFieldIndexes(t){return q.resolve()}createTargetIndexes(t,n){return q.resolve()}getDocumentsMatchingTarget(t,n){return q.resolve(null)}getIndexType(t,n){return q.resolve(0)}getFieldIndexes(t,n){return q.resolve([])}getNextCollectionGroupToUpdate(t){return q.resolve(null)}getMinOffset(t,n){return q.resolve(Rr.min())}getMinOffsetFromCollectionGroup(t,n){return q.resolve(Rr.min())}updateCollectionGroup(t,n,r){return q.resolve()}updateIndexEntries(t,n){return q.resolve()}}class NV{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new de(Ut.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new de(Ut.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ai(0)}static kn(){return new ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(){this.changes=new Ti(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,we.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&po(r.mutation,s,je.empty(),se.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Tt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Tt()){const s=Gr();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Yi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Gr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Tt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(t,n,r,s){let i=Qn();const o=fo(),c=function(){return fo()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Lr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),po(d.mutation,u,d.mutation.getFieldMask(),se.now())):o.set(u.key,je.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new kV(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(t,n){const r=fo();let s=new Bt((o,c)=>o-c),i=Tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||je.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||Tt()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=ME();d.forEach(m=>{if(!i.has(m)){const _=HE(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,p))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return at.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):DE(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):q.resolve(Gr());let c=-1,l=i;return o.next(u=>q.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?q.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,l,u,Tt())).next(d=>({batchId:c,changes:xE(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new at(n)).next(r=>{let s=Yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Yi();return this.indexManager.getCollectionParents(t,i).next(c=>q.forEach(c,l=>{const u=function(p,m){return new Yo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,we.newInvalidDocument(d)))});let c=Yi();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&po(d.mutation,u,je.empty(),se.now()),nl(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,n){return q.resolve(this.hr.get(n))}saveBundleMetadata(t,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:An(s.createTime)}}(n)),q.resolve()}getNamedQuery(t,n){return q.resolve(this.Pr.get(n))}saveNamedQuery(t,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:PV(s.bundledQuery),readTime:An(s.readTime)}}(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(){this.overlays=new Bt(at.comparator),this.Ir=new Map}getOverlay(t,n){return q.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Gr();return q.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),q.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),q.resolve()}getOverlaysForCollection(t,n,r){const s=Gr(),i=n.length+1,o=new at(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return q.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Bt((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Gr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Gr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return q.resolve(c)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iV(n,r));let i=this.Ir.get(n);i===void 0&&(i=Tt(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this.sessionToken=fe.EMPTY_BYTE_STRING}getSessionToken(t){return q.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.Tr=new de(ie.Er),this.dr=new de(ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,n){const r=new ie(t,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Vr(new ie(t,n))}mr(t,n){t.forEach(r=>this.removeReference(r,n))}gr(t){const n=new at(new Ut([])),r=new ie(n,t),s=new ie(n,t+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const n=new at(new Ut([])),r=new ie(n,t),s=new ie(n,t+1);let i=Tt();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new ie(t,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ie{constructor(t,n){this.key=t,this.wr=n}static Er(t,n){return at.comparator(t.key,n.key)||Rt(t.wr,n.wr)}static Ar(t,n){return Rt(t.wr,n.wr)||at.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new de(ie.Er)}checkEmpty(t){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sV(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new ie(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return q.resolve(o)}lookupMutationBatch(t,n){return q.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ie(n,0),s=new ie(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new de(Rt);return n.forEach(s=>{const i=new ie(s,0),o=new ie(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),q.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;at.isDocumentKey(i)||(i=i.child(""));const o=new ie(new at(i),0);let c=new de(Rt);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),q.resolve(this.Cr(c))}Cr(t){const n=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Dt(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return q.forEach(n.mutations,s=>{const i=new ie(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,n){const r=new ie(n,0),s=this.br.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,q.resolve()}Fr(t,n){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const n=this.vr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(t){this.Mr=t,this.docs=function(){return new Bt(at.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():we.newInvalidDocument(n))}getEntries(t,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():we.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Qn();const o=n.path,c=new at(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wk(Tk(d),r)<=0||(s.has(d.key)||nl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(t,n,r,s){dt()}Or(t,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new $V(this)}getSize(t){return q.resolve(this.size)}}class $V extends DV{constructor(t){super(),this.cr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),q.waitFor(n)}getFromCache(t,n){return this.cr.getEntry(t,n)}getAllFromCache(t,n){return this.cr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{constructor(t){this.persistence=t,this.Nr=new Ti(n=>Td(n),wd),this.lastRemoteSnapshotVersion=mt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pd,this.targetCount=0,this.kr=ai.Bn()}forEachTarget(t,n){return this.Nr.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(t){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return q.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),q.resolve()}Kn(t){this.Nr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.kr=new ai(n),this.highestTargetId=n),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,n){return this.Kn(n),this.targetCount+=1,q.resolve()}updateTargetData(t,n){return this.Kn(n),q.resolve()}removeTargetData(t,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(t){return q.resolve(this.targetCount)}getTargetData(t,n){const r=this.Nr.get(n)||null;return q.resolve(r)}addMatchingKeys(t,n,r){return this.Br.Rr(n,r),q.resolve()}removeMatchingKeys(t,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Br.gr(n),q.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Br.yr(n);return q.resolve(r)}containsKey(t,n){return q.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(t,n){this.qr={},this.overlays={},this.Qr=new _d(0),this.Kr=!1,this.Kr=!0,this.$r=new MV,this.referenceDelegate=t(this),this.Ur=new BV(this),this.indexManager=new OV,this.remoteDocumentCache=function(s){return new UV(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new CV(n),this.Gr=new LV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new xV,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.qr[t.toKey()];return r||(r=new FV(n,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,n,r){nt("MemoryPersistence","Starting transaction:",t);const s=new HV(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(t,n){return q.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,n)))}}class HV extends Ak{constructor(t){super(),this.currentSequenceNumber=t}}class Od{constructor(t){this.persistence=t,this.Jr=new Pd,this.Yr=null}static Zr(t){return new Od(t)}get Xr(){if(this.Yr)return this.Yr;throw dt()}addReference(t,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),q.resolve()}removeReference(t,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(t,n){return this.Xr.add(n.toString()),q.resolve()}removeTarget(t,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}zr(){this.Yr=new Set}jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Xr,r=>{const s=at.fromPath(r);return this.ei(t,s).next(i=>{i||n.removeEntry(s,mt.min())})}).next(()=>(this.Yr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ei(t,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(t){return 0}ei(t,n){return q.or([()=>q.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Hr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(t,n){let r=Tt(),s=Tt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nd(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return DP()?8:bk(Ae())>0?6:4}()}initialize(t,n){this.Ji=t,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.Yi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new qV;return this.Xi(t,n,o).next(c=>{if(i.result=c,this.zi)return this.es(t,n,o,c.size)})}).next(()=>i.result)}es(t,n,r,s){return r.documentReadCount<this.ji?(Bi()<=wt.DEBUG&&nt("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),q.resolve()):(Bi()<=wt.DEBUG&&nt("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Bi()<=wt.DEBUG&&nt("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,In(n))):q.resolve())}Yi(t,n){if(eg(n))return q.resolve(null);let r=In(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ih(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=Tt(...i);return this.Ji.getDocuments(t,o).next(c=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(t,ih(n,null,"F")):this.rs(t,u,n,l)}))})))}Zi(t,n,r,s){return eg(n)||s.isEqual(mt.min())?q.resolve(null):this.Ji.getDocuments(t,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?q.resolve(null):(Bi()<=wt.DEBUG&&nt("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ks(n)),this.rs(t,o,n,Ek(s,-1)).next(c=>c))})}ts(t,n){let r=new de(VE(t));return n.forEach((s,i)=>{nl(t,i)&&(r=r.add(i))}),r}ns(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(t,n,r){return Bi()<=wt.DEBUG&&nt("QueryEngine","Using full collection scan to execute query:",ks(n)),this.Ji.getDocumentsMatchingQuery(t,n,Rr.min(),r)}rs(t,n,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(t,n,r,s){this.persistence=t,this.ss=n,this.serializer=s,this.os=new Bt(Rt),this._s=new Ti(i=>Td(i),wd),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new VV(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.os))}}function GV(e,t,n,r){return new KV(e,t,n,r)}async function eT(e,t){const n=gt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Tt();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function zV(e,t){const n=gt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,m=p.keys();let _=q.resolve();return m.forEach(S=>{_=_.next(()=>d.getEntry(l,S)).next(P=>{const O=u.docVersions.get(S);Dt(O!==null),P.version.compareTo(O)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Tt();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function nT(e){const t=gt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ur.getLastRemoteSnapshotVersion(n))}function YV(e,t){const n=gt(e),r=t.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];t.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?_=_.withResumeToken(fe.EMPTY_BYTE_STRING,mt.min()).withLastLimboFreeSnapshotVersion(mt.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(P,O,x){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,_,d)&&c.push(n.Ur.updateTargetData(i,_))});let l=Qn(),u=Tt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(QV(i,o,t.documentUpdates).next(d=>{l=d.Ps,u=d.Is})),!r.isEqual(mt.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return q.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function QV(e,t,n){let r=Tt(),s=Tt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Qn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(mt.min())?(t.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(c,l)):nt("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function XV(e,t){const n=gt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function JV(e,t){const n=gt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,t).next(i=>i?(s=i,q.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new gr(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(t,r.targetId)),r})}async function uh(e,t,n){const r=gt(e),s=r.os.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zo(o))throw o;nt("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function dg(e,t,n){const r=gt(e);let s=mt.min(),i=Tt();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=gt(l),m=p._s.get(d);return m!==void 0?q.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(r,o,In(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,t,n?s:mt.min(),n?i:Tt())).next(c=>(ZV(r,Hk(t),c),{documents:c,Ts:i})))}function ZV(e,t,n){let r=e.us.get(t)||mt.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.us.set(t,r)}class fg{constructor(){this.activeTargetIds=Yk()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tL{constructor(){this.so=new fg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,n,r){this.oo[t]=n}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new fg,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){nt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){nt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na=null;function gu(){return Na===null?Na=function(){return 268435456+Math.round(2147483648*Math.random())}():Na++,"0x"+Na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="WebChannelConnection";class sL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=gu(),l=this.xo(n,r.toUriEncodedString());nt("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(d=>(nt("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw ri("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ei}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=nL[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,n,r,s){const i=gu();return new Promise((o,c)=>{const l=new gE;l.setWithCredentials(!0),l.listenOnce(_E.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qa.NO_ERROR:const d=l.getResponseJson();nt(ye,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),o(d);break;case qa.TIMEOUT:nt(ye,`RPC '${t}' ${i} timed out`),c(new et($.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const p=l.getStatus();if(nt(ye,`RPC '${t}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(_.status);c(new et(S,_.message))}else c(new et($.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new et($.UNAVAILABLE,"Connection failed."));break;default:dt()}}finally{nt(ye,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);nt(ye,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(t,n,r){const s=gu(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=EE(),c=vE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");nt(ye,`Creating RPC '${t}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const S=new rL({Io:O=>{_?nt(ye,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(m||(nt(ye,`Opening RPC '${t}' stream ${s} transport.`),p.open(),m=!0),nt(ye,`RPC '${t}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),P=(O,x,M)=>{O.listen(x,U=>{try{M(U)}catch(L){setTimeout(()=>{throw L},0)}})};return P(p,zi.EventType.OPEN,()=>{_||(nt(ye,`RPC '${t}' stream ${s} transport opened.`),S.yo())}),P(p,zi.EventType.CLOSE,()=>{_||(_=!0,nt(ye,`RPC '${t}' stream ${s} transport closed`),S.So())}),P(p,zi.EventType.ERROR,O=>{_||(_=!0,ri(ye,`RPC '${t}' stream ${s} transport errored:`,O),S.So(new et($.UNAVAILABLE,"The operation could not be completed")))}),P(p,zi.EventType.MESSAGE,O=>{var x;if(!_){const M=O.data[0];Dt(!!M);const U=M,L=U.error||((x=U[0])===null||x===void 0?void 0:x.error);if(L){nt(ye,`RPC '${t}' stream ${s} received error:`,L);const z=L.status;let Z=function(E){const w=Xt[E];if(w!==void 0)return WE(w)}(z),A=L.message;Z===void 0&&(Z=$.INTERNAL,A="Unknown error status: "+z+" with message "+L.message),_=!0,S.So(new et(Z,A)),p.close()}else nt(ye,`RPC '${t}' stream ${s} received:`,M),S.bo(M)}}),P(c,yE.STAT_EVENT,O=>{O.stat===Zu.PROXY?nt(ye,`RPC '${t}' stream ${s} detected buffering proxy`):O.stat===Zu.NOPROXY&&nt(ye,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function _u(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e){return new pV(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(t,n,r=1e3,s=1.5,i=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&nt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(t,n,r,s,i,o,c,l){this.ui=t,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rT(t,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(n)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{t(()=>{const s=new et($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,n){const r=this.h_(this.Yo);this.stream=this.T_(t,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return nt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return n=>{this.ui.enqueueAndForget(()=>this.Yo===t?n():(nt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iL extends sT{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(t,n){return this.connection.Bo("Listen",t,n)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const n=_V(this.serializer,t),r=function(i){if(!("targetChange"in i))return mt.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?mt.min():o.readTime?An(o.readTime):mt.min()}(t);return this.listener.d_(n,r)}A_(t){const n={};n.database=lh(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=rh(l)?{documents:EV(i,l)}:{query:TV(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zE(i,o.resumeToken);const u=oh(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(mt.min())>0){c.readTime=Ec(i,o.snapshotVersion.toTimestamp());const u=oh(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,t);const r=IV(this.serializer,t);r&&(n.labels=r),this.a_(n)}R_(t){const n={};n.database=lh(this.serializer),n.removeTarget=t,this.a_(n)}}class oL extends sT{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,n){return this.connection.Bo("Write",t,n)}E_(t){return Dt(!!t.streamToken),this.lastStreamToken=t.streamToken,Dt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Dt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const n=vV(t.writeResults,t.commitTime),r=An(t.commitTime);return this.listener.g_(r,n)}p_(){const t={};t.database=lh(this.serializer),this.a_(t)}m_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>yV(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new et($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(t,ah(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new et($.UNKNOWN,i.toString())})}Lo(t,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(t,ah(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new et($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class cL{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Yn(n),this.D_=!1):nt("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ys(this)&&(nt("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=gt(l);u.L_.add(4),await Jo(u),u.q_.set("Unknown"),u.L_.delete(4),await al(u)}(this))})}),this.q_=new cL(r,s)}}async function al(e){if(ys(e))for(const t of e.B_)await t(!0)}async function Jo(e){for(const t of e.B_)await t(!1)}function iT(e,t){const n=gt(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),Ld(n)?Vd(n):wi(n).r_()&&kd(n,t))}function Dd(e,t){const n=gt(e),r=wi(n);n.N_.delete(t),r.r_()&&oT(n,t),n.N_.size===0&&(r.r_()?r.o_():ys(n)&&n.q_.set("Unknown"))}function kd(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(mt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}wi(e).A_(t)}function oT(e,t){e.Q_.xe(t),wi(e).R_(t)}function Vd(e){e.Q_=new uV({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),wi(e).start(),e.q_.v_()}function Ld(e){return ys(e)&&!wi(e).n_()&&e.N_.size>0}function ys(e){return gt(e).L_.size===0}function aT(e){e.Q_=void 0}async function uL(e){e.q_.set("Online")}async function hL(e){e.N_.forEach((t,n)=>{kd(e,t)})}async function dL(e,t){aT(e),Ld(e)?(e.q_.M_(t),Vd(e)):e.q_.set("Unknown")}async function fL(e,t,n){if(e.q_.set("Online"),t instanceof GE&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(e,t)}catch(r){nt("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Tc(e,r)}else if(t instanceof Ga?e.Q_.Ke(t):t instanceof KE?e.Q_.He(t):e.Q_.We(t),!n.isEqual(mt.min()))try{const r=await nT(e.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(fe.EMPTY_BYTE_STRING,d.snapshotVersion)),oT(i,l);const p=new gr(d.target,l,u,d.sequenceNumber);kd(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(e,n)}catch(r){nt("RemoteStore","Failed to raise snapshot:",r),await Tc(e,r)}}async function Tc(e,t,n){if(!zo(t))throw t;e.L_.add(1),await Jo(e),e.q_.set("Offline"),n||(n=()=>nT(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nt("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await al(e)})}function cT(e,t){return t().catch(n=>Tc(e,n,t))}async function cl(e){const t=gt(e),n=Pr(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;pL(t);)try{const s=await XV(t.localStore,r);if(s===null){t.O_.length===0&&n.o_();break}r=s.batchId,mL(t,s)}catch(s){await Tc(t,s)}lT(t)&&uT(t)}function pL(e){return ys(e)&&e.O_.length<10}function mL(e,t){e.O_.push(t);const n=Pr(e);n.r_()&&n.V_&&n.m_(t.mutations)}function lT(e){return ys(e)&&!Pr(e).n_()&&e.O_.length>0}function uT(e){Pr(e).start()}async function gL(e){Pr(e).p_()}async function _L(e){const t=Pr(e);for(const n of e.O_)t.m_(n.mutations)}async function yL(e,t,n){const r=e.O_.shift(),s=Sd.from(r,t,n);await cT(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await cl(e)}async function vL(e,t){t&&Pr(e).V_&&await async function(r,s){if(function(o){return aV(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();Pr(r).s_(),await cT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await cl(r)}}(e,t),lT(e)&&uT(e)}async function mg(e,t){const n=gt(e);n.asyncQueue.verifyOperationInProgress(),nt("RemoteStore","RemoteStore received new credentials");const r=ys(n);n.L_.add(3),await Jo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await al(n)}async function EL(e,t){const n=gt(e);t?(n.L_.delete(2),await al(n)):t||(n.L_.add(2),await Jo(n),n.q_.set("Unknown"))}function wi(e){return e.K_||(e.K_=function(n,r,s){const i=gt(n);return i.w_(),new iL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Eo:uL.bind(null,e),Ro:hL.bind(null,e),mo:dL.bind(null,e),d_:fL.bind(null,e)}),e.B_.push(async t=>{t?(e.K_.s_(),Ld(e)?Vd(e):e.q_.set("Unknown")):(await e.K_.stop(),aT(e))})),e.K_}function Pr(e){return e.U_||(e.U_=function(n,r,s){const i=gt(n);return i.w_(),new oL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:gL.bind(null,e),mo:vL.bind(null,e),f_:_L.bind(null,e),g_:yL.bind(null,e)}),e.B_.push(async t=>{t?(e.U_.s_(),await cl(e)):(await e.U_.stop(),e.O_.length>0&&(nt("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))})),e.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,c=new xd(t,n,o,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new et($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Md(e,t){if(Yn("AsyncQueue",`${t}: ${e}`),zo(e))return new et($.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this.comparator=t?(n,r)=>t(n,r)||at.comparator(n.key,r.key):(n,r)=>at.comparator(n.key,r.key),this.keyedMap=Yi(),this.sortedSet=new Bt(this.comparator)}static emptySet(t){return new Ks(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ks)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ks;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.W_=new Bt(at.comparator)}track(t){const n=t.doc.key,r=this.W_.get(n);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(n,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(n):t.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:t.doc}):dt():this.W_=this.W_.insert(n,t)}G_(){const t=[];return this.W_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ci{constructor(t,n,r,s,i,o,c,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ci(t,n,Ks.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&el(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class wL{constructor(){this.queries=_g(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=gt(n),i=s.queries;s.queries=_g(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new et($.ABORTED,"Firestore shutting down"))}}function _g(){return new Ti(e=>kE(e),el)}async function IL(e,t){const n=gt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.H_()&&t.J_()&&(r=2):(i=new TL,r=t.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Md(o,`Initialization of query '${ks(t.query)}' failed`);return void t.onError(c)}n.queries.set(s,i),i.j_.push(t),t.Z_(n.onlineState),i.z_&&t.X_(i.z_)&&Fd(n)}async function AL(e,t){const n=gt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(t);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=t.J_()?0:1:!i.H_()&&t.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bL(e,t){const n=gt(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Fd(n)}function SL(e,t,n){const r=gt(e),s=r.queries.get(t);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(t)}function Fd(e){e.Y_.forEach(t=>{t.next()})}var hh,yg;(yg=hh||(hh={})).ea="default",yg.Cache="cache";class RL{constructor(t,n,r){this.query=t,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ci(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.na?this.ia(t)&&(this.ta.next(t),n=!0):this.sa(t,this.onlineState)&&(this.oa(t),n=!0),this.ra=t,n}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),n=!0),n}sa(t,n){if(!t.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(t){t=ci.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==hh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(t){this.key=t}}class dT{constructor(t){this.key=t}}class CL{constructor(t,n){this.query=t,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Tt(),this.mutatedKeys=Tt(),this.Aa=VE(t),this.Ra=new Ks(this.Aa)}get Va(){return this.Ta}ma(t,n){const r=n?n.fa:new gg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const m=s.get(d),_=nl(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?S!==P&&(r.track({type:3,doc:_}),O=!0):this.ga(m,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.Aa(_,l)>0||u&&this.Aa(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(_?(o=o.add(_),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const o=t.fa.G_();o.sort((d,p)=>function(_,S){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return dt()}};return P(_)-P(S)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new ci(this.query,t.Ra,i,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new gg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Tt(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return t.forEach(r=>{this.da.has(r)||n.push(new dT(r))}),this.da.forEach(r=>{t.has(r)||n.push(new hT(r))}),n}ba(t){this.Ta=t.Ts,this.da=Tt();const n=this.ma(t.documents);return this.applyChanges(n,!0)}Da(){return ci.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class PL{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class OL{constructor(t){this.key=t,this.va=!1}}class NL{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ti(c=>kE(c),el),this.Ma=new Map,this.xa=new Set,this.Oa=new Bt(at.comparator),this.Na=new Map,this.La=new Pd,this.Ba={},this.ka=new Map,this.qa=ai.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function DL(e,t,n=!0){const r=yT(e);let s;const i=r.Fa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await fT(r,t,n,!0),s}async function kL(e,t){const n=yT(e);await fT(n,t,!0,!1)}async function fT(e,t,n,r){const s=await JV(e.localStore,In(t)),i=s.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await VL(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&iT(e.remoteStore,s),c}async function VL(e,t,n,r,s){e.Ka=(p,m,_)=>async function(P,O,x,M){let U=O.view.ma(x);U.ns&&(U=await dg(P.localStore,O.query,!1).then(({documents:A})=>O.view.ma(A,U)));const L=M&&M.targetChanges.get(O.targetId),z=M&&M.targetMismatches.get(O.targetId)!=null,Z=O.view.applyChanges(U,P.isPrimaryClient,L,z);return Eg(P,O.targetId,Z.wa),Z.snapshot}(e,p,m,_);const i=await dg(e.localStore,t,!0),o=new CL(t,i.Ts),c=o.ma(i.documents),l=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(c,e.isPrimaryClient,l);Eg(e,n,u.wa);const d=new PL(t,n,o);return e.Fa.set(t,d),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}async function LL(e,t,n){const r=gt(e),s=r.Fa.get(t),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!el(o,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await uh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Dd(r.remoteStore,s.targetId),dh(r,s.targetId)}).catch(Go)):(dh(r,s.targetId),await uh(r.localStore,s.targetId,!0))}async function xL(e,t){const n=gt(e),r=n.Fa.get(t),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Dd(n.remoteStore,r.targetId))}async function ML(e,t,n){const r=qL(e);try{const s=await function(o,c){const l=gt(o),u=se.now(),d=c.reduce((_,S)=>_.add(S.key),Tt());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Qn(),P=Tt();return l.cs.getEntries(_,d).next(O=>{S=O,S.forEach((x,M)=>{M.isValidDocument()||(P=P.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(O=>{p=O;const x=[];for(const M of c){const U=nV(M,p.get(M.key).overlayedDocument);U!=null&&x.push(new Lr(M.key,U,bE(U.value.mapValue),cn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,x,c)}).next(O=>{m=O;const x=O.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(_,O.batchId,x)})}).then(()=>({batchId:m.batchId,changes:xE(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Bt(Rt)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await Zo(r,s.changes),await cl(r.remoteStore)}catch(s){const i=Md(s,"Failed to persist write");n.reject(i)}}async function pT(e,t){const n=gt(e);try{const r=await YV(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Dt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Dt(o.va):s.removedDocuments.size>0&&(Dt(o.va),o.va=!1))}),await Zo(n,r,t)}catch(r){await Go(r)}}function vg(e,t,n){const r=gt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=gt(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(c)&&(u=!0)}),u&&Fd(l)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function FL(e,t,n){const r=gt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Na.get(t),i=s&&s.key;if(i){let o=new Bt(at.comparator);o=o.insert(i,we.newNoDocument(i,mt.min()));const c=Tt().add(i),l=new il(mt.min(),new Map,new Bt(Rt),o,c);await pT(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(t),Ud(r)}else await uh(r.localStore,t,!1).then(()=>dh(r,t,n)).catch(Go)}async function UL(e,t){const n=gt(e),r=t.batch.batchId;try{const s=await zV(n.localStore,t);gT(n,r,null),mT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,s)}catch(s){await Go(s)}}async function $L(e,t,n){const r=gt(e);try{const s=await function(o,c){const l=gt(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Dt(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,t);gT(r,t,n),mT(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Zo(r,s)}catch(s){await Go(s)}}function mT(e,t){(e.ka.get(t)||[]).forEach(n=>{n.resolve()}),e.ka.delete(t)}function gT(e,t,n){const r=gt(e);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function dh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach(r=>{e.La.containsKey(r)||_T(e,r)})}function _T(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);n!==null&&(Dd(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),Ud(e))}function Eg(e,t,n){for(const r of n)r instanceof hT?(e.La.addReference(r.key,t),BL(e,r)):r instanceof dT?(nt("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||_T(e,r.key)):dt()}function BL(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(nt("SyncEngine","New document in limbo: "+n),e.xa.add(r),Ud(e))}function Ud(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new at(Ut.fromString(t)),r=e.qa.next();e.Na.set(r,new OL(n)),e.Oa=e.Oa.insert(n,r),iT(e.remoteStore,new gr(In(Id(n.path)),r,"TargetPurposeLimboResolution",_d.oe))}}async function Zo(e,t,n){const r=gt(e),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,t,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Nd.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const d=gt(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,m=>q.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>q.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!zo(p))throw p;nt("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.os.get(m),S=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(m,P)}}}(r.localStore,i))}async function jL(e,t){const n=gt(e);if(!n.currentUser.isEqual(t)){nt("SyncEngine","User change. New user:",t.toKey());const r=await eT(n.localStore,t);n.currentUser=t,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new et($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.hs)}}function HL(e,t){const n=gt(e),r=n.Na.get(t);if(r&&r.va)return Tt().add(r.key);{let s=Tt();const i=n.Ma.get(t);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function yT(e){const t=gt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=pT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=HL.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=FL.bind(null,t),t.Ca.d_=bL.bind(null,t.eventManager),t.Ca.$a=SL.bind(null,t.eventManager),t}function qL(e){const t=gt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=UL.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$L.bind(null,t),t}class wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ol(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,n){return null}Ha(t,n){return null}za(t){return GV(this.persistence,new WV,t.initialUser,this.serializer)}Ga(t){return new jV(Od.Zr,this.serializer)}Wa(t){return new tL}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wc.provider={build:()=>new wc};class fh{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jL.bind(null,this.syncEngine),await EL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wL}()}createDatastore(t){const n=ol(t.databaseInfo.databaseId),r=function(i){return new sL(i)}(t.databaseInfo);return function(i,o,c,l){return new aL(i,o,c,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,c){return new lL(r,s,i,o,c)}(this.localStore,this.datastore,t.asyncQueue,n=>vg(this.syncEngine,n,0),function(){return pg.D()?new pg:new eL}())}createSyncEngine(t,n){return function(s,i,o,c,l,u,d){const p=new NL(s,i,o,c,l,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=gt(s);nt("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Jo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}fh.provider={build:()=>new fh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Yn("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=wE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{nt("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(nt("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Md(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function yu(e,t){e.asyncQueue.verifyOperationInProgress(),nt("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await eT(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Tg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await GL(e);nt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>mg(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>mg(t.remoteStore,s)),e._onlineComponents=t}async function GL(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){nt("FirestoreClient","Using user provided OfflineComponentProvider");try{await yu(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await yu(e,new wc)}}else nt("FirestoreClient","Using default OfflineComponentProvider"),await yu(e,new wc);return e._offlineComponents}async function vT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(nt("FirestoreClient","Using user provided OnlineComponentProvider"),await Tg(e,e._uninitializedComponentsProvider._online)):(nt("FirestoreClient","Using default OnlineComponentProvider"),await Tg(e,new fh))),e._onlineComponents}function zL(e){return vT(e).then(t=>t.syncEngine)}async function wg(e){const t=await vT(e),n=t.eventManager;return n.onListen=DL.bind(null,t.syncEngine),n.onUnlisten=LL.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=kL.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=xL.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(e,t,n){if(!n)throw new et($.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function YL(e,t,n,r){if(t===!0&&r===!0)throw new et($.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ag(e){if(!at.isDocumentKey(e))throw new et($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function bg(e){if(at.isDocumentKey(e))throw new et($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ll(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":dt()}function Tr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new et($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ll(e);throw new et($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new et($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new et($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}YL("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ET((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new et($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new et($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new et($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ul{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new et($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new et($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sg(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hk;switch(r.type){case"firstParty":return new mk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new et($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ig.get(n);r&&(nt("ComponentProvider","Removing Datastore"),Ig.delete(n),r.terminate())}(this),Promise.resolve()}}function QL(e,t,n,r={}){var s;const i=(e=Tr(e,ul))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Ee.MOCK_USER;else{c=SP(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new et($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ee(u)}e._authCredentials=new dk(new TE(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ii(this.firestore,t,this._query)}}class Le{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Le(this.firestore,t,this._key)}}class wr extends Ii{constructor(t,n,r){super(t,n,Id(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Le(this.firestore,null,new at(t))}withConverter(t){return new wr(this.firestore,t,this._path)}}function Rg(e,t,...n){if(e=Yt(e),TT("collection","path",t),e instanceof ul){const r=Ut.fromString(t,...n);return bg(r),new wr(e,null,r)}{if(!(e instanceof Le||e instanceof wr))throw new et($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ut.fromString(t,...n));return bg(r),new wr(e.firestore,null,r)}}function ph(e,t,...n){if(e=Yt(e),arguments.length===1&&(t=wE.newId()),TT("doc","path",t),e instanceof ul){const r=Ut.fromString(t,...n);return Ag(r),new Le(e,null,new at(r))}{if(!(e instanceof Le||e instanceof wr))throw new et($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ut.fromString(t,...n));return Ag(r),new Le(e.firestore,e instanceof wr?e.converter:null,new at(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rT(this,"async_queue_retry"),this.Vu=()=>{const r=_u();r&&nt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=_u();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=_u();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new es;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!zo(t))throw t;nt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const s=xd.createAndSchedule(this,t,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&dt()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}function Pg(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class li extends ul{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Cg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Cg(t),this._firestoreClient=void 0,await t}}}function XL(e,t){const n=typeof e=="object"?e:od(),r=typeof e=="string"?e:t||"(default)",s=ms(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=AP("firestore");i&&QL(s,...i)}return s}function wT(e){if(e._terminated)throw new et($.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||JL(e),e._firestoreClient}function JL(e){var t,n,r;const s=e._freezeSettings(),i=function(c,l,u,d){return new Ck(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ET(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new KL(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ui(fe.fromBase64String(t))}catch(n){throw new et($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ui(fe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new et($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new et($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new et($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Rt(this._lat,t._lat)||Rt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=/^__.*__$/;class t1{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Lr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Qo(t,this.data,n,this.fieldTransforms)}}class IT{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Lr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function AT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw dt()}}class Hd{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Hd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ic(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(AT(this.Cu)&&ZL.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class e1{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ol(t)}Qu(t,n,r,s=!1){return new Hd({Cu:t,methodName:n,qu:r,path:he.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qd(e){const t=e._freezeSettings(),n=ol(e._databaseId);return new e1(e._databaseId,!!t.ignoreUndefinedProperties,n)}function n1(e,t,n,r,s,i={}){const o=e.Qu(i.merge||i.mergeFields?2:0,t,n,s);Wd("Data must be an object, but it was:",o,r);const c=bT(r,o);let l,u;if(i.merge)l=new je(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=mh(t,p,n);if(!o.contains(m))throw new et($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);RT(d,m)||d.push(m)}l=new je(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new t1(new Ve(c),l,u)}class dl extends $d{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof dl}}function r1(e,t,n,r){const s=e.Qu(1,t,n);Wd("Data must be an object, but it was:",s,r);const i=[],o=Ve.empty();_s(r,(l,u)=>{const d=Kd(t,l,n);u=Yt(u);const p=s.Nu(d);if(u instanceof dl)i.push(d);else{const m=ta(u,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new je(i);return new IT(o,c,s.fieldTransforms)}function s1(e,t,n,r,s,i){const o=e.Qu(1,t,n),c=[mh(t,r,n)],l=[s];if(i.length%2!=0)throw new et($.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(mh(t,i[m])),l.push(i[m+1]);const u=[],d=Ve.empty();for(let m=c.length-1;m>=0;--m)if(!RT(u,c[m])){const _=c[m];let S=l[m];S=Yt(S);const P=o.Nu(_);if(S instanceof dl)u.push(_);else{const O=ta(S,P);O!=null&&(u.push(_),d.set(_,O))}}const p=new je(u);return new IT(d,p,o.fieldTransforms)}function i1(e,t,n,r=!1){return ta(n,e.Qu(r?4:3,t))}function ta(e,t){if(ST(e=Yt(e)))return Wd("Unsupported field value:",t,e),bT(e,t);if(e instanceof $d)return function(r,s){if(!AT(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ta(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=se.fromDate(r);return{timestampValue:Ec(s.serializer,i)}}if(r instanceof se){const i=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ec(s.serializer,i)}}if(r instanceof Bd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ui)return{bytesValue:zE(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof jd)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ad(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ll(r)}`)}(e,t)}function bT(e,t){const n={};return IE(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_s(e,(r,s)=>{const i=ta(s,t.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ST(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof se||e instanceof Bd||e instanceof ui||e instanceof Le||e instanceof $d||e instanceof jd)}function Wd(e,t,n){if(!ST(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ll(n);throw r==="an object"?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}}function mh(e,t,n){if((t=Yt(t))instanceof hl)return t._internalPath;if(typeof t=="string")return Kd(e,t);throw Ic("Field path arguments must be of type string or ",e,!1,void 0,n)}const o1=new RegExp("[~\\*/\\[\\]]");function Kd(e,t,n){if(t.search(o1)>=0)throw Ic(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hl(...t.split("."))._internalPath}catch{throw Ic(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ic(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${t}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new et($.INVALID_ARGUMENT,c+e+l)}function RT(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new a1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Gd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class a1 extends CT{data(){return super.data()}}function Gd(e,t){return typeof t=="string"?Kd(e,t):t instanceof hl?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new et($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zd{}class l1 extends zd{}function u1(e,t,...n){let r=[];t instanceof zd&&r.push(t),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Yd).length,c=i.filter(l=>l instanceof fl).length;if(o>1||o>0&&c>0)throw new et($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class fl extends l1{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new fl(t,n,r)}_apply(t){const n=this._parse(t);return PT(t._query,n),new Ii(t.firestore,t.converter,sh(t._query,n))}_parse(t){const n=qd(t.firestore);return function(i,o,c,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new et($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ng(p,d);const _=[];for(const S of p)_.push(Og(l,i,S));m={arrayValue:{values:_}}}else m=Og(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ng(p,d),m=i1(c,o,p,d==="in"||d==="not-in");return Jt.create(u,d,m)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function h1(e,t,n){const r=t,s=Gd("where",e);return fl._create(s,r,n)}class Yd extends zd{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Yd(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)PT(o,l),o=sh(o,l)}(t._query,n),new Ii(t.firestore,t.converter,sh(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Og(e,t,n){if(typeof(n=Yt(n))=="string"){if(n==="")throw new et($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!DE(t)&&n.indexOf("/")!==-1)throw new et($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ut.fromString(n));if(!at.isDocumentKey(r))throw new et($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ym(e,new at(r))}if(n instanceof Le)return Ym(e,n._key);throw new et($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ll(n)}.`)}function Ng(e,t){if(!Array.isArray(e)||e.length===0)throw new et($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function PT(e,t){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new et($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new et($.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class d1{convertValue(t,n="none"){switch(cs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return zt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(as(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw dt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return _s(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>zt(o.doubleValue));return new jd(i)}convertGeoPoint(t){return new Bd(zt(t.latitude),zt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=vd(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Po(t));default:return null}}convertTimestamp(t){const n=Cr(t);return new se(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ut.fromString(t);Dt(tT(r));const s=new Oo(r.get(1),r.get(3)),i=new at(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class OT extends CT{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Gd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class za extends OT{data(t={}){return super.data(t)}}class p1{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new za(this._firestore,this._userDataWriter,r.key,r,new Xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new et($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new za(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new za(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:m1(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function m1(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return dt()}}class NT extends d1{constructor(t){super(),this.firestore=t}convertBytes(t){return new ui(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function g1(e,t,n,...r){e=Tr(e,Le);const s=Tr(e.firestore,li),i=qd(s);let o;return o=typeof(t=Yt(t))=="string"||t instanceof hl?s1(i,"updateDoc",e._key,t,n,r):r1(i,"updateDoc",e._key,t),Qd(s,[o.toMutation(e._key,cn.exists(!0))])}function _1(e){return Qd(Tr(e.firestore,li),[new bd(e._key,cn.none())])}function y1(e,t){const n=Tr(e.firestore,li),r=ph(e),s=f1(e.converter,t);return Qd(n,[n1(qd(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,cn.exists(!1))]).then(()=>r)}function v1(e,...t){var n,r,s;e=Yt(e);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||Pg(t[o])||(i=t[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Pg(t[o])){const p=t[o];t[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),t[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),t[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,d;if(e instanceof Le)u=Tr(e.firestore,li),d=Id(e._key.path),l={next:p=>{t[o]&&t[o](E1(u,e,p))},error:t[o+1],complete:t[o+2]};else{const p=Tr(e,Ii);u=Tr(p.firestore,li),d=p._query;const m=new NT(u);l={next:_=>{t[o]&&t[o](new p1(u,m,p,_))},error:t[o+1],complete:t[o+2]},c1(e._query)}return function(m,_,S,P){const O=new WL(P),x=new RL(_,O,S);return m.asyncQueue.enqueueAndForget(async()=>IL(await wg(m),x)),()=>{O.Za(),m.asyncQueue.enqueueAndForget(async()=>AL(await wg(m),x))}}(wT(u),d,c,l)}function Qd(e,t){return function(r,s){const i=new es;return r.asyncQueue.enqueueAndForget(async()=>ML(await zL(r),s,i)),i.promise}(wT(e),t)}function E1(e,t,n){const r=n.docs.get(t._key),s=new NT(e);return new OT(e,s,t._key,r,new Xi(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Ei=s})(_i),Rn(new un("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new li(new fk(r.getProvider("auth-internal")),new _k(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new et($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oo(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Xe(qm,"4.7.3",t),Xe(qm,"4.7.3","esm2017")})();const DT="@firebase/installations",Xd="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=1e4,VT=`w:${Xd}`,LT="FIS_v2",T1="https://firebaseinstallations.googleapis.com/v1",w1=60*60*1e3,I1="installations",A1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ls=new ps(I1,A1,b1);function xT(e){return e instanceof mn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT({projectId:e}){return`${T1}/projects/${e}/installations`}function FT(e){return{token:e.token,requestStatus:2,expiresIn:R1(e.expiresIn),creationTime:Date.now()}}async function UT(e,t){const r=(await t.json()).error;return ls.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $T({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function S1(e,{refreshToken:t}){const n=$T(e);return n.append("Authorization",C1(t)),n}async function BT(e){const t=await e();return t.status>=500&&t.status<600?e():t}function R1(e){return Number(e.replace("s","000"))}function C1(e){return`${LT} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=MT(e),s=$T(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:LT,appId:e.appId,sdkVersion:VT},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await BT(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:FT(u.authToken)}}else throw await UT("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=/^[cdef][\w-]{21}$/,gh="";function D1(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=k1(e);return N1.test(n)?n:gh}catch{return gh}}function k1(e){return O1(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new Map;function qT(e,t){const n=pl(e);WT(n,t),V1(n,t)}function WT(e,t){const n=HT.get(e);if(n)for(const r of n)r(t)}function V1(e,t){const n=L1();n&&n.postMessage({key:e,fid:t}),x1()}let zr=null;function L1(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=e=>{WT(e.data.key,e.data.fid)}),zr}function x1(){HT.size===0&&zr&&(zr.close(),zr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="firebase-installations-database",F1=1,us="firebase-installations-store";let vu=null;function Jd(){return vu||(vu=Dv(M1,F1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(us)}}})),vu}async function Ac(e,t){const n=pl(e),s=(await Jd()).transaction(us,"readwrite"),i=s.objectStore(us),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&qT(e,t.fid),t}async function KT(e){const t=pl(e),r=(await Jd()).transaction(us,"readwrite");await r.objectStore(us).delete(t),await r.done}async function ml(e,t){const n=pl(e),s=(await Jd()).transaction(us,"readwrite"),i=s.objectStore(us),o=await i.get(n),c=t(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&qT(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(e){let t;const n=await ml(e.appConfig,r=>{const s=U1(r),i=$1(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===gh?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function U1(e){const t=e||{fid:D1(),registrationStatus:0};return GT(t)}function $1(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ls.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=B1(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:j1(e)}:{installationEntry:t}}async function B1(e,t){try{const n=await P1(e,t);return Ac(e.appConfig,n)}catch(n){throw xT(n)&&n.customData.serverCode===409?await KT(e.appConfig):await Ac(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function j1(e){let t=await Dg(e.appConfig);for(;t.registrationStatus===1;)await jT(100),t=await Dg(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Zd(e);return r||n}return t}function Dg(e){return ml(e,t=>{if(!t)throw ls.create("installation-not-found");return GT(t)})}function GT(e){return H1(e)?{fid:e.fid,registrationStatus:0}:e}function H1(e){return e.registrationStatus===1&&e.registrationTime+kT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1({appConfig:e,heartbeatServiceProvider:t},n){const r=W1(e,n),s=S1(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:VT,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await BT(()=>fetch(r,c));if(l.ok){const u=await l.json();return FT(u)}else throw await UT("Generate Auth Token",l)}function W1(e,{fid:t}){return`${MT(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(e,t=!1){let n;const r=await ml(e.appConfig,i=>{if(!zT(i))throw ls.create("not-registered");const o=i.authToken;if(!t&&z1(o))return i;if(o.requestStatus===1)return n=K1(e,t),i;{if(!navigator.onLine)throw ls.create("app-offline");const c=Q1(i);return n=G1(e,c),c}});return n?await n:r.authToken}async function K1(e,t){let n=await kg(e.appConfig);for(;n.authToken.requestStatus===1;)await jT(100),n=await kg(e.appConfig);const r=n.authToken;return r.requestStatus===0?tf(e,t):r}function kg(e){return ml(e,t=>{if(!zT(t))throw ls.create("not-registered");const n=t.authToken;return X1(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function G1(e,t){try{const n=await q1(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ac(e.appConfig,r),n}catch(n){if(xT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await KT(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ac(e.appConfig,r)}throw n}}function zT(e){return e!==void 0&&e.registrationStatus===2}function z1(e){return e.requestStatus===2&&!Y1(e)}function Y1(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+w1}function Q1(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function X1(e){return e.requestStatus===1&&e.requestTime+kT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(e){const t=e,{installationEntry:n,registrationPromise:r}=await Zd(t);return r?r.catch(console.error):tf(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(e,t=!1){const n=e;return await tx(n),(await tf(n,t)).token}async function tx(e){const{registrationPromise:t}=await Zd(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(e){if(!e||!e.options)throw Eu("App Configuration");if(!e.name)throw Eu("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Eu(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Eu(e){return ls.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="installations",nx="installations-internal",rx=e=>{const t=e.getProvider("app").getImmediate(),n=ex(t),r=ms(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sx=e=>{const t=e.getProvider("app").getImmediate(),n=ms(t,YT).getImmediate();return{getId:()=>J1(n),getToken:s=>Z1(n,s)}};function ix(){Rn(new un(YT,rx,"PUBLIC")),Rn(new un(nx,sx,"PRIVATE"))}ix();Xe(DT,Xd);Xe(DT,Xd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="analytics",ox="firebase_id",ax="origin",cx=60*1e3,lx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ef="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new Yc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qe=new ps("analytics","Analytics",ux);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(e){if(!e.startsWith(ef)){const t=qe.create("invalid-gtag-resource",{gtagURL:e});return xe.warn(t.message),""}return e}function QT(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function dx(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function fx(e,t){const n=dx("firebase-js-sdk-policy",{createScriptURL:hx}),r=document.createElement("script"),s=`${ef}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function px(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function mx(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const l=(await QT(n)).find(u=>u.measurementId===s);l&&await t[l.appId]}}catch(c){xe.error(c)}e("config",s,i)}async function gx(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await QT(n);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&t[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){xe.error(i)}}function _x(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await gx(e,t,n,c,l)}else if(i==="config"){const[c,l]=o;await mx(e,t,n,r,c,l)}else if(i==="consent"){const[c,l]=o;e("consent",c,l)}else if(i==="get"){const[c,l,u]=o;e("get",c,l,u)}else if(i==="set"){const[c]=o;e("set",c)}else e(i,...o)}catch(c){xe.error(c)}}return s}function yx(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=_x(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function vx(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ef)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=30,Tx=1e3;class wx{constructor(t={},n=Tx){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const XT=new wx;function Ix(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ax(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Ix(r)},i=lx.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(c=l.error.message)}catch{}throw qe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function bx(e,t=XT,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw qe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw qe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Cx;return setTimeout(async()=>{c.abort()},n!==void 0?n:cx),JT({appId:r,apiKey:s,measurementId:i},o,c,t)}async function JT(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=XT){var i;const{appId:o,measurementId:c}=e;try{await Sx(r,t)}catch(l){if(c)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await Ax(e);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Rx(u)){if(s.deleteThrottleMetadata(o),c)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?pm(n,s.intervalMillis,Ex):pm(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),xe.debug(`Calling attemptFetch again in ${d} millis`),JT(e,p,r,s)}}function Sx(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(qe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Rx(e){if(!(e instanceof mn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Cx{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Px(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(){if(Cv())try{await Pv()}catch(e){return xe.warn(qe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return xe.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Nx(e,t,n,r,s,i,o){var c;const l=bx(e);l.then(_=>{n[_.measurementId]=_.appId,e.options.measurementId&&_.measurementId!==e.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>xe.error(_)),t.push(l);const u=Ox().then(_=>{if(_)return r.getId()}),[d,p]=await Promise.all([l,u]);vx(i)||fx(i,d.measurementId),s("js",new Date);const m=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return m[ax]="firebase",m.update=!0,p!=null&&(m[ox]=p),s("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(t){this.app=t}_delete(){return delete mo[this.app.options.appId],Promise.resolve()}}let mo={},Vg=[];const Lg={};let Tu="dataLayer",kx="gtag",xg,ZT,Mg=!1;function Vx(){const e=[];if(Rv()&&e.push("This is a browser extension environment."),kP()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=qe.create("invalid-analytics-context",{errorInfo:t});xe.warn(n.message)}}function Lx(e,t,n){Vx();const r=e.options.appId;if(!r)throw qe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qe.create("no-api-key");if(mo[r]!=null)throw qe.create("already-exists",{id:r});if(!Mg){px(Tu);const{wrappedGtag:i,gtagCore:o}=yx(mo,Vg,Lg,Tu,kx);ZT=i,xg=o,Mg=!0}return mo[r]=Nx(e,Vg,Lg,t,xg,Tu,n),new Dx(e)}function xx(e=od()){e=Yt(e);const t=ms(e,bc);return t.isInitialized()?t.getImmediate():Mx(e)}function Mx(e,t={}){const n=ms(e,bc);if(n.isInitialized()){const s=n.getImmediate();if(Ao(t,n.getOptions()))return s;throw qe.create("already-initialized")}return n.initialize({options:t})}function Fx(e,t,n,r){e=Yt(e),Px(ZT,mo[e.app.options.appId],t,n,r).catch(s=>xe.error(s))}const Fg="@firebase/analytics",Ug="0.10.8";function Ux(){Rn(new un(bc,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Lx(r,s,n)},"PUBLIC")),Rn(new un("analytics-internal",e,"PRIVATE")),Xe(Fg,Ug),Xe(Fg,Ug,"esm2017");function e(t){try{const n=t.getProvider(bc).getImmediate();return{logEvent:(r,s,i)=>Fx(n,r,s,i)}}catch(n){throw qe.create("interop-component-reg-failed",{reason:n})}}}Ux();const $x={apiKey:"AIzaSyBzBenh-fOk1t2uvHYOpIkP9JN2L7BgoLA",authDomain:"project-manager-67a0e.firebaseapp.com",projectId:"project-manager-67a0e",storageBucket:"project-manager-67a0e.appspot.com",messagingSenderId:"195791382898",appId:"1:195791382898:web:f675f575b77c3fbc70d5eb",measurementId:"G-ZCG37M9TY8"},nf=kv($x),Gs=lk(nf),Da=XL(nf);xx(nf);const tw=Ev("auth",()=>{const e=Jr(Gs.currentUser);return{user:e,login:async(r,s)=>{const i=await zN(Gs,r,s);e.value=i.user},logout:async()=>{await JN(Gs),e.value=null}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const xs=typeof document<"u";function ew(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Bx(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ew(e.default)}const Pt=Object.assign;function wu(e,t){const n={};for(const r in t){const s=t[r];n[r]=fn(s)?s.map(e):e(s)}return n}const go=()=>{},fn=Array.isArray;function $g(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const nw=/#/g,jx=/&/g,Hx=/\//g,qx=/=/g,Wx=/\?/g,rw=/\+/g,Kx=/%5B/g,Gx=/%5D/g,sw=/%5E/g,zx=/%60/g,iw=/%7B/g,Yx=/%7C/g,ow=/%7D/g,Qx=/%20/g;function rf(e){return e==null?"":encodeURI(""+e).replace(Yx,"|").replace(Kx,"[").replace(Gx,"]")}function Xx(e){return rf(e).replace(iw,"{").replace(ow,"}").replace(sw,"^")}function _h(e){return rf(e).replace(rw,"%2B").replace(Qx,"+").replace(nw,"%23").replace(jx,"%26").replace(zx,"`").replace(iw,"{").replace(ow,"}").replace(sw,"^")}function Jx(e){return _h(e).replace(qx,"%3D")}function Zx(e){return rf(e).replace(nw,"%23").replace(Wx,"%3F")}function tM(e){return Zx(e).replace(Hx,"%2F")}function Vo(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const eM=/\/$/,nM=e=>e.replace(eM,"");function Iu(e,t,n="/"){let r,s={},i="",o="";const c=t.indexOf("#");let l=t.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=t.slice(0,l),i=t.slice(l,c>0?c:t.length),s=e(i.slice(1))),c>=0&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=oM(r??t,n),{fullPath:r+i+o,path:r,query:s,hash:Vo(o)}}function rM(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Bg(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function sM(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hi(t.matched[r],n.matched[s])&&aw(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function hi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function aw(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!iM(e[n],t[n]))return!1;return!0}function iM(e,t){return fn(e)?jg(e,t):fn(t)?jg(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function jg(e,t){return fn(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function oM(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let yh=function(e){return e.pop="pop",e.push="push",e}({}),Au=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function aM(e){if(!e)if(xs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nM(e)}const cM=/^[^#]+#/;function lM(e,t){return e.replace(cM,"#")+t}function uM(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const gl=()=>({left:window.scrollX,top:window.scrollY});function hM(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=uM(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Hg(e,t){return(history.state?history.state.position-t:-1)+e}const vh=new Map;function dM(e,t){vh.set(e,t)}function fM(e){const t=vh.get(e);return vh.delete(e),t}function pM(e){return typeof e=="string"||e&&typeof e=="object"}function cw(e){return typeof e=="string"||typeof e=="symbol"}let Wt=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const lw=Symbol("");Wt.MATCHER_NOT_FOUND+"",Wt.NAVIGATION_GUARD_REDIRECT+"",Wt.NAVIGATION_ABORTED+"",Wt.NAVIGATION_CANCELLED+"",Wt.NAVIGATION_DUPLICATED+"";function di(e,t){return Pt(new Error,{type:e,[lw]:!0},t)}function Dn(e,t){return e instanceof Error&&lw in e&&(t==null||!!(e.type&t))}const mM=["params","query","hash"];function gM(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of mM)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function _M(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(rw," "),i=s.indexOf("="),o=Vo(i<0?s:s.slice(0,i)),c=i<0?null:Vo(s.slice(i+1));if(o in t){let l=t[o];fn(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function qg(e){let t="";for(let n in e){const r=e[n];if(n=Jx(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(fn(r)?r.map(s=>s&&_h(s)):[r&&_h(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function yM(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=fn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const vM=Symbol(""),Wg=Symbol(""),_l=Symbol(""),uw=Symbol(""),Eh=Symbol("");function ji(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ur(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(di(Wt.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):pM(m)?l(di(Wt.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>e.call(r&&r.instances[s],t,n,u));let p=Promise.resolve(d);e.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function bu(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const c in o.components){let l=o.components[c];if(!(t!=="beforeRouteEnter"&&!o.instances[c]))if(ew(l)){const u=(l.__vccOpts||l)[t];u&&i.push(ur(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=Bx(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const m=(p.__vccOpts||p)[t];return m&&ur(m,n,r,o,c,s)()}))}}return i}function EM(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const c=t.matched[o];c&&(e.matched.find(u=>hi(u,c))?r.push(c):n.push(c));const l=e.matched[o];l&&(t.matched.find(u=>hi(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let TM=()=>location.protocol+"//"+location.host;function hw(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let o=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Bg(c,"")}return Bg(n,e)+r+s}function wM(e,t,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=hw(e,location),S=n.value,P=t.value;let O=0;if(m){if(n.value=_,t.value=m,o&&o===S){o=null;return}O=P?m.position-P.position:0}else r(_);s.forEach(x=>{x(n.value,S,{delta:O,type:yh.pop,direction:O?O>0?Au.forward:Au.back:Au.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Pt({},m.state,{scroll:gl()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:u,destroy:p}}function Kg(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?gl():null}}function IM(e){const{history:t,location:n}=window,r={value:hw(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:TM()+e+l;try{t[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,u){i(l,Pt({},t.state,Kg(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const d=Pt({},s.value,t.state,{forward:l,scroll:gl()});i(d.current,d,!0),i(l,Pt({},Kg(r.value,l,null),{position:d.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function AM(e){e=aM(e);const t=IM(e),n=wM(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pt({location:"",base:e,go:r,createHref:lM.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Yr=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var ne=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(ne||{});const bM={type:Yr.Static,value:""},SM=/[a-zA-Z0-9_]/;function RM(e){if(!e)return[[]];if(e==="/")return[[bM]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=ne.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===ne.Static?i.push({type:Yr.Static,value:u}):n===ne.Param||n===ne.ParamRegExp||n===ne.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Yr.Param,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<e.length;){if(l=e[c++],l==="\\"&&n!==ne.ParamRegExp){r=n,n=ne.EscapeNext;continue}switch(n){case ne.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=ne.Param):m();break;case ne.EscapeNext:m(),n=r;break;case ne.Param:l==="("?n=ne.ParamRegExp:SM.test(l)?m():(p(),n=ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case ne.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=ne.ParamRegExpEnd:d+=l;break;case ne.ParamRegExpEnd:p(),n=ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:t("Unknown state");break}}return n===ne.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Gg="[^/]+?",CM={sensitive:!1,strict:!1,start:!0,end:!0};var Ce=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Ce||{});const PM=/[.+*?^${}()[\]/\\]/g;function OM(e,t){const n=Pt({},CM,t),r=[];let s=n.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[Ce.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=Ce.Segment+(n.sensitive?Ce.BonusCaseSensitive:0);if(m.type===Yr.Static)p||(s+="/"),s+=m.value.replace(PM,"\\$&"),_+=Ce.Static;else if(m.type===Yr.Param){const{value:S,repeatable:P,optional:O,regexp:x}=m;i.push({name:S,repeatable:P,optional:O});const M=x||Gg;if(M!==Gg){_+=Ce.BonusCustomRegExp;try{`${M}`}catch(L){throw new Error(`Invalid custom RegExp for param "${S}" (${M}): `+L.message)}}let U=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(U=O&&u.length<2?`(?:/${U})`:"/"+U),O&&(U+="?"),s+=U,_+=Ce.Dynamic,O&&(_+=Ce.BonusOptional),P&&(_+=Ce.BonusRepeatable),M===".*"&&(_+=Ce.BonusWildcard)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Ce.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===Yr.Static)d+=_.value;else if(_.type===Yr.Param){const{value:S,repeatable:P,optional:O}=_,x=S in u?u[S]:"";if(fn(x)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const M=fn(x)?x.join("/"):x;if(!M)if(O)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function NM(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Ce.Static+Ce.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ce.Static+Ce.Segment?1:-1:0}function dw(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=NM(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zg(r))return 1;if(zg(s))return-1}return s.length-r.length}function zg(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const DM={strict:!1,end:!0,sensitive:!1};function kM(e,t,n){const r=OM(RM(e.path),n),s=Pt(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function VM(e,t){const n=[],r=new Map;t=$g(DM,t);function s(p){return r.get(p)}function i(p,m,_){const S=!_,P=Qg(p);P.aliasOf=_&&_.record;const O=$g(t,p),x=[P];if("alias"in p){const L=typeof p.alias=="string"?[p.alias]:p.alias;for(const z of L)x.push(Qg(Pt({},P,{components:_?_.record.components:P.components,path:z,aliasOf:_?_.record:P})))}let M,U;for(const L of x){const{path:z}=L;if(m&&z[0]!=="/"){const Z=m.record.path,A=Z[Z.length-1]==="/"?"":"/";L.path=m.record.path+(z&&A+z)}if(M=kM(L,m,O),_?_.alias.push(M):(U=U||M,U!==M&&U.alias.push(M),S&&p.name&&!Xg(M)&&o(p.name)),fw(M)&&l(M),P.children){const Z=P.children;for(let A=0;A<Z.length;A++)i(Z[A],M,_&&_.children[A])}_=_||M}return U?()=>{o(U)}:go}function o(p){if(cw(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=MM(p,n);n.splice(m,0,p),p.record.name&&!Xg(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},P,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw di(Wt.MATCHER_NOT_FOUND,{location:p});O=_.record.name,S=Pt(Yg(m.params,_.keys.filter(U=>!U.optional).concat(_.parent?_.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&Yg(p.params,_.keys.map(U=>U.name))),P=_.stringify(S)}else if(p.path!=null)P=p.path,_=n.find(U=>U.re.test(P)),_&&(S=_.parse(P),O=_.record.name);else{if(_=m.name?r.get(m.name):n.find(U=>U.re.test(m.path)),!_)throw di(Wt.MATCHER_NOT_FOUND,{location:p,currentLocation:m});O=_.record.name,S=Pt({},m.params,p.params),P=_.stringify(S)}const x=[];let M=_;for(;M;)x.unshift(M.record),M=M.parent;return{name:O,path:P,params:S,matched:x,meta:xM(x)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Yg(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Qg(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:LM(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function LM(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Xg(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xM(e){return e.reduce((t,n)=>Pt(t,n.meta),{})}function MM(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;dw(e,t[i])<0?r=i:n=i+1}const s=FM(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function FM(e){let t=e;for(;t=t.parent;)if(fw(t)&&dw(e,t)===0)return t}function fw({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Jg(e){const t=an(_l),n=an(uw),r=ke(()=>{const l=Ye(e.to);return t.resolve(l)}),s=ke(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(hi.bind(null,d));if(m>-1)return m;const _=Zg(l[u-2]);return u>1&&Zg(d)===_&&p[p.length-1].path!==_?p.findIndex(hi.bind(null,l[u-2])):m}),i=ke(()=>s.value>-1&&HM(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&aw(n.params,r.value.params));function c(l={}){if(jM(l)){const u=t[Ye(e.replace)?"replace":"push"](Ye(e.to)).catch(go);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function UM(e){return e.length===1?e[0]:e}const $M=$y({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Jg,setup(e,{slots:t}){const n=$o(Jg(e)),{options:r}=an(_l),s=ke(()=>({[t_(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[t_(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&UM(t.default(n));return e.custom?i:Io("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),BM=$M;function jM(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function HM(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!fn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Zg(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const t_=(e,t,n)=>e??t??n,qM=$y({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=an(Eh),s=ke(()=>e.route||r.value),i=an(Wg,0),o=ke(()=>{let u=Ye(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=ke(()=>s.value.matched[o.value]);Ma(Wg,ke(()=>o.value+1)),Ma(vM,c),Ma(Eh,s);const l=Jr();return ro(()=>[l.value,c.value,e.name],([u,d,p],[m,_,S])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!hi(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=e.name,p=c.value,m=p&&p.components[d];if(!m)return e_(n.default,{Component:m,route:u});const _=p.props[d],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=Io(m,Pt({},S,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return e_(n.default,{Component:O,route:u})||O}}});function e_(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const WM=qM;function KM(e){const t=VM(e.routes,e),n=e.parseQuery||_M,r=e.stringifyQuery||qg,s=e.history,i=ji(),o=ji(),c=ji(),l=fR(ir);let u=ir;xs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=wu.bind(null,k=>""+k),p=wu.bind(null,tM),m=wu.bind(null,Vo);function _(k,J){let Q,rt;return cw(k)?(Q=t.getRecordMatcher(k),rt=J):rt=k,t.addRoute(rt,Q)}function S(k){const J=t.getRecordMatcher(k);J&&t.removeRoute(J)}function P(){return t.getRoutes().map(k=>k.record)}function O(k){return!!t.getRecordMatcher(k)}function x(k,J){if(J=Pt({},J||l.value),typeof k=="string"){const I=Iu(n,k,J.path),N=t.resolve({path:I.path},J),F=s.createHref(I.fullPath);return Pt(I,N,{params:m(N.params),hash:Vo(I.hash),redirectedFrom:void 0,href:F})}let Q;if(k.path!=null)Q=Pt({},k,{path:Iu(n,k.path,J.path).path});else{const I=Pt({},k.params);for(const N in I)I[N]==null&&delete I[N];Q=Pt({},k,{params:p(I)}),J.params=p(J.params)}const rt=t.resolve(Q,J),ht=k.hash||"";rt.params=d(m(rt.params));const Ct=rM(r,Pt({},k,{hash:Xx(ht),path:rt.path})),v=s.createHref(Ct);return Pt({fullPath:Ct,hash:ht,query:r===qg?yM(k.query):k.query||{}},rt,{redirectedFrom:void 0,href:v})}function M(k){return typeof k=="string"?Iu(n,k,l.value.path):Pt({},k)}function U(k,J){if(u!==k)return di(Wt.NAVIGATION_CANCELLED,{from:J,to:k})}function L(k){return A(k)}function z(k){return L(Pt(M(k),{replace:!0}))}function Z(k,J){const Q=k.matched[k.matched.length-1];if(Q&&Q.redirect){const{redirect:rt}=Q;let ht=typeof rt=="function"?rt(k,J):rt;return typeof ht=="string"&&(ht=ht.includes("?")||ht.includes("#")?ht=M(ht):{path:ht},ht.params={}),Pt({query:k.query,hash:k.hash,params:ht.path!=null?{}:k.params},ht)}}function A(k,J){const Q=u=x(k),rt=l.value,ht=k.state,Ct=k.force,v=k.replace===!0,I=Z(Q,rt);if(I)return A(Pt(M(I),{state:typeof I=="object"?Pt({},ht,I.state):ht,force:Ct,replace:v}),J||Q);const N=Q;N.redirectedFrom=J;let F;return!Ct&&sM(r,rt,Q)&&(F=di(Wt.NAVIGATION_DUPLICATED,{to:N,from:rt}),me(rt,rt,!0,!1)),(F?Promise.resolve(F):w(N,rt)).catch(V=>Dn(V)?Dn(V,Wt.NAVIGATION_GUARD_REDIRECT)?V:pe(V):yt(V,N,rt)).then(V=>{if(V){if(Dn(V,Wt.NAVIGATION_GUARD_REDIRECT))return A(Pt({replace:v},M(V.to),{state:typeof V.to=="object"?Pt({},ht,V.to.state):ht,force:Ct}),J||N)}else V=R(N,rt,!0,v,ht);return b(N,rt,V),V})}function y(k,J){const Q=U(k,J);return Q?Promise.reject(Q):Promise.resolve()}function E(k){const J=be.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(k):k()}function w(k,J){let Q;const[rt,ht,Ct]=EM(k,J);Q=bu(rt.reverse(),"beforeRouteLeave",k,J);for(const I of rt)I.leaveGuards.forEach(N=>{Q.push(ur(N,k,J))});const v=y.bind(null,k,J);return Q.push(v),Qt(Q).then(()=>{Q=[];for(const I of i.list())Q.push(ur(I,k,J));return Q.push(v),Qt(Q)}).then(()=>{Q=bu(ht,"beforeRouteUpdate",k,J);for(const I of ht)I.updateGuards.forEach(N=>{Q.push(ur(N,k,J))});return Q.push(v),Qt(Q)}).then(()=>{Q=[];for(const I of Ct)if(I.beforeEnter)if(fn(I.beforeEnter))for(const N of I.beforeEnter)Q.push(ur(N,k,J));else Q.push(ur(I.beforeEnter,k,J));return Q.push(v),Qt(Q)}).then(()=>(k.matched.forEach(I=>I.enterCallbacks={}),Q=bu(Ct,"beforeRouteEnter",k,J,E),Q.push(v),Qt(Q))).then(()=>{Q=[];for(const I of o.list())Q.push(ur(I,k,J));return Q.push(v),Qt(Q)}).catch(I=>Dn(I,Wt.NAVIGATION_CANCELLED)?I:Promise.reject(I))}function b(k,J,Q){c.list().forEach(rt=>E(()=>rt(k,J,Q)))}function R(k,J,Q,rt,ht){const Ct=U(k,J);if(Ct)return Ct;const v=J===ir,I=xs?history.state:{};Q&&(rt||v?s.replace(k.fullPath,Pt({scroll:v&&I&&I.scroll},ht)):s.push(k.fullPath,ht)),l.value=k,me(k,J,Q,v),pe()}let T;function Mt(){T||(T=s.listen((k,J,Q)=>{if(!Ht.listening)return;const rt=x(k),ht=Z(rt,Ht.currentRoute.value);if(ht){A(Pt(ht,{replace:!0,force:!0}),rt).catch(go);return}u=rt;const Ct=l.value;xs&&dM(Hg(Ct.fullPath,Q.delta),gl()),w(rt,Ct).catch(v=>Dn(v,Wt.NAVIGATION_ABORTED|Wt.NAVIGATION_CANCELLED)?v:Dn(v,Wt.NAVIGATION_GUARD_REDIRECT)?(A(Pt(M(v.to),{force:!0}),rt).then(I=>{Dn(I,Wt.NAVIGATION_ABORTED|Wt.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===yh.pop&&s.go(-1,!1)}).catch(go),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),yt(v,rt,Ct))).then(v=>{v=v||R(rt,Ct,!1),v&&(Q.delta&&!Dn(v,Wt.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===yh.pop&&Dn(v,Wt.NAVIGATION_ABORTED|Wt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(rt,Ct,v)}).catch(go)}))}let jt=ji(),vt=ji(),st;function yt(k,J,Q){pe(k);const rt=vt.list();return rt.length?rt.forEach(ht=>ht(k,J,Q)):console.error(k),Promise.reject(k)}function Gt(){return st&&l.value!==ir?Promise.resolve():new Promise((k,J)=>{jt.add([k,J])})}function pe(k){return st||(st=!k,Mt(),jt.list().forEach(([J,Q])=>k?Q(k):J()),jt.reset()),k}function me(k,J,Q,rt){const{scrollBehavior:ht}=e;if(!xs||!ht)return Promise.resolve();const Ct=!Q&&fM(Hg(k.fullPath,0))||(rt||!Q)&&history.state&&history.state.scroll||null;return Jh().then(()=>ht(k,J,Ct)).then(v=>v&&hM(v)).catch(v=>yt(v,k,J))}const Nt=k=>s.go(k);let kt;const be=new Set,Ht={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:t.clearRoutes,hasRoute:O,getRoutes:P,resolve:x,options:e,push:L,replace:z,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:vt.add,isReady:Gt,install(k){k.component("RouterLink",BM),k.component("RouterView",WM),k.config.globalProperties.$router=Ht,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Ye(l)}),xs&&!kt&&l.value===ir&&(kt=!0,L(s.location).catch(rt=>{}));const J={};for(const rt in ir)Object.defineProperty(J,rt,{get:()=>l.value[rt],enumerable:!0});k.provide(_l,Ht),k.provide(uw,Oy(J)),k.provide(Eh,l);const Q=k.unmount;be.add(k),k.unmount=function(){be.delete(k),be.size<1&&(u=ir,T&&T(),T=null,l.value=ir,kt=!1,st=!1),Q()}}};function Qt(k){return k.reduce((J,Q)=>J.then(()=>E(Q)),Promise.resolve())}return Ht}function GM(){return an(_l)}const zM=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},YM={class:"navbar"},QM={key:0},XM={__name:"AppNavbar",setup(e){const t=tw(),n=GM(),r=ke(()=>Gs.currentUser),s=async()=>{await t.logout(),n.push("/login")};return(i,o)=>(mr(),Kr("nav",YM,[o[0]||(o[0]=Et("h3",null,"TaskFlow",-1)),r.value?(mr(),Kr("div",QM,[Et("span",null,Fs(r.value.email),1),Et("button",{onClick:s},"Déconnexion")])):hv("",!0)]))}},JM=zM(XM,[["__scopeId","data-v-c1020cbc"]]),ZM={class:"min-h-screen bg-gray-100"},tF={class:"p-4"},eF={__name:"app",setup(e){return(t,n)=>{const r=WR("router-view");return mr(),Kr("div",ZM,[re(JM),Et("main",tF,[re(r)])])}}},nF=Ev("project",{state:()=>({projects:[]}),actions:{fetchProjects(){const e="TEST_USER_123",t=u1(Rg(Da,"projets"),h1("userId","==",e));v1(t,n=>{console.log(n.docs.map(r=>r.data())),this.projects=n.docs.map(r=>({id:r.id,...r.data()}))})},async addProject(e){const t=tw();await y1(Rg(Da,"projets"),{...e,userId:t.user.uid,createdAt:new Date})},async updateProject(e,t){await g1(ph(Da,"projets",e),t)},async deleteProject(e){await _1(ph(Da,"projets",e))}}});/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rF=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),sF=e=>{const t=rF(e);return t.charAt(0).toUpperCase()+t.slice(1)},iF=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),r_=e=>e==="";/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oF=({name:e,iconNode:t,absoluteStrokeWidth:n,"absolute-stroke-width":r,strokeWidth:s,"stroke-width":i,size:o=Hi.width,color:c=Hi.stroke,...l},{slots:u})=>Io("svg",{...Hi,...l,width:o,height:o,stroke:c,"stroke-width":r_(n)||r_(r)||n===!0||r===!0?Number(s||i||Hi["stroke-width"])*24/Number(o):s||i||Hi["stroke-width"],class:iF("lucide",l.class,...e?[`lucide-${n_(sF(e))}-icon`,`lucide-${n_(e)}`]:["lucide-icon"])},[...t.map(d=>Io(...d)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=(e,t)=>(n,{slots:r,attrs:s})=>Io(oF,{...s,...n,iconNode:t,name:e},r);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aF=yl("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cF=yl("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lF=yl("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-vue-next v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uF=yl("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]),hF={class:"container py-5"},dF={class:"d-flex justify-content-between align-items-center mb-5"},fF={class:"row g-4"},pF={class:"card h-100 shadow-sm border-0"},mF={class:"card-body d-flex flex-column p-4"},gF={class:"card-title fw-bold mb-2 text-dark"},_F={class:"card-text text-muted mb-4"},yF={class:"mt-auto"},vF={class:"text-muted small mb-3 border-top pt-3"},EF={class:"d-flex gap-3"},TF=["onClick"],wF=["onClick"],IF=["onClick"],AF={class:"modal-dialog"},bF={class:"modal-content"},SF={class:"modal-header"},RF={class:"modal-title"},CF={class:"modal-body"},PF={class:"mb-3"},OF={class:"mb-3"},NF={__name:"DashboardView",setup(e){const t=nF(),n=Jr(null);let r=null;const s=Jr({name:"",description:""}),i=Jr(!1);qy(()=>{t.fetchProjects(),r=new ss(n.value)});const o=ke(()=>i.value?"Modifier le projet":"Nouveau projet"),c=m=>{console.log("Ouvrir projet",m)},l=()=>{i.value=!1,s.value={name:"",description:""},r.show()},u=m=>{i.value=!0,s.value={...m},r.show()},d=async()=>{i.value?await t.updateProject(s.value.id,{name:s.value.name,description:s.value.description}):await t.addProject({name:s.value.name,description:s.value.description}),r.hide()},p=async m=>{confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")&&await t.deleteProject(m)};return(m,_)=>(mr(),Kr("div",hF,[Et("div",dF,[_[3]||(_[3]=Et("h1",{class:"display-5 fw-bold text-dark m-0"},"Mes projets",-1)),Et("button",{class:"btn btn-primary d-flex align-items-center gap-2",onClick:l},[re(Ye(cF),{size:"20"}),_[2]||(_[2]=uv(" Nouveau projet ",-1))])]),Et("div",fF,[(mr(!0),Kr(rn,null,zR(Ye(t).projects,S=>(mr(),Kr("div",{key:S.id,class:"col-12 col-md-6 col-lg-4"},[Et("div",pF,[Et("div",mF,[Et("h5",gF,Fs(S.name),1),Et("p",_F,Fs(S.description),1),Et("div",yF,[Et("p",vF," Créé le : "+Fs(S.createdAt?new Date(S.createdAt.seconds*1e3).toLocaleDateString():"Récemment"),1),Et("div",EF,[Et("button",{class:"btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px"},onClick:P=>c(S.id),title:"Voir"},[re(Ye(aF),{size:"20"})],8,TF),Et("button",{class:"btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px"},onClick:P=>u(S),title:"Modifier"},[re(Ye(lF),{size:"20"})],8,wF),Et("button",{class:"btn btn-outline-danger rounded-circle p-2 ms-auto d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px"},onClick:P=>p(S.id),title:"Supprimer"},[re(Ye(uF),{size:"20"})],8,IF)])])])])]))),128))]),Et("div",{class:"modal fade",id:"editModal",tabindex:"-1","aria-hidden":"true",ref_key:"editModalRef",ref:n},[Et("div",AF,[Et("div",bF,[Et("div",SF,[Et("h5",RF,Fs(o.value),1),_[4]||(_[4]=Et("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1))]),Et("div",CF,[s.value?(mr(),Kr("form",{key:0,onSubmit:sP(d,["prevent"])},[Et("div",PF,[_[5]||(_[5]=Et("label",{for:"projectName",class:"form-label"},"Nom du projet",-1)),xp(Et("input",{type:"text",class:"form-control",id:"projectName","onUpdate:modelValue":_[0]||(_[0]=S=>s.value.name=S),required:""},null,512),[[lm,s.value.name]])]),Et("div",OF,[_[6]||(_[6]=Et("label",{for:"projectDesc",class:"form-label"},"Description",-1)),xp(Et("textarea",{class:"form-control",id:"projectDesc","onUpdate:modelValue":_[1]||(_[1]=S=>s.value.description=S),rows:"3"},null,512),[[lm,s.value.description]])]),_[7]||(_[7]=Et("div",{class:"d-flex justify-content-end gap-2"},[Et("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Annuler"),Et("button",{type:"submit",class:"btn btn-primary"},"Enregistrer")],-1))],32)):hv("",!0)])])])],512)]))}},pw=KM({history:AM("/"),routes:[{path:"/",redirect:"/login"},{path:"/dashboard",name:"Dashboard",component:NF}]});pw.beforeEach((e,t,n)=>{const r=e.matched.some(i=>i.meta.requiresAuth),s=Gs.currentUser;r&&!s?n("/login"):!r&&s&&e.path==="/login"?n("/dashboard"):n()});let qi;XN(Gs,()=>{qi||(qi=aP(eF),qi.use(hP()),qi.use(pw),qi.mount("#app"))});
