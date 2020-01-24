(function(n,t,q){if("object"===typeof q&&"string"!==typeof q.nodeName)t(n,q);else{var u=function(b){for(var k in b)b.hasOwnProperty(k)&&(b[k]=u(b[k]));return Object.freeze(b)};q={};t(n,q);for(var r in q)!q.hasOwnProperty(r)||null!=Object.getOwnPropertyDescriptor(n,r)&&null!=Object.getOwnPropertyDescriptor(n[r],"1.2.6-iab634")||(null==Object.getOwnPropertyDescriptor(n,r)&&Object.defineProperty(n,r,{value:{}}),Object.defineProperty(n[r],"1.2.6-iab634",{get:function(){return u(q[r])},enumerable:!0}))}})("undefined"===
typeof global?this:global,function(n,t){function q(a,d){return a&&(a[d]||(a[d]={}))}function u(a,d){"undefined"!==typeof jasmine&&jasmine?a():"undefined"!==typeof console&&console&&console.error&&d()}function r(a,d){return d.reduce(function(a,d){return a&&a[d]},a)}var b=b||{};b.scope={};b.inherits=function(a,d){function c(){}c.prototype=d.prototype;a.superClass_=d.prototype;a.prototype=new c;a.prototype.constructor=a;for(var b in d)if("prototype"!=b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(d,
b);e&&Object.defineProperty(a,b,e)}else a[b]=d[b]};b.ASSUME_ES5=!1;b.ASSUME_NO_NATIVE_MAP=!1;b.ASSUME_NO_NATIVE_SET=!1;b.defineProperty=b.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,c){a!=Array.prototype&&a!=Object.prototype&&(a[d]=c.value)};b.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};b.global=b.getGlobal(this);b.SYMBOL_PREFIX="jscomp_symbol_";b.initSymbol=function(){b.initSymbol=
function(){};b.global.Symbol||(b.global.Symbol=b.Symbol)};b.symbolCounter_=0;b.Symbol=function(a){return b.SYMBOL_PREFIX+(a||"")+b.symbolCounter_++};b.initSymbolIterator=function(){b.initSymbol();var a=b.global.Symbol.iterator;a||(a=b.global.Symbol.iterator=b.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&b.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return b.arrayIterator(this)}});b.initSymbolIterator=function(){}};b.arrayIterator=function(a){var d=
0;return b.iteratorPrototype(function(){return d<a.length?{done:!1,value:a[d++]}:{done:!0}})};b.iteratorPrototype=function(a){b.initSymbolIterator();a={next:a};a[b.global.Symbol.iterator]=function(){return this};return a};b.makeIterator=function(a){b.initSymbolIterator();var d=a[Symbol.iterator];return d?d.call(a):b.arrayIterator(a)};b.arrayFromIterator=function(a){for(var d,c=[];!(d=a.next()).done;)c.push(d.value);return c};b.arrayFromIterable=function(a){return a instanceof Array?a:b.arrayFromIterator(b.makeIterator(a))};
var k={assertTruthyString:function(a,d){if(!d)throw Error("Value for "+a+" is undefined, null or blank.");if("string"!==typeof d&&!(d instanceof String))throw Error("Value for "+a+" is not a string.");if(""===d.trim())throw Error("Value for "+a+" is empty string.");},assertNotNullObject:function(a,d){if(null==d)throw Error("Value for "+a+" is undefined or null");},assertNumber:function(a,d){if(null==d)throw Error(a+" must not be null or undefined.");if("number"!==typeof d||isNaN(d))throw Error("Value for "+
a+" is not a number");},assertNumberBetween:function(a,d,c,b){(0,k.assertNumber)(a,d);if(d<c||d>b)throw Error("Value for "+a+" is outside the range ["+c+","+b+"]");},assertFunction:function(a,d){if(!d)throw Error(a+" must not be truthy.");},assertPositiveNumber:function(a,d){(0,k.assertNumber)(a,d);if(0>d)throw Error(a+" must be a positive number.");}};var v=function(a){return/\d+\.\d+\.\d+(-.*)?/.test(a)};var w=function(a,d){a=a.split("-")[0].split(".");d=d.split("-")[0].split(".");for(var c=0;3>
c;c++){var b=parseInt(a[c],10),e=parseInt(d[c],10);if(b>e)break;else if(b<e)return!1}return!0};var z=function(a,d){return(0,v)(a)&&(0,w)(a,"1.0.3")?d:JSON.stringify(d)};var x=function(a,d){return(0,v)(a)&&(0,w)(a,"1.0.3")?d?d:[]:d&&"string"===typeof d?JSON.parse(d):[]};var p=function(a,d,c,b){this.guid=a;this.method=d;this.version=c;this.args=b};p.isValidSerializedMessage=function(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&"string"===
typeof a.omid_message_guid&&"string"===typeof a.omid_message_method&&"string"===typeof a.omid_message_version&&(void 0===a.omid_message_args||void 0!==a.omid_message_args)};p.deserialize=function(a){return new p(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)};p.prototype.serialize=function(){var a={};a=(a.omid_message_guid=this.guid,a.omid_message_method=this.method,a.omid_message_version=this.version,a);void 0!==this.args&&(a.omid_message_args=this.args);return a};
var f=function(a){this.to=a;this.communicationType_="NONE"};f.prototype.sendMessage=function(a,d){};f.prototype.handleMessage=function(a,d){if(this.onMessage)this.onMessage(a,d)};f.prototype.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var d=16*Math.random()|0;return a="y"===a?(d&3|8).toString(16):d.toString(16)})};f.prototype.serialize=function(a){return JSON.stringify(a)};f.prototype.deserialize=function(a){return JSON.parse(a)};f.prototype.isDirectCommunication=
function(){return"DIRECT"===this.communicationType_};var c={OMID_PRESENT_FRAME_NAME:"omid_v1_present",isOmidPresent:function(a){try{return a.frames?!!a.frames[c.OMID_PRESENT_FRAME_NAME]:!1}catch(d){return!1}},declareOmidPresence:function(a){a.frames&&a.document&&(c.OMID_PRESENT_FRAME_NAME in a.frames||(null==a.document.body&&c.isMutationObserverAvailable_(a)?c.registerMutationObserver_(a):a.document.body?c.appendPresenceIframe_(a):a.document.write('<iframe style="display:none" '+('id="'+c.OMID_PRESENT_FRAME_NAME+
'"')+(' name="'+c.OMID_PRESENT_FRAME_NAME+'">')+"</iframe>")))},appendPresenceIframe_:function(a){var d=a.document.createElement("iframe");d.id=c.OMID_PRESENT_FRAME_NAME;d.name=c.OMID_PRESENT_FRAME_NAME;d.style.display="none";a.document.body.appendChild(d)},isMutationObserverAvailable_:function(a){return"MutationObserver"in a},registerMutationObserver_:function(a){var d=new MutationObserver(function(b){b.forEach(function(b){"BODY"===b.addedNodes[0].nodeName&&(c.appendPresenceIframe_(a),d.disconnect())})});
d.observe(a.document.documentElement,{childList:!0})}},e=function(a){f.call(this,a);this.communicationType_="DIRECT";this.handleExportedMessage=e.prototype.handleExportedMessage.bind(this)};b.inherits(e,f);e.prototype.sendMessage=function(a,d){d=void 0===d?this.to:d;if(!d)throw Error("Message destination must be defined at construction time or when sending the message.");d.handleExportedMessage(a.serialize(),this)};e.prototype.handleExportedMessage=function(a,d){p.isValidSerializedMessage(a)&&this.handleMessage(p.deserialize(a),
d)};var g={error:function(a){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];u(function(){throw new (Function.prototype.bind.apply(Error,[null].concat(["Could not complete the test successfully - "],b.arrayFromIterable(d))));},function(){return console.error.apply(console,[].concat(b.arrayFromIterable(d)))})},debug:function(a){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];u(function(){},function(){return console.error.apply(console,[].concat(b.arrayFromIterable(d)))})}},
l=eval("this");var h=function(){if("undefined"!==typeof n&&n)return n;if("undefined"!==typeof global&&global)return global;if("undefined"!==typeof window&&window)return window;if("undefined"!==typeof l&&l)return l;throw Error("Could not determine global object context.");}();var y=function(a,d){d=void 0===d?h:d;f.call(this,d);var c=this;this.communicationType_="POST_MESSAGE";a.addEventListener("message",function(a){if("object"===typeof a.data){var d=a.data;p.isValidSerializedMessage(d)&&(d=p.deserialize(d),
a.source&&c.handleMessage(d,a.source))}})};b.inherits(y,f);y.isCompatibleContext=function(a){return!!(a&&a.addEventListener&&a.postMessage)};y.prototype.sendMessage=function(a,d){d=void 0===d?this.to:d;if(!d)throw Error("Message destination must be defined at construction time or when sending the message.");d.postMessage(a.serialize(),"*")};var A=function(a){"undefined"===typeof a&&"undefined"!==typeof window&&window&&(a=window);if("undefined"===typeof a||!a||"undefined"===typeof a.top||!a.top)return h;
if(a===a.top)return a;try{return"undefined"===typeof a.top.location.hostname?a:a.top}catch(d){return a}};var B=function(a,d,b){b=void 0===b?c.isOmidPresent:b;return(d=r(a,d))?new e(d):a.top&&b(a.top)?new y(a,a.top):null};var m=function(a){if(this.communication=void 0===a?(0,B)((0,A)(),["omid","v1_VerificationServiceCommunication"]):a)this.communication.onMessage=this.handleMessage_.bind(this);else if(a=(a=h.omid3p)&&"function"===typeof a.registerSessionObserver&&"function"===typeof a.addEventListener?
a:null)this.omid3p=a;this.remoteIntervals_=this.remoteTimeouts_=0;this.callbackMap_={};this.imgCache_=[]};m.prototype.isSupported=function(){return!!this.communication};m.prototype.registerSessionObserver=function(a,d){(0,k.assertFunction)("functionToExecute",a);this.omid3p?this.omid3p.registerSessionObserver(a,d):this.sendMessage_("addSessionListener",a,d)};m.prototype.addEventListener=function(a,d){(0,k.assertTruthyString)("eventType",a);(0,k.assertFunction)("functionToExecute",d);this.omid3p?this.omid3p.addEventListener(a,
d):this.sendMessage_("addEventListener",d,a)};m.prototype.sendUrl=function(a,d,c){(0,k.assertTruthyString)("url",a);h.document&&h.document.createElement?this.sendUrlWithImg_(a,d,c):this.sendMessage_("sendUrl",function(a){a&&d?d():!a&&c&&c()},a)};m.prototype.sendUrlWithImg_=function(a,d,c){var b=this,e=h.document.createElement("img");this.imgCache_.push(e);var g=function(a){var d=b.imgCache_.indexOf(e);0<=d&&b.imgCache_.splice(d,1);a&&a()};e.addEventListener("load",g.bind(this,d));e.addEventListener("error",
g.bind(this,c));e.src=a};m.prototype.injectJavaScriptResource=function(a,d,c){var b=this;(0,k.assertTruthyString)("url",a);h.document?this.injectJavascriptResourceUrlInDom_(a,d,c):this.sendMessage_("injectJavaScriptResource",function(e,l){e?(b.evaluateJavaScript_(l,a),d()):(g.error("Service failed to load JavaScript resource."),c())},a)};m.prototype.injectJavascriptResourceUrlInDom_=function(a,d,c){var b=h.document,e=b.body;b=b.createElement("script");b.onload=d;b.onerror=c;b.src=a;b.type="application/javascript";
e.appendChild(b)};m.prototype.evaluateJavaScript_=function(a,d){try{eval(a)}catch(C){g.error('Error evaluating the JavaScript resource from "'+d+'".')}};m.prototype.setTimeout=function(a,d){(0,k.assertFunction)("functionToExecute",a);(0,k.assertPositiveNumber)("timeInMillis",d);if(this.hasTimeoutMethods_())return h.setTimeout(a,d);var c=this.remoteTimeouts_++;this.sendMessage_("setTimeout",a,c,d);return c};m.prototype.clearTimeout=function(a){(0,k.assertPositiveNumber)("timeoutId",a);this.hasTimeoutMethods_()?
h.clearTimeout(a):this.sendOneWayMessage_("clearTimeout",a)};m.prototype.setInterval=function(a,d){(0,k.assertFunction)("functionToExecute",a);(0,k.assertPositiveNumber)("timeInMillis",d);if(this.hasIntervalMethods_())return h.setInterval(a,d);var c=this.remoteIntervals_++;this.sendMessage_("setInterval",a,c,d);return c};m.prototype.clearInterval=function(a){(0,k.assertPositiveNumber)("intervalId",a);this.hasIntervalMethods_()?h.clearInterval(a):this.sendOneWayMessage_("clearInterval",a)};m.prototype.hasTimeoutMethods_=
function(){return"function"===typeof h.setTimeout&&"function"===typeof h.clearTimeout};m.prototype.hasIntervalMethods_=function(){return"function"===typeof h.setInterval&&"function"===typeof h.clearInterval};m.prototype.handleMessage_=function(a,d){d=a.method;var c=a.guid;a=a.args;if("response"===d&&this.callbackMap_[c]){var b=(0,x)("1.2.6-iab634",a);this.callbackMap_[c].apply(this,b)}"error"===d&&window.console&&g.error(a)};m.prototype.sendOneWayMessage_=function(a,d){for(var c=[],e=1;e<arguments.length;++e)c[e-
1]=arguments[e];this.sendMessage_.apply(this,[].concat([a,null],b.arrayFromIterable(c)))};m.prototype.sendMessage_=function(a,d,c){for(var b=[],e=2;e<arguments.length;++e)b[e-2]=arguments[e];this.communication&&(e=this.communication.generateGuid(),d&&(this.callbackMap_[e]=d),b=new p(e,"VerificationService."+a,"1.2.6-iab634",(0,z)("1.2.6-iab634",b)),this.communication.sendMessage(b))};(0,function(a,d,c){if(c=void 0===c?"undefined"===typeof t?null:t:c)a=a.split("."),a.slice(0,a.length-1).reduce(q,c)[a[a.length-
1]]=d})("OmidVerificationClient",m)},"undefined"===typeof exports?void 0:exports);
(function(){function n(){var c={location:{protocol:"https:"}};c.parent=c;c.top=c;c.document={getElementById:function(){},createElement:function(){},body:{insertBefore:function(){}},querySelectorAll:function(){return[]}};return c}function t(c){var b={src:"dv-measurements",main:309},g=b.eval&&b.rate&&100*Math.random()<b.rate?b.eval:b.main;return g&&[c,"//cdn.doubleverify.com/",b.src,g,".js"].join("")}function q(c,b){var e=f.getReportUrl(f.ErrorTypes.LoadTagError,"failedToLoadDVM",!0),l=c&&(c.contentDocument||
c.contentWindow&&c.contentWindow.document||frames&&frames[c.name]&&frames[c.name].document);b='<html><head><script type="text/javascript">('+function(){window.$dv=window.parent.$dv;window.$dv.isFrameSupported=!0;window.$frmId=Math.random().toString(36)+Math.random().toString(36);window.dv_flow=2}.toString()+')();\x3c/script></head><body><script type="text/javascript">('+function(c,b){if(c){var e=document.createElement("script");e.src=c;e.onerror=function(){(new Image(1,1)).src=b};document.body.appendChild(e)}}.toString()+
')("'+b+'", "'+e+'");\x3c/script></body></html>';l?(l.open(),l.write(b),l.close()):(l=encodeURIComponent(b.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,"")),c.src='javascript: (function(){document.open();document.domain="'+window.document.domain+"\";document.write('"+l+"');})()")}function u(c){var b=Math.floor(1E12*(Math.random()+"")),g=document.createElement("iframe");g.name=g.id="iframe_"+b;g.setAttribute("data-dv-frm",b);g.width="0";g.height="0";g.style.display="none";g.src="about:blank";document.currentScript?
document.currentScript.parentNode.insertBefore(g,document.currentScript):document.body?document.body.insertBefore(g,document.body.firstChild):(b=document.getElementsByTagName("head")[0],b.insertBefore(g,b.firstChild));q(g,c)}function r(c,b){$frmId=Math.random().toString(36)+Math.random().toString(36);c.injectJavaScriptResource(b,function(){},function(){var b=f.getReportUrl(f.ErrorTypes.OmidLoadTagError,"",!0);c.sendUrl(b)})}function b(c){try{(new Image(1,1)).src=c}catch(e){}}function k(c,e,g){c||
(c={message:"error undefined"});c=["https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=",g,"&dvp_jsErrMsg=",c.message,"&napr=",c.message,"&cerrt=",e,"&dvp_idle=",Number(v)].join("");c=encodeURI(c);w.isSupported()?w.report(c):b(c)}dv_flow=2;var v=!1;"undefined"===typeof window&&(v=!0);var w={omidObject:null,report:function(c){this.omidObject&&"function"===typeof this.omidObject.sendUrl?this.omidObject.sendUrl(c):b(c)},isSupported:function(){try{return this.omidObject||
(this.omidObject=new OmidVerificationClient["1.2.6-iab634"]),this.omidObject.isSupported()}catch(e){var c=f.getReportUrl(f.ErrorTypes.OmidUnexpectedError,"isSupported__"+e.message,!1);this.report(c);return!1}},execute:function(){var c=this.omidObject;"undefined"!=typeof $dv?($dv.tagsCounter=$dv.tagsCounter||0,$dv.tagsCounter++,$dv.omidJsClient=c):$dv={omidJsClient:c,tags:{},tagsCounter:1};($dv.isDomlessEnvironment=v)&&(window=n());c.registerSessionObserver(function(b){try{switch(b.type){case "sessionStart":$dv.omidSessionData=
b;$dv.omidAccessMode=b&&b.data&&b.data.context&&b.data.context.accessMode;try{$dv.omidSessionStartTime=Date.now?Date.now():(new Date).getTime()}catch(h){var e=f.getReportUrl(f.ErrorTypes.OmidUnexpectedError,"Date.now__"+h.message,!1);c.sendUrl(e)}var l=t("https:");if($dv.isDomlessEnvironment)r(c,l);else try{u(l)}catch(h){e=f.getReportUrl(f.ErrorTypes.OmidUnexpectedError,"injectScriptSteps__"+h.message,!1),c.sendUrl(e),r(c,l)}break;case "sessionError":e=f.getReportUrl(f.ErrorTypes.OmidSessionError,
b.data&&b.data.message||"",!0),c.sendUrl(e)}}catch(h){b=f.getReportUrl(f.ErrorTypes.OmidUnexpectedLostImpError,"omidCallback__"+h.message,!0),c.sendUrl(b)}},"doubleverify.com-omid")}},z={execute:function(){try{window.$dv=window.$dv||{tags:{}};var b=document.currentScript&&0==document.currentScript.src.indexOf("http:")?"http:":"https:";var e=t(b);u(e)}catch(g){f.report(f.ErrorTypes.InjectTagError,g.message,!0)}}},x="";try{x=window&&window.document&&window.document.currentScript&&window.document.currentScript.src}catch(c){}try{var p=
function(b){function c(b){var c={};b.split("&").forEach(function(b){b=b.trim().split("=");2===b.length&&(c[b[0].trim()]=b[1].trim())});return c}function g(b){var c={};["cmp","ctx","sid","plc"].forEach(function(e){b.hasOwnProperty(e)&&(c["dvp_"+e]=b[e])});return c}var l={},f={};(function(b){if(b){var e="";b=b.trim().split("?");2===b.length&&(e=b[1]);e&&(l=c(e),f=g(l))}})(b);return{toQueryString:function(b){var c="",e;for(e in b)b.hasOwnProperty(e)&&(c&&(c+="&"),c=[c,e,"=",b[e]].join(""));return c},
getQueryStringParams:function(){return l},getQueryStringClientParams:function(){return f}}}(x);var f=function(){function c(b,c,f){c=(c=c&&c&&c.trim().replace(/\n/g,"").replace(/\r/g,"").replace(/\t/g,"").replace(/\|/g,""))&&encodeURIComponent(c)||"";c=e.replace(/__ERR_MSG_PLACEHOLDR__/g,[b.message,c].join("__"));c=c.replace(/__CLIENT_ERROR_TYPE_PLACEHOLDR__/g,b.id);f&&(c+="&dvp_isLostImp=1");return c}var e="";e=["https://tps.doubleverify.com/visit.jpg?",[p.toQueryString({ctx:818052,cmp:1619415,dvtagver:"6.1.src",
dvp_jsErrMsg:"__ERR_MSG_PLACEHOLDR__",dvp_idle:Number(v),napr:"__ERR_MSG_PLACEHOLDR__",cerrt:"__CLIENT_ERROR_TYPE_PLACEHOLDR__"}),p.toQueryString(p.getQueryStringClientParams())].join("&")].join("");return{ErrorTypes:{InjectTagError:{id:1,message:"InjectTagError"},LoadTagError:{id:2,message:"LoadTagError"},UnexpectedLostImpError:{id:4,message:"UnexpectedLostImpError"},OmidSessionError:{id:8,message:"OmidSessionError"},OmidUnexpectedLostImpError:{id:16,message:"OmidUnexpectedLostImpError"},OmidLoadTagError:{id:32,
message:"OmidLoadTagError"},OmidInjectTagError:{id:64,message:"OmidInjectTagError "},UnexpectedError:{id:128,message:"UnexpectedError"},OmidUnexpectedError:{id:256,message:"OmidUnexpectedError"}},report:function(e,f,h){b(c(e,f,h))},getReportUrl:c}}()}catch(c){k(c,128,0)}try{(w.isSupported()?w:z).execute()}catch(c){f?f.report(f.ErrorTypes.UnexpectedLostImpError,c.message,!0):k(c,4,1)}})();
