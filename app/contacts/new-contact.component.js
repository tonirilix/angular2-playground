System.register(["angular2/core","./contact.service","angular2/router"],function(t){var e,n,a,i,o,r=this&&this.__decorate||function(t,e,n,a){var i,o=arguments.length,r=3>o?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(3>o?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},l=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t},function(t){a=t,i=t}],execute:function(){o=function(){function t(t,e,n){this._contactService=t,this._router=e,this._routeParam=n,this.passedLastName=""}return t.prototype.onAddContact=function(t,e,n,a,i){var o={id:t,firstName:e,lastName:n,phone:a,email:i};this._contactService.insertContact(o),this._router.navigate(["Contacts"])},t.prototype.ngOnInit=function(){this.passedLastName=this._routeParam.get("lastName")},t=r([e.Component({template:'        \n        <div>\n            <div>\n            <label for="id">Id:</label>              \n            <input type="text" id="id" #id>\n            </div>\n            <div>\n            <label for="first-name">First Name:</label>              \n            <input type="text" id="first-name" #firstName>\n            </div>\n            <div>\n            <label for="last-name">Last Name:</label>                        \n            <input type="text" id="last-name" #lastName value="{{passedLastName}}">\n            </div>\n            <div>\n            <label for="phone">Phone Number:</label>\n            <input type="text" id="phone" #phone>\n            </div>\n            <div>\n            <label for="email">Email:</label> \n            <input type="text" id="email" #email>\n            </div>\n            <button (click)="onAddContact(id.value, firstName.value, lastName.value, phone.value, email.value)">Create contact</button>\n        </div>\n    ',providers:[n.ContactService],styles:["\n        label {\n            display: inline-block;\n            width: 140px;\n        }\n        \n        input {\n            width: 250px;\n        }\n    "]}),l("design:paramtypes",[n.ContactService,a.Router,i.RouteParams])],t)}(),t("NewContactComponent",o)}}});