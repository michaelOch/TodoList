!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);e.exports=function(){return n(o),o}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},function(e,t){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,r=n;return[r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]]].join("")}},function(e,t,n){var o=n(3),r=n(4),a=r;a.v1=o,a.v4=r,e.exports=a},function(e,t,n){var o,r,a=n(0),i=n(1),l=0,c=0;e.exports=function(e,t,n){var s=t&&n||0,d=t||[],u=(e=e||{}).node||o,p=void 0!==e.clockseq?e.clockseq:r;if(null==u||null==p){var m=a();null==u&&(u=o=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==p&&(p=r=16383&(m[6]<<8|m[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,y=f-l+(v-c)/1e4;if(y<0&&void 0===e.clockseq&&(p=p+1&16383),(y<0||f>l)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,c=v,r=p;var g=(1e4*(268435455&(f+=122192928e5))+v)%4294967296;d[s++]=g>>>24&255,d[s++]=g>>>16&255,d[s++]=g>>>8&255,d[s++]=255&g;var b=f/4294967296*1e4&268435455;d[s++]=b>>>8&255,d[s++]=255&b,d[s++]=b>>>24&15|16,d[s++]=b>>>16&255,d[s++]=p>>>8|128,d[s++]=255&p;for(var h=0;h<6;++h)d[s+h]=u[h];return t||i(d)}},function(e,t,n){var o=n(0),r=n(1);e.exports=function(e,t,n){var a=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var l=0;l<16;++l)t[a+l]=i[l];return t||r(i)}},function(e,t,n){"use strict";n.r(t);var o=class{constructor(e,t,n=[]){this.name=e,this.creationDate=t,this.list=n}getName(){return this.name}getCreationDate(){return this.creationDate}addToProject(e){return this.list.push(e)}removeFromProject(e,t){e.forEach(e=>{}),this.list.splice(t,1)}};var r=class{addTodoToList(e,t){const n=t.priority?"red-text":"",o=document.createElement("li");o.className="collection-item",o.innerHTML=`\n            <label class="title-label">\n                <input type="checkbox" class="filled-in"/>\n                <span class="${n}">${t.title}</span>\n                <a href="" class="secondary-content">\n                    <i class="material-icons left delete">close</i>\n                </a>\n                <a href="#editTodo" class="secondary-content modal-trigger">\n                    <i class="material-icons left edit">edit</i>\n                </a>\n            </label>`,o.setAttribute("data-attribute",String(e)),document.querySelector(".collection").appendChild(o)}addTodoToListFromStore(e){const t=e.priority?"red-text":"",n=document.createElement("li");n.className="collection-item",n.innerHTML=`\n            <label class="title-label">\n                <input type="checkbox" class="filled-in" ${e.isComplete?"checked":""} />\n                <span class="${t}" style="${e.isComplete?"text-decoration: line-through":""}">${e.title}</span>\n                <a href="" class="secondary-content">\n                    <i class="material-icons left delete">close</i>\n                </a>\n                <a href="#editTodo" class="secondary-content modal-trigger">\n                    <i class="material-icons left edit">edit</i>\n                </a>\n            </label>`,n.setAttribute("data-attribute",`${e.id}`),document.querySelector(".collection").appendChild(n)}removeTodoFromList(e){confirm("Are you sure you want to delete task?")&&e.parentElement.parentElement.parentElement.remove()}updateTodoList(){}};var a=function(e){const t=document.createElement("div");return t.innerHTML=`\n        <form class="col s12">\n            <div class="row">\n                <div class="input-field col s12">\n                    <input id="title" type="text" class="">\n                    <label for="title">Title</label>\n                </div>\n                <div class="input-field col s12">\n                    <input id="description" type="text" class="">\n                    <label for="description">Description</label>\n                </div>\n                <div class="input-field col s12">\n                    <a href="" class="prefix">\n                        <i class="material-icons left date">date_range</i>\n                    </a>\n                    <input id="dueDate" type="text" class="" placeholder="dd-mm-yy">\n                    <label for="dueDate">Due Date</label>\n                </div>\n                <p class="col s12">\n                    <label for="priority">\n                        <input id="priority" type="checkbox" class="filled-in">\n                        <span>Priority<span>\n                    </label>\n                </p>\n                <button class="btn" type="submit" id="add-task">\n                    Add New Task\n                </button>\n            </div>\n        </form>\n        <h5>${e}</h5>\n        <ul class="collection"></ul>\n    `,t};var i=function(){const e=document.createElement("div");return e.innerHTML='\n        <h4>New Project</h4>\n        <div class="row">\n            <form class="col s12" id="project-form">\n                <div class="row">\n                    <div class="input-field col s12">\n                        <input id="project-name" type="text">\n                        <label for="project-name">Project Name</label>\n                    </div>\n                    <button class="btn waves-effect waves-light" type="submit" id="add-project-btn">\n                        Add Project\n                    </button>\n                </div>\n            </form>\n        </div>\n    ',e};var l=class{addMenuToNav(e){const t=document.createElement("li");t.innerHTML=`\n            <a href="" class="project">${e}</a></li>\n        `;const n=t.cloneNode(!0);document.querySelector("#nav-ul").appendChild(t),document.querySelector(".sidenav").appendChild(n)}};class c{static getTodo(e){let t;return t=null===localStorage.getItem(e)?[]:JSON.parse(localStorage.getItem(e)),t}static displayListOfProjects(){for(let e=0;e<localStorage.length;e++){(new l).addMenuToNav(localStorage.key(e))}}static displayTodo(e){c.getTodo(e).forEach((function(e){(new r).addTodoToListFromStore(e)}))}static addTodo(e,t){const n=c.getTodo(e);n.push(t),localStorage.setItem(e,JSON.stringify(n))}static removeTodo(e,t){const n=c.getTodo(e);n.forEach((function(e,o){e.id==t&&n.splice(o,1)})),localStorage.setItem(e,JSON.stringify(n))}static updateTodo(e,t){const n=c.getTodo(e).map(e=>(e.id===t&&(e.isComplete=!e.isComplete,console.log(`isComplete: ${e.isComplete}`)),e));localStorage.setItem(e,JSON.stringify(n))}static editTodo(e,t){const n=c.getTodo(e).filter(e=>e.id===t);return console.log(n),n}static updateEdittedTodo(e,t,n,o,r,a){const i=c.getTodo(e).map(e=>(e.id===t&&(e.title=n,e.description=o,e.dueDate=r,e.priority=a),e));localStorage.setItem(e,JSON.stringify(i))}}var s=c;var d=class{constructor(e,t,n,o,r){this.id=e,this.title=t,this.description=n,this.dueDate=o,this.priority=r,this.isComplete=!1}},u=n(2),p=n.n(u);var m=function(e,t,n,o,r){const a=document.createElement("div");return a.className="bg-modal",a.innerHTML=`\n        <div class="edit-content">\n            <div class="close">+</div>\n            <form class="col s12">\n                <h4>Edit Todo</h4>\n                <div class="row">\n                    <input id="edit-id" type="hidden" class="" value="${e}">\n                    <div class="input-field col s12">\n                        <input id="edit-title" type="text" class="" value="${t}">\n                        <label for="edit-title">Title</label>\n                    </div>\n                    <div class="input-field col s12">\n                        <input id="edit-description" type="text" class="" value="${n}">\n                        <label for="edit-description">Description</label>\n                    </div>\n                    <div class="input-field col s12">\n                        <a href="" class="prefix">\n                            <i class="material-icons left date">date_range</i>\n                        </a>\n                        <input id="edit-dueDate" type="text" class="" placeholder="dd-mm-yy" value="${o}">\n                        <label for="edit-dueDate">Due Date</label>\n                    </div>\n                    <p class="col s12">\n                        <label for="edit-priority">\n                            <input id="edit-priority" type="checkbox" class="filled-in" ${r?"checked":""} >\n                            <span>Priority<span>\n                        </label>\n                    </p>\n                    <button class="btn waves-effect waves-light" type="submit" id="edit-task">\n                        Submit\n                    </button>\n                </div>\n            </form>\n        </div>\n    `,a};document.addEventListener("DOMContentLoaded",s.displayListOfProjects);const f=document.querySelector("#content");f.innerHTML=`${a("Project 1").outerHTML}`,s.displayTodo("Project 1"),document.body.addEventListener("click",(function(e){if(console.log(e.target),(e.target.classList.contains("new-project")||e.target.parentElement.classList.contains("new-project"))&&(f.innerHTML=`${i().outerHTML}`,e.preventDefault()),e.target.classList.contains("project")&&(f.dataset.project=e.target.textContent,console.log(f.dataset.project),f.innerHTML=`${a(e.target.textContent).outerHTML}`,s.displayTodo(e.target.textContent),e.preventDefault()),"add-project-btn"===e.target.id){const t=document.querySelector("#project-name").value,n=new o(t,Date.now());console.log(n);const r=document.querySelector(".sidenav"),a=document.querySelector("#nav-ul"),i=document.createElement("li");i.innerHTML=`<a href="" class="project">${n.getName()}</a>`;const l=i.cloneNode(!0);r.appendChild(i),a.appendChild(l),console.log(n),document.querySelector("#project-name").value="",e.preventDefault()}if("add-task"===e.target.id){if(""!==document.querySelector("#title").value){const e=p.a.v4(),t=document.querySelector("#title").value,n=document.querySelector("#description").value,o=document.querySelector("#dueDate").value,a=document.querySelector("#priority").checked,i=new d(e,t,n,o,a);(new r).addTodoToList(e,i),s.addTodo(f.dataset.project,i),document.querySelector("#title").value=document.querySelector("#description").value=document.querySelector("#dueDate").value="",document.querySelector("#priority").checked=!1}else alert("You have to fill out form!");e.preventDefault()}if(e.target.classList.contains("delete")){(new r).removeTodoFromList(e.target),console.log(e.target.parentElement.parentElement.parentElement.getAttribute("data-attribute")),s.removeTodo(f.dataset.project,e.target.parentElement.parentElement.parentElement.getAttribute("data-attribute")),e.preventDefault()}if(e.target.classList.contains("edit")){const t=e.target.parentElement.parentElement.parentElement.getAttribute("data-attribute"),n=s.editTodo(f.dataset.project,t);console.log(n),document.body.appendChild(m(n[0].id,n[0].title,n[0].description,n[0].dueDate,n[0].priority)),document.querySelector(".bg-modal").style.display="flex",e.preventDefault()}if(e.target.classList.contains("close")&&(document.querySelector(".bg-modal").style.display="none"),"edit-task"===e.target.id){const t=document.querySelector("#edit-id").value,n=document.querySelector("#edit-title").value,o=document.querySelector("#edit-description").value,r=document.querySelector("#edit-dueDate").value,a=document.querySelector("#edit-priority").checked;s.updateEdittedTodo(f.dataset.project,t,n,o,r,a),document.querySelector(".bg-modal").style.display="none",e.preventDefault()}e.target.classList.contains("filled-in")&&(console.log(e.target.parentElement.parentElement.getAttribute("data-attribute")),s.updateTodo(f.dataset.project,e.target.parentElement.parentElement.getAttribute("data-attribute")))}))}]);