((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_28",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={ux:function ux(d,e,f){this.c=d
this.d=e
this.a=f},a2A:function a2A(d){this.a=null
this.b=d
this.c=null},a8s:function a8s(){},
adB(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f={}
f.a=w
f.b=a0
f.c=x
f.c=C.aj
f.a=A.xZ()
$.y1()
v=A.aN(A.xZ(),g)
f.a=A.aN(A.xZ(),A.blZ())
u=A.aN(C.dP,C.F)
t=A.aN(C.cb,g)
s=A.aN(C.cb,C.cM)
r=A.aN(C.cb,g)
f.b=A.aN(a0,g)
e=A.aN(e,g)
q=A.aN(C.aj,!1)
p=A.aN(C.aj,!1)
o=A.aN(C.aj,!0)
n=A.aN(C.aj,!0)
f.c=A.aN(C.aj,!0)
m=y.b
l=B.b2U(a2,0,m)
k=B.b2U(C.aj,0,m)
f.d=null
m=a1.ga4()
m.toString
if(m instanceof A.N){j=A.cn(m.bB(0,g),C.m)
i=j.a
h=j.b
f.d=new A.R(i,h,i+m.gq(m).a,h+m.gq(m).b)}else throw A.f(A.dn("context.findRenderObject() return result must be RenderBox class"))
m=s==null?C.cM:s
return A.aQM(o,m,r,C.hV,u,!0,!1,t,n,"_attachedKey",q,e,p,d,v,new B.adE(f,l,k))},
adE:function adE(d,e,f){this.a=d
this.b=e
this.c=f},
adC:function adC(d){this.a=d},
adD:function adD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bpE(a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="bottom",g="left",f="right",e="PreferDirection.",d="Center",a0={}
a0.a=a4
if(a1.th(a4))a0.a=a4.f4(a1)
else{x=a1.a
w=a1.b
a0.a=new A.R(x,w,x+0,w+0)}v=new B.aPE(a0,a5,a6,a1)
u=new B.aPB(a0,a5,a6,a1)
t=new B.aPC(a0,a5,a2,a1)
s=new B.aPD(a0,a5,a2,a1)
x=a3.a
if(x<=2)r=v.$0()?"top":h
else if(x<=5)r=u.$0()?h:"top"
else if(x<=8)r=t.$0()?g:f
else r=s.$0()?f:g
if(x<=5){x=C.c.xL(e+a3.b,e,"")
x=A.da(x,"top","")
switch(A.da(x,h,"")){case"Left":x=a0.a
if(s.$1$extraSpace(x.c-x.a))x="Left"
else{x=a0.a
x=t.$1$extraSpace(x.c-x.a)?"Right":d}r+=x
break
case"Center":r+="Center"
break
case"Right":x=a0.a
if(t.$1$extraSpace(x.c-x.a))x="Right"
else{x=a0.a
x=s.$1$extraSpace(x.c-x.a)?"Left":d}r+=x
break}}else{x=C.c.xL(e+a3.b,e,"")
x=A.da(x,g,"")
switch(A.da(x,f,"")){case"Top":x=a0.a
if(u.$1$extraSpace(x.d-x.b))x="Top"
else{x=a0.a
x=v.$1$extraSpace(x.d-x.b)?"Bottom":d}r+=x
break
case"Center":r+="Center"
break
case"Bottom":x=a0.a
if(v.$1$extraSpace(x.d-x.b))x="Bottom"
else{x=a0.a
x=u.$1$extraSpace(x.d-x.b)?"Top":d}r+=x
break}}switch(r){case"topLeft":x=a0.a
q=new A.n(x.a,x.b).Z(0,new A.n(0,a5.b)).T(0,new A.n(a2,-a6))
break
case"topCenter":x=a5.a
w=x/2
p=a1.c
o=w>p-a0.a.gtB().a
n=a1.a
m=w>a0.a.gtB().a-n
if(o&&!m)q=new A.n(p-x,a0.a.b-a5.b)
else{x=m&&!o
p=a0.a
l=a5.b
q=x?new A.n(n,p.b-l):p.gtB().Z(0,new A.n(w,l))}q=q.T(0,new A.n(0,-a6))
break
case"topRight":x=a0.a
q=new A.n(x.c,x.b).Z(0,new A.n(a5.a,a5.b)).T(0,new A.n(-a2,-a6))
break
case"bottomLeft":x=a0.a
q=new A.n(x.a,x.d).T(0,new A.n(a2,a6))
break
case"bottomCenter":x=a5.a
w=x/2
p=a1.c
o=w>p-a0.a.gtB().a
n=a1.a
m=w>a0.a.gtB().a-n
if(o&&!m)q=new A.n(p-x,a0.a.d)
else{x=m&&!o
p=a0.a
q=x?new A.n(n,p.d):p.gWu().Z(0,new A.n(w,0))}q=q.T(0,new A.n(0,a6))
break
case"bottomRight":x=a0.a
q=new A.n(x.c,x.d).Z(0,new A.n(a5.a,0)).T(0,new A.n(-a2,a6))
break
case"leftTop":x=a0.a
q=new A.n(x.a,x.b).Z(0,new A.n(a5.a,0)).T(0,new A.n(-a2,a6))
break
case"leftCenter":x=a5.b
w=x/2
p=a1.b
k=w>a0.a.grj().b-p
n=a1.d
j=w>n-a0.a.grj().b
if(k&&!j)q=new A.n(a0.a.a-a5.a,p)
else{p=j&&!k
l=a0.a
i=a5.a
q=p?new A.n(l.a-i,n-x):l.grj().Z(0,new A.n(i,w))}q=q.T(0,new A.n(-a2,0))
break
case"leftBottom":x=a0.a
q=new A.n(x.a,x.d).Z(0,new A.n(a5.a,a5.b)).T(0,new A.n(-a2,-a6))
break
case"rightTop":x=a0.a
q=new A.n(x.c,x.b).T(0,new A.n(a2,a6))
break
case"rightCenter":x=a5.b
w=x/2
p=a1.b
k=w>a0.a.grj().b-p
n=a1.d
j=w>n-a0.a.grj().b
if(k&&!j)q=new A.n(a0.a.c,p)
else{p=j&&!k
l=a0.a
q=p?new A.n(l.c,n-x):l.gapv().Z(0,new A.n(0,w))}q=q.T(0,new A.n(a2,0))
break
case"rightBottom":x=a0.a
q=new A.n(x.c,x.d).Z(0,new A.n(0,a5.b)).T(0,new A.n(a2,-a6))
break
default:q=C.m}return q},
asV:function asV(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
aPE:function aPE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aPB:function aPB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aPC:function aPC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aPD:function aPD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b2U(d,e,f){if(!$.aW8().A(0,d))return f.a(d)
else return f.a(e)}},C,A,J,D
B=a.updateHolder(c[31],B)
C=c[2]
A=c[0]
J=c[1]
D=c[43]
B.ux.prototype={
V(){return new B.a2A(C.p)},
a_2(d){return this.c.$1(d)}}
B.a2A.prototype={
am(){$.ax.bz$.push(this)
this.aA()},
rB(){var x,w
this.Ow()
x=this.c
x.toString
x=A.c2(x,null,y.h).w
w=this.a
if(x.e.d===0)w.a_2(!1)
else w.a_2(!0)},
p(){C.b.C($.ax.bz$,this)
this.aF()},
D(d){return this.a.d}}
B.a8s.prototype={}
B.asV.prototype={
qd(d){return new A.aS(0,d.b,0,d.d)},
qe(d,e){var x=this,w=x.b?x.f:0
return B.bpE(new A.R(0,w,0+d.a,w+(d.b-w)),x.e,x.r,x.c,e,x.d)},
mW(d){var x=this
return!x.c.m(0,d.c)||x.f!==d.f||x.d!==d.d||!x.r.m(0,d.r)}}
var z=a.updateTypes(["ux(j2,~(),h)"])
B.adE.prototype={
$3(d,e,f){return new B.ux(new B.adC(e),new A.dH(new B.adD(this.a,this.b,this.c,d,e,f),null),null)},
$C:"$3",
$R:3,
$S:z+0}
B.adC.prototype={
$1(d){if(d)this.a.$0()},
$S:20}
B.adD.prototype={
$1(d){var x,w=this,v=w.a,u=v.d,t=A.c2(d,null,y.h).w,s=J.i(v.c,!0),r=v.b
if(r==null)r=D.Ri
v=v.a
x=w.f
v=v!=null?v.$3(w.d,w.e,x):x
return new A.jU(new B.asV(s,u,w.b,w.c,t.f.b,r),v,null)},
$S:691}
B.aPE.prototype={
$1$extraSpace(d){var x=this
return x.b.b+x.c<x.a.a.b-x.d.b+d},
$0(){return this.$1$extraSpace(0)},
$S:97}
B.aPB.prototype={
$1$extraSpace(d){var x=this
return x.b.b+x.c<x.d.d-x.a.a.d+d},
$0(){return this.$1$extraSpace(0)},
$S:97}
B.aPC.prototype={
$1$extraSpace(d){var x=this
return x.b.a+x.c<x.a.a.a-x.d.a+d},
$0(){return this.$1$extraSpace(0)},
$S:97}
B.aPD.prototype={
$1$extraSpace(d){var x=this
return x.b.a+x.c<x.d.c-x.a.a.c+d},
$0(){return this.$1$extraSpace(0)},
$S:97};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.ux,A.T)
w(B.a8s,A.a1)
w(B.a2A,B.a8s)
v(A.dI,[B.adE,B.adC,B.adD,B.aPE,B.aPB,B.aPC,B.aPD])
w(B.asV,A.XJ)
x(B.a8s,A.dO)})()
A.d_(b.typeUniverse,JSON.parse('{"ux":{"T":[],"h":[]},"a2A":{"a1":["ux"],"dO":[]}}'))
var y={h:A.S("l6"),b:A.S("aa")};(function constants(){D.fn=new A.I(1193091369)
D.Ri=new A.HE(1,"topCenter")
D.ka=new A.HE(4,"bottomCenter")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_28",e:"endPart",h:b})})($__dart_deferred_initializers__,"tMO+8YV0kueY8uAjAvw1aQAkbT0=");