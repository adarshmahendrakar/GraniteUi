(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{339:function(e,t){},341:function(e,t){},353:function(e,t){},355:function(e,t){},382:function(e,t){},384:function(e,t){},385:function(e,t){},390:function(e,t){},392:function(e,t){},411:function(e,t){},423:function(e,t){},426:function(e,t){},546:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return vt}));var n=a(2),r=a(94),c=a(482),i=a(0),o=a.n(i),s=a(3),l=a(96),j=a(130),u=a(479),d=a(480),b=a(493),p=a(484),O=a(557),x=a(522),h=a(314),g=a.n(h),m=a(315),v=a.n(m),f=a(316),P=a.n(f),C=a(313),y=a.n(C),k=a(190),w=a.n(k),S=function(e){var t=e.classes,a=e.handleDrawerToggle;return Object(n.jsx)(d.a,{position:"fixed",className:null===t||void 0===t?void 0:t.appBar,elevation:4,children:Object(n.jsx)(c.a,{children:Object(n.jsxs)(b.a,{container:!0,alignItems:"center",children:[Object(n.jsx)(b.a,{item:!0,children:Object(n.jsx)(p.a,{color:"primary","aria-label":"open drawer",edge:"start",onClick:a,className:t.menuButton,children:Object(n.jsx)(w.a,{})})}),Object(n.jsx)(b.a,{item:!0,children:Object(n.jsx)(O.a,{placeholder:"Search topics",className:null===t||void 0===t?void 0:t.searchInput,startAdornment:Object(n.jsx)(y.a,{fontSize:"small"})})}),Object(n.jsx)(b.a,{item:!0,sm:!0}),Object(n.jsxs)(b.a,{item:!0,children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{badgeContent:4,color:"secondary",children:Object(n.jsx)(g.a,{fontSize:"small"})})}),Object(n.jsx)(p.a,{children:Object(n.jsx)(x.a,{badgeContent:3,color:"primary",children:Object(n.jsx)(v.a,{fontSize:"small"})})}),Object(n.jsx)(p.a,{children:Object(n.jsx)(P.a,{fontSize:"small"})})]})]})})})},N=a(523),T=a(556),M=a(552),z=a(90),B=a(524),H=a(490),I=a(491),F=a(525),A=a(526),D=a(512),R=a(318),G=a.n(R),L=a(317),W=a.n(L),E=a(319),J=a.n(E),V=a(201),U=a.n(V),q=a(320),K=a.n(q),Q=a(23),X=function(e){var t=e.classes,a=e.window,r=e.mobileOpen,i=e.handleDrawerToggle,o=e.menus,s=Object(z.a)(),l=Object(n.jsxs)("div",{children:[Object(n.jsx)(c.a,{children:Object(n.jsx)("div",{className:"logo"})}),Object(n.jsx)(N.a,{}),Object(n.jsx)(H.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(n.jsx)(B.a,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:null===o||void 0===o?void 0:o.map((function(e){return(null===e||void 0===e?void 0:e.submenu)?Object(n.jsx)(Y,{classes:t,menu:e}):Object(n.jsxs)(I.a,{button:!0,component:Q.b,to:(null===e||void 0===e?void 0:e.link)||"/",activeClassName:t.active,exact:!0,children:[" ",Object(n.jsx)(F.a,{children:Object(n.jsx)(W.a,{})}),Object(n.jsx)(A.a,{primary:null===e||void 0===e?void 0:e.title})]})}))})]}),j=void 0!==a?function(){return a().document.body}:void 0;return Object(n.jsxs)("nav",{className:t.drawer,"aria-label":"mailbox folders",children:[Object(n.jsx)(M.a,{smUp:!0,implementation:"css",children:Object(n.jsx)(T.a,{container:j,variant:"temporary",anchor:"rtl"===s.direction?"right":"left",open:r,onClose:i,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:l})}),Object(n.jsx)(M.a,{xsDown:!0,implementation:"css",children:Object(n.jsx)(T.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0,children:l})})]})},Y=function(e){var t,a=e.classes,r=e.menu,c=o.a.useState(!0),i=Object(l.a)(c,2),s=i[0],j=i[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(I.a,{button:!0,onClick:function(){j(!s)},children:[Object(n.jsx)(F.a,{children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(A.a,{primary:null===r||void 0===r?void 0:r.title}),s?Object(n.jsx)(J.a,{}):Object(n.jsx)(U.a,{})]}),Object(n.jsx)(D.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(H.a,{component:"div",disablePadding:!0,children:null===r||void 0===r||null===(t=r.submenu)||void 0===t?void 0:t.map((function(e){var t=e.title,r=e.link;return Object(n.jsxs)(I.a,{button:!0,className:a.nested,exact:!0,component:Q.b,to:r||"/",activeClassName:a.active,children:[Object(n.jsx)(F.a,{children:Object(n.jsx)(K.a,{})}),Object(n.jsx)(A.a,{primary:t})]})}))})})]})},Z=240,$=Object(u.a)((function(e){return{root:{display:"flex"},drawer:Object(j.a)({},e.breakpoints.up("sm"),{width:Z,flexShrink:0}),searchInput:{opacity:"0.6",padding:"0px ".concat(e.spacing(1),"px"),fontSize:"0.8rem","&:hover":{backgroundColor:"#f2f2f2"},"& .MuiSvgIcon-root":{marginRight:e.spacing(1)}},appBar:Object(j.a)({backgroundColor:"#fff"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(Z,"px)"),marginLeft:Z}),menuButton:Object(j.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:Z},content:{flexGrow:1,padding:e.spacing(3),backgroundColor:"aliceblue",minHeight:"100vh"},nested:{paddingLeft:e.spacing(4)},active:{backgroundColor:e.palette.secondary.main}}}));function _(e){var t=e.children,a=e.menus,r=$(),c=o.a.useState(!1),i=Object(l.a)(c,2),s=i[0],j=i[1],u=function(){j(!s)};return Object(n.jsxs)("div",{className:r.root,children:[Object(n.jsx)(S,{classes:r,handleDrawerToggle:u}),Object(n.jsx)(X,{menus:a,classes:r,mobileOpen:s,handleDrawerToggle:u}),Object(n.jsx)("main",{className:r.content,children:t})]})}var ee=a(543),te=a(481),ae=a(547),ne=a(506),re=a(508),ce=a(486),ie=Object(u.a)((function(e){return{root:{backgroundColor:"#fdfdff"},pageHeader:{padding:e.spacing(1),display:"flex"},pageIcon:{display:"inline-block",padding:e.spacing(2),color:"#3c44b1"},pageTitle:{paddingLeft:e.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"}}}}));function oe(e){var t=ie(),a=e.title,r=e.subTitle,c=e.icon;return Object(n.jsx)(te.a,{variant:"outlined",className:t.root,children:Object(n.jsxs)("div",{className:t.pageHeader,children:[Object(n.jsx)(re.a,{className:t.pageIcon,children:c}),Object(n.jsxs)("div",{className:t.pageTitle,children:[Object(n.jsx)(ce.a,{variant:"h6",component:"div",children:a}),Object(n.jsx)(ce.a,{variant:"subtitle2",component:"div",children:r})]})]})})}var se=a(541),le=a(542),je=a(533),ue=a(534),de=a(535),be=a(536),pe=a(537),Oe=a(562),xe=a(538),he=a(539),ge=a(563),me=a(331),ve=a.n(me),fe=a(330),Pe=a.n(fe),Ce=a(327),ye=a.n(Ce),ke=a(329),we=a.n(ke),Se=a(328),Ne=a.n(Se),Te=a(326),Me=a.n(Te),ze=a(117),Be=a(527);var He=a(496),Ie=a(510),Fe=a(505),Ae=a(511),De=a(551);var Re=a(528),Ge=a(548),Le=a(503),We=a(497);var Ee=a(553);var Je=a(321),Ve=a(544),Ue=a(434);var qe=Object(u.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}}));var Ke=Object(u.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.primary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}}));var Qe={Input:function(e){var t=e.name,a=e.label,c=e.value,i=e.error,o=void 0===i?null:i,s=e.onChange,l=Object(ze.a)(e,["name","label","value","error","onChange"]);return Object(n.jsx)(Be.a,Object(r.a)(Object(r.a)({variant:"outlined",label:a,name:t,value:c,onChange:s},l),o&&{error:!0,helperText:o}))},RadioGroup:function(e){var t=e.name,a=e.label,r=e.value,c=e.onChange,i=e.items;return Object(n.jsxs)(He.a,{children:[Object(n.jsx)(Ie.a,{children:a}),Object(n.jsx)(Fe.a,{row:!0,name:t,value:r,onChange:c,children:i.map((function(e){return Object(n.jsx)(Ae.a,{value:e.id,control:Object(n.jsx)(De.a,{}),label:e.title},e.id)}))})]})},Select:function(e){var t=e.name,a=e.label,c=e.value,i=e.error,o=void 0===i?null:i,s=e.onChange,l=e.options;return Object(n.jsxs)(He.a,Object(r.a)(Object(r.a)({variant:"outlined"},o&&{error:!0}),{},{children:[Object(n.jsx)(Re.a,{children:a}),Object(n.jsxs)(Ge.a,{label:a,name:t,value:c,onChange:s,children:[Object(n.jsx)(Le.a,{value:"",children:"None"}),l.map((function(e){return Object(n.jsx)(Le.a,{value:e.id,children:e.title},e.id)}))]}),o&&Object(n.jsx)(We.a,{children:o})]}))},Checkbox:function(e){var t=e.name,a=e.label,r=e.value,c=e.onChange;return Object(n.jsx)(He.a,{children:Object(n.jsx)(Ae.a,{control:Object(n.jsx)(Ee.a,{name:t,color:"primary",checked:r,onChange:function(e){return c(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))}}),label:a})})},DatePicker:function(e){var t=e.name,a=e.label,r=e.value,c=e.onChange;return Object(n.jsx)(Je.b,{utils:Ue.a,children:Object(n.jsx)(Ve.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:a,format:"MMM/dd/yyyy",name:t,value:r,onChange:function(e){return c(function(e,t){return{target:{name:e,value:t}}}(t,e))}})})},Button:function(e){var t=e.text,a=e.size,c=e.color,i=e.variant,o=e.onClick,s=Object(ze.a)(e,["text","size","color","variant","onClick"]),l=qe();return Object(n.jsx)(ne.a,Object(r.a)(Object(r.a)({variant:i||"contained",size:a||"large",color:c||"primary",onClick:o},s),{},{classes:{root:l.root,label:l.label},children:t}))},ActionButton:function(e){var t=e.color,a=e.children,r=e.onClick,c=Ke();return Object(n.jsx)(ne.a,{className:"".concat(c.root," ").concat(c[t]),onClick:r,children:a})}},Xe=a(531),Ye=a(532),Ze=a(498),$e=function(e){var t=e.filter,a=e.setFilter,r=e.classes;return Object(n.jsxs)(c.a,{children:[Object(n.jsx)(Qe.Input,{label:"Search Here..",className:r.searchInput,value:t||"",size:"small",onChange:function(e){return a(e.target.value)},InputProps:{startAdornment:Object(n.jsx)(Ze.a,{position:"start",children:Object(n.jsx)(Xe.a,{})})}}),Object(n.jsx)(ae.a,{flex:"1"}),Object(n.jsx)(Qe.Button,{text:"Add New",variant:"outlined",startIcon:Object(n.jsx)(Ye.a,{}),className:r.newButton,onClick:function(){setOpenPopup(!0),setRecordForEdit(null)}})]})},_e=a(322),et=Object(u.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:e.palette.secondary.main},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}})),tt=Object(u.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function at(e){var t=tt(),a=Object(z.a)(),r=e.canNextPage,c=e.canPreviousPage,i=e.nextPage,o=e.previousPage,s=e.gotoPage,l=e.pageCount,j=o,u=i;return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(p.a,{onClick:function(){return s(0)},disabled:!c,"aria-label":"first page",children:"rtl"===a.direction?Object(n.jsx)(Me.a,{}):Object(n.jsx)(ye.a,{})}),Object(n.jsx)(p.a,{onClick:j,disabled:!c,"aria-label":"previous page",children:"rtl"===a.direction?Object(n.jsx)(Ne.a,{}):Object(n.jsx)(we.a,{})}),Object(n.jsx)(p.a,{onClick:u,disabled:!r,"aria-label":"next page",children:"rtl"===a.direction?Object(n.jsx)(we.a,{}):Object(n.jsx)(Ne.a,{})}),Object(n.jsx)(p.a,{onClick:function(){return s(l-1)},disabled:!r,"aria-label":"last page",children:"rtl"===a.direction?Object(n.jsx)(ye.a,{}):Object(n.jsx)(Me.a,{})})]})}function nt(e){var t=e.columns,a=e.data,c=Object(_e.useTable)({columns:t,data:a},_e.useGlobalFilter,_e.useSortBy,_e.usePagination),i=c.getTableProps,o=c.getTableBodyProps,s=c.headerGroups,l=c.page,j=c.nextPage,u=c.previousPage,d=c.canNextPage,b=c.state,p=(c.pageOptions,c.setPageSize),O=c.gotoPage,x=c.setGlobalFilter,h=c.pageCount,g=c.canPreviousPage,m=c.prepareRow,v=et();return Object(n.jsxs)(ae.a,{children:[Object(n.jsx)($e,{filter:b.globalFilter,setFilter:x,classes:v}),Object(n.jsx)(je.a,{children:Object(n.jsxs)(ue.a,Object(r.a)(Object(r.a)({},i()),{},{className:v.table,children:[Object(n.jsx)(de.a,{children:s.map((function(e){return Object(n.jsx)(be.a,Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(n.jsxs)(pe.a,Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps)),{},{children:[e.render("Header"),Object(n.jsx)(Oe.a,{children:e.isSorted?e.isSortedDesc?Object(n.jsx)(Pe.a,{fontSize:"small"}):Object(n.jsx)(ve.a,{fontSize:"small"}):""})]}))}))}))}))}),Object(n.jsx)(xe.a,Object(r.a)(Object(r.a)({},o()),{},{children:l.map((function(e,t){return m(e),Object(n.jsx)(be.a,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(n.jsx)(pe.a,Object(r.a)(Object(r.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(n.jsx)(he.a,{children:Object(n.jsx)(ge.a,{rowsPerPageOptions:[5,10,25],page:b.pageIndex,onChangeRowsPerPage:function(e){p(e.target.value),O(0)},rowsPerPage:b.pageSize,count:a.length,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},ActionsComponent:function(){return Object(n.jsx)(at,{nextPage:j,previousPage:u,canNextPage:d,canPreviousPage:g,gotoPage:O,pageCount:h})}})})]}))})]})}var rt=function(e){var t=e.data,a=e.columns;return Object(n.jsx)(nt,{columns:a,data:t})},ct=a(332),it=a.n(ct),ot=function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t},st=function(){var e=Math.random();return{firstName:it.a.generate({words:1,numbers:0}),lastName:it.a.generate({words:1,numbers:0}),age:Math.floor(30*Math.random()),visits:Math.floor(100*Math.random()),progress:Math.floor(100*Math.random()),status:e>.66?"relationship":e>.33?"complicated":"single"}};var lt=a(529),jt=a(540),ut=a(530),dt=a(433),bt=a.n(dt),pt=Object(u.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},dialogTitle:{paddingRight:"0px"}}}));function Ot(e){var t=e.title,a=e.children,c=e.openPopup,i=e.setOpenPopup,o=Object(ze.a)(e,["title","children","openPopup","setOpenPopup"]),s=pt();return Object(n.jsxs)(lt.a,Object(r.a)(Object(r.a)({open:c,classes:{paper:s.dialogWrapper}},o),{},{children:[Object(n.jsx)(jt.a,{className:s.dialogTitle,children:Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)(ce.a,{variant:"h6",component:"div",style:{flexGrow:1},children:t}),Object(n.jsx)(Qe.ActionButton,{variant:"text",color:"secondary",onClick:function(){i(!1)},children:Object(n.jsx)(bt.a,{})})]})}),Object(n.jsx)(N.a,{}),Object(n.jsx)(ut.a,{children:a})]}))}var xt=function(e){var t=e.title,a=e.subTitle,r=e.icon;return Object(n.jsxs)(b.a,{container:!0,spacing:1,children:[Object(n.jsx)(b.a,{item:!0,xs:12,children:Object(n.jsx)(oe,{title:t,subTitle:a,icon:r})}),Object(n.jsx)(b.a,{item:!0,xs:12,children:Object(n.jsx)(te.a,{variant:"outlined",children:Object(n.jsx)(ae.a,{p:5,children:Object(n.jsx)(ht,{})})})})]})},ht=function(){var e=function(e){var t=o.a.useState(!1),a=Object(l.a)(t,2),c=a[0],i=a[1];return{MyPopup:function(t){var a=t.children,o=Object(ze.a)(t,["children"]);return Object(n.jsx)(Ot,Object(r.a)(Object(r.a)({title:e,openPopup:c,setOpenPopup:i},o),{},{children:a}))},openDialog:function(){return i(!0)}}}("Title"),t=e.MyPopup,a=e.openDialog,c=o.a.useMemo((function(){return[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age"},{Header:"Visits",accessor:"visits"},{Header:"Status",accessor:"status"},{Header:"Profile Progress",accessor:"progress"},{Header:"Actions",Cell:function(e){var t=e.row;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ne.a,{size:"small",variant:"outlined",color:"secondary",onClick:a,children:Object(n.jsx)(se.a,{})}),Object(n.jsx)(ne.a,{size:"small",variant:"outlined",color:"secondary",onClick:function(){return console.log(t.original)},children:Object(n.jsx)(le.a,{})})]})}}]}),[]),i=o.a.useMemo((function(){return function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=t[a];return ot(n).map((function(n){return Object(r.a)(Object(r.a)({},st()),{},{subRows:t[a+1]?e(a+1):void 0})}))}()}(20)}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(rt,{columns:c,data:i,add:a}),Object(n.jsx)(t,{fullWidth:!0,children:"jkdhakjsd"})]})},gt=function(){return Object(n.jsx)(xt,{title:"Subscribers",subTitle:"Form design with validation",icon:Object(n.jsx)(ee.a,{fontSize:"large"})})},mt=function(){return Object(n.jsx)(xt,{title:"Subscription",subTitle:"Form design with validation",icon:Object(n.jsx)(ee.a,{fontSize:"large"})})};function vt(){var e="/admin",t=[{title:"SubScription",submenu:[{title:"SubScriber",link:e+"/"},{title:"Subscription",link:e+"/subscription"}]},{title:"name2"},{title:"name3"},{title:"name4"}],a=[{path:e+"/subscription",component:mt},{path:e+"/",component:gt}];return Object(n.jsxs)(_,{menus:t,children:[Object(n.jsx)(c.a,{}),null===a||void 0===a?void 0:a.map((function(e){return Object(n.jsx)(s.b,Object(r.a)({},e))}))]})}}}]);
//# sourceMappingURL=6.fc42b97c.chunk.js.map