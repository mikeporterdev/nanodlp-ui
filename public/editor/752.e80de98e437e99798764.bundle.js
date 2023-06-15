"use strict";(self.webpackChunknanosupport=self.webpackChunknanosupport||[]).push([[752],{825:(e,t,s)=>{s.d(t,{s:()=>l});var r=s(5766),i=s(6269),n=s(5382),a=s.n(n);class l{constructor(e,t){this.editor=e,this.strings=e.strings,this.callback=t}generateAddNetworkPrinterCard(){var e=(new r.sd).setClass("card"),t=(new r.sd).setClass("card-title").setTextContent(this.strings.getKey("printer/networkPrinter"),"printer/networkPrinter"),s=(new r.sd).setClass("card-body one-column").setPadding("1rem 0"),n=(new r.sd).setClass("card-detail-buttons").setMargin("0"),a=(new r.sd).setClass("card-buttons"),l=(new r.y3).setClass("confirm-button").setName("card-buttons").setTextContent(this.strings.getKey("printer/networkPrinter/add"),"printer/networkPrinter/add").onClick((()=>this.checkValidation()));e.add(n.add(t,s.add(this.generateIPandPort())),a.add(l)),this.modal=new i.u(!0,e,"fix-size-modal","network-printer").openModal()}checkValidation(){this.ip_input.dom.inputmask.isComplete()&&this.port_input.dom.inputmask.isComplete()&&"function"==typeof this.callback&&(this.modal.closeModal(),this.callback(this.ip_input.getValue(),this.port_input.dom.inputmask.unmaskedvalue()))}generateIPandPort(){var e=(new r.sd).setClass("plate-name"),t=(new r.sd).setClass("sidebar-header").add(new r.sm(this.strings.getKey("printer/ip&port")).setClass("header")),s=(new r.sd).setClass("ip-port");return this.ip_input=(new r.u3).setValue(""),a()({alias:"ip",regex:"^((25[0-5]|(2[0-4]|1d|[1-9]|)d).?\b){4}$"}).mask(this.ip_input.dom),this.port_input=(new r.u3).setValue(""),a()({regex:"^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$"}).mask(this.port_input.dom),s.add(this.ip_input,new r.sm(":").setClass("header"),this.port_input),e.add(t,s)}}},7752:(e,t,s)=>{s.r(t),s.d(t,{GeneralProfile:()=>h});var r=s(7749),i=s(5766),n=s(6269),a=s(4219),l=s(6510),o=s(825),d=s(9725);class h{printerElements=[];resins=[];printers_array=[];constructor(e,t,s=""){this.editor=e,this.icons=this.editor.icons,this.config=e.config,this.signals=e.signals,this.strings=e.strings,this.callback=t,this.callbackKey=s,this.selectedPrinterProfile=this.config.getItem("selectedPrinterProfile"),this.printers_array=this.config.getItem("printers_array")||[],this.makeUniquePrinters(),this._api=new a.V(e),this.#e()}makeUniquePrinters(){this.printers_array=this.uniqueArray(this.printers_array,"UUID"),this.config.setItem("printers_array",this.printers_array)}uniqueArray(e,...t){var s=Object.create(null);return e.filter((e=>{var r=t.map((t=>e[t])).join("|");if(!s[r])return s[r]=!0,!0}))}emptyList=(new i.sd).setClass("empty-list").setTextContent("No profile detected!");#e(){var e=(new i.sd).setClass("card"),t=(new i.sd).setClass("card-header").add(new i.sm(this.strings.getKey("header/hamburger/settings"),"header/hamburger/settings")),s=(new i.y3).setClass("hover").setIcon("beforeend",this.editor.icons.getKey("controle_button/close")).onClick((()=>{this.modal.closeModal()}));e.add(t.add(s));var r=(new i.sd).setClass("setting-body single-printer");this.printer_listElement=(new i.sd).setId("printer-list").setClass("printer-list"),this.resin_listElement=(new i.sd).setClass("resin-list"),this.refreshBtn=new i.y3,this.reset();var a=(new i.sd).setClass("printer_profile").add(this.generatePrinterPart(),(new i.sd).setClass("vertical-line"),this.generateResinProfilePart());r.add(a,this.generatePreviusProcessPart()),this.modal=new n.u(!1,e.add(r)),this.toggle()}toggle(){this.modal.closeModal(),this.modal.openModal()}onSave(){this.config.setItem("selectedPrinterProfile",this.selectedPrinterProfile),this.signals.printerProfileChanged.dispatch(),this.config.setKey("settings/general/x",this.selectedPrinterProfile.Width),this.config.setKey("settings/general/y",this.selectedPrinterProfile.Height),this.editor.changeGridSize()}generateRefreshBtn(){return this.refreshBtn.setClass("hover svg-14").setIcon("beforeend",this.icons.getKey("controle-buttons/reset")).onClick((()=>{this.sendPrinterListRequest()})),setTimeout((()=>{this.printers_array.length?(this.printer_listElement.clear(),this.resin_listElement.add(this.emptyList),this.generatePrinterListElement(this.printers_array)):this.sendPrinterListRequest()}),100),this.refreshBtn}generatePrinterPart(){var e=(new i.sd).setClass("printer-profile"),t=(new i.sd).setClass("btn-container").add(this.generateRefreshBtn(),this.generateAddPrinterBtn()),s=(new i.sd).setClass("sidebar-header").add(new i.sm(this.strings.getKey("printer/printerList")).setClass("header"),t);return e.add(s,this.printer_listElement)}resetThePrinterListElement(){this.printer_listElement.clear(),this.printer_listElement.add(this.emptyList)}resetTheResinListElement(){this.resin_listElement.clear(),this.resin_listElement.add(this.emptyList)}reset(){this.printers_array.length||this.resetTheResinListElement(),this.printerElements=[],this.printer_listElement.clear()}refreshEffect(){this.refreshBtn.toogleClass("disabled"),this.refreshBtn.toogleClass("refresh-spin"),this.printer_listElement.toogleClass("blur-filter"),this.resin_listElement.toogleClass("blur-filter")}sendPrinterListRequest(){return this.refreshEffect(),new Promise(((e,t)=>{this._api.set("GET","printer/list",{}).then((function(e){return e.json()})).then((t=>{this.refreshEffect(),t.printers_array&&t.printers_array.length&&(this.printers_array=this.printers_array.concat(t.printers_array),this.makeUniquePrinters(),this.reset(),this.generatePrinterListElement(this.printers_array)),e()})).catch((e=>{console.error("Unhandled exception ... ",e),this.refreshEffect(),this.reset(),t()}))}))}generatePrinterListElement(e=[]){for(const t of e){const e=this.generatePrinterListItem(t,!1);this.sendPrinterStatusReqest(e)}}generatePrinterListItem(e,t=!1){const s=this.generatePrinterElement(e,t);return this.printerElements.push(s),this.printer_listElement.add(s.generatePrinterDetails()),s}generatePrinterElement(e,t=!1){const s=new l.F(e);if(s.clickPart.onClick((()=>this.selectPrinter(s))),s.removeBtn.onClick((()=>this.removePrinter(s))),s.icon.setIcon("beforeend",this.icons.getKey("printer")),this.selectedPrinterProfile&&e.UUID==this.selectedPrinterProfile.UUID||t){const e=new Event("click");s.clickPart.dom.dispatchEvent(e)}return s}removePrinter(e){this.selectedPrinterProfile&&this.selectedPrinterProfile.UUID==e.printer_prop.UUID&&(this.resin_listElement.clear(),this.resins=[],this.selectedPrinterProfile={name:"",ip:"",port:"",profile:null,plateName:"",Config:null,UUID:"",Height:125,Width:125},this.onSave()),this.printer_listElement.remove(e.card),this.printers_array=this.printers_array.filter((t=>t.ip!=e.printer_prop.ip&&t.port!=e.printer_prop.port)),this.config.setItem("printers_array",this.printers_array)}generateResinProfilePart(){var e=(new i.sd).setClass("resin-profile"),t=(new i.sd).setClass("sidebar-header").add(new i.sm(this.strings.getKey("printer/resinProfile")).setClass("header"));return e.add(t,this.resin_listElement)}selectPrinter(e){this.updateSelectedPrinterProp(e),this.printerElements.forEach((e=>{e.card.addClass("has-failed"),e.setStatus(e.onlineOrOffline?"ONLINE":"OFFLINE")})),e.card.toogleClass("has-failed"),this.loadingResinList(),this.sendPrinterStatusReqest(e).then((()=>{this.updateSelectedPrinterProp(e),this.selectedPrinterProfile&&this.selectedPrinterProfile.UUID==e.printer_prop.UUID&&(this.resin_listElement.clear(),this.generateResinProfileList(e)),e.setStatus("CONNECT")})).catch((()=>{this.selectedPrinterProfile&&this.selectedPrinterProfile.UUID==e.printer_prop.UUID&&this.resetTheResinListElement()}))}updateSelectedPrinterProp(e){this.selectedPrinterProfile&&this.selectedPrinterProfile.UUID!=e.printer_prop.UUID&&(this.selectedPrinterProfile.profile=null),this.selectedPrinterProfile={...this.selectedPrinterProfile,Config:e.printer_prop.Config,name:e.printer_prop.name,ip:e.printer_prop.ip,port:e.printer_prop.port,UUID:e.printer_prop.UUID,Width:e.printer_prop.Width||125,Height:e.printer_prop.Height||125},this.onSave(),this.updatePrintersArray()}updatePrintersArray(){var e=[];this.printerElements.map((t=>{e.push(t.printer_prop)})),this.printers_array=e,this.makeUniquePrinters()}loadingResinList(){this.resin_listElement.clear();var e=(new i.sd).setClass("resin-loading").add((new i.sd).setClass("spinner"),new i.sm(this.strings.getKey("printer/resinList")).setClass("header"));this.resin_listElement.add(e)}generateResinProfileList(e){if(e.printer_prop&&e.printer_prop.profiles_array&&e.printer_prop.profiles_array.length)for(const t of e.printer_prop.profiles_array){const s=this.generateResinProfileItem(e,t);this.resins.push(s),this.resin_listElement.add(s)}}generateResinProfileItem(e,t){var s=(new i.sd).setClass("printer has-failed"),r=(new i.vF).setClass("data").setTextContent(`ID: ${t.ProfileID} - ${t.Title}`),n=(new i.sd).setClass("printer-icon").setIcon("beforeend",this.icons.getKey("uncheck"));if(s.add(n,r),s.onClick((()=>this.selectResin(s,n,t))),this.selectedPrinterProfile&&e.printer_prop.UUID==this.selectedPrinterProfile.UUID&&this.selectedPrinterProfile.profile&&t.ProfileID==this.selectedPrinterProfile.profile.ProfileID){const e=new Event("click");s.dom.dispatchEvent(e)}return s}selectResin(e,t,s){this.selectedPrinterProfile={...this.selectedPrinterProfile,profile:s},this.onSave(),this.resins.forEach((e=>{e.addClass("has-failed"),e.dom.firstChild.innerHTML="",e.dom.firstChild.insertAdjacentHTML("beforeend",this.icons.getKey("uncheck"))})),e.toogleClass("has-failed"),e.hasClass("has-failed")||(t.clear(),t.setIcon("beforeend",this.icons.getKey("checked")))}scrollToBottom(e){const t=document.getElementById(e);t&&t.scroll({top:t.scrollHeight,behavior:"smooth"})}generateAddPrinterBtn(){return(new i.y3).setClass("hover svg-14").setIcon("beforeend",this.icons.getKey("add")).onClick((()=>{new o.s(this.editor,this.generateNetworkPrinter.bind(this)).generateAddNetworkPrinterCard()}))}generateNetworkPrinter(e,t){if(!e||!t)return;const s={ip:e,name:"UNKNOWN",port:t,profiles_array:[],UUID:r.MathUtils.generateUUID(),Config:{}};this.printers_array.push(s),this.makeUniquePrinters(),this.generatePrinterListItem(s,!0),this.scrollToBottom("printer-list")}sendPrinterStatusReqest(e){if(e&&e.printer_prop)return new Promise(((t,s)=>{this._api.set("GET",`printer/detail/${e.printer_prop.ip}:${e.printer_prop.port}`,{},!1).then((function(e){return e.json()})).then((s=>{e.setStatus("ONLINE"),e.printer_prop=s,e.setName(e.printer_prop.name),t(e.printer_prop)})).catch((t=>{e.setStatus("OFFLINE"),console.error("Unhandled exception ... ",t),s(t)}))}))}generatePreviusProcessPart(){var e=(new i.sd).setClass("button-container-bottom");if("function"==typeof this.callback){const t=(new i.y3).setClass("process disabled").setTextContent(this.strings.getKey(this.callbackKey),this.callbackKey).setAriaLabel(this.strings.getKey(this.callbackKey)).setIcon("beforeend",this.icons.getKey(this.callbackKey)).onClick((()=>{(0,d.jz)(this.editor)&&(this.callback(),this.modal.closeModal())}));this.signals.printerProfileChanged.add((()=>{(0,d.jz)(this.editor)?t.removeClass("disabled"):t.addClass("disabled")})),e.add(t)}return e}}},6510:(e,t,s)=>{s.d(t,{F:()=>n});var r=s(5766),i=s(3758);class n extends r.u1{card=(new r.sd).setClass("printer has-failed");icon=(new r.sd).setClass("printer-icon");status=(new r.vF).setClass("data signal");name=(new r.vF).setClass("data");removeBtn=(new r.y3).setIcon("beforeend",(0,i.P)().getKey("remove"));printer_prop;onlineOrOffline=!1;clickPart=(new r.sd).setClass("click-part");constructor(e){super(),this.printer_prop=e,this.setName(this.printer_prop.name),this.setStatus("OFFLINE")}setStatus(e){switch(this.status.setTextContent(e),e){case"OFFLINE":this.status.removeClass("online"),this.status.addClass("offline"),this.onlineOrOffline=!1;break;case"ONLINE":this.status.removeClass("offline"),this.status.addClass("online"),this.onlineOrOffline=!0}}generatePrinterDetails(){var e=(new r.ZK).setClass("printer-details").add((new r.yo).add(this.name),(new r.yo).add(this.status),(new r.yo).add((new r.vF).setClass("data").setTextContent(`${this.printer_prop.ip}:${this.printer_prop.port}`))),t=(new r.sd).setClass("printer-button");const s=(new r.y3).setIcon("beforeend",(0,i.P)().getKey("open_in_new")).onClick((()=>{window.open(`http://${this.printer_prop.ip}:${this.printer_prop.port}`,"_blank").focus()}));return t.add(s,this.removeBtn),this.card.add(this.clickPart.add(this.icon,e),t),this.card}setName(e){return this.name.setTextContent(e||"UNKNOWN")}}}}]);