const DB_KEY="asesmen_lms_v1";
const DEFAULT_DB={school:{name:"SD Daya Susila",npsn:"",address:"",headmaster:""},students:[],cptp:[],blueprints:[],questions:[],rubrics:[],assessments:[],results:[],lessons:[],workflow:{},user:null};
function loadDB(){try{return {...structuredClone(DEFAULT_DB),...JSON.parse(localStorage.getItem(DB_KEY)||"{}")}}catch(e){return structuredClone(DEFAULT_DB)}}
let db=loadDB();
function saveDB(){localStorage.setItem(DB_KEY,JSON.stringify(db));const s=document.getElementById("saveStatus");if(s)s.textContent="Tersimpan "+new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}
function uid(prefix="ID"){return prefix+"-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).slice(2,5).toUpperCase()}
function esc(v=""){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2400)}
function phaseForClass(k){return k<=2?"Fase A":k<=4?"Fase B":"Fase C"}
const DISTRIBUTION={1:{pg:10,mcma:0,match:5,short:5,essay:0,total:20,time:"60–90 menit"},2:{pg:15,mcma:0,match:5,short:5,essay:0,total:25,time:"60–90 menit"},3:{pg:15,mcma:0,match:5,short:5,essay:5,total:30,time:"90–120 menit"},4:{pg:15,mcma:5,match:5,short:5,essay:5,total:35,time:"90–120 menit"},5:{pg:20,mcma:5,match:5,short:5,essay:5,total:40,time:"90–120 menit"},6:{pg:20,mcma:5,match:5,short:5,essay:5,total:40,time:"90–120 menit"}};
function soloLevel(score){if(score<=20)return["Prastruktural","SOLO_1"];if(score<=40)return["Unistruktural","SOLO_2"];if(score<=65)return["Multistruktural","SOLO_3"];if(score<=85)return["Relasional","SOLO_4"];return["Abstrak Mendalam","SOLO_5"]}
function downloadFile(name,content,type="application/json"){const a=document.createElement("a"),url=URL.createObjectURL(new Blob([content],{type}));a.href=url;a.download=name;a.click();URL.revokeObjectURL(url)}