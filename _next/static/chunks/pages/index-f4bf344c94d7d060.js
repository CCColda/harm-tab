(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3028)}])},3028:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return aF}});var d,e,f,g,h,i,j,k,l,m=c(5893),n=c(9008),o=c.n(n),p=c(7294),q=c(6042),r=c(9396),s=c(9626),t=c.n(s),u=(0,p.createContext)({data:{ready:!1},fn:{setNoteLength:function(){},setSheet:function(){},setLayout:function(){},setMode:function(){},setHighlightedChord:function(){}}}),v=function(a){var b=(0,p.useState)(a.preparsedData.ready?a.preparsedData:{ready:!1}),c=b[0],d=b[1];return(0,p.useEffect)(function(){c.ready||fetch(a.layoutPath,{method:"GET",headers:{Accept:"application/json"}}).then(function(a){return 200==a.status?a.text():""}).then(function(a){a&&d(function(b){var c;return(0,r.Z)((0,q.Z)({},b),{ready:!0,mode:"note",layouts:(c=a,Object.values(JSON.parse(c).layouts)),noteLength:"8",highlightedChord:null,sheet:{type:"unset",title:"",key:"",layout:"",meter:""}})})})},[a.layoutPath,a.preparsedData,c.ready]),(0,m.jsx)(u.Provider,{value:{data:c,fn:{setNoteLength:function(a){return c.ready&&d((0,r.Z)((0,q.Z)({},c),{noteLength:a}))},setSheet:function(a){return c.ready&&d((0,r.Z)((0,q.Z)({},c),{sheet:a}))},setLayout:function(a){return c.ready&&d((0,r.Z)((0,q.Z)({},c),{sheet:(0,r.Z)((0,q.Z)({},c.sheet),{layout:a})}))},setMode:function(a){return c.ready&&d((0,r.Z)((0,q.Z)({},c),{mode:a}))},setHighlightedChord:function(a){return c.ready&&d((0,r.Z)((0,q.Z)({},c),{highlightedChord:a}))}}},children:a.children})},w=function(a){var b=(0,p.useContext)(u),c=(0,p.useState)(0),d=c[0],e=c[1];return(0,m.jsxs)("div",{className:t().layoutChooser,children:[(0,m.jsx)("h1",{children:"Choose a layout"}),(0,m.jsx)("select",{className:t().layouts,onChange:function(a){return e(Number(a.target.value))},children:b.data.ready&&b.data.layouts.map(function(a,b){return(0,m.jsx)("option",{value:b,defaultChecked:0==b,children:a.label},b)})}),(0,m.jsx)("button",{onClick:function(a){return b.data.ready&&b.fn.setSheet((0,r.Z)((0,q.Z)({},b.data.sheet),{type:b.data.layouts[d].type,key:b.data.layouts[d].key,layout:b.data.layouts[d].label,meter:"4/4",chords:[],title:""}))},children:"Next"})]})},x=c(4924),y=Object.freeze((d={},(0,x.Z)(d,0,{in:"",out:""}),(0,x.Z)(d,1,{in:"↙",out:"↖"}),(0,x.Z)(d,2,{in:"⤦",out:"⤣"}),(0,x.Z)(d,3,{in:"⇙",out:"⇖"}),d)),z=Object.freeze((e={},(0,x.Z)(e,1,{in:"①",out:"1"}),(0,x.Z)(e,2,{in:"②",out:"2"}),(0,x.Z)(e,3,{in:"③",out:"3"}),(0,x.Z)(e,4,{in:"④",out:"4"}),(0,x.Z)(e,5,{in:"⑤",out:"5"}),(0,x.Z)(e,6,{in:"⑥",out:"6"}),(0,x.Z)(e,7,{in:"⑦",out:"7"}),(0,x.Z)(e,8,{in:"⑧",out:"8"}),(0,x.Z)(e,9,{in:"⑨",out:"9"}),(0,x.Z)(e,10,{in:"⑩",out:"10"}),e)),A=function(a,b){var c;return b&&"".concat(null!==(f=null===(c=y[b])|| void 0===c?void 0:c[a])&& void 0!==f?f:"")||""},B=function(a,b){var c;return null!==(h=b&&"".concat(null!==(g=null===(c=y[b])|| void 0===c?void 0:c[a])&& void 0!==g?g:"","\xa0").concat(b))&& void 0!==h?h:""},C=function(a,b){var c;return null!==(i=null===(c=z[b])|| void 0===c?void 0:c[a])&& void 0!==i?i:"".concat(b)},D=Object.freeze((j={},(0,x.Z)(j,0,["C"]),(0,x.Z)(j,.5,["=C","_D"]),(0,x.Z)(j,1,["D"]),(0,x.Z)(j,1.5,["=D","_E"]),(0,x.Z)(j,2,["E"]),(0,x.Z)(j,2.5,["=E","_F"]),(0,x.Z)(j,3,["F"]),(0,x.Z)(j,3.5,["=F","_G"]),(0,x.Z)(j,4,["G"]),(0,x.Z)(j,4.5,["=G","_A"]),(0,x.Z)(j,5,["A"]),(0,x.Z)(j,5.5,["=A","_B"]),(0,x.Z)(j,6,["B"]),(0,x.Z)(j,6.5,["=B","_C"]),j)),E=Object.freeze((k={},(0,x.Z)(k,0,"C"),(0,x.Z)(k,.5,"Db"),(0,x.Z)(k,1,"D"),(0,x.Z)(k,1.5,"Eb"),(0,x.Z)(k,2,"E"),(0,x.Z)(k,2.5,"Fb"),(0,x.Z)(k,3,"F"),(0,x.Z)(k,3.5,"Gb"),(0,x.Z)(k,4,"G"),(0,x.Z)(k,4.5,"Ab"),(0,x.Z)(k,5,"A"),(0,x.Z)(k,5.5,"Bb"),(0,x.Z)(k,6,"B"),(0,x.Z)(k,6.5,"Cb"),k)),F=Object.freeze("⁰\xb9\xb2\xb3⁴⁵⁶⁷⁸⁹"),G=function(a,b){return a.split("").filter(function(a){return a==b}).length},H=function(a){return(a.match(/[=_]?[cdefgab][,']*/g)?1:0)+G(a,"'")-G(a,",")},I=function(a){var b=H(a),c=a.toUpperCase().match(/[=_]?[CDEFGAB]/);if(!c)return -1;var d=Number(Object.entries(D).find(function(a){return a[1].includes(c[0])})[0]);return(b+4)*7+d},J=function(a){var b,c=!!a.match(/_[cdefgab].*/i),d=!!a.match(/=[cdefgab].*/i),e=H(a),f=a.match(/[_=]?([cdefgab]).*/i);return f&&f[1]?f[1].toUpperCase()+(c?"♭":"")+(d?"♯":"")+(b="".concat(e+4),"".concat(b).split("").map(function(a){return null!==(l=F[Number(a)])&& void 0!==l?l:a}).join("")):a},K=function(a){var b=H(a),c=a.toUpperCase().match(/[=_]?[CDEFGAB]/);if(!c)return"";var d=Number(Object.entries(D).find(function(a){return a[1].includes(c[0])})[0]);return"".concat(E[d]).concat(b+4)},L=function(a){var b=Number(a);return Number.isInteger(64/b)?"".concat(64/b,"n"):"".concat(64/Math.floor(2*b/3),"n.")},M=c(8170),N=c.n(M),O=function(a){var b,c,d=null!==(b=a.data.find(function(a){return"out"==a.dir&&!a.bend}))&& void 0!==b?b:{dir:"out",note:"C"},e=null!==(c=a.data.find(function(a){return"in"==a.dir&&!a.bend}))&& void 0!==c?c:{dir:"in",note:"C"},f=a.data.filter(function(a){return"out"==a.dir}).map(function(a){return(0,r.Z)((0,q.Z)({},a),{bend:a.bend||0})}).sort(function(a,b){return b.bend-a.bend}),g=a.data.filter(function(a){return"in"==a.dir}).map(function(a){return(0,r.Z)((0,q.Z)({},a),{bend:a.bend||0})}).sort(function(a,b){return a.bend-b.bend}),h=f.length>1,i=g.length>1;return(0,m.jsxs)("span",{className:N().hole,children:[(0,m.jsx)("p",{className:N().note,children:a.number}),(0,m.jsxs)("span",{className:N().buttonarea,children:[(0,m.jsx)("button",{name:"ho_".concat(a.number),onClick:function(b){return!h&&a.onSelectSound((0,q.Z)({position:a.number},d))},children:J(d.note)}),(0,m.jsx)("label",{className:"".concat(N().bendpanel," ").concat(N().out),htmlFor:"ho_".concat(a.number),children:h&&f.map(function(b,c){return(0,m.jsxs)("button",{onClick:function(c){return a.onSelectSound((0,q.Z)({position:a.number},b))},children:[b.bend&&B(b.dir,b.bend)||""," ",J(b.note)]},c)})})]}),(0,m.jsxs)("span",{className:N().buttonarea,children:[(0,m.jsx)("button",{name:"hi_".concat(a.number),onClick:function(b){return!i&&a.onSelectSound((0,q.Z)({position:a.number},e))},children:J(e.note)}),(0,m.jsx)("label",{className:"".concat(N().bendpanel," ").concat(N().in),htmlFor:"hi_".concat(a.number),children:i&&g.map(function(b,c){return(0,m.jsxs)("button",{onClick:function(c){return a.onSelectSound((0,q.Z)({position:a.number},b))},children:[b.bend&&B(b.dir,b.bend)||""," ",J(b.note)]},c)})})]})]})},P=function(a){return(0,m.jsx)("div",{className:N().harmonica,children:(0,m.jsx)("div",{className:N().body,children:Array(10).fill(0).map(function(b,c){var d,e;return(0,m.jsx)(O,{onSelectSound:null!==(d=a.onSelectSound)&& void 0!==d?d:function(a){},number:c+1,data:null!==(e=a.layout&&a.layout[c+1])&& void 0!==e?e:[]},c)})})})},Q=c(1104),R=c.n(Q),S=c(9815);function T(a,b,c){return(0,r.Z)((0,q.Z)({},a),{chords:(0,S.Z)(a.chords).concat([{type:"chord",notes:b,duration:c}])})}var U=function(a){var b=(0,p.useContext)(u);return(0,m.jsxs)("div",{className:"".concat(R().musicalElements),children:[(0,m.jsx)("button",{onClick:function(a){return b.data.ready&&"diatonic"==b.data.sheet.type&&b.fn.setSheet((0,r.Z)((0,q.Z)({},b.data.sheet),{chords:b.data.sheet.chords.slice(0,-1)}))},children:"⇤"}),(0,m.jsx)("button",{onClick:function(a){var c,d;return b.data.ready&&"diatonic"==b.data.sheet.type&&b.fn.setSheet((c=b.data.sheet,d=b.data.noteLength,(0,r.Z)((0,q.Z)({},c),{chords:(0,S.Z)(c.chords).concat([{type:"silence",duration:d}])})))},children:"\uD834\uDD3D"}),(0,m.jsx)("button",{onClick:function(a){var c;return b.data.ready&&"diatonic"==b.data.sheet.type&&b.fn.setSheet((c=b.data.sheet,(0,r.Z)((0,q.Z)({},c),{chords:(0,S.Z)(c.chords).concat([{type:"bar"}])})))},children:"|"})]})},V=function(a,b){var c,d,e=function(c){if(b.chordCallback&&h.push(a.getContext().setTimeout(function(){return b.chordCallback(c,b.chords[c],b.durations[c])},g)),!b.durations[c])return"continue";var d=L(b.durations[c]);if(!b.chords[c].includes("z")){var e=b.chords[c].map(function(a){return K(a)}).filter(function(a){return!!a});f.triggerAttackRelease(e,Array(e.length).fill(d),g)}g+=a.Time(d).toSeconds()},f=new a.PolySynth().toDestination();f.sync();for(var g=0,h=[],i=0;i<b.chords.length;++i)e(i);g+=null!==(c=b.timeMargin)&& void 0!==c?c:1;var j=null;return{promise:new Promise(function(b,c){j=b,d=a.getContext().setTimeout(function(){f.disconnect(),f.dispose(),a.Transport.cancel(),a.Transport.stop(),console.log("disposed"),j(!0)},g),a.Transport.start()}),stop:function(){d&&a.getContext().clearTimeout(d);var b=!0,c=!1,e=void 0;try{for(var g,i=h[Symbol.iterator]();!(b=(g=i.next()).done);b=!0){var k=g.value;a.getContext().clearTimeout(k)}}catch(l){c=!0,e=l}finally{try{b||null==i.return||i.return()}finally{if(c)throw e}}f.disconnect(),f.dispose(),a.Transport.cancel(),a.Transport.stop(),j(!1)}}},W=c(9045),X=c.n(W),Y=Object.freeze({promise:null,stop:function(){}}),Z=function(a){var b=(0,p.useContext)(u),c=(0,p.useContext)(ai),d=(0,p.useState)(Y),e=d[0],f=d[1],g=(0,p.useState)(!1),h=g[0],i=g[1],j=function(){if(b.data.ready&&"diatonic"==b.data.sheet.type&&!h){i(!0);var a,d=V(c,{chords:b.data.sheet.chords.map(function(a){switch(a.type){case"bar":return[];case"silence":return["z"];case"chord":return a.notes.map(function(a){return a.note})}}),durations:b.data.sheet.chords.map(function(a){return"bar"==a.type?"":a.duration}),chordCallback:function(a){return b.fn.setHighlightedChord(a)}});null===(a=d.promise)|| void 0===a||a.then(function(a){i(!1),b.fn.setHighlightedChord(null)}),f(d)}};return(0,m.jsxs)("div",{className:X().musicControl+(h?" "+X().playing:""),children:[(0,m.jsx)("button",{className:X().play,onClick:function(a){c&&(i(!0),j())}}),(0,m.jsx)("button",{className:X().stop,onClick:function(a){c&&(i(!1),e.stop())}})]})},$=c(1714),_=c.n($),aa=Object.freeze([{symbol:"\uD834\uDD63",value:1,display:"1/64"},{symbol:"\uD834\uDD62",value:2,display:"1/32"},{symbol:"\uD834\uDD61",value:4,display:"1/16"},{symbol:"\uD834\uDD60",value:8,display:"1/8",default:!0},{symbol:"\uD834\uDD5F",value:16,display:"1/4"},{symbol:"\uD834\uDD5F.",value:24,display:"3/8"},{symbol:"\uD834\uDD5E",value:32,display:"1/2"},{symbol:"\uD834\uDD5E.",value:48,display:"3/4"},{symbol:"\uD834\uDD5D",value:64,display:"1/1"},{symbol:"\uD834\uDD5D.",value:96,display:"3/2"},]),ab=function(a){var b,c=(0,p.useContext)(u);return(0,m.jsxs)("label",{className:_().notelengths,children:[(0,m.jsx)("input",{type:"checkbox"}),(0,m.jsxs)("span",{className:_().togglePanel,children:[(0,m.jsx)("span",{className:_().icon,children:"\uD834\uDD5F"}),(0,m.jsx)("span",{className:_().toggle}),(0,m.jsx)("div",{className:_().list,onChange:function(a){return c.fn.setNoteLength(a.target.value)},children:aa.map(function(a,c){return(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"radio",name:"notelength",value:"".concat(a.value),defaultChecked:null!==(b=a.default)&& void 0!==b&&b}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:a.symbol}),(0,m.jsx)("span",{children:a.display})]})]},c)})})]})]})},ac=c(174),ad=c.n(ac),ae=function(a){return(0,m.jsxs)("div",{className:ad().threeDotMenu,children:[(0,m.jsxs)("button",{className:ad().button,children:[(0,m.jsx)("div",{}),(0,m.jsx)("div",{}),(0,m.jsx)("div",{})]}),(0,m.jsx)("div",{className:ad().list})]})},af=c(9914),ag=function(a){var b=(0,p.useRef)(null),c=(0,p.useState)(null),d=(c[0],c[1]);return(0,p.useEffect)(function(){if(b.current){var c;d((0,af.renderAbc)(b.current,a.abc,null!==(c=a.options)&& void 0!==c?c:{}))}return function(){}},[b,a.abc,a.options]),(0,m.jsx)("div",{ref:b})},ah=c(828),ai=p.createContext(null),aj=function(a){var b=a.fallback,d=a.children,e=(0,ah.Z)(p.useState(null),2),f=e[0],g=e[1];return p.useEffect(function(){c.e(878).then(c.bind(c,4878)).then(function(a){return g(a)})},[]),(0,m.jsx)(ai.Provider,{value:f,children:b&&!f?b:d})},ak=function(a){var b=(0,p.useContext)(u),c=b.data.ready&&"unset"!=b.data.sheet.type&&b.data.layouts.some(function(a){return a.label==(b.data.ready&&b.data.sheet.layout)});return(0,m.jsx)(m.Fragment,{children:c?a.children:a.fallback})};function al(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:void 0;(0,p.useEffect)(function(){if(a)return a.addEventListener(b,c),function(){return a.removeEventListener(b,c)}},d)}var am=Object.freeze(Array(80).fill(0).map(function(a,b){return String.fromCharCode(43+b)})),an=Object.freeze("!"),ao=Object.freeze("#"),ap=Object.freeze("$"),aq=Object.freeze("~"),ar=Object.freeze("|");function as(a){var b;return am[("out"==a.dir?0:40)+(a.position-1)*4+(null!==(b=a.bend)&& void 0!==b?b:0)]}function at(a){var b=am.findIndex(function(b){return b==a});return{bend:b%4,dir:b>=40?"in":"out",position:Math.floor(b%40/4)+1}}var au=c(4841),av=c.n(au),aw=function(a){var b=(0,p.useContext)(u);return(0,m.jsxs)("div",{className:av().chordSwitcher,children:[(0,m.jsx)("button",{className:av().note+(b.data.ready&&"note"==b.data.mode?" "+av().active:""),onClick:function(a){return b.fn.setMode("note")},children:"+"}),(0,m.jsx)("button",{className:av().chord+(b.data.ready&&"chord"==b.data.mode?" "+av().active:""),onClick:function(a){return b.fn.setMode("chord")},children:"\uD834\uDD5F+"})]})},ax=c(7041),ay=c.n(ax),az=c(7568),aA=c(4051),aB=c.n(aA),aC=function(a){var b,c=a.editorRef,d=(0,p.useState)(!1),e=d[0],f=d[1];al(c.current,"onfullscreenchange",function(a){return c&&f(!!document.fullscreenElement)},[c]);var g=(b=(0,az.Z)(aB().mark(function a(){var b;return aB().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e&&document.fullscreenElement)){a.next=6;break}return a.next=3,document.exitFullscreen();case 3:f(!1),a.next=10;break;case 6:return a.next=9,null===(b=c.current)|| void 0===b?void 0:b.requestFullscreen({navigationUI:"auto"});case 9:f(!0);case 10:case"end":return a.stop()}},a)})),function(){return b.apply(this,arguments)});return(0,m.jsx)("button",{onClick:g,children:"⛶"})},aD=function(a){var b,c,d,e,f=(0,p.useContext)(u),g=(0,p.useState)(0),h=g[0],i=g[1],j=(0,p.useRef)(null),k=(0,p.useRef)(null);return al(window,"resize",function(a){return j&&i(j.current.getBoundingClientRect().width)},[j]),f.data.ready&&(0,m.jsxs)("div",{ref:k,className:ay().editor,children:[(0,m.jsxs)("header",{children:[(0,m.jsx)("button",{onClick:function(a){return window.open("?"+function(a){if(a.ready){var b,c,d=a.layouts.find(function(b){return b.label==a.sheet.layout});if(d){switch(d.type){case"diatonic":if("diatonic"!=a.sheet.type)throw Error("Sheet type doesn't match layout type");c=["D"+d.sign,d.label,Object.entries(b=d.layout).map(function(a){var b=(0,ah.Z)(a,2),c=b[0];return b[1].map(function(a){return as((0,r.Z)((0,q.Z)({},a),{position:Number(c)}))+a.note}).join(an)}).join(an),[a.sheet.title,a.sheet.meter,a.sheet.key].join(an),a.sheet.chords.map(function(a){switch(a.type){case"bar":return ar;case"silence":return aq+a.duration;case"chord":return a.notes.map(function(a){return as(a)}).join(ap)+a.duration}}).join(an)];break;case"chromatic":c=["C"]}return encodeURI(c.join(ao))}}}(f.data))},children:"\uD83D\uDD17"}),(0,m.jsx)(aC,{editorRef:k}),(0,m.jsx)(Z,{}),(0,m.jsx)(ae,{})]}),(0,m.jsx)("main",{children:(0,m.jsx)("div",{className:ay().sheetWrapper,ref:j,children:(0,m.jsx)(ag,{abc:f.data.ready&&"diatonic"==f.data.sheet.type&&(b=f.data.sheet,c=8,d=f.data.highlightedChord,e=(function(a,b){for(var c=[],d=0;d<a.length;d+=b)c.push(a.slice(d,Math.min(d+b,a.length)));return c})(b.chords,c).map(function(a,b){var e=a.map(function(a){switch(a.type){case"bar":return"|";case"silence":return"z"+a.duration;case"chord":return"["+a.notes.map(function(a){return a.note}).join("")+"]"+a.duration}});null!==d&&Math.floor(d/c)==b&&(e[d%c]="!mark!"+e[d%c]);var f=a.map(function(a){switch(a.type){case"bar":return"|";case"silence":return"";case"chord":return(0,S.Z)(a.notes).sort(function(a,b){return I(a.note)-I(b.note)}).map(function(a){return A(a.dir,a.bend)+C(a.dir,a.position)}).join("")}});return e.join(" ")+"\nw: "+f.join(" ")}).join("\n"),["X:1","T:".concat(b.title),"M:".concat(b.meter),"L:1/64","K:".concat(b.key),e].join("\n"))||"",options:{initialClef:!0,staffwidth:h,wrap:{minSpacing:1.5,maxSpacing:2,preferredMeasuresPerLine:4},selectTypes:["note"]}})})}),(0,m.jsxs)("footer",{children:[(0,m.jsx)("span",{className:ay().harmonicaWrapper,children:(0,m.jsx)(P,{layout:f.data.layouts.find(function(a){return a.label==(f.data.ready&&f.data.sheet.layout)}).layout,onSelectSound:function(a){var b,c,d,e;return f.data.ready&&f.fn.setSheet("note"==f.data.mode?T(f.data.sheet,[a],f.data.noteLength):(b=f.data.sheet,c=[a],d=f.data.noteLength,"chord"==(e=b.chords[b.chords.length-1]).type?(0,r.Z)((0,q.Z)({},b),{chords:(0,S.Z)(b.chords.slice(0,-1)).concat([{type:"chord",notes:(0,S.Z)(e.notes).concat((0,S.Z)(c)),duration:e.duration}])}):T(b,c,d)))}})}),(0,m.jsxs)("span",{className:ay().music,children:[(0,m.jsx)(ab,{}),(0,m.jsx)(U,{}),(0,m.jsx)(aw,{})]})]})]})},aE=c(1163);function aF(){var a=(0,aE.useRouter)(),b=function(a){var b=decodeURI(a);try{if("D"===b[0]){var c,d,e=b.split(ao),f=e[3].split(an),g=e[4].split(an),h=e[1],i=(d=(c=e[2]).split(an).map(function(a){return(0,r.Z)((0,q.Z)({},at(a[0])),{note:a.slice(1)})}),Object.fromEntries(Array(10).fill(0).map(function(a,b){return[b+1,d.filter(function(a){return a.position==b+1}).sort(function(a,b){return a.bend-b.bend})]})));return{ready:!0,mode:"note",layouts:[{type:"diatonic",sign:e[0].slice(1),label:h,layout:i}],noteLength:"8",highlightedChord:null,sheet:{type:"diatonic",title:f[0],meter:f[1],key:f[2],chords:g.map(function(a){if(a.startsWith(ar))return{type:"bar"};if(a.startsWith(aq))return{type:"silence",duration:a.slice(aq.length)};var b=a.slice(0,1).split(ap);return console.dir(b),{type:"chord",notes:b.map(function(a){var b=at(a);return console.log("Searching for "+JSON.stringify(b)+" ("+a+")"),(0,r.Z)((0,q.Z)({},b),{note:i[b.position].find(function(a){return a.bend==b.bend&&a.dir==b.dir}).note})}),duration:a.slice(1)}}),layout:h}}}return{ready:!1}}catch(j){return console.error("Error while loading: ",j),{ready:!1}}}(a.asPath.slice(a.asPath.indexOf("?")+1));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o(),{children:(0,m.jsx)("title",{children:"Harm-tab"})}),(0,m.jsx)(aj,{children:(0,m.jsx)(v,{layoutPath:"layouts.json",preparsedData:b,children:(0,m.jsx)(ak,{fallback:(0,m.jsx)(w,{}),children:(0,m.jsx)(aD,{})})})})]})}},4841:function(a){a.exports={panel:"ChordSwitcher_panel__NIqWV",chordSwitcher:"ChordSwitcher_chordSwitcher__5Vddf",active:"ChordSwitcher_active__V11sS"}},8170:function(a){a.exports={"harmonica-colors":"DiatonicHarmonica_harmonica-colors__jYnaA",harmonica:"DiatonicHarmonica_harmonica__uLRZU",body:"DiatonicHarmonica_body__k6qUd",hole:"DiatonicHarmonica_hole__3oKrL",note:"DiatonicHarmonica_note__5DuTV",buttonarea:"DiatonicHarmonica_buttonarea__Koj0e",bendpanel:"DiatonicHarmonica_bendpanel__x313w"}},9626:function(a){a.exports={layoutChooser:"LayoutChooser_layoutChooser__Ja8g3"}},9045:function(a){a.exports={musicControl:"MusicControl_musicControl__pt62P",play:"MusicControl_play__EJ9PL",stop:"MusicControl_stop__2NjoQ",playing:"MusicControl_playing__YSUa0"}},1104:function(a){a.exports={panel:"MusicalElements_panel__mwTWe",musicalElements:"MusicalElements_musicalElements__bels2"}},1714:function(a){a.exports={panel:"NoteLengths_panel__5w_3l",notelengths:"NoteLengths_notelengths__N66SC","cap-max-width":"NoteLengths_cap-max-width__Ajnee",togglePanel:"NoteLengths_togglePanel__yR_PQ",toggle:"NoteLengths_toggle__M2H00",list:"NoteLengths_list__Kl_Wv",icon:"NoteLengths_icon__QnSGZ"}},174:function(a){a.exports={threeDotMenu:"ThreeDotMenu_threeDotMenu__n5dZa",button:"ThreeDotMenu_button__YYAW3"}},7041:function(a){a.exports={"index-colors":"styles_index-colors__kgjTd",editor:"styles_editor__8OYEg",sheetWrapper:"styles_sheetWrapper__ADq6s",harmonicaWrapper:"styles_harmonicaWrapper__Y3rqV",music:"styles_music__OkoyD"}}},function(a){a.O(0,[122,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])