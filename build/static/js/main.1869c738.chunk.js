(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n.p+"static/media/market-size.07321148.png"},40:function(e,t,n){e.exports=n.p+"static/media/product-roadmap.85920431.png"},41:function(e,t,n){e.exports=n.p+"static/media/cam-avatar.60119ab8.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/james-avatar.72e01861.jpg"},43:function(e,t,n){e.exports=n.p+"static/media/michael-avatar.b6f56642.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/lifepreserver.ec4ecbf2.png"},45:function(e,t,n){e.exports=n.p+"static/media/waves.a95d8440.png"},51:function(e,t,n){e.exports=n(91)},56:function(e,t,n){},68:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(21),i=n.n(r),o=(n(56),n(10)),s=n(11),c=n(14),m=n(12),d=n(15),u=n(16),p=n(6),h=n(7),g=n(92),y=n(3),f={primaryColor:"rgba(189, 137, 185, 1)",primaryColorLight:"rgba(240, 185, 235, 1)",primaryColorDark:"rgba(140, 91, 137, 1)",secondaryColor:"rgba(77, 44, 145, 1)",secondaryColorLight:"rgba(126, 87, 194, 1)",secondaryColorDark:"rgba(24, 1, 98, 1)",primaryTextColor:"rgba(0, 0, 0, 1)",secondaryTextColor:"rgba(255, 255, 255, 1)"},x=n(8),E=n.n(x),b=n(34),v=n.n(b);function C(){var e=Object(p.a)(["\n  @media (max-width: 768px) {\n    &.long {\n      display: none;\n    }\n  }\n"]);return C=function(){return e},e}function w(){var e=Object(p.a)(["\n  display: flex;\n  @media (min-width: 769px) {\n    &.short {\n      display: none;\n    }\n  }\n"]);return w=function(){return e},e}function k(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 70%;\n  @media (max-width: 767px) {\n    &.menu {\n      display: none;\n    }\n  }\n"]);return k=function(){return e},e}function j(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  @media (min-width: 768px) {\n    &.mobileMenu {\n      display: none;\n    }\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n  color: ",";\n  margin-right: 20px;\n  text-decoration: none;\n  &:hover {\n    border-bottom: 4px solid currentColor;\n    display: inline-block;\n  }\n  &.active {\n    border-bottom: 4px solid currentColor;\n    color: ",";\n    display: inline-block;\n  }\n"]);return O=function(){return e},e}var T=Object(h.a)(g.a)(O(),f.secondaryColor,f.primaryColor),S=Object(h.a)(v.a)(j()),H=h.a.div(k()),I=h.a.svg(w()),N=h.a.svg(C()),D=function(e){return l.a.createElement(y.Row,{style:{margin:"0px 15% 100px 15%"}},l.a.createElement(y.Cell,{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"50px"},phoneColumns:2,tabletColumns:2,desktopColumns:4},l.a.createElement(N,{width:"150",height:"100",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"long"},l.a.createElement("a",{href:"/"},l.a.createElement("image",{xlinkHref:"https://s3.amazonaws.com/privatir.com/Privatir-logo.svg",height:"100",width:"150"}))),l.a.createElement(I,{width:"32",height:"50",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"short"},l.a.createElement("a",{href:"/"},l.a.createElement("image",{xlinkHref:"https://s3.amazonaws.com/privatir.com/privatir-shortform.svg",height:"50",width:"32"})))),l.a.createElement(y.Cell,{phoneColumns:2,tabletColumns:6,desktopColumns:8,style:{display:"flex",alignItems:"center",width:"100%",height:"50px",justifyContent:"flex-end"}},l.a.createElement(H,{className:"menu"},l.a.createElement(T,{exact:!0,to:"/team"},"Team"),l.a.createElement(T,{exact:!0,to:"/product"},"Product")),l.a.createElement(S,{className:"mobileMenu",onClick:e.sideNavToggle},l.a.createElement(E.a,{icon:"menu",style:{fontSize:"28px"}}))))},W=n(38),A=n.n(W),R=n(9),B=n.n(R);n(68);function P(){var e=Object(p.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &.active {\n    color: ",";\n    border: none;\n    display: inline-block;\n  }\n"]);return P=function(){return e},e}var z=Object(h.a)(g.a)(P(),f.secondaryColor,f.primaryColor),F=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).mainContentElem=l.a.createRef(),n.onDrawerClose=function(){n.setState({open:!1}),n.focusFirstFocusableItem()},n.onClick=function(){n.props.sideNavToggle()},n.state={selectedIndex:0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(A.a,{dismissible:!0,open:this.props.sideNavOpen,style:{zIndex:"100"}},l.a.createElement(B.a,{singleSelection:!0,selectedIndex:this.state.selectedIndex},l.a.createElement(R.ListGroup,null," ",l.a.createElement(R.ListItem,null,l.a.createElement(z,{style:{display:"flex",alignItems:"center"},to:"/",exact:!0},l.a.createElement(R.ListItemGraphic,{graphic:l.a.createElement(E.a,{icon:"home"})}),l.a.createElement(R.ListItemText,{primaryText:"Home"}))),l.a.createElement(R.ListItem,null,l.a.createElement(z,{style:{display:"flex",alignItems:"center"},to:"/product/",exact:!0},l.a.createElement(R.ListItemGraphic,{graphic:l.a.createElement(E.a,{icon:"build"})}),l.a.createElement(R.ListItemText,{primaryText:"Product"}))),l.a.createElement(R.ListItem,null,l.a.createElement(z,{to:"/team/",style:{display:"flex",alignItems:"center"},exact:!0},l.a.createElement(R.ListItemGraphic,{graphic:l.a.createElement(E.a,{icon:"group"})}),l.a.createElement(R.ListItemText,{primaryText:"Team"}))))))}}]),t}(a.Component),L=n(26);function G(){var e=Object(p.a)(["\n  display: flex;\n"]);return G=function(){return e},e}function M(){var e=Object(p.a)(["\n  &:hover {\n    color: ",";\n  }\n"]);return M=function(){return e},e}var q=Object(h.a)(L.a)(M(),function(e){return"light"===e.surrounding?f.primary:f.secondaryTextColor}),J=h.a.svg(G()),U=function(){return l.a.createElement(y.Row,{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},l.a.createElement("hr",{style:{border:"0.01rem solid ".concat(f.primaryColor),minWidth:"70%",marginTop:"40px"}}),l.a.createElement(y.Cell,{phoneColumns:4,tabletColumns:8,desktopColumns:12,style:{display:"flex",justifyContent:"space-around",minWidth:"70%"}},l.a.createElement(q,{to:"/",surrounding:"light"},"Terms"),l.a.createElement(J,{width:"32",height:"50",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"short"},l.a.createElement("a",{href:"/"},l.a.createElement("image",{xlinkHref:"https://s3.amazonaws.com/privatir.com/privatir-shortform.svg",height:"50",width:"32"}))),l.a.createElement(q,{to:"/",surrounding:"light"}," ","Privacy")))},X=n(2),Y=n(39),_=n.n(Y),K=n(40),V=n.n(K),$=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={sideNavOpen:!1},n.sideNavToggle=n.sideNavToggle.bind(Object(u.a)(Object(u.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"sideNavToggle",value:function(e){this.setState({sideNavOpen:!this.state.sideNavOpen})}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"100vh"}},l.a.createElement(y.Cell,{columns:4},l.a.createElement(F,{sideNavOpen:this.state.sideNavOpen})),l.a.createElement(y.Grid,{style:{height:"100vh"}},l.a.createElement(D,{sideNavToggle:this.sideNavToggle}),l.a.createElement(y.Row,{style:{margin:"0px 15% 0px 15%"}},l.a.createElement(y.Cell,{desktopColumns:12,phoneColumns:4,tabletColumns:8},l.a.createElement("div",{style:{display:"flex",margin:"0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column"}},l.a.createElement(X.Headline3,{style:{fontWeight:"bold",textAlign:"center"}},"Fundraising shouldn't be a chore"),l.a.createElement(X.Headline6,{style:{textAlign:"center",width:"90%"}},"Leave the opening salvos to us. Consolidate your channel(s) of communication, reclaim your precious time and energy and get back to doing what you do best \u2014 building really great products and services ."))),l.a.createElement(y.Cell,{desktopColumns:12,tabletColumns:8},l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("hr",{style:{border:"0.01rem solid ".concat(f.primaryColor),width:"30%",marginTop:"40px"}})))),l.a.createElement(y.Row,{style:{margin:"100px 15%"}},l.a.createElement(y.Cell,{desktopColumns:4,tabletColumns:8},l.a.createElement(X.Headline4,{style:{textAlign:"center"}},"Do one thing, and do it well."),l.a.createElement(X.Body1,{style:{textAlign:"center"}},"The scope of the utility Privatir will provide you is narrow by design: provide a single interface to collect, organize and eventually reference investor inquiries and the breadcrumbs of information typically lost in the unread email vortex. Act when YOU are ready.")),l.a.createElement(y.Cell,{desktopColumns:4,tabletColumns:8},l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(X.Headline4,{style:{textAlign:"center"}},"Collect, Order, Reference"),l.a.createElement(X.Body1,{style:{textAlign:"center"}},"Privatir aims to stand between you and what at times feels like a ceaseless onslaught."))),l.a.createElement(y.Cell,{desktopColumns:4,tabletColumns:8},l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(X.Headline4,{style:{textAlign:"center"}},"Know the who and what"),l.a.createElement(X.Body1,{style:{textAlign:"center"}},"What good is a network if you can't tap into it quickly and easily? Don't make it an email excavation project!"))),l.a.createElement(y.Cell,{desktopColumns:12,tabletColumns:8},l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("hr",{style:{border:"0.01rem solid ".concat(f.primaryColor),width:"30%",marginTop:"40px"}})))),l.a.createElement(y.Row,{style:{margin:"100px 15% 0px 15%"}},l.a.createElement(y.Cell,{desktopColumns:7,tabletColumns:8},l.a.createElement("img",{style:{width:"100%",height:"50%",zIndex:"9"},src:_.a,alt:"market-size"})),l.a.createElement(y.Cell,{desktopColumns:5,tabletColumns:8},l.a.createElement(X.Headline4,null,"Market Dynamics"),l.a.createElement(X.Headline6,null,"The long term trends point toward a continued expansion of the PE/VC flavor of early-stage investment."),l.a.createElement(X.Headline6,null,"Executives and decision makers who have the deepest insights into this currently disjointed space will be best positioned to capitalize and locate investment partners best aligned with the goals and direction of their respective organizations.")),l.a.createElement(y.Cell,{desktopColumns:12,tabletColumns:8},l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("hr",{style:{border:"0.01rem solid ".concat(f.primaryColor),width:"30%",marginTop:"40px"}})))),l.a.createElement(y.Row,{style:{margin:"100px 15% 0px 15%"}},l.a.createElement(y.Cell,{desktopColumns:5,tabletColumns:8},l.a.createElement(X.Headline4,{style:{textAlign:"center"}},"Proposed Product Roadmap"),l.a.createElement(X.Headline6,{style:{textAlign:"center"}},"See where we're headed in the near term. Stay tuned for more soon!")),l.a.createElement(y.Cell,{desktopColumns:7,tabletColumns:8},l.a.createElement("img",{style:{width:"100%",height:"50%",zIndex:"9"},src:V.a,alt:"product-roadmap"}))),l.a.createElement(U,null)))}}]),t}(a.Component),Q=n(41),Z=n.n(Q),ee=n(42),te=n.n(ee),ne=n(43),ae=n.n(ne),le=n(18),re=n.n(le),ie=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={sideNavOpen:!1},n.sideNavToggle=n.sideNavToggle.bind(Object(u.a)(Object(u.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"sideNavToggle",value:function(e){this.setState({sideNavOpen:!this.state.sideNavOpen})}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"100vh"}},l.a.createElement(y.Cell,{phoneColumns:4},l.a.createElement(F,{sideNavOpen:this.state.sideNavOpen})),l.a.createElement(y.Grid,{style:{height:"100vh"}},l.a.createElement(D,{sideNavToggle:this.sideNavToggle}),l.a.createElement(y.Row,{style:{margin:"0px 15% 0px 15%"}},l.a.createElement(y.Cell,{phoneColumns:4,tabletColumns:8,desktopColumns:12},l.a.createElement(X.Headline3,{style:{textAlign:"center"}},"Meet Our Team!")),l.a.createElement(y.Cell,{phoneColumns:4,tabletColumns:8,desktopColumns:6},l.a.createElement(re.a,{style:{maxWidth:"500px"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"80%",margin:"auto",textAlign:"center"}},l.a.createElement("img",{src:Z.a,style:{width:"150px",height:"150px",marginTop:"20px",borderRadius:"1000px"},alt:"cam-founder-avatar"}),l.a.createElement(X.Headline4,{style:{fontWeight:"bold"}},"Cameron Rison"),l.a.createElement(X.Headline6,{style:{color:"".concat(f.secondaryColorDark)}},"Co-Founder + SWE"),l.a.createElement(X.Body1,null,"Cam is a full stack SWE focused primarily on Infrastructure and Site Reliability. He graduated from the University of Texas @ Austin with a BS in Computer Science in 2014. Since completing an undergraduate degree, Cam has worked @ GM across the software stack continuing to grow in both depth and breadth of software knowledge and expertise.")))),l.a.createElement(y.Cell,{phoneColumns:4,tabletColumns:8,desktopColumns:6},l.a.createElement(re.a,{style:{maxWidth:"500px"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"80%",margin:"auto",textAlign:"center"}},l.a.createElement("img",{src:te.a,style:{width:"150px",height:"150px",marginTop:"20px",borderRadius:"1000px"},alt:"james-founder-avatar"}),l.a.createElement(X.Headline4,{style:{fontWeight:"bold"}},"James Thwing"),l.a.createElement(X.Headline6,{style:{color:"".concat(f.secondaryColorDark)}},"Co-Founder + Operations"," "),l.a.createElement(X.Body1,null,"James has operational and finance experience in corporate development, investment banking and private equity across a variety of industry verticals. He also leads sourcing and investment due diligence at the SaaS-focused Private Debt and Equity firm Recurring Capital. James received a BS in Mechanical Engineering from the University of Texas at Austin and is currently pursuing an MBA at UT Austin.")))),l.a.createElement(y.Cell,{phoneColumns:4,tabletColumns:8,desktopColumns:6},l.a.createElement(re.a,{style:{maxWidth:"500px"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"80%",margin:"auto",textAlign:"center"}},l.a.createElement("img",{src:ae.a,style:{width:"150px",height:"150px",marginTop:"20px",borderRadius:"1000px"},alt:"michael-founder-avatar"}),l.a.createElement(X.Headline4,{style:{fontWeight:"bold"}},"Michael Crowther"),l.a.createElement(X.Headline6,{style:{color:"".concat(f.secondaryColorDark)}},"Co-Founder + SWE"," "),l.a.createElement(X.Body1,null,"Michael is a full stack developer whose passionate about technology, music, fitness, food and personal development. I am currently working on an awesome team building a solution that leverages Cyphre\u2019s BlackTIE encryption technology to protect enterprises that make use of an array of cloud storage services."," "))))),l.a.createElement(U,null)))}}]),t}(a.Component),oe=n(44),se=n.n(oe),ce=n(45),me=n.n(ce),de=n(27),ue=n.n(de),pe=n(28),he=n.n(pe),ge=n(46),ye=n.n(ge),fe=n(19),xe=n(47),Ee=n.n(xe);function be(){var e=Object(p.a)(["\n  display: ",";\n"]);return be=function(){return e},e}function ve(){var e=Object(p.a)(["\n  animation: "," 1s ease-in;\n\n  display: ",";\n  justify-content: center;\n  align-items: center;\n"]);return ve=function(){return e},e}function Ce(){var e=Object(p.a)(["\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n"]);return Ce=function(){return e},e}var we=function(){return l.a.createElement(y.Row,{style:{marginTop:"4rem",marginBottom:"4rem",display:"flex",justifyContent:"center"}},l.a.createElement(y.Cell,{phoneColumns:4},l.a.createElement(re.a,{style:{padding:"2rem",width:"80%",margin:"auto",maxWidth:"600px"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement(X.Headline3,{style:{textAlign:"center"}},"Sound familiar?"),l.a.createElement(X.Headline6,null,"\"We've received probably 50 emails from potential private equity and venture capital investors in the last 6 months."),l.a.createElement(X.Subtitle2,{style:{alignSelf:"center"}},"\u2014 Bill Gates"),l.a.createElement(X.Headline6,null,"\"I just don't have time to respond to all of the private equity shops. I'm just trying to run my business.\""),l.a.createElement(X.Subtitle2,{style:{alignSelf:"center"}},"\u2014 Warren Buffet"),l.a.createElement(X.Headline6,null,'"I\'m not ready to take on outside investment yet. Especially from the coasts."'),l.a.createElement(X.Subtitle2,{style:{alignSelf:"center"}},"\u2014 Mark Cuban")))))},ke=function(){return l.a.createElement("div",null,l.a.createElement("section",{style:{marginTop:"50px",height:"100%",width:"100%",marginBottom:"-1px"}},l.a.createElement(fe.Parallax,{data:{"data-bottom-top":"opacity: 1;transform: translate(-150px, 0px);","data-center-center":"opacity: 1; transform: translate(0px, 0px);","data-top-bottom":"opacity: 1;transform: translate(150px, 0px);"},style:{width:"100%",height:"100%"}},l.a.createElement("div",{style:{background:"no-repeat url(".concat(me.a,")"),backgroundSize:"100% 100%",backgroundPositionX:"center",backgroundPositionY:"center",height:"80vh",width:"100vw"}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",position:"absolute",top:"70vh",left:"50%"}},l.a.createElement("img",{style:{width:"10vw",height:"10vh",zIndex:"9"},src:se.a,alt:"life-preserver"}))))},je=function(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",flexFlow:"row wrap",textAlign:"center",justifyContent:"center",backgroundColor:"#f1dcf2",zIndex:"9"}},l.a.createElement(y.Row,{style:{margin:"0px 15% 50px 15%"}},l.a.createElement(y.Cell,{phoneColumns:8},l.a.createElement(fe.Parallax,{data:{"data-bottom-top":"opacity: 1;transform: translate(-100%, 0px);","data-center-center":"opacity: 1; transform: translate(0px, 0px);","data-top-bottom":"opacity: 1;transform: translate(100%, 0px);"},style:{width:"100%"}},l.a.createElement(X.Headline4,{style:{width:"100%",fontWeight:"bold",lineHeight:"1.1",letterSpacing:"3px"}},"Reduce the sea of emails to a stream."," ")))),l.a.createElement(y.Row,{style:{margin:"0px 15% 0px 15%"}},l.a.createElement(y.Cell,{phoneColumns:4,tabletColumns:8},l.a.createElement("div",{style:{display:"flex",height:"100%",width:"100%",flexDirection:"column"}},l.a.createElement(X.Headline4,null,"Problem"),l.a.createElement(E.a,{style:{display:"block",fontSize:"48px"},icon:"visibility_off"}),l.a.createElement(X.Headline6,null,"There's an age-old adage \u2014 You cannot hit what you cannot see."),l.a.createElement(X.Body1,null,"The fundamental lack of repeatable, efficicent communication vehicle in the private investment ecosystem usually results in hours of lost time, energy or worse \u2014 valuable contacts."))),l.a.createElement(y.Cell,{phoneColumns:4,tabletColumns:8,style:{display:"flex",flexDirection:"column"}},l.a.createElement("div",{style:{display:"flex",height:"100%",width:"100%",flexDirection:"column"}},l.a.createElement(X.Headline4,null,"Solution"),l.a.createElement(E.a,{style:{display:"block",fontSize:"48px"},icon:"group_work"}),l.a.createElement(X.Headline6,null,"A singularly focused tool providing a central channel through which all of your investor related communications are co-located and easily accessible."))),l.a.createElement(y.Cell,{phoneColumns:4,tabletColumns:8,style:{marginBottom:"50px"}},l.a.createElement("div",{style:{display:"flex",height:"100%",width:"100%",flexDirection:"column"}},l.a.createElement(X.Headline4,null,"Self-Actualization"),l.a.createElement(E.a,{style:{display:"block",fontSize:"48px"},icon:"highlight"}),l.a.createElement(X.Headline6,null,"We love Google Sheets, but how well does that scale?"),l.a.createElement(X.Headline6,null,"We are stepping fundraising communication channels into 2019. Come join us!"),l.a.createElement(ue.a,{style:{minHeight:"70px",display:"flex",alignItems:"center",marginTop:"10px"},outlined:!0},l.a.createElement(L.a,{to:"/product/"},l.a.createElement(X.Headline6,{style:{margin:"0px"}},"Check out what we're building")))))))},Oe=Object(h.b)(Ce()),Te=h.a.div(ve(),Oe,function(e){return e.submitted?"flex":"none"}),Se=h.a.div(be(),function(e){return e.submitted?"none":"flex"}),He=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){n.setState({email:e.target.value})},n.postData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new Headers;return n.append("Content-Type","application/json"),Ee()(e,{method:"POST",cors:"same-origin",cache:"no-cache",headers:n,redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}).then(function(e){return console.log(e),e.ok?e.json():e})},n.onFabClick=function(e){window.location.reload()},n.onSubmit=function(e){n.postData("https://api.privatir.com/api/newsletter_subscribe",{email:n.state.email}).then(function(e){return n.setState({email:""}),"202"===e.status||"200"===e.status?(n.setState({submitted:!0}),e):(n.setState({submitted:!0,submissionError:!0}),e)}).catch(function(e){n.setState({submitted:!0,submissionError:!0}),console.error(e)}),e.preventDefault()},n.state={email:"",submitted:!1,submissionError:!1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(y.Row,{style:{margin:"0px 15% 0px 15%",textAlign:"center"}},l.a.createElement(y.Cell,{desktopColumns:12,tabletColumns:8,style:{display:"flex",flexDirection:"column"}},l.a.createElement(X.Headline3,null,"Coming Soon!"),l.a.createElement(X.Headline4,null,"We're working hard to get this product to launch!"),l.a.createElement(X.Headline6,null,"Join our newsletter and we'll keep you posted."),l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginTop:"50px",marginBottom:"150px"}},l.a.createElement("div",{style:{width:"500px",maxWidth:"100%",position:"absolute"}},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement(Se,{submitted:this.state.submitted},l.a.createElement(he.a,{label:"Please enter your email.",style:{borderRadius:"50px",width:"100%"}},l.a.createElement(pe.Input,{style:{background:"#FFFFFF"},value:this.state.email,name:"subscribe",onChange:this.onChange,type:"email",required:!0})),l.a.createElement(ue.a,{style:{position:"absolute",right:0,borderRadius:"50px",height:"56px"},outlined:!0},"Subscribe")),l.a.createElement(Te,{submitted:this.state.submitted},l.a.createElement(ye.a,{onClick:this.onFabClick,mini:!0,icon:this.state.submitted&&!this.state.submissionError?l.a.createElement(E.a,{style:{color:"#018786"},icon:"check"}):l.a.createElement(E.a,{icon:"clear",style:{color:"#d82717"}})}),this.state.submitted&&!this.state.submissionError?l.a.createElement(X.Headline6,{style:{margin:"0px 0px 0px 15px",fontWeight:"bold"}},"You're now subscribed!"):l.a.createElement(X.Headline6,{style:{margin:"0px 0px 0px 15px",fontWeight:"bold"}},"Something went wrong! Please try again.")))))))}}]),t}(a.Component),Ie=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={sideNavOpen:!1},n.sideNavToggle=n.sideNavToggle.bind(Object(u.a)(Object(u.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"sideNavToggle",value:function(e){this.setState({sideNavOpen:!this.state.sideNavOpen})}},{key:"render",value:function(){return l.a.createElement("div",{style:{height:"100vh"}},l.a.createElement(y.Cell,{columns:4},l.a.createElement(F,{sideNavOpen:this.state.sideNavOpen})),l.a.createElement(y.Grid,null,l.a.createElement(D,{sideNavToggle:this.sideNavToggle}),l.a.createElement(y.Row,{style:{margin:"0px 15% 0px 15%"}},l.a.createElement(y.Cell,{columns:8},l.a.createElement(X.Headline1,null,"Inbox flooded with investor emails?"),l.a.createElement(X.Headline4,null,"We know. And we're here to lend a life line.")))),l.a.createElement(ke,null),l.a.createElement(je,null),l.a.createElement(we,null),l.a.createElement(He,null),l.a.createElement(U,null))}}]),t}(a.Component),Ne=n(93),De=n(49),We=n(48),Ae=n.n(We),Re=n(29),Be=n.n(Re);Be.a.overrideStyles=function(e,t){e.rhythm;return{a:{color:"".concat(f.secondaryColor),textDecoration:"none",fontWeight:"bold"},"a:hover":{color:"".concat(f.primaryColor),textDecoration:"none"},"a.active":{borderBottom:"4px solid ".concat(f.primaryColor)}}};var Pe=new Ae.a(Be.a),ze=(n(90),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(Ne.a,null,l.a.createElement("div",{style:{height:"100%"}},l.a.createElement(fe.ParallaxProvider,{init:{smoothScrollingDuration:1e3,smoothScrolling:!0,forceHeight:!1},style:{height:"100%"}},Pe.injectStyles(),l.a.createElement(De.a,{path:"/",exact:!0,component:Ie}),l.a.createElement(De.a,{path:"/product/",component:$}),l.a.createElement(De.a,{path:"/team/",component:ie}))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.1869c738.chunk.js.map