import{u as i,g as l,i as n,w as e,a as s,N as t,b as o,t as r,d as a,h as c}from"./index-0d83ce50.js";import{A as d}from"./ArticleList-0214bbd0.js";const v=r('<div class="profile-page"><div class="user-info"><div class="container"><div class="row"><div class="col-xs-12 col-md-10 offset-md-1"><img class="user-img" alt=""><h4></h4><p></p></div></div></div></div><div class="container"><div class="row"><div class="col-xs-12 col-md-10 offset-md-1"><div class="articles-toggle"><ul class="nav nav-pills outline-active"><li class="nav-item"></li><li class="nav-item"></li></ul></div></div></div></div></div>',29),u=r('<i class="ion-gear-a"></i>',2),f=r('<button class="btn btn-sm action-btn"><i class="ion-plus-round"></i>  </button>',4),g=["active","children","href"],h=["articles","totalPagesCount"],b=["children"];a(["click"]);export default r=>{const[a,{setPage:m,loadArticles:p,unfollow:C,follow:w}]=i(),{location:x}=l(),S=i=>{i.preventDefault(),a.profile.following?C():w()},$=i=>{m(i),p()},_=()=>a.currentUser&&r.username===a.currentUser.username;return function(){const i=v.cloneNode(!0),l=i.firstChild,m=l.firstChild.firstChild.firstChild,p=m.firstChild,C=p.nextSibling,w=C.nextSibling,P=l.nextSibling.firstChild.firstChild,k=P.firstChild.firstChild.firstChild,A=k.nextSibling;C.textContent=r.username;const y=C.firstChild;return n(w,()=>{var i;return null===(i=a.profile)||void 0===i?void 0:i.bio}),n(m,(()=>{const i=e(()=>_());return()=>i()&&s(t,{route:"settings",class:"btn btn-sm btn-outline-secondary action-btn",children:()=>[u.cloneNode(!0)," Edit Profile Settings"]},b)})(),null),n(m,(()=>{const i=e(()=>a.token&&!_());return()=>i()&&function(){const i=f.cloneNode(!0),l=i.firstChild.nextSibling.nextSibling;return i.__click=S,n(i,()=>{var i;return(null===(i=a.profile)||void 0===i?void 0:i.following)?"Unfollow":"Follow"},l),n(i,()=>{var i;return null===(i=a.profile)||void 0===i?void 0:i.username},null),o(()=>{var l,n;return c(i,{"btn-secondary":null===(l=a.profile)||void 0===l?void 0:l.following,"btn-outline-secondary":!(null===(n=a.profile)||void 0===n?void 0:n.following)})}),i}()})(),null),n(k,s(t,{class:"nav-link",active:()=>x().includes("/favorites")?0:1,href:()=>`@${r.username}`,children:()=>"My Articles"},g)),n(A,s(t,{class:"nav-link",active:()=>x().includes("/favorites"),href:()=>`@${r.username}/favorites`,children:()=>"Favorited Articles"},g)),n(P,s(d,{articles:()=>Object.values(a.articles),totalPagesCount:()=>a.totalPagesCount,onSetPage:$},h),null),o(i=>{var l;const n=null===(l=a.profile)||void 0===l?void 0:l.image,e=r.username;return n!==i._v$&&(p.src=i._v$=n),e!==i._v$2&&(y.data=i._v$2=e),i},{_v$:void 0,_v$2:void 0}),i}()};