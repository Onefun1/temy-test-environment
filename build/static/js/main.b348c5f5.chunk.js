(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),u=(n(17),n(2)),s=n.n(u),i=n(5),o=n(1),m=n(6),f=n(7),p=n(9),d=n(8),h=n(10),E=(n(19),"http://localhost:8000/"),R=function(e){var t=e.state,n=t.users;t.states,t.countries,t.cities,t.data;return r.a.createElement("div",{className:"app container"},n.map(function(e){return r.a.createElement("div",{className:"container__user-block",key:"".concat(e.name).concat(e.email)},r.a.createElement("p",null,"Name: ",r.a.createElement("span",null," ",e.name)),r.a.createElement("p",null,"Email: ",r.a.createElement("span",null,e.email)," "),r.a.createElement("p",null,"Phone number: ",r.a.createElement("span",null,e.phone_number)," "),r.a.createElement("p",null,"Location:"," "),r.a.createElement("p",null,"Creation date: ",r.a.createElement("span",null,e.date)))}))},v=function(e){function t(){var e;Object(m.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleChange=function(){var t=e.state,n=t.cities,a=t.states,r=t.date;if(e.selectCountriesRef.current.value){e.selectStatesRef.current.parentElement.hidden=!1;var l=Object(o.a)(a).filter(function(t){return t.country_id===e.selectCountriesRef.current.value});e.setState({states:l})}else e.selectStatesRef.current.parentElement.hidden=!0,e.selectStatesRef.current.value=null;if(e.selectStatesRef.current.value){e.selectCitiesRef.current.parentElement.hidden=!1;var c=Object(o.a)(n).filter(function(t){return t.state_id===e.selectStatesRef.current.value});e.setState({cities:c})}else e.selectCitiesRef.current.parentElement.hidden=!0,e.selectCitiesRef.current.value=null;var u=""===e.inputAdressRef.current.value?null:e.inputAdressRef.current.value,s=""===e.inputAboutRef.current.value?null:e.inputAboutRef.current.value,i={name:e.inputNameRef.current.value,email:e.inputEmailRef.current.value,phone_number:e.inputPhoneRef.current.value,address:u,about_me:s,country_id:e.selectCountriesRef.current.value,state_id:e.selectStatesRef.current.value,city_id:e.selectCitiesRef.current.value,date:r};e.setState({newUser:i})},e.handleSubmit=function(t){return fetch("http://localhost:8000/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state.newUser)}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).then(function(t){e.setState({users:[].concat(Object(o.a)(e.state.users),[t])})}).catch(function(e){return console.log("ERROR POST",e)})};var n=new Date,a=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();return e.state={isLoading:!1,cities:{},countries:{},users:{},states:{},date:a},e.selectCountriesRef=r.a.createRef(),e.selectStatesRef=r.a.createRef(),e.selectCitiesRef=r.a.createRef(),e.inputNameRef=r.a.createRef(),e.inputEmailRef=r.a.createRef(),e.inputAdressRef=r.a.createRef(),e.inputAboutRef=r.a.createRef(),e.inputPhoneRef=r.a.createRef(),e}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t,n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"cities")).then(function(e){return e.json()}).then(function(e){return e});case 2:return t=e.sent,e.next=5,fetch("".concat(E,"countries")).then(function(e){return e.json()}).then(function(e){return e});case 5:return n=e.sent,e.next=8,fetch("".concat(E,"users")).then(function(e){return e.json()}).then(function(e){return e});case 8:return a=e.sent,e.next=11,fetch("".concat(E,"states")).then(function(e){return e.json()}).then(function(e){return e});case 11:r=e.sent,this.setState({isLoading:!0,cities:t,countries:n,users:a,states:r});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.countries,a=t.cities,l=t.states,c=t.isLoading;return r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement("h3",null,"Registration"),r.a.createElement("form",{onChange:function(){return e.handleChange()},onSubmit:this.handleSubmit},r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Enter your firstName and lastName (Xxxxx Xxxxx)",pattern:"[A-Z]{1}[a-z]{1,30}\\s[A-Z]{1}[a-z]{1,30}",autoComplete:"off",ref:this.inputNameRef}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,"\u2191 Name *")),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Enter your email",autoComplete:"off",ref:this.inputEmailRef}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,"\u2191 Email *")),r.a.createElement("div",{className:"group"},r.a.createElement("select",{name:"country_id",required:!0,ref:this.selectCountriesRef},r.a.createElement("option",null),c&&n.length>0?n.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}):null),r.a.createElement("label",null,"\u2191 Country *")),r.a.createElement("div",{className:"group",hidden:!0},r.a.createElement("select",{name:"state_id",required:!0,ref:this.selectStatesRef},r.a.createElement("option",null),c&&l.length>0?l.map(function(e){return r.a.createElement("option",{key:"".concat(e.id).concat(e.hasc),value:e.id},e.name)}):null),r.a.createElement("label",null,"\u2191 State *")),r.a.createElement("div",{className:"group",hidden:!0},r.a.createElement("select",{name:"city_id",required:!0,ref:this.selectCitiesRef},r.a.createElement("option",null),c&&a.length>0?a.map(function(e){return r.a.createElement("option",{key:"".concat(e.id).concat(e.hasc),value:e.id},e.name)}):null),r.a.createElement("label",null,"\u2191 City *")),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"tel",name:"phone",required:!0,placeholder:"Enter your phone number 38xxxxxxxxxx",pattern:"[0-9]{12}",maxLength:"12",autoComplete:"off",ref:this.inputPhoneRef}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,"\u2191 Phone *")),r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:"text",placeholder:"Enter your address",autoComplete:"off",ref:this.inputAdressRef}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,"\u2191 Address")),r.a.createElement("div",{className:"group"},r.a.createElement("textarea",{name:"about_me",rows:"1",maxLength:"500",style:{resize:"none"},ref:this.inputAboutRef}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,"\u2191 About me")),r.a.createElement("input",{className:"button",type:"submit",value:"Submit"}))),c?r.a.createElement(R,{state:this.state}):"")}}]),t}(r.a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b348c5f5.chunk.js.map