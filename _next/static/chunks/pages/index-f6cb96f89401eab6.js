(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(1475)}])},1475:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return a_}});var d,e,f,g,h,i,j,k,l,m=c(5893),n=c(9008),o=c.n(n),p=c(7294),q=c(828),r=p.createContext(null),s=function(a){var b=a.fallback,d=a.children,e=(0,q.Z)(p.useState(null),2),f=e[0],g=e[1];return p.useEffect(function(){c.e(878).then(c.bind(c,4878)).then(function(a){return g(a)})},[]),(0,m.jsx)(r.Provider,{value:f,children:b&&!f?b:d})},t=c(6042),u=c(9396),v=Object.freeze({memory:{insert:{duration:8,mode:"note"},highlightedIndex:null,selectedIndex:null,layouts:[]},saved:{sheet:{type:"unset",layout:null,key:"C",meter:"4/4",title:""}}}),w=function(a){return Object.freeze({memory:{insert:{setDuration:function(b){return a.setMemory(function(a){return(0,u.Z)((0,t.Z)({},a),{insert:(0,u.Z)((0,t.Z)({},a.insert),{duration:b})})})},setMode:function(b){return a.setMemory(function(a){return(0,u.Z)((0,t.Z)({},a),{insert:(0,u.Z)((0,t.Z)({},a.insert),{mode:b})})})}},setHighlighted:function(b){return a.setMemory(function(a){return(0,u.Z)((0,t.Z)({},a),{highlightedIndex:b})})},setSelected:function(b){return a.setMemory(function(a){return(0,u.Z)((0,t.Z)({},a),{selectedIndex:b})})},setLayouts:function(b){return a.setMemory(function(a){return(0,u.Z)((0,t.Z)({},a),{layouts:b})})}},saved:{setSheet:function(b){return a.setSaved(function(a){return(0,u.Z)((0,t.Z)({},a),{sheet:b})})},modifySheet:function(b){return a.setSaved(function(a){return(0,u.Z)((0,t.Z)({},a),{sheet:b(a.sheet)})})}}})},x=(0,p.createContext)({data:v,fn:w({setMemory:function(a){return a},setSaved:function(a){return a}})}),y=function(a){var b=(0,p.useState)(v.memory),c=b[0],d=b[1],e=(0,p.useState)(v.saved),f=e[0],g=e[1],h=w({setMemory:d,setSaved:g});return(0,m.jsx)(x.Provider,{value:{data:{memory:c,saved:f},fn:h},children:a.children})},z=c(9626),A=c.n(z),B=function(a){var b=(0,p.useContext)(x),c=(0,p.useState)(0),d=c[0],e=c[1],f=function(a){return b.fn.saved.modifySheet(function(a){return(0,u.Z)((0,t.Z)({},a),{key:b.data.memory.layouts[d].key,type:b.data.memory.layouts[d].type,layout:b.data.memory.layouts[d].label,chords:[]})})};return(0,m.jsxs)("div",{className:A().layoutChooser,children:[(0,m.jsx)("h1",{children:"Choose a layout"}),(0,m.jsx)("select",{className:A().layouts,onChange:function(a){return e(Number(a.target.value))},children:b.data.memory.layouts.map(function(a,b){return(0,m.jsx)("option",{value:b,defaultChecked:0==b,children:a.label},b)})}),(0,m.jsx)("button",{onClick:f,children:"Next"})]})},C=Object.freeze(Array(80).fill(0).map(function(a,b){return String.fromCharCode(43+b)})),D=Object.freeze("!"),E=Object.freeze("#"),F=Object.freeze("$"),G=Object.freeze("~"),H=Object.freeze("|");function I(a){var b;return C[("out"==a.dir?0:40)+(a.position-1)*4+(null!==(b=a.bend)&& void 0!==b?b:0)]}function J(a){var b=C.findIndex(function(b){return b==a});return{bend:b%4,dir:b>=40?"in":"out",position:Math.floor(b%40/4)+1}}var K=c(4273),L=c.n(K),M=function(a){var b=(0,p.useContext)(x);return(0,m.jsxs)("div",{className:L().chordSwitcher,children:[(0,m.jsx)("button",{className:L().note+("note"==b.data.memory.insert.mode?" "+L().active:""),onClick:function(a){return b.fn.memory.insert.setMode("note")},children:"+"}),(0,m.jsx)("button",{className:L().chord+("chord"==b.data.memory.insert.mode?" "+L().active:""),onClick:function(a){return b.fn.memory.insert.setMode("chord")},children:"\uD834\uDD5F+"})]})},N=c(7568),O=c(4051),P=c.n(O);function Q(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:void 0;(0,p.useEffect)(function(){if(a)return a.addEventListener(b,c),function(){return a.removeEventListener(b,c)}},d)}var R,S,T,U,V,W=function(a){var b,c=a.editorRef,d=(0,p.useState)(!1),e=d[0],f=d[1];Q(c.current,"onfullscreenchange",function(a){return c&&f(!!document.fullscreenElement)},[c]);var g=(b=(0,N.Z)(P().mark(function a(){var b;return P().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e&&document.fullscreenElement)){a.next=6;break}return a.next=3,document.exitFullscreen();case 3:f(!1),a.next=10;break;case 6:return a.next=9,null===(b=c.current)|| void 0===b?void 0:b.requestFullscreen({navigationUI:"auto"});case 9:f(!0);case 10:case"end":return a.stop()}},a)})),function(){return b.apply(this,arguments)});return(0,m.jsx)("button",{onClick:g,children:"⛶"})},X=c(9815),Y=c(4924),Z=Object.freeze((d={},(0,Y.Z)(d,0,{in:"",out:""}),(0,Y.Z)(d,1,{in:"↙",out:"↖"}),(0,Y.Z)(d,2,{in:"⤦",out:"⤣"}),(0,Y.Z)(d,3,{in:"⇙",out:"⇖"}),d)),$=Object.freeze((e={},(0,Y.Z)(e,1,{in:"①",out:"1"}),(0,Y.Z)(e,2,{in:"②",out:"2"}),(0,Y.Z)(e,3,{in:"③",out:"3"}),(0,Y.Z)(e,4,{in:"④",out:"4"}),(0,Y.Z)(e,5,{in:"⑤",out:"5"}),(0,Y.Z)(e,6,{in:"⑥",out:"6"}),(0,Y.Z)(e,7,{in:"⑦",out:"7"}),(0,Y.Z)(e,8,{in:"⑧",out:"8"}),(0,Y.Z)(e,9,{in:"⑨",out:"9"}),(0,Y.Z)(e,10,{in:"⑩",out:"10"}),e)),_=function(a,b){var c;return b&&"".concat(null!==(f=null===(c=Z[b])|| void 0===c?void 0:c[a])&& void 0!==f?f:"")||""},aa=function(a,b){var c;return null!==(h=b&&"".concat(null!==(g=null===(c=Z[b])|| void 0===c?void 0:c[a])&& void 0!==g?g:"","\xa0").concat(b))&& void 0!==h?h:""},ab=function(a,b){var c;return null!==(i=null===(c=$[b])|| void 0===c?void 0:c[a])&& void 0!==i?i:"".concat(b)},ac=Object.freeze((j={},(0,Y.Z)(j,0,["C"]),(0,Y.Z)(j,.5,["^C","_D"]),(0,Y.Z)(j,1,["D"]),(0,Y.Z)(j,1.5,["^D","_E"]),(0,Y.Z)(j,2,["E"]),(0,Y.Z)(j,2.5,["^E","_F"]),(0,Y.Z)(j,3,["F"]),(0,Y.Z)(j,3.5,["^F","_G"]),(0,Y.Z)(j,4,["G"]),(0,Y.Z)(j,4.5,["^G","_A"]),(0,Y.Z)(j,5,["A"]),(0,Y.Z)(j,5.5,["^A","_B"]),(0,Y.Z)(j,6,["B"]),(0,Y.Z)(j,6.5,["^B","_C"]),j)),ad=Object.freeze((k={},(0,Y.Z)(k,0,"C"),(0,Y.Z)(k,.5,"Db"),(0,Y.Z)(k,1,"D"),(0,Y.Z)(k,1.5,"Eb"),(0,Y.Z)(k,2,"E"),(0,Y.Z)(k,2.5,"Fb"),(0,Y.Z)(k,3,"F"),(0,Y.Z)(k,3.5,"Gb"),(0,Y.Z)(k,4,"G"),(0,Y.Z)(k,4.5,"Ab"),(0,Y.Z)(k,5,"A"),(0,Y.Z)(k,5.5,"Bb"),(0,Y.Z)(k,6,"B"),(0,Y.Z)(k,6.5,"Cb"),k)),ae=Object.freeze("⁰\xb9\xb2\xb3⁴⁵⁶⁷⁸⁹"),af=function(a,b){return a.split("").filter(function(a){return a==b}).length},ag=function(a){return(a.match(/[=_]?[cdefgab][,']*/g)?1:0)+af(a,"'")-af(a,",")},ah=function(a){var b=ag(a),c=a.toUpperCase().match(/[\^_]?[CDEFGAB]/);if(!c)return -1;var d=Number(Object.entries(ac).find(function(a){return a[1].includes(c[0])})[0]);return(b+4)*7+d},ai=function(a){var b,c=!!a.match(/_[cdefgab].*/i),d=!!a.match(/\^[cdefgab].*/i),e=ag(a),f=a.match(/[\^_]?([cdefgab]).*/i);return f&&f[1]?f[1].toUpperCase()+(c?"♭":"")+(d?"♯":"")+(b="".concat(e+4),"".concat(b).split("").map(function(a){return null!==(l=ae[Number(a)])&& void 0!==l?l:a}).join("")):a},aj=function(a){var b=ag(a),c=a.toUpperCase().match(/[\^_]?[CDEFGAB]/);if(!c)return"";var d=Number(Object.entries(ac).find(function(a){return a[1].includes(c[0])})[0]);return"".concat(ad[d]).concat(b+4)},ak=function(a){var b=Number(a);return Number.isInteger(64/b)?"".concat(64/b,"n"):"".concat(64/Math.floor(2*b/3),"n.")},al=(R=function(a,b,c){var d=a.chords.slice(0,(null!=c?c:a.chords.length)+1),e=a.chords.slice((null!=c?c:a.chords.length)+1);return(0,u.Z)((0,t.Z)({},a),{chords:(0,X.Z)(d).concat((0,X.Z)(b),(0,X.Z)(e))})},S=function(a,b,c,d){return R(a,[{type:"chord",notes:b,duration:c}],d)},T=function(a,b,c){return R(a,[{type:"silence",duration:b}],c)},U=function(a,b){return R(a,[{type:"bar"}],b)},V=function(a,b,c,d){var e=a.chords[null!=d?d:a.chords.length-1],f=a.chords.slice(0,(null!=d?d:a.chords.length)-1),g=a.chords.slice(d?d+1:a.chords.length);return(null==e?void 0:e.type)=="chord"?(0,u.Z)((0,t.Z)({},a),{chords:(0,X.Z)(f).concat([{type:"chord",notes:(0,X.Z)(e.notes).concat((0,X.Z)(b)),duration:e.duration}],(0,X.Z)(g))}):S(a,b,c,d)},Object.freeze({toABC:function(a,b){var c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:[],d=(function(a,b){for(var c=[],d=0;d<a.length;d+=b)c.push(a.slice(d,Math.min(d+b,a.length)));return c})(a.chords,b).map(function(a,d){var e=a.map(function(a){switch(a.type){case"bar":return"|";case"silence":return"z"+a.duration;case"chord":return"["+a.notes.map(function(a){return a.note}).join("")+"]"+a.duration}}),f=!0,g=!1,h=void 0;try{for(var i,j=c[Symbol.iterator]();!(f=(i=j.next()).done);f=!0){var k=i.value;Math.floor(k/b)==d&&(e[k%b]="!mark!"+e[k%b])}}catch(l){g=!0,h=l}finally{try{f||null==j.return||j.return()}finally{if(g)throw h}}var m=a.map(function(a){switch(a.type){case"bar":return"|";case"silence":return"";case"chord":return(0,X.Z)(a.notes).sort(function(a,b){return ah(a.note)-ah(b.note)}).map(function(a){return _(a.dir,a.bend)+ab(a.dir,a.position)}).join("")}});return e.join(" ")+"\nw: "+m.join(" ")}).join("\n");return["X:1","T:".concat(a.title),"M:".concat(a.meter),"L:1/64","K:".concat(a.key),d].join("\n")},addNote:S,addSilence:T,addBar:U,extendChord:V})),am=c(1104),an=c.n(am),ao=function(a){var b=(0,p.useContext)(x),c=function(c){if("diatonic"==b.data.saved.sheet.type){var d,e=null!==(d=b.data.memory.selectedIndex)&& void 0!==d?d:b.data.saved.sheet.chords.length-1;b.fn.saved.modifySheet(function(a){return"diatonic"==a.type?(0,u.Z)((0,t.Z)({},a),{chords:(0,X.Z)(a.chords.slice(0,e)).concat((0,X.Z)(a.chords.slice(e+1)))}):a}),a.onRemove&&a.onRemove()}},d=function(c){"diatonic"==b.data.saved.sheet.type&&(b.fn.saved.modifySheet(function(a){return"diatonic"==a.type?al.addSilence(a,b.data.memory.insert.duration,b.data.memory.selectedIndex):a}),a.onAdd&&a.onAdd("silence"))},e=function(c){"diatonic"==b.data.saved.sheet.type&&(b.fn.saved.modifySheet(function(a){return"diatonic"==a.type?al.addBar(a,b.data.memory.selectedIndex):a}),a.onAdd&&a.onAdd("bar"))};return(0,m.jsxs)("div",{className:an().musicalElements,children:[(0,m.jsx)("button",{onClick:c,children:"⇤"}),(0,m.jsx)("button",{onClick:d,children:"\uD834\uDD3D"}),(0,m.jsx)("button",{onClick:e,children:"|"})]})},ap=function(a,b){var c,d,e=function(c){if(b.chordCallback&&h.push(a.getContext().setTimeout(function(){return b.chordCallback(c,b.chords[c],b.durations[c])},g)),!b.durations[c])return"continue";var d=ak(b.durations[c]);if(!b.chords[c].includes("z")){var e=b.chords[c].map(function(a){return aj(a)}).filter(function(a){return!!a});f.triggerAttackRelease(e,Array(e.length).fill(d),g)}g+=a.Time(d).toSeconds()},f=new a.PolySynth().toDestination();f.sync();for(var g=0,h=[],i=0;i<b.chords.length;++i)e(i);g+=null!==(c=b.timeMargin)&& void 0!==c?c:1;var j=null;return{promise:new Promise(function(b,c){j=b,d=a.getContext().setTimeout(function(){f.disconnect(),f.dispose(),a.Transport.cancel(),a.Transport.stop(),console.log("disposed"),j(!0)},g),a.Transport.start()}),stop:function(){d&&a.getContext().clearTimeout(d);var b=!0,c=!1,e=void 0;try{for(var g,i=h[Symbol.iterator]();!(b=(g=i.next()).done);b=!0){var k=g.value;a.getContext().clearTimeout(k)}}catch(l){c=!0,e=l}finally{try{b||null==i.return||i.return()}finally{if(c)throw e}}f.disconnect(),f.dispose(),a.Transport.cancel(),a.Transport.stop(),j(!1)}}},aq=c(9045),ar=c.n(aq),as=Object.freeze({promise:null,stop:function(){}}),at=function(a){var b=(0,p.useContext)(x),c=(0,p.useContext)(r),d=(0,p.useState)(as),e=d[0],f=d[1],g=(0,p.useState)(!1),h=g[0],i=g[1],j=function(){if("diatonic"==b.data.saved.sheet.type&&!h){i(!0);var a,d=ap(c,{chords:b.data.saved.sheet.chords.map(function(a){switch(a.type){case"bar":return[];case"silence":return["z"];case"chord":return a.notes.map(function(a){return a.note})}}),durations:b.data.saved.sheet.chords.map(function(a){return"bar"==a.type?"":a.duration}),chordCallback:function(a){return b.fn.memory.setHighlighted(a)}});null===(a=d.promise)|| void 0===a||a.then(function(a){i(!1),b.fn.memory.setHighlighted(null)}),f(d)}};return(0,m.jsxs)("div",{className:ar().musicControl+(h?" "+ar().playing:""),children:[(0,m.jsx)("button",{className:ar().play,onClick:function(a){c&&(i(!0),j())}}),(0,m.jsx)("button",{className:ar().stop,onClick:function(a){c&&(i(!1),e.stop())}})]})},au=c(8461),av=c.n(au),aw=[1,2,4,8,16,32,64],ax=function(a){var b=null,c=!1;if(aw.includes(a.duration))b=a.duration;else{var d=3*a.duration/2;aw.includes(d)&&(b=d,c=!0)}return(0,m.jsx)("span",{className:av().noteComponent,children:b?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{className:av().note,style:{backgroundImage:"url(img/".concat(b,"n.svg)")}}),c&&(0,m.jsx)("span",{className:av().dot})]}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("span",{className:av().notePlaceholder,children:a.duration})})})},ay=c(1714),az=c.n(ay),aA=Object.freeze([{symbol:"\uD834\uDD63",value:1,display:"1/64"},{symbol:"\uD834\uDD62",value:2,display:"1/32"},{symbol:"\uD834\uDD61",value:4,display:"1/16"},{symbol:"\uD834\uDD60",value:8,display:"1/8",default:!0},{symbol:"\uD834\uDD5F",value:16,display:"1/4"},{symbol:"\uD834\uDD5F.",value:24,display:"3/8"},{symbol:"\uD834\uDD5E",value:32,display:"1/2"},{symbol:"\uD834\uDD5E.",value:48,display:"3/4"},{symbol:"\uD834\uDD5D",value:64,display:"1/1"},{symbol:"\uD834\uDD5D.",value:96,display:"3/2"},]),aB=function(a){var b,c=(0,p.useContext)(x),d=function(a){return c.fn.memory.insert.setDuration(Number(a.target.value))};return(0,m.jsxs)("label",{className:az().notelengths,children:[(0,m.jsx)("input",{type:"checkbox"}),(0,m.jsxs)("span",{className:az().togglePanel,children:[(0,m.jsx)("span",{className:az().icon,children:"\uD834\uDD5F"}),(0,m.jsx)("span",{className:az().toggle}),(0,m.jsx)("div",{className:az().list,onChange:d,children:aA.map(function(a,c){return(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"radio",name:"notelength",value:"".concat(a.value),defaultChecked:null!==(b=a.default)&& void 0!==b&&b}),(0,m.jsx)("div",{children:(0,m.jsx)(ax,{duration:64/a.value})})]},c)})})]})]})},aC=c(174),aD=c.n(aC),aE=function(a){return(0,m.jsxs)("div",{className:aD().threeDotMenu,children:[(0,m.jsxs)("button",{className:aD().button,children:[(0,m.jsx)("div",{}),(0,m.jsx)("div",{}),(0,m.jsx)("div",{})]}),(0,m.jsx)("div",{className:aD().list})]})},aF=c(2688),aG=c.n(aF),aH=c(9914),aI=function(a){var b=(0,p.useRef)(null),c=(0,p.useState)(null),d=(c[0],c[1]);return(0,p.useEffect)(function(){if(b.current){var c;d((0,aH.renderAbc)(b.current,a.abc,null!==(c=a.options)&& void 0!==c?c:{}))}return function(){}},[b,a.abc,a.options]),(0,m.jsx)("div",{ref:b})},aJ=c(9631),aK=c.n(aJ),aL=function(a){var b=(0,p.useContext)(x),c=(0,p.useState)(0),d=c[0],e=c[1],f=(0,p.useRef)(null);Q(window,"resize",function(a){return f&&e(f.current.getBoundingClientRect().width)},[f]);var g="diatonic"==b.data.saved.sheet.type?al.toABC(b.data.saved.sheet,8,[b.data.memory.highlightedIndex,b.data.memory.selectedIndex].filter(function(a){return!!a})):"";return(0,m.jsx)("div",{className:aK().sheetWrapper,ref:f,children:(0,m.jsx)(aI,{abc:g,options:{initialClef:!0,staffwidth:d,wrap:{minSpacing:1.5,maxSpacing:2,preferredMeasuresPerLine:4},clickListener:function(a,c,d,e,f,g){if("diatonic"==b.data.saved.sheet.type){var h,i,j=null===(h=b.data.saved.sheet.chords.map(function(a,b){return{v:a,i:b}}).filter(function(a){return["chord","silence"].includes(a.v.type)}))|| void 0===h?void 0:null===(i=h[f.index])|| void 0===i?void 0:i.i;b.fn.memory.setSelected(j)}},selectTypes:["note"]}})})},aM=c(8170),aN=c.n(aM),aO=function(a){var b,c,d=null!==(b=a.data.find(function(a){return"out"==a.dir&&!a.bend}))&& void 0!==b?b:{dir:"out",note:"C"},e=null!==(c=a.data.find(function(a){return"in"==a.dir&&!a.bend}))&& void 0!==c?c:{dir:"in",note:"C"},f=a.data.filter(function(a){return"out"==a.dir}).map(function(a){return(0,u.Z)((0,t.Z)({},a),{bend:a.bend||0})}).sort(function(a,b){return b.bend-a.bend}),g=a.data.filter(function(a){return"in"==a.dir}).map(function(a){return(0,u.Z)((0,t.Z)({},a),{bend:a.bend||0})}).sort(function(a,b){return a.bend-b.bend}),h=f.length>1,i=g.length>1;return(0,m.jsxs)("span",{className:aN().hole,children:[(0,m.jsx)("p",{className:aN().note,children:a.number}),(0,m.jsxs)("span",{className:aN().buttonarea,children:[(0,m.jsx)("button",{name:"ho_".concat(a.number),onClick:function(b){return!h&&a.onSelectSound((0,t.Z)({position:a.number},d))},children:ai(d.note)}),(0,m.jsx)("label",{className:"".concat(aN().bendpanel," ").concat(aN().out),htmlFor:"ho_".concat(a.number),children:h&&f.map(function(b,c){return(0,m.jsxs)("button",{onClick:function(c){return a.onSelectSound((0,t.Z)({position:a.number},b))},children:[b.bend&&aa(b.dir,b.bend)||""," ",ai(b.note)]},c)})})]}),(0,m.jsxs)("span",{className:aN().buttonarea,children:[(0,m.jsx)("button",{name:"hi_".concat(a.number),onClick:function(b){return!i&&a.onSelectSound((0,t.Z)({position:a.number},e))},children:ai(e.note)}),(0,m.jsx)("label",{className:"".concat(aN().bendpanel," ").concat(aN().in),htmlFor:"hi_".concat(a.number),children:i&&g.map(function(b,c){return(0,m.jsxs)("button",{onClick:function(c){return a.onSelectSound((0,t.Z)({position:a.number},b))},children:[b.bend&&aa(b.dir,b.bend)||""," ",ai(b.note)]},c)})})]})]})},aP=function(a){return(0,m.jsx)("div",{className:aN().harmonica,children:(0,m.jsx)("div",{className:aN().body,children:Array(10).fill(0).map(function(b,c){var d,e;return(0,m.jsx)(aO,{onSelectSound:null!==(d=a.onSelectSound)&& void 0!==d?d:function(a){},number:c+1,data:null!==(e=a.layout&&a.layout[c+1])&& void 0!==e?e:[]},c)})})})},aQ=c(4280),aR=c.n(aQ),aS=function(a){var b=(0,p.useContext)(x),c=function(a){var c="note"==b.data.memory.insert.mode?al.addNote:al.extendChord;b.fn.saved.modifySheet(function(d){return"diatonic"==d.type?c(d,[a],b.data.memory.insert.duration,b.data.memory.selectedIndex):d}),b.fn.memory.setSelected(null)},d=b.data.memory.layouts.find(function(a){return a.label==b.data.saved.sheet.layout}),e="diatonic"==d.type&&d.layout;return(0,m.jsx)("span",{className:aR().harmonicaWrapper,children:(0,m.jsx)(aP,{layout:e,onSelectSound:c})})},aT=function(a){var b=(0,p.useContext)(x),c=(0,p.useRef)(null);return(0,m.jsxs)("div",{ref:c,className:aG().editor,children:[(0,m.jsxs)("header",{children:[(0,m.jsx)("button",{onClick:function(a){return window.open("?"+function(a){var b,c,d=a.memory.layouts.find(function(b){return b.label==a.saved.sheet.layout}),e=a.saved.sheet;if(d){switch(d.type){case"diatonic":if("diatonic"!=e.type)throw Error("Sheet type doesn't match layout type");c=["D"+d.sign,d.label,d.key,Object.entries(b=d.layout).map(function(a){var b=(0,q.Z)(a,2),c=b[0];return b[1].map(function(a){return I((0,u.Z)((0,t.Z)({},a),{position:Number(c)}))+a.note}).join(D)}).join(D),[e.title,e.meter,e.key].join(D),e.chords.map(function(a){switch(a.type){case"bar":return H;case"silence":return G+a.duration;case"chord":return a.notes.map(function(a){return I(a)}).join(F)+a.duration}}).join(D)];break;case"chromatic":c=["C"]}return encodeURI(c.join(E))}}(b.data))},children:"\uD83D\uDD17"}),(0,m.jsx)(W,{editorRef:c}),(0,m.jsx)(at,{}),(0,m.jsx)(aE,{})]}),(0,m.jsx)("main",{children:(0,m.jsx)(aL,{})}),(0,m.jsxs)("footer",{children:[(0,m.jsx)(aS,{}),(0,m.jsxs)("span",{className:aG().music,children:[(0,m.jsx)(aB,{}),(0,m.jsx)(ao,{onAdd:function(a){b.fn.memory.setSelected(null)},onRemove:function(){b.fn.memory.setSelected(null)}}),(0,m.jsx)(M,{})]})]})]})},aU=function(a){var b=(0,p.useContext)(x),c="unset"!=b.data.saved.sheet.type&&b.data.memory.layouts.some(function(a){return a.label==b.data.saved.sheet.layout});return(0,m.jsx)(m.Fragment,{children:c?a.children:a.fallback})},aV=c(1163),aW=c(9736),aX=c.n(aW),aY=function(a){return(0,m.jsxs)("div",{className:aX().loading,children:[(0,m.jsxs)("div",{className:aX().animationContainer,children:[(0,m.jsx)("div",{className:aX().dot+" "+aX().red}),(0,m.jsx)("div",{className:aX().dot+" "+aX().red}),(0,m.jsx)("div",{className:aX().dot+" "+aX().blue}),(0,m.jsx)("div",{className:aX().dot+" "+aX().blue})]}),(0,m.jsx)("span",{className:aX().text,children:"Loading..."})]})},aZ=function(a){var b=(0,p.useContext)(x),c=(0,aV.useRouter)(),d=(0,p.useState)(!1),e=d[0],f=d[1];return(0,p.useEffect)(function(){var a=function(a){var b=decodeURI(a);try{if("D"===b[0]){var c,d,e=b.split(E),f=e[1],g=e[2],h=(d=(c=e[3]).split(D).map(function(a){return(0,u.Z)((0,t.Z)({},J(a[0])),{note:a.slice(1)})}),Object.fromEntries(Array(10).fill(0).map(function(a,b){return[b+1,d.filter(function(a){return a.position==b+1}).sort(function(a,b){return a.bend-b.bend})]}))),i=e[4].split(D),j=e[5].split(D);return(0,u.Z)((0,t.Z)({},v),{memory:(0,u.Z)((0,t.Z)({},v.memory),{layouts:[{type:"diatonic",sign:e[0].slice(1),label:f,layout:h,key:g}]}),saved:{sheet:{type:"diatonic",title:i[0],meter:i[1],key:i[2],chords:j.map(function(a){if(a.startsWith(H))return{type:"bar"};if(a.startsWith(G))return{type:"silence",duration:a.slice(G.length)};var b=a.slice(0,1).split(F);return{type:"chord",notes:b.map(function(a){var b=J(a);return(0,u.Z)((0,t.Z)({},b),{note:h[b.position].find(function(a){return a.bend==b.bend&&a.dir==b.dir}).note})}),duration:a.slice(1)}}),layout:f}}})}return(0,t.Z)({},v)}catch(k){return console.error("Error while loading: ",k),(0,t.Z)({},v)}}(c.asPath.slice(c.asPath.indexOf("?")+1));a&&(b.fn.memory.setLayouts(a.memory.layouts),b.fn.saved.setSheet(a.saved.sheet)),f(!0)},[c.asPath]),(0,m.jsx)(m.Fragment,{children:e?a.children:(0,m.jsx)(aY,{})})},a$=function(a){var b=(0,p.useContext)(x),c=(0,p.useState)(!1),d=c[0],e=c[1];return(0,p.useEffect)(function(){(0,N.Z)(P().mark(function c(){var d,f;return P().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(a.layoutPath,{method:"GET",headers:{Accept:"application/json"}});case 2:if(200!=(d=c.sent).status){c.next=9;break}return c.next=6,d.text();case 6:c.t0=c.sent,c.next=10;break;case 9:c.t0="";case 10:var g;(f=c.t0)&&b.fn.memory.setLayouts((g=f,Object.values(JSON.parse(g).layouts))),e(!0);case 13:case"end":return c.stop()}},c)}))()},[a.layoutPath]),(0,m.jsx)(m.Fragment,{children:d?a.children:(0,m.jsx)(aY,{})})};function a_(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o(),{children:(0,m.jsx)("title",{children:"Harm-tab"})}),(0,m.jsx)(s,{children:(0,m.jsx)(y,{children:(0,m.jsx)(aZ,{children:(0,m.jsx)(a$,{layoutPath:"layouts.json",children:(0,m.jsx)(aU,{fallback:(0,m.jsx)(B,{}),children:(0,m.jsx)(aT,{})})})})})})]})}},4273:function(a){a.exports={panel:"ChordSwitcher_panel__NIqWV",chordSwitcher:"ChordSwitcher_chordSwitcher__5Vddf",active:"ChordSwitcher_active__V11sS"}},8170:function(a){a.exports={"harmonica-colors":"DiatonicHarmonica_harmonica-colors__jYnaA",harmonica:"DiatonicHarmonica_harmonica__uLRZU",body:"DiatonicHarmonica_body__k6qUd",hole:"DiatonicHarmonica_hole__3oKrL",note:"DiatonicHarmonica_note__5DuTV",buttonarea:"DiatonicHarmonica_buttonarea__Koj0e",bendpanel:"DiatonicHarmonica_bendpanel__x313w"}},2688:function(a){a.exports={"index-colors":"Editor_index-colors__Fog57",editor:"Editor_editor__DnxpZ",music:"Editor_music__QiB81"}},4280:function(a){a.exports={"index-colors":"EditorDiatonicHarmonica_index-colors__iNX7_",harmonicaWrapper:"EditorDiatonicHarmonica_harmonicaWrapper__VpIiI"}},9631:function(a){a.exports={"index-colors":"EditorSheet_index-colors__2doFh",sheetWrapper:"EditorSheet_sheetWrapper__uvvu5"}},9626:function(a){a.exports={layoutChooser:"LayoutChooser_layoutChooser__Ja8g3"}},9736:function(a){a.exports={loading:"Loading_loading__gDSZL",animationContainer:"Loading_animationContainer__Api0v",dot:"Loading_dot__v01Q8",dotmove:"Loading_dotmove__t81e6",red:"Loading_red__BH52t",blue:"Loading_blue__y56we",text:"Loading_text__eGipa"}},9045:function(a){a.exports={musicControl:"MusicControl_musicControl__pt62P",play:"MusicControl_play__EJ9PL",stop:"MusicControl_stop__2NjoQ",playing:"MusicControl_playing__YSUa0"}},1104:function(a){a.exports={panel:"MusicalElements_panel__mwTWe",musicalElements:"MusicalElements_musicalElements__bels2"}},8461:function(a){a.exports={noteComponent:"Note_noteComponent__8pLVa",notePlaceholder:"Note_notePlaceholder__EPz2W",note:"Note_note__Ec38g",dot:"Note_dot__Luh9v"}},1714:function(a){a.exports={panel:"NoteLengths_panel__5w_3l",notelengths:"NoteLengths_notelengths__N66SC","cap-max-width":"NoteLengths_cap-max-width__Ajnee",togglePanel:"NoteLengths_togglePanel__yR_PQ",toggle:"NoteLengths_toggle__M2H00",list:"NoteLengths_list__Kl_Wv",icon:"NoteLengths_icon__QnSGZ"}},174:function(a){a.exports={threeDotMenu:"ThreeDotMenu_threeDotMenu__n5dZa",button:"ThreeDotMenu_button__YYAW3"}}},function(a){a.O(0,[122,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])