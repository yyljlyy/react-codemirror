(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./node_modules/codemirror/mode/eiffel/eiffel.js":function(e,t,n){!function(e){"use strict";e.defineMode("eiffel",function(){function e(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0;return t}var t=e(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),n=e([":=","and then","and","or","<<",">>"]);function r(e,t){if(e.eatSpace())return null;var n=e.next();return'"'==n||"'"==n?function(e,t,n){return n.tokenize.push(e),e(t,n)}(function(e,t,n){return function(r,i){for(var o,a=!1;null!=(o=r.next());){if(o==e&&(n||!a)){i.tokenize.pop();break}a=!a&&"%"==o}return t}}(n,"string"),e,t):"-"==n&&e.eat("-")?(e.skipToEnd(),"comment"):":"==n&&e.eat("=")?"operator":/[0-9]/.test(n)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"ident"):/[a-zA-Z_0-9]/.test(n)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"ident"):/[=+\-\/*^%<>~]/.test(n)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}return{startState:function(){return{tokenize:[r]}},token:function(e,r){var i=r.tokenize[r.tokenize.length-1](e,r);if("ident"==i){var o=e.current();i=t.propertyIsEnumerable(e.current())?"keyword":n.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(o)?"tag":/^0[bB][0-1]+$/g.test(o)?"number":/^0[cC][0-7]+$/g.test(o)?"number":/^0[xX][a-fA-F0-9]+$/g.test(o)?"number":/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(o)?"number":/^[0-9]+$/g.test(o)?"number":"variable"}return i},lineComment:"--"}}),e.defineMIME("text/x-eiffel","eiffel")}(n("./node_modules/codemirror/lib/codemirror.js"))}}]);