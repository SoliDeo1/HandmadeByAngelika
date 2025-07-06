(self.modernJsonp=self.modernJsonp||[]).push([[76673,45204,89870],{60139:e=>{"use strict";function t(e){return function(){return e}}var i=function(){};i.thatReturns=t,i.thatReturnsFalse=t(!1),i.thatReturnsTrue=t(!0),i.thatReturnsNull=t(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},663620:(e,t,i)=>{"use strict";e.exports=i(60139)},243640:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(667294),o=i(517585),a=i(785893);function s({page:e,children:t}){let i=(0,n.useMemo)(()=>({logging:{viewType:"login"===e&&9||"businessLogin"===e&&267||void 0},pageType:e}),[e]);return(0,a.jsx)(n.Fragment,{children:(0,a.jsx)(o.Mi,{value:i,children:t})})}},901895:(e,t,i)=>{"use strict";i.d(t,{Z:()=>D});var n=i(667294),o=i(545007),a=i(420205),s=i(547504),l=i(19963),r=i(463227),c=i(629026),d=i(294113),g=i(67503),p=i(17151),h=i(517585),u=i(18644),m=i(233846),f=i(116629),b=i(693806),_=i(353401),x=i(91672),w=i(250964),y=i(966265),j=i(243694),Z=i(281508),v=i(964273),S=i(419199),P=i(967312),T=i(262570),A=i(174646),I=i(943369),E=i(112800),C=i(677316),k=i(538645),M=i(882368),L=i(785893);function O(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class z extends n.Component{constructor(...e){super(...e),O(this,"state",{modal:null}),O(this,"annotateOneTapStopwatch",e=>(0,T.M3)("google_autologin",e)),O(this,"abortOneTapStopwatch",e=>(0,T.RP)("google_autologin",e)),O(this,"stopOneTapStopwatch",()=>(0,T.PA)("google_autologin")),O(this,"trackAutologin",e=>(0,E.dy)({event:e,provider:"google"})),O(this,"deferredHandleOneTapResponse",e=>{setTimeout(()=>{this.handleOneTapResponse(e)},5e3)}),O(this,"handleOneTapResponse",e=>{let t,{autologinDisabled:i,login:n,viewer:o}=this.props;if(!e)return;let{credential:a,select_by:l}=e,r=(0,x.PL)(l),c="AUTO_LOGIN"===r;if(this.annotateOneTapStopwatch("autoLoginGoogleEnd"),this.stopOneTapStopwatch(),c&&i)return;c&&this.trackAutologin("pinterest_login_start"),t=c?"autologin_google":"ONE_TAP_PROMPT"===r?"google_one_tap":"SIGN_IN_WITH_GOOGLE_BUTTON"===r&&(0,I.M0)().getItem(s.bg)||"google_unknown";let{pageContext:d}=this.props;n({creds:{google_open_id_token:a,autologin:c},loggingOptions:{loggingData:{container:"google_one_tap_modal",page:d?.pageType,trigger:(0,x.mK)(r)},loginAttemptContextEvent:{event_type:7534,element:"SIGN_IN_WITH_GOOGLE_BUTTON"===r?12981:"ONE_TAP_PROMPT"===r?12982:null,aux_data:{signup_login_method:v.Z.GOOGLE_ONE_TAP,upsell_reason:t,...o.isAuth?{login_state:o.isLimitedLogin?j.Z.LIMITED:j.Z.DEFAULT}:{}}}}}).then(()=>{let{nextUrl:e}=this.props;c&&this.trackAutologin("pinterest_login_success"),e?Z.ZP.handleRedirect(e):Z.ZP.handleRedirectWithFallbackWindowLocation(),c&&this.trackAutologin("end")},e=>{let{hide:t,handleLoginWithMfa:i}=this.props;c&&this.trackAutologin("pinterest_login_failure");let n=(0,u.Z)(e,"api_error_code");if(n===b.xN)if("SIGN_IN_WITH_GOOGLE_BUTTON"===r)this.attemptSignup({googleOpenId:a});else{let e="business_login_page"===this.props.container;this.setState({modal:{type:"confirmSignup",step:e?c&&"staticSignupLogin"||"delayedSignupLoadingSpinner":"staticSignupLoginWithTOS",handleConfirmSignup:()=>this.attemptSignup({googleOpenId:a})}})}else if(n===b.Zn)i(a);else if(n===b.an)this.setState({modal:{type:"accountSuspended"}});else{let e=this.props.i18n.bt("Не удалось войти в этот аккаунт. Попробуйте нажать кнопку Google.", "We couldn’t log you in with that account. Try the Google button!", " - ", undefined, true);(0,g.x)(e),t()}c&&this.trackAutologin("end")})}),O(this,"attemptSignup",({googleOpenId:e})=>{let{handleGdprRequiresAge:t,pageContext:i}=this.props,n=(0,_.Z)(e);t({options:{type:"google",google_open_id_token:e,first_name:n.given_name,last_name:n.family_name,image_url:n.picture},context:{container:"google_one_tap_modal",page:i?.pageType}}),(0,E.NC)("check_age_with_one_tap_from_one_tap_dweb")})}componentDidMount(){let{requestContext:e,webGoogleDisabled:t}=this.props;r.U2(a.e7)&&(0,E.My)(`pcons.google_autologin_disabled_cookie.login_page.${(0,S.M)()}`),t||r.U2(a.e7)&&e.isBot?this.abortOneTapStopwatch("disabled"):(this.setupGoogleOneTap(),e.isBot||(0,E.My)("unauth_web_container.google_one_tap_modal.tier1.other.shown"))}async setupGoogleOneTap(){let{googleSignInApi:e,deviceType:t}=this.props;await e?.ensureInit("oneTap",this.deferredHandleOneTapResponse),this.trackAutologin("show_ui"),(0,x.Fm)()?.prompt(e=>{(0,y.Z)(e,t)})}render(){let{requestContext:e,webGoogleDisabled:t,hide:i}=this.props,{modal:n}=this.state;if(e.isBot||t||!n)return null;switch(n.type){case"accountSuspended":return(0,L.jsx)(c.Z,{onClose:()=>this.setState({modal:null})});case"confirmSignup":return(0,L.jsx)(d.Z,{handleCancelClick:()=>this.setState({modal:null}),handleConfirmSignup:n.handleConfirmSignup,handleShowLogin:i,step:n.step});default:return null}}}function D({container:e,handleGdprRequiresAge:t,handleLoginWithMfa:i,nextUrl:a}){let s=(0,p.Z)(),{logContextEvent:r}=(0,l.v)(),c=(0,m.ZP)(),d=(0,o.I0)(),g=(0,M.Z)(),[u,b]=(0,n.useState)(!0),{checkExperiment:_}=(0,P.F)(),{anyEnabled:x}=_("web_google_disabled"),y=(0,A.B)(),j=(0,h.a2)(),{country:Z}=y,v=(0,w.l)(),S=(0,f.q)(),T=(0,C.Z)(),I=(0,k.ZP)();if(!u||S)return null;let E=()=>b(!1);return(0,L.jsx)(z,{autologinDisabled:"CH"===Z,checkExperiment:_,container:e,deviceType:I,dispatch:d,googleSignInApi:v,handleEmptyCredentials:E,handleGdprRequiresAge:e=>{E(),t(e)},handleLoginWithMfa:e=>{E(),i(e)},hide:E,i18n:c,logContextEvent:r,login:s,nextUrl:a,pageContext:j,requestContext:y,trackInteraction:T,viewer:g,webGoogleDisabled:x})}},173240:(e,t,i)=>{"use strict";i.d(t,{Z:()=>I});var n=i(667294),o=i(616550),a=i(883119),s=i(243640),l=i(901895),r=i(779947),c=i(892671),d=i(877978),g=i(674573),p=i(635169),h=i(456151),u=i(231333),m=i(233846),f=i(970601),b=i(578415),_=i(694602),x=i(174646),w=i(142212),y=i(339908),j=i(857147),Z=i(137130),v=i(557025),S=i(550120),P=i(785893);let T=`${Z.C0}${w.Hm8}`,A=()=>h.Z+g.ZP;function I({redirectToBusinessForSignup:e,isForLimitedLogin:t,attributionLabel:i}){(0,c.Q)({view_type:9});let g=(0,m.ZP)(),h=(0,o.TH)(),w=(0,j.mB)(h.search),Z=(0,y.F9)(),[I,E]=(0,n.useState)({type:"login"}),[C,k]=(0,n.useState)(!1),{isMobile:M}=(0,x.B)().userAgent,L=w.next&&(0,v.Z)(w.next)?w.next:"/",O=t||"true"!==w.board_invite?"login":"boardInvite",z=e=>{e&&Z.showOneToast(({hideToast:t})=>(0,P.jsx)(u.Z,{duration:b.Jl,onHide:t,text:e}))};(0,n.useEffect)(()=>{z((0,_.Z)(g,h))},[]);let D="signup"===I.type;return(0,n.useEffect)(()=>{e&&D&&(0,r.Z)(T,!1)},[e,D]),(0,P.jsx)(s.Z,{page:"login",children:(0,P.jsxs)(a.xu,{height:"100%",position:"absolute",top:!0,width:"100%",children:[(0,P.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{overflowY:"hidden"}},left:!0,position:"absolute",right:!0,top:!0,children:(0,P.jsx)(S.default,{})}),(0,P.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{background:"rgba(0, 0, 0, .5)"}},left:!0,position:"fixed",right:!0,top:!0}),C?(0,P.jsx)(p.Z,{}):(0,P.jsxs)(n.Fragment,{children:[(0,P.jsxs)(a.xu,{dangerouslySetInlineStyle:{__style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},position:"absolute",children:[(0,P.jsx)(f.Z,{unsafeCSS:A()}),(0,P.jsx)(d.default,{attributionLabel:i,container:"login_page",handleShowingSignupWelcomeLoading:e=>{e!==C&&k(e)},nextUrlParam:L,signupFlow:I,signupRedirectUrl:e?T:"",signupSource:O,toggleType:"SMALL_TOGGLE"})]}),!M&&(0,P.jsx)(a.xu,{"data-test-id":"login"===I.type?"simple-signup-button":"simple-login-button",left:!0,marginStart:6,marginTop:12,position:"absolute",top:!0,children:(0,P.jsx)(a.zx,{color:"white",fullWidth:!0,onClick:()=>{E("login"===I.type?{type:"signup"}:{type:"login"})},text:"login"===I.type?g.bt("Регистрация", "Sign up", "sign up for account toggle on homepage", undefined, true):g.bt("Войти", "Log in", "Label for log in button", undefined, true)})}),(0,P.jsx)(l.Z,{container:"login_page",handleGdprRequiresAge:({options:e,context:t})=>{E({type:"socialSignupWithAge",registrationCredentials:{type:"google_one_tap",context:t,signupOptions:e}})},handleLoginWithMfa:e=>{E({type:"loginMfa",creds:{google_open_id_token:e}})},nextUrl:L})]})]})})}},775438:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});let n='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,"ＭＳ Ｐゴシック",Arial,sans-serif'},294113:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var n=i(667294),o=i(883119),a=i(219308),s=i(233846),l=i(755090),r=i(785893);function c({handleSignup:e,handleLogin:t}){let i=(0,s.ZP)(),[a,c]=(0,n.useState)(!1),d=(0,n.useRef)(null);return(0,l.Z)(()=>{let t;return d.current=window.setTimeout(()=>{t=window.requestAnimationFrame(()=>{c(!0)}),e()},2e3),()=>{d.current&&window.clearTimeout(d.current),t&&window.cancelAnimationFrame(t)}}),(0,r.jsxs)(o.kC,{alignItems:"center",direction:"column",flex:"grow",justifyContent:"center",children:[(0,r.jsx)(o.xu,{children:(0,r.jsx)(o.xv,{align:"center",size:"400",weight:"bold",children:a?i.bt("Заканчиваем...", "Finishing up...", "Title of a dialog telling the user that an account is almost done being created.", undefined, true):i.bt("Создаем аккаунт...", "Creating your account...", "Title of a dialog telling the user that an account is being created.", undefined, true)})}),(0,r.jsx)(o.xu,{paddingY:4,children:(0,r.jsx)(o.xH,{accessibilityLabel:i.bt("Аккаунт создан", "Account is being created", "Accessibility label for account creation loading dialog", undefined, true),show:!0})}),a?null:(0,r.jsx)(o.xu,{marginTop:2,children:(0,r.jsx)(o.xv,{align:"center",inline:!0,children:i.bt("Не хотели создавать новый аккаунт?", "Didn’t mean to create a new account?", "Description text telling the user that they can log in if they did not intend to create a new account", undefined, true)})}),a?null:(0,r.jsx)(o.xu,{children:(0,r.jsx)(o.xv,{align:"center",inline:!0,children:(0,r.jsx)(o.rU,{display:"inlineBlock",href:"/login",onClick:({event:e,dangerouslyDisableOnNavigation:i})=>{i(),d.current&&window.clearTimeout(d.current),e&&(e.preventDefault(),e.stopPropagation()),t()},underline:"hover",children:i.bt("Нажмите здесь, чтобы войти.", "Click here to log in.", "Login button which will show the login modal and enable the user to log in", undefined, true)})})})]})}var d=i(362149),g=i(72613);let p=({children:e})=>(0,r.jsx)(o.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, 0.6)"}},left:!0,opacity:1,position:"fixed",right:!0,top:!0,zIndex:new o.Ry(1e3),children:(0,r.jsx)(o.xu,{color:"default",direction:"column",display:"flex",margin:6,padding:7,position:"fixed",right:!0,rounding:2,top:!0,width:376,children:e})});function h({handleCancelClick:e,handleConfirmSignup:t,handleShowLogin:i,step:h}){let u=(0,s.ZP)(),[m,f]=(0,n.useState)(!1),b=(0,a.Z)(),_={view_type:10,view_parameter:3202};(0,l.Z)(()=>(b({event_type:120,view_parameter:_.view_parameter}),document.body&&(document.body.style.overflow="hidden"),()=>{document.body&&(document.body.style.overflow="")}));let x=()=>{b({..._,event_type:101,element:30}),i()};return(0,r.jsx)(p,{children:"delayedSignupLoadingSpinner"===h?(0,r.jsx)(c,{handleLogin:x,handleSignup:()=>{b({..._,event_type:101,element:31}),t()}}):(0,r.jsxs)(o.xu,{children:[m?(0,r.jsx)(d.Z,{}):null,(0,r.jsx)(o.xu,{display:"inlineBlock",marginEnd:2,marginTop:2,position:"absolute",right:!0,top:!0,children:(0,r.jsx)(o.hU,{accessibilityLabel:u.bt("Отмена", "Cancel", "Button to close the signup/login modal", undefined, true),icon:"cancel",iconColor:"gray",onClick:()=>{b({..._,event_type:101,element:73}),e()},size:"sm"})}),(0,r.jsx)(o.xv,{align:"start",size:"400",weight:"bold",children:u.bt("Перейти в Pinterest", "Continue to Pinterest", "Title of a dialog telling enabling the user to continue with sign up or log in", undefined, true)}),(0,r.jsx)(o.xu,{marginTop:2,children:(0,r.jsx)(o.xv,{align:"start",children:u.bt("Похоже, у вас пока нет аккаунта. Давайте это исправим!", "Hmm, it looks like you don't have an account yet. Let's get started!", "Description text of a dialog asking the user to sign up for a Pinterest account", undefined, true)})}),(0,r.jsx)(o.xu,{marginTop:5,children:(0,r.jsx)(o.zx,{color:"red",fullWidth:!0,onClick:()=>{b({..._,event_type:101,element:31}),f(!0),t()},text:u.bt("Регистрация", "Sign up", "Text on a button which will create an account when clicked", undefined, true)})}),(0,r.jsx)(o.xu,{marginTop:2,children:(0,r.jsx)(o.zx,{color:"gray",fullWidth:!0,onClick:x,text:u.bt("Войти, используя другой способ", "Log in using a different method", "Text on a button which will take the user to login when clicked.", undefined, true)})}),"staticSignupLoginWithTOS"===h?(0,r.jsx)(o.xu,{marginEnd:4,marginStart:4,marginTop:4,children:(0,r.jsx)(g.Z,{})}):null]})})}},456151:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(775438);let o=`
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
ul {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
}

