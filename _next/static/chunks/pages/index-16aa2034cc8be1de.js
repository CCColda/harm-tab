(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2710)}])},2710:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return aO}});var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r=c(5893),s=c(9008),t=c.n(s),u=c(7294),v=c(6042),w=c(9396),x=c(9626),y=c.n(x),z=(0,u.createContext)({data:{ready:!1},fn:{setNoteLength:function(){},setSheet:function(){},setLayout:function(){},setMode:function(){},setHighlightedChord:function(){},setSelectedChord:function(){}}}),A=function(a){var b=(0,u.useState)(a.preparsedData.ready?a.preparsedData:{ready:!1}),c=b[0],d=b[1];return(0,u.useEffect)(function(){c.ready||fetch(a.layoutPath,{method:"GET",headers:{Accept:"application/json"}}).then(function(a){return 200==a.status?a.text():""}).then(function(a){a&&d(function(b){var c;return(0,w.Z)((0,v.Z)({},b),{ready:!0,mode:"note",layouts:(c=a,Object.values(JSON.parse(c).layouts)),noteLength:"8",selectedChord:null,highlightedChord:null,sheet:{type:"unset",title:"",key:"",layout:"",meter:""}})})})},[a.layoutPath,a.preparsedData,c.ready]),(0,r.jsx)(z.Provider,{value:{data:c,fn:{setNoteLength:function(a){return c.ready&&d((0,w.Z)((0,v.Z)({},c),{noteLength:a}))},setSheet:function(a){return c.ready&&d((0,w.Z)((0,v.Z)({},c),{sheet:a}))},setLayout:function(a){return c.ready&&d((0,w.Z)((0,v.Z)({},c),{sheet:(0,w.Z)((0,v.Z)({},c.sheet),{layout:a})}))},setMode:function(a){return c.ready&&d((0,w.Z)((0,v.Z)({},c),{mode:a}))},setHighlightedChord:function(a){return c.ready&&d((0,w.Z)((0,v.Z)({},c),{highlightedChord:a}))},setSelectedChord:function(a){return c.ready&&d((0,w.Z)((0,v.Z)({},c),{selectedChord:a}))}}},children:a.children})},B=function(a){var b=(0,u.useContext)(z),c=(0,u.useState)(0),d=c[0],e=c[1];return(0,r.jsxs)("div",{className:y().layoutChooser,children:[(0,r.jsx)("h1",{children:"Choose a layout"}),(0,r.jsx)("select",{className:y().layouts,onChange:function(a){return e(Number(a.target.value))},children:b.data.ready&&b.data.layouts.map(function(a,b){return(0,r.jsx)("option",{value:b,defaultChecked:0==b,children:a.label},b)})}),(0,r.jsx)("button",{onClick:function(a){return b.data.ready&&b.fn.setSheet((0,w.Z)((0,v.Z)({},b.data.sheet),{type:b.data.layouts[d].type,key:b.data.layouts[d].key,layout:b.data.layouts[d].label,meter:"4/4",chords:[],title:""}))},children:"Next"})]})},C=c(4924),D=Object.freeze((d={},(0,C.Z)(d,0,{in:"",out:""}),(0,C.Z)(d,1,{in:"↙",out:"↖"}),(0,C.Z)(d,2,{in:"⤦",out:"⤣"}),(0,C.Z)(d,3,{in:"⇙",out:"⇖"}),d)),E=Object.freeze((e={},(0,C.Z)(e,1,{in:"①",out:"1"}),(0,C.Z)(e,2,{in:"②",out:"2"}),(0,C.Z)(e,3,{in:"③",out:"3"}),(0,C.Z)(e,4,{in:"④",out:"4"}),(0,C.Z)(e,5,{in:"⑤",out:"5"}),(0,C.Z)(e,6,{in:"⑥",out:"6"}),(0,C.Z)(e,7,{in:"⑦",out:"7"}),(0,C.Z)(e,8,{in:"⑧",out:"8"}),(0,C.Z)(e,9,{in:"⑨",out:"9"}),(0,C.Z)(e,10,{in:"⑩",out:"10"}),e)),F=function(a,b){var c;return b&&"".concat(null!==(f=null===(c=D[b])|| void 0===c?void 0:c[a])&& void 0!==f?f:"")||""},G=function(a,b){var c;return null!==(h=b&&"".concat(null!==(g=null===(c=D[b])|| void 0===c?void 0:c[a])&& void 0!==g?g:"","\xa0").concat(b))&& void 0!==h?h:""},H=function(a,b){var c;return null!==(i=null===(c=E[b])|| void 0===c?void 0:c[a])&& void 0!==i?i:"".concat(b)},I=Object.freeze((j={},(0,C.Z)(j,0,["C"]),(0,C.Z)(j,.5,["=C","_D"]),(0,C.Z)(j,1,["D"]),(0,C.Z)(j,1.5,["=D","_E"]),(0,C.Z)(j,2,["E"]),(0,C.Z)(j,2.5,["=E","_F"]),(0,C.Z)(j,3,["F"]),(0,C.Z)(j,3.5,["=F","_G"]),(0,C.Z)(j,4,["G"]),(0,C.Z)(j,4.5,["=G","_A"]),(0,C.Z)(j,5,["A"]),(0,C.Z)(j,5.5,["=A","_B"]),(0,C.Z)(j,6,["B"]),(0,C.Z)(j,6.5,["=B","_C"]),j)),J=Object.freeze((k={},(0,C.Z)(k,0,"C"),(0,C.Z)(k,.5,"Db"),(0,C.Z)(k,1,"D"),(0,C.Z)(k,1.5,"Eb"),(0,C.Z)(k,2,"E"),(0,C.Z)(k,2.5,"Fb"),(0,C.Z)(k,3,"F"),(0,C.Z)(k,3.5,"Gb"),(0,C.Z)(k,4,"G"),(0,C.Z)(k,4.5,"Ab"),(0,C.Z)(k,5,"A"),(0,C.Z)(k,5.5,"Bb"),(0,C.Z)(k,6,"B"),(0,C.Z)(k,6.5,"Cb"),k)),K=Object.freeze("⁰\xb9\xb2\xb3⁴⁵⁶⁷⁸⁹"),L=function(a,b){return a.split("").filter(function(a){return a==b}).length},M=function(a){return(a.match(/[=_]?[cdefgab][,']*/g)?1:0)+L(a,"'")-L(a,",")},N=function(a){var b=M(a),c=a.toUpperCase().match(/[=_]?[CDEFGAB]/);if(!c)return -1;var d=Number(Object.entries(I).find(function(a){return a[1].includes(c[0])})[0]);return(b+4)*7+d},O=function(a){var b,c=!!a.match(/_[cdefgab].*/i),d=!!a.match(/=[cdefgab].*/i),e=M(a),f=a.match(/[_=]?([cdefgab]).*/i);return f&&f[1]?f[1].toUpperCase()+(c?"♭":"")+(d?"♯":"")+(b="".concat(e+4),"".concat(b).split("").map(function(a){return null!==(l=K[Number(a)])&& void 0!==l?l:a}).join("")):a},P=function(a){var b=M(a),c=a.toUpperCase().match(/[=_]?[CDEFGAB]/);if(!c)return"";var d=Number(Object.entries(I).find(function(a){return a[1].includes(c[0])})[0]);return"".concat(J[d]).concat(b+4)},Q=function(a){var b=Number(a);return Number.isInteger(64/b)?"".concat(64/b,"n"):"".concat(64/Math.floor(2*b/3),"n.")},R=c(8170),S=c.n(R),T=function(a){var b,c,d=null!==(b=a.data.find(function(a){return"out"==a.dir&&!a.bend}))&& void 0!==b?b:{dir:"out",note:"C"},e=null!==(c=a.data.find(function(a){return"in"==a.dir&&!a.bend}))&& void 0!==c?c:{dir:"in",note:"C"},f=a.data.filter(function(a){return"out"==a.dir}).map(function(a){return(0,w.Z)((0,v.Z)({},a),{bend:a.bend||0})}).sort(function(a,b){return b.bend-a.bend}),g=a.data.filter(function(a){return"in"==a.dir}).map(function(a){return(0,w.Z)((0,v.Z)({},a),{bend:a.bend||0})}).sort(function(a,b){return a.bend-b.bend}),h=f.length>1,i=g.length>1;return(0,r.jsxs)("span",{className:S().hole,children:[(0,r.jsx)("p",{className:S().note,children:a.number}),(0,r.jsxs)("span",{className:S().buttonarea,children:[(0,r.jsx)("button",{name:"ho_".concat(a.number),onClick:function(b){return!h&&a.onSelectSound((0,v.Z)({position:a.number},d))},children:O(d.note)}),(0,r.jsx)("label",{className:"".concat(S().bendpanel," ").concat(S().out),htmlFor:"ho_".concat(a.number),children:h&&f.map(function(b,c){return(0,r.jsxs)("button",{onClick:function(c){return a.onSelectSound((0,v.Z)({position:a.number},b))},children:[b.bend&&G(b.dir,b.bend)||""," ",O(b.note)]},c)})})]}),(0,r.jsxs)("span",{className:S().buttonarea,children:[(0,r.jsx)("button",{name:"hi_".concat(a.number),onClick:function(b){return!i&&a.onSelectSound((0,v.Z)({position:a.number},e))},children:O(e.note)}),(0,r.jsx)("label",{className:"".concat(S().bendpanel," ").concat(S().in),htmlFor:"hi_".concat(a.number),children:i&&g.map(function(b,c){return(0,r.jsxs)("button",{onClick:function(c){return a.onSelectSound((0,v.Z)({position:a.number},b))},children:[b.bend&&G(b.dir,b.bend)||""," ",O(b.note)]},c)})})]})]})},U=function(a){return(0,r.jsx)("div",{className:S().harmonica,children:(0,r.jsx)("div",{className:S().body,children:Array(10).fill(0).map(function(b,c){var d,e;return(0,r.jsx)(T,{onSelectSound:null!==(d=a.onSelectSound)&& void 0!==d?d:function(a){},number:c+1,data:null!==(e=a.layout&&a.layout[c+1])&& void 0!==e?e:[]},c)})})})},V=c(9815),W=c(1104),X=c.n(W),Y=(m=function(a,b,c){var d=a.chords.slice(0,(null!=c?c:a.chords.length)+1),e=a.chords.slice((null!=c?c:a.chords.length)+1);return(0,w.Z)((0,v.Z)({},a),{chords:(0,V.Z)(d).concat((0,V.Z)(b),(0,V.Z)(e))})},n=function(a,b,c,d){return m(a,[{type:"chord",notes:b,duration:c}],d)},o=function(a,b,c){return m(a,[{type:"silence",duration:b}],c)},p=function(a,b){return m(a,[{type:"bar"}],b)},q=function(a,b,c,d){var e=a.chords[null!=d?d:a.chords.length-1],f=a.chords.slice(0,(null!=d?d:a.chords.length)-1),g=a.chords.slice(d?d+1:a.chords.length);return(null==e?void 0:e.type)=="chord"?(0,w.Z)((0,v.Z)({},a),{chords:(0,V.Z)(f).concat([{type:"chord",notes:(0,V.Z)(e.notes).concat((0,V.Z)(b)),duration:e.duration}],(0,V.Z)(g))}):n(a,b,c,d)},Object.freeze({toABC:function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:[],d=(function(a,b){for(var c=[],d=0;d<a.length;d+=b)c.push(a.slice(d,Math.min(d+b,a.length)));return c})(a.chords,b).map(function(a,d){var e=a.map(function(a){switch(a.type){case"bar":return"|";case"silence":return"z"+a.duration;case"chord":return"["+a.notes.map(function(a){return a.note}).join("")+"]"+a.duration}}),f=!0,g=!1,h=void 0;try{for(var i,j=c[Symbol.iterator]();!(f=(i=j.next()).done);f=!0){var k=i.value;Math.floor(k/b)==d&&(e[k%b]="!mark!"+e[k%b])}}catch(l){g=!0,h=l}finally{try{f||null==j.return||j.return()}finally{if(g)throw h}}var m=a.map(function(a){switch(a.type){case"bar":return"|";case"silence":return"";case"chord":return(0,V.Z)(a.notes).sort(function(a,b){return N(a.note)-N(b.note)}).map(function(a){return F(a.dir,a.bend)+H(a.dir,a.position)}).join("")}});return e.join(" ")+"\nw: "+m.join(" ")}).join("\n");return["X:1","T:".concat(a.title),"M:".concat(a.meter),"L:1/64","K:".concat(a.key),d].join("\n")},addNote:n,addSilence:o,addBar:p,extendChord:q})),Z=function(a){var b=(0,u.useContext)(z),c=function(a){if(b.data.ready&&"diatonic"==b.data.sheet.type){var c,d=null!==(c=b.data.selectedChord)&& void 0!==c?c:b.data.sheet.chords.length-1;b.fn.setSheet((0,w.Z)((0,v.Z)({},b.data.sheet),{chords:(0,V.Z)(b.data.sheet.chords.slice(0,d)).concat((0,V.Z)(b.data.sheet.chords.slice(d+1)))}))}};return(0,r.jsxs)("div",{className:"".concat(X().musicalElements),children:[(0,r.jsx)("button",{onClick:c,children:"⇤"}),(0,r.jsx)("button",{onClick:function(a){return b.data.ready&&"diatonic"==b.data.sheet.type&&b.fn.setSheet(Y.addSilence(b.data.sheet,b.data.noteLength,b.data.selectedChord))},children:"\uD834\uDD3D"}),(0,r.jsx)("button",{onClick:function(a){return b.data.ready&&"diatonic"==b.data.sheet.type&&b.fn.setSheet(Y.addBar(b.data.sheet,b.data.selectedChord))},children:"|"})]})},$=function(a,b){var c,d,e=function(c){if(b.chordCallback&&h.push(a.getContext().setTimeout(function(){return b.chordCallback(c,b.chords[c],b.durations[c])},g)),!b.durations[c])return"continue";var d=Q(b.durations[c]);if(!b.chords[c].includes("z")){var e=b.chords[c].map(function(a){return P(a)}).filter(function(a){return!!a});f.triggerAttackRelease(e,Array(e.length).fill(d),g)}g+=a.Time(d).toSeconds()},f=new a.PolySynth().toDestination();f.sync();for(var g=0,h=[],i=0;i<b.chords.length;++i)e(i);g+=null!==(c=b.timeMargin)&& void 0!==c?c:1;var j=null;return{promise:new Promise(function(b,c){j=b,d=a.getContext().setTimeout(function(){f.disconnect(),f.dispose(),a.Transport.cancel(),a.Transport.stop(),console.log("disposed"),j(!0)},g),a.Transport.start()}),stop:function(){d&&a.getContext().clearTimeout(d);var b=!0,c=!1,e=void 0;try{for(var g,i=h[Symbol.iterator]();!(b=(g=i.next()).done);b=!0){var k=g.value;a.getContext().clearTimeout(k)}}catch(l){c=!0,e=l}finally{try{b||null==i.return||i.return()}finally{if(c)throw e}}f.disconnect(),f.dispose(),a.Transport.cancel(),a.Transport.stop(),j(!1)}}},_=c(9045),aa=c.n(_),ab=Object.freeze({promise:null,stop:function(){}}),ac=function(a){var b=(0,u.useContext)(z),c=(0,u.useContext)(ar),d=(0,u.useState)(ab),e=d[0],f=d[1],g=(0,u.useState)(!1),h=g[0],i=g[1],j=function(){if(b.data.ready&&"diatonic"==b.data.sheet.type&&!h){i(!0);var a,d=$(c,{chords:b.data.sheet.chords.map(function(a){switch(a.type){case"bar":return[];case"silence":return["z"];case"chord":return a.notes.map(function(a){return a.note})}}),durations:b.data.sheet.chords.map(function(a){return"bar"==a.type?"":a.duration}),chordCallback:function(a){return b.fn.setHighlightedChord(a)}});null===(a=d.promise)|| void 0===a||a.then(function(a){i(!1),b.fn.setHighlightedChord(null)}),f(d)}};return(0,r.jsxs)("div",{className:aa().musicControl+(h?" "+aa().playing:""),children:[(0,r.jsx)("button",{className:aa().play,onClick:function(a){c&&(i(!0),j())}}),(0,r.jsx)("button",{className:aa().stop,onClick:function(a){c&&(i(!1),e.stop())}})]})},ad=c(1714),ae=c.n(ad),af=c(8461),ag=c.n(af),ah=[1,2,4,8,16,32,64],ai=function(a){var b=null,c=!1;if(ah.includes(a.duration))b=a.duration;else{var d=3*a.duration/2;ah.includes(d)&&(b=d,c=!0)}return(0,r.jsx)("span",{className:ag().noteComponent,children:b?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:ag().note,style:{backgroundImage:"url(img/".concat(b,"n.svg)")}}),c&&(0,r.jsx)("span",{className:ag().dot})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:ag().notePlaceholder,children:a.duration})})})},aj=Object.freeze([{symbol:"\uD834\uDD63",value:1,display:"1/64"},{symbol:"\uD834\uDD62",value:2,display:"1/32"},{symbol:"\uD834\uDD61",value:4,display:"1/16"},{symbol:"\uD834\uDD60",value:8,display:"1/8",default:!0},{symbol:"\uD834\uDD5F",value:16,display:"1/4"},{symbol:"\uD834\uDD5F.",value:24,display:"3/8"},{symbol:"\uD834\uDD5E",value:32,display:"1/2"},{symbol:"\uD834\uDD5E.",value:48,display:"3/4"},{symbol:"\uD834\uDD5D",value:64,display:"1/1"},{symbol:"\uD834\uDD5D.",value:96,display:"3/2"},]),ak=function(a){var b,c=(0,u.useContext)(z);return(0,r.jsxs)("label",{className:ae().notelengths,children:[(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsxs)("span",{className:ae().togglePanel,children:[(0,r.jsx)("span",{className:ae().icon,children:"\uD834\uDD5F"}),(0,r.jsx)("span",{className:ae().toggle}),(0,r.jsx)("div",{className:ae().list,onChange:function(a){return c.fn.setNoteLength(a.target.value)},children:aj.map(function(a,c){return(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"notelength",value:"".concat(a.value),defaultChecked:null!==(b=a.default)&& void 0!==b&&b}),(0,r.jsx)("div",{children:(0,r.jsx)(ai,{duration:64/a.value})})]},c)})})]})]})},al=c(174),am=c.n(al),an=function(a){return(0,r.jsxs)("div",{className:am().threeDotMenu,children:[(0,r.jsxs)("button",{className:am().button,children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),(0,r.jsx)("div",{className:am().list})]})},ao=c(9914),ap=function(a){var b=(0,u.useRef)(null),c=(0,u.useState)(null),d=(c[0],c[1]);return(0,u.useEffect)(function(){if(b.current){var c;d((0,ao.renderAbc)(b.current,a.abc,null!==(c=a.options)&& void 0!==c?c:{}))}return function(){}},[b,a.abc,a.options]),(0,r.jsx)("div",{ref:b})},aq=c(828),ar=u.createContext(null),as=function(a){var b=a.fallback,d=a.children,e=(0,aq.Z)(u.useState(null),2),f=e[0],g=e[1];return u.useEffect(function(){c.e(878).then(c.bind(c,4878)).then(function(a){return g(a)})},[]),(0,r.jsx)(ar.Provider,{value:f,children:b&&!f?b:d})},at=function(a){var b=(0,u.useContext)(z),c=b.data.ready&&"unset"!=b.data.sheet.type&&b.data.layouts.some(function(a){return a.label==(b.data.ready&&b.data.sheet.layout)});return(0,r.jsx)(r.Fragment,{children:c?a.children:a.fallback})};function au(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:void 0;(0,u.useEffect)(function(){if(a)return a.addEventListener(b,c),function(){return a.removeEventListener(b,c)}},d)}var av=Object.freeze(Array(80).fill(0).map(function(a,b){return String.fromCharCode(43+b)})),aw=Object.freeze("!"),ax=Object.freeze("#"),ay=Object.freeze("$"),az=Object.freeze("~"),aA=Object.freeze("|");function aB(a){var b;return av[("out"==a.dir?0:40)+(a.position-1)*4+(null!==(b=a.bend)&& void 0!==b?b:0)]}function aC(a){var b=av.findIndex(function(b){return b==a});return{bend:b%4,dir:b>=40?"in":"out",position:Math.floor(b%40/4)+1}}var aD=c(4841),aE=c.n(aD),aF=function(a){var b=(0,u.useContext)(z);return(0,r.jsxs)("div",{className:aE().chordSwitcher,children:[(0,r.jsx)("button",{className:aE().note+(b.data.ready&&"note"==b.data.mode?" "+aE().active:""),onClick:function(a){return b.fn.setMode("note")},children:"+"}),(0,r.jsx)("button",{className:aE().chord+(b.data.ready&&"chord"==b.data.mode?" "+aE().active:""),onClick:function(a){return b.fn.setMode("chord")},children:"\uD834\uDD5F+"})]})},aG=c(7041),aH=c.n(aG),aI=c(7568),aJ=c(4051),aK=c.n(aJ),aL=function(a){var b,c=a.editorRef,d=(0,u.useState)(!1),e=d[0],f=d[1];au(c.current,"onfullscreenchange",function(a){return c&&f(!!document.fullscreenElement)},[c]);var g=(b=(0,aI.Z)(aK().mark(function a(){var b;return aK().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e&&document.fullscreenElement)){a.next=6;break}return a.next=3,document.exitFullscreen();case 3:f(!1),a.next=10;break;case 6:return a.next=9,null===(b=c.current)|| void 0===b?void 0:b.requestFullscreen({navigationUI:"auto"});case 9:f(!0);case 10:case"end":return a.stop()}},a)})),function(){return b.apply(this,arguments)});return(0,r.jsx)("button",{onClick:g,children:"⛶"})},aM=function(a){var b=(0,u.useContext)(z),c=(0,u.useState)(0),d=c[0],e=c[1],f=(0,u.useRef)(null),g=(0,u.useRef)(null);return au(window,"resize",function(a){return f&&e(f.current.getBoundingClientRect().width)},[f]),(0,u.useEffect)(function(){b.fn.setSelectedChord(null)},[b.data.ready&&"diatonic"==b.data.sheet.type&&b.data.sheet.chords,b.fn]),b.data.ready&&(0,r.jsxs)("div",{ref:g,className:aH().editor,children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("button",{onClick:function(a){return window.open("?"+function(a){if(a.ready){var b,c,d=a.layouts.find(function(b){return b.label==a.sheet.layout});if(d){switch(d.type){case"diatonic":if("diatonic"!=a.sheet.type)throw Error("Sheet type doesn't match layout type");c=["D"+d.sign,d.label,Object.entries(b=d.layout).map(function(a){var b=(0,aq.Z)(a,2),c=b[0];return b[1].map(function(a){return aB((0,w.Z)((0,v.Z)({},a),{position:Number(c)}))+a.note}).join(aw)}).join(aw),[a.sheet.title,a.sheet.meter,a.sheet.key].join(aw),a.sheet.chords.map(function(a){switch(a.type){case"bar":return aA;case"silence":return az+a.duration;case"chord":return a.notes.map(function(a){return aB(a)}).join(ay)+a.duration}}).join(aw)];break;case"chromatic":c=["C"]}return encodeURI(c.join(ax))}}}(b.data))},children:"\uD83D\uDD17"}),(0,r.jsx)(aL,{editorRef:g}),(0,r.jsx)(ac,{}),(0,r.jsx)(an,{})]}),(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:aH().sheetWrapper,ref:f,children:(0,r.jsx)(ap,{abc:b.data.ready&&"diatonic"==b.data.sheet.type&&Y.toABC(b.data.sheet,8,[b.data.highlightedChord,b.data.selectedChord].filter(function(a){return!!a}))||"",options:{initialClef:!0,staffwidth:d,wrap:{minSpacing:1.5,maxSpacing:2,preferredMeasuresPerLine:4},clickListener:function(a,c,d,e,f,g){if(b.data.ready&&"diatonic"==b.data.sheet.type){var h,i,j=null===(h=b.data.sheet.chords.map(function(a,b){return{v:a,i:b}}).filter(function(a){return["chord","silence"].includes(a.v.type)}))|| void 0===h?void 0:null===(i=h[f.index])|| void 0===i?void 0:i.i;b.fn.setSelectedChord(j)}},selectTypes:["note"]}})})}),(0,r.jsxs)("footer",{children:[(0,r.jsx)("span",{className:aH().harmonicaWrapper,children:(0,r.jsx)(U,{layout:b.data.layouts.find(function(a){return a.label==(b.data.ready&&b.data.sheet.layout)}).layout,onSelectSound:function(a){return b.data.ready&&b.fn.setSheet("note"==b.data.mode?Y.addNote(b.data.sheet,[a],b.data.noteLength,b.data.selectedChord):Y.extendChord(b.data.sheet,[a],b.data.noteLength,b.data.selectedChord))}})}),(0,r.jsxs)("span",{className:aH().music,children:[(0,r.jsx)(ak,{}),(0,r.jsx)(Z,{}),(0,r.jsx)(aF,{})]})]})]})},aN=c(1163);function aO(){var a=(0,aN.useRouter)(),b=function(a){var b=decodeURI(a);try{if("D"===b[0]){var c,d,e=b.split(ax),f=e[3].split(aw),g=e[4].split(aw),h=e[1],i=(d=(c=e[2]).split(aw).map(function(a){return(0,w.Z)((0,v.Z)({},aC(a[0])),{note:a.slice(1)})}),Object.fromEntries(Array(10).fill(0).map(function(a,b){return[b+1,d.filter(function(a){return a.position==b+1}).sort(function(a,b){return a.bend-b.bend})]})));return{ready:!0,mode:"note",layouts:[{type:"diatonic",sign:e[0].slice(1),label:h,layout:i}],noteLength:"8",highlightedChord:null,selectedChord:null,sheet:{type:"diatonic",title:f[0],meter:f[1],key:f[2],chords:g.map(function(a){if(a.startsWith(aA))return{type:"bar"};if(a.startsWith(az))return{type:"silence",duration:a.slice(az.length)};var b=a.slice(0,1).split(ay);return console.dir(b),{type:"chord",notes:b.map(function(a){var b=aC(a);return console.log("Searching for "+JSON.stringify(b)+" ("+a+")"),(0,w.Z)((0,v.Z)({},b),{note:i[b.position].find(function(a){return a.bend==b.bend&&a.dir==b.dir}).note})}),duration:a.slice(1)}}),layout:h}}}return{ready:!1}}catch(j){return console.error("Error while loading: ",j),{ready:!1}}}(a.asPath.slice(a.asPath.indexOf("?")+1));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t(),{children:(0,r.jsx)("title",{children:"Harm-tab"})}),(0,r.jsx)(as,{children:(0,r.jsx)(A,{layoutPath:"layouts.json",preparsedData:b,children:(0,r.jsx)(at,{fallback:(0,r.jsx)(B,{}),children:(0,r.jsx)(aM,{})})})})]})}},4841:function(a){a.exports={panel:"ChordSwitcher_panel__NIqWV",chordSwitcher:"ChordSwitcher_chordSwitcher__5Vddf",active:"ChordSwitcher_active__V11sS"}},8170:function(a){a.exports={"harmonica-colors":"DiatonicHarmonica_harmonica-colors__jYnaA",harmonica:"DiatonicHarmonica_harmonica__uLRZU",body:"DiatonicHarmonica_body__k6qUd",hole:"DiatonicHarmonica_hole__3oKrL",note:"DiatonicHarmonica_note__5DuTV",buttonarea:"DiatonicHarmonica_buttonarea__Koj0e",bendpanel:"DiatonicHarmonica_bendpanel__x313w"}},9626:function(a){a.exports={layoutChooser:"LayoutChooser_layoutChooser__Ja8g3"}},9045:function(a){a.exports={musicControl:"MusicControl_musicControl__pt62P",play:"MusicControl_play__EJ9PL",stop:"MusicControl_stop__2NjoQ",playing:"MusicControl_playing__YSUa0"}},1104:function(a){a.exports={panel:"MusicalElements_panel__mwTWe",musicalElements:"MusicalElements_musicalElements__bels2"}},8461:function(a){a.exports={noteComponent:"Note_noteComponent__8pLVa",notePlaceholder:"Note_notePlaceholder__EPz2W",note:"Note_note__Ec38g",dot:"Note_dot__Luh9v"}},1714:function(a){a.exports={panel:"NoteLengths_panel__5w_3l",notelengths:"NoteLengths_notelengths__N66SC","cap-max-width":"NoteLengths_cap-max-width__Ajnee",togglePanel:"NoteLengths_togglePanel__yR_PQ",toggle:"NoteLengths_toggle__M2H00",list:"NoteLengths_list__Kl_Wv",icon:"NoteLengths_icon__QnSGZ"}},174:function(a){a.exports={threeDotMenu:"ThreeDotMenu_threeDotMenu__n5dZa",button:"ThreeDotMenu_button__YYAW3"}},7041:function(a){a.exports={"index-colors":"styles_index-colors__kgjTd",editor:"styles_editor__8OYEg",sheetWrapper:"styles_sheetWrapper__ADq6s",harmonicaWrapper:"styles_harmonicaWrapper__Y3rqV",music:"styles_music__OkoyD"}}},function(a){a.O(0,[122,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])