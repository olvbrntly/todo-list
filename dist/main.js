(()=>{"use strict";class t{constructor(t,e,s,o){this.title=t,this.description=e,this.star=Boolean(s),this.date=o}setTitle(t){this.name=t}setDescription(t){this.description=t}setStar(t){this.star=t}setDate(t){this.date=t}getTitle(t){return this.title}getDescription(t){return this.description}getStar(t){return this.star}getDate(t){return this.date}}let e=[],s=new t("study bio","bio study description","true","today");console.log(s.getTitle()),console.log(s),e.push(s),console.log("in the array"),console.log(e[0].getDescription()),console.log(e),console.log("after new task"),t("study math","im gonna study math","true","tomorrow"),console.log(e)})();