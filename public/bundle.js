(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,"*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    background-color:#ebeced;\r\n}\r\n/* Extra small devices (phones, 600px and down) */\r\n@media only screen and (max-width: 600px) {\r\n    .container{\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {\r\n    .container{\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {\r\n    .container{\r\n        grid-template-columns: 4fr 8fr;\r\n    }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {\r\n    .container{\r\n        grid-template-columns: 3fr 9fr;\r\n    }\r\n}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {\r\n    .container{\r\n        grid-template-columns: 2fr 10fr;\r\n    }\r\n}\r\n.container{\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n\r\n}\r\n\r\n.sidebar{\r\n    background-color: rgb(13, 0, 97);\r\n    border-top-left-radius:100px ;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 16px 12px;\r\n    height: 100vh;\r\n\r\n}\r\n\r\n.maincontent{\r\n    padding: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    row-gap: 30px;\r\n}\r\n\r\n.main-top-bar{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 80px;\r\n    width: 100%;\r\n    border-radius: 7px;\r\n    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);\r\n    background-color:#fff;\r\n    padding: 16px;\r\n}\r\n\r\n.main-bottom{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 80px;\r\n    width: 100%;\r\n    border-radius: 7px;\r\n    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);\r\n    background-color:#fff;\r\n    padding: 16px;\r\n}\r\n\r\n.title-box{\r\n border-bottom: 1px solid rgb(185, 180, 255);\r\nheight: 20%;\r\n \r\n}\r\n\r\n.notelist-box{\r\n border-bottom: 1px solid rgb(185, 180, 255);\r\n height: 60%;\r\n\r\n \r\n}\r\n\r\n\r\n\r\n.button-box{\r\n  border-bottom: 1px solid rgb(185, 180, 255);\r\n  padding: 10px 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 20%;\r\n\r\n}\r\n\r\n.app-title{\r\n    color: #fff;\r\n    font-size: 25px;\r\n    font-weight: 900;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    float: left;\r\n    margin-left: 30px;\r\n}\r\n\r\n\r\n\r\n.btn{\r\n padding: 15px 25px;\r\n color: #fff;\r\n cursor: pointer;\r\n transition: .5s ease-in;\r\n border: none;\r\n outline: none;\r\n border-radius: 7px;\r\n \r\n}\r\n\r\n.btn-success{\r\n background-color: rgb(0, 156, 70);\r\n width: 80%;\r\n}\r\n\r\n.btn-success:hover{\r\n    background-color:rgb(0, 122, 55);\r\n}\r\n\r\n.notelist-ul{\r\n padding: 16px 0;\r\n width: 100%;\r\n height:100%;\r\n overflow-y: scroll;\r\n height: 100%;\r\n}\r\n\r\n.notelist-ul::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.note-list-item{\r\n  border: 1px solid #fff;\r\n  border-radius: 7px;\r\n  padding: 16px;\r\n  margin-bottom: 7px;\r\n}\r\n.note-title{\r\n color: #fff;\r\n margin-bottom: 12px;\r\n font-weight: 700;\r\n font-size: 18px;\r\n}\r\n.note-description{\r\ncolor: rgb(163, 163, 163);\r\nmargin-bottom: 7px;\r\n}\r\n.note-date{\r\n    color: rgb(163, 163, 163);\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.notes-list-trash {\r\n    width: 35px;\r\n    height: 35px;\r\n    background: #fff;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: red;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .notes-list-item-selected {\r\n    background: #eeeeee;\r\n    color: #7c7c7c;\r\n    border-radius: 7px;\r\n    font-weight: bold;\r\n    \r\n  }\r\n\r\n  .notes-list-item-selected > .item-header > .note-title {\r\n    color: #7c7c7c;\r\n  }\r\n\r\n  .item-header{\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: space-between;\r\n  }\r\n\r\n  .inputtitle,.inputbody{\r\n      height: 100%;\r\n      width: 100%;\r\n      border: none;\r\n      outline: none;\r\n  }\r\n  ",""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=e(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,t){var e=t.domAPI(t);e.update(n);return function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var l=r(n,o),c=0;c<i.length;c++){var d=e(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{function n(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return s=n.done,n},e:function(n){l=!0,a=n},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw a}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var o=function(){function t(n,e){var r=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=n;var o=e.onNoteAdd,i=e.onNoteEdit,a=e.onNoteSelect,s=e.onNoteDelete;this.onNoteAdd=o,this.onNoteEdit=i,this.onNoteSelect=a,this.onNoteDelete=s,this.root.innerHTML='\n               \n                <div class="sidebar">\n                    <div class="title-box">\n                        <p class="app-title">NOTE APP</p>\n                    </div>\n                    <div class="notelist-box">\n                        <ul class="notelist-ul">\n                           \n                        </ul>\n                    </div>\n                    <div class="button-box">\n                        <button class="btn btn-success addbtn">ADD NOTE</button>\n                    </div>\n                </div>\n                <div class="maincontent">\n                    <div class="main-top-bar">\n                        <input type="text" class="inputtitle" />\n                    </div>\n                    <div class="main-bottom">\n                        <textarea class="inputbody"></textarea>\n                    </div>\n                </div>\n           \n        ';var l=this.root.querySelector(".addbtn"),c=this.root.querySelector(".inputtitle"),d=this.root.querySelector(".inputbody");l.addEventListener("click",(function(){r.onNoteAdd()})),[c,d].forEach((function(n){n.addEventListener("blur",(function(){var n=d.value.trim(),t=c.value.trim();r.onNoteEdit(t,n)}))})),this.updateNotePreviewVisibility(!1)}var e,o,i;return e=t,(o=[{key:"_creatListItemHtml",value:function(n,t,e,r){return'\n            <li class="note-list-item" data-note-id="'.concat(n,'" >\n                <div class = "item-header">\n                <p class="note-title">').concat(t,'</p>\n                <span class="notes-list-trash" data-note-id="').concat(n,'">\n                <i class="far fa-trash-alt"></i>\n                </span>\n                </div>\n                <p class="note-description">\n                ').concat(e.substring(0,50),"\n                ").concat(e.length>50?"...":"",'\n                </p>\n                <p class="note-date">\n                    ').concat(new Date(r).toLocaleString(void 0,{dateStyle:"full",timeStyle:"short"}),"\n                </p>\n            </li>\n        ")}},{key:"updateNoteList",value:function(t){var e=this,r=this.root.querySelector(".notelist-ul");r.innerHTML="";var o,i="",a=n(t);try{for(a.s();!(o=a.n()).done;){var s=o.value,l=s.id,c=s.title,d=s.body,u=s.updated;i+=this._creatListItemHtml(l,c,d,u)}}catch(n){a.e(n)}finally{a.f()}r.innerHTML=i,r.querySelectorAll(".note-list-item").forEach((function(n){n.addEventListener("click",(function(){e.onNoteSelect(n.dataset.noteId)}))})),r.querySelectorAll(".notes-list-trash").forEach((function(n){n.addEventListener("click",(function(t){t.stopPropagation(),e.onNoteDelete(n.dataset.noteId)}))}))}},{key:"updateActiveNote",value:function(n){this.root.querySelector(".inputtitle").value=n.title,this.root.querySelector(".inputbody").value=n.body,this.root.querySelectorAll(".note-list-item").forEach((function(n){n.classList.remove("notes-list-item-selected")})),this.root.querySelector('.note-list-item[data-note-id="'.concat(n.id,'"]')).classList.add("notes-list-item-selected")}},{key:"updateNotePreviewVisibility",value:function(n){this.root.querySelector(".maincontent").style.visibility=n?"visible":"hidden"}}])&&r(e.prototype,o),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var a=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,r;return t=n,r=[{key:"getAllNotes",value:function(){return(JSON.parse(localStorage.getItem("notes-app"))||[]).sort((function(n,t){return new Date(n.updated)>new Date(t.updated)?-1:1}))}},{key:"saveNote",value:function(t){var e=n.getAllNotes(),r=e.find((function(n){return n.id==t.id}));r?(r.title=t.title,r.body=t.body,r.updated=(new Date).toISOString()):(t.id=(new Date).getTime(),t.updated=(new Date).toISOString(),e.push(t)),localStorage.setItem("notes-app",JSON.stringify(e))}},{key:"deleteNote",value:function(t){var e=n.getAllNotes().filter((function(n){return n.id!=t}));localStorage.setItem("notes-app",JSON.stringify(e))}}],(e=null)&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();function s(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var l=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.notes=[],this.activeNote=null,this.view=new o(t,this._handlers()),this._refreshNotes()}var t,e,r;return t=n,(e=[{key:"_refreshNotes",value:function(){var n=a.getAllNotes();this._setNotes(n),n.length>0&&this._setActiveNote(n[0])}},{key:"_setNotes",value:function(n){this.notes=n,this.view.updateNoteList(n),this.view.updateNotePreviewVisibility(n.length>0)}},{key:"_setActiveNote",value:function(n){this.activeNote=n,this.view.updateActiveNote(n)}},{key:"_handlers",value:function(){var n=this;return{onNoteAdd:function(){a.saveNote({title:"New Note",body:"Take Some Note"}),n._refreshNotes()},onNoteEdit:function(t,e){a.saveNote({id:n.activeNote.id,title:t,body:e}),n._refreshNotes()},onNoteSelect:function(t){var e=n.notes.find((function(n){return n.id==t}));n._setActiveNote(e)},onNoteDelete:function(t){a.deleteNote(t),n._refreshNotes()}}}}])&&s(t.prototype,e),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}(),c=e(379),d=e.n(c),u=e(795),p=e.n(u),f=e(569),h=e.n(f),v=e(565),b=e.n(v),m=e(216),y=e.n(m),g=e(589),x=e.n(g),w=e(426),N={};N.styleTagTransform=x(),N.setAttributes=b(),N.insert=h().bind(null,"head"),N.domAPI=p(),N.insertStyleElement=y();d()(w.Z,N);w.Z&&w.Z.locals&&w.Z.locals;new l(document.getElementById("app"))})()})();