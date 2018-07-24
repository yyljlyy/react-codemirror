(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"./node_modules/codemirror/mode/xquery/xquery.js":function(e,t,n){!function(e){"use strict";e.defineMode("xquery",function(){var e=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"axis_specifier",style:"qualifier"},i={",":{type:"punctuation",style:null}},a=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],o=0,s=a.length;o<s;o++)i[a[o]]=e(a[o]);for(var c=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"],o=0,s=c.length;o<s;o++)i[c[o]]=n;for(var u=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"],o=0,s=u.length;o<s;o++)i[u[o]]=t;for(var l=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"],o=0,s=l.length;o<s;o++)i[l[o]]=r;return i}();function t(e,t,n){return t.tokenize=n,n(e,t)}function n(f,x){var g=f.next(),y=!1,h=function(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}(f);if("<"==g){if(f.match("!--",!0))return t(f,x,s);if(f.match("![CDATA",!1))return x.tokenize=c,"tag";if(f.match("?",!1))return t(f,x,u);var v=f.eat("/");f.eatSpace();for(var k,b="";k=f.eat(/[^\s\u00a0=<>\"\'\/?]/);)b+=k;return t(f,x,function(e,t){return function(r,i){return r.eatSpace(),t&&r.eat(">")?(p(i),i.tokenize=n,"tag"):(r.eat("/")||d(i,{type:"tag",name:e,tokenize:n}),r.eat(">")?(i.tokenize=n,"tag"):(i.tokenize=o,"tag"))}}(b,v))}if("{"==g)return d(x,{type:"codeblock"}),null;if("}"==g)return p(x),null;if(l(x))return">"==g?"tag":"/"==g&&f.eat(">")?(p(x),"tag"):"variable";if(/\d/.test(g))return f.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===g&&f.eat(":"))return d(x,{type:"comment"}),t(f,x,r);if(h||'"'!==g&&"'"!==g){if("$"===g)return t(f,x,a);if(":"===g&&f.eat("="))return"keyword";if("("===g)return d(x,{type:"paren"}),null;if(")"===g)return p(x),null;if("["===g)return d(x,{type:"bracket"}),null;if("]"===g)return p(x),null;var w=e.propertyIsEnumerable(g)&&e[g];if(h&&'"'===g)for(;'"'!==f.next(););if(h&&"'"===g)for(;"'"!==f.next(););w||f.eatWhile(/[\w\$_-]/);var z=f.eat(":");!f.eat(":")&&z&&f.eatWhile(/[\w\$_-]/),f.match(/^[ \t]*\(/,!1)&&(y=!0);var I=f.current();return w=e.propertyIsEnumerable(I)&&e[I],y&&!w&&(w={type:"function_call",style:"variable def"}),function(e){return m(e,"xmlconstructor")}(x)?(p(x),"variable"):("element"!=I&&"attribute"!=I&&"axis_specifier"!=w.type||d(x,{type:"xmlconstructor"}),w?w.style:"variable")}return t(f,x,i(g))}function r(e,t){for(var n,r=!1,i=!1,a=0;n=e.next();){if(")"==n&&r){if(!(a>0)){p(t);break}a--}else":"==n&&i&&a++;r=":"==n,i="("==n}return"comment"}function i(e,t){return function(r,a){var o;if(function(e){return m(e,"string")}(a)&&r.current()==e)return p(a),t&&(a.tokenize=t),"string";if(d(a,{type:"string",name:e,tokenize:i(e,t)}),r.match("{",!1)&&f(a))return a.tokenize=n,"string";for(;o=r.next();){if(o==e){p(a),t&&(a.tokenize=t);break}if(r.match("{",!1)&&f(a))return a.tokenize=n,"string"}return"string"}}function a(e,t){var r=/[\w\$_-]/;if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(r),e.match(":=",!1)||e.eat(":");return e.eatWhile(r),t.tokenize=n,"variable"}function o(e,r){var a=e.next();return"/"==a&&e.eat(">")?(f(r)&&p(r),l(r)&&p(r),"tag"):">"==a?(f(r)&&p(r),"tag"):"="==a?null:'"'==a||"'"==a?t(e,r,i(a,o)):(f(r)||d(r,{type:"attribute",tokenize:o}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(p(r),r.tokenize=n),"attribute")}function s(e,t){for(var r;r=e.next();)if("-"==r&&e.match("->",!0))return t.tokenize=n,"comment"}function c(e,t){for(var r;r=e.next();)if("]"==r&&e.match("]",!0))return t.tokenize=n,"comment"}function u(e,t){for(var r;r=e.next();)if("?"==r&&e.match(">",!0))return t.tokenize=n,"comment meta"}function l(e){return m(e,"tag")}function f(e){return m(e,"attribute")}function m(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function d(e,t){e.stack.push(t)}function p(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||n}return{startState:function(){return{tokenize:n,cc:[],stack:[]}},token:function(e,t){if(e.eatSpace())return null;var n=t.tokenize(e,t);return n},blockCommentStart:"(:",blockCommentEnd:":)"}}),e.defineMIME("application/xquery","xquery")}(n("./node_modules/codemirror/lib/codemirror.js"))}}]);