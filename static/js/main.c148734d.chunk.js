(this.webpackJsonplab8=this.webpackJsonplab8||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(18),c=a.n(n),i=(a(38),a(9)),l=a(2),o=a(6),d=(a(39),a.p+"static/media/logo.0f9511b1.jpeg"),h=a(0),m=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"brand-container ",children:[Object(h.jsx)("img",{src:d,className:"logo",alt:"Site logo"}),Object(h.jsx)("h1",{className:"brand",children:"Flower Express"})]}),Object(h.jsx)("span",{onClick:function(){return s(!0)},className:"openbtn",children:"\u2630 Menu"}),Object(h.jsxs)("div",{className:a?"sidenav active":"sidenav",children:[Object(h.jsx)("button",{className:"closebtn",onClick:function(){return s(!1)},children:"\xd7"}),Object(h.jsxs)("ul",{className:"sidenavUL",children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/3125-L8/",onClick:function(){return s(!1)},children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/3125-L8/product",onClick:function(){return s(!1)},children:"Flowers"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/3125-L8/delivery",onClick:function(){return s(!1)},children:"View Order"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/3125-L8/faq",onClick:function(){return s(!1)},children:"Contact Us"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/3125-L8/help",onClick:function(){return s(!1)},children:"Help"})})]})]})]})},u=a(33),b=a(12),j=function(e,t){switch(t.type){case"ADD_ITEM":return Object(b.a)(Object(b.a)({},e),{},{cart:[t.payload].concat(Object(u.a)(e.cart))});default:return e}},p={cart:[]},x=Object(r.createContext)(p),g=function(e){var t=Object(r.useReducer)(j,p),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(h.jsx)(x.Provider,{value:{cart:s.cart,addToCart:function(e){alert("".concat(e.name," added to cart")),n({type:"ADD_ITEM",payload:e})}},children:e.children})},O=function(e){return Object(h.jsx)("div",{className:"popup-box",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("span",{className:"close-icon",onClick:e.handleClick,children:" x "}),Object(h.jsx)("p",{className:"prodtext prodName",children:e.product.name}),Object(h.jsx)("img",{src:e.product.image,alt:e.product.alt,className:"cart-item-image popup-img"}),Object(h.jsxs)("p",{children:[" ",e.product.extraInfo," "]})]})})},f=function(e){var t=e.product,a=Object(r.useContext)(x).addToCart,s=Object(r.useState)(!1),n=Object(o.a)(s,2),c=n[0],i=n[1],l=function(){i(!c)};return Object(h.jsxs)("div",{className:"product-card",children:[Object(h.jsx)("h2",{className:"prodtext prodName prodBold",children:t.name}),Object(h.jsx)("p",{className:"prodtext prodPrice prodBold",children:"$"+t.price}),Object(h.jsx)("img",{src:t.image,alt:t.alt,className:"cart-item-image"}),Object(h.jsxs)("div",{className:"product-btn",children:[Object(h.jsx)("button",{className:"btn",onClick:function(){return l()},children:"Learn More"}),Object(h.jsx)("button",{className:"btn",onClick:function(){return a(t)},children:"Add To Cart"})]}),c?Object(h.jsx)(O,{product:t,handleClick:l}):null]})},y=(a(49),a.p+"static/media/prosthechea.39db35ea.jpeg"),v=a.p+"static/media/disa.b8f58bd7.jpeg",N=a.p+"static/media/gumdrop.5a07463a.jpeg",k=a.p+"static/media/woodstock.0ef25e0e.jpeg",w=a.p+"static/media/carnegie.d15aff01.jpeg",C=a.p+"static/media/aurora.57d4baff.jpeg",S=a.p+"static/media/cattleya.c0e628a4.jpeg",I=a.p+"static/media/bluejacket.29b3650f.jpeg",q=a.p+"static/media/lotusqueen.689f0bb9.jpeg",D=a.p+"static/media/cabella.a4cbcc43.jpeg",F=a.p+"static/media/vanda.d4b1ab8f.jpeg",E=a.p+"static/media/dendrobium.694a7ee6.jpeg",L=function(){var e=[{name:"Dendrobium Orchid",Orchid:!0,hyacinth:!1,lilly:!1,price:5.99,image:E,alt:"image of dendrobium orchid",extraInfo:"The stunning flowers of dendrobiums can last for about six weeks. Keep plants in warm conditions (min 13\xb0C) and water when the growing medium is becoming dry. Dendrobiums can reproduce by forming baby plantlets called keikis."},{name:"Cattleya Orchid",Orchid:!0,hyacinth:!1,lilly:!1,price:4.49,image:S,alt:"image of cattleya orchid",extraInfo:"Cattleyas are epiphytes and enjoy warm, humid conditions, with some air movement. Water them when the growing medium is dry. A new flower spike grows from a dormant bud each year. Cut this back to the stem after flowering."},{name:"Vanda Orchid",Orchid:!0,hyacinth:!1,lilly:!1,price:8.99,image:F,alt:"image of vanda orchid",extraInfo:"Vandas have very long roots and are often grown in baskets so the roots can hang down. They need warm and bright, but not sunny, conditions. If the plant gets too tall, you can cut off the top plus a few roots and replant it."},{name:"Prosthechea Orchid",Orchid:!0,hyacinth:!1,lilly:!1,price:1.15,image:y,alt:"image of prosthechea orchid",extraInfo:"With plentiful, long-lasting, scented flowers, epiphyte Prosthechea grows on trees in the mountains of Central America. It likes bright light, but not direct sun. Let the growing medium dry slightly between waterings and water less in winter."},{name:"Disa Orchid",Orchid:!0,hyacinth:!1,lilly:!1,price:1.45,image:v,alt:"image of disa orchid",extraInfo:"This red disa, Disa uniflora, is the emblem of South Africa\u2019s Western Cape. Like the golden disa, it needs permanently wet conditions and benefits from watering with a weak fertiliser solution. Occasionally, pink or yellow flowers develop."},{name:"Aurora Borealis Lily",Orchid:!1,hyacinth:!1,lilly:!0,price:3.67,image:C,alt:"image of aurora lily",extraInfo:"Aurora Borealis sports clean, rich color in pure white, raspberry, and canary yellow. They simply seem to simmer in the garden, their beauty is a rare treat to behold. Relatively color fast even in a hot location south east of Salem, Oregon, its best color is obtained when planted in light afternoon shade, especially in areas exceeding 90 during the month of July. "},{name:"Cabella Lily",Orchid:!1,hyacinth:!1,lilly:!0,price:5.49,image:D,alt:"image of cabella lily",extraInfo:"Cabella lillies have always been exceptional for fade resistance but still, as will all pink Orientals, we recommend some light afternoon shade to enhance color in areas where mid / late July and on temperatures range 85 and above during its period of bloom. Flowering in Mid to Late July here in the Pacific Northwest, Cabella reaches a height of 3 to 4 feet."},{name:"Gumdrop Lily",Orchid:!1,hyacinth:!1,lilly:!0,price:2.49,image:N,alt:"image of gumdrop lily",extraInfo:"For a pastel pink, this flower's color is excellent despite the hot, direct sun summer conditions. That being said, we have always suggested some light afternoon shade in areas where July temps are high to promote stronger colors and longer lasting flowers."},{name:"Lotus Queen Lily",Orchid:!1,hyacinth:!1,lilly:!0,price:4.37,image:q,alt:"image of lotus queen lily",extraInfo:"These soft, baby pink flowers are a sight to behold. Lotus Queen has proven herself to be very color fast for a pastel pink here in our maritime climate. In hotter areas, she should be planted in light afternoon shade for best color. Wonderfully sweet scent. 3 to 4 Feet. Late July / Early August Flowering."},{name:"Blue Jacket Hyacinth",Orchid:!1,hyacinth:!0,lilly:!1,price:5.99,image:I,alt:"image of blue jacket hyacinth",extraInfo:"With dense spikes of deep blue flowers and a dark purple stripe on every petal, Blue Jacket grows up to ten inches tall and will naturalize in the right spot. It is resistant to deer and rabbits and is very easy to grow."},{name:"Woodstock Hyacinth",Orchid:!1,hyacinth:!0,lilly:!1,price:2.99,image:k,alt:"image of woodstock hyacinth",extraInfo:"Blooming for several weeks in mid-spring, this flower has reddish-purple petals and bright green leaves. Their dark plum color makes them truly unique, and because they also are very fragrant, they do well when planted along pathways and near patios and decks."},{name:"Carnegie Hyacinth",Orchid:!1,hyacinth:!0,lilly:!1,price:3.99,image:w,alt:"image of carnegie hyacinth",extraInfo:"This plant is likely the whitest of all the Hyacinth flowers, with bright white petals and deep green leaves. It fits perfectly in rock gardens, in containers, and as a border, and it blooms for several weeks in the spring."}],t=Object(r.useState)(e),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(r.useEffect)((function(){var t=[],a=0;if(null!=sessionStorage.getItem("Orchid")){var r=JSON.parse(sessionStorage.getItem("Orchid"));!0===r&&(a+=1);var s=JSON.parse(sessionStorage.getItem("hyacinth"));!0===s&&(a+=1);var c=JSON.parse(sessionStorage.getItem("lilly"));!0===c&&(a+=1);for(var i=0;i<e.length;i+=1)a>=2?(!0===r&&!0===s&&!0===e[i].Orchid&&!0===e[i].hyacinth||!0===r&&!0===c&&!0===e[i].Orchid&&!0===e[i].lilly||!0===s&&!0===c&&!0===e[i].hyacinth&&!0===e[i].lilly)&&t.push(e[i]):(!0===r&&!0===e[i].Orchid||!0===s&&!0===e[i].hyacinth||!0===c&&!0===e[i].lilly||!1===r&&!1===s&&!1===c)&&t.push(e[i])}else for(var l=0;l<e.length;l+=1)t.push(e[l]);var o=t;t.sort((function(e,t){return e.price-t.price})),n(o)}),[]),Object(h.jsxs)("div",{className:"prod",id:"prod",children:[Object(h.jsx)("h1",{children:"Flowers"}),Object(h.jsx)("div",{className:"prod_container",children:Object(h.jsx)("div",{className:"prod_wrapper",children:s.map((function(e,t){return Object(h.jsx)("ul",{className:"prod_ul",children:Object(h.jsx)(f,{product:e})},t)}))})})]})},P=function(e){var t=e.product;return Object(h.jsxs)("div",{className:"cart-items",children:[Object(h.jsx)("p",{className:"cart-item-text itemName",children:t.name}),Object(h.jsx)("p",{className:"cart-item-text",children:"$"+t.price})]})},T=(a(50),a(51),a(8)),V=a(20),A=a(21),J=a(22),W=a(24),z=a(23),B=(a(52),a(32)),R=a.n(B),$=(a(61),function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(e){var r;return Object(V.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,s=t.value,n=r.state.errors;switch(a){case"firstname":var c=RegExp(/^[a-z][a-z]*$/);n.firstname=""===s?"Field cannot be empty":c.test(s.toLowerCase())?"":"First Name can only contain letters";break;case"lastname":var i=RegExp(/^[a-z][a-z]*$/);n.lastname=""===s?"Field cannot be empty":i.test(s.toLowerCase())?"":"Last Name can only contain letters";break;case"email":var l=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);n.email=""===s?"Field cannot be empty":l.test(s)?"":"Invalid email address!";break;case"address":n.address=""===s?"Field cannot be empty":"";break;case"city":var o=RegExp(/^[a-z][a-z]*$/);n.city=""===s?"Field cannot be empty":o.test(s.toLowerCase())?"":"City can only contain letters";break;case"postalcode":var d=RegExp(/\b(?!.{0,7}[DFIOQU])[A-VXY]\d[A-Z][^-\w\d]\d[A-Z]\d\b/);n.postalcode=""===s?"Field cannot be empty":d.test(s)?"":"Invalid Postal Code! Please use XXX XXX format";break;case"phone":var h=RegExp(/^(\+0?1\s)?\(?\d{3}\)?[\s-]\d{3}[\s-]\d{4}$/);n.phone=""===s?"Field cannot be empty":h.test(s)?"":"Invalid format! Please use (xxx) xxx-xxxx format";break;case"time":var m=s.substring(0,2),u=s.substring(3,5);0===Number(m.substring(0,1))&&(m=m.substring(1,2)),m=Number(m),n.time=m<8||m>19||m>=19&&u>0?"Time can only be between 8am and 7pm":"";break;case"cardholder":var b=RegExp(/^[a-z][a-z\s]*$/);n.cardholder=""===s?"Field cannot be empty":b.test(s.toLowerCase())?"":"Name can only contain letters and spaces";break;case"cardnumber":var j=RegExp(/^(?:\d{4} ){3}\d{4}$/);n.cardnumber=""===s?"Field cannot be empty":j.test(s)?"":"Invalid format! Please use xxxx xxxx xxxx xxxx format";break;case"carddate":var p=RegExp(/^[\d]{2}\/[\d]{2}/),x=s.substring(0,2);""===s?n.carddate="Field cannot be empty":!isNaN(x)&&x>12?n.carddate="Month cannot be greater than 12":n.carddate=p.test(s)?"":"Invalid format! Please use MM/YY format";break;case"cardccv":var g=RegExp(/^[0-9]{3}$/);n.cardccv=""===s?"Field cannot be empty":g.test(s)?"":"CCV must be 3 numbers only"}r.setState(Object(T.a)({errors:n},a,s))},r.handleSubmit=function(e){e.preventDefault(),r.validateForm(r.state.errors)&&!0===r.notEmpty()?alert("Success! Here are your order details!: \n \n        Name: ".concat(r.state.firstname,"  ").concat(r.state.lastname," \n \n        Phone: ").concat(r.state.phone," \n\n        Address: ").concat(r.state.address," \n\n        Delivery Date: ").concat(r.state.selectedDay," \n \n        Delivery Time: ").concat(r.state.time)):(e.preventDefault(),!1===r.notEmpty()?alert("Error: Make sure all fields are filled in!"):alert("Error: Please correct the errors in the form!"))},r._next=function(){if(!0===r.validateForm(r.state.errors)){var e=r.state.currentStep;e+=1,r.setState({currentStep:e},(function(){r.updateStepInfo()}))}else alert("Error: Please correct the errors in the form!")},r._prev=function(){var e=r.state.currentStep;e=e<=1?1:e-1,r.setState({currentStep:e},(function(){r.updateStepInfo()}))},r.updateStepInfo=function(){var e=r.state.currentStep;1===e&&r.setState({currentStepInfo:"Contact Info"}),2===e&&r.setState({currentStepInfo:"Address"}),3===e&&r.setState({currentStepInfo:"Date & Time"}),4===e&&r.setState({currentStepInfo:"Payment Info"})},r.validateForm=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},r.handleDayChange=r.handleDayChange.bind(Object(J.a)(r)),r.state={currentStep:1,currentStepInfo:"Contact Info",firstname:"",lastname:"",email:"",phone:"",time:"",daysOfWeek:[1,3],selectedDay:"",cardholder:"",cardnumber:"",carddate:"",cardccv:"",errors:{firstname:"",lastname:"",email:"",phone:"",address:"",city:"",postalcode:"",time:"",selectedDay:"",cardholder:"",cardnumber:"",carddate:"",cardccv:""}},r}return Object(A.a)(a,[{key:"handleDayChange",value:function(e,t,a){var r=a.getInput().value;console.log(r),this.setState({selectedDay:r})}},{key:"previousButton",value:function(){return 1!==this.state.currentStep?Object(h.jsx)("button",{className:"btn previous",type:"button",onClick:this._prev,children:"Previous"}):null}},{key:"nextButton",value:function(){return this.state.currentStep<4?Object(h.jsx)("button",{className:"btn",type:"button",onClick:this._next,children:"Next"}):null}},{key:"submitButton",value:function(){return 4===this.state.currentStep?Object(h.jsx)("button",{className:"btn",type:"submit",children:"Submit"}):null}},{key:"notEmpty",value:function(){return""!==this.state.firstname&&""!==this.state.lastname&&""!==this.state.email&&""!==this.state.phone&&""!==this.state.time&&""!==this.state.selectedDay&&""!==this.state.cardholder&&""!==this.state.cardnumber&&""!==this.state.carddate&&""!==this.state.cardccv}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"wizardform",children:Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsxs)("h2",{className:"steptitle",children:["Step ",this.state.currentStep," ","-"," ",this.state.currentStepInfo]}),Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)(H,{currentStep:this.state.currentStep,handleChange:this.handleChange,firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email,phone:this.state.phone,errors:this.state.errors}),Object(h.jsx)(_,{currentStep:this.state.currentStep,handleChange:this.handleChange,handleDayChange:this.handleDayChange,selectedDay:this.state.selectedDay,daysOfWeek:this.state.daysOfWeek,errors:this.state.errors}),Object(h.jsx)(X,{currentStep:this.state.currentStep,handleChange:this.handleChange,handleDayChange:this.handleDayChange,selectedDay:this.state.selectedDay,daysOfWeek:this.state.daysOfWeek,errors:this.state.errors}),Object(h.jsx)(Y,{currentStep:this.state.currentStep,handleChange:this.handleChange,cardholder:this.state.cardholder,cardnumber:this.state.cardnumber,carddate:this.statecarddate,cardccv:this.state.cardccv,errors:this.state.errors}),Object(h.jsxs)("div",{className:"btn-wrapper",children:[Object(h.jsx)("button",{className:"btn",type:"reset",children:"Clear"}),Object(h.jsxs)("div",{children:[this.previousButton(),this.nextButton(),this.submitButton()]})]})]})]})})}}]),a}(s.a.Component)),M=$;function H(e){return 1!==e.currentStep?null:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"stepinstructions",children:"Please enter your contact info below "}),Object(h.jsxs)("div",{className:"booking-wrapper",children:[Object(h.jsxs)("div",{className:"booking-outer",children:[Object(h.jsxs)("div",{className:"booking-inner",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["First Name",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"firstname",className:"booking-input",required:!0,placeholder:"John",onChange:e.handleChange,noValidate:!0}),e.errors.firstname.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.firstname})]}),Object(h.jsxs)("div",{className:"booking-inner",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Last Name",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"lastname",className:"booking-input",required:!0,placeholder:"Doe",onChange:e.handleChange,noValidate:!0}),e.errors.lastname.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.lastname})]})]}),Object(h.jsxs)("div",{className:"booking-outer",children:[Object(h.jsxs)("div",{className:"booking-inner",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Email",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"email",name:"email",className:"booking-input",required:!0,placeholder:"email@example.com",onChange:e.handleChange,value:e.email,noValidate:!0}),e.errors.email.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.email})]}),Object(h.jsxs)("div",{className:"booking-inner last",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Phone Number",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"tel",name:"phone",className:"booking-input",required:!0,placeholder:"(xxx) xxx-xxxx",onChange:e.handleChange,value:e.phone,noValidate:!0}),e.errors.phone.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.phone})]})]})]})]})}function _(e){return 2!==e.currentStep?null:Object(h.jsxs)("div",{className:"booking",id:"booking",children:[Object(h.jsxs)("p",{className:"stepinstructions",children:["Please enter the delivery address below"," "]}),Object(h.jsxs)("div",{className:"booking-wrapper",children:[Object(h.jsx)("div",{className:"booking-outer",children:Object(h.jsxs)("div",{className:"booking-inner",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Address",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"address",className:"booking-input",required:!0,placeholder:"75 Laurier Avenue East",onChange:e.handleChange,noValidate:!0}),e.errors.address.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.address})]})}),Object(h.jsxs)("div",{className:"booking-inner last",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["City",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"city",className:"booking-input",required:!0,placeholder:"Ottawa",onChange:e.handleChange,noValidate:!0}),e.errors.city.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.city})]}),Object(h.jsx)("div",{className:"booking-outer",children:Object(h.jsxs)("div",{className:"booking-inner",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Postal Code",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"postalcode",className:"booking-input",required:!0,placeholder:"K1N 6N5",onChange:e.handleChange,noValidate:!0}),e.errors.postalcode.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.postalcode})]})})]})]})}function X(e){return 3!==e.currentStep?null:Object(h.jsxs)("div",{className:"booking-outer",children:[Object(h.jsxs)("p",{className:"stepinstructions",children:["Please select a time and date for your delivery"," "]}),Object(h.jsxs)("div",{className:"booking-inner",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Date",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(R.a,{name:"day",className:"calendar date-time",inputProps:{className:"calendar"},onDayChange:e.handleDayChange,value:e.selectedDay,dayPickerProps:{modifiers:{disabled:[{daysOfWeek:e.daysOfWeek},{before:new Date}]}}}),e.errors.selectedDay.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.selectedDay})]})]}),Object(h.jsxs)("div",{className:"booking-inner last",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Time",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"time",name:"time",className:"booking-input date-time",placeholder:"hh-mm",required:!0,onChange:e.handleChange}),e.errors.time.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.time})]})]})}function Y(e){return 4!==e.currentStep?null:Object(h.jsxs)("div",{className:"confirm-appt",children:[Object(h.jsx)("p",{className:"stepinstructions",children:"Due to the event of last-minute cancellations we require all patients to pay online to confirm their order. Any cancellation done at least 48 hours before the scheduled delivery will be fully reimbursed."}),Object(h.jsxs)("div",{className:"booking-outer",children:[Object(h.jsxs)("div",{className:"booking-inner",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Cardholder Name",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"cardholder",size:"20",className:"booking-input",required:!0,placeholder:"John Doe",onChange:e.handleChange,noValidate:!0}),e.errors.cardholder.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.cardholder})]}),Object(h.jsxs)("div",{className:"booking-inner last",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Credit/Debit Card Number",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"cardnumber",size:"20",className:"booking-input",required:!0,placeholder:"xxxx xxxx xxxx xxxx",onChange:e.handleChange,noValidate:!0,maxLength:"19"}),e.errors.cardnumber.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.cardnumber})]})]}),Object(h.jsxs)("div",{className:"booking-outer",children:[Object(h.jsxs)("div",{className:"booking-inner",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["Expiration Date",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"carddate",size:"20",className:"booking-input",required:!0,placeholder:"MM/YY",onChange:e.handleChange,noValidate:!0,maxLength:"5"}),e.errors.carddate.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.carddate})]}),Object(h.jsxs)("div",{className:"booking-inner last",children:[Object(h.jsxs)("label",{className:"booking-form-label",children:["CCV",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"cardccv",size:"20",className:"booking-input",required:!0,placeholder:"xxx",onChange:e.handleChange,noValidate:!0,maxLength:"3"}),e.errors.cardccv.length>0&&Object(h.jsx)("span",{className:"error",children:e.errors.cardccv})]})]})]})}c.a.render(Object(h.jsx)($,{}),document.getElementById("root"));var U=function(){var e=Object(r.useContext)(x).cart,t=0,a=[].concat(e);if(e.length>0){for(var s=0;s<a.length;s+=1)t+=a[s].price;t=parseFloat(t).toFixed(2),a.sort((function(e,t){return e.price-t.price}))}return Object(h.jsxs)("div",{className:"deliveryContainer",children:[Object(h.jsx)("h1",{children:"Online Delivery Form"}),Object(h.jsx)("p",{className:"instructions deliveryInstructions",children:"Follow the instructions and fill up the form below to complete your order."}),Object(h.jsxs)("div",{className:"delivery-wrapper",children:[Object(h.jsx)("div",{className:"cartContainer delivery-cart-container",children:e.length>0?Object(h.jsxs)("div",{className:"delivery-cart-wrapper",children:[Object(h.jsx)("h2",{className:"delivery-cart-title",children:"Your Order"}),a.map((function(e,t){return Object(h.jsx)(P,{product:e},t)})),Object(h.jsx)("p",{className:"totalPrice",children:"Total Price: $"+t})]}):Object(h.jsx)("h2",{className:"no-items",children:"Add products to your order!"})}),Object(h.jsx)(M,{})]})]})},Q=function(e){var t=e.title,a=e.content,s=Object(r.useState)(!1),n=Object(o.a)(s,2),c=n[0],i=n[1];return Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsxs)("div",{className:c?"accordion-title active":"accordion-title",onClick:function(){return i(!c)},children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("h3",{children:c?"-":"+"})]}),c&&Object(h.jsx)("p",{className:"accordion-content",children:a})]})},G=(a(62),a(63),function(){var e=s.a.useState({Orchid:JSON.parse(sessionStorage.getItem("Orchid"))||!1,hyacinth:JSON.parse(sessionStorage.getItem("hyacinth"))||!1,lilly:JSON.parse(sessionStorage.getItem("lilly"))||!1}),t=Object(o.a)(e,2),a=t[0],r=t[1],n=function(e){var t=e.target.checked;r(Object(b.a)(Object(b.a)({},a),{},Object(T.a)({},e.target.name,t)))};return Object(h.jsxs)("div",{className:"customer",children:[Object(h.jsx)("h1",{className:"customerTitle",children:"Welcome to Flower Express"}),Object(h.jsxs)("div",{className:"customerContainer",children:[Object(h.jsx)("p",{className:"instructions",children:"If applicable, please one or more flower preferences below"}),Object(h.jsxs)("div",{className:"checkbox-wrapper",children:[Object(h.jsxs)("label",{children:["Would you like to see our selection of orchids?",Object(h.jsx)("input",{className:"customerInput",type:"checkbox",onChange:n,defaultChecked:a.Orchid,name:"Orchid"})]}),Object(h.jsxs)("label",{children:["Would you like to see our selection of hyacinths?",Object(h.jsx)("input",{className:"customerInput",type:"checkbox",onChange:n,defaultChecked:a.hyacinth,name:"hyacinth"})]}),Object(h.jsxs)("label",{children:["Would you like to see our selection of lillies?",Object(h.jsx)("input",{className:"customerInput",type:"checkbox",onChange:n,defaultChecked:a.lilly,name:"lilly"})]}),Object(h.jsx)("button",{className:"btn",onClick:function(){sessionStorage.setItem("Orchid",JSON.stringify(a.Orchid)),sessionStorage.setItem("hyacinth",JSON.stringify(a.hyacinth)),sessionStorage.setItem("lilly",JSON.stringify(a.lilly)),alert("Succesfully updated your flower preferences!")},children:"Update Flower Preferences"})]})]})]})}),K=function(){return Object(h.jsxs)("div",{className:"faqContainer",children:[Object(h.jsx)("h1",{children:"Help Section"}),Object(h.jsx)("p",{className:"instructions helptext",children:"If you need help please click on one of the dropdown menus below to learn more about us and our services"}),Object(h.jsxs)("div",{className:"accordion",children:[Object(h.jsx)(Q,{title:"Who are we?",content:"We are an online e-commerce company based in Toronto that specializes in importing and selling  exotic flowers that are hard to find at your local florist. No matter the event, we've got you covered!"}),Object(h.jsx)(Q,{title:"How to view our selection of flowers?",content:"Click on the Flower tab to view our selection of flowers. Once redirected to the page, you  can filter through our selection based on types of flowers and price ranges."}),Object(h.jsx)(Q,{title:"How to add a flower to your shopping cart?",content:'Click on the Flower tab to view our selection of flowers. Once redirected to the page,  click on the button titled "View Flower" to learn more about that specific flower. From there click on the  button titled "Add To Cart" to add the flower to your shopping cart.'}),Object(h.jsx)(Q,{title:"How to view & place an order?",content:"Click on the View Order tab to view your order. A form along with your order totals will be shown.  Follow the instructions and fill up the form to complete your online order. Click on the Submit Form button  to submit your order. A confirmation message will appear with your order details. "})]})]})},Z=(a(64),function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)("p",{className:"footer_text",children:"Website designed by Casper the Friendly Ghost"})})}),ee=(a(65),function(e){Object(W.a)(a,e);var t=Object(z.a)(a);function a(e){var r;return Object(V.a)(this,a),(r=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,s=t.value,n=r.state.errors;switch(a){case"fullName":var c=RegExp(/^[a-z][a-z\s]*$/);n.fullName=""===s?"Field cannot be empty":c.test(s.toLowerCase())?"":"Name can only contain letters and spaces";break;case"email":var i=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);n.email=""===s?"Field cannot be empty":i.test(s)?"":"Invalid email address!";break;case"phone":var l=RegExp(/^(\+0?1\s)?\(?\d{3}\)?[\s-]\d{3}[\s-]\d{4}$/);n.phone=""===s?"Field cannot be empty":l.test(s)?"":"Invalid format! Please use (xxx) xxx-xxxx format";break;case"question":n.question=""===s?"Field cannot be empty":""}r.setState(Object(T.a)({errors:n},a,s))},r.handleSubmit=function(e){var t=r.notEmpty();console.log(t),r.validateForm(r.state.errors)&&!0===r.notEmpty()?alert("Success. Thanks for reaching out. we will get back to you as soon as possible!"):(e.preventDefault(),!1===r.notEmpty()?alert("Error: Make sure all fields are filled in!"):alert("Error: Please correct the errors in the form!"))},r.validateForm=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},r.state={fullName:null,email:null,phone:null,question:null,errors:{fullName:"",email:"",phone:"",question:""}},r}return Object(A.a)(a,[{key:"notEmpty",value:function(){return null!=this.state.fullName&&null!=this.state.email&&null!=this.state.phone&&null!=this.state.question}},{key:"render",value:function(){var e=this.state.errors;return Object(h.jsx)("div",{className:"contact",id:"contact",children:Object(h.jsxs)("div",{className:"contact-wrapper",children:[Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Contact Us"})}),Object(h.jsx)("p",{className:"instructions",children:"If you have any questions about any of our services or would like to share your experience please feel free to send us an email with your name and phone number and we will get back to you as soon as possible. Thank you!"}),Object(h.jsxs)("form",{className:"form-wrapper",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(h.jsxs)("div",{className:"question-wrapper",children:[Object(h.jsxs)("label",{className:"form-label",children:["Name ",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"text",name:"fullName",className:"contact-input",placeholder:"John Doe",required:!0,onChange:this.handleChange,noValidate:!0}),e.fullName.length>0&&Object(h.jsx)("span",{className:"error",children:e.fullName})]}),Object(h.jsxs)("div",{className:"question-wrapper",children:[Object(h.jsxs)("label",{className:"form-label",children:["Email ",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"email",name:"email",className:"contact-input",placeholder:"email@example.com",required:!0,onChange:this.handleChange,noValidate:!0}),e.email.length>0&&Object(h.jsx)("span",{className:"error",children:e.email})]}),Object(h.jsxs)("div",{className:"question-wrapper",children:[Object(h.jsxs)("label",{className:"form-label",children:["Phone Number ",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("input",{type:"tel",name:"phone",className:"contact-input",placeholder:"(xxx) xxx-xxxx",required:!0,onChange:this.handleChange,noValidate:!0}),e.phone.length>0&&Object(h.jsx)("span",{className:"error",children:e.phone})]}),Object(h.jsxs)("div",{className:"question-wrapper",children:[Object(h.jsxs)("label",{className:"form-label",children:["Question ",Object(h.jsx)("strong",{className:"required",children:" *"})]}),Object(h.jsx)("textarea",{rows:"4",cols:"25",name:"question",className:"contact-input",placeholder:"Type question here",required:!0,onChange:this.handleChange,noValidate:!0}),e.question.length>0&&Object(h.jsx)("span",{className:"error",children:e.question})]}),Object(h.jsxs)("div",{className:"button-wrapper",children:[Object(h.jsx)("input",{type:"reset",value:"Clear",className:"btn"}),Object(h.jsx)("input",{type:"submit",value:"Submit",className:"btn submit"})]})]})]})})}}]),a}(r.Component));a(66);var te=function(){return Object(h.jsx)("div",{className:"appContainer",id:"appContainer",children:Object(h.jsx)(g,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/3125-L8/",children:Object(h.jsx)(G,{})}),Object(h.jsx)(l.a,{path:"/3125-L8/product",children:Object(h.jsx)(L,{})}),Object(h.jsx)(l.a,{path:"/3125-L8/delivery",children:Object(h.jsx)(U,{})}),Object(h.jsx)(l.a,{path:"/3125-L8/faq",children:Object(h.jsx)(ee,{})}),Object(h.jsx)(l.a,{path:"/3125-L8/help",children:Object(h.jsx)(K,{})})]}),Object(h.jsx)(Z,{})]})})})};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(te,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c148734d.chunk.js.map