html {
  font-size: 100%;
  text-size-adjust: none;
}

a:hover,
a:active {
  outline: 0;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

img {
  max-width: 100%;
  width: auto;
  height: auto;

  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}

#map_canvas img {
  max-width: none;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: middle;
}
button,
input {
  overflow: visible;
  line-height: normal;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}
button,
input[type='button'],
input[type='reset'],
input[type='submit'] {
  cursor: pointer;
  -webkit-appearance: button;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
body {
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
figure {
  margin: 0;
}
html {
  background-color: #fff;
}

html, body {
  font-family: ${n.Z};
  color: rgb(33, 25, 34);
  font-size: 12px;
  height: 100%;
}

body {
  position: relative;
  overflow-y: overlay;
  overflow-x: hidden;
}

input::-ms-clear {
  display: none;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
  padding: 0;
}

button, input, select, textarea {
  font-family: ${n.Z};
  font-size: 100%;
  vertical-align: middle;
  margin: 0px;
}

.SkipToContent {
  display: none;
}
`},906403:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(883119),o=i(132214),a=i(407683),s=i(785893);function l({isFlexible:e,images:t}){return(0,a.Z)()&&(0,s.jsx)(n.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},left:!0,maxHeight:2500,overflow:"hidden",paddingX:5,paddingY:6,position:"absolute",right:!0,top:!0,children:(0,s.jsx)(n.Rk,{gutterWidth:16,items:t??o.Z,layout:e?"flexible":"basic",minCols:2,renderItem:({data:{height:e,url:t,width:i}})=>(0,s.jsx)(n.zd,{rounding:4,wash:!0,children:t&&(0,s.jsx)(n.Ee,{alt:"pin-image",naturalHeight:e??1,naturalWidth:i??1,src:t})})})})}},132214:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});let n=[{url:"https://i.pinimg.com/236x/b3/41/6e/b3416e2688aa4d20f846aeb8127e6b3b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/23/ad/5f/23ad5fc40270120b22bea471fe3656aa.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/83/39/1e/83391e3103e17a46e2733b09bf154a06.jpg",width:236,height:156},{url:"https://i.pinimg.com/236x/87/f7/b5/87f7b55bc3de78ef95fd36fa3a237172.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/d3/49/07/d34907c96950574c15719219e0f0dd69.jpg",width:236,height:295},{url:"https://i.pinimg.com/236x/49/ad/71/49ad71817c829e8d86ca16fa6508b0c4.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/a8/7f/53/a87f53ea636966bf24cf279ed2fdc4dc.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/36/67/b4/3667b449f3cacaaeef3f68fc9cf609be.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/9d/4f/43/9d4f43222d4fc694a61f7635f2d42892.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/48/d9/f0/48d9f0a63ac5c08b1cf2608ceb4a884f.jpg",width:236,height:419},{url:"https://i.pinimg.com/236x/3e/08/94/3e0894b99543507463864c64c6b3af49.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/4b/a4/97/4ba49798105ddfc0bfd11a980f18590f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/b9/e9/8f/b9e98fe7ff81c026b488997900eb25fa.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/96/e0/4a/96e04ac53becd9f522988fc27343ac6e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/5a/f5/9e/5af59e46be8a92abd880031be67ce4cc.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/71/f2/e6/71f2e6a1a13223864dd833bc128f8e2f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/db/b2/09/dbb2099909d25dd45d3df4950429312d.jpg",width:236,height:309},{url:"https://i.pinimg.com/236x/d7/f9/b0/d7f9b0f7dc0536e923026e6af91c61d5.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/4b/6e/36/4b6e36884909d421e250050db82d013b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/0b/85/ca/0b85ca13cbf16fa3017164b9c4b65923.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/28/d9/35/28d935a8f25905a6989709b21241e4d2.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/94/e5/fb/94e5fb084bb73b1237a73fc83eb07b45.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/ec/c7/66/ecc766782029713523ae6a5bd8544045.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/1a/c5/72/1ac572b1643cf518ef06139eca46dd1d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/d1/8f/f9/d18ff9eaec83c75b878eebb899604b8e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/b3/41/6e/b3416e2688aa4d20f846aeb8127e6b3b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/23/ad/5f/23ad5fc40270120b22bea471fe3656aa.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/8f/e5/32/8fe532eea42b7c8b14947a2ced8b127d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/29/6d/a2/296da26a335fd7079e6355225c051cf3.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/cd/53/e3/cd53e3b9ad897d5c5588094f446cbc2a.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/18/54/21/1854212e113994080084b4666b23fcc5.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/cf/0c/45/cf0c451732bb352b3c96d1951ea632dd.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/d0/e9/ee/d0e9ee92a6398e6b31b1515c2ec6ab5e.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/8d/8c/86/8d8c86e41d810497a7b60c5a0e58a95f.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/57/0c/d6/570cd6ac36a208808edabf74682cca8d.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/bd/57/32/bd5732c8291d05e8982662a1ee043411.jpg",width:236,height:188},{url:"https://i.pinimg.com/236x/1b/10/5e/1b105ea0da81722178e23c5438fb68d7.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/ee/2d/d3/ee2dd31a93246fb72490c012b16eefca.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/81/8a/ca/818aca5d5303c60bff125a5acc322fc0.jpg",width:236,height:295},{url:"https://i.pinimg.com/236x/c6/bc/64/c6bc64acbaab2cca4f9166539ff36621.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/d7/38/27/d73827a583f46fbeaf282acc001eb733.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/2a/02/05/2a0205019cb0cb1ea0baa9b95eb78ab8.jpg",width:236,height:256},{url:"https://i.pinimg.com/236x/60/81/65/60816514dcfcbcab0df772dc78ca8ed1.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/0d/2f/fb/0d2ffbcdcc414765ef441752b423a6ad.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/d0/97/0b/d0970b1c57a50afa4d6951d8b0657715.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/7d/c5/99/7dc599bce4115d38ee5b91dcd8769543.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/70/0e/56/700e56a3bccb989ab88819ade445e86e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/ff/73/ab/ff73ab3256bbcf8abce0febb98939e4f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/e7/1b/ba/e71bbaca118e1ae09f01bcc45b58229f.jpg",width:236,height:185},{url:"https://i.pinimg.com/236x/37/af/bf/37afbf3c16baf0f70dc083b6c6ffecec.jpg",width:236,height:298},{url:"https://i.pinimg.com/236x/64/9d/1b/649d1b77d8b28995b2902b89001f912c.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/8f/e5/32/8fe532eea42b7c8b14947a2ced8b127d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/fc/5f/44/fc5f44cd50535f378b1e09d11433c1a8.jpg",width:236,height:330},{url:"https://i.pinimg.com/236x/21/af/78/21af78021ad083377aa3e36ae6f09fc2.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/06/41/9c/06419c4e4165596f77d721d88665e4e7.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/2a/9e/80/2a9e80b4714ac32943ddec01399b5387.jpg",width:236,height:156},{url:"https://i.pinimg.com/236x/fc/5f/44/fc5f44cd50535f378b1e09d11433c1a8.jpg",width:236,height:330}]},653810:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});let n={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},966265:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(112800);function o(e,t){let i="desktop"===t?"dweb":"mweb",o=e.getMomentType();if("dismissed"===o){let t=e.getDismissedReason();(0,n.My)(`${i}.onetap_modal.dismissed.${t}`)}else(0,n.My)(`${i}.onetap_modal.${o}`)}},419199:(e,t,i)=>{"use strict";i.d(t,{H:()=>r,M:()=>l});var n=i(420205),o=i(463227),a=i(112800);let s=()=>!!o.U2(n.x3),l=()=>{let e=o.U2(n.yu);return e?Math.floor((new Date().getTime()-new Date(e).getTime())/864e5):-1},r=()=>(o.U2(n.e7)&&(0,a.My)(`pcons.non_google_autologin_disabled_cookie.${l()}`),s()||!!o.U2(n.e7))},181710:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});let n=i(774609).Z},876748:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(653810),o=i(620160),a=i(785893);let s=()=>{};function l({allowClickAndDrag:e,allowEsc:t,allowMediaPlay:i,allowScroll:l,children:r}){let c=e=>{(!t||e.keyCode!==n.Z.ESCAPE)&&(0,o.Z)(e)};return(0,a.jsx)("div",{onAbort:o.Z,onAnimationEnd:o.Z,onAnimationIteration:o.Z,onAnimationStart:o.Z,onBlur:s,onCanPlay:i?s:o.Z,onCanPlayThrough:o.Z,onChange:o.Z,onClick:e?s:o.Z,onCompositionEnd:o.Z,onCompositionStart:o.Z,onCompositionUpdate:o.Z,onContextMenu:o.Z,onCopy:o.Z,onCut:o.Z,onDoubleClick:o.Z,onDurationChange:o.Z,onEmptied:o.Z,onEncrypted:o.Z,onEnded:o.Z,onError:o.Z,onFocus:s,onInput:o.Z,onInvalid:o.Z,onKeyDown:c,onKeyPress:c,onKeyUp:c,onLoad:o.Z,onLoadedData:o.Z,onLoadedMetadata:o.Z,onLoadStart:o.Z,onMouseDown:o.Z,onMouseEnter:o.Z,onMouseLeave:o.Z,onMouseMove:e?s:o.Z,onMouseOut:o.Z,onMouseOver:o.Z,onMouseUp:e?s:o.Z,onPaste:o.Z,onPause:o.Z,onPlay:o.Z,onPlaying:o.Z,onProgress:o.Z,onRateChange:o.Z,onScroll:l?s:o.Z,onSeeked:o.Z,onSeeking:o.Z,onSelect:o.Z,onStalled:o.Z,onSubmit:o.Z,onSuspend:o.Z,onTimeUpdate:o.Z,onTouchCancel:o.Z,onTouchEnd:e?s:o.Z,onTouchMove:e?s:o.Z,onTouchStart:e?s:o.Z,onTransitionEnd:o.Z,onVolumeChange:o.Z,onWaiting:o.Z,onWheel:o.Z,children:r})}},620160:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});let n=e=>{e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()}},137130:(e,t,i)=>{"use strict";i.d(t,{AO:()=>u,Ag:()=>a,C0:()=>r,L1:()=>p,Vi:()=>s,Wm:()=>m,YD:()=>g,kS:()=>o,oo:()=>l,p3:()=>h,vC:()=>c,vI:()=>d});var n=i(607491);let o="https://www.pinterest.com/business/hub/",a="https://www.pinterest.com/homefeed/",s="www.pinterest.com",l="https://www.pinterest.com/_/_/help",r=`${(0,n.Z)({site:"www"})}`,c=(0,n.Z)({site:"developers"}),d=`${(0,n.Z)({site:"sterling"})}`,g=`${(0,n.Z)({site:"analytics"})}`,p=`${(0,n.Z)({site:"trends"})}`,h=`${(0,n.Z)({site:"www",path:"/business/catalogs/?advertiserId="})}`,u=`${(0,n.Z)({site:"business"})}`,m="https://www.pinterest.com/_/_/policy"},190909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});let n=[".at",".com.au",".ca",".ch",".cl",".de",".dk",".es",".fr",".co.uk",".ie",".it",".jp",".co.kr",".com.mx",".nz",".ph",".pt",".ru",".se"],o=new RegExp(/^(.+\.)?(pinterest|pinterdev)\.com$/),a=e=>o.test(e)||n.some(t=>e===`pinterest${t}`||e.endsWith(`.pinterest${t}`))},557025:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(190909);let o=e=>{if(e.startsWith("//"))return!1;if(e.startsWith("/"))return!0;if(e.startsWith("http://")||e.startsWith("https://"))try{let t=new URL(e);if(t.username)return!1;return(0,n.Z)(t.host)}catch(e){}return!1}},407683:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(667294);let o=()=>{let e=(0,n.useRef)(!1);return(0,n.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},550120:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>p});var n=i(667294),o=i(545007),a=i(906403),s=i(132214),l=i(933724),r=i(785893);function c(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let d=({dominant_color:e,height:t,type:i,url:n,width:o})=>({dominant_color:e,height:t,type:i,url:n,width:o});class g extends n.PureComponent{constructor(...e){super(...e),c(this,"state",{insertedBestPinsImages:[],insertedTopicImages:[],insertedNuxPinImages:[],pinImages:[],seoPinImage:void 0}),c(this,"insertExtraImages",e=>this.setState({...e})),c(this,"insertExtraNuxImages",e=>this.setState({...e})),c(this,"getBackgroundImages",()=>{let{insertedBestPinsImages:e,insertedTopicImages:t,insertedNuxPinImages:i,pinImages:n,seoPinImage:o}=this.state,a=t.length+ +!!o,s=[];return(s=(s=(s=(s=(s=s.concat(o||[])).concat(e)).concat(t)).concat(i)).concat(n.slice(a))).map(e=>d(e))})}componentDidMount(){let{defaultPinImages:e}=this.props,t=[...e||s.Z.map(({url:e,width:t,height:i})=>({url:e,width:t,height:i}))];this.setState({pinImages:t})}componentDidUpdate(e){let{inNux:t,nuxSelectedInterestImages:i,nuxSelectedPinImages:n,nuxStep:o}=this.props,a=e.nuxSelectedInterestImages,s=e.nuxSelectedPinImages,{seoPinImage:r}=this.state;if(a&&i&&a!==i){let e=t&&i.length>a.length&&i[i.length-1].bestPinsImages||[],n=t&&"topic"===o&&0===e.length?i.filter(e=>!r||(0,l.lN)(e.url)!==(0,l.lN)(r.url)):[];this.insertExtraImages({insertedTopicImages:n,insertedBestPinsImages:e})}if(s&&n&&s!==n){let e=t&&n?n.filter(e=>!r||(0,l.lN)(e.url)!==(0,l.lN)(r.url)):[];this.insertExtraNuxImages({insertedNuxPinImages:e})}}render(){let{isFlexible:e}=this.props;return(0,r.jsx)(a.Z,{images:this.getBackgroundImages(),isFlexible:e})}}function p(e){let{nuxSelectedInterestImages:t,nuxSelectedPinImages:i,nuxProgress:n}=(0,o.v9)(({ui:e})=>e);return(0,r.jsx)(g,{...e,nuxSelectedInterestImages:t&&t.images,nuxSelectedPinImages:i&&i.images,nuxStep:n&&n.step})}},933724:(e,t,i)=>{"use strict";i.d(t,{HW:()=>s,lN:()=>l});var n=i(547504),o=i(943369);function a(e){let t=[];if(e){let i=Date.now()-72e5;for(let n of e)n.ts>=i&&("image_signature"in n&&"string"==typeof n.image_signature&&t.push(n.image_signature),"first_pin_image_signature"in n&&"string"==typeof n.first_pin_image_signature&&t.push(n.first_pin_image_signature))}return t}function s(){return{plpImages:a((0,o.M0)().getItem(n.e9)||[]),blpImages:a([])}}function l(e){return((e??"").split("/").pop()??"").replace(/(--.*|\.jpg)$/g,"")}},373897:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n},e.exports.__esModule=!0,e.exports.default=e.exports},163405:(e,t,i)=>{var n=i(373897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},564836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},379498:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},742281:e=>{e.exports=function(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},e.exports.__esModule=!0,e.exports.default=e.exports},600861:(e,t,i)=>{var n=i(163405),o=i(379498),a=i(386116),s=i(742281);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},386116:(e,t,i)=>{var n=i(373897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=({}).toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/76673.ru_RU-e26ba58a3529a9af.mjs.map