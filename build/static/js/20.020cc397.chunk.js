(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[20],{1550:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(44),i=n(71),o=n(786),s=n(39),u=n(367),l=n(373),a=n(188),j=n(2),b=n(14),d=n(371),O=n(91),x=n(1),f=function(){var e=Object(b.b)().t;return Object(x.jsx)(j.o,{mb:"24px",children:Object(x.jsxs)(j.p,{children:[Object(x.jsx)(O.a,{to:"/",children:e("Home")}),Object(x.jsx)(O.a,{to:"/prediction",children:e("Prediction")}),Object(x.jsx)(j.rc,{children:e("Leaderboard")})]})})},h=function(){var e=Object(b.b)().t;return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)(j.cb,{as:"h1",scale:"xxl",color:"secondary",children:e("Leaderboard")})]})},p=n(397),m=n(409),g=n(252),v=n(398);var w,B,y,S,N,k,C,W,D,A,L=n(66),F=n(243),T=n(5),R=n(53),I=n(9),z=n(8),P=n(6),V=n(38),E=n(244),M=n(157),q=n(95),U=n(803),_=n(88),H=["children"],Z=["amount","textPrefix","textColor"],Q=function(e){var t=e.children,n=Object(R.a)(e,H);return Object(x.jsx)(j.ab,Object(T.a)(Object(T.a)({alignItems:"center",justifyContent:"space-between"},n),{},{children:t}))},G=function(e){var t=e.amount,n=e.textPrefix,c=void 0===n?"":n,r=e.textColor,i=void 0===r?"text":r,o=Object(R.a)(e,Z),s=Object(U.a)(),u=Object(_.d)(s,Math.abs(t));return t?Object(x.jsxs)(j.ab,Object(T.a)(Object(T.a)({flexDirection:"column",alignItems:"flex-end"},o),{},{children:[Object(x.jsx)(j.rc,{fontWeight:"bold",color:i,children:"".concat(c).concat(t.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6}))}),Object(x.jsx)(j.rc,{fontSize:"12px",color:"textSubtle",lineHeight:1,children:"~$".concat(u.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]})):null},X=function(e){var t=e.amount,n=Object(b.b)().t;return Object(x.jsxs)(Q,{mb:"4px",children:[Object(x.jsx)(j.rc,{fontSize:"12px",color:"textSubtle",children:n("Net Winnings (BNB)")}),Object(x.jsx)(G,{amount:t,textPrefix:t>0?"+":"",textColor:t>0?"success":"failure"})]})},Y=n(3),J=n.n(Y),K=n(11),$=n(797),ee=n.n($),te=n(251),ne=n.n(te),ce=P.e.div(w||(w=Object(z.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  height: 32px;\n  min-width: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n"])),(function(e){var t=e.theme,n=e.bgColor;return t.colors[n]})),re=P.e.div(B||(B=Object(z.a)(["\n  color: #fff;\n  display: none;\n  text-transform: uppercase;\n\n  "," {\n    display: block;\n    margin-left: 4px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ie=function(e){var t=e.position,n=Object(b.b)().t,c=t===s.a.BULL,r=c?"success":"failure",i=c?Object(x.jsx)(j.h,{width:"24px",color:"white"}):Object(x.jsx)(j.d,{width:"24px",color:"white"});return Object(x.jsxs)(ce,{bgColor:r,children:[i,Object(x.jsx)(re,{children:n(c?"Up":"Down")})]})},oe=function(e){var t=e.numberOfBets,n=void 0===t?5:t,r=e.account,i=Object(c.useState)(!1),o=Object(I.a)(i,2),s=o[0],u=o[1],l=Object(c.useState)([]),a=Object(I.a)(l,2),d=a[0],O=a[1],f=Object(b.b)().t,h=ne()(d,["round.epoch"],["desc"]);return Object(c.useEffect)((function(){(function(){var e=Object(K.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,Object(L.e)({user:r.toLowerCase()},n);case 4:t=e.sent,O(t.map(L.s));case 6:return e.prev=6,u(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}})()()}),[r,n,u,O]),Object(x.jsxs)(j.nc,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(j.sc,{children:f("Round")}),Object(x.jsx)(j.sc,{children:f("Direction")}),Object(x.jsx)(j.sc,{textAlign:"right",children:f("Winnings (BNB)")})]})}),Object(x.jsx)("tbody",{children:s?ee()(n).map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)(j.pc,{children:Object(x.jsx)(j.Zb,{width:"80px"})}),Object(x.jsx)(j.pc,{children:Object(x.jsx)(j.Zb,{width:"60px",height:"32px"})}),Object(x.jsx)(j.pc,{children:Object(x.jsx)(j.Zb,{width:"80px"})})]},e)})):h.map((function(e){var t=e.position===e.round.position;return Object(x.jsxs)("tr",{children:[Object(x.jsx)(j.pc,{textAlign:"center",fontWeight:"bold",children:e.round.epoch.toLocaleString()}),Object(x.jsx)(j.pc,{textAlign:"center",children:Object(x.jsx)(ie,{position:e.position})}),Object(x.jsx)(j.pc,{textAlign:"right",children:Object(x.jsx)(G,{amount:t?e.claimedNetBNB:e.amount,textPrefix:t?"+":"-",textColor:t?"success":"failure"})})]},e.id)}))})]})},se=function(e){var t=e.account,n=Object(b.b)().t,r=Object(c.useState)(!1),i=Object(I.a)(r,2),o=i[0],s=i[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(j.ab,{alignItems:"center",justifyContent:"space-between",px:"24px",py:"32px",borderBottom:"1px solid",borderColor:"cardBorder",style:{cursor:"pointer"},onClick:function(){return s(!o)},children:[Object(x.jsx)(j.rc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",children:n("Last %num% Bets",{num:5})}),o?Object(x.jsx)(j.K,{}):Object(x.jsx)(j.N,{})]}),o&&Object(x.jsx)(oe,{account:t})]})},ue=function(e){var t=e.account,n=Object(b.b)().t;return Object(x.jsxs)(j.o,{p:"24px",children:[Object(x.jsx)(j.rc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",mb:"16px",children:n("Last %num% Bets",{num:5})}),Object(x.jsx)(j.y,{children:Object(x.jsx)(oe,{account:t})})]})},le=Object(P.e)(j.mb)(y||(y=Object(z.a)(["\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),ae=function(e){var t,n,c,r,i,u=e.account,l=e.onDismiss,a=e.onBeforeDismiss,d=Object(b.b)().t,O=Object(q.a)().theme,f=Object(o.v)(),h=u||f,p=Object(o.t)(h),m=Object(E.c)(h),g=Object(o.p)()===s.c.LOADING,v=Object(j.Nc)().isDesktop;return Object(x.jsxs)(j.Db,{minWidth:"320px",children:[Object(x.jsxs)(j.Eb,{background:O.colors.gradients.bubblegum,children:[Object(x.jsxs)(j.ab,{alignItems:"center",style:{flex:1},children:[Object(x.jsx)(j.o,{width:["64px",null,null,null,null,null,"96px"],mr:"16px",children:Object(x.jsx)(j.Rb,{src:null===(t=m.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail,height:96,width:96})}),Object(x.jsxs)(j.o,{children:[m.username&&Object(x.jsx)(j.cb,{scale:"lg",mb:"8px",children:m.username}),Object(x.jsx)(le,{href:Object(V.e)(h,"address"),children:Object(M.a)(h)})]})]}),Object(x.jsx)(j.fb,{variant:"text",onClick:function(){a&&a(),l()},"aria-label":"Close the dialog",children:Object(x.jsx)(j.P,{color:"text",width:"24px"})})]}),null===p?Object(x.jsx)(j.rc,{p:"32px",textAlign:"center",fontWeight:"bold",children:d("No results found.")}):Object(x.jsxs)(j.o,{maxHeight:["500px",null,null,null,null,null,"none"],overflowY:"auto",children:[Object(x.jsxs)(j.bb,{gridTemplateColumns:["1fr",null,null,null,null,null,"repeat(4, 1fr)"],gridGap:"16px",p:"24px",borderBottom:"1px solid",borderColor:"cardBorder",children:[Object(x.jsxs)(j.o,{children:[Object(x.jsx)(j.rc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Net Winnings")}),g?Object(x.jsx)(j.Zb,{}):Object(x.jsx)(G,{amount:null===p||void 0===p?void 0:p.netBNB,textPrefix:(null===p||void 0===p?void 0:p.netBNB)>0?"+":"",textColor:(null===p||void 0===p?void 0:p.netBNB)>0?"success":"failure",alignItems:"flex-end"})]}),Object(x.jsxs)(j.o,{children:[Object(x.jsx)(j.rc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Win Rate")}),g?Object(x.jsx)(j.Zb,{}):Object(x.jsx)(j.rc,{fontWeight:"bold",children:"".concat(null===p||void 0===p||null===(c=p.winRate)||void 0===c?void 0:c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsxs)(j.o,{children:[Object(x.jsx)(j.rc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Won")}),g?Object(x.jsx)(j.Zb,{}):Object(x.jsx)(j.rc,{fontWeight:"bold",children:null===p||void 0===p||null===(r=p.totalBetsClaimed)||void 0===r?void 0:r.toLocaleString()})]}),Object(x.jsxs)(j.o,{children:[Object(x.jsx)(j.rc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Played")}),g?Object(x.jsx)(j.Zb,{}):Object(x.jsx)(j.rc,{fontWeight:"bold",children:null===p||void 0===p||null===(i=p.totalBets)||void 0===i?void 0:i.toLocaleString()})]})]}),v?Object(x.jsx)(ue,{account:h}):Object(x.jsx)(se,{account:h})]})]})},je=["user"],be=Object(P.e)(j.o)(S||(S=Object(z.a)(["\n  order: 2;\n  margin-left: 8px;\n\n  "," {\n    order: 1;\n    margin-left: 0;\n    margin-right: 8px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),de=Object(P.e)(j.o)(N||(N=Object(z.a)(["\n  order: 1;\n\n  "," {\n    order: 2;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Oe=function(e){var t,n,c=e.user,r=Object(R.a)(e,je),i=Object(b.b)().t,o=Object(E.c)(c.id),s=Object(j.Oc)(Object(x.jsx)(ae,{account:c.id})),u=Object(I.a)(s,1)[0];return Object(x.jsxs)(j.hc,{component:Object(x.jsxs)(j.ab,Object(T.a)(Object(T.a)({alignItems:"center"},r),{},{children:[Object(x.jsxs)(de,{children:[Object(x.jsx)(j.rc,{color:"primary",fontWeight:"bold",children:o.username||Object(M.a)(c.id)})," "]}),Object(x.jsx)(be,{width:["32px",null,null,null,null,"40px"],height:["32px",null,null,null,null,"40px"],children:Object(x.jsx)(j.Rb,{src:null===(t=o.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail,height:40,width:40})})]})),options:{placement:"bottom-start"},children:[Object(x.jsx)(j.ic,{onClick:u,children:i("View Stats")}),Object(x.jsx)(j.ic,{as:j.lb,href:Object(V.e)(c.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})},xe=["rank","user"],fe=function(e){var t=e.rank,n=e.user,c=Object(R.a)(e,xe);return Object(x.jsxs)("tr",Object(T.a)(Object(T.a)({},c),{},{children:[t?Object(x.jsx)(j.pc,{children:Object(x.jsx)(j.rc,{textAlign:"center",fontWeight:"bold",color:"secondary",children:"#".concat(t)})}):Object(x.jsx)(j.pc,{}),Object(x.jsx)(j.pc,{children:Object(x.jsx)(Oe,{user:n})}),Object(x.jsx)(j.pc,{children:Object(x.jsx)(G,{amount:n.netBNB,textPrefix:n.netBNB>0?"+":"",textColor:n.netBNB>0?"success":"failure"})}),Object(x.jsx)(j.pc,{textAlign:"center",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")}),Object(x.jsx)(j.pc,{textAlign:"center",children:Object(x.jsx)("strong",{children:n.totalBetsClaimed.toLocaleString()})}),Object(x.jsx)(j.pc,{textAlign:"center",children:n.totalBets.toLocaleString()})]}))},he=function(e){var t=e.results,n=Object(b.b)().t;return Object(x.jsx)(F.a,{mb:"24px",children:Object(x.jsx)(j.y,{children:Object(x.jsxs)(j.nc,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(j.sc,{width:"60px",children:"\xa0"}),Object(x.jsx)(j.sc,{textAlign:"left",children:n("User")}),Object(x.jsx)(j.sc,{textAlign:"right",children:n("Net Winnings (BNB)")}),Object(x.jsx)(j.sc,{children:n("Win Rate")}),Object(x.jsx)(j.sc,{children:n("Rounds Won")}),Object(x.jsx)(j.sc,{children:n("Rounds Played")})]})}),Object(x.jsx)("tbody",{children:t.map((function(e,t){return Object(x.jsx)(fe,{rank:t+4,user:e},e.id)}))})]})})})},pe=Object(P.e)(j.o)(k||(k=Object(z.a)(["\n  background-color: ",";\n  border-bottom: 1px solid ",";\n\n  &:first-child {\n    border-top: 1px solid ",";\n  }\n"])),(function(e){return e.theme.card.background}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.cardBorder})),me=function(e){var t=e.rank,n=e.user,c=Object(b.b)().t;return Object(x.jsxs)(pe,{p:"16px",children:[Object(x.jsxs)(Q,{mb:"16px",children:[t?Object(x.jsx)(j.rc,{fontWeight:"bold",color:"secondary",children:"#".concat(t)}):Object(x.jsx)("div",{}),Object(x.jsx)(Oe,{user:n})]}),Object(x.jsxs)(Q,{mb:"4px",children:[Object(x.jsx)(j.rc,{fontSize:"12px",color:"textSubtle",children:c("Win Rate")}),Object(x.jsx)(j.rc,{fontWeight:"bold",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsx)(X,{amount:n.netBNB}),Object(x.jsxs)(Q,{children:[Object(x.jsx)(j.rc,{fontSize:"12px",color:"textSubtle",children:c("Rounds Won")}),Object(x.jsx)(j.rc,{fontWeight:"bold",children:"".concat(n.totalBetsClaimed.toLocaleString(),"/").concat(n.totalBets.toLocaleString())})]})]})},ge=function(e){var t=e.results;return Object(x.jsx)(j.o,{mb:"24px",children:t.map((function(e,t){return Object(x.jsx)(me,{rank:t+4,user:e},e.id)}))})},ve=Object(P.e)(j.jb)(C||(C=Object(z.a)(["\n  transform: rotate(30deg);\n"]))),we=Object(P.e)(j.kb)(W||(W=Object(z.a)(["\n  transform: rotate(-30deg);\n"]))),Be=function(e){var t,n,c=e.rank,r=e.user,i=Object(b.b)().t,o=function(e){return 3===e?"bronze":2===e?"silver":"gold"}(c),s=Object(E.c)(r.id),u=Object(j.Oc)(Object(x.jsx)(ae,{account:r.id})),l=Object(I.a)(u,1)[0];return Object(x.jsx)(j.y,{ribbon:Object(x.jsx)(j.C,{variantColor:o,text:"#".concat(c),ribbonPosition:"left"}),children:Object(x.jsxs)(j.z,{p:"24px",children:[Object(x.jsx)(j.ab,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"24px",children:Object(x.jsxs)(j.hc,{component:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(j.ab,{mb:"4px",children:[Object(x.jsx)(ve,{color:o,width:"32px"}),Object(x.jsx)(j.o,{width:["40px",null,null,"64px"],height:["40px",null,null,"64px"],children:Object(x.jsx)(j.Rb,{src:null===(t=s.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail,height:64,width:64})}),Object(x.jsx)(we,{color:o,width:"32px"})]}),Object(x.jsx)(j.rc,{color:"primary",fontWeight:"bold",textAlign:"center",children:s.username||Object(M.a)(r.id)})]}),options:{placement:"bottom"},children:[Object(x.jsx)(j.ic,{onClick:l,children:i("View Stats")}),Object(x.jsx)(j.ic,{as:j.lb,href:Object(V.e)(r.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})}),Object(x.jsxs)(Q,{mb:"4px",children:[Object(x.jsx)(j.rc,{fontSize:"12px",color:"textSubtle",children:i("Win Rate")}),Object(x.jsx)(j.rc,{fontWeight:"bold",children:"".concat(r.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(x.jsx)(X,{amount:r.netBNB}),Object(x.jsxs)(Q,{children:[Object(x.jsx)(j.rc,{fontSize:"12px",color:"textSubtle",children:i("Rounds Won")}),Object(x.jsx)(j.rc,{fontWeight:"bold",children:"".concat(r.totalBetsClaimed.toLocaleString(),"/").concat(r.totalBets.toLocaleString())})]})]})})},ye=function(){var e,t=Object(j.Nc)().isDesktop,n=Object(b.b)().t,c=Object(o.q)(),r=(e=c,Object(p.a)(e)||Object(m.a)(e)||Object(g.a)(e)||Object(v.a)()),l=r[0],a=r[1],d=r[2],O=r.slice(3),f=Object(o.p)()===s.c.LOADING,h=Object(o.r)(),w=Object(o.o)(),B=Object(i.b)();return Object(x.jsxs)(j.o,{children:[Object(x.jsx)(F.a,{mb:"16px",children:Object(x.jsxs)(j.bb,{gridGap:["16px",null,null,null,null,"24px"],gridTemplateColumns:["1fr",null,null,null,null,"repeat(3, 1fr)"],children:[Object(x.jsx)(Be,{rank:1,user:l}),Object(x.jsx)(Be,{rank:2,user:a}),Object(x.jsx)(Be,{rank:3,user:d})]})}),t?Object(x.jsx)(he,{results:O}):Object(x.jsx)(ge,{results:O}),Object(x.jsx)(j.ab,{mb:"40px",justifyContent:"center",children:w&&Object(x.jsx)(j.t,{variant:"secondary",isLoading:f,endIcon:f?Object(x.jsx)(j.i,{spin:!0,color:"currentColor"}):void 0,onClick:function(){B(Object(u.i)(h+L.a))},children:n(f?"Loading...":"View More")})})]})},Se=n(122),Ne=function(){var e=Object(r.c)().account,t=Object(b.b)().t,n=Object(i.b)(),s=Object(o.t)(e),l=Object(j.Nc)().isDesktop;return Object(c.useEffect)((function(){e&&(n(Object(Se.d)(e)),n(Object(u.b)(e)))}),[e,n]),e&&s?Object(x.jsxs)(F.a,{mb:"48px",children:[Object(x.jsx)(j.cb,{as:"h2",scale:"md",color:"secondary",mb:"16px",children:t("My Rankings")}),l?Object(x.jsx)(j.y,{isActive:!0,children:Object(x.jsxs)(j.nc,{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(j.sc,{width:"60px",children:"\xa0"}),Object(x.jsx)(j.sc,{textAlign:"left",children:"\xa0"}),Object(x.jsx)(j.sc,{textAlign:"right",children:t("Net Winnings (BNB)")}),Object(x.jsx)(j.sc,{textAlign:"center",children:t("Win Rate")}),Object(x.jsx)(j.sc,{children:t("Rounds Won")}),Object(x.jsx)(j.sc,{children:t("Rounds Played")})]})}),Object(x.jsx)("tbody",{children:Object(x.jsx)(fe,{user:s})})]})}):Object(x.jsx)(j.y,{isActive:!0,children:Object(x.jsx)(me,{user:s})})]}):null},ke=n(379),Ce=n(826),We=function(){var e=Object(i.b)(),t=Object(j.Oc)(Object(x.jsx)(ae,{onBeforeDismiss:function(){e(Object(u.q)(null))}})),n=Object(I.a)(t,1)[0],r=Object(c.useCallback)(function(){var t=Object(K.a)(J.a.mark((function t(n){var c,r;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(u.b)(n));case 2:return r=t.sent,t.abrupt("return",void 0!==(null===(c=r.payload)||void 0===c?void 0:c.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),o=function(){var t=Object(K.a)(J.a.mark((function t(c){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(u.q)(c));case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)(Ce.a,{onAddressClick:o,onValidAddress:r})},De=Object(P.e)(j.o)(D||(D=Object(z.a)(["\n  margin-bottom: 8px;\n  order: 1;\n  width: 100%;\n\n  "," {\n    margin-bottom: 0;\n    order: 2;\n    width: 320px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ae=Object(P.e)(j.o)(A||(A=Object(z.a)(["\n  order: 2;\n  width: 100%;\n\n  "," {\n    order: 1;\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Le=function(){var e=Object(b.b)().t,t=Object(i.b)(),n=[{label:e("Net Winnings"),value:"netBNB"},{label:e("Total BNB"),value:"totalBNB"},{label:e("Rounds Played"),value:"totalBets"},{label:e("Win Rate"),value:"winRate"}];return Object(x.jsxs)(F.a,{py:"32px",children:[Object(x.jsx)(j.rc,{textTransform:"uppercase",fontSize:"12px",color:"textSubtle",fontWeight:"bold",mb:"4px",children:e("Rank By")}),Object(x.jsxs)(j.ab,{flexDirection:["column",null,null,null,null,"row"],alignItems:["start",null,null,null,null,"center"],justifyContent:["start",null,null,null,null,"space-between"],children:[Object(x.jsx)(Ae,{children:Object(x.jsx)(ke.a,{options:n,onOptionChange:function(e){t(Object(u.p)({orderBy:e.value}))}})}),Object(x.jsx)(De,{children:Object(x.jsx)(We,{})})]})]})};t.default=function(){var e=Object(o.p)(),t=Object(o.n)(),n=Object(r.c)().account,j=Object(i.b)();return Object(c.useEffect)((function(){j(Object(u.h)({filters:t}))}),[n,t,j]),e===s.c.INITIAL?Object(x.jsx)(l.a,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(a.a,{}),Object(x.jsx)(h,{}),Object(x.jsx)(Le,{}),Object(x.jsx)(Ne,{}),Object(x.jsx)(ye,{})]})}},786:function(e,t,n){"use strict";n.d(t,"w",(function(){return O})),n.d(t,"a",(function(){return x})),n.d(t,"k",(function(){return f})),n.d(t,"f",(function(){return h})),n.d(t,"y",(function(){return p})),n.d(t,"x",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"j",(function(){return v})),n.d(t,"u",(function(){return w})),n.d(t,"i",(function(){return B})),n.d(t,"g",(function(){return y})),n.d(t,"d",(function(){return S})),n.d(t,"s",(function(){return N})),n.d(t,"b",(function(){return k})),n.d(t,"l",(function(){return C})),n.d(t,"h",(function(){return W})),n.d(t,"m",(function(){return D})),n.d(t,"e",(function(){return A})),n.d(t,"p",(function(){return L})),n.d(t,"q",(function(){return F})),n.d(t,"n",(function(){return T})),n.d(t,"r",(function(){return R})),n.d(t,"o",(function(){return I})),n.d(t,"t",(function(){return z})),n.d(t,"v",(function(){return P}));var c=n(19),r=n(5),i=n(0),o=n(28),s=n(55),u=n(102),l=n(38),a=n(71),j=n(66),b=n(367),d=function(){var e=Object(o.c)((function(e){return e.predictions.rounds}));return Object.keys(e).reduce((function(t,n){return Object(r.a)(Object(r.a)({},t),{},Object(c.a)({},n,Object(j.q)(e[n])))}),{})},O=function(){var e=d();return Object(u.orderBy)(Object.values(e),["epoch"],["asc"])},x=function(e,t){var n=Object(o.c)((function(e){return e.predictions.ledgers}));return n[e]&&n[e][t]?Object(j.q)(n[e][t]):null},f=function(e){return Object(o.c)((function(e){return e.predictions.claimableStatuses}))[e]||!1},h=function(){return Object(o.c)((function(e){var t=Object(u.minBy)(Object.values(e.predictions.rounds),"epoch");return null===t||void 0===t?void 0:t.epoch}))},p=function(){return Object(o.c)((function(e){return e.predictions.isHistoryPaneOpen}))},m=function(){return Object(o.c)((function(e){return e.predictions.isChartPaneOpen}))},g=function(){return Object(o.c)((function(e){return e.predictions.currentEpoch}))},v=function(){return Object(o.c)((function(e){return e.predictions.intervalSeconds}))},w=function(){return Object(o.c)((function(e){return e.predictions.status}))},B=function(){return Object(o.c)((function(e){return e.predictions.historyFilter}))},y=function(){return Object(o.c)((function(e){return e.predictions.hasHistoryLoaded}))},S=function(){return Object(o.c)((function(e){return e.predictions.currentHistoryPage}))},N=function(){var e=Object(o.c)((function(e){return e.predictions.minBetAmount}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(e)}),[e])},k=function(){return Object(o.c)((function(e){return e.predictions.bufferSeconds}))},C=function(){return Object(o.c)((function(e){return e.predictions.isFetchingHistory}))},W=function(){return Object(o.c)((function(e){return e.predictions.history}))},D=function(){var e=Object(o.c)((function(e){return e.predictions.lastOraclePrice}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(e)}),[e])},A=function(){var e=function(){var e=g();return d()[e]}(),t=v();return e.lockTimestamp?e.lockTimestamp:e.startTimestamp+t},L=function(){return Object(o.c)((function(e){return e.predictions.leaderboard.loadingState}))},F=function(){return Object(o.c)((function(e){return e.predictions.leaderboard.results}))},T=function(){return Object(o.c)((function(e){return e.predictions.leaderboard.filters}))},R=function(){return Object(o.c)((function(e){return e.predictions.leaderboard.skip}))},I=function(){return Object(o.c)((function(e){return e.predictions.leaderboard.hasMoreResults}))},z=function(e){var t=function(e){return Object(o.c)((function(t){return t.predictions.leaderboard.addressResults[e]}))}(e),n=Object(a.b)();return Object(i.useEffect)((function(){var c=Object(l.i)(e);!t&&null!==t&&c&&n(Object(b.b)(e))}),[n,e,t]),t},P=function(){return Object(o.c)((function(e){return e.predictions.leaderboard.selectedAddress}))}},797:function(e,t,n){var c=n(494),r=n(804),i=n(798),o=4294967295,s=Math.min;e.exports=function(e,t){if((e=i(e))<1||e>9007199254740991)return[];var n=o,u=s(e,o);t=r(t),e-=o;for(var l=c(u,t);++n<e;)t(n);return l}},798:function(e,t,n){var c=n(493);e.exports=function(e){var t=c(e),n=t%1;return t===t?n?t-n:t:0}},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(9),r=n(4),i=n(0),o=n(22),s=n(35),u=n(141),l=n(65),a=s.b.busd,j=s.a.wbnb;function b(e){var t=Object(o.a)().chainId,n=Object(l.b)(e,t),s=Object(i.useMemo)((function(){return[[t&&n&&Object(r.o)(j,n)?void 0:e,t?j:void 0],[(null===n||void 0===n?void 0:n.equals(a))?void 0:n,t===r.a.MAINNET?a:void 0],[t?j:void 0,t===r.a.MAINNET?a:void 0]]}),[t,e,n]),b=Object(u.c)(s),d=Object(c.a)(b,3),O=Object(c.a)(d[0],2),x=O[0],f=O[1],h=Object(c.a)(d[1],2),p=h[0],m=h[1],g=Object(c.a)(d[2],2),v=g[0],w=g[1];return Object(i.useMemo)((function(){if(e&&n&&t)if(n.equals(j)){if(m){var c=m.priceOf(j);return new r.h(e,a,c.denominator,c.numerator)}}else{if(n.equals(a))return new r.h(a,a,"1","1");var i=null===f||void 0===f?void 0:f.reserveOf(j),o=i&&w?w.priceOf(j).quote(i).raw:r.e.BigInt(0);if(p===u.a.EXISTS&&m&&m.reserveOf(a).greaterThan(o)){var s=m.priceOf(n);return new r.h(e,a,s.denominator,s.numerator)}if(x===u.a.EXISTS&&f&&v===u.a.EXISTS&&w&&w.reserveOf(a).greaterThan("0")&&f.reserveOf(j).greaterThan("0")){var l=w.priceOf(a),b=f.priceOf(j),d=l.multiply(b).invert();return new r.h(e,a,d.denominator,d.numerator)}}}),[t,e,f,x,w,v,m,p,n])}var d=function(){return b(s.a.wbnb)}},804:function(e,t,n){var c=n(247);e.exports=function(e){return"function"==typeof e?e:c}},826:function(e,t,n){"use strict";var c,r,i,o=n(3),s=n.n(o),u=n(11),l=n(5),a=n(9),j=n(53),b=n(8),d=n(0),O=n(2),x=n(6),f=n(38),h=n(14),p=n(192),m=n(1),g=["onValidAddress","onAddressClick"];!function(e){e[e.NOT_VALID=0]="NOT_VALID",e[e.FOUND=1]="FOUND",e[e.NOT_FOUND=2]="NOT_FOUND"}(i||(i={}));var v=x.e.div(c||(c=Object(b.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.radii.default}),(function(e){return e.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),w=Object(x.e)(O.rc)(r||(r=Object(b.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),B={isFetching:!1,resultFound:i.NOT_VALID,value:""},y=function(){return Promise.resolve(!0)};t.a=function(e){var t=e.onValidAddress,n=void 0===t?y:t,c=e.onAddressClick,r=Object(j.a)(e,g),o=Object(d.useState)(B),b=Object(a.a)(o,2),x=b[0],S=b[1],N=Object(h.b)().t,k=x.isFetching,C=x.resultFound,W=x.value;return Object(d.useEffect)((function(){!1!==Object(f.i)(W)?function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0})})),e.next=4,n(W);case 4:t=e.sent,S((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1,resultFound:t?i.FOUND:i.NOT_FOUND})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()():S((function(e){return Object(l.a)(Object(l.a)({},e),{},{resultFound:i.NOT_VALID})}))}),[W,n,S]),Object(m.jsxs)(O.o,Object(l.a)(Object(l.a)({position:"relative"},r),{},{children:[Object(m.jsx)(O.ib,{placeholder:N("Search %subject%",{subject:N("Address").toLowerCase()}),value:x.value,onChange:function(e){var t=e.target.value;S((function(e){return Object(l.a)(Object(l.a)({},e),{},{value:t})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),k&&Object(m.jsx)(O.o,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(m.jsx)(p.a,{})}),Object(m.jsx)(v,{isOpen:C!==i.NOT_VALID,children:C===i.FOUND?Object(m.jsx)(w,{onClick:function(){S(B),c(x.value)},children:x.value}):Object(m.jsx)(O.rc,{px:"16px",fontWeight:"bold",children:N("No results found.")})})]}))}}}]);
//# sourceMappingURL=20.020cc397.chunk.js.map