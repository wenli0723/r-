window.googletag&&typeof googletag._=='function'&&googletag._(function(_){var Dt=function(a,b){return _.aa[a]=b},Et=function(a){var b=a._html_,c=b;if(_.v(b)){for(var d=/v[uv]\(\s*["']([^)]+?)["']\s*\);?/g,e;null!==(e=d.exec(b));){var f=e[1];!f||-1==f.indexOf("/adview")&&-1==f.indexOf("/pcs/view")||(f=f.replace(/\\x([a-f0-9]{2})/ig,function(a,b){return String.fromCharCode((0,window.parseInt)(b,16))}),c=c.replace(e[0],""),_.be(window,f,void 0))}a._html_=c}},Ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Gt=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ft.length;f++)c=Ft[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},Ht={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},It=function(a,b){_.Kb(b,function(b,d){b&&b.jb&&(b=b.Qa());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ht.hasOwnProperty(d)?a.setAttribute(Ht[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Jt=function(a){if(a&&"number"==typeof a.length){if(_.Ja(a))return"function"==typeof a.item||"string"==typeof a.item;if(_.Ia(a))return"function"==typeof a.item}return!1},Kt=function(a,b,c){function d(c){c&&b.appendChild(_.v(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!_.Ha(f)||_.Ja(f)&&0<f.nodeType?d(f):_.A(Jt(f)?_.Ab(f):f,d)}};_.ud.prototype.l=Dt(6,function(a,b,c){var d=this.j,e=arguments,f=String(e[0]),g=e[1];if(!_.pd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',_.fb(g.name),'"');if(g.type){f.push(' type="',_.fb(g.type),'"');var h={};Gt(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=d.createElement(f);g&&(_.v(g)?f.className=g:_.x(g)?f.className=g.join(" "):It(f,g));2<e.length&&Kt(d,f,e);return f});var Lt={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Mt={"'":"\\'"},Nt=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=c+1,g;if(!(g=Lt[d])){if(!(31<e&&127>e))if(d in Mt)d=Mt[d];else if(d in Lt)d=Mt[d]=Lt[d];else{g=d.charCodeAt(0);if(31<g&&127>g)e=d;else{if(256>g){if(e="\\x",16>g||256<g)e+="0"}else e="\\u",4096>g&&(e+="0");e+=g.toString(16).toUpperCase()}d=Mt[d]=e}g=d}b[f]=g}b.push('"');return b.join("")},Ot=function(){var a=["allow-top-navigation","allow-modals","allow-orientation-lock","allow-presentation"];return _.ha("allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation".split(" "),function(b){return!_.vb(a,b)}).join(" ")},Pt=function(a){"number"==typeof a&&(a=Math.round(a)+"px");return a},Qt=function(a,b){var c=a.ampInaboxIframes=a.ampInaboxIframes||[];b&&c.push(b);a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];c.google_amp_listener_added||(c.google_amp_listener_added=!0,_.D(a,"message",function(b){var c;a.ampInaboxPendingMessages&&(c=/^amp-(\d{15,20})?/.exec(b.data))&&(a.ampInaboxPendingMessages.push(b),a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||_.fd(a.document,"https://cdn.ampproject.org/"+(c[1]?"rtv/"+c[1]+"/":"")+"amp4ads-host-v0.js"))}))},Rt=function(a,b){return _.be(window,a,b)},St=function(){this.l=this.l;this.m=this.m};St.prototype.l=!1;St.prototype.v=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Tt=function(){},Ut={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Vt=function(a,b){b.push('"',a.replace(_.oe,function(a){var b=Ut[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ut[a]=b);return b}),'"')},Wt=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(_.x(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Wt(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Vt(d,c),c.push(":"),Wt(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Vt(b,c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Xt=function(a){var b=[];Wt(new Tt,a,b);return b.join("")},Yt=function(a){this.j=a;this.l=_.lb()},Zt=function(a){var b={};_.A(a,function(a){b[a.j]=a.l});return b},$t=function(a){var b={};b.c=a.C;b.i=a.A;a.I&&(b.e=a.I);a.o.postMessage(Xt(b),a.D)},au=function(a,b,c,d,e,f){St.call(this);this.C=a;this.status=1;this.o=b;this.D=c;this.M=d;this.Ha=!!e;this.A=Math.random();this.F={};this.j=null;this.H=(0,_.z)(this.L,this);this.I=f};_.Ra(au,St);au.prototype.L=function(a){if(a.origin===this.D&&(this.Ha||a.source==this.o)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(_.Ja(b)&&(a=b.i,b.c===this.C&&a!=this.A&&(2!==this.status&&(this.status=2,$t(this),this.j&&(this.j(),this.j=null)),a=b.s,b=b.p,_.v(a)&&(_.v(b)||_.Ja(b))&&this.F.hasOwnProperty(a))))this.F[a](b)}};au.prototype.K=function(){if(1===this.status){try{this.o.postMessage&&$t(this)}catch(a){}window.setTimeout((0,_.z)(this.K,this),50)}};au.prototype.connect=function(a){a&&(this.j=a);_.D(window,"message",this.H);this.M&&this.K()};au.prototype.v=function(){this.status=3;_.Ud(window,"message",this.H);au.Xb.v.call(this)};var bu=function(a,b,c){a.F[b]=c},cu=function(a,b,c){var d={};d.c=a.C;d.i=a.A;d.s=b;d.p=c;a.o.postMessage(Xt(d),a.D)},du=function(a){return Xt({windowCoords_t:a.m.top,windowCoords_r:a.m.right,windowCoords_b:a.m.bottom,windowCoords_l:a.m.left,frameCoords_t:a.l.top,frameCoords_r:a.l.right,frameCoords_b:a.l.bottom,frameCoords_l:a.l.left,styleZIndex:a.o,allowedExpansion_t:a.j.top,allowedExpansion_r:a.j.right,allowedExpansion_b:a.j.bottom,allowedExpansion_l:a.j.left,xInView:a.v,yInView:a.A})},eu=function(a){this.m=a;this.v=null;this.K=this.status=0;this.l=null;this.fa="sfchannel"+a},fu=function(a){this.j=a},gu=function(a,b){this.Na=a;this.Oa=b},hu=function(a,b,c,d,e,f,g,h){h=void 0===h?[]:h;this.v=a;this.l=b;this.m=c;this.permissions=d;this.o=e;this.A=f;this.Ha=g;this.hostpageLibraryTokens=h;this.j=""},iu=function(a){this.j=a},ju=function(a,b){this.j=a;this.version=b};_.Ra(ju,iu);ju.prototype.m=function(){return Xt({uid:this.j,version:this.version})};var ku=function(a,b,c){this.j=a;this.o=b;this.l=c};_.Ra(ku,iu);ku.prototype.m=function(){return Xt({uid:this.j,initialWidth:this.o,initialHeight:this.l})};var lu=function(a,b){this.j=a;this.l=b};_.Ra(lu,iu);lu.prototype.m=function(){return Xt({uid:this.j,description:this.l})};var mu=function(a,b,c){this.j=a;this.l=b;this.push=c};_.Ra(mu,iu);mu.prototype.m=function(){return Xt({uid:this.j,expand_t:this.l.top,expand_r:this.l.right,expand_b:this.l.bottom,expand_l:this.l.left,push:this.push})};var nu=function(a){this.j=a};_.Ra(nu,iu);nu.prototype.m=function(){return Xt({uid:this.j})};var ou=function(a,b){this.j=a;this.o=b};_.Ra(ou,iu);ou.prototype.m=function(){var a={uid:this.j,newGeometry:du(this.o)};return Xt(a)};var pu=function(a,b,c,d,e){ou.call(this,a,c);this.v=b;this.l=d;this.push=e};_.Ra(pu,ou);pu.prototype.m=function(){var a={uid:this.j,success:this.v,newGeometry:du(this.o),expand_t:this.l.top,expand_r:this.l.right,expand_b:this.l.bottom,expand_l:this.l.left,push:this.push};return Xt(a)};var qu=function(a,b,c,d){this.j=a;this.width=b;this.height=c;this.l=void 0===d?"":d};_.Ra(qu,iu);qu.prototype.m=function(){var a={uid:this.j,width:this.width,height:this.height};this.l&&(a.sentinel=this.l);return Xt(a)};var ru=function(){this.j=[]},su=function(a,b,c,d){this.m=a;this.j=(this.l=!!(_.u(d)&&a.style&&a.style.getPropertyPriority))?String(b).replace(/([A-Z])/g,"-$1").toLowerCase():b;this.o=this.l?a.style.getPropertyValue(this.j):a.style[this.j];this.v=this.l?a.style.getPropertyPriority(this.j):void 0;this.l?(a.style.removeProperty(this.j),a.style.setProperty(this.j,String(c),d)):a.style[this.j]=String(c)},tu=function(a,b,c,d,e){a.j.push(new su(b,c,d,e))},uu=function(a,b,c,d){tu(a,b,c,d+"px",void 0)},vu=1,wu=!1,xu=function(a,b,c){a.H?(b.style.width=Pt("100%"),b.style.height=Pt("auto")):(b.style.width=Pt(c.width),b.style.height=Pt(c.height))},yu=function(a,b,c){c=_.yf(b,a.O,a.Y,c);var d=[];a.V&&(b=_.od(b.location.href),d.push([0<b.length?"google_debug"+(b?"="+b:"")+"&":"","xpc=","sf-gdn-exp-"+a.m,"&p=",(0,window.encodeURIComponent)(_.t.document.location.protocol),"//",(0,window.encodeURIComponent)(_.t.document.location.host)].join("")));a.X.length&&d.push("eid="+a.X.join());d.length&&(c+="#"+d.join("&"));return c},zu=function(a,b,c,d,e,f,g){var h;if(a.H){var l=h=0;d="min-width:100%"}else h=d.width,l=d.height,d="";b={id:b,title:f||"",name:c,src:yu(a,_.Cd(e),g),scrolling:"no",marginWidth:"0",marginHeight:"0",width:String(h),height:String(l),"data-is-safeframe":"true"};c=_.bc&&!_.uc(9)?"javascript:\"<html><body style='background:transparent'></body></html>\"":"about:blank";c={frameborder:0,style:"border:0;vertical-align:bottom;"+(d||""),allowTransparency:"true",src:c};b&&Gt(c,b);e=e.l("IFRAME",c);a.$&&(e.sandbox=Ot());a.A.appendChild(e);return e},Au=function(a,b){var c=_.wd(a.A),d=b.content;d=a.O+";"+d.length+";"+d;var e=new hu(a.m,a.ba,a.W,a.P,new fu({shared:{sf_ver:a.O,ck_on:window.navigator.cookieEnabled?1:0,flash_ver:_.ye?_.ze:"0"}}),a.H,a.ca,a.da);var f={};f.uid=e.v;f.hostPeerName=e.l;f.initialGeometry=du(e.m);var g=e.permissions;g=Xt({expandByOverlay:g.Na,expandByPush:g.Oa,readCookie:!1,writeCookie:!1});f=(f.permissions=g,f.metadata=Xt(e.o.j),f.reportCreativeGeometry=e.A,f.isDifferentSourceWindow=e.Ha,f.goog_safeframe_hlt=Zt(e.hostpageLibraryTokens),f);e.j&&(f.sentinel=e.j);e=Xt(f);e=d+e;d=!1===b.bc;if(a.V&&b.size instanceof _.td){f=b.ib;g=b.size;var h=_.wd(a.A);wu||(_.fd(h.j,(a.ga?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"),wu=!0);h=_.Cd(h);h.google_eas_queue=h.google_eas_queue||[];h.google_eas_queue.push({a:f,b:h.location.protocol+"//tpc.googlesyndication.com",c:g.width,d:g.height,e:"sf-gdn-exp-"+a.m,f:void 0,g:void 0,h:void 0,i:void 0})}if(b.Td)if(h=b.ib,f=b.size,b=b.Ib,g=window.document.getElementById(h)){a:{try{var l=g.contentWindow||(g.contentDocument?_.zd(g.contentDocument):null);break a}catch(n){}l=null}l.name=e;_.Sb()&&0<=_.nb(_.Vb(),10)&&(g.name=e);a.H?(f=e=0,g.style.minWidth="100%"):(e=f.width,f=f.height);g.width=String(e);g.height=String(f);g.title=b||"";g.setAttribute("data-is-safeframe","true");l.location.replace(yu(a,_.Cd(c),d));a.$&&(g.sandbox=Ot());a.j=g}else a.j=zu(a,h,e,f,c,b,d);else a.j=zu(a,b.ib,e,b.size,c,b.Ib,d)},Bu=function(a){a.v=_.xf(a.j,a.I,a.T);a.T=null;cu(a.l,"geometry_update",(new ou(a.m,a.v)).m())},Cu=function(a){eu.call(this,vu++);this.D=a.od;this.H=1==a.size;this.P=new gu(a.permissions.Na&&!this.H,a.permissions.Oa&&!this.H);this.A=a.nb;this.X=a.Nd||[];this.da=a.hostpageLibraryTokens||[];var b=window.location;this.ba="file:"==b.protocol?"*":b.protocol+"//"+b.host;this.ca=!!a.Ha;this.Z=(!1===a.bc?"https:":window.location.protocol)+"//tpc.googlesyndication.com";this.V=!!a.$c;this.ga=!!a.Ud;this.$=a.sandbox||!1;this.o=new ru;xu(this,a.nb,a.size);this.I=a.bd||!1;this.v=this.W=_.xf(a.nb,this.I);this.O=a.Od||"1-0-13";this.Y=a.Wc||"";Au(this,a);this.T=null;this.L=(0,_.z)(this.eb,this);this.M=-1;this.C=0;this.F=null;!a.kd||"function"!==typeof window.IntersectionObserver||_.jc||_.gc||(this.F=new window.IntersectionObserver((0,_.z)(function(a){this.T=a[a.length-1];this.eb()},this)));this.l=new au(this.fa,this.j.contentWindow,this.Z,!1);bu(this.l,"init_done",(0,_.z)(this.ld,this));bu(this.l,"register_done",(0,_.z)(this.Kd,this));bu(this.l,"report_error",(0,_.z)(this.Md,this));bu(this.l,"expand_request",(0,_.z)(this.ad,this));bu(this.l,"collapse_request",(0,_.z)(this.Xc,this));bu(this.l,"creative_geometry_update",(0,_.z)(this.Zc,this));this.l.connect((0,_.z)(this.Id,this));var c=(0,_.z)(function(){this.j&&(this.j.name="",a.Ob&&a.Ob(),_.Ud(this.j,"load",c))},this);_.D(this.j,"load",c)};_.Ra(Cu,eu);_.k=Cu.prototype;_.k.Id=function(){this.F&&this.j?this.F.observe(this.j):(_.D(window,"resize",this.L),_.D(window,"scroll",this.L))};_.k.ld=function(a){try{if(0!=this.status)throw Error("Container already initialized");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ja(b)&&_.m(b.uid)&&_.v(b.version)))throw Error("Cannot parse JSON message");var c=new ju(b.uid,b.version);if(this.m!=c.j||this.O!=c.version)throw Error("Wrong source container");this.status=1}catch(d){this.D.error("Invalid INITIALIZE_DONE message. Reason: "+d.message)}};_.k.Kd=function(a){try{if(1!=this.status)throw Error("Container not initialized");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ja(b)&&_.m(b.uid)&&_.m(b.initialWidth)&&_.m(b.initialHeight)))throw Error("Cannot parse JSON message");if(this.m!=(new ku(b.uid,b.initialWidth,b.initialHeight)).j)throw Error("Wrong source container");this.status=2}catch(c){this.D.error("Invalid REGISTER_DONE message. Reason: "+c.message)}};_.k.Md=function(a){try{if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ja(b)&&_.m(b.uid)&&_.v(b.description)))throw Error("Cannot parse JSON message");var c=new lu(b.uid,b.description);if(this.m!=c.j)throw Error("Wrong source container");this.D.info("Ext reported an error. Description: "+c.l)}catch(d){this.D.error("Invalid REPORT_ERROR message. Reason: "+d.message)}};_.k.ad=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(0!=this.K)throw Error("Container is not collapsed");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ja(b)&&_.m(b.uid)&&_.m(b.expand_t)&&_.m(b.expand_r)&&_.m(b.expand_b)&&_.m(b.expand_l)&&_.Da(b.push)))throw Error("Cannot parse JSON message");var c=new mu(b.uid,new _.Dd(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push);if(this.m!=c.j)throw Error("Wrong source container");if(!(0<=c.l.top&&0<=c.l.left&&0<=c.l.bottom&&0<=c.l.right))throw Error("Invalid expansion amounts");var d;if(d=c.push&&this.P.Oa||!c.push&&this.P.Na){var e=c.l,f=c.push,g=this.v=_.xf(this.j,this.I);if(e.top<=g.j.top&&e.right<=g.j.right&&e.bottom<=g.j.bottom&&e.left<=g.j.left){if(!f)for(var h=this.j.parentNode;h&&h.style;h=h.parentNode)tu(this.o,h,"overflowX","visible","important"),tu(this.o,h,"overflowY","visible","important");var l=this.v.l,n=this.v.l,p=_.Gd(new _.Fd(0,0,l.right-l.left,n.bottom-n.top));_.Ja(e)?(p.top-=e.top,p.right+=e.right,p.bottom+=e.bottom,p.left-=e.left):(p.top-=e,p.right+=Number(void 0),p.bottom+=Number(void 0),p.left-=Number(void 0));tu(this.o,this.A,"position","relative");tu(this.o,this.j,"position","absolute");f?(uu(this.o,this.A,"width",p.right-p.left),uu(this.o,this.A,"height",p.bottom-p.top)):tu(this.o,this.j,"zIndex","10000");uu(this.o,this.j,"width",p.right-p.left);uu(this.o,this.j,"height",p.bottom-p.top);uu(this.o,this.j,"left",p.left);uu(this.o,this.j,"top",p.top);this.K=2;this.v=_.xf(this.j,this.I);d=!0}else d=!1}a=d;cu(this.l,"expand_response",(new pu(this.m,a,this.v,c.l,c.push)).m());if(!a)throw Error("Viewport or document body not large enough to expand into.");}catch(w){this.D.error("Invalid EXPAND_REQUEST message. Reason: "+w.message)}};_.k.Xc=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(2!=this.K)throw Error("Container is not expanded");if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!_.Ja(b)||!_.m(b.uid))throw Error("Cannot parse JSON message");if(this.m!=(new nu(b.uid)).j)throw Error("Wrong source container");_.zf(this);cu(this.l,"collapse_response",(new ou(this.m,this.v)).m())}catch(c){this.D.error("Invalid COLLAPSE_REQUEST message. Reason: "+c.message)}};_.k.eb=function(){if(1==this.status||2==this.status)switch(this.C){case 0:Bu(this);this.M=window.setTimeout((0,_.z)(this.Gb,this),1E3);this.C=1;break;case 1:this.C=2;break;case 2:this.C=2}};_.k.Zc=function(a){try{if(!_.v(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(_.Ja(b)&&_.m(b.uid)&&_.m(b.width)&&_.m(b.height))||b.sentinel&&!_.v(b.sentinel))throw Error("Cannot parse JSON message");var c=new qu(b.uid,b.width,b.height,b.sentinel);if(this.m!=c.j)throw Error("Wrong source container");var d=String(c.height);this.H?d!=this.j.height&&(this.j.height=d,this.eb()):this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")}catch(e){this.D.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: "+e.message)}};_.k.Gb=function(){if(1==this.status||2==this.status)switch(this.C){case 1:this.C=0;break;case 2:Bu(this),this.M=window.setTimeout((0,_.z)(this.Gb,this),1E3),this.C=1}};var Du=function(){_.Yh.is(_.og.Hc)?_.G(_.Zh,_.pg.Ka):_.Xf(_.Yh)||_.G(_.Zh,_.pg.aa);return _.ha(_.Xe(),function(a){return _.Tf[a]})},Eu=function(a){for(var b={},c=0;c<a.length;++c)_.C(a[c],function(a,c){b[c]=a});return b},Fu=function(){var a=_.Gb;return null!=a&&-1!=a.indexOf("MSIE ")&&-1==a.indexOf("IEMobile")},Gu=function(a){if(!a||0==_.nl()||"hidden"!=a.style.visibility||"none"!=a.style.display)return!1;a.parentNode.removeChild(a);return!0},Hu=function(a,b,c,d,e,f,g,h,l,n,p){var w=_.ur,y;_.x(e)?y=new _.td(e[0],e[1]):y=1;e=_.Xh.is(_.ng.w);var I=_.Ii.is(_.$g.w);return new Cu({nb:b,ib:c,Ib:w,content:_.Jl(d),size:y,od:{info:function(){},G:function(){},error:function(){}},$c:l,Ob:f,sandbox:_.u(g.sandbox)?g.sandbox:!1,permissions:{Na:_.u(g.allowOverlayExpansion)?g.allowOverlayExpansion:!h,Oa:_.u(g.allowPushExpansion)?g.allowPushExpansion:!1},bd:_.Qh.is(_.ig.w),Ha:!!_.Ef().fifWin,kd:e,Nd:Du(),Td:n,Od:_.$k(),Wc:_.al(a.location.host),Ud:_.ll(a,!0),bc:_.ll(a,I),hostpageLibraryTokens:p})},Iu=function(a,b,c,d){_.Im(a,"ad_fetch_period",b,d);_.gf(_.dl.u(),(4).toString(),b);_.Sm(a,c,"ad."+b)},Ju=function(a){return a.U?!!a.U._is_afc_:null},Ku=function(a){return a.U?!!a.U._afc_expandable_:!0},Lu=function(){var a=_.Pq.u();if((0,_.rp)()){var b=_.Qq(window);2!==a.j[b]&&3!==a.j[b]&&(a.j[b]=2,_.Rq(a,b,"preload"))}},Mu=function(a,b){var c=Rt(b,_.N(290,function(){a.j[b]=3;_.xb(window.google_image_requests,c)}))},Nu=function(a,b,c){a.Ra||(a.Ra=!0,a=function(){try{var a=b.document.createElement("iframe");a.id="ace-frame";a.src=c;a.style.visibility="hidden";a.style.display="none";b.document.body.appendChild(a)}catch(e){}},b.requestIdleCallback?b.requestIdleCallback(a):b.setTimeout(a,0))},Ou=function(a,b){if(!a.Ta&&b==b.top){a.Ta=!0;try{_.D(b,"beforeunload",function(){try{var a=_.Cl()+"//www.googletagservices.com/tag/js/gpt.js";_.sp(b.document,a,"prefetch")}catch(d){}})}catch(c){}}},Pu=function(a,b,c){b.U=c;b.fetchEnded();null!=c._host_page_libraries_&&_.A(c._host_page_libraries_,function(c){var d=a.la;if(!_.vb(d.l,c))switch(c){case 1:var e=c+"_hostpage_library",f=_.fd(window.document,_.uf[c]);f&&(f.id=e);d.l.push(c);e=new Yt(c);d.m.push(e);d=_.Ef();d.hostpageLibraryTokens||(d.hostpageLibraryTokens={});d.hostpageLibraryTokens[e.j]=e.l}d=a.la;d.j[c]||(d.j[c]=[]);d.j[c].push(b)});null!=c._cookies_&&_.zq(a.X,c);c._persistent_for_stream_&&(a.j.M[_.K(b)]=null);var d=c._a_exps_;if(d)for(var e=0,f=d.length;e<f;e++)_.Jh(d[e].toString(),!0);_.Ji.is(_.ah.w)&&a.v(c)&&Lu();_.lj.is(_.Bh.w)&&Et(c)},Qu=function(a,b,c){var d=void 0===d?window:d;if(a.l&&!_.x(b))return a=new _.L("sra_legacy_ad_response"),_.q(a),_.M(a),[];if(c.length){var e=c[0];Iu(a.Ca,e.getCsiId(),e.P,e.j)}_.x(b)||(b=[b]);e=[];for(var f=0;f<c.length;++f){var g=c[f],h=b[f][g.getAdUnitPath()];h&&(Pu(a,g,h),e.push(g))}switch(_.Zf(_.Li)){case _.ch.rc:Nu(a,d,"https://www.googletagservices.com/cb/ace_frame.html");break;case _.ch.qc:Nu(a,d,"https://www.googletagservices.com/cb/ace_frame.html#cbu=https%3A%2F%2Fwww.googletagservices.com%2Ftag%2Fjs%2Fgpt.js")}_.Ti.is(_.kh.w)&&Ou(a,d);return e},Ru=function(a){(a=(a=a.U)&&a._resources_)&&_.A(a,function(a){if(a){var b=a.url;a=a.as;if(b&&a){var d=_.Pq.u();2!==d.j[b]&&3!==d.j[b]&&(d.j[b]=2,"image"==a?Mu(d,b):(0,_.rp)()&&_.Rq(d,b,"preload",a))}}})},Su=function(a,b,c){a=a.Ca;var d=b.getCsiId(),e=b.j,f=Ku(b);b=!!Ju(b);_.Im(a,"start_ad_render_period",d,e);_.Hm(a,"exr",d,e,f?1:0);_.gf(_.dl.u(),(5).toString(),d);_.t.google_timing_params=_.t.google_timing_params||{};_.t.google_timing_params["qqid."+d]=c;_.Nm(a,"is_backfill_at_render",""+d+"_"+b,e);_.Nm(a,"qqid",""+d+"_"+c,e)},Tu=function(a,b){if(a.Ec){var c=b.U;c&&!c._empty_&&(c=c._html_)&&-1==c.indexOf("adpnt")&&(b=b.getEscapedQemQueryId(),c=new _.L("gpt_qse_missing",_.ml(),1),_.r(c,"qemQueryId",b),_.q(c,a.j),_.M(c))}},Uu=function(a){var b=new _.L("gpt_fluid_not_sf",_.ml(),_.E.u().get(23));_.r(b,"impl",a.W());_.q(b,a.j);_.M(b)},Vu=function(a,b,c){Qt(a);_.t.setTimeout(_.N(214,function(){var d=_.pn(c,b);d?Qt(a,d):(d=new _.L("amp_inabox_failed"),_.q(d),_.M(d))}),0)},Wu=function(a,b,c){var d={};d=(d[_.Mg.Oc]=1.5,d[_.Mg.Pc]=2,d[_.Mg.Qc]=2.5,d[_.Mg.Rc]=3,d)[_.Zf(_.vi)];var e=b.pageYOffset;b=b.innerHeight;if(d&&_.m(e)&&_.m(b)){var f=e+b*d,g=function(a,b){a=(a=a.U)&&a._height_||0;return!!b&&b.y+a>=e&&b.y<f};_.Db(c,function(b,c){var d=_.sq(a.j,b),e=_.sq(a.j,c);b=g(b,d);return b!=g(c,e)?b?-1:1:b?d.y-e.y:0})}},Xu=function(a,b){_.Zf(_.Ui)&&_.t.IntersectionObserver&&(a.Z||(a.Z=new _.t.IntersectionObserver(function(a){_.A(a,function(a){var b=_.An(_.Cn(),a.target.id);if(b.ca=a.isIntersecting)b.ja=a.time})},{rootMargin:"0px"})),a.Z.observe(b))},Yu=function(a,b,c){_.fr(a,b,c,a.ga);b=_.nn(c);b.slotContentChanged=a.ga;c.renderEnded(b)},Zu=function(a,b,c,d,e,f,g,h){var l=_.tn(d,c);if(null!=l){var n=_.di.is(_.ug.w);if(!n)for(var p;p=l.firstChild;)l.removeChild(p);a.j.o||(l.style.display="inline-block");h=Eu([h,a.j.L,d.$]);b=Hu(b,l,_.sn(d),f,e,g,h,!!Ju(d),Ku(d),n,a.la.m);d.m=b;d.A=!1;_.sr(a,_.pn(d,c),_.K(d))}},$u=function(a,b,c,d,e){var f=_.sn(c),g=_.pn(c,b);if(null==g)if(a.Ba){var h=_.tn(c,b);g=_.Vr(a,b,c,h,d);delete a.F[f]}else return;_.v(d)?Uu(a):(g.width=String(d[0]),g.height=String(d[1]),a.Ba&&(h=_.tn(c,b),h.style.width="",h.style.height=""));_.Nl(g,e,!0);c.A=!1;_.sr(a,g,_.K(c))},av=function(a,b,c){var d=c.U,e=c.getEscapedQemQueryId(),f=_.P(c,b);f&&f.setAttribute("data-google-query-id",e);Su(a,c,e);c.renderStarted();if(null==d||d._empty_)Yu(a,b,c);else if(a.M)c.renderEnded(_.nn(c));else{e=d._html_;if(!_.v(e)){_.Sr(a,c);return}_.nj.is(_.Eh.w)||_.Gl(_.P(c,b),!0);_.Zr(a,c);var g;"height"==d._fluid_?g="fluid":g=[d._width_,d._height_];Vu(_.t,b,c);a.v(d)?Zu(a,_.t,b,c,g,e,function(){_.Ur(a,c);a.loaded(c)},{sandbox:d._use_sandbox_||!1}):$u(a,b,c,g,e);_.pq(c,_.mn(c,d))}d=c.getSlotElementId();Gu(a.P[d])&&delete a.P[d];a.fa(b,c);Tu(a,c)},bv=function(a,b,c,d){var e=c.getSlotElementId(),f=_.P(c);if(!_.sf(f))return!1;var g=_.hr(a,c);if(!g)return!1;var h=!!a.H[e];a.H[e]=function(){d&&(_.t.cancelIdleCallback?_.t.cancelIdleCallback(d):_.t.clearTimeout(d));av(a,b,c)};h||g.observe(f);return!0},cv=function(a,b,c,d){var e=_.P(c,b),f=c.getSlotElementId(),g=function(){_.Br(a,e,f,c);av(a,b,c)};return _.t.requestIdleCallback?_.t.requestIdleCallback(g,{timeout:d}):_.t.setTimeout(g,d)},dv=function(a,b,c){if(!_.Pi.is(_.gh.Ma)&&!_.Ri.is(_.ih.w)&&!_.$i.is(_.qh.w)||!Ju(c)||!_.Xn()||_.zr(a,_.t,0,c))return!1;_.Ar(a);if(!a.I)return!1;a.A[c.getSlotElementId()]=function(){return av(a,b,c)};return!0},ev=function(a,b){(a=_.P(a,b))&&a.parentNode&&""===a.innerHTML&&a.parentNode.removeChild(a)},fv=function(a,b,c,d,e,f,g,h){ev(d,c);var l=_.sn(d)+"__container__";l='<div id="'+_.fb(l)+'"></div>';c.write(l);l=_.tn(d,c);null!=l&&(a.j.o?l.style.margin="auto":l.style.display="inline-block",h=Eu([h,a.j.L,d.$]),b=Hu(b,l,_.sn(d),f,e,g,h,Ju(d)||!1,Ku(d)),d.m=b,_.sr(a,_.pn(d,c),_.K(d)))},gv=function(a,b,c,d){b=b.getSlotElementId()+"_ad_container";var e='<div id="'+_.fb(b)+'"';d&&"height"==d._fluid_?e+=' style="width:100%;">':a.j.o&&d?(e+=' style="width:'+d._width_,e+='px;margin:auto;">'):e+=">";d&&(e+=d._html_);c.write(e+"\n</div>\n");return b},hv=function(a,b,c){ev(b,c);var d=b.U;if(null!=d){var e=gv(a,b,c,d);d=_.mn(b,d);b.renderEnded(d);(c=c.getElementById(e))&&_.sr(a,c,_.K(b))}},iv=function(a,b,c,d,e,f,g){g=void 0===g?window.document:g;ev(b,g);var h=_.sn(b),l=[],n=0,p=0;_.x(e)?(n=e[0],p=e[1]):Uu(a);c=_.il(c);l.push('<iframe id="',_.fb(h),'" title="',_.ur,'" name="',_.fb(h),'" width="',n,'" height="',p,'" vspace="0" hspace="0" allowtransparency="true" ','scrolling="no"',' marginwidth="0" marginheight="0" frameborder="0" style=','"border:0px;left:0;position:absolute;top:0;"',' src="',c,'"');null!=d&&l.push(' onload="',d,'"');l.push("></iframe>");d=[];c=b.getSlotElementId()+"_ad_container";d.push('<div id="',_.fb(c),'"');f&&d.push(' style="text-align:center" ');d.push(">");d.push('<ins style="position:relative;width:'+n+"px;height:"+p+'px;border:none;display:inline-table;vertical-align:bottom;">'+('<ins style="position:relative;width:'+n+"px;height:"+p+'px;border:none;display:block;">'+l.join("")+"</ins>")+"</ins>");d.push("</div>");g.write(d.join(""));(f=g.getElementById(h))&&_.sr(a,f,_.K(b))},jv=function(a,b,c){ev(b,c||window.document);return gv(a,b,c||window.document)};_.ts.prototype.I=Dt(5,function(a,b,c){var d=this,e=c.U,f=c.getEscapedQemQueryId(),g=_.P(c,b);g&&g.setAttribute("data-google-query-id",f);Su(this,c,f);if(null==e||e._empty_)_.fr(this,b,c,!1),c.renderEnded(_.nn(c));else if(this.M)c.renderEnded(_.nn(c));else if(this.v(e))if(f=function(){d.loaded(c)},g=e._html_){var h;"height"==e._fluid_?h="fluid":h=[e._width_,e._height_];Vu(a,b,c);fv(this,a,b,c,h,g,f,{sandbox:e._use_sandbox_||!1});_.pq(c,_.mn(c,e))}else c.renderEnded(_.nn(c));else if(e._snippet_&&!e._is_afc_)hv(this,c,b);else if(Fu()){h="googletag.impl.pubads.syncAdSlotLoaded(this, '"+_.K(c)+"',"+c.j+");";f="about:blank";if(g=_.Cq(this.o,"google_domain_reset_url")){var l=_.se(g.match(_.re)[3]||null);if(null===l||0<=l.indexOf(window.document.domain))f=g}Vu(a,b,c);if("height"==e._fluid_){Uu(this);return}iv(this,c,f,h,[e._width_,e._height_],this.j.o,b)}else Vu(a,b,c),a=jv(this,c,b),b.write("<script>googletag.impl.pubads.createDomIframe("+Nt(a)+" ,"+Nt(_.K(c))+","+this.j.o+","+c.j+");\x3c/script>");this.fa(b,c);Tu(this,c);c.renderStarted()});_.ts.prototype.Vb=Dt(4,function(a){window.clearTimeout(this.P);Qu(this,a,this.F);this.F=null;this.C||(this.C=!0,_.xs(this,this.D));this.A.length&&_.ws(this,this.A.shift())});_.ns.prototype.Ua=Dt(3,function(a,b,c,d,e){var f=this;e=void 0===e?window.document:e;var g=_.K(b);if(this.C[g]==a)if(this.M)delete this.C[g],b.renderEnded(_.nn(b));else if(d&&delete this.C[g],a=b.U,a._empty_)Yu(this,e,b);else{a._html_+=c;if(this.v(a))d&&(Su(this,b,b.getEscapedQemQueryId()),Zu(this,window,e,b,"height"==a._fluid_?"fluid":[a._width_,a._height_],a._html_,function(){return f.loaded(b)},{sandbox:!!a._use_sandbox_}));else if(e=_.pn(b,e)){var h=b.A;h&&Su(this,b,b.getEscapedQemQueryId());_.rs(b,e,c,h,d);d&&_.sr(this,e,g)}d&&_.pq(b,_.mn(b,a))}});_.ns.prototype.Tb=Dt(2,function(a,b,c,d){d=void 0===d?window.document:d;this.gc[a]||(this.gc[a]=!0,Iu(_.zm(),b.getCsiId(),b.P,b.j));var e=_.K(b);(c=c[b.getAdUnitPath()])&&_.oq(this.j,b)&&!this.C[e]&&(Pu(this,b,c),b.renderStarted(),this.C[e]=a,_.qs(this,b,d))});_.V.prototype.wa=Dt(1,function(a,b){b=void 0===b?window.document:b;try{var c=a.U,d=!1;if(null!=c&&!c._empty_&&!this.M){_.nj.is(_.Eh.w)&&_.Gl(_.P(a,b),!0);c=b;var e=a.U,f=e&&e._timeout_render_,g=_.m(f)&&-1<f?f:null,h=_.gr(a),l=_.P(a);l&&Xu(this,l);if(null==h&&null==g||_.zr(this,_.t,(h||0)/100,a))var n=!1;else{e=null;null!=g&&(e=cv(this,c,a,g));var p=null!=h&&bv(this,c,a,e);n=null!=e||p}d=n||dv(this,b,a)}d?Ru(a):av(this,b,a)}catch(w){}});_.V.prototype.Ub=Dt(0,function(a,b,c){var d=this,e=this.ca[c];e?(b=Qu(this,b,e),delete this.ca[c],Wu(this,a,b),_.A(b,function(a){return d.wa(a)}),this.l||c!=this.qa||(window.clearTimeout(this.sb[_.K(e[0])]),_.Xr(this))):(a=new _.L("gpt_req_undef"),_.q(a),_.r(a,"req_id",String(c)),_.M(a))});var kv={},lv=(kv[1]=_.V.prototype.Ub,kv[2]=_.ts.prototype.Vb,kv[3]=_.V.prototype.wa,kv[4]=_.ts.prototype.I,kv[5]=_.ns.prototype.Ua,kv[6]=_.ns.prototype.Tb,kv);window.googletag._=function(a,b){b=void 0===b?lv:b;_.dm.push=_.N(339,function(a){var c=a&&b[a.va];c&&c.apply(a.Ga,a.ua);return 0});_.A(_.dm,function(a){return _.dm.push(a)});_.dm.length=0};})
