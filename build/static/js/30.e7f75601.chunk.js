(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[30],{1527:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c,r,o=n(9),i=n(8),j=n(0),a=n(4),l=n(2),d=n(6),s=n(14),b=n(117),O=n(36),x=n(62),u=n(380),p=n(26),h=n(449),g=n(141),f=n(22),v=n(49),y=n(107),m=n(920),T=n(169),I=n(225),k=n(198),E=n(255),N=n(1);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(r||(r={}));var S=Object(d.e)(l.t)(c||(c=Object(i.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(f.a)().account,n=Object(s.b)().t,c=Object(j.useState)(r.TOKEN1),i=Object(o.a)(c,2),d=i[0],A=i[1],K=Object(j.useState)(a.d),C=Object(o.a)(K,2),w=C[0],q=C[1],B=Object(j.useState)(null),L=Object(o.a)(B,2),X=L[0],D=L[1],J=Object(g.b)(null!==w&&void 0!==w?w:void 0,null!==X&&void 0!==X?X:void 0),M=Object(o.a)(J,2),P=M[0],F=M[1],G=Object(v.h)();Object(j.useEffect)((function(){F&&G(F)}),[F,G]);var R=P===g.a.NOT_EXISTS||Boolean(P===g.a.EXISTS&&F&&a.e.equal(F.reserve0.raw,a.e.BigInt(0))&&a.e.equal(F.reserve1.raw,a.e.BigInt(0))),V=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===F||void 0===F?void 0:F.liquidityToken),W=Boolean(V&&a.e.greaterThan(V.raw,a.e.BigInt(0))),Y=Object(j.useCallback)((function(e){d===r.TOKEN0?q(e):D(e)}),[d]),_=Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(l.rc,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),z=Object(l.Oc)(Object(N.jsx)(h.a,{onCurrencySelect:Y,showCommonBases:!0,selectedCurrency:null!==(e=d===r.TOKEN0?X:w)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(o.a)(z,1)[0];return Object(N.jsx)(E.a,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(k.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(N.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.K,{}),onClick:function(){H(),A(r.TOKEN0)},children:w?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:w}),Object(N.jsx)(l.rc,{ml:"8px",children:w.symbol})]}):Object(N.jsx)(l.rc,{ml:"8px",children:n("Select a Token")})}),Object(N.jsx)(O.b,{children:Object(N.jsx)(l.a,{})}),Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.K,{}),onClick:function(){H(),A(r.TOKEN1)},children:X?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:X}),Object(N.jsx)(l.rc,{ml:"8px",children:X.symbol})]}):Object(N.jsx)(l.rc,{as:p.d,children:n("Select a Token")})}),W&&Object(N.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(N.jsx)(l.rc,{textAlign:"center",children:n("Pool Found!")}),Object(N.jsx)(m.a,{to:"/pool",children:Object(N.jsx)(l.rc,{textAlign:"center",children:n("Manage this pool.")})})]}),w&&X?P===g.a.EXISTS?W&&F?Object(N.jsx)(u.a,{pair:F}):Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.rc,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(w),"/").concat(Object(T.a)(X)),children:Object(N.jsx)(l.rc,{textAlign:"center",children:n("Add Liquidity")})})]})}):R?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.rc,{textAlign:"center",children:n("No pool found.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(w),"/").concat(Object(T.a)(X)),children:n("Create pool.")})]})}):P===g.a.INVALID?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsx)(l.rc,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):P===g.a.LOADING?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsxs)(l.rc,{textAlign:"center",children:[n("Loading"),Object(N.jsx)(I.a,{})]})})}):null:_]})]})})}},920:function(e,t,n){"use strict";var c,r=n(8),o=n(91),i=n(6),j=Object(i.e)(o.a)(c||(c=Object(r.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=30.e7f75601.chunk.js.map