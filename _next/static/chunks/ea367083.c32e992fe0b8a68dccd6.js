(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/r4t":function(e,t,o){"use strict";var n=o("284h"),a=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(o("1OyB")),i=a(o("vuIU")),s=a(o("JX7q")),c=a(o("md7G")),u=a(o("foSv")),d=a(o("Ji7U")),f=a(o("h4VS")),l=a(o("rePB")),y=a(o("wTIg")),v=n(o("q1tI")),m=o("qKvR"),x=o("WjF3"),C=v.default.createElement;function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(){var e=(0,f.default)(["\n    0% { stroke-dasharray: 0, "," };\n    100% { stroke-dasharray: ",", "," };\n  "]);return p=function(){return e},e}function A(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?A(Object(o),!0).forEach((function(t){(0,l.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var T={active:"#300d4f",faded:"#e3e3fc"},M={active:"#5c27af",faded:"#e8e8fc"},g={active:"#6636dd",faded:"#efeeff"},w={active:"#7466ff",faded:"#f3f3ff"},I=(0,y.default)("text",{target:"e10a4dpr0"})(b({},x.fontFamily.maisonBold),"font-size:13.75px;line-height:125%;text-align:end;text-anchor:end;fill:#300d4f;"),k=(0,y.default)("text",{target:"e10a4dpr1"})(b({},x.fontFamily.maison),"font-style:italic;font-size:12.5px;line-height:125%;text-align:end;text-anchor:end;fill:#300d4f;"),F=(0,y.default)("text",{target:"e10a4dpr2"})(b({},x.fontFamily.maison),"font-size:13.75px;line-height:125%;text-align:start;text-anchor:start;fill:#300d4f;"),E=(0,y.default)("path",{target:"e10a4dpr3"})("transition:0.1s linear all;",(function(e){var t=e.baseColor,o=void 0===t?T.active:t;return{fill:o!==T.active?o:T.active}}),(function(e){if(e.readyToInteract)return e.inFocus?{fill:e.baseColor}:{fill:e.fadedColor}}),""),O=(0,y.default)("text",{target:"e10a4dpr4"})(b({},x.fontFamily.maison),"font-size:13.75px;line-height:125%;text-align:start;text-anchor:start;fill:#300d4f;"),L=(0,y.default)("rect",{target:"e10a4dpr5"})({name:"px1c54",styles:"opacity:0.001;fill:#ffffff;"}),j=(0,y.default)("line",{target:"e10a4dpr6"})({stroke:T.active,strokeWidth:16,transition:"0.1s linear all",strokeDasharray:"0,1000"},(function(e){var t=e.baseColor,o=void 0===t?T.active:t;return{stroke:o!==T.active?o:T.active}}),(function(e){if(e.animation&&e.readyToAnimate)return{animation:"".concat((t=e.animation,(0,m.keyframes)(p(),t,t,t))," 1s ease forwards")};var t}),(function(e){if(e.readyToInteract)return e.inFocus?{stroke:e.baseColor}:{stroke:e.fadedColor}}),""),S=function(e){(0,d.default)(n,e);var t,o=(t=n,function(){var e,o=(0,u.default)(t);if(h()){var n=(0,u.default)(this).constructor;e=Reflect.construct(o,arguments,n)}else e=o.apply(this,arguments);return(0,c.default)(this,e)});function n(e){var t;return(0,r.default)(this,n),t=o.call(this,e),(0,l.default)((0,s.default)(t),"setObserver",(function(){var e=new IntersectionObserver((function(e){1===e[0].intersectionRatio&&(t.setState({readyToAnimate:!0}),setTimeout((function(){t.setState({readyToInteract:!0})}),1e3))}),{rootMargin:"0px",threshold:1});t.setState({observer:e});var o=t.graph.current;e.observe(o)})),(0,l.default)((0,s.default)(t),"setActiveColumn",(function(e){var o=t.state,n=o.columns,a=o.initialLoad;if(e){var r={};Object.keys(n).forEach((function(t){e.includes(t)?r[t]=!0:r[t]=!1})),t.setState({columns:r})}else{var i={};Object.keys(n).forEach((function(e){i[e]=!0})),t.setState({columns:i})}a&&t.setState({initialLoad:!1})})),t.graph=v.default.createRef(),t.state={columns:{one:!0,two:!0,three:!0,four:!0},initialLoad:!0,readyToAnimate:!1,readyToInteract:!1},t}return(0,i.default)(n,[{key:"componentDidMount",value:function(){this.setObserver()}},{key:"componentWillUnmount",value:function(){this.state.observer.disconnect()}},{key:"render",value:function(){var e=this,t=this.state,o=t.columns,n=t.readyToAnimate,a=t.readyToInteract;return C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 548 468",fill:"none",ref:this.graph},C("path",{d:"m 149.62635,6.4084166 0,387.5000034",style:{stroke:"#e9edf7",strokeWidth:2,strokeMiterlimit:10}}),C("path",{d:"m 260.22636,6.4084166 0,387.5000034",style:{stroke:"#e9edf7",strokeWidth:2,strokeMiterlimit:10}}),C("path",{d:"m 370.92634,6.4084166 0,387.5000034",style:{stroke:"#e9edf7",strokeWidth:2,strokeMiterlimit:10}}),C("path",{d:"m 481.52634,6.4084166 0,387.5000034",style:{stroke:"#e9edf7",strokeWidth:2,strokeMiterlimit:10}}),C(j,{y1:"37.008419",x2:"475.72635",y2:"37.008419",x1:"150.62636",animation:"325",baseColor:T.active,fadedColor:T.faded,inFocus:o.one,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["one"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"52.858318",x2:"542.72638",y2:"52.858318",x1:"150.62636",animation:"392",baseColor:M.active,fadedColor:M.faded,inFocus:o.two,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["two"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"68.408417",x2:"464.42633",y2:"68.408417",x1:"150.62636",animation:"314",baseColor:g.active,fadedColor:g.faded,inFocus:o.three,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["three"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"84.108322",x2:"329.84634",y2:"84.108322",x1:"150.62636",animation:"179",baseColor:w.active,fadedColor:w.faded,inFocus:o.four,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["four"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"129.40793",x2:"246.12636",y2:"129.40793",x1:"150.62636",animation:"96",baseColor:T.active,fadedColor:T.faded,inFocus:o.one,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["one"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"145.33092",x2:"215.82635",y2:"145.33092",x1:"150.62636",animation:"65",baseColor:M.active,fadedColor:M.faded,inFocus:o.two,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["two"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"160.58792",x2:"280.22635",y2:"160.58792",x1:"150.62636",animation:"130",baseColor:g.active,fadedColor:g.faded,inFocus:o.three,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["three"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"176.50792",x2:"397.22635",y2:"176.50792",x1:"150.62636",animation:"247",baseColor:w.active,fadedColor:w.faded,inFocus:o.four,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["four"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"221.80891",x2:"220.32635",y2:"221.80891",x1:"150.62636",animation:"70",baseColor:T.active,fadedColor:T.faded,inFocus:o.one,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["one"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"237.50092",x2:"221.62636",y2:"237.50092",x1:"150.62636",animation:"71",baseColor:M.active,fadedColor:M.faded,inFocus:o.two,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["two"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"252.52994",x2:"239.96056",y2:"252.52994",x1:"150.62636",animation:"89",baseColor:g.active,fadedColor:g.faded,inFocus:o.three,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["three"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"267.55191",x2:"239.96056",y2:"267.55191",x1:"150.62636",animation:"89",baseColor:w.active,fadedColor:w.faded,inFocus:o.four,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["four"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"314.20892",x2:"174.48846",y2:"314.20892",x1:"150.62636",animation:"24",baseColor:T.active,fadedColor:T.faded,inFocus:o.one,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["one"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"329.52292",x2:"175.52635",y2:"329.52292",x1:"150.62636",animation:"25",baseColor:M.active,fadedColor:M.faded,inFocus:o.two,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["two"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"345.45792",x2:"171.62636",y2:"345.45792",x1:"150.62636",animation:"21",baseColor:g.active,fadedColor:g.faded,inFocus:o.three,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["three"])},onMouseLeave:function(){e.setActiveColumn()}}),C(j,{y1:"360.53891",x2:"187.32635",y2:"360.53891",x1:"150.62636",animation:"37",baseColor:w.active,fadedColor:w.faded,inFocus:o.four,readyToInteract:a,readyToAnimate:n,onMouseEnter:function(){e.setActiveColumn(["four"])},onMouseLeave:function(){e.setActiveColumn()}}),C(I,{x:"131.78998",y:"48.404221"},"Yes"),C(I,{x:"131.95413",y:"141.00365"},"No"),C(I,{x:"131.55194",y:"233.25822"},"Not really"),C(I,{x:"131.93564",y:"325.47342"},"Not anymore"),C(k,{x:"131.33636",y:"64.826416"},C("tspan",{x:"131.73636",y:"64.826416"},"Currently using it"),C("tspan",{x:"131.73637",y:"80.451416"},"on a project")),C(k,{x:"131.33636",y:"157.14067"},C("tspan",{x:"131.73637",y:"157.14067"},"But I intend"),C("tspan",{x:"131.73637",y:"172.76567"},"to start using it")),C(k,{x:"130.73442",y:"249.64383"},C("tspan",{x:"131.13441",y:"249.64383"},"Only used it to learn/"),C("tspan",{x:"131.13441",y:"265.26883"},"play around")),C(k,{x:"131.33636",y:"342.23209"},C("tspan",{x:"131.73637",y:"342.23209"},"Used it on a project"),C("tspan",{x:"131.73637",y:"357.85709"},"in the past")),C(F,{x:"139.07199",y:"416.72845"},"0",C("tspan",{style:{fontSize:"11.25px",lineHeight:"125%"}},"%")),C(F,{x:"246.97148",y:"416.72845"},"20",C("tspan",{style:{fontSize:"11.25px",lineHeight:"125%"}},"%")),C(F,{x:"468.20984",y:"416.72876"},"60",C("tspan",{style:{fontSize:"11.25px",lineHeight:"125%"}},"%")),C(F,{x:"357.59067",y:"416.72845"},"40",C("tspan",{style:{fontSize:"11.25px",lineHeight:"125%"}},"%")),C("g",null,C(E,{d:"m 161.72635,448.0079 -13.1,0 0,13.10002 13.1,0 0,-13.10002 z",baseColor:T.active,fadedColor:T.faded,inFocus:o.one,readyToInteract:a}),C(O,{y:"458.90097",x:"168.71275"},"Total"),C(L,{ry:0,rx:0,y:"444.22525",x:"145.04657",height:"20.439299",width:"80.084404",onMouseEnter:function(){e.setActiveColumn(["one"])},onMouseLeave:function(){e.setActiveColumn()}})),C("g",null,C(E,{d:"m 242.92635,448.0079 -13.1,0 0,13.10002 13.1,0 0,-13.10002 z",baseColor:M.active,fadedColor:M.faded,inFocus:o.two,readyToInteract:a}),C(O,{y:"458.96661",x:"249.6664"},"Employees"),C(L,{ry:0,rx:0,y:"444.22525",x:"225.03322",height:"20.439299",width:"108.1628",onMouseEnter:function(){e.setActiveColumn(["two"])},onMouseLeave:function(){e.setActiveColumn()}})),C("g",null,C(E,{d:"m 350.12635,448.0079 -13.10001,0 0,13.10002 13.10001,0 0,-13.10002 z",baseColor:g.active,fadedColor:g.faded,inFocus:o.three,readyToInteract:a}),C(O,{y:"458.9324",x:"356.93747"},"Freelances"),C(L,{ry:0,rx:0,y:"444.22525",x:"333.09827",height:"20.439299",width:"102.35349",onMouseEnter:function(){e.setActiveColumn(["three"])},onMouseLeave:function(){e.setActiveColumn()}})),C("g",null,C(E,{d:"m 453.32635,448.0079 -13.09999,0 0,13.10002 13.09999,0 0,-13.10002 z",baseColor:w.active,fadedColor:w.faded,inFocus:o.four,readyToInteract:a}),C(O,{y:"458.96664",x:"460.35788"},"Students"),C(L,{ry:0,rx:0,y:"444.22525",x:"435.354",height:"20.439299",width:"102.35349",onMouseEnter:function(){e.setActiveColumn(["four"])},onMouseLeave:function(){e.setActiveColumn()}})))}}]),n}(v.Component);t.default=S}}]);
//# sourceMappingURL=ea367083.c32e992fe0b8a68dccd6.js.map